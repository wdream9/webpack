const work = new Worker(new URL('./work.js', import.meta.url))
// 主线程 向 worker 线程 发起一个会话
work.postMessage({
    quesion: 'hi, worker线程，请告诉我今天的幸运数字是什么'
})

// 主线成接收 worker 线程的响应
work.onmessage = (message) => {
    console.log(message.data)
}