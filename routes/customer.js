var express = require ('express')
var router = express.Router()
var db = require('./config/database.js');

router.get('/', function(req,res){
    res.render('pages/customer');

})

router.post('/addcustomer', function(req,res){
    var sql = "INSERT INTO customer VALUES (?)";
    var values = [
        reza,
        18
    ];
    db.query(sql,[values],function(err, data, fields){
        if(err) throw err;
        res.json({
            status : 200,
            message: "Customer baru berhasil ditambahkan"
        })
    })
})

router.post('/editcustomer/:id',function (req,res) {
    
})

module.exports = router