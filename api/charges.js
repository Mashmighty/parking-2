// api/charges.js

const rates = require('../backend/data/rates');

export default function handler(req, res) {
  const { town, carModel } = req.query;

  if (!town || !carModel) {
    return res.status(400).json({ error: 'town and carModel are required' });
  }

  const townKey = town.toLowerCase();
  const modelKey = carModel.toLowerCase();

  const townRates = rates[townKey];

  if (!townRates) {
    return res.status(404).json({ error: `No rates found for town: ${town}` });
  }

  const charge = townRates[modelKey];

  if (charge !== undefined) {
    res.status(200).json({ charge });
  } else {
    res.status(404).json({ error: `No rate found for car model: ${carModel} in ${town}` });
  }
}
