const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const stock = require("../routes/stock");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../src')));

const mockResponse = {
  foo: "bar",
  bar: "foo"
};



app.use("/api/stock", stock);

app.get("/api", (req, res) => {
  res.send(mockResponse);
});


app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.get('/login', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../views/login.html'))
});

app.get('/signup', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../views/signup.html'))
});


app.use('*', (req, res) => { 
  res.status(404).send('Not found'); 
});

app.use((err, req, res, next) => { 
  console.error(res.locals.error)
  res.end()
  // throw new error(res.locals.error); 
});

app.listen(port, function () {
  console.log("App listening on port: " + port);
});
