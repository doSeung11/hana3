type TSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

const SIZE : {id:TSize, price:number}[] = [
    {id: 'XS', price: 8000},
    {id: 'S', price: 10000},
    {id: 'M', price: 12000},
    {id: 'L', price: 14000},
    {id: 'XL', price: 15000},
]  //여기서 그냥 as const 쓰면 80점,,, sizeOption에 MM 들어가도 에러 안 나거든.

const sizeOption:{[i in TSize]: number} = {'XS':1, 'S':5, 'M':2, 'L':2, 'XL':4};

const totalPrice = SIZE.reduce((currPrice, size) =>
currPrice + (sizeOption[size.id]*size.price), 0
);
console.log("🚀 ~ totalPrice:", totalPrice);

//TSize로 SizeType, SizeOptionType도 만들 수 있다~


//===========================
//p394
interface User {
    id:number;
    name:string;
}
interface Dept {
    id:number;
    dname:string;
    captain:string;
}
interface Ud {
    [idx:string]: number|string;
    id:number;  //이거 필수라서 안 쓰면 감점임.
    addr: string;
}
const ud2: Ud = {id:1, name:'HH', addr:'Seoul'};
const ud3: Ud = {id:1, dname:'HH', captain:'HH', addr:'Seoul'};
console.log("🚀 ~ ud2:", ud2)
console.log("🚀 ~ ud3:", ud3)

// interface Ud {
//     id:number;
//     name?:string;
//     dname?:string;
//     captain?:string;
//     addr: string;
// }

// type Ud2 = (User|Dept) & {addr:string};

// interface Ud extends Partial<User>, Partial<Dept>{
//     //Partial은 optional(?)로 내려온다.
//     id:number;  //이거 필수라서 안 쓰면 감점임.
//     addr: string;
// }