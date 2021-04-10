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
        
        ball: {
            default: null,
            type: cc.Prefab
        },

        scoreDisplay: {
            default: null,
            type: cc.Label
        },

        finalD: {
            default:null, 
            type: cc.Label
        },

        zone: {
            default: null,
            type: cc.Node
        },

        button: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {

        this.score = 1;
        this.timer = 0;
        this.spawnball();
        this.button.active = false;
    },


    spawnball: function (){

        this.spawn = true;
        var newBall = cc.instantiate(this.ball);
        this.node.addChild(newBall);
        newBall.setPosition(0,0);
        newBall.getComponent('Ball').game = this;
    },



    start () {

    },

    update: function (dt) {

        this.timer += dt;
        if (this.timer > 7){
            if (this.spawn) {
                this.spawnball();
                this.timer = 0
                this.updateScore();
            }
        
        }

    },

    turnOff: function () {
        this.ball.active = false;
        this.leftBar.active =false;
        this.spawn = false;
        this.finalD.string = "Congrats! Your score is "+ this.score.toString();
        this.ground.opacity = "50";
        this.scoreDisplay.string =" ";
        this.zone.opacity ="0";
        this.button.active = true;
    },

    gameOver: function () {
        // reload the "game" scene
        this.turnOff();
    },

    playAgain: function() {

        cc.director.loadScene('game');
    },

    updateScore: function() {

        this.score += 1;
        this.scoreDisplay.string ="Score: " + this.score.toString();
    },
});
