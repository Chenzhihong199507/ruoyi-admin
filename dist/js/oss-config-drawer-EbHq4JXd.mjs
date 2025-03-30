var p=(e,n,t)=>new Promise((s,d)=>{var f=o=>{try{c(t.next(o))}catch(u){d(u)}},l=o=>{try{c(t.throw(o))}catch(u){d(u)}},c=o=>o.done?s(o.value):Promise.resolve(o.value).then(f,l);c((t=t.apply(e,n)).next())});import{I as i,K as C,s as v,$ as g,l as _}from"./bootstrap-CIlPtDbU.mjs";import{u as I}from"./vxe-table-CS5KFeE-.mjs";import{g as w}from"./render-C5tDa4zc.mjs";import{T as S}from"./index-BsPmTjuM.mjs";import{n as h,a9 as D,Q as P,J as x,a3 as k,at as q,au as K,av as O,a8 as b}from"../jse/index-index-CulmqKVw.mjs";import{u as T}from"./use-drawer-0pSlBI5S.mjs";function H(e){return i.get("/resource/oss/config/list",{params:e})}function V(e){return i.get(`/resource/oss/config/${e}`)}function $(e){return i.postWithMsg("/resource/oss/config",e)}function B(e){return i.putWithMsg("/resource/oss/config",e)}function U(e){return i.deleteWithMsg(`/resource/oss/config/${e}`)}function z(e){return i.putWithMsg("/resource/oss/config/changeStatus",e)}const y=[{color:"orange",label:"私有",value:"0"},{color:"green",label:"公开",value:"1"},{color:"blue",label:"自定义",value:"2"}],J=()=>[{component:"Input",fieldName:"configKey",label:"配置名称"},{component:"Input",fieldName:"bucketName",label:"桶名称"},{component:"Select",componentProps:{options:w(C.SYS_YES_NO)},fieldName:"status",label:"是否默认"}],Q=[{type:"checkbox",width:60},{title:"配置名称",field:"configKey"},{title:"访问站点",field:"endpoint",showOverflow:!0},{title:"桶名称",field:"bucketName"},{title:"域",field:"region"},{title:"权限桶类型",field:"accessPolicy",slots:{default:({row:e})=>{const n=y.find(t=>t.value===e.accessPolicy);return n?h(S,{color:n.color},{default:()=>[n.label]}):"未知类型"}}},{title:"是否默认",field:"status",slots:{default:"status"}},{field:"action",fixed:"right",slots:{default:"action"},title:"操作",width:180}],L=()=>[{component:"Input",dependencies:{show:()=>!1,triggerFields:[""]},fieldName:"ossConfigId"},{component:"Divider",componentProps:{orientation:"center"},fieldName:"divider1",labelClass:"w-0",renderComponentContent:()=>({default:()=>"基本信息"})},{component:"Input",fieldName:"configKey",label:"配置名称",rules:"required"},{component:"Input",fieldName:"endpoint",label:"服务地址",renderComponentContent:e=>({addonBefore:()=>e.isHttps==="Y"?"https://":"http://"}),rules:v().refine(e=>e&&!/^https?:\/\/.*/.test(e),{message:"请输入正确的域名, 不需要http(s)"})},{component:"Input",fieldName:"domain",label:"自定义域名"},{component:"Divider",componentProps:{orientation:"center"},fieldName:"divider2",labelClass:"w-0",renderComponentContent:()=>({default:()=>"认证信息"})},{component:"Input",fieldName:"accessKey",label:"accessKey",rules:"required"},{component:"Input",fieldName:"secretKey",label:"secretKey",rules:"required"},{component:"Divider",componentProps:{orientation:"center"},fieldName:"divider3",labelClass:"w-0",renderComponentContent:()=>({default:()=>"其他信息"})},{component:"Input",fieldName:"bucketName",label:"桶名称",rules:"required"},{component:"Input",fieldName:"prefix",label:"前缀"},{component:"RadioGroup",componentProps:{buttonStyle:"solid",options:y,optionType:"button"},defaultValue:"0",fieldName:"accessPolicy",formItemClass:"col-span-3 lg:col-span-2",label:"权限桶类型"},{component:"RadioGroup",componentProps:{buttonStyle:"solid",options:w(C.SYS_YES_NO),optionType:"button"},defaultValue:"N",fieldName:"isHttps",formItemClass:"col-span-3 lg:col-span-1",label:"是否https",rules:"required"},{component:"Input",fieldName:"region",label:"区域"},{component:"Textarea",fieldName:"remark",formItemClass:"items-baseline",label:"备注"}],M=D({__name:"oss-config-drawer",emits:["reload"],setup(e,{emit:n}){const t=n,s=P(!1),d=x(()=>s.value?g("pages.common.edit"):g("pages.common.add")),[f,l]=I({commonConfig:{formItemClass:"col-span-3",labelWidth:100},schema:L(),showDefaultActions:!1,wrapperClass:"grid-cols-3"}),[c,o]=T({onCancel:m,onConfirm:u,onOpenChange(r){return p(this,null,function*(){if(!r)return null;o.drawerLoading(!0);const{id:a}=o.getData();if(s.value=!!a,s.value&&a){const N=yield V(a);yield l.setValues(N)}o.drawerLoading(!1)})}});function u(){return p(this,null,function*(){try{o.drawerLoading(!0);const{valid:r}=yield l.validate();if(!r)return;const a=k(yield l.getValues());yield s.value?B(a):$(a),t("reload"),yield m()}catch(r){console.error(r)}finally{o.drawerLoading(!1)}})}function m(){return p(this,null,function*(){o.close(),yield l.resetForm()})}return(r,a)=>(q(),K(b(c),{"close-on-click-modal":!1,title:d.value,class:"w-[650px]"},{default:O(()=>[h(b(f))]),_:1},8,["title"]))}}),W=_(M,[["__scopeId","data-v-656570fa"]]),X=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{z as a,U as b,Q as c,H as d,X as e,W as o,J as q};
