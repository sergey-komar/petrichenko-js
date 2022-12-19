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



// КАЛЬКУЛЯТОР
const result = document.querySelector('.calculating__result');
let sex = 'famale',
height,weight,age,
ratio = 1.35;

function calcTotal (){
    if(!sex || !height || !weight || !age || !ratio){
        result.textContent = 'Не вышло';
        return;
    }

    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}

calcTotal();

function getStaticInformation(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
            } else {
                sex = e.target.getAttribute('id');
            }

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcTotal();
        });
    });
}


getStaticInformation('#gender', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');



 function getDynamicInformation(selector){
    const input = document.querySelector(selector);

    input.addEventListener('input', ()=>{
        switch(input. getAttribute('id')){
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case 'age':
                age = +input.value;
                break;
        }
        calcTotal();
    });
   
 }

 getDynamicInformation('#height');
 getDynamicInformation('#weight');
 getDynamicInformation('#age');



 
});
