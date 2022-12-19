//Возводим в степень
function pow(x, n){
    let result = 1 ;
    for(let i = 0; i < n; i++){
        result = x * result;
    }

    return result;
}


// //Рекурсия это когда функция запускает сама себя внутри себя
// //Возводим в степень
function pow(x, n){
   if(n === 1){
    return x;
   }else{
    return x * pow(x, n-1);// pow -это возведение в степень
   }
}
//Рекурсия это когда функция запускает сама себя внутри себя

pow(2,1);//2
pow(2,2);//4
pow(2,3);//8
pow(2,4);//16


let students = {
    js: [{
        name: 'Jon',
        progress: 100
    },{
        name: 'Ivan',
        progress: 60
    }],


    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],
    
        pro: [{
            name: 'San',
            progress: 10
        }]

    }
};

function getTotalProgreesByIteration(data){
    let total = 0;
    let students = 0;

    for(let course of Object.values(data)){
        if(Array.isArray(course)){
            students = students + course.length;

            for(let i = 0; i < course.length; i++){
                total = total + course[i].progress;
            }
        }else{
            for(let subcourse of Object.values(course)){
                students = students + subcourse.length;

            for(let i =0; i < subcourse.length; i++){
                total = total + subcourse[i].progress;
            }
        }
        }
    }

    return total / students;
}

// console.log(getTotalProgreesByIteration(students));


function getTotalProgreesByRecursion(data){
    if(Array.isArray(data)){
       let total = 0;

        for(let i = 0; i < data.length; i++){
            total = total + data[i].progress;
        }
        return [total, data.length];
    }else{
        let total = [0, 0];
        for(let subData of Object.values(data)){
            const subDataArr = getTotalProgreesByRecursion(subData);
            total[0] = total[0] + subDataArr[0];
            total[1] = total[1] + subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgreesByRecursion(students);

console.log(result[0] / result[1]);