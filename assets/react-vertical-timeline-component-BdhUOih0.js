import{r as g}from"./react-B5MDO8QK.js";import{p as _}from"./prop-types-BKNjMPK8.js";import{c as y}from"./classnames-BxVCbzsd.js";import{r as w}from"./react-intersection-observer-CBO1UqdS.js";var d={};d.__esModule=!0;d.default=void 0;var R=f(g),l=f(_),S=f(y);function f(t){return t&&t.__esModule?t:{default:t}}const E=({animate:t=!0,className:c="",layout:n="2-columns",lineColor:s="#FFF",children:m})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",s),R.default.createElement("div",{className:(0,S.default)(c,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":n==="2-columns","vertical-timeline--one-column-left":n==="1-column"||n==="1-column-left","vertical-timeline--one-column-right":n==="1-column-right"})},m));E.propTypes={children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]).isRequired,className:l.default.string,animate:l.default.bool,layout:l.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:l.default.string};var b=E;d.default=b;var o={};o.__esModule=!0;o.default=void 0;var a=p(g),e=p(_),u=p(y),D=w;function p(t){return t&&t.__esModule?t:{default:t}}const h=({children:t="",className:c="",contentArrowStyle:n=null,contentStyle:s=null,date:m="",dateClassName:T="",icon:N=null,iconClassName:O="",iconOnClick:x=null,onTimelineElementClick:$=null,iconStyle:C=null,id:M="",position:v="",style:k=null,textClassName:q="",intersectionObserverProps:F={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:r=!1})=>a.default.createElement(D.InView,F,({inView:i,ref:V})=>a.default.createElement("div",{ref:V,id:M,className:(0,u.default)(c,"vertical-timeline-element",{"vertical-timeline-element--left":v==="left","vertical-timeline-element--right":v==="right","vertical-timeline-element--no-children":t===""}),style:k},a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:C,onClick:x,className:(0,u.default)(O,"vertical-timeline-element-icon",{"bounce-in":i||r,"is-hidden":!(i||r)})},N),a.default.createElement("div",{style:s,onClick:$,className:(0,u.default)(q,"vertical-timeline-element-content",{"bounce-in":i||r,"is-hidden":!(i||r)})},a.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),t,a.default.createElement("span",{className:(0,u.default)(T,"vertical-timeline-element-date")},m)))));h.propTypes={children:e.default.oneOfType([e.default.arrayOf(e.default.node),e.default.node]),className:e.default.string,contentArrowStyle:e.default.shape({}),contentStyle:e.default.shape({}),date:e.default.node,dateClassName:e.default.string,icon:e.default.element,iconClassName:e.default.string,iconStyle:e.default.shape({}),iconOnClick:e.default.func,onTimelineElementClick:e.default.func,id:e.default.string,position:e.default.string,style:e.default.shape({}),textClassName:e.default.string,visible:e.default.bool,intersectionObserverProps:e.default.shape({root:e.default.object,rootMargin:e.default.string,threshold:e.default.number,triggerOnce:e.default.bool})};var I=h;o.default=I;var G={VerticalTimeline:d.default,VerticalTimelineElement:o.default};export{G as d};
