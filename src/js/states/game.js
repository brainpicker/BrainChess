var Rook = require('../entities/rook');
var Horse = require('../entities/horse');
var Bishop = require('../entities/bishop');
var Queen = require('../entities/queen');
var King = require('../entities/king');
var Pawn = require('../entities/pawn');

var Game = function () {

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

        var blackPiecesArray = [
            new Rook(this.game, 0, 0, 'black'),
            new Horse(this.game, 64, 0, 'black'),
            new Bishop(this.game, 128, 0, 'black'),
            new Queen(this.game, 192, 0, 'black'),
            new King(this.game, 256, 0, 'black'),
            new Bishop(this.game, 320, 0, 'black'),
            new Horse(this.game, 384, 0, 'black'),
            new Rook(this.game, 448, 0, 'black')
        ];

        for (var i = 0; i < 8; i++) {
            blackPiecesArray.push(new Pawn(this.game, i * 64, 64));
        }

        this.blackPieces = this.game.add.group();
        blackPiecesArray.forEach(function(blackPiece) {
            this.game.add.existing(blackPiece);
            this.blackPieces.add(blackPiece);
        }, this);


        var whitePiecesArray = [
            new Rook(this.game, 0, 448, 'white'),
            new Horse(this.game, 64, 448, 'white'),
            new Bishop(this.game, 128, 448, 'white'),
            new Queen(this.game, 192, 448, 'white'),
            new King(this.game, 256, 448, 'white'),
            new Bishop(this.game, 320, 448, 'white'),
            new Horse(this.game, 384, 448, 'white'),
            new Rook(this.game, 448, 448, 'white')
        ];

        for (i = 0; i < 8; i++) {
            whitePiecesArray.push(new Pawn(this.game, i * 64, 384, 'white'));
        }

        this.whitePieces = this.game.add.group();
        whitePiecesArray.forEach(function(blackPiece) {
            this.game.add.existing(blackPiece);
            this.whitePieces.add(blackPiece);
        }, this);


    },

    update: function () {

    },

    onInputDown: function () {
        this.game.state.start('Menu');
    }
};
