console.log("Rebel Ride!");

// /////////////////////////////////
// 👀👀👀 STARTSCREEN VARIABLES 👀👀👀
////////////////////////////////////

var startButton = document.querySelector(".startbutton");
var startScreen = document.querySelector(".startscreen");
var game = document.querySelector("#game");
var header = document.querySelector("header");

var startSound = new Audio("audio/carstart.m4a");

//////////////////////////////
// 🌶️🌶️🌶️ TABS VARIABLES 🌶️🌶️🌶️
/////////////////////////////
// Source verdwijnen & verschijnen: https://codepen.io/rouws/pen/mdGJKVY
var wallpaperButton = document.querySelector("#tabwallpaper");
var customiseButton = document.querySelector("#tabcustomise");
var colorsButton = document.querySelector("#colors");
var patternsButton = document.querySelector("#patterns");
var customiseStart = document.querySelector("#customise");
var wallpapersStart = document.querySelector("#wallpapers");
var wallpaperKleuren = document.querySelector(".buttonsWALPkleuren");
var wallpaperPatterns = document.querySelector(".buttonsWALPpatterns");

// ///////////////////////////////
// ✨✨✨ CATEGORIES VARIABLES✨✨✨
/////////////////////////////////
var vehicleButton = document.querySelector("#vehicle");
var coatingButton = document.querySelector("#coating");
var wheelsButton = document.querySelector("#wheels");
var exhaustButton = document.querySelector("#exhaust");
var spoilerButton = document.querySelector("#spoiler");
var bumperButton = document.querySelector("#bumper");
var accessoriesButton = document.querySelector("#accessories");

var customiseVehicle = document.querySelector(".buttonsCSTMvehicle");
var customiseCoating = document.querySelector(".buttonsCSTMcoating");
var customiseWheels = document.querySelector(".buttonsCSTMwheels");
var customiseExhaust = document.querySelector(".buttonsCSTMexhaust");

// /////////////////////////////////////
// ⭐️⭐️⭐️ VEHICLE BUTTONS VARIABLES ⭐️⭐️⭐️
////////////////////////////////////////
// Source:https://www.w3schools.com/cssref/tryit.php?filename=trycss_js_background-image
var abarthButton = document.querySelector(".abarth");
var nissanButton = document.querySelector(".nissan");
var ferrariButton = document.querySelector(".ferrari");
var ducatiButton = document.querySelector(".ducati");

// var abarthOptions = document.querySelector(".abarthoptions");
// var nissanOptions = document.querySelector(".nissanoptions");
// var ferrariOptions = document.querySelector(".ferrarioptions");
// var ducatiOptions = document.querySelector(".ducatioptions");

// ///////////////////////////
// 🎧🎧🎧 AUDIO VARIABLES 🎧🎧🎧
//////////////////////////////
// srchttps://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
var abarthRecordMonza = new Audio("audio/abarth595recordmonzaexhaust.mp3");
var abarthExhaustRecordMonza = document.querySelector(
  ".abarthexhaustrecordmonza"
);
var abarthAkrapovic = new Audio("audio/abarth595akrapovicexhaust.m4a");
var abarthExhaustAkrapovic = document.querySelector(".abarthexhaustakrapovic");

var nissanDefault = new Audio("audio/nissanGTRstockexhaust.m4a");
var nissanExhaustDefault = document.querySelector(".nissanexhaustdefault");

var nissanAkrapovic = new Audio("audio/nissanGTRakrapovicexhaust.m4a");
var nissanExhaustAkrapovic = document.querySelector(".nissanexhaustakrapovic");

var ferrariTubi = new Audio("audio/ferrarif40tubiexhaust.m4a");
var ferrariExhaust = document.querySelector(".ferrariexhaust");

var ducatiDefault = new Audio("audio/ducativ4stockexhaust.m4a");
var ducatiExhaustDefault = document.querySelector(".ducatiexhaustdefault");

var ducatiAkrapovic = new Audio("audio/ducativ4akrapovicexhaust.m4a");
var ducatiExhaustAkrapovic = document.querySelector(".ducatiexhaustakrapovic");

//
// BUTTONS COATING
//

// ABARTH COATINGS
var monzaGreen = document.querySelector(".monzagreen");
var black = document.querySelector(".black");
var white = document.querySelector(".white");
var mintGreen = document.querySelector(".mintGreen");
var pink = document.querySelector(".pink");
var neonPink = document.querySelector(".neonPink");
var neonYellow = document.querySelector(".neonyellow");
var silverGlitter = document.querySelector(".silverGlitter");
var pantherPrint = document.querySelector(".pantherprint");

// NISSAN COATINGS

// ///////////////////////////
// 👩🏼‍💻👩🏼‍💻👩🏼‍💻 ARRAY VARIABLES 👩🏼‍💻👩🏼‍💻👩🏼‍💻
//////////////////////////////
var cars = ["abarth", "nissan", "ferrari", "ducati"];
var auto = document.getElementById("#car");
var dice = document.querySelector(".dice");
// var effect = document.querySelector("body");

dice.addEventListener("click", function () {
  console.log("randomauto");
  var randomAuto = Math.random() * 4;
  randomAuto = Math.floor(randomAuto);
  auto.style.backgroundImage = cars[randomAuto];
  // effect.classList.add(.sparkles)
});

//////////////////////////
// 🔥🔥🔥 STARTSCREEN 🔥🔥🔥
//////////////////////////
startButton.addEventListener("click", function () {
  startSound.play();
  header.classList.remove("hidden");
  game.classList.remove("hidden");
  startScreen.classList.add("hidden");
});

// ////////////////////////////////////////////////
// ⚡️⚡️⚡️ SWITCH BETWEEN CUSTOMISE & WALLPAPER ⚡️⚡️⚡️
///////////////////////////////////////////////////
wallpaperButton.addEventListener("click", function () {
  customiseStart.classList.toggle("hidden");
  wallpapersStart.classList.toggle("hidden");
});

customiseButton.addEventListener("click", function () {
  wallpapersStart.classList.toggle("hidden");
  customiseStart.classList.toggle("hidden");
});

colorsButton.addEventListener("click", function () {
  wallpaperKleuren.classList.toggle("hidden");
  wallpaperPatterns.classList.toggle("hidden");
});

patternsButton.addEventListener("click", function () {
  wallpaperPatterns.classList.toggle("hidden");
  wallpaperKleuren.classList.toggle("hidden");
});

// /////////////////////////////
// 🥥🥥🥥 SWITCH CATEGORIES 🥥🥥🥥
////////////////////////////////
exhaustButton.addEventListener("click", function () {
  customiseVehicle.classList.add("hidden");
  customiseCoating.classList.add("hidden");
  customiseWheels.classList.add("hidden");
  customiseExhaust.classList.remove("hidden");
  welkeAutoIsGeselcteerd();
});

wheelsButton.addEventListener("click", function () {
  customiseVehicle.classList.add("hidden");
  customiseCoating.classList.add("hidden");
  customiseExhaust.classList.add("hidden");
  customiseWheels.classList.remove("hidden");
  welkeAutoIsGeselcteerd();
});

coatingButton.addEventListener("click", function () {
  customiseVehicle.classList.add("hidden");
  customiseWheels.classList.add("hidden");
  customiseExhaust.classList.add("hidden");
  customiseCoating.classList.remove("hidden");
  welkeAutoIsGeselcteerd();
});

vehicleButton.addEventListener("click", function () {
  customiseCoating.classList.add("hidden");
  customiseWheels.classList.add("hidden");
  customiseExhaust.classList.add("hidden");
  customiseVehicle.classList.remove("hidden");
  welkeAutoIsGeselcteerd();
});

//////////////////////////
// 💕💕💕 CHOOSE CAR 💕💕💕
//////////////////////////
abarthButton.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(abarth-monza-green.png)";
});

nissanButton.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(nissanGTR-white.png)";
});

ferrariButton.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage = "url(ferrari-F40.png)";
});

ducatiButton.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage = "url(ducati-V4.png)";
});

// /////////////////////////////////////////
// 💨💨💨 EXHAUST SOUND ON CLICK BUTTON 💨💨💨
// /////////////////////////////////////////
abarthExhaustRecordMonza.addEventListener("click", function () {
  console.log("audio");
  abarthRecordMonza.play();
});

abarthExhaustAkrapovic.addEventListener("click", function () {
  console.log("audio");
  abarthAkrapovic.play();
});

nissanExhaustDefault.addEventListener("click", function () {
  console.log("audio");
  nissanDefault.play();
});

nissanExhaustAkrapovic.addEventListener("click", function () {
  console.log("audio");
  nissanAkrapovic.play();
});

ferrariExhaust.addEventListener("click", function () {
  console.log("audio");
  ferrariTubi.play();
});

ducatiExhaustDefault.addEventListener("click", function () {
  console.log("audio");
  ducatiDefault.play();
});

ducatiExhaustAkrapovic.addEventListener("click", function () {
  console.log("audio");
  ducatiAkrapovic.play();
});

///////////////////////////////////////////////////////
// 💗💗💗 IF ... CAR IS SELECTED, SHOW CAROPTIONS 💗💗💗
//////////////////////////////////////////////////////
// Zelf: per categorie een section voor iedere auto met bijbehorende buttons met class .autoopties, maar moet veranderen op basis van welke auto je selecteert, dus if else
// Hulp van Evi: alle opties met auto laten verdwijnen en verschijnen m.b.v. if else
function welkeAutoIsGeselcteerd() {
  var sourceAuto = document.getElementById("car").style.backgroundImage;
  var huidigeAuto;
  if (sourceAuto == 'url("abarth-monza-green.png")') {
    huidigeAuto = "Abarth";
  } else if (sourceAuto == 'url("nissanGTR-white.png")') {
    huidigeAuto = "Nissan";
  } else if (sourceAuto == 'url("ferrari-F40.png")') {
    huidigeAuto = "Ferarri";
  } else if (sourceAuto == 'url("ducati-V4.png")') {
    huidigeAuto = "Ducati";
  } else {
    huidigeAuto = "Er is geen auto gekozen";
  }
  console.log(huidigeAuto);

  // Je kan nu dit doen:

  if (huidigeAuto === "Abarth") {
    var abartoptions = document.querySelectorAll(".abarthoptions");
    abartoptions.forEach((element) => {
      // We lopen door elke element met de class abarthoptions en halen de hidden weg
      element.classList.remove("hidden");
    });
  }

  if (huidigeAuto === "Nissan") {
    var nissanoptions = document.querySelectorAll(".nissanoptions");
    nissanoptions.forEach((element) => {
      // We lopen door elke element met de class nissanoptions en halen de hidden weg
      element.classList.remove("hidden");
    });
  }

  if (huidigeAuto === "Ferrari") {
    var ferrarioptions = document.querySelectorAll(".ferrarioptions");
    ferrarioptions.forEach((element) => {
      // We lopen door elke element met de class ferrarioptions en halen de hidden weg
      element.classList.remove("hidden");
    });
  }

  if (huidigeAuto === "Ducati") {
    var ducatioptions = document.querySelectorAll(".ducatioptions");
    ducatioptions.forEach((element) => {
      // We lopen door elke element met de class ducatioptions en halen de hidden weg
      element.classList.remove("hidden");
    });
  }
}

//
// ABARTH COATINGS
//
monzaGreen.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(images/abarth-595/abarth-livery/abarth-monza-green.png)";
});

black.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(images/abarth-595/abarth-livery/abarth-black.png)";
});

white.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(images/abarth-595/abarth-livery/abarth-white.png)";
});

mintGreen.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(images/abarth-595/abarth-livery/abarth-mint-green.png)";
});

pink.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(images/abarth-595/abarth-livery/abarth-pink.png)";
});

neonPink.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(images/abarth-595/abarth-livery/abarth-neon-pink.png)";
});

neonYellow.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(images/abarth-595/abarth-livery/abarth-neon-yellow.png)";
});

silverGlitter.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(images/abarth-595/abarth-livery/abarth-silver-glitter.png)";
});

pantherPrint.addEventListener("click", function () {
  document.getElementById("car").style.backgroundImage =
    "url(images/abarth-595/abarth-livery/abarth-pantherprint.png)";
});
