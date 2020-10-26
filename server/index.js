const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

//Import routes
const authRoute = require('./routes/auth');
const finanzasRoute = require('./routes/finanzas')
const clientsRoute = require('./routes/clients.js')
const sqlTesting = require('./routes/sqlTesting.js')

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true,  useNewUrlParser: true },
    () => console.log('Connected to db')
);
mongoose.set('useFindAndModify', false);

//Middleware
app.use(express.json());

//Route middleware
app.use('/api/user', authRoute);
app.use('/api/finanzas', finanzasRoute);
app.use('/api/clients', clientsRoute);
app.use('/api/sqlTesting',sqlTesting);

app.listen(3000, () => console.log("Server up and running at port 3000"));