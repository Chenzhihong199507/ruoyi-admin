import{P as O,z as b,q as H,a9 as me,aa as it,o as ot,r as ye,a1 as F,ab as B,ac as Mt,ad as xe,ae as St,af as Me,ag as Se,ah as De,ai as Ae,aj as se,ak as Dt,al as Ee,am as Ne,an as At,ao as X,p as rt,ap as Et,v as Nt,aq as He,ar as Y,as as Ht,at as Rt,au as K,av as $t,aw as _t,ax as Re,a2 as Bt,ay as Vt,az as Ft}from"./bootstrap-CIlPtDbU.mjs";import{n as x,ap as st,br as Wt,a9 as U,Q as V,aa as M,W as _,ak as at,ac as Lt,J as j,q as pe,o as It,ao as Xt,U as Yt,V as zt,a7 as jt,F as kt}from"../jse/index-index-CulmqKVw.mjs";import{i as Ut}from"./ResizeObserver.es-CDE7jhPe.mjs";function Gt(){return""}function qt(e){return e?e.ownerDocument:window.document}function ut(){}const Kt=()=>({action:O.oneOfType([O.string,O.arrayOf(O.string)]).def([]),showAction:O.any.def([]),hideAction:O.any.def([]),getPopupClassNameFromAlign:O.any.def(Gt),onPopupVisibleChange:Function,afterPopupVisibleChange:O.func.def(ut),popup:O.any,arrow:O.bool.def(!0),popupStyle:{type:Object,default:void 0},prefixCls:O.string.def("rc-trigger-popup"),popupClassName:O.string.def(""),popupPlacement:String,builtinPlacements:O.object,popupTransitionName:String,popupAnimation:O.any,mouseEnterDelay:O.number.def(0),mouseLeaveDelay:O.number.def(.1),zIndex:Number,focusDelay:O.number.def(0),blurDelay:O.number.def(.15),getPopupContainer:Function,getDocument:O.func.def(qt),forceRender:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:!1},mask:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},popupAlign:O.object.def(()=>({})),popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},maskTransitionName:String,maskAnimation:String,stretch:String,alignPoint:{type:Boolean,default:void 0},autoDestroy:{type:Boolean,default:!1},mobile:Object,getTriggerDOMNode:Function}),we={visible:Boolean,prefixCls:String,zIndex:Number,destroyPopupOnHide:Boolean,forceRender:Boolean,arrow:{type:Boolean,default:!0},animation:[String,Object],transitionName:String,stretch:{type:String},align:{type:Object},point:{type:Object},getRootDomNode:{type:Function},getClassNameFromAlign:{type:Function},onAlign:{type:Function},onMouseenter:{type:Function},onMouseleave:{type:Function},onMousedown:{type:Function},onTouchstart:{type:Function}},Qt=b(b({},we),{mobile:{type:Object}}),Jt=b(b({},we),{mask:Boolean,mobile:{type:Object},maskAnimation:String,maskTransitionName:String});function lt(e){const{prefixCls:t,visible:n,zIndex:i,mask:o,maskAnimation:r,maskTransitionName:s}=e;if(!o)return null;let a={};return(s||r)&&(a=it({prefixCls:t,transitionName:s,animation:r})),x(me,H({appear:!0},a),{default:()=>[st(x("div",{style:{zIndex:i},class:`${t}-mask`},null),[[Wt("if"),n]])]})}lt.displayName="Mask";const Zt=U({compatConfig:{MODE:3},name:"MobilePopupInner",inheritAttrs:!1,props:Qt,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup(e,t){let{expose:n,slots:i}=t;const o=V();return n({forceAlign:()=>{},getElement:()=>o.value}),()=>{var r;const{zIndex:s,visible:a,prefixCls:l,mobile:{popupClassName:u,popupStyle:h,popupMotion:p={},popupRender:c}={}}=e,f=b({zIndex:s},h);let d=ot((r=i.default)===null||r===void 0?void 0:r.call(i));d.length>1&&(d=x("div",{class:`${l}-content`},[d])),c&&(d=c(d));const g=ye(l,u);return x(me,H({ref:o},p),{default:()=>[a?x("div",{class:g,style:f},[d]):null]})}}});var en=function(e,t,n,i){function o(r){return r instanceof n?r:new n(function(s){s(r)})}return new(n||(n=Promise))(function(r,s){function a(h){try{u(i.next(h))}catch(p){s(p)}}function l(h){try{u(i.throw(h))}catch(p){s(p)}}function u(h){h.done?r(h.value):o(h.value).then(a,l)}u((i=i.apply(e,t||[])).next())})};const $e=["measure","align",null,"motion"],tn=(e,t)=>{const n=M(null),i=M(),o=M(!1);function r(l){o.value||(n.value=l)}function s(){F.cancel(i.value)}function a(l){s(),i.value=F(()=>{let u=n.value;switch(n.value){case"align":u="motion";break;case"motion":u="stable";break}r(u),l==null||l()})}return _(e,()=>{r("measure")},{immediate:!0,flush:"post"}),at(()=>{_(n,()=>{switch(n.value){case"measure":t();break}n.value&&(i.value=F(()=>en(void 0,void 0,void 0,function*(){const l=$e.indexOf(n.value),u=$e[l+1];u&&l!==-1&&r(u)})))},{immediate:!0,flush:"post"})}),Lt(()=>{o.value=!0,s()}),[n,a]},nn=e=>{const t=M({width:0,height:0});function n(o){t.value={width:o.offsetWidth,height:o.offsetHeight}}return[j(()=>{const o={};if(e.value){const{width:r,height:s}=t.value;e.value.indexOf("height")!==-1&&s?o.height=`${s}px`:e.value.indexOf("minHeight")!==-1&&s&&(o.minHeight=`${s}px`),e.value.indexOf("width")!==-1&&r?o.width=`${r}px`:e.value.indexOf("minWidth")!==-1&&r&&(o.minWidth=`${r}px`)}return o}),n]};function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_e(Object(n),!0).forEach(function(i){on(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function de(e){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},de(e)}function on(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I,rn={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function ne(){if(I!==void 0)return I;I="";var e=document.createElement("p").style,t="Transform";for(var n in rn)n+t in e&&(I=n);return I}function ft(){return ne()?"".concat(ne(),"TransitionProperty"):"transitionProperty"}function oe(){return ne()?"".concat(ne(),"Transform"):"transform"}function Ve(e,t){var n=ft();n&&(e.style[n]=t,n!=="transitionProperty"&&(e.style.transitionProperty=t))}function ae(e,t){var n=oe();n&&(e.style[n]=t,n!=="transform"&&(e.style.transform=t))}function sn(e){return e.style.transitionProperty||e.style[ft()]}function an(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(oe());if(n&&n!=="none"){var i=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(i[12]||i[4],0),y:parseFloat(i[13]||i[5],0)}}return{x:0,y:0}}var un=/matrix\((.*)\)/,ln=/matrix3d\((.*)\)/;function fn(e,t){var n=window.getComputedStyle(e,null),i=n.getPropertyValue("transform")||n.getPropertyValue(oe());if(i&&i!=="none"){var o,r=i.match(un);if(r)r=r[1],o=r.split(",").map(function(a){return parseFloat(a,10)}),o[4]=t.x,o[5]=t.y,ae(e,"matrix(".concat(o.join(","),")"));else{var s=i.match(ln)[1];o=s.split(",").map(function(a){return parseFloat(a,10)}),o[12]=t.x,o[13]=t.y,ae(e,"matrix3d(".concat(o.join(","),")"))}}else ae(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"))}var cn=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,G;function Fe(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t}function W(e,t,n){var i=n;if(de(t)==="object"){for(var o in t)t.hasOwnProperty(o)&&W(e,o,t[o]);return}if(typeof i!="undefined"){typeof i=="number"&&(i="".concat(i,"px")),e.style[t]=i;return}return G(e,t)}function pn(e){var t,n,i,o=e.ownerDocument,r=o.body,s=o&&o.documentElement;return t=e.getBoundingClientRect(),n=Math.floor(t.left),i=Math.floor(t.top),n-=s.clientLeft||r.clientLeft||0,i-=s.clientTop||r.clientTop||0,{left:n,top:i}}function ct(e,t){var n=e["page".concat(t?"Y":"X","Offset")],i="scroll".concat(t?"Top":"Left");if(typeof n!="number"){var o=e.document;n=o.documentElement[i],typeof n!="number"&&(n=o.body[i])}return n}function pt(e){return ct(e)}function dt(e){return ct(e,!0)}function k(e){var t=pn(e),n=e.ownerDocument,i=n.defaultView||n.parentWindow;return t.left+=pt(i),t.top+=dt(i),t}function Te(e){return e!=null&&e==e.window}function ht(e){return Te(e)?e.document:e.nodeType===9?e:e.ownerDocument}function dn(e,t,n){var i=n,o="",r=ht(e);return i=i||r.defaultView.getComputedStyle(e,null),i&&(o=i.getPropertyValue(t)||i[t]),o}var hn=new RegExp("^(".concat(cn,")(?!px)[a-z%]+$"),"i"),vn=/^(top|right|bottom|left)$/,ue="currentStyle",le="runtimeStyle",$="left",gn="px";function mn(e,t){var n=e[ue]&&e[ue][t];if(hn.test(n)&&!vn.test(t)){var i=e.style,o=i[$],r=e[le][$];e[le][$]=e[ue][$],i[$]=t==="fontSize"?"1em":n||0,n=i.pixelLeft+gn,i[$]=o,e[le][$]=r}return n===""?"auto":n}typeof window!="undefined"&&(G=window.getComputedStyle?dn:mn);function Q(e,t){return e==="left"?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function We(e){if(e==="left")return"right";if(e==="right")return"left";if(e==="top")return"bottom";if(e==="bottom")return"top"}function Le(e,t,n){W(e,"position")==="static"&&(e.style.position="relative");var i=-999,o=-999,r=Q("left",n),s=Q("top",n),a=We(r),l=We(s);r!=="left"&&(i=999),s!=="top"&&(o=999);var u="",h=k(e);("left"in t||"top"in t)&&(u=sn(e)||"",Ve(e,"none")),"left"in t&&(e.style[a]="",e.style[r]="".concat(i,"px")),"top"in t&&(e.style[l]="",e.style[s]="".concat(o,"px")),Fe(e);var p=k(e),c={};for(var f in t)if(t.hasOwnProperty(f)){var d=Q(f,n),g=f==="left"?i:o,w=h[f]-p[f];d===f?c[d]=g+w:c[d]=g-w}W(e,c),Fe(e),("left"in t||"top"in t)&&Ve(e,u);var m={};for(var y in t)if(t.hasOwnProperty(y)){var P=Q(y,n),C=t[y]-h[y];y===P?m[P]=c[P]+C:m[P]=c[P]-C}W(e,m)}function yn(e,t){var n=k(e),i=an(e),o={x:i.x,y:i.y};"left"in t&&(o.x=i.x+t.left-n.left),"top"in t&&(o.y=i.y+t.top-n.top),fn(e,o)}function wn(e,t,n){if(n.ignoreShake){var i=k(e),o=i.left.toFixed(0),r=i.top.toFixed(0),s=t.left.toFixed(0),a=t.top.toFixed(0);if(o===s&&r===a)return}n.useCssRight||n.useCssBottom?Le(e,t,n):n.useCssTransform&&oe()in document.body.style?yn(e,t):Le(e,t,n)}function Pe(e,t){for(var n=0;n<e.length;n++)t(e[n])}function vt(e){return G(e,"boxSizing")==="border-box"}var Tn=["margin","border","padding"],he=-1,Pn=2,ve=1,bn=0;function On(e,t,n){var i={},o=e.style,r;for(r in t)t.hasOwnProperty(r)&&(i[r]=o[r],o[r]=t[r]);n.call(e);for(r in t)t.hasOwnProperty(r)&&(o[r]=i[r])}function z(e,t,n){var i=0,o,r,s;for(r=0;r<t.length;r++)if(o=t[r],o)for(s=0;s<n.length;s++){var a=void 0;o==="border"?a="".concat(o).concat(n[s],"Width"):a=o+n[s],i+=parseFloat(G(e,a))||0}return i}var E={getParent:function(t){var n=t;do n.nodeType===11&&n.host?n=n.host:n=n.parentNode;while(n&&n.nodeType!==1&&n.nodeType!==9);return n}};Pe(["Width","Height"],function(e){E["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],E["viewport".concat(e)](n))},E["viewport".concat(e)]=function(t){var n="client".concat(e),i=t.document,o=i.body,r=i.documentElement,s=r[n];return i.compatMode==="CSS1Compat"&&s||o&&o[n]||s}});function Ie(e,t,n){var i=n;if(Te(e))return t==="width"?E.viewportWidth(e):E.viewportHeight(e);if(e.nodeType===9)return t==="width"?E.docWidth(e):E.docHeight(e);var o=t==="width"?["Left","Right"]:["Top","Bottom"],r=Math.floor(t==="width"?e.getBoundingClientRect().width:e.getBoundingClientRect().height),s=vt(e),a=0;(r==null||r<=0)&&(r=void 0,a=G(e,t),(a==null||Number(a)<0)&&(a=e.style[t]||0),a=Math.floor(parseFloat(a))||0),i===void 0&&(i=s?ve:he);var l=r!==void 0||s,u=r||a;return i===he?l?u-z(e,["border","padding"],o):a:l?i===ve?u:u+(i===Pn?-z(e,["border"],o):z(e,["margin"],o)):a+z(e,Tn.slice(i),o)}var Cn={position:"absolute",visibility:"hidden",display:"block"};function Xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i,o=t[0];return o.offsetWidth!==0?i=Ie.apply(void 0,t):On(o,Cn,function(){i=Ie.apply(void 0,t)}),i}Pe(["width","height"],function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);E["outer".concat(t)]=function(i,o){return i&&Xe(i,e,o?bn:ve)};var n=e==="width"?["Left","Right"]:["Top","Bottom"];E[e]=function(i,o){var r=o;if(r!==void 0){if(i){var s=vt(i);return s&&(r+=z(i,["padding","border"],n)),W(i,e,r)}return}return i&&Xe(i,e,he)}});function gt(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var v={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var n=t.ownerDocument||t;return n.defaultView||n.parentWindow},getDocument:ht,offset:function(t,n,i){if(typeof n!="undefined")wn(t,n,i||{});else return k(t)},isWindow:Te,each:Pe,css:W,clone:function(t){var n,i={};for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);var o=t.overflow;if(o)for(n in t)t.hasOwnProperty(n)&&(i.overflow[n]=t.overflow[n]);return i},mix:gt,getWindowScrollLeft:function(t){return pt(t)},getWindowScrollTop:function(t){return dt(t)},merge:function(){for(var t={},n=0;n<arguments.length;n++)v.mix(t,n<0||arguments.length<=n?void 0:arguments[n]);return t},viewportWidth:0,viewportHeight:0};gt(v,E);var fe=v.getParent;function ge(e){if(v.isWindow(e)||e.nodeType===9)return null;var t=v.getDocument(e),n=t.body,i,o=v.css(e,"position"),r=o==="fixed"||o==="absolute";if(!r)return e.nodeName.toLowerCase()==="html"?null:fe(e);for(i=fe(e);i&&i!==n&&i.nodeType!==9;i=fe(i))if(o=v.css(i,"position"),o!=="static")return i;return null}var Ye=v.getParent;function xn(e){if(v.isWindow(e)||e.nodeType===9)return!1;var t=v.getDocument(e),n=t.body,i=null;for(i=Ye(e);i&&i!==n&&i!==t;i=Ye(i)){var o=v.css(i,"position");if(o==="fixed")return!0}return!1}function be(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},i=ge(e),o=v.getDocument(e),r=o.defaultView||o.parentWindow,s=o.body,a=o.documentElement;i;){if((navigator.userAgent.indexOf("MSIE")===-1||i.clientWidth!==0)&&i!==s&&i!==a&&v.css(i,"overflow")!=="visible"){var l=v.offset(i);l.left+=i.clientLeft,l.top+=i.clientTop,n.top=Math.max(n.top,l.top),n.right=Math.min(n.right,l.left+i.clientWidth),n.bottom=Math.min(n.bottom,l.top+i.clientHeight),n.left=Math.max(n.left,l.left)}else if(i===s||i===a)break;i=ge(i)}var u=null;if(!v.isWindow(e)&&e.nodeType!==9){u=e.style.position;var h=v.css(e,"position");h==="absolute"&&(e.style.position="fixed")}var p=v.getWindowScrollLeft(r),c=v.getWindowScrollTop(r),f=v.viewportWidth(r),d=v.viewportHeight(r),g=a.scrollWidth,w=a.scrollHeight,m=window.getComputedStyle(s);if(m.overflowX==="hidden"&&(g=r.innerWidth),m.overflowY==="hidden"&&(w=r.innerHeight),e.style&&(e.style.position=u),t||xn(e))n.left=Math.max(n.left,p),n.top=Math.max(n.top,c),n.right=Math.min(n.right,p+f),n.bottom=Math.min(n.bottom,c+d);else{var y=Math.max(g,p+f);n.right=Math.min(n.right,y);var P=Math.max(w,c+d);n.bottom=Math.min(n.bottom,P)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function Mn(e,t,n,i){var o=v.clone(e),r={width:t.width,height:t.height};return i.adjustX&&o.left<n.left&&(o.left=n.left),i.resizeWidth&&o.left>=n.left&&o.left+r.width>n.right&&(r.width-=o.left+r.width-n.right),i.adjustX&&o.left+r.width>n.right&&(o.left=Math.max(n.right-r.width,n.left)),i.adjustY&&o.top<n.top&&(o.top=n.top),i.resizeHeight&&o.top>=n.top&&o.top+r.height>n.bottom&&(r.height-=o.top+r.height-n.bottom),i.adjustY&&o.top+r.height>n.bottom&&(o.top=Math.max(n.bottom-r.height,n.top)),v.mix(o,r)}function Oe(e){var t,n,i;if(!v.isWindow(e)&&e.nodeType!==9)t=v.offset(e),n=v.outerWidth(e),i=v.outerHeight(e);else{var o=v.getWindow(e);t={left:v.getWindowScrollLeft(o),top:v.getWindowScrollTop(o)},n=v.viewportWidth(o),i=v.viewportHeight(o)}return t.width=n,t.height=i,t}function ze(e,t){var n=t.charAt(0),i=t.charAt(1),o=e.width,r=e.height,s=e.left,a=e.top;return n==="c"?a+=r/2:n==="b"&&(a+=r),i==="c"?s+=o/2:i==="r"&&(s+=o),{left:s,top:a}}function J(e,t,n,i,o){var r=ze(t,n[1]),s=ze(e,n[0]),a=[s.left-r.left,s.top-r.top];return{left:Math.round(e.left-a[0]+i[0]-o[0]),top:Math.round(e.top-a[1]+i[1]-o[1])}}function je(e,t,n){return e.left<n.left||e.left+t.width>n.right}function ke(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function Sn(e,t,n){return e.left>n.right||e.left+t.width<n.left}function Dn(e,t,n){return e.top>n.bottom||e.top+t.height<n.top}function Z(e,t,n){var i=[];return v.each(e,function(o){i.push(o.replace(t,function(r){return n[r]}))}),i}function ee(e,t){return e[t]=-e[t],e}function Ue(e,t){var n;return/%$/.test(e)?n=parseInt(e.substring(0,e.length-1),10)/100*t:n=parseInt(e,10),n||0}function Ge(e,t){e[0]=Ue(e[0],t.width),e[1]=Ue(e[1],t.height)}function mt(e,t,n,i){var o=n.points,r=n.offset||[0,0],s=n.targetOffset||[0,0],a=n.overflow,l=n.source||e;r=[].concat(r),s=[].concat(s),a=a||{};var u={},h=0,p=!!(a&&a.alwaysByViewport),c=be(l,p),f=Oe(l);Ge(r,f),Ge(s,t);var d=J(f,t,o,r,s),g=v.merge(f,d);if(c&&(a.adjustX||a.adjustY)&&i){if(a.adjustX&&je(d,f,c)){var w=Z(o,/[lr]/gi,{l:"r",r:"l"}),m=ee(r,0),y=ee(s,0),P=J(f,t,w,m,y);Sn(P,f,c)||(h=1,o=w,r=m,s=y)}if(a.adjustY&&ke(d,f,c)){var C=Z(o,/[tb]/gi,{t:"b",b:"t"}),A=ee(r,1),T=ee(s,1),N=J(f,t,C,A,T);Dn(N,f,c)||(h=1,o=C,r=A,s=T)}h&&(d=J(f,t,o,r,s),v.mix(g,d));var S=je(d,f,c),D=ke(d,f,c);if(S||D){var R=o;S&&(R=Z(o,/[lr]/gi,{l:"r",r:"l"})),D&&(R=Z(o,/[tb]/gi,{t:"b",b:"t"})),o=R,r=n.offset||[0,0],s=n.targetOffset||[0,0]}u.adjustX=a.adjustX&&S,u.adjustY=a.adjustY&&D,(u.adjustX||u.adjustY)&&(g=Mn(d,f,c,u))}return g.width!==f.width&&v.css(l,"width",v.width(l)+g.width-f.width),g.height!==f.height&&v.css(l,"height",v.height(l)+g.height-f.height),v.offset(l,{left:g.left,top:g.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:o,offset:r,targetOffset:s,overflow:u}}function An(e,t){var n=be(e,t),i=Oe(e);return!n||i.left+i.width<=n.left||i.top+i.height<=n.top||i.left>=n.right||i.top>=n.bottom}function Ce(e,t,n){var i=n.target||t,o=Oe(i),r=!An(i,n.overflow&&n.overflow.alwaysByViewport);return mt(e,o,n,r)}Ce.__getOffsetParent=ge;Ce.__getVisibleRectForElement=be;function En(e,t,n){var i,o,r=v.getDocument(e),s=r.defaultView||r.parentWindow,a=v.getWindowScrollLeft(s),l=v.getWindowScrollTop(s),u=v.viewportWidth(s),h=v.viewportHeight(s);"pageX"in t?i=t.pageX:i=a+t.clientX,"pageY"in t?o=t.pageY:o=l+t.clientY;var p={left:i,top:o,width:0,height:0},c=i>=0&&i<=a+u&&o>=0&&o<=l+h,f=[n.points[0],"cc"];return mt(e,p,Be(Be({},n),{},{points:f}),c)}function Nn(e,t){return e===t?!0:!e||!t?!1:"pageX"in t&&"pageY"in t?e.pageX===t.pageX&&e.pageY===t.pageY:"clientX"in t&&"clientY"in t?e.clientX===t.clientX&&e.clientY===t.clientY:!1}function Hn(e,t){e!==document.activeElement&&B(t,e)&&typeof e.focus=="function"&&e.focus()}function qe(e,t){let n=null,i=null;function o(s){let[{target:a}]=s;if(!document.documentElement.contains(a))return;const{width:l,height:u}=a.getBoundingClientRect(),h=Math.floor(l),p=Math.floor(u);(n!==h||i!==p)&&Promise.resolve().then(()=>{t({width:h,height:p})}),n=h,i=p}const r=new Ut(o);return e&&r.observe(e),()=>{r.disconnect()}}const Rn=(e,t)=>{let n=!1,i=null;function o(){clearTimeout(i)}function r(s){if(!n||s===!0){if(e()===!1)return;n=!0,o(),i=setTimeout(()=>{n=!1},t.value)}else o(),i=setTimeout(()=>{n=!1,r()},t.value)}return[r,()=>{n=!1,o()}]};var $n="__lodash_hash_undefined__";function _n(e){return this.__data__.set(e,$n),this}function Bn(e){return this.__data__.has(e)}function ie(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Mt;++t<n;)this.add(e[t])}ie.prototype.add=ie.prototype.push=_n;ie.prototype.has=Bn;function Vn(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}function Fn(e,t){return e.has(t)}var Wn=1,Ln=2;function yt(e,t,n,i,o,r){var s=n&Wn,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var u=r.get(e),h=r.get(t);if(u&&h)return u==t&&h==e;var p=-1,c=!0,f=n&Ln?new ie:void 0;for(r.set(e,t),r.set(t,e);++p<a;){var d=e[p],g=t[p];if(i)var w=s?i(g,d,p,t,e,r):i(d,g,p,e,t,r);if(w!==void 0){if(w)continue;c=!1;break}if(f){if(!Vn(t,function(m,y){if(!Fn(f,y)&&(d===m||o(d,m,n,i,r)))return f.push(y)})){c=!1;break}}else if(!(d===g||o(d,g,n,i,r))){c=!1;break}}return r.delete(e),r.delete(t),c}function In(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}function Xn(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Yn=1,zn=2,jn="[object Boolean]",kn="[object Date]",Un="[object Error]",Gn="[object Map]",qn="[object Number]",Kn="[object RegExp]",Qn="[object Set]",Jn="[object String]",Zn="[object Symbol]",ei="[object ArrayBuffer]",ti="[object DataView]",Ke=xe?xe.prototype:void 0,ce=Ke?Ke.valueOf:void 0;function ni(e,t,n,i,o,r,s){switch(n){case ti:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ei:return!(e.byteLength!=t.byteLength||!r(new Me(e),new Me(t)));case jn:case kn:case qn:return St(+e,+t);case Un:return e.name==t.name&&e.message==t.message;case Kn:case Jn:return e==t+"";case Gn:var a=In;case Qn:var l=i&Yn;if(a||(a=Xn),e.size!=t.size&&!l)return!1;var u=s.get(e);if(u)return u==t;i|=zn,s.set(e,t);var h=yt(a(e),a(t),i,o,r,s);return s.delete(e),h;case Zn:if(ce)return ce.call(e)==ce.call(t)}return!1}var ii=1,oi=Object.prototype,ri=oi.hasOwnProperty;function si(e,t,n,i,o,r){var s=n&ii,a=Se(e),l=a.length,u=Se(t),h=u.length;if(l!=h&&!s)return!1;for(var p=l;p--;){var c=a[p];if(!(s?c in t:ri.call(t,c)))return!1}var f=r.get(e),d=r.get(t);if(f&&d)return f==t&&d==e;var g=!0;r.set(e,t),r.set(t,e);for(var w=s;++p<l;){c=a[p];var m=e[c],y=t[c];if(i)var P=s?i(y,m,c,t,e,r):i(m,y,c,e,t,r);if(!(P===void 0?m===y||o(m,y,n,i,r):P)){g=!1;break}w||(w=c=="constructor")}if(g&&!w){var C=e.constructor,A=t.constructor;C!=A&&"constructor"in e&&"constructor"in t&&!(typeof C=="function"&&C instanceof C&&typeof A=="function"&&A instanceof A)&&(g=!1)}return r.delete(e),r.delete(t),g}var ai=1,Qe="[object Arguments]",Je="[object Array]",te="[object Object]",ui=Object.prototype,Ze=ui.hasOwnProperty;function li(e,t,n,i,o,r){var s=Ee(e),a=Ee(t),l=s?Je:De(e),u=a?Je:De(t);l=l==Qe?te:l,u=u==Qe?te:u;var h=l==te,p=u==te,c=l==u;if(c&&Ae(e)){if(!Ae(t))return!1;s=!0,h=!1}if(c&&!h)return r||(r=new se),s||Dt(e)?yt(e,t,n,i,o,r):ni(e,t,l,n,i,o,r);if(!(n&ai)){var f=h&&Ze.call(e,"__wrapped__"),d=p&&Ze.call(t,"__wrapped__");if(f||d){var g=f?e.value():e,w=d?t.value():t;return r||(r=new se),o(g,w,n,i,r)}}return c?(r||(r=new se),si(e,t,n,i,o,r)):!1}function wt(e,t,n,i,o){return e===t?!0:e==null||t==null||!Ne(e)&&!Ne(t)?e!==e&&t!==t:li(e,t,n,i,wt,o)}function fi(e,t){return wt(e,t)}const ci={align:Object,target:[Object,Function],onAlign:Function,monitorBufferTime:Number,monitorWindowResize:Boolean,disabled:Boolean};function et(e){return typeof e!="function"?null:e()}function tt(e){return typeof e!="object"||!e?null:e}const pi=U({compatConfig:{MODE:3},name:"Align",props:ci,emits:["align"],setup(e,t){let{expose:n,slots:i}=t;const o=V({}),r=V(),[s,a]=Rn(()=>{const{disabled:c,target:f,align:d,onAlign:g}=e;if(!c&&f&&r.value){const w=r.value;let m;const y=et(f),P=tt(f);o.value.element=y,o.value.point=P,o.value.align=d;const{activeElement:C}=document;return y&&At(y)?m=Ce(w,y,d):P&&(m=En(w,P,d)),Hn(C,w),g&&m&&g(w,m),!0}return!1},j(()=>e.monitorBufferTime)),l=V({cancel:()=>{}}),u=V({cancel:()=>{}}),h=()=>{const c=e.target,f=et(c),d=tt(c);r.value!==u.value.element&&(u.value.cancel(),u.value.element=r.value,u.value.cancel=qe(r.value,s)),(o.value.element!==f||!Nn(o.value.point,d)||!fi(o.value.align,e.align))&&(s(),l.value.element!==f&&(l.value.cancel(),l.value.element=f,l.value.cancel=qe(f,s)))};at(()=>{pe(()=>{h()})}),It(()=>{pe(()=>{h()})}),_(()=>e.disabled,c=>{c?a():s()},{immediate:!0,flush:"post"});const p=V(null);return _(()=>e.monitorWindowResize,c=>{c?p.value||(p.value=X(window,"resize",s)):p.value&&(p.value.remove(),p.value=null)},{flush:"post"}),Xt(()=>{l.value.cancel(),u.value.cancel(),p.value&&p.value.remove(),a()}),n({forceAlign:()=>s(!0)}),()=>{const c=i==null?void 0:i.default();return c?rt(c[0],{ref:r},!0,!0):null}}}),di=U({compatConfig:{MODE:3},name:"PopupInner",inheritAttrs:!1,props:we,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup(e,t){let{expose:n,attrs:i,slots:o}=t;const r=M(),s=M(),a=M(),[l,u]=nn(Yt(e,"stretch")),h=()=>{e.stretch&&u(e.getRootDomNode())},p=M(!1);let c;_(()=>e.visible,T=>{clearTimeout(c),T?c=setTimeout(()=>{p.value=e.visible}):p.value=!1},{immediate:!0});const[f,d]=tn(p,h),g=M(),w=()=>e.point?e.point:e.getRootDomNode,m=()=>{var T;(T=r.value)===null||T===void 0||T.forceAlign()},y=(T,N)=>{var S;const D=e.getClassNameFromAlign(N),R=a.value;a.value!==D&&(a.value=D),f.value==="align"&&(R!==D?Promise.resolve().then(()=>{m()}):d(()=>{var L;(L=g.value)===null||L===void 0||L.call(g)}),(S=e.onAlign)===null||S===void 0||S.call(e,T,N))},P=j(()=>{const T=typeof e.animation=="object"?e.animation:it(e);return["onAfterEnter","onAfterLeave"].forEach(N=>{const S=T[N];T[N]=D=>{d(),f.value="stable",S==null||S(D)}}),T}),C=()=>new Promise(T=>{g.value=T});_([P,f],()=>{!P.value&&f.value==="motion"&&d()},{immediate:!0}),n({forceAlign:m,getElement:()=>s.value.$el||s.value});const A=j(()=>{var T;return!(!((T=e.align)===null||T===void 0)&&T.points&&(f.value==="align"||f.value==="stable"))});return()=>{var T;const{zIndex:N,align:S,prefixCls:D,destroyPopupOnHide:R,onMouseenter:L,onMouseleave:Tt,onTouchstart:Pt=()=>{},onMousedown:bt}=e,re=f.value,Ot=[b(b({},l.value),{zIndex:N,opacity:re==="motion"||re==="stable"||!p.value?null:0,pointerEvents:!p.value&&re!=="stable"?"none":null}),i.style];let q=ot((T=o.default)===null||T===void 0?void 0:T.call(o,{visible:e.visible}));q.length>1&&(q=x("div",{class:`${D}-content`},[q]));const Ct=ye(D,i.class,a.value,!e.arrow&&`${D}-arrow-hidden`),xt=p.value||!e.visible?Et(P.value.name,P.value):{};return x(me,H(H({ref:s},xt),{},{onBeforeEnter:C}),{default:()=>!R||e.visible?st(x(pi,{target:w(),key:"popup",ref:r,monitorWindowResize:!0,disabled:A.value,align:S,onAlign:y},{default:()=>x("div",{class:Ct,onMouseenter:L,onMouseleave:Tt,onMousedown:He(bt,["capture"]),[Y?"onTouchstartPassive":"onTouchstart"]:He(Pt,["capture"]),style:Ot},[q])}),[[Nt,p.value]]):null})}}}),hi=U({compatConfig:{MODE:3},name:"Popup",inheritAttrs:!1,props:Jt,setup(e,t){let{attrs:n,slots:i,expose:o}=t;const r=M(!1),s=M(!1),a=M(),l=M();return _([()=>e.visible,()=>e.mobile],()=>{r.value=e.visible,e.visible&&e.mobile&&(s.value=!0)},{immediate:!0,flush:"post"}),o({forceAlign:()=>{var u;(u=a.value)===null||u===void 0||u.forceAlign()},getElement:()=>{var u;return(u=a.value)===null||u===void 0?void 0:u.getElement()}}),()=>{const u=b(b(b({},e),n),{visible:r.value}),h=s.value?x(Zt,H(H({},u),{},{mobile:e.mobile,ref:a}),{default:i.default}):x(di,H(H({},u),{},{ref:a}),{default:i.default});return x("div",{ref:l},[x(lt,u,null),h])}}});function vi(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function nt(e,t,n){const i=e[t]||{};return b(b({},i),n)}function gi(e,t,n,i){const{points:o}=n,r=Object.keys(e);for(let s=0;s<r.length;s+=1){const a=r[s];if(vi(e[a].points,o,i))return`${t}-placement-${a}`}return""}const mi={methods:{setState(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=typeof e=="function"?e(this.$data,this.$props):e;if(this.getDerivedStateFromProps){const i=this.getDerivedStateFromProps(Ht(this),b(b({},this.$data),n));if(i===null)return;n=b(b({},n),i||{})}b(this.$data,n),this._.isMounted&&this.$forceUpdate(),pe(()=>{t&&t()})},__emit(){const e=[].slice.call(arguments,0);let t=e[0];t=`on${t[0].toUpperCase()}${t.substring(1)}`;const n=this.$props[t]||this.$attrs[t];if(e.length&&n)if(Array.isArray(n))for(let i=0,o=n.length;i<o;i++)n[i](...e.slice(1));else n(...e.slice(1))}}},yi=["onClick","onMousedown","onTouchstart","onMouseenter","onMouseleave","onFocus","onBlur","onContextmenu"],Oi=U({compatConfig:{MODE:3},name:"Trigger",mixins:[mi],inheritAttrs:!1,props:Kt(),setup(e){const t=j(()=>{const{popupPlacement:o,popupAlign:r,builtinPlacements:s}=e;return o&&s?nt(s,o,r):r}),n=M(null),i=o=>{n.value=o};return{vcTriggerContext:zt("vcTriggerContext",{}),popupRef:n,setPopupRef:i,triggerRef:M(null),align:t,focusTime:null,clickOutsideHandler:null,contextmenuOutsideHandler1:null,contextmenuOutsideHandler2:null,touchOutsideHandler:null,attachId:null,delayTimer:null,hasPopupMouseDown:!1,preClickTime:null,preTouchTime:null,mouseDownTimeout:null,childOriginEvents:{}}},data(){const e=this.$props;let t;return this.popupVisible!==void 0?t=!!e.popupVisible:t=!!e.defaultPopupVisible,yi.forEach(n=>{this[`fire${n}`]=i=>{this.fireEvents(n,i)}}),{prevPopupVisible:t,sPopupVisible:t,point:null}},watch:{popupVisible(e){e!==void 0&&(this.prevPopupVisible=this.sPopupVisible,this.sPopupVisible=e)}},created(){jt("vcTriggerContext",{onPopupMouseDown:this.onPopupMouseDown,onPopupMouseenter:this.onPopupMouseenter,onPopupMouseleave:this.onPopupMouseleave}),Rt(this)},deactivated(){this.setPopupVisible(!1)},mounted(){this.$nextTick(()=>{this.updatedCal()})},updated(){this.$nextTick(()=>{this.updatedCal()})},beforeUnmount(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),F.cancel(this.attachId)},methods:{updatedCal(){const e=this.$props;if(this.$data.sPopupVisible){let n;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextmenuToShow())&&(n=e.getDocument(this.getRootDomNode()),this.clickOutsideHandler=X(n,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(n=n||e.getDocument(this.getRootDomNode()),this.touchOutsideHandler=X(n,"touchstart",this.onDocumentClick,Y?{passive:!1}:!1)),!this.contextmenuOutsideHandler1&&this.isContextmenuToShow()&&(n=n||e.getDocument(this.getRootDomNode()),this.contextmenuOutsideHandler1=X(n,"scroll",this.onContextmenuClose)),!this.contextmenuOutsideHandler2&&this.isContextmenuToShow()&&(this.contextmenuOutsideHandler2=X(window,"blur",this.onContextmenuClose))}else this.clearOutsideHandler()},onMouseenter(e){const{mouseEnterDelay:t}=this.$props;this.fireEvents("onMouseenter",e),this.delaySetPopupVisible(!0,t,t?null:e)},onMouseMove(e){this.fireEvents("onMousemove",e),this.setPoint(e)},onMouseleave(e){this.fireEvents("onMouseleave",e),this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onPopupMouseenter(){const{vcTriggerContext:e={}}=this;e.onPopupMouseenter&&e.onPopupMouseenter(),this.clearDelayTimer()},onPopupMouseleave(e){var t;if(e&&e.relatedTarget&&!e.relatedTarget.setTimeout&&B((t=this.popupRef)===null||t===void 0?void 0:t.getElement(),e.relatedTarget))return;this.isMouseLeaveToHide()&&this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay);const{vcTriggerContext:n={}}=this;n.onPopupMouseleave&&n.onPopupMouseleave(e)},onFocus(e){this.fireEvents("onFocus",e),this.clearDelayTimer(),this.isFocusToShow()&&(this.focusTime=Date.now(),this.delaySetPopupVisible(!0,this.$props.focusDelay))},onMousedown(e){this.fireEvents("onMousedown",e),this.preClickTime=Date.now()},onTouchstart(e){this.fireEvents("onTouchstart",e),this.preTouchTime=Date.now()},onBlur(e){B(e.target,e.relatedTarget||document.activeElement)||(this.fireEvents("onBlur",e),this.clearDelayTimer(),this.isBlurToHide()&&this.delaySetPopupVisible(!1,this.$props.blurDelay))},onContextmenu(e){e.preventDefault(),this.fireEvents("onContextmenu",e),this.setPopupVisible(!0,e)},onContextmenuClose(){this.isContextmenuToShow()&&this.close()},onClick(e){if(this.fireEvents("onClick",e),this.focusTime){let n;if(this.preClickTime&&this.preTouchTime?n=Math.min(this.preClickTime,this.preTouchTime):this.preClickTime?n=this.preClickTime:this.preTouchTime&&(n=this.preTouchTime),Math.abs(n-this.focusTime)<20)return;this.focusTime=0}this.preClickTime=0,this.preTouchTime=0,this.isClickToShow()&&(this.isClickToHide()||this.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault(),e&&e.domEvent&&e.domEvent.preventDefault();const t=!this.$data.sPopupVisible;(this.isClickToHide()&&!t||t&&this.isClickToShow())&&this.setPopupVisible(!this.$data.sPopupVisible,e)},onPopupMouseDown(){const{vcTriggerContext:e={}}=this;this.hasPopupMouseDown=!0,clearTimeout(this.mouseDownTimeout),this.mouseDownTimeout=setTimeout(()=>{this.hasPopupMouseDown=!1},0),e.onPopupMouseDown&&e.onPopupMouseDown(...arguments)},onDocumentClick(e){if(this.$props.mask&&!this.$props.maskClosable)return;const t=e.target,n=this.getRootDomNode(),i=this.getPopupDomNode();(!B(n,t)||this.isContextMenuOnly())&&!B(i,t)&&!this.hasPopupMouseDown&&this.delaySetPopupVisible(!1,.1)},getPopupDomNode(){var e;return((e=this.popupRef)===null||e===void 0?void 0:e.getElement())||null},getRootDomNode(){var e,t,n,i;const{getTriggerDOMNode:o}=this.$props;if(o){const r=((t=(e=this.triggerRef)===null||e===void 0?void 0:e.$el)===null||t===void 0?void 0:t.nodeName)==="#comment"?null:K(this.triggerRef);return K(o(r))}try{const r=((i=(n=this.triggerRef)===null||n===void 0?void 0:n.$el)===null||i===void 0?void 0:i.nodeName)==="#comment"?null:K(this.triggerRef);if(r)return r}catch(r){}return K(this)},handleGetPopupClassFromAlign(e){const t=[],n=this.$props,{popupPlacement:i,builtinPlacements:o,prefixCls:r,alignPoint:s,getPopupClassNameFromAlign:a}=n;return i&&o&&t.push(gi(o,r,e,s)),a&&t.push(a(e)),t.join(" ")},getPopupAlign(){const e=this.$props,{popupPlacement:t,popupAlign:n,builtinPlacements:i}=e;return t&&i?nt(i,t,n):n},getComponent(){const e={};this.isMouseEnterToShow()&&(e.onMouseenter=this.onPopupMouseenter),this.isMouseLeaveToHide()&&(e.onMouseleave=this.onPopupMouseleave),e.onMousedown=this.onPopupMouseDown,e[Y?"onTouchstartPassive":"onTouchstart"]=this.onPopupMouseDown;const{handleGetPopupClassFromAlign:t,getRootDomNode:n,$attrs:i}=this,{prefixCls:o,destroyPopupOnHide:r,popupClassName:s,popupAnimation:a,popupTransitionName:l,popupStyle:u,mask:h,maskAnimation:p,maskTransitionName:c,zIndex:f,stretch:d,alignPoint:g,mobile:w,arrow:m,forceRender:y}=this.$props,{sPopupVisible:P,point:C}=this.$data,A=b(b({prefixCls:o,arrow:m,destroyPopupOnHide:r,visible:P,point:g?C:null,align:this.align,animation:a,getClassNameFromAlign:t,stretch:d,getRootDomNode:n,mask:h,zIndex:f,transitionName:l,maskAnimation:p,maskTransitionName:c,class:s,style:u,onAlign:i.onPopupAlign||ut},e),{ref:this.setPopupRef,mobile:w,forceRender:y});return x(hi,A,{default:this.$slots.popup||(()=>$t(this,"popup"))})},attachParent(e){F.cancel(this.attachId);const{getPopupContainer:t,getDocument:n}=this.$props,i=this.getRootDomNode();let o;t?(i||t.length===0)&&(o=t(i)):o=n(this.getRootDomNode()).body,o?o.appendChild(e):this.attachId=F(()=>{this.attachParent(e)})},getContainer(){const{$props:e}=this,{getDocument:t}=e,n=t(this.getRootDomNode()).createElement("div");return n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100%",this.attachParent(n),n},setPopupVisible(e,t){const{alignPoint:n,sPopupVisible:i,onPopupVisibleChange:o}=this;this.clearDelayTimer(),i!==e&&(_t(this,"popupVisible")||this.setState({sPopupVisible:e,prevPopupVisible:i}),o&&o(e)),n&&t&&e&&this.setPoint(t)},setPoint(e){const{alignPoint:t}=this.$props;!t||!e||this.setState({point:{pageX:e.pageX,pageY:e.pageY}})},handlePortalUpdate(){this.prevPopupVisible!==this.sPopupVisible&&this.afterPopupVisibleChange(this.sPopupVisible)},delaySetPopupVisible(e,t,n){const i=t*1e3;if(this.clearDelayTimer(),i){const o=n?{pageX:n.pageX,pageY:n.pageY}:null;this.delayTimer=setTimeout(()=>{this.setPopupVisible(e,o),this.clearDelayTimer()},i)}else this.setPopupVisible(e,n)},clearDelayTimer(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},clearOutsideHandler(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextmenuOutsideHandler1&&(this.contextmenuOutsideHandler1.remove(),this.contextmenuOutsideHandler1=null),this.contextmenuOutsideHandler2&&(this.contextmenuOutsideHandler2.remove(),this.contextmenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},createTwoChains(e){let t=()=>{};const n=Re(this);return this.childOriginEvents[e]&&n[e]?this[`fire${e}`]:(t=this.childOriginEvents[e]||n[e]||t,t)},isClickToShow(){const{action:e,showAction:t}=this.$props;return e.indexOf("click")!==-1||t.indexOf("click")!==-1},isContextMenuOnly(){const{action:e}=this.$props;return e==="contextmenu"||e.length===1&&e[0]==="contextmenu"},isContextmenuToShow(){const{action:e,showAction:t}=this.$props;return e.indexOf("contextmenu")!==-1||t.indexOf("contextmenu")!==-1},isClickToHide(){const{action:e,hideAction:t}=this.$props;return e.indexOf("click")!==-1||t.indexOf("click")!==-1},isMouseEnterToShow(){const{action:e,showAction:t}=this.$props;return e.indexOf("hover")!==-1||t.indexOf("mouseenter")!==-1},isMouseLeaveToHide(){const{action:e,hideAction:t}=this.$props;return e.indexOf("hover")!==-1||t.indexOf("mouseleave")!==-1},isFocusToShow(){const{action:e,showAction:t}=this.$props;return e.indexOf("focus")!==-1||t.indexOf("focus")!==-1},isBlurToHide(){const{action:e,hideAction:t}=this.$props;return e.indexOf("focus")!==-1||t.indexOf("blur")!==-1},forcePopupAlign(){var e;this.$data.sPopupVisible&&((e=this.popupRef)===null||e===void 0||e.forceAlign())},fireEvents(e,t){this.childOriginEvents[e]&&this.childOriginEvents[e](t);const n=this.$props[e]||this.$attrs[e];n&&n(t)},close(){this.setPopupVisible(!1)}},render(){const{$attrs:e}=this,t=Bt(Vt(this)),{alignPoint:n,getPopupContainer:i}=this.$props,o=t[0];this.childOriginEvents=Re(o);const r={key:"trigger"};this.isContextmenuToShow()?r.onContextmenu=this.onContextmenu:r.onContextmenu=this.createTwoChains("onContextmenu"),this.isClickToHide()||this.isClickToShow()?(r.onClick=this.onClick,r.onMousedown=this.onMousedown,r[Y?"onTouchstartPassive":"onTouchstart"]=this.onTouchstart):(r.onClick=this.createTwoChains("onClick"),r.onMousedown=this.createTwoChains("onMousedown"),r[Y?"onTouchstartPassive":"onTouchstart"]=this.createTwoChains("onTouchstart")),this.isMouseEnterToShow()?(r.onMouseenter=this.onMouseenter,n&&(r.onMousemove=this.onMouseMove)):r.onMouseenter=this.createTwoChains("onMouseenter"),this.isMouseLeaveToHide()?r.onMouseleave=this.onMouseleave:r.onMouseleave=this.createTwoChains("onMouseleave"),this.isFocusToShow()||this.isBlurToHide()?(r.onFocus=this.onFocus,r.onBlur=this.onBlur):(r.onFocus=this.createTwoChains("onFocus"),r.onBlur=u=>{u&&(!u.relatedTarget||!B(u.target,u.relatedTarget))&&this.createTwoChains("onBlur")(u)});const s=ye(o&&o.props&&o.props.class,e.class);s&&(r.class=s);const a=rt(o,b(b({},r),{ref:"triggerRef"}),!0,!0),l=x(Ft,{key:"portal",getContainer:i&&(()=>i(this.getRootDomNode())),didUpdate:this.handlePortalUpdate,visible:this.$data.sPopupVisible},{default:this.getComponent});return x(kt,null,[a,l])}});export{mi as B,ie as S,Oi as T,wt as b,Fn as c,fi as i,Xn as s};
