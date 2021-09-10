"use strict";
// 41-5 Apply types for array and get error for type mismatch
const salary = 7500;
const friendSalaries = [2300, 1300, 5600, 7500, 3300];
const friends = ['Sakib', 'Rakib', 'Nakib'];
// friendSalaries[4] = '9800';
// friendSalaries.push('7300');
friends.push('Mehe');
friends[2] = 'Sultana';
// friends.push(44500);
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
