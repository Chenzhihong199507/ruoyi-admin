import{bq as v,bB as C}from"./bootstrap-CIlPtDbU.mjs";import{i as L}from"./collapseMotion-BYkmK0aG.mjs";var M=/\s/;function N(n){for(var r=n.length;r--&&M.test(n.charAt(r)););return r}var R=/^\s+/;function $(n){return n&&n.slice(0,N(n)+1).replace(R,"")}var k=NaN,F=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,j=/^0o[0-7]+$/i,q=parseInt;function S(n){if(typeof n=="number")return n;if(L(n))return k;if(v(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=v(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=$(n);var t=_.test(n);return t||j.test(n)?q(n.slice(2),t?2:8):F.test(n)?k:+n}var h=function(){return C.Date.now()},D="Expected a function",H=Math.max,P=Math.min;function z(n,r,t){var u,o,l,s,i,f,c=0,b=!1,d=!1,T=!0;if(typeof n!="function")throw new TypeError(D);r=S(r)||0,v(t)&&(b=!!t.leading,d="maxWait"in t,l=d?H(S(t.maxWait)||0,r):l,T="trailing"in t?!!t.trailing:T);function x(e){var a=u,m=o;return u=o=void 0,c=e,s=n.apply(m,a),s}function W(e){return c=e,i=setTimeout(g,r),b?x(e):s}function O(e){var a=e-f,m=e-c,E=r-a;return d?P(E,l-m):E}function p(e){var a=e-f,m=e-c;return f===void 0||a>=r||a<0||d&&m>=l}function g(){var e=h();if(p(e))return y(e);i=setTimeout(g,O(e))}function y(e){return i=void 0,T&&u?x(e):(u=o=void 0,s)}function A(){i!==void 0&&clearTimeout(i),c=0,u=f=o=i=void 0}function B(){return i===void 0?s:y(h())}function I(){var e=h(),a=p(e);if(u=arguments,o=this,f=e,a){if(i===void 0)return W(f);if(d)return clearTimeout(i),i=setTimeout(g,r),x(f)}return i===void 0&&(i=setTimeout(g,r)),s}return I.cancel=A,I.flush=B,I}export{z as d,S as t};
