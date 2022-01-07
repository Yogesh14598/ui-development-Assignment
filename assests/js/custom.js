
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true,
                        margin: 10
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                        margin: 10
                    }
                }
            })
        })

        $(document).ready(function () {
            $('#nav_icon').click(function () {
                $(this).toggleClass('open');
                $(".head_sec_r").toggleClass('togglelist');
            });
        });

        
    