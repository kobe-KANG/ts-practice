// Boolean
let boolean: boolean
let falseBoolean: boolean = false;


// Number
let number: number
let integer: number = 6;
let float: number = 1.2345;


// String
let string: string
let firstName: string = 'Kobe';


// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kobe', 'Doe'];
let names2: Array<string> = ['John', 'Kobe', 'Doe'];

// 여러 타입을 가지는  배열 (Union 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

// 여러 타입을 단언 X -> any
let someArray: any[] = ['John', 1, 2, true, [], {}];

// 읽기 전용 배열 (readonly 키워드 & ReadonlyArray 유틸리티 타입)
let stringArray: readonly string[] = ['A', 'B', 'C'];
let numberArray: ReadonlyArray<number> = [1, 2];

// stringArray.push('D');
// numberArray[0] = 3;


// Tuple
let tuple1: [string, number]
tuple1 = ['a', 1];
// tuple1 = ['a', 1 , 2];
// tuple1 = [1 , 'a'];

let users: [number, string][]
users = [[1, 'a'], [2, 'b']];

let tuple2: [string, number]
tuple2 = ['a', 1];
tuple2.push(2);         // tuple 타입이어도 push 메소드를 이용해서 값을 넣으면 그냥 들어가버린다.
console.log(tuple2);    // ["a", 1, 2]
// tuple2.push(false);     // 지정되지 않은 타입의 경우 거른다.


// Any
let any: any = 'abc';
any = 1;
any = [];


// Unknown
// any와 같이 타입 상관 없이 지정해서 사용할 수 있지만, 다른 타입 변수에 할당할 수 없다.
let unknown: unknown = 123;
// let str: string = unknown;


// Object
let obj: object = {};
let arr: object = [];
//let nul: object = null;     // javascript에서 null은 typeof에서 object로 출력되지만, typescript의 strict:true에서는 오류로 출력됨
let date: object = new Date();

const obj1: { id: number, title: string, description: string } = {
    id: 1,
    title: 'title1',
    description: 'desc'
}


// Union
let union: (string | number)
union = 'hi';
union = 123;
//union = [];


// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
    return x * y;
}

let func2: () => void;
func2 = function() {
    console.log('hi');
}


// Null, Undefined
// let num9: number = undefined;               // strictNullChecks 옵션 false이면 에러 안뜸
// let str9: string = null;                    // strictNullChecks 옵션 false이면 에러 안뜸
// let object: {a: 10, b: false} = undefined;  // strictNullChecks 옵션 false이면 에러 안뜸
// let array: any[] = null;                    // strictNullChecks 옵션 false이면 에러 안뜸
// let undefined1: undefined = null;           // strictNullChecks 옵션 false이면 에러 안뜸
// let null1: null = undefined;                // strictNullChecks 옵션 false이면 에러 안뜸
// let void1: void = null;                     // strictNullChecks 옵션 false이면 에러 안뜸
let void2: void = undefined;                // 얘는 에러 없음


// Void
function greeting(): void {
    console.log('hi');
}


// Never
function throwError(): never {
    throw new Error('error');
}

function keepProcessing(): never {
    while(true) {
        console.log('hi');
    }
}