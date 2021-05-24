(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{155:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return v})),n.d(o,"metadata",(function(){return G})),n.d(o,"toc",(function(){return S})),n.d(o,"default",(function(){return y}));var a=n(3),i=n(8),r=n(0),t=n.n(r),d=n(164),c=n(162);const u=[{label:"\u76d2\u9a6c\u9c9c\u751f",value:"hmxs"},{label:"\u76d2\u9a6c Mini",value:"mini"},{label:"\u76d2\u9a6cX\u4f1a\u5458\u5e97",value:"hmx"},{label:"\u76d2\u9a6c\u83dc\u573a",value:"hmcc",disabled:!0}],l={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/radio.stories.tsx",loc:{start:{line:6,column:0},end:{line:11,column:2}},name:"dataSource",value:u,source:"const dataSource = [\n  { label: '\u76d2\u9a6c\u9c9c\u751f', value: 'hmxs' },\n  { label: '\u76d2\u9a6c Mini', value: 'mini' },\n  { label: '\u76d2\u9a6cX\u4f1a\u5458\u5e97', value: 'hmx' },\n  { label: '\u76d2\u9a6c\u83dc\u573a', value: 'hmcc', disabled: true },\n];",deps:()=>[],provides:{}};function s(){return t.a.createElement(c.Group,null,t.a.createElement(c.Radio,null,"\u76d2\u9a6c\u5148\u751f"),t.a.createElement(c.Radio,{checked:!0},"\u76d2\u9a6c\u5148\u751f"),t.a.createElement(c.Radio,{disabled:!0},"\u76d2\u9a6c\u8ff7\u4f60"),t.a.createElement(c.Radio,{checked:!0,disabled:!0},"\u76d2\u9a6c\u4f1a\u5458\u5e97"))}const p={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/radio.stories.tsx",loc:{start:{line:13,column:7},end:{line:24,column:1}},name:"Basic",value:s,source:"function Basic() {\n  return (\n    <Group>\n      <Radio>\u76d2\u9a6c\u5148\u751f</Radio>\n      <Radio checked>\u76d2\u9a6c\u5148\u751f</Radio>\n      <Radio disabled>\u76d2\u9a6c\u8ff7\u4f60</Radio>\n      <Radio checked disabled>\n        \u76d2\u9a6c\u4f1a\u5458\u5e97\n      </Radio>\n    </Group>\n  );\n}",deps:()=>[],provides:{Group:c.Group,Radio:c.Radio}};function b(){return t.a.createElement(c.Group,null,t.a.createElement("h3",null,"\u65e0\u9ed8\u8ba4\u503c"),t.a.createElement(c.RadioGroup,{dataSource:u,onChange:console.log}),t.a.createElement("h3",null,"\u6709\u9ed8\u8ba4\u503c"),t.a.createElement(c.RadioGroup,{defaultValue:"mini",dataSource:u,onChange:console.log}))}s.__doc_info=p,s.__inner_source="function Basic() {\n  return (\n    <Group>\n      <Radio>\u76d2\u9a6c\u5148\u751f</Radio>\n      <Radio checked>\u76d2\u9a6c\u5148\u751f</Radio>\n      <Radio disabled>\u76d2\u9a6c\u8ff7\u4f60</Radio>\n      <Radio checked disabled>\n        \u76d2\u9a6c\u4f1a\u5458\u5e97\n      </Radio>\n    </Group>\n  );\n}";const m={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/radio.stories.tsx",loc:{start:{line:26,column:7},end:{line:35,column:1}},name:"GroupDemo",value:b,source:'function GroupDemo() {\n  return (\n    <Group>\n      <h3>\u65e0\u9ed8\u8ba4\u503c</h3>\n      <RadioGroup dataSource={dataSource} onChange={console.log} />\n      <h3>\u6709\u9ed8\u8ba4\u503c</h3>\n      <RadioGroup defaultValue="mini" dataSource={dataSource} onChange={console.log} />\n    </Group>\n  );\n}',deps:()=>[l],provides:{Group:c.Group,RadioGroup:c.RadioGroup}};function h(){return t.a.createElement(c.RadioGroup,{direction:"column",dataSource:u,onChange:console.log})}b.__doc_info=m,b.__inner_source='function GroupDemo() {\n  return (\n    <Group>\n      <h3>\u65e0\u9ed8\u8ba4\u503c</h3>\n      <RadioGroup dataSource={dataSource} onChange={console.log} />\n      <h3>\u6709\u9ed8\u8ba4\u503c</h3>\n      <RadioGroup defaultValue="mini" dataSource={dataSource} onChange={console.log} />\n    </Group>\n  );\n}';const R={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/radio.stories.tsx",loc:{start:{line:37,column:7},end:{line:39,column:1}},name:"Direction",value:h,source:'function Direction() {\n  return <RadioGroup direction="column" dataSource={dataSource} onChange={console.log} />;\n}',deps:()=>[l],provides:{RadioGroup:c.RadioGroup}};function f(){const[e,o]=Object(r.useState)("mini");return t.a.createElement(c.RadioGroup,{value:e,dataSource:u,onChange:o})}h.__doc_info=R,h.__inner_source='function Direction() {\n  return <RadioGroup direction="column" dataSource={dataSource} onChange={console.log} />;\n}';const g={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/radio.stories.tsx",loc:{start:{line:41,column:7},end:{line:44,column:1}},name:"Controlled",value:f,source:"function Controlled() {\n  const [value, setValue] = useState('mini');\n  return <RadioGroup value={value} dataSource={dataSource} onChange={setValue} />;\n}",deps:()=>[l],provides:{useState:r.useState,RadioGroup:c.RadioGroup}};f.__inner_source="function Controlled() {\n  const [value, setValue] = useState('mini');\n  return <RadioGroup value={value} dataSource={dataSource} onChange={setValue} />;\n}",f.__doc_info=g;var v={id:"radio",title:"Radio \u5355\u9009\u6309\u94ae"},G={unversionedId:"radio",id:"radio",isDocsHomePage:!1,title:"Radio \u5355\u9009\u6309\u94ae",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/radio.mdx",sourceDirName:".",slug:"/radio",permalink:"/rex-design/docs/radio",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/radio.mdx",version:"current",frontMatter:{id:"radio",title:"Radio \u5355\u9009\u6309\u94ae"},sidebar:"docs",previous:{title:"NumberInput \u6570\u5b57\u8f93\u5165",permalink:"/rex-design/docs/number-input"},next:{title:"Range \u533a\u95f4",permalink:"/rex-design/docs/range"}},S=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]}]},{value:"\u7ec4\u5408",id:"\u7ec4\u5408",children:[{value:"\u65b9\u5411",id:"\u65b9\u5411",children:[]},{value:"\u53d7\u63a7",id:"\u53d7\u63a7",children:[]}]},{value:"API",id:"api",children:[{value:"Radio",id:"radio",children:[]},{value:"RadioGroup",id:"radiogroup",children:[]}]}],x=function(e){return function(o){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(d.b)("div",o)}},_=x("Story"),j=x("PropsTable"),O={toc:S};function y(e){var o=e.components,n=Object(i.a)(e,["components"]);return Object(d.b)("wrapper",Object(a.a)({},O,n,{components:o,mdxType:"MDXLayout"}),Object(d.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(d.b)("p",null,"\u5355\u9009\u6309\u94ae\u5141\u8bb8\u7528\u6237\u4ece\u4e00\u4e2a\u6570\u636e\u96c6\u4e2d\u9009\u62e9\u5355\u4e2a\u9009\u9879\u3002\u5982\u679c\u4f60\u89c9\u5f97\u7528\u6237\u9700\u8981\u5e76\u6392\u770b\u5230\u6240\u6709\u7684\u53ef\u9009\u9879\uff0c\u4f7f\u7528\u5355\u9009\u6309\u94ae\u8fdb\u884c\u6392\u4ed6\u64cd\u4f5c\u3002\u6b64\u5916\uff0c\u8003\u8651\u4f7f\u7528\u4e0b\u62c9\u5217\u8868\uff0c\u76f8\u5bf9\u4e8e\u663e\u793a\u6240\u6709\u7684\u9009\u9879\u5360\u7528\u66f4\u5c11\u7684\u7a7a\u95f4\u3002"),Object(d.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(d.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(d.b)(_,{fn:s,mdxType:"Story"}),Object(d.b)("h2",{id:"\u7ec4\u5408"},"\u7ec4\u5408"),Object(d.b)(_,{fn:b,mdxType:"Story"}),Object(d.b)("h3",{id:"\u65b9\u5411"},"\u65b9\u5411"),Object(d.b)(_,{fn:h,mdxType:"Story"}),Object(d.b)("h3",{id:"\u53d7\u63a7"},"\u53d7\u63a7"),Object(d.b)(_,{fn:f,mdxType:"Story"}),Object(d.b)("h2",{id:"api"},"API"),Object(d.b)("h3",{id:"radio"},"Radio"),Object(d.b)(j,{component:c.Radio,mdxType:"PropsTable"}),Object(d.b)("h3",{id:"radiogroup"},"RadioGroup"),Object(d.b)(j,{component:c.RadioGroup,mdxType:"PropsTable"}))}y.isMDXComponent=!0}}]);