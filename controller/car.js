
const Car = require('../model/cars');

const createCar = async (req, res) => {
    try {
      const car = await Car.create(req.body);
      res.status(201).json({car});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllCars = async (req, res) => {
    try {
      const {name} = req.query;
      const reqObj = {};

      if(name){
        reqObj.name = { $regex: `^${name}`, $options: 'i' };
      }

      const cars = await Car.find(reqObj);
      res.status(200).json({ cars, nbhits: cars.length });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getCar = async (req, res) => {
    try {
      const { id: carID } = req.params;
      const car = await Car.findOne({ _id: carID }); 
  
      if (!car) {
        return res.status(404).json({ error: 'Car not found' });
      }
  
      res.status(200).json({ car });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const updateCar = async (req, res) => {
    try {
      const { id: carID } = req.params;
      const car = await Car.findOneAndUpdate({ _id: carID }, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!car) {
        return res.status(404).json({ error: 'Car not found' });
      }
  
      res.status(200).json({ car });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const deleteCar = async (req, res) => {
    try {
      const { id: carId } = req.params;
      const car = await Car.findOneAndDelete({ _id: carId });
  
      if (!car) {
        return res.status(404).json({ error: 'Car not found' });
      }
  
      res.status(200).json({ car });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports = {
    createCar,
    getAllCars,
    getCar,
    updateCar,
    deleteCar
}
