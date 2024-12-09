"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[9027],{39267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(74848),r=n(28453);const i={id:"testing-distributed-services-with-tyk-opentelemetry-tracetest",title:"Testing Distributed Services Proxied by Tyk Gateway (API Gateway) with OpenTelemetry and Tracetest",description:"Quickstart on how to configure Tyk Gateway with OpenTelemetry and Tracetest to execute trace-based tests against your Distributed Services.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","end to end testing","end-to-end testing","integration testing","tyk","api gateway","opentelemetry"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,o={id:"examples-tutorials/recipes/testing-distributed-services-with-tyk-opentelemetry-tracetest",title:"Testing Distributed Services Proxied by Tyk Gateway (API Gateway) with OpenTelemetry and Tracetest",description:"Quickstart on how to configure Tyk Gateway with OpenTelemetry and Tracetest to execute trace-based tests against your Distributed Services.",source:"@site/docs/examples-tutorials/recipes/testing-distributed-services-with-tyk-opentelemetry-tracetest.mdx",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/testing-distributed-services-with-tyk-opentelemetry-tracetest",permalink:"/examples-tutorials/recipes/testing-distributed-services-with-tyk-opentelemetry-tracetest",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/testing-distributed-services-with-tyk-opentelemetry-tracetest.mdx",tags:[],version:"current",frontMatter:{id:"testing-distributed-services-with-tyk-opentelemetry-tracetest",title:"Testing Distributed Services Proxied by Tyk Gateway (API Gateway) with OpenTelemetry and Tracetest",description:"Quickstart on how to configure Tyk Gateway with OpenTelemetry and Tracetest to execute trace-based tests against your Distributed Services.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","end to end testing","end-to-end testing","integration testing","tyk","api gateway","opentelemetry"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"guidesSidebar",previous:{title:"Performance Testing with Distributed Tracing using Artillery, Playwright and Tracetest",permalink:"/examples-tutorials/recipes/running-playwright-performance-tests-with-artillery-and-tracetest"},next:{title:"Node.js and OpenTelemetry",permalink:"/examples-tutorials/recipes/running-tracetest-without-a-trace-data-store"}},c={},l=[{value:"Why is this important?",id:"why-is-this-important",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"1. The Tyk Gateway",id:"1-the-tyk-gateway",level:3},{value:"2. Tracetest",id:"2-tracetest",level:3},{value:"3. Services under Test",id:"3-services-under-test",level:3},{value:"Set up Environment Variables",id:"set-up-environment-variables",level:2},{value:"The Tracetest End To End Script",id:"the-tracetest-end-to-end-script",level:2},{value:"Steps Executed by the Script",id:"steps-executed-by-the-script",level:3},{value:"Tracetest App Results",id:"tracetest-app-results",level:3},{value:"Running the Example",id:"running-the-example",level:3},{value:"Learn More",id:"learn-more",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples/quick-start-tyk",children:"Check out the source code on GitHub here."})})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://tracetest.io/",children:"Tracetest"})," is a testing tool based on ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://tyk.io/",children:"Tyk Gateway"})," is an open-source API gateway and management platform designed to help developers control and manage their APIs. It serves as an intermediary layer between client applications and backend services, providing functionalities like authentication, rate limiting, access control, analytics, and traffic management."]}),"\n",(0,s.jsx)(t.h2,{id:"why-is-this-important",children:"Why is this important?"}),"\n",(0,s.jsx)(t.p,{children:"Testing Distributed Services behind API Gateways has been a pain point for years. Not having visibility into the infrastructure and not knowing where a test fails causes the MTTR to be higher than for other tools. Including OpenTelemetry in your stack, allows you to expose telemetry from the tools you use like Tyk Gateway and your services that you can use for both production visibility and trace-based testing."}),"\n",(0,s.jsxs)(t.p,{children:["This sample shows how to run integration tests against a Node.js API behind Tyk Gateway, using ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," and Tracetest."]}),"\n",(0,s.jsx)(t.p,{children:"The Node.js Services will fetch data from an external API, transform the data, and insert it into a Postgres table. This particular flow has two failure points that are difficult to test."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Validating that an external API request from the worker function is successful."}),"\n",(0,s.jsx)(t.li,{children:"Validating that the Postgress insert operation is successful."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Tyk Gateway Example:"})}),"\n",(0,s.jsxs)(t.p,{children:["Clone the ",(0,s.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest",children:"Tracetest GitHub Repo"})," to your local machine, and open the quick start tyk quick start example app."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:"title=Terminal",children:"git clone https://github.com/kubeshop/tracetest.git\ncd tracetest/examples/quick-start-tyk\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Tracetest Account"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign up to ",(0,s.jsx)(t.a,{href:"https://app.tracetest.io",children:(0,s.jsx)(t.code,{children:"app.tracetest.io"})})," or follow the ",(0,s.jsx)(t.a,{href:"/getting-started/overview",children:"get started"})," docs."]}),"\n",(0,s.jsxs)(t.li,{children:["Have access to the environment's ",(0,s.jsx)(t.a,{href:"https://app.tracetest.io/retrieve-token",children:"agent API key"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Docker"}),": Have ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," and ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})," installed on your machine."]}),"\n",(0,s.jsx)(t.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsxs)(t.p,{children:["This is a Docker Compose project you can find the setup in the ",(0,s.jsx)(t.code,{children:"docker-compose.yml"})," file"]}),"\n",(0,s.jsx)(t.h3,{id:"1-the-tyk-gateway",children:"1. The Tyk Gateway"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"docker-compose.yml"})," file you can find the Tyk Gateway setup."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:"title=docker-compose.yml",children:"# Tyk Gateway\ntyk-gateway:\n  image: tykio/tyk-gateway:v5.2.1\n  ports:\n    - 8080:8080\n  environment:\n    - TYK_GW_OPENTELEMETRY_ENABLED=true\n    - TYK_GW_OPENTELEMETRY_EXPORTER=grpc\n    - TYK_GW_OPENTELEMETRY_ENDPOINT=otel-collector:4317\n  volumes:\n    - ./deployments/tyk-gateway/apps:/opt/tyk-gateway/apps\n    - ./deployments/tyk-gateway/tyk.conf:/opt/tyk-gateway/tyk.conf\n  depends_on:\n    - tyk-redis\n\ntyk-redis:\n  image: redis:6.0.4\n  volumes:\n    - tyk-redis-data:/data\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Adding the configuration for OpenTelemetry to the Tyk Gateway is as simple as setting the environment variables ",(0,s.jsx)(t.code,{children:"TYK_GW_OPENTELEMETRY_ENABLED"}),", ",(0,s.jsx)(t.code,{children:"TYK_GW_OPENTELEMETRY_EXPORTER"}),", and ",(0,s.jsx)(t.code,{children:"TYK_GW_OPENTELEMETRY_ENDPOINT"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can find the Tyk Gateway apps and configuration in the ",(0,s.jsx)(t.code,{children:"deployments/tyk-gateway"})," file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:"title=deployments/tyk-gateway/apps/pokeshop-demo.json",children:'{\n  "name": "pokeshop",\n  "api_id": "1",\n  "org_id": "default",\n  "active": true,\n  "use_keyless": false,\n  "detailed_tracing": true,\n  "definition": { "location": "header", "key": "version" },\n  "auth": { "auth_header_name": "authorization" },\n  "version_data": { "not_versioned": true, "versions": { "Default": { "name": "Default" } } },\n  "proxy":\n    { "listen_path": "/", "target_url": "http://api:8081/", "strip_listen_path": true, "preserve_host_header": true },\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"2-tracetest",children:"2. Tracetest"}),"\n",(0,s.jsxs)(t.p,{children:["The tracetest setup is composed by the ",(0,s.jsx)(t.code,{children:"tracetest-e2e"})," and the ",(0,s.jsx)(t.code,{children:"tracetest-agent"})," services under the ",(0,s.jsx)(t.code,{children:"docker-compose.yml"})," file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:"title=docker-compose.yml",children:"# Cloud-based Managed Tracetest\ntracetest-agent:\n  image: kubeshop/tracetest-agent:latest\n  environment:\n    # Get the required information here: https://app.tracetest.io/retrieve-token\n    - TRACETEST_API_KEY=${TRACETEST_TOKEN}\n    - TRACETEST_ENVIRONMENT_ID=${TRACETEST_ENVIRONMENT_ID}\n\ntracetest-apply:\n  build:\n    dockerfile: Dockerfile.tracetest\n  volumes:\n    - ./resources:/resources\n  environment:\n    TRACETEST_TOKEN: ${TRACETEST_TOKEN}\n    TRACETEST_ENVIRONMENT_ID: ${TRACETEST_ENVIRONMENT_ID}\n  entrypoint:\n    - bash\n    - /resources/apply.sh\n  networks:\n    default: null\n  depends_on:\n    api:\n      condition: service_started\n    tracetest-agent:\n      condition: service_started\n\ntracetest-run:\n  build:\n    dockerfile: Dockerfile.tracetest\n  volumes:\n    - ./resources:/resources\n  environment:\n    TRACETEST_TOKEN: ${TRACETEST_TOKEN}\n    TRACETEST_ENVIRONMENT_ID: ${TRACETEST_ENVIRONMENT_ID}\n  entrypoint:\n    - bash\n    - /resources/run.sh\n  networks:\n    default: null\n  depends_on:\n    tracetest-apply:\n      condition: service_completed_successfully\n"})}),"\n",(0,s.jsx)(t.h3,{id:"3-services-under-test",children:"3. Services under Test"}),"\n",(0,s.jsxs)(t.p,{children:["As a testing ground, the example uses Tracetest's own Pokeshop Demo APP which includes the ",(0,s.jsx)(t.code,{children:"api"})," and ",(0,s.jsx)(t.code,{children:"worker"})," services."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:"title=docker-compose.yml",children:'# Demo services\n\n# pokeshop demo services\npostgres:\n  image: postgres:14\n  environment:\n    POSTGRES_USER: postgres\n    POSTGRES_PASSWORD: postgres\n    POSTGRES_DB: postgres\n  healthcheck:\n    test: ["CMD-SHELL", "pg_isready -U $$POSTGRES_USER -d $$POSTGRES_DB"]\n    interval: 1s\n    timeout: 5s\n    retries: 60\n\ncache:\n  image: redis:6\n  healthcheck:\n    test: ["CMD", "redis-cli", "ping"]\n    interval: 1s\n    timeout: 3s\n    retries: 60\n\nqueue:\n  image: rabbitmq:3.12\n  restart: unless-stopped\n  healthcheck:\n    test: rabbitmq-diagnostics -q check_running\n    interval: 1s\n    timeout: 5s\n    retries: 60\n\napi:\n  image: kubeshop/demo-pokemon-api:latest\n  restart: unless-stopped\n  pull_policy: always\n  environment:\n    REDIS_URL: cache\n    DATABASE_URL: postgresql://postgres:postgres@postgres:5432/postgres?schema=public\n    RABBITMQ_HOST: queue\n    POKE_API_BASE_URL: https://pokeapi.co/api/v2\n    COLLECTOR_ENDPOINT: http://otel-collector:4317\n    NPM_RUN_COMMAND: api\n  healthcheck:\n    test: ["CMD", "wget", "--spider", "localhost:8081"]\n    interval: 1s\n    timeout: 3s\n    retries: 60\n  depends_on:\n    postgres:\n      condition: service_healthy\n    cache:\n      condition: service_healthy\n    queue:\n      condition: service_healthy\n\nworker:\n  image: kubeshop/demo-pokemon-api:latest\n  restart: unless-stopped\n  pull_policy: always\n  environment:\n    REDIS_URL: cache\n    DATABASE_URL: postgresql://postgres:postgres@postgres:5432/postgres?schema=public\n    RABBITMQ_HOST: queue\n    POKE_API_BASE_URL: https://pokeapi.co/api/v2\n    COLLECTOR_ENDPOINT: http://otel-collector:4317\n    NPM_RUN_COMMAND: worker\n  depends_on:\n    postgres:\n      condition: service_healthy\n    cache:\n      condition: service_healthy\n    queue:\n      condition: service_healthy\n'})}),"\n",(0,s.jsx)(t.h2,{id:"set-up-environment-variables",children:"Set up Environment Variables"}),"\n",(0,s.jsxs)(t.p,{children:["Copy the ",(0,s.jsx)(t.code,{children:".env.template"})," and create a ",(0,s.jsx)(t.code,{children:".env"})," file in the same directory. Add token and Cloud Agent endpoint."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-txt",metastring:"title=.env",children:'# Get the required information here: https://app.tracetest.io/retrieve-token\n\nTRACETEST_TOKEN="<YOUR_TRACETEST_TOKEN>"\nTRACETEST_ENVIRONMENT_ID="<YOUR_ENV_ID>"\n\nPOKESHOP_DEMO_URL=http://tyk-gateway:8080\nTYK_AUTH_KEY=28d220fd77974a4facfb07dc1e49c2aa\n'})}),"\n",(0,s.jsx)(t.h2,{id:"the-tracetest-end-to-end-script",children:"The Tracetest End To End Script"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"resources/script.js"})," file contains the script that will execute the trace-based tests against the Pokeshop App proxied by a Tyk endpoint."]}),"\n",(0,s.jsx)(t.h3,{id:"steps-executed-by-the-script",children:"Steps Executed by the Script"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create a new key in the Tyk Gateway."}),"\n",(0,s.jsx)(t.li,{children:"Import a Pokemon."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"title=resources/script.js",children:"const { expect } = require('@playwright/test');\n\nconst URL = 'http://tyk-gateway:8080';\nconst API_KEY = '28d220fd77974a4facfb07dc1e49c2aa';\n\nconst getKey = async () => {\n  const params = {\n    headers: {\n      'Content-Type': 'application/json',\n      'x-tyk-authorization': API_KEY,\n      'Response-Type': 'application/json',\n    },\n  };\n\n  const data = {\n    alias: 'website',\n    expires: -1,\n    access_rights: {\n      1: {\n        api_id: '1',\n        api_name: 'pokeshop',\n        versions: ['Default'],\n      },\n    },\n  };\n\n  const res = await fetch(`${URL}/tyk/keys/create`, {\n    ...params,\n    method: 'POST',\n    body: JSON.stringify(data),\n  });\n\n  const { key } = await res.json();\n\n  return key;\n};\n\nasync function importPokemon(page) {\n  const key = await getKey();\n\n  await page.setExtraHTTPHeaders({\n    Authorization: `Bearer ${key}`,\n  });\n\n  await page.goto(URL);\n\n  expect(await page.getByText('Pokeshop')).toBeTruthy();\n\n  await page.click('text=Import');\n  await page.getByLabel('ID').fill('143');\n\n  await Promise.all([\n    page.waitForResponse((resp) => resp.url().includes('/pokemon/import') && resp.status() === 200),\n    page.getByRole('button', { name: 'OK', exact: true }).click(),\n  ]);\n}\n\nmodule.exports = { importPokemon };\n"})}),"\n",(0,s.jsx)(t.p,{children:"The output from the Playwright tests will show the test results with links to the Tracetest App."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:"title=Terminal",children:"[+] Running 2/2\n \u2714 worker Pulled                                                                                                                                                                     0.9s\n \u2714 api Pulled                                                                                                                                                                        0.8s\n[+] Creating 8/0\n \u2714 Container quick-start-tyk-tracetest-agent-1  Running                                                                                                                              0.0s\n \u2714 Container quick-start-tyk-postgres-1         Running                                                                                                                              0.0s\n \u2714 Container quick-start-tyk-jaeger-1           Running                                                                                                                              0.0s\n \u2714 Container quick-start-tyk-tyk-redis-1        Running                                                                                                                              0.0s\n \u2714 Container quick-start-tyk-cache-1            Running                                                                                                                              0.0s\n \u2714 Container quick-start-tyk-otel-collector-1   Running                                                                                                                              0.0s\n \u2714 Container quick-start-tyk-queue-1            Running                                                                                                                              0.0s\n \u2714 Container quick-start-tyk-tyk-gateway-1      Running                                                                                                                              0.0s\n[+] Running 7/7\n \u2714 Container quick-start-tyk-jaeger-1           Healthy                                                                                                                              0.5s\n \u2714 Container quick-start-tyk-postgres-1         Healthy                                                                                                                              3.2s\n \u2714 Container quick-start-tyk-cache-1            Healthy                                                                                                                              3.2s\n \u2714 Container quick-start-tyk-queue-1            Healthy                                                                                                                              3.2s\n \u2714 Container quick-start-tyk-worker-1           Started                                                                                                                              0.2s\n \u2714 Container quick-start-tyk-api-1              Started                                                                                                                              0.1s\n \u2714 Container quick-start-tyk-tracetest-apply-1  Started                                                                                                                              0.2s\n[+] Running 2/2\n \u2714 api Pulled                                                                                                                                                                        0.8s\n \u2714 worker Pulled                                                                                                                                                                     0.8s\nConfiguring Tracetest\n SUCCESS  Successfully configured Tracetest CLI\nRunning Trace-Based Tests...\n\u2714 RunGroup: #QMjWZ5jIR (https://app.tracetest.io/organizations/ttorg_ced62e34638d965e/environments/ttenv_b42fa137465c6e04/run/QMjWZ5jIR)\n Summary: 1 passed, 0 failed, 0 pending\n  \u2714 Import Pokemon (https://app.tracetest.io/organizations/ttorg_ced62e34638d965e/environments/ttenv_b42fa137465c6e04/test/4_IKfPlIg/run/13/test) - trace id: 1554d5d5904daa17f2a6854a7d7608e5\n\t\u2714 Import should return 200\n\t\u2714 All Database Spans: Processing time is less than 1s\n\t\u2714 Import Pokemon Span Should be Present\n\t\u2714 Redis should return in 20ms\n"})}),"\n",(0,s.jsx)(t.h3,{id:"tracetest-app-results",children:"Tracetest App Results"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Tracetest App Results",src:n(21525).A+"",width:"2560",height:"1600"})}),"\n",(0,s.jsx)(t.h3,{id:"running-the-example",children:"Running the Example"}),"\n",(0,s.jsx)(t.p,{children:"Spin up the deployment and test execution."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:"title=Terminal",children:"docker-compose run tracetest-run\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This will trigger the Docker Compose setup and immediately run the ",(0,s.jsx)(t.a,{href:"/tools-and-integrations/playwright",children:"trace-based tests using the Tracetest Playwright integration"})," as part of the ",(0,s.jsx)(t.code,{children:"tracetest-e2e"})," service."]}),"\n",(0,s.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,s.jsxs)(t.p,{children:["Feel free to check out our ",(0,s.jsx)(t.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:"examples in GitHub"})," and join our ",(0,s.jsx)(t.a,{href:"https://dub.sh/tracetest-community",children:"Slack Community"})," for more info!"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21525:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tyk-results-7cfd5a15f0724395787293ec5da76b80.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);