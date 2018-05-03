$(document).ready(function() {

    $(".open-icon").click(function() {

        $(this).fadeOut();

        $(".close-icon").fadeIn();

        $(".main-nav").css({

            "right" : "-65px",
            "transition" : ".5s"
        });

        $(".mobile-icon").css("left", "-50px");

    });

    $(".close-icon").click(function() {

        $(this).fadeOut();

        $(".open-icon").fadeIn();

        $(".main-nav").css({

            "right" : "-265px",
            "transition" : ".5s"
        });

        $(".mobile-icon").css("left", "-105px");

    });

});