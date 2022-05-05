~~~
npm install webpack webpack-cli --save-dev
npm install webpack-dev-server --save-dev
npm install html-webpack-plugin mini-css-extract-plugin css-minimizer-webpack-plugin babel-loader @babel/preset-env --save-dev
npm install @babel/plugin-transform-runtime --save-dev

npx webpack


npx webpack --env production 
npm webpack --env production --env global=local


把webpack.config.js中的内容拷贝到 dev prod两个配置文件中
读取开发环境配置文件
npx webpack -c ./config/webpack.config.dev.js

读取开发环境配置文件
npx webpack -c ./config/webpack.config.prod.js

启动本地开发服务
npx webpack server -c ./config/webpack.config.dev.js
~~~