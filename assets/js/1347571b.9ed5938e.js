"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[4461],{39980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453);const s={id:"server",title:"Configuring the Tracetest Server",description:'Tracetest Core requires a minimal configuration to be launched. Connect to a PostgreSQL database which is installed as part of the "tracetest server install" command.',keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,c={id:"core/configuration/server",title:"Configuring the Tracetest Server",description:'Tracetest Core requires a minimal configuration to be launched. Connect to a PostgreSQL database which is installed as part of the "tracetest server install" command.',source:"@site/docs/core/configuration/server.mdx",sourceDirName:"core/configuration",slug:"/core/configuration/server",permalink:"/core/configuration/server",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/core/configuration/server.mdx",tags:[],version:"current",frontMatter:{id:"server",title:"Configuring the Tracetest Server",description:'Tracetest Core requires a minimal configuration to be launched. Connect to a PostgreSQL database which is installed as part of the "tracetest server install" command.',keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/core/configuration/overview"},next:{title:"Provisioning a Tracetest Server",permalink:"/core/configuration/provisioning"}},a={},l=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Tracetest requires a very minimal configuration to be launched, needing just the connection information to connect with the PostgreSQL database which is installed as part of the server install. There are a couple of ways to provide this database connection information."}),"\n",(0,r.jsxs)(t.p,{children:["For Docker-based installs, the server configuration file is placed in the ",(0,r.jsx)(t.code,{children:"./tracetest/tracetest.yaml"})," file by default when you run the ",(0,r.jsx)(t.code,{children:"tracetest server install"})," command and select the ",(0,r.jsx)(t.code,{children:"Using Docker Compose"})," option. The configuration file is mounted to ",(0,r.jsx)(t.code,{children:"/app/config.yaml"})," within the Tracetest Docker container. When Tracetest is run with a ",(0,r.jsx)(t.code,{children:"docker compose -f tracetest/docker-compose.yaml  up -d"})," command, the server will use the contents of this file to connect to the Postgres database. All other configuration data is stored in the Postgres instance."]}),"\n",(0,r.jsxs)(t.p,{children:["This is an example of a ",(0,r.jsx)(t.code,{children:"tracetest.yaml"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"postgres:\n  host: postgres\n  user: postgres\n  password: postgres\n  port: 5432\n  dbname: postgres\n  params: sslmode=disable\n\ntelemetry:\n  exporters:\n    collector:\n      serviceName: tracetest\n      sampling: 100 # 100%\n      exporter:\n        type: collector\n        collector:\n          endpoint: otel-collector:4317\n\nserver:\n  httpPort: 11633\n  pathPrefix: /\n  telemetry:\n    exporter: collector\n    applicationExporter: collector\n"})}),"\n",(0,r.jsx)(t.p,{children:"Alternatively, we support setting a series of environment variables which can contain the connection information for the Postgres instance. If these environment variables are set, they will be used by the Tracetest server to connect to the database."}),"\n",(0,r.jsx)(t.p,{children:"The list of environment variables and example values is:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'TRACETEST_POSTGRES_HOST: "postgres"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'TRACETEST_POSTGRES_PORT: "5432"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'TRACETEST_POSTGRES_DBNAME: "postgres"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'TRACETEST_POSTGRES_USER: "postgres"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'TRACETEST_POSTGRES_PASSWORD: "postgres"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'TRACETEST_POSTGRES_PARAMS: ""'})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can also change the defaults for the Tracetest server, altering the port and path you access the dashboard from. For a Docker-based install done locally, this URL is typically ",(0,r.jsx)(t.code,{children:"http://localhost:11633/"}),". You can alter it by setting either of the environment variables or using the ",(0,r.jsx)(t.code,{children:"server"})," object in the server configuration file:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"TRACETEST_SERVER_HTTPPORT=11633"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:'TRACETEST_SERVER_PATHPREFIX="/"'})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can also initialize the server with a number of resources the first time it is launched by using ",(0,r.jsx)(t.a,{href:"/core/configuration/provisioning",children:"provisioning"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);