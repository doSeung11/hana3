//p441_1번
const isStringNumber = (value: unknown) : value is [string, number] =>
Array.isArray(value) && typeof value[0] === 'string' && typeof value[1] === 'number';

const f1 = (value: number|string|boolean|[string,number]) => {
    if(isStringNumber(value)){
        console.log(value[0].toUpperCase(), value[1].toFixed);
    }
}

//p441_2번
interface Animal {}
interface Dog extends Animal {
    name: string;
}
interface Cat extends Animal {
    punch(): void;
}
class Tmp implements Dog {
    constructor(public name: string){
        this.name = name
    }
}
function isDog(a: Animal): a is Dog {
    //return a.name?
    //return a instanceof Tmp //이렇게하면 dog Implemensts 모든 클래스 다 적어야 해.
    return 'name' in a // && !('punch' in a);
}

//p442_3번
const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;  //key는 타입에서만 쓸 수 있다.

//p442_4번
const constCart = {
    X: 1, 
    Y: 2,
    Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];
//type은 객체 형식



//p?
type Address = { sigungu: string, zipcode: string };
interface Info<T,I=number> {  //추가되는 것은 뒤에 적는 게 좋아
    id: I,
    name: string;
    additional: T;
}
class MyInfo<T,I=number> implements Info<T,I> {
    id: I;
    name: string;
    additional: T;
    constructor(id: I, name: string, additional: T) {
        this.id = id,
        this.name = name;
        this.additional = additional;
    }
}
const me = new MyInfo<Address, string>('1', 'lim', { sigungu: 'Seoul', zipcode: '04222' });
console.log(`I live in ${me.additional.sigungu}`);



//p464
interface IUser {
    id:number;
    age:number;
    name:string;
}
interface IDept {
    id:number;
    age:string;
    dname:string;
    captain:string;
}
type Change<T, K extends keyof T, IT> = T & {[k in K]: IT }
//type Change<T, K extends keyof T, U> = {[k in keyof T]: k extends K? U: T[k];}
type DeptCaptain = Change<IDept, 'captain', IUser>;
//type Err = Change<IDept, 'somekey', IUser>; //error


//p465
type Item = {item:string; price:number};
type ItemPrice<T,U> = {
    [k in keyof T]: k extends 'item' ? keyof U : T[k];
  };

const stock = {X:1, Y:2, Z:30};
const itemPrices: ItemPrice<Item, typeof stock>[] = [
    { item: 'X', price: 1000 },
    { item: 'Y', price: 2000 },
    { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce((curr, itemPrice) => 
                  curr + stock[itemPrice.item] * itemPrice.price, 0);



// type test = {
//     id:number;
//     age:number;
// } & {age:string;}

// let a : test ={
//     id:1,
//     age:3
// }



type Animals = 'dog' | 'cat' | 'pig' | 9;

type AnimalCounts = {
    [key in Animals]: number;
};

// interface Animal {
//     name: string;
// }
// interface Dog extends Animal {}
// interface Rose {}
// type Q<T> = T extends Animal? string : number;
// type D = Q<Dog>;
// type R = Q<Rose>;

type AnimalCounts2<T extends string|number> = {
    [k in T extends string? T : `x${T}`]: number;
}

type Ac2 = AnimalCounts2<Animals>;


//p 480
interface IUser {
    id: number;
    age: number;
    name: string;
}

interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

// type Combine<T, U> = {
//     [k in keyof T] : T[k]
// } & {[k in keyof U] : U[k]}

type Combine<T, U> = {
    [k in keyof T | keyof U] : k extends keyof T ? (k extends keyof U ? T[k]|U[k] : T[k]) : k extends keyof U ? U[k] : never; 
};

type ICombined = Combine<IUser, IDept>;

let te : ICombined = {
    id: 1,
    age: 2,
    name: 'n',
    dname: 'n',
    captain: 'c'
}




//p483
type TI<T,U> = T extends U[]? U : T;
type TII<T> = T extends (infer U)[] ? U : T;//참일 때만 추론할 수 있는 것이여~

type TT1 = TI<string[], string>;
type TT2 = TI<string, string>;

type TTT1 = TII<string[]>;  //string으로 추론이 된다~
type TTT2 = TII<string>;  //false로 떨어져서 string이 되는 거야;


//p485
type OnlyStringProperties<T> = {
    [k in keyof T]: T[k] extends string ? k : never;
}// [keyof T];  //값을 주세요!

type YYY = OnlyStringProperties<AllEventData>;
type QQQ = YYY[keyof YYY];

interface AllEventData {
    participants: string[];
    location: string;
    name: string;
    year: number;
}

// 'location' | 'name'
type OnlyStringEventData = OnlyStringProperties<AllEventData>;



//p486
type Greeting = `Hello${string}`;
let matches: Greeting = 'Hello, TS!';
//let mismatches: Greeting 'Ts, Hello!';




//p490 - args.ts
// function add(a:number, b:string){
//     return
// } 

// type A = FirstArgs<typeof add>;
// type B = SecondArgs<typeof add>;
// type C = Args<typeof add>;

// type AX = Args<String.prototype.endWith>;
// type AX = Args<String.prototype.charAt>;

// type FirstArgs<F> = F extends ()
// type SecondArgs<F> = 
// type Args<F> = 



//p494
type User = {id:number;name:string;age:number};
//type UserProfile = Omit<User, 'age'> & {addr: string};
interface UserProfile extends Omit<User, 'age'> {
    addr: string;
}
let iUser: UserProfile = {id:1, name:'Hong',addr:'Seoul'};


//496
type R = Record<string, number>;

let users = [
    {name: 'Hong'},
    {age: 23},
    {id:1, addr:'Seoul'},
];
type Users = typeof users;

type FullUser1 = {
    [k in keyof Users[number]]: (Users[number][k])
};

type FullUser2 = Partial<Record<keyof Users[number], string|number>>;
const ret: FullUser2 = users.reduce((acc, user)=>({...acc, ...user}),{});

export { }; //모듈 바꾸면 다른 파일에서 쓴 변수명도 쓸 수 있어 