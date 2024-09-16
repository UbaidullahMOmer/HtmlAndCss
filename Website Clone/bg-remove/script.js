// document.querySelector(".box1").addEventListener("mouseenter",function(){
//     document.getElementById("p19").style.animation = "gap .5s alternate-reverse 0s infinite linear forwards";
// });
// document.querySelector(".box1").addEventListener("mouseleave",function(){
//     document.getElementById("p19").style.animation = "none";
// });

// document.querySelector(".box2").addEventListener("mouseenter",function(){
//     document.getElementById("p20").style.animation = "gap .5s alternate-reverse 0s infinite linear forwards";
// });
// document.querySelector(".box2").addEventListener("mouseleave",function(){
//     document.getElementById("p20").style.animation = "none";
// });

// document.querySelector(".box3").addEventListener("mouseenter",function(){
//     document.getElementById("p21").style.animation = "gap .5s alternate-reverse 0s infinite linear forwards";
// });
// document.querySelector(".box3").addEventListener("mouseleave",function(){
//     document.getElementById("p21").style.animation = "none";
// });

// document.querySelector(".box4").addEventListener("mouseenter",function(){
//     document.getElementById("p22").style.animation = "gap .5s alternate-reverse 0s infinite linear forwards";
// });
// document.querySelector(".box4").addEventListener("mouseleave",function(){
//     document.getElementById("p22").style.animation = "none";
// });

// document.querySelector(".box5").addEventListener("mouseenter",function(){
//     document.getElementById("p23").style.animation = "gap .5s alternate-reverse 0s infinite linear forwards";
// });
// document.querySelector(".box5").addEventListener("mouseleave",function(){
//     document.getElementById("p23").style.animation = "none";
// });

// document.querySelector(".box6").addEventListener("mouseenter",function(){
//     document.getElementById("p24").style.animation = "gap .5s alternate-reverse 0s infinite linear forwards";
// });
// document.querySelector(".box6").addEventListener("mouseleave",function(){
//     document.getElementById("p24").style.animation = "none";
// });

// document.querySelector(".box7").addEventListener("mouseenter",function(){
//     document.getElementById("p25").style.animation = "gap .5s alternate-reverse 0s infinite linear forwards";
// });
// document.querySelector(".box7").addEventListener("mouseleave",function(){
//     document.getElementById("p25").style.animation = "none";
// });

// document.querySelector(".box8").addEventListener("mouseenter",function(){
//     document.getElementById("p26").style.animation = "gap .5s alternate-reverse 0s infinite linear forwards";
// });
// document.querySelector(".box8").addEventListener("mouseleave",function(){
//     document.getElementById("p26").style.animation = "none";
// });

// document.querySelector(".box9").addEventListener("mouseenter",function(){
//     document.getElementById("p27").style.animation = "gap .5s alternate-reverse 0s infinite linear forwards";
// });
// document.querySelector(".box9").addEventListener("mouseleave",function(){
//     document.getElementById("p27").style.animation = "none";
// });

document.querySelector(".button1").addEventListener("click",function(){
    alert("Your Image Is Upload")
});

document.querySelector(".button2").addEventListener("click",function(){
    alert("Your Image Is Upload")
});

document.querySelector(".product").addEventListener("click",function(){
    document.querySelector(".product-section1").style.display = "flex";
    document.querySelector(".product").style.backgroundColor = "#edf0f2";
    document.querySelector(".peopl").style.backgroundColor = "white";
    document.querySelector(".people-section1").style.display = "none";
    document.querySelector(".animal").style.backgroundColor = "white";
    document.querySelector(".car").style.backgroundColor = "white";
    document.querySelector(".graphic").style.backgroundColor = "white";
});

document.querySelector(".peopl").addEventListener("click",function(){
    document.querySelector(".product-section1").style.display = "none";
    document.querySelector(".product").style.backgroundColor = "white";
    document.querySelector(".peopl").style.backgroundColor = "#edf0f2";
    document.querySelector(".people-section1").style.display = "flex";
    document.querySelector(".animal").style.backgroundColor = "white";
    document.querySelector(".car").style.backgroundColor = "white";
    document.querySelector(".graphic").style.backgroundColor = "white";
});

document.querySelector(".animal").addEventListener("click",function(){
    document.querySelector(".product-section1").style.display = "none";
    document.querySelector(".people-section1").style.display = "none";
    document.querySelector(".animal-section1").style.display = "flex";
    document.querySelector(".product").style.backgroundColor = "white";
    document.querySelector(".peopl").style.backgroundColor = "white";
    document.querySelector(".animal").style.backgroundColor = "#edf0f2";
    document.querySelector(".car").style.backgroundColor = "white";
    document.querySelector(".graphic").style.backgroundColor = "white";
});

document.querySelector(".car").addEventListener("click",function(){
    document.querySelector(".product-section1").style.display = "none";
    document.querySelector(".people-section1").style.display = "none";
    document.querySelector(".animal-section1").style.display = "none";
    document.querySelector(".animal-section1").style.display = "none";
    document.querySelector(".car-section1").style.display = "flex";
    document.querySelector(".product").style.backgroundColor = "white";
    document.querySelector(".peopl").style.backgroundColor = "white";
    document.querySelector(".animal").style.backgroundColor = "white";
    document.querySelector(".car").style.backgroundColor = "#edf0f2";
    document.querySelector(".graphic").style.backgroundColor = "white";
});

document.querySelector(".graphic").addEventListener("click",function(){
    document.querySelector(".product-section1").style.display = "none";
    document.querySelector(".people-section1").style.display = "none";
    document.querySelector(".animal-section1").style.display = "none";
    document.querySelector(".animal-section1").style.display = "none";
    document.querySelector(".car-section1").style.display = "none";
    document.querySelector(".graphic-section1").style.display = "flex";
    document.querySelector(".product").style.backgroundColor = "white";
    document.querySelector(".peopl").style.backgroundColor = "white";
    document.querySelector(".animal").style.backgroundColor = "white";
    document.querySelector(".car").style.backgroundColor = "white";
    document.querySelector(".graphic").style.backgroundColor = "#edf0f2";
});











document.querySelector(".a").addEventListener("click",function(){
    document.querySelector(".img3").style.display = "block";
    document.querySelector(".img11").style.display = "none";
    document.querySelector(".img12").style.display = "none";
    document.querySelector(".img13").style.display = "none";
    document.querySelector(".img14").style.display = "none";
    document.querySelector(".a").backgroundColor = "#edf0f2";
    document.querySelector(".b").backgroundColor = "white";
    document.querySelector(".c").backgroundColor = "white";
    document.querySelector(".d").backgroundColor = "white";
    document.querySelector(".e").backgroundColor = "white";
});

document.querySelector(".b").addEventListener("click",function(){
    document.querySelector(".img3").style.display = "none";
    document.querySelector(".img11").style.display = "block";
    document.querySelector(".img12").style.display = "none";
    document.querySelector(".img13").style.display = "none";
    document.querySelector(".img14").style.display = "none";
    document.querySelector(".a").backgroundColor = "white";
    document.querySelector(".b").backgroundColor = "#edf0f2";
    document.querySelector(".c").backgroundColor = "white";
    document.querySelector(".d").backgroundColor = "white";
    document.querySelector(".e").backgroundColor = "white";
});

document.querySelector(".c").addEventListener("click",function(){
    document.querySelector(".img3").style.display = "none";
    document.querySelector(".img11").style.display = "none";
    document.querySelector(".img12").style.display = "block";
    document.querySelector(".img13").style.display = "none";
    document.querySelector(".img14").style.display = "none";
    document.querySelector(".a").backgroundColor = "white";
    document.querySelector(".b").backgroundColor = "white";
    document.querySelector(".c").backgroundColor = "#edf0f2";
    document.querySelector(".d").backgroundColor = "white";
    document.querySelector(".e").backgroundColor = "white";
});

document.querySelector(".d").addEventListener("click",function(){
    document.querySelector(".img3").style.display = "none";
    document.querySelector(".img11").style.display = "none";
    document.querySelector(".img12").style.display = "none";
    document.querySelector(".img13").style.display = "block";
    document.querySelector(".img14").style.display = "none";
    document.querySelector(".a").backgroundColor = "white";
    document.querySelector(".b").backgroundColor = "white";
    document.querySelector(".c").backgroundColor = "white";
    document.querySelector(".d").backgroundColor = "#edf0f2";
    document.querySelector(".e").backgroundColor = "white";
});

document.querySelector(".e").addEventListener("click",function(){
    document.querySelector(".img3").style.display = "none";
    document.querySelector(".img11").style.display = "none";
    document.querySelector(".img12").style.display = "none";
    document.querySelector(".img13").style.display = "none";
    document.querySelector(".img14").style.display = "block";
    document.querySelector(".a").backgroundColor = "white";
    document.querySelector(".b").backgroundColor = "white";
    document.querySelector(".c").backgroundColor = "white";
    document.querySelector(".d").backgroundColor = "white";
    document.querySelector(".e").backgroundColor = "#edf0f2";
});