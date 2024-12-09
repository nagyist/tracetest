"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[3933],{41550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=n(74848),r=n(28453);const o={id:"overview",title:"OpenTelemetry Astronomy Shop Demo",description:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. The Tracetest team has made several key contributions to this project, including providing a full suite of end to end tests.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,l={id:"live-examples/opentelemetry-store/overview",title:"OpenTelemetry Astronomy Shop Demo",description:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. The Tracetest team has made several key contributions to this project, including providing a full suite of end to end tests.",source:"@site/docs/live-examples/opentelemetry-store/overview.mdx",sourceDirName:"live-examples/opentelemetry-store",slug:"/live-examples/opentelemetry-store/overview",permalink:"/live-examples/opentelemetry-store/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/live-examples/opentelemetry-store/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"OpenTelemetry Astronomy Shop Demo",description:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. The Tracetest team has made several key contributions to this project, including providing a full suite of end to end tests.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"guidesSidebar",previous:{title:"Pokeshop API Demo",permalink:"/live-examples/pokeshop/overview"},next:{title:"OpenTelemetry Store - Add item into the shopping cart",permalink:"/live-examples/opentelemetry-store/use-cases/add-item-into-shopping-cart"}},c={},a=[{value:"Running the OpenTelemetry Astronomy Shop Demo in Docker",id:"running-the-opentelemetry-astronomy-shop-demo-in-docker",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Get and run the demo",id:"get-and-run-the-demo",level:3},{value:"Verify the web store and Telemetry",id:"verify-the-web-store-and-telemetry",level:2},{value:"Running Tracetests",id:"running-tracetests",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"System Architecture",id:"system-architecture",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. It implements an Astronomy shop in a set of microservices in different languages with OpenTelemetry enabled, intended to be used as an example of OpenTelemetry instrumentation and observability. The Tracetest team has made several key contributions to this project, including providing a full suite of end to end tests."}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["Want to run tests against the OpenTelemetry Astronomy Shop without installing it? Click the link below and we will add you to our ",(0,s.jsx)(t.code,{children:"tracetest-demo"})," organization and give you access to the ",(0,s.jsx)(t.code,{children:"opentelemetry-demo"})," org as an engineer. You can run and create your own tests!"]}),(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.a,{href:"https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/invites/invite_646747b36e9ee487/accept",children:["\ud83d\udc49 ",(0,s.jsx)(t.strong,{children:"Access the shared demo, here."})]})})]}),"\n",(0,s.jsx)(t.p,{children:"We will provide a full recipe below for running the full demo as well as running the associated Tracetests via Docker. Here are other references you may find useful:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Source Code"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-demo",children:"https://github.com/open-telemetry/opentelemetry-demo"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Running it locally in Docker"}),": ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/docs/demo/docker-deployment/",children:"Instructions"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Running on Kubernetes"}),": ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/docs/demo/kubernetes-deployment/",children:"Instructions"})]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["Tracetest is part of the official testing harness in the latest version of the OpenTelemetry Demo. Read more in the OpenTelemetry docs, ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/docs/demo/tests/",children:"here"}),"."]}),(0,s.jsx)(t.p,{children:"Or, check out the hands-on workshop on YouTube!"}),(0,s.jsx)("iframe",{width:"100%",height:"250",src:"https://www.youtube.com/embed/2MSDy3XHjtE?si=T0ItpwRyE7HbJu5V",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]}),"\n",(0,s.jsx)(t.h2,{id:"running-the-opentelemetry-astronomy-shop-demo-in-docker",children:"Running the OpenTelemetry Astronomy Shop Demo in Docker"}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Docker"}),"\n",(0,s.jsx)(t.li,{children:"Docker Compose v2.0.0+"}),"\n",(0,s.jsx)(t.li,{children:"4 GB of RAM for the application"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"get-and-run-the-demo",children:"Get and run the demo"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Clone the Demo repository:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/open-telemetry/opentelemetry-demo.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Change to the demo folder:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"cd opentelemetry-demo/\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Run Docker Compose to start the demo:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"docker compose up --no-build\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"--no-build"})," flag is used to fetch released docker images from\n",(0,s.jsx)(t.a,{href:"https://ghcr.io/open-telemetry/demo",children:"ghcr"})," instead of building from\nsource. Removing the ",(0,s.jsx)(t.code,{children:"--no-build"})," command line option will rebuild all\nimages from source. It may take more than 20 minutes to build if the\nflag is omitted."]}),"\n",(0,s.jsxs)(t.li,{children:["If you're running on Apple Silicon, run ",(0,s.jsx)(t.code,{children:"docker compose build"}),"[^1] in\norder to create local images vs. pulling them from the repository."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"verify-the-web-store-and-telemetry",children:"Verify the web store and Telemetry"}),"\n",(0,s.jsx)(t.p,{children:"Once the images are built and containers are started you can access:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Web store: ",(0,s.jsx)(t.a,{href:"http://localhost:8080/",children:(0,s.jsx)(t.code,{children:"http://localhost:8080/"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Grafana: ",(0,s.jsx)(t.a,{href:"http://localhost:8080/grafana",children:(0,s.jsx)(t.code,{children:"http://localhost:8080/grafana"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Feature Flags UI: ",(0,s.jsx)(t.a,{href:"http://localhost:8080/feature",children:(0,s.jsx)(t.code,{children:"http://localhost:8080/feature"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Load Generator UI: ",(0,s.jsx)(t.a,{href:"http://localhost:8080/loadgen",children:(0,s.jsx)(t.code,{children:"http://localhost:8080/loadgen"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Jaeger UI: ",(0,s.jsx)(t.a,{href:"http://localhost:8080/jaeger/ui",children:(0,s.jsx)(t.code,{children:"http://localhost:8080/jaeger/ui"})})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"running-tracetests",children:"Running Tracetests"}),"\n",(0,s.jsx)(t.p,{children:"The Tracetest tests for the OpenTelemetry Demo can be found in the official repo here:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Instructions to run (also shown below in this recipe)"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-demo/tree/main/test#testing-services-with-trace-based-tests",children:"Running Tracetest Tests"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full source of all tests"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-demo/tree/main/test/tracetesting",children:"Source"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To run the entire Test Suite of trace-based tests, run the command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"make run-tracetesting\n#or\ndocker compose run traceBasedTests\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To run tests for specific services, pass the name of the service as a\nparameter (using the folder names located ",(0,s.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-demo/tree/main/test/tracetesting",children:"here"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:'make run-tracetesting SERVICES_TO_TEST="service-1 service-2 ..."\n#or\ndocker compose run traceBasedTests "service-1 service-2 ..."\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For instance, if you need to run the tests for ",(0,s.jsx)(t.code,{children:"ad-service"})," and\n",(0,s.jsx)(t.code,{children:"payment-service"}),", you can run them with:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:'make run-tracetesting SERVICES_TO_TEST="ad-service payment-service"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Tracetest will be started on ",(0,s.jsx)(t.a,{href:"http://localhost:11633",children:"http://localhost:11633"})," as part of running these tests and you can view any of the tests, Test Suites, prior runs, or create and run your own tests. It is a great testbed to explore Tracetest!"]}),"\n",(0,s.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/live-examples/opentelemetry-store/use-cases/add-item-into-shopping-cart",children:"Add item into shopping cart"}),": Simulate a user choosing an item and adding it to the shopping cart."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/live-examples/opentelemetry-store/use-cases/check-shopping-cart-contents",children:"Check shopping cart content"}),": Simulate a user choosing different products and checking the shopping cart later."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/live-examples/opentelemetry-store/use-cases/checkout",children:"Checkout"}),": Simulates a user choosing a product and later doing a checkout of that product, with billing and shipping info."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/live-examples/opentelemetry-store/use-cases/get-recommended-products",children:"Get recommended products"}),": Simulates a user querying for recommended products."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"system-architecture",children:"System Architecture"}),"\n",(0,s.jsx)(t.p,{children:"This demonstration environment consists of a series of microservices, handling each aspect of the store, such as Product Catalog, Payment, Currency, etc."}),"\n",(0,s.jsxs)(t.p,{children:["A detailed description of these services can be seen ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/docs/demo/services/",children:"here"}),"\nand the architecture diagrams can be seen ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/docs/demo/architecture/",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);