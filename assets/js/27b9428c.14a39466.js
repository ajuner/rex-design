(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{88:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return o})),l.d(t,"toc",(function(){return c})),l.d(t,"default",(function(){return i}));var a=l(3),n=l(8),b=(l(0),l(169)),r={id:"core",title:"xform core"},o={unversionedId:"xform/core",id:"xform/core",isDocsHomePage:!1,title:"xform core",description:"xform \u8868\u5355\u65b9\u6848\u6838\u5fc3\u90e8\u5206\u3002",source:"@site/docs/xform/core.mdx",sourceDirName:"xform",slug:"/xform/core",permalink:"/rex-design/docs/xform/core",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/xform/core.mdx",version:"current",frontMatter:{id:"core",title:"xform core"},sidebar:"docs",previous:{title:"xform \u8054\u52a8",permalink:"/rex-design/docs/xform/effects"},next:{title:"API",permalink:"/rex-design/docs/xform/api"}},c=[{value:"\u52a8\u673a",id:"\u52a8\u673a",children:[]},{value:"\u53cc\u5411\u7ed1\u5b9a",id:"\u53cc\u5411\u7ed1\u5b9a",children:[]},{value:"\u4e3b\u52a8\u66f4\u65b0\u6a21\u578b",id:"\u4e3b\u52a8\u66f4\u65b0\u6a21\u578b",children:[]},{value:"\u76d1\u542c\u53d8\u5316\u4e0e\u8868\u5355\u8054\u52a8",id:"\u76d1\u542c\u53d8\u5316\u4e0e\u8868\u5355\u8054\u52a8",children:[]},{value:"\u5b57\u6bb5\u6a21\u578b",id:"\u5b57\u6bb5\u6a21\u578b",children:[]},{value:"\u5206\u5f62",id:"\u5206\u5f62",children:[{value:"\u89c6\u56fe\u5206\u5f62",id:"\u89c6\u56fe\u5206\u5f62",children:[]},{value:"\u6a21\u578b\u5206\u5f62",id:"\u6a21\u578b\u5206\u5f62",children:[]}]}],m={toc:c};function i(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},m,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"xform \u8868\u5355\u65b9\u6848\u6838\u5fc3\u90e8\u5206\u3002"),Object(b.b)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),Object(b.b)("p",null,"mobx \u662f\u4e00\u4e2a\u975e\u5e38\u4f18\u79c0\u7684\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u3002\u4e00\u662f\u5b83\u91c7\u7528\u4e86 Proxy \u9b54\u6cd5\u52ab\u6301\u4e86\u6240\u6709\u7684\u72b6\u6001\u8bfb\u53d6\u548c\u66f4\u65b0\uff0c\u5141\u8bb8\u6211\u4eec\u7528\u719f\u6089\u7684 plain Object/Array \u65b9\u5f0f\u4f7f\u7528\u548c\u66f4\u65b0\u72b6\u6001\uff1b\u4e8c\u662f mobx \u57fa\u4e8e\u4f9d\u8d56\u6536\u96c6\u5b9e\u73b0\u4e86\u7ec4\u4ef6\u7684\u7cbe\u786e\u66f4\u65b0\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u5373\u4fbf\u4e0d\u8fdb\u884c\u6027\u80fd\u4f18\u5316\uff0c\u6211\u4eec\u4e5f\u80fd\u5199\u51fa\u9ad8\u6027\u80fd\u7684 React \u5e94\u7528\uff0c\u975e\u5e38\u9002\u5408\u4e2d\u540e\u53f0\u5927\u8868\u5355\u573a\u666f \u2014\u2014 \u6e32\u67d3\u7ec4\u4ef6\u6570\u91cf\u5927\uff0c\u4f46\u7528\u6237\u4e00\u6b21\u5f80\u5f80\u53ea\u66f4\u65b0\u4e00\u5c0f\u90e8\u5206\u7684\u8868\u5355\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u76d2\u9a6c\u5fae\u5e94\u7528\u91c7\u7528\u4e86 mobx \u4f5c\u4e3a\u5e94\u7528\u5c42\u7684\u72b6\u6001\u7ba1\u7406\u65b9\u6848\uff0c\u63d0\u4f9b\u4e00\u4e2a\u80fd\u591f\u65e0\u7f1d\u5bf9\u63a5 mobx \u6a21\u578b\u7684\u8868\u5355\u65b9\u6848\uff0c\u80fd\u591f\u663e\u8457\u63d0\u5347\u5fae\u5e94\u7528\u7684\u7814\u53d1\u6548\u7387\u3002")),Object(b.b)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5927\u800c\u5168\u7684\u8868\u5355\u65b9\u6848\uff0c\u5176\u5f00\u53d1\u6210\u672c\u3001\u7ef4\u62a4\u6210\u672c\u90fd\u5f88\u9ad8\uff0crex design \u4f5c\u4e3a\u4ee5\u7ec4\u4ef6\u5e93\u4e3a\u4e3b\u7684\u6280\u672f\u4ea7\u54c1\uff0c\u4e0d\u5e94\u8026\u5408\u8fc7\u4e8e\u590d\u6742\u7684\u8868\u5355\u65b9\u6848\u3002\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u62e5\u62b1 mobx \u7684\u3001\u9ad8\u6027\u80fd\u7684\u3001\u8f83\u4e3a\u7cbe\u7b80\u7684\u8868\u5355\u65b9\u6848\u3002"),Object(b.b)("p",null,"\u6240\u4ee5\uff0cxform \u4f5c\u4e3a rex design \u4e2d\u5168\u65b0\u7684\u8868\u5355\u65b9\u6848\uff0c\u5176\u6838\u5fc3\u90e8\u5206\u7684\u8bbe\u8ba1\u601d\u8def\u5982\u4e0b\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u62e5\u62b1 mobx",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u8868\u5355\u5185\u6838\u91c7\u7528 mobx \u63d0\u4f9b\u7684\u6570\u636e\u7ed3\u6784\uff0c\u65e0\u7f1d\u5bf9\u63a5 mobx \u751f\u6001\uff08\u4f8b\u5982 mobx-utils\uff09"),Object(b.b)("li",{parentName:"ul"},"\u7cbe\u786e\u6e32\u67d3\uff08\u53ea\u6e32\u67d3\u90a3\u4e9b\u5fc5\u987b\u8981\u6e32\u67d3\u7684\u7ec4\u4ef6\uff09\uff0c\u80fd\u591f\u627f\u8f7d\u5927\u8868\u5355\u573a\u666f"))),Object(b.b)("li",{parentName:"ul"},"\u964d\u4f4e\u4e0a\u624b\u6210\u672c",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u907f\u514d\u90a3\u4e9b\u89e3\u91ca\u8d77\u6765\u8d39\u52b2\u7684\u6982\u5ff5\u6216\u7528\u6cd5"),Object(b.b)("li",{parentName:"ul"},"\u5373\u4f7f\u5f00\u53d1\u8005\u4e0d\u719f\u6089 mobx\uff0c\u4e5f\u80fd\u4f7f\u7528\u8be5\u8868\u5355\u65b9\u6848\u7684\u5927\u90e8\u5206\u529f\u80fd"),Object(b.b)("li",{parentName:"ul"},"\u8868\u5355\u4ee3\u7801\uff08JSX\uff09\u3001\u8868\u5355\u89c6\u56fe\u3001\u8868\u5355\u6570\u636e \u4e09\u8005\u7ed3\u6784\u76f8\u540c/\u76f8\u4f3c\uff0c\u7f29\u5c0f\u300c\u6240\u89c1\u300d\u4e0e\u300c\u6240\u5f97\u300d\u7684\u5dee\u5f02"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u7b80\u5355\u597d\u7528"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u3001\u7b26\u5408\u76f4\u89c9\u7684\u62bd\u8c61\uff08Model & Field\uff09"),Object(b.b)("li",{parentName:"ul"},"\u6309\u9700\u751f\u6210\u7684\u5185\u90e8\u6570\u636e\u7ed3\u6784\uff0c\u907f\u514d\u7528\u6237\u4ee3\u7801\u4e2d\u51fa\u73b0\u5927\u91cf\u7684\u975e\u7a7a\u5224\u65ad"))),Object(b.b)("li",{parentName:"ul"},"\u5206\u5f62",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u63d0\u5347\u8868\u5355\u4ee3\u7801\u7684\u53ef\u590d\u7528\u6027"),Object(b.b)("li",{parentName:"ul"},"\u80fd\u591f\u4f18\u96c5\u5730\u8fdb\u884c\u8868\u5355\u5957\u5a03")))),Object(b.b)("h2",{id:"\u53cc\u5411\u7ed1\u5b9a"},"\u53cc\u5411\u7ed1\u5b9a"),Object(b.b)("p",null,"\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"new FormModel(values)")," \u521b\u5efa model\uff0c\u5e76\u5c06 model \u4f20\u9012\u7ed9\u89c6\u56fe\u540e\uff0c\u300c\u6a21\u578b\u4e0e\u89c6\u56fe\u300d\u5c31\u4f1a\u8fdb\u884c\u53cc\u5411\u7ed1\u5b9a\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u89c6\u56fe\u603b\u662f\u53cd\u6620\u6a21\u578b\u4e2d\u7684\u6700\u65b0\u503c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u89c6\u56fe\u4e0a\u7684\u64cd\u4f5c\u4f1a\u76f4\u63a5\u66f4\u65b0\u6a21\u578b"))),Object(b.b)("p",null,"\u7528\u6237\u5728\u8868\u5355\u4e0a\u7684\u4ea4\u4e92\u53ef\u4ee5\u770b\u505a\u662f\u5bf9 model.values \u7684\u4fee\u6539\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"const model = new FormModel(values);\n\n// \u7528\u6237\u5728 <input name=\"foo\" /> \u4e2d\u4f9d\u6b21\u8f93\u5165 abc\nmodel.values.foo = 'a';\nmodel.values.foo = 'ab';\nmodel.values.foo = 'abc';\n\n// \u7528\u6237\u5728\u8d2d\u7269\u8f66(cart) \u4e2d\u6dfb\u52a0\u4e86 2\u74f6\u5feb\u4e50\u6c34\nmodel.values.cart.items = [];\nmodel.values.cart.items.push({ sku: '\u5feb\u4e50\u6c34' });\nmodel.values.cart.items.push({ sku: '\u5feb\u4e50\u6c34' });\n\n// \u7528\u6237\u91cd\u7f6e\u4e86\u8868\u5355\nmodel.values = {};\n")),Object(b.b)("p",null,"\u56e0\u4e3a\u7a7a\u503c\u7684\u5b58\u5728\uff0c",Object(b.b)("inlineCode",{parentName:"p"},".cart.items")," \u8fd9\u6837\u7684\u7528\u6cd5\u5f88\u5bb9\u6613\u62a5\u9519\uff0c\u6240\u4ee5 model \u63d0\u4f9b\u4e86 getValue \u548c setValue \u7684\u65b9\u6cd5\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"model.getValue('foo.bar')")," \u7b49\u4ef7\u4e8e ",Object(b.b)("inlineCode",{parentName:"li"},"model.values.foo.bar"),"\uff0c\u4f46\u4f1a\u5904\u7406\u7a7a\u503c\u60c5\u51b5"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"model.setValue('foo.bar', buzz)")," \u7b49\u4ef7\u4e8e ",Object(b.b)("inlineCode",{parentName:"li"},"model.values.foo.bar = buzz"),"\uff0c\u4f46\u4f1a\u5904\u7406\u7a7a\u503c\u60c5\u51b5\uff08\u6839\u636e\u6570\u636e\u7d22\u5f15\u540d\u79f0\u4f1a\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\u6216\u6570\u7ec4\uff09")),Object(b.b)("h2",{id:"\u4e3b\u52a8\u66f4\u65b0\u6a21\u578b"},"\u4e3b\u52a8\u66f4\u65b0\u6a21\u578b"),Object(b.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4e3b\u52a8\u5bf9 model.values \u8fdb\u884c\u66f4\u65b0\uff0cvalues \u53d8\u5316\u540e\u89c6\u56fe\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"// \u66f4\u65b0\u8868\u5355\u4f20\u72b6\u6001\nmodel.values.foo.bar = {\n  buzz: [{ hello: 123 }],\n};\n\n// \u66f4\u597d\u7684\u65b9\u5f0f\u662f\u8c03\u7528 model.setValue \u907f\u514d\u7a7a\u503c\u9519\u8bef\nmodel.setValue('foo.bar', { buzz: [{ hello: 123 }] });\n")),Object(b.b)("p",null,"\u91c7\u7528\u8fd9\u79cd\u66f4\u65b0\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5b9e\u73b0\u4e00\u4e2a\u300c\u91cd\u7f6e\u8868\u5355\u300d\u7684\u6309\u94ae\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"import { action } from 'mobx';\n\n<Button\n  // \u5bf9\u6a21\u578b\u7684\u66f4\u65b0\uff0c\u6216\u8005\u8bf4\u5bf9 mobx observable \u6570\u636e\u7684\u4fee\u6539\uff0c\u9700\u8981\u653e\u5728 mobx action \u5185\n  onClick={action(() => {\n    model.values = {};\n  })}\n>\n  \u91cd\u7f6e\u8868\u5355\n</Button>;\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u6211\u4eec\u53ef\u4ee5\u8ba4\u4e3a\u300c\u7528\u6237\u4ea4\u4e92\u300d\u548c\u300c\u4e3b\u52a8\u66f4\u65b0\u6a21\u578b\u300d\u90fd\u662f\u5bf9\u4e00\u4e2a\u300c\u5927\u5bf9\u8c61\u300d\uff08\u5373 model.values\uff09\u7684\u539f\u5730\u4fee\u6539\uff0c\u6bcf\u5f53\u8fd9\u4e2a\u5927\u5bf9\u8c61\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u89c6\u56fe\u4f1a\u8fdb\u884c\u66f4\u65b0\u4ee5\u53cd\u6620\u5927\u5bf9\u8c61\u7684\u6700\u65b0\u503c\u3002")),Object(b.b)("h2",{id:"\u76d1\u542c\u53d8\u5316\u4e0e\u8868\u5355\u8054\u52a8"},"\u76d1\u542c\u53d8\u5316\u4e0e\u8868\u5355\u8054\u52a8"),Object(b.b)("p",null,"\u76d1\u542c\u53d8\u5316\u7684\u80fd\u529b\u4e3b\u8981\u7531 ",Object(b.b)("a",{parentName:"p",href:"https://mobx.js.org/reactions.html"},"mobx reactions")," \u63d0\u4f9b\u3002\u56e0\u4e3a ",Object(b.b)("inlineCode",{parentName:"p"},"model.values")," \u91c7\u7528\u4e86 mobx observable \u6570\u636e\u7ed3\u6784\uff0c\u6240\u4ee5\u5f00\u53d1\u8005\u53ef\u4ee5\u76d1\u542c\u4efb\u610f\u7c92\u5ea6/\u5c42\u7ea7\u6570\u636e\u7684\u53d8\u5316\u3002"),Object(b.b)("p",null,"xform \u63d0\u4f9b\u4e86\u4e00\u4e2a\u9002\u7528\u4e8e\u8868\u5355\u8054\u52a8\u7684\u7ec4\u4ef6\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"<Form.Effect watch={watch} effect={effect} />"),"\u3002\u6e32\u67d3\u8be5\u7ec4\u4ef6\u540e\uff0c\u5f53 watch \u5bf9\u5e94\u7684\u5b57\u6bb5\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0ceffect \u4f1a\u88ab\u8c03\u7528\u4e00\u6b21\u3002"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},'<Form>\n  <FormItem name="prov" />\n  <FormItem name="cities" />\n  <Form.Effect\n    // \u6bcf\u5f53 prov \u53d8\u5316\u65f6\uff0ccities \u90fd\u4f1a\u88ab\u6e05\u7a7a\n    watch="prov"\n    effect={(value, { model }) => {\n      model.setValue(\'cities\', []);\n    }}\n  />\n</Form>\n')),Object(b.b)("p",null,"xform \u5c06\u8054\u52a8\u8bbe\u8ba1\u4e3a\u300c\u666e\u901a\u7684 React \u7ec4\u4ef6\u300d\uff0c\u65b9\u4fbf\u4e0a\u5c42\u5bf9\u8054\u52a8\u8fdb\u884c\u7ec4\u5408\u548c\u5c01\u88c5\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"// \u7ec4\u5408\u591a\u4e2a form effect \u6765\u5b9e\u73b0\u8868\u5355\u6574\u4f53\u7684\u8054\u52a8\u9700\u6c42\n<Form>\n  <Form.Effect watch={prov} effect={() => {}} />\n  <Form.Effect watch={cityDataSource$} effect={(cityList) => {}} />\n  <Form.Effect watch={cities} effect={(cities) => {}} />\n  {/* \u66f4\u591a effect... */}\n</Form>\n")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"// \u5c01\u88c5\u4e3a\u81ea\u5b9a\u4e49\u7684 effect \u7ec4\u4ef6\nconst AutoCleanEffect = ({ trigger, target }) => (\n  <Form.Effect\n    watch={trigger}\n    effect={() => {\n      target.value = null;\n    }}\n  />\n);\n\n// \u6bcf\u5f53\u7701\u4efd\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u6e05\u7a7a\u57ce\u5e02\u5b57\u6bb5\n<AutoCleanEffect trigger={prov} target={cities} />;\n")),Object(b.b)("p",null,"\u9488\u5bf9\u5f02\u6b65\u6570\u636e\u6e90\u7684\u573a\u666f\uff0cxform \u53c2\u8003\u4e86 ",Object(b.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/selector#asynchronous-selectors"},"recoil async selector")," \u8bbe\u8ba1\uff0c\u63d0\u4f9b\u4e86 createAsyncValue\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u4f7f\u7528\u540c\u6b65\u7684\u4ee3\u7801\u6765\u63cf\u8ff0\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u975e\u5e38\u9002\u5408\u62bd\u8c61\u8868\u5355\u4e2d\u7684\u5f02\u6b65\u4e0b\u62c9\u6570\u636e\u6e90\uff0c\u5177\u4f53\u8be6\u89c1 ",Object(b.b)("a",{parentName:"p",href:"effects#%E5%BC%82%E6%AD%A5%E6%95%B0%E6%8D%AE%E6%BA%90"},"xform \u8054\u52a8"),"."),Object(b.b)("h2",{id:"\u5b57\u6bb5\u6a21\u578b"},"\u5b57\u6bb5\u6a21\u578b"),Object(b.b)("p",null,"model.values \u53ea\u8bb0\u5f55\u4e86\u8868\u5355\u5185\u5404\u4e2a\u5b57\u6bb5\u7684\u503c\uff0c\u4f46\u5728\u5b9e\u9645\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u4e2a\u8868\u5355\u5b57\u6bb5\u4e2d\u8fd8\u8981\u5305\u542b\u5f88\u591a\u72b6\u6001\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"error \u5b57\u6bb5\u4e0a\u7684\u9519\u8bef\u4fe1\u606f"),Object(b.b)("li",{parentName:"ul"},"disabled \u5b57\u6bb5\u662f\u5426\u88ab\u7981\u7528"),Object(b.b)("li",{parentName:"ul"},"visible \u5b57\u6bb5\u662f\u5426\u53ef\u89c1"),Object(b.b)("li",{parentName:"ul"},"dataSource \u5b57\u6bb5\u7684\u6570\u636e\u6e90\uff08\u4e00\u822c\u7528\u4e8e\u4e0b\u62c9\u9009\u62e9\u5668\uff09"),Object(b.b)("li",{parentName:"ul"},"...")),Object(b.b)("p",null,"\u4e0d\u540c\u7684 UI \u63a7\u4ef6\u4f1a\u5e26\u6765\u4e0d\u540c\u7684\u72b6\u6001\uff0c\u6211\u4eec\u5f88\u96be\u5728\u5185\u6838\u4e2d\u679a\u4e3e\u51fa\u6240\u6709\u53ef\u80fd\u7684\u72b6\u6001\u3002\u5176\u4ed6\u7684\u8868\u5355\u65b9\u6848\u5f80\u5f80\u4f1a\u7ed9\u51fa\u4e00\u5957\u9884\u5148\u5b9a\u4e49\u597d\u7684\u72b6\u6001\uff08\u4f8b\u5982 ",Object(b.b)("a",{parentName:"p",href:"https://github.com/alibaba/formily/blob/d772523574bda50a9ecf42e92ca6f17a0f4a6422/packages/core/src/models/Field.ts#L121-L146"},"formily"),"\uff09\uff0c\u6765\u6ee1\u8db3\u7edd\u5927\u90e8\u5206\u60c5\u51b5\u3002"),Object(b.b)("p",null,"\u800c xform core \u91c7\u7528\u4e86\u53e6\u4e00\u79cd\u65b9\u5f0f\uff1a",Object(b.b)("strong",{parentName:"p"},"xform core \u4e0d\u5b9a\u4e49\u9884\u8bbe\u7684\u72b6\u6001\uff0c\u800c\u662f\u53ea\u63d0\u4f9b\u72b6\u6001\u7684\u5bb9\u5668"),"\uff0c\u5bb9\u5668\u5185\u5177\u4f53\u653e\u4ec0\u4e48\u72b6\u6001\u7531\u4e0a\u5c42\u51b3\u5b9a\uff08\u4e00\u822c\u662f\u5728\u7ec4\u4ef6\u5e93\u5bf9\u63a5 xform core \u7684\u65f6\u5019\u8fdb\u884c\u51b3\u5b9a\uff09\u3002 \u6240\u4ee5 xform \u4e2d ",Object(b.b)("a",{parentName:"p",href:"api#field"},"\u5b57\u6bb5\u5bf9\u8c61")," \u4ec5\u5305\u542b\u4e00\u4e9b\u5fc5\u8981\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u6574\u4e2a\u6a21\u578b\u975e\u5e38\u8f7b\u91cf\uff0c\u5b66\u4e60\u6210\u672c\u5f88\u4f4e \ud83e\udd13\u3002"),Object(b.b)("p",null,"xform \u652f\u6301 field \u5bf9\u8c61 ",Object(b.b)("strong",{parentName:"p"},"\u6309\u9700\u751f\u6210\uff1a \u65e0\u8bba\u5728\u4ec0\u4e48\u65f6\u5019\u8c03\u7528 ",Object(b.b)("inlineCode",{parentName:"strong"},"field = model.getField(name)"),"\uff0c\u603b\u662f\u80fd\u591f\u83b7\u53d6\u5230\u4e00\u4e2a\u6709\u6548\u7684 Field \u5bf9\u8c61"),"\u3002\u83b7\u53d6\u7684 Field \u5bf9\u8c61\u53ef\u4ee5\u8ba4\u4e3a\u662f\u300cmodel.values \u67d0\u4e2a\u6570\u636e\u7d22\u5f15\u5904\u7684\u4e00\u4e2a\u6307\u9488\u300d\uff0c\u5bf9 field.value \u7684\u8bfb\u5199\u4f1a\u81ea\u52a8\u8f6c\u6362\u4e3a\u300c\u5bf9 models.values \u6307\u5b9a\u6570\u636e\u7d22\u5f15\u4e0b\u7684\u8bfb\u5199\u300d\u3002 \u5f00\u53d1\u8005\u53ef\u4ee5\u653e\u5fc3\u7684\u5bf9 field.value \u8fdb\u884c\u8bfb\u53d6\u4e0e\u8d4b\u503c\uff0c\u6216\u662f\u521b\u5efa\u76d1\u542c\u4e0e\u8054\u52a8\uff0c\u800c\u4e0d\u9700\u8981\u62c5\u5fc3\u300cCannot read/set property 'xxx' of null\u300d\u3002"),Object(b.b)("h2",{id:"\u5206\u5f62"},"\u5206\u5f62"),Object(b.b)("p",null,Object(b.b)("del",{parentName:"p"},"\u4f18\u96c5\u7684\u8868\u5355\u5957\u5a03\u3002")),Object(b.b)("p",null,"\u5728\u8868\u5355\u590d\u7528\u4e0e\u8868\u5355\u76f8\u4e92\u5d4c\u5165\u7684\u573a\u666f\u4e0b\uff0c\u4e00\u4e2a\u300c\u5206\u5f62\u300d\u7684\u8868\u5355\u7cfb\u7edf\u53ef\u4ee5\u6781\u5927\u63d0\u5347\u4ee3\u7801\u7684\u53ef\u590d\u7528\u6027\u3002\u6240\u8c13\u300c\u5206\u5f62\u300d\uff0c\u6307\u7684\u662f\u300c\u6bcf\u4e00\u4e2a\u8868\u5355\u90fd\u80fd\u88ab\u5d4c\u5165\u5230\u53e6\u4e00\u4e2a\u5927\u7684\u8868\u5355\u4e2d\u300d\uff0c\u5206\u5f62\u5305\u62ec\u300c\u89c6\u56fe\u300d\u548c\u300c\u6a21\u578b\u300d\u4e24\u90e8\u5206\u3002"),Object(b.b)("h3",{id:"\u89c6\u56fe\u5206\u5f62"},"\u89c6\u56fe\u5206\u5f62"),Object(b.b)("p",null,"\u300c\u89c6\u56fe\u5206\u5f62\u300d\u4e3b\u8981\u6307\u89c6\u56fe\u4ee3\u7801\u4e2d\uff0c\u8868\u5355\u7ec4\u4ef6\u603b\u662f\u63cf\u8ff0 ",Object(b.b)("strong",{parentName:"p"},"\u76f8\u5bf9\u6570\u636e\u7d22\u5f15"),"\u3002Form.Object / Form.Array \u53ef\u4ee5\u5305\u88f9\u591a\u4e2a FormItem \u5e76\u6307\u5b9a\u6570\u636e\u7d22\u5f15\u524d\u7f00\uff0c\u7ec4\u5408\u5f62\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u5b50\u8868\u5355\uff0c\u8fd9\u4e2a\u5b50\u8868\u5355\u53c8\u80fd\u5d4c\u5165\u5230\u66f4\u4e0a\u5c42\u7684 Form.Object \u6216 Form.Array \u4e2d\u3002\u5177\u4f53\u8be6\u89c1 ",Object(b.b)("a",{parentName:"p",href:"advanced#%E8%A1%A8%E5%8D%95%E7%89%87%E6%AE%B5%E5%A4%8D%E7%94%A8"},"\u8868\u5355\u7247\u6bb5\u590d\u7528\u793a\u4f8b"),"."),Object(b.b)("h3",{id:"\u6a21\u578b\u5206\u5f62"},"\u6a21\u578b\u5206\u5f62"),Object(b.b)("p",null,"\u300c\u6a21\u578b\u5206\u5f62\u300d\u6307\u6a21\u578b\u7684\u6570\u636e\u7ed3\u6784\u548c API \u662f\u5206\u5f62\u53cb\u597d\u7684\u3002 xform \u63d0\u4f9b\u4e86 ",Object(b.b)("inlineCode",{parentName:"p"},"model.getSubModel(name)")," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4f1a\u57fa\u4e8e\u7236\u6a21\u578b\u8fd4\u56de\u4e00\u4e2a\u5b50\u6a21\u578b\u3002 ",Object(b.b)("strong",{parentName:"p"},"\u5b50\u6a21\u578b\u4e0e\u7236\u6a21\u578b\u90fd\u5b9e\u73b0\u4e86 ",Object(b.b)("a",{parentName:"strong",href:"api#imodel"},"IModel interface"),"\uff0c\u4e24\u8005\u5177\u6709\u76f8\u540c\u7684 API"),"\uff0c\u8fd9\u610f\u5473\u7740\u2026\u2026"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5bf9 model \u7684\u64cd\u4f5c\u4e0d\u518d\u9700\u8981\u5173\u5fc3 model \u6240\u5904\u7684\u5c42\u7ea7",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"biz#%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E5%86%85%E9%83%A8%E8%81%94%E5%8A%A8"},"\u5373\u4f7f\u5b50\u8868\u5355\u5b58\u5728\u8054\u52a8\u6216\u6821\u9a8c\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5d4c\u5165\u5230\u5927\u8868\u5355")))),Object(b.b)("li",{parentName:"ul"},"\u590d\u6742\u8868\u5355\u7684\u62c6\u5206\u4e0e\u5408\u5e76\u53d8\u5f97\u66f4\u4e3a\u5bb9\u6613"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"model.getSubModel().getSubModel()...")," \u53ef\u4ee5\u4e0d\u65ad\u5730\u5ef6\u957f... \u65b9\u4fbf\u5f00\u53d1\u8005\u9009\u53d6\u5408\u9002\u7684\u6570\u636e\u5c42\u7ea7\u8fdb\u884c\u5f00\u53d1")),Object(b.b)("p",null,"\u540c\u6837\u7684\uff0cxform \u652f\u6301 model \u5bf9\u8c61 ",Object(b.b)("strong",{parentName:"p"},"\u6309\u9700\u751f\u6210\uff1a \u65e0\u8bba\u5728\u4ec0\u4e48\u65f6\u5019\u8c03\u7528 ",Object(b.b)("inlineCode",{parentName:"strong"},"subModel = model.getModel(name)"),"\uff0c\u603b\u662f\u80fd\u591f\u83b7\u53d6\u5230\u4e00\u4e2a\u6709\u6548\u7684 Model \u5bf9\u8c61"),"\u3002\u83b7\u53d6\u7684\u5b50\u6a21\u578b\u53ef\u4ee5\u8ba4\u4e3a\u662f\u300c\u7236\u6a21\u578b\u4e2d\u67d0\u4e2a\u6570\u636e\u7d22\u5f15\u5904\u7684\u4e00\u4e2a\u6307\u9488\u300d\uff0c\u5bf9\u5b50\u6a21\u578b\u7684\u8bfb\u5199\u4f1a\u81ea\u52a8\u6620\u5c04\u4e3a\u5bf9\u7236\u6a21\u578b\u5bf9\u5e94\u6570\u636e\u7d22\u5f15\u7684\u8bfb\u5199\uff0c\u786e\u4fdd\u9876\u5c42\u7684 model.values \u662f\u6574\u4e2a\u8868\u5355\u7684\u552f\u4e00\u53ef\u4fe1\u6765\u6e90\u3002"))}i.isMDXComponent=!0}}]);