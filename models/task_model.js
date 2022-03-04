const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
},
_userId: {
    type: mongoose.Types.ObjectId,
    required: true
},
WorkDescription: {
    type: String,
    required: true
},
Completed: {
    type: Boolean,
    required: true
},
date: {
    type: Date,
    default: Date.now
}
})

module.exports= mongoose.model('Task', taskSchema);
