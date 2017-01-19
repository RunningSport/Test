require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"buttonScale":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f5ad20VNhBKe6qF/4EkPua1', 'buttonScale');
// Script\buttonScale.js

cc.Class({
    'extends': cc.Component,

    properties: {
        sfx: cc.AudioClip,
        pressedScale: 1,
        transDuration: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        self.initScale = this.node.scale;
        self.button = self.getComponent(cc.Button);
        self.scaleDownAction = cc.scaleTo(self.transDuration, self.pressedScale);
        self.scaleUpAction = cc.scaleTo(self.transDuration, self.initScale);
        function onTouchDown(event) {
            this.stopAllActions();
            if (this.sfx) {
                cc.audioEngine.playEffect(this.sfx, false);
            }
            this.runAction(self.scaleDownAction);
        }
        function onTouchUp(event) {
            this.stopAllActions();
            this.runAction(self.scaleUpAction);
        }
        this.node.on('touchstart', onTouchDown, this.node);
        this.node.on('touchend', onTouchUp, this.node);
        this.node.on('touchcancel', onTouchUp, this.node);
    }

});

cc._RFpop();
},{}],"config":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4bdcftVFqVP7bZQoHLieZ87', 'config');
// Script\config.js

var cfg = {

	// 游戏战斗界面配置
	lineCount: 5, // 出怪的行数
	lineHeight: 110, // 每行高度
	rowWidth: 80, // 每列宽度
	bottomY: -237, // 最低点高度
	leftX: -158, // 怪物可以移动到的最左边界
	rightX: 760, // 怪物出现的起始边界

	// 刷怪配置
	loseHP: 1, // 点击一下，怪物减少的血量
	waveSpan: 2, // 刷每波怪物的时间间隔

	// 枚举类型
	menuType: cc.Enum({
		MT_MAIN: 1, // 主菜单
		MT_LOSE: -1, // 失败菜单
		MT_WIN: -1 }),

	// 胜利菜单
	gameResultType: cc.Enum({
		GRT_UNKNOW: 0, // 初始态
		GRT_LOSE: -1, // 失败
		GRT_EQUATE: -1, // 平手
		GRT_WIN: -1 }),

	// 胜利
	// 怪物资源
	guaiType: [{
		id: 0, // 普通怪
		name: "GT_NORMAL",
		prefab: "jiangshi_3"
	}, {
		id: 1, // 快速怪
		name: "GT_SPEED",
		prefab: "jiangshi_2"
	}, {
		id: 2, // 慢速怪
		name: "GT_SLOW",
		prefab: "jiangshi_1"
	}],

	// 刷怪表
	levels: [{
		day: 1,
		spanMin: 2, spanMax: 2,
		waves: [{ waveID: 1, GT: "GT_NORMAL", count: 1 }, { waveID: 2, GT: "GT_NORMAL", count: 2 }, { waveID: 3, GT: "GT_NORMAL", count: 3 }]
	}, {
		day: 2,
		spanMin: 0, spanMax: 2,
		waves: [{ waveID: 1, GT: "GT_NORMAL", count: 5 }, { waveID: 2, GT: "GT_NORMAL", count: 5 }, { waveID: 2, GT: "GT_SLOW", count: 1 }, { waveID: 3, GT: "GT_NORMAL", count: 10 }, { waveID: 3, GT: "GT_SLOW", count: 1 }]
	}, {
		day: 3,
		spanMin: 0, spanMax: 1.5,
		waves: [{ waveID: 1, GT: "GT_NORMAL", count: 15 }, { waveID: 1, GT: "GT_SLOW", count: 2 }, { waveID: 2, GT: "GT_NORMAL", count: 10 }, { waveID: 2, GT: "GT_SLOW", count: 3 }, { waveID: 2, GT: "GT_SPEED", count: 2 }, { waveID: 3, GT: "GT_NORMAL", count: 10 }, { waveID: 3, GT: "GT_SLOW", count: 5 }, { waveID: 3, GT: "GT_SPEED", count: 5 }]
	}, {
		day: 4,
		spanMin: 0, spanMax: 1,
		waves: [{ waveID: 1, GT: "GT_NORMAL", count: 10 }, { waveID: 1, GT: "GT_SPEED", count: 5 }, { waveID: 2, GT: "GT_NORMAL", count: 10 }, { waveID: 2, GT: "GT_SLOW", count: 3 }, { waveID: 2, GT: "GT_SPEED", count: 2 }, { waveID: 3, GT: "GT_NORMAL", count: 12 }, { waveID: 3, GT: "GT_SLOW", count: 3 }, { waveID: 3, GT: "GT_SPEED", count: 6 }]
	}, {
		day: 5,
		spanMin: 0, spanMax: 1,
		waves: [{ waveID: 1, GT: "GT_SPEED", count: 3 }, { waveID: 2, GT: "GT_SPEED", count: 10 }, { waveID: 3, GT: "GT_SPEED", count: 20 }]
	}]
};

module.exports = cfg;

cc._RFpop();
},{}],"daoju":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8fc91JOmp9FT4GKTEcPp0g6', 'daoju');
// Script\daoju.js

cc.Class({
    "extends": cc.Component,

    properties: {
        hp: 0,
        slow: 0
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"game":[function(require,module,exports){
"use strict";
cc._RFpush(module, '37368DIIE1Fgq/JQ1HejiLJ', 'game');
// Script\game.js


var cfg = require("config");
// var shg = require("shuaguai");
// var menu = require("menu");

var Game = cc.Class({
    "extends": cc.Component,

    properties: {
        gameLayer: cc.Node,
        today: 0
    },

    statics: {
        instance: null
    },

    // use this for initialization
    onLoad: function onLoad() {
        Game.instance = this;
        this.menu = this.gameLayer.getComponent("menu");
        this.shuaguai = this.gameLayer.getComponent("shuaguai");

        this.day = this.today; // 第几天
        this.setGameResult(cfg.gameResultType.GRT_UNKNOW); // 游戏结果

        // this.playNextDay();
    },

    getDay: function getDay() {
        return this.day;
    },

    getWaveConfig: function getWaveConfig() {
        return cfg.levels[this.day];
    },

    addOneDay: function addOneDay() {
        this.day += 1;

        if (this.day >= cfg.levels.length) {
            cc.log("game finished, and will be replaying!");
            this.day = 0;
        }
    },

    setGameResult: function setGameResult(p) {
        this.gameResult = p;
    },

    startPlay: function startPlay() {
        this.menu.showMenu(cfg.menuType.MT_MAIN, false);
        this.playNextDay(false);
    },

    gameLose: function gameLose() {
        this.setGameResult(cfg.gameResultType.GRT_LOSE);
        this.menu.showMenu(cfg.menuType.MT_LOSE, true);
    },

    gameWin: function gameWin() {
        this.setGameResult(cfg.gameResultType.GRT_WIN);
        this.menu.showMenu(cfg.menuType.MT_WIN, true);
    },

    replay: function replay() {
        this.menu.showMenu(cfg.menuType.MT_LOSE, false);
        this.playNextDay(true);
    },

    continumPlay: function continumPlay() {
        this.menu.showMenu(cfg.menuType.MT_WIN, false);
        this.playNextDay(true);
    },

    showMainMenu: function showMainMenu() {
        this.menu.showMenu(cfg.menuType.MT_LOSE, false);
        this.menu.showMenu(cfg.menuType.MT_MAIN, true);

        this.shuaguai.removeAllChildrenByTag(1);
        var pos = this.gameLayer.getPosition().add(cc.p(460, 0));
        this.gameLayer.setPosition(pos);
    },

    playNextDay: function playNextDay(replay) {
        if (this.gameResult == cfg.gameResultType.GRT_WIN) this.addOneDay();

        this.setGameResult(cfg.gameResultType.GRT_UNKNOW);
        if (replay) {
            this.shuaguai.removeAllChildrenByTag(1);
        }
        this.shuaguai.game = this;
        this.shuaguai.init(this.day);
        this.shuaguai.startPlay(replay ? 0 : cfg.waveSpan);
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"config":"config"}],"jiangshi":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2df78uYR5BH2JTjy+GODKyE', 'jiangshi');
// Script\jiangshi.js

var config = require("config");
var menu = require("menu");

cc.Class({
    "extends": cc.Component,

    properties: {
        hp: 0, // 点击几次被打掉
        speed: 0.0, // 每秒移动几个
        power: 0, // 每秒攻击几次
        shuaguai: { // 暂存 Game 对象的引用
            "default": null,
            serializable: false,
            visible: false
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.beActive = true;

        var y = Math.ceil(cc.random0To1() * 10000) % config.lineCount * config.lineHeight + config.bottomY;
        this.node.setPosition(config.rightX, y);
        var move = this.moveAction();
        move.tag = 1;
        this.node.runAction(move);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    },

    moveAction: function moveAction() {
        var move = cc.moveBy(1, cc.p(-config.rowWidth / this.speed, 0));
        // var finished = cc.callFunc(this.isMoveEnd,this);
        return cc.repeatForever(cc.sequence(move /*,finished*/)); //.speed(1);
    },

    isMoveEnd: function isMoveEnd() {
        if (this.node.x < config.leftX) {
            this.node.stopAllActions();
            this.gameLose();
        }
    },

    onTouch: function onTouch() {
        if (this.beHit()) {
            this.dropCoin();
        }
    },

    beHit: function beHit() {
        if (this.beActive == false || this.hp < 1) {
            return false;
        }

        this.hp -= config.loseHP;

        if (this.hp < 1) {
            this.dead();
        }

        return true;
    },

    dropCoin: function dropCoin() {
        // cc.log("drop coin");
    },

    dead: function dead() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        this.node.destroy();
        // cc.log("dead");
        this.shuaguai.addCatchCount();
    },

    gameLose: function gameLose() {
        cc.log("game lose");
        this.beActive = false;
        this.node.stopActionByTag(1);
        cc.director.getScheduler().pauseTarget(this.node);
        // menu.showMenu(config.menuType.MT_LOSE,true);
        // this.node.active = false;
        this.shuaguai.gameLose();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.beActive && this.node.x < config.leftX) {
            this.gameLose();
        }
    }
});

cc._RFpop();
},{"config":"config","menu":"menu"}],"menu":[function(require,module,exports){
"use strict";
cc._RFpush(module, '70e208uxhFBpLfn5SW8uaIV', 'menu');
// Script\menu.js

var cfg = require("config");

cc.Class({
    "extends": cc.Component,

    properties: {
        mainMenu: cc.Node,
        loseMenu: cc.Node,
        winMenu: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.mainMenu.active = true;
        this.loseMenu.active = false;
        this.winMenu.active = false;

        this.mainMenu.scaleX = 0;
        this.mainMenu.runAction(cc.scaleTo(1, 1));
    },

    showMenu: function showMenu(menuID, bShow) {
        switch (menuID) {
            case cfg.menuType.MT_MAIN:
                {
                    this.mainMenu.active = bShow;
                    break;
                }
            case cfg.menuType.MT_LOSE:
                {
                    this.loseMenu.active = bShow;
                    break;
                }
            case cfg.menuType.MT_WIN:
                {
                    this.winMenu.active = bShow;
                    break;
                }
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"config":"config"}],"shuaguai":[function(require,module,exports){
"use strict";
cc._RFpush(module, '33b57oPcttBP7PCgYjngjs6', 'shuaguai');
// Script\shuaguai.js

var cfg = require("config");
// var game = require("game");

cc.Class({
    "extends": cc.Component,

    properties: {
        guaiList: [cc.Prefab],
        game: { // 暂存 Game 对象的引用
            "default": null,
            serializable: false,
            visible: false
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var zhezhao = this.node.getChildByName("scensmengban");
        zhezhao.setLocalZOrder(1);
    },

    init: function init(day) {
        cc.log("init the day of " + (day + 1));
        this.level = cfg.levels[day]; // 本关刷怪表
        this.wavesIndex = 0; // 刷怪表游标
        this.waveID = 0; // 第几波
        this.curWave = [0]; // 当前波的怪物类型、数量
        this._count = 0; // 怪物个数
        this._addCount = 0; // 已经刷怪个数
        this._catchCount = 0; // 被抓住的个数
    },

    addOneGuai: function addOneGuai() {
        if (this._addCount < this._count) {
            var len = Math.ceil(10000 * cc.random0To1()) % (this._count - this._addCount);
            for (var i = 1; i < this.curWave.length; i += 2) {
                if (this.curWave[i] < len) {
                    len -= this.curWave[i];
                } else {
                    for (var j = 0; j < cfg.guaiType.length; j++) {
                        if (cfg.guaiType[j].name == this.curWave[i - 1]) {
                            cc.log("添加第 " + (this._addCount + 1) + " 个怪:  " + cfg.guaiType[j].name + " " + cfg.guaiType[j].prefab);
                            var guai = cc.instantiate(this.guaiList[cfg.guaiType[j].id]);
                            guai.tag = 1;
                            this.node.addChild(guai);
                            guai.getComponent("jiangshi").shuaguai = this;
                        }
                    }
                    break;
                }
            }

            var span = this.level.spanMin;
            if (span < this.level.spanMax) {
                span += cc.random0To1() * (this.level.spanMax - span);
            }
            this.node.runAction(cc.sequence(cc.delayTime(span), cc.callFunc(this.addOneGuai, this)));

            this._addCount += 1;
        } else {
            cc.log("第 " + this.waveID + " 波怪刷完。");
        }
    },

    loadNextWave: function loadNextWave() {
        this.waveID += 1;
        this.curWave.length = 0;
        this._count = 0;
        this._addCount = 0;
        this._catchCount = 0;

        var len = 0;
        var waves = this.level.waves;
        for (var i = this.wavesIndex; i < waves.length; i++) {
            var cur = waves[i];
            if (cur.waveID != this.waveID) {
                break;
            }
            this.curWave[len++] = cur.GT;
            this.curWave[len++] = cur.count;
            this._count += cur.count;

            cc.log("第 " + cur.waveID + " 波，" + cur.GT + " 类型怪 " + cur.count + " 个。");
        }

        this.wavesIndex = i;
        return len > 0;
    },

    playNextWave: function playNextWave() {
        if (this.loadNextWave()) {
            this.addOneGuai();
        } else {
            cc.log("the last wave");
        }
    },

    startPlay: function startPlay(span) {
        cc.log("等待 " + span + " 秒");
        if (span > 0.001) {
            this.node.runAction(cc.moveBy(span, cc.p(-460, 0)));
        }

        this.node.runAction(cc.sequence(cc.delayTime(span), cc.callFunc(this.playNextWave, this)));
    },

    stopAllChildActions: function stopAllChildActions() {
        this.node.stopAllActions();

        var childrens = this.node.getChildren();
        for (var i = 0; i < childrens.length; i++) {
            if (childrens[i].tag == 1) {
                childrens[i].stopActionByTag(1);
                childrens[i].getComponent("jiangshi").beActive = false;
            }
        }
    },

    gameLose: function gameLose() {
        this.stopAllChildActions();
        this.game.gameLose();
    },

    removeAllChildrenByTag: function removeAllChildrenByTag(tag) {
        var childrens = this.node.getChildren();
        for (var i = childrens.length - 1; i >= 0; i--) {
            if (childrens[i].tag == tag) {
                childrens[i].active = false;
                this.node.removeChild(childrens[i]);
            }
        }
    },

    addCatchCount: function addCatchCount() {
        this._catchCount++;
        if (this._catchCount == this._count) {
            if (this.wavesIndex < this.level.waves.length) {
                this.node.runAction(cc.sequence(cc.delayTime(cfg.waveSpan), cc.callFunc(this.playNextWave, this)));
            } else {
                this.game.gameWin();
            }
        }
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{"config":"config"}]},{},["jiangshi","shuaguai","game","config","menu","daoju","buttonScale"]);
