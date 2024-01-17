
const mongoose = require('mongoose');

const connectDB = async(url)=>{
    mongoose.connect(url,    
       { useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,}
        );
}

module.exports = connectDB;
