
let grosi  = [1500, 750, 50, 1100, 2000, 300, 40, 64, 180];
  
let steffi = [1450,135, 342, 80, 540, 160];
  
let tanja  = [960, 250, 210, 120, 1950, 1090, 622, 2040];

let grositot = 0;
let steffitot = 0;
let tanjatot = 0;

for (var i = 0; i < grosi.length; i++) {
  grositot += grosi[i];
}

console.log("Grosi Ausgaben in Kuna: " + grositot);

for (var i = 0; i < steffi.length; i++) {
  steffitot += steffi[i];
}

console.log("Steffi Ausgaben in Kuna: " + steffitot);

for (var i = 0; i < tanja.length; i++) {
  tanjatot += tanja[i];
}

console.log("Tanja Ausgaben in Kuna: " + tanjatot);

grositot = Math.round(grositot * 0.14);
steffitot = Math.round(steffitot * 0.14);
tanjatot = Math.round(tanjatot * 0.14);

let tot = grositot + steffitot + tanjatot;

console.log("Gesamt in Franken: " + tot);
console.log("Gesamt in Kuna: " + Math.round(tot/0.14));

let avg = tot/3;
avg = Math.round(avg);
console.log("");
console.log("Durchschnitt in Franken = " + avg);

let get =0;
let givex =0;
let givey =0;
let b;
let a;
let c;

if (grositot > steffitot && grositot > tanjatot){
  get = grositot - avg;
  b = "Grosi bekommt " + get + " Franken";
  console.log(b);
  givex = avg - steffitot;
  givey = avg - tanjatot;
  a = givex + " von Steffi, und von Tanja "+ givey;
  console.log(a);
}
else
if (steffitot > grositot && steffitot > tanjatot){
  get = steffitot -avg;
  b = "Steffi bekommt " + get + " Franken";
  console.log(b);
  givex = avg - grositot;
  givey = avg - tanjatot;
   a = givex + " von Grosi, und von Tanja "+ givey;
   console.log(a);
}
else{get = tanjatot - avg;
   b = "Tanja bekommt " + get + " Franken";
   console.log(b);
  givex = avg - steffitot;
  
  givey = avg - grositot;
    if (givey < 0) {
      c = avg-steffitot - (-1)*(avg-grositot);
      a = "Tanja von Steffi: " + get + " und Grosi von Steffi: " + (givex-c);
      console.log(a);
    }
    else {
   a = givex + " von Steffi, und von Grosi "+ givey;
   console.log(a);}
  
}

document.getElementById("main").innerHTML = "Durchschnitt in Franken: " + Math.round(tot/3);

document.getElementById("juhu").innerHTML = grosi;
document.getElementById("steff").innerHTML = steffi;
document.getElementById("tan").innerHTML = tanja;

document.getElementById("grosiTot").innerHTML = `${"Grosi:"} ${grositot} ${"in Franken und in Kuna: "} ${Math.round(grositot/.14)} `;
document.getElementById("steffiTot").innerHTML = `${"Steffi:"} ${steffitot} ${"in Franken und in Kuna: "} ${Math.round(steffitot/.14)} `;
document.getElementById("tanjaTot").innerHTML = `${"Tanja:"} ${tanjatot} ${"in Franken und in Kuna: "} ${Math.round(tanjatot/.14)} `;

document.getElementById("cost").innerHTML = b;
document.getElementById("costt").innerHTML = a;


