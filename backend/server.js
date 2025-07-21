const express = require("express");
const cors = require("cors");
const rates = require("./data/rates");

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/api/charges", (req, res) => {
  const { city, carModel } = req.query;

  if (!city || !carModel) {
    return res.status(400).json({ error: "Missing city or carModel" });
  }

  const cityRates = rates[city.toLowerCase()];
  if (!cityRates) {
    return res.status(404).json({ error: "City not found" });
  }

  const charge = cityRates[carModel.toLowerCase()];
  if (charge === undefined) {
    return res.status(404).json({ error: "Car model not found" });
  }

  res.json({ city, carModel, charge });
});

app.listen(PORT, () => {
  console.log(`🚗 Parking API running on http://localhost:${PORT}`);
});
