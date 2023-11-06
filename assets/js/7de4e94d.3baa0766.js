"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7547],{6525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>g,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>F});var o=t(5893),r=t(1151),c=t(8984),i=t(6085),a=t(2474),d=t(7463),s=t(3107),h=t(2065),u=t(4086);const l={id:"set-semver-ranges",title:"set-semver-ranges"},g=void 0,p={id:"command/set-semver-ranges",title:"set-semver-ranges",description:'Ensure dependency versions used within "dependencies", "devDependencies" etc follow a consistent format.',source:"@site/docs/command/set-semver-ranges.mdx",sourceDirName:"command",slug:"/command/set-semver-ranges",permalink:"/syncpack/command/set-semver-ranges",draft:!1,unlisted:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/main/site/docs/command/set-semver-ranges.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1699300201,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"set-semver-ranges",title:"set-semver-ranges"},sidebar:"docs",previous:{title:"prompt",permalink:"/syncpack/command/prompt"},next:{title:"update",permalink:"/syncpack/command/update"}},m={},F=[{value:"CLI Options",id:"cli-options",level:2},{value:"source",id:"source",level:3},{value:"filter",id:"filter",level:3},{value:"config",id:"config",level:3},{value:"types",id:"types",level:3},{value:"indent",id:"indent",level:3},{value:"help",id:"help",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function b(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Ensure dependency versions used within ",(0,o.jsx)(n.code,{children:'"dependencies"'}),", ",(0,o.jsx)(n.code,{children:'"devDependencies"'})," etc follow a consistent format."]}),"\n",(0,o.jsx)(n.h2,{id:"cli-options",children:"CLI Options"}),"\n",(0,o.jsx)(n.h3,{id:"source",children:"source"}),"\n",(0,o.jsx)(s.ZP,{command:"set-semver-ranges"}),"\n",(0,o.jsx)(n.h3,{id:"filter",children:"filter"}),"\n",(0,o.jsx)(i.ZP,{command:"set-semver-ranges"}),"\n",(0,o.jsx)(n.h3,{id:"config",children:"config"}),"\n",(0,o.jsx)(c.ZP,{command:"set-semver-ranges"}),"\n",(0,o.jsx)(n.h3,{id:"types",children:"types"}),"\n",(0,o.jsx)(h.ZP,{command:"set-semver-ranges"}),"\n",(0,o.jsx)(n.h3,{id:"indent",children:"indent"}),"\n",(0,o.jsx)(d.ZP,{command:"set-semver-ranges"}),"\n",(0,o.jsx)(n.h3,{id:"help",children:"help"}),"\n",(0,o.jsx)(a.ZP,{command:"set-semver-ranges"}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(u.ZP,{command:"set-semver-ranges"})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},8984:(e,n,t)=>{t.d(n,{ZP:()=>u});var o=t(5893),r=t(1151),c=t(9794),i=t(9286),a=t(9960);const d={annotations:c.ds,Code:c.EK},s={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function h(e){const n={p:"p",...(0,r.a)(),...e.components};return d||l("CH",!1),d.Code||l("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,o.jsx)(d.Code,{codeConfig:s,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-c, --config <path>",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsxs)(n.p,{children:["Syncpack uses ",(0,o.jsx)(a.Z,{to:"https://github.com/cosmiconfig/cosmiconfig",children:"cosmiconfig"})," to discover your config file, but a custom location can be provided instead."]}),"\n",(0,o.jsx)(i.Z,{children:`syncpack ${e.command} --config ./config/.syncpackrc`})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6085:(e,n,t)=>{t.d(n,{ZP:()=>h});var o=t(5893),r=t(1151),c=t(9794),i=t(9286);const a={annotations:c.ds,Code:c.EK},d={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function s(e){const n={p:"p",...(0,r.a)(),...e.components};return a||u("CH",!1),a.Code||u("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,o.jsx)(a.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-f, --filter [pattern]",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Only run ",(0,o.jsxs)("code",{children:["syncpack ",e.command]})," on dependencies whose names match the given string, which will be passed to ",(0,o.jsx)("code",{children:"new RegExp()"}),"."]})}),"\n",(0,o.jsx)(i.Z,{language:"bash",children:`# only include react, react-dom, preact etc\nsyncpack ${e.command} --types 'react'\n# only include typescript or eslint packages\nsyncpack ${e.command} --types 'typescript|eslint'\n`.trim()})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2474:(e,n,t)=>{t.d(n,{ZP:()=>h});var o=t(5893),r=t(1151),c=t(9794),i=t(9286);t(9960);const a={annotations:c.ds,Code:c.EK},d={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function s(e){const n={p:"p",...(0,r.a)(),...e.components};return a||u("CH",!1),a.Code||u("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,o.jsx)(a.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-h, --help",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:"Display a list of CLI options and other help information."}),"\n",(0,o.jsx)(i.Z,{language:"bash",children:`syncpack ${e.command} --help\n`.trim()})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7463:(e,n,t)=>{t.d(n,{ZP:()=>u});var o=t(5893),r=t(1151),c=t(9794),i=t(9286),a=t(9960);const d={annotations:c.ds,Code:c.EK},s={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function h(e){const n={p:"p",...(0,r.a)(),...e.components};return d||l("CH",!1),d.Code||l("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,o.jsx)(d.Code,{codeConfig:s,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-i, --indent [value]",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsxs)(n.p,{children:["Override your ",(0,o.jsx)(a.Z,{to:"/config/indent",children:"indent"})," configuration, which is 2 spaces by default."]}),"\n",(0,o.jsx)(i.Z,{language:"bash",children:`# four spaces\nsyncpack ${e.command} --indent "    "\n# one tab\nsyncpack ${e.command} --indent '\t'\n# \\t is converted into a tab\nsyncpack ${e.command} --indent '\\t'\n`.trim()})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4086:(e,n,t)=>{t.d(n,{ZP:()=>a});var o=t(5893),r=t(1151),c=t(9286);function i(e){const n={p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Verbose logging can be enabled by prefixing syncpack with the following environment variable:"}),"\n",(0,o.jsx)(c.Z,{language:"bash",children:`SYNCPACK_VERBOSE=true syncpack ${e.command}`})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},3107:(e,n,t)=>{t.d(n,{ZP:()=>u});var o=t(5893),r=t(1151),c=t(9794),i=t(9286),a=t(9960);const d={annotations:c.ds,Code:c.EK},s={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function h(e){const n={admonition:"admonition",code:"code",p:"p",...(0,r.a)(),...e.components};return d||l("CH",!1),d.Code||l("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n","\n",(0,o.jsx)(d.Code,{codeConfig:s,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-s, --source [pattern]",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Override your ",(0,o.jsx)(a.Z,{to:"/config/source",children:"source"})," configuration to run ",(0,o.jsxs)("code",{children:["syncpack ",e.command]})," on only some package.json files."]})}),"\n",(0,o.jsx)(i.Z,{language:"bash",children:`# only the root package\nsyncpack ${e.command} --source 'package.json'\n# only packages matching a glob\nsyncpack ${e.command} --source 'packages/beta-*'\n# multiple values can be provided\nsyncpack ${e.command} --source 'package.json' --source 'packages/beta-*'\n`.trim()}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Add quotes around your ",(0,o.jsx)(n.code,{children:"--source"})," patterns so your shell does not interpret them before they're received by syncpack."]})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2065:(e,n,t)=>{t.d(n,{ZP:()=>u});var o=t(5893),r=t(1151),c=t(9794),i=t(9286),a=t(9960);const d={annotations:c.ds,Code:c.EK},s={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"dracula"};function h(e){const n={p:"p",...(0,r.a)(),...e.components};return d||l("CH",!1),d.Code||l("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dracula"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #F8F8F2;--ch-t-background: #282A36;--ch-t-lighter-inlineBackground: #282a36e6;--ch-t-editor-background: #282A36;--ch-t-editor-foreground: #F8F8F2;--ch-t-editor-rangeHighlightBackground: #BD93F915;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #44475A;--ch-t-focusBorder: #6272A4;--ch-t-tab-activeBackground: #282A36;--ch-t-tab-activeForeground: #F8F8F2;--ch-t-tab-inactiveBackground: #21222C;--ch-t-tab-inactiveForeground: #6272A4;--ch-t-tab-border: #191A21;--ch-t-tab-activeBorder: #282A36;--ch-t-editorGroup-border: #BD93F9;--ch-t-editorGroupHeader-tabsBackground: #191A21;--ch-t-editorLineNumber-foreground: #6272A4;--ch-t-input-background: #282A36;--ch-t-input-foreground: #F8F8F2;--ch-t-input-border: #191A21;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #21222C;--ch-t-sideBar-foreground: #F8F8F2;--ch-t-sideBar-border: #21222C;--ch-t-list-activeSelectionBackground: #44475A;--ch-t-list-activeSelectionForeground: #F8F8F2;--ch-t-list-hoverBackground: #44475A75; }'}}),"\n","\n","\n",(0,o.jsx)(d.Code,{codeConfig:s,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"-t, --types <names>",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Override your ",(0,o.jsx)(a.Z,{to:"/config/dependency-types",children:"dependencyTypes"})," configuration to run ",(0,o.jsxs)("code",{children:["syncpack ",e.command]})," on only eg. ",(0,o.jsx)("code",{children:"peerDependencies"})," in every package in your monorepo."]})}),"\n",(0,o.jsx)(i.Z,{language:"bash",children:`# only include peerDependencies\nsyncpack ${e.command} --types 'peer'\n# only include dependencies and devDependencies\nsyncpack ${e.command} --types 'prod,dev'\n# exclude local package.json versions\nsyncpack ${e.command} --types '!local'\n`.trim()})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);