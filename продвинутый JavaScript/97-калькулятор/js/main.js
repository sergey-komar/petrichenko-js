window.addEventListener('DOMContentLoaded', () => {

const result = document.querySelector('.calculating__result span');

let sex = 'female', weight, height, age, ratio = 1.725;

function calcTotal() {
    if(!sex || !weight || !height || !age || !ratio){
        result.textContent = 'No';
        return;
    }

    if(sex == 'female'){
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    }else{
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}

calcTotal();

function getStaticInformation(parentSelector, activeClass){
    const elements = document.querySelectorAll(`${parentSelector} div`);

    elements.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target.getAttribute('data-ratio')){
                ratio = +e.target.getAttribute('data-ratio')
            }else{
                sex = e.target.getAttribute('id')
            }

            elements.forEach(item => {
                item.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcTotal();
        })
    })
}

getStaticInformation('#gender', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');


 function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {
        switch(input.getAttribute('id')){
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break
            case 'age':
                age = +input.value;
                break;
        }
        calcTotal() ;
    })
 }
 getDynamicInformation('#height');
 getDynamicInformation('#weight');
 getDynamicInformation('#age');
















// const result = document.querySelector('.calculating__result span');
// let sex = 'female', height, weight, age, ratio = 1.375;

// function calcTotal() {
//     if(!sex || !height || !weight || !age || !ratio){
//         result.textContent = 'Введите значение';
//         return;
//     }
//     if(sex == 'female'){
//         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
//     }else{
//         result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
//     }
// }
// calcTotal();


// function getStaticInformation(parentSelector, activeClass){
//     const elements = document.querySelectorAll(`${parentSelector} div`);//находим все div

//     elements.forEach(item => {
//         item.addEventListener('click', (e) => {
//             if(e.target.getAttribute('data-ratio')){
//                 ratio = +e.target.getAttribute('data-ratio')
//         }else{
//             sex = e.target.getAttribute('id')
//         }
    
//         elements.forEach(item => {
//             item.classList.remove(activeClass)
//         });
    
//         e.target.classList.add(activeClass);
    
//         calcTotal();
//         });
//     })
   
// }


// getStaticInformation('#gender', 'calculating__choose-item_active');
// getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');


// function getDynamicInformation(selector) {
//     const input = document.querySelector(selector);

//     input.addEventListener('input', () => {
//         if(input.value.match(/\D/g)){
//             input.style.border = '1px solid red';
//         }else{
//             input.style.border = 'none';
//         }
    

//         switch(input.getAttribute('id')){
//             case 'height':
//                 height = +input.value;
//                 break;
//             case 'weight':
//                 weight = +input.value;
//                 break;
//             case 'age':
//                 age = +input.value;
//                 break;
//         }
//         calcTotal();
//     });   
// }
// getDynamicInformation('#height');
// getDynamicInformation('#weight');
// getDynamicInformation('#age');

 });