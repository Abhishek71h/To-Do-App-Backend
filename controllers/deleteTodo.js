// import the model
const Todo = require("../models/Todo");

// Define Route Handler
exports.deleteTodo = async(req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Delete Successfully",
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};