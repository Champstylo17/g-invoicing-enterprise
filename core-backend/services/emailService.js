
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function sendInvoiceCreatedAlert(invoice) {
  const info = await transporter.sendMail({
    from: `"G-Invoicing" <${process.env.EMAIL_USER}>`,
    to: process.env.ALERT_RECIPIENT,
    subject: `🧾 New Invoice Created: #${invoice.id}`,
    text: `An invoice of $${invoice.amount} has been created for performance ID ${invoice.performance_id} on ${invoice.invoice_date}.`,
    html: `<h3>New Invoice Created</h3><p>Invoice ID: ${invoice.id}</p><p>Amount: <b>$${invoice.amount}</b></p><p>Date: ${invoice.invoice_date}</p>`
  });

  console.log('📨 Invoice alert sent:', info.messageId);
}
