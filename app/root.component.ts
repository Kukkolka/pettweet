  

import { Component, Inject } from "@angular/core"
import { TweetService } from './service/tweetService';
import { PetService } from './service/petService';
import { AbstractPet } from './pets/AbstractPet'
//import { TweetTypes } from '../enums/tweetTypes'
//import { Tweet } from '../vo/tweet'

@Component({
    selector: "root-component",
    templateUrl: "app/templates/root-page.html",
    styleUrls: ['app/css/root-page.css'],
    providers: [TweetService, AbstractPet, PetService]
})


export class RootComponent {
    private tweets = [];
    private posted_tweets = [];
    pet: AbstractPet;

    constructor(tweetService: TweetService, pet: AbstractPet,petService:PetService) {
        var _myPet=petService.getMyPet();
        if(typeof(_myPet)==='undefined'){
            
        }else
        {
        this.pet=_myPet;
        tweetService.getTweets()
            .subscribe(
            (tweets) => {
                this.tweets = tweets
                var _firstTweets = tweetService.getPostedTweets();
                if (_firstTweets.length === 0) {
                    pet.postFirstTweet(this.tweets, tweetService);
                }
                this.posted_tweets = tweetService.getPostedTweets();
            });
        }
    }


    private isCalling = true;

    private toggleCalling() {
        this.isCalling = !this.isCalling;
    }

}
