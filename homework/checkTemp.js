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
