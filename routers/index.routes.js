var express = require ('express')
var router = express.Router()

router.get('/', function(req,res){
    res.send("index homepage");
})

module.exports = router