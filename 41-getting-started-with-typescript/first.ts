//41-3 Basic typescript type number string boolean

/* 
let money = 5000;
let honey = '';
let kony = false;
*/

let money: number = 88;
let honey: string = 'O my sweet Heart honey';
let funny: boolean = true;
const age: number = 21;

// 41-4 Set function parameter type and function return type

function add(first: number, second: number): number {
    const result = first + second;
    return result;
}
const output: number = add(45, 87);
console.log(honey);

// multi purpose
/* function add(first: number | string, second: number | string): number | string {
    const result: string | number = first + second;
    return result;
}
const output: number = add(45, 87);
const fullName = add('Adam', 'Sand');
*/
