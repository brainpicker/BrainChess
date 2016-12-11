var Piece = require('../entities/piece');

var King = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 6 : 0;
    Piece.apply(this, arguments);

};

King.prototype = Piece.prototype;
King.prototype.constructor = King;

module.exports = King;