function showBurgerMenu() {
    document.getElementById('popup-div-burger-menu').style.display = "block";
 }

 function closeBurgerMenu() {
    document.getElementById('popup-div-burger-menu').style.display = "none";
 }
 
 function showFilterMenu() {
   document.getElementById('popup-div-filter').style.display = "block";
}

function closeFilterMenu() {
   document.getElementById('popup-div-filter').style.display = "none";
}

//accordion

var acc = document.getElementsByClassName("accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
      panel.style.display = "none";
      } else {
      panel.style.display = "block";
      }
   });
}
