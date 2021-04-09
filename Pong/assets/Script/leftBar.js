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

    onKeyD (event) {
        // Set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                this.direction = 1;
                break;
            case cc.macro.KEY.s:
                this.direction = -1;

                break;
        }
    },

    onKeyU (event) {
        // Unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                this.direction = 0;

                break;
            case cc.macro.KEY.s:
                this.direction = 0;

                break;
        }
    },

    onDestroy () {
        // Cancel keyboard input monitoring
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyD, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyU, this);
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.direction = 0
        this.speed = this.moveSpeed

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyD, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyU, this);
    },

    start () {

    },

    update: function (dt) {

        this.node.y += this.direction*this.speed
        if (this.node.y > this.maxHeight){
            this.node.y = this.maxHeight
        }
        if (this.node.y < this.minHeight) {
            this.node.y = this.minHeight
        }
    },
});
