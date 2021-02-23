/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded({
    extended: true
});

app.use(jsonParser);
app.use(urlEncodeParser);

const ipFn = require("./middleware/getIpAddres");
app.use("*", ipFn);

/** Methods */
app.get("/", ( req, res, next) => {
    res.send("Welcome to academic rest api");
});

/** routes  */
const studentRoutes = require("./routes/student.routes");
studentRoutes.StudentRoutes(app);

const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes.TeacherRoutes(app);

const periodRoutes = require("./routes/period.routes");
periodRoutes.PeriodRoutes(app);

const courseRoutes = require("./routes/course.routes");
courseRoutes.CourseRoutes(app);


app.listen(port, ()=>{
    console.log("server is running...")
});
