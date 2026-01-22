const Task = require("../models/taskModel");

const addTask = async (req, res) => {
    try {
        const { title, description, isPrimary, endDate, userId } = req.body;
        const task = new Task({
            title: title,
            description: description,
            isPrimary: isPrimary == undefined ? false : isPrimary,
            endDate: endDate,
            userId: userId
        });

        await task.save();
        res.status(201).json(task);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getOneByTitle = async (req, res) => {
    try {
        const title = req.body;
        const task = await Task.findById(
            {

            }
        );
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
};

const updateById = async (req, res) => {
    try {

        const { id, title, description } = req.body;

        const task = await Task.findByIdAndUpdate(
            { "_id": id },
            {
                title: title,
                description: description
            }
        )

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}


const deleteById = async (req, res) => {
    try {
        const id = req.params.id;

        const task = await Task.findByIdAndDelete(
            {
                _id: id
            }
        );
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ "data": error.message });
    }
}

module.exports = { addTask, updateById, deleteById };