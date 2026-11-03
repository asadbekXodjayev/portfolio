import{r as p,j as o,L as c,a as d,y as j,i as w}from"./index-ZEvam18P.js";import g from"./blog-BMniiBIZ.js";import{P as $}from"./PageHeader-DsvG0M9i.js";import"./Scramble-C1bVU6Ri.js";const a=[...g].sort((t,e)=>String(e.date).localeCompare(String(t.date))),f=t=>new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),u=t=>Math.max(1,Math.round(t.split(/\s+/).length/220)),y=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: ${({theme:t})=>t.space(8)};
`,k=d.button`
  padding: 4px 12px;
  font-family: ${({theme:t})=>t.fonts.pixel};
  font-size: 16px;
  border: 2px solid ${({theme:t})=>t.colors.ink};
  background: ${({theme:t,$on:e})=>e?t.colors.primary:t.colors.bgSecondary};
  color: ${({theme:t,$on:e})=>e?t.colors.bgSecondary:t.colors.text};
  box-shadow: ${({$on:t})=>t?"none":"3px 3px 0"} ${({theme:t})=>t.colors.shadow};
  transform: ${({$on:t})=>t?"translate(3px, 3px)":"none"};
  &:hover { background: ${({theme:t})=>t.colors.accent}; color: ${({theme:t})=>t.colors.accentInk}; }
`,v=d.ol`
  list-style: none;
  border-top: 2px solid ${({theme:t})=>t.colors.ink};
`,z=d.li`
  border-bottom: 2px dotted ${({theme:t})=>t.colors.border};
  a.row {
    display: grid;
    grid-template-columns: 170px minmax(0, 1fr);
    gap: ${({theme:t})=>t.space(6)};
    padding: ${({theme:t})=>t.space(6)} 0;
    text-decoration: none;
    color: inherit;
  }
  a.row:hover h2 { background: ${({theme:t})=>t.colors.accent}; color: ${({theme:t})=>t.colors.accentInk}; }
  @media (max-width: 700px) { a.row { grid-template-columns: 1fr; gap: 6px; } }
  time, .min { font-family: ${({theme:t})=>t.fonts.mono}; font-size: 13px; color: ${({theme:t})=>t.colors.textMuted}; display: block; }
  h2 { font-size: 28px; margin-bottom: 8px; width: fit-content; }
  p { font-size: 18px; color: ${({theme:t})=>t.colors.textMuted}; }
  .tags { margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap; font-family: ${({theme:t})=>t.fonts.ui}; font-size: 13px; color: ${({theme:t})=>t.colors.textMuted}; }
  .tags span { padding: 1px 8px; border: 2px solid ${({theme:t})=>t.colors.border}; background: ${({theme:t})=>t.colors.bgSecondary}; }
`,b=()=>{const[t,e]=p.useState("All"),n=p.useMemo(()=>["All",...new Set(a.flatMap(s=>s.tags||[]))],[]),l=t==="All"?a:a.filter(s=>(s.tags||[]).includes(t));return o.jsxs("div",{children:[o.jsx(y,{role:"group","aria-label":"Filter posts by topic",children:n.map(s=>o.jsx(k,{type:"button",$on:s===t,"aria-pressed":s===t,onClick:()=>e(s),children:s},s))}),o.jsx(v,{children:l.map(s=>o.jsx(z,{children:o.jsxs(c,{className:"row",to:`/blog/${s.id}`,children:[o.jsxs("div",{children:[o.jsx("time",{dateTime:s.date,children:f(s.date)}),o.jsxs("span",{className:"min",children:[u(s.body)," min read"]})]}),o.jsxs("div",{children:[o.jsx("h2",{children:s.title}),o.jsx("p",{children:s.summary}),o.jsx("div",{className:"tags",children:(s.tags||[]).map(r=>o.jsx("span",{children:r},r))})]})]})},s.id))})]})},M=d.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 8px;
  z-index: 300;
  width: ${({$p:t})=>t}%;
  background: ${({theme:t})=>t.colors.accent};
  border-bottom: 2px solid ${({theme:t})=>t.colors.ink};
  border-right: 2px solid ${({theme:t})=>t.colors.ink};
`,m=d.article`
  max-width: 68ch;
  margin: 0 auto;
  h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 400; letter-spacing: -0.02em; margin: 12px 0 16px; }
  h2 { font-size: 28px; margin: 44px 0 12px; }
  p { font-size: 20px; line-height: 1.7; margin-bottom: 20px; max-width: none; }
  ul { margin: 0 0 20px 22px; font-size: 20px; line-height: 1.7; }
  li { margin-bottom: 6px; }
  .meta { font-family: ${({theme:t})=>t.fonts.mono}; font-size: 13px; color: ${({theme:t})=>t.colors.textMuted}; }
  .lede { font-size: 22px; color: ${({theme:t})=>t.colors.textMuted}; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px dotted ${({theme:t})=>t.colors.ink}; }
  .back { font-family: ${({theme:t})=>t.fonts.ui}; font-size: 14px; }
  .end { margin-top: 48px; padding-top: 24px; border-top: 2px dotted ${({theme:t})=>t.colors.ink}; font-family: ${({theme:t})=>t.fonts.pixel}; font-size: 17px; display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
`,h=t=>t.split(/(https?:\/\/[^\s)]+)/g).map((e,n)=>/^https?:\/\//.test(e)?o.jsx("a",{href:e,target:"_blank",rel:"noreferrer",children:e.replace(/^https?:\/\//,"")},n):e),S=t=>{const e=[];let n=[];const l=()=>{n.length&&(e.push(o.jsx("ul",{children:n.map((s,r)=>o.jsx("li",{children:h(s)},r))},`ul-${e.length}`)),n=[])};return t.split(/\n\n+/).forEach((s,r)=>{s.startsWith("## ")?(l(),e.push(o.jsx("h2",{children:s.slice(3)},r))):s.split(`
`).every(i=>i.startsWith("- "))?(n.push(...s.split(`
`).map(i=>i.slice(2))),l()):(l(),e.push(o.jsx("p",{children:h(s)},r)))}),l(),e},N=({id:t})=>{const e=a.find(i=>i.id===t),[n,l]=p.useState(0);if(p.useEffect(()=>{const i=()=>{const x=document.documentElement.scrollHeight-window.innerHeight;l(x>0?Math.min(100,window.scrollY/x*100):0)};return i(),window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[t]),!e)return o.jsxs(m,{children:[o.jsx("h1",{children:"Post not found"}),o.jsxs("p",{children:["That post does not exist. ",o.jsx(c,{to:"/blog",children:"Back to all writing"}),"."]})]});const s=a.findIndex(i=>i.id===t),r=a[s+1];return o.jsxs(o.Fragment,{children:[o.jsx(M,{$p:n,"aria-hidden":"true"}),o.jsxs(m,{children:[o.jsx(c,{className:"back",to:"/blog",children:"← All writing"}),o.jsxs("div",{className:"meta",style:{marginTop:24},children:[f(e.date)," · ",u(e.body)," min read"]}),o.jsx("h1",{children:e.title}),o.jsx("p",{className:"lede",children:e.summary}),S(e.body),o.jsxs("div",{className:"end",children:[o.jsx(c,{to:"/blog",children:"← All writing"}),r&&o.jsxs(c,{to:`/blog/${r.id}`,children:["Older: ",r.title," →"]})]})]})]})};b.displayName="Blog";const P=()=>{const{id:t}=j(),e=t?g.find(n=>n.id===t):null;return p.useEffect(()=>w(e?e.title:"writing"),[e]),t?o.jsx(N,{id:t}):o.jsxs(o.Fragment,{children:[o.jsx($,{title:"Writing",lede:"Notes on my open-source work, what I am studying in AI, and where I am heading."}),o.jsx(b,{})]})};P.displayName="BlogPage";export{P as default};
