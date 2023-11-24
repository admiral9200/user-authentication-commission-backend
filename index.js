const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const url = process.env.MONGODB_URL;
const PORT = process.env.PORT;

mongoose.connect(url, options)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas');
        app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
    })
    .catch(err => console.log(err));

app.use('/api/auth', require('./router/auth'));
app.use('/api/sales', require('./router/sale'));
