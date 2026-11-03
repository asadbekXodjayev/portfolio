import{u as ce,r as m,R as G,j as t,p as de,a as s,P as b,m as pe,s as xe,c as H,b as he,d as me,e as fe,f as $,S as ue,g as j,L as S,h as ge,i as we}from"./index-D-dtmmbl.js";import{B as P}from"./Button-CIH930wz.js";import{S as ye}from"./Scramble-CpNVHYa-.js";import{c as W,C as be}from"./Contributions-ttRKjKj1.js";import{E as q,m as u,i as A,c as z,a as f,f as K,b as je}from"./motion-dkRTHRtO.js";import{a as ve,b as $e,c as ke}from"./ai-Bk0F6kU5.js";import{P as Se}from"./ProjectCard-CSUHYoLF.js";import{f as Ae}from"./projects-Dpinw88h.js";import{t as Ce}from"./skills-CpkvkOFA.js";const X=$`
  from { transform: translateX(-18px); }
  to   { transform: translateX(70px); }
`,Ee=$`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0.15; }
`,Ie=$`
  0%, 92%, 98%, 100% { fill: var(--n); }
  93%, 97% { fill: var(--s); }
`,Me=$`
  0%   { transform: translateY(0); opacity: 1; }
  50%  { transform: translateY(-2px); opacity: 0.7; }
  100% { transform: translateY(-4px); opacity: 0; }
`,Ne=$`
  0%, 60%, 100% { opacity: 1; }
  70%, 90% { opacity: 0.1; }
`,Pe=$`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,ze=s.figure`
  position: relative;
  ${de(6)}
  background: ${({theme:e})=>e.colors.sky};
  overflow: hidden;
  line-height: 0;
`,Fe=s(ue)`
  width: 100%;
  height: auto;
  .cloud-a { animation: ${X} 80s steps(88) infinite; }
  .cloud-b { animation: ${X} 110s steps(88) infinite; animation-delay: -45s; }
  .blink { animation: ${Ee} 1.1s steps(1) infinite; }
  .eye { animation: ${Ie} 5s steps(1) infinite; }
  .steam { animation: ${Me} 1.6s steps(4) infinite; }
  .steam.s2 { animation-delay: -0.8s; }
  .twinkle { animation: ${Ne} 3s steps(1) infinite; }
  .t2 { animation-delay: -1s; }
  .t3 { animation-delay: -2s; }
  .orb { cursor: pointer; }
  .orb:hover rect { filter: brightness(1.12); }
  .orb:focus-visible { outline: 3px solid ${({theme:e})=>e.colors.primary}; }
`,Re=s.div`
  position: absolute;
  left: 5%;
  top: 9%;
  padding: 6px 10px;
  background: ${({theme:e})=>e.colors.bgSecondary};
  border: 2px solid ${({theme:e})=>e.colors.ink};
  box-shadow: 3px 3px 0 ${({theme:e})=>e.colors.shadow};
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: clamp(12px, 1.5vw, 15px);
  line-height: 1.2;
  white-space: nowrap;
  &::after {
    /* little pixel tail */
    content: '';
    position: absolute;
    left: 18px;
    bottom: -8px;
    width: 8px;
    height: 8px;
    background: ${({theme:e})=>e.colors.bgSecondary};
    border-right: 2px solid ${({theme:e})=>e.colors.ink};
    border-bottom: 2px solid ${({theme:e})=>e.colors.ink};
    transform: rotate(45deg) translate(-3px, -3px);
  }
  .cur {
    display: inline-block;
    width: 0.5em;
    height: 1em;
    margin-left: 3px;
    vertical-align: -0.12em;
    background: ${({theme:e})=>e.colors.accent};
    animation: ${Pe} 1s steps(1) infinite;
  }
`,Le=s.span`
  position: absolute;
  right: 8px;
  bottom: 6px;
  padding: 1px 6px;
  background: ${({theme:e})=>e.colors.bgSecondary};
  border: 2px solid ${({theme:e})=>e.colors.ink};
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 13px;
  line-height: 1.3;
  pointer-events: none;
  opacity: ${({$gone:e})=>e?0:.92};
  transition: opacity 200ms steps(3);
`,O=64,U=40,Be="http://www.w3.org/2000/svg",Te={light:{"--k":"#7EC8F2","--w":"#FFFFFF","--a":"#FFC52E","--s":"#F2C48D","--n":"#4A2E1A","--b":"#3E9A4D","--l":"#8CCB6E"},dark:{"--k":"#17224F","--w":"#5A6AA0","--a":"#F4E9B1","--s":"#F2C48D","--n":"#2B1B10","--b":"#2F7F43","--l":"#6FB35B"}},De=(e,c,a)=>{const l=m.useRef(new Set),o=m.useRef(null),d=m.useRef(!1);m.useEffect(()=>{const g=e.current,p=c.current,x=g.parentElement,w=n=>{const i=g.getBoundingClientRect(),h=Math.floor((n.clientX-i.left)/i.width*O),r=Math.floor((n.clientY-i.top)/i.height*U);return h>=0&&r>=0&&h<O&&r<U?[h,r]:null},k=(n,i)=>{const h=`${n},${i}`;if(l.current.has(h))return;l.current.add(h);const r=document.createElementNS(Be,"rect");r.setAttribute("x",n-.02),r.setAttribute("y",i-.02),r.setAttribute("width",1.04),r.setAttribute("height",1.04),p.appendChild(r),d.current||(d.current=!0,a==null||a())},M=(n,i,h,r)=>{const R=Math.abs(h-n),L=Math.abs(r-i),re=n<h?1:-1,le=i<r?1:-1;let B=R-L,T=n,D=i;for(let V=0;V<200&&(k(T,D),!(T===h&&D===r));V+=1){const Y=2*B;Y>-L&&(B-=L,T+=re),Y<R&&(B+=R,D+=le)}},y=n=>{const i=w(n);if(!i){o.current=null;return}o.current?M(o.current[0],o.current[1],i[0],i[1]):k(i[0],i[1]),o.current=i},N=()=>{o.current=null},v=n=>{if(!(n.target instanceof Element&&n.target.closest(".orb")))for(l.current.clear();p.firstChild;)p.removeChild(p.firstChild)};return x.addEventListener("pointermove",y),x.addEventListener("pointerleave",N),x.addEventListener("dblclick",v),()=>{x.removeEventListener("pointermove",y),x.removeEventListener("pointerleave",N),x.removeEventListener("dblclick",v)}},[e,c,a])},He=[[6,4,""],[14,9,"t2"],[24,3,"t3"],[36,8,""],[55,20,"t2"],[60,6,"t3"],[10,18,"t3"],[30,16,""]],_=({dark:e,interactive:c,toggle:a,onKey:l})=>t.jsxs(t.Fragment,{children:[t.jsx("rect",{width:"64",height:"40",style:{fill:"var(--k)"}}),e&&He.map(([o,d,g],p)=>t.jsx("rect",{x:o,y:d,width:"1",height:"1",className:`twinkle ${g}`,style:{fill:"var(--l)"}},p)),t.jsxs("g",{className:c?"orb":void 0,...c?{role:"button",tabIndex:0,"aria-label":e?"Switch to light theme":"Switch to dark theme",onClick:a,onKeyDown:l}:{},children:[t.jsx("rect",{x:"44",y:"3",width:"13",height:"13",fill:"transparent"}),t.jsx(b,{rows:e?pe:xe,x:46,y:5})]}),!e&&t.jsx(b,{rows:H,x:4,y:10,className:"cloud-a"}),!e&&t.jsx(b,{rows:H,x:30,y:5,className:"cloud-b"}),e&&t.jsx(b,{rows:H,x:8,y:12,className:"cloud-a"}),t.jsx("rect",{x:"0",y:"25",width:"14",height:"3",style:{fill:"var(--l)"},opacity:"0.55"}),t.jsx("rect",{x:"14",y:"24",width:"10",height:"4",style:{fill:"var(--l)"},opacity:"0.55"}),t.jsx("rect",{x:"46",y:"25",width:"10",height:"3",style:{fill:"var(--l)"},opacity:"0.55"}),t.jsx("rect",{x:"56",y:"23",width:"8",height:"5",style:{fill:"var(--l)"},opacity:"0.55"}),t.jsx("rect",{y:"28",width:"64",height:"12",style:{fill:"var(--n)"}}),t.jsx("rect",{y:"28",width:"64",height:"2",style:{fill:"var(--b)"}}),t.jsx("rect",{x:"6",y:"34",width:"16",height:"1",style:{fill:"var(--b)"}}),t.jsx("rect",{x:"42",y:"34",width:"16",height:"1",style:{fill:"var(--b)"}}),t.jsx(b,{rows:he,x:10,y:25}),t.jsx(b,{rows:me,x:46,y:24}),t.jsx("rect",{x:"47",y:"21",width:"1",height:"2",className:"steam",style:{fill:"var(--w)"}}),t.jsx("rect",{x:"49",y:"20",width:"1",height:"2",className:"steam s2",style:{fill:"var(--w)"}}),t.jsx(b,{rows:fe,x:24,y:14})]}),Z=()=>{const{mode:e,toggle:c}=ce(),a=e==="dark",l=m.useRef(null),o=m.useRef(null),[d,g]=G.useState(!1),p=G.useCallback(()=>g(!0),[]);De(l,o,p);const x=w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),c())};return t.jsxs(ze,{children:[t.jsxs(Fe,{ref:l,viewBox:"0 0 64 40",role:"group","aria-label":"Pixel illustration of a developer working at a laptop with a cup of coffee",children:[t.jsx("defs",{children:t.jsx("clipPath",{id:"scene-awake",ref:o})}),t.jsx(_,{dark:a,interactive:!0,toggle:c,onKey:x}),t.jsx("g",{clipPath:"url(#scene-awake)",style:Te[a?"dark":"light"],"aria-hidden":"true",pointerEvents:"none",children:t.jsx(_,{dark:a})})]}),t.jsx(Le,{"aria-hidden":"true",$gone:d,children:"hover to wake up the colors · double-click to reset"}),t.jsxs(Re,{"aria-hidden":"true",children:["hello, world",t.jsx("span",{className:"cur"})]})]})};Z.displayName="PixelScene";const Ve=s.section`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space(12)};
`,Ye=s(u.div)`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: ${({theme:e})=>e.space(10)};
  align-items: center;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: ${({theme:e})=>e.space(8)}; }
`,Ge=s.h1`
  font-size: clamp(40px, 6.2vw, 74px);
  line-height: 1.02;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  /* the surname is inverted (paper on ink) — the one high-contrast moment */
  span {
    background: ${({theme:e})=>e.colors.ink};
    color: ${({theme:e})=>e.colors.bg};
    padding: 0 10px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`,We=s.p`
  margin-top: ${({theme:e})=>e.space(4)};
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 18px;
  color: ${({theme:e})=>e.colors.primary};
`,qe=s.p`
  margin-top: ${({theme:e})=>e.space(5)};
  font-size: clamp(19px, 2.1vw, 22px);
  line-height: 1.55;
  max-width: 36ch;
  strong { font-weight: 600; }
`,Ke=s.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ${({theme:e})=>e.space(6)};
`,Xe=s.a`
  display: inline-block;
  margin-top: ${({theme:e})=>e.space(5)};
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 14px;
`,Oe=s(u.div)``,Ue=s.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: ${({theme:e})=>e.space(3)};
  border-bottom: 2px solid ${({theme:e})=>e.colors.ink};
  h2 {
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    &::before {
      content: '';
      width: 14px;
      height: 14px;
      background: ${({theme:e})=>e.colors.accent};
      border: 2px solid ${({theme:e})=>e.colors.ink};
      flex: none;
    }
  }
  span { font-family: ${({theme:e})=>e.fonts.pixel}; font-size: 16px; color: ${({theme:e})=>e.colors.textMuted}; }
`,[_e,...Je]=j.name.split(" "),ee=()=>t.jsxs(Ve,{children:[t.jsxs(Ye,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.4,ease:q},children:[t.jsxs("div",{children:[t.jsxs(Ge,{children:[_e," ",t.jsx("span",{children:Je.join(" ")})]}),t.jsx(We,{children:t.jsx(ye,{text:`${j.role} · Uzbekistan`,delay:250,duration:900})}),t.jsxs(qe,{children:["I fix problems in production code and study how AI systems are ",t.jsx("strong",{children:"trained, served and secured"}),"."]}),t.jsxs(Ke,{children:[t.jsx(P,{as:S,to:"/contributions",children:"View contributions"}),t.jsx(P,{as:S,to:"/blog",$ghost:!0,children:"Read my goals"})]}),t.jsx(Xe,{href:`mailto:${j.academicEmail}`,children:j.academicEmail})]}),t.jsx(Z,{})]}),t.jsxs(Oe,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.4,delay:.2,ease:q},children:[t.jsxs(Ue,{children:[t.jsx("h2",{children:"Contributions to NVIDIA open source"}),t.jsxs("span",{children:[W.merged," merged · ",W.repos," repos"]})]}),t.jsx(be,{compact:!0})]})]});ee.displayName="Hero";const C=s(u.section)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space(5)};
`,E=s.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: ${({theme:e})=>e.space(3)};
  border-bottom: 2px solid ${({theme:e})=>e.colors.ink};
`,I=s(u.h2)`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  &::before {
    content: '';
    flex: none;
    width: 14px;
    height: 14px;
    background: ${({theme:e})=>e.colors.accent};
    border: 2px solid ${({theme:e})=>e.colors.ink};
  }
`,Qe=s.p`
  font-size: 18px;
  color: ${({theme:e})=>e.colors.textMuted};
  max-width: 62ch;
`,F=s(S)`
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 17px;
  white-space: nowrap;
`,Ze=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.space(10)};
  @media (max-width: 860px) { grid-template-columns: 1fr; gap: ${({theme:e})=>e.space(8)}; }
`,J=s(u.div)`
  h3 { font-size: 20px; margin-bottom: ${({theme:e})=>e.space(3)}; }
`,Q=s.dl`
  display: grid;
  gap: ${({theme:e})=>e.space(3)};
  dt { font-family: ${({theme:e})=>e.fonts.ui}; font-weight: 600; font-size: 15px; }
  dd { color: ${({theme:e})=>e.colors.textMuted}; font-size: 16px; margin-top: 2px; }
`,et=s.p`
  margin-top: ${({theme:e})=>e.space(5)};
  font-family: ${({theme:e})=>e.fonts.ui};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.textMuted};
`,te=()=>t.jsxs(C,{variants:z,...A,children:[t.jsxs(E,{children:[t.jsx(I,{variants:f,children:"AI: what I study and where I am going"}),t.jsx(F,{to:"/blog/future-goals",children:"Read the full goals post"})]}),t.jsx(Qe,{children:"AI is the direction my work is moving in. I am learning how models are built and run, and I want to contribute to the infrastructure and security around them."}),t.jsxs(Ze,{children:[t.jsxs(J,{variants:f,children:[t.jsx("h3",{children:"Currently studying"}),t.jsx(Q,{children:ve.map(e=>t.jsxs("div",{children:[t.jsx("dt",{children:e.name}),t.jsx("dd",{children:e.note})]},e.name))}),t.jsxs(et,{children:["Built so far: ",$e.join(", "),". ",t.jsx(S,{to:"/works",children:"See the projects"}),"."]})]}),t.jsxs(J,{variants:f,children:[t.jsx("h3",{children:"Goals"}),t.jsx(Q,{children:ke.map(e=>t.jsxs("div",{children:[t.jsx("dt",{children:e.title}),t.jsx("dd",{children:e.body})]},e.title))})]})]})]});te.displayName="PreviewAI";const tt=s(u.div)`
  display: grid;
  gap: ${({theme:e})=>e.space(4)};
  p { font-size: 19px; line-height: 1.6; }
`,se=()=>t.jsxs(C,{variants:z,...A,children:[t.jsxs(E,{children:[t.jsx(I,{variants:f,children:"About"}),t.jsx(F,{to:"/about",children:"Full background"})]}),t.jsxs(tt,{variants:f,children:[t.jsx("p",{children:"I am a software developer from Uzbekistan. I started with native C++ and C# applications, moved to the web, and now build production software in React and TypeScript."}),t.jsx("p",{children:"My focus is shifting toward AI systems: how models are trained and served, and how the tools built around them can be made safer. My merged contributions to NVIDIA's Megatron-LM and SkillSpector are the first steps in that direction."})]})]});se.displayName="PreviewAbout";const st=s.div`
  display: grid;
  gap: ${({theme:e})=>e.space(5)};
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`,ie=()=>t.jsxs(C,{variants:z,...A,children:[t.jsxs(E,{children:[t.jsx(I,{variants:f,children:"Selected projects"}),t.jsx(F,{to:"/works",children:"All projects"})]}),t.jsx(st,{children:Ae.map(e=>t.jsx(u.div,{variants:f,children:t.jsx(Se,{project:{...e,featured:!1}})},e.id))})]});ie.displayName="PreviewWorks";const it=s(u.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
`,ot=s(u.li)`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  padding: 6px 12px;
  border: 2px solid ${({theme:e})=>e.colors.ink};
  box-shadow: 3px 3px 0 ${({theme:e})=>e.colors.shadow};
  background: ${({theme:e})=>e.colors.bgSecondary};
  color: ${({theme:e})=>e.colors.text};
`,oe=()=>t.jsxs(C,{variants:K,...A,children:[t.jsxs(E,{children:[t.jsx(I,{variants:je,children:"Technical skills"}),t.jsx(F,{to:"/skills",children:"Full list"})]}),t.jsx(it,{variants:K,children:Ce.map(e=>t.jsx(ot,{variants:f,children:e},e))})]});oe.displayName="PreviewSkills";const nt=s(u.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.space(5)};
  flex-wrap: wrap;
  padding: ${({theme:e})=>e.space(6)};
  border: 2px solid ${({theme:e})=>e.colors.ink};
  box-shadow: 6px 6px 0 ${({theme:e})=>e.colors.shadow};
  background: ${({theme:e})=>e.colors.bgSecondary};
  p { font-size: 19px; max-width: 46ch; }
  a.mail { font-family: ${({theme:e})=>e.fonts.ui}; font-size: 15px; }
`,at=s.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,ne=()=>t.jsxs(C,{variants:z,...A,children:[t.jsx(E,{children:t.jsx(I,{variants:f,children:"Contact"})}),t.jsxs(nt,{variants:f,children:[t.jsxs("p",{children:["For research, collaboration or roles, write to"," ",t.jsx("a",{className:"mail",href:`mailto:${j.academicEmail}`,children:j.academicEmail}),"."]}),t.jsxs(at,{children:[t.jsx(P,{as:"a",href:`mailto:${j.academicEmail}`,children:"Send an email"}),t.jsx(P,{as:S,to:"/contacts",$ghost:!0,children:"Contact form"})]})]})]});ne.displayName="PreviewContact";const rt=s.div`
  overflow: hidden;
  background: ${({theme:e})=>e.colors.ink};
  color: ${({theme:e})=>e.colors.bg};
  border-top: 2px solid ${({theme:e})=>e.colors.ink};
  border-bottom: 2px solid ${({theme:e})=>e.colors.ink};
  box-shadow: 0 6px 0 ${({theme:e})=>e.colors.shadow};
  user-select: none;
`,lt=s.div`
  display: flex;
  width: max-content;
  will-change: transform;
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: clamp(26px, 4vw, 46px);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  padding: 14px 0;
`,ct=s.span`
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding-right: 28px;
  &::after {
    content: '';
    width: 0.38em;
    height: 0.38em;
    background: currentColor;
    flex: none;
  }
`,ae=({items:e,base:c=45})=>{const a=m.useRef(null),l=m.useRef(null);return m.useEffect(()=>{if(ge())return;let o=0,d=-1,g=!0,p=window.scrollY,x=performance.now(),w=0;const k=new IntersectionObserver(([y])=>{g=y.isIntersecting});k.observe(a.current);const M=y=>{const N=Math.min(64,y-x)/1e3;x=y;const v=window.scrollY-p;if(p=window.scrollY,g){Math.abs(v)>.5&&(d=v>0?-1:1);const n=c+Math.min(Math.abs(v)*55,700);o+=d*n*N;const i=l.current.scrollWidth/2;o<=-i&&(o+=i),o>0&&(o-=i),l.current.style.transform=`translate3d(${o}px, 0, 0)`}w=requestAnimationFrame(M)};return w=requestAnimationFrame(M),()=>{cancelAnimationFrame(w),k.disconnect()}},[c]),t.jsx(rt,{ref:a,"aria-hidden":"true",children:t.jsx(lt,{ref:l,children:[...e,...e].map((o,d)=>t.jsx(ct,{children:o},d))})})};ae.displayName="Marquee";const dt=["NVIDIA","Megatron-LM","SkillSpector","TensorRT-LLM","PyTorch","Open source","AI systems","Agent security"],pt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space(20)};
`,xt=()=>(m.useEffect(()=>{we("home")},[]),t.jsxs(pt,{children:[t.jsx(ee,{}),t.jsx(ae,{items:dt}),t.jsx(te,{}),t.jsx(ie,{}),t.jsx(se,{}),t.jsx(oe,{}),t.jsx(ne,{})]}));xt.displayName="HomePage";export{xt as default};
