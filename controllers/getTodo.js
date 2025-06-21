//import the model
const Todo = require("../models/Todo");

// define route handler
exports.getTodos = async(req, res) => {
    try {
        // fetch all todo items from database
        const todos = await Todo.find({});
        // Resposne
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Data is fetched Successfully",
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error",
        });
    }
};

exports.getTodoById = async(req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        if(!todo) {
            return res.status(400).json({
                success: false,
                message: "No Data Found with Given id",
            });
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: "Successfully Found Data with given id",
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message,
            messagse: "Server Error",
        });
    }
};
