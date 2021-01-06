// slider
class SliderCarousel {
	constructor({
		main,
		wrap,
		next,
		prev,
		infinity = false,
		position = 0,
		slidesToShow = 3,
		responsive = []
	}) {
		if (!main || !wrap) {
			console.warn('slider-carousel: необходимо 2 свойства, "main" и "wrap"!');
		}
		this.main = document.querySelector(main);
		this.wrap = document.querySelector(wrap);
		this.next = document.querySelector(next);
		this.prev = document.querySelector(prev);
		this.slides = document.querySelector(wrap).children;
		this.slidesToShow = slidesToShow;
		this.options = {
			position,
			infinity,
			widthSlides: Math.floor(100 / this.slidesToShow)
		};
		this.responsive = responsive;
	}
	addGloClass() {
		this.main.classList.add('glo-slider');
		this.wrap.classList.add('glo-slider__wrap');
		for (const item of this.slides) {
			item.classList.add('glo-slider__item');
		}
	}
	addStyle() {
		let style = document.getElementById('sliderCarousel-style');
		if (!style) {
			style = document.createElement('style');
			style.id = 'sliderCarousel-style';
		}
		style.textContent = `
			.glo-slider{
				overflow: hidden !important;
			}
			.glo-slider__wrap{
				display: flex !important;
				transition: transform 0.5s !important;
				will-change: transform !important;
			}
			.glo-slider__item{
				flex: 0 0 ${this.options.widthSlides}% !important;
				margin: auto 0 !important;
			}
			.glo-slider__next{
				
			}
			.glo-slider__prev{
			}
			`;
		document.head.appendChild(style);
	}
	controlSlider() {
		this.next.addEventListener('click', this.nextSlider.bind(this));
		this.prev.addEventListener('click', this.prevSlider.bind(this));
	}
	nextSlider() {
		if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
			++this.options.position;
			if (this.options.position > this.slides.length - this.slidesToShow) {
				this.options.position = 0;
			}
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
		}
	}
	prevSlider() {
		if (this.options.infinity || this.options.position > 0) {
			--this.options.position;
			if (this.options.position < 0) {
				this.options.position = this.slides.length - this.slidesToShow;
			}
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
		}
	}
	addArrow() {
		this.next = document.createElement('button');
		this.prev = document.createElement('button');
		this.next.className = 'glo-slider__next';
		this.prev.className = 'glo-slider__prev';
		this.main.appendChild(this.prev);
		this.main.appendChild(this.next);
		const style = document.createElement('style');
		style.textContent = `
			.glo-slider__next,
			.glo-slider__prev{
				margin: 0 10px;
				border: 20px solid transparent;
				background: transparent;
			}
			.glo-slider__next{
				border-left-color: #19bbff;
			}
			.glo-slider__prev{
				border-right-color: #19bbff;
			}
			.glo-slider__prev:hover,
			.glo-slider__next:hover,
			.glo-slider__prev:focus,
			.glo-slider__next:focus{
				background: transparent;
				outline: transparent;
			}
			`;
		document.head.appendChild(style);
	}
	responseInit() {
		const slidesToShowDefault = this.slidesToShow;
		const allResponse = this.responsive.map(item => item.breackpoint);
		const maxResponse = Math.max(...allResponse);
		const checkResponse = () => {
			const widthWindow = document.documentElement.clientWidth;
			if (widthWindow < maxResponse) {
				for (let i = 0; i < allResponse.length; i++) {
					if (widthWindow < allResponse[i]) {
						this.slidesToShow = this.responsive[i].slidesToShow;
						this.options.widthSlides = Math.floor(100 / this.slidesToShow);
						this.addStyle();
					}
				}
			} else {
				this.slidesToShow = slidesToShowDefault;
				this.options.widthSlides = Math.floor(100 / this.slidesToShow);
				this.addStyle();
			}
		};
		checkResponse();
		window.addEventListener('resize', checkResponse);
	}
	init() {
		this.addGloClass();
		this.addStyle();
		if (this.prev && this.next) {
			this.controlSlider();
		} else {
			this.addArrow();
			this.controlSlider();
		}
		if (this.responsive) {
			this.responseInit();
		}
	}
}
const slidercarousel = new SliderCarousel({
	main: '.companies-wrapper',
	wrap: '.companies-hor',
	prev: '.test-left',
	next: '.test-right',
	slidesToShow: 4,
	infinity: true,
	responsive: [{
		breackpoint: 1024,
		slidesToShow: 3
	},
	{
		breackpoint: 768,
		slidesToShow: 2
	},
	{
		breackpoint: 576,
		slidesToShow: 1
	},
	]
});

export default slidercarousel;
