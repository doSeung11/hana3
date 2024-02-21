//ex1) Stack

//page 154

class Collection{
    #arr;
    constructor(...args){
        this.#arr = Array.isArray(args[0]?args[0]:args);    
    }
    get _arr(){
        return this.#arr;
    }
    push(value){
        this.#arr.push(value);
        return this;
    }
    pop(){
        return this.#arr.pop();
    }
    size(){

    }
    toString(){
        return '${this.constructor.name}(${size})'
    }
    toArray(){
        return [...this.#arr]; //this is an answer.
    }
    peak(){
        return this.#arr.at(
            this.isStack()? -1:0
        )
    }
    isStack은 constructor로 풀면 된다.
    clear(){}
}


class Stack extends Collection{
    constructor(...args){
        super(...args);
    }
    peak(){
        return this._arr.at(0);
    }
    

}
//역슬래시는 줄바꿈
class Queue{
    #arr;
    constructor(...args){
        this.#arr = Array.isArray(args[0]?args[0]:args);
    }
    enqueue(value){
        this.#arr.push(value);
        return this;
    }
    dequeue(){
        return this.#arr.shift();
    }
}

const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
//ex2) Queue
const queue = new Queue();
queue.enqueue(3); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기




// Array.at(-1) a[length-1]

//강사님 코드
// class Collection {
//     #arr;
//     constructor(...args) {
//       this.#arr = Array.isArray(args[0]) ? args[0] : args;
//     }
  
//     get _arr() {
//       return this.#arr;
//     }
  
//     push(value) {
//       this.#arr.push(value);
//       return this;
//     }
  
//     size() {
//       return this.#arr?.length;
//     }
  
//     toString() {
//       return `${this.constructor.name}(${this.size()}) ${JSON.stringify(
//         this.#arr
//       )}`;
//     }
  
//     print() {
//       console.log(this.toString());
//     }
//   }
  
//   class Stack extends Collection {
//     pop() {
//       return this._arr.pop();
//     }
//   }
  
//   class Queue extends Collection {
//     enqueue(value) {
//       this.push(value);
//       return this;
//     }
  
//     dequeue() {
//       return this._arr.shift();
//     }
//   }
  
//   const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
//   console.log('🚀  stack:', stack.toString());
//   stack.push(3).push(5); // 추가하기
//   console.log('last pop=', stack.pop()); // 마지막에 추가된 하나 꺼내기
//   stack.print();
  
//   const queue = new Queue();
//   queue.enqueue(3).enqueue(5); // 추가하기
//   console.log('last queue=', queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
//   queue.print();
  