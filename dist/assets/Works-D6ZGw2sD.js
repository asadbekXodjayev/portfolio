import{u as s,r as n,j as r,T as u}from"./index-CIQM2dev.js";import{p as l}from"./projects-DLznsBNq.js";import{s as g}from"./helpers-dVw9XFd8.js";const d=s.span`
  display: inline-block;
  padding: 2px 8px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 3px;
  font-size: 11px;
  color: ${({theme:e})=>e.colors.secondary};
  background: ${({theme:e})=>e.colors.surface};
  font-family: ${({theme:e})=>e.fonts.mono};
`;d.displayName="Badge";const h=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: ${({theme:e})=>e.space(4)};
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.secondary};
  flex-wrap: wrap;
`,y=s.input`
  flex: 1;
  min-width: 140px;
  border: 1px dashed ${({theme:e})=>e.colors.border};
  padding: 4px 8px;
  color: ${({theme:e})=>e.colors.primary};
  font-family: inherit;
  font-size: inherit;
  outline: none;
`,j=s.div`
  display: flex;
  flex-direction: column;
`,c=s.a`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 12px;
  padding: 10px 8px;
  border-bottom: 1px dashed ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  align-items: center;
  transition: background ${({theme:e})=>e.animation.fast};
  &:hover {
    background: ${({theme:e})=>e.colors.primary}11;
    color: ${({theme:e})=>e.colors.primary};
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,b=s.span`
  color: ${({theme:e})=>e.colors.warning};
`,$=s.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  strong { color: ${({theme:e})=>e.colors.primary}; }
  span { color: ${({theme:e})=>e.colors.textMuted}; font-size: 12px; }
`,w=s.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,k=s.img`
  width: 100%;
  max-width: 320px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 12px;
  border-radius: 4px;
  display: block;
`,p=()=>{const[e,x]=n.useState(""),[m,f]=n.useState(null),a=n.useMemo(()=>{const o=e.toLowerCase().replace(/^--tag=/,"").trim();return o?l.filter(t=>t.title.toLowerCase().includes(o)||t.tags.some(i=>i.includes(o))||t.desc.toLowerCase().includes(o)):l},[e]);return r.jsxs(u,{title:"~/works/projects — ls -la",children:[r.jsxs(h,{children:[r.jsx("span",{children:"$ filter"}),r.jsx(y,{placeholder:"--tag=react",value:e,onChange:o=>x(o.target.value),"aria-label":"filter projects"})]}),r.jsxs(j,{children:[a.map(o=>{const t=m===o.key;return r.jsxs(c,{href:o.href,target:"_blank",rel:"noreferrer",onClick:i=>{t||(i.preventDefault(),f(o.key))},children:[r.jsxs(b,{children:["[",o.type,"]"]}),r.jsxs($,{children:[r.jsx("strong",{children:o.title}),r.jsx("span",{children:o.desc}),t&&r.jsx(k,{src:o.img,alt:o.title,loading:"lazy"})]}),r.jsx(w,{children:o.tags.map(i=>r.jsxs(d,{children:["#",i]},i))})]},o.key)}),a.length===0&&r.jsx(c,{as:"div",children:"no matches."})]})]})};p.displayName="Projects";const v=()=>(n.useEffect(()=>g("works"),[]),r.jsx(p,{}));v.displayName="WorksPage";export{v as default};
