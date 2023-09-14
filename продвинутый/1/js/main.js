window.addEventListener('DOMContentLoaded', () =>{

// МОДАЛКА
function bundModal(triggerSelector, modalSelector, closeSelector){
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const scroll = calcScroll();

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target){
                e.preventDefault();
            }
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        })
       
    });

    close.addEventListener('click', () =>{
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`
  
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
    function showModalByTime(selector, time){
        setTimeout(function(){
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

bundModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
bundModal('.phone_link', '.popup', '.popup .popup_close');
// ПОЯВЛЕНИЕ МОДАЛЬНОГО ОКНА ЧЕРЕЗ ОПРЕДЕЛЁННЫЙ ПРОМЕЖУТОК ВРЕМЕНИ
// showModalByTime('.popup_engineer', 3000)



// ТАБЫ ТАБЫ ТАБЫ ТАБЫ
    function tabs(headerSelector, tabSelector, contentSelector, activeClass){
        const header = document.querySelector(headerSelector);
        const tab = document.querySelectorAll(tabSelector);
        const content = document.querySelectorAll(contentSelector);


        function hideTabContent(){
            content.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            })
            tab.forEach(btn => {
                btn.classList.remove(activeClass);
            });
        }
        function showTabContent(i){
            content[i].classList.add('show');
            content[i].classList.remove('hide');
            tab[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent(0);

        header.addEventListener('click', (e) =>{
            const target = e.target;
            if(target.classList.contains(tabSelector.replace(/\./, "")) || //ЭТИМ РЕГУЛЯРНЫМ ВЫРАЖЕНИЕМ МЫ ПРОСТО УБИРАЕМ ТОЧКУ У КЛАССА КОТОРЫЙ ПОДСТАВЛЯЕТСЯ В contains
                target.parentNode.classList.contains(tabSelector.replace(/\./, ""))){
                tab.forEach((item, i)=>{
                    if(target === item || target.parentNode === item){
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');




// ФОРМЫ  ФОРМЫ  ФОРМЫ  ФОРМЫ
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка....',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что то пошло не так...'
    }

    const postData = async (url,data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method:'POST',
            body: data
        });
        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    }


    function forms(){
        form.forEach(item => {
            item.addEventListener('submit', (e)=> {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.appendChild(statusMessage);

                const formData = new FormData(item);

                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.success;
                    })
                    .catch(() => statusMessage.textContent = message.failure);
                    // .finally(() => {
                    //     clearInputs();
                    //     setTimeout(()=>{
                    //         statusMessage.remove();
                    //     }, 5000)
                    // });
            });
        });
    }

    forms();





    const images = () => {
        const imgPopup = document.createElement('div');
        const workSection = document.querySelector('.works');
        const bigImage = document.createElement('img');


        imgPopup.classList.add('popup');
        workSection.appendChild(imgPopup);

        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems = 'center';
        imgPopup.style.display = 'none';

        imgPopup.appendChild(bigImage);  //appendChild-добавляет узел в конец списка дочерних элементов указанного родительского узл

        workSection.addEventListener('click', (e)=>{
            e.preventDefault();
            const target = e.target;

            if(target && target.classList.contains('preview')){
                imgPopup.style.display = 'flex';
              
                const path = target.parentNode.getAttribute('href'); //parentNode - обращаемся к родителю елемента; getAttribute - возвращает значение указанного атрибута элемента получаем нужный атрибут
                bigImage.setAttribute('src', path) //setAttribute -Добавляет новый атрибут или изменяет значение существующего атрибута у выбранного элемента
            }

            if(target && target.matches('div.popup')){
                imgPopup.style.display = 'none';
            }
            // if(target && target.matches('div.popup::after && div.popup::before')){
            //     imgPopup.style.display = 'none';
            // }
        })
    }

images();
});