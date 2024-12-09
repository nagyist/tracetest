"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[5743],{12761:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(74848),n=t(28453);const o={id:"upgrade",title:"Upgrade Tracetest Version",description:"This page explains how to upgrade the version of your Tracetest Core Server and CLI if their version are incompatible.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,i={id:"core/configuration/upgrade",title:"Upgrade Tracetest Version",description:"This page explains how to upgrade the version of your Tracetest Core Server and CLI if their version are incompatible.",source:"@site/docs/core/configuration/upgrade.mdx",sourceDirName:"core/configuration",slug:"/core/configuration/upgrade",permalink:"/core/configuration/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/core/configuration/upgrade.mdx",tags:[],version:"current",frontMatter:{id:"upgrade",title:"Upgrade Tracetest Version",description:"This page explains how to upgrade the version of your Tracetest Core Server and CLI if their version are incompatible.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Telemetry",permalink:"/core/configuration/telemetry"}},c={},d=[{value:"Upgrade Tracetest CLI Version",id:"upgrade-tracetest-cli-version",level:2},{value:"Linux/MacOS",id:"linuxmacos",level:3},{value:"Homebrew",id:"homebrew",level:3},{value:"APT",id:"apt",level:3},{value:"YUM",id:"yum",level:3},{value:"Windows",id:"windows",level:3},{value:"Upgrade Tracetest Server Version",id:"upgrade-tracetest-server-version",level:2}];function l(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"This page explains how to upgrade the version of your Tracetest Server and CLI."}),"\n",(0,s.jsx)(r.p,{children:"If you've ever seen this error, you've come to the right page:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"\u2716\ufe0f Error: Version Mismatch\nThe CLI version and the server version are not compatible. To fix this, you'll need to make sure that both your CLI and server are using compatible versions.\nWe recommend upgrading both of them to the latest available version. Check out our documentation https://docs.tracetest.io/configuration/upgrade for simple instructions on how to upgrade.\nThank you for using Tracetest! We apologize for any inconvenience caused.\n"})}),"\n",(0,s.jsx)(r.p,{children:"This means your Tracetest CLI and Server versions must be the same."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"tracetest version\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",metastring:'title="Expected output"',children:"CLI: v0.11.9\nServer: v0.11.9\n\u2714\ufe0f Version match\n"})}),"\n",(0,s.jsx)(r.h2,{id:"upgrade-tracetest-cli-version",children:"Upgrade Tracetest CLI Version"}),"\n",(0,s.jsx)(r.h3,{id:"linuxmacos",children:"Linux/MacOS"}),"\n",(0,s.jsx)(r.p,{children:"Run the Tracetest CLI install script to upgrade to the latest version of the CLI:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"curl -L https://raw.githubusercontent.com/kubeshop/tracetest/main/install-cli.sh | bash\n"})}),"\n",(0,s.jsx)(r.h3,{id:"homebrew",children:"Homebrew"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"brew upgrade\nbrew update\nbrew install kubeshop/tracetest/tracetest\n"})}),"\n",(0,s.jsx)(r.h3,{id:"apt",children:"APT"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"sudo apt-get update\nsudo apt-get install tracetest\n"})}),"\n",(0,s.jsx)(r.h3,{id:"yum",children:"YUM"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"sudo yum update\nsudo yum install tracetest --refresh\n"})}),"\n",(0,s.jsx)(r.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"choco source add --name=kubeshop_repo --source=https://chocolatey.kubeshop.io/chocolatey ; choco upgrade tracetest\n"})}),"\n",(0,s.jsx)(r.h2,{id:"upgrade-tracetest-server-version",children:"Upgrade Tracetest Server Version"}),"\n",(0,s.jsx)(r.p,{children:"Make sure to match the CLI version you have installed to the Server version."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"kubeshop/tracetest:vX.X.X\n"})}),"\n",(0,s.jsxs)(r.p,{children:["If you are using version ",(0,s.jsx)(r.code,{children:"v0.11.9"})," of the CLI, make sure to use the same version of the server."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"image: kubeshop/tracetest:v0.11.9\n"})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var s=t(96540);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);