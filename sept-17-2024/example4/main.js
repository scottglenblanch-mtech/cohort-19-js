// Type coercion may happen with the operators, ie + == < <= > >= !

// concatentation

// 2 + 2 can equal 22

console.log (2 + '2')
console.log ('2' + 2)
console.log('2' + '2')

console.log(typeof '2', typeof 2)

// type coercion happens with double equals
console.log(2 == '2')

// does not do type coercion but still compares
console.log(2 === '2')

// 
console.log(2 > '2')
console.log(2 >= '2')

