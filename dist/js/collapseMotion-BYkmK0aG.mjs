import{am as o,ba as n}from"./bootstrap-CIlPtDbU.mjs";import{q as r}from"../jse/index-index-CulmqKVw.mjs";var c="[object Symbol]";function f(t){return typeof t=="symbol"||o(t)&&n(t)==c}const p=t=>({[t.componentCls]:{[`${t.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`}},[`${t.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`}}});function l(t,i){return t.classList?t.classList.contains(i):` ${t.className} `.indexOf(` ${i} `)>-1}function a(t,i){t.classList?t.classList.add(i):l(t,i)||(t.className=`${t.className} ${i}`)}function e(t,i){if(t.classList)t.classList.remove(i);else if(l(t,i)){const s=t.className;t.className=` ${s} `.replace(` ${i} `," ")}}const y=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:t,appear:i,css:!0,onBeforeEnter:s=>{s.style.height="0px",s.style.opacity="0",a(s,t)},onEnter:s=>{r(()=>{s.style.height=`${s.scrollHeight}px`,s.style.opacity="1"})},onAfterEnter:s=>{s&&(e(s,t),s.style.height=null,s.style.opacity=null)},onBeforeLeave:s=>{a(s,t),s.style.height=`${s.offsetHeight}px`,s.style.opacity=null},onLeave:s=>{setTimeout(()=>{s.style.height="0px",s.style.opacity="0"})},onAfterLeave:s=>{s&&(e(s,t),s.style&&(s.style.height=null,s.style.opacity=null))}}};export{a,y as c,p as g,f as i,e as r};
