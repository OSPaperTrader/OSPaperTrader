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

app.get("/api/:username", mainController.getCCData, (req, res) => {
  res.json(res.locals.data);
});

app.get("/watchListData/:id", mainController.getWatchListData, (req, res) => {
  res.sendFile(res.locals.data);
});

app.get("/", (req, res) => {
  res.status(200).sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
