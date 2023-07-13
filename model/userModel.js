const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "An email must be there."]
    },
    password: {
        type: String,
        required: [true, "A password should be there"]
    }
})

const users = mongoose.model('users', userSchema);

module.exports = users;