console.log(document.body.childNodes); // Дети у body получаем элементы внутри родителя
console.log(document.body.firstChild);// Дети у body получаем элементы внутри родителя 1 узел
console.log(document.body.lastChild);// Дети у body получаем элементы внутри родителя последний 
 
console.log(document.querySelector('#current').parentNode);//Получает родителя у элемента. В данном случаи получаем  <div class="first"> Тут мыполучаем ноду то есть узел

 console.log(document.querySelector('[data-current]').nextSibling); // Получаем следующий узел который находится после элемента с дата атрибутом [data-current].В данном случаи у нас в вёрстке находится пустое место то есть текстовая нода.  Тут мыполучаем ноду то есть узел
// childNodes firstChild lastChild Это всё методы и они получают  текстовые узлы






console.log(document.querySelector('[data-current]').nextElementSibling);// Получаем следующий ЭЛЕМЕНТ который находится после элемента с дата атрибутом [data-current] . в ДАННОМ СЛУЧАИ ЭТО LI
console.log(document.querySelector('#current').parentElement);//Получает родителя у элемента. В данном случаи получаем  <div class="first">.  Тут мыполучаем сам элемент
console.log(document.body.firstElementChild);// Дети у body получаем элементы внутри родителя 1 элемент