(function(e){function a(a){for(var n,o,c=a[0],l=a[1],d=a[2],i=0,f=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(a);while(f.length)f.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,a=0;a<u.length;a++){for(var t=u[a],n=!0,o=1;o<t.length;o++){var c=t[o];0!==r[c]&&(n=!1)}n&&(u.splice(a--,1),e=l(l.s=t[0]))}return e}var n={},o={app:0},r={app:0},u=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-206f528e":"7103c5c4","chunk-32d556b9":"e5b586f4","chunk-77b7840f":"fde87d1c","chunk-77ec83f2":"ddc2f2b4","chunk-2d0cc445":"e9c18923","chunk-2d216bb4":"7cc52cce","chunk-2d225dc4":"9f000861","chunk-7f670ea2":"dde5a82b"}[e]+".js"}function l(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var a=[],t={"chunk-32d556b9":1,"chunk-77b7840f":1,"chunk-77ec83f2":1,"chunk-7f670ea2":1};o[e]?a.push(o[e]):0!==o[e]&&t[e]&&a.push(o[e]=new Promise((function(a,t){for(var n="css/"+({}[e]||e)+"."+{"chunk-206f528e":"31d6cfe0","chunk-32d556b9":"9881b967","chunk-77b7840f":"0afc2627","chunk-77ec83f2":"971c1166","chunk-2d0cc445":"31d6cfe0","chunk-2d216bb4":"31d6cfe0","chunk-2d225dc4":"31d6cfe0","chunk-7f670ea2":"f886a0b1"}[e]+".css",r=l.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var d=u[c],i=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===n||i===r))return a()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){d=f[c],i=d.getAttribute("data-href");if(i===n||i===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],m.parentNode.removeChild(m),t(u)},m.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(m)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var u=new Promise((function(a,t){n=r[e]=[a,t]}));a.push(n[2]=u);var d,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(e);var f=new Error;d=function(a){i.onerror=i.onload=null,clearTimeout(m);var t=r[e];if(0!==t){if(t){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,t[1](f)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:i})}),12e4);i.onerror=i.onload=d,document.head.appendChild(i)}return Promise.all(a)},l.m=e,l.c=n,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(t,n,function(a){return e[a]}.bind(null,n));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/",l.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=a,d=d.slice();for(var f=0;f<d.length;f++)a(d[f]);var m=i;u.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("85ec")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("b0c0");var n=t("2b0e"),o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],u=(t("034f"),t("2877")),c={},l=Object(u["a"])(c,o,r,!1,null,null,null),d=l.exports,i=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));n["default"].use(i["a"]);var f=i["a"].prototype.push;i["a"].prototype.push=function(e){return f.call(this,e).catch((function(e){return e}))};var m=[{path:"/",name:"Main",redirect:"/home",component:function(){return t.e("chunk-7f670ea2").then(t.bind(null,"cd56"))},children:[{path:"/home",name:"Home",component:function(){return Promise.all([t.e("chunk-206f528e"),t.e("chunk-77b7840f")]).then(t.bind(null,"16c0"))}},{path:"/user",name:"User",component:function(){return Promise.all([t.e("chunk-206f528e"),t.e("chunk-77ec83f2")]).then(t.bind(null,"7368"))}},{path:"/mall",name:"Mall",component:function(){return t.e("chunk-2d0cc445").then(t.bind(null,"4ccc"))}},{path:"/page1",name:"Page1",component:function(){return t.e("chunk-2d216bb4").then(t.bind(null,"c45b"))}},{path:"/page2",name:"Page2",component:function(){return t.e("chunk-2d225dc4").then(t.bind(null,"e5ca"))}}]},{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-206f528e"),t.e("chunk-32d556b9")]).then(t.bind(null,"a2c0"))}}],s=new i["a"]({routes:m,mode:"hash"}),h=s,p=t("2f62"),b=t("852e"),y=t.n(b),v=t("96eb"),k=t.n(v),g={state:{token:""},mutations:{setToken:function(e){e.token=k.a.Random.string(20,25),y.a.set("token",e.token,{expires:1})},clearToken:function(e){e.token="",y.a.remove("token")},getToken:function(e){e.token=e.token||y.a.get("token")}}};n["default"].use(p["a"]);for(var R={state:{isCollapse:!1,tabList:[{label:"首页",path:"/home"}],currentActove:null},mutations:{drop:function(e){e.isCollapse=!e.isCollapse},breakCrump:function(e,a){var t={label:"首页",path:"/home"};"首页"===a.label?e.tabList=[t]:Object.prototype.hasOwnProperty.call(a,"parent")?e.tabList=[t,{label:a.parent},{label:a.label,path:a.path}]:e.tabList=[t,{label:a.label,path:a.path}]},breakCrump2:function(e,a){e.tabList=[{label:"首页",path:"/home"},{label:a[0],path:null},{label:a[1].label,path:a[1].path}]}}},w=new p["a"].Store({modules:{tab:R,user:g}}),B=t("5c96"),O=t.n(B),D=(t("0fae"),t("bc3a")),P=t.n(D),E=[],T={getHomeData:function(){for(var e=0;e<6;e++)E.push(k.a.mock({"苹果":k.a.Random.float(100,8e3,0,0),vivo:k.a.Random.float(100,8e3,0,0),oppo:k.a.Random.float(100,8e3,0,0),"魅族":k.a.Random.float(100,8e3,0,0),"三星":k.a.Random.float(100,8e3,0,0),"小米":k.a.Random.float(100,8e3,0,0)}));return{code:200,data:{viewData:[{name:"苹果",value:110},{name:"vivo",value:150},{name:"oppo",value:120},{name:"魅族",value:170},{name:"三星",value:120},{name:"小米",value:200}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:53,active:200},{date:"周六",new:5,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20220303","20220304","20200305","20200306","20200307","20200308"],data:E},tableList:[{name:"oppo",todayBuy:k.a.Random.float(100,8e3,0,0),monthBuy:k.a.Random.float(100,8e3,0,0),totalBuy:k.a.Random.float(100,8e3,0,0)},{name:"vivo",todayBuy:k.a.Random.float(100,8e3,0,0),monthBuy:k.a.Random.float(100,8e3,0,0),totalBuy:k.a.Random.float(100,8e3,0,0)},{name:"苹果",todayBuy:k.a.Random.float(100,8e3,0,0),monthBuy:k.a.Random.float(100,8e3,0,0),totalBuy:k.a.Random.float(100,8e3,0,0)},{name:"小米",todayBuy:k.a.Random.float(100,8e3,0,0),monthBuy:k.a.Random.float(100,8e3,0,0),totalBuy:k.a.Random.float(100,8e3,0,0)},{name:"三星",todayBuy:k.a.Random.float(100,8e3,0,0),monthBuy:k.a.Random.float(100,8e3,0,0),totalBuy:k.a.Random.float(100,8e3,0,0)},{name:"魅族",todayBuy:k.a.Random.float(100,8e3,0,0),monthBuy:k.a.Random.float(100,8e3,0,0),totalBuy:k.a.Random.float(100,8e3,0,0)},{name:"魅族",todayBuy:k.a.Random.float(100,8e3,0,0),monthBuy:k.a.Random.float(100,8e3,0,0),totalBuy:k.a.Random.float(100,8e3,0,0)},{name:"魅族",todayBuy:k.a.Random.float(100,8e3,0,0),monthBuy:k.a.Random.float(100,8e3,0,0),totalBuy:k.a.Random.float(100,8e3,0,0)},{name:"魅族",todayBuy:k.a.Random.float(100,8e3,0,0),monthBuy:k.a.Random.float(100,8e3,0,0),totalBuy:k.a.Random.float(100,8e3,0,0)}]}}}},j=(t("a434"),t("4d63"),t("c607"),t("ac1f"),t("2c3e"),t("25f0"),t("466d"),t("4de4"),[]),x=0;x<50;x++)j.push(k.a.mock({id:"@id",name:k.a.Random.cname(),age:k.a.Random.integer(20,60),sex:k.a.Random.string("男女",1,1),birth:k.a.Random.date("yyyy-MM-dd"),addr:k.a.Random.county(!0)}));var S={getUserData:function(){return j},addUserData:function(e){return j.push(JSON.parse(e.body)),j},editUserData:function(e){var a=JSON.parse(e.body);j.forEach((function(e,t){e.id===a.id&&(j[t]=a)}))},delUserData:function(e){var a=e.body;return j.forEach((function(e,t){e.id===a&&j.splice(t,1)})),j},searchUserData:function(e){var a=new RegExp("[\\?|&]keyword=([^&]*)(&|$)"),t=decodeURI(e.url.match(a)[1]);return j.filter((function(e){return-1!=e.name.indexOf(t)}))},loginTest:function(e){for(var a=[{username:"admin",password:"123456"}],t=JSON.parse(e.body),n=t.username,o=t.password,r=0,u=a;r<u.length;r++){var c=u[r];if(c.username===n&&c.password===o)return{code:200}}return{code:400}}};k.a.mock("/homeData",T.getHomeData),k.a.mock(/user\/get/,S.getUserData),k.a.mock(/user\/add/,S.addUserData),k.a.mock(/user\/edit/,S.editUserData),k.a.mock(/user\/del/,S.delUserData),k.a.mock(/user\/search/,"get",S.searchUserData),k.a.mock("/user/login","post",S.loginTest),n["default"].config.productionTip=!1,n["default"].use(O.a),n["default"].prototype.$axios=P.a,h.beforeEach((function(e,a,t){w.commit("getToken");var n=w.state.user.token;n||"login"===e.name?n&&"login"==e.name?t({name:"Home"}):t():t({name:"login"})})),new n["default"]({router:h,store:w,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,a,t){}});
//# sourceMappingURL=app.a668b525.js.map