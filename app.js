$(function () {
    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window);
    checkScroll(scrollOffset);
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }




    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
        var blockId = $this.data('scroll');
        var blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    })


    /*Menu nav toggle*/

    $("#nav_toggle").on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })



    /*Collapse*/
    $("[data-collapse").on("click",function(event){
        event.preventDefault();
        var $this = $(this);
        var blockId = $this.data('collapse');


        $(blockId).slideToggle();
    });
});