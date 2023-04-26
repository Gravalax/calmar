window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
	menuItem = document.querySelectorAll('.menu__item'),
	hamburger = document.querySelector('.nav__burger');


	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('nav__burger_active');
		menu.classList.toggle('menu_active');
	});
});

$(document).ready(function() {
	$('.menu__link_registration').on('click', function() {
		$('.overlay, #registration').fadeIn();
		$('body').addClass('block');
		event.preventDefault();
	})

	$('.menu__link_login').on('click', function() {
		$('.overlay, #login').fadeIn();
		$('body').addClass('block');
		event.preventDefault();
	})

	$('.window-modal__close').on('click', function() {
		$('.overlay, #registration, #login').fadeOut();
		$('body').removeClass('block');
	})
});
