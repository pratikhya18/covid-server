const mongoose = require ('mongoose');
const login_Schema = new mongoose.Schema({

    usename : String,
    password : String
 })

 const login_collection = new mongoose.model('LoginSchema',login_Schema);
 module.exports = login_collection;