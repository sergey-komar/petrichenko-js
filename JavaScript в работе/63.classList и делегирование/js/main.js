const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
    // if(!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // }else{
    //     btns[1].classList.remove('red') ;
    // }
    btns[1].classList.toggle('red');
});


// ДЕЛЕГИРОВАНИЕ
wrapper.addEventListener('click', (event) =>{
    if(event.target.tagName == 'BUTTON'){
        console.log('hello')
    }
    // if(event.target.classList.contains('blue')){
    //     console.log('hi')
    // }
})
// ДЕЛЕГИРОВАНИЕ

const btn = document.createElement('button'); //Добавляем елемент сюда в js
btn.classList.add('red');
wrapper.append(btn); //Добавляем елемент имеено уже на страницу

// ОБЫЧНЫЙ ПЕРЕБОР НЕ РАБОТАЕТ КЛИК НА ТОТ button который мы добавили сами через createElement
// btns.forEach(btn => {
//     btn.addEventListener('click', () =>{
//         console.log(1);
//     })
// })
// ОБЫЧНЫЙ ПЕРЕБОР НЕ РАБОТАЕТ КЛИК НА ТОТ button который мы добавили сами через createElement