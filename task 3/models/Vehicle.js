const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  vehicalname: String,
  price: Number,
  image: String,
  desc: String,
  brand: String
});

module.exports = mongoose.model('Vehicle', VehicleSchema);