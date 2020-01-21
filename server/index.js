const express = require("express");
const path = require("path");
const mainController = require("./controller.js");

const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const app = express();

const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

app.get("/api", mainController.getBTCData, (req, res) => {
  res.send(res.locals.data);
});

// app.get('/watchListData/:id' - GET request to AlphaVantage server with id=stock symbol
app.get("/watchListData/:id", mainController.getWatchListData, (req, res) => {
  res.sendFile(res.locals.data);
});

app.get("/", (req, res) => {
  res.status(200).sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
