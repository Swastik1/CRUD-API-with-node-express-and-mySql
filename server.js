const express = require("express");
const bodyParser = require("body-parser");
const app = express();


// Extract entire json body content from incoming requests
app.use(bodyParser.json());

// Complex algorithm for complex deep parsing to deal with nested objects
app.use(bodyParser.urlencoded({extended:true}))

// Simple route

app.get("/",(req,res) => {
    res.json({message: "Welcome to Kuliza"});
})

require("./app/routes/customer.routes.js")(app);

// set port , listen for requests 
app.listen(8080, () => {
    console.log("Server is running on port 8080.")
})

