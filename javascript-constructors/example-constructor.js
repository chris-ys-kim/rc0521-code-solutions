function ExampleConstructor() {

}

console.log('value of the prototype property of the ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof of the prototype property of the ExampleConstructor:', typeof ExampleConstructor.prototype);

var constructor = new ExampleConstructor();
console.log(constructor);

var check = constructor instanceof ExampleConstructor;
console.log(check);
