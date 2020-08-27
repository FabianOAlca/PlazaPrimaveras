const express = require("express");
const localesModel = require ('../models/locales')
const router = express.Router();

router.get('/', async (req,res)=>{
    const locales = await localesModel.getAll();
    res.json(locales)
});


module.exports = router;