(function(t){function e(e){for(var r,s,d=e[0],n=e[1],l=e[2],_=0,m=[];_<d.length;_++)s=d[_],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var d=a[s];0!==o[d]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},o={app:0},i=[];function d(t){return n.p+"js/"+({"cate_params~goods_list_add~users_rights_roles":"cate_params~goods_list_add~users_rights_roles",cate_params:"cate_params",goods_list_add:"goods_list_add",users_rights_roles:"users_rights_roles",login_home_welcome:"login_home_welcome",order_report:"order_report"}[t]||t)+"."+{"cate_params~goods_list_add~users_rights_roles":"d085651e",cate_params:"fba22cc6",goods_list_add:"b9cf4be0",users_rights_roles:"a012c51b",login_home_welcome:"8960ca7d",order_report:"abd9326f"}[t]+".js"}function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a={cate_params:1,goods_list_add:1,users_rights_roles:1,login_home_welcome:1,order_report:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var r="css/"+({"cate_params~goods_list_add~users_rights_roles":"cate_params~goods_list_add~users_rights_roles",cate_params:"cate_params",goods_list_add:"goods_list_add",users_rights_roles:"users_rights_roles",login_home_welcome:"login_home_welcome",order_report:"order_report"}[t]||t)+"."+{"cate_params~goods_list_add~users_rights_roles":"31d6cfe0",cate_params:"6d853665",goods_list_add:"453ba4d1",users_rights_roles:"5eedf130",login_home_welcome:"3e19b1f7",order_report:"7478b88c"}[t]+".css",o=n.p+r,i=document.getElementsByTagName("link"),d=0;d<i.length;d++){var l=i[d],_=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(_===r||_===o))return e()}var m=document.getElementsByTagName("style");for(d=0;d<m.length;d++){l=m[d],_=l.getAttribute("data-href");if(_===r||_===o)return e()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=e,c.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[t],c.parentNode.removeChild(c),a(i)},c.href=o;var u=document.getElementsByTagName("head")[0];u.appendChild(c)})).then((function(){s[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=i);var l,_=document.createElement("script");_.charset="utf-8",_.timeout=120,n.nc&&_.setAttribute("nonce",n.nc),_.src=d(t);var m=new Error;l=function(e){_.onerror=_.onload=null,clearTimeout(c);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",m.name="ChunkLoadError",m.type=r,m.request=s,a[1](m)}o[t]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:_})}),12e4);_.onerror=_.onload=l,document.head.appendChild(_)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],_=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var c=_;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("4cae")},"164e":function(t,e){t.exports=echarts},"18d9":function(t,e){t.exports=VueQuillEditor},"1af2":function(t,e){t.exports=NProgress},"4c71":function(t,e,a){"use strict";a.r(e);var r=a("96eb"),s=a.n(r);s.a.mock("/reportlist","post",{data:{data:{title:{text:"用户来源"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["华东","华南","华北","西部","其他"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",top:"10%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["2017-12-27","2017-12-28","2017-12-29","2017-12-30","2017-12-31"]}],yAxis:[{type:"value"}],series:[{name:"华东",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[4e3,5e3,6e3,5e3,5400,7e3]},{name:"华南",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[8e3,7e3,7900,1e4,11e3,13e3]},{name:"华北",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[15e3,1e4,16e3,22e3,24e3,28e3]},{name:"西部",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[25e3,14e3,24e3,36e3,38e3,41e3]},{name:"其他",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[4e4,2e4,33e3,5e4,52e3,53e3]}]},meta:{msg:"获取报表数据成功",status:200}}})},"4cae":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4"),a("d3b7");var r=a("8bbf"),s=a.n(r),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],d={name:"app",components:{}},n=d,l=a("2877"),_=Object(l["a"])(n,o,i,!1,null,"4337baf8",null),m=_.exports,c=(a("3ca3"),a("ddb0"),a("6389")),u=a.n(c),h=function(){return a.e("login_home_welcome").then(a.bind(null,"578a"))},p=function(){return a.e("login_home_welcome").then(a.bind(null,"57da"))},g=function(){return a.e("login_home_welcome").then(a.bind(null,"1ddd"))},f=function(){return Promise.all([a.e("cate_params~goods_list_add~users_rights_roles"),a.e("users_rights_roles")]).then(a.bind(null,"2666"))},y=function(){return Promise.all([a.e("cate_params~goods_list_add~users_rights_roles"),a.e("users_rights_roles")]).then(a.bind(null,"a766"))},b=function(){return Promise.all([a.e("cate_params~goods_list_add~users_rights_roles"),a.e("users_rights_roles")]).then(a.bind(null,"3024"))},v=function(){return Promise.all([a.e("cate_params~goods_list_add~users_rights_roles"),a.e("cate_params")]).then(a.bind(null,"7f6a"))},N=function(){return Promise.all([a.e("cate_params~goods_list_add~users_rights_roles"),a.e("cate_params")]).then(a.bind(null,"3b0d"))},k=function(){return Promise.all([a.e("cate_params~goods_list_add~users_rights_roles"),a.e("goods_list_add")]).then(a.bind(null,"cb38"))},w=function(){return Promise.all([a.e("cate_params~goods_list_add~users_rights_roles"),a.e("goods_list_add")]).then(a.bind(null,"4f9b"))},x=function(){return a.e("order_report").then(a.bind(null,"6443"))},q=function(){return a.e("order_report").then(a.bind(null,"4554"))};s.a.use(u.a);var S=[{path:"/",redirect:"/login"},{path:"/login",component:h},{path:"/home",component:p,redirect:"/welcome",children:[{path:"/welcome",component:g},{path:"/users",component:f},{path:"/rights",component:y},{path:"/roles",component:b},{path:"/categories",component:v},{path:"/params",component:N},{path:"/goods",component:k},{path:"/goods/add",component:w},{path:"/orders",component:x},{path:"/reports",component:q}]}],P=new u.a({routes:S});P.beforeEach((function(t,e,a){if("/login"===t.path)return a();var r=sessionStorage.getItem("token");if(!r)return a("/login");a()}));var j=P,O=a("2f62");s.a.use(O["a"]);var T=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=(a("aede"),a("a342"),a("18d9")),A=a.n(E),C=a("d67e"),D=a.n(C),L=a("1af2"),M=a.n(L),I=a("cebe"),z=a.n(I);s.a.use(A.a),s.a.component("tree-table",D.a),s.a.prototype.$http=z.a,z.a.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),M.a.start(),t})),z.a.interceptors.response.use((function(t){return M.a.done(),t})),s.a.config.productionTip=!1,s.a.filter("dataFormat",(function(t){var e=new Date(1e3*t),a=e.getFullYear()+"-",r=e.getMonth()+1+"-",s=e.getDate()+" ",o=e.getHours()+":",i=e.getMinutes()+":",d=e.getSeconds();return a+r+s+o+i+d})),a("9523"),a("59c7"),a("8b1f"),a("4c71"),new s.a({router:j,store:T,render:function(t){return t(m)}}).$mount("#app")},"59c7":function(t,e,a){"use strict";a.r(e);var r=a("96eb"),s=a.n(r);s.a.mock("/goods","get",{data:{data:{pagenum:1,total:30,goods:[{goods_id:500,goods_name:"超级管理员",goods_price:133,goods_number:44,goods_weight:1,goods_state:null,add_time:134454354,hot_number:0,is_promote:!1},{goods_id:5020,goods_name:"超级管理员2",goods_price:"1332",goods_number:442,goods_weight:2,goods_state:null,add_time:88888888,hot_number:1,is_promote:!0}]},meta:{msg:"获取商品列表成功",status:200}}}),s.a.mock("/deletegoods","delete",{data:{data:null,meta:{msg:"删除成功",status:200}}}),s.a.mock("/goodsmanycateor","get",{data:{data:[{attr_id:3077,attr_name:"版式",cat_id:6,attr_sel:3077,attr_vals:"超波曲面,热工之哦,我扽的分,的风格",attr_write:30783333,delete_time:88990897888},{attr_id:30,attr_name:"颜色",cat_id:7,attr_sel:3017,attr_vals:"超波曲面2,热工之哦2,我扽的分2,的风格2",attr_write:307833,delete_time:88990898}],meta:{msg:"获取动态商品参数成功",status:200}}}),s.a.mock("/goodsonlyatr","get",{data:{data:[{attr_id:3077,attr_name:"主题商品名称",cat_id:6,attr_sel:3077,attr_vals:"名称1",attr_write:30783333,delete_time:88990897888},{attr_id:301,attr_name:"主题商品曲度",cat_id:7,attr_sel:3017,attr_vals:"曲度1",attr_write:307833,delete_time:88990898},{attr_id:302,attr_name:"外观安装",cat_id:7,attr_sel:3017,attr_vals:"安装1",attr_write:307833,delete_time:88990898},{attr_id:303,attr_name:"功能效率",cat_id:7,attr_sel:3017,attr_vals:"效率1",attr_write:307833,delete_time:88990898},{attr_id:304,attr_name:"端口换看",cat_id:7,attr_sel:3017,attr_vals:"换看1",attr_write:307833,delete_time:88990898}],meta:{msg:"获取静态商品属性成功",status:200}}}),s.a.mock("/upload","post",{data:{data:[{tmp_path:"g3.jpg",imgUrl:"http://r7ndx2ysi.hn-bkt.clouddn.com/g3.jpg"},{tmp_path:"g1.jpg",imgUrl:"http://r7ndx2ysi.hn-bkt.clouddn.com/g1.jpg"}],meta:{msg:"上传图片成功",status:200}}}),s.a.mock("/addgoods","post",{data:{data:[{attr_id:3077,attr_name:"主题商品名称",cat_id:6,attr_sel:3077,attr_vals:"名称1",attr_write:30783333,delete_time:88990897888},{attr_id:301,attr_name:"主题商品曲度",cat_id:7,attr_sel:3017,attr_vals:"曲度1",attr_write:307833,delete_time:88990898},{attr_id:302,attr_name:"外观安装",cat_id:7,attr_sel:3017,attr_vals:"安装1",attr_write:307833,delete_time:88990898},{attr_id:303,attr_name:"功能效率",cat_id:7,attr_sel:3017,attr_vals:"效率1",attr_write:307833,delete_time:88990898},{attr_id:304,attr_name:"端口换看",cat_id:7,attr_sel:3017,attr_vals:"换看1",attr_write:307833,delete_time:88990898}],meta:{msg:"获取静态商品属性成功",status:200}}}),s.a.mock("/creategoods","post",{data:{data:{goods_id:123,goods_name:"主题商品名称",goods_price:6,cat_id:3077,goods_number:38,goods_weight:59,goods_introduce:"kkii",goods_big_logo:"",goods_small_logo:"",goods_state:1,add_time:12345096854,upd_time:12345789776,hot_number:0,is_promote:!1,pics:[{pics_id:908,goods_id:134,pics_big:"",pics_mid:"",pics_sma:""}],attrs:[{attr_id:12,goods_id:164,attr_value:"222",add_price:null,attr_name:"gggg",attr_sel:"many",attr_write:"list",attr_vals:""},{attr_id:125,goods_id:167,attr_value:"2282",add_price:null,attr_name:"ggg8g",attr_sel:"many",attr_write:"list2",attr_vals:""}]},meta:{msg:"创建商品成功",status:201}}})},"60bb":function(t,e){t.exports=_},6389:function(t,e){t.exports=VueRouter},"8b1f":function(t,e,a){"use strict";a.r(e);var r=a("96eb"),s=a.n(r);s.a.mock("/orders","get",{data:{data:{total:34,pagenum:"3",goods:[{order_id:46,user_id:133,order_number:"idue697707007",order_price:322,order_pay:"2",is_send:"是",trade_no:"",order_fapiao_title:"个人",order_fapiao_company:"",order_fapiao_content:"办公用品",consignee_addr:'a:7:{s:6:"cgn_id";i:1;s:7:"user_id";i:133;s:8:"cgn_name";s:9:"王为":s:1l:"cgn_address";s:51:"本金市内咸宁显崇阳真大唐存一组";s:7:"cgn_tel";s:11:"123456788098";s:8:"cgn_code";s:6:"3045673";s:11:"delete_time";N;}',pay_status:"1",create_time:1233333123,update_time:123333333333},{order_id:47,user_id:135,order_number:"idue77697707007",order_price:3227,order_pay:"27",is_send:"是",trade_no:"",order_fapiao_title:"个人",order_fapiao_company:"",order_fapiao_content:"办公用品",consignee_addr:'a:7:{s:6:"cgn_id";i:1;s:7:"user_id";i:133;s:8:"cgn_name";s:9:"王为":s:1l:"cgn_address";s:51:"本金市内咸宁显崇阳真大唐存一组";s:7:"cgn_tel";s:11:"123456788098";s:8:"cgn_code";s:6:"3045673";s:11:"delete_time";N;}',pay_status:"0",create_time:13333333098,update_time:7894564578905}]},meta:{msg:"获取订单列表成功",status:200}}}),s.a.mock("/citypicker","post",{data:{pagenum:1,pageSize:5,total:30,data:[{city_id:2,city_name:"湖北",city_code:111e4,children:[{city_id:3,city_name:"咸宁",city_code:4441e3,children:[{city_id:4,city_name:"崇阳",city_code:222e3,children:[{city_id:77888,city_name:"桃溪大道",city_code:999908899},{city_id:7788822,city_name:"桃溪大道2",city_code:999908892229}]},{city_id:222,city_name:"通城",city_code:2220050}]},{city_id:222666,city_name:"武汉",city_code:222006666650}]},{city_id:29,city_name:"湖男",city_code:1100}],meta:{msg:"获取省市区县成功",status:200}}}),s.a.mock("/kudidi","get",{data:{data:{data:[{time:"2018-05-03 09:23:32",ftime:"2018-05-03 09:23:42",context:"已签收,感谢使用顺丰",location:""},{time:"2018-05-04 10:23:32",ftime:"2018-05-04 10:24:42",context:"已签收2,感谢使用顺丰2",location:""},{time:"2019-05-04 14:23:32",ftime:"2019-06-04 11:24:42",context:"已签收3,感谢使用顺丰3",location:""}]},meta:{msg:"获取物流信息成功",status:200}}})},"8bbf":function(t,e){t.exports=Vue},9523:function(t,e,a){"use strict";a.r(e);var r=a("96eb"),s=a.n(r);s.a.mock("/login","post",{data:{data:{id:500,rid:0,username:"admin",mobile:"123",email:"123@qq.com",token:"uqweirruifjdkiewr893473295732598245"},meta:{msg:"登录成功",status:200}}}),s.a.mock("/menus","get",{data:{data:[{id:125,order:1,authName:"用户管理",path:"users",children:[{id:110,authName:"用户列表",path:"users",children:[]}]},{id:103,authName:"权限管理",path:"rights",children:[{id:104,authName:"权限列表",path:"rights",children:[]},{id:107,authName:"角色列表",path:"roles",children:[]}]},{id:101,authName:"商品管理",path:"goods",children:[{id:105,authName:"商品列表",path:"goods",children:[]},{id:106,authName:"商品分类",path:"categories",children:[]},{id:107,authName:"分类参数",path:"params",children:[]}]},{id:102,authName:"订单管理",path:"orders",children:[{id:105,authName:"订单列表",path:"orders",children:[]}]},{id:145,authName:"数据统计",path:"reports",children:[{id:105,authName:"数据报表",path:"reports",children:[]}]}],meta:{msg:"获取菜单列表成功",status:200}}}),s.a.mock("/users","get",{data:{data:{pagenum:1,total:4,users:[{id:500,role_name:"超级管理员",username:"admin",create_time:13305868967,type:1,email:"4835045@qq.com",mobile:"199506660067",mg_state:!0},{id:502,role_name:"超级管理员2",username:"admin2",create_time:13305848967,type:2,email:"48354345@qq.com",mobile:"1995566660067",mg_state:!1}]},meta:{msg:"获取管理员列表成功",status:200}}}),s.a.mock("/users","put",{data:{data:{id:566,rid:30,username:"admin",mobile:"123456",email:"4444@qq.com",mg_state:0},meta:{msg:"设置状态成功",status:200}}}),s.a.mock("/addusers","post",{data:{data:{id:28,username:"49400455ddd",mobile:"12333333",type:1,openid:"",email:"yesgsg@qq.com",create_time:"9999996757888",modify_time:null,is_delete:!1,is_active:!1},meta:{msg:"用户创建成功",status:201}}}),s.a.mock("/editusers","get",{data:{data:[{id:503,username:"admin3",role_id:0,mobile:18218394056,email:"yesgsg@qq.com"},{id:504,username:"admin4",role_id:1,mobile:18218394057,email:"6666666g@qq.com"}],meta:{msg:"获取用户成功",status:200}}}),s.a.mock("/editsubmitusers","post",{data:{data:{id:503,username:"admin3",role_id:0,mobile:1888999,email:"yesgsg@qq.com"},meta:{msg:"更新成功",status:200}}}),s.a.mock("/deleteuser","delete",{data:{data:null,meta:{msg:"删除成功",status:200}}}),s.a.mock("/rightslist","get",{data:{data:[{id:101,authName:"商品管理",level:"0",pid:0,path:"goods"},{id:105,authName:"订单管理",level:"0",pid:0,path:"orders"}],meta:{msg:"获取权限列表成功",status:200}}}),s.a.mock("/rightstree","get",{data:{data:[{id:10,authName:"商品管理",level:"0",pid:0,path:"goods",children:[{id:101,authName:"商品列表",pid:101,path:"goods",children:[{id:1002,authName:"添加商品",pid:"104,101",path:"goods"},{id:1003,authName:"删除商品",pid:"104,101",path:"goods"},{id:1001,authName:"商品修改",path:"goods"}]}]},{id:2,authName:"订单管理",level:"0",pid:1,path:"orders",children:[{id:20,authName:"订单列表",pid:101,path:"orders",children:[{id:201,authName:"添加订单",pid:"101,105",path:"orders"},{id:204,authName:"删除订单",pid:"108,109",path:"orders"},{id:202,authName:"订单更新",path:"orders"},{id:203,authName:"获取订单详情",path:"orders"}]}]},{id:3,authName:"角色列表",path:"roles",level:"0",pid:3,children:[{id:31,authName:"添加角色",pid:"31",path:"roles"},{id:32,pid:"33",authName:"角色授权",path:"roles"},{id:303,pid:"303",authName:"获取角色授权",path:"roles"},{id:302,authName:"删除角色",path:"rights"}]},{id:4,authName:"权限管理",path:"rights",level:"0",children:[{id:41,authName:"权限列表",path:"rights",children:[{id:411,authName:"查看权限",path:"roles"},{id:412,authName:"添加用户",path:"roles"},{id:413,authName:"更新用户",path:"roles"},{id:414,authName:"分配用户角色",path:"roles"}]}]}],meta:{msg:"获取分配权限列表成功",status:200}}}),s.a.mock("/roles","get",{data:{data:[{id:1,roleName:"主管",roleDesc:"技术负责人",children:[{id:10,authName:"商品管理",path:"goods",children:[{id:101,authName:"商品列表",path:"goods",children:[{id:1001,authName:"商品修改",path:"goods"}]}]},{id:2,authName:"订单管理",path:"orders",children:[{id:20,authName:"订单列表",path:"orders",children:[{id:201,authName:"添加订单",path:"orders"},{id:204,authName:"删除订单",path:"orders"}]},{id:21,authName:"角色列表",path:"roles",children:[{id:211,authName:"添加角色",path:"roles"},{id:212,authName:"角色授权",path:"roles"}]}]},{id:4,authName:"权限管理",path:"rights",children:[{id:30,authName:"角色列表",path:"rights",children:[{id:301,authName:"添加角色",path:"rights"},{id:302,authName:"删除角色",path:"rights"},{id:303,authName:"取消角色授权",path:"rights"}]},{id:411,authName:"权限列表",path:"roles",children:[{id:412,authName:"查看权限",path:"roles"},{id:413,authName:"添加用户",path:"roles"}]}]}]}],meta:{msg:"获取角色列表成功",status:200}}}),s.a.mock("/rolesrights","delete",{data:{data:[{id:30,roleName:"主管",roleDesc:"技术负责人",children:[{id:101,authName:"商品管理",path:"goods",children:[{id:1001,authName:"商品列表",path:"goods",children:[{id:10001,authName:"商品修改",path:"goods"}]}]},{id:102,authName:"订单管理",path:"orders",children:[{id:1002,authName:"订单列表",path:"orders",children:[{id:10002,authName:"添加订单",path:"orders"},{id:10003,authName:"订单更新",path:"orders"}]},{id:1003,authName:"角色列表",path:"roles",children:[{id:10003,authName:"添加角色",path:"roles"},{id:10004,authName:"添加角色",path:"roles"},{id:10005,authName:"角色授权",path:"roles"},{id:10006,authName:"获取角色授权",path:"roles"}]}]},{id:103,authName:"权限管理",path:"rights",children:[{id:1003,authName:"角色列表",path:"rights",children:[{id:10003,authName:"添加角色",path:"rights"},{id:10004,authName:"删除角色",path:"rights"},{id:10005,authName:"取消角色授权",path:"rights"}]},{id:1004,authName:"权限列表",path:"roles",children:[{id:10004,authName:"查看权限",path:"roles"},{id:10005,authName:"添加用户",path:"roles"},{id:10006,authName:"更新用户",path:"roles"},{id:10007,authName:"分配用户角色",path:"roles"}]}]}]}],meta:{msg:"删除角色成功",status:200}}}),s.a.mock("/rolestip","post",{data:{data:null,meta:{msg:"分配权限更新成功",status:200}}}),s.a.mock("/userrole","put",{data:{data:{id:508,rid:"30",username:"aaaaa",mobile:"18128394056",email:"wurot222@qq.com"},meta:{msg:"设置角色成功",status:200}}}),s.a.mock("/categories","get",{data:{pagenum:1,pageSize:5,total:30,data:[{cat_id:1,cat_name:"大家电",cat_pid:0,cat_level:0,cat_deleted:!1,children:[{cat_id:21,cat_name:"电视",cat_pid:1,cat_level:1,cat_deleted:!1,children:[{cat_id:211,cat_name:"曲面电视",cat_pid:2,cat_level:2,cat_deleted:!1},{cat_id:212,cat_name:"彩色电视",cat_pid:3,cat_level:3,cat_deleted:!1}]}]},{cat_id:4,cat_name:"服装",cat_pid:0,cat_level:0,cat_deleted:!1,children:[{cat_id:41,cat_name:"衣服",cat_pid:1,cat_level:1,cat_deleted:!1,children:[{cat_id:411,cat_name:"男装",cat_pid:2,cat_level:2,cat_deleted:!1},{cat_id:412,cat_name:"女装",cat_pid:3,cat_level:3,cat_deleted:!1}]}]}],meta:{msg:"获取商品分类成功",status:200}}}),s.a.mock("/addcategories","post",{data:{data:{cat_id:64,cat_name:"相恋了",cat_pid:"1",cat_level:"23"},meta:{msg:"新增商品分类成功",status:201}}}),s.a.mock("/categoriesonlyatr","get",{data:{data:[{attr_id:1,attr_name:"版式",cat_id:33,attr_sel:"only",attr_vals:"曲面版式,人工版式,光滑版式,飞面版式,曲度版式"},{attr_id:2,attr_name:"版式",cat_id:34,attr_sel:"only",attr_vals:"曲面版式44,人工版式44,光滑版式44,飞面版式44,曲度版式44"}],meta:{msg:"获取静态参数成功",status:200}}}),s.a.mock("/categoriesmanyatr","get",{data:{data:[{attr_id:2,attr_name:"cp3",cat_id:34,attr_sel:"many",attr_vals:"曲面版式2,人工版式2,光滑版式2,飞面版式2,曲度版式2"},{attr_id:78,attr_name:"cp3",cat_id:45,attr_sel:"many",attr_vals:"曲面版式55,人工版式255,光滑版式255,飞面版式255,曲度版式255"}],meta:{msg:"获取动态参数成功",status:200}}}),s.a.mock("/addcategoriesonlyatr","post",{data:{data:[{attr_id:1,attr_name:"cpo",cat_id:33,attr_sel:"only",attr_write:"list",attr_vals:"a,b,c"}],meta:{msg:"添加静态参数成功",status:200}}}),s.a.mock("/addcategoriesmanyatr","post",{data:{data:[{attr_id:2,attr_name:"cp3",cat_id:34,attr_sel:"many",attr_write:"list2",attr_vals:"a,b,c,d"}],meta:{msg:"添加动态参数成功",status:200}}}),s.a.mock("/editcategoriesonlyatr","post",{data:{data:[{attr_id:1,attr_name:"cpo",cat_id:33,attr_sel:"only",attr_write:"list",attr_vals:"a,b,c"}],meta:{msg:"渲染静态参数成功",status:200}}}),s.a.mock("/editcategoriesmanyatr","post",{data:{data:[{attr_id:2,attr_name:"cp3",cat_id:34,attr_sel:"many",attr_write:"list2",attr_vals:"a,b,c,d"}],meta:{msg:"渲染动态参数成功",status:200}}}),s.a.mock("/editsubcategoriesonlyatr","put",{data:{data:[{attr_id:1,attr_name:"cpo",cat_id:33,attr_sel:"only",attr_write:"list",attr_vals:"a,b,c"}],meta:{msg:"提交修改静态参数成功",status:200}}}),s.a.mock("/editsubcategoriesmanyatr","put",{data:{data:[{attr_id:1,attr_name:"cpo",cat_id:33,attr_sel:"many",attr_write:"list",attr_vals:"a,b,c"}],meta:{msg:"提交修改动态参数成功",status:200}}}),s.a.mock("/deletecategories","delete",{data:{data:null,meta:{msg:"删除成功",status:200}}})},a342:function(t,e,a){},aede:function(t,e,a){},cebe:function(t,e){t.exports=axios}});
//# sourceMappingURL=app.3137d2e2.js.map