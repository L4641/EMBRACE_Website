

// DropDown Nav Script
let aboutUsHover = false;
let subNavHover = false;

function aboutUsTrue() {
	aboutUsHover = true;
}
function subNavTrue() {
	subNavHover = true;
}
function aboutUsFalse() {
	aboutUsHover = false;
}
function subNavFalse() {
	subNavHover = false;
}
function dropDown() {
	document.getElementById("subNav").style.display = "block";
}
function hideDropDown() {
	if (!aboutUsHover && !subNavHover) {
		document.getElementById("subNav").style.display = "none";
	} 
}

let navCount = 0;
let AUCount = 0;

function displayNav() {
	navCount = navCount + 1;
	if (navCount % 2 == 1) {
		document.getElementById("phoneNav").style.display = "block";
		document.getElementById("hamburger").src = "images/home/x-icon.webp";
		document.getElementById("hamburger").style.width = "20%";
		document.getElementById("hamburger").style.marginTop = "6px";
		AUCount = 1;
	}
	else
	{
		document.getElementById("phoneNav").style.display = "none";
		document.getElementById("hamburger").src = "images/home/hamburgerIcon.webp";
		document.getElementById("hamburger").style.width = "25%";
		document.getElementById("hamburger").style.marginTop = "0px";
		AUCount = 1;
	}
	displaySubNav();
}

function displaySubNav() {
	AUCount = AUCount + 1;
	if (AUCount % 2 == 1) {
		document.getElementById("phoneSubNav").style.display = "block";
		document.getElementById("AULine1").style.borderTop = "1px solid #000000";
		document.getElementById("AULine2").style.borderTop = "1px solid #000000";
	}
	else
	{
		document.getElementById("phoneSubNav").style.display = "none";
		document.getElementById("AULine1").style.borderTop = "1px solid #FFFBCC";
		document.getElementById("AULine2").style.borderTop = "1px solid #FFFBCC";
	}
}





// Homepage Slides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slides");
	let dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {
		slideIndex = 1;
	}    
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";  
	dots[slideIndex - 1].className += " active";
}


//automatically changes slideshow code

automaticSlide();

function automaticSlide() {
	let slides = document.getElementsByClassName("slides");
	let dots = document.getElementsByClassName("dot");
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(automaticSlide, 5000); // Change image every 2 seconds
}





// Acronym Script
function E() {
  document.getElementById("Empowering").innerHTML = 
  	"<img src='images/Hover_Pics/1_Empowering.jpg' alt='Picture' style='width: 25vw;'>";
  document.getElementById("E").style.color="rgba(3,131,153,0.5)";
  document.getElementById("e").style.color="rgba(130,194,194,0.5)";
  document.getElementById("M").style.color="rgba(3,131,153,1)";
  document.getElementById("m").style.color="rgba(130,194,194,1)";
  document.getElementById("B").style.color="rgba(3,131,153,1)";
  document.getElementById("b").style.color="rgba(130,194,194,1)";
  document.getElementById("R").style.color="rgba(210,163,42,1)";
  document.getElementById("r").style.color="rgba(242,190,120,1)";
  document.getElementById("A").style.color="rgba(210,163,42,1)";
  document.getElementById("a").style.color="rgba(242,190,120,1)";
  document.getElementById("C").style.color="rgba(210,163,42,1)";
  document.getElementById("c").style.color="rgba(242,190,120,1)";
  document.getElementById("E2").style.color="rgba(210,163,42,1)";
  document.getElementById("e2").style.color="rgba(242,190,120,1)";
}
function M() {
    document.getElementById("Empowering").innerHTML =
        "<img src='images/Hover_Pics/2_Mobilizing.JPG' style='width: 25vw;'>";
    document.getElementById("E").style.color="rgba(3,131,153,1)";
    document.getElementById("e").style.color="rgba(130,194,194,1)";
    document.getElementById("M").style.color="rgba(3,131,153,0.5)";
    document.getElementById("m").style.color="rgba(130,194,194,0.5)";
    document.getElementById("B").style.color="rgba(3,131,153,1)";
    document.getElementById("b").style.color="rgba(130,194,194,1)";
    document.getElementById("R").style.color="rgba(210,163,42,1)";
    document.getElementById("r").style.color="rgba(242,190,120,1)";
    document.getElementById("A").style.color="rgba(210,163,42,1)";
    document.getElementById("a").style.color="rgba(242,190,120,1)";
    document.getElementById("C").style.color="rgba(210,163,42,1)";
    document.getElementById("c").style.color="rgba(242,190,120,1)";
    document.getElementById("E2").style.color="rgba(210,163,42,1)";
    document.getElementById("e2").style.color="rgba(242,190,120,1)";
}
function B() {
  document.getElementById("Empowering").innerHTML = 
  	"<img src='images/Hover_Pics/3_Better.jpg' alt='Picture' style='width: 25vw;'>";
  document.getElementById("E").style.color="rgba(3,131,153,1)";
  document.getElementById("e").style.color="rgba(130,194,194,1)";
  document.getElementById("M").style.color="rgba(3,131,153,1)";
  document.getElementById("m").style.color="rgba(130,194,194,1)";
  document.getElementById("B").style.color="rgba(3,131,153,0.5)";
  document.getElementById("b").style.color="rgba(130,194,194,0.5)";
  document.getElementById("R").style.color="rgba(210,163,42,1)";
  document.getElementById("r").style.color="rgba(242,190,120,1)";
  document.getElementById("A").style.color="rgba(210,163,42,1)";
  document.getElementById("a").style.color="rgba(242,190,120,1)";
  document.getElementById("C").style.color="rgba(210,163,42,1)";
  document.getElementById("c").style.color="rgba(242,190,120,1)";
  document.getElementById("E2").style.color="rgba(210,163,42,1)";
  document.getElementById("e2").style.color="rgba(242,190,120,1)";
}
function R() {
  document.getElementById("Empowering").innerHTML = 
  	"<img src='images/Hover_Pics/4_Resilient.JPG' alt='Picture' style='width: 25vw;'>";
  document.getElementById("E").style.color="rgba(3,131,153,1)";
  document.getElementById("e").style.color="rgba(130,194,194,1)";
  document.getElementById("M").style.color="rgba(3,131,153,1)";
  document.getElementById("m").style.color="rgba(130,194,194,1)";
  document.getElementById("B").style.color="rgba(3,131,153,1)";
  document.getElementById("b").style.color="rgba(130,194,194,1)";
  document.getElementById("R").style.color="rgba(210,163,42,0.5)";
  document.getElementById("r").style.color="rgba(242,190,120,0.5)";
  document.getElementById("A").style.color="rgba(210,163,42,1)";
  document.getElementById("a").style.color="rgba(242,190,120,1)";
  document.getElementById("C").style.color="rgba(210,163,42,1)";
  document.getElementById("c").style.color="rgba(242,190,120,1)";
  document.getElementById("E2").style.color="rgba(210,163,42,1)";
  document.getElementById("e2").style.color="rgba(242,190,120,1)";
}
function A() {
  document.getElementById("Empowering").innerHTML = 
  	"<img src='images/Hover_Pics/5_Asian.jpg' alt='Picture' style='width: 25vw;'>";
  document.getElementById("E").style.color="rgba(3,131,153,1)";
  document.getElementById("e").style.color="rgba(130,194,194,1)";
  document.getElementById("M").style.color="rgba(3,131,153,1)";
  document.getElementById("m").style.color="rgba(130,194,194,1)";
  document.getElementById("B").style.color="rgba(3,131,153,1)";
  document.getElementById("b").style.color="rgba(130,194,194,1)";
  document.getElementById("R").style.color="rgba(210,163,42,1)";
  document.getElementById("r").style.color="rgba(242,190,120,1)";
  document.getElementById("A").style.color="rgba(210,163,42,0.5)";
  document.getElementById("a").style.color="rgba(242,190,120,0.5)";
  document.getElementById("C").style.color="rgba(210,163,42,1)";
  document.getElementById("c").style.color="rgba(242,190,120,1)";
  document.getElementById("E2").style.color="rgba(210,163,42,1)";
  document.getElementById("e2").style.color="rgba(242,190,120,1)";
}
function C() {
  document.getElementById("Empowering").innerHTML = 
  	"<img src='images/Hover_Pics/6_Community.jpg' alt='Picture' style='width: 25vw;'>";
  document.getElementById("E").style.color="rgba(3,131,153,1)";
  document.getElementById("e").style.color="rgba(130,194,194,1)";
  document.getElementById("M").style.color="rgba(3,131,153,1)";
  document.getElementById("m").style.color="rgba(130,194,194,1)";
  document.getElementById("B").style.color="rgba(3,131,153,1)";
  document.getElementById("b").style.color="rgba(130,194,194,1)";
  document.getElementById("R").style.color="rgba(210,163,42,1)";
  document.getElementById("r").style.color="rgba(242,190,120,1)";
  document.getElementById("A").style.color="rgba(210,163,42,1)";
  document.getElementById("a").style.color="rgba(242,190,120,1)";
  document.getElementById("C").style.color="rgba(210,163,42,0.5)";
  document.getElementById("c").style.color="rgba(242,190,120,0.5)";
  document.getElementById("E2").style.color="rgba(210,163,42,1)";
  document.getElementById("e2").style.color="rgba(242,190,120,1)";
}
function E2() {
  document.getElementById("Empowering").innerHTML = 
  	"<img src='images/Hover_Pics/7_Engagement.JPG' alt='Picture' style='width: 25vw'>";
  document.getElementById("E").style.color="rgba(3,131,153,1)";
  document.getElementById("e").style.color="rgba(130,194,194,1)";
  document.getElementById("M").style.color="rgba(3,131,153,1)";
  document.getElementById("m").style.color="rgba(130,194,194,1)";
  document.getElementById("B").style.color="rgba(3,131,153,1)";
  document.getElementById("b").style.color="rgba(130,194,194,1)";
  document.getElementById("R").style.color="rgba(210,163,42,1)";
  document.getElementById("r").style.color="rgba(242,190,120,1)";
  document.getElementById("A").style.color="rgba(210,163,42,1)";
  document.getElementById("a").style.color="rgba(242,190,120,1)";
  document.getElementById("C").style.color="rgba(210,163,42,1)";
  document.getElementById("c").style.color="rgba(242,190,120,1)";
  document.getElementById("E2").style.color="rgba(210,163,42,0.5)";
  document.getElementById("e2").style.color="rgba(242,190,120,0.5)";
}




// Sponsors image height script

/*

let GLEVideos = document.getElementsByClassName("GLEVideo");
let videoWidth = document.getElementById("GLEDiv").style.width;
let videoHeight = videoWidth;

videoWidth = "400px";
videoHeight = "300px"

for (let i = 0; i < GLEVideos.length; i++) {
    GLEVideos[i].style.width = videoWidth;
    GLEVideos[i].style.height = videoHeight;
}



function clickVideo(videoIndex) {
	let i;
	let videoLink;
	let GLEVideos = document.getElementsByClassName("GLEVideo");
	
	if (videoIndex > GLEVideos.length) {
		videoIndex = 1;
	}    
	if (videoIndex < 1) {
		videoIndex = GLEVideos.length;
	}
	videoLink = GLEVideos[videoIndex - 1].src;
	document.getElementByID("largeVideo").src = videoLink;
}

*/
