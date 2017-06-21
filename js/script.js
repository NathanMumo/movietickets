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
  timeout = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
