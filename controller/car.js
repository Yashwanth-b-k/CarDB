const Car = require("../model/cars");

// create a car
const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json({ car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get all car from DB with query
const getAllCars = async (req, res) => {
  try {
    const { name } = req.query;
    const reqObj = {};

    if (name) {
      reqObj.name = { $regex: `^${name}`, $options: "i" };
    }

    let result = Car.find(reqObj);
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit).sort('name');
    const cars = await result;
    res.status(200).json({ cars, nbhits: cars.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get a single car from DB
const getCar = async (req, res) => {
  try {
    const { id: carID } = req.params;
    const car = await Car.findOne({ _id: carID });

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json({ car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update the car details 
const updateCar = async (req, res) => {
  try {
    const { id: carID } = req.params;
    const car = await Car.findOneAndUpdate({ _id: carID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json({ car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// delete a car from DB
const deleteCar = async (req, res) => {
  try {
    const { id: carId } = req.params;
    const car = await Car.findOneAndDelete({ _id: carId });

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json({ car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createCar,
  getAllCars,
  getCar,
  updateCar,
  deleteCar,
};
