// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        pickRadius: 0,
        directionx: 0,
        directiony:  0,
        minspeed:  0,
        maxspeed:  0,
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get ()
    },

    getHit: function () {
        // Determine the distance according to the position of the Player node
        var barx = this.game.leftBar.x;

        var bary = this.game.leftBar.y;

        var halfLength = this.game.leftBar.width/2;

        // Calculate the distance between two nodes according to their positions
        return (Math.abs(barx - this.node.x) < this.pickRadius && Math.abs(bary - this.node.y)< halfLength)
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.addSpeed = 1;
        this.speedx = this.directionx*5
        this.speedy = this.directiony*(Math.random() - 0.5)*5
    },

    start () {

    },

    update: function(dt) {

        if (this.node.x >= 500 || this.getHit()) {
            this.directionx = - this.directionx;
            this.addSpeed+=0.04;;
        }
        if (Math.abs(this.node.y) >=280) {
            this.addSpeed += 0.04;
            this.directiony = - this.directiony;
        }
        this.node.x += (this.speedx*this.addSpeed)*this.directionx;
        this.node.y += (this.speedy*this.addSpeed)*this.directiony;

        if (this.node.x <= -450){
            this.node.destroy();
            this.game.gameOver();
            return;
        }
    },
});
