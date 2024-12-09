"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[8259],{37558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(74848),n=r(28453);const o={id:"jaeger",title:"Jaeger",description:"Use Jaeger as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from Jaeger.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,i={id:"configuration/connecting-to-data-stores/jaeger",title:"Jaeger",description:"Use Jaeger as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from Jaeger.",source:"@site/docs/configuration/connecting-to-data-stores/jaeger.mdx",sourceDirName:"configuration/connecting-to-data-stores",slug:"/configuration/connecting-to-data-stores/jaeger",permalink:"/configuration/connecting-to-data-stores/jaeger",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/connecting-to-data-stores/jaeger.mdx",tags:[],version:"current",frontMatter:{id:"jaeger",title:"Jaeger",description:"Use Jaeger as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from Jaeger.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Instana",permalink:"/configuration/connecting-to-data-stores/instana"},next:{title:"Lightstep",permalink:"/configuration/connecting-to-data-stores/lightstep"}},c={},d=[{value:"Configure Tracetest to Use Jaeger as a Trace Data Store",id:"configure-tracetest-to-use-jaeger-as-a-trace-data-store",level:2},{value:"Connect Tracetest to Jaeger with the Web UI",id:"connect-tracetest-to-jaeger-with-the-web-ui",level:2},{value:"Connect Tracetest to Jaeger with the CLI",id:"connect-tracetest-to-jaeger-with-the-cli",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Tracetest fetches traces from ",(0,a.jsx)(t.a,{href:"https://www.jaegertracing.io/docs/1.42/deployment/#query-service--ui",children:"Jaeger's gRPC Protobuf/gRPC QueryService"})," on port ",(0,a.jsx)(t.code,{children:"16685"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Examples of configuring Tracetest can be found in the ",(0,a.jsxs)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:[(0,a.jsx)(t.code,{children:"examples"})," folder of the Tracetest GitHub repo"]}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"configure-tracetest-to-use-jaeger-as-a-trace-data-store",children:"Configure Tracetest to Use Jaeger as a Trace Data Store"}),"\n",(0,a.jsx)(t.p,{children:"Configure Tracetest to be aware that it has to fetch trace data from Jaeger."}),"\n",(0,a.jsxs)(t.p,{children:["Tracetest uses ",(0,a.jsx)(t.a,{href:"https://www.jaegertracing.io/docs/1.42/deployment/#query-service--ui",children:"Jaeger's gRPC Protobuf/gRPC QueryService"})," on port ",(0,a.jsx)(t.code,{children:"16685"})," to fetch trace data."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Need help configuring the OpenTelemetry Collector so send trace data from your application to Jaeger? Read more in ",(0,a.jsx)(t.a,{href:"/configuration/opentelemetry-collector-configuration-file-reference",children:"the reference page here"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"connect-tracetest-to-jaeger-with-the-web-ui",children:"Connect Tracetest to Jaeger with the Web UI"}),"\n",(0,a.jsxs)(t.p,{children:["In the Web UI, (1) open Settings, and, on the (2) Trace Ingestion tab, (3) select Jaeger. If you are using Docker like in the screenshot below, use the service name as the hostname with port ",(0,a.jsx)(t.code,{children:"16685"})," like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"jaeger:16685\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Trace Ingestion Settings",src:r(91227).A+"",width:"3326",height:"1808"})}),"\n",(0,a.jsx)(t.h2,{id:"connect-tracetest-to-jaeger-with-the-cli",children:"Connect Tracetest to Jaeger with the CLI"}),"\n",(0,a.jsx)(t.p,{children:"Or, if you prefer using the CLI, you can use this file config."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"type: DataStore\nspec:\n  name: jaeger\n  type: jaeger\n  default: true\n  jaeger:\n    endpoint: jaeger:16685\n    tls:\n      insecure: true\n"})}),"\n",(0,a.jsx)(t.p,{children:"Proceed to run this command in the terminal, and specify the file above."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"tracetest apply datastore -f my/data-store/file/location.yaml\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["To learn more, ",(0,a.jsx)(t.a,{href:"/examples-tutorials/recipes/running-tracetest-with-jaeger",children:"read the recipe on running a sample app with Jaeger and Tracetest"}),"."]})})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},91227:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/app.tracetest.io_organizations_at4CxvjIg_environments_ttenv_172de56e3dcbba9b_settings_tab=dataStore_jaeger-7701dddd4cadb9d5a726805bf35eabd2.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var a=r(96540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);