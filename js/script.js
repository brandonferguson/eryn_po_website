// Variable declorations
var mn = $(".main-nav");
var $window = $(window);
var mobile = $("#mobile-nav");


// Open mobile nav
function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
}

// Close mobile nav
function closeNav() {
    document.getElementById("mobile-nav").style.width = "0%";
}

// JQuery Sticky Nav for non-mobile
$window.scroll(function() {
    //if window is scrolled 225px, then add class to main-nav
    if( $(this).scrollTop() > 225 ) {
        mn.addClass("main-nav-scrolled");
    } 
    //if window is not scrolled 225px, then remove class from main-nav
    else {
        mn.removeClass("main-nav-scrolled");
    } 
});


// need to wait for document to finish loading before implimenting
$(document).ready(function() {
// JQuery for Mobile Nav
function checkWidth() {
    var windowsize = $window.width();
    //If window's width is more than 440px, then add .sidenav class to mobile-nav ID
    if (windowsize < 600) {
        mobile.width("0%");
        mobile.addClass("sidenav");
    }
    //If window's width is less than 440px, then remove .sidenav class from mobile-nav ID
    else {
        mobile.removeClass("sidenav");
        mobile.width("100%");
    }
};

//Check width on load
checkWidth();

//Check width on resize
$window.resize(checkWidth);
});
