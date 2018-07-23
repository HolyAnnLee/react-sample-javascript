# react-sample-javascript
React 16.0 boilerplate with react-router-dom, redux &amp; webpack 4. (for javascript)
[TOC]
## 项目初始化
### 统一规范代码格式
1. 配置 `.editorconfig` 使得IDE的方式统一 (见代码)
2. 配置 `.eslintrc.js` 使得代码规范统一 (见代码)
### 预期功能
1. 管理资源： 能加载css、sccc、less、以及静态文件
2. 管理输出：将打包后的静态文件输出至static目录下，以各自的文件类型管理
3. dev：使用source map，方便调试时代码定位
4. dev：配置devServer，并配置热替换，热加载，自动刷新，自动打开浏览器，并预留proxyTable
5. dev：设置默认打开8080，被占用则寻找下一个空接口
6. production：代码分离，打包css文件，css代码压缩，js代码压缩，输出到模板html，配置gzip
7. analysis:：使用BundleAnalyzerPlugin 分析打包后的性能
### 目录结构
```bash
:.
│  .babelrc      		#babel的规则以及插件
│  .editorconfig		#IDE/编辑器相关的配置
│  .eslintignore		#Eslint忽视的目录
│  .eslintrc.js			#Eslint的规则和插件
│  .gitignore			#Git忽视的目录
│  .postcssrc.js		#postcss的插件
│  package-lock.json
│  package.json			#项目相关的包
│  README.md
│  yarn.lock
│
├─build					#webpack相关的配置
│      utils.js			#webpack配置中的通用方法
│      webpack.base.conf.js	#webpack的基础配置
│      webpack.dev.conf.js	#webpack的开发环境配置
│      webpack.prod.conf.js	#webpack的生产环境配置
│
└─src					#主目录，业务代码
    │  app.css
    │  App.js
    │  favicon.ico
    │  index.ejs
    │  index.js
    │
    └─assets			#静态目录，存放静态资源
        │  config.json
        │
        └─img
                logo.svg
```
### 安装依赖
- eslint-loader
- eslint
- eslint-config-airbnb
- eslint-plugin-import
- eslint-friendly-formatter
- eslint-plugin-flowtype
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- babel-polyfill
- webpack
- jest
- friendly-errors-webpack-plugin  `编译提示的webpack插件`
- html-webpack-plugin `新建html入口文件的webpack插件`
- copy-webpack-plugin `webpack配置合并模块`
- webpack-merge `webpack配置合并模块`
- webpack-dev-server
- webpack-bundle-analyzer
- webpack-cli
- portfinder 寻找接口的插件
- extract-text-webpack-plugin
- node-notifier
- optimize-css-assets-webpack-plugin
- autoprefixer
- mini-css-extract-plugin
- autoprefixer
- css-loader
- less-loader
- postcss-loader
- postcss-import
- postcss-loader
- style-loader
- babel-core
- babel-eslint
- babel-loader
- babel-plugin-transform-runtime
- babel-plugin-import
- babel-preset-env
- babel-preset-react
- babel-polyfill
- url-loader
- cross-env
- file-loader
```bash
yarn add eslint eslint-loader eslint-config-airbnb eslint-plugin-import eslint-friendly-formatter eslint-plugin-flowtype eslint-plugin-jsx-a11y eslint-plugin-react babel-polyfill webpack jest webpack-merge copy-webpack-plugin html-webpack-plugin friendly-errors-webpack-plugin webpack-dev-server webpack-bundle-analyzer webpack-cli portfinder extract-text-webpack-plugin node-notifier optimize-css-assets-webpack-plugin autoprefixer mini-css-extract-plugin autoprefixer css-loader less-loader postcss-loader postcss-import postcss-loader style-loader babel-core babel-eslint babel-loader babel-plugin-transform-runtime babel-plugin-import babel-preset-env babel-preset-react babel-polyfill url-loader cross-env file-loader -D

```
### 编写webpack
1. 为了控制开发环境和生产环境，我们可以新建build文件夹。分别书写开发环境和生产环境的webpack配置文件，这样也更可以方便我们分别控制生产环境和开发环境。
2. 为了提高代码的复用率，也为了区别 `基础配置` 和 `个性配置` ，可以分别新建`webpack.base`、`webpack.dev` 和 `webpack.prod`三个配置文件。首先配置最基础的entry(入口)和output(出口)。
```javascript
module.exports = {
  context: path.resolve(__dirname, '../'),	//绝对路径。__dirname为当前目录。
    //基础目录用于从配置中解析入口起点。因为webpack配置在build下，所以传入 '../'
  entry: {
    app: ('./src/index.js') //项目的入口
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/',
    libraryTarget: 'umd',
  },
}
```

#### entry

entry可以分别为字符串、数组和对象。

倘若应用只有一个单一的入口，entry的值可以使用任意类型，不会影响输出结果。

```javascript
// entry为字符串
{
    entry: './src/index.js',
    output: {
    	path: '/dist',
        filename: 'bundle.js'
    }
}
// 结果会生成 '/dist/bundle.js'
```

```javascript
// entry为数组，可以添加多个彼此不互相依赖的文件。结合output.library选项，如果传入数组，则只导出最后一项。
{
    //如果你在html文件里引入了'bable-polyfill',可以通过数组将它加到bundle.js的最后。
    entry: ['./src/index.js', 'babel-polyfill'] ,
    output:{
        path: '/dist',
        filename: 'bundle.js'
    }
}
```

```javascript
// entry为对象，可以将页面配置为多页面的而不是SPA，有多个html文件。通过对象告诉webpack为每个入口，成一个bundle文件。
// 多页面的配置，可能还要借助于HtmlWebpackPlugin，来指定每个html需要引入的js
{
    entry: {
        index: './src/index.js'
        main: './src/index.js'
        login: './src/login.js'
    }
    output:{
        path: '/dist/pages'
        filename: '[name]-[hash:5].js' //文件名取自'entry'对象的键名，为了防止推送代码后浏览器读缓存，故再生成的文件之后加上hash码。
    }
}
// 会分别生成index.js,main.js,login.js三个文件
```

关于 [webpack构建多页面](https://segmentfault.com/a/1190000004511992) 可以参考这篇文章。不过现在webpack4.x也是一次断崖式升级，刚兴趣的同学可以自行搜索。

```javascript
// entry也可以传入混合类型
{
    entry:{
        vendor: ['jquery','amap','babel-polyfill'] //也可以借助CommonsChunkPlugin提取vendor的chunk。
        index: './src/index.js'
    }
    output: {
        path: '/dist'
        filename: '[name]-[hash:5].js'
    }
}
```

> CommonsChunkPlugin在webpack4.0之后移除了，可以使用splitChunksPlugin代替。
>
> 可以参阅如下链接：[optimization.splitChunks](https://www.webpackjs.com/plugins/split-chunks-plugin/)

