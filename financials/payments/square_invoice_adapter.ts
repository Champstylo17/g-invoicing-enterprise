// Square Invoice Adapter
export function transformSquareInvoice(data: any) {
  return {
    id: data.id,
    client: data.customer_id,
    amount: data.amount_money.amount / 100,
    due_date: data.due_date
  };
}