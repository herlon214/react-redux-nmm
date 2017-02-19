"use strict";

const Nmm = require('./Nmm')
let board = {"turn":1,"plays":["none","none","none","none","player0","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}
let game = new Nmm();

let x = game.minimax(board.plays, board.turn, 0)
console.log(x)
