/*Функція прижимання футера до низу екрана якщо немаэ прокрутки з Бутстрап вкладками*/


/*function myFunction(){
	if($('body').height()< $(window).height() ){
	    $('#footer').css({
	        'position' :'fixed',
	        'bottom' : '0'
	    });
    }
    else{
	    $('#footer').css({
	        'position' :'relative'
	    });
	};
};
$('.tab').click(function(){setTimeout(function (){myFunction()}, 1)});
$(window).resize(function(){myFunction()});

myFunction();*/


/*Функція підгону висоти основного контенту*/
function autoHeight(){
	var calcHeight = $(window).height() - $('header').height() - $('footer').height();
	$('.autoHeight').css({
		'min-height' : calcHeight
	});
}
$('.tab').click(function(){setTimeout(function (){autoHeight()}, 1)});
$(window).resize(function(){autoHeight()});
autoHeight();


/*Функція прижимання футера до низу екрана якщо немаэ прокрутки*/

/*
function myFunction(){
	if($('#header').height() + $('#section').height()< $(window).height() ){
	    $('#footer').css({
	        'position' :'fixed',
	        'bottom' : '0'
	        //left: forCenteredBottom
	    });
	    console.log('position:absolute,bottom: 0');
	    }
	    else{
	    $('#footer').css({
	        'position' :'relative'
	    });
	    console.log('position:relative');
	};
};
*/



function addClass(){
 	$('.hrefIn').addClass('.active')
 	console.log('done')
}

$('.hrefOut').click(function(){
	setTimeout(function (){
		addClass()
	}, 100000)
	console.log('click')
});