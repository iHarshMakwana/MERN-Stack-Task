const mongoose = require('mongoose');
const DestinationSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String
});
module.exports = mongoose.model('Destination', DestinationSchema);
