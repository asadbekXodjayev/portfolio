import{r as g,i as m,j as e,T as a,a as r,u as s}from"./index-CzdGLStQ.js";import{b as y}from"./ascii-B0p0iegg.js";import{m as i,a as l,c,i as d}from"./motion-kfgkqOtg.js";import{s as u}from"./helpers-dVw9XFd8.js";const b=[{t:"<strong>name:</strong> Xodjayev Asadbek Utkirov"},{t:"<strong>user:</strong> @xodjayev"},{t:"<strong>role:</strong> Front-end &amp; native desktop developer"},{t:"<strong>loc:</strong> Uzbekistan"},{t:"<strong>focus:</strong> React, TypeScript, AI/ML, native C++/C#"},{t:"<strong>email:</strong> xadasad67@gmail.com"},{t:"Hi — I'm <strong>Asadbek</strong>. I build fast, considered web interfaces with React and a stubborn bias for clean, accessible UI. Before the web pulled me in, I was writing <em>C++ and C# Windows Forms</em> apps, and that low-level habit still shapes how I think about performance and detail."},{t:"These days I split my time between shipping production front-ends and going deeper on <em>AI/ML</em> — wiring up models, prompts, and data pipelines into things people actually use. I care about typography, motion that means something, and shipping."}],v=[{year:"~2021",title:"Started with native code",body:"Cut my teeth on C++ and C# — building Windows Forms desktop apps and console tools. Learned how software actually runs before learning how to make it pretty."},{year:"2022",title:"Moved to the web",body:"Fell for the front-end. Went deep on JavaScript, then React — and started shipping real sites for real businesses."},{year:"2023 — 2024",title:"Production front-ends",body:"Built logistics platforms, e-commerce, and a smart-TV app. Adopted TypeScript, Next.js, Feature-Sliced Design, state management, and i18n as daily tools."},{year:"2025 — now",title:"AI/ML + craft",body:"Integrating AI into products — OpenAI, LangChain, PyTorch — while sharpening design, motion, and accessibility on everything I build."}],$=[{name:"PyTorch",note:"training small models end-to-end"},{name:"LLM apps",note:"RAG, agents, structured output"},{name:"Hugging Face",note:"transformers & datasets"},{name:"Three.js",note:"a bit of 3D for the web"}],j=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.space(8)};
`,w=s.div`
  display: grid;
  gap: ${({theme:o})=>o.space(6)};
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.4fr;
  }
`,I=s.pre`
  color: ${({theme:o})=>o.colors.primary};
  font-size: 10px;
  line-height: 1.1;
  text-align: center;
`,k=s.div`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
  color: ${({theme:o})=>o.colors.text};
  margin: 4px 0;
  line-height: 1.55;
  strong {
    color: ${({theme:o})=>o.colors.primary};
  }
  em {
    color: ${({theme:o})=>o.colors.secondary};
    font-style: normal;
  }
`,T=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: ${({theme:o})=>o.space(4)};
`,A=s.button`
  border: 1px solid ${({theme:o,$active:n})=>n?o.colors.primary:o.colors.border};
  color: ${({theme:o,$active:n})=>n?o.colors.bg:o.colors.text};
  background: ${({theme:o,$active:n})=>n?o.colors.primary:"transparent"};
  padding: 4px 10px;
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 12px;
  cursor: pointer;
  transition: all 150ms;
  &:hover {
    border-color: ${({theme:o})=>o.colors.primary};
  }
`,z=s.div`
  margin-top: 12px;
  padding: 10px;
  border-left: 2px solid ${({theme:o})=>o.colors.primary};
  background: ${({theme:o})=>o.colors.surface};
  color: ${({theme:o})=>o.colors.text};
  font-size: 13px;
`,x=s.div`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
  color: ${({theme:o})=>o.colors.textMuted};
  margin-bottom: ${({theme:o})=>o.space(2)};
  strong {
    color: ${({theme:o})=>o.colors.secondary};
  }
`,C=s(i.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.space(5)};
  padding-left: ${({theme:o})=>o.space(6)};
  &::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 4px;
    bottom: 4px;
    width: 1px;
    background: ${({theme:o})=>o.colors.border};
  }
`,S=s(i.div)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: -${({theme:o})=>o.space(6)};
    top: 4px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({theme:o})=>o.colors.bg};
    border: 2px solid ${({theme:o})=>o.colors.primary};
    box-shadow: 0 0 12px ${({theme:o})=>o.colors.primary}55;
  }
`,L=s.div`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 12px;
  color: ${({theme:o})=>o.colors.primary};
  opacity: 0.7;
`,E=s.h3`
  margin: 2px 0 4px;
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 15px;
  color: ${({theme:o})=>o.colors.primary};
`,M=s.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: ${({theme:o})=>o.colors.text};
`,F=s(i.div)`
  display: grid;
  gap: ${({theme:o})=>o.space(3)};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`,P=s(i.div)`
  padding: ${({theme:o})=>o.space(3)} ${({theme:o})=>o.space(4)};
  border: 1px solid color-mix(in srgb, ${({theme:o})=>o.colors.secondary} 35%, transparent);
  border-radius: 6px;
  background: ${({theme:o})=>o.colors.surface};
  font-family: ${({theme:o})=>o.fonts.mono};
  strong {
    color: ${({theme:o})=>o.colors.secondary};
    font-size: 13px;
  }
  span {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    color: ${({theme:o})=>o.colors.textMuted};
  }
`,f=()=>{const[o,n]=g.useState(""),p=m.find(t=>t.name===o);return e.jsxs(j,{children:[e.jsxs(w,{children:[e.jsxs(a,{title:"~/about/portrait",children:[e.jsx(I,{children:y}),e.jsxs("div",{style:{marginTop:12,fontSize:12,color:"#999"},children:[e.jsx("div",{children:"# system"}),e.jsxs("div",{children:["os:     ",r.systemInfo.os]}),e.jsxs("div",{children:["kernel: ",r.systemInfo.kernel]}),e.jsxs("div",{children:["shell:  ",r.systemInfo.shell]}),e.jsxs("div",{children:["editor: ",r.systemInfo.editor]}),e.jsxs("div",{children:["uptime: ",r.systemInfo.uptime]}),e.jsxs("div",{children:["host:   ",r.systemInfo.host]})]})]}),e.jsxs(a,{title:"~/about/bio",children:[e.jsx(i.div,{variants:c,...l,children:b.map((t,h)=>e.jsx(k,{as:i.div,variants:d,dangerouslySetInnerHTML:{__html:t.t}},h))}),e.jsx("div",{style:{marginTop:16,color:"#00ccff",fontSize:12},children:"# interests"}),e.jsx(T,{children:m.map(t=>e.jsx(A,{$active:t.name===o,onClick:()=>n(t.name===o?"":t.name),children:t.name},t.name))}),p&&e.jsx(z,{children:p.desc})]})]}),e.jsxs("div",{children:[e.jsxs(x,{children:[e.jsx("strong",{children:"$"})," git log --oneline ~/journey"]}),e.jsx(a,{title:"~/about/timeline",variant:"cyan",children:e.jsx(C,{variants:c,...l,children:v.map(t=>e.jsxs(S,{variants:d,children:[e.jsx(L,{children:t.year}),e.jsx(E,{children:t.title}),e.jsx(M,{children:t.body})]},t.year))})})]}),e.jsxs("div",{children:[e.jsxs(x,{children:[e.jsx("strong",{children:"$"})," watch ~/currently-exploring"]}),e.jsx(F,{variants:c,...l,children:$.map(t=>e.jsxs(P,{variants:d,children:[e.jsx("strong",{children:t.name}),e.jsx("span",{children:t.note})]},t.name))})]})]})};f.displayName="About";const R=()=>(g.useEffect(()=>u("about"),[]),e.jsx(f,{}));R.displayName="AboutPage";export{R as default};
