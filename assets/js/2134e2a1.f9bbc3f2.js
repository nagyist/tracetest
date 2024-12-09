"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[3082],{93997:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var s=i(74848),r=i(28453);const n={id:"triggers",title:"Triggers",description:"Tracetest uses the concept of Tests to define how to trigger a test against your application, define assertions against its trace data, and automate its execution. Every time a Test is triggered it will create a Run.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,c={id:"concepts/triggers",title:"Triggers",description:"Tracetest uses the concept of Tests to define how to trigger a test against your application, define assertions against its trace data, and automate its execution. Every time a Test is triggered it will create a Run.",source:"@site/docs/concepts/triggers.mdx",sourceDirName:"concepts",slug:"/concepts/triggers",permalink:"/concepts/triggers",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/concepts/triggers.mdx",tags:[],version:"current",frontMatter:{id:"triggers",title:"Triggers",description:"Tracetest uses the concept of Tests to define how to trigger a test against your application, define assertions against its trace data, and automate its execution. Every time a Test is triggered it will create a Run.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Environment Tokens",permalink:"/concepts/environment-tokens"},next:{title:"Tests",permalink:"/concepts/tests"}},l={},o=[{value:"Native Triggers",id:"native-triggers",level:2},{value:"Web UI",id:"web-ui",level:3},{value:"CLI",id:"cli",level:3},{value:"Integrations",id:"integrations",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Tracetest uses the concept of Triggers to define how to initiate a test run."}),"\n",(0,s.jsx)(t.h2,{id:"native-triggers",children:"Native Triggers"}),"\n",(0,s.jsx)(t.p,{children:"Triggers define how Tracetest interacts with your application."}),"\n",(0,s.jsx)(t.h3,{id:"web-ui",children:"Web UI"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-http",children:"HTTP Request - Create a basic HTTP request."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-gRPC",children:"GRPC Request - Test and debug your GRPC request."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-kafka",children:"Kafka - Test consumers with Kafka messages."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-playwright-engine",children:"Playwright Engine - Run Playwright tests natively in Tracetest."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-graphql",children:"GraphQL - Test and debug your GraphQL request."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-traceid",children:"TraceID - Define your test via a TraceID."})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1728388264/docs/Screenshot_2024-10-08_at_13.50.45_ng1lfg.png",alt:"webui triggers"})}),"\n",(0,s.jsx)(t.h3,{id:"cli",children:"CLI"}),"\n",(0,s.jsxs)(t.p,{children:["The attribute ",(0,s.jsx)(t.code,{children:"type"})," defines which trigger method you are going to use to interact with your application."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"trigger:\n  type: http|grpc|kafka|traceid|cypress|playwright|k6|artillery\n...\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/cli/creating-tests-http",children:"HTTP Request - Create a basic HTTP request."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/cli/creating-tests-grpc",children:"GRPC Request - Test and debug your GRPC request."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/cli/creating-tests-kafka",children:"Kafka - Test consumers with Kafka messages."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/cli/creating-tests-playwright-engine",children:"Playwright Engine - Run Playwright tests natively in Tracetest."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/cli/creating-tests-graphql",children:"GraphQL - Test and debug your GraphQL request."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/cli/creating-tests-traceid",children:"TraceID - Define your test via a TraceID."})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"integrations",children:"Integrations"}),"\n",(0,s.jsx)(t.p,{children:"Initiate test runs from triggers outside of Tracetest."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-cypress",children:"Cypress"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-playwright",children:"Playwright"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-k6",children:"k6"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/web-ui/creating-tests-artillery",children:"Artillery"})}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>c});var s=i(96540);const r={},n=s.createContext(r);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);