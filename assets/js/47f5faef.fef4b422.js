"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1061],{29993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=r(74848),n=r(28453);const a={id:"running-tracetest-with-jaeger",title:"Node.js and Jaeger",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, Jaeger as a trace data store, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","jaeger","jaeger tracing","jaeger observability","tracing","opentelemetry"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},o=void 0,i={id:"examples-tutorials/recipes/running-tracetest-with-jaeger",title:"Node.js and Jaeger",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, Jaeger as a trace data store, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",source:"@site/docs/examples-tutorials/recipes/running-tracetest-with-jaeger.mdx",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/running-tracetest-with-jaeger",permalink:"/examples-tutorials/recipes/running-tracetest-with-jaeger",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/running-tracetest-with-jaeger.mdx",tags:[],version:"current",frontMatter:{id:"running-tracetest-with-jaeger",title:"Node.js and Jaeger",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, Jaeger as a trace data store, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","jaeger","jaeger tracing","jaeger observability","tracing","opentelemetry"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"guidesSidebar",previous:{title:"Pokeshop and Grafana Cloud Tempo",permalink:"/examples-tutorials/recipes/running-tracetest-with-grafana-cloud-tempo-pokeshop"},next:{title:"Serverless Node.js and Jaeger with Terraform",permalink:"/examples-tutorials/recipes/running-tracetest-with-aws-terraform"}},c={},l=[{value:"Node.js App with Jaeger, OpenTelemetry and Tracetest",id:"nodejs-app-with-jaeger-opentelemetry-and-tracetest",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run This Quckstart Example",id:"run-this-quckstart-example",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Configuring the Node.js App",id:"configuring-the-nodejs-app",level:2},{value:"Run the Node.js App, Jaeger and OpenTelemetry Collector with Docker Compose",id:"run-the-nodejs-app-jaeger-and-opentelemetry-collector-with-docker-compose",level:2},{value:"Learn More",id:"learn-more",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples/quick-start-jaeger-nodejs",children:"Check out the source code on GitHub here."})})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://tracetest.io/",children:"Tracetest"})," is a testing tool based on ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"})," is an open-source, end-to-end distributed tracing solution. It allows you to monitor and troubleshoot transactions in complex distributed systems. It was developed and then open sourced by Uber Technologies. Jaeger provides a distributed tracing solution to enable transactions across multiple heterogeneous systems or microservices to be tracked and displayed as a cascading series of spans."]}),"\n",(0,s.jsx)(t.h2,{id:"nodejs-app-with-jaeger-opentelemetry-and-tracetest",children:"Node.js App with Jaeger, OpenTelemetry and Tracetest"}),"\n",(0,s.jsx)(t.p,{children:"This is a simple quick start on how to configure a Node.js app to use OpenTelemetry instrumentation with traces and Tracetest for enhancing your E2E and integration tests with trace-based testing. The infrastructure will use Jaeger as the trace data store, and OpenTelemetry Collector to receive traces from the Node.js app and send them to Jaeger."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Tracetest Account"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign up to ",(0,s.jsx)(t.a,{href:"https://app.tracetest.io",children:(0,s.jsx)(t.code,{children:"app.tracetest.io"})})," or follow the ",(0,s.jsx)(t.a,{href:"/getting-started/overview",children:"get started"})," docs."]}),"\n",(0,s.jsxs)(t.li,{children:["Have access to the environment's ",(0,s.jsx)(t.a,{href:"https://app.tracetest.io/retrieve-token",children:"agent API key"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Docker"}),": Have ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," and ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})," installed on your machine."]}),"\n",(0,s.jsx)(t.h2,{id:"run-this-quckstart-example",children:"Run This Quckstart Example"}),"\n",(0,s.jsx)(t.p,{children:"The example below is provided as part of the Tracetest project. You can download and run the example by following these steps:"}),"\n",(0,s.jsx)(t.p,{children:"Clone the Tracetest project and go to the Jaeger Node.js Quickstart:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/kubeshop/tracetest\ncd tracetest/examples/quick-start-jaeger-nodejs\n"})}),"\n",(0,s.jsx)(t.p,{children:"Follow these instructions to run the quick start:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Copy the ",(0,s.jsx)(t.code,{children:".env.template"})," file to ",(0,s.jsx)(t.code,{children:".env"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Fill out the ",(0,s.jsx)(t.a,{href:"https://app.tracetest.io/retrieve-token",children:"TRACETEST_TOKEN and ENVIRONMENT_ID"})," details by editing your ",(0,s.jsx)(t.code,{children:".env"})," file."]}),"\n",(0,s.jsxs)(t.li,{children:["Run ",(0,s.jsx)(t.code,{children:"docker compose run tracetest-run"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Follow the links in the output to view the test results."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Follow along with the sections below for an in detail breakdown of what the example you just ran did and how it works."}),"\n",(0,s.jsx)(t.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsxs)(t.p,{children:["The project contains ",(0,s.jsx)(t.a,{href:"/getting-started/install-agent",children:"Tracetest Agent"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main",children:"OpenTelemetry Collector"}),", and a Node.js app."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"docker-compose.yaml"})," file in the root directory of the quick start runs the Node.js app and the ",(0,s.jsx)(t.a,{href:"/concepts/agent",children:"Tracetest Agent"})," setup."]}),"\n",(0,s.jsx)(t.h2,{id:"configuring-the-nodejs-app",children:"Configuring the Node.js App"}),"\n",(0,s.jsxs)(t.p,{children:["The Node.js app is a simple Express app, contained in ",(0,s.jsxs)(t.a,{href:"https://github.com/kubeshop/tracetest/blob/main/examples/quick-start-jaeger-nodejs/app.js",children:["the ",(0,s.jsx)(t.code,{children:"app.js"})," file"]}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Configure the ",(0,s.jsx)(t.code,{children:".env"})," like shown below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'# Get the required information here: https://app.tracetest.io/retrieve-token\n\nTRACETEST_TOKEN="<YOUR_TRACETEST_TOKEN>"\nTRACETEST_ENVIRONMENT_ID="<YOUR_ENV_ID>"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The OpenTelemetry tracing is contained in the ",(0,s.jsx)(t.code,{children:"tracing.otel.grpc.js"})," or ",(0,s.jsx)(t.code,{children:"tracing.otel.http.js"})," files."]}),"\n",(0,s.jsxs)(t.p,{children:["Choosing the ",(0,s.jsxs)(t.a,{href:"https://github.com/kubeshop/tracetest/blob/main/examples/quick-start-jaeger-nodejs/tracing.otel.grpc.js",children:[(0,s.jsx)(t.code,{children:"tracing.otel.grpc.js"})," file"]})," will send traces to OpenTelemetry Collector's ",(0,s.jsx)(t.code,{children:"GRPC"})," endpoint."]}),"\n",(0,s.jsxs)(t.p,{children:["Enabling the tracer is done by preloading the trace file. As seen in the ",(0,s.jsx)(t.code,{children:"package.json"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"scripts": {\n  "app-with-grpc-tracer": "node -r ./tracing.otel.grpc.js app.js",\n},\n'})}),"\n",(0,s.jsx)(t.h2,{id:"run-the-nodejs-app-jaeger-and-opentelemetry-collector-with-docker-compose",children:"Run the Node.js App, Jaeger and OpenTelemetry Collector with Docker Compose"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsxs)(t.a,{href:"https://github.com/kubeshop/tracetest/blob/main/examples/quick-start-jaeger-nodejs/docker-compose.yaml",children:[(0,s.jsx)(t.code,{children:"docker-compose.yaml"})," file"]})," and ",(0,s.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest/blob/main/examples/quick-start-jaeger-nodejs/Dockerfile",children:(0,s.jsx)(t.code,{children:"Dockerfile"})})," in the root directory are for the Node.js app. The ",(0,s.jsx)(t.code,{children:"docker-compose.yaml"})," contains one service for the Node.js app, as well as the Tracetest Agent, Jaeger, and OpenTelemetry Collector."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.a,{href:"https://github.com/kubeshop/tracetest/blob/main/examples/quick-start-jaeger-nodejs/collector.config.yaml",children:["The ",(0,s.jsx)(t.code,{children:"collector.config.yaml"})," configures the OpenTelemetry Collector"]}),". It receives traces via either ",(0,s.jsx)(t.code,{children:"grpc"})," or ",(0,s.jsx)(t.code,{children:"http"}),". Then, exports them to Jaeger via the OTLP ",(0,s.jsx)(t.code,{children:"exporter"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"To start it, run this command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker compose run tracetest-run\n"})}),"\n",(0,s.jsx)(t.p,{children:"This will:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Start the Node.js app, the OpenTelemetry Collector, and send the traces to Jaeger."}),"\n",(0,s.jsx)(t.li,{children:"Start the Tracetest Agent."}),"\n",(0,s.jsx)(t.li,{children:"Configure the tracing backend and create tests in your environment."}),"\n",(0,s.jsx)(t.li,{children:"Run the tests."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The output of the test will look similar to this:\n",(0,s.jsx)(t.img,{alt:"Tracetest with Jaeger Example Output",src:r(18359).A+"",width:"2586",height:"214"})]}),"\n",(0,s.jsx)(t.p,{children:"Follow the links in the output to view the run group and the test result on Tracetest."}),"\n",(0,s.jsxs)(t.p,{children:["Jaeger is started as a part of this recipe, and you can access Jaeger's UI at ",(0,s.jsx)(t.code,{children:"http://localhost:16686/"})," and see any traces generated."]}),"\n",(0,s.jsxs)(t.p,{children:["The Docker file exposes the underlying Node.js app at ",(0,s.jsx)(t.code,{children:"http://localhost:8080/"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Open Tracetest and start creating tests using this environment! Make sure to use the ",(0,s.jsx)(t.code,{children:"http://app:8080/"})," URL in your test creation, because your Node.js app and the Tracetest agent are in the same network. This simple Node.js application only supports a GET operation against ",(0,s.jsx)(t.code,{children:"http://app:8080/"})," and should return the string 'Hello World'."]}),"\n",(0,s.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,s.jsxs)(t.p,{children:["Feel free to check out our ",(0,s.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:"examples in GitHub"})," and join our ",(0,s.jsx)(t.a,{href:"https://dub.sh/tracetest-community",children:"Slack Community"})," for more info!"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},18359:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/tracetest-jaeger-example-output-b4b6411a8e73292f6b870a650b91cd58.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);