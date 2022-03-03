
const express = require("express");
const cors = require('cors');
const router = require("./Routers/state");
const Loginrouter = require("./Routers/login");
  require('./db')
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
app.use("/states",router);
app.use("/login",Loginrouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
