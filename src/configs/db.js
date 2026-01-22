const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://db_user_prasad:5YsAsdCT3HiJgWX8@task1.2fkihyl.mongodb.net/task1");
        console.log(`Connect to Mongo ${mongoose.connection.name}`);
    } catch (error) {
        console.error(error);
    }
};

module.exports = connectDB;