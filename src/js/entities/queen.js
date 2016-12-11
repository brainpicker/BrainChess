var Piece = require('../entities/piece');

var Queen = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 7 : 1;
    Piece.apply(this, arguments);

};

Queen.prototype = Piece.prototype;
Queen.prototype.constructor = Queen;

module.exports = Queen;