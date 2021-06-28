const express = require('express')
var path = require('path');
const bodyParser = require('body-parser');
const check = require('./check')
const app = express()


app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/views/index.html'));
//   });

  
//   app.get('/script.js', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/script.js'));
//   });


//   app.post('/mailping', function (req, res) {



//     res.send('POST request to the homepage')
//   })

app.post('/mailping', async (req, res) => {
    console.log('Got body:', req.body.email);
    const validate = await check.validate(req.body.email)
    console.log(validate)
    //await res.send(validate)
    res.json(validate)
});


app.get('/script.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/script.js'));
  });


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
  });


app.listen(3000)