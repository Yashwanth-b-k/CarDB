const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'name requierd'],
  },
  price: {
    type: String,
    required: [true,'price requierd'],
  },
  engine: {
    type: String,
    required: [true,'engine cc requierd'],
  },
  power: {
    type: String,
    required: [true,'power requierd'],
  },
  imageUrl: {
    type: String,
    required: [true,'Image URL requierd'],
  },
  mileage: {
    type: String,
    required: [true,'mileage requierd'],
  },
  fuel: {
    type: String,
    required: [true,'fuel type requierd'],
  },
  groundClearance: {
    type: String,
    required: [true,'ground clearence requierd'],
  },
  numberOfCylinders: {
    type: String,
    required: [true,'Number of Cylinders requierd'],
  },
  maxTorque: {
    type: String,
    required: [true,'Max Torque requierd'],
  },
  transmissionType: {
    type: String,
    required: [true,'Transmission type requierd'],
  },
  bodyType: {
    type: String,
    required: [true,'Body type requierd'],
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
