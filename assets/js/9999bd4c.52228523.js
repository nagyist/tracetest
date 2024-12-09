"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[2162],{42988:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var c=o(74848),n=o(28453);const s={id:"sumologic",title:"Sumo Logic",description:"Use Sumo Logic as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from Sumo Logic.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,r={id:"configuration/connecting-to-data-stores/sumologic",title:"Sumo Logic",description:"Use Sumo Logic as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from Sumo Logic.",source:"@site/docs/configuration/connecting-to-data-stores/sumologic.mdx",sourceDirName:"configuration/connecting-to-data-stores",slug:"/configuration/connecting-to-data-stores/sumologic",permalink:"/configuration/connecting-to-data-stores/sumologic",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/connecting-to-data-stores/sumologic.mdx",tags:[],version:"current",frontMatter:{id:"sumologic",title:"Sumo Logic",description:"Use Sumo Logic as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from Sumo Logic.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"SigNoz",permalink:"/configuration/connecting-to-data-stores/signoz"},next:{title:"OpenTelemetry Collector Configuration File Reference",permalink:"/configuration/opentelemetry-collector-configuration-file-reference"}},a={},u=[{value:"Configure Tracetest to Use Sumo Logic as a Trace Data Store",id:"configure-tracetest-to-use-sumo-logic-as-a-trace-data-store",level:2},{value:"Connect Tracetest to Sumo Logic with the Web UI",id:"connect-tracetest-to-sumo-logic-with-the-web-ui",level:2},{value:"Connect Tracetest to Sumo Logic with the CLI",id:"connect-tracetest-to-sumo-logic-with-the-cli",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:["Tracetest fetches traces from ",(0,c.jsx)(t.a,{href:"https://help.sumologic.com/docs/api/tracing/",children:"Sumo Logic's API"}),"."]}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsxs)(t.p,{children:["Examples of configuring Tracetest can be found in the ",(0,c.jsxs)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:[(0,c.jsx)(t.code,{children:"examples"})," folder of the Tracetest GitHub repo"]}),"."]})}),"\n",(0,c.jsx)(t.h2,{id:"configure-tracetest-to-use-sumo-logic-as-a-trace-data-store",children:"Configure Tracetest to Use Sumo Logic as a Trace Data Store"}),"\n",(0,c.jsx)(t.p,{children:"Configure Tracetest to fetch trace data from Sumo Logic."}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsxs)(t.p,{children:["Tracetest uses Sumo Logic's ",(0,c.jsx)(t.strong,{children:"API"})," ",(0,c.jsx)(t.code,{children:"https://api.sumologic.com/api/"})," to fetch trace data. Your Sumo Logic URL will differ based on which region you are using. ",(0,c.jsx)(t.a,{href:"https://help.sumologic.com/docs/api/getting-started/#which-endpoint-should-i-should-use",children:"Here's a guide which Sumo Logic API endpoint to use"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsxs)(t.p,{children:["You need to know which ",(0,c.jsx)(t.strong,{children:"Access ID"}),", ",(0,c.jsx)(t.strong,{children:"Access Key"})," you are using. ",(0,c.jsx)(t.a,{href:"https://help.sumologic.com/docs/manage/security/access-keys/#create-your-access-key",children:"Create your ID and Key under Administration > Security > Access Keys in your Sumo Logic account"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsxs)(t.p,{children:["Need help configuring the OpenTelemetry Collector so send trace data from your application to Sumo Logic? Read more in ",(0,c.jsx)(t.a,{href:"/configuration/opentelemetry-collector-configuration-file-reference",children:"the reference page here"}),"."]})}),"\n",(0,c.jsx)(t.h2,{id:"connect-tracetest-to-sumo-logic-with-the-web-ui",children:"Connect Tracetest to Sumo Logic with the Web UI"}),"\n",(0,c.jsxs)(t.p,{children:["In the Web UI, (1) open Settings and, on the (2) Trace Ingestion tab, select (3) Sumo Logic. Add the Sumo Logic ",(0,c.jsx)(t.strong,{children:"API"}),", your ",(0,c.jsx)(t.strong,{children:"Access ID"}),", and ",(0,c.jsx)(t.strong,{children:"Access Key"}),"."]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{alt:"Trace Ingestion Settings",src:o(34035).A+"",width:"3326",height:"1808"})}),"\n",(0,c.jsx)(t.h2,{id:"connect-tracetest-to-sumo-logic-with-the-cli",children:"Connect Tracetest to Sumo Logic with the CLI"}),"\n",(0,c.jsx)(t.p,{children:"If you prefer using the CLI, you can use this file config."}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-yaml",children:'---\ntype: DataStore\nspec:\n  name: Sumo Logic\n  type: sumologic\n  sumologic:\n    # The URL will differ based on your location. View this\n    # docs page to figure out which URL you need:\n    # https://help.sumologic.com/docs/api/getting-started/#which-endpoint-should-i-should-use\n    url: "https://api.sumologic.com/api/"\n    # Create your ID and Key under Administration > Security > Access Keys\n    # in your Sumo Logic account:\n    # https://help.sumologic.com/docs/manage/security/access-keys/#create-your-access-key\n    accessID: "your-access-id"\n    accessKey: "your-access-key"\n'})}),"\n",(0,c.jsx)(t.p,{children:"Proceed to run this command in the terminal, and specify the file above."}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"tracetest apply datastore -f my/data-store/file/location.yaml\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},34035:(e,t,o)=>{o.d(t,{A:()=>c});const c=o.p+"assets/images/app.tracetest.io_organizations_at4CxvjIg_environments_ttenv_172de56e3dcbba9b_settings_tab=dataStore_sumologic-4c93300a2a00b124b42215d8bafde199.png"},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>r});var c=o(96540);const n={},s=c.createContext(n);function i(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);