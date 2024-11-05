require('dotenv').config();
const jwt = require('jsonwebtoken');

// Function to generate a token
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, mobile: user.mobile },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );
};

// Function to verify a token
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        console.error("Token verification failed:", err);
        return null;
    }
};

module.exports = { generateToken, verifyToken };
