"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[589],{60908:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=t(74848),o=t(28453);const a={id:"overview",title:"Pokeshop API Demo",description:"As a testing ground, the Tracetest team has implemented a sample API instrumented with OpenTelemetry around the PokeAPI. The reason is to provide a microservice-based system that contains message queues, cache layers, databases, and CRUD operations.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,r={id:"live-examples/pokeshop/overview",title:"Pokeshop API Demo",description:"As a testing ground, the Tracetest team has implemented a sample API instrumented with OpenTelemetry around the PokeAPI. The reason is to provide a microservice-based system that contains message queues, cache layers, databases, and CRUD operations.",source:"@site/docs/live-examples/pokeshop/overview.mdx",sourceDirName:"live-examples/pokeshop",slug:"/live-examples/pokeshop/overview",permalink:"/live-examples/pokeshop/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/live-examples/pokeshop/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"Pokeshop API Demo",description:"As a testing ground, the Tracetest team has implemented a sample API instrumented with OpenTelemetry around the PokeAPI. The reason is to provide a microservice-based system that contains message queues, cache layers, databases, and CRUD operations.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"guidesSidebar",previous:{title:"\ud83d\udcfd\ufe0f Videos",permalink:"/examples-tutorials/videos"},next:{title:"OpenTelemetry Astronomy Shop Demo",permalink:"/live-examples/opentelemetry-store/overview"}},d={},c=[{value:"Use Cases",id:"use-cases",level:2},{value:"System Architecture",id:"system-architecture",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["As a testing ground, the team at Tracetest has implemented a sample instrumented API around the ",(0,n.jsx)(s.a,{href:"https://pokeapi.co/",children:"PokeAPI"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The idea is to have a microservice-divided system that behaves like a typical scenario by having async processes (",(0,n.jsx)(s.a,{href:"https://www.rabbitmq.com/",children:"RabbitMQ"})," and ",(0,n.jsx)(s.a,{href:"https://kafka.apache.org/",children:"Kafka"}),"), cache layers (",(0,n.jsx)(s.a,{href:"https://redis.io/",children:"Redis"}),"), database storage (",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/",children:"Postgres"}),") and simple CRUD interfaces for Pokemons."]}),"\n",(0,n.jsxs)(s.p,{children:["With this, users can get familiar with the Tracetest tool by focusing on creating assertions, visualizing the trace and identifying the different data that comes from the Collector (",(0,n.jsx)(s.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),"). Users will learn about basic instrumentation practices: what tools to use, what data to send, when, and what suggested standards need to be followed."]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.p,{children:["Want to run tests against the Pokeshop Demo without installing it locally? Click the link below and we will add you to our ",(0,n.jsx)(s.code,{children:"tracetest-demo"})," organization and give you access to the ",(0,n.jsx)(s.code,{children:"pokeshop-demo"})," org as an engineer. You can run and create your own tests!"]}),(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.a,{href:"https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/invites/invite_760904a64b4b9dc9/accept",children:["\ud83d\udc49 ",(0,n.jsx)(s.strong,{children:"Access the shared demo, here."})]})})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Source Code"}),": ",(0,n.jsx)(s.a,{href:"https://github.com/kubeshop/pokeshop",children:"https://github.com/kubeshop/pokeshop"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Running it locally"}),": ",(0,n.jsx)(s.a,{href:"https://github.com/kubeshop/pokeshop/blob/master/docs/installing.md#run-it-locally",children:"Instructions"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Running on Kubernetes"}),": ",(0,n.jsx)(s.a,{href:"https://github.com/kubeshop/pokeshop/blob/master/docs/installing.md#run-on-a-kubernetes-cluster",children:"Instructions"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(s.p,{children:"We have three use cases that use each component of this structure and that can be observed via Open Telemetry and tested with Tracetest. Each one is triggered by an API call to their respective endpoint:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/live-examples/pokeshop/use-cases/add-pokemon",children:"Add Pokemon"}),": Add a new Pokemon only relying on user input into the database."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/live-examples/pokeshop/use-cases/get-pokemon-by-id",children:"Get Pokemon by ID"}),": Given a Pokemon ID, this endpoint returns the data of a Pokemon. If the same Pokemon was queried, the API will use its cache to return it."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/live-examples/pokeshop/use-cases/list-pokemon",children:"List Pokemon"}),": Lists all Pokemons registered into Pokeshop."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/live-examples/pokeshop/use-cases/import-pokemon",children:"Import Pokemon"}),": Given a Pokemon ID, this endpoint does an async process, going to PokeAPI to get Pokemon data and adding it to the database."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/live-examples/pokeshop/use-cases/import-pokemon-from-stream",children:"Import Pokemon from Stream"}),": Listening to a Stream, this use case also does an async process, going to PokeAPI to get Pokemon data and adding it to the database."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"system-architecture",children:"System Architecture"}),"\n",(0,n.jsx)(s.p,{children:"The system is divided into two components:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["an ",(0,n.jsx)(s.strong,{children:"API"})," that serves client requests,"]}),"\n",(0,n.jsxs)(s.li,{children:["a ",(0,n.jsx)(s.strong,{children:"Queue Worker"})," who deals with background processes, receiving data from the API"]}),"\n",(0,n.jsxs)(s.li,{children:["a ",(0,n.jsx)(s.strong,{children:"Stream Worker"})," who handles import events sent from a stream"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The communication between the API and Queue Worker is made using a ",(0,n.jsx)(s.code,{children:"RabbitMQ"})," queue, and both services emit telemetry data to Jaeger and communicate with a Postgres database. Additionally, a Stream Worker listens to a ",(0,n.jsx)(s.code,{children:"Kafka"})," stream to see if there is any import event sent on it to execute."]}),"\n",(0,n.jsx)(s.p,{children:"A diagram of the system structure can be seen here:"}),"\n",(0,n.jsx)(s.mermaid,{value:"flowchart TD\n    A[(Redis)]\n    B[(Postgres)]\n    C(Node.js API)\n    D(RabbitMQ)\n    E(Queue Worker)\n    F(Jaeger)\n    G(Kafka)\n    H(Stream Worker)\n\n    C --\x3e A\n    C --\x3e B\n    C --\x3e D\n    D --\x3e E\n    E --\x3e B\n    C --\x3e F\n    E --\x3e F\n    G --\x3e H\n    H --\x3e B\n    H --\x3e F"}),"\n",(0,n.jsxs)(s.p,{children:["In our live tests, we are deploying into a single Kubernetes namespace, deployed via a ",(0,n.jsx)(s.a,{href:"https://github.com/kubeshop/pokeshop/blob/master/docs/installing.md#run-on-a-kubernetes-cluster",children:"Helm chart"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"The Pokeshop API is only accessible from within the Kubernetes cluster network as Tracetest needs to be able to reach it."})]})}function l(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var n=t(96540);const o={},a=n.createContext(o);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);