var b=(v,D,i)=>new Promise((d,r)=>{var s=o=>{try{u(i.next(o))}catch(c){r(c)}},e=o=>{try{u(i.throw(o))}catch(c){r(c)}},u=o=>o.done?d(o.value):Promise.resolve(o.value).then(s,e);u((i=i.apply(v,D)).next())});import{I,aU as x,l as C}from"./bootstrap-CIlPtDbU.mjs";import{F as w,a as k}from"./index-CY4pGJKi.mjs";import{I as U}from"./index-MMlqTCj9.mjs";import{T as K,a as B}from"./index-BA6odBth.mjs";import{a9 as F,ak as P,Q as m,at as l,az as V,n as p,av as g,F as _,aE as h,au as N,a8 as t,aC as S,aD as T}from"../jse/index-index-CulmqKVw.mjs";import{S as E}from"./index-CeJhG9t7.mjs";import"./Col-CY1020A8.mjs";import"./responsiveObserve-CKY_yQR9.mjs";import"./useFlexGapSupport-UdCnRdDh.mjs";import"./Trigger-CxuUq1Ff.mjs";import"./ResizeObserver.es-CDE7jhPe.mjs";import"./get-vP85LLZV.mjs";import"./useRefs-DXDFWT8O.mjs";import"./collapseMotion-BYkmK0aG.mjs";import"./debounce-iPjm31B_.mjs";import"./index-CbGq_Vdo.mjs";import"./colors-DLErT_a-.mjs";import"./FormItemContext-D-XKVqk8.mjs";import"./isPlainObject-D3JZnYxx.mjs";import"./statusUtils-C-zQFcRu.mjs";import"./index-CwX3_37I.mjs";import"./EyeOutlined-Bhfo9c26.mjs";import"./index-epHOG_uQ.mjs";import"./slide-B9Yt64p6.mjs";import"./Dropdown-XTxBxfwO.mjs";import"./pick-TUD3VTZU.mjs";import"./useMergedState-DtLgCtQF.mjs";function j(){return I.get("/chat/config/list")}const A={class:"configuration-manage"},L=F({__name:"index",setup(v){P(()=>{D()});function D(){return b(this,null,function*(){const c=yield j();console.log(c)})}const i=m({chat:[{configName:"apiKey",configValue:"",configDict:"API 密钥",id:""},{configName:"apiHost",configValue:"",configDict:"API 地址",id:""}],mj:[{configName:"imagine",configValue:"",configDict:"文生图",id:""},{configName:"blend",configValue:"",configDict:"图生图",id:""},{configName:"describe",configValue:"",configDict:"图生文",id:""},{configName:"change",configValue:"",configDict:"变化价格",id:""},{configName:"upsample",configValue:"",configDict:"放大价格",id:""},{configName:"inpaint",configValue:"",configDict:"局部重绘",id:""},{configName:"faceSwapping",configValue:"",configDict:"换脸价格",id:""},{configName:"shorten",configValue:"",configDict:"提示词分析",id:""}],pay:[{configName:"pid",configValue:"",configDict:"商户PID",id:""},{configName:"key",configValue:"",configDict:"商户密钥",id:""},{configName:"payUrl",configValue:"",configDict:"支付地址",id:""},{configName:"notify_url",configValue:"",configDict:"回调地址",id:""}],review:[{configName:"apiKey",configValue:"",configDict:"apiKey",id:""},{configName:"secretKey",configValue:"",configDict:"secretKey",id:""},{configName:"enabled",configValue:"",configDict:"文本审核",id:""}],weixin:[{configName:"appId",configValue:"",configDict:"应用ID",id:""},{configName:"appSecret",configValue:"",configDict:"应用密钥",id:""},{configName:"mchId",configValue:"",configDict:"商户ID",id:""},{configName:"notifyUrl",configValue:"",configDict:"回调地址",id:""},{configName:"enabled",configValue:"",configDict:"开启支付",id:""}],sys:[{configName:"name",configValue:"",configDict:"网站名称",id:""},{configName:"logoImage",configValue:"",configDict:"网站logo",id:""},{configName:"copyright",configValue:"",configDict:"版权信息",id:""},{configName:"customImage",configValue:"",configDict:"客服二维码",id:""},{configName:"model",configValue:"",configDict:"系统模型",id:""}],stripe:[{configName:"success",configValue:"",configDict:"成功回调",id:""},{configName:"cancel",configValue:"",configDict:"取消回调",id:""},{configName:"key",configValue:"",configDict:"支付密钥",id:""},{configName:"secret",configValue:"",configDict:"回调密钥",id:""},{configName:"prompt",configValue:"",configDict:"提示语",id:""},{configName:"enabled",configValue:"",configDict:"开启支付",id:""}]}),d=m("1"),r=m("left"),s=m([{key:"1",label:"基础配置",data:i.value.chat},{key:"2",label:"绘图费用",data:i.value.mj},{key:"3",label:"支付配置",data:i.value.pay},{key:"4",label:"百度配置",data:i.value.review},{key:"5",label:"微信配置",data:i.value.weixin},{key:"6",label:"系统配置",data:i.value.sys},{key:"7",label:"stripe支付",data:i.value.stripe}]),e=m({}),u=()=>{console.log(e.value)},o=c=>{const f=s.value.find(a=>a.key===c);f&&(e.value={},f.data.forEach(a=>{e.value[a.configName]=a.configValue}))};return(c,f)=>(l(),V("div",A,[p(t(B),{"active-key":d.value,"onUpdate:activeKey":f[0]||(f[0]=a=>d.value=a),"tab-position":r.value,type:"card",onChange:o},{default:g(()=>[(l(!0),V(_,null,h(s.value,a=>(l(),N(t(K),{key:a.key,tab:a.label},{default:g(()=>[p(t(w),{"label-col":{span:2},model:e.value},{default:g(()=>[S("div",null,[(l(!0),V(_,null,h(a.data,n=>(l(),N(t(k),{key:n.id,label:n.configDict,name:n.configName},{default:g(()=>[n.configName==="enabled"?(l(),N(t(E),{key:0,checked:e.value[n.configName],"onUpdate:checked":y=>e.value[n.configName]=y},null,8,["checked","onUpdate:checked"])):(l(),N(t(U),{key:1,value:e.value[n.configName],"onUpdate:value":y=>e.value[n.configName]=y},null,8,["value","onUpdate:value"]))]),_:2},1032,["label","name"]))),128))]),p(t(k),{style:{"text-align":"center"}},{default:g(()=>[p(t(x),{type:"primary",onClick:u},{default:g(()=>f[1]||(f[1]=[T("保存")])),_:1})]),_:1})]),_:2},1032,["model"])]),_:2},1032,["tab"]))),128))]),_:1},8,["active-key","tab-position"])]))}}),si=C(L,[["__scopeId","data-v-f6d07833"]]);export{si as default};
