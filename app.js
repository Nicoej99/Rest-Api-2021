/** packages */
const express = require("express");
const config = require("config");

/** app configuration */
const app = express();
const port = config.get("server-port");

/** Methods */
app.get("/", ( req, res, next) => {
    res.send("Welcome to academic rest api");
});

/** routes */
const studentRoutes = require("./routes/student.routes");
studentRoutes.StudentRoutes(app);

app.listen(port, ()=>{
    console.log("server is running...")
});
