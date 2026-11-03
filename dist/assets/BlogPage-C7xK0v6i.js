import{r as c,j as t,L as h,a as d,t as b,i as x}from"./index-B42vXAuJ.js";import{P as k}from"./PageHeader-BrKxorm6.js";import"./Scramble-BhAYuvIe.js";const m=[{id:"future-goals",title:"Where I am heading: goals for the next few years",date:"2026-11-03",tags:["Goals","AI systems","Open source"],summary:"From building interfaces to understanding the systems underneath them: what I want to learn, build and publish next.",body:`I started with native C++ and C#, moved to the web, and spent the last few years shipping production software in React. This year something shifted. My first merged pull requests landed in NVIDIA repositories, and reading production code for training and inference systems made it clear where I want to spend the next stretch of my career. This post is a record of that direction, so I can check later whether I followed it.

## 1. Move from interfaces toward AI systems

I want to understand the full path a model takes: data, training, serving, and the product that finally puts it in front of a person. Building interfaces taught me to care about the last step. The goal now is to be useful on the steps before it, starting with tooling and infrastructure around training and inference rather than only the screens on top.

Concretely, that means going deeper on PyTorch and the Hugging Face stack, building small models end to end, and reading projects like Megatron-LM and TensorRT-LLM until their structure stops feeling foreign.

## 2. Keep contributing upstream, and keep it careful

The contributions I am proudest of are small: a recursion bug, two detection gaps. Each one came from reading code closely, reproducing the problem first, and changing as little as possible. I want to continue that pattern, with fewer but better pull requests, each with a test and a clear explanation of why the change is correct.

The near-term target is to get my open TensorRT-LLM pull request through review, then take on a larger issue in an inference or training project.

## 3. Work on the security of AI agents

My SkillSpector work showed me that agent skills and tool integrations are a new supply-chain surface. A skill is text that a model will follow, so hidden instructions and indirect code execution matter in ways they did not for ordinary packages. I want to keep working on detection and on safer defaults for agent tooling, and to write about what I learn in public.

## 4. Do research, and write it up

Alongside my studies I want to move from notes to something that can be cited: a reproducible experiment, a short paper or preprint, or at minimum a well-documented repository with results someone else can rerun. I will publish the process here first.

## 5. Stay good at the craft I already have

None of this replaces the engineering craft I already have. Accessibility, performance and honest interface design are still what I can offer on day one, and AI products need them badly. I plan to keep both tracks alive and let each improve the other.

## How I will measure it

By the end of next year I want a list I can point to: merged contributions in AI infrastructure projects, at least one write-up that a stranger found useful, and one research-style project with reproducible results. If this page still lists goals and no evidence, I have not done the work.`,images:[]},{id:"megatron-tokenizer-recursion",title:"A tokenizer property that called itself: my fix in Megatron-LM",date:"2026-07-12",tags:["Open source","Python","NVIDIA"],summary:"Reading an alias that a subclass did not override crashed with RecursionError. How the bug worked and how the fix stayed small.",body:`In July my pull request to NVIDIA's Megatron-LM was merged (PR #5445). It fixes an infinite recursion in the abstract text tokenizer. The change is small, 40 lines added and 12 removed across two files, but the bug is a good example of how a reasonable-looking defensive check can defeat itself.

## The problem

The abstract tokenizer exposes properties such as cls_id, sep_id, pad_id, bos_id, eos_id and mask_id. Each one checked whether the object had an attribute with the same name and, if so, returned it. The trouble is that the property is that attribute. hasattr always succeeded, and returning the attribute called the property again.

Any subclass that did not override a particular alias hit this. For example, the byte-level tokenizer overrides pad, bos and eos but not cls, sep or mask. Reading cls_id on it raised RecursionError instead of returning a value or a clean AttributeError.

## The fix

The property should check the alternate short name instead: cls rather than cls_id, sep rather than sep_id, and so on. That mirrors how the neighbouring eod property already worked, and it keeps the existing error messages that tell the user which two names were looked up. Subclasses that override an id property are unaffected.

## What I took from it

- Reproduce first. The crash took one line to trigger, and having it made the fix easy to verify and to explain in the pull request.
- Follow the code that is already there. The sibling property showed the intended pattern, so the fix was mostly alignment, not invention.
- Keep the diff reviewable. Maintainers of a large repository read many pull requests. A small, well-explained change is far more likely to be merged quickly.

The pull request is here: https://github.com/NVIDIA/Megatron-LM/pull/5445`,images:[]},{id:"skillspector-detection-gaps",title:"Two blind spots in an agent-skill scanner, and how I closed them",date:"2026-06-29",tags:["Security","AI agents","NVIDIA"],summary:"Hidden Unicode instructions and getattr-based execution both scored as clean in SkillSpector. What each gap was and why the fixes are deliberately narrow.",body:`SkillSpector is an NVIDIA open-source scanner that checks AI agent skills for vulnerabilities, prompt injection, data exfiltration and supply-chain risk before you install them. In June two of my pull requests were merged into it. Both close a case where clearly suspicious content produced no finding at all.

## Gap one: invisible instructions (PR #167)

Unicode Tag characters (U+E0000 to U+E007F) map one-to-one onto printable ASCII but render as nothing. That means a complete instruction can sit inside an otherwise harmless skill description. A human reviewer sees ordinary prose, while a language model reading the raw text receives the hidden instruction.

The existing invisible-text check covered zero-width characters and the bidirectional controls used in Trojan Source attacks, but not the Tag block. I extended it to flag any remaining Tag-block character.

One detail needed care. The Tag block has one legitimate use: emoji subdivision flags such as the ones for Scotland, Wales and England. The check strips well-formed emoji tag sequences first and flags only what is left, so those flags do not trigger false alarms. It also runs on every file type, because hidden text in a script or config file is just as dangerous as hidden text in the skill description.

## Gap two: execution through getattr (PR #166)

A call like getattr(os, "system")(cmd) does exactly what os.system(cmd) does, yet the scanner reported nothing. The inner getattr has a constant second argument, which an existing rule skips by design, and the outer call is not a plain name, so the other rules never resolved it as a sink.

I added a rule, AST9, that fires when the second argument to getattr is a string literal naming a known execution sink: exec, eval, system, popen or __import__. It reports at high severity.

## Why the rules are narrow

A security scanner that cries wolf gets switched off. The allowlist is deliberately short so ordinary reflection, such as reading a configuration value by name, stays quiet. The behaviour for non-literal names is unchanged. Each fix targets one concrete evasion, ships with tests, and explains the reasoning in the pull request, so a maintainer can judge it quickly.

Pull requests: https://github.com/NVIDIA/SkillSpector/pull/167 and https://github.com/NVIDIA/SkillSpector/pull/166`,images:[]},{id:"contributing-to-large-projects",title:"What I do differently when contributing to a large project",date:"2026-07-20",tags:["Open source","Process"],summary:"Four habits that made my first contributions to big repositories easy to review.",body:`Big repositories feel intimidating, but the mechanics of a good contribution are the same everywhere. These are the habits that worked for me across Megatron-LM and SkillSpector.

## Start from a failing case

Before touching code I write the smallest input that shows the problem: one line that crashes, or one snippet the scanner wrongly calls safe. It proves the issue is real, and it becomes the test that proves the fix.

## Read the neighbours

The codebase usually already contains the right pattern. In Megatron-LM a sibling property showed how the alias lookup was meant to work. Matching existing conventions makes a change feel native and cuts review time.

## Change as little as possible

Every extra line is something a reviewer has to understand and trust. I would rather open two focused pull requests than one that mixes a fix with cleanup.

## Explain the why, not only the what

The description says what was wrong, how I know, what the fix does, and what I deliberately left alone. For a detection rule that includes the false-positive risk. A reviewer should be able to agree or disagree without reverse-engineering my reasoning.

## Be ready for no

Not every pull request is merged. Some of mine were closed, and some are still waiting. Each review taught me something about what the project values, and that feedback is part of the contribution.`,images:[]},{id:"from-cpp-to-the-web",title:"From C++ Windows Forms to production software",date:"2026-05-20",tags:["Career","Software"],summary:"How starting with native code still shapes the way I build for the web.",body:`I did not start on the web. My first programs were C++ and C# Windows Forms applications and console tools. I learned how software actually runs, memory, threads and the cost of an operation, before I learned how to make it look good.

In 2022 I moved to the web, went deep on JavaScript and then React, and began building real sites for real businesses. By 2023 and 2024 that meant logistics platforms, e-commerce and a smart-TV app, with TypeScript, Next.js, state management and internationalisation as everyday tools.

The native background shows up in small ways. I notice unnecessary re-renders the way I once noticed unnecessary allocations. I treat bundle size as a budget. I distrust abstractions I cannot explain.

That habit of asking what is happening underneath is also what pulled me toward AI systems, which is where I am heading next.`,images:[]},{id:"working-with-ai-agents",title:"How I use AI agents in my engineering workflow",date:"2026-04-18",tags:["AI agents","Testing"],summary:"Where agents help me, where I still read every line, and how automated end-to-end tests keep me honest.",body:`I use AI models daily, but I try to be specific about what I delegate.

## Where agents help

Scaffolding a feature, drafting repetitive code, reviewing a diff for things I might have missed, and generating first versions of tests. They are fast at the parts of the job that are mostly typing.

## Where I do not hand over control

Design decisions, anything touching security or money, and the final read of every change. I treat agent output as a pull request from a colleague I have not yet learned to trust: useful, and always reviewed.

## Tests as the safety net

The thing that makes this workable is automated testing. Playwright with Allure reports covers regression testing end to end, so when an agent or I change something, the suite says whether the product still behaves. Without that, speed would only mean breaking things faster.

## What I am still working out

How to evaluate agent-written tests for real coverage rather than coverage on paper, and how to keep prompts and workflows reproducible enough that someone else can rerun them. Those questions are part of the research direction I describe in my goals post.`,images:[]}],l=[...m].sort((e,n)=>String(n.date).localeCompare(String(e.date))),f=e=>new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),w=e=>Math.max(1,Math.round(e.split(/\s+/).length/220)),I=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: ${({theme:e})=>e.space(8)};
`,v=d.button`
  padding: 4px 12px;
  font-family: ${({theme:e})=>e.fonts.pixel};
  font-size: 16px;
  border: 2px solid ${({theme:e})=>e.colors.ink};
  background: ${({theme:e,$on:n})=>n?e.colors.primary:e.colors.bgSecondary};
  color: ${({theme:e,$on:n})=>n?e.colors.bgSecondary:e.colors.text};
  box-shadow: ${({$on:e})=>e?"none":"3px 3px 0"} ${({theme:e})=>e.colors.shadow};
  transform: ${({$on:e})=>e?"translate(3px, 3px)":"none"};
  &:hover { background: ${({theme:e})=>e.colors.accent}; color: ${({theme:e})=>e.colors.accentInk}; }
`,j=d.ol`
  list-style: none;
  border-top: 2px solid ${({theme:e})=>e.colors.ink};
`,T=d.li`
  border-bottom: 2px dotted ${({theme:e})=>e.colors.border};
  a.row {
    display: grid;
    grid-template-columns: 170px minmax(0, 1fr);
    gap: ${({theme:e})=>e.space(6)};
    padding: ${({theme:e})=>e.space(6)} 0;
    text-decoration: none;
    color: inherit;
  }
  a.row:hover h2 { background: ${({theme:e})=>e.colors.accent}; color: ${({theme:e})=>e.colors.accentInk}; }
  @media (max-width: 700px) { a.row { grid-template-columns: 1fr; gap: 6px; } }
  time, .min { font-family: ${({theme:e})=>e.fonts.mono}; font-size: 13px; color: ${({theme:e})=>e.colors.textMuted}; display: block; }
  h2 { font-size: 28px; margin-bottom: 8px; width: fit-content; }
  p { font-size: 18px; color: ${({theme:e})=>e.colors.textMuted}; }
  .tags { margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap; font-family: ${({theme:e})=>e.fonts.ui}; font-size: 13px; color: ${({theme:e})=>e.colors.textMuted}; }
  .tags span { padding: 1px 8px; border: 2px solid ${({theme:e})=>e.colors.border}; background: ${({theme:e})=>e.colors.bgSecondary}; }
`,y=()=>{const[e,n]=c.useState("All"),o=c.useMemo(()=>["All",...new Set(l.flatMap(a=>a.tags||[]))],[]),i=e==="All"?l:l.filter(a=>(a.tags||[]).includes(e));return t.jsxs("div",{children:[t.jsx(I,{role:"group","aria-label":"Filter posts by topic",children:o.map(a=>t.jsx(v,{type:"button",$on:a===e,"aria-pressed":a===e,onClick:()=>n(a),children:a},a))}),t.jsx(j,{children:i.map(a=>t.jsx(T,{children:t.jsxs(h,{className:"row",to:`/blog/${a.id}`,children:[t.jsxs("div",{children:[t.jsx("time",{dateTime:a.date,children:f(a.date)}),t.jsxs("span",{className:"min",children:[w(a.body)," min read"]})]}),t.jsxs("div",{children:[t.jsx("h2",{children:a.title}),t.jsx("p",{children:a.summary}),t.jsx("div",{className:"tags",children:(a.tags||[]).map(s=>t.jsx("span",{children:s},s))})]})]})},a.id))})]})},A=d.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 8px;
  z-index: 300;
  width: ${({$p:e})=>e}%;
  background: ${({theme:e})=>e.colors.accent};
  border-bottom: 2px solid ${({theme:e})=>e.colors.ink};
  border-right: 2px solid ${({theme:e})=>e.colors.ink};
`,g=d.article`
  max-width: 68ch;
  margin: 0 auto;
  h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 400; letter-spacing: -0.02em; margin: 12px 0 16px; }
  h2 { font-size: 28px; margin: 44px 0 12px; }
  p { font-size: 20px; line-height: 1.7; margin-bottom: 20px; max-width: none; }
  ul { margin: 0 0 20px 22px; font-size: 20px; line-height: 1.7; }
  li { margin-bottom: 6px; }
  .meta { font-family: ${({theme:e})=>e.fonts.mono}; font-size: 13px; color: ${({theme:e})=>e.colors.textMuted}; }
  .lede { font-size: 22px; color: ${({theme:e})=>e.colors.textMuted}; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px dotted ${({theme:e})=>e.colors.ink}; }
  .back { font-family: ${({theme:e})=>e.fonts.ui}; font-size: 14px; }
  .end { margin-top: 48px; padding-top: 24px; border-top: 2px dotted ${({theme:e})=>e.colors.ink}; font-family: ${({theme:e})=>e.fonts.pixel}; font-size: 17px; display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
`,u=e=>e.split(/(https?:\/\/[^\s)]+)/g).map((n,o)=>/^https?:\/\//.test(n)?t.jsx("a",{href:n,target:"_blank",rel:"noreferrer",children:n.replace(/^https?:\/\//,"")},o):n),$=e=>{const n=[];let o=[];const i=()=>{o.length&&(n.push(t.jsx("ul",{children:o.map((a,s)=>t.jsx("li",{children:u(a)},s))},`ul-${n.length}`)),o=[])};return e.split(/\n\n+/).forEach((a,s)=>{a.startsWith("## ")?(i(),n.push(t.jsx("h2",{children:a.slice(3)},s))):a.split(`
`).every(r=>r.startsWith("- "))?(o.push(...a.split(`
`).map(r=>r.slice(2))),i()):(i(),n.push(t.jsx("p",{children:u(a)},s)))}),i(),n},S=({id:e})=>{const n=l.find(r=>r.id===e),[o,i]=c.useState(0);if(c.useEffect(()=>{const r=()=>{const p=document.documentElement.scrollHeight-window.innerHeight;i(p>0?Math.min(100,window.scrollY/p*100):0)};return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[e]),!n)return t.jsxs(g,{children:[t.jsx("h1",{children:"Post not found"}),t.jsxs("p",{children:["That post does not exist. ",t.jsx(h,{to:"/blog",children:"Back to all writing"}),"."]})]});const a=l.findIndex(r=>r.id===e),s=l[a+1];return t.jsxs(t.Fragment,{children:[t.jsx(A,{$p:o,"aria-hidden":"true"}),t.jsxs(g,{children:[t.jsx(h,{className:"back",to:"/blog",children:"← All writing"}),t.jsxs("div",{className:"meta",style:{marginTop:24},children:[f(n.date)," · ",w(n.body)," min read"]}),t.jsx("h1",{children:n.title}),t.jsx("p",{className:"lede",children:n.summary}),$(n.body),t.jsxs("div",{className:"end",children:[t.jsx(h,{to:"/blog",children:"← All writing"}),s&&t.jsxs(h,{to:`/blog/${s.id}`,children:["Older: ",s.title," →"]})]})]})]})};y.displayName="Blog";const M=()=>{const{id:e}=b(),n=e?m.find(o=>o.id===e):null;return c.useEffect(()=>x(n?n.title:"writing"),[n]),e?t.jsx(S,{id:e}):t.jsxs(t.Fragment,{children:[t.jsx(k,{title:"Writing",lede:"Notes on my open-source work, what I am studying in AI, and where I am heading."}),t.jsx(y,{})]})};M.displayName="BlogPage";export{M as default};
