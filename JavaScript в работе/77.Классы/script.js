//Классы это красивая обёртка функций конструкторов

class Regtangle{
    constructor(height, width){
        this.height = height;
        this.widht = width;
    }

    calcArea(){
        return this.height * this.widht;
    }
}


class colorRegtangleWidthText extends Regtangle{ //класс наследуется colorRegtangleWidthText от класса Regtangle
    constructor(height, width, text, bgcolor){
        super(height, width); //Вызывает супер конструктор родителя это тоже самое, что бы мы написали от родителя this.height = height; this.widht = width; Проще говоря super вызывает тоже самое что и было у родителя
        this.text = text;
        this.bgcolor = bgcolor; 
    }

    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgcolor}`)
    }
}
const div = new colorRegtangleWidthText(5, 5, 'hello', 'red');
div.showMyProps();
console.log(div.calcArea());


const square = new Regtangle(10, 10);
console.log(square.calcArea());