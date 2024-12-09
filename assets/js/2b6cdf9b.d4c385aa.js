"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1593],{65517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(74848),i=t(28453);const o={id:"provisioning-developer-environment-cli",title:"Automatically Provisioning a Developer Environment from the Tracetest CLI",description:"Quickstart on how to use the Tracetest CLI to provision a fresh new Environment for a Developer joining an Organization",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","automation","privisioning","tracetest","cli"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},r=void 0,a={id:"examples-tutorials/recipes/provisioning-developer-environment-cli",title:"Automatically Provisioning a Developer Environment from the Tracetest CLI",description:"Quickstart on how to use the Tracetest CLI to provision a fresh new Environment for a Developer joining an Organization",source:"@site/docs/examples-tutorials/recipes/provisioning-developer-environment-cli.mdx",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/provisioning-developer-environment-cli",permalink:"/examples-tutorials/recipes/provisioning-developer-environment-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/provisioning-developer-environment-cli.mdx",tags:[],version:"current",frontMatter:{id:"provisioning-developer-environment-cli",title:"Automatically Provisioning a Developer Environment from the Tracetest CLI",description:"Quickstart on how to use the Tracetest CLI to provision a fresh new Environment for a Developer joining an Organization",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","automation","privisioning","tracetest","cli"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"guidesSidebar",previous:{title:"Node.js and Sumo Logic",permalink:"/examples-tutorials/recipes/running-tracetest-with-sumologic"},next:{title:"Automatically Provisioning a Developer Environment from a Script",permalink:"/examples-tutorials/recipes/provisioning-developer-environment-script"}},c={},l=[{value:"Why is this important?",id:"why-is-this-important",level:2},{value:"Supported Provisioning Resources",id:"supported-provisioning-resources",level:2},{value:"Finding the Resource Definition",id:"finding-the-resource-definition",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Run This Quckstart Example",id:"run-this-quckstart-example",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Provisioned Resources",id:"provisioned-resources",level:2},{value:"Polling Profile",id:"polling-profile",level:3},{value:"Test Runner",id:"test-runner",level:3},{value:"Tracing Backend",id:"tracing-backend",level:3},{value:"Variable Set",id:"variable-set",level:3},{value:"Tests",id:"tests",level:3},{value:"Test Suite",id:"test-suite",level:3},{value:"Provisioning the Environment",id:"provisioning-the-environment",level:2},{value:"Running the Test Suite",id:"running-the-test-suite",level:2},{value:"Learn More",id:"learn-more",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"Version Compatibility",type:"info",children:(0,s.jsxs)(n.p,{children:["The features described here are compatible with the ",(0,s.jsx)(n.a,{href:"https://github.com/kubeshop/tracetest/releases/tag/v1.2.0",children:"Tracetest CLI v1.2.0"})," and above."]})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples/provisioning-developer-environment-cli",children:"Check out the source code on GitHub here."})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://tracetest.io/",children:"Tracetest"})," is a testing tool based on ",(0,s.jsx)(n.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," that permits you to test your distributed application. It allows you to use the trace data generated by your OpenTelemetry tools to check and assert if your application has the desired behavior defined by your test definitions."]}),"\n",(0,s.jsx)(n.h2,{id:"why-is-this-important",children:"Why is this important?"}),"\n",(0,s.jsx)(n.p,{children:"Developer experience is one of the key values we always push forward at Tracetest. This enables teams to have a consistent and reliable way to onboard new developers.\nBy using the Tracetest CLI, you can automate the process of creating a new environment for a developer joining your team.\nThis ensures that the developer has the necessary environment to start working on the project without any manual intervention."}),"\n",(0,s.jsx)(n.h2,{id:"supported-provisioning-resources",children:"Supported Provisioning Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/concepts/environments",children:"Environments"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/concepts/environment-tokens",children:"Environment Tokens"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/concepts/polling-profiles",children:"Polling Profiles"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/concepts/tests",children:"Test"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/concepts/test-suites",children:"Test Suites"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/configuration/test-runner",children:"Test Runners"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/configuration/connecting-to-data-stores/overview",children:"Tracing Backends"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/concepts/roles-and-permissions#adding-organization-members-by-email",children:"Organization Invites"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/concepts/variable-sets",children:"Variable Sets"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/analyzer/concepts",children:"Analyzer"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"finding-the-resource-definition",children:"Finding the Resource Definition"}),"\n",(0,s.jsxs)(n.p,{children:["Tracetest Definitions are found across the app, for resources under settings you can click the ",(0,s.jsx)(n.code,{children:"Resource Definition"})," button to find the YAML definition of the resource."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Resource Definition",src:t(56114).A+"",width:"1684",height:"1227"})}),"\n",(0,s.jsxs)(n.p,{children:["For Tests and Test Suites, you can find the YAML definition by clicking the ",(0,s.jsx)(n.code,{children:"Automate"})," tab."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Test Resource Definition",src:t(50809).A+"",width:"1715",height:"1241"})}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tracetest CLI"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Download & Install the ",(0,s.jsx)(n.a,{href:"https://docs.tracetest.io/cli/cli-installation-reference",children:"Tracetest CLI"})]}),"\n",(0,s.jsxs)(n.li,{children:["Login or Signup to your Tracetest account using the CLI with ",(0,s.jsx)(n.code,{children:"tracetest configure"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"run-this-quckstart-example",children:"Run This Quckstart Example"}),"\n",(0,s.jsx)(n.p,{children:"The example below is provided as part of the Tracetest GitHub repo. You can download and run the example by following these steps:\nClone the Tracetest project and go to the Privisioning Developer Environment with CLI example directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/kubeshop/tracetest\ncd tracetest/examples/provisioning-developer-environment-cli\n"})}),"\n",(0,s.jsx)(n.p,{children:"Follow these instructions to run Provision an Environment using the example:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"tracetest apply environment -f ./environment.yaml"})," command to create the environment and provision the environment."]}),"\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"tracetest list environments"})," command to list the environments."]}),"\n",(0,s.jsxs)(n.li,{children:["Configure the Tracetest CLI to point the new environment by running the ",(0,s.jsx)(n.code,{children:"tracetest configure --organization <your-org-id> --environment automated-pokeshop-demo"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:["Execute the test suite by running the ",(0,s.jsx)(n.code,{children:"tracetest run -f ./resources/suites/pokeshop.yaml --vars tracetesting-vars"})," command."]}),"\n",(0,s.jsx)(n.li,{children:"Follow the link to the Tracetest UI to view the test results."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsx)(n.p,{children:"The project structure for the Provisioning Developer Environment with CLI example is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"environment.yaml\n/resources\n  /tests\n    add-pokemon.yaml\n    import-pokemon.yaml\n    list-pokemon.yaml\n  /suites\n    pokeshop.yaml\n  /config\n    variableset.yaml\n    pollingprofile.yaml\n    runner.yaml\n    tracing-backend.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The Environment Definition includes a section to specify the resources that will be applied along with the environment. The resources are defined in the ",(0,s.jsx)(n.code,{children:"/resources"})," directory."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="environment.yaml"',children:"type: Environment\nspec:\n  id: automated-pokeshop-demo\n  name: Automated Pokeshop Demo\n  agentConfiguration:\n    serverless: true\n  resources: ./resources\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The resources are defined in the ",(0,s.jsx)(n.code,{children:"/resources"})," directory. The resources include tests, test suites, variable sets, polling profiles, test runners, and tracing backends."]}),"\n",(0,s.jsx)(n.h2,{id:"provisioned-resources",children:"Provisioned Resources"}),"\n",(0,s.jsx)(n.p,{children:"The example provisions the following resources:"}),"\n",(0,s.jsx)(n.h3,{id:"polling-profile",children:"Polling Profile"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="resources/config/pollingprofile.yaml"',children:"type: PollingProfile\nspec:\n  id: pokeshop-demo\n  name: pokeshop-demo\n  default: true\n  strategy: periodic\n  periodic:\n    retryDelay: 5s\n    timeout: 1m\n    selectorMatchRetries: 3\n"})}),"\n",(0,s.jsx)(n.h3,{id:"test-runner",children:"Test Runner"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="resources/config/runner.yaml"',children:"type: TestRunner\nspec:\n  id: current\n  name: default\n  requiredGates:\n    - test-specs\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tracing-backend",children:"Tracing Backend"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="resources/config/tracing-backend.yaml"',children:"type: DataStore\nspec:\n  id: tracing-backend\n  name: jaeger\n  type: jaeger\n  default: true\n  jaeger:\n    endpoint: demo-pokeshop-jaeger-query.demo:16685\n    tls:\n      insecure: true\n      settings: {}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"variable-set",children:"Variable Set"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="resources/config/variableset.yaml"',children:"type: VariableSet\nspec:\n  id: tracetesting-vars\n  name: tracetesting-vars\n  values:\n    - key: POKESHOP_API_URL\n      value: https://demo-pokeshop.tracetest.io\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tests",children:"Tests"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="resources/tests/add-pokemon.yaml"',children:'type: Test\nspec:\n  id: pokeshop-demo-add-pokemon\n  name: Pokeshop - Add\n  description: Add a Pokemon\n  trigger:\n    type: http\n    httpRequest:\n      method: POST\n      url: ${var:POKESHOP_API_URL}/pokemon\n      body: |\n        {\n          "name": "meowth",\n          "type":"normal",\n          "imageUrl":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",\n          "isFeatured": true\n        }\n      headers:\n        - key: Content-Type\n          value: application/json\n  specs:\n    - selector: span[tracetest.span.type="http" name="POST /pokemon" http.method="POST"]\n      name: The POST /pokemon was called correctly\n      assertions:\n        - attr:http.status_code = 201\n    - selector: span[tracetest.span.type="general" name="validate request"]\n      name: The request sent to API is valid\n      assertions:\n        - attr:validation.is_valid = "true"\n    - selector: span[tracetest.span.type="database" name="create pokeshop.pokemon" db.operation="create" db.sql.table="pokemon"]\n      name: A Pokemon was inserted on database\n      assertions:\n        - attr:db.result | json_path \'$.imageUrl\'  =  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="resources/tests/import-pokemon.yaml"',children:'type: Test\nspec:\n  id: pokeshop-demo-import-pokemon-queue\n  name: Import a Pokemon using API and MQ Worker\n  description: Import a Pokemon\n  trigger:\n    type: http\n    httpRequest:\n      method: POST\n      url: ${var:POKESHOP_API_URL}/pokemon/import\n      body: |\n        {\n          "id": 143\n        }\n      headers:\n        - key: Content-Type\n          value: application/json\n  specs:\n    - selector: span[tracetest.span.type="http" name="POST /pokemon/import" http.method="POST"]\n      name: POST /pokemon/import was called successfuly\n      assertions:\n        - attr:http.status_code  =  200\n        - attr:http.response.body | json_path \'$.id\' = "143"\n    - selector: span[tracetest.span.type="general" name="validate request"]\n      name: The request was validated correctly\n      assertions:\n        - attr:validation.is_valid = "true"\n    - selector: span[tracetest.span.type="messaging" name="queue.synchronizePokemon publish" messaging.system="rabbitmq" messaging.destination="queue.synchronizePokemon" messaging.operation="publish"]\n      name: A message was enqueued to the worker\n      assertions:\n        - attr:messaging.payload | json_path \'$.id\' = "143"\n    - selector: span[tracetest.span.type="messaging" name="queue.synchronizePokemon process" messaging.system="rabbitmq" messaging.destination="queue.synchronizePokemon" messaging.operation="process"]\n      name: A message was read by the worker\n      assertions:\n        - attr:messaging.payload | json_path \'$.fields.routingKey\' = "queue.synchronizePokemon"\n    - selector: span[tracetest.span.type="general" name="import pokemon"]\n      name: A "import pokemon" action was triggered\n      assertions:\n        - attr:tracetest.selected_spans.count >= 1\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="resources/tests/list-pokemon.yaml"',children:'type: Test\nspec:\n  id: pokeshop-demo-list-pokemon\n  name: List Pokemons\n  description: List Pokemons registered on Pokeshop API\n  trigger:\n    type: http\n    httpRequest:\n      method: GET\n      url: ${var:POKESHOP_API_URL}/pokemon?take=100&skip=0\n      headers:\n        - key: Content-Type\n          value: application/json\n  specs:\n    - selector: span[tracetest.span.type="http" name="GET /pokemon?take=100&skip=0" http.method="GET"]\n      name: GET /pokemon endpoint was called and returned valid data\n      assertions:\n        - attr:http.status_code  =  200\n    - selector: span[tracetest.span.type="database" name="count pokeshop.pokemon" db.system="postgres" db.name="pokeshop" db.user="ashketchum" db.operation="count" db.sql.table="pokemon"]\n      name: A count operation was triggered on database\n      assertions:\n        - attr:db.operation = "count"\n    - selector: span[tracetest.span.type="database" name="findMany pokeshop.pokemon" db.system="postgres" db.name="pokeshop" db.user="ashketchum" db.operation="findMany" db.sql.table="pokemon"]\n      name: A select operation was triggered on database\n      assertions:\n        - attr:db.operation = "findMany"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"test-suite",children:"Test Suite"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="resources/suites/pokeshop.yaml"',children:"type: TestSuite\nspec:\n  id: pokeshop-demo-test-suite\n  name: Pokeshop Demo Test Suite\n  steps:\n    - ../tests/add-pokemon.yaml\n    - ../tests/import-pokemon.yaml\n    - ../tests/list-pokemons.yaml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"provisioning-the-environment",children:"Provisioning the Environment"}),"\n",(0,s.jsx)(n.p,{children:"After installing the Tracetest CLI and configuring it with your account, you can run the following command to provision the environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tracetest apply environment -f ./environment.yaml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-the-test-suite",children:"Running the Test Suite"}),"\n",(0,s.jsx)(n.p,{children:"Finally, you can run the test suite by executing the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tracetest configure --environment automated-pokeshop-demo\ntracetest run -f ./resources/suites/pokeshop.yaml --vars tracetesting-vars\n"})}),"\n",(0,s.jsx)(n.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,s.jsxs)(n.p,{children:["Please visit our ",(0,s.jsx)(n.a,{href:"https://github.com/kubeshop/tracetest/tree/main/examples",children:"examples in GitHub"})," and join our ",(0,s.jsx)(n.a,{href:"https://dub.sh/tracetest-community",children:"Slack Community"})," for more info!"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},56114:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/definition-42a2d0941c569028e35882f1ce71cb59.gif"},50809:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/test-34a5a99b2ed69fc12277e3f6df4d4b26.gif"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);