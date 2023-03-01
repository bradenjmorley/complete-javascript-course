'use strict';

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.__proto__.__proto__);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const braden = new PersonCl('Braden Morley', 2001);

console.log(braden);
braden.calcAge();

const account = {
  owner: 'Braden',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

console.log(braden.fullName);

PersonCl.hey();
*/

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const braden = Object.create(PersonProto);
braden.init('Braden', 2001);
console.log(braden);
braden.calcAge();

function multiply(...x) {
  let temp = x.reduce((accumulator, current) => accumulator * current, 1);
  function mutiplyAgain(...y) {
    temp *= y.reduce((accumulator, current) => accumulator * current, 1);
  }
  return temp;
}

console.log(multiply(1, 2)(3, 4));
