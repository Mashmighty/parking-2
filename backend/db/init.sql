CREATE TABLE IF NOT EXISTS rates (
  id SERIAL PRIMARY KEY,
  town TEXT NOT NULL,
  car_model TEXT NOT NULL,
  rate INT NOT NULL
);

INSERT INTO rates (town, car_model, rate) VALUES
('nairobi', 'audi', 200),
('nairobi', 'volkswagen', 180),
('nairobi', 'mercedes', 250),
('mombasa', 'audi', 150),
('mombasa', 'volkswagen', 130),
('mombasa', 'mercedes', 200),
('kisumu', 'audi', 100),
('kisumu', 'volkswagen', 90),
('kisumu', 'mercedes', 160);
