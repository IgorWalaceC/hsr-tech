/*
	Intensify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
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

function openNav() {
	$( window ).width();
	if ($( window ).width() <= 980) {
		document.getElementById("mySidenav").style.width = "100%";
		document.getElementById("main").style.marginLeft = "100%;";		
	}else{
		document.getElementById("mySidenav").style.width = "350px";
		document.getElementById("main").style.marginLeft = "350px";
	}
	//$('#main').css( "zIndex", 99999); 
	//document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
	//document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
	//document.body.style.backgroundColor = "white";
	//document.getElementById("header").style.backgroundColor = "white";
}

  // Get the modal
  var modal = document.getElementById('myModal');
            
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = $("img");
  var img_content = $(".modal-content");
  img.each(function(e){
	  img[e].onclick = function(){
		  modal.style.display = "block";
		  modalImg.src = this.src;
		  captionText.innerHTML = this.alt;                    
		  img_content.width(img[e].naturalWidth);
	  }
  });

  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");  
	  
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() { 
	  modal.style.display = "none";
  }  
  
function searchNav() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	ul = document.getElementById("menuList");
	li = ul.getElementsByTagName("a");
	for (i = 0; i < li.length; i++) {
		a = li[i];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";

		}
	}
}