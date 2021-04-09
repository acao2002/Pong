// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        maxHeight: 0,
        minHeight: 0,
        moveSpeed: 0,
    },

    onKeyDown (event) {
        // Set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                this.Up = true;
                break;
            case cc.macro.KEY.s:
                this.Down = true;
                break;
        }
    },

    onKeyUp (event) {
        // Unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                this.Up = false;
                break;
            case cc.macro.KEY.s:
                this.Down = false;
                break;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {

        this.Up = false;
        this.Down = false;
        this.speed = this.moveSpeed

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start () {

    },

    update: function (dt) {

        if(this.Up) {
            this.node.y += this.speed
        }
        if(this.Down) {
            this.node.y -= this.speed
        }
        if (this.node.y > this.maxHeight){
            this.node.y = this.maxHeight
        }
        if (this.node.y < this.minHeight) {
            this.node.y = this.minHeight
        }
    },
});
