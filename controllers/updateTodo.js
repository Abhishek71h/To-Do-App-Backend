// import the models
const Todo = require("../models/Todo");

// Define route handler
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            { _id: id },
            {
                title,
                description,
                updatedAt: Date.now()
            },
            { new: true } // returns the updated document
        );

        res.status(200).json({
            success: true,
            data: updatedTodo,
            message: "Updated Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Not Updated Successfully",
        });
    }
};
