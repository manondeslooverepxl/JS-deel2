let zin = "ik wil een koekje";
let uitkomst;
uitkomst = zin.replace("koekje", "Lasagne van PXL-catering");
uitkomst = uitkomst.toUpperCase();

document.getElementById("zin").innerHTML = uitkomst;
console.log(uitkomst);