"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[6192],{45281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(74848),r=n(28453);const i={id:"testkube",title:"Running Tracetest with Testkube",description:"Tracetest can be integrated and used with Testkube. This guide shows running Tracetest tests from Testkube.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","testkube","kubernetes testing","event driven testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},o=void 0,a={id:"tools-and-integrations/testkube",title:"Running Tracetest with Testkube",description:"Tracetest can be integrated and used with Testkube. This guide shows running Tracetest tests from Testkube.",source:"@site/docs/tools-and-integrations/testkube.mdx",sourceDirName:"tools-and-integrations",slug:"/tools-and-integrations/testkube",permalink:"/tools-and-integrations/testkube",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/tools-and-integrations/testkube.mdx",tags:[],version:"current",frontMatter:{id:"testkube",title:"Running Tracetest with Testkube",description:"Tracetest can be integrated and used with Testkube. This guide shows running Tracetest tests from Testkube.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","testkube","kubernetes testing","event driven testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"guidesSidebar",previous:{title:"Running Tracetest Core with k6",permalink:"/tools-and-integrations/k6-core"},next:{title:"CI/CD Automation",permalink:"/ci-cd-automation/overview"}},c={},l=[{value:"Why is this important?",id:"why-is-this-important",level:2},{value:"The Testkube Tracetest Executor",id:"the-testkube-tracetest-executor",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Connect your Testkube CLI to your Testkube Environment",id:"1-connect-your-testkube-cli-to-your-testkube-environment",level:3},{value:"2. Create a Test",id:"2-create-a-test",level:3},{value:"3. Run the Test",id:"3-run-the-test",level:3},{value:"4. Explore the results",id:"4-explore-the-results",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Learn More",id:"learn-more",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://app.tracetest.io/",children:"Tracetest"})," is a testing tool based on ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," that allows you to test your distributed application. It uses data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior described by your test definitions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://testkube.io/",children:"Testkube"})," is a Kubernetes-native testing framework for Testers and Developers that allows you to automate the executions of your existing testing tools inside your Kubernetes cluster, removing all the complexity from your CI/CD/GitOps pipelines."]}),"\n",(0,s.jsx)(t.h2,{id:"why-is-this-important",children:"Why is this important?"}),"\n",(0,s.jsx)(t.p,{children:"Integrating Tracetest with Testkube enhances testing processes by leveraging Kubernetes-native capabilities, improving scalability, and reliability of testing workflows for distributed applications."}),"\n",(0,s.jsx)("div",{style:{position:"relative",paddingBottom:"62.5%",height:"0"},children:(0,s.jsx)("iframe",{src:"https://www.youtube.com/embed/nAp3zYgykok",title:"Trace-based testing in Kubernetes with Testkube and Tracetest",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,width:"100%",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})}),"\n",(0,s.jsx)(t.h2,{id:"the-testkube-tracetest-executor",children:"The Testkube Tracetest Executor"}),"\n",(0,s.jsx)(t.p,{children:"For Testkube, tests are meant to be part of a cluster's state and can be executed as needed:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Manually via kubectl CLI."}),"\n",(0,s.jsx)(t.li,{children:"Externally triggered via API (CI, external tooling, etc)."}),"\n",(0,s.jsx)(t.li,{children:"Automatically on deployment of annotated/labeled services/pods/etc."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["By using the ",(0,s.jsx)(t.a,{href:"https://docs.testkube.io/test-types/executor-tracetest",children:"Testkube Tracetest Executor"})," you can unlock Testkube's capacity in conjunction with Tracetest, and leverage the work you have already done to instrument your services."]}),"\n",(0,s.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,s.jsx)(t.p,{children:"The following is high level sequence diagram on how Testkube and Tracetest interact with the different pieces of the system:"}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    testkube client->>+testkube: Trigger Testkube test run\n    testkube->>+executor CRDs: Get executor details\n    executor CRDs--\x3e>-testkube: Send details\n    testkube->>+tracetest executor job: Schedules execution\n    tracetest executor job->>+tracetest executor job: Configure Tracetest CLI\n    tracetest executor job->>+tracetest: Executes the Tracetest test run\n    tracetest->>+tracetest agent: Publish test run job\n    tracetest agent->>+instrumented service: Trigger request\n    instrumented service--\x3e>-tracetest agent: Get response\n    instrumented service->>+data store: Send telemetry data\n    tracetest agent->>+data store: Fetch trace\n    data store--\x3e>-tracetest agent: Get trace\n    tracetest agent--\x3e>-tracetest: Sync and store response and trace\n    tracetest->>+tracetest: Run analyzer and assertions\n    tracetest--\x3e>-tracetest executor job: Return test run results\n    tracetest executor job--\x3e>-testkube: Return test run results\n    testkube--\x3e>-testkube client: Send details"}),"\n",(0,s.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsx)(t.p,{children:"This guide will show how to use Testkube alongside Tracetest to run your tests in a Kubernetes cluster."}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Tracetest account"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign up to ",(0,s.jsx)(t.a,{href:"https://app.tracetest.io",children:(0,s.jsx)(t.code,{children:"app.tracetest.io"})})," or follow the ",(0,s.jsx)(t.a,{href:"/getting-started/overview",children:"get started"})," docs."]}),"\n",(0,s.jsxs)(t.li,{children:["Create an ",(0,s.jsx)(t.a,{href:"/concepts/organizations",children:"organization"})," and ",(0,s.jsx)(t.a,{href:"/concepts/environments",children:"environment"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Deploy the ",(0,s.jsx)(t.a,{href:"/configuration/agent",children:"Tracetest Agent"})," in your cluster."]}),"\n",(0,s.jsxs)(t.li,{children:["Create an ",(0,s.jsx)(t.a,{href:"/concepts/environment-tokens",children:"environment token"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Testkube account"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign up to ",(0,s.jsx)(t.a,{href:"https://app.testkube.io",children:(0,s.jsx)(t.code,{children:"app.testkube.io"})})," or follow the ",(0,s.jsx)(t.a,{href:"https://docs.testkube.io/articles/getting-started",children:"get started"})," docs."]}),"\n",(0,s.jsx)(t.li,{children:"Create a Testkube environment."}),"\n",(0,s.jsxs)(t.li,{children:["Deploy the ",(0,s.jsx)(t.a,{href:"https://docs.testkube.io/testkube-pro/articles/installing-agent",children:"Testkube Agent"})," in your cluster."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Remember, in your Kubernetes cluster you should have:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Tracetest Agent"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Testkube Agent"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OpenTelemetry Instrumented Service"}),": In order to generate traces and spans, the service under test must support the basics for ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/docs/reference/specification/context/api-propagators/",children:"propagation"})," through HTTP requests, and also store traces and spans into a Tracing Backend (Jaeger, Grafana Tempo, OpenSearch, etc) or use the ",(0,s.jsx)(t.a,{href:"https://docs.tracetest.io/configuration/overview#using-tracetest-without-a-trace-data-store",children:"OpenTelemetry Collector"}),". If you are using a Tracing Backend, the Tracetest Agent requires network access to it. In case of using the OpenTelemetry Collector, you need to setup your collector to send trace data to the Tracetest Agent."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"On your machine you should have:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Kubectl"})," ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"installed"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Testkube CLI"})," ",(0,s.jsx)(t.a,{href:"https://docs.testkube.io/articles/install/cli",children:"installed"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"With everything set up, we will start configuring Testkube and Tracetest."}),"\n",(0,s.jsx)(t.h3,{id:"1-connect-your-testkube-cli-to-your-testkube-environment",children:"1. Connect your Testkube CLI to your Testkube Environment"}),"\n",(0,s.jsx)(t.p,{children:"To use the Testkube CLI with your Testkube account you need to set the CLI Context. For that you need a Testkube Pro token. When the token is created, you are ready to change the Testkube CLI context:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"testkube set context -c cloud -e testkube-environment-id -o testkube-organization-id -k testkube-token\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For more information see the Testkube ",(0,s.jsx)(t.a,{href:"https://docs.testkube.io/testkube-pro/articles/managing-cli-context",children:"Connecting from the CLI"})," docs."]}),"\n",(0,s.jsx)(t.h3,{id:"2-create-a-test",children:"2. Create a Test"}),"\n",(0,s.jsxs)(t.p,{children:["For this step you need a Tracetest test. Have a look at the ",(0,s.jsx)(t.a,{href:"/cli/creating-tests",children:"Tracetest documentation"})," for details on writing tests. Here is a simple test definition example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'type: Test\nspec:\n  id: R5NITR14g\n  name: Pokeshop - List\n  description: Get a Pokemon\n  trigger:\n    type: http\n    httpRequest:\n      url: http://demo-pokemon-api.demo/pokemon?take=20&skip=0\n      method: GET\n      headers:\n        - key: Content-Type\n          value: application/json\n  specs:\n    - selector: span[tracetest.span.type="http"]\n      assertions:\n        - attr:http.method = "GET"\n    - selector: span[tracetest.span.type="database"]\n      assertions:\n        - attr:db.name = "pokeshop"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Execute the following command to create the test executor object in Testkube. Do not forget to provide the path to your Tracetest definition file using the ",(0,s.jsx)(t.code,{children:"--file"})," argument, and also the following variables:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"TRACETEST_TOKEN"}),": your ",(0,s.jsx)(t.a,{href:"/concepts/environment-tokens",children:"environment token"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"TRACETEST_ENVIRONMENT"}),": your ",(0,s.jsx)(t.a,{href:"/concepts/environments",children:"environment id"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"TRACETEST_ORGANIZATION"}),": your ",(0,s.jsx)(t.a,{href:"/concepts/organizations",children:"organization id"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'kubectl testkube create test --file my/file/location.yaml --type "tracetest/test" --name pokeshop-tracetest-test --variable TRACETEST_TOKEN=tracetest-token --variable TRACETEST_ENVIRONMENT=tracetest-environment-id --variable TRACETEST_ORGANIZATION=tracetest-organization-id\n'})}),"\n",(0,s.jsx)(t.h3,{id:"3-run-the-test",children:"3. Run the Test"}),"\n",(0,s.jsx)(t.p,{children:"To see the integration working, run the test by executing the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl testkube run test --watch pokeshop-tracetest-test\n"})}),"\n",(0,s.jsx)(t.h3,{id:"4-explore-the-results",children:"4. Explore the results"}),"\n",(0,s.jsx)(t.p,{children:"Finally, you can see the Tracetest results in your CLI:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'\ud83d\ude9a [TracetestRunner]: Preparing test run\n\ud83c\udf0d Configuring Tracetest CLI with Token\n\ud83c\udf0d Using arguments to configure CLI: [configure --token tracetest-token --organization tracetest-organization-id --environment tracetest-environment-id]\n\ud83d\ude80 Configure command tracetest configure --token tracetest-token --organization tracetest-organization-id --environment tracetest-environment-id\n\ud83d\udd2c Executing in directory :\n $ tracetest configure --token tracetest-token --organization tracetest-organization-id --environment tracetest-environment-id\n SUCCESS  Successfully configured Tracetest CLI\n\n\u2705 Execution succeeded\n\ud83c\udf0d Using arguments to run test: [run test --file /data/test-content --output pretty]\n\ud83d\ude80 Test run command tracetest run test --file /data/test-content --output pretty\n\ud83d\udd2c Executing in directory :\n $ tracetest run test --file /data/test-content --output pretty\n\n\u2714 RunGroup: #58WmDuBSR (https://app.tracetest.io/organizations/tracetest-organization-id/environments/tracetest-environment-id/run/58WmDuBSR)\n Summary: 1 passed, 0 failed, 0 pending\n  \u2714 Pokeshop - List (https://app.tracetest.io/organizations/tracetest-organization-id/environments/tracetest-environment-id/test/R5NITR14g/run/1/test) - trace id: 3cdcb56d6c226f7083f45d6b3d278051\n\t\u2714 span[tracetest.span.type="http"]\n\t\u2714 span[tracetest.span.type="database"]\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can click the run link to open the test run in the Tracetest app. From there you can explore the generated trace, update the assertions and get the test definition to execute your test once more."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"tracetest",src:n(66477).A+"",width:"960",height:"700"})}),"\n",(0,s.jsx)(t.p,{children:"You can also explore the test execution from the Testkube dashboard."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"testkube",src:n(59971).A+"",width:"960",height:"679"})}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,s.jsx)(t.p,{children:"After running this quickstart, you can now add Tracetest to the native CI/CD pipeline in your Kubernetes cluster. It allows you to execute scheduled test runs and synthetic tests. All while following the trace-based testing principle and enabling full in-depth assertions against trace data, not just the response."}),"\n",(0,s.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,s.jsxs)(t.p,{children:["Please visit our ",(0,s.jsx)(t.a,{href:"https://docs.tracetest.io/",children:"documentation"})," and join our ",(0,s.jsx)(t.a,{href:"https://dub.sh/tracetest-community",children:"Slack Community"})," for more info!"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},59971:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/testkube-resize-5d6b68e617b65a9057c804d53f02a1f6.gif"},66477:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tracetest-resize-b699d0db07f2e5631ed911b08f4ac4aa.gif"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);