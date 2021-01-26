const mysqlDB = require('../configs/db.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {res.render('login.html'); });
router.post('/', function(req, res){
    var id = req.body.id;
    var pw = req.body.pw;
    mysqlDB.query('select * from user where id = ? and pw = ?', [id, pw],
    function(err, queriedResult){
        if(err){
            throw err;
        }
        else{
            if(queriedResult.length === 0){
                return res.sendStatus(400);
            }
            if(queriedResult[0].pw === pw){
                console.log(req.session);
                req.session.id = queriedResult[0].id;
                req.session.save(function(){

                });
                return res.redirect("main.html");
            }else{
                console.log(queriedResult);
                return res.sendStatus(400);
            }
        }
    })
});

module.exports = router;