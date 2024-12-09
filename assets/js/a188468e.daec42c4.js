"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1842],{10909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(74848),o=t(28453);const r={id:"overview",title:"Trace Ingestion",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to connect tracing backends.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,a={id:"configuration/connecting-to-data-stores/overview",title:"Trace Ingestion",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to connect tracing backends.",source:"@site/docs/configuration/connecting-to-data-stores/overview.mdx",sourceDirName:"configuration/connecting-to-data-stores",slug:"/configuration/connecting-to-data-stores/overview",permalink:"/configuration/connecting-to-data-stores/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/connecting-to-data-stores/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"Trace Ingestion",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to connect tracing backends.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Configuring the Tracetest Cloud Agent (Public Access)",permalink:"/configuration/cloud-agent"},next:{title:"OTLP Ingestion Endpoint",permalink:"/configuration/connecting-to-data-stores/otlp-ingestion-endpoint"}},c={},l=[{value:"OTLP Ingest Endpoint",id:"otlp-ingest-endpoint",level:2},{value:"Supported OTLP Ingest Tracing Backends",id:"supported-otlp-ingest-tracing-backends",level:3},{value:"Native Connection (Polling)",id:"native-connection-polling",level:2},{value:"Supported Native Tracing Backends",id:"supported-native-tracing-backends",level:3},{value:"Tracing Backend Configuration Examples",id:"tracing-backend-configuration-examples",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Tracetest allows you to connect your Tracing Backend to unlock the full potential of trace-based testing. Tracetest supports two types of tracing backend integrations."}),"\n",(0,i.jsx)(n.h2,{id:"otlp-ingest-endpoint",children:"OTLP Ingest Endpoint"}),"\n",(0,i.jsx)(n.p,{children:"When not using a tracing backend, the OpenTelemetry Collector, or using a tracing backend integration that does not support a native connection, you'll use the Tracetest OTLP ingest endpoint."}),"\n",(0,i.jsx)(n.p,{children:"Configure Tracetest Agent:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/configuration/agent",children:"Tracetest Agent"})," exposes an OTLP endpoint that listens for trace data on ports ",(0,i.jsx)(n.code,{children:"4317"})," (gRPC) and ",(0,i.jsx)(n.code,{children:"4318"})," (HTTP)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/configuration/cloud-agent",children:"Tracetest Cloud Agent"})," exposes an OTLP endpoint that listens for trace data on TLS port ",(0,i.jsx)(n.code,{children:"443"})," (both HTTP and gRPC)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configure trace ingestion:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/otlp-ingestion-endpoint",children:"OTLP Ingestion Endpoint"})," is used to ingest OpenTelemetry traces."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"supported-otlp-ingest-tracing-backends",children:"Supported OTLP Ingest Tracing Backends"}),"\n",(0,i.jsx)(n.p,{children:"Currently, Tracetest integrates with the following OTLP tracing backends. Click on the respective tracing backend to view configuration examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/opentelemetry-collector",children:"OpenTelemetry Collector"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/azure-app-insights",children:"Azure App Insights"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/dash0",children:"Dash0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/datadog",children:"Datadog"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/dynatrace",children:"Dynatrace"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/instana",children:"Instana"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/lightstep",children:"Lightstep"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/new-relic",children:"New Relic"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/signoz",children:"SigNoz"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"native-connection-polling",children:"Native Connection (Polling)"}),"\n",(0,i.jsx)(n.p,{children:"When using a tracing backend integration that supports the native connection, Tracetest will pull telemetry data directly from your tracing backend for every test run."}),"\n",(0,i.jsx)(n.h3,{id:"supported-native-tracing-backends",children:"Supported Native Tracing Backends"}),"\n",(0,i.jsx)(n.p,{children:"Currently, Tracetest supports the following tracing backends. Click on the respective tracing backend to view configuration examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/awsxray",children:"AWS X-Ray"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/azure-app-insights",children:"Azure App Insights"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/elasticapm",children:"Elastic APM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/tempo",children:"Grafana Tempo"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/jaeger",children:"Jaeger"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/opensearch",children:"OpenSearch"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/signalfx",children:"SignalFX"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/configuration/connecting-to-data-stores/sumologic",children:"Sumo Logic"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tracing-backend-configuration-examples",children:"Tracing Backend Configuration Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["View the ",(0,i.jsxs)(n.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:[(0,i.jsx)(n.code,{children:"examples"})," folder of the Tracetest GitHub repo"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"/examples-tutorials/recipes",children:(0,i.jsx)(n.strong,{children:"Recipes"})})," for guided walkthroughs of sample use cases."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We will be adding new data stores over the next couple of months - ",(0,i.jsx)(n.a,{href:"https://github.com/kubeshop/tracetest/issues/new/choose",children:"let us know"})," any additional data stores you would like to see us support."]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);