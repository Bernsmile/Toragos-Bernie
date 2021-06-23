/*!
* Start Bootstrap - Resume v7.0.1 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


$(document).ready(function(){
    $( ".resume-section" ).hide ();
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing text animation script
    var typed = new Typed(".this_is_me", {
        strings: ["Web Developer.", "App Developer.", "Video Editor.", "Photo Editor.", "Graphic designer."],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

$( "#nav_me_ho" ).click(function() {
    $( "#header" ).show ( "slow");
  $( ".resume-section" ).hide ( "slow", function() {

  });
});
$( "#nav_me_pr" ).click(function() {

    

    $( "#header" ).hide ( "slow");
        $( "#service").hide ("slow");
        $( "#skills").hide ("slow");
        $( "#contact").hide ("slow");
        $( "#about").hide ("slow");
        $( "#projects").show("slow");
});
$( "#nav_me_sk" ).click(function() {
    $( "#header" ).hide ( "slow");
    $( "#service").hide ("slow");
        $( "#skills").show ("slow");
        $( "#contact").hide ("slow");
        $( "#about").hide ("slow");
        $( "#projects").hide("slow");
        
});
$( "#nav_me_se" ).click(function() {
    $( "#header" ).hide ( "slow");
    $( "#service").show ("slow");
        $( "#skills").hide ("slow");
        $( "#contact").hide ("slow");
        $( "#about").hide ("slow");
        $( "#projects").hide("slow");
        
});
$( "#nav_me_co" ).click(function() {
    $( "#header" ).hide ( "slow");
    $( "#service").hide ("slow");
        $( "#skills").hide ("slow");
        $( "#contact").show ("slow");
        $( "#about").hide ("slow");
        $( "#projects").hide("slow");
        
});
$( "#nav_me_ab" ).click(function() {
    $( "#header" ).hide ( "slow");
    $( "#service").hide ("slow");
        $( "#skills").hide ("slow");
        $( "#contact").hide ("slow");
        $( "#about").show ("slow");
        $( "#projects").hide("slow");
        
});

(function($) {

    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    
    fullHeight();

    var burgerMenu = function() {

        $('.js-colorlib-nav-toggle').on('click', function(event) {
            event.preventDefault();
            var $this = $(this);
            if( $('body').hasClass('menu-show') ) {
                $('body').removeClass('menu-show');
                $('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
            } else {
                $('body').addClass('menu-show');
                setTimeout(function(){
                    $('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
                }, 900);
            }
        })
    };
    burgerMenu();


})(jQuery);

