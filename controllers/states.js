
const StateCollection = require("../schemas/state");

//post request

// exports.state_post = async (req, res) => {
//     //console.log(req.body)
//     try {
//       const insert_state_Documents = new StateCollection(req.body);
//        //console.log(insert_state_Documents);
//       const result = await insert_state_Documents.save();
//       console.log(result);
//       res.send(result);
//     }
//      catch (e)
//       {
//       res.send(e);
//     }


//   }



//post req for multiple documents 
exports.state_post = async (req, res) => {
    //console.log(req.body)
    try {
      //const insert_state_Documents = new StateCollection(req.body);
       //console.log("rrr"+insert_state_Documents);
      const result = await StateCollection.insertMany(req.body)
      console.log(result);
      res.send(result);
    }
     catch (e)
      {
      res.send(e);
    }


  }




  //get request

exports.get_states = async (req, res) => {
    try {
      const get_state_Document = await StateCollection.find({});
      res.send(get_state_Document);
    } catch (e) {
      res.status(400).send(e);
    }
  };
  