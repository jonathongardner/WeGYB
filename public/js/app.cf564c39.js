(function(e){function t(t){for(var o,c,i=t[0],s=t[1],l=t[2],u=0,d=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},c={app:0},r={app:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d216dc7":"f15f92da","chunk-62882c50":"1afe5edf"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-62882c50":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d216dc7":"31d6cfe0","chunk-62882c50":"a4bce8ff"}[e]+".css",r=s.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===o||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d3b7");var o=n("be92"),c=n("2c28"),r=Object(o["b"])("settings",{state:function(){return{version:"",flipCamera:Object(c["useStorage"])("flipCamera",!1),staleImage:Object(c["useStorage"])("staleImage",.5)}},actions:{reset:function(){console.log("Reset!"),this.flipCamera=!1,this.staleImage=.5},upsertVersion:function(){var e=this;this.version||fetch("/api/v1/version").then((function(e){return e.json()})).then((function(t){var n=t.version;return e.version=n}))}}})},1277:function(e,t,n){},"12fb":function(e,t,n){},"19b3":function(e,t,n){"use strict";n("f5c1")},"1b17":function(e,t,n){"use strict";n("d4de")},2895:function(e,t,n){},"2e59":function(e,t,n){},"4a34":function(e,t,n){"use strict";n("12fb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=n("be92"),r={id:"the-app"};function a(e,t,n,c,a,i){var s=Object(o["resolveComponent"])("nav-bar"),l=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createVNode"])(s,{id:"nav"}),Object(o["createVNode"])(l,{id:"body"})])}var i=function(e){return Object(o["pushScopeId"])("data-v-57100780"),e=e(),Object(o["popScopeId"])(),e},s=Object(o["createTextVNode"])("‹ Back"),l=i((function(){return Object(o["createElementVNode"])("span",null," WeGYB ",-1)}));function u(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("nav",{class:Object(o["normalizeClass"])(["navbar",{big:!a.back}])},[Object(o["createVNode"])(i,{to:{name:"Home"}},{default:Object(o["withCtx"])((function(){return[s]})),_:1}),l],2)}var d={name:"NavBar",computed:{back:function(){return this.$route.meta.back}}},f=(n("5d55"),n("6b0d")),h=n.n(f);const p=h()(d,[["render",u],["__scopeId","data-v-57100780"]]);var b=p,m={name:"App",components:{NavBar:b}};n("4a34");const v=h()(m,[["render",a]]);var g=v,j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var O=n("6c02"),k=(n("b0c0"),{class:"seperated-flex"}),w={class:"u-pull-right"},y=["href","download"],S=["onClick"];function N(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",k,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.recordings,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:e.name},[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("span",w,[Object(o["createElementVNode"])("a",{href:e.downloadPath,download:e.name,class:"button button-primary"}," Download ",8,y),Object(o["createElementVNode"])("button",{onClick:function(t){return a.deleteRecording(e)},class:"button"}," Delete ",8,S)])])})),128))])}n("4de4");var V={name:"Recordings",data:function(){return{recordings:[]}},methods:{getRecordings:function(){var e=this;fetch("/api/v1/recordings").then((function(e){return e.json()})).then((function(t){return e.recordings=t})).catch((function(e){return console.log(e)}))},deleteRecording:function(e){var t=this;confirm("Are you sure you want to delete ".concat(e.name,"?"))&&fetch(e.downloadPath,{method:"DELETE"}).then((function(){t.recordings=t.recordings.filter((function(t){return t!==e}))})).catch((function(e){return console.log(e)}))}},created:function(){this.getRecordings()}};n("d213");const C=h()(V,[["render",N],["__scopeId","data-v-bac079c2"]]);var E=C,x={class:"seperated-flex"},B={id:"cover"};function T(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("stat"),s=Object(o["resolveComponent"])("my-back"),l=Object(o["resolveComponent"])("controls");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["createVNode"])(i,{value:r.time,label:"Time"},null,8,["value"]),Object(o["createVNode"])(i,{value:r.distance,label:"Distance",units:"M"},null,8,["value"]),Object(o["createVNode"])(i,{value:r.speed,label:"Speed",units:"MPH"},null,8,["value"]),Object(o["createVNode"])(i,{value:r.avgSpeed,label:"Average Speed",units:"MPH"},null,8,["value"]),Object(o["createElementVNode"])("div",B,[Object(o["createVNode"])(s),Object(o["createVNode"])(l,{riding:r.riding,"onUpdate:riding":a.toggleRide},null,8,["riding","onUpdate:riding"])])])}var _={class:"ride-component"},M={class:"value"},I={key:0},R={class:"label"};function P(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",_,[Object(o["createElementVNode"])("div",M,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.value)+" ",1),n.units?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",I,Object(o["toDisplayString"])(n.units),1)):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",R,Object(o["toDisplayString"])(n.label),1)])}var D={name:"stat",props:{value:{type:String,required:!0},label:{type:String,required:!0},units:{type:String,required:!1,default:""}}};n("f46d");const A=h()(D,[["render",P],["__scopeId","data-v-5b87596e"]]);var q=A;function H(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])(["play",{paused:n.riding}]),onClick:t[0]||(t[0]=function(){return a.toggleRide&&a.toggleRide.apply(a,arguments)})},null,2)])}var L={name:"controls",props:{riding:{type:Boolean,required:!0}},methods:{toggleRide:function(){this.$emit("update:riding",!this.riding)}}};n("19b3");const W=h()(L,[["render",H],["__scopeId","data-v-548a7a1d"]]);var F=W;function z(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("my-back",!0);return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(i,null,null,512)),[[o["vShow"],r.showVideo]])}var U=n("1da1"),$=(n("96cf"),function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))}),J=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){var o=this;clearTimeout(t),t=setTimeout((function(){e.apply(o)}),n)}},G={class:"my-back"};function K(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",G,[Object(o["createElementVNode"])("canvas",{ref:"myBack",class:Object(o["normalizeClass"])({flip:e.flipCamera})},null,2)])}n("cb29");var Y=n("03fd"),Q=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.canvas.width,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e.canvas.height,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:.5,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:.5;a<0&&(a=0),i<0&&(i=0),a>1&&(a=1),i>1&&(i=1);var s=t.width,l=t.height,u=Math.min(c/s,r/l),d=s*u,f=l*u,h=1,p=1,b=1,m=1,v=1;d<c&&(v=c/d),Math.abs(v-1)<1e-14&&f<r&&(v=r/f),d*=v,f*=v,b=s/(d/c),m=l/(f/r),h=(s-b)*a,p=(l-m)*i,h<0&&(h=0),p<0&&(p=0),b>s&&(b=s),m>l&&(m=l),e.drawImage(t,h,p,b,m,n,o,c,r)},X={name:"my-back",data:function(){var e=new Image;return{image:e,socket:null,ctx:null}},computed:Object(c["c"])(Y["a"],["flipCamera"]),methods:{setImageSrc:function(e){var t=e.data;this.image.src="data:image/jpeg;base64,"+t},imageLoad:function(){this.clearIfStale(),Q(this.ctx,this.image)},clearImage:function(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)},clearIfStale:function(){},clearIfStaleRaw:function(){this.clearImage();for(var e=this.ctx.canvas.width/4,t=0;t<4;t++)this.ctx.beginPath(),this.ctx.rect(e*t,0,e,this.ctx.canvas.height),this.ctx.fillStyle=t%2===0?"blue":"black",this.ctx.fill()},setSocket:function(){var e=this;this.socket=new WebSocket("ws://".concat(location.host,"/api/v1/mjpeg")),this.socket.onmessage=this.setImageSrc,this.socket.onclose=function(t){console.log("Socket is closed. Reconnect will be attempted in 1 second.",t.reason),setTimeout((function(){return e.setSocket()}),1e3)},this.socket.onerror=function(t){console.error("Socket encountered error: ",t.message),e.socket.close()}}},mounted:function(){this.ctx=this.$refs.myBack.getContext("2d"),this.image.onload=this.imageLoad,this.setSocket(),this.clearIfStale=J(this.clearIfStaleRaw,1e3*this.settings.staleImage)},unmounted:function(){this.socket.onclose=function(){},this.socket.close()}};n("a25a");const Z=h()(X,[["render",K],["__scopeId","data-v-6912016c"]]);var ee=Z,te={name:"my-back-with-toggle",components:{MyBack:ee},data:function(){return{showVideo:!0,toggleTimeout:null}},inject:["touchEvents"],methods:{peak:function(){var e=this;this.clearToggleTimeout(),this.showVideo=!0,this.toggleTimeout=setTimeout((function(){e.showVideo=!1,e.clearToggleTimeout()}),4e3)},toggle:function(){this.clearToggleTimeout(),this.showVideo=!this.showVideo},clearToggleTimeout:function(){this.toggleTimeout&&(clearInterval(this.toggleTimeout),this.toggleTimeout=null)},receivedStream:function(){this.peak()},receivedMessage:function(){this.peak()}},created:function(){var e=this;return Object(U["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$(1e3);case 2:e.touchEvents.on("tap",e.peak),e.touchEvents.on("dbltap",e.toggle);case 4:case"end":return t.stop()}}),t)})))()},unmounted:function(){var e=this;return Object(U["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.touchEvents.off("tap"),e.touchEvents.off("dbltap");case 2:case"end":return t.stop()}}),t)})))()}};const ne=h()(te,[["render",z]]);var oe=ne,ce=n("d4ec"),re=n("bee2"),ae=n("ade3"),ie=(n("a15b"),n("d81d"),function(){return(new Date).getTime()/1e3}),se=function(e){var t=Math.floor(e/3600),n=Math.floor(e/60)%60,o=e%60;return[t,n,o].map(le).join(":")},le=function(e){return e<10?"0"+e:""+e},ue=function(e){var t=Math.floor(e),n=Math.round(100*e)%100;return le(t)+"."+le(n)},de=function(e,t){var n=e.longitude,o=e.latitude,c=t.longitude,r=t.latitude,a=6371,i=fe(r-o),s=fe(c-n),l=Math.sin(i/2)*Math.sin(i/2)+Math.cos(fe(o))*Math.cos(fe(r))*Math.sin(s/2)*Math.sin(s/2),u=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),d=a*u;return d},fe=function(e){return e*Math.PI/180},he=function(){function e(t){var n=this;Object(ce["a"])(this,e),Object(ae["a"])(this,"updateDistance",(function(e){if(!(e.coords.accuracy>1e4)){var t=n.prevCoords;if(n.prevCoords=e.coords,t){var o=e.timestamp/1e3-n.startTime;n.distance+=de(t,e.coords),n.speed=e.speed||0,n.avgSpeed=o>0?3600*n.distance/o:0}}})),this.callbackMethod=t}return Object(re["a"])(e,[{key:"start",value:function(){var e=this;this.callback||(this.startTime=ie(),this.distance=0,this.speed=0,this.avgSpeed=0,this.callback=setInterval((function(){e.callbackWithStats()}),200),navigator.geolocation.watchPosition(this.updateDistance))}},{key:"stop",value:function(){clearInterval(this.callback),navigator.geolocation.clearWatch(this.callback),this.callback=null}},{key:"callbackWithStats",value:function(){var e=Math.round(ie()-this.startTime);return this.callbackMethod({seconds:e,time:se(e),distance:ue(this.distance),speed:ue(this.speed),avgSpeed:ue(this.avgSpeed)})}}]),e}(),pe={name:"Ride",components:{Stat:q,Controls:F,MyBack:oe},data:function(){return{riding:!1,tracker:new he(this.updateRideStats),time:"00:00:00",distance:"00.00",speed:"00.00",avgSpeed:"00.00"}},methods:{updateRideStats:function(e){var t=e.time,n=e.distance,o=e.speed,c=e.avgSpeed;this.time=t,this.distance=n,this.speed=o,this.avgSpeed=c},toggleRide:function(){this.riding?(this.riding=!1,this.tracker.stop()):(this.riding=!0,this.tracker.start())}},beforeRouteLeave:function(e,t,n){var o=!this.riding||window.confirm("Do you want to cancel this ride?");o||this.tracker.stop(),n(o)}};n("c8b4");const be=h()(pe,[["render",T],["__scopeId","data-v-0c220297"]]);var me=be,ve={class:"seperated-flex"},ge=Object(o["createTextVNode"])("Ride"),je=Object(o["createTextVNode"])("Camera"),Oe=Object(o["createTextVNode"])("Recordings"),ke=Object(o["createTextVNode"])("Settings"),we=Object(o["createTextVNode"])("Help");function ye(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("router-link"),s=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ve,[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(i,{to:{name:"Ride"}},{default:Object(o["withCtx"])((function(){return[ge]})),_:1})]),Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(i,{to:{name:"Camera"}},{default:Object(o["withCtx"])((function(){return[je]})),_:1})]),Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(i,{to:{name:"Recordings"}},{default:Object(o["withCtx"])((function(){return[Oe]})),_:1})]),Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(i,{to:{name:"Settings"}},{default:Object(o["withCtx"])((function(){return[ke]})),_:1})]),Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(i,{to:{name:"Help"}},{default:Object(o["withCtx"])((function(){return[we]})),_:1})]),Object(o["createVNode"])(s)])}var Se={name:"Home",components:{}};n("8954");const Ne=h()(Se,[["render",ye],["__scopeId","data-v-70a49b0e"]]);var Ve=Ne,Ce={class:"seperated-flex"},Ee=Object(o["createTextVNode"])("×");function xe(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("my-back"),s=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Ce,[Object(o["createVNode"])(i),Object(o["createVNode"])(s,{class:"close",to:{name:"Home"}},{default:Object(o["withCtx"])((function(){return[Ee]})),_:1})])}var Be={name:"Camera",components:{MyBack:ee},methods:{back:function(){console.log("Back")}}};n("1b17");const Te=h()(Be,[["render",xe],["__scopeId","data-v-8707c5cc"]]);var _e=Te,Me=[{path:"/ride",name:"Ride",component:me,meta:{back:!0}},{path:"/recordings",name:"Recordings",component:E,meta:{back:!0}},{path:"/help",name:"Help",component:function(){return n.e("chunk-2d216dc7").then(n.bind(null,"c3ef"))},meta:{back:!0,footer:!0}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-62882c50").then(n.bind(null,"26d3"))},meta:{back:!0,footer:!0}},{path:"/",name:"Home",component:Ve,children:[{path:"/camera",name:"Camera",component:_e}],meta:{footer:!0}}],Ie=Object(O["a"])({history:Object(O["b"])(),routes:Me}),Re=Ie,Pe=n("c8b5"),De=n.n(Pe),Ae=Object(re["a"])((function e(t){var n=this;Object(ce["a"])(this,e),Object(ae["a"])(this,"on",(function(e,t){n.events[e]=t})),Object(ae["a"])(this,"off",(function(e){delete n.events[e]})),Object(ae["a"])(this,"trigger",(function(e){e.target.matches("button")||n.events[e.type]&&n.events[e.type]()}));var o=new De.a.Tap({event:"tap",taps:1}),c=new De.a.Tap({event:"dbltap",taps:2});c.recognizeWith(o),o.requireFailure(c);var r=new De.a.Manager(t);r.add([c,o]),r.on("tap",this.trigger),r.on("dbltap",this.trigger),this.events={}})),qe=Ae,He=Object(c["a"])();Object(o["createApp"])(g).use(Re).use(He).provide("touchEvents",new qe(document.querySelector("#app"))).mount("#app")},"5d55":function(e,t,n){"use strict";n("8276")},"6ff6":function(e,t,n){},8276:function(e,t,n){},8954:function(e,t,n){"use strict";n("1277")},a25a:function(e,t,n){"use strict";n("f82a")},c8b4:function(e,t,n){"use strict";n("6ff6")},d213:function(e,t,n){"use strict";n("2e59")},d4de:function(e,t,n){},f46d:function(e,t,n){"use strict";n("2895")},f5c1:function(e,t,n){},f82a:function(e,t,n){}});
//# sourceMappingURL=app.cf564c39.js.map