let menu = document.querySelector(".menu");
let navlink = document.querySelector(".nav-links")

var bound = 5;

for (let index = 0; index < bound; index++) {
    menu.addEventListener("click", function(){
        navlink.style.left = "0%";
        menu.addEventListener("click", function(){
            navlink.style.left = "-100%";
                menu.addEventListener("click", function(){
                navlink.style.left = "0%"
                menu.addEventListener("click", function(){
                    navlink.style.left = "-100%"
                    });
                });
        });
    });
}
