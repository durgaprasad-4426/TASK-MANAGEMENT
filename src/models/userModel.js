const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true
    },

    "college" : {
        type : String,
        required : true
    },

    "email": {
        type: String,
        required: true,
        unique: true,
        lower: true
    },

    "password": {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("user", userSchema);
