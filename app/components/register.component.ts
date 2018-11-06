import { Component, Inject } from "@angular/core"
import { PetService } from '../service/petService';
import { AbstractPet } from '../pets/AbstractPet'

@Component({
    selector: "register-component",
    templateUrl: "app/templates/register-page.html",
    styleUrls: ['app/css/register-page.css'],
    providers: [ AbstractPet, PetService]
})


export class RegisterComponent {
     constructor(pet: AbstractPet,petService:PetService) {         
     }
}