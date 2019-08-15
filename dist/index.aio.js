/*!
 * vconsole-launchapp 0.1.1 (https://github.com/yanhaijing/jslib-base)
 * API https://github.com/yanhaijing/jslib-base/blob/master/doc/api.md
 * Copyright 2017-2019 yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/jslib-base/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['vconsole-launchapp'] = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var tpllaunch = "<div style=\"text-align: center;padding-top:10vh;\"> <canvas id=\"qrcode\"></canvas> </div>";

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var qrcode_min = createCommonjsModule(function (module, exports) {
  !function(t){module.exports=t();}(function(){return function(){function t(e,r,n){function o(a,u){if(!r[a]){if(!e[a]){var s="function"==typeof commonjsRequire&&commonjsRequire;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND", f}var c=r[a]={exports:{}};e[a][0].call(c.exports,function(t){return o(e[a][1][t]||t)},c,c.exports,t,e,r,n);}return r[a].exports}for(var i="function"==typeof commonjsRequire&&commonjsRequire,a=0;a<n.length;a++)o(n[a]);return o}return t}()({1:[function(t,e,r){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then};},{}],2:[function(t,e,r){var n=t("./utils").getSymbolSize;r.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6), i.reverse()}, r.getPositions=function(t){for(var e=[],n=r.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||e.push([n[i],n[a]]);return e};},{"./utils":21}],3:[function(t,e,r){function n(t){this.mode=o.ALPHANUMERIC, this.data=t;}var o=t("./mode"),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];n.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6}, n.prototype.getLength=function(){return this.data.length}, n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)}, n.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*i.indexOf(this.data[e]);r+=i.indexOf(this.data[e+1]), t.put(r,11);}this.data.length%2&&t.put(i.indexOf(this.data[e]),6);}, e.exports=n;},{"./mode":14}],4:[function(t,e,r){function n(){this.buffer=[], this.length=0;}n.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1));},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0), t&&(this.buffer[e]|=128>>>this.length%8), this.length++;}}, e.exports=n;},{}],5:[function(t,e,r){function n(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t, this.data=new o(t*t), this.data.fill(0), this.reservedBit=new o(t*t), this.reservedBit.fill(0);}var o=t("../utils/buffer");n.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r, n&&(this.reservedBit[o]=!0);}, n.prototype.get=function(t,e){return this.data[t*this.size+e]}, n.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r;}, n.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]}, e.exports=n;},{"../utils/buffer":28}],6:[function(t,e,r){function n(t){this.mode=i.BYTE, this.data=new o(t);}var o=t("../utils/buffer"),i=t("./mode");n.getBitsLength=function(t){return 8*t}, n.prototype.getLength=function(){return this.data.length}, n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)}, n.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8);}, e.exports=n;},{"../utils/buffer":28,"./mode":14}],7:[function(t,e,r){var n=t("./error-correction-level"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];r.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}}, r.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[4*(t-1)+0];case n.M:return i[4*(t-1)+1];case n.Q:return i[4*(t-1)+2];case n.H:return i[4*(t-1)+3];default:return}};},{"./error-correction-level":8}],8:[function(t,e,r){function n(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.L={bit:1}, r.M={bit:0}, r.Q={bit:3}, r.H={bit:2}, r.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4}, r.from=function(t,e){if(r.isValid(t))return t;try{return n(t)}catch(t){return e}};},{}],9:[function(t,e,r){var n=t("./utils").getSymbolSize;r.getPositions=function(t){var e=n(t);return[[0,0],[e-7,0],[0,e-7]]};},{"./utils":21}],10:[function(t,e,r){var n=t("./utils"),o=n.getBCHDigit(1335);r.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,i=r<<10;n.getBCHDigit(i)-o>=0;)i^=1335<<n.getBCHDigit(i)-o;return 21522^(r<<10|i)};},{"./utils":21}],11:[function(t,e,r){var n,o,i=t("../utils/buffer");i.alloc?(n=i.alloc(512), o=i.alloc(256)):(n=new i(512), o=new i(256)), function(){for(var t=1,e=0;e<255;e++)n[e]=t, o[t]=e, 256&(t<<=1)&&(t^=285);for(e=255;e<512;e++)n[e]=n[e-255];}(), r.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]}, r.exp=function(t){return n[t]}, r.mul=function(t,e){return 0===t||0===e?0:n[o[t]+o[e]]};},{"../utils/buffer":28}],12:[function(t,e,r){function n(t){this.mode=o.KANJI, this.data=t;}var o=t("./mode"),i=t("./utils");n.getBitsLength=function(t){return 13*t}, n.prototype.getLength=function(){return this.data.length}, n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)}, n.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=i.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472;}r=192*(r>>>8&255)+(255&r), t.put(r,13);}}, e.exports=n;},{"./mode":14,"./utils":21}],13:[function(t,e,r){function n(t,e,n){switch(t){case r.Patterns.PATTERN000:return(e+n)%2==0;case r.Patterns.PATTERN001:return e%2==0;case r.Patterns.PATTERN010:return n%3==0;case r.Patterns.PATTERN011:return(e+n)%3==0;case r.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case r.Patterns.PATTERN101:return e*n%2+e*n%3==0;case r.Patterns.PATTERN110:return(e*n%2+e*n%3)%2==0;case r.Patterns.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var o={N1:3,N2:3,N3:40,N4:10};r.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7}, r.from=function(t){return r.isValid(t)?parseInt(t,10):void 0}, r.getPenaltyN1=function(t){for(var e=t.size,r=0,n=0,i=0,a=null,u=null,s=0;s<e;s++){n=i=0, a=u=null;for(var f=0;f<e;f++){var c=t.get(s,f);c===a?n++:(n>=5&&(r+=o.N1+(n-5)), a=c, n=1), c=t.get(f,s), c===u?i++:(i>=5&&(r+=o.N1+(i-5)), u=c, i=1);}n>=5&&(r+=o.N1+(n-5)), i>=5&&(r+=o.N1+(i-5));}return r}, r.getPenaltyN2=function(t){for(var e=t.size,r=0,n=0;n<e-1;n++)for(var i=0;i<e-1;i++){var a=t.get(n,i)+t.get(n,i+1)+t.get(n+1,i)+t.get(n+1,i+1);4!==a&&0!==a||r++;}return r*o.N2}, r.getPenaltyN3=function(t){for(var e=t.size,r=0,n=0,i=0,a=0;a<e;a++){n=i=0;for(var u=0;u<e;u++)n=n<<1&2047|t.get(a,u), u>=10&&(1488===n||93===n)&&r++, i=i<<1&2047|t.get(u,a), u>=10&&(1488===i||93===i)&&r++;}return r*o.N3}, r.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*o.N4}, r.applyMask=function(t,e){for(var r=e.size,o=0;o<r;o++)for(var i=0;i<r;i++)e.isReserved(i,o)||e.xor(i,o,n(t,i,o));}, r.getBestMask=function(t,e){for(var n=Object.keys(r.Patterns).length,o=0,i=1/0,a=0;a<n;a++){e(a), r.applyMask(a,t);var u=r.getPenaltyN1(t)+r.getPenaltyN2(t)+r.getPenaltyN3(t)+r.getPenaltyN4(t);r.applyMask(a,t), u<i&&(i=u, o=a);}return o};},{}],14:[function(t,e,r){function n(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+t)}}var o=t("./version-check"),i=t("./regex");r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]}, r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]}, r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]}, r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]}, r.MIXED={bit:-1}, r.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!o.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]}, r.getBestModeForData=function(t){return i.testNumeric(t)?r.NUMERIC:i.testAlphanumeric(t)?r.ALPHANUMERIC:i.testKanji(t)?r.KANJI:r.BYTE}, r.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")}, r.isValid=function(t){return t&&t.bit&&t.ccBits}, r.from=function(t,e){if(r.isValid(t))return t;try{return n(t)}catch(t){return e}};},{"./regex":19,"./version-check":22}],15:[function(t,e,r){function n(t){this.mode=o.NUMERIC, this.data=t.toString();}var o=t("./mode");n.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)}, n.prototype.getLength=function(){return this.data.length}, n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)}, n.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3), n=parseInt(r,10), t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e), n=parseInt(r,10), t.put(n,3*o+1));}, e.exports=n;},{"./mode":14}],16:[function(t,e,r){var n=t("../utils/buffer"),o=t("./galois-field");r.mul=function(t,e){var r=new n(t.length+e.length-1);r.fill(0);for(var i=0;i<t.length;i++)for(var a=0;a<e.length;a++)r[i+a]^=o.mul(t[i],e[a]);return r}, r.mod=function(t,e){for(var r=new n(t);r.length-e.length>=0;){for(var i=r[0],a=0;a<e.length;a++)r[a]^=o.mul(e[a],i);for(var u=0;u<r.length&&0===r[u];)u++;r=r.slice(u);}return r}, r.generateECPolynomial=function(t){for(var e=new n([1]),i=0;i<t;i++)e=r.mul(e,[1,o.exp(i)]);return e};},{"../utils/buffer":28,"./galois-field":11}],17:[function(t,e,r){function n(t,e){for(var r=t.size,n=w.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var s=-1;s<=7;s++)a+s<=-1||r<=a+s||(u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4?t.set(i+u,a+s,!0,!0):t.set(i+u,a+s,!1,!0));}function o(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0), t.set(6,r,n,!0);}}function i(t,e){for(var r=m.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0);}function a(t,e){for(var r,n,o,i=t.size,a=A.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3), n=u%3+i-8-3, o=1==(a>>u&1), t.set(r,n,o,!0), t.set(n,r,o,!0);}function u(t,e,r){var n,o,i=t.size,a=B.getEncodedBits(e,r);for(n=0;n<15;n++)o=1==(a>>n&1), n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0), n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0);}function s(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2)for(6===u&&u--;;){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var f=!1;a<e.length&&(f=1==(e[a]>>>i&1)), t.set(o,u-s,f), i--, -1===i&&(a++, i=7);}if((o+=n)<0||r<=o){o-=n, n=-n;break}}}function f(t,e,r){var n=new p;r.forEach(function(e){n.put(e.mode.bit,4), n.put(e.getLength(),P.getCharCountIndicator(e.mode,t)), e.write(n);});var o=d.getSymbolTotalCodewords(t),i=E.getTotalCodewordsCount(t,e),a=8*(o-i);for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var u=(a-n.getLengthInBits())/8,s=0;s<u;s++)n.put(s%2?17:236,8);return c(n,t,e)}function c(t,e,r){for(var n=d.getSymbolTotalCodewords(e),o=E.getTotalCodewordsCount(e,r),i=n-o,a=E.getBlocksCount(e,r),u=n%a,s=a-u,f=Math.floor(n/a),c=Math.floor(i/a),l=c+1,g=f-c,p=new b(g),v=0,m=new Array(a),w=new Array(a),y=0,A=new h(t.buffer),B=0;B<a;B++){var P=B<s?c:l;m[B]=A.slice(v,v+P), w[B]=p.encode(m[B]), v+=P, y=Math.max(y,P);}var R,T,C=new h(n),N=0;for(R=0;R<y;R++)for(T=0;T<a;T++)R<m[T].length&&(C[N++]=m[T][R]);for(R=0;R<g;R++)for(T=0;T<a;T++)C[N++]=w[T][R];return C}function l(t,e,r,c){var l;if(T(t))l=R.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var h=e;if(!h){var g=R.rawSplit(t);h=A.getBestVersionForData(g,r);}l=R.fromString(t,h||40);}var p=A.getBestVersionForData(l,r);if(!p)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<p)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+p+".\n")}else e=p;var m=f(e,r,l),w=d.getSymbolSize(e),E=new v(w);return n(E,e), o(E), i(E,e), u(E,r,0), e>=7&&a(E,e), s(E,m), isNaN(c)&&(c=y.getBestMask(E,u.bind(null,E,r))), y.applyMask(c,E), u(E,r,c), {modules:E,version:e,errorCorrectionLevel:r,maskPattern:c,segments:l}}var h=t("../utils/buffer"),d=t("./utils"),g=t("./error-correction-level"),p=t("./bit-buffer"),v=t("./bit-matrix"),m=t("./alignment-pattern"),w=t("./finder-pattern"),y=t("./mask-pattern"),E=t("./error-correction-code"),b=t("./reed-solomon-encoder"),A=t("./version"),B=t("./format-info"),P=t("./mode"),R=t("./segments"),T=t("isarray");r.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,n,o=g.M;return void 0!==e&&(o=g.from(e.errorCorrectionLevel,g.M), r=A.from(e.version), n=y.from(e.maskPattern), e.toSJISFunc&&d.setToSJISFunction(e.toSJISFunc)), l(t,r,o,n)};},{"../utils/buffer":28,"./alignment-pattern":2,"./bit-buffer":4,"./bit-matrix":5,"./error-correction-code":7,"./error-correction-level":8,"./finder-pattern":9,"./format-info":10,"./mask-pattern":13,"./mode":14,"./reed-solomon-encoder":18,"./segments":20,"./utils":21,"./version":23,isarray:30}],18:[function(t,e,r){function n(t){this.genPoly=void 0, this.degree=t, this.degree&&this.initialize(this.degree);}var o=t("../utils/buffer"),i=t("./polynomial");n.prototype.initialize=function(t){this.degree=t, this.genPoly=i.generateECPolynomial(this.degree);}, n.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new o(this.degree);e.fill(0);var r=o.concat([t,e],t.length+this.degree),n=i.mod(r,this.genPoly),a=this.degree-n.length;if(a>0){var u=new o(this.degree);return u.fill(0), n.copy(u,a), u}return n}, e.exports=n;},{"../utils/buffer":28,"./polynomial":16}],19:[function(t,e,r){var n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");var o="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";r.KANJI=new RegExp(n,"g"), r.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"), r.BYTE=new RegExp(o,"g"), r.NUMERIC=new RegExp("[0-9]+","g"), r.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var i=new RegExp("^"+n+"$"),a=new RegExp("^[0-9]+$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");r.testKanji=function(t){return i.test(t)}, r.testNumeric=function(t){return a.test(t)}, r.testAlphanumeric=function(t){return u.test(t)};},{}],20:[function(t,e,r){function n(t){return unescape(encodeURIComponent(t)).length}function o(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function i(t){var e,r,n=o(v.NUMERIC,l.NUMERIC,t),i=o(v.ALPHANUMERIC,l.ALPHANUMERIC,t);return m.isKanjiModeEnabled()?(e=o(v.BYTE,l.BYTE,t), r=o(v.KANJI,l.KANJI,t)):(e=o(v.BYTE_KANJI,l.BYTE,t), r=[]), n.concat(i,e,r).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function a(t,e){switch(e){case l.NUMERIC:return h.getBitsLength(t);case l.ALPHANUMERIC:return d.getBitsLength(t);case l.KANJI:return p.getBitsLength(t);case l.BYTE:return g.getBitsLength(t)}}function u(t){return t.reduce(function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data, t):(t.push(e), t)},[])}function s(t){for(var e=[],r=0;r<t.length;r++){var o=t[r];switch(o.mode){case l.NUMERIC:e.push([o,{data:o.data,mode:l.ALPHANUMERIC,length:o.length},{data:o.data,mode:l.BYTE,length:o.length}]);break;case l.ALPHANUMERIC:e.push([o,{data:o.data,mode:l.BYTE,length:o.length}]);break;case l.KANJI:e.push([o,{data:o.data,mode:l.BYTE,length:n(o.data)}]);break;case l.BYTE:e.push([{data:o.data,mode:l.BYTE,length:n(o.data)}]);}}return e}function f(t,e){for(var r={},n={start:{}},o=["start"],i=0;i<t.length;i++){for(var u=t[i],s=[],f=0;f<u.length;f++){var c=u[f],h=""+i+f;s.push(h), r[h]={node:c,lastCount:0}, n[h]={};for(var d=0;d<o.length;d++){var g=o[d];r[g]&&r[g].node.mode===c.mode?(n[g][h]=a(r[g].lastCount+c.length,c.mode)-a(r[g].lastCount,c.mode), r[g].lastCount+=c.length):(r[g]&&(r[g].lastCount=c.length), n[g][h]=a(c.length,c.mode)+4+l.getCharCountIndicator(c.mode,e));}}o=s;}for(d=0;d<o.length;d++)n[o[d]].end=0;return{map:n,table:r}}function c(t,e){var r,n=l.getBestModeForData(t);if((r=l.from(e,n))!==l.BYTE&&r.bit<n.bit)throw new Error('"'+t+'" cannot be encoded with mode '+l.toString(r)+".\n Suggested mode is: "+l.toString(n));switch(r!==l.KANJI||m.isKanjiModeEnabled()||(r=l.BYTE), r){case l.NUMERIC:return new h(t);case l.ALPHANUMERIC:return new d(t);case l.KANJI:return new p(t);case l.BYTE:return new g(t)}}var l=t("./mode"),h=t("./numeric-data"),d=t("./alphanumeric-data"),g=t("./byte-data"),p=t("./kanji-data"),v=t("./regex"),m=t("./utils"),w=t("dijkstrajs");r.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(c(e,null)):e.data&&t.push(c(e.data,e.mode)), t},[])}, r.fromString=function(t,e){for(var n=i(t,m.isKanjiModeEnabled()),o=s(n),a=f(o,e),c=w.find_path(a.map,"start","end"),l=[],h=1;h<c.length-1;h++)l.push(a.table[c[h]].node);return r.fromArray(u(l))}, r.rawSplit=function(t){return r.fromArray(i(t,m.isKanjiModeEnabled()))};},{"./alphanumeric-data":3,"./byte-data":6,"./kanji-data":12,"./mode":14,"./numeric-data":15,"./regex":19,"./utils":21,dijkstrajs:29}],21:[function(t,e,r){var n,o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];r.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17}, r.getSymbolTotalCodewords=function(t){return o[t]}, r.getBCHDigit=function(t){for(var e=0;0!==t;)e++, t>>>=1;return e}, r.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t;}, r.isKanjiModeEnabled=function(){return void 0!==n}, r.toSJIS=function(t){return n(t)};},{}],22:[function(t,e,r){r.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};},{}],23:[function(t,e,r){function n(t,e,n){for(var o=1;o<=40;o++)if(e<=r.getCapacity(o,n,t))return o}function o(t,e){return c.getCharCountIndicator(t,e)+4}function i(t,e){var r=0;return t.forEach(function(t){var n=o(t.mode,e);r+=n+t.getBitsLength();}), r}function a(t,e){for(var n=1;n<=40;n++){if(i(t,n)<=r.getCapacity(n,e,c.MIXED))return n}}var u=t("./utils"),s=t("./error-correction-code"),f=t("./error-correction-level"),c=t("./mode"),l=t("./version-check"),h=t("isarray"),d=u.getBCHDigit(7973);r.from=function(t,e){return l.isValid(t)?parseInt(t,10):e}, r.getCapacity=function(t,e,r){if(!l.isValid(t))throw new Error("Invalid QR Code version");void 0===r&&(r=c.BYTE);var n=u.getSymbolTotalCodewords(t),i=s.getTotalCodewordsCount(t,e),a=8*(n-i);if(r===c.MIXED)return a;var f=a-o(r,t);switch(r){case c.NUMERIC:return Math.floor(f/10*3);case c.ALPHANUMERIC:return Math.floor(f/11*2);case c.KANJI:return Math.floor(f/13);case c.BYTE:default:return Math.floor(f/8)}}, r.getBestVersionForData=function(t,e){var r,o=f.from(e,f.M);if(h(t)){if(t.length>1)return a(t,o);if(0===t.length)return 1;r=t[0];}else r=t;return n(r.mode,r.getLength(),o)}, r.getEncodedBits=function(t){if(!l.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;u.getBCHDigit(e)-d>=0;)e^=7973<<u.getBCHDigit(e)-d;return t<<12|e};},{"./error-correction-code":7,"./error-correction-level":8,"./mode":14,"./utils":21,"./version-check":22,isarray:30}],24:[function(t,e,r){function n(t,e,r,n,a){var u=[].slice.call(arguments,1),s=u.length,f="function"==typeof u[s-1];if(!f&&!o())throw new Error("Callback required as last argument");if(!f){if(s<1)throw new Error("Too few arguments provided");return 1===s?(r=e, e=n=void 0):2!==s||e.getContext||(n=r, r=e, e=void 0), new Promise(function(o,a){try{var u=i.create(r,n);o(t(u,e,n));}catch(t){a(t);}})}if(s<2)throw new Error("Too few arguments provided");2===s?(a=r, r=e, e=n=void 0):3===s&&(e.getContext&&void 0===a?(a=n, n=void 0):(a=n, n=r, r=e, e=void 0));try{var c=i.create(r,n);a(null,t(c,e,n));}catch(t){a(t);}}var o=t("./can-promise"),i=t("./core/qrcode"),a=t("./renderer/canvas"),u=t("./renderer/svg-tag.js");r.create=i.create, r.toCanvas=n.bind(null,a.render), r.toDataURL=n.bind(null,a.renderToDataURL), r.toString=n.bind(null,function(t,e,r){return u.render(t,r)});},{"./can-promise":1,"./core/qrcode":17,"./renderer/canvas":25,"./renderer/svg-tag.js":26}],25:[function(t,e,r){function n(t,e,r){t.clearRect(0,0,e.width,e.height), e.style||(e.style={}), e.height=r, e.width=r, e.style.height=r+"px", e.style.width=r+"px";}function o(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}var i=t("./utils");r.render=function(t,e,r){var a=r,u=e;void 0!==a||e&&e.getContext||(a=e, e=void 0), e||(u=o()), a=i.getOptions(a);var s=i.getImageWidth(t.modules.size,a),f=u.getContext("2d"),c=f.createImageData(s,s);return i.qrToImageData(c.data,t,a), n(f,u,s), f.putImageData(c,0,0), u}, r.renderToDataURL=function(t,e,n){var o=n;void 0!==o||e&&e.getContext||(o=e, e=void 0), o||(o={});var i=r.render(t,e,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)};},{"./utils":27}],26:[function(t,e,r){function n(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function o(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r), n}function i(t,e,r){for(var n="",i=0,a=!1,u=0,s=0;s<t.length;s++){var f=Math.floor(s%e),c=Math.floor(s/e);f||a||(a=!0), t[s]?(u++, s>0&&f>0&&t[s-1]||(n+=a?o("M",f+r,.5+c+r):o("m",i,0), i=0, a=!1), f+1<e&&t[s+1]||(n+=o("h",u), u=0)):i++;}return n}var a=t("./utils");r.render=function(t,e,r){var o=a.getOptions(e),u=t.modules.size,s=t.modules.data,f=u+2*o.margin,c=o.color.light.a?"<path "+n(o.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",l="<path "+n(o.color.dark,"stroke")+' d="'+i(s,u,o.margin)+'"/>',h='viewBox="0 0 '+f+" "+f+'"',d=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+d+h+' shape-rendering="crispEdges">'+c+l+"</svg>\n";return"function"==typeof r&&r(null,g), g};},{"./utils":27}],27:[function(t,e,r){function n(t){if("number"==typeof t&&(t=t.toString()), "string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))), 6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}r.getOptions=function(t){t||(t={}), t.color||(t.color={});var e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}}, r.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale}, r.getImageWidth=function(t,e){var n=r.getScale(t,e);return Math.floor((t+2*e.margin)*n)}, r.qrToImageData=function(t,e,n){for(var o=e.modules.size,i=e.modules.data,a=r.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,f=[n.color.light,n.color.dark],c=0;c<u;c++)for(var l=0;l<u;l++){var h=4*(c*u+l),d=n.color.light;if(c>=s&&l>=s&&c<u-s&&l<u-s){var g=Math.floor((c-s)/a),p=Math.floor((l-s)/a);d=f[i[g*o+p]?1:0];}t[h++]=d.r, t[h++]=d.g, t[h++]=d.b, t[h]=d.a;}};},{}],28:[function(t,e,r){function n(t,e,r){return n.TYPED_ARRAY_SUPPORT||this instanceof n?"number"==typeof t?u(this,t):v(this,t,e,r):new n(t,e,r)}function o(t){if(t>=w)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w.toString(16)+" bytes");return 0|t}function i(t){return t!==t}function a(t,e){var r;return n.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e), r.__proto__=n.prototype):(r=t, null===r&&(r=new n(e)), r.length=e), r}function u(t,e){var r=a(t,e<0?0:0|o(e));if(!n.TYPED_ARRAY_SUPPORT)for(var i=0;i<e;++i)r[i]=0;return r}function s(t,e){var r=0|d(e),n=a(t,r),o=n.write(e);return o!==r&&(n=n.slice(0,o)), n}function f(t,e){for(var r=e.length<0?0:0|o(e.length),n=a(t,r),i=0;i<r;i+=1)n[i]=255&e[i];return n}function c(t,e,r,o){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(o||0))throw new RangeError("'length' is out of bounds");var i;return i=void 0===r&&void 0===o?new Uint8Array(e):void 0===o?new Uint8Array(e,r):new Uint8Array(e,r,o), n.TYPED_ARRAY_SUPPORT?i.__proto__=n.prototype:i=f(t,i), i}function l(t,e){if(n.isBuffer(e)){var r=0|o(e.length),u=a(t,r);return 0===u.length?u:(e.copy(u,0,0,r), u)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||i(e.length)?a(t,0):f(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return f(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function h(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],a=0;a<n;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189), o=r;continue}r=65536+(o-55296<<10|r-56320);}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null, r<128){if((e-=1)<0)break;i.push(r);}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128);}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128);}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128);}}return i}function d(t){return n.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t), 0===t.length?0:h(t).length)}function g(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function p(t,e,r,n){return g(h(e,t.length-r),t,r,n)}function v(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?c(t,e,r,n):"string"==typeof e?s(t,e,r):l(t,e)}var m=t("isarray");n.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}}, 42===t.foo()}catch(t){return!1}}();var w=n.TYPED_ARRAY_SUPPORT?2147483647:1073741823;n.TYPED_ARRAY_SUPPORT&&(n.prototype.__proto__=Uint8Array.prototype, n.__proto__=Uint8Array, "undefined"!=typeof Symbol&&Symbol.species&&n[Symbol.species]===n&&Object.defineProperty(n,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})), n.prototype.write=function(t,e,r){void 0===e?(r=this.length, e=0):void 0===r&&"string"==typeof e?(r=this.length, e=0):isFinite(e)&&(e|=0, isFinite(r)?r|=0:r=void 0);var n=this.length-e;if((void 0===r||r>n)&&(r=n), t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return p(this,t,e,r)}, n.prototype.slice=function(t,e){var r=this.length;t=~~t, e=void 0===e?r:~~e, t<0?(t+=r)<0&&(t=0):t>r&&(t=r), e<0?(e+=r)<0&&(e=0):e>r&&(e=r), e<t&&(e=t);var o;if(n.TYPED_ARRAY_SUPPORT)o=this.subarray(t,e), o.__proto__=n.prototype;else{var i=e-t;o=new n(i,void 0);for(var a=0;a<i;++a)o[a]=this[a+t];}return o}, n.prototype.copy=function(t,e,r,o){if(r||(r=0), o||0===o||(o=this.length), e>=t.length&&(e=t.length), e||(e=0), o>0&&o<r&&(o=r), o===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length), t.length-e<o-r&&(o=t.length-e+r);var i,a=o-r;if(this===t&&r<e&&e<o)for(i=a-1;i>=0;--i)t[i+e]=this[i+r];else if(a<1e3||!n.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+a),e);return a}, n.prototype.fill=function(t,e,r){if("string"==typeof t){if("string"==typeof e?(e=0, r=this.length):"string"==typeof r&&(r=this.length), 1===t.length){var o=t.charCodeAt(0);o<256&&(t=o);}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0, r=void 0===r?this.length:r>>>0, t||(t=0);var i;if("number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var a=n.isBuffer(t)?t:new n(t),u=a.length;for(i=0;i<r-e;++i)this[i+e]=a[i%u];}return this}, n.concat=function(t,e){if(!m(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a(null,0);var r;if(void 0===e)for(e=0, r=0;r<t.length;++r)e+=t[r].length;var o=u(null,e),i=0;for(r=0;r<t.length;++r){var s=t[r];if(!n.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(o,i), i+=s.length;}return o}, n.byteLength=d, n.prototype._isBuffer=!0, n.isBuffer=function(t){return!(null==t||!t._isBuffer)}, e.exports=n;},{isarray:30}],29:[function(t,e,r){var n={single_source_shortest_paths:function(t,e,r){var o={},i={};i[e]=0;var a=n.PriorityQueue.make();a.push(e,0);for(var u,s,f,c,l,h,d,g;!a.empty();){u=a.pop(), s=u.value, c=u.cost, l=t[s]||{};for(f in l)l.hasOwnProperty(f)&&(h=l[f], d=c+h, g=i[f], (void 0===i[f]||g>d)&&(i[f]=d, a.push(f,d), o[f]=s));}if(void 0!==r&&void 0===i[r]){var p=["Could not find a path from ",e," to ",r,"."].join("");throw new Error(p)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n), t[n], n=t[n];return r.reverse(), r},find_path:function(t,e,r){var o=n.single_source_shortest_paths(t,e,r);return n.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var e,r=n.PriorityQueue,o={};t=t||{};for(e in r)r.hasOwnProperty(e)&&(o[e]=r[e]);return o.queue=[], o.sorter=t.sorter||r.default_sorter, o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r), this.queue.sort(this.sorter);},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};void 0!==e&&(e.exports=n);},{}],30:[function(t,e,r){var n={}.toString;e.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)};
  },{}]},{},[24])(24)});

  });

  var isQBApp = /jfwallet/i.test(navigator.userAgent);
  var isWKApp = /jfwklc/i.test(navigator.userAgent);
  var isWeChat = /MicroMessenger/i.test(navigator.userAgent); // 是否是微信环境

  var isApp = isQBApp || isWKApp; // 是否是app环境

  var VConsoleLaunchAPPTab =
  /*#__PURE__*/
  function (_VConsole$VConsolePlu) {
    _inherits(VConsoleLaunchAPPTab, _VConsole$VConsolePlu);

    function VConsoleLaunchAPPTab(vConsole, options) {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, VConsoleLaunchAPPTab);

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VConsoleLaunchAPPTab)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.$ = vConsole.$;
      _this.$tabbox = _this.$.render(tpllaunch, {}); // 按钮

      _this.typeNameMap = {
        'jfwklc': {
          btntext: '悟空中打开',
          prefix: 'jfwklc://pushWindow?url='
        },
        'jfwallet': {
          btntext: '钱包中打开',
          prefix: 'jfwallet://JFWebViewModelProtocol?startPageUrl='
        },
        'Refresh': {
          btntext: 'Refresh',
          prefix: ''
        }
      };

      if (isApp) {
        // 按钮
        _this.typeNameMap = {
          'Refresh': {
            btntext: 'Refresh',
            prefix: ''
          }
        };
      }

      if (vConsole.tool.isObject(options)) {
        _this.typeNameMap = Object.assign(_this.typeNameMap, options);
      }

      return _this;
    }
    /**
     * 渲染面板
     * @param {*} callback 
     */


    _createClass(VConsoleLaunchAPPTab, [{
      key: "onRenderTab",
      value: function onRenderTab(callback) {
        callback(this.$tabbox);
      }
      /**
       * 面板头部按钮
       * @param {*} callback 
       */

    }, {
      key: "onAddTopBar",
      value: function onAddTopBar(callback) {}
      /**
       * 面板底部按钮
       * @param {*} callback 
       */

    }, {
      key: "onAddTool",
      value: function onAddTool(callback) {
        var that = this;
        var toolList = [];
        var map = that.typeNameMap;

        var _loop = function _loop(item) {
          toolList.push({
            name: map[item].btntext,
            global: false,
            data: {
              type: item
            },
            onClick: function onClick() {
              that.launchAPP(item);
            }
          });
        };

        for (var item in map) {
          _loop(item);
        }

        callback(toolList);
      }
    }, {
      key: "onShow",
      value: function onShow() {
        this.renderQrcode();
      }
      /**
       * 渲染 二维码
       */

    }, {
      key: "renderQrcode",
      value: function renderQrcode() {
        var canvas = document.getElementById('qrcode');
        var canvasText = window.location.href;
        qrcode_min.toCanvas(canvas, canvasText, function (error) {
          if (error) console.error(error);
          canvas.style.height = '60vw';
          canvas.style.width = '60vw';
          console.log('success!');
        });
      }
      /**
       * 唤起 app 并打开页面
       * @param {*} type 
       */

    }, {
      key: "launchAPP",
      value: function launchAPP(type) {
        if (!type) {
          return false;
        }

        if (type === 'Refresh') {
          window.location.href = window.location.href;
          console.log('reoaded!😊');
          return false;
        } else {
          if (!isWeChat) {
            var schema = this.typeNameMap[type].prefix + window.location.href;
            console.log('schema', schema);
            window.location = schema;
          } else {
            alert('请在浏览器中打开本页面');
          }
        }
      }
    }]);

    return VConsoleLaunchAPPTab;
  }(VConsole.VConsolePlugin);

  return VConsoleLaunchAPPTab;

})));
