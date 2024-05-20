const { Timestamp } = require("mongodb");
const Mongoose = require ("mongoose");
const todoSchema = Mongoose.Schema(
    {
        task:{
            type : "string"
        }
    },
    {
        Timestamps : true
    }
)
const TodoModel = Mongoose.model('tasks', todoSchema);
module.exports = TodoModel;