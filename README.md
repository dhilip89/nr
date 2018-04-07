# nr  

<div style="display: flex; justify-content: center">
  <image src="./images/logo.png"/>
</div>

### NodeJS canvas render engine.

* npm install  
  
  
  
* 1. node-canvas按照教程安装之后需要link. 因为c++的编译需要link.1  
* 2. 用webpack对node-canvas代码进行打包的时候需要配合node-loader，因为调用的是c++编译的.node文件而不是js文件,需要处理一下.并且需要将/node_modules/canvas/lib/bindings.js文件改为module.exports = require('../build/Release/canvas.node');这样才能被node-loader识别.  
[https://github.com/Automattic/node-canvas/issues/867](https://github.com/Automattic/node-canvas/issues/867)  
[https://github.com/webpack-contrib/node-loader](https://github.com/webpack-contrib/node-loader)  