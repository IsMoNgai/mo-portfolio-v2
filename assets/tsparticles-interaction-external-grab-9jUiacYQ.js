import{O as y,w as h,y as v,E as m,m as L,l as w,z as O,A as C,i as G}from"./tsparticles-engine-DLgpyJd2.js";class E{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(n){n&&(n.blink!==void 0&&(this.blink=n.blink),n.color!==void 0&&(this.color=y.create(this.color,n.color)),n.consent!==void 0&&(this.consent=n.consent),n.opacity!==void 0&&(this.opacity=n.opacity))}}class D{constructor(){this.distance=100,this.links=new E}get lineLinked(){return this.links}set lineLinked(n){this.links=n}get line_linked(){return this.links}set line_linked(n){this.links=n}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links??n.lineLinked??n.line_linked))}}function I(t,n,i,e,o,s){h(t,i,e),t.strokeStyle=v(o,s),t.lineWidth=n,t.stroke()}function M(t,n,i,e,o){t.canvas.draw(s=>{const a=n.getPosition();I(s,n.retina.linksWidth??0,a,o,i,e)})}class P extends m{constructor(n){super(n)}clear(){}init(){const n=this.container,i=n.actualOptions.interactivity.modes.grab;i&&(n.retina.grabModeDistance=i.distance*n.retina.pixelRatio)}async interact(){var c;const n=this.container,i=n.actualOptions,e=i.interactivity;if(!e.modes.grab||!e.events.onHover.enable||n.interactivity.status!==L)return;const o=n.interactivity.mouse.position;if(!o)return;const s=n.retina.grabModeDistance;if(!s||s<0)return;const a=n.particles.quadTree.queryCircle(o,s,r=>this.isEnabled(r));for(const r of a){const p=r.getPosition(),l=w(p,o);if(l>s)continue;const d=e.modes.grab.links,u=d.opacity,b=u-l*u/s;if(b<=0)continue;const f=d.color??((c=r.options.links)==null?void 0:c.color);if(!n.particles.grabLineColor&&f){const g=e.modes.grab.links;n.particles.grabLineColor=O(f,g.blink,g.consent)}const k=C(r,void 0,n.particles.grabLineColor);k&&M(n,r,k,b,o)}}isEnabled(n){const i=this.container,e=i.interactivity.mouse,o=((n==null?void 0:n.interactivity)??i.actualOptions.interactivity).events;return o.onHover.enable&&!!e.position&&G("grab",o.onHover.mode)}loadModeOptions(n,...i){n.grab||(n.grab=new D);for(const e of i)n.grab.load(e==null?void 0:e.grab)}reset(){}}async function x(t,n=!0){await t.addInteractor("externalGrab",i=>new P(i),n)}export{x as l};
