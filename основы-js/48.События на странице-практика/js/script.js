/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
document.addEventListener('DOMContentLoaded', ()=>{


const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg');
const genre = document.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');


const addForm = document.querySelector('.add');
const addInput = document.querySelector('.adding__input');
const checkbox = document.querySelector('[type="checkbox"]');



const movieDB = {
    movies: [
        "Логан",
        "Одержимость",
        "Лига справедливости",
        "Скотт Пилигрим против...",
        "Ла-ла лэнд"
    ]
};


addForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if(newFilm){

        if(newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if(favorite){
            console.log('Добавляем любимый фильм');
        }

        movieDB.movies.push(newFilm);// Добавляем новый фильм в массив.Это то значение котрое было введено в input
        sortArr(movieDB.movies);
    
        creatMovieList(movieDB.movies, movieList);
    }
   
   event.target.reset();
});



const deleteAdv = (arr)=>{
    arr.forEach(item => {
        item.remove();
    });
};
deleteAdv(adv);


const makeChanches = () =>{
    genre.textContent = 'Привет';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
};
makeChanches();



const sortArr = (arr) =>{
    arr.sort();
};




 function creatMovieList(films, parent){
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((film, i) => {
    parent.innerHTML = movieList.innerHTML + `
    <li class="promo__interactive-item">${i+1} ${film}
    <div class="delete"></div>
    </li>
    `;
 })
    document.querySelectorAll('.delete').forEach((btn, i) =>{
       btn.addEventListener('click',()=> {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1); //вырезает определенный элемент из массива
        creatMovieList(films, parent); //рекурсия
       })
    })

 }

 creatMovieList(movieDB.movies, movieList);


})