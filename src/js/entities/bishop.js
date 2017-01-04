var Piece = require('../entities/piece');

var Bishop = function (game, x, y, color) {
    this.SPRITE_FRAME = color == 'white' ? 10 : 4;
    Piece.apply(this, arguments);

};

Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

Bishop.prototype.isValidMove = function (originalX, originalY, board) {
    var tileX = originalX / 64;
    var tileY = originalY / 64;

    var toTileX = this.x / 64;
    var toTileY = this.y / 64;

    if (Math.abs(tileX - toTileX) !== Math.abs(tileY - toTileY)) {
        return false;
    }

    var dirX = toTileX > tileX ? 1 : -1;
    var dirY = toTileY > tileY ? 1 : -1;
    for (var i = 1; i < Math.abs(tileX - toTileX) - 1; i++) {
        if (board[tileY + i * dirY][tileX + i * dirX] != null) {
            return false;
        }
    }
    return true;

};

module.exports = Bishop;