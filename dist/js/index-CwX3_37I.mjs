import{au as R,z as l}from"./bootstrap-CIlPtDbU.mjs";import{i as w}from"./ResizeObserver.es-CDE7jhPe.mjs";import{a9 as x,X as C,ak as M,o as W,ao as H,W as B,x as D}from"../jse/index-index-CulmqKVw.mjs";const k=x({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(i,v){let{slots:c}=v;const n=C({width:0,height:0,offsetHeight:0,offsetWidth:0});let h=null,s=null;const r=()=>{s&&(s.disconnect(),s=null)},b=e=>{const{onResize:t}=i,o=e[0].target,{width:p,height:O}=o.getBoundingClientRect(),{offsetWidth:d,offsetHeight:f}=o,g=Math.floor(p),u=Math.floor(O);if(n.width!==g||n.height!==u||n.offsetWidth!==d||n.offsetHeight!==f){const m={width:g,height:u,offsetWidth:d,offsetHeight:f};l(n,m),t&&Promise.resolve().then(()=>{t(l(l({},m),{offsetWidth:d,offsetHeight:f}),o)})}},z=D(),a=()=>{const{disabled:e}=i;if(e){r();return}const t=R(z);t!==h&&(r(),h=t),!s&&t&&(s=new w(b),s.observe(t))};return M(()=>{a()}),W(()=>{a()}),H(()=>{r()}),B(()=>i.disabled,()=>{a()},{flush:"post"}),()=>{var e;return(e=c.default)===null||e===void 0?void 0:e.call(c)[0]}}});export{k as R};
