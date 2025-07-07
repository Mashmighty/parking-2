const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const charges = {
  nairobi: { audi: 200, volkswagen: 300, mercedes: 400 },
  mombasa: { audi: 150, volkswagen: 250, mercedes: 350 },
  kisumu: { audi: 100, volkswagen: 200, mercedes: 300 }
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/charges', (req, res) => {
  const { town, car } = req.query;

  if (!charges[town] || !charges[town][car]) {
    return res.status(400).json({ error: 'Invalid town or car model' });
  }
  res.json({ amount: charges[town][car] });
});

app.listen(PORT, () => {
  console.log(`🚗 Parking Charges API running at http://localhost:${PORT}`);
});
