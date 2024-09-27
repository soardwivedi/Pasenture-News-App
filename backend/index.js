const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { news } = require('./data');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/news/api-1', (req, res) => {
  const category = req.query.category;
  if (category)
    return res.json(news.source.filter((news) => news.category === category));

  return res.json(news.source);
});
app.get('/news/api-2', (req, res) => {
  const category = req.query.category;
  if (category)
    return res.json(news.source2.filter((news) => news.category === category));

  return res.json(news.source2);
});
app.get('/news/api-3', (req, res) => {
  const category = req.query.category;
  if (category)
    return res.json(news.source3.filter((news) => news.category === category));

  return res.json(news.source3);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
