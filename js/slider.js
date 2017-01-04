
/*owl.carousel.js*/
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    items:1,
	    margin:0,
	    autoHeight:true,
	    nav:false,
	    loop:true,
	    /*autoplay:true,*/
    	autoplayTimeout:5000
	});
	/*керування навігацією*/
	//$('.owl-prev').html('<i class="fa fa-caret-left" aria-hidden="true"></i>');
	//$('.owl-next').html('<i class="fa fa-caret-right" aria-hidden="true"></i>')
	$('.owl-dot').html('<i class="fa fa-square" aria-hidden="true"></i>');
	//height();
});

$(document).ready(function(){
	$('.items').owlCarousel({
	    items:5,
	    margin:0,
	    nav:true,
	    loop:true,
	    responsive:{
        0:{
            items:1,
        },
        400:{
        	items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
	});
	/*керування навігацією*/
	$('.owl-prev').html('<i class="fa fa-caret-left" aria-hidden="true"></i>');
	$('.owl-next').html('<i class="fa fa-caret-right" aria-hidden="true"></i>')
	//$('.owl-dot').html('<i class="fa fa-square" aria-hidden="true"></i>');
});
/*jquery.liCover.js*/
/*$(window).load(function(){
    $('.owl-carousel img').liCover({
        parent: $(".owl-carousel"),
        position:'absolute',
        veticalAlign:'middle',
        align:'center'
    });
});*/


/*моя функція підбору висоти*/
/*$(window).resize(function(){
	reloadPage();
	height();
});*/
 /*
function height(){
	var imgHeight =  $(window).height() - $('#header').height() - $('footer').height();
	imgHeight = imgHeight + 22;
    $('.owl-carousel, .slide').css({'height': imgHeight});
}

function reloadPage(){
	window.location.reload();
}

height();
*/