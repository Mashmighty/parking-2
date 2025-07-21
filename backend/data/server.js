// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

// Setup PostgreSQL client
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/api/charges", async (req, res) => {
  const { city, carModel } = req.query;

  try {
    const result = await pool.query(
      "SELECT charge FROM charges WHERE city = $1 AND car_model = $2",
      [city.toLowerCase(), carModel.toLowerCase()]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Charge not found for selection." });
    }

    res.json({ city, carModel, charge: result.rows[0].charge });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Backend listening on http://localhost:${port}`);
});
