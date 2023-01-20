const express = require('express');
const router = express.Router();
const lenderController = require("../controller/lenderController")


router
    .get('/add-lender',lenderController.getAddLender)
    .post('/add-lender',lenderController.postAddLender)


module.exports = router;
