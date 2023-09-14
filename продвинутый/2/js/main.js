window.addEventListener('DOMContentLoaded', () =>{


 let btnPressed = false;   //если false то значит пользователь ещё не кликнул не на одну кнопку
// МОДАЛКА
function bundModal(triggerSelector, modalSelector, closeSelector, destroy = false, ){
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const scroll = calcScroll();
    let btnPressed = false;  

trigger.forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.target){
            e.preventDefault();
        }

        btnPressed = true; //если true то значит пользователь уже кликнул хоть на одну кнопку

        if(destroy){
            item.remove();//Удаляем тот тригер со стрнаице на который кликнули для появления модального окна. В данном случаи удаляется поларок по которому кликаем и появляется модальное окно
        }

        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    })
   
});

close.addEventListener('click', () =>{
    modal.classList.add('hide', 'animated', 'fadeIn');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
});

// Закртытие по клику в область экрана за пределами самого модального окна
    modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`
    }
});
// ЗАКРЫТИЕ ПО КЛИКУ НА ESC
document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`
    }
})
}


// УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
function calcScroll(){
let div = document.createElement('div');
div.style.width = '50px';
div.style.height = '50px';
div.style.overflowY = 'scroll';
div.style.visibility = 'hidden';

document.body.appendChild(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

return scrollWidth;
}
// УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ




// ПОЯВЛЕНИЕ МОДАЛЬНОГО ОКНА ЧЕРЕЗ ОПРЕДЕЛЁННЫЙ ПРОМЕЖУТОК ВРЕМЕНИ
// function showModalByTime(selector, time){
//     setTimeout(function(){

//         // если открыто хоть одно модально окно, то остальные которые должны были появиться через 3 секунды не будут появляться
//         let display;
//         document.querySelectorAll('[data-modal]').forEach(item => {
//             if(getComputedStyle(item).display !== 'none'){
//                 display = 'block'
//             }
//         })
      

//         if(!display){
//             document.querySelector(selector).style.display = 'block';
//             document.body.style.overflow = 'hidden';
//             const scroll = calcScroll();
//             document.body.style.marginRight = `${scroll}px`
//         }
//     }, time);
// }
// showModalByTime('.popup-consultation', 3000);
  // если открыто хоть одно модально окно, то остальные которые должны были появиться через 3 секунды не будут появляться
// ПОЯВЛЕНИЕ МОДАЛЬНОГО ОКНА ЧЕРЕЗ ОПРЕДЕЛЁННЫЙ ПРОМЕЖУТОК ВРЕМЕНИ



function openByScroll(selector){
    window.addEventListener('scroll', ()=>{
        if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight)){
                document.querySelector(selector).click();
            }
    })
}
// Когда листаем до конца страницы, то появляется модально окно



// Слайдер 
const sliders = (slides, dir, prev, next) =>{
    let slideIndex = 1;
    let paused = false;
    const items = document.querySelectorAll(slides);
  

        function showSlides(n){
            if(n > items.length){
                slideIndex = 1;
            }
            if(n < 1){
                slideIndex = items.length;
            }

            items.forEach(item =>{
                item.classList.add('animated');
                item.style.display = 'none';
            });

            items[slideIndex -1].style.display = 'block';
        }

        showSlides(slideIndex);

        function plusSlides(n){
            showSlides(slideIndex += n);
        }

        try{
            const prevBtn = document.querySelector(prev);
            const nextBtn = document.querySelector(next);

            prevBtn.addEventListener('click', ()=>{
                plusSlides(-1); 
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            });

            nextBtn.addEventListener('click', ()=>{
                plusSlides(1); 
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft'); 
            });
        }catch(e){}

        function activedAnimation(){
            if(dir === 'vertical'){
                paused = setInterval(function(){
                    plusSlides(1);
                    items[slideIndex - 1].classList.add('slideInDown'); 
                }, 3000);
            }else{
                paused = setInterval(function(){
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft'); 
                }, 3000)
            }
        }
        activedAnimation();

        items[0].parentNode.addEventListener('mouseenter', ()=> {
            clearInterval(paused)
        });
        items[0].parentNode.addEventListener('mouseleave', ()=> {
            activedAnimation()
        });
       
}
sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn')
sliders('.main-slider-item', 'vertical')





// Показать больше
const showMoreStyles = (trigger, styles) =>{
    const cards = document.querySelectorAll(styles);
    const btn = document.querySelector(trigger);

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp')
    });

    btn.addEventListener('click', ()=>{
        cards.forEach(card => {
        card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
        card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });

        btn.style.display = 'none';
    });
}
showMoreStyles('.button-styles', '.styles-2');



// Фильтрация элеменотов на странице
const filter = () =>{
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');


        const markFilter = (marktype) =>{
            markAll.forEach(mark =>{
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
            });
            no.style.display = 'none';
            no.classList.remove('animated', 'fadeIn');

            if(marktype){
                marktype.forEach(mark =>{
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'fadeIn');
                });
            }else{
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
            }
        }

        btnAll.addEventListener('click', ()=>{
            markFilter(markAll);
        });

        btnLovers.addEventListener('click', ()=>{
            markFilter(markLovers);
        });

        btnGirl.addEventListener('click', ()=>{
            markFilter(markGirl);
        });

        btnChef.addEventListener('click', ()=>{
            markFilter(markChef);
        });

        btnGuy.addEventListener('click', ()=>{
            markFilter(markGuy);
        });

        btnGrandmother.addEventListener('click', ()=>{
            markFilter();
        });

        btnGranddad.addEventListener('click', ()=>{
            markFilter();
        });

        menu.addEventListener('click', (e)=>{
            const target = e.target;
            if(target && target.tagName == 'LI'){
                items.forEach(btn =>{
                    btn.classList.remove('active');
                    target.classList.add('active');
                })
            }
        })    
}
filter();



// Калькулятор
const calc = (size, material, options, promocode, rezult) =>{
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionslBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        rezultBlock = document.querySelector (rezult);
        
        let sum = 0;

// Math.round округление до целого числа
//+ так как value строка мы + приводим её к числу
        const culcFunc = () =>{
            sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionslBlock.value));

            if(sizeBlock.value == '' || materialBlock.value == ''){
                rezultBlock.textContent = 'Выберите размер и материал';
            }else if(promocodeBlock.value == 'IWANTPOPART'){
                rezultBlock.textContent = Math.round(sum * 0.7);
            }else{
                rezultBlock.textContent = sum;
            }
        }

        sizeBlock.addEventListener('change', culcFunc);
        materialBlock.addEventListener('change', culcFunc);
        optionslBlock.addEventListener('change', culcFunc);
        promocodeBlock.addEventListener('input', culcFunc);
}



// Замена изображений
const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block){
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + ('-1.png');
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p=>{
            p.style.display = 'none';
        })
    }

    
    function hideImg (block){
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + ('.png');
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p=>{
            p.style.display = 'block';
        })
    }

    blocks.forEach(block =>{
        block.addEventListener('mouseover', () => {
            showImg (block);
        });
        block.addEventListener('mouseout', () => {
            hideImg (block);
        });
    });
}




// Аккардеон
    const accardion = (triggerSelector) => {
    const bnts = document.querySelectorAll(triggerSelector);
        bnts.forEach(btn => {
            btn.addEventListener('click', function(){
                this.classList.toggle('active-style');
                this.nextElementSibling.classList.toggle('active-content');
                if(this.classList.contains('active-style')){
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
                }else{
                    this.nextElementSibling.style.maxHeight = '0px';
                }
            });
        });


    // const accardion = (triggerSelector, itemsSelector) => {
    // blocks = document.querySelectorAll(itemsSelector);
        // blocks.forEach(block => {
        //     block.classList.add('animated', 'fadeInDown');
        // })

        // bnts.forEach(btn => {
        //     btn.addEventListener('click', function(){
        //         if(!this.classList.contains('active')){
        //             bnts.forEach(btn =>{
        //                 btn.classList.remove('active', 'active-style');
        //             });
        //             this.classList.add('active', 'active-style');
        //         }
        //     })
        // })
}

accardion('.accordion-heading');
// accardion('.accordion-heading','.accordion-block');
pictureSize('.sizes-block');
calc('#size', '#material', '#options', '.promocode', '.calc-price');
bundModal('.button-design', '.popup-design', '.popup-design .popup-close');
bundModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
bundModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
openByScroll('.fixed-gift');






});