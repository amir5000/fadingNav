(function( $ ) {
	$.fn.fadingNav = function(options) {
		var scroll = false;
		var opts = $.extend( {}, $.fn.fadingNav.defaults, options );
		var $t, scrollAmount, alphaValue, alphaCalc, alphaCalcChange, itemHeight;
		this.each(function() {
			$t = $(this);
			$(window).on('load scroll', function(){
				scroll			= true;
				scrollAmount	= $(window).scrollTop();
				alphaCalc		= opts.bkgColor;
				itemHeight		= opts.itemHeight.height();
				alphaValue		= opts.alpha;
				alphaCalcChange	= scrollAmount / itemHeight;

				$t.on('mouseenter', function() {
					$t.css('background-color', 'rgba(' + opts.bkgColor + ', 1)');
				});
				$t.on('mouseleave', function() {
					$t.css('background-color', 'rgba(' + opts.bkgColor + ',' + alphaCalcChange + ')');
				});
				if (scroll == true && scrollAmount < itemHeight) {
					setTimeout(function() {				
					    if (scrollAmount === 0 || alphaValue >= alphaCalcChange ) {
					        alphaCalc = 'rgba(' + opts.bkgColor + ', ' + alphaValue + ')';
					        $t.css('background-color', alphaCalc);
					    } else if (alphaValue < alphaCalcChange) {
					        alphaCalc = 'rgba(' + opts.bkgColor + ',' + alphaCalcChange + ')';
					        $t.css('background-color', alphaCalc);
					    }			
					}, opts.intervalSpeed);
					scroll = false;
				} else if (scroll == true && scrollAmount >= itemHeight) {
					$t.css('background-color', 'rgba(' + opts.bkgColor + ', 1)');
				}
			});
			return this;
		});
	};

	$.fn.fadingNav.defaults = {
	    bkgColor: '0, 0, 0',
	    alpha: 0,
	    itemHeight: $(".banner"),
	    refreshRate: 50,
	    inverse: 1
	};
}( jQuery ));

 
