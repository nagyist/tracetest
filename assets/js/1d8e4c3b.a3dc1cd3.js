"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[965],{2097:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(74848),r=s(28453);const i={id:"testkube-pipeline",title:"Testkube Kubernetes-native Test Runner Pipeline",description:"Use Tracetest with Testkube to add trace-based testing to Kubernetes-native CI/CD pipelines. Run scheduled and synthetic tests against trace data.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","testkube"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,c={id:"ci-cd-automation/testkube-pipeline",title:"Testkube Kubernetes-native Test Runner Pipeline",description:"Use Tracetest with Testkube to add trace-based testing to Kubernetes-native CI/CD pipelines. Run scheduled and synthetic tests against trace data.",source:"@site/docs/ci-cd-automation/testkube-pipeline.mdx",sourceDirName:"ci-cd-automation",slug:"/ci-cd-automation/testkube-pipeline",permalink:"/ci-cd-automation/testkube-pipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/ci-cd-automation/testkube-pipeline.mdx",tags:[],version:"current",frontMatter:{id:"testkube-pipeline",title:"Testkube Kubernetes-native Test Runner Pipeline",description:"Use Tracetest with Testkube to add trace-based testing to Kubernetes-native CI/CD pipelines. Run scheduled and synthetic tests against trace data.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","testkube"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"guidesSidebar",previous:{title:"Github Actions Pipeline with Secrets",permalink:"/ci-cd-automation/github-actions-pipeline-with-secrets"},next:{title:"Tekton Cloud-native Pipeline",permalink:"/ci-cd-automation/tekton-pipeline"}},o={},d=[{value:"Running Scheduled Trace-based Tests",id:"running-scheduled-trace-based-tests",level:2},{value:"Why do we want to run Tracetest with Testkube?",id:"why-do-we-want-to-run-tracetest-with-testkube",level:2},{value:"Infrastructure Overview",id:"infrastructure-overview",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Connect your Testkube CLI to your Testkube Environment",id:"1-connect-your-testkube-cli-to-your-testkube-environment",level:3},{value:"2. Create a Test in Tracetest",id:"2-create-a-test-in-tracetest",level:3},{value:"3. Create a Trace-based Test with Tracetest in Testkube",id:"3-create-a-trace-based-test-with-tracetest-in-testkube",level:3},{value:"4. Run the Tracetest Trace-based Test in Testkube",id:"4-run-the-tracetest-trace-based-test-in-testkube",level:3},{value:"5. Create a Trace-based Test That Runs Every Minute",id:"5-create-a-trace-based-test-that-runs-every-minute",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Learn More",id:"learn-more",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/tools-and-integrations/testkube",children:"Check out how the integration works, here."})})}),"\n",(0,n.jsx)(t.h2,{id:"running-scheduled-trace-based-tests",children:"Running Scheduled Trace-based Tests"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://app.tracetest.io/",children:"Tracetest"})," is a testing tool based on ",(0,n.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," that allows you to test your distributed application. It uses data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior described by your test definitions."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://testkube.io/",children:"Testkube"})," is a Kubernetes-native testing framework for Testers and Developers that allows you to automate the executions of your existing testing tools inside your Kubernetes cluster, removing all the complexity from your CI/CD/GitOps pipelines."]}),"\n",(0,n.jsxs)(t.p,{children:["By using the ",(0,n.jsx)(t.a,{href:"https://docs.testkube.io/test-types/executor-tracetest",children:"Testkube Tracetest Executor"})," you can unlock Testkube's capacity in conjunction with Tracetest, and leverage the work you have already done to instrument your services."]}),"\n",(0,n.jsx)("div",{style:{position:"relative",paddingBottom:"62.5%",height:"0"},children:(0,n.jsx)("iframe",{src:"https://www.youtube.com/embed/nAp3zYgykok",title:"Trace-based testing in Kubernetes with Testkube and Tracetest",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,width:"100%",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})}),"\n",(0,n.jsx)(t.h2,{id:"why-do-we-want-to-run-tracetest-with-testkube",children:"Why do we want to run Tracetest with Testkube?"}),"\n",(0,n.jsx)(t.p,{children:"Tracetest leverages existing OpenTelemetry instrumentation to run assertions against every part of a distributed transaction."}),"\n",(0,n.jsx)(t.p,{children:"By integrating with Testkube you can now add Tracetest to the native CI/CD pipeline in your Kubernetes cluster. It allows you to run scheduled tests and synthetic tests. All while following the trace-based testing principle and enabling full in-depth assertions against trace data, not just the response."}),"\n",(0,n.jsx)(t.h2,{id:"infrastructure-overview",children:"Infrastructure Overview"}),"\n",(0,n.jsx)(t.p,{children:"The following is high level sequence diagram on how Testkube and Tracetest interact with the different pieces of the system:"}),"\n",(0,n.jsx)(t.mermaid,{value:"sequenceDiagram\n    testkube client->>+testkube: Trigger Testkube test run\n    testkube->>+executor CRDs: Get executor details\n    executor CRDs--\x3e>-testkube: Send details\n    testkube->>+tracetest executor job: Schedules execution\n    tracetest executor job->>+tracetest executor job: Configure Tracetest CLI\n    tracetest executor job->>+tracetest: Executes the Tracetest test run\n    tracetest->>+tracetest agent: Publish test run job\n    tracetest agent->>+instrumented service: Trigger request\n    instrumented service--\x3e>-tracetest agent: Get response\n    instrumented service->>+data store: Send telemetry data\n    tracetest agent->>+data store: Fetch trace\n    data store--\x3e>-tracetest agent: Get trace\n    tracetest agent--\x3e>-tracetest: Sync and store response and trace\n    tracetest->>+tracetest: Run analyzer and assertions\n    tracetest--\x3e>-tracetest executor job: Return test run results\n    tracetest executor job--\x3e>-testkube: Return test run results\n    testkube--\x3e>-testkube client: Send details"}),"\n",(0,n.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,n.jsx)(t.p,{children:"This guide will show how to use Testkube alongside Tracetest to run scheduled Trace-based tests in a Kubernetes cluster."}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Tracetest account"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Sign up to ",(0,n.jsx)(t.a,{href:"https://app.tracetest.io",children:(0,n.jsx)(t.code,{children:"app.tracetest.io"})})," or follow the ",(0,n.jsx)(t.a,{href:"/getting-started/overview",children:"get started"})," docs."]}),"\n",(0,n.jsxs)(t.li,{children:["Create an ",(0,n.jsx)(t.a,{href:"/concepts/organizations",children:"organization"})," and ",(0,n.jsx)(t.a,{href:"/concepts/environments",children:"environment"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Deploy the ",(0,n.jsx)(t.a,{href:"/configuration/agent",children:"Tracetest Agent"})," in your cluster."]}),"\n",(0,n.jsxs)(t.li,{children:["Create an ",(0,n.jsx)(t.a,{href:"/concepts/environment-tokens",children:"environment token"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Testkube account"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Sign up to ",(0,n.jsx)(t.a,{href:"https://app.testkube.io",children:(0,n.jsx)(t.code,{children:"app.testkube.io"})})," or follow the ",(0,n.jsx)(t.a,{href:"https://docs.testkube.io/articles/getting-started",children:"get started"})," docs."]}),"\n",(0,n.jsx)(t.li,{children:"Create a Testkube environment."}),"\n",(0,n.jsxs)(t.li,{children:["Deploy the ",(0,n.jsx)(t.a,{href:"https://docs.testkube.io/testkube-pro/articles/installing-agent",children:"Testkube Agent"})," in your cluster."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Remember, in your Kubernetes cluster you should have:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Tracetest Agent"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Testkube Agent"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"OpenTelemetry Instrumented Service"}),": In order to generate traces and spans, the service under test must support the basics for ",(0,n.jsx)(t.a,{href:"https://opentelemetry.io/docs/reference/specification/context/api-propagators/",children:"propagation"})," through HTTP requests, and also store traces and spans into a Tracing Backend (Jaeger, Grafana Tempo, OpenSearch, etc) or use the ",(0,n.jsx)(t.a,{href:"https://docs.tracetest.io/configuration/overview#using-tracetest-without-a-trace-data-store",children:"OpenTelemetry Collector"}),". If you are using a Tracing Backend, the Tracetest Agent requires network access to it. In case of using the OpenTelemetry Collector, you need to setup your collector to send trace data to the Tracetest Agent."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"On your machine you should have:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Kubectl"})," ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"installed"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Testkube CLI"})," ",(0,n.jsx)(t.a,{href:"https://docs.testkube.io/articles/install/cli",children:"installed"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Helm"})," ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/intro/install/",children:"installed"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"With everything set up, we will start configuring Testkube and Tracetest to run scheduled Trace-based tests."}),"\n",(0,n.jsx)(t.h3,{id:"1-connect-your-testkube-cli-to-your-testkube-environment",children:"1. Connect your Testkube CLI to your Testkube Environment"}),"\n",(0,n.jsx)(t.p,{children:"To use the Testkube CLI with your Testkube account you need to set the CLI Context. For that you need a Testkube Pro token. When the token is created, you are ready to change the Testkube CLI context:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"testkube set context -c cloud -e testkube-environment-id -o testkube-organization-id -k testkube-token\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more information see the Testkube ",(0,n.jsx)(t.a,{href:"https://docs.testkube.io/testkube-pro/articles/managing-cli-context",children:"Connecting from the CLI"})," docs."]}),"\n",(0,n.jsx)(t.h3,{id:"2-create-a-test-in-tracetest",children:"2. Create a Test in Tracetest"}),"\n",(0,n.jsxs)(t.p,{children:["In the environment in your ",(0,n.jsx)(t.a,{href:"https://app.tracetest.io",children:"Tracetest"})," account, start by clicking ",(0,n.jsx)(t.code,{children:"Tests"})," > ",(0,n.jsx)(t.code,{children:"Create"})," > ",(0,n.jsx)(t.code,{children:"HTTP"}),", then ",(0,n.jsx)(t.code,{children:"Enter the URL of your OpenTelemetry Instrumented Service"})," and click ",(0,n.jsx)(t.code,{children:"Run"}),". Remember that you need the Tracetest Agent deployed and configured in your environment so it can trigger the request and fetch the trace data."]}),"\n",(0,n.jsxs)(t.p,{children:["This will trigger the test and display the distributed trace in the ",(0,n.jsx)(t.code,{children:"Test"})," tab to run assertions against."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Tracetest distributed trace test run view",src:s(27665).A+"",width:"3396",height:"2230"})}),"\n",(0,n.jsxs)(t.p,{children:["Proceed to add a test spec to assert all database queries return within 500 ms. Click the ",(0,n.jsx)(t.code,{children:"Test"})," tab and proceed to click the ",(0,n.jsx)(t.code,{children:"Add Test Spec"})," button."]}),"\n",(0,n.jsx)(t.p,{children:"In the span selector make sure to add this selector:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:'span[tracetest.span.type="database"]\n'})}),"\n",(0,n.jsx)(t.p,{children:"In the assertion field add:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"attr: tracetest.span.duration < 500ms;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Save the test spec and publish the test."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Assertion for database queries",src:s(67770).A+"",width:"3396",height:"2230"})}),"\n",(0,n.jsx)(t.p,{children:"The database spans that are returning in less than 500ms are labeled in green."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Assertions passing",src:s(57603).A+"",width:"3396",height:"2230"})}),"\n",(0,n.jsx)(t.p,{children:"This is an example of a trace-based test that asserts against every single part of an HTTP transaction, including all interactions with the database."}),"\n",(0,n.jsx)(t.p,{children:"However, Tracetest cannot run this test as part of your CI/CD without integrating with another tool."}),"\n",(0,n.jsx)(t.p,{children:"Let's introduce how Testkube makes it possible."}),"\n",(0,n.jsx)(t.h3,{id:"3-create-a-trace-based-test-with-tracetest-in-testkube",children:"3. Create a Trace-based Test with Tracetest in Testkube"}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.code,{children:"Automate"})," tab in the top of your screen. This will show the YAML definition for the test run."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"tracetest test yaml file",src:s(8204).A+"",width:"3396",height:"2230"})}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.code,{children:"Download File"})," button and this will save your definition in a yaml format."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'type: Test\nspec:\n  id: RUkKQ_aVR\n  name: Pokeshop - List\n  description: Get a Pokemon\n  trigger:\n    type: http\n    httpRequest:\n      url: http://demo-pokemon-api.demo/pokemon?take=20&skip=0\n      method: GET\n      headers:\n        - key: Content-Type\n          value: application/json\n  specs:\n    - name: Database queries less than 500 ms\n      selector: span[tracetest.span.type="database"]\n      assertions:\n        - attr:tracetest.span.duration  <  500ms\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Execute the following command to create the test executor object in Testkube. Do not forget to provide the path to your Tracetest definition file using the ",(0,n.jsx)(t.code,{children:"--file"})," argument, and also the following variables:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TRACETEST_TOKEN"}),": your ",(0,n.jsx)(t.a,{href:"/concepts/environment-tokens",children:"environment token"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TRACETEST_ENVIRONMENT"}),": your ",(0,n.jsx)(t.a,{href:"/concepts/environments",children:"environment id"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TRACETEST_ORGANIZATION"}),": your ",(0,n.jsx)(t.a,{href:"/concepts/organizations",children:"organization id"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'kubectl testkube create test --file my/file/location.yaml --type "tracetest/test" --name pokeshop-tracetest-test --variable TRACETEST_TOKEN=tracetest-token --variable TRACETEST_ENVIRONMENT=tracetest-environment-id --variable TRACETEST_ORGANIZATION=tracetest-organization-id\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",metastring:'title="Expected output"',children:"Test created testkube / pokeshop-tracetest-test \ud83e\udd47\n"})}),"\n",(0,n.jsx)(t.p,{children:"Opening the Testkube Dashboard will show the test is created successfully."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1679071918/Blogposts/Docs/screely-1679071913649_yrgucd.png",alt:"Tracetest test created in Testkube"})}),"\n",(0,n.jsx)(t.h3,{id:"4-run-the-tracetest-trace-based-test-in-testkube",children:"4. Run the Tracetest Trace-based Test in Testkube"}),"\n",(0,n.jsx)(t.p,{children:"Finally, to run the test, execute the following command, or run the test from the Testkube Dashboard."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl testkube run test --watch pokeshop-tracetest-test\n"})}),"\n",(0,n.jsx)(t.p,{children:"Here's what the Testkube CLI will look like if the test passes."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'\ud83d\ude9a [TracetestRunner]: Preparing test run\n\ud83c\udf0d Configuring Tracetest CLI with Token\n\ud83c\udf0d Using arguments to configure CLI: [configure --token tracetest-token --organization tracetest-organization-id --environment tracetest-environment-id]\n\ud83d\ude80 Configure command tracetest configure --token tracetest-token --organization tracetest-organization-id --environment tracetest-environment-id\n\ud83d\udd2c Executing in directory :\n $ tracetest configure --token tracetest-token --organization tracetest-organization-id --environment tracetest-environment-id\n SUCCESS  Successfully configured Tracetest CLI\n\n\u2705 Execution succeeded\n\ud83c\udf0d Using arguments to run test: [run test --file /data/test-content --output pretty]\n\ud83d\ude80 Test run command tracetest run test --file /data/test-content --output pretty\n\ud83d\udd2c Executing in directory :\n $ tracetest run test --file /data/test-content --output pretty\n\n\u2714 RunGroup: #58WmDuBSR (https://app.tracetest.io/organizations/tracetest-organization-id/environments/tracetest-environment-id/run/58WmDuBSR)\n Summary: 1 passed, 0 failed, 0 pending\n  \u2714 Pokeshop - List (https://app.tracetest.io/organizations/tracetest-organization-id/environments/tracetest-environment-id/test/R5NITR14g/run/1/test) - trace id: 3cdcb56d6c226f7083f45d6b3d278051\n\t\u2714 span[tracetest.span.type="http"]\n\t\u2714 span[tracetest.span.type="database"]\n'})}),"\n",(0,n.jsx)(t.p,{children:"And, here's the Testkube Dashboard."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"testkube",src:s(78601).A+"",width:"3362",height:"2270"})}),"\n",(0,n.jsx)(t.h3,{id:"5-create-a-trace-based-test-that-runs-every-minute",children:"5. Create a Trace-based Test That Runs Every Minute"}),"\n",(0,n.jsxs)(t.p,{children:["By using Testkube's ",(0,n.jsx)(t.a,{href:"https://docs.testkube.io/concepts/scheduling",children:"scheduling"}),", you can trigger this test every minute."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'kubectl testkube create test --file my/file/location.yaml --type "tracetest/test" --name pokeshop-tracetest-scheduled-test --schedule="*/1 * * * *" --variable TRACETEST_TOKEN=tracetest-token --variable TRACETEST_ENVIRONMENT=tracetest-environment-id --variable TRACETEST_ORGANIZATION=tracetest-organization-id\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",metastring:'title="Expected output"',children:"Test created testkube / pokeshop-tracetest-scheduled-test \ud83e\udd47\n"})}),"\n",(0,n.jsx)(t.p,{children:"In your Testkube Dashboard you'll see this test run continuously and get triggered every minute."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1679330588/Blogposts/Docs/screely-1679330581788_izl5vs.png",alt:"scheduled test"})}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,n.jsxs)(t.p,{children:["To explore more options that Testkube gives you, check out ",(0,n.jsx)(t.a,{href:"https://docs.testkube.io/concepts/triggers",children:"test triggers"}),". They enable you to trigger tests based on Kubernetes events."]}),"\n",(0,n.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,n.jsxs)(t.p,{children:["Please visit our ",(0,n.jsx)(t.a,{href:"https://docs.tracetest.io/",children:"documentation"})," and join our ",(0,n.jsx)(t.a,{href:"https://dub.sh/tracetest-community",children:"Slack Community"})," for more info!"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},78601:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/testkube01-44de0a1ac4390ca81292ce2ab94069be.png"},27665:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/tracetest01-67b93e285c970e37dd93a5759d56a4e9.png"},67770:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/tracetest02-95ccf059ab573ade45919f38e73a7d21.png"},57603:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/tracetest03-9430069c5b1b30d250fd1ffbdfc560ee.png"},8204:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/tracetest04-99b9d5622da052bf4075d484adf5286d.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);