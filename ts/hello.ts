//ts-node hello.ts : 파일 실행시키기
//User에서 f12 누르면 그 타입으로 커서 옮겨가
console.log("hello, typescript");
const s: string = 'abc';
let i = 1;
const bt: 'A'|'B'|'AB'|'O' = 'A';  //리터럴을 유니언 타입으로 많이 만든다.
//===================================================

//요즘의 추세는 interface보다는 type alias야.
type UserType = {  //alias라서 각 변수에 그대로 박히는디
    id: number;
    name: string;
} & {city?: string}; //& 합집합, | '또는'
//===================================================
interface CityIF  {
    city?: string //optional => string | undefined => 2가지 타입이 올 수 있다는 거
}
interface CityIF { //위에 CityIF 있는데도 추가할 수 있어서 거지같은 거;
    test?: string 
}
interface UserIF extends CityIF{  //얘랑 클래스는 function declartive에 들어가서 참조형이 된다. 타입이 아니야.
    id: number;
    name: string;
    getName?(): string; //return type이 string
}
//===================================================

class User implements UserIF{  //implements UserType도 가능이야. 타입이 인터페이스화된다.
    public id: number;
    name: string;
    city?: string; //optional
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    // getName(): string {
    //     return this.name;
    // }
}
//===================================================

const hong: User = {
    id: 1, name: 'Hong',
    // getName: function (): string {
    //     throw new Error("Function not implemented.");
    // }
};
const xxx = {id:2, name:'Kim', addr:'Seoul'}  //이건 xxx에 담아서 freshness가 꺼졌는데,
const kim: User = xxx;  // {id:2, name:'Kim', addr:'Seoul'} 이거 바로 넣으면 에러나. 왜냐면 freshness 상태야.

//===================================================
function add(a: number, b: number){ return a+b;}
add(1,3);  //타입 명시를 해준다. 
//JS에서는 런타임에서 죽을 때 많은데, ts는 타입 체크를 해서 오류 덜 나. ex) console.bulb()

//===================================================

function f(p:number|string){
    if(typeof p==='number')  
        return p.toFixed();
    return p.toUpperCase();  //typeof p==='string'
}
console.log(f(3.4));

//===================================================

//P 339
type TUser = {
    id: number;
    name: string;
};
type TUser2 = {
    id: number;
    name: string;
    addr?: string;
}
//TUser < TUser2

//const hong: TUser = {id:1, name:'Hong', addr:'Pusan'}; //addr: freshness error
const lee: TUser2 = {id:1, name:'Lee', addr:'Seoul'};

let tempUser: TUser = lee;
let partner: TUser = {...lee, id:2, name:'Kim'};
//let partner2: TUser = {...hong, id:3, addr:'Daejeon'}; //addr: freshness error
let friend: TUser = {...lee};
const Txxx = {id:9, addr:'Sokcho'};
//let friend2: TUser = {...Txxx, id:8};  //name이 없어서 나는 오류야! addr오류 아님!


type X = {
    id:number;
    name:string;
}
type Y = {
    id:number;
    addr:string;
}
type Z = {  //x+y
    [i: string]: string | number;
    id: number;
}
const compos:Z = {id:1, name:'kim',addr:'seoul'};
//type Z: X|Y 로 하면, 바로 윗줄 라인 에러 안 나는데 제대로된 건 아냐. 객체가 안 정해지잖아.

//===================================================

type ANY = number;
function addx(a:ANY, b:number|undefined, c=1): number{
    return a+(b??0)+c;
}
//type F = 

//===================================================
//class랑 interface 보통 같이 쓰고
//인터페이스냐 타입이냐의 차이는?
//인터페이스: 인터페이스를 implement한 클래스를 new한 인스턴스다
//타입: XUser 타입의 변수다.
type XUser = {
    age:number;
    init(this:XUser):(x:number)=>{};  //넘버를 받아서 객체를 리턴
    //메소드가 있어서 인터페이스 쓰는 게 의미론적으로 더 맞다.
} 
let u1:XUser={
    age:20,
    init(this:XUser){
        return (x:number)=>this.age+x;  //함수를 리턴하는 거야.
    },
}

let getAge = u1.init();
let age = getAge(5);
console.log("🚀 ~ age:", age);



type AF = (n:number) => {} //return Object랑 같은 거야.
const af:AF = (n:number) => n**2;



//===================================================
let numbers: (number|string)[];
//let numbers: Array<nubmer>;

numbers = [1,2,3,4,5];
numbers.push('6');


//===================================================
//p374
const dogInfo = ['Jama',3] as const; //tuple+readonly

const aaa = 'a' //literal type
let aa = 'a' //string type, but 'let aa = 'a' as const ' is literal type

//p375
let eArr = [1,2,3] as const; //고정값을 먼저 잡고 할당하는 거고,
let eArr2 = [1,2,3]
//let fArr = eArr2 as const; //이미 가변값인데 고정할 수 없다.
//굳이 쓰고 싶다면
let fArr = [...eArr2] as const;


//p376
type A1 = [string, number,string];
type B1 = [boolean, ...A1];
const a1:A1 = ['str',1,'B'];
const b1: B1 = [true, ...a1];


//array => tuple => union
//ex_ ['A','B','O','AB'];
const bts = ['A','B','O','AB'];
type BT<T extends any[]> = T[number];
const bloodType: BT<typeof bts> = 'AB';


//
//p381
interface  Page {
    readonly text: string;
}
function read(page: Page) {
    console.log(page.text);

    //page.text = 'Hello';  //error. 직접 접근 변경 불가능
}

const pageIsh = {
    text: 'Hello, world!',
};
pageIsh.text = 'Hello'; //OK
read(pageIsh)
//단지 프로퍼티일 뿐이야

//이게 타입 비교가 아니고, 구조적 타입핑이라서 구조만 맞으면 되는 거야!!!!
//more example
type ID = {id:number};
function fff(x:ID){
    return x.id;
}
fff({id:1});  