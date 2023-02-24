// declareren = variabele aanmaken met een naam
/* let legoblokjes;

// initialiseren = waarde toekennen aan de variabele
legoblokjes = '10 blokjes';

// declareren en initialiseren op 1 regel
let legoblokjes = '10 blokjes';
let uitkomst;
//verwerking
uitkomst = naam + "heeft" + legoblokjes;
//output
console.log(uitkomst);


legoblokjes = '20 blokjes';
uitkomst = naam + "heeft" + legoblokjes;
console.log(uitkomst);

const naam = 'Jeroen';
// input, berekening, output
*/

/* //getallen
let getal1 = parseInt(prompt('Geef een getal in.'));
let getal2 = parseInt(prompt('Geef een geheel getal in.'));
let uitkomst;

uitkomst = getal1 + getal2;
alert("de uitkomst van " + getal1 + " en " + getal2 + " is " + uitkomst);
*/

//Tekenreeksen - strings
/* let zin = 'deze zin is een string';
alert('nicolas gaf aan dat "dit niet mag"');
*/
 /*
let zin = 'welkom in de les javascript!';
let uitkomst;

//lengte berekenen van de string
uitkomst = zin.length;
console.log('Lengte zin: ' + uitkomst);

//positie nagaan
uitkomst = zin.charAt(5);
console.log('De 5de letter is: ' + uitkomst);

//karakter nagaan (wat het eerste voorkomt in de tekenreeks)
uitkomst = zin.indexOf('e');
console.log('De eerste e staat op positie: ' + uitkomst);

//karakter nagaan (wat het eerste voorkomt in de tekenreeks)
uitkomst = zin.lastIndexOf('e');
console.log('De Laatste e staat op positie: ' + uitkomst);

//karakter vervangen
uitkomst = zin.replace('!', '.');
console.log('We vervangen het uitroepteken door een punt' + uitkomst);

//alles in hoofdletters
uitkomst = zin.toUpperCase();
console.log('We zetten alles in hoofdletters: ' + uitkomst);

//alles in kleine letters
uitkomst = zin.toLowerCase();
console.log('We zetten alles in kleine letters: ' + uitkomst);

//deelstring nemen
uitkomst = zin.substring(0,6);
console.log('We nemen welkom uit de zin: ' + uitkomst);
*/

/*
let getal1 = 5;
let getal2 = 6;
let uitkomst;

//berekeningen
//getallen optellen
uitkomst = getal1 + getal2;
console.log(uitkomst);

//getallen aftrekken
uitkomst = getal1 - getal2;
console.log(uitkomst);

//getallen vermenigvuldigen
uitkomst = getal1 * getal2;
console.log(uitkomst);

//getallen delen
uitkomst = getal1 / getal2;
console.log(uitkomst);

//restwaarde
uitkomst = getal1 % 2;
console.log(uitkomst);

// vooral bij loops gebruiken
uitkomst = getal1 + 1;
getal1++;
getal2--;
*/

/*
//triple gelijk teken
//altijd triple gelijk teken gebruiken
let getal1 = 30;
cosole.log(getal1 == 30);
console.log(getal1 === 30);

// === is strict gelijk teken
cosole.log(getal1 == '30');
console.log(getal1 === '30');

//!== is strict ongelijk teken
cosole.log(getal1 != 30);
console.log(getal1 !== 30);

cosole.log(getal1 != '30');
console.log(getal1 !== '30');
*/

let dag = prompt('Welke dag is het vandaag?');
let dagHoofdletters = dag.toUpperCase();
let uitspraak;
uitspraak = (dagHoofdletters === 'ZATERDAG') ? 'Joepie, feest!' : 'Geen feest';
alert(uitspraak);


