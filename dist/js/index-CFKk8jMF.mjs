import{bN as e,I as n}from"./bootstrap-CIlPtDbU.mjs";function s(t){return n.get("/system/tenant/list",{params:t})}function r(t){return e("/system/tenant/export",t)}function o(t){return n.get(`/system/tenant/${t}`)}function u(t){return n.putWithMsg("/system/tenant/changeStatus",t)}function i(t){return n.deleteWithMsg(`/system/tenant/${t}`)}function m(t){return n.get(`/system/tenant/dynamic/${t}`)}function c(){return n.get("/system/tenant/dynamic/clear")}export{u as a,i as b,s as c,o as d,m as e,c as f,r as t};
