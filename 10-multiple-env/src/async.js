function getcomponent(){
    return import('loadsh').then(({default: _})=>{
        const element = document.createElement('div')
        element.innerHTML = _.join(["hello","world","loadsh"],"==")
        return element
    })
}

getcomponent().then((element)=>{
    document.body.appendChild(element)
})