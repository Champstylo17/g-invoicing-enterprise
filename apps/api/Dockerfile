# Use official Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy project files
COPY app_enterprise_sqlite.py .
COPY requirements.txt .

# Create default requirements.txt if not present
RUN echo "flask\nflask-cors" > requirements.txt

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 5000

# Run the application
CMD ["python", "app_enterprise_sqlite.py"]
