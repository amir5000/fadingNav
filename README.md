# fadingNav
A jquery plugin to fade the NavBar as you scroll
include the plugin script file fadingNav.js &
to initialize the plugin just select your navbar and call the fadingNav plugin 

$('.navbar').fadingNav();

### default options:

* navBar: $(".navbar") - to change the navbar selector.
* bkgColor: '0, 0, 0' - background default color in RGB.
* alpha: 0 - to change the starting alpha opacity.
* itemHeight: $(".banner") - the height of a container selector that once it gets to the end of becomes 100% alpha.

All options can be overridden when initilizing the plugin like this:

$('.navbar').fadingNav({
	    bkgColor: '22, 124, 1244',
	    alpha: 0.3
	});
