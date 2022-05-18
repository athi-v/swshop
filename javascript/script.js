var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("dark-change");
const dt = new Date();

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});

document.getElementById("dt").innerHTML = dt.getFullYear() ;


