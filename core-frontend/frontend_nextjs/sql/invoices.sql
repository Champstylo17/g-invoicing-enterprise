
-- Supabase SQL schema for Invoices
create table if not exists invoices (
  id serial primary key,
  performance_id int,
  amount numeric,
  invoice_date date,
  status text
);

alter table invoices enable row level security;

create policy "Authenticated users can access invoices"
  on invoices for all
  using (auth.uid() is not null);
