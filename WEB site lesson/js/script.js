let menu = document.querySelector(".menu");
newBtn = document.createElement("new");
menu.appendChild(newBtn);
newBtn.textContent = "Пятый пункт";
let box = document.getElementById("Box");
let title = document.querySelector(".title");
title.textContent = "Мы продаем только подлинную технику Apple";
let adv = document.querySelector(".adv");
adv.className = "adv";
let advNew = document.createElement("div");
adv.appendChild(advNew);
advNew.textContent = "For changing";
adv.removeChild(adv.firstChild);
adv.removeChild(adv.firstChild);
adv.classList.remove("adv");
let columns = document.querySelectorAll('.column'),// querySelectorAll - выделяет сразу весь класс 
questionHolder = document.getElementById('prompt');// getElementById - данная команда позволяет идентиф-ть элемент по id где бы он не находился
question = prompt('Как вы относитесь к технике apple ?', '');
questionHolder.innerHTML = `<h1>${question}</h1>`; // вставляем ответ в наш HTML с помощью такой записи 
