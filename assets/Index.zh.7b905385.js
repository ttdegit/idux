import{u as n,a as t}from"./index.4944b994.js";import{z as a,D as s,E as o,a2 as l,h as e,e as p,r as c,i as u,H as i,Q as k,ag as r,ah as d,F as g,ai as m,Z as h}from"./vendor.a8c744fb.js";const v={},w=e("span",null,"Tooltip will show when it's hovered.",-1);v.render=function(n,t){const e=a("ix-tooltip");return s(),o(e,{title:"prompt text"},{default:l((()=>[w])),_:1})};var x=p({name:"components-tooltip-Basic",components:{"raw-demo":v},setup(){const{copy:a}=n(),s=c(!1),{lang:o}=u(t);return{copied:s,onCopy:()=>{s.value||a("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:o}}});const b={key:0},y=e("p",null,"最简单的用法。",-1),f={key:1},C=e("p",null,"The simplest use.",-1),T=e("div",null,[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("template")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-tooltip")]),k(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("prompt text"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),k("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("span")]),e("span",{class:"token punctuation"},">")]),k("Tooltip will show when it's hovered."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("span")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-tooltip")]),e("span",{class:"token punctuation"},">")]),k("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("template")]),e("span",{class:"token punctuation"},">")]),k("\n")])])],-1);x.render=function(n,t,p,c,u,k){const r=a("raw-demo"),d=a("global-code-box");return s(),o(d,{packageName:"components",componentName:"tooltip",demoName:"Basic",title:"zh"===n.lang?"基本使用":"Basic usage",copied:n.copied,onCopy:n.onCopy},{description:l((()=>["zh"===n.lang?(s(),o("span",b,[y])):i("",!0),"en"===n.lang?(s(),o("span",f,[C])):i("",!0)])),rawCode:l((()=>[e(r)])),highlightCode:l((()=>[T])),_:1},8,["title","copied","onCopy"])};const _={},q=m();r("data-v-76fb56a2");const N=k("Hover"),D=k("Focus"),z=k("Click");d();const O=q(((n,t)=>{const l=a("ix-button"),p=a("ix-tooltip");return s(),o(g,null,[e(p,{title:"prompt text"},{default:q((()=>[e(l,null,{default:q((()=>[N])),_:1})])),_:1}),e(p,{trigger:"focus",title:"prompt text"},{default:q((()=>[e(l,null,{default:q((()=>[D])),_:1})])),_:1}),e(p,{trigger:"click",title:"prompt text"},{default:q((()=>[e(l,null,{default:q((()=>[z])),_:1})])),_:1})],64)}));_.render=O,_.__scopeId="data-v-76fb56a2";var V=p({name:"components-tooltip-Trigger",components:{"raw-demo":_},setup(){const{copy:a}=n(),s=c(!1),{lang:o}=u(t);return{copied:s,onCopy:()=>{s.value||a("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:o}}});const B={key:0},H=e("p",null,"鼠标移入、聚焦、点击。",-1),A={key:1},I=e("p",null,"Mouse in, focus, click.",-1),j=e("div",null,[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("template")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-tooltip")]),k(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("prompt text"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),k("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-button")]),e("span",{class:"token punctuation"},">")]),k("Hover"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-button")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-tooltip")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-tooltip")]),k(),e("span",{class:"token attr-name"},"trigger"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("focus"),e("span",{class:"token punctuation"},'"')]),k(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("prompt text"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),k("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-button")]),e("span",{class:"token punctuation"},">")]),k("Focus"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-button")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-tooltip")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-tooltip")]),k(),e("span",{class:"token attr-name"},"trigger"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("click"),e("span",{class:"token punctuation"},'"')]),k(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("prompt text"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),k("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-button")]),e("span",{class:"token punctuation"},">")]),k("Click"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-button")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-tooltip")]),e("span",{class:"token punctuation"},">")]),k("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("template")]),e("span",{class:"token punctuation"},">")]),k("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("style")]),k(),e("span",{class:"token attr-name"},"scoped"),k(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("less"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token style"},[e("span",{class:"token language-css"},[k("\n"),e("span",{class:"token selector"},".ix-button"),k(),e("span",{class:"token punctuation"},"{"),k("\n  "),e("span",{class:"token property"},"margin-right"),e("span",{class:"token punctuation"},":"),k(" 4px"),e("span",{class:"token punctuation"},";"),k("\n"),e("span",{class:"token punctuation"},"}"),k("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("style")]),e("span",{class:"token punctuation"},">")]),k("\n")])])],-1);V.render=function(n,t,p,c,u,k){const r=a("raw-demo"),d=a("global-code-box");return s(),o(d,{packageName:"components",componentName:"tooltip",demoName:"Trigger",title:"zh"===n.lang?"三种触发方式":"Three ways to trigger",copied:n.copied,onCopy:n.onCopy},{description:l((()=>["zh"===n.lang?(s(),o("span",B,[H])):i("",!0),"en"===n.lang?(s(),o("span",A,[I])):i("",!0)])),rawCode:l((()=>[e(r)])),highlightCode:l((()=>[j])),_:1},8,["title","copied","onCopy"])};const E={},F=e("span",null,"Tooltip will show when it's hovered.",-1);E.render=function(n,t){const e=a("ix-tooltip");return s(),o(e,{title:"prompt text",destroyOnHide:""},{default:l((()=>[F])),_:1})};var P=p({name:"components-tooltip-Destroy",components:{"raw-demo":E},setup(){const{copy:a}=n(),s=c(!1),{lang:o}=u(t);return{copied:s,onCopy:()=>{s.value||a("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:o}}});const M={key:0},L=e("p",null,"浮层隐藏时销毁。",-1),R={key:1},G=e("p",null,"Overlay is destroyed on hide.",-1),Q=e("div",null,[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("template")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-tooltip")]),k(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("prompt text"),e("span",{class:"token punctuation"},'"')]),k(),e("span",{class:"token attr-name"},"destroyOnHide"),e("span",{class:"token punctuation"},">")]),k("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("span")]),e("span",{class:"token punctuation"},">")]),k("Tooltip will show when it's hovered."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("span")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-tooltip")]),e("span",{class:"token punctuation"},">")]),k("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("template")]),e("span",{class:"token punctuation"},">")]),k("\n")])])],-1);P.render=function(n,t,p,c,u,k){const r=a("raw-demo"),d=a("global-code-box");return s(),o(d,{packageName:"components",componentName:"tooltip",demoName:"Destroy",title:"zh"===n.lang?"隐藏时销毁":"Destroy on hide",copied:n.copied,onCopy:n.onCopy},{description:l((()=>["zh"===n.lang?(s(),o("span",M,[L])):i("",!0),"en"===n.lang?(s(),o("span",R,[G])):i("",!0)])),rawCode:l((()=>[e(r)])),highlightCode:l((()=>[Q])),_:1},8,["title","copied","onCopy"])};var S=p({name:"VModel",setup(){const n=c(!0);return{visible:n,toggle:()=>{n.value=!n.value},change:t=>{n.value=t.value}}}});const U=e("span",null,"Tooltip will show when it's click.",-1),Z=k("toggle");S.render=function(n,t,p,c,u,i){const k=a("ix-tooltip"),r=a("ix-button");return s(),o("div",null,[e(k,{visible:n.visible,"onUpdate:visible":t[1]||(t[1]=t=>n.visible=t),title:"prompt text",trigger:"click"},{default:l((()=>[U])),_:1},8,["visible"]),e(r,{onClick:h(n.toggle,["stop"])},{default:l((()=>[Z])),_:1},8,["onClick"])])};var J=p({name:"components-tooltip-Vmodel",components:{"raw-demo":S},setup(){const{copy:a}=n(),s=c(!1),{lang:o}=u(t);return{copied:s,onCopy:()=>{s.value||a("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:o}}});const K={key:0},W=e("p",null,[e("code",null,"tooltip"),k(" 的显隐还支持通过双向绑定的方式来控制")],-1),X={key:1},Y=e("p",null,[e("code",null,"tooltip"),k(" also supports explicit and implicit control through two-way binding")],-1),$=e("div",null,[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("template")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("div")]),e("span",{class:"token punctuation"},">")]),k("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-tooltip")]),k(),e("span",{class:"token attr-name"},[e("span",{class:"token namespace"},"v-model:"),k("visible")]),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("visible"),e("span",{class:"token punctuation"},'"')]),k(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("prompt text"),e("span",{class:"token punctuation"},'"')]),k(),e("span",{class:"token attr-name"},"trigger"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("click"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),k("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("span")]),e("span",{class:"token punctuation"},">")]),k("Tooltip will show when it's click."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("span")]),e("span",{class:"token punctuation"},">")]),k("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-tooltip")]),e("span",{class:"token punctuation"},">")]),k("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("ix-button")]),k(),e("span",{class:"token attr-name"},"@click.stop"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("toggle"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),k("toggle"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("ix-button")]),e("span",{class:"token punctuation"},">")]),k("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("div")]),e("span",{class:"token punctuation"},">")]),k("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("template")]),e("span",{class:"token punctuation"},">")]),k("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),k("script")]),k(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),k("ts"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[k("\n"),e("span",{class:"token keyword"},"import"),k(),e("span",{class:"token punctuation"},"{"),k(" ComputedRef"),e("span",{class:"token punctuation"},","),k(" defineComponent"),e("span",{class:"token punctuation"},","),k(" ref "),e("span",{class:"token punctuation"},"}"),k(),e("span",{class:"token keyword"},"from"),k(),e("span",{class:"token string"},"'vue'"),k("\n\n"),e("span",{class:"token keyword"},"export"),k(),e("span",{class:"token keyword"},"default"),k(),e("span",{class:"token function"},"defineComponent"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),k("\n  name"),e("span",{class:"token operator"},":"),k(),e("span",{class:"token string"},"'VModel'"),e("span",{class:"token punctuation"},","),k("\n  "),e("span",{class:"token function"},"setup"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),k(),e("span",{class:"token punctuation"},"{"),k("\n    "),e("span",{class:"token keyword"},"const"),k(" visible "),e("span",{class:"token operator"},"="),k(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},")"),k("\n\n    "),e("span",{class:"token keyword"},"const"),k(),e("span",{class:"token function-variable function"},"toggle"),k(),e("span",{class:"token operator"},"="),k(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),k(),e("span",{class:"token operator"},"=>"),k(),e("span",{class:"token punctuation"},"{"),k("\n      visible"),e("span",{class:"token punctuation"},"."),k("value "),e("span",{class:"token operator"},"="),k(),e("span",{class:"token operator"},"!"),k("visible"),e("span",{class:"token punctuation"},"."),k("value\n    "),e("span",{class:"token punctuation"},"}"),k("\n\n    "),e("span",{class:"token keyword"},"const"),k(),e("span",{class:"token function-variable function"},"change"),k(),e("span",{class:"token operator"},"="),k(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},[k("e"),e("span",{class:"token operator"},":"),k(" ComputedRef"),e("span",{class:"token operator"},"<"),k("boolean"),e("span",{class:"token operator"},">")]),e("span",{class:"token punctuation"},")"),k(),e("span",{class:"token operator"},"=>"),k(),e("span",{class:"token punctuation"},"{"),k("\n      visible"),e("span",{class:"token punctuation"},"."),k("value "),e("span",{class:"token operator"},"="),k(" e"),e("span",{class:"token punctuation"},"."),k("value\n    "),e("span",{class:"token punctuation"},"}"),k("\n\n    "),e("span",{class:"token keyword"},"return"),k(),e("span",{class:"token punctuation"},"{"),k(" visible"),e("span",{class:"token punctuation"},","),k(" toggle"),e("span",{class:"token punctuation"},","),k(" change "),e("span",{class:"token punctuation"},"}"),k("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),k("\n"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),k("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),k("script")]),e("span",{class:"token punctuation"},">")]),k("\n")])])],-1);J.render=function(n,t,p,c,u,k){const r=a("raw-demo"),d=a("global-code-box");return s(),o(d,{packageName:"components",componentName:"tooltip",demoName:"Vmodel",title:"zh"===n.lang?"双向绑定":"Two-way binding",copied:n.copied,onCopy:n.onCopy},{description:l((()=>["zh"===n.lang?(s(),o("span",K,[W])):i("",!0),"en"===n.lang?(s(),o("span",X,[Y])):i("",!0)])),rawCode:l((()=>[e(r)])),highlightCode:l((()=>[$])),_:1},8,["title","copied","onCopy"])};var nn={name:"Demotooltip",components:{Basic:x,Trigger:V,Destroy:P,Vmodel:J},setup(){const n=c(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const tn=k(),an=k(),sn=k(),on=k(),ln={class:"markdown header-wrapper"},en=k("Tooltip"),pn=e("span",{class:"subtitle"},"文字提示",-1),cn={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/components/tooltip/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},un=e("section",{class:"markdown"},[e("p",null,"简单的文字提示气泡框。"),e("h2",{id:"何时使用"},[e("span",null,"何时使用"),e("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),e("p",null,"鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。"),e("p",null,[k("可用来代替系统默认的 "),e("code",null,"title"),k(" 提示，提供一个 "),e("code",null,"按钮/文字/操作"),k(" 的文案解释。")])],-1),kn=e("span",null,"代码演示",-1),rn={class:"example-wrapper"},dn=e("section",{class:"markdown api-wrapper"},[e("h2",{id:"api"},[e("span",null,"API"),e("a",{onclick:"window.location.hash = 'api'",class:"anchor"},"#")]),e("h3",{id:"<code>ix-tooltip</code>"},[e("span",null,[e("code",null,"ix-tooltip")]),e("a",{onclick:"window.location.hash = '<code>ix-tooltip</code>'",class:"anchor"},"#")]),e("h4",{id:"props"},[e("span",null,"Props"),e("a",{onclick:"window.location.hash = 'props'",class:"anchor"},"#")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"全局配置"),e("th",null,"备注")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"title")]),e("td",null,"浮层的标题"),e("td",null,[e("code",null,"string | #title")]),e("td",null,"-"),e("td",null,"-"),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"placement")]),e("td",null,"浮层的对齐方式"),e("td",null,[e("code",null,"OverlayPlacement")]),e("td",null,[e("code",null,"top")]),e("td",null,"✅"),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"visible")]),e("td",null,"是否显隐"),e("td",null,[e("code",null,"boolean")]),e("td",null,"-"),e("td",null,"-"),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"trigger")]),e("td",null,"浮层触发方式"),e("td",null,[e("code",null,"OverlayTrigger")]),e("td",null,[e("code",null,"hover")]),e("td",null,"✅"),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"showDelay")]),e("td",null,"浮层显示延时"),e("td",null,[e("code",null,"number")]),e("td",null,"100"),e("td",null,"✅"),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"hideDelay")]),e("td",null,"浮层隐藏延时"),e("td",null,[e("code",null,"number")]),e("td",null,"500"),e("td",null,"✅"),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"destroyOnHide")]),e("td",null,"隐藏时是否销毁浮层"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")]),e("td",null,"✅"),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"autoAdjust")]),e("td",null,"浮层被遮挡时自动调整位置"),e("td",null,[e("code",null,"booleaan")]),e("td",null,[e("code",null,"true")]),e("td",null,"✅"),e("td",null,"TODO")])])]),e("h4",{id:"slots"},[e("span",null,"Slots"),e("a",{onclick:"window.location.hash = 'slots'",class:"anchor"},"#")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"说明")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"default")]),e("td",null,"触发浮层的 trigger")])])]),e("h4",{id:"emits"},[e("span",null,"Emits"),e("a",{onclick:"window.location.hash = 'emits'",class:"anchor"},"#")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"说明"),e("th",null,"类型")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"update:visible")]),e("td",null,"浮层显隐变化回调"),e("td",null,[e("code",null,"(visible: boolean) => void")])])])])],-1);nn.render=function(n,t,p,c,u,i){const k=a("ix-anchor-link"),r=a("ix-anchor"),d=a("ix-icon"),g=a("Basic"),m=a("Destroy"),h=a("ix-col"),v=a("Trigger"),w=a("Vmodel"),x=a("ix-row");return s(),o("article",null,[e(r,{class:"toc-wrapper",affix:"",offset:"16",onClick:t[1]||(t[1]=n=>c.goLink(n))},{default:l((()=>[e(k,{href:"#components-tooltip-demo-Basic",title:"基本使用"}),tn,e(k,{href:"#components-tooltip-demo-Trigger",title:"三种触发方式"}),an,e(k,{href:"#components-tooltip-demo-Destroy",title:"隐藏时销毁"}),sn,e(k,{href:"#components-tooltip-demo-Vmodel",title:"双向绑定"}),on,e(k,{href:"#api",title:"API"})])),_:1}),e("section",ln,[e("h1",null,[en,pn,e("a",cn,[e(d,{name:"edit"})])]),un,e("h2",null,[kn,e(d,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:t[2]||(t[2]=n=>c.expandAll())})])]),e("section",rn,[e(x,{gutter:"16"},{default:l((()=>[e(h,{lg:"12",span:"24"},{default:l((()=>[e(g),e(m)])),_:1}),e(h,{lg:"12",span:"24"},{default:l((()=>[e(v),e(w)])),_:1})])),_:1})]),dn])};export default nn;
