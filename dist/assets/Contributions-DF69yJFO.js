import{j as o,L as l,a as s}from"./index-B42vXAuJ.js";const i=[{id:"megatron-tokenizer-recursion",org:"NVIDIA",repo:"Megatron-LM",repoUrl:"https://github.com/NVIDIA/Megatron-LM",repoNote:"Research framework for training transformer models at scale.",pr:5445,url:"https://github.com/NVIDIA/Megatron-LM/pull/5445",title:"Fix infinite recursion in abstract tokenizer special-id property aliases",status:"merged",date:"2026-07-10",diff:{added:40,removed:12,files:2},summary:"The cls/sep/pad/bos/eos/mask id properties on the abstract text tokenizer called themselves, so reading an alias a subclass did not override raised RecursionError. They now resolve through the short-name attribute and fail with a clear AttributeError when neither exists.",post:"megatron-tokenizer-recursion"},{id:"skillspector-tag-smuggling",org:"NVIDIA",repo:"SkillSpector",repoUrl:"https://github.com/NVIDIA/SkillSpector",repoNote:"Security scanner for AI agent skills (Claude Code, Codex, MCP).",pr:167,url:"https://github.com/NVIDIA/SkillSpector/pull/167",title:'Detect Unicode Tag-block "ASCII smuggling" hidden instructions',status:"merged",date:"2026-06-27",diff:{added:119,removed:0,files:3},summary:"Unicode Tag characters render as nothing but map one-to-one to ASCII, so a full instruction can hide inside ordinary skill text. Extended the invisible-character check to flag them, while leaving the legitimate emoji flag sequences alone.",post:"skillspector-detection-gaps"},{id:"skillspector-getattr-exec",org:"NVIDIA",repo:"SkillSpector",repoUrl:"https://github.com/NVIDIA/SkillSpector",repoNote:"Security scanner for AI agent skills (Claude Code, Codex, MCP).",pr:166,url:"https://github.com/NVIDIA/SkillSpector/pull/166",title:"Detect reflective exec via getattr() with a literal name (AST9)",status:"merged",date:"2026-06-23",diff:{added:64,removed:4,files:4},summary:'getattr(os, "system")(cmd) behaves exactly like os.system(cmd) but produced no findings. Added a rule for getattr calls whose literal name is an execution sink, with a deliberately narrow allowlist to avoid false positives.',post:"skillspector-detection-gaps"},{id:"tensorrt-llm-streaming-tool-calls",org:"NVIDIA",repo:"TensorRT-LLM",repoUrl:"https://github.com/NVIDIA/TensorRT-LLM",repoNote:"Inference toolkit for large language models on NVIDIA GPUs.",pr:21513,url:"https://github.com/NVIDIA/TensorRT-LLM/pull/21513",title:"Flush tool calls delivered in a single streaming chunk",status:"open",summary:"Open pull request under review."}],n=i.filter(e=>e.status==="merged"),I={merged:n.length,repos:new Set(n.map(e=>`${e.org}/${e.repo}`)).size},d=e=>{if(!e)return"";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})},c=s.ol`
  list-style: none;
  border-top: none;
`,p=s.li`
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: ${({theme:e})=>e.space(5)};
  padding: ${({theme:e})=>e.space(5)} 0;
  border-bottom: 2px dotted ${({theme:e})=>e.colors.border};
  transition: background ${({theme:e})=>e.animation.fast} steps(1);
  &:hover { background: ${({theme:e})=>e.colors.bgSecondary}; }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.space(2)};
  }
`,g=s.div`
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 13px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textMuted};
  strong { display: block; color: ${({theme:e})=>e.colors.text}; font-weight: 500; }
`,h=s.h3``,u=s.div`
  min-width: 0;
  h2, h3 {
    font-size: ${({$compact:e})=>e?"20px":"23px"};
    margin-bottom: 6px;
  }
  h2 a, h3 a { color: ${({theme:e})=>e.colors.text}; text-decoration: none; }
  h2 a:hover, h3 a:hover { background: ${({theme:e})=>e.colors.accent}; color: ${({theme:e})=>e.colors.accentInk}; }
  p { font-size: 16px; color: ${({theme:e})=>e.colors.textMuted}; }
  .links { margin-top: 10px; font-family: ${({theme:e})=>e.fonts.ui}; font-size: 14px; display: flex; gap: 16px; flex-wrap: wrap; }
`,m=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  font-family: ${({theme:e})=>e.fonts.mono};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textMuted};
  white-space: nowrap;
  @media (max-width: 760px) { flex-direction: row; align-items: center; justify-content: flex-start; flex-wrap: wrap; }
`,f=s.span`
  padding: 2px 10px;
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 15px;
  font-weight: 600;
  background: ${({theme:e,$open:r})=>r?"transparent":e.colors.primary};
  color: ${({theme:e,$open:r})=>r?e.colors.text:e.colors.bgSecondary};
  border: 2px ${({$open:e})=>e?"dashed":"solid"} ${({theme:e})=>e.colors.ink};
  box-shadow: ${({$open:e})=>e?"none":"2px 2px 0"} ${({theme:e})=>e.colors.shadow};
`,x=s.span`
  .add { color: ${({theme:e})=>e.colors.primary}; font-weight: 500; }
  .del { color: ${({theme:e})=>e.colors.textMuted}; font-weight: 500; }
`,b=({compact:e=!1,limit:r})=>{const a=r?i.slice(0,r):i;return o.jsx(c,{$rule:e,"aria-label":"Open-source contributions",children:a.map(t=>o.jsxs(p,{children:[o.jsxs(g,{children:[o.jsxs("strong",{children:[t.org,"/",t.repo]}),"#",t.pr,t.date?` · ${d(t.date)}`:""]}),o.jsxs(u,{$compact:e,children:[o.jsx(h,{as:e?"h3":"h2",children:o.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",children:t.title})}),!e&&o.jsx("p",{children:t.summary}),!e&&o.jsxs("div",{className:"links",children:[o.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",children:"View pull request"}),o.jsxs("a",{href:t.repoUrl,target:"_blank",rel:"noreferrer",children:["About ",t.repo]}),t.post&&o.jsx(l,{to:`/blog/${t.post}`,children:"Read the write-up"})]})]}),o.jsxs(m,{children:[o.jsx(f,{$open:t.status==="open",children:t.status==="open"?"Open":"Merged"}),t.diff&&o.jsxs(x,{title:`${t.diff.files} files changed`,children:[o.jsxs("span",{className:"add",children:["+",t.diff.added]})," ",o.jsxs("span",{className:"del",children:["−",t.diff.removed]})]})]})]},t.id))})};b.displayName="Contributions";export{b as C,I as c};
