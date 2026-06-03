import{u as r,j as o}from"./index-D6CGFCdW.js";import{d as u,e as y,g as v,i as j,m as $}from"./motion-CCrQ0phj.js";const h=r.span`
  display: inline-block;
  padding: 2px 8px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 3px;
  font-size: 11px;
  color: ${({theme:e})=>e.colors.secondary};
  background: ${({theme:e})=>e.colors.surface};
  font-family: ${({theme:e})=>e.fonts.mono};
`;h.displayName="Badge";const w=(e,n)=>n==="AI/ML"?e.colors.secondary:e.colors.primary,l=r($.article)`
  --accent: ${({theme:e,$category:n})=>w(e,n)};
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
`,k=r.a`
  position: absolute;
  inset: 0;
  z-index: 1;
`,z=r.div`
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
  ${l}:hover & img {
    transform: scale(1.05);
  }
`,C=r.div`
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
`,M=r.div`
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
  ${l}:hover & {
    opacity: 1;
  }
`,T=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${({theme:e})=>e.space(4)};
  flex: 1;
`,B=r.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`,P=r.h3`
  margin: 0;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.primary};
`,A=r.span`
  font-size: 10px;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 3px;
  padding: 1px 6px;
  white-space: nowrap;
`,H=r.p`
  margin: 0;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textMuted};
  flex: 1;
`,L=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,S=r.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  padding-top: 10px;
  border-top: 1px dashed ${({theme:e})=>e.colors.border};
  font-size: 12px;
`,f=r.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${({theme:e})=>e.colors.secondary};
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,_=r.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 11px;
`,E=r.span`
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 11px;
`,F=e=>o.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",...e,children:o.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),G=({project:e})=>{const{title:n,desc:m,tags:d=[],demo:a,github:i,img:p,category:t,placeholder:b,stars:s,language:c}=e,x=a||i;return o.jsxs(l,{layout:!0,$category:t,$featured:e.featured,variants:j,whileHover:v,whileTap:y,exit:u,children:[x&&o.jsx(k,{href:x,target:"_blank",rel:"noreferrer","aria-label":`Open ${n}`}),o.jsxs(z,{children:[p?o.jsx("img",{src:p,alt:n,loading:"lazy"}):o.jsx(C,{children:t}),(a||i)&&o.jsx(M,{children:"view project →"})]}),o.jsxs(T,{children:[o.jsxs(B,{children:[o.jsx(P,{children:n}),o.jsx(A,{children:t})]}),o.jsx(H,{children:m}),d.length>0&&o.jsx(L,{children:d.map(g=>o.jsxs(h,{children:["#",g]},g))}),o.jsxs(S,{children:[i&&o.jsxs(f,{href:i,target:"_blank",rel:"noreferrer",children:[o.jsx(F,{})," code"]}),a&&o.jsx(f,{href:a,target:"_blank",rel:"noreferrer",children:"live ↗"}),b&&!a&&!i&&o.jsx(E,{children:"// details soon"}),(s!=null||c)&&o.jsxs(_,{children:[c&&o.jsx("span",{children:c}),s!=null&&o.jsxs("span",{children:["★ ",s]})]})]})]})]})};G.displayName="ProjectCard";export{F as G,G as P};
