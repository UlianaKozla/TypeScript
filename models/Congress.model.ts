import { FactionModel } from './Faction.model';
import { CongressmanModel } from './Congressman.model';

export class CongressModel {
    Congress: FactionModel [] = [];

    constructor (Congress: FactionModel[]) {
        this.Congress = Congress
    }

    addFaction(faction: FactionModel) {
        this.Congress.push(faction)
    }

    deleteFaction (faction: FactionModel) {
        const factionToDelete = this.Congress.findIndex((fact: FactionModel) => {
            return faction === fact
        });
        this.Congress.splice(factionToDelete, 1)
    }

    showAllFactions () {
        console.log(...this.Congress);
    }

    findFaction (faction: FactionModel) {
        const factionToFinf  = this.Congress.find( (fact: FactionModel) => {
            return fact === faction;
        });
        console.log(factionToFinf);
    }

    deleteCongressmanFromFaction (faction: FactionModel, congressman: CongressmanModel){
        faction.deleteCongressman(congressman);
        console.log(`${congressman.surname} ${congressman.name} was deleted to ${faction.name}`);
    }

    addCongressmanToFaction (faction: FactionModel, congressman: CongressmanModel) {
        faction.addCongressman(congressman);
        console.log(`${congressman.surname} ${congressman.name} was added from ${faction.name}`);
    }

    findBribetakersFromFaction (faction: FactionModel) {
        faction.findallBribeTakers()
    }

    findBiggestBribetakersFromFaction (faction: FactionModel) {
        faction.findBiggestBribeTaker()
    }


/TODO Вивести найбільшого хабарника у раді
