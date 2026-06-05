import{r as n,j as e,T as f,u as s}from"./index-DB3vYdpJ.js";import{B as b}from"./Button-CphZsF2d.js";import{m as y,a as A,c as B,d as L,i as k}from"./motion-oKKd6ImE.js";import{A as C}from"./index-BvC-NKcK.js";import{s as M}from"./helpers-dVw9XFd8.js";const D=[{id:"seed-welcome",title:"Welcome to the log",date:"2026-06-01",body:`This is my local dev log. I jot down what I'm building, what I'm learning, and the occasional rabbit hole.

To add a permanent post, edit src/data/blog.json and add an object to this array. Posts you write from the composer below are saved in your browser only.`,images:[]},{id:"seed-now",title:"What I'm on right now",date:"2026-05-20",body:"Going deeper on AI/ML — PyTorch, LLM apps, and wiring models into real product UIs. Also keeping the native C++/C# muscle alive on the side.",images:[]}],v="blog_local_v1",E=()=>{try{const o=localStorage.getItem(v),i=o?JSON.parse(o):[];return Array.isArray(i)?i:[]}catch{return[]}},F=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.space(8)};
`,N=s.input`
  padding: 8px 10px;
  background: ${({theme:o})=>o.colors.bg};
  border: 1px solid ${({theme:o})=>o.colors.border};
  color: ${({theme:o})=>o.colors.primary};
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
  outline: none;
  width: 100%;
  &:focus {
    border-color: ${({theme:o})=>o.colors.primary};
  }
`,R=s.textarea`
  padding: 8px 10px;
  min-height: 120px;
  background: ${({theme:o})=>o.colors.bg};
  border: 1px solid ${({theme:o})=>o.colors.border};
  color: ${({theme:o})=>o.colors.primary};
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
  outline: none;
  resize: vertical;
  width: 100%;
  &:focus {
    border-color: ${({theme:o})=>o.colors.primary};
  }
`,j=s.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: ${({theme:o})=>o.space(3)};
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 12px;
  color: ${({theme:o})=>o.colors.secondary};
`,W=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: ${({theme:o})=>o.space(3)};
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 12px;
  color: ${({theme:o})=>o.colors.textMuted};
`,_=s.input`
  display: none;
`,O=s.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,U=s.div`
  position: relative;
  width: 64px;
  height: 64px;
  border: 1px solid ${({theme:o})=>o.colors.border};
  border-radius: 4px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 16px;
    height: 16px;
    line-height: 1;
    padding: 0;
    border: none;
    border-radius: 3px;
    background: ${({theme:o})=>o.colors.bg}cc;
    color: ${({theme:o})=>o.colors.danger};
    font-size: 12px;
    cursor: pointer;
  }
`,$=s.div`
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 11px;
  color: ${({theme:o,$err:i})=>i?o.colors.secondary:o.colors.textMuted};
  margin-top: 6px;
`,V=s.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 12px;
  color: ${({theme:o})=>o.colors.textMuted};
`,J=s.p`
  margin: 0;
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13.5px;
  line-height: 1.65;
  white-space: pre-wrap;
  color: ${({theme:o})=>o.colors.text};
`,G=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  margin-top: 12px;
  img {
    width: 100%;
    border: 1px solid ${({theme:o})=>o.colors.border};
    border-radius: 4px;
  }
`,H=s.button`
  margin-left: auto;
  border: 1px solid ${({theme:o})=>o.colors.border};
  background: transparent;
  color: ${({theme:o})=>o.colors.danger};
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border-color: ${({theme:o})=>o.colors.danger};
  }
`,K=o=>new Promise((i,d)=>{const l=new FileReader;l.onload=()=>i(l.result),l.onerror=d,l.readAsDataURL(o)}),w=()=>{const[o,i]=n.useState(E),[d,l]=n.useState(""),[p,u]=n.useState(""),[c,m]=n.useState([]),[g,x]=n.useState("");n.useEffect(()=>{try{localStorage.setItem(v,JSON.stringify(o))}catch{x("⚠ storage full — remove some image-heavy posts.")}},[o]);const P=n.useMemo(()=>{const t=D.map(r=>({...r,local:!1}));return[...o,...t].sort((r,a)=>String(a.date).localeCompare(String(r.date)))},[o]),S=async t=>{const r=Array.from(t.target.files||[]);if(!r.length)return;const a=await Promise.all(r.map(K));m(h=>[...h,...a]),t.target.value=""},I=t=>m(r=>r.filter((a,h)=>h!==t)),z=t=>{if(t.preventDefault(),!d.trim()&&!p.trim()){x("⚠ add a title or some text first.");return}const r={id:`local-${Date.now()}`,title:d.trim()||"untitled",date:new Date().toISOString().slice(0,10),body:p.trim(),images:c,local:!0};i(a=>[r,...a]),l(""),u(""),m([]),x("✔ published locally (saved in this browser).")},T=t=>i(r=>r.filter(a=>a.id!==t));return e.jsxs(F,{children:[e.jsx(f,{title:"~/blog — ./new-post",variant:"cyan",children:e.jsxs("form",{onSubmit:z,children:[e.jsxs(j,{children:["$ title:",e.jsx(N,{value:d,onChange:t=>l(t.target.value),placeholder:"post title"})]}),e.jsxs(j,{children:["$ body:",e.jsx(R,{value:p,onChange:t=>u(t.target.value),placeholder:"write your post... (newlines preserved)"})]}),e.jsxs(W,{children:[e.jsx(b,{as:"label",htmlFor:"blog-images",type:"button",children:"+ add images"}),e.jsx(_,{id:"blog-images",type:"file",accept:"image/*",multiple:!0,onChange:S}),c.length>0&&e.jsxs("span",{children:[c.length," attached"]})]}),c.length>0&&e.jsx(O,{children:c.map((t,r)=>e.jsxs(U,{children:[e.jsx("img",{src:t,alt:`attachment ${r+1}`}),e.jsx("button",{type:"button",onClick:()=>I(r),"aria-label":"remove image",children:"×"})]},r))}),e.jsx("div",{style:{marginTop:12},children:e.jsx(b,{type:"submit",children:"[ publish > ]"})}),g&&e.jsx($,{$err:g.startsWith("⚠"),children:g}),e.jsx($,{children:"// local only — nothing is uploaded. Permanent posts go in src/data/blog.json"})]})}),e.jsx(y.div,{variants:B,...A,children:e.jsx(C,{mode:"popLayout",children:P.map(t=>e.jsx(y.div,{variants:k,exit:L,layout:!0,style:{marginBottom:24},children:e.jsxs(f,{title:`~/blog/${t.id}`,children:[e.jsxs(V,{children:[e.jsx("strong",{style:{color:"#00ff88"},children:t.title}),e.jsx("span",{children:t.date}),t.local&&e.jsx("span",{children:"· local"}),t.local&&e.jsx(H,{onClick:()=>T(t.id),children:"rm"})]}),t.body&&e.jsx(J,{children:t.body}),t.images&&t.images.length>0&&e.jsx(G,{children:t.images.map((r,a)=>e.jsx("img",{src:r,alt:`${t.title} ${a+1}`,loading:"lazy"},a))})]})},t.id))})})]})};w.displayName="Blog";const Y=()=>(n.useEffect(()=>M("blog"),[]),e.jsx(w,{}));Y.displayName="BlogPage";export{Y as default};
