
-- Supabase SQL schema for Orders
create table if not exists orders (
  id serial primary key,
  agreement_id int references agreements(id) on delete cascade,
  description text,
  amount numeric,
  status text
);

alter table orders enable row level security;

create policy "Authenticated users can access orders"
  on orders for all
  using (auth.uid() is not null);
