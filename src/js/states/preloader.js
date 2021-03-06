var Preloader = function (game) {
    this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

    preload: function () {
        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

        this.game.load.tilemap('map', 'assets/tilemaps/chess_board.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('gridtiles', 'assets/gridtiles.png');
        this.game.load.spritesheet('chess_pieces', 'assets/chess_pieces.png', 64, 64, 12);
    },

    create: function () {

    },

    update: function () {
        if (!!this.ready) {
            // this.game.state.start('Menu');
            this.game.state.start('Game');
        }
    },

    onLoadComplete: function () {
        this.ready = true;
    }
};
