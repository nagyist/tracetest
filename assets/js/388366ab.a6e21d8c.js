"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1292],{29261:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const s={id:"creating-monitors",title:"Creating Monitors",description:"Tracetest enables creating monitors visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","monitoring","monitor","synthetic monitoring","synthetic testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},r=void 0,a={id:"web-ui/creating-monitors",title:"Creating Monitors",description:"Tracetest enables creating monitors visually in the Tracetest Web UI.",source:"@site/docs/web-ui/creating-monitors.mdx",sourceDirName:"web-ui",slug:"/web-ui/creating-monitors",permalink:"/web-ui/creating-monitors",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/web-ui/creating-monitors.mdx",tags:[],version:"current",frontMatter:{id:"creating-monitors",title:"Creating Monitors",description:"Tracetest enables creating monitors visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","monitoring","monitor","synthetic monitoring","synthetic testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Creating Test Suites",permalink:"/web-ui/creating-test-suites"},next:{title:"Enabling Black-Box Testing",permalink:"/web-ui/black-box-testing"}},c={},d=[];function l(t){const e={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",strong:"strong",...(0,i.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\ud83d\udc49 ",(0,o.jsxs)(e.strong,{children:["Join our ",(0,o.jsx)(e.a,{href:"https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/invites/a3SW5oQIg/accept",children:"shared Pokeshop API Demo environment"})," and try creating a Monitor yourself!"]})]}),"\n",(0,o.jsx)(e.p,{children:"This page showcases how to create and edit Monitors in the Web UI."}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"/concepts/monitors",children:"To read more about Monitors, check out the Monitors concepts page."})})}),"\n",(0,o.jsxs)(e.p,{children:["Select ",(0,o.jsx)(e.strong,{children:"Monitors"})," in the left menu and then click the ",(0,o.jsx)(e.strong,{children:"Create"})," button to create a new Monitor:"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1719399745/Blogposts/Tracetest-Monitors-Trace-based-testing-meets-Synthetic-Monitoring/app-stage.tracetest.io_organizations_ttorg_bbf2def23aec248a_environments_ttenv_ee3687f0d89536d7_test_pokeshop-demo-import-pokemon-queue_run_277_automate_1_1_mbr5b4.png",alt:"all monitors"})}),"\n",(0,o.jsx)(e.p,{children:"Give your Monitor a name, select a schedule, enable the monitor, and click on the Tests tab."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1719399711/Blogposts/Tracetest-Monitors-Trace-based-testing-meets-Synthetic-Monitoring/app-stage.tracetest.io_organizations_ttorg_bbf2def23aec248a_environments_ttenv_ee3687f0d89536d7_test_pokeshop-demo-import-pokemon-queue_run_277_automate_2_1_w3mwtw.png",alt:"create monitor modal"})}),"\n",(0,o.jsx)(e.p,{children:"Next, select which tests to run in the Monitor and click on the Test Suites tab."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1719492866/Blogposts/Tracetest-Monitors-Trace-based-testing-meets-Synthetic-Monitoring/app.tracetest.io_organizations_ttorg_2179a9cd8ba8dfa5_environments_ttenv_231b49e808c29e6a_monitors_page_1_o2pddt.png",alt:"Select Tests in Monitor"})}),"\n",(0,o.jsx)(e.p,{children:"Next, select which test suites to run in the Monitor and click on the Alerts tab."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1719492865/Blogposts/Tracetest-Monitors-Trace-based-testing-meets-Synthetic-Monitoring/app.tracetest.io_organizations_ttorg_2179a9cd8ba8dfa5_environments_ttenv_231b49e808c29e6a_monitors_page_1_1_cfsker.png",alt:"Select Test Suites in Monitor"})}),"\n",(0,o.jsx)(e.p,{children:'On the Alerts tab, configure sending a webhook alert and click "Create".'}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1719492867/Blogposts/Tracetest-Monitors-Trace-based-testing-meets-Synthetic-Monitoring/app.tracetest.io_organizations_ttorg_2179a9cd8ba8dfa5_environments_ttenv_231b49e808c29e6a_monitors_page_1_2_v55ws4.png",alt:"Alerts Tab"})}),"\n",(0,o.jsx)(e.p,{children:"The Monitor will run, and you will get the following result."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1719399627/Blogposts/Tracetest-Monitors-Trace-based-testing-meets-Synthetic-Monitoring/app-stage.tracetest.io_organizations_ttorg_bbf2def23aec248a_environments_ttenv_ee3687f0d89536d7_monitor_8zfKNkQSR_run_353_overview_3_tly95w.png",alt:"Edit Monitor"})}),"\n",(0,o.jsxs)(e.p,{children:["You can now view all Monitor runs in the Runs and Run Groups tab. They're labeled ",(0,o.jsx)(e.code,{children:"Monitor"})," and can be filtered by the Monitor's name."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1719399825/Blogposts/Tracetest-Monitors-Trace-based-testing-meets-Synthetic-Monitoring/app-stage.tracetest.io_organizations_ttorg_bbf2def23aec248a_environments_ttenv_ee3687f0d89536d7_runs_page_1_name_startDate_endDate_monitorName_Pokeshop_20Monitor_3_qhdltm.png",alt:"filter runs by monitor name tag"})}),"\n",(0,o.jsxs)(e.p,{children:["\ud83d\udc49 ",(0,o.jsxs)(e.strong,{children:["Join our ",(0,o.jsx)(e.a,{href:"https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/invites/a3SW5oQIg/accept",children:"shared Pokeshop API Demo environment"})," and try creating a Monitor yourself!"]})]})]})}function g(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);