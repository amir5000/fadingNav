(function( $ ) {
	$.fn.fadingNav = function(options) {
		var scroll = false;
		var opts = $.extend( {}, $.fn.fadingNav.defaults, options );
		var navBar, scrollAmount, alphaValue, alphaCalc, alphaCalcChange, itemHeight;

		$(window).on('load scroll',function(){
			scroll			= true;
			navBar			= opts.navBar;
			scrollAmount	= $(window).scrollTop();
			alphaCalc		= opts.bkgColor;
			itemHeight		= opts.itemHeight.height();
			alphaValue		= opts.alpha;
			alphaCalcChange	= scrollAmount / itemHeight;
			if (scroll == true && scrollAmount < itemHeight) {
				setTimeout(function() {				
				    if (scrollAmount === 0 || alphaValue >= alphaCalcChange ) {
				        alphaCalc = 'rgba(' + opts.bkgColor + ', ' + alphaValue + ')';
				        navBar.css('background-color', alphaCalc);
				    } else if (alphaValue < alphaCalcChange) {
				        alphaCalc = 'rgba(' + opts.bkgColor + ',' + alphaCalcChange + ')';
				        navBar.css('background-color', alphaCalc);
				    }			
				}, 50);
				scroll = false;
			}
		});
	};

	$.fn.fadingNav.defaults = {
	    navBar: $(".navbar"),
	    bkgColor: '0, 0, 0',
	    alpha: 0,
	    itemHeight : $(".banner")
	};
}( jQuery ));

 
