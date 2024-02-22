const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');
const trackRoutes = require('./routes/trackRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/user', userRoutes);
app.use('/artist', artistRoutes);
app.use('/album', albumRoutes);
app.use('/track', trackRoutes);
app.use('/favs', favoritesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});