var Piece = require('../entities/piece');

var Rook = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 8 : 2;
    Piece.apply(this, arguments);

};

Rook.prototype = Piece.prototype;
Rook.prototype.constructor = Rook;

module.exports = Rook;