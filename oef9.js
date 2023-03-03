let getal1 = parseFloat(prompt("Geef een eerste kommagetal in"));
let getal2 = parseFloat(prompt("Geef een tweede kommagetal in"));
let uitkomst1;
let uitkomst2;
let uitkomst3;
let uitkomst4;

uitkomst1 = getal1 * getal2;
uitkomst2 = getal1 + getal2;
uitkomst3 = getal1 - getal2;
uitkomst4 = getal1 / getal2;

document.getElementById("uitkomst").innerHTML = "De uitkomst van de vermenigvuldiging is " + uitkomst1;
document.getElementById("uitkomst").innerHTML = "De uitkomst van de optelling is " + uitkomst2;
document.getElementById("uitkomst").innerHTML = "De uitkomst van de aftrekking is " + uitkomst3;
document.getElementById("uitkomst").innerHTML = "De uitkomst van de deling is " + uitkomst4;
