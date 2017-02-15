"use strict";


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Nmm = require('./Nmm')

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static('dist'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.sendFile('./dist/index.html')
});

app.post('/game', (req, res) => {
  let game = new Nmm(1);
  let move = game.nextMove({state: req.body.plays}, 0, req.body.turn)
  console.log(move)
  res.json({turn: req.body.turn == 0 ? 1 : 0, plays: move.nextMove})
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
