//==============================================\\\\\\\animationBtn===========================================================
const animationBtn = () => {
	const animationBtn = document.querySelector('main>a'),
		animationTime = 500,
		framesCount = 100;


	animationBtn.addEventListener('click', event => {
		event.preventDefault();
		const coordY = document.querySelector(animationBtn.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
		const scroller = setInterval(() => {
			const scrollBy = coordY / framesCount;
			if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
				window.scrollBy(0, scrollBy);
			} else {
				window.scrollTo(0, coordY);
				clearInterval(scroller);
			}
		}, animationTime / framesCount);

	});
	const animationBtnn = document.querySelectorAll('menu>ul>li>a[href]'),
		animationTimen = 500,
		framesCountn = 100;
	animationBtnn.forEach(item => {
		item.addEventListener('click', event => {
			event.preventDefault();
			const coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
			const scroller = setInterval(() => {
				const scrollBy = coordY / framesCountn;
				if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
					window.scrollBy(0, scrollBy);
				} else {
					window.scrollTo(0, coordY);
					clearInterval(scroller);
				}
			}, animationTimen / framesCountn);
		});
	});
};
//==============================================\\\\\\\animationBtn===========================================================

export default animationBtn;