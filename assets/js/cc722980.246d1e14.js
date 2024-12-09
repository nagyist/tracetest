"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[4345],{7854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=n(74848),r=n(28453);const i={id:"required-attributes",title:"required-attributes",description:"Enforce required attributes by span type | The Tracetest Analyzer analyzes OpenTelemetry traces",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,d={id:"analyzer/rules/required-attributes",title:"required-attributes",description:"Enforce required attributes by span type | The Tracetest Analyzer analyzes OpenTelemetry traces",source:"@site/docs/analyzer/rules/required-attributes.mdx",sourceDirName:"analyzer/rules",slug:"/analyzer/rules/required-attributes",permalink:"/analyzer/rules/required-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/analyzer/rules/required-attributes.mdx",tags:[],version:"current",frontMatter:{id:"required-attributes",title:"required-attributes",description:"Enforce required attributes by span type | The Tracetest Analyzer analyzes OpenTelemetry traces",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"attribute-naming",permalink:"/analyzer/rules/attribute-naming"},next:{title:"no-empty-attributes",permalink:"/analyzer/rules/no-empty-attributes"}},l={},c=[{value:"Rule Details",id:"rule-details",level:2},{value:"HTTP spans:",id:"http-spans",level:3},{value:"Database spans:",id:"database-spans",level:3},{value:"RPC spans:",id:"rpc-spans",level:3},{value:"Messaging spans:",id:"messaging-spans",level:3},{value:"FaaS spans:",id:"faas-spans",level:3},{value:"Options",id:"options",level:2},{value:"When Not To Use It",id:"when-not-to-use-it",level:2}];function o(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Enforce required attributes by span type."}),"\n",(0,s.jsx)(t.h2,{id:"rule-details",children:"Rule Details"}),"\n",(0,s.jsx)(t.p,{children:"All instrumentations must populate the required attributes by span type based on the semantic conventions."}),"\n",(0,s.jsx)(t.p,{children:"The following OTel semantic conventions for span required attributes are defined:"}),"\n",(0,s.jsx)(t.h3,{id:"http-spans",children:"HTTP spans:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- http.method\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If span kind is ",(0,s.jsx)(t.code,{children:'"server"'}),", the required attributes include:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- http.target\n- http.scheme\n- net.host.name\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If span kind is ",(0,s.jsx)(t.code,{children:'"client"'}),", the required attributes include:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- http.url\n- net.peer.name\n"})}),"\n",(0,s.jsx)(t.h3,{id:"database-spans",children:"Database spans:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- db.system\n"})}),"\n",(0,s.jsx)(t.h3,{id:"rpc-spans",children:"RPC spans:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- rpc.system\n- neet.peer.name\n"})}),"\n",(0,s.jsx)(t.h3,{id:"messaging-spans",children:"Messaging spans:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- messaging.system\n- messaging.operation\n"})}),"\n",(0,s.jsx)(t.h3,{id:"faas-spans",children:"FaaS spans:"}),"\n",(0,s.jsxs)(t.p,{children:["If span kind is ",(0,s.jsx)(t.code,{children:'"server"'}),", the required attributes include:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- faas.trigger\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If span kind is ",(0,s.jsx)(t.code,{children:'"client"'}),", the required attributes include:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- faas.invoked_name\n- faas.invoked_provider\n"})}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.p,{children:"This rule has the following options:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"error"'})," requires span attributes to follow the OTel semantic convention"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"disabled"'})," disables the span required attributes verification"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"warning"'})," verifies required attributes to follow the OTel semantic convention but does not impact the analyzer score"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"when-not-to-use-it",children:"When Not To Use It"}),"\n",(0,s.jsx)(t.p,{children:"If you don\u2019t want to enforce OTel span required attributes, don\u2019t enable this rule."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);