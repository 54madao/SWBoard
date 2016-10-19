'use strict'
// import '../node_modules/paper/dist/paper-full.js';
// import paper from '../node_modules/paper/dist/paper-full.js';
// import 'paper';
import "babel-polyfill";
import Paint from './paint';
import conn from './connect';

new Paint({
	'canvas': $("#paintingCanvas"),
	'toolbar': $('#paintingToolbar'),
	'menu': $('#paintingMenu')
});

// var peer = new Peer({key: 'h4vvvnumco50cnmi'});

// console.log(peer); 
