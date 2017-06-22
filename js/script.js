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

$(document).ready(function () {
  $('#woman, #eyes').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'woman' ? $('#eyes') : $('#woman');
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });
  $('#guardian, #guard').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'guardian' ? $('#guard') : $('#guardian');
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });
  $('#henry, #bookie').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'henry' ? $('#bookie') : $('#henry');
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });
  $('#night, #even').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'night' ? $('#even') : $('#night');
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });
  $('#carz, #cars').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'carz' ? $('#cars') : $('#carz');
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });
  $('#spider, #spidermanhc').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'spider' ? $('#spidermanhc') : $('#spider');
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });
});
