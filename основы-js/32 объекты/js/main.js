"use strict "

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black', 
        bg: 'red'
    }  
}
const {border,bg} = options.colors;//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
console.log(border);

//console.log(Object.keys(options).length);//СВОЙСВО Object.keys ОПРЕДЕЛЯЕТ ДЛИННУ ОБЪЕКТА

for (let key in options){// пребираем объект
    if(typeof(options[key]) === 'object'){//перебираем объект внутри другого объекта
       for (let i in options[key]){
        console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
       }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }  
   
}


