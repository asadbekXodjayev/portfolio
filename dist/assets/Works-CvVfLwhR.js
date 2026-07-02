import{j as r,b as A,u as o,f as R,r as c}from"./index-RYOv0nIk.js";import{G as $,a as F,P as T}from"./ProjectCard-BXX_Jz0x.js";import{d as L,e as U,g as O,i as _,m as b,c as V}from"./motion-Cw3GtMuw.js";import{a as H}from"./index-BOeqtr82.js";import{p as w,c as G}from"./projects-BBRM8lM_.js";import{A as W}from"./index-BaIISIX3.js";import{s as B}from"./helpers-dVw9XFd8.js";const C="asadbekXodjayev",P="gh_cache_v1",J=5*60*1e3,K=e=>({id:e.id,name:e.name,description:e.description,language:e.language,stars:e.stargazers_count??0,updatedAt:e.updated_at,htmlUrl:e.html_url,homepage:e.homepage||null,topics:e.topics||[]}),X=()=>{try{const e=localStorage.getItem(P);if(!e)return null;const{data:a,ts:n}=JSON.parse(e);if(Date.now()-n<J&&Array.isArray(a))return a}catch{}return null},Y=e=>{try{localStorage.setItem(P,JSON.stringify({data:e,ts:Date.now()}))}catch{}},Z=async({force:e=!1}={})=>{if(!e){const l=X();if(l)return l}const{data:a}=await H.get(`https://api.github.com/users/${C}/repos`,{params:{per_page:100,sort:"updated"},timeout:1e4}),n=(Array.isArray(a)?a:[]).filter(l=>!l.fork).map(K);return Y(n),n},q=e=>{const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Q=(e,a)=>a==="AI/ML"||a==="Open Source"?e.colors.secondary:e.colors.primary,S=o(b.article)`
  --accent: ${({theme:e,$category:a})=>Q(e,a)};
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
`,ee=o.div`
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
  ${S}:hover & img {
    transform: scale(1.05);
  }
`,re=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${({theme:e})=>e.space(4)};
  flex: 1;
`,te=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 12px;
`,ae=o.h3`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.primary};
  word-break: break-all;
`,oe=o.span`
  margin-left: auto;
  font-size: 10px;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 3px;
  padding: 1px 6px;
  white-space: nowrap;
`,se=o.p`
  margin: 0;
  flex: 1;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text};
`,ie=o.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 11px;
  color: ${({theme:e})=>e.colors.textMuted};
`,ne=o.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`,ce=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,v=o.a`
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
`,I=({repo:e})=>{const a=e.category||"Open Source";return r.jsxs(S,{layout:!0,$category:a,variants:_,whileHover:O,whileTap:U,exit:L,children:[e.img&&r.jsx(ee,{children:r.jsx("img",{src:e.img,alt:e.title||e.name,loading:"lazy"})}),r.jsxs(re,{children:[r.jsxs(te,{children:[r.jsx($,{}),r.jsx(ae,{children:e.title||e.name}),r.jsx(oe,{children:a})]}),r.jsx(se,{children:e.description||"// no description provided"}),r.jsxs(ie,{children:[e.language&&r.jsx(ne,{children:e.language}),r.jsxs("span",{children:["★ ",e.stars]}),e.updatedAt&&r.jsxs("span",{children:["updated ",q(e.updatedAt)]})]}),r.jsxs(ce,{children:[r.jsxs(v,{href:e.htmlUrl,target:"_blank",rel:"noreferrer",children:[r.jsx($,{})," view on github ↗"]}),e.graph&&r.jsxs(v,{href:`${A}/apps/${e.graph}`,target:"_blank",rel:"noreferrer",title:"Interactive architecture graphs — file tree, system design, flows",children:[r.jsx(F,{})," sys-design"]})]})]})]})};I.displayName="RepoCard";const le=R`
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
`,de=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: ${({theme:e})=>e.space(4)};
  background: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  min-height: 160px;
`,u=o.div`
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
  animation: ${le} 1.4s infinite linear;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,z=()=>r.jsxs(de,{"aria-hidden":"true",children:[r.jsx(u,{$h:14,$w:"60%"}),r.jsx(u,{$h:10,$w:"100%"}),r.jsx(u,{$h:10,$w:"85%"}),r.jsx(u,{$h:10,$w:"40%"}),r.jsx(u,{$h:28,$w:"50%"})]});z.displayName="SkeletonCard";const pe="/assets/digit-recognizer-CuNEeqET.jpg",ge="/assets/chess-bot-BFyaWw0k.jpg",me="/assets/doc-reader-XLWYrDRU.jpg",he="/assets/facescan-app-CtDo_7MS.jpg",ue="/assets/price-predictor-gSscT_ih.jpg",xe="/assets/dijkstra-python-DO4OL2EL.jpg",fe={"-Dijkstra-Path-Finder-C-CLI-":{category:"C++ / C#",title:"Dijkstra Path Finder (C++/CLI)",desc:"Interactive WinForms app to build a graph and watch Dijkstra's shortest-path algorithm run step-by-step, with a glassmorphic dark UI.",graph:"dijkstra-path-finder"},"Dijkstra-Visualizer-Python-":{category:"Python",title:"Dijkstra Visualizer (Python)",desc:"Tkinter desktop app that visualizes Dijkstra's algorithm step-by-step on a user-built weighted graph, with login, animated traversal, and a live step log.",graph:"shortest-path-finder",img:xe},"WinForms-App-Skeleton":{category:"C++ / C#",title:"WinForms App Skeleton",desc:"Minimal C# Windows Forms (.NET Framework 4.7.2) single-window shell, ready to be extended."},"Dijkstra-Visualizer-.NET-8-":{category:"C++ / C#",title:"Dijkstra Visualizer (.NET 8)",desc:"C#/.NET 8 WinForms app visualizing Dijkstra's shortest path on a custom glassmorphic canvas, with local SHA-256 authentication.",graph:"winforms-dijkstra"},"ai-face-recognition":{category:"AI/ML",title:"FACESCAN — Face Analysis",desc:"Real-time biometric terminal — the webcam stream is analyzed live for age, gender, emotion, head pose and landmarks, and recognizes enrolled faces. React + TypeScript + Zustand front-end (EN/RU/UZ) over FastAPI + DeepFace + OpenCV.",graph:"facescan",img:he},"ai-chess-bot":{category:"AI/ML",title:"Chess.com AI Bot",img:ge,desc:"Play chess against a PyTorch neural network (500K+ params) driving minimax with alpha-beta pruning — Chess.com-style React UI, FastAPI backend, dual-layer move validation and synthesized sound."},"3-projectAI":{category:"AI/ML",title:"AI Documentation Reader",desc:"ML-powered documentation reader — PyTorch + Python backend paired with a React + Vite web app.",graph:"rag-knowledge-base",img:me},"digit-predicterAI":{category:"AI/ML",title:"Digit Predicter (MNIST)",desc:"Handwritten-digit recognition — a CNN trained on MNIST with PyTorch, served over FastAPI to a React + Vite drawing canvas.",graph:"hand-drawn-digit-recognizer",img:pe},"ai-pricePredicter":{category:"AI/ML",title:"Real Estate Price Predictor",desc:"Property-price prediction with scikit-learn gradient boosting (R² ~0.92) behind a FastAPI API — glassmorphic React + Vite UI with live sliders and debounced real-time predictions.",graph:"real-estate-price-predictor",img:ue}},ye=()=>{const[e,a]=c.useState([]),[n,l]=c.useState(!0),[f,x]=c.useState(null);return c.useEffect(()=>{let p=!0;return l(!0),x(null),Z().then(g=>{p&&a(g)}).catch(g=>{p&&x(g)}).finally(()=>{p&&l(!1)}),()=>{p=!1}},[]),{repos:e,loading:n,error:f}},be=o.div`
  margin-bottom: ${({theme:e})=>e.space(5)};
`,je=o.div`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: ${({theme:e})=>e.space(4)};
  strong {
    color: ${({theme:e})=>e.colors.primary};
  }
`,$e=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,we=o.button`
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
`,ve=o.span`
  margin-left: 4px;
  opacity: 0.6;
`,ke=o.a`
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
`,Ae=o(b.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space(5)};
  align-items: stretch;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,k=o.div`
  grid-column: 1 / -1;
  padding: ${({theme:e})=>e.space(4)};
  border: 1px dashed ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12.5px;
  color: ${({theme:e,$error:a})=>a?e.colors.secondary:e.colors.textMuted};
`,D=()=>{const[e,a]=c.useState("All"),{repos:n,loading:l,error:f}=ye(),x=c.useMemo(()=>new Set(w.filter(t=>t.repo).map(t=>t.repo)),[]),p=c.useMemo(()=>{const t={};return n.forEach(i=>{t[i.name]={stars:i.stars,language:i.language}}),t},[n]),g=c.useMemo(()=>w.map(t=>{const i=t.repo?p[t.repo]:null;return i?{...t,...i}:t}),[p]),m=c.useMemo(()=>{const t={};n.forEach(d=>{t[d.name]=d});const i=Object.entries(fe).filter(([,d])=>!d.hide).map(([d,h])=>{const s=t[d];return{id:(s==null?void 0:s.id)??d,name:d,isRepo:!0,category:h.category||"Open Source",title:h.title||d,description:h.desc||(s==null?void 0:s.description)||null,language:(s==null?void 0:s.language)||null,stars:(s==null?void 0:s.stars)??0,updatedAt:(s==null?void 0:s.updatedAt)||null,htmlUrl:(s==null?void 0:s.htmlUrl)||`https://github.com/${C}/${d}`,graph:h.graph,img:h.img}}),y=[];return[...i,...y]},[n,x]),j=c.useMemo(()=>{const t=[...g,...m];return e==="All"?t:e==="Open Source"?m:t.filter(i=>i.category===e)},[g,m,e]),N=t=>{const i=[...g,...m];return t==="All"?i.length:t==="Open Source"?m.length:i.filter(y=>y.category===t).length},E=l&&(e==="All"||e==="Open Source"),M=f&&(e==="All"||e==="Open Source");return r.jsxs("section",{children:[r.jsxs(be,{children:[r.jsxs(je,{children:[r.jsx("strong",{children:"asad@dev"}),":~/works$ ls --projects --filter=",e.toLowerCase()]}),r.jsx($e,{id:"works-filters",role:"tablist","aria-label":"project categories",children:G.map(t=>r.jsxs(we,{role:"tab","aria-selected":e===t,$active:e===t,onClick:()=>a(t),children:[t,r.jsxs(ve,{children:["[",N(t),"]"]})]},t))}),r.jsxs(ke,{href:A,target:"_blank",rel:"noreferrer","aria-label":"Open AppGraph — interactive architecture graphs for these projects",children:[r.jsxs("span",{children:["$ open ",r.jsx("strong",{children:"sys-design"})," — interactive architecture graphs (file tree · system design · flows) for the projects below"]}),r.jsx("span",{className:"cta",children:"go to AppGraph →"})]})]}),r.jsx(Ae,{role:"tabpanel","aria-labelledby":"works-filters",variants:V,initial:"hidden",animate:"visible",layout:!0,children:r.jsxs(W,{mode:"popLayout",children:[j.map(t=>t.isRepo?r.jsx(I,{repo:t},`repo-${t.id}`):r.jsx(T,{project:t},t.id)),E&&Array.from({length:4}).map((t,i)=>r.jsx(b.div,{layout:!0,children:r.jsx(z,{})},`sk-${i}`)),M&&r.jsx(k,{$error:!0,children:"✗ couldn't reach the GitHub API (rate limit or offline). Curated projects are still listed above."},"err"),!l&&j.length===0&&r.jsx(k,{children:"// no projects in this category yet."},"empty")]})})]})};D.displayName="Projects";const Ce=()=>(c.useEffect(()=>B("works"),[]),r.jsx(D,{}));Ce.displayName="WorksPage";export{Ce as default};
