"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1005],{67002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(74848),o=n(28453);const r={id:"dash0",title:"Dash0",description:"Use Dash0 as the trace data store for Tracetest. Configure the OpenTelemetry Collector to receive traces and forward them to both Tracetest and Dash0.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,c={id:"configuration/connecting-to-data-stores/dash0",title:"Dash0",description:"Use Dash0 as the trace data store for Tracetest. Configure the OpenTelemetry Collector to receive traces and forward them to both Tracetest and Dash0.",source:"@site/docs/configuration/connecting-to-data-stores/dash0.mdx",sourceDirName:"configuration/connecting-to-data-stores",slug:"/configuration/connecting-to-data-stores/dash0",permalink:"/configuration/connecting-to-data-stores/dash0",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/connecting-to-data-stores/dash0.mdx",tags:[],version:"current",frontMatter:{id:"dash0",title:"Dash0",description:"Use Dash0 as the trace data store for Tracetest. Configure the OpenTelemetry Collector to receive traces and forward them to both Tracetest and Dash0.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Azure App Insights",permalink:"/configuration/connecting-to-data-stores/azure-app-insights"},next:{title:"Datadog",permalink:"/configuration/connecting-to-data-stores/datadog"}},i={},d=[{value:"Configuring OpenTelemetry Collector to Send Traces to both Dash0 and Tracetest",id:"configuring-opentelemetry-collector-to-send-traces-to-both-dash0-and-tracetest",level:2},{value:"Configure Tracetest to Use Dash0 as a Trace Data Store",id:"configure-tracetest-to-use-dash0-as-a-trace-data-store",level:2},{value:"Connect Tracetest to Dash0 with the Web UI",id:"connect-tracetest-to-dash0-with-the-web-ui",level:2},{value:"Connect Tracetest to Dash0 with the CLI",id:"connect-tracetest-to-dash0-with-the-cli",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["If you want to use ",(0,s.jsx)(t.a,{href:"https://www.dash0.com/",children:"Dash0"})," as the trace data store, you'll configure the OpenTelemetry Collector to receive traces from your system and then send them to both Tracetest and Dash0. And, you don't have to change your existing pipelines to do so."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Examples of configuring Tracetest with Dash0 can be found in the ",(0,s.jsxs)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:[(0,s.jsx)(t.code,{children:"examples"})," folder of the Tracetest GitHub repo"]}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"configuring-opentelemetry-collector-to-send-traces-to-both-dash0-and-tracetest",children:"Configuring OpenTelemetry Collector to Send Traces to both Dash0 and Tracetest"}),"\n",(0,s.jsx)(t.p,{children:"In your OpenTelemetry Collector config file:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Set the ",(0,s.jsx)(t.code,{children:"exporter"})," to ",(0,s.jsx)(t.code,{children:"otlp/tracetest"})]}),"\n",(0,s.jsxs)(t.li,{children:["Set the ",(0,s.jsx)(t.code,{children:"endpoint"})," to your Tracetest instance on port ",(0,s.jsx)(t.code,{children:"4317"})]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["If you are running Tracetest with Docker, and Tracetest's service name is ",(0,s.jsx)(t.code,{children:"tracetest"}),", then the endpoint might look like this ",(0,s.jsx)(t.code,{children:"http://tracetest:4317"})]})}),"\n",(0,s.jsx)(t.p,{children:"Additionally, add another config:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Set the ",(0,s.jsx)(t.code,{children:"exporter"})," to ",(0,s.jsx)(t.code,{children:"otlp/dash0"})]}),"\n",(0,s.jsxs)(t.li,{children:["Set the ",(0,s.jsx)(t.code,{children:"endpoint"})," to your Dash0 incress like: ",(0,s.jsx)(t.code,{children:"ingress.eu-west-1.aws.dash0.com:4317"})]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'# collector.config.yaml\n\n# If you already have receivers declared, you can just ignore\n# this one and still use yours instead.\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  logging:\n    verbosity: detailed\n  # OTLP for Tracetest\n  otlp/tracetest:\n    endpoint: tracetest:4317 # Send traces to Tracetest. Read more in docs here:  https://docs.tracetest.io/configuration/connecting-to-data-stores/opentelemetry-collector\n    tls:\n      insecure: true\n  # OTLP for Dash0\n  otlp/dash0:\n    endpoint: ingress.eu-west-1.aws.dash0.com:4317\n    headers:\n      Authorization: "Auth Token" \nservice:\n  pipelines:\n    traces/tracetest: # Pipeline to send data to Tracetest\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [logging, otlp/tracetest]\n    traces/Dash0: # Pipeline to send data to Dash0\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [logging, otlp/dash0]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"configure-tracetest-to-use-dash0-as-a-trace-data-store",children:"Configure Tracetest to Use Dash0 as a Trace Data Store"}),"\n",(0,s.jsxs)(t.p,{children:["Configure your Tracetest instance to expose an ",(0,s.jsx)(t.code,{children:"otlp"})," endpoint to make it aware it will receive traces from the OpenTelemetry Collector. This will expose Tracetest's trace receiver on port ",(0,s.jsx)(t.code,{children:"4317"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"connect-tracetest-to-dash0-with-the-web-ui",children:"Connect Tracetest to Dash0 with the Web UI"}),"\n",(0,s.jsx)(t.p,{children:"In the Web UI, (1) open Settings, and, on the (2) Trace Ingestion tab, select (3) Dash0."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Trace Ingestion Settings",src:n(10752).A+"",width:"3326",height:"1808"})}),"\n",(0,s.jsx)(t.h2,{id:"connect-tracetest-to-dash0-with-the-cli",children:"Connect Tracetest to Dash0 with the CLI"}),"\n",(0,s.jsx)(t.p,{children:"Or, if you prefer using the CLI, you can use this file config."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"type: DataStore\nspec:\n  name: Dash0 pipeline\n  type: dash0\n  default: true\n"})}),"\n",(0,s.jsx)(t.p,{children:"Proceed to run this command in the terminal and specify the file above."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"tracetest apply datastore -f my/data-store/file/location.yaml\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},10752:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/app.tracetest.io_organizations_at4CxvjIg_environments_ttenv_172de56e3dcbba9b_settings_tab=dataStore_dynatrace-91f2e4967fc13fc24484715b45d9167f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);