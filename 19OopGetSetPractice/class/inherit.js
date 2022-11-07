
'use strict';
console.log('main.js');

class Person {
    constructor(birthDate, name) {
        this.name = name;
        this.born = birthDate;
    }

    age() {
        const currentYear = new Date().getFullYear()
        const currAge = currentYear - this.born;
        console.log('currAge ===', currAge);
        return currAge;
    }
}

const p1 = new Person(1956, 'James');
p1.age;