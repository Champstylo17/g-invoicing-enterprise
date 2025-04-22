
-- Supabase SQL schema for Agreements
create table if not exists agreements (
  id serial primary key,
  title text not null,
  start_date date,
  end_date date,
  status text,
  agency_id int references agencies(id) on delete set null
);

-- Row-Level Security
alter table agreements enable row level security;

-- Policy: allow read/write if user is authenticated
create policy "Allow access for authenticated users"
  on agreements for all
  using (auth.uid() is not null);
