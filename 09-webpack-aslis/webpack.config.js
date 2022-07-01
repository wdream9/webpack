const path = require('path')
module.exports = {
    mode:'development',
    resolve:{
        alias:{
            '@':path.join(__dirname,'./src/')
        }
    }
}