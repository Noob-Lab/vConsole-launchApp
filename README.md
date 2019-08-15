# [vconsole-launchapp](https://github.com/Noob-Lab/vConsole-launchApp)
[![](https://img.shields.io/badge/Powered%20by-vConsole%20LaunchApp-brightgreen.svg)](https://github.com/Noob-Lab/vConsole-launchApp)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Noob-Lab/vConsole-launchApp/blob/master/LICENSE)



[vConsole](https://github.com/Tencent/vConsole) 的 LaunchApp 插件，用于刷新页面，查看二维码，在指定app中唤起当前页面



## 使用

vConsole-launchApp 遵循 vConsole 插件接口规范开发，详细规范请点击 vConsole插件文档 查看。

使用npm安装:

```bash
npm install vconsole-launchapp -D
```


 webpack 或者相似的环境：

```js
import VConsole from 'vConsole'
import LaunchApp from 'vConsole-launchApp';
     // 初始化vConsole
    window.vConsole = new window.VConsole();  
    var launchApp = new window['vconsole-launchapp'](vConsole,{
      'jfwallet1': {
        btntext:'app中打开',
        prefix: 'jfwallet://JFWebViewModelProtocol?startPageUrl='
      }},'LaunchAPP', 'LaunchAPP')
    window.vConsole.addPlugin(launchApp)
```

## License

MIT
