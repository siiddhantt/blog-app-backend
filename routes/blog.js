const express = require('express');
const router = express.Router();
const axios = require('axios');
const Data = require('../models/Data');

// Get all blogs using : GET 'api/blog/all'.
router.get('/all', async (req, res) => {
    try {
        let allBlogs = await Data.find();
        res.send(allBlogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured!")
    }
});

// Add blog using : POST 'api/blog/add'.
router.post('/add', async (req, res) => {
    try {
        let newBlog = await Data.create({ id: req.body.id, title: req.body.title, categories: req.body.categories, content: req.body.content, likes: req.body.likes });
        res.send(newBlog);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured!")
    }
});

// Delete blog by id using : POST 'api/blog/delete'.
router.post('/delete', async (req, res) => {
    try {
        let reqid = req.body.id;
        let allBlogs = await Data.findOneAndDelete({ id: reqid }).exec();
        res.send(allBlogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured!")
    }
});

// Update blog using : POST 'api/blog/update'.
router.post('/update', async (req, res) => {
    try {
        let reqid = req.body.id;
        let updatedBlog = await Data.findOneAndUpdate({ id: reqid }, { title: req.body.title, categories: req.body.categories, content: req.body.content, likes: req.body.likes }).exec();
        res.send(updatedBlog);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured!")
    }
});


module.exports = router
