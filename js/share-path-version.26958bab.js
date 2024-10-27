(self["webpackChunkvue_typescript_boilerplate"]=self["webpackChunkvue_typescript_boilerplate"]||[]).push([[651],{5516:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-modal",{attrs:{id:"decryptModal"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("b-button",{on:{click:t.submitFile}},[t._v("Submit")])]},proxy:!0}])},[t.path.length>0?e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",[t._v(t._s(t.path))]),e("b-col",[t._v("AES + DES")]),e("b-col",[e("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.decKeyFile,callback:function(e){t.decKeyFile=e},expression:"decKeyFile"}})],1)],1)],1):t._e()],1)},o=[],i=r(8598),a=r(655),l=r(7186),s=r(7838),u=r(2195);let c=class extends u.w3{constructor(...t){super(...t),(0,i.Z)(this,"path",""),(0,i.Z)(this,"version",""),(0,i.Z)(this,"decKeyFile",null),(0,i.Z)(this,"onSuccessCallback",void 0)}async submitFile(){try{const t=await this.decryptImage();t&&this.path&&this.onSuccessCallback&&this.onSuccessCallback(this.path,this.version,t),this.path="",this.version="",this.onSuccessCallback=void 0,this.$bvModal.hide("decryptModal")}catch(t){this.$toast.error("Error decrypting image: "+t?.message??""),console.error(t)}}async decryptImage(){if(this.decKeyFile){const t=await new Promise(((t,e)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=e,r.readAsDataURL(this.decKeyFile)}));if("string"===typeof t){const e=await(0,s.Jx)(t);return e}}throw new Error("Empty file")}mounted(){l.$.$on("showDecryptModal",((t,e,r)=>{this.path=t,this.version=e,this.onSuccessCallback=r,this.$bvModal.show("decryptModal")}))}};c=(0,a.gn)([(0,u.wA)({})],c);var h=c,f=h,d=r(1001),p=(0,d.Z)(f,n,o,!1,null,null,null),g=p.exports},3299:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),e("a",{attrs:{target:"_blank",href:"https://github.com/Vue-Boilerplates"}},[t._v("GitHub")]),t._v(" | "),e("a",{attrs:{target:"_blank",href:"https://github.com/Vue-Boilerplates/vue-typescript-boilerplate"}},[t._v("v1.0.0")])],1)},o=[],i=r(655),a=r(2195);let l=class extends a.w3{};l=(0,i.gn)([(0,a.wA)({name:"Navbar"})],l);var s=l,u=s,c=r(1001),h=(0,c.Z)(u,n,o,!1,null,null,null),f=h.exports},691:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return v}});var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("DecryptModal")],1)},o=[],i=r(8598),a=r(655),l=r(5516),s=r(3299),u=r(2195),c=r(538),h=r(8022),f=r(7186),d=r(8764);let p=class extends c["default"]{constructor(...t){super(...t),(0,i.Z)(this,"fullPath","")}mounted(){this.fullPath=d.Buffer.from(decodeURIComponent(this.$route.params.path),"base64").toString("utf8"),console.log(this.$route.params.path,this.fullPath);const t=decodeURIComponent(this.$route.params.version);f.$.$emit("showDecryptModal",this.fullPath.split(":")[0],t,this._downloadFile.bind(this))}async _downloadFile(t,e,r){const[n,o]=this.fullPath.split(":"),i=this.$cookies.get("jwtToken");if(i){const t=await(0,h.U2)(`/api/download?path=${n}&version=${e}&key=${r}&uid=${o}`,i),a=await t.blob(),l=document.createElement("a");document.body.appendChild(l),l.style.display="none";const s=window.URL.createObjectURL(a);l.href=s,l.download=n,l.click(),URL.revokeObjectURL(s),l.remove(),this.$toast.info("Downloaded file successfully",{message:"Downloaded file successfully",position:"top",duration:5e3})}}};p=(0,a.gn)([(0,u.wA)({name:"Share",components:{Navbar:s.Z,DecryptModal:l.Z}})],p);var g=p,m=g,w=r(1001),y=(0,w.Z)(m,n,o,!1,null,null,null),v=y.exports},8764:function(t){"undefined"===typeof Buffer&&(Buffer=void 0),function(){"use strict";function e(){return Array}"undefined"===typeof Buffer&&(Buffer=e()),t.exports=Buffer}()},8022:function(t,e,r){"use strict";r.d(e,{vG:function(){return l},U2:function(){return i},v_:function(){return o}});const n="";async function o(t,e,r,o=!0){const i={};return r&&(i["authorization"]="Bearer "+r),fetch(n+t,{method:"POST",body:o?JSON.stringify(e):e,...a(r)})}async function i(t,e){return fetch(n+t,{method:"GET",...a(e)})}function a(t){const e={};return t&&(e["authorization"]="Bearer "+t),{headers:e}}function l(t){let e="";const r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=t;n>0;--n)e+=r[Math.floor(Math.random()*r.length)];return e}},7838:function(t,e,r){"use strict";r.d(e,{Jx:function(){return y},cv:function(){return w}});const n=3,o=1,i=16;function a(t){return t+1}function l(t,e){return new Array(3*e).fill(255)}function s(t,e,r){for(let n=0;n<16;n++)if(255!==t[e+4*n])return!1;return!0}var u={t:n,threshold:o,codeUnitSize:i,args:a,messageDelimiter:l,messageCompleted:s};function c(t){if(isNaN(t)||!isFinite(t)||t%1||t<2)return!1;if(t%2===0)return 2===t;if(t%3===0)return 3===t;const e=Math.sqrt(t);for(let r=5;r<=e;r+=6){if(t%r===0)return!1;if(t%(r+2)===0)return!1}return!0}function h(t){for(let e=t;1;e+=1)if(c(e))return e}function f(t,e,r){let n=0;for(let o=r.start||0;o<e;o+=r.inc||1)n+=t(o)||0;return 0===n&&r.defValue?r.defValue:n}function d(t,e,r){let n=1;for(let o=r.start||0;o<e;o+=r.inc||1)n*=t(o)||1;return 1===n&&r.defValue?r.defValue:n}function p(t,e,r){let n=new Array(r-1);for(let o=0;o<r;o+=1)n[o]=t(o>=e?o+1:o);return n}async function g(t){return new Promise(((e,r)=>{let n=new Image;n.src=t,n.onload=()=>e(n),n.onerror=t=>r(t)}))}var m={isPrime:c,findNextPrime:h,sum:f,product:d,createArrayFromArgs:p,loadImg:g};async function w(t,e,r={}){const n=await((t,e)=>{if("string"===typeof t)return m.loadImg(t);if(t instanceof HTMLImageElement)return m.loadImg(t.src);throw new Error("IllegalInput: The input image is neither an URL string nor an image.")})(e),o=r.t||u.t,i=r.threshold||u.threshold,a=r.codeUnitSize||u.codeUnitSize,l=m.findNextPrime(Math.pow(2,o)),s=r.args||u.args,c=r.messageDelimiter||u.messageDelimiter;if(!o||o<1||o>7)throw new Error('IllegalOptions: Parameter t = " + t + " is not valid: 0 < t < 8');const h=document.createElement("canvas"),f=h.getContext("2d");if(null===f)throw new Error("NullContext: Context is null");h.style.display="none",h.width=r.width||n.width,h.height=r.height||n.height,r.height&&r.width?f.drawImage(n,0,0,r.width,r.height):f.drawImage(n,0,0);const d=f.getImageData(0,0,h.width,h.height),p=d.data,g=a/o>>0,w=a%o,y=[];let v,b,_=0;for(let u=0;u<=t.length;u++){const e=t.charCodeAt(u)||0,r=w*u%o;if(r>0&&_){let n=Math.pow(2,o-r)-1;const i=Math.pow(2,a)*(1-Math.pow(2,-r)),l=(e&n)<<r,s=(_&i)>>a-r;if(y.push(l+s),u<t.length){n=Math.pow(2,2*o-r)*(1-Math.pow(2,-o));for(let t=1;t<g;t++)v=e&n,y.push(v>>(t-1)*o+(o-r)),n<<=o;w*(u+1)%o===0?(n=Math.pow(2,a)*(1-Math.pow(2,-o)),v=e&n,y.push(v>>a-o)):w*(u+1)%o+(o-r)<=o&&(v=e&n,y.push(v>>(g-1)*o+(o-r)))}}else if(u<t.length){let t=Math.pow(2,o)-1;for(let r=0;r<g;r++)v=e&t,y.push(v>>r*o),t<<=o}_=e}let I=0;const M=c(y,i);for(b=0;4*(b+i)<=p.length&&b+i<=y.length;b+=i){let t=[];for(let e=0;e<i&&e+b<y.length;e++){let r=0;for(let t=b;t<i+b&&t<y.length;t++)r+=y[t]*Math.pow(s(e),t-b);t[e]=255-l+1+r%l}for(let e=4*b;e<4*(b+t.length)&&e<p.length;e+=4)p[e+3]=t[e/4%i];I=t.length}let C;for(C=b+I;C-(b+I)<M.length&&4*(b+M.length)<p.length;C++)p[4*C+3]=M[C-(b+I)];for(let u=4*(C+1)+3;u<p.length;u+=4)p[u]=255;return f.putImageData(new ImageData(p,d.width,d.height),0,0),h.toDataURL()}async function y(t,e={}){const r=await((t,e)=>{if("string"===typeof t)return m.loadImg(t);if(t instanceof HTMLImageElement)return m.loadImg(t.src);throw new Error("IllegalInput: The input image is neither an URL string nor an image.")})(t),n=e.t||u.t,o=e.threshold||u.threshold,i=e.codeUnitSize||u.codeUnitSize,a=m.findNextPrime(Math.pow(2,n)),l=(e.args||u.args,e.messageCompleted||u.messageCompleted);if(!n||n<1||n>7)throw new Error('IllegalOptions: Parameter t = " + t + " is not valid: 0 < t < 8');const s=document.createElement("canvas"),c=s.getContext("2d");if(null===c)throw new Error("NullContext: Context is null");s.style.display="none",s.width=e.width||r.width,s.height=e.width||r.height,e.height&&e.width?c.drawImage(r,0,0,e.width,e.height):c.drawImage(r,0,0);const h=c.getImageData(0,0,s.width,s.height),f=h.data,d=[];if(1===o)for(let u=3;u<f.length;u+=4){if(l(f,u,o))break;d.push(f[u]-(255-a+1))}let p="",g=0,w=0,y=Math.pow(2,i)-1;for(let u=0;u<d.length;u++)g+=d[u]<<w,w+=n,w>=i&&(p+=String.fromCharCode(g&y),w%=i,g=d[u]>>n-w);return 0!==g&&(p+=String.fromCharCode(g&y)),p}},8598:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return n}})}}]);