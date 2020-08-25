const express = require("express");
const db = require("../db/models");

const router = express.Router();

//post to create new local
router.post("/", (req,res,next)=> {
    const {name,localId,giro,pday,renta} = req.body

    const newLocal = {
        name,
        localId,
        giro,
        pday,
        renta,
    }

    db.Local.create(newLocal)
    .then((locales)=>{
        res.json({success:true,data:locales})
    })
    .catch((error)=>{
        res.status(500).json({error})
    })
})
// edit-update an existing local 
router.put("/edit/:id",(req,res,next)=>{
    const LocalId = req.params.id;
    const {name,localId,giro,pday,renta} = req.body;

    const updatelocal = {
        id : LocalId,
        name,
        localId,
        giro,
        pday,
        renta
    }

    db.Local.update(updatelocal, {where:{id:LocalId}})
    .then((updatelocal)=>{
        res.json({success:true,data:updatelocal})
    })
    .catch((error)=>{
        res.status(500).json({error: error})
    })
// Delete an existing local
    router.delete("/delate/:id",(req,res,next)=>{
        const LocalId = req.params.id

        db.Local.destroy({where:{id:LocalId}})
        .then(()=>{
            res.json({success:true})
        })
        .catch((error)=>{
            res.status(500).json({error:error})
        })
    })

})

module.exports = router;