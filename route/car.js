const express = require("express");
const {
  getAllCars,
  getCar,
  updateCar,
  deleteCar,
  createCar,
} = require("../controller/car");
const router = express.Router();

router.route('/')
    .get(getAllCars)
    .post(createCar);
    
router.route('/:id')
    .get(getCar)
    .patch(updateCar)
    .delete(deleteCar);

module.exports = router;