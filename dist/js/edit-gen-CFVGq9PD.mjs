var Y=(i,t,e)=>new Promise((n,o)=>{var r=s=>{try{p(e.next(s))}catch(a){o(a)}},d=s=>{try{p(e.throw(s))}catch(a){o(a)}},p=s=>s.done?n(s.value):Promise.resolve(s.value).then(r,d);p((e=e.apply(i,t)).next())});import{r as G,q as z,aZ as J,aH as W,P as $,cD as ei,H as D,C as Z,a2 as ni,z as l,p as oi,aW as ri,x as si,y as li,A as ai,B as ci,n as pi,a7 as di,b0 as mi,D as gi,G as $i,S as ui}from"./bootstrap-CIlPtDbU.mjs";import{g as hi}from"./index-CS4ZLkSY.mjs";import{_ as fi}from"./basic-setting.vue_vue_type_script_setup_true_lang-BEO9sfTu.mjs";import{_ as Si}from"./gen-config.vue_vue_type_script_setup_true_lang-t_hYDQ4Z.mjs";import{_ as bi}from"./gen-success.vue_vue_type_script_setup_true_lang-h4zCOMbw.mjs";import{e as Ii}from"./mitt-DZbos8MC.mjs";import{C as Ci}from"./CheckOutlined-CIq9xGup.mjs";import{a9 as A,n as m,J as R,Q,a7 as vi,ak as yi,at as B,au as E,av as U,aC as xi,a8 as T,az as wi,ay as K}from"../jse/index-index-CulmqKVw.mjs";import{u as zi}from"./useBreakpoint-B7o6jFLY.mjs";import{P as Ti}from"./index-B9BKRmLN.mjs";import{T as Di}from"./index-CbGq_Vdo.mjs";import{S as Pi}from"./index-BmGsg0FM.mjs";import{_ as Wi}from"./page.vue_vue_type_script_setup_true_lang-BEwXti9W.mjs";import{u as Hi}from"./use-tabs-B9ecYKaP.mjs";import"./index-DV03ZwLB.mjs";import"./vxe-table-CS5KFeE-.mjs";import"./render-C5tDa4zc.mjs";import"./data-CRYXvPFo.mjs";import"./index-BsPmTjuM.mjs";import"./colors-DLErT_a-.mjs";import"./dict-D8K1MO7Q.mjs";import"./uuid-BthZQwsx.mjs";import"./index-B-WsVPHD.mjs";import"./Trigger-CxuUq1Ff.mjs";import"./ResizeObserver.es-CDE7jhPe.mjs";import"./statusUtils-C-zQFcRu.mjs";import"./slide-B9Yt64p6.mjs";import"./index-CwX3_37I.mjs";import"./List-B93VJ5nE.mjs";import"./useMergedState-DtLgCtQF.mjs";import"./FormItemContext-D-XKVqk8.mjs";import"./index-yiE2I97I.mjs";import"./Checkbox-C1LX6amp.mjs";import"./index-uwSnP2fA.mjs";import"./eagerComputed-Bboi8kUT.mjs";import"./collapseMotion-BYkmK0aG.mjs";import"./index-epHOG_uQ.mjs";import"./useRefs-DXDFWT8O.mjs";import"./index-MMlqTCj9.mjs";import"./isPlainObject-D3JZnYxx.mjs";import"./EyeOutlined-Bhfo9c26.mjs";import"./index-aPtpRG1I.mjs";import"./Group-B1PMGyxu.mjs";import"./index-BLUbi1M4.mjs";import"./useFlexGapSupport-UdCnRdDh.mjs";import"./index-CeJhG9t7.mjs";import"./index-CkI6h8s8.mjs";import"./get-popup-container-BwMHEyJY.mjs";import"./index-CwvHP01g.mjs";import"./Col-CY1020A8.mjs";import"./responsiveObserve-CKY_yQR9.mjs";import"./tree-DR0G1ezI.mjs";import"./dict-type-SUN05zMk.mjs";import"./use-vxe-grid-CIpB4HOm.mjs";import"./loading-7m7uS9S_.mjs";import"./mitt-D4bcW7KS.mjs";import"./index-CY4pGJKi.mjs";import"./get-vP85LLZV.mjs";import"./debounce-iPjm31B_.mjs";function Xi(i){const t=Number(i);return Number.isSafeInteger(t)?t:i}function q(i){return typeof i=="string"}function _i(){}const k=()=>({prefixCls:String,itemWidth:String,active:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},status:W(),iconPrefix:String,icon:$.any,adjustMarginRight:String,stepNumber:Number,stepIndex:Number,description:$.any,title:$.any,subTitle:$.any,progressDot:ei($.oneOfType([$.looseBool,$.func])),tailContent:$.any,icons:$.shape({finish:$.any,error:$.any}).loose,onClick:D(),onStepClick:D(),stepIcon:D(),itemRender:D(),__legacy:Z()}),ii=A({compatConfig:{MODE:3},name:"Step",inheritAttrs:!1,props:k(),setup(i,t){let{slots:e,emit:n,attrs:o}=t;const r=p=>{n("click",p),n("stepClick",i.stepIndex)},d=p=>{let{icon:s,title:a,description:I}=p;const{prefixCls:c,stepNumber:x,status:f,iconPrefix:v,icons:g,progressDot:C=e.progressDot,stepIcon:w=e.stepIcon}=i;let u;const S=G(`${c}-icon`,`${v}icon`,{[`${v}icon-${s}`]:s&&q(s),[`${v}icon-check`]:!s&&f==="finish"&&(g&&!g.finish||!g),[`${v}icon-cross`]:!s&&f==="error"&&(g&&!g.error||!g)}),h=m("span",{class:`${c}-icon-dot`},null);return C?typeof C=="function"?u=m("span",{class:`${c}-icon`},[C({iconDot:h,index:x-1,status:f,title:a,description:I,prefixCls:c})]):u=m("span",{class:`${c}-icon`},[h]):s&&!q(s)?u=m("span",{class:`${c}-icon`},[s]):g&&g.finish&&f==="finish"?u=m("span",{class:`${c}-icon`},[g.finish]):g&&g.error&&f==="error"?u=m("span",{class:`${c}-icon`},[g.error]):s||f==="finish"||f==="error"?u=m("span",{class:S},null):u=m("span",{class:`${c}-icon`},[x]),w&&(u=w({index:x-1,status:f,title:a,description:I,node:u})),u};return()=>{var p,s,a,I;const{prefixCls:c,itemWidth:x,active:f,status:v="wait",tailContent:g,adjustMarginRight:C,disabled:w,title:u=(p=e.title)===null||p===void 0?void 0:p.call(e),description:S=(s=e.description)===null||s===void 0?void 0:s.call(e),subTitle:h=(a=e.subTitle)===null||a===void 0?void 0:a.call(e),icon:b=(I=e.icon)===null||I===void 0?void 0:I.call(e),onClick:y,onStepClick:P}=i,H=v||"wait",j=G(`${c}-item`,`${c}-item-${H}`,{[`${c}-item-custom`]:b,[`${c}-item-active`]:f,[`${c}-item-disabled`]:w===!0}),X={};x&&(X.width=x),C&&(X.marginRight=C);const _={onClick:y||_i};P&&!w&&(_.role="button",_.tabindex=0,_.onClick=r);const L=m("div",z(z({},J(o,["__legacy"])),{},{class:[j,o.class],style:[o.style,X]}),[m("div",z(z({},_),{},{class:`${c}-item-container`}),[m("div",{class:`${c}-item-tail`},[g]),m("div",{class:`${c}-item-icon`},[d({icon:b,title:u,description:S})]),m("div",{class:`${c}-item-content`},[m("div",{class:`${c}-item-title`},[u,h&&m("div",{title:typeof h=="string"?h:void 0,class:`${c}-item-subtitle`},[h])]),S&&m("div",{class:`${c}-item-description`},[S])])])]);return i.itemRender?i.itemRender(L):L}}});var Bi=function(i,t){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&t.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(i);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(i,n[o])&&(e[n[o]]=i[n[o]]);return e};const Ni=A({compatConfig:{MODE:3},name:"Steps",props:{type:$.string.def("default"),prefixCls:$.string.def("vc-steps"),iconPrefix:$.string.def("vc"),direction:$.string.def("horizontal"),labelPlacement:$.string.def("horizontal"),status:W("process"),size:$.string.def(""),progressDot:$.oneOfType([$.looseBool,$.func]).def(void 0),initial:$.number.def(0),current:$.number.def(0),items:$.array.def(()=>[]),icons:$.shape({finish:$.any,error:$.any}).loose,stepIcon:D(),isInline:$.looseBool,itemRender:D()},emits:["change"],setup(i,t){let{slots:e,emit:n}=t;const o=p=>{const{current:s}=i;s!==p&&n("change",p)},r=(p,s,a)=>{const{prefixCls:I,iconPrefix:c,status:x,current:f,initial:v,icons:g,stepIcon:C=e.stepIcon,isInline:w,itemRender:u,progressDot:S=e.progressDot}=i,h=w||S,b=l(l({},p),{class:""}),y=v+s,P={active:y===f,stepNumber:y+1,stepIndex:y,key:y,prefixCls:I,iconPrefix:c,progressDot:h,stepIcon:C,icons:g,onStepClick:o};return x==="error"&&s===f-1&&(b.class=`${I}-next-error`),b.status||(y===f?b.status=x:y<f?b.status="finish":b.status="wait"),w&&(b.icon=void 0,b.subTitle=void 0),a?a(l(l({},b),P)):(u&&(b.itemRender=H=>u(b,H)),m(ii,z(z(z({},b),P),{},{__legacy:!1}),null))},d=(p,s)=>r(l({},p.props),s,a=>oi(p,a));return()=>{var p;const{prefixCls:s,direction:a,type:I,labelPlacement:c,iconPrefix:x,status:f,size:v,current:g,progressDot:C=e.progressDot,initial:w,icons:u,items:S,isInline:h,itemRender:b}=i,y=Bi(i,["prefixCls","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","initial","icons","items","isInline","itemRender"]),P=I==="navigation",H=h||C,j=h?"horizontal":a,X=h?void 0:v,_=H?"vertical":c,L=G(s,`${s}-${a}`,{[`${s}-${X}`]:X,[`${s}-label-${_}`]:j==="horizontal",[`${s}-dot`]:!!H,[`${s}-navigation`]:P,[`${s}-inline`]:h});return m("div",z({class:L},y),[S.filter(F=>F).map((F,ti)=>r(F,ti)),ni((p=e.default)===null||p===void 0?void 0:p.call(e)).map(d)])}}}),Mi=i=>{const{componentCls:t,stepsIconCustomTop:e,stepsIconCustomSize:n,stepsIconCustomFontSize:o}=i;return{[`${t}-item-custom`]:{[`> ${t}-item-container > ${t}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${t}-icon`]:{top:e,width:n,height:n,fontSize:o,lineHeight:`${n}px`}}},[`&:not(${t}-vertical)`]:{[`${t}-item-custom`]:{[`${t}-item-icon`]:{width:"auto",background:"none"}}}}},Ri=i=>{const{componentCls:t,stepsIconSize:e,lineHeight:n,stepsSmallIconSize:o}=i;return{[`&${t}-label-vertical`]:{[`${t}-item`]:{overflow:"visible","&-tail":{marginInlineStart:e/2+i.controlHeightLG,padding:`${i.paddingXXS}px ${i.paddingLG}px`},"&-content":{display:"block",width:(e/2+i.controlHeightLG)*2,marginTop:i.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:i.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:i.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${t}-small:not(${t}-dot)`]:{[`${t}-item`]:{"&-icon":{marginInlineStart:i.controlHeightLG+(e-o)/2}}}}}},Ei=i=>{const{componentCls:t,stepsNavContentMaxWidth:e,stepsNavArrowColor:n,stepsNavActiveColor:o,motionDurationSlow:r}=i;return{[`&${t}-navigation`]:{paddingTop:i.paddingSM,[`&${t}-small`]:{[`${t}-item`]:{"&-container":{marginInlineStart:-i.marginSM}}},[`${t}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:-i.margin,paddingBottom:i.paddingSM,textAlign:"start",transition:`opacity ${r}`,[`${t}-item-content`]:{maxWidth:e},[`${t}-item-title`]:l(l({maxWidth:"100%",paddingInlineEnd:0},ri),{"&::after":{display:"none"}})},[`&:not(${t}-item-active)`]:{[`${t}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${i.paddingSM/2}px)`,insetInlineStart:"100%",display:"inline-block",width:i.fontSizeIcon,height:i.fontSizeIcon,borderTop:`${i.lineWidth}px ${i.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${i.lineWidth}px ${i.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:i.lineWidthBold,backgroundColor:o,transition:`width ${r}, inset-inline-start ${r}`,transitionTimingFunction:"ease-out",content:'""'}},[`${t}-item${t}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${t}-navigation${t}-vertical`]:{[`> ${t}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${t}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:i.lineWidth*3,height:`calc(100% - ${i.marginLG}px)`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:i.controlHeight*.25,height:i.controlHeight*.25,marginBottom:i.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},[`> ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}},[`&${t}-navigation${t}-horizontal`]:{[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}}},Ai=i=>{const{antCls:t,componentCls:e}=i;return{[`&${e}-with-progress`]:{[`${e}-item`]:{paddingTop:i.paddingXXS,[`&-process ${e}-item-container ${e}-item-icon ${e}-icon`]:{color:i.processIconColor}},[`&${e}-vertical > ${e}-item `]:{paddingInlineStart:i.paddingXXS,[`> ${e}-item-container > ${e}-item-tail`]:{top:i.marginXXS,insetInlineStart:i.stepsIconSize/2-i.lineWidth+i.paddingXXS}},[`&, &${e}-small`]:{[`&${e}-horizontal ${e}-item:first-child`]:{paddingBottom:i.paddingXXS,paddingInlineStart:i.paddingXXS}},[`&${e}-small${e}-vertical > ${e}-item > ${e}-item-container > ${e}-item-tail`]:{insetInlineStart:i.stepsSmallIconSize/2-i.lineWidth+i.paddingXXS},[`&${e}-label-vertical`]:{[`${e}-item ${e}-item-tail`]:{top:i.margin-2*i.lineWidth}},[`${e}-item-icon`]:{position:"relative",[`${t}-progress`]:{position:"absolute",insetBlockStart:(i.stepsIconSize-i.stepsProgressSize-i.lineWidth*2)/2,insetInlineStart:(i.stepsIconSize-i.stepsProgressSize-i.lineWidth*2)/2}}}}},Li=i=>{const{componentCls:t,descriptionWidth:e,lineHeight:n,stepsCurrentDotSize:o,stepsDotSize:r,motionDurationSlow:d}=i;return{[`&${t}-dot, &${t}-dot${t}-small`]:{[`${t}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:Math.floor((i.stepsDotSize-i.lineWidth*3)/2),width:"100%",marginTop:0,marginBottom:0,marginInline:`${e/2}px 0`,padding:0,"&::after":{width:`calc(100% - ${i.marginSM*2}px)`,height:i.lineWidth*3,marginInlineStart:i.marginSM}},"&-icon":{width:r,height:r,marginInlineStart:(i.descriptionWidth-r)/2,paddingInlineEnd:0,lineHeight:`${r}px`,background:"transparent",border:0,[`${t}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${d}`,"&::after":{position:"absolute",top:-i.marginSM,insetInlineStart:(r-i.controlHeightLG*1.5)/2,width:i.controlHeightLG*1.5,height:i.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:e},[`&-process ${t}-item-icon`]:{position:"relative",top:(r-o)/2,width:o,height:o,lineHeight:`${o}px`,background:"none",marginInlineStart:(i.descriptionWidth-o)/2},[`&-process ${t}-icon`]:{[`&:first-child ${t}-icon-dot`]:{insetInlineStart:0}}}},[`&${t}-vertical${t}-dot`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeight-r)/2,marginInlineStart:0,background:"none"},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeight-o)/2,top:0,insetInlineStart:(r-o)/2,marginInlineStart:0},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeight-r)/2,insetInlineStart:0,margin:0,padding:`${r+i.paddingXS}px 0 ${i.paddingXS}px`,"&::after":{marginInlineStart:(r-i.lineWidth)/2}},[`&${t}-small`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeightSM-r)/2},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeightSM-o)/2},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeightSM-r)/2}},[`${t}-item:first-child ${t}-icon-dot`]:{insetInlineStart:0},[`${t}-item-content`]:{width:"inherit"}}}},Oi=i=>{const{componentCls:t}=i;return{[`&${t}-rtl`]:{direction:"rtl",[`${t}-item`]:{"&-subtitle":{float:"left"}},[`&${t}-navigation`]:{[`${t}-item::after`]:{transform:"rotate(-45deg)"}},[`&${t}-vertical`]:{[`> ${t}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${t}-item-icon`]:{float:"right"}}},[`&${t}-dot`]:{[`${t}-item-icon ${t}-icon-dot, &${t}-small ${t}-item-icon ${t}-icon-dot`]:{float:"right"}}}}},Gi=i=>{const{componentCls:t,stepsSmallIconSize:e,fontSizeSM:n,fontSize:o,colorTextDescription:r}=i;return{[`&${t}-small`]:{[`&${t}-horizontal:not(${t}-label-vertical) ${t}-item`]:{paddingInlineStart:i.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${t}-item-icon`]:{width:e,height:e,marginTop:0,marginBottom:0,marginInline:`0 ${i.marginXS}px`,fontSize:n,lineHeight:`${e}px`,textAlign:"center",borderRadius:e},[`${t}-item-title`]:{paddingInlineEnd:i.paddingSM,fontSize:o,lineHeight:`${e}px`,"&::after":{top:e/2}},[`${t}-item-description`]:{color:r,fontSize:o},[`${t}-item-tail`]:{top:e/2-i.paddingXXS},[`${t}-item-custom ${t}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${t}-icon`]:{fontSize:e,lineHeight:`${e}px`,transform:"none"}}}}},ji=i=>{const{componentCls:t,stepsSmallIconSize:e,stepsIconSize:n}=i;return{[`&${t}-vertical`]:{display:"flex",flexDirection:"column",[`> ${t}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${t}-item-icon`]:{float:"left",marginInlineEnd:i.margin},[`${t}-item-content`]:{display:"block",minHeight:i.controlHeight*1.5,overflow:"hidden"},[`${t}-item-title`]:{lineHeight:`${n}px`},[`${t}-item-description`]:{paddingBottom:i.paddingSM}},[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:i.stepsIconSize/2-i.lineWidth,width:i.lineWidth,height:"100%",padding:`${n+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`,"&::after":{width:i.lineWidth,height:"100%"}},[`> ${t}-item:not(:last-child) > ${t}-item-container > ${t}-item-tail`]:{display:"block"},[` > ${t}-item > ${t}-item-container > ${t}-item-content > ${t}-item-title`]:{"&::after":{display:"none"}},[`&${t}-small ${t}-item-container`]:{[`${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:i.stepsSmallIconSize/2-i.lineWidth,padding:`${e+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`},[`${t}-item-title`]:{lineHeight:`${e}px`}}}}},Fi=i=>{const{componentCls:t,inlineDotSize:e,inlineTitleColor:n,inlineTailColor:o}=i,r=i.paddingXS+i.lineWidth,d={[`${t}-item-container ${t}-item-content ${t}-item-title`]:{color:n}};return{[`&${t}-inline`]:{width:"auto",display:"inline-flex",[`${t}-item`]:{flex:"none","&-container":{padding:`${r}px ${i.paddingXXS}px 0`,margin:`0 ${i.marginXXS/2}px`,borderRadius:i.borderRadiusSM,cursor:"pointer",transition:`background-color ${i.motionDurationMid}`,"&:hover":{background:i.controlItemBgHover},"&[role='button']:hover":{opacity:1}},"&-icon":{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,[`> ${t}-icon`]:{top:0},[`${t}-icon-dot`]:{borderRadius:i.fontSizeSM/4}},"&-content":{width:"auto",marginTop:i.marginXS-i.lineWidth},"&-title":{color:n,fontSize:i.fontSizeSM,lineHeight:i.lineHeightSM,fontWeight:"normal",marginBottom:i.marginXXS/2},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:r+e/2,transform:"translateY(-50%)","&:after":{width:"100%",height:i.lineWidth,borderRadius:0,marginInlineStart:0,background:o}},[`&:first-child ${t}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${t}-item-tail`]:{display:"block",width:"50%"},"&-wait":l({[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:i.colorBorderBg,border:`${i.lineWidth}px ${i.lineType} ${o}`}},d),"&-finish":l({[`${t}-item-tail::after`]:{backgroundColor:o},[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:o,border:`${i.lineWidth}px ${i.lineType} ${o}`}},d),"&-error":d,"&-active, &-process":l({[`${t}-item-icon`]:{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,top:0}},d),[`&:not(${t}-item-active) > ${t}-item-container[role='button']:hover`]:{[`${t}-item-title`]:{color:n}}}}}};var N;(function(i){i.wait="wait",i.process="process",i.finish="finish",i.error="error"})(N||(N={}));const O=(i,t)=>{const e=`${t.componentCls}-item`,n=`${i}IconColor`,o=`${i}TitleColor`,r=`${i}DescriptionColor`,d=`${i}TailColor`,p=`${i}IconBgColor`,s=`${i}IconBorderColor`,a=`${i}DotColor`;return{[`${e}-${i} ${e}-icon`]:{backgroundColor:t[p],borderColor:t[s],[`> ${t.componentCls}-icon`]:{color:t[n],[`${t.componentCls}-icon-dot`]:{background:t[a]}}},[`${e}-${i}${e}-custom ${e}-icon`]:{[`> ${t.componentCls}-icon`]:{color:t[a]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-title`]:{color:t[o],"&::after":{backgroundColor:t[d]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-description`]:{color:t[r]},[`${e}-${i} > ${e}-container > ${e}-tail::after`]:{backgroundColor:t[d]}}},Ki=i=>{const{componentCls:t,motionDurationSlow:e}=i,n=`${t}-item`;return l(l(l(l(l(l({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none"},[`${n}-icon, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[`${n}-icon`]:{width:i.stepsIconSize,height:i.stepsIconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:i.marginXS,fontSize:i.stepsIconFontSize,fontFamily:i.fontFamily,lineHeight:`${i.stepsIconSize}px`,textAlign:"center",borderRadius:i.stepsIconSize,border:`${i.lineWidth}px ${i.lineType} transparent`,transition:`background-color ${e}, border-color ${e}`,[`${t}-icon`]:{position:"relative",top:i.stepsIconTop,color:i.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:i.stepsIconSize/2-i.paddingXXS,insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:i.lineWidth,background:i.colorSplit,borderRadius:i.lineWidth,transition:`background ${e}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:i.padding,color:i.colorText,fontSize:i.fontSizeLG,lineHeight:`${i.stepsTitleLineHeight}px`,"&::after":{position:"absolute",top:i.stepsTitleLineHeight/2,insetInlineStart:"100%",display:"block",width:9999,height:i.lineWidth,background:i.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:i.marginXS,color:i.colorTextDescription,fontWeight:"normal",fontSize:i.fontSize},[`${n}-description`]:{color:i.colorTextDescription,fontSize:i.fontSize}},O(N.wait,i)),O(N.process,i)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:i.fontWeightStrong}}),O(N.finish,i)),O(N.error,i)),{[`${n}${t}-next-error > ${t}-item-title::after`]:{background:i.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},Vi=i=>{const{componentCls:t,motionDurationSlow:e}=i;return{[`& ${t}-item`]:{[`&:not(${t}-item-active)`]:{[`& > ${t}-item-container[role='button']`]:{cursor:"pointer",[`${t}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${t}-icon`]:{transition:`color ${e}`}},"&:hover":{[`${t}-item`]:{"&-title, &-subtitle, &-description":{color:i.colorPrimary}}}},[`&:not(${t}-item-process)`]:{[`& > ${t}-item-container[role='button']:hover`]:{[`${t}-item`]:{"&-icon":{borderColor:i.colorPrimary,[`${t}-icon`]:{color:i.colorPrimary}}}}}}},[`&${t}-horizontal:not(${t}-label-vertical)`]:{[`${t}-item`]:{paddingInlineStart:i.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${t}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:i.descriptionWidth,whiteSpace:"normal"}}}}},Yi=i=>{const{componentCls:t}=i;return{[t]:l(l(l(l(l(l(l(l(l(l(l(l(l({},ai(i)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),Ki(i)),Vi(i)),Mi(i)),Gi(i)),ji(i)),Ri(i)),Li(i)),Ei(i)),Oi(i)),Ai(i)),Fi(i))}},Qi=si("Steps",i=>{const{wireframe:t,colorTextDisabled:e,fontSizeHeading3:n,fontSize:o,controlHeight:r,controlHeightLG:d,colorTextLightSolid:p,colorText:s,colorPrimary:a,colorTextLabel:I,colorTextDescription:c,colorTextQuaternary:x,colorFillContent:f,controlItemBgActive:v,colorError:g,colorBgContainer:C,colorBorderSecondary:w}=i,u=i.controlHeight,S=i.colorSplit,h=li(i,{processTailColor:S,stepsNavArrowColor:e,stepsIconSize:u,stepsIconCustomSize:u,stepsIconCustomTop:0,stepsIconCustomFontSize:d/2,stepsIconTop:-.5,stepsIconFontSize:o,stepsTitleLineHeight:r,stepsSmallIconSize:n,stepsDotSize:r/4,stepsCurrentDotSize:d/4,stepsNavContentMaxWidth:"auto",processIconColor:p,processTitleColor:s,processDescriptionColor:s,processIconBgColor:a,processIconBorderColor:a,processDotColor:a,waitIconColor:t?e:I,waitTitleColor:c,waitDescriptionColor:c,waitTailColor:S,waitIconBgColor:t?C:f,waitIconBorderColor:t?e:"transparent",waitDotColor:e,finishIconColor:a,finishTitleColor:s,finishDescriptionColor:c,finishTailColor:a,finishIconBgColor:t?C:v,finishIconBorderColor:t?a:v,finishDotColor:a,errorIconColor:p,errorTitleColor:g,errorDescriptionColor:g,errorTailColor:S,errorIconBgColor:g,errorIconBorderColor:g,errorDotColor:g,stepsNavActiveColor:a,stepsProgressSize:d,inlineDotSize:6,inlineTitleColor:x,inlineTailColor:w});return[Yi(h)]},{descriptionWidth:140}),Ui=()=>({prefixCls:String,iconPrefix:String,current:Number,initial:Number,percent:Number,responsive:Z(),items:gi(),labelPlacement:W(),status:W(),size:W(),direction:W(),progressDot:$i([Boolean,Function]),type:W(),onChange:D(),"onUpdate:current":D()}),V=A({compatConfig:{MODE:3},name:"ASteps",inheritAttrs:!1,props:ci(Ui(),{current:0,responsive:!0,labelPlacement:"horizontal"}),slots:Object,setup(i,t){let{attrs:e,slots:n,emit:o}=t;const{prefixCls:r,direction:d,configProvider:p}=pi("steps",i),[s,a]=Qi(r),[,I]=di(),c=zi(),x=R(()=>i.responsive&&c.value.xs?"vertical":i.direction),f=R(()=>p.getPrefixCls("",i.iconPrefix)),v=S=>{o("update:current",S),o("change",S)},g=R(()=>i.type==="inline"),C=R(()=>g.value?void 0:i.percent),w=S=>{let{node:h,status:b}=S;if(b==="process"&&i.percent!==void 0){const y=i.size==="small"?I.value.controlHeight:I.value.controlHeightLG;return m("div",{class:`${r.value}-progress-icon`},[m(Ti,{type:"circle",percent:C.value,size:y,strokeWidth:4,format:()=>null},null),h])}return h},u=R(()=>({finish:m(Ci,{class:`${r.value}-finish-icon`},null),error:m(mi,{class:`${r.value}-error-icon`},null)}));return()=>{const S=G({[`${r.value}-rtl`]:d.value==="rtl",[`${r.value}-with-progress`]:C.value!==void 0},e.class,a.value),h=(b,y)=>b.description?m(Di,{title:b.description},{default:()=>[y]}):y;return s(m(Ni,z(z(z({icons:u.value},e),J(i,["percent","responsive"])),{},{items:i.items,direction:x.value,prefixCls:r.value,iconPrefix:f.value,class:S,onChange:v,isInline:g.value,itemRender:g.value?h:void 0}),l({stepIcon:w},n)))}}}),M=A(l(l({compatConfig:{MODE:3}},ii),{name:"AStep",props:k()})),qi=l(V,{Step:M,install:i=>(i.component(V.name,V),i.component(M.name,M),i)}),Ji={class:"flex items-center justify-center"},Zi={key:0},re=A({__name:"edit-gen",setup(i){const t=Q(0),{setTabTitle:e}=Hi(),o=ui().params.tableId,r=Q();return vi("genInfoData",r),yi(()=>Y(this,null,function*(){const d=yield hi(o);d.info.parentMenuId=Xi(d.info.parentMenuId),r.value=d.info,e(`生成配置: ${d.info.tableName}`)})),Ii.on("to",d=>{t.value=d}),(d,p)=>(B(),E(T(Wi),{"content-class":"bg-background p-5 rounded-lg"},{default:U(()=>[xi("div",Ji,[m(T(qi),{current:t.value,class:"w-fit"},{default:U(()=>[m(T(M),{title:"生成信息"}),m(T(M),{disabled:"",title:"字段信息"}),m(T(M),{disabled:"",title:"完成"})]),_:1},8,["current"])]),r.value?(B(),wi("div",Zi,[t.value===0?(B(),E(T(fi),{key:0})):K("",!0),t.value===1?(B(),E(T(Si),{key:1})):K("",!0),t.value===2?(B(),E(T(bi),{key:2})):K("",!0)])):(B(),E(T(Pi),{key:1,active:!0}))]),_:1}))}});export{re as default};
