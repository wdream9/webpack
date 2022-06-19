// js 面向对象，实现自定义遍历
// Symbol.iterator 重写对象的iterator接口，遍历对象的指定属性
// for.... of... 遍历 obj 的stu属性
const obj = {
    name: '终极一班',
    stu: [
        "aa",
        "bb",
        "cc",
    ],
    [Symbol.iterator]() {
        let _this = this;
        let index = 0;
        // 返回指针对象，指向当前数据解构的起始位置
        return {
            // 对象有next方法，方法返回 支持每次下移的指向的 value值，done是否到最后位置
            next() {
                // 遍历obj对象
                if(index < _this.stu.length){
                    let result = {value: _this.stu[index],done:false};
                    index++;
                    // 返回结果
                    return result;
                }else{
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

// for ..... of ....
for(let item of obj){
    console.log(item)
}