~~~ 
资源模块
打包
npx webpack
运行，open 自动打开浏览器
npx webpack-dev-server --open

发现在浏览器不能运行，展示图片
    这是因为我们需要把我们 把浏览器入口文件 index.html 修改为了 app.html， HtmlWebpackPlugin配置项的 filename 修改为index.html

    修改后重新 打包 运行即可
~~~ 
