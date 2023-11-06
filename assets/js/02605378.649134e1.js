"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8752],{1900:(o,e,t)=>{t.r(e),t.d(e,{CH:()=>g,assets:()=>u,chCodeConfig:()=>E,contentTitle:()=>h,default:()=>j,frontMatter:()=>F,metadata:()=>y,toc:()=>m});var n=t(5893),r=t(1151),s=t(9794),c=t(7029),l=t(4422),p=t(2369),i=t(4684),d=t(3133),a=t(9848);const F={id:"ignored",title:"Ignored"},h=void 0,y={id:"config/version-groups/ignored",title:"Ignored",description:"Have syncpack ignore the versions of these dependencies completely.",source:"@site/docs/config/version-groups/ignored.mdx",sourceDirName:"config/version-groups",slug:"/config/version-groups/ignored",permalink:"/syncpack/config/version-groups/ignored",draft:!1,unlisted:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/main/site/docs/config/version-groups/ignored.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1699300201,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"ignored",title:"Ignored"},sidebar:"docs",previous:{title:"Banned",permalink:"/syncpack/config/version-groups/banned"},next:{title:"Lowest Version",permalink:"/syncpack/config/version-groups/lowest-version"}},u={},g={annotations:s.ds,Code:s.EK},E={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"},m=[{value:"Examples",id:"examples",level:2},{value:"Configuration",id:"configuration",level:2},{value:"isIgnored",id:"isignored",level:3},{value:"dependencies",id:"dependencies",level:3},{value:"dependencyTypes",id:"dependencytypes",level:3},{value:"label",id:"label",level:3},{value:"packages",id:"packages",level:3}];function x(o){const e={h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...o.components},{Details:t}=e;return g||f("CH",!1),g.Code||f("CH.Code",!0),t||f("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsx)(e.p,{children:"Have syncpack ignore the versions of these dependencies completely."}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Example: Ignore one or more dependencies"}),(0,n.jsx)(a.ZP,{level:"h3"})]}),"\n",(0,n.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(e.h3,{id:"isignored",children:"isIgnored"}),"\n",(0,n.jsx)(c.Z,{required:!0}),"\n",(0,n.jsx)(e.p,{children:"This property activates this behaviour for a given Version Group."}),"\n",(0,n.jsx)(g.Code,{codeConfig:E,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".syncpackrc"',focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"versionGroups",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"dependencies",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"keep-walking",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"isIgnored",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:"true",props:{style:{color:"#BD93F9"}}}]},{tokens:[{content:"    }",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  ]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"}",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{id:"dependencies",children:"dependencies"}),"\n",(0,n.jsx)(p.ZP,{}),"\n",(0,n.jsx)(e.h3,{id:"dependencytypes",children:"dependencyTypes"}),"\n",(0,n.jsx)(i.ZP,{}),"\n",(0,n.jsx)(e.h3,{id:"label",children:"label"}),"\n",(0,n.jsx)(d.ZP,{}),"\n",(0,n.jsx)(e.h3,{id:"packages",children:"packages"}),"\n",(0,n.jsx)(l.ZP,{})]})}function j(o={}){const{wrapper:e}={...(0,r.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(x,{...o})}):x(o)}function f(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},1700:(o,e,t)=>{t.d(e,{ZP:()=>c});var n=t(5893),r=t(1151);function s(o){const e={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...o.components};return(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Property in package.json"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"dev"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#devDependencies",children:(0,n.jsx)(e.code,{children:"devDependencies"})})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"local"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#version",children:(0,n.jsx)(e.code,{children:"version"})})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"overrides"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides",children:(0,n.jsx)(e.code,{children:"overrides"})})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"peer"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerDependencies",children:(0,n.jsx)(e.code,{children:"peerDependencies"})})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"pnpmOverrides"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.a,{href:"https://pnpm.io/package_json#pnpmoverrides",children:(0,n.jsx)(e.code,{children:"pnpm.overrides"})})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"prod"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies",children:(0,n.jsx)(e.code,{children:"dependencies"})})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"resolutions"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#resolutions",children:(0,n.jsx)(e.code,{children:"resolutions"})})})]})]})]})}function c(o={}){const{wrapper:e}={...(0,r.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(s,{...o})}):s(o)}},9848:(o,e,t)=>{t.d(e,{ZP:()=>d});var n=t(5893),r=t(1151),s=t(9794),c=(t(9960),t(292),t(6217));const l={annotations:s.ds,Code:s.EK},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function i(o){const e={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...o.components};return l||a("CH",!1),l.Code||a("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n","\n",(0,n.jsx)("p",{children:"Ignore one or more dependencies so that syncpack does not inspect them."}),"\n",(0,n.jsx)(c.Hx,{level:o.level,children:"1. Add an ignored version group"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Match 2 specific ",(0,n.jsx)(e.strong,{children:"packages"})," in the repo."]}),"\n",(0,n.jsxs)(e.li,{children:["Match only the ",(0,n.jsx)(e.strong,{children:"peerDependencies"})," in those packages."]}),"\n",(0,n.jsxs)(e.li,{children:["Add a ",(0,n.jsx)(e.strong,{children:"label"})," to document the decision/expectation."]}),"\n"]}),"\n",(0,n.jsx)(l.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".syncpackrc"',focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"versionGroups",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"label",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"Nothing to see here, will fix soon",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"packages",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"oops-moment",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"workaround",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"dependencyTypes",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"peer",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'      "',props:{style:{color:"#8BE9FE"}}},{content:"isIgnored",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:"true",props:{style:{color:"#BD93F9"}}}]},{tokens:[{content:"    }",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  ]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"}",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,n.jsxs)(e.p,{children:["With this configuration in place, syncpack will now completely ignore every dependency listed under ",(0,n.jsx)(e.code,{children:"peerDependencies"})," in the two named packages ",(0,n.jsx)(e.code,{children:"oops-moment"})," and ",(0,n.jsx)(e.code,{children:"workaround"})," only."]})]})}function d(o={}){const{wrapper:e}={...(0,r.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(i,{...o})}):i(o)}function a(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},2369:(o,e,t)=>{t.d(e,{ZP:()=>d});var n=t(5893),r=t(1151),s=t(9794),c=t(7029);const l={annotations:s.ds,Code:s.EK},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function i(o){const e={a:"a",li:"li",ul:"ul",...(0,r.a)(),...o.components};return l||a("CH",!1),l.Code||a("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsx)(c.Z,{optional:!0}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"An array of names of dependencies you've installed or otherwise reference in your package.json files."}),"\n",(0,n.jsx)(e.li,{children:"If omitted, the default behaviour is to match every dependency."}),"\n",(0,n.jsxs)(e.li,{children:["The strings can be any combination of exact matches or ",(0,n.jsx)(e.a,{href:"https://github.com/isaacs/minimatch",children:"minimatch"})," glob patterns:"]}),"\n"]}),"\n",(0,n.jsx)(l.Code,{codeConfig:p,northPanel:{tabs:["of"],active:"of",heightRatio:1},files:[{name:"of",title:'"Examples',valid:!0,'values"':!0,focus:"",code:{lines:[{tokens:[{content:"// match any dependency",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"dependencies: [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"**",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"// match all dependencies with a certain scope",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"dependencies: [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"@aws-sdk/**",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"// match specific dependencies by name",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"dependencies: [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"react",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"react-dom",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"]",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,n.jsx)(l.Code,{codeConfig:p,northPanel:{tabs:["this"],active:"this",heightRatio:1},files:[{name:"this",title:'"Where',pattern:!0,is:!0,matched:!0,'against"':!0,focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"name",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"HERE",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"dependencies",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" { ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:"HERE",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"0.0.0",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:" },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"devDependencies",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" { ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:"HERE",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"0.0.0",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:" },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"overrides",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" { ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:"HERE",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"0.0.0",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:" },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"peerDependencies",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" { ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:"HERE",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"0.0.0",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:" },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"pnpm",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" { ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:"overrides",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" { ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:"HERE",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"0.0.0",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:" } },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"resolutions",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" { ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:"HERE",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"0.0.0",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:" }",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"}",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]})]})}function d(o={}){const{wrapper:e}={...(0,r.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(i,{...o})}):i(o)}function a(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},4684:(o,e,t)=>{t.d(e,{ZP:()=>a});var n=t(5893),r=t(1151),s=t(7029),c=t(1700),l=t(9960);function p(o){const e={admonition:"admonition",p:"p",...(0,r.a)(),...o.components};return(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)("p",{children:[(0,n.jsxs)(e.p,{children:["You can extend syncpack to inspect more parts of your package.json files by defining your own"," "]}),(0,n.jsx)(l.Z,{to:"/config/custom-types",children:(0,n.jsx)("code",{children:"customTypes"})}),(0,n.jsx)(e.p,{children:"."})]})})}function i(o={}){const{wrapper:e}={...(0,r.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(p,{...o})}):p(o)}function d(o){const e={code:"code",h4:"h4",li:"li",strong:"strong",ul:"ul",...(0,r.a)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{optional:!0}),"\n",(0,n.jsx)(i,{}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"When set, only dependencies present in the named locations will be assigned to this group."}),"\n",(0,n.jsx)(e.li,{children:"If omitted, the default behaviour is to match dependencies everywhere they are found."}),"\n",(0,n.jsxs)(e.li,{children:["Negated types are also supported, so a value of ",(0,n.jsx)(e.code,{children:'["!dev", "!prod"]'})," would assign everything ",(0,n.jsx)(e.strong,{children:"except"})," ",(0,n.jsx)(e.code,{children:"dependencies"})," and ",(0,n.jsx)(e.code,{children:"devDependencies"})," to this group."]}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"default-values",children:"Default values"}),"\n",(0,n.jsx)(c.ZP,{})]})}function a(o={}){const{wrapper:e}={...(0,r.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}},3133:(o,e,t)=>{t.d(e,{ZP:()=>l});var n=t(5893),r=t(1151),s=t(7029);function c(o){const e={li:"li",ul:"ul",...(0,r.a)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{optional:!0}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"A short name or description displayed as a header in syncpack's output."}),"\n",(0,n.jsx)(e.li,{children:'If a label is not set then eg. "Version Group 3" will be used instead.'}),"\n"]})]})}function l(o={}){const{wrapper:e}={...(0,r.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(c,{...o})}):c(o)}},4422:(o,e,t)=>{t.d(e,{ZP:()=>d});var n=t(5893),r=t(1151),s=t(9794),c=t(7029);const l={annotations:s.ds,Code:s.EK},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function i(o){const e={a:"a",code:"code",li:"li",ul:"ul",...(0,r.a)(),...o.components};return l||a("CH",!1),l.Code||a("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsx)(c.Z,{optional:!0}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["An array of strings which should match the ",(0,n.jsx)(e.code,{children:"name"})," properties of your package.json files."]}),"\n",(0,n.jsx)(e.li,{children:"If omitted, the default behaviour is to match every package."}),"\n",(0,n.jsxs)(e.li,{children:["The strings can be any combination of exact matches or ",(0,n.jsx)(e.a,{href:"https://github.com/isaacs/minimatch",children:"minimatch"})," glob patterns:"]}),"\n"]}),"\n",(0,n.jsx)(l.Code,{codeConfig:p,northPanel:{tabs:["of"],active:"of",heightRatio:1},files:[{name:"of",title:'"Examples',valid:!0,'values"':!0,focus:"",code:{lines:[{tokens:[{content:"// \u2705 match any package name",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"packages: [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"**",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"// \u2705 match any package name with this scope",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"packages: [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"@my-repo/**",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"// \u2705 match specific packages by name",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"packages: [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"my-server",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:", ",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"my-client",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"// \u274c not file system paths, name properties of package.json files",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"packages: [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"packages/my-client",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"]",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"// \u274c not file system globs, name properties of package.json files",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"packages: [",props:{style:{color:"#F8F8F2"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"packages/**",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"]",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,n.jsx)(l.Code,{codeConfig:p,northPanel:{tabs:["this"],active:"this",heightRatio:1},files:[{name:"this",title:'"Where',pattern:!0,is:!0,matched:!0,'against"':!0,focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"name",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"HERE",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:'  "',props:{style:{color:"#8BE9FE"}}},{content:"version",props:{style:{color:"#8BE9FD"}}},{content:'"',props:{style:{color:"#8BE9FE"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:'"',props:{style:{color:"#E9F284"}}},{content:"1.0.2",props:{style:{color:"#F1FA8C"}}},{content:'"',props:{style:{color:"#E9F284"}}}]},{tokens:[{content:"}",props:{style:{color:"#F8F8F2"}}}]}],lang:"json"},annotations:[]}]})]})}function d(o={}){const{wrapper:e}={...(0,r.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(i,{...o})}):i(o)}function a(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},6217:(o,e,t)=>{t.d(e,{Hx:()=>r});t(7294);var n=t(5893);function r(o){let{children:e,level:t}=o;return(0,n.jsx)(t,{children:e})}},7029:(o,e,t)=>{t.d(e,{Z:()=>s});t(7294);const n={pill:"pill_lx6J",gray:"gray_oDNb",red:"red_TkSj",yellow:"yellow_uZjQ",green:"green_VuIk",blue:"blue_niGL",indigo:"indigo_t1co",purple:"purple_wWQZ",pink:"pink_hjd3"};var r=t(5893);function s(o){let{required:e,optional:t}=o;return(0,r.jsxs)("p",{children:[e&&(0,r.jsx)("span",{className:`${n.pill} ${n.red}`,children:"Required"}),t&&(0,r.jsx)("span",{className:`${n.pill} ${n.gray}`,children:"Optional"})]})}},292:(o,e,t)=>{t.d(e,{K:()=>n});const n={"@types":"https://github.com/DefinitelyTyped/DefinitelyTyped",awsSdk:"https://aws.amazon.com/sdk-for-javascript/",dependencies:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies",devDependencies:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#devDependencies",engines:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines",packageManager:"https://nodejs.org/api/packages.html#packagemanager",version:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#version",workspaceProtocol:"https://pnpm.io/workspaces#workspace-protocol-workspace"}}}]);