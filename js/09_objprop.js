//01/29
//PAGE 97~99

const user = {
    '': 1,        
    ' ': 1,       // 'id': 1, '0y': 2 모두 OK!
    '123': 1,       // user[123], user['123'] OK, but user.123 is SyntaxError!!
    '12345': 2,    // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
    true: 1,      // OK  user[true]  user.true
    id: 2,          
    [`name`]: 'Hong',  // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
    [Symbol()]: 'Hong',   // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
    [`${new Date()}`]: 365,    // OK! 'Sun Jul …': 365
    'my-friends': ['Han', 'Kim'],
    getInfo: () => `${this.id}-${this.name}`,       // OK! But, this is not user!
    getInfo() { return `${this.id}-${this.name}`; }, // OK! getInfo의 최종 <f.o>
} 

console.log(Object.keys(user), Object.keys(user).length);  //keys(왼쪽값) 출력, 10 -> symbol이랑 getInfo 제외
console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length);

user.addr = 'Seoul';  // user = {...user, addr: 'Seoul'}
console.log('addr' in user, user.hasOwnProperty('addr'));  // true, true
console.log('Ref.has> ', Reflect.has(user, 'addr')); //true
console.log('obj.getOwnpropSym> ', Object.getOwnPropertySymbols(user));  // [Symbol()]

delete user.addr; //Reflect.deleteProperty(user, 'addr');
console.log('addr' in user); //false

user[`${user.id}'s name`] = `Mr. ${user.name}`;
//???prop 생성시 snapshot! id 변해도 고정!
console.log('user entries = ', Object.entries(user));
//???symbol은 제외


console.log(Object.keys(user), Object.keys(user).length);
console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length);

user.addr = 'Seoul';


// const keys = Object.keys??????????????? > 강사님 깃헙 확인
// console.log('syb>>> ',user[syb]);
// CompressionStream.log('user entries= ', Object.entries(user));

function myEntries(obj){
    const rets = []; //[[k,v],[k,v],...]
    for(let k in obj){  //in:key, of:value
        console.log(k);
    }
    for(let j of Reflect.ownKeys(obj)){  //symbol까지 포함한 array를 반환
        console.log(j);
        rets.push([j, obj[j]])
    }
    return rets;
}

console.log('myEntries: ',myEntries(user))

Object.getOwnPropertyDescriptor(user, 'id')
Object.getOwnPropertyDescriptors(user);
Object.defineProperty(user, 'age', {value:39, writable: false});
//enumerable, writable, configurable
//keys는 무조건 나오고, entries에 나올지 말지가 enumerable

const emp = Object.assign({x:1000}, user); //{x}에다가 user 객체를 복사하는 거야. 같은 키가 있으면 user가 뒤에 있어서 이기는 거고.
user[123] =2;
console.log('emp: ', emp);