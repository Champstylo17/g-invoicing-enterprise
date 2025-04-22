
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createInvoice(amount, customerEmail) {
  const customer = await stripe.customers.create({ email: customerEmail });
  const invoice = await stripe.invoices.create({
    customer: customer.id,
    auto_advance: true,
    collection_method: 'send_invoice',
    days_until_due: 30
  });
  return invoice;
}
