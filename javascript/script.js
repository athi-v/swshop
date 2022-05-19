var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("dark-change");
var dt = new Date();

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});

document.getElementById("dt").innerHTML = dt.getFullYear();
var check = document.getElementById("checkDate").innerHTML
 
var buts = document.getElementById("butID");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buts.style.display = "block";
  } else {
    buts.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function checkDates() {
  if(20== dt.getDate) {
console.log('unavai')  }
  else if(21 == dt.getDate) {
console.log('Hurry')  }
  else if(22 == dt.getDate) {
console.log("Seats Avail")  }
}
