
import cron from 'node-cron';
import dotenv from 'dotenv';
import { sendInvoiceCreatedAlert } from './emailService.js';
import { sendSlackAlert } from './slackService.js';
import supabase from './supabaseClient.js';

dotenv.config();

export function startDailyScheduler() {
  cron.schedule('0 9 * * *', async () => {
    console.log('⏰ Running daily alert scheduler...');

    // Overdue invoices (> 30 days)
    const { data: invoices, error: invoiceError } = await supabase
      .from('invoices')
      .select('*')
      .eq('status', 'unpaid');

    if (invoiceError) {
      console.error('Failed to fetch invoices:', invoiceError);
      return;
    }

    const now = new Date();
    const overdue = invoices.filter(i => {
      const diff = (now - new Date(i.invoice_date)) / (1000 * 60 * 60 * 24);
      return diff > 30;
    });

    for (let inv of overdue) {
      await sendInvoiceCreatedAlert(inv); // Reuse alert
      await sendSlackAlert(`🚨 Overdue Invoice #${inv.id} for $${inv.amount} (dated ${inv.invoice_date})`);
    }

    // Agreements expiring in 15 days
    const { data: agreements, error: agreementError } = await supabase
      .from('agreements')
      .select('*');

    const expiring = agreements.filter(a => {
      const daysLeft = (new Date(a.end_date) - now) / (1000 * 60 * 60 * 24);
      return daysLeft < 15 && daysLeft > 0;
    });

    for (let ag of expiring) {
      await sendSlackAlert(`📆 Agreement "${ag.title}" is expiring in ${Math.round((new Date(ag.end_date) - now) / (1000 * 60 * 60 * 24))} days.`);
    }
  });
}
