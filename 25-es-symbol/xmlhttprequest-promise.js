const xhr = new XMLHttpRequest()
xhr.open('GET','https://api.uixsj.cn/hitokoto/get?type=social')
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status === 200){
            console.log(xhr.response)
        }
    }
}