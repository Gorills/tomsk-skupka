$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH )  {
            header.addClass("fixed");
        }    else {
            header.removeClass("fixed");
        }
    }


    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 60;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });

    /* Menu Nav Toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $("#header").toggleClass("header-active");
    })

    $(".nav a").on("click", function(event) {
        // event.preventDefault();
        $(".nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
        $(".header").removeClass("header-active");
    })

});