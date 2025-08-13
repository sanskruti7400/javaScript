//index.html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Drum Kit</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
</head>

<body>

  <h1 id="title">Drum 🥁 Kit</h1>
  <div class="set">
    <button class="w drum">w</button>
    <button class="a drum">a</button>
    <button class="s drum">s</button>
    <button class="d drum">d</button>
    <button class="j drum">j</button>
    <button class="k drum">k</button>
    <button class="l drum">l</button>
  </div>
  <script src="index.js"></script>

  <footer>
    Made with ❤️ in London.
  </footer>
</body>

</html>

//style.css
body {
  text-align: center;
  background-color: #283149;
}

h1 {
  font-size: 5rem;
  color: #DBEDF3;
  font-family: "Arvo", cursive;
  text-shadow: 3px 0 #DA0463;

}

footer {
  color: #DBEDF3;
  font-family: sans-serif;
}

.w {
  background-image: url("images/crash.png");
  background-size: contain;
}

.a {
  background-image: url("images/kick.png");
   background-size: contain;
}

.s {
   background-image: url("images/snare.png");
    background-size: contain;
}

.d {
 background-image: url("images/tom1.png");
  background-size: contain;
}

.j {
 background-image: url("images/tom2.png");
  background-size: contain;
}

.k {
 background-image: url("images/tom3.png");
  background-size: contain;
}

.l {
 background-image: url("images/tom4.png");
  background-size: contain;
}

.set {
  margin: 10% auto;
}

.game-over {
  background-color: red;
  opacity: 0.8;
}

.pressed {
  box-shadow: 0 3px 4px 0 #DBEDF3;
  opacity: 0.5;
}

.red {
  color: red;
}

.drum {
  outline: none;
  border: 10px solid #404B69;
  font-size: 5rem;
  font-family: 'Arvo', cursive;
  line-height: 2;
  font-weight: 900;
  color: #DA0463;
  text-shadow: 3px 0 #DBEDF3;
  border-radius: 15px;
  display: inline-block;
  width: 150px;
  height: 150px;
  text-align: center;
  margin: 10px;
  background-color: white;
}

//index.js
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var text=this.innerHTML;

        switch(text){
            case "w":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            default:
            
        }
    });
}

