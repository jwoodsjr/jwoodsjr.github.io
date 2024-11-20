function showit(var1){
// Hide the one div that is shown
document.getElementById('d1').style.display='none';
document.getElementById('d2').style.display='none';
document.getElementById('d3').style.display='none';
document.getElementById('d4').style.display='none';
// show the one div that you sent to this function
document.getElementById(var1).style.display='block';
}
