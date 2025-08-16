const express = require("express");
const routes = express.Router();

routes.get("/scrap", (req, res) => {
    const body = req.body.teste;
  res.send("API Express funcionando 🚀"+body);
});


module.exports = routes;