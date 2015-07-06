# fadingNav
A jquery plugin to fade the NavBar as you scroll
include the plugin script file fadingNav.js &
to initialize the plugin just select your navbar and call the fadingNav plugin 
```
$('.navbar').fadingNav();
```

### default options:

* **bkgColor**: '0, 0, 0' - background default color in RGB.
* **alpha**: 0 - change the starting alpha opacity, valid number is from 0 - 1.
* **itemHeight**: $(".banner") - the height of a container selector that once you reach the end of it the NavBar becomes 100% alpha.

All options can be overridden when initilizing the plugin like this:

```
$('.navbar').fadingNav({
    bkgColor: '22, 124, 124',
    alpha: 0.2
});
```
