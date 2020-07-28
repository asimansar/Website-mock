// Material Ripple effect
$(".material-ripple").click(function(event) {
	var surface = $(this);

	// create .material-ink element if doesn't exist
	if (surface.find(".material-ink").length == 0) {
		surface.prepend("<div class='material-ink'></div>");
	}

	var ink = surface.find(".material-ink");

	// in case of quick double clicks stop the previous animation
	ink.removeClass("animate");

	// set size of .ink
	if (!ink.height() && !ink.width()) {
		// use surface's width or height whichever is larger for
		// the diameter to make a circle which can cover the entire element
		var diameter = Math.max(surface.outerWidth(), surface.outerHeight());
		ink.css({height: diameter, width: diameter});
	}

	// get click coordinates
	// Logic:
	// click coordinates relative to page minus
	// surface's position relative to page minus
	// half of self height/width to make it controllable from the center
	var xPos = event.pageX - surface.offset().left - (ink.width() / 2);
	var yPos = event.pageY - surface.offset().top - (ink.height() / 2);

	var rippleColor = surface.data("ripple-color");

	//set the position and add class .animate
	ink.css({
		top: yPos + 'px',
		left: xPos + 'px',
		background: rippleColor
	}).addClass("animate");
});




//
 var div = document.getElementsByClassName('menuButton')[0];

 div.addEventListener('click', function (event) {
   document.getElementById("overlay").style.display = "block";
 });
 function off() {
   document.getElementById("overlay").style.display = "none";
 }
//


// Lookingfor
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // atLowest
  var textWrapper = document.querySelector('.ml12 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
    .add({
      targets: '.ml12 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 2500
    })
    .add({
      targets: '.ml12 .line',
      translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml12 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: '.ml12',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    // withNo
    var textWrapper = document.querySelector('.ml13 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.ml13 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 3600
      })
      .add({
        targets: '.ml13 .line',
        translateX: [0, document.querySelector('.ml13 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      }).add({
        targets: '.ml13 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
      }).add({
        targets: '.ml13',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
