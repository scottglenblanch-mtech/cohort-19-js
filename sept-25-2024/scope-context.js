// https://cdn-media-0.freecodecamp.org/2020/10/lexical.gif

// Lexical Environment vs Execution Context
// scope === variable access
// context === this
// window === global/root scope
// parent - child relationship (cookies)
// child can access parent, but parent can't access child
// siblings can't access each other

// name conflicts within scope
// poluting global scope

// let a = 'a';
// function outer() {
//   let a = 'b';
//   console.log('OUTER:', a);
//   function inner() {
//     let a = 'c';
//     console.log('INNER: ', c);
//   }
//   inner();
// }
// outer();
// console.log('GLOBAL: ', a);

// What is "this" in javascript?
// context of the object that is executing the current function
// Can the context change? call, apply, bind

// var obj = {
//   name: "obj",
//   sayHi: function () {
//     console.log("Hi");
//     console.log("OBJ THIS: ", this);
//   },
// };
// obj.sayHi();

// var sayHi = obj.sayHi;
// sayHi();

// const list = document.querySelector("ul");
// list.querySelectorAll("li").forEach((li) => {
//   li.addEventListener("click", function () {
//     const span = this.querySelector("span");
//     let val = parseInt(span.innerHTML || "");
//     val++;
//     span.innerHTML = val;
//   });
// });
