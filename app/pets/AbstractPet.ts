import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { TweetTypes } from '../enums/tweetTypes'
import { Tweet } from '../vo/tweet'
import { TweetService } from '../service/tweetService';

export interface PetType {
    id: number;
    name: string;
}

@Injectable()
export class AbstractPet {
    protected name = '';
    private petType: PetType;
    protected personality = [];

    constructor() {
        if (!this.rememberName()) {
            //animal doesnt have a name
            console.warn('your pet doesnt have a name');
            //redicrect
        }
    }

    postFirstTweet(tweets, service:TweetService) {
        var _tweets = [];
        for (let i in tweets) {
            if (tweets[i]['pettype'] == this.petType.id && tweets[i]['tweetType'] === TweetTypes.GREETINGS) {
                _tweets.push(tweets[i]['tweet']);
            }
        }
        this.postTweet(_tweets[Math.random() * _tweets.length - 1],service);
    }

    postTweet(tweet: Tweet,service:TweetService) {
        service.postTweet(tweet.id)
        console.log('posting "' + tweet.tweet + ' id: ' + tweet.id);
    }

    rememberName() {
        var _name = Cookie.get('petName');
        if (_name) {
            this.name = _name;
            return true;
        }
        return false;
    }

    setPetType(_type: PetType) {
        this.petType = _type;
    }

    setName(newName: string) {
        this.name = newName;
        Cookie.set('petName', this.name);
    }

    getName() {
        return this.name;
    }

    getPetType() {
        return this.petType;
    }

    getPersonalitys() {
        return this.personality;
    }

    getRandomPersoniltyTrait() {
        return this.personality[Math.random() * this.personality.length - 1]
    }
}
