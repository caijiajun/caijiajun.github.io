webpackJsonp([20],{276:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(99),r=t.n(a),i=t(11),A=t.n(i);n.default={components:{XHeader:r.a},data:function(){return{routeName:this.$route.name,title:"XX学校简介",smallP:"2017-07-17 16:27:00 宝安高级中学院校管理员",imgShow:"../../../static/imgs/schoolIntro.png"}},methods:{},created:function(){function e(e,n){e&&n&&0!=n.length&&WeixinJSBridge.invoke("imagePreview",{current:e,urls:n})}A()(function(){var n=[],t=0,a=[];for(n=A()("img"),t=0;t<n.length;t++)a[t]=n[t].src;A()("img").click(function(){var n=A()("img").index(this);e(a[n],a),console.log(123)})})}}},289:function(e,n,t){n=e.exports=t(56)(!0),n.push([e.i,"article{margin-top:2px;padding:0 5%;text-align:center;background-color:#fff}article h1{padding:10px 0;font-size:15px;color:#454545}article img{width:100%;margin:10px 0 20px}","",{version:3,sources:["C:/wamp/www/jun/weixin/my-wx/src/page/index/schoolIntro.vue"],names:[],mappings:"AACA,QACE,eAAgB,AAChB,aAAgB,AAChB,kBAAmB,AACnB,qBAAuB,CACxB,AACD,WACI,eAAkB,AAClB,eAAgB,AAChB,aAAe,CAClB,AACD,YACI,WAAY,AACZ,kBAA0B,CAC7B",file:"schoolIntro.vue",sourcesContent:["\narticle {\n  margin-top: 2px;\n  padding: 0px 5%;\n  text-align: center;\n  background-color: #fff;\n}\narticle h1 {\n    padding: 10px 0px;\n    font-size: 15px;\n    color: #454545;\n}\narticle img {\n    width: 100%;\n    margin: 10px 0px 20px 0px;\n}\n"],sourceRoot:""}])},321:function(e,n,t){var a=t(289);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(57)("65ba5eac",a,!0)},353:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{width:"100%"}},[t("x-header",[e._v(e._s(e.routeName))]),e._v(" "),t("article",[t("h1",[e._v(e._s(e.title))]),e._v(" "),t("p",{staticClass:"mmall-p"},[e._v(e._s(e.smallP))]),e._v(" "),t("img",{attrs:{src:e.imgShow,alt:""}}),e._v(" "),t("p",{staticClass:"article-p"},[e._v("\n            大家来学校创办于1977年，是一所全日制小学，历史悠久。历年来，在各级领导及社会各界的关心下，学校领导、师生员工艰苦奋斗、锐意进取，敬业爱岗，安教乐教；学生文明礼貌，勤奋好学。学校已形成“校风好、质量优、声誉佳”的小学。\n        ")]),e._v(" "),t("p",{staticClass:"article-p"},[e._v("\n            学校现占地面积7365平方米，建筑面积3066平方米。近年来，学校的办学条件不断得到改善。学校已配套队部室、仪器室、阅览室、美术室、音乐室、心理咨询室等场室。学校的设备设施基本上满足教育教学工作的需要，为学校的持续发展提供必要的条件。学校现有教学班12个，学生300多人，在编教职工28人，中级职称12人，初级职称16人，学历达标率100％。\n        ")]),e._v(" "),t("p",{staticClass:"article-p"},[e._v("\n            学校全面贯彻教育方针，根据“依法治校、规范办学、全面发展”的办学思路， 秉承“以人为本、面向全体、提高素养、和谐发展”的育人理念，创建优美环境，为师生学习、工作和生活创造良好条件；加强学校管理，提高办学水平，建设一流师资队伍，鼓励教师参加学历提高培训，每学期开展教学能手比武，着力打造“严谨、善教、敬业、爱生”的教风，全面提高教育。\n        ")]),e._v(" "),e._m(0)])],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"article-p"},[t("br")])}]}},69:function(e,n,t){function a(e){t(321)}var r=t(19)(t(276),t(353),a,null,null);e.exports=r.exports},92:function(e,n,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,o,s=a(e),l=1;l<arguments.length;l++){t=Object(arguments[l]);for(var c in t)i.call(t,c)&&(s[c]=t[c]);if(r){o=r(t);for(var u=0;u<o.length;u++)A.call(t,o[u])&&(s[o[u]]=t[o[u]])}}return s}},93:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(92),r=t.n(a);n.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},96:function(e,n,t){n=e.exports=t(56)(!0),n.push([e.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#35495e}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#ccc}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#ccc}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #ccc;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',"",{version:3,sources:["C:/wamp/www/jun/weixin/my-wx/node_modules/_vux@2.5.2@vux/src/components/x-header/index.vue"],names:[],mappings:"AA0GA,YACE,kBAAmB,AACnB,cAAe,AACf,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,6CAEE,cAAe,AACf,iBAAkB,AAClB,kBAAmB,AACnB,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,WAAY,AACZ,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,UAAY,CACb,AACD,mCACE,oBAAsB,CACvB,AACD,2DAEE,kBAAmB,AACnB,SAAU,AACV,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,UAAY,CACb,AACD,wIAIE,WAAY,AACZ,iBAAkB,AAClB,UAAY,CACb,AACD,oKAIE,UAAa,CACd,AACD,6BACE,SAAW,CACZ,AACD,8CACE,iBAAmB,CACpB,AACD,yCACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,SAAU,AACV,SAAW,CACZ,AACD,gDACE,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,yBAA0B,AAC1B,iCAAkC,AAC1B,yBAA0B,AAClC,QAAS,AACT,QAAU,CACX,AACD,8BACE,UAAY,CACb,AACD,qEAEE,gBAAiB,AACjB,cAAgB,CACjB,AACD,qDACE,mCAA0C,AAC1C,cAAgB,CACjB,AACD,uCACE,8BAA+B,AACvB,qBAAuB,CAChC,AACD,sCACE,8BAA+B,AACvB,qBAAuB,CAChC,AACD,2BACA,GACI,UAAW,AACX,oCAAqC,AAC7B,2BAA6B,CACxC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA,AACD,mBACA,GACI,UAAW,AACX,oCAAqC,AAC7B,2BAA6B,CACxC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA,AACD,2BACA,GACI,UAAW,AACX,qCAAsC,AAC9B,4BAA8B,CACzC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA,AACD,mBACA,GACI,UAAW,AACX,qCAAsC,AAC9B,4BAA8B,CACzC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA",file:"index.vue",sourcesContent:['/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n.vux-header {\n  position: relative;\n  padding: 3px 0;\n  box-sizing: border-box;\n  background-color: #35495e;\n}\n.vux-header .vux-header-title,\n.vux-header h1 {\n  margin: 0 88px;\n  line-height: 40px;\n  text-align: center;\n  height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #fff;\n}\n.vux-header .vux-header-title > span {\n  display: inline-block;\n}\n.vux-header .vux-header-left,\n.vux-header .vux-header-right {\n  position: absolute;\n  top: 14px;\n  display: block;\n  font-size: 14px;\n  line-height: 21px;\n  color: #ccc;\n}\n.vux-header .vux-header-left a,\n.vux-header .vux-header-left button,\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  float: left;\n  margin-right: 8px;\n  color: #ccc;\n}\n.vux-header .vux-header-left a:active,\n.vux-header .vux-header-left button:active,\n.vux-header .vux-header-right a:active,\n.vux-header .vux-header-right button:active {\n  opacity: 0.5;\n}\n.vux-header .vux-header-left {\n  left: 18px;\n}\n.vux-header .vux-header-left .vux-header-back {\n  padding-left: 16px;\n}\n.vux-header .vux-header-left .left-arrow {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  top: -5px;\n  left: -5px;\n}\n.vux-header .vux-header-left .left-arrow:before {\n  content: "";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border: 1px solid #ccc;\n  border-width: 1px 0 0 1px;\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg);\n  top: 8px;\n  left: 7px;\n}\n.vux-header .vux-header-right {\n  right: 15px;\n}\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  margin-left: 8px;\n  margin-right: 0;\n}\n.vux-header .vux-header-right .vux-header-more:after {\n  content: "\\2022\\0020\\2022\\0020\\2022\\0020";\n  font-size: 16px;\n}\n.vux-header-fade-in-right-enter-active {\n  -webkit-animation: fadeinR .5s;\n          animation: fadeinR .5s;\n}\n.vux-header-fade-in-left-enter-active {\n  -webkit-animation: fadeinL .5s;\n          animation: fadeinL .5s;\n}\n@-webkit-keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@-webkit-keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n'],sourceRoot:""}])},97:function(e,n,t){var a=t(96);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(57)("3ebd57d7",a,!0)},98:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"vux-header"},[t("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[t("transition",{attrs:{name:e.transition}},[t("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(n){if(!("button"in n)&&e._k(n.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),t("transition",{attrs:{name:e.transition}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),t("h1",{staticClass:"vux-header-title",on:{click:function(n){e.$emit("on-click-title")}}},[e._t("default",[t("transition",{attrs:{name:e.transition}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),t("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?t("a",{staticClass:"vux-header-more",on:{click:[function(n){if(!("button"in n)&&e._k(n.keyCode,"preventDefault"))return null},function(n){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},99:function(e,n,t){function a(e){t(97)}var r=t(19)(t(93),t(98),a,null,null);e.exports=r.exports}});
//# sourceMappingURL=20.bee1a12822c379c73ed0.js.map