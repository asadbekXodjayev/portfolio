import{r as a,M as B,j as t,k as T,l as F,n as L,p as U,a as l,f as K,i as J}from"./index-ZEvam18P.js";import{G as E,a as X,P as Y}from"./ProjectCard-DFVJ29Q-.js";import{P as Z,u as q,d as Q,L as ee,e as te,g as re,h as se,a as oe,m as I,c as ae}from"./motion-CBh4ijnm.js";import{a as ne}from"./index-BOeqtr82.js";import{p as M,c as ie}from"./projects-Dpinw88h.js";import{P as ce}from"./PageHeader-DsvG0M9i.js";import"./Scramble-C1bVU6Ri.js";class le extends a.Component{getSnapshotBeforeUpdate(s){const o=this.props.childRef.current;if(o&&s.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=o.offsetHeight||0,n.width=o.offsetWidth||0,n.top=o.offsetTop,n.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function de({children:e,isPresent:s}){const o=a.useId(),n=a.useRef(null),y=a.useRef({width:0,height:0,top:0,left:0}),{nonce:x}=a.useContext(B);return a.useInsertionEffect(()=>{const{width:u,height:i,top:m,left:d}=y.current;if(s||!n.current||!u||!i)return;n.current.dataset.motionPopId=o;const g=document.createElement("style");return x&&(g.nonce=x),document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${i}px !important;
            top: ${m}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[s]),t.jsx(le,{isPresent:s,childRef:n,sizeRef:y,children:a.cloneElement(e,{ref:n})})}const pe=({children:e,initial:s,isPresent:o,onExitComplete:n,custom:y,presenceAffectsLayout:x,mode:u})=>{const i=T(ue),m=a.useId(),d=a.useCallback(j=>{i.set(j,!0);for(const w of i.values())if(!w)return;n&&n()},[i,n]),g=a.useMemo(()=>({id:m,initial:s,isPresent:o,custom:y,onExitComplete:d,register:j=>(i.set(j,!1),()=>i.delete(j))}),x?[Math.random(),d]:[o,d]);return a.useMemo(()=>{i.forEach((j,w)=>i.set(w,!1))},[o]),a.useEffect(()=>{!o&&!i.size&&n&&n()},[o]),u==="popLayout"&&(e=t.jsx(de,{isPresent:o,children:e})),t.jsx(Z.Provider,{value:g,children:e})};function ue(){return new Map}const P=e=>e.key||"";function z(e){const s=[];return a.Children.forEach(e,o=>{a.isValidElement(o)&&s.push(o)}),s}const he=({children:e,custom:s,initial:o=!0,onExitComplete:n,presenceAffectsLayout:y=!0,mode:x="sync",propagate:u=!1})=>{const[i,m]=q(u),d=a.useMemo(()=>z(e),[e]),g=u&&!i?[]:d.map(P),j=a.useRef(!0),w=a.useRef(d),r=T(()=>new Map),[h,k]=a.useState(d),[p,b]=a.useState(d);Q(()=>{j.current=!1,w.current=d;for(let $=0;$<p.length;$++){const f=P(p[$]);g.includes(f)?r.delete(f):r.get(f)!==!0&&r.set(f,!1)}},[p,g.length,g.join("-")]);const c=[];if(d!==h){let $=[...d];for(let f=0;f<p.length;f++){const v=p[f],S=P(v);g.includes(S)||($.splice(f,0,v),c.push(v))}x==="wait"&&c.length&&($=c),b(z($)),k(d);return}const{forceRender:A}=a.useContext(ee);return t.jsx(t.Fragment,{children:p.map($=>{const f=P($),v=u&&!i?!1:d===p||g.includes(f),S=()=>{if(r.has(f))r.set(f,!0);else return;let R=!0;r.forEach(W=>{W||(R=!1)}),R&&(A==null||A(),b(w.current),u&&(m==null||m()),n&&n())};return t.jsx(pe,{isPresent:v,initial:!j.current||o?void 0:!1,custom:v?void 0:s,presenceAffectsLayout:y,mode:x,onExitComplete:v?void 0:S,children:$},f)})})},O="asadbekXodjayev",_="gh_cache_v1",ge=5*60*1e3,fe=e=>({id:e.id,name:e.name,description:e.description,language:e.language,stars:e.stargazers_count??0,updatedAt:e.updated_at,htmlUrl:e.html_url,homepage:e.homepage||null,topics:e.topics||[]}),me=()=>{try{const e=localStorage.getItem(_);if(!e)return null;const{data:s,ts:o}=JSON.parse(e);if(Date.now()-o<ge&&Array.isArray(s))return s}catch{}return null},xe=e=>{try{localStorage.setItem(_,JSON.stringify({data:e,ts:Date.now()}))}catch{}},ye=async({force:e=!1}={})=>{if(!e){const n=me();if(n)return n}const{data:s}=await ne.get(`https://api.github.com/users/${O}/repos`,{params:{per_page:100,sort:"updated"},timeout:1e4}),o=(Array.isArray(s)?s:[]).filter(n=>!n.fork).map(fe);return xe(o),o},je=e=>{const s=new Date(e);return Number.isNaN(s.getTime())?"":s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},$e=e=>e.colors.primary,we=l(I.article)`
  --accent: ${({theme:e,$category:s})=>$e(e)};
  display: flex;
  flex-direction: column;
  ${U(4)}
  background: ${({theme:e})=>e.colors.bgSecondary};
  overflow: hidden;
  font-family: ${({theme:e})=>e.fonts.ui};
  ${L}
`,be=l.div`
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
`,ve=l.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${({theme:e})=>e.space(4)};
  flex: 1;
`,ke=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 12px;
`,Ce=l.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 21px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,Pe=l.span`
  margin-left: auto;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textMuted};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 0;
  padding: 1px 6px;
  white-space: nowrap;
`,Ae=l.p`
  margin: 0;
  flex: 1;
  font-family: ${({theme:e})=>e.fonts.serif};
  font-size: 16px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text};
`,Se=l.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.textMuted};
`,Ie=l.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`,Re=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,D=l.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  padding: 6px 10px;
  align-self: flex-start;
  border: 2px solid ${({theme:e})=>e.colors.ink};
  border-radius: 0;
  color: ${({theme:e})=>e.colors.primary};
  font-size: 14px;
  text-decoration: none;
  transition: border-color ${({theme:e})=>e.animation.fast};
  &:hover {
    background: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.accentInk};
  }
`,H=({repo:e})=>{const s=e.category||"Open Source";return t.jsxs(we,{layout:!0,$category:s,variants:oe,whileHover:se,whileTap:re,exit:te,children:[e.img&&t.jsx(be,{children:t.jsx("img",{src:e.img,alt:e.title||e.name,loading:"lazy"})}),t.jsxs(ve,{children:[t.jsxs(ke,{children:[t.jsx(E,{}),t.jsx(Ce,{children:e.title||e.name}),t.jsx(Pe,{children:s})]}),t.jsx(Ae,{children:e.description||"No description provided."}),t.jsxs(Se,{children:[e.language&&t.jsx(Ie,{children:e.language}),t.jsxs("span",{children:[e.stars," stars"]}),e.updatedAt&&t.jsxs("span",{children:["Updated ",je(e.updatedAt)]})]}),t.jsxs(Re,{children:[t.jsxs(D,{href:e.htmlUrl,target:"_blank",rel:"noreferrer",children:[t.jsx(E,{})," View on GitHub"]}),e.graph&&t.jsxs(D,{href:`${F}/apps/${e.graph}`,target:"_blank",rel:"noreferrer",title:"Interactive architecture graphs — file tree, system design, flows",children:[t.jsx(X,{})," Architecture"]})]})]})]})};H.displayName="RepoCard";const Ee=K`
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
`,Me=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: ${({theme:e})=>e.space(4)};
  background: ${({theme:e})=>e.colors.bgSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 0;
  min-height: 160px;
`,C=l.div`
  height: ${({$h:e})=>e||12}px;
  width: ${({$w:e})=>e||"100%"};
  border-radius: 0;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.surface} 25%,
    ${({theme:e})=>e.colors.border} 50%,
    ${({theme:e})=>e.colors.surface} 75%
  );
  background-size: 600px 100%;
  animation: ${Ee} 1.4s infinite linear;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,V=()=>t.jsxs(Me,{"aria-hidden":"true",children:[t.jsx(C,{$h:14,$w:"60%"}),t.jsx(C,{$h:10,$w:"100%"}),t.jsx(C,{$h:10,$w:"85%"}),t.jsx(C,{$h:10,$w:"40%"}),t.jsx(C,{$h:28,$w:"50%"})]});V.displayName="SkeletonCard";const ze="/assets/digit-recognizer-CuNEeqET.jpg",De="/assets/chess-bot-BFyaWw0k.jpg",Ne="/assets/doc-reader-XLWYrDRU.jpg",Te="/assets/facescan-app-CtDo_7MS.jpg",Fe="/assets/price-predictor-gSscT_ih.jpg",Le="/assets/dijkstra-python-DO4OL2EL.jpg",Ue={"ai-face-recognition":{category:"AI/ML",title:"FACESCAN — Face Analysis",desc:"Real-time biometric terminal — the webcam stream is analyzed live for age, gender, emotion, head pose and landmarks, and recognizes enrolled faces. React + TypeScript + Zustand front-end (EN/RU/UZ) over FastAPI + DeepFace + OpenCV.",graph:"facescan",img:Te},"ai-chess-bot":{category:"AI/ML",title:"Chess.com AI Bot",img:De,desc:"Play chess against a PyTorch neural network (500K+ params) driving minimax with alpha-beta pruning — Chess.com-style React UI, FastAPI backend, dual-layer move validation and synthesized sound."},"3-projectAI":{category:"AI/ML",title:"AI Documentation Reader",desc:"ML-powered documentation reader — PyTorch + Python backend paired with a React + Vite web app.",graph:"rag-knowledge-base",img:Ne},"digit-predicterAI":{category:"AI/ML",title:"Digit Predicter (MNIST)",desc:"Handwritten-digit recognition — a CNN trained on MNIST with PyTorch, served over FastAPI to a React + Vite drawing canvas.",graph:"hand-drawn-digit-recognizer",img:ze},"ai-pricePredicter":{category:"AI/ML",title:"Real Estate Price Predictor",desc:"Property-price prediction with scikit-learn gradient boosting (R² ~0.92) behind a FastAPI API — glassmorphic React + Vite UI with live sliders and debounced real-time predictions.",graph:"real-estate-price-predictor",img:Fe},"-Dijkstra-Path-Finder-C-CLI-":{category:"C++ / C#",title:"Dijkstra Path Finder (C++/CLI)",desc:"Interactive WinForms app to build a graph and watch Dijkstra's shortest-path algorithm run step-by-step, with a glassmorphic dark UI.",graph:"dijkstra-path-finder"},"Dijkstra-Visualizer-Python-":{category:"Python",title:"Dijkstra Visualizer (Python)",desc:"Tkinter desktop app that visualizes Dijkstra's algorithm step-by-step on a user-built weighted graph, with login, animated traversal, and a live step log.",graph:"shortest-path-finder",img:Le},"WinForms-App-Skeleton":{category:"C++ / C#",title:"WinForms App Skeleton",desc:"Minimal C# Windows Forms (.NET Framework 4.7.2) single-window shell, ready to be extended."},"Dijkstra-Visualizer-.NET-8-":{category:"C++ / C#",title:"Dijkstra Visualizer (.NET 8)",desc:"C#/.NET 8 WinForms app visualizing Dijkstra's shortest path on a custom glassmorphic canvas, with local SHA-256 authentication.",graph:"winforms-dijkstra"}},Oe=()=>{const[e,s]=a.useState([]),[o,n]=a.useState(!0),[y,x]=a.useState(null);return a.useEffect(()=>{let u=!0;return n(!0),x(null),ye().then(i=>{u&&s(i)}).catch(i=>{u&&x(i)}).finally(()=>{u&&n(!1)}),()=>{u=!1}},[]),{repos:e,loading:o,error:y}},_e=l.div`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`,He=l.div`
  margin-bottom: ${({theme:e})=>e.space(5)};
`,Ve=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Ge=l.button`
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 16px;
  font-weight: 500;
  padding: 5px 12px;
  cursor: pointer;
  border: 2px solid ${({theme:e})=>e.colors.ink};
  background: ${({theme:e,$active:s})=>s?e.colors.primary:e.colors.bgSecondary};
  color: ${({theme:e,$active:s})=>s?e.colors.bgSecondary:e.colors.text};
  box-shadow: ${({$active:e})=>e?"none":"3px 3px 0"} ${({theme:e})=>e.colors.shadow};
  transform: ${({$active:e})=>e?"translate(3px, 3px)":"none"};
  &:hover {
    background: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.accentInk};
  }
`,We=l.span`
  margin-left: 4px;
  opacity: 0.6;
`,Be=l.a`
  ${U(4)}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: ${({theme:e})=>e.space(5)};
  padding: ${({theme:e})=>e.space(3)} ${({theme:e})=>e.space(4)};
  background: ${({theme:e})=>e.colors.bgSecondary};
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 14px;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.textMuted};
  ${L}

  strong { color: ${({theme:e})=>e.colors.text}; font-weight: 600; }
  .cta { margin-left: auto; font-family: ${({theme:e})=>e.fonts.pixel}; font-size: 17px; color: ${({theme:e})=>e.colors.primary}; white-space: nowrap; }
  &:hover .cta { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 4px; }
`,Ke=l(I.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space(5)};
  align-items: stretch;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,N=l.div`
  grid-column: 1 / -1;
  padding: ${({theme:e})=>e.space(4)};
  border: 2px dotted ${({theme:e})=>e.colors.ink};
  background: ${({theme:e})=>e.colors.bgSecondary};
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 14px;
  color: ${({theme:e,$error:s})=>s?e.colors.danger:e.colors.textMuted};
`,G=()=>{const[e,s]=a.useState("All"),{repos:o,loading:n,error:y}=Oe(),x=a.useMemo(()=>new Set(M.filter(r=>r.repo).map(r=>r.repo)),[]),u=a.useMemo(()=>{const r={};return o.forEach(h=>{r[h.name]={stars:h.stars,language:h.language}}),r},[o]),i=a.useMemo(()=>M.map(r=>{const h=r.repo?u[r.repo]:null;return h?{...r,...h}:r}),[u]),m=a.useMemo(()=>{const r={};o.forEach(p=>{r[p.name]=p});const h=Object.entries(Ue).filter(([,p])=>!p.hide).map(([p,b])=>{const c=r[p];return{id:(c==null?void 0:c.id)??p,name:p,isRepo:!0,category:b.category||"Open Source",title:b.title||p,description:b.desc||(c==null?void 0:c.description)||null,language:(c==null?void 0:c.language)||null,stars:(c==null?void 0:c.stars)??0,updatedAt:(c==null?void 0:c.updatedAt)||null,htmlUrl:(c==null?void 0:c.htmlUrl)||`https://github.com/${O}/${p}`,graph:b.graph,img:b.img}}),k=[];return[...h,...k]},[o,x]),d=a.useMemo(()=>{const r=[...i,...m];return e==="All"?r:e==="Open Source"?m:r.filter(h=>h.category===e)},[i,m,e]),g=r=>{const h=[...i,...m];return r==="All"?h.length:r==="Open Source"?m.length:h.filter(k=>k.category===r).length},j=n&&(e==="All"||e==="Open Source"),w=y&&(e==="All"||e==="Open Source");return t.jsxs("section",{children:[t.jsxs(He,{children:[t.jsx(Ve,{id:"works-filters",role:"tablist","aria-label":"project categories",children:ie.map(r=>t.jsxs(Ge,{role:"tab","aria-selected":e===r,$active:e===r,onClick:()=>s(r),children:[r,t.jsx(We,{children:g(r)})]},r))}),t.jsxs(Be,{href:F,target:"_blank",rel:"noreferrer","aria-label":"Open AppGraph — interactive architecture graphs for these projects",children:[t.jsxs("span",{children:[t.jsx("strong",{children:"Architecture graphs."})," Interactive file trees, system designs and flow diagrams for these projects."]}),t.jsx("span",{className:"cta",children:"Open AppGraph"})]})]}),t.jsx(_e,{as:"h2",children:"Project list"}),t.jsx(Ke,{role:"tabpanel","aria-labelledby":"works-filters",variants:ae,initial:"hidden",animate:"visible",layout:!0,children:t.jsxs(he,{mode:"popLayout",children:[d.map(r=>r.isRepo?t.jsx(H,{repo:r},`repo-${r.id}`):t.jsx(Y,{project:r},r.id)),j&&Array.from({length:4}).map((r,h)=>t.jsx(I.div,{layout:!0,children:t.jsx(V,{})},`sk-${h}`)),w&&t.jsx(N,{$error:!0,children:"The GitHub feed could not be reached (rate limit or offline). Curated projects are still listed."},"err"),!n&&d.length===0&&t.jsx(N,{children:"No projects in this category yet."},"empty")]})})]})};G.displayName="Projects";const Je=()=>(a.useEffect(()=>J("works"),[]),t.jsxs(t.Fragment,{children:[t.jsx(ce,{title:"Projects",lede:"Web, AI/ML and native applications, with source and live links where available."}),t.jsx(G,{})]}));Je.displayName="WorksPage";export{Je as default};
