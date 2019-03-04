const express = require("express");
const router = express.Router();

router.use("/rental", require("./api/rentalRoutes"));

//add more api routes here

module.exports = router;