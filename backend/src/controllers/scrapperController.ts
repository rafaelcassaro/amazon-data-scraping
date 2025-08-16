const express = require("express");
const routes = express.Router();
const scrap = require("../services/scrapperService.ts")

routes.get("/api/scrap", async (req, res) => {
    try {
        const keyword = req.query.keyword;
        const result = await scrap(keyword);
        res.send(result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = routes;