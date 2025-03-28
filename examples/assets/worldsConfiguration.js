import{x as d}from"./lit-element-CToom8Wf.js";import{P as p,C as m,W as u,S as f,i as b,b as w,G as g,k as h,I as x,T as y}from"./index-DNiVoluI.js";import{t as v}from"./index-kdXv3cq4.js";p.init();const a=document.createElement("bim-viewport"),t=new m,C=t.get(u),e=C.create();e.name="Default World";e.scene=new f(t);e.scene.three.background=null;e.scene.setup();e.renderer=new b(t,a);const{postproduction:o}=e.renderer;e.camera=new w(t);e.camera.controls.setLookAt(1.5,1.4,.12,-3.5,-.5,-7);a.addEventListener("resize",()=>{e.renderer&&e.renderer.resize(),e.camera.updateAspect()});t.init();const S=t.get(g),i=S.create(e);i.material.uniforms.uColor.value=new h("#4D4D4D");const l=t.get(x);await l.setup();const A=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),L=await A.arrayBuffer(),P=new Uint8Array(L),k=await l.load(P);e.scene.three.add(k);o.enabled=!0;o.customEffects.excludedMeshes.push(i.three);o.setPasses({ao:!0});const[n]=v.worldsConfiguration({components:t}),D=y.create(()=>d`
    <bim-panel label="App Config">
      <bim-panel-section label="Worlds">
        <div style="display: flex; gap: 0.5rem;">
          <bim-text-input @input=${c=>{const s=c.target;n.queryString=s.value!==""?s.value:null}} placeholder="Search..."></bim-text-input>
          <bim-button style="flex: 0;" @click=${()=>{n.expanded=!n.expanded}} icon="eva:expand-outline"></bim-button> 
        </div> 
        ${n}
      </bim-panel-section>
    </bim-panel>
  `),r=document.createElement("bim-grid");r.layouts={main:{template:`
    "worldsConfigPanel viewport"
    /26rem 1fr
    `,elements:{worldsConfigPanel:D,viewport:a}}};r.layout="main";document.body.append(r);
