/*var navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});*/

var mainNav = document.getElementById("js-menu");
var nav = document.getElementById("myNav");

document.getElementsByClassName('closebtn')[0].onclick = function () {
	nav.style.width = "0%";
	document.getElementsByClassName('fa-bars')[0].style.display = "inline";
}


document.getElementsByClassName('fa-bars')[0].onclick = function () {
	nav.style.width = "100%";
	mainNav.classList.add("active");
	document.getElementsByClassName('fa-bars')[0].style.display = "none";
}

document.getElementsByClassName('nav-links')[0].onclick = function () {
	nav.style.width = "0%";
	document.getElementsByClassName('fa-bars')[0].style.display = "inline";
}

document.getElementsByClassName('nav-links')[1].onclick = function () {
	nav.style.width = "0%";
	document.getElementsByClassName('fa-bars')[0].style.display = "inline";
}

document.getElementsByClassName('nav-links')[2].onclick = function () {
	nav.style.width = "0%";
	document.getElementsByClassName('fa-bars')[0].style.display = "inline";
}

document.getElementsByClassName('nav-links')[3].onclick = function () {
	nav.style.width = "0%";
	document.getElementsByClassName('fa-bars')[0].style.display = "inline";
}

/*document.getElementsByClassName('nav-links')[0].onclick = function(){
	
var clickLink = document.getElementsByClassName('nav-links');


	if (clickLink == true) {
		document.getElementById("myNav").style.width = "0%";
		document.getElementsByClassName('fa-bars')[0].style.display = "inline";
	}
}

//function closeNav() {
  //document.getElementById("myNav").style.width = "0%";
//}

//function openNav() {
  //document.getElementById("myNav").style.width = "100%";
//}*/