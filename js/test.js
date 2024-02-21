//currying fuction, a function that returns function also.
function discount(){ 
    const dcR = 0.1;
    return function(price){
        return price*dcR;
    };
}

function temp(price){
    const per = 0.9;
    return price*per;
}

//so this is an array, but the values are the object.
const items = [
    {item:'item1',price:30000}, 
    {item:'item2',price:20000},
]

const dc = discount();  //function(price){return price*dcR;};
for (const {item, price:orgPrice} of items){
    const newPrice = dc(orgPrice);
    console.log(`${item}: ${orgPrice}: ${newPrice}입니다.`)
}

console.log("==========================");

function currentCount(){
    let curCount = 0;
    return {
        connect(){curCount += 1;},
        disconnect(){curCount -=1;},
        getCount(){return curCount;},  //counter1.getCount()
        get count() {return curCount;},  //counter1.count
    }
}

const actions = ['입장','입장','퇴장','입장','퇴장'];

const counter1 = currentCount();
for(const a of actions){
    a==='입장'?counter1.connect():counter1.disconnect();
    console.log(`${a}, 현재 명수: ${counter1.count}명`);
}
console.log("==========================");

const counter2 = currentCount();
for(const a of actions){
    a==='입장'?counter2.connect():counter2.disconnect();
    console.log(`${a}, 현재 명수: ${counter2.count}명`);
}
console.log("==========================");

const str1 = 'ABZ09';
/[A-z\d]/.test(str1)

console.log("🚀 ~ /[A-z\d]/.test(str1):", /[A-z\d]/.test(str1))

str1.replace(/[A-z]/g,'#');  //g를 붙여야 전체가 다 해당

