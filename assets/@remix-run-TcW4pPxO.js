/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},v.apply(this,arguments)}var y;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(y||(y={}));const b="popstate";function D(t){t===void 0&&(t={});function e(r,o){let{pathname:i="/",search:h="",hash:s=""}=S(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),O("",{pathname:i,search:h,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){let i=r.document.querySelector("base"),h="";if(i&&i.getAttribute("href")){let s=r.location.href,c=s.indexOf("#");h=c===-1?s:s.slice(0,c)}return h+"#"+(typeof o=="string"?o:j(o))}function a(r,o){A(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return k(e,n,a,t)}function w(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function A(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function U(){return Math.random().toString(36).substr(2,8)}function L(t,e){return{usr:t.state,key:t.key,idx:e}}function O(t,e,n,a){return n===void 0&&(n=null),v({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?S(e):e,{state:n,key:e&&e.key||a||U()})}function j(t){let{pathname:e="/",search:n="",hash:a=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function S(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let a=t.indexOf("?");a>=0&&(e.search=t.substr(a),t=t.substr(0,a)),t&&(e.pathname=t)}return e}function k(t,e,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:o=!1}=a,i=r.history,h=y.Pop,s=null,c=d();c==null&&(c=0,i.replaceState(v({},i.state,{idx:c}),""));function d(){return(i.state||{idx:null}).idx}function g(){h=y.Pop;let l=d(),u=l==null?null:l-c;c=l,s&&s({action:h,location:p.location,delta:u})}function m(l,u){h=y.Push;let f=O(p.location,l,u);n&&n(f,l),c=d()+1;let P=L(f,c),x=p.createHref(f);try{i.pushState(P,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(x)}o&&s&&s({action:h,location:p.location,delta:1})}function M(l,u){h=y.Replace;let f=O(p.location,l,u);n&&n(f,l),c=d();let P=L(f,c),x=p.createHref(f);i.replaceState(P,"",x),o&&s&&s({action:h,location:p.location,delta:0})}function W(l){let u=r.location.origin!=="null"?r.location.origin:r.location.href,f=typeof l=="string"?l:j(l);return f=f.replace(/ $/,"%20"),w(u,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,u)}let p={get action(){return h},get location(){return t(r,i)},listen(l){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(b,g),s=l,()=>{r.removeEventListener(b,g),s=null}},createHref(l){return e(r,l)},createURL:W,encodeLocation(l){let u=W(l);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:m,replace:M,go(l){return i.go(l)}};return p}var C;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(C||(C={}));function J(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=t.charAt(n);return a&&a!=="/"?null:t.slice(n)||"/"}function B(t,e){e===void 0&&(e="/");let{pathname:n,search:a="",hash:r=""}=typeof t=="string"?S(t):t;return{pathname:n?n.startsWith("/")?n:R(n,e):e,search:T(a),hash:q(r)}}function R(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function H(t,e,n,a){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $(t,e){let n=N(t);return e?n.map((a,r)=>r===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function K(t,e,n,a){a===void 0&&(a=!1);let r;typeof t=="string"?r=S(t):(r=v({},t),w(!r.pathname||!r.pathname.includes("?"),H("?","pathname","search",r)),w(!r.pathname||!r.pathname.includes("#"),H("#","pathname","hash",r)),w(!r.search||!r.search.includes("#"),H("#","search","hash",r)));let o=t===""||r.pathname==="",i=o?"/":r.pathname,h;if(i==null)h=n;else{let g=e.length-1;if(!a&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),g-=1;r.pathname=m.join("/")}h=g>=0?e[g]:"/"}let s=B(r,h),c=i&&i!=="/"&&i.endsWith("/"),d=(o||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const V=t=>t.join("/").replace(/\/\/+/g,"/"),T=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,q=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,I=["post","put","patch","delete"];new Set(I);const z=["get",...I];new Set(z);export{y as A,D as a,j as c,$ as g,w as i,V as j,S as p,K as r,J as s};
