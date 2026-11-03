import{j as s,p as P,a,r as o,g as i,q as T,t as L,v as B,i as F}from"./index-D-dtmmbl.js";import{a as N}from"./index-BOeqtr82.js";import{B as q}from"./Button-CIH930wz.js";import{G as H}from"./ProjectCard-CSUHYoLF.js";import{c as M,a as p,m as f}from"./motion-dkRTHRtO.js";import{P as G}from"./PageHeader-BalC8BnC.js";import"./Scramble-CpNVHYa-.js";const V=a.section`
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
`,k=({title:e,children:n,variant:c,glow:m,scanlines:d,showCursor:x,...r})=>s.jsxs(V,{...r,children:[e&&s.jsx(A,{children:e}),s.jsx(D,{children:n})]});k.displayName="Panel";const R=a.div`
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
`,O=a.textarea`
  ${w}
  min-height: 140px;
  resize: vertical;
  background: ${({theme:e})=>e.colors.bg};
  &:focus { outline: 3px solid ${({theme:e})=>e.colors.accent}; outline-offset: 0; }
`,_=a.div`
  font-size: 14px;
  color: ${({theme:e,$ok:n})=>n?e.colors.secondary:e.colors.danger};
`,J=a.aside`
  display: grid;
  gap: ${({theme:e})=>e.space(6)};
  h2 { font-size: 22px; margin-bottom: 8px; }
  p { font-size: 17px; color: ${({theme:e})=>e.colors.textMuted}; }
`,K=a.ul`
  list-style: none;
  display: grid;
  gap: 8px;
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 15px;
  a { display: inline-flex; align-items: center; gap: 8px; }
`,Q=a.div`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,U=[{key:"github",label:"GitHub",href:i.socials.github,icon:s.jsx(H,{})},{key:"linkedin",label:"LinkedIn",href:i.socials.linkedin},{key:"telegram",label:"Telegram",href:i.socials.telegram}].filter(e=>e.href),S=()=>{const[e,n]=o.useState(""),[c,m]=o.useState(""),[d,x]=o.useState(""),[r,u]=o.useState(""),[g,y]=o.useState(!1),[b,C]=o.useState(""),z=async t=>{if(t.preventDefault(),!e||!c||!d)return;y(!0),u("");let j={};try{const l=await T();j={page:l.page,device:L(l)}}catch{}N.post("/api/telegram",{type:"contact",name:e,contact:c,message:d,website:b,sid:B(),meta:j}).then(()=>{u("ok:Message sent. I will reply as soon as I can."),n(""),m(""),x("")}).catch(l=>{var v;const I=(v=l==null?void 0:l.response)==null?void 0:v.status;u(I===429?"err:Too many messages in a short time. Please try again in a few minutes.":`err:The message could not be sent. Please email ${i.academicEmail} instead.`)}).finally(()=>y(!1))},E=r.startsWith("ok:");return s.jsxs(R,{children:[s.jsx(k,{title:"Send a message",children:s.jsxs(W,{onSubmit:z,variants:M,initial:"hidden",animate:"visible",children:[s.jsxs(h,{variants:p,children:["Name",s.jsx($,{value:e,onChange:t=>n(t.target.value),autoComplete:"name",required:!0})]}),s.jsxs(h,{variants:p,children:["How should I reply? (email, Telegram or LinkedIn)",s.jsx($,{value:c,onChange:t=>m(t.target.value),autoComplete:"email",required:!0})]}),s.jsxs(h,{variants:p,children:["Message",s.jsx(O,{value:d,onChange:t=>x(t.target.value),required:!0})]}),s.jsx(Q,{"aria-hidden":"true",children:s.jsxs("label",{children:["Website",s.jsx("input",{value:b,onChange:t=>C(t.target.value),tabIndex:-1,autoComplete:"off",name:"website"})]})}),s.jsx(f.div,{variants:p,children:s.jsx(q,{type:"submit",disabled:g,children:g?"Sending…":"Send message"})}),r&&s.jsx(_,{role:"status",$ok:E,children:r.slice(r.indexOf(":")+1)})]})}),s.jsxs(J,{children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Email"}),s.jsxs("p",{children:["For research, collaboration or roles:",s.jsx("br",{}),s.jsx("a",{href:`mailto:${i.academicEmail}`,children:i.academicEmail})]}),s.jsxs("p",{style:{marginTop:8},children:["Personal: ",s.jsx("a",{href:`mailto:${i.email}`,children:i.email})]})]}),s.jsxs("div",{children:[s.jsx("h2",{children:"Elsewhere"}),s.jsx(K,{children:U.map(t=>s.jsx("li",{children:s.jsxs("a",{href:t.href,target:"_blank",rel:"noreferrer",children:[t.icon,t.label]})},t.key))})]})]})]})};S.displayName="Contact";const X=()=>(o.useEffect(()=>F("contacts"),[]),s.jsxs(s.Fragment,{children:[s.jsx(G,{title:"Contact",lede:"For research, collaboration or roles. Email is the fastest way to reach me."}),s.jsx(S,{})]}));X.displayName="ContactsPage";export{X as default};
