
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

export async function generateInvoicePDF(invoice) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  page.drawText(`Invoice #${invoice.id} - Amount: $${invoice.amount}`, { x: 50, y: 350 });
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(`public/exports/invoice_${invoice.id}.pdf`, pdfBytes);
}
