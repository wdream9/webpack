/**
 * 限制异步操作的并发个数并尽可能快的完成全部
 * 有8个图片资源的url，已经存储在数组urls中。
 * urls类似于['https://image1.png', 'https://image2.png', ....]
 * 而且已经有一个函数function loadImg，输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。
 * 
 * 但有一个要求，任何时刻同时下载的链接数量不可以超过3个。
 * 
 * 请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。
 */
 var urls = [
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            console.log("一张图片加载完成");
            resolve(img);
        };
        img.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };
        img.src = url;
    });
}

function limitLoad(urls, handler, limit) {
    const data = []; // 存储所有的加载结果
    let p = Promise.resolve();
    const handleUrls = (urls) => { // 这个函数是为了生成3个url为一组的二维数组
        const doubleDim = [];
        const len = Math.ceil(urls.length / limit); // Math.ceil(8 / 3) = 3
        console.log(len) // 3, 表示二维数组的长度为3
        for (let i = 0; i < len; i++) {
            doubleDim.push(urls.slice(i * limit, (i + 1) * limit))
        }
        return doubleDim;
    }
    const ajaxImage = (urlCollect) => { // 将一组字符串url 转换为一个加载图片的数组
        console.log(urlCollect)
        return urlCollect.map(url => handler(url))
    }
    const doubleDim = handleUrls(urls); // 得到3个url为一组的二维数组
    doubleDim.forEach(urlCollect => {
        p = p.then(() => Promise.all(ajaxImage(urlCollect))).then(res => {
            data.push(...res); // 将每次的结果展开，并存储到data中 (res为：[img, img, img])
            return data;
        })
    })
    return p;
}
limitLoad(urls, loadImg, 3).then(res => {
    console.log(res); // 最终得到的是长度为8的img数组: [img, img, img, ...]
    res.forEach(img => {
        document.body.appendChild(img);
    })
});