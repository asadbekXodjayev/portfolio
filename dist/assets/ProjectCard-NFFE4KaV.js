import{a as r,j as o,l as j,n as $,p as b}from"./index-B42vXAuJ.js";import{e as v,g as w,h as k,a as z,m as M}from"./motion-w-qEz2L7.js";const g=r.span`
  display: inline-block;
  padding: 1px 8px;
  border: 2px solid ${({theme:e})=>e.colors.border};
  font-size: 12px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textMuted};
  background: ${({theme:e})=>e.colors.bgSecondary};
  font-family: ${({theme:e})=>e.fonts.mono};
`;g.displayName="Badge";const C=e=>e.colors.primary,m=r(M.article)`
  --accent: ${({theme:e,$category:n})=>C(e)};
  position: relative;
  display: flex;
  flex-direction: column;
  ${b(4)}
  background: ${({theme:e})=>e.colors.bgSecondary};
  overflow: hidden;
  font-family: ${({theme:e})=>e.fonts.ui};
  ${$}
`,B=r.a`
  position: absolute;
  inset: 0;
  z-index: 1;
`,P=r.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.surface};
  border-bottom: 2px solid ${({theme:e})=>e.colors.ink};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform ${({theme:e})=>e.animation.normal}
      ${({theme:e})=>e.animation.easing};
  }
`,T=r.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.textMuted};
  background: ${({theme:e})=>e.colors.surface};
`,_=r.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, ${({theme:e})=>e.colors.bg} 80%, transparent);
  color: var(--accent);
  font-size: 14px;
  font-weight: 500;
  opacity: 0;
  transition: opacity ${({theme:e})=>e.animation.fast};
  ${m}:hover & {
    opacity: 1;
  }
`,A=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${({theme:e})=>e.space(4)};
  flex: 1;
`,G=r.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`,H=r.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 21px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,I=r.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textMuted};
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: 0;
  padding: 1px 6px;
  white-space: nowrap;
`,L=r.p`
  margin: 0;
  font-family: ${({theme:e})=>e.fonts.serif};
  font-size: 16px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textMuted};
  flex: 1;
`,S=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,D=r.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  padding-top: 10px;
  border-top: 2px dotted ${({theme:e})=>e.colors.border};
  font-size: 14px;
`,c=r.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,E=r.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
`,F=r.span`
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 13px;
`,N=e=>o.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",...e,children:o.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),O=e=>o.jsxs("svg",{viewBox:"0 0 16 16",width:"13",height:"13",fill:"none",stroke:"currentColor",strokeWidth:"1.4","aria-hidden":"true",...e,children:[o.jsx("circle",{cx:"8",cy:"3.2",r:"1.8"}),o.jsx("circle",{cx:"3.2",cy:"12",r:"1.8"}),o.jsx("circle",{cx:"12.8",cy:"12",r:"1.8"}),o.jsx("path",{d:"M8 5v3M6.8 9.8 4.2 10.6M9.2 9.8l2.6.8"})]}),R=({project:e})=>{const{title:n,desc:u,tags:d=[],demo:t,github:i,graph:p,img:x,category:s,placeholder:y,stars:a,language:l}=e,h=t||i;return o.jsxs(m,{layout:!0,$category:s,$featured:e.featured,variants:z,whileHover:k,whileTap:w,exit:v,children:[h&&o.jsx(B,{href:h,target:"_blank",rel:"noreferrer","aria-label":`Open ${n}`}),o.jsxs(P,{children:[x?o.jsx("img",{src:x,alt:n,loading:"lazy"}):o.jsx(T,{children:s}),(t||i)&&o.jsx(_,{children:"View project"})]}),o.jsxs(A,{children:[o.jsxs(G,{children:[o.jsx(H,{children:n}),o.jsx(I,{children:s})]}),o.jsx(L,{children:u}),d.length>0&&o.jsx(S,{children:d.map(f=>o.jsx(g,{children:f},f))}),o.jsxs(D,{children:[i&&o.jsxs(c,{href:i,target:"_blank",rel:"noreferrer",children:[o.jsx(N,{})," Code"]}),t&&o.jsx(c,{href:t,target:"_blank",rel:"noreferrer",children:"Live site"}),p&&o.jsxs(c,{href:`${j}/apps/${p}`,target:"_blank",rel:"noreferrer",title:"Interactive architecture graphs — file tree, system design, flows",children:[o.jsx(O,{})," Architecture"]}),y&&!t&&!i&&o.jsx(F,{children:"Details coming soon"}),(a!=null||l)&&o.jsxs(E,{children:[l&&o.jsx("span",{children:l}),a!=null&&o.jsxs("span",{children:[a," stars"]})]})]})]})]})};R.displayName="ProjectCard";export{N as G,R as P,O as a};
