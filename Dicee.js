//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DiceGame</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="container">
        <h1>
            Refresh Me!
        </h1>
        <div class="dice">
            <p>player1</p>
            <img src="6.jpg">
        </div>
        <div class="dice">
            <p>player2</p>
            <img src="6.jpg">
        </div>
   </div>
   <script src="index.js"></script>
</body>
</html>
//style.css
*{
    background-color: bisque;
    padding: 0;
    margin: 0;
}
.container{
    margin: auto;
    width: 100%;
    padding: 50px;
    text-align: center;
}
.dice{
    padding: 50px;
    display:inline-block;
    justify-content: center;
    align-items: center;
}
img{
    width: 70%;
}
//index.js
var n=Math.floor(Math.random()*6)+1;
var rimg=n+".png";
var rsrc=n+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",rsrc);

var m=Math.floor(Math.random()*6)+1;
var rimg2=m+".png";
var rsrc1=m+".png";
var img2=document.querySelectorAll("img")[1].setAttribute("src",rsrc1);

if(n>m){
    document.querySelector("h1").innerHTML="Player 1 wins 🚩";
}else if(n<m){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}else{
    document.querySelector("h1").innerHTML="Draw!!";
}
