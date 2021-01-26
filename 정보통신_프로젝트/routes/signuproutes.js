const mysqlDB = require('../configs/db.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {res.render('signup.html');});

router.post('/', async function(req, res){
    var id = req.body.id;
    var pw = req.body.pw;
    mysqlDB.query('select * from user where id = "id"', function(err, result){
        if(result.length === 0 ){
            mysqlDB.query('insert into user (id, pw) values (?, ?)', [id, pw]);
            return res.redirect('http://localhost:3000/login');
        }
        else{
            return res.sendStatus(400); 
        }
    });
});

module.exports = router;