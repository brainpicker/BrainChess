var Piece = require('../entities/piece');

var Rook = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 8 : 2;
    Piece.apply(this, arguments);

};

Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;

Rook.prototype.isValidMove = function (originalX, originalY, board) {
    return this.isRookValidMove(originalX, originalY, this.x, this.y, board);
};

Rook.prototype.isRookValidMove = function(originalX, originalY, x, y, board) {
    var tileX = originalX / 64;
    var tileY = originalY / 64;

    var toTileX = x / 64;
    var toTileY = y / 64;

    if (!(tileX - toTileX == 0 && tileY != toTileY) && !(tileX != toTileX && tileY - toTileY == 0)) {
        return false;
    }

    var dirX, dirY;
    if (toTileX > tileX) {
        dirX = 1;
    } else if (toTileX < tileX) {
        dirX = -1;
    } else {
        dirX = 0;
    }

    if (toTileY > tileY) {
        dirY = 1;
    } else if (toTileY < tileY) {
        dirY = -1;
    } else {
        dirY = 0;
    }

    var limit;
    if (dirX) {
        limit = Math.abs(tileX - toTileX);
    } else {
        limit = Math.abs(tileY - toTileY);
    }

    for (var i = 1; i < limit; i++) {
        if (board[tileY + i * dirY][tileX + i * dirX] != null) {
            return false;
        }
    }

    return true;
};

module.exports = Rook;