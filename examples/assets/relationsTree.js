import{x as u}from"./lit-element-CToom8Wf.js";import{P as g,C as b,W as f,S as w,a as S,b as h,G as v,I,s as T,F as y,l as C,T as x}from"./index-DNiVoluI.js";import{b as F}from"./index-CqhcBaEU.js";import{t as L}from"./index-kdXv3cq4.js";g.init();const e=new b,z=e.get(f),t=z.create(),o=new w(e);o.setup();t.scene=o;const r=document.createElement("bim-viewport"),s=new S(e,r);t.renderer=s;const i=new h(e);t.camera=i;r.addEventListener("resize",()=>{s.resize(),i.updateAspect()});const E=e.get(v);E.create(t);e.init();const G=e.get(I);await G.setup();const c=e.get(T);c.setup({world:t});c.zoomToSelection=!0;const m=e.get(y);m.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const M=e.get(C);m.onFragmentsLoaded.add(async n=>{n.hasProperties&&await M.process(n)});const[a]=L.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const P=x.create(()=>{const[n]=F.loadIfc({components:e});return u`
   <bim-panel label="Relations Tree">
    <bim-panel-section label="Model Tree">
      ${n}
      <bim-text-input @input=${l=>{const d=l.target;a.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:P,viewport:r}}};p.layout="main";
