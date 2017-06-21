// add animation to the page loader text
$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});
// set a timeout function for the page loader
var timeout;

function myFunction() {
  timeout = setTimeout(showPage, 2000);
}
// show page when the page loader timeouts
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
