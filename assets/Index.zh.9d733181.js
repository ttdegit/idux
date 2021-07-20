import{i as n,o as a,B as s,u as t,a as o}from"./index.4944b994.js";import{e,u as c,D as l,E as p,h as u,U as i,r as k,i as r,z as d,a2 as g,H as h,Q as m}from"./vendor.a8c744fb.js";var b=e({setup(){const{sm:t,lg:o}=s,e=n(t),l=a([t,o]);return c((()=>{console.log("breakpoints",l.value.breakpoints),console.log("matches",l.value.matches)})),{isSmallScreen:e,layoutChanges:l}}});b.render=function(n,a,s,t,o,e){return l(),p("div",null,[u("p",null,"isSmallScreen: "+i(n.isSmallScreen),1),u("p",null,"layoutChanges: "+i(n.layoutChanges.matches),1)])};var w=e({name:"cdk-breakpoint-Basic",components:{"raw-demo":b},setup(){const{copy:n}=t(),a=k(!1),{lang:s}=r(o);return{copied:a,onCopy:()=>{a.value||n("copied").then((n=>{a.value=!0,console.log("copied ",n),setTimeout((()=>a.value=!1),1e3)}))},lang:s}}});const f={key:0},y=u("p",null,"监听窗口变化",-1),v={key:1},S=u("div",null,[u("pre",{class:"language-html"},[u("code",null,[u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),m("template")]),u("span",{class:"token punctuation"},">")]),m("\n  "),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),m("div")]),u("span",{class:"token punctuation"},">")]),m("\n    "),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),m("p")]),u("span",{class:"token punctuation"},">")]),m("isSmallScreen: {{ isSmallScreen }}"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),m("p")]),u("span",{class:"token punctuation"},">")]),m("\n    "),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),m("p")]),u("span",{class:"token punctuation"},">")]),m("layoutChanges: {{ layoutChanges.matches }}"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),m("p")]),u("span",{class:"token punctuation"},">")]),m("\n  "),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),m("div")]),u("span",{class:"token punctuation"},">")]),m("\n"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),m("template")]),u("span",{class:"token punctuation"},">")]),m("\n\n"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),m("script")]),m(),u("span",{class:"token attr-name"},"lang"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),m("ts"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),u("span",{class:"token script"},[u("span",{class:"token language-javascript"},[m("\n"),u("span",{class:"token keyword"},"import"),m(),u("span",{class:"token punctuation"},"{"),m(" defineComponent"),u("span",{class:"token punctuation"},","),m(" watchEffect "),u("span",{class:"token punctuation"},"}"),m(),u("span",{class:"token keyword"},"from"),m(),u("span",{class:"token string"},"'vue'"),m("\n"),u("span",{class:"token keyword"},"import"),m(),u("span",{class:"token punctuation"},"{"),m(" Breakpoints"),u("span",{class:"token punctuation"},","),m(" isMatchedBreakpoint"),u("span",{class:"token punctuation"},","),m(" observeBreakpoint "),u("span",{class:"token punctuation"},"}"),m(),u("span",{class:"token keyword"},"from"),m(),u("span",{class:"token string"},"'@idux/cdk/breakpoint'"),m("\n\n"),u("span",{class:"token keyword"},"export"),m(),u("span",{class:"token keyword"},"default"),m(),u("span",{class:"token function"},"defineComponent"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"{"),m("\n  "),u("span",{class:"token function"},"setup"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),m(),u("span",{class:"token punctuation"},"{"),m("\n    "),u("span",{class:"token keyword"},"const"),m(),u("span",{class:"token punctuation"},"{"),m(" sm"),u("span",{class:"token punctuation"},","),m(" lg "),u("span",{class:"token punctuation"},"}"),m(),u("span",{class:"token operator"},"="),m(" Breakpoints\n    "),u("span",{class:"token keyword"},"const"),m(" isSmallScreen "),u("span",{class:"token operator"},"="),m(),u("span",{class:"token function"},"isMatchedBreakpoint"),u("span",{class:"token punctuation"},"("),m("sm"),u("span",{class:"token punctuation"},")"),m("\n    "),u("span",{class:"token keyword"},"const"),m(" layoutChanges "),u("span",{class:"token operator"},"="),m(),u("span",{class:"token function"},"observeBreakpoint"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"["),m("sm"),u("span",{class:"token punctuation"},","),m(" lg"),u("span",{class:"token punctuation"},"]"),u("span",{class:"token punctuation"},")"),m("\n    "),u("span",{class:"token function"},"watchEffect"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),m(),u("span",{class:"token operator"},"=>"),m(),u("span",{class:"token punctuation"},"{"),m("\n      console"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"log"),u("span",{class:"token punctuation"},"("),u("span",{class:"token string"},"'breakpoints'"),u("span",{class:"token punctuation"},","),m(" layoutChanges"),u("span",{class:"token punctuation"},"."),m("value"),u("span",{class:"token punctuation"},"."),m("breakpoints"),u("span",{class:"token punctuation"},")"),m("\n      console"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"log"),u("span",{class:"token punctuation"},"("),u("span",{class:"token string"},"'matches'"),u("span",{class:"token punctuation"},","),m(" layoutChanges"),u("span",{class:"token punctuation"},"."),m("value"),u("span",{class:"token punctuation"},"."),m("matches"),u("span",{class:"token punctuation"},")"),m("\n    "),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},")"),m("\n    "),u("span",{class:"token keyword"},"return"),m(),u("span",{class:"token punctuation"},"{"),m(" isSmallScreen"),u("span",{class:"token punctuation"},","),m(" layoutChanges "),u("span",{class:"token punctuation"},"}"),m("\n  "),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),m("\n"),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},")"),m("\n")])]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),m("script")]),u("span",{class:"token punctuation"},">")]),m("\n")])])],-1);w.render=function(n,a,s,t,o,e){const c=d("raw-demo"),i=d("global-code-box");return l(),p(i,{packageName:"cdk",componentName:"breakpoint",demoName:"Basic",title:"zh"===n.lang?"基本使用":"Basic usage",copied:n.copied,onCopy:n.onCopy},{description:g((()=>["zh"===n.lang?(l(),p("span",f,[y])):h("",!0),"en"===n.lang?(l(),p("span",v)):h("",!0)])),rawCode:g((()=>[u(c)])),highlightCode:g((()=>[S])),_:1},8,["title","copied","onCopy"])};var x={name:"Demobreakpoint",components:{Basic:w},setup(){const n=k(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const B=m(),C={class:"markdown header-wrapper"},M=m("Breakpoint"),E=u("span",{class:"subtitle"},"断点",-1),L={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/cdk/breakpoint/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},X=u("section",{class:"markdown"},[u("p",null,"提供构建响应式系统的工具, 以响应屏幕尺寸的变化：")],-1),_=u("span",null,"代码演示",-1),z={class:"example-wrapper"},A=u("section",{class:"markdown api-wrapper"},[u("h2",{id:"api"},[u("span",null,"API"),u("a",{onclick:"window.location.hash = 'api'",class:"anchor"},"#")]),u("h3",{id:"breakpoints"},[u("span",null,"Breakpoints"),u("a",{onclick:"window.location.hash = 'breakpoints'",class:"anchor"},"#")]),u("p",null,"默认提供的 5 个断点"),u("table",null,[u("thead",null,[u("tr",null,[u("th",null,"属性"),u("th",null,"说明")])]),u("tbody",null,[u("tr",null,[u("td",null,[u("code",null,"XSmall")]),u("td",null,[u("code",null,"< 768px")])]),u("tr",null,[u("td",null,[u("code",null,"Small")]),u("td",null,[u("code",null,"≥ 768px && < 1024px")])]),u("tr",null,[u("td",null,[u("code",null,"Medium")]),u("td",null,[u("code",null,"≥ 1024px && < 1280px")])]),u("tr",null,[u("td",null,[u("code",null,"Large")]),u("td",null,[u("code",null,"≥ 1280px && < 1720px")])]),u("tr",null,[u("td",null,[u("code",null,"XLarge")]),u("td",null,[u("code",null,"≥ 1720px")])])])]),u("h3",{id:"ismatchedbreakpoint"},[u("span",null,"isMatchedBreakpoint"),u("a",{onclick:"window.location.hash = 'ismatchedbreakpoint'",class:"anchor"},"#")]),u("p",null,[m("非响应式的断点匹配, 参数支持: "),u("code",null,"string | string[]")]),u("pre",{class:"language-ts"},[u("code",null,[u("span",{class:"token keyword"},"const"),m(),u("span",{class:"token punctuation"},"{"),m(" Small"),u("span",{class:"token punctuation"},","),m(" Small "),u("span",{class:"token punctuation"},"}"),m(),u("span",{class:"token operator"},"="),m(" Breakpoints\n"),u("span",{class:"token keyword"},"const"),m(" isXSmallScreen "),u("span",{class:"token operator"},"="),m(),u("span",{class:"token function"},"isMatchedBreakpoint"),u("span",{class:"token punctuation"},"("),m("Small"),u("span",{class:"token punctuation"},")"),m("\n"),u("span",{class:"token keyword"},"const"),m(" isSmallOrLarge "),u("span",{class:"token operator"},"="),m(),u("span",{class:"token function"},"isMatchedBreakpoint"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"["),m("XSmall"),u("span",{class:"token punctuation"},","),m(" Small"),u("span",{class:"token punctuation"},"]"),u("span",{class:"token punctuation"},")")])]),u("h3",{id:"observebreakpoint"},[u("span",null,"observeBreakpoint"),u("a",{onclick:"window.location.hash = 'observebreakpoint'",class:"anchor"},"#")]),u("p",null,[m("断点观察者, 响应式的监听断点变化, 参数支持: "),u("code",null,"string | string[]")]),u("pre",{class:"language-ts"},[u("code",null,[u("span",{class:"token keyword"},"const"),m(),u("span",{class:"token punctuation"},"{"),m(" Small"),u("span",{class:"token punctuation"},","),m(" Small "),u("span",{class:"token punctuation"},"}"),m(),u("span",{class:"token operator"},"="),m(" Breakpoints\n"),u("span",{class:"token keyword"},"const"),m(" layoutChanges "),u("span",{class:"token operator"},"="),m(),u("span",{class:"token function"},"observeBreakpoint"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"["),m("XSmall"),u("span",{class:"token punctuation"},","),m(" Small"),u("span",{class:"token punctuation"},"]"),u("span",{class:"token punctuation"},")"),m("\n\n"),u("span",{class:"token function"},"watchEffect"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),m(),u("span",{class:"token operator"},"=>"),m(),u("span",{class:"token punctuation"},"{"),m("\n  "),u("span",{class:"token builtin"},"console"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"log"),u("span",{class:"token punctuation"},"("),u("span",{class:"token string"},"'breakpoints'"),u("span",{class:"token punctuation"},","),m(" layoutChanges"),u("span",{class:"token punctuation"},"."),m("value"),u("span",{class:"token punctuation"},"."),m("breakpoints"),u("span",{class:"token punctuation"},")"),m("\n  "),u("span",{class:"token builtin"},"console"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"log"),u("span",{class:"token punctuation"},"("),u("span",{class:"token string"},"'matches'"),u("span",{class:"token punctuation"},","),m(" layoutChanges"),u("span",{class:"token punctuation"},"."),m("value"),u("span",{class:"token punctuation"},"."),m("matches"),u("span",{class:"token punctuation"},")"),m("\n"),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},")")])]),u("h3",{id:"cleanobservables"},[u("span",null,"cleanObservables"),u("a",{onclick:"window.location.hash = 'cleanobservables'",class:"anchor"},"#")]),u("p",null,"用于清空断点观察者的缓存"),u("pre",{class:"language-ts"},[u("code",null,[u("span",{class:"token function"},"cleanObservables"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")")])]),u("h3",{id:"matchmedia"},[u("span",null,"matchMedia"),u("a",{onclick:"window.location.hash = 'matchmedia'",class:"anchor"},"#")]),u("p",null,[m("媒体匹配器，主要用于磨皮各个浏览器的实现差异, 参数支持："),u("code",null,"string")]),u("pre",{class:"language-ts"},[u("code",null,[u("span",{class:"token keyword"},"const"),m(" mediaQueryList "),u("span",{class:"token operator"},"="),m(" mediaMatcher"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"matchMedia"),u("span",{class:"token punctuation"},"("),m("Breakpoints"),u("span",{class:"token punctuation"},"."),m("Small"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";")])])],-1);x.render=function(n,a,s,t,o,e){const c=d("ix-anchor-link"),i=d("ix-anchor"),k=d("ix-icon"),r=d("Basic"),h=d("ix-col"),m=d("ix-row");return l(),p("article",null,[u(i,{class:"toc-wrapper",affix:"",offset:"16",onClick:a[1]||(a[1]=n=>t.goLink(n))},{default:g((()=>[u(c,{href:"#cdk-breakpoint-demo-Basic",title:"基本使用"}),B,u(c,{href:"#api",title:"API"})])),_:1}),u("section",C,[u("h1",null,[M,E,u("a",L,[u(k,{name:"edit"})])]),X,u("h2",null,[_,u(k,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:a[2]||(a[2]=n=>t.expandAll())})])]),u("section",z,[u(m,{gutter:"16"},{default:g((()=>[u(h,{lg:"12",span:"24"},{default:g((()=>[u(r)])),_:1}),u(h,{lg:"12",span:"24"})])),_:1})]),A])};export default x;
