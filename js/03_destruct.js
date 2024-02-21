//01/26
//PAGE 38~45

function f(a,b, ...c){
    console.log("🚀 ~ f ~ a:", [...arguments]);
    console.log("🚀 ~ f ~ c:", c);
    for(const x of c){
        console.log('ccc>>', x);
    }
}
f(1,2,3,4);
console.log('f: ',f.length);  //func.len indicates how many arguments the function expects.

console.log("===============================================================")
//PAGE 38
let x, y;
x=y=2;
const z = (y++, x+y);
console.log(x,y,z," ", x&=y, x^=y);

console.log("===============================================================")
//PAGE 40
const user = {id:1, name:'Hong', addr:{city:'Seoul', town:'Gu'}};
// {} 싸는 건 -> 객체에서 value만 가져오겠다는 거여.
const id3 = user.id;  //그 값을 그대로 넣어주거나
const {id:userId, name:userName} = user;  //왼쪽에서 파라미터 잡아주고 user 넣거나
const {id, addr} = user;  //1, Kong
const {city} = user.addr;  //Seoul
const {city1} = user.addr;  //undefined
const city2 = user.addr;  //{city:'Seoul', town:'Gu'}
const {addr:{city:addCity}} = user; //addCity = Seoul

const user2 = {...user, name:'홍길동', new:'추가'};
//user2: { id: 1, name: '홍길동', addr: { city: 'Seoul', town: 'Gu' }, new: '추가' }

const {id_test, name_test='Hong'} = {id_test:1, name_test:undefined};  
//name_test='Hong', undefined 씹히고 default가 들어가.

console.log("===============================================================")

const arr = [1,2,3,4,5];
const {1:x1, 3:x2} = arr;  //x1=2, x2=4 (index)
const [a1,a2,...a3] = arr; //a1=1, a2=2, a3=[3,4,5]

console.log("===============================================================")

const mainField = user.id>5? 'name' : 'addr';  //이거 그냥 문자열값 넣는다고 
const{[mainField]: target} = user;  //{['addr']:target}=user;, {addr:target}=user;
//target = 'Kim'; //uncaught typeError: Assignment to constant variable.
console.log("🚀 ~ mainField:", mainField) //mainField = 'addr'
console.log("🚀 ~ target:", target) //{ city: 'Seoul', town: 'Gu' } 




console.log("===============================================================")
//PAGE41
const test = {id:1, addr:{city:'S',road:'X'}};
const x41 = test;
const y41 = {...test};  // y = {id:1,addr:{city:'S',road:'X'}};
const z41 = {...test, addr:{...test.addr}} //deep copy
test.addr.city = 'B'
console.log(test.addr.city, x41.addr.city, y41.addr.city, z41.addr.city);  //B B B S
//x, y는 shallow copy이고, z만 deep copy
//shallow는 같은 메모리 주소를 참조해서 같이 값이 바뀌는 것
//deep은 새로운 메모리를 할당 받아서 값이 같이 바뀌지 않는 독립된 것

console.log("===============================================================")
//PAGE 45
const {name: n, age=30} = {name:'Lee'};  //-> 객체 -> 일대일매칭 
const {age2 = 30} = {name:'Park', age2:20};  //-> 객체 -> 일대일매칭 -> age2 = 20 (default:30)

const fn = ({age:ageNew}) => ageNew;  //function fn(age){return age;}
const user45 = {id:1, name:'P', age:33};
const {age2:age3=fn(user45)} = {age22:20};  
//{age:ageNew} = user
//age3=33, age2랑 age22는 안 맞아.
console.log("🚀 ~ age3:", age3)

const u3 = {id:3, name:'Kim', addr:{id:1, city:'Seoul'}};
let {id:iddd, addr:{id:aid}} = u3; //iddd=3, aid=1

const arr45 = [1,2,[3,4],[5,6],{ax:7, ay:8},{ax:9}];
const [,x45,[,y45],z45] = arr45;  //x45=2, y45=4, z45=[5,6]
const {1:p, 4:q} = arr45;  //p=2, q={ax:7, ay:8} (index)
const [, , , ,{ay:a1_45},{ax:a2_45}] = arr45;  //a1_45=8, a2_45=9;

const [u11,u22,u33] = Object.entries(user45);  
console.log("🚀 ~ [u11,u22,u33]:", u11,u22,u33)
//Object.entries(user45) = [ [ 'id', 1 ], [ 'name', 'P' ], [ 'age', 33 ] ]