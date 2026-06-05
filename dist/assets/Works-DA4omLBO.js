import{j as t,u as s,f as I,r as n,b as P}from"./index-ZM-J7A7y.js";import{G as f,P as N}from"./ProjectCard-C44YlCSJ.js";import{d as z,e as M,g as R,i as D,m as h,c as E}from"./motion-CVpf6596.js";import{a as F}from"./index-BOeqtr82.js";import{p as y,c as T}from"./projects-DbJZeoj7.js";import{A as L}from"./index-BICy-9EO.js";import{s as U}from"./helpers-dVw9XFd8.js";const O="asadbekXodjayev",$="gh_cache_v1",V=5*60*1e3,_=e=>({id:e.id,name:e.name,description:e.description,language:e.language,stars:e.stargazers_count??0,updatedAt:e.updated_at,htmlUrl:e.html_url,homepage:e.homepage||null,topics:e.topics||[]}),H=()=>{try{const e=localStorage.getItem($);if(!e)return null;const{data:o,ts:i}=JSON.parse(e);if(Date.now()-i<V&&Array.isArray(o))return o}catch{}return null},G=e=>{try{localStorage.setItem($,JSON.stringify({data:e,ts:Date.now()}))}catch{}},W=async({force:e=!1}={})=>{if(!e){const c=H();if(c)return c}const{data:o}=await F.get(`https://api.github.com/users/${O}/repos`,{params:{per_page:100,sort:"updated"},timeout:1e4}),i=(Array.isArray(o)?o:[]).filter(c=>!c.fork).map(_);return G(i),i},B=e=>{const o=new Date(e);return Number.isNaN(o.getTime())?"":o.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},J=(e,o)=>o==="AI/ML"||o==="Open Source"?e.colors.secondary:e.colors.primary,K=s(h.article)`
  --accent: ${({theme:e,$category:o})=>J(e,o)};
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
`,Z=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 12px;
`,X=s.h3`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.primary};
  word-break: break-all;
`,Y=s.span`
  margin-left: auto;
  font-size: 10px;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 3px;
  padding: 1px 6px;
  white-space: nowrap;
`,q=s.p`
  margin: 0;
  flex: 1;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text};
`,Q=s.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 11px;
  color: ${({theme:e})=>e.colors.textMuted};
`,ee=s.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`,re=s.a`
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
`,j=({repo:e})=>{const o=e.category||"Open Source";return t.jsxs(K,{layout:!0,$category:o,variants:D,whileHover:R,whileTap:M,exit:z,children:[t.jsxs(Z,{children:[t.jsx(f,{}),t.jsx(X,{children:e.title||e.name}),t.jsx(Y,{children:o})]}),t.jsx(q,{children:e.description||"// no description provided"}),t.jsxs(Q,{children:[e.language&&t.jsx(ee,{children:e.language}),t.jsxs("span",{children:["★ ",e.stars]}),e.updatedAt&&t.jsxs("span",{children:["updated ",B(e.updatedAt)]})]}),t.jsxs(re,{href:e.htmlUrl,target:"_blank",rel:"noreferrer",children:[t.jsx(f,{})," view on github ↗"]})]})};j.displayName="RepoCard";const te=I`
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
`,oe=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: ${({theme:e})=>e.space(4)};
  background: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  min-height: 160px;
`,u=s.div`
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
  animation: ${te} 1.4s infinite linear;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,w=()=>t.jsxs(oe,{"aria-hidden":"true",children:[t.jsx(u,{$h:14,$w:"60%"}),t.jsx(u,{$h:10,$w:"100%"}),t.jsx(u,{$h:10,$w:"85%"}),t.jsx(u,{$h:10,$w:"40%"}),t.jsx(u,{$h:28,$w:"50%"})]});w.displayName="SkeletonCard";const ae={"-Dijkstra-Path-Finder-C-CLI-":{category:"C++ / C#",title:"Dijkstra Path Finder (C++/CLI)",desc:"Interactive WinForms app to build a graph and watch Dijkstra's shortest-path algorithm run step-by-step, with a glassmorphic dark UI."},"Dijkstra-Visualizer-Python-":{category:"Python",title:"Dijkstra Visualizer (Python)",desc:"Tkinter desktop app that visualizes Dijkstra's algorithm step-by-step on a user-built weighted graph, with login, animated traversal, and a live step log."},"WinForms-App-Skeleton":{category:"C++ / C#",title:"WinForms App Skeleton",desc:"Minimal C# Windows Forms (.NET Framework 4.7.2) single-window shell, ready to be extended."},"Dijkstra-Visualizer-.NET-8-":{category:"C++ / C#",title:"Dijkstra Visualizer (.NET 8)",desc:"C#/.NET 8 WinForms app visualizing Dijkstra's shortest path on a custom glassmorphic canvas, with local SHA-256 authentication."},"ai-face-recognition":{category:"AI/ML",title:"FACESCAN — Face Analysis",desc:"Real-time biometric terminal — the webcam stream is analyzed live for age, gender, emotion, head pose and landmarks, and recognizes enrolled faces. React + TypeScript + Zustand front-end (EN/RU/UZ) over FastAPI + DeepFace + OpenCV."},"ai-chess-bot":{category:"AI/ML",title:"Chess.com AI Bot",desc:"Play chess against a PyTorch neural network (500K+ params) driving minimax with alpha-beta pruning — Chess.com-style React UI, FastAPI backend, dual-layer move validation and synthesized sound."},"3-projectAI":{category:"AI/ML",title:"AI Documentation Reader",desc:"ML-powered documentation reader — PyTorch + Python backend paired with a React + Vite web app."},"digit-predicterAI":{category:"AI/ML",title:"Digit Predicter (MNIST)",desc:"Handwritten-digit recognition — a CNN trained on MNIST with PyTorch, served over FastAPI to a React + Vite drawing canvas."},"ai-pricePredicter":{category:"AI/ML",title:"Real Estate Price Predictor",desc:"Property-price prediction with scikit-learn gradient boosting (R² ~0.92) behind a FastAPI API — glassmorphic React + Vite UI with live sliders and debounced real-time predictions."}},se=()=>{const[e,o]=n.useState([]),[i,c]=n.useState(!0),[g,p]=n.useState(null);return n.useEffect(()=>{let l=!0;return c(!0),p(null),W().then(d=>{l&&o(d)}).catch(d=>{l&&p(d)}).finally(()=>{l&&c(!1)}),()=>{l=!1}},[]),{repos:e,loading:i,error:g}},ie=s.div`
  margin-bottom: ${({theme:e})=>e.space(5)};
`,ne=s.div`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: ${({theme:e})=>e.space(4)};
  strong {
    color: ${({theme:e})=>e.colors.primary};
  }
`,ce=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,le=s.button`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12.5px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${({theme:e,$active:o})=>o?e.colors.primary:e.colors.border};
  background: ${({theme:e,$active:o})=>o?e.colors.primary:"transparent"};
  color: ${({theme:e,$active:o})=>o?e.colors.bg:e.colors.text};
  transition: all ${({theme:e})=>e.animation.fast};
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e,$active:o})=>o?e.colors.bg:e.colors.primary};
  }
`,de=s.span`
  margin-left: 4px;
  opacity: 0.6;
`,pe=s.a`
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
`,me=s(h.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space(5)};
  align-items: stretch;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,b=s.div`
  grid-column: 1 / -1;
  padding: ${({theme:e})=>e.space(4)};
  border: 1px dashed ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12.5px;
  color: ${({theme:e,$error:o})=>o?e.colors.secondary:e.colors.textMuted};
`,v=()=>{const[e,o]=n.useState("All"),{repos:i,loading:c,error:g}=se(),p=n.useMemo(()=>new Set(y.filter(r=>r.repo).map(r=>r.repo)),[]),l=n.useMemo(()=>{const r={};return i.forEach(a=>{r[a.name]={stars:a.stars,language:a.language}}),r},[i]),d=n.useMemo(()=>y.map(r=>{const a=r.repo?l[r.repo]:null;return a?{...r,...a}:r}),[l]),m=n.useMemo(()=>i.filter(r=>!p.has(r.name)).map(r=>{const a=ae[r.name];return a!=null&&a.hide||!a?null:{...r,isRepo:!0,category:(a==null?void 0:a.category)||"Open Source",title:(a==null?void 0:a.title)||r.name,description:(a==null?void 0:a.desc)||r.description}}).filter(Boolean),[i,p]),x=n.useMemo(()=>{const r=[...d,...m];return e==="All"?r:e==="Open Source"?m:r.filter(a=>a.category===e)},[d,m,e]),k=r=>{const a=[...d,...m];return r==="All"?a.length:r==="Open Source"?m.length:a.filter(S=>S.category===r).length},A=c&&(e==="All"||e==="Open Source"),C=g&&(e==="All"||e==="Open Source");return t.jsxs("section",{children:[t.jsxs(ie,{children:[t.jsxs(ne,{children:[t.jsx("strong",{children:"asad@dev"}),":~/works$ ls --projects --filter=",e.toLowerCase()]}),t.jsx(ce,{id:"works-filters",role:"tablist","aria-label":"project categories",children:T.map(r=>t.jsxs(le,{role:"tab","aria-selected":e===r,$active:e===r,onClick:()=>o(r),children:[r,t.jsxs(de,{children:["[",k(r),"]"]})]},r))}),t.jsxs(pe,{href:P,target:"_blank",rel:"noreferrer","aria-label":"Open AppGraph — interactive architecture graphs for these projects",children:[t.jsxs("span",{children:["$ open ",t.jsx("strong",{children:"sys-design"})," — interactive architecture graphs (file tree · system design · flows) for the projects below"]}),t.jsx("span",{className:"cta",children:"go to AppGraph →"})]})]}),t.jsx(me,{role:"tabpanel","aria-labelledby":"works-filters",variants:E,initial:"hidden",animate:"visible",layout:!0,children:t.jsxs(L,{mode:"popLayout",children:[x.map(r=>r.isRepo?t.jsx(j,{repo:r},`repo-${r.id}`):t.jsx(N,{project:r},r.id)),A&&Array.from({length:4}).map((r,a)=>t.jsx(h.div,{layout:!0,children:t.jsx(w,{})},`sk-${a}`)),C&&t.jsx(b,{$error:!0,children:"✗ couldn't reach the GitHub API (rate limit or offline). Curated projects are still listed above."},"err"),!c&&x.length===0&&t.jsx(b,{children:"// no projects in this category yet."},"empty")]})})]})};v.displayName="Projects";const ue=()=>(n.useEffect(()=>U("works"),[]),t.jsx(v,{}));ue.displayName="WorksPage";export{ue as default};
