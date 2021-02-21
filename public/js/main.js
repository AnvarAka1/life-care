
    ///////////////////////////////
    // 08. Case Slider Js
    $('.case__slider--active').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });







   