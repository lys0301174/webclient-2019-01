$(document).ready(function() {

    /*navigation bar - main menu indicator*/
    $('#header')
		.css('position', 'relative');
	menuHover = function(which){
		$('ul#main-menu li').not('.active').find('a').not(which).css('background', 'none');
		$('ul#main-menu .active a').add($(which)).each(function(){
			$(this).css('background', 'url("img/menu-active.png") no-repeat -'+
				($(this).offset().left-$('ul#main-menu').offset().left-6)
				+'px 0')
		});
		if(which==null)
		    which = $('ul#main-menu .active');
		$('#main-menu-indicator')
			.stop(true, false)
			.animate({
				left: ($(which).offset().left - $('#header').offset().left + $(which).width()/2 + parseInt($(which).css('paddingLeft')) - $('#main-menu-indicator').width()/2 )
			}, 500)
	};

    menuHover(null);

	$('ul#main-menu a')
		.hover(
			function(){
				menuHover(this)
			},
			function(){
				menuHover(null)
			}
		 );

    /*image slideshow*/
    setTimeout(function() {
        $('.sliderwrapper').each(function () {
            var $slides = $('.main-image').find('img'),
                slideCount = $slides.length,
                currentIndex = 0;

            $slides.eq(currentIndex)
                    .css('width', '1200px')
                    .slideUp(1250);

            setInterval(showNextSlide, 4000);

            function showNextSlide(){
                var nextIndex = (currentIndex + 1) % slideCount;
                $slides.eq(currentIndex)
                    .css('width', '1200px')
                    .slideUp(1250);
                $slides.eq(nextIndex)
                    .css('width', '1200px')
                    .slideUp(1250);
                currentIndex = nextIndex;
            }
        });
    }, 3000);

    /*latest news*/
    $('.tweet').hide();
    $('.article').hide();

    setTimeout(function() {
        $('#news')
            .css('height', '626px')
            .show();
        $('.tweet').show(800);
        $('.article').show(800);
    }, 5000);

    /*back-to-top*/
    $('a.back-to-top').click(function(e){
        e.preventDefault();
        $('html').add('body').animate({scrollTop: 0}, 500)
    });
});


