const express = require("express");
const routes = express.Router();
const scrap = require("./services/scrapperService.ts")

routes.get("/scrap", async (req, res) => {
    //const body = req.body.teste;
    try {

        const result = await scrap(req.body.teste);
        console.log(req.body.teste);
        res.send("API Express funcionando 🚀" + result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = routes;
