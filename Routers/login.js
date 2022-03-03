const Loginrouter = require('express').Router();
const loginRouterCotroller = require('../controllers/login');


Loginrouter.post("/post_user_login",loginRouterCotroller.login_user);
Loginrouter.get("/get_user_login",loginRouterCotroller.get_login_User);
module.exports = Loginrouter;