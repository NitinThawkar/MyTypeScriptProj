// let a1: number = 1;
// a1 = 10;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// function add1(a: number, b: number): number {
//     return a + b; // type checking
// }
// const y = add1(1, a1);
// console.log(y);
// a1 = y;
// console.log(a1);
// Basic types
var num = 12345645646;
var num1 = 12344354355464566456636666456345655436n;
console.log('num: ', num);
console.log('num1: ', num1);
var character = 'Code with Technyks';
var isAvailable = true;
var val = null;
// let user;
// console.log(user); // undefined
// object 
var obj = {
    name: 'Abc',
    age: 10
};
obj = __assign(__assign({}, obj), { age: 44, name: 'abc1' });
console.log(obj);
// any type
var numVal;
numVal = 1;
numVal = 'a';
function testAnyType(val) {
    console.log(val);
}
// Arrays
var numArray = [1, 2, 3, 4];
var charArray = ['a', 'b'];
// charArray.forEach(val => val.includes('a'));
// numArray.forEach(val => val.toFixed(2));
// tuples
var arr = [1, 'Alice'];
var coordinates3D = [10, 20, 30]; // (x, y, z) axis
// localhost:4200?name=Technyks&phone=1234567890
var userData = ['Technyks', 1234567890];
var response = [200, "Success"]; // http-response
//response.push(0); // drawback of tuple in ts
// console.log('response: ', response);
// enum
// PascalCase
var Color;
(function (Color) {
    // APP_NAME = 'my_app_name',
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.Blue);
var color = Color.Green;
console.log(color);
var size = 3 /* Size.Large */;
console.log('size: ', size);
// unknown type
var notSure = 'a';
if (typeof (notSure) === 'number') {
    notSure.toFixed(2);
}
else if (typeof (notSure) === 'string') {
    notSure.length;
}
// never type
function infiniteLoop() {
    while (true) {
        // do something endlessly
        console.log(1);
    }
}
function throwError(message) {
    throw new Error(message);
}
// throwError('Something weng wrong');
// void type
function logMessage(message) {
    console.log(message);
    // return undefined;
}
// type inference
var username = 'Nikhil'; // typescript infers the type as string
// type assertions
var someValue = 'Hello world';
var strLength = someValue.length;
console.log(strLength);
// union types
var id; // id can either be string or a number
id = 'abc';
id = 101;
// id = true;
function printId(id) {
    console.log("id: ".concat(id)); // 'id: ' + id
}
printId('abc');
printId(101);
// type narrowing
function printIdFn(id) {
    if (typeof id === 'string') {
        console.log('id is a string: ', id.toUpperCase());
    }
    else {
        console.log("id is a number: ".concat(id)); // 'id: ' + id
    }
}
// printIdFn('xyz');
printIdFn(1);
// function greet() {
//     console.log('Hi');
// }
var person = {
    name: 'abc',
    age: 10,
    greet: function () {
        console.log('Hi');
    },
    // greet
};
person.greet();
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
console.log('add 2 numbers: ', add(1, 2));
console.log('subtract 2 numbers: ', subtract(5, 4));
var userId = 'abc';
var person1 = {
    name: 'abc',
    age: 12
};
console.log(person1.name);
var userId1 = 'abc';
var orderId = 101;
var myCustomer = {
    name: 'X',
    // phone: 122314345,
    address: 'abc',
};
var myCar = {
    make: 'TATA',
    // model: 'TATA PUNCH',
    // isElectric: true
};
var add1 = function (x, y) { return x + y; };
console.log(add1(2, 2));
var userStatus = 'active';
var tree = {
    value: 'root',
    children: [
        {
            value: 'child1',
            // children: [{ value: 'grandChild', children: [] }]
        }
    ]
};
// intersection types
var config = {
    server: 'localhost',
    port: 8080,
    secure: true,
    timeout: 5000
};
