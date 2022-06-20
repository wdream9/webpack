

const fs = require('fs')
const p = new Promise((resolve, inject) => {
    fs.readFile('./static/file.md',(error, data) => {
        if(error){
            inject(error)
        }else{
            resolve(data)
        }


    })
})

p.then((value)=>{
    console.log(value.toString())
},(err)=>{

})
