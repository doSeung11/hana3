//01/30
//PAGE 100, 101, 102

//배열의 키(key)는 인덱스(in), 값(value)은 원소값(of)이다!!!!!!!!!!!!!!!!!!!!

function ex1(){
    const arr = [100, 200, 300, 400, 500, 600, 700];
    // 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
    for (let k in arr){console.log(k);}  // 0 1 2 3 4 5 6 (줄바꿈)
    // 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
    for (let k of arr){console.log(k);}  // 100 200 300 400 500 600 700 (줄바꿈)
    for (let k in arr){console.log(arr[k]);}

    console.log("=================================")

    const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false }
    // 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
    for (let k in obj){console.log(k);}
    // 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
    for (let k in obj){console.log(obj[k]);}
    // 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
    for (let k of Object.keys(obj)){console.log(k);}

    console.log("=================================")
    // 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오. //Object.defineProperty
    Object.defineProperty(obj,'level',{enumerable:false});
    console.log(Object.entries(obj));
    //[[ 'name', 'lim' ],[ 'addr', 'Yongsan' ],[ 'role', 9 ],[ 'receive', false ]]
    
    console.log("=================================")
    // 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
    Object.defineProperty(obj,'role',{writable:false});
    obj.role='xxxx';
    console.log(obj.role);  //obj[role]로 접근 안 돼...
    console.log("=================================")
}
ex1();

function ex2(){
    const orgArr = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]];
    function makeObjectfromArray(arr){
        const retObj = {};
        for(const [k, ...v] of arr){
            retObj[k] = v;
        }
        return retObj;  //{ 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
    }
    const newObj = makeObjectfromArray(orgArr);
    console.log("🚀 ~ ex2_1 ~ newObj:", newObj)
    
    const orgObj = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] };
    function makeArrayfromObject(obj){
        const retArr = [];
        for(const k in obj){
            retArr.push([k, ...obj[k]]);
            //[k, obj[k]] => [['A', [10, 20]], ['B', [30, 40]], ['C', [50, 60, 70]]]
        }
        return retArr;  //[['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]
    }
    const newArr = makeArrayfromObject(orgObj);
    console.log("🚀 ~ ex2_1 ~ newArr:", newArr)
    console.log("=================================")
}
ex2();

function ex3(){
    const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
    function copyObject(obj){
        const retObj ={};
        for(const k in obj){
            retObj[k] = obj[k];
        }
        return retObj;
    }
    const newKim = copyObject(kim); //함수 짜기 전에 이거 먼저 쓰기
    console.log("🚀 ~ ex3 ~ newKim:", newKim)
    console.log(kim.addr !== newKim.addr); 
}
ex3();