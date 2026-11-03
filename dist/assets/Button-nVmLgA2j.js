import{n as r,p as t,a as s}from"./index-ZEvam18P.js";const c=s.button`
  ${t(4)}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  min-height: 44px;
  background: ${({theme:o,$ghost:n})=>n?o.colors.bgSecondary:o.colors.primary};
  color: ${({theme:o,$ghost:n})=>n?o.colors.text:o.colors.bgSecondary};
  font-family: ${({theme:o})=>o.fonts.pixel};
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  ${r}

  &:hover {
    background: ${({theme:o,$ghost:n})=>n?o.colors.accent:o.colors.bg};
    color: ${({theme:o,$ghost:n})=>n?o.colors.accentInk:o.colors.text};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: 4px 4px 0 ${({theme:o})=>o.colors.shadow}; }
`;c.displayName="Button";export{c as B};
