////<reference path="typings/@angular/http.d.ts"/>  
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Injectable()
export class TweetService {
    constructor(/*private http: Http*/) { }

    getTweets() {
        return this.http.get('app/data/tweets.json')
            .map(response => response.json()['tweets']);
    }

    getPostedTweets() {
        var _tweets = Cookie.get('tweets');
        if (_tweets === null){
             console.warn('no posted tweets yet');
             return [];
        }
        var _tweetsAr=[]
        for (let tw in _tweets.split(',')) {
            _tweetsAr.push(parseInt(tw))
        }
        return _tweetsAr;
    }
    getRandomTweet() { }
    postTweet(id) {
        var _tweets = Cookie.get('tweets');
        Cookie.set('tweets', _tweets + ',' + id);
    }


}
