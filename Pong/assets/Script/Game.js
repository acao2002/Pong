// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        ground: {
            default: null,
            type: cc.Node
        },

        // Player node for obtaining the jump height of the main character and controlling the movement switch of the main character
        leftBar: {
            default: null,
            type: cc.Node
        },

        rightBar: {
            default: null,
            type: cc.Node
        },
        
        ball: {
            default: null,
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {

        this.spawnball();
    },

    spawnball: function (){

    
        var newBall = cc.instantiate(this.ball);
        this.node.addChild(newBall);
        newBall.setPosition(0,0);
        newBall.getComponent('Ball').game = this;
    },

    start () {

    },

    // update (dt) {},
});
