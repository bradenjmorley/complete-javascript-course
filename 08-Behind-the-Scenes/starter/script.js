'use strict';

function calcAge(birthYear) {
    const age = 2023 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}.`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, and you're a millenial, ${firstName}.`
            console.log(str);
        }
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year);
    },
    greet: () => {
        console.log(`Hey ${firstName}!`);
    }
}

jonas.calcAge();
jonas.greet();