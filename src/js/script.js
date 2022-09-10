
// $(document).ready(function(){
// 	$('.carousel__inner').slick({
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
               

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
	controls: false,
	nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});