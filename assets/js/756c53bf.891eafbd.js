"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[7918],{84137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(74848),r=n(28453);const s={id:"awsxray",title:"AWS X-Ray",description:"Use AWS X-Ray as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from any region.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},o=void 0,c={id:"configuration/connecting-to-data-stores/awsxray",title:"AWS X-Ray",description:"Use AWS X-Ray as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from any region.",source:"@site/docs/configuration/connecting-to-data-stores/awsxray.mdx",sourceDirName:"configuration/connecting-to-data-stores",slug:"/configuration/connecting-to-data-stores/awsxray",permalink:"/configuration/connecting-to-data-stores/awsxray",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/connecting-to-data-stores/awsxray.mdx",tags:[],version:"current",frontMatter:{id:"awsxray",title:"AWS X-Ray",description:"Use AWS X-Ray as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from any region.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"OTLP Ingestion Endpoint",permalink:"/configuration/connecting-to-data-stores/otlp-ingestion-endpoint"},next:{title:"Azure App Insights",permalink:"/configuration/connecting-to-data-stores/azure-app-insights"}},i={},d=[{value:"Configure Tracetest to Use X-Ray as a Trace Data Store",id:"configure-tracetest-to-use-x-ray-as-a-trace-data-store",level:2},{value:"Connect Tracetest to X-Ray with the Web UI",id:"connect-tracetest-to-x-ray-with-the-web-ui",level:2},{value:"Connect Tracetest to AWS X-Ray with the CLI",id:"connect-tracetest-to-aws-x-ray-with-the-cli",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["If you want to use ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/xray/",children:"AWS X-Ray"})," as the trace data store, you can use the native connection from Tracetest to pull telemetry data directly from any region."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Examples of configuring Tracetest with X-Ray can be found in the ",(0,a.jsxs)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:[(0,a.jsx)(t.code,{children:"examples"})," folder of the Tracetest GitHub repo"]}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"configure-tracetest-to-use-x-ray-as-a-trace-data-store",children:"Configure Tracetest to Use X-Ray as a Trace Data Store"}),"\n",(0,a.jsx)(t.p,{children:"Configure Tracetest to be aware that it has to fetch trace data from X-Ray."}),"\n",(0,a.jsxs)(t.p,{children:["Tracetest uses the Golang ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/sdk-for-go/",children:"AWS-SDK"})," library to pull to fetch trace data."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Need help configuring the OpenTelemetry Collector so send trace data from your application to AWS X-Ray? Read more in ",(0,a.jsx)(t.a,{href:"/configuration/opentelemetry-collector-configuration-file-reference",children:"the reference page here"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"connect-tracetest-to-x-ray-with-the-web-ui",children:"Connect Tracetest to X-Ray with the Web UI"}),"\n",(0,a.jsx)(t.p,{children:"In the Web UI, (1) open Settings, and, on the (2) Trace Ingestion tab, select (3) AWS X-Ray."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Trace Ingestion Settings",src:n(47646).A+"",width:"3326",height:"1808"})}),"\n",(0,a.jsx)(t.p,{children:"From the configuration page, add your AWS credentials."}),"\n",(0,a.jsx)(t.p,{children:"You can use temporary credentials by running:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"aws sts get-session-token\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Lastly, you can ensure the connection is working as expected by pressing the ",(0,a.jsx)(t.code,{children:"Test Connection"})," button."]}),"\n",(0,a.jsx)(t.h2,{id:"connect-tracetest-to-aws-x-ray-with-the-cli",children:"Connect Tracetest to AWS X-Ray with the CLI"}),"\n",(0,a.jsx)(t.p,{children:"Or, if you prefer using the CLI, you can use this file config."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'type: DataStore\nspec:\n  name: AWS X-Ray\n  type: awsxray\n  default: true\n  awsxray:\n    accessKeyId: <your-accessKeyId>\n    secretAccessKey: <your-secretAccessKey>\n    sessionToken: <your-session-token>\n    region: "us-west-2"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Run this command in the terminal and specify the file above."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"tracetest apply datastore -f my/data-store/file/location.yaml\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["To learn more, ",(0,a.jsx)(t.a,{href:"/examples-tutorials/recipes/running-tracetest-with-aws-x-ray",children:"read the recipe on running a sample app with AWS X-Ray and Tracetest"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},47646:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/app.tracetest.io_organizations_at4CxvjIg_environments_ttenv_172de56e3dcbba9b_settings_tab=dataStore_aws-3a85d6cc4b9b6d10788bd7c1c9c1cbb6.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var a=n(96540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);