// DICE 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice-count1").innerHTML = randomNumber1;

/*
var randomImage1 = randomNumber1 + ".png";
var randomImageSrc1 = "images/" + randomImage1;
*/
document.querySelector(".dice-image1").setAttribute("src", "images/" + randomNumber1 + ".png");




// DICE 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice-count2").innerHTML = randomNumber2;

var randomImage2 = randomNumber2 + ".png";
var randomImageSrc2 = "images/" + randomImage2;

document.querySelector(".dice-image2").setAttribute("src", randomImageSrc2);


// Winning Result

if (randomNumber1 > randomNumber2)
    document.querySelector(".winning-result").innerHTML = "1st";
else if (randomNumber2 > randomNumber1)
    document.querySelector(".winning-result").innerHTML = "2nd";
else {
    document.querySelector(".winning-result").innerHTML = "Draw!!!";
    document.querySelector("#winning-result-info").classList.add("winning-result-info");
}
