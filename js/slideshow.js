/*** Slideshow Options ****/

var slideSpeed=600;

var autoSlide=false;

var autoSlideTimer = 5000;

var loadRandom = false;


/*----------DESKTOP----------*/


/* This code is executed after the DOM has been completely loaded */
$(document).ready(function(){
	
	var totWidth=0;
	var positions = new Array();

	/* Loop through all the slides and store their accumulative widths in totWidth */
	$('.slides .slide').each(function(i){
		/* The positions array contains each slide's commulutative offset from the left part of the container */
		positions[i]= totWidth;
		totWidth += $(this).width();

		/* Notify if there is no width defined in HTML */
		if(!$(this).width())
		{
			alert("Please, fill in width & height for all your images!");
			return false;
		}
	});


	/* Change the cotnainer div's width to the exact width of all the slides combined */
	$('.slides').width(totWidth);
	
	
	 Set /*the first image to active */
	$('.slides div:first-child').addClass('active');
	
	// Set a random image as the first one. will change each time the page loads
	if (loadRandom) {
		firstImg = Math.floor(Math.random()*(positions.length));
		$('.slides div:nth-child(' +(firstImg+1)+ ')').addClass('active');
		$('.slides').css({marginLeft:-positions[firstImg]+'px'});
	}


	$('.command button.next').click(function(e){
		/* Prevent the default action of the link */
		e.preventDefault();
		nextSlide();
    });
    

   


	/* Set up the previous button actions */
	$('.command button.previous').click(function(e){
		/* Prevent the default action of the link */
		e.preventDefault();
		previousSlide();
    });
    
   
	
	
	function previousSlide() {
		/* Find which image we're on and remove the active class */
		var pos = $('.active').prevAll().length;
		$('.active').removeClass('active');

		if (pos == 0) {		/* We're on the first slide, so need to loop */
			$('.slides').stop().animate({marginLeft:-positions[positions.length-1]+'px'},slideSpeed);
			$('.slides div:nth-child(' +positions.length+ ')').addClass('active');
		}
		else {
			$('.slides').stop().animate({marginLeft:-positions[pos-1]+'px'},slideSpeed);
			$('.slides div:nth-child(' +pos+ ')').addClass('active');
		}
	}

    function nextSlide() {
		/* Find which image we're on and remove the active class */
		var pos = $('.active').prevAll().length;
		$('.active').removeClass('active');


		if (pos == positions.length-1) {		/* We're on the last slide, so need to loop */
			$('.slides').stop().animate({marginLeft:-positions[0]+'px'},slideSpeed);
			$('.slides div:nth-child(0)').addClass('active');
		}
		else {
			$('.slides').stop().animate({marginLeft:-positions[pos+1]+'px'},slideSpeed);
			$('.slides div:nth-child(' +(pos+2)+ ')').addClass('active');
		}
	}


});


/*----------MOBILE----------*/

/* This code is executed after the DOM has been completely loaded */
$(document).ready(function(){
	
	var totWidth=0;
	var positions = new Array();

	/* Loop through all the slides and store their accumulative widths in totWidth */
	$('.slides-mobile .slide-mobile').each(function(i){
		/* The positions array contains each slide's commulutative offset from the left part of the container */
		positions[i]= totWidth;
		totWidth += $(this).width();

		/* Notify if there is no width defined in HTML */
		if(!$(this).width())
		{
			alert("Please, fill in width & height for all your images!");
			return false;
		}
	});


	/* Change the cotnainer div's width to the exact width of all the slides combined */
	$('.slides-mobile').width(totWidth);
	
	
	 Set /*the first image to active */
	$('.slides-mobile div:first-child').addClass('active');
	
	// Set a random image as the first one. will change each time the page loads
	if (loadRandom) {
		firstImg = Math.floor(Math.random()*(positions.length));
		$('.slides-mobile div:nth-child(' +(firstImg+1)+ ')').addClass('active');
		$('.slides-mobile').css({marginLeft:-positions[firstImg]+'px'});
	}


    

    $('.command-mobile button.next').click(function(e){
		/* Prevent the default action of the link */
		e.preventDefault();
		nextSlideMobile();
	});



    
    $('.command-mobile button.previous').click(function(e){
		/* Prevent the default action of the link */
		e.preventDefault();
		previousSlideMobile();
	});
	
	
	function previousSlideMobile() {
		/* Find which image we're on and remove the active class */
		var pos = $('.active').prevAll().length;
		$('.active').removeClass('active');

		if (pos == 0) {		/* We're on the first slide, so need to loop */
			$('.slides-mobile').stop().animate({marginLeft:-positions[positions.length-1]+'px'},slideSpeed);
			$('.slides-mobile div:nth-child(' +positions.length+ ')').addClass('active');
		}
		else {
			$('.slides-mobile').stop().animate({marginLeft:-positions[pos-1]+'px'},slideSpeed);
			$('.slides-mobile div:nth-child(' +pos+ ')').addClass('active');
		}
	}

    function nextSlideMobile() {
		/* Find which image we're on and remove the active class */
		var pos = $('.active').prevAll().length;
		$('.active').removeClass('active');


		if (pos == positions.length-1) {		/* We're on the last slide, so need to loop */
			$('.slides-mobile').stop().animate({marginLeft:-positions[0]+'px'},slideSpeed);
			$('.slides-mobile div:nth-child(0)').addClass('active');
		}
		else {
			$('.slides-mobile').stop().animate({marginLeft:-positions[pos+1]+'px'},slideSpeed);
			$('.slides-mobile div:nth-child(' +(pos+2)+ ')').addClass('active');
		}
	}


});
