const Navigation = {
	hamburger: document.querySelector('.js-nav-hamburger'),
	navList: document.querySelector('.js-nav-list'),
	navItems: document.querySelectorAll('.js-nav-item'),
	navLinkDrop: document.querySelector('.js-nav-link-drop'),
	navChevron: document.querySelector('.js-nav-chevron'),
	navDropList: document.querySelector('.js-nav-drop-list'),

	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		const _this = this;

		if (window.innerWidth < 993) {
			this.hamburger.addEventListener('click', function () {
				_this.navList.classList.toggle('nav__list--active');
				_this.hamburger.classList.toggle('open');
			});

			this.navItems.forEach(function (item) {
				item.addEventListener('click', function () {
					_this.hamburger.classList.remove('open');
					_this.navList.classList.remove('nav__list--active');
				});
			});
			this.navLinkDrop.addEventListener('click', function () {
				_this.navChevron.classList.toggle('nav__chevron--active');
				_this.navDropList.classList.toggle('nav__drop-list--active');
			});
			document.addEventListener('click', function (event) {
				var isClickInside = _this.navLinkDrop.contains(event.target);

				if (!isClickInside) {
					_this.navChevron.classList.remove('nav__chevron--active');
					_this.navDropList.classList.remove('nav__drop-list--active');
				}
			});
		}
	},
};
Navigation.init();
const Plugins = {
	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		$('.js-hero-slider').slick({
			dots: false,
			prevArrow: '.hero-slider__prev',
			nextArrow: '.hero-slider__next',
			infinite: false,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows: false,
					},
				},
			],
		});
	},
};
Plugins.init();
const Contact = {
	jsInput: document.querySelector('.js-email'),
	jsPlaceholder: document.querySelector('.js-email-placeholder'),
	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		const _this = this;

		this.jsInput.addEventListener('keyup', function () {
			if (_this.jsInput.value) {
				_this.jsPlaceholder.classList.add('contact__placeholder--active');
			} else {
				_this.jsPlaceholder.classList.remove('contact__placeholder--active');
			}
		});
	},
};
Contact.init();
