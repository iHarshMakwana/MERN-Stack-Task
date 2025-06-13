// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const apiRoutes = require('./routes/api');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/abmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
