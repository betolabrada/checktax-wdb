const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');

//Import routes
const clientsRoute = require('./routes/clients.js')

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true,  useNewUrlParser: true },
    () => console.log('Connected to DB')
);
mongoose.set('useFindAndModify', false);

//Middleware
app.use(express.json());

//Route middleware
app.use('/api/clients', clientsRoute);

app.listen(3000, () => console.log("Backend server up and running"));