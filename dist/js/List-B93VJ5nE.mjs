import{z as T,r as z,o as de,a1 as x,ar as C,P as ve,q as pe}from"./bootstrap-CIlPtDbU.mjs";import{R as ge}from"./index-CwX3_37I.mjs";import{n as R,ai as me,a9 as oe,X as G,Q as be,W as F,ao as Se,ak as ne,ac as le,J as _,aa as P,k as Me,q,o as Te,ab as ye}from"../jse/index-index-CulmqKVw.mjs";function ee(){const e=n=>{e.current=n};return e}const V=(e,n)=>{let{height:r,offset:o,prefixCls:i,onInnerResize:l}=e,{slots:f}=n;var a;let d={},s={display:"flex",flexDirection:"column"};return o!==void 0&&(d={height:`${r}px`,position:"relative",overflow:"hidden"},s=T(T({},s),{transform:`translateY(${o}px)`,position:"absolute",left:0,right:0,top:0})),R("div",{style:d},[R(ge,{onResize:v=>{let{offsetHeight:h}=v;h&&l&&l()}},{default:()=>[R("div",{style:s,class:z({[`${i}-holder-inner`]:i})},[(a=f.default)===null||a===void 0?void 0:a.call(f)])]})])};V.displayName="Filter";V.inheritAttrs=!1;V.props={prefixCls:String,height:Number,offset:Number,onInnerResize:Function};const se=(e,n)=>{let{setRef:r}=e,{slots:o}=n;var i;const l=de((i=o.default)===null||i===void 0?void 0:i.call(o));return l&&l.length?me(l[0],{ref:r}):l};se.props={setRef:{type:Function,default:()=>{}}};const He=20;function te(e){return"touches"in e?e.touches[0].pageY:e.pageY}const Re=oe({compatConfig:{MODE:3},name:"ScrollBar",inheritAttrs:!1,props:{prefixCls:String,scrollTop:Number,scrollHeight:Number,height:Number,count:Number,onScroll:{type:Function},onStartMove:{type:Function},onStopMove:{type:Function}},setup(){return{moveRaf:null,scrollbarRef:ee(),thumbRef:ee(),visibleTimeout:null,state:G({dragging:!1,pageY:null,startTop:null,visible:!1})}},watch:{scrollTop:{handler(){this.delayHidden()},flush:"post"}},mounted(){var e,n;(e=this.scrollbarRef.current)===null||e===void 0||e.addEventListener("touchstart",this.onScrollbarTouchStart,C?{passive:!1}:!1),(n=this.thumbRef.current)===null||n===void 0||n.addEventListener("touchstart",this.onMouseDown,C?{passive:!1}:!1)},beforeUnmount(){this.removeEvents(),clearTimeout(this.visibleTimeout)},methods:{delayHidden(){clearTimeout(this.visibleTimeout),this.state.visible=!0,this.visibleTimeout=setTimeout(()=>{this.state.visible=!1},2e3)},onScrollbarTouchStart(e){e.preventDefault()},onContainerMouseDown(e){e.stopPropagation(),e.preventDefault()},patchEvents(){window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),this.thumbRef.current.addEventListener("touchmove",this.onMouseMove,C?{passive:!1}:!1),this.thumbRef.current.addEventListener("touchend",this.onMouseUp)},removeEvents(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.scrollbarRef.current.removeEventListener("touchstart",this.onScrollbarTouchStart,C?{passive:!1}:!1),this.thumbRef.current&&(this.thumbRef.current.removeEventListener("touchstart",this.onMouseDown,C?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchmove",this.onMouseMove,C?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchend",this.onMouseUp)),x.cancel(this.moveRaf)},onMouseDown(e){const{onStartMove:n}=this.$props;T(this.state,{dragging:!0,pageY:te(e),startTop:this.getTop()}),n(),this.patchEvents(),e.stopPropagation(),e.preventDefault()},onMouseMove(e){const{dragging:n,pageY:r,startTop:o}=this.state,{onScroll:i}=this.$props;if(x.cancel(this.moveRaf),n){const l=te(e)-r,f=o+l,a=this.getEnableScrollRange(),d=this.getEnableHeightRange(),s=d?f/d:0,v=Math.ceil(s*a);this.moveRaf=x(()=>{i(v)})}},onMouseUp(){const{onStopMove:e}=this.$props;this.state.dragging=!1,e(),this.removeEvents()},getSpinHeight(){const{height:e,scrollHeight:n}=this.$props;let r=e/n*100;return r=Math.max(r,He),r=Math.min(r,e/2),Math.floor(r)},getEnableScrollRange(){const{scrollHeight:e,height:n}=this.$props;return e-n||0},getEnableHeightRange(){const{height:e}=this.$props,n=this.getSpinHeight();return e-n||0},getTop(){const{scrollTop:e}=this.$props,n=this.getEnableScrollRange(),r=this.getEnableHeightRange();return e===0||n===0?0:e/n*r},showScroll(){const{height:e,scrollHeight:n}=this.$props;return n>e}},render(){const{dragging:e,visible:n}=this.state,{prefixCls:r}=this.$props,o=this.getSpinHeight()+"px",i=this.getTop()+"px",l=this.showScroll(),f=l&&n;return R("div",{ref:this.scrollbarRef,class:z(`${r}-scrollbar`,{[`${r}-scrollbar-show`]:l}),style:{width:"8px",top:0,bottom:0,right:0,position:"absolute",display:f?void 0:"none"},onMousedown:this.onContainerMouseDown,onMousemove:this.delayHidden},[R("div",{ref:this.thumbRef,class:z(`${r}-scrollbar-thumb`,{[`${r}-scrollbar-thumb-moving`]:e}),style:{width:"100%",height:o,top:i,left:0,position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:"99px",cursor:"pointer",userSelect:"none"},onMousedown:this.onMouseDown},null)])}});function we(e,n,r,o){const i=new Map,l=new Map,f=be(Symbol("update"));F(e,()=>{f.value=Symbol("update")});let a;function d(){x.cancel(a)}function s(){d(),a=x(()=>{i.forEach((h,c)=>{if(h&&h.offsetParent){const{offsetHeight:p}=h;l.get(c)!==p&&(f.value=Symbol("update"),l.set(c,h.offsetHeight))}})})}function v(h,c){const p=n(h);i.get(p),c?(i.set(p,c.$el||c),s()):i.delete(p)}return Se(()=>{d()}),[v,s,l,f]}function Ee(e,n,r,o,i,l,f,a){let d;return s=>{if(s==null){a();return}x.cancel(d);const v=n.value,h=o.itemHeight;if(typeof s=="number")f(s);else if(s&&typeof s=="object"){let c;const{align:p}=s;"index"in s?{index:c}=s:c=v.findIndex(y=>i(y)===s.key);const{offset:m=0}=s,k=(y,I)=>{if(y<0||!e.value)return;const D=e.value.clientHeight;let b=!1,M=I;if(D){const $=I||p;let N=0,w=0,E=0;const Y=Math.min(v.length,c);for(let S=0;S<=Y;S+=1){const U=i(v[S]);w=N;const B=r.get(U);E=w+(B===void 0?h:B),N=E,S===c&&B===void 0&&(b=!0)}const O=e.value.scrollTop;let H=null;switch($){case"top":H=w-m;break;case"bottom":H=E-D+m;break;default:{const S=O+D;w<O?M="top":E>S&&(M="bottom")}}H!==null&&H!==O&&f(H)}d=x(()=>{b&&l(),k(y-1,M)},2)};k(5)}}}const xe=typeof navigator=="object"&&/Firefox/i.test(navigator.userAgent),ie=(e,n)=>{let r=!1,o=null;function i(){clearTimeout(o),r=!0,o=setTimeout(()=>{r=!1},50)}return function(l){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const a=l<0&&e.value||l>0&&n.value;return f&&a?(clearTimeout(o),r=!1):(!a||r)&&i(),!r&&a}};function Le(e,n,r,o){let i=0,l=null,f=null,a=!1;const d=ie(n,r);function s(h){if(!e.value)return;x.cancel(l);const{deltaY:c}=h;i+=c,f=c,!d(c)&&(xe||h.preventDefault(),l=x(()=>{o(i*(a?10:1)),i=0}))}function v(h){e.value&&(a=h.detail===f)}return[s,v]}const Ce=14/15;function Fe(e,n,r){let o=!1,i=0,l=null,f=null;const a=()=>{l&&(l.removeEventListener("touchmove",d),l.removeEventListener("touchend",s))},d=c=>{if(o){const p=Math.ceil(c.touches[0].pageY);let m=i-p;i=p,r(m)&&c.preventDefault(),clearInterval(f),f=setInterval(()=>{m*=Ce,(!r(m,!0)||Math.abs(m)<=.1)&&clearInterval(f)},16)}},s=()=>{o=!1,a()},v=c=>{a(),c.touches.length===1&&!o&&(o=!0,i=Math.ceil(c.touches[0].pageY),l=c.target,l.addEventListener("touchmove",d,{passive:!1}),l.addEventListener("touchend",s))},h=()=>{};ne(()=>{document.addEventListener("touchmove",h,{passive:!1}),F(e,c=>{n.value.removeEventListener("touchstart",v),a(),clearInterval(f),c&&n.value.addEventListener("touchstart",v,{passive:!1})},{immediate:!0})}),le(()=>{document.removeEventListener("touchmove",h)})}var Ie=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]]);return r};const De=[],$e={overflowY:"auto",overflowAnchor:"none"};function Oe(e,n,r,o,i,l){let{getKey:f}=l;return e.slice(n,r+1).map((a,d)=>{const s=n+d,v=i(a,s,{}),h=f(a);return R(se,{key:h,setRef:c=>o(a,c)},{default:()=>[v]})})}const Pe=oe({compatConfig:{MODE:3},name:"List",inheritAttrs:!1,props:{prefixCls:String,data:ve.array,height:Number,itemHeight:Number,fullHeight:{type:Boolean,default:void 0},itemKey:{type:[String,Number,Function],required:!0},component:{type:[String,Object]},virtual:{type:Boolean,default:void 0},children:Function,onScroll:Function,onMousedown:Function,onMouseenter:Function,onVisibleChange:Function},setup(e,n){let{expose:r}=n;const o=_(()=>{const{height:t,itemHeight:u,virtual:g}=e;return!!(g!==!1&&t&&u)}),i=_(()=>{const{height:t,itemHeight:u,data:g}=e;return o.value&&g&&u*g.length>t}),l=G({scrollTop:0,scrollMoving:!1}),f=_(()=>e.data||De),a=P([]);F(f,()=>{a.value=Me(f.value).slice()},{immediate:!0});const d=P(t=>{});F(()=>e.itemKey,t=>{typeof t=="function"?d.value=t:d.value=u=>u==null?void 0:u[t]},{immediate:!0});const s=P(),v=P(),h=P(),c=t=>d.value(t),p={getKey:c};function m(t){let u;typeof t=="function"?u=t(l.scrollTop):u=t;const g=N(u);s.value&&(s.value.scrollTop=g),l.scrollTop=g}const[k,y,I,D]=we(a,c),b=G({scrollHeight:void 0,start:0,end:0,offset:void 0}),M=P(0);ne(()=>{q(()=>{var t;M.value=((t=v.value)===null||t===void 0?void 0:t.offsetHeight)||0})}),Te(()=>{q(()=>{var t;M.value=((t=v.value)===null||t===void 0?void 0:t.offsetHeight)||0})}),F([o,a],()=>{o.value||T(b,{scrollHeight:void 0,start:0,end:a.value.length-1,offset:void 0})},{immediate:!0}),F([o,a,M,i],()=>{o.value&&!i.value&&T(b,{scrollHeight:M.value,start:0,end:a.value.length-1,offset:void 0}),s.value&&(l.scrollTop=s.value.scrollTop)},{immediate:!0}),F([i,o,()=>l.scrollTop,a,D,()=>e.height,M],()=>{if(!o.value||!i.value)return;let t=0,u,g,L;const j=a.value.length,ce=a.value,Q=l.scrollTop,{itemHeight:X,height:Z}=e,ue=Q+Z;for(let A=0;A<j;A+=1){const fe=ce[A],he=c(fe);let K=I.get(he);K===void 0&&(K=X);const W=t+K;u===void 0&&W>=Q&&(u=A,g=t),L===void 0&&W>ue&&(L=A),t=W}u===void 0&&(u=0,g=0,L=Math.ceil(Z/X)),L===void 0&&(L=j-1),L=Math.min(L+1,j),T(b,{scrollHeight:t,start:u,end:L,offset:g})},{immediate:!0});const $=_(()=>b.scrollHeight-e.height);function N(t){let u=t;return Number.isNaN($.value)||(u=Math.min(u,$.value)),u=Math.max(u,0),u}const w=_(()=>l.scrollTop<=0),E=_(()=>l.scrollTop>=$.value),Y=ie(w,E);function O(t){m(t)}function H(t){var u;const{scrollTop:g}=t.currentTarget;g!==l.scrollTop&&m(g),(u=e.onScroll)===null||u===void 0||u.call(e,t)}const[S,U]=Le(o,w,E,t=>{m(u=>u+t)});Fe(o,s,(t,u)=>Y(t,u)?!1:(S({preventDefault(){},deltaY:t}),!0));function B(t){o.value&&t.preventDefault()}const J=()=>{s.value&&(s.value.removeEventListener("wheel",S,C?{passive:!1}:!1),s.value.removeEventListener("DOMMouseScroll",U),s.value.removeEventListener("MozMousePixelScroll",B))};ye(()=>{q(()=>{s.value&&(J(),s.value.addEventListener("wheel",S,C?{passive:!1}:!1),s.value.addEventListener("DOMMouseScroll",U),s.value.addEventListener("MozMousePixelScroll",B))})}),le(()=>{J()});const re=Ee(s,a,I,e,c,y,m,()=>{var t;(t=h.value)===null||t===void 0||t.delayHidden()});r({scrollTo:re});const ae=_(()=>{let t=null;return e.height&&(t=T({[e.fullHeight?"height":"maxHeight"]:e.height+"px"},$e),o.value&&(t.overflowY="hidden",l.scrollMoving&&(t.pointerEvents="none"))),t});return F([()=>b.start,()=>b.end,a],()=>{if(e.onVisibleChange){const t=a.value.slice(b.start,b.end+1);e.onVisibleChange(t,a.value)}},{flush:"post"}),{state:l,mergedData:a,componentStyle:ae,onFallbackScroll:H,onScrollBar:O,componentRef:s,useVirtual:o,calRes:b,collectHeight:y,setInstance:k,sharedConfig:p,scrollBarRef:h,fillerInnerRef:v,delayHideScrollBar:()=>{var t;(t=h.value)===null||t===void 0||t.delayHidden()}}},render(){const e=T(T({},this.$props),this.$attrs),{prefixCls:n="rc-virtual-list",height:r,itemHeight:o,fullHeight:i,data:l,itemKey:f,virtual:a,component:d="div",onScroll:s,children:v=this.$slots.default,style:h,class:c}=e,p=Ie(e,["prefixCls","height","itemHeight","fullHeight","data","itemKey","virtual","component","onScroll","children","style","class"]),m=z(n,c),{scrollTop:k}=this.state,{scrollHeight:y,offset:I,start:D,end:b}=this.calRes,{componentStyle:M,onFallbackScroll:$,onScrollBar:N,useVirtual:w,collectHeight:E,sharedConfig:Y,setInstance:O,mergedData:H,delayHideScrollBar:S}=this;return R("div",pe({style:T(T({},h),{position:"relative"}),class:m},p),[R(d,{class:`${n}-holder`,style:M,ref:"componentRef",onScroll:$,onMouseenter:S},{default:()=>[R(V,{prefixCls:n,height:y,offset:I,onInnerResize:E,ref:"fillerInnerRef"},{default:()=>Oe(H,D,b,O,v,Y)})]}),w&&R(Re,{ref:"scrollBarRef",prefixCls:n,scrollTop:k,height:r,scrollHeight:y,count:H.length,onScroll:N,onStartMove:()=>{this.state.scrollMoving=!0},onStopMove:()=>{this.state.scrollMoving=!1}},null)])}});export{Pe as L,ee as c};
