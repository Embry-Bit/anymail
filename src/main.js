const express = require('express')
var path = require('path');
const bodyParser = require('body-parser');
const protect = require('@risingstack/protect')
const redis = require('redis')

const validate = require('./utils/validate')
const log = require('./utils/log')
const permutate = require('./utils/permutate')

const client = redis.createClient()
const app = express()

// Middleware for basic security

app.use(log.sendExpress)

app.use(bodyParser.json({
    extended: false
}))

app.use(protect.express.sqlInjection({
    body: true,
    loggerFunction: console.error
}))

app.use(protect.express.xss({
    body: true,
    loggerFunction: console.error
}))

app.use(protect.express.rateLimiter({
    db: client,
    id: (request) => request.connection.remoteAddress
}))

// Setting up public documents

app.use(express.static('public'));
app.use("/styles", express.static(__dirname + 'public/styles'));
app.use("/images", express.static(__dirname + 'public/images'));
app.use("/scripts", express.static(__dirname + 'public/scripts'));

app.use(bodyParser.urlencoded({
    extended: true
}));

// Actual post and get requests

app.post('/mailping', protect.express.rateLimiter({
    db: client,
    id: (req) => req.body.email,
    // max 10 tries per 2 minutes
    max: 10,
    duration: 120000
}), async (req, res) => {



    await log.send('mailPing', 'Requested ' + req.body.email, false)
    const score = await validate.validate(req.body.email)
    res.json(score)


})

app.post('/mailpermutate', protect.express.rateLimiter({
    db: client,
    id: (req) => req.body.email,
    // max 10 tries per 2 minutes
    max: 5,
    duration: 120000
}), async (req, res) => {

    await log.send('mailPermutate', 'Requested ' + req.body.email, false)
    console.log(req.body.email)
    const splice = await permutate.splice(req.body.email)
    const permutatedEmails = await permutate.permutate(splice[0], splice[1], splice[2])
    res.json(permutatedEmails)

})

app.get('/script.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/scripts/script.js'));
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});


app.get('/permutate', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/permutate.html'));
});


app.get('/error', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/error.html'));
});


app.listen(3000)