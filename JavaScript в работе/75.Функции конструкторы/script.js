const num = new Number(); //Создаём новый тип данных, создаём как бы новое число

function User(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello  ${this.name}`);
    }
}

User.prototype.exit = function(){
    console.log(`Hello ${this.name} ушёл`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();
ivan.exit();

console.log(ivan);
console.log(alex);
//Функции конструкторы необходимы для создания новых прототипных объектов