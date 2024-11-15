const express = require('express');
const db=require("../config/db")
const otpGen = require('otp-generator');
const cors = require('cors');
const jwtService = require('../services/jwtService'); // Ensure this is correctly implemented
const router = express.Router();
const axios = require('axios');

router.use(express.json());
router.use(cors());

router.get("/register", (req, res) => {
  res.send("hello");
});

router.post('/register', async (req, res) => {
  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json({ message: 'Mobile number is required' });
  }

  try {
    const existingUser = await db.sql`
      USE DATABASE vehicle-tracking-analytics;
      SELECT * FROM users WHERE mobile = ${mobile} LIMIT 1;
    `;
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    await db.sql`
      USE DATABASE vehicle-tracking-analytics;
      INSERT INTO users (mobile) VALUES (${mobile});
    `;

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/send-otp', async (req, res) => {
  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json({ message: 'Mobile number is required' });
  }

  try {
    const otp = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
    console.log(`OTP for ${mobile}: ${otp}`);
    axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=j2o3T8JgFRqz0WhGdpLfemKMbVEUBn4xAsv7wZrlPIcDXNO51Q7gr6U9JAiNShp1sQ4x3fzOwaWtEBbC&route=otp&variables_values=${otp}&flash=0&numbers=${mobile}`).then(response=>res.json({success:true}))
    .catch(error=>console.log(error))
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/login', async (req, res) => {
  const { mobile, otp } = req.body;

  if (!mobile || !otp) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await db.sql`
      USE DATABASE vehicle-tracking-analytics;
      SELECT * FROM users WHERE mobile = ${mobile} LIMIT 1;
    `;
    if (user.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // For demonstration purposes, we assume the OTP is valid
    // In a real application, you would verify the OTP here

    const token = jwtService.generateToken(user[0]);
    res.status(200).json({ message: 'Login successful', user: user[0], token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;