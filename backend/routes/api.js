const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');
const Package = require('../models/Package');

router.get('/destinations', async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
});

router.get('/packages/top-selling', async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
});

module.exports = router;
