let randomNumber1 = Math.ceil(Math.random() * 6);

let diceImage1 = "./images/dice" + randomNumber1 + ".png";

let randomImageSource1 = document.querySelectorAll("img")[0];

randomImageSource1.setAttribute("src", diceImage1);

let randomNumber2 = Math.ceil(Math.random() * 6);

let randomImageSource2 = document.querySelectorAll("img")[1];

let diceImage2 = "./images/dice" + randomNumber2 + ".png";

randomImageSource2.setAttribute("src", diceImage2);

if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 Wins";

else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    
else
    document.querySelector("h1").innerHTML = "Draw !!";
