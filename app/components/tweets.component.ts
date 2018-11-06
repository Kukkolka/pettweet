import { Component, Inject } from "@angular/core"
import { PetService } from '../service/petService';
import { AbstractPet } from '../pets/AbstractPet'

@Component({
    selector: "tweets-component",
    templateUrl: "app/templates/twitter-page.html",
    styleUrls: ['app/css/twitter-page.css'],
    providers: [ AbstractPet, PetService]
})


export class TweetsComponent {
     constructor(pet: AbstractPet,petService:PetService) {
         
     }
}