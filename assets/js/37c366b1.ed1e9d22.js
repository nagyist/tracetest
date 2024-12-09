"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[4396],{89145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(74848),s=n(28453),o=n(49489),i=n(7227);const l={id:"no-otel",title:"What if I don't have OpenTelemetry installed?",hide_table_of_contents:!0,description:"Don't have OpenTelemetry instrumentation added in your codebase? Here's how to get started!",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a="What if I don't have OpenTelemetry installed?",d={id:"getting-started/no-otel",title:"What if I don't have OpenTelemetry installed?",description:"Don't have OpenTelemetry instrumentation added in your codebase? Here's how to get started!",source:"@site/docs/getting-started/no-otel.mdx",sourceDirName:"getting-started",slug:"/getting-started/no-otel",permalink:"/getting-started/no-otel",draft:!1,unlisted:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/getting-started/no-otel.mdx",tags:[],version:"current",frontMatter:{id:"no-otel",title:"What if I don't have OpenTelemetry installed?",hide_table_of_contents:!0,description:"Don't have OpenTelemetry instrumentation added in your codebase? Here's how to get started!",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Automate Test Runs",permalink:"/getting-started/automate-test-runs"},next:{title:"Try Live Demos!",permalink:"/getting-started/try-live-demos"}},c={},h=[];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"what-if-i-dont-have-opentelemetry-installed",children:"What if I don't have OpenTelemetry installed?"}),"\n","\n","\n",(0,r.jsx)(t.p,{children:"No worries! You can get started with no code changes at all!"}),"\n",(0,r.jsx)(t.p,{children:"This page will explain getting started with OpenTelemetry:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Injecting auto instrumentation with ",(0,r.jsx)(t.strong,{children:"no code changes"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Auto instrumentation with limited code changes."}),"\n",(0,r.jsx)(t.li,{children:"Manual instrumentation with code changes."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can also find more ways to instrument OpenTelemetry in their ",(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/",children:"documentation"}),"."]}),"\n",(0,r.jsxs)(o.A,{groupId:"otel-install-options",children:[(0,r.jsxs)(i.A,{value:"zero-code-instrumentation",label:"Zero-code Instrumentation (No Code Changes)",default:!0,children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/concepts/instrumentation/zero-code/",children:"Zero-code instrumentation adds the OpenTelemetry"})," API and SDK capabilities to your application typically as an agent or agent-like installation."]}),(0,r.jsx)(t.p,{children:"Below we provide quick links to all key docs and samples."}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Language"}),(0,r.jsx)(t.th,{children:"Docs"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"C#/.NET"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/zero-code/net/",children:"https://opentelemetry.io/docs/zero-code/net/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Java"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/zero-code/java/",children:"https://opentelemetry.io/docs/zero-code/java/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"JavaScript"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/zero-code/js/",children:"https://opentelemetry.io/docs/zero-code/js/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"PHP"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/zero-code/php/",children:"https://opentelemetry.io/docs/zero-code/php/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Python"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/zero-code/python/",children:"https://opentelemetry.io/docs/zero-code/python/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Go"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/zero-code/go/",children:"https://opentelemetry.io/docs/zero-code/go/"})})]})]})]})]}),(0,r.jsxs)(i.A,{value:"auto-instrumentation",label:"Auto Instrumentation",default:!0,children:[(0,r.jsx)(t.p,{children:"Below we provide quick links to all key docs and samples."}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Language"}),(0,r.jsx)(t.th,{children:"Docs"}),(0,r.jsx)(t.th,{children:"GitHub"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"C#/.NET"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/net/automatic/",children:"https://opentelemetry.io/docs/instrumentation/net/automatic/"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-dotnet-instrumentation",children:"https://github.com/open-telemetry/opentelemetry-dotnet-instrumentation"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Java"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/java/automatic/",children:"https://opentelemetry.io/docs/instrumentation/java/automatic/"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation",children:"https://github.com/open-telemetry/opentelemetry-java-instrumentation"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"JavaScript"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/js/automatic/",children:"https://opentelemetry.io/docs/instrumentation/js/automatic/"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-js",children:"https://github.com/open-telemetry/opentelemetry-js"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"PHP"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/php/automatic/",children:"https://opentelemetry.io/docs/instrumentation/php/automatic/"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-php-instrumentation",children:"https://github.com/open-telemetry/opentelemetry-php-instrumentation"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Python"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/python/automatic/",children:"https://opentelemetry.io/docs/instrumentation/python/automatic/"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-python-contrib",children:"https://github.com/open-telemetry/opentelemetry-python-contrib"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Ruby"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/ruby/automatic/",children:"https://opentelemetry.io/docs/instrumentation/ruby/automatic/"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-ruby",children:"https://github.com/open-telemetry/opentelemetry-ruby"})})]})]})]})]}),(0,r.jsxs)(i.A,{value:"manual-instrumentation",label:"Manual Instrumentation",default:!0,children:[(0,r.jsx)(t.p,{children:"Below we provide quick links to all key docs."}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Language"}),(0,r.jsx)(t.th,{children:"Docs"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"C++"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/cpp/",children:"https://opentelemetry.io/docs/instrumentation/cpp/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"C#/.NET"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/net/",children:"https://opentelemetry.io/docs/instrumentation/net/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Erlang/Elixir"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/erlang/",children:"https://opentelemetry.io/docs/instrumentation/erlang/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Go"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/go/",children:"https://opentelemetry.io/docs/instrumentation/go/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Java"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/java/",children:"https://opentelemetry.io/docs/instrumentation/java/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"JavaScript"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/js/",children:"https://opentelemetry.io/docs/instrumentation/js/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"PHP"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/php/",children:"https://opentelemetry.io/docs/instrumentation/php/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Python"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/python/",children:"https://opentelemetry.io/docs/instrumentation/python/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Ruby"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/ruby/",children:"https://opentelemetry.io/docs/instrumentation/ruby/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Rust"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/rust/",children:"https://opentelemetry.io/docs/instrumentation/rust/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Swift"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/swift/",children:"https://opentelemetry.io/docs/instrumentation/swift/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Other"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/other/",children:"https://opentelemetry.io/docs/instrumentation/other/"})})]})]})]})]})]}),"\n",(0,r.jsx)(t.admonition,{title:"We suggest you go back to and install Tracetest!",type:"tip",children:(0,r.jsxs)(t.p,{children:["Jump back to the ",(0,r.jsx)(t.a,{href:"/getting-started/installation",children:"installation guide"})," once you have OpenTelemetry installed."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(34164),o=n(24245),i=n(56347),l=n(36494),a=n(62814),d=n(45167),c=n(81269);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=u(e),[i,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,h]=m({queryString:n,groupId:s}),[j,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),y=(()=>{const e=d??j;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{y&&a(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),x(e)}),[h,x,o]),tabValues:o}}var x=n(11062);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=a.indexOf(t),s=l[n].value;s!==r&&(d(t),i(s))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>a.push(e),onKeyDown:h,onClick:c,...o,className:(0,s.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=j(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,g.jsx)(b,{...e,...t}),(0,g.jsx)(f,{...e,...t})]})}function w(e){const t=(0,x.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);