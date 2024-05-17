require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// meddleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routse register
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

// connect to Mongo DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () =>{
            console.log('listening on port 40000........')
        })
    })
    .catch((error) => {
        console.log(error)
    })


