const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be provided'],
    trim: true,
  },
  show:{
    type: Boolean,  
    default: true,
  },
  updated:{
    type: Boolean,  
    default: false,
  }
});

const Task = mongoose.model("Task", Schema);

module.exports = Task;
