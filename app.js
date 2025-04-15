require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const car = require('./route/car');

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/vehicle/cars',car)

//add your PORT number in .env or use default port 3000
const port = process.env.PORT || 3000;


//add your MONGO_URI
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`listening to port ${port}...`));
    } catch (error) { 
        console.log(error);
    }
}

start();

  
