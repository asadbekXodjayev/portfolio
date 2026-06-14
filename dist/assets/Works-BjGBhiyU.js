import{j as r,b as $,u as s,f as D,r as n}from"./index-CzdGLStQ.js";import{G as f,a as N,P as M}from"./ProjectCard-Bav3ZpJn.js";import{d as E,e as R,g as F,i as T,m as u,c as L}from"./motion-kfgkqOtg.js";import{a as _}from"./index-BOeqtr82.js";import{p as y,c as O}from"./projects-B8Rb2Yt9.js";import{A as U}from"./index-yaPIz7Dw.js";import{s as V}from"./helpers-dVw9XFd8.js";const H="asadbekXodjayev",w="gh_cache_v1",G=5*60*1e3,W=e=>({id:e.id,name:e.name,description:e.description,language:e.language,stars:e.stargazers_count??0,updatedAt:e.updated_at,htmlUrl:e.html_url,homepage:e.homepage||null,topics:e.topics||[]}),B=()=>{try{const e=localStorage.getItem(w);if(!e)return null;const{data:o,ts:i}=JSON.parse(e);if(Date.now()-i<G&&Array.isArray(o))return o}catch{}return null},J=e=>{try{localStorage.setItem(w,JSON.stringify({data:e,ts:Date.now()}))}catch{}},K=async({force:e=!1}={})=>{if(!e){const c=B();if(c)return c}const{data:o}=await _.get(`https://api.github.com/users/${H}/repos`,{params:{per_page:100,sort:"updated"},timeout:1e4}),i=(Array.isArray(o)?o:[]).filter(c=>!c.fork).map(W);return J(i),i},X=e=>{const o=new Date(e);return Number.isNaN(o.getTime())?"":o.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Y=(e,o)=>o==="AI/ML"||o==="Open Source"?e.colors.secondary:e.colors.primary,v=s(u.article)`
  --accent: ${({theme:e,$category:o})=>Y(e,o)};
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
`,Z=s.div`
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
  ${v}:hover & img {
    transform: scale(1.05);
  }
`,q=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${({theme:e})=>e.space(4)};
  flex: 1;
`,Q=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 12px;
`,ee=s.h3`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.primary};
  word-break: break-all;
`,re=s.span`
  margin-left: auto;
  font-size: 10px;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 3px;
  padding: 1px 6px;
  white-space: nowrap;
`,te=s.p`
  margin: 0;
  flex: 1;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text};
`,ae=s.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 11px;
  color: ${({theme:e})=>e.colors.textMuted};
`,oe=s.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`,se=s.div`
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
`,k=({repo:e})=>{const o=e.category||"Open Source";return r.jsxs(v,{layout:!0,$category:o,variants:T,whileHover:F,whileTap:R,exit:E,children:[e.img&&r.jsx(Z,{children:r.jsx("img",{src:e.img,alt:e.title||e.name,loading:"lazy"})}),r.jsxs(q,{children:[r.jsxs(Q,{children:[r.jsx(f,{}),r.jsx(ee,{children:e.title||e.name}),r.jsx(re,{children:o})]}),r.jsx(te,{children:e.description||"// no description provided"}),r.jsxs(ae,{children:[e.language&&r.jsx(oe,{children:e.language}),r.jsxs("span",{children:["★ ",e.stars]}),e.updatedAt&&r.jsxs("span",{children:["updated ",X(e.updatedAt)]})]}),r.jsxs(se,{children:[r.jsxs(b,{href:e.htmlUrl,target:"_blank",rel:"noreferrer",children:[r.jsx(f,{})," view on github ↗"]}),e.graph&&r.jsxs(b,{href:`${$}/apps/${e.graph}`,target:"_blank",rel:"noreferrer",title:"Interactive architecture graphs — file tree, system design, flows",children:[r.jsx(N,{})," sys-design"]})]})]})]})};k.displayName="RepoCard";const ie=D`
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
`,ne=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: ${({theme:e})=>e.space(4)};
  background: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  min-height: 160px;
`,m=s.div`
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
  animation: ${ie} 1.4s infinite linear;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,A=()=>r.jsxs(ne,{"aria-hidden":"true",children:[r.jsx(m,{$h:14,$w:"60%"}),r.jsx(m,{$h:10,$w:"100%"}),r.jsx(m,{$h:10,$w:"85%"}),r.jsx(m,{$h:10,$w:"40%"}),r.jsx(m,{$h:28,$w:"50%"})]});A.displayName="SkeletonCard";const ce="/assets/digit-recognizer-CuNEeqET.jpg",le="/assets/chess-bot-BFyaWw0k.jpg",de="/assets/doc-reader-XLWYrDRU.jpg",pe="/assets/facescan-app-CtDo_7MS.jpg",ge="/assets/price-predictor-gSscT_ih.jpg",me="/assets/dijkstra-python-DO4OL2EL.jpg",he={"-Dijkstra-Path-Finder-C-CLI-":{category:"C++ / C#",title:"Dijkstra Path Finder (C++/CLI)",desc:"Interactive WinForms app to build a graph and watch Dijkstra's shortest-path algorithm run step-by-step, with a glassmorphic dark UI.",graph:"dijkstra-path-finder"},"Dijkstra-Visualizer-Python-":{category:"Python",title:"Dijkstra Visualizer (Python)",desc:"Tkinter desktop app that visualizes Dijkstra's algorithm step-by-step on a user-built weighted graph, with login, animated traversal, and a live step log.",graph:"shortest-path-finder",img:me},"WinForms-App-Skeleton":{category:"C++ / C#",title:"WinForms App Skeleton",desc:"Minimal C# Windows Forms (.NET Framework 4.7.2) single-window shell, ready to be extended."},"Dijkstra-Visualizer-.NET-8-":{category:"C++ / C#",title:"Dijkstra Visualizer (.NET 8)",desc:"C#/.NET 8 WinForms app visualizing Dijkstra's shortest path on a custom glassmorphic canvas, with local SHA-256 authentication.",graph:"winforms-dijkstra"},"ai-face-recognition":{category:"AI/ML",title:"FACESCAN — Face Analysis",desc:"Real-time biometric terminal — the webcam stream is analyzed live for age, gender, emotion, head pose and landmarks, and recognizes enrolled faces. React + TypeScript + Zustand front-end (EN/RU/UZ) over FastAPI + DeepFace + OpenCV.",graph:"facescan",img:pe},"ai-chess-bot":{category:"AI/ML",title:"Chess.com AI Bot",img:le,desc:"Play chess against a PyTorch neural network (500K+ params) driving minimax with alpha-beta pruning — Chess.com-style React UI, FastAPI backend, dual-layer move validation and synthesized sound."},"3-projectAI":{category:"AI/ML",title:"AI Documentation Reader",desc:"ML-powered documentation reader — PyTorch + Python backend paired with a React + Vite web app.",graph:"rag-knowledge-base",img:de},"digit-predicterAI":{category:"AI/ML",title:"Digit Predicter (MNIST)",desc:"Handwritten-digit recognition — a CNN trained on MNIST with PyTorch, served over FastAPI to a React + Vite drawing canvas.",graph:"hand-drawn-digit-recognizer",img:ce},"ai-pricePredicter":{category:"AI/ML",title:"Real Estate Price Predictor",desc:"Property-price prediction with scikit-learn gradient boosting (R² ~0.92) behind a FastAPI API — glassmorphic React + Vite UI with live sliders and debounced real-time predictions.",graph:"real-estate-price-predictor",img:ge}},ue=()=>{const[e,o]=n.useState([]),[i,c]=n.useState(!0),[h,p]=n.useState(null);return n.useEffect(()=>{let l=!0;return c(!0),p(null),K().then(d=>{l&&o(d)}).catch(d=>{l&&p(d)}).finally(()=>{l&&c(!1)}),()=>{l=!1}},[]),{repos:e,loading:i,error:h}},xe=s.div`
  margin-bottom: ${({theme:e})=>e.space(5)};
`,fe=s.div`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: ${({theme:e})=>e.space(4)};
  strong {
    color: ${({theme:e})=>e.colors.primary};
  }
`,ye=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,be=s.button`
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
`,je=s.span`
  margin-left: 4px;
  opacity: 0.6;
`,$e=s.a`
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
`,we=s(u.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space(5)};
  align-items: stretch;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,j=s.div`
  grid-column: 1 / -1;
  padding: ${({theme:e})=>e.space(4)};
  border: 1px dashed ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12.5px;
  color: ${({theme:e,$error:o})=>o?e.colors.secondary:e.colors.textMuted};
`,C=()=>{const[e,o]=n.useState("All"),{repos:i,loading:c,error:h}=ue(),p=n.useMemo(()=>new Set(y.filter(t=>t.repo).map(t=>t.repo)),[]),l=n.useMemo(()=>{const t={};return i.forEach(a=>{t[a.name]={stars:a.stars,language:a.language}}),t},[i]),d=n.useMemo(()=>y.map(t=>{const a=t.repo?l[t.repo]:null;return a?{...t,...a}:t}),[l]),g=n.useMemo(()=>i.filter(t=>!p.has(t.name)).map(t=>{const a=he[t.name];return a!=null&&a.hide||!a?null:{...t,isRepo:!0,category:(a==null?void 0:a.category)||"Open Source",title:(a==null?void 0:a.title)||t.name,description:(a==null?void 0:a.desc)||t.description,graph:a==null?void 0:a.graph,img:a==null?void 0:a.img}}).filter(Boolean),[i,p]),x=n.useMemo(()=>{const t=[...d,...g];return e==="All"?t:e==="Open Source"?g:t.filter(a=>a.category===e)},[d,g,e]),P=t=>{const a=[...d,...g];return t==="All"?a.length:t==="Open Source"?g.length:a.filter(z=>z.category===t).length},S=c&&(e==="All"||e==="Open Source"),I=h&&(e==="All"||e==="Open Source");return r.jsxs("section",{children:[r.jsxs(xe,{children:[r.jsxs(fe,{children:[r.jsx("strong",{children:"asad@dev"}),":~/works$ ls --projects --filter=",e.toLowerCase()]}),r.jsx(ye,{id:"works-filters",role:"tablist","aria-label":"project categories",children:O.map(t=>r.jsxs(be,{role:"tab","aria-selected":e===t,$active:e===t,onClick:()=>o(t),children:[t,r.jsxs(je,{children:["[",P(t),"]"]})]},t))}),r.jsxs($e,{href:$,target:"_blank",rel:"noreferrer","aria-label":"Open AppGraph — interactive architecture graphs for these projects",children:[r.jsxs("span",{children:["$ open ",r.jsx("strong",{children:"sys-design"})," — interactive architecture graphs (file tree · system design · flows) for the projects below"]}),r.jsx("span",{className:"cta",children:"go to AppGraph →"})]})]}),r.jsx(we,{role:"tabpanel","aria-labelledby":"works-filters",variants:L,initial:"hidden",animate:"visible",layout:!0,children:r.jsxs(U,{mode:"popLayout",children:[x.map(t=>t.isRepo?r.jsx(k,{repo:t},`repo-${t.id}`):r.jsx(M,{project:t},t.id)),S&&Array.from({length:4}).map((t,a)=>r.jsx(u.div,{layout:!0,children:r.jsx(A,{})},`sk-${a}`)),I&&r.jsx(j,{$error:!0,children:"✗ couldn't reach the GitHub API (rate limit or offline). Curated projects are still listed above."},"err"),!c&&x.length===0&&r.jsx(j,{children:"// no projects in this category yet."},"empty")]})})]})};C.displayName="Projects";const ve=()=>(n.useEffect(()=>V("works"),[]),r.jsx(C,{}));ve.displayName="WorksPage";export{ve as default};
