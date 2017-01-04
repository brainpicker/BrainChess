var Rook = require('../entities/rook');
var Horse = require('../entities/horse');
var Bishop = require('../entities/bishop');
var Queen = require('../entities/queen');
var King = require('../entities/king');
var Pawn = require('../entities/pawn');

var Game = function () {
    var boardX;
    var boardY;
    var currentPiece;
    var board;
    var boardLayer;
    var originalX;
    var originalY;
};

module.exports = Game;

Game.prototype = {

    create: function () {

        // Load the map.
        map = this.game.add.tilemap('map');
        map.addTilesetImage('gridtiles', 'gridtiles');

        var backgroundLayer = map.createLayer('board');
        backgroundLayer.scale.set(2);
        backgroundLayer.resizeWorld();
        this.boardLayer = backgroundLayer;

        this.board = [
            [
                new Rook(this.game, 0, 0, 'black'),
                new Horse(this.game, 64, 0, 'black'),
                new Bishop(this.game, 128, 0, 'black'),
                new Queen(this.game, 192, 0, 'black'),
                new King(this.game, 256, 0, 'black'),
                new Bishop(this.game, 320, 0, 'black'),
                new Horse(this.game, 384, 0, 'black'),
                new Rook(this.game, 448, 0, 'black')
            ],
            [
                new Pawn(this.game, 0, 64, 'black'),
                new Pawn(this.game, 64, 64, 'black'),
                new Pawn(this.game, 128, 64, 'black'),
                new Pawn(this.game, 192, 64, 'black'),
                new Pawn(this.game, 256, 64, 'black'),
                new Pawn(this.game, 320, 64, 'black'),
                new Pawn(this.game, 384, 64, 'black'),
                new Pawn(this.game, 448, 64, 'black')
            ],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [
                new Pawn(this.game, 0, 384, 'white'),
                new Pawn(this.game, 64, 384, 'white'),
                new Pawn(this.game, 128, 384, 'white'),
                new Pawn(this.game, 192, 384, 'white'),
                new Pawn(this.game, 256, 384, 'white'),
                new Pawn(this.game, 320, 384, 'white'),
                new Pawn(this.game, 384, 384, 'white'),
                new Pawn(this.game, 448, 384, 'white')
            ],
            [
                new Rook(this.game, 0, 448, 'white'),
                new Horse(this.game, 64, 448, 'white'),
                new Bishop(this.game, 128, 448, 'white'),
                new Queen(this.game, 192, 448, 'white'),
                new King(this.game, 256, 448, 'white'),
                new Bishop(this.game, 320, 448, 'white'),
                new Horse(this.game, 384, 448, 'white'),
                new Rook(this.game, 448, 448, 'white')
            ]
        ];

        this.boardPieces = this.game.add.group();
        for (boardX = 0; boardX < this.board.length; boardX++) {
            for (boardY = 0; boardY < this.board[boardX].length; boardY++) {
                this.currentPiece = this.board[boardX][boardY];
                if (this.currentPiece != null) {
                    this.game.add.existing(this.currentPiece);
                    this.currentPiece.inputEnabled = true;
                    this.currentPiece.input.enableDrag();
                    this.currentPiece.input.enableSnap(64, 64, false, true);
                    this.currentPiece.events.onDragStart.add(this.onDragStart, this);
                    this.currentPiece.events.onDragStop.add(this.onDragStop, this);
                    this.currentPiece.events.onDragUpdate.add(this.onDragUpdate, this);
                    this.boardPieces.add(this.currentPiece);
                }
            }

        }

        this.printXY();
    },

    update: function () {

    },

    onInputDown: function () {
        this.game.state.start('Menu');
    },

    onDragStart: function (sprite, pointer) {
        this.printPosition(sprite);
        this.originalX = sprite.x;
        this.originalY = sprite.y;
        console.log(sprite);
    },

    onDragStop: function (sprite, pointer) {
        this.printPosition(sprite);
        console.log(sprite);

        var tileX = sprite.x / 64;
        var tileY = sprite.y / 64;
        this.currentPiece = this.board[tileY][tileX];

        // same tile
        if (sprite.x == this.originalX && sprite.y == this.originalY) {
            return;
        }

        var validOverlap = this.checkValidOverlap(sprite, this.currentPiece);
        if (!validOverlap) {
            sprite.x = this.originalX;
            sprite.y = this.originalY;
        } else {
            if (!sprite.isValidMove(this.originalX, this.originalY, this.board)) {
                sprite.x = this.originalX;
                sprite.y = this.originalY;
                return;
            }
            if (this.currentPiece != null) {
                this.currentPiece.destroy(true);
            }
            this.board[tileY][tileX] = sprite;
            this.board[this.originalY / 64][this.originalX / 64] = null;
        }

    },

    onDragUpdate: function (sprite, pointer) {
        this.printPosition(sprite);
    },

    checkValidOverlap: function(sprite1, sprite2) {
        if (sprite1 == null || sprite2 == null) {
            return true;
        }
        if (sprite1.x == sprite2.x && sprite1.y == sprite2.y) {
            console.log('overlap: ' + sprite2);
            if (sprite1.color == sprite2.color) {
                console.log('Color of sprites are the same, INVALID');
                return false;
            }
        }

        return true;
    },

    printXY: function() {
        var style = { font: "20px Courier", fill: "#fff", tabs: 80 };
        for (boardX = 0; boardX < this.board.length; boardX++) {
            this.game.add.text(boardX * 64 + 24, 516, boardX, style);
        }
        for (boardY = 0; boardY < this.board.length; boardY++) {
            this.game.add.text(0, boardY * 64 + 32, boardY, style);
        }
    },

    printPosition: function(sprite) {
        this.game.debug.text('Piece in motion: ' + sprite.constructor.name, 32, 548, 'rgb(255,255,255)');
        this.game.debug.text('Tile X: ' + sprite.x / 64, 32, 564, 'rgb(255,255,255)');
        this.game.debug.text('Tile Y: ' + sprite.y / 64, 32, 580, 'rgb(255,255,255)');
    }
};
