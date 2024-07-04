const express = require("express")
const mongoose = require( "mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");

const app = express()

mongoose.connect("mongodb://admin:password@mongo:27017/?authsource=admin").then(()=> console.log("Successfully connected to dB")).catch((e) => console.log("Error is: ", e));

app.get("/", (req, res) => {
    res.send("<h2> Hi....., I am Tahzib, wait there i am  comming </h2>")
})






const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listening on port ${port}`));