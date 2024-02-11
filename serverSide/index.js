const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/routes.js"); // Corrected file extension

const app = express();
const url = "mongodb+srv://20pa1a0556:JZLPX4DOABaVa2tG@cluster0.e14nvpk.mongodb.net/?retryWrites=true&w=majority";

app.use(cors()); // Correct usage of cors middleware
app.use(express.json());

mongoose.connect(url)
    .then(() => {
        console.log("Database is connected");
    })
    .catch((e) => {
        console.log(e);
    });


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

//routes
app.use('/api', route);

