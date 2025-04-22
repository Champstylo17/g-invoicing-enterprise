-- GT&C Agreements
create table igt_gtc_agreements (
  id uuid primary key default gen_random_uuid(),
  title text,
  buyer_agency text,
  seller_agency text,
  status text,
  terms jsonb,
  created_at timestamp default now()
);

create table igt_orders (
  id uuid primary key default gen_random_uuid(),
  gtc_id uuid references igt_gtc_agreements(id),
  buyer text,
  seller text,
  amount numeric,
  status text,
  line_items jsonb,
  created_at timestamp default now()
);

create table igt_performance (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references igt_orders(id),
  description text,
  quantity int,
  delivered_at timestamp,
  ipac_settled boolean default false,
  notes text
);

create table gtc_audit_logs (
  id uuid primary key default gen_random_uuid(),
  gtc_id uuid,
  user_id uuid,
  old_status text,
  new_status text,
  timestamp timestamp default now()
);
