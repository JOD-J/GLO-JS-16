(()=>{"use strict";function e(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var n,o,r,a,c,i,l,u,s,d,m,f,v,h,p,y,g,b;v="31 December 2020 ",h=document.querySelector("#timer-hours"),p=document.querySelector("#timer-minutes"),y=document.querySelector("#timer-seconds"),g=document.querySelector("#timer"),b=setInterval((function(){var e,t,n,o=(e=(new Date(v).getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60),minutes:n,seconds:t});o.timeRemaining>=0?(h.textContent=o.hours+" :",p.textContent=o.minutes+" :",y.textContent=o.seconds,o.hours<10&&(h.textContent="0"+o.hours+" :"),o.minutes<10&&(p.textContent="0"+o.minutes+" :"),o.seconds<10&&(y.textContent="0"+o.seconds)):(clearInterval(b),g.textContent="Акция закончилась: ".concat(v))}),1e3),d=document.querySelector(".menu"),m=document.querySelector("menu"),f=function(){m.classList.toggle("active-menu")},d.addEventListener("click",f),m.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("close-btn")||t.closest("ul>li>a"))&&f()})),(s=document.querySelector("main>a")).addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector(s.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,n=setInterval((function(){var e=t/100;e>window.pageYOffset-t&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,e):(window.scrollTo(0,t),clearInterval(n))}),5)})),document.querySelector("menu>ul").addEventListener("click",(function(e){var t=e.target;console.log("target: ",t),e.preventDefault();var n=document.querySelector(t.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,o=setInterval((function(){var e=n/100;e>window.pageYOffset-n&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,e):(window.scrollTo(0,n),clearInterval(o))}),5)})),i=document.querySelector(".popup"),l=document.querySelector("#service-block"),u=document.querySelector(".popup-content"),l.addEventListener("click",(function(e){e.target.matches(".popup-btn")&&(i.style.display="block",window.innerWidth>768&&function(){u.style.transform="translate(-50%)";var e=-100;requestAnimationFrame((function t(){e+=5,u.style.left="".concat(e,"%");var n=requestAnimationFrame(t);50===e&&cancelAnimationFrame(n)}))}())})),i.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?i.style.display="none":(t=t.closest(".popup-content"))||(i.style.display="none")})),r=document.querySelector(".service-header"),a=r.querySelectorAll(".service-header-tab"),c=document.querySelectorAll(".service-tab"),r.addEventListener("click",(function(e){var t=e.target;(t=e.target.closest(".service-header-tab"))&&a.forEach((function(e,n){e===t&&function(e){for(var t=0;t<c.length;t++)e===t?(a[t].classList.add("active"),c[t].classList.remove("d-none")):(a[t].classList.remove("active"),c[t].classList.add("d-none"))}(n)}))})),function(){for(var e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content"),n=document.querySelector(".portfolio-dots"),o=0;o<e.length;o++){var r=document.createElement("li");r.classList.add("dot"),n.insertAdjacentElement("afterbegin",r)}var a=document.querySelectorAll(".dot");a[0].classList.add("dot-active");var c,i=0,l=function(e,t,n){e[t].classList.remove(n)},u=function(e,t,n){e[t].classList.add(n)},s=function(){l(e,i,"portfolio-item-active"),l(a,i,"dot-active"),++i>=e.length&&(i=0),u(e,i,"portfolio-item-active"),u(a,i,"dot-active")},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;c=setInterval(s,e)};t.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".portfolio-btn, .dot")&&(l(e,i,"portfolio-item-active"),l(a,i,"dot-active"),n.matches("#arrow-right")?i++:n.matches("#arrow-left")?i--:n.matches(".dot")&&a.forEach((function(e,t){e===n&&(i=t)})),i>=e.length&&(i=0),i<0&&(i=e.length-1),u(e,i,"portfolio-item-active"),u(a,i,"dot-active"))})),t.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(c)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&d()})),d(1500)}(),n=document.querySelector(".command"),o={},n.addEventListener("mouseover",(function(e){var t=e.target;t.matches(".command__photo")&&(o[t.dataset.img]=t.src,t.src=t.dataset.img)})),n.addEventListener("mouseout",(function(e){var t=e.target;t.matches(".command__photo")&&(t.src=o[t.dataset.img])})),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),i=document.getElementById("total"),l=function(){var n=0,l=1,u=1,s=0,d=o.options[o.selectedIndex].value,m=+r.value;a.value>1&&(l+=(a.value-1)/10),c.value&&c.value<5?u*=2:c.value&&c.value<10&&(u*=1.5),d&&m&&(n=t*d*m*l*u),e=requestAnimationFrame((function t(){e=requestAnimationFrame(t,50),s<n&&n<5e3?(s+=50,i.textContent=s):s<n&&n>5e3?(s+=1e3,i.textContent=s):s>n&&(cancelAnimationFrame(e),i.textContent=Math.floor(n)),o.addEventListener("input",(function(){i.textContent=0}))}))};n.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&l()})),n.addEventListener("input",(function(e){var t=e.target;(t.matches(".calc-square")||t.matches(".calc-count")||t.matches(".calc-day"))&&(t.value=t.value.replace(/\D/,""))}))}(100),function(){var n=[],o='example "Иван"',r='example "+79078425469"',a='example "vika@gmail.com"',c="Разрешенно вводить только кириллицу, пробелы, цифры и знаки препинания.",i=document.createElement("div"),l=document.querySelectorAll("input[id]");i.style.color="white";var u=document.querySelector(".sk-wave");function s(){setTimeout((function(){i.textContent=""}),5e3)}function d(e,t){e?(n.push(t),t.style.boxShadow="0 0 5px 5px red"):(n=n.filter((function(e){return e!==t})),t.style.boxShadow="0 0 5px 5px green")}function m(e){return e.value=e.value.replace(/[a-z0-9?@!,.=_'"/+*)(}{\][|;:\\-]/gi,""),/^[а-яА-Я\s]{3,20}$/.test(e.value)}function f(e){return e.value=e.value.replace(/[a-zA-Zа-яА-ЯЁё?@!,.=_'"/*}{\][|;:-]/gi,""),/^\+?\d{11}$/.test(e.value)}function v(e){return e.value=e.value.replace(/[а-яА-Я?!,+='"/*)(}{\][|;:\\-]/gi,""),/\w+@\w+\.\w{2,4}$/g.test(e.value)}function h(e){return e.value=e.value.replace(/[^а-яА-Я\s!,\\.\\?\d]+/gi,""),/^[а-яА-Я\s\d\\.,!\\?-\\:]{1,}$/g.test(e.value)}function p(n){var o;(o=n.elements,function(e){if(Array.isArray(e))return t(e)}(o)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(o)||e(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"button"!==e.type})).forEach((function(e){e.value="",e.style.boxShadow=""}))}document.addEventListener("submit",(function(t){t.preventDefault(),function(t){t.appendChild(i),i.textContent="",u.style.display="block",i.appendChild(u);var o,r={},a=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=e(t))){o&&(t=o);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw c}}}}(new FormData(t).entries());try{for(a.s();!(o=a.n()).done;){var c=o.value;r[c[0]]=c[1]}}catch(e){a.e(e)}finally{a.f()}n.length?(i.textContent="Поля заполнены не корректно",s()):function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"})}(r).then((function(e){if(200!==e.status)throw new Error("status network mot 200");i.textContent="Спасибо! Мы скоро с вами свяжемся!",s(),p(t)})).catch((function(e){i.textContent="Что то пошло не так",s(),console.log(e),p(t)}))}(t.target)})),l.forEach((function(e){e.addEventListener("focus",(function(e){var t=e.target;t.matches('[name="user_name"]')&&t.setAttribute("placeholder",o),t.matches(".form-phone")&&t.setAttribute("placeholder",r),t.matches(".form-email")&&t.setAttribute("placeholder",a),t.matches(".mess")&&t.setAttribute("placeholder",c)})),e.addEventListener("change",(function(e){var t=e.target;t.matches('[name="user_name"]')&&(m(t)?(t.setAttribute("placeholder","Ваше имя"),d(!m(t),t)):(t.setAttribute("placeholder",o),d(!m(t),t))),t.matches(".form-phone")&&(f(t)?(t.setAttribute("placeholder","Номер телефона"),d(!f(t),t)):(t.setAttribute("placeholder",r),d(!f(t),t))),t.matches(".form-email")&&(v(t)?(t.setAttribute("placeholder","E-mail"),d(!v(t),t)):(t.setAttribute("placeholder",a),d(!v(t),t))),t.matches(".mess")&&(h(t)?(t.setAttribute("placeholder","Ваше сообщение"),d(!h(t),t)):(t.setAttribute("placeholder",c),d(!h(t),t)))}))}))}()})();