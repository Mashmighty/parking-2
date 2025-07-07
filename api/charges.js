export default function handler(req, res) {
  const charges = {
    nairobi: { audi: 200, volkswagen: 300, mercedes: 400 },
    mombasa: { audi: 150, volkswagen: 250, mercedes: 350 },
    kisumu: { audi: 100, volkswagen: 200, mercedes: 300 }
  };

  const { town, car } = req.query;

  if (!charges[town] || !charges[town][car]) {
    return res.status(400).json({ error: "Invalid town or car model" });
  }

  res.status(200).json({ amount: charges[town][car] });
}
