import{j as s}from"./react-B5MDO8QK.js";import{s as r}from"./style-BMfF9tGN.js";import{m as i}from"./framer-motion-V22NTTs4.js";const u=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),y=(t,a,e,n)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:a,delay:e,duration:n,ease:"easeOut"}}}),m=(t,a,e,n)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:a,delay:e,duration:n,ease:"easeOut"}}}),o=(t,a)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:a||0}}}),p=(t,a)=>{function e(){return s.jsxs(i.section,{variants:o(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${r.padding} max-w-7xl mx-auto relative z-0`,children:[s.jsx("span",{className:"hash-span",id:a,children:" "}),s.jsx(t,{})]})}return e},x=p;export{x as S,y as f,m as s,u as t};
