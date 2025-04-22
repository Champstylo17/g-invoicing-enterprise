
provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "g_invoicing_docs" {
  bucket = "g-invoicing-docs"
}
