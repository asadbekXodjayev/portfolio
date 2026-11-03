import{r as a,i as n,j as s,v as i,w as r,L as t,a as e,f as l}from"./index-B42vXAuJ.js";import{P as d}from"./PageHeader-BrKxorm6.js";import"./Scramble-BhAYuvIe.js";const p=l`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,x=e.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`,f=e.div`
  animation: ${p} 1.6s steps(4) infinite;
`,c=e.p`
  font-family: ${({theme:o})=>o.fonts.pixel};
  font-size: 19px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`,m=()=>(a.useEffect(()=>n("page not found"),[]),s.jsxs(s.Fragment,{children:[s.jsx(d,{title:"Page not found",lede:"That address does not exist on this site. It may have moved."}),s.jsxs(x,{children:[s.jsx(f,{children:s.jsx(i,{rows:r,size:10})}),s.jsxs(c,{children:[s.jsx(t,{to:"/",children:"Home"}),s.jsx(t,{to:"/works",children:"Projects"}),s.jsx(t,{to:"/contributions",children:"Contributions"}),s.jsx(t,{to:"/blog",children:"Writing"})]})]})]}));m.displayName="NotFoundPage";export{m as default};
