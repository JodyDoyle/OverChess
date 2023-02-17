var board = -1;
var butto = 0;
var curbut = 0;
var asyncCheck = 0;
var cancelCheck = 0;
var party = ['Bloba', 'Red Dragon', '-', '-', '-'];
var oparty = ['Packun', 'Blue Dog', '-', '-', '-'];
var moves = ['Anchor', 'Slap', 'Move', '-', '-'];
var omoves = ['Bite', 'Poison Smoke', '-', '-', '-'];
var selected = 'Something went wrong!'
var tcord = 'C1';
var otcord = 'C5';
var pieces = ['-', '-', '-', '-', '-'];
var dmgmultiplier = [1, 1, 1, 1, 1];
var piecescount = 0;
var opieces = ['-', '-', '-', '-', '-'];
var odmgmultiplier = [1, 1, 1, 1, 1];
var opiecescount = 0;
var tileselected = '';
var prevtileselected = '';
var actualtileselected
var health = ['500', '-', '-', '-', '-'];
var ohealth = ['125', '-', '-', '-', '-'];
var platurn = false;
var gameover = false;
var h = '';
var t = '';
var cheer = '';
var playerName = 'Jim9174';
var activeEffects = [[]];
var pstatus = [
[0,0,0,0,0], // This is for poison
[0,0,0,0,0], // Haven't decided
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]
];
var ostatus = [
[0,0,0,0,0], // This is for poison
[0,0,0,0,0], // Haven't decided
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]
];