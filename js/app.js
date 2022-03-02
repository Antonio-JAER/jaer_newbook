window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                breakpoint: 450, 
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 850, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                }
            }
        ]
    });
});
window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista__ani'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores__ani',
        arrows: {
            prev: '.carousel__anterior__ani',
            next: '.carousel__siguiente__ani'
        },
        responsive: [
            {
                breakpoint: 450, 
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 850, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                }
            }
        ]
    });
});


window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista__img'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores__img',
        arrows: {
            prev: '.carousel__anterior__img',
            next: '.carousel__siguiente__img'
        },
        responsive: [
            {
                breakpoint: 450, 
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 850, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                }
            }
        ]
    });
});
