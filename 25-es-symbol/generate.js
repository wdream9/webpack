// 生成器函数
function one(){
    setTimeout(() => {
        console.log('one')
        iterator.next()
    }, 1000);
}
function two(){
    setTimeout(() => {
        console.log('two')
        iterator.next()
    }, 2000);
}
function three(){
    setTimeout(() => {
        console.log('three')
    }, 3000);
}
function * gen(){
    yield one();

    yield two();

    yield three();
}

let iterator = gen()
iterator.next()
