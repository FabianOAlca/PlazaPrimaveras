const db = require('../db/db_config')

const getAll = async ()=>{
    try{
        const locales = await db.Locales.findAll()
        return locales
    }catch (err){
        return console.log(err)
    }
}

module.exports = {getAll}