var R=Object.defineProperty;var p=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var F=(t,e,s)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,E=(t,e)=>{for(var s in e||(e={}))N.call(e,s)&&F(t,s,e[s]);if(p)for(var s of p(e))z.call(e,s)&&F(t,s,e[s]);return t};var j=(t,e)=>{var s={};for(var a in t)N.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&p)for(var a of p(t))e.indexOf(a)<0&&z.call(t,a)&&(s[a]=t[a]);return s};import{ce as U,cm as X}from"./bootstrap-CIlPtDbU.mjs";import{c as g}from"./create-icon-DyKWIynC.mjs";import{_ as Y}from"./analytics-trends.vue_vue_type_script_setup_true_lang-VaWj12Rk.mjs";import{_ as Z}from"./analytics-visits.vue_vue_type_script_setup_true_lang-BvFGfddu.mjs";import{_ as aa}from"./analytics-visits-data.vue_vue_type_script_setup_true_lang-Bl3F09RR.mjs";import{_ as ea}from"./analytics-visits-sales.vue_vue_type_script_setup_true_lang-Hz5Elo9h.mjs";import{_ as ta}from"./analytics-visits-source.vue_vue_type_script_setup_true_lang-DFBcZU4W.mjs";import{_ as sa,a as la,b as na,c as oa,d as h}from"./analysis-chart-card.vue_vue_type_script_setup_true_lang-5KC_my12.mjs";import{a9 as f,Q as A,bz as P,J as V,a8 as l,ab as ra,W as ia,ak as ca,bA as ua,bB as da,at as i,az as d,aG as v,aB as fa,au as b,av as r,as as T,ar as ma,b5 as G,b4 as _a,n,F as y,aE as w,aD as J,aC as L}from"../jse/index-index-CulmqKVw.mjs";import{_ as pa}from"./icon.vue_vue_type_script_setup_true_lang-fivSW_wP.mjs";import{_ as va,a as ba,b as ga}from"./TabsList.vue_vue_type_script_setup_true_lang-_kL9V4mB.mjs";import"./use-echarts-2MV22j1u.mjs";const xa=g("svg:download"),$a=g("svg:card"),ha=g("svg:bell"),ya=g("svg:cake"),D=f({name:"CountToAnimator",__name:"count-to-animator",props:{autoplay:{type:Boolean,default:!0},color:{default:""},decimal:{default:"."},decimals:{default:0},duration:{default:1500},endVal:{default:2021},prefix:{default:""},separator:{default:","},startVal:{default:0},suffix:{default:""},transition:{default:"linear"},useEasing:{type:Boolean,default:!0}},emits:["onStarted","onFinished"],setup(t,{expose:e,emit:s}){const a=t,c=s,o=A(a.startVal),_=A(!1);let k=P(o);const M=V(()=>Q(l(k)));ra(()=>{o.value=a.startVal}),ia([()=>a.startVal,()=>a.endVal],()=>{a.autoplay&&B()}),ca(()=>{a.autoplay&&B()});function B(){C(),o.value=a.endVal}function O(){o.value=a.startVal,C()}function C(){k=P(o,E({disabled:_,duration:a.duration,onFinished:()=>c("onFinished"),onStarted:()=>c("onStarted")},a.useEasing?{transition:ua[a.transition]}:{}))}function Q(u){if(!u&&u!==0)return"";const{decimal:S,decimals:W,prefix:q,separator:x,suffix:H}=a;u=Number(u).toFixed(W),u+="";const $=u.split(".");let m=$[0];const K=$.length>1?S+$[1]:"",I=/(\d+)(\d{3})/;if(x&&!da(x)&&m)for(;I.test(m);)m=m.replace(I,`$1${x}$2`);return q+m+K+H}return e({reset:O}),(u,S)=>(i(),d("span",{style:fa({color:u.color})},v(M.value),5))}}),wa=f({__name:"TabsTrigger",props:{class:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=t,s=V(()=>{const _=e,{class:c}=_;return j(_,["class"])}),a=U(s);return(c,o)=>(i(),b(l(X),ma(l(a),{class:l(G)("ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow",e.class)}),{default:r(()=>[T(c.$slots,"default")]),_:3},16,["class"]))}}),Va=f({__name:"CardFooter",props:{class:{}},setup(t){const e=t;return(s,a)=>(i(),d("div",{class:_a(l(G)("flex items-center p-6 pt-0",e.class))},[T(s.$slots,"default")],2))}}),Ta={class:"card-box w-full px-4 pb-5 pt-3"},ka=f({name:"AnalysisChartsTabs",__name:"analysis-charts-tabs",props:{tabs:{default:()=>[]}},setup(t){const e=t,s=V(()=>{var a,c;return(c=(a=e.tabs)==null?void 0:a[0])==null?void 0:c.value});return(a,c)=>(i(),d("div",Ta,[n(l(ga),{"default-value":s.value},{default:r(()=>[n(l(va),null,{default:r(()=>[(i(!0),d(y,null,w(a.tabs,o=>(i(),b(l(wa),{key:o.label,value:o.value},{default:r(()=>[J(v(o.label),1)]),_:2},1032,["value"]))),128))]),_:1}),(i(!0),d(y,null,w(a.tabs,o=>(i(),b(l(ba),{key:o.label,value:o.value,class:"pt-4"},{default:r(()=>[T(a.$slots,o.value)]),_:2},1032,["value"]))),128))]),_:3},8,["default-value"])]))}}),Ba={class:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"},Ca=f({name:"AnalysisOverview",__name:"analysis-overview",props:{items:{default:()=>[]}},setup(t){return(e,s)=>(i(),d("div",Ba,[(i(!0),d(y,null,w(e.items,a=>(i(),b(l(oa),{key:a.title,title:a.title,class:"w-full"},{default:r(()=>[n(l(sa),null,{default:r(()=>[n(l(la),{class:"text-xl"},{default:r(()=>[J(v(a.title),1)]),_:2},1024)]),_:2},1024),n(l(na),{class:"flex items-center justify-between"},{default:r(()=>[n(l(D),{"end-val":a.value,"start-val":1,class:"text-xl",prefix:""},null,8,["end-val"]),n(l(pa),{icon:a.icon,class:"size-8 flex-shrink-0"},null,8,["icon"])]),_:2},1024),n(l(Va),{class:"justify-between"},{default:r(()=>[L("span",null,v(a.totalTitle),1),n(l(D),{"end-val":a.totalValue,"start-val":1,prefix:""},null,8,["end-val"])]),_:2},1024)]),_:2},1032,["title"]))),128))]))}}),Sa={class:"p-5"},Ia={class:"mt-5 w-full md:flex"},Qa=f({__name:"index",setup(t){const e=[{icon:$a,title:"用户量",totalTitle:"总用户量",totalValue:12e4,value:2e3},{icon:ya,title:"访问量",totalTitle:"总访问量",totalValue:5e5,value:2e4},{icon:xa,title:"下载量",totalTitle:"总下载量",totalValue:12e4,value:8e3},{icon:ha,title:"使用量",totalTitle:"总使用量",totalValue:5e4,value:5e3}],s=[{label:"流量趋势",value:"trends"},{label:"月访问量",value:"visits"}];return(a,c)=>(i(),d("div",Sa,[n(l(Ca),{items:e}),n(l(ka),{tabs:s,class:"mt-5"},{trends:r(()=>[n(Y)]),visits:r(()=>[n(Z)]),_:1}),L("div",Ia,[n(l(h),{class:"mt-5 md:mr-4 md:mt-0 md:w-1/3",title:"访问数量"},{default:r(()=>[n(aa)]),_:1}),n(l(h),{class:"mt-5 md:mr-4 md:mt-0 md:w-1/3",title:"访问来源"},{default:r(()=>[n(ta)]),_:1}),n(l(h),{class:"mt-5 md:mt-0 md:w-1/3",title:"访问来源"},{default:r(()=>[n(ea)]),_:1})])]))}});export{Qa as default};
