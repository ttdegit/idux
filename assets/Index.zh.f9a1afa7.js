import{u as n,a}from"./index.4944b994.js";import{e as s,z as t,D as o,E as e,a2 as c,Q as l,r as p,i as u,H as i,h as r}from"./vendor.a8c744fb.js";var k=s({setup(){const{copy:a}=n();return{onCopy:()=>{a("Copy Text").then((n=>{console.log("onCopy",n)}))}}}});const d=l("Copy");k.render=function(n,a,s,l,p,u){const i=t("ix-button");return o(),e(i,{onClick:n.onCopy},{default:c((()=>[d])),_:1},8,["onClick"])};var g=s({name:"cdk-clipboard-Basic",components:{"raw-demo":k},setup(){const{copy:s}=n(),t=p(!1),{lang:o}=u(a);return{copied:t,onCopy:()=>{t.value||s("copied").then((n=>{t.value=!0,console.log("copied ",n),setTimeout((()=>t.value=!1),1e3)}))},lang:o}}});const m={key:0},h=r("p",null,"复制文本",-1),b={key:1},f=r("div",null,[r("pre",{class:"language-html"},[r("code",null,[r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),l("template")]),r("span",{class:"token punctuation"},">")]),l("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),l("ix-button")]),l(),r("span",{class:"token attr-name"},"@click"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),l("onCopy"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),l("Copy"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),l("ix-button")]),r("span",{class:"token punctuation"},">")]),l("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),l("template")]),r("span",{class:"token punctuation"},">")]),l("\n\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),l("script")]),l(),r("span",{class:"token attr-name"},"lang"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),l("ts"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),r("span",{class:"token script"},[r("span",{class:"token language-javascript"},[l("\n"),r("span",{class:"token keyword"},"import"),l(),r("span",{class:"token punctuation"},"{"),l(" defineComponent "),r("span",{class:"token punctuation"},"}"),l(),r("span",{class:"token keyword"},"from"),l(),r("span",{class:"token string"},"'vue'"),l("\n"),r("span",{class:"token keyword"},"import"),l(),r("span",{class:"token punctuation"},"{"),l(" useClipboard "),r("span",{class:"token punctuation"},"}"),l(),r("span",{class:"token keyword"},"from"),l(),r("span",{class:"token string"},"'@idux/cdk/clipboard'"),l("\n\n"),r("span",{class:"token keyword"},"export"),l(),r("span",{class:"token keyword"},"default"),l(),r("span",{class:"token function"},"defineComponent"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},"{"),l("\n  "),r("span",{class:"token function"},"setup"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),l(),r("span",{class:"token punctuation"},"{"),l("\n    "),r("span",{class:"token keyword"},"const"),l(),r("span",{class:"token punctuation"},"{"),l(" copy "),r("span",{class:"token punctuation"},"}"),l(),r("span",{class:"token operator"},"="),l(),r("span",{class:"token function"},"useClipboard"),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),l("\n    "),r("span",{class:"token keyword"},"const"),l(),r("span",{class:"token function-variable function"},"onCopy"),l(),r("span",{class:"token operator"},"="),l(),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),l(),r("span",{class:"token operator"},"=>"),l(),r("span",{class:"token punctuation"},"{"),l("\n      "),r("span",{class:"token function"},"copy"),r("span",{class:"token punctuation"},"("),r("span",{class:"token string"},"'Copy Text'"),r("span",{class:"token punctuation"},")"),r("span",{class:"token punctuation"},"."),r("span",{class:"token function"},"then"),r("span",{class:"token punctuation"},"("),r("span",{class:"token parameter"},"success"),l(),r("span",{class:"token operator"},"=>"),l(),r("span",{class:"token punctuation"},"{"),l("\n        console"),r("span",{class:"token punctuation"},"."),r("span",{class:"token function"},"log"),r("span",{class:"token punctuation"},"("),r("span",{class:"token string"},"'onCopy'"),r("span",{class:"token punctuation"},","),l(" success"),r("span",{class:"token punctuation"},")"),l("\n      "),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},")"),l("\n    "),r("span",{class:"token punctuation"},"}"),l("\n    "),r("span",{class:"token keyword"},"return"),l(),r("span",{class:"token punctuation"},"{"),l(" onCopy "),r("span",{class:"token punctuation"},"}"),l("\n  "),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},","),l("\n"),r("span",{class:"token punctuation"},"}"),r("span",{class:"token punctuation"},")"),l("\n")])]),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),l("script")]),r("span",{class:"token punctuation"},">")]),l("\n")])])],-1);g.render=function(n,a,s,l,p,u){const k=t("raw-demo"),d=t("global-code-box");return o(),e(d,{packageName:"cdk",componentName:"clipboard",demoName:"Basic",title:"zh"===n.lang?"基本使用":"Basic usage",copied:n.copied,onCopy:n.onCopy},{description:c((()=>["zh"===n.lang?(o(),e("span",m,[h])):i("",!0),"en"===n.lang?(o(),e("span",b)):i("",!0)])),rawCode:c((()=>[r(k)])),highlightCode:c((()=>[f])),_:1},8,["title","copied","onCopy"])};var y={name:"Democlipboard",components:{Basic:g},setup(){const n=p(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const w=l(),x={class:"markdown header-wrapper"},C=l("Clipboard"),v=r("span",{class:"subtitle"},"剪贴板",-1),B={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/cdk/clipboard/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},_=r("section",{class:"markdown"},[r("p",null,"对系统剪贴板进行了简单封装，方便使用。"),r("h2",{id:"何时使用"},[r("span",null,"何时使用"),r("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),r("p",null,"用于对文本的复制。"),r("p",null,[l("对于简单的文本可以直接复制，但是对于较长的文本，浏览器需要时间来填充中间textarea元素并复制内容。在这种情况下，直接调用可能会失败，因此可以通过传入 "),r("code",null,"attempts"),l(" 进行多次尝试。")])],-1),z=r("span",null,"代码演示",-1),A={class:"example-wrapper"},I=r("section",{class:"markdown api-wrapper"},[r("h2",{id:"api"},[r("span",null,"API"),r("a",{onclick:"window.location.hash = 'api'",class:"anchor"},"#")]),r("h3",{id:"<code>useclipboard</code>"},[r("span",null,[r("code",null,"useClipboard")]),r("a",{onclick:"window.location.hash = '<code>useclipboard</code>'",class:"anchor"},"#")]),r("pre",{class:"language-ts"},[r("code",null,[r("span",{class:"token keyword"},"export"),l(),r("span",{class:"token keyword"},"const"),l(),r("span",{class:"token function-variable function"},"useClipboard"),r("span",{class:"token operator"},":"),l(),r("span",{class:"token punctuation"},"("),r("span",{class:"token punctuation"},")"),l(),r("span",{class:"token operator"},"=>"),l(),r("span",{class:"token punctuation"},"{"),l(),r("span",{class:"token function-variable function"},"copy"),r("span",{class:"token operator"},":"),l(),r("span",{class:"token punctuation"},"("),l("text"),r("span",{class:"token operator"},":"),l(),r("span",{class:"token builtin"},"string"),r("span",{class:"token punctuation"},","),l(" attempts"),r("span",{class:"token operator"},"?"),r("span",{class:"token operator"},":"),l(),r("span",{class:"token builtin"},"number"),r("span",{class:"token punctuation"},")"),l(),r("span",{class:"token operator"},"=>"),l(),r("span",{class:"token builtin"},"Promise"),r("span",{class:"token operator"},"<"),r("span",{class:"token builtin"},"boolean"),r("span",{class:"token operator"},">"),l(),r("span",{class:"token punctuation"},"}")])]),r("table",null,[r("thead",null,[r("tr",null,[r("th",null,"属性"),r("th",null,"说明"),r("th",null,"类型"),r("th",null,"默认值")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("code",null,"text")]),r("td",null,"需要复制的文本"),r("td",null,[r("code",null,"string")]),r("td",null,"-")]),r("tr",null,[r("td",null,[r("code",null,"attempts")]),r("td",null,"尝试次数"),r("td",null,[r("code",null,"number")]),r("td",null,[r("code",null,"1")])])])])],-1);y.render=function(n,a,s,l,p,u){const i=t("ix-anchor-link"),k=t("ix-anchor"),d=t("ix-icon"),g=t("Basic"),m=t("ix-col"),h=t("ix-row");return o(),e("article",null,[r(k,{class:"toc-wrapper",affix:"",offset:"16",onClick:a[1]||(a[1]=n=>l.goLink(n))},{default:c((()=>[r(i,{href:"#cdk-clipboard-demo-Basic",title:"基本使用"}),w,r(i,{href:"#api",title:"API"})])),_:1}),r("section",x,[r("h1",null,[C,v,r("a",B,[r(d,{name:"edit"})])]),_,r("h2",null,[z,r(d,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:a[2]||(a[2]=n=>l.expandAll())})])]),r("section",A,[r(h,{gutter:"16"},{default:c((()=>[r(m,{lg:"12",span:"24"},{default:c((()=>[r(g)])),_:1}),r(m,{lg:"12",span:"24"})])),_:1})]),I])};export default y;
