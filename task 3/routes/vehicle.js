const express = require('express');
const Vehicle = require('../models/Vehicle');
const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).send('Not authorized');
};

router.get('/', isAuthenticated, async (req, res) => {
  res.json(await Vehicle.find());
});

router.post('/', isAuthenticated, async (req, res) => {
  const vehicle = new Vehicle(req.body);
  await vehicle.save();
  res.json(vehicle);
});

router.put('/:id', isAuthenticated, async (req, res) => {
  const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(vehicle);
});

router.delete('/:id', isAuthenticated, async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.send('Deleted');
});

module.exports = router;