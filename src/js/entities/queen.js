var Piece = require('../entities/piece');

var Queen = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 7 : 1;
    Piece.apply(this, arguments);

};

Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

Queen.prototype.isValidMove = function (toPositionX, toPositionY, board) {

};

module.exports = Queen;