-- Create database
CREATE DATABASE IF NOT EXISTS feedback_portofolio;
USE feedback_portofolio;

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data (optional)
INSERT INTO contacts (name, email, message) VALUES 
('John Doe', 'john@example.com', 'Hello, this is a test message!'),
('Jane Smith', 'jane@example.com', 'I would like to discuss a project with you.');
