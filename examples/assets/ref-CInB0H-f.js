import{E as $}from"./lit-html-paDGiEfB.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},A=t=>(...s)=>({_$litDirective$:t,values:s});class a{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,e,i){this._$Ct=s,this._$AM=e,this._$Ci=i}_$AS(s,e){return this.update(s,e)}update(s,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=(t,s)=>{var i;const e=t._$AN;if(e===void 0)return!1;for(const h of e)(i=h._$AO)==null||i.call(h,s,!1),n(h,s);return!0},r=t=>{let s,e;do{if((s=t._$AM)===void 0)break;e=s._$AN,e.delete(t),t=s}while((e==null?void 0:e.size)===0)},d=t=>{for(let s;s=t._$AM;t=s){let e=s._$AN;if(e===void 0)s._$AN=e=new Set;else if(e.has(t))break;e.add(t),v(s)}};function u(t){this._$AN!==void 0?(r(this),this._$AM=t,d(this)):this._$AM=t}function f(t,s=!1,e=0){const i=this._$AH,h=this._$AN;if(h!==void 0&&h.size!==0)if(s)if(Array.isArray(i))for(let o=e;o<i.length;o++)n(i[o],!1),r(i[o]);else i!=null&&(n(i,!1),r(i));else n(this,t)}const v=t=>{t.type==l.CHILD&&(t._$AP??(t._$AP=f),t._$AQ??(t._$AQ=u))};class T extends a{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,e,i){super._$AT(s,e,i),d(this),this.isConnected=s._$AU}_$AO(s,e=!0){var i,h;s!==this.isConnected&&(this.isConnected=s,s?(i=this.reconnected)==null||i.call(this):(h=this.disconnected)==null||h.call(this)),e&&(n(this,s),r(this))}setValue(s){if(_(this._$Ct))this._$Ct._$AI(s,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=s,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=()=>new p;class p{}const c=new WeakMap,g=A(class extends T{render(t){return $}update(t,[s]){var i;const e=s!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),$}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const s=this.ht??globalThis;let e=c.get(s);e===void 0&&(e=new WeakMap,c.set(s,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,s;return typeof this.Y=="function"?(t=c.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(s=this.Y)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{A as a,Y as e,a as i,g as n,l as t};
