import{c as d,I as m}from"./tsparticles-engine-DLgpyJd2.js";function l(s,i,e,o){switch(s.options.size.animation.destroy){case"max":i>=o&&s.destroy();break;case"min":i<=e&&s.destroy();break}}function r(s,i){const e=s.size;if(s.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const o=(e.velocity??0)*i.factor,a=e.min,n=e.max,t=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=i.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case"increasing":e.value>=n?(e.status="decreasing",e.loops||(e.loops=0),e.loops++):e.value+=o;break;case"decreasing":e.value<=a?(e.status="increasing",e.loops||(e.loops=0),e.loops++):e.value-=o}e.velocity&&t!==1&&(e.velocity*=t),l(s,e.value,a,n),s.destroyed||(e.value=d(e.value,a,n))}}class u{init(i){const e=i.container,o=i.options.size,a=o.animation;a.enable&&(i.size.velocity=(i.retina.sizeAnimationSpeed??e.retina.sizeAnimationSpeed)/100*e.retina.reduceFactor,a.sync||(i.size.velocity*=m()))}isEnabled(i){return!i.destroyed&&!i.spawning&&i.size.enable&&((i.size.maxLoops??0)<=0||(i.size.maxLoops??0)>0&&(i.size.loops??0)<(i.size.maxLoops??0))}reset(i){i.size.loops=0}update(i,e){this.isEnabled(i)&&r(i,e)}}async function y(s,i=!0){await s.addParticleUpdater("size",()=>new u,i)}export{y as l};
