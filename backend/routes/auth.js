const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

router.post('/register', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if(!user || user.password !== req.body.password) {
            res.status(400).json('Invalid credentials');
        }
        else{
            const token = jwt.sign(req.body, process.env.JWT_PASS);
            res.status(200).json({ token: token });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;