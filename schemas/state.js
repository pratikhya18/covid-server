const mongoose = require('mongoose');

const stateschema = new  mongoose.Schema({  // schema creation
   
    state_name:String,
    state_code:Number,
    population:Number,
    confirmed:Number,
    recoverded: Number,
    active: Number,
    death:Number,
    recovered: Number,
    vaccinated: Number
    
})

//const Createcollection = new mongoose.model("test",stateschema); //create collection
 const StateCollection = new mongoose.model('StateSchema',stateschema);
module.exports = StateCollection;