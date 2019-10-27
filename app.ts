import {CongressmanModel, FactionModel, CongressModel} from "./models";

const Ilkiv = new CongressmanModel('Ilkiv', 'Oleh', 40, 80, 180, true, 600000);
const Kostuk = new CongressmanModel('Kostuk', 'Iryna', 55, 90, 167, false, 0);
const Byjna = new CongressmanModel('Byjna', 'Diana', 38, 90, 167, true, 100000);

// const congress: CongressmanModel[] = [Byjna, Ilkiv, Kostuk];
// console.log(congress);

// Ilkiv.giveBribe();
// Kostuk.giveBribe();
// Byjna.giveBribe();

// const Democratic = new FactionModel('Democratic', []);
// const Republican = new FactionModel('Republican', []);

// Democratic.addCongressman(Ilkiv);
// Democratic.addCongressman(Kostuk);
// Republican.addCongressman(Byjna);

// Democratic.deleteCongressmanWithBribe();
// console.log(Democratic);

// Democratic.deleteCongressmanWithBribe();
// console.log(Democratic);

// Democratic.showTotalAmountOfBribes();
// console.log(Democratic);

// const VerhovnaRada = new CongressModel([]);
//
// VerhovnaRada.addFaction(Democratic);
// VerhovnaRada.addFaction(Republican);
//
// VerhovnaRada.addCongressmanToFaction(Republican, Byjna);
// VerhovnaRada.deleteCongressmanFromFaction(Republican, Byjna);

