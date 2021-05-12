(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{129:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return g})),a.d(n,"metadata",(function(){return m})),a.d(n,"toc",(function(){return T})),a.d(n,"default",(function(){return v}));var t=a(3),o=a(7),l=a(0),r=a.n(l),i=a(160),s=a(157),c=a(165),p=function(){var e=Object(l.useState)(["Unremovable","Tag 2","Tag 3"]),n=e[0],a=e[1];return r.a.createElement(s.DemoGroup,null,r.a.createElement(s.DemoGroup,null,r.a.createElement("p",null,"\u57fa\u672c\u7528\u6cd5"),r.a.createElement(s.Tag,null,"\u6807\u7b7e tag"),r.a.createElement(s.Tag,{interactive:!0},"\u53ef\u4ea4\u4e92")),r.a.createElement(s.DemoGroup,null,r.a.createElement("p",null,"\u53ef\u5173\u95ed, \u5173\u95ed\u65f6\u89e6\u53d1 onClose \u56de\u8c03"),r.a.createElement(s.Tag,{isCloseable:!0,onClose:function(){return alert("\u70b9\u51fb\u4e86X")}},"\u53ef\u5173\u95ed\u6807\u7b7e")),r.a.createElement(s.DemoGroup,null,r.a.createElement("p",null,"\u6807\u7b7e\u5c3a\u5bf8"),r.a.createElement(s.Tag,{size:"small"},"\u52a0\u5927"),r.a.createElement(s.Tag,{size:"medium"},"\u52a0\u5927"),r.a.createElement(s.Tag,{size:"large"},"\u518d\u52a0\u5927")),r.a.createElement(s.DemoGroup,null,r.a.createElement("p",null,"shape: ",r.a.createElement("small",null,"outline | solid")),r.a.createElement(s.Tag,{shape:"outline"},"outline"),r.a.createElement(s.Tag,{shape:"solid"},"solid")),r.a.createElement(s.DemoGroup,null,r.a.createElement("p",null,"\u81ea\u5b9a\u4e49\u56fe\u6807"),r.a.createElement(s.Tag,{shape:"outline",icon:r.a.createElement(c.a,{type:"edit"}),interactive:!0},"\u7f16\u8f91\u6570\u636e"),r.a.createElement(s.Tag,{shape:"solid",icon:r.a.createElement(c.a,{type:"data-view"}),interactive:!0},"\u67e5\u770b\u62a5\u8868"),r.a.createElement(s.Tag,{icon:r.a.createElement(c.a,{type:"download"}),isCloseable:!0,interactive:!0},"\u4e0b\u8f7d\u62a5\u8868")),r.a.createElement(s.DemoGroup,null,r.a.createElement("p",null,"\u6570\u636e\u6e90\u5199\u6cd5\u793a\u4f8b"),n.map((function(e){return r.a.createElement(s.Tag,{isCloseable:!0,onClose:function(){return a([].concat(n.filter((function(n){return n!==e}))))},key:e},e)}))))},u={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/tag.stories.tsx",loc:{start:{line:7,column:7},end:{line:62,column:2}},name:"Basic",value:p,source:'const Basic = () => {\n  const [tags, setTags] = useState([\'Unremovable\', \'Tag 2\', \'Tag 3\']);\n\n  return (\n    <DemoGroup>\n      <DemoGroup>\n        <p>\u57fa\u672c\u7528\u6cd5</p>\n        <Tag>\u6807\u7b7e tag</Tag>\n        <Tag interactive>\u53ef\u4ea4\u4e92</Tag>\n      </DemoGroup>\n\n      <DemoGroup>\n        <p>\u53ef\u5173\u95ed, \u5173\u95ed\u65f6\u89e6\u53d1 onClose \u56de\u8c03</p>\n        <Tag isCloseable onClose={() => alert(\'\u70b9\u51fb\u4e86X\')}>\n          \u53ef\u5173\u95ed\u6807\u7b7e\n        </Tag>\n      </DemoGroup>\n\n      <DemoGroup>\n        <p>\u6807\u7b7e\u5c3a\u5bf8</p>\n        <Tag size="small">\u52a0\u5927</Tag>\n        <Tag size="medium">\u52a0\u5927</Tag>\n        <Tag size="large">\u518d\u52a0\u5927</Tag>\n      </DemoGroup>\n\n      <DemoGroup>\n        <p>\n          shape: <small>outline | solid</small>\n        </p>\n        <Tag shape="outline">outline</Tag>\n        <Tag shape="solid">solid</Tag>\n      </DemoGroup>\n\n      <DemoGroup>\n        <p>\u81ea\u5b9a\u4e49\u56fe\u6807</p>\n        <Tag shape="outline" icon={<Icon type="edit" />} interactive>\n          \u7f16\u8f91\u6570\u636e\n        </Tag>\n        <Tag shape="solid" icon={<Icon type="data-view" />} interactive>\n          \u67e5\u770b\u62a5\u8868\n        </Tag>\n        <Tag icon={<Icon type="download" />} isCloseable interactive>\n          \u4e0b\u8f7d\u62a5\u8868\n        </Tag>\n      </DemoGroup>\n      <DemoGroup>\n        <p>\u6570\u636e\u6e90\u5199\u6cd5\u793a\u4f8b</p>\n        {tags.map((tagLabel) => (\n          <Tag isCloseable onClose={() => setTags([...tags.filter((tag) => tag !== tagLabel)])} key={tagLabel}>\n            {tagLabel}\n          </Tag>\n        ))}\n      </DemoGroup>\n    </DemoGroup>\n  );\n};',deps:function(){return[]},provides:{useState:l.useState,DemoGroup:s.DemoGroup,Tag:s.Tag,Icon:c.a}};p.__inner_source='() => {\n  const [tags, setTags] = useState([\'Unremovable\', \'Tag 2\', \'Tag 3\']);\n\n  return (\n    <DemoGroup>\n      <DemoGroup>\n        <p>\u57fa\u672c\u7528\u6cd5</p>\n        <Tag>\u6807\u7b7e tag</Tag>\n        <Tag interactive>\u53ef\u4ea4\u4e92</Tag>\n      </DemoGroup>\n\n      <DemoGroup>\n        <p>\u53ef\u5173\u95ed, \u5173\u95ed\u65f6\u89e6\u53d1 onClose \u56de\u8c03</p>\n        <Tag isCloseable onClose={() => alert(\'\u70b9\u51fb\u4e86X\')}>\n          \u53ef\u5173\u95ed\u6807\u7b7e\n        </Tag>\n      </DemoGroup>\n\n      <DemoGroup>\n        <p>\u6807\u7b7e\u5c3a\u5bf8</p>\n        <Tag size="small">\u52a0\u5927</Tag>\n        <Tag size="medium">\u52a0\u5927</Tag>\n        <Tag size="large">\u518d\u52a0\u5927</Tag>\n      </DemoGroup>\n\n      <DemoGroup>\n        <p>\n          shape: <small>outline | solid</small>\n        </p>\n        <Tag shape="outline">outline</Tag>\n        <Tag shape="solid">solid</Tag>\n      </DemoGroup>\n\n      <DemoGroup>\n        <p>\u81ea\u5b9a\u4e49\u56fe\u6807</p>\n        <Tag shape="outline" icon={<Icon type="edit" />} interactive>\n          \u7f16\u8f91\u6570\u636e\n        </Tag>\n        <Tag shape="solid" icon={<Icon type="data-view" />} interactive>\n          \u67e5\u770b\u62a5\u8868\n        </Tag>\n        <Tag icon={<Icon type="download" />} isCloseable interactive>\n          \u4e0b\u8f7d\u62a5\u8868\n        </Tag>\n      </DemoGroup>\n      <DemoGroup>\n        <p>\u6570\u636e\u6e90\u5199\u6cd5\u793a\u4f8b</p>\n        {tags.map((tagLabel) => (\n          <Tag isCloseable onClose={() => setTags([...tags.filter((tag) => tag !== tagLabel)])} key={tagLabel}>\n            {tagLabel}\n          </Tag>\n        ))}\n      </DemoGroup>\n    </DemoGroup>\n  );\n}',p.__doc_info=u;var g={id:"tag",title:"Tag \u6807\u7b7e"},m={unversionedId:"tag",id:"tag",isDocsHomePage:!1,title:"Tag \u6807\u7b7e",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/tag.mdx",sourceDirName:".",slug:"/tag",permalink:"/rex-design/docs/tag",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/tag.mdx",version:"current",frontMatter:{id:"tag",title:"Tag \u6807\u7b7e"}},T=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]}]},{value:"API",id:"api",children:[]}],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",n)}},b=d("Story"),D=d("PropsTable"),G={toc:T};function v(e){var n=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},G,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(i.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(i.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(i.b)(b,{fn:p,mdxType:"Story"}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)(D,{component:s.Tag,mdxType:"PropsTable"}))}v.isMDXComponent=!0}}]);