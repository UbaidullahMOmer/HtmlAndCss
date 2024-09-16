
document.querySelector(".menu").addEventListener("click", function(){    
    document.querySelector(".nav-list").style.right = "0%"
    document.querySelector(".nav-list").style.display = "flex"
    document.querySelector(".menu").addEventListener("click", function(){
    document.querySelector(".nav-list").style.right = "-1000%"
  })
});


