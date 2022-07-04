// var str = 'You can you up'
// str.name = 'LW'
// str.toString = function(){}

// console.log(str.name)
// console.log(str.toString)
// console.dir(str)

// var a= `
//   产品：'这个需求什么时候做完？'
//   程序猿：'下班前做完'
//   第二天...
//   产品：'你昨天说下班需求做完，到现在你也没做完啊！',
//   程序猿：'我还没下班了。'
// `
// console.log(a.length)
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.sayName = function () {
//         console.log(this.name, `..`)
//     }
// }

// let person1 = new Person('lw', 30)
// person1.sayName()


// var o1 = {};
// var o2 = new Object();
// var o3 = new f1();

// function f1() {};
// var f2 = function () {};
// var f3 = new Function('str', 'console.log(str)');

// console.dir(Object)
// console.log(typeof Object);
// console.log(typeof Function);

// console.log(typeof f1);
// console.log(typeof f2);
// console.log(typeof f3,'====');

// console.log(typeof o1);
// console.log(typeof o2);
// console.log(typeof o3);

// var obj = {}
// console.log(obj instanceof Object) // 检测Object.prototype是否存在于参数obj的原型链上。
// console.log(Function instanceof Object)
// Function instanceof Function

// Object instanceof Function
// Object instanceof Object

// Function.prototype
// Object.prototype

function Person() {}

var person1 = new Person()

console.log(person1 instanceof Person)
console.log(person1 instanceof Object)
console.dir(person1)
console.log(person1.constructor == Person)