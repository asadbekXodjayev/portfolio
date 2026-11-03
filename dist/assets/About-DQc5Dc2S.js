import{r as m,o as d,j as t,R as f,g as l,L as y,a as n,i as b}from"./index-ZEvam18P.js";import{a as w,c as j}from"./ai-Bk0F6kU5.js";import{i as I,c as v,a as $,m as g}from"./motion-CBh4ijnm.js";import{P as k}from"./PageHeader-DsvG0M9i.js";import"./Scramble-C1bVU6Ri.js";const h=[{t:"<strong>name:</strong> Xodjayev Asadbek Utkirov"},{t:"<strong>user:</strong> @xodjayev"},{t:"<strong>role:</strong> Software developer"},{t:"<strong>loc:</strong> Uzbekistan"},{t:"<strong>focus:</strong> React, TypeScript, AI/ML &amp; agents, native C++/C#"},{t:"<strong>email:</strong> asadbekxodjayev@webster.edu"},{t:"Hi — I'm <strong>Asadbek</strong>. I build fast, considered web interfaces with React and a stubborn bias for clean, accessible UI. Before the web pulled me in, I was writing <em>C++ and C# Windows Forms</em> apps, and that low-level habit still shapes how I think about performance and detail."},{t:"These days I split my time between shipping production software and going deeper on <em>AI/ML</em> — wiring up models, prompts, and data pipelines into things people actually use. I care about typography, motion that means something, and shipping."},{t:"I run a full <strong>AI-assisted engineering ecosystem</strong> — coding agents that scaffold and review features, and automated QA agents that write and self-heal end-to-end tests — layered over the models and platforms I use daily (<em>Claude, GPT, Gemini</em>, and more). I also wire APIs into everything I ship: <em>OpenAI, Claude, Telegram Bot, GitHub, Spotify</em> and internal services documented with <em>OpenAPI</em>."}],A=[{year:"~2021",title:"Started with native code",body:"Cut my teeth on C++ and C# — building Windows Forms desktop apps and console tools. Learned how software actually runs before learning how to make it pretty."},{year:"2022",title:"Moved to the web",body:"Fell for the web. Went deep on JavaScript, then React — and started shipping real sites for real businesses."},{year:"2023 — 2024",title:"Production software",body:"Built logistics platforms, e-commerce, and a smart-TV app. Adopted TypeScript, Next.js, Feature-Sliced Design, state management, and i18n as daily tools."},{year:"2025",title:"AI/ML + craft",body:"Integrating AI into products — OpenAI, LangChain, PyTorch — while sharpening design, motion, and accessibility on everything I build."},{year:"2026 — now",title:"AI agents & automation",body:"Building with a full stack of AI agents — Claude, GPT, Gemini and more — to automate coding, code review, and QA. Playwright + Allure now cover regression testing end-to-end, while OpenAPI, Telegram Bot, and Claude/OpenAI APIs tie products together under CI/CD pipelines."}],C=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space(16)};
`,o=n.section`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: ${({theme:e})=>e.space(8)};
  @media (max-width: 800px) { grid-template-columns: 1fr; gap: ${({theme:e})=>e.space(4)}; }
`,i=n.h2`
  font-size: 24px;
  position: sticky;
  top: 84px;
  align-self: start;
  @media (max-width: 800px) { position: static; }
`,c=n.div`
  display: grid;
  gap: ${({theme:e})=>e.space(4)};
  p { font-size: 19px; line-height: 1.65; }
  strong { font-weight: 600; }
  em { font-style: italic; }
  a { text-underline-offset: 3px; }
`,T=n.dl`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 8px 16px;
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 15px;
  padding-bottom: ${({theme:e})=>e.space(5)};
  border-bottom: 2px dotted ${({theme:e})=>e.colors.border};
  dt { color: ${({theme:e})=>e.colors.textMuted}; }
`,p=n.dl`
  display: grid;
  gap: ${({theme:e})=>e.space(4)};
  dt { font-family: ${({theme:e})=>e.fonts.ui}; font-weight: 600; font-size: 16px; }
  dd { font-size: 17px; color: ${({theme:e})=>e.colors.textMuted}; margin-top: 2px; }
`,z=n(g.ol)`
  list-style: none;
  display: grid;
  gap: ${({theme:e})=>e.space(6)};
`,P=n(g.li)`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: ${({theme:e})=>e.space(4)};
  @media (max-width: 560px) { grid-template-columns: 1fr; gap: 2px; }
  time { font-family: ${({theme:e})=>e.fonts.mono}; font-size: 13px; color: ${({theme:e})=>e.colors.textMuted}; padding-top: 5px; }
  h3 { font-size: 20px; margin-bottom: 4px; }
  p { font-size: 17px; color: ${({theme:e})=>e.colors.textMuted}; }
`,S=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,L=n.button`
  padding: 5px 12px;
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 16px;
  border: 2px solid ${({theme:e})=>e.colors.ink};
  color: ${({theme:e,$active:a})=>a?e.colors.accentInk:e.colors.text};
  background: ${({theme:e,$active:a})=>a?e.colors.accent:e.colors.bgSecondary};
  box-shadow: ${({$active:e})=>e?"none":"3px 3px 0"} ${({theme:e})=>e.colors.shadow};
  transform: ${({$active:e})=>e?"translate(3px, 3px)":"none"};
  &:hover { background: ${({theme:e})=>e.colors.accent}; color: ${({theme:e})=>e.colors.accentInk}; }
`,M=n.p`
  margin-top: 14px;
  padding-left: 14px;
  border-left: 4px solid ${({theme:e})=>e.colors.accent};
  font-size: 17px;
  color: ${({theme:e})=>e.colors.textMuted};
`,B=h.filter(e=>/^<strong>[a-z]+:<\/strong>/i.test(e.t)),F=h.filter(e=>!/^<strong>[a-z]+:<\/strong>/i.test(e.t)),E=e=>{const a=e.match(/^<strong>([^<]+):<\/strong>\s*(.*)$/i);return a?{k:a[1],v:a[2].replace(/&amp;/g,"&")}:{k:"",v:e}},x=()=>{const[e,a]=m.useState(""),r=d.find(s=>s.name===e);return t.jsxs(C,{children:[t.jsxs(o,{children:[t.jsx(i,{children:"Background"}),t.jsxs(c,{children:[t.jsxs(T,{children:[B.map(s=>E(s.t)).filter(s=>!/^(user|email)$/i.test(s.k)).map(s=>t.jsxs(f.Fragment,{children:[t.jsx("dt",{children:s.k[0].toUpperCase()+s.k.slice(1)}),t.jsx("dd",{children:s.v})]},s.k)),t.jsx("dt",{children:"Email"}),t.jsx("dd",{children:t.jsx("a",{href:`mailto:${l.academicEmail}`,children:l.academicEmail})})]}),F.map((s,u)=>t.jsx("p",{dangerouslySetInnerHTML:{__html:s.t}},u))]})]}),t.jsxs(o,{children:[t.jsx(i,{children:"AI: studies and goals"}),t.jsxs(c,{children:[t.jsxs("p",{children:["AI is where my work is heading. I am studying how models are built and run, and I want to contribute to the infrastructure and security around them. The longer version is in"," ",t.jsx(y,{to:"/blog/future-goals",children:"my goals post"}),"."]}),t.jsx(p,{children:w.map(s=>t.jsxs("div",{children:[t.jsx("dt",{children:s.name}),t.jsx("dd",{children:s.note})]},s.name))}),t.jsx("h3",{style:{fontSize:20,marginTop:8},children:"Goals"}),t.jsx(p,{children:j.map(s=>t.jsxs("div",{children:[t.jsx("dt",{children:s.title}),t.jsx("dd",{children:s.body})]},s.title))})]})]}),t.jsxs(o,{children:[t.jsx(i,{children:"Timeline"}),t.jsx(z,{variants:v,...I,children:A.map(s=>t.jsxs(P,{variants:$,children:[t.jsx("time",{children:s.year}),t.jsxs("div",{children:[t.jsx("h3",{children:s.title}),t.jsx("p",{children:s.body})]})]},s.year))})]}),t.jsxs(o,{children:[t.jsx(i,{children:"Outside work"}),t.jsxs("div",{children:[t.jsx(S,{children:d.map(s=>t.jsx(L,{type:"button",$active:s.name===e,"aria-pressed":s.name===e,onClick:()=>a(s.name===e?"":s.name),children:s.name},s.name))}),r&&t.jsx(M,{children:r.desc})]})]})]})};x.displayName="About";const G=()=>(m.useEffect(()=>b("about"),[]),t.jsxs(t.Fragment,{children:[t.jsx(k,{title:"About",lede:"Background, what I am studying in AI, and where I am heading."}),t.jsx(x,{})]}));G.displayName="AboutPage";export{G as default};
