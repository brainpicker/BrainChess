var Game = function () {
    this.testentity = null;
};

module.exports = Game;

Game.prototype = {

    create: function () {

        // Load the map.
        map = this.game.add.tilemap('map');
        map.addTilesetImage('gridtiles', 'gridtiles');

        var backgroundLayer = map.createLayer('board');
        backgroundLayer.resizeWorld();
    },

    update: function () {
        
    },

    onInputDown: function () {
        this.game.state.start('Menu');
    }
};
