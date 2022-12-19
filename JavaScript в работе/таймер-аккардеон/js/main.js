window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent (){
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        });
    }

    


    function showTabContent(i){
        // tabsContent[i].style.display ='block';
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if(event.target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

// MODAL
const modalBtn = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('[data-close]');


modalBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        modal.classList.add('show')
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'
    })
})



modalClose.addEventListener('click', ()=> {
    modal.classList.remove('show')
    modal.classList.add('hide');
    document.body.style.overflow = ''
})



// Делаем закрытие по клику в любую облась кроме самого модального окна
    modal.addEventListener('click', (event)=> {
        if(event.target == modal){
            modal.classList.remove('show')
            modal.classList.add('hide');
            document.body.style.overflow = ''
        }
    })

// Делаем закрытие по клику на клавишу esc
document.addEventListener('keydown', (event)=> {
    if(event.code == 'Escape' && modal.classList.contains('show')){
        modal.classList.remove('show')
        modal.classList.add('hide');
        document.body.style.overflow = ''
    }
})


//Делаем появление модального окна через определённый промежуток времени
function openmodal(){
    modal.classList.add('show')
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'
}
// const modalTime = setTimeout(openmodal, 3000);




//Делаем появление модального окна когда доскролили страницу до конца
window.addEventListener('scroll', ()=> {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
        openmodal();
    }
})



// ТАЙМЕР
const deadline = '2022-08-04';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),//Разница между конечной датой и той которая сейчас  в кол-ве миллисекунд
            days = Math.floor( (t/(1000*60*60*24)) ),//Math.floor -округление до ближайшего целого
            hours = Math.floor( (t/(1000*60*60) % 24) );//% возращает остаток от деления
            minutes = Math.floor( (t/1000/60) % 60 ),
            seconds = Math.floor( (t/1000) % 60 )

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){ //Подставляем 0 в даты
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) { //Устанавливаем таймер

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),


            
            timeInterval = setInterval(updateClock, 1000);//Запускаем функцию updateClock каждую секунду

        updateClock(); //Убираем мигание таймера то есть он запускается

        function updateClock() { //Обновляем каждую секунду
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);// Если время вышло, то таймер перестает обновляться
            }
        }
    }

    setClock('.timer', deadline);




// АККАРДЕОН
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(acc => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    
    const accordionItemBody = acc.nextElementSibling;
    if(acc.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});






});