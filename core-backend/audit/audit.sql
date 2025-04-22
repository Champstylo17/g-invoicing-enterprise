
create table audit_logs (
  id uuid primary key default uuid_generate_v4(),
  action text,
  user_email text,
  context jsonb,
  created_at timestamp default now()
);
