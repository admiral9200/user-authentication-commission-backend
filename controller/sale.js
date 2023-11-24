const Sale = require('../models/Sale');

exports.createSale = async (req, res) => {
    const { date, time, place, roomNum, receiver, box, size, flag } = req.body;

    const newSale = new Sale({
        date,
        time,
        place,
        roomNum,
        receiver,
        box,
        size,
        flag
    });

    newSale.save()
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(err => {
            throw err;
        })
}

exports.getAllSales = async (req, res) => {
    const sales = await Sale.find();

    if(sales) {
        return res.status(200).json({ sales });
    }
}