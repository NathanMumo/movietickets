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
  timeout = setTimeout(showPage, 3000);
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
<<<<<<< HEAD
=======
// // USER INTERFACE LOGIC


//vedeo play on hover
var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}


// TOOLTIP
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});




























// $(document).ready(function () {
// var allQuotes = $("blockquote");
// var currentQuote = 0;
//
// function changeQuote() {
//   $(allQuotes[currentQuote]).fadeOut(500, function () {
//     if (currentQuote == allQuotes.length - 1 ) {
//       currentQuote = 0;
//     }else {
//       currentQuote++;
//     }
//     $(allQuotes[currentQuote]).fadeIn(500)
//
//   });
//
// }
// var quoteTime = setInterval(changeQuote,3000);
//
// });
>>>>>>> ca086ff81444695d8bec4c7474f19f0a56c5686f
