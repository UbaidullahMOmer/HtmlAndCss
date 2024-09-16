var audio = document.createElement("audio");
audio.setAttribute("src", "sound.mp3");
audio.loop = true;
audio.play();
let stop = document.querySelector("button");
let sky = document.querySelector(".sky");
let trees = document.querySelector(".trees");
let car = document.querySelector(".car");
let wheel1 = document.querySelector(".wheel11");
let wheel2 = document.querySelector(".wheel22");
let track = document.querySelector(".track");
stop.addEventListener("click", function () {
  sky.style.animation = "none";
  trees.style.animation = "none";
  car.style.animation = "none";
  car.style.margin = "40px";
  wheel1.style.animation = "none";
  wheel2.style.animation = "none";
  track.style.animation = "none";
  track.style.margin = "-40px";
  audio.loop = false;
});

