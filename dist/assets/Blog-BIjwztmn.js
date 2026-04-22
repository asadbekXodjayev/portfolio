import{r as t,j as o,T as $,u as n}from"./index-CIQM2dev.js";import{B as v}from"./Button-J4_AO5Pa.js";import{s as y}from"./helpers-dVw9XFd8.js";const w=n.form`
  display: grid;
  gap: 10px;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.secondary};
  max-width: 420px;
`,c=n.input`
  padding: 8px;
  background: ${({theme:e})=>e.colors.bg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.primary};
  font-family: inherit;
  outline: none;
`,B=n.select`
  padding: 8px;
  background: ${({theme:e})=>e.colors.bg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.primary};
  font-family: inherit;
  outline: none;
`,S=n.div`
  margin-top: 20px;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text};
  span { color: ${({theme:e})=>e.colors.warning}; }
`,M=n.div`
  margin-top: 8px;
  font-size: 18px;
  color: ${({theme:e,$kind:a})=>a==="mogged"?e.colors.danger:a==="cap"?e.colors.warning:e.colors.textMuted};
`,C=n.div`
  display: flex;
  gap: 16px;
  align-items: flex-end;
  margin-top: 16px;
`,d=n.div`
  flex: 1;
  max-width: 140px;
  background: ${({theme:e})=>e.colors.primary}22;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  text-align: center;
  padding: 4px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.text};
  height: ${({$h:e})=>e}px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`,E=195,p=()=>{const[e,a]=t.useState(""),[l,m]=t.useState(""),[x,h]=t.useState(""),[g,u]=t.useState(!1),f=s=>{s.preventDefault(),u(!0)},r=parseInt(l,10)||0,i=r<170?"mid":r>195?"cap":"mogged",j=i==="mid"?"Mid tbh":i==="cap"?"Nahh, ur cap!":"HEIGHTMOGGED",b=Math.max(20,Math.min(260,r/E*220));return o.jsxs($,{title:"~/comparision — ./heightmog.sh",variant:"amber",children:[o.jsxs(w,{onSubmit:f,children:[o.jsxs("label",{children:["$ name:",o.jsx(c,{value:e,onChange:s=>a(s.target.value),placeholder:"your name"})]}),o.jsxs("label",{children:["$ height_cm:",o.jsx(c,{type:"number",value:l,onChange:s=>m(s.target.value),placeholder:"e.g. 180"})]}),o.jsxs("label",{children:["$ gender:",o.jsxs(B,{value:x,onChange:s=>h(s.target.value),children:[o.jsx("option",{value:"",children:"-- select --"}),o.jsx("option",{value:"male",children:"male"}),o.jsx("option",{value:"female",children:"female"})]})]}),o.jsx("div",{children:o.jsx(v,{type:"submit",children:"[ compare ]"})})]}),g&&r>0&&o.jsxs(S,{children:[o.jsxs("div",{children:["[",o.jsx("span",{children:"LOG"}),"] comparing ",o.jsx("span",{children:e||"anon"})," (",r,"cm) vs asad (195cm)"]}),o.jsxs(M,{$kind:i,children:["> verdict: ",j]}),o.jsxs(C,{children:[o.jsxs(d,{$h:220,children:["asad",o.jsx("br",{}),"195cm"]}),o.jsxs(d,{$h:b,children:[e||"you",o.jsx("br",{}),r,"cm"]})]})]})]})};p.displayName="Comparison";const G=()=>(t.useEffect(()=>y("comparision"),[]),o.jsx(p,{}));G.displayName="BlogPage";export{G as default};
