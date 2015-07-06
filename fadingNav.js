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
				if (opts.fadeOnHover === true) {
					$t.on('mouseenter', function() {
						$t.css('background-color', 'rgba(' + opts.bkgColor + ', 1)').addClass(opts.fadeOnHoverClass);
					});
					if (scrollAmount === 0 || alphaValue >= alphaCalcChange ) {
						$t.on('mouseleave', function() {
							$t.css('background-color', 'rgba(' + opts.bkgColor + ',' + alphaValue + ')').delay(opts.removeOnHoverClassDelay).queue(function(){
                    			$t.removeClass(opts.fadeOnHoverClass).dequeue();
                    		});
						});
					} else {
						$t.on('mouseleave', function() {
							$t.css('background-color', 'rgba(' + opts.bkgColor + ',' + alphaCalcChange + ')').delay(opts.removeOnHoverClassDelay).queue(function(){
                    			$t.removeClass(opts.fadeOnHoverClass).dequeue();
                    		});
						});
					}
				}
				if (scroll == true && scrollAmount < itemHeight) {
					setTimeout(function() {				
					    if (scrollAmount === 0 || alphaValue >= alphaCalcChange ) {
					        alphaCalc = 'rgba(' + opts.bkgColor + ', ' + alphaValue + ')';
					        $t.css('background-color', alphaCalc);
					    } else if (alphaValue < alphaCalcChange) {
					        alphaCalc = 'rgba(' + opts.bkgColor + ',' + alphaCalcChange + ')';
					        $t.css('background-color', alphaCalc);
					    }
					    if (alphaCalcChange >= opts.customBreakPointValue) {
					    	$t.addClass(opts.halfWayMarkClass);
					    } else if (alphaCalcChange < opts.customBreakPointValue) {
					    	$t.removeClass(opts.halfWayMarkClass);
					    }		
					}, opts.refreshRate);
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
	    fadeOnHover: true,
	    fadeOnHoverClass: 'hover',
	    removeOnHoverClassDelay: 200,
	   	halfWayMarkClass: 'half-way',
	   	customBreakPointValue: 0.5,
	};
}( jQuery ));