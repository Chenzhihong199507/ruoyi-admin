import{P as n,q as g,r as V,p as m,bu as B}from"./bootstrap-CIlPtDbU.mjs";import{T as D}from"./Trigger-CxuUq1Ff.mjs";import{a9 as M,Q as v,W,J as y,n as d,F}from"../jse/index-index-CulmqKVw.mjs";const l={adjustX:1,adjustY:1},s=[0,0],L={topLeft:{points:["bl","tl"],overflow:l,offset:[0,-4],targetOffset:s},topCenter:{points:["bc","tc"],overflow:l,offset:[0,-4],targetOffset:s},topRight:{points:["br","tr"],overflow:l,offset:[0,-4],targetOffset:s},bottomLeft:{points:["tl","bl"],overflow:l,offset:[0,4],targetOffset:s},bottomCenter:{points:["tc","bc"],overflow:l,offset:[0,4],targetOffset:s},bottomRight:{points:["tr","br"],overflow:l,offset:[0,4],targetOffset:s}};var $=function(e,c){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&c.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)c.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]]);return a};const I=M({compatConfig:{MODE:3},props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:n.string.def("rc-dropdown"),transitionName:String,overlayClassName:n.string.def(""),openClassName:String,animation:n.any,align:n.object,overlayStyle:{type:Object,default:void 0},placement:n.string.def("bottomLeft"),overlay:n.any,trigger:n.oneOfType([n.string,n.arrayOf(n.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:n.array,hideAction:n.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:n.number.def(.15),mouseLeaveDelay:n.number.def(.1)},emits:["visibleChange","overlayClick"],setup(e,c){let{slots:a,emit:o,expose:i}=c;const f=v(!!e.visible);W(()=>e.visible,t=>{t!==void 0&&(f.value=t)});const p=v();i({triggerRef:p});const b=t=>{e.visible===void 0&&(f.value=!1),o("overlayClick",t)},h=t=>{e.visible===void 0&&(f.value=t),o("visibleChange",t)},C=()=>{var t;const r=(t=a.overlay)===null||t===void 0?void 0:t.call(a),u={prefixCls:`${e.prefixCls}-menu`,onClick:b};return d(F,{key:B},[e.arrow&&d("div",{class:`${e.prefixCls}-arrow`},null),m(r,u,!1)])},w=y(()=>{const{minOverlayWidthMatchTrigger:t=!e.alignPoint}=e;return t}),O=()=>{var t;const r=(t=a.default)===null||t===void 0?void 0:t.call(a);return f.value&&r?m(r[0],{class:e.openClassName||`${e.prefixCls}-open`},!1):r},P=y(()=>!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction);return()=>{const{prefixCls:t,arrow:r,showAction:u,overlayStyle:x,trigger:A,placement:N,align:j,getPopupContainer:S,transitionName:T,animation:_,overlayClassName:k}=e,E=$(e,["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"]);return d(D,g(g({},E),{},{prefixCls:t,ref:p,popupClassName:V(k,{[`${t}-show-arrow`]:r}),popupStyle:x,builtinPlacements:L,action:A,showAction:u,hideAction:P.value||[],popupPlacement:N,popupAlign:j,popupTransitionName:T,popupAnimation:_,popupVisible:f.value,stretch:w.value?"minWidth":"",onPopupVisibleChange:h,getPopupContainer:S}),{popup:C,default:O})}}});export{I as D};
