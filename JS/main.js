const mobileNavButton = document.querySelector('.mobile-nav-btn');
const mobileNavIcon = document.querySelector('.mobile-nav-btn__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});