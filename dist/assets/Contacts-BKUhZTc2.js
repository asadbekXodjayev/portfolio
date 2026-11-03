import{j as s,p as C,a,r,g as i,i as S}from"./index-B42vXAuJ.js";import{a as w}from"./index-BOeqtr82.js";import{B as E}from"./Button-BVgmEE6M.js";import{G as z}from"./ProjectCard-NFFE4KaV.js";import{c as L,a as d,m as f}from"./motion-w-qEz2L7.js";import{P as I}from"./PageHeader-BrKxorm6.js";import"./Scramble-BhAYuvIe.js";const P=a.section`
  ${C(6)}
  background: ${({theme:e})=>e.colors.bgSecondary};
  width: 100%;
`,T=a.header`
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
`,B=a.div`
  padding: ${({theme:e})=>e.space(5)};
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 15px;
  line-height: 1.6;
`,j=({title:e,children:o,variant:l,glow:m,scanlines:c,showCursor:p,...n})=>s.jsxs(P,{...n,children:[e&&s.jsx(T,{children:e}),s.jsx(B,{children:o})]});j.displayName="Panel";const F=a.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: ${({theme:e})=>e.space(10)};
  align-items: start;
  @media (max-width: 860px) { grid-template-columns: 1fr; }
`,M=a(f.form)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space(4)};
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 14px;
`,u=a(f.label)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,y=`
  padding: 11px 12px;
  border-radius: 0;
  font-family: inherit;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
`,b=a.input`
  ${y}
  background: ${({theme:e})=>e.colors.bg};
  &:focus { outline: 3px solid ${({theme:e})=>e.colors.accent}; outline-offset: 0; }
`,N=a.textarea`
  ${y}
  min-height: 140px;
  resize: vertical;
  background: ${({theme:e})=>e.colors.bg};
  &:focus { outline: 3px solid ${({theme:e})=>e.colors.accent}; outline-offset: 0; }
`,R=a.div`
  font-size: 14px;
  color: ${({theme:e,$ok:o})=>o?e.colors.secondary:e.colors.danger};
`,A=a.aside`
  display: grid;
  gap: ${({theme:e})=>e.space(6)};
  h2 { font-size: 22px; margin-bottom: 8px; }
  p { font-size: 17px; color: ${({theme:e})=>e.colors.textMuted}; }
`,H=a.ul`
  list-style: none;
  display: grid;
  gap: 8px;
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 15px;
  a { display: inline-flex; align-items: center; gap: 8px; }
`,G="5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8",q="-1001756381397",O=[{key:"github",label:"GitHub",href:i.socials.github,icon:s.jsx(z,{})},{key:"linkedin",label:"LinkedIn",href:i.socials.linkedin},{key:"telegram",label:"Telegram",href:i.socials.telegram}].filter(e=>e.href),$=()=>{const[e,o]=r.useState(""),[l,m]=r.useState(""),[c,p]=r.useState(""),[n,x]=r.useState(""),[h,g]=r.useState(!1),k=t=>{t.preventDefault(),!(!e||!l||!c)&&(g(!0),x(""),w.post(`https://api.telegram.org/bot${G}/sendMessage?chat_id=${q}&text=${encodeURIComponent(`<b>Contacts:</b>
<b>Name:</b> ${e}
<b>Link:</b> ${l}
<b>Message:</b> ${c}`)}&parse_mode=html`).then(()=>{x("ok:Message sent. I will reply as soon as I can."),o(""),m(""),p("")}).catch(()=>x(`err:The message could not be sent. Please email ${i.academicEmail} instead.`)).finally(()=>g(!1)))},v=n.startsWith("ok:");return s.jsxs(F,{children:[s.jsx(j,{title:"Send a message",children:s.jsxs(M,{onSubmit:k,variants:L,initial:"hidden",animate:"visible",children:[s.jsxs(u,{variants:d,children:["Name",s.jsx(b,{value:e,onChange:t=>o(t.target.value),autoComplete:"name",required:!0})]}),s.jsxs(u,{variants:d,children:["How should I reply? (email, Telegram or LinkedIn)",s.jsx(b,{value:l,onChange:t=>m(t.target.value),autoComplete:"email",required:!0})]}),s.jsxs(u,{variants:d,children:["Message",s.jsx(N,{value:c,onChange:t=>p(t.target.value),required:!0})]}),s.jsx(f.div,{variants:d,children:s.jsx(E,{type:"submit",disabled:h,children:h?"Sending…":"Send message"})}),n&&s.jsx(R,{role:"status",$ok:v,children:n.slice(n.indexOf(":")+1)})]})}),s.jsxs(A,{children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Email"}),s.jsxs("p",{children:["For research, collaboration or roles:",s.jsx("br",{}),s.jsx("a",{href:`mailto:${i.academicEmail}`,children:i.academicEmail})]}),s.jsxs("p",{style:{marginTop:8},children:["Personal: ",s.jsx("a",{href:`mailto:${i.email}`,children:i.email})]})]}),s.jsxs("div",{children:[s.jsx("h2",{children:"Elsewhere"}),s.jsx(H,{children:O.map(t=>s.jsx("li",{children:s.jsxs("a",{href:t.href,target:"_blank",rel:"noreferrer",children:[t.icon,t.label]})},t.key))})]})]})]})};$.displayName="Contact";const _=()=>(r.useEffect(()=>S("contacts"),[]),s.jsxs(s.Fragment,{children:[s.jsx(I,{title:"Contact",lede:"For research, collaboration or roles. Email is the fastest way to reach me."}),s.jsx($,{})]}));_.displayName="ContactsPage";export{_ as default};
