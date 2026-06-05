import{j as r,b as w,u as s,f as N,r as n}from"./index-DB3vYdpJ.js";import{G as f,a as z,P as M}from"./ProjectCard-BrDITMj5.js";import{d as R,e as D,g as E,i as F,m as u,c as T}from"./motion-oKKd6ImE.js";import{a as L}from"./index-BOeqtr82.js";import{p as y,c as U}from"./projects-BwosRmEt.js";import{A as _}from"./index-BvC-NKcK.js";import{s as O}from"./helpers-dVw9XFd8.js";const V="asadbekXodjayev",j="gh_cache_v1",H=5*60*1e3,G=e=>({id:e.id,name:e.name,description:e.description,language:e.language,stars:e.stargazers_count??0,updatedAt:e.updated_at,htmlUrl:e.html_url,homepage:e.homepage||null,topics:e.topics||[]}),W=()=>{try{const e=localStorage.getItem(j);if(!e)return null;const{data:a,ts:i}=JSON.parse(e);if(Date.now()-i<H&&Array.isArray(a))return a}catch{}return null},B=e=>{try{localStorage.setItem(j,JSON.stringify({data:e,ts:Date.now()}))}catch{}},J=async({force:e=!1}={})=>{if(!e){const c=W();if(c)return c}const{data:a}=await L.get(`https://api.github.com/users/${V}/repos`,{params:{per_page:100,sort:"updated"},timeout:1e4}),i=(Array.isArray(a)?a:[]).filter(c=>!c.fork).map(G);return B(i),i},K=e=>{const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Z=(e,a)=>a==="AI/ML"||a==="Open Source"?e.colors.secondary:e.colors.primary,X=s(u.article)`
  --accent: ${({theme:e,$category:a})=>Z(e,a)};
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${({theme:e})=>e.space(4)};
  background: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  font-family: ${({theme:e})=>e.fonts.mono};
  transition: border-color ${({theme:e})=>e.animation.fast},
    box-shadow ${({theme:e})=>e.animation.fast};
  &:hover {
    border-color: var(--accent);
    box-shadow: 0 0 30px color-mix(in srgb, var(--accent) 18%, transparent);
  }
`,Y=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 12px;
`,q=s.h3`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.primary};
  word-break: break-all;
`,Q=s.span`
  margin-left: auto;
  font-size: 10px;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 3px;
  padding: 1px 6px;
  white-space: nowrap;
`,ee=s.p`
  margin: 0;
  flex: 1;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text};
`,re=s.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 11px;
  color: ${({theme:e})=>e.colors.textMuted};
`,te=s.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`,ae=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,b=s.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  padding: 6px 10px;
  align-self: flex-start;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px;
  color: ${({theme:e})=>e.colors.secondary};
  font-size: 12px;
  transition: all ${({theme:e})=>e.animation.fast};
  &:hover {
    border-color: var(--accent);
    color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 25%, transparent);
  }
`,v=({repo:e})=>{const a=e.category||"Open Source";return r.jsxs(X,{layout:!0,$category:a,variants:F,whileHover:E,whileTap:D,exit:R,children:[r.jsxs(Y,{children:[r.jsx(f,{}),r.jsx(q,{children:e.title||e.name}),r.jsx(Q,{children:a})]}),r.jsx(ee,{children:e.description||"// no description provided"}),r.jsxs(re,{children:[e.language&&r.jsx(te,{children:e.language}),r.jsxs("span",{children:["★ ",e.stars]}),e.updatedAt&&r.jsxs("span",{children:["updated ",K(e.updatedAt)]})]}),r.jsxs(ae,{children:[r.jsxs(b,{href:e.htmlUrl,target:"_blank",rel:"noreferrer",children:[r.jsx(f,{})," view on github ↗"]}),e.graph&&r.jsxs(b,{href:`${w}/apps/${e.graph}`,target:"_blank",rel:"noreferrer",title:"Interactive architecture graphs — file tree, system design, flows",children:[r.jsx(z,{})," sys-design"]})]})]})};v.displayName="RepoCard";const oe=N`
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
`,se=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: ${({theme:e})=>e.space(4)};
  background: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  min-height: 160px;
`,h=s.div`
  height: ${({$h:e})=>e||12}px;
  width: ${({$w:e})=>e||"100%"};
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.surface} 25%,
    ${({theme:e})=>e.colors.border} 50%,
    ${({theme:e})=>e.colors.surface} 75%
  );
  background-size: 600px 100%;
  animation: ${oe} 1.4s infinite linear;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,k=()=>r.jsxs(se,{"aria-hidden":"true",children:[r.jsx(h,{$h:14,$w:"60%"}),r.jsx(h,{$h:10,$w:"100%"}),r.jsx(h,{$h:10,$w:"85%"}),r.jsx(h,{$h:10,$w:"40%"}),r.jsx(h,{$h:28,$w:"50%"})]});k.displayName="SkeletonCard";const ie={"-Dijkstra-Path-Finder-C-CLI-":{category:"C++ / C#",title:"Dijkstra Path Finder (C++/CLI)",desc:"Interactive WinForms app to build a graph and watch Dijkstra's shortest-path algorithm run step-by-step, with a glassmorphic dark UI.",graph:"dijkstra-path-finder"},"Dijkstra-Visualizer-Python-":{category:"Python",title:"Dijkstra Visualizer (Python)",desc:"Tkinter desktop app that visualizes Dijkstra's algorithm step-by-step on a user-built weighted graph, with login, animated traversal, and a live step log.",graph:"shortest-path-finder"},"WinForms-App-Skeleton":{category:"C++ / C#",title:"WinForms App Skeleton",desc:"Minimal C# Windows Forms (.NET Framework 4.7.2) single-window shell, ready to be extended."},"Dijkstra-Visualizer-.NET-8-":{category:"C++ / C#",title:"Dijkstra Visualizer (.NET 8)",desc:"C#/.NET 8 WinForms app visualizing Dijkstra's shortest path on a custom glassmorphic canvas, with local SHA-256 authentication.",graph:"winforms-dijkstra"},"ai-face-recognition":{category:"AI/ML",title:"FACESCAN — Face Analysis",desc:"Real-time biometric terminal — the webcam stream is analyzed live for age, gender, emotion, head pose and landmarks, and recognizes enrolled faces. React + TypeScript + Zustand front-end (EN/RU/UZ) over FastAPI + DeepFace + OpenCV.",graph:"facescan"},"ai-chess-bot":{category:"AI/ML",title:"Chess.com AI Bot",desc:"Play chess against a PyTorch neural network (500K+ params) driving minimax with alpha-beta pruning — Chess.com-style React UI, FastAPI backend, dual-layer move validation and synthesized sound."},"3-projectAI":{category:"AI/ML",title:"AI Documentation Reader",desc:"ML-powered documentation reader — PyTorch + Python backend paired with a React + Vite web app.",graph:"rag-knowledge-base"},"digit-predicterAI":{category:"AI/ML",title:"Digit Predicter (MNIST)",desc:"Handwritten-digit recognition — a CNN trained on MNIST with PyTorch, served over FastAPI to a React + Vite drawing canvas.",graph:"hand-drawn-digit-recognizer"},"ai-pricePredicter":{category:"AI/ML",title:"Real Estate Price Predictor",desc:"Property-price prediction with scikit-learn gradient boosting (R² ~0.92) behind a FastAPI API — glassmorphic React + Vite UI with live sliders and debounced real-time predictions.",graph:"real-estate-price-predictor"}},ne=()=>{const[e,a]=n.useState([]),[i,c]=n.useState(!0),[m,p]=n.useState(null);return n.useEffect(()=>{let l=!0;return c(!0),p(null),J().then(d=>{l&&a(d)}).catch(d=>{l&&p(d)}).finally(()=>{l&&c(!1)}),()=>{l=!1}},[]),{repos:e,loading:i,error:m}},ce=s.div`
  margin-bottom: ${({theme:e})=>e.space(5)};
`,le=s.div`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: ${({theme:e})=>e.space(4)};
  strong {
    color: ${({theme:e})=>e.colors.primary};
  }
`,de=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,pe=s.button`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12.5px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${({theme:e,$active:a})=>a?e.colors.primary:e.colors.border};
  background: ${({theme:e,$active:a})=>a?e.colors.primary:"transparent"};
  color: ${({theme:e,$active:a})=>a?e.colors.bg:e.colors.text};
  transition: all ${({theme:e})=>e.animation.fast};
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e,$active:a})=>a?e.colors.bg:e.colors.primary};
  }
`,ge=s.span`
  margin-left: 4px;
  opacity: 0.6;
`,he=s.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: ${({theme:e})=>e.space(4)};
  padding: ${({theme:e})=>e.space(3)} ${({theme:e})=>e.space(4)};
  border: 1px dashed ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12.5px;
  color: ${({theme:e})=>e.colors.textMuted};
  transition: all ${({theme:e})=>e.animation.fast};

  strong {
    color: ${({theme:e})=>e.colors.primary};
    font-weight: 600;
  }

  .cta {
    margin-left: auto;
    color: ${({theme:e})=>e.colors.secondary};
    white-space: nowrap;
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    border-style: solid;
    color: ${({theme:e})=>e.colors.text};
    box-shadow: 0 0 24px
      color-mix(in srgb, ${({theme:e})=>e.colors.primary} 15%, transparent);
    .cta {
      color: ${({theme:e})=>e.colors.primary};
    }
  }
`,me=s(u.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space(5)};
  align-items: stretch;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,$=s.div`
  grid-column: 1 / -1;
  padding: ${({theme:e})=>e.space(4)};
  border: 1px dashed ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12.5px;
  color: ${({theme:e,$error:a})=>a?e.colors.secondary:e.colors.textMuted};
`,A=()=>{const[e,a]=n.useState("All"),{repos:i,loading:c,error:m}=ne(),p=n.useMemo(()=>new Set(y.filter(t=>t.repo).map(t=>t.repo)),[]),l=n.useMemo(()=>{const t={};return i.forEach(o=>{t[o.name]={stars:o.stars,language:o.language}}),t},[i]),d=n.useMemo(()=>y.map(t=>{const o=t.repo?l[t.repo]:null;return o?{...t,...o}:t}),[l]),g=n.useMemo(()=>i.filter(t=>!p.has(t.name)).map(t=>{const o=ie[t.name];return o!=null&&o.hide||!o?null:{...t,isRepo:!0,category:(o==null?void 0:o.category)||"Open Source",title:(o==null?void 0:o.title)||t.name,description:(o==null?void 0:o.desc)||t.description,graph:o==null?void 0:o.graph}}).filter(Boolean),[i,p]),x=n.useMemo(()=>{const t=[...d,...g];return e==="All"?t:e==="Open Source"?g:t.filter(o=>o.category===e)},[d,g,e]),C=t=>{const o=[...d,...g];return t==="All"?o.length:t==="Open Source"?g.length:o.filter(P=>P.category===t).length},I=c&&(e==="All"||e==="Open Source"),S=m&&(e==="All"||e==="Open Source");return r.jsxs("section",{children:[r.jsxs(ce,{children:[r.jsxs(le,{children:[r.jsx("strong",{children:"asad@dev"}),":~/works$ ls --projects --filter=",e.toLowerCase()]}),r.jsx(de,{id:"works-filters",role:"tablist","aria-label":"project categories",children:U.map(t=>r.jsxs(pe,{role:"tab","aria-selected":e===t,$active:e===t,onClick:()=>a(t),children:[t,r.jsxs(ge,{children:["[",C(t),"]"]})]},t))}),r.jsxs(he,{href:w,target:"_blank",rel:"noreferrer","aria-label":"Open AppGraph — interactive architecture graphs for these projects",children:[r.jsxs("span",{children:["$ open ",r.jsx("strong",{children:"sys-design"})," — interactive architecture graphs (file tree · system design · flows) for the projects below"]}),r.jsx("span",{className:"cta",children:"go to AppGraph →"})]})]}),r.jsx(me,{role:"tabpanel","aria-labelledby":"works-filters",variants:T,initial:"hidden",animate:"visible",layout:!0,children:r.jsxs(_,{mode:"popLayout",children:[x.map(t=>t.isRepo?r.jsx(v,{repo:t},`repo-${t.id}`):r.jsx(M,{project:t},t.id)),I&&Array.from({length:4}).map((t,o)=>r.jsx(u.div,{layout:!0,children:r.jsx(k,{})},`sk-${o}`)),S&&r.jsx($,{$error:!0,children:"✗ couldn't reach the GitHub API (rate limit or offline). Curated projects are still listed above."},"err"),!c&&x.length===0&&r.jsx($,{children:"// no projects in this category yet."},"empty")]})})]})};A.displayName="Projects";const ue=()=>(n.useEffect(()=>O("works"),[]),r.jsx(A,{}));ue.displayName="WorksPage";export{ue as default};
