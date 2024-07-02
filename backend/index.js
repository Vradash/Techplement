const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors= require('cors');
const User = require('./models/userSchema');
const app = express();
const userRoute = require('./routes/auth');

dotenv.config();

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

app.use('/api/user', userRoute);

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});