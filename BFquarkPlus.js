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
var slideIndexOne = 1;
var slideIndexTwo = 1;
var slideIndexThree = 1;

showSlidesOne(slideIndexOne);
showSlidesTwo(slideIndexTwo);
showSlidesThree(slideIndexThree);
/*var one=setTimeout(plusSlidesOne,4000);
var two=setTimeout(plusSlidesTwo,4000);
var three=setTimeout(plusSlidesThree,4000);
 function stop(){

    clearTimeout(one);
    clearTimeout(two);
    clearTimeout(three);

}*/
// Next/previous controls
function plusSlidesOne(n) {
  showSlidesOne(slideIndexOne += n);

}
function plusSlidesTwo(n) {
    showSlidesTwo(slideIndexTwo += n);
  
  }
  function plusSlidesThree(n) {
    showSlidesThree(slideIndexThree+= n);
  
  }

// Thumbnail image controls
/*function currentSlide(n) {
  showSlides(slideIndex = n);
}*/

function showSlidesOne(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesOne");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexOne = 1}
  if (n < 1) {slideIndexOne = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndexOne-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}
function showSlidesTwo(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesTwo");
    //var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndexTwo = 1}
    if (n < 1) {slideIndexTwo = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
    slides[slideIndexTwo-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
  }
  function showSlidesThree(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesThree");
    //var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndexThree = 1}
    if (n < 1) {slideIndexThree = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
    slides[slideIndexThree-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
  }
