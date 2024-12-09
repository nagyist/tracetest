"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[6128],{67405:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=s(74848),n=s(28453);const o={id:"running-tracetest-with-datadog",title:"OpenTelemetry Demo and Datadog",description:"Quick start how to configure the OpenTelemetry Demo to use Tracetest for enhancing your E2E and integration tests with trace-based testing with Datadog as a trace data store.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,i={id:"examples-tutorials/recipes/running-tracetest-with-datadog",title:"OpenTelemetry Demo and Datadog",description:"Quick start how to configure the OpenTelemetry Demo to use Tracetest for enhancing your E2E and integration tests with trace-based testing with Datadog as a trace data store.",source:"@site/docs/examples-tutorials/recipes/running-tracetest-with-datadog.mdx",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/running-tracetest-with-datadog",permalink:"/examples-tutorials/recipes/running-tracetest-with-datadog",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/running-tracetest-with-datadog.mdx",tags:[],version:"current",frontMatter:{id:"running-tracetest-with-datadog",title:"OpenTelemetry Demo and Datadog",description:"Quick start how to configure the OpenTelemetry Demo to use Tracetest for enhancing your E2E and integration tests with trace-based testing with Datadog as a trace data store.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"guidesSidebar",previous:{title:"OpenTelemetry Demo and Dash0",permalink:"/examples-tutorials/recipes/running-tracetest-with-dash0"},next:{title:"OpenTelemetry Demo and Dynatrace",permalink:"/examples-tutorials/recipes/running-tracetest-with-dynatrace"}},c={},d=[{value:"OpenTelemetry Demo <code>v1.3.0</code> with Datadog, OpenTelemetry and Tracetest",id:"opentelemetry-demo-v130-with-datadog-opentelemetry-and-tracetest",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run This Quckstart Example",id:"run-this-quckstart-example",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"1. OpenTelemetry Demo",id:"1-opentelemetry-demo",level:3},{value:"Docker Compose Network",id:"docker-compose-network",level:3},{value:"OpenTelemetry Demo",id:"opentelemetry-demo",level:2},{value:"Running the Tests",id:"running-the-tests",level:2},{value:"The Test File",id:"the-test-file",level:3},{value:"View Trace Spans Over Time in Datadog",id:"view-trace-spans-over-time-in-datadog",level:2},{value:"Learn more",id:"learn-more",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples/tracetest-datadog",children:"Check out the source code on GitHub here."})})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://tracetest.io/",children:"Tracetest"})," is a testing tool based on ",(0,r.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.datadoghq.com/",children:"Datadog"})," is an observability solution for cloud-scale applications, providing solutions to monitor databases, servers, tools and services. It provides integrated distributed tracing, logs and metrics solutions and supports OpenTelemetry standards."]}),"\n",(0,r.jsxs)(t.h2,{id:"opentelemetry-demo-v130-with-datadog-opentelemetry-and-tracetest",children:["OpenTelemetry Demo ",(0,r.jsx)(t.code,{children:"v1.3.0"})," with Datadog, OpenTelemetry and Tracetest"]}),"\n",(0,r.jsxs)(t.p,{children:["This is a simple sample app on how to configure the ",(0,r.jsxs)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-demo",children:["OpenTelemetry Demo ",(0,r.jsx)(t.code,{children:"v1.3.0"})]})," to use ",(0,r.jsx)(t.a,{href:"https://tracetest.io/",children:"Tracetest"})," for enhancing your E2E and integration tests with trace-based testing and ",(0,r.jsx)(t.a,{href:"https://www.datadoghq.com/",children:"Datadog"})," as a trace data store."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Tracetest Account"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Sign up to ",(0,r.jsx)(t.a,{href:"https://app.tracetest.io",children:(0,r.jsx)(t.code,{children:"app.tracetest.io"})})," or follow the ",(0,r.jsx)(t.a,{href:"/getting-started/overview",children:"get started"})," docs."]}),"\n",(0,r.jsxs)(t.li,{children:["Have access to the environment's ",(0,r.jsx)(t.a,{href:"https://app.tracetest.io/retrieve-token",children:"agent API key"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Docker"}),": Have ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," and ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})," installed on your machine."]}),"\n",(0,r.jsx)(t.h2,{id:"run-this-quckstart-example",children:"Run This Quckstart Example"}),"\n",(0,r.jsx)(t.p,{children:"The example below is provided as part of the Tracetest project. You can download and run the example by following these steps:"}),"\n",(0,r.jsx)(t.p,{children:"Clone the Tracetest project and go to the example folder:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/kubeshop/tracetest\ncd tracetest/examples/tracetest-datadog\n"})}),"\n",(0,r.jsx)(t.p,{children:"Follow these instructions to run the quick start:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Copy the ",(0,r.jsx)(t.code,{children:".env.template"})," file to ",(0,r.jsx)(t.code,{children:".env"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Fill out the ",(0,r.jsx)(t.a,{href:"https://app.tracetest.io/retrieve-token",children:"TRACETEST_TOKEN and ENVIRONMENT_ID"})," details by editing your ",(0,r.jsx)(t.code,{children:".env"})," file."]}),"\n",(0,r.jsxs)(t.li,{children:["Fill out the ",(0,r.jsx)(t.a,{href:"https://www.datadoghq.com/",children:"DATADOG_API_KEY"})," details by editing your ",(0,r.jsx)(t.code,{children:".env"})," file."]}),"\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"docker compose run tracetest-run"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Follow the links in the output to view the test results."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Follow the sections below for a detailed breakdown of what the example you just ran did and how it works."}),"\n",(0,r.jsx)(t.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,r.jsxs)(t.p,{children:["The project is built with Docker Compose. It contains two distinct ",(0,r.jsx)(t.code,{children:"docker-compose.yaml"})," files."]}),"\n",(0,r.jsx)(t.h3,{id:"1-opentelemetry-demo",children:"1. OpenTelemetry Demo"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"docker-compose.yaml"})," file and ",(0,r.jsx)(t.code,{children:".env"})," file in the root directory are for the OpenTelemetry Demo."]}),"\n",(0,r.jsx)(t.h3,{id:"docker-compose-network",children:"Docker Compose Network"}),"\n",(0,r.jsxs)(t.p,{children:["All ",(0,r.jsx)(t.code,{children:"services"})," in the ",(0,r.jsx)(t.code,{children:"docker-compose.yaml"})," are on the same network, defined by the ",(0,r.jsx)(t.code,{children:"networks"})," section on each file, and will be reachable by hostname from within other services. E.g. ",(0,r.jsx)(t.code,{children:"tracetest-agent:4317"})," in the ",(0,r.jsx)(t.code,{children:"collector.config.yaml"})," will map to the ",(0,r.jsx)(t.code,{children:"tracetest-agent"})," service, where port ",(0,r.jsx)(t.code,{children:"4317"})," is the port where Tracetest Agent accepts traces."]}),"\n",(0,r.jsx)(t.h2,{id:"opentelemetry-demo",children:"OpenTelemetry Demo"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-demo",children:"OpenDelemetry Demo"})," is a sample microservice-based app with the purpose to demo how to correctly set up OpenTelemetry distributed tracing."]}),"\n",(0,r.jsxs)(t.p,{children:["Read more about the OpenTelemetry Demo ",(0,r.jsx)(t.a,{href:"https://opentelemetry.io/blog/2022/announcing-opentelemetry-demo-release/",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"docker-compose.yaml"})," contains 14 services."]}),"\n",(0,r.jsx)(t.p,{children:"To start the OpenTelemetry Demo by itself, run this command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This will start the OpenTelemetry Demo. Open up ",(0,r.jsx)(t.code,{children:"http://localhost:8084"})," to make sure it's working. But, you're not sending the traces anywhere."]}),"\n",(0,r.jsx)(t.p,{children:"Let's fix this by configuring Tracetest and the OpenTelemetry Collector to forward trace data to both Datadog and Tracetest."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Sending Traces to Tracetest and Datadog"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"collector.config.yaml"})," explains that. It receives traces via either ",(0,r.jsx)(t.code,{children:"grpc"})," or ",(0,r.jsx)(t.code,{children:"http"}),". Then, exports them to Tracetest's Agent OTLP endpoint ",(0,r.jsx)(t.code,{children:"tracetest-agent:4317"})," in one pipeline, and to Datadog in another."]}),"\n",(0,r.jsxs)(t.p,{children:["Make sure to add your Datadog API Key to the ",(0,r.jsx)(t.code,{children:"datadog"})," exporter."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"receivers:\n  otlp:\n    protocols:\n      http:\n      grpc:\n  # The hostmetrics receiver is required to get correct infrastructure metrics in Datadog.\n  hostmetrics:\n    collection_interval: 10s\n    scrapers:\n      paging:\n        metrics:\n          system.paging.utilization:\n            enabled: true\n      cpu:\n        metrics:\n          system.cpu.utilization:\n            enabled: true\n      disk:\n      filesystem:\n        metrics:\n          system.filesystem.utilization:\n            enabled: true\n      load:\n      memory:\n      network:\n      processes:\n  # The prometheus receiver scrapes metrics needed for the OpenTelemetry Collector Dashboard.\n  prometheus:\n    config:\n      scrape_configs:\n      - job_name: 'otelcol'\n        scrape_interval: 10s\n        static_configs:\n        - targets: ['0.0.0.0:8888']\n\nprocessors:\n  batch: # this configuration is needed to guarantee that the data is sent correctly to Datadog\n    send_batch_max_size: 100\n    send_batch_size: 10\n    timeout: 10s\n\nexporters:\n  # OTLP for Tracetest\n  otlp/tracetest:\n    endpoint: tracetest-agent:4317 \n    tls:\n      insecure: true\n  # Datadog exporter\n  # One example on how to set up a collector configuration for Datadog can be seen here:\n  # https://docs.datadoghq.com/opentelemetry/otel_collector_datadog_exporter/?tab=onahost\n  datadog:\n    api:\n      site: datadoghq.com\n      key: ${env:DATADOG_API_KEY} # Add here you API key for Datadog\n\nservice:\n  pipelines:\n    traces/tracetest:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp/tracetest]\n    traces/datadog:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [datadog]\n    metrics:\n      receivers: [hostmetrics, otlp]\n      processors: [batch]\n      exporters: [datadog]\n"})}),"\n",(0,r.jsx)(t.h2,{id:"running-the-tests",children:"Running the Tests"}),"\n",(0,r.jsx)(t.h3,{id:"the-test-file",children:"The Test File"}),"\n",(0,r.jsxs)(t.p,{children:["Check out the ",(0,r.jsx)(t.code,{children:"resources/test.yaml"})," file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'# resources/test.yaml\ntype: Test\nspec:\n  id: JBYAfKJ4R\n  name: OpenTelemetry Shop - List Products\n  description: List Products available on OTel shop\n  trigger:\n    type: http\n    httpRequest:\n      url: http://frontend:8084/api/products\n      method: GET\n      headers:\n      - key: Content-Type\n        value: application/json\n  specs:\n  - selector: span[tracetest.span.type="general" name="Tracetest trigger"]\n    assertions:\n    - attr:tracetest.response.status   =   200\n    - attr:tracetest.span.duration  <  10ms\n  - selector: span[tracetest.span.type="rpc" name="grpc.hipstershop.ProductCatalogService/ListProducts"]\n    assertions:\n    - attr:rpc.grpc.status_code = 0\n  - selector: span[tracetest.span.type="rpc" name="hipstershop.ProductCatalogService/ListProducts"\n      rpc.system="grpc" rpc.method="ListProducts" rpc.service="hipstershop.ProductCatalogService"]\n    assertions:\n    - attr:rpc.grpc.status_code = 0\n'})}),"\n",(0,r.jsx)(t.p,{children:"To run the test, run this command in the terminal:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker compose run tracetest-run\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This test will fail just like the sample above due to the ",(0,r.jsx)(t.code,{children:"attr:tracetest.span.duration  <  50ms"})," assertion."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'\u2718 Otel - List Products (http://localhost:11633/test/YJmFC7hVg/run/9/test)\n\t\u2718 span[tracetest.span.type="http" name="API HTTP GET" http.target="/api/products" http.method="GET"]\n\t\t\u2718 #cb68ccf586956db7\n\t\t\t\u2714 attr:http.status_code   =   200 (200)\n\t\t\t\u2718 attr:tracetest.span.duration  <  50ms (72ms) (http://localhost:11633/test/YJmFC7hVg/run/9/test?selectedAssertion=0&selectedSpan=cb68ccf586956db7)\n\t\u2714 span[tracetest.span.type="rpc" name="grpc.hipstershop.ProductCatalogService/ListProducts"]\n\t\t\u2714 #634f965d1b34c1fd\n\t\t\t\u2714 attr:rpc.grpc.status_code = 0 (0)\n\t\u2714 span[tracetest.span.type="rpc" name="hipstershop.ProductCatalogService/ListProducts" rpc.system="grpc" rpc.method="ListProducts" rpc.service="hipstershop.ProductCatalogService"]\n\t\t\u2714 #33a58e95448d8b22\n\t\t\t\u2714 attr:rpc.grpc.status_code = 0 (0)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"view-trace-spans-over-time-in-datadog",children:"View Trace Spans Over Time in Datadog"}),"\n",(0,r.jsxs)(t.p,{children:["To access a historical overview of all the trace spans the OpenTelemetry Demo generates, jump over to your Datadog account on ",(0,r.jsx)(t.code,{children:"APM > Traces"})," area."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1710421967/docs/datadog-recipe-apm-front-page_nxovnx_-_Video_Thumbnail_icgttc.png",alt:""})}),"\n",(0,r.jsx)(t.p,{children:"You can also drill down into a particular trace as well."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1710421963/docs/datadog-recipe-apm-trace-drilldown_bysz3z_-_Video_Thumbnail_hbhsvs.png",alt:""})}),"\n",(0,r.jsx)(t.p,{children:"With Datadog and Tracetest, you get the best of both worlds. You can run trace-based tests and automate running E2E and integration tests against real trace data. And, use Datadog to get a historical overview of all traces your distributed application generates."}),"\n",(0,r.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsxs)(t.p,{children:["Feel free to check out our ",(0,r.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:"examples in GitHub"})," and join our ",(0,r.jsx)(t.a,{href:"https://dub.sh/tracetest-community",children:"Slack Community"})," for more info!"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var r=s(96540);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);