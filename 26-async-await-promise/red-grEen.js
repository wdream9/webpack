function red() {
    console.log("red");
}
function green() {
    console.log("green");
}
function yellow() {
    console.log("yellow");
}

function light(timer,callback){
    return new Promise((resolve)=>{
        setTimeout(() => {
            callback()
            resolve()
        }, timer);
    })
}

function setup(){
    Promise.resolve().then(()=>{
        // 红灯3秒钟亮一次
        return light(3000,red)
    }).then(()=>{
        return light(2000, yellow)
    }).then(()=>{
        return light(1000,green)
    }).then(()=>{
        return setup()
    })
}
setup()