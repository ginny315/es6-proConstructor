# ginnypro
配置好webpack的es6小项目目录，适合组件化开发。

```
|---client
|------dist 打包文件目录
|------asset 资源文件目录
|---------images 资源图片 
|------components 组件目录
|---------welcome demo组件
|------------welcome.html 例子
|------------welcome.js 例子
|------------welcome.json 例子
|------------welcome.scss 例子
|------public 公共目录
|---------css  ---样式资源目录
|---------js   ---js资源目录
|---------scss   ---scss样式资源目录
|------main.js   ---主要js文件
|------.babelrc ---格式化检查文件
|------package.json ---配置文件
|------README.md
|------webpack.config.js --webpack配置文件

```

全局安装
```shell
npm install ginnypro -g
```
项目初始化
```shell
ginnypro install ／ ginnypro i
```
