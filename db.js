const mongoose = require('mongoose');

async function connectToMongo(){
    await mongoose.connect('mongodb://localhost:27017').
    then(()=>{console.log("DB Connected")})
    ;
}

module.exports={connectToMongo}