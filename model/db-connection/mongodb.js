/** packages */
const mongoose = require("mongoose");
const config = require("config");

const mongodbInfo = config.get("db-connections.mongodb");


//User: rest-api-user
//pass: 5zy4MPh5IXcPYd6S
//mongodb+srv://rest-api-user:5zy4MPh5IXcPYd6S@cluster0.jylzk.mongodb.net/AcademicDB
const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}`;

module.exports = () => {
    mongoose.connect(connStr);

    mongoose.connection.on("connected", () =>{
        console.log("Mongodb server connected !");
    });

    mongoose.connection.on("disconnected", () =>{
        console.log("Mongodb server disconnected !");
    });

    mongoose.connection.on("error", () =>{
        console.log("Mongodb server connection error !");
    });
    
    mongoose.connection.on("SIGINT", () =>{
        mongoose.connection.close(() =>{
            console.log("Mongodb server shutting down!");
        });
        
    });
};