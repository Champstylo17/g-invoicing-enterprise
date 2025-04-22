provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "g_invoicing_logs" {
  bucket = "g-invoicing-enterprise-logs"
  acl    = "private"
}
