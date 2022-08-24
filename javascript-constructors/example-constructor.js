function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();

console.log('value of newConstructor: ', newConstructor);

console.log('Is newConstructor an instanceof ExampleConstructor?: ', newConstructor instanceof ExampleConstructor);
