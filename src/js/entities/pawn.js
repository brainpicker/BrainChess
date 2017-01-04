var Piece = require('../entities/piece');

var Pawn = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 11 : 5;
    Piece.apply(this, arguments);

};

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

Pawn.prototype.isValidMove = function (originalX, originalY, board) {
    var toTileX = originalX / 64;
    var toTileY = originalY / 64;

    var tileX = this.x / 64;
    var tileY = this.y / 64;

    // check if he moves 1 forward or 2 forward
    if (this.color == 'white') {
        if (tileX == toTileX && ((toTileY - tileY == 1) || (toTileY - tileY == 2))) {
            return true;
        }
    } else {
        if (tileX == toTileX && ((tileY - toTileY == 1) || (tileY - toTileY == 2))) {
            return true;
        }
    }

    // check if other piece is diagonal
    // check if last move was a pawn to piece adjacent and move is diagonal behind

    return false;
};

module.exports = Pawn;