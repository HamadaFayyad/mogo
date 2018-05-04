$(document).ready(function() {

    let menuDisplay = false;

    $(window).on("load", function() {

        $(".page-loader").fadeOut(1500);
    })

    $(".open-icon").click(function() {

        $(this).fadeOut();

        $(".close-icon").fadeIn();

        $(".main-nav").css({

            "right" : "-65px",
            "transition" : ".5s"
        });

        $(".mobile-icon").css("left", "-50px");

        menuDisplay = true;

    });

    $(".close-icon").click(function() {

        $(this).fadeOut();

        $(".open-icon").fadeIn();

        $(".main-nav").css({

            "right" : "-265px",
            "transition" : ".5s"
        });

        $(".mobile-icon").css("left", "-105px");

        menuDisplay = false;

    });

    // TODO : Scroll To The Portfolio Part When Clicking On The Scroll Down Icon
    $(".link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

        if(menuDisplay == true ) {

            $(".close-icon").fadeOut();

            $(".open-icon").fadeIn();

            $(".main-nav").css({

                "right" : "-265px",
                "transition" : ".5s"
            });

            $(".mobile-icon").css("left", "-105px");

            menuDisplay = false;
        }
    });

    // TODO : Show Back To Top Icon When The User Scrolls Down.
    $(window).scroll(function() {

        const introHeight = $(".intro").outerHeight() / 2;

        // TODO : Check If Window Scrolls Down More Than introHeight Than Show/Hide Back To Top Icon.
        if ($(window).scrollTop() > introHeight) {

            $(".back-to-top").fadeIn();

        } else {

            $(".back-to-top").fadeOut();
        } // End If

    });

    // TODO : Back To The Page Top When Clicking Back To Top Button.
    $(".back-to-top").click(function(e) {

        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 800);

        // Make sure this.hash has a value before overriding default behavior
        if ($(".intro").hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        } // End If

    });

});