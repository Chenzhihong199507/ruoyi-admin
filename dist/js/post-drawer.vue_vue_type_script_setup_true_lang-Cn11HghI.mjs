var p=(e,d,r)=>new Promise((l,m)=>{var u=o=>{try{i(r.next(o))}catch(t){m(t)}},s=o=>{try{i(r.throw(o))}catch(t){m(t)}},i=o=>o.done?l(o.value):Promise.resolve(o.value).then(u,s);i((r=r.apply(e,d)).next())});import{bN as C,I as c,K as f,$ as g}from"./bootstrap-CIlPtDbU.mjs";import{u as S}from"./vxe-table-CS5KFeE-.mjs";import{g as _}from"./index-DxROXI-t.mjs";import{g as b,r as D}from"./render-C5tDa4zc.mjs";import{g as h}from"./get-popup-container-BwMHEyJY.mjs";import{a9 as L,Q as x,J as A,a3 as v,at as q,au as B,av as E,n as P,a8 as N}from"../jse/index-index-CulmqKVw.mjs";import{u as M}from"./use-drawer-0pSlBI5S.mjs";import{a as R}from"./tree-DR0G1ezI.mjs";function j(e){return c.get("/system/post/list",{params:e})}function z(e){return C("/system/post/export",e)}function T(e){return c.get(`/system/post/${e}`)}function V(e){return c.postWithMsg("/system/post",e)}function $(e){return c.putWithMsg("/system/post",e)}function H(e){return c.deleteWithMsg(`/system/post/${e}`)}const X=()=>[{component:"Input",fieldName:"postCode",label:"岗位编码"},{component:"Input",fieldName:"postName",label:"岗位名称"},{component:"Select",componentProps:{getPopupContainer:h,options:b(f.SYS_NORMAL_DISABLE)},fieldName:"status",label:"状态"}],Z=[{type:"checkbox",width:60},{title:"岗位编码",field:"postCode"},{title:"类别编码",field:"postCategory"},{title:"岗位名称",field:"postName"},{title:"排序",field:"postSort"},{title:"状态",field:"status",slots:{default:({row:e})=>D(e.status,f.SYS_NORMAL_DISABLE)}},{title:"创建时间",field:"createTime"},{field:"action",fixed:"right",slots:{default:"action"},title:"操作",width:180}],k=()=>[{component:"Input",dependencies:{show:()=>!1,triggerFields:[""]},fieldName:"postId",label:"postId"},{component:"TreeSelect",componentProps:{class:"w-full",getPopupContainer:h},fieldName:"deptId",label:"所属部门",rules:"selectRequired"},{component:"Input",fieldName:"postName",label:"岗位名称",rules:"required"},{component:"Input",fieldName:"postCode",label:"岗位编码",rules:"required"},{component:"Input",fieldName:"postCategory",label:"类别编码"},{component:"InputNumber",fieldName:"postSort",label:"岗位排序",rules:"required"},{component:"RadioGroup",componentProps:{buttonStyle:"solid",options:b(f.SYS_NORMAL_DISABLE),optionType:"button"},defaultValue:"0",fieldName:"status",label:"岗位状态",rules:"required"},{component:"Textarea",fieldName:"remark",formItemClass:"items-baseline",label:"备注"}],ee=L({__name:"post-drawer",emits:["reload"],setup(e,{emit:d}){const r=d,l=x(!1),m=A(()=>l.value?g("pages.common.edit"):g("pages.common.add")),[u,s]=S({commonConfig:{formItemClass:"col-span-2",componentProps:{class:"w-full"}},schema:k(),showDefaultActions:!1,wrapperClass:"grid-cols-2"});function i(){return p(this,null,function*(){const a=yield _();R(a,"label"," / "),s.updateSchema([{componentProps:{fieldNames:{label:"label",value:"id"},treeData:a,treeDefaultExpandAll:!0,treeLine:{showLeafIcon:!1},treeNodeLabelProp:"fullName"},fieldName:"deptId"}])})}const[o,t]=M({onCancel:w,onConfirm:I,onOpenChange(a){return p(this,null,function*(){if(!a)return null;t.drawerLoading(!0);const{id:n}=t.getData();if(l.value=!!n,yield i(),l.value&&n){const y=yield T(n);yield s.setValues(y)}t.drawerLoading(!1)})}});function I(){return p(this,null,function*(){try{t.drawerLoading(!0);const{valid:a}=yield s.validate();if(!a)return;const n=v(yield s.getValues());yield l.value?$(n):V(n),r("reload"),yield w()}catch(a){console.error(a)}finally{t.drawerLoading(!1)}})}function w(){return p(this,null,function*(){t.close(),yield s.resetForm()})}return(a,n)=>(q(),B(N(o),{"close-on-click-modal":!1,title:m.value,class:"w-[600px]"},{default:E(()=>[P(N(u))]),_:1},8,["title"]))}});export{ee as _,H as a,j as b,Z as c,z as p,X as q};
