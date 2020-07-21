let grosi = [1500, 750, 50, 1100, 2000, 300, 40, 64, 180];

let steffi = [1450, 135, 342, 80, 540, 160];

let tanja = [960, 250, 210, 120, 1950, 1090, 622];

let grositot = 0;
let steffitot = 0;
let tanjatot = 0;

function all() {
  function gtF() {
    grositot = 0;
    for (var i = 0; i < grosi.length; i++) {
      grositot += grosi[i];
    }
    console.log(grositot);
  }
  gtF();

  console.log("Grosi Ausgaben in Kuna: " + grositot);

  function steffiTotFunction() {
    steffitot = 0;
    for (var i = 0; i < steffi.length; i++) {
      steffitot += steffi[i];
    }
    console.log(steffitot);
  }
  steffiTotFunction();

  console.log("Steffi Ausgaben in Kuna: " + steffitot);

  function ttF() {
    tanjatot = 0;
    for (var i = 0; i < tanja.length; i++) {
      tanjatot += tanja[i];
    }
    console.log(tanjatot);
  }
  ttF();

  console.log("Tanja Ausgaben in Kuna: " + tanjatot);

  grositot = Math.round(grositot * 0.14);
  steffitot = Math.round(steffitot * 0.14);
  tanjatot = Math.round(tanjatot * 0.14);

  let tot = grositot + steffitot + tanjatot;

  console.log("Gesamt in Franken: " + tot);
  console.log("Gesamt in Kuna: " + Math.round(tot / 0.14));

  let avg = tot / 3;
  avg = Math.round(avg);
  console.log("");
  console.log("Durchschnitt in Franken = " + avg);

  let get = 0;
  let test;
  let givex = 0;
  let givey = 0;
  let b;
  let a;
  let c;

  if (grositot > steffitot && grositot > tanjatot) {
    get = grositot - avg;
    b = "Grosi bekommt " + get + " Franken";
    console.log(b);
    givex = avg - steffitot;
    givey = avg - tanjatot;
    if (givey < 0) {
      c = avg - steffitot - -1 * (avg - tanjatot);
      a = `Grosi von Steffi: ${get} und Tanja von Steffi: ${givex - c}`;
      console.log(a);
    } 
     else {
      a = `${givex} von Steffi, und von Tanja ${givey}`;
      console.log(a);
    }
  } else if (steffitot > grositot && steffitot > tanjatot) {
    get = steffitot - avg;
    b = "Steffi bekommt " + get + " Franken";
    console.log(b);
    givex = avg - grositot;
    givey = avg - tanjatot;
    a = givex + " von Grosi, und von Tanja " + givey;
    console.log(a);
  } else {
    get = tanjatot - avg;
    b = "Tanja bekommt " + get + " Franken";
    console.log(b);
    givex = avg - steffitot;
    givey = avg - grositot;

    if (givey < 0) {
      c = avg - steffitot - -1 * (avg - grositot);
      a = "Tanja von Steffi: " + get + " und Grosi von Steffi: " + (givex - c);
      console.log(a);
    } else {
      a = givex + " von Steffi, und von Grosi " + givey;
      console.log(a);
    }
  }

  document.getElementById("main").innerHTML =
    "Durchschnitt in Franken: " + Math.round(tot / 3);

  document.getElementById("juhu").innerHTML = grosi;
  document.getElementById("steff").innerHTML = steffi;
  document.getElementById("tan").innerHTML = tanja;

  document.getElementById(
    "grosiTot"
  ).innerHTML = `${"Grosi:"} ${grositot} ${"in Franken und in Kuna: "} ${Math.round(
    grositot / 0.14
  )} `;
  document.getElementById(
    "steffiTot"
  ).innerHTML = `${"Steffi:"} ${steffitot} ${"in Franken und in Kuna: "} ${Math.round(
    steffitot / 0.14
  )} `;
  document.getElementById(
    "tanjaTot"
  ).innerHTML = `${"Tanja:"} ${tanjatot} ${"in Franken und in Kuna: "} ${Math.round(
    tanjatot / 0.14
  )} `;

  document.getElementById("cost").innerHTML = b;
  document.getElementById("costt").innerHTML = a;

  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Grosi", "Steffi", "Tanja", "Avg"],
      datasets: [
        {
          label: "Ausgaben",
          data: [grositot, steffitot, tanjatot, tot / 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

all();

function renew() {
  grosi = [];
  steffi = [];
  tanja = [];
  all();
}

let x = document.getElementById("party1");
let y = document.getElementById("party2");
let z = document.getElementById("party3");
let dingdong;
function house() {
  dingdong = Math.round(Number(document.getElementById("ivo").value) / 0.14);
  if (dingdong !== 0 && y.checked === true) {
    steffi.push(dingdong);
    console.log(dingdong);
    console.log(steffi);
  } else if (dingdong !== 0 && x.checked === true) {
    grosi.push(dingdong);
  } else if (dingdong !== 0 && z.checked === true) {
    tanja.push(dingdong);
  }
}
document.getElementById("btn").addEventListener("click", house);
document.getElementById("btn").addEventListener("click", all);

document.getElementById("renew").addEventListener("click", renew);
//document.getElementById("renew").addEventListener("click", all);
