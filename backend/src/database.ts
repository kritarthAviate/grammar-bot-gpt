import sqlite3 from "sqlite3";

const db = new sqlite3.Database("corrections.db", (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the database.");
    db.run(`
      CREATE TABLE IF NOT EXISTS corrections (
        id INTEGER PRIMARY KEY,
        original TEXT NOT NULL,
        corrected TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

export default db;
