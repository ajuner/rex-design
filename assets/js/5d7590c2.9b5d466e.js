(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{125:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return m})),t.d(e,"metadata",(function(){return f})),t.d(e,"toc",(function(){return h})),t.d(e,"default",(function(){return _}));var a=t(3),o=t(7),i=t(0),r=t.n(i),c=t(160),s=t(157);function u(){return r.a.createElement(s.Pagination,{pageCount:10,onChange:console.log})}var g={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/pagination.stories.tsx",loc:{start:{line:6,column:7},end:{line:8,column:1}},name:"Basic",value:u,source:"function Basic() {\n  return <Pagination pageCount={10} onChange={console.log} />;\n}",deps:function(){return[]},provides:{Pagination:s.Pagination}};function d(){return r.a.createElement(s.Pagination,{shape:"simple",pageCount:10,onChange:console.log})}u.__doc_info=g,u.__inner_source="function Basic() {\n  return <Pagination pageCount={10} onChange={console.log} />;\n}";var l={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/pagination.stories.tsx",loc:{start:{line:10,column:7},end:{line:12,column:1}},name:"Light",value:d,source:'function Light() {\n  return <Pagination shape="simple" pageCount={10} onChange={console.log} />;\n}',deps:function(){return[]},provides:{Pagination:s.Pagination}};function p(){var n=Object(i.useState)(2),e=n[0],t=n[1];return r.a.createElement(s.Pagination,{activePage:e,pageCount:10,onChange:function(n){return t(n)}})}d.__doc_info=l,d.__inner_source='function Light() {\n  return <Pagination shape="simple" pageCount={10} onChange={console.log} />;\n}';var b={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/pagination.stories.tsx",loc:{start:{line:14,column:7},end:{line:18,column:1}},name:"Controlled",value:p,source:"function Controlled() {\n  const [page, setPage] = useState(2);\n\n  return <Pagination activePage={page} pageCount={10} onChange={(val) => setPage(val)} />;\n}",deps:function(){return[]},provides:{useState:i.useState,Pagination:s.Pagination}};p.__inner_source="function Controlled() {\n  const [page, setPage] = useState(2);\n\n  return <Pagination activePage={page} pageCount={10} onChange={(val) => setPage(val)} />;\n}",p.__doc_info=b;var m={id:"pagination",title:"Pagination \u5206\u9875\u5668"},f={unversionedId:"pagination",id:"pagination",isDocsHomePage:!1,title:"Pagination \u5206\u9875\u5668",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/rex-design/docs/pagination",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/pagination.mdx",version:"current",frontMatter:{id:"pagination",title:"Pagination \u5206\u9875\u5668"},sidebar:"docs",previous:{title:"Breadcrumb \u9762\u5305\u5c51",permalink:"/rex-design/docs/breadcrumb"},next:{title:"Steps \u6b65\u9aa4\u6761",permalink:"/rex-design/docs/steps"}},h=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u7b80\u5355\u6a21\u5f0f",id:"\u7b80\u5355\u6a21\u5f0f",children:[]},{value:"\u53d7\u63a7\u5199\u6cd5",id:"\u53d7\u63a7\u5199\u6cd5",children:[]}]},{value:"API",id:"api",children:[]}],v=function(n){return function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}},P=v("Story"),C=v("PropsTable"),x={toc:h};function _(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(c.b)("wrapper",Object(a.a)({},x,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(c.b)(P,{fn:u,mdxType:"Story"}),Object(c.b)("h3",{id:"\u7b80\u5355\u6a21\u5f0f"},"\u7b80\u5355\u6a21\u5f0f"),Object(c.b)(P,{fn:d,mdxType:"Story"}),Object(c.b)("h3",{id:"\u53d7\u63a7\u5199\u6cd5"},"\u53d7\u63a7\u5199\u6cd5"),Object(c.b)(P,{fn:p,mdxType:"Story"}),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)(C,{component:s.Pagination,mdxType:"PropsTable"}))}_.isMDXComponent=!0}}]);