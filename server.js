var express = require("express");
var app = express();
const port = process.env.PORT || 3000

app.use("/", require("./routes"));



app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});






// app.set("port",process.env.PORT || 3000);

// app.get("/", getData);

// function getData(req, res){
//     console.log("getting data")
//     res.write("{\"name\" : \"Shawn\"}");
//     res.end();
// }






// app.listen(app.get("port"), () => console.log("server is listening on port" + app.get("port")));