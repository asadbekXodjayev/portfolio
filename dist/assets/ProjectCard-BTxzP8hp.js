import{u as o,j as r,b as y}from"./index-Cz0j39ew.js";import{d as j,e as v,g as $,i as w,m as k}from"./motion-BRvIIh6Q.js";const m=o.span`
  display: inline-block;
  padding: 2px 8px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 3px;
  font-size: 11px;
  color: ${({theme:e})=>e.colors.secondary};
  background: ${({theme:e})=>e.colors.surface};
  font-family: ${({theme:e})=>e.fonts.mono};
`;m.displayName="Badge";const z=(e,i)=>i==="AI/ML"?e.colors.secondary:e.colors.primary,d=o(k.article)`
  --accent: ${({theme:e,$category:i})=>z(e,i)};
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  overflow: hidden;
  font-family: ${({theme:e})=>e.fonts.mono};
  transition: border-color ${({theme:e})=>e.animation.fast},
    box-shadow ${({theme:e})=>e.animation.fast};

  &:hover {
    border-color: var(--accent);
    box-shadow: 0 0 30px color-mix(in srgb, var(--accent) 18%, transparent);
  }
`,C=o.a`
  position: absolute;
  inset: 0;
  z-index: 1;
`,M=o.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.surface};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform ${({theme:e})=>e.animation.normal}
      ${({theme:e})=>e.animation.easing};
  }
  ${d}:hover & img {
    transform: scale(1.05);
  }
`,B=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  letter-spacing: 2px;
  color: ${({theme:e})=>e.colors.bg};
  background: linear-gradient(135deg, var(--accent) 0%, ${({theme:e})=>e.colors.bgSecondary} 90%);
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.08) 0 10px, transparent 10px 20px);
  }
`,T=o.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.bg}cc;
  color: var(--accent);
  font-size: 13px;
  letter-spacing: 1px;
  opacity: 0;
  transition: opacity ${({theme:e})=>e.animation.fast};
  ${d}:hover & {
    opacity: 1;
  }
`,I=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${({theme:e})=>e.space(4)};
  flex: 1;
`,P=o.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`,_=o.h3`
  margin: 0;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.primary};
`,A=o.span`
  font-size: 10px;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 3px;
  padding: 1px 6px;
  white-space: nowrap;
`,G=o.p`
  margin: 0;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textMuted};
  flex: 1;
`,H=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,L=o.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  padding-top: 10px;
  border-top: 1px dashed ${({theme:e})=>e.colors.border};
  font-size: 12px;
`,l=o.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${({theme:e})=>e.colors.secondary};
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,S=o.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 11px;
`,E=o.span`
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 11px;
`,F=e=>r.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",...e,children:r.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),N=e=>r.jsxs("svg",{viewBox:"0 0 16 16",width:"13",height:"13",fill:"none",stroke:"currentColor",strokeWidth:"1.4","aria-hidden":"true",...e,children:[r.jsx("circle",{cx:"8",cy:"3.2",r:"1.8"}),r.jsx("circle",{cx:"3.2",cy:"12",r:"1.8"}),r.jsx("circle",{cx:"12.8",cy:"12",r:"1.8"}),r.jsx("path",{d:"M8 5v3M6.8 9.8 4.2 10.6M9.2 9.8l2.6.8"})]}),O=({project:e})=>{const{title:i,desc:b,tags:p=[],demo:a,github:n,graph:x,img:g,category:s,placeholder:u,stars:t,language:c}=e,h=a||n;return r.jsxs(d,{layout:!0,$category:s,$featured:e.featured,variants:w,whileHover:$,whileTap:v,exit:j,children:[h&&r.jsx(C,{href:h,target:"_blank",rel:"noreferrer","aria-label":`Open ${i}`}),r.jsxs(M,{children:[g?r.jsx("img",{src:g,alt:i,loading:"lazy"}):r.jsx(B,{children:s}),(a||n)&&r.jsx(T,{children:"view project →"})]}),r.jsxs(I,{children:[r.jsxs(P,{children:[r.jsx(_,{children:i}),r.jsx(A,{children:s})]}),r.jsx(G,{children:b}),p.length>0&&r.jsx(H,{children:p.map(f=>r.jsxs(m,{children:["#",f]},f))}),r.jsxs(L,{children:[n&&r.jsxs(l,{href:n,target:"_blank",rel:"noreferrer",children:[r.jsx(F,{})," code"]}),a&&r.jsx(l,{href:a,target:"_blank",rel:"noreferrer",children:"live ↗"}),x&&r.jsxs(l,{href:`${y}/apps/${x}`,target:"_blank",rel:"noreferrer",title:"Interactive architecture graphs — file tree, system design, flows",children:[r.jsx(N,{})," sys-design"]}),u&&!a&&!n&&r.jsx(E,{children:"// details soon"}),(t!=null||c)&&r.jsxs(S,{children:[c&&r.jsx("span",{children:c}),t!=null&&r.jsxs("span",{children:["★ ",t]})]})]})]})]})};O.displayName="ProjectCard";export{F as G,O as P,N as a};
