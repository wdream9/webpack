// 接收主线程传过来的参数
self.onmessage = (message) => {
    // 给主线程做出响应
    self.postMessage({
        answer: 111
    })
}