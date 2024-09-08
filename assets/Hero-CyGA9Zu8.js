import{j as r,r as n}from"./react-B5MDO8QK.js";import{s as i}from"./style-BMfF9tGN.js";import"./maath-CKsHv_sf.js";import{P as m}from"./react-tsparticles-CjldojuS.js";import{l as d}from"./tsparticles-slim-DQxJwaMj.js";import{m as p}from"./framer-motion-V22NTTs4.js";import"./classnames-BxVCbzsd.js";import"./three-CWcbmaB3.js";import"./tsparticles-engine-DLgpyJd2.js";import"./tsparticles-particles.js-B8xZrsh8.js";import"./tsparticles-basic-hU2KB-0X.js";import"./tsparticles-move-base-BUkcxsDi.js";import"./tsparticles-shape-circle-CrhG4bfX.js";import"./tsparticles-updater-color-DObKmxs1.js";import"./tsparticles-updater-opacity-C9sELRk3.js";import"./tsparticles-updater-out-modes-B1TccBu9.js";import"./tsparticles-updater-size-BuTG7z26.js";import"./tsparticles-plugin-easing-quad-C2YdZr4F.js";import"./tsparticles-interaction-external-attract-DKkVXm0E.js";import"./tsparticles-interaction-external-bounce-DZsZD86r.js";import"./tsparticles-interaction-external-bubble-DCCFw_93.js";import"./tsparticles-interaction-external-connect-eflcVBjc.js";import"./tsparticles-interaction-external-grab-9jUiacYQ.js";import"./tsparticles-interaction-external-pause-LkSKqkvB.js";import"./tsparticles-interaction-external-push-CTsLMgNT.js";import"./tsparticles-interaction-external-remove-BPtplhPj.js";import"./tsparticles-interaction-external-repulse-Cgsdi4c4.js";import"./tsparticles-interaction-external-slow-Cbj1rPuk.js";import"./tsparticles-shape-image-DIRmWEEb.js";import"./tsparticles-updater-life-CZmV72EA.js";import"./tsparticles-shape-line-Ctdye2fM.js";import"./tsparticles-move-parallax-ZWmZa0j8.js";import"./tsparticles-interaction-particles-attract-TkFZgnJE.js";import"./tsparticles-interaction-particles-collisions-BzJt1Cdg.js";import"./tsparticles-interaction-particles-links-DSw7yvkE.js";import"./tsparticles-shape-polygon-CP8yFchX.js";import"./tsparticles-updater-rotate-Bp92iIa9.js";import"./tsparticles-shape-square-CYw9O5zB.js";import"./tsparticles-shape-star-Bi_iPYm8.js";import"./tsparticles-updater-stroke-color-BsvpzrhX.js";import"./tsparticles-shape-text-8hBy38dw.js";const c=()=>{const o=async e=>{await d(e)},t=()=>{};return r.jsx(m,{className:"w-full h-full absolute translate-z-0",id:"tsparticles",init:o,loaded:t,options:{fullScreen:{enable:!1},background:{color:{value:""}},fpsLimit:120,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{push:{quantity:90},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#915eff"},links:{color:"#322462",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:{default:"bounce"},random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}})},j=()=>(n.useEffect(()=>((async()=>{const t=["world/js/world.js","world/js/viewport.js","world/js/markings/marking.js","world/js/markings/stop.js","world/js/markings/crossing.js","world/js/markings/start.js","world/js/editors/markingEditor.js","world/js/editors/graphEditor.js","world/js/editors/stopEditor.js","world/js/editors/crossingEditor.js","world/js/editors/startEditor.js","world/js/items/tree.js","world/js/items/building.js","world/js/math/utils.js","world/js/math/graph.js","world/js/primitives/point.js","world/js/primitives/segment.js","world/js/primitives/polygon.js","world/js/primitives/envelope.js","world/saves/moName.world","world/miniMap.js","world/visualizer.js","world/network.js","world/sensor.js","world/utils.js","world/controls.js","world/car.js","world/main.js"];if(!localStorage.getItem("scriptsLoaded")){localStorage.setItem("scriptsLoaded","true");for(const e of t){const s=document.createElement("script");s.src=e,s.async=!0,document.body.appendChild(s),await new Promise((l,a)=>{s.onload=l,s.onerror=a})}}})(),()=>{localStorage.removeItem("scriptsLoaded")}),[]),r.jsx("canvas",{className:`      \r
      w-full \r
      h-1/2 \r
      top-[-50px]\r
      sm:w-full\r
      sm:top-[-100px] \r
      md:w-full\r
      md:top-[-100px]\r
      lg:w-full \r
      lg:top-[-150px]\r
      relative\r
      z-100\r
      `,id:"carCanvas"})),sr=()=>r.jsxs("section",{className:"relative w-full h-screen mx-auto",children:[r.jsxs("div",{className:`${i.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`,children:[r.jsxs("div",{className:"flex flex-col justify-center items-center mt-5",children:[r.jsx("div",{className:"w-5 h-5 rounded-full bg-[#915eff]"}),r.jsx("div",{className:"w-1 sm:h-80 h-40 violet-gradient"})]}),r.jsx("div",{children:r.jsxs("h1",{className:`${i.heroHeadText} text-white`,children:["Hi, I'm ",r.jsx(j,{})]})})]}),r.jsx(c,{}),r.jsx("div",{className:"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",children:r.jsx("a",{href:"#about",children:r.jsx("div",{className:"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2",children:r.jsx(p.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"w-3 h-3 rounded-full bg-secondary mb-1"})})})})]});export{sr as default};
