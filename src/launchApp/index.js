import tpllaunch from './launch.html'
import QRCode from '../../node_modules/qrcode/build/qrcode.min.js'

class VConsoleLaunchAPPTab extends VConsole.VConsolePlugin {
  constructor(vConsole,options,...args) {
    super(...args);
    this.$ = vConsole.$
    this.$tabbox = this.$.render(tpllaunch, {});
    this.currentType = ''; // cookies, localstorage, ...
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
    if (vConsole.tool.isObject(options)) {
      this.typeNameMap = Object.assign(this.typeNameMap,options)
    }
    // /**
    //  * app 前缀
    //  */
    // this.prefixMap = {
    //   'jfwklc': 'jfwklc://pushWindow?url=',
    //   'jfwallet': 'jfwallet://JFWebViewModelProtocol?startPageUrl=',
    // } 
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
      let schema = this.typeNameMap[type].prefix+ window.location.href
      console.log('schema',schema)
      window.location = schema
    }
  }
}
export default VConsoleLaunchAPPTab