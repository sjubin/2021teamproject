const express = require('express');
const loginroutes = require('./routes/loginroutes');
const signuproutes = require('./routes/signuproutes');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('index'));

app.use(session({
    secret: "asdfasdffdsa",
    resave: false,
    saveUninitialized: true
}));

app.use('/signup', signuproutes);
app.use('/login', loginroutes);
app.use('/api', router);

app.listen(3000, function(){
    console.log("server starting with 3000");
})