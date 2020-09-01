const express = require("express");
const localesModel = require ('../models/locales');
const router = express.Router();

//get all elements of db primaveras
router.get('/', async (req,res)=>{
    const locales = await localesModel.getLocales();
    res.json(locales);
});

// add new local.... structure of the json to de end of this window
router.post('/', async (req,res)=>{
    const local = req.body;
    const success = await localesModel.addLocal(local);
    if (success){
        res.send(true);
    }else{
        res.send(false);
    }
})

// get only one local in the table
router.get('/:numLocal', async (req,res)=>{
    const numLocal = req.params.numLocal;
    const success = await localesModel.getLocal(numLocal);
    if (success){
        res.json(success);
    }else{
        res.send(false);
    }
});
// edit information of the one local
router.put('/update/:numLocal', async (req,res)=>{
    const numLocal = req.params.numLocal;
    const local = req.body;
    const success = await localesModel.updateLocal(numLocal,local);
    if (success){
        res.send(true);
    }else{
        res.send(false);
    }
});

// delet all infoamtion of the one local
router.delete('/delate/:numLocal',async (req,res)=>{
    const numLocal = req.params.numLocal
    const success = await localesModel.delateLocal(numLocal)
    if (success){
        res.send(true)
    }else{
        res.send(false)
    }
});


module.exports = router;

/*
{
    "numLocal":"4",
	"name": "Plancha Lav",
    "description": "Lavanderia y tintoretia",
    "contact": "31212",
    "email": "planchalav@demo.com",
    "image": "../public/images/demo.jpg",
    "rent": 500,
    "pay_day": "1/mes",
    "p_water": false,
    "open": true,
    "monday": "8:00-21:00",
    "tuesday": "8:00-21:00",
    "wednesday": "8:00-21:00",
    "thursday": "8:00-21:00",
    "friday": "8:00-21:00",
    "saturday": "8:00-21:00",
    "sunday": "8:00-21:00"
  }
*/ 