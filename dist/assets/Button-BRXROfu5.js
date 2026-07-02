import{u as r}from"./index-jLxjpV-a.js";const a=r.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid ${({theme:o})=>o.colors.primary};
  color: ${({theme:o})=>o.colors.primary};
  font-family: ${({theme:o})=>o.fonts.mono};
  font-size: 13px;
  text-transform: lowercase;
  cursor: pointer;
  transition: all ${({theme:o})=>o.animation.fast} ${({theme:o})=>o.animation.easing};

  &:hover {
    background: ${({theme:o})=>o.colors.primary};
    color: ${({theme:o})=>o.colors.bg};
    box-shadow: 0 0 20px ${({theme:o})=>o.colors.primary}55;
  }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;a.displayName="Button";export{a as B};
