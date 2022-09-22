// $(document).ready(function(){
// 	$('.carousel__inner').slick(
// 		{
// 			speed: 1200,
// 			// adaptiveHeight: true,
// 			nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right_solid.png"></button>',
// 			prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left_solid.png"></button>',
// 			responsive: [
// 				{
// 					breakpoint: 993,
// 					settings: {
// 						dots: true,
// 						arrows: false,
// 					}
// 				}
// 			]
// 		});
// });
               

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
// 	controls: false,
// 	nav: false
// });

// document.querySelector('.prev').addEventListener('click', function () {
// 	slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
// 	slider.goTo('next');
// });


// $(document).ready(function(){ 
//     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//         $(this)
//           .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//           .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//     });

//     function toggleClass(item) {
//         $(item).each((function(i) {
//             $(this).on('click', function(e) {
//                 e.preventDefault();
//                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//             })
//         }))
//     }

//     toggleClass('.catalog-item__link');
//     toggleClass('.catalog-item__back');
// });
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.catalog__tab');
    const tabsContent = document.querySelectorAll('.catalog__content');
    // Для делегирования событий 
    const tabsParent = document.querySelector('.catalog__tabs');
    const catalogContent = document.querySelectorAll('.catalog-item__content');
    const catalogList = document.querySelectorAll('.catalog-item__list');
    const catalogItemLink = document.querySelectorAll('.catalog-item__link');
    const catalogItemBackLink = document.querySelectorAll('.catalog-item__back');

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.remove('catalog__content_active');
        });

        tabs.forEach((tab) => {
            tab.classList.remove('catalog__tab_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('catalog__content_active');
        tabs[i].classList.add('catalog__tab_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('catalog__tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    function toggleClass(item) {
        item.forEach((link, i) => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                catalogContent[i].classList.toggle('catalog-item__content_active');
                catalogList[i].classList.toggle('catalog-item__list_active');
            })
        });
        
        //         $(item).each((function(i) {
        //             $(this).on('click', function(e) {
        //                 e.preventDefault();
        //                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //             })
        //         }))
        //     }
        
        //     toggleClass('.catalog-item__link');
        //     toggleClass('.catalog-item__back');

    }
    toggleClass(catalogItemLink);
    toggleClass(catalogItemBackLink);

    // Slider 

    const slides = document.querySelectorAll('.carousel__slide'),
          next = document.querySelector('.next'),
          prev = document.querySelector('.prev'),
          slidesWrapper = document.querySelector('.carousel__slider-wrapper'),
          slidesInner = document.querySelector('.carousel__inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    slidesInner.style.width = 100 * slides.length + '%';
    slidesInner.style.display = 'flex';
    slidesInner.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';


    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length -1 )) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesInner.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if ( offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesInner.style.transform = `translateX(-${offset}px)`;
    });
    // showSlides(slideIndex);

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }
       
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });
    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
});