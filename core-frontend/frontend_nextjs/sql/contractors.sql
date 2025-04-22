
-- Supabase SQL schema for Contractors
create table if not exists contractors (
  id serial primary key,
  contractor_name text not null,
  agency_id int references agencies(id) on delete set null,
  payment_terms text
);

-- Row-Level Security
alter table contractors enable row level security;

-- Policy: allow read/write if user is authenticated
create policy "Allow contractor access for authenticated users"
  on contractors for all
  using (auth.uid() is not null);
