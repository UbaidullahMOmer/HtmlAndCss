var menu = document.getElementById("menu");
var navlinks = document.getElementById("navlinks");
var close = document.getElementById("close");
menu.addEventListener("click", function(){
    navlinks.style.right = "0px";
    close.style.display = "block";
    menu.style.display = "none";
});

close.addEventListener("click", function(){
    navlinks.style.right = "100%";
    menu.style.display = "block";
    close.style.display = "none";
});