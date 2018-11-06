"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var AbstractPet = (function () {
    function AbstractPet() {
        this.name = '';
        this.personality = [];
        if (!this.rememberName()) {
            //animal doesnt have a name
            console.warn('your pet doesnt have a name');
        }
    }
    AbstractPet.prototype.postFirstTweet = function (tweets, service) {
        var _tweets = [];
        for (var i in tweets) {
            if (tweets[i]['pettype'] == this.petType.id && tweets[i]['tweetType'] === 0 /* GREETINGS */) {
                _tweets.push(tweets[i]['tweet']);
            }
        }
        this.postTweet(_tweets[Math.random() * _tweets.length - 1], service);
    };
    AbstractPet.prototype.postTweet = function (tweet, service) {
        service.postTweet(tweet.id);
        console.log('posting "' + tweet.tweet + ' id: ' + tweet.id);
    };
    AbstractPet.prototype.rememberName = function () {
        var _name = ng2_cookies_1.Cookie.get('petName');
        if (_name) {
            this.name = _name;
            return true;
        }
        return false;
    };
    AbstractPet.prototype.setPetType = function (_type) {
        this.petType = _type;
    };
    AbstractPet.prototype.setName = function (newName) {
        this.name = newName;
        ng2_cookies_1.Cookie.set('petName', this.name);
    };
    AbstractPet.prototype.getName = function () {
        return this.name;
    };
    AbstractPet.prototype.getPetType = function () {
        return this.petType;
    };
    AbstractPet.prototype.getPersonalitys = function () {
        return this.personality;
    };
    AbstractPet.prototype.getRandomPersoniltyTrait = function () {
        return this.personality[Math.random() * this.personality.length - 1];
    };
    AbstractPet = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AbstractPet);
    return AbstractPet;
}());
exports.AbstractPet = AbstractPet;
//# sourceMappingURL=AbstractPet.js.map