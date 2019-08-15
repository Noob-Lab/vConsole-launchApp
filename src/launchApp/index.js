import tpllaunch from './launch.html'
import QRCode from '../../node_modules/qrcode/build/qrcode.min.js'
 const isQBApp = /jfwallet/i.test(navigator.userAgent)
 const isWKApp = /jfwklc/i.test(navigator.userAgent)
 const isWeChat = /MicroMessenger/i.test(navigator.userAgent) // 是否是微信环境
 const isApp = isQBApp || isWKApp // 是否是app环境
class VConsoleLaunchAPPTab extends VConsole.VConsolePlugin {
  constructor(vConsole,options,...args) {
    super(...args);
    this.$ = vConsole.$
    this.$tabbox = this.$.render(tpllaunch, {});
    // 按钮
    this.typeNameMap = {
      'jfwklc': {
        btntext:'悟空中打开',
        prefix: 'jfwklc://pushWindow?url='
      },
      'jfwallet': {
        btntext:'钱包中打开',
        prefix: 'jfwallet://JFWebViewModelProtocol?startPageUrl='
      },
      'Refresh': {
        btntext:'Refresh',
        prefix:''
      }
    }
    if(isApp){
          // 按钮
    this.typeNameMap = {
      'Refresh': {
        btntext:'Refresh',
        prefix:''
      }
    }
    }
    if (vConsole.tool.isObject(options)) {
      this.typeNameMap = Object.assign(this.typeNameMap,options)
    }

  }
  /**
   * 渲染面板
   * @param {*} callback 
   */
  onRenderTab(callback) {
    callback(this.$tabbox);
  }

  /**
   * 面板头部按钮
   * @param {*} callback 
   */
  onAddTopBar(callback) {

  }

  /**
   * 面板底部按钮
   * @param {*} callback 
   */
  onAddTool(callback) {
    let that = this;
    let toolList = []
    let map = that.typeNameMap
    for (let item in map) {
      toolList.push({
        name: map[item].btntext,
        global: false,
        data: {type: item},
        onClick: function() {
                that.launchAPP(item)
        }
      })
    }
    callback(toolList);
  }
  onShow () {
    this.renderQrcode ()
  }
  /**
   * 渲染 二维码
   */
  renderQrcode () {
    const canvas = document.getElementById('qrcode')
    let canvasText = window.location.href
    QRCode.toCanvas(canvas, canvasText, function (error) {
      if (error) console.error(error)
      canvas.style.height = '60vw'
      canvas.style.width = '60vw'
      console.log('success!');
    })
  }
  /**
   * 唤起 app 并打开页面
   * @param {*} type 
   */
  launchAPP (type){
    if (!type){
        return false
    }
    if (type === 'Refresh') {
      window.location.href = window.location.href
      console.log('reoaded!😊')
      return false
    } else {
      if (!isWeChat) {
      let schema = this.typeNameMap[type].prefix+ window.location.href
      console.log('schema',schema)
      window.location = schema
      } else {
        alert('请在浏览器中打开本页面')
      }
    }
  }
}
export default VConsoleLaunchAPPTab