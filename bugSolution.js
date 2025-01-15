function foo(a, b) {
  // Explicit type checking and conversion
  a = typeof a === 'number' ? a : parseFloat(a) || 0; 
  b = typeof b === 'number' ? b : parseFloat(b) || 0;
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // 3
console.log(foo(null, 5)); // 5
console.log(foo(undefined, 5)); //5
console.log(foo("1", "2")); //3