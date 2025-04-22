-- Supabase initialization SQL for G-Invoicing
-- Run this via Supabase CLI or SQL Editor

create schema if not exists ginvoicing;

create table if not exists ginvoicing.invoices (
    id uuid primary key default gen_random_uuid(),
    description text not null,
    amount numeric not null,
    status varchar(50) default 'pending',
    created_at timestamptz default now()
);

-- Enable RLS (row-level security)
alter table ginvoicing.invoices enable row level security;

-- Example policy for authenticated users
create policy "Allow all for authenticated"
on ginvoicing.invoices
for all
using (auth.role() = 'authenticated');