window.addEventListener('DOMContentLoaded', () => {

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// btn.addEventListener('click', ()=>{
//     alert('click');
// })
// btn.addEventListener('mouseenter', (e)=>{ //Событие наведение мышкой на элемент
//     console.log('Hello')
//     console.log(e.target);
//     e.target.remove();
// })

const deletElement = (e) =>{
    console.log(e.target);
    console.log(e.type);
}
btn.addEventListener('click', deletElement);//Всплытие события
overlay.addEventListener('click', deletElement);//Всплытие события
});

const link = document.querySelector('a');
link.addEventListener('click',(event)=> {
    event.preventDefault();//Отменяем стандартное поведение события у ссылки
})