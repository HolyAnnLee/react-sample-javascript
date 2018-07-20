# react-sample
React 16.0 boilerplate with react-router-dom, redux &amp; webpack 4.
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
	 friendly-errors-webpack-plugin  	*`编译提示的webpack插件！`*
	 html-webpack-plugin 	*`创建html入口文件的webpack插件`*
	 copy-webpack-plugin 	*`webpack配置合并模块`*
	 webpack-merge 	*`webpack配置合并模块`*
- webpack-dev-server
- webpack-bundle-analyzer
- webpack-cli
- portfinder*寻找接口的插件*
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
1. 为了控制开发环境和生产环境，我们可以新建build文件夹。分别书写开发环境和生产环境的webpack
