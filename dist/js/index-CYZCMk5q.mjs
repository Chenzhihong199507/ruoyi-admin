var P=Object.defineProperty;var x=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var D=(r,i,t)=>i in r?P(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,M=(r,i)=>{for(var t in i||(i={}))R.call(i,t)&&D(r,t,i[t]);if(x)for(var t of x(i))q.call(i,t)&&D(r,t,i[t]);return r};var g=(r,i,t)=>new Promise((d,y)=>{var s=n=>{try{m(t.next(n))}catch(l){y(l)}},_=n=>{try{m(t.throw(n))}catch(l){y(l)}},m=n=>n.done?d(n.value):Promise.resolve(n.value).then(s,_);m((t=t.apply(r,i)).next())});import{aq as z,M as A,bC as $}from"./bootstrap-CIlPtDbU.mjs";import"./vxe-table-CS5KFeE-.mjs";import{q as B,_ as I,n as T,c as O,a as j}from"./notice-modal.vue_vue_type_script_setup_true_lang-CHrSHOdU.mjs";import{S as E}from"./index-BLUbi1M4.mjs";import{_ as G}from"./page.vue_vue_type_script_setup_true_lang-BEwXti9W.mjs";import{a9 as F,Q as H,b2 as L,br as Q,at as u,au as f,av as a,n as C,a8 as c,aC as W,ap as b,aD as v,aG as k}from"../jse/index-index-CulmqKVw.mjs";import{u as J}from"./use-vxe-grid-CIpB4HOm.mjs";import{u as K}from"./use-modal-BmBYziM1.mjs";import{P as U}from"./index-BLw-otuj.mjs";import"./render-C5tDa4zc.mjs";import"./data-CRYXvPFo.mjs";import"./index-BsPmTjuM.mjs";import"./colors-DLErT_a-.mjs";import"./dict-D8K1MO7Q.mjs";import"./index-B9BKRmLN.mjs";import"./index-CY4pGJKi.mjs";import"./Col-CY1020A8.mjs";import"./responsiveObserve-CKY_yQR9.mjs";import"./useFlexGapSupport-UdCnRdDh.mjs";import"./Trigger-CxuUq1Ff.mjs";import"./ResizeObserver.es-CDE7jhPe.mjs";import"./get-vP85LLZV.mjs";import"./useRefs-DXDFWT8O.mjs";import"./collapseMotion-BYkmK0aG.mjs";import"./debounce-iPjm31B_.mjs";import"./index-CbGq_Vdo.mjs";import"./FormItemContext-D-XKVqk8.mjs";import"./isPlainObject-D3JZnYxx.mjs";import"./EyeOutlined-Bhfo9c26.mjs";import"./CheckOutlined-CIq9xGup.mjs";import"./useMergedState-DtLgCtQF.mjs";import"./uuid-BthZQwsx.mjs";import"./index-B-WsVPHD.mjs";import"./statusUtils-C-zQFcRu.mjs";import"./slide-B9Yt64p6.mjs";import"./index-CwX3_37I.mjs";import"./List-B93VJ5nE.mjs";import"./index-yiE2I97I.mjs";import"./Checkbox-C1LX6amp.mjs";import"./index-uwSnP2fA.mjs";import"./eagerComputed-Bboi8kUT.mjs";import"./index-epHOG_uQ.mjs";import"./index-MMlqTCj9.mjs";import"./index-aPtpRG1I.mjs";import"./Group-B1PMGyxu.mjs";import"./index-CeJhG9t7.mjs";import"./index-CkI6h8s8.mjs";import"./get-popup-container-BwMHEyJY.mjs";import"./loading-7m7uS9S_.mjs";import"./icon-button.vue_vue_type_script_setup_true_lang-BMSbb8G-.mjs";import"./x-BK4QZNWW.mjs";import"./index-crWPCwF-.mjs";const Ue=F({__name:"index",setup(r){const i={commonConfig:{labelWidth:80},schema:B(),wrapperClass:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},t={checkboxConfig:{highlight:!0,reserve:!0},columns:O,height:"auto",keepSource:!0,pagerConfig:{},proxyConfig:{ajax:{query:(p,h)=>g(this,[p,h],function*({page:o},e){return e!=null&&e.createTime?(e.params={beginTime:$(e.createTime[0]).format("YYYY-MM-DD 00:00:00"),endTime:$(e.createTime[1]).format("YYYY-MM-DD 23:59:59")},Reflect.deleteProperty(e,"createTime")):Reflect.deleteProperty(e,"params"),yield j(M({pageNum:o.currentPage,pageSize:o.pageSize},e))})}},rowConfig:{isHover:!0,keyField:"noticeId"},round:!0,align:"center",showOverflow:!0},d=H(!1),[y,s]=J({formOptions:i,gridOptions:t,gridEvents:{checkboxChange:o=>{d.value=o.records.length>0},checkboxAll:o=>{d.value=o.records.length>0}}}),[_,m]=K({connectedComponent:I});function n(){m.setData({}),m.open()}function l(o){return g(this,null,function*(){m.setData({id:o.noticeId}),m.open()})}function Y(o){return g(this,null,function*(){yield T(o.noticeId),yield s.reload()})}function S(){const e=s.grid.getCheckboxRecords().map(p=>p.noticeId);A.confirm({title:"提示",okType:"danger",content:`确认删除选中的${e.length}条记录吗？`,onOk:()=>g(this,null,function*(){yield T(e),yield s.reload()})})}return(o,e)=>{const p=L("a-button"),h=Q("access");return u(),f(c(G),{"auto-content-height":!0},{default:a(()=>[C(c(y),null,{"toolbar-actions":a(()=>e[2]||(e[2]=[W("span",{class:"pl-[7px] text-[16px]"},"通知公告列表",-1)])),"toolbar-tools":a(()=>[C(c(E),null,{default:a(()=>[b((u(),f(p,{disabled:!d.value,danger:"",type:"primary",onClick:S},{default:a(()=>[v(k(o.$t("pages.common.delete")),1)]),_:1},8,["disabled"])),[[h,["system:notice:remove"],"code"]]),b((u(),f(p,{type:"primary",onClick:n},{default:a(()=>[v(k(o.$t("pages.common.add")),1)]),_:1})),[[h,["system:notice:add"],"code"]])]),_:1})]),action:a(({row:w})=>[b((u(),f(p,{size:"small",type:"link",onClick:N=>l(w)},{default:a(()=>[v(k(o.$t("pages.common.edit")),1)]),_:2},1032,["onClick"])),[[h,["system:notice:edit"],"code"]]),C(c(U),{placement:"left",title:"确认删除？",onConfirm:N=>Y(w)},{default:a(()=>[b((u(),f(p,{danger:"",size:"small",type:"link",onClick:e[0]||(e[0]=z(()=>{},["stop"]))},{default:a(()=>[v(k(o.$t("pages.common.delete")),1)]),_:1})),[[h,["system:notice:remove"],"code"]])]),_:2},1032,["onConfirm"])]),_:1}),C(c(_),{onReload:e[1]||(e[1]=w=>c(s).reload())})]),_:1})}}});export{Ue as default};
