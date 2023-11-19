const express = require('express');
const router = express.Router();
const {getAllCategories,addCategory} = require("../controllers/categoryController"); 

// router
router.get(`/`,getAllCategories);
router.post(`/`,addCategory);

// ngambil params di url
router.get(`/:nama`,(req, res) =>{
    res.send(`Test param ${req.params.nama}`);
});

module.exports = router;