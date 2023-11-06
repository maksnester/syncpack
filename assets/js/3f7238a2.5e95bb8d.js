"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9809],{6869:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>F});var n=e(5893),s=e(1151),r=e(9605);const c={id:"intellisense",title:"TypeScript Intellisense"},l=void 0,p={id:"integrations/intellisense",title:"TypeScript Intellisense",description:"",source:"@site/docs/integrations/intellisense.mdx",sourceDirName:"integrations",slug:"/integrations/intellisense",permalink:"/syncpack/integrations/intellisense",draft:!1,unlisted:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/main/site/docs/integrations/intellisense.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1699300201,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"intellisense",title:"TypeScript Intellisense"},sidebar:"docs",previous:{title:"Github Actions",permalink:"/syncpack/integrations/github-actions"},next:{title:"JSON Schema",permalink:"/syncpack/integrations/json-schema"}},i={},F=[];function a(o){return(0,n.jsx)(r.ZP,{})}function d(o={}){const{wrapper:t}={...(0,s.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(a,{...o})}):a()}},9605:(o,t,e)=>{e.d(t,{ZP:()=>F});var n=e(5893),s=e(1151),r=e(9794),c=e(9960);const l={annotations:r.ds,Code:r.EK},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function i(o){const t={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,s.a)(),...o.components};return l||a("CH",!1),l.Code||a("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,n.jsxs)(t.p,{children:["To enable validation and autocompletion for your ",(0,n.jsx)(c.Z,{to:"/config/syncpackrc",children:"configuration file"}),", you must use a JavaScript config file and annotate in keeping with the below example:"]}),"\n",(0,n.jsx)(l.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".syncpackrc.js"',focus:"",code:{lines:[{tokens:[{content:"// @ts-check",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"/** ",props:{style:{color:"#6272A4"}}},{content:"@type ",props:{style:{color:"#FF79C6"}}},{content:'{import("syncpack").RcFile}',props:{style:{color:"#8BE9FD",fontStyle:"italic"}}},{content:" */",props:{style:{color:"#6272A4"}}}]},{tokens:[{content:"const",props:{style:{color:"#FF79C6"}}},{content:" config ",props:{style:{color:"#F8F8F2"}}},{content:"=",props:{style:{color:"#FF79C6"}}},{content:" {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  versionGroups",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      dependencies",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"@types/node",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      packages",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"**",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      pinVersion",props:{style:{color:"#F8F8F2"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"14.18.36",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    {",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      dependencies",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"chalk",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      packages",props:{style:{color:"#F8F8F2"}}},{content:":",props:{style:{color:"#FF79C6"}}},{content:" [",props:{style:{color:"#F8F8F2"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"**",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"      pinVersion",props:{style:{color:"#F8F8F2"}}},{content:": ",props:{style:{color:"#FF79C6"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:"4.1.2",props:{style:{color:"#F1FA8C"}}},{content:"'",props:{style:{color:"#E9F284"}}},{content:",",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"    },",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"  ],",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"};",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"",props:{style:{color:"#F8F8F2"}}}]},{tokens:[{content:"module",props:{style:{color:"#8BE9FD",fontStyle:"italic"}}},{content:".",props:{style:{color:"#F8F8F2"}}},{content:"exports ",props:{style:{color:"#8BE9FD",fontStyle:"italic"}}},{content:"=",props:{style:{color:"#FF79C6"}}},{content:" config;",props:{style:{color:"#F8F8F2"}}}]}],lang:"js"},annotations:[]}]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Ensure that ",(0,n.jsx)(t.code,{children:'"javascript.validate.enable": false'})," is ",(0,n.jsx)(t.strong,{children:"not"})," set in ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com/docs/getstarted/settings",children:"VS Code"}),"."]})})]})}function F(o={}){const{wrapper:t}={...(0,s.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(i,{...o})}):i(o)}function a(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);