import{r as d,i as l,j as s,T as c,a as e,u as n}from"./index-XKW2WSWG.js";import{b as p}from"./ascii-B0p0iegg.js";import{s as f}from"./helpers-dVw9XFd8.js";const x=n.div`
  display: grid;
  gap: ${({theme:o})=>o.space(6)};
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.4fr;
  }
`,g=n.pre`
  color: ${({theme:o})=>o.colors.primary};
  font-size: 10px;
  line-height: 1.1;
  text-align: center;
`,y=n.div`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
  color: ${({theme:o})=>o.colors.text};
  margin: 4px 0;
  opacity: 0;
  animation: rise 500ms forwards;
  animation-delay: ${({$i:o})=>o*120}ms;
  @keyframes rise { to { opacity: 1; } }
  strong { color: ${({theme:o})=>o.colors.primary}; }
  em { color: ${({theme:o})=>o.colors.secondary}; font-style: normal; }
`,u=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: ${({theme:o})=>o.space(4)};
`,h=n.button`
  border: 1px solid ${({theme:o,$active:t})=>t?o.colors.primary:o.colors.border};
  color: ${({theme:o,$active:t})=>t?o.colors.bg:o.colors.text};
  background: ${({theme:o,$active:t})=>t?o.colors.primary:"transparent"};
  padding: 4px 10px;
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 12px;
  cursor: pointer;
  transition: all 150ms;
  &:hover { border-color: ${({theme:o})=>o.colors.primary}; }
`,b=n.div`
  margin-top: 12px;
  padding: 10px;
  border-left: 2px solid ${({theme:o})=>o.colors.primary};
  background: ${({theme:o})=>o.colors.surface};
  color: ${({theme:o})=>o.colors.text};
  font-size: 13px;
`,j=[{t:"<strong>user:</strong> asad"},{t:"<strong>role:</strong> front-end developer"},{t:"<strong>loc:</strong> Uzbekistan"},{t:"<strong>focus:</strong> React, UI, fast interfaces"},{t:"Greetings! I build web things with React and a strong bias for clean, fast UI. I love terminals, typography, and details."}],m=()=>{const[o,t]=d.useState(""),i=l.find(r=>r.name===o);return s.jsxs(x,{children:[s.jsxs(c,{title:"~/about/portrait",variant:"amber",children:[s.jsx(g,{children:p}),s.jsxs("div",{style:{marginTop:12,fontSize:12,color:"#999"},children:[s.jsx("div",{children:"# system"}),s.jsxs("div",{children:["os:     ",e.systemInfo.os]}),s.jsxs("div",{children:["kernel: ",e.systemInfo.kernel]}),s.jsxs("div",{children:["shell:  ",e.systemInfo.shell]}),s.jsxs("div",{children:["editor: ",e.systemInfo.editor]}),s.jsxs("div",{children:["uptime: ",e.systemInfo.uptime]}),s.jsxs("div",{children:["host:   ",e.systemInfo.host]})]})]}),s.jsxs(c,{title:"~/about/bio",children:[j.map((r,a)=>s.jsx(y,{$i:a,dangerouslySetInnerHTML:{__html:r.t}},a)),s.jsx("div",{style:{marginTop:16,color:"#00ccff",fontSize:12},children:"# interests"}),s.jsx(u,{children:l.map(r=>s.jsx(h,{$active:r.name===o,onClick:()=>t(r.name===o?"":r.name),children:r.name},r.name))}),i&&s.jsx(b,{children:i.desc})]})]})};m.displayName="About";const v=()=>(d.useEffect(()=>f("about"),[]),s.jsx(m,{}));v.displayName="AboutPage";export{v as default};
