var express = require ('express')
var router = express.Router()

router.get('/customer', function(req,res){
    res.render('pages/customer');
    
})

module.exports = router