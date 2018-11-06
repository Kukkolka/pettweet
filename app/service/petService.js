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
var router_1 = require('@angular/router');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var core_1 = require('@angular/core');
//import { Http } from '@angular/http';
require('rxjs/add/operator/map');
var AbstractPet_1 = require('../pets/AbstractPet');
var PetService = (function () {
    function PetService(router) {
        this.pettypes = [];
        this.personalities = [];
        this.router = router;
    }
    PetService.prototype.getMyPet = function () {
        var _pet_name = ng2_cookies_1.Cookie.get('pet');
        if (typeof (_pet_name) === 'undefined') {
            console.warn('no pet created yet');
            //redirect  
            this.router.navigateByUrl('register');
            console.log('navigating');
            _pet_name = 'unnamed';
        }
        console.log('my pet', _pet_name);
        var _petObj = new AbstractPet_1.AbstractPet();
        _petObj.setName(_pet_name);
        return _petObj;
    };
    PetService.prototype.getPets = function () {
        //        return this.http.get('app/data/pets.json')
        //            .map(response => response.json()['tweets']);
    };
    PetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PetService);
    return PetService;
}());
exports.PetService = PetService;
//# sourceMappingURL=petService.js.map