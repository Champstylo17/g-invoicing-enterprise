
#!/bin/bash
echo "Checking G-Invoicing API status..."
curl -s -o /dev/null -w "%{http_code}" https://your-deployed-url/api/assistant
