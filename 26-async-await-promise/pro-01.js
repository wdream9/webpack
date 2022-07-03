/**
 * promise 专题训练
 */

// const promise = new Promise((resolve, reject) => {
//     reject("error");
//     resolve("success2");
// });
// promise
//     .then(res => {
//         console.log("then1: ", res);
//     }).then(res => {
//         console.log("then2: ", res);
//     },err=>{
//         console.log(err)
//     }).then(res => {
//         console.log("then3: ", res);
//     }).catch(err => {
//         console.log("catch: ", err);
//     })

// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)

// Promise.resolve('1')
//     .then(res => {
//         console.log(res)
//     })
//     .finally(() => {
//         console.log('finally')
//     })
// Promise.resolve('2')
//     .finally(() => {
//         console.log('finally2')
//         return '我是finally2返回的值'
//     })
//     .then(res => {
//         console.log('finally2后面的then函数', res)
//     })


// Promise.resolve('1')
//     .finally(() => {
//         console.log('finally1')
//         throw new Error('我是finally中抛出的异常')
//     })
//     .then(res => {
//         console.log('finally后面的then函数', res)
//     })
//     .catch(err => {
//         console.log('捕获错误', err)
//     })

// function promise1() {
//     let p = new Promise((resolve) => {
//         console.log('promise1');
//         resolve('1')
//     })
//     return p;
// }
// function promise2() {
//     return new Promise((resolve, reject) => {
//         reject('error')
//     })
// }
// promise1()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .then(() => console.log('finally1'))

// promise2()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .then(() => console.log('finally2'))

// function runAsync(x) {
//     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//     return p
// }
// function runReject(x) {
//     const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
//     return p
// }
// Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
// }

// async function async2() {
//     console.log("async2");
// }

// console.log("script start");

// setTimeout(function () {
//     console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
// }).then(function () {
//     console.log("promise2");
// });
// console.log('script end')

// async function async1() {
//     await async2();
//     console.log('async1');
//     return 'async1 success'
// }
// async function async2() {
//     return new Promise((resolve, reject) => {
//         console.log('async2')
//         reject('error')
//     })
// }
// async1().then(res => console.log(res))


// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// const arr = [1, 2, 3]
// arr.reduce((p, x) => {
//     return p.then(() => {
//         return new Promise(r => {
//             setTimeout(() => r(console.log(x)), 1000)
//         })
//     })
// }, Promise.resolve())

// const arr1 = [1, 2, 3]
// arr1.reduce((p, x) => p.then(() => new Promise(r => setTimeout(() => r(console.log(x)), 1000))), Promise.resolve())

// const array = [1,2,3,4]
// array.reduce((p,c)=>{
//     return p.then(()=>{
//         return new Promise((resolve)=>{
//             setTimeout(() => {
//                 resolve(console.log(c))
//             }, 1000);
//         })
//     })
// },Promise.resolve())

// const arr = [1, 2, 3];
// const result = arr.reduce((p, x) => 
//     p.then(
//         new Promise(r => 
//             setTimeout(() => r(console.log(x)), 1000)))
//     , Promise.resolve());

// const p = Promise.resolve(1).then(console.log('我不关心结果'))
// console.log(p)
// p.then((res) => console.log(res))

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
// })

// var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// var p = Promise.race(resolvedPromisesArray);
// // immediately logging the value of p
// console.log(p);

// // using setTimeout we can execute code after the stack is empty
// setTimeout(function () {
//     console.log('the stack is now empty');
//     console.log(p);
// });


let Promise1 = new Promise(function (resolve, reject) { })
let Promise2 = new Promise(function (resolve, reject) { })
let Promise3 = new Promise(function (resolve, reject) { })

let p = Promise.all([Promise1, Promise2, Promise3])