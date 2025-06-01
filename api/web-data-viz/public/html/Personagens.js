$(document).ready(function () {
    const owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    $('#btn-next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('#btn-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});
