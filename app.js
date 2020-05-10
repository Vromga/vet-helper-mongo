const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./resources/users/users.route');
const petsRoute = require('./resources/pets/pets.routing')

const app = express();
app.use(cors());
app.use(compression({
    level: 9
}));
app.use(bodyParser.json());
app.use('/users', userRoute);
app.use('/pets', petsRoute);

module.exports = app;
