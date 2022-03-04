const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
Username: {
    type: String,
    required: true,
    minlength: 1
},
email: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
},
phn_no: {
    type: Number,
    required: true
}
})

module.exports= mongoose.model('User', userSchema);
