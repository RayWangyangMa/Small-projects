var random1 = Math.floor(Math.random()*6) + 1;
var random2 = Math.floor(Math.random()*6) + 1;

var randomeDiceImg1 ="images/" + "dice" + random1 + ".png";
var randomeDiceImg2 ="images/" + "dice" + random2 + ".png";


var img1 = document.querySelectorAll("img")[0]

img1.setAttribute("src", randomeDiceImg1);

var img2 = document.querySelectorAll("img")[1]

img2.setAttribute("src", randomeDiceImg2);


if (random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}