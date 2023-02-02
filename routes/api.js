const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser")
const posts = require("../models/posts") 


router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts))
})
router.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title
    let description = req.body.description
    posts.newPost(title, description)

    res.send("Post adicionado")
})
module.exports = router