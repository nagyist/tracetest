"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[2666],{40365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(74848),i=n(28453);const s={id:"creating-tests-grpc",title:"Defining gRPC Tests as Text Files",description:"Tracetest enables developers to define tests as text files and run them using a CLI. Integrate the execution of tests in your existing CI pipeline.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,o={id:"cli/creating-tests-grpc",title:"Defining gRPC Tests as Text Files",description:"Tracetest enables developers to define tests as text files and run them using a CLI. Integrate the execution of tests in your existing CI pipeline.",source:"@site/docs/cli/creating-tests-grpc.mdx",sourceDirName:"cli",slug:"/cli/creating-tests-grpc",permalink:"/cli/creating-tests-grpc",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/cli/creating-tests-grpc.mdx",tags:[],version:"current",frontMatter:{id:"creating-tests-grpc",title:"Defining gRPC Tests as Text Files",description:"Tracetest enables developers to define tests as text files and run them using a CLI. Integrate the execution of tests in your existing CI pipeline.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Defining HTTP Tests as Text Files",permalink:"/cli/creating-tests-http"},next:{title:"Defining Kafka Tests as Text Files",permalink:"/cli/creating-tests-kafka"}},c={},d=[{value:"Authentication",id:"authentication",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["When defining a gRPC trigger, you are required to define a ",(0,r.jsx)(t.code,{children:"protobufFile"})," object containing the request Tracetest will send to your system. You also define: ",(0,r.jsx)(t.code,{children:"address"}),", ",(0,r.jsx)(t.code,{children:"method"}),", and ",(0,r.jsx)(t.code,{children:"request"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'trigger:\n  type: grpc\n  grpc:\n    protobufFile: ./path/to/file.proto\n    address: payment.opentelemetry.demo\n    method: oteldemo.PaymentService.Charge\n    request: |-\n      {\n        "amount": {\n          "currencyCode": "USD",\n          "units": 43,\n          "nanos": 130000000\n        },\n        "creditCard": {\n          "creditCardNumber": "0000-0000-0000-0000",\n          "creditCardCvv": 672,\n          "creditCardExpirationYear": 2039,\n          "creditCardExpirationMonth": 1\n        }\n      }\n'})}),"\n",(0,r.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsx)(t.p,{children:"Currently, we support the same authentication methods for gRPC requests as for HTTP requests."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Basic Authentication"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'trigger:\n  type: grpc\n  grpc:\n    protobufFile: ./path/to/file.proto\n    address: payment.opentelemetry.demo\n    method: oteldemo.PaymentService.Charge\n    auth:\n      type: basic\n      basic:\n        user: my-username\n        password: mypassword\n    request: |-\n      {\n        "amount": {\n          "currencyCode": "USD",\n          "units": 43,\n          "nanos": 130000000\n        },\n        "creditCard": {\n          "creditCardNumber": "0000-0000-0000-0000",\n          "creditCardCvv": 672,\n          "creditCardExpirationYear": 2039,\n          "creditCardExpirationMonth": 1\n        }\n      }\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"API Key Authentication"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'trigger:\n  type: grpc\n  grpc:\n    protobufFile: ./path/to/file.proto\n    address: payment.opentelemetry.demo\n    method: oteldemo.PaymentService.Charge\n    auth:\n      type: apiKey\n      apiKey:\n        key: X-Key\n        value: my-key\n        in: header # Either "header" or "query"\n    request: |-\n      {\n        "amount": {\n          "currencyCode": "USD",\n          "units": 43,\n          "nanos": 130000000\n        },\n        "creditCard": {\n          "creditCardNumber": "0000-0000-0000-0000",\n          "creditCardCvv": 672,\n          "creditCardExpirationYear": 2039,\n          "creditCardExpirationMonth": 1\n        }\n      }\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Bearer Token Authentication"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'trigger:\n  type: grpc\n  grpc:\n    protobufFile: ./path/to/file.proto\n    address: payment.opentelemetry.demo\n    method: oteldemo.PaymentService.Charge\n    auth:\n      type: bearer\n      bearer:\n        token: my-token\n    request: |-\n      {\n        "amount": {\n          "currencyCode": "USD",\n          "units": 43,\n          "nanos": 130000000\n        },\n        "creditCard": {\n          "creditCardNumber": "0000-0000-0000-0000",\n          "creditCardCvv": 672,\n          "creditCardExpirationYear": 2039,\n          "creditCardExpirationMonth": 1\n        }\n      }\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);