-- Shared schema between VB and Node
CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255),
  amount DECIMAL(10, 2),
  due_date DATE
);