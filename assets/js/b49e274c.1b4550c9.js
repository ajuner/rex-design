(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return F})),t.d(n,"metadata",(function(){return w})),t.d(n,"toc",(function(){return V})),t.d(n,"default",(function(){return T}));var o=t(3),a=t(8),u=t(0),l=t.n(u),r=t(173),c=t(171),s=t(177);function i(){return l.a.createElement(c.Flex,{spacing:"l",direction:"column"},l.a.createElement(c.Input,{onChange:console.log}),l.a.createElement(c.Input,{defaultValue:"\u9ed8\u8ba4\u503c",onChange:console.log}),l.a.createElement(c.Input,{defaultValue:"\u53ea\u8bfb\u8f93\u5165\u6846",onChange:console.log,readOnly:!0}),l.a.createElement(c.Input,{defaultValue:"\u53ea\u8bfb\u8f93\u5165\u6846",onChange:console.log,disabled:!0}))}const p={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:7,column:7},end:{line:16,column:1}},name:"Basic",value:i,source:'function Basic() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input onChange={console.log} />\n      <Input defaultValue="\u9ed8\u8ba4\u503c" onChange={console.log} />\n      <Input defaultValue="\u53ea\u8bfb\u8f93\u5165\u6846" onChange={console.log} readOnly />\n      <Input defaultValue="\u53ea\u8bfb\u8f93\u5165\u6846" onChange={console.log} disabled />\n    </Flex>\n  );\n}',deps:()=>[],provides:{Flex:c.Flex,Input:c.Input}};function d(){return l.a.createElement(c.Flex,{spacing:"l",direction:"column"},l.a.createElement(c.Input,{defaultValue:"hippo",status:"error"}),l.a.createElement(c.Input,{defaultValue:"hippo",status:"success"}),l.a.createElement(c.Input,{defaultValue:"hippo",status:"warning"}))}i.__doc_info=p,i.__inner_source='function Basic() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input onChange={console.log} />\n      <Input defaultValue="\u9ed8\u8ba4\u503c" onChange={console.log} />\n      <Input defaultValue="\u53ea\u8bfb\u8f93\u5165\u6846" onChange={console.log} readOnly />\n      <Input defaultValue="\u53ea\u8bfb\u8f93\u5165\u6846" onChange={console.log} disabled />\n    </Flex>\n  );\n}';const m={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:18,column:7},end:{line:26,column:1}},name:"Status",value:d,source:'function Status() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input defaultValue="hippo" status="error" />\n      <Input defaultValue="hippo" status="success" />\n      <Input defaultValue="hippo" status="warning" />\n    </Flex>\n  );\n}',deps:()=>[],provides:{Flex:c.Flex,Input:c.Input}};function f(){return l.a.createElement(c.Input,{hasClear:!0,defaultValue:"\u70b9\u51fb\u53f3\u4fa7\u56fe\u6807\u6e05\u7a7a\u5f53\u524d\u6587\u672c",onChange:console.log})}d.__doc_info=m,d.__inner_source='function Status() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input defaultValue="hippo" status="error" />\n      <Input defaultValue="hippo" status="success" />\n      <Input defaultValue="hippo" status="warning" />\n    </Flex>\n  );\n}';const h={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:28,column:7},end:{line:30,column:1}},name:"HasClear",value:f,source:'function HasClear() {\n  return <Input hasClear defaultValue="\u70b9\u51fb\u53f3\u4fa7\u56fe\u6807\u6e05\u7a7a\u5f53\u524d\u6587\u672c" onChange={console.log} />;\n}',deps:()=>[],provides:{Input:c.Input}};function b(){return l.a.createElement(c.Input,{shape:"simple",placeholder:"\u7b80\u5355\u8f93\u5165\u6846"})}f.__doc_info=h,f.__inner_source='function HasClear() {\n  return <Input hasClear defaultValue="\u70b9\u51fb\u53f3\u4fa7\u56fe\u6807\u6e05\u7a7a\u5f53\u524d\u6587\u672c" onChange={console.log} />;\n}';const I={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:32,column:7},end:{line:34,column:1}},name:"NoBorder",value:b,source:'function NoBorder() {\n  return <Input shape="simple" placeholder="\u7b80\u5355\u8f93\u5165\u6846" />;\n}',deps:()=>[],provides:{Input:c.Input}};function g(){return l.a.createElement(c.Flex,{spacing:"l",direction:"column"},l.a.createElement(c.Input,{hasClear:!0,leftElement:l.a.createElement(s.b,{type:"search"}),rightElement:l.a.createElement(s.b,{type:"calendar"}),defaultValue:"default value"}))}b.__doc_info=I,b.__inner_source='function NoBorder() {\n  return <Input shape="simple" placeholder="\u7b80\u5355\u8f93\u5165\u6846" />;\n}';const x={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:36,column:7},end:{line:47,column:1}},name:"Elements",value:g,source:'function Elements() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input\n        hasClear\n        leftElement={<Icon type="search" />}\n        rightElement={<Icon type="calendar" />}\n        defaultValue="default value"\n      />\n    </Flex>\n  );\n}',deps:()=>[],provides:{Flex:c.Flex,Input:c.Input,Icon:s.b}};function _(){const[e,n]=Object(u.useState)("rex");return l.a.createElement(c.Input,{placeholder:"Basic usage",onChange:e=>n(e),value:e})}g.__doc_info=x,g.__inner_source='function Elements() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input\n        hasClear\n        leftElement={<Icon type="search" />}\n        rightElement={<Icon type="calendar" />}\n        defaultValue="default value"\n      />\n    </Flex>\n  );\n}';const E={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:49,column:7},end:{line:52,column:1}},name:"Controlled",value:_,source:"function Controlled() {\n  const [input, setInput] = useState('rex');\n  return <Input placeholder=\"Basic usage\" onChange={(val) => setInput(val)} value={input} />;\n}",deps:()=>[],provides:{useState:u.useState,Input:c.Input}};function y(){const[e,n]=Object(u.useState)(!0);return l.a.createElement(c.Input,{type:e?"password":"text",defaultValue:"1234",rightElement:l.a.createElement(s.b,{type:e?"eye-close":"browse",onClick:()=>n(!e)})})}_.__doc_info=E,_.__inner_source="function Controlled() {\n  const [input, setInput] = useState('rex');\n  return <Input placeholder=\"Basic usage\" onChange={(val) => setInput(val)} value={input} />;\n}";const v={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:54,column:7},end:{line:63,column:1}},name:"Password",value:y,source:"function Password() {\n  const [hide, setHide] = useState(true);\n  return (\n    <Input\n      type={hide ? 'password' : 'text'}\n      defaultValue=\"1234\"\n      rightElement={<Icon type={hide ? 'eye-close' : 'browse'} onClick={() => setHide(!hide)} />}\n    />\n  );\n}",deps:()=>[],provides:{useState:u.useState,Input:c.Input,Icon:s.b}};function C(){return l.a.createElement(c.Group,null,l.a.createElement("h3",null,"\u7981\u7528\u8868\u5355\u81ea\u52a8\u586b\u5145"),l.a.createElement(c.Input,{autoComplete:"off"}),l.a.createElement("h3",null,"\u963b\u6b62\u5bc6\u7801\u5b57\u6bb5\u7684\u81ea\u52a8\u586b\u5145"),l.a.createElement(c.Input,{autoComplete:"new-password"}))}y.__doc_info=v,y.__inner_source="function Password() {\n  const [hide, setHide] = useState(true);\n  return (\n    <Input\n      type={hide ? 'password' : 'text'}\n      defaultValue=\"1234\"\n      rightElement={<Icon type={hide ? 'eye-close' : 'browse'} onClick={() => setHide(!hide)} />}\n    />\n  );\n}";const O={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:65,column:7},end:{line:74,column:1}},name:"AutoCompleteOff",value:C,source:'function AutoCompleteOff() {\n  return (\n    <Group>\n      <h3>\u7981\u7528\u8868\u5355\u81ea\u52a8\u586b\u5145</h3>\n      <Input autoComplete="off" />\n      <h3>\u963b\u6b62\u5bc6\u7801\u5b57\u6bb5\u7684\u81ea\u52a8\u586b\u5145</h3>\n      <Input autoComplete="new-password" />\n    </Group>\n  );\n}',deps:()=>[],provides:{Group:c.Group,Input:c.Input}};function A(){return l.a.createElement(c.Flex,{spacing:"l",direction:"column"},l.a.createElement(c.Group,{isAttached:!0},l.a.createElement(c.InputAddon,null,"https://"),l.a.createElement(c.Input,{placeholder:"portal.hemaos"}),l.a.createElement(c.InputAddon,null,".com")),l.a.createElement(c.Group,{isAttached:!0},l.a.createElement(c.InputAddon,null,"+86"),l.a.createElement(c.Input,{placeholder:"11 \u4f4d\u624b\u673a\u53f7\u7801"})))}C.__doc_info=O,C.__inner_source='function AutoCompleteOff() {\n  return (\n    <Group>\n      <h3>\u7981\u7528\u8868\u5355\u81ea\u52a8\u586b\u5145</h3>\n      <Input autoComplete="off" />\n      <h3>\u963b\u6b62\u5bc6\u7801\u5b57\u6bb5\u7684\u81ea\u52a8\u586b\u5145</h3>\n      <Input autoComplete="new-password" />\n    </Group>\n  );\n}';const j={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:76,column:7},end:{line:91,column:1}},name:"Addons",value:A,source:'function Addons() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Group isAttached>\n        <InputAddon>https://</InputAddon>\n        <Input placeholder="portal.hemaos" />\n        <InputAddon>.com</InputAddon>\n      </Group>\n\n      <Group isAttached>\n        <InputAddon>+86</InputAddon>\n        <Input placeholder="11 \u4f4d\u624b\u673a\u53f7\u7801" />\n      </Group>\n    </Flex>\n  );\n}',deps:()=>[],provides:{Flex:c.Flex,Group:c.Group,InputAddon:c.InputAddon,Input:c.Input}};A.__inner_source='function Addons() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Group isAttached>\n        <InputAddon>https://</InputAddon>\n        <Input placeholder="portal.hemaos" />\n        <InputAddon>.com</InputAddon>\n      </Group>\n\n      <Group isAttached>\n        <InputAddon>+86</InputAddon>\n        <Input placeholder="11 \u4f4d\u624b\u673a\u53f7\u7801" />\n      </Group>\n    </Flex>\n  );\n}',A.__doc_info=j;var F={id:"input",title:"Input \u8f93\u5165\u6846"},w={unversionedId:"input",id:"input",isDocsHomePage:!1,title:"Input \u8f93\u5165\u6846",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/input.mdx",sourceDirName:".",slug:"/input",permalink:"/rex-design/docs/input",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/input.mdx",version:"current",frontMatter:{id:"input",title:"Input \u8f93\u5165\u6846"},sidebar:"docs",previous:{title:"FilePicker \u6587\u4ef6\u9009\u62e9\u5668",permalink:"/rex-design/docs/file-picker"},next:{title:"NumberInput \u6570\u5b57\u8f93\u5165",permalink:"/rex-design/docs/number-input"}},V=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u6821\u9a8c\u72b6\u6001",id:"\u6821\u9a8c\u72b6\u6001",children:[]},{value:"\u6e05\u7a7a",id:"\u6e05\u7a7a",children:[]},{value:"\u65e0\u8fb9\u6846\u7684\u8f93\u5165\u6846",id:"\u65e0\u8fb9\u6846\u7684\u8f93\u5165\u6846",children:[]},{value:"\u5185\u90e8\u5143\u7d20",id:"\u5185\u90e8\u5143\u7d20",children:[]},{value:"\u5173\u95ed\u81ea\u52a8\u586b\u5145",id:"\u5173\u95ed\u81ea\u52a8\u586b\u5145",children:[]},{value:"\u8f93\u5165\u6846\u7ec4\u5408",id:"\u8f93\u5165\u6846\u7ec4\u5408",children:[]}]},{value:"API",id:"api",children:[]}],S=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",n)}},k=S("Story"),G=S("PropsTable"),B={toc:V};function T(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},B,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(r.b)("p",null,"\u8f93\u5165\u6846\uff0c\u53ef\u4ee5\u7528\u6765\u8f93\u5165\u526a\u77ed\u7684\u6587\u672c\u5185\u5bb9\u3002"),Object(r.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(r.b)(k,{fn:i,mdxType:"Story"}),Object(r.b)("h3",{id:"\u6821\u9a8c\u72b6\u6001"},"\u6821\u9a8c\u72b6\u6001"),Object(r.b)("p",null,"\u901a\u8fc7 status \u4f20\u5165\u8f93\u5165\u6846\u7684\u6821\u9a8c\u72b6\u6001"),Object(r.b)(k,{fn:d,mdxType:"Story"}),Object(r.b)("h3",{id:"\u6e05\u7a7a"},"\u6e05\u7a7a"),Object(r.b)("p",null,"\u901a\u8fc7 hasClear \u8bbe\u7f6e\u662f\u5426\u663e\u793a\u8f93\u5165\u6846\u6e05\u7a7a\u6309\u94ae"),Object(r.b)(k,{fn:f,mdxType:"Story"}),Object(r.b)("h3",{id:"\u65e0\u8fb9\u6846\u7684\u8f93\u5165\u6846"},"\u65e0\u8fb9\u6846\u7684\u8f93\u5165\u6846"),Object(r.b)("p",null,"\u901a\u8fc7 shape \u8bbe\u7f6e\u7b80\u6d01\u8f93\u5165\u6846\uff0c\u6ca1\u6709\u8fb9\u6846"),Object(r.b)(k,{fn:b,mdxType:"Story"}),Object(r.b)("h3",{id:"\u5185\u90e8\u5143\u7d20"},"\u5185\u90e8\u5143\u7d20"),Object(r.b)("p",null,"\u4f7f\u7528 leftElement, rightElement \u4f20\u5165\u5185\u90e8\u7684\u6269\u5c55\u5185\u5bb9"),Object(r.b)(k,{fn:g,mdxType:"Story"}),Object(r.b)("h3",{id:"\u5173\u95ed\u81ea\u52a8\u586b\u5145"},"\u5173\u95ed\u81ea\u52a8\u586b\u5145"),Object(r.b)("p",null,'\u53ef\u4ee5\u901a\u8fc7 autoComplete="off" \u5c5e\u6027\u5173\u95ed\u6587\u672c\u6846\u7684\u81ea\u52a8\u586b\u5145\uff0c\u4f46\u7531\u4e8e',Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85%E5%B1%9E%E6%80%A7%E5%92%8C%E7%99%BB%E5%BD%95"},"\u67d0\u4e9b\u539f\u56e0"),"\uff0c\u73b0\u4ee3\u6d4f\u89c8\u5668\u5927\u591a\u4e0d\u652f\u6301\u8be5\u8bbe\u7f6e\u3002\u5982\u679c\u8bbe\u7f6e\u4e0d\u751f\u6548\uff0c\u5efa\u8bae\u53c2\u8003",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion"},"\u8be5\u6587\u6863"),"\u3002"),Object(r.b)(k,{fn:C,mdxType:"Story"}),Object(r.b)("h3",{id:"\u8f93\u5165\u6846\u7ec4\u5408"},"\u8f93\u5165\u6846\u7ec4\u5408"),Object(r.b)("p",null,"\u5c06\u8f93\u5165\u6846\u548c\u5176\u4ed6\u5143\u7d20\u8fdb\u884c\u7ec4\u5408"),Object(r.b)(k,{fn:A,mdxType:"Story"}),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)(G,{component:c.Input,mdxType:"PropsTable"}))}T.isMDXComponent=!0}}]);