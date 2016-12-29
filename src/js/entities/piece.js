var Piece = function (game, x, y, color) {
    Phaser.Sprite.call(this, game, x, y, 'chess_pieces');
    game.add.existing(this);
    this.frame = this.SPRITE_FRAME;
    this.x = x;
    this.y = y;
    this.color = color;
};

Piece.prototype = Object.create(Phaser.Sprite.prototype);
Piece.prototype.constructor = Piece;

module.exports = Piece;