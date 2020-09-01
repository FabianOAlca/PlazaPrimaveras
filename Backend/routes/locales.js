const express = require("express");
const db = require("../db/models");


const router = express.Router();

//Get User Locales 
router.get("/", (req,res,next)=>{
    return db.Local.findAll()
    .then((locales)=> res.json(locales))
})

//Get a esclusive local 

router.get("/:id", (req,res,next)=>{
    const localid = req.params.id;
    return db.Local.findByPk(localid)
    .then((locales) => res.json(locales))
})



module.exports = router;