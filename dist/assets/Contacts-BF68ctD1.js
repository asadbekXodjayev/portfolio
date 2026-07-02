import{r as i,j as e,T as y,a as s,u as r}from"./index-C_-9h-n-.js";import{a as v}from"./index-BOeqtr82.js";import{B as j}from"./Button-DcH0-Mso.js";import{G as k}from"./ProjectCard-CsZMu3NK.js";import{c as g,i as t,m as n}from"./motion-A7jxgoYj.js";import{s as C}from"./helpers-dVw9XFd8.js";const S=r(n.form)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.space(3)};
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
`,x=r(n.label)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({theme:o})=>o.colors.secondary};
`,h=r.input`
  padding: 8px 10px;
  background: ${({theme:o})=>o.colors.bg};
  border: 1px solid ${({theme:o})=>o.colors.border};
  color: ${({theme:o})=>o.colors.primary};
  font-family: inherit;
  outline: none;
  &:focus {
    border-color: ${({theme:o})=>o.colors.primary};
  }
`,T=r.textarea`
  padding: 8px 10px;
  min-height: 110px;
  background: ${({theme:o})=>o.colors.bg};
  border: 1px solid ${({theme:o})=>o.colors.border};
  color: ${({theme:o})=>o.colors.primary};
  font-family: inherit;
  outline: none;
  resize: vertical;
  &:focus {
    border-color: ${({theme:o})=>o.colors.primary};
  }
`,w=r.div`
  color: ${({theme:o,$ok:l})=>l?o.colors.primary:o.colors.secondary};
  font-size: 12px;
`,z=r(n.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dashed ${({theme:o})=>o.colors.border};
`,E=r.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid ${({theme:o})=>o.colors.border};
  border-radius: 4px;
  color: ${({theme:o})=>o.colors.text};
  font-size: 12px;
  transition: all ${({theme:o})=>o.animation.fast};
  &:hover {
    border-color: ${({theme:o})=>o.colors.primary};
    color: ${({theme:o})=>o.colors.primary};
    box-shadow: 0 0 16px ${({theme:o})=>o.colors.primary}33;
  }
`,R=r.div`
  margin-top: 14px;
  font-size: 12px;
  color: ${({theme:o})=>o.colors.textMuted};
  a {
    color: ${({theme:o})=>o.colors.secondary};
  }
`,A="5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8",I="-1001756381397",L=[{key:"github",label:"github",href:s.socials.github,icon:e.jsx(k,{})},{key:"linkedin",label:"linkedin",href:s.socials.linkedin},{key:"telegram",label:"telegram",href:s.socials.telegram},{key:"instagram",label:"instagram",href:s.socials.instagram}].filter(o=>o.href),b=()=>{const[o,l]=i.useState(""),[c,f]=i.useState(""),[d,u]=i.useState(""),[p,m]=i.useState(""),$=a=>{a.preventDefault(),!(!o||!c||!d)&&(m("Connecting to server..."),setTimeout(()=>{v.post(`https://api.telegram.org/bot${A}/sendMessage?chat_id=${I}&text=${encodeURIComponent(`<b>Contacts:</b>
<b>Name:</b> ${o}
<b>Link:</b> ${c}
<b>Message:</b> ${d}`)}&parse_mode=html`).then(()=>{m("✔ Transmission complete. I will reach out soon."),l(""),f(""),u("")}).catch(()=>m("✗ Transmission failed. Try again."))},700))};return e.jsxs(y,{title:"~/contacts — /bin/send",children:[e.jsxs(S,{onSubmit:$,variants:g,initial:"hidden",animate:"visible",children:[e.jsxs(x,{variants:t,children:["$ name:",e.jsx(h,{value:o,onChange:a=>l(a.target.value),placeholder:"your name"})]}),e.jsxs(x,{variants:t,children:["$ contact:",e.jsx(h,{value:c,onChange:a=>f(a.target.value),placeholder:"email / telegram / linkedin"})]}),e.jsxs(x,{variants:t,children:["$ message:",e.jsx(T,{value:d,onChange:a=>u(a.target.value),placeholder:"your message..."})]}),e.jsx(n.div,{variants:t,children:e.jsx(j,{type:"submit",children:"[ send > ]"})}),p&&e.jsx(w,{$ok:p.startsWith("✔"),children:p})]}),e.jsx(z,{variants:g,initial:"hidden",animate:"visible",children:L.map(a=>e.jsxs(E,{href:a.href,target:"_blank",rel:"noreferrer",as:n.a,variants:t,children:[a.icon,a.label," ↗"]},a.key))}),e.jsxs(R,{children:["direct: ",e.jsx("a",{href:`mailto:${s.email}`,children:s.email})]})]})};b.displayName="Contact";const M=()=>(i.useEffect(()=>C("contacts"),[]),e.jsx(b,{}));M.displayName="ContactsPage";export{M as default};
