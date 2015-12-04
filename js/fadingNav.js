(function( $ ) {
	$.fn.fadingNav = function(options) {
		var scroll = false;
		var opts = $.extend( {}, $.fn.fadingNav.defaults, options );
		var $t, scrollAmount, alphaValue, alphaCalc, alphaCalcChange, itemHeight, mouseIsEntered;
		this.each(function () {
			$t = $(this);
				$(window).on('load scroll', function(){
					scroll			= true;
					mouseIsEntered		= false;
					scrollAmount		= $(window).scrollTop();
					alphaCalc		= opts.bkgColor;
					itemHeight		= opts.itemHeight.height();
					alphaValue		= opts.alpha;
					alphaCalcChange	= scrollAmount / itemHeight;
					if (opts.fadeOnHover === true) {
						$t.on('mouseenter touchmove touchstart', function() {
							mouseIsEntered = true;
							$t.css('background-color', 'rgba(' + opts.bkgColor + ', 1)').addClass(opts.fadeOnHoverClass);
						});
						
						$t.on('mouseleave touchend', function() {
							if (scrollAmount === 0 || alphaValue >= alphaCalcChange ) {
								$t.css('background-color', 'rgba(' + opts.bkgColor + ',' + alphaValue + ')').stop().delay(opts.removeOnHoverClassDelay).queue(function(){
	                    			$t.removeClass(opts.fadeOnHoverClass).dequeue();
	                    		});
	                    	} else if (scrollAmount !== 0 && alphaValue < alphaCalcChange) {
								$t.css('background-color', 'rgba(' + opts.bkgColor + ',' + alphaCalcChange + ')').stop().delay(opts.removeOnHoverClassDelay).queue(function(){
		                    		$t.removeClass(opts.fadeOnHoverClass).dequeue();
		                    	});
							}
							mouseIsEntered = false;
						});
					}
					if (scroll === true && scrollAmount < itemHeight && mouseIsEntered !== true) {
						setTimeout(function() {				
						    if (scrollAmount === 0 || alphaValue >= alphaCalcChange ) {
						        alphaCalc = 'rgba(' + opts.bkgColor + ', ' + alphaValue + ')';
						        $t.css('background-color', alphaCalc);
						    } else if (alphaValue < alphaCalcChange) {
						        alphaCalc = 'rgba(' + opts.bkgColor + ',' + alphaCalcChange + ')';
						        $t.css('background-color', alphaCalc);
						    }
						    if (opts.enableBreakPoint === true) {
							    if (alphaCalcChange >= opts.breakPointValue) {
							    	$t.addClass(opts.breakPointClass);
							    } else if (alphaCalcChange < opts.breakPointValue) {
							    	$t.removeClass(opts.breakPointClass);
							    }
							}
						}, opts.refreshRate);
						scroll = false;
					} else if (scroll === true && scrollAmount >= itemHeight && mouseIsEntered !== true) {
						$t.css('background-color', 'rgba(' + opts.bkgColor + ', 1)');
					}
				});
			return this;
		});
	};
	$.fn.fadingNav.defaults = {
	    bkgColor: '0, 0, 0',
	    alpha: 0,
	    itemHeight: $(window),
	    refreshRate: 50,
	    fadeOnHover: true,
	    fadeOnHoverClass: 'hover-class',
	    removeOnHoverClassDelay: 200,
	    enableBreakPoint: true,
	    breakPointClass: 'break-point',
	    breakPointValue: 0.5,
	};
}( jQuery ));
