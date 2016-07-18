//********************
// js helpers
//********************

//mobile detection
var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
}



//********************
// generic functions
//********************


// Initialize Parallax Scrolling
function initSkrollr(){
	if(skrollr == 'undefined') return;
	
    if(!isMobile) skrollr.init({
        forceHeight: false,
        smoothScrolling: false
    });
}

$(document).ready(function($){

	initSkrollr();

});