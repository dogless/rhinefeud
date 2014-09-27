var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

var main_state = {

    preload: function() {
        this.game.stage.backgroundColor = "#71c5cf";
    },

    create: function() {
        this.game.add.sprite(0, 0, 'einstein');
    },

}

var menu_state = {
    create: function() {
        var centerX = this.game.width/2;
        var centerY = this.game.height/2;
        var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
        this.game.stage.backgroundColor = "#bbbfff";
        this.game.titleText = this.game.add.text(this.game.world.centerX, 300, 'Hello', style);
        this.game.titleText.anchor.setTo(0.5, 0.5);
        this.game.add.button(centerX, centerY, 'startButton', this.test, this);
        //game.add.button(100, 200, 'button-start', game.test, game, 1, 0, 2);
    },

    test: function() {
        alert("menu test");
    },

    startClick: function() {
        this.game.state.start('play');
    }
}

game.state.add('main', main_state);
game.state.add('menu', menu_state);
game.state.start('main');
game.state.start('menu');