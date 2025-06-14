const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "feedback_portofolio",
});

// Endpoint Store
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Message saved" });
  });
});

app.get("/api/messages", (req, res) => {
  db.query("SELECT * FROM contacts ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Endpoint Edit
app.put("/api/messages/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;
  const sql = `
    UPDATE contacts 
    SET name = ?, email = ?, subject = ?, message = ? 
    WHERE id = ?
  `;
  db.query(sql, [name, email, message, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Message updated" });
  });
});

// Endpoint Delete
app.delete("/api/messages/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM contacts WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Message deleted" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
