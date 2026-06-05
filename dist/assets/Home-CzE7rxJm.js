import{r as q,j as f,u as C,g as Wt,c as Gt,f as Et,a as Y,L as at,T as St}from"./index-Cz0j39ew.js";import{p as Tt,s as Vt}from"./helpers-dVw9XFd8.js";import{B as st}from"./Button-Bt2hexWs.js";import{a as qt,b as Kt}from"./ascii-B0p0iegg.js";import{c as it,i as W,m as U,a as ct,f as jt,b as Yt}from"./motion-BRvIIh6Q.js";import{p as Jt,f as Xt}from"./projects-CjmhetIM.js";import{s as Zt,t as te}from"./skills-CtFZAqlD.js";import{P as ee}from"./ProjectCard-BTxzP8hp.js";const wt=[{status:"OK",text:"Starting portfolio kernel v2.0..."},{status:"OK",text:"Loading modules: projects, skills, experience"},{status:"OK",text:"Mounting filesystem /dev/asad0..."},{status:"OK",text:"Initializing terminal interface"},{status:"OK",text:"All systems nominal. Welcome."}],re=C.div`
  position: fixed;
  inset: 0;
  background: ${({theme:a})=>a.colors.bg};
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: ${({$fading:a})=>a?0:1};
  transition: opacity 500ms ease;
  pointer-events: ${({$fading:a})=>a?"none":"auto"};
`,ne=C.div`
  font-family: ${({theme:a})=>a.fonts.mono};
  color: ${({theme:a})=>a.colors.primary};
  font-size: 14px;
  max-width: 640px;
  width: 100%;
`,oe=C.div`
  opacity: 0;
  animation: fade 300ms forwards;
  animation-delay: ${({$i:a})=>a*350}ms;
  @keyframes fade { to { opacity: 1; } }
`,ae=C.span`
  color: ${({theme:a})=>a.colors.secondary};
`,$t=({onDone:a})=>{const[P,I]=q.useState(!1);return q.useEffect(()=>{const H=wt.length*350+800,F=setTimeout(()=>I(!0),H),R=setTimeout(()=>a&&a(),H+600);return()=>{clearTimeout(F),clearTimeout(R)}},[a]),f.jsx(re,{$fading:P,children:f.jsx(ne,{children:wt.map((H,F)=>f.jsxs(oe,{$i:F,children:["[ ",f.jsx(ae,{children:H.status})," ] ",H.text]},F))})})};$t.displayName="BootSequence";var Ot={exports:{}};(function(a,P){(function(I,H){a.exports=H(q)})(typeof self<"u"?self:Gt,I=>(()=>{var H={2:(e,o,t)=>{var r=t(2199),i=t(4664),s=t(5950);e.exports=function(n){return r(n,s,i)}},79:(e,o,t)=>{var r=t(3702),i=t(80),s=t(4739),n=t(8655),l=t(1175);function u(p){var h=-1,v=p==null?0:p.length;for(this.clear();++h<v;){var m=p[h];this.set(m[0],m[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=n,u.prototype.set=l,e.exports=u},80:(e,o,t)=>{var r=t(6025),i=Array.prototype.splice;e.exports=function(s){var n=this.__data__,l=r(n,s);return!(l<0||(l==n.length-1?n.pop():i.call(n,l,1),--this.size,0))}},270:(e,o,t)=>{var r=t(7068),i=t(346);e.exports=function s(n,l,u,p,h){return n===l||(n==null||l==null||!i(n)&&!i(l)?n!=n&&l!=l:r(n,l,u,p,s,h))}},289:(e,o,t)=>{var r=t(2651);e.exports=function(i){return r(this,i).get(i)}},294:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},317:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(i,s){r[++t]=[s,i]}),r}},346:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},361:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,r){var i=typeof t;return!!(r=r??9007199254740991)&&(i=="number"||i!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<r}},392:e=>{e.exports=function(o,t){return o==null?void 0:o[t]}},659:(e,o,t)=>{var r=t(1873),i=Object.prototype,s=i.hasOwnProperty,n=i.toString,l=r?r.toStringTag:void 0;e.exports=function(u){var p=s.call(u,l),h=u[l];try{u[l]=void 0;var v=!0}catch{}var m=n.call(u);return v&&(p?u[l]=h:delete u[l]),m}},689:(e,o,t)=>{var r=t(2),i=Object.prototype.hasOwnProperty;e.exports=function(s,n,l,u,p,h){var v=1&l,m=r(s),k=m.length;if(k!=r(n).length&&!v)return!1;for(var x=k;x--;){var d=m[x];if(!(v?d in n:i.call(n,d)))return!1}var _=h.get(s),w=h.get(n);if(_&&w)return _==n&&w==s;var S=!0;h.set(s,n),h.set(n,s);for(var j=v;++x<k;){var g=s[d=m[x]],O=n[d];if(u)var L=v?u(O,g,d,n,s,h):u(g,O,d,s,n,h);if(!(L===void 0?g===O||p(g,O,l,u,h):L)){S=!1;break}j||(j=d=="constructor")}if(S&&!j){var M=s.constructor,D=n.constructor;M==D||!("constructor"in s)||!("constructor"in n)||typeof M=="function"&&M instanceof M&&typeof D=="function"&&D instanceof D||(S=!1)}return h.delete(s),h.delete(n),S}},695:(e,o,t)=>{var r=t(8096),i=t(2428),s=t(6449),n=t(3656),l=t(361),u=t(7167),p=Object.prototype.hasOwnProperty;e.exports=function(h,v){var m=s(h),k=!m&&i(h),x=!m&&!k&&n(h),d=!m&&!k&&!x&&u(h),_=m||k||x||d,w=_?r(h.length,String):[],S=w.length;for(var j in h)!v&&!p.call(h,j)||_&&(j=="length"||x&&(j=="offset"||j=="parent")||d&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||l(j,S))||w.push(j);return w}},938:e=>{e.exports=function(o){var t=this.__data__,r=t.delete(o);return this.size=t.size,r}},945:(e,o,t)=>{var r=t(79),i=t(8223),s=t(3661);e.exports=function(n,l){var u=this.__data__;if(u instanceof r){var p=u.__data__;if(!i||p.length<199)return p.push([n,l]),this.size=++u.size,this;u=this.__data__=new s(p)}return u.set(n,l),this.size=u.size,this}},1042:(e,o,t)=>{var r=t(6110)(Object,"create");e.exports=r},1175:(e,o,t)=>{var r=t(6025);e.exports=function(i,s){var n=this.__data__,l=r(n,i);return l<0?(++this.size,n.push([i,s])):n[l][1]=s,this}},1380:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},1420:(e,o,t)=>{var r=t(79);e.exports=function(){this.__data__=new r,this.size=0}},1459:e=>{e.exports=function(o){return this.__data__.has(o)}},1549:(e,o,t)=>{var r=t(2032),i=t(3862),s=t(6721),n=t(2749),l=t(5749);function u(p){var h=-1,v=p==null?0:p.length;for(this.clear();++h<v;){var m=p[h];this.set(m[0],m[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=n,u.prototype.set=l,e.exports=u},1873:(e,o,t)=>{var r=t(9325).Symbol;e.exports=r},1882:(e,o,t)=>{var r=t(2552),i=t(3805);e.exports=function(s){if(!i(s))return!1;var n=r(s);return n=="[object Function]"||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}},1986:(e,o,t)=>{var r=t(1873),i=t(7828),s=t(5288),n=t(5911),l=t(317),u=t(4247),p=r?r.prototype:void 0,h=p?p.valueOf:void 0;e.exports=function(v,m,k,x,d,_,w){switch(k){case"[object DataView]":if(v.byteLength!=m.byteLength||v.byteOffset!=m.byteOffset)return!1;v=v.buffer,m=m.buffer;case"[object ArrayBuffer]":return!(v.byteLength!=m.byteLength||!_(new i(v),new i(m)));case"[object Boolean]":case"[object Date]":case"[object Number]":return s(+v,+m);case"[object Error]":return v.name==m.name&&v.message==m.message;case"[object RegExp]":case"[object String]":return v==m+"";case"[object Map]":var S=l;case"[object Set]":var j=1&x;if(S||(S=u),v.size!=m.size&&!j)return!1;var g=w.get(v);if(g)return g==m;x|=2,w.set(v,m);var O=n(S(v),S(m),x,d,_,w);return w.delete(v),O;case"[object Symbol]":if(h)return h.call(v)==h.call(m)}return!1}},2032:(e,o,t)=>{var r=t(1042);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},2199:(e,o,t)=>{var r=t(4528),i=t(6449);e.exports=function(s,n,l){var u=n(s);return i(s)?u:r(u,l(s))}},2404:(e,o,t)=>{var r=t(270);e.exports=function(i,s){return r(i,s)}},2428:(e,o,t)=>{var r=t(7534),i=t(346),s=Object.prototype,n=s.hasOwnProperty,l=s.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(p){return i(p)&&n.call(p,"callee")&&!l.call(p,"callee")};e.exports=u},2552:(e,o,t)=>{var r=t(1873),i=t(659),s=t(9350),n=r?r.toStringTag:void 0;e.exports=function(l){return l==null?l===void 0?"[object Undefined]":"[object Null]":n&&n in Object(l)?i(l):s(l)}},2651:(e,o,t)=>{var r=t(4218);e.exports=function(i,s){var n=i.__data__;return r(s)?n[typeof s=="string"?"string":"hash"]:n.map}},2749:(e,o,t)=>{var r=t(1042),i=Object.prototype.hasOwnProperty;e.exports=function(s){var n=this.__data__;return r?n[s]!==void 0:i.call(n,s)}},2804:(e,o,t)=>{var r=t(6110)(t(9325),"Promise");e.exports=r},2949:(e,o,t)=>{var r=t(2651);e.exports=function(i,s){var n=r(this,i),l=n.size;return n.set(i,s),this.size+=n.size==l?0:1,this}},3040:(e,o,t)=>{var r=t(1549),i=t(79),s=t(8223);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(s||i),string:new r}}},3146:(e,o,t)=>{for(var r=t(3491),i=typeof window>"u"?t.g:window,s=["moz","webkit"],n="AnimationFrame",l=i["request"+n],u=i["cancel"+n]||i["cancelRequest"+n],p=0;!l&&p<s.length;p++)l=i[s[p]+"Request"+n],u=i[s[p]+"Cancel"+n]||i[s[p]+"CancelRequest"+n];if(!l||!u){var h=0,v=0,m=[],k=1e3/60;l=function(x){if(m.length===0){var d=r(),_=Math.max(0,k-(d-h));h=_+d,setTimeout(function(){var w=m.slice(0);m.length=0;for(var S=0;S<w.length;S++)if(!w[S].cancelled)try{w[S].callback(h)}catch(j){setTimeout(function(){throw j},0)}},Math.round(_))}return m.push({handle:++v,callback:x,cancelled:!1}),v},u=function(x){for(var d=0;d<m.length;d++)m[d].handle===x&&(m[d].cancelled=!0)}}e.exports=function(x){return l.call(i,x)},e.exports.cancel=function(){u.apply(i,arguments)},e.exports.polyfill=function(x){x||(x=i),x.requestAnimationFrame=l,x.cancelAnimationFrame=u}},3345:e=>{e.exports=function(){return[]}},3491:function(e){(function(){var o,t,r,i,s,n;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-s)/1e6},t=process.hrtime,i=(o=function(){var l;return 1e9*(l=t())[0]+l[1]})(),n=1e9*process.uptime(),s=i-n):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this)},3605:e=>{e.exports=function(o){return this.__data__.get(o)}},3650:(e,o,t)=>{var r=t(4335)(Object.keys,Object);e.exports=r},3656:(e,o,t)=>{e=t.nmd(e);var r=t(9325),i=t(9935),s=o&&!o.nodeType&&o,n=s&&e&&!e.nodeType&&e,l=n&&n.exports===s?r.Buffer:void 0,u=(l?l.isBuffer:void 0)||i;e.exports=u},3661:(e,o,t)=>{var r=t(3040),i=t(7670),s=t(289),n=t(4509),l=t(2949);function u(p){var h=-1,v=p==null?0:p.length;for(this.clear();++h<v;){var m=p[h];this.set(m[0],m[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=n,u.prototype.set=l,e.exports=u},3702:e=>{e.exports=function(){this.__data__=[],this.size=0}},3805:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},3862:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},4218:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},4247:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(i){r[++t]=i}),r}},4248:e=>{e.exports=function(o,t){for(var r=-1,i=o==null?0:o.length;++r<i;)if(t(o[r],r,o))return!0;return!1}},4335:e=>{e.exports=function(o,t){return function(r){return o(t(r))}}},4509:(e,o,t)=>{var r=t(2651);e.exports=function(i){return r(this,i).has(i)}},4528:e=>{e.exports=function(o,t){for(var r=-1,i=t.length,s=o.length;++r<i;)o[s+r]=t[r];return o}},4664:(e,o,t)=>{var r=t(9770),i=t(3345),s=Object.prototype.propertyIsEnumerable,n=Object.getOwnPropertySymbols,l=n?function(u){return u==null?[]:(u=Object(u),r(n(u),function(p){return s.call(u,p)}))}:i;e.exports=l},4739:(e,o,t)=>{var r=t(6025);e.exports=function(i){var s=this.__data__,n=r(s,i);return n<0?void 0:s[n][1]}},4840:(e,o,t)=>{var r=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=r},4894:(e,o,t)=>{var r=t(1882),i=t(294);e.exports=function(s){return s!=null&&i(s.length)&&!r(s)}},4901:(e,o,t)=>{var r=t(2552),i=t(294),s=t(346),n={};n["[object Float32Array]"]=n["[object Float64Array]"]=n["[object Int8Array]"]=n["[object Int16Array]"]=n["[object Int32Array]"]=n["[object Uint8Array]"]=n["[object Uint8ClampedArray]"]=n["[object Uint16Array]"]=n["[object Uint32Array]"]=!0,n["[object Arguments]"]=n["[object Array]"]=n["[object ArrayBuffer]"]=n["[object Boolean]"]=n["[object DataView]"]=n["[object Date]"]=n["[object Error]"]=n["[object Function]"]=n["[object Map]"]=n["[object Number]"]=n["[object Object]"]=n["[object RegExp]"]=n["[object Set]"]=n["[object String]"]=n["[object WeakMap]"]=!1,e.exports=function(l){return s(l)&&i(l.length)&&!!n[r(l)]}},5083:(e,o,t)=>{var r=t(1882),i=t(7296),s=t(3805),n=t(7473),l=/^\[object .+?Constructor\]$/,u=Function.prototype,p=Object.prototype,h=u.toString,v=p.hasOwnProperty,m=RegExp("^"+h.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(k){return!(!s(k)||i(k))&&(r(k)?m:l).test(n(k))}},5288:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5481:(e,o,t)=>{var r=t(9325)["__core-js_shared__"];e.exports=r},5527:e=>{var o=Object.prototype;e.exports=function(t){var r=t&&t.constructor;return t===(typeof r=="function"&&r.prototype||o)}},5580:(e,o,t)=>{var r=t(6110)(t(9325),"DataView");e.exports=r},5749:(e,o,t)=>{var r=t(1042);e.exports=function(i,s){var n=this.__data__;return this.size+=this.has(i)?0:1,n[i]=r&&s===void 0?"__lodash_hash_undefined__":s,this}},5861:(e,o,t)=>{var r=t(5580),i=t(8223),s=t(2804),n=t(6545),l=t(8303),u=t(2552),p=t(7473),h="[object Map]",v="[object Promise]",m="[object Set]",k="[object WeakMap]",x="[object DataView]",d=p(r),_=p(i),w=p(s),S=p(n),j=p(l),g=u;(r&&g(new r(new ArrayBuffer(1)))!=x||i&&g(new i)!=h||s&&g(s.resolve())!=v||n&&g(new n)!=m||l&&g(new l)!=k)&&(g=function(O){var L=u(O),M=L=="[object Object]"?O.constructor:void 0,D=M?p(M):"";if(D)switch(D){case d:return x;case _:return h;case w:return v;case S:return m;case j:return k}return L}),e.exports=g},5911:(e,o,t)=>{var r=t(8859),i=t(4248),s=t(9219);e.exports=function(n,l,u,p,h,v){var m=1&u,k=n.length,x=l.length;if(k!=x&&!(m&&x>k))return!1;var d=v.get(n),_=v.get(l);if(d&&_)return d==l&&_==n;var w=-1,S=!0,j=2&u?new r:void 0;for(v.set(n,l),v.set(l,n);++w<k;){var g=n[w],O=l[w];if(p)var L=m?p(O,g,w,l,n,v):p(g,O,w,n,l,v);if(L!==void 0){if(L)continue;S=!1;break}if(j){if(!i(l,function(M,D){if(!s(j,D)&&(g===M||h(g,M,u,p,v)))return j.push(D)})){S=!1;break}}else if(g!==O&&!h(g,O,u,p,v)){S=!1;break}}return v.delete(n),v.delete(l),S}},5950:(e,o,t)=>{var r=t(695),i=t(8984),s=t(4894);e.exports=function(n){return s(n)?r(n):i(n)}},6009:(e,o,t)=>{e=t.nmd(e);var r=t(4840),i=o&&!o.nodeType&&o,s=i&&e&&!e.nodeType&&e,n=s&&s.exports===i&&r.process,l=function(){try{return s&&s.require&&s.require("util").types||n&&n.binding&&n.binding("util")}catch{}}();e.exports=l},6025:(e,o,t)=>{var r=t(5288);e.exports=function(i,s){for(var n=i.length;n--;)if(r(i[n][0],s))return n;return-1}},6110:(e,o,t)=>{var r=t(5083),i=t(392);e.exports=function(s,n){var l=i(s,n);return r(l)?l:void 0}},6449:e=>{var o=Array.isArray;e.exports=o},6545:(e,o,t)=>{var r=t(6110)(t(9325),"Set");e.exports=r},6721:(e,o,t)=>{var r=t(1042),i=Object.prototype.hasOwnProperty;e.exports=function(s){var n=this.__data__;if(r){var l=n[s];return l==="__lodash_hash_undefined__"?void 0:l}return i.call(n,s)?n[s]:void 0}},7068:(e,o,t)=>{var r=t(7217),i=t(5911),s=t(1986),n=t(689),l=t(5861),u=t(6449),p=t(3656),h=t(7167),v="[object Arguments]",m="[object Array]",k="[object Object]",x=Object.prototype.hasOwnProperty;e.exports=function(d,_,w,S,j,g){var O=u(d),L=u(_),M=O?m:l(d),D=L?m:l(_),T=(M=M==v?k:M)==k,X=(D=D==v?k:D)==k,J=M==D;if(J&&p(d)){if(!p(_))return!1;O=!0,T=!1}if(J&&!T)return g||(g=new r),O||h(d)?i(d,_,w,S,j,g):s(d,_,M,w,S,j,g);if(!(1&w)){var $=T&&x.call(d,"__wrapped__"),y=X&&x.call(_,"__wrapped__");if($||y){var A=$?d.value():d,E=y?_.value():_;return g||(g=new r),j(A,E,w,S,g)}}return!!J&&(g||(g=new r),n(d,_,w,S,j,g))}},7167:(e,o,t)=>{var r=t(4901),i=t(7301),s=t(6009),n=s&&s.isTypedArray,l=n?i(n):r;e.exports=l},7217:(e,o,t)=>{var r=t(79),i=t(1420),s=t(938),n=t(3605),l=t(9817),u=t(945);function p(h){var v=this.__data__=new r(h);this.size=v.size}p.prototype.clear=i,p.prototype.delete=s,p.prototype.get=n,p.prototype.has=l,p.prototype.set=u,e.exports=p},7296:(e,o,t)=>{var r,i=t(5481),s=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(n){return!!s&&s in n}},7301:e=>{e.exports=function(o){return function(t){return o(t)}}},7473:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7534:(e,o,t)=>{var r=t(2552),i=t(346);e.exports=function(s){return i(s)&&r(s)=="[object Arguments]"}},7670:(e,o,t)=>{var r=t(2651);e.exports=function(i){var s=r(this,i).delete(i);return this.size-=s?1:0,s}},7828:(e,o,t)=>{var r=t(9325).Uint8Array;e.exports=r},8096:e=>{e.exports=function(o,t){for(var r=-1,i=Array(o);++r<o;)i[r]=t(r);return i}},8223:(e,o,t)=>{var r=t(6110)(t(9325),"Map");e.exports=r},8303:(e,o,t)=>{var r=t(6110)(t(9325),"WeakMap");e.exports=r},8655:(e,o,t)=>{var r=t(6025);e.exports=function(i){return r(this.__data__,i)>-1}},8859:(e,o,t)=>{var r=t(3661),i=t(1380),s=t(1459);function n(l){var u=-1,p=l==null?0:l.length;for(this.__data__=new r;++u<p;)this.add(l[u])}n.prototype.add=n.prototype.push=i,n.prototype.has=s,e.exports=n},8984:(e,o,t)=>{var r=t(5527),i=t(3650),s=Object.prototype.hasOwnProperty;e.exports=function(n){if(!r(n))return i(n);var l=[];for(var u in Object(n))s.call(n,u)&&u!="constructor"&&l.push(u);return l}},9155:e=>{e.exports=I},9219:e=>{e.exports=function(o,t){return o.has(t)}},9325:(e,o,t)=>{var r=t(4840),i=typeof self=="object"&&self&&self.Object===Object&&self,s=r||i||Function("return this")();e.exports=s},9350:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},9770:e=>{e.exports=function(o,t){for(var r=-1,i=o==null?0:o.length,s=0,n=[];++r<i;){var l=o[r];t(l,r,o)&&(n[s++]=l)}return n}},9817:e=>{e.exports=function(o){return this.__data__.has(o)}},9905:(e,o,t)=>{t.d(o,{default:()=>J});var r=t(3146),i=t.n(r);const s=function($){return new RegExp(/<[a-z][\s\S]*>/i).test($)},n=function($,y){return Math.floor(Math.random()*(y-$+1))+$};var l="TYPE_CHARACTER",u="REMOVE_CHARACTER",p="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",m="CALL_FUNCTION",k="ADD_HTML_TAG_ELEMENT",x="CHANGE_DELETE_SPEED",d="CHANGE_DELAY",_="CHANGE_CURSOR",w="PASTE_STRING",S="HTML_TAG";function j($){return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},j($)}function g($,y){var A=Object.keys($);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols($);y&&(E=E.filter(function(K){return Object.getOwnPropertyDescriptor($,K).enumerable})),A.push.apply(A,E)}return A}function O($){for(var y=1;y<arguments.length;y++){var A=arguments[y]!=null?arguments[y]:{};y%2?g(Object(A),!0).forEach(function(E){T($,E,A[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties($,Object.getOwnPropertyDescriptors(A)):g(Object(A)).forEach(function(E){Object.defineProperty($,E,Object.getOwnPropertyDescriptor(A,E))})}return $}function L($){return function(y){if(Array.isArray(y))return M(y)}($)||function(y){if(typeof Symbol<"u"&&y[Symbol.iterator]!=null||y["@@iterator"]!=null)return Array.from(y)}($)||function(y,A){if(y){if(typeof y=="string")return M(y,A);var E={}.toString.call(y).slice(8,-1);return E==="Object"&&y.constructor&&(E=y.constructor.name),E==="Map"||E==="Set"?Array.from(y):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?M(y,A):void 0}}($)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function M($,y){(y==null||y>$.length)&&(y=$.length);for(var A=0,E=Array(y);A<y;A++)E[A]=$[A];return E}function D($,y){for(var A=0;A<y.length;A++){var E=y[A];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty($,X(E.key),E)}}function T($,y,A){return(y=X(y))in $?Object.defineProperty($,y,{value:A,enumerable:!0,configurable:!0,writable:!0}):$[y]=A,$}function X($){var y=function(A){if(j(A)!="object"||!A)return A;var E=A[Symbol.toPrimitive];if(E!==void 0){var K=E.call(A,"string");if(j(K)!="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(A)}($);return j(y)=="symbol"?y:y+""}const J=function(){function $(E,K){var c=this;if(function(b,N){if(!(b instanceof N))throw new TypeError("Cannot call a class as a function")}(this,$),T(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),T(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),T(this,"setupWrapperElement",function(){c.state.elements.container&&(c.state.elements.wrapper.className=c.options.wrapperClassName,c.state.elements.cursor.className=c.options.cursorClassName,c.state.elements.cursor.innerHTML=c.options.cursor,c.state.elements.container.innerHTML="",c.state.elements.container.appendChild(c.state.elements.wrapper),c.state.elements.container.appendChild(c.state.elements.cursor))}),T(this,"start",function(){return c.state.eventLoopPaused=!1,c.runEventLoop(),c}),T(this,"pause",function(){return c.state.eventLoopPaused=!0,c}),T(this,"stop",function(){return c.state.eventLoop&&((0,r.cancel)(c.state.eventLoop),c.state.eventLoop=null),c}),T(this,"pauseFor",function(b){return c.addEventToQueue(v,{ms:b}),c}),T(this,"typeOutAllStrings",function(){return typeof c.options.strings=="string"?(c.typeString(c.options.strings).pauseFor(c.options.pauseFor),c):(c.options.strings.forEach(function(b){c.typeString(b).pauseFor(c.options.pauseFor).deleteAll(c.options.deleteSpeed)}),c)}),T(this,"typeString",function(b){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(s(b))return c.typeOutHTMLString(b,N);if(b){var Q=(c.options||{}).stringSplitter,B=typeof Q=="function"?Q(b):b.split("");c.typeCharacters(B,N)}return c}),T(this,"pasteString",function(b){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return s(b)?c.typeOutHTMLString(b,N,!0):(b&&c.addEventToQueue(w,{character:b,node:N}),c)}),T(this,"typeOutHTMLString",function(b){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Q=arguments.length>2?arguments[2]:void 0,B=function(tt){var et=document.createElement("div");return et.innerHTML=tt,et.childNodes}(b);if(B.length>0)for(var z=0;z<B.length;z++){var V=B[z],Z=V.innerHTML;V&&V.nodeType!==3?(V.innerHTML="",c.addEventToQueue(k,{node:V,parentNode:N}),Q?c.pasteString(Z,V):c.typeString(Z,V)):V.textContent&&(Q?c.pasteString(V.textContent,N):c.typeString(V.textContent,N))}return c}),T(this,"deleteAll",function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return c.addEventToQueue(p,{speed:b}),c}),T(this,"changeDeleteSpeed",function(b){if(!b)throw new Error("Must provide new delete speed");return c.addEventToQueue(x,{speed:b}),c}),T(this,"changeDelay",function(b){if(!b)throw new Error("Must provide new delay");return c.addEventToQueue(d,{delay:b}),c}),T(this,"changeCursor",function(b){if(!b)throw new Error("Must provide new cursor");return c.addEventToQueue(_,{cursor:b}),c}),T(this,"deleteChars",function(b){if(!b)throw new Error("Must provide amount of characters to delete");for(var N=0;N<b;N++)c.addEventToQueue(u);return c}),T(this,"callFunction",function(b,N){if(!b||typeof b!="function")throw new Error("Callback must be a function");return c.addEventToQueue(m,{cb:b,thisArg:N}),c}),T(this,"typeCharacters",function(b){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(Q){c.addEventToQueue(l,{character:Q,node:N})}),c}),T(this,"removeCharacters",function(b){if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(){c.addEventToQueue(u)}),c}),T(this,"addEventToQueue",function(b,N){var Q=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return c.addEventToStateProperty(b,N,Q,"eventQueue")}),T(this,"addReverseCalledEvent",function(b,N){var Q=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return c.options.loop?c.addEventToStateProperty(b,N,Q,"reverseCalledEvents"):c}),T(this,"addEventToStateProperty",function(b,N){var Q=arguments.length>2&&arguments[2]!==void 0&&arguments[2],B=arguments.length>3?arguments[3]:void 0,z={eventName:b,eventArgs:N||{}};return c.state[B]=Q?[z].concat(L(c.state[B])):[].concat(L(c.state[B]),[z]),c}),T(this,"runEventLoop",function(){c.state.lastFrameTime||(c.state.lastFrameTime=Date.now());var b=Date.now(),N=b-c.state.lastFrameTime;if(!c.state.eventQueue.length){if(!c.options.loop)return;c.state.eventQueue=L(c.state.calledEvents),c.state.calledEvents=[],c.options=O({},c.state.initialOptions)}if(c.state.eventLoop=i()(c.runEventLoop),!c.state.eventLoopPaused){if(c.state.pauseUntil){if(b<c.state.pauseUntil)return;c.state.pauseUntil=null}var Q,B=L(c.state.eventQueue),z=B.shift();if(!(N<=(Q=z.eventName===h||z.eventName===u?c.options.deleteSpeed==="natural"?n(40,80):c.options.deleteSpeed:c.options.delay==="natural"?n(120,160):c.options.delay))){var V=z.eventName,Z=z.eventArgs;switch(c.logInDevMode({currentEvent:z,state:c.state,delay:Q}),V){case w:case l:var tt=Z.character,et=Z.node,yt=document.createTextNode(tt),rt=yt;c.options.onCreateTextNode&&typeof c.options.onCreateTextNode=="function"&&(rt=c.options.onCreateTextNode(tt,yt)),rt&&(et?et.appendChild(rt):c.state.elements.wrapper.appendChild(rt)),c.state.visibleNodes=[].concat(L(c.state.visibleNodes),[{type:"TEXT_NODE",character:tt,node:rt}]);break;case u:B.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case v:var Rt=z.eventArgs.ms;c.state.pauseUntil=Date.now()+parseInt(Rt);break;case m:var gt=z.eventArgs,Dt=gt.cb,It=gt.thisArg;Dt.call(It,{elements:c.state.elements});break;case k:var xt=z.eventArgs,pt=xt.node,ft=xt.parentNode;ft?ft.appendChild(pt):c.state.elements.wrapper.appendChild(pt),c.state.visibleNodes=[].concat(L(c.state.visibleNodes),[{type:S,node:pt,parentNode:ft||c.state.elements.wrapper}]);break;case p:var Ft=c.state.visibleNodes,dt=Z.speed,nt=[];dt&&nt.push({eventName:x,eventArgs:{speed:dt,temp:!0}});for(var bt=0,Ht=Ft.length;bt<Ht;bt++)nt.push({eventName:h,eventArgs:{removingCharacterNode:!1}});dt&&nt.push({eventName:x,eventArgs:{speed:c.options.deleteSpeed,temp:!0}}),B.unshift.apply(B,nt);break;case h:var Qt=z.eventArgs.removingCharacterNode;if(c.state.visibleNodes.length){var ht=c.state.visibleNodes.pop(),Bt=ht.type,ot=ht.node,Ut=ht.character;c.options.onRemoveNode&&typeof c.options.onRemoveNode=="function"&&c.options.onRemoveNode({node:ot,character:Ut}),ot&&ot.parentNode.removeChild(ot),Bt===S&&Qt&&B.unshift({eventName:h,eventArgs:{}})}break;case x:c.options.deleteSpeed=z.eventArgs.speed;break;case d:c.options.delay=z.eventArgs.delay;break;case _:c.options.cursor=z.eventArgs.cursor,c.state.elements.cursor.innerHTML=z.eventArgs.cursor}c.options.loop&&(z.eventName===h||z.eventArgs&&z.eventArgs.temp||(c.state.calledEvents=[].concat(L(c.state.calledEvents),[z]))),c.state.eventQueue=B,c.state.lastFrameTime=b}}}),E)if(typeof E=="string"){var mt=document.querySelector(E);if(!mt)throw new Error("Could not find container element");this.state.elements.container=mt}else this.state.elements.container=E;K&&(this.options=O(O({},this.options),K)),this.state.initialOptions=O({},this.options),this.init()}var y,A;return y=$,(A=[{key:"init",value:function(){var E,K;this.setupWrapperElement(),this.addEventToQueue(_,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(E=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(K=document.createElement("style")).appendChild(document.createTextNode(E)),document.head.appendChild(K),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(E){this.options.devMode&&console.log(E)}}])&&D(y.prototype,A),Object.defineProperty(y,"prototype",{writable:!1}),$}()},9935:e=>{e.exports=function(){return!1}}},F={};function R(e){var o=F[e];if(o!==void 0)return o.exports;var t=F[e]={id:e,loaded:!1,exports:{}};return H[e].call(t.exports,t,t.exports,R),t.loaded=!0,t.exports}R.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return R.d(o,{a:o}),o},R.d=(e,o)=>{for(var t in o)R.o(o,t)&&!R.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},R.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),R.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),R.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var G={};return(()=>{R.d(G,{default:()=>k});var e=R(9155),o=R.n(e),t=R(9905),r=R(2404),i=R.n(r);function s(x){return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},s(x)}function n(x,d){for(var _=0;_<d.length;_++){var w=d[_];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(x,v(w.key),w)}}function l(x,d){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(_,w){return _.__proto__=w,_},l(x,d)}function u(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function p(){try{var x=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(p=function(){return!!x})()}function h(x){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)},h(x)}function v(x){var d=function(_){if(s(_)!="object"||!_)return _;var w=_[Symbol.toPrimitive];if(w!==void 0){var S=w.call(_,"string");if(s(S)!="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(_)}(x);return s(d)=="symbol"?d:d+""}var m=function(x){(function(j,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(g&&g.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),Object.defineProperty(j,"prototype",{writable:!1}),g&&l(j,g)})(S,x);var d,_,w=function(j){var g=p();return function(){var O,L=h(j);if(g){var M=h(this).constructor;O=Reflect.construct(L,arguments,M)}else O=L.apply(this,arguments);return function(D,T){if(T&&(s(T)=="object"||typeof T=="function"))return T;if(T!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u(D)}(this,O)}}(S);function S(){var j,g,O,L;(function(X,J){if(!(X instanceof J))throw new TypeError("Cannot call a class as a function")})(this,S);for(var M=arguments.length,D=new Array(M),T=0;T<M;T++)D[T]=arguments[T];return g=u(j=w.call.apply(w,[this].concat(D))),L={instance:null},(O=v(O="state"))in g?Object.defineProperty(g,O,{value:L,enumerable:!0,configurable:!0,writable:!0}):g[O]=L,j}return d=S,(_=[{key:"componentDidMount",value:function(){var j=this,g=new t.default(this.typewriter,this.props.options);this.setState({instance:g},function(){var O=j.props.onInit;O&&O(g)})}},{key:"componentDidUpdate",value:function(j){i()(this.props.options,j.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var j=this,g=this.props.component;return o().createElement(g,{ref:function(O){return j.typewriter=O},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&n(d.prototype,_),Object.defineProperty(d,"prototype",{writable:!1}),S}(e.Component);m.defaultProps={component:"div"};const k=m})(),G.default})())})(Ot);var se=Ot.exports;const ie=Wt(se),ce=Et`
  0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
  20% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 0); }
  40% { clip-path: inset(50% 0 30% 0); transform: translate(2px, 0); }
  60% { clip-path: inset(80% 0 5% 0); transform: translate(-1px, 0); }
`,le=Et`
  0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
  20% { clip-path: inset(60% 0 20% 0); transform: translate(2px, 0); }
  40% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 0); }
  60% { clip-path: inset(30% 0 40% 0); transform: translate(1px, 0); }
`,ue=C.span`
  position: relative;
  display: inline-block;
  color: ${({theme:a})=>a.colors.text};
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  &::before {
    color: ${({theme:a})=>a.colors.danger};
    animation: ${ce} 2.5s infinite steps(1);
    mix-blend-mode: screen;
  }
  &::after {
    color: ${({theme:a})=>a.colors.secondary};
    animation: ${le} 2.5s infinite steps(1);
    mix-blend-mode: screen;
  }
`,At=({children:a,as:P="span",...I})=>f.jsx(ue,{as:P,"data-text":a,...I,children:a});At.displayName="GlitchText";const pe=C.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
`,kt=()=>{const a=q.useRef(null);return q.useEffect(()=>{if(Tt())return;const P=a.current;if(!P)return;const I=P.getContext("2d");let H,F=0,R=[];const G="01░▒▓█ABCDEF<>/{};$#",e=14,o=()=>{P.width=P.offsetWidth,P.height=P.offsetHeight;const r=Math.floor(P.width/e);R=new Array(r).fill(0).map(()=>Math.random()*-50)};o(),window.addEventListener("resize",o);const t=()=>{F+=1,F%3===0&&(I.fillStyle="rgba(10,10,10,0.1)",I.fillRect(0,0,P.width,P.height),I.fillStyle="#00ff88",I.font=`${e}px monospace`,R.forEach((r,i)=>{const s=G[Math.floor(Math.random()*G.length)],n=i*e;I.fillText(s,n,r*e),R[i]=r*e>P.height&&Math.random()>.975?0:r+1})),H=requestAnimationFrame(t)};return t(),()=>{cancelAnimationFrame(H),window.removeEventListener("resize",o)}},[]),f.jsx(pe,{ref:a,"aria-hidden":"true"})};kt.displayName="MatrixRain";const fe=C.section`
  position: relative;
  padding: ${({theme:a})=>a.space(16)} 0;
  text-align: center;
  overflow: hidden;
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: 6px;
  background: ${({theme:a})=>a.colors.bgSecondary};
`,de=C(U.div)`
  position: relative;
  z-index: 1;
`,he=C(U.div)`
  color: ${({theme:a})=>a.colors.textMuted};
  font-size: 13px;
  margin-bottom: 12px;
`,ve=C(U.h1)`
  font-family: ${({theme:a})=>a.fonts.mono};
  font-size: clamp(40px, 8vw, 84px);
  letter-spacing: 0.02em;
  margin: 0 0 ${({theme:a})=>a.space(4)};
`,me=C(U.div)`
  color: ${({theme:a})=>a.colors.secondary};
  font-size: clamp(14px, 2.5vw, 20px);
  min-height: 1.6em;
`,ye=C(U.p)`
  max-width: 560px;
  margin: ${({theme:a})=>a.space(4)} auto 0;
  padding: 0 ${({theme:a})=>a.space(4)};
  color: ${({theme:a})=>a.colors.textMuted};
  font-size: 14px;
  line-height: 1.6;
`,ge=C(U.div)`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${({theme:a})=>a.space(6)};
`,xe=C(U.pre)`
  color: ${({theme:a})=>a.colors.primary};
  font-size: 11px;
  line-height: 1.2;
  margin-top: ${({theme:a})=>a.space(6)};
  opacity: 0.7;
`,Ct=()=>f.jsxs(fe,{children:[f.jsx(kt,{}),f.jsxs(de,{variants:it,initial:"hidden",animate:"visible",children:[f.jsx(he,{variants:W,children:"~$ whoami"}),f.jsx(ve,{variants:W,children:f.jsx(At,{children:Y.name.toUpperCase()})}),f.jsx(me,{variants:W,children:Tt()?Y.roles[0]:f.jsx(ie,{options:{strings:Y.roles,autoStart:!0,loop:!0,delay:55,deleteSpeed:30}})}),f.jsx(ye,{variants:W,children:"Front-end engineer who started in native C++/C#, ships production React, and is going deep on AI/ML. I care about speed, accessibility, and motion that means something."}),f.jsxs(ge,{variants:W,children:[f.jsx(st,{as:at,to:"/works",children:"./see-my-work →"}),f.jsx(st,{as:at,to:"/about",children:"./about-me"})]}),f.jsx(xe,{variants:W,"aria-hidden":"true",children:qt})]})]});Ct.displayName="Hero";const be=a=>{const P=(a||"").trim();if(!P)return[""];const[I,...H]=P.split(/\s+/),F=je[I.toLowerCase()];return F?F(H):[`bash: ${I}: command not found`,"try 'help'"]},je={help:()=>["available commands:","  help       show this message","  about      who is asad","  projects   list projects","  skills     list skills","  contact    contact info","  whoami     current user","  ls         list sections","  clear      clear the terminal","  sudo       ???"],about:()=>[`${Y.name} — ${Y.role}`,"check /about for the long version."],projects:()=>["projects:",...Jt.map(a=>`  [${a.category.padEnd(9)}] ${a.title.padEnd(22)} ${a.demo||a.github||""}`)],skills:()=>Zt.flatMap(a=>[`# ${a.title}`,...a.items.map(P=>`  ${P.name.padEnd(18)} ${P.level}%`)]),contact:()=>[`email:    ${Y.email}`,`github:   ${Y.socials.github}`,`telegram: ${Y.socials.telegram}`],whoami:()=>["guest@asad.dev"],ls:()=>["home/  works/  skills/  about/  contacts/  comparision/"],clear:()=>["__CLEAR__"],sudo:a=>{if(a[0]==="asad"){const P=["access granted... just kidding 😂","nice try bro 😭","you thought you were root? think again.","permission denied ❌ ego boosted ✅","hacking NASA... 1%... failed 🚫","sudo power not found. install confidence first.","you are now... still a guest 😎","error 403: asad is not that powerful","FBI has entered the chat 🚔","typing sudo doesn’t make you a hacker bro 💀","root access? best I can do is console.log","system says: go study instead 📚","you unlocked nothing 🔓","sudo failed successfully","congrats! you hacked... nothing 🎉","permission denied but respect granted 🤝","admin rights loading... never mind.","this attempt has been reported to your mom 📞","you need +100 coding skill for this action ⚔️","try again after 10 years of experience ⏳"];return[P[Math.floor(Math.random()*P.length)]]}return["[sudo] password for guest:","guest is not in the sudoers file. This incident will be reported."]},echo:a=>[a.join(" ")]},we=C.div`
  font-family: ${({theme:a})=>a.fonts.mono};
  font-size: 13px;
  white-space: pre-wrap;
  max-height: 260px;
  overflow-y: auto;
`,_e=C.div`
  color: ${({theme:a,$prompt:P})=>P?a.colors.secondary:a.colors.primary};
`,Ee=C.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,Se=C.span`
  color: ${({theme:a})=>a.colors.secondary};
`,Te=C.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${({theme:a})=>a.colors.primary};
  font-family: inherit;
  font-size: inherit;
  caret-color: ${({theme:a})=>a.colors.primary};
`,Pt=()=>{const[a,P]=q.useState([{type:"info",text:"type 'help' to see available commands"}]),[I,H]=q.useState(""),F=q.useRef(null);q.useEffect(()=>{F.current&&(F.current.scrollTop=F.current.scrollHeight)},[a]);const R=G=>{G.preventDefault();const e=I;H("");const o=be(e);if(o[0]==="__CLEAR__"){P([]);return}P(t=>[...t,{type:"prompt",text:`guest@asad:~$ ${e}`},...o.map(r=>({type:"out",text:r}))])};return f.jsxs(St,{title:"guest@asad: ~",variant:"phosphor-green",children:[f.jsx(we,{ref:F,children:a.map((G,e)=>f.jsx(_e,{$prompt:G.type==="prompt",children:G.text||" "},e))}),f.jsxs(Ee,{onSubmit:R,children:[f.jsx(Se,{children:"guest@asad:~$"}),f.jsx(Te,{value:I,onChange:G=>H(G.target.value),"aria-label":"terminal input",spellCheck:!1})]})]})};Pt.displayName="TerminalInput";const lt=C(U.section)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.space(4)};
`,ut=C(U.div)`
  font-family: ${({theme:a})=>a.fonts.mono};
  font-size: 12px;
  letter-spacing: 1px;
  color: ${({theme:a})=>a.colors.textMuted};
  span {
    color: ${({theme:a,$accent:P})=>P||a.colors.primary};
  }
`,vt=C(at)`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({theme:a})=>a.fonts.mono};
  font-size: 13px;
  color: ${({theme:a})=>a.colors.secondary};
  transition: gap ${({theme:a})=>a.animation.fast},
    color ${({theme:a})=>a.animation.fast};
  &:hover {
    color: ${({theme:a})=>a.colors.primary};
    gap: 10px;
  }
`,$e=C.div`
  display: grid;
  gap: ${({theme:a})=>a.space(5)};
  grid-template-columns: 1fr;
  align-items: center;
  @media (min-width: 640px) {
    grid-template-columns: auto 1fr;
  }
`,Oe=C.pre`
  color: ${({theme:a})=>a.colors.primary};
  font-size: 9px;
  line-height: 1.1;
  margin: 0;
  text-align: center;
`,Ae=C(U.div)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.space(3)};
`,_t=C(U.p)`
  margin: 0;
  font-family: ${({theme:a})=>a.fonts.mono};
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({theme:a})=>a.colors.text};
  strong {
    color: ${({theme:a})=>a.colors.primary};
  }
`,Nt=()=>f.jsxs(lt,{variants:it,...ct,children:[f.jsxs(ut,{variants:W,children:[f.jsx("span",{children:"$"})," cat ~/about/whoami.md"]}),f.jsx(U.div,{variants:W,children:f.jsx(St,{title:"~/about",children:f.jsxs($e,{children:[f.jsx(Oe,{"aria-hidden":"true",children:Kt}),f.jsxs(Ae,{children:[f.jsxs(_t,{variants:W,children:["I'm ",f.jsx("strong",{children:"Asadbek"})," — a front-end engineer from Uzbekistan who came up through native ",f.jsx("strong",{children:"C++/C#"})," before falling for the web."]}),f.jsxs(_t,{variants:W,children:["Today I ship production React apps and dig into ",f.jsx("strong",{children:"AI/ML"}),", always chasing fast, accessible, considered UI."]}),f.jsx(vt,{to:"/about",children:"read more →"})]})]})})})]});Nt.displayName="PreviewAbout";const ke=C.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`,Ce=C.div`
  display: grid;
  gap: ${({theme:a})=>a.space(4)};
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`,Lt=()=>f.jsxs(lt,{variants:it,...ct,children:[f.jsxs(ke,{children:[f.jsxs(ut,{variants:W,children:[f.jsx("span",{children:"$"})," ls ~/works --featured"]}),f.jsx(vt,{to:"/works",children:"view all projects →"})]}),f.jsx(Ce,{children:Xt.map(a=>f.jsx(U.div,{variants:W,children:f.jsx(ee,{project:{...a,featured:!1}})},a.id))})]});Lt.displayName="PreviewWorks";const Pe=C(U.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Ne=C(U.span)`
  font-family: ${({theme:a})=>a.fonts.mono};
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${({theme:a})=>a.colors.border};
  background: ${({theme:a})=>a.colors.bgSecondary};
  color: ${({theme:a})=>a.colors.text};
  cursor: default;
  transition: all ${({theme:a})=>a.animation.fast};
  &:hover {
    border-color: ${({theme:a})=>a.colors.primary};
    color: ${({theme:a})=>a.colors.primary};
    box-shadow: 0 0 16px ${({theme:a})=>a.colors.primary}33;
  }
`,Mt=()=>f.jsxs(lt,{variants:jt,...ct,children:[f.jsxs(ut,{variants:Yt,children:[f.jsx("span",{children:"$"})," echo $SKILLS | head"]}),f.jsx(Pe,{variants:jt,children:te.map(a=>f.jsx(Ne,{variants:W,children:a},a))}),f.jsx(vt,{to:"/skills",children:"see full skill set →"})]});Mt.displayName="PreviewSkills";const Le=C(U.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.space(4)};
  flex-wrap: wrap;
  padding: ${({theme:a})=>a.space(6)};
  border: 1px dashed ${({theme:a})=>a.colors.border};
  border-radius: 6px;
  background: ${({theme:a})=>a.colors.bgSecondary};
`,Me=C.p`
  margin: 0;
  font-family: ${({theme:a})=>a.fonts.mono};
  font-size: 14px;
  color: ${({theme:a})=>a.colors.text};
  strong {
    color: ${({theme:a})=>a.colors.primary};
  }
`,ze=C.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,zt=()=>f.jsxs(lt,{variants:it,...ct,children:[f.jsxs(ut,{variants:W,children:[f.jsx("span",{children:"$"})," ./contact --start"]}),f.jsxs(Le,{variants:W,children:[f.jsxs(Me,{children:["Got a project, a role, or just want to talk shop? ",f.jsx("strong",{children:"Let's build something."})]}),f.jsxs(ze,{children:[f.jsx(st,{as:"a",href:`mailto:${Y.email}`,children:"./email-me"}),f.jsx(st,{as:at,to:"/contacts",children:"open form →"})]})]})]});zt.displayName="PreviewContact";const Re=C.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.space(8)};
`,De=()=>{const[a,P]=q.useState(()=>sessionStorage.getItem("booted")==="1");q.useEffect(()=>{Vt("home")},[]);const I=()=>{sessionStorage.setItem("booted","1"),P(!0)};return f.jsxs(f.Fragment,{children:[!a&&f.jsx($t,{onDone:I}),f.jsxs(Re,{children:[f.jsx(Ct,{}),f.jsx(Nt,{}),f.jsx(Lt,{}),f.jsx(Mt,{}),f.jsx(Pt,{}),f.jsx(zt,{})]})]})};De.displayName="HomePage";export{De as default};
