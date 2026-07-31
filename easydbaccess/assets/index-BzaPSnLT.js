(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Od="modulepreload",Dd=function(e){return"/easydbaccess/"+e},Ea={},at=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");i=a(n.map(f=>{if(f=Dd(f),f in Ea)return;Ea[f]=!0;const g=f.endsWith(".css"),b=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${b}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":Od,g||(y.as="script"),y.crossOrigin="",y.href=f,d&&y.setAttribute("nonce",d),document.head.appendChild(y),g)return new Promise((k,C)=>{y.addEventListener("load",k),y.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=globalThis,ao=ai.ShadowRoot&&(ai.ShadyCSS===void 0||ai.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lo=Symbol(),Ta=new WeakMap;let ic=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==lo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ao&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Ta.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ta.set(n,t))}return t}toString(){return this.cssText}};const Pd=e=>new ic(typeof e=="string"?e:e+"",void 0,lo),$e=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new ic(n,e,lo)},Ld=(e,t)=>{if(ao)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=ai.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Ia=ao?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Pd(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Md,defineProperty:zd,getOwnPropertyDescriptor:jd,getOwnPropertyNames:Nd,getOwnPropertySymbols:Ud,getPrototypeOf:Fd}=Object,Si=globalThis,Aa=Si.trustedTypes,Bd=Aa?Aa.emptyScript:"",Hd=Si.reactiveElementPolyfillSupport,ar=(e,t)=>e,hi={toAttribute(e,t){switch(t){case Boolean:e=e?Bd:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},co=(e,t)=>!Md(e,t),Ra={attribute:!0,type:String,converter:hi,reflect:!1,useDefault:!1,hasChanged:co};Symbol.metadata??=Symbol("metadata"),Si.litPropertyMetadata??=new WeakMap;let Cn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Ra){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&zd(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=jd(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get:i,set(a){const c=i?.call(this);s?.call(this,a),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ra}static _$Ei(){if(this.hasOwnProperty(ar("elementProperties")))return;const t=Fd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ar("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ar("properties"))){const n=this.properties,r=[...Nd(n),...Ud(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Ia(i))}else t!==void 0&&n.push(Ia(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ld(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:hi).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:hi;this._$Em=i;const c=a.fromAttribute(n,s.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,n,r,i=!1,s){if(t!==void 0){const a=this.constructor;if(i===!1&&(s=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??co)(s,n)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:s},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??n??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r){const{wrapped:a}=s,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,s,c)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Cn.elementStyles=[],Cn.shadowRootOptions={mode:"open"},Cn[ar("elementProperties")]=new Map,Cn[ar("finalized")]=new Map,Hd?.({ReactiveElement:Cn}),(Si.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uo=globalThis,Oa=e=>e,pi=uo.trustedTypes,Da=pi?pi.createPolicy("lit-html",{createHTML:e=>e}):void 0,sc="$lit$",qt=`lit$${Math.random().toFixed(9).slice(2)}$`,oc="?"+qt,qd=`<${oc}>`,dn=document,cr=()=>dn.createComment(""),ur=e=>e===null||typeof e!="object"&&typeof e!="function",ho=Array.isArray,Kd=e=>ho(e)||typeof e?.[Symbol.iterator]=="function",Os=`[ 	
\f\r]`,tr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pa=/-->/g,La=/>/g,on=RegExp(`>|${Os}(?:([^\\s"'>=/]+)(${Os}*=${Os}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ma=/'/g,za=/"/g,ac=/^(?:script|style|textarea|title)$/i,Vd=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),$=Vd(1),hn=Symbol.for("lit-noChange"),re=Symbol.for("lit-nothing"),ja=new WeakMap,un=dn.createTreeWalker(dn,129);function lc(e,t){if(!ho(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Da!==void 0?Da.createHTML(t):t}const Gd=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",a=tr;for(let c=0;c<n;c++){const d=e[c];let f,g,b=-1,y=0;for(;y<d.length&&(a.lastIndex=y,g=a.exec(d),g!==null);)y=a.lastIndex,a===tr?g[1]==="!--"?a=Pa:g[1]!==void 0?a=La:g[2]!==void 0?(ac.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=on):g[3]!==void 0&&(a=on):a===on?g[0]===">"?(a=i??tr,b=-1):g[1]===void 0?b=-2:(b=a.lastIndex-g[2].length,f=g[1],a=g[3]===void 0?on:g[3]==='"'?za:Ma):a===za||a===Ma?a=on:a===Pa||a===La?a=tr:(a=on,i=void 0);const k=a===on&&e[c+1].startsWith("/>")?" ":"";s+=a===tr?d+qd:b>=0?(r.push(f),d.slice(0,b)+sc+d.slice(b)+qt+k):d+qt+(b===-2?c:k)}return[lc(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class dr{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,a=0;const c=t.length-1,d=this.parts,[f,g]=Gd(t,n);if(this.el=dr.createElement(f,r),un.currentNode=this.el.content,n===2||n===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(i=un.nextNode())!==null&&d.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const b of i.getAttributeNames())if(b.endsWith(sc)){const y=g[a++],k=i.getAttribute(b).split(qt),C=/([.?@])?(.*)/.exec(y);d.push({type:1,index:s,name:C[2],strings:k,ctor:C[1]==="."?Yd:C[1]==="?"?Xd:C[1]==="@"?Qd:Ei}),i.removeAttribute(b)}else b.startsWith(qt)&&(d.push({type:6,index:s}),i.removeAttribute(b));if(ac.test(i.tagName)){const b=i.textContent.split(qt),y=b.length-1;if(y>0){i.textContent=pi?pi.emptyScript:"";for(let k=0;k<y;k++)i.append(b[k],cr()),un.nextNode(),d.push({type:2,index:++s});i.append(b[y],cr())}}}else if(i.nodeType===8)if(i.data===oc)d.push({type:2,index:s});else{let b=-1;for(;(b=i.data.indexOf(qt,b+1))!==-1;)d.push({type:7,index:s}),b+=qt.length-1}s++}}static createElement(t,n){const r=dn.createElement("template");return r.innerHTML=t,r}}function Tn(e,t,n=e,r){if(t===hn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=ur(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Tn(e,i._$AS(e,t.values),i,r)),t}class Wd{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??dn).importNode(n,!0);un.currentNode=i;let s=un.nextNode(),a=0,c=0,d=r[0];for(;d!==void 0;){if(a===d.index){let f;d.type===2?f=new wr(s,s.nextSibling,this,t):d.type===1?f=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(f=new Jd(s,this,t)),this._$AV.push(f),d=r[++c]}a!==d?.index&&(s=un.nextNode(),a++)}return un.currentNode=dn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class wr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=re,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Tn(this,t,n),ur(t)?t===re||t==null||t===""?(this._$AH!==re&&this._$AR(),this._$AH=re):t!==this._$AH&&t!==hn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==re&&ur(this._$AH)?this._$AA.nextSibling.data=t:this.T(dn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=dr.createElement(lc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new Wd(i,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let n=ja.get(t.strings);return n===void 0&&ja.set(t.strings,n=new dr(t)),n}k(t){ho(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new wr(this.O(cr()),this.O(cr()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=Oa(t).nextSibling;Oa(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ei{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=re,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=re}_$AI(t,n=this,r,i){const s=this.strings;let a=!1;if(s===void 0)t=Tn(this,t,n,0),a=!ur(t)||t!==this._$AH&&t!==hn,a&&(this._$AH=t);else{const c=t;let d,f;for(t=s[0],d=0;d<s.length-1;d++)f=Tn(this,c[r+d],n,d),f===hn&&(f=this._$AH[d]),a||=!ur(f)||f!==this._$AH[d],f===re?t=re:t!==re&&(t+=(f??"")+s[d+1]),this._$AH[d]=f}a&&!i&&this.j(t)}j(t){t===re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Yd extends Ei{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===re?void 0:t}}class Xd extends Ei{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==re)}}class Qd extends Ei{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=Tn(this,t,n,0)??re)===hn)return;const r=this._$AH,i=t===re&&r!==re||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==re&&(r===re||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Jd{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Tn(this,t)}}const Zd=uo.litHtmlPolyfillSupport;Zd?.(dr,wr),(uo.litHtmlVersions??=[]).push("3.3.3");const eh=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new wr(t.insertBefore(cr(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=globalThis;let xe=class extends Cn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=eh(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return hn}};xe._$litElement$=!0,xe.finalized=!0,po.litElementHydrateSupport?.({LitElement:xe});const th=po.litElementPolyfillSupport;th?.({LitElement:xe});(po.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nh={attribute:!0,type:String,converter:hi,reflect:!1,hasChanged:co},rh=(e=nh,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(c){const d=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,d,e,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,e,c),c}}}if(r==="setter"){const{name:a}=n;return function(c){const d=this[a];t.call(this,c),this.requestUpdate(a,d,e,!0,c)}}throw Error("Unsupported decorator location: "+r)};function ct(e){return(t,n)=>typeof n=="object"?rh(e,t,n):((r,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),a?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(e){return ct({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ih=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt(e,t){return(n,r,i)=>{const s=a=>a.renderRoot?.querySelector(e)??null;return ih(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sh={CHILD:2},cc=e=>(...t)=>({_$litDirective$:e,values:t});class oh{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fi extends oh{constructor(t){if(super(t),this.it=re,t.type!==sh.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===re||t==null)return this._t=void 0,this.it=t;if(t===hn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}fi.directiveName="unsafeHTML",fi.resultType=1;const En=cc(fi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hs extends fi{}Hs.directiveName="unsafeSVG",Hs.resultType=2;const fo=cc(Hs);var ah=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var li={exports:{}},ch=li.exports,Na;function uh(){return Na||(Na=1,(function(e,t){(function(n,r){e.exports=r()})(ch,function(){var n=function(o,l){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,h){u.__proto__=h}||function(u,h){for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&(u[p]=h[p])})(o,l)},r=function(){return(r=Object.assign||function(o){for(var l,u=1,h=arguments.length;u<h;u++)for(var p in l=arguments[u])Object.prototype.hasOwnProperty.call(l,p)&&(o[p]=l[p]);return o}).apply(this,arguments)};function i(o,l,u){for(var h,p=0,m=l.length;p<m;p++)!h&&p in l||((h=h||Array.prototype.slice.call(l,0,p))[p]=l[p]);return o.concat(h||Array.prototype.slice.call(l))}var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:ah,a=Object.keys,c=Array.isArray;function d(o,l){return typeof l!="object"||a(l).forEach(function(u){o[u]=l[u]}),o}typeof Promise>"u"||s.Promise||(s.Promise=Promise);var f=Object.getPrototypeOf,g={}.hasOwnProperty;function b(o,l){return g.call(o,l)}function y(o,l){typeof l=="function"&&(l=l(f(o))),(typeof Reflect>"u"?a:Reflect.ownKeys)(l).forEach(function(u){C(o,u,l[u])})}var k=Object.defineProperty;function C(o,l,u,h){k(o,l,d(u&&b(u,"get")&&typeof u.get=="function"?{get:u.get,set:u.set,configurable:!0}:{value:u,configurable:!0,writable:!0},h))}function _(o){return{from:function(l){return o.prototype=Object.create(l.prototype),C(o.prototype,"constructor",o),{extend:y.bind(null,o.prototype)}}}}var D=Object.getOwnPropertyDescriptor,M=[].slice;function U(o,l,u){return M.call(o,l,u)}function H(o,l){return l(o)}function Q(o){if(!o)throw new Error("Assertion Failed")}function ne(o){s.setImmediate?setImmediate(o):setTimeout(o,0)}function W(o,l){if(typeof l=="string"&&b(o,l))return o[l];if(!l)return o;if(typeof l!="string"){for(var u=[],h=0,p=l.length;h<p;++h){var m=W(o,l[h]);u.push(m)}return u}var w=l.indexOf(".");if(w!==-1){var v=o[l.substr(0,w)];return v==null?void 0:W(v,l.substr(w+1))}}function q(o,l,u){if(o&&l!==void 0&&!("isFrozen"in Object&&Object.isFrozen(o)))if(typeof l!="string"&&"length"in l){Q(typeof u!="string"&&"length"in u);for(var h=0,p=l.length;h<p;++h)q(o,l[h],u[h])}else{var m,w,v=l.indexOf(".");v!==-1?(m=l.substr(0,v),(w=l.substr(v+1))===""?u===void 0?c(o)&&!isNaN(parseInt(m))?o.splice(m,1):delete o[m]:o[m]=u:q(v=!(v=o[m])||!b(o,m)?o[m]={}:v,w,u)):u===void 0?c(o)&&!isNaN(parseInt(l))?o.splice(l,1):delete o[l]:o[l]=u}}function Y(o){var l,u={};for(l in o)b(o,l)&&(u[l]=o[l]);return u}var se=[].concat;function oe(o){return se.apply([],o)}var Dt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(oe([8,16,32,64].map(function(o){return["Int","Uint","Float"].map(function(l){return l+o+"Array"})}))).filter(function(o){return s[o]}),B=new Set(Dt.map(function(o){return s[o]})),K=null;function ue(o){return K=new WeakMap,o=(function l(u){if(!u||typeof u!="object")return u;var h=K.get(u);if(h)return h;if(c(u)){h=[],K.set(u,h);for(var p=0,m=u.length;p<m;++p)h.push(l(u[p]))}else if(B.has(u.constructor))h=u;else{var w,v=f(u);for(w in h=v===Object.prototype?{}:Object.create(v),K.set(u,h),u)b(u,w)&&(h[w]=l(u[w]))}return h})(o),K=null,o}var ge={}.toString;function Te(o){return ge.call(o).slice(8,-1)}var je=typeof Symbol<"u"?Symbol.iterator:"@@iterator",dt=typeof je=="symbol"?function(o){var l;return o!=null&&(l=o[je])&&l.apply(o)}:function(){return null};function de(o,l){return l=o.indexOf(l),0<=l&&o.splice(l,1),0<=l}var Pe={};function Ae(o){var l,u,h,p;if(arguments.length===1){if(c(o))return o.slice();if(this===Pe&&typeof o=="string")return[o];if(p=dt(o)){for(u=[];!(h=p.next()).done;)u.push(h.value);return u}if(o==null)return[o];if(typeof(l=o.length)!="number")return[o];for(u=new Array(l);l--;)u[l]=o[l];return u}for(l=arguments.length,u=new Array(l);l--;)u[l]=arguments[l];return u}var Ze=typeof Symbol<"u"?function(o){return o[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Hn=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ht=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Hn),ye={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Be(o,l){this.name=o,this.message=l}function Wi(o,l){return o+". Errors: "+Object.keys(l).map(function(u){return l[u].toString()}).filter(function(u,h,p){return p.indexOf(u)===h}).join(`
`)}function gn(o,l,u,h){this.failures=l,this.failedKeys=h,this.successCount=u,this.message=Wi(o,l)}function bn(o,l){this.name="BulkError",this.failures=Object.keys(l).map(function(u){return l[u]}),this.failuresByPos=l,this.message=Wi(o,this.failures)}_(Be).from(Error).extend({toString:function(){return this.name+": "+this.message}}),_(gn).from(Be),_(bn).from(Be);var Yi=ht.reduce(function(o,l){return o[l]=l+"Error",o},{}),td=Be,ce=ht.reduce(function(o,l){var u=l+"Error";function h(p,m){this.name=u,p?typeof p=="string"?(this.message="".concat(p).concat(m?`
 `+m:""),this.inner=m||null):typeof p=="object"&&(this.message="".concat(p.name," ").concat(p.message),this.inner=p):(this.message=ye[l]||u,this.inner=null)}return _(h).from(td),o[l]=h,o},{});ce.Syntax=SyntaxError,ce.Type=TypeError,ce.Range=RangeError;var Go=Hn.reduce(function(o,l){return o[l+"Error"]=ce[l],o},{}),Cr=ht.reduce(function(o,l){return["Syntax","Type","Range"].indexOf(l)===-1&&(o[l+"Error"]=ce[l]),o},{});function ve(){}function Fn(o){return o}function nd(o,l){return o==null||o===Fn?l:function(u){return l(o(u))}}function Yt(o,l){return function(){o.apply(this,arguments),l.apply(this,arguments)}}function rd(o,l){return o===ve?l:function(){var u=o.apply(this,arguments);u!==void 0&&(arguments[0]=u);var h=this.onsuccess,p=this.onerror;this.onsuccess=null,this.onerror=null;var m=l.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?Yt(h,this.onsuccess):h),p&&(this.onerror=this.onerror?Yt(p,this.onerror):p),m!==void 0?m:u}}function id(o,l){return o===ve?l:function(){o.apply(this,arguments);var u=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,l.apply(this,arguments),u&&(this.onsuccess=this.onsuccess?Yt(u,this.onsuccess):u),h&&(this.onerror=this.onerror?Yt(h,this.onerror):h)}}function sd(o,l){return o===ve?l:function(u){var h=o.apply(this,arguments);d(u,h);var p=this.onsuccess,m=this.onerror;return this.onsuccess=null,this.onerror=null,u=l.apply(this,arguments),p&&(this.onsuccess=this.onsuccess?Yt(p,this.onsuccess):p),m&&(this.onerror=this.onerror?Yt(m,this.onerror):m),h===void 0?u===void 0?void 0:u:d(h,u)}}function od(o,l){return o===ve?l:function(){return l.apply(this,arguments)!==!1&&o.apply(this,arguments)}}function Xi(o,l){return o===ve?l:function(){var u=o.apply(this,arguments);if(u&&typeof u.then=="function"){for(var h=this,p=arguments.length,m=new Array(p);p--;)m[p]=arguments[p];return u.then(function(){return l.apply(h,m)})}return l.apply(this,arguments)}}Cr.ModifyError=gn,Cr.DexieError=Be,Cr.BulkError=bn;var _t=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Wo(o){_t=o}var Bn={},Yo=100,Dt=typeof Promise>"u"?[]:(function(){var o=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[o,f(o),o];var l=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[l,f(l),o]})(),Hn=Dt[0],ht=Dt[1],Dt=Dt[2],ht=ht&&ht.then,Xt=Hn&&Hn.constructor,Qi=!!Dt,qn=function(o,l){Kn.push([o,l]),Sr&&(queueMicrotask(ld),Sr=!1)},Ji=!0,Sr=!0,Qt=[],Er=[],Zi=Fn,zt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ve,pgp:!1,env:{},finalize:ve},le=zt,Kn=[],Jt=0,Tr=[];function te(o){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var l=this._PSD=le;if(typeof o!="function"){if(o!==Bn)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ts(this,this._value))}this._state=null,this._value=null,++l.ref,(function u(h,p){try{p(function(m){if(h._state===null){if(m===h)throw new TypeError("A promise cannot be resolved with itself.");var w=h._lib&&wn();m&&typeof m.then=="function"?u(h,function(v,S){m instanceof te?m._then(v,S):m.then(v,S)}):(h._state=!0,h._value=m,Qo(h)),w&&yn()}},ts.bind(null,h))}catch(m){ts(h,m)}})(this,o)}var es={get:function(){var o=le,l=Or;function u(h,p){var m=this,w=!o.global&&(o!==le||l!==Or),v=w&&!Nt(),S=new te(function(T,R){ns(m,new Xo(Zo(h,o,w,v),Zo(p,o,w,v),T,R,o))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return u.prototype=Bn,u},set:function(o){C(this,"then",o&&o.prototype===Bn?es:{get:function(){return o},set:es.set})}};function Xo(o,l,u,h,p){this.onFulfilled=typeof o=="function"?o:null,this.onRejected=typeof l=="function"?l:null,this.resolve=u,this.reject=h,this.psd=p}function ts(o,l){var u,h;Er.push(l),o._state===null&&(u=o._lib&&wn(),l=Zi(l),o._state=!1,o._value=l,h=o,Qt.some(function(p){return p._value===h._value})||Qt.push(h),Qo(o),u&&yn())}function Qo(o){var l=o._listeners;o._listeners=[];for(var u=0,h=l.length;u<h;++u)ns(o,l[u]);var p=o._PSD;--p.ref||p.finalize(),Jt===0&&(++Jt,qn(function(){--Jt==0&&rs()},[]))}function ns(o,l){if(o._state!==null){var u=o._state?l.onFulfilled:l.onRejected;if(u===null)return(o._state?l.resolve:l.reject)(o._value);++l.psd.ref,++Jt,qn(ad,[u,o,l])}else o._listeners.push(l)}function ad(o,l,u){try{var h,p=l._value;!l._state&&Er.length&&(Er=[]),h=_t&&l._consoleTask?l._consoleTask.run(function(){return o(p)}):o(p),l._state||Er.indexOf(p)!==-1||(function(m){for(var w=Qt.length;w;)if(Qt[--w]._value===m._value)return Qt.splice(w,1)})(l),u.resolve(h)}catch(m){u.reject(m)}finally{--Jt==0&&rs(),--u.psd.ref||u.psd.finalize()}}function ld(){Zt(zt,function(){wn()&&yn()})}function wn(){var o=Ji;return Sr=Ji=!1,o}function yn(){var o,l,u;do for(;0<Kn.length;)for(o=Kn,Kn=[],u=o.length,l=0;l<u;++l){var h=o[l];h[0].apply(null,h[1])}while(0<Kn.length);Sr=Ji=!0}function rs(){var o=Qt;Qt=[],o.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var l=Tr.slice(0),u=l.length;u;)l[--u]()}function Ir(o){return new te(Bn,!1,o)}function Ce(o,l){var u=le;return function(){var h=wn(),p=le;try{return Ut(u,!0),o.apply(this,arguments)}catch(m){l&&l(m)}finally{Ut(p,!1),h&&yn()}}}y(te.prototype,{then:es,_then:function(o,l){ns(this,new Xo(null,null,o,l,le))},catch:function(o){if(arguments.length===1)return this.then(null,o);var l=o,u=arguments[1];return typeof l=="function"?this.then(null,function(h){return(h instanceof l?u:Ir)(h)}):this.then(null,function(h){return(h&&h.name===l?u:Ir)(h)})},finally:function(o){return this.then(function(l){return te.resolve(o()).then(function(){return l})},function(l){return te.resolve(o()).then(function(){return Ir(l)})})},timeout:function(o,l){var u=this;return o<1/0?new te(function(h,p){var m=setTimeout(function(){return p(new ce.Timeout(l))},o);u.then(h,p).finally(clearTimeout.bind(null,m))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&C(te.prototype,Symbol.toStringTag,"Dexie.Promise"),zt.env=Jo(),y(te,{all:function(){var o=Ae.apply(null,arguments).map(Dr);return new te(function(l,u){o.length===0&&l([]);var h=o.length;o.forEach(function(p,m){return te.resolve(p).then(function(w){o[m]=w,--h||l(o)},u)})})},resolve:function(o){return o instanceof te?o:o&&typeof o.then=="function"?new te(function(l,u){o.then(l,u)}):new te(Bn,!0,o)},reject:Ir,race:function(){var o=Ae.apply(null,arguments).map(Dr);return new te(function(l,u){o.map(function(h){return te.resolve(h).then(l,u)})})},PSD:{get:function(){return le},set:function(o){return le=o}},totalEchoes:{get:function(){return Or}},newPSD:jt,usePSD:Zt,scheduler:{get:function(){return qn},set:function(o){qn=o}},rejectionMapper:{get:function(){return Zi},set:function(o){Zi=o}},follow:function(o,l){return new te(function(u,h){return jt(function(p,m){var w=le;w.unhandleds=[],w.onunhandled=m,w.finalize=Yt(function(){var v,S=this;v=function(){S.unhandleds.length===0?p():m(S.unhandleds[0])},Tr.push(function T(){v(),Tr.splice(Tr.indexOf(T),1)}),++Jt,qn(function(){--Jt==0&&rs()},[])},w.finalize),o()},l,u,h)})}}),Xt&&(Xt.allSettled&&C(te,"allSettled",function(){var o=Ae.apply(null,arguments).map(Dr);return new te(function(l){o.length===0&&l([]);var u=o.length,h=new Array(u);o.forEach(function(p,m){return te.resolve(p).then(function(w){return h[m]={status:"fulfilled",value:w}},function(w){return h[m]={status:"rejected",reason:w}}).then(function(){return--u||l(h)})})})}),Xt.any&&typeof AggregateError<"u"&&C(te,"any",function(){var o=Ae.apply(null,arguments).map(Dr);return new te(function(l,u){o.length===0&&u(new AggregateError([]));var h=o.length,p=new Array(h);o.forEach(function(m,w){return te.resolve(m).then(function(v){return l(v)},function(v){p[w]=v,--h||u(new AggregateError(p))})})})}),Xt.withResolvers&&(te.withResolvers=Xt.withResolvers));var Le={awaits:0,echoes:0,id:0},cd=0,Ar=[],Rr=0,Or=0,ud=0;function jt(o,l,u,h){var p=le,m=Object.create(p);return m.parent=p,m.ref=0,m.global=!1,m.id=++ud,zt.env,m.env=Qi?{Promise:te,PromiseProp:{value:te,configurable:!0,writable:!0},all:te.all,race:te.race,allSettled:te.allSettled,any:te.any,resolve:te.resolve,reject:te.reject}:{},l&&d(m,l),++p.ref,m.finalize=function(){--this.parent.ref||this.parent.finalize()},h=Zt(m,o,u,h),m.ref===0&&m.finalize(),h}function vn(){return Le.id||(Le.id=++cd),++Le.awaits,Le.echoes+=Yo,Le.id}function Nt(){return!!Le.awaits&&(--Le.awaits==0&&(Le.id=0),Le.echoes=Le.awaits*Yo,!0)}function Dr(o){return Le.echoes&&o&&o.constructor===Xt?(vn(),o.then(function(l){return Nt(),l},function(l){return Nt(),Re(l)})):o}function dd(){var o=Ar[Ar.length-1];Ar.pop(),Ut(o,!1)}function Ut(o,l){var u,h=le;(l?!Le.echoes||Rr++&&o===le:!Rr||--Rr&&o===le)||queueMicrotask(l?function(p){++Or,Le.echoes&&--Le.echoes!=0||(Le.echoes=Le.awaits=Le.id=0),Ar.push(le),Ut(p,!0)}.bind(null,o):dd),o!==le&&(le=o,h===zt&&(zt.env=Jo()),Qi&&(u=zt.env.Promise,l=o.env,(h.global||o.global)&&(Object.defineProperty(s,"Promise",l.PromiseProp),u.all=l.all,u.race=l.race,u.resolve=l.resolve,u.reject=l.reject,l.allSettled&&(u.allSettled=l.allSettled),l.any&&(u.any=l.any))))}function Jo(){var o=s.Promise;return Qi?{Promise:o,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:o.all,race:o.race,allSettled:o.allSettled,any:o.any,resolve:o.resolve,reject:o.reject}:{}}function Zt(o,l,u,h,p){var m=le;try{return Ut(o,!0),l(u,h,p)}finally{Ut(m,!1)}}function Zo(o,l,u,h){return typeof o!="function"?o:function(){var p=le;u&&vn(),Ut(l,!0);try{return o.apply(this,arguments)}finally{Ut(p,!1),h&&queueMicrotask(Nt)}}}function is(o){Promise===Xt&&Le.echoes===0?Rr===0?o():enqueueNativeMicroTask(o):setTimeout(o,0)}(""+ht).indexOf("[native code]")===-1&&(vn=Nt=ve);var Re=te.reject,en="￿",Ot="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ea="String expected.",xn=[],Pr="__dbnames",ss="readonly",os="readwrite";function tn(o,l){return o?l?function(){return o.apply(this,arguments)&&l.apply(this,arguments)}:o:l}var ta={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Lr(o){return typeof o!="string"||/\./.test(o)?function(l){return l}:function(l){return l[o]===void 0&&o in l&&delete(l=ue(l))[o],l}}function na(){throw ce.Type()}function be(o,l){try{var u=ra(o),h=ra(l);if(u!==h)return u==="Array"?1:h==="Array"?-1:u==="binary"?1:h==="binary"?-1:u==="string"?1:h==="string"?-1:u==="Date"?1:h!=="Date"?NaN:-1;switch(u){case"number":case"Date":case"string":return l<o?1:o<l?-1:0;case"binary":return(function(p,m){for(var w=p.length,v=m.length,S=w<v?w:v,T=0;T<S;++T)if(p[T]!==m[T])return p[T]<m[T]?-1:1;return w===v?0:w<v?-1:1})(ia(o),ia(l));case"Array":return(function(p,m){for(var w=p.length,v=m.length,S=w<v?w:v,T=0;T<S;++T){var R=be(p[T],m[T]);if(R!==0)return R}return w===v?0:w<v?-1:1})(o,l)}}catch{}return NaN}function ra(o){var l=typeof o;return l!="object"?l:ArrayBuffer.isView(o)?"binary":(o=Te(o),o==="ArrayBuffer"?"binary":o)}function ia(o){return o instanceof Uint8Array?o:ArrayBuffer.isView(o)?new Uint8Array(o.buffer,o.byteOffset,o.byteLength):new Uint8Array(o)}var sa=(ke.prototype._trans=function(o,l,u){var h=this._tx||le.trans,p=this.name,m=_t&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(o==="readonly"?"read":"write"," ").concat(this.name));function w(T,R,x){if(!x.schema[p])throw new ce.NotFound("Table "+p+" not part of transaction");return l(x.idbtrans,x)}var v=wn();try{var S=h&&h.db._novip===this.db._novip?h===le.trans?h._promise(o,w,u):jt(function(){return h._promise(o,w,u)},{trans:h,transless:le.transless||le}):(function T(R,x,P,E){if(R.idbdb&&(R._state.openComplete||le.letThrough||R._vip)){var A=R._createTransaction(x,P,R._dbSchema);try{A.create(),R._state.PR1398_maxLoop=3}catch(O){return O.name===Yi.InvalidState&&R.isOpen()&&0<--R._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),R.close({disableAutoOpen:!1}),R.open().then(function(){return T(R,x,P,E)})):Re(O)}return A._promise(x,function(O,I){return jt(function(){return le.trans=A,E(O,I,A)})}).then(function(O){if(x==="readwrite")try{A.idbtrans.commit()}catch{}return x==="readonly"?O:A._completion.then(function(){return O})})}if(R._state.openComplete)return Re(new ce.DatabaseClosed(R._state.dbOpenError));if(!R._state.isBeingOpened){if(!R._state.autoOpen)return Re(new ce.DatabaseClosed);R.open().catch(ve)}return R._state.dbReadyPromise.then(function(){return T(R,x,P,E)})})(this.db,o,[this.name],w);return m&&(S._consoleTask=m,S=S.catch(function(T){return console.trace(T),Re(T)})),S}finally{v&&yn()}},ke.prototype.get=function(o,l){var u=this;return o&&o.constructor===Object?this.where(o).first(l):o==null?Re(new ce.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return u.core.get({trans:h,key:o}).then(function(p){return u.hook.reading.fire(p)})}).then(l)},ke.prototype.where=function(o){if(typeof o=="string")return new this.db.WhereClause(this,o);if(c(o))return new this.db.WhereClause(this,"[".concat(o.join("+"),"]"));var l=a(o);if(l.length===1)return this.where(l[0]).equals(o[l[0]]);var u=this.schema.indexes.concat(this.schema.primKey).filter(function(v){if(v.compound&&l.every(function(T){return 0<=v.keyPath.indexOf(T)})){for(var S=0;S<l.length;++S)if(l.indexOf(v.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(v,S){return v.keyPath.length-S.keyPath.length})[0];if(u&&this.db._maxKey!==en){var m=u.keyPath.slice(0,l.length);return this.where(m).equals(m.map(function(S){return o[S]}))}!u&&_t&&console.warn("The query ".concat(JSON.stringify(o)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(l.join("+"),"]"));var h=this.schema.idxByName;function p(v,S){return be(v,S)===0}var w=l.reduce(function(x,S){var T=x[0],R=x[1],x=h[S],P=o[S];return[T||x,T||!x?tn(R,x&&x.multi?function(E){return E=W(E,S),c(E)&&E.some(function(A){return p(P,A)})}:function(E){return p(P,W(E,S))}):R]},[null,null]),m=w[0],w=w[1];return m?this.where(m.name).equals(o[m.keyPath]).filter(w):u?this.filter(w):this.where(l).equals("")},ke.prototype.filter=function(o){return this.toCollection().and(o)},ke.prototype.count=function(o){return this.toCollection().count(o)},ke.prototype.offset=function(o){return this.toCollection().offset(o)},ke.prototype.limit=function(o){return this.toCollection().limit(o)},ke.prototype.each=function(o){return this.toCollection().each(o)},ke.prototype.toArray=function(o){return this.toCollection().toArray(o)},ke.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},ke.prototype.orderBy=function(o){return new this.db.Collection(new this.db.WhereClause(this,c(o)?"[".concat(o.join("+"),"]"):o))},ke.prototype.reverse=function(){return this.toCollection().reverse()},ke.prototype.mapToClass=function(o){var l,u=this.db,h=this.name;function p(){return l!==null&&l.apply(this,arguments)||this}(this.schema.mappedClass=o).prototype instanceof na&&((function(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Class extends value "+String(T)+" is not a constructor or null");function R(){this.constructor=S}n(S,T),S.prototype=T===null?Object.create(T):(R.prototype=T.prototype,new R)})(p,l=o),Object.defineProperty(p.prototype,"db",{get:function(){return u},enumerable:!1,configurable:!0}),p.prototype.table=function(){return h},o=p);for(var m=new Set,w=o.prototype;w;w=f(w))Object.getOwnPropertyNames(w).forEach(function(S){return m.add(S)});function v(S){if(!S)return S;var T,R=Object.create(o.prototype);for(T in S)if(!m.has(T))try{R[T]=S[T]}catch{}return R}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=v,this.hook("reading",v),o},ke.prototype.defineClass=function(){return this.mapToClass(function(o){d(this,o)})},ke.prototype.add=function(o,l){var u=this,h=this.schema.primKey,p=h.auto,m=h.keyPath,w=o;return m&&p&&(w=Lr(m)(o)),this._trans("readwrite",function(v){return u.core.mutate({trans:v,type:"add",keys:l!=null?[l]:null,values:[w]})}).then(function(v){return v.numFailures?te.reject(v.failures[0]):v.lastResult}).then(function(v){if(m)try{q(o,m,v)}catch{}return v})},ke.prototype.update=function(o,l){return typeof o!="object"||c(o)?this.where(":id").equals(o).modify(l):(o=W(o,this.schema.primKey.keyPath),o===void 0?Re(new ce.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(o).modify(l))},ke.prototype.put=function(o,l){var u=this,h=this.schema.primKey,p=h.auto,m=h.keyPath,w=o;return m&&p&&(w=Lr(m)(o)),this._trans("readwrite",function(v){return u.core.mutate({trans:v,type:"put",values:[w],keys:l!=null?[l]:null})}).then(function(v){return v.numFailures?te.reject(v.failures[0]):v.lastResult}).then(function(v){if(m)try{q(o,m,v)}catch{}return v})},ke.prototype.delete=function(o){var l=this;return this._trans("readwrite",function(u){return l.core.mutate({trans:u,type:"delete",keys:[o]})}).then(function(u){return u.numFailures?te.reject(u.failures[0]):void 0})},ke.prototype.clear=function(){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"deleteRange",range:ta})}).then(function(l){return l.numFailures?te.reject(l.failures[0]):void 0})},ke.prototype.bulkGet=function(o){var l=this;return this._trans("readonly",function(u){return l.core.getMany({keys:o,trans:u}).then(function(h){return h.map(function(p){return l.hook.reading.fire(p)})})})},ke.prototype.bulkAdd=function(o,l,u){var h=this,p=Array.isArray(l)?l:void 0,m=(u=u||(p?void 0:l))?u.allKeys:void 0;return this._trans("readwrite",function(w){var T=h.schema.primKey,v=T.auto,T=T.keyPath;if(T&&p)throw new ce.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(p&&p.length!==o.length)throw new ce.InvalidArgument("Arguments objects and keys must have the same length");var S=o.length,T=T&&v?o.map(Lr(T)):o;return h.core.mutate({trans:w,type:"add",keys:p,values:T,wantResults:m}).then(function(A){var x=A.numFailures,P=A.results,E=A.lastResult,A=A.failures;if(x===0)return m?P:E;throw new bn("".concat(h.name,".bulkAdd(): ").concat(x," of ").concat(S," operations failed"),A)})})},ke.prototype.bulkPut=function(o,l,u){var h=this,p=Array.isArray(l)?l:void 0,m=(u=u||(p?void 0:l))?u.allKeys:void 0;return this._trans("readwrite",function(w){var T=h.schema.primKey,v=T.auto,T=T.keyPath;if(T&&p)throw new ce.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(p&&p.length!==o.length)throw new ce.InvalidArgument("Arguments objects and keys must have the same length");var S=o.length,T=T&&v?o.map(Lr(T)):o;return h.core.mutate({trans:w,type:"put",keys:p,values:T,wantResults:m}).then(function(A){var x=A.numFailures,P=A.results,E=A.lastResult,A=A.failures;if(x===0)return m?P:E;throw new bn("".concat(h.name,".bulkPut(): ").concat(x," of ").concat(S," operations failed"),A)})})},ke.prototype.bulkUpdate=function(o){var l=this,u=this.core,h=o.map(function(w){return w.key}),p=o.map(function(w){return w.changes}),m=[];return this._trans("readwrite",function(w){return u.getMany({trans:w,keys:h,cache:"clone"}).then(function(v){var S=[],T=[];o.forEach(function(x,P){var E=x.key,A=x.changes,O=v[P];if(O){for(var I=0,L=Object.keys(A);I<L.length;I++){var z=L[I],j=A[z];if(z===l.schema.primKey.keyPath){if(be(j,E)!==0)throw new ce.Constraint("Cannot update primary key in bulkUpdate()")}else q(O,z,j)}m.push(P),S.push(E),T.push(O)}});var R=S.length;return u.mutate({trans:w,type:"put",keys:S,values:T,updates:{keys:h,changeSpecs:p}}).then(function(x){var P=x.numFailures,E=x.failures;if(P===0)return R;for(var A=0,O=Object.keys(E);A<O.length;A++){var I,L=O[A],z=m[Number(L)];z!=null&&(I=E[L],delete E[L],E[z]=I)}throw new bn("".concat(l.name,".bulkUpdate(): ").concat(P," of ").concat(R," operations failed"),E)})})})},ke.prototype.bulkDelete=function(o){var l=this,u=o.length;return this._trans("readwrite",function(h){return l.core.mutate({trans:h,type:"delete",keys:o})}).then(function(w){var p=w.numFailures,m=w.lastResult,w=w.failures;if(p===0)return m;throw new bn("".concat(l.name,".bulkDelete(): ").concat(p," of ").concat(u," operations failed"),w)})},ke);function ke(){}function Vn(o){function l(w,v){if(v){for(var S=arguments.length,T=new Array(S-1);--S;)T[S-1]=arguments[S];return u[w].subscribe.apply(null,T),o}if(typeof w=="string")return u[w]}var u={};l.addEventType=m;for(var h=1,p=arguments.length;h<p;++h)m(arguments[h]);return l;function m(w,v,S){if(typeof w!="object"){var T;v=v||od;var R={subscribers:[],fire:S=S||ve,subscribe:function(x){R.subscribers.indexOf(x)===-1&&(R.subscribers.push(x),R.fire=v(R.fire,x))},unsubscribe:function(x){R.subscribers=R.subscribers.filter(function(P){return P!==x}),R.fire=R.subscribers.reduce(v,S)}};return u[w]=l[w]=R}a(T=w).forEach(function(x){var P=T[x];if(c(P))m(x,T[x][0],T[x][1]);else{if(P!=="asap")throw new ce.InvalidArgument("Invalid event config");var E=m(x,Fn,function(){for(var A=arguments.length,O=new Array(A);A--;)O[A]=arguments[A];E.subscribers.forEach(function(I){ne(function(){I.apply(null,O)})})})}})}}function Gn(o,l){return _(l).from({prototype:o}),l}function $n(o,l){return!(o.filter||o.algorithm||o.or)&&(l?o.justLimit:!o.replayFilter)}function as(o,l){o.filter=tn(o.filter,l)}function ls(o,l,u){var h=o.replayFilter;o.replayFilter=h?function(){return tn(h(),l())}:l,o.justLimit=u&&!h}function Mr(o,l){if(o.isPrimKey)return l.primaryKey;var u=l.getIndexByKeyPath(o.index);if(!u)throw new ce.Schema("KeyPath "+o.index+" on object store "+l.name+" is not indexed");return u}function oa(o,l,u){var h=Mr(o,l.schema);return l.openCursor({trans:u,values:!o.keysOnly,reverse:o.dir==="prev",unique:!!o.unique,query:{index:h,range:o.range}})}function zr(o,l,u,h){var p=o.replayFilter?tn(o.filter,o.replayFilter()):o.filter;if(o.or){var m={},w=function(v,S,T){var R,x;p&&!p(S,T,function(P){return S.stop(P)},function(P){return S.fail(P)})||((x=""+(R=S.primaryKey))=="[object ArrayBuffer]"&&(x=""+new Uint8Array(R)),b(m,x)||(m[x]=!0,l(v,S,T)))};return Promise.all([o.or._iterate(w,u),aa(oa(o,h,u),o.algorithm,w,!o.keysOnly&&o.valueMapper)])}return aa(oa(o,h,u),tn(o.algorithm,p),l,!o.keysOnly&&o.valueMapper)}function aa(o,l,u,h){var p=Ce(h?function(m,w,v){return u(h(m),w,v)}:u);return o.then(function(m){if(m)return m.start(function(){var w=function(){return m.continue()};l&&!l(m,function(v){return w=v},function(v){m.stop(v),w=ve},function(v){m.fail(v),w=ve})||p(m.value,m,function(v){return w=v}),w()})})}var Dt=Symbol(),Wn=(la.prototype.execute=function(o){if(this.add!==void 0){var l=this.add;if(c(l))return i(i([],c(o)?o:[],!0),l).sort();if(typeof l=="number")return(Number(o)||0)+l;if(typeof l=="bigint")try{return BigInt(o)+l}catch{return BigInt(0)+l}throw new TypeError("Invalid term ".concat(l))}if(this.remove!==void 0){var u=this.remove;if(c(u))return c(o)?o.filter(function(h){return!u.includes(h)}).sort():[];if(typeof u=="number")return Number(o)-u;if(typeof u=="bigint")try{return BigInt(o)-u}catch{return BigInt(0)-u}throw new TypeError("Invalid subtrahend ".concat(u))}return l=(l=this.replacePrefix)===null||l===void 0?void 0:l[0],l&&typeof o=="string"&&o.startsWith(l)?this.replacePrefix[1]+o.substring(l.length):o},la);function la(o){Object.assign(this,o)}var hd=(we.prototype._read=function(o,l){var u=this._ctx;return u.error?u.table._trans(null,Re.bind(null,u.error)):u.table._trans("readonly",o).then(l)},we.prototype._write=function(o){var l=this._ctx;return l.error?l.table._trans(null,Re.bind(null,l.error)):l.table._trans("readwrite",o,"locked")},we.prototype._addAlgorithm=function(o){var l=this._ctx;l.algorithm=tn(l.algorithm,o)},we.prototype._iterate=function(o,l){return zr(this._ctx,o,l,this._ctx.table.core)},we.prototype.clone=function(o){var l=Object.create(this.constructor.prototype),u=Object.create(this._ctx);return o&&d(u,o),l._ctx=u,l},we.prototype.raw=function(){return this._ctx.valueMapper=null,this},we.prototype.each=function(o){var l=this._ctx;return this._read(function(u){return zr(l,o,u,l.table.core)})},we.prototype.count=function(o){var l=this;return this._read(function(u){var h=l._ctx,p=h.table.core;if($n(h,!0))return p.count({trans:u,query:{index:Mr(h,p.schema),range:h.range}}).then(function(w){return Math.min(w,h.limit)});var m=0;return zr(h,function(){return++m,!1},u,p).then(function(){return m})}).then(o)},we.prototype.sortBy=function(o,l){var u=o.split(".").reverse(),h=u[0],p=u.length-1;function m(S,T){return T?m(S[u[T]],T-1):S[h]}var w=this._ctx.dir==="next"?1:-1;function v(S,T){return be(m(S,p),m(T,p))*w}return this.toArray(function(S){return S.sort(v)}).then(l)},we.prototype.toArray=function(o){var l=this;return this._read(function(u){var h=l._ctx;if(h.dir==="next"&&$n(h,!0)&&0<h.limit){var p=h.valueMapper,m=Mr(h,h.table.core.schema);return h.table.core.query({trans:u,limit:h.limit,values:!0,query:{index:m,range:h.range}}).then(function(v){return v=v.result,p?v.map(p):v})}var w=[];return zr(h,function(v){return w.push(v)},u,h.table.core).then(function(){return w})},o)},we.prototype.offset=function(o){var l=this._ctx;return o<=0||(l.offset+=o,$n(l)?ls(l,function(){var u=o;return function(h,p){return u===0||(u===1?--u:p(function(){h.advance(u),u=0}),!1)}}):ls(l,function(){var u=o;return function(){return--u<0}})),this},we.prototype.limit=function(o){return this._ctx.limit=Math.min(this._ctx.limit,o),ls(this._ctx,function(){var l=o;return function(u,h,p){return--l<=0&&h(p),0<=l}},!0),this},we.prototype.until=function(o,l){return as(this._ctx,function(u,h,p){return!o(u.value)||(h(p),l)}),this},we.prototype.first=function(o){return this.limit(1).toArray(function(l){return l[0]}).then(o)},we.prototype.last=function(o){return this.reverse().first(o)},we.prototype.filter=function(o){var l;return as(this._ctx,function(u){return o(u.value)}),(l=this._ctx).isMatch=tn(l.isMatch,o),this},we.prototype.and=function(o){return this.filter(o)},we.prototype.or=function(o){return new this.db.WhereClause(this._ctx.table,o,this)},we.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},we.prototype.desc=function(){return this.reverse()},we.prototype.eachKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(u,h){o(h.key,h)})},we.prototype.eachUniqueKey=function(o){return this._ctx.unique="unique",this.eachKey(o)},we.prototype.eachPrimaryKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(u,h){o(h.primaryKey,h)})},we.prototype.keys=function(o){var l=this._ctx;l.keysOnly=!l.isMatch;var u=[];return this.each(function(h,p){u.push(p.key)}).then(function(){return u}).then(o)},we.prototype.primaryKeys=function(o){var l=this._ctx;if(l.dir==="next"&&$n(l,!0)&&0<l.limit)return this._read(function(h){var p=Mr(l,l.table.core.schema);return l.table.core.query({trans:h,values:!1,limit:l.limit,query:{index:p,range:l.range}})}).then(function(h){return h.result}).then(o);l.keysOnly=!l.isMatch;var u=[];return this.each(function(h,p){u.push(p.primaryKey)}).then(function(){return u}).then(o)},we.prototype.uniqueKeys=function(o){return this._ctx.unique="unique",this.keys(o)},we.prototype.firstKey=function(o){return this.limit(1).keys(function(l){return l[0]}).then(o)},we.prototype.lastKey=function(o){return this.reverse().firstKey(o)},we.prototype.distinct=function(){var o=this._ctx,o=o.index&&o.table.schema.idxByName[o.index];if(!o||!o.multi)return this;var l={};return as(this._ctx,function(p){var h=p.primaryKey.toString(),p=b(l,h);return l[h]=!0,!p}),this},we.prototype.modify=function(o){var l=this,u=this._ctx;return this._write(function(h){var p,m,w;w=typeof o=="function"?o:(p=a(o),m=p.length,function(I){for(var L=!1,z=0;z<m;++z){var j=p[z],F=o[j],V=W(I,j);F instanceof Wn?(q(I,j,F.execute(V)),L=!0):V!==F&&(q(I,j,F),L=!0)}return L});var v=u.table.core,x=v.schema.primaryKey,S=x.outbound,T=x.extractKey,R=200,x=l.db._options.modifyChunkSize;x&&(R=typeof x=="object"?x[v.name]||x["*"]||200:x);function P(I,j){var z=j.failures,j=j.numFailures;A+=I-j;for(var F=0,V=a(z);F<V.length;F++){var Z=V[F];E.push(z[Z])}}var E=[],A=0,O=[];return l.clone().primaryKeys().then(function(I){function L(j){var F=Math.min(R,I.length-j);return v.getMany({trans:h,keys:I.slice(j,j+F),cache:"immutable"}).then(function(V){for(var Z=[],G=[],X=S?[]:null,ee=[],J=0;J<F;++J){var ie=V[J],pe={value:ue(ie),primKey:I[j+J]};w.call(pe,pe.value,pe)!==!1&&(pe.value==null?ee.push(I[j+J]):S||be(T(ie),T(pe.value))===0?(G.push(pe.value),S&&X.push(I[j+J])):(ee.push(I[j+J]),Z.push(pe.value)))}return Promise.resolve(0<Z.length&&v.mutate({trans:h,type:"add",values:Z}).then(function(fe){for(var me in fe.failures)ee.splice(parseInt(me),1);P(Z.length,fe)})).then(function(){return(0<G.length||z&&typeof o=="object")&&v.mutate({trans:h,type:"put",keys:X,values:G,criteria:z,changeSpec:typeof o!="function"&&o,isAdditionalChunk:0<j}).then(function(fe){return P(G.length,fe)})}).then(function(){return(0<ee.length||z&&o===cs)&&v.mutate({trans:h,type:"delete",keys:ee,criteria:z,isAdditionalChunk:0<j}).then(function(fe){return P(ee.length,fe)})}).then(function(){return I.length>j+F&&L(j+R)})})}var z=$n(u)&&u.limit===1/0&&(typeof o!="function"||o===cs)&&{index:u.index,range:u.range};return L(0).then(function(){if(0<E.length)throw new gn("Error modifying one or more objects",E,A,O);return I.length})})})},we.prototype.delete=function(){var o=this._ctx,l=o.range;return $n(o)&&(o.isPrimKey||l.type===3)?this._write(function(u){var h=o.table.core.schema.primaryKey,p=l;return o.table.core.count({trans:u,query:{index:h,range:p}}).then(function(m){return o.table.core.mutate({trans:u,type:"deleteRange",range:p}).then(function(w){var v=w.failures;if(w.lastResult,w.results,w=w.numFailures,w)throw new gn("Could not delete some values",Object.keys(v).map(function(S){return v[S]}),m-w);return m-w})})}):this.modify(cs)},we);function we(){}var cs=function(o,l){return l.value=null};function pd(o,l){return o<l?-1:o===l?0:1}function fd(o,l){return l<o?-1:o===l?0:1}function et(o,l,u){return o=o instanceof ua?new o.Collection(o):o,o._ctx.error=new(u||TypeError)(l),o}function kn(o){return new o.Collection(o,function(){return ca("")}).limit(0)}function jr(o,l,u,h){var p,m,w,v,S,T,R,x=u.length;if(!u.every(function(A){return typeof A=="string"}))return et(o,ea);function P(A){p=A==="next"?function(I){return I.toUpperCase()}:function(I){return I.toLowerCase()},m=A==="next"?function(I){return I.toLowerCase()}:function(I){return I.toUpperCase()},w=A==="next"?pd:fd;var O=u.map(function(I){return{lower:m(I),upper:p(I)}}).sort(function(I,L){return w(I.lower,L.lower)});v=O.map(function(I){return I.upper}),S=O.map(function(I){return I.lower}),R=(T=A)==="next"?"":h}P("next"),o=new o.Collection(o,function(){return Ft(v[0],S[x-1]+h)}),o._ondirectionchange=function(A){P(A)};var E=0;return o._addAlgorithm(function(A,O,I){var L=A.key;if(typeof L!="string")return!1;var z=m(L);if(l(z,S,E))return!0;for(var j=null,F=E;F<x;++F){var V=(function(Z,G,X,ee,J,ie){for(var pe=Math.min(Z.length,ee.length),fe=-1,me=0;me<pe;++me){var tt=G[me];if(tt!==ee[me])return J(Z[me],X[me])<0?Z.substr(0,me)+X[me]+X.substr(me+1):J(Z[me],ee[me])<0?Z.substr(0,me)+ee[me]+X.substr(me+1):0<=fe?Z.substr(0,fe)+G[fe]+X.substr(fe+1):null;J(Z[me],tt)<0&&(fe=me)}return pe<ee.length&&ie==="next"?Z+X.substr(Z.length):pe<Z.length&&ie==="prev"?Z.substr(0,X.length):fe<0?null:Z.substr(0,fe)+ee[fe]+X.substr(fe+1)})(L,z,v[F],S[F],w,T);V===null&&j===null?E=F+1:(j===null||0<w(j,V))&&(j=V)}return O(j!==null?function(){A.continue(j+R)}:I),!1}),o}function Ft(o,l,u,h){return{type:2,lower:o,upper:l,lowerOpen:u,upperOpen:h}}function ca(o){return{type:1,lower:o,upper:o}}var ua=(Object.defineProperty(Me.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Me.prototype.between=function(o,l,u,h){u=u!==!1,h=h===!0;try{return 0<this._cmp(o,l)||this._cmp(o,l)===0&&(u||h)&&(!u||!h)?kn(this):new this.Collection(this,function(){return Ft(o,l,!u,!h)})}catch{return et(this,Ot)}},Me.prototype.equals=function(o){return o==null?et(this,Ot):new this.Collection(this,function(){return ca(o)})},Me.prototype.above=function(o){return o==null?et(this,Ot):new this.Collection(this,function(){return Ft(o,void 0,!0)})},Me.prototype.aboveOrEqual=function(o){return o==null?et(this,Ot):new this.Collection(this,function(){return Ft(o,void 0,!1)})},Me.prototype.below=function(o){return o==null?et(this,Ot):new this.Collection(this,function(){return Ft(void 0,o,!1,!0)})},Me.prototype.belowOrEqual=function(o){return o==null?et(this,Ot):new this.Collection(this,function(){return Ft(void 0,o)})},Me.prototype.startsWith=function(o){return typeof o!="string"?et(this,ea):this.between(o,o+en,!0,!0)},Me.prototype.startsWithIgnoreCase=function(o){return o===""?this.startsWith(o):jr(this,function(l,u){return l.indexOf(u[0])===0},[o],en)},Me.prototype.equalsIgnoreCase=function(o){return jr(this,function(l,u){return l===u[0]},[o],"")},Me.prototype.anyOfIgnoreCase=function(){var o=Ae.apply(Pe,arguments);return o.length===0?kn(this):jr(this,function(l,u){return u.indexOf(l)!==-1},o,"")},Me.prototype.startsWithAnyOfIgnoreCase=function(){var o=Ae.apply(Pe,arguments);return o.length===0?kn(this):jr(this,function(l,u){return u.some(function(h){return l.indexOf(h)===0})},o,en)},Me.prototype.anyOf=function(){var o=this,l=Ae.apply(Pe,arguments),u=this._cmp;try{l.sort(u)}catch{return et(this,Ot)}if(l.length===0)return kn(this);var h=new this.Collection(this,function(){return Ft(l[0],l[l.length-1])});h._ondirectionchange=function(m){u=m==="next"?o._ascending:o._descending,l.sort(u)};var p=0;return h._addAlgorithm(function(m,w,v){for(var S=m.key;0<u(S,l[p]);)if(++p===l.length)return w(v),!1;return u(S,l[p])===0||(w(function(){m.continue(l[p])}),!1)}),h},Me.prototype.notEqual=function(o){return this.inAnyRange([[-1/0,o],[o,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Me.prototype.noneOf=function(){var o=Ae.apply(Pe,arguments);if(o.length===0)return new this.Collection(this);try{o.sort(this._ascending)}catch{return et(this,Ot)}var l=o.reduce(function(u,h){return u?u.concat([[u[u.length-1][1],h]]):[[-1/0,h]]},null);return l.push([o[o.length-1],this.db._maxKey]),this.inAnyRange(l,{includeLowers:!1,includeUppers:!1})},Me.prototype.inAnyRange=function(L,l){var u=this,h=this._cmp,p=this._ascending,m=this._descending,w=this._min,v=this._max;if(L.length===0)return kn(this);if(!L.every(function(z){return z[0]!==void 0&&z[1]!==void 0&&p(z[0],z[1])<=0}))return et(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ce.InvalidArgument);var S=!l||l.includeLowers!==!1,T=l&&l.includeUppers===!0,R,x=p;function P(z,j){return x(z[0],j[0])}try{(R=L.reduce(function(z,j){for(var F=0,V=z.length;F<V;++F){var Z=z[F];if(h(j[0],Z[1])<0&&0<h(j[1],Z[0])){Z[0]=w(Z[0],j[0]),Z[1]=v(Z[1],j[1]);break}}return F===V&&z.push(j),z},[])).sort(P)}catch{return et(this,Ot)}var E=0,A=T?function(z){return 0<p(z,R[E][1])}:function(z){return 0<=p(z,R[E][1])},O=S?function(z){return 0<m(z,R[E][0])}:function(z){return 0<=m(z,R[E][0])},I=A,L=new this.Collection(this,function(){return Ft(R[0][0],R[R.length-1][1],!S,!T)});return L._ondirectionchange=function(z){x=z==="next"?(I=A,p):(I=O,m),R.sort(P)},L._addAlgorithm(function(z,j,F){for(var V,Z=z.key;I(Z);)if(++E===R.length)return j(F),!1;return!A(V=Z)&&!O(V)||(u._cmp(Z,R[E][1])===0||u._cmp(Z,R[E][0])===0||j(function(){x===p?z.continue(R[E][0]):z.continue(R[E][1])}),!1)}),L},Me.prototype.startsWithAnyOf=function(){var o=Ae.apply(Pe,arguments);return o.every(function(l){return typeof l=="string"})?o.length===0?kn(this):this.inAnyRange(o.map(function(l){return[l,l+en]})):et(this,"startsWithAnyOf() only works with strings")},Me);function Me(){}function Ct(o){return Ce(function(l){return Yn(l),o(l.target.error),!1})}function Yn(o){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault()}var Xn="storagemutated",us="x-storagemutated-1",Bt=Vn(null,Xn),md=(St.prototype._lock=function(){return Q(!le.global),++this._reculock,this._reculock!==1||le.global||(le.lockOwnerFor=this),this},St.prototype._unlock=function(){if(Q(!le.global),--this._reculock==0)for(le.global||(le.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var o=this._blockedFuncs.shift();try{Zt(o[1],o[0])}catch{}}return this},St.prototype._locked=function(){return this._reculock&&le.lockOwnerFor!==this},St.prototype.create=function(o){var l=this;if(!this.mode)return this;var u=this.db.idbdb,h=this.db._state.dbOpenError;if(Q(!this.idbtrans),!o&&!u)switch(h&&h.name){case"DatabaseClosedError":throw new ce.DatabaseClosed(h);case"MissingAPIError":throw new ce.MissingAPI(h.message,h);default:throw new ce.OpenFailed(h)}if(!this.active)throw new ce.TransactionInactive;return Q(this._completion._state===null),(o=this.idbtrans=o||(this.db.core||u).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ce(function(p){Yn(p),l._reject(o.error)}),o.onabort=Ce(function(p){Yn(p),l.active&&l._reject(new ce.Abort(o.error)),l.active=!1,l.on("abort").fire(p)}),o.oncomplete=Ce(function(){l.active=!1,l._resolve(),"mutatedParts"in o&&Bt.storagemutated.fire(o.mutatedParts)}),this},St.prototype._promise=function(o,l,u){var h=this;if(o==="readwrite"&&this.mode!=="readwrite")return Re(new ce.ReadOnly("Transaction is readonly"));if(!this.active)return Re(new ce.TransactionInactive);if(this._locked())return new te(function(m,w){h._blockedFuncs.push([function(){h._promise(o,l,u).then(m,w)},le])});if(u)return jt(function(){var m=new te(function(w,v){h._lock();var S=l(w,v,h);S&&S.then&&S.then(w,v)});return m.finally(function(){return h._unlock()}),m._lib=!0,m});var p=new te(function(m,w){var v=l(m,w,h);v&&v.then&&v.then(m,w)});return p._lib=!0,p},St.prototype._root=function(){return this.parent?this.parent._root():this},St.prototype.waitFor=function(o){var l,u=this._root(),h=te.resolve(o);u._waitingFor?u._waitingFor=u._waitingFor.then(function(){return h}):(u._waitingFor=h,u._waitingQueue=[],l=u.idbtrans.objectStore(u.storeNames[0]),(function m(){for(++u._spinCount;u._waitingQueue.length;)u._waitingQueue.shift()();u._waitingFor&&(l.get(-1/0).onsuccess=m)})());var p=u._waitingFor;return new te(function(m,w){h.then(function(v){return u._waitingQueue.push(Ce(m.bind(null,v)))},function(v){return u._waitingQueue.push(Ce(w.bind(null,v)))}).finally(function(){u._waitingFor===p&&(u._waitingFor=null)})})},St.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ce.Abort))},St.prototype.table=function(o){var l=this._memoizedTables||(this._memoizedTables={});if(b(l,o))return l[o];var u=this.schema[o];if(!u)throw new ce.NotFound("Table "+o+" not part of transaction");return u=new this.db.Table(o,u,this),u.core=this.db.core.table(o),l[o]=u},St);function St(){}function ds(o,l,u,h,p,m,w){return{name:o,keyPath:l,unique:u,multi:h,auto:p,compound:m,src:(u&&!w?"&":"")+(h?"*":"")+(p?"++":"")+da(l)}}function da(o){return typeof o=="string"?o:o?"["+[].join.call(o,"+")+"]":""}function hs(o,l,u){return{name:o,primKey:l,indexes:u,mappedClass:null,idxByName:(h=function(p){return[p.name,p]},u.reduce(function(p,m,w){return w=h(m,w),w&&(p[w[0]]=w[1]),p},{}))};var h}var Qn=function(o){try{return o.only([[]]),Qn=function(){return[[]]},[[]]}catch{return Qn=function(){return en},en}};function ps(o){return o==null?function(){}:typeof o=="string"?(l=o).split(".").length===1?function(u){return u[l]}:function(u){return W(u,l)}:function(u){return W(u,o)};var l}function ha(o){return[].slice.call(o)}var gd=0;function Jn(o){return o==null?":id":typeof o=="string"?o:"[".concat(o.join("+"),"]")}function bd(o,l,S){function h(I){if(I.type===3)return null;if(I.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=I.lower,A=I.upper,O=I.lowerOpen,I=I.upperOpen;return E===void 0?A===void 0?null:l.upperBound(A,!!I):A===void 0?l.lowerBound(E,!!O):l.bound(E,A,!!O,!!I)}function p(P){var E,A=P.name;return{name:A,schema:P,mutate:function(O){var I=O.trans,L=O.type,z=O.keys,j=O.values,F=O.range;return new Promise(function(V,Z){V=Ce(V);var G=I.objectStore(A),X=G.keyPath==null,ee=L==="put"||L==="add";if(!ee&&L!=="delete"&&L!=="deleteRange")throw new Error("Invalid operation type: "+L);var J,ie=(z||j||{length:1}).length;if(z&&j&&z.length!==j.length)throw new Error("Given keys array must have same length as given values array.");if(ie===0)return V({numFailures:0,failures:{},results:[],lastResult:void 0});function pe(Ve){++tt,Yn(Ve)}var fe=[],me=[],tt=0;if(L==="deleteRange"){if(F.type===4)return V({numFailures:tt,failures:me,results:[],lastResult:void 0});F.type===3?fe.push(J=G.clear()):fe.push(J=G.delete(h(F)))}else{var X=ee?X?[j,z]:[j,null]:[z,null],he=X[0],qe=X[1];if(ee)for(var Ke=0;Ke<ie;++Ke)fe.push(J=qe&&qe[Ke]!==void 0?G[L](he[Ke],qe[Ke]):G[L](he[Ke])),J.onerror=pe;else for(Ke=0;Ke<ie;++Ke)fe.push(J=G[L](he[Ke])),J.onerror=pe}function Qr(Ve){Ve=Ve.target.result,fe.forEach(function(sn,Rs){return sn.error!=null&&(me[Rs]=sn.error)}),V({numFailures:tt,failures:me,results:L==="delete"?z:fe.map(function(sn){return sn.result}),lastResult:Ve})}J.onerror=function(Ve){pe(Ve),Qr(Ve)},J.onsuccess=Qr})},getMany:function(O){var I=O.trans,L=O.keys;return new Promise(function(z,j){z=Ce(z);for(var F,V=I.objectStore(A),Z=L.length,G=new Array(Z),X=0,ee=0,J=function(fe){fe=fe.target,G[fe._pos]=fe.result,++ee===X&&z(G)},ie=Ct(j),pe=0;pe<Z;++pe)L[pe]!=null&&((F=V.get(L[pe]))._pos=pe,F.onsuccess=J,F.onerror=ie,++X);X===0&&z(G)})},get:function(O){var I=O.trans,L=O.key;return new Promise(function(z,j){z=Ce(z);var F=I.objectStore(A).get(L);F.onsuccess=function(V){return z(V.target.result)},F.onerror=Ct(j)})},query:(E=T,function(O){return new Promise(function(I,L){I=Ce(I);var z,j,F,X=O.trans,V=O.values,Z=O.limit,J=O.query,G=Z===1/0?void 0:Z,ee=J.index,J=J.range,X=X.objectStore(A),ee=ee.isPrimaryKey?X:X.index(ee.name),J=h(J);if(Z===0)return I({result:[]});E?((G=V?ee.getAll(J,G):ee.getAllKeys(J,G)).onsuccess=function(ie){return I({result:ie.target.result})},G.onerror=Ct(L)):(z=0,j=!V&&"openKeyCursor"in ee?ee.openKeyCursor(J):ee.openCursor(J),F=[],j.onsuccess=function(ie){var pe=j.result;return pe?(F.push(V?pe.value:pe.primaryKey),++z===Z?I({result:F}):void pe.continue()):I({result:F})},j.onerror=Ct(L))})}),openCursor:function(O){var I=O.trans,L=O.values,z=O.query,j=O.reverse,F=O.unique;return new Promise(function(V,Z){V=Ce(V);var ee=z.index,G=z.range,X=I.objectStore(A),X=ee.isPrimaryKey?X:X.index(ee.name),ee=j?F?"prevunique":"prev":F?"nextunique":"next",J=!L&&"openKeyCursor"in X?X.openKeyCursor(h(G),ee):X.openCursor(h(G),ee);J.onerror=Ct(Z),J.onsuccess=Ce(function(ie){var pe,fe,me,tt,he=J.result;he?(he.___id=++gd,he.done=!1,pe=he.continue.bind(he),fe=(fe=he.continuePrimaryKey)&&fe.bind(he),me=he.advance.bind(he),tt=function(){throw new Error("Cursor not stopped")},he.trans=I,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Ce(Z),he.next=function(){var qe=this,Ke=1;return this.start(function(){return Ke--?qe.continue():qe.stop()}).then(function(){return qe})},he.start=function(qe){function Ke(){if(J.result)try{qe()}catch(Ve){he.fail(Ve)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var Qr=new Promise(function(Ve,sn){Ve=Ce(Ve),J.onerror=Ct(sn),he.fail=sn,he.stop=function(Rs){he.stop=he.continue=he.continuePrimaryKey=he.advance=tt,Ve(Rs)}});return J.onsuccess=Ce(function(Ve){J.onsuccess=Ke,Ke()}),he.continue=pe,he.continuePrimaryKey=fe,he.advance=me,Ke(),Qr},V(he)):V(null)},Z)})},count:function(O){var I=O.query,L=O.trans,z=I.index,j=I.range;return new Promise(function(F,V){var Z=L.objectStore(A),G=z.isPrimaryKey?Z:Z.index(z.name),Z=h(j),G=Z?G.count(Z):G.count();G.onsuccess=Ce(function(X){return F(X.target.result)}),G.onerror=Ct(V)})}}}var m,w,v,R=(w=S,v=ha((m=o).objectStoreNames),{schema:{name:m.name,tables:v.map(function(P){return w.objectStore(P)}).map(function(P){var E=P.keyPath,I=P.autoIncrement,A=c(E),O={},I={name:P.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:A,keyPath:E,autoIncrement:I,unique:!0,extractKey:ps(E)},indexes:ha(P.indexNames).map(function(L){return P.index(L)}).map(function(F){var z=F.name,j=F.unique,V=F.multiEntry,F=F.keyPath,V={name:z,compound:c(F),keyPath:F,unique:j,multiEntry:V,extractKey:ps(F)};return O[Jn(F)]=V}),getIndexByKeyPath:function(L){return O[Jn(L)]}};return O[":id"]=I.primaryKey,E!=null&&(O[Jn(E)]=I.primaryKey),I})},hasGetAll:0<v.length&&"getAll"in w.objectStore(v[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=R.schema,T=R.hasGetAll,R=S.tables.map(p),x={};return R.forEach(function(P){return x[P.name]=P}),{stack:"dbcore",transaction:o.transaction.bind(o),table:function(P){if(!x[P])throw new Error("Table '".concat(P,"' not found"));return x[P]},MIN_KEY:-1/0,MAX_KEY:Qn(l),schema:S}}function wd(o,l,u,h){var p=u.IDBKeyRange;return u.indexedDB,{dbcore:(h=bd(l,p,h),o.dbcore.reduce(function(m,w){return w=w.create,r(r({},m),w(m))},h))}}function Nr(o,h){var u=h.db,h=wd(o._middlewares,u,o._deps,h);o.core=h.dbcore,o.tables.forEach(function(p){var m=p.name;o.core.schema.tables.some(function(w){return w.name===m})&&(p.core=o.core.table(m),o[m]instanceof o.Table&&(o[m].core=p.core))})}function Ur(o,l,u,h){u.forEach(function(p){var m=h[p];l.forEach(function(w){var v=(function S(T,R){return D(T,R)||(T=f(T))&&S(T,R)})(w,p);(!v||"value"in v&&v.value===void 0)&&(w===o.Transaction.prototype||w instanceof o.Transaction?C(w,p,{get:function(){return this.table(p)},set:function(S){k(this,p,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):w[p]=new o.Table(p,m))})})}function fs(o,l){l.forEach(function(u){for(var h in u)u[h]instanceof o.Table&&delete u[h]})}function yd(o,l){return o._cfg.version-l._cfg.version}function vd(o,l,u,h){var p=o._dbSchema;u.objectStoreNames.contains("$meta")&&!p.$meta&&(p.$meta=hs("$meta",fa("")[0],[]),o._storeNames.push("$meta"));var m=o._createTransaction("readwrite",o._storeNames,p);m.create(u),m._completion.catch(h);var w=m._reject.bind(m),v=le.transless||le;jt(function(){return le.trans=m,le.transless=v,l!==0?(Nr(o,u),T=l,((S=m).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(R){return R??T}):te.resolve(T)).then(function(R){return P=R,E=m,A=u,O=[],R=(x=o)._versions,I=x._dbSchema=Br(0,x.idbdb,A),(R=R.filter(function(L){return L._cfg.version>=P})).length!==0?(R.forEach(function(L){O.push(function(){var z=I,j=L._cfg.dbschema;Hr(x,z,A),Hr(x,j,A),I=x._dbSchema=j;var F=ms(z,j);F.add.forEach(function(ee){gs(A,ee[0],ee[1].primKey,ee[1].indexes)}),F.change.forEach(function(ee){if(ee.recreate)throw new ce.Upgrade("Not yet support for changing primary key");var J=A.objectStore(ee.name);ee.add.forEach(function(ie){return Fr(J,ie)}),ee.change.forEach(function(ie){J.deleteIndex(ie.name),Fr(J,ie)}),ee.del.forEach(function(ie){return J.deleteIndex(ie)})});var V=L._cfg.contentUpgrade;if(V&&L._cfg.version>P){Nr(x,A),E._memoizedTables={};var Z=Y(j);F.del.forEach(function(ee){Z[ee]=z[ee]}),fs(x,[x.Transaction.prototype]),Ur(x,[x.Transaction.prototype],a(Z),Z),E.schema=Z;var G,X=Ze(V);return X&&vn(),F=te.follow(function(){var ee;(G=V(E))&&X&&(ee=Nt.bind(null,null),G.then(ee,ee))}),G&&typeof G.then=="function"?te.resolve(G):F.then(function(){return G})}}),O.push(function(z){var j,F,V=L._cfg.dbschema;j=V,F=z,[].slice.call(F.db.objectStoreNames).forEach(function(Z){return j[Z]==null&&F.db.deleteObjectStore(Z)}),fs(x,[x.Transaction.prototype]),Ur(x,[x.Transaction.prototype],x._storeNames,x._dbSchema),E.schema=x._dbSchema}),O.push(function(z){x.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(x.idbdb.version/10)===L._cfg.version?(x.idbdb.deleteObjectStore("$meta"),delete x._dbSchema.$meta,x._storeNames=x._storeNames.filter(function(j){return j!=="$meta"})):z.objectStore("$meta").put(L._cfg.version,"version"))})}),(function L(){return O.length?te.resolve(O.shift()(E.idbtrans)).then(L):te.resolve()})().then(function(){pa(I,A)})):te.resolve();var x,P,E,A,O,I}).catch(w)):(a(p).forEach(function(R){gs(u,R,p[R].primKey,p[R].indexes)}),Nr(o,u),void te.follow(function(){return o.on.populate.fire(m)}).catch(w));var S,T})}function xd(o,l){pa(o._dbSchema,l),l.db.version%10!=0||l.objectStoreNames.contains("$meta")||l.db.createObjectStore("$meta").add(Math.ceil(l.db.version/10-1),"version");var u=Br(0,o.idbdb,l);Hr(o,o._dbSchema,l);for(var h=0,p=ms(u,o._dbSchema).change;h<p.length;h++){var m=(function(w){if(w.change.length||w.recreate)return console.warn("Unable to patch indexes of table ".concat(w.name," because it has changes on the type of index or primary key.")),{value:void 0};var v=l.objectStore(w.name);w.add.forEach(function(S){_t&&console.debug("Dexie upgrade patch: Creating missing index ".concat(w.name,".").concat(S.src)),Fr(v,S)})})(p[h]);if(typeof m=="object")return m.value}}function ms(o,l){var u,h={del:[],add:[],change:[]};for(u in o)l[u]||h.del.push(u);for(u in l){var p=o[u],m=l[u];if(p){var w={name:u,def:m,recreate:!1,del:[],add:[],change:[]};if(""+(p.primKey.keyPath||"")!=""+(m.primKey.keyPath||"")||p.primKey.auto!==m.primKey.auto)w.recreate=!0,h.change.push(w);else{var v=p.idxByName,S=m.idxByName,T=void 0;for(T in v)S[T]||w.del.push(T);for(T in S){var R=v[T],x=S[T];R?R.src!==x.src&&w.change.push(x):w.add.push(x)}(0<w.del.length||0<w.add.length||0<w.change.length)&&h.change.push(w)}}else h.add.push([u,m])}return h}function gs(o,l,u,h){var p=o.db.createObjectStore(l,u.keyPath?{keyPath:u.keyPath,autoIncrement:u.auto}:{autoIncrement:u.auto});return h.forEach(function(m){return Fr(p,m)}),p}function pa(o,l){a(o).forEach(function(u){l.db.objectStoreNames.contains(u)||(_t&&console.debug("Dexie: Creating missing table",u),gs(l,u,o[u].primKey,o[u].indexes))})}function Fr(o,l){o.createIndex(l.name,l.keyPath,{unique:l.unique,multiEntry:l.multi})}function Br(o,l,u){var h={};return U(l.objectStoreNames,0).forEach(function(p){for(var m=u.objectStore(p),w=ds(da(T=m.keyPath),T||"",!0,!1,!!m.autoIncrement,T&&typeof T!="string",!0),v=[],S=0;S<m.indexNames.length;++S){var R=m.index(m.indexNames[S]),T=R.keyPath,R=ds(R.name,T,!!R.unique,!!R.multiEntry,!1,T&&typeof T!="string",!1);v.push(R)}h[p]=hs(p,w,v)}),h}function Hr(o,l,u){for(var h=u.db.objectStoreNames,p=0;p<h.length;++p){var m=h[p],w=u.objectStore(m);o._hasGetAll="getAll"in w;for(var v=0;v<w.indexNames.length;++v){var S=w.indexNames[v],T=w.index(S).keyPath,R=typeof T=="string"?T:"["+U(T).join("+")+"]";!l[m]||(T=l[m].idxByName[R])&&(T.name=S,delete l[m].idxByName[R],l[m].idxByName[S]=T)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(o._hasGetAll=!1)}function fa(o){return o.split(",").map(function(l,u){var h=(l=l.trim()).replace(/([&*]|\+\+)/g,""),p=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return ds(h,p||null,/\&/.test(l),/\*/.test(l),/\+\+/.test(l),c(p),u===0)})}var $d=(qr.prototype._parseStoresSpec=function(o,l){a(o).forEach(function(u){if(o[u]!==null){var h=fa(o[u]),p=h.shift();if(p.unique=!0,p.multi)throw new ce.Schema("Primary key cannot be multi-valued");h.forEach(function(m){if(m.auto)throw new ce.Schema("Only primary key can be marked as autoIncrement (++)");if(!m.keyPath)throw new ce.Schema("Index must have a name and cannot be an empty string")}),l[u]=hs(u,p,h)}})},qr.prototype.stores=function(u){var l=this.db;this._cfg.storesSource=this._cfg.storesSource?d(this._cfg.storesSource,u):u;var u=l._versions,h={},p={};return u.forEach(function(m){d(h,m._cfg.storesSource),p=m._cfg.dbschema={},m._parseStoresSpec(h,p)}),l._dbSchema=p,fs(l,[l._allTables,l,l.Transaction.prototype]),Ur(l,[l._allTables,l,l.Transaction.prototype,this._cfg.tables],a(p),p),l._storeNames=a(p),this},qr.prototype.upgrade=function(o){return this._cfg.contentUpgrade=Xi(this._cfg.contentUpgrade||ve,o),this},qr);function qr(){}function bs(o,l){var u=o._dbNamesDB;return u||(u=o._dbNamesDB=new Pt(Pr,{addons:[],indexedDB:o,IDBKeyRange:l})).version(1).stores({dbnames:"name"}),u.table("dbnames")}function ws(o){return o&&typeof o.databases=="function"}function ys(o){return jt(function(){return le.letThrough=!0,o()})}function vs(o){return!("from"in o)}var He=function(o,l){if(!this){var u=new He;return o&&"d"in o&&d(u,o),u}d(this,arguments.length?{d:1,from:o,to:1<arguments.length?l:o}:{d:0})};function Zn(o,l,u){var h=be(l,u);if(!isNaN(h)){if(0<h)throw RangeError();if(vs(o))return d(o,{from:l,to:u,d:1});var p=o.l,h=o.r;if(be(u,o.from)<0)return p?Zn(p,l,u):o.l={from:l,to:u,d:1,l:null,r:null},ga(o);if(0<be(l,o.to))return h?Zn(h,l,u):o.r={from:l,to:u,d:1,l:null,r:null},ga(o);be(l,o.from)<0&&(o.from=l,o.l=null,o.d=h?h.d+1:1),0<be(u,o.to)&&(o.to=u,o.r=null,o.d=o.l?o.l.d+1:1),u=!o.r,p&&!o.l&&er(o,p),h&&u&&er(o,h)}}function er(o,l){vs(l)||(function u(h,S){var m=S.from,w=S.to,v=S.l,S=S.r;Zn(h,m,w),v&&u(h,v),S&&u(h,S)})(o,l)}function ma(o,l){var u=Kr(l),h=u.next();if(h.done)return!1;for(var p=h.value,m=Kr(o),w=m.next(p.from),v=w.value;!h.done&&!w.done;){if(be(v.from,p.to)<=0&&0<=be(v.to,p.from))return!0;be(p.from,v.from)<0?p=(h=u.next(v.from)).value:v=(w=m.next(p.from)).value}return!1}function Kr(o){var l=vs(o)?null:{s:0,n:o};return{next:function(u){for(var h=0<arguments.length;l;)switch(l.s){case 0:if(l.s=1,h)for(;l.n.l&&be(u,l.n.from)<0;)l={up:l,n:l.n.l,s:1};else for(;l.n.l;)l={up:l,n:l.n.l,s:1};case 1:if(l.s=2,!h||be(u,l.n.to)<=0)return{value:l.n,done:!1};case 2:if(l.n.r){l.s=3,l={up:l,n:l.n.r,s:0};continue}case 3:l=l.up}return{done:!0}}}}function ga(o){var l,u,h=(((l=o.r)===null||l===void 0?void 0:l.d)||0)-(((u=o.l)===null||u===void 0?void 0:u.d)||0),p=1<h?"r":h<-1?"l":"";p&&(l=p=="r"?"l":"r",u=r({},o),h=o[p],o.from=h.from,o.to=h.to,o[p]=h[p],u[p]=h[l],(o[l]=u).d=ba(u)),o.d=ba(o)}function ba(u){var l=u.r,u=u.l;return(l?u?Math.max(l.d,u.d):l.d:u?u.d:0)+1}function Vr(o,l){return a(l).forEach(function(u){o[u]?er(o[u],l[u]):o[u]=(function h(p){var m,w,v={};for(m in p)b(p,m)&&(w=p[m],v[m]=!w||typeof w!="object"||B.has(w.constructor)?w:h(w));return v})(l[u])}),o}function xs(o,l){return o.all||l.all||Object.keys(o).some(function(u){return l[u]&&ma(l[u],o[u])})}y(He.prototype,((ht={add:function(o){return er(this,o),this},addKey:function(o){return Zn(this,o,o),this},addKeys:function(o){var l=this;return o.forEach(function(u){return Zn(l,u,u)}),this},hasKey:function(o){var l=Kr(this).next(o).value;return l&&be(l.from,o)<=0&&0<=be(l.to,o)}})[je]=function(){return Kr(this)},ht));var nn={},$s={},ks=!1;function Gr(o){Vr($s,o),ks||(ks=!0,setTimeout(function(){ks=!1,_s($s,!($s={}))},0))}function _s(o,l){l===void 0&&(l=!1);var u=new Set;if(o.all)for(var h=0,p=Object.values(nn);h<p.length;h++)wa(w=p[h],o,u,l);else for(var m in o){var w,v=/^idb\:\/\/(.*)\/(.*)\//.exec(m);v&&(m=v[1],v=v[2],(w=nn["idb://".concat(m,"/").concat(v)])&&wa(w,o,u,l))}u.forEach(function(S){return S()})}function wa(o,l,u,h){for(var p=[],m=0,w=Object.entries(o.queries.query);m<w.length;m++){for(var v=w[m],S=v[0],T=[],R=0,x=v[1];R<x.length;R++){var P=x[R];xs(l,P.obsSet)?P.subscribers.forEach(function(I){return u.add(I)}):h&&T.push(P)}h&&p.push([S,T])}if(h)for(var E=0,A=p;E<A.length;E++){var O=A[E],S=O[0],T=O[1];o.queries.query[S]=T}}function kd(o){var l=o._state,u=o._deps.indexedDB;if(l.isBeingOpened||o.idbdb)return l.dbReadyPromise.then(function(){return l.dbOpenError?Re(l.dbOpenError):o});l.isBeingOpened=!0,l.dbOpenError=null,l.openComplete=!1;var h=l.openCanceller,p=Math.round(10*o.verno),m=!1;function w(){if(l.openCanceller!==h)throw new ce.DatabaseClosed("db.open() was cancelled")}function v(){return new te(function(P,E){if(w(),!u)throw new ce.MissingAPI;var A=o.name,O=l.autoSchema||!p?u.open(A):u.open(A,p);if(!O)throw new ce.MissingAPI;O.onerror=Ct(E),O.onblocked=Ce(o._fireOnBlocked),O.onupgradeneeded=Ce(function(I){var L;R=O.transaction,l.autoSchema&&!o._options.allowEmptyDB?(O.onerror=Yn,R.abort(),O.result.close(),(L=u.deleteDatabase(A)).onsuccess=L.onerror=Ce(function(){E(new ce.NoSuchDatabase("Database ".concat(A," doesnt exist")))})):(R.onerror=Ct(E),I=I.oldVersion>Math.pow(2,62)?0:I.oldVersion,x=I<1,o.idbdb=O.result,m&&xd(o,R),vd(o,I/10,R,E))},E),O.onsuccess=Ce(function(){R=null;var I,L,z,j,F,V=o.idbdb=O.result,Z=U(V.objectStoreNames);if(0<Z.length)try{var G=V.transaction((j=Z).length===1?j[0]:j,"readonly");if(l.autoSchema)L=V,z=G,(I=o).verno=L.version/10,z=I._dbSchema=Br(0,L,z),I._storeNames=U(L.objectStoreNames,0),Ur(I,[I._allTables],a(z),z);else if(Hr(o,o._dbSchema,G),((F=ms(Br(0,(F=o).idbdb,G),F._dbSchema)).add.length||F.change.some(function(X){return X.add.length||X.change.length}))&&!m)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),p=V.version+1,m=!0,P(v());Nr(o,G)}catch{}xn.push(o),V.onversionchange=Ce(function(X){l.vcFired=!0,o.on("versionchange").fire(X)}),V.onclose=Ce(function(X){o.on("close").fire(X)}),x&&(F=o._deps,G=A,V=F.indexedDB,F=F.IDBKeyRange,ws(V)||G===Pr||bs(V,F).put({name:G}).catch(ve)),P()},E)}).catch(function(P){switch(P?.name){case"UnknownError":if(0<l.PR1398_maxLoop)return l.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),v();break;case"VersionError":if(0<p)return p=0,v()}return te.reject(P)})}var S,T=l.dbReadyResolve,R=null,x=!1;return te.race([h,(typeof navigator>"u"?te.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(P){function E(){return indexedDB.databases().finally(P)}S=setInterval(E,100),E()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(v)]).then(function(){return w(),l.onReadyBeingFired=[],te.resolve(ys(function(){return o.on.ready.fire(o.vip)})).then(function P(){if(0<l.onReadyBeingFired.length){var E=l.onReadyBeingFired.reduce(Xi,ve);return l.onReadyBeingFired=[],te.resolve(ys(function(){return E(o.vip)})).then(P)}})}).finally(function(){l.openCanceller===h&&(l.onReadyBeingFired=null,l.isBeingOpened=!1)}).catch(function(P){l.dbOpenError=P;try{R&&R.abort()}catch{}return h===l.openCanceller&&o._close(),Re(P)}).finally(function(){l.openComplete=!0,T()}).then(function(){var P;return x&&(P={},o.tables.forEach(function(E){E.schema.indexes.forEach(function(A){A.name&&(P["idb://".concat(o.name,"/").concat(E.name,"/").concat(A.name)]=new He(-1/0,[[[]]]))}),P["idb://".concat(o.name,"/").concat(E.name,"/")]=P["idb://".concat(o.name,"/").concat(E.name,"/:dels")]=new He(-1/0,[[[]]])}),Bt(Xn).fire(P),_s(P,!0)),o})}function Cs(o){function l(m){return o.next(m)}var u=p(l),h=p(function(m){return o.throw(m)});function p(m){return function(S){var v=m(S),S=v.value;return v.done?S:S&&typeof S.then=="function"?S.then(u,h):c(S)?Promise.all(S).then(u,h):u(S)}}return p(l)()}function Wr(o,l,u){for(var h=c(o)?o.slice():[o],p=0;p<u;++p)h.push(l);return h}var _d={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(o){return r(r({},o),{table:function(l){var u=o.table(l),h=u.schema,p={},m=[];function w(x,P,E){var A=Jn(x),O=p[A]=p[A]||[],I=x==null?0:typeof x=="string"?1:x.length,L=0<P,L=r(r({},E),{name:L?"".concat(A,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:L,keyTail:P,keyLength:I,extractKey:ps(x),unique:!L&&E.unique});return O.push(L),L.isPrimaryKey||m.push(L),1<I&&w(I===2?x[0]:x.slice(0,I-1),P+1,E),O.sort(function(z,j){return z.keyTail-j.keyTail}),L}l=w(h.primaryKey.keyPath,0,h.primaryKey),p[":id"]=[l];for(var v=0,S=h.indexes;v<S.length;v++){var T=S[v];w(T.keyPath,0,T)}function R(x){var P,E=x.query.index;return E.isVirtual?r(r({},x),{query:{index:E.lowLevelIndex,range:(P=x.query.range,E=E.keyTail,{type:P.type===1?2:P.type,lower:Wr(P.lower,P.lowerOpen?o.MAX_KEY:o.MIN_KEY,E),lowerOpen:!0,upper:Wr(P.upper,P.upperOpen?o.MIN_KEY:o.MAX_KEY,E),upperOpen:!0})}}):x}return r(r({},u),{schema:r(r({},h),{primaryKey:l,indexes:m,getIndexByKeyPath:function(x){return(x=p[Jn(x)])&&x[0]}}),count:function(x){return u.count(R(x))},query:function(x){return u.query(R(x))},openCursor:function(x){var P=x.query.index,E=P.keyTail,A=P.isVirtual,O=P.keyLength;return A?u.openCursor(R(x)).then(function(L){return L&&I(L)}):u.openCursor(x);function I(L){return Object.create(L,{continue:{value:function(z){z!=null?L.continue(Wr(z,x.reverse?o.MAX_KEY:o.MIN_KEY,E)):x.unique?L.continue(L.key.slice(0,O).concat(x.reverse?o.MIN_KEY:o.MAX_KEY,E)):L.continue()}},continuePrimaryKey:{value:function(z,j){L.continuePrimaryKey(Wr(z,o.MAX_KEY,E),j)}},primaryKey:{get:function(){return L.primaryKey}},key:{get:function(){var z=L.key;return O===1?z[0]:z.slice(0,O)}},value:{get:function(){return L.value}}})}}})}})}};function Ss(o,l,u,h){return u=u||{},h=h||"",a(o).forEach(function(p){var m,w,v;b(l,p)?(m=o[p],w=l[p],typeof m=="object"&&typeof w=="object"&&m&&w?(v=Te(m))!==Te(w)?u[h+p]=l[p]:v==="Object"?Ss(m,w,u,h+p+"."):m!==w&&(u[h+p]=l[p]):m!==w&&(u[h+p]=l[p])):u[h+p]=void 0}),a(l).forEach(function(p){b(o,p)||(u[h+p]=l[p])}),u}function Es(o,l){return l.type==="delete"?l.keys:l.keys||l.values.map(o.extractKey)}var Cd={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(o){return r(r({},o),{table:function(l){var u=o.table(l),h=u.schema.primaryKey;return r(r({},u),{mutate:function(p){var m=le.trans,w=m.table(l).hook,v=w.deleting,S=w.creating,T=w.updating;switch(p.type){case"add":if(S.fire===ve)break;return m._promise("readwrite",function(){return R(p)},!0);case"put":if(S.fire===ve&&T.fire===ve)break;return m._promise("readwrite",function(){return R(p)},!0);case"delete":if(v.fire===ve)break;return m._promise("readwrite",function(){return R(p)},!0);case"deleteRange":if(v.fire===ve)break;return m._promise("readwrite",function(){return(function x(P,E,A){return u.query({trans:P,values:!1,query:{index:h,range:E},limit:A}).then(function(O){var I=O.result;return R({type:"delete",keys:I,trans:P}).then(function(L){return 0<L.numFailures?Promise.reject(L.failures[0]):I.length<A?{failures:[],numFailures:0,lastResult:void 0}:x(P,r(r({},E),{lower:I[I.length-1],lowerOpen:!0}),A)})})})(p.trans,p.range,1e4)},!0)}return u.mutate(p);function R(x){var P,E,A,O=le.trans,I=x.keys||Es(h,x);if(!I)throw new Error("Keys missing");return(x=x.type==="add"||x.type==="put"?r(r({},x),{keys:I}):r({},x)).type!=="delete"&&(x.values=i([],x.values)),x.keys&&(x.keys=i([],x.keys)),P=u,A=I,((E=x).type==="add"?Promise.resolve([]):P.getMany({trans:E.trans,keys:A,cache:"immutable"})).then(function(L){var z=I.map(function(j,F){var V,Z,G,X=L[F],ee={onerror:null,onsuccess:null};return x.type==="delete"?v.fire.call(ee,j,X,O):x.type==="add"||X===void 0?(V=S.fire.call(ee,j,x.values[F],O),j==null&&V!=null&&(x.keys[F]=j=V,h.outbound||q(x.values[F],h.keyPath,j))):(V=Ss(X,x.values[F]),(Z=T.fire.call(ee,V,j,X,O))&&(G=x.values[F],Object.keys(Z).forEach(function(J){b(G,J)?G[J]=Z[J]:q(G,J,Z[J])}))),ee});return u.mutate(x).then(function(j){for(var F=j.failures,V=j.results,Z=j.numFailures,j=j.lastResult,G=0;G<I.length;++G){var X=(V||I)[G],ee=z[G];X==null?ee.onerror&&ee.onerror(F[G]):ee.onsuccess&&ee.onsuccess(x.type==="put"&&L[G]?x.values[G]:X)}return{failures:F,results:V,numFailures:Z,lastResult:j}}).catch(function(j){return z.forEach(function(F){return F.onerror&&F.onerror(j)}),Promise.reject(j)})})}}})}})}};function ya(o,l,u){try{if(!l||l.keys.length<o.length)return null;for(var h=[],p=0,m=0;p<l.keys.length&&m<o.length;++p)be(l.keys[p],o[m])===0&&(h.push(u?ue(l.values[p]):l.values[p]),++m);return h.length===o.length?h:null}catch{return null}}var Sd={stack:"dbcore",level:-1,create:function(o){return{table:function(l){var u=o.table(l);return r(r({},u),{getMany:function(h){if(!h.cache)return u.getMany(h);var p=ya(h.keys,h.trans._cache,h.cache==="clone");return p?te.resolve(p):u.getMany(h).then(function(m){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?ue(m):m},m})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),u.mutate(h)}})}}}};function va(o,l){return o.trans.mode==="readonly"&&!!o.subscr&&!o.trans.explicit&&o.trans.db._options.cache!=="disabled"&&!l.schema.primaryKey.outbound}function xa(o,l){switch(o){case"query":return l.values&&!l.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ed={stack:"dbcore",level:0,name:"Observability",create:function(o){var l=o.schema.name,u=new He(o.MIN_KEY,o.MAX_KEY);return r(r({},o),{transaction:function(h,p,m){if(le.subscr&&p!=="readonly")throw new ce.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(le.querier));return o.transaction(h,p,m)},table:function(h){var p=o.table(h),m=p.schema,w=m.primaryKey,x=m.indexes,v=w.extractKey,S=w.outbound,T=w.autoIncrement&&x.filter(function(E){return E.compound&&E.keyPath.includes(w.keyPath)}),R=r(r({},p),{mutate:function(E){function A(J){return J="idb://".concat(l,"/").concat(h,"/").concat(J),j[J]||(j[J]=new He)}var O,I,L,z=E.trans,j=E.mutatedParts||(E.mutatedParts={}),F=A(""),V=A(":dels"),Z=E.type,ee=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Es(w,E).filter(function(J){return J}),E.values]:[],G=ee[0],X=ee[1],ee=E.trans._cache;return c(G)?(F.addKeys(G),(ee=Z==="delete"||G.length===X.length?ya(G,ee):null)||V.addKeys(G),(ee||X)&&(O=A,I=ee,L=X,m.indexes.forEach(function(J){var ie=O(J.name||"");function pe(me){return me!=null?J.extractKey(me):null}function fe(me){return J.multiEntry&&c(me)?me.forEach(function(tt){return ie.addKey(tt)}):ie.addKey(me)}(I||L).forEach(function(me,qe){var he=I&&pe(I[qe]),qe=L&&pe(L[qe]);be(he,qe)!==0&&(he!=null&&fe(he),qe!=null&&fe(qe))})}))):G?(X={from:(X=G.lower)!==null&&X!==void 0?X:o.MIN_KEY,to:(X=G.upper)!==null&&X!==void 0?X:o.MAX_KEY},V.add(X),F.add(X)):(F.add(u),V.add(u),m.indexes.forEach(function(J){return A(J.name).add(u)})),p.mutate(E).then(function(J){return!G||E.type!=="add"&&E.type!=="put"||(F.addKeys(J.results),T&&T.forEach(function(ie){for(var pe=E.values.map(function(he){return ie.extractKey(he)}),fe=ie.keyPath.findIndex(function(he){return he===w.keyPath}),me=0,tt=J.results.length;me<tt;++me)pe[me][fe]=J.results[me];A(ie.name).addKeys(pe)})),z.mutatedParts=Vr(z.mutatedParts||{},j),J})}}),x=function(A){var O=A.query,A=O.index,O=O.range;return[A,new He((A=O.lower)!==null&&A!==void 0?A:o.MIN_KEY,(O=O.upper)!==null&&O!==void 0?O:o.MAX_KEY)]},P={get:function(E){return[w,new He(E.key)]},getMany:function(E){return[w,new He().addKeys(E.keys)]},count:x,query:x,openCursor:x};return a(P).forEach(function(E){R[E]=function(A){var O=le.subscr,I=!!O,L=va(le,p)&&xa(E,A)?A.obsSet={}:O;if(I){var z=function(X){return X="idb://".concat(l,"/").concat(h,"/").concat(X),L[X]||(L[X]=new He)},j=z(""),F=z(":dels"),O=P[E](A),I=O[0],O=O[1];if((E==="query"&&I.isPrimaryKey&&!A.values?F:z(I.name||"")).add(O),!I.isPrimaryKey){if(E!=="count"){var V=E==="query"&&S&&A.values&&p.query(r(r({},A),{values:!1}));return p[E].apply(this,arguments).then(function(X){if(E==="query"){if(S&&A.values)return V.then(function(pe){return pe=pe.result,j.addKeys(pe),X});var ee=A.values?X.result.map(v):X.result;(A.values?j:F).addKeys(ee)}else if(E==="openCursor"){var J=X,ie=A.values;return J&&Object.create(J,{key:{get:function(){return F.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var pe=J.primaryKey;return F.addKey(pe),pe}},value:{get:function(){return ie&&j.addKey(J.primaryKey),J.value}}})}return X})}F.add(u)}}return p[E].apply(this,arguments)}}),R}})}};function $a(o,l,u){if(u.numFailures===0)return l;if(l.type==="deleteRange")return null;var h=l.keys?l.keys.length:"values"in l&&l.values?l.values.length:1;return u.numFailures===h?null:(l=r({},l),c(l.keys)&&(l.keys=l.keys.filter(function(p,m){return!(m in u.failures)})),"values"in l&&c(l.values)&&(l.values=l.values.filter(function(p,m){return!(m in u.failures)})),l)}function Ts(o,l){return u=o,((h=l).lower===void 0||(h.lowerOpen?0<be(u,h.lower):0<=be(u,h.lower)))&&(o=o,(l=l).upper===void 0||(l.upperOpen?be(o,l.upper)<0:be(o,l.upper)<=0));var u,h}function ka(o,l,P,h,p,m){if(!P||P.length===0)return o;var w=l.query.index,v=w.multiEntry,S=l.query.range,T=h.schema.primaryKey.extractKey,R=w.extractKey,x=(w.lowLevelIndex||w).extractKey,P=P.reduce(function(E,A){var O=E,I=[];if(A.type==="add"||A.type==="put")for(var L=new He,z=A.values.length-1;0<=z;--z){var j,F=A.values[z],V=T(F);L.hasKey(V)||(j=R(F),(v&&c(j)?j.some(function(J){return Ts(J,S)}):Ts(j,S))&&(L.addKey(V),I.push(F)))}switch(A.type){case"add":var Z=new He().addKeys(l.values?E.map(function(ie){return T(ie)}):E),O=E.concat(l.values?I.filter(function(ie){return ie=T(ie),!Z.hasKey(ie)&&(Z.addKey(ie),!0)}):I.map(function(ie){return T(ie)}).filter(function(ie){return!Z.hasKey(ie)&&(Z.addKey(ie),!0)}));break;case"put":var G=new He().addKeys(A.values.map(function(ie){return T(ie)}));O=E.filter(function(ie){return!G.hasKey(l.values?T(ie):ie)}).concat(l.values?I:I.map(function(ie){return T(ie)}));break;case"delete":var X=new He().addKeys(A.keys);O=E.filter(function(ie){return!X.hasKey(l.values?T(ie):ie)});break;case"deleteRange":var ee=A.range;O=E.filter(function(ie){return!Ts(T(ie),ee)})}return O},o);return P===o?o:(P.sort(function(E,A){return be(x(E),x(A))||be(T(E),T(A))}),l.limit&&l.limit<1/0&&(P.length>l.limit?P.length=l.limit:o.length===l.limit&&P.length<l.limit&&(p.dirty=!0)),m?Object.freeze(P):P)}function _a(o,l){return be(o.lower,l.lower)===0&&be(o.upper,l.upper)===0&&!!o.lowerOpen==!!l.lowerOpen&&!!o.upperOpen==!!l.upperOpen}function Td(o,l){return(function(u,h,p,m){if(u===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=be(u,h))===0){if(p&&m)return 0;if(p)return 1;if(m)return-1}return h})(o.lower,l.lower,o.lowerOpen,l.lowerOpen)<=0&&0<=(function(u,h,p,m){if(u===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=be(u,h))===0){if(p&&m)return 0;if(p)return-1;if(m)return 1}return h})(o.upper,l.upper,o.upperOpen,l.upperOpen)}function Id(o,l,u,h){o.subscribers.add(u),h.addEventListener("abort",function(){var p,m;o.subscribers.delete(u),o.subscribers.size===0&&(p=o,m=l,setTimeout(function(){p.subscribers.size===0&&de(m,p)},3e3))})}var Ad={stack:"dbcore",level:0,name:"Cache",create:function(o){var l=o.schema.name;return r(r({},o),{transaction:function(u,h,p){var m,w,v=o.transaction(u,h,p);return h==="readwrite"&&(w=(m=new AbortController).signal,p=function(S){return function(){if(m.abort(),h==="readwrite"){for(var T=new Set,R=0,x=u;R<x.length;R++){var P=x[R],E=nn["idb://".concat(l,"/").concat(P)];if(E){var A=o.table(P),O=E.optimisticOps.filter(function(ie){return ie.trans===v});if(v._explicit&&S&&v.mutatedParts)for(var I=0,L=Object.values(E.queries.query);I<L.length;I++)for(var z=0,j=(Z=L[I]).slice();z<j.length;z++)xs((G=j[z]).obsSet,v.mutatedParts)&&(de(Z,G),G.subscribers.forEach(function(ie){return T.add(ie)}));else if(0<O.length){E.optimisticOps=E.optimisticOps.filter(function(ie){return ie.trans!==v});for(var F=0,V=Object.values(E.queries.query);F<V.length;F++)for(var Z,G,X,ee=0,J=(Z=V[F]).slice();ee<J.length;ee++)(G=J[ee]).res!=null&&v.mutatedParts&&(S&&!G.dirty?(X=Object.isFrozen(G.res),X=ka(G.res,G.req,O,A,G,X),G.dirty?(de(Z,G),G.subscribers.forEach(function(ie){return T.add(ie)})):X!==G.res&&(G.res=X,G.promise=te.resolve({result:X}))):(G.dirty&&de(Z,G),G.subscribers.forEach(function(ie){return T.add(ie)})))}}}T.forEach(function(ie){return ie()})}}},v.addEventListener("abort",p(!1),{signal:w}),v.addEventListener("error",p(!1),{signal:w}),v.addEventListener("complete",p(!0),{signal:w})),v},table:function(u){var h=o.table(u),p=h.schema.primaryKey;return r(r({},h),{mutate:function(m){var w=le.trans;if(p.outbound||w.db._options.cache==="disabled"||w.explicit||w.idbtrans.mode!=="readwrite")return h.mutate(m);var v=nn["idb://".concat(l,"/").concat(u)];return v?(w=h.mutate(m),m.type!=="add"&&m.type!=="put"||!(50<=m.values.length||Es(p,m).some(function(S){return S==null}))?(v.optimisticOps.push(m),m.mutatedParts&&Gr(m.mutatedParts),w.then(function(S){0<S.numFailures&&(de(v.optimisticOps,m),(S=$a(0,m,S))&&v.optimisticOps.push(S),m.mutatedParts&&Gr(m.mutatedParts))}),w.catch(function(){de(v.optimisticOps,m),m.mutatedParts&&Gr(m.mutatedParts)})):w.then(function(S){var T=$a(0,r(r({},m),{values:m.values.map(function(R,x){var P;return S.failures[x]?R:(R=(P=p.keyPath)!==null&&P!==void 0&&P.includes(".")?ue(R):r({},R),q(R,p.keyPath,S.results[x]),R)})}),S);v.optimisticOps.push(T),queueMicrotask(function(){return m.mutatedParts&&Gr(m.mutatedParts)})}),w):h.mutate(m)},query:function(m){if(!va(le,h)||!xa("query",m))return h.query(m);var w=((T=le.trans)===null||T===void 0?void 0:T.db._options.cache)==="immutable",x=le,v=x.requery,S=x.signal,T=(function(A,O,I,L){var z=nn["idb://".concat(A,"/").concat(O)];if(!z)return[];if(!(O=z.queries[I]))return[null,!1,z,null];var j=O[(L.query?L.query.index.name:null)||""];if(!j)return[null,!1,z,null];switch(I){case"query":var F=j.find(function(V){return V.req.limit===L.limit&&V.req.values===L.values&&_a(V.req.query.range,L.query.range)});return F?[F,!0,z,j]:[j.find(function(V){return("limit"in V.req?V.req.limit:1/0)>=L.limit&&(!L.values||V.req.values)&&Td(V.req.query.range,L.query.range)}),!1,z,j];case"count":return F=j.find(function(V){return _a(V.req.query.range,L.query.range)}),[F,!!F,z,j]}})(l,u,"query",m),R=T[0],x=T[1],P=T[2],E=T[3];return R&&x?R.obsSet=m.obsSet:(x=h.query(m).then(function(A){var O=A.result;if(R&&(R.res=O),w){for(var I=0,L=O.length;I<L;++I)Object.freeze(O[I]);Object.freeze(O)}else A.result=ue(O);return A}).catch(function(A){return E&&R&&de(E,R),Promise.reject(A)}),R={obsSet:m.obsSet,promise:x,subscribers:new Set,type:"query",req:m,dirty:!1},E?E.push(R):(E=[R],(P=P||(nn["idb://".concat(l,"/").concat(u)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[m.query.index.name||""]=E)),Id(R,E,v,S),R.promise.then(function(A){return{result:ka(A.result,m,P?.optimisticOps,h,R,w)}})}})}})}};function Yr(o,l){return new Proxy(o,{get:function(u,h,p){return h==="db"?l:Reflect.get(u,h,p)}})}var Pt=(Oe.prototype.version=function(o){if(isNaN(o)||o<.1)throw new ce.Type("Given version is not a positive number");if(o=Math.round(10*o)/10,this.idbdb||this._state.isBeingOpened)throw new ce.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,o);var l=this._versions,u=l.filter(function(h){return h._cfg.version===o})[0];return u||(u=new this.Version(o),l.push(u),l.sort(yd),u.stores({}),this._state.autoSchema=!1,u)},Oe.prototype._whenReady=function(o){var l=this;return this.idbdb&&(this._state.openComplete||le.letThrough||this._vip)?o():new te(function(u,h){if(l._state.openComplete)return h(new ce.DatabaseClosed(l._state.dbOpenError));if(!l._state.isBeingOpened){if(!l._state.autoOpen)return void h(new ce.DatabaseClosed);l.open().catch(ve)}l._state.dbReadyPromise.then(u,h)}).then(o)},Oe.prototype.use=function(o){var l=o.stack,u=o.create,h=o.level,p=o.name;return p&&this.unuse({stack:l,name:p}),o=this._middlewares[l]||(this._middlewares[l]=[]),o.push({stack:l,create:u,level:h??10,name:p}),o.sort(function(m,w){return m.level-w.level}),this},Oe.prototype.unuse=function(o){var l=o.stack,u=o.name,h=o.create;return l&&this._middlewares[l]&&(this._middlewares[l]=this._middlewares[l].filter(function(p){return h?p.create!==h:!!u&&p.name!==u})),this},Oe.prototype.open=function(){var o=this;return Zt(zt,function(){return kd(o)})},Oe.prototype._close=function(){var o=this._state,l=xn.indexOf(this);if(0<=l&&xn.splice(l,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}o.isBeingOpened||(o.dbReadyPromise=new te(function(u){o.dbReadyResolve=u}),o.openCanceller=new te(function(u,h){o.cancelOpen=h}))},Oe.prototype.close=function(u){var l=(u===void 0?{disableAutoOpen:!0}:u).disableAutoOpen,u=this._state;l?(u.isBeingOpened&&u.cancelOpen(new ce.DatabaseClosed),this._close(),u.autoOpen=!1,u.dbOpenError=new ce.DatabaseClosed):(this._close(),u.autoOpen=this._options.autoOpen||u.isBeingOpened,u.openComplete=!1,u.dbOpenError=null)},Oe.prototype.delete=function(o){var l=this;o===void 0&&(o={disableAutoOpen:!0});var u=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new te(function(p,m){function w(){l.close(o);var v=l._deps.indexedDB.deleteDatabase(l.name);v.onsuccess=Ce(function(){var S,T,R;S=l._deps,T=l.name,R=S.indexedDB,S=S.IDBKeyRange,ws(R)||T===Pr||bs(R,S).delete(T).catch(ve),p()}),v.onerror=Ct(m),v.onblocked=l._fireOnBlocked}if(u)throw new ce.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(w):w()})},Oe.prototype.backendDB=function(){return this.idbdb},Oe.prototype.isOpen=function(){return this.idbdb!==null},Oe.prototype.hasBeenClosed=function(){var o=this._state.dbOpenError;return o&&o.name==="DatabaseClosed"},Oe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Oe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Oe.prototype,"tables",{get:function(){var o=this;return a(this._allTables).map(function(l){return o._allTables[l]})},enumerable:!1,configurable:!0}),Oe.prototype.transaction=function(){var o=function(l,u,h){var p=arguments.length;if(p<2)throw new ce.InvalidArgument("Too few arguments");for(var m=new Array(p-1);--p;)m[p-1]=arguments[p];return h=m.pop(),[l,oe(m),h]}.apply(this,arguments);return this._transaction.apply(this,o)},Oe.prototype._transaction=function(o,l,u){var h=this,p=le.trans;p&&p.db===this&&o.indexOf("!")===-1||(p=null);var m,w,v=o.indexOf("?")!==-1;o=o.replace("!","").replace("?","");try{if(w=l.map(function(T){if(T=T instanceof h.Table?T.name:T,typeof T!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return T}),o=="r"||o===ss)m=ss;else{if(o!="rw"&&o!=os)throw new ce.InvalidArgument("Invalid transaction mode: "+o);m=os}if(p){if(p.mode===ss&&m===os){if(!v)throw new ce.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");p=null}p&&w.forEach(function(T){if(p&&p.storeNames.indexOf(T)===-1){if(!v)throw new ce.SubTransaction("Table "+T+" not included in parent transaction.");p=null}}),v&&p&&!p.active&&(p=null)}}catch(T){return p?p._promise(null,function(R,x){x(T)}):Re(T)}var S=function T(R,x,P,E,A){return te.resolve().then(function(){var O=le.transless||le,I=R._createTransaction(x,P,R._dbSchema,E);if(I.explicit=!0,O={trans:I,transless:O},E)I.idbtrans=E.idbtrans;else try{I.create(),I.idbtrans._explicit=!0,R._state.PR1398_maxLoop=3}catch(j){return j.name===Yi.InvalidState&&R.isOpen()&&0<--R._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),R.close({disableAutoOpen:!1}),R.open().then(function(){return T(R,x,P,null,A)})):Re(j)}var L,z=Ze(A);return z&&vn(),O=te.follow(function(){var j;(L=A.call(I,I))&&(z?(j=Nt.bind(null,null),L.then(j,j)):typeof L.next=="function"&&typeof L.throw=="function"&&(L=Cs(L)))},O),(L&&typeof L.then=="function"?te.resolve(L).then(function(j){return I.active?j:Re(new ce.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):O.then(function(){return L})).then(function(j){return E&&I._resolve(),I._completion.then(function(){return j})}).catch(function(j){return I._reject(j),Re(j)})})}.bind(null,this,m,w,p,u);return p?p._promise(m,S,"lock"):le.trans?Zt(le.transless,function(){return h._whenReady(S)}):this._whenReady(S)},Oe.prototype.table=function(o){if(!b(this._allTables,o))throw new ce.InvalidTable("Table ".concat(o," does not exist"));return this._allTables[o]},Oe);function Oe(o,l){var u=this;this._middlewares={},this.verno=0;var h=Oe.dependencies;this._options=l=r({addons:Oe.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},l),this._deps={indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange},h=l.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var p,m,w,v,S,T={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ve,dbReadyPromise:null,cancelOpen:ve,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:l.autoOpen};T.dbReadyPromise=new te(function(x){T.dbReadyResolve=x}),T.openCanceller=new te(function(x,P){T.cancelOpen=P}),this._state=T,this.name=o,this.on=Vn(this,"populate","blocked","versionchange","close",{ready:[Xi,ve]}),this.on.ready.subscribe=H(this.on.ready.subscribe,function(x){return function(P,E){Oe.vip(function(){var A,O=u._state;O.openComplete?(O.dbOpenError||te.resolve().then(P),E&&x(P)):O.onReadyBeingFired?(O.onReadyBeingFired.push(P),E&&x(P)):(x(P),A=u,E||x(function I(){A.on.ready.unsubscribe(P),A.on.ready.unsubscribe(I)}))})}}),this.Collection=(p=this,Gn(hd.prototype,function(L,I){this.db=p;var E=ta,A=null;if(I)try{E=I()}catch(z){A=z}var O=L._ctx,I=O.table,L=I.hook.reading.fire;this._ctx={table:I,index:O.index,isPrimKey:!O.index||I.schema.primKey.keyPath&&O.index===I.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:A,or:O.or,valueMapper:L!==Fn?L:null}})),this.Table=(m=this,Gn(sa.prototype,function(x,P,E){this.db=m,this._tx=E,this.name=x,this.schema=P,this.hook=m._allTables[x]?m._allTables[x].hook:Vn(null,{creating:[rd,ve],reading:[nd,Fn],updating:[sd,ve],deleting:[id,ve]})})),this.Transaction=(w=this,Gn(md.prototype,function(x,P,E,A,O){var I=this;this.db=w,this.mode=x,this.storeNames=P,this.schema=E,this.chromeTransactionDurability=A,this.idbtrans=null,this.on=Vn(this,"complete","error","abort"),this.parent=O||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new te(function(L,z){I._resolve=L,I._reject=z}),this._completion.then(function(){I.active=!1,I.on.complete.fire()},function(L){var z=I.active;return I.active=!1,I.on.error.fire(L),I.parent?I.parent._reject(L):z&&I.idbtrans&&I.idbtrans.abort(),Re(L)})})),this.Version=(v=this,Gn($d.prototype,function(x){this.db=v,this._cfg={version:x,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,Gn(ua.prototype,function(x,P,E){if(this.db=S,this._ctx={table:x,index:P===":id"?null:P,or:E},this._cmp=this._ascending=be,this._descending=function(A,O){return be(O,A)},this._max=function(A,O){return 0<be(A,O)?A:O},this._min=function(A,O){return be(A,O)<0?A:O},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new ce.MissingAPI})),this.on("versionchange",function(x){0<x.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(x){!x.newVersion||x.newVersion<x.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(x.oldVersion/10))}),this._maxKey=Qn(l.IDBKeyRange),this._createTransaction=function(x,P,E,A){return new u.Transaction(x,P,E,u._options.chromeTransactionDurability,A)},this._fireOnBlocked=function(x){u.on("blocked").fire(x),xn.filter(function(P){return P.name===u.name&&P!==u&&!P._state.vcFired}).map(function(P){return P.on("versionchange").fire(x)})},this.use(Sd),this.use(Ad),this.use(Ed),this.use(_d),this.use(Cd);var R=new Proxy(this,{get:function(x,P,E){if(P==="_vip")return!0;if(P==="table")return function(O){return Yr(u.table(O),R)};var A=Reflect.get(x,P,E);return A instanceof sa?Yr(A,R):P==="tables"?A.map(function(O){return Yr(O,R)}):P==="_createTransaction"?function(){return Yr(A.apply(this,arguments),R)}:A}});this.vip=R,h.forEach(function(x){return x(u)})}var Xr,ht=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Rd=(Is.prototype.subscribe=function(o,l,u){return this._subscribe(o&&typeof o!="function"?o:{next:o,error:l,complete:u})},Is.prototype[ht]=function(){return this},Is);function Is(o){this._subscribe=o}try{Xr={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{Xr={indexedDB:null,IDBKeyRange:null}}function Ca(o){var l,u=!1,h=new Rd(function(p){var m=Ze(o),w,v=!1,S={},T={},R={get closed(){return v},unsubscribe:function(){v||(v=!0,w&&w.abort(),x&&Bt.storagemutated.unsubscribe(E))}};p.start&&p.start(R);var x=!1,P=function(){return is(A)},E=function(O){Vr(S,O),xs(T,S)&&P()},A=function(){var O,I,L;!v&&Xr.indexedDB&&(S={},O={},w&&w.abort(),w=new AbortController,L=(function(z){var j=wn();try{m&&vn();var F=jt(o,z);return F=m?F.finally(Nt):F}finally{j&&yn()}})(I={subscr:O,signal:w.signal,requery:P,querier:o,trans:null}),Promise.resolve(L).then(function(z){u=!0,l=z,v||I.signal.aborted||(S={},(function(j){for(var F in j)if(b(j,F))return;return 1})(T=O)||x||(Bt(Xn,E),x=!0),is(function(){return!v&&p.next&&p.next(z)}))},function(z){u=!1,["DatabaseClosedError","AbortError"].includes(z?.name)||v||is(function(){v||p.error&&p.error(z)})}))};return setTimeout(P,0),R});return h.hasValue=function(){return u},h.getValue=function(){return l},h}var rn=Pt;function As(o){var l=Ht;try{Ht=!0,Bt.storagemutated.fire(o),_s(o,!0)}finally{Ht=l}}y(rn,r(r({},Cr),{delete:function(o){return new rn(o,{addons:[]}).delete()},exists:function(o){return new rn(o,{addons:[]}).open().then(function(l){return l.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(o){try{return l=rn.dependencies,u=l.indexedDB,l=l.IDBKeyRange,(ws(u)?Promise.resolve(u.databases()).then(function(h){return h.map(function(p){return p.name}).filter(function(p){return p!==Pr})}):bs(u,l).toCollection().primaryKeys()).then(o)}catch{return Re(new ce.MissingAPI)}var l,u},defineClass:function(){return function(o){d(this,o)}},ignoreTransaction:function(o){return le.trans?Zt(le.transless,o):o()},vip:ys,async:function(o){return function(){try{var l=Cs(o.apply(this,arguments));return l&&typeof l.then=="function"?l:te.resolve(l)}catch(u){return Re(u)}}},spawn:function(o,l,u){try{var h=Cs(o.apply(u,l||[]));return h&&typeof h.then=="function"?h:te.resolve(h)}catch(p){return Re(p)}},currentTransaction:{get:function(){return le.trans||null}},waitFor:function(o,l){return l=te.resolve(typeof o=="function"?rn.ignoreTransaction(o):o).timeout(l||6e4),le.trans?le.trans.waitFor(l):l},Promise:te,debug:{get:function(){return _t},set:function(o){Wo(o)}},derive:_,extend:d,props:y,override:H,Events:Vn,on:Bt,liveQuery:Ca,extendObservabilitySet:Vr,getByKeyPath:W,setByKeyPath:q,delByKeyPath:function(o,l){typeof l=="string"?q(o,l,void 0):"length"in l&&[].map.call(l,function(u){q(o,u,void 0)})},shallowClone:Y,deepClone:ue,getObjectDiff:Ss,cmp:be,asap:ne,minKey:-1/0,addons:[],connections:xn,errnames:Yi,dependencies:Xr,cache:nn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(o){return parseInt(o)}).reduce(function(o,l,u){return o+l/Math.pow(10,2*u)})})),rn.maxKey=Qn(rn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Bt(Xn,function(o){Ht||(o=new CustomEvent(us,{detail:o}),Ht=!0,dispatchEvent(o),Ht=!1)}),addEventListener(us,function(o){o=o.detail,Ht||As(o)}));var _n,Ht=!1,Sa=function(){};return typeof BroadcastChannel<"u"&&((Sa=function(){(_n=new BroadcastChannel(us)).onmessage=function(o){return o.data&&As(o.data)}})(),typeof _n.unref=="function"&&_n.unref(),Bt(Xn,function(o){Ht||_n.postMessage(o)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(o){if(!Pt.disableBfCache&&o.persisted){_t&&console.debug("Dexie: handling persisted pagehide"),_n?.close();for(var l=0,u=xn;l<u.length;l++)u[l].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(o){!Pt.disableBfCache&&o.persisted&&(_t&&console.debug("Dexie: handling persisted pageshow"),Sa(),As({all:new He(-1/0,[[]])}))})),te.rejectionMapper=function(o,l){return!o||o instanceof Be||o instanceof TypeError||o instanceof SyntaxError||!o.name||!Go[o.name]?o:(l=new Go[o.name](l||o.message,o),"stack"in o&&C(l,"stack",{get:function(){return this.inner.stack}}),l)},Wo(_t),r(Pt,Object.freeze({__proto__:null,Dexie:Pt,liveQuery:Ca,Entity:na,cmp:be,PropModSymbol:Dt,PropModification:Wn,replacePrefix:function(o,l){return new Wn({replacePrefix:[o,l]})},add:function(o){return new Wn({add:o})},remove:function(o){return new Wn({remove:o})},default:Pt,RangeSet:He,mergeRanges:er,rangesOverlap:ma}),{default:Pt}),Pt})})(li)),li.exports}var dh=uh();const qs=lh(dh),Ua=Symbol.for("Dexie"),mi=globalThis[Ua]||(globalThis[Ua]=qs);if(qs.semVer!==mi.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${qs.semVer} and ${mi.semVer}`);const{liveQuery:mo,mergeRanges:Wy,rangesOverlap:Yy,RangeSet:Xy,cmp:Qy,Entity:Jy,PropModSymbol:Zy,PropModification:ev,replacePrefix:tv,add:nv,remove:rv}=mi,hh="easydb";function cn(e,t){return`${e}::${t}`}let Jr=null;function uc(){if(Jr)return Jr;const e=new mi(hh);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),i=(await n.toArray()).filter(c=>c.workspaceId==null);if(i.length===0)return;const s=(await t.table("workspaces").toArray()).map(c=>c.id),a=s.length>0?s:["default"];for(const c of i){for(const d of a)await n.put({key:cn(d,c.key),workspaceId:d,name:c.key,value:c.value});await n.delete(c.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>ph()),Jr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Jr}function ph(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function nr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>go(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const i=await e.get(t);if(!i)throw new Error(`patch: doc id=${t} vanished after update`);return i},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=mo(()=>e.toArray()).subscribe({next:i=>t(i)});return()=>r.unsubscribe()}}}function fh(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const i=Object.entries(n);return r.filter(s=>go(s,i)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(i=>({...i,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const s=await e.get(n);if(!s)throw new Error(`row patch: row ${n} vanished after update`);return s},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const i=mo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:s=>n(s)});return()=>i.unsubscribe()}}}function mh(e,t){const n=i=>({...i,workspaceId:t(),key:cn(t(),i.name),name:i.name,value:i.value}),r=()=>e.where("workspaceId").equals(t());return{async find(i){const s=await r().toArray();if(!i||Object.keys(i).length===0)return s;const a=Object.entries(i);return s.filter(c=>go(c,a))},async findOne(i){return await e.get(cn(t(),i))??null},async insert(i){const s=n(i);return await e.add(s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(a=>n(a));return await e.bulkAdd(s),s},async upsert(i){const s=n(i);return await e.put(s),s},async patch(i,s){const a=cn(t(),i);if(await e.update(a,s)===0)throw new Error(`setting patch: no setting ${i}`);const d=await e.get(a);if(!d)throw new Error(`setting patch: ${i} vanished after update`);return d},async remove(i){await e.delete(cn(t(),i))},async bulkRemove(i){i.length!==0&&await e.bulkDelete(i.map(s=>cn(t(),s)))},subscribe(i){const a=mo(()=>r().toArray()).subscribe({next:c=>i(c)});return()=>a.unsubscribe()}}}function go(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function gh(e,t){return{workspaces:nr(e.workspaces),tables:nr(e.tables),settings:mh(e.settings,t),plugins:nr(e.plugins),viewTemplates:nr(e.viewTemplates),viewInstances:nr(e.viewInstances),rows:n=>fh(e.rows,n)}}function bh(e){const{base:t,providers:n,tableById:r,ctx:i}=e,s=new Map;return{...t,rows(a){const c=r(a),d=c?.source;if(d){const f=n.get(d.type);if(f){const g=JSON.stringify(d),b=s.get(a);if(b&&b.key===g)return b.coll;const y=f.create(c,i);return s.set(a,{key:g,coll:y}),y}}return s.delete(a),t.rows(a)}}}function wh(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const i of r)try{i(n)}catch(s){console.error(`[event:${String(t)}] listener threw`,s)}}}}const gt=$e`
  :host {
    display: contents;
  }
  dialog {
    position: relative;
    border: 0;
    border-radius: 0.5rem;
    padding: 0;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    font-family: system-ui, sans-serif;
    overflow: hidden;
    max-height: 92vh;
  }
  dialog::backdrop {
    background: rgba(15, 23, 42, 0.4);
  }
  form {
    display: flex;
    flex-direction: column;
    max-height: 92vh;
  }
  .dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.7rem 1.25rem;
    background: #1f2937;
    color: white;
    border-bottom: 1px solid #111827;
    /* Whole bar is the drag handle (draggable.ts wires pointer events);
       cursor is set inline by the helper as it toggles between grab and
       grabbing. */
  }
  .dialog-header h2 {
    margin: 0;
    font-size: 1.05rem;
    color: white;
  }
  .header-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-right: 2.5rem; /* leave room for the close-x in the corner */
  }
  .dialog-body {
    padding: 1.1rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
  }
  button.close-x {
    position: absolute;
    top: 0.55rem;
    right: 0.6rem;
    background: transparent;
    border: 0;
    cursor: pointer;
    color: #cbd5e1;
    font-size: 1.1rem;
    padding: 0.15rem 0.3rem;
    line-height: 1;
    border-radius: 0.2rem;
  }
  button.close-x:hover {
    color: white;
    background: rgba(255, 255, 255, 0.12);
  }
  button.primary {
    background: #3b82f6;
    color: white;
    border: 0;
    padding: 0.45rem 0.9rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font: inherit;
  }
  button.primary:hover {
    background: #2563eb;
  }
  button.ghost {
    background: transparent;
    border: 1px solid #d1d5db;
    padding: 0.45rem 0.9rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font: inherit;
  }
  /* Inside the dark header the default ghost (gray-300 on white) doesn't
     have enough contrast, so bump the border + text to a lighter slate. */
  .header-actions button.ghost {
    background: transparent;
    border: 1px solid #6b7280;
    color: #e5e7eb;
  }
  .header-actions button.ghost:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #9ca3af;
    color: white;
  }
  /* Phones: every OPEN dialog goes full-screen, edge to edge. The important
     flag plus inset:0 override each dialog's own min/max-width and any inline
     drag position (draggable.ts sets position:fixed + left/top). The dialog
     becomes a flex column so the body fills the remaining height and scrolls,
     keeping the header (and its actions) pinned at the top.

     CRITICAL: scope to dialog[open]. A bare dialog{display:flex !important}
     would override the UA dialog:not([open]){display:none}, leaving a CLOSED
     dialog visible and blocking the whole UI (it never goes away). */
  @media (max-width: 640px) {
    dialog[open] {
      position: fixed !important;
      inset: 0 !important;
      width: auto !important;
      height: auto !important;
      min-width: 0 !important;
      max-width: none !important;
      max-height: none !important;
      margin: 0 !important;
      border-radius: 0 !important;
      display: flex !important;
      flex-direction: column;
    }
    dialog[open] form {
      max-height: none;
      flex: 1;
      min-height: 0;
    }
    dialog[open] .dialog-body {
      flex: 1;
      min-height: 0;
    }
  }
`;function bt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const Fa=new WeakSet;function wt(e,t){if(Fa.has(t))return;Fa.add(t);let n=0,r=0,i=0,s=0,a=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",d=>{if(d.target.closest("button, input, textarea, select, a, label"))return;a=!0,n=d.clientX,r=d.clientY;const g=e.getBoundingClientRect();i=g.left,s=g.top,t.setPointerCapture(d.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",d=>{if(!a)return;const f=d.clientX-n,g=d.clientY-r,b=-e.offsetWidth+80,y=window.innerWidth-80,k=0,C=window.innerHeight-40,_=Math.max(b,Math.min(y,i+f)),D=Math.max(k,Math.min(C,s+g));e.style.position="fixed",e.style.left=`${_}px`,e.style.top=`${D}px`,e.style.margin="0"});const c=d=>{if(a){a=!1;try{t.releasePointerCapture(d.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var yh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,dc=(e,t,n,r)=>{for(var i=r>1?void 0:r?vh(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&yh(t,n,i),i};let ft=class extends xe{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&wt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return $`
      <dialog @cancel=${this.onCancel} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):re}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return $`
          <form @submit=${this.submitAlert}>
            <div class="dialog-header">
              <h2>${e.title}</h2>
              <div class="header-actions">
                <button type="submit" class="primary">OK</button>
              </div>
            </div>
            <div class="dialog-body">
              <p class="message">${e.message}</p>
            </div>
          </form>
        `;case"prompt":return $`
          <form @submit=${this.submitPrompt}>
            <div class="dialog-header">
              <h2>${e.title}</h2>
              <div class="header-actions">
                <button type="button" class="ghost" @click=${this.cancelPrompt}>Cancel</button>
                <button type="submit" class="primary">OK</button>
              </div>
            </div>
            <div class="dialog-body">
              <p class="message">${e.message}</p>
              <input
                type="text"
                autofocus
                .value=${e.value}
                @input=${t=>{this.current?.kind==="prompt"&&(this.current={...this.current,value:t.target.value})}}
              />
            </div>
          </form>
        `;case"choice":return $`
          <form @submit=${this.submitChoice}>
            <div class="dialog-header">
              <h2>${e.title}</h2>
              <div class="header-actions">
                <button type="button" class="ghost" @click=${()=>this.closeAndResolve(null)}>
                  Cancel
                </button>
              </div>
            </div>
            <div class="dialog-body">
              ${e.message?$`<p class="message">${e.message}</p>`:re}
              <div class="choices">
                ${e.options.map((t,n)=>n===0?$`<button type="submit" class="choice primary" autofocus>${t}</button>`:$`<button
                        type="button"
                        class="choice"
                        @click=${()=>this.closeAndResolve(t)}
                      >
                        ${t}
                      </button>`)}
              </div>
            </div>
          </form>
        `}}};ft.instance=null;ft.styles=[gt,$e`
      dialog {
        min-width: 360px;
        max-width: 520px;
      }
      /* Shorter, looser body for the simple alert/prompt/choice modes. */
      .dialog-body {
        gap: 0.85rem;
      }
      p.message {
        margin: 0;
        color: #374151;
        white-space: pre-wrap;
        font-size: 0.95rem;
      }
      input[type='text'] {
        font: inherit;
        padding: 0.45rem 0.55rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
      }
      .choices {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
      button.choice {
        background: white;
        border: 1px solid #d1d5db;
        padding: 0.5rem 0.75rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font: inherit;
        text-align: left;
      }
      button.choice:hover {
        background: #f3f4f6;
        border-color: #9ca3af;
      }
      button.choice.primary {
        background: #3b82f6;
        color: white;
        border: 0;
        text-align: left;
      }
      button.choice.primary:hover {
        background: #2563eb;
      }
      button.choice.primary:focus-visible {
        outline: 2px solid #1d4ed8;
        outline-offset: 2px;
      }
    `];dc([N()],ft.prototype,"current",2);ft=dc([Se("host-dialogs")],ft);const ut=$e`
  .mi {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 1.15rem;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
    vertical-align: middle;
  }
  .mi.sm {
    font-size: 1rem;
  }
  .mi.lg {
    font-size: 1.4rem;
  }
`;var xh=Object.defineProperty,$h=Object.getOwnPropertyDescriptor,hc=(e,t,n,r)=>{for(var i=r>1?void 0:r?$h(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&xh(t,n,i),i};let Lt=class extends xe{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Lt.instance===this&&(Lt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return $`
      ${this.toasts.map(e=>$`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${_h(e.kind)}</span>
            <span class="body">
              ${e.title?$`<strong>${e.title}</strong>`:""}${kh(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Lt.instance=null;Lt.styles=[ut,$e`
      :host {
        position: fixed;
        top: 56px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 200000;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        pointer-events: none;
        max-width: 90vw;
      }
      .toast {
        min-width: 260px;
        max-width: 480px;
        background: white;
        border-radius: 0.35rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
        padding: 0.55rem 0.75rem;
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 0.55rem;
        align-items: center;
        pointer-events: auto;
        border-left: 4px solid #6b7280;
        animation: slide-in 160ms ease-out;
      }
      .toast.success {
        border-left-color: #16a34a;
      }
      .toast.error {
        border-left-color: #dc2626;
      }
      .toast.warning {
        border-left-color: #d97706;
      }
      .toast.info {
        border-left-color: #2563eb;
      }
      .toast .mi.lg {
        font-size: 1.4rem;
      }
      .toast.success .mi {
        color: #16a34a;
      }
      .toast.error .mi {
        color: #dc2626;
      }
      .toast.warning .mi {
        color: #d97706;
      }
      .toast.info .mi {
        color: #2563eb;
      }
      .body {
        line-height: 1.3;
        font-size: 0.9rem;
      }
      .body strong {
        display: block;
        font-size: 0.9rem;
        margin-bottom: 0.1rem;
      }
      .body a {
        color: #2563eb;
        text-decoration: underline;
        word-break: break-all;
      }
      button.close {
        background: transparent;
        border: 0;
        cursor: pointer;
        color: #6b7280;
        padding: 0 0.15rem;
        line-height: 1;
        font-size: 1rem;
      }
      button.close:hover {
        color: #111;
      }
      @keyframes slide-in {
        from {
          opacity: 0;
          transform: translateY(-8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `];hc([N()],Lt.prototype,"toasts",2);Lt=hc([Se("toast-host")],Lt);function kh(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,i;for(;(i=t.exec(e))!==null;)i.index>r&&n.push(e.slice(r,i.index)),n.push({url:i[0]}),r=i.index+i[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(s=>typeof s=="string"?s:$`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`)}function _h(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Ch(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function Et(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function Ds(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function Sh(e){return{registerHeaderButton:t=>Et(e.headerButtons,t),registerFooterButton:t=>Et(e.footerButtons,t),registerTableButton:t=>Et(e.tableButtons,t),registerColumnEditorAction:t=>Et(e.columnEditorActions,t),registerImporter:t=>Et(e.importers,t),registerConnector:t=>Et(e.connectors,t),registerExporter:t=>Et(e.exporters,t),registerUrlSource:t=>Et(e.urlSources,t),registerDropHandler:t=>Et(e.dropHandlers,t),registerCellRenderer:(t,n)=>Ds(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>Ds(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>Ds(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>Et(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:Eh}}const Eh={async alert(e,t){const n=ft.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=ft.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=ft.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=ft.instance;if(r)return r.choice(e,t,n);const i=window.prompt(`${e}

Options: ${t.join(", ")}`);return i&&t.includes(i)?i:null},toast(e,t){const n=Lt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},bo="/easydbaccess/settings.json",pc="/easydbaccess/secrets.txt";function yr(e){try{return globalThis.localStorage??null}catch{return null}}function Ti(e){const t=yr();if(!t)return{};const n=t.getItem(bo);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function wo(e,t){return Ti()[e]}function Th(e,t,n){const r=yr();if(!r)return;const i=Ti();i[e]=t,r.setItem(bo,JSON.stringify(i))}function Ih(e,t){const n=yr();if(!n)return;const r=Ti();e in r&&(delete r[e],n.setItem(bo,JSON.stringify(r)))}function Ks(e,t){return e in Ti()}function Ii(e){return yr()?.getItem(pc)??""}function fc(e,t){yr()?.setItem(pc,e)}function hr(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const i=r.indexOf(":");if(i<0)continue;const s=r.slice(0,i).trim(),a=r.slice(i+1).trim();s&&(t[s]=a)}return t}function mc(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const i=t[r.trim()];return i===void 0?n:i})}function Ah(e){const t=Sh(e.registries),n=e.registries.rowSources,r=a=>(n.set(a.type,a),()=>{n.get(a.type)===a&&n.delete(a.type)}),i=Oh(e.store,e.registries),s={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:s,registerRowSource:r,settings:i,backend:{fetch:async(a,c)=>{const d=await Rh(e.store),f=c?.body instanceof ArrayBuffer;if(!d||f)return globalThis.fetch(a,c);const g={url:a};return c?.method&&(g.method=c.method),c?.headers&&(g.headers=c.headers),typeof c?.body=="string"&&(g.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)})},async saveFile(a,c,d){const f=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,g=URL.createObjectURL(f),b=document.createElement("a");b.href=g,b.download=a,b.rel="noopener",document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL(g),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Rh(e){const t="server-sync:url";let n=Ks(t)?wo(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:mc(n,hr(Ii())).replace(/\/+$/,"")}function Oh(e,t){const n=(s,a)=>`${s}:${a}`,r=(s,a)=>t.settings.get(s)?.fields.find(c=>c.key===a),i=s=>typeof s=="string"?mc(s,hr(Ii())):s;return{async get(s,a){const c=n(s,a);let d;if(Ks(c))d=wo(c);else{const f=await e.settings.findOne(c);d=f?f.value:r(s,a)?.default}return i(d)},async set(s,a,c,d){const f=n(s,a);(d??r(s,a)?.scope??"workspace")==="user"?(Th(f,c),await e.settings.remove(f).catch(()=>{})):(await e.settings.upsert({name:f,value:c}),Ih(f))},async placement(s,a){const c=n(s,a);return Ks(c)?"user":await e.settings.findOne(c)?"workspace":null}}}function Ba(e,t){return e.has(t)?e.get(t)!=="0":!1}function Dh(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return Ba(e,"safemode")?"all-optional":Ba(e,"safemode1")?"url-plugins":"off"}const pt=Dh();function yo(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const i=r[0],s=r[1];let a=r.slice(3);return a.length>=3&&a[0]==="refs"&&(a[1]==="heads"||a[1]==="tags")&&(a=a.slice(2)),`https://raw.githubusercontent.com/${[i,s,...a].join("/")}`}}return e}function gc(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function bc(e){const t=yo(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function wc(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const i=[];let s=0;for(;;){const{done:d,value:f}=await r.read();if(d)break;f&&(i.push(f),s+=f.length,t?.(Math.min(1,s/n)))}const a=new Uint8Array(s);let c=0;for(const d of i)a.set(d,c),c+=d.length;return new TextDecoder().decode(a)}return await e.text()}const Ph=50*1024*1024;function Ha(e){try{return new URL(e).host}catch{return e}}function Dn(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function Lh(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function qa(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function Mh(e,t,n={}){const r=yo(t),i=n.slowMs??2e3;let s=setTimeout(()=>{s=void 0,n.onSlow?.()},i);const a=()=>{s!==void 0&&(clearTimeout(s),s=void 0)},c=n.maxBytes===null?null:n.maxBytes??Ph,d=async f=>{let g;try{g=await e.backend.fetch(f)}catch(y){throw new Error(`Could not reach ${Ha(f)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${y.message}]`)}if(!g.ok){const y=await Lh(g);throw new Error(`HTTP ${g.status} ${g.statusText||""}`.trim()+(y?` — ${y}`:""))}const b=Number(g.headers.get("content-length"));if(c!==null&&Number.isFinite(b)&&b>c)throw g.body?.cancel().catch(()=>{}),new Error(`Response is ${qa(b)}, over the ${qa(c)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await wc(g,n.onProgress)}catch(y){throw new Error(`Failed reading the response body from ${Ha(f)}: ${y.message}`)}};try{const f=await d(r);if(gc(f)){const g=bc(r);if(g)return await d(g)}return f}finally{a()}}async function Ai(e,t,n,r={}){const{TopProgress:i}=await at(async()=>{const{TopProgress:a}=await import("./top-progress-BYb4JhTQ.js");return{TopProgress:a}},[]),s={handle:null};try{return await Mh(e,t,{onSlow:()=>{s.handle=i.begin(n)},onProgress:a=>s.handle?.fraction(a),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{s.handle?.done()}}function Ee(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Ge(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Vs(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}const zh={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function jh(e){e.ui.registerImporter(Fh),at(()=>import("./csv-import-options-CMK22oYa.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=Zh(t).filter(ep);if(r.length===0)return!1;t.preventDefault();const i=r.length===1?`"${r[0].name}"`:`${r.length} files`,s=await e.ui.dialogs.choice(`Import ${i} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[Uh,Ka],"Import CSV");if(!s)return!0;const a=s===Ka?async c=>{const{editColumnNames:d}=await at(async()=>{const{editColumnNames:f}=await Promise.resolve().then(()=>Mb);return{editColumnNames:f}},void 0);return d(c)}:void 0;for(const c of r)await Bh(e,c,a);return!0})}function Gs(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Dn(e.url):"pasted"}function Nh(e){return $o(Gs(e))||"imported"}const Uh="Import directly",Ka="Edit columns first",Fh={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:Nh(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await xc(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${Gs(n)}…`):r=n.text??"";const s=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??ko(Gs(n)),a={...e.maxRows!=null?{maxRows:e.maxRows}:{},...s?{separator:s}:{}},c=e.targetColumns;if(c&&c.length>0){yield{rows:vo(r,a).rows.map(b=>{const y={};for(let k=0;k<c.length;k++){const C=c[k];y[C.field]=xo(b[k]??"",C.type)}return y})};return}const d=Pn(r,a);yield{columns:d.columns,rows:d.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function Bh(e,t,n){await yc(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function yc(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("csv-import: no active workspace");const s=$o(n||"imported")||"imported",a=r.separator??ko(n),c=(await e.store.tables.find()).find(y=>y.workspaceId===i&&y.name===s);let d,f;if(c){const y=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!y)return;y==="Append rows"?(f="append",d=c.id):y==="Overwrite rows"?(f="overwrite",d=c.id):(f="new",d=Ee())}else f="new",d=Ee();e.events.emit("import:before",{source:"csv",tableId:d});let g;if(f==="new"){const y=Pn(t,{maxRows:r.maxRows,separator:a});let k=y.columns,C=y.rows;if(r.editColumns){const D=await r.editColumns(k);if(D===null)return;C=tp(C,k,D),k=D}r.maxRows!=null&&(C=C.slice(0,r.maxRows));const _=c?`${s} (${Date.now().toString(36)})`:s;await e.store.tables.insert({id:d,workspaceId:i,name:_,code:Vs(_),columns:k,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()}),g=C.map(D=>({id:Ee(),tableId:d,data:D,updatedAt:Date.now()}))}else{const y=c.columns,k=vo(t,{maxRows:r.maxRows,separator:a});if(g=(r.maxRows!=null?k.rows.slice(0,r.maxRows):k.rows).map(_=>{const D={};for(let M=0;M<y.length;M++){const U=y[M];D[U.field]=xo(_[M]??"",U.type)}return{id:Ee(),tableId:d,data:D,updatedAt:Date.now()}}),f==="overwrite"){const _=e.store.rows(d),D=await _.find();await _.bulkRemove(D.map(M=>M.id))}}await e.store.rows(d).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:g.length})}function vo(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??$c(n),i=kc(n,r,vc(t.maxRows));if(i.length===0)return{header:[],rows:[]};const s=i[0],a=i.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:s,rows:a}}function vc(e){return e!=null?e+1:void 0}async function xc(e,t){const r=new TextDecoder,i=t+1;let s="",a=0,c=!1,d=0;for(;d<e.size;){const f=new Uint8Array(await e.slice(d,d+1048576).arrayBuffer());d+=1048576;const g=r.decode(f,{stream:!0});for(let b=0;b<g.length;b++){const y=g[b];if(y==='"')c=!c;else if(y===`
`&&!c&&(a+=1,a>=i))return s+g.slice(0,b+1)}s+=g}return s}function Pn(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??$c(n),i=kc(n,r,vc(t.maxRows));if(i.length===0)return{columns:[],rows:[]};const s=i[0],a=i.slice(1).filter(k=>!(k.length===1&&k[0]==="")),c=s.map((k,C)=>Kh(k,C)),d=Sc(c.map(k=>k.field)),f=a.map(k=>{const C={};for(let _=0;_<d.length;_++)C[d[_]]=k[_]??"";return C}),g=c.map((k,C)=>k.type?k.type:Vh(f.map(_=>_[d[C]]??"").filter(_=>_.length>0))),b=c.map((k,C)=>{const _=g[C]??"string",D={field:d[C],label:k.label,type:_},M=qh(_),U=k.renderer??M;return U&&(D.renderer=U),k.default!==void 0&&(D.default=k.default),k.max!=null&&(D.max=k.max),k.unique&&(D.unique=!0),k.notnull&&(D.notnull=!0),k.hidden&&(D.hidden=!0),D}),y=f.map(k=>{const C={};for(let _=0;_<d.length;_++){const D=d[_],M=g[_]??"string";C[D]=xo(k[D]??"",M)}return C});return{columns:b,rows:y}}const Hh=new Set(["string","number","boolean","date","datetime"]),Va={color:"color",image:"image"};function qh(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Kh(e,t){const n=e.trim();if(!n.includes(":"))return{field:Vs(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),i=Vs(r[0]||`col_${t+1}`),s=(r[1]??r[0]??"").trim()||i,a={field:i,label:s},c=(r[2]??"").trim();c&&(Hh.has(c)?a.type=c:Va[c]&&(a.type="string",a.renderer=Va[c]));const d=(r[3]??"").trim();d&&(a.default=d);const f=(r[4]??"").trim();if(f){const b=Number(f);Number.isFinite(b)&&b>0&&(a.max=b)}const g=(r[5]??"").toLowerCase();return g.includes("u")&&(a.unique=!0),g.includes("n")&&(a.notnull=!0),g.includes("h")&&(a.hidden=!0),a}function $c(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const s of t)s in n&&(n[s]+=1);let r=",",i=-1;for(const s of[",",";","	"])(n[s]??0)>i&&(r=s,i=n[s]??0);return r}function kc(e,t,n){const r=[];let i=[],s="",a=!1;for(let c=0;c<e.length;c++){const d=e[c];if(a)d==='"'?e[c+1]==='"'?(s+='"',c++):a=!1:s+=d;else if(d==='"')a=!0;else if(d===t)i.push(s),s="";else if(d===`
`||d==="\r"){if(d==="\r"&&e[c+1]===`
`&&c++,i.push(s),r.push(i),i=[],s="",n!=null&&r.length>=n)return r}else s+=d}return(s.length>0||i.length>0)&&(i.push(s),r.push(i)),r}function Vh(e){return e.length===0?"string":e.every(Wh)?"boolean":e.every(Yh)?"number":e.every(Qh)?"datetime":e.every(Xh)?"date":"string"}const Gh=/^(true|false|yes|no|0|1)$/i;function Wh(e){return Gh.test(e.trim())}function Yh(e){const t=e.trim();if(t==="")return!1;const n=Number(t);return Number.isFinite(n)}function Xh(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Qh(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function xo(e,t){const n=e.trim();switch(t){case"number":{if(n==="")return null;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return _c(n);case"datetime":return Jh(n);default:return e}}function _c(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),i=parseInt(t[2],10),s=t[3];let a=parseInt(s,10);s.length===2&&(a+=2e3);let c,d;return r>12?(c=r,d=i):i>12?(d=r,c=i):(c=r,d=i),`${a.toString().padStart(4,"0")}-${d.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function Jh(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${_c(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const i=new Date(e);if(!Number.isNaN(i.getTime())){const s=i.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}return e}function Zh(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}const Cc=/\.(csv|tsv|tab)$/i;function $o(e){return e.replace(Cc,"")}function ko(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function ep(e){return!!(Cc.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function Sc(e){const t=new Map,n=new Set,r=[];for(const i of e){let s=i,a=t.get(i)??0;for(;n.has(s);)a+=1,s=`${i}_${a+1}`;t.set(i,a),n.add(s),r.push(s)}return r}function tp(e,t,n){return e.map(r=>{const i={};for(let s=0;s<t.length;s++)i[n[s].field]=r[t[s].field];return i})}const np=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Sc,importCsvText:yc,init:jh,meta:zh,parseCsv:Pn,parseCsvRaw:vo,readCsvHead:xc,separatorForName:ko,stripDelimitedExt:$o},Symbol.toStringTag,{value:"Module"})),rp={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},ip={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return _o(e,t)}};function sp(e){e.ui.registerExporter(ip)}function _o(e,t){const n=e.columns.map(s=>s.field),r=e.columns.map(s=>Ga(s.label??s.field)),i=t.map(s=>n.map(a=>Ga(op(s.data[a]))).join(","));return[r.join(","),...i].join(`\r
`)}function op(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Ga(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const ap=Object.freeze(Object.defineProperty({__proto__:null,init:sp,meta:rp,serializeCsv:_o},Symbol.toStringTag,{value:"Module"}));var lp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,Ln=(e,t,n,r)=>{for(var i=r>1?void 0:r?cp(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&lp(t,n,i),i};function gi(e,t={}){return(rt.instance??up()).open(e,t)}function up(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function dp(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let rt=class extends xe{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((n,r)=>n?r:-1).filter(n=>n>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),rt.instance===this&&(rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return $`
      <dialog @cancel=${this.onCancel} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>
          ×
        </button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${this.heading}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${e===0}>
                ${this.confirmLabel} (${e})
              </button>
            </div>
          </div>
          <div class="dialog-body">
            ${this.message?$`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,n)=>$`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${n}`}
                      .checked=${this.selected[n]??!1}
                      @change=${()=>this.toggle(n)}
                    />
                    <label for=${`tsel-${n}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?$`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${dp(t.size)}</span>
                      ${t.detail?$`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};rt.instance=null;rt.styles=[gt,$e`
      dialog {
        min-width: 420px;
        max-width: 560px;
      }
      .message {
        margin: 0;
        color: #374151;
        font-size: 0.9rem;
      }
      .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        font-size: 0.82rem;
        color: #6b7280;
      }
      .toolbar button {
        font: inherit;
        background: transparent;
        border: 0;
        color: #2563eb;
        cursor: pointer;
        padding: 0;
      }
      .toolbar button:hover {
        text-decoration: underline;
      }
      ul.tables {
        list-style: none;
        margin: 0;
        padding: 0;
        border: 1px solid #e5e7eb;
        border-radius: 0.35rem;
        max-height: 46vh;
        overflow: auto;
      }
      li {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.45rem 0.7rem;
        border-bottom: 1px solid #f1f5f9;
      }
      li:last-child {
        border-bottom: 0;
      }
      li label {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        flex: 1;
        cursor: pointer;
        min-width: 0;
      }
      .name {
        font-weight: 500;
        color: #111827;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .size {
        color: #6b7280;
        font-size: 0.8rem;
        white-space: nowrap;
      }
      .detail {
        color: #9ca3af;
        font-size: 0.78rem;
      }
      .tag-hidden {
        flex: 0 0 auto;
        font-size: 0.68rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #92400e;
        background: #fef3c7;
        border-radius: 0.25rem;
        padding: 0.05rem 0.35rem;
      }
      input[type='checkbox'] {
        width: 1rem;
        height: 1rem;
      }
      button.primary:disabled {
        background: #93c5fd;
        cursor: default;
      }
    `];Ln([N()],rt.prototype,"items",2);Ln([N()],rt.prototype,"selected",2);Ln([N()],rt.prototype,"heading",2);Ln([N()],rt.prototype,"message",2);Ln([N()],rt.prototype,"confirmLabel",2);rt=Ln([Se("table-select-dialog")],rt);function Co(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let i=0;i<e.length;i++)r[t[i].field]=n[e[i].field];return r}}function Wa(e,t){if(t.length===0)return null;const n=new Set(t.map(i=>i.from)),r={};for(const i of Object.keys(e))n.has(i)||(r[i]=e[i]);for(const{from:i,to:s}of t)Object.prototype.hasOwnProperty.call(e,i)&&(r[s]=e[i]);return r}function Ri(e,t,n=[]){const r=new Set(e.map(c=>c.field)),i=new Set(n),s=[...e],a=[];for(const c of t)r.has(c.field)||i.has(c.field)||(s.push(c),a.push(c.field),r.add(c.field));return{columns:s,newFields:a}}function Ec(e,t){const n=new Set([...e].map(i=>i.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let i=2;;i++){const s=`${r}-${i}`;if(!n.has(s.toLowerCase()))return s}}async function Tc(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function hp(e,t,n,r){const{workspaceId:i,importerId:s,target:a,maxRows:c}=r;let d,f,g,b=!1,y=0,k,C=null;const _=M=>e.store.rows(M),D=async M=>{if(b)return!0;if(a.kind==="new"){let U=M.columns??[];if(r.editColumns){const Q=await r.editColumns(U);if(Q===null)return!1;C=Co(U,Q),U=Q}d=Ee(),f=Ec(await Tc(e,i),t);const H={id:d,workspaceId:i,name:f,code:Ge(f),columns:U,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(H),g=!0}else{const U=await e.store.tables.findOne(a.tableId);if(!U)throw new Error("The table to import into no longer exists.");if(d=U.id,f=U.name,g=!1,a.kind==="overwrite"){const H=await _(d).find();await _(d).bulkRemove(H.map(Q=>Q.id))}if(M.columns?.length){const H=Ri(U.columns,M.columns,U.deletedColumns??[]);H.newFields.length>0&&await e.store.tables.patch(d,{columns:H.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:s,tableId:d}),b=!0,!0};for await(const M of n){if(c!=null&&y>=c)break;if(!await D(M))return null;M.totalCount!=null&&(k=M.totalCount);let U=M.rows;if(c!=null&&y+U.length>c&&(U=U.slice(0,c-y)),U.length===0)continue;C&&(U=U.map(C));const H=Date.now(),Q=U.map(ne=>({id:Ee(),tableId:d,data:ne,updatedAt:H}));await _(d).bulkInsert(Q),y+=Q.length,r.onProgress?.(y,k)}return!b&&!await D({})?null:(e.events.emit("import:after",{source:s,tableId:d,rowCount:y}),{tableId:d,tableName:f,rowCount:y,created:g})}function Ya(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(i,s)=>Ai(e,i,s??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function pp(e,t){if(t.length<=1)return t;const n=await gi(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function fp(e,t,n,r,i){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const s=t.reference(n,r);let a=[];for await(const f of t.read(n,r)){a=f.columns??[];break}if(a.length===0)throw new Error("No columns found in the referenced data.");const c=Ec(await Tc(e,i),r.name),d=Ee();return await e.store.tables.insert({id:d,workspaceId:i,name:c,code:Ge(c),columns:a,view:"table",source:s,readonly:!0,updatedAt:Date.now()}),{tableId:d,tableName:c,rowCount:0,created:!0}}async function Ic(e,t,n,r){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=Ya(e,r),a=await t.list(s,n);if(a.length===0)throw new Error("No tables found at that source.");const c=await pp(t,a);if(c===null)return{landed:[],failed:[],cancelled:!0};const d=[],f=[];for(const g of c)try{if(r.mode==="reference"){d.push(await fp(e,t,s,g,i));continue}const b=r.target;let y;b.kind!=="new"&&(y=(await e.store.tables.findOne(b.tableId))?.columns);const k=Ya(e,r,{...y?{targetColumns:y}:{}}),C=t.read(k,g),_=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),D=await hp(e,g.name,C,{workspaceId:i,importerId:t.id,target:b,..._?{origin:_}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(D===null)return{landed:d,failed:f,cancelled:!0};d.push(D)}catch(b){f.push({name:g.name,error:b?.message??String(b)})}return{landed:d,failed:f,cancelled:!1}}async function Ac(e,t,n){const r=new Map;if(n.length===0)return r;const i=(await e.find()).filter(c=>c.workspaceId===t),s=new Map(i.map(c=>[c.name,c])),a=new Map(i.map(c=>[c.id,c]));for(const c of n){if(!mp(c))continue;const d=s.get(c.name)??a.get(c.id),f=d?.id??c.id;d&&r.set(c.id,d.id);const g=d?d.builtin:c.builtin,b={...c,id:f,workspaceId:t};g===void 0?delete b.builtin:b.builtin=g,await e.upsert(b),s.set(b.name,b),a.set(b.id,b)}return r}function mp(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const gp={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function bp(e){e.ui.registerImporter(Rc),e.ui.registerDropHandler(async t=>{const r=Sp(t).filter(Ep);if(r.length===0)return!1;t.preventDefault();for(const i of r)await yp(e,i);return!0})}function So(e){return ze(e)?Ws(e)||Array.isArray(e.tables)?!0:Dc(e):!1}function wp(e){return e.kind==="file"&&e.file?Ps(e.file.name):e.kind==="url"&&e.url?Ps(Dn(e.url)):Ps(e.name??"imported")}const Rc={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Dn(t.url)}…`):n=t.text??"";const r=wp(t);let i;try{i=JSON.parse(n)}catch(a){throw new Error(`Invalid JSON in ${r}: ${a.message}`)}const s=Oi(i,r);return s.map(a=>({name:a.name,rowCount:a.rows.length,handle:{table:a,input:t,single:s.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function Ps(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function yp(e,t){const n=await t.text();let r;try{r=JSON.parse(n)}catch(a){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${a.message}`)});return}if(So(r)){await Eo(e,n,t.name);return}const i=await Ic(e,Rc,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=i.landed.reduce((a,c)=>a+c.rowCount,0);i.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${s.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Eo(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let s;try{s=JSON.parse(t)}catch(D){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${D.message}`)});return}const a=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Oi(s,a);if(c.length===0)return;let d=c;if(c.length>1){const D=await gi(c.map(M=>({name:M.name,size:M.rows.length})),{title:"Import tables",message:`"${n}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!D)return;d=D.map(M=>c[M])}const f=(await e.store.tables.find()).filter(D=>D.workspaceId===i),g=new Set(d.map(D=>D.name)),b=f.filter(D=>g.has(D.name));let y;if(b.length===0&&d.length===1)y="append-new";else{const D=b.length>0?[`Overwrite matching (${b.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],M=await e.ui.dialogs.choice(`Importing ${d.length} table${d.length===1?"":"s"} from "${n}".${b.length>0?`

${b.length} table${b.length===1?"":"s"} share a name with existing data.`:""}`,D,"JSON import");if(!M)return;M.startsWith("Overwrite matching")?y="overwrite-matching":M==="Replace entire workspace"?y="replace-workspace":y="append-new"}const k=2e3,C=d.reduce((D,M)=>D+(M.source?0:Math.min(M.rows.length,r.maxRows??1/0)),0);let _=null;if(C>=k){const{TopProgress:D}=await at(async()=>{const{TopProgress:M}=await import("./top-progress-BYb4JhTQ.js");return{TopProgress:M}},[]);_=D.begin(`Importing ${n}…`)}try{if(y==="replace-workspace")for(const H of f){const Q=e.store.rows(H.id),ne=await Q.find();await Q.bulkRemove(ne.map(W=>W.id)),await e.store.tables.remove(H.id)}const D=new Map(f.map(H=>[H.name,H])),M=new Map;let U=0;for(const H of d){const Q=H.source,ne=H.origin??(!Q&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let W;const q=y==="overwrite-matching"?D.get(H.name):void 0;let Y=H.columns,se=H.rows;if(r.editColumns&&!q&&!Q){const B=await r.editColumns(Y,H.name);if(B===null)continue;se=Cp(se,Y,B),Y=B}if(q){if(W=q.id,!q.source){const B=e.store.rows(W),K=await B.find();await B.bulkRemove(K.map(ue=>ue.id))}await e.store.tables.patch(W,{columns:Y,...H.title?{title:H.title}:{},...H.windowGeometry?{windowGeometry:H.windowGeometry}:{},...H.sortColumn?{sortColumn:H.sortColumn,sortAsc:H.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...H.filters?{filters:H.filters}:{},...H.labelColumn?{labelColumn:H.labelColumn}:{},...H.info?{info:H.info}:{},...H.deletedColumns?{deletedColumns:H.deletedColumns}:{},...H.readonly?{readonly:!0}:{},source:Q??void 0,origin:ne??void 0,updatedAt:Date.now()})}else W=Ee(),e.events.emit("import:before",{source:"json",tableId:W}),await e.store.tables.insert({id:W,workspaceId:i,name:H.name,code:Ge(H.name),columns:Y,view:"table",...H.title?{title:H.title}:{},...H.windowGeometry?{windowGeometry:H.windowGeometry}:{},...H.sortColumn?{sortColumn:H.sortColumn,sortAsc:H.sortAsc??!0}:{},...H.filters?{filters:H.filters}:{},...H.labelColumn?{labelColumn:H.labelColumn}:{},...H.info?{info:H.info}:{},...H.deletedColumns?{deletedColumns:H.deletedColumns}:{},...H.readonly?{readonly:!0}:{},...Q?{source:Q}:{},...ne?{origin:ne}:{},updatedAt:Date.now()});M.set(H.name,W);let oe=0;if(!Q){const B=e.store.rows(W),ue=(r.maxRows!=null?se.slice(0,r.maxRows):se).map(ge=>({id:Ee(),tableId:W,data:ge,updatedAt:Date.now()}));await B.bulkInsert(ue),oe=ue.length,U+=oe,_?.fraction(C>0?U/C:1)}e.events.emit("import:after",{source:"json",tableId:W,rowCount:oe})}await vp(e,s,i,M,y==="replace-workspace")}finally{_?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function vp(e,t,n,r,i){if(!ze(t))return;const s=t,a=Array.isArray(s.viewTemplates)?s.viewTemplates:[],c=Array.isArray(s.viewInstances)?s.viewInstances:[];if(a.length===0&&c.length===0)return;if(i){const f=(await e.store.viewInstances.find()).filter(g=>g.workspaceId===n);await e.store.viewInstances.bulkRemove(f.map(g=>g.id))}const d=await Ac(e.store.viewTemplates,n,a);for(const f of c){if(!ze(f)||typeof f.id!="string")continue;const g=(f.tableName?r.get(f.tableName):void 0)??f.tableId;if(!g)continue;const b=d.get(f.templateId)??f.templateId;await e.store.viewInstances.upsert({...f,workspaceId:n,tableId:g,templateId:b})}}function Oi(e,t){if(ze(e)&&Ws(e))return Xa(e);if(ze(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const i of n.tables){if(Oc(i)){r.push(Qa(i));continue}ze(i)&&Ws(i)&&r.push(...Xa(i))}return r}if(Dc(e))return[Qa(e)];if(Array.isArray(e)){const n=e.filter(ze);return n.length===0?[]:[{name:t,...Ja(n)}]}return ze(e)?[{name:t,...Ja([e])}]:[]}function Ws(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!ze(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function Xa(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!ze(r))continue;const i=r;if(!Array.isArray(i.dataArray)||!Array.isArray(i.columns))continue;const s=n.replace(/\.table\.json$/,""),a=i.columns.map(g=>xp(g)),c=a.map(g=>g.field),d=i.dataArray.filter(g=>Array.isArray(g)).map(g=>{const b={};for(let y=0;y<c.length;y++)b[c[y]]=g[y];return b}),f={name:s,columns:a,rows:d};if(i.elementRect&&typeof i.elementRect.x=="number"&&typeof i.elementRect.y=="number"){const g=i.elementRect;f.windowGeometry={x:g.x,y:g.y,w:g.width??600,h:g.height??400,z:g.zIndex??100,minimized:!!g.minimized,maximized:!!g.maximized}}typeof i.sortColumn=="number"&&i.sortColumn>=0&&i.sortColumn<c.length&&(f.sortColumn=c[i.sortColumn],f.sortAsc=(i.sortDirection??"asc")!=="desc"),t.push(f)}return t}function xp(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",i={field:t,label:n,type:r};return e.isUnique&&(i.unique=!0),e.isNotNull&&(i.notnull=!0),i}function Oc(e){return ze(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Dc(e){return Oc(e)&&Array.isArray(e.rows)}function Qa(e){const t=e,n=ze(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,i=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,s=typeof t.title=="string"?t.title:void 0,a=ze(t.filters)?t.filters:void 0,c=typeof t.labelColumn=="string"?t.labelColumn:void 0,d=ze(t.info)?t.info:void 0,f=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(k=>typeof k=="string"):void 0,g=t.readonly===!0?!0:void 0,b=ze(t.source)&&typeof t.source.type=="string"?t.source:void 0,y=ze(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map($p),rows:Array.isArray(e.rows)?e.rows.filter(ze):[],...s?{title:s}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:i??!0}:{},...a?{filters:a}:{},...c?{labelColumn:c}:{},...d?{info:d}:{},...f?{deletedColumns:f}:{},...g?{readonly:g}:{},...b?{source:b}:{},...y?{origin:y}:{}}}function $p(e){if(!ze(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",i=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(i=i??r,r="string");const s={field:n,label:String(t.label??n),type:r};return i&&(s.renderer=i),typeof t.script=="string"&&(s.script=t.script),s}function Ja(e){const t=new Set;for(const i of e)for(const s of Object.keys(i))t.add(s);return{columns:Array.from(t).map(i=>({field:i,label:i,type:kp(e.map(s=>s[i]))})),rows:e}}function kp(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&_p(n))?"date":"string"}function _p(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function Cp(e,t,n){const r=Co(t,n);return r?e.map(r):e}function ze(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Sp(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}function Ep(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const Tp=Object.freeze(Object.defineProperty({__proto__:null,init:bp,isWorkspaceDump:So,meta:gp,parsedToTables:Oi,restoreWorkspaceDump:Eo},Symbol.toStringTag,{value:"Module"}));var Ip=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,To=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ap(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Ip(t,n,i),i};let Zr=null;function Rp(){return Zr||(Zr=document.createElement("anchored-menu"),document.body.appendChild(Zr)),Zr}let pn=class extends xe{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return Rp().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?$`
      <div class="menu" role="menu">
        ${this.items.map(e=>$`
            <button
              role="menuitem"
              class=${e.danger?"danger":""}
              @click=${()=>this.finish(e.id)}
            >
              ${e.icon?$`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:$``}};pn.styles=[ut,$e`
      :host {
        position: fixed;
        z-index: 150000;
      }
      :host([hidden]) {
        display: none;
      }
      .menu {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 0.4rem;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
        padding: 0.25rem;
        min-width: 190px;
        /* Shadow DOM does not inherit the page font, so the buttons' inherited
           font would fall back to the browser default serif. Set the app's
           chrome font (system-ui) explicitly; the buttons inherit it. */
        font-family: system-ui, sans-serif;
        font-size: 0.875rem;
        color: #111;
      }
      button {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        width: 100%;
        border: 0;
        background: transparent;
        font: inherit;
        text-align: left;
        padding: 0.45rem 0.6rem;
        border-radius: 0.3rem;
        cursor: pointer;
        color: #111;
      }
      button:hover {
        background: #f3f4f6;
      }
      button.danger {
        color: #b91c1c;
      }
      .mi {
        font-size: 1.15rem;
        color: #6b7280;
      }
    `];To([N()],pn.prototype,"items",2);To([N()],pn.prototype,"shown",2);pn=To([Se("anchored-menu")],pn);const pr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return pn}},Symbol.toStringTag,{value:"Module"})),Ys='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Op={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:Ys,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function Dp(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:Ys,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>Za(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:Ys,keywords:["datasette","live","remote","backend"],run:t=>Za(t)})}async function Pp(){const{registries:e}=await ae();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function Za(e,t){const n=await Pp();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const i=t?.getBoundingClientRect(),s=i?await pn.open(i,n.map(a=>({id:a.id,label:a.label,icon:a.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(a=>a.label),"Connect");if(!s)return;r=i?n.find(a=>a.id===s):n.find(a=>a.label===s)}if(r)try{await r.connect(e)}catch(i){await e.ui.dialogs.alert(i?.message??String(i),`Connect ${r.label} failed`)}}const Lp=Object.freeze(Object.defineProperty({__proto__:null,init:Dp,meta:Op},Symbol.toStringTag,{value:"Module"}));function el(e,t){return JSON.stringify(t.map(n=>e[n]))}function Mp(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function Pc(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:i,deletedRemoteFields:s=[]}=e,a=new Set(s),c=b=>{const y={...b};for(const k of a)delete y[k];return y};if(!(r.length>0&&n.every(b=>Mp(b,r))))return{data:n.map(c),merged:!1};const f=new Map;for(const b of t){const y=el(b.data,r);f.has(y)||f.set(y,b)}return{data:n.map(b=>{const y=c(b),k=el(b,r),C=f.get(k);if(C)for(const _ of i)Object.prototype.hasOwnProperty.call(C.data,_)&&(y[_]=C.data[_]);return y}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lc=Symbol.for(""),zp=e=>{if(e?.r===Lc)return e?._$litStatic$},tl=e=>({_$litStatic$:e,r:Lc}),nl=new Map,jp=e=>(t,...n)=>{const r=n.length;let i,s;const a=[],c=[];let d,f=0,g=!1;for(;f<r;){for(d=t[f];f<r&&(s=n[f],(i=zp(s))!==void 0);)d+=i+t[++f],g=!0;f!==r&&c.push(s),a.push(d),f++}if(f===r&&a.push(t[r]),g){const b=a.join("$$lit$$");(t=nl.get(b))===void 0&&(a.raw=a,nl.set(b,t=a)),n=c}return e(t,...n)},rl=jp($);function il(e){return e==null||String(e).trim()===""}function vr(e){const t=[];let n="",r=!1,i=!1,s=!1,a=!1,c=!1,d=!1,f=!0;const g=()=>{const b=s?n:n.trim();if(r||a){const y={term:b,negate:a};c&&(y.prefix=!0),d&&(y.exact=!0),t.push(y)}n="",r=!1,i=!1,s=!1,a=!1,c=!1,d=!1,f=!0};for(let b=0;b<e.length;b++){const y=e[b];if(y==='"'){if(i&&e[b+1]==='"'){n+='"',r=!0,b++;continue}i=!i,s=!0,r=!0,f=!1;continue}if(y===","&&!i){g();continue}if(y==="!"&&!i&&f&&!a&&!c&&!d){a=!0;continue}if(y==="="&&!i&&f&&!c&&!d){d=!0;continue}if(y==="^"&&!i&&f&&!c&&!d){c=!0;continue}f&&!i&&/\s/.test(y)||(f=!1),n+=y,/\s/.test(y)||(r=!0)}return g(),t}function Np(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")}function fr(e){return e.map(t=>{const n=t.term===""&&t.negate?"":Np(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term,r=t.exact?"=":t.prefix?"^":"";return(t.negate?"!":"")+r+n}).join(",")}function sl(e,t){const n=t.term;if(n.trim()===""||!t.prefix&&!t.exact&&n.toUpperCase()==="NULL")return il(e);const r=String(e??"").toLowerCase(),i=n.toLowerCase();return t.exact?r===i:t.prefix?r.startsWith(i):r.includes(i)}function bi(e,t){const n=vr(t);if(n.length===0)return!0;for(const i of n)if(i.negate&&sl(e,i))return!1;const r=n.filter(i=>!i.negate);return r.length===0?!0:r.some(i=>sl(e,i))}var Up=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Mn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Fp(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Up(t,n,i),i};function Ls(e){return fr([{...e,negate:!1}])}let it=class extends xe{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,i){return this.values=t,this.blanks=r,this.onChange=i??null,this.states=new Map(vr(n??"").map(s=>[Ls(s),{state:s.negate?"not":"on",token:s}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},n=Ls(t),r=new Map(this.states),i=r.get(n);i===void 0?r.set(n,{state:"on",token:t}):i.state==="on"?r.set(n,{state:"not",token:i.token}):r.delete(n),this.states=r;const s=[...r.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=fr(s),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),it.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),it.instance===this&&(it.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(a=>a.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=a=>this.states.get(Ls({term:a,negate:!1}))?.state,i=a=>$`
      <span class=${`cb${a?` ${a}`:""}`}
        >${a==="on"?"✓":a==="not"?"✕":""}</span
      >
    `,s=a=>a==="on"?"Included — click to exclude":a==="not"?"Excluded — click to clear":"Click to include → exclude → off";return $`
      <header>
        <span class="mi sm">search</span>
        <input
          type="text"
          autofocus
          placeholder="Filter values…"
          .value=${this.search}
          @input=${a=>this.search=a.target.value}
        />
        <button
          class="icon"
          title="Close"
          @click=${()=>this.close(null)}
        >
          <span class="mi sm">close</span>
        </button>
      </header>
      <div class="hint">Click a value: include (✓) → exclude (✕) → off.</div>
      ${t.length===0&&!n?$`<div class="empty">No matching values.</div>`:$`<ul>
            ${n?$`
                  <li
                    class="blanks"
                    title=${s(r("NULL"))}
                    @click=${()=>this.cycle("NULL")}
                  >
                    <span class="left">
                      ${i(r("NULL"))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(a=>{const c=r(a.value);return $`
                <li title=${s(c)} @click=${()=>this.cycle(a.value)}>
                  <span class="left">
                    ${i(c)}
                    <span class="label">${a.value}</span>
                  </span>
                  <span class="count">${a.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?$`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};it.instance=null;it.styles=[ut,$e`
      :host {
        position: fixed;
        z-index: 150000;
        background: white;
        border: 1px solid #d1d5db;
        border-radius: 0.35rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
        min-width: 220px;
        max-width: 320px;
        max-height: 360px;
        display: flex;
        flex-direction: column;
        font: 0.85rem system-ui, sans-serif;
        overflow: hidden;
      }
      :host([hidden]) {
        display: none;
      }
      header {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.35rem 0.45rem;
        border-bottom: 1px solid #e5e7eb;
        background: #f9fafb;
      }
      header input {
        flex: 1;
        font: inherit;
        padding: 0.2rem 0.4rem;
        border: 1px solid #d1d5db;
        border-radius: 0.2rem;
      }
      header button.icon {
        background: transparent;
        border: 0;
        cursor: pointer;
        color: #6b7280;
        padding: 0 0.1rem;
      }
      header button.icon:hover {
        color: #111;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        overflow: auto;
        flex: 1;
      }
      li {
        padding: 0.25rem 0.55rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        align-items: center;
      }
      li:hover {
        background: #eff6ff;
      }
      li .count {
        color: #6b7280;
        font-variant-numeric: tabular-nums;
        font-size: 0.78rem;
      }
      li .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      li.blanks .label {
        color: #6b7280;
      }
      li .left {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        min-width: 0;
      }
      /* Tri-state checkbox: off (empty gray) → on (green ✓) → not (red ✕). */
      .cb {
        flex: 0 0 auto;
        width: 14px;
        height: 14px;
        border: 1px solid #9ca3af;
        border-radius: 0.15rem;
        background: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        line-height: 1;
        font-weight: 700;
        color: transparent;
        user-select: none;
      }
      .cb.on {
        border-color: #16a34a;
        background: #dcfce7;
        color: #15803d;
      }
      .cb.not {
        border-color: #dc2626;
        background: #fee2e2;
        color: #b91c1c;
      }
      .hint {
        padding: 0.3rem 0.55rem;
        border-bottom: 1px solid #e5e7eb;
        color: #6b7280;
        font-size: 0.75rem;
      }
      .empty {
        padding: 0.6rem;
        color: #9ca3af;
        font-style: italic;
      }
      .actions {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.45rem;
        border-top: 1px solid #e5e7eb;
        background: #f9fafb;
      }
      button.text {
        background: transparent;
        border: 0;
        color: #2563eb;
        font: inherit;
        cursor: pointer;
        padding: 0;
      }
      button.text:hover {
        text-decoration: underline;
      }
      .cap {
        color: #9ca3af;
        font-size: 0.78rem;
        font-style: italic;
      }
    `];Mn([ct({type:Array})],it.prototype,"values",2);Mn([ct({type:Number})],it.prototype,"blanks",2);Mn([ct({type:String})],it.prototype,"current",2);Mn([N()],it.prototype,"search",2);Mn([N()],it.prototype,"states",2);it=Mn([Se("filter-popover")],it);var Bp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,kt=(e,t,n,r)=>{for(var i=r>1?void 0:r?Hp(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Bp(t,n,i),i};let lt=class extends xe{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return $`
      <div class="wrap">
        <input
          type="text"
          placeholder=${this.placeholder}
          .value=${this.value}
          @focus=${()=>this.openDropdown()}
          @click=${()=>this.openDropdown()}
          @blur=${()=>this.closeDropdown()}
          @input=${this.onInput}
          @keydown=${this.onKeyDown}
        />
        ${this.value?$`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:re}
      </div>
      ${t?$`<ul
            class="dropdown"
            style=${n}
            @mousedown=${r=>r.preventDefault()}
          >
            ${e.map((r,i)=>$`
                <li
                  class=${i===this.highlightIdx?"highlighted":""}
                  @mousedown=${s=>s.preventDefault()}
                  @click=${()=>this.onPick(r)}
                >
                  ${r}
                </li>
              `)}
          </ul>`:re}
    `}};lt.styles=$e`
    :host {
      display: block;
      width: 100%;
    }
    .wrap {
      position: relative;
      display: block;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #d1d5db;
      border-radius: 0.2rem;
      background: white;
      font: inherit;
      font-size: 0.8rem;
      padding: 0.1rem 1.1rem 0.1rem 0.3rem;
    }
    input::placeholder {
      color: #9ca3af;
      font-style: italic;
    }
    input:focus {
      outline: 2px solid #3b82f6;
      outline-offset: -2px;
    }
    button.clear {
      position: absolute;
      right: 0.15rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.95rem;
      height: 0.95rem;
      padding: 0;
      border: 0;
      background: transparent;
      color: #9ca3af;
      cursor: pointer;
      font-size: 0.85rem;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    button.clear:hover {
      color: #111827;
      background: #e5e7eb;
    }
    .dropdown {
      position: fixed;
      z-index: 150000;
      background: white;
      border: 1px solid #d1d5db;
      border-radius: 0.25rem;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
      max-height: 260px;
      max-width: 360px;
      overflow: auto;
      font: inherit;
      font-size: 0.8rem;
      margin: 0;
      padding: 0.15rem 0;
      list-style: none;
    }
    .dropdown li {
      padding: 0.2rem 0.5rem;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .dropdown li:hover,
    .dropdown li.highlighted {
      background: #eff6ff;
    }
  `;kt([ct({type:String})],lt.prototype,"value",2);kt([ct({type:Array})],lt.prototype,"options",2);kt([ct({type:String})],lt.prototype,"placeholder",2);kt([N()],lt.prototype,"open",2);kt([N()],lt.prototype,"highlightIdx",2);kt([N()],lt.prototype,"dropTop",2);kt([N()],lt.prototype,"dropLeft",2);kt([N()],lt.prototype,"dropMinWidth",2);kt([N()],lt.prototype,"editing",2);kt([Rt("input")],lt.prototype,"inputEl",2);lt=kt([Se("filter-combobox")],lt);function qp(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(c=>c.toLowerCase())};const i=[];let s=[];for(const c of n)c==="OR"?(i.push(s),s=[]):c==="AND"||s.push(c.toLowerCase());i.push(s);const a=i.filter(c=>c.length>0);return a.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:a}}function Kp(e,t,n){const r=qp(t);if(r.kind==="boolean")return e.filter(d=>r.groups.some(f=>f.every(g=>n(d,g))));const{phrase:i,words:s}=r;if(s.length<=1)return i===""?e:e.filter(d=>n(d,i));const a=e.filter(d=>n(d,i));if(a.length>0)return a;const c=e.filter(d=>s.every(f=>n(d,f)));return c.length>0?c:e.filter(d=>s.some(f=>n(d,f)))}const Vp=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function wi(e,t,n){const r=new Map;for(const c of n)r.set(c.field.toLowerCase(),c.field),c.label&&r.set(c.label.toLowerCase(),c.field);const i=[...r.keys()].filter(Boolean).sort((c,d)=>d.length-c.length);let s=t;return i.length>0&&(s=s.replace(new RegExp(`(^|\\s)(${i.map(Vp).join("|")}):\\s+`,"gi"),"$1$2:")),Kp(e,s,(c,d)=>{const f=d.indexOf(":");if(f>0){const g=r.get(d.slice(0,f));if(g)return bi(c.data[g],d.slice(f+1))}return Object.values(c.data).some(g=>g!=null&&String(g).toLowerCase().includes(d))})}const ol=new Map;function Gp(e){const t=ol.get(e);if(t)return t;const n=new Function("row",`${e}
return render(row);`);return ol.set(e,n),n}function Mc(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=Gp(e)}catch(r){return{ok:!1,label:"compile error",message:al(r)}}try{return{ok:!0,value:n(t)}}catch(r){return{ok:!1,label:"runtime error",message:al(r)}}}function al(e){return e instanceof Error?e.message:String(e)}const yi="easydb:visible-count";function zc(e,t,n){e&&document.dispatchEvent(new CustomEvent(yi,{detail:{key:e,count:t,total:n}}))}function jc(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const Nc="#dc2626",Uc="cell-invalid",Wp=`border-color:${Nc};background:#fef2f2`;function Io(e,t){e.classList.add(Uc),e.style.border=`1px solid ${Nc}`,e.style.background="#fef2f2",t&&(e.title=t)}function Yp(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return Fc(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";default:return"ok"}}const Xp=/^\s*(true|1)\s*$/i,Qp=/^\s*(false|0)\s*$/i;function Fc(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":Xp.test(e)?"true":Qp.test(e)?"false":"invalid":"invalid"}var Jp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,De=(e,t,n,r)=>{for(var i=r>1?void 0:r?Zp(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Jp(t,n,i),i};const ef=200,tf=10,Ms=32;let Ie=class extends xe{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=this.rows.length;t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,zc(e,t,n))}async bind(){if(!this.tableId)return;const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(a=>a.id===this.tableId);s&&(this.tableColumns=s.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(i=>{const s=i.find(a=>a.id===this.viewInstanceId);s&&(this.viewInst=s,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(a=>a.id===this.tableId);s&&this.applyTable(s)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const n=e.store.rows(this.tableId);this.unsubscribe=n.subscribe(i=>this.rows=i);const r=window.setTimeout(()=>this.loading=!0,ef);try{this.rows=await n.find()}catch(i){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${i?.message??String(i)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(r),this.loading=!1}}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=ul(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const i=n[r.field];return typeof i=="number"?{...r,width:i}:r}),this.sortSpecs=ul(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await ae();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const i=this.columns.find(s=>s.field===n);if(i){const s=sf(i,r,this.rows,t.id);if(s){await e.api.ui.dialogs.alert(s,`Cannot save ${i.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(s){await e.api.ui.dialogs.alert(s?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const i=String(n);return $`<input
      type="text"
      class=${Uc}
      style=${Wp}
      title=${r}
      .value=${i}
      @keydown=${s=>this.cancelCellEdit(s,i)}
      @change=${s=>this.setCell(e,t.field,s.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?$`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?$``:e.type==="date"?$`${ei(t)}`:e.type==="datetime"?$`${ti(t).replace("T"," ")}`:$`${String(t)}`}renderScriptedCell(e,t){const n=Mc(t.script,e.data);if(!n.ok)return $`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return $`${n.value==null?"":String(n.value)}`;const i=tl(r);return rl`<${i}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      @change=${this.readOnly?void 0:s=>this.setCell(e,t.field,s.detail.value)}
    ></${i}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=t.renderer,i=r?this.cellRenderers?.get(r):void 0;if(i){const s=tl(i);return rl`<${s}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${this.readOnly}
        @change=${a=>this.setCell(e,t.field,a.detail.value)}
      ></${s}>`}if(this.readOnly)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return cl(n,ei(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):$`<input
          type="date"
          .value=${ei(n)}
          @keydown=${s=>this.cancelCellEdit(s,ei(n))}
          @change=${s=>this.setCell(e,t.field,s.target.value||null)}
        />`;case"datetime":return cl(n,ti(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):$`<input
          type="datetime-local"
          .value=${ti(n)}
          @keydown=${s=>this.cancelCellEdit(s,ti(n))}
          @change=${s=>this.setCell(e,t.field,s.target.value||null)}
        />`;case"number":{const s=n==null||n==="";return!s&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):$`<input
          type="number"
          .value=${s?"":String(n)}
          @keydown=${a=>this.cancelCellEdit(a,s?"":String(n))}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`}default:return $`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${s=>this.cancelCellEdit(s,String(n??""))}
          @change=${s=>this.setCell(e,t.field,s.target.value)}
        />`}}async deleteRow(e){const t=await ae();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=this.sortSpecs.find(s=>s.field===e),r=this.sortSpecs.length===1&&this.sortSpecs[0]?.field===e;if(!t&&!r){this.sortSpecs=[{field:e,asc:!0}],await this.persistSort(this.sortSpecs);return}const i=t?this.sortSpecs.filter(s=>s.field!==e):[];n?n.asc&&i.push({field:e,asc:!1}):i.push({field:e,asc:!0}),this.sortSpecs=i,await this.persistSort(i)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await ae();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}filteredRows(){const e=new Set(this.columns.filter(a=>a.filterable===!1).map(a=>a.field)),t=Object.entries(this.filters).filter(([a,c])=>c&&c.trim().length>0&&!e.has(a)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let i=this.rows;t.length>0&&(i=i.filter(a=>t.every(([c,d])=>bi(a.data[c],d))));const s=this.columns.filter(a=>a.filterable!==!1);return r&&(i=wi(i,r,s)),n&&(i=wi(i,n,s)),i}sortedRows(){const e=this.filteredRows();if(this.sortSpecs.length===0)return e;const t=this.sortSpecs.map(r=>({field:r.field,factor:r.asc?1:-1,type:this.columns.find(i=>i.field===r.field)?.type??"string"})),n=[...e];return n.sort((r,i)=>{for(const s of t){const a=of(r.data[s.field],i.data[s.field],s.type,s.factor);if(a!==0)return a}return 0}),n}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=it.instance;if(!r)return;const i=new Map;let s=0;for(const d of this.rowsFacetedFor(t)){const f=d.data[t];if(f==null||String(f).trim()===""){s++;continue}const g=String(f);i.set(g,(i.get(g)??0)+1)}let a=[...i.entries()].map(([d,f])=>({value:d,count:f})).sort((d,f)=>f.count-d.count||d.value.localeCompare(f.value));this.columns.find(d=>d.field===t)?.type==="boolean"&&(a=[...["true","false"].map(f=>({value:f,count:i.get(f)??0})),...a.filter(f=>f.value!=="true"&&f.value!=="false")]);const c=await r.open(n.getBoundingClientRect(),a,this.filters[t]??"",s,d=>this.onFilterInput(t,d));c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e&&!t.has(r));return n.length===0?this.rows:this.rows.filter(r=>n.every(([i,s])=>bi(r.data[i],s)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const n=50,r=500;for(const i of this.visibleColumns){let s=!0;for(const c of t){const d=c.data[i.field];if(d==null)continue;if((typeof d=="string"?d:String(d)).length>=n){s=!1;break}}if(!s)continue;const a=new Set;for(const c of this.rowsFacetedFor(i.field)){const d=c.data[i.field];if(d==null||d==="")continue;const f=typeof d=="string"?d:String(d);if(!(f.length>=n)&&(a.add(f),a.size>=r))break}e.set(i.field,[...a].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((i,s)=>{if(i.width!=null)return;const a=t[s];a&&r.set(i.field,Math.round(a.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(i=>r.has(i.field)?{...i,width:r.get(i.field)}:i))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const i=a=>{if(!this.resizing)return;const c=a.clientX-this.resizing.startX,d=Math.max(tf,this.resizing.startW+c);this.columns=this.columns.map(f=>f.field===this.resizing.field?{...f,width:d}:f)},s=async()=>{window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s);const a=this.resizing?.field;if(this.resizing=null,!a)return;const c=await ae();if(this.viewMode){const d={...this.viewInst?.columnWidths??{}};for(const f of this.columns)typeof f.width=="number"&&(d[f.field]=f.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:d,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",i),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=i?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const i=[...this.columns],s=i.findIndex(f=>f.field===n);if(s<0)return;const[a]=i.splice(s,1);let c=i.findIndex(f=>f.field===t);if(c<0){i.splice(s,0,a);return}r==="after"&&(c+=1),i.splice(c,0,a);const d=await ae();this.viewMode?await d.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:i.map(f=>f.field),updatedAt:Date.now()}):await d.store.tables.patch(this.tableId,{columns:i,updatedAt:Date.now()})}async saveFilters(){const e=await ae(),t={};for(const[r,i]of Object.entries(this.filters))i&&i.trim().length>0&&(t[r]=i);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+Ms}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),i=Math.min(e.length,r+n);return{slice:e.slice(r,i),topPad:r*t,bottomPad:(e.length-i)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:i}=this.virtualSlice(e),s=this.computeFilterSuggestions(),a=this.externalLoading?this.externalProgress:null;return $`
      ${this.loading||this.externalLoading?$`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${a!=null?Math.round(a*100):re}
          >
            <div
              class="load-bar-fill ${a!=null?"determinate":""}"
              style=${a!=null?`width:${Math.max(2,Math.round(a*100))}%`:re}
            ></div>
          </div>`:re}
      <table style=${this.tableSizingStyle(t)??re}>
        <colgroup>
          ${t.map(c=>$`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:${Ms}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const d=c.sortable!==!1,f=c.filterable!==!1,g=this.sortSpecs.findIndex(Q=>Q.field===c.field),b=g>=0?this.sortSpecs[g]:void 0,y=b?b.asc?"asc":"desc":null,k=d?y==="asc"?"▲":y==="desc"?"▼":"⇅":"",C=this.sortSpecs.length>1&&g>=0?String(g+1):"",_=`t-${c.type}`,D=this.dragSourceField===c.field,M=this.dropTargetField===c.field,U=M&&this.dropEdge==="before"?" drop-before":M&&this.dropEdge==="after"?" drop-after":"",H=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${d?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(f?"":" · not filterable");return $`
                <th
                  class=${`${_}${y?" sorted":""}${D?" drag-source":""}${U}${d?"":" no-sort"}`}
                  title=${H}
                  @click=${Q=>d&&this.toggleSort(c.field,Q.shiftKey)}
                  @dragover=${Q=>this.onColDragOver(Q,c.field,Q.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${Q=>this.onColDrop(Q,c.field)}
                >
                  <div class="col-head">
                    <!-- The grip, sort arrow and funnel glyph are decoration: a
                         Material Icons glyph is its own ligature text, so without
                         aria-hidden a header's accessible name reads
                         "drag_indicator a filter_list" and every column looks
                         alike to a screen reader (and to a by-name query). -->
                    <span
                      class="col-grip mi sm"
                      title="Drag to reorder column"
                      aria-hidden="true"
                      draggable="true"
                      @click=${Q=>Q.stopPropagation()}
                      @dragstart=${Q=>this.onColDragStart(Q,c.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${c.label}${c.units?$`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true"
                      >${k}${C?$`<span class="sort-rank">${C}</span>`:re}</span
                    >
                    ${f?$`<button
                          class=${`funnel${this.filters[c.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${c.label||c.field}`}
                          @click=${Q=>this.openFilterPicker(Q,c.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${Q=>Q.stopPropagation()}
                    @pointerdown=${Q=>this.onResizeStart(Q,c.field,Q.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${Ms}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{if(c.filterable===!1)return $`<th></th>`;const d=s.get(c.field)??[];return $`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${d}
                    placeholder="filter…"
                    title="Filter: text = contains, ^text = starts with, !text = does not contain, NULL = empty, !NULL = has a value. Comma-separate for several values (a,b = a OR b; !a,!b excludes both); quote a value containing a comma."
                    @filter-change=${f=>this.onFilterInput(c.field,f.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${r>0?$`<tr class="spacer" style=${`height:${r}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${n.map(c=>$`
              <tr>
                ${t.map(d=>$`<td
                      class=${`t-${d.type}${d.renderer?` r-${d.renderer}`:""}${rf(c,d)}`}
                      title=${nf(c,d)}
                    >
                      ${this.renderCell(c,d)}
                    </td>`)}
                <td>
                  ${this.readOnly?re:$`<button
                        class="danger"
                        title="Delete row"
                        @click=${()=>this.deleteRow(c.id)}
                      >
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${i>0?$`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Ie.styles=[ut,$e`
      :host {
        display: block;
        overflow: auto;
        /* Fill whatever box the host gives us and scroll inside it. This used to
           be a hard 60vh, which BEAT the height:100% the panel sets inline
           (max-height wins over height) — so a maximized window left a dead gap
           between the last row and the panel footer. 100% caps us at the parent
           when its height is definite (a jsPanel content box always is) and is
           ignored when it isn't, so a standalone mount still grows to its
           content. view-window.ts overrides this with max-height:none because
           it drives the height with flex instead. */
        max-height: 100%;
      }
      /* Indeterminate loading bar, pinned to the top of the table's header while
       a (large / remote) table's rows are still loading. Sticky + high z-index
       so it rides above the sticky column headers (th z-index 1–2). */
      .load-bar {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 3;
        height: 8px;
        background: #dbeafe;
        overflow: hidden;
      }
      .load-bar-fill {
        height: 100%;
        background: #2563eb;
      }
      /* Indeterminate: a moving sliver, shown before any progress is known. */
      .load-bar-fill:not(.determinate) {
        width: 40%;
        border-radius: 4px;
        animation: eda-load-bar 1.1s ease-in-out infinite;
      }
      /* Determinate: width tracks the actual fraction loaded (set inline). */
      .load-bar-fill.determinate {
        width: 0;
        transition: width 0.2s ease;
      }
      @keyframes eda-load-bar {
        0% {
          transform: translateX(-120%);
        }
        100% {
          transform: translateX(320%);
        }
      }
      table {
        /* min-width keeps a narrow table filling the panel; max-content lets a
           wide one grow past it (the host scrolls). Under table-layout:fixed
           (set inline once a column is resized) the sum of the <col> widths is
           authoritative, which is what makes per-column resize actually stick —
           auto layout silently ignores <col> widths on content-heavy tables. */
        width: max-content;
        min-width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
      }
      th,
      td {
        border: 1px solid #e5e7eb;
        padding: 0.25rem 0.5rem;
        text-align: left;
        vertical-align: top;
        /* A narrow column must CHOP its content, not spill it over the next
           column and not wrap into a taller row. One line + ellipsis also keeps
           every row the same height, which the row virtualization assumes when
           it converts scrollTop into a row index. */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      th {
        background: #f9fafb;
        position: sticky;
        top: 0;
        z-index: 1;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
      }
      th:hover {
        background: #eef2f7;
      }
      /* Header cell layout: grip on the left, label taking the free space, then
         the sort + filter icons pinned to the right edge of the column. The
         flex lives on an inner wrapper — display:flex on the th itself would
         drop it out of table-cell layout and the columns would stack. */
      th .col-head {
        display: flex;
        align-items: center;
        gap: 0.15rem;
      }
      th .col-head .col-label {
        flex: 1 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /* Link cells chop their display length. A ~40ch cap stops a long URL
         from blowing the column out to its full width; the anchor inside (a
         min-width:0 flex child with text-overflow:ellipsis) truncates to the
         cap — and shrinks *further*, to whatever the column actually offers,
         when it's narrower (many columns, a narrow panel, mobile). Pure CSS,
         re-flows live on resize; the full value stays in the title tooltip.
         A concrete cap (not max-width:0) is used so a lone link column can't
         collapse to zero width. */
      td.r-link {
        max-width: 40ch;
        overflow: hidden;
      }
      th .sort-icon {
        display: inline-block;
        width: 0.75em;
        color: #6b7280;
        font-size: 0.75em;
        margin-left: 0.25rem;
      }
      th.sorted .sort-icon {
        color: #2563eb;
      }
      /* Sort priority (1, 2, 3 …), shown only while several columns sort. */
      .sort-rank {
        font-size: 0.85em;
        vertical-align: super;
        margin-left: 0.05em;
      }
      th .col-units {
        color: #9ca3af;
        font-weight: 400;
      }
      /* A column outside the source's sortable-columns allowlist. */
      th.no-sort {
        cursor: default;
      }
      /* Only this small grip drags-to-reorder — NOT the whole th. A draggable
         th would (a) make the entire cell a grab surface that swallows the sort
         click and (b) start a native HTML5 drag on the resize gutter, which
         hijacks the pointer and breaks column resizing. */
      th .col-grip {
        cursor: grab;
        color: #cbd5e1;
        vertical-align: middle;
        margin-right: 0.15rem;
        line-height: 1;
      }
      th .col-grip:hover {
        color: #6b7280;
      }
      th .col-grip:active {
        cursor: grabbing;
      }
      /* 6px right-edge resize gutter; absolute so it doesn't push cell text. The
       th is already position: sticky (declared in the main th rule above),
       which is a containing block for absolute children. */
      th .col-resize {
        position: absolute;
        top: 0;
        right: 0;
        width: 6px;
        height: 100%;
        cursor: col-resize;
        user-select: none;
        z-index: 2;
      }
      th .col-resize:hover {
        background: #3b82f6;
        opacity: 0.4;
      }
      th.drag-source {
        opacity: 0.4;
      }
      th.drop-before {
        box-shadow: inset 3px 0 0 #3b82f6;
      }
      th.drop-after {
        box-shadow: inset -3px 0 0 #3b82f6;
      }
      tr.filter-row th {
        cursor: default;
        background: #f3f4f6;
        padding: 0.15rem 0.3rem;
        top: 1.85em; /* sits just below the header row */
        z-index: 1;
      }
      tr.filter-row th:hover {
        background: #f3f4f6;
      }
      th button.funnel {
        background: transparent;
        border: 0;
        cursor: pointer;
        color: #9ca3af;
        margin-left: 0.2rem;
        padding: 0;
        vertical-align: middle;
        line-height: 1;
      }
      th button.funnel.active {
        color: #2563eb;
      }
      th button.funnel:hover {
        color: #2563eb;
      }
      td input[type='text'] {
        width: 100%;
        box-sizing: border-box;
        border: 0;
        background: transparent;
        font: inherit;
        padding: 0;
      }
      td input:focus {
        outline: 2px solid #3b82f6;
        outline-offset: -2px;
      }
      td input[type='color'] {
        width: 1.5rem;
        height: 1.25rem;
        padding: 0;
        border: 1px solid #d1d5db;
        background: transparent;
        vertical-align: middle;
        cursor: pointer;
      }
      td .color-cell {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
      }
      td .color-cell input[type='text'] {
        width: 6rem;
        font-family: ui-monospace, SFMono-Regular, monospace;
      }
      td input[type='checkbox'] {
        transform: translateY(1px);
        cursor: pointer;
      }
      td .image-cell {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
      }
      td .image-cell img {
        max-height: 32px;
        max-width: 64px;
        border-radius: 0.15rem;
        border: 1px solid #e5e7eb;
      }
      td .image-cell button {
        padding: 0.1rem 0.4rem;
        font-size: 0.75rem;
      }
      button {
        font: inherit;
        padding: 0.25rem 0.75rem;
        border: 1px solid #d1d5db;
        background: white;
        border-radius: 0.25rem;
        cursor: pointer;
      }
      button:hover {
        background: #f3f4f6;
      }
      button.danger {
        color: #9ca3af;
        border: 0;
        background: transparent;
        padding: 0 0.25rem;
        font-size: 1.1rem;
        line-height: 1;
        cursor: pointer;
      }
      button.danger:hover {
        color: #ef4444;
      }
      /* Number CELLS are right-aligned so digits line up; the HEADER stays
         left-aligned like every other column header. */
      td.t-number {
        text-align: right;
      }
      td.t-number input[type='text'] {
        text-align: right;
      }
      /* A column script that failed to compile or threw. Kept small and inline
         so one broken script does not disturb the rest of the row; the full
         message is the element's title. */
      .script-err {
        color: #b91c1c;
        font-size: 0.8em;
        font-family: ui-monospace, SFMono-Regular, monospace;
        cursor: help;
      }
      /* Empty cell: pink background, so a gap is visible at a glance whatever
         the column's renderer draws. Kept distinct from the invalid red below —
         "nothing here" is normal, "this does not fit the type" is not. */
      td.is-null {
        background: #fce7f3;
      }
      td.is-null input[type='text'] {
        background: transparent;
      }
      /* Invalid stored value: the app-wide invalid red (see util/cell-validity),
         as an inset outline so the cell keeps its size and the grid lines stay
         put. Renderers additionally mark their own inputs. */
      td.is-invalid {
        outline: 1px solid #dc2626;
        outline-offset: -1px;
        background: #fef2f2;
      }
      td input[type='date'],
      td input[type='datetime-local'],
      td input[type='text'],
      td input[type='number'] {
        font: inherit;
        border: 0;
        background: transparent;
        padding: 0;
        width: 100%;
        box-sizing: border-box;
        /* An editable cell is an <input>, which clips its value flat — the td's
           own text-overflow can't reach inside it. Inputs honor text-overflow
           themselves while unfocused, so a narrow column ellipses its text and
           still reveals the whole value once you click into it. */
        text-overflow: ellipsis;
      }
      .mi.sm {
        font-size: 1rem;
      }
    `];De([ct({type:String})],Ie.prototype,"tableId",2);De([ct({type:String})],Ie.prototype,"viewInstanceId",2);De([N()],Ie.prototype,"columns",2);De([N()],Ie.prototype,"rows",2);De([N()],Ie.prototype,"sortSpecs",2);De([N()],Ie.prototype,"filters",2);De([N()],Ie.prototype,"globalQuery",2);De([N()],Ie.prototype,"localQuery",2);De([N()],Ie.prototype,"dragSourceField",2);De([N()],Ie.prototype,"dropTargetField",2);De([N()],Ie.prototype,"dropEdge",2);De([N()],Ie.prototype,"resizing",2);De([N()],Ie.prototype,"cellRenderers",2);De([N()],Ie.prototype,"scrollY",2);De([N()],Ie.prototype,"viewportHeight",2);De([N()],Ie.prototype,"loading",2);De([N()],Ie.prototype,"externalLoading",2);De([N()],Ie.prototype,"externalProgress",2);De([N()],Ie.prototype,"tableReadonly",2);Ie=De([Se("data-table")],Ie);const ll=500;function nf(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>ll?`${r.slice(0,ll)}…`:r}function rf(e,t){if(t.script)return"";const n=Yp(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function sf(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(s=>s.id!==r&&s.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function ei(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function ti(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function cl(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function of(e,t,n,r){const i=c=>c==null?0:c===""?1:2,s=i(e),a=i(t);return s!==2||a!==2?(s-a)*r:af(e,t,n)*r}function ul(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function af(e,t,n){switch(n){case"number":{const r=Number(e),i=Number(t);return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}case"boolean":return(e?1:0)-(t?1:0);case"date":{const r=new Date(String(e)).getTime(),i=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Tt(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}class st extends Error{constructor(t,n){const r=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(r),this.name="DatasetteError",this.status=n??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function At(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[c,d]of t.searchParams)r[c]=d;let i,s=null,a=null;if(n.length>=2){a=decodeURIComponent(n[n.length-1]),s=decodeURIComponent(n[n.length-2]);const c=n.slice(0,n.length-2).join("/");i=t.origin+(c?"/"+c:"")}else n.length===1&&(s=decodeURIComponent(n[0])),i=t.origin;return{base:i,db:s,table:a,query:r}}function In(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,i]of Object.entries({...e.query,...t}))i!=null&&n.searchParams.set(r,String(i));return n.toString()}function lf(e){const t=e?.next_url??null,n=e?.next,r=n!=null&&n!==!1?String(n):null,i=Array.isArray(e?.rows)?e.rows:[],s=Array.isArray(e?.columns)?e.columns:null;return{rows:i.map(c=>Array.isArray(c)&&s?Object.fromEntries(s.map((d,f)=>[d,c[f]])):c),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:e?.truncated===!0}}function cf(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function dl(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],n=Array.isArray(e?.columns)?e.columns.slice():[],r={},i=e?.column_details;if(Array.isArray(i))for(const c of i)r[c.column??c.name]=c;else i&&typeof i=="object"&&Object.assign(r,i);for(const c of n)c in r||(r[c]={});const a=(n.length?n:Object.keys(r)).map(c=>{const d=r[c]||{},f=d.is_pk===!0||d.is_pk===1||t.includes(c),g={field:c,label:Bc(c),type:cf(d.sqlite_type??d.type,c)};return(d.notnull===!0||d.notnull===1||f)&&(g.notnull=!0),f&&(g.unique=!0),(d.hidden===!0||d.hidden===1)&&(g.hidden=!0),d.default!=null&&d.default!==""&&(g.default=d.default),g});if(t.length===0){const c=a.filter(d=>d.unique).map(d=>d.field);c.length&&t.push(...c)}return{columns:a,pks:t}}function Bc(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Di(e){const t=[],n=new Set;for(const r of e)for(const i of Object.keys(r))n.has(i)||(n.add(i),t.push(i));return t.map(r=>({field:r,label:Bc(r),type:uf(e.map(i=>i[r]))}))}function uf(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&df(n))?"datetime":"string"}function df(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function hf(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const i=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(i)?n+=i:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function pf(e,t){return!t||t.length===0?null:t.map(n=>hf(e[n])).join(",")}function ff(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}if(r&&typeof r=="object"&&typeof r.name=="string"){if(r.name==="_memory")continue;n.push(typeof r.route=="string"&&r.route?r.route:r.name)}}return n}function mf(e,t){const n=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],r=[];for(const i of n){if(typeof i=="string"){r.push({db:t,table:i,count:null,hidden:!1,pks:[]});continue}i&&typeof i=="object"&&typeof i.name=="string"&&r.push({db:t,table:i.name,count:typeof i.count=="number"?i.count:null,hidden:i.hidden===!0,pks:Array.isArray(i.primary_keys)?i.primary_keys:[]})}return r}async function Vt(e,t){let n;try{n=await e(t)}catch(i){const s=i?.message||"network error";throw new st({error:`Couldn't reach ${t} (${s}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let i=null;try{i=await n.json()}catch{}throw new st(i&&typeof i=="object"?i:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(r&&r.ok===!1)throw new st(r,n.status);return r}async function Hc(e,t){return ff(await Vt(e,`${t}/-/databases.json`))}async function hl(e,t,n){return mf(await Vt(e,`${t}/${encodeURIComponent(n)}.json`),n)}async function Pi(e,t){const n=In(t,{_extra:"column_details"}),r=await Vt(e,n);let{columns:i,pks:s}=dl(r),a=!!r&&r.column_details!=null,c=r?.count??null,d=r?.count_truncated===!0,f=r;if(i.length===0){const g=In(t,{_extra:"columns"}),b=await Vt(e,g);({columns:i,pks:s}=dl(b)),a=!!b&&b.column_details!=null,c=b?.count??c,d=b?.count_truncated===!0||d,f=b}return{columns:i,pks:s,count:c,countTruncated:d,typed:a,raw:f}}async function Xs(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await Pi(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function gf(e,t,n){const r=e&&typeof e=="object"?e:{},i=t&&n&&r.databases?.[t]?.tables?.[n]||t&&n&&r.databases?.[t]?.tables?.[n.toLowerCase()]||{},s=t&&r.databases?.[t]||{},a=C=>i[C]??s[C]??r[C],c={columns:{},units:{}};typeof i.sort=="string"&&(c.sort=i.sort),typeof i.sort_desc=="string"&&(c.sortDesc=i.sort_desc),typeof i.size=="number"&&(c.size=i.size),Array.isArray(i.sortable_columns)&&(c.sortableColumns=i.sortable_columns.slice()),typeof i.label_column=="string"&&(c.labelColumn=i.label_column),i.hidden===!0&&(c.hidden=!0),typeof i.description=="string"&&(c.description=i.description),typeof i.description_html=="string"&&(c.descriptionHtml=i.description_html);const d=a("source"),f=a("source_url"),g=a("license"),b=a("license_url"),y=a("about"),k=a("about_url");if(typeof d=="string"&&(c.source=d),typeof f=="string"&&(c.sourceUrl=f),typeof g=="string"&&(c.license=g),typeof b=="string"&&(c.licenseUrl=b),typeof y=="string"&&(c.about=y),typeof k=="string"&&(c.aboutUrl=k),i.columns&&typeof i.columns=="object")for(const[C,_]of Object.entries(i.columns))typeof _=="string"&&(c.columns[C]=_);if(i.units&&typeof i.units=="object")for(const[C,_]of Object.entries(i.units))typeof _=="string"&&(c.units[C]=_);return c}const pl=new Map;async function bf(e,t){let n=pl.get(t);return n||(n=Vt(e,`${t}/-/metadata.json`).catch(()=>({})),pl.set(t,n)),n}async function Ao(e,t){const n=await bf(e,t.base);return gf(n,t.db,t.table)}function wf(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Ro(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(c=>{const d=e.columns[c.field],f=e.units[c.field],g=n?n.has(c.field):void 0;return d==null&&f==null&&g===void 0?c:{...c,...d!=null?{description:d}:{},...f!=null?{units:f}:{},...g!==void 0?{sortable:g}:{}}}),i=new Set(t.map(c=>c.field)),s={};e.sort&&i.has(e.sort)?(s.sortColumn=e.sort,s.sortAsc=!0):e.sortDesc&&i.has(e.sortDesc)&&(s.sortColumn=e.sortDesc,s.sortAsc=!1);const a=wf(e);return a&&(s.info=a),e.labelColumn&&i.has(e.labelColumn)&&(s.labelColumn=e.labelColumn),{columns:r,patch:s}}function Oo(e,t){if(t.length===0)return e;const n=new Map(Di(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const i=n.get(r.field);return i&&i!=="string"?{...r,type:i}:r})}async function xr(e,t,n={}){const r=n.maxRows??1e4,s={_size:n.pageSize??1e3,...n.extraParams||{}};let a=n.startUrl??In(t,s);const c=[];let d=!1,f=!1,g=0,b,y;for(;a;){let k;try{k=await Vt(e,a)}catch(D){if(c.length===0&&!n.startUrl)throw D;b=D instanceof st&&D.status?`stopped after ${c.length} rows: HTTP ${D.status}`:`stopped after ${c.length} rows: ${D?.message??String(D)}`,f=!0,y=a;break}const C=lf(k);c.push(...C.rows),d=d||C.truncated,g+=1,n.onProgress?.(c.length);const _=C.nextUrl!=null?C.nextUrl:C.nextToken!=null?In(t,{_next:C.nextToken}):null;_&&c.length<r&&C.rows.length>0?a=_:(f=_!=null&&C.rows.length>0,f&&(y=_??void 0),a=null)}return{rows:c,truncated:d,hasMore:f,pages:g,error:b,nextUrl:y}}function yf(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function qc(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Kc(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function Li(e,t,n,r){let i;try{i=await e(t,{method:"POST",headers:yf(r),body:JSON.stringify(n)})}catch(a){throw new st({error:`Couldn't reach ${t} (${a?.message||"network error"}).`},0)}if(i&&i.ok===!1){let a=null;try{a=await i.json()}catch{}throw new st(a&&typeof a=="object"?a:{error:`HTTP ${i.status} for ${t}`},i.status)}const s=await i.json();if(s&&s.ok===!1)throw new st(s,i.status);return s}async function fl(e,t,n,r={}){const i=await Li(e,qc(t,"insert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function vf(e,t,n,r,i={}){const s=await Li(e,Kc(t,n,"update"),{update:r,return:!0},i.token);return s&&typeof s.row=="object"&&s.row?s.row:Array.isArray(s?.rows)&&s.rows[0]?s.rows[0]:null}async function ml(e,t,n,r={}){await Li(e,Kc(t,n,"delete"),{},r.token)}async function xf(e,t,n,r={}){const i=await Li(e,qc(t,"upsert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function $f(e,t){const n=In(t,{_extra:"primary_keys"}),r=await Vt(e,n);return Array.isArray(r?.primary_keys)?r.primary_keys:[]}async function Vc(e,t){try{const n=await Vt(e,In(t,{_extra:"count"}));return{count:typeof n?.count=="number"?n.count:null,truncated:n?.count_truncated===!0}}catch{return{count:null,truncated:!1}}}async function Gc(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const i=await e(`${t}/-/versions.json`,r);if(i&&i.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${i.status}`};const s=await i.json(),a=s?.datasette?.version??s?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,r)).json())?.actor??null}catch{}return{reachable:!0,version:a,actor:c,writable:!!(n.token&&c)}}catch(i){return{reachable:!1,version:null,actor:null,writable:!1,error:i?.message||"unreachable"}}}function An(e,t){return t?(n,r)=>{const i=(r??{}).headers??{};return e(n,{...r??{},headers:{...i,Authorization:`Bearer ${t}`}})}:e}const vi=e=>e.replace(/^https?:\/\//,""),sr="datasette",Wc=1e4,Yc=1e3,Do=1e4,Xc=60;function Qc(e){e.ui.registerSettings(sr,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:Wc,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:Yc,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:Do,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:Xc,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function ni(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function Mi(e){const[t,n,r,i]=await Promise.all([e.settings.get(sr,"maxImportRows"),e.settings.get(sr,"pageSize"),e.settings.get(sr,"connectMaxRows"),e.settings.get(sr,"retryWaitSeconds")]);return{maxImportRows:ni(t,Wc,0),pageSize:ni(n,Yc,1),connectMaxRows:ni(r,Do,1),retryWaitSeconds:ni(i,Xc,1)}}function zi(e){return e===0?Number.MAX_SAFE_INTEGER:e}function kf(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function Po(e,t,n,r){const i={...e.info??{}};return!i.source&&!i.sourceUrl&&(i.source=`${vi(t)}/${n}/${r}`,i.sourceUrl=kf(t,n,r)),{...e,info:i}}function Jc(e,t){if(!e.has(t))return t;for(let n=2;;n++){const r=`${t} (${n})`;if(!e.has(r))return r}}async function Lo(e,t,n,r={}){if(t.db&&t.table)return[await Xs(e,t)];const i=[];if(t.db){if(i.push(...await hl(e,t.base,t.db)),r.skipPicker)return i.filter(c=>!c.hidden)}else{const c=await Hc(e,t.base);if(c.length===0)return[];let d=c;if(c.length>1){const f=await gi(c.map(g=>({name:g,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${vi(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!f)return null;d=f.map(g=>c[g])}for(const f of d)try{i.push(...await hl(e,t.base,f))}catch{}}if(i.length===0)return[];const s=new Set(i.map(c=>c.db)).size>1,a=await gi(i.map(c=>({name:s?`${c.db}/${c.table}`:c.table,size:c.count,detail:s?void 0:c.db,hidden:c.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${vi(t.base)}.`,confirmLabel:n});return a?a.map(c=>i[c]):null}const _f=e=>new Promise(t=>setTimeout(t,e));function Cf(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function Mo(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const Sf={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},Ef="https://latest.datasette.io/fixtures/facetable";function Tf(e){Qc(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>Pf(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>Mf(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Ef}`,"","Import from Datasette");r&&await gl(t,r)}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return If(r)?(t.preventDefault(),await gl(n,r),!0):!1})}async function gl(e,t){try{await zo(e,t)}catch(n){let r;n instanceof st?r=n.status?`Datasette error (${n.status}): ${n.message}`:n.message:r=`Could not import: ${n?.message??n}`,await e.ui.dialogs.alert(r,"Datasette import failed")}}function If(e){try{const t=At(e);return!!(t.db&&t.table)}catch{return!1}}async function zo(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=await Mi(e),s=At(t),c=await Lo(M=>e.backend.fetch(M),s,"Import",{skipPicker:n.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const d=[];let f=0;for(const M of c){const U={base:s.base,db:M.db,table:M.table,query:{}},H=await Af(e,r,U);if(H.skipped){f+=1;continue}d.push({tableId:H.tableId,ref:U,overwrite:H.overwrite,knownCount:M.count})}let g=0,b=0;const y=[],k=[],C=[];for(const M of d)try{const U=await Rf(e,M.tableId,M.ref,M.overwrite,M.knownCount,n,i);g+=1,b+=U.rowCount,U.error?k.push(`${M.ref.db}/${M.ref.table} (${U.error})`):(U.hasMore||U.truncated)&&y.push(`${M.ref.db}/${M.ref.table}`)}catch(U){C.push(`${M.ref.db}/${M.ref.table}: ${U?.message??String(U)}`)}const _=zi(i.maxImportRows),D=n.maxRows!=null?Math.min(n.maxRows,_):_;Df(e,{imported:g,skipped:f,totalRows:b,capped:y,cap:D,partial:k,failed:C,requested:c.length})}async function Af(e,t,n){const r=`${n.db}/${n.table}`,i={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},s=(await e.store.tables.find()).filter(f=>f.workspaceId===t),a=s.find(f=>f.name.toLowerCase()===r.toLowerCase());let c=r;if(a){const f=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!f||f==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(f==="Overwrite")return await e.store.tables.patch(a.id,{origin:i,updatedAt:Date.now()}),{tableId:a.id,overwrite:!0};c=Jc(new Set(s.map(g=>g.name)),r)}const d=Ee();return await e.store.tables.insert({id:d,workspaceId:t,name:c,code:Ge(`${n.db}-${n.table}`),columns:[],view:"table",origin:i,updatedAt:Date.now()}),{tableId:d,overwrite:!1}}async function Rf(e,t,n,r,i,s,a){const c=`${n.db}/${n.table}`,d=b=>e.backend.fetch(b),f=zi(a.maxImportRows),g=s.maxRows!=null?Math.min(s.maxRows,f):f;Tt(t,!0);try{let b=[],y=i,k=!1,C=!1,_=[];try{const ye=await Pi(d,n);b=ye.columns,y==null&&(y=ye.count,k=ye.countTruncated),C=ye.typed,_=ye.pks??[]}catch{}if(y==null){const ye=await Vc(d,n);y=ye.count,k=ye.truncated}const D=y&&y>0&&(!k||g<=y)?Math.min(y,g):0,M=[];let U=!1,H=!1,Q=0,ne,W,q;for(;;){const ye=await xr(d,n,{maxRows:Math.max(0,g-M.length),pageSize:a.pageSize,...q?{startUrl:q}:{},onProgress:gn=>{D>0&&Tt(t,!0,Math.min(1,(M.length+gn)/D))}});if(M.push(...ye.rows),U=U||ye.truncated,Q+=ye.pages,H=ye.hasMore,ne=ye.error,W=ye.nextUrl,!ye.error||!ye.nextUrl||M.length>=g)break;const Be=`${a.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${c}" paused after ${M.length.toLocaleString()} rows (${ye.error}). Datasette may be rate-limiting a large import. Wait ${Be} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Be}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Be}`)break;Tt(t,!0),e.ui.dialogs.toast(`Resuming "${c}" in ${Be}…`,{kind:"info",title:"Import paused"}),await _f(Cf(a.retryWaitSeconds)),q=ye.nextUrl,ne=void 0,W=void 0}let se=b.length===0?Di(M):C?b:Oo(b,M),oe={};try{const ye=await Ao(d,n),Be=Ro(ye,se);se=Be.columns,oe=Be.patch}catch{}oe=Po(oe,n.base,n.db,n.table);const B=await e.store.tables.findOne(t),K=B?.columns??[],ue=K.length===0;let{columns:ge}=Ri(K,se,B?.deletedColumns),Te=M;if(s.editColumns&&ue){const ye=await s.editColumns(ge,c);if(ye===null)return{name:c,rowCount:0,hasMore:!1,truncated:!1,pages:Q,count:y,error:ne};Te=Of(Te,ge,ye),ge=ye}const je=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const dt=Mo(ne,W,M.length,y),de=_.length>0&&B?.origin?{origin:{...B.origin,pks:_}}:{},Pe=ue?{columns:ge,...oe,...de,importResume:dt,updatedAt:je}:{columns:ge,...oe.info?{info:oe.info}:{},...de,importResume:dt,updatedAt:je};await e.store.tables.patch(t,Pe);const Ae=e.store.rows(t);if(r){const ye=await Ae.find();await Ae.bulkRemove(ye.map(Be=>Be.id))}const Ze=Te.map(ye=>({id:Ee(),tableId:t,data:ye,updatedAt:je}));return await Ae.bulkInsert(Ze),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:Ze.length}),{name:c,rowCount:Ze.length,hasMore:H,truncated:U,pages:Q,count:y,error:ne}}finally{Tt(t,!1)}}function Of(e,t,n){const r=Co(t,n);return r?e.map(r):e}function Df(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,i=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${i} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const s=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.capped.length} capped${s} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${i}`,{kind:"success",title:"Datasette import"})}async function Pf(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await Mi(e);await Lf(e,n,r)}catch(r){const i=r instanceof st?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function Lf(e,t,n){const r=At(t.origin.url),i=g=>e.backend.fetch(g),s=zi(n.maxImportRows);Tt(t.id,!0);let a,c=[];try{let g=[],b=null,y=!1,k=!1;try{const de=await Pi(i,r);g=de.columns,b=de.count,y=de.countTruncated,k=de.typed}catch{}if(b==null){const de=await Vc(i,r);b=de.count,y=de.truncated}const C=b&&b>0&&(!y||s<=b)?Math.min(b,s):0,{rows:_,hasMore:D,truncated:M,error:U,nextUrl:H}=await xr(i,r,{maxRows:s,pageSize:n.pageSize,onProgress:de=>{C>0&&Tt(t.id,!0,Math.min(1,de/C))}});let Q=g.length===0?Di(_):k?g:Oo(g,_),ne={};try{const de=await Ao(i,r),Pe=Ro(de,Q);Q=Pe.columns,ne=Pe.patch}catch{}ne=Po(ne,r.base,r.db,r.table);const W=t.columns.length===0,q=Ri(t.columns,Q,t.deletedColumns);c=q.newFields;const Y=Date.now(),se=Mo(U,H,_.length,b),oe=W?{columns:q.columns,...ne,importResume:se,updatedAt:Y}:{columns:q.columns,...ne.info?{info:ne.info}:{},importResume:se,updatedAt:Y};await e.store.tables.patch(t.id,oe);const B=t.origin?.pks??[],K=new Set(Q.map(de=>de.field)),ue=t.columns.map(de=>de.field).filter(de=>!K.has(de)&&!B.includes(de)),ge=(t.deletedColumns??[]).filter(de=>K.has(de)),Te=e.store.rows(t.id),je=await Te.find(),{data:dt}=Pc({oldRows:je.map(de=>({data:de.data})),freshRows:_,pks:B,userAddedFields:ue,deletedRemoteFields:ge});await Te.bulkRemove(je.map(de=>de.id)),await Te.bulkInsert(dt.map(de=>({id:Ee(),tableId:t.id,data:de,updatedAt:Y}))),a={rowCount:dt.length,hasMore:D,truncated:M,error:U}}finally{Tt(t.id,!1)}const d=[];if(a.error)d.push(`partial (${a.error})`);else if(a.hasMore||a.truncated){const g=s<Number.MAX_SAFE_INTEGER?` at ${s.toLocaleString()}`:"";d.push(`capped${g}`)}c.length>0&&d.push(`${c.length} new column${c.length===1?"":"s"}`);const f=d.length?` — ${d.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${a.rowCount} rows from ${r.db}/${r.table}${f}.`,{kind:a.error||a.hasMore||a.truncated||c.length>0?"warning":"success",title:"Refresh"}),c.length>0&&zf(t.id,r,c)}async function Mf(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const i=await Mi(e),s=zi(i.maxImportRows),a=At(n.origin.url),c=C=>e.backend.fetch(C),d=r.loadedRows,f=r.totalCount??null,g=f&&f>0?Math.min(f,s):0;Tt(t,!0,g>0?Math.min(1,d/g):void 0);let b=0,y;try{const C=await xr(c,a,{startUrl:r.nextUrl,maxRows:Math.max(0,s-d),pageSize:i.pageSize,onProgress:M=>{g>0&&Tt(t,!0,Math.min(1,(d+M)/g))}});b=C.rows.length;const _=Date.now();await e.store.rows(t).bulkInsert(C.rows.map(M=>({id:Ee(),tableId:t,data:M,updatedAt:_}))),y={error:C.error,nextUrl:C.nextUrl};const D=Mo(C.error,C.nextUrl,d+b,f);await e.store.tables.patch(t,{importResume:D,updatedAt:_})}catch(C){const _=C instanceof st?C.message:C?.message??String(C);e.ui.dialogs.toast(`Couldn't resume ${a.db}/${a.table}: ${_}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{Tt(t,!1)}const k=d+b;y.error?e.ui.dialogs.toast(`Resumed ${a.db}/${a.table}: +${b} rows (${k} total) — interrupted again (${y.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${a.db}/${a.table}: +${b} rows (${k} total).`,{kind:"success",title:"Resume import"})}function zf(e,t,n){const r=n.join(", "),i=n.length!==1,s=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${i?"s":""}: ${r}. Review, reorder or hide ${i?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:s}}))}const jf=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:zo,init:Tf,meta:Sf},Symbol.toStringTag,{value:"Module"}));var Nf=Object.defineProperty,Uf=Object.getOwnPropertyDescriptor,$r=(e,t,n,r)=>{for(var i=r>1?void 0:r?Uf(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Nf(t,n,i),i};const Ff="https://latest.datasette.io/ephemeral";let mt=class extends xe{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),mt.instance=this}disconnectedCallback(){super.disconnectedCallback(),mt.instance===this&&(mt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>Connect Datasette</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary">Connect</button>
            </div>
          </div>
          <div class="dialog-body">
            <label>
              URL — a table, a database, or an instance
              <input
                type="text"
                autofocus
                placeholder="e.g. ${Ff}"
                .value=${this.url}
                @input=${e=>{this.url=e.target.value,this.status="",this.statusKind=""}}
              />
            </label>
            <label>
              Write token (optional)
              <input
                type="password"
                placeholder="dstok_…  — leave blank for read-only"
                .value=${this.token}
                @input=${e=>{this.token=e.target.value}}
              />
            </label>
            <div class="test-row">
              <button type="button" class="ghost test" @click=${()=>void this.runTest()}>
                Test connection
              </button>
              <span class="status ${this.statusKind}">${this.status}</span>
            </div>
            <p class="hint">
              Enter a single table (<code>…/db/table</code>), a whole database (<code>…/db</code>),
              or an instance root — you'll pick which tables to connect. Opens live tables backed by
              the remote Datasette: reads stay remote, and edits write back when the token grants
              them. The token is stored on this device only and is never synced or exported. A blank
              token opens tables read-only.
            </p>
          </div>
        </form>
      </dialog>
    `}};mt.instance=null;mt.styles=[gt,$e`
      dialog {
        min-width: 440px;
        max-width: 560px;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        font-size: 0.85rem;
        color: #374151;
      }
      input {
        font: inherit;
        padding: 0.45rem 0.55rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
        background: white;
      }
      .test-row {
        display: flex;
        align-items: center;
        gap: 0.6rem;
      }
      button.ghost.test {
        white-space: nowrap;
      }
      .status {
        font-size: 0.82rem;
        color: #6b7280;
        min-height: 1.1em;
      }
      .status.ok {
        color: #15803d;
      }
      .status.err {
        color: #b91c1c;
      }
      .hint {
        color: #6b7280;
        font-size: 0.78rem;
        margin: 0;
        line-height: 1.5;
      }
      .hint code {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.72rem;
        background: #f3f4f6;
        padding: 0.05rem 0.25rem;
        border-radius: 0.2rem;
      }
    `];$r([N()],mt.prototype,"url",2);$r([N()],mt.prototype,"token",2);$r([N()],mt.prototype,"status",2);$r([N()],mt.prototype,"statusKind",2);mt=$r([Se("datasette-connect-dialog")],mt);class Bf extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Zc(e){return`datasette:token:${e}`}function Hf(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function qf(e,t,n){const r=e.source,i=r?.config??{},s={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],c=r?.writable===!0,d=i.maxRows;let f=null;function g(){return d!=null?Promise.resolve(d):(f||(f=n?Mi(n).then(q=>q.connectMaxRows):Promise.resolve(Do)),f)}const b=i.pollIntervalMs??0,y=(q,Y)=>t.backend.fetch(q,Y);async function k(){const Y=(await t.settings.findOne(Zc(i.base)))?.value;return typeof Y=="string"&&Y.length>0?Y:void 0}const C=async(q,Y)=>An(y,await k())(q,Y);function _(q){return{id:pf(q,a)??Ee(),tableId:e.id,data:q,updatedAt:Date.now()}}function D(q){if(!c)throw new Bf(q)}function M(q){const Y={};for(const[se,oe]of Object.entries(q))a.includes(se)||(Y[se]=oe);return Y}const U=new Set;let H=[],Q=!1,ne=null;function W(){return ne||(ne=(async()=>{try{const{rows:q}=await xr(C,s,{maxRows:await g()});H=q.map(_),Q=!0;for(const Y of U)Y(H);return H}finally{ne=null}})(),ne)}return{async find(q){const Y=Q?H:await W();return!q||Object.keys(q).length===0?Y:Y.filter(se=>Hf(se,q))},async findOne(q){return(Q?H:await W()).find(se=>se.id===q)??null},async insert(q){D("insert");const[Y]=await fl(C,s,[q.data]),se=_(Y??q.data);return t.events.emit("row:created",{tableId:e.id,row:se}),W(),se},async bulkInsert(q){if(q.length===0)return[];D("insert");const Y=await fl(C,s,q.map(oe=>oe.data)),se=(Y.length?Y:q.map(oe=>oe.data)).map(_);return W(),se},async upsert(q){D("upsert");const[Y]=await xf(C,s,[q.data]),se=_(Y??q.data);return W(),se},async patch(q,Y){D("update");const se=Y.data,oe=M(se??{}),B=await vf(C,s,q,oe),K=_(B??{...se??{}});return t.events.emit("row:updated",{tableId:e.id,row:K,prev:K}),W(),K},async remove(q){D("delete"),await ml(C,s,q),t.events.emit("row:deleted",{tableId:e.id,rowId:q}),W()},async bulkRemove(q){if(q.length!==0){D("delete");for(const Y of q)await ml(C,s,Y);W()}},subscribe(q){U.add(q),Q?q(H):W();let Y=null;return b>0&&(Y=setInterval(()=>void W(),b)),()=>{U.delete(q),Y&&clearInterval(Y)}},async refresh(){await W()}}}const Kf='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Vf={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function Gf(e){Qc(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:Kf,order:10,description:"A live, editable table on any Datasette instance",connect:t=>Yf(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>Wf(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>qf(t,n,e)})}async function Wf(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const i=await r.find();e.ui.dialogs.toast(`Reloaded ${i.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const i=r instanceof st?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function Yf(e){const t=mt.instance??Xf(),n=(i,s)=>e.backend.fetch(i,s),r=await t.open({initialUrl:"https://datasette.io",async onTest(i,s){const a=At(i),c=await Gc(n,a.base,{token:s||void 0});if(a.db&&a.table){await Xs(An(n,s||void 0),a);const f=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${f} — table found, signed in, read-write.`:`Reachable${f} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const d=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${d} — signed in, read-write.`:`Reachable${d} — read-only (no token / not authenticated).`},async onConnect(i,s){const a=At(i);a.db&&a.table&&await Xs(An(n,s||void 0),a)}});if(r)try{await eu(e,r.url,r.token)}catch(i){const s=i instanceof st?i.message:i?.message??String(i);await e.ui.dialogs.alert(s,"Connect Datasette failed")}}function Xf(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function eu(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=At(t),s=(b,y)=>e.backend.fetch(b,y),a=An(s,n||void 0),c=await Gc(s,i.base,{token:n||void 0});n&&await e.store.settings.upsert({name:Zc(i.base),value:n});let d;try{d=await Lo(a,i,"Connect")}catch(b){const y=b instanceof st?b.message:b?.message??String(b);throw new Error(`Couldn't read tables from ${vi(i.base)}: ${y}`)}if(d===null)return;if(d.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const f=[];for(const b of d){const y=await Qf(e,r,i.base,b,c.writable,n);y!==null&&f.push({tableId:y,c:b})}if(f.length===0)return;const g=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${f.length} live table${f.length===1?"":"s"} from Datasette (${g}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:b,c:y}of f)Jf(e,b,i.base,y,n)}async function Qf(e,t,n,r,i,s){const a=(await e.store.tables.find()).filter(y=>y.workspaceId===t);let c=`${r.db}/${r.table}`,d=a.find(y=>{const k=y.source?.config;return y.source?.type==="datasette"&&k?.base===n&&k?.db===r.db&&k?.table===r.table});if(!d){const y=a.find(k=>k.name.toLowerCase()===c.toLowerCase());if(y){const k=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!k||k==="Skip")return null;k==="Overwrite"?d=y:c=Jc(new Set(a.map(C=>C.name)),c)}}let f=r.pks??[];if(f.length===0){const y=An((k,C)=>e.backend.fetch(k,C),s||void 0);try{f=await $f(y,{base:n,db:r.db,table:r.table,query:{}})}catch{f=[]}}const g=d?.id??Ee(),b={...d??{},id:g,workspaceId:t,name:c,code:Ge(`${r.db}-${r.table}`),columns:d?.columns??[],view:d?.view??"table",source:{type:"datasette",writable:i,config:{base:n,db:r.db,table:r.table,pks:f}},updatedAt:Date.now()};return d?await e.store.tables.upsert(b):await e.store.tables.insert(b),g}async function Jf(e,t,n,r,i){const s={base:n,db:r.db,table:r.table,query:{}},a=An((c,d)=>e.backend.fetch(c,d),i||void 0);try{let c=[],d=!1;try{const _=await Pi(a,s);c=_.columns,d=_.typed}catch{}const{rows:f}=await xr(a,s,{maxRows:50,pageSize:50}),g=c.length===0?Di(f):d?c:Oo(c,f);if(g.length===0)return;const b=await e.store.tables.findOne(t);if(!b)return;const y=b.source?.config?.pks??[];let k=g.map(_=>y.includes(_.field)?{..._,unique:!0,notnull:!0}:_),C={};try{const _=await Ao(a,s),D=Ro(_,k);k=D.columns,C=D.patch}catch{}C=Po(C,s.base,r.db,r.table),await e.store.tables.patch(t,{columns:k,...C,updatedAt:Date.now()})}catch{}}const Zf=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:eu,init:Gf,meta:Vf},Symbol.toStringTag,{value:"Module"})),em={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function tm(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:tu}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class ln extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function nm(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const bl=5e4;function rm(e){return e.ok===!0&&Array.isArray(e.rows)}function im(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const i of["next_url","nextUrl","next"]){const s=n[i];if(typeof s!="string")continue;const a=s.trim();if(a!==""){if(/^(https?:\/\/|[/?])/i.test(a))try{const c=new URL(a,t);if(c.origin!==r.origin)continue;return c.toString()}catch{continue}if(i==="next"&&rm(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(a)}`}}return null}function sm(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function tu(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",i=n.format==="json"?"json":"csv",s=new Set;let a=[],c=!1,d=null;function f(C){return C.map((_,D)=>({id:`url:${D}`,tableId:e.id,data:_,updatedAt:0}))}async function g(C){let _;try{_=await t.backend.fetch(C)}catch(D){throw new Error(`Could not reach ${r}: ${D?.message??String(D)}`)}if(!_.ok)throw new Error(`Could not load ${r}: HTTP ${_.status} ${_.statusText}`);try{return await wc(_)}catch(D){throw new Error(`Could not read response from ${r}: ${D?.message??String(D)}`)}}async function b(C){const _=yo(C);let D=await g(_);if(gc(D)){const M=bc(_);M&&(D=await g(M))}try{if(i==="json"){const M=JSON.parse(D);return{records:sm(M),nextUrl:im(M,_)}}return{records:Pn(D).rows,nextUrl:null}}catch(M){throw new Error(`Could not parse ${i.toUpperCase()} from ${r}: ${M?.message??String(M)}`)}}async function y(){if(!r)throw new Error("This reference table has no URL configured.");const C=[];let _=r;const D=new Set;for(;_&&C.length<bl&&!D.has(_);){D.add(_);const M=await b(_);C.push(...M.records),_=M.records.length>0?M.nextUrl:null}return C.slice(0,bl)}function k(){return d||(d=(async()=>{try{const C=await y();a=f(C),c=!0;for(const _ of s)_(a);return a}finally{d=null}})(),d)}return{async find(C){const _=c?a:await k();return!C||Object.keys(C).length===0?_:_.filter(D=>nm(D,C))},async findOne(C){return(c?a:await k()).find(D=>D.id===C)??null},async insert(){throw new ln("insert")},async bulkInsert(){throw new ln("insert")},async upsert(){throw new ln("upsert")},async patch(){throw new ln("update")},async remove(){throw new ln("delete")},async bulkRemove(){throw new ln("delete")},subscribe(C){return s.add(C),c?C(a):k(),()=>{s.delete(C)}},async refresh(){c=!1,a=[],await k()}}}const om=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:ln,createUrlCollection:tu,init:tm,meta:em},Symbol.toStringTag,{value:"Module"})),am={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function lm(){}async function nu(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(i=>i.workspaceId===t),r=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${n.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const i of n){const s=await e.store.rows(i.id).find();r.push(iu(i,s),"")}return r.push("COMMIT;",""),r.join(`
`)}function ru(e,t){return["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",iu(e,t),"","COMMIT;",""].join(`
`)}function iu(e,t){const n=Qs(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(s=>`  ${cm(s)}`)],i=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const a=["__id",...e.columns.map(c=>c.field)].map(c=>`"${Qs(c)}"`).join(", ");for(const c of t){const d=[wl(c.id),...e.columns.map(f=>wl(c.data[f.field],f.type))];i.push(`INSERT INTO "${n}" (${a}) VALUES (${d.join(", ")});`)}}return i.join(`
`)}function cm(e){const t=[`"${Qs(e.field)}"`,um(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function um(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function wl(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=dm(e);return n===null?"NULL":ri(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?ri(e.toISOString()):ri(typeof e=="string"?e:JSON.stringify(e))}function dm(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?yl(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?yl(r):null}return null}function yl(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function ri(e){return`'${e.replace(/'/g,"''")}'`}function Qs(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const hm=Object.freeze(Object.defineProperty({__proto__:null,init:lm,meta:am,serializeTableAsSql:ru,serializeWorkspaceAsSql:nu},Symbol.toStringTag,{value:"Module"})),su=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function vl(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(su))t.add(r[2]);return[...t]}const jo=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Sn=e=>jo(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function pm(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function fm(e,t,n,r,i){const s=r?.type??"string",a=jo(r?.label||e),c=`class="eda-input" data-eda-row="${Sn(n)}" data-eda-field="${Sn(e)}" data-eda-type="${Sn(s)}"`,d=i?" disabled":"";let f;if(s==="boolean")f=`<input type="checkbox" ${c}${pm(t)?" checked":""}${d} />`;else{const g=s==="number"?"number":"text",b=t==null?"":Sn(String(t));f=`<input type="${g}" ${c} value="${b}"${d} />`}return`<label class="eda-input-field" title="${a}">${f}<span class="eda-input-label">${a}</span></label>`}function mm(e,t){if(t==null||t==="")return"";const n=String(t),r=Sn(e),i=Sn(n);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${r}" data-eda-filter-value="${i}" title="Filter by ${r}: ${i}">${jo(n)}</button>`}function gm(e,t,n,r={}){return e.replace(su,(i,s,a)=>{const c=n[a];if(!c)return"";const d=t.data[c];if(!s)return d==null?"":String(d);if(s.startsWith("filter"))return mm(c,d);const f=r.columns?.get(c),g=r.readonly===!0||!!f?.script?.trim();return fm(c,d,t.id,f,g)})}function xl(e){return e==null||e===""}function bm(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const i=Mc(r.script,e.data);n??={...e.data},n[r.field]=i.ok?i.value:`⚠ ${i.label}`}return n?{...e,data:n}:e}function wm(e,t){return t.some(n=>n.script?.trim())?e.map(n=>bm(n,t)):e}function $l(e,t){const n=Object.entries(t).filter(([,r])=>r!=null&&String(r).trim()!=="");return n.length===0?e:e.filter(r=>n.every(([i,s])=>bi(r.data[i],s)))}function ou(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function ym(e,t){const n=vr(e??"");return n.some(r=>ou(r,t))||n.push({term:t,negate:!1,exact:!0}),fr(n)}function vm(e,t){const n=vr(e??"").filter(r=>!ou(r,t));return fr(n)}function xm(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((i,s)=>{const a=i.data[t],c=s.data[t],d=xl(a),f=xl(c);if(d||f)return d===f?0:d?1:-1;const g=Number(a),b=Number(c);return!Number.isNaN(g)&&!Number.isNaN(b)?(g-b)*r:String(a).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*r})}function au(e,t){const n=$l(e,t.filters??{}),r=$l(n,t.pillFilters??{});return xm(r,t.sortColumn,t.sortAsc??!0)}function $m(e){return!!e&&e.trim().length>0}function km(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function _m(e,t){return t==="raw"||t==="structure"?e:{...e,columns:km(e,t)}}function Cm(e,t,n){return n==="structure"?[]:n==="raw"?t:au(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function No(e,t){const n=e.columns.map(i=>i.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(i=>{const s={};for(const a of n)s[a]=i.data[a];return s})}}const Sm={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Em(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:i}=await at(async()=>{const{AnchoredMenu:c}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:c}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),a=await i.open(s,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(a)try{if(a==="json"){const c=await ji(t);await t.backend.saveFile(`workspace-${r}.db.json`,c,"application/json")}else if(a==="sql"){const c=await nu(t);await t.backend.saveFile(`workspace-${r}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await at(async()=>{const{AnchoredMenu:f}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:f}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!s)return;const a=await t.store.tables.findOne(n.tableId);if(!a)return;const c=await t.ui.dialogs.choice(`Export "${a.name}" as ${s.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!c)return;const d=c==="Visible Data"?"visible":c==="Raw Data"?"raw":"structure";try{const f=await t.store.rows(a.id).find(),g=_m(a,d),b=Cm(a,f,d),y=Ge(a.code||a.name||"table"),k=d!=="structure"&&a.source!=null&&f.length===0;if(s==="csv")k&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.csv`,_o(g,b),"text/csv");else if(s==="json"){const C=JSON.stringify(No(g,b),null,2);await t.backend.saveFile(`${y}.table.json`,C,"application/json")}else s==="sql"&&(k&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.sql`,ru(g,b),"application/sql"))}catch(f){t.ui.dialogs.toast(`Export failed: ${f.message}`,{kind:"error",title:"Export"})}}})}async function ji(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(a=>a.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(a=>a.workspaceId===t),i=(await e.store.viewInstances.find()).filter(a=>a.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:i};for(const a of n){const c=await e.store.rows(a.id).find();s.tables.push({name:a.name,columns:a.columns,rows:c.map(d=>d.data),...a.title?{title:a.title}:{},...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},...a.filters?{filters:a.filters}:{},...a.labelColumn?{labelColumn:a.labelColumn}:{},...a.info?{info:a.info}:{},...a.deletedColumns?{deletedColumns:a.deletedColumns}:{},...a.readonly?{readonly:!0}:{},...a.source?{source:a.source}:{},...a.origin?{origin:a.origin}:{}})}return JSON.stringify(s,null,2)}const Tm=Object.freeze(Object.defineProperty({__proto__:null,init:Em,meta:Sm,serializeWorkspace:ji},Symbol.toStringTag,{value:"Module"})),Im={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Am="gist:",kl='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Rm(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:kl,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await at(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:a}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(s)try{if(s==="push"||s==="pull"){const a=await r.open(i,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!a)return;const c=a;s==="push"?await zm(t,c):await cu(t,c)}else s==="share"?await Lm(t):s==="view"&&await Mm(t)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:kl,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await at(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:a}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(s)try{s==="push"?await jm(t,n.tableId):s==="pull"?await Nm(t,n.tableId):s==="view"&&await Um(t,n.tableId)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}})}async function Om(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Dm(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Uo(e,r),await cu(e))}async function lu(e){const t=e.workspaceId();return`${Am}${t??"default"}`}async function kr(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const s=(await e.store.settings.findOne(await lu(e)))?.value;if(s?.user&&s?.token){const a={user:s.user,gistId:s.gistId??"",token:s.token};return await Uo(e,a),a}return null}async function Uo(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await lu(e),value:t})}function Dm(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const i=n.slice(0,r).trim(),s=n.slice(r+1).trim();i&&(t[i]=s)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Fo(e){const t=await kr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function Pm(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Lm(e){const t=await kr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(Pm(t)))}`,{GistShareDialog:i}=await at(async()=>{const{GistShareDialog:s}=await import("./gist-share-dialog-BPFsL7IE.js");return{GistShareDialog:s}},[]);await i.open(r)}async function Mm(e){const t=await kr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function zm(e,t="all"){const n=await Fo(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=t!=="settings",s=t!=="data",a=(await e.store.tables.find()).filter(_=>_.workspaceId===r);if(i&&a.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,d=1e7,f={},g=[],b=[];if(i)for(const _ of a){const D=_.source!=null?[]:await e.store.rows(_.id).find(),M=JSON.stringify(No(_,D),null,2),U=`${_.name} (${(M.length/1e6).toFixed(2)} MB)`;M.length>c?g.push(U):M.length>d&&b.push(U),f[`${Ge(_.name)}.table.json`]={content:M}}if(g.length>0||b.length>0){const _=[];if(g.length>0&&_.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${g.join(`
`)}`),b.length>0&&_.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${b.join(`
`)}`),!await e.ui.dialogs.confirm(`${_.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(s){const _=(await e.store.viewTemplates.find()).filter(U=>U.workspaceId===r),D=(await e.store.viewInstances.find()).filter(U=>U.workspaceId===r),M=(await e.store.settings.find()).map(U=>({name:U.name,value:U.value}));f["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:_,viewInstances:D,settings:M},null,2)}}let y;if(n.gistId){const _=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:f,description:`easyDBAccess workspace: ${r}`})});if(!_.ok)throw new Error(await mr(_));y=await _.json()}else{const _=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:f})});if(!_.ok)throw new Error(await mr(_));y=await _.json(),n.gistId=y.id,await Uo(e,n)}const k=y.html_url??`https://gist.github.com/${n.user}/${y.id}`,C=t==="settings"?"settings":t==="data"?`${a.length} table${a.length===1?"":"s"} (data only)`:`${a.length} table${a.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${C}.  ${k}`,{kind:"success",title:"Gist sync"})}async function cu(e,t="all"){const n=t!=="settings",r=t!=="data",i=await Fo(e);if(!i||!i.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const s=e.workspaceId();if(!s)throw new Error("no active workspace");const a=await fetch(`https://api.github.com/gists/${i.gistId}`,{headers:{Authorization:`Bearer ${i.token}`,Accept:"application/vnd.github+json"}});if(!a.ok)throw new Error(await mr(a));const c=await a.json(),d=Object.entries(c.files).filter(([U])=>U.endsWith(".table.json")&&!U.startsWith("_easydb"));if(n&&d.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const f=(await e.store.tables.find()).filter(U=>U.workspaceId===s),g=new Map(f.map(U=>[U.name.toLowerCase(),U]));let b=0;const y=[],k=new Map;if(n){const{TopProgress:U}=await at(async()=>{const{TopProgress:Q}=await import("./top-progress-BYb4JhTQ.js");return{TopProgress:Q}},[]),H=U.begin("Pulling from gist…");try{for(const[Q,[ne,W]]of d.entries())try{const q=await xi(W),Y=JSON.parse(q);if(!Y.name||!Array.isArray(Y.columns))throw new Error("unexpected file shape (missing name/columns)");let se;const oe=g.get(Y.name.toLowerCase());if(oe){if(se=await e.store.tables.patch(oe.id,{title:Y.title,columns:Y.columns,...Js(Y),updatedAt:Date.now()}),se.source==null){const B=e.store.rows(oe.id),K=await B.find();await B.bulkRemove(K.map(ue=>ue.id))}}else se=await e.store.tables.insert({id:Ee(),workspaceId:s,name:Y.name,title:Y.title,code:Ge(Y.name),columns:Y.columns,view:Y.view??"table",...Js(Y),updatedAt:Date.now()});if(se.source==null){const B=(Y.rows??[]).map(K=>({id:Ee(),tableId:se.id,data:K,updatedAt:Date.now()}));await e.store.rows(se.id).bulkInsert(B)}k.set(Y.name,se.id),b++}catch(q){y.push({file:ne,error:q.message})}finally{H.fraction((Q+1)/d.length)}}finally{H.done()}}let C=0,_="",D=null;const M=r?c.files["_easydb.workspace.json"]:void 0;if(M)try{const U=await xi(M),H=JSON.parse(U),Q=H.viewTemplates??[],ne=H.viewInstances??[],W=H.settings??[];D=new Set(ne.map(Y=>Y.id));const q=await Ac(e.store.viewTemplates,s,Q);for(const Y of ne){let se;if(Y.tableName&&(se=k.get(Y.tableName)??g.get(Y.tableName)?.id),se??=Y.tableId,!se)continue;const oe=q.get(Y.templateId)??Y.templateId;await e.store.viewInstances.upsert({...Y,workspaceId:s,tableId:se,templateId:oe}),C++}for(const Y of W)await e.store.settings.upsert(Y)}catch(U){_=`Workspace metadata import failed: ${U.message}`}if(y.length>0){const U=y.map(H=>`• ${H.file}: ${H.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${b} of ${d.length} tables. ${y.length} failed:
${U}${_?`
${_}`:""}`,{kind:"warning",title:"Gist sync"})}else{const U=C>0?` (+${C} views)`:"",H=t==="settings"?`Pulled settings${U}.`:`Pulled ${b} table${b===1?"":"s"}.${U}`;e.ui.dialogs.toast(H,{kind:"success",title:"Gist sync"}),_&&e.ui.dialogs.toast(_,{kind:"warning",title:"Gist sync"})}y.length===0&&await uu(e,s,{tableNames:n?new Set([...k.keys()].map(U=>U.toLowerCase())):null,viewInstanceIds:D}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}function _l(e,t=8){const n=e.slice(0,t).map(i=>`• ${i}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function uu(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(d=>d.workspaceId===t&&!n.tableNames.has(d.name.toLowerCase())):[],i=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(d=>d.workspaceId===t&&!n.viewInstanceIds.has(d.id)):[];if(r.length===0&&i.length===0)return;const s=[];if(r.length>0&&s.push(`${r.length} table${r.length===1?"":"s"}:
`+_l(r.map(d=>d.name))),i.length>0&&s.push(`${i.length} view${i.length===1?"":"s"}:
`+_l(i.map(d=>d.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${s.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const d of i)await e.store.viewInstances.remove(d.id);const{deleteTable:c}=await at(async()=>{const{deleteTable:d}=await Promise.resolve().then(()=>rb);return{deleteTable:d}},void 0);for(const d of r)await c(d.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${i.length} view${i.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function jm(e,t){const n=await Fo(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=r.source!=null?[]:await e.store.rows(t).find(),s=JSON.stringify(No(r,i),null,2),a={[`${Ge(r.name)}.table.json`]:{content:s}},c=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:a})});if(!c.ok)throw new Error(await mr(c));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Nm(e,t){const n=await kr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`${Ge(r.name)}.table.json`,s=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await mr(s));const c=(await s.json()).files[i];if(!c){await e.ui.dialogs.alert(`No file "${i}" in the gist for this table.`,"Gist sync");return}const d=await xi(c),f=JSON.parse(d);if(!f.name||!Array.isArray(f.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:f.title,columns:f.columns,...Js(f),updatedAt:Date.now()})).source==null){const b=e.store.rows(t),y=await b.find();await b.bulkRemove(y.map(C=>C.id));const k=(f.rows??[]).map(C=>({id:Ee(),tableId:t,data:C,updatedAt:Date.now()}));await b.bulkInsert(k)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Um(e,t){const n=await kr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`file-${Ge(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${i}`,"_blank","noopener")}function Js(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function xi(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function mr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Fm=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:xi,init:Rm,load:Om,meta:Im,offerPrune:uu},Symbol.toStringTag,{value:"Module"})),du="server-sync:url";function hu(e){return`server-sync:etag:${e}`}async function pu(e){const n=(await e.store.settings.findOne(du))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function Bm(e,t){await e.store.settings.upsert({name:du,value:t.replace(/\/+$/,"")})}async function fu(e,t){const r=(await e.store.settings.findOne(hu(t)))?.value;return typeof r=="string"?r:null}async function fn(e,t,n){await e.store.settings.upsert({name:hu(t),value:n})}function Ni(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function Cl(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function mu(e,t,n){const r=Oi(n,t),i=(await e.store.tables.find()).filter(a=>a.workspaceId===t);for(const a of i){const c=e.store.rows(a.id),d=await c.find();await c.bulkRemove(d.map(f=>f.id)),await e.store.tables.remove(a.id)}let s=0;for(const a of r){const c=Ee(),d=await e.store.tables.insert({id:c,workspaceId:t,name:a.name,code:Ge(a.name),columns:a.columns,view:"table",...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},updatedAt:Date.now()}),f=a.rows.map(g=>({id:Ee(),tableId:d.id,data:g,updatedAt:Date.now()}));await e.store.rows(d.id).bulkInsert(f),s++}return s}const Hm={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function qm(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await at(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>pr);return{AnchoredMenu:a}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(s)try{s==="push"?await Km(t):s==="pull"&&await Vm(t)}catch(a){t.ui.dialogs.toast(`${s==="push"?"Push":"Pull"} failed: ${a.message}`,{kind:"error",title:"Server sync"})}}})}async function Km(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await gu(e);if(!n)return;const r=await ji(e),i=await fu(e,t),s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);let a=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:s,body:r});if(a.status===412){const d=await a.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){d.currentEtag&&await fn(e,t,d.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}a=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!a.ok)throw new Error(await bu(a));const c=Ni(a.headers.get("ETag"));c&&await fn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function Vm(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await gu(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const i=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(i.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!i.ok)throw new Error(await bu(i));const s=Ni(i.headers.get("ETag")),a=await i.json(),c=await mu(e,t,a);s&&await fn(e,t,s),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function gu(e){const t=await pu(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await Bm(e,n),n.replace(/\/+$/,"")}async function bu(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Gm=Object.freeze(Object.defineProperty({__proto__:null,init:qm,meta:Hm},Symbol.toStringTag,{value:"Module"})),Wm={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Ym(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Xm=Object.freeze(Object.defineProperty({__proto__:null,init:Ym,meta:Wm},Symbol.toStringTag,{value:"Module"}));function Ui(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function Fi(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function Bi(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const Qm={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function Jm(e){customElements.get("cell-date")||customElements.define("cell-date",Zm),e.ui.registerCellRenderer("date","cell-date")}class Zm extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Bi({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(eg(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Io(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:Fi(n,this.pencil()));return}if(this._readonly){this.textContent=Zs(this._value);return}const t=document.createElement("input");t.type="date",t.value=Zs(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Ui(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Zs(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function eg(e){return e==null||typeof e=="string"&&e.trim()===""?!1:Zs(e)===""}const tg=Object.freeze(Object.defineProperty({__proto__:null,init:Jm,meta:Qm},Symbol.toStringTag,{value:"Module"})),ng={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function rg(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",ig),e.ui.registerCellRenderer("datetime","cell-datetime")}class ig extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Bi({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(sg(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Io(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:Fi(n,this.pencil()));return}if(this._readonly){this.textContent=eo(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=eo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Ui(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function eo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function sg(e){return e==null||typeof e=="string"&&e.trim()===""?!1:eo(e)===""}const og=Object.freeze(Object.defineProperty({__proto__:null,init:rg,meta:ng},Symbol.toStringTag,{value:"Module"})),ag={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function lg(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",cg),e.ui.registerCellRenderer("boolean","cell-boolean")}class cg extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const i=Bi({value:this._value==null?"":String(this._value),onCommit:s=>this.commit(s),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:s=>this._editor===s});this.append(i),this._editor=i;return}const t=Fc(this._value);if(t==="invalid"){const i=document.createElement("span");i.textContent=String(this._value),i.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Io(i,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?i:Fi(i,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return Ui(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const ug=Object.freeze(Object.defineProperty({__proto__:null,init:lg,meta:ag},Symbol.toStringTag,{value:"Module"})),dg={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function hg(e){customElements.get("cell-color")||customElements.define("cell-color",pg),e.ui.registerCellRenderer("color","cell-color")}class pg extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const fg=Object.freeze(Object.defineProperty({__proto__:null,init:hg,meta:dg},Symbol.toStringTag,{value:"Module"})),mg={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function gg(e){customElements.get("cell-image")||customElements.define("cell-image",bg),e.ui.registerCellRenderer("image","cell-image")}class bg extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const i=Bi({value:this._value,onCommit:a=>this.commit(a),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:a=>this._editor===a}),s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("mousedown",a=>a.preventDefault()),s.addEventListener("click",()=>this.pickFile()),r.append(i,s),this.append(r),this._editor=i;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const r=document.createElement("img");r.src=this._value,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("click",()=>this.pickFile()),t.append(i)}}this.append(this._readonly?t:Fi(t,this.pencil()))}pencil(){return Ui(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const wg=Object.freeze(Object.defineProperty({__proto__:null,init:gg,meta:mg},Symbol.toStringTag,{value:"Module"})),wu=200,yu=100;function yg(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<wu||e.h<yu?null:{...e}}function $i(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}function vg(e,t,n,r){const i=r>0?r:1;return{...e,x:e.x+t/i,y:e.y+n/i}}function xg(e,t,n,r,i,s,a){const c=i>0?i:1,d=n/c,f=r/c;let{x:g,y:b,w:y,h:k}=e;return t.includes("e")&&(y=Math.max(s,e.w+d)),t.includes("s")&&(k=Math.max(a,e.h+f)),t.includes("w")&&(y=Math.max(s,e.w-d),g=e.x+(e.w-y)),t.includes("n")&&(k=Math.max(a,e.h-f),b=e.y+(e.h-k)),{x:g,y:b,w:y,h:k}}function $g(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function Sl(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function kg(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized"}}const _g="input, textarea, select, button, a, .jsPanel-controlbar";function El(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(_g))return!0;return!1}const Cg={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let zs=100;function Tl(){let e=zs;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return zs=e+1,zs}function Sg(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(n!==e&&Number(n.style.zIndex)>t)return!1;return!0}const to=new Set;function Eg(){return[...to].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function an(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=Cg[e]??"",r.addEventListener("click",i=>{i.stopPropagation(),n()}),r}function ki(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id,t.style.setProperty("--eda-panel-color",e.color??"#01579b");const n=document.createElement("div");n.className="jsPanel-hdr";const r=document.createElement("div");r.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const s=document.createElement("div");s.className="jsPanel-titlebar",s.tabIndex=-1,s.style.outline="none",s.addEventListener("pointerdown",()=>s.focus());const a=document.createElement("span");a.className="jsPanel-title",a.textContent=e.title,s.append(a);const c=document.createElement("div");c.className="jsPanel-controlbar",c.append(an("smallify","Collapse",()=>se("smallify")),an("minimize","Minimize",()=>se("minimize")),an("maximize","Maximize",()=>t.maximize()),an("normalize","Restore",()=>se("normalize")),an("close","Close",()=>t.close())),r.append(i,s,c),n.append(r);const d=document.createElement("div");d.className="jsPanel-content",d.append(e.content);const f=document.createElement("div");f.className="jsPanel-ftr",e.footerToolbar&&(f.classList.add("active"),f.append(e.footerToolbar)),t.append(n,d,f);for(const B of["n","s","e","w","ne","nw","se","sw"]){const K=document.createElement("div");K.className="eda-resize",K.dataset.edge=B,t.append(K)}if(t.style.zIndex=String(Tl()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const B=e.contentSize??{w:720,h:360};t.style.width=`${B.w}px`,t.style.height=`${B.h+n.offsetHeight+f.offsetHeight}px`}const g=e.position??"center",b=t.offsetWidth,y=e.container.clientWidth;g==="center"?(t.style.left=`${Math.max(0,(y-b)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in g?(t.style.left=`${Math.max(0,(y-b)/2)}px`,t.style.top=`${g.centerTopOffset}px`):(t.style.left=`${g.x}px`,t.style.top=`${g.y}px`);let k=$g(e.boot),C=U(),_=null,D=null,M=null;function U(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function H(B){t.style.left=`${B.x}px`,t.style.top=`${B.y}px`,t.style.width=`${B.w}px`,t.style.height=`${B.h}px`}function Q(){const B=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-B.x/B.scale}px, ${-B.y/B.scale}px) scale(${1/B.scale})`}function ne(){Q(),D??=e.viewport?.subscribe(Q)??null,!M&&typeof ResizeObserver<"u"&&(M=new ResizeObserver(Q),M.observe(e.container))}function W(){D?.(),D=null,M?.disconnect(),M=null,t.style.transform="",t.style.transformOrigin=""}function q(){const B=document.createElement("div");B.className="jsPanel-replacement",B.id=`${e.id}-min`,B.style.setProperty("--eda-panel-color",e.color??"#01579b");const K=document.createElement("div");K.className="jsPanel-headerlogo",K.innerHTML=i.innerHTML;const ue=document.createElement("span");return ue.className="jsPanel-title",ue.textContent=a.textContent,B.append(K,ue,an("normalize","Restore",()=>{se("normalize"),t.front()}),an("close","Close",()=>t.close())),B.addEventListener("click",ge=>{ge.target.closest("button")||(se("normalize"),t.front())}),B}function Y(B){switch(B==="maximized"&&k.status!=="maximized"&&W(),B==="minimized"&&k.status!=="minimized"&&(_?.remove(),_=null,t.style.display=""),k.status){case"minimized":{B==="normalized"?C=U():B==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const K=e.minimizeTo?document.querySelector(e.minimizeTo):null;_=q(),(K??e.container).append(_);break}case"maximized":B==="normalized"?C=U():B==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),ne();break;case"smallified":C=U(),t.style.height=`${n.offsetHeight}px`;break;case"normalized":B==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),H(C);break}t.dataset.status=k.status}function se(B){const K=k;k=Sl(k,B),k.status!==K.status&&(Y(K.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>k.status}),t.minimize=()=>se("minimize"),t.maximize=(B,K)=>{se("maximize"),K!==!0&&t.front()},t.normalize=()=>se("normalize"),t.smallify=()=>se("smallify"),t.front=(B,K)=>{t.style.zIndex=String(Tl()),K!==!1&&e.onfronted?.()},t.close=()=>{k.status!=="closed"&&(k=Sl(k,"close"),_?.remove(),W(),to.delete(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=B=>{a.textContent=B;const K=_?.querySelector(".jsPanel-title");K&&(K.textContent=B)},t.setHeaderLogo=B=>{i.innerHTML=B;const K=_?.querySelector(".jsPanel-headerlogo");K&&(K.innerHTML=B)},t.persistFlags=()=>kg(k),to.add(t),t.addEventListener("pointerdown",()=>{Sg(t)||t.front()},!0);const oe=B=>{B.addEventListener("pointerdown",K=>{if(K.button!==0||El(K)||k.status==="maximized"||k.status==="minimized")return;const ue=U(),ge=e.viewport?.getState().scale??1,Te=K.clientX,je=K.clientY;let dt=!1;const de=Ae=>{dt=!0;const Ze=vg(ue,Ae.clientX-Te,Ae.clientY-je,ge);t.style.left=`${Ze.x}px`,t.style.top=`${Ze.y}px`},Pe=()=>{B.removeEventListener("pointermove",de),B.removeEventListener("pointerup",Pe),B.removeEventListener("pointercancel",Pe),dt&&e.onmoved?.()};B.setPointerCapture(K.pointerId),B.addEventListener("pointermove",de),B.addEventListener("pointerup",Pe),B.addEventListener("pointercancel",Pe)})};oe(s),oe(i),oe(f);for(const B of t.querySelectorAll(".eda-resize"))B.addEventListener("pointerdown",K=>{if(K.button!==0||k.status!=="normalized")return;const ue=B.dataset.edge,ge=U(),Te=e.viewport?.getState().scale??1,je=K.clientX,dt=K.clientY;let de=!1;const Pe=Ze=>{de=!0,H(xg(ge,ue,Ze.clientX-je,Ze.clientY-dt,Te,wu,yu))},Ae=()=>{B.removeEventListener("pointermove",Pe),B.removeEventListener("pointerup",Ae),B.removeEventListener("pointercancel",Ae),de&&e.onresized?.()};B.setPointerCapture(K.pointerId),B.addEventListener("pointermove",Pe),B.addEventListener("pointerup",Ae),B.addEventListener("pointercancel",Ae)});return n.addEventListener("dblclick",B=>{El(B)||(k.status==="maximized"?se("normalize"):t.maximize())}),k.status!=="normalized"?Y("normalized"):t.dataset.status="normalized",t}function ci(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function Il(e){return!!(e.source||e.origin)}const or='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',Al={normal:`<svg ${or} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${or} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${or} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${or} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},Tg=`<svg ${or} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var Ig=Object.defineProperty,Ag=Object.getOwnPropertyDescriptor,Hi=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ag(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Ig(t,n,i),i};function Rg(e,t,n){(xt.instance??Dg()).show(e,t,n)}function Og(e){if(!e)return null;const t=ci(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Dg(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let xt=class extends xe{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),xt.instance=this}disconnectedCallback(){super.disconnectedCallback(),xt.instance===this&&(xt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return re;const r=n?$`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:$`${t}`;return $`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=Og(this.provenance);return $`
      <dialog @cancel=${this.close} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${n?$`<div class="kind">
                  <span class="kind-label">${n.label}</span>
                  <p class="kind-note">${n.note}</p>
                  ${n.url?$`<div class="kind-origin">
                        <a href=${n.url} target="_blank" rel="noopener noreferrer"
                          >${n.url}</a
                        >
                      </div>`:re}
                </div>`:re}
            ${e?.descriptionHtml?$`<div class="desc">${En(e.descriptionHtml)}</div>`:e?.description?$`<div class="desc">${e.description}</div>`:re}
            ${t?$`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:re}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?$`<p class="empty">No additional information.</p>`:re}
          </div>
        </form>
      </dialog>
    `}};xt.instance=null;xt.styles=[gt,$e`
      dialog {
        min-width: 360px;
        max-width: 560px;
      }
      .desc {
        font-size: 0.9rem;
        color: #374151;
        line-height: 1.5;
      }
      dl {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.35rem 0.75rem;
        margin: 0.75rem 0 0;
        font-size: 0.85rem;
      }
      dt {
        color: #6b7280;
        font-weight: 600;
      }
      dd {
        margin: 0;
      }
      a {
        color: #2563eb;
      }
      .empty {
        color: #6b7280;
        font-size: 0.85rem;
      }
      .kind {
        margin: 0 0 0.5rem;
        padding: 0.5rem 0.6rem;
        background: #f3f4f6;
        border-radius: 0.35rem;
        font-size: 0.85rem;
      }
      .kind .kind-label {
        font-weight: 600;
        color: #374151;
      }
      .kind .kind-note {
        margin: 0.2rem 0 0;
        color: #4b5563;
        line-height: 1.45;
      }
      .kind .kind-origin {
        margin: 0.25rem 0 0;
        word-break: break-all;
      }
    `];Hi([N()],xt.prototype,"name",2);Hi([N()],xt.prototype,"info",2);Hi([N()],xt.prototype,"provenance",2);xt=Hi([Se("table-info-dialog")],xt);const Pg=.25,Lg=4;function Mg(e){return Math.min(Lg,Math.max(Pg,e))}function Rl(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const rr={x:0,y:0,scale:1};function Ol(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function zg(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function jg(e,t){let n={...rr};t.style.transformOrigin="0 0";const r=new Set,i=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const K of r)K({...n})};let s="none",a={...rr},c=0,d=0,f=0,g=0,b=0,y=0;const k=(K,ue)=>{const ge=e.getBoundingClientRect();return{x:K-ge.left,y:ue-ge.top}},C=K=>{if(K.touches.length===2){s="pinch",a={...n};const[ue,ge]=[K.touches[0],K.touches[1]];f=Ol(ue,ge)||1;const Te=k((ue.clientX+ge.clientX)/2,(ue.clientY+ge.clientY)/2);g=(Te.x-n.x)/n.scale,b=(Te.y-n.y)/n.scale,K.preventDefault();return}if(K.touches.length===1&&!zg(K.target)){const ue=K.timeStamp;if(ue-y<300){n={...rr},i(),y=0,s="none",K.preventDefault();return}y=ue,s="pan",a={...n},c=K.touches[0].clientX,d=K.touches[0].clientY}else s="none"},_=K=>{if(s==="pan"&&K.touches.length===1){const ue=K.touches[0];n=Rl(a,ue.clientX-c,ue.clientY-d),i(),K.preventDefault()}else if(s==="pinch"&&K.touches.length>=2){const[ue,ge]=[K.touches[0],K.touches[1]],Te=Mg(a.scale*(Ol(ue,ge)/f)),je=k((ue.clientX+ge.clientX)/2,(ue.clientY+ge.clientY)/2);n={x:je.x-g*Te,y:je.y-b*Te,scale:Te},i(),K.preventDefault()}},D=K=>{K.touches.length===0?s="none":K.touches.length===1&&s==="pinch"&&(s="pan",a={...n},c=K.touches[0].clientX,d=K.touches[0].clientY)};let M=!1,U={...rr},H=0,Q=0,ne=!1;const W=(K,ue)=>{const ge=e.getBoundingClientRect();return K>=ge.left&&K<=ge.right&&ue>=ge.top&&ue<=ge.bottom},q=K=>{if(!M)return;const ue=K.clientX-H,ge=K.clientY-Q;!ne&&Math.hypot(ue,ge)<4||(ne=!0,document.body.style.cursor="grabbing",n=Rl(U,ue,ge),i(),K.preventDefault())},Y=()=>{M&&(M=!1,document.body.style.cursor="",window.removeEventListener("mousemove",q,!0),window.removeEventListener("mouseup",se,!0))};function se(){Y()}const oe=K=>{K.button===2&&W(K.clientX,K.clientY)&&(M=!0,ne=!1,U={...n},H=K.clientX,Q=K.clientY,window.addEventListener("mousemove",q,!0),window.addEventListener("mouseup",se,!0))},B=K=>{ne&&(K.preventDefault(),ne=!1)};return e.addEventListener("touchstart",C,{passive:!1}),e.addEventListener("touchmove",_,{passive:!1}),e.addEventListener("touchend",D),e.addEventListener("touchcancel",D),window.addEventListener("mousedown",oe,!0),window.addEventListener("contextmenu",B,!0),{snapshot:()=>({...n}),reset:()=>{n={...rr},i()},restore:K=>{n={...K},i()},subscribe:K=>(r.add(K),()=>r.delete(K)),dispose:()=>{e.removeEventListener("touchstart",C),e.removeEventListener("touchmove",_),e.removeEventListener("touchend",D),e.removeEventListener("touchcancel",D),window.removeEventListener("mousedown",oe,!0),window.removeEventListener("contextmenu",B,!0),Y()}}}const ii=new Map;function qi(e,t){const r=(ii.get(e)??Promise.resolve()).then(t,t);return ii.set(e,r),r.finally(()=>{ii.get(e)===r&&ii.delete(e)}),r}let js=0;function vu(){return js=Math.max(Date.now(),js+1),js}const Ki=new Map;function xu(e,t){Ki.set(e,t)}function Vi(e){Ki.delete(e)}function Ng(e){return Ki.has(e)}function Ug(e){try{Ki.get(e)?.()}catch{}}const Rn=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function Fg(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let Dl=!1;async function Bg(){Dl||(Dl=!0,document.addEventListener("easydb:restack-windows",()=>void Pl())),await Pl()}async function Pl(){if(Rn)return;const e=await ae();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),i=[...n.filter(a=>a.workspaceId===e.workspaceId&&!a.windowGeometry?.closed).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0})),...r.filter(a=>a.workspaceId===e.workspaceId&&a.open).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0}))],s=Fg(i);if(t<12&&!s.every(a=>Ng(a))){await new Promise(a=>setTimeout(a,80));continue}for(const a of s)Ug(a);return}}var Hg=Object.defineProperty,qg=Object.getOwnPropertyDescriptor,_r=(e,t,n,r)=>{for(var i=r>1?void 0:r?qg(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Hg(t,n,i),i};let mn=class extends xe{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return $`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return $`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};mn.styles=[ut,$e`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
      }
      button.icon {
        background: transparent;
        border: 0;
        color: white;
        cursor: pointer;
        padding: 0 0.25rem;
        font-size: 0.95rem;
        line-height: 1;
      }
      button.icon:hover {
        opacity: 0.8;
      }
      button.icon.active {
        color: #93c5fd;
      }
      input {
        font: inherit;
        font-size: 0.85rem;
        padding: 0.15rem 0.4rem;
        border: 0;
        border-radius: 0.15rem;
        background: rgba(255, 255, 255, 0.9);
        color: #111;
        width: 11rem;
      }
      input:focus {
        outline: 2px solid #93c5fd;
        outline-offset: -1px;
      }
      .mi.sm {
        font-size: 0.95rem;
      }
    `];_r([ct({type:String})],mn.prototype,"tableId",2);_r([N()],mn.prototype,"query",2);_r([N()],mn.prototype,"open",2);_r([Rt("input")],mn.prototype,"inputEl",2);mn=_r([Se("panel-search")],mn);var Kg=Object.defineProperty,Vg=Object.getOwnPropertyDescriptor,zn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Vg(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Kg(t,n,i),i};let Gt=class extends xe{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await ae();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(i){console.error(`[table-button:${e.id}]`,i)}}}async connectedCallback(){super.connectedCallback();const e=await ae();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ae();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=Gg(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return $`
      ${this.table?.readonly?re:$`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>$`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?$`<span class="icon-svg">${fo(e.icon)}</span>`:$`<span class="mi sm">${e.icon}</span>`:$`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Gt.styles=[ut,$e`
      :host {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        width: 100%;
        padding: 0.35rem 0.55rem;
        box-sizing: border-box;
        font-size: 0.85rem;
      }
      /* Icon-only footer buttons: tight, roughly square. A button that has no
         icon (falls back to its text label) still reads fine with this padding. */
      button {
        font: inherit;
        padding: 0.2rem 0.4rem;
        border: 1px solid #d1d5db;
        background: white;
        border-radius: 0.25rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
      }
      button:hover {
        background: #f3f4f6;
      }
      /* Inline-SVG icon (e.g. the GitHub mark) sized to match the small material
         glyphs the other footer buttons use. */
      .icon-svg {
        display: inline-flex;
        align-items: center;
      }
      .icon-svg svg {
        width: 1rem;
        height: 1rem;
        display: block;
      }
      /* Danger buttons (e.g. resume an interrupted import) read as red and
         pulse gently to draw the eye. */
      button.danger {
        color: #b91c1c;
        border-color: #fca5a5;
        background: #fef2f2;
        animation: danger-pulse 1.6s ease-in-out infinite;
      }
      button.danger:hover {
        background: #fee2e2;
      }
      @keyframes danger-pulse {
        0%,
        100% {
          border-color: #fca5a5;
        }
        50% {
          border-color: #ef4444;
        }
      }
      .spacer {
        flex: 1;
      }
      .count {
        color: #6b7280;
      }
      .mi.sm {
        font-size: 0.95rem;
      }
    `];zn([ct({type:String})],Gt.prototype,"tableId",2);zn([ct({type:Boolean})],Gt.prototype,"active",2);zn([N()],Gt.prototype,"rowCount",2);zn([N()],Gt.prototype,"tableButtons",2);zn([N()],Gt.prototype,"table",2);Gt=zn([Se("panel-footer")],Gt);function Gg(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Ns(e){return e.title?.trim()?e.title.trim():e.name}function Wg(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Yg(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const Kt=new Map,$u=new Set;let Ll=!1,ku=null;function _i(){return ku}function gr(){return{getState:()=>_i()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>_i()?.subscribe(e)??(()=>{})}}async function _u(){const e=await ae();await Promise.all([...Kt.keys()].map(t=>ui(t,e)))}function Cu(e){const t=Kt.get(e);return t?(t.status==="minimized"&&t.normalize(),t.front(),!0):(Xg(e),!0)}async function Xg(e){const t=await ae(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Su(e){const t=await ae();await nb(e,t)}async function Eu(){if(Ll)return;Ll=!0;const e=await ae(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){ku=jg(t,n);const i=()=>Yg(t);i(),window.addEventListener("resize",i);const s=document.querySelector("app-shell")?.shadowRoot,a=s?.querySelector("header"),c=s?.querySelector("footer");if(typeof ResizeObserver<"u"&&(a||c)){const d=new ResizeObserver(i);a&&d.observe(a),c&&d.observe(c)}}const r=(await e.store.tables.find()).filter(i=>i.workspaceId===e.workspaceId);r.sort($i);for(const i of r)i.windowGeometry?.closed||Ml(i,e);e.store.tables.subscribe(i=>{const s=i.filter(d=>d.workspaceId===e.workspaceId),a=new Map(s.map(d=>[d.id,d]));for(const[d,f]of Kt){const g=a.get(d);if(!g||g.windowGeometry?.closed){Kt.delete(d),Vi(d),$u.add(d);try{f.status!=="closed"&&f.close()}catch{}}}const c=s.filter(d=>!Kt.has(d.id)&&!d.windowGeometry?.closed).sort($i);for(const d of c)Ml(d,e)}),Bg()}const Tu=720,Iu=360;function Ml(e,t){const n=`panel-${Au(e.id)}`,r=Wg(),i=yg(e.windowGeometry),s=Rn||i?.minimized===!0,a=()=>{const oe=document.createElement("data-table");return oe.tableId=e.id,oe.style.height="100%",oe},c=s?document.createElement("div"):a();let d=s?null:c,f=Ns(e),g=-1,b=-1;const y=()=>{H.setHeaderTitle(f+jc(g,b))},k=oe=>{const B=oe.detail;B.key===e.id&&(g=B.count,b=B.total,y())};document.addEventListener(yi,k);const C=()=>{M.active=!1,d?.remove(),d=null},_=()=>{if(d)return;const oe=document.getElementById(n)?.querySelector(".jsPanel-content");if(!oe)return;oe.replaceChildren();const B=a();oe.appendChild(B),d=B,M.active=!0},D=document.createElement("panel-search");D.tableId=e.id;const M=document.createElement("panel-footer");M.tableId=e.id,M.active=!s;const U=async()=>{if(document.removeEventListener(yi,k),Kt.delete(e.id),Vi(e.id),$u.delete(e.id))return;const oe=await t.store.tables.findOne(e.id);if(!oe)return;const B=oe.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...B,closed:!0},updatedAt:Date.now()})},H=ki({id:n,container:r,title:f,logo:Al[ci(e)],color:"#01579b",content:c,footerToolbar:M,...i?{panelSize:{w:i.w,h:i.h},position:{x:i.x,y:i.y}}:{contentSize:{w:Tu,h:Iu},position:Jg()},minimizeTo:"#easydb-minimized-dock",viewport:gr(),boot:{minimized:s,maximized:!Rn&&i?.maximized===!0},onmoved:()=>void ui(e.id,t),onresized:()=>void ui(e.id,t),onfronted:()=>void eb(e.id,t),onstatuschange:oe=>{oe.status==="minimized"?C():(oe.status==="normalized"||oe.status==="maximized")&&_(),ui(e.id,t)},onclosed:()=>void U()});Kt.set(e.id,H),xu(e.id,()=>H.front(void 0,!1));const Q=document.getElementById(n),ne=Q?.querySelector(".jsPanel-controlbar");ne&&ne.prepend(D),Il(e)&&Q?.classList.add("eda-refreshable");let W=null;const q=document.createElement("button");q.type="button",q.title="Table info",q.setAttribute("aria-label","Table info"),q.className="eda-info-btn",q.textContent="ⓘ",q.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",q.addEventListener("click",oe=>{oe.stopPropagation(),W&&Rg(f,W.info??{},{source:W.source,origin:W.origin})}),ne?.prepend(q);const Y=oe=>{W=oe??null;const B=!!(oe?.info||oe?.source||oe?.origin);q.style.display=B?"inline-flex":"none"};Y(e);let se=ci(e);t.store.tables.subscribe(oe=>{const B=oe.find(ue=>ue.id===e.id);if(!B)return;Y(B),Ns(B)!==f&&(f=Ns(B),y());const K=ci(B);K!==se&&(se=K,H.setHeaderLogo(Al[K]),Q?.classList.toggle("eda-refreshable",Il(B)))})}let Qg=0;function Jg(){const e=Qg++;return{x:40+e%8*30,y:80+e%8*30}}function ui(e,t){return qi(`table:${e}`,()=>Zg(e,t))}async function Zg(e,t){const n=document.getElementById(`panel-${Au(e)}`);if(!n)return;const r=Kt.get(e),i=r?.status??"normalized",s=r?.persistFlags()??{minimized:!1,maximized:!1};try{const c=(await t.store.tables.findOne(e))?.windowGeometry,d=Rn?c?.minimized??!1:s.minimized,f=Rn?c?.maximized??!1:s.maximized;let g=n.offsetLeft,b=n.offsetTop,y=n.offsetWidth,k=n.offsetHeight;(i==="minimized"||i==="maximized")&&(c?(g=c.x,b=c.y,y=c.w,k=c.h):(g=0,b=0,y=Tu,k=Iu)),g<=-9e3&&(g=c?.x??40);const _={x:g,y:b,w:y,h:k,z:c?.z??0,minimized:d,maximized:f};await t.store.tables.patch(e,{windowGeometry:_,updatedAt:Date.now()})}catch{}}function eb(e,t){return qi(`table:${e}`,()=>tb(e,t))}async function tb(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:vu()},updatedAt:Date.now()})}catch{}}async function nb(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),i=await r.find();await r.bulkRemove(i.map(s=>s.id))}await t.store.tables.remove(e)}function Au(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const rb=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:Rn,currentPanZoom:_i,deleteTable:Su,focusTableWindow:Cu,initWindowManager:Eu,persistTablePanelGeometry:_u,shellViewport:gr},Symbol.toStringTag,{value:"Module"})),ib=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Ru(e){return ib.test(e)}function sb(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function ob(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return sb(e.replace(/<[^>]*>/g,""))}function ab(e){return(Ru(e)?ob(e):e).replace(/\s+/g," ").trim()}const lb={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let no=30;async function zl(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(no=Math.floor(t))}function cb(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",ub),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),zl(e),e.events.on("app:ready",()=>void zl(e))}function jl(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let Nl=0;class ub extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const a=document.createElement("span");a.style.cssText="color:#9ca3af;cursor:text",a.textContent="empty",a.title="Click to edit the HTML",a.addEventListener("click",()=>this.openEditor()),this.append(a);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=ab(this._value);n.textContent=r.length>no?r.slice(0,no)+"…":r,n.title="Click to edit the HTML",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",a=>{a.stopPropagation(),this.openEditor()});const i=document.createElement("span");i.style.cssText="flex:1 1 auto";const s=document.createElement("button");s.type="button",s.title="Open the HTML in a window",s.setAttribute("aria-label","Open the HTML in a window"),s.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',s.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",s.addEventListener("mouseenter",()=>s.style.color="#4b5563"),s.addEventListener("mouseleave",()=>s.style.color="#9ca3af"),s.addEventListener("click",a=>{a.stopPropagation(),this.openWindow()}),t.append(n,i,s),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",Ru(this._value))t.innerHTML=this._value;else{const n=document.createElement("pre");n.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",n.textContent=this._value,t.append(n)}ki({id:`easydb-html-popup-${++Nl}`,container:jl(),title:this._label,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},minimizeTo:"#easydb-minimized-dock",viewport:gr()})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const n=document.createElement("textarea");n.value=this._value,n.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const r=document.createElement("div");r.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const i=document.createElement("button");i.type="button",i.textContent="Cancel",i.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const s=document.createElement("button");s.type="button",s.textContent="Save",s.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",r.append(i,s),t.append(n,r);const a=ki({id:`easydb-html-edit-${++Nl}`,container:jl(),title:`Edit ${this._label}`,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:"center",minimizeTo:"#easydb-minimized-dock",viewport:gr()});i.addEventListener("click",()=>a.close()),s.addEventListener("click",()=>{this._value=n.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:n.value},bubbles:!0,composed:!0})),a.close(),this.render()}),n.addEventListener("keydown",c=>{c.key==="Enter"&&(c.ctrlKey||c.metaKey)?(c.preventDefault(),s.click()):c.key==="Escape"&&(c.preventDefault(),a.close())}),setTimeout(()=>n.focus(),0)}}const db=Object.freeze(Object.defineProperty({__proto__:null,init:cb,meta:lb},Symbol.toStringTag,{value:"Module"})),hb={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function pb(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",fb),e.ui.registerCellRenderer("html","html-render-cell")}class fb extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let n=!1;const r=()=>{n||(n=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",r),t.addEventListener("keydown",i=>{i.key==="Enter"?(i.preventDefault(),t.blur()):i.key==="Escape"&&(i.preventDefault(),n=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const mb=Object.freeze(Object.defineProperty({__proto__:null,init:pb,meta:hb},Symbol.toStringTag,{value:"Module"})),gb={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function bb(e){customElements.get("cell-link")||customElements.define("cell-link",wb),e.ui.registerCellRenderer("link","cell-link")}class wb extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:yb(t),r=!this._editing&&!n?vb(t):null,i=!this._editing&&!n&&!r?xb(t):null;if(n||r||i){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const a=document.createElement("a");a.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(a.target="_blank",a.rel="noopener noreferrer"),a.textContent=t,a.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",a.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),this._editing=!0,this.render()}),s.append(a,c),this.append(s)}else{const s=document.createElement("input");s.type="text",s.value=this.rawValue,s.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",s.addEventListener("change",()=>{this._editor===s&&this.commit(s.value)}),s.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),this.commit(s.value)):a.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),s.addEventListener("blur",()=>{this._editor===s&&this.commit(s.value)}),this.append(s),this._editor=s,this._editing&&setTimeout(()=>{s.focus(),s.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function yb(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function vb(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function xb(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),i=t.startsWith("+");return!r&&!i&&n.length<10?null:t}const $b=Object.freeze(Object.defineProperty({__proto__:null,init:bb,meta:gb},Symbol.toStringTag,{value:"Module"})),lr={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, html-preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},kb=120,Ou=50,_b=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,Cb=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function Du(e){return/^https?:\/\/\S+$/i.test(e)}function Sb(e){return/^data:image\//i.test(e)?!0:Du(e)&&_b.test(e)}function Pu(e,t){if(e!=="string")return;const n=[];for(const i of t){if(i==null)continue;const s=typeof i=="string"?i.trim():String(i).trim();s&&n.push(s)}if(n.length===0)return;if(n.every(Sb))return"image";if(n.every(Du))return"link";if(n.some(i=>Cb.test(i))||n.reduce((i,s)=>i+s.length,0)/n.length>kb)return"html-preview"}function Bo(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=Pu(n.type,t.map(i=>i[n.field]));return r?{...n,renderer:r}:n})}function Eb(e){e.events.on("import:after",({tableId:t})=>{Tb(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:lr.name}),null;const i=(await t.store.rows(r).find()).slice(0,Ou);if(i.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:lr.name}),null;const s=n.map(({renderer:d,...f})=>f),a=Bo(s,i.map(d=>d.data)),c=a.filter((d,f)=>d.renderer!==n[f]?.renderer).length;return t.ui.dialogs.toast(c===0?"No renderer fits these values — columns left as they are.":`Set ${c} renderer${c===1?"":"s"}. Press Save to keep them.`,{kind:c===0?"info":"success",title:lr.name}),a}})}async function Tb(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(s=>s.renderer))return;const r=(await e.store.rows(t).find()).slice(0,Ou);if(r.length===0)return;const i=Bo(n.columns,r.map(s=>s.data));if(i.every((s,a)=>s.renderer===n.columns[a]?.renderer))return;await e.store.tables.upsert({...n,columns:i,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:lr.id,phase:"runtime",error:n})}}const Ib=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:Pu,init:Eb,meta:lr,withInferredRenderers:Bo},Symbol.toStringTag,{value:"Module"})),Ab={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function Rb(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Su(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const Ob=Object.freeze(Object.defineProperty({__proto__:null,init:Rb,meta:Ab},Symbol.toStringTag,{value:"Module"}));var Db=Object.defineProperty,Pb=Object.getOwnPropertyDescriptor,Ho=(e,t,n,r)=>{for(var i=r>1?void 0:r?Pb(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Db(t,n,i),i};function Lu(e,t){return($t.instance??Lb()).open(e,t)}function Lb(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let $t=class extends xe{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const i=this.rows[r],s=i.field.trim(),a=i.label.trim()||s;return{...n,field:s,label:a,hidden:i.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),$t.instance=this}disconnectedCallback(){super.disconnectedCallback(),$t.instance===this&&($t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const i=n.field.trim().toLowerCase();if(i===""){e.add(r);return}(t.get(i)??t.set(i,[]).get(i)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,i)=>i===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return $`
      <dialog @cancel=${this.onCancel} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>
          ×
        </button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${this.subject?`Edit columns — ${this.subject}`:"Edit columns"}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${t>0}>Import</button>
            </div>
          </div>
          <div class="dialog-body">
            <p class="intro">
              Rename columns before importing. A <strong>name</strong> is the field key; duplicate
              or empty names are shown in red and must be fixed first. Tick <strong>Hide</strong> to
              import a column hidden — click the <strong>Hide</strong> header to toggle all/none.
            </p>
            <div class="grid">
              <div class="head">Name</div>
              <div class="head">Label</div>
              <div
                class="head toggle"
                role="button"
                tabindex="0"
                title="Toggle hide for all columns"
                @click=${this.toggleAllHidden}
                @keydown=${n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.toggleAllHidden())}}
              >
                Hide
              </div>
              ${this.rows.map((n,r)=>$`
                  <input
                    class=${e.has(r)?"invalid":""}
                    .value=${n.field}
                    aria-label=${`Column ${r+1} name`}
                    @input=${i=>this.updateRow(r,"field",i.target.value)}
                  />
                  <input
                    .value=${n.label}
                    aria-label=${`Column ${r+1} label`}
                    @input=${i=>this.updateRow(r,"label",i.target.value)}
                  />
                  <div class="hidecell">
                    <input
                      type="checkbox"
                      .checked=${n.hidden}
                      aria-label=${`Hide column ${r+1}`}
                      @change=${i=>this.setHidden(r,i.target.checked)}
                    />
                  </div>
                `)}
            </div>
            <p class="err">
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:re}
            </p>
          </div>
        </form>
      </dialog>
    `}};$t.instance=null;$t.styles=[gt,$e`
      dialog {
        min-width: 460px;
        max-width: 640px;
      }
      p.intro {
        margin: 0;
        font-size: 0.85rem;
        color: #6b7280;
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 0.4rem 0.75rem;
        margin-top: 0.6rem;
        max-height: 50vh;
        overflow: auto;
        align-items: center;
      }
      .head {
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #6b7280;
        position: sticky;
        top: 0;
        background: white;
        padding-bottom: 0.15rem;
      }
      /* A header for a per-row toggle column: clicking it flips all rows on/off. */
      .head.toggle {
        cursor: pointer;
        user-select: none;
        text-align: center;
      }
      .head.toggle:hover {
        color: #2563eb;
        text-decoration: underline;
      }
      .hidecell {
        display: flex;
        justify-content: center;
      }
      input {
        font: inherit;
        padding: 0.35rem 0.45rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
        background: white;
      }
      input[type='checkbox'] {
        width: auto;
        padding: 0;
        cursor: pointer;
      }
      input.invalid {
        border-color: #dc2626;
        background: #fef2f2;
        outline-color: #dc2626;
      }
      .err {
        color: #b91c1c;
        font-size: 0.78rem;
        margin: 0.5rem 0 0;
        min-height: 1.1em;
      }
    `];Ho([N()],$t.prototype,"rows",2);Ho([N()],$t.prototype,"subject",2);$t=Ho([Se("column-names-dialog")],$t);const Mb=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return $t},editColumnNames:Lu},Symbol.toStringTag,{value:"Module"}));async function zb(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const i={api:e,fetchText:(ne,W)=>Ai(e,ne,W??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},s=await n.list(i,{kind:"url",url:r});if(s.length===0)throw new Error(`Nothing to read at ${r} any more.`);const a=s.find(ne=>ne.name===t.name)??(s.length===1?s[0]:void 0);if(!a)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let c=[];const d=[];for await(const ne of n.read(i,a))ne.columns?.length&&(c=ne.columns),d.push(...ne.rows);const{columns:f,newFields:g}=Ri(t.columns,c,t.deletedColumns??[]),b=t.origin?.pks??[],y=new Set(c.map(ne=>ne.field)),k=t.columns.map(ne=>ne.field).filter(ne=>!y.has(ne)&&!b.includes(ne)),C=(t.deletedColumns??[]).filter(ne=>y.has(ne)),_=e.store.rows(t.id),D=await _.find(),{data:M,merged:U}=Pc({oldRows:D.map(ne=>({data:ne.data})),freshRows:d,pks:b,userAddedFields:k,deletedRemoteFields:C}),H=Date.now();f.length>0&&await e.store.tables.patch(t.id,{columns:f,updatedAt:H}),await _.bulkRemove(D.map(ne=>ne.id));const Q=M.map(ne=>({id:Ee(),tableId:t.id,data:ne,updatedAt:H}));return await _.bulkInsert(Q),{rowCount:Q.length,newFields:g,merged:U}}var jb=Object.defineProperty,Nb=Object.getOwnPropertyDescriptor,Fe=(e,t,n,r)=>{for(var i=r>1?void 0:r?Nb(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&jb(t,n,i),i};const Ub="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Fb="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Bb='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Ul=[{label:"Northwind — sample database (JSON dump)",url:Ub,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Fb,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Hb={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function qb(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Bb,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Vb(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>Kb(t,n)})}async function Kb(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await Mu(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const i=await zb(e,n,r),s=[];i.newFields.length>0&&s.push(`${i.newFields.length} new column${i.newFields.length===1?"":"s"}`),!i.merged&&i.rowCount>0&&s.push("rows replaced (no primary key to match on)"),e.ui.dialogs.toast(`Refreshed "${n.name}" (${i.rowCount.toLocaleString()} rows)${s.length?` — ${s.join(", ")}`:""}.`,{kind:i.newFields.length>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function Vb(e,t="auto"){const r=await(_e.instance??Zb()).open({presetKind:t,async listDatabases(_){const D=At(_);return Hc(M=>e.backend.fetch(M),D.base)},async listTables(){const _=e.workspaceId();return(await e.store.tables.find()).filter(D=>D.workspaceId===_&&!D.source).map(D=>({id:D.id,name:D.name})).sort((D,M)=>D.name.localeCompare(M.name))}});if(!r)return;const{url:i,file:s,kind:a,dbChosen:c,editColumns:d,maxRows:f,mode:g,panel:b,target:y}=r,k=s?.name??i,C=d?(_,D)=>Lu(_,D):void 0;typeof b.separator=="string"&&b.separator;try{const _=await Mu(a);if(_){const D=a==="json"?await Gb(e,i,s,f,g):null;if(D?.isDump&&await e.ui.dialogs.confirm(`"${k}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Eo(e,D.text,k,{maxRows:f,editColumns:C,...s?{}:{originUrl:i}});return}const M=s?s.name:Dn(i),U=D?{kind:"text",text:D.text,name:M}:s?{kind:"file",file:s}:{kind:"url",url:i},H=await Ic(e,_,U,{mode:g,target:y,maxRows:f,panel:b,...D&&!s?{origin:{type:_.id,url:i}}:{},...C?{editColumns:Q=>C(Q)}:{}});_.ownToasts||Wb(e,H,k);return}if(g==="reference"&&!s){a==="datasette"?await Jb(e,i):await zu(e,i,a);return}await zo(e,i,{skipTablePicker:c,maxRows:f,editColumns:C})}catch(_){e.ui.dialogs.toast(`Could not import ${k}: ${_.message}`,{kind:"error",title:"Import"})}}async function Gb(e,t,n,r,i){if(i==="reference")return null;const s=n?await n.text():await Ai(e,t,`Reading ${Dn(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:s,isDump:So(JSON.parse(s))}}catch{return{text:s,isDump:!1}}}async function Mu(e){const{registries:t}=await ae();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function Wb(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((a,c)=>a+c.rowCount,0),i=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const a=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${i} (${r.toLocaleString()} rows)${a}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const s=t.failed.map(a=>`${a.name}: ${a.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${s?` — ${s}`:""}.`,{kind:"error",title:"Import"})}function Yb(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(i=>i!=null&&typeof i=="object"&&!Array.isArray(i));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const i of["rows","records","data"])if(n(r[i]))return r[i];for(const i of Object.values(r))if(n(i))return i}return[]}function Xb(e){const t=Yb(e).slice(0,50),n=i=>typeof i=="number"?"number":typeof i=="boolean"?"boolean":"string",r=new Map;for(const i of t)for(const[s,a]of Object.entries(i))!r.has(s)&&a!=null?r.set(s,n(a)):r.has(s)||r.set(s,"string");return[...r.entries()].map(([i,s])=>({field:i,label:i,type:s}))}function Qb(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function Jb(e,t){const n=At(t),i=await Lo(c=>e.backend.fetch(c),n,"Reference");if(i===null)return;if(i.length===0)throw new Error("No tables found to reference at that URL.");let s=0;const a=[];for(const c of i)try{await zu(e,Qb(n.base,c.db,c.table),"json",{nameHint:`${c.db}/${c.table}`,silent:!0}),s++}catch(d){a.push(`${c.table}: ${d.message}`)}e.ui.dialogs.toast(`Referenced ${s} table${s===1?"":"s"}${a.length?` — ${a.length} failed`:""}.`,{kind:a.length?"warning":"success",title:"Reference"})}async function zu(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=r.nameHint??Dn(t),a=await Ai(e,t,`Reading ${s}…`,{maxBytes:null}),c=n==="csv"?Pn(a).columns:Xb(a);if(c.length===0)throw new Error("No columns found in the referenced data.");const d=new Set((await e.store.tables.find()).filter(b=>b.workspaceId===i).map(b=>b.name.toLowerCase()));let f=s;for(let b=2;d.has(f.toLowerCase());b++)f=`${s}-${b}`;const g={id:Ee(),workspaceId:i,name:f,code:Ge(f),columns:c,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(g),r.silent||e.ui.dialogs.toast(`Referenced ${f} — live, read-only.`,{kind:"success",title:"Reference"})}function Zb(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function ew(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(s=>s.startsWith("_")),i=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.json$/i.test(t.pathname)?"json":i?"datasette":"json"}catch{return"json"}}function Fl(e,t){if(t!=="datasette"||!e)return!1;try{const n=At(e);return!n.db&&!n.table}catch{return!1}}function tw(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":"json"}let _e=class extends xe{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,i=this.editColumns&&this.mode==="copy",s=this.panelValue(),a=this.supportsTarget?this.target:{kind:"new"},c=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:i,maxRows:r,mode:c,panel:s,target:a});return}const d=n==="datasette"&&!!this.selectedDb&&Fl(t,n),f=d?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:f,kind:n,dbChosen:d,editColumns:i,maxRows:r,mode:c,panel:s,target:a})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?tw(this.file.name):ew(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),_e.instance=this}disconnectedCallback(){super.disconnectedCallback(),_e.instance===this&&(_e.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await ae(),t=[...e.importers].sort((i,s)=>(i.order??Number.MAX_SAFE_INTEGER)-(s.order??Number.MAX_SAFE_INTEGER)).map(i=>({id:i.id,label:i.label,panel:i.panel,kernel:i.supports?.kernel})),n=t.some(i=>i.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const i of e.importers)for(const s of i.accept??[])r.add(s);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=Ul[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Fl(this.url.trim(),this.resolvedKind)?re:$`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?$`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>$`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:$`<option value="">— not loaded —</option>`}
          </select>
          <button
            type="button"
            class="ghost db-load"
            ?disabled=${this.dbLoading}
            @click=${()=>void this.loadDatabases()}
          >
            ${this.dbLoading?"Loading…":this.dbList?"Refresh":"List databases"}
          </button>
        </div>
      </label>
      ${this.dbError?$`<p class="hint error">${this.dbError}</p>`:re}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return re;const e=this.targetKind!=="new";return $`
      <label>
        Import into
        <div class="row db-row">
          <select
            data-testid="import-target"
            .value=${this.targetKind}
            @change=${t=>{this.targetKind=t.target.value,this.targetKind!=="new"&&!this.targetTableId&&(this.targetTableId=this.tables[0]?.id??"")}}
          >
            <option value="new" ?selected=${this.targetKind==="new"}>A new table</option>
            <option value="append" ?selected=${this.targetKind==="append"}>
              Append to an existing table
            </option>
            <option value="overwrite" ?selected=${this.targetKind==="overwrite"}>
              Replace the rows of an existing table
            </option>
          </select>
          ${e?$`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?$`<option value="">— no tables yet —</option>`:this.tables.map(t=>$`<option value=${t.id} ?selected=${t.id===this.targetTableId}>
                          ${t.name}
                        </option>`)}
              </select>`:re}
        </div>
      </label>
      ${e?$`<p class="hint">
            The table keeps its own columns. Values map onto them the way the format requires — a
            CSV by column position, so its header names need not match.
          </p>`:re}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===re?re:$`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>
          ×
        </button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>Import</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary">Import</button>
            </div>
          </div>
          <div class="dialog-body">
            <label>
              Import as
              <select
                data-testid="import-format"
                .value=${this.kind}
                @change=${e=>{this.kind=e.target.value,this.resetDbList()}}
              >
                <option value="auto" ?selected=${this.kind==="auto"}>Auto-detect</option>
                ${this.formats.map(e=>$`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
              </select>
            </label>

            <fieldset class="block">
              <legend>Source and options</legend>
              <label>
                Sample source
                <select
                  data-testid="import-sample"
                  .value=${String(this.presetIdx)}
                  @change=${e=>this.onPresetChange(e)}
                >
                  <option value="-1" ?selected=${this.presetIdx===-1}>— choose a sample —</option>
                  ${Ul.map((e,t)=>$`<option value=${String(t)} ?selected=${t===this.presetIdx}>
                        ${e.label}
                      </option>`)}
                </select>
              </label>

              <label>
                URL
                <input
                  type="text"
                  autofocus
                  placeholder="https://… (JSON dump, .csv/.tsv file, or Datasette table)"
                  ?disabled=${!!this.file}
                  .value=${this.url}
                  @input=${e=>{this.url=e.target.value,this.presetIdx=-1,this.file=null,this.resetDbList()}}
                />
              </label>

              <label>
                …or upload a file
                <input
                  type="file"
                  accept=${this.acceptAttr}
                  @change=${e=>this.onFileChange(e)}
                />
              </label>
              ${this.file?$`<p class="hint">
                    Importing <strong>${this.file.name}</strong> as
                    ${this.resolvedKind.toUpperCase()}.
                  </p>`:re}

              <label>
                Import mode
                <div class="row mode-row">
                  <label class="check">
                    <input
                      type="radio"
                      name="import-mode"
                      .checked=${this.mode==="copy"}
                      @change=${()=>this.mode="copy"}
                    />
                    Copy — a local, editable, synced snapshot you can refresh
                  </label>
                  <label class="check">
                    <input
                      type="radio"
                      name="import-mode"
                      ?disabled=${!!this.file}
                      .checked=${this.mode==="reference"}
                      @change=${()=>this.mode="reference"}
                    />
                    Reference — live, read-only; rows never stored or synced
                  </label>
                </div>
              </label>
              ${this.file?$`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:re}
              ${this.renderTarget()}

              <label class="check">
                <input
                  type="checkbox"
                  ?disabled=${this.mode==="reference"}
                  .checked=${this.editColumns}
                  @change=${e=>this.editColumns=e.target.checked}
                />
                Edit columns before import (rename / hide / fix duplicate names)
              </label>
              ${this.mode==="reference"?$`<p class="hint">
                    A Reference keeps the source's own schema, so there is nothing to edit.
                  </p>`:re}

              <label>
                Limit rows (optional)
                <input
                  type="number"
                  min="1"
                  step="1"
                  placeholder="import all rows"
                  .value=${this.maxRowsInput}
                  @input=${e=>this.maxRowsInput=e.target.value}
                />
              </label>
            </fieldset>

            ${this.renderPluginBlock()}

            <p class="hint">
              Paste any URL or pick a sample above — a JSON dump, a <code>.csv</code> or
              <code>.tsv</code> file, or a Datasette table/database/instance. For a Datasette
              instance root, click <em>List databases</em> to pick one first. Multi-table sources
              let you choose which tables to import; Datasette tables are capped at 10,000 rows
              each.
            </p>
          </div>
        </form>
      </dialog>
      ${re}
    `}};_e.instance=null;_e.styles=[gt,$e`
      dialog {
        min-width: 420px;
        max-width: 560px;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        font-size: 0.85rem;
        color: #374151;
      }
      label.check {
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;
      }
      label.check input {
        width: auto;
      }
      input[type='text'],
      input[type='number'],
      input[type='file'],
      select {
        font: inherit;
        padding: 0.45rem 0.55rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
        background: white;
      }
      input:disabled {
        background: #f3f4f6;
        color: #9ca3af;
      }
      .row {
        display: flex;
        gap: 0.75rem;
      }
      .row > * {
        flex: 1;
      }
      .mode-row {
        flex-direction: column;
        gap: 0.35rem;
      }
      .hint {
        color: #6b7280;
        font-size: 0.78rem;
        margin: 0;
      }
      .hint.error {
        color: #b91c1c;
      }
      /*
       * The dialog is two blocks: the options EVERY importer has (source,
       * mode, edit-columns, row limit), then the options only the chosen
       * importer has. Keeping them visually separate is the whole point —
       * see .claude/plans/2026-07-28-importer-architecture.md.
       */
      fieldset.block {
        border: 1px solid #e5e7eb;
        border-radius: 0.35rem;
        padding: 0.85rem 0.9rem 0.9rem;
        margin: 0;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
      }
      fieldset.block > legend {
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #6b7280;
        padding: 0 0.35rem;
      }
      .db-row {
        align-items: stretch;
      }
      .db-row select {
        flex: 1;
      }
      .db-row .db-load {
        flex: 0 0 auto;
        white-space: nowrap;
      }
    `];Fe([N()],_e.prototype,"url",2);Fe([N()],_e.prototype,"kind",2);Fe([N()],_e.prototype,"presetIdx",2);Fe([N()],_e.prototype,"dbList",2);Fe([N()],_e.prototype,"dbLoading",2);Fe([N()],_e.prototype,"dbError",2);Fe([N()],_e.prototype,"selectedDb",2);Fe([N()],_e.prototype,"editColumns",2);Fe([N()],_e.prototype,"file",2);Fe([N()],_e.prototype,"maxRowsInput",2);Fe([N()],_e.prototype,"mode",2);Fe([N()],_e.prototype,"targetKind",2);Fe([N()],_e.prototype,"targetTableId",2);Fe([N()],_e.prototype,"tables",2);Fe([N()],_e.prototype,"formats",2);Fe([N()],_e.prototype,"acceptAttr",2);_e=Fe([Se("import-dialog")],_e);const nw=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return _e},init:qb,meta:Hb},Symbol.toStringTag,{value:"Module"})),rw={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},iw=6e4;let Bl=null,ro=!1;const Us=new Map;function sw(e){Bl===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Bl=setInterval(()=>{ju(e)},iw)))}async function ju(e){if(ro)return;const t=e.workspaceId();if(!t)return;const n=await pu(e);if(n)try{await ow(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function ow(e,t,n){const r=await ji(e),i=await fu(e,n),s=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(s.status===404){await Hl(e,t,n,r,null);return}if(!s.ok)return;const a=Ni(s.headers.get("ETag")),c=await s.text();if(Cl(r)===Cl(c)){a&&a!==i&&await fn(e,n,a);return}if(a&&a===i){await Hl(e,t,n,r,i);return}if(!(a&&Us.get(n)===a)){ro=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const f=JSON.parse(c),g=await mu(e,n,f);a&&await fn(e,n,a),Us.delete(n),e.ui.dialogs.toast(`Pulled ${g} table${g===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else a&&Us.set(n,a)}finally{ro=!1}}}async function Hl(e,t,n,r,i){const s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);const a=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:s,body:r});if(a.ok){const c=Ni(a.headers.get("ETag"));c&&await fn(e,n,c);return}if(a.status===412){const c=await a.json().catch(()=>({}));c.currentEtag&&await fn(e,n,c.currentEtag)}}const Nu=Object.freeze(Object.defineProperty({__proto__:null,load:sw,meta:rw,tick:ju},Symbol.toStringTag,{value:"Module"}));var aw=Object.defineProperty,lw=Object.getOwnPropertyDescriptor,jn=(e,t,n,r)=>{for(var i=r>1?void 0:r?lw(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&aw(t,n,i),i};function io(e,t){(ot.instance??cw()).open(e,t)}function cw(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Fs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let ot=class extends xe{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),ot.instance===this&&(ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ae(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){await(await ae()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const n=await(await ae()).store.viewTemplates.findOne(e.templateId),r=n?vl(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await ae()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await ae(),n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={...e,id:Fs(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await ae();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ae(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(i=>i.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Fs(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=vl(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(b=>b.field.toLowerCase()===t||(b.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const b=Number(r[1])-1;return this.columns.filter(k=>k.type==="boolean")[b]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(b=>b.type==="boolean");const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(b=>b.type==="date"||b.type==="datetime");const c=["url","link","href","website","homepage","uri","site","web"];if(c.includes(t)){const b=this.firstColumn(y=>y.renderer==="link");return b||this.firstColumn(y=>{const k=y.field.toLowerCase(),C=(y.label??"").toLowerCase();return c.some(_=>k.includes(_)||C.includes(_))})}const d=b=>y=>{const k=y.field.toLowerCase(),C=(y.label??"").toLowerCase();return b.some(_=>k.includes(_)||C.includes(_))},f=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(f.includes(t)){const b=this.firstColumn(k=>k.renderer==="image");if(b)return b;const y=this.firstColumn(d(f));return y||this.firstColumn(d(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(d(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(d(["phone","tel","mobile","cell"]));const g=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(g.includes(t)){const b=this.firstColumn(_=>{if(_.type!=="string")return!1;const D=_.field.toLowerCase(),M=(_.label??"").toLowerCase();return g.some(U=>D.includes(U)||M.includes(U))});if(b)return b;const y=this.columns.filter(_=>_.type==="string"),k=y[0];if(!k)return"";let C=k;for(const _ of y)(_.max??0)>(C.max??0)&&(C=_);return C.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ae();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={id:Fs(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return $`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>$`<li>
                <span class="name">${e.name}</span>
                <button type="button" class="mini" @click=${()=>this.openInstance(e.id)}>
                  Open
                </button>
                <button type="button" class="mini" @click=${()=>void this.editInstance(e)}>
                  Edit
                </button>
                <button
                  type="button"
                  class="mini"
                  title="Duplicate this view, picking up columns added to the table since"
                  @click=${()=>void this.copyInstance(e)}
                >
                  Copy
                </button>
                <button
                  type="button"
                  class="mini danger"
                  @click=${()=>void this.deleteInstance(e.id)}
                >
                  Delete
                </button>
              </li>`)}
        </ul>
      </div>
      <div class="section">
        <h3>View templates (workspace)</h3>
        <ul class="list">
          ${this.templates.map(e=>$`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?$`<span class="badge">built-in</span>`:re}
                <button type="button" class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button type="button" class="mini" @click=${()=>this.editTemplate(e)}>
                  Edit
                </button>
                <button type="button" class="mini" @click=${()=>this.copyTemplate(e)}>
                  Copy
                </button>
                <button
                  type="button"
                  class="mini danger"
                  title=${e.builtin?"Delete this built-in template (it will not be seeded again)":"Delete this template"}
                  @click=${()=>void this.deleteTemplate(e)}
                >
                  Delete
                </button>
              </li>`)}
        </ul>
        <div>
          <button type="button" class="mini" @click=${()=>this.newTemplate()}>
            + New template
          </button>
        </div>
        <p class="hint">
          A template's row HTML uses <code>$TOKEN</code> placeholders (e.g. <code>$TITLE</code>).
          Leave row HTML blank to show a read-only columns table with the header/footer HTML around
          it.
        </p>
      </div>
    `}renderTemplate(){const e=this.tDraft,t=n=>r=>{this.tDraft={...e,[n]:r.target.value}};return $`
      <label class="field">
        Name
        <input type="text" .value=${e.name} @input=${t("name")} placeholder="e.g. Cards" />
      </label>
      <label class="field">
        Header HTML
        <textarea .value=${e.headerHtml} @input=${t("headerHtml")}></textarea>
      </label>
      <label class="field">
        Row HTML <span class="hint">(blank ⇒ read-only table)</span>
        <textarea
          .value=${e.rowHtml}
          @input=${t("rowHtml")}
          placeholder="&lt;div&gt;$TITLE&lt;/div&gt;"
        ></textarea>
      </label>
      <label class="field">
        Footer HTML
        <textarea .value=${e.footerHtml} @input=${t("footerHtml")}></textarea>
      </label>
    `}renderInstance(){const e=this.iDraft;return $`
      <label class="field">
        View name
        <input
          type="text"
          .value=${e.name}
          @input=${t=>this.iDraft={...e,name:t.target.value}}
        />
      </label>
      <label class="field">
        Show at most (rows, 0 = all)
        <input
          type="number"
          min="0"
          .value=${String(e.limit)}
          @input=${t=>this.iDraft={...e,limit:Math.max(0,Number(t.target.value)||0)}}
        />
      </label>
      <label class="field-inline">
        <input
          type="checkbox"
          .checked=${e.readonly}
          @change=${t=>this.iDraft={...e,readonly:t.target.checked}}
        />
        Readonly (show values without editors in the table view)
      </label>
      <div class="section">
        <h3>Map placeholders to columns</h3>
        ${e.tokens.length===0?$`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>$`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${n=>this.iDraft={...e,mapping:{...e.mapping,[t]:n.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(n=>$`<option value=${n.field} ?selected=${e.mapping[t]===n.field}>
                          ${n.label||n.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?$`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:$`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?$`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?$`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:$`<button type="submit" class="ghost">Close</button>`;return $`
      <dialog @cancel=${this.close} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${e}</h2>
            <div class="header-actions">${t}</div>
          </div>
          <div class="dialog-body">
            ${this.mode==="template"?this.renderTemplate():this.mode==="instance"?this.renderInstance():this.renderList()}
          </div>
        </form>
      </dialog>
    `}};ot.instance=null;ot.styles=[gt,$e`
      dialog {
        min-width: 520px;
        max-width: 680px;
      }
      h3 {
        margin: 0 0 0.4rem;
        font-size: 0.9rem;
        color: #374151;
      }
      .section {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
      ul.list {
        list-style: none;
        margin: 0;
        padding: 0;
        border: 1px solid #e5e7eb;
        border-radius: 0.35rem;
        max-height: 30vh;
        overflow: auto;
      }
      ul.list:empty::after {
        content: 'None yet.';
        display: block;
        padding: 0.5rem 0.7rem;
        color: #9ca3af;
        font-size: 0.85rem;
      }
      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.4rem 0.6rem;
        border-bottom: 1px solid #f1f5f9;
      }
      li:last-child {
        border-bottom: 0;
      }
      li .name {
        flex: 1;
        font-weight: 500;
        color: #111827;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .badge {
        font-size: 0.7rem;
        color: #6b7280;
        border: 1px solid #d1d5db;
        border-radius: 0.6rem;
        padding: 0 0.4rem;
      }
      button.mini {
        font: inherit;
        font-size: 0.8rem;
        padding: 0.15rem 0.5rem;
        border: 1px solid #d1d5db;
        background: white;
        border-radius: 0.25rem;
        cursor: pointer;
      }
      button.mini:hover {
        background: #f3f4f6;
      }
      button.mini.danger {
        color: #b91c1c;
        border-color: #fecaca;
      }
      label.field {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.82rem;
        color: #374151;
      }
      label.field-inline {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.82rem;
        color: #374151;
      }
      input[type='text'],
      textarea,
      select {
        font: inherit;
        padding: 0.4rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
      }
      textarea {
        font-family: ui-monospace, SFMono-Regular, monospace;
        font-size: 0.8rem;
        min-height: 4.5rem;
        resize: vertical;
      }
      .hint {
        color: #6b7280;
        font-size: 0.78rem;
        margin: 0;
      }
      .map-row {
        display: grid;
        grid-template-columns: 8rem 1fr;
        align-items: center;
        gap: 0.5rem;
      }
      .map-row code {
        font-family: ui-monospace, SFMono-Regular, monospace;
        color: #2563eb;
      }
    `];jn([N()],ot.prototype,"mode",2);jn([N()],ot.prototype,"instances",2);jn([N()],ot.prototype,"templates",2);jn([N()],ot.prototype,"tDraft",2);jn([N()],ot.prototype,"iDraft",2);ot=jn([Se("views-dialog")],ot);const uw={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},dw="grid_view",hw={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},pw={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},fw={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},mw={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},gw=[hw,pw,fw,mw];function bw(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:dw,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>io(n)})}async function ww(e){await vw(e)}function yw(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function vw(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of gw)await xw(e,t,r,n)}async function xw(e,t,n,r){const i=`views:seeded:${n.slug}:${t}`,s=`views:sig:${n.slug}:${t}`,a=yw(n),c=r.find(f=>f.builtin&&f.name===n.name);if(c){(await e.store.settings.findOne(s))?.value!==a&&(await e.store.viewTemplates.patch(c.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:a})),await e.store.settings.upsert({name:i,value:!0});return}(await e.store.settings.findOne(i))?.value||(await e.store.viewTemplates.insert({id:$w(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:!0}),await e.store.settings.upsert({name:s,value:a}))}function $w(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const kw=Object.freeze(Object.defineProperty({__proto__:null,init:bw,load:ww,meta:uw},Symbol.toStringTag,{value:"Module"})),_w={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function Cw(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const i=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!i)return!1;const s=await i.text(),a=Object.keys(hr(s)).length;return Ii().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${a} secret${a===1?"":"s"} from "${i.name}"?`,"Import secrets")||(fc(s),n.ui.dialogs.toast(`Imported ${a} secret${a===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const Sw=Object.freeze(Object.defineProperty({__proto__:null,init:Cw,meta:_w},Symbol.toStringTag,{value:"Module"})),Ew=[Sw,Xm,np,Tp,Lp,jf,Zf,om,ap,Tm,hm,Fm,Gm,tg,og,ug,fg,wg,db,mb,$b,Ib,Ob,nw,Nu,kw];function Tw(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const Uu=Ew.map(e=>{const t=Tw(e);return{id:t.id,meta:t,module:e}}),Iw=Uu;function so(e){return`builtin:${e}`}async function Aw(e){const t=[];for(const n of Uu)if(!await Rw(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function Rw(e,t){return t.meta.fixed?!1:pt==="all-optional"?!0:(await e.store.plugins.findOne(so(t.id)))?.enabled===!1}var Ow=Object.defineProperty,Dw=Object.getOwnPropertyDescriptor,yt=(e,t,n,r)=>{for(var i=r>1?void 0:r?Dw(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Ow(t,n,i),i};let Qe=class extends xe{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),i=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const s=this.allRows.find(d=>d.id===n);if(!s)return;let a;if(i==="boolean")a=t.checked;else if(i==="number"){const d=Number(t.value);a=t.value.trim()===""?null:Number.isNaN(d)?t.value:d}else a=t.value;await(await ae()).store.rows(this.instance.tableId).patch(n,{data:{...s.data,[r]:a},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");if(!n||r==null)return;const i=ym(this.instance.pillFilters?.[n],r),s={...this.instance.pillFilters??{},[n]:i};await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:s,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:s},this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ae(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>r.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const a=s.find(c=>c.id===this.viewInstanceId);if(a){if(a.tableId!==this.instance?.tableId){this.instance=a,this.reload();return}this.instance=a,this.recompute()}});const i=e.store.rows(t.tableId);this.rowsUnsub=i.subscribe(s=>{this.allRows=s,this.recompute()}),this.allRows=await i.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;const e=wm(this.allRows,this.tableColumns),t=au(e,this.instance);let n=t;const r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(n=wi(n,r,this.tableColumns)),i&&(n=wi(n,i,this.tableColumns));const s=this.instance.limit??0;s>0&&n.length>s&&(n=n.slice(0,s)),this.rows=n,this.templateOn&&zc(this.viewInstanceId,n.length,t.length)}async removePill(e,t){if(!this.instance)return;const n=vm(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await ae()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await ae()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ae()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||io(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&io(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await ae();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(s=>s!==e):[...t,e];if(r.length===0)return;await(await ae()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?$`<div class="vw-empty">No rows.</div>`:$`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>$`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>$`<tr>
                ${this.columns.map(t=>{const n=e.data[t.field],r=n==null?"":String(n);return $`<td title=${r}>${r}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return $`<div class="vw-empty">This view's template is missing.</div>`;if($m(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(a=>[a.field,a])),r=this.instance?.readonly===!0,i=this.rows.map(a=>gm(e.rowHtml,a,t,{columns:n,readonly:r})).join(""),s=(e.headerHtml??"")+i+(e.footerHtml??"");return $`<div class="vw-root">${En(s)}</div>`}return $`<div class="vw-root">
      ${e.headerHtml?.trim()?$`<div class="vw-html">${En(e.headerHtml)}</div>`:re}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?$`<div class="vw-html">${En(e.footerHtml)}</div>`:re}
    </div>`}renderSortBar(){if(!this.instance)return re;const e=this.tableColumns.filter(r=>r.sortable!==!1),t=this.instance.sortColumn??"",n=this.instance.sortAsc??!0;return $`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select
        aria-label="Sort by"
        @change=${r=>void this.setSortColumn(r.target.value)}
      >
        <option value="" ?selected=${!t}>— unsorted —</option>
        ${e.map(r=>$`<option value=${r.field} ?selected=${t===r.field}>${r.label||r.field}</option>`)}
      </select>
      <button
        aria-label="Toggle sort direction"
        title=${n?"Ascending (click for descending)":"Descending (click for ascending)"}
        ?disabled=${!t}
        @click=${()=>void this.toggleSortDir()}
      >
        <span class="mi">${n?"arrow_upward":"arrow_downward"}</span>
      </button>
    </div>`}renderPillBar(){const e=this.instance?.pillFilters;if(!e)return re;const t=[];for(const[n,r]of Object.entries(e))if(r)for(const i of vr(r))i.term&&t.push({field:n,value:i.term});return t.length===0?re:$`<div class="vw-pillbar">
      ${t.map(n=>$`<span class="eda-pill-chip">
          <span class="eda-pill-chip-label">${n.field}: ${n.value}</span>
          <button
            type="button"
            class="eda-pill-chip-remove"
            aria-label=${`Remove filter ${n.field}: ${n.value}`}
            title="Remove this filter"
            @click=${()=>void this.removePill(n.field,n.value)}
          >
            ×
          </button>
        </span>`)}
    </div>`}renderFooter(){if(!this.instance)return re;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return $`<div class="vw-footer">
      ${!e&&this.showColsMenu?$`<div class="cols-menu">
            ${this.tableColumns.map(n=>$`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(n.field)}
                    @change=${()=>void this.toggleColumn(n.field)}
                  />${n.label||n.field}</label
                >`)}
          </div>`:re}
      ${e?re:$`<button
            title="Show / hide columns"
            aria-label="Columns"
            @click=${()=>this.showColsMenu=!this.showColsMenu}
          >
            <span class="mi">view_column</span>
          </button>`}
      <button
        aria-label="Edit view"
        title="Edit this view (rename, re-map columns)"
        @click=${()=>this.editView()}
      >
        <span class="mi">edit</span>
      </button>
      ${this.template?$`<button
            class="edit-template"
            aria-label="Edit template"
            title=${`Edit the "${this.template.name}" template`}
            @click=${()=>this.editTemplate()}
          >
            <span class="mi">code</span>
          </button>`:re}
      <button
        class=${e?"":"active"}
        title=${e?"Show as a table (turn the template off)":"Show through the template"}
        aria-label="Toggle template"
        aria-pressed=${e?"false":"true"}
        @click=${()=>void this.toggleTemplate()}
      >
        <span class="mi">table_view</span>
      </button>
      <button
        class="danger"
        aria-label="Delete view"
        title="Delete this view (the table stays)"
        @click=${()=>void this.deleteView()}
      >
        <span class="mi">delete</span>
      </button>
    </div>`}render(){if(!this.loaded)return $`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return $`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?$`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>
          ${this.renderTemplated()}
        </div>`:$`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return $`${e?this.renderSortBar():re}${this.renderPillBar()}${t}${this.renderFooter()}`}};Qe.styles=[ut,$e`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: #f8fafc;
        font-family: system-ui, sans-serif;
      }
      .vw-body {
        flex: 1;
        min-height: 0;
      }
      .vw-body.scroll {
        overflow: auto;
      }
      /* Grid mode: let the data-table fill the body and scroll internally. */
      .vw-body.grid {
        display: flex;
      }
      .vw-body.grid data-table {
        flex: 1;
        min-height: 0;
        max-height: none;
      }
      .vw-root {
        min-height: 100%;
      }
      .vw-loading,
      .vw-empty {
        padding: 1rem;
        color: #6b7280;
        font-size: 0.9rem;
      }
      /* Fallback read-only table (used when a template has no row HTML). */
      table.vw-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.85rem;
      }
      table.vw-table th,
      table.vw-table td {
        border: 1px solid #e5e7eb;
        padding: 0.25rem 0.5rem;
        text-align: left;
        vertical-align: top;
        white-space: nowrap;
        /* Clip a long value to the column instead of stretching the table past
           the window; the cell's title attribute carries the whole thing.
           Matches the grid (data-table). */
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 40ch;
      }
      table.vw-table th {
        background: #f9fafb;
        position: sticky;
        top: 0;
      }
      .vw-html {
        padding: 0.5rem 0.75rem;
      }
      /* Editable $input.TOKEN controls injected into a template's row HTML. */
      .eda-input-field {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        cursor: pointer;
        font-size: 0.82rem;
        color: #374151;
      }
      .eda-input-field input[disabled] {
        cursor: not-allowed;
      }
      .eda-input-field .eda-input-label:empty {
        display: none;
      }
      /* $filter.TOKEN pill rendered inline in a template's row HTML — looks
         clickable, sits in the flow of the text around it. */
      .eda-filter-pill {
        font: inherit;
        display: inline;
        padding: 0.05rem 0.5rem;
        margin: 0 0.1rem;
        border: none;
        border-radius: 1rem;
        background: #e0f2fe;
        color: #0369a1;
        cursor: pointer;
      }
      .eda-filter-pill:hover {
        background: #bae6fd;
      }
      /* Active pill-filter bar, pinned to the top of the view. */
      .vw-pillbar {
        flex: 0 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.35rem;
        padding: 0.3rem 0.5rem;
        border-bottom: 1px solid #e5e7eb;
        background: #f0f9ff;
      }
      .eda-pill-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.1rem 0.3rem 0.1rem 0.55rem;
        border-radius: 1rem;
        background: #e0f2fe;
        color: #0369a1;
        font-size: 0.8rem;
      }
      .eda-pill-chip-remove {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.1rem;
        height: 1.1rem;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: transparent;
        color: inherit;
        cursor: pointer;
        line-height: 1;
      }
      .eda-pill-chip-remove:hover {
        background: rgba(3, 105, 161, 0.15);
      }
      /* Sort toolbar pinned to the top of a template view. */
      .vw-sortbar {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.3rem 0.5rem;
        border-bottom: 1px solid #e5e7eb;
        background: #ffffff;
        font-size: 0.82rem;
        color: #6b7280;
      }
      .vw-sortbar select {
        font: inherit;
        padding: 0.15rem 0.3rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        background: white;
        color: #374151;
      }
      .vw-sortbar button {
        display: inline-flex;
        align-items: center;
        padding: 0.15rem 0.3rem;
        border: 1px solid #d1d5db;
        background: white;
        border-radius: 0.25rem;
        cursor: pointer;
        color: #374151;
      }
      .vw-sortbar button:hover {
        background: #f3f4f6;
      }
      .vw-sortbar button[disabled] {
        opacity: 0.5;
        cursor: default;
      }
      .vw-sortbar .mi {
        font-size: 1.05rem;
      }
      /* Footer toolbar: the template on/off toggle sits at the bottom-right. */
      .vw-footer {
        flex: 0 0 auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.35rem;
        padding: 0.25rem 0.4rem;
        border-top: 1px solid #e5e7eb;
        background: #ffffff;
      }
      .vw-footer button {
        font: inherit;
        display: inline-flex;
        align-items: center;
        padding: 0.2rem 0.4rem;
        border: 1px solid #d1d5db;
        background: white;
        border-radius: 0.25rem;
        cursor: pointer;
        color: #374151;
      }
      .vw-footer button:hover {
        background: #f3f4f6;
      }
      /* Same dark red as the delete-table trash icon (panel-footer). */
      .vw-footer button.danger {
        color: #b91c1c;
      }
      /* Active = template is OFF (showing the raw table). */
      .vw-footer button.active {
        background: #0891b2;
        border-color: #0891b2;
        color: white;
      }
      .vw-footer .mi {
        font-size: 1.05rem;
      }
      .cols-menu {
        position: absolute;
        right: 0.4rem;
        bottom: 100%;
        margin-bottom: 0.25rem;
        max-height: 40vh;
        overflow: auto;
        background: white;
        border: 1px solid #d1d5db;
        border-radius: 0.35rem;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        padding: 0.3rem;
        z-index: 5;
        min-width: 10rem;
      }
      .cols-menu label {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.2rem 0.3rem;
        font-size: 0.82rem;
        color: #374151;
        white-space: nowrap;
        cursor: pointer;
      }
      .cols-menu label:hover {
        background: #f3f4f6;
        border-radius: 0.2rem;
      }
    `];yt([ct({type:String})],Qe.prototype,"viewInstanceId",2);yt([N()],Qe.prototype,"loaded",2);yt([N()],Qe.prototype,"error",2);yt([N()],Qe.prototype,"instance",2);yt([N()],Qe.prototype,"template",2);yt([N()],Qe.prototype,"columns",2);yt([N()],Qe.prototype,"tableColumns",2);yt([N()],Qe.prototype,"rows",2);yt([N()],Qe.prototype,"showColsMenu",2);yt([N()],Qe.prototype,"searchQuery",2);yt([N()],Qe.prototype,"globalQuery",2);Qe=yt([Se("view-window")],Qe);const nt=new Map;async function Pw(){await Promise.all([...nt.keys()].map(e=>di(e)))}function Lw(e){const t=nt.get(e);if(!t)return!1;const n=t.panel;return n.status==="minimized"&&n.normalize(),n.front(),!0}let ql=!1;function oo(e){e.panel.setHeaderTitle(e.name+jc(e.count,e.total))}function Mw(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function zw(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Fu(e){return`view-panel-${zw(e)}`}async function jw(){if(ql)return;ql=!0;const e=await ae(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open),n=t(await e.store.viewInstances.find()).sort($i);for(const r of n)Kl(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(a=>[a.id,a]));for(const a of[...nt.keys()])i.has(a)||Uw(a);const s=[...i.values()].filter(a=>!nt.has(a.id)).sort($i);for(const a of s)Kl(a,e)}),e.store.tables.subscribe(r=>void Nw(e,r)),document.addEventListener(yi,r=>{const i=r.detail,s=nt.get(i.key);s&&s.el&&(s.count=i.count,s.total=i.total,oo(s))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const s=nt.get(i);s&&(async()=>{const a=await e.store.viewInstances.findOne(i);a&&(s.name=a.name,oo(s)),s.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of nt.values())r?.reload()})}async function Nw(e,t){const n=t.filter(a=>a.workspaceId===e.workspaceId),r=new Set(n.map(a=>a.id)),i=new Map;for(const a of n)i.has(a.name)||i.set(a.name,a);const s=await e.store.viewInstances.find();for(const a of s){if(a.workspaceId!==e.workspaceId||r.has(a.tableId)||!a.tableName)continue;const c=i.get(a.tableName);c&&await e.store.viewInstances.patch(a.id,{tableId:c.id,updatedAt:Date.now()})}}function Kl(e,t){if(nt.has(e.id))return;const n=Fu(e.id),r=e.windowGeometry,i=r?.minimized===!0,s=()=>{const k=document.createElement("view-window");return k.viewInstanceId=e.id,k.style.height="100%",k},a=i?document.createElement("div"):s();let c;const d=()=>{c&&(c.el?.remove(),c.el=null,c.count=-1,c.total=-1,oo(c))},f=()=>{if(!c||c.el)return;const k=document.getElementById(n)?.querySelector(".jsPanel-content");if(!k)return;k.replaceChildren();const C=s();k.appendChild(C),c.el=C},g=ki({id:n,container:Mw(),title:e.name,logo:Tg,color:"#0891b2",content:a,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:480,h:520},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:gr(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0},onmoved:()=>void di(e.id),onresized:()=>void di(e.id),onfronted:()=>void Fw(e.id,t),onstatuschange:k=>{k.status==="minimized"?d():(k.status==="normalized"||k.status==="maximized")&&f(),di(e.id)},onclosed:()=>{nt.delete(e.id),Vi(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});c={panel:g,el:i?null:a,name:e.name,count:-1,total:-1},nt.set(e.id,c),xu(e.id,()=>g.front(void 0,!1));const b=document.getElementById(n),y=document.createElement("panel-search");y.tableId=e.id,b?.querySelector(".jsPanel-controlbar")?.prepend(y)}function Uw(e){const t=nt.get(e);if(t){nt.delete(e),Vi(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function Fw(e,t){return qi(`view:${e}`,()=>Bw(e,t))}async function Bw(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:480,h:520,z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:vu()},updatedAt:Date.now()})}catch{}}function di(e){return qi(`view:${e}`,()=>Hw(e))}async function Hw(e){const t=document.getElementById(Fu(e)),n=nt.get(e);if(!t||!n)return;const{minimized:r,maximized:i}=n.panel.persistFlags();try{const s=await ae(),a=(await s.store.viewInstances.findOne(e))?.windowGeometry;let c=t.offsetLeft,d=t.offsetTop,f=t.offsetWidth,g=t.offsetHeight;(r||i)&&a&&(c=a.x,d=a.y,f=a.w,g=a.h),c<=-9e3&&(c=a?.x??40);const b={x:c,y:d,w:f,h:g,z:a?.z??0,minimized:r,maximized:i};await s.store.viewInstances.patch(e,{windowGeometry:b,updatedAt:Date.now()})}catch{}}function Bu(e){return e.filter(t=>t.status!=="minimized")}function qw(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),i=Math.ceil(e/r),s=(t.w-n*(r+1))/r,a=(t.h-n*(i+1))/i;return Array.from({length:e},(c,d)=>{const f=d%r,g=Math.floor(d/r);return{x:t.x+n+f*(s+n),y:t.y+n+g*(a+n),w:s,h:a}})}function Nn(){return Eg()}function Kw(){for(const e of Nn())e.close?.()}function Vw(){for(const e of Nn())e.minimize?.()}function Gw(){for(const e of Nn())e.normalize?.()}function Ww(){for(const e of Nn())e.maximize?.()}function Hu(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=_i()?.snapshot(),i=r?.scale&&r.scale>0?r.scale:1,s=r?.x??0,a=r?.y??0;return{x:-s/i,y:-a/i,w:t/i,h:n/i}}function qu(e,t,n,r,i){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(i)}px`}function Yw(){const e=Bu(Nn()).reverse();if(e.length===0)return;const t=Hu(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),i=Math.min(480,Math.max(240,t.h*.6));e.forEach((s,a)=>{s.normalize?.(),qu(s,t.x+24+a*n,t.y+24+a*n,r,i)}),Ku()}function Ku(){_u(),Pw()}function Xw(){const e=Bu(Nn()).reverse();if(e.length===0)return;const n=qw(e.length,Hu(),8);e.forEach((r,i)=>{r.normalize?.();const s=n[i];s&&qu(r,s.x,s.y,s.w,s.h)}),Ku()}function Qw(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:Vw},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:Gw},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:Ww},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:Yw},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:Xw},{id:"windows:close-all",title:"Close all windows",icon:"close",run:Kw}];for(const i of t)e.ui.registerCommand({id:i.id,title:i.title,group:"Windows",icon:i.icon,run:i.run});const n="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",r="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:i=>i.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(n,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(r,"_blank","noopener")}})}async function Jw(e){if(pt==="url-plugins"||pt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],i=[];for(const s of r)try{const a=await e.store.plugins.findOne(s);if(a&&a.enabled===!1)continue;let c=a?.cachedBody??"";if(c)Zw(e,s,c);else{try{c=await Vu(s)}catch(g){await e.store.plugins.upsert({url:s,enabled:a?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${g.message}`}),e.events.emit("plugin:error",{url:s,phase:"fetch",error:g});continue}await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const d=new Blob([c],{type:"text/javascript"}),f=URL.createObjectURL(d);try{const g=await import(f);await g.init?.(e),i.push({url:s,mod:g})}finally{setTimeout(()=>URL.revokeObjectURL(f),5e3)}}catch(a){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`init: ${a.message}`}),e.events.emit("plugin:error",{url:s,phase:"init",error:a})}return async()=>{for(const{url:s,mod:a}of i)try{await a.load?.(e)}catch(c){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:s,phase:"load",error:c})}}}async function Vu(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function Zw(e,t,n){return(async()=>{try{const r=await Vu(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let Bs=null;function ae(){return Bs||(Bs=ey()),Bs}async function ey(){const e=await uc();let t="";const n=gh(e,()=>t),r=wh(),i=Ch(),s=new Map;n.tables.subscribe(D=>{s.clear();for(const M of D)s.set(M.id,M)});const a={...n.tables,insert:D=>(s.set(D.id,D),n.tables.insert(D)),upsert:D=>(s.set(D.id,D),n.tables.upsert(D))};let c=null;const d={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:n.settings,workspaceId:()=>y},f=bh({base:{...n,tables:a},providers:i.rowSources,tableById:D=>s.get(D),ctx:d}),g=ty(),b=await f.workspaces.find();let y;if(g){const D=Wu(g),M=b.find(U=>U.id===D||U.name===g);M?y=M.id:y=(await f.workspaces.insert({id:D,name:g,createdAt:Date.now(),pluginUrls:[]})).id}else{const D=ny(),M=D?b.find(U=>U.id===D):void 0;M?y=M.id:b.length>0?y=b[0].id:y=(await f.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}t=y,ry(y);const k=Ah({store:f,events:r,registries:i,workspaceId:()=>y});c=k,Qw(k),r.on("import:after",({source:D,tableId:M,rowCount:U})=>{D!=="datasette"&&k.store.tables.findOne(M).then(H=>{k.ui.dialogs.toast(`Imported ${U} row${U===1?"":"s"} into "${H?.name??M}".`,{kind:"success",title:D.toUpperCase()+" import"})})}),r.on("plugin:error",({url:D,phase:M,error:U})=>{k.ui.dialogs.toast(`[${M}] ${U?.message??String(U)}`,{kind:"error",title:`Plugin: ${D}`})});const C=await Aw(k),_=await Jw(k);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:y}),await C(),await _(),pt==="all-optional"?k.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):pt==="url-plugins"&&k.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),pt!=="off"&&k.ui.openPluginManager()}),globalThis.api=k,{store:f,events:r,workspaceId:y,registries:i,api:k}}function ty(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Gu="eda:lastWorkspaceId";function ny(){try{return globalThis.localStorage?.getItem(Gu)??null}catch{return null}}function ry(e){try{globalThis.localStorage?.setItem(Gu,e)}catch{}}function Wu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var iy=Object.defineProperty,sy=Object.getOwnPropertyDescriptor,Gi=(e,t,n,r)=>{for(var i=r>1?void 0:r?sy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&iy(t,n,i),i};let On=class extends xe{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=Pn(this.text)}catch(a){this.errorMsg=`Couldn't parse the CSV: ${a.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await ae(),i=crypto.randomUUID();await r.store.tables.insert({id:i,workspaceId:r.workspaceId,name:t,code:Ge(t),columns:n.columns,view:"table",updatedAt:Date.now()});const s=n.rows.map(a=>({id:crypto.randomUUID(),tableId:i,data:a,updatedAt:Date.now()}));await r.store.rows(i).bulkInsert(s),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return $`
      <dialog @cancel=${this.close} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>Paste CSV</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${this.close}>Cancel</button>
              <button type="submit" class="primary">Import</button>
            </div>
          </div>
          <div class="dialog-body">
            <p class="hint">
              First line is treated as the header. Separator is auto-detected
              (comma / semicolon / tab). Column types are inferred from data.
            </p>
            <label>
              Table name
              <input
                type="text"
                autofocus
                .value=${this.name}
                placeholder="pasted"
                @input=${e=>this.name=e.target.value}
              />
            </label>
            <label>
              CSV
              <textarea
                spellcheck="false"
                .value=${this.text}
                @input=${e=>this.text=e.target.value}
              ></textarea>
            </label>
            ${this.errorMsg?$`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};On.styles=[gt,$e`
      dialog {
        width: 640px;
        max-width: 90vw;
      }
      p.hint {
        margin: 0;
        color: #6b7280;
        font-size: 0.85rem;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        font-size: 0.85rem;
        color: #374151;
      }
      input[type='text'] {
        font: inherit;
        padding: 0.4rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
      }
      textarea {
        font: 0.85rem ui-monospace, SFMono-Regular, monospace;
        padding: 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        min-height: 240px;
        resize: vertical;
      }
      .error {
        color: #ef4444;
        font-size: 0.85rem;
      }
    `];Gi([N()],On.prototype,"name",2);Gi([N()],On.prototype,"text",2);Gi([N()],On.prototype,"errorMsg",2);On=Gi([Se("csv-paste-dialog")],On);const qo=new Set;let Vl=!1;function oy(){return qo.size>0}function ay(e){qo.add(e),cy()}function ly(e){qo.delete(e)}function Yu(e,t){const n=()=>{t.open&&ay(e)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>ly(e))}function cy(){Vl||(Vl=!0,window.addEventListener("beforeunload",e=>{oy()&&(e.preventDefault(),e.returnValue="")}))}var uy=Object.defineProperty,dy=Object.getOwnPropertyDescriptor,Ko=(e,t,n,r)=>{for(var i=r>1?void 0:r?dy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&uy(t,n,i),i};const hy=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let It=class extends xe{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),It.instance=this}disconnectedCallback(){super.disconnectedCallback(),It.instance===this&&(It.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:hy,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCancel}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>Edit script${this.columnLabel?` — ${this.columnLabel}`:""}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${this.onCancel}>Cancel</button>
              <button type="submit" class="primary">Save</button>
            </div>
          </div>
          <div class="dialog-body">
            <p class="hint">
              Define <code>function render(row) { … }</code>. <code>row</code> is the full row
              object. What you return is passed to the column's renderer, so the cell shows a
              computed value instead of the stored one — and the cell becomes read-only. A script
              that throws shows a small error chip in the cell.
            </p>
            <textarea
              spellcheck="false"
              autofocus
              .value=${this.text}
              @input=${e=>this.text=e.target.value}
            ></textarea>
          </div>
        </form>
      </dialog>
    `}};It.instance=null;It.styles=[gt,$e`
      dialog {
        width: 720px;
        max-width: 92vw;
      }
      p.hint {
        margin: 0;
        color: #6b7280;
        font-size: 0.85rem;
      }
      p.hint code {
        font-family: ui-monospace, SFMono-Regular, monospace;
        background: #f3f4f6;
        padding: 0.05rem 0.25rem;
        border-radius: 0.2rem;
      }
      textarea {
        font:
          0.85rem ui-monospace,
          SFMono-Regular,
          monospace;
        padding: 0.6rem 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        min-height: 320px;
        resize: vertical;
        tab-size: 2;
      }
    `];Ko([N()],It.prototype,"text",2);Ko([N()],It.prototype,"columnLabel",2);It=Ko([Se("script-editor-dialog")],It);function Gl(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}var py=Object.defineProperty,fy=Object.getOwnPropertyDescriptor,We=(e,t,n,r)=>{for(var i=r>1?void 0:r?fy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&py(t,n,i),i};const my=["string","number","boolean","date","datetime"];let Ne=class extends xe{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e),this.dialogEl&&Yu("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await ae();if(this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await ae(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.tableTitle=i.title??"",this.tableReadonly=!!i.readonly,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,sortable:a.sortable,filterable:a.filterable,origField:a.field,orig:a}));const s=await r.store.rows(e).find();this.previewRows=s.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[i]=r.splice(e,1);r.splice(n,0,i),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=i?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const i=[...this.columns],[s]=i.splice(n,1);let a=t+(n<t?-1:0);r==="after"&&(a+=1),i.splice(a,0,s),this.columns=i}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}async runColumnAction(e){this.errorMsg="";const t=await ae();try{const n=await e.run(t.api,{columns:this.columns.map(i=>Gl(i)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(i=>[i.field,i]));this.columns=this.columns.map(i=>{const s=r.get(i.field);return s?{...i,label:s.label??i.label,type:s.type??i.type,renderer:s.renderer,script:s.script}:i})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=It.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await ae(),r=(await n.store.tables.find()).filter(f=>f.workspaceId===n.workspaceId),i=t.toLowerCase(),s=r.find(f=>f.name.toLowerCase()===i&&f.id!==this.editTableId);if(s){this.errorMsg=`A table named "${s.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const a=new Set;for(const f of this.columns){const g=f.field.trim();if(!g){this.errorMsg="Column field names cannot be empty.";return}if(a.has(g)){this.errorMsg=`Duplicate column field: ${g}`;return}a.add(g)}const c=this.tableTitle.trim(),d=this.columns.map(Gl);if(this.mode==="edit"&&this.editTableId){const f=this.editTableId,g=await n.store.tables.findOne(f),b=new Map((g?.columns??[]).map(W=>[W.field,W])),y=d.filter(W=>{const q=b.get(W.field);return W.unique&&!q?.unique||W.notnull&&!q?.notnull||W.max&&W.max>0&&W.max!==q?.max});if(y.length>0){const W=await n.store.rows(f).find(),q=wy(y,W);if(q.length>0){this.errorMsg=`Cannot save: ${q.length} existing ${q.length===1?"row violates":"rows violate"} the new constraints.
${q.slice(0,5).join(`
`)}${q.length>5?`
…and ${q.length-5} more.`:""}`;return}}const k=new Set(this.columns.map(W=>W.origField).filter(W=>!!W)),C=new Set(d.map(W=>W.field)),_=(g?.columns??[]).map(W=>W.field).filter(W=>!k.has(W)),D=g?.deletedColumns??[],M=[...new Set([...D,..._])].filter(W=>!C.has(W)),U={name:t,title:c,columns:d,readonly:this.tableReadonly,updatedAt:Date.now()};(M.length>0||D.length>0)&&(U.deletedColumns=M);const H=g?.name;await n.store.tables.patch(f,U);const Q=_.filter(W=>!C.has(W)),ne=this.fieldRenames();if(Q.length>0||ne.length>0){const W=await n.store.rows(f).find();for(const q of W){let Y=!1,se={...q.data};const oe=Wa(se,ne);oe&&(se=oe,Y=!0);for(const B of Q)B in se&&(delete se[B],Y=!0);Y&&await n.store.rows(f).patch(q.id,{data:se,updatedAt:Date.now()})}}if(H!==void 0&&H!==t){const W=(await n.store.viewInstances.find()).filter(q=>q.tableId===f);for(const q of W)q.tableName!==t&&await n.store.viewInstances.patch(q.id,{tableName:t,updatedAt:Date.now()})}}else await n.store.tables.insert({id:Ee(),workspaceId:n.workspaceId,name:t,title:c,code:Ge(t),columns:d,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return $`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(i=>({...i,data:Wa(i.data,e)??i.data})):this.previewRows,n=new Map;for(const i of this.columns){if(!i.unique)continue;const s=new Set,a=new Set;for(const c of t){const d=c.data[i.field];d==null||d===""||(s.has(d)&&a.add(d),s.add(d))}n.set(i.field,a)}const r=this.columns.filter(i=>!i.hidden);return $`
      <div class="preview">
        <h3>
          Live preview — first ${this.previewRows.length}
          row${this.previewRows.length===1?"":"s"}
        </h3>
        <table>
          <thead>
            <tr>
              ${r.map(i=>$`<th title=${i.field}>${i.label||i.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(i=>$`
                <tr>
                  ${r.map(s=>{const a=i.data[s.field],c=by(s,a,n.get(s.field));return $`<td class=${c?"violation":""} title=${c??""}>
                      ${gy(a)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return $`
      <dialog @cancel=${this.close} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>
          <span class="mi sm">close</span>
        </button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${e}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${this.close}>Cancel</button>
              <button type="submit" class="primary">${t}</button>
            </div>
          </div>
          <div class="dialog-body">
            ${this.noticeMsg?$`<div class="notice">${this.noticeMsg}</div>`:""}
            <label>
              Name
              <input
                type="text"
                autofocus
                .value=${this.name}
                @input=${n=>this.name=n.target.value}
              />
            </label>
            <label>
              Title <span style="color:#9ca3af">(optional — shown in the window title)</span>
              <input
                type="text"
                .value=${this.tableTitle}
                @input=${n=>this.tableTitle=n.target.value}
              />
            </label>
            <label class="inline">
              <input
                type="checkbox"
                data-testid="table-readonly"
                .checked=${this.tableReadonly}
                @change=${n=>this.tableReadonly=n.target.checked}
              />
              Read-only
              <span style="color:#9ca3af">(show values, no editing or add/delete row)</span>
            </label>

            <div class="columns">
              <div class="col-header">
                <span></span>
                <span>Field</span>
                <span>Label</span>
                <span>Type</span>
                <span>Renderer</span>
                <span></span>
                <span class="flag-label">Max</span>
                <span class="flag-label" title="Unique">U</span>
                <span class="flag-label" title="Not null">!</span>
                <span class="flag-label" title="Visible">👁</span>
                <span class="flag-label" title="Sortable">⇅</span>
                <span class="flag-label" title="Filterable (includes search)">⚲</span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              ${this.columns.map((n,r)=>{const i=this.dragSrcIdx===r,s=this.dropTargetIdx===r,a=s&&this.dropEdge==="before"?" drop-before":s&&this.dropEdge==="after"?" drop-after":"";return $`
                  <div
                    class=${`col-row${i?" drag-source":""}${a}`}
                    @dragover=${c=>this.onRowDragOver(c,r,c.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(r)}
                    @drop=${c=>this.onRowDrop(c,r)}
                  >
                    <span
                      class="drag-handle"
                      title="Drag to reorder"
                      draggable="true"
                      @dragstart=${c=>this.onRowDragStart(c,r)}
                      @dragend=${()=>this.onRowDragEnd()}
                    >
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <input
                      type="text"
                      .value=${n.field}
                      @input=${c=>this.patchColumn(r,{field:c.target.value})}
                    />
                    <input
                      type="text"
                      .value=${n.label}
                      @input=${c=>this.patchColumn(r,{label:c.target.value})}
                    />
                    <select
                      .value=${n.type}
                      @change=${c=>this.patchColumn(r,{type:c.target.value})}
                    >
                      ${my.map(c=>$`<option value=${c} ?selected=${c===n.type}>${c}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${c=>{const d=c.target.value;this.patchColumn(r,{renderer:d||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${this.rendererOptions.map(c=>$`<option value=${c} ?selected=${c===n.renderer}>${c}</option>`)}
                    </select>
                    <button
                      type="button"
                      class=${`icon-btn${n.script?.trim()?" has-script":""}`}
                      title=${n.script?.trim()?"Edit the script — its render(row) output is what this column displays":"Add a script: render(row) computes what this column displays"}
                      @click=${()=>this.editScript(r)}
                    >
                      <span class="mi sm">edit</span>
                    </button>
                    <input
                      type="number"
                      min="0"
                      placeholder="—"
                      title="Max length (strings) or max value (numbers)"
                      .value=${n.max==null?"":String(n.max)}
                      @input=${c=>{const d=c.target.value;this.patchColumn(r,{max:d===""?void 0:Number(d)})}}
                    />
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Unique"
                        .checked=${!!n.unique}
                        @change=${c=>this.patchColumn(r,{unique:c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Not null"
                        .checked=${!!n.notnull}
                        @change=${c=>this.patchColumn(r,{notnull:c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Visible — uncheck to hide the column without losing its data"
                        .checked=${!n.hidden}
                        @change=${c=>this.patchColumn(r,{hidden:!c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Sortable — uncheck to disable sorting on this column"
                        .checked=${n.sortable!==!1}
                        @change=${c=>this.patchColumn(r,{sortable:c.target.checked?void 0:!1})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Filterable — uncheck to disable filtering and search on this column"
                        .checked=${n.filterable!==!1}
                        @change=${c=>this.patchColumn(r,{filterable:c.target.checked?void 0:!1})}
                      />
                    </span>
                    <button
                      type="button"
                      class="icon-btn"
                      title="Move up"
                      ?disabled=${r===0}
                      @click=${()=>this.moveColumn(r,-1)}
                    >
                      <span class="mi sm">arrow_upward</span>
                    </button>
                    <button
                      type="button"
                      class="icon-btn"
                      title="Move down"
                      ?disabled=${r===this.columns.length-1}
                      @click=${()=>this.moveColumn(r,1)}
                    >
                      <span class="mi sm">arrow_downward</span>
                    </button>
                    <button
                      type="button"
                      class="icon-btn row-del"
                      title="Remove column"
                      @click=${()=>this.removeColumn(r)}
                    >
                      <span class="mi sm">delete</span>
                    </button>
                  </div>
                `})}
            </div>

            <button type="button" class="add" @click=${this.addColumn}>+ Add column</button>
            ${this.columnActions.map(n=>$`<button
                type="button"
                class="add"
                title=${n.tooltip??n.label}
                @click=${()=>void this.runColumnAction(n)}
              >
                ${n.label}
              </button>`)}

            ${this.renameDetected()?$`<div class="hint">
                  Existing rows are re-keyed on save, so renamed fields keep their data.
                </div>`:""}
            ${this.errorMsg?$`<div class="error">${this.errorMsg}</div>`:""}
            ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Ne.styles=[ut,gt,$e`
      dialog {
        max-width: 96vw;
        width: 1180px;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.85rem;
        color: #374151;
      }
      /* A checkbox reads as one line with its text, not stacked above it. */
      label.inline {
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;
      }
      label.inline input[type='checkbox'] {
        width: auto;
        margin: 0;
      }
      input,
      select {
        font: inherit;
        padding: 0.4rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
      }
      .columns {
        display: grid;
        gap: 0.5rem;
      }
      .col-header,
      .col-row {
        display: grid;
        grid-template-columns:
          1.25rem 1fr 1fr 7rem 7rem 1.5rem 4rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem
          1.5rem;
        gap: 0.4rem;
        align-items: center;
      }
      .drag-handle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #9ca3af;
        cursor: grab;
        user-select: none;
      }
      .drag-handle:active {
        cursor: grabbing;
      }
      .drag-handle:hover {
        color: #374151;
      }
      .col-row.drag-source {
        opacity: 0.4;
      }
      .col-row.drop-before {
        box-shadow: inset 0 3px 0 #3b82f6;
      }
      .col-row.drop-after {
        box-shadow: inset 0 -3px 0 #3b82f6;
      }
      .col-row input[type='number'] {
        width: 100%;
        box-sizing: border-box;
      }
      .col-row .flag {
        display: inline-flex;
        justify-content: center;
      }
      .col-header .flag-label {
        font-size: 0.7rem;
        text-align: center;
      }
      .col-header {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #6b7280;
      }
      button.icon-btn {
        background: transparent;
        border: 0;
        color: #6b7280;
        cursor: pointer;
        padding: 0;
        font-size: 1rem;
      }
      button.icon-btn:hover:not(:disabled) {
        color: #111827;
      }
      button.icon-btn:disabled {
        color: #d1d5db;
        cursor: not-allowed;
      }
      /* A column that already carries a script — blue so it is obvious which
       columns are computed without opening each editor. The glyph itself
       never changes (always the pencil); colour alone carries the state. */
      button.icon-btn.has-script {
        color: #2563eb;
      }
      /* Without this, the plain :hover rule above (color: #111827) would win
       and a script-set pencil would go near-black on hover, losing the blue
       state cue. A darker blue keeps hover feedback without discarding it. */
      button.icon-btn.has-script:hover:not(:disabled) {
        color: #1d4ed8;
      }
      button.row-del {
        color: #9ca3af;
        font-size: 1.1rem;
      }
      button.row-del:hover:not(:disabled) {
        color: #ef4444;
      }
      button.add {
        align-self: start;
        background: #f3f4f6;
        border: 1px dashed #9ca3af;
        padding: 0.4rem 0.75rem;
        border-radius: 0.25rem;
        cursor: pointer;
      }
      .error {
        color: #ef4444;
        font-size: 0.85rem;
      }
      .notice {
        background: #fef9c3;
        border: 1px solid #fde047;
        color: #713f12;
        border-radius: 0.35rem;
        padding: 0.45rem 0.6rem;
        font-size: 0.85rem;
        margin-bottom: 0.6rem;
      }
      .hint {
        color: #6b7280;
        font-size: 0.78rem;
      }
      .mi.sm {
        font-size: 0.95rem;
      }
      /* Live preview table: shows the first 100 rows so the user can see
       which cells would fail validation under the edited column specs. */
      .preview {
        border-top: 1px solid #e5e7eb;
        margin-top: 0.5rem;
        max-height: 36vh;
        overflow: auto;
      }
      .preview h3 {
        margin: 0;
        padding: 0.6rem 0.4rem 0.4rem;
        font-size: 0.85rem;
        color: #6b7280;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .preview table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.8rem;
      }
      .preview th,
      .preview td {
        border: 1px solid #e5e7eb;
        padding: 0.2rem 0.4rem;
        text-align: left;
        vertical-align: top;
        white-space: nowrap;
        max-width: 18rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .preview th {
        background: #f9fafb;
        position: sticky;
        top: 0;
        z-index: 1;
      }
      .preview td.violation {
        background: #fee2e2;
        color: #991b1b;
      }
      .preview .empty {
        padding: 0.75rem 0.4rem;
        color: #9ca3af;
        font-style: italic;
      }
    `];We([N()],Ne.prototype,"mode",2);We([N()],Ne.prototype,"editTableId",2);We([N()],Ne.prototype,"name",2);We([N()],Ne.prototype,"tableTitle",2);We([N()],Ne.prototype,"tableReadonly",2);We([N()],Ne.prototype,"columns",2);We([N()],Ne.prototype,"errorMsg",2);We([N()],Ne.prototype,"noticeMsg",2);We([N()],Ne.prototype,"dragSrcIdx",2);We([N()],Ne.prototype,"dropTargetIdx",2);We([N()],Ne.prototype,"dropEdge",2);We([N()],Ne.prototype,"previewRows",2);We([N()],Ne.prototype,"rendererOptions",2);We([N()],Ne.prototype,"columnActions",2);Ne=We([Se("new-table-dialog")],Ne);function gy(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function by(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const i=Number(t);if(!Number.isFinite(i))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const i=new Date(String(t));if(Number.isNaN(i.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function wy(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((i,s)=>{const a=i.data[r.field];(a==null||typeof a=="string"&&a.trim()==="")&&n.push(`Row ${s+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((i,s)=>{const a=i.data[r.field];typeof a=="string"&&a.length>r.max?n.push(`Row ${s+1}: ${r.label} length ${a.length} > max ${r.max}.`):typeof a=="number"&&a>r.max&&n.push(`Row ${s+1}: ${r.label} value ${a} > max ${r.max}.`)}),r.unique){const i=new Map;t.forEach((s,a)=>{const c=s.data[r.field];c==null||c===""||(i.has(c)?n.push(`Row ${a+1}: ${r.label} duplicates row ${i.get(c)+1} ("${String(c)}").`):i.set(c,a))})}return n}var yy=Object.defineProperty,vy=Object.getOwnPropertyDescriptor,Ye=(e,t,n,r)=>{for(var i=r>1?void 0:r?vy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&yy(t,n,i),i};const xy='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',$y=$`<span class="mi sm">extension</span>`,Wl="plugin:catalogUrls";function si(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const ky=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],Xu=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],_y=new Map(Xu),Cy={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let Ue=class extends xe{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[si()],this.activeCatalogUrl=si(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e)}async open(){const e=await ae(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(s=>[s.url,s]));const r=await e.store.settings.findOne(Wl),i=Array.isArray(r?.value)?r.value.filter(s=>typeof s=="string"):[];this.catalogUrls=i.length>0?i:[si()],this.activeCatalogUrl=this.catalogUrls[0]??si(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(i=>({...i,absUrl:new URL(i.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await ae()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const i=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const s=await fetch(i,{cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);const a=await s.json(),c=Array.isArray(a.plugins)?a.plugins:[];this.serverCatalog=c.map(d=>({...d,absUrl:new URL(d.url,i).toString()})),this.serverCatalogError=null}catch(s){this.serverCatalog=[],this.serverCatalogError=s.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ae()).store.settings.upsert({name:Wl,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ae()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await ae();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await ae(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await ae();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await ae(),r=so(e),i=this.records.get(r);await n.store.plugins.upsert({...i??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:i?.lastFetched??0}),this.records=new Map(this.records.set(r,{...i,url:r,enabled:t,lastFetched:i?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ae()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ae();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const i=new Blob([r],{type:"text/javascript"}),s=URL.createObjectURL(i);try{const c=await import(s);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(s),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const a=await t.store.plugins.find();this.records=new Map(a.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",i){const s=i?i[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return $`
      <button
        type="button"
        class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`}
        title=${s}
        aria-pressed=${t!==void 0}
        @click=${n}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of Iw){const i=r.fixed?!0:this.records.get(so(n))?.enabled!==!1,s=!r.fixed&&pt==="all-optional",a=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(a),enabled:i,status:i&&!s?"enabled":"disabled",fixed:!!r.fixed,...s?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),i=this.records.get(n.absUrl),s=r?["available","installed"]:["available"],a=e.get(n.id),c=i?.enabled!==!1,d=r&&pt!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:a?new Set([...a.categories,...s]):new Set(s),enabled:c,...r?{status:c&&!d?"enabled":"disabled"}:{},...d?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const i=this.records.get(n),s=i?.lastFetched?new Date(i.lastFetched).toLocaleString():"never",a=i?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:i?.lastError??`Last fetched: ${s}`,metaIsError:!!i?.lastError,categories:new Set(["installed"]),enabled:a,status:a&&pt==="off"?"enabled":"disabled",...pt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[d,f]of this.filterStates)(f==="on"?n:r).push(d);const i=[],s=[];for(const[d,f]of this.typeFilters)(f==="on"?i:s).push(d);const a=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,c=e.filter(d=>!(n.length&&!n.some(f=>d.categories.has(f))||r.some(f=>d.categories.has(f))||i.length&&!(d.type&&i.includes(d.type))||d.type&&s.includes(d.type)||a&&d.status!==a));return t?c.filter(d=>[d.id,d.name,d.type,d.meta,d.author].some(f=>f?.toLowerCase().includes(t))):c}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return $`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?En(e.icon):$y}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?$`<span class="row-id">${e.id}</span>`:""}${e.type?$`<span class="row-type" title="Plugin type"
                  >${_y.get(e.type)??e.type}</span
                >`:""}${e.skipped?$`<span
                  class="row-skipped"
                  title="Safe mode kept this plugin from loading this session — your saved setting is unchanged"
                  >skipped</span
                >`:""}
          </div>
          ${e.meta?$`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?$`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${En(xy)}</a
            >`:$`<span></span>`}
        ${e.fixed?$`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?$`<label
                class="switch"
                title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}
              >
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${i=>this.onRowToggle(e,i.target.checked)}
                />
                <span class="slider"></span>
              </label>`:$`<span></span>`}
        ${r?$`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:n?$`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:$`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return $`
      <dialog @cancel=${this.close} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>
          <span class="mi sm">close</span>
        </button>
        <form @submit=${this.addPlugin}>
          <div class="dialog-header">
            <h2>Plugins</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${this.close}>Close</button>
              <button type="button" class="primary" @click=${this.reload}>
                <span class="mi sm">refresh</span> Reload to apply
              </button>
            </div>
          </div>
          <div class="dialog-body">
            <p class="hint">
              Plugins are JavaScript modules loaded by URL into this workspace. Enable/disable
              changes take effect after reload; installing a plugin activates it immediately.
            </p>
            ${pt!=="off"?$`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${pt==="all-optional"?$`<code>?safemode</code> skipped every URL plugin and every optional
                        built-in for this session.`:$`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The
                  toggles below still show — and change — your saved settings, which safe mode never
                  touches. Reload without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${ky.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",Cy)}
              </div>
              <div class="search">
                <input
                  type="text"
                  placeholder="Search plugins…"
                  .value=${this.search}
                  @input=${t=>this.search=t.target.value}
                />
              </div>
            </div>

            <div class="type-filters">
              <span class="filter-label">Type</span>
              ${Xu.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
            </div>

            <div class="catalog-source">
              <input
                type="text"
                list="catalog-url-options"
                .value=${this.activeCatalogUrl}
                @input=${t=>this.activeCatalogUrl=t.target.value}
                placeholder="Catalog source URL"
              />
              <datalist id="catalog-url-options">
                ${this.catalogUrls.map(t=>$`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?$`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?$`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            <div class="plugin-list">
              ${e.length===0?$`<p class="hint">No plugins match the current filters/search.</p>`:""}
              ${e.map(t=>this.renderRow(t))}
            </div>

            <div class="add">
              <input
                type="text"
                placeholder="https://example.com/my-plugin.js"
                .value=${this.addUrl}
                @input=${t=>this.addUrl=t.target.value}
              />
              <button type="submit" class="primary"><span class="mi sm">add</span> Add</button>
            </div>
          </div>
        </form>
      </dialog>
    `}};Ue.styles=[ut,gt,$e`
      dialog {
        width: 720px;
        max-width: 94vw;
      }
      p.hint {
        margin: 0;
        color: #6b7280;
        font-size: 0.85rem;
      }

      .filters {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
      }
      .filters .chips,
      .type-filters {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.4rem;
      }
      .type-filters .filter-label {
        font-size: 0.72rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: #9ca3af;
        margin-right: 0.1rem;
      }
      /* Tri-state filter chip: off (neutral) → on (blue, ✓) → not (red, ≠). */
      .filters .tri,
      .type-filters .tri {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.8rem;
        padding: 0.2rem 0.6rem;
        border-radius: 999px;
        border: 1px solid #d1d5db;
        background: #fff;
        color: #6b7280;
        cursor: pointer;
        user-select: none;
      }
      .filters .tri .tri-mark,
      .type-filters .tri .tri-mark {
        font-weight: 700;
        line-height: 1;
      }
      .filters .tri.on,
      .type-filters .tri.on {
        border-color: #2563eb;
        background: #eff6ff;
        color: #1d4ed8;
      }
      .filters .tri.not,
      .type-filters .tri.not {
        border-color: #dc2626;
        background: #fef2f2;
        color: #b91c1c;
      }
      /* Safe-mode notice: explains why nothing is loaded despite the toggles. */
      p.safemode {
        margin: 0;
        padding: 0.5rem 0.7rem;
        border: 1px solid #fcd34d;
        background: #fffbeb;
        color: #92400e;
        border-radius: 0.35rem;
        font-size: 0.85rem;
      }
      .row-skipped {
        display: inline-block;
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        color: #92400e;
        background: #fef3c7;
        border: 1px solid #fcd34d;
        border-radius: 0.25rem;
        padding: 0.05rem 0.35rem;
        margin-left: 0.35rem;
        vertical-align: middle;
      }
      /* A toggle whose plugin isn't running this boot: still editable (it edits
         the persisted setting) but dimmed so it doesn't read as "active". */
      .row.skipped .switch {
        opacity: 0.55;
      }
      .row-type {
        display: inline-block;
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        color: #6b7280;
        background: #e5e7eb;
        border-radius: 0.25rem;
        padding: 0.05rem 0.35rem;
        margin-left: 0.35rem;
        vertical-align: middle;
      }
      .search {
        flex: 1;
        min-width: 160px;
      }
      .search input {
        width: 100%;
        font: inherit;
        padding: 0.4rem 0.6rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        box-sizing: border-box;
      }

      .catalog-source {
        display: flex;
        gap: 0.4rem;
        align-items: center;
      }
      .catalog-source input {
        flex: 1;
        font: inherit;
        font-size: 0.85rem;
        padding: 0.35rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
      }

      .plugin-list {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        max-height: 42vh;
        overflow: auto;
      }
      .row {
        display: grid;
        grid-template-columns: 22px 1fr auto 22px 44px auto;
        gap: 0.6rem;
        align-items: center;
        padding: 0.45rem 0.6rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.3rem;
        background: #f9fafb;
      }
      .row.builtin {
        background: #f3f4f6;
      }
      .row.error {
        background: #fef2f2;
        border-color: #fecaca;
      }
      .row-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        color: #6b7280;
      }
      .row-icon svg {
        width: 100%;
        height: 100%;
      }
      .row-main {
        min-width: 0;
      }
      .row-title {
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .row-title.mono {
        font-family: ui-monospace, SFMono-Regular, monospace;
        font-weight: 400;
        font-size: 0.8rem;
      }
      .row-id {
        font-weight: 400;
        color: #9ca3af;
        font-size: 0.75rem;
        margin-left: 0.35rem;
      }
      .row-author {
        font-size: 0.78rem;
        color: #6b7280;
        max-width: 110px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .row-repo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        color: #6b7280;
      }
      .row-repo svg {
        width: 100%;
        height: 100%;
      }
      .row-repo:hover {
        color: #111;
      }
      .lock-icon {
        color: #9ca3af;
        text-align: center;
      }
      .meta {
        font-size: 0.75rem;
        color: #6b7280;
      }
      .meta.err {
        color: #b91c1c;
      }

      /* iOS-style toggle switch. */
      .switch {
        position: relative;
        display: inline-block;
        width: 36px;
        height: 20px;
        flex: none;
      }
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .switch .slider {
        position: absolute;
        inset: 0;
        background-color: #d1d5db;
        border-radius: 999px;
        cursor: pointer;
        transition: background-color 0.15s ease;
      }
      .switch .slider::before {
        content: '';
        position: absolute;
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        transition: transform 0.15s ease;
      }
      .switch input:checked + .slider {
        background-color: #3b82f6;
      }
      .switch input:checked + .slider::before {
        transform: translateX(16px);
      }
      .switch input:disabled + .slider {
        background-color: #e5e7eb;
        cursor: default;
      }
      .switch.sm {
        width: 30px;
        height: 17px;
      }
      .switch.sm .slider::before {
        height: 13px;
        width: 13px;
      }
      .switch.sm input:checked + .slider::before {
        transform: translateX(13px);
      }

      button.install,
      button.uninstall {
        border: 0;
        padding: 0.3rem 0.7rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font: inherit;
        font-size: 0.85rem;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        white-space: nowrap;
      }
      button.install {
        background: #10b981;
        color: white;
      }
      button.install:hover {
        background: #059669;
      }
      button.install:disabled {
        background: #d1d5db;
        cursor: default;
      }
      button.uninstall {
        background: transparent;
        border: 1px solid #d1d5db;
        color: #6b7280;
      }
      button.uninstall:hover {
        background: #fef2f2;
        border-color: #fecaca;
        color: #b91c1c;
      }

      .add {
        display: flex;
        gap: 0.4rem;
      }
      .add input {
        flex: 1;
        font: inherit;
        padding: 0.4rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
      }
    `];Ye([N()],Ue.prototype,"urls",2);Ye([N()],Ue.prototype,"records",2);Ye([N()],Ue.prototype,"addUrl",2);Ye([N()],Ue.prototype,"catalog",2);Ye([N()],Ue.prototype,"catalogError",2);Ye([N()],Ue.prototype,"serverCatalog",2);Ye([N()],Ue.prototype,"serverCatalogError",2);Ye([N()],Ue.prototype,"installing",2);Ye([N()],Ue.prototype,"catalogUrls",2);Ye([N()],Ue.prototype,"activeCatalogUrl",2);Ye([N()],Ue.prototype,"search",2);Ye([N()],Ue.prototype,"filterStates",2);Ye([N()],Ue.prototype,"typeFilters",2);Ye([N()],Ue.prototype,"statusFilter",2);Ue=Ye([Se("plugin-manager-dialog")],Ue);var Sy=Object.defineProperty,Ey=Object.getOwnPropertyDescriptor,Mt=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ey(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Sy(t,n,i),i};const ir="__general__";let Xe=class extends xe{constructor(){super(...arguments),this.tabs=[],this.active=ir,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const i=r.names.map(s=>`“${s}”`).join(", ");this.secretError=`“${r.field.label}” references ${i}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&wt(this.dialogEl,e),this.dialogEl&&Yu("settings",this.dialogEl)}async open(){const e=await ae(),t=[...e.registries.settings];this.tabs=t.map(([s,a])=>({id:s,name:a.name,fields:a.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},i={};for(const s of this.tabs)for(const a of s.fields){const c=`${s.id}:${a.key}`,d=await e.api.settings.placement(s.id,a.key);d==="user"?(r[c]=wo(c),i[c]="user"):d==="workspace"?(r[c]=(await e.store.settings.findOne(c))?.value,i[c]="workspace"):(r[c]=a.default,i[c]=a.scope??"workspace")}this.values=r,this.placements=i,this.secretsText=Ii(),this.active=ir,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&Xe.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(hr(this.secretsText)));return Xe.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await ae()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,i=n?"user":"workspace";this.placements={...this.placements,[r]:i},await(await ae()).api.settings.set(e.id,t.key,this.values[r],i)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,fc(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ae();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return $`<textarea
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        ></textarea>`;case"number":return $`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${i=>{const s=i.target.value;this.setValue(e,t,s===""?void 0:Number(s))}}
        />`;case"boolean":return $`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!r}
            @change=${i=>this.setValue(e,t,i.target.checked)}
          />
          enabled</label
        >`;case"date":return $`<input
          type="date"
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return $`<div class="radios">
          ${(t.options??[]).map(i=>$`<label
              ><input
                type="radio"
                name=${n}
                .checked=${r===i}
                @change=${()=>this.setValue(e,t,i)}
              />${i}</label
            >`)}
        </div>`;case"selection":{const i=Array.isArray(r)?r:[];return $`<div class="checks">
          ${(t.options??[]).map(s=>$`<label
              ><input
                type="checkbox"
                .checked=${i.includes(s)}
                @change=${a=>{const d=a.target.checked?[...i,s]:i.filter(f=>f!==s);this.setValue(e,t,d)}}
              />${s}</label
            >`)}
        </div>`}case"string":default:return $`<input
          type="text"
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        />`}}renderSecretControl(e,t,n){const r=Object.keys(hr(this.secretsText)),i=Xe.rawSecret(n)||this.missingRefs(n).length>0;return $`<div class="secret-row">
      <input
        type="text"
        class=${i?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${s=>this.setValue(e,t,s.target.value)}
      />
      ${r.length>0?$`<select
            title="Insert a secret reference"
            @change=${s=>{const a=s.target.value;a&&this.setValue(e,t,`\${secret:${a}}`),s.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(s=>$`<option value=${s}>${s}</option>`)}
          </select>`:re}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),i=this.openHelp===n;return $`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?$`<button
              type="button"
              class="help-btn"
              aria-label=${`Help for ${t.label}`}
              aria-expanded=${i?"true":"false"}
              title=${t.help??"More about this setting"}
              @click=${()=>this.openHelp=i?"":n}
            >
              <span class="mi sm" aria-hidden="true">info</span>
            </button>`:re}
        <label class="scope" title="Store on this device only (not synced)">
          <input
            type="checkbox"
            .checked=${this.placements[n]==="user"}
            @change=${s=>this.toggleScope(e,t,s.target.checked)}
          />
          user
        </label>
      </div>
      ${r&&i?$`<div class="help-panel">
            ${t.help?$`<p>${t.help}</p>`:re}
            ${t.helpUrl?$`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer"
                  >${t.helpLinkLabel||Ty(t.helpUrl)}</a
                >`:re}
          </div>`:re}
      ${this.renderControl(e,t)}
      ${t.description?$`<p class="desc">${t.description}</p>`:re}
    </div>`}renderGeneral(){return $`
      <h3>General</h3>
      <p class="blurb">
        Workspace settings sync with this workspace; values marked
        <em>user</em> stay on this device only.
      </p>
      <div class="field">
        <div class="field-head"><label>Workspace title</label></div>
        <p class="desc">
          Shown in the header instead of "easyDBAccess". Leave blank to use the default.
        </p>
        <input
          type="text"
          placeholder="easyDBAccess"
          .value=${this.workspaceTitle}
          @change=${e=>this.setWorkspaceTitle(e.target.value)}
        />
      </div>
      <div class="field">
        <div class="field-head"><label>Secrets</label></div>
        <p class="desc">
          Cross-workspace, device-local. One <code>name: value</code> per line.
          Reference a secret from any field with <code>\${secret:name}</code>.
          Drag a <code>secrets.txt</code> onto the app to re-import.
        </p>
        <textarea
          placeholder="githubPAT: ghp_…"
          .value=${this.secretsText}
          @input=${this.onSecretsInput}
        ></textarea>
        <div class="secrets-actions">
          <button
            type="button"
            class="ghost"
            ?disabled=${this.secretsText.trim().length===0}
            @click=${this.downloadSecrets}
          >
            <span class="mi sm">download</span> Download secrets.txt
          </button>
        </div>
      </div>
    `}renderPanel(){if(this.active===ir)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?$`
      <h3>${e.name}</h3>
      ${e.fields.length===0?$`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:re}render(){return $`
      <dialog @cancel=${this.attemptClose} @keydown=${bt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.attemptClose()}>
          <span class="mi sm">close</span>
        </button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>Settings</h2>
            <div class="header-actions">
              <button type="submit" class="primary">Done</button>
            </div>
          </div>
          ${this.secretError?$`<div class="secret-error" role="alert">${this.secretError}</div>`:re}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===ir?"active":""}
                  @click=${()=>this.active=ir}
                >
                  General
                </button>
                ${this.tabs.map(e=>$`<button
                    type="button"
                    class=${this.active===e.id?"active":""}
                    @click=${()=>this.active=e.id}
                  >
                    ${e.name}
                  </button>`)}
              </nav>
              <section class="panel">${this.renderPanel()}</section>
            </div>
          </div>
        </form>
      </dialog>
    `}};Xe.styles=[ut,gt,$e`
      dialog {
        width: 720px;
        max-width: 94vw;
      }
      .layout {
        display: grid;
        grid-template-columns: 180px 1fr;
        gap: 1rem;
        min-height: 340px;
      }
      .tabs {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
        border-right: 1px solid #e5e7eb;
        padding-right: 0.5rem;
      }
      .tabs button {
        text-align: left;
        background: transparent;
        border: 0;
        border-radius: 0.3rem;
        padding: 0.45rem 0.6rem;
        cursor: pointer;
        font: inherit;
        color: #374151;
      }
      .tabs button:hover {
        background: #f3f4f6;
      }
      .tabs button.active {
        background: #eff6ff;
        color: #1d4ed8;
        font-weight: 600;
      }
      .panel {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        min-width: 0;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      .field-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
      }
      .field-head label {
        font-weight: 600;
        font-size: 0.9rem;
      }
      .scope {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.75rem;
        color: #6b7280;
        cursor: pointer;
        user-select: none;
      }
      .desc {
        font-size: 0.78rem;
        color: #6b7280;
        margin: 0;
      }
      /* (i) next to the label — opens the field's help panel. */
      .help-btn {
        background: transparent;
        border: 0;
        padding: 0;
        margin-right: auto;
        color: #6b7280;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        line-height: 1;
      }
      .help-btn:hover,
      .help-btn[aria-expanded='true'] {
        color: #1d4ed8;
      }
      .help-panel {
        font-size: 0.8rem;
        color: #374151;
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 0.3rem;
        padding: 0.45rem 0.6rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }
      .help-panel p {
        margin: 0;
      }
      .help-panel a {
        color: #1d4ed8;
        align-self: flex-start;
      }
      input[type='text'],
      input[type='number'],
      input[type='date'],
      textarea,
      select {
        font: inherit;
        padding: 0.4rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
      }
      textarea {
        min-height: 4.5rem;
        resize: vertical;
        font-family: ui-monospace, SFMono-Regular, monospace;
        font-size: 0.85rem;
      }
      .secrets-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 0.4rem;
      }
      button.ghost {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        font: inherit;
        font-size: 0.85rem;
        background: #f3f4f6;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        padding: 0.3rem 0.6rem;
        color: #374151;
        cursor: pointer;
      }
      button.ghost:hover:not(:disabled) {
        background: #e5e7eb;
      }
      button.ghost:disabled {
        opacity: 0.5;
        cursor: default;
      }
      .secret-row {
        display: flex;
        gap: 0.4rem;
        align-items: center;
      }
      .secret-row select {
        width: auto;
        flex: 0 0 auto;
      }
      .secret-row input.invalid {
        border-color: #dc2626;
        background: #fef2f2;
      }
      .secret-error {
        margin: 0.5rem 1rem 0;
        padding: 0.5rem 0.7rem;
        background: #fef2f2;
        border: 1px solid #fecaca;
        border-radius: 0.35rem;
        color: #b91c1c;
        font-size: 0.82rem;
      }
      .radios,
      .checks {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;
      }
      .radios label,
      .checks label {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.9rem;
        font-weight: 400;
      }
      .radios input,
      .checks input {
        width: auto;
      }
      .empty {
        color: #6b7280;
        font-size: 0.9rem;
      }
      .blurb {
        color: #4b5563;
        font-size: 0.9rem;
        margin: 0;
      }
      h3 {
        margin: 0;
        font-size: 1rem;
      }
    `];Mt([N()],Xe.prototype,"tabs",2);Mt([N()],Xe.prototype,"active",2);Mt([N()],Xe.prototype,"values",2);Mt([N()],Xe.prototype,"placements",2);Mt([N()],Xe.prototype,"secretsText",2);Mt([N()],Xe.prototype,"workspaceTitle",2);Mt([N()],Xe.prototype,"secretError",2);Mt([N()],Xe.prototype,"openHelp",2);Xe=Mt([Se("settings-dialog")],Xe);function Ty(e){try{return new URL(e).host}catch{return e}}const Qu=5,Yl="palette:recent",Ju="Recent";function Iy(e,t,n=Qu){return[t,...e.filter(r=>r!==t)].slice(0,n)}function Ay(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,Qu):[]}function Ry(e,t){if(t.length===0)return e;const n=new Map(e.map(s=>[s.id,s])),r=[];for(const s of t){const a=n.get(s);a&&r.push({...a,group:Ju})}if(r.length===0)return e;const i=new Set(r.map(s=>s.id));return[...r,...e.filter(s=>!i.has(s.id))]}var Oy=Object.defineProperty,Dy=Object.getOwnPropertyDescriptor,Un=(e,t,n,r)=>{for(var i=r>1?void 0:r?Dy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Oy(t,n,i),i};const Py={[Ju]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function Xl(e){return Py[e]??3}function Ly(e){return e?e.trimStart().startsWith("<svg")?$`<span class="cmd-svg">${fo(e)}</span>`:$`<span class="mi sm">${e}</span>`:$`<span class="mi sm">chevron_right</span>`}let Wt=class extends xe{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await ae();this.api=e.api,this.recentIds=Ay((await e.api.store.settings.findOne(Yl))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await ae(),t=e.api,n=[];for(const s of e.registries.commands)n.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:[s.title,s.group,...s.keywords??[]].join(" ").toLowerCase(),run:()=>s.run(t)});for(const s of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${s.id}`,title:s.label,group:"Actions",...s.icon?{icon:s.icon}:{},haystack:`${s.label} ${s.tooltip??""}`.toLowerCase(),run:()=>s.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((s,a)=>s.name.localeCompare(a.name));for(const s of r)n.push({id:`goto:${s.id}`,title:`Go to: ${s.name}`,group:"Tables",icon:"table_chart",haystack:`${s.name} go to table`.toLowerCase(),run:()=>{Cu(s.id)}});const i=await t.store.viewInstances.find({workspaceId:e.workspaceId});i.sort((s,a)=>s.name.localeCompare(a.name));for(const s of i)n.push({id:`goto-view:${s.id}`,title:`Go to view: ${s.name}`,group:"Views",icon:"view_quilt",haystack:`${s.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(s.id,{open:!0,updatedAt:Date.now()}),Lw(s.id)}});return Ry(n,this.recentIds).map((s,a)=>({it:s,i:a})).sort((s,a)=>Xl(s.it.group)-Xl(a.it.group)||s.i-a.i).map(({it:s})=>s)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=Iy(this.recentIds,e);try{await this.api?.store.settings.upsert({name:Yl,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return $`
      <dialog
        @keydown=${this.onKeydown}
        @click=${this.onDialogClick}
        @close=${()=>this.search=""}
      >
        <div class="search-row">
          <span class="mi">search</span>
          <input
            type="text"
            placeholder="Type a command…  (windows, go to, import, export)"
            .value=${this.search}
            @input=${this.onInput}
          />
        </div>
        <div class="list">
          ${e.length===0?$`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const i=n.group!==t?(t=n.group,n.group):null;return $`
                  ${i?$`<div class="group-head">${i}</div>`:""}
                  <div
                    class=${`item${r===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=r}
                    @click=${()=>this.execute(n)}
                  >
                    ${Ly(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};Wt.styles=[ut,$e`
      dialog {
        width: 560px;
        max-width: 94vw;
        padding: 0;
        border: 1px solid #d1d5db;
        border-radius: 0.6rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        margin-top: 12vh;
      }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.25);
      }
      .search-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 0.9rem;
        border-bottom: 1px solid #eee;
      }
      .search-row .mi {
        color: #9ca3af;
      }
      input {
        flex: 1;
        font: inherit;
        font-size: 1rem;
        border: 0;
        outline: none;
        background: transparent;
      }
      .list {
        max-height: 52vh;
        overflow: auto;
        padding: 0.35rem;
      }
      .group-head {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #9ca3af;
        padding: 0.5rem 0.6rem 0.25rem;
      }
      .item {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.45rem 0.6rem;
        border-radius: 0.35rem;
        cursor: pointer;
        color: #111827;
      }
      .item .cmd-svg {
        display: inline-flex;
        width: 1.05rem;
        height: 1.05rem;
        color: #6b7280;
      }
      .item .cmd-svg svg {
        width: 100%;
        height: 100%;
      }
      .item .mi {
        color: #6b7280;
      }
      .item .title {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .item.sel {
        background: #eff6ff;
        color: #1d4ed8;
      }
      .item.sel .mi,
      .item.sel .cmd-svg {
        color: #1d4ed8;
      }
      .empty {
        padding: 1rem 0.9rem;
        color: #6b7280;
        font-size: 0.9rem;
      }
    `];Un([N()],Wt.prototype,"search",2);Un([N()],Wt.prototype,"items",2);Un([N()],Wt.prototype,"selected",2);Un([Rt("dialog")],Wt.prototype,"dialogEl",2);Un([Rt("input")],Wt.prototype,"inputEl",2);Wt=Un([Se("command-palette-dialog")],Wt);var My=Object.defineProperty,zy=Object.getOwnPropertyDescriptor,Zu=(e,t,n,r)=>{for(var i=r>1?void 0:r?zy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&My(t,n,i),i};let Ci=class extends xe{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await Eu(),await jw()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?$``:$`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Ci.styles=$e`
    :host {
      display: block;
      height: 100%;
      box-sizing: border-box;
    }
    .empty {
      color: #6b7280;
      text-align: center;
      padding: 4rem 1rem;
      font-size: 0.95rem;
    }
  `;Zu([N()],Ci.prototype,"tables",2);Ci=Zu([Se("table-list")],Ci);function oi(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function jy(e,t){const{from:n,to:r,name:i,mode:s}=t,a=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:i,createdAt:Date.now(),pluginUrls:s==="empty"?[]:[...a?.pluginUrls??[]]}),s==="empty")return r;if(s==="all"){const d=await e.tables.where("workspaceId").equals(n).toArray(),f=new Map;for(const k of d){const C=oi();f.set(k.id,C),await e.tables.put({...k,id:C,workspaceId:r,updatedAt:Date.now()})}for(const[k,C]of f){const _=await e.rows.where("tableId").equals(k).toArray();_.length>0&&await e.rows.bulkPut(_.map(D=>({...D,id:oi(),tableId:C})))}const g=await e.viewTemplates.where("workspaceId").equals(n).toArray(),b=new Map;for(const k of g){const C=oi();b.set(k.id,C),await e.viewTemplates.put({...k,id:C,workspaceId:r})}const y=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const k of y){const C=f.get(k.tableId);C&&await e.viewInstances.put({...k,id:oi(),workspaceId:r,tableId:C,templateId:b.get(k.templateId)??k.templateId})}}const c=await e.settings.where("workspaceId").equals(n).toArray();for(const d of c)await e.settings.put({...d,key:cn(r,d.name),workspaceId:r,name:d.name});return r}var Ny=Object.defineProperty,Uy=Object.getOwnPropertyDescriptor,Vo=(e,t,n,r)=>{for(var i=r>1?void 0:r?Uy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Ny(t,n,i),i};const Ql="Clone everything (tables, views, settings)",Jl="Clone settings only (no data)",Fy="Empty workspace";let br=class extends xe{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(i=>i.id===e);if(!t)return;const n=new URLSearchParams(location.search);n.set("space",t.name);const r=`${location.pathname}?${n.toString()}${location.hash}`;location.assign(r)}async addWorkspace(){const e=await ae(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[Ql,Jl,Fy],"New workspace");if(!n)return;const r=n===Ql?"all":n===Jl?"settings":"empty",i=Wu(t.trim());await jy(uc(),{from:e.workspaceId,to:i,name:t.trim(),mode:r});const s=new URLSearchParams(location.search);s.set("space",t.trim()),location.assign(`${location.pathname}?${s.toString()}${location.hash}`)}render(){return $`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>$`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};br.styles=[ut,$e`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
      }
      select,
      button {
        background: #374151;
        color: white;
        border: 1px solid #4b5563;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font: inherit;
      }
      button:hover {
        background: #4b5563;
      }
      .mi.sm {
        font-size: 1rem;
      }
    `];Vo([N()],br.prototype,"workspaces",2);Vo([N()],br.prototype,"current",2);br=Vo([Se("workspace-selector")],br);var Zl=Object.freeze,ed=Object.defineProperty,By=Object.getOwnPropertyDescriptor,vt=(e,t,n,r)=>{for(var i=r>1?void 0:r?By(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&ed(t,n,i),i},Hy=(e,t)=>Zl(ed(e,"raw",{value:Zl(e.slice())})),ec;function tc(e){return e?e.trimStart().startsWith("<svg")?$`<span class="icon-svg" aria-hidden="true">${fo(e)}</span>`:$`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let Je=class extends xe{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{rc(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!rc(e))return;e.preventDefault();const t=await ae(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(i){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:i})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ae();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",qy(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return $`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${tc(e.icon)}
        </button>
      `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return $`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${tc(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return $(ec||(ec=Hy([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.235</span></a
          ></strong
        >
        `,`
        `,`
        <button
          class="icon-btn"
          title="Add, disable, or remove plugins"
          aria-label="Plugins"
          @click=`,`
        >
          <span class="mi" aria-hidden="true">extension</span>
        </button>
        <a
          class="icon-btn"
          href="https://github.com/cawoodm/easydbaccess/blob/main/docs/help/INDEX.md"
          target="_blank"
          rel="noopener noreferrer"
          title="Help — open the user guide"
          aria-label="Help — open the user guide"
        >
          <span class="mi" aria-hidden="true">help</span>
        </a>
        `,`
      </header>
      <main><table-list></table-list></main>
      <footer>
        <workspace-selector></workspace-selector>
        <span class="spacer"></span>
        `,`
      </footer>
      <new-table-dialog></new-table-dialog>
      <csv-paste-dialog></csv-paste-dialog>
      <plugin-manager-dialog></plugin-manager-dialog>
      <settings-dialog></settings-dialog>
      <command-palette-dialog></command-palette-dialog>
      <script-editor-dialog><\/script-editor-dialog>
      <host-dialogs></host-dialogs>
      <toast-host></toast-host>
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?$`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?$`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:$`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              aria-label="Search"
              @click=${this.openSearch}
            >
              <span class="mi" aria-hidden="true">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Je.styles=[ut,$e`
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-family: system-ui, sans-serif;
        background: #f3f4f6;
      }
      header,
      footer {
        background: #1f2937;
        color: white;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        position: relative;
        z-index: 100000;
      }
      header strong,
      footer .spacer {
        flex: 1;
      }
      footer button.slot {
        background: transparent;
        color: white;
        border: 1px solid #4b5563;
        padding: 0.3rem 0.7rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font: inherit;
      }
      footer button.slot:hover {
        background: #374151;
      }
      header .version-link {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
      header .version-link:hover .version {
        opacity: 1;
        text-decoration: underline;
      }
      header .version {
        opacity: 0.5;
        font-size: 0.75rem;
        margin-left: 0.5rem;
      }
      button.primary,
      button.slot {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
      }
      button.primary {
        background: #3b82f6;
        color: white;
        border: 0;
        padding: 0.4rem 0.75rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font: inherit;
      }
      button.primary:hover {
        background: #2563eb;
      }
      .search-wrap {
        position: relative;
        display: inline-flex;
        align-items: center;
      }
      input.search {
        background: #374151;
        color: white;
        border: 1px solid #4b5563;
        padding: 0.3rem 1.7rem 0.3rem 0.6rem;
        border-radius: 0.25rem;
        font: inherit;
        width: 14rem;
      }
      input.search::placeholder {
        color: #9ca3af;
      }
      input.search:focus {
        outline: 2px solid #3b82f6;
        outline-offset: -1px;
      }
      /* Hide the browser's native search clear glyph — we render our own × so
         it's visible on the dark header and works in every browser. */
      input.search::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
      }
      .search-clear {
        position: absolute;
        right: 0.3rem;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        border: 0;
        color: #9ca3af;
        cursor: pointer;
        font-size: 1.1rem;
        line-height: 1;
        padding: 0 0.2rem;
      }
      .search-clear:hover {
        color: white;
      }
      button.icon-btn,
      a.icon-btn {
        background: transparent;
        color: white;
        border: 1px solid #4b5563;
        padding: 0.3rem 0.6rem;
        border-radius: 0.25rem;
        font: inherit;
        cursor: pointer;
        line-height: 1;
        /* a.icon-btn is a link, not a button — strip the underline/default
           link colour so it renders identically to its button siblings. */
        text-decoration: none;
        display: inline-flex;
        align-items: center;
      }
      button.icon-btn:hover,
      a.icon-btn:hover {
        background: #374151;
      }
      /* Highlight the collapsed search icon while a global filter is active, so
         a live search stays discoverable after the box collapses. */
      button.icon-btn.active {
        color: #93c5fd;
        border-color: #3b82f6;
      }
      /* Inline-SVG button icons (icon strings that start with "<svg"). The svg
         inherits the button's text colour via fill/stroke: currentColor. */
      .icon-svg {
        display: inline-flex;
        align-items: center;
      }
      .icon-svg svg {
        width: 1.05rem;
        height: 1.05rem;
        display: block;
      }
      main {
        flex: 1;
        overflow: hidden;
        position: relative;
      }
      :host(.drag-over) main::after {
        content: 'Drop CSV or JSON here';
        position: absolute;
        inset: 0.75rem;
        border: 3px dashed #3b82f6;
        border-radius: 0.75rem;
        display: grid;
        place-items: center;
        background: rgba(59, 130, 246, 0.12);
        color: #1e3a8a;
        font-weight: 700;
        font-size: 1.6rem;
        letter-spacing: 0.04em;
        pointer-events: none;
        z-index: 90000;
        animation: pulse-overlay 1.4s ease-in-out infinite;
      }
      @keyframes pulse-overlay {
        0%,
        100% {
          background: rgba(59, 130, 246, 0.08);
        }
        50% {
          background: rgba(59, 130, 246, 0.18);
        }
      }
      /* Mobile / narrow: the header wraps. The app name + version take their
         own line; the buttons wrap below as icon-only chips (labels hidden on
         any button that carries an icon, so nothing goes blank). */
      @media (max-width: 640px) {
        header {
          flex-wrap: wrap;
          row-gap: 0.4rem;
        }
        header > strong {
          flex: 1 0 100%;
        }
        input.search {
          width: 100%;
        }
        button.primary:has(.icon-svg) .btn-label,
        button.primary:has(.mi) .btn-label,
        button.slot:has(.icon-svg) .btn-label,
        button.slot:has(.mi) .btn-label {
          display: none;
        }
      }
    `];vt([Rt("new-table-dialog")],Je.prototype,"dialog",2);vt([Rt("csv-paste-dialog")],Je.prototype,"csvPasteDialog",2);vt([Rt("plugin-manager-dialog")],Je.prototype,"pluginManagerDialog",2);vt([Rt("settings-dialog")],Je.prototype,"settingsDialog",2);vt([Rt("command-palette-dialog")],Je.prototype,"commandPaletteDialog",2);vt([Rt("input.search")],Je.prototype,"searchInput",2);vt([N()],Je.prototype,"footerButtons",2);vt([N()],Je.prototype,"headerButtons",2);vt([N()],Je.prototype,"searchQuery",2);vt([N()],Je.prototype,"searchOpen",2);vt([N()],Je.prototype,"workspaceTitle",2);Je=vt([Se("app-shell")],Je);const nc=document.title;function qy(e){const t=e.trim();document.title=t?`${t} — ${nc}`:nc}function rc(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ae(),at(()=>Promise.resolve().then(()=>Nu),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{re as A,$e as a,$ as b,bt as c,gt as d,xe as i,wt as m,N as r,Se as t};
//# sourceMappingURL=index-BzaPSnLT.js.map
