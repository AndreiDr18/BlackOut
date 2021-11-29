const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public/index'));

app.set('view engine', 'ejs');

app.listen(8080, ()=>{
    console.log('Listening to port 8080');
});

app.get('/', (req, res)=>{
    res.render('index');
})