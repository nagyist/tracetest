"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[2034],{61860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(74848),a=n(28453);const r={id:"artillery-plugin",title:"Performance and Trace-Based Tests with Tracetest and Artillery Plugin",description:"Quickstart on how to use the Tracetest x Artillery Integration to enhance Performance Tests with Trace-Based Testing using Tracetest.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","artillery","load testing","performance testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,o={id:"tools-and-integrations/artillery-plugin",title:"Performance and Trace-Based Tests with Tracetest and Artillery Plugin",description:"Quickstart on how to use the Tracetest x Artillery Integration to enhance Performance Tests with Trace-Based Testing using Tracetest.",source:"@site/docs/tools-and-integrations/artillery-plugin.mdx",sourceDirName:"tools-and-integrations",slug:"/tools-and-integrations/artillery-plugin",permalink:"/tools-and-integrations/artillery-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/tools-and-integrations/artillery-plugin.mdx",tags:[],version:"current",frontMatter:{id:"artillery-plugin",title:"Performance and Trace-Based Tests with Tracetest and Artillery Plugin",description:"Quickstart on how to use the Tracetest x Artillery Integration to enhance Performance Tests with Trace-Based Testing using Tracetest.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","artillery","load testing","performance testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"guidesSidebar",previous:{title:"Creating alerts with PagerDuty",permalink:"/tools-and-integrations/pagerduty"},next:{title:"Performance and Trace-Based Tests with Tracetest and Artillery Engine",permalink:"/tools-and-integrations/artillery-engine"}},l={},c=[{value:"Why is this important?",id:"why-is-this-important",level:2},{value:"The <code>artillery-plugin-tracetest</code> NPM Package",id:"the-artillery-plugin-tracetest-npm-package",level:2},{value:"Today You&#39;ll Learn How to integrate Trace-Based Tests with your Aritllery Test Scripts",id:"today-youll-learn-how-to-integrate-trace-based-tests-with-your-aritllery-test-scripts",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Run This Quckstart Example",id:"run-this-quckstart-example",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Installing the <code>artillery-plugin-tracetest</code> NPM Package",id:"installing-the-artillery-plugin-tracetest-npm-package",level:2},{value:"Tracetest Test Definitions",id:"tracetest-test-definitions",level:2},{value:"Creating the Artillery Test Script",id:"creating-the-artillery-test-script",level:2},{value:"Running the Full Example",id:"running-the-full-example",level:2},{value:"Finding the Results",id:"finding-the-results",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Learn More",id:"learn-more",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Commercial Feature",type:"tip",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://tracetest.io/pricing",children:"Feature available only in Cloud-based Managed Tracetest & Enterprise Self-hosted Tracetest."})})}),"\n",(0,s.jsx)(t.admonition,{title:"Version Compatibility",type:"info",children:(0,s.jsxs)(t.p,{children:["This integration is compatible with ",(0,s.jsx)(t.a,{href:"https://github.com/artilleryio/artillery/releases/tag/artillery-2.0.10",children:"Artillery v2.0.10"})," and above."]})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples/quick-start-artillery",children:"Check out the source code on GitHub here."})})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://app.tracetest.io/",children:"Tracetest"})," is a testing tool based on ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://artillery.io/",children:"Artillery"})," is a modern, powerful load-testing toolkit. Artillery is designed to help developers and testers simulate traffic to their applications, APIs, and microservices. It allows users to define scenarios to test how their systems behave under different loads."]}),"\n",(0,s.jsx)(t.h2,{id:"why-is-this-important",children:"Why is this important?"}),"\n",(0,s.jsx)(t.p,{children:"Artillery is it's a great tool in its own right that allows you to replicate most of the production challenges you might encounter. But, as with all of the tools that only test the initial transaction between the client side and the server, you can only run validations against the immediate response from the service."}),"\n",(0,s.jsxs)(t.h2,{id:"the-artillery-plugin-tracetest-npm-package",children:["The ",(0,s.jsx)(t.code,{children:"artillery-plugin-tracetest"})," NPM Package"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/artillery-plugin-tracetest",children:(0,s.jsx)(t.code,{children:"artillery-plugin-tracetest"})})," package allows you to extend the Artillery's HTTP engine to enhance your performance tests with trace-based testing. It uses Artillery's plugin system to intercept requests and attaches the trace ID to the request headers. This allows you to run trace-based tests using the Tracetest API."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Do you want to use Tracetest Triggers as an entry point for your performance tests? Take a look at the ",(0,s.jsx)(t.a,{href:"./artillery-engine",children:(0,s.jsx)(t.code,{children:"artillery-engine-tracetest"})})," for a complete guide on how to do it."]})}),"\n",(0,s.jsx)(t.h2,{id:"today-youll-learn-how-to-integrate-trace-based-tests-with-your-aritllery-test-scripts",children:"Today You'll Learn How to integrate Trace-Based Tests with your Aritllery Test Scripts"}),"\n",(0,s.jsxs)(t.p,{children:["This is a simple quick-start guide on how to use the Tracetest ",(0,s.jsx)(t.code,{children:"artillery-plugin-tracetest"})," NPM package to enhance your Artillery Test Scripts with trace-based testing. The infrastructure will use the Pokeshop Demo as a testing ground, triggering requests against it and generating telemetry data."]}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Tracetest Account"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign up to ",(0,s.jsx)(t.a,{href:"https://app.tracetest.io",children:(0,s.jsx)(t.code,{children:"app.tracetest.io"})})," or follow the ",(0,s.jsx)(t.a,{href:"/getting-started/overview",children:"get started"})," docs."]}),"\n",(0,s.jsxs)(t.li,{children:["Create an ",(0,s.jsx)(t.a,{href:"/concepts/environments",children:"environment"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Create an ",(0,s.jsx)(t.a,{href:"/concepts/environment-tokens",children:"environment token"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Have access to the environment's ",(0,s.jsx)(t.a,{href:"/configuration/agent",children:"agent API key"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Docker"}),": Have ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," and ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})," installed on your machine."]}),"\n",(0,s.jsx)(t.h2,{id:"run-this-quckstart-example",children:"Run This Quckstart Example"}),"\n",(0,s.jsx)(t.p,{children:"The example below is provided as part of the Tracetest project. You can download and run the example by following these steps:"}),"\n",(0,s.jsx)(t.p,{children:"Clone the Tracetest project and go to the TypeScript Quickstart:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/kubeshop/tracetest\ncd tracetest/examples/quick-start-artillery\n"})}),"\n",(0,s.jsx)(t.p,{children:"Follow these instructions to run the included demo app and TypeScript example:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Copy the ",(0,s.jsx)(t.code,{children:".env.template"})," file to ",(0,s.jsx)(t.code,{children:".env"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Log into the ",(0,s.jsx)(t.a,{href:"https://app.tracetest.io/",children:"Tracetest app"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["This example is configured to use Jaeger. Ensure the environment you will be utilizing to run this example is also configured to use the Jaeger Tracing Backend by clicking on Settings, Tracing Backend, Jaeger, updating the URL to ",(0,s.jsx)(t.code,{children:"jaeger:16685"}),", Test Connection and Save."]}),"\n",(0,s.jsxs)(t.li,{children:["Fill out the ",(0,s.jsx)(t.a,{href:"https://docs.tracetest.io/concepts/environment-tokens",children:"token"})," and ",(0,s.jsx)(t.a,{href:"https://docs.tracetest.io/concepts/agent",children:"agent API key"})," details by editing your ",(0,s.jsx)(t.code,{children:".env"})," file. You can find these values in the Settings area for your environment."]}),"\n",(0,s.jsxs)(t.li,{children:["Run ",(0,s.jsx)(t.code,{children:"docker compose up -d"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Run ",(0,s.jsx)(t.code,{children:"npm i"})," to install the required dependencies."]}),"\n",(0,s.jsxs)(t.li,{children:["Run ",(0,s.jsx)(t.code,{children:"npm run test:plugin"})," to run the example."]}),"\n",(0,s.jsx)(t.li,{children:"The output will show the test results and the Tracetest URL for each test run."}),"\n",(0,s.jsx)(t.li,{children:"Follow the links in the log to view the test runs programmatically created by the Atillery execution."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Follow along with the sections below for an in detail breakdown of what the example you just ran did and how it works."}),"\n",(0,s.jsx)(t.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsx)(t.p,{children:"The quick-start Artillery project is built with Docker Compose."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/live-examples/pokeshop/overview",children:"Pokeshop Demo App"})," is a complete example of a distributed application using different back-end and front-end services. We will be launching it and running tests against it as part of this example."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"docker-compose.yaml"})," file in the root directory of the quick start runs the Pokeshop Demo app, the OpenTelemetry Collector, Jaeger, and the ",(0,s.jsx)(t.a,{href:"/concepts/agent",children:"Tracetest Agent"})," setup."]}),"\n",(0,s.jsxs)(t.p,{children:["The Artillery Plugin quick start has two primary files: a Test Script file ",(0,s.jsx)(t.code,{children:"plugin-test.yaml"})," that defines the Artillery execution, and a Tracetest Definition file ",(0,s.jsx)(t.code,{children:"import-pokemon-trace-id.yaml"})," that contains the specs and execution of the trace-based tests."]}),"\n",(0,s.jsxs)(t.h2,{id:"installing-the-artillery-plugin-tracetest-npm-package",children:["Installing the ",(0,s.jsx)(t.code,{children:"artillery-plugin-tracetest"})," NPM Package"]}),"\n",(0,s.jsxs)(t.p,{children:["The first step when using the Artillery Plugin NPM package is to install the ",(0,s.jsx)(t.code,{children:"artillery-plugin-tracetest"})," NPM Package. It is as easy as running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm i artillery-plugin-tracetest\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Once you have installed the ",(0,s.jsx)(t.code,{children:"artillery-plugin-tracetest"})," package, you can use it as part of your Artillery Test Scripts to trigger trace-based tests and run checks against the resulting telemetry data."]}),"\n",(0,s.jsx)(t.h2,{id:"tracetest-test-definitions",children:"Tracetest Test Definitions"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"import-pokemon-trace-id.yaml"})," file contains the YAML version of the test definitions that will be used to run the tests. It uses the Artillery trigger to execute requests against the Pokeshop Demo."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'type: Test\nspec:\n  id: artillery-plugin-import-pokemon\n  name: "Artillery Plugin: Import a Pokemon"\n  trigger:\n    type: traceid\n    traceid:\n      id: ${var:TRACE_ID}\n\n  # test specs and assertions\n  specs:\n    - selector: span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"]\n      name: "All HTTP Spans: Status  code is 200"\n      assertions:\n        - attr:http.status_code = 200\n    - selector: span[tracetest.span.type="http" name="GET" http.method="GET"]\n      assertions:\n        - attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n    - selector: span[tracetest.span.type="database"]\n      name: "All Database Spans: Processing time is less than 1s"\n      assertions:\n        - attr:tracetest.span.duration < 1s\n    - selector: span[tracetest.span.type="http" name="post" http.method="POST"]\n      name: Response time should be fast\n      assertions:\n        - attr:response.time.ms < 100\n\n  # generated output\n  outputs:\n    - name: DATABASE_POKEMON_ID\n      selector: span[tracetest.span.type="database" name="create postgres.pokemon" db.system="postgres" db.name="postgres" db.user="postgres" db.operation="create" db.sql.table="pokemon"]\n      value: attr:db.result | json_path \'$.id\'\n'})}),"\n",(0,s.jsx)(t.h2,{id:"creating-the-artillery-test-script",children:"Creating the Artillery Test Script"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"plugin-test.yaml"})," file contains the Artillery Test Script that will be used to trigger requests against the Pokeshop Demo and run trace-based tests. The steps executed by this script are the following:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Congures a phase that will execute 10 requests against the Pokeshop Demo url ",(0,s.jsx)(t.code,{children:"http://localhost:8081"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Defines two plugins, the ",(0,s.jsx)(t.code,{children:"public-metrics"})," to send Artillery's telmetry data to the OpenTelemetry Collector and the ",(0,s.jsx)(t.code,{children:"tracetest"})," plugin."]}),"\n",(0,s.jsxs)(t.li,{children:["Includes the API ",(0,s.jsx)(t.code,{children:"token"})," to access the Tracetest APIs and the Tracetest ",(0,s.jsx)(t.code,{children:"definition"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Defines the scenarios to execute triggering a request to the ",(0,s.jsx)(t.code,{children:"POST pokemon/import"})," endpoint sending ",(0,s.jsx)(t.code,{children:"6"})," (Charizard) as the Pokemon Id."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'config:\n  target: "http://localhost:8081"\n  phases:\n    - duration: 2\n      arrivalRate: 5\n  plugins:\n    publish-metrics:\n      - type: "open-telemetry"\n        serviceName: "artillery"\n        metrics:\n          reporter: otlp-http\n          endpoint: "http://localhost:4318/v1/metrics"\n          attributes:\n            environment: "test"\n            tool: "Artillery"\n            type: "Load test"\n\n        traces:\n          reporter: otlp-http\n          endpoint: "http://localhost:4318/v1/traces"\n          attributes:\n            environment: "test"\n            tool: "Artillery"\n    tracetest:\n      token: tttoken_dfa1e954d47d1857\n      definition: import-pokemon-trace-id.yaml\nscenarios:\n  - name: "Import Pokemon"\n    flow:\n      - post:\n          url: "/pokemon/import"\n          json:\n            id: 6\n'})}),"\n",(0,s.jsx)(t.h2,{id:"running-the-full-example",children:"Running the Full Example"}),"\n",(0,s.jsx)(t.p,{children:"To start the full setup, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker compose up -d\nnpm run test:plugin\n"})}),"\n",(0,s.jsx)(t.h2,{id:"finding-the-results",children:"Finding the Results"}),"\n",(0,s.jsx)(t.p,{children:"The output from the Tracetest Plugin script should be visible in the console log after running the test command. This log will show links to Tracetest for each of the test runs invoked by the Artillery Testing Script. Click a link to launch Tracetest and view the test result."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'> quick-start-artillery@1.0.0 test:plugin\n> artillery run plugin-test.yaml\n\nTest run id: t6pjz_zbaqcap7rhab59xn9kygn66bg8cfq_fqjc\nPhase started: unnamed (index: 0, duration: 2s) 15:59:46(-0600)\n\nPhase completed: unnamed (index: 0, duration: 2s) 15:59:48(-0600)\n\n--------------------------------------\nMetrics for period to: 15:59:50(-0600) (width: 2.509s)\n--------------------------------------\n\nhttp.codes.200: ................................................................ 10\nhttp.downloaded_bytes: ......................................................... 80\nhttp.request_rate: ............................................................. 10/sec\nhttp.requests: ................................................................. 10\nhttp.response_time:\n  min: ......................................................................... 1\n  max: ......................................................................... 2\n  mean: ........................................................................ 1.6\n  median: ...................................................................... 2\n  p95: ......................................................................... 2\n  p99: ......................................................................... 2\nhttp.responses: ................................................................ 10\ntracetest.tests_started: ....................................................... 10\nvusers.created: ................................................................ 10\nvusers.created_by_name.Import Pokemon: ......................................... 10\n\n\n--------------------------------------\nMetrics for period to: 16:00:10(-0600) (width: 5.71s)\n--------------------------------------\n\ntracetest.tests_failed: ........................................................ 2\ntracetest.tests_succeeded: ..................................................... 1\nvusers.completed: .............................................................. 3\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 16656.5\n  max: ......................................................................... 22462.5\n  mean: ........................................................................ 18737.5\n  median: ...................................................................... 17158.9\n  p95: ......................................................................... 17158.9\n  p99: ......................................................................... 17158.9\n\n\nAll VUs finished. Total time: 30 seconds\n\n--------------------------------\nSummary report @ 16:00:17(-0600)\n--------------------------------\n\nhttp.codes.200: ................................................................ 10\nhttp.downloaded_bytes: ......................................................... 80\nhttp.request_rate: ............................................................. 5/sec\nhttp.requests: ................................................................. 10\nhttp.response_time:\n  min: ......................................................................... 1\n  max: ......................................................................... 2\n  mean: ........................................................................ 1.6\n  median: ...................................................................... 2\n  p95: ......................................................................... 2\n  p99: ......................................................................... 2\nhttp.responses: ................................................................ 10\ntracetest.tests_failed: ........................................................ 9\ntracetest.tests_started: ....................................................... 10\ntracetest.tests_succeeded: ..................................................... 1\nvusers.completed: .............................................................. 10\nvusers.created: ................................................................ 10\nvusers.created_by_name.Import Pokemon: ......................................... 10\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 16656.5\n  max: ......................................................................... 27889.9\n  mean: ........................................................................ 23730.5\n  median: ...................................................................... 25091.6\n  p95: ......................................................................... 27181.5\n  p99: ......................................................................... 27181.5\n\u2838 \u2714 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/104) - trace id: 787ff20c554c1e21cc90a7c3eec8d2ee\n\n\u2718 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/105) - trace id: 44a208bbe579c513c5f79ac8838aeb46\n  > All HTTP Spans: Status  code is 200 (span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"])\n\n    \u2022 Expected: attr:http.status_code = 200\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.status_code" from. To fix this error, create a selector matching at least one span.\n  > span[tracetest.span.type="http" name="GET" http.method="GET"]\n\n    \u2022 Expected: attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.route" from. To fix this error, create a selector matching at least one span.\n  > All Database Spans: Processing time is less than 1s (span[tracetest.span.type="database"])\n  > Response time should be fast (span[tracetest.span.type="http" name="post" http.method="POST"])\n\n\u2718 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/106) - trace id: a677b4c7b68f4d692087c860686699fc\n  > All HTTP Spans: Status  code is 200 (span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"])\n\n    \u2022 Expected: attr:http.status_code = 200\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.status_code" from. To fix this error, create a selector matching at least one span.\n  > span[tracetest.span.type="http" name="GET" http.method="GET"]\n\n    \u2022 Expected: attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.route" from. To fix this error, create a selector matching at least one span.\n  > All Database Spans: Processing time is less than 1s (span[tracetest.span.type="database"])\n  > Response time should be fast (span[tracetest.span.type="http" name="post" http.method="POST"])\n\n\u2718 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/107) - trace id: e6e3963c0975367d89308acd4e3c379c\n  > All HTTP Spans: Status  code is 200 (span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"])\n\n    \u2022 Expected: attr:http.status_code = 200\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.status_code" from. To fix this error, create a selector matching at least one span.\n  > span[tracetest.span.type="http" name="GET" http.method="GET"]\n\n    \u2022 Expected: attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.route" from. To fix this error, create a selector matching at least one span.\n  > All Database Spans: Processing time is less than 1s (span[tracetest.span.type="database"])\n  > Response time should be fast (span[tracetest.span.type="http" name="post" http.method="POST"])\n\n\u2718 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/108) - trace id: 22684fc7a5d43ed9e44e24c7135a6aa5\n  > All HTTP Spans: Status  code is 200 (span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"])\n\n    \u2022 Expected: attr:http.status_code = 200\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.status_code" from. To fix this error, create a selector matching at least one span.\n  > span[tracetest.span.type="http" name="GET" http.method="GET"]\n\n    \u2022 Expected: attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.route" from. To fix this error, create a selector matching at least one span.\n  > All Database Spans: Processing time is less than 1s (span[tracetest.span.type="database"])\n  > Response time should be fast (span[tracetest.span.type="http" name="post" http.method="POST"])\n\n\u2718 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/109) - trace id: c73da8f9a009dc365f19f8701924c9cc\n  > All HTTP Spans: Status  code is 200 (span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"])\n\n    \u2022 Expected: attr:http.status_code = 200\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.status_code" from. To fix this error, create a selector matching at least one span.\n  > span[tracetest.span.type="http" name="GET" http.method="GET"]\n\n    \u2022 Expected: attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.route" from. To fix this error, create a selector matching at least one span.\n  > All Database Spans: Processing time is less than 1s (span[tracetest.span.type="database"])\n  > Response time should be fast (span[tracetest.span.type="http" name="post" http.method="POST"])\n\n\u2718 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/110) - trace id: 98c74bd6e6501f6721f058be4f5bf311\n  > All HTTP Spans: Status  code is 200 (span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"])\n\n    \u2022 Expected: attr:http.status_code = 200\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.status_code" from. To fix this error, create a selector matching at least one span.\n  > span[tracetest.span.type="http" name="GET" http.method="GET"]\n\n    \u2022 Expected: attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.route" from. To fix this error, create a selector matching at least one span.\n  > All Database Spans: Processing time is less than 1s (span[tracetest.span.type="database"])\n  > Response time should be fast (span[tracetest.span.type="http" name="post" http.method="POST"])\n\n\u2718 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/111) - trace id: 5c722a53b527f7334800dd42d98f5a49\n  > All HTTP Spans: Status  code is 200 (span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"])\n\n    \u2022 Expected: attr:http.status_code = 200\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.status_code" from. To fix this error, create a selector matching at least one span.\n  > span[tracetest.span.type="http" name="GET" http.method="GET"]\n\n    \u2022 Expected: attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.route" from. To fix this error, create a selector matching at least one span.\n  > All Database Spans: Processing time is less than 1s (span[tracetest.span.type="database"])\n  > Response time should be fast (span[tracetest.span.type="http" name="post" http.method="POST"])\n\n\u2718 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/112) - trace id: 53ea977eb682fc5dc416f0425dc0ac5e\n  > All HTTP Spans: Status  code is 200 (span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"])\n\n    \u2022 Expected: attr:http.status_code = 200\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.status_code" from. To fix this error, create a selector matching at least one span.\n  > span[tracetest.span.type="http" name="GET" http.method="GET"]\n\n    \u2022 Expected: attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.route" from. To fix this error, create a selector matching at least one span.\n  > All Database Spans: Processing time is less than 1s (span[tracetest.span.type="database"])\n  > Response time should be fast (span[tracetest.span.type="http" name="post" http.method="POST"])\n\n\u2718 Artillery Plugin: Import a Pokemon (https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/environments/ttenv_231b49e808c29e6a/test/artillery-plugin-import-pokemon/run/113) - trace id: d1de80e71c85119b62c8495f3ec42e81\n  > All HTTP Spans: Status  code is 200 (span[tracetest.span.type="general" name = "validate request"] span[tracetest.span.type="http"])\n\n    \u2022 Expected: attr:http.status_code = 200\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.status_code" from. To fix this error, create a selector matching at least one span.\n  > span[tracetest.span.type="http" name="GET" http.method="GET"]\n\n    \u2022 Expected: attr:http.route = "/api/v2/pokemon/${var:POKEMON_ID}"\n\n      No Spans\n      Received: resolution error: there are no matching spans to retrieve the attribute "http.route" from. To fix this error, create a selector matching at least one span.\n  > All Database Spans: Processing time is less than 1s (span[tracetest.span.type="database"])\n  > Response time should be fast (span[tracetest.span.type="http" name="post" http.method="POST"])\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Most of the tests will fail as the import Pokemon flow reads from memory if the info already exists. This is expected behavior."})}),"\n",(0,s.jsx)(t.admonition,{title:"View these tests in our Demo environment",type:"tip",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/invites/invite_760904a64b4b9dc9/accept",children:"\ud83d\udc49 Join our shared Pokeshop API Demo environment."})})}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,s.jsx)(t.p,{children:"After running the initial set of tests, you can click the run link for any of them, update the assertions, and run the scripts once more. This flow enables complete a trace-based TDD flow."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"assertions",src:n(31681).A+"",width:"960",height:"553"})}),"\n",(0,s.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,s.jsxs)(t.p,{children:["Please visit our ",(0,s.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:"examples in GitHub"})," and join our ",(0,s.jsx)(t.a,{href:"https://dub.sh/tracetest-community",children:"Slack Community"})," for more info!"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},31681:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tracetest-cloud-typescript-resize-bd6c9a72c3825d10494de1a1fbf3171c.gif"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);