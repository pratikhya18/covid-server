const login_collection = require('../schemas/login');

exports.login_user = async (req, res) => {
        //console.log(req.body)
        try {
          const insert_user_Login_details = new login_collection(req.body);
          
           //console.log(insert_state_Documents);
          const result = await insert_user_Login_details.save();
          console.log('data'+req.body.password);
          console.log(result);
          console.log('data'+req.body.password);
          console.log(result);
          res.send(result);
        }
         catch (e)
          {
          res.send(e);
        }
    
    
      }


      exports.get_login_User = async (req, res) => {
        try {
          const get_user_Login_List = await login_collection.find({});
          
          res.send(get_user_Login_List);
        
        } catch (e) {
          res.status(400).send(e);
        }
      };
      
    