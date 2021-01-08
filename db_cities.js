/* eslint-disable strict */
'use sctrict';
const data = {

	"RU": [
		{
			"country": "Россия",
			"count": "144500000",
			"cities": [
				{
					"name": "Рязань",
					"count": "538962",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
				},
				{
					"name": "Москва",
					"count": "12615882",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
				},
				{
					"name": "Санкт-Петербург",
					"count": "5383968",
					"link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Краснодар",
					"count": "918145",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
				},
				{
					"name": "Екатеринбург",
					"count": "1484456",
					"link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Ростов-на-Дону",
					"count": "1130305",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
				},
				{
					"name": "Воронеж",
					"count": "1054537",
					"link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
				}
			]

		},
		{
			"country": "Германия",
			"count": 82175684,
			"cities": [
				{
					"name": "Берлин",
					"count": "3613495",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
				},
				{
					"name": "Мюнхен",
					"count": "1456039",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
				},
				{
					"name": "Франкфурт-на-Майне",
					"count": "736414",
					"link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
				},
				{
					"name": "Кёльн",
					"count": "1080394",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
				}
			]
		},
		{
			"country": "Англия",
			"count": 53012456,
			"cities": [
				{
					"name": "Лондон",
					"count": " 8869898",
					"link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
				},
				{
					"name": "Манчестер",
					"count": "545500",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
				},
				{
					"name": "Эдинбург",
					"count": "488100",
					"link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Бристоль",
					"count": "567111",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
				}
			]

		}
	],
	"EN": [
		{
			"country": "Russia",
			"count": "144500000",
			"cities": [
				{
					"name": "Ryazan",
					"count": "538962",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
				},
				{
					"name": "Moscow",
					"count": "12615882",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
				},
				{
					"name": "St Petersburg",
					"count": "5383968",
					"link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Krasnodar",
					"count": "918145",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
				},
				{
					"name": "Yekaterinburg",
					"count": "1484456",
					"link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Rostov-on-Don",
					"count": "1130305",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
				},
				{
					"name": "Voronezh",
					"count": "1054537",
					"link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
				}
			]

		},
		{
			"country": "Germany",
			"count": 82175684,
			"cities": [
				{
					"name": "Berlin",
					"count": "3613495",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
				},
				{
					"name": "Munich",
					"count": "1456039",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
				},
				{
					"name": "frankfurt",
					"count": "736414",
					"link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
				},
				{
					"name": "Cologne",
					"count": "1080394",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
				}
			]
		},
		{
			"country": "United Kingdom",
			"count": 53012456,
			"cities": [
				{
					"name": "London",
					"count": " 8869898",
					"link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
				},
				{
					"name": "Manchester",
					"count": "545500",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
				},
				{
					"name": "Edinburgh",
					"count": "488100",
					"link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Bristol",
					"count": "567111",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
				}
			]

		}
	],
	"DE": [
		{
			"country": "Russland",
			"count": "144500000",
			"cities": [
				{
					"name": "Ryazan",
					"count": "538962",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
				},
				{
					"name": "Moskau",
					"count": "12615882",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
				},
				{
					"name": "Saint Petersburg",
					"count": "5383968",
					"link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Krasnodar",
					"count": "918145",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
				},
				{
					"name": "Jekaterinburg",
					"count": "1484456",
					"link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Rostow",
					"count": "1130305",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
				},
				{
					"name": "Woronesch",
					"count": "1054537",
					"link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
				}
			]

		},
		{
			"country": "Deutschland",
			"count": 82175684,
			"cities": [
				{
					"name": "Berlin",
					"count": "3613495",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
				},
				{
					"name": "München",
					"count": "1456039",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
				},
				{
					"name": "Frankfurt",
					"count": "736414",
					"link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
				},
				{
					"name": "Köln",
					"count": "1080394",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
				}
			]
		},
		{
			"country": "England",
			"count": 53012456,
			"cities": [
				{
					"name": "London",
					"count": " 8869898",
					"link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
				},
				{
					"name": "Manchester",
					"count": "545500",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
				},
				{
					"name": "Edinburgh",
					"count": "488100",
					"link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Bristol",
					"count": "567111",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
				}
			]

		}
	]
};

const selectCities = document.querySelector('#select-cities'),
	inputCties = document.querySelector('.input-cities'),
	dropdownLists = document.querySelector('.dropdown-lists'),
	dropdownListsCol = document.querySelectorAll('.dropdown-lists__col'),
	dropdownListsListDefault = document.querySelector('.dropdown-lists__list--default'),
	dropdownListsListSelect = document.querySelector('.dropdown-lists__list--select'),
	dropdownListsListAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
	dropdownLstsTotalLine = document.querySelector('.dropdown-lists__total-line');


dropdownListsListDefault.style.display = 'none';
dropdownListsListSelect.style.display = 'none';
const showDefault = () => {
	dropdownListsCol[0].innerHTML = '';
	dropdownListsCol[1].innerHTML = '';
	dropdownListsListDefault.style.display = 'block';
	dropdownListsListSelect.style.display = 'none';

	data.RU.forEach(item => {
		const divTryBlo = document.createElement('div');
		divTryBlo.classList.add('dropdown-lists__countryBlock');
		divTryBlo.innerHTML = `
        <div class="dropdown-lists__total-line">
            <div class="dropdown-lists__country">${item.country}</div>
            <div class="dropdown-lists__count">${item.count}</div>
        </div>
        `;
		dropdownListsCol[0].insertAdjacentElement('beforeend', divTryBlo);
		item.cities.sort((a, b) =>  (+a.count < +b.count ? 1 : -1));
		item.cities.forEach((item, index) => {
			const divLists = document.createElement('div');
			divLists.classList.add('dropdown-lists__line');
			if (index < 3) {
				divLists.innerHTML = `
                <div class="dropdown-lists__city ">${item.name}</div>
                <div class="dropdown-lists__count">${item.count}</div>
                `;
				dropdownListsCol[0].insertAdjacentElement('beforeend', divLists);
			}
		});
	});
};

const showRus = elem => {
	console.log('elem: ', elem.parentElement.parentElement.parentElement.closset('.dropdown-lists__col'));
	if (elem.click) {
		dropdownListsCol[0].innerHTML = '';
		dropdownListsCol[1].innerHTML = '';
		dropdownListsListDefault.style.display = 'none';
		dropdownListsListSelect.style.display = 'block';

		const divTryBlo = document.createElement('div');
		divTryBlo.classList.add('dropdown-lists__countryBlock');
		divTryBlo.innerHTML = `
        <div class="dropdown-lists__total-line">
            <div class="dropdown-lists__country">${data.RU[0].country}</div>
            <div class="dropdown-lists__count">${data.RU[0].count}</div>
        </div>
        `;
		dropdownListsCol[1].insertAdjacentElement('beforeend', divTryBlo);
		data.RU[0].cities.forEach(item => {
			const divLists = document.createElement('div');
			divLists.classList.add('dropdown-lists__line');
			divLists.innerHTML = `
                <div class="dropdown-lists__city ">${item.name}</div>
                <div class="dropdown-lists__count">${item.count}</div>
                `;
			dropdownListsCol[1].insertAdjacentElement('beforeend', divLists);
		});
	} else {
		showDefault();
	}
};
const showGer = () => {
	console.log('data.RU[1];: ', data.RU[1]);

};
const showAng = () => {
	console.log('data.RU[2];: ', data.RU[2]);

};

inputCties.addEventListener('click', event => {
	const target = event.target;
	if (target.matches('#select-cities')) {
		showDefault();
	}

	if (target.matches('.dropdown-lists__total-line')) {
		if (target.children[0].textContent === 'Россия') {
			if (target.matches('.dropdown-lists__list--select')) {
				showDefault();
			} else {
				showRus(target);
			}
		}
		if (target.children[0].textContent === 'Германия') {
			showGer();
		}
		if (target.children[0].textContent === 'Англия') {
			showAng();
		}
	}

});
