interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

type X<T> = {
    [x in keyof T] : T[keyof T]
}
type XDept = X<IDept>; //bad

type Y<T> = {
    [x in keyof T] : T[x]
}
type YDept = Y<IDept>; //good

type Z<T,K extends keyof T> = {
    [x in K] : T[x]
}
type ZDept = Z<IDept, 'id'|'age'>; //bad

export { };


