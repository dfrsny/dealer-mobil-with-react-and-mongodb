const express = require('express')
const News = require('./news.model');
const { postANews, getAllNews, getSingleNews, updateANews, deleteANews } = require('./news.controller');
const router = express.Router();



// frontend routes

router.post("/create-news", postANews)

router.get("/", getAllNews)

router.get("/:id", getSingleNews)

router.put("/edit/:id", updateANews)

router.delete("/:id", deleteANews)

module.exports = router;