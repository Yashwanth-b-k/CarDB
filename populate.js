require('dotenv').config();

const carsJSON = require('./cars.json');
const Car = require('./model/cars');
const connectDB = require('./db/connect');

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        await Car.deleteMany();
        await Car.create(carsJSON);
        console.log('success...');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();