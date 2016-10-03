# fadeOpacityOnScroll.js explained  

***_Define variables to be used within scroll fn:_***    

* Start fade @ 0px:  
`var fadeStart = 0;`

* End fade @ 400px (change this number to whatever hight you want the fades to happen until):  
`var fadeUntil = 400;`

* IDs of elements faded together (change to match elements you want to fade):  
`var fading = $('#headerLayerOne, #headerLayerThree, #headerLayerFive');`  

* ID of one element faded separately (change to match elements you want to fade):    
`var twoFade = $("#headerLayerTwo");`  

* ID of another element faded separately (change to match elements you want to fade):  
`var fourFade = $("#headerLayerFour");`  

* Classes of collection of elements faded as group, separate from other fades (change to match elements you want to fade):  
`var creds = $(".lead, .art-dek, .art-cred");`  

***_Time to initiate the function:_***

* Attach DOM event 'scroll' to window object and execute the function contained within every time the scroll event is triggered:  
`$(window).bind('scroll', function() {});`  

* Returns the current position of the vertical scrollbar in pixels, counting down from the top (with the topmost position being 0 px) of window:    
`var scrollTop = $(window).scrollTop();`  

* Returns height of browser viewport:  
`var height = $(window).height();`  

* Returns the current position of the vertical scrollbar in pixels, counting down from the top (with the topmost position being 0 px) of document:  
`var offset = $(document).scrollTop();`  

* Starting opacity value for element you want shown (seems backwards, but we're about to change this value in the function below):  
`var opacity = 0;`

* Starting opacity value for element you want hidden (seems backwards, but we're about to change this value in the function below):  
`var showHideCreds = 1;`

* Check if offset is less than or equal to **fadeStart**. If so:  
```if (offset <= fadeStart) {
// Toggle values of opacity and showHideCreds vars
opacity = 1;
showHideCreds = 0;
}``` 

* Check if offset is less than or equal to **fadeUntil**. If so:  
```else if (offset <= fadeUntil) {
    // Set values of opacity and showHideCreds vars w/
    // calculation that uses offset and fadeUntil
    opacity = 1 - offset / fadeUntil;
    showHideCreds = offset / fadeUntil;
}```

* Now that the `offset` && `fadeStart` && `fadeUntil` values have been calculated, we'll make CSS changes using those vars:  

  * Change opacity property on `creds` var to value of `showHideCreds` var:  
`creds.css('opacity', showHideCreds);`  
  * Change opacity property on fading var to value of opacity var
fading.css('opacity', opacity);

* We want `twoFade` to fade at a different rate than `creds`, `fading`, and `fourFade`, so we'll make an opacity calculation using `height`, `scrollTop`, and a number of our choosing (in this case, 200):  
```twoFade.css({
    'opacity': ((height - (scrollTop)) / (height - 200))
});```  


* We want `fourFade` to fade at a different rate than `creds`, `fading`, and `twoFade`, so we'll make an opacity calculation using `height`, `scrollTop`, and a number of our choosing (in this case, 400):  
```fourFade.css({
    'opacity': ((height - (scrollTop)) / (height - 400))
});```  

* We want `.color-overlay` to fade at a different rate than all the other fading elements, so we'll make another opacity calculation using `height` & `scrollTop`:  
```$('.color-overlay').css({
    'opacity': ((height - scrollTop) / height)
});```  
