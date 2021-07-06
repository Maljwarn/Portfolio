
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("bar");


var sticky = bar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky + .0000001) {
    bar.classList.add("sticky")
  } else {
    bar.classList.remove("sticky");
  }
}
