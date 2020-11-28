let section_android=document.getElementById("android");
let user_device=navigator.userAgent.toLocaleLowerCase();

/*if(user_device.includes("android")){
    section_android.style.display="flex";



}else{
    section_android.style.display="none";

}*/
let app_download=document.getElementById("app_download");
app_download.addEventListener("click",()=>{

window.open("https://play.google.com/store/apps/details?id=com.sololearn&hl=fr","_blank");
});
var slideIndex = 1;
var desIndex = 1;
showSlides(slideIndex);
showDesc(desIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  showDesc (desIndex += n);
}

// Thumbnail image controls
/*function currentSlide(n) {
  showSlides(slideIndex = n);
}*/

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}
function  showDesc(m)  {

  let i;
  let des = document.getElementsByClassName("myDesc");

  console.log(des);
  //var dots = document.getElementsByClassName("dot");
  if (m > des.length) {desIndex = 1}
  if (m < 1) {desIndex = des.length}
  for (i = 0; i < des.length; i++) {
      des[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  des[desIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";

}