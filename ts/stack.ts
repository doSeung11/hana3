class Collection {
    constructor(protected arr: unknown[]) {
        this.arr = arr;
    }
 
    // push<T>(t: T): Collection { // Bad
    push<T>(t: T): this {
        this.arr.push(t);
        return this;
    }
 }
 
 class Stack extends Collection {
    push<T>(t: T): this {
        this.arr.push(t);
        return this;
    }
    pop():void{
        
    }
 }
 
 const c:Collection = new Stack([]);
 c.push('a')