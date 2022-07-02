/**
 * compiler.js：编译相关。Compiler为一个类, 并且有run方法去开启编译，还有构建module（buildModule）和输出文件（emitFiles）
 */
// greeting.js
export function greeting(name) {
    return "你好" + name;
}