import{h as $,g as w,_ as K,t as A,r as P,k as _,o as v,A as Q,q as X,j as Y,u as Z,C as F,P as V,v as G,S as N,w as U,D as ee,x as te,f as L,d as ne}from"./template-DWsy8vKF.js";const oe=t=>{const{components:n}=t,s=t.schemaTag??!0,u=t.viewDefinitionTag??!0,a=n.get($),r=document.createElement("bim-table");r.addEventListener("cellcreated",({detail:d})=>{const{cell:l}=d;l.style.padding="0.25rem 0"}),r.hiddenColumns=["modelID"],r.headersHidden=!0;const f=[];for(const[,d]of a.groups){if(!d)continue;const l={data:{Name:d.name||d.uuid,modelID:d.uuid}};f.push(l)}return r.dataTransform={Name:(d,l)=>{const{modelID:m}=l;if(typeof m!="string")return d;const b=a.groups.get(m);if(!b)return m;const y={};for(const h of b.items)y[h.id]=h.ids;let e;const{schema:o}=b.ifcMetadata;s&&o&&(e=w`
          <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${o}</bim-label>
          `);let C;if(u&&"viewDefinition"in b.ifcMetadata){const h=b.ifcMetadata.viewDefinition;C=w`
          ${h.split(",").map(i=>w`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${i}</bim-label>`)}
        `}return w`
       <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
          <div style="min-height: 1.75rem; overflow: auto; display: flex;">
            <bim-label style="white-space: normal;">${d}</bim-label>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
            ${e}
            ${C}
          </div>
        </div>
        <div style="display: flex; gap: var(--bim-ui_size-4xs); align-self: flex-start; flex-shrink: 0;">
          <bim-button @click=${h=>{const i=n.get(K),c=h.target;i.set(c.hasAttribute("data-model-hidden"),y),c.toggleAttribute("data-model-hidden"),c.icon=c.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>
          <bim-button @click=${()=>a.disposeGroup(b)} icon="mdi:delete"></bim-button>
        </div>
       </div>
      `}},r.data=f,w`
    <div>
      ${f.length===0?w`<bim-label>No models has been loaded yet</bim-label>`:r}
    </div>
  `},ie=(t,n=!0)=>{const s=A.create(oe,t);if(n){const{components:u}=t,a=u.get($),[,r]=s;a.onFragmentsLoaded.add(()=>setTimeout(()=>r())),a.onFragmentsDisposed.add(()=>r())}return s},re=Object.freeze(Object.defineProperty({__proto__:null,modelsList:ie},Symbol.toStringTag,{value:"Module"})),H=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",t=>t.includes("Value"),t=>t.startsWith("Material"),t=>t.startsWith("Relating"),t=>{const n=["IsGroupedBy","IsDecomposedBy"];return t.startsWith("Is")&&!n.includes(t)}];async function W(t,n,s,u=H,a=!1){const r=t.get(_),f=await n.getProperties(s);if(!f)return{data:{Entity:`${s} properties not found...`}};const d=r.relationMaps[n.uuid],l={data:{}};for(const m in f){const b=u.map(e=>typeof e=="string"?m===e:e(m)).includes(!0);if(!(m==="type"||b))continue;const y=f[m];if(y)if(y.type===5){l.children||(l.children=[]);const e=await W(t,n,y.value,u,a);l.children.push(e)}else if(typeof y=="object"&&!Array.isArray(y)){const{value:e,type:o}=y;if(a)o===1||o===2||o===3||(l.data[m]=e);else{const C=typeof e=="number"?Number(e.toFixed(3)):e;l.data[m]=C}}else if(Array.isArray(y))for(const e of y){if(e.type!==5)continue;l.children||(l.children=[]);const o=await W(t,n,e.value,u,a);l.children.push(o)}else if(m==="type"){const e=v[y];l.data.Entity=e}else l.data[m]=y}if(d&&d.get(f.expressID)){const m=d.get(f.expressID);for(const b of u){const y=[];if(typeof b=="string"){const e=r._inverseAttributes.indexOf(b);e!==-1&&y.push(e)}else{const e=r._inverseAttributes.filter(o=>b(o));for(const o of e){const C=r._inverseAttributes.indexOf(o);y.push(C)}}for(const e of y){const o=m.get(e);if(o)for(const C of o){const I=await W(t,n,C,u,a);l.children||(l.children=[]),l.children.push(I)}}}}return l}const se=t=>{const{components:n,fragmentIdMap:s,attributesToInclude:u,editable:a,tableDefinition:r}=t,f=n.get($);let d;return typeof u=="function"?d=u(H):d=u,w`<bim-table ${P(async m=>{if(!m)return;const b=m,y=[],e=[];for(const o in s){const C=f.list.get(o);if(!(C&&C.group))continue;const I=C.group,S=e.find(h=>h.model===I);if(S)for(const h of s[o])S.expressIDs.add(h);else{const h={model:I,expressIDs:new Set(s[o])};e.push(h)}}for(const o of e){const{model:C,expressIDs:I}=o;for(const S of I){const h=await W(n,C,S,d,a);y.push(h)}}b.dataTransform=r,b.data=y,b.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},ae=t=>A.create(se,t),ce=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:ae},Symbol.toStringTag,{value:"Module"}));function ue(t){const n=Object.keys(t).pop();return n&&t[n].length>0?t[n][0]:""}function z(t){return t.map(n=>{const s={data:{System:ue(n.filter)}};return n.children&&n.children.length>0&&(s.children=z(n.children)),s})}const le=t=>{const{components:n,classifications:s}=t,u=n.get(Q),a=r=>{if(!r)return;const f=r;f.dataTransform={Actions:m=>m};const d=(m,b={})=>{const y=u.list,e=m[0],o=y[e],C=[];if(!e||!o)return C;for(const I in o){const S={...b,[e]:[I]},h=u.find(S);if(Object.keys(h).length>0){const c={filter:S};c.children=d(m.slice(1),S),C.push(c)}}return C},l=[];for(const m in s){const b=s[m],y=d(b),e=z(y);l.push({data:{System:m},children:e})}f.data=l};return w`
  <div>
    ${Object.keys(s).length===0?w`<bim-label label="No classifications to show"></bim-label>`:w`<bim-table ${P(a)} headers-hidden expanded></bim-table>`}
  </div>
  `},de=(t,n=!0)=>{const s=A.create(le,t);if(n){const{components:u}=t,a=u.get($),[,r]=s;a.onFragmentsDisposed.add(()=>r())}return s},fe=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:de},Symbol.toStringTag,{value:"Module"})),me=t=>A.create(X,t),pe=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:me},Symbol.toStringTag,{value:"Module"})),M=async(t,n,s,u)=>{var m;const a=[],r=t.get(_),f=await n.getProperties(s);if(!f)return a;const{type:d}=f,l={data:{Entity:v[d],Name:(m=f.Name)==null?void 0:m.value,modelID:n.uuid}};for(const b of u){const y=r.getEntityRelations(n,s,b);if(l.data.expressID=s,!!y){l.data.relations=JSON.stringify(y);for(const e of y){const o=await M(t,n,e,u);l.children||(l.children=[]),l.children.push(...o)}}}return a.push(l),a},ge=async(t,n,s,u)=>{const a=t.get(_),r=[];for(const f of n){let d;if(u)d={data:{Entity:f.name!==""?f.name:f.uuid},children:await M(t,f,u,s)};else{const l=a.relationMaps[f.uuid],m=await f.getAllPropertiesOfType(Z);if(!(l&&m))continue;const{expressID:b}=Object.values(m)[0];d={data:{Entity:f.name!==""?f.name:f.uuid},children:await M(t,f,b,s)}}r.push(d)}return r};let D;const j=(t,n)=>{const s=t.get($),{modelID:u,expressID:a,relations:r}=n.data;if(!(u&&a))return null;const f=s.groups.get(u);return f?f.getFragmentMap([a,...JSON.parse(r??"[]")]):null},he=t=>{const{components:n,models:s,expressID:u}=t,a=t.selectHighlighterName??"select",r=t.hoverHighlighterName??"hover";D||(D=document.createElement("bim-table"),D.hiddenColumns=["modelID","expressID","relations"],D.columns=["Entity","Name"],D.headersHidden=!0,D.addEventListener("cellcreated",({detail:d})=>{const{cell:l}=d;l.column==="Entity"&&!("Name"in l.rowData)&&(l.style.gridColumn="1 / -1")})),D.addEventListener("rowcreated",d=>{d.stopImmediatePropagation();const{row:l}=d.detail,m=n.get(Y);l.onmouseover=()=>{if(!r)return;const b=j(n,l);b&&Object.keys(b).length!==0&&(l.style.backgroundColor="var(--bim-ui_bg-contrast-20)",m.highlightByID(r,b,!0,!1,m.selection[a]??{}))},l.onmouseout=()=>{l.style.backgroundColor="",m.clear(r)},l.onclick=()=>{if(!a)return;const b=j(n,l);b&&Object.keys(b).length!==0&&m.highlightByID(a,b,!0,!0)}});const f=t.inverseAttributes??["IsDecomposedBy","ContainsElements"];return ge(n,s,f,u).then(d=>D.data=d),w`${D}`},be=(t,n=!0)=>{const s=A.create(he,t);if(n){const[,u]=s,{components:a}=t,r=a.get($),f=a.get(_),d=()=>u({models:r.groups.values()});f.onRelationsIndexed.add(d),r.onFragmentsDisposed.add(d)}return s},ye=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:be},Symbol.toStringTag,{value:"Module"})),k=(t,n)=>[...t.get(ne).list.values()].find(a=>a.world===n),Ce=(t,n)=>w`
    <bim-color-input @input=${u=>{const a=u.target;t.color=new L(a.color)}} color=${n}></bim-color-input>
  `,Ie=(t,n)=>{const{postproduction:s}=t,u=s.n8ao.configuration;return w`
    <bim-color-input @input=${r=>{const f=r.target;u.color=new L(f.color)}} color=${n}></bim-color-input>
  `},xe=(t,n)=>{const{color:s,opacity:u}=JSON.parse(n),{postproduction:a}=t,{customEffects:r}=a;return w`
    <bim-color-input @input=${d=>{const{color:l,opacity:m}=d.target;r.lineColor=new L(l).getHex(),m&&(r.opacity=m/100)}} color=${s} opacity=${u*100}></bim-color-input>
  `},we=(t,n)=>w`
    <bim-color-input @input=${u=>{const a=u.target,r=new L(a.color);t.material.uniforms.uColor.value=r}} color=${n}></bim-color-input>
  `,Se=(t,n)=>{const{postproduction:s}=t;return w`
    <bim-checkbox @change=${a=>{const r=a.target;s.setPasses({ao:r.checked})}} .checked=${n}></bim-checkbox>
  `},Ne=(t,n)=>{const{postproduction:s}=t;return w`
    <bim-checkbox @change=${a=>{const r=a.target;s.setPasses({gamma:r.checked})}} .checked=${n}></bim-checkbox>
  `},Oe=(t,n)=>{const{postproduction:s}=t;return w`
    <bim-checkbox @change=${a=>{const r=a.target;s.setPasses({custom:r.checked})}} .checked=${n}></bim-checkbox>
  `},E=(t,n,s,u=()=>{})=>w`
    <bim-checkbox .checked="${s}" @change="${r=>{const d=r.target.checked;t[n]=d,u(d)}}"></bim-checkbox> 
  `,x=(t,n,s,u)=>{const a={slider:!1,min:0,max:100,step:1,prefix:null,suffix:null,onInputSet:()=>{},...u},{slider:r,min:f,max:d,step:l,suffix:m,prefix:b,onInputSet:y}=a;return w`
    <bim-number-input
      .pref=${b}
      .suffix=${m}
      .slider=${r} 
      min=${f} 
      value="${s}" 
      max=${d} 
      step=${l} 
      @change="${o=>{const I=o.target.value;t[n]=I,y(I)}}"
    ></bim-number-input> 
  `},De=t=>{const{components:n}=t,s=n.get(F);return w`<bim-table ${P(async a=>{var d,l,m,b,y;if(!a)return;const r=a;r.preserveStructureOnFilter=!0,r.dataTransform={Value:(e,o)=>{const C=o.World,I=s.list.get(C);if(!I)return e;const{scene:S,camera:h,renderer:i}=I,c=o.Name;if(c==="Grid"&&o.IsGridConfig&&typeof e=="boolean"){const p=k(n,I);return p?E(p,"visible",e):e}if(c==="Color"&&o.IsGridConfig&&typeof e=="string"){const p=k(n,I);return p?we(p,e):e}if(c==="Distance"&&o.IsGridConfig&&typeof e=="number"){const p=k(n,I);return p?x(p.material.uniforms.uDistance,"value",e,{slider:!0,min:300,max:1e3}):e}if(c==="Size"&&o.IsGridConfig&&typeof e=="string"){const p=k(n,I);if(!p)return e;const{x:g,y:O}=JSON.parse(e),T=x(p.material.uniforms.uSize1,"value",g,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),R=x(p.material.uniforms.uSize2,"value",O,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return w`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${T}${R}</div>
          `}if(c==="Near Frustum"&&h.three instanceof V&&typeof e=="number"){const p=h.three;return x(h.three,"near",e,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>p.updateProjectionMatrix()})}if(c==="Far Frustum"&&h.three instanceof V&&typeof e=="number"){const p=h.three;return x(h.three,"far",e,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>p.updateProjectionMatrix()})}if(c==="Field of View"&&h.three instanceof V&&typeof e=="number"){const p=h.three;return x(h.three,"fov",e,{slider:!0,min:10,max:120,onInputSet:()=>p.updateProjectionMatrix()})}if(c==="Invert Drag"&&h.hasCameraControls()&&typeof e=="boolean")return E(h.controls,"dollyDragInverted",e);if(c==="Dolly Speed"&&h.hasCameraControls()&&typeof e=="number")return x(h.controls,"dollySpeed",e,{slider:!0,min:.5,max:3,step:.1});if(c==="Truck Speed"&&h.hasCameraControls()&&typeof e=="number")return x(h.controls,"truckSpeed",e,{slider:!0,min:.5,max:6,step:.1});if(c==="Smooth Time"&&h.hasCameraControls()&&typeof e=="number")return x(h.controls,"smoothTime",e,{slider:!0,min:.01,max:2,step:.01});if(c==="Intensity"&&typeof e=="number"){if(o.Light&&typeof o.Light=="string"){const p=S.three.children.find(g=>g.uuid===o.Light);return p&&p instanceof G?x(p,"intensity",e,{slider:!0,min:0,max:10,step:.1}):e}if(o.IsAOConfig&&i instanceof N)return x(i.postproduction.n8ao.configuration,"intensity",e,{slider:!0,max:16,step:.1})}if(c==="Color"&&typeof e=="string"){const p=o.Light,g=S.three.children.find(O=>O.uuid===p);if(g&&g instanceof G)return Ce(g,e);if(o.IsAOConfig&&i instanceof N)return Ie(i,e)}if(c==="Ambient Oclussion"&&typeof e=="boolean"&&o.IsAOConfig&&i instanceof N)return Se(i,e);if(c==="Half Resolution"&&o.IsAOConfig&&i instanceof N&&typeof e=="boolean")return E(i.postproduction.n8ao.configuration,"halfRes",e);if(c==="Screen Space Radius"&&o.IsAOConfig&&i instanceof N&&typeof e=="boolean")return E(i.postproduction.n8ao.configuration,"screenSpaceRadius",e);if(c==="Radius"&&o.IsAOConfig&&i instanceof N&&typeof e=="number")return x(i.postproduction.n8ao.configuration,"aoRadius",e,{slider:!0,max:2,step:.1});if(c==="Denoise Samples"&&o.IsAOConfig&&i instanceof N&&typeof e=="number")return x(i.postproduction.n8ao.configuration,"denoiseSamples",e,{slider:!0,min:1,max:16});if(c==="Samples"&&o.IsAOConfig&&i instanceof N&&typeof e=="number")return x(i.postproduction.n8ao.configuration,"aoSamples",e,{slider:!0,min:1,max:16});if(c==="Denoise Radius"&&o.IsAOConfig&&i instanceof N&&typeof e=="number")return x(i.postproduction.n8ao.configuration,"denoiseRadius",e,{slider:!0,min:0,max:16,step:.1});if(c==="Distance Falloff"&&o.IsAOConfig&&i instanceof N&&typeof e=="number")return x(i.postproduction.n8ao.configuration,"distanceFalloff",e,{slider:!0,min:0,max:4,step:.1});if(c==="Directional Light"&&o.Light&&typeof o.Light=="string"&&typeof e=="boolean"){const p=S.three.children.find(g=>g.uuid===o.Light);return p&&p instanceof G?E(p,"visible",e):e}if(c==="Ambient Light"&&o.Light&&typeof o.Light=="string"&&typeof e=="boolean"){const p=S.three.children.find(g=>g.uuid===o.Light);return p&&p instanceof G?E(p,"visible",e):e}if(c==="Position"&&o.Light&&typeof o.Light=="string"&&typeof e=="string"){const p=S.three.children.find(q=>q.uuid===o.Light);if(!(p&&p instanceof G))return e;const{x:g,y:O,z:T}=JSON.parse(e),R=x(p.position,"x",g,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),J=x(p.position,"y",O,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),B=x(p.position,"z",T,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return w`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${R}${J}${B}</div>
          `}return c==="Custom Effects"&&o.IsCEConfig&&i instanceof N&&typeof e=="boolean"?Oe(i,e):c==="Color"&&o.IsOutlineConfig&&i instanceof N&&typeof e=="string"?xe(i,e):c==="Tolerance"&&o.IsOutlineConfig&&i instanceof N&&typeof e=="number"?x(i.postproduction.customEffects,"tolerance",e,{slider:!0,min:0,max:6,step:.01}):c==="Outline"&&o.IsOutlineConfig&&i instanceof N&&typeof e=="boolean"?E(i.postproduction.customEffects,"outlineEnabled",e):c==="Gloss"&&o.IsGlossConfig&&i instanceof N&&typeof e=="boolean"?E(i.postproduction.customEffects,"glossEnabled",e):c==="Min"&&o.IsGlossConfig&&i instanceof N&&typeof e=="number"?x(i.postproduction.customEffects,"minGloss",e,{slider:!0,min:-.5,max:.5,step:.01}):c==="Max"&&o.IsGlossConfig&&i instanceof N&&typeof e=="number"?x(i.postproduction.customEffects,"maxGloss",e,{slider:!0,min:-.5,max:.5,step:.01}):c==="Exponent"&&o.IsGlossConfig&&i instanceof N&&typeof e=="number"?x(i.postproduction.customEffects,"glossExponent",e,{slider:!0,min:0,max:5,step:.01}):c==="Gamma Correction"&&o.IsGammaConfig&&i instanceof N&&typeof e=="boolean"?Ne(i,e):e}},r.addEventListener("cellcreated",({detail:e})=>{const o=e.cell.parentNode;if(!o)return;const C=o.querySelector("bim-table-cell[column='Name']"),I=o.querySelector("bim-table-cell[column='Value']");C&&!I&&(C.style.gridColumn="1 / -1")});const f=[];for(const[,e]of s.list){const{scene:o,camera:C,renderer:I}=e,S=k(n,e),h={data:{Name:e instanceof U&&e.name||e.uuid},children:[]};if(o){const i={data:{Name:"Scene"}};if(S){const g={data:{Name:"Grid",Value:S.three.visible,World:e.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",get Value(){return`#${S.material.uniforms.uColor.value.getHexString()}`},World:e.uuid,IsGridConfig:!0}},{data:{Name:"Size",get Value(){const O=S.material.uniforms.uSize1.value,T=S.material.uniforms.uSize2.value;return JSON.stringify({x:O,y:T})},World:e.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:S.material.uniforms.uDistance.value,World:e.uuid,IsGridConfig:!0}}]};i.children||(i.children=[]),i.children.push(g)}const c=o.three.children.filter(g=>g instanceof ee);for(const g of c){const O={data:{Name:"Directional Light",Value:g.visible,World:e.uuid,Light:g.uuid},children:[{data:{Name:"Position",Value:JSON.stringify(g.position),World:e.uuid,Light:g.uuid}},{data:{Name:"Intensity",Value:g.intensity,World:e.uuid,Light:g.uuid}},{data:{Name:"Color",Value:`#${g.color.getHexString()}`,World:e.uuid,Light:g.uuid}}]};i.children||(i.children=[]),i.children.push(O)}const p=o.three.children.filter(g=>g instanceof te);for(const g of p){const O={data:{Name:"Ambient Light",Value:g.visible,World:e.uuid,Light:g.uuid},children:[{data:{Name:"Intensity",Value:g.intensity,World:e.uuid,Light:g.uuid}},{data:{Name:"Color",Value:`#${g.color.getHexString()}`,World:e.uuid,Light:g.uuid}}]};i.children||(i.children=[]),i.children.push(O)}i.children&&((d=i.children)==null?void 0:d.length)>0&&((l=h.children)==null||l.push(i))}if(C.three instanceof V){const i={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:C.three.near,World:e.uuid}},{data:{Name:"Far Frustum",Value:C.three.far,World:e.uuid}},{data:{Name:"Field of View",Value:C.three.fov,World:e.uuid}}]};if(C.hasCameraControls()){const{controls:c}=C,p={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const g in p){const O=c[g];O!=null&&((m=i.children)==null||m.push({data:{Name:p[g],Value:O,World:e.uuid}}))}}(b=h.children)==null||b.push(i)}if(I instanceof N){const{postproduction:i}=I,c=i.n8ao.configuration,p={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:i.settings.gamma??!1,World:e.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:i.settings.ao??!1,World:e.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:c.aoSamples,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${c.color.getHexString()}`,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:c.halfRes,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:c.screenSpaceRadius,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:c.aoRadius,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:c.intensity,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:c.distanceFalloff,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:c.denoiseSamples,World:e.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:c.denoiseRadius,World:e.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:i.settings.custom??!1,World:e.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:i.customEffects.glossEnabled,World:e.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:i.customEffects.minGloss,World:e.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:i.customEffects.maxGloss,World:e.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:i.customEffects.glossExponent,World:e.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:i.customEffects.outlineEnabled,World:e.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const g=new L(i.customEffects.lineColor),O=i.customEffects.opacity;return JSON.stringify({color:`#${g.getHexString()}`,opacity:O})},World:e.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:i.customEffects.tolerance,World:e.uuid,IsOutlineConfig:!0}}]}]}]};(y=h.children)==null||y.push(p)}f.push(h)}r.columns=[{name:"Name",width:"11rem"}],r.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],r.data=f})} headers-hidden expanded></bim-table>`},Ee=(t,n=!0)=>{const s=A.create(De,t);if(n){const[u]=s,a=()=>s[1](),{components:r}=t,f=r.get(F);f.onDisposed.add(u.remove);for(const[,d]of f.list)d.onDisposed.add(a);u.addEventListener("disconnected",()=>{f.onDisposed.remove(u.remove);for(const[,d]of f.list)d.onDisposed.remove(a)})}return s},$e=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:Ee},Symbol.toStringTag,{value:"Module"})),Te={...re,...ce,...fe,...pe,...ye,...$e};export{Te as t};