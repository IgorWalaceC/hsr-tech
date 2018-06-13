/*
	Intensify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function ($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function () {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Scrolly.
		$('.scrolly').scrolly({
			offset: function () {
				return $header.height();
			}
		});

		// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

	});

})(jQuery);


var opacity = document.getElementById('opacity');
function openNav() {
	$(window).width();
	if ($(window).width() <= 980) {
		document.getElementById("mySidenav").style.width = "100%";
		document.getElementById("main").style.marginLeft = "100%;";
		opacity.style.display = "block";
	} else {
		document.getElementById("mySidenav").style.width = "350px";
		document.getElementById("main").style.marginLeft = "350px";
		opacity.style.display = "block";
	}
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	opacity.style.display = "none";
}


var modal = document.getElementById('myModal');
var img = $("img");
var notInclude = $(".logo")
var img_content = $(".modal-content");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.each(function (e) {
	img[e].onclick = function () {
		if(!img[e].className.includes("logo")){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
			img_content.width(img[e].naturalWidth);			
		}
	}
});
var divOpacity = document.getElementsByClassName("bodyOpacity")[0];
divOpacity.onclick = function () {
	closeNav();
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
	modal.style.display = "none";
}

function searchNav() {
	$(".dropdown-container").css("display", "block");
	$(".dropdown-btn").css("display", "none");
	$(".dropdown-container").css("background", "none");
	$(".dropdown-container").css("padding-left", "0");
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	ul = document.getElementById("menuList");
	li = ul.getElementsByTagName("a");
	if (filter == "") {
		$(".dropdown-container").css("display", "none");		
		$(".dropdown-btn").css("display", "block");
		$(".dropdown-container").css("background", "#262626");
		$(".dropdown-container").css("padding-left", "8px");
	}
	for (i = 0; i < li.length; i++) {
		a = li[i];
		if (a.innerHTML.toUpperCase().search(filter) > -1) {
			li[i].style.display = "";
		}		
		else {
			li[i].style.display = "none";
		}
	}
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}