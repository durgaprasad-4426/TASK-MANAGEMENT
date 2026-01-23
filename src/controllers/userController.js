const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const saltRounds = 13;

const signUpNewUser = async (req, res) => {
    try {
        const { name, college, email, password } = req.body;
        const hashPass = await bcrypt.hash(password, saltRounds);
        const user = new User({
            name: name,
            college : college,
            email: email,
            password: hashPass
        });

        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const signInWithEmail = async (req, res) => {
    try {
        const { email, password } = req.body;

        const isUser = await User.findOne({ email: email })

        if (isUser) {
            const isCorrectPass = await bcrypt.compare(password, isUser.password);
            if (isCorrectPass) {
                res.status(200).json(isUser);
            } else {
                res.status(401).json({
                    message: "wrong password"
                });
            }
        } else {
            res.status(404).json({ message: "user not signup" })
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { signUpNewUser, signInWithEmail };