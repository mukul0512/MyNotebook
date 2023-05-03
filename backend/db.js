const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&tls=false";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully.");
    })
}

module.exports = connectToMongo;