// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

connectDB();
app.use(express.json());
app.use(logger);
app.use('/', userRoutes);

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
