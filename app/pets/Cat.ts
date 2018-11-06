import { Injectable } from '@angular/core';
import { AbstractPet, PetType } from './AbstractPet'

@Injectable()
export class Cat extends AbstractPet {

    constructor() {       
        super()
        var _type:PetType={id:0,name:'Cat'};
        super.setPetType(_type);
    }

    getName() {
        return this.name + 'the Cat';
    }
    
}
