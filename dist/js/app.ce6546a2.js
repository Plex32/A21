(function(){"use strict";var n={2564:function(n,e,t){var o=t(9242),r=t(3396),i=t(6949);const l=(0,r._)("img",{alt:"AltStream Logo",src:i,width:"200"},null,-1);function u(n,e,t,o,i,u){const a=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)(r.HY,null,[l,(0,r.Wm)(a,{msg:"Welcome to the Public JitStreamer portal!"})],64)}var a=t(7139);const c=n=>((0,r.dD)("data-v-1753c02a"),n=n(),(0,r.Cn)(),n),s={class:"hello"},f=c((()=>(0,r._)("p",null,[(0,r.Uk)(" For a guide on how to set up your device, please visit the "),(0,r._)("a",{href:"https://discord.gg/WsT2hcwRVy",target:"_blank",rel:"noopener"},"official Discord server"),(0,r.Uk)(". ")],-1))),p=c((()=>(0,r._)("h3",null,"Enter your UDID in the box below",-1))),d=c((()=>(0,r._)("h3",null,"Upload your mobile pairing file",-1))),h={class:"form-group"},m=c((()=>(0,r._)("div",{class:"form-group"},[(0,r._)("button",{class:"btn btn-success btn-block btn-lg"},"Upload")],-1)));function g(n,e,t,i,l,u){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("h1",null,(0,a.zw)(t.msg),1),f,p,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>n.udid=e),placeholder:"UDID",onKeyup:e[1]||(e[1]=(0,o.D2)(((...e)=>n.connect&&n.connect(...e)),["enter"]))},null,544),[[o.nr,n.udid]]),d,(0,r._)("form",{onSubmit:e[3]||(e[3]=(0,o.iM)(((...n)=>u.handleSubmit&&u.handleSubmit(...n)),["prevent"]))},[(0,r._)("div",h,[(0,r._)("input",{type:"file",onChange:e[2]||(e[2]=(...n)=>u.uploadFile&&u.uploadFile(...n)),multiple:""},null,32)]),m],32)])}var v=t(6265),b=t.n(v),w={name:"HelloWorld",props:{msg:String},methods:{handleSubmit(n){n.preventDefault();const e=new FormData;e.append("file",this.file),e.append("udid",this.udid),console.log(e),b().post("/api/upload",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(n){console.log(n);const e=window.URL.createObjectURL(new Blob([n.data])),t=document.createElement("a");t.href=e})).catch((function(n){console.log(n),alert("Crap went wrong when uploading your stuff")}))},uploadFile(n){this.file=n.target.files[0]}}},y=t(89);const _=(0,y.Z)(w,[["render",g],["__scopeId","data-v-1753c02a"]]);var O=_,D={name:"App",components:{HelloWorld:O}};const j=(0,y.Z)(D,[["render",u]]);var k=j;(0,o.ri)(k).mount("#app")},6949:function(n,e,t){n.exports=t.p+"img/logo.5518e5fb.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,i){if(!o){var l=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],i=n[s][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||l>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[a])}))?o.splice(a--,1):(u=!1,i<l&&(l=i));if(u){n.splice(s--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[o,r,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,l=o[0],u=o[1],a=o[2],c=0;if(l.some((function(e){return 0!==n[e]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var s=a(t)}for(e&&e(o);c<l.length;c++)i=l[c],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},o=self["webpackChunkjitstreamersite"]=self["webpackChunkjitstreamersite"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2564)}));o=t.O(o)})();
//# sourceMappingURL=app.ce6546a2.js.map