import{r as c,R as _}from"./react-B5MDO8QK.js";import"./react-dom-C9nsoTc8.js";import{N as O,u as k,a as x,b as F,c as P,R as B}from"./react-router-BMEisIHB.js";import{s as N,c as y,a as j}from"./@remix-run-BgN6jME7.js";/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},w.apply(this,arguments)}function I(e,r){if(e==null)return{};var a={},t=Object.keys(e),s,i;for(i=0;i<t.length;i++)s=t[i],!(r.indexOf(s)>=0)&&(a[s]=e[s]);return a}function K(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A(e,r){return e.button===0&&(!r||r==="_self")&&!K(e)}const V=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],W="6";try{window.__reactRouterVersion=W}catch{}const z="startTransition",g=_[z];function Y(e){let{basename:r,children:a,future:t,window:s}=e,i=c.useRef();i.current==null&&(i.current=j({window:s,v5Compat:!0}));let o=i.current,[u,l]=c.useState({action:o.action,location:o.location}),{v7_startTransition:n}=t||{},f=c.useCallback(p=>{n&&g?g(()=>l(p)):l(p)},[l,n]);return c.useLayoutEffect(()=>o.listen(f),[o,f]),c.createElement(B,{basename:r,children:a,location:u.location,navigationType:u.action,navigator:o,future:t})}const G=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z=c.forwardRef(function(r,a){let{onClick:t,relative:s,reloadDocument:i,replace:o,state:u,target:l,to:n,preventScrollReset:f,unstable_viewTransition:p}=r,m=I(r,V),{basename:U}=c.useContext(O),R,v=!1;if(typeof n=="string"&&M.test(n)&&(R=n,G))try{let d=new URL(window.location.href),h=n.startsWith("//")?new URL(d.protocol+n):new URL(n),b=N(h.pathname,U);h.origin===d.origin&&b!=null?n=b+h.search+h.hash:v=!0}catch{}let C=k(n,{relative:s}),E=X(n,{replace:o,state:u,target:l,preventScrollReset:f,relative:s,unstable_viewTransition:p});function L(d){t&&t(d),d.defaultPrevented||E(d)}return c.createElement("a",w({},m,{href:R||C,onClick:v||i?t:L,ref:a,target:l}))});var S;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(S||(S={}));var T;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(T||(T={}));function X(e,r){let{target:a,replace:t,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:u}=r===void 0?{}:r,l=x(),n=F(),f=P(e,{relative:o});return c.useCallback(p=>{if(A(p,a)){p.preventDefault();let m=t!==void 0?t:y(n)===y(f);l(e,{replace:m,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:u})}},[n,l,f,t,s,a,e,i,o,u])}export{Y as B,Z as L};
