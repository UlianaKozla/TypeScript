import { CongressmanModel } from "./Congressman.model";

export class FactionModel {
    name: string
    allCongressman: CongressmanModel [] = [];

    constructor(name: string, allCongressman: CongressmanModel[]) {
        this.name = name;
        this.allCongressman = allCongressman;
    }

    addCongressman(Congressman: CongressmanModel) {
        this.allCongressman.push(Congressman)
    }

    deleteCongressman (Congressman: CongressmanModel) {
        const congressmanToDelete = this.allCongressman.findIndex((cong: CongressmanModel) => {
            return cong.surname === Congressman.surname
        });
        this.allCongressman.splice(congressmanToDelete, 1)
    }

    deleteCongressmanWithBribe () {
        const CongressmansWithoutBribe = this.allCongressman.filter((cong: CongressmanModel) => {
            return !cong.corrupt
        });
        this.allCongressman.splice(0, this.allCongressman.length)
        this.allCongressman = [...CongressmansWithoutBribe];
    }

    findBiggestBribeTaker () {
        const [ bribetakers ] = this.allCongressman.sort( (firstCong: CongressmanModel, secondCong: CongressmanModel) => {
            return secondCong.bribeSize - firstCong.bribeSize
        });
        console.log(bribetakers);
    }

    findallBribeTakers () {
        const bribetakers  = this.allCongressman.map( (cong: CongressmanModel) => {
            return cong.corrupt
        });
        console.log(bribetakers);
    }

    showAllCongressmans () {
        console.log(this.allCongressman);
    }

    deleteAllCongressmans () {
        this.allCongressman = [];
        console.log(`All Congressman were deleted`);
    }

    showTotalAmountOfBribes () {
        const TotalAmount = this.allCongressman.reduce( (firstCong: number, secondCong: CongressmanModel) => {
            return firstCong + secondCong.bribeSize
        }, 0);
        console.log(TotalAmount);
    }
}