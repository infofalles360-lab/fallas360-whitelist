import{c as r}from"./index-BP5zvCjg.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],M=r("external-link",w);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],S=r("flame",h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],I=r("sparkles",f);let n=null,s=new Set,l=!1;const o=()=>typeof window<"u",y=()=>o()?/iphone|ipad|ipod/i.test(window.navigator.userAgent):!1,v=()=>{if(!o())return!1;const e=window.navigator;return window.matchMedia("(display-mode: standalone)").matches||e.standalone===!0},i=()=>{const e=v(),t=y();return{canInstall:n!==null&&!e,isInstalled:e,isIos:t,showIosHint:t&&!e}},a=()=>{const e=i();s.forEach(t=>t(e))},g=e=>{const t=e;t.preventDefault(),n=t,a()},m=()=>{n=null,a()},c=()=>{a()},d=()=>{if(!o()||l)return;l=!0,window.addEventListener("beforeinstallprompt",g),window.addEventListener("appinstalled",m);const e=window.matchMedia("(display-mode: standalone)"),t=e;typeof e.addEventListener=="function"?e.addEventListener("change",c):typeof t.addListener=="function"&&t.addListener(c)},E=()=>i(),L=e=>(d(),s.add(e),e(i()),()=>{s.delete(e)}),q=async()=>{if(!n)return"unavailable";const e=n;n=null,a(),await e.prompt();const t=await e.userChoice;return a(),t.outcome},x=()=>{if(!o()||!("serviceWorker"in navigator))return;const e=window.location.pathname.includes("/dist/"),t=e?"../sw.js":"./sw.js",p=e?"../":"./";window.addEventListener("load",async()=>{try{await navigator.serviceWorker.register(t,{scope:p}),console.info("Service Worker registrado")}catch(u){console.error("Error registrando Service Worker:",u)}},{once:!0})};d();export{M as E,S as F,I as S,E as g,q as p,x as r,L as s};
