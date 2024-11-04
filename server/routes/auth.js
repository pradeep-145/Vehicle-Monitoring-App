const express = require('express');
const router = require('express').Router();
const otpGen=require('otp-generator')
const cors = require('cors');
const User = require('../models/userModel'); // Import the User model
router.use(express.json());
router.use(cors())
const otp=otpGen.generate(6, { upperCase: false, specialChars: false, alphabets: false });

router.get("/register",(req,res)=>{
    res.send("hello")
}
)
router.post('/register', async (req, res) => {
    const { username, mobile,  } = req.body;
    res.send("hello")
    // Validate input
    if (!username || !mobile) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
       
        const existingUser = await User.findByMobile({ where: { mobile } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        
        const newUser = await User.create({
            username,
            mobile,
        
        });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.post('/login', async (req, res) => {
    const { mobile,  } = req.body;

    if (!mobile) {
    
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
    
        const user = await User.findByMobile({ where: { mobile} });
        
        if (!user) {
    
            return res.status(400).json({ message: 'Invalid credentials' });
    
        }

        res.status(200).json({ message: 'Login successful', user });
    
    } 
    
    catch (error) {
    
        res.status(500).json({ message: 'Server error', error });
    
    }
});

router.post('/send-otp',(req,res)=>{
    console.log(req.body)
    res.status(200).json({otp:1234,
        
        success:true,
        message:'OTP sent successfully'})
})

module.exports = router;