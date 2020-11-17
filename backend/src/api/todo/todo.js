const restful = require('node-restful');
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({ // creating a schema for todo
    description: { type: String, required: true }, // description is a string and it is required
    done: { type: Boolean, required: true, default: false }, // done isa boolean and return if the task is done or not. The default value is false
    createdAt: { type: Date, default: Date.now } // createdAt is a date element and shows the date where the task has been created.
});

module.exports = restful.model('Todo', todoSchema);