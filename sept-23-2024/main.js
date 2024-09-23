let num = 10;

function namedFunc(param1, param2) {
  num = num + 10;
  let newNum = 25;
  return param1 + param2;
}

const arrFunc = function (param1, param2) {
  return param1 + param2;
};

const add10 = (param1) => {
  let arrNum = [1, 2, 3, 4, 5];
  const a = 10;
  return param1 + a;
};

movies();

function movies() {
  return "Movies";
}

function colors() {
  console.log("Red");
  console.log("Blue");
  console.log("Purple");
}

const myColors = colors;

const demoObject = {
  arrFunc: () => {
    console.log(this);
  },
  namedFunc: function () {
    console.log(this);
  },
};

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  this.name = name;
  this.price = price;
  this.category = "food";
}

const newFood = new Food("cheese", 5);
const anonFunc = function () {
  console.log("Click here");
};

const addFunc = () => {
  const first = document.querySelector("#first").value;
  const second = document.querySelector("#second").value;
  const result = document.querySelector("#result");
  result.innerHTML = parseInt(first) + parseInt(second);
};

const addButton = document.querySelector("#add");
addButton.addEventListener("click", addFunc);

const str = ["Hello", "World"];

const iterator = str[Symbol.iterator]();

let character = iterator.next();

while (!character.done && character.value !== " ") {
  console.log(character.value);
  character = iterator.next();
}

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

const newObj = {
  ...obj,
  age: 31,
};

const arr = [1, 2, 3, 4, 5];

const newArr = [...arr, 6, 7, 8, 9, 10];

console.log(newArr);
console.log(newObj);

function makeIterator(array) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
    reset: function () {
      nextIndex = 0;
    },
  };
}
const it = makeIterator(["slide 1", "slide 2", "slide 3"]);

const slideshow = document.querySelector("#slideshow");

function nextSlide() {
  let slide = it.next();
  if (slide.done) {
    it.reset();
    slide = it.next();
  }
  slideshow.innerHTML = slide.value;
}

nextSlide();

const slideButton = document.querySelector("#next");
slideButton.addEventListener("click", nextSlide);

const cart = {
  items: [],
  addItem(item) {
    this.items = [...this.items, item];
  },
  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
  },
};

cart.items.length;

var addItem = (function () {
  var cartItems = 0;
  return function () {
    console.log(cartItems);
    return (cartItems += 1);
  };
})();

addItem();
addItem();
