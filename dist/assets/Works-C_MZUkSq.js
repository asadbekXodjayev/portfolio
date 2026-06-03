import{j as o,u as s,f as M,r as i}from"./index-D6CGFCdW.js";import{G as h,P as E}from"./ProjectCard-BKc_AUkn.js";import{d as N,e as z,g as I,i as P,m as f,c as R}from"./motion-CCrQ0phj.js";import{a as _}from"./index-BOeqtr82.js";import{p as b,c as O}from"./projects-BeCKisGS.js";import{A as H}from"./index-7Ri7DpQ_.js";import{s as L}from"./helpers-dVw9XFd8.js";const T="asadbekXodjayev",$="gh_cache_v1",D=5*60*1e3,G=e=>({id:e.id,name:e.name,description:e.description,language:e.language,stars:e.stargazers_count??0,updatedAt:e.updated_at,htmlUrl:e.html_url,homepage:e.homepage||null,topics:e.topics||[]}),U=()=>{try{const e=localStorage.getItem($);if(!e)return null;const{data:t,ts:n}=JSON.parse(e);if(Date.now()-n<D&&Array.isArray(t))return t}catch{}return null},F=e=>{try{localStorage.setItem($,JSON.stringify({data:e,ts:Date.now()}))}catch{}},B=async({force:e=!1}={})=>{if(!e){const l=U();if(l)return l}const{data:t}=await _.get(`https://api.github.com/users/${T}/repos`,{params:{per_page:100,sort:"updated"},timeout:1e4}),n=(Array.isArray(t)?t:[]).filter(l=>!l.fork).map(G);return F(n),n},V=e=>{const t=new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},J=(e,t)=>t==="AI/ML"||t==="Open Source"?e.colors.secondary:e.colors.primary,W=s(f.article)`
  --accent: ${({theme:e,$category:t})=>J(e,t)};
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
`,K=s.div`
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
`,Z=s.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`,ee=s.a`
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
`,j=({repo:e})=>{const t=e.category||"Open Source";return o.jsxs(W,{layout:!0,$category:t,variants:P,whileHover:I,whileTap:z,exit:N,children:[o.jsxs(K,{children:[o.jsx(h,{}),o.jsx(X,{children:e.title||e.name}),o.jsx(Y,{children:t})]}),o.jsx(q,{children:e.description||"// no description provided"}),o.jsxs(Q,{children:[e.language&&o.jsx(Z,{children:e.language}),o.jsxs("span",{children:["★ ",e.stars]}),e.updatedAt&&o.jsxs("span",{children:["updated ",V(e.updatedAt)]})]}),o.jsxs(ee,{href:e.htmlUrl,target:"_blank",rel:"noreferrer",children:[o.jsx(h,{})," view on github ↗"]})]})};j.displayName="RepoCard";const re=M`
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
  animation: ${re} 1.4s infinite linear;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,w=()=>o.jsxs(oe,{"aria-hidden":"true",children:[o.jsx(m,{$h:14,$w:"60%"}),o.jsx(m,{$h:10,$w:"100%"}),o.jsx(m,{$h:10,$w:"85%"}),o.jsx(m,{$h:10,$w:"40%"}),o.jsx(m,{$h:28,$w:"50%"})]});w.displayName="SkeletonCard";const te={"ai-front-end":{category:"AI/ML",title:"AI Front-End",desc:"Front-end for an AI-powered app."},"steel-mobile":{category:"Mobile",title:"Steel (Mobile)",desc:"Mobile build of the Steel Theraphy workout app."}},ae=()=>{const[e,t]=i.useState([]),[n,l]=i.useState(!0),[x,p]=i.useState(null);return i.useEffect(()=>{let c=!0;return l(!0),p(null),B().then(d=>{c&&t(d)}).catch(d=>{c&&p(d)}).finally(()=>{c&&l(!1)}),()=>{c=!1}},[]),{repos:e,loading:n,error:x}},se=s.div`
  margin-bottom: ${({theme:e})=>e.space(5)};
`,ne=s.div`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: ${({theme:e})=>e.space(4)};
  strong {
    color: ${({theme:e})=>e.colors.primary};
  }
`,ie=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,le=s.button`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12.5px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${({theme:e,$active:t})=>t?e.colors.primary:e.colors.border};
  background: ${({theme:e,$active:t})=>t?e.colors.primary:"transparent"};
  color: ${({theme:e,$active:t})=>t?e.colors.bg:e.colors.text};
  transition: all ${({theme:e})=>e.animation.fast};
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e,$active:t})=>t?e.colors.bg:e.colors.primary};
  }
`,ce=s.span`
  margin-left: 4px;
  opacity: 0.6;
`,de=s(f.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.space(5)};
  align-items: stretch;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,y=s.div`
  grid-column: 1 / -1;
  padding: ${({theme:e})=>e.space(4)};
  border: 1px dashed ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12.5px;
  color: ${({theme:e,$error:t})=>t?e.colors.secondary:e.colors.textMuted};
`,v=()=>{const[e,t]=i.useState("All"),{repos:n,loading:l,error:x}=ae(),p=i.useMemo(()=>new Set(b.filter(r=>r.repo).map(r=>r.repo)),[]),c=i.useMemo(()=>{const r={};return n.forEach(a=>{r[a.name]={stars:a.stars,language:a.language}}),r},[n]),d=i.useMemo(()=>b.map(r=>{const a=r.repo?c[r.repo]:null;return a?{...r,...a}:r}),[c]),u=i.useMemo(()=>n.filter(r=>!p.has(r.name)).map(r=>{const a=te[r.name];return a!=null&&a.hide||!a?null:{...r,isRepo:!0,category:(a==null?void 0:a.category)||"Open Source",title:(a==null?void 0:a.title)||r.name,description:(a==null?void 0:a.desc)||r.description}}).filter(Boolean),[n,p]),g=i.useMemo(()=>{const r=[...d,...u];return e==="All"?r:e==="Open Source"?u:r.filter(a=>a.category===e)},[d,u,e]),S=r=>{const a=[...d,...u];return r==="All"?a.length:r==="Open Source"?u.length:a.filter(C=>C.category===r).length},k=l&&(e==="All"||e==="Open Source"),A=x&&(e==="All"||e==="Open Source");return o.jsxs("section",{children:[o.jsxs(se,{children:[o.jsxs(ne,{children:[o.jsx("strong",{children:"asad@dev"}),":~/works$ ls --projects --filter=",e.toLowerCase()]}),o.jsx(ie,{id:"works-filters",role:"tablist","aria-label":"project categories",children:O.map(r=>o.jsxs(le,{role:"tab","aria-selected":e===r,$active:e===r,onClick:()=>t(r),children:[r,o.jsxs(ce,{children:["[",S(r),"]"]})]},r))})]}),o.jsx(de,{role:"tabpanel","aria-labelledby":"works-filters",variants:R,initial:"hidden",animate:"visible",layout:!0,children:o.jsxs(H,{mode:"popLayout",children:[g.map(r=>r.isRepo?o.jsx(j,{repo:r},`repo-${r.id}`):o.jsx(E,{project:r},r.id)),k&&Array.from({length:4}).map((r,a)=>o.jsx(f.div,{layout:!0,children:o.jsx(w,{})},`sk-${a}`)),A&&o.jsx(y,{$error:!0,children:"✗ couldn't reach the GitHub API (rate limit or offline). Curated projects are still listed above."},"err"),!l&&g.length===0&&o.jsx(y,{children:"// no projects in this category yet."},"empty")]})})]})};v.displayName="Projects";const pe=()=>(i.useEffect(()=>L("works"),[]),o.jsx(v,{}));pe.displayName="WorksPage";export{pe as default};
