import{r as a}from"./react-B5MDO8QK.js";import{i as v,j as U,g as y,r as L,A as M,p as B,s as S}from"./@remix-run-BgN6jME7.js";/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}const O=a.createContext(null),m=a.createContext(null),x=a.createContext(null),d=a.createContext({outlet:null,matches:[],isDataRoute:!1});function K(e,t){let{relative:r}=t===void 0?{}:t;p()||v(!1);let{basename:n,navigator:u}=a.useContext(m),{hash:s,pathname:i,search:c}=T(e,{relative:r}),o=i;return n!=="/"&&(o=i==="/"?n:U([n,i])),u.createHref({pathname:o,search:c,hash:s})}function p(){return a.useContext(x)!=null}function E(){return p()||v(!1),a.useContext(x).location}function j(e){a.useContext(m).static||a.useLayoutEffect(e)}function Q(){let{isDataRoute:e}=a.useContext(d);return e?z():A()}function A(){p()||v(!1);let e=a.useContext(O),{basename:t,future:r,navigator:n}=a.useContext(m),{matches:u}=a.useContext(d),{pathname:s}=E(),i=JSON.stringify(y(u,r.v7_relativeSplatPath)),c=a.useRef(!1);return j(()=>{c.current=!0}),a.useCallback(function(h,l){if(l===void 0&&(l={}),!c.current)return;if(typeof h=="number"){n.go(h);return}let f=L(h,JSON.parse(i),s,l.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:U([t,f.pathname])),(l.replace?n.replace:n.push)(f,l.state,l)},[t,n,i,s,e])}function T(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=a.useContext(m),{matches:u}=a.useContext(d),{pathname:s}=E(),i=JSON.stringify(y(u,n.v7_relativeSplatPath));return a.useMemo(()=>L(e,JSON.parse(i),s,r==="path"),[e,i,s,r])}var I=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(I||{}),J=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(J||{});function w(e){let t=a.useContext(O);return t||v(!1),t}function _(e){let t=a.useContext(d);return t||v(!1),t}function q(e){let t=_(),r=t.matches[t.matches.length-1];return r.route.id||v(!1),r.route.id}function z(){let{router:e}=w(I.UseNavigateStable),t=q(J.UseNavigateStable),r=a.useRef(!1);return j(()=>{r.current=!0}),a.useCallback(function(u,s){s===void 0&&(s={}),r.current&&(typeof u=="number"?e.navigate(u):e.navigate(u,g({fromRouteId:t},s)))},[e,t])}function V(e){let{basename:t="/",children:r=null,location:n,navigationType:u=M.Pop,navigator:s,static:i=!1,future:c}=e;p()&&v(!1);let o=t.replace(/^\/*/,"/"),h=a.useMemo(()=>({basename:o,navigator:s,static:i,future:g({v7_relativeSplatPath:!1},c)}),[o,c,s,i]);typeof n=="string"&&(n=B(n));let{pathname:l="/",search:f="",hash:C="",state:b=null,key:N="default"}=n,P=a.useMemo(()=>{let R=S(l,o);return R==null?null:{location:{pathname:R,search:f,hash:C,state:b,key:N},navigationType:u}},[o,l,f,C,b,N,u]);return P==null?null:a.createElement(m.Provider,{value:h},a.createElement(x.Provider,{children:r,value:P}))}new Promise(()=>{});export{m as N,V as R,Q as a,E as b,T as c,K as u};
