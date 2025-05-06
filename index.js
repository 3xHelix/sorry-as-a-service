const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
app.set('trust proxy', true);
const PORT = process.env.PORT || 4242;

// Load reasons from JSON
const sorries = JSON.parse(fs.readFileSync('./sorries.json', 'utf-8'));

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req, res) => {
    return req.headers['cf-connecting-ip'] || req.ip; // Fallback if header missing (or for non-CF)
  },
  message: { error: "Too many requests, please try again later. (120 reqs/min/IP)" }
});

app.use(limiter);

// Random rejection reason endpoint
app.get('/eh', (req, res) => {
  const reason = sorries[Math.floor(Math.random() * sorries.length)];
  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`Sorry-as-a-Service'eh is running on port ${PORT}`);
});
