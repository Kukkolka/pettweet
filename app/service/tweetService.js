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
////<reference path="typings/@angular/http.d.ts"/>  
var core_1 = require('@angular/core');
//import { Http } from '@angular/http';
require('rxjs/add/operator/map');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var TweetService = (function () {
    function TweetService() {
    }
    TweetService.prototype.getTweets = function () {
        //        return this.http.get('app/data/tweets.json')
        //            .map(response => response.json()['tweets']);
    };
    TweetService.prototype.getPostedTweets = function () {
        var _tweets = ng2_cookies_1.Cookie.get('tweets');
        if (_tweets === null) {
            console.warn('no posted tweets yet');
            return [];
        }
        var _tweetsAr = [];
        for (var tw in _tweets.split(',')) {
            _tweetsAr.push(parseInt(tw));
        }
        return _tweetsAr;
    };
    TweetService.prototype.getRandomTweet = function () { };
    TweetService.prototype.postTweet = function (id) {
        var _tweets = ng2_cookies_1.Cookie.get('tweets');
        ng2_cookies_1.Cookie.set('tweets', _tweets + ',' + id);
    };
    TweetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TweetService);
    return TweetService;
}());
exports.TweetService = TweetService;
//# sourceMappingURL=tweetService.js.map