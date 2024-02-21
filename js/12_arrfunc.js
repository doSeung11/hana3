//01/30
//PAGE 108
function f(a) {
    return a**2;
}
const af = a => a**2;
console.log("🚀 ~ f(3):", f(3))
console.log("🚀 ~ af(3):", af(3))

function f2(a,b){
    const c = a**b;
    return Math.sqrt(c);
}
const af2 = (a,b) => {  //func table에 등록 안 돼.
    const c = a**b;
    return Math.sqrt(c);
}
console.log(f2(3,4));
console.log(af2(3,4));


function fff(a){
    return function(b){
        for(let i=1;i<10;i+=1){
            //속에서 밖을 참조하고 있으니까 closure!
            console.log(`${a} x ${i} = ${a*i}`);
        }
    }
}
const gugu2dan = fff(2);
gugu2dan();

//currying 
const afff = a => b => {
    for(let i=1;i<10;i+=1){
        console.log(`arrow: ${a} x ${i} = ${a*i}`);
    }
}
const arrgugu2dan = afff(2);
arrgugu2dan();


//currying
function test(a){
    return function(b){
        return a*b;
    }
}
const gu2 = test(2); //2단에 걸림
console.log(gu2(5)); // 2*5
const gu3 = test(3); //3단에 걸림
console.log(gu3(5)); // 3*5

console.log("=============================")

globalThis.y = 10; //var로 하면 여기선 모듈의 변수로 잡힌다. 
function bfn(x){
    console.log(x, this.y);  //this -> globalThis, y: 전역
}
bfn(9); //9, 10
bfn.bind({y:999})(9); //9, 999

const a_bfn = x => console.log(x, this.y); //여기서 this는 전역의 부모를 말한다.
a_bfn(9); //9 undefined

console.log("=============================")
//PAGE 108
globalThis.name = 'GlobalName';  //통칭적인 전역 
this.name = 'ModuleName';  //obj의 부모이자 여기서의 전역 별칭

const obj = {
    name: 'ObjName',
    bark1() {
      console.log('1=', this.name);
      const self = this;
      setTimeout( function() {  //내가 속한 것(어딘지 몰라~)
        console.log('11=', self.name);
      }, 1000);
      console.log('xxxx');
    },
    bark2() {
      console.log('2=', this.name);
      setTimeout(() => {  //내가 속한 것(bark)의 부모(obj)
        console.log('22=', this.name);
      }, 1000);
    },
    //함수형으로 선언된 프로퍼티, 함수 객체가 등록되고, 어디서 부르느냐에 따라 달라진다.
    f1: function(){  //내가 속한 것(obj)
        console.log('f1> ', this.name, this);
    },
    //화살표는 함수 객체로 등록이 안 되고, 그래서 이건 그냥 프로퍼티. 어디서 부르든지 똑같아.
    f2: () => {  //내가 속한 것(obj)의 부모(전역, 여기서 this.name='module')
        console.log('f2> ', this.name, this);
    },
};
  
//obj.bark1();
//obj.bark2();
//console.log('type> ', typeof obj.f1, typeof obj.f2);

const xx1 = obj.f1;
xx1(); //이건 그냥 일반적인 전역에서 f1을 실행한 거야. 그래서 this가 global임.
const xx2 = obj.f2;
xx2(); //이건 어디서 실행하든 obj의 f2를 실행하는 건데, obj의 부모가 module이야.
//그니까 xx1은 function table에 등록된 f1을 쳐다보는데, 
//xx2는 f2가 함수가 아니라서 obj.f2를 쳐다본다고.

console.log("===========================");

//PAGE 113
// function f(id, addr){
//     console.log(this, id, addr, this.name);
// }

// const obj113 = {name:'Hong'};
// const bf = f.bind(obj);  //this = {name:'Hong'}

// f(1, 'Sungsoo')  //this = global
// f.apply(obj, [2,'Seoul']);
// f.call(obj, 2, 'Busan');
