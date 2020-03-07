var http = require('http');
var path = require('path');
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
})

app.listen(8000, () => {
    console.log('Listening on http://localhost:8000');
});