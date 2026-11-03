import{j as i,a as e,r as l,i as n}from"./index-ZEvam18P.js";import{s as p}from"./skills-CpkvkOFA.js";import{i as d,c,a as m,m as o}from"./motion-CBh4ijnm.js";import{P as x}from"./PageHeader-DsvG0M9i.js";import"./Scramble-C1bVU6Ri.js";const g=e(o.div)`
  display: grid;
  gap: ${({theme:s})=>s.space(10)} ${({theme:s})=>s.space(8)};
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: start;
`,f=e(o.section)`
  h2 {
    font-size: 24px;
    padding-bottom: ${({theme:s})=>s.space(2)};
    margin-bottom: ${({theme:s})=>s.space(3)};
    border-bottom: 2px solid ${({theme:s})=>s.colors.ink};
  }
  .badge {
    display: inline-block;
    margin-left: 10px;
    padding: 1px 8px;
    border: 2px solid ${({theme:s})=>s.colors.ink};
    background: ${({theme:s})=>s.colors.accent};
    color: ${({theme:s})=>s.colors.accentInk};
    font-family: ${({theme:s})=>s.fonts.pixel};
    font-size: 14px;
    font-weight: 600;
    vertical-align: middle;
  }
  ul {
    list-style: none;
    display: grid;
    gap: 6px;
    font-family: ${({theme:s})=>s.fonts.ui};
    font-size: 15px;
  }
  li {
    padding: 4px 0;
    border-bottom: 2px dotted ${({theme:s})=>s.colors.border};
  }
`,h=s=>{const t=s.replace(/\.sys$/,"");return t==="ai-ml"?"AI / ML":t.split(/[-_]/).map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")},r=()=>i.jsx(g,{variants:c,...d,children:p.map(s=>i.jsxs(f,{variants:m,$highlight:s.highlight,children:[i.jsxs("h2",{children:[h(s.title),s.badge&&i.jsx("span",{className:"badge",children:s.badge})]}),i.jsx("ul",{children:s.items.map(t=>i.jsx("li",{children:t.name},t.name))})]},s.title))});r.displayName="Skills";const u=()=>(l.useEffect(()=>n("skills"),[]),i.jsxs(i.Fragment,{children:[i.jsx(x,{title:"Skills",lede:"Languages, frameworks and tools I work with, grouped by area."}),i.jsx(r,{})]}));u.displayName="SkillsPage";export{u as default};
