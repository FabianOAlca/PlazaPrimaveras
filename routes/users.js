var express = require ('express')
var db = require('../db/models')

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  return db.User.findAll()
  .then((users) => res.json(users))
});

module.exports = router;
