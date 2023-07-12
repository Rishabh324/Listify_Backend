const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'A title to note must be there.'],
        maxlength: 15,
        minlength: 1
    },
    content: {
        type: String,
        require: [true, 'A note should be there.'],
        minlength: 2
    }
})

const todos = mongoose.model('todos', todoSchema);

module.exports = todos;