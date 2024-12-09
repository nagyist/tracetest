"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1342],{16550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(74848),a=n(28453);const r={id:"docker",title:"Install with Docker",description:"Installation and deployment instructions for using Docker to deploy a Tracetest Agent and use the Cloud-based managed Tracetest Control Plane / Dashboard.",hide_table_of_contents:!0,keywords:["tracetest","tracetest cli install","tracetest cloud install","tracetest agent install","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,o={id:"install/docker",title:"Install with Docker",description:"Installation and deployment instructions for using Docker to deploy a Tracetest Agent and use the Cloud-based managed Tracetest Control Plane / Dashboard.",source:"@site/docs/install/docker.mdx",sourceDirName:"install",slug:"/install/docker",permalink:"/install/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/install/docker.mdx",tags:[],version:"current",frontMatter:{id:"docker",title:"Install with Docker",description:"Installation and deployment instructions for using Docker to deploy a Tracetest Agent and use the Cloud-based managed Tracetest Control Plane / Dashboard.",hide_table_of_contents:!0,keywords:["tracetest","tracetest cli install","tracetest cloud install","tracetest agent install","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Install with CLI",permalink:"/install/cli"},next:{title:"Install with Kubernetes",permalink:"/install/kubernetes"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the Tracetest Agent with Docker",id:"install-the-tracetest-agent-with-docker",level:2},{value:"Install the Tracetest Agent with Docker Compose",id:"install-the-tracetest-agent-with-docker-compose",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This guide explains how to install a Tracetest Agent in your Docker (and Docker Compose) environment. This deployment uses the Cloud-based managed Tracetest Control Plane and Dashboard."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Install ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," and ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://app.tracetest.io/",children:"Sign in to Tracetest"})," and retrieve your ",(0,s.jsx)(t.a,{href:"https://app.tracetest.io/retrieve-token",children:"Tracetest Organization API Key/Token and Environment ID"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"install-the-tracetest-agent-with-docker",children:"Install the Tracetest Agent with Docker"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/concepts/agent",children:"Tracetest Agent"})," runs as a Docker container."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:'docker run\n  -p 4317:4317\n  -p 4318:4318\n  -e TRACETEST_API_KEY="<TRACETEST_API_KEY>"\n  -e TRACETEST_ENVIRONMENT_ID="<TRACETEST_ENVIRONMENT_ID>"\n  kubeshop/tracetest-agent\n'})}),"\n",(0,s.jsx)(t.h2,{id:"install-the-tracetest-agent-with-docker-compose",children:"Install the Tracetest Agent with Docker Compose"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/concepts/agent",children:"Tracetest Agent"})," runs as a Docker Compose service."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:"tracetest-agent:\n  image: kubeshop/tracetest-agent\n  environment:\n    - TRACETEST_API_KEY=<TRACETEST_API_KEY>\n    - TRACETEST_ENVIRONMENT_ID=<TRACETEST_ENVIRONMENT_ID>\n  ports:\n    - 4317:4317\n    - 4318:4318\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The Tracetest Agent is running in a Docker network and can run tests and ingest traces. It exposes OTLP ports ",(0,s.jsx)(t.code,{children:"4317"})," (gRPC) and ",(0,s.jsx)(t.code,{children:"4318"})," (HTTP) for trace ingestion."]}),"\n",(0,s.jsx)(t.p,{children:"To ingest traces in this example with Tracetest Agent use these URLs:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["gRPC: ",(0,s.jsx)(t.code,{children:"http://tracetest-agent:4317"})]}),"\n",(0,s.jsxs)(t.li,{children:["HTTP: ",(0,s.jsx)(t.code,{children:"http://tracetest-agent:4318/v1/traces"})]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Docker Network",type:"note",children:[(0,s.jsxs)(t.p,{children:["Running a test against ",(0,s.jsx)(t.code,{children:"localhost"})," will resolve as ",(0,s.jsx)(t.code,{children:"127.0.0.1"})," inside the Tracetest Agent container. Add Tracetest Agent to the same network and use service name mapping. ",(0,s.jsxs)(t.em,{children:["Example: Instead of running an app on ",(0,s.jsx)(t.code,{children:"localhost:8080"}),", add it to your Docker Compose file, connect it to the same network as your Tracetest Agent service, and use ",(0,s.jsx)(t.code,{children:"<service-name>:8080"})," in the URL field when creating a test."]})]}),(0,s.jsxs)(t.p,{children:["To run tests against apps running on your local machine, ",(0,s.jsx)(t.a,{href:"/install/cli",children:"view this guide"}),"."]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);