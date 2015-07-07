# fadingNav
A jquery plugin to fade the NavBar as you scroll
include the plugin script file fadingNav.js &
to initialize the plugin just select your navbar and call the fadingNav plugin 
```
$('.navbar').fadingNav();
```

**[DEMO1](http://amir5000.github.io/fadingNav/)**

### default options:

* **bkgColor**: '0, 0, 0' - a string value for the background default color in RGB.
* **alpha**: 0 - an int value to change the starting alpha opacity, valid number is from 0 - 1.
* **itemHeight**: $(".banner") - the height of a container selector that once you reach the end of it the NavBar becomes 100% alpha.
* **refreshRate**: 50 - change the scroll refresh rate, don't touch this unless you know what you are doing.
* **fadeOnHover**: true - a boolean value to turn on or off the on hover feature.
* **fadeOnHoverClass**: 'hover' - a string value with the class name when hovering on the NavBar.
* **removeOnHoverClassDelay**: 200 - a number of miliseconds delay when removing the on hover class (Note: you will need to make sure this is the same as the CSS transition length in your CSS file.)
* **enableBreakPoint**: true - This option enables a breakpoint that which a class will get added or removed for styling inside the NavBar once you scroll to a certain point.
* **breakPointClass**: 'break-point' - this is the class added once the breakpoint is reached.
* **breakPointValue**: 0.5 - the value of the which the class will get added 0 is the top and 1 is the very end of the itemHeight container height.

All options can be overridden when initilizing the plugin like this:

```
$('.navbar').fadingNav({
    bkgColor: '22, 124, 124',
    alpha: 0.2,
    fadeOnHover: false
});
```

I have included all the basic features needed for v1.0

### To Do for v1.x:
* Add a feature to revers the opacity direction.
* Add a feature to change the text color inside the nav as you scroll.
