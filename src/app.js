const express = require("express");
const connectToDB = require("./configs/db");
const taskRoute = require("./routes/taskRoutes");
const userRoute = require("./routes/userRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/task", taskRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
    res.send("Server started");
});

app.listen(4500, "0.0.0.0", () => {
    console.log("Server is working");

    connectToDB()
});