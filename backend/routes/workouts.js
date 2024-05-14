const express = require('express')
const {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')

const router = express.Router()

// Get all the workouts
router.get('/', getWorkouts)

// Get a workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)  

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)


module.exports = router
