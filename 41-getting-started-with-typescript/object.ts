// 41-6 Object types, type and arrow function type
const city: string = 'Dhaka';
const fruits: string[] = ['mango', 'banana', 'apple'];

type Person = {
    name: string;
    age: number;
    salary: number;
};

const student: Person = {
    name: 'mehe',
    age: 21,
    salary: 4500,
};

const employee: { name: string; age: number; salary: number } = {
    name: 'Sultana',
    age: 24,
    salary: 1000000,
};
