/**
 * index.js：实例化Compiler类，并将配置参数（对应forstpack.config.js）传入
 */
 const Compiler = require("./compiler");
 const options = require("../custom.config");
 
 new Compiler(options).run();