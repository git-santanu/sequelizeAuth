require("dotenv").config();
const express = require("express");
const exhbs = require("express-handlebars");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const signUpUser = require("./models/signUpModel");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3300;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(express.static("public"));

app.engine(
  "hbs",
  exhbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected sucessfully");
  })
  .catch((err) => {
    console.log("Db not connected",err);
  });
  signUpUser.sync().then(res=>{
    console.log('response',res)
  }).catch(Err=>{
    console.log('err>>',Err)
  })

app.listen(process.env.APP_PORT, () => {
  console.log(`Port is running on ${process.env.APP_PORT}`);
});
