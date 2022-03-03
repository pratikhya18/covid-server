const mongoose = require('mongoose');
const dbUrl  = "mongodb://localhost:27017/covidTracker?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
//var url = "mongodb+srv://dba:dVWTOYp3HW2EjF3w@cluster0.gkmow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbUrl,(err, con)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to mongodb");
    }
});