const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// Create JWT function
const createToken = (_id) => {
    return jwt.sign({_id},process.env.JWTSECRET, { expiresIn: '3d' })
}

// Login a user controller
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // Create the token
        const token = createToken(user._id)

        res.status(200).json({ email, token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}   

// Signup a user controller
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)

        // Create the token
        const token = createToken(user._id)

        res.status(200).json({ email, token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = { signupUser, loginUser }