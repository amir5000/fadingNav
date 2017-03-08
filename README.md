# fadingNav

**[DEMO1](http://amir5000.github.io/fadingNav/)**

A jQuery plugin to fade the NavBar as you scroll to include you need to follow the 4 steps below.


* 1. Include your Fixed Nav HTML.

```html
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        <img alt="Brand" src="...">
      </a>
    </div>
  </div>
</nav>
```

* 2. Include jQuery.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

* 3. Include the plugin after jQuery.

```html
<script src="fadingNav.min.js"></script>
```

* 4. Initialize the fadingNav plugin.

```javascript
$('.navbar').fadingNav();
```

### Default options:

* **bkgColor**: '0, 0, 0' - a string value for the background default color in RGB.
* **alpha**: 0 - an int value from 0 - 1 to change the starting alpha opacity.
* **itemHeight**: $(window) - the height of a container selector that once you reach the end of it the NavBar becomes 100% alpha. Can be changed to be the height of any element.
* **refreshRate**: 50 - change the scroll refresh rate, don't touch this unless you know what you are doing.
* **fadeOnHover**: true - a boolean value to turn on or off the on hover feature.
* **fadeOnHoverClass**: 'hover-class' - a string value with the class name when hovering on the NavBar.
* **removeOnHoverClassDelay**: 200 - a number of miliseconds delay when removing the on hover class (Note: you will need to make sure this is the same as the CSS transition length in your CSS file.)
* **enableBreakPoint**: true - This option enables a breakpoint that which a class will get added or removed for styling inside the NavBar once you scroll to a certain point.
* **breakPointClass**: 'break-point' - this is the class added once the breakpoint is reached.
* **breakPointValue**: 0.5 - the value of the which the class will get added once the breakpoint is reached. (0 is the top and 1 is the very end of the itemHeight container height.)

All options can be overridden when initilizing the plugin like this:

```javascript
$('.navbar').fadingNav({
    bkgColor: '22, 124, 124',
    alpha: 0.2,
    fadeOnHover: false
});
```

I have included all the basic features needed for v1.0

### To Do for v1.x:
* Add better mobile scrolling effect.
* Add better unit testing for the plugin.
* Add a start and end class for more customization.
* Add callback function cababilities when the end of the plugin functionality is reached and as well as when the begining is reached again.
* Add a feature to reverse the opacity direction to fade out instead of fade in.
* ~~Add better Grunt tasks (minify CSS).~~ **DONE**
