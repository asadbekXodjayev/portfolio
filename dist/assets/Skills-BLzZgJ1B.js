import{r as p,j as l,T,u as v,R as E}from"./index-CIQM2dev.js";import{s as V}from"./skills-DSG9JHvV.js";import{s as B}from"./helpers-dVw9XFd8.js";var y=new Map,h=new WeakMap,A=0,O=void 0;function z(e){return e?(h.has(e)||(A+=1,h.set(e,A.toString())),h.get(e)):"0"}function N(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?z(e.root):e[t]}`).toString()}function P(e){const t=N(e);let r=y.get(t);if(!r){const s=new Map;let c;const i=new IntersectionObserver(o=>{o.forEach(n=>{var a;const m=n.isIntersecting&&c.some(d=>n.intersectionRatio>=d);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=m),(a=s.get(n.target))==null||a.forEach(d=>{d(m,n)})})},e);c=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:s},y.set(t,r)}return r}function W(e,t,r={},s=O){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const a=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:c,observer:i,elements:o}=P(r),n=o.get(e)||[];return o.has(e)||o.set(e,n),n.push(t),i.observe(e),function(){n.splice(n.indexOf(t),1),n.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),y.delete(c))}}function _({threshold:e,delay:t,trackVisibility:r,rootMargin:s,root:c,triggerOnce:i,skip:o,initialInView:n,fallbackInView:a,onChange:m}={}){var d;const[g,M]=p.useState(null),x=p.useRef(m),[w,S]=p.useState({inView:!!n,entry:void 0});x.current=m,p.useEffect(()=>{if(o||!g)return;let f;return f=W(g,($,b)=>{S({inView:$,entry:b}),x.current&&x.current($,b),b.isIntersecting&&i&&f&&(f(),f=void 0)},{root:c,rootMargin:s,threshold:e,trackVisibility:r,delay:t},a),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,g,c,s,i,o,r,a,t]);const R=(d=w.entry)==null?void 0:d.target,j=p.useRef(void 0);!g&&R&&!i&&!o&&j.current!==R&&(j.current=R,S({inView:!!n,entry:void 0}));const u=[M,w.inView,w.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}const k=(e={})=>{const{ref:t,inView:r}=_({triggerOnce:!0,threshold:.2,...e});return[t,r]},q=v.div`
  display: grid;
  gap: ${({theme:e})=>e.space(6)};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`,F=v.div`
  display: grid;
  grid-template-columns: 140px 1fr 44px;
  gap: 10px;
  align-items: center;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  padding: 4px 0;
  @media (max-width: 480px) {
    grid-template-columns: 100px 1fr 44px;
  }
`,G=v.span`
  color: ${({theme:e})=>e.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,C=v.div`
  font-family: ${({theme:e})=>e.fonts.mono};
  color: ${({theme:e})=>e.colors.primary};
  letter-spacing: 1px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
`,D=v.span`
  color: ${({theme:e})=>e.colors.warning};
  text-align: right;
`,H=(e,t)=>{const s=Math.round(e/100*16*t);return"["+"█".repeat(s)+"░".repeat(16-s)+"]"},J=({skill:e})=>{const[t,r]=k(),[s,c]=E.useState(0);return E.useEffect(()=>{if(!r)return;let i=0;const o=()=>{i+=.05,c(Math.min(1,i)),i<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[r]),l.jsxs(F,{ref:t,children:[l.jsx(G,{children:e.name}),l.jsx(C,{children:H(e.level,s)}),l.jsxs(D,{children:[Math.round(e.level*s),"%"]})]})},I=()=>l.jsx(q,{children:V.map(e=>l.jsx(T,{title:`~/${e.title}`,variant:"cyan",children:e.items.map(t=>l.jsx(J,{skill:t},t.name))},e.title))});I.displayName="Skills";const K=()=>(p.useEffect(()=>B("skills"),[]),l.jsx(I,{}));K.displayName="SkillsPage";export{K as default};
