import{j as t,p as P,a,r as o,g as i,q as T,t as L,v as B,w as F,i as N}from"./index-ZEvam18P.js";import{a as q}from"./index-BOeqtr82.js";import{B as H}from"./Button-nVmLgA2j.js";import{G as M}from"./ProjectCard-DFVJ29Q-.js";import{c as G,a as p,m as f}from"./motion-CBh4ijnm.js";import{P as O}from"./PageHeader-DsvG0M9i.js";import"./Scramble-C1bVU6Ri.js";const V=a.section`
  ${P(6)}
  background: ${({theme:e})=>e.colors.bgSecondary};
  width: 100%;
`,A=a.header`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: ${({theme:e})=>e.colors.ink};
  color: ${({theme:e})=>e.colors.bgSecondary};
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 16px;
  font-weight: 600;
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: ${({theme:e})=>e.colors.bgSecondary};
    flex: none;
  }
`,D=a.div`
  padding: ${({theme:e})=>e.space(5)};
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 15px;
  line-height: 1.6;
`,k=({title:e,children:n,variant:c,glow:m,scanlines:d,showCursor:x,...r})=>t.jsxs(V,{...r,children:[e&&t.jsx(A,{children:e}),t.jsx(D,{children:n})]});k.displayName="Panel";const R=a.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: ${({theme:e})=>e.space(10)};
  align-items: start;
  @media (max-width: 860px) { grid-template-columns: 1fr; }
`,W=a(f.form)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space(4)};
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 14px;
`,h=a(f.label)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,w=`
  padding: 11px 12px;
  border-radius: 0;
  font-family: inherit;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
`,$=a.input`
  ${w}
  background: ${({theme:e})=>e.colors.bg};
  &:focus { outline: 3px solid ${({theme:e})=>e.colors.accent}; outline-offset: 0; }
`,_=a.textarea`
  ${w}
  min-height: 140px;
  resize: vertical;
  background: ${({theme:e})=>e.colors.bg};
  &:focus { outline: 3px solid ${({theme:e})=>e.colors.accent}; outline-offset: 0; }
`,J=a.div`
  font-size: 14px;
  color: ${({theme:e,$ok:n})=>n?e.colors.secondary:e.colors.danger};
`,K=a.aside`
  display: grid;
  gap: ${({theme:e})=>e.space(6)};
  h2 { font-size: 22px; margin-bottom: 8px; }
  p { font-size: 17px; color: ${({theme:e})=>e.colors.textMuted}; }
`,Q=a.ul`
  list-style: none;
  display: grid;
  gap: 8px;
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 15px;
  a { display: inline-flex; align-items: center; gap: 8px; }
`,U=a.div`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,X=[{key:"github",label:"GitHub",href:i.socials.github,icon:t.jsx(M,{})},{key:"linkedin",label:"LinkedIn",href:i.socials.linkedin},{key:"telegram",label:"Telegram",href:i.socials.telegram}].filter(e=>e.href),S=()=>{const[e,n]=o.useState(""),[c,m]=o.useState(""),[d,x]=o.useState(""),[r,u]=o.useState(""),[g,y]=o.useState(!1),[b,C]=o.useState(""),E=async s=>{if(s.preventDefault(),!e||!c||!d)return;y(!0),u("");let j={};try{if(T())throw new Error("opted out");const l=await L();j={page:l.page,device:B(l)}}catch{}q.post("/api/telegram",{type:"contact",name:e,contact:c,message:d,website:b,sid:F(),meta:j}).then(()=>{u("ok:Message sent. I will reply as soon as I can."),n(""),m(""),x("")}).catch(l=>{var v;const I=(v=l==null?void 0:l.response)==null?void 0:v.status;u(I===429?"err:Too many messages in a short time. Please try again in a few minutes.":`err:The message could not be sent. Please email ${i.academicEmail} instead.`)}).finally(()=>y(!1))},z=r.startsWith("ok:");return t.jsxs(R,{children:[t.jsx(k,{title:"Send a message",children:t.jsxs(W,{onSubmit:E,variants:G,initial:"hidden",animate:"visible",children:[t.jsxs(h,{variants:p,children:["Name",t.jsx($,{value:e,onChange:s=>n(s.target.value),autoComplete:"name",required:!0})]}),t.jsxs(h,{variants:p,children:["How should I reply? (email, Telegram or LinkedIn)",t.jsx($,{value:c,onChange:s=>m(s.target.value),autoComplete:"email",required:!0})]}),t.jsxs(h,{variants:p,children:["Message",t.jsx(_,{value:d,onChange:s=>x(s.target.value),required:!0})]}),t.jsx(U,{"aria-hidden":"true",children:t.jsxs("label",{children:["Website",t.jsx("input",{value:b,onChange:s=>C(s.target.value),tabIndex:-1,autoComplete:"off",name:"website"})]})}),t.jsx(f.div,{variants:p,children:t.jsx(H,{type:"submit",disabled:g,children:g?"Sending…":"Send message"})}),r&&t.jsx(J,{role:"status",$ok:z,children:r.slice(r.indexOf(":")+1)})]})}),t.jsxs(K,{children:[t.jsxs("div",{children:[t.jsx("h2",{children:"Email"}),t.jsxs("p",{children:["For research, collaboration or roles:",t.jsx("br",{}),t.jsx("a",{href:`mailto:${i.academicEmail}`,children:i.academicEmail})]}),t.jsxs("p",{style:{marginTop:8},children:["Personal: ",t.jsx("a",{href:`mailto:${i.email}`,children:i.email})]})]}),t.jsxs("div",{children:[t.jsx("h2",{children:"Elsewhere"}),t.jsx(Q,{children:X.map(s=>t.jsx("li",{children:t.jsxs("a",{href:s.href,target:"_blank",rel:"noreferrer",children:[s.icon,s.label]})},s.key))})]})]})]})};S.displayName="Contact";const Y=()=>(o.useEffect(()=>N("contacts"),[]),t.jsxs(t.Fragment,{children:[t.jsx(O,{title:"Contact",lede:"For research, collaboration or roles. Email is the fastest way to reach me."}),t.jsx(S,{})]}));Y.displayName="ContactsPage";export{Y as default};
