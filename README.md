# progealused
  Progre aluste kompekt ja tunnitööd
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
tootehind = 20
20
rahakott = 11
11
if (tootehind < rahakott)
    console.log ("Osta toode");
else (tootehind > rahakott)
    console.log ("Pole piisavalt raha")
VM4160:4 Pole piisavalt raha
undefined
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
if (tootehind > rahakott)
    console.log ("Osta toode");
else console.log ("Pole piisavalt raha")
VM4453:2 Osta toode
undefined
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let tahaTeada = prompt("Mis kuu?");
let et = [1,2,3,4,5,6,7,8,9,10,11,12];
let kuu = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
console.log(kuu["0"]+" tarbimine on "+et[tahaTeada-1]);
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function checkTemp() {
    let temp = Math.floor(Math.random() *60);

    if (temp < 21) {
        console.log ("liiga külm")
    }

    else if (temp < 20 && temp > 41) {
        console.log ("temperatuur on paras")
    }

    else if (temp > 40) {
        console.log ("liiga kuum")
    }
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let rahakott = 10;
let tootehind = 5;
if (rahakott >= tooteHind) {
    let rahakott = 30;
    let rahakott = rahakott - tooteHind
    rahakott += 10
}
console.log(rahakott)

function summa() {
    console.log(7+5)
}


let summa = function () {

}


typeof on muutuja, mis näitab mis tüüpi seal sees on.



typeof, vaheldumisi ka typeOf ja TypeOf on operaator, mida pakuvad mitmed programmeerimiskeeled muutuja andmetüübi määramiseks.




function checkTamp() {
    let temp = 5;
}


// primitive types: 
// number string boolean object function undefined
// user defined types:
// Math
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// string number boolean object  (tüüp type)

// ctrl + K   ctrl + C    comment
// ctrl + K   ctrl + U  uncomment

if else conditiondal

// Object on tüüp mis salvestab key-value paare.
// key: value


let töötaja = {nimi: "Timo", palk: 10}
let töötaja2 = {
    nimi: "Timo",
    palk: 10,
    rahakott: 0,
    maksaPalka: function () {
        this.rahakott += this.palk
    },
    muuda: 5,

}



let töötaja3 = {
    nimi: "Kalle",
    palk: 15
    rahakott: 5,
    maksaPalka: function () {
        rahakott += palk
    }
}



console.log(töötaja2.nimi)
console.log(töötaja2.rahakott)


töötaja2.maksaPalka()


töötaja2.muuda += 5
töötaja2["palk"] += 5


// skoop scope
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function checkTemp() {
    let temp = Math.floor(Math.random() * 60);     //C°
    let tempkülm = 0 
    let tempparas = 21
    let tempkuum = 41
    if (temp>tempkuum) {
        alert ("Temperatuur on liiga kuum, Temperatuur on " +temp +" C°")
    }
    else if (temp>tempparas) {
        alert ("Temperatuur on paras, Temperatuur on " +temp +" C°")
    }
    else if (temp>tempkülm) {
        alert ("Temperatuur on liiga külm, Temperatuur on " +temp +" C°")
    }

}


function checkTemp() {
    let temp = Math.floor(Math.random() * 60);

    if (temp > 0){
        console.log("Temperatuur on liiga külm")
    } else if (temp > 20 && temp <= 40) {
        console.log("Temperatuur on paras")
    } else if (temp > 41 && temp <= 60) {
        console.log("Temperatuur on liiga kuum")
    }

}

function checkTemp() {
    let temp = 5;

    if (temp > 0){
        console.log("Temperatuur on liiga külm")
    } else if (temp > 20 && temp <= 40) {
        console.log("Temperatuur on paras")
    } else if (temp > 41 && temp <= 60) {
        console.log("Temperatuur on liiga kuum")
    }

}

function checkTemp(temp) {
    console.log("Temp on "+temp)
    if (temp < 0) {
        console.log("Liiga külm")
    } else if (temp > 20 && temp <= 40) {

    } else {

    } 

}






function summa(a,b) {
    return a+b
}
let vastus = summa(2,7)

let kasKütta = checkTemp(44)
if (kasKütta === true) {
    Ahi.küta
}

function kasKütta(temp) {
    return temp < 20
}

function kasJahutada(temp) {
    return temp > 40
}



return temp < 20 ? temp <= 40 ? true: false: false
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// for
// while


for (let number=1; number <= 100; number++) {
    console.log(number)
} 

+ liidab numbreid


------------------------------------------------------------------



for (let x=1; x <= 100; x++) {
    console.log(x)
}


for (let x=50; x >= 1; x--) {
    console.log(x)
} 

loeb 50-st 1-ni

-------------------------------------------------------------------


let x=1
while(x <= 100) {
    console.log(x);
    x++;
}

loeb while loopiga 100-ni

-------------------------------------------------------------------

let tööta=true 
while(tööta) {
    console.log(1);
    if (new Date() .getMinutes > 24)
        tööta = false;
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];



const offers=[["Crossroad Gardens","88"],["Strawberry Mountain Lands","57"],["Weeping Willow Acres","39"],["Pinewood Meadow","05"],["Broken Cart Orchard","31"],["Rattlesnake Ranch","47"],["Shadow Ridge Vineyard","96"],["Peach Tree Range","50"],["Elysian Orchard","19"],["Crown Meadow Fields","63"],["Mooseridge Meadow","40"],["Eastwood Orchard","90"],["Poison Ivy Gardens","48"],["Crescent Canyon Ranch","36"],["Cranberry Estate","41"],["Lone Pine Farm","49"],["Whispering Willow Range","82"],["Spring Blossom Ranch","66"],["Hollow Point Estate","27"],["Little Acorn Meadow","20"],["New Morning Pastures","79"],["Oak Wood Ranch","53"],["Crescent Canyon Orchard","56"],["Grassy Knoll Fields","07"],["Moonlight Gardens","73"],["Lucky Paws Estate","08"],["Crooked Creek Nursery","21"],["Small World Pastures","51"],["Crooked Creek Acres","45"],["Red Mountain Farmstead","78"],["Blueberry Basket Farms","60"],["Maple Springs Acres","54"],["Lucky Paws Farmstead","84"],["Wild Horse Pastures","55"]];

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(offers[0][0])
console.log(offers[0][1])
console.log(offers[1][0])
console.log(offers[1][1])
console.log(offers[2][0])
console.log(offers[2][1])
console.log(offers[3][0])
console.log(offers[3][1])
console.log(offers[4][0])
console.log(offers[4][1])
console.log(offers[5][0])
console.log(offers[5][1])
console.log(offers[6][0])
console.log(offers[6][1])
console.log(offers[7][0])
console.log(offers[7][1])
console.log(offers[8][0])
console.log(offers[8][1])
console.log(offers[9][0])
console.log(offers[9][1])
console.log(offers[10][0])
console.log(offers[10][1])
console.log(offers[11][0])
console.log(offers[11][1])
console.log(offers[12][0])
console.log(offers[12][1])
console.log(offers[13][0])
console.log(offers[13][1])
console.log(offers[14][0])
console.log(offers[14][1])
console.log(offers[15][0])
console.log(offers[15][1])
console.log(offers[16][0])
console.log(offers[16][1])
console.log(offers[17][0])
console.log(offers[17][1])
console.log(offers[18][0])
console.log(offers[18][1])
console.log(offers[19][0])
console.log(offers[19][1])
console.log(offers[20][0])
console.log(offers[20][1])
console.log(offers[21][0])
console.log(offers[21][1])
console.log(offers[22][0])
console.log(offers[22][1])
console.log(offers[23][0])
console.log(offers[23][1])
console.log(offers[24][0])
console.log(offers[24][1])
console.log(offers[25][0])
console.log(offers[25][1])
console.log(offers[26][0])
console.log(offers[26][1])
console.log(offers[27][0])
console.log(offers[27][1])
console.log(offers[28][0])
console.log(offers[28][1])
console.log(offers[29][0])
console.log(offers[29][1])
console.log(offers[30][0])
console.log(offers[30][1])
console.log(offers[31][0])
console.log(offers[31][1])
console.log(offers[32][0])
console.log(offers[32][1])
console.log(offers[33][0])
console.log(offers[33][1])

// AUTOMAATNE 
for (let i =0; i <= offers.length-1; i++) {
    console.log(offers[i])
    let li= document.createElement("Li")
    li.textContent = offers[i]
    document.body.append(li)
}

-------------------------------------------------------------------------------------------------------------------
let arr = [5,8,4,3,2,1];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 4) {
    console.log(arr[i] + 1); 
} else {

 }
}

Lisab 1 juurde arvudele

let arr = [5,8,4,3,2,1];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(arr[i] - 1); 
} else {

 }
}

Lahutab 1 arvu

-----------------------------------------------------------------------------------------------------------------------
{ on blokk kood
-------------------------------------------------------------------------------------------------------------------------
nime saab anda function'iga
-------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------
let töötaja = {
  name: "Roland",
  lepinguNr: ""
}

töötaja.name // "Roland"
töötaja.vanus // undefined
töötaja['name'] // "Roland"

töötaja lepinguNr = "A11234"

töötaja.hasOwnProperty('name') //true
töötaja.hasOwnProperty('vanus') //false

delete töötaja.name
delete töötaja['name']
töötaja. name // undefined
////////////////////////////////////////////////////////////////////////////////////
let pointer = {}
let pointer2 = {}
obj = {"name" : "Timo", 0: "", [pointer]: "asd"}

console.log(obj[pointer2])
