const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});







// const express = require("express");
// const connectDB = require('./db/connect');
// const app = express();


// connectDB();
// app.use(express.json({extended:false}));
// app.use("/api/userModel", require("./api/user"));
// const port = process.env.PORT || 3000


// // app.use("/", require("./routes"));



// app.listen(3000, () => {
//     console.log(`Server is running on port ${port}`);
// });






// app.set("port",process.env.PORT || 3000);

// app.get("/", getData);

// function getData(req, res){
//     console.log("getting data")
//     res.write("{\"name\" : \"Shawn\"}");
//     res.end();
// }






// app.listen(app.get("port"), () => console.log("server is listening on port" + app.get("port")));