CREATE TABLE agency (
  agency_id VARCHAR(36),
  name VARCHAR(100),
  type VARCHAR(50),
  contact_info VARCHAR(150)
);

CREATE TABLE interagency_agreement (
  iaa_id VARCHAR(36),
  agency_id VARCHAR(36),
  partner_agency_id VARCHAR(36),
  agreement_type VARCHAR(20),
  status VARCHAR(20),
  funding_amount DECIMAL(15,2)
);

CREATE TABLE order (
  order_id VARCHAR(36),
  iaa_id VARCHAR(36),
  amount DECIMAL(15,2),
  status VARCHAR(20),
  performance_completion_date DATE
);

CREATE TABLE performance (
  performance_id VARCHAR(36),
  order_id VARCHAR(36),
  milestone VARCHAR(100),
  completion_status VARCHAR(20),
  remarks TEXT
);

CREATE TABLE invoice (
  invoice_id VARCHAR(36),
  order_id VARCHAR(36),
  amount_billed DECIMAL(15,2),
  status VARCHAR(20),
  treasury_approval TEXT
);

CREATE TABLE treasury_integration (
  treasury_id VARCHAR(36),
  invoice_id VARCHAR(36),
  gtas_validation TEXT,
  payment_status VARCHAR(20)
);

