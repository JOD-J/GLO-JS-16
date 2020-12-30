(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var t,n,o,r,a,c,i,l,u,s,d,m,f,v,h,p;f=document.querySelector("#timer-hours"),v=document.querySelector("#timer-minutes"),h=document.querySelector("#timer-seconds"),p=setInterval((function(){var e,t,n,o=(e=(new Date("30 December 2020 ").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60),minutes:n,seconds:t});o.timeRemaining>=0?(f.textContent=o.hours,v.textContent=o.minutes,h.textContent=o.seconds,o.hours<10&&(f.textContent="0"+o.hours),o.minutes<10&&(v.textContent="0"+o.minutes),o.seconds<10&&(h.textContent="0"+o.seconds)):(clearInterval(p),f.textContent="00",v.textContent="00",h.textContent="00")}),1e3),s=document.querySelector(".menu"),d=document.querySelector("menu"),m=function(){d.classList.toggle("active-menu")},s.addEventListener("click",m),d.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("close-btn")||t.closest("ul>li>a"))&&m()})),(u=document.querySelector("main>a")).addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector(u.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,n=setInterval((function(){var e=t/100;e>window.pageYOffset-t&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,e):(window.scrollTo(0,t),clearInterval(n))}),5)})),document.querySelectorAll("menu>ul>li>a[href]").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=document.querySelector(e.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,o=setInterval((function(){var e=n/100;e>window.pageYOffset-n&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,e):(window.scrollTo(0,n),clearInterval(o))}),5)}))})),c=document.querySelector(".popup"),i=document.querySelectorAll(".popup-btn"),l=document.querySelector(".popup-content"),i.forEach((function(e){e.addEventListener("click",(function(){c.style.display="block",window.innerWidth>768&&function(){l.style.transform="translate(-50%)";var e=-100;requestAnimationFrame((function t(){e=1+e,l.style.left="".concat(e,"%");var n=requestAnimationFrame(t);50===e&&cancelAnimationFrame(n)}))}()}))})),c.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?c.style.display="none":(t=t.closest(".popup-content"))||(c.style.display="none")})),o=document.querySelector(".service-header"),r=o.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab"),o.addEventListener("click",(function(e){var t=e.target;(t=e.target.closest(".service-header-tab"))&&r.forEach((function(e,n){e===t&&function(e){for(var t=0;t<a.length;t++)e===t?(r[t].classList.add("active"),a[t].classList.remove("d-none")):(r[t].classList.remove("active"),a[t].classList.add("d-none"))}(n)}))})),function(){for(var e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content"),n=document.querySelector(".portfolio-dots"),o=0;o<e.length;o++){var r=document.createElement("li");r.classList.add("dot"),n.insertAdjacentElement("afterbegin",r)}var a=document.querySelectorAll(".dot");a[0].classList.add("dot-active");var c,i=0,l=function(e,t,n){e[t].classList.remove(n)},u=function(e,t,n){e[t].classList.add(n)},s=function(){l(e,i,"portfolio-item-active"),l(a,i,"dot-active"),++i>=e.length&&(i=0),u(e,i,"portfolio-item-active"),u(a,i,"dot-active")},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;c=setInterval(s,e)};t.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".portfolio-btn, .dot")&&(l(e,i,"portfolio-item-active"),l(a,i,"dot-active"),n.matches("#arrow-right")?i++:n.matches("#arrow-left")?i--:n.matches(".dot")&&a.forEach((function(e,t){e===n&&(i=t)})),i>=e.length&&(i=0),i<0&&(i=e.length-1),u(e,i,"portfolio-item-active"),u(a,i,"dot-active"))})),t.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(c)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&d()})),d(1500)}(),t=document.querySelector(".command"),n={},t.addEventListener("mouseover",(function(e){var t=e.target;t.matches(".command__photo")&&(n[t.dataset.img]=t.src,t.src=t.dataset.img)})),t.addEventListener("mouseout",(function(e){var t=e.target;t.matches(".command__photo")&&(t.src=n[t.dataset.img])})),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),i=document.getElementById("total"),l=function(){var n=0,l=1,u=1,s=0,d=o.options[o.selectedIndex].value,m=+r.value;a.value>1&&(l+=(a.value-1)/10),c.value&&c.value<5?u*=2:c.value&&c.value<10&&(u*=1.5),d&&m&&(n=t*d*m*l*u),e=requestAnimationFrame((function t(){e=requestAnimationFrame(t,50),s<n&&n<5e3?(s+=50,i.textContent=s):s<n&&n>5e3?(s+=1e3,i.textContent=s):s>n&&(cancelAnimationFrame(e),i.textContent=Math.floor(n)),o.addEventListener("input",(function(){i.textContent=0}))}))};n.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&l()})),n.addEventListener("input",(function(e){var t=e.target;(t.matches(".calc-square")||t.matches(".calc-count")||t.matches(".calc-day"))&&(t.value=t.value.replace(/\D/,""))}))}(100),function(){var t=[],n='example "Иван"',o='example "+79078425469"',r='example "vika@gmail.com"',a="Разрешенно вводить только кириллицу, пробелы, цифры и знаки препинания.",c=document.createElement("div"),i=document.querySelectorAll("input[id]");function l(e,n){e?(t.push(n),n.style.boxShadow="0 0 5px 5px red"):(t=t.filter((function(e){return e!==n})),n.style.boxShadow="0 0 5px 5px green")}function u(e){return e.value=e.value.replace(/[a-z0-9?@!,.=_'"/+*)(}{\][|;:\\-]/gi,""),/^[а-яА-Я\s]{3,20}$/.test(e.value)}function s(e){return e.value=e.value.replace(/[a-zA-Zа-яА-ЯЁё?@!,.=_'"/*}{\][|;:-]/gi,""),/^\+?\d{11}$/.test(e.value)}function d(e){return e.value=e.value.replace(/[а-яА-Я?!,+='"/*)(}{\][|;:\\-]/gi,""),/\w+@\w+\.\w{2,4}$/g.test(e.value)}function m(e){return e.value=e.value.replace(/[^а-яА-Я\s!,\\.\\?\d]+/gi,""),/^[а-яА-Я\s\d\\.,!\\?-\\:]{1,}$/g.test(e.value)}function f(t){var n;(n=t.elements,function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"button"!==e.type})).forEach((function(e){e.value="",e.style.boxShadow=""}))}c.style.color="white",document.addEventListener("submit",(function(e){e.preventDefault(),function(e){e.appendChild(c),c.textContent="Загрузка...";var n=new FormData(e);t.length?c.textContent="Поля заполнены не корректно":function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e,credentials:"include"})}(n).then((function(t){if(200!==t.status)throw new Error("status network mot 200");c.textContent="Спасибо! Мы скоро с вами свяжемся!",f(e)})).catch((function(t){c.textContent="Что то пошло не так",console.log(t),f(e)}))}(e.target)})),i.forEach((function(e){e.setAttribute("autocomplete","off"),e.addEventListener("focus",(function(e){var t=e.target;t.matches('[name="user_name"]')&&t.setAttribute("placeholder",n),t.matches(".form-phone")&&t.setAttribute("placeholder",o),t.matches(".form-email")&&t.setAttribute("placeholder",r),t.matches(".mess")&&t.setAttribute("placeholder",a)})),e.addEventListener("change",(function(e){var t=e.target;t.matches('[name="user_name"]')&&(u(t)?(t.setAttribute("placeholder","Ваше имя"),l(!u(t),t)):(t.setAttribute("placeholder",n),l(!u(t),t))),t.matches(".form-phone")&&(s(t)?(t.setAttribute("placeholder","Номер телефона"),l(!s(t),t)):(t.setAttribute("placeholder",o),l(!s(t),t))),t.matches(".form-email")&&(d(t)?(t.setAttribute("placeholder","E-mail"),l(!d(t),t)):(t.setAttribute("placeholder",r),l(!d(t),t))),t.matches(".mess")&&(m(t)?(t.setAttribute("placeholder","Ваше сообщение"),l(!m(t),t)):(t.setAttribute("placeholder",a),l(!m(t),t)))}))}))}()})();