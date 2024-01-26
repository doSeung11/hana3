//const user = {id:1, name:'P',age:33};
//const {name:n, age=30} = {name:'Lee'};

//nodemon destruct.js


function f(a,b, ...c){
    console.log("🚀 ~ f ~ a:", [...arguments]);
    console.log("🚀 ~ f ~ c:", c);
    for(const x of c){
        console.log('ccc>>', x);
    }
}


f(1,2,3,4);


const {age2 = 30} = {name: 'Park', age2: 20};  //d
console.log(age2);
const fn = ({age}) => age;  
user = {id: 1, name: 'P', age: 33}
const {age2:age3 = fn(user)} = {age22: 20};  // age2 = 30, age3 = 33
console.log("🚀 ~ age3:", age3)
console.log("🚀 ~ age2:", age2)
