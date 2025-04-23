const express = require('express');
const mongoose = require("mongoose");
const Formroutes = require("./routes/FormRoutes");
require("dotenv").config();
const app = express();
app.use(express.json());


// db();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
connectDB();

app.use("/api", Formroutes);


app.listen(6000, () => {
    console.log("Server is running on port 3000");
}
);