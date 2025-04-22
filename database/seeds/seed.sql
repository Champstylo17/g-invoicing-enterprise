
-- Sample document
insert into documents (file_name, path, tags, owner_id, version)
values ('contract-v1.pdf', 'uploads/contract-v1.pdf', ARRAY['contract', 'nda'], '00000000-0000-0000-0000-000000000000', 1);

-- Sample comment
insert into comments (document_id, content, author_id, role)
values (
  (select id from documents limit 1),
  'Initial legal review completed.',
  '00000000-0000-0000-0000-000000000000',
  'reviewer'
);
