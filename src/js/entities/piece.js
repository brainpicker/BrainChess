var Piece = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'chess_pieces');
    game.add.existing(this);
    this.frame = this.SPRITE_FRAME;

};

Piece.prototype = Object.create(Phaser.Sprite.prototype);
Piece.prototype.constructor = Piece;

module.exports = Piece;