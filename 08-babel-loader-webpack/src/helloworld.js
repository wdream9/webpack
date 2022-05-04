function getString(){
    return new Promise((resolve,inject)=>{
        setTimeout(() => {
            resolve("hello world<========>babel loader")
        }, 2000);
    })
}

export default async function(){
    let str = await getString()
    console.log(str)
}