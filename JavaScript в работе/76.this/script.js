//this если говорить по простому, то это то, что окружаем функцию и в каких условия она вызывается
//Функция может вызываться 4 способами


//1) Обычная функция this = window, если use strict то undefined
function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4,5);


//2)Контекст у методов объекта это будет сам объект
const obj = {
    a: 20,
    b: 15,
    sum: function(){
        console.log(this)
    }
}
obj.sum();


//3)this в конструкторах и классах это новый экземпляр объекта
function User(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello  ${this.name}`);
    }
}
let inan = new User('Ivan', 23);


//Ручная привязка this- call,apply,bind
function sayName(surname){
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
}
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num){
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));
//Ручная привязка this- call,apply,bind




const btn = document.querySelector('button');//В таком случаи контекст вызова будет сам елемент на котором произошло событие
btn.addEventListener('click', function(){
    console.log(this);
})

//У стрелочных функций нет своего контекста вызова , она всегда будет брать его у своего родителя
const ob = {
    num: 5,
    sayNumber: function(){
        const say = ()=>{
            console.log(this);
        }
        say();
    }
}
ob.sayNumber();
