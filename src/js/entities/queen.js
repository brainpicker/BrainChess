var Piece = require('../entities/piece');
var Bishop = require('../entities/bishop');
var Rook = require('../entities/rook');

var Queen = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 7 : 1;
    Piece.apply(this, arguments);

};

Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

Queen.prototype.isValidMove = function (originalX, originalY, board) {
    var isBishopValidMove = Bishop.prototype.isBishopValidMove(originalX, originalY, this.x, this.y, board);
    var isRookValidMove = Rook.prototype.isRookValidMove(originalX, originalY, this.x, this.y, board);

    return isBishopValidMove || isRookValidMove;
};

module.exports = Queen;