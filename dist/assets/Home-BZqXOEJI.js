import{r as q,j as p,u as O,g as qt,c as Kt,f as St,a as Y,L as ct,T as yt}from"./index-C_KsM3vP.js";import{p as At,s as Yt}from"./helpers-dVw9XFd8.js";import{B as lt}from"./Button-Bn0e4ihC.js";import{a as Jt,b as Xt}from"./ascii-B0p0iegg.js";import{c as pt,i as H,m as F,a as rt,f as ut,b as Tt}from"./motion-DDSRa8Cc.js";import{p as Zt,f as te}from"./projects-DhvEaQ9n.js";import{s as ee,t as ne}from"./skills-CpkvkOFA.js";import{P as re}from"./ProjectCard-Lnp1OBRQ.js";const _t=[{status:"OK",text:"Starting portfolio kernel v2.0..."},{status:"OK",text:"Loading modules: projects, skills, experience"},{status:"OK",text:"Mounting filesystem /dev/asad0..."},{status:"OK",text:"Initializing terminal interface"},{status:"OK",text:"All systems nominal. Welcome."}],oe=O.div`
  position: fixed;
  inset: 0;
  background: ${({theme:o})=>o.colors.bg};
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: ${({$fading:o})=>o?0:1};
  transition: opacity 500ms ease;
  pointer-events: ${({$fading:o})=>o?"none":"auto"};
`,ae=O.div`
  font-family: ${({theme:o})=>o.fonts.mono};
  color: ${({theme:o})=>o.colors.primary};
  font-size: 14px;
  max-width: 640px;
  width: 100%;
`,se=O.div`
  opacity: 0;
  animation: fade 300ms forwards;
  animation-delay: ${({$i:o})=>o*350}ms;
  @keyframes fade { to { opacity: 1; } }
`,ie=O.span`
  color: ${({theme:o})=>o.colors.secondary};
`,Ot=({onDone:o})=>{const[P,D]=q.useState(!1);return q.useEffect(()=>{const B=_t.length*350+800,Q=setTimeout(()=>D(!0),B),I=setTimeout(()=>o&&o(),B+600);return()=>{clearTimeout(Q),clearTimeout(I)}},[o]),p.jsx(oe,{$fading:P,children:p.jsx(ae,{children:_t.map((B,Q)=>p.jsxs(se,{$i:Q,children:["[ ",p.jsx(ie,{children:B.status})," ] ",B.text]},Q))})})};Ot.displayName="BootSequence";var kt={exports:{}};(function(o,P){(function(D,B){o.exports=B(q)})(typeof self<"u"?self:Kt,D=>(()=>{var B={2:(e,a,t)=>{var n=t(2199),i=t(4664),s=t(5950);e.exports=function(r){return n(r,s,i)}},79:(e,a,t)=>{var n=t(3702),i=t(80),s=t(4739),r=t(8655),l=t(1175);function u(d){var h=-1,m=d==null?0:d.length;for(this.clear();++h<m;){var v=d[h];this.set(v[0],v[1])}}u.prototype.clear=n,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=r,u.prototype.set=l,e.exports=u},80:(e,a,t)=>{var n=t(6025),i=Array.prototype.splice;e.exports=function(s){var r=this.__data__,l=n(r,s);return!(l<0||(l==r.length-1?r.pop():i.call(r,l,1),--this.size,0))}},270:(e,a,t)=>{var n=t(7068),i=t(346);e.exports=function s(r,l,u,d,h){return r===l||(r==null||l==null||!i(r)&&!i(l)?r!=r&&l!=l:n(r,l,u,d,s,h))}},289:(e,a,t)=>{var n=t(2651);e.exports=function(i){return n(this,i).get(i)}},294:e=>{e.exports=function(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=9007199254740991}},317:e=>{e.exports=function(a){var t=-1,n=Array(a.size);return a.forEach(function(i,s){n[++t]=[s,i]}),n}},346:e=>{e.exports=function(a){return a!=null&&typeof a=="object"}},361:e=>{var a=/^(?:0|[1-9]\d*)$/;e.exports=function(t,n){var i=typeof t;return!!(n=n??9007199254740991)&&(i=="number"||i!="symbol"&&a.test(t))&&t>-1&&t%1==0&&t<n}},392:e=>{e.exports=function(a,t){return a==null?void 0:a[t]}},659:(e,a,t)=>{var n=t(1873),i=Object.prototype,s=i.hasOwnProperty,r=i.toString,l=n?n.toStringTag:void 0;e.exports=function(u){var d=s.call(u,l),h=u[l];try{u[l]=void 0;var m=!0}catch{}var v=r.call(u);return m&&(d?u[l]=h:delete u[l]),v}},689:(e,a,t)=>{var n=t(2),i=Object.prototype.hasOwnProperty;e.exports=function(s,r,l,u,d,h){var m=1&l,v=n(s),C=v.length;if(C!=n(r).length&&!m)return!1;for(var x=C;x--;){var f=v[x];if(!(m?f in r:i.call(r,f)))return!1}var _=h.get(s),w=h.get(r);if(_&&w)return _==r&&w==s;var $=!0;h.set(s,r),h.set(r,s);for(var j=m;++x<C;){var g=s[f=v[x]],T=r[f];if(u)var L=m?u(T,g,f,r,s,h):u(g,T,f,s,r,h);if(!(L===void 0?g===T||d(g,T,l,u,h):L)){$=!1;break}j||(j=f=="constructor")}if($&&!j){var M=s.constructor,R=r.constructor;M==R||!("constructor"in s)||!("constructor"in r)||typeof M=="function"&&M instanceof M&&typeof R=="function"&&R instanceof R||($=!1)}return h.delete(s),h.delete(r),$}},695:(e,a,t)=>{var n=t(8096),i=t(2428),s=t(6449),r=t(3656),l=t(361),u=t(7167),d=Object.prototype.hasOwnProperty;e.exports=function(h,m){var v=s(h),C=!v&&i(h),x=!v&&!C&&r(h),f=!v&&!C&&!x&&u(h),_=v||C||x||f,w=_?n(h.length,String):[],$=w.length;for(var j in h)!m&&!d.call(h,j)||_&&(j=="length"||x&&(j=="offset"||j=="parent")||f&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||l(j,$))||w.push(j);return w}},938:e=>{e.exports=function(a){var t=this.__data__,n=t.delete(a);return this.size=t.size,n}},945:(e,a,t)=>{var n=t(79),i=t(8223),s=t(3661);e.exports=function(r,l){var u=this.__data__;if(u instanceof n){var d=u.__data__;if(!i||d.length<199)return d.push([r,l]),this.size=++u.size,this;u=this.__data__=new s(d)}return u.set(r,l),this.size=u.size,this}},1042:(e,a,t)=>{var n=t(6110)(Object,"create");e.exports=n},1175:(e,a,t)=>{var n=t(6025);e.exports=function(i,s){var r=this.__data__,l=n(r,i);return l<0?(++this.size,r.push([i,s])):r[l][1]=s,this}},1380:e=>{e.exports=function(a){return this.__data__.set(a,"__lodash_hash_undefined__"),this}},1420:(e,a,t)=>{var n=t(79);e.exports=function(){this.__data__=new n,this.size=0}},1459:e=>{e.exports=function(a){return this.__data__.has(a)}},1549:(e,a,t)=>{var n=t(2032),i=t(3862),s=t(6721),r=t(2749),l=t(5749);function u(d){var h=-1,m=d==null?0:d.length;for(this.clear();++h<m;){var v=d[h];this.set(v[0],v[1])}}u.prototype.clear=n,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=r,u.prototype.set=l,e.exports=u},1873:(e,a,t)=>{var n=t(9325).Symbol;e.exports=n},1882:(e,a,t)=>{var n=t(2552),i=t(3805);e.exports=function(s){if(!i(s))return!1;var r=n(s);return r=="[object Function]"||r=="[object GeneratorFunction]"||r=="[object AsyncFunction]"||r=="[object Proxy]"}},1986:(e,a,t)=>{var n=t(1873),i=t(7828),s=t(5288),r=t(5911),l=t(317),u=t(4247),d=n?n.prototype:void 0,h=d?d.valueOf:void 0;e.exports=function(m,v,C,x,f,_,w){switch(C){case"[object DataView]":if(m.byteLength!=v.byteLength||m.byteOffset!=v.byteOffset)return!1;m=m.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(m.byteLength!=v.byteLength||!_(new i(m),new i(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return s(+m,+v);case"[object Error]":return m.name==v.name&&m.message==v.message;case"[object RegExp]":case"[object String]":return m==v+"";case"[object Map]":var $=l;case"[object Set]":var j=1&x;if($||($=u),m.size!=v.size&&!j)return!1;var g=w.get(m);if(g)return g==v;x|=2,w.set(m,v);var T=r($(m),$(v),x,f,_,w);return w.delete(m),T;case"[object Symbol]":if(h)return h.call(m)==h.call(v)}return!1}},2032:(e,a,t)=>{var n=t(1042);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},2199:(e,a,t)=>{var n=t(4528),i=t(6449);e.exports=function(s,r,l){var u=r(s);return i(s)?u:n(u,l(s))}},2404:(e,a,t)=>{var n=t(270);e.exports=function(i,s){return n(i,s)}},2428:(e,a,t)=>{var n=t(7534),i=t(346),s=Object.prototype,r=s.hasOwnProperty,l=s.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(d){return i(d)&&r.call(d,"callee")&&!l.call(d,"callee")};e.exports=u},2552:(e,a,t)=>{var n=t(1873),i=t(659),s=t(9350),r=n?n.toStringTag:void 0;e.exports=function(l){return l==null?l===void 0?"[object Undefined]":"[object Null]":r&&r in Object(l)?i(l):s(l)}},2651:(e,a,t)=>{var n=t(4218);e.exports=function(i,s){var r=i.__data__;return n(s)?r[typeof s=="string"?"string":"hash"]:r.map}},2749:(e,a,t)=>{var n=t(1042),i=Object.prototype.hasOwnProperty;e.exports=function(s){var r=this.__data__;return n?r[s]!==void 0:i.call(r,s)}},2804:(e,a,t)=>{var n=t(6110)(t(9325),"Promise");e.exports=n},2949:(e,a,t)=>{var n=t(2651);e.exports=function(i,s){var r=n(this,i),l=r.size;return r.set(i,s),this.size+=r.size==l?0:1,this}},3040:(e,a,t)=>{var n=t(1549),i=t(79),s=t(8223);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(s||i),string:new n}}},3146:(e,a,t)=>{for(var n=t(3491),i=typeof window>"u"?t.g:window,s=["moz","webkit"],r="AnimationFrame",l=i["request"+r],u=i["cancel"+r]||i["cancelRequest"+r],d=0;!l&&d<s.length;d++)l=i[s[d]+"Request"+r],u=i[s[d]+"Cancel"+r]||i[s[d]+"CancelRequest"+r];if(!l||!u){var h=0,m=0,v=[],C=1e3/60;l=function(x){if(v.length===0){var f=n(),_=Math.max(0,C-(f-h));h=_+f,setTimeout(function(){var w=v.slice(0);v.length=0;for(var $=0;$<w.length;$++)if(!w[$].cancelled)try{w[$].callback(h)}catch(j){setTimeout(function(){throw j},0)}},Math.round(_))}return v.push({handle:++m,callback:x,cancelled:!1}),m},u=function(x){for(var f=0;f<v.length;f++)v[f].handle===x&&(v[f].cancelled=!0)}}e.exports=function(x){return l.call(i,x)},e.exports.cancel=function(){u.apply(i,arguments)},e.exports.polyfill=function(x){x||(x=i),x.requestAnimationFrame=l,x.cancelAnimationFrame=u}},3345:e=>{e.exports=function(){return[]}},3491:function(e){(function(){var a,t,n,i,s,r;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(a()-s)/1e6},t=process.hrtime,i=(a=function(){var l;return 1e9*(l=t())[0]+l[1]})(),r=1e9*process.uptime(),s=i-r):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(this)},3605:e=>{e.exports=function(a){return this.__data__.get(a)}},3650:(e,a,t)=>{var n=t(4335)(Object.keys,Object);e.exports=n},3656:(e,a,t)=>{e=t.nmd(e);var n=t(9325),i=t(9935),s=a&&!a.nodeType&&a,r=s&&e&&!e.nodeType&&e,l=r&&r.exports===s?n.Buffer:void 0,u=(l?l.isBuffer:void 0)||i;e.exports=u},3661:(e,a,t)=>{var n=t(3040),i=t(7670),s=t(289),r=t(4509),l=t(2949);function u(d){var h=-1,m=d==null?0:d.length;for(this.clear();++h<m;){var v=d[h];this.set(v[0],v[1])}}u.prototype.clear=n,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=r,u.prototype.set=l,e.exports=u},3702:e=>{e.exports=function(){this.__data__=[],this.size=0}},3805:e=>{e.exports=function(a){var t=typeof a;return a!=null&&(t=="object"||t=="function")}},3862:e=>{e.exports=function(a){var t=this.has(a)&&delete this.__data__[a];return this.size-=t?1:0,t}},4218:e=>{e.exports=function(a){var t=typeof a;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?a!=="__proto__":a===null}},4247:e=>{e.exports=function(a){var t=-1,n=Array(a.size);return a.forEach(function(i){n[++t]=i}),n}},4248:e=>{e.exports=function(a,t){for(var n=-1,i=a==null?0:a.length;++n<i;)if(t(a[n],n,a))return!0;return!1}},4335:e=>{e.exports=function(a,t){return function(n){return a(t(n))}}},4509:(e,a,t)=>{var n=t(2651);e.exports=function(i){return n(this,i).has(i)}},4528:e=>{e.exports=function(a,t){for(var n=-1,i=t.length,s=a.length;++n<i;)a[s+n]=t[n];return a}},4664:(e,a,t)=>{var n=t(9770),i=t(3345),s=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols,l=r?function(u){return u==null?[]:(u=Object(u),n(r(u),function(d){return s.call(u,d)}))}:i;e.exports=l},4739:(e,a,t)=>{var n=t(6025);e.exports=function(i){var s=this.__data__,r=n(s,i);return r<0?void 0:s[r][1]}},4840:(e,a,t)=>{var n=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=n},4894:(e,a,t)=>{var n=t(1882),i=t(294);e.exports=function(s){return s!=null&&i(s.length)&&!n(s)}},4901:(e,a,t)=>{var n=t(2552),i=t(294),s=t(346),r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1,e.exports=function(l){return s(l)&&i(l.length)&&!!r[n(l)]}},5083:(e,a,t)=>{var n=t(1882),i=t(7296),s=t(3805),r=t(7473),l=/^\[object .+?Constructor\]$/,u=Function.prototype,d=Object.prototype,h=u.toString,m=d.hasOwnProperty,v=RegExp("^"+h.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(C){return!(!s(C)||i(C))&&(n(C)?v:l).test(r(C))}},5288:e=>{e.exports=function(a,t){return a===t||a!=a&&t!=t}},5481:(e,a,t)=>{var n=t(9325)["__core-js_shared__"];e.exports=n},5527:e=>{var a=Object.prototype;e.exports=function(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||a)}},5580:(e,a,t)=>{var n=t(6110)(t(9325),"DataView");e.exports=n},5749:(e,a,t)=>{var n=t(1042);e.exports=function(i,s){var r=this.__data__;return this.size+=this.has(i)?0:1,r[i]=n&&s===void 0?"__lodash_hash_undefined__":s,this}},5861:(e,a,t)=>{var n=t(5580),i=t(8223),s=t(2804),r=t(6545),l=t(8303),u=t(2552),d=t(7473),h="[object Map]",m="[object Promise]",v="[object Set]",C="[object WeakMap]",x="[object DataView]",f=d(n),_=d(i),w=d(s),$=d(r),j=d(l),g=u;(n&&g(new n(new ArrayBuffer(1)))!=x||i&&g(new i)!=h||s&&g(s.resolve())!=m||r&&g(new r)!=v||l&&g(new l)!=C)&&(g=function(T){var L=u(T),M=L=="[object Object]"?T.constructor:void 0,R=M?d(M):"";if(R)switch(R){case f:return x;case _:return h;case w:return m;case $:return v;case j:return C}return L}),e.exports=g},5911:(e,a,t)=>{var n=t(8859),i=t(4248),s=t(9219);e.exports=function(r,l,u,d,h,m){var v=1&u,C=r.length,x=l.length;if(C!=x&&!(v&&x>C))return!1;var f=m.get(r),_=m.get(l);if(f&&_)return f==l&&_==r;var w=-1,$=!0,j=2&u?new n:void 0;for(m.set(r,l),m.set(l,r);++w<C;){var g=r[w],T=l[w];if(d)var L=v?d(T,g,w,l,r,m):d(g,T,w,r,l,m);if(L!==void 0){if(L)continue;$=!1;break}if(j){if(!i(l,function(M,R){if(!s(j,R)&&(g===M||h(g,M,u,d,m)))return j.push(R)})){$=!1;break}}else if(g!==T&&!h(g,T,u,d,m)){$=!1;break}}return m.delete(r),m.delete(l),$}},5950:(e,a,t)=>{var n=t(695),i=t(8984),s=t(4894);e.exports=function(r){return s(r)?n(r):i(r)}},6009:(e,a,t)=>{e=t.nmd(e);var n=t(4840),i=a&&!a.nodeType&&a,s=i&&e&&!e.nodeType&&e,r=s&&s.exports===i&&n.process,l=function(){try{return s&&s.require&&s.require("util").types||r&&r.binding&&r.binding("util")}catch{}}();e.exports=l},6025:(e,a,t)=>{var n=t(5288);e.exports=function(i,s){for(var r=i.length;r--;)if(n(i[r][0],s))return r;return-1}},6110:(e,a,t)=>{var n=t(5083),i=t(392);e.exports=function(s,r){var l=i(s,r);return n(l)?l:void 0}},6449:e=>{var a=Array.isArray;e.exports=a},6545:(e,a,t)=>{var n=t(6110)(t(9325),"Set");e.exports=n},6721:(e,a,t)=>{var n=t(1042),i=Object.prototype.hasOwnProperty;e.exports=function(s){var r=this.__data__;if(n){var l=r[s];return l==="__lodash_hash_undefined__"?void 0:l}return i.call(r,s)?r[s]:void 0}},7068:(e,a,t)=>{var n=t(7217),i=t(5911),s=t(1986),r=t(689),l=t(5861),u=t(6449),d=t(3656),h=t(7167),m="[object Arguments]",v="[object Array]",C="[object Object]",x=Object.prototype.hasOwnProperty;e.exports=function(f,_,w,$,j,g){var T=u(f),L=u(_),M=T?v:l(f),R=L?v:l(_),S=(M=M==m?C:M)==C,X=(R=R==m?C:R)==C,J=M==R;if(J&&d(f)){if(!d(_))return!1;T=!0,S=!1}if(J&&!S)return g||(g=new n),T||h(f)?i(f,_,w,$,j,g):s(f,_,M,w,$,j,g);if(!(1&w)){var A=S&&x.call(f,"__wrapped__"),y=X&&x.call(_,"__wrapped__");if(A||y){var k=A?f.value():f,E=y?_.value():_;return g||(g=new n),j(k,E,w,$,g)}}return!!J&&(g||(g=new n),r(f,_,w,$,j,g))}},7167:(e,a,t)=>{var n=t(4901),i=t(7301),s=t(6009),r=s&&s.isTypedArray,l=r?i(r):n;e.exports=l},7217:(e,a,t)=>{var n=t(79),i=t(1420),s=t(938),r=t(3605),l=t(9817),u=t(945);function d(h){var m=this.__data__=new n(h);this.size=m.size}d.prototype.clear=i,d.prototype.delete=s,d.prototype.get=r,d.prototype.has=l,d.prototype.set=u,e.exports=d},7296:(e,a,t)=>{var n,i=t(5481),s=(n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(r){return!!s&&s in r}},7301:e=>{e.exports=function(a){return function(t){return a(t)}}},7473:e=>{var a=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return a.call(t)}catch{}try{return t+""}catch{}}return""}},7534:(e,a,t)=>{var n=t(2552),i=t(346);e.exports=function(s){return i(s)&&n(s)=="[object Arguments]"}},7670:(e,a,t)=>{var n=t(2651);e.exports=function(i){var s=n(this,i).delete(i);return this.size-=s?1:0,s}},7828:(e,a,t)=>{var n=t(9325).Uint8Array;e.exports=n},8096:e=>{e.exports=function(a,t){for(var n=-1,i=Array(a);++n<a;)i[n]=t(n);return i}},8223:(e,a,t)=>{var n=t(6110)(t(9325),"Map");e.exports=n},8303:(e,a,t)=>{var n=t(6110)(t(9325),"WeakMap");e.exports=n},8655:(e,a,t)=>{var n=t(6025);e.exports=function(i){return n(this.__data__,i)>-1}},8859:(e,a,t)=>{var n=t(3661),i=t(1380),s=t(1459);function r(l){var u=-1,d=l==null?0:l.length;for(this.__data__=new n;++u<d;)this.add(l[u])}r.prototype.add=r.prototype.push=i,r.prototype.has=s,e.exports=r},8984:(e,a,t)=>{var n=t(5527),i=t(3650),s=Object.prototype.hasOwnProperty;e.exports=function(r){if(!n(r))return i(r);var l=[];for(var u in Object(r))s.call(r,u)&&u!="constructor"&&l.push(u);return l}},9155:e=>{e.exports=D},9219:e=>{e.exports=function(a,t){return a.has(t)}},9325:(e,a,t)=>{var n=t(4840),i=typeof self=="object"&&self&&self.Object===Object&&self,s=n||i||Function("return this")();e.exports=s},9350:e=>{var a=Object.prototype.toString;e.exports=function(t){return a.call(t)}},9770:e=>{e.exports=function(a,t){for(var n=-1,i=a==null?0:a.length,s=0,r=[];++n<i;){var l=a[n];t(l,n,a)&&(r[s++]=l)}return r}},9817:e=>{e.exports=function(a){return this.__data__.has(a)}},9905:(e,a,t)=>{t.d(a,{default:()=>J});var n=t(3146),i=t.n(n);const s=function(A){return new RegExp(/<[a-z][\s\S]*>/i).test(A)},r=function(A,y){return Math.floor(Math.random()*(y-A+1))+A};var l="TYPE_CHARACTER",u="REMOVE_CHARACTER",d="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",m="PAUSE_FOR",v="CALL_FUNCTION",C="ADD_HTML_TAG_ELEMENT",x="CHANGE_DELETE_SPEED",f="CHANGE_DELAY",_="CHANGE_CURSOR",w="PASTE_STRING",$="HTML_TAG";function j(A){return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},j(A)}function g(A,y){var k=Object.keys(A);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(A);y&&(E=E.filter(function(K){return Object.getOwnPropertyDescriptor(A,K).enumerable})),k.push.apply(k,E)}return k}function T(A){for(var y=1;y<arguments.length;y++){var k=arguments[y]!=null?arguments[y]:{};y%2?g(Object(k),!0).forEach(function(E){S(A,E,k[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(k)):g(Object(k)).forEach(function(E){Object.defineProperty(A,E,Object.getOwnPropertyDescriptor(k,E))})}return A}function L(A){return function(y){if(Array.isArray(y))return M(y)}(A)||function(y){if(typeof Symbol<"u"&&y[Symbol.iterator]!=null||y["@@iterator"]!=null)return Array.from(y)}(A)||function(y,k){if(y){if(typeof y=="string")return M(y,k);var E={}.toString.call(y).slice(8,-1);return E==="Object"&&y.constructor&&(E=y.constructor.name),E==="Map"||E==="Set"?Array.from(y):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?M(y,k):void 0}}(A)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function M(A,y){(y==null||y>A.length)&&(y=A.length);for(var k=0,E=Array(y);k<y;k++)E[k]=A[k];return E}function R(A,y){for(var k=0;k<y.length;k++){var E=y[k];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(A,X(E.key),E)}}function S(A,y,k){return(y=X(y))in A?Object.defineProperty(A,y,{value:k,enumerable:!0,configurable:!0,writable:!0}):A[y]=k,A}function X(A){var y=function(k){if(j(k)!="object"||!k)return k;var E=k[Symbol.toPrimitive];if(E!==void 0){var K=E.call(k,"string");if(j(K)!="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(k)}(A);return j(y)=="symbol"?y:y+""}const J=function(){function A(E,K){var c=this;if(function(b,N){if(!(b instanceof N))throw new TypeError("Cannot call a class as a function")}(this,A),S(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),S(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),S(this,"setupWrapperElement",function(){c.state.elements.container&&(c.state.elements.wrapper.className=c.options.wrapperClassName,c.state.elements.cursor.className=c.options.cursorClassName,c.state.elements.cursor.innerHTML=c.options.cursor,c.state.elements.container.innerHTML="",c.state.elements.container.appendChild(c.state.elements.wrapper),c.state.elements.container.appendChild(c.state.elements.cursor))}),S(this,"start",function(){return c.state.eventLoopPaused=!1,c.runEventLoop(),c}),S(this,"pause",function(){return c.state.eventLoopPaused=!0,c}),S(this,"stop",function(){return c.state.eventLoop&&((0,n.cancel)(c.state.eventLoop),c.state.eventLoop=null),c}),S(this,"pauseFor",function(b){return c.addEventToQueue(m,{ms:b}),c}),S(this,"typeOutAllStrings",function(){return typeof c.options.strings=="string"?(c.typeString(c.options.strings).pauseFor(c.options.pauseFor),c):(c.options.strings.forEach(function(b){c.typeString(b).pauseFor(c.options.pauseFor).deleteAll(c.options.deleteSpeed)}),c)}),S(this,"typeString",function(b){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(s(b))return c.typeOutHTMLString(b,N);if(b){var U=(c.options||{}).stringSplitter,W=typeof U=="function"?U(b):b.split("");c.typeCharacters(W,N)}return c}),S(this,"pasteString",function(b){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return s(b)?c.typeOutHTMLString(b,N,!0):(b&&c.addEventToQueue(w,{character:b,node:N}),c)}),S(this,"typeOutHTMLString",function(b){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,U=arguments.length>2?arguments[2]:void 0,W=function(tt){var et=document.createElement("div");return et.innerHTML=tt,et.childNodes}(b);if(W.length>0)for(var z=0;z<W.length;z++){var V=W[z],Z=V.innerHTML;V&&V.nodeType!==3?(V.innerHTML="",c.addEventToQueue(C,{node:V,parentNode:N}),U?c.pasteString(Z,V):c.typeString(Z,V)):V.textContent&&(U?c.pasteString(V.textContent,N):c.typeString(V.textContent,N))}return c}),S(this,"deleteAll",function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return c.addEventToQueue(d,{speed:b}),c}),S(this,"changeDeleteSpeed",function(b){if(!b)throw new Error("Must provide new delete speed");return c.addEventToQueue(x,{speed:b}),c}),S(this,"changeDelay",function(b){if(!b)throw new Error("Must provide new delay");return c.addEventToQueue(f,{delay:b}),c}),S(this,"changeCursor",function(b){if(!b)throw new Error("Must provide new cursor");return c.addEventToQueue(_,{cursor:b}),c}),S(this,"deleteChars",function(b){if(!b)throw new Error("Must provide amount of characters to delete");for(var N=0;N<b;N++)c.addEventToQueue(u);return c}),S(this,"callFunction",function(b,N){if(!b||typeof b!="function")throw new Error("Callback must be a function");return c.addEventToQueue(v,{cb:b,thisArg:N}),c}),S(this,"typeCharacters",function(b){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(U){c.addEventToQueue(l,{character:U,node:N})}),c}),S(this,"removeCharacters",function(b){if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(){c.addEventToQueue(u)}),c}),S(this,"addEventToQueue",function(b,N){var U=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return c.addEventToStateProperty(b,N,U,"eventQueue")}),S(this,"addReverseCalledEvent",function(b,N){var U=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return c.options.loop?c.addEventToStateProperty(b,N,U,"reverseCalledEvents"):c}),S(this,"addEventToStateProperty",function(b,N){var U=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=arguments.length>3?arguments[3]:void 0,z={eventName:b,eventArgs:N||{}};return c.state[W]=U?[z].concat(L(c.state[W])):[].concat(L(c.state[W]),[z]),c}),S(this,"runEventLoop",function(){c.state.lastFrameTime||(c.state.lastFrameTime=Date.now());var b=Date.now(),N=b-c.state.lastFrameTime;if(!c.state.eventQueue.length){if(!c.options.loop)return;c.state.eventQueue=L(c.state.calledEvents),c.state.calledEvents=[],c.options=T({},c.state.initialOptions)}if(c.state.eventLoop=i()(c.runEventLoop),!c.state.eventLoopPaused){if(c.state.pauseUntil){if(b<c.state.pauseUntil)return;c.state.pauseUntil=null}var U,W=L(c.state.eventQueue),z=W.shift();if(!(N<=(U=z.eventName===h||z.eventName===u?c.options.deleteSpeed==="natural"?r(40,80):c.options.deleteSpeed:c.options.delay==="natural"?r(120,160):c.options.delay))){var V=z.eventName,Z=z.eventArgs;switch(c.logInDevMode({currentEvent:z,state:c.state,delay:U}),V){case w:case l:var tt=Z.character,et=Z.node,xt=document.createTextNode(tt),nt=xt;c.options.onCreateTextNode&&typeof c.options.onCreateTextNode=="function"&&(nt=c.options.onCreateTextNode(tt,xt)),nt&&(et?et.appendChild(nt):c.state.elements.wrapper.appendChild(nt)),c.state.visibleNodes=[].concat(L(c.state.visibleNodes),[{type:"TEXT_NODE",character:tt,node:nt}]);break;case u:W.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case m:var Ft=z.eventArgs.ms;c.state.pauseUntil=Date.now()+parseInt(Ft);break;case v:var bt=z.eventArgs,Ht=bt.cb,Qt=bt.thisArg;Ht.call(Qt,{elements:c.state.elements});break;case C:var jt=z.eventArgs,ft=jt.node,ht=jt.parentNode;ht?ht.appendChild(ft):c.state.elements.wrapper.appendChild(ft),c.state.visibleNodes=[].concat(L(c.state.visibleNodes),[{type:$,node:ft,parentNode:ht||c.state.elements.wrapper}]);break;case d:var Bt=c.state.visibleNodes,mt=Z.speed,st=[];mt&&st.push({eventName:x,eventArgs:{speed:mt,temp:!0}});for(var wt=0,Ut=Bt.length;wt<Ut;wt++)st.push({eventName:h,eventArgs:{removingCharacterNode:!1}});mt&&st.push({eventName:x,eventArgs:{speed:c.options.deleteSpeed,temp:!0}}),W.unshift.apply(W,st);break;case h:var Wt=z.eventArgs.removingCharacterNode;if(c.state.visibleNodes.length){var vt=c.state.visibleNodes.pop(),Gt=vt.type,it=vt.node,Vt=vt.character;c.options.onRemoveNode&&typeof c.options.onRemoveNode=="function"&&c.options.onRemoveNode({node:it,character:Vt}),it&&it.parentNode.removeChild(it),Gt===$&&Wt&&W.unshift({eventName:h,eventArgs:{}})}break;case x:c.options.deleteSpeed=z.eventArgs.speed;break;case f:c.options.delay=z.eventArgs.delay;break;case _:c.options.cursor=z.eventArgs.cursor,c.state.elements.cursor.innerHTML=z.eventArgs.cursor}c.options.loop&&(z.eventName===h||z.eventArgs&&z.eventArgs.temp||(c.state.calledEvents=[].concat(L(c.state.calledEvents),[z]))),c.state.eventQueue=W,c.state.lastFrameTime=b}}}),E)if(typeof E=="string"){var gt=document.querySelector(E);if(!gt)throw new Error("Could not find container element");this.state.elements.container=gt}else this.state.elements.container=E;K&&(this.options=T(T({},this.options),K)),this.state.initialOptions=T({},this.options),this.init()}var y,k;return y=A,(k=[{key:"init",value:function(){var E,K;this.setupWrapperElement(),this.addEventToQueue(_,{cursor:this.options.cursor},!0),this.addEventToQueue(d,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(E=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(K=document.createElement("style")).appendChild(document.createTextNode(E)),document.head.appendChild(K),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(E){this.options.devMode&&console.log(E)}}])&&R(y.prototype,k),Object.defineProperty(y,"prototype",{writable:!1}),A}()},9935:e=>{e.exports=function(){return!1}}},Q={};function I(e){var a=Q[e];if(a!==void 0)return a.exports;var t=Q[e]={id:e,loaded:!1,exports:{}};return B[e].call(t.exports,t,t.exports,I),t.loaded=!0,t.exports}I.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return I.d(a,{a}),a},I.d=(e,a)=>{for(var t in a)I.o(a,t)&&!I.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},I.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),I.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),I.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var G={};return(()=>{I.d(G,{default:()=>C});var e=I(9155),a=I.n(e),t=I(9905),n=I(2404),i=I.n(n);function s(x){return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},s(x)}function r(x,f){for(var _=0;_<f.length;_++){var w=f[_];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(x,m(w.key),w)}}function l(x,f){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(_,w){return _.__proto__=w,_},l(x,f)}function u(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function d(){try{var x=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(d=function(){return!!x})()}function h(x){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},h(x)}function m(x){var f=function(_){if(s(_)!="object"||!_)return _;var w=_[Symbol.toPrimitive];if(w!==void 0){var $=w.call(_,"string");if(s($)!="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(_)}(x);return s(f)=="symbol"?f:f+""}var v=function(x){(function(j,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(g&&g.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),Object.defineProperty(j,"prototype",{writable:!1}),g&&l(j,g)})($,x);var f,_,w=function(j){var g=d();return function(){var T,L=h(j);if(g){var M=h(this).constructor;T=Reflect.construct(L,arguments,M)}else T=L.apply(this,arguments);return function(R,S){if(S&&(s(S)=="object"||typeof S=="function"))return S;if(S!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u(R)}(this,T)}}($);function $(){var j,g,T,L;(function(X,J){if(!(X instanceof J))throw new TypeError("Cannot call a class as a function")})(this,$);for(var M=arguments.length,R=new Array(M),S=0;S<M;S++)R[S]=arguments[S];return g=u(j=w.call.apply(w,[this].concat(R))),L={instance:null},(T=m(T="state"))in g?Object.defineProperty(g,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):g[T]=L,j}return f=$,(_=[{key:"componentDidMount",value:function(){var j=this,g=new t.default(this.typewriter,this.props.options);this.setState({instance:g},function(){var T=j.props.onInit;T&&T(g)})}},{key:"componentDidUpdate",value:function(j){i()(this.props.options,j.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var j=this,g=this.props.component;return a().createElement(g,{ref:function(T){return j.typewriter=T},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&r(f.prototype,_),Object.defineProperty(f,"prototype",{writable:!1}),$}(e.Component);v.defaultProps={component:"div"};const C=v})(),G.default})())})(kt);var ce=kt.exports;const le=qt(ce),ue=St`
  0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
  20% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 0); }
  40% { clip-path: inset(50% 0 30% 0); transform: translate(2px, 0); }
  60% { clip-path: inset(80% 0 5% 0); transform: translate(-1px, 0); }
`,pe=St`
  0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
  20% { clip-path: inset(60% 0 20% 0); transform: translate(2px, 0); }
  40% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 0); }
  60% { clip-path: inset(30% 0 40% 0); transform: translate(1px, 0); }
`,de=O.span`
  position: relative;
  display: inline-block;
  color: ${({theme:o})=>o.colors.text};
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  &::before {
    color: ${({theme:o})=>o.colors.danger};
    animation: ${ue} 2.5s infinite steps(1);
    mix-blend-mode: screen;
  }
  &::after {
    color: ${({theme:o})=>o.colors.secondary};
    animation: ${pe} 2.5s infinite steps(1);
    mix-blend-mode: screen;
  }
`,Ct=({children:o,as:P="span",...D})=>p.jsx(de,{as:P,"data-text":o,...D,children:o});Ct.displayName="GlitchText";const fe=O.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
`,Pt=()=>{const o=q.useRef(null);return q.useEffect(()=>{if(At())return;const P=o.current;if(!P)return;const D=P.getContext("2d");let B,Q=0,I=[];const G="01░▒▓█ABCDEF<>/{};$#",e=14,a=()=>{P.width=P.offsetWidth,P.height=P.offsetHeight;const n=Math.floor(P.width/e);I=new Array(n).fill(0).map(()=>Math.random()*-50)};a(),window.addEventListener("resize",a);const t=()=>{Q+=1,Q%3===0&&(D.fillStyle="rgba(10,10,10,0.1)",D.fillRect(0,0,P.width,P.height),D.fillStyle="#00ff88",D.font=`${e}px monospace`,I.forEach((n,i)=>{const s=G[Math.floor(Math.random()*G.length)],r=i*e;D.fillText(s,r,n*e),I[i]=n*e>P.height&&Math.random()>.975?0:n+1})),B=requestAnimationFrame(t)};return t(),()=>{cancelAnimationFrame(B),window.removeEventListener("resize",a)}},[]),p.jsx(fe,{ref:o,"aria-hidden":"true"})};Pt.displayName="MatrixRain";const he=O.section`
  position: relative;
  padding: ${({theme:o})=>o.space(16)} 0;
  text-align: center;
  overflow: hidden;
  border: 1px solid ${({theme:o})=>o.colors.border};
  border-radius: 6px;
  background: ${({theme:o})=>o.colors.bgSecondary};
`,me=O(F.div)`
  position: relative;
  z-index: 1;
`,ve=O(F.div)`
  color: ${({theme:o})=>o.colors.textMuted};
  font-size: 13px;
  margin-bottom: 12px;
`,ye=O(F.h1)`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: clamp(40px, 8vw, 84px);
  letter-spacing: 0.02em;
  margin: 0 0 ${({theme:o})=>o.space(4)};
`,ge=O(F.div)`
  color: ${({theme:o})=>o.colors.secondary};
  font-size: clamp(14px, 2.5vw, 20px);
  min-height: 1.6em;
`,xe=O(F.p)`
  max-width: 560px;
  margin: ${({theme:o})=>o.space(4)} auto 0;
  padding: 0 ${({theme:o})=>o.space(4)};
  color: ${({theme:o})=>o.colors.textMuted};
  font-size: 14px;
  line-height: 1.6;
`,be=O(F.div)`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${({theme:o})=>o.space(6)};
`,je=O(F.pre)`
  color: ${({theme:o})=>o.colors.primary};
  font-size: 11px;
  line-height: 1.2;
  margin-top: ${({theme:o})=>o.space(6)};
  opacity: 0.7;
`,Nt=()=>p.jsxs(he,{children:[p.jsx(Pt,{}),p.jsxs(me,{variants:pt,initial:"hidden",animate:"visible",children:[p.jsx(ve,{variants:H,children:"~$ whoami"}),p.jsx(ye,{variants:H,children:p.jsx(Ct,{children:Y.name.toUpperCase()})}),p.jsx(ge,{variants:H,children:At()?Y.roles[0]:p.jsx(le,{options:{strings:Y.roles,autoStart:!0,loop:!0,delay:55,deleteSpeed:30}})}),p.jsx(xe,{variants:H,children:"Front-end engineer who started in native C++/C#, ships production React, and is going deep on AI/ML. I care about speed, accessibility, and motion that means something."}),p.jsxs(be,{variants:H,children:[p.jsx(lt,{as:ct,to:"/works",children:"./see-my-work →"}),p.jsx(lt,{as:ct,to:"/about",children:"./about-me"})]}),p.jsx(je,{variants:H,"aria-hidden":"true",children:Jt})]})]});Nt.displayName="Hero";const we=o=>{const P=(o||"").trim();if(!P)return[""];const[D,...B]=P.split(/\s+/),Q=_e[D.toLowerCase()];return Q?Q(B):[`bash: ${D}: command not found`,"try 'help'"]},_e={help:()=>["available commands:","  help       show this message","  about      who is asad","  projects   list projects","  skills     list skills","  contact    contact info","  whoami     current user","  ls         list sections","  clear      clear the terminal","  sudo       ???"],about:()=>[`${Y.name} — ${Y.role}`,"check /about for the long version."],projects:()=>["projects:",...Zt.map(o=>`  [${o.category.padEnd(9)}] ${o.title.padEnd(22)} ${o.demo||o.github||""}`)],skills:()=>ee.flatMap(o=>[`# ${o.title}`,...o.items.map(P=>`  ${P.name.padEnd(18)} ${P.level}%`)]),contact:()=>[`email:    ${Y.email}`,`github:   ${Y.socials.github}`,`telegram: ${Y.socials.telegram}`],whoami:()=>["guest@asad.dev"],ls:()=>["home/  works/  skills/  about/  contacts/  comparision/"],clear:()=>["__CLEAR__"],sudo:o=>{if(o[0]==="asad"){const P=["access granted... just kidding 😂","nice try bro 😭","you thought you were root? think again.","permission denied ❌ ego boosted ✅","hacking NASA... 1%... failed 🚫","sudo power not found. install confidence first.","you are now... still a guest 😎","error 403: asad is not that powerful","FBI has entered the chat 🚔","typing sudo doesn’t make you a hacker bro 💀","root access? best I can do is console.log","system says: go study instead 📚","you unlocked nothing 🔓","sudo failed successfully","congrats! you hacked... nothing 🎉","permission denied but respect granted 🤝","admin rights loading... never mind.","this attempt has been reported to your mom 📞","you need +100 coding skill for this action ⚔️","try again after 10 years of experience ⏳"];return[P[Math.floor(Math.random()*P.length)]]}return["[sudo] password for guest:","guest is not in the sudoers file. This incident will be reported."]},echo:o=>[o.join(" ")]},Ee=O.div`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
  white-space: pre-wrap;
  max-height: 260px;
  overflow-y: auto;
`,$e=O.div`
  color: ${({theme:o,$prompt:P})=>P?o.colors.secondary:o.colors.primary};
`,Se=O.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,Ae=O.span`
  color: ${({theme:o})=>o.colors.secondary};
`,Te=O.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${({theme:o})=>o.colors.primary};
  font-family: inherit;
  font-size: inherit;
  caret-color: ${({theme:o})=>o.colors.primary};
`,Lt=()=>{const[o,P]=q.useState([{type:"info",text:"type 'help' to see available commands"}]),[D,B]=q.useState(""),Q=q.useRef(null);q.useEffect(()=>{Q.current&&(Q.current.scrollTop=Q.current.scrollHeight)},[o]);const I=G=>{G.preventDefault();const e=D;B("");const a=we(e);if(a[0]==="__CLEAR__"){P([]);return}P(t=>[...t,{type:"prompt",text:`guest@asad:~$ ${e}`},...a.map(n=>({type:"out",text:n}))])};return p.jsxs(yt,{title:"guest@asad: ~",variant:"phosphor-green",children:[p.jsx(Ee,{ref:Q,children:o.map((G,e)=>p.jsx($e,{$prompt:G.type==="prompt",children:G.text||" "},e))}),p.jsxs(Se,{onSubmit:I,children:[p.jsx(Ae,{children:"guest@asad:~$"}),p.jsx(Te,{value:D,onChange:G=>B(G.target.value),"aria-label":"terminal input",spellCheck:!1})]})]})};Lt.displayName="TerminalInput";const ot=O(F.section)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.space(4)};
`,at=O(F.div)`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 12px;
  letter-spacing: 1px;
  color: ${({theme:o})=>o.colors.textMuted};
  span {
    color: ${({theme:o,$accent:P})=>P||o.colors.primary};
  }
`,dt=O(ct)`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
  color: ${({theme:o})=>o.colors.secondary};
  transition: gap ${({theme:o})=>o.animation.fast},
    color ${({theme:o})=>o.animation.fast};
  &:hover {
    color: ${({theme:o})=>o.colors.primary};
    gap: 10px;
  }
`,Oe=O.div`
  display: grid;
  gap: ${({theme:o})=>o.space(5)};
  grid-template-columns: 1fr;
  align-items: center;
  @media (min-width: 640px) {
    grid-template-columns: auto 1fr;
  }
`,ke=O.pre`
  color: ${({theme:o})=>o.colors.primary};
  font-size: 9px;
  line-height: 1.1;
  margin: 0;
  text-align: center;
`,Ce=O(F.div)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.space(3)};
`,Et=O(F.p)`
  margin: 0;
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({theme:o})=>o.colors.text};
  strong {
    color: ${({theme:o})=>o.colors.primary};
  }
`,Mt=()=>p.jsxs(ot,{variants:pt,...rt,children:[p.jsxs(at,{variants:H,children:[p.jsx("span",{children:"$"})," cat ~/about/whoami.md"]}),p.jsx(F.div,{variants:H,children:p.jsx(yt,{title:"~/about",children:p.jsxs(Oe,{children:[p.jsx(ke,{"aria-hidden":"true",children:Xt}),p.jsxs(Ce,{children:[p.jsxs(Et,{variants:H,children:["I'm ",p.jsx("strong",{children:"Asadbek"})," — a front-end engineer from Uzbekistan who came up through native ",p.jsx("strong",{children:"C++/C#"})," before falling for the web."]}),p.jsxs(Et,{variants:H,children:["Today I ship production React apps and dig into ",p.jsx("strong",{children:"AI/ML"}),", always chasing fast, accessible, considered UI."]}),p.jsx(dt,{to:"/about",children:"read more →"})]})]})})})]});Mt.displayName="PreviewAbout";const Pe=O.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`,Ne=O.div`
  display: grid;
  gap: ${({theme:o})=>o.space(4)};
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`,zt=()=>p.jsxs(ot,{variants:pt,...rt,children:[p.jsxs(Pe,{children:[p.jsxs(at,{variants:H,children:[p.jsx("span",{children:"$"})," ls ~/works --featured"]}),p.jsx(dt,{to:"/works",children:"view all projects →"})]}),p.jsx(Ne,{children:te.map(o=>p.jsx(F.div,{variants:H,children:p.jsx(re,{project:{...o,featured:!1}})},o.id))})]});zt.displayName="PreviewWorks";const Le=O(F.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Me=O(F.span)`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${({theme:o})=>o.colors.border};
  background: ${({theme:o})=>o.colors.bgSecondary};
  color: ${({theme:o})=>o.colors.text};
  cursor: default;
  transition: all ${({theme:o})=>o.animation.fast};
  &:hover {
    border-color: ${({theme:o})=>o.colors.primary};
    color: ${({theme:o})=>o.colors.primary};
    box-shadow: 0 0 16px ${({theme:o})=>o.colors.primary}33;
  }
`,It=()=>p.jsxs(ot,{variants:ut,...rt,children:[p.jsxs(at,{variants:Tt,children:[p.jsx("span",{children:"$"})," echo $SKILLS | head"]}),p.jsx(Le,{variants:ut,children:ne.map(o=>p.jsx(Me,{variants:H,children:o},o))}),p.jsx(dt,{to:"/skills",children:"see full skill set →"})]});It.displayName="PreviewSkills";const $t=O(F.p)`
  margin: 0;
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({theme:o})=>o.colors.text};
  & + & {
    margin-top: ${({theme:o})=>o.space(3)};
  }
  strong {
    color: ${({theme:o})=>o.colors.secondary};
  }
`,ze=O(F.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: ${({theme:o})=>o.space(4)};
`,Ie=O(F.span)`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, ${({theme:o})=>o.colors.secondary} 45%, transparent);
  color: ${({theme:o})=>o.colors.secondary};
`,Rt=()=>p.jsxs(ot,{variants:ut,...rt,children:[p.jsxs(at,{variants:Tt,$accent:"#00ccff",children:[p.jsx("span",{children:"$"})," ai --status"]}),p.jsx(F.div,{variants:H,children:p.jsxs(yt,{title:"~/ai-ecosystem",variant:"cyan",glow:!0,children:[p.jsxs($t,{variants:H,children:["AI isn't a bolt-on for me — it's part of the build loop. I design and run"," ",p.jsx("strong",{children:"AI agents"})," that plan, scaffold, and review code alongside me, and keep a small ecosystem of models and tools orchestrated for whatever the task needs."]}),p.jsxs($t,{variants:H,children:["That same agentic approach extends to ",p.jsx("strong",{children:"quality"}),": automated pipelines that generate, run, and self-heal end-to-end tests, catch regressions before release, and free up my time for the parts of a product that still need a human eye."]}),p.jsx(ze,{variants:ut,children:["Agentic Coding","Model Orchestration","Automated QA","LLM Integrations","CI/CD Automation"].map(o=>p.jsx(Ie,{variants:H,children:o},o))})]})}),p.jsx(dt,{to:"/skills",children:"see the full AI & automation stack →"})]});Rt.displayName="PreviewAI";const Re=O(F.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:o})=>o.space(4)};
  flex-wrap: wrap;
  padding: ${({theme:o})=>o.space(6)};
  border: 1px dashed ${({theme:o})=>o.colors.border};
  border-radius: 6px;
  background: ${({theme:o})=>o.colors.bgSecondary};
`,De=O.p`
  margin: 0;
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 14px;
  color: ${({theme:o})=>o.colors.text};
  strong {
    color: ${({theme:o})=>o.colors.primary};
  }
`,Fe=O.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Dt=()=>p.jsxs(ot,{variants:pt,...rt,children:[p.jsxs(at,{variants:H,children:[p.jsx("span",{children:"$"})," ./contact --start"]}),p.jsxs(Re,{variants:H,children:[p.jsxs(De,{children:["Got a project, a role, or just want to talk shop? ",p.jsx("strong",{children:"Let's build something."})]}),p.jsxs(Fe,{children:[p.jsx(lt,{as:"a",href:`mailto:${Y.email}`,children:"./email-me"}),p.jsx(lt,{as:ct,to:"/contacts",children:"open form →"})]})]})]});Dt.displayName="PreviewContact";const He=O.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.space(8)};
`,Qe=()=>{const[o,P]=q.useState(()=>sessionStorage.getItem("booted")==="1");q.useEffect(()=>{Yt("home")},[]);const D=()=>{sessionStorage.setItem("booted","1"),P(!0)};return p.jsxs(p.Fragment,{children:[!o&&p.jsx(Ot,{onDone:D}),p.jsxs(He,{children:[p.jsx(Nt,{}),p.jsx(Mt,{}),p.jsx(zt,{}),p.jsx(It,{}),p.jsx(Rt,{}),p.jsx(Lt,{}),p.jsx(Dt,{})]})]})};Qe.displayName="HomePage";export{Qe as default};
