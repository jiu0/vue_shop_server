(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order_report"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,c,"next",t)}function c(t){n(i,a,o,s,c,"throw",t)}s(void 0)}))}}},4554:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("数据统计")]),r("el-breadcrumb-item",[t._v("数据报表")])],1),r("el-card",[r("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main"}})])],1)},a=[],o=r("1da1"),i=(r("96cf"),r("164e")),s=r("60bb"),c=r.n(s),u={name:"report",data:function(){return{options:{title:{text:"用户来源"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#e9eef3"}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{boundaryGap:!1}],yAxis:[{type:"value"}]}}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i["init"](document.getElementById("main")),e.next=3,t.$http.post("/reportlist");case 3:if(n=e.sent,a=n.data,200===a.data.meta.status){e.next=7;break}return e.abrupt("return",t.$message.error("获取报表数据失败"));case 7:t.$message.success(a.data.meta.msg),o=c.a.merge(a.data.data,t.options),r.setOption(o);case 10:case"end":return e.stop()}}),e)})))()},methods:{},created:function(){}},l=u,d=r("2877"),h=Object(d["a"])(l,n,a,!1,null,"290e537e",null);e["default"]=h.exports},6443:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("订单管理")]),r("el-breadcrumb-item",[t._v("订单列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:t.getOrderList},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getOrderList},slot:"append"})],1)],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.orderList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{prop:"order_number",label:"订单编号",width:"180"}}),r("el-table-column",{attrs:{prop:"order_price",label:"订单价格",width:"180"}}),r("el-table-column",{attrs:{prop:"pay_status",width:"120",label:"是否付款"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"===e.row.pay_status?r("el-tag",{attrs:{type:"success"}},[t._v("已付款")]):r("el-tag",{attrs:{type:"danger"}},[t._v("未付款")])]}}])}),r("el-table-column",{attrs:{prop:"is_send",width:"120",label:"是否发货"}}),r("el-table-column",{attrs:{prop:"create_time",label:"下单时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("dataFormat")(e.row.create_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180px"}},[[r("el-tooltip",{attrs:{effect:"dark",content:"编辑订单",placement:"top"}},[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:t.showEditDialog}})],1),r("el-tooltip",{attrs:{effect:"dark",content:"订单位置",placement:"top"}},[r("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-location"},on:{click:t.showProgressBox}})],1)]],2)],1),r("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"修改地址",visible:t.adressVisible,width:"50%"},on:{close:t.addressDialogClosed,"update:visible":function(e){t.adressVisible=e}}},[r("el-form",{ref:"addressFormRef",attrs:{model:t.addressForm,rules:t.addressFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"省市区/县"}},[r("el-cascader",{attrs:{clearable:"","change-on-select":"","expand-trigger":"hover",options:t.cityList,props:t.cityProps},model:{value:t.addressForm.address1,callback:function(e){t.$set(t.addressForm,"address1",e)},expression:"addressForm.address1"}})],1),r("el-form-item",{attrs:{label:"详细地址",prop:"address2"}},[r("el-input",{model:{value:t.addressForm.address2,callback:function(e){t.$set(t.addressForm,"address2",e)},expression:"addressForm.address2"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.adressVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.adressVisible=!1}}},[t._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"物流进度",visible:t.processVisible,width:"50%"},on:{close:t.addressDialogClosed,"update:visible":function(e){t.processVisible=e}}},[r("el-timeline",t._l(t.processInfo,(function(e,n){return r("el-timeline-item",{key:n,attrs:{timestamp:e.time}},[t._v(" "+t._s(e.context)+" ")])})),1)],1)],1)},a=[],o=r("1da1"),i=(r("96cf"),{name:"order",data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:6},orderList:[],total:0,adressVisible:!1,addressForm:{address1:[],address2:""},addressFormRules:{address1:[{required:!0,message:"请选择省市区县",trigger:"blur"}],address2:[{required:!0,message:"请填写详细地址",trigger:"blur"}]},cityList:[],cityProps:{label:"city_name",value:"city_id",children:"children"},processVisible:!1,processInfo:[]}},created:function(){this.getOrderList(),this.getCityList()},methods:{showProgressBox:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/kudidi",{id:5960798321390});case 2:r=e.sent,n=r.data,200!==n.data.meta.status&&t.$message.error("获取物流信息失败"),t.processInfo=n.data.data.data,t.processVisible=!0;case 7:case"end":return e.stop()}}),e)})))()},addressDialogClosed:function(){this.addressForm.address1=[],this.addressForm.address2=""},handleCurrentChange:function(t){this.queryInfo.pageNum=t,this.getOrderList()},handleSizeChange:function(t){this.queryInfo.pageSize=t,this.getOrderList()},getOrderList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/orders",t.queryInfo);case 2:if(r=e.sent,n=r.data,200===n.data.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取订单列表失败"));case 6:t.$message.success(n.data.meta.msg),t.total=n.data.data.total,t.orderList=n.data.data.goods;case 9:case"end":return e.stop()}}),e)})))()},showEditDialog:function(){this.adressVisible=!0},getCityList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/citypicker");case 2:if(r=e.sent,n=r.data,200===n.data.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取商品分类失败"));case 6:t.cityList=n.data.data;case 7:case"end":return e.stop()}}),e)})))()}}}),s=i,c=(r("78396"),r("2877")),u=Object(c["a"])(s,n,a,!1,null,"c14a22e6",null);e["default"]=u.exports},78396:function(t,e,r){"use strict";r("a432")},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),i=new I(n||[]);return o._invoke=E(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(R){return{type:"throw",arg:R}}}t.wrap=u;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",m={};function g(){}function y(){}function v(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(q([])));x&&x!==r&&n.call(x,o)&&(b=x);var _=v.prototype=g.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(a,o,i,s){var c=l(t[a],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var a;function o(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=d;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return $()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=O(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function q(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:$}}function $(){return{value:e,done:!0}}return y.prototype=v,c(_,"constructor",v),c(v,"constructor",y),y.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(k.prototype),c(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new k(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),c(_,s,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=q,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:q(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a432:function(t,e,r){}}]);
//# sourceMappingURL=order_report.abd9326f.js.map