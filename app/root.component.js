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
var core_1 = require("@angular/core");
var tweetService_1 = require('./service/tweetService');
var petService_1 = require('./service/petService');
var AbstractPet_1 = require('./pets/AbstractPet');
//import { TweetTypes } from '../enums/tweetTypes'
//import { Tweet } from '../vo/tweet'
var RootComponent = (function () {
    function RootComponent(tweetService, pet, petService) {
        var _this = this;
        this.tweets = [];
        this.posted_tweets = [];
        this.isCalling = true;
        var _myPet = petService.getMyPet();
        if (typeof (_myPet) === 'undefined') {
        }
        else {
            this.pet = _myPet;
            tweetService.getTweets()
                .subscribe(function (tweets) {
                _this.tweets = tweets;
                var _firstTweets = tweetService.getPostedTweets();
                if (_firstTweets.length === 0) {
                    pet.postFirstTweet(_this.tweets, tweetService);
                }
                _this.posted_tweets = tweetService.getPostedTweets();
            });
        }
    }
    RootComponent.prototype.toggleCalling = function () {
        this.isCalling = !this.isCalling;
    };
    RootComponent = __decorate([
        core_1.Component({
            selector: "root-component",
            templateUrl: "app/templates/root-page.html",
            styleUrls: ['app/css/root-page.css'],
            providers: [tweetService_1.TweetService, AbstractPet_1.AbstractPet, petService_1.PetService]
        }), 
        __metadata('design:paramtypes', [tweetService_1.TweetService, AbstractPet_1.AbstractPet, petService_1.PetService])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
//# sourceMappingURL=root.component.js.map