(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{131:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return f})),n.d(o,"metadata",(function(){return D})),n.d(o,"toc",(function(){return G})),n.d(o,"default",(function(){return j}));var c=n(3),t=n(7),a=n(0),l=n.n(a),r=n(164),s=n(162);const b=()=>l.a.createElement(s.DemoGroup,null,l.a.createElement(s.Checkbox,{onChange:console.log},"\u8ba2\u9605"),l.a.createElement(s.Checkbox,{disabled:!0},"\u8ba2\u9605\uff08\u7981\u7528\uff09"),l.a.createElement(s.Checkbox,{defaultChecked:!0},"\u8ba2\u9605")),i={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/checkbox.stories.tsx",loc:{start:{line:6,column:7},end:{line:12,column:2}},name:"Basic",value:b,source:"const Basic = () => (\n  <DemoGroup>\n    <Checkbox onChange={console.log}>\u8ba2\u9605</Checkbox>\n    <Checkbox disabled>\u8ba2\u9605\uff08\u7981\u7528\uff09</Checkbox>\n    <Checkbox defaultChecked>\u8ba2\u9605</Checkbox>\n  </DemoGroup>\n);",deps:()=>[],provides:{DemoGroup:s.DemoGroup,Checkbox:s.Checkbox}};b.__doc_info=i,b.__inner_source="() => (\n  <DemoGroup>\n    <Checkbox onChange={console.log}>\u8ba2\u9605</Checkbox>\n    <Checkbox disabled>\u8ba2\u9605\uff08\u7981\u7528\uff09</Checkbox>\n    <Checkbox defaultChecked>\u8ba2\u9605</Checkbox>\n  </DemoGroup>\n)";const h=()=>{const[e,o]=Object(a.useState)();return l.a.createElement(s.DemoGroup,null,l.a.createElement(s.Checkbox,{defaultChecked:!0},"\u8ba2\u9605\uff08\u975e\u53d7\u63a7\uff09"),l.a.createElement(s.Checkbox,{checked:e,onChange:n=>o(e)},"\u8ba2\u9605\uff08\u53d7\u63a7\uff09"))},u={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/checkbox.stories.tsx",loc:{start:{line:14,column:7},end:{line:25,column:2}},name:"Value",value:h,source:"const Value = () => {\n  const [checked, setChecked] = useState();\n\n  return (\n    <DemoGroup>\n      <Checkbox defaultChecked>\u8ba2\u9605\uff08\u975e\u53d7\u63a7\uff09</Checkbox>\n      <Checkbox checked={checked} onChange={(val) => setChecked(checked)}>\n        \u8ba2\u9605\uff08\u53d7\u63a7\uff09\n      </Checkbox>\n    </DemoGroup>\n  );\n};",deps:()=>[],provides:{useState:a.useState,DemoGroup:s.DemoGroup,Checkbox:s.Checkbox}};h.__doc_info=u,h.__inner_source="() => {\n  const [checked, setChecked] = useState();\n\n  return (\n    <DemoGroup>\n      <Checkbox defaultChecked>\u8ba2\u9605\uff08\u975e\u53d7\u63a7\uff09</Checkbox>\n      <Checkbox checked={checked} onChange={(val) => setChecked(checked)}>\n        \u8ba2\u9605\uff08\u53d7\u63a7\uff09\n      </Checkbox>\n    </DemoGroup>\n  );\n}";const d=()=>l.a.createElement(s.Checkbox,{indeterminate:!0},"\u534a\u9009"),k={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/checkbox.stories.tsx",loc:{start:{line:27,column:7},end:{line:27,column:73}},name:"Indeterminate",value:d,source:"const Indeterminate = () => <Checkbox indeterminate>\u534a\u9009</Checkbox>;",deps:()=>[],provides:{Checkbox:s.Checkbox}};d.__doc_info=k,d.__inner_source="() => <Checkbox indeterminate>\u534a\u9009</Checkbox>";const m=[{label:"\u5ba2\u670d",value:"01"},{label:"\u5e97\u957f",value:"02"},{label:"\u5e08\u5085",value:"03"}],x={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/checkbox.stories.tsx",loc:{start:{line:29,column:0},end:{line:33,column:2}},name:"dataSource",value:m,source:"const dataSource = [\n  { label: '\u5ba2\u670d', value: '01' },\n  { label: '\u5e97\u957f', value: '02' },\n  { label: '\u5e08\u5085', value: '03' },\n];",deps:()=>[],provides:{}},C=()=>{const[e,o]=Object(a.useState)([]);return l.a.createElement(s.DemoGroup,null,l.a.createElement(s.DemoTitle,null,"\u975e\u53d7\u63a7"),l.a.createElement(s.CheckboxGroup,{dataSource:m,defaultValue:["01"],onChange:console.log}),l.a.createElement(s.DemoTitle,null,"\u53d7\u63a7"),l.a.createElement(s.CheckboxGroup,{dataSource:m,value:e,onChange:e=>o(e)}))},p={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/checkbox.stories.tsx",loc:{start:{line:35,column:7},end:{line:47,column:2}},name:"Group",value:C,source:"const Group = () => {\n  const [val, setVal] = useState([]);\n\n  return (\n    <DemoGroup>\n      <DemoTitle>\u975e\u53d7\u63a7</DemoTitle>\n      <CheckboxGroup dataSource={dataSource} defaultValue={['01']} onChange={console.log} />\n\n      <DemoTitle>\u53d7\u63a7</DemoTitle>\n      <CheckboxGroup dataSource={dataSource} value={val} onChange={(val) => setVal(val)} />\n    </DemoGroup>\n  );\n};",deps:()=>[x],provides:{useState:a.useState,DemoGroup:s.DemoGroup,DemoTitle:s.DemoTitle,CheckboxGroup:s.CheckboxGroup}};C.__doc_info=p,C.__inner_source="() => {\n  const [val, setVal] = useState([]);\n\n  return (\n    <DemoGroup>\n      <DemoTitle>\u975e\u53d7\u63a7</DemoTitle>\n      <CheckboxGroup dataSource={dataSource} defaultValue={['01']} onChange={console.log} />\n\n      <DemoTitle>\u53d7\u63a7</DemoTitle>\n      <CheckboxGroup dataSource={dataSource} value={val} onChange={(val) => setVal(val)} />\n    </DemoGroup>\n  );\n}";const g=()=>{const[e,o]=Object(a.useState)(!0),[n,c]=Object(a.useState)(!0);return l.a.createElement(s.DemoGroup,null,l.a.createElement(s.Checkbox,null,"\u9ed8\u8ba4"),l.a.createElement(s.Checkbox,{disabled:!0},"\u7981\u7528\u72b6\u6001"),l.a.createElement(s.Checkbox,{defaultChecked:!0},"\u9ed8\u8ba4\u9009\u4e2d"),l.a.createElement("div",{onClick:()=>console.log("\u70b9\u51fb\u4e86\u6211")},l.a.createElement(s.Checkbox,{onChange:console.log},"onChange\u56de\u8c03")),l.a.createElement("p",null,"\u5c3a\u5bf8"),l.a.createElement(s.Checkbox,{size:"small"},"\u592a\u5c0f\u4e86"),l.a.createElement(s.Checkbox,{size:"medium"},"\u52a0\u5927"),l.a.createElement(s.Checkbox,{size:"large"},"\u518d\u52a0\u5927"),l.a.createElement("p",null,"\u53d7\u63a7"),l.a.createElement(s.Checkbox,{checked:e},"\u53d7\u63a7\u9009\u4e2d\u6001"),l.a.createElement(s.Checkbox,{indeterminate:n},"\u53d7\u63a7\u4e2d\u95f4\u6001"),l.a.createElement("button",{onClick:()=>o(!e)},"\u5207\u6362\u9009\u4e2d\u72b6\u6001"),l.a.createElement("button",{onClick:()=>c(!n)},"\u5207\u6362\u4e2d\u95f4\u6001"),l.a.createElement("p",null,"\u6837\u5f0f"),l.a.createElement(s.Checkbox,{style:{background:"#999"}},"\u81ea\u5b9a\u4e49 style"),l.a.createElement(s.Checkbox,{className:"this-is-my-classname"},"\u81ea\u5b9a\u4e49 className"))},v={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/checkbox.stories.tsx",loc:{start:{line:49,column:7},end:{line:79,column:2}},name:"Examples",value:g,source:'const Examples = () => {\n  const [checked, setChecked] = useState(true);\n  const [indeterminate, setIndeterminate] = useState(true);\n\n  return (\n    <DemoGroup>\n      <Checkbox>\u9ed8\u8ba4</Checkbox>\n      <Checkbox disabled>\u7981\u7528\u72b6\u6001</Checkbox>\n      <Checkbox defaultChecked>\u9ed8\u8ba4\u9009\u4e2d</Checkbox>\n      <div onClick={() => console.log(\'\u70b9\u51fb\u4e86\u6211\')}>\n        <Checkbox onChange={console.log}>onChange\u56de\u8c03</Checkbox>\n      </div>\n\n      <p>\u5c3a\u5bf8</p>\n      <Checkbox size="small">\u592a\u5c0f\u4e86</Checkbox>\n      <Checkbox size="medium">\u52a0\u5927</Checkbox>\n      <Checkbox size="large">\u518d\u52a0\u5927</Checkbox>\n\n      <p>\u53d7\u63a7</p>\n      <Checkbox checked={checked}>\u53d7\u63a7\u9009\u4e2d\u6001</Checkbox>\n      <Checkbox indeterminate={indeterminate}>\u53d7\u63a7\u4e2d\u95f4\u6001</Checkbox>\n\n      <button onClick={() => setChecked(!checked)}>\u5207\u6362\u9009\u4e2d\u72b6\u6001</button>\n      <button onClick={() => setIndeterminate(!indeterminate)}>\u5207\u6362\u4e2d\u95f4\u6001</button>\n\n      <p>\u6837\u5f0f</p>\n      <Checkbox style={{ background: \'#999\' }}>\u81ea\u5b9a\u4e49 style</Checkbox>\n      <Checkbox className="this-is-my-classname">\u81ea\u5b9a\u4e49 className</Checkbox>\n    </DemoGroup>\n  );\n};',deps:()=>[],provides:{useState:a.useState,DemoGroup:s.DemoGroup,Checkbox:s.Checkbox}};g.__inner_source='() => {\n  const [checked, setChecked] = useState(true);\n  const [indeterminate, setIndeterminate] = useState(true);\n\n  return (\n    <DemoGroup>\n      <Checkbox>\u9ed8\u8ba4</Checkbox>\n      <Checkbox disabled>\u7981\u7528\u72b6\u6001</Checkbox>\n      <Checkbox defaultChecked>\u9ed8\u8ba4\u9009\u4e2d</Checkbox>\n      <div onClick={() => console.log(\'\u70b9\u51fb\u4e86\u6211\')}>\n        <Checkbox onChange={console.log}>onChange\u56de\u8c03</Checkbox>\n      </div>\n\n      <p>\u5c3a\u5bf8</p>\n      <Checkbox size="small">\u592a\u5c0f\u4e86</Checkbox>\n      <Checkbox size="medium">\u52a0\u5927</Checkbox>\n      <Checkbox size="large">\u518d\u52a0\u5927</Checkbox>\n\n      <p>\u53d7\u63a7</p>\n      <Checkbox checked={checked}>\u53d7\u63a7\u9009\u4e2d\u6001</Checkbox>\n      <Checkbox indeterminate={indeterminate}>\u53d7\u63a7\u4e2d\u95f4\u6001</Checkbox>\n\n      <button onClick={() => setChecked(!checked)}>\u5207\u6362\u9009\u4e2d\u72b6\u6001</button>\n      <button onClick={() => setIndeterminate(!indeterminate)}>\u5207\u6362\u4e2d\u95f4\u6001</button>\n\n      <p>\u6837\u5f0f</p>\n      <Checkbox style={{ background: \'#999\' }}>\u81ea\u5b9a\u4e49 style</Checkbox>\n      <Checkbox className="this-is-my-classname">\u81ea\u5b9a\u4e49 className</Checkbox>\n    </DemoGroup>\n  );\n}',g.__doc_info=v;var f={id:"checkbox",title:"Checkbox \u590d\u9009\u6846"},D={unversionedId:"checkbox",id:"checkbox",isDocsHomePage:!1,title:"Checkbox \u590d\u9009\u6846",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/checkbox.mdx",sourceDirName:".",slug:"/checkbox",permalink:"/rex-design/docs/checkbox",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/checkbox.mdx",version:"current",frontMatter:{id:"checkbox",title:"Checkbox \u590d\u9009\u6846"},sidebar:"docs",previous:{title:"Tree \u6811",permalink:"/rex-design/docs/tree"},next:{title:"DatePicker \u65e5\u671f\u9009\u62e9",permalink:"/rex-design/docs/date-picker"}},G=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u503c",id:"\u503c",children:[]},{value:"\u534a\u9009",id:"\u534a\u9009",children:[]},{value:"\u7ec4\u5408",id:"\u7ec4\u5408",children:[]}]},{value:"API",id:"api",children:[{value:"Checkbox",id:"checkbox",children:[]},{value:"CheckboxGroup",id:"checkboxgroup",children:[]}]}],S=function(e){return function(o){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",o)}},E=S("Story"),_=S("PropsTable"),y={toc:G};function j(e){var o=e.components,n=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},y,n,{components:o,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(r.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(r.b)(E,{fn:b,mdxType:"Story"}),Object(r.b)("h3",{id:"\u503c"},"\u503c"),Object(r.b)(E,{fn:h,mdxType:"Story"}),Object(r.b)("h3",{id:"\u534a\u9009"},"\u534a\u9009"),Object(r.b)(E,{fn:d,mdxType:"Story"}),Object(r.b)("h3",{id:"\u7ec4\u5408"},"\u7ec4\u5408"),Object(r.b)(E,{fn:C,mdxType:"Story"}),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"checkbox"},"Checkbox"),Object(r.b)(_,{component:s.Checkbox,mdxType:"PropsTable"}),Object(r.b)("h3",{id:"checkboxgroup"},"CheckboxGroup"),Object(r.b)(_,{component:s.CheckboxGroup,mdxType:"PropsTable"}))}j.isMDXComponent=!0}}]);