import{e as r,r as t,j as s,T as n,L as e,u as a}from"./index-D6CGFCdW.js";import{s as i}from"./helpers-dVw9XFd8.js";const c=a.div`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 14px;
  line-height: 1.8;
  color: ${({theme:o})=>o.colors.text};
  em { color: ${({theme:o})=>o.colors.danger}; font-style: normal; }
  a { color: ${({theme:o})=>o.colors.primary}; }
`,l=()=>{const o=r();return t.useEffect(()=>i("404"),[]),s.jsx(n,{title:"bash: error",variant:"cyan",children:s.jsxs(c,{children:[s.jsxs("div",{children:["guest@asad:~$ ",s.jsx("em",{children:o.pathname.replace("/","")})]}),s.jsxs("div",{children:["bash: ",o.pathname,": command not found"]}),s.jsx("div",{children:" "}),s.jsxs("div",{children:["did you mean: ",s.jsx(e,{to:"/",children:"~/home"})," · ",s.jsx(e,{to:"/works",children:"~/works"})," ·"," ",s.jsx(e,{to:"/about",children:"~/about"}),"?"]})]})})};l.displayName="NotFoundPage";export{l as default};
