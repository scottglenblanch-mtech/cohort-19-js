// Javascript Prototype functions
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.start = function (key) {};
//   this.go = function (speed) {};
// }

// let myCar = new Car("toyota", "tacoma", 2008);
// let myOtherCar = new Car("nissan", "GT-R", 2015);

// Function inheritance
// function Person(name) {
//   this.name = name;
//   this.canTalk = true;
// }

// Person.prototype.greet = function () {
//   if (this.canTalk) {
//     console.log("Hi, I am " + this.name);
//   }
// };

// function Employee(name, title) {
//   Person.call(this, name);
//   this.title = title;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Class syntax
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.start = function (key) {};
//     this.go = function (speed) {};
//   }

//   start() {
//     // start function here
//   }

//   go() {
//     // go function here
//   }
// }
// let myCar = new Car('toyota', 'tacoma', 2008);
// let myOtherCar = new Car('nissan', 'GT-R', 2015);

// Class syntax inheritance
// class Person {
//   constructor(name) {
//     this.name = name;
//     this.canTalk = true;
//   }
// };

// class Employee extends Person {
//   constructor(name, title) {
//     super(name)
//     this.title = title;
//   }
// };

// Prototype chain
// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);
