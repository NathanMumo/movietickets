function favmovie() {
  var movielist = document.getElementById("movielist");
  document.getElementById("mo").value = movielist.options[movielist.selectedIndex].text;
}

function timeRange() {
  var timelist = document.getElementById("timelist");
  document.getElementById("ti").value = timelist.options[timelist.selectedIndex].text;
}

function ageRange() {
  var agelist = document.getElementById("agelist");
  document.getElementById("ag").value = agelist.options[agelist.selectedIndex].text;
}
var timeout;

function myFunction() {
  timeout = setTimeout(showPage, 4500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
