const express = require('express');
const router = express.Router();
const saleController = require('../controller/sale');

router.post('/create', (req, res) => {
    return saleController.createSale(req, res);
});

router.get('/get-all-sales', (req, res) => {
    return saleController.getAllSales(req, res);
})

module.exports = router;