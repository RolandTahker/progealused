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


-------------------------------------------------------------------

for (let index=1; number <= 100; number++) {
    console.log(i)
} 


-------------------------------------------------------------------



for (let =1; number <= 100; number++) {
    console.log(number)
}

-------------------------------------------------------------------


for (let x=1; x <= 100; x++) {
    console.log(x)
}

-------------------------------------------------------------------


let x=1
while(x <= 100) {
    console.log(x);
    x++;
}

-------------------------------------------------------------------

let tööta=true 
while(tööta) {
    console.log(1);
    if (new Date() .getMinutes > 24)
        tööta = false;
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
