"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7846],{3905:(e,n,r)=>{r.d(n,{Zo:()=>i,kt:()=>g});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},i=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(g,s(s({ref:n},i),{},{components:r})):t.createElement(g,s({ref:n},i))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7029:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(7294);const a={pill:"pill_lx6J",gray:"gray_oDNb",red:"red_TkSj",yellow:"yellow_uZjQ",green:"green_VuIk",blue:"blue_niGL",indigo:"indigo_t1co",purple:"purple_wWQZ",pink:"pink_hjd3"};function o(e){let{required:n,optional:r}=e;return t.createElement("p",null,n&&t.createElement("span",{className:`${a.pill} ${a.red}`},"Required"),r&&t.createElement("span",{className:`${a.pill} ${a.gray}`},"Optional"))}},6905:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var t=r(7462),a=(r(7294),r(3905)),o=r(7029);const s={id:"semver-groups",title:"semverGroups"},p="semverGroups object[]",l={unversionedId:"config/semver-groups",id:"config/semver-groups",title:"semverGroups",description:"Allow some packages to have different semver range rules to the rest of your monorepo. Each",source:"@site/docs/config/semver-groups.mdx",sourceDirName:"config",slug:"/config/semver-groups",permalink:"/syncpack/config/semver-groups",draft:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/master/site/docs/config/semver-groups.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1688334552,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"semver-groups",title:"semverGroups"},sidebar:"docs",previous:{title:"indent",permalink:"/syncpack/config/indent"},next:{title:"Ignored",permalink:"/syncpack/config/semver-groups/ignored"}},c={},i=[{value:"Example use cases",id:"example-use-cases",level:2}],u={toc:i},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semvergroups-object"},(0,a.kt)("inlineCode",{parentName:"h1"},"semverGroups")," object[]"),(0,a.kt)(o.Z,{optional:!0,mdxType:"Pills"}),(0,a.kt)("p",null,"Allow some packages to have different semver range rules to the rest of your monorepo. Each\ndependency can only belong to one semver group, the first rule which matches a given dependency and\npackage will apply."),(0,a.kt)("p",null,"There are 2 types of version groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/syncpack/config/semver-groups/ignored"},"Ignored")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/syncpack/config/semver-groups/standard"},"Standard"))),(0,a.kt)("h2",{id:"example-use-cases"},"Example use cases"),(0,a.kt)("p",null,"1: Every dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"@myrepo/library")," should have a semver range of ",(0,a.kt)("inlineCode",{parentName:"p"},"~"),", regardless of what the\nrest of the monorepo uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".syncpackrc"',title:'".syncpackrc"'},'{\n  "semverGroups": [\n    {\n      "range": "~",\n      "dependencies": ["**"],\n      "packages": ["@myrepo/library"]\n    }\n  ]\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Syncpack config files also support\n",(0,a.kt)("a",{parentName:"p",href:"https://jamiemason.github.io/syncpack/config-file#typescript-intellisense"},"TypeScript IntelliSense"),".")),(0,a.kt)("p",null,"2: Every dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"@myrepo/library")," whose name matches ",(0,a.kt)("inlineCode",{parentName:"p"},"@alpha/**")," should have a semver range\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"^"),", regardless of what the rest of that package or the rest of the monorepo uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".syncpackrc"',title:'".syncpackrc"'},'{\n  "semverGroups": [\n    {\n      "range": "^",\n      "dependencies": ["@alpha/**"],\n      "packages": ["@myrepo/library"]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"3: Every dependency in the monorepo whose name matches ",(0,a.kt)("inlineCode",{parentName:"p"},"@alpha/**")," should have a semver range of\n",(0,a.kt)("inlineCode",{parentName:"p"},"~"),", regardless of what the rest of the monorepo uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".syncpackrc"',title:'".syncpackrc"'},'{\n  "semverGroups": [\n    {\n      "range": "~",\n      "dependencies": ["@alpha/**"],\n      "packages": ["**"]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"4: Production dependencies should have fixed version numbers, but development and peer dependencies\ncan be broader."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".syncpackrc"',title:'".syncpackrc"'},'{\n  "semverGroups": [\n    {\n      "range": "",\n      "dependencyTypes": ["prod", "resolutions", "overrides", "pnpmOverrides", "workspace"],\n      "dependencies": ["**"],\n      "packages": ["**"]\n    },\n    {\n      "range": "~",\n      "dependencyTypes": ["dev"],\n      "dependencies": ["**"],\n      "packages": ["**"]\n    },\n    {\n      "range": "^",\n      "dependencyTypes": ["peer"],\n      "dependencies": ["**"],\n      "packages": ["**"]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);