var Piece = require('../entities/piece');

var Horse = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 9 : 3;
    Piece.apply(this, arguments);

};

Horse.prototype = Piece.prototype;
Horse.prototype.constructor = Horse;

module.exports = Horse;