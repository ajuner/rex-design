(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{137:function(n,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return C})),o.d(e,"metadata",(function(){return v})),o.d(e,"toc",(function(){return _})),o.d(e,"default",(function(){return y}));var a=o(3),i=o(8),t=o(0),s=o.n(t),c=o(173),r=o(171);r.Pagination;function g(){return s.a.createElement(r.Pagination,{pageCount:10,onChange:console.log})}const l={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/pagination.stories.tsx",loc:{start:{line:6,column:7},end:{line:8,column:1}},name:"Basic",value:g,source:"function Basic() {\n  return <Pagination pageCount={10} onChange={console.log} />;\n}",deps:()=>[],provides:{Pagination:r.Pagination}};function u(){return s.a.createElement(r.Grid,{columns:1,spacingY:"l"},s.a.createElement(r.Pagination,{size:"small",pageCount:10,onChange:console.log}),s.a.createElement(r.Pagination,{size:"medium",pageCount:10,onChange:console.log}),s.a.createElement(r.Pagination,{size:"large",pageCount:10,onChange:console.log}))}g.__doc_info=l,g.__inner_source="function Basic() {\n  return <Pagination pageCount={10} onChange={console.log} />;\n}";const d={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/pagination.stories.tsx",loc:{start:{line:10,column:7},end:{line:18,column:1}},name:"Size",value:u,source:'function Size() {\n  return (\n    <Grid columns={1} spacingY="l">\n      <Pagination size="small" pageCount={10} onChange={console.log} />\n      <Pagination size="medium" pageCount={10} onChange={console.log} />\n      <Pagination size="large" pageCount={10} onChange={console.log} />\n    </Grid>\n  );\n}',deps:()=>[],provides:{Grid:r.Grid,Pagination:r.Pagination}};function p(){return s.a.createElement(r.Pagination,{hasPageSizeList:!0,pageCount:10,onChange:console.log})}u.__doc_info=d,u.__inner_source='function Size() {\n  return (\n    <Grid columns={1} spacingY="l">\n      <Pagination size="small" pageCount={10} onChange={console.log} />\n      <Pagination size="medium" pageCount={10} onChange={console.log} />\n      <Pagination size="large" pageCount={10} onChange={console.log} />\n    </Grid>\n  );\n}';const m={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/pagination.stories.tsx",loc:{start:{line:20,column:7},end:{line:22,column:1}},name:"PageSizeList",value:p,source:"function PageSizeList() {\n  return <Pagination hasPageSizeList pageCount={10} onChange={console.log} />;\n}",deps:()=>[],provides:{Pagination:r.Pagination}};function b(){return s.a.createElement(r.Pagination,{shape:"simple",pageCount:10,onChange:console.log})}p.__doc_info=m,p.__inner_source="function PageSizeList() {\n  return <Pagination hasPageSizeList pageCount={10} onChange={console.log} />;\n}";const h={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/pagination.stories.tsx",loc:{start:{line:24,column:7},end:{line:26,column:1}},name:"Light",value:b,source:'function Light() {\n  return <Pagination shape="simple" pageCount={10} onChange={console.log} />;\n}',deps:()=>[],provides:{Pagination:r.Pagination}};function P(){const[n,e]=Object(t.useState)(2);return s.a.createElement(r.Pagination,{activePage:n,pageCount:10,onChange:n=>e(n)})}b.__doc_info=h,b.__inner_source='function Light() {\n  return <Pagination shape="simple" pageCount={10} onChange={console.log} />;\n}';const f={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/pagination.stories.tsx",loc:{start:{line:28,column:7},end:{line:32,column:1}},name:"Controlled",value:P,source:"function Controlled() {\n  const [page, setPage] = useState(2);\n\n  return <Pagination activePage={page} pageCount={10} onChange={(val) => setPage(val)} />;\n}",deps:()=>[],provides:{useState:t.useState,Pagination:r.Pagination}};P.__inner_source="function Controlled() {\n  const [page, setPage] = useState(2);\n\n  return <Pagination activePage={page} pageCount={10} onChange={(val) => setPage(val)} />;\n}",P.__doc_info=f;var C={id:"pagination",title:"Pagination \u5206\u9875\u5668"},v={unversionedId:"pagination",id:"pagination",isDocsHomePage:!1,title:"Pagination \u5206\u9875\u5668",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/rex-design/docs/pagination",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/pagination.mdx",version:"current",frontMatter:{id:"pagination",title:"Pagination \u5206\u9875\u5668"},sidebar:"docs",previous:{title:"Breadcrumb \u9762\u5305\u5c51",permalink:"/rex-design/docs/breadcrumb"},next:{title:"Steps \u6b65\u9aa4\u6761",permalink:"/rex-design/docs/steps"}},_=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u7b80\u5355\u6a21\u5f0f",id:"\u7b80\u5355\u6a21\u5f0f",children:[]},{value:"\u53d7\u63a7\u5199\u6cd5",id:"\u53d7\u63a7\u5199\u6cd5",children:[]}]},{value:"API",id:"api",children:[]}],x=function(n){return function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}},S=x("Story"),z=x("PropsTable"),j={toc:_};function y(n){var e=n.components,o=Object(i.a)(n,["components"]);return Object(c.b)("wrapper",Object(a.a)({},j,o,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(c.b)("p",null,"\u5728\u6709\u5927\u91cf\u5185\u5bb9\u5c55\u73b0\u9700\u8981\u8fdb\u884c\u5206\u9875\u52a0\u8f7d\u5904\u7406\u7684\u65f6\u5019\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(c.b)(S,{fn:g,mdxType:"Story"}),Object(c.b)("h3",{id:"\u7b80\u5355\u6a21\u5f0f"},"\u7b80\u5355\u6a21\u5f0f"),Object(c.b)(S,{fn:b,mdxType:"Story"}),Object(c.b)("h3",{id:"\u53d7\u63a7\u5199\u6cd5"},"\u53d7\u63a7\u5199\u6cd5"),Object(c.b)(S,{fn:P,mdxType:"Story"}),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)(z,{component:r.Pagination,mdxType:"PropsTable"}))}y.isMDXComponent=!0}}]);