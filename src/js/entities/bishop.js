var Piece = require('../entities/piece');

var Bishop = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 10 : 4;
    Piece.apply(this, arguments);

};

Bishop.prototype = Piece.prototype;
Bishop.prototype.constructor = Bishop;

module.exports = Bishop;