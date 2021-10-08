password = prompt("Sisesta üks number 1-10-ni")
let mituKordaProovinud = 0
let word = Math.floor(Math.random() * 10) + 1;
while (password != word)
{
    mituKordaProovinud++
    if (mituKordaProovinud == 1){
    console.log("Oled proovinud " + mituKordaProovinud + " korra")
    }
    else console.log("Oled proovinud " + mituKordaProovinud + " korda")
    if (mituKordaProovinud == 3)
        break


    alert("Sorry, "+ password +" ei ole õige number.")
    password = prompt("Sisesta parool")
    if (password == null)
        break
    if (password == word)
console.log("Yay! Arvasid õige numbri ära!")
}
