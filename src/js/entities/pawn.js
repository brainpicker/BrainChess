var Piece = require('../entities/piece');

var Pawn = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 11 : 5;
    Piece.apply(this, arguments);

};

Pawn.prototype = Piece.prototype;
Pawn.prototype.constructor = Pawn;

module.exports = Pawn;