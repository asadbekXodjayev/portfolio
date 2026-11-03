import{j as e,a as p}from"./index-ZEvam18P.js";import{S as s}from"./Scramble-C1bVU6Ri.js";const t=p.header`
  margin-bottom: ${({theme:o})=>o.space(10)};
  padding-bottom: ${({theme:o})=>o.space(6)};
  border-bottom: 2px solid ${({theme:o})=>o.colors.ink};
  display: grid;
  gap: ${({theme:o})=>o.space(3)};
  h1 {
    font-size: clamp(34px, 5vw, 56px);
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 16px;
    &::before {
      content: '';
      width: clamp(18px, 2.4vw, 26px);
      height: clamp(18px, 2.4vw, 26px);
      background: ${({theme:o})=>o.colors.accent};
      border: 2px solid ${({theme:o})=>o.colors.ink};
      box-shadow: 3px 3px 0 ${({theme:o})=>o.colors.shadow};
      flex: none;
    }
  }
  p {
    font-size: 19px;
    color: ${({theme:o})=>o.colors.textMuted};
    max-width: 60ch;
  }
`,r=({title:o,lede:a})=>e.jsxs(t,{children:[e.jsx("h1",{children:e.jsx(s,{text:o})}),a&&e.jsx("p",{children:a})]});r.displayName="PageHeader";export{r as P};
