import {PersonsModel} from "./Persons.model";

export class CongressmanModel extends PersonsModel{
    surname: string;
    name: string;
    age: number;
    corrupt: boolean;
    bribeSize: number;

    constructor(surname: string, name: string, age: number, weight: number, height: number, corrupt: boolean, bribeSize: number){
        super(weight, height)
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.corrupt = corrupt;
        this.bribeSize = bribeSize;
    }

    giveBribe():void {
        !this.corrupt ? console.log('No') :
            this.bribeSize > 200000 ? console.log('I have to think') :
                console.log(`Bribe wasn't given`)
    }
}