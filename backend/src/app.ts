const express = require("express");
const cors = require("cors");
const scrapperRoute = require("./controllers/scrapperController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(scrapperRoute);


module.exports = app;