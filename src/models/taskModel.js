const mongoose = require("mongoose");
const User = require("./userModel");

const taskModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    isPrimary: {
        type: Boolean
    },

    endDate: {
        type: String,
        required: true
    },

    userId : {
        required : true,
        type : mongoose.Schema.Types.ObjectId,
        ref : User,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("userTask", taskModel);