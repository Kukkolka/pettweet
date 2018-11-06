import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AbstractPet } from '../pets/AbstractPet'

@Injectable()
export class PetService {
    private pettypes = []
    private personalities = []
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    getMyPet() {
        var _pet_name = Cookie.get('pet');
        if (typeof (_pet_name) === 'undefined') {
            console.warn('no pet created yet');
            //redirect  
            this.router.navigateByUrl('register');
            console.log('navigating')
            _pet_name = 'unnamed';
        }
        console.log('my pet', _pet_name);
        var _petObj = new AbstractPet()
        _petObj.setName(_pet_name)
        return _petObj;
    }

    getPets() {
        return this.http.get('app/data/pets.json')
            .map(response => response.json()['tweets']);
    }

}
