(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{148:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return f})),n.d(i,"metadata",(function(){return T})),n.d(i,"toc",(function(){return h})),n.d(i,"default",(function(){return G}));var o=n(3),t=n(7),r=n(0),m=n.n(r),c=n(164),s=n(162);const a=()=>m.a.createElement(s.DemoGroup,null,m.a.createElement(s.TimePicker,{onChange:console.log}),m.a.createElement(s.TimePicker,{defaultValue:"12:30:00",onChange:console.log})),l={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/time-picker.stories.tsx",loc:{start:{line:6,column:7},end:{line:11,column:2}},name:"Basic",value:a,source:'const Basic = () => (\n  <DemoGroup>\n    <TimePicker onChange={console.log} />\n    <TimePicker defaultValue="12:30:00" onChange={console.log} />\n  </DemoGroup>\n);',deps:()=>[],provides:{DemoGroup:s.DemoGroup,TimePicker:s.TimePicker}};a.__doc_info=l,a.__inner_source='() => (\n  <DemoGroup>\n    <TimePicker onChange={console.log} />\n    <TimePicker defaultValue="12:30:00" onChange={console.log} />\n  </DemoGroup>\n)';const u=()=>m.a.createElement(s.DemoGroup,null,m.a.createElement(s.TimePicker,{mode:"simple",onChange:console.log})),p={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/time-picker.stories.tsx",loc:{start:{line:16,column:7},end:{line:20,column:2}},name:"Simple",value:u,source:'const Simple = () => (\n  <DemoGroup>\n    <TimePicker mode="simple" onChange={console.log} />\n  </DemoGroup>\n);',deps:()=>[],provides:{DemoGroup:s.DemoGroup,TimePicker:s.TimePicker}};u.__doc_info=p,u.__inner_source='() => (\n  <DemoGroup>\n    <TimePicker mode="simple" onChange={console.log} />\n  </DemoGroup>\n)';const d=()=>{const e=[];let i=9;for(;i<22;){const n=i<10?"0"+i:i;e.push({label:n+":00",value:n+":00"}),i++}return m.a.createElement(s.DemoGroup,null,m.a.createElement(s.TimePicker,{getHourItems:()=>[8,9,10,11,12].map(e=>({label:e,value:e})),getMinuteItems:()=>[0,15,30,45].map(e=>({label:e,value:e})),getSecondItems:()=>[0,59].map(e=>({label:e,value:e}))}),m.a.createElement(s.TimePicker,{mode:"simple",getQuickItems:()=>e}))},k={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/time-picker.stories.tsx",loc:{start:{line:22,column:7},end:{line:42,column:2}},name:"CustomTimeItems",value:d,source:'const CustomTimeItems = () => {\n  const items = [];\n\n  let i = 9;\n  while (i < 22) {\n    const key = i < 10 ? `0${i}` : i;\n    items.push({ label: `${key}:00`, value: `${key}:00` });\n    i++;\n  }\n\n  return (\n    <DemoGroup>\n      <TimePicker\n        getHourItems={() => [8, 9, 10, 11, 12].map((item) => ({ label: item, value: item }))}\n        getMinuteItems={() => [0, 15, 30, 45].map((item) => ({ label: item, value: item }))}\n        getSecondItems={() => [0, 59].map((item) => ({ label: item, value: item }))}\n      />\n      <TimePicker mode="simple" getQuickItems={() => items} />\n    </DemoGroup>\n  );\n};',deps:()=>[],provides:{DemoGroup:s.DemoGroup,TimePicker:s.TimePicker}};d.__doc_info=k,d.__inner_source='() => {\n  const items = [];\n\n  let i = 9;\n  while (i < 22) {\n    const key = i < 10 ? `0${i}` : i;\n    items.push({ label: `${key}:00`, value: `${key}:00` });\n    i++;\n  }\n\n  return (\n    <DemoGroup>\n      <TimePicker\n        getHourItems={() => [8, 9, 10, 11, 12].map((item) => ({ label: item, value: item }))}\n        getMinuteItems={() => [0, 15, 30, 45].map((item) => ({ label: item, value: item }))}\n        getSecondItems={() => [0, 59].map((item) => ({ label: item, value: item }))}\n      />\n      <TimePicker mode="simple" getQuickItems={() => items} />\n    </DemoGroup>\n  );\n}';const b=()=>m.a.createElement(s.DemoGroup,null,m.a.createElement(s.TimePicker,{hasSeconds:!1,format:"HH:mm"})),g={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/time-picker.stories.tsx",loc:{start:{line:44,column:7},end:{line:48,column:2}},name:"CustomTimePanels",value:b,source:'const CustomTimePanels = () => (\n  <DemoGroup>\n    <TimePicker hasSeconds={false} format="HH:mm" />\n  </DemoGroup>\n);',deps:()=>[],provides:{DemoGroup:s.DemoGroup,TimePicker:s.TimePicker}};b.__inner_source='() => (\n  <DemoGroup>\n    <TimePicker hasSeconds={false} format="HH:mm" />\n  </DemoGroup>\n)',b.__doc_info=g;try{u.displayName="Simple",u.__docgenInfo={description:"\u5168\u529f\u80fd\u6a21\u5f0f",displayName:"Simple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../story/src/time-picker.stories.tsx#Simple"]={docgenInfo:u.__docgenInfo,name:"Simple",path:"../story/src/time-picker.stories.tsx#Simple"})}catch(y){}var f={id:"time-picker",title:"TimePicker \u65f6\u95f4\u9009\u62e9"},T={unversionedId:"time-picker",id:"time-picker",isDocsHomePage:!1,title:"TimePicker \u65f6\u95f4\u9009\u62e9",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/time-picker.mdx",sourceDirName:".",slug:"/time-picker",permalink:"/rex-design/docs/time-picker",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/time-picker.mdx",version:"current",frontMatter:{id:"time-picker",title:"TimePicker \u65f6\u95f4\u9009\u62e9"},sidebar:"docs",previous:{title:"DatePicker \u65e5\u671f\u9009\u62e9",permalink:"/rex-design/docs/date-picker"},next:{title:"FilePicker \u6587\u4ef6\u9009\u62e9\u5668",permalink:"/rex-design/docs/file-picker"}},h=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u81ea\u5b9a\u4e49\u65f6\u95f4\u5217\u8868",id:"\u81ea\u5b9a\u4e49\u65f6\u95f4\u5217\u8868",children:[]},{value:"\u81ea\u5b9a\u4e49\u65f6\u95f4\u9762\u677f",id:"\u81ea\u5b9a\u4e49\u65f6\u95f4\u9762\u677f",children:[]}]},{value:"API",id:"api",children:[]}],P=function(e){return function(i){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",i)}},v=P("Story"),D=P("PropsTable"),_={toc:h};function G(e){var i=e.components,n=Object(t.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},_,n,{components:i,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(c.b)(v,{fn:a,mdxType:"Story"}),Object(c.b)("h3",{id:"\u81ea\u5b9a\u4e49\u65f6\u95f4\u5217\u8868"},"\u81ea\u5b9a\u4e49\u65f6\u95f4\u5217\u8868"),Object(c.b)(v,{fn:d,mdxType:"Story"}),Object(c.b)("h3",{id:"\u81ea\u5b9a\u4e49\u65f6\u95f4\u9762\u677f"},"\u81ea\u5b9a\u4e49\u65f6\u95f4\u9762\u677f"),Object(c.b)(v,{fn:b,mdxType:"Story"}),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)(D,{component:s.TimePicker,mdxType:"PropsTable"}))}G.isMDXComponent=!0}}]);