const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter an exercise type."
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise."
  },
  duration: {
    type: Number,
    trim: true,
    required: "Enter a duration in minutes."
  },
  weight: {
    type: Number,
    trim: true,
    required: "Enter a weight in lbs."
  },
  reps: {
    type: Number,
    trim: true,
    required: "Enter the number of reps"
  },
  sets: {
    type: Number,
    trim: true,
    required: "Enter the number of sets"
  }
});

const workoutSchema = new Schema({
  day: {
    type: Date,
    trim: true,
    required: "Enter a date."
  },
  exercise: [
    exerciseSchema
  ]
});


const Exercise = mongoose.model("Exercise", exerciseSchema);
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Exercise;
