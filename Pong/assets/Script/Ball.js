// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

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

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.addSpeed = 1;
        this.speedx = this.directionx* (Math.random() - 0.5)*10
        this.speedy = this.directiony* (Math.random() - 0.5)*10
    },

    start () {

    },

    update: function(dt) {
        if (Math.abs(this.node.x) >= 450) {
            this.directionx = - this.directionx
            this.addSpeed+=0.16;
        }
        if (Math.abs(this.node.y) >=280) {
            this.addSpeed += 0.16;
            this.directiony = - this.directiony
        }
        this.node.x += (this.speedx*this.addSpeed)*this.directionx
        this.node.y += (this.speedy*this.addSpeed)*this.directiony
    },
});
