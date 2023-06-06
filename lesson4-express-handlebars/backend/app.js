const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require("./routes/routes");
const path = require('path')

const app = express();
app.set("views", "../frontend/views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../frontend/css")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbURI = "mongodb+srv://ilia:Sophinka2015@ilia.mthizlt.mongodb.net/expressDatabase";

mongoose.connect(dbURI)
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

app.use(routes);

app.use((req, res) => {
  res.render("404");
});
