const router = require('express').Router();
//const StateCollection = require("../covid-server/schemas/state");

const routerController = require('../controllers/states');
router.post("/set_state",routerController.state_post);
router.get("/get_state",routerController.get_states);
module.exports = router;