var P=Object.defineProperty,g=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(t,s,e)=>s in t?P(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,d=(t,s)=>{for(var e in s||(s={}))x.call(s,e)&&f(t,e,s[e]);if(p)for(var e of p(s))_.call(s,e)&&f(t,e,s[e]);return t},u=(t,s)=>g(t,b(s));var w=(t,s,e)=>new Promise((n,i)=>{var m=a=>{try{o(e.next(a))}catch(l){i(l)}},r=a=>{try{o(e.throw(a))}catch(l){i(l)}},o=a=>a.done?n(a.value):Promise.resolve(a.value).then(m,r);o((e=e.apply(t,s)).next())});import{u as h}from"./vxe-table-CS5KFeE-.mjs";import{c as B}from"./index-ChAStMcI.mjs";import{s as c,h as O,M as y}from"./bootstrap-CIlPtDbU.mjs";import{o as F}from"./index-CY4pGJKi.mjs";import{a9 as N,at as S,az as k,n as C,a8 as I}from"../jse/index-index-CulmqKVw.mjs";const q={class:"mt-[16px] md:w-full lg:w-1/2 2xl:w-2/5"},L=N({__name:"secure-setting",setup(t){const[s,e]=h({actionWrapperClass:"text-left mb-[16px] ml-[96px]",commonConfig:{labelWidth:90},handleSubmit:m,resetButtonOptions:{show:!1},schema:[{component:"InputPassword",fieldName:"oldPassword",label:"旧密码",rules:c({message:"请输入密码"}).min(5,"密码长度不能少于5个字符").max(20,"密码长度不能超过20个字符")},{component:"InputPassword",dependencies:{rules(r){return c({message:"请输入新密码"}).min(5,"密码长度不能少于5个字符").max(20,"密码长度不能超过20个字符").refine(o=>o!==r.oldPassword,"新旧密码不能相同")},triggerFields:["newPassword","oldPassword"]},fieldName:"newPassword",label:"新密码",rules:"required"},{component:"InputPassword",dependencies:{rules(r){return c({message:"请输入确认密码"}).min(5,"密码长度不能少于5个字符").max(20,"密码长度不能超过20个字符").refine(o=>o===r.newPassword,"新密码和确认密码不一致")},triggerFields:["newPassword","confirmPassword"]},fieldName:"confirmPassword",label:"确认密码",rules:"required"}],submitButtonOptions:{text:"修改密码"}});function n(r){e.setState(o=>u(d({},o),{submitButtonOptions:u(d({},o.submitButtonOptions),{loading:r})}))}const i=O();function m(r){y.confirm({content:"确认修改密码吗？",onOk:()=>w(this,null,function*(){try{n(!0);const o=F(r,["confirmPassword"]);yield B(o),yield i.logout(!0)}catch(o){console.error(o)}finally{n(!1)}}),title:"提示"})}return(r,o)=>(S(),k("div",q,[C(I(s))]))}});export{L as _};
