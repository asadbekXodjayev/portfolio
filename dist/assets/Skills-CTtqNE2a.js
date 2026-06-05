import{r as m,j as c,T,u as p,R as V}from"./index-wfkkqSLV.js";import{s as z}from"./skills-CtFZAqlD.js";import{a as B,c as k,i as O,m as M}from"./motion-C_Fk74OS.js";import{s as P}from"./helpers-dVw9XFd8.js";var y=new Map,h=new WeakMap,E=0,W=void 0;function G(e){return e?(h.has(e)||(E+=1,h.set(e,E.toString())),h.get(e)):"0"}function N(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?G(e.root):e[t]}`).toString()}function _(e){const t=N(e);let r=y.get(t);if(!r){const s=new Map;let l;const i=new IntersectionObserver(n=>{n.forEach(o=>{var a;const x=o.isIntersecting&&l.some(u=>o.intersectionRatio>=u);e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=x),(a=s.get(o.target))==null||a.forEach(u=>{u(x,o)})})},e);l=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:s},y.set(t,r)}return r}function q(e,t,r={},s=W){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const a=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:l,observer:i,elements:n}=_(r),o=n.get(e)||[];return n.has(e)||n.set(e,o),o.push(t),i.observe(e),function(){o.splice(o.indexOf(t),1),o.length===0&&(n.delete(e),i.unobserve(e)),n.size===0&&(i.disconnect(),y.delete(l))}}function F({threshold:e,delay:t,trackVisibility:r,rootMargin:s,root:l,triggerOnce:i,skip:n,initialInView:o,fallbackInView:a,onChange:x}={}){var u;const[g,I]=m.useState(null),v=m.useRef(x),[b,R]=m.useState({inView:!!o,entry:void 0});v.current=x,m.useEffect(()=>{if(n||!g)return;let f;return f=q(g,(S,$)=>{R({inView:S,entry:$}),v.current&&v.current(S,$),$.isIntersecting&&i&&f&&(f(),f=void 0)},{root:l,rootMargin:s,threshold:e,trackVisibility:r,delay:t},a),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,g,l,s,i,n,r,a,t]);const w=(u=b.entry)==null?void 0:u.target,j=m.useRef(void 0);!g&&w&&!i&&!n&&j.current!==w&&(j.current=w,R({inView:!!o,entry:void 0}));const d=[I,b.inView,b.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}const C=(e={})=>{const{ref:t,inView:r}=F({triggerOnce:!0,threshold:.2,...e});return[t,r]},D=p(M.div)`
  display: grid;
  gap: ${({theme:e})=>e.space(6)};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: start;
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`,L=p(M.div)`
  position: relative;
  border-radius: 8px;
  ${({theme:e,$highlight:t})=>t&&`
    padding: ${e.space(3)};
    background: ${e.colors.surface};
    border: 1px solid color-mix(in srgb, ${e.colors.secondary} 45%, transparent);
    box-shadow: 0 0 40px color-mix(in srgb, ${e.colors.secondary} 12%, transparent);
  `}
`,H=p.span`
  position: absolute;
  top: -10px;
  right: 12px;
  z-index: 2;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 3px;
  color: ${({theme:e})=>e.colors.bg};
  background: ${({theme:e})=>e.colors.secondary};
  box-shadow: 0 0 14px ${({theme:e})=>e.colors.secondary}66;
`,J=p.div`
  display: grid;
  grid-template-columns: 150px 1fr 44px;
  gap: 10px;
  align-items: center;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  padding: 4px 0;
  @media (max-width: 480px) {
    grid-template-columns: 110px 1fr 44px;
  }
`,K=p.span`
  color: ${({theme:e})=>e.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Q=p.div`
  font-family: ${({theme:e})=>e.fonts.mono};
  color: ${({theme:e})=>e.colors.primary};
  letter-spacing: 1px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
`,U=p.span`
  color: ${({theme:e})=>e.colors.primary};
  opacity: 0.65;
  text-align: right;
`,X=(e,t)=>{const s=Math.round(e/100*16*t);return"["+"█".repeat(s)+"░".repeat(16-s)+"]"},Y=({skill:e})=>{const[t,r]=C(),[s,l]=V.useState(0);return V.useEffect(()=>{if(!r)return;let i=0;const n=()=>{i+=.05,l(Math.min(1,i)),i<1&&requestAnimationFrame(n)};requestAnimationFrame(n)},[r]),c.jsxs(J,{ref:t,children:[c.jsx(K,{children:e.name}),c.jsx(Q,{children:X(e.level,s)}),c.jsxs(U,{children:[Math.round(e.level*s),"%"]})]})},A=()=>c.jsx(D,{variants:k,...B,children:z.map(e=>c.jsxs(L,{variants:O,$highlight:e.highlight,children:[e.badge&&c.jsx(H,{children:e.badge}),c.jsx(T,{title:`~/${e.title}`,variant:e.variant||"phosphor-green",glow:e.highlight,children:e.items.map(t=>c.jsx(Y,{skill:t},t.name))})]},e.title))});A.displayName="Skills";const Z=()=>(m.useEffect(()=>P("skills"),[]),c.jsx(A,{}));Z.displayName="SkillsPage";export{Z as default};
