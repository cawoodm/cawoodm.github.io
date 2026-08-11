(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const nb="modulepreload",rb=function(e){return"/easydbaccess3/"+e},ku={},Ie=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=o(n.map(d=>{if(d=rb(d),d in ku)return;ku[d]=!0;const f=d.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const b=document.createElement("link");if(b.rel=f?"stylesheet":nb,f||(b.as="script"),b.crossOrigin="",b.href=d,c&&b.setAttribute("nonce",c),document.head.appendChild(b),f)return new Promise((y,v)=>{b.addEventListener("load",y),b.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=globalThis,kl=ws.ShadowRoot&&(ws.ShadyCSS===void 0||ws.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$l=Symbol(),$u=new WeakMap;let Mh=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==$l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(kl&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=$u.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&$u.set(n,t))}return t}toString(){return this.cssText}};const ib=e=>new Mh(typeof e=="string"?e:e+"",void 0,$l),Ce=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Mh(n,e,$l)},sb=(e,t)=>{if(kl)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=ws.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},xu=kl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ib(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ob,defineProperty:ab,getOwnPropertyDescriptor:lb,getOwnPropertyNames:cb,getOwnPropertySymbols:ub,getPrototypeOf:db}=Object,Qs=globalThis,Su=Qs.trustedTypes,hb=Su?Su.emptyScript:"",fb=Qs.reactiveElementPolyfillSupport,ei=(e,t)=>e,Is={toAttribute(e,t){switch(t){case Boolean:e=e?hb:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},xl=(e,t)=>!ob(e,t),Cu={attribute:!0,type:String,converter:Is,reflect:!1,useDefault:!1,hasChanged:xl};Symbol.metadata??=Symbol("metadata"),Qs.litPropertyMetadata??=new WeakMap;let tr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Cu){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&ab(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=lb(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const a=i?.call(this);s?.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Cu}static _$Ei(){if(this.hasOwnProperty(ei("elementProperties")))return;const t=db(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ei("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ei("properties"))){const n=this.properties,r=[...cb(n),...ub(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(xu(i))}else t!==void 0&&n.push(xu(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sb(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:Is).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Is;this._$Em=i;const a=o.fromAttribute(n,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,n,r,i=!1,s){if(t!==void 0){const o=this.constructor;if(i===!1&&(s=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??xl)(s,n)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r){const{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};tr.elementStyles=[],tr.shadowRootOptions={mode:"open"},tr[ei("elementProperties")]=new Map,tr[ei("finalized")]=new Map,fb?.({ReactiveElement:tr}),(Qs.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sl=globalThis,_u=e=>e,As=Sl.trustedTypes,Eu=As?As.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ph="$lit$",cn=`lit$${Math.random().toFixed(9).slice(2)}$`,Nh="?"+cn,pb=`<${Nh}>`,Pn=document,si=()=>Pn.createComment(""),oi=e=>e===null||typeof e!="object"&&typeof e!="function",Cl=Array.isArray,mb=e=>Cl(e)||typeof e?.[Symbol.iterator]=="function",va=`[ 	
\f\r]`,Hr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tu=/-->/g,Iu=/>/g,Tn=RegExp(`>|${va}(?:([^\\s"'>=/]+)(${va}*=${va}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Au=/'/g,Ru=/"/g,jh=/^(?:script|style|textarea|title)$/i,gb=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),k=gb(1),Nn=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),Ou=new WeakMap,Dn=Pn.createTreeWalker(Pn,129);function zh(e,t){if(!Cl(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Eu!==void 0?Eu.createHTML(t):t}const bb=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=Hr;for(let a=0;a<n;a++){const c=e[a];let d,f,m=-1,b=0;for(;b<c.length&&(o.lastIndex=b,f=o.exec(c),f!==null);)b=o.lastIndex,o===Hr?f[1]==="!--"?o=Tu:f[1]!==void 0?o=Iu:f[2]!==void 0?(jh.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=Tn):f[3]!==void 0&&(o=Tn):o===Tn?f[0]===">"?(o=i??Hr,m=-1):f[1]===void 0?m=-2:(m=o.lastIndex-f[2].length,d=f[1],o=f[3]===void 0?Tn:f[3]==='"'?Ru:Au):o===Ru||o===Au?o=Tn:o===Tu||o===Iu?o=Hr:(o=Tn,i=void 0);const y=o===Tn&&e[a+1].startsWith("/>")?" ":"";s+=o===Hr?c+pb:m>=0?(r.push(d),c.slice(0,m)+Ph+c.slice(m)+cn+y):c+cn+(m===-2?a:y)}return[zh(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class ai{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,c=this.parts,[d,f]=bb(t,n);if(this.el=ai.createElement(d,r),Dn.currentNode=this.el.content,n===2||n===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=Dn.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const m of i.getAttributeNames())if(m.endsWith(Ph)){const b=f[o++],y=i.getAttribute(m).split(cn),v=/([.?@])?(.*)/.exec(b);c.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?yb:v[1]==="?"?vb:v[1]==="@"?kb:Js}),i.removeAttribute(m)}else m.startsWith(cn)&&(c.push({type:6,index:s}),i.removeAttribute(m));if(jh.test(i.tagName)){const m=i.textContent.split(cn),b=m.length-1;if(b>0){i.textContent=As?As.emptyScript:"";for(let y=0;y<b;y++)i.append(m[y],si()),Dn.nextNode(),c.push({type:2,index:++s});i.append(m[b],si())}}}else if(i.nodeType===8)if(i.data===Nh)c.push({type:2,index:s});else{let m=-1;for(;(m=i.data.indexOf(cn,m+1))!==-1;)c.push({type:7,index:s}),m+=cn.length-1}s++}}static createElement(t,n){const r=Pn.createElement("template");return r.innerHTML=t,r}}function cr(e,t,n=e,r){if(t===Nn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=oi(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=cr(e,i._$AS(e,t.values),i,r)),t}class wb{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Pn).importNode(n,!0);Dn.currentNode=i;let s=Dn.nextNode(),o=0,a=0,c=r[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new bi(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new $b(s,this,t)),this._$AV.push(d),c=r[++a]}o!==c?.index&&(s=Dn.nextNode(),o++)}return Dn.currentNode=Pn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class bi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=cr(this,t,n),oi(t)?t===ee||t==null||t===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):t!==this._$AH&&t!==Nn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mb(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ee&&oi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ai.createElement(zh(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new wb(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=Ou.get(t.strings);return n===void 0&&Ou.set(t.strings,n=new ai(t)),n}k(t){Cl(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new bi(this.O(si()),this.O(si()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=_u(t).nextSibling;_u(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Js{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ee}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=cr(this,t,n,0),o=!oi(t)||t!==this._$AH&&t!==Nn,o&&(this._$AH=t);else{const a=t;let c,d;for(t=s[0],c=0;c<s.length-1;c++)d=cr(this,a[r+c],n,c),d===Nn&&(d=this._$AH[c]),o||=!oi(d)||d!==this._$AH[c],d===ee?t=ee:t!==ee&&(t+=(d??"")+s[c+1]),this._$AH[c]=d}o&&!i&&this.j(t)}j(t){t===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yb extends Js{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ee?void 0:t}}class vb extends Js{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ee)}}class kb extends Js{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=cr(this,t,n,0)??ee)===Nn)return;const r=this._$AH,i=t===ee&&r!==ee||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==ee&&(r===ee||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class $b{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){cr(this,t)}}const xb=Sl.litHtmlPolyfillSupport;xb?.(ai,bi),(Sl.litHtmlVersions??=[]).push("3.3.3");const Sb=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new bi(t.insertBefore(si(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _l=globalThis;let xe=class extends tr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Sb(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Nn}};xe._$litElement$=!0,xe.finalized=!0,_l.litElementHydrateSupport?.({LitElement:xe});const Cb=_l.litElementPolyfillSupport;Cb?.({LitElement:xe});(_l.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _b={attribute:!0,type:String,converter:Is,reflect:!1,hasChanged:xl},Eb=(e=_b,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,c,e,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(r==="setter"){const{name:o}=n;return function(a){const c=this[o];t.call(this,a),this.requestUpdate(o,c,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function Xe(e){return(t,n)=>typeof n=="object"?Eb(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(e){return Xe({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tb=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kt(e,t){return(n,r,i)=>{const s=o=>o.renderRoot?.querySelector(e)??null;return Tb(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ib={CHILD:2},Fh=e=>(...t)=>({_$litDirective$:e,values:t});class Ab{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rs extends Ab{constructor(t){if(super(t),this.it=ee,t.type!==Ib.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ee||t==null)return this._t=void 0,this.it=t;if(t===Nn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Rs.directiveName="unsafeHTML",Rs.resultType=1;const ar=Fh(Rs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class za extends Rs{}za.directiveName="unsafeSVG",za.resultType=2;const El=Fh(za),mt=Ce`
  :host {
    display: contents;
  }
  dialog {
    position: relative;
    border: 0;
    border-radius: var(--dlg-radius, 0.5rem);
    padding: 0;
    /* Canvas is the UA default for <dialog> — naming it keeps the current
       look while giving a themer one property to override. */
    background: var(--dlg-surface, Canvas);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    font-family: var(--dlg-font, system-ui, sans-serif);
    overflow: hidden;
    max-height: 92vh;
  }
  dialog::backdrop {
    background: var(--dlg-backdrop, rgba(15, 23, 42, 0.4));
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
    background: var(--dlg-header-bg, #1f2937);
    color: var(--dlg-header-fg, white);
    border-bottom: 1px solid #111827;
    /* Whole bar is the drag handle (draggable.ts wires pointer events);
       cursor is set inline by the helper as it toggles between grab and
       grabbing. */
  }
  .dialog-header h2 {
    margin: 0;
    font-size: 1.05rem;
    color: var(--dlg-header-fg, white);
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
    color: var(--dlg-header-fg, white);
    background: rgba(255, 255, 255, 0.12);
  }
  button.primary {
    background: var(--dlg-accent, #3b82f6);
    color: var(--dlg-accent-fg, white);
    border: 0;
    padding: 0.45rem 0.9rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font: inherit;
  }
  button.primary:hover {
    background: var(--dlg-accent-hover, #2563eb);
  }
  button.ghost {
    background: transparent;
    border: 1px solid var(--dlg-border, #d1d5db);
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
    color: var(--dlg-header-fg, white);
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
`;function gt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const Du=new WeakSet;function bt(e,t){if(Du.has(t))return;Du.add(t);let n=0,r=0,i=0,s=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",c=>{if(c.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=c.clientX,r=c.clientY;const f=e.getBoundingClientRect();i=f.left,s=f.top,t.setPointerCapture(c.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",c=>{if(!o)return;const d=c.clientX-n,f=c.clientY-r,m=-e.offsetWidth+80,b=window.innerWidth-80,y=0,v=window.innerHeight-40,$=Math.max(m,Math.min(b,i+d)),C=Math.max(y,Math.min(v,s+f));e.style.position="fixed",e.style.left=`${$}px`,e.style.top=`${C}px`,e.style.margin="0"});const a=c=>{if(o){o=!1;try{t.releasePointerCapture(c.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)}var Rb=function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class lt extends xe{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=t=>{t.preventDefault();const n=this.current;n&&(n.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=t=>{t.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=t=>{if(t.preventDefault(),this.current?.kind!=="choice")return;const n=this.current.options[0];n!==void 0&&this.closeAndResolve(n)},this.submitAlert=t=>{t.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}static{this.instance=null}static{this.styles=[mt,Ce`
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
        color: var(--dlg-text, #374151);
        white-space: pre-wrap;
        font-size: 0.95rem;
      }
      input[type='text'] {
        font: inherit;
        padding: 0.45rem 0.55rem;
        border: 1px solid var(--dlg-border, #d1d5db);
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
        background: var(--dlg-surface, Canvas);
        border: 1px solid var(--dlg-border, #d1d5db);
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
        background: var(--dlg-accent, #3b82f6);
        color: var(--dlg-accent-fg, white);
        border: 0;
        text-align: left;
      }
      button.choice.primary:hover {
        background: var(--dlg-accent-hover, #2563eb);
      }
      button.choice.primary:focus-visible {
        outline: 2px solid #1d4ed8;
        outline-offset: 2px;
      }
    `]}connectedCallback(){super.connectedCallback(),lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),lt.instance===this&&(lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const t=this.shadowRoot?.querySelector(".dialog-header");t&&bt(this.dialogEl,t)}alert(t,n="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:n,message:t,resolve:r}})}async confirm(t,n="Confirm"){return await this.choice(t,["Yes","No"],n)==="Yes"}prompt(t,n="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:t,value:n,resolve:i}})}choice(t,n,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:t,options:n,resolve:i}})}enqueue(t){return new Promise(n=>{const r=()=>{t(n),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(t){const n=this.current;n&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{n.kind==="alert"?n.resolve():n.resolve(t);const r=this.queue.shift();r&&r()}))}render(){const t=this.current;return k`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${t?this.renderBody(t):ee}
      </dialog>
    `}renderBody(t){switch(t.kind){case"alert":return k`
          <form @submit=${this.submitAlert}>
            <div class="dialog-header">
              <h2>${t.title}</h2>
              <div class="header-actions">
                <button type="submit" class="primary">OK</button>
              </div>
            </div>
            <div class="dialog-body">
              <p class="message">${t.message}</p>
            </div>
          </form>
        `;case"prompt":return k`
          <form @submit=${this.submitPrompt}>
            <div class="dialog-header">
              <h2>${t.title}</h2>
              <div class="header-actions">
                <button type="button" class="ghost" @click=${this.cancelPrompt}>Cancel</button>
                <button type="submit" class="primary">OK</button>
              </div>
            </div>
            <div class="dialog-body">
              <p class="message">${t.message}</p>
              <input
                type="text"
                autofocus
                .value=${t.value}
                @input=${n=>{this.current?.kind==="prompt"&&(this.current={...this.current,value:n.target.value})}}
              />
            </div>
          </form>
        `;case"choice":return k`
          <form @submit=${this.submitChoice}>
            <div class="dialog-header">
              <h2>${t.title}</h2>
              <div class="header-actions">
                <button type="button" class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
              </div>
            </div>
            <div class="dialog-body">
              ${t.message?k`<p class="message">${t.message}</p>`:ee}
              <div class="choices">
                ${t.options.map((n,r)=>r===0?k`<button type="submit" class="choice primary" autofocus>${n}</button>`:k`<button type="button" class="choice" @click=${()=>this.closeAndResolve(n)}>${n}</button>`)}
              </div>
            </div>
          </form>
        `}}}Rb([z()],lt.prototype,"current",void 0);function Ob(e="host-dialogs"){customElements.get(e)||customElements.define(e,lt)}const Db=Ce`
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
`,Lu=/(https?:\/\/[^\s)]+)/g;function Lb(e){const t=[];let n=0,r;for(Lu.lastIndex=0;(r=Lu.exec(e))!==null;)r.index>n&&t.push(e.slice(n,r.index)),t.push({url:r[0]}),n=r.index+r[0].length;return n===0?e:(n<e.length&&t.push(e.slice(n)),t.map(i=>typeof i=="string"?i:k`<a href=${i.url} target="_blank" rel="noopener noreferrer">${i.url}</a>`))}var Mb=function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class Mn extends xe{constructor(){super(...arguments),this.toasts=[],this.nextId=1}static{this.instance=null}static{this.styles=[Db,Ce`
      :host {
        position: fixed;
        /* Clears the host app's header bar; easyDBAccess's is 56px tall. */
        top: var(--toast-top, 56px);
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
        background: var(--toast-surface, Canvas);
        border-radius: var(--toast-radius, 0.35rem);
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
        border-left-color: var(--toast-success, #16a34a);
      }
      .toast.error {
        border-left-color: var(--toast-error, #dc2626);
      }
      .toast.warning {
        border-left-color: var(--toast-warning, #d97706);
      }
      .toast.info {
        border-left-color: var(--toast-info, #2563eb);
      }
      .toast .mi.lg {
        font-size: 1.4rem;
      }
      .toast.success .mi {
        color: var(--toast-success, #16a34a);
      }
      .toast.error .mi {
        color: var(--toast-error, #dc2626);
      }
      .toast.warning .mi {
        color: var(--toast-warning, #d97706);
      }
      .toast.info .mi {
        color: var(--toast-info, #2563eb);
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
        color: var(--toast-info, #2563eb);
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
    `]}connectedCallback(){super.connectedCallback(),Mn.instance=this}disconnectedCallback(){super.disconnectedCallback(),Mn.instance===this&&(Mn.instance=null)}show(t,n){const r={id:this.nextId++,kind:n?.kind??"info",message:t,...n?.title?{title:n.title}:{}};this.toasts=[...this.toasts,r];const i=n?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(t){const n=this.toasts.find(r=>r.id===t);n?.timer!=null&&window.clearTimeout(n.timer),this.toasts=this.toasts.filter(r=>r.id!==t)}render(){return k`
      ${this.toasts.map(t=>k`
          <div class="toast ${t.kind}" role="status">
            <span class="mi lg">${Pb(t.kind)}</span>
            <span class="body"> ${t.title?k`<strong>${t.title}</strong>`:""}${Lb(t.message)} </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(t.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}}Mb([z()],Mn.prototype,"toasts",void 0);function Pb(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Nb(e="toast-host"){customElements.get(e)||customElements.define(e,Mn)}var jb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function X2(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var ys={exports:{}},Fb=ys.exports,Mu;function Ub(){return Mu||(Mu=1,(function(e,t){(function(n,r){e.exports=r()})(Fb,function(){var n=function(l,u){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,p){h.__proto__=p}||function(h,p){for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(h[g]=p[g])})(l,u)},r=function(){return(r=Object.assign||function(l){for(var u,h=1,p=arguments.length;h<p;h++)for(var g in u=arguments[h])Object.prototype.hasOwnProperty.call(u,g)&&(l[g]=u[g]);return l}).apply(this,arguments)};function i(l,u,h){for(var p,g=0,w=u.length;g<w;g++)!p&&g in u||((p=p||Array.prototype.slice.call(u,0,g))[g]=u[g]);return l.concat(p||Array.prototype.slice.call(u))}var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:jb,o=Object.keys,a=Array.isArray;function c(l,u){return typeof u!="object"||o(u).forEach(function(h){l[h]=u[h]}),l}typeof Promise>"u"||s.Promise||(s.Promise=Promise);var d=Object.getPrototypeOf,f={}.hasOwnProperty;function m(l,u){return f.call(l,u)}function b(l,u){typeof u=="function"&&(u=u(d(l))),(typeof Reflect>"u"?o:Reflect.ownKeys)(u).forEach(function(h){v(l,h,u[h])})}var y=Object.defineProperty;function v(l,u,h,p){y(l,u,c(h&&m(h,"get")&&typeof h.get=="function"?{get:h.get,set:h.set,configurable:!0}:{value:h,configurable:!0,writable:!0},p))}function $(l){return{from:function(u){return l.prototype=Object.create(u.prototype),v(l.prototype,"constructor",l),{extend:b.bind(null,l.prototype)}}}}var C=Object.getOwnPropertyDescriptor,E=[].slice;function T(l,u,h){return E.call(l,u,h)}function Q(l,u){return u(l)}function P(l){if(!l)throw new Error("Assertion Failed")}function ne(l){s.setImmediate?setImmediate(l):setTimeout(l,0)}function W(l,u){if(typeof u=="string"&&m(l,u))return l[u];if(!u)return l;if(typeof u!="string"){for(var h=[],p=0,g=u.length;p<g;++p){var w=W(l,u[p]);h.push(w)}return h}var x=u.indexOf(".");if(x!==-1){var S=l[u.substr(0,x)];return S==null?void 0:W(S,u.substr(x+1))}}function I(l,u,h){if(l&&u!==void 0&&!("isFrozen"in Object&&Object.isFrozen(l)))if(typeof u!="string"&&"length"in u){P(typeof h!="string"&&"length"in h);for(var p=0,g=u.length;p<g;++p)I(l,u[p],h[p])}else{var w,x,S=u.indexOf(".");S!==-1?(w=u.substr(0,S),(x=u.substr(S+1))===""?h===void 0?a(l)&&!isNaN(parseInt(w))?l.splice(w,1):delete l[w]:l[w]=h:I(S=!(S=l[w])||!m(l,w)?l[w]={}:S,x,h)):h===void 0?a(l)&&!isNaN(parseInt(u))?l.splice(u,1):delete l[u]:l[u]=h}}function V(l){var u,h={};for(u in l)m(l,u)&&(h[u]=l[u]);return h}var K=[].concat;function ie(l){return K.apply([],l)}var Gt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ie([8,16,32,64].map(function(l){return["Int","Uint","Float"].map(function(u){return u+l+"Array"})}))).filter(function(l){return s[l]}),de=new Set(Gt.map(function(l){return s[l]})),H=null;function te(l){return H=new WeakMap,l=(function u(h){if(!h||typeof h!="object")return h;var p=H.get(h);if(p)return p;if(a(h)){p=[],H.set(h,p);for(var g=0,w=h.length;g<w;++g)p.push(u(h[g]))}else if(de.has(h.constructor))p=h;else{var x,S=d(h);for(x in p=S===Object.prototype?{}:Object.create(S),H.set(h,p),h)m(h,x)&&(p[x]=u(h[x]))}return p})(l),H=null,l}var q={}.toString;function Y(l){return q.call(l).slice(8,-1)}var ae=typeof Symbol<"u"?Symbol.iterator:"@@iterator",we=typeof ae=="symbol"?function(l){var u;return l!=null&&(u=l[ae])&&u.apply(l)}:function(){return null};function $e(l,u){return u=l.indexOf(u),0<=u&&l.splice(u,1),0<=u}var Le={};function pe(l){var u,h,p,g;if(arguments.length===1){if(a(l))return l.slice();if(this===Le&&typeof l=="string")return[l];if(g=we(l)){for(h=[];!(p=g.next()).done;)h.push(p.value);return h}if(l==null)return[l];if(typeof(u=l.length)!="number")return[l];for(h=new Array(u);u--;)h[u]=l[u];return h}for(u=arguments.length,h=new Array(u);u--;)h[u]=arguments[u];return h}var yt=typeof Symbol<"u"?function(l){return l[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Or=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],_t=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Or),Lt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function He(l,u){this.name=l,this.message=u}function me(l,u){return l+". Errors: "+Object.keys(u).map(function(h){return u[h].toString()}).filter(function(h,p,g){return g.indexOf(h)===p}).join(`
`)}function Ne(l,u,h,p){this.failures=u,this.failedKeys=p,this.successCount=h,this.message=me(l,u)}function bn(l,u){this.name="BulkError",this.failures=Object.keys(u).map(function(h){return u[h]}),this.failuresByPos=u,this.message=me(l,this.failures)}$(He).from(Error).extend({toString:function(){return this.name+": "+this.message}}),$(Ne).from(He),$(bn).from(He);var Wn=_t.reduce(function(l,u){return l[u]=u+"Error",l},{}),Cg=He,fe=_t.reduce(function(l,u){var h=u+"Error";function p(g,w){this.name=h,g?typeof g=="string"?(this.message="".concat(g).concat(w?`
 `+w:""),this.inner=w||null):typeof g=="object"&&(this.message="".concat(g.name," ").concat(g.message),this.inner=g):(this.message=Lt[u]||h,this.inner=null)}return $(p).from(Cg),l[u]=p,l},{});fe.Syntax=SyntaxError,fe.Type=TypeError,fe.Range=RangeError;var Uc=Or.reduce(function(l,u){return l[u+"Error"]=fe[u],l},{}),Ai=_t.reduce(function(l,u){return["Syntax","Type","Range"].indexOf(u)===-1&&(l[u+"Error"]=fe[u]),l},{});function Te(){}function Ar(l){return l}function _g(l,u){return l==null||l===Ar?u:function(h){return u(l(h))}}function wn(l,u){return function(){l.apply(this,arguments),u.apply(this,arguments)}}function Eg(l,u){return l===Te?u:function(){var h=l.apply(this,arguments);h!==void 0&&(arguments[0]=h);var p=this.onsuccess,g=this.onerror;this.onsuccess=null,this.onerror=null;var w=u.apply(this,arguments);return p&&(this.onsuccess=this.onsuccess?wn(p,this.onsuccess):p),g&&(this.onerror=this.onerror?wn(g,this.onerror):g),w!==void 0?w:h}}function Tg(l,u){return l===Te?u:function(){l.apply(this,arguments);var h=this.onsuccess,p=this.onerror;this.onsuccess=this.onerror=null,u.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?wn(h,this.onsuccess):h),p&&(this.onerror=this.onerror?wn(p,this.onerror):p)}}function Ig(l,u){return l===Te?u:function(h){var p=l.apply(this,arguments);c(h,p);var g=this.onsuccess,w=this.onerror;return this.onsuccess=null,this.onerror=null,h=u.apply(this,arguments),g&&(this.onsuccess=this.onsuccess?wn(g,this.onsuccess):g),w&&(this.onerror=this.onerror?wn(w,this.onerror):w),p===void 0?h===void 0?void 0:h:c(p,h)}}function Ag(l,u){return l===Te?u:function(){return u.apply(this,arguments)!==!1&&l.apply(this,arguments)}}function jo(l,u){return l===Te?u:function(){var h=l.apply(this,arguments);if(h&&typeof h.then=="function"){for(var p=this,g=arguments.length,w=new Array(g);g--;)w[g]=arguments[g];return h.then(function(){return u.apply(p,w)})}return u.apply(this,arguments)}}Ai.ModifyError=Ne,Ai.DexieError=He,Ai.BulkError=bn;var Ut=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Bc(l){Ut=l}var Rr={},qc=100,Gt=typeof Promise>"u"?[]:(function(){var l=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[l,d(l),l];var u=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[u,d(u),l]})(),Or=Gt[0],_t=Gt[1],Gt=Gt[2],_t=_t&&_t.then,yn=Or&&Or.constructor,zo=!!Gt,Dr=function(l,u){Lr.push([l,u]),Ri&&(queueMicrotask(Og),Ri=!1)},Fo=!0,Ri=!0,vn=[],Oi=[],Uo=Ar,en={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Te,pgp:!1,env:{},finalize:Te},he=en,Lr=[],kn=0,Di=[];function ce(l){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var u=this._PSD=he;if(typeof l!="function"){if(l!==Rr)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&qo(this,this._value))}this._state=null,this._value=null,++u.ref,(function h(p,g){try{g(function(w){if(p._state===null){if(w===p)throw new TypeError("A promise cannot be resolved with itself.");var x=p._lib&&Gn();w&&typeof w.then=="function"?h(p,function(S,A){w instanceof ce?w._then(S,A):w.then(S,A)}):(p._state=!0,p._value=w,Vc(p)),x&&Yn()}},qo.bind(null,p))}catch(w){qo(p,w)}})(this,l)}var Bo={get:function(){var l=he,u=Ni;function h(p,g){var w=this,x=!l.global&&(l!==he||u!==Ni),S=x&&!nn(),A=new ce(function(O,M){Ho(w,new Hc(Wc(p,l,x,S),Wc(g,l,x,S),O,M,l))});return this._consoleTask&&(A._consoleTask=this._consoleTask),A}return h.prototype=Rr,h},set:function(l){v(this,"then",l&&l.prototype===Rr?Bo:{get:function(){return l},set:Bo.set})}};function Hc(l,u,h,p,g){this.onFulfilled=typeof l=="function"?l:null,this.onRejected=typeof u=="function"?u:null,this.resolve=h,this.reject=p,this.psd=g}function qo(l,u){var h,p;Oi.push(u),l._state===null&&(h=l._lib&&Gn(),u=Uo(u),l._state=!1,l._value=u,p=l,vn.some(function(g){return g._value===p._value})||vn.push(p),Vc(l),h&&Yn())}function Vc(l){var u=l._listeners;l._listeners=[];for(var h=0,p=u.length;h<p;++h)Ho(l,u[h]);var g=l._PSD;--g.ref||g.finalize(),kn===0&&(++kn,Dr(function(){--kn==0&&Vo()},[]))}function Ho(l,u){if(l._state!==null){var h=l._state?u.onFulfilled:u.onRejected;if(h===null)return(l._state?u.resolve:u.reject)(l._value);++u.psd.ref,++kn,Dr(Rg,[h,l,u])}else l._listeners.push(u)}function Rg(l,u,h){try{var p,g=u._value;!u._state&&Oi.length&&(Oi=[]),p=Ut&&u._consoleTask?u._consoleTask.run(function(){return l(g)}):l(g),u._state||Oi.indexOf(g)!==-1||(function(w){for(var x=vn.length;x;)if(vn[--x]._value===w._value)return vn.splice(x,1)})(u),h.resolve(p)}catch(w){h.reject(w)}finally{--kn==0&&Vo(),--h.psd.ref||h.psd.finalize()}}function Og(){$n(en,function(){Gn()&&Yn()})}function Gn(){var l=Fo;return Ri=Fo=!1,l}function Yn(){var l,u,h;do for(;0<Lr.length;)for(l=Lr,Lr=[],h=l.length,u=0;u<h;++u){var p=l[u];p[0].apply(null,p[1])}while(0<Lr.length);Ri=Fo=!0}function Vo(){var l=vn;vn=[],l.forEach(function(p){p._PSD.onunhandled.call(null,p._value,p)});for(var u=Di.slice(0),h=u.length;h;)u[--h]()}function Li(l){return new ce(Rr,!1,l)}function Me(l,u){var h=he;return function(){var p=Gn(),g=he;try{return rn(h,!0),l.apply(this,arguments)}catch(w){u&&u(w)}finally{rn(g,!1),p&&Yn()}}}b(ce.prototype,{then:Bo,_then:function(l,u){Ho(this,new Hc(null,null,l,u,he))},catch:function(l){if(arguments.length===1)return this.then(null,l);var u=l,h=arguments[1];return typeof u=="function"?this.then(null,function(p){return(p instanceof u?h:Li)(p)}):this.then(null,function(p){return(p&&p.name===u?h:Li)(p)})},finally:function(l){return this.then(function(u){return ce.resolve(l()).then(function(){return u})},function(u){return ce.resolve(l()).then(function(){return Li(u)})})},timeout:function(l,u){var h=this;return l<1/0?new ce(function(p,g){var w=setTimeout(function(){return g(new fe.Timeout(u))},l);h.then(p,g).finally(clearTimeout.bind(null,w))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&v(ce.prototype,Symbol.toStringTag,"Dexie.Promise"),en.env=Kc(),b(ce,{all:function(){var l=pe.apply(null,arguments).map(ji);return new ce(function(u,h){l.length===0&&u([]);var p=l.length;l.forEach(function(g,w){return ce.resolve(g).then(function(x){l[w]=x,--p||u(l)},h)})})},resolve:function(l){return l instanceof ce?l:l&&typeof l.then=="function"?new ce(function(u,h){l.then(u,h)}):new ce(Rr,!0,l)},reject:Li,race:function(){var l=pe.apply(null,arguments).map(ji);return new ce(function(u,h){l.map(function(p){return ce.resolve(p).then(u,h)})})},PSD:{get:function(){return he},set:function(l){return he=l}},totalEchoes:{get:function(){return Ni}},newPSD:tn,usePSD:$n,scheduler:{get:function(){return Dr},set:function(l){Dr=l}},rejectionMapper:{get:function(){return Uo},set:function(l){Uo=l}},follow:function(l,u){return new ce(function(h,p){return tn(function(g,w){var x=he;x.unhandleds=[],x.onunhandled=w,x.finalize=wn(function(){var S,A=this;S=function(){A.unhandleds.length===0?g():w(A.unhandleds[0])},Di.push(function O(){S(),Di.splice(Di.indexOf(O),1)}),++kn,Dr(function(){--kn==0&&Vo()},[])},x.finalize),l()},u,h,p)})}}),yn&&(yn.allSettled&&v(ce,"allSettled",function(){var l=pe.apply(null,arguments).map(ji);return new ce(function(u){l.length===0&&u([]);var h=l.length,p=new Array(h);l.forEach(function(g,w){return ce.resolve(g).then(function(x){return p[w]={status:"fulfilled",value:x}},function(x){return p[w]={status:"rejected",reason:x}}).then(function(){return--h||u(p)})})})}),yn.any&&typeof AggregateError<"u"&&v(ce,"any",function(){var l=pe.apply(null,arguments).map(ji);return new ce(function(u,h){l.length===0&&h(new AggregateError([]));var p=l.length,g=new Array(p);l.forEach(function(w,x){return ce.resolve(w).then(function(S){return u(S)},function(S){g[x]=S,--p||h(new AggregateError(g))})})})}),yn.withResolvers&&(ce.withResolvers=yn.withResolvers));var Ve={awaits:0,echoes:0,id:0},Dg=0,Mi=[],Pi=0,Ni=0,Lg=0;function tn(l,u,h,p){var g=he,w=Object.create(g);return w.parent=g,w.ref=0,w.global=!1,w.id=++Lg,en.env,w.env=zo?{Promise:ce,PromiseProp:{value:ce,configurable:!0,writable:!0},all:ce.all,race:ce.race,allSettled:ce.allSettled,any:ce.any,resolve:ce.resolve,reject:ce.reject}:{},u&&c(w,u),++g.ref,w.finalize=function(){--this.parent.ref||this.parent.finalize()},p=$n(w,l,h,p),w.ref===0&&w.finalize(),p}function Qn(){return Ve.id||(Ve.id=++Dg),++Ve.awaits,Ve.echoes+=qc,Ve.id}function nn(){return!!Ve.awaits&&(--Ve.awaits==0&&(Ve.id=0),Ve.echoes=Ve.awaits*qc,!0)}function ji(l){return Ve.echoes&&l&&l.constructor===yn?(Qn(),l.then(function(u){return nn(),u},function(u){return nn(),ze(u)})):l}function Mg(){var l=Mi[Mi.length-1];Mi.pop(),rn(l,!1)}function rn(l,u){var h,p=he;(u?!Ve.echoes||Pi++&&l===he:!Pi||--Pi&&l===he)||queueMicrotask(u?function(g){++Ni,Ve.echoes&&--Ve.echoes!=0||(Ve.echoes=Ve.awaits=Ve.id=0),Mi.push(he),rn(g,!0)}.bind(null,l):Mg),l!==he&&(he=l,p===en&&(en.env=Kc()),zo&&(h=en.env.Promise,u=l.env,(p.global||l.global)&&(Object.defineProperty(s,"Promise",u.PromiseProp),h.all=u.all,h.race=u.race,h.resolve=u.resolve,h.reject=u.reject,u.allSettled&&(h.allSettled=u.allSettled),u.any&&(h.any=u.any))))}function Kc(){var l=s.Promise;return zo?{Promise:l,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:l.all,race:l.race,allSettled:l.allSettled,any:l.any,resolve:l.resolve,reject:l.reject}:{}}function $n(l,u,h,p,g){var w=he;try{return rn(l,!0),u(h,p,g)}finally{rn(w,!1)}}function Wc(l,u,h,p){return typeof l!="function"?l:function(){var g=he;h&&Qn(),rn(u,!0);try{return l.apply(this,arguments)}finally{rn(g,!1),p&&queueMicrotask(nn)}}}function Ko(l){Promise===yn&&Ve.echoes===0?Pi===0?l():enqueueNativeMicroTask(l):setTimeout(l,0)}(""+_t).indexOf("[native code]")===-1&&(Qn=nn=Te);var ze=ce.reject,xn="￿",Wt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Gc="String expected.",Jn=[],zi="__dbnames",Wo="readonly",Go="readwrite";function Sn(l,u){return l?u?function(){return l.apply(this,arguments)&&u.apply(this,arguments)}:l:u}var Yc={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Fi(l){return typeof l!="string"||/\./.test(l)?function(u){return u}:function(u){return u[l]===void 0&&l in u&&delete(u=te(u))[l],u}}function Qc(){throw fe.Type()}function Se(l,u){try{var h=Jc(l),p=Jc(u);if(h!==p)return h==="Array"?1:p==="Array"?-1:h==="binary"?1:p==="binary"?-1:h==="string"?1:p==="string"?-1:h==="Date"?1:p!=="Date"?NaN:-1;switch(h){case"number":case"Date":case"string":return u<l?1:l<u?-1:0;case"binary":return(function(g,w){for(var x=g.length,S=w.length,A=x<S?x:S,O=0;O<A;++O)if(g[O]!==w[O])return g[O]<w[O]?-1:1;return x===S?0:x<S?-1:1})(Xc(l),Xc(u));case"Array":return(function(g,w){for(var x=g.length,S=w.length,A=x<S?x:S,O=0;O<A;++O){var M=Se(g[O],w[O]);if(M!==0)return M}return x===S?0:x<S?-1:1})(l,u)}}catch{}return NaN}function Jc(l){var u=typeof l;return u!="object"?u:ArrayBuffer.isView(l)?"binary":(l=Y(l),l==="ArrayBuffer"?"binary":l)}function Xc(l){return l instanceof Uint8Array?l:ArrayBuffer.isView(l)?new Uint8Array(l.buffer,l.byteOffset,l.byteLength):new Uint8Array(l)}var Zc=(De.prototype._trans=function(l,u,h){var p=this._tx||he.trans,g=this.name,w=Ut&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(l==="readonly"?"read":"write"," ").concat(this.name));function x(O,M,_){if(!_.schema[g])throw new fe.NotFound("Table "+g+" not part of transaction");return u(_.idbtrans,_)}var S=Gn();try{var A=p&&p.db._novip===this.db._novip?p===he.trans?p._promise(l,x,h):tn(function(){return p._promise(l,x,h)},{trans:p,transless:he.transless||he}):(function O(M,_,j,R){if(M.idbdb&&(M._state.openComplete||he.letThrough||M._vip)){var L=M._createTransaction(_,j,M._dbSchema);try{L.create(),M._state.PR1398_maxLoop=3}catch(N){return N.name===Wn.InvalidState&&M.isOpen()&&0<--M._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),M.close({disableAutoOpen:!1}),M.open().then(function(){return O(M,_,j,R)})):ze(N)}return L._promise(_,function(N,D){return tn(function(){return he.trans=L,R(N,D,L)})}).then(function(N){if(_==="readwrite")try{L.idbtrans.commit()}catch{}return _==="readonly"?N:L._completion.then(function(){return N})})}if(M._state.openComplete)return ze(new fe.DatabaseClosed(M._state.dbOpenError));if(!M._state.isBeingOpened){if(!M._state.autoOpen)return ze(new fe.DatabaseClosed);M.open().catch(Te)}return M._state.dbReadyPromise.then(function(){return O(M,_,j,R)})})(this.db,l,[this.name],x);return w&&(A._consoleTask=w,A=A.catch(function(O){return console.trace(O),ze(O)})),A}finally{S&&Yn()}},De.prototype.get=function(l,u){var h=this;return l&&l.constructor===Object?this.where(l).first(u):l==null?ze(new fe.Type("Invalid argument to Table.get()")):this._trans("readonly",function(p){return h.core.get({trans:p,key:l}).then(function(g){return h.hook.reading.fire(g)})}).then(u)},De.prototype.where=function(l){if(typeof l=="string")return new this.db.WhereClause(this,l);if(a(l))return new this.db.WhereClause(this,"[".concat(l.join("+"),"]"));var u=o(l);if(u.length===1)return this.where(u[0]).equals(l[u[0]]);var h=this.schema.indexes.concat(this.schema.primKey).filter(function(S){if(S.compound&&u.every(function(O){return 0<=S.keyPath.indexOf(O)})){for(var A=0;A<u.length;++A)if(u.indexOf(S.keyPath[A])===-1)return!1;return!0}return!1}).sort(function(S,A){return S.keyPath.length-A.keyPath.length})[0];if(h&&this.db._maxKey!==xn){var w=h.keyPath.slice(0,u.length);return this.where(w).equals(w.map(function(A){return l[A]}))}!h&&Ut&&console.warn("The query ".concat(JSON.stringify(l)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(u.join("+"),"]"));var p=this.schema.idxByName;function g(S,A){return Se(S,A)===0}var x=u.reduce(function(_,A){var O=_[0],M=_[1],_=p[A],j=l[A];return[O||_,O||!_?Sn(M,_&&_.multi?function(R){return R=W(R,A),a(R)&&R.some(function(L){return g(j,L)})}:function(R){return g(j,W(R,A))}):M]},[null,null]),w=x[0],x=x[1];return w?this.where(w.name).equals(l[w.keyPath]).filter(x):h?this.filter(x):this.where(u).equals("")},De.prototype.filter=function(l){return this.toCollection().and(l)},De.prototype.count=function(l){return this.toCollection().count(l)},De.prototype.offset=function(l){return this.toCollection().offset(l)},De.prototype.limit=function(l){return this.toCollection().limit(l)},De.prototype.each=function(l){return this.toCollection().each(l)},De.prototype.toArray=function(l){return this.toCollection().toArray(l)},De.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},De.prototype.orderBy=function(l){return new this.db.Collection(new this.db.WhereClause(this,a(l)?"[".concat(l.join("+"),"]"):l))},De.prototype.reverse=function(){return this.toCollection().reverse()},De.prototype.mapToClass=function(l){var u,h=this.db,p=this.name;function g(){return u!==null&&u.apply(this,arguments)||this}(this.schema.mappedClass=l).prototype instanceof Qc&&((function(A,O){if(typeof O!="function"&&O!==null)throw new TypeError("Class extends value "+String(O)+" is not a constructor or null");function M(){this.constructor=A}n(A,O),A.prototype=O===null?Object.create(O):(M.prototype=O.prototype,new M)})(g,u=l),Object.defineProperty(g.prototype,"db",{get:function(){return h},enumerable:!1,configurable:!0}),g.prototype.table=function(){return p},l=g);for(var w=new Set,x=l.prototype;x;x=d(x))Object.getOwnPropertyNames(x).forEach(function(A){return w.add(A)});function S(A){if(!A)return A;var O,M=Object.create(l.prototype);for(O in A)if(!w.has(O))try{M[O]=A[O]}catch{}return M}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=S,this.hook("reading",S),l},De.prototype.defineClass=function(){return this.mapToClass(function(l){c(this,l)})},De.prototype.add=function(l,u){var h=this,p=this.schema.primKey,g=p.auto,w=p.keyPath,x=l;return w&&g&&(x=Fi(w)(l)),this._trans("readwrite",function(S){return h.core.mutate({trans:S,type:"add",keys:u!=null?[u]:null,values:[x]})}).then(function(S){return S.numFailures?ce.reject(S.failures[0]):S.lastResult}).then(function(S){if(w)try{I(l,w,S)}catch{}return S})},De.prototype.update=function(l,u){return typeof l!="object"||a(l)?this.where(":id").equals(l).modify(u):(l=W(l,this.schema.primKey.keyPath),l===void 0?ze(new fe.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(l).modify(u))},De.prototype.put=function(l,u){var h=this,p=this.schema.primKey,g=p.auto,w=p.keyPath,x=l;return w&&g&&(x=Fi(w)(l)),this._trans("readwrite",function(S){return h.core.mutate({trans:S,type:"put",values:[x],keys:u!=null?[u]:null})}).then(function(S){return S.numFailures?ce.reject(S.failures[0]):S.lastResult}).then(function(S){if(w)try{I(l,w,S)}catch{}return S})},De.prototype.delete=function(l){var u=this;return this._trans("readwrite",function(h){return u.core.mutate({trans:h,type:"delete",keys:[l]})}).then(function(h){return h.numFailures?ce.reject(h.failures[0]):void 0})},De.prototype.clear=function(){var l=this;return this._trans("readwrite",function(u){return l.core.mutate({trans:u,type:"deleteRange",range:Yc})}).then(function(u){return u.numFailures?ce.reject(u.failures[0]):void 0})},De.prototype.bulkGet=function(l){var u=this;return this._trans("readonly",function(h){return u.core.getMany({keys:l,trans:h}).then(function(p){return p.map(function(g){return u.hook.reading.fire(g)})})})},De.prototype.bulkAdd=function(l,u,h){var p=this,g=Array.isArray(u)?u:void 0,w=(h=h||(g?void 0:u))?h.allKeys:void 0;return this._trans("readwrite",function(x){var O=p.schema.primKey,S=O.auto,O=O.keyPath;if(O&&g)throw new fe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(g&&g.length!==l.length)throw new fe.InvalidArgument("Arguments objects and keys must have the same length");var A=l.length,O=O&&S?l.map(Fi(O)):l;return p.core.mutate({trans:x,type:"add",keys:g,values:O,wantResults:w}).then(function(L){var _=L.numFailures,j=L.results,R=L.lastResult,L=L.failures;if(_===0)return w?j:R;throw new bn("".concat(p.name,".bulkAdd(): ").concat(_," of ").concat(A," operations failed"),L)})})},De.prototype.bulkPut=function(l,u,h){var p=this,g=Array.isArray(u)?u:void 0,w=(h=h||(g?void 0:u))?h.allKeys:void 0;return this._trans("readwrite",function(x){var O=p.schema.primKey,S=O.auto,O=O.keyPath;if(O&&g)throw new fe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(g&&g.length!==l.length)throw new fe.InvalidArgument("Arguments objects and keys must have the same length");var A=l.length,O=O&&S?l.map(Fi(O)):l;return p.core.mutate({trans:x,type:"put",keys:g,values:O,wantResults:w}).then(function(L){var _=L.numFailures,j=L.results,R=L.lastResult,L=L.failures;if(_===0)return w?j:R;throw new bn("".concat(p.name,".bulkPut(): ").concat(_," of ").concat(A," operations failed"),L)})})},De.prototype.bulkUpdate=function(l){var u=this,h=this.core,p=l.map(function(x){return x.key}),g=l.map(function(x){return x.changes}),w=[];return this._trans("readwrite",function(x){return h.getMany({trans:x,keys:p,cache:"clone"}).then(function(S){var A=[],O=[];l.forEach(function(_,j){var R=_.key,L=_.changes,N=S[j];if(N){for(var D=0,F=Object.keys(L);D<F.length;D++){var U=F[D],B=L[U];if(U===u.schema.primKey.keyPath){if(Se(B,R)!==0)throw new fe.Constraint("Cannot update primary key in bulkUpdate()")}else I(N,U,B)}w.push(j),A.push(R),O.push(N)}});var M=A.length;return h.mutate({trans:x,type:"put",keys:A,values:O,updates:{keys:p,changeSpecs:g}}).then(function(_){var j=_.numFailures,R=_.failures;if(j===0)return M;for(var L=0,N=Object.keys(R);L<N.length;L++){var D,F=N[L],U=w[Number(F)];U!=null&&(D=R[F],delete R[F],R[U]=D)}throw new bn("".concat(u.name,".bulkUpdate(): ").concat(j," of ").concat(M," operations failed"),R)})})})},De.prototype.bulkDelete=function(l){var u=this,h=l.length;return this._trans("readwrite",function(p){return u.core.mutate({trans:p,type:"delete",keys:l})}).then(function(x){var g=x.numFailures,w=x.lastResult,x=x.failures;if(g===0)return w;throw new bn("".concat(u.name,".bulkDelete(): ").concat(g," of ").concat(h," operations failed"),x)})},De);function De(){}function Mr(l){function u(x,S){if(S){for(var A=arguments.length,O=new Array(A-1);--A;)O[A-1]=arguments[A];return h[x].subscribe.apply(null,O),l}if(typeof x=="string")return h[x]}var h={};u.addEventType=w;for(var p=1,g=arguments.length;p<g;++p)w(arguments[p]);return u;function w(x,S,A){if(typeof x!="object"){var O;S=S||Ag;var M={subscribers:[],fire:A=A||Te,subscribe:function(_){M.subscribers.indexOf(_)===-1&&(M.subscribers.push(_),M.fire=S(M.fire,_))},unsubscribe:function(_){M.subscribers=M.subscribers.filter(function(j){return j!==_}),M.fire=M.subscribers.reduce(S,A)}};return h[x]=u[x]=M}o(O=x).forEach(function(_){var j=O[_];if(a(j))w(_,O[_][0],O[_][1]);else{if(j!=="asap")throw new fe.InvalidArgument("Invalid event config");var R=w(_,Ar,function(){for(var L=arguments.length,N=new Array(L);L--;)N[L]=arguments[L];R.subscribers.forEach(function(D){ne(function(){D.apply(null,N)})})})}})}}function Pr(l,u){return $(u).from({prototype:l}),u}function Xn(l,u){return!(l.filter||l.algorithm||l.or)&&(u?l.justLimit:!l.replayFilter)}function Yo(l,u){l.filter=Sn(l.filter,u)}function Qo(l,u,h){var p=l.replayFilter;l.replayFilter=p?function(){return Sn(p(),u())}:u,l.justLimit=h&&!p}function Ui(l,u){if(l.isPrimKey)return u.primaryKey;var h=u.getIndexByKeyPath(l.index);if(!h)throw new fe.Schema("KeyPath "+l.index+" on object store "+u.name+" is not indexed");return h}function eu(l,u,h){var p=Ui(l,u.schema);return u.openCursor({trans:h,values:!l.keysOnly,reverse:l.dir==="prev",unique:!!l.unique,query:{index:p,range:l.range}})}function Bi(l,u,h,p){var g=l.replayFilter?Sn(l.filter,l.replayFilter()):l.filter;if(l.or){var w={},x=function(S,A,O){var M,_;g&&!g(A,O,function(j){return A.stop(j)},function(j){return A.fail(j)})||((_=""+(M=A.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(M)),m(w,_)||(w[_]=!0,u(S,A,O)))};return Promise.all([l.or._iterate(x,h),tu(eu(l,p,h),l.algorithm,x,!l.keysOnly&&l.valueMapper)])}return tu(eu(l,p,h),Sn(l.algorithm,g),u,!l.keysOnly&&l.valueMapper)}function tu(l,u,h,p){var g=Me(p?function(w,x,S){return h(p(w),x,S)}:h);return l.then(function(w){if(w)return w.start(function(){var x=function(){return w.continue()};u&&!u(w,function(S){return x=S},function(S){w.stop(S),x=Te},function(S){w.fail(S),x=Te})||g(w.value,w,function(S){return x=S}),x()})})}var Gt=Symbol(),Nr=(nu.prototype.execute=function(l){if(this.add!==void 0){var u=this.add;if(a(u))return i(i([],a(l)?l:[],!0),u).sort();if(typeof u=="number")return(Number(l)||0)+u;if(typeof u=="bigint")try{return BigInt(l)+u}catch{return BigInt(0)+u}throw new TypeError("Invalid term ".concat(u))}if(this.remove!==void 0){var h=this.remove;if(a(h))return a(l)?l.filter(function(p){return!h.includes(p)}).sort():[];if(typeof h=="number")return Number(l)-h;if(typeof h=="bigint")try{return BigInt(l)-h}catch{return BigInt(0)-h}throw new TypeError("Invalid subtrahend ".concat(h))}return u=(u=this.replacePrefix)===null||u===void 0?void 0:u[0],u&&typeof l=="string"&&l.startsWith(u)?this.replacePrefix[1]+l.substring(u.length):l},nu);function nu(l){Object.assign(this,l)}var Pg=(_e.prototype._read=function(l,u){var h=this._ctx;return h.error?h.table._trans(null,ze.bind(null,h.error)):h.table._trans("readonly",l).then(u)},_e.prototype._write=function(l){var u=this._ctx;return u.error?u.table._trans(null,ze.bind(null,u.error)):u.table._trans("readwrite",l,"locked")},_e.prototype._addAlgorithm=function(l){var u=this._ctx;u.algorithm=Sn(u.algorithm,l)},_e.prototype._iterate=function(l,u){return Bi(this._ctx,l,u,this._ctx.table.core)},_e.prototype.clone=function(l){var u=Object.create(this.constructor.prototype),h=Object.create(this._ctx);return l&&c(h,l),u._ctx=h,u},_e.prototype.raw=function(){return this._ctx.valueMapper=null,this},_e.prototype.each=function(l){var u=this._ctx;return this._read(function(h){return Bi(u,l,h,u.table.core)})},_e.prototype.count=function(l){var u=this;return this._read(function(h){var p=u._ctx,g=p.table.core;if(Xn(p,!0))return g.count({trans:h,query:{index:Ui(p,g.schema),range:p.range}}).then(function(x){return Math.min(x,p.limit)});var w=0;return Bi(p,function(){return++w,!1},h,g).then(function(){return w})}).then(l)},_e.prototype.sortBy=function(l,u){var h=l.split(".").reverse(),p=h[0],g=h.length-1;function w(A,O){return O?w(A[h[O]],O-1):A[p]}var x=this._ctx.dir==="next"?1:-1;function S(A,O){return Se(w(A,g),w(O,g))*x}return this.toArray(function(A){return A.sort(S)}).then(u)},_e.prototype.toArray=function(l){var u=this;return this._read(function(h){var p=u._ctx;if(p.dir==="next"&&Xn(p,!0)&&0<p.limit){var g=p.valueMapper,w=Ui(p,p.table.core.schema);return p.table.core.query({trans:h,limit:p.limit,values:!0,query:{index:w,range:p.range}}).then(function(S){return S=S.result,g?S.map(g):S})}var x=[];return Bi(p,function(S){return x.push(S)},h,p.table.core).then(function(){return x})},l)},_e.prototype.offset=function(l){var u=this._ctx;return l<=0||(u.offset+=l,Xn(u)?Qo(u,function(){var h=l;return function(p,g){return h===0||(h===1?--h:g(function(){p.advance(h),h=0}),!1)}}):Qo(u,function(){var h=l;return function(){return--h<0}})),this},_e.prototype.limit=function(l){return this._ctx.limit=Math.min(this._ctx.limit,l),Qo(this._ctx,function(){var u=l;return function(h,p,g){return--u<=0&&p(g),0<=u}},!0),this},_e.prototype.until=function(l,u){return Yo(this._ctx,function(h,p,g){return!l(h.value)||(p(g),u)}),this},_e.prototype.first=function(l){return this.limit(1).toArray(function(u){return u[0]}).then(l)},_e.prototype.last=function(l){return this.reverse().first(l)},_e.prototype.filter=function(l){var u;return Yo(this._ctx,function(h){return l(h.value)}),(u=this._ctx).isMatch=Sn(u.isMatch,l),this},_e.prototype.and=function(l){return this.filter(l)},_e.prototype.or=function(l){return new this.db.WhereClause(this._ctx.table,l,this)},_e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},_e.prototype.desc=function(){return this.reverse()},_e.prototype.eachKey=function(l){var u=this._ctx;return u.keysOnly=!u.isMatch,this.each(function(h,p){l(p.key,p)})},_e.prototype.eachUniqueKey=function(l){return this._ctx.unique="unique",this.eachKey(l)},_e.prototype.eachPrimaryKey=function(l){var u=this._ctx;return u.keysOnly=!u.isMatch,this.each(function(h,p){l(p.primaryKey,p)})},_e.prototype.keys=function(l){var u=this._ctx;u.keysOnly=!u.isMatch;var h=[];return this.each(function(p,g){h.push(g.key)}).then(function(){return h}).then(l)},_e.prototype.primaryKeys=function(l){var u=this._ctx;if(u.dir==="next"&&Xn(u,!0)&&0<u.limit)return this._read(function(p){var g=Ui(u,u.table.core.schema);return u.table.core.query({trans:p,values:!1,limit:u.limit,query:{index:g,range:u.range}})}).then(function(p){return p.result}).then(l);u.keysOnly=!u.isMatch;var h=[];return this.each(function(p,g){h.push(g.primaryKey)}).then(function(){return h}).then(l)},_e.prototype.uniqueKeys=function(l){return this._ctx.unique="unique",this.keys(l)},_e.prototype.firstKey=function(l){return this.limit(1).keys(function(u){return u[0]}).then(l)},_e.prototype.lastKey=function(l){return this.reverse().firstKey(l)},_e.prototype.distinct=function(){var l=this._ctx,l=l.index&&l.table.schema.idxByName[l.index];if(!l||!l.multi)return this;var u={};return Yo(this._ctx,function(g){var p=g.primaryKey.toString(),g=m(u,p);return u[p]=!0,!g}),this},_e.prototype.modify=function(l){var u=this,h=this._ctx;return this._write(function(p){var g,w,x;x=typeof l=="function"?l:(g=o(l),w=g.length,function(D){for(var F=!1,U=0;U<w;++U){var B=g[U],G=l[B],X=W(D,B);G instanceof Nr?(I(D,B,G.execute(X)),F=!0):X!==G&&(I(D,B,G),F=!0)}return F});var S=h.table.core,_=S.schema.primaryKey,A=_.outbound,O=_.extractKey,M=200,_=u.db._options.modifyChunkSize;_&&(M=typeof _=="object"?_[S.name]||_["*"]||200:_);function j(D,B){var U=B.failures,B=B.numFailures;L+=D-B;for(var G=0,X=o(U);G<X.length;G++){var oe=X[G];R.push(U[oe])}}var R=[],L=0,N=[];return u.clone().primaryKeys().then(function(D){function F(B){var G=Math.min(M,D.length-B);return S.getMany({trans:p,keys:D.slice(B,B+G),cache:"immutable"}).then(function(X){for(var oe=[],Z=[],re=A?[]:null,le=[],se=0;se<G;++se){var ue=X[se],be={value:te(ue),primKey:D[B+se]};x.call(be,be.value,be)!==!1&&(be.value==null?le.push(D[B+se]):A||Se(O(ue),O(be.value))===0?(Z.push(be.value),A&&re.push(D[B+se])):(le.push(D[B+se]),oe.push(be.value)))}return Promise.resolve(0<oe.length&&S.mutate({trans:p,type:"add",values:oe}).then(function(ve){for(var ke in ve.failures)le.splice(parseInt(ke),1);j(oe.length,ve)})).then(function(){return(0<Z.length||U&&typeof l=="object")&&S.mutate({trans:p,type:"put",keys:re,values:Z,criteria:U,changeSpec:typeof l!="function"&&l,isAdditionalChunk:0<B}).then(function(ve){return j(Z.length,ve)})}).then(function(){return(0<le.length||U&&l===Jo)&&S.mutate({trans:p,type:"delete",keys:le,criteria:U,isAdditionalChunk:0<B}).then(function(ve){return j(le.length,ve)})}).then(function(){return D.length>B+G&&F(B+M)})})}var U=Xn(h)&&h.limit===1/0&&(typeof l!="function"||l===Jo)&&{index:h.index,range:h.range};return F(0).then(function(){if(0<R.length)throw new Ne("Error modifying one or more objects",R,L,N);return D.length})})})},_e.prototype.delete=function(){var l=this._ctx,u=l.range;return Xn(l)&&(l.isPrimKey||u.type===3)?this._write(function(h){var p=l.table.core.schema.primaryKey,g=u;return l.table.core.count({trans:h,query:{index:p,range:g}}).then(function(w){return l.table.core.mutate({trans:h,type:"deleteRange",range:g}).then(function(x){var S=x.failures;if(x.lastResult,x.results,x=x.numFailures,x)throw new Ne("Could not delete some values",Object.keys(S).map(function(A){return S[A]}),w-x);return w-x})})}):this.modify(Jo)},_e);function _e(){}var Jo=function(l,u){return u.value=null};function Ng(l,u){return l<u?-1:l===u?0:1}function jg(l,u){return u<l?-1:l===u?0:1}function vt(l,u,h){return l=l instanceof iu?new l.Collection(l):l,l._ctx.error=new(h||TypeError)(u),l}function Zn(l){return new l.Collection(l,function(){return ru("")}).limit(0)}function qi(l,u,h,p){var g,w,x,S,A,O,M,_=h.length;if(!h.every(function(L){return typeof L=="string"}))return vt(l,Gc);function j(L){g=L==="next"?function(D){return D.toUpperCase()}:function(D){return D.toLowerCase()},w=L==="next"?function(D){return D.toLowerCase()}:function(D){return D.toUpperCase()},x=L==="next"?Ng:jg;var N=h.map(function(D){return{lower:w(D),upper:g(D)}}).sort(function(D,F){return x(D.lower,F.lower)});S=N.map(function(D){return D.upper}),A=N.map(function(D){return D.lower}),M=(O=L)==="next"?"":p}j("next"),l=new l.Collection(l,function(){return sn(S[0],A[_-1]+p)}),l._ondirectionchange=function(L){j(L)};var R=0;return l._addAlgorithm(function(L,N,D){var F=L.key;if(typeof F!="string")return!1;var U=w(F);if(u(U,A,R))return!0;for(var B=null,G=R;G<_;++G){var X=(function(oe,Z,re,le,se,ue){for(var be=Math.min(oe.length,le.length),ve=-1,ke=0;ke<be;++ke){var kt=Z[ke];if(kt!==le[ke])return se(oe[ke],re[ke])<0?oe.substr(0,ke)+re[ke]+re.substr(ke+1):se(oe[ke],le[ke])<0?oe.substr(0,ke)+le[ke]+re.substr(ke+1):0<=ve?oe.substr(0,ve)+Z[ve]+re.substr(ve+1):null;se(oe[ke],kt)<0&&(ve=ke)}return be<le.length&&ue==="next"?oe+re.substr(oe.length):be<oe.length&&ue==="prev"?oe.substr(0,re.length):ve<0?null:oe.substr(0,ve)+le[ve]+re.substr(ve+1)})(F,U,S[G],A[G],x,O);X===null&&B===null?R=G+1:(B===null||0<x(B,X))&&(B=X)}return N(B!==null?function(){L.continue(B+M)}:D),!1}),l}function sn(l,u,h,p){return{type:2,lower:l,upper:u,lowerOpen:h,upperOpen:p}}function ru(l){return{type:1,lower:l,upper:l}}var iu=(Object.defineProperty(Ke.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Ke.prototype.between=function(l,u,h,p){h=h!==!1,p=p===!0;try{return 0<this._cmp(l,u)||this._cmp(l,u)===0&&(h||p)&&(!h||!p)?Zn(this):new this.Collection(this,function(){return sn(l,u,!h,!p)})}catch{return vt(this,Wt)}},Ke.prototype.equals=function(l){return l==null?vt(this,Wt):new this.Collection(this,function(){return ru(l)})},Ke.prototype.above=function(l){return l==null?vt(this,Wt):new this.Collection(this,function(){return sn(l,void 0,!0)})},Ke.prototype.aboveOrEqual=function(l){return l==null?vt(this,Wt):new this.Collection(this,function(){return sn(l,void 0,!1)})},Ke.prototype.below=function(l){return l==null?vt(this,Wt):new this.Collection(this,function(){return sn(void 0,l,!1,!0)})},Ke.prototype.belowOrEqual=function(l){return l==null?vt(this,Wt):new this.Collection(this,function(){return sn(void 0,l)})},Ke.prototype.startsWith=function(l){return typeof l!="string"?vt(this,Gc):this.between(l,l+xn,!0,!0)},Ke.prototype.startsWithIgnoreCase=function(l){return l===""?this.startsWith(l):qi(this,function(u,h){return u.indexOf(h[0])===0},[l],xn)},Ke.prototype.equalsIgnoreCase=function(l){return qi(this,function(u,h){return u===h[0]},[l],"")},Ke.prototype.anyOfIgnoreCase=function(){var l=pe.apply(Le,arguments);return l.length===0?Zn(this):qi(this,function(u,h){return h.indexOf(u)!==-1},l,"")},Ke.prototype.startsWithAnyOfIgnoreCase=function(){var l=pe.apply(Le,arguments);return l.length===0?Zn(this):qi(this,function(u,h){return h.some(function(p){return u.indexOf(p)===0})},l,xn)},Ke.prototype.anyOf=function(){var l=this,u=pe.apply(Le,arguments),h=this._cmp;try{u.sort(h)}catch{return vt(this,Wt)}if(u.length===0)return Zn(this);var p=new this.Collection(this,function(){return sn(u[0],u[u.length-1])});p._ondirectionchange=function(w){h=w==="next"?l._ascending:l._descending,u.sort(h)};var g=0;return p._addAlgorithm(function(w,x,S){for(var A=w.key;0<h(A,u[g]);)if(++g===u.length)return x(S),!1;return h(A,u[g])===0||(x(function(){w.continue(u[g])}),!1)}),p},Ke.prototype.notEqual=function(l){return this.inAnyRange([[-1/0,l],[l,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Ke.prototype.noneOf=function(){var l=pe.apply(Le,arguments);if(l.length===0)return new this.Collection(this);try{l.sort(this._ascending)}catch{return vt(this,Wt)}var u=l.reduce(function(h,p){return h?h.concat([[h[h.length-1][1],p]]):[[-1/0,p]]},null);return u.push([l[l.length-1],this.db._maxKey]),this.inAnyRange(u,{includeLowers:!1,includeUppers:!1})},Ke.prototype.inAnyRange=function(F,u){var h=this,p=this._cmp,g=this._ascending,w=this._descending,x=this._min,S=this._max;if(F.length===0)return Zn(this);if(!F.every(function(U){return U[0]!==void 0&&U[1]!==void 0&&g(U[0],U[1])<=0}))return vt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",fe.InvalidArgument);var A=!u||u.includeLowers!==!1,O=u&&u.includeUppers===!0,M,_=g;function j(U,B){return _(U[0],B[0])}try{(M=F.reduce(function(U,B){for(var G=0,X=U.length;G<X;++G){var oe=U[G];if(p(B[0],oe[1])<0&&0<p(B[1],oe[0])){oe[0]=x(oe[0],B[0]),oe[1]=S(oe[1],B[1]);break}}return G===X&&U.push(B),U},[])).sort(j)}catch{return vt(this,Wt)}var R=0,L=O?function(U){return 0<g(U,M[R][1])}:function(U){return 0<=g(U,M[R][1])},N=A?function(U){return 0<w(U,M[R][0])}:function(U){return 0<=w(U,M[R][0])},D=L,F=new this.Collection(this,function(){return sn(M[0][0],M[M.length-1][1],!A,!O)});return F._ondirectionchange=function(U){_=U==="next"?(D=L,g):(D=N,w),M.sort(j)},F._addAlgorithm(function(U,B,G){for(var X,oe=U.key;D(oe);)if(++R===M.length)return B(G),!1;return!L(X=oe)&&!N(X)||(h._cmp(oe,M[R][1])===0||h._cmp(oe,M[R][0])===0||B(function(){_===g?U.continue(M[R][0]):U.continue(M[R][1])}),!1)}),F},Ke.prototype.startsWithAnyOf=function(){var l=pe.apply(Le,arguments);return l.every(function(u){return typeof u=="string"})?l.length===0?Zn(this):this.inAnyRange(l.map(function(u){return[u,u+xn]})):vt(this,"startsWithAnyOf() only works with strings")},Ke);function Ke(){}function Bt(l){return Me(function(u){return jr(u),l(u.target.error),!1})}function jr(l){l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault()}var zr="storagemutated",Xo="x-storagemutated-1",on=Mr(null,zr),zg=(qt.prototype._lock=function(){return P(!he.global),++this._reculock,this._reculock!==1||he.global||(he.lockOwnerFor=this),this},qt.prototype._unlock=function(){if(P(!he.global),--this._reculock==0)for(he.global||(he.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var l=this._blockedFuncs.shift();try{$n(l[1],l[0])}catch{}}return this},qt.prototype._locked=function(){return this._reculock&&he.lockOwnerFor!==this},qt.prototype.create=function(l){var u=this;if(!this.mode)return this;var h=this.db.idbdb,p=this.db._state.dbOpenError;if(P(!this.idbtrans),!l&&!h)switch(p&&p.name){case"DatabaseClosedError":throw new fe.DatabaseClosed(p);case"MissingAPIError":throw new fe.MissingAPI(p.message,p);default:throw new fe.OpenFailed(p)}if(!this.active)throw new fe.TransactionInactive;return P(this._completion._state===null),(l=this.idbtrans=l||(this.db.core||h).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Me(function(g){jr(g),u._reject(l.error)}),l.onabort=Me(function(g){jr(g),u.active&&u._reject(new fe.Abort(l.error)),u.active=!1,u.on("abort").fire(g)}),l.oncomplete=Me(function(){u.active=!1,u._resolve(),"mutatedParts"in l&&on.storagemutated.fire(l.mutatedParts)}),this},qt.prototype._promise=function(l,u,h){var p=this;if(l==="readwrite"&&this.mode!=="readwrite")return ze(new fe.ReadOnly("Transaction is readonly"));if(!this.active)return ze(new fe.TransactionInactive);if(this._locked())return new ce(function(w,x){p._blockedFuncs.push([function(){p._promise(l,u,h).then(w,x)},he])});if(h)return tn(function(){var w=new ce(function(x,S){p._lock();var A=u(x,S,p);A&&A.then&&A.then(x,S)});return w.finally(function(){return p._unlock()}),w._lib=!0,w});var g=new ce(function(w,x){var S=u(w,x,p);S&&S.then&&S.then(w,x)});return g._lib=!0,g},qt.prototype._root=function(){return this.parent?this.parent._root():this},qt.prototype.waitFor=function(l){var u,h=this._root(),p=ce.resolve(l);h._waitingFor?h._waitingFor=h._waitingFor.then(function(){return p}):(h._waitingFor=p,h._waitingQueue=[],u=h.idbtrans.objectStore(h.storeNames[0]),(function w(){for(++h._spinCount;h._waitingQueue.length;)h._waitingQueue.shift()();h._waitingFor&&(u.get(-1/0).onsuccess=w)})());var g=h._waitingFor;return new ce(function(w,x){p.then(function(S){return h._waitingQueue.push(Me(w.bind(null,S)))},function(S){return h._waitingQueue.push(Me(x.bind(null,S)))}).finally(function(){h._waitingFor===g&&(h._waitingFor=null)})})},qt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new fe.Abort))},qt.prototype.table=function(l){var u=this._memoizedTables||(this._memoizedTables={});if(m(u,l))return u[l];var h=this.schema[l];if(!h)throw new fe.NotFound("Table "+l+" not part of transaction");return h=new this.db.Table(l,h,this),h.core=this.db.core.table(l),u[l]=h},qt);function qt(){}function Zo(l,u,h,p,g,w,x){return{name:l,keyPath:u,unique:h,multi:p,auto:g,compound:w,src:(h&&!x?"&":"")+(p?"*":"")+(g?"++":"")+su(u)}}function su(l){return typeof l=="string"?l:l?"["+[].join.call(l,"+")+"]":""}function ea(l,u,h){return{name:l,primKey:u,indexes:h,mappedClass:null,idxByName:(p=function(g){return[g.name,g]},h.reduce(function(g,w,x){return x=p(w,x),x&&(g[x[0]]=x[1]),g},{}))};var p}var Fr=function(l){try{return l.only([[]]),Fr=function(){return[[]]},[[]]}catch{return Fr=function(){return xn},xn}};function ta(l){return l==null?function(){}:typeof l=="string"?(u=l).split(".").length===1?function(h){return h[u]}:function(h){return W(h,u)}:function(h){return W(h,l)};var u}function ou(l){return[].slice.call(l)}var Fg=0;function Ur(l){return l==null?":id":typeof l=="string"?l:"[".concat(l.join("+"),"]")}function Ug(l,u,A){function p(D){if(D.type===3)return null;if(D.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var R=D.lower,L=D.upper,N=D.lowerOpen,D=D.upperOpen;return R===void 0?L===void 0?null:u.upperBound(L,!!D):L===void 0?u.lowerBound(R,!!N):u.bound(R,L,!!N,!!D)}function g(j){var R,L=j.name;return{name:L,schema:j,mutate:function(N){var D=N.trans,F=N.type,U=N.keys,B=N.values,G=N.range;return new Promise(function(X,oe){X=Me(X);var Z=D.objectStore(L),re=Z.keyPath==null,le=F==="put"||F==="add";if(!le&&F!=="delete"&&F!=="deleteRange")throw new Error("Invalid operation type: "+F);var se,ue=(U||B||{length:1}).length;if(U&&B&&U.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(ue===0)return X({numFailures:0,failures:{},results:[],lastResult:void 0});function be(ot){++kt,jr(ot)}var ve=[],ke=[],kt=0;if(F==="deleteRange"){if(G.type===4)return X({numFailures:kt,failures:ke,results:[],lastResult:void 0});G.type===3?ve.push(se=Z.clear()):ve.push(se=Z.delete(p(G)))}else{var re=le?re?[B,U]:[B,null]:[U,null],ge=re[0],tt=re[1];if(le)for(var nt=0;nt<ue;++nt)ve.push(se=tt&&tt[nt]!==void 0?Z[F](ge[nt],tt[nt]):Z[F](ge[nt])),se.onerror=be;else for(nt=0;nt<ue;++nt)ve.push(se=Z[F](ge[nt])),se.onerror=be}function ns(ot){ot=ot.target.result,ve.forEach(function(En,ya){return En.error!=null&&(ke[ya]=En.error)}),X({numFailures:kt,failures:ke,results:F==="delete"?U:ve.map(function(En){return En.result}),lastResult:ot})}se.onerror=function(ot){be(ot),ns(ot)},se.onsuccess=ns})},getMany:function(N){var D=N.trans,F=N.keys;return new Promise(function(U,B){U=Me(U);for(var G,X=D.objectStore(L),oe=F.length,Z=new Array(oe),re=0,le=0,se=function(ve){ve=ve.target,Z[ve._pos]=ve.result,++le===re&&U(Z)},ue=Bt(B),be=0;be<oe;++be)F[be]!=null&&((G=X.get(F[be]))._pos=be,G.onsuccess=se,G.onerror=ue,++re);re===0&&U(Z)})},get:function(N){var D=N.trans,F=N.key;return new Promise(function(U,B){U=Me(U);var G=D.objectStore(L).get(F);G.onsuccess=function(X){return U(X.target.result)},G.onerror=Bt(B)})},query:(R=O,function(N){return new Promise(function(D,F){D=Me(D);var U,B,G,re=N.trans,X=N.values,oe=N.limit,se=N.query,Z=oe===1/0?void 0:oe,le=se.index,se=se.range,re=re.objectStore(L),le=le.isPrimaryKey?re:re.index(le.name),se=p(se);if(oe===0)return D({result:[]});R?((Z=X?le.getAll(se,Z):le.getAllKeys(se,Z)).onsuccess=function(ue){return D({result:ue.target.result})},Z.onerror=Bt(F)):(U=0,B=!X&&"openKeyCursor"in le?le.openKeyCursor(se):le.openCursor(se),G=[],B.onsuccess=function(ue){var be=B.result;return be?(G.push(X?be.value:be.primaryKey),++U===oe?D({result:G}):void be.continue()):D({result:G})},B.onerror=Bt(F))})}),openCursor:function(N){var D=N.trans,F=N.values,U=N.query,B=N.reverse,G=N.unique;return new Promise(function(X,oe){X=Me(X);var le=U.index,Z=U.range,re=D.objectStore(L),re=le.isPrimaryKey?re:re.index(le.name),le=B?G?"prevunique":"prev":G?"nextunique":"next",se=!F&&"openKeyCursor"in re?re.openKeyCursor(p(Z),le):re.openCursor(p(Z),le);se.onerror=Bt(oe),se.onsuccess=Me(function(ue){var be,ve,ke,kt,ge=se.result;ge?(ge.___id=++Fg,ge.done=!1,be=ge.continue.bind(ge),ve=(ve=ge.continuePrimaryKey)&&ve.bind(ge),ke=ge.advance.bind(ge),kt=function(){throw new Error("Cursor not stopped")},ge.trans=D,ge.stop=ge.continue=ge.continuePrimaryKey=ge.advance=function(){throw new Error("Cursor not started")},ge.fail=Me(oe),ge.next=function(){var tt=this,nt=1;return this.start(function(){return nt--?tt.continue():tt.stop()}).then(function(){return tt})},ge.start=function(tt){function nt(){if(se.result)try{tt()}catch(ot){ge.fail(ot)}else ge.done=!0,ge.start=function(){throw new Error("Cursor behind last entry")},ge.stop()}var ns=new Promise(function(ot,En){ot=Me(ot),se.onerror=Bt(En),ge.fail=En,ge.stop=function(ya){ge.stop=ge.continue=ge.continuePrimaryKey=ge.advance=kt,ot(ya)}});return se.onsuccess=Me(function(ot){se.onsuccess=nt,nt()}),ge.continue=be,ge.continuePrimaryKey=ve,ge.advance=ke,nt(),ns},X(ge)):X(null)},oe)})},count:function(N){var D=N.query,F=N.trans,U=D.index,B=D.range;return new Promise(function(G,X){var oe=F.objectStore(L),Z=U.isPrimaryKey?oe:oe.index(U.name),oe=p(B),Z=oe?Z.count(oe):Z.count();Z.onsuccess=Me(function(re){return G(re.target.result)}),Z.onerror=Bt(X)})}}}var w,x,S,M=(x=A,S=ou((w=l).objectStoreNames),{schema:{name:w.name,tables:S.map(function(j){return x.objectStore(j)}).map(function(j){var R=j.keyPath,D=j.autoIncrement,L=a(R),N={},D={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:R==null,compound:L,keyPath:R,autoIncrement:D,unique:!0,extractKey:ta(R)},indexes:ou(j.indexNames).map(function(F){return j.index(F)}).map(function(G){var U=G.name,B=G.unique,X=G.multiEntry,G=G.keyPath,X={name:U,compound:a(G),keyPath:G,unique:B,multiEntry:X,extractKey:ta(G)};return N[Ur(G)]=X}),getIndexByKeyPath:function(F){return N[Ur(F)]}};return N[":id"]=D.primaryKey,R!=null&&(N[Ur(R)]=D.primaryKey),D})},hasGetAll:0<S.length&&"getAll"in x.objectStore(S[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),A=M.schema,O=M.hasGetAll,M=A.tables.map(g),_={};return M.forEach(function(j){return _[j.name]=j}),{stack:"dbcore",transaction:l.transaction.bind(l),table:function(j){if(!_[j])throw new Error("Table '".concat(j,"' not found"));return _[j]},MIN_KEY:-1/0,MAX_KEY:Fr(u),schema:A}}function Bg(l,u,h,p){var g=h.IDBKeyRange;return h.indexedDB,{dbcore:(p=Ug(u,g,p),l.dbcore.reduce(function(w,x){return x=x.create,r(r({},w),x(w))},p))}}function Hi(l,p){var h=p.db,p=Bg(l._middlewares,h,l._deps,p);l.core=p.dbcore,l.tables.forEach(function(g){var w=g.name;l.core.schema.tables.some(function(x){return x.name===w})&&(g.core=l.core.table(w),l[w]instanceof l.Table&&(l[w].core=g.core))})}function Vi(l,u,h,p){h.forEach(function(g){var w=p[g];u.forEach(function(x){var S=(function A(O,M){return C(O,M)||(O=d(O))&&A(O,M)})(x,g);(!S||"value"in S&&S.value===void 0)&&(x===l.Transaction.prototype||x instanceof l.Transaction?v(x,g,{get:function(){return this.table(g)},set:function(A){y(this,g,{value:A,writable:!0,configurable:!0,enumerable:!0})}}):x[g]=new l.Table(g,w))})})}function na(l,u){u.forEach(function(h){for(var p in h)h[p]instanceof l.Table&&delete h[p]})}function qg(l,u){return l._cfg.version-u._cfg.version}function Hg(l,u,h,p){var g=l._dbSchema;h.objectStoreNames.contains("$meta")&&!g.$meta&&(g.$meta=ea("$meta",lu("")[0],[]),l._storeNames.push("$meta"));var w=l._createTransaction("readwrite",l._storeNames,g);w.create(h),w._completion.catch(p);var x=w._reject.bind(w),S=he.transless||he;tn(function(){return he.trans=w,he.transless=S,u!==0?(Hi(l,h),O=u,((A=w).storeNames.includes("$meta")?A.table("$meta").get("version").then(function(M){return M??O}):ce.resolve(O)).then(function(M){return j=M,R=w,L=h,N=[],M=(_=l)._versions,D=_._dbSchema=Wi(0,_.idbdb,L),(M=M.filter(function(F){return F._cfg.version>=j})).length!==0?(M.forEach(function(F){N.push(function(){var U=D,B=F._cfg.dbschema;Gi(_,U,L),Gi(_,B,L),D=_._dbSchema=B;var G=ra(U,B);G.add.forEach(function(le){ia(L,le[0],le[1].primKey,le[1].indexes)}),G.change.forEach(function(le){if(le.recreate)throw new fe.Upgrade("Not yet support for changing primary key");var se=L.objectStore(le.name);le.add.forEach(function(ue){return Ki(se,ue)}),le.change.forEach(function(ue){se.deleteIndex(ue.name),Ki(se,ue)}),le.del.forEach(function(ue){return se.deleteIndex(ue)})});var X=F._cfg.contentUpgrade;if(X&&F._cfg.version>j){Hi(_,L),R._memoizedTables={};var oe=V(B);G.del.forEach(function(le){oe[le]=U[le]}),na(_,[_.Transaction.prototype]),Vi(_,[_.Transaction.prototype],o(oe),oe),R.schema=oe;var Z,re=yt(X);return re&&Qn(),G=ce.follow(function(){var le;(Z=X(R))&&re&&(le=nn.bind(null,null),Z.then(le,le))}),Z&&typeof Z.then=="function"?ce.resolve(Z):G.then(function(){return Z})}}),N.push(function(U){var B,G,X=F._cfg.dbschema;B=X,G=U,[].slice.call(G.db.objectStoreNames).forEach(function(oe){return B[oe]==null&&G.db.deleteObjectStore(oe)}),na(_,[_.Transaction.prototype]),Vi(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),R.schema=_._dbSchema}),N.push(function(U){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===F._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(B){return B!=="$meta"})):U.objectStore("$meta").put(F._cfg.version,"version"))})}),(function F(){return N.length?ce.resolve(N.shift()(R.idbtrans)).then(F):ce.resolve()})().then(function(){au(D,L)})):ce.resolve();var _,j,R,L,N,D}).catch(x)):(o(g).forEach(function(M){ia(h,M,g[M].primKey,g[M].indexes)}),Hi(l,h),void ce.follow(function(){return l.on.populate.fire(w)}).catch(x));var A,O})}function Vg(l,u){au(l._dbSchema,u),u.db.version%10!=0||u.objectStoreNames.contains("$meta")||u.db.createObjectStore("$meta").add(Math.ceil(u.db.version/10-1),"version");var h=Wi(0,l.idbdb,u);Gi(l,l._dbSchema,u);for(var p=0,g=ra(h,l._dbSchema).change;p<g.length;p++){var w=(function(x){if(x.change.length||x.recreate)return console.warn("Unable to patch indexes of table ".concat(x.name," because it has changes on the type of index or primary key.")),{value:void 0};var S=u.objectStore(x.name);x.add.forEach(function(A){Ut&&console.debug("Dexie upgrade patch: Creating missing index ".concat(x.name,".").concat(A.src)),Ki(S,A)})})(g[p]);if(typeof w=="object")return w.value}}function ra(l,u){var h,p={del:[],add:[],change:[]};for(h in l)u[h]||p.del.push(h);for(h in u){var g=l[h],w=u[h];if(g){var x={name:h,def:w,recreate:!1,del:[],add:[],change:[]};if(""+(g.primKey.keyPath||"")!=""+(w.primKey.keyPath||"")||g.primKey.auto!==w.primKey.auto)x.recreate=!0,p.change.push(x);else{var S=g.idxByName,A=w.idxByName,O=void 0;for(O in S)A[O]||x.del.push(O);for(O in A){var M=S[O],_=A[O];M?M.src!==_.src&&x.change.push(_):x.add.push(_)}(0<x.del.length||0<x.add.length||0<x.change.length)&&p.change.push(x)}}else p.add.push([h,w])}return p}function ia(l,u,h,p){var g=l.db.createObjectStore(u,h.keyPath?{keyPath:h.keyPath,autoIncrement:h.auto}:{autoIncrement:h.auto});return p.forEach(function(w){return Ki(g,w)}),g}function au(l,u){o(l).forEach(function(h){u.db.objectStoreNames.contains(h)||(Ut&&console.debug("Dexie: Creating missing table",h),ia(u,h,l[h].primKey,l[h].indexes))})}function Ki(l,u){l.createIndex(u.name,u.keyPath,{unique:u.unique,multiEntry:u.multi})}function Wi(l,u,h){var p={};return T(u.objectStoreNames,0).forEach(function(g){for(var w=h.objectStore(g),x=Zo(su(O=w.keyPath),O||"",!0,!1,!!w.autoIncrement,O&&typeof O!="string",!0),S=[],A=0;A<w.indexNames.length;++A){var M=w.index(w.indexNames[A]),O=M.keyPath,M=Zo(M.name,O,!!M.unique,!!M.multiEntry,!1,O&&typeof O!="string",!1);S.push(M)}p[g]=ea(g,x,S)}),p}function Gi(l,u,h){for(var p=h.db.objectStoreNames,g=0;g<p.length;++g){var w=p[g],x=h.objectStore(w);l._hasGetAll="getAll"in x;for(var S=0;S<x.indexNames.length;++S){var A=x.indexNames[S],O=x.index(A).keyPath,M=typeof O=="string"?O:"["+T(O).join("+")+"]";!u[w]||(O=u[w].idxByName[M])&&(O.name=A,delete u[w].idxByName[M],u[w].idxByName[A]=O)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(l._hasGetAll=!1)}function lu(l){return l.split(",").map(function(u,h){var p=(u=u.trim()).replace(/([&*]|\+\+)/g,""),g=/^\[/.test(p)?p.match(/^\[(.*)\]$/)[1].split("+"):p;return Zo(p,g||null,/\&/.test(u),/\*/.test(u),/\+\+/.test(u),a(g),h===0)})}var Kg=(Yi.prototype._parseStoresSpec=function(l,u){o(l).forEach(function(h){if(l[h]!==null){var p=lu(l[h]),g=p.shift();if(g.unique=!0,g.multi)throw new fe.Schema("Primary key cannot be multi-valued");p.forEach(function(w){if(w.auto)throw new fe.Schema("Only primary key can be marked as autoIncrement (++)");if(!w.keyPath)throw new fe.Schema("Index must have a name and cannot be an empty string")}),u[h]=ea(h,g,p)}})},Yi.prototype.stores=function(h){var u=this.db;this._cfg.storesSource=this._cfg.storesSource?c(this._cfg.storesSource,h):h;var h=u._versions,p={},g={};return h.forEach(function(w){c(p,w._cfg.storesSource),g=w._cfg.dbschema={},w._parseStoresSpec(p,g)}),u._dbSchema=g,na(u,[u._allTables,u,u.Transaction.prototype]),Vi(u,[u._allTables,u,u.Transaction.prototype,this._cfg.tables],o(g),g),u._storeNames=o(g),this},Yi.prototype.upgrade=function(l){return this._cfg.contentUpgrade=jo(this._cfg.contentUpgrade||Te,l),this},Yi);function Yi(){}function sa(l,u){var h=l._dbNamesDB;return h||(h=l._dbNamesDB=new Yt(zi,{addons:[],indexedDB:l,IDBKeyRange:u})).version(1).stores({dbnames:"name"}),h.table("dbnames")}function oa(l){return l&&typeof l.databases=="function"}function aa(l){return tn(function(){return he.letThrough=!0,l()})}function la(l){return!("from"in l)}var et=function(l,u){if(!this){var h=new et;return l&&"d"in l&&c(h,l),h}c(this,arguments.length?{d:1,from:l,to:1<arguments.length?u:l}:{d:0})};function Br(l,u,h){var p=Se(u,h);if(!isNaN(p)){if(0<p)throw RangeError();if(la(l))return c(l,{from:u,to:h,d:1});var g=l.l,p=l.r;if(Se(h,l.from)<0)return g?Br(g,u,h):l.l={from:u,to:h,d:1,l:null,r:null},uu(l);if(0<Se(u,l.to))return p?Br(p,u,h):l.r={from:u,to:h,d:1,l:null,r:null},uu(l);Se(u,l.from)<0&&(l.from=u,l.l=null,l.d=p?p.d+1:1),0<Se(h,l.to)&&(l.to=h,l.r=null,l.d=l.l?l.l.d+1:1),h=!l.r,g&&!l.l&&qr(l,g),p&&h&&qr(l,p)}}function qr(l,u){la(u)||(function h(p,A){var w=A.from,x=A.to,S=A.l,A=A.r;Br(p,w,x),S&&h(p,S),A&&h(p,A)})(l,u)}function cu(l,u){var h=Qi(u),p=h.next();if(p.done)return!1;for(var g=p.value,w=Qi(l),x=w.next(g.from),S=x.value;!p.done&&!x.done;){if(Se(S.from,g.to)<=0&&0<=Se(S.to,g.from))return!0;Se(g.from,S.from)<0?g=(p=h.next(S.from)).value:S=(x=w.next(g.from)).value}return!1}function Qi(l){var u=la(l)?null:{s:0,n:l};return{next:function(h){for(var p=0<arguments.length;u;)switch(u.s){case 0:if(u.s=1,p)for(;u.n.l&&Se(h,u.n.from)<0;)u={up:u,n:u.n.l,s:1};else for(;u.n.l;)u={up:u,n:u.n.l,s:1};case 1:if(u.s=2,!p||Se(h,u.n.to)<=0)return{value:u.n,done:!1};case 2:if(u.n.r){u.s=3,u={up:u,n:u.n.r,s:0};continue}case 3:u=u.up}return{done:!0}}}}function uu(l){var u,h,p=(((u=l.r)===null||u===void 0?void 0:u.d)||0)-(((h=l.l)===null||h===void 0?void 0:h.d)||0),g=1<p?"r":p<-1?"l":"";g&&(u=g=="r"?"l":"r",h=r({},l),p=l[g],l.from=p.from,l.to=p.to,l[g]=p[g],h[g]=p[u],(l[u]=h).d=du(h)),l.d=du(l)}function du(h){var u=h.r,h=h.l;return(u?h?Math.max(u.d,h.d):u.d:h?h.d:0)+1}function Ji(l,u){return o(u).forEach(function(h){l[h]?qr(l[h],u[h]):l[h]=(function p(g){var w,x,S={};for(w in g)m(g,w)&&(x=g[w],S[w]=!x||typeof x!="object"||de.has(x.constructor)?x:p(x));return S})(u[h])}),l}function ca(l,u){return l.all||u.all||Object.keys(l).some(function(h){return u[h]&&cu(u[h],l[h])})}b(et.prototype,((_t={add:function(l){return qr(this,l),this},addKey:function(l){return Br(this,l,l),this},addKeys:function(l){var u=this;return l.forEach(function(h){return Br(u,h,h)}),this},hasKey:function(l){var u=Qi(this).next(l).value;return u&&Se(u.from,l)<=0&&0<=Se(u.to,l)}})[ae]=function(){return Qi(this)},_t));var Cn={},ua={},da=!1;function Xi(l){Ji(ua,l),da||(da=!0,setTimeout(function(){da=!1,ha(ua,!(ua={}))},0))}function ha(l,u){u===void 0&&(u=!1);var h=new Set;if(l.all)for(var p=0,g=Object.values(Cn);p<g.length;p++)hu(x=g[p],l,h,u);else for(var w in l){var x,S=/^idb\:\/\/(.*)\/(.*)\//.exec(w);S&&(w=S[1],S=S[2],(x=Cn["idb://".concat(w,"/").concat(S)])&&hu(x,l,h,u))}h.forEach(function(A){return A()})}function hu(l,u,h,p){for(var g=[],w=0,x=Object.entries(l.queries.query);w<x.length;w++){for(var S=x[w],A=S[0],O=[],M=0,_=S[1];M<_.length;M++){var j=_[M];ca(u,j.obsSet)?j.subscribers.forEach(function(D){return h.add(D)}):p&&O.push(j)}p&&g.push([A,O])}if(p)for(var R=0,L=g;R<L.length;R++){var N=L[R],A=N[0],O=N[1];l.queries.query[A]=O}}function Wg(l){var u=l._state,h=l._deps.indexedDB;if(u.isBeingOpened||l.idbdb)return u.dbReadyPromise.then(function(){return u.dbOpenError?ze(u.dbOpenError):l});u.isBeingOpened=!0,u.dbOpenError=null,u.openComplete=!1;var p=u.openCanceller,g=Math.round(10*l.verno),w=!1;function x(){if(u.openCanceller!==p)throw new fe.DatabaseClosed("db.open() was cancelled")}function S(){return new ce(function(j,R){if(x(),!h)throw new fe.MissingAPI;var L=l.name,N=u.autoSchema||!g?h.open(L):h.open(L,g);if(!N)throw new fe.MissingAPI;N.onerror=Bt(R),N.onblocked=Me(l._fireOnBlocked),N.onupgradeneeded=Me(function(D){var F;M=N.transaction,u.autoSchema&&!l._options.allowEmptyDB?(N.onerror=jr,M.abort(),N.result.close(),(F=h.deleteDatabase(L)).onsuccess=F.onerror=Me(function(){R(new fe.NoSuchDatabase("Database ".concat(L," doesnt exist")))})):(M.onerror=Bt(R),D=D.oldVersion>Math.pow(2,62)?0:D.oldVersion,_=D<1,l.idbdb=N.result,w&&Vg(l,M),Hg(l,D/10,M,R))},R),N.onsuccess=Me(function(){M=null;var D,F,U,B,G,X=l.idbdb=N.result,oe=T(X.objectStoreNames);if(0<oe.length)try{var Z=X.transaction((B=oe).length===1?B[0]:B,"readonly");if(u.autoSchema)F=X,U=Z,(D=l).verno=F.version/10,U=D._dbSchema=Wi(0,F,U),D._storeNames=T(F.objectStoreNames,0),Vi(D,[D._allTables],o(U),U);else if(Gi(l,l._dbSchema,Z),((G=ra(Wi(0,(G=l).idbdb,Z),G._dbSchema)).add.length||G.change.some(function(re){return re.add.length||re.change.length}))&&!w)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),X.close(),g=X.version+1,w=!0,j(S());Hi(l,Z)}catch{}Jn.push(l),X.onversionchange=Me(function(re){u.vcFired=!0,l.on("versionchange").fire(re)}),X.onclose=Me(function(re){l.on("close").fire(re)}),_&&(G=l._deps,Z=L,X=G.indexedDB,G=G.IDBKeyRange,oa(X)||Z===zi||sa(X,G).put({name:Z}).catch(Te)),j()},R)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<u.PR1398_maxLoop)return u.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),S();break;case"VersionError":if(0<g)return g=0,S()}return ce.reject(j)})}var A,O=u.dbReadyResolve,M=null,_=!1;return ce.race([p,(typeof navigator>"u"?ce.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function R(){return indexedDB.databases().finally(j)}A=setInterval(R,100),R()}).finally(function(){return clearInterval(A)}):Promise.resolve()).then(S)]).then(function(){return x(),u.onReadyBeingFired=[],ce.resolve(aa(function(){return l.on.ready.fire(l.vip)})).then(function j(){if(0<u.onReadyBeingFired.length){var R=u.onReadyBeingFired.reduce(jo,Te);return u.onReadyBeingFired=[],ce.resolve(aa(function(){return R(l.vip)})).then(j)}})}).finally(function(){u.openCanceller===p&&(u.onReadyBeingFired=null,u.isBeingOpened=!1)}).catch(function(j){u.dbOpenError=j;try{M&&M.abort()}catch{}return p===u.openCanceller&&l._close(),ze(j)}).finally(function(){u.openComplete=!0,O()}).then(function(){var j;return _&&(j={},l.tables.forEach(function(R){R.schema.indexes.forEach(function(L){L.name&&(j["idb://".concat(l.name,"/").concat(R.name,"/").concat(L.name)]=new et(-1/0,[[[]]]))}),j["idb://".concat(l.name,"/").concat(R.name,"/")]=j["idb://".concat(l.name,"/").concat(R.name,"/:dels")]=new et(-1/0,[[[]]])}),on(zr).fire(j),ha(j,!0)),l})}function fa(l){function u(w){return l.next(w)}var h=g(u),p=g(function(w){return l.throw(w)});function g(w){return function(A){var S=w(A),A=S.value;return S.done?A:A&&typeof A.then=="function"?A.then(h,p):a(A)?Promise.all(A).then(h,p):h(A)}}return g(u)()}function Zi(l,u,h){for(var p=a(l)?l.slice():[l],g=0;g<h;++g)p.push(u);return p}var Gg={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(l){return r(r({},l),{table:function(u){var h=l.table(u),p=h.schema,g={},w=[];function x(_,j,R){var L=Ur(_),N=g[L]=g[L]||[],D=_==null?0:typeof _=="string"?1:_.length,F=0<j,F=r(r({},R),{name:F?"".concat(L,"(virtual-from:").concat(R.name,")"):R.name,lowLevelIndex:R,isVirtual:F,keyTail:j,keyLength:D,extractKey:ta(_),unique:!F&&R.unique});return N.push(F),F.isPrimaryKey||w.push(F),1<D&&x(D===2?_[0]:_.slice(0,D-1),j+1,R),N.sort(function(U,B){return U.keyTail-B.keyTail}),F}u=x(p.primaryKey.keyPath,0,p.primaryKey),g[":id"]=[u];for(var S=0,A=p.indexes;S<A.length;S++){var O=A[S];x(O.keyPath,0,O)}function M(_){var j,R=_.query.index;return R.isVirtual?r(r({},_),{query:{index:R.lowLevelIndex,range:(j=_.query.range,R=R.keyTail,{type:j.type===1?2:j.type,lower:Zi(j.lower,j.lowerOpen?l.MAX_KEY:l.MIN_KEY,R),lowerOpen:!0,upper:Zi(j.upper,j.upperOpen?l.MIN_KEY:l.MAX_KEY,R),upperOpen:!0})}}):_}return r(r({},h),{schema:r(r({},p),{primaryKey:u,indexes:w,getIndexByKeyPath:function(_){return(_=g[Ur(_)])&&_[0]}}),count:function(_){return h.count(M(_))},query:function(_){return h.query(M(_))},openCursor:function(_){var j=_.query.index,R=j.keyTail,L=j.isVirtual,N=j.keyLength;return L?h.openCursor(M(_)).then(function(F){return F&&D(F)}):h.openCursor(_);function D(F){return Object.create(F,{continue:{value:function(U){U!=null?F.continue(Zi(U,_.reverse?l.MAX_KEY:l.MIN_KEY,R)):_.unique?F.continue(F.key.slice(0,N).concat(_.reverse?l.MIN_KEY:l.MAX_KEY,R)):F.continue()}},continuePrimaryKey:{value:function(U,B){F.continuePrimaryKey(Zi(U,l.MAX_KEY,R),B)}},primaryKey:{get:function(){return F.primaryKey}},key:{get:function(){var U=F.key;return N===1?U[0]:U.slice(0,N)}},value:{get:function(){return F.value}}})}}})}})}};function pa(l,u,h,p){return h=h||{},p=p||"",o(l).forEach(function(g){var w,x,S;m(u,g)?(w=l[g],x=u[g],typeof w=="object"&&typeof x=="object"&&w&&x?(S=Y(w))!==Y(x)?h[p+g]=u[g]:S==="Object"?pa(w,x,h,p+g+"."):w!==x&&(h[p+g]=u[g]):w!==x&&(h[p+g]=u[g])):h[p+g]=void 0}),o(u).forEach(function(g){m(l,g)||(h[p+g]=u[g])}),h}function ma(l,u){return u.type==="delete"?u.keys:u.keys||u.values.map(l.extractKey)}var Yg={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(l){return r(r({},l),{table:function(u){var h=l.table(u),p=h.schema.primaryKey;return r(r({},h),{mutate:function(g){var w=he.trans,x=w.table(u).hook,S=x.deleting,A=x.creating,O=x.updating;switch(g.type){case"add":if(A.fire===Te)break;return w._promise("readwrite",function(){return M(g)},!0);case"put":if(A.fire===Te&&O.fire===Te)break;return w._promise("readwrite",function(){return M(g)},!0);case"delete":if(S.fire===Te)break;return w._promise("readwrite",function(){return M(g)},!0);case"deleteRange":if(S.fire===Te)break;return w._promise("readwrite",function(){return(function _(j,R,L){return h.query({trans:j,values:!1,query:{index:p,range:R},limit:L}).then(function(N){var D=N.result;return M({type:"delete",keys:D,trans:j}).then(function(F){return 0<F.numFailures?Promise.reject(F.failures[0]):D.length<L?{failures:[],numFailures:0,lastResult:void 0}:_(j,r(r({},R),{lower:D[D.length-1],lowerOpen:!0}),L)})})})(g.trans,g.range,1e4)},!0)}return h.mutate(g);function M(_){var j,R,L,N=he.trans,D=_.keys||ma(p,_);if(!D)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:D}):r({},_)).type!=="delete"&&(_.values=i([],_.values)),_.keys&&(_.keys=i([],_.keys)),j=h,L=D,((R=_).type==="add"?Promise.resolve([]):j.getMany({trans:R.trans,keys:L,cache:"immutable"})).then(function(F){var U=D.map(function(B,G){var X,oe,Z,re=F[G],le={onerror:null,onsuccess:null};return _.type==="delete"?S.fire.call(le,B,re,N):_.type==="add"||re===void 0?(X=A.fire.call(le,B,_.values[G],N),B==null&&X!=null&&(_.keys[G]=B=X,p.outbound||I(_.values[G],p.keyPath,B))):(X=pa(re,_.values[G]),(oe=O.fire.call(le,X,B,re,N))&&(Z=_.values[G],Object.keys(oe).forEach(function(se){m(Z,se)?Z[se]=oe[se]:I(Z,se,oe[se])}))),le});return h.mutate(_).then(function(B){for(var G=B.failures,X=B.results,oe=B.numFailures,B=B.lastResult,Z=0;Z<D.length;++Z){var re=(X||D)[Z],le=U[Z];re==null?le.onerror&&le.onerror(G[Z]):le.onsuccess&&le.onsuccess(_.type==="put"&&F[Z]?_.values[Z]:re)}return{failures:G,results:X,numFailures:oe,lastResult:B}}).catch(function(B){return U.forEach(function(G){return G.onerror&&G.onerror(B)}),Promise.reject(B)})})}}})}})}};function fu(l,u,h){try{if(!u||u.keys.length<l.length)return null;for(var p=[],g=0,w=0;g<u.keys.length&&w<l.length;++g)Se(u.keys[g],l[w])===0&&(p.push(h?te(u.values[g]):u.values[g]),++w);return p.length===l.length?p:null}catch{return null}}var Qg={stack:"dbcore",level:-1,create:function(l){return{table:function(u){var h=l.table(u);return r(r({},h),{getMany:function(p){if(!p.cache)return h.getMany(p);var g=fu(p.keys,p.trans._cache,p.cache==="clone");return g?ce.resolve(g):h.getMany(p).then(function(w){return p.trans._cache={keys:p.keys,values:p.cache==="clone"?te(w):w},w})},mutate:function(p){return p.type!=="add"&&(p.trans._cache=null),h.mutate(p)}})}}}};function pu(l,u){return l.trans.mode==="readonly"&&!!l.subscr&&!l.trans.explicit&&l.trans.db._options.cache!=="disabled"&&!u.schema.primaryKey.outbound}function mu(l,u){switch(l){case"query":return u.values&&!u.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Jg={stack:"dbcore",level:0,name:"Observability",create:function(l){var u=l.schema.name,h=new et(l.MIN_KEY,l.MAX_KEY);return r(r({},l),{transaction:function(p,g,w){if(he.subscr&&g!=="readonly")throw new fe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(he.querier));return l.transaction(p,g,w)},table:function(p){var g=l.table(p),w=g.schema,x=w.primaryKey,_=w.indexes,S=x.extractKey,A=x.outbound,O=x.autoIncrement&&_.filter(function(R){return R.compound&&R.keyPath.includes(x.keyPath)}),M=r(r({},g),{mutate:function(R){function L(se){return se="idb://".concat(u,"/").concat(p,"/").concat(se),B[se]||(B[se]=new et)}var N,D,F,U=R.trans,B=R.mutatedParts||(R.mutatedParts={}),G=L(""),X=L(":dels"),oe=R.type,le=R.type==="deleteRange"?[R.range]:R.type==="delete"?[R.keys]:R.values.length<50?[ma(x,R).filter(function(se){return se}),R.values]:[],Z=le[0],re=le[1],le=R.trans._cache;return a(Z)?(G.addKeys(Z),(le=oe==="delete"||Z.length===re.length?fu(Z,le):null)||X.addKeys(Z),(le||re)&&(N=L,D=le,F=re,w.indexes.forEach(function(se){var ue=N(se.name||"");function be(ke){return ke!=null?se.extractKey(ke):null}function ve(ke){return se.multiEntry&&a(ke)?ke.forEach(function(kt){return ue.addKey(kt)}):ue.addKey(ke)}(D||F).forEach(function(ke,tt){var ge=D&&be(D[tt]),tt=F&&be(F[tt]);Se(ge,tt)!==0&&(ge!=null&&ve(ge),tt!=null&&ve(tt))})}))):Z?(re={from:(re=Z.lower)!==null&&re!==void 0?re:l.MIN_KEY,to:(re=Z.upper)!==null&&re!==void 0?re:l.MAX_KEY},X.add(re),G.add(re)):(G.add(h),X.add(h),w.indexes.forEach(function(se){return L(se.name).add(h)})),g.mutate(R).then(function(se){return!Z||R.type!=="add"&&R.type!=="put"||(G.addKeys(se.results),O&&O.forEach(function(ue){for(var be=R.values.map(function(ge){return ue.extractKey(ge)}),ve=ue.keyPath.findIndex(function(ge){return ge===x.keyPath}),ke=0,kt=se.results.length;ke<kt;++ke)be[ke][ve]=se.results[ke];L(ue.name).addKeys(be)})),U.mutatedParts=Ji(U.mutatedParts||{},B),se})}}),_=function(L){var N=L.query,L=N.index,N=N.range;return[L,new et((L=N.lower)!==null&&L!==void 0?L:l.MIN_KEY,(N=N.upper)!==null&&N!==void 0?N:l.MAX_KEY)]},j={get:function(R){return[x,new et(R.key)]},getMany:function(R){return[x,new et().addKeys(R.keys)]},count:_,query:_,openCursor:_};return o(j).forEach(function(R){M[R]=function(L){var N=he.subscr,D=!!N,F=pu(he,g)&&mu(R,L)?L.obsSet={}:N;if(D){var U=function(re){return re="idb://".concat(u,"/").concat(p,"/").concat(re),F[re]||(F[re]=new et)},B=U(""),G=U(":dels"),N=j[R](L),D=N[0],N=N[1];if((R==="query"&&D.isPrimaryKey&&!L.values?G:U(D.name||"")).add(N),!D.isPrimaryKey){if(R!=="count"){var X=R==="query"&&A&&L.values&&g.query(r(r({},L),{values:!1}));return g[R].apply(this,arguments).then(function(re){if(R==="query"){if(A&&L.values)return X.then(function(be){return be=be.result,B.addKeys(be),re});var le=L.values?re.result.map(S):re.result;(L.values?B:G).addKeys(le)}else if(R==="openCursor"){var se=re,ue=L.values;return se&&Object.create(se,{key:{get:function(){return G.addKey(se.primaryKey),se.key}},primaryKey:{get:function(){var be=se.primaryKey;return G.addKey(be),be}},value:{get:function(){return ue&&B.addKey(se.primaryKey),se.value}}})}return re})}G.add(h)}}return g[R].apply(this,arguments)}}),M}})}};function gu(l,u,h){if(h.numFailures===0)return u;if(u.type==="deleteRange")return null;var p=u.keys?u.keys.length:"values"in u&&u.values?u.values.length:1;return h.numFailures===p?null:(u=r({},u),a(u.keys)&&(u.keys=u.keys.filter(function(g,w){return!(w in h.failures)})),"values"in u&&a(u.values)&&(u.values=u.values.filter(function(g,w){return!(w in h.failures)})),u)}function ga(l,u){return h=l,((p=u).lower===void 0||(p.lowerOpen?0<Se(h,p.lower):0<=Se(h,p.lower)))&&(l=l,(u=u).upper===void 0||(u.upperOpen?Se(l,u.upper)<0:Se(l,u.upper)<=0));var h,p}function bu(l,u,j,p,g,w){if(!j||j.length===0)return l;var x=u.query.index,S=x.multiEntry,A=u.query.range,O=p.schema.primaryKey.extractKey,M=x.extractKey,_=(x.lowLevelIndex||x).extractKey,j=j.reduce(function(R,L){var N=R,D=[];if(L.type==="add"||L.type==="put")for(var F=new et,U=L.values.length-1;0<=U;--U){var B,G=L.values[U],X=O(G);F.hasKey(X)||(B=M(G),(S&&a(B)?B.some(function(se){return ga(se,A)}):ga(B,A))&&(F.addKey(X),D.push(G)))}switch(L.type){case"add":var oe=new et().addKeys(u.values?R.map(function(ue){return O(ue)}):R),N=R.concat(u.values?D.filter(function(ue){return ue=O(ue),!oe.hasKey(ue)&&(oe.addKey(ue),!0)}):D.map(function(ue){return O(ue)}).filter(function(ue){return!oe.hasKey(ue)&&(oe.addKey(ue),!0)}));break;case"put":var Z=new et().addKeys(L.values.map(function(ue){return O(ue)}));N=R.filter(function(ue){return!Z.hasKey(u.values?O(ue):ue)}).concat(u.values?D:D.map(function(ue){return O(ue)}));break;case"delete":var re=new et().addKeys(L.keys);N=R.filter(function(ue){return!re.hasKey(u.values?O(ue):ue)});break;case"deleteRange":var le=L.range;N=R.filter(function(ue){return!ga(O(ue),le)})}return N},l);return j===l?l:(j.sort(function(R,L){return Se(_(R),_(L))||Se(O(R),O(L))}),u.limit&&u.limit<1/0&&(j.length>u.limit?j.length=u.limit:l.length===u.limit&&j.length<u.limit&&(g.dirty=!0)),w?Object.freeze(j):j)}function wu(l,u){return Se(l.lower,u.lower)===0&&Se(l.upper,u.upper)===0&&!!l.lowerOpen==!!u.lowerOpen&&!!l.upperOpen==!!u.upperOpen}function Xg(l,u){return(function(h,p,g,w){if(h===void 0)return p!==void 0?-1:0;if(p===void 0)return 1;if((p=Se(h,p))===0){if(g&&w)return 0;if(g)return 1;if(w)return-1}return p})(l.lower,u.lower,l.lowerOpen,u.lowerOpen)<=0&&0<=(function(h,p,g,w){if(h===void 0)return p!==void 0?1:0;if(p===void 0)return-1;if((p=Se(h,p))===0){if(g&&w)return 0;if(g)return-1;if(w)return 1}return p})(l.upper,u.upper,l.upperOpen,u.upperOpen)}function Zg(l,u,h,p){l.subscribers.add(h),p.addEventListener("abort",function(){var g,w;l.subscribers.delete(h),l.subscribers.size===0&&(g=l,w=u,setTimeout(function(){g.subscribers.size===0&&$e(w,g)},3e3))})}var eb={stack:"dbcore",level:0,name:"Cache",create:function(l){var u=l.schema.name;return r(r({},l),{transaction:function(h,p,g){var w,x,S=l.transaction(h,p,g);return p==="readwrite"&&(x=(w=new AbortController).signal,g=function(A){return function(){if(w.abort(),p==="readwrite"){for(var O=new Set,M=0,_=h;M<_.length;M++){var j=_[M],R=Cn["idb://".concat(u,"/").concat(j)];if(R){var L=l.table(j),N=R.optimisticOps.filter(function(ue){return ue.trans===S});if(S._explicit&&A&&S.mutatedParts)for(var D=0,F=Object.values(R.queries.query);D<F.length;D++)for(var U=0,B=(oe=F[D]).slice();U<B.length;U++)ca((Z=B[U]).obsSet,S.mutatedParts)&&($e(oe,Z),Z.subscribers.forEach(function(ue){return O.add(ue)}));else if(0<N.length){R.optimisticOps=R.optimisticOps.filter(function(ue){return ue.trans!==S});for(var G=0,X=Object.values(R.queries.query);G<X.length;G++)for(var oe,Z,re,le=0,se=(oe=X[G]).slice();le<se.length;le++)(Z=se[le]).res!=null&&S.mutatedParts&&(A&&!Z.dirty?(re=Object.isFrozen(Z.res),re=bu(Z.res,Z.req,N,L,Z,re),Z.dirty?($e(oe,Z),Z.subscribers.forEach(function(ue){return O.add(ue)})):re!==Z.res&&(Z.res=re,Z.promise=ce.resolve({result:re}))):(Z.dirty&&$e(oe,Z),Z.subscribers.forEach(function(ue){return O.add(ue)})))}}}O.forEach(function(ue){return ue()})}}},S.addEventListener("abort",g(!1),{signal:x}),S.addEventListener("error",g(!1),{signal:x}),S.addEventListener("complete",g(!0),{signal:x})),S},table:function(h){var p=l.table(h),g=p.schema.primaryKey;return r(r({},p),{mutate:function(w){var x=he.trans;if(g.outbound||x.db._options.cache==="disabled"||x.explicit||x.idbtrans.mode!=="readwrite")return p.mutate(w);var S=Cn["idb://".concat(u,"/").concat(h)];return S?(x=p.mutate(w),w.type!=="add"&&w.type!=="put"||!(50<=w.values.length||ma(g,w).some(function(A){return A==null}))?(S.optimisticOps.push(w),w.mutatedParts&&Xi(w.mutatedParts),x.then(function(A){0<A.numFailures&&($e(S.optimisticOps,w),(A=gu(0,w,A))&&S.optimisticOps.push(A),w.mutatedParts&&Xi(w.mutatedParts))}),x.catch(function(){$e(S.optimisticOps,w),w.mutatedParts&&Xi(w.mutatedParts)})):x.then(function(A){var O=gu(0,r(r({},w),{values:w.values.map(function(M,_){var j;return A.failures[_]?M:(M=(j=g.keyPath)!==null&&j!==void 0&&j.includes(".")?te(M):r({},M),I(M,g.keyPath,A.results[_]),M)})}),A);S.optimisticOps.push(O),queueMicrotask(function(){return w.mutatedParts&&Xi(w.mutatedParts)})}),x):p.mutate(w)},query:function(w){if(!pu(he,p)||!mu("query",w))return p.query(w);var x=((O=he.trans)===null||O===void 0?void 0:O.db._options.cache)==="immutable",_=he,S=_.requery,A=_.signal,O=(function(L,N,D,F){var U=Cn["idb://".concat(L,"/").concat(N)];if(!U)return[];if(!(N=U.queries[D]))return[null,!1,U,null];var B=N[(F.query?F.query.index.name:null)||""];if(!B)return[null,!1,U,null];switch(D){case"query":var G=B.find(function(X){return X.req.limit===F.limit&&X.req.values===F.values&&wu(X.req.query.range,F.query.range)});return G?[G,!0,U,B]:[B.find(function(X){return("limit"in X.req?X.req.limit:1/0)>=F.limit&&(!F.values||X.req.values)&&Xg(X.req.query.range,F.query.range)}),!1,U,B];case"count":return G=B.find(function(X){return wu(X.req.query.range,F.query.range)}),[G,!!G,U,B]}})(u,h,"query",w),M=O[0],_=O[1],j=O[2],R=O[3];return M&&_?M.obsSet=w.obsSet:(_=p.query(w).then(function(L){var N=L.result;if(M&&(M.res=N),x){for(var D=0,F=N.length;D<F;++D)Object.freeze(N[D]);Object.freeze(N)}else L.result=te(N);return L}).catch(function(L){return R&&M&&$e(R,M),Promise.reject(L)}),M={obsSet:w.obsSet,promise:_,subscribers:new Set,type:"query",req:w,dirty:!1},R?R.push(M):(R=[M],(j=j||(Cn["idb://".concat(u,"/").concat(h)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[w.query.index.name||""]=R)),Zg(M,R,S,A),M.promise.then(function(L){return{result:bu(L.result,w,j?.optimisticOps,p,M,x)}})}})}})}};function es(l,u){return new Proxy(l,{get:function(h,p,g){return p==="db"?u:Reflect.get(h,p,g)}})}var Yt=(Fe.prototype.version=function(l){if(isNaN(l)||l<.1)throw new fe.Type("Given version is not a positive number");if(l=Math.round(10*l)/10,this.idbdb||this._state.isBeingOpened)throw new fe.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,l);var u=this._versions,h=u.filter(function(p){return p._cfg.version===l})[0];return h||(h=new this.Version(l),u.push(h),u.sort(qg),h.stores({}),this._state.autoSchema=!1,h)},Fe.prototype._whenReady=function(l){var u=this;return this.idbdb&&(this._state.openComplete||he.letThrough||this._vip)?l():new ce(function(h,p){if(u._state.openComplete)return p(new fe.DatabaseClosed(u._state.dbOpenError));if(!u._state.isBeingOpened){if(!u._state.autoOpen)return void p(new fe.DatabaseClosed);u.open().catch(Te)}u._state.dbReadyPromise.then(h,p)}).then(l)},Fe.prototype.use=function(l){var u=l.stack,h=l.create,p=l.level,g=l.name;return g&&this.unuse({stack:u,name:g}),l=this._middlewares[u]||(this._middlewares[u]=[]),l.push({stack:u,create:h,level:p??10,name:g}),l.sort(function(w,x){return w.level-x.level}),this},Fe.prototype.unuse=function(l){var u=l.stack,h=l.name,p=l.create;return u&&this._middlewares[u]&&(this._middlewares[u]=this._middlewares[u].filter(function(g){return p?g.create!==p:!!h&&g.name!==h})),this},Fe.prototype.open=function(){var l=this;return $n(en,function(){return Wg(l)})},Fe.prototype._close=function(){var l=this._state,u=Jn.indexOf(this);if(0<=u&&Jn.splice(u,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}l.isBeingOpened||(l.dbReadyPromise=new ce(function(h){l.dbReadyResolve=h}),l.openCanceller=new ce(function(h,p){l.cancelOpen=p}))},Fe.prototype.close=function(h){var u=(h===void 0?{disableAutoOpen:!0}:h).disableAutoOpen,h=this._state;u?(h.isBeingOpened&&h.cancelOpen(new fe.DatabaseClosed),this._close(),h.autoOpen=!1,h.dbOpenError=new fe.DatabaseClosed):(this._close(),h.autoOpen=this._options.autoOpen||h.isBeingOpened,h.openComplete=!1,h.dbOpenError=null)},Fe.prototype.delete=function(l){var u=this;l===void 0&&(l={disableAutoOpen:!0});var h=0<arguments.length&&typeof arguments[0]!="object",p=this._state;return new ce(function(g,w){function x(){u.close(l);var S=u._deps.indexedDB.deleteDatabase(u.name);S.onsuccess=Me(function(){var A,O,M;A=u._deps,O=u.name,M=A.indexedDB,A=A.IDBKeyRange,oa(M)||O===zi||sa(M,A).delete(O).catch(Te),g()}),S.onerror=Bt(w),S.onblocked=u._fireOnBlocked}if(h)throw new fe.InvalidArgument("Invalid closeOptions argument to db.delete()");p.isBeingOpened?p.dbReadyPromise.then(x):x()})},Fe.prototype.backendDB=function(){return this.idbdb},Fe.prototype.isOpen=function(){return this.idbdb!==null},Fe.prototype.hasBeenClosed=function(){var l=this._state.dbOpenError;return l&&l.name==="DatabaseClosed"},Fe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Fe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Fe.prototype,"tables",{get:function(){var l=this;return o(this._allTables).map(function(u){return l._allTables[u]})},enumerable:!1,configurable:!0}),Fe.prototype.transaction=function(){var l=function(u,h,p){var g=arguments.length;if(g<2)throw new fe.InvalidArgument("Too few arguments");for(var w=new Array(g-1);--g;)w[g-1]=arguments[g];return p=w.pop(),[u,ie(w),p]}.apply(this,arguments);return this._transaction.apply(this,l)},Fe.prototype._transaction=function(l,u,h){var p=this,g=he.trans;g&&g.db===this&&l.indexOf("!")===-1||(g=null);var w,x,S=l.indexOf("?")!==-1;l=l.replace("!","").replace("?","");try{if(x=u.map(function(O){if(O=O instanceof p.Table?O.name:O,typeof O!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return O}),l=="r"||l===Wo)w=Wo;else{if(l!="rw"&&l!=Go)throw new fe.InvalidArgument("Invalid transaction mode: "+l);w=Go}if(g){if(g.mode===Wo&&w===Go){if(!S)throw new fe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");g=null}g&&x.forEach(function(O){if(g&&g.storeNames.indexOf(O)===-1){if(!S)throw new fe.SubTransaction("Table "+O+" not included in parent transaction.");g=null}}),S&&g&&!g.active&&(g=null)}}catch(O){return g?g._promise(null,function(M,_){_(O)}):ze(O)}var A=function O(M,_,j,R,L){return ce.resolve().then(function(){var N=he.transless||he,D=M._createTransaction(_,j,M._dbSchema,R);if(D.explicit=!0,N={trans:D,transless:N},R)D.idbtrans=R.idbtrans;else try{D.create(),D.idbtrans._explicit=!0,M._state.PR1398_maxLoop=3}catch(B){return B.name===Wn.InvalidState&&M.isOpen()&&0<--M._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),M.close({disableAutoOpen:!1}),M.open().then(function(){return O(M,_,j,null,L)})):ze(B)}var F,U=yt(L);return U&&Qn(),N=ce.follow(function(){var B;(F=L.call(D,D))&&(U?(B=nn.bind(null,null),F.then(B,B)):typeof F.next=="function"&&typeof F.throw=="function"&&(F=fa(F)))},N),(F&&typeof F.then=="function"?ce.resolve(F).then(function(B){return D.active?B:ze(new fe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):N.then(function(){return F})).then(function(B){return R&&D._resolve(),D._completion.then(function(){return B})}).catch(function(B){return D._reject(B),ze(B)})})}.bind(null,this,w,x,g,h);return g?g._promise(w,A,"lock"):he.trans?$n(he.transless,function(){return p._whenReady(A)}):this._whenReady(A)},Fe.prototype.table=function(l){if(!m(this._allTables,l))throw new fe.InvalidTable("Table ".concat(l," does not exist"));return this._allTables[l]},Fe);function Fe(l,u){var h=this;this._middlewares={},this.verno=0;var p=Fe.dependencies;this._options=u=r({addons:Fe.addons,autoOpen:!0,indexedDB:p.indexedDB,IDBKeyRange:p.IDBKeyRange,cache:"cloned"},u),this._deps={indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange},p=u.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var g,w,x,S,A,O={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Te,dbReadyPromise:null,cancelOpen:Te,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:u.autoOpen};O.dbReadyPromise=new ce(function(_){O.dbReadyResolve=_}),O.openCanceller=new ce(function(_,j){O.cancelOpen=j}),this._state=O,this.name=l,this.on=Mr(this,"populate","blocked","versionchange","close",{ready:[jo,Te]}),this.on.ready.subscribe=Q(this.on.ready.subscribe,function(_){return function(j,R){Fe.vip(function(){var L,N=h._state;N.openComplete?(N.dbOpenError||ce.resolve().then(j),R&&_(j)):N.onReadyBeingFired?(N.onReadyBeingFired.push(j),R&&_(j)):(_(j),L=h,R||_(function D(){L.on.ready.unsubscribe(j),L.on.ready.unsubscribe(D)}))})}}),this.Collection=(g=this,Pr(Pg.prototype,function(F,D){this.db=g;var R=Yc,L=null;if(D)try{R=D()}catch(U){L=U}var N=F._ctx,D=N.table,F=D.hook.reading.fire;this._ctx={table:D,index:N.index,isPrimKey:!N.index||D.schema.primKey.keyPath&&N.index===D.schema.primKey.name,range:R,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:L,or:N.or,valueMapper:F!==Ar?F:null}})),this.Table=(w=this,Pr(Zc.prototype,function(_,j,R){this.db=w,this._tx=R,this.name=_,this.schema=j,this.hook=w._allTables[_]?w._allTables[_].hook:Mr(null,{creating:[Eg,Te],reading:[_g,Ar],updating:[Ig,Te],deleting:[Tg,Te]})})),this.Transaction=(x=this,Pr(zg.prototype,function(_,j,R,L,N){var D=this;this.db=x,this.mode=_,this.storeNames=j,this.schema=R,this.chromeTransactionDurability=L,this.idbtrans=null,this.on=Mr(this,"complete","error","abort"),this.parent=N||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ce(function(F,U){D._resolve=F,D._reject=U}),this._completion.then(function(){D.active=!1,D.on.complete.fire()},function(F){var U=D.active;return D.active=!1,D.on.error.fire(F),D.parent?D.parent._reject(F):U&&D.idbtrans&&D.idbtrans.abort(),ze(F)})})),this.Version=(S=this,Pr(Kg.prototype,function(_){this.db=S,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(A=this,Pr(iu.prototype,function(_,j,R){if(this.db=A,this._ctx={table:_,index:j===":id"?null:j,or:R},this._cmp=this._ascending=Se,this._descending=function(L,N){return Se(N,L)},this._max=function(L,N){return 0<Se(L,N)?L:N},this._min=function(L,N){return Se(L,N)<0?L:N},this._IDBKeyRange=A._deps.IDBKeyRange,!this._IDBKeyRange)throw new fe.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(h.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(h.name,"'. Closing db now to resume the delete request.")),h.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(h.name,"') was blocked")):console.warn("Upgrade '".concat(h.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=Fr(u.IDBKeyRange),this._createTransaction=function(_,j,R,L){return new h.Transaction(_,j,R,h._options.chromeTransactionDurability,L)},this._fireOnBlocked=function(_){h.on("blocked").fire(_),Jn.filter(function(j){return j.name===h.name&&j!==h&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(_)})},this.use(Qg),this.use(eb),this.use(Jg),this.use(Gg),this.use(Yg);var M=new Proxy(this,{get:function(_,j,R){if(j==="_vip")return!0;if(j==="table")return function(N){return es(h.table(N),M)};var L=Reflect.get(_,j,R);return L instanceof Zc?es(L,M):j==="tables"?L.map(function(N){return es(N,M)}):j==="_createTransaction"?function(){return es(L.apply(this,arguments),M)}:L}});this.vip=M,p.forEach(function(_){return _(h)})}var ts,_t=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",tb=(ba.prototype.subscribe=function(l,u,h){return this._subscribe(l&&typeof l!="function"?l:{next:l,error:u,complete:h})},ba.prototype[_t]=function(){return this},ba);function ba(l){this._subscribe=l}try{ts={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{ts={indexedDB:null,IDBKeyRange:null}}function yu(l){var u,h=!1,p=new tb(function(g){var w=yt(l),x,S=!1,A={},O={},M={get closed(){return S},unsubscribe:function(){S||(S=!0,x&&x.abort(),_&&on.storagemutated.unsubscribe(R))}};g.start&&g.start(M);var _=!1,j=function(){return Ko(L)},R=function(N){Ji(A,N),ca(O,A)&&j()},L=function(){var N,D,F;!S&&ts.indexedDB&&(A={},N={},x&&x.abort(),x=new AbortController,F=(function(U){var B=Gn();try{w&&Qn();var G=tn(l,U);return G=w?G.finally(nn):G}finally{B&&Yn()}})(D={subscr:N,signal:x.signal,requery:j,querier:l,trans:null}),Promise.resolve(F).then(function(U){h=!0,u=U,S||D.signal.aborted||(A={},(function(B){for(var G in B)if(m(B,G))return;return 1})(O=N)||_||(on(zr,R),_=!0),Ko(function(){return!S&&g.next&&g.next(U)}))},function(U){h=!1,["DatabaseClosedError","AbortError"].includes(U?.name)||S||Ko(function(){S||g.error&&g.error(U)})}))};return setTimeout(j,0),M});return p.hasValue=function(){return h},p.getValue=function(){return u},p}var _n=Yt;function wa(l){var u=an;try{an=!0,on.storagemutated.fire(l),ha(l,!0)}finally{an=u}}b(_n,r(r({},Ai),{delete:function(l){return new _n(l,{addons:[]}).delete()},exists:function(l){return new _n(l,{addons:[]}).open().then(function(u){return u.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(l){try{return u=_n.dependencies,h=u.indexedDB,u=u.IDBKeyRange,(oa(h)?Promise.resolve(h.databases()).then(function(p){return p.map(function(g){return g.name}).filter(function(g){return g!==zi})}):sa(h,u).toCollection().primaryKeys()).then(l)}catch{return ze(new fe.MissingAPI)}var u,h},defineClass:function(){return function(l){c(this,l)}},ignoreTransaction:function(l){return he.trans?$n(he.transless,l):l()},vip:aa,async:function(l){return function(){try{var u=fa(l.apply(this,arguments));return u&&typeof u.then=="function"?u:ce.resolve(u)}catch(h){return ze(h)}}},spawn:function(l,u,h){try{var p=fa(l.apply(h,u||[]));return p&&typeof p.then=="function"?p:ce.resolve(p)}catch(g){return ze(g)}},currentTransaction:{get:function(){return he.trans||null}},waitFor:function(l,u){return u=ce.resolve(typeof l=="function"?_n.ignoreTransaction(l):l).timeout(u||6e4),he.trans?he.trans.waitFor(u):u},Promise:ce,debug:{get:function(){return Ut},set:function(l){Bc(l)}},derive:$,extend:c,props:b,override:Q,Events:Mr,on,liveQuery:yu,extendObservabilitySet:Ji,getByKeyPath:W,setByKeyPath:I,delByKeyPath:function(l,u){typeof u=="string"?I(l,u,void 0):"length"in u&&[].map.call(u,function(h){I(l,h,void 0)})},shallowClone:V,deepClone:te,getObjectDiff:pa,cmp:Se,asap:ne,minKey:-1/0,addons:[],connections:Jn,errnames:Wn,dependencies:ts,cache:Cn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(l){return parseInt(l)}).reduce(function(l,u,h){return l+u/Math.pow(10,2*h)})})),_n.maxKey=Fr(_n.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(on(zr,function(l){an||(l=new CustomEvent(Xo,{detail:l}),an=!0,dispatchEvent(l),an=!1)}),addEventListener(Xo,function(l){l=l.detail,an||wa(l)}));var er,an=!1,vu=function(){};return typeof BroadcastChannel<"u"&&((vu=function(){(er=new BroadcastChannel(Xo)).onmessage=function(l){return l.data&&wa(l.data)}})(),typeof er.unref=="function"&&er.unref(),on(zr,function(l){an||er.postMessage(l)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(l){if(!Yt.disableBfCache&&l.persisted){Ut&&console.debug("Dexie: handling persisted pagehide"),er?.close();for(var u=0,h=Jn;u<h.length;u++)h[u].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(l){!Yt.disableBfCache&&l.persisted&&(Ut&&console.debug("Dexie: handling persisted pageshow"),vu(),wa({all:new et(-1/0,[[]])}))})),ce.rejectionMapper=function(l,u){return!l||l instanceof He||l instanceof TypeError||l instanceof SyntaxError||!l.name||!Uc[l.name]?l:(u=new Uc[l.name](u||l.message,l),"stack"in l&&v(u,"stack",{get:function(){return this.inner.stack}}),u)},Bc(Ut),r(Yt,Object.freeze({__proto__:null,Dexie:Yt,liveQuery:yu,Entity:Qc,cmp:Se,PropModSymbol:Gt,PropModification:Nr,replacePrefix:function(l,u){return new Nr({replacePrefix:[l,u]})},add:function(l){return new Nr({add:l})},remove:function(l){return new Nr({remove:l})},default:Yt,RangeSet:et,mergeRanges:qr,rangesOverlap:cu}),{default:Yt}),Yt})})(ys)),ys.exports}var Bb=Ub();const Fa=zb(Bb),Pu=Symbol.for("Dexie"),Os=globalThis[Pu]||(globalThis[Pu]=Fa);if(Fa.semVer!==Os.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Fa.semVer} and ${Os.semVer}`);const{liveQuery:Tl,mergeRanges:Z2,rangesOverlap:eT,RangeSet:tT,cmp:nT,Entity:rT,PropModSymbol:iT,PropModification:sT,replacePrefix:oT,add:aT,remove:lT}=Os,qb="easydb";function Tt(e,t){return`${e}::${t}`}let rs=null;function Ds(){if(rs)return rs;const e=new Os(qb);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),i=(await n.toArray()).filter(a=>a.workspaceId==null);if(i.length===0)return;const s=(await t.table("workspaces").toArray()).map(a=>a.id),o=s.length>0?s:["default"];for(const a of i){for(const c of o)await n.put({key:Tt(c,a.key),workspaceId:c,name:a.key,value:a.value});await n.delete(a.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Hb()),rs={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},rs}function Hb(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Vr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>Il(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const i=await e.get(t);if(!i)throw new Error(`patch: doc id=${t} vanished after update`);return i},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=Tl(()=>e.toArray()).subscribe({next:i=>t(i)});return()=>r.unsubscribe()}}}function Vb(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const i=Object.entries(n);return r.filter(s=>Il(s,i)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(i=>({...i,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const s=await e.get(n);if(!s)throw new Error(`row patch: row ${n} vanished after update`);return s},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},async count(){return e.where("tableId").equals(t).count()},subscribe(n){const i=Tl(()=>e.where("tableId").equals(t).toArray()).subscribe({next:s=>n(s)});return()=>i.unsubscribe()}}}function Kb(e,t){const n=i=>({...i,workspaceId:t(),key:Tt(t(),i.name),name:i.name,value:i.value}),r=()=>e.where("workspaceId").equals(t());return{async find(i){const s=await r().toArray();if(!i||Object.keys(i).length===0)return s;const o=Object.entries(i);return s.filter(a=>Il(a,o))},async findOne(i){return await e.get(Tt(t(),i))??null},async insert(i){const s=n(i);return await e.add(s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(o=>n(o));return await e.bulkAdd(s),s},async upsert(i){const s=n(i);return await e.put(s),s},async patch(i,s){const o=Tt(t(),i);if(await e.update(o,s)===0)throw new Error(`setting patch: no setting ${i}`);const c=await e.get(o);if(!c)throw new Error(`setting patch: ${i} vanished after update`);return c},async remove(i){await e.delete(Tt(t(),i))},async bulkRemove(i){i.length!==0&&await e.bulkDelete(i.map(s=>Tt(t(),s)))},subscribe(i){const o=Tl(()=>r().toArray()).subscribe({next:a=>i(a)});return()=>o.unsubscribe()}}}function Il(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Wb(e,t){return{workspaces:Vr(e.workspaces),tables:Vr(e.tables),settings:Kb(e.settings,t),plugins:Vr(e.plugins),viewTemplates:Vr(e.viewTemplates),viewInstances:Vr(e.viewInstances),rows:n=>Vb(e.rows,n)}}function Gb(e){const{base:t,providers:n,tableById:r,ctx:i}=e,s=new Map;return{...t,rows(o){const a=r(o),c=a?.source;if(c){const d=n.get(c.type);if(d){const f=JSON.stringify(c),m=s.get(o);if(m&&m.key===f)return m.coll;const b=d.create(a,i);return s.set(o,{key:f,coll:b}),b}}return s.delete(o),t.rows(o)}}}function Ee(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function je(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function lr(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function fn(e,t){const n=new Set([...e].map(i=>i.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let i=2;;i++){const s=`${r}-${i}`;if(!n.has(s.toLowerCase()))return s}}function Yb(e){const t=async(r,i)=>(await e.find()).filter(s=>s.workspaceId===r&&s.id!==i).map(s=>s.name),n=(r,i)=>{const s=fn(i,r.name);return s===r.name?r:(console.warn(`[store] "${r.name}" is taken in this workspace — stored as "${s}"`),{...r,name:s,code:je(s)})};return{...e,async insert(r){return e.insert(n(r,await t(r.workspaceId,r.id)))},async bulkInsert(r){if(r.length===0)return e.bulkInsert(r);const i=new Set((await e.find()).filter(o=>o.workspaceId===r[0].workspaceId).map(o=>o.name)),s=r.map(o=>{const a=n(o,i);return i.add(a.name),a});return e.bulkInsert(s)},async upsert(r){return e.upsert(n(r,await t(r.workspaceId,r.id)))},async patch(r,i){if(typeof i.name!="string")return e.patch(r,i);const s=await e.findOne(r);if(!s)return e.patch(r,i);const o=fn(await t(s.workspaceId,r),i.name);return o===i.name?e.patch(r,i):(console.warn(`[store] "${i.name}" is taken in this workspace — renamed to "${o}"`),e.patch(r,{...i,name:o,code:je(o)}))}}}function Al(e,t,n,r,i){let s=0,o=!1;const a=()=>{const d=++s;n().then(f=>{o||d!==s||r(f)})};a();const c=e.onChanged((d,f)=>{d===t&&(f&&i&&f!==i||a())});return()=>{o=!0,c()}}function Kr(e,t){const n=r=>e.find(t,r);return{find:r=>n(r),async findOne(r){return await e.findOne(t,r)??null},async insert(r){return await e.insert(t,r),r},async bulkInsert(r){return r.length===0?[]:(await e.bulkInsert(t,r),r)},async upsert(r){return await e.upsert(t,r),r},async patch(r,i){return await e.patch(t,r,i)},async remove(r){await e.remove(t,r)},async bulkRemove(r){r.length!==0&&await e.bulkRemove(t,r)},subscribe(r){return Al(e,t,()=>n(),r)}}}const jn=2e4;function Qb(e,t){const n=i=>e.find("rows",{...i,tableId:t},jn),r=e.queryRows?.bind(e);return{find:i=>n(i),...r?{query:i=>r(t,i)}:{},async findOne(i){const s=await e.findOne("rows",i);return s&&s.tableId===t?s:null},async insert(i){const s={...i,tableId:t};return await e.insert("rows",s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(o=>({...o,tableId:t}));return await e.bulkInsert("rows",s),s},async upsert(i){const s={...i,tableId:t};return await e.upsert("rows",s),s},async patch(i,s){return await e.patch("rows",i,s)},async remove(i){await e.remove("rows",i)},async bulkRemove(i){i.length!==0&&await e.bulkRemove("rows",i)},subscribe(i){return Al(e,"rows",()=>n(),i,t)},...e.countRows?{count:()=>e.countRows(t)}:{},watch(i){return i(),e.onChanged((s,o)=>{s==="rows"&&(o&&o!==t||i())})}}}function Jb(e,t){const n=i=>({...i,workspaceId:t(),key:Tt(t(),i.name),name:i.name,value:i.value}),r=i=>e.find("settings",{...i,workspaceId:t()});return{find:i=>r(i),async findOne(i){return await e.findOne("settings",Tt(t(),i))??null},async insert(i){const s=n(i);return await e.insert("settings",s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(o=>n(o));return await e.bulkInsert("settings",s),s},async upsert(i){const s=n(i);return await e.upsert("settings",s),s},async patch(i,s){const o=Tt(t(),i);return await e.patch("settings",o,s)},async remove(i){await e.remove("settings",Tt(t(),i))},async bulkRemove(i){i.length!==0&&await e.bulkRemove("settings",i.map(s=>Tt(t(),s)))},subscribe(i){return Al(e,"settings",()=>r(),i)}}}function Xb(e,t){return{workspaces:Kr(e,"workspaces"),tables:Kr(e,"tables"),settings:Jb(e,t),plugins:Kr(e,"plugins"),viewTemplates:Kr(e,"viewTemplates"),viewInstances:Kr(e,"viewInstances"),rows:n=>Qb(e,n)}}function Zb(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const i of r)try{i(n)}catch(s){console.error(`[event:${String(t)}] listener threw`,s)}}}}const ew=new Set(["html-preview"]);function tw(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,visualizations:new Map,rowSources:new Map,settings:new Map,commands:[],commandFallbacks:[]}}function Mt(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function ka(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function nw(e){return{registerHeaderButton:t=>Mt(e.headerButtons,t),registerFooterButton:t=>Mt(e.footerButtons,t),registerTableButton:t=>Mt(e.tableButtons,t),registerColumnEditorAction:t=>Mt(e.columnEditorActions,t),registerImporter:t=>Mt(e.importers,t),registerConnector:t=>Mt(e.connectors,t),registerExporter:t=>Mt(e.exporters,t),registerUrlSource:t=>Mt(e.urlSources,t),registerDropHandler:t=>Mt(e.dropHandlers,t),registerCellRenderer:(t,n)=>ka(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>ka(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>ka(e.tableRenderers,t,n),registerVisualization:t=>(e.visualizations.set(t.id,t),()=>{e.visualizations.get(t.id)===t&&e.visualizations.delete(t.id)}),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>Mt(e.commands,t),registerCommandFallback:t=>Mt(e.commandFallbacks,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:rw}}const rw={async alert(e,t){const n=lt.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=lt.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=lt.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=lt.instance;if(r)return r.choice(e,t,n);const i=window.prompt(`${e}

Options: ${t.join(", ")}`);return i&&t.includes(i)?i:null},toast(e,t){const n=Mn.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Rl="/easydbaccess/settings.json",Uh="/easydbaccess/secrets.txt";function wi(e){try{return globalThis.localStorage??null}catch{return null}}function Xs(e){const t=wi();if(!t)return{};const n=t.getItem(Rl);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function Ls(e,t){return Xs()[e]}function iw(e,t,n){const r=wi();if(!r)return;const i=Xs();i[e]=t,r.setItem(Rl,JSON.stringify(i))}function sw(e,t){const n=wi();if(!n)return;const r=Xs();e in r&&(delete r[e],n.setItem(Rl,JSON.stringify(r)))}function vs(e,t){return e in Xs()}function li(e){return wi()?.getItem(Uh)??""}function Bh(e,t){wi()?.setItem(Uh,e)}function ur(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const i=r.indexOf(":");if(i<0)continue;const s=r.slice(0,i).trim(),o=r.slice(i+1).trim();s&&(t[s]=o)}return t}function Ol(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const i=t[r.trim()];return i===void 0?n:i})}function qh(e){return typeof e=="string"&&e.includes("${secret:")}function Nu(e){return typeof e=="string"&&e.trim()!==""&&!qh(e)}const ow=/(^|[_:.\-\s])(tokens?|secrets?|passwords?|passwd|pwd|api[_-]?keys?|apikeys?|auth|credentials?|pat)($|[_:.\-\s])/i;function ju(e){return ow.test(e)}function aw(e,t){if((ju(e.name)||t?.(e.name)===!0)&&Nu(e.value))return!0;const r=e.value;return r===null||typeof r!="object"||Array.isArray(r)?!1:Object.entries(r).some(([i,s])=>ju(i)&&Nu(s))}function lw(e,t){const n=[],r=[];for(const i of e)aw(i,t)?r.push(i.name):n.push(i);return{kept:n,withheld:r}}function cw(e,t,n){return typeof t!="string"||t===""||!qh(e)?!1:Ol(e,n)===t}function uw(e){const t=nw(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),i=hw(e.store,e.registries),s={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:s,registerRowSource:r,settings:i,backend:{fetch:async(o,a)=>{const c=await dw(e.store),d=a?.body instanceof ArrayBuffer;if(!c||d)return globalThis.fetch(o,a);const f={url:o};return a?.method&&(f.method=a.method),a?.headers&&(f.headers=a.headers),typeof a?.body=="string"&&(f.body=a.body),globalThis.fetch(`${c}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})},async saveFile(o,a,c){const d=typeof a=="string"?new Blob([a],{type:c??"application/octet-stream"}):a,f=URL.createObjectURL(d),m=document.createElement("a");m.href=f,m.download=o,m.rel="noopener",document.body.appendChild(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function dw(e){const t="server-sync:url";let n=vs(t)?Ls(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:Ol(n,ur(li())).replace(/\/+$/,"")}function hw(e,t){const n=(a,c)=>`${a}:${c}`,r=(a,c)=>t.settings.get(a)?.fields.find(d=>d.key===c),i=a=>typeof a=="string"?Ol(a,ur(li())):a,s=async a=>vs(a)?Ls(a):(await e.settings.findOne(a))?.value,o=async(a,c)=>cw(await s(a),c,ur(li()));return{async get(a,c){const d=n(a,c);let f;if(vs(d))f=Ls(d);else{const m=await e.settings.findOne(d);f=m?m.value:r(a,c)?.default}return i(f)},async set(a,c,d,f){const m=n(a,c);if(await o(m,d))return;(f??r(a,c)?.scope??"workspace")==="user"?(iw(m,d),await e.settings.remove(m).catch(()=>{})):(await e.settings.upsert({name:m,value:d}),sw(m))},async placement(a,c){const d=n(a,c);return vs(d)?"user":await e.settings.findOne(d)?"workspace":null}}}function zu(e,t){return e.has(t)?e.get(t)!=="0":!1}function fw(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return zu(e,"safemode")?"all-optional":zu(e,"safemode1")?"url-plugins":"off"}const Et=fw();function Ms(e){return`builtin:${e}`}function Dl(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const i=r[0],s=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[i,s,...o].join("/")}`}}return e}function Hh(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function Vh(e){const t=Dl(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function Kh(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const i=[];let s=0;for(;;){const{done:c,value:d}=await r.read();if(c)break;d&&(i.push(d),s+=d.length,t?.(Math.min(1,s/n)))}const o=new Uint8Array(s);let a=0;for(const c of i)o.set(c,a),a+=c.length;return new TextDecoder().decode(o)}return await e.text()}const pw=50*1024*1024;function Fu(e){try{return new URL(e).host}catch{return e}}function Ht(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function mw(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function Uu(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function gw(e,t,n={}){const r=Dl(t),i=n.slowMs??2e3;let s=setTimeout(()=>{s=void 0,n.onSlow?.()},i);const o=()=>{s!==void 0&&(clearTimeout(s),s=void 0)},a=n.maxBytes===null?null:n.maxBytes??pw,c=async d=>{let f;try{f=await e.backend.fetch(d)}catch(b){throw new Error(`Could not reach ${Fu(d)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${b.message}]`,{cause:b})}if(!f.ok){const b=await mw(f);throw new Error(`HTTP ${f.status} ${f.statusText||""}`.trim()+(b?` — ${b}`:""))}const m=Number(f.headers.get("content-length"));if(a!==null&&Number.isFinite(m)&&m>a)throw f.body?.cancel().catch(()=>{}),new Error(`Response is ${Uu(m)}, over the ${Uu(a)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await Kh(f,n.onProgress)}catch(b){throw new Error(`Failed reading the response body from ${Fu(d)}: ${b.message}`,{cause:b})}};try{const d=await c(r);if(Hh(d)){const f=Vh(r);if(f)return await c(f)}return d}finally{o()}}async function yi(e,t,n,r={}){const{TopProgress:i}=await Ie(async()=>{const{TopProgress:o}=await import("./top-progress-DhbUi6Q5.js");return{TopProgress:o}},[]),s={handle:null};try{return await gw(e,t,{onSlow:()=>{s.handle=i.begin(n)},onProgress:o=>s.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{s.handle?.done()}}const Wh="Re-Create: columns and rows from the file",Gh="Re-Load: replace the rows, keep the columns",Yh="Append the rows",Qh="A new table",bw={[Wh]:"recreate",[Gh]:"reload",[Yh]:"append",[Qh]:"new"};async function Zs(e,t){const n=t.reason??`Import "${t.fileName}" into "${t.tableName}"?`,r=await e.ui.dialogs.choice(n,[Wh,Gh,Yh,Qh],t.title);return r?bw[r]??null:null}function Jh(e,t){return e.length!==t.length?!1:e.every((n,r)=>{const i=t[r],s=[i.field,i.label,lr(i.field),lr(i.label??"")],o=n.trim().toLowerCase();return s.some(a=>a.trim().toLowerCase()===o)||lr(n)===i.field})}const ww=/^[+-]?\d+$/;function eo(e){const t=e.trim();return ww.test(t)?!Number.isSafeInteger(Number(t)):!1}function to(e){let t="",n=0,r=!1;for(;n<e.length;){const i=e[n];if(r){t+=i,i==="\\"?(n++,n<e.length&&(t+=e[n])):i==='"'&&(r=!1),n++;continue}if(i==='"'){r=!0,t+=i,n++;continue}if(i==="-"||i>="0"&&i<="9"){let s=n;for(e[s]==="-"&&s++;s<e.length&&e[s]>="0"&&e[s]<="9";)s++;const o=s,a=e[s],c=a!=="."&&a!=="e"&&a!=="E",d=e.slice(n,o);c&&eo(d)?t+=`"${d}"`:t+=d,n=o;continue}t+=i,n++}return t}const is=e=>e.trim().toLowerCase();function cT(e,t){const n=new Map;for(const s of t)n.set(is(s.field),s.field),n.has(is(s.label))||n.set(is(s.label),s.field);const r=new Set,i=e.map(()=>"");return e.forEach((s,o)=>{const a=n.get(is(s));a&&!r.has(a)&&(i[o]=a,r.add(a))}),e.forEach((s,o)=>{if(i[o])return;const a=t[o]?.field;a&&!r.has(a)&&(i[o]=a,r.add(a))}),i}function yw(e,t,n,r){const i=new Map(t.map(s=>[s.field,s.type]));return e.map(s=>{const o={};return n.forEach((a,c)=>{if(!a)return;const d=i.get(a);d!==void 0&&(o[a]=r(s[c]??"",d))}),o})}function Xh(e){const t=e.trim();return t.length>=2&&t.startsWith("[")&&t.endsWith("]")}function vw(e){if(!Xh(e))return null;try{const t=JSON.parse(e.trim());return Array.isArray(t)?t:null}catch{return null}}function kw(e){const t=e.trim();if(!Xh(t))return null;const n=t.slice(1,-1).trim();if(n==="")return null;const r=[];let i=0;for(;i<n.length;){for(;i<n.length&&/\s/.test(n[i]);)i++;if(n[i]!=="'")return null;i++;let s="",o=!1;for(;i<n.length;){const a=n[i];if(a==="\\"&&n[i+1]==="'"){s+="'",i+=2;continue}if(a==="'"){o=!0,i++;break}s+=a,i++}if(!o)return null;for(r.push(s);i<n.length&&/\s/.test(n[i]);)i++;if(i<n.length){if(n[i]!==",")return null;i++}}return r}function Zh(e){return vw(e)??kw(e)}function ft(e){if(e==null)return[];if(Array.isArray(e))return $a(e);if(typeof e!="string")return $a([e]);const t=Zh(e);return t?$a(t):$w(e)}function Bu(e){return ft(e).join(", ")}function Ll(e){return Array.isArray(e)?!0:typeof e=="string"&&Zh(e)!==null}const qu=5;function ef(e){if(e.length===0)return!1;let t=0;for(const n of e)if(Ll(n)){if(t++,t>=qu)return!0}else t=0;return e.length<qu&&t===e.length}function $a(e){const t=[];for(const n of e){if(n==null)continue;const r=typeof n=="string"?n.trim():typeof n=="object"?JSON.stringify(n)??"":String(n);r!==""&&t.push(r)}return t}function $w(e){const t=[];let n="",r=!1,i=!1;const s=()=>{const o=i?n:n.trim();o!==""&&t.push(o),n="",r=!1,i=!1};for(let o=0;o<e.length;o++){const a=e[o];if(a==='"'){if(r&&e[o+1]==='"'){n+='"',o++;continue}r=!r,i=!0;continue}if(a===","&&!r){s();continue}n+=a}return s(),t}function xw(e){return e==null||String(e).trim()===""}function Hn(e){const t=[];let n="",r=!1,i=!1,s=!1,o=!1,a=!1,c=!1,d=!0,f=!1;const m=()=>{const b=s?n:n.trim();if(r||o){const y={term:b,negate:o};a&&(y.prefix=!0),c&&(y.exact=!0),f&&t.length>0&&(y.and=!0),t.push(y)}f=!1,n="",r=!1,i=!1,s=!1,o=!1,a=!1,c=!1,d=!0};for(let b=0;b<e.length;b++){const y=e[b];if(!i&&/\s/.test(y)){const v=/^\s+(AND|OR)(?=[\s,]|$)/.exec(e.slice(b));if(v&&(r||o)){m(),f=v[1]==="AND",b+=v[0].length-1;continue}}if(y==='"'){if(i&&e[b+1]==='"'){n+='"',r=!0,b++;continue}i=!i,s=!0,r=!0,d=!1;continue}if(y===","&&!i){m();continue}if(y==="!"&&!i&&d&&!o&&!a&&!c){o=!0;continue}if(y==="="&&!i&&d&&!a&&!c){c=!0;continue}if(y==="^"&&!i&&d&&!a&&!c){a=!0;continue}d&&!i&&/\s/.test(y)||(d=!1),n+=y,/\s/.test(y)||(r=!0)}return m(),t}function Sw(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")||/\s(AND|OR)(?=[\s,]|$)/.test(e)}function dn(e){let t="";return e.forEach((n,r)=>{const i=n.term===""&&n.negate?"":Sw(n.term)?`"${n.term.replace(/"/g,'""')}"`:n.term,s=n.exact?"=":n.prefix?"^":"",o=(n.negate?"!":"")+s+i;r===0?t=o:t+=n.and?` AND ${o}`:`,${o}`}),t}function Cw(e){const t=[];for(const n of e){const r=t[t.length-1];n.and&&r?r.push(n):t.push([n])}return t}function Hu(e,t){const n=String(e??"").toLowerCase(),r=t.term.toLowerCase();return t.exact?n===r:t.prefix?n.startsWith(r):n.includes(r)}function Vu(e,t){return t?t.length===0:xw(e)}function Ua(e,t,n){const r=t.term;return r.trim()===""||!t.prefix&&!t.exact&&r.toUpperCase()==="NULL"?Vu(e,n):n?n.some(i=>Hu(i,t)):Hu(e,t)}function _w(e,t,n){return t.every(r=>r.negate?!Ua(e,r,n):Ua(e,r,n))}function ci(e,t,n){const r=Cw(Hn(t));if(r.length===0)return!0;const i=n?.type==="array"?ft(e):null,s=r.filter(a=>a.length===1&&a[0].negate);for(const a of s)if(Ua(e,a[0],i))return!1;const o=r.filter(a=>!(a.length===1&&a[0].negate));return o.length===0?!0:o.some(a=>_w(e,a,i))}const Ew={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Tw(e){e.ui.registerImporter(Ow),Ie(()=>import("./csv-import-options-CsEUIwS7.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=Hw(t).filter(Vw);if(r.length===0)return!1;if(t.preventDefault(),r.length===1&&await Rw(e,t,r[0]))return!0;const i=r.length===1?`"${r[0].name}"`:`${r.length} files`,s=await e.ui.dialogs.choice(`Import ${i} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[Aw,Ku],"Import CSV");if(!s)return!0;const o=s===Ku?async a=>{const{editColumnNames:c}=await Ie(async()=>{const{editColumnNames:d}=await Promise.resolve().then(()=>rS);return{editColumnNames:d}},void 0);return c(a)}:void 0;for(const a of r)await Dw(e,a,o);return!0})}function Ba(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Ht(e.url):"pasted"}function Iw(e){return jl(Ba(e))||"imported"}const Aw="Import directly",Ku="Edit columns first";async function Rw(e,t,n){const{tableIdAtNode:r}=await Ie(async()=>{const{tableIdAtNode:a}=await Promise.resolve().then(()=>Sc);return{tableIdAtNode:a}},void 0),i=r(t.target);if(!i)return!1;const s=await e.store.tables.findOne(i);if(!s)return!1;if(s.readonly===!0||s.source!=null)return e.ui.dialogs.toast(`"${s.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import CSV"}),!1;const o=await Zs(e,{fileName:n.name,tableName:s.name,title:"Import CSV"});return o?o==="new"?!1:(await Ml(e,await n.text(),n.name,tf(i,s.name,o)),!0):!0}function tf(e,t,n){const r={target:{tableId:e,mode:n}};return n==="recreate"||(r.mapFields=async(i,s,o)=>{if(Jh(i,s))return s.map(c=>c.field);const{mapColumnsToTable:a}=await Ie(async()=>{const{mapColumnsToTable:c}=await import("./column-map-dialog-Bn_jYzFH.js");return{mapColumnsToTable:c}},[]);return a(i,s,t,o)}),r}const Ow={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:Iw(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await rf(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${Ba(n)}…`):r=n.text??"";const s=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??zl(Ba(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...s?{separator:s}:{}},a=e.targetColumns;if(a&&a.length>0){yield{rows:Pl(r,o).rows.map(m=>{const b={};for(let y=0;y<a.length;y++){const v=a[y];b[v.field]=Nl(m[y]??"",v.type)}return b})};return}const c=$r(r,o);yield{columns:c.columns,rows:c.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function Dw(e,t,n){await Ml(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function Ml(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("csv-import: no active workspace");const s=jl(n||"imported")||"imported",o=r.separator??zl(n),a=r.target?await e.store.tables.findOne(r.target.tableId):null,c=a??(await e.store.tables.find()).find(v=>v.workspaceId===i&&v.name===s);let d,f,m=r.mapFields;if(a&&r.target)f=r.target.mode,d=a.id;else if(c){const v=await Zs(e,{fileName:n||s,tableName:c.name,title:"CSV import",reason:`A table named "${s}" already exists in this workspace.`});if(!v)return;f=v,f==="new"?d=Ee():(d=c.id,m=tf(c.id,c.name,f).mapFields)}else f="new",d=Ee();e.events.emit("import:before",{source:"csv",tableId:d});let b;if(f==="new"||f==="recreate"){const v=$r(t,{maxRows:r.maxRows,separator:o});let $=v.columns,C=v.rows;if(r.editColumns){const E=await r.editColumns($);if(E===null)return;C=Kw(C,$,E),$=E}if(r.maxRows!=null&&(C=C.slice(0,r.maxRows)),f==="recreate"){const E=e.store.rows(d),T=await E.find();await E.bulkRemove(T.map(Q=>Q.id)),await e.store.tables.patch(d,{columns:$,updatedAt:Date.now()})}else await e.store.tables.insert({id:d,workspaceId:i,name:s,code:lr(s),columns:$,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()});b=C.map(E=>({id:Ee(),tableId:d,data:E,updatedAt:Date.now()}))}else{const v=c.columns,$=Pl(t,{maxRows:r.maxRows,separator:o}),C=r.maxRows!=null?$.rows.slice(0,r.maxRows):$.rows;let E=v.map(T=>T.field);if(m){const T=await m($.header,v,$.rows[0]??[]);if(T===null)return;E=T}if(b=yw(C,v,E,Nl).map(T=>({id:Ee(),tableId:d,data:T,updatedAt:Date.now()})),f==="reload"){const T=e.store.rows(d),Q=await T.find();await T.bulkRemove(Q.map(P=>P.id))}}await e.store.rows(d).bulkInsert(b),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:b.length})}function Pl(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??sf(n),i=of(n,r,nf(t.maxRows));if(i.length===0)return{header:[],rows:[]};const s=i[0],o=i.slice(1).filter(a=>!(a.length===1&&a[0]===""));return{header:s,rows:o}}function nf(e){return e!=null?e+1:void 0}async function rf(e,t){const r=new TextDecoder,i=t+1;let s="",o=0,a=!1,c=0;for(;c<e.size;){const d=new Uint8Array(await e.slice(c,c+1048576).arrayBuffer());c+=1048576;const f=r.decode(d,{stream:!0});for(let m=0;m<f.length;m++){const b=f[m];if(b==='"')a=!a;else if(b===`
`&&!a&&(o+=1,o>=i))return s+f.slice(0,m+1)}s+=f}return s}function $r(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??sf(n),i=of(n,r,nf(t.maxRows));if(i.length===0)return{columns:[],rows:[]};const s=i[0],o=i.slice(1).filter(y=>!(y.length===1&&y[0]==="")),a=s.map((y,v)=>Pw(y,v)),c=cf(a.map(y=>y.field)),d=o.map(y=>{const v={};for(let $=0;$<c.length;$++)v[c[$]]=y[$]??"";return v}),f=a.map((y,v)=>y.type?y.type:Nw(d.map($=>$[c[v]]??"").filter($=>$.length>0))),m=a.map((y,v)=>{const $=f[v]??"string",C={field:c[v],label:y.label,type:$},E=Mw($),T=y.renderer??E;return T&&(C.renderer=T),y.default!==void 0&&(C.default=y.default),y.max!=null&&(C.max=y.max),y.unique&&(C.unique=!0),y.notnull&&(C.notnull=!0),y.hidden&&(C.hidden=!0),C}),b=d.map(y=>{const v={};for(let $=0;$<c.length;$++){const C=c[$],E=f[$]??"string";v[C]=Nl(y[C]??"",E)}return v});return{columns:m,rows:b}}const Lw=new Set(["string","number","boolean","date","datetime","array"]),Wu={color:"color",image:"image"};function Mw(e){if(e==="date"||e==="datetime"||e==="boolean")return e;if(e==="array")return"tags"}function Pw(e,t){const n=e.trim();if(!n.includes(":"))return{field:lr(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),i=lr(r[0]||`col_${t+1}`),s=(r[1]??r[0]??"").trim()||i,o={field:i,label:s},a=(r[2]??"").trim();a&&(Lw.has(a)?o.type=a:Wu[a]&&(o.type="string",o.renderer=Wu[a]));const c=(r[3]??"").trim();c&&(o.default=c);const d=(r[4]??"").trim();if(d){const m=Number(d);Number.isFinite(m)&&m>0&&(o.max=m)}const f=(r[5]??"").toLowerCase();return f.includes("u")&&(o.unique=!0),f.includes("n")&&(o.notnull=!0),f.includes("h")&&(o.hidden=!0),o}function sf(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const s of t)s in n&&(n[s]+=1);let r=",",i=-1;for(const s of[",",";","	"])(n[s]??0)>i&&(r=s,i=n[s]??0);return r}function of(e,t,n){const r=[];let i=[],s="",o=!1;for(let a=0;a<e.length;a++){const c=e[a];if(o)c==='"'?e[a+1]==='"'?(s+='"',a++):o=!1:s+=c;else if(c==='"')o=!0;else if(c===t)i.push(s),s="";else if(c===`
`||c==="\r"){if(c==="\r"&&e[a+1]===`
`&&a++,i.push(s),r.push(i),i=[],s="",n!=null&&r.length>=n)return r}else s+=c}return(s.length>0||i.length>0)&&(i.push(s),r.push(i)),r}function Nw(e){return e.length===0?"string":ef(e)?"array":e.every(zw)?"boolean":e.every(Fw)?"number":e.every(Bw)?"datetime":e.every(Uw)?"date":"string"}const jw=/^(true|false|yes|no|0|1)$/i;function zw(e){return jw.test(e.trim())}function Fw(e){const t=e.trim();if(t===""||eo(t))return!1;const n=Number(t);return Number.isFinite(n)}function Uw(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Bw(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Nl(e,t){const n=e.trim();switch(t){case"array":return n===""?null:n;case"number":{if(n==="")return null;if(eo(n))return n;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return af(n);case"datetime":return qw(n);default:return e}}function af(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),i=parseInt(t[2],10),s=t[3];let o=parseInt(s,10);s.length===2&&(o+=2e3);let a,c;return r>12?(a=r,c=i):i>12?(c=r,a=i):(a=r,c=i),`${o.toString().padStart(4,"0")}-${c.toString().padStart(2,"0")}-${a.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function qw(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${af(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const i=new Date(e);if(!Number.isNaN(i.getTime())){const s=i.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}return e}function Hw(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}const lf=/\.(csv|tsv|tab)$/i;function jl(e){return e.replace(lf,"")}function zl(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function Vw(e){return!!(lf.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function cf(e){const t=new Map,n=new Set,r=[];for(const i of e){let s=i,o=t.get(i)??0;for(;n.has(s);)o+=1,s=`${i}_${o+1}`;t.set(i,o),n.add(s),r.push(s)}return r}function Kw(e,t,n){return e.map(r=>{const i={};for(let s=0;s<t.length;s++)i[n[s].field]=r[t[s].field];return i})}const Ww=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:cf,importCsvText:Ml,init:Tw,meta:Ew,parseCsv:$r,parseCsvRaw:Pl,readCsvHead:rf,separatorForName:zl,stripDelimitedExt:jl},Symbol.toStringTag,{value:"Module"})),Gw={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},Yw={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Fl(e,t)}};function Qw(e){e.ui.registerExporter(Yw)}function Fl(e,t){const n=e.columns.map(s=>s.field),r=e.columns.map(s=>Gu(s.label??s.field)),i=t.map(s=>n.map(o=>Gu(Jw(s.data[o]))).join(","));return[r.join(","),...i].join(`\r
`)}function Jw(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Gu(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Xw=Object.freeze(Object.defineProperty({__proto__:null,init:Qw,meta:Gw,serializeCsv:Fl},Symbol.toStringTag,{value:"Module"}));var Zw=Object.defineProperty,ey=Object.getOwnPropertyDescriptor,mn=(e,t,n,r)=>{for(var i=r>1?void 0:r?ey(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Zw(t,n,i),i};function ui(e,t={}){return(Qe.instance??uf()).open(e,t).then(r=>r?.map(i=>i.index)??null)}function ty(e,t={}){return(Qe.instance??uf()).open(e,t)}function uf(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function ny(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Qe=class extends xe{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.modes=[],this.offerViewModes=!1,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=[];this.selected.forEach((n,r)=>{if(!n)return;const i=(this.items[r]?.kind??"table")==="view";t.push(i&&this.offerViewModes?{index:r,mode:this.modes[r]??"projection"}:{index:r})}),t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Qe.instance=this}disconnectedCallback(){super.disconnectedCallback(),Qe.instance===this&&(Qe.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.offerViewModes=t.offerViewModes??!1,this.modes=e.map(()=>t.defaultViewMode??"projection"),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e,t){this.selected=this.items.map((n,r)=>t&&(n.kind??"table")!==t?this.selected[r]??!1:e)}setMode(e,t){const n=this.modes.slice();n[e]=t,this.modes=n}indicesOf(e){return this.items.map((t,n)=>(t.kind??"table")===e?n:-1).filter(t=>t>=0)}get sectioned(){return this.items.some(e=>e.kind!==void 0)}get selectedCount(){return this.selected.filter(Boolean).length}renderSection(e,t){const n=this.indicesOf(e);if(n.length===0)return k``;const r=n.filter(i=>this.selected[i]).length;return k`
      <div class="section">
        <div class="section-head">
          <span class="section-title">${t} <span class="section-count">${r}/${n.length}</span></span>
          <span>
            <button type="button" @click=${()=>this.setAll(!0,e)}>All</button>
            &nbsp;·&nbsp;
            <button type="button" @click=${()=>this.setAll(!1,e)}>None</button>
          </span>
        </div>
        <ul class="tables">
          ${n.map(i=>this.renderRow(this.items[i],i))}
        </ul>
      </div>
    `}renderRow(e,t){const n=(e.kind??"table")==="view";return k`
      <li>
        <input type="checkbox" id=${`tsel-${t}`} .checked=${this.selected[t]??!1} @change=${()=>this.toggle(t)} />
        <label for=${`tsel-${t}`}>
          <span class="name">${e.name}</span>
          ${e.hidden?k`<span class="tag-hidden">hidden</span>`:""}
          <span class="size">${ny(e.size)}</span>
          ${e.detail?k`<span class="detail">${e.detail}</span>`:""}
        </label>
        ${n&&this.offerViewModes?this.renderModeToggle(t):""}
      </li>
    `}renderModeToggle(e){const t=this.modes[e]??"projection";return k`
      <span class="mode" title="A projection recomputes from its source tables; Data is a snapshot you can edit">
        <label class="mode-opt">
          <input type="radio" name=${`mode-${e}`} .checked=${t==="projection"} @change=${()=>this.setMode(e,"projection")} />
          Projection
        </label>
        <label class="mode-opt">
          <input type="radio" name=${`mode-${e}`} .checked=${t==="data"} @change=${()=>this.setMode(e,"data")} />
          Data
        </label>
      </span>
    `}render(){const e=this.selectedCount;return k`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${this.heading}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${e===0}>${this.confirmLabel} (${e})</button>
            </div>
          </div>
          <div class="dialog-body">
            ${this.message?k`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            ${this.sectioned?k`${this.renderSection("table","Tables")}${this.renderSection("view","Views")}`:k`<ul class="tables">
                  ${this.items.map((t,n)=>this.renderRow(t,n))}
                </ul>`}
          </div>
        </form>
      </dialog>
    `}};Qe.instance=null;Qe.styles=[mt,Ce`
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
      .section + .section {
        margin-top: 0.75rem;
      }
      .section-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 0.75rem;
        padding: 0 0.15rem 0.25rem;
        font-size: 0.82rem;
      }
      .section-title {
        font-weight: 600;
        color: #374151;
      }
      .section-count {
        font-weight: 400;
        color: #6b7280;
      }
      .section-head button {
        font: inherit;
        background: transparent;
        border: 0;
        color: #2563eb;
        cursor: pointer;
        padding: 0;
      }
      .section-head button:hover {
        text-decoration: underline;
      }
      .mode {
        flex: 0 0 auto;
        display: flex;
        gap: 0.5rem;
        font-size: 0.78rem;
        color: #374151;
      }
      .mode-opt {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        cursor: pointer;
        white-space: nowrap;
      }
      .mode input[type='radio'] {
        width: 0.85rem;
        height: 0.85rem;
      }
    `];mn([z()],Qe.prototype,"items",2);mn([z()],Qe.prototype,"selected",2);mn([z()],Qe.prototype,"heading",2);mn([z()],Qe.prototype,"message",2);mn([z()],Qe.prototype,"confirmLabel",2);mn([z()],Qe.prototype,"modes",2);mn([z()],Qe.prototype,"offerViewModes",2);Qe=mn([Oe("table-select-dialog")],Qe);const ry=Object.freeze(Object.defineProperty({__proto__:null,get TableSelectDialog(){return Qe},chooseDatabaseObjects:ty,chooseTables:ui},Symbol.toStringTag,{value:"Module"}));function Ul(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let i=0;i<e.length;i++)r[t[i].field]=n[e[i].field];return r}}function Yu(e,t){if(t.length===0)return null;const n=new Set(t.map(i=>i.from)),r={};for(const i of Object.keys(e))n.has(i)||(r[i]=e[i]);for(const{from:i,to:s}of t)Object.prototype.hasOwnProperty.call(e,i)&&(r[s]=e[i]);return r}function no(e,t,n=[]){const r=new Set(e.map(a=>a.field)),i=new Set(n),s=[...e],o=[];for(const a of t)r.has(a.field)||i.has(a.field)||(s.push(a),o.push(a.field),r.add(a.field));return{columns:s,newFields:o}}async function Bl(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function df(e,t,n,r){const{workspaceId:i,importerId:s,target:o,maxRows:a}=r;let c,d,f,m=!1,b=0,y,v=null;const $=E=>e.store.rows(E),C=async E=>{if(m)return!0;if(o.kind==="new"){let T=E.columns??[];if(r.editColumns){const P=await r.editColumns(T);if(P===null)return!1;v=Ul(T,P),T=P}c=Ee(),d=fn(await Bl(e,i),t);const Q={id:c,workspaceId:i,name:d,code:je(d),columns:T,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(Q),f=!0}else{const T=await e.store.tables.findOne(o.tableId);if(!T)throw new Error("The table to import into no longer exists.");if(c=T.id,d=T.name,f=!1,o.kind==="overwrite"){const Q=await $(c).find();await $(c).bulkRemove(Q.map(P=>P.id))}if(E.columns?.length){const Q=no(T.columns,E.columns,T.deletedColumns??[]);Q.newFields.length>0&&await e.store.tables.patch(c,{columns:Q.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:s,tableId:c}),m=!0,!0};for await(const E of n){if(a!=null&&b>=a)break;if(!await C(E))return null;E.totalCount!=null&&(y=E.totalCount);let T=E.rows;if(a!=null&&b+T.length>a&&(T=T.slice(0,a-b)),T.length===0)continue;v&&(T=T.map(v));const Q=Date.now(),P=T.map(ne=>({id:Ee(),tableId:c,data:ne,updatedAt:Q}));await $(c).bulkInsert(P),b+=P.length,r.onProgress?.(b,y)}return!m&&!await C({})?null:(e.events.emit("import:after",{source:s,tableId:c,rowCount:b}),{tableId:c,tableName:d,rowCount:b,created:f})}function Qu(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(i,s)=>yi(e,i,s??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function iy(e,t){if(t.length<=1)return t;const n=await ui(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function sy(e,t,n,r,i){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const s=t.reference(n,r);let o=[];for await(const d of t.read(n,r)){o=d.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const a=fn(await Bl(e,i),r.name),c=Ee();return await e.store.tables.insert({id:c,workspaceId:i,name:a,code:je(a),columns:o,view:"table",source:s,readonly:!0,updatedAt:Date.now()}),{tableId:c,tableName:a,rowCount:0,created:!0}}async function ro(e,t,n,r){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=Qu(e,r),o=await t.list(s,n);if(o.length===0)throw new Error("No tables found at that source.");const a=await iy(t,o);if(a===null)return{landed:[],failed:[],cancelled:!0};const c=[],d=[];for(const f of a)try{if(r.mode==="reference"){c.push(await sy(e,t,s,f,i));continue}const m=r.target;let b;m.kind!=="new"&&(b=(await e.store.tables.findOne(m.tableId))?.columns);const y=Qu(e,r,{...b?{targetColumns:b}:{}}),v=t.read(y,f),$=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),C=await df(e,f.name,v,{workspaceId:i,importerId:t.id,target:m,...$?{origin:$}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(C===null)return{landed:c,failed:d,cancelled:!0};c.push(C)}catch(m){d.push({name:f.name,error:m?.message??String(m)})}return{landed:c,failed:d,cancelled:!1}}async function hf(e,t,n){const r=new Map;if(n.length===0)return r;const i=(await e.find()).filter(a=>a.workspaceId===t),s=new Map(i.map(a=>[a.name,a])),o=new Map(i.map(a=>[a.id,a]));for(const a of n){if(!oy(a))continue;const c=s.get(a.name)??o.get(a.id),d=c?.id??a.id;c&&r.set(a.id,c.id);const f=c?c.builtin:a.builtin,m={...a,id:d,workspaceId:t};f===void 0?delete m.builtin:m.builtin=f,await e.upsert(m),s.set(m.name,m),o.set(m.id,m)}return r}function oy(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const ay={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function ly(e){e.ui.registerImporter(pf),e.ui.registerDropHandler(async t=>{const r=wy(t).filter(yy);if(r.length===0)return!1;t.preventDefault();for(const i of r)await cy(e,t,i)||await dy(e,i);return!0})}async function cy(e,t,n){const{tableIdAtNode:r}=await Ie(async()=>{const{tableIdAtNode:f}=await Promise.resolve().then(()=>Sc);return{tableIdAtNode:f}},void 0),i=r(t.target);if(!i)return!1;const s=await e.store.tables.findOne(i);if(!s)return!1;if(s.readonly===!0||s.source!=null)return e.ui.dialogs.toast(`"${s.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import JSON"}),!1;const o=await n.text();let a;try{a=JSON.parse(to(o))}catch{return!1}const c=vi(a,ks(n.name));if(c.length===0)return!1;if(c.length>1)return e.ui.dialogs.toast(`"${n.name}" holds ${c.length} tables — drop it outside a window to import them.`,{kind:"warning",title:"Import JSON"}),!0;const d=await Zs(e,{fileName:n.name,tableName:s.name,title:"Import JSON"});return d?d==="new"?!1:(await ff(e,s,c[0],d),!0):!0}async function ff(e,t,n,r){const i=e.store.rows(t.id);e.events.emit("import:before",{source:"json",tableId:t.id});let s;if(r==="recreate")await e.store.tables.patch(t.id,{columns:n.columns,updatedAt:Date.now()}),s=n.rows;else{const a=n.columns.map(d=>d.field);let c=t.columns.map(d=>d.field);if(!Jh(a,t.columns)){const{mapColumnsToTable:d}=await Ie(async()=>{const{mapColumnsToTable:b}=await import("./column-map-dialog-Bn_jYzFH.js");return{mapColumnsToTable:b}},[]),f=a.map(b=>String(n.rows[0]?.[b]??"")),m=await d(a,t.columns,t.name,f);if(m===null)return;c=m}s=n.rows.map(d=>{const f={};return a.forEach((m,b)=>{const y=c[b];y&&(f[y]=d[m])}),f})}if(r!=="append"){const a=await i.find();await i.bulkRemove(a.map(c=>c.id))}const o=s.map(a=>({id:Ee(),tableId:t.id,data:a,updatedAt:Date.now()}));await i.bulkInsert(o),e.events.emit("import:after",{source:"json",tableId:t.id,rowCount:o.length})}function ql(e){return We(e)?qa(e)||Array.isArray(e.tables)?!0:gf(e):!1}function uy(e){return e.kind==="file"&&e.file?ks(e.file.name):e.kind==="url"&&e.url?ks(Ht(e.url)):ks(e.name??"imported")}const pf={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Ht(t.url)}…`):n=t.text??"";const r=uy(t);let i;try{i=JSON.parse(to(n))}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`,{cause:o})}const s=vi(i,r);return s.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:s.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function ks(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function dy(e,t){const n=await t.text();let r;try{r=JSON.parse(to(n))}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(ql(r)){await Hl(e,n,t.name);return}const i=await ro(e,pf,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=i.landed.reduce((o,a)=>o+a.rowCount,0);i.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${s.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Hl(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let s;try{s=JSON.parse(to(t))}catch(C){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${C.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",a=vi(s,o);if(a.length===0)return;let c=a;if(a.length>1){const C=await ui(a.map(E=>({name:E.name,size:E.rows.length})),{title:"Import tables",message:`"${n}" contains ${a.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!C)return;c=C.map(E=>a[E])}const d=(await e.store.tables.find()).filter(C=>C.workspaceId===i),f=new Set(c.map(C=>C.name)),m=d.filter(C=>f.has(C.name));let b;if(m.length===0&&c.length===1)b="append-new";else if(c.length===1&&m.length===1){const C=m[0],E=await Zs(e,{fileName:n,tableName:C.name,title:"JSON import",reason:`A table named "${C.name}" already exists in this workspace.`});if(!E)return;if(E==="reload"||E==="append"){await ff(e,C,c[0],E);return}b=E==="recreate"?"overwrite-matching":"append-new"}else{const C=m.length>0?[`Overwrite matching (${m.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],E=await e.ui.dialogs.choice(`Importing ${c.length} table${c.length===1?"":"s"} from "${n}".${m.length>0?`

${m.length} table${m.length===1?"":"s"} share a name with existing data.`:""}`,C,"JSON import");if(!E)return;E.startsWith("Overwrite matching")?b="overwrite-matching":E==="Replace entire workspace"?b="replace-workspace":b="append-new"}const y=2e3,v=c.reduce((C,E)=>C+(E.source?0:Math.min(E.rows.length,r.maxRows??1/0)),0);let $=null;if(v>=y){const{TopProgress:C}=await Ie(async()=>{const{TopProgress:E}=await import("./top-progress-DhbUi6Q5.js");return{TopProgress:E}},[]);$=C.begin(`Importing ${n}…`)}try{if(b==="replace-workspace")for(const P of d){const ne=e.store.rows(P.id),W=await ne.find();await ne.bulkRemove(W.map(I=>I.id)),await e.store.tables.remove(P.id)}const C=new Map(d.map(P=>[P.name,P])),E=new Map,T=[];let Q=0;for(const P of c){const ne=P.source,W=P.origin??(!ne&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let I;const V=b==="overwrite-matching"?C.get(P.name):void 0;let K=P.columns,ie=P.rows;if(r.editColumns&&!V&&!ne){const H=await r.editColumns(K,P.name);if(H===null)continue;ie=by(ie,K,H),K=H}if(V){if(I=V.id,!V.source){const H=e.store.rows(I),te=await H.find();await H.bulkRemove(te.map(q=>q.id))}await e.store.tables.patch(I,{columns:K,...P.title?{title:P.title}:{},...P.windowGeometry?{windowGeometry:P.windowGeometry}:{},...P.sortColumn?{sortColumn:P.sortColumn,sortAsc:P.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...P.filters?{filters:P.filters}:{},...P.labelColumn?{labelColumn:P.labelColumn}:{},...P.info?{info:P.info}:{},...P.deletedColumns?{deletedColumns:P.deletedColumns}:{},...P.readonly?{readonly:!0}:{},source:ne??void 0,origin:W??void 0,updatedAt:Date.now()})}else{I=Ee(),e.events.emit("import:before",{source:"json",tableId:I});const H=await e.store.tables.insert({id:I,workspaceId:i,name:P.name,code:je(P.name),columns:K,view:"table",...P.title?{title:P.title}:{},...P.windowGeometry?{windowGeometry:P.windowGeometry}:{},...P.sortColumn?{sortColumn:P.sortColumn,sortAsc:P.sortAsc??!0}:{},...P.filters?{filters:P.filters}:{},...P.labelColumn?{labelColumn:P.labelColumn}:{},...P.info?{info:P.info}:{},...P.deletedColumns?{deletedColumns:P.deletedColumns}:{},...P.readonly?{readonly:!0}:{},...ne?{source:ne}:{},...W?{origin:W}:{},updatedAt:Date.now()});H.name!==P.name&&T.push([P.name,H.name])}E.set(P.name,I);let de=0;if(!ne){const H=e.store.rows(I),q=(r.maxRows!=null?ie.slice(0,r.maxRows):ie).map(Y=>({id:Ee(),tableId:I,data:Y,updatedAt:Date.now()}));await H.bulkInsert(q),de=q.length,Q+=de,$?.fraction(v>0?Q/v:1)}e.events.emit("import:after",{source:"json",tableId:I,rowCount:de})}await hy(e,s,i,E,b==="replace-workspace"),T.length>0&&e.ui.dialogs.toast(T.map(([P,ne])=>`“${P}” came in as “${ne}”`).join(`
`),{kind:"info",title:"Names must be unique"})}finally{$?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function hy(e,t,n,r,i){if(!We(t))return;const s=t,o=Array.isArray(s.viewTemplates)?s.viewTemplates:[],a=Array.isArray(s.viewInstances)?s.viewInstances:[];if(o.length===0&&a.length===0)return;if(i){const d=(await e.store.viewInstances.find()).filter(f=>f.workspaceId===n);await e.store.viewInstances.bulkRemove(d.map(f=>f.id))}const c=await hf(e.store.viewTemplates,n,o);for(const d of a){if(!We(d)||typeof d.id!="string")continue;const f=(d.tableName?r.get(d.tableName):void 0)??d.tableId;if(!f)continue;const m=c.get(d.templateId)??d.templateId;await e.store.viewInstances.upsert({...d,workspaceId:n,tableId:f,templateId:m})}}function vi(e,t){if(We(e)&&qa(e))return Ju(e);if(We(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const i of n.tables){if(mf(i)){r.push(Xu(i));continue}We(i)&&qa(i)&&r.push(...Ju(i))}return r}if(gf(e))return[Xu(e)];if(Array.isArray(e)){const n=e.filter(We);return n.length===0?[]:[{name:t,...Zu(n)}]}return We(e)?[{name:t,...Zu([e])}]:[]}function qa(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!We(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function Ju(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!We(r))continue;const i=r;if(!Array.isArray(i.dataArray)||!Array.isArray(i.columns))continue;const s=n.replace(/\.table\.json$/,""),o=i.columns.map(f=>fy(f)),a=o.map(f=>f.field),c=i.dataArray.filter(f=>Array.isArray(f)).map(f=>{const m={};for(let b=0;b<a.length;b++)m[a[b]]=f[b];return m}),d={name:s,columns:o,rows:c};if(i.elementRect&&typeof i.elementRect.x=="number"&&typeof i.elementRect.y=="number"){const f=i.elementRect;d.windowGeometry={x:f.x,y:f.y,w:f.width??600,h:f.height??400,z:f.zIndex??100,minimized:!!f.minimized,maximized:!!f.maximized}}typeof i.sortColumn=="number"&&i.sortColumn>=0&&i.sortColumn<a.length&&(d.sortColumn=a[i.sortColumn],d.sortAsc=(i.sortDirection??"asc")!=="desc"),t.push(d)}return t}function fy(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",i={field:t,label:n,type:r};return e.isUnique&&(i.unique=!0),e.isNotNull&&(i.notnull=!0),i}function mf(e){return We(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function gf(e){return mf(e)&&Array.isArray(e.rows)}function Xu(e){const t=e,n=We(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,i=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,s=typeof t.title=="string"?t.title:void 0,o=We(t.filters)?t.filters:void 0,a=typeof t.labelColumn=="string"?t.labelColumn:void 0,c=We(t.info)?t.info:void 0,d=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(y=>typeof y=="string"):void 0,f=t.readonly===!0?!0:void 0,m=We(t.source)&&typeof t.source.type=="string"?t.source:void 0,b=We(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(py),rows:Array.isArray(e.rows)?e.rows.filter(We):[],...s?{title:s}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:i??!0}:{},...o?{filters:o}:{},...a?{labelColumn:a}:{},...c?{info:c}:{},...d?{deletedColumns:d}:{},...f?{readonly:f}:{},...m?{source:m}:{},...b?{origin:b}:{}}}function py(e){if(!We(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",i=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(i=i??r,r="string");const s={field:n,label:String(t.label??n),type:r};return i&&(s.renderer=i),typeof t.script=="string"&&(s.script=t.script),typeof t.validate=="string"&&(s.validate=t.validate),t.default!==void 0&&(s.default=t.default),typeof t.max=="number"&&(s.max=t.max),typeof t.width=="number"&&(s.width=t.width),typeof t.description=="string"&&(s.description=t.description),typeof t.units=="string"&&(s.units=t.units),t.unique===!0&&(s.unique=!0),t.notnull===!0&&(s.notnull=!0),t.hidden===!0&&(s.hidden=!0),t.sortable===!1&&(s.sortable=!1),t.filterable===!1&&(s.filterable=!1),t.readonly===!0&&(s.readonly=!0),s}function Zu(e){const t=new Set;for(const i of e)for(const s of Object.keys(i))t.add(s);return{columns:Array.from(t).map(i=>({field:i,label:i,type:my(e.map(s=>s[i]))})),rows:e}}function my(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":ef(t)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&gy(n))?"date":"string"}function gy(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function by(e,t,n){const r=Ul(t,n);return r?e.map(r):e}function We(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function wy(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}function yy(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const vy=Object.freeze(Object.defineProperty({__proto__:null,init:ly,isWorkspaceDump:ql,meta:ay,parsedToTables:vi,restoreWorkspaceDump:Hl},Symbol.toStringTag,{value:"Module"}));function Vl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function di(e){return e.replace(/&(?![a-zA-Z][a-zA-Z0-9]*;|#\d+;|#x[0-9a-fA-F]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function bf(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function $s(e){const t=e.trim();return t===""?null:/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)?/^(https?|mailto|tel):/i.test(t)?t:null:t}function ky(e){const t=bf(e).trim(),n=t.replace(/[^!-~]/g,"");return $s(n)===null?null:t}const wf="script|style|iframe|object|embed|noscript|template|svg|math|frame|frameset",$y=new RegExp(`<(${wf})\\b(?:"[^"]*"|'[^']*'|[^"'>])*>[\\s\\S]*?<\\/\\s*\\1\\s*>`,"gi"),xy=new RegExp(`<(?:${wf})\\b[\\s\\S]*$`,"i"),Sy=new Set(["br","hr","img","source","wbr","col"]),yf=new Set(["a","abbr","audio","b","blockquote","br","caption","cite","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","h1","h2","h3","h4","h5","h6","hr","i","img","ins","kbd","li","mark","ol","p","pre","s","samp","small","source","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul","var","video","wbr"]),Cy=new Set(["title","dir","lang"]),_y={a:new Set(["href"]),audio:new Set(["src","controls"]),col:new Set(["span"]),colgroup:new Set(["span"]),img:new Set(["src","alt","width","height"]),ol:new Set(["start","reversed"]),source:new Set(["src","type"]),td:new Set(["colspan","rowspan","headers"]),th:new Set(["colspan","rowspan","scope","headers"]),time:new Set(["datetime"]),video:new Set(["src","controls","poster","width","height"])},Ey=new Set(["href","src","poster"]),Ty=/([a-zA-Z_:][a-zA-Z0-9_:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,vf=/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s(?:"[^"]*"|'[^']*'|[^"'>])*)?)\s*\/?>/g;function Iy(e,t,n){const r=t.toLowerCase();if(!yf.has(r))return"";if(e)return Sy.has(r)?"":`</${r}>`;const i=_y[r];let s=`<${r}`,o=null,a=!1;for(const c of n.matchAll(Ty)){const d=c[1].toLowerCase();if(!Cy.has(d)&&!i?.has(d))continue;const f=c[2]??c[3]??c[4];if(f===void 0){s+=` ${d}`;continue}if(Ey.has(d)){const m=ky(f);if(m===null)continue;d==="href"&&(o=m),d==="src"&&(a=!0),s+=` ${d}="${di(m)}"`;continue}s+=` ${d}="${di(f)}"`}return r==="a"&&o!==null&&!o.startsWith("#")&&(s+=' target="_blank" rel="noopener noreferrer"'),(r==="img"||r==="source")&&!a?"":`${s}>`}function kf(e){return e.replace(/<!--[\s\S]*?-->/g,"").replace($y,"").replace(xy,"").replace(/<[!?][^>]*>/g,"")}const Ay=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","circle","cite","code","col","colgroup","data","datalist","dd","defs","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","line","link","main","map","mark","marquee","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","path","picture","polygon","polyline","pre","progress","q","rect","rp","rt","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","use","var","video","wbr"]);function $f(e,t,n,r){const i=n.toLowerCase();return yf.has(i)||Ay.has(i)||i.includes("-")?Iy(t,n,r):Vl(e)}function Ry(e){const t=kf(e);let n="",r=0;for(const i of t.matchAll(vf))n+=di(t.slice(r,i.index)),n+=$f(i[0],i[1]==="/",i[2],i[3]),r=i.index+i[0].length;return n+di(t.slice(r))}const Oy=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function xf(e){return Oy.test(e)}function Dy(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return bf(e.replace(/<[^>]*>/g,""))}function Ly(e){return(xf(e)?Dy(e):e).replace(/\s+/g," ").trim()}const Wr="",My=/\uE000(\d+)\uE000/g;function ed(e){return e.startsWith("#")?"":' target="_blank" rel="noopener noreferrer"'}const Ha=/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)\s*$/,Va=/^(#{1,6})\s+(.*)$/,Kl=/^\s*([-*_])(\s*\1){2,}\s*$/,Ka=/^\s*>/,Sf=/^\s*(?:[-*+]|\d+[.)])\s+/,Cf=/^\s*\|?[\s:|-]+\|[\s:|-]*$/,Py="address|article|aside|blockquote|caption|col|colgroup|dd|details|div|dl|dt|figcaption|figure|footer|form|h[1-6]|header|hr|iframe|legend|li|main|nav|ol|p|pre|script|section|style|summary|table|tbody|td|tfoot|th|thead|tr|ul",_f=new RegExp(`^\\s*</?(?:${Py})(?:[\\s/>]|$)`,"i");function Ny(e){return Ha.test(e)||Va.test(e)||Kl.test(e)||Ka.test(e)||Sf.test(e)||_f.test(e)}function nr(e){const t=[];let n=e.replaceAll(Wr,"").replace(/(`+)([\s\S]*?)\1/g,(r,i,s)=>(t.push(`<code>${Vl(s)}</code>`),`${Wr}${t.length-1}${Wr}`));return n=kf(n).replace(vf,(r,i,s,o)=>{const a=$f(r,i==="/",s,o);return a===""?"":(t.push(a),`${Wr}${t.length-1}${Wr}`)}),n=di(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,i,s,o)=>{const a=$s(s);return a===null?r:`<img src="${a}" alt="${i}"${o?` title="${o}"`:""}>`}),n=n.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,i,s,o)=>{const a=$s(s);return a===null?r:`<a href="${a}"${o?` title="${o}"`:""}${ed(a)}>${i}</a>`}),n=n.replace(/&lt;((?:https?|mailto):[^\s&]+)&gt;/g,(r,i)=>{const s=$s(i);return s===null?r:`<a href="${s}"${ed(s)}>${s}</a>`}),n=n.replace(/~~([\s\S]+?)~~/g,"<del>$1</del>"),n=n.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__([\s\S]+?)__/g,"<strong>$1</strong>"),n=n.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g,"$1<em>$2</em>"),n=n.replace(/(^|[\s(])_(?!\s)([^_]+?)_(?=$|[\s).,;:!?])/g,"$1<em>$2</em>"),n=n.replace(/ {2,}\n/g,`<br>
`),n.replace(My,(r,i)=>t[Number(i)]??"")}function xa(e){return e.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}const jy=e=>{const t=e.startsWith(":"),n=e.endsWith(":");return t&&n?' style="text-align:center"':n?' style="text-align:right"':t?' style="text-align:left"':""},zy=[/^ {0,3}#{1,6}\s+\S/,/^ {0,3}>[ \t]+\S/,/^ {0,3}[-*+][ \t]+\S/,/^ {0,3}\d+[.)][ \t]+\S/,/^ {0,3}(?:```|~~~)/,Kl],Fy=[/\*\*(?!\s)[^*\n]+\*\*/,/~~(?!\s)[^~\n]+~~/,/`[^`\n]+`/,/!?\[[^\]\n]*\]\([^)\s]+\)/];function Uy(e){return typeof e!="string"||e.trim()===""?null:!By.test(e)&&td(e)?"markdown":xf(e)?"html":td(e)?"markdown":null}const By=/^\s*<\/?[a-z][a-z0-9]*(\s|\/?>)/i;function td(e){if(typeof e!="string"||e.trim()==="")return!1;const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.some(n=>zy.some(r=>r.test(n)))||Fy.some(n=>n.test(e))?!0:t.some((n,r)=>r>0&&Cf.test(n)&&n.includes("-")&&(t[r-1]??"").includes("|"))}function io(e){if(e==null)return"";const t=typeof e=="string"?e:String(e);if(t.trim()==="")return"";const n=t.replace(/\r\n?/g,`
`).split(`
`),r=[];let i=0;const s=o=>{const a=[];for(;i<n.length&&o(n[i]);)a.push(n[i++]);return a};for(;i<n.length;){const o=n[i];if(o.trim()===""){i++;continue}const a=Ha.exec(o);if(a){const f=a[1].slice(0,3);i++;const m=s(y=>!y.trim().startsWith(f));i<n.length&&i++;const b=a[2]?` class="language-${a[2]}"`:"";r.push(`<pre><code${b}>${Vl(m.join(`
`))}</code></pre>`);continue}if(_f.test(o)){const f=s(b=>b.trim()!==""),m=Ry(f.join(`
`));m.trim()!==""&&r.push(m);continue}const c=Va.exec(o);if(c){const f=c[1].length;r.push(`<h${f}>${nr(c[2].replace(/\s+#+\s*$/,""))}</h${f}>`),i++;continue}if(Kl.test(o)){r.push("<hr>"),i++;continue}if(Ka.test(o)){const f=s(m=>Ka.test(m)||m.trim()!=="");r.push(`<blockquote>${io(f.map(m=>m.replace(/^\s*>\s?/,"")).join(`
`))}</blockquote>`);continue}if(o.includes("|")&&i+1<n.length&&Cf.test(n[i+1])&&n[i+1].includes("-")){const f=xa(o),m=xa(n[i+1]).map(jy);i+=2;const b=s($=>$.trim()!==""&&$.includes("|")),y=f.map(($,C)=>`<th${m[C]??""}>${nr($)}</th>`).join(""),v=b.map($=>`<tr>${xa($).map((C,E)=>`<td${m[E]??""}>${nr(C)}</td>`).join("")}</tr>`);r.push(`<table><thead><tr>${y}</tr></thead><tbody>${v.join("")}</tbody></table>`);continue}if(Sf.test(o)){const f=s(m=>m.trim()!==""&&!Ha.test(m)&&!Va.test(m));r.push(Ef(f));continue}const d=s(f=>f.trim()!==""&&!Ny(f));if(d.length===0){r.push(`<p>${nr(o)}</p>`),i++;continue}r.push(`<p>${nr(d.join(`
`))}</p>`)}return r.join(`
`)}function Ef(e){const t=[];let n=null,r=null;for(const o of e){const a=/^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$/.exec(o);if(!a){t[t.length-1]?.text.push(o.trim());continue}const c=a[1].length;if(r??=c,c>r&&t.length>0){t[t.length-1].children.push(o.slice(Math.min(c,r+2)));continue}n??=a[3]!==void 0,t.push({text:[a[4]],children:[],indent:c})}const i=n?"ol":"ul",s=t.map(o=>`<li>${nr(o.text.join(`
`))}${o.children.length>0?Ef(o.children):""}</li>`).join("");return`<${i}>${s}</${i}>`}const Tf={goto:"goto",table:"goto",search:"search",preview:"preview",view:"view",cmd:"cmd",ui:"ui"},qy={goto:{min:1,rest:!1},search:{min:1,rest:!0},preview:{min:2,rest:!1},view:{min:0,rest:!0},cmd:{min:1,rest:!0},ui:{min:1,rest:!1}};class ct extends Error{}function Wl(e){return(e.trim().replace(/^\/+/,"").split(/[/?;]/,1)[0]??"").toLowerCase()in Tf}function If(e){const t=e.split(";").map(n=>n.trim()).filter(Boolean);if(t.length===0)throw new ct("Empty commandlet.");return t.map(Hy)}function Hy(e){const t=e.indexOf("?"),n=t<0?e:e.slice(0,t),r=t<0?"":e.slice(t+1),i=n.split("/").filter(y=>y!=="").map(y=>Vy(y,e));if(i.length===0)throw new ct(`No action in "${e}".`);const s=(i[0]??"").toLowerCase(),o=Tf[s],a=o??"goto";let c=o?i.slice(1):i;const d=qy[a];if(c.length<d.min)throw new ct(`"${a}" needs ${d.min} target${d.min===1?"":"s"} — got "${e}".`);const f=Math.max(0,d.min-1);d.rest&&c.length>f&&(c=[...c.slice(0,f),c.slice(f).join("/")]);const m={},b={};for(const[y,v]of new URLSearchParams(r))y.startsWith("@")?b[y.slice(1).toLowerCase()]=v:y!==""&&(m[y]=v);return{verb:a,targets:c,filters:m,options:b,raw:e}}function Vy(e,t){try{return decodeURIComponent(e)}catch{throw new ct(`Bad percent-encoding in "${t}".`)}}function Af(e,t){const n=i=>i.replace(/\$([A-Za-z_][A-Za-z0-9_]*|\d+)/g,(s,o)=>t[o]??s),r=i=>Object.fromEntries(Object.entries(i).map(([s,o])=>[n(s),n(o)]));return{verb:e.verb,targets:e.targets.map(n),filters:r(e.filters),options:r(e.options),raw:e.raw}}function Ky(e,t){const r=(Array.isArray(e)?e:e.split("/").filter(Boolean)).map(o=>encodeURIComponent(o)).join("/"),i=new URLSearchParams;for(const[o,a]of Object.entries(t??{}))i.append(o,String(a));const s=i.toString();return`#${r}${s?`?${s}`:""}`}function Wy(e,t){return Ky(e,t)}const Wa={markdownToHtml:io,cmdlet:Wy},Gl=Object.keys(Wa),nd=new Map;function Gy(e){const t=nd.get(e);if(t)return t;const n=new Function("row",...Gl,"easydb",`${e}
return render(row);`);return nd.set(e,n),n}function Rf(){return[...Gl.map(e=>Wa[e]),Wa]}function xr(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=Gy(e)}catch(r){return{ok:!1,label:"compile error",message:Ps(r)}}try{return{ok:!0,value:n(t,...Rf())}}catch(r){return{ok:!1,label:"runtime error",message:Ps(r)}}}function Ps(e){return e instanceof Error?e.message:String(e)}const rd=new Map;function Yy(e){const t=rd.get(e);if(t)return t;const n=new Function("value","row",...Gl,"easydb",`${e}
return validate(value, row);`);return rd.set(e,n),n}function Qy(e,t,n){if(!e||!e.trim())return{ok:!0};let r;try{r=Yy(e)}catch(i){return{ok:!1,message:`Validation script has a compile error: ${Ps(i)}`}}try{return r(t,n,...Rf()),{ok:!0}}catch(i){return{ok:!1,message:Ps(i)||"Rejected by this column’s validation script."}}}const Jy=new Set(["rowid"]);function Yl(e){return Jy.has(e.trim().toLowerCase())}function Xy(e){const t=new Map,n=(i,s)=>{if(!i||!s)return;let o=t.get(i);o||t.set(i,o=new Set),o.add(s)};for(const i of e.columns)i.from.kind==="source"&&n(i.from.alias,i.from.field);for(const i of e.sources)for(const s of i.join?.on??[])n(i.alias,s.field),n(s.eqAlias,s.eqField);const r={};for(const i of e.sources)r[i.alias]=[...t.get(i.alias)??[]];return r}function Zy(e,t){const n=e.sources[0];if(!n)return{rows:[],provenance:new Map};let i=(t[n.alias]??[]).map(d=>({[n.alias]:d}));for(let d=1;d<e.sources.length;d++){const f=e.sources[d];if(!f)continue;const m=t[f.alias]??[],b=f.join,y=[];for(const v of i){const $=b?m.filter(C=>b.on.every(E=>tv(C.data[E.field],v[E.eqAlias]?.data[E.eqField]))):[];if($.length>0)for(const C of $)y.push({...v,[f.alias]:C});else b?.type==="left"&&y.push({...v,[f.alias]:void 0})}i=y}const s=[],o=new Map,a=new Map,c=e.limit!=null&&e.limit>0?e.limit:1/0;for(const d of i){if(s.length>=c)break;const f=d[n.alias];if(!f)continue;const m=ev(e.columns,d);if(!nv(m,e.filters))continue;const b=a.get(f.id)??0;a.set(f.id,b+1);const y=`${f.id}#${b}`,v={};for(const[$,C]of Object.entries(d))C&&(v[$]=C.id);o.set(y,v),s.push({id:y,tableId:"",data:m,updatedAt:rv(d)})}return{rows:s,provenance:o}}function ev(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const i=t[r.from.alias]?.data[r.from.field];n[r.field]=i===void 0?null:i}for(const r of e)if(r.from.kind==="script"){const i=xr(r.from.script,n);n[r.field]=i.ok?i.value:void 0}return n}function tv(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function nv(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const i=e[n];if(!(i==null?"":String(i)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function rv(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function so(e){const t=new Set(e.sources.map(r=>r.alias)),n=new Set;for(const r of e.columns)r.from.kind==="source"&&t.has(r.from.alias)&&n.add(r.field);return n}function Of(e,t,n=[],r=[]){const i=so(e),s=new Map(n.map(f=>[f.field,f])),o=new Set(r),a=new Map;for(const f of e.columns)!o.has(f.field)&&!a.has(f.field)&&a.set(f.field,f);const c=[];for(const f of n)a.has(f.field)&&!c.includes(f.field)&&c.push(f.field);for(const f of a.keys())c.includes(f)||c.push(f);const d=[];for(const f of c){const m=a.get(f);if(!m)continue;const b=s.get(m.field);let y;if(b)y={...b};else if(m.from.kind==="source"){const v=m.from,$=(t[v.alias]??[]).find(C=>C.field===v.field);y=$?{...$,field:m.field}:{field:m.field,label:m.label??m.field,type:m.type??"string"},Yl(v.field)&&(y.hidden=!0)}else y={field:m.field,label:m.label??m.field,type:m.type??"string"},y.script=m.from.script;i.has(m.field)?delete y.readonly:y.readonly=!0,d.push(y)}return d}function iv(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function sv(e,t){const n=iv(e),r={},i=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],s=[];for(const o of i){const a=n.get(o.field);a&&s.push({field:a,asc:o.asc})}if(s.length>0){r.sortBy=s;const o=s[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[a,c]of Object.entries(t.filters)){const d=n.get(a);d&&c&&(o[d]=c)}Object.keys(o).length>0&&(r.filters=o)}return r}function ov(e,t){return t.get(e.tableName)}function av(e,t){const n=new Map(t.map(s=>[s.id,s])),r=new Map;for(const s of t)r.has(s.name)||r.set(s.name,s);const i=(s,o)=>{if(o.has(s))return!0;const a=n.get(s);if(a?.source?.type!=="projection")return!1;const c=a.source.config;if(!c||!Array.isArray(c.sources))return!1;const d=new Set(o).add(s);for(const f of c.sources){const m=ov(f,r);if(m&&i(m.id,d))return!0}return!1};return i(e,new Set)}const Gr=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),Sa=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,id=e=>e==="id"||e.endsWith("id");function lv(e,t){const n=Gr(e.field),r=Gr(t.field);if(!n||!r)return 0;const i=Gr(e.table)===Gr(t.table);if(n===r)return i||n==="id"?0:n.endsWith("id")?9:7;const s=(a,c,d)=>{if(a!=="id"||!d.endsWith("id")||d.length<=2)return 0;const f=d.slice(0,-2),m=Gr(c);return f===m||f===Sa(m)||Sa(f)===Sa(m)?9:5},o=Math.max(s(n,e.table,r),s(r,t.table,n));return o>0?o:e.isPk&&id(r)||t.isPk&&id(n)?6:0}function cv(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),i=new Set(e.pks??[]),s=o=>{let a=null,c=0;for(const d of t){const f=new Set(d.pks??[]);for(const m of e.fields)for(const b of d.fields){if(o&&r.has(`${d.alias}\0${b}`))continue;const y=lv({table:e.tableName,field:m,isPk:i.has(m)},{table:d.tableName,field:b,isPk:f.has(b)});y>c&&(c=y,a={thisField:m,otherAlias:d.alias,otherField:b})}}return a};return s(!0)??s(!1)}function uv(e){const t=e.lastIndexOf("#");return t>=0?e.slice(0,t):e}function dv(e,t,n,r){const i=e.columns.find(c=>c.field===n);if(!i||i.from.kind!=="source")return null;const s=i.from.alias;if(!e.sources.some(c=>c.alias===s))return null;const o=e.sources[0]?.alias===s,a=r?.[s]??(o?uv(t):void 0);return a?{alias:s,rowId:a,field:i.from.field}:null}async function Ql(e,t,n,r){const i=n.spec.sources.map(f=>({source:f,table:r.resolve(f.tableName)}));if(i.some(f=>!f.table))return null;const s={...n.spec,sources:i.map(({source:f,table:m})=>({...f,tableName:m.name}))},o={};for(const{source:f,table:m}of i)o[f.alias]=m?.columns??[];const a=Of(s,o,[],[]),c=fn(r.taken,n.name),d={id:Ee(),workspaceId:t,name:c,code:je(c),columns:a,view:"table",source:{type:"projection",config:s},readonly:so(s).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...s.filters?{filters:s.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(d),d}const hv=Object.freeze(Object.defineProperty({__proto__:null,createProjectionTable:Ql},Symbol.toStringTag,{value:"Module"})),Df="__id";function Lf(e){const t=[];let n="",r,i=0;for(;i<e.length;){const s=e[i],o=e[i+1];if(s==="'"||s==='"'){const a=Jl(e,i,s);n+=e.slice(i,a),i=a;continue}if(s==="-"&&o==="-"){let a="";for(i+=2;i<e.length&&e[i]!==`
`;)a+=e[i++];const c=/^\s*projection:\s*(.+?)\s*$/i.exec(a);c?.[1]&&n.trim()===""&&(r=c[1]);continue}if(s==="/"&&o==="*"){for(i+=2;i<e.length&&!(e[i]==="*"&&e[i+1]==="/");)i++;i+=2;continue}if(s===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,i++;continue}n+=s,i++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function Jl(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function Qt(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function Mf(e,t){const n=[];let r=0,i="",s=0;for(;s<e.length;){const o=e[s];if(o==="'"||o==='"'){const a=Jl(e,s,o);i+=e.slice(s,a),s=a;continue}if(o==="("?r++:o===")"&&r--,r===0){const a=t(e,s);if(a>0){n.push(i),i="",s+=a;continue}}i+=o,s++}return n.push(i),n}function dr(e,t){return Mf(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function Pf(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return Mf(e,(r,i)=>/\s/.test(r[i]??"")?n.exec(r.slice(i,i+t.length+32))?.[0].length??0:0)}function Nf(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const i=e[r];if(i==="'"||i==='"'){r=Jl(e,r,i)-1;continue}if(i==="(")n++;else if(i===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function jf(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):eo(t)?t:/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function zf(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function fv(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=Nf(e);if(n==null)return null;const r=[];for(const i of dr(n,",")){const s=i.trim();if(!s||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(s))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(s);if(!o?.[1])continue;const a=Qt(o[1]);if(a===Df)continue;const c=o[2]??"",d=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(c.trim())?.[1]??"TEXT",f={field:a,label:a,type:zf(d)};/\bNOT\s+NULL\b/i.test(c)&&(f.notnull=!0),(/\bUNIQUE\b/i.test(c)||/\bPRIMARY\s+KEY\b/i.test(c))&&(f.unique=!0),r.push(f)}return{name:Qt(t[1]),columns:r,rows:[]}}function pv(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=Qt(t[1]),r=t[2]?dr(t[2].slice(1,-1),",").map(o=>Qt(o)):[],i=[];let s=(t[3]??"").trim();for(;s.startsWith("(");){const o=Nf(s);if(o==null)break;const a=dr(o,",").map(d=>jf(d)),c={};a.forEach((d,f)=>{const m=r[f]??`col${f+1}`;m!==Df&&(c[m]=d)}),i.push(c),s=s.slice(o.length+2).trim(),s.startsWith(",")&&(s=s.slice(1).trim())}return{table:n,rows:i}}function sd(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=Qt(t[1]);return{table:n,alias:t[2]?Qt(t[2]):n}}function hi(e){return dr(e,".").map(Qt)}function Xl(e,t,n){const r=t.filter(i=>(n.get(i.tableName.toLowerCase())??[]).includes(e));return r.some(i=>i.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function mv(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const i=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);i&&(n=Number(i[1]),t=t.slice(0,i.index));let s;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(s=o[1],t=t.slice(0,o.index));let a;const c=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return c?.[1]&&(a=c[1],t=t.slice(0,c.index)),{from:t,limit:n,orderBy:s,where:a}}function gv(e,t,n,r,i){const s=[],o=a=>a.length===2?a[0]??"":Xl(a[0]??"",n,r);for(const a of Pf(e,"AND")){const c=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(a);if(!c?.[1]||!c[2]){i.push(`ON ${a.trim()}`);continue}const d=hi(c[1]),f=hi(c[2]),m=o(d)===t.alias,b=m?d:f,y=m?f:d;if(o(b)!==t.alias){i.push(`ON ${a.trim()} — neither side names ${t.alias}`);continue}s.push({field:b.length===2?b[1]??"":b[0]??"",eqAlias:y.length===2?y[0]??"":o(y),eqField:y.length===2?y[1]??"":y[0]??""})}return s}function bv(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,i=[],s=[];let o=0;for(let d=r.exec(e);d;d=r.exec(e))i.push(e.slice(o,d.index)),s.push((d[1]??"INNER").toUpperCase()),o=d.index+d[0].length;i.push(e.slice(o));const a=sd(i[0]??"");if(!a.table)return null;const c=[{alias:a.alias,tableName:a.table}];for(let d=1;d<i.length;d++){const f=i[d]??"",m=/\s+ON\s+([\s\S]+)$/i.exec(f),b=sd(m?f.slice(0,m.index):f);if(!b.table)continue;const y=s[d-1]??"INNER";if(y==="CROSS"||!m?.[1]){n.push(`${y} JOIN ${b.table} — no ON predicate to model`),c.push({alias:b.alias,tableName:b.table});continue}(y==="RIGHT"||y==="FULL")&&n.push(`${y} JOIN ${b.table} — imported as LEFT JOIN (the closest a projection can express)`);const v=[...c,{alias:b.alias,tableName:b.table}];c.push({alias:b.alias,tableName:b.table,join:{type:y==="INNER"?"inner":"left",on:gv(m[1],b,v,t,n)}})}return c}function wv(e,t,n,r){const i=[];for(const s of dr(e,",")){const o=s.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const a=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),c=(a?.[1]??o).trim(),d=hi(c),f=Qt(a?.[2]??d[d.length-1]??c);if(/^NULL$/i.test(c)){i.push({field:f,from:{kind:"script",script:kv}});continue}d.length===2&&d[0]&&d[1]?i.push({field:f,from:{kind:"source",alias:d[0],field:d[1]}}):d.length===1&&d[0]&&/^[\w$]+$/.test(d[0])?i.push({field:f,from:{kind:"source",alias:Xl(d[0],t,n),field:d[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return i}function yv(e,t){const n={};if(!e)return n;for(const r of Pf(e,"AND")){const i=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),s=i?.[1]?Ff(t.columns,hi(i[1]),t.sources,t.schema):void 0;if(!i||!s){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[s.field]=(i[2]??"").replace(/''/g,"'")}return n}function vv(e,t){const n=[];for(const r of dr(e??"",",")){const i=r.trim();if(!i)continue;const[s,o]=i.split(/\s+/),a=Ff(t.columns,hi(s??""),t.sources,t.schema);if(!a){t.unsupported.push(`ORDER BY ${i}`);continue}n.push({field:a.field,asc:!/^DESC$/i.test(o??"")})}return n}function od(e,t,n,r){const i=[],s=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(s);if(!o)return null;const{from:a,limit:c,orderBy:d,where:f}=mv(o[3]??""),m=c??(o[1]?Number(o[1]):void 0),b=bv(a,n,i);if(!b)return null;const y=wv(o[2]??"",b,n,i),v={columns:y,sources:b,schema:n,unsupported:i},$=yv(f,v),C=vv(d,v),E={version:1,sources:b,columns:y};return Object.keys($).length>0&&(E.filters=$),m!=null&&m>0&&(E.limit=m),{projection:{name:r||t,spec:E,...C.length>0?{sortBy:C}:{}},unsupported:i}}const kv=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function Ff(e,t,n,r){const i=t.length===2?t[0]:Xl(t[0]??"",n,r),s=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===i&&o.from.field===s)??e.find(o=>o.field===s)}function ki(e){const t=new Map,n=[],r=[],i=new Map,s=o=>{i.set(o.name.toLowerCase(),o.columns.map(a=>a.field))};for(const o of Lf(e)){const a=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(a)){const c=fv(a);if(!c){r.push(Yr(a));continue}const d=t.get(c.name);t.set(c.name,{...c,rows:d?.rows??[]}),s(c);continue}if(/^INSERT\s+/i.test(a)){const c=pv(a);if(!c){r.push(Yr(a));continue}const d=t.get(c.table);if(d)d.rows.push(...c.rows);else{const f={name:c.table,columns:$v(c.rows),rows:c.rows};t.set(c.table,f),s(f)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(a)){const c=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(a),d=c?.[1]?Qt(c[1]):"",f=c?.[2]?od(c[2],d||"view",i,d):null;f?(n.push(f.projection),r.push(...f.unsupported)):r.push(Yr(a));continue}if(/^SELECT\b/i.test(a)){const c=od(a,"",i,o.name);c?(n.push(c.projection),r.push(...c.unsupported)):r.push(Yr(a));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(a)||r.push(Yr(a))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function Yr(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function $v(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(s=>s[n]).filter(s=>s!=null),i=r.length===0?"string":r.every(s=>typeof s=="number")?"number":r.every(s=>typeof s=="boolean")?"boolean":"string";return{field:n,label:n,type:i}})}const xv=Object.freeze(Object.defineProperty({__proto__:null,parseLiteral:jf,parseSqlScript:ki,splitStatements:Lf,sqlTypeToColumnType:zf},Symbol.toStringTag,{value:"Module"})),Sv={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function Cv(e){e.ui.registerImporter(Zl),e.ui.registerDropHandler(async t=>{const n=Tv(t).filter(Iv);if(n.length===0)return!1;t.preventDefault();for(const r of n)await Ev(e,r);return!0})}const Zl={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return ki(await _v(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function _v(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${Ht(t.url)}…`):Promise.resolve(t.text??"")}function ec(e){return ki(e).projections.length>0}async function tc(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const i=ki(t),s={tables:[],projections:[],rowCount:0,unsupported:i.unsupported},o=n.target??{kind:"new"},a=o.kind==="new"||i.tables.length===1;a||s.unsupported.push(`"Import into" was not applied — this script defines ${i.tables.length} tables, and an append/replace names only one destination`);const c=new Map;for(const y of i.tables){const v=await df(e,y.name,(async function*(){yield{columns:y.columns,rows:y.rows}})(),{workspaceId:r,importerId:"sql",target:a?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:$=>n.editColumns($,y.name)}:{}});v&&(c.set(y.name,v.tableName),s.tables.push(v.tableName),s.rowCount+=v.rowCount)}const d=await e.store.tables.find({workspaceId:r}),f=new Map;for(const y of d)f.has(y.name)||f.set(y.name,y);const m=new Map;for(const y of d)m.has(y.name.toLowerCase())||m.set(y.name.toLowerCase(),y);const b=new Set([...d.map(y=>y.name),...s.tables]);for(const y of i.projections){const v=await Ql(e,r,y,{resolve:$=>{const C=c.get($);return(C?f.get(C):void 0)??f.get($)??m.get($.toLowerCase())},taken:b});if(!v){s.unsupported.push(`projection "${y.name}" — its source tables are not in this workspace`);continue}f.set(v.name,v),m.set(v.name.toLowerCase(),v),b.add(v.name),s.projections.push(v.name)}return s}function nc(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const i=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${i}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function Ev(e,t){const n=await t.text();try{if(ec(n)){nc(e,await tc(e,n),t.name);return}const r=await ro(e,Zl,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=r.landed.reduce((s,o)=>s+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${i.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function Tv(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}function Iv(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const Av=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:ec,init:Cv,meta:Sv,reportSqlRestore:nc,restoreSqlScript:tc,sqlImporterSpec:Zl},Symbol.toStringTag,{value:"Module"})),Uf=Ce`
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
`;function Bf(e,t,n){return t.bottom<=n?null:Math.round(e.top-t.height-Rv)}const Rv=4;var qf=function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let ss=null,Ga="anchored-menu";function Ov(){return ss||(Hf(Ga),ss=document.createElement(Ga),document.body.appendChild(ss)),ss}class $i extends xe{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=t=>{t.composedPath().includes(this)||this.finish(null)},this.onKey=t=>{t.key==="Escape"&&(t.preventDefault(),this.finish(null))}}static open(t,n){return Ov().openMenu(t,n)}static{this.styles=[Uf,Ce`
      :host {
        position: fixed;
        z-index: var(--menu-z, 150000);
      }
      :host([hidden]) {
        display: none;
      }
      .menu {
        background: var(--menu-surface, #fff);
        border: 1px solid var(--menu-border, #e5e7eb);
        border-radius: var(--menu-radius, 0.4rem);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
        padding: 0.25rem;
        min-width: var(--menu-min-width, 190px);
        /* Shadow DOM does not inherit the page font, so the buttons' inherited
           font would fall back to the browser default serif. Name the font
           explicitly; the buttons inherit it. */
        font-family: var(--menu-font, system-ui, sans-serif);
        font-size: 0.875rem;
        color: var(--menu-text, #111);
        /* A long value list (every distinct value of a field, say) can run to
           hundreds of entries, so the menu scrolls rather than growing past the
           viewport. Short menus are unaffected. */
        max-height: var(--menu-max-height, min(60vh, 420px));
        overflow-y: auto;
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
        color: var(--menu-text, #111);
      }
      button:hover {
        background: var(--menu-hover, #f3f4f6);
      }
      button.danger {
        color: var(--menu-danger, #b91c1c);
      }
      .mi {
        font-size: 1.15rem;
        color: var(--menu-icon, #6b7280);
      }
    `]}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(t,n){return this.items=n,this.style.left=`${Math.round(t.left)}px`,this.style.top=`${Math.round(t.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const r=this.shadowRoot?.querySelector(".menu");if(!r)return;const i=Bf(t,r.getBoundingClientRect(),window.innerHeight);i!==null&&(this.style.top=`${i}px`)}),new Promise(r=>{this.resolveFn=r,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(t){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const n=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>n?.(t))}render(){return this.shown?k`
      <div class="menu" role="menu">
        ${this.items.map(t=>k`
            <button role="menuitem" class=${t.danger?"danger":""} @click=${()=>this.finish(t.id)}>
              ${t.icon?k`<span class="mi">${t.icon}</span>`:""}
              <span>${t.label}</span>
            </button>
          `)}
      </div>
    `:k``}}qf([z()],$i.prototype,"items",void 0);qf([z()],$i.prototype,"shown",void 0);function Hf(e="anchored-menu"){Ga=e,customElements.get(e)||customElements.define(e,$i)}const hr=Object.freeze(Object.defineProperty({__proto__:null,AnchoredMenu:$i,defineAnchoredMenu:Hf,flipIfBelowViewport:Bf,materialIconStyles:Uf},Symbol.toStringTag,{value:"Module"})),Ya='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Dv={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:Ya,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function Lv(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:Ya,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>ad(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:Ya,keywords:["datasette","live","remote","backend"],run:t=>ad(t)})}async function Mv(){const{registries:e}=await J();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function ad(e,t){const n=await Mv();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const i=t?.getBoundingClientRect(),s=i?await $i.open(i,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!s)return;r=i?n.find(o=>o.id===s):n.find(o=>o.label===s)}if(r)try{await r.connect(e)}catch(i){await e.ui.dialogs.alert(i?.message??String(i),`Connect ${r.label} failed`)}}const Pv=Object.freeze(Object.defineProperty({__proto__:null,init:Lv,meta:Dv},Symbol.toStringTag,{value:"Module"}));function ld(e,t){return JSON.stringify(t.map(n=>e[n]??null))}function Nv(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function Vf(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:i,deletedRemoteFields:s=[]}=e,o=new Set(s),a=new Set(i),c=T=>{const Q={...T};for(const P of o)delete Q[P];return Q},d=new Set(t.flatMap(T=>Object.keys(T.data))),f=[...new Set(n.flatMap(T=>Object.keys(T)))].filter(T=>d.has(T)&&!o.has(T)&&!a.has(T)).sort(),b=r.length>0&&n.every(T=>Nv(T,r))?"pk":f.length>0?"content":"none";if(b==="none")return{data:n.map(c),merged:!1,strategy:b,droppedUserRows:t.filter(T=>cd(T.data,i)).length};const y=b==="pk"?r:f,v=new Map;for(const T of t){const Q=ld(T.data,y);v.has(Q)||v.set(Q,T)}const $=new Set,C=n.map(T=>{const Q=c(T),P=ld(T,y),ne=v.get(P);if(ne){$.add(P);for(const W of i)Object.prototype.hasOwnProperty.call(ne.data,W)&&(Q[W]=ne.data[W])}return Q});let E=0;for(const[T,Q]of v)!$.has(T)&&cd(Q.data,i)&&(E+=1);return{data:C,merged:!0,strategy:b,droppedUserRows:E}}function cd(e,t){return t.some(n=>{const r=e[n];return r!=null&&r!==""})}const Qa="easydb:table-loading",Ns=new Map;function It(e,t,n){e&&(t?Ns.set(e,typeof n=="number"?n:null):Ns.delete(e),!(typeof document>"u")&&document.dispatchEvent(new CustomEvent(Qa,{detail:{tableId:e,loading:t,progress:n}})))}function jv(e){if(Ns.has(e))return Ns.get(e)??null}const Ja="easydb:app-progress";function oo(e){typeof document>"u"||document.dispatchEvent(new CustomEvent(Ja,{detail:e}))}function Kf(){oo({label:""})}class Wf{constructor(t){this.weight=new Map,this.done=new Map;const n=t.reduce((r,i)=>r+Math.max(0,i.total),0);this.uniform=n===0;for(const r of t)this.weight.set(r.tableId,this.uniform?1:Math.max(0,r.total));this.totalWeight=this.uniform?t.length:n}observe(t,n){const r=this.weight.get(t);r!=null&&this.done.set(t,Math.min(r,Math.max(0,n)))}complete(t){const n=this.weight.get(t);n!=null&&this.done.set(t,n)}fraction(){if(this.totalWeight<=0)return 1;let t=0;for(const n of this.done.values())t+=n;return Math.min(1,t/this.totalWeight)}completedTables(){let t=0;for(const[n,r]of this.weight)(this.done.get(n)??-1)>=r&&t++;return t}get tableCount(){return this.weight.size}}function rt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)?e:null}function ye(e,t){return rt(e)?.[t]}function Ue(e){return typeof e=="string"?e:null}function fr(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function xi(e){return Array.isArray(e)?e:[]}function zn(e){return xi(e).filter(t=>typeof t=="string")}function rc(e){return xi(ye(e,"rows")).filter(t=>rt(t)!==null)}function Ca(e){return e===!0||e===1}class Ge extends Error{constructor(t,n){const r=Ue(ye(t,"error")),i=zn(ye(t,"errors"));super(r??(i.length>0?i.join("; "):null)??"Datasette request failed"),this.name="DatasetteError";const s=n??fr(ye(t,"status"));s!=null&&(this.status=s),this.errors=i.length>0?i:r?[r]:[]}}function St(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[a,c]of t.searchParams)r[a]=c;let i,s=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),s=decodeURIComponent(n[n.length-2]);const a=n.slice(0,n.length-2).join("/");i=t.origin+(a?"/"+a:"")}else n.length===1&&(s=decodeURIComponent(n[0])),i=t.origin;return{base:i,db:s,table:o,query:r}}function Fn(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,i]of Object.entries({...e.query,...t}))i!=null&&n.searchParams.set(r,String(i));return n.toString()}function zv(e,t){const n={};for(const[r,i]of Object.entries(e.query))r.startsWith("_")||(n[r]=i);return Fn({...e,query:n},{_next:t})}function ud(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function Fv(e){const t=Ue(ye(e,"next_url")),n=ye(e,"next"),r=n!=null&&n!==!1?String(n):null,i=xi(ye(e,"rows")),s=Array.isArray(ye(e,"columns"))?zn(ye(e,"columns")):null;return{rows:i.map(a=>Array.isArray(a)&&s?Object.fromEntries(s.map((c,d)=>[c,a[d]])):a),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:ye(e,"truncated")===!0}}function Uv(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function dd(e){const t=zn(ye(e,"primary_keys")),n=zn(ye(e,"columns")),r={},i=ye(e,"column_details");if(Array.isArray(i))for(const a of i){const c=rt(a);if(!c)continue;const d=Ue(c.column)??Ue(c.name);d&&(r[d]=c)}else{const a=rt(i);if(a)for(const[c,d]of Object.entries(a))r[c]=rt(d)??{}}for(const a of n)a in r||(r[a]={});const o=(n.length?n:Object.keys(r)).map(a=>{const c=r[a]??{},d=Ca(c.is_pk)||t.includes(a),f=Ue(c.sqlite_type)??Ue(c.type)??void 0,m={field:a,label:Gf(a),type:Uv(f,a)};(Ca(c.notnull)||d)&&(m.notnull=!0),d&&(m.unique=!0),(Ca(c.hidden)||Yl(a))&&(m.hidden=!0);const b=c.default;return b!=null&&b!==""&&(m.default=b),m});if(t.length===0){const a=o.filter(c=>c.unique).map(c=>c.field);a.length&&t.push(...a)}return{columns:o,pks:t}}function ao(e,t){if(t.length===0)return e;const n=new Set(t);return e.map(r=>n.has(r.field)&&!(r.unique&&r.notnull)?{...r,unique:!0,notnull:!0}:r)}function Gf(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function lo(e){const t=[],n=new Set;for(const r of e)for(const i of Object.keys(r))n.has(i)||(n.add(i),t.push(i));return t.map(r=>{const i={field:r,label:Gf(r),type:Bv(e.map(s=>s[r]))};return Yl(r)&&(i.hidden=!0),i})}function Bv(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(Ll)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&qv(n))?"datetime":"string"}function qv(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Hv(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const i=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(i)?n+=i:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function Vv(e,t){return!t||t.length===0?null:t.map(n=>Hv(e[n])).join(",")}function Kv(e){const t=Array.isArray(e)?e:xi(ye(e,"databases")),n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}const i=Ue(ye(r,"name"));i===null||i==="_memory"||n.push(Ue(ye(r,"route"))||i)}return n}function Wv(e,t){const n=Array.isArray(e)?e:xi(ye(e,"tables")),r=[];for(const i of n){if(typeof i=="string"){r.push({db:t,table:i,count:null,hidden:!1,pks:[]});continue}const s=Ue(ye(i,"name"));s!==null&&r.push({db:t,table:s,count:fr(ye(i,"count")),hidden:ye(i,"hidden")===!0,pks:zn(ye(i,"primary_keys"))})}return r}async function Rt(e,t){let n;try{n=await e(t)}catch(i){const s=i?.message||"network error";throw new Ge({error:`Couldn't reach ${t} (${s}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let i=null;try{i=await n.json()}catch{}throw new Ge(i&&typeof i=="object"?i:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(ye(r,"ok")===!1)throw new Ge(r,n.status);return r}async function ic(e,t){return Kv(await Rt(e,`${t}/-/databases.json`))}async function hd(e,t,n){return Wv(await Rt(e,`${t}/${encodeURIComponent(n)}.json`),n)}function Gv(e){const t=e?.views,n=[];for(const r of Array.isArray(t)?t:[]){if(typeof r=="string"){n.push(r);continue}const i=r;i&&typeof i.name=="string"&&i.hidden!==!0&&n.push(i.name)}return n}async function Yv(e,t,n){const i=`${t}/${encodeURIComponent(n)}.json?sql=${encodeURIComponent("select name, sql from sqlite_master where type='view' order by name")}&_shape=array`;let s;try{s=await Rt(e,i)}catch(d){const f=d instanceof Ge?d.message:String(d);throw new Ge({error:`Couldn't read the view definitions from "${n}". Importing views needs the SQL endpoint, which this instance may have disabled (allow_sql). Its tables can still be imported normally.

${f}`},d instanceof Ge?d.status:0)}const o=s?.rows,a=Array.isArray(s)?s:Array.isArray(o)?o:[],c=[];for(const d of a){const f=d,m=typeof f?.name=="string"?f.name:Array.isArray(d)?d[0]:void 0,b=typeof f?.sql=="string"?f.sql:Array.isArray(d)?d[1]:void 0;typeof m=="string"&&typeof b=="string"&&b.trim()&&c.push({db:n,name:m,sql:b})}return c}async function Qv(e,t){const n=t.db?[t.db]:await ic(e,t.base),r=[];for(const i of n){const s=await Rt(e,`${t.base}/${encodeURIComponent(i)}.json`);if(Gv(s).length!==0){if(s?.allow_execute_sql===!1)throw new Ge({error:`"${i}" defines views, but this instance has SQL queries disabled (allow_execute_sql), and a view's definition can only be read through them. Its tables can still be imported normally.`},403);r.push(...await Yv(e,t.base,i))}}return r}async function co(e,t){const n=Fn(t,{_extra:"column_details"}),r=await Rt(e,n);let{columns:i,pks:s}=dd(r),o=ye(r,"column_details")!=null,a=fr(ye(r,"count")),c=ye(r,"count_truncated")===!0,d=r;if(i.length===0){const f=Fn(t,{_extra:"columns"}),m=await Rt(e,f);({columns:i,pks:s}=dd(m)),o=ye(m,"column_details")!=null,a=fr(ye(m,"count"))??a,c=ye(m,"count_truncated")===!0||c,d=m}if(!o&&s.length===0)try{s=await Xf(e,t)}catch{}return{columns:ao(i,s),pks:s,count:a,countTruncated:c,typed:o,raw:d}}async function Xa(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await co(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function fd(e,t,n){const r=rt(e)??{},i=t?rt(ye(r.databases,t))??{}:{},s=rt(i.tables)??{},o=(n?rt(s[n]):null)??(n?rt(s[n.toLowerCase()]):null)??{};return Yf(o,c=>Ue(o[c])??Ue(i[c])??Ue(r[c]))}function Jv(e){const t=rt(e)??{};return Yf(t,n=>Ue(t[n]))}function Yf(e,t){const n={columns:{},units:{}},r=Ue(e.sort);r!==null&&(n.sort=r);const i=Ue(e.sort_desc);i!==null&&(n.sortDesc=i);const s=fr(e.size);s!==null&&(n.size=s),Array.isArray(e.sortable_columns)&&(n.sortableColumns=zn(e.sortable_columns));const o=Ue(e.label_column);o!==null&&(n.labelColumn=o),e.hidden===!0&&(n.hidden=!0);const a=Ue(e.description);a!==null&&(n.description=a);const c=Ue(e.description_html);c!==null&&(n.descriptionHtml=c);const d=t("source"),f=t("source_url"),m=t("license"),b=t("license_url"),y=t("about"),v=t("about_url");d!==null&&(n.source=d),f!==null&&(n.sourceUrl=f),m!==null&&(n.license=m),b!==null&&(n.licenseUrl=b),y!==null&&(n.about=y),v!==null&&(n.aboutUrl=v);const $=rt(e.columns);if($)for(const[E,T]of Object.entries($))typeof T=="string"&&(n.columns[E]=T);const C=rt(e.units);if(C)for(const[E,T]of Object.entries(C))typeof T=="string"&&(n.units[E]=T);return n}const pd=new Map,md=new Map;async function Xv(e,t){let n=pd.get(t);return n||(n=Rt(e,`${t}/-/metadata.json`).catch(()=>({})),pd.set(t,n)),n}async function Zv(e,t){let n=md.get(t);return n||(n=Rt(e,`${t}/-/config.json`).catch(()=>({})),md.set(t,n)),n}async function e0(e,t){try{const n=await Rt(e,Fn(t,{_extra:"metadata"}));return ye(n,"metadata")??{}}catch{return{}}}function t0(...e){const t={columns:{},units:{}};for(const n of e){const{columns:r,units:i,...s}=n;Object.assign(t,Object.fromEntries(Object.entries(s).filter(([,o])=>o!==void 0))),Object.assign(t.columns,r),Object.assign(t.units,i)}return t}async function sc(e,t){const n=await Xv(e,t.base),r=fd(n,t.db,t.table);if(Object.keys(rt(n)??{}).length>0)return r;const[i,s]=await Promise.all([Zv(e,t.base),t.db&&t.table?e0(e,t):Promise.resolve({})]);return t0(r,fd(i,t.db,t.table),Jv(s))}function n0(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function oc(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(a=>{const c=e.columns[a.field],d=e.units[a.field],f=n?n.has(a.field):void 0;return c==null&&d==null&&f===void 0?a:{...a,...c!=null?{description:c}:{},...d!=null?{units:d}:{},...f!==void 0?{sortable:f}:{}}}),i=new Set(t.map(a=>a.field)),s={};e.sort&&i.has(e.sort)?(s.sortColumn=e.sort,s.sortAsc=!0):e.sortDesc&&i.has(e.sortDesc)&&(s.sortColumn=e.sortDesc,s.sortAsc=!1);const o=n0(e);return o&&(s.info=o),e.labelColumn&&i.has(e.labelColumn)&&(s.labelColumn=e.labelColumn),{columns:r,patch:s}}function ac(e,t){if(t.length===0)return e;const n=new Map(lo(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const i=n.get(r.field);return i&&i!=="string"?{...r,type:i}:r})}async function Si(e,t,n={}){const r=n.maxRows??1e4,s={_size:n.pageSize??1e3,...n.extraParams||{}},o=Fn(t,s);let a=n.startUrl?ud(n.startUrl,o)??n.startUrl:o;const c=[];let d=!1,f=!1,m=0,b,y;for(;a;){let v;try{v=await Rt(e,a)}catch(T){if(c.length===0&&!n.startUrl)throw T;b=T instanceof Ge&&T.status?`stopped after ${c.length} rows: HTTP ${T.status}`:`stopped after ${c.length} rows: ${T?.message??String(T)}`,f=!0,y=a;break}const $=Fv(v);c.push(...$.rows),d=d||$.truncated,m+=1,n.onProgress?.(c.length);const E=($.nextUrl!=null?ud($.nextUrl,a):null)??($.nextToken!=null?zv(t,$.nextToken):null);E&&c.length<r&&$.rows.length>0?a=E:(f=E!=null&&$.rows.length>0,f&&(y=E??void 0),a=null)}return{rows:c,truncated:d,hasMore:f,pages:m,error:b,nextUrl:y}}function r0(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Qf(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Jf(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function uo(e,t,n,r){let i;try{i=await e(t,{method:"POST",headers:r0(r),body:JSON.stringify(n)})}catch(o){throw new Ge({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(i&&i.ok===!1){let o=null;try{o=await i.json()}catch{}throw new Ge(o&&typeof o=="object"?o:{error:`HTTP ${i.status} for ${t}`},i.status)}const s=await i.json();if(ye(s,"ok")===!1)throw new Ge(s,i.status);return s}async function gd(e,t,n,r={}){const i=await uo(e,Qf(t,"insert"),{rows:n,return:!0},r.token);return rc(i)}async function i0(e,t,n,r,i={}){const s=await uo(e,Jf(t,n,"update"),{update:r,return:!0},i.token),o=rt(ye(s,"row"));return o||(rc(s)[0]??null)}async function bd(e,t,n,r={}){await uo(e,Jf(t,n,"delete"),{},r.token)}async function s0(e,t,n,r={}){const i=await uo(e,Qf(t,"upsert"),{rows:n,return:!0},r.token);return rc(i)}async function Xf(e,t){const n=Fn(t,{_extra:"primary_keys"}),r=await Rt(e,n);return zn(ye(r,"primary_keys"))}async function Zf(e,t){try{const n=await Rt(e,Fn(t,{_extra:"count"}));return{count:fr(ye(n,"count")),truncated:ye(n,"count_truncated")===!0}}catch{return{count:null,truncated:!1}}}async function ep(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const i=await e(`${t}/-/versions.json`,r);if(i&&i.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${i.status}`};const s=await i.json(),o=Ue(ye(ye(s,"datasette"),"version"))??Ue(ye(s,"version"));let a=null;try{const d=await(await e(`${t}/-/actor.json`,r)).json();a=rt(ye(d,"actor"))}catch{}return{reachable:!0,version:o,actor:a,writable:!!(n.token&&a)}}catch(i){return{reachable:!1,version:null,actor:null,writable:!1,error:i?.message||"unreachable"}}}function pr(e,t){return t?(n,r)=>{const i=(r??{}).headers??{};return e(n,{...r??{},headers:{...i,Authorization:`Bearer ${t}`}})}:e}function o0(e,t){const n=new Map;for(const r of e)n.has(r.name.toLowerCase())||n.set(r.name.toLowerCase(),r);return r=>n.get(`${t}/${r}`.toLowerCase())??n.get(r.toLowerCase())}async function a0(e,t,n){const r={created:[],skipped:[],found:n.length};if(n.length===0)return r;const i=(await e.store.tables.find()).filter(a=>a.workspaceId===t),s=new Set(i.map(a=>a.name)),o=[...i];for(const a of n){const c=ki(a.sql),d=c.projections[0];if(!d){r.skipped.push({name:a.name,reason:c.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const f=await Ql(e,t,{name:`${a.db}/${a.name}`,spec:d.spec,...d.sortBy?{sortBy:d.sortBy}:{}},{resolve:o0(o,a.db),taken:s});if(!f){const m=d.spec.sources.map(b=>b.tableName).join(", ");r.skipped.push({name:a.name,reason:`its source tables are not in this workspace (${m}) — import them first`});continue}o.push(f),s.add(f.name),r.created.push(f.name),c.unsupported.length>0&&r.skipped.push({name:a.name,reason:`imported, but part of the query was not modelled: ${c.unsupported.slice(0,2).join("; ")}`})}return r}function l0(e,t){if(t.found===0){e.ui.dialogs.toast("That Datasette database defines no views.",{kind:"info",title:"Datasette views"});return}const n=t.skipped.length>0?` ${t.skipped.length} not fully imported: ${t.skipped.map(r=>`${r.name} — ${r.reason}`).join("; ")}`:"";if(t.created.length===0){e.ui.dialogs.toast(`No views could be imported as projections.${n}`,{kind:"warning",title:"Datasette views"});return}e.ui.dialogs.toast(`Imported ${t.created.length} of ${t.found} view${t.found===1?"":"s"} as projections.${n}`,{kind:t.skipped.length>0?"warning":"success",title:"Datasette views"})}function c0(e,t){return`${e}/${encodeURIComponent(t.db)}/${encodeURIComponent(t.name)}`}async function tp(e,t){try{return await Qv(n=>e.backend.fetch(n),St(t))}catch(n){if(n instanceof Ge)return null;throw n}}async function np(e,t,n){const r=t.slice(0,5).map(s=>s.name).join(", "),i=await e.ui.dialogs.choice(`${n} ${t.length} view${t.length===1?"":"s"} (${r}${t.length>5?", …":""}).

A view is a query rather than stored rows, so it can come in either way.`,["As projections (live)","As tables (snapshot)"],"Datasette views");return i?i.startsWith("As projections")?"projection":"table":null}async function u0(e,t,n){const r=await tp(e,t);if(!r||r.length===0)return;const i=await np(e,r,"This database also defines");i&&await rp(e,St(t).base,r,i,n)}async function rp(e,t,n,r,i){if(r==="table"){await i(n.map(o=>c0(t,o)));return}const s=e.workspaceId();s&&l0(e,await a0(e,s,n))}const js=e=>e.replace(/^https?:\/\//,""),Zr="datasette",ip=1e4,sp=1e3,lc=1e4,op=60;function ap(e){e.ui.registerSettings(Zr,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:ip,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:sp,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:lc,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:op,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function os(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function ho(e){const[t,n,r,i]=await Promise.all([e.settings.get(Zr,"maxImportRows"),e.settings.get(Zr,"pageSize"),e.settings.get(Zr,"connectMaxRows"),e.settings.get(Zr,"retryWaitSeconds")]);return{maxImportRows:os(t,ip,0),pageSize:os(n,sp,1),connectMaxRows:os(r,lc,1),retryWaitSeconds:os(i,op,1)}}function fo(e){return e===0?Number.MAX_SAFE_INTEGER:e}function d0(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function cc(e,t,n,r){const i={...e.info??{}};return!i.source&&!i.sourceUrl&&(i.source=`${js(t)}/${n}/${r}`,i.sourceUrl=d0(t,n,r)),{...e,info:i}}async function uc(e,t,n,r={}){if(t.db&&t.table)return[await Xa(e,t)];const i=[];if(t.db){if(i.push(...await hd(e,t.base,t.db)),r.skipPicker)return i.filter(a=>!a.hidden)}else{const a=await ic(e,t.base);if(a.length===0)return[];let c=a;if(a.length>1){const d=await ui(a.map(f=>({name:f,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${js(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!d)return null;c=d.map(f=>a[f])}for(const d of c)try{i.push(...await hd(e,t.base,d))}catch{}}if(i.length===0)return[];const s=new Set(i.map(a=>a.db)).size>1,o=await ui(i.map(a=>({name:s?`${a.db}/${a.table}`:a.table,size:a.count,detail:s?void 0:a.db,hidden:a.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${js(t.base)}.`,confirmLabel:n});return o?o.map(a=>i[a]):null}const h0=e=>new Promise(t=>setTimeout(t,e));function f0(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function dc(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const p0={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},wd="https://latest.datasette.io/fixtures/facetable";function m0(e){ap(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>k0(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>x0(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${wd}`,"","Import from Datasette");r&&await yd(t,r)}}),e.ui.registerUrlSource({id:"datasette-views",label:"Datasette views…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette database URL — its SQL views can come in as live Projections over the tables you already imported, or as snapshot tables.

e.g. ${wd}`,"","Import Datasette views");if(r)try{const i=await tp(t,r);if(!i||i.length===0){await t.ui.dialogs.alert("That Datasette database defines no views.","Datasette views");return}const s=await np(t,i,"This database defines");if(!s)return;await rp(t,St(r).base,i,s,o=>lp(t,o,{}))}catch(i){await t.ui.dialogs.alert(i?.message??String(i),"Datasette views")}}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return g0(r)?(t.preventDefault(),await yd(n,r,{skipViews:!0}),!0):!1})}async function yd(e,t,n={}){try{await po(e,t,n)}catch(r){let i;r instanceof Ge?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function g0(e){try{const t=St(e);return!!(t.db&&t.table)}catch{return!1}}async function po(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=await ho(e),s=St(t),a=await uc(P=>e.backend.fetch(P),s,"Import",{skipPicker:n.skipTablePicker});if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let d=0;for(const P of a){const ne={base:s.base,db:P.db,table:P.table,query:{}},W=await b0(e,r,ne);if(W.skipped){d+=1;continue}c.push({tableId:W.tableId,ref:ne,overwrite:W.overwrite,knownCount:P.count}),It(W.tableId,!0)}let f=0,m=0;const b=[],y=[],v=[],$=new Wf(c.map(P=>({tableId:P.tableId,total:P.knownCount??0}))),C=`Importing ${c.length} table${c.length===1?"":"s"}`,E=P=>{c.length!==0&&oo({label:C,...P===void 0?{}:{fraction:P},detail:`${$.completedTables()} of ${$.tableCount} table${$.tableCount===1?"":"s"}`})};E();try{for(const P of c){try{const ne=await w0(e,P.tableId,P.ref,P.overwrite,P.knownCount,n,i,W=>{$.observe(P.tableId,W),E($.fraction())});f+=1,m+=ne.rowCount,ne.error?y.push(`${P.ref.db}/${P.ref.table} (${ne.error})`):(ne.hasMore||ne.truncated)&&b.push(`${P.ref.db}/${P.ref.table}`)}catch(ne){v.push(`${P.ref.db}/${P.ref.table}: ${ne?.message??String(ne)}`)}$.complete(P.tableId),E($.fraction()),It(P.tableId,!1)}}finally{Kf()}const T=fo(i.maxImportRows),Q=n.maxRows!=null?Math.min(n.maxRows,T):T;if(v0(e,{imported:f,skipped:d,totalRows:m,capped:b,cap:Q,partial:y,failed:v,requested:a.length}),f>0&&!n.skipViews)try{await u0(e,t,P=>lp(e,P,n))}catch{}}async function lp(e,t,n){for(const r of t)await po(e,r,{...n,skipViews:!0})}async function b0(e,t,n){const r=`${n.db}/${n.table}`,i={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},s=(await e.store.tables.find()).filter(d=>d.workspaceId===t),o=s.find(d=>d.name.toLowerCase()===r.toLowerCase());let a=r;if(o){const d=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!d||d==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(d==="Overwrite")return await e.store.tables.patch(o.id,{origin:i,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};a=fn(new Set(s.map(f=>f.name)),r)}const c=Ee();return await e.store.tables.insert({id:c,workspaceId:t,name:a,code:je(`${n.db}-${n.table}`),columns:[],view:"table",origin:i,updatedAt:Date.now()}),{tableId:c,overwrite:!1}}async function w0(e,t,n,r,i,s,o,a){const c=`${n.db}/${n.table}`,d=b=>e.backend.fetch(b),f=fo(o.maxImportRows),m=s.maxRows!=null?Math.min(s.maxRows,f):f;It(t,!0);try{let b=[],y=i,v=!1,$=!1,C=[];try{const me=await co(d,n);b=me.columns,y==null&&(y=me.count,v=me.countTruncated),$=me.typed,C=me.pks??[]}catch{}if(y==null){const me=await Zf(d,n);y=me.count,v=me.truncated}const E=y&&y>0&&(!v||m<=y)?Math.min(y,m):0,T=[];let Q=!1,P=!1,ne=0,W,I,V;for(;;){const me=await Si(d,n,{maxRows:Math.max(0,m-T.length),pageSize:o.pageSize,...V?{startUrl:V}:{},onProgress:Wn=>{E>0&&It(t,!0,Math.min(1,(T.length+Wn)/E)),a?.(T.length+Wn)}});if(T.push(...me.rows),Q=Q||me.truncated,ne+=me.pages,P=me.hasMore,W=me.error,I=me.nextUrl,!me.error||!me.nextUrl||T.length>=m)break;const Ne=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${c}" paused after ${T.length.toLocaleString()} rows (${me.error}). Datasette may be rate-limiting a large import. Wait ${Ne} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Ne}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Ne}`)break;It(t,!0),e.ui.dialogs.toast(`Resuming "${c}" in ${Ne}…`,{kind:"info",title:"Import paused"}),await h0(f0(o.retryWaitSeconds)),V=me.nextUrl,W=void 0,I=void 0}const K=b.length===0?lo(T):$?b:ac(b,T);let de=ao(K,C),H={};try{const me=await sc(d,n),Ne=oc(me,de);de=Ne.columns,H=Ne.patch}catch{}H=cc(H,n.base,n.db,n.table);const te=await e.store.tables.findOne(t),q=te?.columns??[],Y=q.length===0;let{columns:ae}=no(q,de,te?.deletedColumns),we=T;if(s.editColumns&&Y){const me=await s.editColumns(ae,c);if(me===null)return{name:c,rowCount:0,hasMore:!1,truncated:!1,pages:ne,count:y,error:W};we=y0(we,ae,me),ae=me}const $e=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const Le=dc(W,I,T.length,y),pe=C.length>0&&te?.origin?{origin:{...te.origin,pks:C}}:{},yt=Y?{columns:ae,...H,...pe,importResume:Le,updatedAt:$e}:{columns:ae,...H.info?{info:H.info}:{},...pe,importResume:Le,updatedAt:$e};await e.store.tables.patch(t,yt);const Lt=e.store.rows(t);if(r){const me=await Lt.find();await Lt.bulkRemove(me.map(Ne=>Ne.id))}const He=we.map(me=>({id:Ee(),tableId:t,data:me,updatedAt:$e}));return await Lt.bulkInsert(He),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:He.length}),{name:c,rowCount:He.length,hasMore:P,truncated:Q,pages:ne,count:y,error:W}}finally{It(t,!1)}}function y0(e,t,n){const r=Ul(t,n);return r?e.map(r):e}function v0(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,i=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${i} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const s=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.capped.length} capped${s} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${i}`,{kind:"success",title:"Datasette import"})}async function k0(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await ho(e);await $0(e,n,r)}catch(r){const i=r instanceof Ge?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function $0(e,t,n){const r=St(t.origin.url),i=f=>e.backend.fetch(f),s=fo(n.maxImportRows);It(t.id,!0);let o,a;try{let f=[],m=null,b=!1,y=!1,v=[];try{const pe=await co(i,r);f=pe.columns,m=pe.count,b=pe.countTruncated,y=pe.typed,v=pe.pks??[]}catch{}if(m==null){const pe=await Zf(i,r);m=pe.count,b=pe.truncated}const $=m&&m>0&&(!b||s<=m)?Math.min(m,s):0,{rows:C,hasMore:E,truncated:T,error:Q,nextUrl:P}=await Si(i,r,{maxRows:s,pageSize:n.pageSize,onProgress:pe=>{$>0&&It(t.id,!0,Math.min(1,pe/$))}}),ne=v.length>0?v:t.origin?.pks??[];let W=ao(f.length===0?lo(C):y?f:ac(f,C),ne),I={};try{const pe=await sc(i,r),yt=oc(pe,W);W=yt.columns,I=yt.patch}catch{}I=cc(I,r.base,r.db,r.table);const V=t.columns.length===0,K=no(t.columns,W,t.deletedColumns);a=K.newFields;const ie=Date.now(),de=dc(Q,P,C.length,m),H=V?{columns:K.columns,...I,importResume:de,updatedAt:ie}:{columns:K.columns,...I.info?{info:I.info}:{},importResume:de,updatedAt:ie};await e.store.tables.patch(t.id,H);const te=new Set(W.map(pe=>pe.field)),q=t.columns.map(pe=>pe.field).filter(pe=>!te.has(pe)&&!ne.includes(pe)),Y=(t.deletedColumns??[]).filter(pe=>te.has(pe)),ae=e.store.rows(t.id),we=await ae.find(),{data:$e,droppedUserRows:Le}=Vf({oldRows:we.map(pe=>({data:pe.data})),freshRows:C,pks:ne,userAddedFields:q,deletedRemoteFields:Y});await ae.bulkRemove(we.map(pe=>pe.id)),await ae.bulkInsert($e.map(pe=>({id:Ee(),tableId:t.id,data:pe,updatedAt:ie}))),o={rowCount:$e.length,hasMore:E,truncated:T,error:Q,droppedUserRows:Le}}finally{It(t.id,!1)}const c=[];if(o.error)c.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const f=s<Number.MAX_SAFE_INTEGER?` at ${s.toLocaleString()}`:"";c.push(`capped${f}`)}a.length>0&&c.push(`${a.length} new column${a.length===1?"":"s"}`),o.droppedUserRows>0&&c.push(`${o.droppedUserRows} row${o.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${o.droppedUserRows===1?"it":"them"} could not be carried over`);const d=c.length?` — ${c.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${d}.`,{kind:o.error||o.hasMore||o.truncated||a.length>0||o.droppedUserRows>0?"warning":"success",title:"Refresh"}),a.length>0&&S0(t.id,r,a)}async function x0(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const i=await ho(e),s=fo(i.maxImportRows),o=St(n.origin.url),a=v=>e.backend.fetch(v),c=r.loadedRows,d=r.totalCount??null,f=d&&d>0?Math.min(d,s):0;It(t,!0,f>0?Math.min(1,c/f):void 0);let m,b;try{const v=await Si(a,o,{startUrl:r.nextUrl,maxRows:Math.max(0,s-c),pageSize:i.pageSize,onProgress:E=>{f>0&&It(t,!0,Math.min(1,(c+E)/f))}});m=v.rows.length;const $=Date.now();await e.store.rows(t).bulkInsert(v.rows.map(E=>({id:Ee(),tableId:t,data:E,updatedAt:$}))),b={error:v.error,nextUrl:v.nextUrl};const C=dc(v.error,v.nextUrl,c+m,d);await e.store.tables.patch(t,{importResume:C,updatedAt:$})}catch(v){const $=v instanceof Ge?v.message:v?.message??String(v);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${$}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{It(t,!1)}const y=c+m;b.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${m} rows (${y} total) — interrupted again (${b.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${m} rows (${y} total).`,{kind:"success",title:"Resume import"})}function S0(e,t,n){const r=n.join(", "),i=n.length!==1,s=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${i?"s":""}: ${r}. Review, reorder or hide ${i?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:s}}))}const C0=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:po,init:m0,meta:p0},Symbol.toStringTag,{value:"Module"})),hc=new Map;let vd=!1;function _0(){for(const e of hc.values())if(e===null||e.open)return!0;return!1}function cp(e,t=null){hc.set(e,t),T0()}function E0(e){hc.delete(e)}function Xt(e,t){const n=()=>{t.open&&cp(e,t)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>E0(e))}function T0(){vd||(vd=!0,window.addEventListener("beforeunload",e=>{_0()&&(e.preventDefault(),e.returnValue="")}))}var I0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,Ci=(e,t,n,r)=>{for(var i=r>1?void 0:r?A0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&I0(t,n,i),i};const R0="https://latest.datasette.io/ephemeral";let At=class extends xe{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),At.instance=this}disconnectedCallback(){super.disconnectedCallback(),At.instance===this&&(At.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Xt("datasette-connect",this.dialogEl)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return k`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
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
                placeholder="e.g. ${R0}"
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
              <button type="button" class="ghost test" @click=${()=>void this.runTest()}>Test connection</button>
              <span class="status ${this.statusKind}">${this.status}</span>
            </div>
            <p class="hint">
              Enter a single table (<code>…/db/table</code>), a whole database (<code>…/db</code>), or an instance root — you'll pick which tables to connect. Opens live tables backed by the remote
              Datasette: reads stay remote, and edits write back when the token grants them. The token is stored on this device only and is never synced or exported. A blank token opens tables
              read-only.
            </p>
          </div>
        </form>
      </dialog>
    `}};At.instance=null;At.styles=[mt,Ce`
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
    `];Ci([z()],At.prototype,"url",2);Ci([z()],At.prototype,"token",2);Ci([z()],At.prototype,"status",2);Ci([z()],At.prototype,"statusKind",2);At=Ci([Oe("datasette-connect-dialog")],At);class O0 extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function up(e){return`datasette:token:${e}`}function D0(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function L0(e,t,n){const r=e.source,i=r?.config??{},s={base:i.base,db:i.db,table:i.table,query:{}},o=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],a=r?.writable===!0,c=i.maxRows;let d=null;function f(){return c!=null?Promise.resolve(c):(d||(d=n?ho(n).then(I=>I.connectMaxRows):Promise.resolve(lc)),d)}const m=i.pollIntervalMs??0,b=(I,V)=>t.backend.fetch(I,V);async function y(){const V=(await t.settings.findOne(up(i.base)))?.value;return typeof V=="string"&&V.length>0?V:void 0}const v=async(I,V)=>pr(b,await y())(I,V);function $(I){return{id:Vv(I,o)??Ee(),tableId:e.id,data:I,updatedAt:Date.now()}}function C(I){if(!a)throw new O0(I)}function E(I){const V={};for(const[K,ie]of Object.entries(I))o.includes(K)||(V[K]=ie);return V}const T=new Set;let Q=[],P=!1,ne=null;function W(){return ne||(ne=(async()=>{try{const{rows:I}=await Si(v,s,{maxRows:await f()});Q=I.map($),P=!0;for(const V of T)V(Q);return Q}finally{ne=null}})(),ne)}return{async find(I){const V=P?Q:await W();return!I||Object.keys(I).length===0?V:V.filter(K=>D0(K,I))},async findOne(I){return(P?Q:await W()).find(K=>K.id===I)??null},async insert(I){C("insert");const[V]=await gd(v,s,[I.data]),K=$(V??I.data);return t.events.emit("row:created",{tableId:e.id,row:K}),W(),K},async bulkInsert(I){if(I.length===0)return[];C("insert");const V=await gd(v,s,I.map(ie=>ie.data)),K=(V.length?V:I.map(ie=>ie.data)).map($);return W(),K},async upsert(I){C("upsert");const[V]=await s0(v,s,[I.data]),K=$(V??I.data);return W(),K},async patch(I,V){C("update");const K=V.data,ie=E(K??{}),de=await i0(v,s,I,ie),H=$(de??{...K??{}});return t.events.emit("row:updated",{tableId:e.id,row:H,prev:H}),W(),H},async remove(I){C("delete"),await bd(v,s,I),t.events.emit("row:deleted",{tableId:e.id,rowId:I}),W()},async bulkRemove(I){if(I.length!==0){C("delete");for(const V of I)await bd(v,s,V);W()}},subscribe(I){T.add(I),P?I(Q):W();let V=null;return m>0&&(V=setInterval(()=>void W(),m)),()=>{T.delete(I),V&&clearInterval(V)}},async refresh(){await W()}}}const M0='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',P0={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function N0(e){ap(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:M0,order:10,description:"A live, editable table on any Datasette instance",connect:t=>z0(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>j0(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>L0(t,n,e)})}async function j0(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const i=await r.find();e.ui.dialogs.toast(`Reloaded ${i.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const i=r instanceof Ge?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function z0(e){const t=At.instance??F0(),n=(i,s)=>e.backend.fetch(i,s),r=await t.open({initialUrl:"https://datasette.io",async onTest(i,s){const o=St(i),a=await ep(n,o.base,{token:s||void 0});if(o.db&&o.table){await Xa(pr(n,s||void 0),o);const d=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${d} — table found, signed in, read-write.`:`Reachable${d} — table found, read-only (no token / not authenticated).`}if(!a.reachable)return`Unreachable: ${a.error??"no response"}`;const c=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${c} — signed in, read-write.`:`Reachable${c} — read-only (no token / not authenticated).`},async onConnect(i,s){const o=St(i);o.db&&o.table&&await Xa(pr(n,s||void 0),o)}});if(r)try{await dp(e,r.url,r.token)}catch(i){const s=i instanceof Ge?i.message:i?.message??String(i);await e.ui.dialogs.alert(s,"Connect Datasette failed")}}function F0(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function dp(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=St(t),s=(m,b)=>e.backend.fetch(m,b),o=pr(s,n||void 0),a=await ep(s,i.base,{token:n||void 0});n&&await e.store.settings.upsert({name:up(i.base),value:n});let c;try{c=await uc(o,i,"Connect")}catch(m){const b=m instanceof Ge?m.message:m?.message??String(m);throw new Error(`Couldn't read tables from ${js(i.base)}: ${b}`,{cause:m})}if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const d=[];for(const m of c){const b=await U0(e,r,i.base,m,a.writable,n);b!==null&&d.push({tableId:b,c:m})}if(d.length===0)return;const f=a.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${d.length} live table${d.length===1?"":"s"} from Datasette (${f}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:m,c:b}of d)B0(e,m,i.base,b,n)}async function U0(e,t,n,r,i,s){const o=(await e.store.tables.find()).filter(b=>b.workspaceId===t);let a=`${r.db}/${r.table}`,c=o.find(b=>{const y=b.source?.config;return b.source?.type==="datasette"&&y?.base===n&&y?.db===r.db&&y?.table===r.table});if(!c){const b=o.find(y=>y.name.toLowerCase()===a.toLowerCase());if(b){const y=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!y||y==="Skip")return null;y==="Overwrite"?c=b:a=fn(new Set(o.map(v=>v.name)),a)}}let d=r.pks??[];if(d.length===0){const b=pr((y,v)=>e.backend.fetch(y,v),s||void 0);try{d=await Xf(b,{base:n,db:r.db,table:r.table,query:{}})}catch{d=[]}}const f=c?.id??Ee(),m={...c??{},id:f,workspaceId:t,name:a,code:je(`${r.db}-${r.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:i,config:{base:n,db:r.db,table:r.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(m):await e.store.tables.insert(m),f}async function B0(e,t,n,r,i){const s={base:n,db:r.db,table:r.table,query:{}},o=pr((a,c)=>e.backend.fetch(a,c),i||void 0);try{let a=[],c=!1;try{const $=await co(o,s);a=$.columns,c=$.typed}catch{}const{rows:d}=await Si(o,s,{maxRows:50,pageSize:50}),f=a.length===0?lo(d):c?a:ac(a,d);if(f.length===0)return;const m=await e.store.tables.findOne(t);if(!m)return;const b=m.source?.config?.pks??[];let y=ao(f,b),v={};try{const $=await sc(o,s),C=oc($,y);y=C.columns,v=C.patch}catch{}v=cc(v,s.base,r.db,r.table),await e.store.tables.patch(t,{columns:y,...v,updatedAt:Date.now()})}catch{}}const q0=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:dp,init:N0,meta:P0},Symbol.toStringTag,{value:"Module"})),H0={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function V0(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:hp}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class On extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function K0(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const kd=5e4;function W0(e){return e.ok===!0&&Array.isArray(e.rows)}function G0(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const i of["next_url","nextUrl","next"]){const s=n[i];if(typeof s!="string")continue;const o=s.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const a=new URL(o,t);if(a.origin!==r.origin)continue;return a.toString()}catch{continue}if(i==="next"&&W0(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function Y0(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function hp(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",i=n.format==="json"?"json":"csv",s=new Set;let o=[],a=!1,c=null;function d(v){return v.map(($,C)=>({id:`url:${C}`,tableId:e.id,data:$,updatedAt:0}))}async function f(v){let $;try{$=await t.backend.fetch(v)}catch(C){throw new Error(`Could not reach ${r}: ${C?.message??String(C)}`,{cause:C})}if(!$.ok)throw new Error(`Could not load ${r}: HTTP ${$.status} ${$.statusText}`);try{return await Kh($)}catch(C){throw new Error(`Could not read response from ${r}: ${C?.message??String(C)}`,{cause:C})}}async function m(v){const $=Dl(v);let C=await f($);if(Hh(C)){const E=Vh($);E&&(C=await f(E))}try{if(i==="json"){const E=JSON.parse(C);return{records:Y0(E),nextUrl:G0(E,$)}}return{records:$r(C).rows,nextUrl:null}}catch(E){throw new Error(`Could not parse ${i.toUpperCase()} from ${r}: ${E?.message??String(E)}`,{cause:E})}}async function b(){if(!r)throw new Error("This reference table has no URL configured.");const v=[];let $=r;const C=new Set;for(;$&&v.length<kd&&!C.has($);){C.add($);const E=await m($);v.push(...E.records),$=E.records.length>0?E.nextUrl:null}return v.slice(0,kd)}function y(){return c||(c=(async()=>{try{const v=await b();o=d(v),a=!0;for(const $ of s)$(o);return o}finally{c=null}})(),c)}return{async find(v){const $=a?o:await y();return!v||Object.keys(v).length===0?$:$.filter(C=>K0(C,v))},async findOne(v){return(a?o:await y()).find(C=>C.id===v)??null},async insert(){throw new On("insert")},async bulkInsert(){throw new On("insert")},async upsert(){throw new On("upsert")},async patch(){throw new On("update")},async remove(){throw new On("delete")},async bulkRemove(){throw new On("delete")},subscribe(v){return s.add(v),a?v(o):y(),()=>{s.delete(v)}},async refresh(){a=!1,o=[],await y()}}}const Q0=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:On,createUrlCollection:hp,init:V0,meta:H0},Symbol.toStringTag,{value:"Module"}));function Ye(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function $d(e){return`'${e.replace(/'/g,"''")}'`}function xd(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${Ye(n.from.alias)}.${Ye(n.from.field)}`,computed:!1}:null}function J0(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",i=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,s=[];for(const y of e.columns)y.from.kind==="source"?s.push(`  ${Ye(y.from.alias)}.${Ye(y.from.field)} AS ${Ye(y.field)}`):s.push(`  NULL AS ${Ye(y.field)} -- computed in-app by a script; no SQL equivalent`);s.length===0&&s.push("  *");const a=[`SELECT${i!=null&&r==="top"?` TOP ${i}`:""}`,s.join(`,
`)],c=t.tableNames[n.alias]??n.tableName;a.push(`FROM ${Ye(c)} AS ${Ye(n.alias)}`);for(const y of e.sources.slice(1)){const v=t.tableNames[y.alias]??y.tableName;if(!y.join){a.push(`CROSS JOIN ${Ye(v)} AS ${Ye(y.alias)}`);continue}const $=y.join.type==="inner"?"INNER JOIN":"LEFT JOIN",C=y.join.on.map(E=>`${Ye(y.alias)}.${Ye(E.field)} = ${Ye(E.eqAlias)}.${Ye(E.eqField)}`).join(" AND ");a.push(`${$} ${Ye(v)} AS ${Ye(y.alias)} ON ${C||"1 = 1"}`)}const d=[],f=[];for(const[y,v]of Object.entries(e.filters??{})){if(!v)continue;const $=xd(e,y);if($){if($.computed){f.push(`-- filter on ${Ye(y)} (${$d(v)}) applies to a computed column; enforced in-app only`);continue}d.push(`LOWER(${$.expr}) LIKE ${$d(`%${v.toLowerCase()}%`)}`)}}d.length>0&&a.push(`WHERE ${d.join(`
  AND `)}`);const m=(t.orderBy??[]).map(y=>{const v=xd(e,y.field);return!v||v.computed?null:`${v.expr} ${y.asc?"ASC":"DESC"}`}).filter(y=>y!==null);m.length>0&&a.push(`ORDER BY ${m.join(", ")}`);const b=i==null?"":r==="limit"?`
LIMIT ${i}`:r==="fetch"?`
FETCH FIRST ${i} ROWS ONLY`:"";return`${a.join(`
`)}${b};
${f.length>0?`${f.join(`
`)}
`:""}`}const X0={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function Z0(){}async function fp(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(a=>a.workspaceId===t),r=n.filter(a=>a.source?.type!=="projection"),i=n.filter(a=>a.source?.type==="projection"),s=ek(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${i.length>0?` (+ ${i.length} projection${i.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const a of r){const c=await e.store.rows(a.id).find();o.push(gp(a,c),"")}if(o.push("COMMIT;",""),i.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const a of i)o.push(`-- projection: ${a.name}`,fc(a,s)??"","")}return o.join(`
`)}function ek(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,mr(n.code||n.name));return n=>t.get(n)??mr(je(n))}function pp(e,t){const n=mp(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",gp(e,t),"","COMMIT;",""].join(`
`)}function mp(e,t){const n=fc(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function fc(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>mr(je(o))),i={};for(const o of n.sources)i[o.alias]=r(o.tableName);const s=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return J0(n,{tableNames:i,limitStyle:"limit",...s?{orderBy:s}:{}})}function gp(e,t){const n=mr(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(s=>`  ${tk(s)}`)],i=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(a=>a.field)].map(a=>`"${mr(a)}"`).join(", ");for(const a of t){const c=[Sd(a.id),...e.columns.map(d=>Sd(a.data[d.field],d.type))];i.push(`INSERT INTO "${n}" (${o}) VALUES (${c.join(", ")});`)}}return i.join(`
`)}function tk(e){const t=[`"${mr(e.field)}"`,nk(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function nk(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Sd(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=rk(e);return n===null?"NULL":as(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?as(e.toISOString()):as(typeof e=="string"?e:JSON.stringify(e))}function rk(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Cd(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?Cd(r):null}return null}function Cd(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function as(e){return`'${e.replace(/'/g,"''")}'`}function mr(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const ik=Object.freeze(Object.defineProperty({__proto__:null,init:Z0,meta:X0,projectionSelectBody:fc,projectionSelectFor:mp,serializeTableAsSql:pp,serializeWorkspaceAsSql:fp},Symbol.toStringTag,{value:"Module"}));function mo(e){return/(?:Z|[+-]\d{2}:?\d{2})$/i.test(e.trim())}function go(e){if(typeof e!="string"&&typeof e!="number")return null;const t=String(e).trim();return t===""?null:t}const bo=/^(\d{4})-(\d{2})-(\d{2})$/,wo=/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?/;function pc(e,t){const n=go(e);if(n===null)return"";const r=bo.exec(n);if(r)return _a(new Date(Number(r[1]),Number(r[2])-1,Number(r[3])),t);const i=wo.exec(n);if(i&&!mo(n))return _a(new Date(Number(i[1]),Number(i[2])-1,Number(i[3])),t);const s=new Date(n);return Number.isNaN(s.getTime())?n:_a(s,t)}function bp(e,t){const n=go(e);if(n===null)return"";const r=wo.exec(n);if(r&&!mo(n)){const s=new Date(Number(r[1]),Number(r[2])-1,Number(r[3]),Number(r[4]),Number(r[5]),Number(r[6]??0));return _d(s,t)}if(bo.test(n))return pc(n,t);const i=new Date(n);return Number.isNaN(i.getTime())?n:_d(i,t)}function ti(e){const t=go(e);if(t===null)return"";if(bo.test(t))return t;const n=wo.exec(t);if(n&&!mo(t))return`${n[1]}-${n[2]}-${n[3]}`;const r=new Date(t);return Number.isNaN(r.getTime())?"":`${r.getFullYear()}-${rr(r.getMonth()+1)}-${rr(r.getDate())}`}function ni(e){const t=go(e);if(t===null)return"";const n=wo.exec(t);if(n&&!mo(t))return`${n[1]}-${n[2]}-${n[3]}T${n[4]}:${n[5]}`;if(bo.test(t))return`${t}T00:00`;const r=new Date(t);return Number.isNaN(r.getTime())?"":`${r.getFullYear()}-${rr(r.getMonth()+1)}-${rr(r.getDate())}T${rr(r.getHours())}:${rr(r.getMinutes())}`}function rr(e){return String(e).padStart(2,"0")}function _a(e,t){return e.toLocaleDateString(t)}function _d(e,t){return`${e.toLocaleDateString(t)} ${e.toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}`}function wp(e,t,n){return e==="date"?pc(t,n):e==="datetime"?bp(t,n):null}const mc=/\$((?:input|filter|raw)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function Ed(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(mc))t.add(r[2]);return[...t]}function sk(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(mc))r[1]?.startsWith("filter")&&t.add(r[2]);return[...t]}const yo=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Pt=e=>yo(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ok(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function ak(e,t,n,r,i){const s=r?.type??"string",o=yo(r?.label||e),a=`class="eda-input" data-eda-row="${Pt(n)}" data-eda-field="${Pt(e)}" data-eda-type="${Pt(s)}"`,c=i?" disabled":"";let d;if(s==="boolean")d=`<input type="checkbox" ${a}${ok(t)?" checked":""}${c} />`;else{const f=s==="number"?"number":"text",m=t==null?"":Pt(String(t));d=`<input type="${f}" ${a} value="${m}"${c} />`}return`<label class="eda-input-field" title="${o}">${d}<span class="eda-input-label">${o}</span></label>`}function Td(e,t){const n=Pt(e),r=Pt(t);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${n}" data-eda-filter-value="${r}" title="Filter by ${n}: ${r}">${yo(t)}</button>`}function lk(e,t){return t?.type==="array"||Array.isArray(e)?ft(e):null}function ck(e,t,n){const r=lk(t,n);return r?r.map(i=>Td(e,i)).join(""):t==null||t===""?"":Td(e,String(t))}function uk(e,t){const n=xr(e,t.data);return n.ok?n.value==null?"":String(n.value):`<span class="eda-script-error" title="${Pt(n.message)}">⚠ ${yo(n.label)}</span>`}const yp="eda-cell";function dk(e,t,n){if(n?.trim()){const r=xr(n,e.data);return r.ok?r.value:`⚠ ${r.label}`}return e.data[t]}function hk(e,t){const n=e.lastIndexOf("<",t);return n>=0&&n>e.lastIndexOf(">",t)}function fk(e,t,n,r){return`<span class="${yp}" data-eda-row="${Pt(e)}" data-eda-field="${Pt(t)}" data-eda-token="${Pt(n)}" data-eda-tag="${Pt(r)}"></span>`}function pk(e,t,n,r={}){return e.replace(mc,(i,s,o,a,c)=>{const d=n[o],f=r.scripts?.[o];if(!s&&f?.trim())return uk(f,t);if(!d)return"";const m=t.data[d],b=r.columns?.get(d);if(!s||s.startsWith("raw")){const v=s?void 0:mk(b,r.renderers);return v&&r.raw?.[o]!==!0&&!hk(c,a)?fk(t.id,d,o,v):m==null||m===""?"":(s?null:wp(b?.type,m))??String(m)}if(s.startsWith("filter"))return ck(d,m,b);const y=r.readonly===!0||!!b?.script?.trim();return ak(d,m,t.id,b,y)})}function mk(e,t){const n=e?.renderer;return n?t?.get(n):void 0}function Id(e){return e==null||e===""}function gk(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const i=xr(r.script,e.data);n??={...e.data},n[r.field]=i.ok?i.value:`⚠ ${i.label}`}return n?{...e,data:n}:e}function Ad(e,t){return t.some(n=>n.script?.trim())?e.map(n=>gk(n,t)):e}function Rd(e,t,n){const r=Object.entries(t).filter(([,s])=>s!=null&&String(s).trim()!=="");if(r.length===0)return e;const i=new Map((n??[]).map(s=>[s.field,s.type]));return e.filter(s=>r.every(([o,a])=>ci(s.data[o],a,{type:i.get(o)})))}function vo(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function bk(e,t){const n=Hn(e??"");return n.some(r=>vo(r,t))||n.push({term:t,negate:!1,exact:!0}),dn(n)}function wk(e,t){const n=Hn(e??"").filter(r=>!vo(r,t));return dn(n)}function vp(e,t){return e.exact===!0&&e.negate===!0&&e.term.toLowerCase()===t.toLowerCase()}function yk(e,t){const n=Hn(e??"");return n.some(r=>vo(r,t))?"on":n.some(r=>vp(r,t))?"not":"off"}function vk(e,t){const n=yk(e,t),r=Hn(e??"").filter(i=>!vo(i,t)&&!vp(i,t));return dn(n==="off"?[...r,{term:t,negate:!1,exact:!0}]:n==="on"?[...r,{term:t,negate:!0,exact:!0}]:r)}function kk(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((i,s)=>{const o=i.data[t],a=s.data[t],c=Id(o),d=Id(a);if(c||d)return c===d?0:c?1:-1;const f=Number(o),m=Number(a);return!Number.isNaN(f)&&!Number.isNaN(m)?(f-m)*r:String(o).localeCompare(String(a),void 0,{numeric:!0,sensitivity:"base"})*r})}function Za(e,t,n){const r=Rd(e,t.filters??{},n),i=Rd(r,t.pillFilters??{},n);return kk(i,t.sortColumn,t.sortAsc??!0)}function $k(e){return!!e&&e.trim().length>0}function kp(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function xk(e,t){return t==="raw"||t==="structure"?e:{...e,columns:kp(e,t)}}function $p(e,t,n){return n==="structure"?[]:n==="raw"?t:Za(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc},e.columns)}function gc(e,t){const n=e.columns.map(i=>i.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(i=>{const s={};for(const o of n)s[o]=i.data[o];return s})}}const Sk={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Ck(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:i}=await Ie(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>hr);return{AnchoredMenu:a}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(s,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const a=await ko(t);await t.backend.saveFile(`workspace-${r}.db.json`,a,"application/json")}else if(o==="sql"){const a=await fp(t);await t.backend.saveFile(`workspace-${r}.sql`,a,"application/sql")}}catch(a){t.ui.dialogs.toast(`Export failed: ${a.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Ie(async()=>{const{AnchoredMenu:d}=await Promise.resolve().then(()=>hr);return{AnchoredMenu:d}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!s)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const a=await t.ui.dialogs.choice(`Export "${o.name}" as ${s.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!a)return;const c=a==="Visible Data"?"visible":a==="Raw Data"?"raw":"structure";try{const d=await t.store.rows(o.id).find(),f=xk(o,c),m=$p(o,d,c),b=je(o.code||o.name||"table"),y=c!=="structure"&&o.source!=null&&d.length===0;if(s==="csv")y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${b}.csv`,Fl(f,m),"text/csv");else if(s==="json"){const v=JSON.stringify(gc(f,m),null,2);await t.backend.saveFile(`${b}.table.json`,v,"application/json")}else s==="sql"&&(y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${b}.sql`,pp(f,m),"application/sql"))}catch(d){t.ui.dialogs.toast(`Export failed: ${d.message}`,{kind:"error",title:"Export"})}}})}async function ko(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),i=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:i};for(const o of n){const a=await e.store.rows(o.id).find();s.tables.push({name:o.name,columns:o.columns,rows:a.map(c=>c.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(s,null,2)}const _k=Object.freeze(Object.defineProperty({__proto__:null,init:Ck,meta:Sk,serializeWorkspace:ko},Symbol.toStringTag,{value:"Module"})),Ek={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Tk="gist:",Od='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Ik(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:Od,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Ie(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>hr);return{AnchoredMenu:o}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(s)try{if(s==="push"||s==="pull"){const o=await r.open(i,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const a=o;s==="push"?await Pk(t,a):await _p(t,a)}else s==="share"?await Dk(t):s==="view"&&await Lk(t)}catch(o){t.ui.dialogs.toast(`Gist ${s} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:Od,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Ie(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>hr);return{AnchoredMenu:o}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(s)try{s==="push"?await jk(t,n.tableId):s==="pull"?await zk(t,n.tableId):s==="view"&&await Fk(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${s} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function Ak(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Rk(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Sp(e,r),await _p(e))}async function xp(e){const t=e.workspaceId();return`${Tk}${t??"default"}`}async function _i(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const s=(await e.store.settings.findOne(await xp(e)))?.value;if(s?.user&&s?.token){const o={user:s.user,gistId:s.gistId??"",token:s.token};return await Sp(e,o),o}return null}async function Sp(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await xp(e),value:t})}function Rk(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const i=n.slice(0,r).trim(),s=n.slice(r+1).trim();i&&(t[i]=s)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function bc(e){const t=await _i(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function Ok(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Dk(e){const t=await _i(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(Ok(t)))}`,{GistShareDialog:i}=await Ie(async()=>{const{GistShareDialog:s}=await import("./gist-share-dialog-BwZ63jYW.js");return{GistShareDialog:s}},[]);await i.open(r)}async function Lk(e){const t=await _i(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}function Mk(e){return e.endsWith(".table.json")&&!e.startsWith("_easydb")}function Cp(e,t){const n=new Set(t);return[...e].filter(r=>Mk(r)&&!n.has(r)).sort()}async function Pk(e,t="all"){const n=await bc(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=t!=="settings",s=t!=="data",o=(await e.store.tables.find()).filter(T=>T.workspaceId===r);if(i&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const a=1e8,c=1e7,d={},f=[],m=[];if(i)for(const T of o){const Q=T.source!=null?[]:await e.store.rows(T.id).find(),P=JSON.stringify(gc(T,Q),null,2),ne=`${T.name} (${(P.length/1e6).toFixed(2)} MB)`;P.length>a?f.push(ne):P.length>c&&m.push(ne),d[`${je(T.name)}.table.json`]={content:P}}if(f.length>0||m.length>0){const T=[];if(f.length>0&&T.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${f.join(`
`)}`),m.length>0&&T.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${m.join(`
`)}`),!await e.ui.dialogs.confirm(`${T.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(s){const T=(await e.store.viewTemplates.find()).filter(I=>I.workspaceId===r),Q=(await e.store.viewInstances.find()).filter(I=>I.workspaceId===r),P=(await e.store.settings.find()).map(I=>({name:I.name,value:I.value})),{kept:ne,withheld:W}=lw(P);W.length>0&&e.ui.dialogs.toast(`Not pushed: ${W.join(", ")} — a secret is stored as its own value. Move it into the secrets store (Settings → General) and reference it with \${secret:name}.`,{kind:"warning",title:"Gist sync"}),d["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:T,viewInstances:Q,settings:ne},null,2)}}const b={...d};let y=[];if(i&&n.gistId){y=await Nk(e,n,Object.keys(d));for(const T of y)b[T]=null}let v;if(n.gistId){const T=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:b,description:`easyDBAccess workspace: ${r}`})});if(!T.ok)throw new Error(await fi(T));v=await T.json()}else{const T=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:d})});if(!T.ok)throw new Error(await fi(T));v=await T.json(),n.gistId=v.id,await e.settings.set("gist-sync","gist_id",v.id)}const $=v.html_url??`https://gist.github.com/${n.user}/${v.id}`,C=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`,E=y.length>0?`  Removed ${y.length} file${y.length===1?"":"s"}.`:"";e.ui.dialogs.toast(`Pushed ${C}.${E}  ${$}`,{kind:"success",title:"Gist sync"})}async function _p(e,t="all"){const n=t!=="settings",r=t!=="data",i=await bc(e);if(!i||!i.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const s=e.workspaceId();if(!s)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${i.gistId}`,{headers:{Authorization:`Bearer ${i.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await fi(o));const a=await o.json(),c=Object.entries(a.files).filter(([T])=>T.endsWith(".table.json")&&!T.startsWith("_easydb"));if(n&&c.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const d=(await e.store.tables.find()).filter(T=>T.workspaceId===s),f=new Map(d.map(T=>[T.name.toLowerCase(),T]));let m=0;const b=[],y=new Map;if(n){const{TopProgress:T}=await Ie(async()=>{const{TopProgress:P}=await import("./top-progress-DhbUi6Q5.js");return{TopProgress:P}},[]),Q=T.begin("Pulling from gist…");try{for(const[P,[ne,W]]of c.entries())try{const I=await zs(W),V=JSON.parse(I);if(!V.name||!Array.isArray(V.columns))throw new Error("unexpected file shape (missing name/columns)");let K;const ie=f.get(V.name.toLowerCase());if(ie){if(K=await e.store.tables.patch(ie.id,{title:V.title,columns:V.columns,...tl(V),updatedAt:Date.now()}),K.source==null){const de=e.store.rows(ie.id),H=await de.find();await de.bulkRemove(H.map(te=>te.id))}}else K=await e.store.tables.insert({id:Ee(),workspaceId:s,name:V.name,title:V.title,code:je(V.name),columns:V.columns,view:V.view??"table",...tl(V),updatedAt:Date.now()});if(K.source==null){const de=(V.rows??[]).map(H=>({id:Ee(),tableId:K.id,data:H,updatedAt:Date.now()}));await e.store.rows(K.id).bulkInsert(de)}y.set(V.name,K.id),m++}catch(I){b.push({file:ne,error:I.message})}finally{Q.fraction((P+1)/c.length)}}finally{Q.done()}}let v=0,$="",C=null;const E=r?a.files["_easydb.workspace.json"]:void 0;if(E)try{const T=await zs(E),Q=JSON.parse(T),P=Q.viewTemplates??[],ne=Q.viewInstances??[],W=Q.settings??[];C=new Set(ne.map(V=>V.id));const I=await hf(e.store.viewTemplates,s,P);for(const V of ne){let K;if(V.tableName&&(K=y.get(V.tableName)??f.get(V.tableName)?.id),K??=V.tableId,!K)continue;const ie=I.get(V.templateId)??V.templateId;await e.store.viewInstances.upsert({...V,workspaceId:s,tableId:K,templateId:ie}),v++}for(const V of W)await e.store.settings.upsert(V)}catch(T){$=`Workspace metadata import failed: ${T.message}`}if(b.length>0){const T=b.map(Q=>`• ${Q.file}: ${Q.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${m} of ${c.length} tables. ${b.length} failed:
${T}${$?`
${$}`:""}`,{kind:"warning",title:"Gist sync"})}else{const T=v>0?` (+${v} views)`:"",Q=t==="settings"?`Pulled settings${T}.`:`Pulled ${m} table${m===1?"":"s"}.${T}`;e.ui.dialogs.toast(Q,{kind:"success",title:"Gist sync"}),$&&e.ui.dialogs.toast($,{kind:"warning",title:"Gist sync"})}b.length===0&&await Ep(e,s,{tableNames:n?new Set([...y.keys()].map(T=>T.toLowerCase())):null,viewInstanceIds:C}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Nk(e,t,n){let r;try{const o=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)return[];const a=await o.json();r=Object.keys(a.files??{})}catch{return[]}const i=Cp(r,n);return i.length===0?[]:await e.ui.dialogs.confirm(`The gist has these table files that this workspace no longer has:

${el(i)}

Delete them from the gist, so it matches this workspace? Keep them if another device pushed them and you have not pulled yet.`,"Delete table files missing from this workspace?")?i:[]}function el(e,t=8){const n=e.slice(0,t).map(i=>`• ${i}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function Ep(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(c=>c.workspaceId===t&&!n.tableNames.has(c.name.toLowerCase())):[],i=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(c=>c.workspaceId===t&&!n.viewInstanceIds.has(c.id)):[];if(r.length===0&&i.length===0)return;const s=[];if(r.length>0&&s.push(`${r.length} table${r.length===1?"":"s"}:
`+el(r.map(c=>c.name))),i.length>0&&s.push(`${i.length} view${i.length===1?"":"s"}:
`+el(i.map(c=>c.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${s.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const c of i)await e.store.viewInstances.remove(c.id);const{deleteTable:a}=await Ie(async()=>{const{deleteTable:c}=await Promise.resolve().then(()=>Sc);return{deleteTable:c}},void 0);for(const c of r)await a(c.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${i.length} view${i.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function jk(e,t){const n=await bc(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=r.source!=null?[]:await e.store.rows(t).find(),s=JSON.stringify(gc(r,i),null,2),o={[`${je(r.name)}.table.json`]:{content:s}},a=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!a.ok)throw new Error(await fi(a));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function zk(e,t){const n=await _i(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`${je(r.name)}.table.json`,s=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await fi(s));const a=(await s.json()).files[i];if(!a){await e.ui.dialogs.alert(`No file "${i}" in the gist for this table.`,"Gist sync");return}const c=await zs(a),d=JSON.parse(c);if(!d.name||!Array.isArray(d.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:d.title,columns:d.columns,...tl(d),updatedAt:Date.now()})).source==null){const m=e.store.rows(t),b=await m.find();await m.bulkRemove(b.map(v=>v.id));const y=(d.rows??[]).map(v=>({id:Ee(),tableId:t,data:v,updatedAt:Date.now()}));await m.bulkInsert(y)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Fk(e,t){const n=await _i(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`file-${je(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${i}`,"_blank","noopener")}function tl(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function zs(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function fi(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Uk=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:zs,init:Ik,load:Ak,meta:Ek,offerPrune:Ep,staleTableFiles:Cp},Symbol.toStringTag,{value:"Module"})),Tp="server-sync:url";function Ip(e){return`server-sync:etag:${e}`}async function Ap(e){const n=(await e.store.settings.findOne(Tp))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function Bk(e,t){await e.store.settings.upsert({name:Tp,value:t.replace(/\/+$/,"")})}async function Rp(e,t){const r=(await e.store.settings.findOne(Ip(t)))?.value;return typeof r=="string"?r:null}async function Un(e,t,n){await e.store.settings.upsert({name:Ip(t),value:n})}function $o(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function Dd(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Op(e,t,n){const r=vi(n,t),i=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of i){const a=e.store.rows(o.id),c=await a.find();await a.bulkRemove(c.map(d=>d.id)),await e.store.tables.remove(o.id)}let s=0;for(const o of r){const a=Ee(),c=await e.store.tables.insert({id:a,workspaceId:t,name:o.name,code:je(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),d=o.rows.map(f=>({id:Ee(),tableId:c.id,data:f,updatedAt:Date.now()}));await e.store.rows(c.id).bulkInsert(d),s++}return s}const qk={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Hk(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Ie(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>hr);return{AnchoredMenu:o}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(s)try{s==="push"?await Vk(t):s==="pull"&&await Kk(t)}catch(o){t.ui.dialogs.toast(`${s==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function Vk(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Dp(e);if(!n)return;const r=await ko(e),i=await Rp(e,t),s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:s,body:r});if(o.status===412){const c=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){c.currentEtag&&await Un(e,t,c.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await Lp(o));const a=$o(o.headers.get("ETag"));a&&await Un(e,t,a),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function Kk(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Dp(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const i=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(i.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!i.ok)throw new Error(await Lp(i));const s=$o(i.headers.get("ETag")),o=await i.json(),a=await Op(e,t,o);s&&await Un(e,t,s),e.ui.dialogs.toast(`Pulled ${a} table${a===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function Dp(e){const t=await Ap(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await Bk(e,n),n.replace(/\/+$/,"")}async function Lp(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Wk=Object.freeze(Object.defineProperty({__proto__:null,init:Hk,meta:qk},Symbol.toStringTag,{value:"Module"})),Gk={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Yk(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Qk=Object.freeze(Object.defineProperty({__proto__:null,init:Yk,meta:Gk},Symbol.toStringTag,{value:"Module"})),Mp="#dc2626",Pp="cell-invalid",Jk=`border-color:${Mp};background:#fef2f2`;function wc(e,t){e.classList.add(Pp),e.style.border=`1px solid ${Mp}`,e.style.background="#fef2f2",t&&(e.title=t)}function Xk(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return Np(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";case"array":return ft(e).length===0?"empty":"ok";default:return"ok"}}const Zk=/^\s*(true|1)\s*$/i,e$=/^\s*(false|0)\s*$/i;function Np(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":Zk.test(e)?"true":e$.test(e)?"false":"invalid":"invalid"}function xo(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function So(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function Co(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const t$={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function n$(e){customElements.get("cell-date")||customElements.define("cell-date",r$),e.ui.registerCellRenderer("date","cell-date")}class r$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Co({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(i$(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",wc(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:So(n,this.pencil()));return}if(this._readonly){this.textContent=pc(this._value);return}const t=document.createElement("input");t.type="date",t.value=ti(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return xo(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function i$(e){return e==null||typeof e=="string"&&e.trim()===""?!1:ti(e)===""}const s$=Object.freeze(Object.defineProperty({__proto__:null,init:n$,meta:t$},Symbol.toStringTag,{value:"Module"})),o$={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function a$(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",l$),e.ui.registerCellRenderer("datetime","cell-datetime")}class l$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Co({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(c$(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",wc(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:So(n,this.pencil()));return}if(this._readonly){this.textContent=bp(this._value);return}const t=document.createElement("input");t.type="datetime-local",t.value=ni(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return xo(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function c$(e){return e==null||typeof e=="string"&&e.trim()===""?!1:ni(e)===""}const u$=Object.freeze(Object.defineProperty({__proto__:null,init:a$,meta:o$},Symbol.toStringTag,{value:"Module"})),d$={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function h$(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",f$),e.ui.registerCellRenderer("boolean","cell-boolean")}class f$ extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const i=Co({value:this._value==null?"":String(this._value),onCommit:s=>this.commit(s),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:s=>this._editor===s});this.append(i),this._editor=i;return}const t=Np(this._value);if(t==="invalid"){const i=document.createElement("span");i.textContent=String(this._value),i.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",wc(i,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?i:So(i,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return xo(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const p$=Object.freeze(Object.defineProperty({__proto__:null,init:h$,meta:d$},Symbol.toStringTag,{value:"Module"})),m$={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function g$(e){customElements.get("cell-color")||customElements.define("cell-color",b$),e.ui.registerCellRenderer("color","cell-color")}class b$ extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const w$=Object.freeze(Object.defineProperty({__proto__:null,init:g$,meta:m$},Symbol.toStringTag,{value:"Module"})),y$=[{bytes:[137,80,78,71,13,10,26,10],type:"image/png"},{bytes:[71,73,70,56],type:"image/gif"},{bytes:[255,216,255],type:"image/jpeg"},{bytes:[66,77],type:"image/bmp"}],nl=16;function v$(e){const t=(n,r)=>r.split("").every((i,s)=>e[n+s]===i.charCodeAt(0));return e.length>=12&&t(0,"RIFF")&&t(8,"WEBP")}function xs(e){for(const{bytes:t,type:n}of y$)if(t.every((r,i)=>e[i]===r))return n;return v$(e)?"image/webp":null}function jp(e){if(e==null)return null;const t=$$(e);if(t){const s=Array.prototype.slice.call(t,0,nl),o=xs(s);return o?`data:${o};base64,${Up(t)}`:null}if(typeof e!="string")return null;const n=e.trim();if(n==="")return null;if(n.startsWith("data:"))return S$(n);if(/^(https?:)?\/\//i.test(n)||n.startsWith("/")&&/\.(png|jpe?g|gif|webp|bmp|svg)(\?|#|$)/i.test(n))return n;const r=x$(n);if(r){const s=Fp(r.slice(0,nl*2)),o=xs(s);return o?`data:${o};base64,${C$(r)}`:null}const i=zp(n);if(i){const s=xs(i);return s?`data:${s};base64,${n}`:null}return null}function k$(e){return jp(e)!==null}function $$(e){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.length>0&&e.every(t=>typeof t=="number")?e:null;if(typeof e=="object"&&e!==null){const t=e;if(typeof t[0]!="number")return null;const n=[];for(let r=0;typeof t[String(r)]=="number";r++)n.push(t[String(r)]);return n}return null}function x$(e){const t=/^[xX]\s*(['"])([0-9a-fA-F]*)\1$/.exec(e);return t?.[2]?t[2]:e.length>=8&&e.length%2===0&&/^[0-9a-fA-F]+$/.test(e)?e:null}function zp(e){if(e.length<8||!/^[A-Za-z0-9+/]+={0,2}$/.test(e))return null;try{const t=e.slice(0,Math.ceil(nl*4/3));return[...atob(t.slice(0,t.length-t.length%4))].map(r=>r.charCodeAt(0))}catch{return null}}function S$(e){const t=/^data:([^;,]*)(;base64)?,([\s\S]*)$/.exec(e);if(!t)return null;if((t[1]??"").toLowerCase().startsWith("image/"))return e;const r=t[3]??"";if(!t[2])return null;const i=zp(r),s=i&&xs(i);return s?`data:${s};base64,${r}`:null}function Fp(e){const t=[];for(let n=0;n+1<e.length;n+=2)t.push(parseInt(e.slice(n,n+2),16));return t}function Up(e){let n="";for(let r=0;r<e.length;r+=32768){const i=Array.prototype.slice.call(e,r,r+32768);n+=String.fromCharCode(...i)}return btoa(n)}function C$(e){return Up(Fp(e))}const _$={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function E$(e){customElements.get("cell-image")||customElements.define("cell-image",T$),e.ui.registerCellRenderer("image","cell-image")}class T$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const i=Co({value:typeof this._value=="string"?this._value:"",onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("mousedown",o=>o.preventDefault()),s.addEventListener("click",()=>this.pickFile()),r.append(i,s),this.append(r),this._editor=i;return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0";const n=jp(this._value);if(n){const r=document.createElement("img");r.src=n,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("click",()=>this.pickFile()),t.append(i)}}this.append(this._readonly?t:So(t,this.pencil()))}pencil(){return xo(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const I$=Object.freeze(Object.defineProperty({__proto__:null,init:E$,meta:_$},Symbol.toStringTag,{value:"Module"})),Bp=200,qp=100;function A$(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Bp||e.h<qp?null:{...e}}function Fs(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Ld=640;function _o(){return typeof window>"u"?!1:typeof window.matchMedia=="function"?window.matchMedia(`(max-width: ${Ld}px)`).matches:window.innerWidth<=Ld}const R$=["n","s","e","w","ne","nw","se","sw"];function O$(e,t,n,r){const i=r>0?r:1;return{...e,x:e.x+t/i,y:e.y+n/i}}function D$(e,t,n,r,i,s,o){const a=i>0?i:1,c=n/a,d=r/a;let{x:f,y:m,w:b,h:y}=e;return t.includes("e")&&(b=Math.max(s,e.w+c)),t.includes("s")&&(y=Math.max(o,e.h+d)),t.includes("w")&&(b=Math.max(s,e.w-c),f=e.x+(e.w-b)),t.includes("n")&&(y=Math.max(o,e.h-d),m=e.y+(e.h-y)),{x:f,y:m,w:b,h:y}}function L$(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:e?.smallified?{status:"smallified",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function Md(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function M$(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized",smallified:e.status==="smallified"}}const P$="#01579b",N$="input, textarea, select, button, a, .jsPanel-controlbar";function Pd(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(N$))return!0;return!1}const j$={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let Ea=100;function Nd(){let e=Ea;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return Ea=e+1,Ea}function z$(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(!(n===e||n.style.display==="none")&&Number(n.style.zIndex)>t)return!1;return!0}const rl=new Set,pi=new Set;function F$(){let e=null;for(const t of pi)t.style.display!=="none"&&(!e||Number(t.style.zIndex)>Number(e.style.zIndex))&&(e=t);return e}const Hp=e=>{if(e.key!=="Escape"||e.defaultPrevented)return;const t=F$();t&&(e.preventDefault(),t.close())};function U$(e){pi.size===0&&document.addEventListener("keydown",Hp),pi.add(e)}function B$(e){pi.delete(e)&&pi.size===0&&document.removeEventListener("keydown",Hp)}function q$(){return[...rl].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function In(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=j$[e]??"",r.addEventListener("click",i=>{i.stopPropagation(),n()}),r}function Eo(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id;let n=e.color??P$;t.style.setProperty("--eda-panel-color",n);const r=document.createElement("div");r.className="jsPanel-hdr";const i=document.createElement("div");i.className="jsPanel-headerbar";const s=document.createElement("div");s.className="jsPanel-headerlogo",s.innerHTML=e.logo??"";const o=document.createElement("div");o.className="jsPanel-titlebar",o.tabIndex=-1,o.style.outline="none",o.addEventListener("pointerdown",()=>o.focus());const a=document.createElement("span");a.className="jsPanel-title",a.textContent=e.title,o.append(a);const c=document.createElement("div");c.className="jsPanel-controlbar",c.append(In("smallify","Collapse",()=>H("smallify")),In("minimize","Minimize",()=>H("minimize")),In("maximize","Maximize",()=>t.maximize()),In("normalize","Restore",()=>H("normalize")),In("close","Close",()=>t.close())),i.append(s,o,c),r.append(i);const d=document.createElement("div");d.className="jsPanel-content",d.append(e.content);const f=document.createElement("div");f.className="jsPanel-ftr",e.footerToolbar&&(f.classList.add("active"),f.append(e.footerToolbar)),t.append(r,d,f);const m=[];for(const q of R$){const Y=document.createElement("div");Y.className="eda-resize",Y.dataset.edge=q,t.append(Y),m.push({zone:Y,edge:q})}if(t.style.zIndex=String(Nd()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const q=e.contentSize??{w:720,h:360};t.style.width=`${q.w}px`,t.style.height=`${q.h+r.offsetHeight+f.offsetHeight}px`}const b=e.position??"center",y=t.offsetWidth,v=e.container.clientWidth;b==="center"?(t.style.left=`${Math.max(0,(v-y)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in b?(t.style.left=`${Math.max(0,(v-y)/2)}px`,t.style.top=`${b.centerTopOffset}px`):(t.style.left=`${b.x}px`,t.style.top=`${b.y}px`);let $=L$(e.boot),C=P(),E=null,T=null,Q=null;function P(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function ne(q){t.style.left=`${q.x}px`,t.style.top=`${q.y}px`,t.style.width=`${q.w}px`,t.style.height=`${q.h}px`}function W(){const q=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-q.x/q.scale}px, ${-q.y/q.scale}px) scale(${1/q.scale})`}function I(){const q=e.viewport?.getState()??{x:0,y:0,scale:1},Y=q.scale||1;return{x:-q.x/Y,y:-q.y/Y,w:e.container.clientWidth/Y,h:e.container.clientHeight/Y}}function V(){W(),T??=e.viewport?.subscribe(W)??null,!Q&&typeof ResizeObserver<"u"&&(Q=new ResizeObserver(W),Q.observe(e.container))}function K(){T?.(),T=null,Q?.disconnect(),Q=null,t.style.transform="",t.style.transformOrigin=""}function ie(){const q=document.createElement("div");q.className="jsPanel-replacement",q.id=`${e.id}-min`,q.style.setProperty("--eda-panel-color",n);const Y=document.createElement("div");Y.className="jsPanel-headerlogo",Y.innerHTML=s.innerHTML;const ae=document.createElement("span");return ae.className="jsPanel-title",ae.textContent=a.textContent,q.append(Y,ae,In("normalize","Restore",()=>{H("normalize"),t.front()}),In("close","Close",()=>t.close())),q.addEventListener("click",we=>{we.target.closest("button")||(H("normalize"),t.front())}),q}function de(q){switch(q==="maximized"&&$.status!=="maximized"&&K(),q==="minimized"&&$.status!=="minimized"&&(E?.remove(),E=null,t.style.display=""),$.status){case"minimized":{q==="normalized"?C=P():q==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const Y=e.minimizeTo?document.querySelector(e.minimizeTo):null;E=ie(),(Y??e.container).append(E);break}case"maximized":q==="normalized"?C=P():q==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),V();break;case"smallified":C=P(),t.style.height=`${r.offsetHeight}px`;break;case"normalized":q==="smallified"?C={...C,x:t.offsetLeft,y:t.offsetTop}:q==="maximized"&&_o()&&(C=I()),ne(C);break}t.dataset.status=$.status}function H(q){const Y=$;$=Md($,q),$.status!==Y.status&&(de(Y.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>$.status}),t.minimize=()=>H("minimize"),t.maximize=(q,Y)=>{H("maximize"),Y!==!0&&t.front()},t.normalize=()=>H("normalize"),t.smallify=()=>H("smallify"),t.front=(q,Y)=>{t.style.zIndex=String(Nd()),Y!==!1&&e.onfronted?.()},t.close=()=>{$.status!=="closed"&&($=Md($,"close"),E?.remove(),K(),rl.delete(t),B$(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=q=>{a.textContent=q;const Y=E?.querySelector(".jsPanel-title");Y&&(Y.textContent=q)},t.setHeaderLogo=q=>{s.innerHTML=q;const Y=E?.querySelector(".jsPanel-headerlogo");Y&&(Y.innerHTML=q)},t.setHeaderColor=q=>{n=q,t.style.setProperty("--eda-panel-color",n),E?.style.setProperty("--eda-panel-color",n)},t.centerInViewport=()=>{if($.status!=="normalized"&&$.status!=="smallified")return;const q=I(),Y=t.offsetWidth,ae=t.offsetHeight;ne({x:q.x+Math.max(0,(q.w-Y)/2),y:q.y+Math.max(0,(q.h-ae)/2),w:Y,h:ae})},t.persistFlags=()=>M$($),t.persistRect=()=>$.status==="smallified"?{...C,x:t.offsetLeft,y:t.offsetTop}:$.status==="minimized"||$.status==="maximized"?{...C}:P(),rl.add(t),e.closeOnEscape&&U$(t),t.addEventListener("pointerdown",()=>{z$(t)||t.front()},!0);const te=q=>{q.addEventListener("pointerdown",Y=>{if(Y.button!==0||Pd(Y)||$.status==="maximized"||$.status==="minimized")return;const ae=P(),we=e.viewport?.getState().scale??1,$e=Y.pointerId,Le=Y.clientX,pe=Y.clientY;let yt=!1;const Lt=me=>{if(me.pointerId!==$e)return;yt=!0;const Ne=O$(ae,me.clientX-Le,me.clientY-pe,we);t.style.left=`${Ne.x}px`,t.style.top=`${Ne.y}px`},He=me=>{me.pointerId===$e&&(q.removeEventListener("pointermove",Lt),q.removeEventListener("pointerup",He),q.removeEventListener("pointercancel",He),yt&&e.onmoved?.())};q.setPointerCapture(Y.pointerId),q.addEventListener("pointermove",Lt),q.addEventListener("pointerup",He),q.addEventListener("pointercancel",He)})};te(o),te(s),te(f);for(const{zone:q,edge:Y}of m)q.addEventListener("pointerdown",ae=>{if(ae.button!==0||$.status!=="normalized")return;const we=P(),$e=e.viewport?.getState().scale??1,Le=ae.pointerId,pe=ae.clientX,yt=ae.clientY;let Lt=!1;const He=Ne=>{Ne.pointerId===Le&&(Lt=!0,ne(D$(we,Y,Ne.clientX-pe,Ne.clientY-yt,$e,Bp,qp)))},me=Ne=>{Ne.pointerId===Le&&(q.removeEventListener("pointermove",He),q.removeEventListener("pointerup",me),q.removeEventListener("pointercancel",me),Lt&&e.onresized?.())};q.setPointerCapture(ae.pointerId),q.addEventListener("pointermove",He),q.addEventListener("pointerup",me),q.addEventListener("pointercancel",me)});return r.addEventListener("dblclick",q=>{Pd(q)||($.status==="maximized"?H("normalize"):t.maximize())}),$.status!=="normalized"?de("normalized"):t.dataset.status="normalized",t}let Vp=null;function H$(e){Vp=e}function Us(){return Vp}function To(){return{getState:()=>Us()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>Us()?.subscribe(e)??(()=>{})}}function Kp(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let V$=0;function Wp(e,t){const n=document.createElement("button");return n.type="button",n.title=t,n.setAttribute("aria-label",t),n.innerHTML=e,n.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",n.addEventListener("mouseenter",()=>n.style.color="#4b5563"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n}const K$='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',W$='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>';function il(e,t,n,r){const i=r?.readonly===!0,s=document.createElement("div");s.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const o=document.createElement("textarea");o.value=t,o.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const a=document.createElement("div");a.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const c=document.createElement("button");c.type="button",c.textContent=i?"Close":"Cancel",c.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const d=document.createElement("button");d.type="button",d.textContent="Save",d.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",i?(o.readOnly=!0,o.style.background="#f9fafb",a.append(c)):a.append(c,d),s.append(o,a);const f=Eo({id:`easydb-html-edit-${++V$}`,container:Kp(),title:e,color:"#7c3aed",content:s,contentSize:{w:520,h:400},position:"center",closeOnEscape:!0,boot:{maximized:_o()},minimizeTo:"#easydb-minimized-dock",viewport:To()});c.addEventListener("click",()=>f.close()),d.addEventListener("click",()=>{n(o.value),f.close()}),o.addEventListener("keydown",m=>{i||m.key==="Enter"&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),d.click())}),setTimeout(()=>o.focus(),0)}const yc=2e3;let sl=yc;function G$(e){sl=typeof e=="number"&&Number.isFinite(e)&&e>0?Math.floor(e):yc}let Y$=0;class Gp extends HTMLElement{constructor(){super(...arguments),this.language="Preview",this._value="",this._readonly=!1}toHtml(t){return t||null}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}get title_(){return this._label??this.language}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText=this._readonly?"color:#9ca3af":"color:#9ca3af;cursor:text",o.textContent="empty",this._readonly||(o.title="Click to edit",o.addEventListener("click",()=>this.openEditor())),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=Ly(this.toHtml(this._value)??this._value);n.textContent=r.length>sl?r.slice(0,sl)+"…":r,n.title=this._readonly?"Click to view the source":"Click to edit",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const i=document.createElement("span");i.style.cssText="flex:1 1 auto";const s=Wp(W$,"Open in a window");s.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,i,s),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box";const n=this.toHtml(this._value);if(n!==null)t.innerHTML=n;else{const r=document.createElement("pre");r.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",r.textContent=this._value,t.append(r)}Eo({id:`easydb-preview-popup-${++Y$}`,container:Kp(),title:this.title_,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},boot:{maximized:_o()},closeOnEscape:!0,minimizeTo:"#easydb-minimized-dock",viewport:To()})}openEditor(){const t=this._source!==void 0,n=t?this._source:this._value;if(this._readonly){il(`View ${this.title_}`,n,()=>{},{readonly:!0});return}il(`Edit ${this.title_}`,n,r=>{t?this._source=r:(this._value=r,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:r},bubbles:!0,composed:!0}))})}}const Q$={id:"preview",name:"Preview",type:"cell-renderer",version:"0.4.0",description:`Shows a long value as a plain-text preview (first N characters); click to edit the source in a dialog, or use the popup icon to open the full value in a window. HTML is shown there as markup, and Markdown is recognised and converted first — so a Markdown column reads as formatted text without a script. Apply by setting a column's renderer to "preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/preview.ts"};async function jd(e){G$(await e.settings.get("preview","maxChars"))}function J$(e){customElements.get("preview-cell")||customElements.define("preview-cell",X$),e.ui.registerCellRenderer("preview","preview-cell"),e.ui.registerCellRenderer("html-preview","preview-cell"),e.ui.registerSettings("preview","Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:yc,scope:"workspace",description:"A safety cap on how much text goes into a preview cell. What you SEE follows the column width — the cell ellipsizes like any other, so widen the column to read more. Lower this only to cut long values short regardless of width. Applies to cells rendered after the change (reload to refresh all). Shared with the `markdown` renderer."}]),jd(e),e.events.on("app:ready",()=>void jd(e))}class X$ extends Gp{toHtml(t){const n=Uy(t);return n==="html"?t:n==="markdown"?io(t):null}}const Z$=Object.freeze(Object.defineProperty({__proto__:null,init:J$,meta:Q$},Symbol.toStringTag,{value:"Module"})),ex={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup); a pencil on the right edits the source. Apply by setting a column's renderer to "html". For a truncated preview use "preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function tx(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",nx),e.ui.registerCellRenderer("html","html-render-cell")}class nx extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML",this._readonly=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label??"HTML"}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:flex;align-items:flex-start;gap:0.25rem;width:100%";const n=document.createElement("span");if(n.style.cssText="flex:1 1 auto;min-width:0",this._value?n.innerHTML=this._value:(n.style.color="#9ca3af",n.textContent="empty"),t.append(n),!this._readonly){const r=Wp(K$,"Edit the HTML");r.addEventListener("click",i=>{i.stopPropagation(),this.openEditor()}),t.append(r)}this.append(t)}openEditor(){const t=this._source!==void 0;il(`Edit ${this._label}`,t?this._source:this._value,n=>{t?this._source=n:(this._value=n,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))})}}const rx=Object.freeze(Object.defineProperty({__proto__:null,init:tx,meta:ex},Symbol.toStringTag,{value:"Module"})),ix={id:"cell-markdown",name:"Markdown",type:"cell-renderer",version:"0.2.0",description:`For a column written in Markdown: the cell shows one line of plain text with the markers flattened, and the popup icon opens the formatted value in a window. Click the text to edit the Markdown source. Apply by setting a column's renderer to "markdown". Unlike "preview" it never guesses — the value is always read as Markdown.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 15V9l3 3 3-3v6"/><path d="M16 9v6"/><path d="M14 13l2 2 2-2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-markdown.ts"};function sx(e){customElements.get("markdown-cell")||customElements.define("markdown-cell",ox),e.ui.registerCellRenderer("markdown","markdown-cell")}class ox extends Gp{constructor(){super(...arguments),this.language="Markdown"}toHtml(t){return t?io(t):null}}const ax=Object.freeze(Object.defineProperty({__proto__:null,init:sx,meta:ix},Symbol.toStringTag,{value:"Module"})),lx={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function cx(e){customElements.get("cell-link")||customElements.define("cell-link",ux),e.ui.registerCellRenderer("link","cell-link")}class ux extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:dx(t),r=!this._editing&&!n?hx(t):null,i=!this._editing&&!n&&!r?fx(t):null;if(n||r||i){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const a=document.createElement("button");a.type="button",a.title="Edit",a.textContent="✎",a.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",a.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),this._editing=!0,this.render()}),s.append(o,a),this.append(s)}else{const s=document.createElement("input");s.type="text",s.value=this.rawValue,s.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",s.addEventListener("change",()=>{this._editor===s&&this.commit(s.value)}),s.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(s.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),s.addEventListener("blur",()=>{this._editor===s&&this.commit(s.value)}),this.append(s),this._editor=s,this._editing&&setTimeout(()=>{s.focus(),s.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function dx(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function hx(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function fx(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),i=t.startsWith("+");return!r&&!i&&n.length<10?null:t}const px=Object.freeze(Object.defineProperty({__proto__:null,init:cx,meta:lx},Symbol.toStringTag,{value:"Module"})),mx={id:"cell-tags",name:"Cell Tags",type:"cell-renderer",version:"0.1.0",description:'Renderer for `array` columns: each value in the cell shows as its own pill. A comma list ("foo,bar"), a JSON array ("[\\"Foo\\",\\"Bar\\"]") and a real array all read the same. A pencil edits the raw list; an empty list shows nothing.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-tags.ts"};function gx(e){customElements.get("cell-tags")||customElements.define("cell-tags",wx),e.ui.registerCellRenderer("tags","cell-tags")}const bx="flex:0 1 auto;min-width:0;display:inline-block;max-width:100%;padding:0 0.4rem;border:1px solid #d1d5db;border-radius:999px;background:#f3f4f6;color:#374151;font-size:0.85em;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";class wx extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._readonly=!1,this._editor=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this._readonly&&(this._editing=!1),this.render())}get readonly(){return this._readonly}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing&&!this._readonly){this.renderEditor();return}const t=ft(this._value),n=document.createElement("span");n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";for(const r of t){const i=document.createElement("span");i.className="tag-pill",i.textContent=r,i.title=r,i.style.cssText=bx,n.append(i)}this._readonly||n.append(this.pencil()),this.append(n)}pencil(){const t=document.createElement("button");return t.type="button",t.title="Edit the list",t.textContent="✎",t.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this._editing=!0,this.render()}),t}renderEditor(){const t=document.createElement("input");t.type="text",t.value=ft(this._value).length===0?"":this._value,t.title="Comma-separated, or a JSON array",t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",t.addEventListener("change",()=>{this._editor===t&&this.commit(t.value)}),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),this.commit(t.value)):n.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),t.addEventListener("blur",()=>{this._editor===t&&this.commit(t.value)}),this.append(t),this._editor=t,setTimeout(()=>{t.focus(),t.select()},0)}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const yx=Object.freeze(Object.defineProperty({__proto__:null,init:gx,meta:mx},Symbol.toStringTag,{value:"Module"})),ri={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},vx=120,Yp=50,kx=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,$x=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function Qp(e){return/^https?:\/\/\S+$/i.test(e)}function xx(e){return/^data:image\//i.test(e)?!0:Qp(e)?kx.test(e):k$(e)}function Jp(e,t){if(e==="array")return"tags";if(e!=="string")return;const n=[];for(const i of t){if(i==null)continue;const s=typeof i=="string"?i.trim():String(i).trim();s&&n.push(s)}if(n.length===0)return;if(n.every(xx))return"image";if(n.every(Qp))return"link";if(n.some(i=>$x.test(i))||n.reduce((i,s)=>i+s.length,0)/n.length>vx)return"preview"}function vc(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=Jp(n.type,t.map(i=>i[n.field]));return r?{...n,renderer:r}:n})}function Sx(e){e.events.on("import:after",({tableId:t})=>{Cx(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:ri.name}),null;const i=(await t.store.rows(r).find()).slice(0,Yp);if(i.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:ri.name}),null;const s=n.map(({renderer:c,...d})=>d),o=vc(s,i.map(c=>c.data)),a=o.filter((c,d)=>c.renderer!==n[d]?.renderer).length;return t.ui.dialogs.toast(a===0?"No renderer fits these values — columns left as they are.":`Set ${a} renderer${a===1?"":"s"}. Press Save to keep them.`,{kind:a===0?"info":"success",title:ri.name}),o}})}async function Cx(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(s=>s.renderer))return;const r=(await e.store.rows(t).find()).slice(0,Yp);if(r.length===0)return;const i=vc(n.columns,r.map(s=>s.data));if(i.every((s,o)=>s.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:i,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:ri.id,phase:"runtime",error:n})}}const _x=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:Jp,init:Sx,meta:ri,withInferredRenderers:vc},Symbol.toStringTag,{value:"Module"}));function Ss(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function Ex(e){return!!(e.source||e.origin)}const Tx="#01579b",Ix="#6d28d9";function zd(e){return Ex(e)?Ix:Tx}const ir='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',Fd={normal:`<svg ${ir} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${ir} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${ir} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${ir} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},Ax=`<svg ${ir} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,Rx=`<svg ${ir} aria-label="Visualization"><title>Visualization</title><path d="M3 3v18h18"/><rect x="6" y="12" width="3" height="6"/><rect x="11" y="8" width="3" height="10"/><rect x="16" y="5" width="3" height="13"/></svg>`;var Ox=Object.defineProperty,Dx=Object.getOwnPropertyDescriptor,Io=(e,t,n,r)=>{for(var i=r>1?void 0:r?Dx(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ox(t,n,i),i};function Lx(e,t,n){(Nt.instance??Px()).show(e,t,n)}function Mx(e){if(!e)return null;const t=Ss(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Px(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let Nt=class extends xe{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),Nt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return ee;const r=n?k`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:k`${t}`;return k`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=Mx(this.provenance);return k`
      <dialog @cancel=${this.close} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${n?k`<div class="kind">
                  <span class="kind-label">${n.label}</span>
                  <p class="kind-note">${n.note}</p>
                  ${n.url?k`<div class="kind-origin">
                        <a href=${n.url} target="_blank" rel="noopener noreferrer">${n.url}</a>
                      </div>`:ee}
                </div>`:ee}
            ${e?.descriptionHtml?k`<div class="desc">${ar(e.descriptionHtml)}</div>`:e?.description?k`<div class="desc">${e.description}</div>`:ee}
            ${t?k`<dl>${this.row("Source",e?.source,e?.sourceUrl)} ${this.row("License",e?.license,e?.licenseUrl)} ${this.row("About",e?.about,e?.aboutUrl)}</dl>`:ee}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?k`<p class="empty">No additional information.</p>`:ee}
          </div>
        </form>
      </dialog>
    `}};Nt.instance=null;Nt.styles=[mt,Ce`
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
    `];Io([z()],Nt.prototype,"name",2);Io([z()],Nt.prototype,"info",2);Io([z()],Nt.prototype,"provenance",2);Nt=Io([Oe("table-info-dialog")],Nt);const Nx=.25,jx=4;function zx(e){return Math.min(jx,Math.max(Nx,e))}function Ud(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const Qr={x:0,y:0,scale:1};function Bd(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Fx(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Ux(e,t){let n={...Qr};t.style.transformOrigin="0 0";const r=new Set,i=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const H of r)H({...n})};let s="none",o={...Qr},a=0,c=0,d=0,f=0,m=0,b=0;const y=(H,te)=>{const q=e.getBoundingClientRect();return{x:H-q.left,y:te-q.top}},v=H=>{if(H.touches.length===2){s="pinch",o={...n};const[te,q]=[H.touches[0],H.touches[1]];d=Bd(te,q)||1;const Y=y((te.clientX+q.clientX)/2,(te.clientY+q.clientY)/2);f=(Y.x-n.x)/n.scale,m=(Y.y-n.y)/n.scale,H.preventDefault();return}if(H.touches.length===1&&!Fx(H.target)){const te=H.timeStamp;if(te-b<300){n={...Qr},i(),b=0,s="none",H.preventDefault();return}b=te,s="pan",o={...n},a=H.touches[0].clientX,c=H.touches[0].clientY}else s="none"},$=H=>{if(s==="pan"&&H.touches.length===1){const te=H.touches[0];n=Ud(o,te.clientX-a,te.clientY-c),i(),H.preventDefault()}else if(s==="pinch"&&H.touches.length>=2){const[te,q]=[H.touches[0],H.touches[1]],Y=zx(o.scale*(Bd(te,q)/d)),ae=y((te.clientX+q.clientX)/2,(te.clientY+q.clientY)/2);n={x:ae.x-f*Y,y:ae.y-m*Y,scale:Y},i(),H.preventDefault()}},C=H=>{H.touches.length===0?s="none":H.touches.length===1&&s==="pinch"&&(s="pan",o={...n},a=H.touches[0].clientX,c=H.touches[0].clientY)};let E=!1,T={...Qr},Q=0,P=0,ne=!1;const W=(H,te)=>{const q=e.getBoundingClientRect();return H>=q.left&&H<=q.right&&te>=q.top&&te<=q.bottom},I=H=>{if(!E)return;const te=H.clientX-Q,q=H.clientY-P;!ne&&Math.hypot(te,q)<4||(ne=!0,document.body.style.cursor="grabbing",n=Ud(T,te,q),i(),H.preventDefault())},V=()=>{E&&(E=!1,document.body.style.cursor="",window.removeEventListener("mousemove",I,!0),window.removeEventListener("mouseup",K,!0))};function K(){V()}const ie=H=>{H.button===2&&W(H.clientX,H.clientY)&&(E=!0,ne=!1,T={...n},Q=H.clientX,P=H.clientY,window.addEventListener("mousemove",I,!0),window.addEventListener("mouseup",K,!0))},de=H=>{ne&&(H.preventDefault(),ne=!1)};return e.addEventListener("touchstart",v,{passive:!1}),e.addEventListener("touchmove",$,{passive:!1}),e.addEventListener("touchend",C),e.addEventListener("touchcancel",C),window.addEventListener("mousedown",ie,!0),window.addEventListener("contextmenu",de,!0),{snapshot:()=>({...n}),reset:()=>{n={...Qr},i()},restore:H=>{n={...H},i()},subscribe:H=>(r.add(H),()=>r.delete(H)),dispose:()=>{e.removeEventListener("touchstart",v),e.removeEventListener("touchmove",$),e.removeEventListener("touchend",C),e.removeEventListener("touchcancel",C),window.removeEventListener("mousedown",ie,!0),window.removeEventListener("contextmenu",de,!0),V()}}}const un=48,Xp=80;function qd(e,t,n,r=Xp){const i=t-n-r;return Number.isFinite(e)?Math.max(un,Math.min(Math.round(e),Math.max(un,Math.round(i)))):un}function Bx(e,t,n=Xp){const r=e.map(d=>Math.max(un,Math.round(d)));if(r.length===0)return r;const i=Math.round(t-n),s=un*r.length;if(i<=s)return r.map(()=>un);if(r.reduce((d,f)=>d+f,0)<=i)return r;const o=d=>r.reduce((f,m)=>f+Math.min(m,d),0);let a=un,c=Math.max(...r);for(;a<c;){const d=Math.ceil((a+c)/2);o(d)<=i?a=d:c=d-1}return r.map(d=>Math.min(d,a))}function qx(e){return[...e].map((t,n)=>({p:t,i:n})).sort((t,n)=>t.p.order-n.p.order||t.i-n.i).map(({p:t})=>t)}const Jr=5;function Zp(){const e=document.createElement("div");e.className="panel-stack",e.style.cssText="display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden";const t=document.createElement("div");t.className="panel-stack-above",t.style.cssText="display:flex;flex-direction:column;flex:none;min-height:0";const n=document.createElement("div");n.className="panel-stack-primary",n.style.cssText="flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden";const r=document.createElement("div");r.className="panel-stack-below",r.style.cssText="display:flex;flex-direction:column;flex:none;min-height:0",e.append(t,n,r);const i=new Map;let s=null;const o=()=>e.clientHeight||0,a=v=>{let $=0;for(const C of i.values())C.id!==v&&($+=C.size+Jr);return $},c=()=>{for(const v of i.values())v.wrap.style.height=`${v.size}px`},d=()=>{for(const v of["above","below"]){const $=v==="above"?t:r,C=qx([...i.values()].filter(E=>E.edge===v));for(const E of C)v==="above"?$.append(E.wrap,E.splitter):$.append(E.splitter,E.wrap)}},f=()=>{const v=o();if(v<=0||i.size===0)return;const $=[...i.values()],C=$.length*Jr,E=Bx($.map(T=>T.size),v-C);$.forEach((T,Q)=>{T.size=E[Q]??un}),c()},m=()=>{s||i.size===0||(s=new ResizeObserver(()=>f()),s.observe(e))},b=()=>{i.size>0||(s?.disconnect(),s=null)},y=v=>{const $=document.createElement("div");return $.className="panel-stack-splitter",$.style.cssText=`flex:none;height:${Jr}px;cursor:ns-resize;background:rgba(127,127,127,.28);touch-action:none`,$.setAttribute("role","separator"),$.setAttribute("aria-orientation","horizontal"),$.title="Drag to resize",$.addEventListener("pointerdown",C=>{const E=v();C.preventDefault(),$.setPointerCapture(C.pointerId);const T=C.clientY,Q=E.size,P=W=>{const I=W.clientY-T,V=E.edge==="above"?I:-I;E.size=qd(Q+V,o()-i.size*Jr,a(E.id)),c()},ne=()=>{$.releasePointerCapture(C.pointerId),$.removeEventListener("pointermove",P),$.removeEventListener("pointerup",ne),$.removeEventListener("pointercancel",ne),E.onResized?.(E.size)};$.addEventListener("pointermove",P),$.addEventListener("pointerup",ne),$.addEventListener("pointercancel",ne)}),$};return{root:e,setPrimary(v){n.replaceChildren(),v&&(v.style.flex="1",v.style.minHeight="0",n.append(v))},addPane(v){i.has(v.id)&&this.removePane(v.id);const $=document.createElement("div");$.className="panel-stack-pane",$.style.cssText="flex:none;min-height:0;overflow:hidden;display:flex;flex-direction:column",v.el.style.flex="1",v.el.style.minHeight="0",$.append(v.el);const C={...v,wrap:$,splitter:document.createElement("div")};C.splitter=y(()=>C),C.size=qd(v.size,o()-(i.size+1)*Jr,a(v.id)),i.set(v.id,C),d(),c(),m(),f()},removePane(v){const $=i.get(v);$&&(i.delete(v),$.splitter.remove(),$.wrap.remove(),b(),f())},hasPane(v){return i.has(v)},paneIds(){return[...i.keys()]},refit:f,destroy(){s?.disconnect(),s=null,i.clear(),e.replaceChildren()}}}const kc=new Map,ol=new Set;function Hd(e){return e.kind==="table"?`table:${e.tableId}`:`view:${e.viewInstanceId}`}function em(e,t){kc.set(e,t),tm()}function Bs(e){kc.delete(e)&&tm()}function Vd(e){return kc.get(e)??null}function Hx(e){return ol.add(e),()=>ol.delete(e)}function tm(){for(const e of[...ol])try{e()}catch(t){console.warn("[panel-stacks] listener failed",t)}}const ls=new Map;function Sr(e,t){const r=(ls.get(e)??Promise.resolve()).then(t,t);return ls.set(e,r),r.finally(()=>{ls.get(e)===r&&ls.delete(e)}),r}const qs="easydb:visible-count";function nm(e,t,n){e&&document.dispatchEvent(new CustomEvent(qs,{detail:{key:e,count:t,total:n}}))}function rm(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const al="easydb:import-progress";function Vx(e,t){if(t<=0)return` (${e.toLocaleString()})`;const n=Math.min(100,Math.round(e/t*100));return` (${e.toLocaleString()}/${t.toLocaleString()} · ${n}%)`}let Ta=0;function im(){return Ta=Math.max(Date.now(),Ta+1),Ta}const Ao=new Map;function sm(e,t){Ao.set(e,t)}function Ro(e){Ao.delete(e)}function Kx(e){return Ao.has(e)}function Wx(e){try{Ao.get(e)?.()}catch{}}const hn=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function Gx(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let Kd=!1;async function Yx(){Kd||(Kd=!0,document.addEventListener("easydb:restack-windows",()=>void Wd())),await Wd()}async function Wd(){if(hn)return;const e=await J();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),i=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],s=Gx(i);if(t<12&&!s.every(o=>Kx(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of s)Wx(o);return}}const Qx=12;function Jx(e,t,n,r,i=Qx){const s=Gd(e.x,t.x,t.w,n,e.scale,i),o=Gd(e.y,t.y,t.h,r,e.scale,i);return s===e.x&&o===e.y?null:{...e,x:s,y:o}}function Gd(e,t,n,r,i,s){const o=t*i+e,a=n*i,c=o+a,d=r-s*2;return a>=d?o<=s&&c>=r-s?e:s-t*i:o<s?s-t*i:c>r-s?r-s-a-t*i:e}function om(e){if(e.status==="minimized"&&e.normalize(),_o()){e.status!=="maximized"&&e.maximize(),e.front();return}e.status!=="maximized"&&Xx(e),e.front()}function Xx(e){const t=Us(),n=document.getElementById("easydb-panels");if(!t||!n)return;const r=Jx(t.snapshot(),{x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight},n.clientWidth,n.clientHeight);r&&t.restore(r)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const am=Symbol.for(""),Zx=e=>{if(e?.r===am)return e?._$litStatic$},ll=e=>({_$litStatic$:e,r:am}),Yd=new Map,e1=e=>(t,...n)=>{const r=n.length;let i,s;const o=[],a=[];let c,d=0,f=!1;for(;d<r;){for(c=t[d];d<r&&(s=n[d],(i=Zx(s))!==void 0);)c+=i+t[++d],f=!0;d!==r&&a.push(s),o.push(c),d++}if(d===r&&o.push(t[r]),f){const m=o.join("$$lit$$");(t=Yd.get(m))===void 0&&(o.raw=o,Yd.set(m,t=o)),n=a}return e(t,...n)},cl=e1(k);function t1(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(a=>a==="AND"||a==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(a=>a.toLowerCase())};const i=[];let s=[];for(const a of n)a==="OR"?(i.push(s),s=[]):a==="AND"||s.push(a.toLowerCase());i.push(s);const o=i.filter(a=>a.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function n1(e,t,n){const r=t1(t);if(r.kind==="boolean")return e.filter(c=>r.groups.some(d=>d.every(f=>n(c,f))));const{phrase:i,words:s}=r;if(s.length<=1)return i===""?e:e.filter(c=>n(c,i));const o=e.filter(c=>n(c,i));if(o.length>0)return o;const a=e.filter(c=>s.every(d=>n(c,d)));return a.length>0?a:e.filter(c=>s.some(d=>n(c,d)))}const r1=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function mi(e,t,n){const r=new Map,i=new Map;for(const c of n)r.set(c.field.toLowerCase(),c.field),c.label&&r.set(c.label.toLowerCase(),c.field),i.set(c.field,c.type);const s=[...r.keys()].filter(Boolean).sort((c,d)=>d.length-c.length);let o=t;return s.length>0&&(o=o.replace(new RegExp(`(^|\\s)(${s.map(r1).join("|")}):\\s+`,"gi"),"$1$2:")),n1(e,o,(c,d)=>{const f=d.indexOf(":");if(f>0){const m=r.get(d.slice(0,f));if(m)return ci(c.data[m],d.slice(f+1),{type:i.get(m)})}return Object.values(c.data).some(m=>m!=null&&String(m).toLowerCase().includes(d))})}function i1(e,t){return e.some(n=>{const r=n.data[t];return r!=null&&r!==""})}function lm(e,t){return!e.script?.trim()||t.length===0?!1:!i1(t,e.field)}function cm(e,t){return e.filter(n=>n.filterable!==!1&&!lm(n,t))}function s1(e,t,n,r){const i=a=>a==null?0:a===""?1:2,s=i(e),o=i(t);return s!==2||o!==2?(s-o)*r:um(e,t,n)*r}function um(e,t,n){switch(n){case"number":{const r=Number(e),i=Number(t);return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}case"boolean":return(e?1:0)-(t?1:0);case"array":return Bu(e).localeCompare(Bu(t),void 0,{numeric:!0,sensitivity:"base"});case"date":{const r=new Date(String(e)).getTime(),i=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function dm(e,t,n){if(t.length===0)return e;const r=t.map(s=>({field:s.field,factor:s.asc?1:-1,type:n.find(o=>o.field===s.field)?.type??"string"})),i=[...e];return i.sort((s,o)=>{for(const a of r){const c=s1(s.data[a.field],o.data[a.field],a.type,a.factor);if(c!==0)return c}return 0}),i}function ul(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function o1(e,t){const n=e.trim();if(n==="")return!0;const r=n.split(/\s+/);if(r.length!==1)return!1;const i=r[0]??"",s=i.indexOf(":");if(s>0){const o=i.slice(0,s).toLowerCase();if(t.some(c=>c.field.toLowerCase()===o||c.label?.toLowerCase()===o))return!1}return!0}function hm(e,t=[]){return cm(e,t).map(n=>({field:n.field,label:n.label}))}function fm(e){const t=new Set(e.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=new Set(e.columns.map(r=>r.field));return Object.entries(e.filters??{}).filter(([r,i])=>i&&i.trim().length>0&&!t.has(r)&&n.has(r))}function Qd(e,t){let n=e;const r=fm(t);if(r.length>0){const c=new Map(t.columns.map(d=>[d.field,d.type]));n=n.filter(d=>r.every(([f,m])=>ci(d.data[f],m,{type:c.get(f)})))}const i=(t.search??"").trim();i!==""&&(n=mi(n,i,hm(t.columns,e))),n=dm(n,t.sort??[],t.columns);const s=n.length,o=Math.max(0,t.offset??0),a=t.limit!=null&&t.limit>0?o+t.limit:void 0;return(o>0||a!=null)&&(n=n.slice(o,a)),{rows:a1(n,t.fields),total:s}}function a1(e,t){if(!t||t.length===0)return e;const n=new Set(t);return e.map(r=>({...r,data:Object.fromEntries(Object.entries(r.data).filter(([i])=>n.has(i)))}))}async function Ei(e,t,n=0){const r=(t.search??"").trim(),i=o1(r,hm(t.columns));if(!e.query){const f=await e.find(),m=n>0&&f.length>=n;return{...Qd(m?f.slice(0,n):f,t),...m?{truncated:!0}:{}}}const s={...t.fields?{fields:t.fields}:{},...Object.keys(t.filters??{}).length>0?{filters:Object.fromEntries(fm(t))}:{},...i&&r?{search:r}:{},...t.sort&&t.sort.length>0?{sort:[...t.sort]}:{}},o=i;o?(t.offset!=null&&(s.offset=t.offset),t.limit!=null&&(s.limit=t.limit)):n>0&&(s.limit=n);const a=await e.query(s);if(o&&!a.partial)return a;const c=Qd(a.rows,t),d=!o&&s.limit!=null&&a.rows.length>=s.limit;return{...c,...a.partial?{partial:!0}:{},...a.truncated||d?{truncated:!0}:{}}}const cs=e=>Math.max(0,Math.round(e)).toLocaleString();function $c(e){if(!e)return null;const{shown:t,total:n,searching:r,searched:i}=e;if(r){const s=i&&i>0?`the first ${cs(i)} rows`:"the rows loaded so far";return t===0?`Nothing found in ${s} — this table is bigger, so there may be matches further in. Filter a column to search the rest.`:`Found ${cs(t)} in ${s} — there may be more further in. Filter a column to search the rest.`}return`Showing the first ${cs(t)} of ${cs(n)}+ matching rows. Narrow the filter to see the rest.`}const Ot=Ce`
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
`;var l1=Object.defineProperty,c1=Object.getOwnPropertyDescriptor,Cr=(e,t,n,r)=>{for(var i=r>1?void 0:r?c1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&l1(t,n,i),i};function Ia(e){return dn([{...e,negate:!1}])}let dt=class extends xe{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.exactValues=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.close(null))}}open(e,t,n,r=0,i,s){return this.values=t,this.blanks=r,this.onChange=i??null,this.exactValues=s?.exact===!0,this.states=new Map(Hn(n??"").map(o=>[Ia(o),{state:o.negate?"not":"on",token:o}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0),document.addEventListener("keydown",this.onKey,!0)})}cycle(e,t=this.exactValues){const n=t?{term:e,negate:!1,exact:!0}:{term:e,negate:!1},r=Ia(n),i=new Map(this.states),s=i.get(r);s===void 0?i.set(r,{state:"on",token:n}):s.state==="on"?i.set(r,{state:"not",token:s.token}):i.delete(r),this.states=i;const o=[...i.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=dn(o),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),dt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),dt.instance===this&&(dt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=(o,a=this.exactValues)=>this.states.get(Ia(a?{term:o,negate:!1,exact:!0}:{term:o,negate:!1}))?.state,i=o=>k` <span class=${`cb${o?` ${o}`:""}`}>${o==="on"?"✓":o==="not"?"✕":""}</span> `,s=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return k`
      <header>
        <span class="mi sm">search</span>
        <input type="text" autofocus placeholder="Filter values…" .value=${this.search} @input=${o=>this.search=o.target.value} />
        <button class="icon" title="Close" @click=${()=>this.close(null)}>
          <span class="mi sm">close</span>
        </button>
      </header>
      <div class="hint">Click a value: include (✓) → exclude (✕) → off.</div>
      ${t.length===0&&!n?k`<div class="empty">No matching values.</div>`:k`<ul>
            ${n?k`
                  <li class="blanks" title=${s(r("NULL",!1))} @click=${()=>this.cycle("NULL",!1)}>
                    <span class="left">
                      ${i(r("NULL",!1))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(o=>{const a=r(o.value);return k`
                <li title=${s(a)} @click=${()=>this.cycle(o.value)}>
                  <span class="left">
                    ${i(a)}
                    <span class="label">${o.value}</span>
                  </span>
                  <span class="count">${o.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?k`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};dt.instance=null;dt.styles=[Ot,Ce`
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
        font:
          0.85rem system-ui,
          sans-serif;
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
    `];Cr([Xe({type:Array})],dt.prototype,"values",2);Cr([Xe({type:Number})],dt.prototype,"blanks",2);Cr([Xe({type:String})],dt.prototype,"current",2);Cr([z()],dt.prototype,"search",2);Cr([z()],dt.prototype,"states",2);dt=Cr([Oe("filter-popover")],dt);var u1=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,Ft=(e,t,n,r)=>{for(var i=r>1?void 0:r?d1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&u1(t,n,i),i};let Ct=class extends xe{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return k`
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
        ${this.value?k`<button type="button" class="clear" title="Clear filter" tabindex="-1" @mousedown=${r=>r.preventDefault()} @click=${this.onClear}>×</button>`:ee}
      </div>
      ${t?k`<ul class="dropdown" style=${n} @mousedown=${r=>r.preventDefault()}>
            ${e.map((r,i)=>k` <li class=${i===this.highlightIdx?"highlighted":""} @mousedown=${s=>s.preventDefault()} @click=${()=>this.onPick(r)}>${r}</li> `)}
          </ul>`:ee}
    `}};Ct.styles=Ce`
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
  `;Ft([Xe({type:String})],Ct.prototype,"value",2);Ft([Xe({type:Array})],Ct.prototype,"options",2);Ft([Xe({type:String})],Ct.prototype,"placeholder",2);Ft([z()],Ct.prototype,"open",2);Ft([z()],Ct.prototype,"highlightIdx",2);Ft([z()],Ct.prototype,"dropTop",2);Ft([z()],Ct.prototype,"dropLeft",2);Ft([z()],Ct.prototype,"dropMinWidth",2);Ft([z()],Ct.prototype,"editing",2);Ft([Kt("input")],Ct.prototype,"inputEl",2);Ct=Ft([Oe("filter-combobox")],Ct);const pm=50,h1=500,f1=100;function Hs(e){return typeof e=="string"?e:String(e)}function p1(e,t){return t==="array"?ft(e):e==null||e===""?[]:[Hs(e)]}function mm(e,t,n){const r=n?.maxLen??pm;if(e.length===0)return!1;for(const i of e.slice(0,f1)){const s=i.data[t];if(s!=null){if(n?.type==="array"){if(ft(s).some(o=>o.length>=r))return!1;continue}if(Hs(s).length>=r)return!1}}return!0}function m1(e,t,n){const r=n?.maxLen??pm,i=n?.maxOptions??h1,s=new Set;for(const o of e)for(const a of p1(o.data[t],n?.type))if(!(a.length>=r)&&(s.add(a),s.size>=i))return[...s].sort();return[...s].sort()}function gm(e,t,n){const r=new Map;let i=0;for(const o of e){const a=o.data[t],c=n?.type==="array"?ft(a):a==null||Hs(a).trim()===""?[]:[Hs(a)];if(c.length===0){i++;continue}for(const d of c)r.set(d,(r.get(d)??0)+1)}let s=[...r.entries()].map(([o,a])=>({value:o,count:a})).sort((o,a)=>a.count-o.count||o.value.localeCompare(a.value));return n?.type==="boolean"&&(s=[...["true","false"].map(a=>({value:a,count:r.get(a)??0})),...s.filter(a=>a.value!=="true"&&a.value!=="false")]),{values:s,blanks:i}}const Oo="grid";async function g1(e){return await e.get(Oo,"sortDescFirst")!==!1}async function b1(e){return await e.get(Oo,"highlightNulls")!==!1}const dl="easydb:settings-changed";function w1(e,t){typeof document>"u"||document.dispatchEvent(new CustomEvent(dl,{detail:{pluginId:e,key:t}}))}function y1(e,t,n={}){const r=n.additive===!0,i=n.descFirst!==!0,s=e.find(c=>c.field===t),o=e.length===1&&e[0]?.field===t;if(!r&&!o)return[{field:t,asc:i}];const a=r?e.filter(c=>c.field!==t):[];return s?s.asc===i?[...a,{field:t,asc:!i}]:[...a]:[...a,{field:t,asc:i}]}const sr=new Map;function v1(e,t){let n=sr.get(e);return n||(n=new Set,sr.set(e,n)),n.add(t),()=>{const r=sr.get(e);r&&(r.delete(t),r.size===0&&sr.delete(e))}}function k1(e){return(sr.get(e)?.size??0)>0}function $1(e){const t=sr.get(e.key);if(!(!t||t.size===0))for(const n of[...t])try{n(e)}catch(r){console.warn("[visible-rows] listener failed",r)}}var x1=Object.defineProperty,S1=Object.getOwnPropertyDescriptor,Pe=(e,t,n,r)=>{for(var i=r>1?void 0:r?S1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&x1(t,n,i),i};const C1=200,_1=250,E1=10,Aa=32;let Re=class extends xe{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.matchingTotal=0,this.tableTotal=0,this.truncated=!1,this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.highlightNulls=!0,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.rowColl=null,this.loadGeneration=0,this.reloadTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.renderedRows=null,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{const t=e.detail.query??"";t!==this.globalQuery&&(this.globalQuery=t,this.scheduleReload())},this.onTableSearch=e=>{const t=e.detail;if(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId){const n=t.query??"";if(n===this.localQuery)return;this.localQuery=n,this.scheduleReload()}},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)},this.onSettingsChanged=e=>{e.detail?.pluginId===Oo&&this.readGridSettings()}}get searchIsActive(){return this.localQuery.trim()!==""||this.globalQuery.trim()!==""}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener(Qa,this.onTableLoading),document.addEventListener(dl,this.onSettingsChanged),this.readGridSettings(),this.readLoadingState(),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener(Qa,this.onTableLoading),document.removeEventListener(dl,this.onSettingsChanged),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.reloadTimer!=null&&(window.clearTimeout(this.reloadTimer),this.reloadTimer=null),this.resizing=null}async readGridSettings(){try{const e=await J();this.highlightNulls=await b1(e.api.settings)}catch{}}readLoadingState(){const e=jv(this.tableId);this.externalLoading=e!==void 0,this.externalProgress=typeof e=="number"?e:null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),e.has("tableId")&&this.readLoadingState(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount(),this.emitRows()}get visibleRowsKey(){return(this.viewMode?this.viewInstanceId:this.tableId)||""}emitRows(){const e=this.visibleRowsKey,t=this.renderedRows;!e||!t||$1({key:e,rows:t,total:Math.max(this.matchingTotal,t.length),truncated:this.truncated,searching:this.searchIsActive})}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=Math.max(this.tableTotal,this.matchingTotal,this.rows.length);t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,nm(e,t,n))}async bind(){if(!this.tableId)return;const e=await J(),t=await e.store.tables.findOne(this.tableId);t&&(this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(i=>i.id===this.tableId);r&&(this.tableColumns=r.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const r=n.find(i=>i.id===this.viewInstanceId);r&&(this.viewInst=r,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(i=>i.id===this.tableId);r&&this.applyTable(r)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers)),this.rowColl=e.store.rows(this.tableId),this.unsubscribe=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows())}async loadRows(){const e=this.rowColl;if(!e)return;const t=++this.loadGeneration,n=window.setTimeout(()=>this.loading=!0,C1);try{const r=await Ei(e,this.rowRequest(),jn);if(t!==this.loadGeneration)return;if(this.rows=r.rows,this.matchingTotal=r.total,this.truncated=r.truncated===!0,e.count){const i=await e.count();if(t!==this.loadGeneration)return;this.tableTotal=i}else this.tableTotal=r.total}catch(r){if(t!==this.loadGeneration)return;this.rows=[],this.matchingTotal=0,this.tableTotal=0,(await J()).api.ui.dialogs.toast(`Couldn't load rows: ${r?.message??String(r)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(n),t===this.loadGeneration&&(this.loading=!1)}}rowRequest(){const e=[this.localQuery.trim(),this.globalQuery.trim()].filter(Boolean).join(" ");return{columns:this.columns,filters:this.filters,...e?{search:e}:{},...this.sortSpecs.length>0?{sort:this.sortSpecs}:{}}}scheduleReload(){this.reloadTimer!=null&&window.clearTimeout(this.reloadTimer),this.reloadTimer=window.setTimeout(()=>{this.reloadTimer=null,this.loadRows()},_1)}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=ul(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const i=n[r.field];return typeof i=="number"?{...r,width:i}:r}),this.sortSpecs=ul(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await J();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const i=this.columns.find(s=>s.field===n);if(this.readOnly||i?.readonly===!0){e.api.ui.dialogs.toast(this.readOnly?"This table is read-only.":`“${i?.label??n}” is a read-only column.`,{kind:"warning",title:"Not saved"}),this.requestUpdate();return}if(i){const s=A1(i,r,this.rows,t.id,t);if(s){await e.api.ui.dialogs.alert(s,`Cannot save ${i.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(s){await e.api.ui.dialogs.alert(s?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const i=String(n);return k`<input
      type="text"
      class=${Pp}
      style=${Jk}
      title=${r}
      .value=${i}
      @keydown=${s=>this.cancelCellEdit(s,i)}
      @change=${s=>this.setCell(e,t.field,s.target.value)}
    />`}renderReadonlyCell(e,t){if(e.type==="boolean")return k`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`;if(t==null||t==="")return k``;if(e.type==="array"&&ft(t).length===0)return k``;const n=wp(e.type,t);return n!==null?k`${n}`:k`${String(t)}`}renderScriptedCell(e,t){const n=xr(t.script,e.data);if(!n.ok)return k`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return k`${n.value==null?"":String(n.value)}`;const i=ll(r);return cl`<${i}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      .sourceReadonly=${this.readOnly}
      @change=${this.readOnly?void 0:s=>this.setCell(e,t.field,s.detail.value)}
    ></${i}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,i=t.renderer,s=i?this.cellRenderers?.get(i):void 0;if(s){const o=ll(s);return cl`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        .sourceReadonly=${r}
        @change=${r?void 0:a=>this.setCell(e,t.field,a.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return Xd(n,ti(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):k`<input
          type="date"
          .value=${ti(n)}
          @keydown=${o=>this.cancelCellEdit(o,ti(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return Xd(n,ni(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):k`<input
          type="datetime-local"
          .value=${ni(n)}
          @keydown=${o=>this.cancelCellEdit(o,ni(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":{const o=n==null||n==="";return!o&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):k`<input
          type="number"
          .value=${o?"":String(n)}
          @keydown=${a=>this.cancelCellEdit(a,o?"":String(n))}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`}case"array":{const o=ft(n).length===0?"":String(n);return k`<input
          type="text"
          .value=${o}
          @keydown=${a=>this.cancelCellEdit(a,o)}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}default:return k`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(n??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await J();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=await J(),r=y1(this.sortSpecs,e,{additive:t,descFirst:await g1(n.api.settings)});this.sortSpecs=r,this.scheduleReload(),await this.persistSort(r)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await J();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}typedFilters(e){return e.map(([t,n])=>({field:t,query:n,type:this.columns.find(r=>r.field===t)?.type}))}filteredRows(){const e=new Set(this.columns.filter(a=>a.filterable===!1).map(a=>a.field)),t=new Set(this.columns.map(a=>a.field)),n=Object.entries(this.filters).filter(([a,c])=>c&&c.trim().length>0&&!e.has(a)&&t.has(a)),r=this.globalQuery.trim(),i=this.localQuery.trim();if(n.length===0&&r.length===0&&i.length===0)return this.rows;let s=this.rows;if(n.length>0){const a=this.typedFilters(n);s=s.filter(c=>a.every(d=>ci(c.data[d.field],d.query,{type:d.type})))}const o=cm(this.columns,this.rows);return i&&(s=mi(s,i,o)),r&&(s=mi(s,r,o)),s}sortedRows(){return dm(this.filteredRows(),this.sortSpecs,this.columns)}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=dt.instance;if(!r)return;const{values:i,blanks:s}=gm(this.rowsFacetedFor(t),t,{type:this.columns.find(a=>a.field===t)?.type}),o=await r.open(n.getBoundingClientRect(),i,this.filters[t]??"",s,a=>this.onFilterInput(t,a));o!==null&&(typeof o=="object"&&"clear"in o?this.onFilterInput(t,""):typeof o=="string"&&this.onFilterInput(t,o))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250),this.scheduleReload()}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(i=>i.filterable===!1).map(i=>i.field)),n=Object.entries(this.filters).filter(([i,s])=>s&&s.trim().length>0&&i!==e&&!t.has(i));if(n.length===0)return this.rows;const r=this.typedFilters(n);return this.rows.filter(i=>r.every(s=>ci(i.data[s.field],s.query,{type:s.type})))}computeFilterSuggestions(){const e=new Map;for(const t of this.visibleColumns)mm(this.rows,t.field,{type:t.type})&&e.set(t.field,m1(this.rowsFacetedFor(t.field),t.field,{type:t.type}));return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((i,s)=>{if(i.width!=null)return;const o=t[s];o&&r.set(i.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(i=>r.has(i.field)?{...i,width:r.get(i.field)}:i))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const i=o=>{if(!this.resizing)return;const a=o.clientX-this.resizing.startX,c=Math.max(E1,this.resizing.startW+a);this.columns=this.columns.map(d=>d.field===this.resizing.field?{...d,width:c}:d)},s=async()=>{window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s);const o=this.resizing?.field;if(this.resizing=null,!o)return;const a=await J();if(this.viewMode){const c={...this.viewInst?.columnWidths??{}};for(const d of this.columns)typeof d.width=="number"&&(c[d.field]=d.width);await a.store.viewInstances.patch(this.viewInstanceId,{columnWidths:c,updatedAt:Date.now()})}else await a.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",i),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=i?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const i=[...this.columns],s=i.findIndex(d=>d.field===n);if(s<0)return;const[o]=i.splice(s,1);let a=i.findIndex(d=>d.field===t);if(a<0){i.splice(s,0,o);return}r==="after"&&(a+=1),i.splice(a,0,o);const c=await J();this.viewMode?await c.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:i.map(d=>d.field),updatedAt:Date.now()}):await c.store.tables.patch(this.tableId,{columns:i,updatedAt:Date.now()})}async saveFilters(){const e=await J(),t={};for(const[r,i]of Object.entries(this.filters))i&&i.trim().length>0&&(t[r]=i);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+Aa}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),i=Math.min(e.length,r+n);return{slice:e.slice(r,i),topPad:r*t,bottomPad:(e.length-i)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length,this.renderedRows=this.visibleRowsKey&&k1(this.visibleRowsKey)?e:null;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:i}=this.virtualSlice(e),s=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return k`
      ${this.loading||this.externalLoading?k`<div class="load-bar" role="progressbar" aria-label="Loading rows" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${o!=null?Math.round(o*100):ee}>
            <div class="load-bar-fill ${o!=null?"determinate":""}" style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:ee}></div>
          </div>`:ee}
      ${this.truncated?k`<div class="truncated-note" role="status">
            ${$c({shown:this.rows.length,total:this.matchingTotal,searching:this.searchIsActive,searched:jn})}
          </div>`:ee}
      <table style=${this.tableSizingStyle(t)??ee}>
        <colgroup>
          ${t.map(a=>k`<col style=${a.width!=null?`width: ${a.width}px`:""} />`)}
          <col style="width:${Aa}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(a=>{const c=a.sortable!==!1,d=a.filterable!==!1&&!lm(a,this.rows),f=this.sortSpecs.findIndex(P=>P.field===a.field),m=f>=0?this.sortSpecs[f]:void 0,b=m?m.asc?"asc":"desc":null,y=c?b==="asc"?"▲":b==="desc"?"▼":"⇅":"",v=this.sortSpecs.length>1&&f>=0?String(f+1):"",$=`t-${a.type}`,C=this.dragSourceField===a.field,E=this.dropTargetField===a.field,T=E&&this.dropEdge==="before"?" drop-before":E&&this.dropEdge==="after"?" drop-after":"",Q=(a.description?`${a.description}
`:"")+(a.units?`Units: ${a.units}
`:"")+`${a.field} — ${c?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(d?"":" · not filterable");return k`
                <th
                  class=${`${$}${b?" sorted":""}${C?" drag-source":""}${T}${c?"":" no-sort"}`}
                  title=${Q}
                  @click=${P=>c&&this.toggleSort(a.field,P.shiftKey)}
                  @dragover=${P=>this.onColDragOver(P,a.field,P.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(a.field)}
                  @drop=${P=>this.onColDrop(P,a.field)}
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
                      @click=${P=>P.stopPropagation()}
                      @dragstart=${P=>this.onColDragStart(P,a.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label">${a.label}${a.units?k`<span class="col-units"> (${a.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true">${y}${v?k`<span class="sort-rank">${v}</span>`:ee}</span>
                    ${d?k`<button
                          class=${`funnel${this.filters[a.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${a.label||a.field}`}
                          @click=${P=>this.openFilterPicker(P,a.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${P=>P.stopPropagation()}
                    @pointerdown=${P=>this.onResizeStart(P,a.field,P.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${Aa}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(a=>{if(a.filterable===!1)return k`<th></th>`;const c=s.get(a.field)??[];return k`
                <th>
                  <filter-combobox
                    .value=${this.filters[a.field]??""}
                    .options=${c}
                    placeholder="filter…"
                    title="Filter: text = contains, ^text = starts with, !text = does not contain, NULL = empty, !NULL = has a value. Comma-separate for several values (a,b = a OR b; !a,!b excludes both); quote a value containing a comma."
                    @filter-change=${d=>this.onFilterInput(a.field,d.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${r>0?k`<tr class="spacer" style=${`height:${r}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${n.map(a=>k`
              <tr>
                ${t.map(c=>k`<td
                      class=${`t-${c.type}${c.renderer?` r-${c.renderer}`:""}${c.renderer&&this.cellRenderers?.get(c.renderer)?" has-renderer":""}${I1(a,c,this.highlightNulls)}`}
                      title=${T1(a,c)}
                    >
                      ${this.renderCell(a,c)}
                    </td>`)}
                <td>
                  ${this.readOnly?ee:k`<button class="danger" title="Delete row" @click=${()=>this.deleteRow(a.id)}>
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${i>0?k`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Re.styles=[Ot,Ce`
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
      /* Says the grid is showing a slice. Sticky so scrolling a long table
         cannot leave the user reading a partial answer as a whole one. */
      .truncated-note {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 3;
        padding: 0.25rem 0.5rem;
        background: #fef3c7;
        border-bottom: 1px solid #fcd34d;
        color: #92400e;
        font-size: 0.75rem;
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
      /* A cell whose content is a RENDERER ELEMENT: the element sizes itself from
         its content, and overflow:hidden does not shrink an element's intrinsic
         width — so a long value pushed the whole COLUMN wide and the table
         scrolled sideways instead of ellipsizing. That is what "auto ellipsis
         works until we have a renderer" meant. Capping the cell (the same trick
         as a link cell, and for the same reason) gives the element a bounded box
         to clip inside, so the ellipsis follows the column again. An explicitly
         resized column sets width, which takes over from this cap. */
      td.has-renderer {
        max-width: 40ch;
      }
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
    `];Pe([Xe({type:String})],Re.prototype,"tableId",2);Pe([Xe({type:String})],Re.prototype,"viewInstanceId",2);Pe([z()],Re.prototype,"columns",2);Pe([z()],Re.prototype,"rows",2);Pe([z()],Re.prototype,"matchingTotal",2);Pe([z()],Re.prototype,"tableTotal",2);Pe([z()],Re.prototype,"truncated",2);Pe([z()],Re.prototype,"sortSpecs",2);Pe([z()],Re.prototype,"filters",2);Pe([z()],Re.prototype,"globalQuery",2);Pe([z()],Re.prototype,"localQuery",2);Pe([z()],Re.prototype,"dragSourceField",2);Pe([z()],Re.prototype,"dropTargetField",2);Pe([z()],Re.prototype,"dropEdge",2);Pe([z()],Re.prototype,"resizing",2);Pe([z()],Re.prototype,"cellRenderers",2);Pe([z()],Re.prototype,"scrollY",2);Pe([z()],Re.prototype,"viewportHeight",2);Pe([z()],Re.prototype,"loading",2);Pe([z()],Re.prototype,"externalLoading",2);Pe([z()],Re.prototype,"externalProgress",2);Pe([z()],Re.prototype,"highlightNulls",2);Pe([z()],Re.prototype,"tableReadonly",2);Re=Pe([Oe("data-table")],Re);const Jd=500;function T1(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null||t.type==="array"&&ft(n).length===0)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>Jd?`${r.slice(0,Jd)}…`:r}function I1(e,t,n=!0){if(t.script)return"";const r=Xk(e.data[t.field],t.type);return r==="empty"?n?" is-null":"":r==="invalid"?" is-invalid":""}function A1(e,t,n,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}if(e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(o=>o.id!==r&&o.data[e.field]===t))return`${e.label} must be unique. Another row already has "${String(t)}".`;if(e.validate?.trim()){const s={...i.data,[e.field]:t},o=Qy(e.validate,t,s);if(!o.ok)return o.message}return null}function Xd(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}var R1=Object.defineProperty,O1=Object.getOwnPropertyDescriptor,Ti=(e,t,n,r)=>{for(var i=r>1?void 0:r?O1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&R1(t,n,i),i};let Bn=class extends xe{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return k`<button class="icon ${e?"active":""}" title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"} @click=${this.openSearch}>
        <span class="mi sm">search</span>
      </button>`}return k`<input type="search" placeholder="search…" .value=${this.query} @input=${this.onInput} @blur=${this.onBlur} />`}};Bn.styles=[Ot,Ce`
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
    `];Ti([Xe({type:String})],Bn.prototype,"tableId",2);Ti([z()],Bn.prototype,"query",2);Ti([z()],Bn.prototype,"open",2);Ti([Kt("input")],Bn.prototype,"inputEl",2);Bn=Ti([Oe("panel-search")],Bn);var D1=Object.defineProperty,L1=Object.getOwnPropertyDescriptor,Vn=(e,t,n,r)=>{for(var i=r>1?void 0:r?L1(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&D1(t,n,i),i};let Jt=class extends xe{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.fixedSchemaSources=new Set,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await J();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(i){console.error(`[table-button:${e.id}]`,i)}}}async connectedCallback(){super.connectedCallback();const e=await J();this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=Zd(e.registries.rowSources),e.events.on("app:ready",()=>{this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=Zd(e.registries.rowSources)}),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await J();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await J(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=M1(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}get schemaEditable(){const e=this.table?.source?.type;return!e||!this.fixedSchemaSources.has(e)}render(){return k`
      ${this.table?.readonly?ee:k`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      ${this.schemaEditable?k`<button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
            <span class="mi sm">view_column</span>
          </button>`:ee}
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>k`<button class=${e.danger?"danger":""} title=${e.tooltip??e.label} aria-label=${e.label} @click=${t=>this.runTableButton(e,t)}>
              ${e.icon?e.icon.trimStart().startsWith("<svg")?k`<span class="icon-svg">${El(e.icon)}</span>`:k`<span class="mi sm">${e.icon}</span>`:k`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Jt.styles=[Ot,Ce`
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
    `];Vn([Xe({type:String})],Jt.prototype,"tableId",2);Vn([Xe({type:Boolean})],Jt.prototype,"active",2);Vn([z()],Jt.prototype,"rowCount",2);Vn([z()],Jt.prototype,"tableButtons",2);Vn([z()],Jt.prototype,"table",2);Vn([z()],Jt.prototype,"fixedSchemaSources",2);Jt=Vn([Oe("panel-footer")],Jt);function M1(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Zd(e){const t=new Set;for(const[n,r]of e)r.schemaEditable===!1&&t.add(n);return t}function Ra(e){return e.title?.trim()?e.title.trim():e.name}function P1(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function N1(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const jt=new Map,bm=new Set;let eh=!1;async function wm(){const e=await J();await Promise.all([...jt.keys()].map(t=>Cs(t,e)))}function xc(e){const t=jt.get(e);return t?(om(t),!0):(j1(e),!0)}async function j1(e){const t=await J(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function ym(e){const t=await J();await H1(e,t)}async function vm(){if(eh)return;eh=!0;const e=await J(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){H$(Ux(t,n));const i=()=>N1(t);i(),window.addEventListener("resize",i);const s=document.querySelector("app-shell")?.shadowRoot,o=s?.querySelector("header"),a=s?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||a)){const c=new ResizeObserver(i);o&&c.observe(o),a&&c.observe(a)}}const r=(await e.store.tables.find()).filter(i=>i.workspaceId===e.workspaceId);r.sort(Fs);for(const i of r)i.windowGeometry?.closed||th(i,e);e.store.tables.subscribe(i=>{const s=i.filter(c=>c.workspaceId===e.workspaceId),o=new Map(s.map(c=>[c.id,c]));for(const[c,d]of jt){const f=o.get(c);if(!f||f.windowGeometry?.closed){jt.delete(c),Ro(c),bm.add(c);try{d.status!=="closed"&&d.close()}catch{}}}const a=s.filter(c=>!jt.has(c.id)&&!c.windowGeometry?.closed).sort(Fs);for(const c of a)th(c,e)}),Yx()}const hl=720,fl=360;function th(e,t){const n=`panel-${km(e.id)}`,r=P1(),i=A$(e.windowGeometry),s=hn||i?.minimized===!0,o=()=>{const Y=document.createElement("data-table");return Y.tableId=e.id,Y.style.height="100%",Y};let a=null;const c=`table:${e.id}`,d=Y=>(a=Zp(),a.setPrimary(Y),em(c,a),a.root),f=s?document.createElement("div"):d(o());let m=s?null:f,b=Ra(e),y=-1,v=-1,$=null;const C=()=>{V.setHeaderTitle(b+($?Vx($.rows,$.total):rm(y,v)))},E=Y=>{const ae=Y.detail;ae.key===e.id&&(y=ae.count,v=ae.total,C())},T=Y=>{const ae=Y.detail;ae.tableId===e.id&&($=ae.done?null:{rows:ae.rows,total:ae.total},C())};document.addEventListener(qs,E),document.addEventListener(al,T);const Q=()=>{W.active=!1,Bs(c),a?.destroy(),a=null,m?.remove(),m=null},P=()=>{if(m)return;const Y=document.getElementById(n)?.querySelector(".jsPanel-content");if(!Y)return;Y.replaceChildren();const ae=d(o());Y.appendChild(ae),m=ae,W.active=!0},ne=document.createElement("panel-search");ne.tableId=e.id;const W=document.createElement("panel-footer");W.tableId=e.id,W.active=!s;const I=async()=>{Bs(c),a?.destroy(),a=null,document.removeEventListener(qs,E),document.removeEventListener(al,T);const Y=jt.get(e.id)?.persistRect();jt.delete(e.id),Ro(e.id),!bm.delete(e.id)&&await Sr(`table:${e.id}`,async()=>{const ae=await t.store.tables.findOne(e.id);if(!ae)return;const we=ae.windowGeometry??{...Y??{x:60,y:60,w:hl,h:fl},z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...we,closed:!0},updatedAt:Date.now()})})},V=Eo({id:n,container:r,title:b,logo:Fd[Ss(e)],color:zd(e),content:f,footerToolbar:W,...i?{panelSize:{w:i.w,h:i.h},position:{x:i.x,y:i.y}}:{contentSize:{w:hl,h:fl},position:F1()},minimizeTo:"#easydb-minimized-dock",viewport:To(),boot:{minimized:s,maximized:!hn&&i?.maximized===!0,smallified:!hn&&i?.smallified===!0},onmoved:()=>void Cs(e.id,t),onresized:()=>void Cs(e.id,t),onfronted:()=>void B1(e.id,t),onstatuschange:Y=>{Y.status==="minimized"?Q():(Y.status==="normalized"||Y.status==="maximized")&&P(),Cs(e.id,t)},onclosed:()=>void I()});jt.set(e.id,V),sm(e.id,()=>V.front(void 0,!1));const ie=document.getElementById(n)?.querySelector(".jsPanel-controlbar");ie&&ie.prepend(ne);let de=null;const H=document.createElement("button");H.type="button",H.title="Table info",H.setAttribute("aria-label","Table info"),H.className="eda-info-btn",H.textContent="ⓘ",H.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",H.addEventListener("click",Y=>{Y.stopPropagation(),de&&Lx(b,de.info??{},{source:de.source,origin:de.origin})}),ie?.prepend(H);const te=Y=>{de=Y??null;const ae=!!(Y?.info||Y?.source||Y?.origin);H.style.display=ae?"inline-flex":"none"};te(e);let q=Ss(e);t.store.tables.subscribe(Y=>{const ae=Y.find($e=>$e.id===e.id);if(!ae)return;te(ae),Ra(ae)!==b&&(b=Ra(ae),C());const we=Ss(ae);we!==q&&(q=we,V.setHeaderLogo(Fd[we]),V.setHeaderColor(zd(ae)))})}let z1=0;function F1(){const e=z1++;return{x:40+e%8*30,y:80+e%8*30}}function Cs(e,t){return Sr(`table:${e}`,()=>U1(e,t))}async function U1(e,t){const n=jt.get(e),r=n??document.getElementById(`panel-${km(e)}`);if(!r)return;const i=n?.persistFlags()??{minimized:!1,maximized:!1,smallified:!1},s=n?.persistRect()??{x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight};try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=hn?a?.minimized??!1:i.minimized,d=hn?a?.maximized??!1:i.maximized,f=hn?a?.smallified??!1:i.smallified,m={...s,z:a?.z??0,minimized:c,maximized:d,smallified:f};await t.store.tables.patch(e,{windowGeometry:m,updatedAt:Date.now()})}catch{}}function B1(e,t){return Sr(`table:${e}`,()=>q1(e,t))}async function q1(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{...jt.get(e)?.persistRect()??{x:0,y:0,w:hl,h:fl},z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:im()},updatedAt:Date.now()})}catch{}}async function H1(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),i=await r.find();await r.bulkRemove(i.map(s=>s.id))}await t.store.tables.remove(e)}function km(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function $m(e){if(!(e instanceof Node))return null;for(const[t,n]of jt)if(n.contains(e))return t;return null}const Sc=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:hn,deleteTable:ym,focusTableWindow:xc,initWindowManager:vm,persistTablePanelGeometry:wm,tableIdAtNode:$m},Symbol.toStringTag,{value:"Module"})),V1={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function K1(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await ym(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const W1=Object.freeze(Object.defineProperty({__proto__:null,init:K1,meta:V1},Symbol.toStringTag,{value:"Module"})),G1={id:"table-copy",name:"Copy Table",type:"ui",version:"0.1.0",description:"Adds a Copy button to each table window: duplicate it as-is, or snapshot its Raw / Visible data into a new plain table. Works on projections too — that is how you freeze one.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/table-copy.ts"};function Y1(e){e.ui.registerTableButton({id:"table-copy:copy",label:"Copy",icon:"content_copy",tooltip:"Copy this table — as a duplicate, or as a snapshot of its data",onClick:(t,{tableId:n})=>void J1(t,n)})}function Q1(e,t){const n=e.source?.type==="projection";if(t==="duplicate")return n?"a second projection over the same sources (still live)":e.source?"another connection to the same source (still live)":"a full copy of its columns and rows";const r=t==="raw"?"every column and row":"the visible columns and filtered rows";return e.source?`a plain table holding ${r} as they are right now`:`a plain table holding ${r}`}async function J1(e,t){const n=await e.store.tables.findOne(t);if(!n)return;const r=await e.ui.dialogs.choice(`Copy "${n.name}" — what should the copy contain?`,["Duplicate","Raw Data","Visible Data"],"Copy table");if(!r)return;const i=r==="Duplicate"?"duplicate":r==="Raw Data"?"raw":"visible";try{const s=await xm(e,n,i);e.ui.dialogs.toast(`Copied "${n.name}" to "${s.name}" — ${Q1(n,i)}.`,{kind:"success",title:"Copy table"})}catch(s){e.ui.dialogs.toast(`Could not copy "${n.name}": ${s?.message??String(s)}`,{kind:"error",title:"Copy table"})}}async function xm(e,t,n){const r=e.workspaceId();if(!r)throw new Error("table-copy: no active workspace");const i=fn(await Bl(e,r),`${t.name} copy`),s=Ee(),o=Date.now(),a={id:s,workspaceId:r,name:i,code:je(i),view:t.view,...t.title?{title:`${t.title} copy`}:{},...t.labelColumn?{labelColumn:t.labelColumn}:{},...t.info?{info:t.info}:{},updatedAt:o};if(n==="duplicate"){const d={...a,columns:t.columns,...t.sortBy?{sortBy:t.sortBy}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.filters?{filters:t.filters}:{},...t.deletedColumns?{deletedColumns:t.deletedColumns}:{},...t.readonly?{readonly:!0}:{},...t.source?{source:t.source}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(d),t.source||await nh(e,t.id,s,f=>f),d}const c={...a,columns:kp(t,n).map(X1),...n==="raw"&&t.filters?{filters:t.filters}:{},...n==="raw"&&t.sortBy?{sortBy:t.sortBy}:{},...n==="raw"&&t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(c),await nh(e,t.id,s,d=>$p(t,d,n)),c}function X1(e){if(!e.readonly)return e;const t={...e};return delete t.readonly,t}async function nh(e,t,n,r){const i=r(await e.store.rows(t).find());if(i.length===0)return;const s=Date.now();await e.store.rows(n).bulkInsert(i.map(o=>({id:Ee(),tableId:n,data:{...o.data},updatedAt:s})))}const Z1=Object.freeze(Object.defineProperty({__proto__:null,copyTable:xm,init:Y1,meta:G1},Symbol.toStringTag,{value:"Module"}));var eS=Object.defineProperty,tS=Object.getOwnPropertyDescriptor,Cc=(e,t,n,r)=>{for(var i=r>1?void 0:r?tS(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&eS(t,n,i),i};function Sm(e,t){return(zt.instance??nS()).open(e,t)}function nS(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let zt=class extends xe{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const i=this.rows[r],s=i.field.trim(),o=i.label.trim()||s;return{...n,field:s,label:o,hidden:i.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),zt.instance=this}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Xt("column-names",this.dialogEl)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const i=n.field.trim().toLowerCase();if(i===""){e.add(r);return}(t.get(i)??t.set(i,[]).get(i)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,i)=>i===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return k`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
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
              Rename columns before importing. A <strong>name</strong> is the field key; duplicate or empty names are shown in red and must be fixed first. Tick <strong>Hide</strong> to import a
              column hidden — click the <strong>Hide</strong> header to toggle all/none.
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
              ${this.rows.map((n,r)=>k`
                  <input
                    class=${e.has(r)?"invalid":""}
                    .value=${n.field}
                    aria-label=${`Column ${r+1} name`}
                    @input=${i=>this.updateRow(r,"field",i.target.value)}
                  />
                  <input .value=${n.label} aria-label=${`Column ${r+1} label`} @input=${i=>this.updateRow(r,"label",i.target.value)} />
                  <div class="hidecell">
                    <input type="checkbox" .checked=${n.hidden} aria-label=${`Hide column ${r+1}`} @change=${i=>this.setHidden(r,i.target.checked)} />
                  </div>
                `)}
            </div>
            <p class="err">${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:ee}</p>
          </div>
        </form>
      </dialog>
    `}};zt.instance=null;zt.styles=[mt,Ce`
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
    `];Cc([z()],zt.prototype,"rows",2);Cc([z()],zt.prototype,"subject",2);zt=Cc([Oe("column-names-dialog")],zt);const rS=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return zt},editColumnNames:Sm},Symbol.toStringTag,{value:"Module"}));async function iS(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const i={api:e,fetchText:(I,V)=>yi(e,I,V??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},s=await n.list(i,{kind:"url",url:r});if(s.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=s.find(I=>I.name===t.name)??(s.length===1?s[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let a=[];const c=[];for await(const I of n.read(i,o))I.columns?.length&&(a=I.columns),c.push(...I.rows);const{columns:d,newFields:f}=no(t.columns,a,t.deletedColumns??[]),m=t.origin?.pks??[],b=new Set(a.map(I=>I.field)),y=t.columns.map(I=>I.field).filter(I=>!b.has(I)&&!m.includes(I)),v=(t.deletedColumns??[]).filter(I=>b.has(I)),$=e.store.rows(t.id),C=await $.find(),{data:E,merged:T,strategy:Q,droppedUserRows:P}=Vf({oldRows:C.map(I=>({data:I.data})),freshRows:c,pks:m,userAddedFields:y,deletedRemoteFields:v}),ne=Date.now();d.length>0&&await e.store.tables.patch(t.id,{columns:d,updatedAt:ne}),await $.bulkRemove(C.map(I=>I.id));const W=E.map(I=>({id:Ee(),tableId:t.id,data:I,updatedAt:ne}));return await $.bulkInsert(W),{rowCount:W.length,newFields:f,merged:T,strategy:Q,droppedUserRows:P}}const rh="import:samples",ih="import:samplesHidden";function sS(e,t,n){const r=new Set(n),i=[];for(const s of e)r.has(s.url)||i.push({...s,key:`b:${s.url}`,own:!1});for(const s of t)i.push({...s,key:`u:${s.id}`,own:!0});return i}function oS(e){const t=typeof e=="string"?Cm(e):e;if(!Array.isArray(t))return[];const n=[];for(const r of t){if(!r||typeof r!="object")continue;const{id:i,label:s,url:o,kind:a}=r;typeof i!="string"||!i||typeof s!="string"||!s.trim()||typeof o!="string"||!o.trim()||n.push({id:i,label:s.trim(),url:o.trim(),...lS(a)?{kind:a}:{}})}return n}function aS(e){const t=typeof e=="string"?Cm(e):e;return Array.isArray(t)?t.filter(n=>typeof n=="string"&&!!n.trim()).map(n=>n.trim()):[]}function lS(e){return e==="json"||e==="csv"||e==="sql"||e==="datasette"}function Cm(e){try{return JSON.parse(e)}catch{return null}}function cS(e,t){return[...e,t]}function uS(e,t){return e.filter(n=>n.id!==t)}function dS(e,t){return e.includes(t)?[...e]:[...e,t]}var hS=Object.defineProperty,fS=Object.getOwnPropertyDescriptor,qe=(e,t,n,r)=>{for(var i=r>1?void 0:r?fS(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&hS(t,n,i),i};const pS="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",mS="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",gS='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',bS=[{label:"Northwind — sample database (JSON dump)",url:pS,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:mS,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],wS={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function yS(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:gS,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>kS(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>vS(t,n)})}async function vS(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await _c(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const i=await iS(e,n,r),s=[];i.newFields.length>0&&s.push(`${i.newFields.length} new column${i.newFields.length===1?"":"s"}`),!i.merged&&i.rowCount>0&&s.push("rows replaced (nothing to match them on)"),i.droppedUserRows>0&&s.push(`${i.droppedUserRows} row${i.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${i.droppedUserRows===1?"it":"them"} could not be carried over`),e.ui.dialogs.toast(`Refreshed "${n.name}" (${i.rowCount.toLocaleString()} rows)${s.length?` — ${s.join(", ")}`:""}.`,{kind:i.newFields.length>0||i.droppedUserRows>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function kS(e,t="auto"){const r=await(Ae.instance??TS()).open({presetKind:t,async listDatabases($){const C=St($);return ic(E=>e.backend.fetch(E),C.base)},async listTables(){const $=e.workspaceId();return(await e.store.tables.find()).filter(C=>C.workspaceId===$&&!C.source).map(C=>({id:C.id,name:C.name})).sort((C,E)=>C.name.localeCompare(E.name))}});if(!r)return;const{url:i,file:s,kind:o,dbChosen:a,editColumns:c,maxRows:d,mode:f,panel:m,target:b}=r,y=s?.name??i,v=c?($,C)=>Sm($,C):void 0;try{if(o==="sql"){await $S(e,{url:i,file:s,label:y,maxRows:d,mode:f,target:b,panel:m,editHook:v});return}const $=await _c(o);if($){const C=o==="json"?await xS(e,i,s,d,f):null;if(C?.isDump&&await e.ui.dialogs.confirm(`"${y}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Hl(e,C.text,y,{maxRows:d,editColumns:v,...s?{}:{originUrl:i}});return}const E=s?s.name:Ht(i),T=C?{kind:"text",text:C.text,name:E}:s?{kind:"file",file:s}:{kind:"url",url:i},Q=await ro(e,$,T,{mode:f,target:b,maxRows:d,panel:m,...C&&!s?{origin:{type:$.id,url:i}}:{},...v?{editColumns:P=>v(P)}:{}});$.ownToasts||_m(e,Q,y);return}if(f==="reference"&&!s){o==="datasette"?await ES(e,i):await Em(e,i,o);return}await po(e,i,{skipTablePicker:a,maxRows:d,editColumns:v})}catch($){e.ui.dialogs.toast(`Could not import ${y}: ${$.message}`,{kind:"error",title:"Import"})}}async function $S(e,t){const{url:n,file:r,label:i,maxRows:s,mode:o,target:a,panel:c,editHook:d}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const f=r?await r.text():await yi(e,n,`Reading ${Ht(n)}…`,s!=null?{maxBytes:null}:{});if(ec(f)){const y=await tc(e,f,{maxRows:s,target:a,...d?{editColumns:d}:{}});nc(e,y,i);return}const m=await _c("sql");if(!m)throw new Error("The SQL importer is not installed.");const b=await ro(e,m,{kind:"text",text:f,name:r?r.name:Ht(n)},{mode:o,target:a,maxRows:s,panel:c,...r?{}:{origin:{type:m.id,url:n}},...d?{editColumns:y=>d(y)}:{}});_m(e,b,i)}async function xS(e,t,n,r,i){if(i==="reference")return null;const s=n?await n.text():await yi(e,t,`Reading ${Ht(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:s,isDump:ql(JSON.parse(s))}}catch{return{text:s,isDump:!1}}}async function _c(e){const{registries:t}=await J();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function _m(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,a)=>o+a.rowCount,0),i=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${i} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const s=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${s?` — ${s}`:""}.`,{kind:"error",title:"Import"})}function SS(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(i=>i!=null&&typeof i=="object"&&!Array.isArray(i));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const i of["rows","records","data"])if(n(r[i]))return r[i];for(const i of Object.values(r))if(n(i))return i}return[]}function CS(e){const t=SS(e).slice(0,50),n=i=>Ll(i)?"array":typeof i=="number"?"number":typeof i=="boolean"?"boolean":"string",r=new Map;for(const i of t)for(const[s,o]of Object.entries(i))!r.has(s)&&o!=null?r.set(s,n(o)):r.has(s)||r.set(s,"string");return[...r.entries()].map(([i,s])=>({field:i,label:i,type:s}))}function _S(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function ES(e,t){const n=St(t),i=await uc(a=>e.backend.fetch(a),n,"Reference");if(i===null)return;if(i.length===0)throw new Error("No tables found to reference at that URL.");let s=0;const o=[];for(const a of i)try{await Em(e,_S(n.base,a.db,a.table),"json",{nameHint:`${a.db}/${a.table}`,silent:!0}),s++}catch(c){o.push(`${a.table}: ${c.message}`)}e.ui.dialogs.toast(`Referenced ${s} table${s===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function Em(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=r.nameHint??Ht(t),o=await yi(e,t,`Reading ${s}…`,{maxBytes:null}),a=n==="csv"?$r(o).columns:CS(o);if(a.length===0)throw new Error("No columns found in the referenced data.");const c=new Set((await e.store.tables.find()).filter(m=>m.workspaceId===i).map(m=>m.name.toLowerCase()));let d=s;for(let m=2;c.has(d.toLowerCase());m++)d=`${s}-${m}`;const f={id:Ee(),workspaceId:i,name:d,code:je(d),columns:a,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(f),r.silent||e.ui.dialogs.toast(`Referenced ${d} — live, read-only.`,{kind:"success",title:"Reference"})}function TS(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function IS(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(s=>s.startsWith("_")),i=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":i?"datasette":"json"}catch{return"json"}}function sh(e,t){if(t!=="datasette"||!e)return!1;try{const n=St(e);return!n.db&&!n.table}catch{return!1}}function AS(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let Ae=class extends xe{constructor(){super(...arguments),this.url="",this.kind="auto",this.pickedSample="",this.userSamples=[],this.hiddenSamples=[],this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,i=this.editColumns&&this.mode==="copy",s=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},a=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:i,maxRows:r,mode:a,panel:s,target:o});return}const c=n==="datasette"&&!!this.selectedDb&&sh(t,n),d=c?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:d,kind:n,dbChosen:c,editColumns:i,maxRows:r,mode:a,panel:s,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?AS(this.file.name):IS(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),Ae.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ae.instance===this&&(Ae.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await J(),t=[...e.importers].sort((i,s)=>(i.order??Number.MAX_SAFE_INTEGER)-(s.order??Number.MAX_SAFE_INTEGER)).map(i=>({id:i.id,label:i.label,panel:i.panel,kernel:i.supports?.kernel})),n=t.some(i=>i.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const i of e.importers)for(const s of i.accept??[])r.add(s);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.pickedSample="",this.loadSamples(),this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}get sampleList(){return sS(bS,this.userSamples,this.hiddenSamples)}get pickedEntry(){return this.pickedSample?this.sampleList.find(e=>e.key===this.pickedSample):void 0}onPresetChange(e){this.pickedSample=e.target.value,this.resetDbList();const t=this.pickedEntry;t&&(this.url=t.url,this.kind=t.kind??"auto")}async loadSamples(){try{const e=await J(),[t,n]=await Promise.all([e.store.settings.findOne(rh),e.store.settings.findOne(ih)]);this.userSamples=oS(t?.value),this.hiddenSamples=aS(n?.value)}catch{this.userSamples=[],this.hiddenSamples=[]}}async writeSamples(){const e=await J();await e.store.settings.upsert({name:rh,value:[...this.userSamples]}),await e.store.settings.upsert({name:ih,value:[...this.hiddenSamples]})}async saveAsSample(){const e=this.url.trim(),t=lt.instance;if(!e||!t)return;const n=this.pickedEntry?.label??Ht(e),r=await t.prompt("Name this sample — it appears in the Sample source list.",n,"Add to samples");if(r===null||!r.trim())return;const i=this.kind==="auto"?void 0:this.kind,s={id:Ee(),label:r.trim(),url:e,...i?{kind:i}:{}};this.userSamples=cS(this.userSamples,s),this.pickedSample=`u:${s.id}`,await this.writeSamples()}async deletePickedSample(){const e=this.pickedEntry,t=lt.instance;!e||!t||!await t.confirm(`Delete the sample "${e.label}"? The URL stays in the box.`,"Delete sample")||(e.own?this.userSamples=uS(this.userSamples,e.key.slice(2)):this.hiddenSamples=dS(this.hiddenSamples,e.url),this.pickedSample="",await this.writeSamples())}async restoreSamples(){this.hiddenSamples=[],await this.writeSamples()}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.pickedSample="",this.resetDbList())}renderSamples(){const e=this.sampleList,t=this.pickedEntry,n=this.userSamples.length>0;return k`
      <label>
        Sample source
        <div class="with-btn">
          <select data-testid="import-sample" .value=${this.pickedSample} @change=${r=>this.onPresetChange(r)}>
            <option value="" ?selected=${this.pickedSample===""}>${e.length===0?"— no samples —":"— choose a sample —"}</option>
            ${n?k`
                  <optgroup label="Shipped">${e.filter(r=>!r.own).map(r=>k`<option value=${r.key} ?selected=${r.key===this.pickedSample}>${r.label}</option>`)}</optgroup>
                  <optgroup label="Yours">${e.filter(r=>r.own).map(r=>k`<option value=${r.key} ?selected=${r.key===this.pickedSample}>${r.label}</option>`)}</optgroup>
                `:e.map(r=>k`<option value=${r.key} ?selected=${r.key===this.pickedSample}>${r.label}</option>`)}
          </select>
          <button
            type="button"
            class="icon danger"
            data-testid="sample-delete"
            title=${t?`Delete the sample "${t.label}"`:"Pick a sample to delete it"}
            ?disabled=${!t}
            @click=${()=>void this.deletePickedSample()}
          >
            🗑
          </button>
        </div>
      </label>
      ${this.hiddenSamples.length>0?k`<p class="hint">
            ${this.hiddenSamples.length} shipped sample${this.hiddenSamples.length===1?"":"s"} deleted.
            <button type="button" class="link" data-testid="sample-restore" @click=${()=>void this.restoreSamples()}>Restore samples</button>
          </p>`:ee}
    `}renderDbPicker(){return!this.listDatabases||!sh(this.url.trim(),this.resolvedKind)?ee:k`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?k`
                  <option value="" ?selected=${this.selectedDb===""}>— all databases (choose tables next) —</option>
                  ${this.dbList.map(e=>k`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:k`<option value="">— not loaded —</option>`}
          </select>
          <button type="button" class="ghost db-load" ?disabled=${this.dbLoading} @click=${()=>void this.loadDatabases()}>
            ${this.dbLoading?"Loading…":this.dbList?"Refresh":"List databases"}
          </button>
        </div>
      </label>
      ${this.dbError?k`<p class="hint error">${this.dbError}</p>`:ee}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return ee;const e=this.targetKind!=="new";return k`
      <label>
        Import into
        <div class="row db-row">
          <select
            data-testid="import-target"
            .value=${this.targetKind}
            @change=${t=>{this.targetKind=t.target.value,this.targetKind!=="new"&&!this.targetTableId&&(this.targetTableId=this.tables[0]?.id??"")}}
          >
            <option value="new" ?selected=${this.targetKind==="new"}>A new table</option>
            <option value="append" ?selected=${this.targetKind==="append"}>Append to an existing table</option>
            <option value="overwrite" ?selected=${this.targetKind==="overwrite"}>Replace the rows of an existing table</option>
          </select>
          ${e?k`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?k`<option value="">— no tables yet —</option>`:this.tables.map(t=>k`<option value=${t.id} ?selected=${t.id===this.targetTableId}>${t.name}</option>`)}
              </select>`:ee}
        </div>
      </label>
      ${e?k`<p class="hint">The table keeps its own columns. Values map onto them the way the format requires — a CSV by column position, so its header names need not match.</p>`:ee}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===ee?ee:k`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return k`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
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
                ${this.formats.map(e=>k`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
              </select>
            </label>

            <fieldset class="block">
              <legend>Source and options</legend>
              ${this.renderSamples()}

              <label>
                URL
                <div class="with-btn">
                  <input
                    type="text"
                    autofocus
                    placeholder="https://… (JSON dump, .csv/.tsv file, or Datasette table)"
                    ?disabled=${!!this.file}
                    .value=${this.url}
                    @input=${e=>{this.url=e.target.value,this.pickedSample="",this.file=null,this.resetDbList()}}
                  />
                  <!-- Next to the URL, not next to the list: it acts on what is in
                       the box, and that is the thing it should sit beside. -->
                  <button type="button" class="icon" data-testid="sample-add" title="Add this URL to the sample list" ?disabled=${!this.url.trim()} @click=${()=>void this.saveAsSample()}>+</button>
                </div>
              </label>

              <label>
                …or upload a file
                <input type="file" accept=${this.acceptAttr} @change=${e=>this.onFileChange(e)} />
              </label>
              ${this.file?k`<p class="hint">Importing <strong>${this.file.name}</strong> as ${this.resolvedKind.toUpperCase()}.</p>`:ee}

              <label>
                Import mode
                <div class="row mode-row">
                  <label class="check">
                    <input type="radio" name="import-mode" .checked=${this.mode==="copy"} @change=${()=>this.mode="copy"} />
                    Copy — a local, editable, synced snapshot you can refresh
                  </label>
                  <label class="check">
                    <input type="radio" name="import-mode" ?disabled=${!!this.file} .checked=${this.mode==="reference"} @change=${()=>this.mode="reference"} />
                    Reference — live, read-only; rows never stored or synced
                  </label>
                </div>
              </label>
              ${this.file?k`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:ee} ${this.renderTarget()}

              <label class="check">
                <input type="checkbox" ?disabled=${this.mode==="reference"} .checked=${this.editColumns} @change=${e=>this.editColumns=e.target.checked} />
                Edit columns before import (rename / hide / fix duplicate names)
              </label>
              ${this.mode==="reference"?k`<p class="hint">A Reference keeps the source's own schema, so there is nothing to edit.</p>`:ee}

              <label>
                Limit rows (optional)
                <input type="number" min="1" step="1" placeholder="import all rows" .value=${this.maxRowsInput} @input=${e=>this.maxRowsInput=e.target.value} />
              </label>
            </fieldset>

            ${this.renderPluginBlock()}

            <p class="hint">
              Paste any URL or pick a sample above — a JSON dump, a <code>.csv</code> or <code>.tsv</code> file, or a Datasette table/database/instance. For a Datasette instance root, click
              <em>List databases</em> to pick one first. Multi-table sources let you choose which tables to import; Datasette tables are capped at 10,000 rows each.
            </p>
          </div>
        </form>
      </dialog>
      ${ee}
    `}};Ae.instance=null;Ae.styles=[mt,Ce`
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
      /* A control with a small button beside it: the sample list + its trash,
         the URL box + its "add this to the samples" plus. */
      .with-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .with-btn select,
      .with-btn input[type='text'] {
        flex: 1;
        min-width: 0;
      }
      button.icon {
        background: transparent;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        padding: 0.3rem 0.5rem;
        font-size: 1rem;
        line-height: 1;
        cursor: pointer;
        flex: 0 0 auto;
      }
      button.icon:hover:not([disabled]) {
        border-color: #bfdbfe;
        background: #eff6ff;
      }
      button.icon.danger:hover:not([disabled]) {
        border-color: #fecaca;
        background: #fef2f2;
      }
      button.icon[disabled] {
        opacity: 0.4;
        cursor: default;
      }
      button.link {
        background: transparent;
        border: 0;
        padding: 0;
        color: #2563eb;
        font: inherit;
        font-size: 0.78rem;
        text-decoration: underline;
        cursor: pointer;
        white-space: nowrap;
        flex: 0 0 auto;
      }
      button.link[disabled] {
        color: #9ca3af;
        text-decoration: none;
        cursor: default;
      }
    `];qe([z()],Ae.prototype,"url",2);qe([z()],Ae.prototype,"kind",2);qe([z()],Ae.prototype,"pickedSample",2);qe([z()],Ae.prototype,"userSamples",2);qe([z()],Ae.prototype,"hiddenSamples",2);qe([z()],Ae.prototype,"dbList",2);qe([z()],Ae.prototype,"dbLoading",2);qe([z()],Ae.prototype,"dbError",2);qe([z()],Ae.prototype,"selectedDb",2);qe([z()],Ae.prototype,"editColumns",2);qe([z()],Ae.prototype,"file",2);qe([z()],Ae.prototype,"maxRowsInput",2);qe([z()],Ae.prototype,"mode",2);qe([z()],Ae.prototype,"targetKind",2);qe([z()],Ae.prototype,"targetTableId",2);qe([z()],Ae.prototype,"tables",2);qe([z()],Ae.prototype,"formats",2);qe([z()],Ae.prototype,"acceptAttr",2);Ae=qe([Oe("import-dialog")],Ae);const RS=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Ae},init:yS,meta:wS},Symbol.toStringTag,{value:"Module"})),OS={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},DS=6e4;let oh=null,pl=!1;const Oa=new Map;function LS(e){oh===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(oh=setInterval(()=>{Tm(e)},DS)))}async function Tm(e){if(pl)return;const t=e.workspaceId();if(!t)return;const n=await Ap(e);if(n)try{await MS(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function MS(e,t,n){const r=await ko(e),i=await Rp(e,n),s=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(s.status===404){await ah(e,t,n,r,null);return}if(!s.ok)return;const o=$o(s.headers.get("ETag")),a=await s.text();if(Dd(r)===Dd(a)){o&&o!==i&&await Un(e,n,o);return}if(o&&o===i){await ah(e,t,n,r,i);return}if(!(o&&Oa.get(n)===o)){pl=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const d=JSON.parse(a),f=await Op(e,n,d);o&&await Un(e,n,o),Oa.delete(n),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&Oa.set(n,o)}finally{pl=!1}}}async function ah(e,t,n,r,i){const s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:s,body:r});if(o.ok){const a=$o(o.headers.get("ETag"));a&&await Un(e,n,a);return}if(o.status===412){const a=await o.json().catch(()=>({}));a.currentEtag&&await Un(e,n,a.currentEtag)}}const Im=Object.freeze(Object.defineProperty({__proto__:null,load:LS,meta:OS,tick:Tm},Symbol.toStringTag,{value:"Module"})),us="(empty)",lh="Other",PS={categories:[],series:[],rowCount:0,truncated:!1,skipped:0};function ch(e={}){return{...PS,categories:[],series:[],...e}}function or(e){return e==null||typeof e=="string"&&e.trim()===""}function Am(e){if(typeof e=="number")return Number.isFinite(e)?e:null;if(typeof e=="string"){const t=e.trim();if(t==="")return null;const n=Number(t);return Number.isFinite(n)?n:null}return null}function NS(e,t){const n=typeof e=="string"||typeof e=="number"?e:null;if(n===null)return null;const r=typeof n=="string"?/^(\d{4})-(\d{2})-(\d{2})$/.exec(n):null;let i,s,o;if(r)i=Number(r[1]),s=Number(r[2])-1,o=Number(r[3]);else{const c=new Date(n);if(Number.isNaN(c.getTime()))return null;i=c.getFullYear(),s=c.getMonth(),o=c.getDate()}const a=c=>String(c).padStart(2,"0");switch(t){case"year":return String(i);case"quarter":return`${i}-Q${Math.floor(s/3)+1}`;case"month":return`${i}-${a(s+1)}`;case"week":{const c=new Date(Date.UTC(i,s,o)),d=c.getUTCDay()||7;c.setUTCDate(c.getUTCDate()+4-d);const f=Date.UTC(c.getUTCFullYear(),0,1),m=Math.ceil(((c.getTime()-f)/864e5+1)/7);return`${c.getUTCFullYear()}-W${a(m)}`}case"day":default:return`${i}-${a(s+1)}-${a(o)}`}}function jS(e,t){const n=Am(e);if(n===null||!(t>0))return null;const r=Math.floor(n/t)*t,i=s=>Number(s.toPrecision(12));return{key:i(r),label:`${i(r)}–${i(r+t)}`}}function zS(e,t,n){const r=e.data[t];if(n?.type==="array"||Array.isArray(r)){const i=ft(r);return i.length>0?i:[null]}return[r]}function FS(e,t){if(e==="count")return{value:t.length,skipped:0};if(e==="countDistinct")return{value:new Set(t.map(s=>or(s)?"":String(s))).size,skipped:0};const n=[];let r=0;for(const i of t){if(or(i))continue;const s=Am(i);s===null?r++:n.push(s)}if(n.length===0)return{value:null,skipped:r};switch(e){case"sum":return{value:n.reduce((i,s)=>i+s,0),skipped:r};case"avg":return{value:n.reduce((i,s)=>i+s,0)/n.length,skipped:r};case"min":return{value:Math.min(...n),skipped:r};case"max":return{value:Math.max(...n),skipped:r};default:return{value:null,skipped:r}}}function US(e,t){return e==="count"?"Count":e==="countDistinct"?`Distinct ${t}`:`${{sum:"Sum",avg:"Average",min:"Min",max:"Max"}[e]} of ${t}`}function BS(e,t,n,r,i={}){const s=i.truncated===!0,o=new Map(t.map(K=>[K.field,K])),a=r.measures??[],c=r.groupBy??[],d=[];for(const K of c){const ie=n[K];(!ie||!o.has(ie))&&d.push(K)}for(const K of a){if(K.fn==="count")continue;const ie=n[K.channel];(!ie||!o.has(ie))&&d.push(K.channel)}if(d.length>0){const K=[...new Set(d)];return ch({truncated:s,rowCount:e.length,error:`No column mapped for ${K.length>1?"channels":"channel"} ${K.join(", ")}.`})}if(a.length===0)return ch({truncated:s,rowCount:e.length,error:"No measure configured."});const f=r.bin?.channel,m=r.bin?.width,b=r.bin?.unit,y=new Map;let v=0;for(const K of e){let ie=[{values:[],labels:[],sortValue:void 0}];for(const de of c){const H=n[de],te=o.get(H),q=zS(K,H,te),Y=[];for(const ae of ie)for(const we of q){let $e,Le=we;if(f===de)if(b){const pe=NS(we,b);pe===null?($e=us,Le=null):($e=pe,Le=pe)}else if(m){const pe=jS(we,m);pe===null?($e=us,Le=null):($e=pe.label,Le=pe.key)}else $e=or(we)?us:String(we);else $e=or(we)?us:String(we);Y.push({values:[...ae.values,we],labels:[...ae.labels,$e],sortValue:ae.labels.length===0?Le:ae.sortValue})}ie=Y}for(const de of ie){const H=de.labels.join("  ");let te=y.get(H);te||(te={key:H,labels:de.labels,values:de.values,measured:a.map(()=>[]),sortValue:de.sortValue},y.set(H,te)),a.forEach((q,Y)=>{if(q.fn==="count"){te.measured[Y]?.push(1);return}const ae=n[q.channel],$e=o.get(ae)?.type==="array"||Array.isArray(K.data[ae])?ft(K.data[ae]):[K.data[ae]];for(const Le of $e)te.measured[Y]?.push(Le)})}}const C=[...y.values()].map(K=>{const ie=a.map((de,H)=>{const te=FS(de.fn,K.measured[H]??[]);return v+=te.skipped,te.value});return{bucket:K,points:ie}}),E=K=>K.points[0]??Number.NEGATIVE_INFINITY,T=(K,ie)=>K.key.localeCompare(ie.key),Q=c.length>0?o.get(n[c[0]])?.type:void 0,P=r.sort??"category";P==="value"?C.sort((K,ie)=>E(K)-E(ie)||T(K.bucket,ie.bucket)):P==="valueDesc"?C.sort((K,ie)=>E(ie)-E(K)||T(K.bucket,ie.bucket)):C.sort((K,ie)=>{const de=K.bucket.sortValue,H=ie.bucket.sortValue,te=or(de),q=or(H);return te!==q?te?1:-1:te&&q?T(K.bucket,ie.bucket):r.bin&&r.bin.channel===c[0]?typeof de=="number"&&typeof H=="number"?de-H||T(K.bucket,ie.bucket):String(de).localeCompare(String(H))||T(K.bucket,ie.bucket):um(de,H,Q??"string")||T(K.bucket,ie.bucket)});let ne=C.map(K=>({key:K.bucket.key,label:K.bucket.labels.join(" · "),values:K.bucket.values})),W=C.map(K=>K.points);const I=r.topN;if(I&&I>0&&ne.length>I){const K=[...C].sort((q,Y)=>E(Y)-E(q)||T(q.bucket,Y.bucket)),ie=new Set(K.slice(0,I).map(q=>q.bucket.key)),de=[],H=[],te=[];ne.forEach((q,Y)=>{ie.has(q.key)?(de.push(q),H.push(W[Y]??[])):te.push(W[Y]??[])}),te.length>0&&(de.push({key:lh,label:lh,values:[]}),H.push(a.map((q,Y)=>{const ae=te.map(we=>we[Y]).filter(we=>we!=null);return ae.length===0?null:q.fn==="min"?Math.min(...ae):q.fn==="max"?Math.max(...ae):ae.reduce((we,$e)=>we+$e,0)}))),ne=de,W=H}const V=a.map((K,ie)=>{const de=n[K.channel],H=de?o.get(de)?.label??de:K.channel??"Value";return{key:`${K.channel}:${K.fn}`,label:US(K.fn,H),points:W.map(te=>te[ie]??null)}});return{categories:ne,series:V,rowCount:e.length,truncated:s,skipped:v}}const qS=new Set(["a","about","above","after","again","all","am","an","and","any","are","as","at","be","because","been","before","being","below","between","both","but","by","can","cannot","could","did","do","does","doing","down","during","each","few","for","from","further","had","has","have","having","he","her","here","hers","herself","him","himself","his","how","i","if","in","into","is","it","its","itself","just","me","more","most","my","myself","no","nor","not","now","of","off","on","once","only","or","other","our","ours","ourselves","out","over","own","same","she","should","so","some","such","than","that","the","their","theirs","them","themselves","then","there","these","they","this","those","through","to","too","under","until","up","very","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","you","your","yours","yourself","yourselves","s","t","don","isn","aren","wasn","weren","doesn","didn","won","shouldn","couldn","wouldn"]);function HS(e){const t=[],n=/\p{L}[\p{L}\p{N}]*(?:['’-][\p{L}\p{N}]+)*|\p{N}+/gu;for(const r of e.matchAll(n))t.push(r[0]);return t}function VS(e,t={}){const n=t.minLength??3,r=t.maxTerms??120,i=t.stopWords??qS,s=t.includeNumbers??!1,o=new Map,a=d=>{for(const f of HS(d)){const m=f.toLocaleLowerCase();if(m.length<n||i.has(m)||!s&&/^\p{N}+$/u.test(m))continue;let b=o.get(m);b||(b={total:0,spellings:new Map},o.set(m,b)),b.total++,b.spellings.set(f,(b.spellings.get(f)??0)+1)}};for(const d of e)if(typeof d=="string")a(d);else if(typeof d=="number"&&Number.isFinite(d))a(String(d));else if(Array.isArray(d))for(const f of d)(typeof f=="string"||typeof f=="number")&&a(String(f));const c=[...o.entries()].map(([d,f])=>{let m=d,b=-1;for(const[y,v]of f.spellings)(v>b||v===b&&y<m)&&(m=y,b=v);return{term:m,count:f.total}});return c.sort((d,f)=>f.count-d.count||d.term.localeCompare(f.term)),c.slice(0,r)}const Ec="viz",Tc="https://tile.openstreetmap.org/{z}/{x}/{y}.png",Ic="© OpenStreetMap contributors";async function KS(e){const t=await e.get(Ec,"tileUrl");return typeof t=="string"&&t.trim()!==""?t.trim():Tc}async function WS(e){const t=await e.get(Ec,"tileAttribution");return typeof t=="string"&&t.trim()!==""?t.trim():Ic}const GS=["#2563eb","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a","#ca8a04","#dc2626"];function An(e,t,n){const r=e.getPropertyValue(t).trim();return r===""?n:r}function Ac(e){const t=getComputedStyle(e),n=An(t,"--viz-palette","").split(",").map(o=>o.trim()).filter(o=>o!==""),i=(n.length>0?n:GS).map((o,a)=>An(t,`--viz-color-${a+1}`,o)),s=Number.parseFloat(An(t,"--viz-font-size",""));return{palette:i,grid:An(t,"--viz-grid","rgba(127,127,127,0.25)"),text:An(t,"--viz-text",t.color||"#111827"),mutedText:An(t,"--viz-muted-text","rgba(127,127,127,0.9)"),fontFamily:An(t,"--viz-font-family",t.fontFamily||"system-ui, sans-serif"),fontSize:Number.isFinite(s)&&s>0?s:12}}function YS(e,t){const n=/^#([0-9a-f]{6})$/i.exec(e.trim());if(n){const i=Number.parseInt(n[1],16);return`rgba(${i>>16&255}, ${i>>8&255}, ${i&255}, ${t})`}const r=/^#([0-9a-f]{3})$/i.exec(e.trim());if(r){const[i,s,o]=[...r[1]].map(a=>Number.parseInt(a+a,16));return`rgba(${i}, ${s}, ${o}, ${t})`}return e}let ds=null;async function QS(){return ds||(ds=(async()=>{const e=await Ie(()=>import("./chart-Cns13J0s.js"),[]);return e.Chart.register(e.BarController,e.BarElement,e.LineController,e.LineElement,e.PointElement,e.PieController,e.ArcElement,e.CategoryScale,e.LinearScale,e.Tooltip,e.Legend),e.Chart})(),ds)}const uh=new Intl.NumberFormat;class Do extends xe{constructor(){super(...arguments),this.kind="bar",this.data={categories:[],series:[]},this.options={},this.emptyText="No data to chart.",this.chart=null,this.ro=null,this.generation=0}static{this.styles=Ce`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 80px;
      container-type: size;
    }
    .wrap {
      position: absolute;
      inset: 0;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0.5rem 1rem;
      text-align: center;
      font: 12px/1.5 var(--viz-font-family, system-ui, sans-serif);
      color: var(--viz-muted-text, rgba(127, 127, 127, 0.9));
    }
    /* The accessible equivalent of the canvas. Visually hidden rather than
       display:none, so a screen reader reaches it — a canvas has no readable
       content of its own. Doubles as the copy-the-numbers affordance. */
    .a11y {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `}static get properties(){return{kind:{type:String},data:{attribute:!1},options:{attribute:!1},emptyText:{type:String}}}connectedCallback(){super.connectedCallback(),this.ro=new ResizeObserver(()=>this.chart?.resize()),this.ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.generation++,this.ro?.disconnect(),this.ro=null,this.chart?.destroy(),this.chart=null}updated(t){(t.has("data")||t.has("options")||t.has("kind"))&&this.draw()}get hasData(){return this.data.categories.length>0&&this.data.series.length>0}buildConfig(t){const n=Ac(this),r=this.options,i=this.kind==="pie",s=this.kind==="line",o=this.kind==="bar",a=r.legend??(i?!0:this.data.series.length>1);t.defaults.font.family=n.fontFamily,t.defaults.font.size=n.fontSize,t.defaults.color=n.text;const c=this.data.series.map((m,b)=>{const y=n.palette[b%n.palette.length]??"#2563eb";return i?{label:m.label,data:m.points,backgroundColor:this.data.categories.map((v,$)=>n.palette[$%n.palette.length]??y),borderColor:n.grid,borderWidth:1}:{label:m.label,data:m.points,backgroundColor:s?YS(y,r.area?.25:0):y,borderColor:y,borderWidth:s?2:0,fill:s?r.area??!1:!1,tension:s&&r.smooth?.35:0,pointRadius:s?2:0,spanGaps:!1}}),d={beginAtZero:r.beginAtZero??!0,stacked:r.stacked??!1,grid:{color:n.grid},border:{color:n.grid},ticks:{color:n.text,callback:m=>typeof m=="number"?uh.format(m):String(m)},title:r.yTitle?{display:!0,text:r.yTitle,color:n.text}:{display:!1}},f={stacked:r.stacked??!1,grid:{display:!1,color:n.grid},border:{color:n.grid},ticks:{color:n.text,autoSkip:!0,maxRotation:0},title:r.xTitle?{display:!0,text:r.xTitle,color:n.text}:{display:!1}};return{type:i?"pie":s?"line":"bar",data:{labels:this.data.categories,datasets:c},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,...o?{indexAxis:"y"}:{},plugins:{legend:{display:a,labels:{color:n.text}},tooltip:{enabled:!0}},...i?{}:{scales:o?{x:d,y:f}:{x:f,y:d}}}}}async draw(){const t=++this.generation;if(!this.hasData){this.chart?.destroy(),this.chart=null;return}const n=await QS();if(t!==this.generation||!this.isConnected)return;const r=this.renderRoot.querySelector("canvas");r&&(this.chart?.destroy(),this.chart=new n(r,this.buildConfig(n)))}summary(){const t=this.data.categories.length,n=this.data.series.map(r=>r.label).join(", ");return`${this.kind} chart, ${t} ${t===1?"category":"categories"}${n?`, showing ${n}`:""}`}render(){return this.hasData?k`
      <div class="wrap" role="img" aria-label=${this.summary()}>
        <canvas></canvas>
      </div>
      <table class="a11y">
        <caption>
          ${this.summary()}
        </caption>
        <thead>
          <tr>
            <th scope="col">Category</th>
            ${this.data.series.map(t=>k`<th scope="col">${t.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.data.categories.map((t,n)=>k`
              <tr>
                <th scope="row">${t}</th>
                ${this.data.series.map(r=>k`<td>${r.points[n]==null?"":uh.format(r.points[n])}</td>`)}
              </tr>
            `)}
        </tbody>
      </table>
      ${ee}
    `:k`<div class="empty">${this.emptyText}</div>`}}class JS extends Do{constructor(){super(...arguments),this.kind="bar"}}class XS extends Do{constructor(){super(...arguments),this.kind="column"}}class ZS extends Do{constructor(){super(...arguments),this.kind="line"}}class eC extends Do{constructor(){super(...arguments),this.kind="pie"}}function tC(){const e=[["viz-bar-chart",JS],["viz-column-chart",XS],["viz-line-chart",ZS],["viz-pie-chart",eC]];for(const[t,n]of e)customElements.get(t)||customElements.define(t,n)}let hs=null,dh=!1;async function nC(){return hs||(hs=(async()=>{const[e]=await Promise.all([Ie(()=>import("./leaflet-src-BRy-kW7y.js").then(t=>t.l),[]),rC()]);return e.default??e})(),hs)}async function rC(){if(dh||typeof document>"u")return;dh=!0;const e=(await Ie(async()=>{const{default:n}=await import("./leaflet-xBcqXExc.js");return{default:n}},[])).default,t=document.createElement("style");t.dataset.vizLeaflet="",t.textContent=e,document.head.append(t)}class iC extends xe{constructor(){super(...arguments),this.points=[],this.options={},this.emptyText="No points to map.",this.map=null,this.tiles=null,this.markers=[],this.ro=null,this.generation=0,this.tileError=!1}createRenderRoot(){return this}static get properties(){return{points:{attribute:!1},options:{attribute:!1},emptyText:{type:String},tileError:{state:!0}}}connectedCallback(){super.connectedCallback(),this.style.display="block",this.style.position="relative",this.style.height="100%",this.style.minHeight="120px",this.ro=new ResizeObserver(()=>this.map?.invalidateSize()),this.ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.generation++,this.ro?.disconnect(),this.ro=null,this.map?.remove(),this.map=null,this.tiles=null,this.markers=[]}updated(t){(t.has("points")||t.has("options"))&&this.draw()}async draw(){const t=++this.generation,n=this.querySelector(".map");if(!n||this.points.length===0)return;const r=await nC();if(t!==this.generation||!this.isConnected)return;const i=Ac(this);this.map||(this.map=r.map(n,{attributionControl:!0})),this.tiles?this.options.tileUrl&&this.tiles.options.attribution!==void 0&&this.tiles.setUrl(this.options.tileUrl):(this.tiles=r.tileLayer(this.options.tileUrl??"",{attribution:this.options.attribution??"",maxZoom:19}),this.tiles.on("tileerror",()=>{this.tileError||(this.tileError=!0)}),this.tiles.addTo(this.map));for(const f of this.markers)f.remove();this.markers=[];const s=this.points.map(f=>f.weight??0).filter(f=>Number.isFinite(f)&&f>0),o=s.length>0?Math.max(...s):0,a=this.options.radius??6,c=i.palette[0]??"#2563eb";for(const f of this.points){const m=this.options.scaleByWeight&&o>0?Math.sqrt((f.weight??0)/o):1,b=r.circleMarker([f.lat,f.lon],{radius:Math.max(2,a*(m||1)),color:c,weight:1,fillColor:c,fillOpacity:.6});f.label&&b.bindTooltip(String(f.label)),b.addTo(this.map),this.markers.push(b)}const d=r.latLngBounds(this.points.map(f=>[f.lat,f.lon]));d.isValid()&&this.map.fitBounds(d,{padding:[24,24],maxZoom:12}),this.map.invalidateSize()}render(){return this.points.length===0?k`<div style="display:flex;align-items:center;justify-content:center;height:100%;padding:.5rem 1rem;text-align:center;font:12px/1.5 system-ui,sans-serif;color:rgba(127,127,127,.9)">
        ${this.emptyText}
      </div>`:k`
      <div
        class="map"
        role="img"
        aria-label="Map of ${this.points.length} ${this.points.length===1?"point":"points"}"
        style="position:absolute;inset:0;background:var(--viz-map-bg, #e5e7eb)"
      ></div>
      ${this.tileError?k`<div role="status" style="position:absolute;left:0;right:0;bottom:0;z-index:500;padding:3px 8px;font:11px/1.35 system-ui,sans-serif;color:#92400e;background:rgba(255,251,235,.95)">
            Map tiles could not be loaded — the points are still plotted. Check the tile URL in Settings → Visualizations, or your connection.
          </div>`:ee}
    `}}function sC(){customElements.get("viz-point-map")||customElements.define("viz-point-map",iC)}class oC extends xe{constructor(){super(...arguments),this.terms=[],this.options={},this.emptyText="No words to show.",this.placed=[],this.w=0,this.h=0,this.generation=0,this.ro=null}static{this.styles=Ce`
    :host {
      display: block;
      position: relative;
      height: 100%;
      min-height: 100px;
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    text {
      font-family: var(--viz-font-family, system-ui, sans-serif);
      font-weight: 600;
      cursor: default;
    }
    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0.5rem 1rem;
      text-align: center;
      font: 12px/1.5 var(--viz-font-family, system-ui, sans-serif);
      color: var(--viz-muted-text, rgba(127, 127, 127, 0.9));
    }
  `}static get properties(){return{terms:{attribute:!1},options:{attribute:!1},emptyText:{type:String},placed:{state:!0}}}connectedCallback(){super.connectedCallback(),this.ro=new ResizeObserver(()=>{const t=this.getBoundingClientRect();Math.abs(t.width-this.w)<8&&Math.abs(t.height-this.h)<8||this.layout()}),this.ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.generation++,this.ro?.disconnect(),this.ro=null}updated(t){(t.has("terms")||t.has("options"))&&this.layout()}async layout(){const t=++this.generation;if(this.terms.length===0){this.placed=[];return}const n=this.getBoundingClientRect(),r=Math.max(80,Math.floor(n.width)),i=Math.max(60,Math.floor(n.height)),s=await Ie(()=>import("./index-DQPoSnqX.js").then(y=>y.i),[]);if(t!==this.generation||!this.isConnected)return;const o=s.default??s,a=this.terms.map(y=>y.count),c=Math.min(...a),d=Math.max(...a),f=this.options.minFontSize??12,m=this.options.maxFontSize??Math.max(f+6,Math.floor(Math.min(r,i)/5)),b=y=>{const v=d===c?1:(Math.sqrt(y)-Math.sqrt(c))/(Math.sqrt(d)-Math.sqrt(c));return Math.round(f+v*(m-f))};await new Promise(y=>{o().size([r,i]).words(this.terms.map(v=>({text:v.term,size:b(v.count),count:v.count}))).padding(2).rotate(()=>this.options.rotate&&Math.round(Math.random())===1?90:0).font("system-ui, sans-serif").fontWeight("600").fontSize(v=>v.size??f).on("end",v=>{t===this.generation&&(this.placed=v,this.w=r,this.h=i),y()}).start()})}render(){if(this.terms.length===0)return k`<div class="empty">${this.emptyText}</div>`;const t=Ac(this),n=this.w||300,r=this.h||200,i=`Word cloud of ${this.terms.length} ${this.terms.length===1?"term":"terms"}, largest ${this.terms[0]?.term??""}`;return k`
      <svg viewBox="0 0 ${n} ${r}" role="img" aria-label=${i} preserveAspectRatio="xMidYMid meet">
        <g transform="translate(${n/2},${r/2})">
          ${this.placed.map((s,o)=>k`
              <text text-anchor="middle" transform="translate(${s.x},${s.y}) rotate(${s.rotate})" font-size=${s.size} fill=${t.palette[o%t.palette.length]??t.text}>
                <title>${s.text}: ${s.count.toLocaleString()}</title>
                ${s.text}
              </text>
            `)}
        </g>
      </svg>
      ${ee}
    `}}function aC(){customElements.get("viz-word-cloud")||customElements.define("viz-word-cloud",oC)}var lC=Object.defineProperty,cC=Object.getOwnPropertyDescriptor,gn=(e,t,n,r)=>{for(var i=r>1?void 0:r?cC(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&lC(t,n,i),i};tC();sC();aC();let Vt=class extends xe{constructor(){super(...arguments),this.viewInstanceId="",this.instance=null,this.template=null,this.columns=[],this.frame=null,this.error="",this.loaded=!1,this.rows=[],this.rowColl=null,this.matchingTotal=0,this.truncated=!1,this.searching=!1,this.tileUrl=Tc,this.tileAttribution=Ic,this.registries=null}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.teardown()}teardown(){this.instUnsub?.(),this.rowsUnsub?.(),this.tableUnsub?.(),this.dockUnsub?.(),this.instUnsub=void 0,this.rowsUnsub=void 0,this.tableUnsub=void 0,this.dockUnsub=void 0,this.rowColl=null}async reload(){this.teardown(),await this.load()}get spec(){const e=this.template?.viz?.kind;return e?this.registries?.visualizations.get(e)??null:null}async load(){if(!this.viewInstanceId)return;const e=await J();this.registries=e.registries,this.instUnsub=e.store.viewInstances.subscribe(n=>{const r=n.find(s=>s.id===this.viewInstanceId);if(!r)return;const i=r.tableId!==this.instance?.tableId||r.templateId!==this.instance?.templateId;this.instance=r,i?this.bind():this.refreshTemplateThenRecompute()});const t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This visualization no longer exists.",this.loaded=!0;return}this.instance=t,await this.bind()}async refreshTemplateThenRecompute(){const e=await J(),t=this.instance;t&&(this.template=await e.store.viewTemplates.findOne(t.templateId)??null,this.recompute())}async bind(){const e=await J(),t=this.instance;if(!t)return;if(this.rowsUnsub?.(),this.tableUnsub?.(),this.dockUnsub?.(),this.tileUrl=await KS(e.api.settings),this.tileAttribution=await WS(e.api.settings),this.template=await e.store.viewTemplates.findOne(t.templateId)??null,!this.template){this.error="The template this visualization uses is gone.",this.loaded=!0;return}if(this.template.kind!=="viz"||!this.template.viz){this.error="This template is not a visualization.",this.loaded=!0;return}const n=await e.store.tables.findOne(t.tableId);if(!n){this.error="The table this visualization reads is gone.",this.loaded=!0;return}if(this.applyTable(n),this.tableUnsub=e.store.tables.subscribe(r=>{const i=r.find(s=>s.id===this.instance?.tableId);i&&(this.applyTable(i),this.recompute())}),t.dock){const r=t.dock.host.kind==="view"?t.dock.host.viewInstanceId:t.dock.host.tableId;this.dockUnsub=v1(r,i=>this.acceptPublishedRows(i)),this.loaded=!0;return}this.rowColl=e.store.rows(t.tableId),this.rowsUnsub=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows()}applyTable(e){this.columns=e.columns??[]}acceptPublishedRows(e){this.rows=[...e.rows],this.matchingTotal=e.total,this.truncated=e.truncated,this.searching=e.searching,this.loaded=!0,this.recompute()}async loadRows(){const e=this.rowColl,t=this.instance;if(!e||!t)return;const n={columns:this.columns,filters:{...t.filters??{},...t.pillFilters??{}},sort:ul(t),...t.limit&&t.limit>0?{limit:t.limit}:{}},r=await Ei(e,n,jn);this.rows=r.rows,this.matchingTotal=r.total,this.truncated=r.truncated===!0,this.searching=!1,this.loaded=!0,this.recompute()}get aggregate(){return this.template?.viz?.aggregate??this.spec?.defaultAggregate??null}evaluatedRows(){const e=this.columns.filter(t=>typeof t.script=="string"&&t.script.trim()!=="");return e.length===0?this.rows:this.rows.map(t=>{const n={...t.data};for(const r of e){const i=xr(r.script,t.data);n[r.field]=i.ok?i.value:null}return{...t,data:n}})}recompute(){const e=this.instance;if(this.spec?.data==="rows"){this.frame=null,this.requestUpdate();return}const t=this.aggregate;if(!t||!e){this.frame=null;return}this.frame=BS(this.evaluatedRows(),this.columns,e.mapping??{},t,{truncated:this.truncated})}chartData(){const e=this.frame;return e?{categories:e.categories.map(t=>t.label),series:e.series.map(t=>({label:t.label,points:t.points}))}:{categories:[],series:[]}}fieldFor(e){return this.instance?.mapping?.[e]??""}channelOfKind(e){return this.spec?.channels.find(t=>t.kind===e)?.key??null}mapPoints(){const e=this.channelOfKind("lat"),t=this.channelOfKind("lon");if(!e||!t)return[];const n=this.fieldFor(e),r=this.fieldFor(t);if(!n||!r)return[];const i=this.channelOfKind("text"),s=this.channelOfKind("weight"),o=i?this.fieldFor(i):"",a=s?this.fieldFor(s):"",c=f=>{const m=typeof f=="number"?f:typeof f=="string"&&f.trim()!==""?Number(f):NaN;return Number.isFinite(m)?m:null},d=[];for(const f of this.rows){const m=c(f.data[n]),b=c(f.data[r]);if(m===null||b===null||m<-90||m>90||b<-180||b>180)continue;const y=o?f.data[o]:void 0,v=a?c(f.data[a]):null;d.push({lat:m,lon:b,...y==null||y===""?{}:{label:String(y)},...v===null?{}:{weight:v}})}return d}cloudTerms(){const e=this.channelOfKind("text");if(!e||this.channelOfKind("lat"))return[];const t=this.fieldFor(e);if(!t)return[];const n=this.template?.viz?.options??{},r=i=>{const s=Number(n[i]);return Number.isFinite(s)&&s>0?s:void 0};return VS(this.rows.map(i=>i.data[t]),{...r("minLength")===void 0?{}:{minLength:r("minLength")},...r("maxTerms")===void 0?{}:{maxTerms:r("maxTerms")},includeNumbers:n.includeNumbers===!0,...n.stopWords===!1?{stopWords:new Set}:{}}).map(i=>({term:i.term,count:i.count}))}elementOptions(){const e={...this.template?.viz?.options??{}};return this.channelOfKind("lat")&&(typeof e.tileUrl!="string"||e.tileUrl.trim()==="")&&(e.tileUrl=this.tileUrl,e.attribution=this.tileAttribution),e}note(){const e=this.frame;if(!e)return null;const t=[];if(e.truncated){const n=$c({shown:e.rowCount,total:this.matchingTotal,searching:this.searching,searched:jn});n&&t.push(n)}return e.skipped>0&&t.push(`${e.skipped.toLocaleString()} ${e.skipped===1?"value was":"values were"} not numeric and were left out.`),t.length>0?t.join(" "):null}render(){if(this.error)return k`<div class="error" role="status">${this.error}</div>`;if(!this.loaded)return k`<div class="placeholder">Loading…</div>`;const e=this.spec;if(!e){const i=this.template?.viz?.kind??"?";return k`<div class="error" role="status">No visualization registered for “${i}”. Its plugin may be disabled.</div>`}if(e.data==="aggregate"){if(!this.aggregate)return k`<div class="error" role="status">This visualization has no measure configured.</div>`;if(this.frame?.error)return k`<div class="error" role="status">${this.frame.error}</div>`}else{const i=e.channels.filter(s=>s.required&&!this.fieldFor(s.key));if(i.length>0)return k`<div class="error" role="status">No column mapped for ${i.map(s=>s.label).join(", ")}.</div>`}const t=ll(e.tag),n=this.note(),r=this.elementOptions();return k`
      <div class="chart">
        ${cl`<${t}
          .data=${this.chartData()}
          .points=${this.mapPoints()}
          .terms=${this.cloudTerms()}
          .options=${r}
        ></${t}>`}
      </div>
      ${n?k`<div class="note" role="status">${n}</div>`:ee}
    `}};Vt.styles=Ce`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
      overflow: hidden;
      box-sizing: border-box;
      /* The default palette the elements read. Overridable per host. */
      --viz-palette: #2563eb, #0891b2, #7c3aed, #db2777, #ea580c, #16a34a, #ca8a04, #dc2626;
      font:
        12px/1.4 system-ui,
        sans-serif;
    }
    .chart {
      flex: 1;
      min-height: 0;
      padding: 4px 6px;
    }
    .note,
    .error {
      flex: none;
      padding: 3px 8px;
      font-size: 11px;
      line-height: 1.35;
      border-top: 1px solid rgba(127, 127, 127, 0.25);
    }
    .note {
      color: #92400e;
      background: #fffbeb;
    }
    .error {
      color: #b91c1c;
      background: #fef2f2;
    }
    @media (prefers-color-scheme: dark) {
      .note {
        color: #fcd34d;
        background: rgba(120, 53, 15, 0.35);
      }
      .error {
        color: #fca5a5;
        background: rgba(127, 29, 29, 0.35);
      }
    }
    .placeholder {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      text-align: center;
      color: rgba(127, 127, 127, 0.95);
    }
  `;gn([Xe({type:String})],Vt.prototype,"viewInstanceId",2);gn([z()],Vt.prototype,"instance",2);gn([z()],Vt.prototype,"template",2);gn([z()],Vt.prototype,"columns",2);gn([z()],Vt.prototype,"frame",2);gn([z()],Vt.prototype,"error",2);gn([z()],Vt.prototype,"loaded",2);Vt=gn([Oe("viz-panel")],Vt);var uC=Object.defineProperty,dC=Object.getOwnPropertyDescriptor,Ii=(e,t,n,r)=>{for(var i=r>1?void 0:r?dC(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&uC(t,n,i),i};const hC=22;let qn=class extends xe{constructor(){super(...arguments),this.viewInstanceId="",this.label="",this.collapsed=!1,this.busy=!1}async reload(){await this.renderRoot.querySelector("viz-panel")?.reload?.()}async patch(e){if(!(this.busy||!this.viewInstanceId)){this.busy=!0;try{await(await J()).store.viewInstances.patch(this.viewInstanceId,{...e,updatedAt:Date.now()})}finally{this.busy=!1}}}toggleCollapse(){this.collapsed=!this.collapsed,this.dispatchEvent(new CustomEvent("viz-pane-collapse",{detail:{collapsed:this.collapsed},bubbles:!0,composed:!0}))}undock(){this.patch({dock:void 0})}close(){this.patch({open:!1})}render(){return k`
      <div class="strip">
        <button @click=${this.toggleCollapse} title=${this.collapsed?"Expand":"Collapse"} aria-label=${this.collapsed?"Expand":"Collapse"} aria-expanded=${this.collapsed?"false":"true"}>
          <span class="material-icons">${this.collapsed?"chevron_right":"expand_more"}</span>
        </button>
        <span class="title" title=${this.label}>${this.label}</span>
        <button @click=${this.undock} title="Open in its own window" aria-label="Open in its own window">
          <span class="material-icons">open_in_new</span>
        </button>
        <button @click=${this.close} title="Close" aria-label="Close">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="body">
        <viz-panel .viewInstanceId=${this.viewInstanceId} style="height:100%"></viz-panel>
      </div>
    `}};qn.styles=[Ot,Ce`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 0;
        height: 100%;
        overflow: hidden;
        background: var(--eda-pane-bg, transparent);
        font:
          11px/1.3 system-ui,
          sans-serif;
      }
      .strip {
        flex: none;
        display: flex;
        align-items: center;
        gap: 2px;
        height: ${hC}px;
        padding: 0 2px 0 4px;
        background: rgba(127, 127, 127, 0.12);
        border-bottom: 1px solid rgba(127, 127, 127, 0.2);
        user-select: none;
      }
      .title {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 600;
        opacity: 0.85;
      }
      button {
        flex: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        padding: 0;
        border: 0;
        border-radius: 3px;
        background: transparent;
        color: inherit;
        cursor: pointer;
        opacity: 0.7;
      }
      button:hover {
        background: rgba(127, 127, 127, 0.25);
        opacity: 1;
      }
      button .material-icons {
        font-size: 14px;
        line-height: 1;
      }
      .body {
        flex: 1;
        min-height: 0;
        overflow: hidden;
      }
      :host([collapsed]) .body {
        display: none;
      }
    `];Ii([Xe({type:String})],qn.prototype,"viewInstanceId",2);Ii([Xe({type:String})],qn.prototype,"label",2);Ii([Xe({type:Boolean,reflect:!0})],qn.prototype,"collapsed",2);Ii([z()],qn.prototype,"busy",2);qn=Ii([Oe("viz-pane")],qn);var fC=Object.defineProperty,pC=Object.getOwnPropertyDescriptor,wt=(e,t,n,r)=>{for(var i=r>1?void 0:r?pC(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&fC(t,n,i),i};let st=class extends xe{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.rowColl=null,this.loadGeneration=0,this.searchQuery="",this.globalQuery="",this.cellRenderers=new Map,this.truncated=!1,this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),i=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const s=this.allRows.find(c=>c.id===n);if(!s)return;let o;if(i==="boolean")o=t.checked;else if(i==="number"){const c=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(c)?t.value:c}else o=t.value;await(await J()).store.rows(this.instance.tableId).patch(n,{data:{...s.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");!n||r==null||await this.addPill(n,r)}}get searchIsActive(){return this.searchQuery.trim()!==""||this.globalQuery.trim()!==""}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){this.mountCellRenderers(),e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}mountCellRenderers(){const e=this.renderRoot?.querySelectorAll?.(`.${yp}:not([data-eda-mounted])`);if(!e?.length)return;const t=new Map(this.rows.map(i=>[i.id,i])),n=new Map(this.tableColumns.map(i=>[i.field,i])),r=this.instance?.tokenScripts??{};for(const i of e){const s=i;s.dataset.edaMounted="1";const o=t.get(s.dataset.edaRow??""),a=s.dataset.edaField??"",c=s.dataset.edaTag??"",d=n.get(a);if(!o||!d||!c)continue;const f=document.createElement(c);f.value=dk(o,a,r[s.dataset.edaToken??""])??"",f.column=d,f.row=o.data,f.readonly=!0,f.sourceReadonly=!0,s.replaceChildren(f)}}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await J(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers)),this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(i=>[i.field,i]));this.columns=t.visibleColumns.map(i=>r.get(i)??{field:i,label:i,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(i=>{const s=i.find(a=>a.id===this.viewInstanceId);if(!s)return;if(s.tableId!==this.instance?.tableId){this.instance=s,this.reload();return}const o=hh(this.instance);this.instance=s,hh(s)!==o?this.loadRows():this.recompute()}),this.rowColl=e.store.rows(t.tableId),this.rowsUnsub=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows(),this.loaded=!0}async loadRows(){const e=this.rowColl,t=this.instance;if(!e||!t)return;const n=++this.loadGeneration,r=new Set(this.tableColumns.filter(d=>d.script).map(d=>d.field)),i=Object.fromEntries(Object.entries(t.filters??{}).filter(([d])=>!r.has(d))),o=(t.sortBy?.length?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc!==!1}]:[]).filter(d=>!r.has(d.field)),a={columns:this.tableColumns,...Object.keys(i).length>0?{filters:i}:{},...o.length>0?{sort:o}:{}},c=await Ei(e,a,jn);n===this.loadGeneration&&(this.truncated=c.truncated===!0,this.allRows=c.rows,this.recompute())}recompute(){if(!this.instance)return;const e=Ad(this.allRows,this.tableColumns),t=Za(e,this.instance,this.tableColumns);let n=t;const r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(n=mi(n,r,this.tableColumns)),i&&(n=mi(n,i,this.tableColumns));const s=this.instance.limit??0;s>0&&n.length>s&&(n=n.slice(0,s)),this.rows=n,this.templateOn&&nm(this.viewInstanceId,n.length,t.length)}async addPill(e,t){if(!this.instance)return;const n=bk(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{},[e]:n};await(await J()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}rowsFacetedFor(e){if(!this.instance)return[];const t={...this.instance.pillFilters??{}};return delete t[e],Za(Ad(this.allRows,this.tableColumns),{...this.instance,pillFilters:t},this.tableColumns)}async setPillFilter(e,t){if(!this.instance)return;const n={...this.instance.pillFilters??{}};t.trim()===""?delete n[e]:n[e]=t,await(await J()).store.viewInstances.patch(this.instance.id,{pillFilters:n,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:n},this.recompute()}async cyclePill(e,t){await this.setPillFilter(e,vk(this.instance?.pillFilters?.[e],t))}async openPillValues(e,t){const n=dt.instance;if(!n)return;const r=this.rowsFacetedFor(e),i=this.tableColumns.find(c=>c.field===e)?.type;if(!mm(r,e,{type:i}))return;const{values:s,blanks:o}=gm(r,e,{type:i});if(s.length===0)return;const a=await n.open(t.getBoundingClientRect(),s,this.instance?.pillFilters?.[e]??"",o,c=>void this.setPillFilter(e,c),{exact:!0});a!==null&&(typeof a=="object"&&"clear"in a?await this.setPillFilter(e,""):typeof a=="string"&&await this.setPillFilter(e,a))}async removePill(e,t){if(!this.instance)return;const n=wk(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await J()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await J()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await J()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await J()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||wl(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&wl(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await J();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(s=>s!==e):[...t,e];if(r.length===0)return;await(await J()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?k`<div class="vw-empty">No rows.</div>`:k`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>k`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>k`<tr>
                ${this.columns.map(t=>{const n=e.data[t.field],r=n==null?"":String(n);return k`<td title=${r}>${r}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return k`<div class="vw-empty">This view's template is missing.</div>`;if($k(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(c=>[c.field,c])),r=this.instance?.readonly===!0,i=this.instance?.tokenScripts??{},s=this.instance?.tokenRaw??{},o=this.rows.map(c=>pk(e.rowHtml,c,t,{columns:n,readonly:r,scripts:i,renderers:this.cellRenderers,raw:s})).join(""),a=(e.headerHtml??"")+o+(e.footerHtml??"");return k`<div class="vw-root">${ar(a)}</div>`}return k`<div class="vw-root">
      ${e.headerHtml?.trim()?k`<div class="vw-html">${ar(e.headerHtml)}</div>`:ee} ${this.renderTable()}
      ${e.footerHtml?.trim()?k`<div class="vw-html">${ar(e.footerHtml)}</div>`:ee}
    </div>`}renderSortBar(){if(!this.instance)return ee;const e=this.renderPillChips(),t=Array.isArray(e)&&e.length>0;if(!this.templateOn)return t?k`<div class="vw-sortbar">${e}</div>`:ee;const n=this.tableColumns.filter(s=>s.sortable!==!1),r=this.instance.sortColumn??"",i=this.instance.sortAsc??!0;return k`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select aria-label="Sort by" @change=${s=>void this.setSortColumn(s.target.value)}>
        <option value="" ?selected=${!r}>— unsorted —</option>
        ${n.map(s=>k`<option value=${s.field} ?selected=${r===s.field}>${s.label||s.field}</option>`)}
      </select>
      <button aria-label="Toggle sort direction" title=${i?"Ascending (click for descending)":"Descending (click for ascending)"} ?disabled=${!r} @click=${()=>void this.toggleSortDir()}>
        <span class="mi">${i?"arrow_upward":"arrow_downward"}</span>
      </button>
      ${e}
    </div>`}get chipFields(){if(!this.template||!this.templateOn)return[];const e=this.instance?.mapping??{},t=sk(this.template.headerHtml??"",this.template.rowHtml??"",this.template.footerHtml??"").map(n=>e[n]).filter(n=>!!n);return[...new Set(t)]}renderPillChips(){const e=this.instance?.pillFilters??{},t=this.chipFields;if(Object.keys(e).length===0&&t.length===0)return ee;const n=[],r=new Set;for(const s of[...new Set([...t,...Object.keys(e)])]){const o=e[s];if(o)for(const a of Hn(o))a.term&&(r.add(s),n.push({field:s,value:a.term,state:a.negate?"not":"on"}))}return[...t.filter(s=>!r.has(s)).map(s=>k`<span class="eda-pill-chip off">
            <button type="button" class="eda-pill-chip-value" title=${`Filter this view by ${s}`} @click=${o=>void this.openPillValues(s,o.currentTarget)}>
              ${s} ▾
            </button>
          </span>`),...n.map(s=>k`<span class=${`eda-pill-chip${s.state==="not"?" not":""}`}>
            <button
              type="button"
              class="eda-pill-chip-field"
              title=${s.state==="not"?`Excluding this value — click to stop filtering on ${s.field}`:"Only this value — click to EXCLUDE it instead"}
              @click=${()=>void this.cyclePill(s.field,s.value)}
            >
              ${s.field}${s.state==="not"?" ≠":" ="}
            </button>
            <button type="button" class="eda-pill-chip-value" title=${`Other values of ${s.field}`} @click=${o=>void this.openPillValues(s.field,o.currentTarget)}>
              ${s.value}
            </button>
            <button type="button" class="eda-pill-chip-remove" aria-label=${`Remove filter ${s.field}: ${s.value}`} title="Remove this filter" @click=${()=>void this.removePill(s.field,s.value)}>
              ×
            </button>
          </span>`)]}renderFooter(){if(!this.instance)return ee;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return k`<div class="vw-footer">
      ${!e&&this.showColsMenu?k`<div class="cols-menu">
            ${this.tableColumns.map(n=>k`<label><input type="checkbox" .checked=${t.has(n.field)} @change=${()=>void this.toggleColumn(n.field)} />${n.label||n.field}</label>`)}
          </div>`:ee}
      ${e?ee:k`<button title="Show / hide columns" aria-label="Columns" @click=${()=>this.showColsMenu=!this.showColsMenu}>
            <span class="mi">view_column</span>
          </button>`}
      <button aria-label="Edit view" title="Edit this view (rename, re-map columns)" @click=${()=>this.editView()}>
        <span class="mi">edit</span>
      </button>
      ${this.template?k`<button class="edit-template" aria-label="Edit template" title=${`Edit the "${this.template.name}" template`} @click=${()=>this.editTemplate()}>
            <span class="mi">code</span>
          </button>`:ee}
      <button
        class=${e?"":"active"}
        title=${e?"Show as a table (turn the template off)":"Show through the template"}
        aria-label="Toggle template"
        aria-pressed=${e?"false":"true"}
        @click=${()=>void this.toggleTemplate()}
      >
        <span class="mi">table_view</span>
      </button>
      <button class="danger" aria-label="Delete view" title="Delete this view (the table stays)" @click=${()=>void this.deleteView()}>
        <span class="mi">delete</span>
      </button>
    </div>`}render(){if(!this.loaded)return k`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return k`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?k`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>${this.renderTemplated()}</div>`:k`<div class="vw-body grid">
          <data-table .tableId=${this.instance?.tableId??""} .viewInstanceId=${this.viewInstanceId}></data-table>
        </div>`,n=e&&this.truncated?$c({shown:this.rows.length,total:this.allRows.length,searching:this.searchIsActive,searched:jn}):null;return k`${this.renderSortBar()}${n?k`<div class="vw-note" role="status">${n}</div>`:ee}${t}${this.renderFooter()}`}};st.styles=[Ot,Ce`
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
      /* Says the view is showing a slice of its table. Mirrors the grid's
         .truncated-note — same colours, same job. (No backticks in here: this
         is a template literal, and one would end it.) */
      .vw-note {
        flex: 0 0 auto;
        padding: 0.25rem 0.5rem;
        background: #fef3c7;
        border-bottom: 1px solid #fcd34d;
        color: #92400e;
        font-size: 0.75rem;
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
      /* A token script that will not compile, or that throws. Marked in place —
         a blank card would read as "no data" and hide the broken script. */
      .eda-script-error {
        display: inline-block;
        padding: 0 0.35rem;
        border-radius: 0.25rem;
        background: #fee2e2;
        color: #b91c1c;
        font-size: 0.8rem;
        cursor: help;
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
      /* A chip is two buttons, because it does two things: the FIELD (with the
         operator) cycles = / != / off, and the VALUE opens the field's other
         values as a checklist. */
      .eda-pill-chip-field,
      .eda-pill-chip-value {
        padding: 0;
        border: none;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
      }
      .eda-pill-chip-field {
        font-weight: 600;
      }
      .eda-pill-chip-field:hover,
      .eda-pill-chip-value:hover {
        text-decoration: underline;
      }
      /* Idle: the template offers this filter, nothing is filtering on it. Quiet
         and dashed so it reads as an offer, not as an active filter. */
      .eda-pill-chip.off {
        background: transparent;
        border: 1px dashed #7dd3fc;
        color: #0369a1;
        opacity: 0.75;
        padding: 0 0.3rem;
      }
      .eda-pill-chip.off:hover {
        opacity: 1;
        border-style: solid;
      }
      /* An excluded value reads as excluded at a glance, not only by its ≠. */
      .eda-pill-chip.not {
        background: #fee2e2;
        color: #b91c1c;
      }
      .eda-pill-chip.not .eda-pill-chip-remove:hover {
        background: rgba(185, 28, 28, 0.15);
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
      /* One toolbar at the top of a view: the sort controls (template mode) and
         the active filter chips, which used to sit in a second bar of their own. */
      .vw-sortbar {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        flex-wrap: wrap;
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
    `];wt([Xe({type:String})],st.prototype,"viewInstanceId",2);wt([z()],st.prototype,"loaded",2);wt([z()],st.prototype,"error",2);wt([z()],st.prototype,"instance",2);wt([z()],st.prototype,"template",2);wt([z()],st.prototype,"columns",2);wt([z()],st.prototype,"tableColumns",2);wt([z()],st.prototype,"rows",2);wt([z()],st.prototype,"showColsMenu",2);wt([z()],st.prototype,"searchQuery",2);wt([z()],st.prototype,"globalQuery",2);wt([z()],st.prototype,"cellRenderers",2);wt([z()],st.prototype,"truncated",2);st=wt([Oe("view-window")],st);function hh(e){if(!e)return"";const t=e.sortBy?.length?e.sortBy.map(n=>`${n.field}:${n.asc!==!1}`).join(","):`${e.sortColumn??""}:${e.sortAsc!==!1}`;return`${JSON.stringify(e.filters??{})}|${t}`}const Rm=480,Om=520,at=new Map,ml=new Set;function mC(e){return ml.has(e)}function Rc(e){return mC(e.templateId)}async function gC(){await Promise.all([...at.keys()].map(e=>Ts(e)))}function Dm(e){const t=at.get(e);return t?(om(t.panel),!0):!1}const gl=new Set;async function Oc(e){if(Dm(e))return;gl.add(e);const t=await J(),n=await t.store.viewInstances.findOne(e);if(!n){gl.delete(e);return}if(n.open){Es(n,t),Lm(e);return}await t.store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()})}function Lm(e){gl.delete(e)&&Dm(e)}let fh=!1;function bl(e){e.panel.setHeaderTitle(e.name+rm(e.count,e.total))}function bC(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function wC(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function yC(e){return`view-panel-${wC(e)}`}async function vC(){if(fh)return;fh=!0;const e=await J(),t=s=>s.filter(o=>o.workspaceId===e.workspaceId&&o.open&&!o.dock),n=s=>{ml.clear();for(const o of s)o.kind==="viz"&&ml.add(o.id)};n(await e.store.viewTemplates.find()),e.store.viewTemplates.subscribe(n);const r=t(await e.store.viewInstances.find()).sort(Fs);for(const s of r)Es(s,e);let i=[];e.store.viewInstances.subscribe(s=>{i=s;const o=new Map(t(s).map(c=>[c.id,c]));for(const c of[...at.keys()])o.has(c)||gh(c);const a=[...o.values()].filter(c=>!at.has(c.id)).sort(Fs);for(const c of a)Es(c,e);mh(s,e)}),Hx(()=>mh(i,e)),e.store.viewTemplates.subscribe(()=>{for(const[s,o]of[...at.entries()]){const a=i.find(f=>f.id===s);if(!a)continue;const c=Rc(a),d=o.el?.tagName.toLowerCase()==="viz-panel";o.el&&c!==d&&(gh(s),Es(a,e))}}),e.store.tables.subscribe(s=>void $C(e,s)),document.addEventListener(qs,s=>{const o=s.detail,a=at.get(o.key);a&&a.el&&(a.count=o.count,a.total=o.total,bl(a))}),document.addEventListener("easydb:reload-view",s=>{const o=s.detail?.instanceId;if(!o)return;const a=at.get(o);a&&(async()=>{const c=await e.store.viewInstances.findOne(o);c&&(a.name=c.name,bl(a)),a.el?.reload()})()}),document.addEventListener("easydb:reload-view",s=>{const o=s.detail?.instanceId;o&&ph(o)}),document.addEventListener("easydb:reload-views",()=>{for(const{el:s}of at.values())s?.reload();ph()})}const _s=new Map;function ph(e){for(const t of _s.keys()){if(e&&t!==e)continue;document.querySelector(`viz-pane[data-instance="${CSS.escape(t)}"]`)?.reload?.()}}function mh(e,t){const n=new Map;for(const r of e)r.workspaceId===t.workspaceId&&(!r.open||!r.dock||Rc(r)&&n.set(r.id,r));for(const[r,i]of[..._s.entries()]){const s=n.get(r);s&&s.dock&&Hd(s.dock.host)===i||(Vd(i)?.removePane(r),_s.delete(r))}for(const r of n.values()){const i=r.dock,s=Hd(i.host),o=Vd(s);if(!o||o.hasPane(r.id))continue;const a=document.createElement("viz-pane");a.viewInstanceId=r.id,a.label=r.name,a.dataset.instance=r.id,o.addPane({id:r.id,el:a,edge:i.edge,size:i.size,order:i.order,onResized:c=>void kC(r.id,c)}),_s.set(r.id,s)}}function kC(e,t){return Sr(`view:${e}`,async()=>{try{const n=await J(),r=await n.store.viewInstances.findOne(e);if(!r?.dock||r.dock.size===t)return;await n.store.viewInstances.patch(e,{dock:{...r.dock,size:t},updatedAt:Date.now()})}catch{}})}async function $C(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),i=new Map;for(const o of n)i.has(o.name)||i.set(o.name,o);const s=await e.store.viewInstances.find();for(const o of s){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const a=i.get(o.tableName);a&&await e.store.viewInstances.patch(o.id,{tableId:a.id,updatedAt:Date.now()})}}function Es(e,t){if(at.has(e.id))return;const n=yC(e.id),r=e.windowGeometry,i=r?.minimized===!0,s=Rc(e),o=()=>{const T=document.createElement(s?"viz-panel":"view-window");return T.viewInstanceId=e.id,T.style.height="100%",T};let a=null,c=null;const d=`view:${e.id}`,f=T=>(c=T,a=Zp(),a.setPrimary(T),em(d,a),a.root),m=i?document.createElement("div"):f(o());let b;const y=()=>{b&&(Bs(d),a?.destroy(),a=null,b.el?.remove(),b.el=null,b.count=-1,b.total=-1,bl(b))},v=()=>{if(!b||b.el)return;const T=document.getElementById(n)?.querySelector(".jsPanel-content");if(!T)return;T.replaceChildren();const Q=o();T.appendChild(f(Q)),b.el=Q},$=Eo({id:n,container:bC(),title:e.name,logo:s?Rx:Ax,color:s?"#7c3aed":"#0891b2",content:m,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:Rm,h:Om},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:To(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0,smallified:r?.smallified===!0},onmoved:()=>void Ts(e.id),onresized:()=>void Ts(e.id),onfronted:()=>void xC(e.id,t),onstatuschange:T=>{T.status==="minimized"?y():(T.status==="normalized"||T.status==="maximized")&&v(),Ts(e.id)},onclosed:()=>{Bs(d),a?.destroy(),a=null,at.delete(e.id),Ro(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});b={panel:$,el:i?null:c,name:e.name,count:-1,total:-1},at.set(e.id,b),sm(e.id,()=>$.front(void 0,!1));const C=document.getElementById(n),E=document.createElement("panel-search");E.tableId=e.id,C?.querySelector(".jsPanel-controlbar")?.append(E),Lm(e.id)}function gh(e){const t=at.get(e);if(t){at.delete(e),Ro(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function xC(e,t){return Sr(`view:${e}`,()=>SC(e,t))}async function SC(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{...at.get(e)?.panel.persistRect()??{x:0,y:0,w:Rm,h:Om},z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:im()},updatedAt:Date.now()})}catch{}}function Ts(e){return Sr(`view:${e}`,()=>CC(e))}async function CC(e){const t=at.get(e);if(!t)return;const{minimized:n,maximized:r,smallified:i}=t.panel.persistFlags(),s=t.panel.persistRect();try{const o=await J(),a=(await o.store.viewInstances.findOne(e))?.windowGeometry,c={...s,z:a?.z??0,minimized:n,maximized:r,smallified:i};await o.store.viewInstances.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}const Mm="scripts:samples";function _C(e){return e==="validate"?DC:OC}function EC(e){const t=typeof e=="string"?TC(e):e;if(!Array.isArray(t))return[];const n=[];for(const r of t){if(!r||typeof r!="object")continue;const{id:i,kind:s,label:o,source:a}=r;typeof i!="string"||!i||typeof o!="string"||!o.trim()||typeof a!="string"||!a.trim()||n.push({id:i,kind:s==="validate"?"validate":"render",label:o.trim(),source:a})}return n}function TC(e){try{return JSON.parse(e)}catch{return null}}function IC(e,t){return e.filter(n=>n.kind===t)}function AC(e,t){return[...e,t]}function RC(e,t){return e.filter(n=>n.id!==t)}const OC=[{label:"Join two fields into one",source:`function render(row) {
  // The simplest useful script: read any field by name off \`row\`.
  return [row.first, row.last].filter(Boolean).join(' ');
}
`},{label:"Markdown → formatted text (markdownToHtml)",source:`function render(row) {
  // Set this column's renderer to \`html\`, or the cell shows the HTML source.
  // markdownToHtml SANITISES: formatting in the data survives, a <script>
  // or an onerror= arriving from a CSV does not.
  return markdownToHtml(row.notes ?? '');
}
`},{label:"Markdown summary — first line, bolded label",source:`function render(row) {
  // Renderer: \`html\`. Builds the Markdown first, then converts it — easier to
  // read than assembling tags by hand, and the sanitising comes for free.
  if (!row.title && !row.notes) return ''; // nothing to summarise yet
  const first = String(row.notes ?? '').split('\\n')[0] ?? '';
  return markdownToHtml(\`**\${row.title ?? 'Untitled'}** — \${first}\`);
}
`},{label:"Build a URL from a field",source:`function render(row) {
  // Renderer: \`link\`, which turns the returned URL into a clickable anchor.
  const BASE = 'https://github.com/';
  if (!row.repo) return '';
  return BASE + encodeURIComponent(String(row.repo));
}
`},{label:"Build a URL with query parameters",source:"function render(row) {\n  // Renderer: `link`. `URL` + `searchParams` encodes the values for you, so\n  // spaces and & in the data can't break the link.\n  if (!row.city) return '';\n  const url = new URL('https://www.openstreetmap.org/search');\n  url.searchParams.set('query', `${row.street ?? ''} ${row.city}`.trim());\n  return url.toString();\n}\n"},{label:"Mailto link with a prefilled subject",source:"function render(row) {\n  // Renderer: `link`.\n  if (!row.email) return '';\n  const subject = encodeURIComponent(`Re: ${row.title ?? 'your enquiry'}`);\n  return `mailto:${row.email}?subject=${subject}`;\n}\n"},{label:"Maths — line total (quantity × price)",source:`function render(row) {
  // Blank, not "0.00", until both parts are there — a column of zeroes down a
  // half-filled table looks like data.
  const qty = Number(row.qty);
  const price = Number(row.price);
  if (row.qty == null || row.qty === '' || !Number.isFinite(qty)) return '';
  if (row.price == null || row.price === '' || !Number.isFinite(price)) return '';
  return (qty * price).toFixed(2);
}
`},{label:"Maths — amount as money (Intl.NumberFormat)",source:`function render(row) {
  const CURRENCY = 'CHF';
  const LOCALE = 'de-CH';
  const n = Number(row.amount);
  if (!Number.isFinite(n)) return '';
  return new Intl.NumberFormat(LOCALE, { style: 'currency', currency: CURRENCY }).format(n);
}
`},{label:"Maths — percentage of a total",source:`function render(row) {
  const part = Number(row.done ?? 0);
  const whole = Number(row.total ?? 0);
  if (!whole) return ''; // no divide-by-zero, and no "NaN%" in the grid
  return Math.round((part / whole) * 100) + '%';
}
`},{label:"Days between a date and today",source:`function render(row) {
  const FIELD = 'due';
  if (!row[FIELD]) return '';
  const then = new Date(String(row[FIELD]));
  if (Number.isNaN(then.getTime())) return '';
  // Whole days, not elapsed hours: a date-only value must read the same at
  // 09:00 and at 23:00, or "today" turns into "1 days ago" over lunch.
  const day = (d) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) / 86400000;
  const days = day(then) - day(new Date());
  if (days === 0) return 'today';
  return days > 0 ? \`in \${days} days\` : \`\${-days} days ago\`;
}
`}],DC=[{label:"Required — reject an empty cell",source:`function validate(value, row) {
  if (value === null || value === undefined || String(value).trim() === '') {
    throw new Error('This field is required.');
  }
}
`},{label:"Email address",source:`function validate(value, row) {
  if (value == null || value === '') return; // blank is allowed
  if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]{2,}$/.test(String(value))) {
    throw new Error(\`"\${value}" is not a valid email address.\`);
  }
}
`},{label:"Web address (http / https)",source:`function validate(value, row) {
  if (value == null || value === '') return;
  let url;
  try {
    url = new URL(String(value));
  } catch {
    throw new Error(\`"\${value}" is not a valid URL.\`);
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error('Only http:// and https:// addresses are allowed.');
  }
}
`},{label:"Whole number in a range",source:`function validate(value, row) {
  const MIN = 1;
  const MAX = 100;
  if (value == null || value === '') return;
  const n = Number(value);
  if (!Number.isInteger(n)) throw new Error(\`"\${value}" is not a whole number.\`);
  if (n < MIN || n > MAX) throw new Error(\`Must be between \${MIN} and \${MAX} (got \${n}).\`);
}
`},{label:"Positive number",source:`function validate(value, row) {
  if (value == null || value === '') return;
  const n = Number(value);
  if (Number.isNaN(n)) throw new Error(\`"\${value}" is not a number.\`);
  if (n <= 0) throw new Error('Must be greater than zero.');
}
`},{label:"Text length between two limits",source:"function validate(value, row) {\n  const MIN = 3;\n  const MAX = 40;\n  if (value == null || value === '') return;\n  const len = String(value).trim().length;\n  if (len < MIN) throw new Error(`Too short — at least ${MIN} characters (got ${len}).`);\n  if (len > MAX) throw new Error(`Too long — at most ${MAX} characters (got ${len}).`);\n}\n"},{label:"One of a fixed list of values",source:`function validate(value, row) {
  const ALLOWED = ['draft', 'review', 'published'];
  if (value == null || value === '') return;
  if (!ALLOWED.includes(String(value))) {
    throw new Error(\`"\${value}" is not allowed. Pick one of: \${ALLOWED.join(', ')}.\`);
  }
}
`},{label:"Matches a pattern (regular expression)",source:`function validate(value, row) {
  const PATTERN = /^[A-Z]{2}-\\d{4}$/; // e.g. AB-1234
  if (value == null || value === '') return;
  if (!PATTERN.test(String(value))) {
    throw new Error(\`"\${value}" doesn't match the required format (e.g. AB-1234).\`);
  }
}
`},{label:"A real date, not in the future",source:`function validate(value, row) {
  if (value == null || value === '') return;
  const d = new Date(String(value));
  if (Number.isNaN(d.getTime())) throw new Error(\`"\${value}" is not a date.\`);
  // Compare whole days, so "today" is never rejected by a few hours.
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  if (d > today) throw new Error('The date cannot be in the future.');
}
`},{label:"Depends on another column (end after start)",source:`function validate(value, row) {
  // \`row\` is the whole row, so a rule can compare fields. Rename 'start' to
  // whichever column this one has to come after.
  const OTHER = 'start';
  if (value == null || value === '') return;
  const other = row?.[OTHER];
  if (other == null || other === '') return; // nothing to compare against yet
  if (new Date(String(value)) < new Date(String(other))) {
    throw new Error(\`Must not be earlier than \${OTHER} (\${other}).\`);
  }
}
`}];var LC=Object.defineProperty,MC=Object.getOwnPropertyDescriptor,Kn=(e,t,n,r)=>{for(var i=r>1?void 0:r?MC(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&LC(t,n,i),i};const PC=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;function NC(e){return`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return what this token should show; HTML is rendered, not escaped.
  return ${e?`row.${e}`:"row.name"} ?? '';
}
`}const jC=`function validate(value, row) {
  // \`value\` is what the user just typed; \`row\` is the rest of the row.
  // THROW to reject the edit — the message is what they will see.
  if (false) throw new Error('Explain what is wrong here.');
}
`;function zC(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function FC(){try{const t=await(await J()).store.settings.findOne(Mm);return EC(t?.value)}catch{return[]}}async function bh(e){await(await J()).store.settings.upsert({name:Mm,value:[...e]})}let it=class extends xe{constructor(){super(...arguments),this.text="",this.columnLabel="",this.kind="render",this.undoText=null,this.userSamples=[],this.pickedUserId=null,this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),it.instance=this}disconnectedCallback(){super.disconnectedCallback(),it.instance===this&&(it.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Xt("script-editor",this.dialogEl)}async open(e,t,n="render",r){return this.resolver&&(this.resolver(null),this.resolver=null),this.kind=n,this.undoText=null,this.pickedUserId=null,this.text=e&&e.trim()?e:this.blankFor(n,r?.field??""),this.columnLabel=t??"",this.userSamples=await FC(),await this.updateComplete,this.dialogEl?.showModal(),new Promise(i=>{this.resolver=i})}blankFor(e,t){return e==="validate"?jC:e==="token"?NC(t):PC}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}get sampleKind(){return this.kind==="validate"?"validate":"render"}get samples(){return _C(this.sampleKind)}get mySamples(){return IC(this.userSamples,this.sampleKind)}applySample(e){const t=e.target,n=t.value;t.value="";const r=n.startsWith("u:")?this.mySamples.find(i=>i.id===n.slice(2)):this.samples[Number(n.slice(2))];r&&(this.undoText=this.text,this.text=r.source,this.pickedUserId=n.startsWith("u:")?n.slice(2):null)}undoSample(){this.undoText!==null&&(this.text=this.undoText,this.undoText=null)}onInput(e){this.text=e.target.value,this.undoText=null}async saveAsSample(){if(!this.text.trim())return;const e=lt.instance;if(!e)return;const t=await e.prompt("Name this sample — it appears in the dropdown for every script of this kind.","","Add to samples");if(t===null||!t.trim())return;const n={id:zC(),kind:this.sampleKind,label:t.trim(),source:this.text};this.userSamples=AC(this.userSamples,n),this.pickedUserId=n.id,await bh(this.userSamples)}async deletePickedSample(){const e=this.pickedUserId,t=e?this.mySamples.find(i=>i.id===e):void 0,n=lt.instance;!e||!t||!n||!await n.confirm(`Delete the sample "${t.label}"? The script in the editor stays as it is.`,"Delete sample")||(this.userSamples=RC(this.userSamples,e),this.pickedUserId=null,await bh(this.userSamples))}renderHints(){return this.kind==="token"?k`
        <p class="hint">
          Define <code>function render(row) { … }</code>. <code>row</code> is the full row object. What you return is what this token shows — the stored cell is never changed. The result goes into the
          template as HTML, so <code>markdownToHtml(row.body)</code> shows formatted text and <code>new Date(row.date).toLocaleString()</code> shows a local date.
        </p>
        <p class="hint">
          Only a plain <code>$TOKEN</code> runs the script. <code>$input.TOKEN</code> and <code>$filter.TOKEN</code> keep reading the mapped column, because one writes the cell back and the other must
          match the stored value. A scripted token needs no column at all.
        </p>
      `:this.kind==="validate"?k`
        <p class="hint">
          Define <code>function validate(value, row) { … }</code>. It runs when someone edits a cell in this column by hand, after the Max / Unique / Not-null boxes have had their say.
          <strong>Throw to reject the edit</strong> — your message is what they are shown, and the cell snaps back. Return without throwing to accept it; the return value is ignored.
        </p>
        <p class="hint">
          <code>value</code> is the proposed new value, <code>row</code> the rest of the row, so a rule can compare columns. Imports, refreshes and sync are not edits and never run it.
        </p>
      `:k`
      <p class="hint">
        Define <code>function render(row) { … }</code>. <code>row</code> is the full row object. What you return is passed to the column's renderer, so the cell shows a computed value instead of the
        stored one — and the cell becomes read-only. A script that throws shows a small error chip in the cell.
      </p>
      <p class="hint">
        Besides the JS globals you can call <code>markdownToHtml(text)</code> (also <code>easydb.markdownToHtml</code>) — set this column's renderer to <code>html</code> so the result shows as
        formatted text rather than as its own source. A sample that needs a particular renderer says so in its first line; the dropdown can't set it for you.
      </p>
    `}render(){const e=this.kind==="validate",t=this.mySamples,n=this.pickedUserId?t.find(r=>r.id===this.pickedUserId):void 0;return k`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCancel}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${e?"Edit validation":"Edit script"}${this.columnLabel?` — ${this.columnLabel}`:""}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${this.onCancel}>Cancel</button>
              <button type="submit" class="primary">Save</button>
            </div>
          </div>
          <div class="dialog-body">
            ${this.renderHints()}
            <div class="samples">
              <label for="sample">Start from a sample</label>
              <select
                id="sample"
                title=${e?"Replace the editor contents with a ready-made rule":"Replace the editor contents with a ready-made script"}
                @change=${r=>this.applySample(r)}
              >
                <option value="">— choose —</option>
                ${t.length?k`<optgroup label="Your samples">${t.map(r=>k`<option value=${`u:${r.id}`}>${r.label}</option>`)}</optgroup>`:null}
                <optgroup label="Built in">${this.samples.map((r,i)=>k`<option value=${`b:${i}`}>${r.label}</option>`)}</optgroup>
              </select>
              <button
                type="button"
                class="icon danger"
                title=${n?`Delete the sample "${n.label}"`:"Pick one of your own samples to delete it"}
                ?disabled=${!n}
                @click=${()=>void this.deletePickedSample()}
              >
                🗑
              </button>
              <button
                type="button"
                class="icon"
                data-testid="sample-add"
                title="Add what is in the editor to the sample list for this kind of script"
                ?disabled=${!this.text.trim()}
                @click=${()=>void this.saveAsSample()}
              >
                +
              </button>
              ${this.undoText!==null?k`<button type="button" class="link" @click=${()=>this.undoSample()}>Undo</button>`:null}
            </div>
            <textarea spellcheck="false" autofocus .value=${this.text} @input=${r=>this.onInput(r)}></textarea>
          </div>
        </form>
      </dialog>
    `}};it.instance=null;it.styles=[mt,Ce`
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
      .samples {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: #374151;
      }
      .samples select {
        font: inherit;
        padding: 0.3rem 0.4rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        flex: 1;
        min-width: 0;
      }
      button.link {
        background: transparent;
        border: 0;
        padding: 0;
        color: #2563eb;
        font: inherit;
        text-decoration: underline;
        cursor: pointer;
      }
      button.link[disabled] {
        color: #9ca3af;
        text-decoration: none;
        cursor: default;
      }
      /* Beside the dropdown: 🗑 deletes the user sample currently loaded (disabled
         — not hidden — for a built-in, so the row's shape does not jump as you
         browse it), + keeps what is in the editor. Same pair, same glyphs, as the
         Import dialog's sample row. */
      button.icon {
        background: transparent;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        padding: 0.3rem 0.5rem;
        font-size: 1rem;
        line-height: 1;
        cursor: pointer;
        flex: 0 0 auto;
      }
      button.icon:hover:not([disabled]) {
        border-color: #bfdbfe;
        background: #eff6ff;
      }
      button.icon.danger:hover:not([disabled]) {
        border-color: #fecaca;
        background: #fef2f2;
      }
      button.icon[disabled] {
        opacity: 0.4;
        cursor: default;
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
    `];Kn([z()],it.prototype,"text",2);Kn([z()],it.prototype,"columnLabel",2);Kn([z()],it.prototype,"kind",2);Kn([z()],it.prototype,"undoText",2);Kn([z()],it.prototype,"userSamples",2);Kn([z()],it.prototype,"pickedUserId",2);it=Kn([Oe("script-editor-dialog")],it);var UC=Object.defineProperty,BC=Object.getOwnPropertyDescriptor,_r=(e,t,n,r)=>{for(var i=r>1?void 0:r?BC(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&UC(t,n,i),i};function wl(e,t){($t.instance??qC()).open(e,t)}function qC(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Da(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let $t=class extends xe{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.registries=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),$t.instance=this}disconnectedCallback(){super.disconnectedCallback(),$t.instance===this&&($t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Xt("views",this.dialogEl)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await J(),t=e.workspaceId;this.registries=e.registries,this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){this.close(),await Oc(e)}async editInstance(e){const n=await(await J()).store.viewTemplates.findOne(e.templateId),r=n?Ed(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},tokenScripts:{...e.tokenScripts??{}},tokenRaw:{...e.tokenRaw??{}},limit:e.limit??0,dock:e.dock?e.dock.edge:"window",readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await J()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await J(),n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={...e,id:Da(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(e="html"){const t=e==="viz"?this.visualizations()[0]:void 0;this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:"",kind:e,viz:t?{kind:t.id,aggregate:t.defaultAggregate,options:{}}:null},this.mode="template"}visualizations(){return[...this.registries?.visualizations.values()??[]]}vizSpecOf(e){return e?this.registries?.visualizations.get(e)??null:null}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,kind:e.kind==="viz"?"viz":"html",viz:e.viz?{...e.viz}:null},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,kind:e.kind==="viz"?"viz":"html",viz:e.viz?{...e.viz}:null},this.mode="template"}async deleteTemplate(e){const t=await J();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await J(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(i=>i.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,kind:e.kind,viz:e.kind==="viz"&&e.viz?e.viz:void 0,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Da(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,kind:e.kind,...e.kind==="viz"&&e.viz?{viz:e.viz}:{},updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=e.kind==="viz"?this.vizSpecOf(e.viz?.kind):null,n=t?t.channels.map(i=>i.key):Ed(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of n){const s=t?.channels.find(o=>o.key===i);r[i]=s?this.autoMapChannel(s):this.autoMap(i)}this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:n,mapping:r,tokenScripts:{},tokenRaw:{},limit:0,readonly:!1,dock:"window"},this.mode="instance"}autoMapChannel(e){const t=i=>!e.accepts||e.accepts.length===0||e.accepts.includes(i.type),n=this.autoMap(e.key);if(n&&this.columns.some(i=>i.field===n&&t(i)))return n;const r=i=>this.columns.find(o=>t(o)&&i.some(a=>`${o.field} ${o.label??""}`.toLowerCase().includes(a)))?.field??"";switch(e.kind){case"lat":return r(["latitude","lat"])||this.firstColumn(i=>t(i));case"lon":return r(["longitude","lon","lng"])||this.firstColumn(i=>t(i));case"time":return this.firstColumn(i=>t(i)&&(i.type==="date"||i.type==="datetime"))||this.firstColumn(t);case"value":case"weight":return this.firstColumn(i=>t(i)&&i.type==="number")||"";case"text":return r(["description","text","body","comment","notes","title","name"])||this.firstColumn(i=>t(i)&&i.type==="string");case"category":return this.firstColumn(i=>t(i)&&(i.type==="string"||i.type==="array"))||this.firstColumn(t);default:return""}}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(m=>m.field.toLowerCase()===t||(m.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const m=Number(r[1])-1;return this.columns.filter(y=>y.type==="boolean")[m]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(m=>m.type==="boolean");const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(m=>m.type==="date"||m.type==="datetime");const a=["url","link","href","website","homepage","uri","site","web"];if(a.includes(t)){const m=this.firstColumn(b=>b.renderer==="link");return m||this.firstColumn(b=>{const y=b.field.toLowerCase(),v=(b.label??"").toLowerCase();return a.some($=>y.includes($)||v.includes($))})}const c=m=>b=>{const y=b.field.toLowerCase(),v=(b.label??"").toLowerCase();return m.some($=>y.includes($)||v.includes($))},d=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(d.includes(t)){const m=this.firstColumn(y=>y.renderer==="image");if(m)return m;const b=this.firstColumn(c(d));return b||this.firstColumn(c(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(c(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(c(["phone","tel","mobile","cell"]));const f=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(f.includes(t)){const m=this.firstColumn($=>{if($.type!=="string")return!1;const C=$.field.toLowerCase(),E=($.label??"").toLowerCase();return f.some(T=>C.includes(T)||E.includes(T))});if(m)return m;const b=this.columns.filter($=>$.type==="string"),y=b[0];if(!y)return"";let v=y;for(const $ of b)($.max??0)>(v.max??0)&&(v=$);return v.field}return""}draftScripts(e){const t=Object.entries(e.tokenScripts).filter(([,n])=>n.trim());return t.length?Object.fromEntries(t):void 0}draftRaw(e){const t=Object.entries(e.tokenRaw).filter(([,n])=>n===!0);return t.length?Object.fromEntries(t):void 0}toggleTokenRaw(e){const t=this.iDraft;if(!t)return;const n={...t.tokenRaw};n[e]?delete n[e]:n[e]=!0,this.iDraft={...t,tokenRaw:n}}async editTokenScript(e){const t=it.instance,n=this.iDraft;if(!t||!n)return;const r=await t.open(n.tokenScripts[e]??"",`$${e}`,"token",{field:n.mapping[e]??""});if(r===null)return;const i={...n.tokenScripts};r.trim()?i[e]=r:delete i[e],this.iDraft={...n,tokenScripts:i}}isVizDraft(e){return this.templates.find(t=>t.id===e.templateId)?.kind==="viz"}channelLabel(e,t){const n=this.templates.find(i=>i.id===e.templateId);return this.vizSpecOf(n?.viz?.kind)?.channels.find(i=>i.key===t)?.label??t}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await J(),n=this.draftScripts(e),r=this.draftRaw(e);if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},tokenScripts:n,tokenRaw:r,limit:e.limit>0?e.limit:void 0,readonly:e.readonly,dock:this.dockFor(e),updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const i=this.columns.filter(o=>!o.hidden).map(o=>o.field),s={id:Da(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:i,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{},...n?{tokenScripts:n}:{},...r?{tokenRaw:r}:{},...this.dockFor(e)?{dock:this.dockFor(e)}:{}};await t.store.viewInstances.insert(s),e.dock==="window"?await this.openInstance(s.id):(await t.store.viewInstances.patch(s.id,{open:!0,updatedAt:Date.now()}),await this.refresh(),this.close())}dockFor(e){if(e.dock==="window")return;const t=this.instances.filter(r=>r.id!==e.id&&r.dock?.edge===e.dock&&r.dock?.host.kind==="table"&&r.dock.host.tableId===this.tableId).length,n=e.id?this.instances.find(r=>r.id===e.id)?.dock:void 0;return{host:{kind:"table",tableId:this.tableId},edge:e.dock,size:n?.size??160,order:n?.order??t}}renderList(){return k`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>k`<li>
                <span class="name">${e.name}</span>
                <button type="button" class="mini" @click=${()=>this.openInstance(e.id)}>Open</button>
                <button type="button" class="mini" @click=${()=>void this.editInstance(e)}>Edit</button>
                <button type="button" class="mini" title="Duplicate this view, picking up columns added to the table since" @click=${()=>void this.copyInstance(e)}>Copy</button>
                <button type="button" class="mini danger" @click=${()=>void this.deleteInstance(e.id)}>Delete</button>
              </li>`)}
        </ul>
      </div>
      <div class="section">
        <h3>View templates (workspace)</h3>
        <ul class="list">
          ${this.templates.map(e=>k`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?k`<span class="badge">built-in</span>`:ee}
                <button type="button" class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button type="button" class="mini" @click=${()=>this.editTemplate(e)}>Edit</button>
                <button type="button" class="mini" @click=${()=>this.copyTemplate(e)}>Copy</button>
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
          <button type="button" class="mini" @click=${()=>this.newTemplate("html")}>+ New template</button>
          ${this.visualizations().length>0?k`<button type="button" class="mini" @click=${()=>this.newTemplate("viz")}>+ New chart</button>`:ee}
        </div>
        <p class="hint">
          A template's row HTML uses <code>$TOKEN</code> placeholders (e.g. <code>$TITLE</code>). Leave row HTML blank to show a read-only columns table with the header/footer HTML around it.
        </p>
        <p class="hint">A chart template draws instead — bar, line, pie, a map or a word cloud — in its own window or docked above or below the table.</p>
      </div>
    `}renderTemplate(){const e=this.tDraft,t=n=>r=>{this.tDraft={...e,[n]:r.target.value}};return k`
      <label class="field">
        Name
        <input type="text" .value=${e.name} @input=${t("name")} placeholder="e.g. Cards" />
      </label>
      ${e.kind==="viz"?this.renderVizTemplate(e):this.renderHtmlTemplate(e,t)}
    `}renderHtmlTemplate(e,t){return k`
      <label class="field">
        Header HTML
        <textarea .value=${e.headerHtml} @input=${t("headerHtml")}></textarea>
      </label>
      <label class="field">
        Row HTML <span class="hint">(blank ⇒ read-only table)</span>
        <textarea .value=${e.rowHtml} @input=${t("rowHtml")} placeholder="&lt;div&gt;$TITLE&lt;/div&gt;"></textarea>
      </label>
      <label class="field">
        Footer HTML
        <textarea .value=${e.footerHtml} @input=${t("footerHtml")}></textarea>
      </label>
    `}setViz(e){const t=this.tDraft;t?.viz&&(this.tDraft={...t,viz:{...t.viz,...e}})}setAggregate(e){const t=this.tDraft;if(!t?.viz)return;const n=this.vizSpecOf(t.viz.kind),r=t.viz.aggregate??n?.defaultAggregate??{groupBy:["CATEGORY"],measures:[{channel:"VALUE",fn:"count"}]};this.tDraft={...t,viz:{...t.viz,aggregate:{...r,...e}}}}renderVizTemplate(e){const t=this.visualizations();if(t.length===0)return k`<p class="hint">No visualizations are registered. Enable the Charts, Map or Word cloud plugins in the Plugin Manager.</p>`;const n=this.vizSpecOf(e.viz?.kind)??t[0];if(!n)return ee;const r=e.viz?.aggregate??n.defaultAggregate??null,i=r?.measures[0],s=e.viz?.options??{};return k`
      <label class="field">
        Visualization
        <select
          @change=${o=>{const a=this.vizSpecOf(o.target.value);a&&this.setViz({kind:a.id,aggregate:a.defaultAggregate,options:{}})}}
        >
          ${t.map(o=>k`<option value=${o.id} ?selected=${o.id===n.id}>${o.label}</option>`)}
        </select>
      </label>
      ${n.data==="aggregate"&&r?k`
            <div class="section">
              <h3>What it measures</h3>
              <label class="field">
                Aggregate
                <select @change=${o=>this.setAggregate({measures:[{channel:"VALUE",fn:o.target.value}]})}>
                  ${[["count","Count of rows"],["sum","Sum of the value column"],["avg","Average of the value column"],["min","Minimum of the value column"],["max","Maximum of the value column"],["countDistinct","Distinct values of the value column"]].map(([o,a])=>k`<option value=${o} ?selected=${i?.fn===o}>${a}</option>`)}
                </select>
              </label>
              <label class="field">
                Order
                <select @change=${o=>this.setAggregate({sort:o.target.value})}>
                  <option value="category" ?selected=${r.sort==="category"}>By category</option>
                  <option value="valueDesc" ?selected=${r.sort==="valueDesc"}>Largest first</option>
                  <option value="value" ?selected=${r.sort==="value"}>Smallest first</option>
                </select>
              </label>
              <label class="field">
                Show at most (groups, 0 = all)
                <span class="hint">The rest are folded into one “Other”, never dropped.</span>
                <input
                  type="number"
                  min="0"
                  .value=${String(r.topN??0)}
                  @input=${o=>{const a=Math.max(0,Number(o.target.value)||0);this.setAggregate(a>0?{topN:a}:{topN:void 0})}}
                />
              </label>
            </div>
          `:ee}
      ${n.options&&n.options.length>0?k`
            <div class="section">
              <h3>Options</h3>
              ${n.options.map(o=>this.renderVizOption(o,s))}
            </div>
          `:ee}
      <p class="hint">Columns are mapped when you create a view from this template, so one chart works on any table with matching columns.</p>
    `}renderVizOption(e,t){const n=t[e.key]??e.default,r=i=>this.setViz({options:{...t,[e.key]:i}});return e.type==="boolean"?k`<label class="field-inline">
        <input type="checkbox" .checked=${n===!0} @change=${i=>r(i.target.checked)} />
        ${e.label}
      </label>`:e.type==="number"?k`<label class="field">
        ${e.label} ${e.description?k`<span class="hint">${e.description}</span>`:ee}
        <input type="number" .value=${n==null?"":String(n)} @input=${i=>r(Number(i.target.value)||0)} />
      </label>`:e.type==="option"&&e.options?k`<label class="field">
        ${e.label}
        <select @change=${i=>r(i.target.value)}>
          ${e.options.map(i=>k`<option value=${i} ?selected=${n===i}>${i}</option>`)}
        </select>
      </label>`:k`<label class="field">
      ${e.label} ${e.description?k`<span class="hint">${e.description}</span>`:ee}
      <input type="text" .value=${n==null?"":String(n)} @input=${i=>r(i.target.value)} />
    </label>`}renderInstance(){const e=this.iDraft;return k`
      <label class="field">
        View name
        <input type="text" .value=${e.name} @input=${t=>this.iDraft={...e,name:t.target.value}} />
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
      ${this.isVizDraft(e)?k`<label class="field">
            Where to show it
            <select @change=${t=>this.iDraft={...e,dock:t.target.value}}>
              <option value="window" ?selected=${e.dock==="window"}>In its own window</option>
              <option value="above" ?selected=${e.dock==="above"}>Docked above the table</option>
              <option value="below" ?selected=${e.dock==="below"}>Docked below the table</option>
            </select>
            <span class="hint">A docked chart follows the table's filters and search as you change them.</span>
          </label>`:k`<label class="field-inline">
            <input type="checkbox" .checked=${e.readonly} @change=${t=>this.iDraft={...e,readonly:t.target.checked}} />
            Readonly (show values without editors in the table view)
          </label>`}
      <div class="section">
        <h3>${this.isVizDraft(e)?"Map data to columns":"Map placeholders to columns"}</h3>
        ${e.tokens.length===0?k`<p class="hint">This template has no <code>$TOKEN</code> placeholders — it will show the read-only table with your current sort, filter and visible columns.</p>`:e.tokens.map(t=>k`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${n=>this.iDraft={...e,mapping:{...e.mapping,[t]:n.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(n=>k`<option value=${n.field} ?selected=${e.mapping[t]===n.field}>${n.label||n.field}</option>`)}
                  </select>
                  ${this.isVizDraft(e)?ee:k`<button
                          type="button"
                          class=${e.tokenRaw[t]?"mini":"mini scripted"}
                          title=${e.tokenRaw[t]?`$${t} shows the plain value — click to render it with the column's renderer`:`$${t} is shown by the column's renderer — click for the plain value`}
                          @click=${()=>this.toggleTokenRaw(t)}
                        >
                          ${e.tokenRaw[t]?"🔤":"🎨"}
                        </button>
                        <button
                          type="button"
                          class=${e.tokenScripts[t]?.trim()?"mini scripted":"mini"}
                          title=${e.tokenScripts[t]?.trim()?`Edit the script formatting $${t}`:`Format $${t} with a script (e.g. a local date, markdown as HTML)`}
                          @click=${()=>void this.editTokenScript(t)}
                        >
                          ƒ(x)
                        </button>`}
                </div>`)}
      </div>
      ${this.isVizDraft(e)?ee:k`<p class="hint">
            🎨 shows the token through the column's own cell renderer, so the view looks like the table; 🔤 shows the plain value instead (the same as writing <code>$raw.TOKEN</code>). A token inside
            a tag, as in <code>&lt;img src="$IMAGE"&gt;</code>, always stays plain.
          </p>`}
      <p class="hint">
        <code>ƒ(x)</code> gives a token a <code>render(row)</code> script, so the view can show a formatted value — a local date, markdown as HTML — without changing the stored cell. It applies to
        <code>$TOKEN</code> only, not to <code>$input.</code> or <code>$filter.</code>.
      </p>
      <p class="hint">
        ${e.id?k`Editing name and column mapping. The snapshotted sort, filters and visible columns are kept.`:k`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?k`<button type="button" class="ghost" @click=${()=>this.mode="list"}>Back</button> <button type="submit" class="primary">Save</button>`:this.mode==="instance"?k`<button type="button" class="ghost" @click=${()=>this.mode="list"}>Back</button> <button type="submit" class="primary">${this.iDraft?.id?"Save":"Create view"}</button>`:k`<button type="submit" class="ghost">Close</button>`;return k`
      <dialog @cancel=${this.close} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${e}</h2>
            <div class="header-actions">${t}</div>
          </div>
          <div class="dialog-body">${this.mode==="template"?this.renderTemplate():this.mode==="instance"?this.renderInstance():this.renderList()}</div>
        </form>
      </dialog>
    `}};$t.instance=null;$t.styles=[mt,Ce`
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
        grid-template-columns: 8rem 1fr auto auto;
        align-items: center;
        gap: 0.5rem;
      }
      .map-row code {
        font-family: ui-monospace, SFMono-Regular, monospace;
        color: #2563eb;
      }
      /* A token whose script is set says so on the button itself — the script
         lives in a modal, so nothing else in the row would show it. */
      button.mini.scripted {
        border-color: #2563eb;
        color: #2563eb;
        background: #eff6ff;
      }
    `];_r([z()],$t.prototype,"mode",2);_r([z()],$t.prototype,"instances",2);_r([z()],$t.prototype,"templates",2);_r([z()],$t.prototype,"tDraft",2);_r([z()],$t.prototype,"iDraft",2);$t=_r([Oe("views-dialog")],$t);const HC={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},VC="grid_view",KC={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},WC={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},GC={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},YC={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},QC=[KC,WC,GC,YC];function JC(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:VC,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>wl(n)})}async function XC(e){await e_(e)}function ZC(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function e_(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of QC)await t_(e,t,r,n)}async function t_(e,t,n,r){const i=`views:seeded:${n.slug}:${t}`,s=`views:sig:${n.slug}:${t}`,o=ZC(n),a=r.find(d=>d.builtin&&d.name===n.name);if(a){(await e.store.settings.findOne(s))?.value!==o&&(await e.store.viewTemplates.patch(a.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:o})),await e.store.settings.upsert({name:i,value:!0});return}(await e.store.settings.findOne(i))?.value||(await e.store.viewTemplates.insert({id:n_(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:!0}),await e.store.settings.upsert({name:s,value:o}))}function n_(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const r_=Object.freeze(Object.defineProperty({__proto__:null,init:JC,load:XC,meta:HC},Symbol.toStringTag,{value:"Module"})),i_={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function s_(e){e.ui.registerSettings(Oo,"Table grid",[{key:"sortDescFirst",label:"Sort descending first",type:"boolean",default:!0,scope:"workspace",description:"Clicking a column header sorts descending, then ascending, then off. Turn this off to start ascending. Dates, scores and counts are usually read from the high end down, which took two clicks before."},{key:"highlightNulls",label:"Highlight empty cells",type:"boolean",default:!0,scope:"workspace",description:"An empty cell gets a pink background, so a gap in the data is visible whatever the column draws. Turn it off for a table that is mostly empty on purpose, where the colour is noise. A value that does not fit its column type stays marked red either way."}]),e.ui.registerSettings(Ec,"Visualizations",[{key:"tileUrl",label:"Map tile URL template",type:"string",default:Tc,scope:"workspace",description:"Where map visualizations fetch their background tiles. The default is OpenStreetMap, whose tile policy asks that heavy or commercial use runs its own server — point this at that server, or at a local one for an offline install. A map still plots its points when tiles cannot be loaded.",helpUrl:"https://operations.osmfoundation.org/policies/tiles/",helpLinkLabel:"OpenStreetMap tile usage policy"},{key:"tileAttribution",label:"Map attribution",type:"string",default:Ic,scope:"workspace",description:"Credit shown in the map corner. Most tile providers require this."},{key:"cloudMaxTerms",label:"Word cloud: most words to lay out",type:"number",default:120,scope:"workspace",description:"The cloud layout runs on the main thread, so this is capped — a very high number makes the window unresponsive while it settles."}]),e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const i=Array.from(t.dataTransfer?.files??[]).find(a=>a.name.toLowerCase()==="secrets.txt");if(!i)return!1;const s=await i.text(),o=Object.keys(ur(s)).length;return li().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${i.name}"?`,"Import secrets")||(Bh(s),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const o_=Object.freeze(Object.defineProperty({__proto__:null,init:s_,meta:i_},Symbol.toStringTag,{value:"Module"}));class ln extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function a_(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function l_(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function c_(e,t){const n=a_(t.source?.config),r=new Set;let i=[],s=new Map,o=!1,a=null;const c=new Map;let d=null,f=!1;function m(W){const I=new Map;for(const K of W)I.has(K.name)||I.set(K.name,K);const V=new Map;for(const K of n.sources){const ie=I.get(K.tableName);ie&&V.set(K.alias,ie.id)}return V}async function b(){return m(await e.tables.find({workspaceId:t.workspaceId}))}async function y(){const W=await e.tables.find({workspaceId:t.workspaceId}),I={rows:[],provenance:new Map};if(av(t.id,W))return I;const V=m(W),K=new Map(W.map(te=>[te.id,te])),ie=Xy(n),de={};for(const te of n.sources){const q=V.get(te.alias);if(!q)return I;const Y=ie[te.alias]??[],ae=await Ei(e.rows(q),{columns:K.get(q)?.columns??[],fields:Y.length>0?Y:["id"]});de[te.alias]=ae.rows}const H=Zy(n,de);return{rows:H.rows.map(te=>({...te,tableId:t.id})),provenance:H.provenance}}async function v(){const{rows:W,provenance:I}=await y();return i=W,s=I,o=!0,W}function $(){return a||(a=(async()=>{try{return await v()}finally{a=null}})(),a)}async function C(){const W=await b(),I=new Set(W.values());for(const[V,K]of c)I.has(V)||(K(),c.delete(V));for(const V of I)if(!c.has(V)){const K=e.rows(V);c.set(V,K.watch?K.watch(E):K.subscribe(E))}}function E(){f||(f=!0,queueMicrotask(async()=>{f=!1,await C();const W=o?await v():await $();for(const I of r)I(W)}))}function T(W,I){return W===I||W==null&&I==null?!0:W==null||I==null?!1:String(W)===String(I)}async function Q(W,I){o||await $();const V=i.find(te=>te.id===W)?.data,K=s.get(W),ie=new Map,de=[];for(const[te,q]of Object.entries(I)){if(V&&T(V[te],q))continue;const Y=dv(n,W,te,K);if(!Y){de.push(te);continue}const ae=ie.get(Y.alias)??{rowId:Y.rowId,updates:{}};ae.updates[Y.field]=q,ie.set(Y.alias,ae)}if(de.length>0)throw new ln(ne(de,K));if(ie.size===0)return{id:W,tableId:t.id,data:I,updatedAt:Date.now()};const H=await b();for(const[te,{rowId:q,updates:Y}]of ie){const ae=H.get(te);if(!ae)throw new ln(`the "${P(te)}" table is not available`);const we=e.rows(ae),$e=await we.findOne(q);if(!$e)throw new ln("the underlying row no longer exists");await we.patch(q,{data:{...$e.data,...Y},updatedAt:Date.now()})}return{id:W,tableId:t.id,data:I,updatedAt:Date.now()}}function P(W){return n.sources.find(I=>I.alias===W)?.tableName??W}function ne(W,I){const V=W[0],K=n.columns.find(ie=>ie.field===V);return!K||K.from.kind==="script"?`"${V}" is computed by a script, so there is no cell to save it in`:I&&!I[K.from.alias]?`this row has no matching "${P(K.from.alias)}" row, so there is nowhere to save "${V}"`:`"${V}" cannot be written back to its source`}return{async find(W){const I=o?i:await $();return!W||Object.keys(W).length===0?I:I.filter(V=>l_(V,W))},async findOne(W){return(o?i:await $()).find(V=>V.id===W)??null},async insert(){throw new ln("rows are derived from other tables")},async bulkInsert(){throw new ln("rows are derived from other tables")},async upsert(W){return Q(W.id,W.data)},async patch(W,I){if(!I.data)throw new ln("a cell edit must carry row data");return Q(W,I.data)},async remove(){throw new ln("rows are derived from other tables")},async bulkRemove(){throw new ln("rows are derived from other tables")},subscribe(W){return r.add(W),d||(d=e.tables.subscribe(E)),o?W(i):E(),()=>{if(r.delete(W),r.size===0){d?.(),d=null;for(const I of c.values())I();c.clear(),o=!1}}},async refresh(){await C();const W=await v();for(const I of r)I(W)}}}function u_(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,i=2;for(;t.has(r);)r=`${n}_${i++}`;return t.add(r),r}function d_(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function h_(e,t,n){const r=t.sources.map(a=>{const c=n.find(b=>b.name===a.tableName),d={alias:a.alias,tableId:c?.id??"",tableName:a.tableName,columns:c?.columns??[]},f=a.join?.on??[],m=f[0];return a.join&&m&&(d.join={type:a.join.type,thisField:m.field,otherAlias:m.eqAlias,otherField:m.eqField},f.length>1&&(d.extraOn=f.slice(1))),d}),i=t.columns.map(a=>{const c={include:!0,outField:a.field,label:a.label??a.field};return a.from.kind==="source"?{...c,alias:a.from.alias,field:a.from.field,computed:!1}:{...c,script:a.from.script,computed:!0}}),s=[],o=new Set;r.forEach((a,c)=>{const d=r.slice(0,c).filter(f=>f.tableName===a.tableName).length;for(const f of a.columns){const m=i.filter(b=>!b.computed&&b.alias===a.alias&&b.field===f.field&&!o.has(b));if(m.length>0)for(const b of m)o.add(b),s.push(b);else s.push({include:!1,alias:a.alias,field:f.field,computed:!1,label:d>0?`${f.label} (${a.alias})`:f.label})}});for(const a of i)!a.computed&&!o.has(a)&&s.push(a);for(const a of i)a.computed&&s.push(a);return{name:e,sources:r,columns:s,...t.limit?{limit:t.limit}:{},original:t}}function f_(e,t){const n=d_(e.sources),r=e.sources.length===0,i=e.sources.filter(a=>a.tableName===t.name).length;let s;if(!r){const a=e.sources.flatMap(d=>d.join?[{alias:d.join.otherAlias,field:d.join.otherField},...(d.extraOn??[]).map(f=>({alias:f.eqAlias,field:f.eqField}))]:[]),c=cv({tableName:t.name,fields:t.columns.map(d=>d.field),pks:t.columns.filter(d=>d.unique).map(d=>d.field)},e.sources.map(d=>({alias:d.alias,tableName:d.tableName,fields:d.columns.map(f=>f.field),pks:d.columns.filter(f=>f.unique).map(f=>f.field)})),a);s={type:"left",thisField:c?.thisField??t.columns[0]?.field??"",otherAlias:c?.otherAlias??e.sources[0]?.alias??"",otherField:c?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...s?{join:s}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(a=>({include:!0,alias:n,field:a.field,computed:!1,label:i>0?`${a.label} (${n})`:a.label}))]}}function p_(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const i of e.sources){if(n.has(i.alias)||!i.join)continue;[i.join.otherAlias,...(i.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(i.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function m_(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function g_(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(c=>c.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let c=0;c<e.sources.length;c++){const d=e.sources[c];if(!d?.join)continue;if(!d.join.thisField||!d.join.otherField)return{ok:!1,error:`Set both join keys for "${d.tableName}".`};const f=new Set(e.sources.slice(0,c).map(b=>b.alias));if([d.join.otherAlias,...(d.extraOn??[]).map(b=>b.eqAlias)].some(b=>!f.has(b)))return{ok:!1,error:`The join for "${d.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(c=>c.alias)),i=new Set,s=[];for(const c of n){let d;if(c.outField&&!i.has(c.outField)?(d=c.outField,i.add(d)):d=u_(c.computed?"computed":c.field??"col",i),c.computed){s.push({field:d,from:{kind:"script",script:c.script??""}});continue}const f=c.alias,m=c.field;if(!f||!m||!r.has(f))return{ok:!1,error:`Column "${c.label??c.field}" belongs to a table that is no longer part of this projection.`};s.push({field:d,from:{kind:"source",alias:f,field:m}})}const o=e.sources.map(c=>{const d={alias:c.alias,tableName:c.tableName};return c.join&&(d.join={type:c.join.type,on:[{field:c.join.thisField,eqAlias:c.join.otherAlias,eqField:c.join.otherField},...c.extraOn??[]]}),d}),a={...e.original??{},version:1,sources:o,columns:s};return e.limit!=null&&e.limit>0?a.limit=Math.floor(e.limit):delete a.limit,{ok:!0,name:t,spec:a}}var b_=Object.defineProperty,w_=Object.getOwnPropertyDescriptor,Er=(e,t,n,r)=>{for(var i=r>1?void 0:r?w_(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&b_(t,n,i),i};let xt=class extends xe{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),xt.instance=this}disconnectedCallback(){super.disconnectedCallback(),xt.instance===this&&(xt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Xt("projection",this.dialogEl)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(h_(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(f_(this.modelOf(),e))}removeSource(e){this.applyModel(p_(this.modelOf(),e))}addComputed(){this.applyModel(m_(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=g_(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return k`
      <dialog @cancel=${()=>this.dialogEl?.close()} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.dialogEl?.close()}>×</button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${this.editing?"Edit Projection":"New Projection"}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.dialogEl?.close()}>Cancel</button>
              <button type="submit" class="primary">Save</button>
            </div>
          </div>
          <div class="dialog-body">
            <div class="head-row">
              <label>
                Name
                <input id="proj-name" .value=${this.name} @input=${t=>this.name=t.target.value} />
              </label>
              <label>
                Row limit
                <input
                  id="proj-limit"
                  type="number"
                  min="0"
                  placeholder="all"
                  .value=${this.limit}
                  title="Cap the number of rows (TOP N). Blank or 0 shows every row."
                  @input=${t=>this.limit=t.target.value}
                />
              </label>
            </div>

            <section>
              <div class="section-head">
                <h3>Sources</h3>
                <span class="hint">The base table, plus a join for each table hung off it.</span>
              </div>
              <div class="sources">${this.sources.map((t,n)=>this.renderSource(t,n===0))}</div>
              <div class="add-row">
                <select id="add-src" ?disabled=${this.candidates.length===0}>
                  ${this.candidates.map(t=>k`<option value=${t.id}>${t.name}</option>`)}
                </select>
                <button
                  type="button"
                  class="ghost sm"
                  @click=${()=>{const t=this.shadowRoot?.getElementById("add-src");t?.value&&this.addSource(t.value)}}
                >
                  ${e?"+ Join table":"+ Base table"}
                </button>
                ${e?k`<span class="hint">A table may be joined more than once.</span>`:ee}
              </div>
            </section>

            <section>
              <div class="section-head">
                <h3>Columns</h3>
                <span class="hint"> Tick what the projection includes. Labels, types and formatting are inherited from the source and edited with “Edit columns”. </span>
              </div>
              ${this.sources.map(t=>this.renderSourceColumns(t))} ${this.renderComputedColumns()}
            </section>

            <div class="err">${this.error}</div>
          </div>
        </form>
      </dialog>
    `}renderSource(e,t){return k`
      <div class="src">
        <div class="src-head">
          <span class="badge ${t?"base":""}">${t?"Base":"Join"}</span>
          <span class="name">${e.tableName}</span>
          <code class="alias" title="Alias used by the join keys below">${e.alias}</code>
          <span class="spacer"></span>
          ${t?ee:k`<button type="button" class="icon-btn" title="Remove this join" aria-label="Remove ${e.tableName}" @click=${()=>this.removeSource(e.alias)}>×</button>`}
        </div>
        ${e.join?k`<div class="join-grid">
              <select .value=${e.join.type} @change=${n=>this.patchSource(e.alias,{type:n.target.value})}>
                <option value="left">LEFT JOIN</option>
                <option value="inner">INNER JOIN</option>
              </select>
              <span class="kw">ON</span>
              <select .value=${e.join.thisField} @change=${n=>this.patchSource(e.alias,{thisField:n.target.value})}>
                ${e.columns.map(n=>k`<option value=${n.field} ?selected=${n.field===e.join?.thisField}>${e.alias}.${n.field}</option>`)}
              </select>
              <span class="kw">=</span>
              <select
                .value=${`${e.join.otherAlias}.${e.join.otherField}`}
                @change=${n=>{const[r,i]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:i??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>k`<option value=${`${n.alias}.${r.field}`} ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}>${n.alias}.${r.field}</option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderSourceColumns(e){const t=this.columns.map((r,i)=>({c:r,i})).filter(({c:r})=>!r.computed&&r.alias===e.alias);if(t.length===0)return ee;const n=t.every(({c:r})=>r.include);return k`
      <div class="col-group">
        <div class="group-head">
          <code class="alias">${e.alias}</code>
          <span class="group-name">${e.tableName}</span>
          <button
            type="button"
            class="link-btn"
            @click=${()=>{const r=!n,i=new Set(t.map(({i:s})=>s));this.columns=this.columns.map((s,o)=>i.has(o)?{...s,include:r}:s)}}
          >
            ${n?"none":"all"}
          </button>
        </div>
        <div class="ticks">
          ${t.map(({c:r,i})=>k`
              <label class="tick ${r.include?"":"off"}" title=${`${r.alias}.${r.field}`}>
                <input type="checkbox" .checked=${r.include} @change=${s=>this.setColumn(i,{include:s.target.checked})} />
                <span class="tick-name">${r.field}</span>
              </label>
            `)}
        </div>
      </div>
    `}renderComputedColumns(){const e=this.columns.map((t,n)=>({c:t,i:n})).filter(({c:t})=>t.computed);return k`
      <div class="col-group">
        <div class="group-head">
          <span class="chip">computed</span>
          <button type="button" class="link-btn" @click=${()=>this.addComputed()}>+ add</button>
        </div>
        ${e.length===0?k`<span class="hint">None. A computed column derives its value from the row.</span>`:e.map(({c:t,i:n})=>k`
                <div class="computed-row ${t.include?"":"off"}">
                  <input type="checkbox" .checked=${t.include} aria-label="Include computed column" @change=${r=>this.setColumn(n,{include:r.target.checked})} />
                  <textarea
                    class="script"
                    aria-label="Computed column script"
                    spellcheck="false"
                    .value=${t.script??""}
                    @input=${r=>this.setColumn(n,{script:r.target.value})}
                  ></textarea>
                  <button
                    type="button"
                    class="icon-btn"
                    title="Remove this computed column"
                    aria-label="Remove computed column"
                    @click=${()=>{this.columns=this.columns.filter((r,i)=>i!==n)}}
                  >
                    ×
                  </button>
                </div>
              `)}
      </div>
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};xt.instance=null;xt.styles=[mt,Ce`
      dialog {
        width: 760px;
        max-width: 96vw;
      }
      /* -- shared controls (mirrors the column editor's look) -------------- */
      input,
      select,
      textarea {
        font: inherit;
        padding: 0.4rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        background: white;
        color: #111827;
        min-width: 0; /* let a grid cell shrink instead of overflowing */
      }
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.18);
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.85rem;
        color: #374151;
      }
      button.ghost.sm {
        padding: 0.3rem 0.6rem;
        font-size: 0.82rem;
      }
      button.icon-btn {
        background: transparent;
        border: 0;
        color: #9ca3af;
        cursor: pointer;
        padding: 0;
        font-size: 1.05rem;
        line-height: 1;
      }
      button.icon-btn:hover {
        color: #ef4444;
      }

      /* -- sections -------------------------------------------------------- */
      section {
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
        border-top: 1px solid #e5e7eb;
        padding-top: 0.9rem;
      }
      .section-head {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      h3 {
        margin: 0;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #6b7280;
      }
      .hint {
        color: #9ca3af;
        font-size: 0.78rem;
      }
      .add-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .add-row select {
        max-width: 14rem;
      }
      /* Name takes the space; the row cap is a narrow field beside it. */
      .head-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 7rem;
        gap: 0.6rem;
        align-items: end;
      }
      @media (max-width: 640px) {
        .head-row {
          grid-template-columns: 1fr;
        }
      }

      /* -- sources --------------------------------------------------------- */
      .sources {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .src {
        border: 1px solid #e5e7eb;
        border-radius: 0.4rem;
        background: #f9fafb;
        padding: 0.6rem 0.7rem;
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
      }
      .src-head {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .src-head .name {
        font-weight: 600;
        color: #111827;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .src-head .spacer {
        flex: 1;
      }
      .badge {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 0.15rem 0.4rem;
        border-radius: 0.2rem;
        background: #e5e7eb;
        color: #4b5563;
      }
      .badge.base {
        background: #dbeafe;
        color: #1d4ed8;
      }
      code.alias {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.72rem;
        background: #eef2f7;
        color: #4b5563;
        border: 1px solid #e5e7eb;
        border-radius: 0.2rem;
        padding: 0.05rem 0.3rem;
      }
      /* One grid for every join row, so the two field pickers line up down the
         list however long the table names are. */
      .join-grid {
        display: grid;
        grid-template-columns: 8rem auto minmax(0, 1fr) auto minmax(0, 1fr);
        align-items: center;
        gap: 0.4rem;
      }
      .kw {
        font-size: 0.72rem;
        font-weight: 700;
        color: #9ca3af;
        letter-spacing: 0.04em;
      }

      /* -- columns: a dense tick list per source --------------------------- */
      .col-group {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }
      .group-head {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.78rem;
        color: #6b7280;
      }
      .group-name {
        font-weight: 600;
        color: #374151;
      }
      button.link-btn {
        background: none;
        border: 0;
        padding: 0;
        font: inherit;
        font-size: 0.75rem;
        color: #2563eb;
        cursor: pointer;
        text-decoration: underline;
      }
      .ticks {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem 0.4rem;
      }
      /* Each column is a compact pill, so a wide table costs a couple of rows
         instead of one row per column. */
      label.tick {
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.8rem;
        color: #111827;
        border: 1px solid #e5e7eb;
        border-radius: 1rem;
        padding: 0.1rem 0.5rem 0.1rem 0.35rem;
        background: #f9fafb;
        cursor: pointer;
        max-width: 14rem;
      }
      label.tick:hover {
        border-color: #cbd5e1;
      }
      label.tick input {
        margin: 0;
      }
      label.tick .tick-name {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.74rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      label.tick.off {
        opacity: 0.55;
        background: transparent;
      }
      .chip {
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #1d4ed8;
        background: #dbeafe;
        border-radius: 0.2rem;
        padding: 0.1rem 0.35rem;
      }
      .computed-row {
        display: grid;
        grid-template-columns: 1.1rem minmax(0, 1fr) 1.3rem;
        gap: 0.4rem;
        align-items: start;
      }
      .computed-row.off {
        opacity: 0.55;
      }
      .computed-row input[type='checkbox'] {
        margin: 0.4rem 0 0;
      }
      textarea.script {
        width: 100%;
        box-sizing: border-box;
        min-height: 2.9rem;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.75rem;
      }

      .err {
        color: #b91c1c;
        font-size: 0.82rem;
        min-height: 1.1em;
      }
      .err:not(:empty) {
        background: #fef2f2;
        border: 1px solid #fecaca;
        border-radius: 0.25rem;
        padding: 0.4rem 0.55rem;
      }

      /* Phones: the dialog is full-screen (see dialog-chrome), so let the
         multi-column grids stack rather than squeeze. */
      @media (max-width: 640px) {
        .join-grid,
        .col-header,
        .col-row {
          grid-template-columns: 1fr;
        }
        .col-header {
          display: none;
        }
        .col-row {
          border: 1px solid #f3f4f6;
          border-radius: 0.3rem;
          padding: 0.45rem;
        }
        /* Stacked, the centred checkbox floats mid-row — align it with the rest. */
        .col-row input[type='checkbox'] {
          justify-self: start;
        }
        textarea.script {
          grid-column: 1;
        }
      }
    `];Er([z()],xt.prototype,"name",2);Er([z()],xt.prototype,"limit",2);Er([z()],xt.prototype,"sources",2);Er([z()],xt.prototype,"columns",2);Er([z()],xt.prototype,"error",2);xt=Er([Oe("projection-dialog")],xt);const y_={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function v_(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>(Pm(e,t),c_(e.store,t))}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void wh(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void wh(t,{editTableId:n})})}async function Pm(e,t){if(t.source?.type!=="projection")return;const n=t.source.config;if(!n||!Array.isArray(n.sources))return;const r=so(n),i=t.columns.map(a=>{const c=!r.has(a.field);if(c===(a.readonly===!0))return a;if(c)return{...a,readonly:!0};const d={...a};return delete d.readonly,d}),s=r.size===0;i.every((a,c)=>a===t.columns[c])&&(t.readonly??!1)===s||await e.store.tables.patch(t.id,{columns:i,readonly:s,updatedAt:Date.now()})}async function k_(e){const t=e.workspaceId();if(t)for(const n of await e.store.tables.find({workspaceId:t}))await Pm(e,n)}async function $_(e){await k_(e)}async function x_(e,t,n,r,i){const s=await e.store.tables.find({workspaceId:t}),o=new Map;for(const c of s)o.has(c.name)||o.set(c.name,c);const a={};for(const c of n.sources)a[c.alias]=o.get(c.tableName)?.columns??[];return Of(n,a,r,i)}async function wh(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),i=a=>({id:a.id,name:a.name,columns:a.columns}),s=xt.instance??S_();if(t.editTableId){const a=r.find(c=>c.id===t.editTableId)??null;if(!a||a.source?.type!=="projection")return;s.open({candidates:r.filter(c=>c.id!==a.id).map(i),initial:{name:a.name,spec:a.source.config},onSave:yh(e,n,a)});return}const o=r.find(a=>a.id===t.baseTableId);o&&s.open({base:i(o),candidates:r.map(i),onSave:yh(e,n,null,o)})}function yh(e,t,n,r){return async(i,s)=>{const o=await x_(e,t,s,n?.columns??[],n?.deletedColumns??[]),a=so(s).size===0,c={type:"projection",config:s};n?await e.store.tables.patch(n.id,{name:i,columns:o,source:c,readonly:a,updatedAt:Date.now()}):await e.store.tables.insert({id:Ee(),workspaceId:t,name:i,code:je(i),columns:o,view:"table",source:c,readonly:a,...r?sv(s,r):{},updatedAt:Date.now()})}}function S_(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const C_=Object.freeze(Object.defineProperty({__proto__:null,init:v_,load:$_,meta:y_},Symbol.toStringTag,{value:"Module"})),__={id:"viz-charts",name:"Charts (bar, line, pie)",type:"ui",version:"0.1.0",description:"Bar, column, line and pie visualizations of a table, in a window or docked to the grid.",icon:"bar_chart"},fs={key:"CATEGORY",label:"Category (group by)",kind:"category",required:!0},ps={key:"VALUE",label:"Value (measure)",kind:"value"},La={key:"SERIES",label:"Split into series (optional)",kind:"series"},Ma=[{key:"xTitle",label:"X axis title",type:"string"},{key:"yTitle",label:"Y axis title",type:"string"},{key:"beginAtZero",label:"Start the value axis at zero",type:"boolean",default:!0},{key:"legend",label:"Show the legend",type:"boolean"}];function E_(e){const t={groupBy:["CATEGORY"],measures:[{channel:"VALUE",fn:"count"}],sort:"valueDesc"};e.ui.registerVisualization({id:"bar",label:"Bar chart",icon:"bar_chart",tag:"viz-bar-chart",channels:[fs,ps,La],data:"aggregate",defaultAggregate:t,options:[...Ma,{key:"stacked",label:"Stack the bars",type:"boolean"}]}),e.ui.registerVisualization({id:"column",label:"Column chart",icon:"insert_chart",tag:"viz-column-chart",channels:[fs,ps,La],data:"aggregate",defaultAggregate:t,options:[...Ma,{key:"stacked",label:"Stack the columns",type:"boolean"}]}),e.ui.registerVisualization({id:"line",label:"Line chart",icon:"show_chart",tag:"viz-line-chart",channels:[{...fs,label:"X axis (group by)",kind:"time"},ps,La],data:"aggregate",defaultAggregate:{...t,sort:"category"},options:[...Ma,{key:"area",label:"Fill under the line",type:"boolean"},{key:"smooth",label:"Curve the line",type:"boolean"},{key:"stacked",label:"Stack the series",type:"boolean"}]}),e.ui.registerVisualization({id:"pie",label:"Pie chart",icon:"pie_chart",tag:"viz-pie-chart",channels:[fs,ps],data:"aggregate",defaultAggregate:{...t,topN:8},options:[{key:"legend",label:"Show the legend",type:"boolean",default:!0}]})}const T_=Object.freeze(Object.defineProperty({__proto__:null,init:E_,meta:__},Symbol.toStringTag,{value:"Module"})),I_={id:"viz-map",name:"Map",type:"ui",version:"0.1.0",description:"Plot rows with latitude/longitude columns as points on a map.",icon:"public"};function A_(e){e.ui.registerVisualization({id:"map",label:"Map",icon:"public",tag:"viz-point-map",channels:[{key:"LAT",label:"Latitude",kind:"lat",accepts:["number"],required:!0},{key:"LON",label:"Longitude",kind:"lon",accepts:["number"],required:!0},{key:"LABEL",label:"Tooltip label (optional)",kind:"text"},{key:"WEIGHT",label:"Size by (optional)",kind:"weight",accepts:["number"]}],data:"rows",options:[{key:"radius",label:"Marker size (px)",type:"number",default:6},{key:"scaleByWeight",label:"Scale markers by the size column",type:"boolean"},{key:"tileUrl",label:"Tile URL template",type:"string",description:"Leave blank to use the Settings → Visualizations default."}]})}const R_=Object.freeze(Object.defineProperty({__proto__:null,init:A_,meta:I_},Symbol.toStringTag,{value:"Module"})),O_={id:"viz-wordcloud",name:"Word cloud",type:"ui",version:"0.1.0",description:"Show the most frequent words in a text column, sized by how often they occur.",icon:"cloud"};function D_(e){e.ui.registerVisualization({id:"wordcloud",label:"Word cloud",icon:"cloud",tag:"viz-word-cloud",channels:[{key:"TEXT",label:"Text column",kind:"text",required:!0}],data:"rows",options:[{key:"minLength",label:"Ignore words shorter than",type:"number",default:3},{key:"maxTerms",label:"Most words to show",type:"number",default:120,description:"Capped — the layout runs on the main thread."},{key:"stopWords",label:"Drop common words (the, and, of…)",type:"boolean",default:!0},{key:"includeNumbers",label:"Include numbers",type:"boolean"},{key:"rotate",label:"Allow sideways words",type:"boolean"}]})}const L_=Object.freeze(Object.defineProperty({__proto__:null,init:D_,meta:O_},Symbol.toStringTag,{value:"Module"})),M_={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function P_(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",variant:"secondary",onClick:()=>e.ui.openCommandPalette()})}const N_=Object.freeze(Object.defineProperty({__proto__:null,init:P_,meta:M_},Symbol.toStringTag,{value:"Module"})),Pa="electron-db:pendingImport",Nm=15*1024*1024;function jm(e){const t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0&&e.slice(t+1)||e}function zm(e){return e>=1024*1024?`${(e/(1024*1024)).toFixed(1)} MB`:e>=1024?`${Math.round(e/1024)} KB`:`${e} bytes`}let ii=null;const j_={id:"electron-db",name:"Database File",type:"ui",version:"0.1.0",description:"Open, Save As, or Import a .db file (Electron desktop build only).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/electron-db.ts"},z_=/\.(edb|db|sqlite|sqlite3)$/i,F_=/\.edb$/i;function U_(e){const t=window.easydb?.db;t&&(e.ui.registerDropHandler(async n=>{const r=[...n.dataTransfer?.files??[]].find(s=>z_.test(s.name));if(!r)return!1;const i=t.pathForFile(r);return i?(await Um(e,t,i,F_.test(r.name)),!0):(await e.ui.dialogs.alert(`"${r.name}" could not be located on disk, so it cannot be opened.`,"Database file"),!0)}),t.onImportProgress(n=>{if(document.dispatchEvent(new CustomEvent(al,{detail:{tableId:n.tableId,rows:n.rows,total:n.total,...n.done?{done:!0}:{}}})),!ii)return;const{tracker:r,label:i}=ii;n.done?r.complete(n.tableId):r.observe(n.tableId,n.rows),oo({label:i,fraction:r.fraction(),detail:`${r.completedTables()} of ${r.tableCount} table${r.tableCount===1?"":"s"}`})}),e.ui.registerFooterButton({id:"electron-db:menu",label:"Database",icon:"storage",tooltip:"Open, Save As, or Import a .db file",onClick:async(n,r)=>{const{AnchoredMenu:i}=await Ie(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>hr);return{AnchoredMenu:a}},void 0),s=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(s,[{id:"open",label:"Open…",icon:"folder_open"},{id:"saveAs",label:"Save As…",icon:"save"},{id:"import",label:"Import…",icon:"file_download"},...Km()?[{id:"stop",label:"Stop importing",icon:"cancel"}]:[]]);if(o)try{o==="open"?await Fm(n,t):o==="saveAs"?await H_(n,t):o==="import"?await Lo(n,t):o==="stop"&&Wm()}catch(a){n.ui.dialogs.toast(`${o} failed: ${a.message}`,{kind:"error",title:"Database file"})}}}))}function B_(e){const t=window.easydb?.db;t&&Gm(e,t).catch(n=>{e.ui.dialogs.toast(`Finishing the conversion failed: ${n.message}`,{kind:"error",title:"Convert to EDA"})})}async function Fm(e,t){const n=await t.openDb();n.ok&&await Dc(e,t,n.path,n.kind)}async function Um(e,t,n,r){if(!r){await Lo(e,t,n);return}const i=await t.probeDb(n);if(i==="easydb"){await Bm(e,t,n,i);return}e.ui.dialogs.toast(`"${n}" is named as a workspace but does not contain one.`,{kind:"warning",title:"Open workspace"}),await Dc(e,t,n,i)}async function Dc(e,t,n,r){if(r==="unreadable"){await e.ui.dialogs.alert(`"${n}" is not a SQLite database — it could not be read.`,"Database file");return}const i=await e.ui.dialogs.choice(`What would you like to do with "${n}"?`,["Open Workspace","Browse .db file","Import data"],"Database file");if(i){if(i==="Import data"){await Lo(e,t,n);return}if(i==="Browse .db file"){await qm(e,t,n);return}await Bm(e,t,n,r)}}async function Bm(e,t,n,r){if(r==="foreign"){const s=await e.ui.dialogs.choice(`"${n}" is a SQLite database, but not an easyDBAccess workspace — there is no workspace in it to open.

It can be converted into one (a new file is written; this one is left exactly as it is), or opened read-only for a look.`,["Convert to EDA","Browse"],"Open workspace");s==="Convert to EDA"?await q_(e,t,n):s==="Browse"&&await qm(e,t,n);return}await e.ui.dialogs.confirm(`Open "${n}"?

This replaces the current workspace view with that file's data. Nothing is deleted — the file you have open now is left exactly as it is on disk.`,"Open workspace")&&await t.openDbCommit(n)}async function q_(e,t,n){const r=await t.browseList(n);if(r.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to convert.`,"Convert to EDA");return}const i=await Hm(e,r,"Convert to EDA",{offerTablesOnly:!0});i.length===0||(await t.convertDb(n,i.map(o=>o.name))).ok}async function H_(e,t){const n=await t.saveDbAs();n.ok&&e.ui.dialogs.toast(`Saved a copy to "${n.path}" — that file is now the active database.`,{kind:"success",title:"Save database as"})}async function qm(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await t.browseList(n);if(i.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to browse.`,"Browse database");return}const s=await Hm(e,i,"Browse database");if(s.length===0)return;const o=new Set((await e.store.tables.find()).filter(c=>c.workspaceId===r).map(c=>c.name.toLowerCase()));for(const c of s){const d=Qm(c.name,o);o.add(d.toLowerCase()),await e.store.tables.insert({id:crypto.randomUUID(),workspaceId:r,name:d,columns:c.columns,view:"table",readonly:!0,source:{type:"sqlitefile",config:{path:n,objectName:c.name,isView:c.kind==="view"},writable:!1},updatedAt:Date.now()})}const a=s.filter(c=>c.kind==="view").length;e.ui.dialogs.toast(`Browsing ${s.length} object${s.length===1?"":"s"} from "${n}"${a?` (${a} view${a===1?"":"s"})`:""} — read-only.`,{kind:"success",title:"Browse database"})}async function Hm(e,t,n,r){if(t.length===1)return t;const i=t.filter(m=>m.kind==="table"),s=`All ${t.length}`,o=r?.offerTablesOnly&&i.length>0&&i.length<t.length?`All ${i.length} table${i.length===1?"":"s"} (skip the views)`:null,a=t.map(m=>`${m.name}${m.kind==="view"?" (view)":""}${m.rowCount==null?"":` — ${m.rowCount} rows`}`),c=await e.ui.dialogs.choice("Which tables or views?",[...o?[o]:[],s,...a],n);if(!c)return[];if(c===o)return i;if(c===s)return t;const d=a.indexOf(c),f=t[d];return f?[f]:[]}async function Lo(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await t.importDb(r,n);if(!i.ok)return;const{preview:s}=i;if(s.candidates.length===0){await e.ui.dialogs.alert(`No importable tables were found in "${i.path}".`,"Import database");return}const o=s.sizeBytes??0,a=await Ym.pickCandidates(e,s.candidates);if(a.length===0)return;const c=a.filter(E=>E.mode==="projection"),d=a.filter(E=>E.mode!=="projection").map(E=>E.candidate),f=new Set(d.map(E=>E.name));if(d.length===0&&c.length===0)return;const m=new Set((await e.store.tables.find()).filter(E=>E.workspaceId===r).map(E=>E.name.toLowerCase())),b={};for(const E of s.candidates){if(!f.has(E.name)){b[E.name]={action:"skip"};continue}if(!E.collides)continue;const T=await e.ui.dialogs.choice(`A table named "${E.name}" already exists in this workspace.`,["Append","Overwrite","Rename","Skip"],"Import — table already exists");if(!T||T==="Skip"){b[E.name]={action:"skip"};continue}if(T==="Append"){const P=await W_(e,E,r);b[E.name]=P??{action:"skip"};continue}if(T==="Overwrite"){b[E.name]={action:"overwrite"};continue}const Q=Qm(E.name,m);m.add(Q.toLowerCase()),b[E.name]={action:"rename",renameTo:Q}}const{plan:y,skipped:v}=await t.importPrepare(i.path,r,b);if(y.length===0){yl(e,i.path,v);return}e.ui.dialogs.toast(`Importing ${y.length} object${y.length===1?"":"s"} from "${i.path}" — the windows are there now and fill in as the rows arrive.`,{kind:"info",title:"Import database"});const $=jm(i.path),C=await Vm(e,t,i.path,y,v,`Importing ${$}${o>0?` (${zm(o)})`:""}`);yl(e,i.path,C),c.length>0&&await V_(e,r,c,o>Nm)}async function V_(e,t,n,r=!1){const[{parseSqlScript:i},{createProjectionTable:s}]=await Promise.all([Ie(()=>Promise.resolve().then(()=>xv),void 0),Ie(()=>Promise.resolve().then(()=>hv),void 0)]),o=[],a=[];for(const{candidate:c}of n){const d=c.sql??"";if(!d){a.push({name:c.name,why:"its definition could not be read"});continue}const f=i(d),m=f.projections[0];if(!m){a.push({name:c.name,why:f.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const b=(await e.store.tables.find()).filter($=>$.workspaceId===t),y=new Map(b.map($=>[$.name.toLowerCase(),$])),v=await s(e,t,{name:c.name,spec:m.spec,...m.sortBy?{sortBy:m.sortBy}:{}},{resolve:$=>y.get($.toLowerCase()),taken:b.map($=>$.name)});if(!v){const $=m.spec.sources.map(C=>C.tableName).join(", ");a.push({name:c.name,why:`it reads tables this workspace does not have (${$}) — import them too`});continue}if(r){const $=o.length;await e.store.tables.patch(v.id,{windowGeometry:{x:40+$%10*24,y:40+$%10*24,w:640,h:360,z:$,minimized:!0,maximized:!1},updatedAt:Date.now()})}o.push(v.name)}o.length>0&&e.ui.dialogs.toast(`Created ${o.length} projection${o.length===1?"":"s"} from views: ${o.join(", ")}.${r?" Left minimized — this file is big enough that opening them all would stall the app.":""}`,{kind:"success",title:"Import database"}),a.length>0&&e.ui.dialogs.toast(`${a.length} view${a.length===1?"":"s"} could not become a projection — ${a.map(c=>`${c.name}: ${c.why}`).join("; ")}. Import them as Data instead.`,{kind:"warning",title:"Import database"})}async function Vm(e,t,n,r,i=[],s="Importing"){const o=[...i];Ln={cancelled:!1};const a=Ln,c=new Wf(r.map(d=>({tableId:d.tableId,total:d.total})));ii={tracker:c,label:s},oo({label:s,detail:`0 of ${r.length} table${r.length===1?"":"s"}`});try{for(const d of r){if(a.cancelled){e.ui.dialogs.toast(`Stopped. ${o.length} of ${r.length} table${r.length===1?"":"s"} were filled; the rest are still empty.`,{kind:"warning",title:"Import database"});break}try{const f=await t.importRows(n,d);o.push({sourceName:d.sourceName,action:d.action,finalName:d.finalName,tableId:d.tableId,rowCount:f})}catch(f){e.ui.dialogs.toast(`"${d.finalName}" failed: ${f.message}`,{kind:"error",title:"Import database"})}}}finally{Ln===a&&(Ln=null),ii?.tracker===c&&(ii=null),Kf()}return o}let Ln=null;function Km(){return Ln!==null}function Wm(){Ln&&(Ln.cancelled=!0)}async function Gm(e,t){const r=(await e.store.settings.findOne(Pa))?.value;if(!r?.sourcePath||!r.plan?.length)return;const i=r.plan.length,s=r.plan.reduce((b,y)=>b+(y.total>0?y.total:0),0),o="Fill them in now",a="Leave them empty",c=await e.ui.dialogs.choice(`${i} table${i===1?"":"s"} in this workspace ${i===1?"is":"are"} still empty — ${i===1?"its":"their"} rows were being copied from "${r.sourcePath}" when the app last stopped.

${s>0?`About ${s.toLocaleString()} rows are left. `:""}Copying can be stopped from the Database menu once it starts.`,[o,a],"Unfinished import");if(c!==o){c===a&&await e.store.settings.remove(Pa);return}const d=jm(r.sourcePath),f=r.sizeBytes??0,m=await Vm(e,t,r.sourcePath,r.plan,[],`Converting ${d}${f>0?` (${zm(f)})`:""}`);await e.store.settings.remove(Pa),yl(e,r.sourcePath,m)}const Ym={pickCandidates:(e,t)=>K_(e,t)};async function K_(e,t){const{chooseDatabaseObjects:n}=await Ie(async()=>{const{chooseDatabaseObjects:s}=await Promise.resolve().then(()=>ry);return{chooseDatabaseObjects:s}},void 0),r=t.map(s=>({name:s.name,size:s.rowCount<0?null:s.rowCount,kind:s.isView?"view":"table",...s.collides?{detail:"⚠ name already in use"}:{}})),i=await n(r,{title:"Import database",message:"Tables bring their rows. A view can come in as a Projection — its query, recomputed — or as Data, a snapshot you can edit.",confirmLabel:"Import",offerViewModes:!0});return i?i.map(s=>({candidate:t[s.index],mode:s.mode})):[]}async function W_(e,t,n){const r=t.columns??[],s=(await e.store.tables.find()).find(d=>d.workspaceId===n&&d.name.toLowerCase()===t.name.toLowerCase())?.columns??[],o=new Set(s.map(d=>d.field.toLowerCase()));if(r.length===0||s.length===0||r.every(d=>o.has(d.toLowerCase())))return{action:"append"};const{mapColumnsToTable:a}=await Ie(async()=>{const{mapColumnsToTable:d}=await import("./column-map-dialog-Bn_jYzFH.js");return{mapColumnsToTable:d}},[]),c=await a([...r],[...s],t.name);return c?{action:"append",mapping:c}:null}function Qm(e,t){if(!t.has(e.toLowerCase()))return e;for(let n=2;;n++){const r=`${e} (${n})`;if(!t.has(r.toLowerCase()))return r}}function yl(e,t,n){const r={created:n.filter(o=>o.action==="created").length,renamed:n.filter(o=>o.action==="renamed").length,overwritten:n.filter(o=>o.action==="overwritten").length,skipped:n.filter(o=>o.action==="skipped").length},i=n.reduce((o,a)=>o+a.rowCount,0),s=[];if(r.created&&s.push(`${r.created} new`),r.renamed&&s.push(`${r.renamed} renamed`),r.overwritten&&s.push(`${r.overwritten} overwritten`),r.skipped&&s.push(`${r.skipped} skipped`),s.length===0){e.ui.dialogs.toast(`Nothing imported from "${t}".`,{kind:"warning",title:"Import database"});return}e.ui.dialogs.toast(`Imported from "${t}": ${s.join(", ")} (${i} row${i===1?"":"s"} total).`,{kind:"success",title:"Import database"})}const G_=Object.freeze(Object.defineProperty({__proto__:null,LARGE_SOURCE_BYTES:Nm,cancelImport:Wm,handleDatabaseFile:Dc,handleDroppedFile:Um,importDeps:Ym,importFlow:Lo,init:U_,isImporting:Km,load:B_,meta:j_,openFlow:Fm,resumePendingImport:Gm},Symbol.toStringTag,{value:"Module"})),Y_={id:"sqlitefile-source",name:"Browse a database file",type:"source",version:"0.1.0",description:"Reads tables and views out of a .db file, read-only (Electron desktop build only).",author:"Marc Cawood",repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sqlitefile-source.ts"};function Jm(e){const t=e.source?.config;return!t||typeof t.path!="string"||typeof t.objectName!="string"?null:{path:t.path,objectName:t.objectName,isView:!!t.isView}}function Rn(e){throw new Error(`This table is a read-only browse of a database file — ${e} is not possible. Use Import to bring the data into your workspace first.`)}function Q_(e,t){const n=Jm(e),r=new Set;let i=null;async function s(){return n?(i=(await t.browseRows(n.path,n.objectName,e.columns)).map(c=>({id:c.id,tableId:e.id,data:c.data,updatedAt:0})),i):[]}function o(a){for(const c of r)c(a)}return{async find(){return i??await s()},async findOne(a){return(i??await s()).find(c=>c.id===a)},async count(){return(i??await s()).length},async refresh(){o(await s())},subscribe(a){return r.add(a),(i?Promise.resolve(i):s()).then(a),()=>void r.delete(a)},insert:()=>Rn("adding a row"),bulkInsert:()=>Rn("adding rows"),upsert:()=>Rn("changing a row"),patch:()=>Rn("changing a row"),remove:()=>Rn("deleting a row"),bulkRemove:()=>Rn("deleting rows"),clear:()=>Rn("clearing the table")}}function J_(e){const t=window.easydb?.db;t&&typeof e.registerRowSource=="function"&&e.registerRowSource({type:"sqlitefile",create:n=>Q_(n,t),schemaEditable:!1})}const X_=Object.freeze(Object.defineProperty({__proto__:null,init:J_,meta:Y_,parseConfig:Jm},Symbol.toStringTag,{value:"Module"})),Z_=[{id:"press-ctrl-k-to-run-commands",text:"Press Ctrl+K to run commands"},{id:"drag-in-a-file-to-import-csv-json",text:"Drag in a file to import (.csv, .json)"},{id:"right-click-and-drag-the-workspace-to-pan-deskto",text:"Right-click and drag the workspace to pan (Desktop)"}],eE={tips:Z_},gr={id:"tips",name:"Tips",type:"ui",version:"0.1.0",description:'Shows one unseen tip on startup, plus a "Show tip" command. Compiled from docs/help/tips.md.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21h6"/><path d="M10 18h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.3.3.5.7.5 1.1v0h6v0c0-.4.2-.8.5-1.1A6 6 0 0 0 12 3z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/tips.ts"},Vs="seen",Ks=eE.tips;function tE(){if(typeof location>"u")return!0;const e=new URLSearchParams(location.search);return e.get("tips")==="1"?!1:e.get("test")==="1"}async function Lc(e){const t=await e.settings.get(gr.id,Vs);return Array.isArray(t)?t.filter(n=>typeof n=="string"):[]}async function nE(e){const t=Ms(gr.id),n=await e.store.plugins.findOne(t);await e.store.plugins.upsert({...n??{url:t,lastFetched:0},url:t,enabled:!1,lastFetched:n?.lastFetched??0}),await e.settings.set(gr.id,Vs,[],"user")}async function Xm(e,t){const n=await Lc(e),r=Ks[t];if(!r)return;await e.settings.set(gr.id,Vs,[...new Set([...n,r.id])],"user");const{TipsDialog:i}=await Ie(async()=>{const{TipsDialog:o}=await import("./tips-dialog-C3a1Lnq9.js");return{TipsDialog:o}},[]),s=await i.open({tips:Ks,startIndex:t});if(s.dontShowAgain){await nE(e);return}await e.settings.set(gr.id,Vs,[...new Set([...n,...s.viewed])],"user")}function rE(e){e.ui.registerCommand({id:"tips:show",title:"Show tip",group:"Help",icon:"lightbulb",keywords:["tip","hint","help"],run:async t=>{const n=await Lc(t),r=Ks.findIndex(i=>!n.includes(i.id));await Xm(t,r===-1?0:r)}})}async function iE(e){if(tE())return;const t=await Lc(e),n=Ks.findIndex(r=>!t.includes(r.id));n!==-1&&await Xm(e,n)}const sE=Object.freeze(Object.defineProperty({__proto__:null,init:rE,load:iE,meta:gr},Symbol.toStringTag,{value:"Module"}));var oE=Object.defineProperty,aE=Object.getOwnPropertyDescriptor,Mc=(e,t,n,r)=>{for(var i=r>1?void 0:r?aE(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&oE(t,n,i),i};const Pc="https://github.com/cawoodm/easydbaccess/blob/main/docs/help/commandlets.md";let ms=null;function lE(){return ms||(ms=document.createElement("commandlet-dialog"),document.body.appendChild(ms)),ms}let br=class extends xe{constructor(){super(...arguments),this.value="",this.verdict=null,this.check=null,this.checkSeq=0,this.dialogEl=null,this.resolveFn=null,this.onInput=e=>{this.value=e.target.value,this.revalidate()},this.onSubmit=e=>{e.preventDefault();const t=this.value.trim();!t||this.verdict?.ok===!1||this.finish(t)},this.onCancel=e=>{e.preventDefault(),this.finish(null)}}static open(e,t=""){return lE().openDialog(e,t)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Xt("commandlet",this.dialogEl)}openDialog(e,t){return this.check=e,this.value=t,this.verdict=null,t&&this.revalidate(),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>{this.dialogEl?.showModal();const r=this.shadowRoot?.querySelector("input.commandlet");r?.focus(),r?.select()})})}async revalidate(){const e=++this.checkSeq,t=this.value.trim();if(!t||!this.check){this.verdict=null;return}const n=await this.check(t);e===this.checkSeq&&(this.verdict=n)}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){const e=this.verdict;return k`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>Run commandlet</h2>
            <div class="header-actions">
              <a class="help" href=${Pc} target="_blank" rel="noopener noreferrer" title="What is a commandlet?">?</a>
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${e?.ok===!1||this.value.trim()===""}>Run</button>
            </div>
          </div>
          <div class="dialog-body">
            <input class="commandlet" type="text" spellcheck="false" placeholder="goto/bible?Book=Matthew" .value=${this.value} @input=${this.onInput} />
            <div class="verdict ${e?e.ok?"ok":"bad":""}">${e?k`<span class="mark">${e.ok?"✓":"✕"}</span><span>${e.message}</span>`:ee}</div>
            <p class="hint">
              <code>goto/&lt;table&gt;?&lt;Column&gt;=&lt;filter&gt;</code> — add <code>@sort=-Field</code>, <code>@search=…</code> or <code>@clear=1</code>; chain with <code>;</code>. Also
              <code>search/…</code>, <code>view/…</code> and <code>cmd/&lt;id&gt;</code>.
            </p>
          </div>
        </form>
      </dialog>
    `}};br.styles=[mt,Ce`
      dialog {
        min-width: 460px;
        max-width: 620px;
      }
      input.commandlet {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.9rem;
        padding: 0.5rem 0.6rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
      }
      input.commandlet:focus {
        outline: 2px solid #3b82f6;
        outline-offset: -1px;
      }
      /* The verdict line keeps its height whatever it says, so the dialog does
         not jump around while the user types. */
      .verdict {
        min-height: 1.4rem;
        font-size: 0.85rem;
        line-height: 1.4;
        display: flex;
        gap: 0.4rem;
        align-items: baseline;
      }
      .verdict.ok {
        color: #047857;
      }
      .verdict.bad {
        color: #b91c1c;
      }
      .verdict .mark {
        font-weight: 700;
      }
      .hint {
        margin: 0;
        font-size: 0.82rem;
        color: #6b7280;
        line-height: 1.5;
      }
      .hint code {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        background: #f3f4f6;
        padding: 0.05rem 0.25rem;
        border-radius: 0.2rem;
      }
      a.help {
        display: inline-grid;
        place-items: center;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        border: 1px solid #6b7280;
        color: #e5e7eb;
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: 700;
        line-height: 1;
      }
      a.help:hover {
        background: rgba(255, 255, 255, 0.12);
        color: white;
        border-color: #9ca3af;
      }
    `];Mc([z()],br.prototype,"value",2);Mc([z()],br.prototype,"verdict",2);br=Mc([Oe("commandlet-dialog")],br);const cE=Object.freeze(Object.defineProperty({__proto__:null,COMMANDLET_HELP_URL:Pc,get CommandletDialog(){return br}},Symbol.toStringTag,{value:"Module"}));let Zm;const uE=new Promise(e=>{Zm=e});function dE(){Zm()}function hE(){return uE}async function fE(e,t={}){const n=If(e),r=await eg(t);for(const i of n)await gE(Af(i,r),t)}async function pE(e,t={}){const n=e.trim();if(!n)return{ok:!1,message:""};let r;try{r=If(n)}catch(o){return{ok:!1,message:o instanceof Error?o.message:String(o)}}const i=await eg(t),s=[];for(const o of r)try{s.push(await mE(Af(o,i),t))}catch(a){return{ok:!1,message:a instanceof Error?a.message:String(a)}}return{ok:!0,message:s.join(", then ")}}async function mE(e,t={}){switch(e.verb){case"goto":{const n=await ig(e.targets[0]??""),r=Object.keys(e.filters).map(o=>wr(n,o)),i=Ws(e.options.sort,n),s=[`open ${n.name}`];return r.length>0&&s.push(`filter ${r.join(" + ")}`),e.options.clear!==void 0&&s.push("clear filters"),e.options.search!==void 0&&s.push(`search "${e.options.search}"`),i&&i.length>0&&s.push(`sort by ${i.map(o=>`${o.field}${o.asc?"":" ↓"}`).join(", ")}`),s.join(", ")}case"search":return`search all tables for "${e.targets[0]??""}"`;case"view":{const n=await tg(e,t),r=await ng(n),i=Object.keys(e.filters).map(a=>wr(r,a)),s=Ws(e.options.sort,r),o=[`open view "${n.name}"`];return i.length>0&&o.push(`filter ${i.join(" + ")}`),e.options.clear!==void 0&&o.push("clear filters"),e.options.search!==void 0&&o.push(`search "${e.options.search}"`),s&&s.length>0&&o.push(`sort by ${s.map(a=>`${a.field}${a.asc?"":" ↓"}`).join(", ")}`),o.join(", ")}case"cmd":return`run "${(await rg(e.targets[0]??"")).title}"`;case"preview":case"ui":throw new ct(`"${e.verb}" is not wired up yet.`)}}async function eg(e){const t=await J(),n={WORKSPACE:t.workspaceId,...e.vars??{}};if(e.field!==void 0&&(n.FIELD=e.field),e.value!==void 0&&(n.VALUE=e.value),e.tableId){const r=await t.store.tables.findOne(e.tableId);r&&(n.TABLE=r.name)}return n}async function gE(e,t={}){switch(e.verb){case"goto":return bE(e);case"search":return wE(e);case"view":return yE(e,t);case"cmd":return vE(e);case"preview":case"ui":throw new ct(`"${e.verb}" is not wired up yet.`)}}async function bE(e){const t=e.targets[0]??"",n=await ig(t),r={},i=e.options.clear===void 0?{...n.filters??{}}:{};for(const[a,c]of Object.entries(e.filters)){const d=wr(n,a);c===""?delete i[d]:i[d]=c}(Object.keys(e.filters).length>0||e.options.clear!==void 0)&&(r.filters=Object.keys(i).length>0?i:void 0);const s=Ws(e.options.sort,n);s&&(r.sortBy=s.length>0?s:void 0,r.sortColumn=s[0]?.field,r.sortAsc=s[0]?s[0].asc:void 0),Object.keys(r).length>0&&await(await J()).store.tables.patch(n.id,{...r,updatedAt:Date.now()}),xc(n.id);const o=e.options.search;o!==void 0&&document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:n.id,query:o}}))}function Ws(e,t){return e===void 0?null:e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>n.startsWith("-")?{field:wr(t,n.slice(1)),asc:!1}:{field:wr(t,n),asc:!0})}function wr(e,t){const n=new Map;for(const i of e.columns??[])n.set(i.field.toLowerCase(),i.field),i.label&&n.set(i.label.toLowerCase(),i.field);const r=n.get(t.trim().toLowerCase());if(!r){const i=(e.columns??[]).map(s=>s.field).join(", ");throw new ct(`"${e.name}" has no column "${t}"${i?` — it has ${i}`:""}.`)}return r}function wE(e){const t=e.targets[0]??"";document.dispatchEvent(new CustomEvent("easydb:set-search",{detail:{query:t}}))}async function yE(e,t){const n=await tg(e,t),r=await ng(n),i={},s=e.options.clear===void 0?{...n.pillFilters??{}}:{};for(const[c,d]of Object.entries(e.filters)){const f=wr(r,c);d===""?delete s[f]:s[f]=d}(Object.keys(e.filters).length>0||e.options.clear!==void 0)&&(i.pillFilters=Object.keys(s).length>0?s:void 0);const o=Ws(e.options.sort,r);o&&(i.sortBy=o.length>0?o:void 0,i.sortColumn=o[0]?.field,i.sortAsc=o[0]?o[0].asc:void 0),Object.keys(i).length>0&&await(await J()).store.viewInstances.patch(n.id,{...i,updatedAt:Date.now()}),await Oc(n.id);const a=e.options.search;a!==void 0&&document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:n.id,query:a}}))}async function tg(e,t){const n=(e.targets[0]??"").trim();if(n)return kE(n);if(!t.viewInstanceId)throw new ct('"view" with no name means the view you are in — this was not run from one, so name the view.');const i=await(await J()).store.viewInstances.findOne(t.viewInstanceId);if(!i)throw new ct("That view no longer exists.");return i}async function ng(e){const n=await(await J()).store.tables.findOne(e.tableId);if(!n)throw new ct(`The view "${e.name}" has no table.`);return n}async function vE(e){const t=await rg(e.targets[0]??""),n=await J();await t.run(n.api)}async function kE(e){const t=e.trim(),n=await J(),r=(await n.store.viewInstances.find()).filter(s=>s.workspaceId===n.workspaceId),i=r.find(s=>s.name===t)??r.find(s=>s.name.toLowerCase()===t.toLowerCase());if(!i)throw new ct(`No view called "${t}".`);return i}async function rg(e){const t=await J(),n=t.registries.commands.find(r=>r.id===e)??t.registries.commands.find(r=>r.id.toLowerCase()===e.toLowerCase());if(!n)throw new ct(`No command with id "${e}".`);return n}async function ig(e){const t=e.trim();if(!t)throw new ct("No table name given.");const n=await J(),r=(await n.store.tables.find()).filter(s=>s.workspaceId===n.workspaceId),i=r.find(s=>s.name===t)??r.find(s=>s.name.toLowerCase()===t.toLowerCase());if(!i)throw new ct(`No table called "${t}".`);return i}const Nc={id:"commandlets",name:"Commandlets",type:"ui",version:"0.1.0",description:"Run URL-shaped actions like goto/bible?Book=Matthew — from a link, a #hash, ?cmdlet= or the palette.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/commandlets.ts"},$E="cmdlet",sg="default";function xE(e){e.ui.registerSettings(Nc.id,"Commandlets",[{key:sg,label:"Default commandlet",type:"string",scope:"workspace",description:"Run this when the URL hash is not a commandlet itself. Blank ⇒ a plain #anchor is ignored, as before.",help:"Anchors like #Matthew carry no verb, so nothing runs unless this template says what to do with one. $HASH is the whole anchor text and $1…$9 are its /-separated parts, e.g. goto/bible?Title=$HASH&@sort=Title turns #Matthew into goto/bible?Title=Matthew&@sort=Title. The text is substituted after parsing, so an anchor containing & or ; cannot break the command.",helpUrl:Pc,helpLinkLabel:"Commandlets guide"}]),e.ui.registerCommand({id:"commandlets:run",title:"Run commandlet…",group:"App",icon:"terminal",keywords:["command","goto","action","link","url"],run:t=>_E(t)}),e.ui.registerCommandFallback?.(t=>Wl(t)?{id:"commandlets:run-this",title:`Run this commandlet: ${t}`,group:"Commands",icon:"terminal",run:n=>yr(n,t)}:null)}function SE(e){document.addEventListener("click",t=>void TE(e,t),!0),window.addEventListener("hashchange",()=>void og(e)),hE().then(()=>CE(e))}async function CE(e){const t=new URLSearchParams(location.search).get($E);t&&await yr(e,t),await og(e)}async function _E(e,t=""){const{CommandletDialog:n}=await Ie(async()=>{const{CommandletDialog:i}=await Promise.resolve().then(()=>cE);return{CommandletDialog:i}},void 0),r=await n.open(i=>pE(i),t);r!==null&&await yr(e,r)}async function og(e){const t=location.hash.replace(/^#/,"");if(!t)return;if(Wl(t)){vh(),await yr(e,t);return}const n=(await e.settings.get(Nc.id,sg))?.trim();if(!n)return;const r=EE(t),i=r.split("/"),s={HASH:r};i.forEach((o,a)=>{s[String(a+1)]=o}),vh(),await yr(e,n,{vars:s})}function vh(){history.replaceState(null,"",location.pathname+location.search)}function EE(e){try{return decodeURIComponent(e)}catch{return e}}async function TE(e,t){if(t.defaultPrevented||t.button!==0||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)return;const n=t.composedPath(),r=n.find(o=>o instanceof HTMLAnchorElement);if(!r)return;const i=r.getAttribute("href")??"";if(!i.startsWith("#"))return;const s=i.slice(1);Wl(s)&&(t.preventDefault(),await yr(e,s,IE(n)))}function IE(e){const t={};for(const n of e){if(!t.tableId){const r=$m(n);r&&(t.tableId=r)}if(!t.viewInstanceId&&n instanceof HTMLElement&&n.tagName==="VIEW-WINDOW"){const r=n.viewInstanceId;r&&(t.viewInstanceId=r)}if(t.field===void 0&&n instanceof HTMLElement){const r=n;r.column?.field&&(t.field=r.column.field,r.value!=null&&(t.value=String(r.value)))}}return t}async function yr(e,t,n){try{await fE(t,n??{})}catch(r){const i=r instanceof ct||r instanceof Error?r.message:String(r);e.ui.dialogs.toast(i,{kind:"error",title:"Commandlet"})}}const AE=Object.freeze(Object.defineProperty({__proto__:null,init:xE,load:SE,meta:Nc},Symbol.toStringTag,{value:"Module"})),RE=[o_,Qk,Ww,vy,Av,Pv,C0,q0,Q0,Xw,_k,ik,Uk,Wk,s$,u$,p$,w$,I$,Z$,rx,ax,px,yx,_x,W1,Z1,RS,Im,r_,C_,T_,R_,L_,N_,G_,X_,sE,AE];function OE(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const ag=RE.map(e=>{const t=OE(e);return{id:t.id,meta:t,module:e}}),DE=ag;async function LE(e){const t=[];for(const n of ag)if(!await ME(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function ME(e,t){return t.meta.fixed?!1:Et==="all-optional"?!0:(await e.store.plugins.findOne(Ms(t.id)))?.enabled===!1}function lg(e){return e.filter(t=>t.status!=="minimized")}function PE(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),i=Math.ceil(e/r),s=(t.w-n*(r+1))/r,o=(t.h-n*(i+1))/i;return Array.from({length:e},(a,c)=>{const d=c%r,f=Math.floor(c/r);return{x:t.x+n+d*(s+n),y:t.y+n+f*(o+n),w:s,h:o}})}function Tr(){return q$()}function NE(){for(const e of Tr())e.close?.()}function jE(){for(const e of Tr())e.minimize?.()}function zE(){for(const e of Tr())e.normalize?.()}function FE(){for(const e of Tr())e.maximize?.()}function cg(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=Us()?.snapshot(),i=r?.scale&&r.scale>0?r.scale:1,s=r?.x??0,o=r?.y??0;return{x:-s/i,y:-o/i,w:t/i,h:n/i}}function ug(e,t,n,r,i){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(i)}px`}function UE(){const e=lg(Tr()).reverse();if(e.length===0)return;const t=cg(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),i=Math.min(480,Math.max(240,t.h*.6));e.forEach((s,o)=>{s.normalize?.(),ug(s,t.x+24+o*n,t.y+24+o*n,r,i)}),dg()}function dg(){wm(),gC()}function BE(){const e=lg(Tr()).reverse();if(e.length===0)return;const n=PE(e.length,cg(),8);e.forEach((r,i)=>{r.normalize?.();const s=n[i];s&&ug(r,s.x,s.y,s.w,s.h)}),dg()}function gs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function qE(e,t){const{from:n,to:r,name:i,mode:s}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:i,createdAt:Date.now(),pluginUrls:s==="empty"?[]:[...o?.pluginUrls??[]]}),s==="empty")return r;if(s==="all"){const c=await e.tables.where("workspaceId").equals(n).toArray(),d=new Map;for(const y of c){const v=gs();d.set(y.id,v),await e.tables.put({...y,id:v,workspaceId:r,updatedAt:Date.now()})}for(const[y,v]of d){const $=await e.rows.where("tableId").equals(y).toArray();$.length>0&&await e.rows.bulkPut($.map(C=>({...C,id:gs(),tableId:v})))}const f=await e.viewTemplates.where("workspaceId").equals(n).toArray(),m=new Map;for(const y of f){const v=gs();m.set(y.id,v),await e.viewTemplates.put({...y,id:v,workspaceId:r})}const b=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const y of b){const v=d.get(y.tableId);v&&await e.viewInstances.put({...y,id:gs(),workspaceId:r,tableId:v,templateId:m.get(y.templateId)??y.templateId})}}const a=await e.settings.where("workspaceId").equals(n).toArray();for(const c of a)await e.settings.put({...c,key:Tt(r,c.name),workspaceId:r,name:c.name});return r}async function hg(e,t){return(await e.tables.where("workspaceId").equals(t).toArray()).map(r=>r.id)}async function fg(e,t){const n=await hg(e,t),r=n.length===0?0:await e.rows.where("tableId").anyOf(n).count();return{tables:n.length,rows:r,views:await e.viewInstances.where("workspaceId").equals(t).count(),templates:await e.viewTemplates.where("workspaceId").equals(t).count(),settings:await e.settings.where("workspaceId").equals(t).count()}}async function HE(e,t){const n=await fg(e,t),r=await hg(e,t);if(r.length>0){const a=await e.rows.where("tableId").anyOf(r).toArray();await e.rows.bulkDelete(a.map(c=>c.id)),await e.tables.bulkDelete(r)}const i=await e.viewInstances.where("workspaceId").equals(t).toArray();await e.viewInstances.bulkDelete(i.map(a=>a.id));const s=await e.viewTemplates.where("workspaceId").equals(t).toArray();await e.viewTemplates.bulkDelete(s.map(a=>a.id));const o=await e.settings.where("workspaceId").equals(t).toArray();return await e.settings.bulkDelete(o.map(a=>a.key).filter(a=>typeof a=="string")),await e.workspaces.delete(t),n}const kh="Clone everything (tables, views, settings)",$h="Clone settings only (no data)",VE="Empty workspace";function Mo(e){const t=new URLSearchParams(location.search);t.set("space",e),location.assign(`${location.pathname}?${t.toString()}${location.hash}`)}function KE(){const e=new URLSearchParams(location.search);e.delete("space");const t=e.toString();location.assign(`${location.pathname}${t?`?${t}`:""}${location.hash}`)}async function WE(){const e=await J(),t=(await e.store.workspaces.find()).filter(r=>r.id!==e.workspaceId);if(t.length===0){e.api.ui.dialogs.toast("This is the only workspace.",{kind:"info",title:"Workspaces"});return}const n=await e.api.ui.dialogs.choice("Open which workspace?",t.map(r=>r.name),"Switch workspace");n&&Mo(n)}async function pg(){const e=await J(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[kh,$h,VE],"New workspace");if(!n)return;const r=n===kh?"all":n===$h?"settings":"empty";await qE(Ds(),{from:e.workspaceId,to:bg(t.trim()),name:t.trim(),mode:r}),Mo(t.trim())}async function mg(){const e=await J(),t=await e.store.workspaces.find();let n=t.find(c=>c.id===e.workspaceId)??t[0];if(!n)return;if(t.length>1){const c=await e.api.ui.dialogs.choice("Delete which workspace? Everything in it goes with it.",t.map(d=>d.name),"Delete workspace");if(!c)return;n=t.find(d=>d.name===c)??n}const r=await fg(Ds(),n.id),i=[`${r.tables} table${r.tables===1?"":"s"}`,`${r.rows.toLocaleString()} row${r.rows===1?"":"s"}`,`${r.views} view${r.views===1?"":"s"}`,`${r.settings} setting${r.settings===1?"":"s"}`].join(", "),s=t.length===1;if(!await e.api.ui.dialogs.confirm(`Delete the workspace "${n.name}"?

${i} will be deleted. This cannot be undone.`+(s?`

It is the only workspace, so an empty one will be created in its place.`:""),"Delete workspace"))return;if(await HE(Ds(),n.id),e2(n.id),n.id!==e.workspaceId){e.api.ui.dialogs.toast(`Deleted "${n.name}" (${i}).`,{kind:"success",title:"Workspace deleted"});return}const a=t.find(c=>c.id!==n.id);a?Mo(a.name):KE()}function GE(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:jE},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:zE},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:FE},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:UE},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:BE},{id:"windows:close-all",title:"Close all windows",icon:"close",run:NE}];for(const s of t)e.ui.registerCommand({id:s.id,title:s.title,group:"Windows",icon:s.icon,run:s.run});const n=[{id:"workspace:switch",title:"Switch workspace",icon:"swap_horiz",keywords:["space","open","change"],run:WE},{id:"workspace:new",title:"New workspace",icon:"add",keywords:["space","add","create","clone"],run:pg},{id:"workspace:delete",title:"Delete workspace",icon:"delete",keywords:["space","remove","drop"],run:mg}];for(const s of n)e.ui.registerCommand({id:s.id,title:s.title,group:"Workspace",icon:s.icon,keywords:s.keywords,run:s.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",i="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:s=>s.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(i,"_blank","noopener")}})}async function YE(e){if(Et==="url-plugins"||Et==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],i=[];for(const s of r)try{const o=await e.store.plugins.findOne(s);if(o&&o.enabled===!1)continue;let a=o?.cachedBody??"";if(a)QE(e,s,a);else{try{a=await gg(s)}catch(f){await e.store.plugins.upsert({url:s,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${f.message}`}),e.events.emit("plugin:error",{url:s,phase:"fetch",error:f});continue}await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),cachedBody:a})}const c=new Blob([a],{type:"text/javascript"}),d=URL.createObjectURL(c);try{const f=await import(d);await f.init?.(e),i.push({url:s,mod:f})}finally{setTimeout(()=>URL.revokeObjectURL(d),5e3)}}catch(o){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:s,phase:"init",error:o})}return async()=>{for(const{url:s,mod:o}of i)try{await o.load?.(e)}catch(a){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`load: ${a.message}`}),e.events.emit("plugin:error",{url:s,phase:"load",error:a})}}}async function gg(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function QE(e,t,n){return(async()=>{try{const r=await gg(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let Na=null;function J(){return Na||(Na=JE()),Na}async function JE(){let e="";const t=window.easydb?.store?Xb(window.easydb.store,()=>e):Wb(await Ds(),()=>e),n=Zb(),r=tw(),i=new Map;t.tables.subscribe(C=>{i.clear();for(const E of C)i.set(E.id,E)});const s=Yb(t.tables),o={...s,insert:async C=>{const E=await s.insert(C);return i.set(E.id,E),E},upsert:async C=>{const E=await s.upsert(C);return i.set(E.id,E),E}};let a=null;const c={get backend(){if(!a)throw new Error("[host] row-source ctx used before app init completed");return a.backend},events:n,settings:t.settings,workspaceId:()=>b},d=Gb({base:{...t,tables:o},providers:r.rowSources,tableById:C=>i.get(C),ctx:c}),f=XE(),m=await d.workspaces.find();let b;if(f){const C=bg(f),E=m.find(T=>T.id===C||T.name===f);E?b=E.id:b=(await d.workspaces.insert({id:C,name:f,createdAt:Date.now(),pluginUrls:[]})).id}else{const C=ZE(),E=C?m.find(T=>T.id===C):void 0;E?b=E.id:m.length>0?b=m[0].id:b=(await d.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}e=b,t2(b);const y=uw({store:d,events:n,registries:r,workspaceId:()=>b});a=y,GE(y),n.on("import:after",({source:C,tableId:E,rowCount:T})=>{C!=="datasette"&&y.store.tables.findOne(E).then(Q=>{y.ui.dialogs.toast(`Imported ${T} row${T===1?"":"s"} into "${Q?.name??E}".`,{kind:"success",title:C.toUpperCase()+" import"})})}),n.on("plugin:error",({url:C,phase:E,error:T})=>{y.ui.dialogs.toast(`[${E}] ${T?.message??String(T)}`,{kind:"error",title:`Plugin: ${C}`})});const v=await LE(y),$=await YE(y);return queueMicrotask(async()=>{n.emit("app:ready",{workspaceId:b}),await v(),await $(),Et==="all-optional"?y.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):Et==="url-plugins"&&y.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),Et!=="off"&&y.ui.openPluginManager()}),globalThis.api=y,{store:d,events:n,workspaceId:b,registries:r,api:y}}function XE(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Gs="eda:lastWorkspaceId";function ZE(){try{return globalThis.localStorage?.getItem(Gs)??null}catch{return null}}function e2(e){try{globalThis.localStorage?.getItem(Gs)===e&&globalThis.localStorage.removeItem(Gs)}catch{}}function t2(e){try{globalThis.localStorage?.setItem(Gs,e)}catch{}}function bg(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var n2=Object.defineProperty,r2=Object.getOwnPropertyDescriptor,Po=(e,t,n,r)=>{for(var i=r>1?void 0:r?r2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&n2(t,n,i),i};let vr=class extends xe{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Xt("csv-paste",this.dialogEl)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=$r(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await J(),i=crypto.randomUUID();await r.store.tables.insert({id:i,workspaceId:r.workspaceId,name:t,code:je(t),columns:n.columns,view:"table",updatedAt:Date.now()});const s=n.rows.map(o=>({id:crypto.randomUUID(),tableId:i,data:o,updatedAt:Date.now()}));await r.store.rows(i).bulkInsert(s),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return k`
      <dialog @cancel=${this.close} @keydown=${gt}>
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
            <p class="hint">First line is treated as the header. Separator is auto-detected (comma / semicolon / tab). Column types are inferred from data.</p>
            <label>
              Table name
              <input type="text" autofocus .value=${this.name} placeholder="pasted" @input=${e=>this.name=e.target.value} />
            </label>
            <label>
              CSV
              <textarea spellcheck="false" .value=${this.text} @input=${e=>this.text=e.target.value}></textarea>
            </label>
            ${this.errorMsg?k`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};vr.styles=[mt,Ce`
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
        font:
          0.85rem ui-monospace,
          SFMono-Regular,
          monospace;
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
    `];Po([z()],vr.prototype,"name",2);Po([z()],vr.prototype,"text",2);Po([z()],vr.prototype,"errorMsg",2);vr=Po([Oe("csv-paste-dialog")],vr);function xh(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.validate?t.validate=e.validate:delete t.validate,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}const wg={unique:{get:e=>!!e.unique,set:e=>({unique:e?!0:void 0})},notnull:{get:e=>!!e.notnull,set:e=>({notnull:e?!0:void 0})},visible:{get:e=>!e.hidden,set:e=>({hidden:e?void 0:!0})},sortable:{get:e=>e.sortable!==!1,set:e=>({sortable:e?void 0:!1})},filterable:{get:e=>e.filterable!==!1,set:e=>({filterable:e?void 0:!1})}};function yg(e,t){return e.every(n=>wg[t].get(n))}function i2(e,t){const n=!yg(e,t);return e.map(r=>({...r,...wg[t].set(n)}))}function jc(e){if(e.source?.type!=="projection")return null;const t=e.source.config;return t&&Array.isArray(t.sources)?t:null}function s2(e,t,n,r){return{projections:t.filter(s=>{if(s.id===r)return!1;const o=jc(s);return!!o&&o.sources.some(a=>a.tableName===e)}),views:n.filter(s=>s.tableName===e)}}function o2(e,t,n){return e.sources.some(r=>r.tableName===t)?{...e,sources:e.sources.map(r=>r.tableName===t?{...r,tableName:n}:r)}:null}function zc(e){return new Map(e.filter(t=>t.from!==t.to).map(t=>[t.from,t.to]))}function vl(e,t){if(!e||!Object.keys(e).some(i=>t.has(i)))return null;const r={};for(const[i,s]of Object.entries(e))r[t.get(i)??i]=s;return r}function a2(e,t){const n=zc(t);if(n.size===0)return null;const r=e.columns.map(o=>n.has(o.field)?{...o,field:n.get(o.field)}:o),i=vl(e.filters,n);return r.some((o,a)=>o!==e.columns[a])||i!==null?{...e,columns:r,...i?{filters:i}:{}}:null}function l2(e,t){const n=zc(t);if(n.size===0)return null;const r={},i=e.mapping??{},s={};let o=!1;for(const[d,f]of Object.entries(i)){const m=n.get(f);s[d]=m??f,m&&(o=!0)}if(o&&(r.mapping=s),Array.isArray(e.visibleColumns)){const d=e.visibleColumns.map(f=>n.get(f)??f);d.some((f,m)=>f!==e.visibleColumns[m])&&(r.visibleColumns=d)}const a=vl(e.filters,n);a&&(r.filters=a);const c=vl(e.pillFilters,n);if(c&&(r.pillFilters=c),e.columnWidths){const d={};let f=!1;for(const[m,b]of Object.entries(e.columnWidths)){const y=n.get(m);d[y??m]=b,y&&(f=!0)}f&&(r.columnWidths=d)}if(e.sortColumn&&n.has(e.sortColumn)&&(r.sortColumn=n.get(e.sortColumn)),Array.isArray(e.sortBy)){const d=e.sortBy.map(f=>n.has(f.field)?{...f,field:n.get(f.field)}:f);d.some((f,m)=>f!==e.sortBy?.[m])&&(r.sortBy=d)}return Object.keys(r).length>0?r:null}function c2(e,t,n){const r=zc(n);if(r.size===0)return null;const i=new Set(e.sources.filter(c=>c.tableName===t).map(c=>c.alias));if(i.size===0)return null;const s=e.columns.map(c=>c.from.kind==="source"&&i.has(c.from.alias)&&r.has(c.from.field)?{...c,from:{...c.from,field:r.get(c.from.field)}}:c),o=e.sources.map(c=>{if(!c.join)return c;const d=i.has(c.alias),f=c.join.on.map(m=>{const b=d&&r.has(m.field)?r.get(m.field):m.field,y=i.has(m.eqAlias)&&r.has(m.eqField)?r.get(m.eqField):m.eqField;return b===m.field&&y===m.eqField?m:{...m,field:b,eqField:y}});return f.some((m,b)=>m!==c.join.on[b])?{...c,join:{...c.join,on:f}}:c});return s.some((c,d)=>c!==e.columns[d])||o.some((c,d)=>c!==e.sources[d])?{...e,columns:s,sources:o}:null}function u2(e){const t=[];return e.projections.length>0&&t.push(`${Sh(e.projections.length,"projection")} (${Ch(e.projections.map(n=>n.name))})`),e.views.length>0&&t.push(`${Sh(e.views.length,"view")} (${Ch(e.views.map(n=>n.name||"untitled"))})`),t.length>0?t.join(" and "):null}function Sh(e,t){return`${e} ${t}${e===1?"":"s"}`}function Ch(e){const t=e.slice(0,3).map(n=>`"${n}"`);return e.length>3?`${t.join(", ")} and ${e.length-3} more`:t.join(", ")}var d2=Object.defineProperty,h2=Object.getOwnPropertyDescriptor,Ze=(e,t,n,r)=>{for(var i=r>1?void 0:r?h2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&d2(t,n,i),i};const f2=["string","number","boolean","date","datetime","array"],_h=100;function Eh(e){return[...e.keys()].filter(t=>!ew.has(t)).sort()}function p2(e,t){return t&&!e.includes(t)?[...e,t]:[...e]}async function m2(e,t,n,r){const i=await J(),s=(await i.store.viewInstances.find()).filter(o=>o.tableId===e||o.tableName===t);for(const o of s)o.tableName!==n&&await i.store.viewInstances.patch(o.id,{tableName:n,updatedAt:Date.now()});for(const o of r?.projections??[]){const a=jc(o),c=a&&o2(a,t,n);c&&await i.store.tables.patch(o.id,{source:{type:"projection",config:c},updatedAt:Date.now()})}}async function g2(e,t,n,r){if(n.length===0)return;const i=await J(),s=(await i.store.viewInstances.find({workspaceId:i.workspaceId})).filter(a=>a.tableId===e);for(const a of s){const c=l2(a,n);c&&await i.store.viewInstances.patch(a.id,{...c,updatedAt:Date.now()})}s.length>0&&document.dispatchEvent(new CustomEvent("easydb:reload-views"));const o=async(a,c)=>{await i.store.tables.patch(a.id,{source:{type:"projection",config:c},updatedAt:Date.now()})};for(const a of r){const c=jc(a);if(!c)continue;const d=a.id===e?a2(c,n):c2(c,t,n);d&&await o(a,d)}}function b2(e,t,n){const r=`Renaming "${e}" to "${t}" affects ${n}.

They reference this table by name, so they will be updated to point at "${t}". Continue?`,i=lt.instance;return i?i.confirm(r,"Rename table"):Promise.resolve(window.confirm(r))}let Be=class extends xe{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.deletedFields=[],this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.previewState="none",this.previewToken=0,this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Xt("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await J();if(this.rendererOptions=Eh(n.registries.cellRenderers),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=Eh(n.registries.cellRenderers),this.columnActions=[...n.registries.columnEditorActions]}),e){const i=await(await J()).store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.tableTitle=i.title??"",this.tableReadonly=!!i.readonly,this.deletedFields=[...i.deletedColumns??[]],this.columns=i.columns.map(s=>({field:s.field,label:s.label,type:s.type,renderer:s.renderer,script:s.script,validate:s.validate,max:s.max,unique:s.unique,notnull:s.notnull,hidden:s.hidden,sortable:s.sortable,filterable:s.filterable,origField:s.field,orig:s})),this.loadPreview(e,i.columns)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.deletedFields=[],this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[],this.previewState="none",this.previewToken++;await this.updateComplete,this.dialogEl?.showModal()}async loadPreview(e,t){const n=++this.previewToken;this.previewRows=[],this.previewState="loading";try{const r=await J(),i=await Ei(r.store.rows(e),{columns:t,limit:_h},_h);if(n!==this.previewToken)return;this.previewRows=i.rows,this.previewState="ready"}catch(r){if(n!==this.previewToken)return;this.previewRows=[],this.previewState="error",console.warn("[columns-editor] the preview rows could not be read",r)}}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}touchDirty(){this.dialogEl&&cp("columns-editor",this.dialogEl)}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}],this.touchDirty()}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e),this.touchDirty()}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[i]=r.splice(e,1);r.splice(n,0,i),this.columns=r,this.touchDirty()}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=i?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const i=[...this.columns],[s]=i.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),i.splice(o,0,s),this.columns=i,this.touchDirty()}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n),this.touchDirty()}renderFlagHead(e,t,n){const r=yg(this.columns,e);return k`<button
      type="button"
      class="flag-label flag-head"
      title=${`${n} — click to ${r?"clear":"set"} every column`}
      aria-pressed=${r?"true":"false"}
      @click=${()=>{this.columns=i2(this.columns,e),this.touchDirty()}}
    >
      ${t}
    </button>`}async runColumnAction(e){this.errorMsg="";const t=await J();try{const n=await e.run(t.api,{columns:this.columns.map(i=>xh(i)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(i=>[i.field,i]));this.columns=this.columns.map(i=>{const s=r.get(i.field);return s?{...i,label:s.label??i.label,type:s.type??i.type,renderer:s.renderer,script:s.script,validate:s.validate}:i}),this.touchDirty()}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=it.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async editValidate(e){const t=it.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.validate??"",n.label||n.field,"validate");r!==null&&this.patchColumn(e,{validate:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await J(),r=(await n.store.tables.find()).filter(d=>d.workspaceId===n.workspaceId),i=t.toLowerCase(),s=r.find(d=>d.name.toLowerCase()===i&&d.id!==this.editTableId);if(s){this.errorMsg=`A table named "${s.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const d of this.columns){const f=d.field.trim();if(!f){this.errorMsg="Column field names cannot be empty.";return}if(o.has(f)){this.errorMsg=`Duplicate column field: ${f}`;return}o.add(f)}const a=this.tableTitle.trim(),c=this.columns.map(xh);if(this.mode==="edit"&&this.editTableId){const d=this.editTableId,f=await n.store.tables.findOne(d),m=new Map((f?.columns??[]).map(I=>[I.field,I])),b=c.filter(I=>{const V=m.get(I.field);return I.unique&&!V?.unique||I.notnull&&!V?.notnull||I.max&&I.max>0&&I.max!==V?.max});if(b.length>0){const I=await n.store.rows(d).find(),V=v2(b,I);if(V.length>0){this.errorMsg=`Cannot save: ${V.length} existing ${V.length===1?"row violates":"rows violate"} the new constraints.
${V.slice(0,5).join(`
`)}${V.length>5?`
…and ${V.length-5} more.`:""}`;return}}const y=new Set(this.columns.map(I=>I.origField).filter(I=>!!I)),v=new Set(c.map(I=>I.field)),$=(f?.columns??[]).map(I=>I.field).filter(I=>!y.has(I)),C=f?.deletedColumns??[],E=[...new Set([...C,...$])].filter(I=>!v.has(I));let T=null;if(f&&f.name!==t){const I=(await n.store.viewInstances.find()).filter(K=>K.workspaceId===n.workspaceId);T=s2(f.name,r,I,d);const V=u2(T);if(V&&!await b2(f.name,t,V))return}const Q={name:t,title:a,columns:c,readonly:this.tableReadonly,updatedAt:Date.now()};(E.length>0||C.length>0)&&(Q.deletedColumns=E);const P=f?.name;await n.store.tables.patch(d,Q);const ne=$.filter(I=>!v.has(I)),W=this.fieldRenames();if(!f?.source&&(ne.length>0||W.length>0)){const I=await n.store.rows(d).find();for(const V of I){let K=!1,ie={...V.data};const de=Yu(ie,W);de&&(ie=de,K=!0);for(const H of ne)H in ie&&(delete ie[H],K=!0);K&&await n.store.rows(d).patch(V.id,{data:ie,updatedAt:Date.now()})}}await g2(d,P??t,W,r),P!==void 0&&P!==t&&await m2(d,P,t,T)}else await n.store.tables.insert({id:Ee(),workspaceId:n.workspaceId,name:t,title:a,code:je(t),columns:c,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0){const i=this.previewState==="loading"?"Reading rows for the preview…":this.previewState==="error"?"The rows could not be read, so there is no preview. Your column changes still save.":"No rows to preview.";return k`<div class="preview"><div class="empty" data-testid="preview-empty">${i}</div></div>`}const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(i=>({...i,data:Yu(i.data,e)??i.data})):this.previewRows,n=new Map;for(const i of this.columns){if(!i.unique)continue;const s=new Set,o=new Set;for(const a of t){const c=a.data[i.field];c==null||c===""||(s.has(c)&&o.add(c),s.add(c))}n.set(i.field,o)}const r=this.columns.filter(i=>!i.hidden);return k`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${r.map(i=>k`<th title=${i.field}>${i.label||i.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(i=>k`
                <tr>
                  ${r.map(s=>{const o=i.data[s.field],a=y2(s,o,n.get(s.field));return k`<td class=${a?"violation":""} title=${a??""}>${w2(o)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renderDeleted(){return this.mode!=="edit"||this.deletedFields.length===0?"":k`<div class="deleted-cols">
      <span class="hint">Removed earlier:</span>
      ${this.deletedFields.map(e=>k`<button type="button" class="add" title=${`Add the column "${e}" back`} @click=${()=>this.restoreColumn(e)}>↩ ${e}</button>`)}
      <div class="hint">These are not re-added by a refresh. Restoring one adds the column back empty — its values were removed with it, unless the table refreshes from a source.</div>
    </div>`}restoreColumn(e){this.deletedFields=this.deletedFields.filter(t=>t!==e),!this.columns.some(t=>t.field.trim().toLowerCase()===e.toLowerCase())&&(this.columns=[...this.columns,{field:e,label:e,type:"string"}])}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return k`
      <dialog @cancel=${this.close} @keydown=${gt}>
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
            ${this.noticeMsg?k`<div class="notice">${this.noticeMsg}</div>`:""}
            <label>
              Name
              <input type="text" autofocus .value=${this.name} @input=${n=>this.name=n.target.value} />
            </label>
            <label>
              Title <span style="color:#9ca3af">(optional — shown in the window title)</span>
              <input type="text" .value=${this.tableTitle} @input=${n=>this.tableTitle=n.target.value} />
            </label>
            <label class="inline">
              <input type="checkbox" data-testid="table-readonly" .checked=${this.tableReadonly} @change=${n=>this.tableReadonly=n.target.checked} />
              Read-only
              <span style="color:#9ca3af">(show values, no editing or add/delete row)</span>
            </label>

            <div class="columns">
              <div class="col-header">
                <span></span>
                ${this.renderFlagHead("visible","👁","Visible")}
                <span>Field</span>
                <span>Label</span>
                <span>Type</span>
                <span>Renderer</span>
                <span></span>
                <span class="flag-label">Max</span>
                <span></span>
                ${this.renderFlagHead("unique","U","Unique")} ${this.renderFlagHead("notnull","!","Not null")} ${this.renderFlagHead("sortable","⇅","Sortable")}
                ${this.renderFlagHead("filterable","⚲","Filterable (includes search)")}
                <span></span>
                <span></span>
                <span></span>
              </div>
              ${this.columns.map((n,r)=>{const i=this.dragSrcIdx===r,s=this.dropTargetIdx===r,o=s&&this.dropEdge==="before"?" drop-before":s&&this.dropEdge==="after"?" drop-after":"";return k`
                  <div
                    class=${`col-row${i?" drag-source":""}${o}`}
                    @dragover=${a=>this.onRowDragOver(a,r,a.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(r)}
                    @drop=${a=>this.onRowDrop(a,r)}
                  >
                    <span class="drag-handle" title="Drag to reorder" draggable="true" @dragstart=${a=>this.onRowDragStart(a,r)} @dragend=${()=>this.onRowDragEnd()}>
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Visible — uncheck to hide the column without losing its data"
                        .checked=${!n.hidden}
                        @change=${a=>this.patchColumn(r,{hidden:!a.target.checked})}
                      />
                    </span>
                    <input
                      type="text"
                      title="Field — the key this column is stored under in each row"
                      .value=${n.field}
                      @input=${a=>this.patchColumn(r,{field:a.target.value})}
                    />
                    <input
                      type="text"
                      title="Label — the heading shown above the column"
                      .value=${n.label}
                      @input=${a=>this.patchColumn(r,{label:a.target.value})}
                    />
                    <select
                      .value=${n.type}
                      @change=${a=>this.patchColumn(r,{type:a.target.value})}
                    >
                      ${f2.map(a=>k`<option value=${a} ?selected=${a===n.type}>${a}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${a=>{const c=a.target.value;this.patchColumn(r,{renderer:c||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${p2(this.rendererOptions,n.renderer).map(a=>k`<option value=${a} ?selected=${a===n.renderer}>${a}</option>`)}
                    </select>
                    <button
                      type="button"
                      class=${`icon-btn script-btn${n.script?.trim()?" has-script":""}`}
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
                      @input=${a=>{const c=a.target.value;this.patchColumn(r,{max:c===""?void 0:Number(c)})}}
                    />
                    <button
                      type="button"
                      class=${`icon-btn validate-btn${n.validate?.trim()?" has-validate":""}`}
                      title=${n.validate?.trim()?"Edit the validation — validate(value, row) throws to reject a manual cell edit":"Add validation: validate(value, row) throws to reject a manual cell edit"}
                      @click=${()=>this.editValidate(r)}
                    >
                      <span class="mi sm">edit</span>
                    </button>
                    <span class="flag">
                      <input type="checkbox" title="Unique" .checked=${!!n.unique} @change=${a=>this.patchColumn(r,{unique:a.target.checked})} />
                    </span>
                    <span class="flag">
                      <input type="checkbox" title="Not null" .checked=${!!n.notnull} @change=${a=>this.patchColumn(r,{notnull:a.target.checked})} />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Sortable — uncheck to disable sorting on this column"
                        .checked=${n.sortable!==!1}
                        @change=${a=>this.patchColumn(r,{sortable:a.target.checked?void 0:!1})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Filterable — uncheck to disable filtering and search on this column"
                        .checked=${n.filterable!==!1}
                        @change=${a=>this.patchColumn(r,{filterable:a.target.checked?void 0:!1})}
                      />
                    </span>
                    <button type="button" class="icon-btn" title="Move up" ?disabled=${r===0} @click=${()=>this.moveColumn(r,-1)}>
                      <span class="mi sm">arrow_upward</span>
                    </button>
                    <button type="button" class="icon-btn" title="Move down" ?disabled=${r===this.columns.length-1} @click=${()=>this.moveColumn(r,1)}>
                      <span class="mi sm">arrow_downward</span>
                    </button>
                    <button type="button" class="icon-btn row-del" title="Remove column" @click=${()=>this.removeColumn(r)}>
                      <span class="mi sm">delete</span>
                    </button>
                  </div>
                `})}
            </div>

            <button type="button" class="add" @click=${this.addColumn}>+ Add column</button>
            ${this.columnActions.map(n=>k`<button type="button" class="add" title=${n.tooltip??n.label} @click=${()=>void this.runColumnAction(n)}>${n.label}</button>`)}
            ${this.renderDeleted()} ${this.renameDetected()?k`<div class="hint">Existing rows are re-keyed on save, so renamed fields keep their data.</div>`:""}
            ${this.errorMsg?k`<div class="error">${this.errorMsg}</div>`:""} ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Be.styles=[Ot,mt,Ce`
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
        /* drag | 👁 | field | label | type | renderer | script | max | validate | U ! ⇅ ⚲ | up down del */
        grid-template-columns:
          1.25rem 1.5rem 1fr 1fr 7rem 7rem 1.5rem 4rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem
          1.5rem 1.5rem;
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
      /* A header that toggles its whole column. Styled to sit in the header row
         like the plain labels beside it — the hover and the pointer are what say
         it does something. */
      .col-header button.flag-head {
        background: transparent;
        border: 0;
        padding: 0;
        color: inherit;
        font: inherit;
        font-size: 0.7rem;
        cursor: pointer;
        line-height: 1;
      }
      .col-header button.flag-head:hover {
        color: #374151;
      }
      .col-header button.flag-head:focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 1px;
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
      /* The validation pencil is the same glyph in the next column along, so
       its "set" state needs a colour of its OWN — two blue pencils would read
       as one wide control. Amber says "this column polices its edits". */
      button.icon-btn.has-validate {
        color: #d97706;
      }
      button.icon-btn.has-validate:hover:not(:disabled) {
        color: #b45309;
      }
      button.row-del {
        color: #9ca3af;
        font-size: 1.1rem;
      }
      button.row-del:hover:not(:disabled) {
        color: #ef4444;
      }
      /* The removed-columns offer: chips on one wrapping line under the list. */
      .deleted-cols {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.4rem;
        margin-top: 0.35rem;
      }
      .deleted-cols button.add {
        padding: 0.2rem 0.5rem;
        font-size: 0.85rem;
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
    `];Ze([z()],Be.prototype,"mode",2);Ze([z()],Be.prototype,"editTableId",2);Ze([z()],Be.prototype,"name",2);Ze([z()],Be.prototype,"tableTitle",2);Ze([z()],Be.prototype,"tableReadonly",2);Ze([z()],Be.prototype,"deletedFields",2);Ze([z()],Be.prototype,"columns",2);Ze([z()],Be.prototype,"errorMsg",2);Ze([z()],Be.prototype,"noticeMsg",2);Ze([z()],Be.prototype,"dragSrcIdx",2);Ze([z()],Be.prototype,"dropTargetIdx",2);Ze([z()],Be.prototype,"dropEdge",2);Ze([z()],Be.prototype,"previewRows",2);Ze([z()],Be.prototype,"previewState",2);Ze([z()],Be.prototype,"rendererOptions",2);Ze([z()],Be.prototype,"columnActions",2);Be=Ze([Oe("new-table-dialog")],Be);function w2(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function y2(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const i=Number(t);if(!Number.isFinite(i))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const i=new Date(String(t));if(Number.isNaN(i.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function v2(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((i,s)=>{const o=i.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${s+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((i,s)=>{const o=i.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${s+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${s+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const i=new Map;t.forEach((s,o)=>{const a=s.data[r.field];a==null||a===""||(i.has(a)?n.push(`Row ${o+1}: ${r.label} duplicates row ${i.get(a)+1} ("${String(a)}").`):i.set(a,o))})}return n}var k2=Object.defineProperty,$2=Object.getOwnPropertyDescriptor,ut=(e,t,n,r)=>{for(var i=r>1?void 0:r?$2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&k2(t,n,i),i};const x2='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',S2=k`<span class="mi sm">extension</span>`,Th="plugin:catalogUrls";function bs(){return new URL("/easydbaccess3/plugins/catalog.json",location.origin).toString()}const C2=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],vg=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],_2=new Map(vg),E2={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let Je=class extends xe{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[bs()],this.activeCatalogUrl=bs(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}async open(){const e=await J(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(s=>[s.url,s]));const r=await e.store.settings.findOne(Th),i=Array.isArray(r?.value)?r.value.filter(s=>typeof s=="string"):[];this.catalogUrls=i.length>0?i:[bs()],this.activeCatalogUrl=this.catalogUrls[0]??bs(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(i=>({...i,absUrl:new URL(i.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await J()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const i=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const s=await fetch(i,{cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);const o=await s.json(),a=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=a.map(c=>({...c,absUrl:new URL(c.url,i).toString()})),this.serverCatalogError=null}catch(s){this.serverCatalog=[],this.serverCatalogError=s.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await J()).store.settings.upsert({name:Th,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await J()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await J();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await J(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await J();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await J(),r=Ms(e),i=this.records.get(r);await n.store.plugins.upsert({...i??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:i?.lastFetched??0}),this.records=new Map(this.records.set(r,{...i,url:r,enabled:t,lastFetched:i?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await J()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await J();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const i=new Blob([r],{type:"text/javascript"}),s=URL.createObjectURL(i);try{const a=await import(s);await a.init?.(t.api),await a.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(s),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(a=>[a.url,a])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",i){const s=i?i[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return k`
      <button type="button" class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`} title=${s} aria-pressed=${t!==void 0} @click=${n}>
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of DE){const i=r.fixed?!0:this.records.get(Ms(n))?.enabled!==!1,s=!r.fixed&&Et==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:i,status:i&&!s?"enabled":"disabled",fixed:!!r.fixed,...s?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),i=this.records.get(n.absUrl),s=r?["available","installed"]:["available"],o=e.get(n.id),a=i?.enabled!==!1,c=r&&Et!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...s]):new Set(s),enabled:a,...r?{status:a&&!c?"enabled":"disabled"}:{},...c?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const i=this.records.get(n),s=i?.lastFetched?new Date(i.lastFetched).toLocaleString():"never",o=i?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:i?.lastError??`Last fetched: ${s}`,metaIsError:!!i?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&Et==="off"?"enabled":"disabled",...Et!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[c,d]of this.filterStates)(d==="on"?n:r).push(c);const i=[],s=[];for(const[c,d]of this.typeFilters)(d==="on"?i:s).push(c);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,a=e.filter(c=>!(n.length&&!n.some(d=>c.categories.has(d))||r.some(d=>c.categories.has(d))||i.length&&!(c.type&&i.includes(c.type))||c.type&&s.includes(c.type)||o&&c.status!==o));return t?a.filter(c=>[c.id,c.name,c.type,c.meta,c.author].some(d=>d?.toLowerCase().includes(t))):a}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return k`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}>
        <span class="row-icon">${e.icon?ar(e.icon):S2}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?k`<span class="row-id">${e.id}</span>`:""}${e.type?k`<span class="row-type" title="Plugin type">${_2.get(e.type)??e.type}</span>`:""}${e.skipped?k`<span class="row-skipped" title="Safe mode kept this plugin from loading this session — your saved setting is unchanged">skipped</span>`:""}
          </div>
          ${e.meta?k`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?k`<a class="row-repo" href=${e.repo} target="_blank" rel="noopener noreferrer" title="View source on GitHub">${ar(x2)}</a>`:k`<span></span>`}
        ${e.fixed?k`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?k`<label class="switch" title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}>
                <input type="checkbox" .checked=${e.enabled} @change=${i=>this.onRowToggle(e,i.target.checked)} />
                <span class="slider"></span>
              </label>`:k`<span></span>`}
        ${r?k`<button type="button" class="install" ?disabled=${e.installing} @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}>
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:n?k`<button type="button" class="uninstall" @click=${()=>this.removePlugin(e.url)}><span class="mi sm">delete</span> Uninstall</button>`:k`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return k`
      <dialog @cancel=${this.close} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>
          <span class="mi sm">close</span>
        </button>
        <form @submit=${this.addPlugin}>
          <div class="dialog-header">
            <h2>Plugins</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${this.close}>Close</button>
              <button type="button" class="primary" @click=${this.reload}><span class="mi sm">refresh</span> Reload to apply</button>
            </div>
          </div>
          <div class="dialog-body">
            <p class="hint">Plugins are JavaScript modules loaded by URL into this workspace. Enable/disable changes take effect after reload; installing a plugin activates it immediately.</p>
            ${Et!=="off"?k`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${Et==="all-optional"?k`<code>?safemode</code> skipped every URL plugin and every optional built-in for this session.`:k`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The toggles below still show — and change — your saved settings, which safe mode never touches. Reload
                  without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${C2.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",E2)}
              </div>
              <div class="search">
                <input type="text" placeholder="Search plugins…" .value=${this.search} @input=${t=>this.search=t.target.value} />
              </div>
            </div>

            <div class="type-filters">
              <span class="filter-label">Type</span>
              ${vg.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
            </div>

            <div class="catalog-source">
              <input
                type="text"
                list="catalog-url-options"
                .value=${this.activeCatalogUrl}
                @input=${t=>this.activeCatalogUrl=t.target.value}
                placeholder="Catalog source URL"
              />
              <datalist id="catalog-url-options">${this.catalogUrls.map(t=>k`<option value=${t}></option>`)}</datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}><span class="mi sm">refresh</span> Reload</button>
            </div>
            ${this.catalogError?k`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?k`<div class="meta err">Server registry unavailable: ${this.serverCatalogError}</div>`:""}

            <div class="plugin-list">${e.length===0?k`<p class="hint">No plugins match the current filters/search.</p>`:""} ${e.map(t=>this.renderRow(t))}</div>

            <div class="add">
              <input type="text" placeholder="https://example.com/my-plugin.js" .value=${this.addUrl} @input=${t=>this.addUrl=t.target.value} />
              <button type="submit" class="primary"><span class="mi sm">add</span> Add</button>
            </div>
          </div>
        </form>
      </dialog>
    `}};Je.styles=[Ot,mt,Ce`
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
    `];ut([z()],Je.prototype,"urls",2);ut([z()],Je.prototype,"records",2);ut([z()],Je.prototype,"addUrl",2);ut([z()],Je.prototype,"catalog",2);ut([z()],Je.prototype,"catalogError",2);ut([z()],Je.prototype,"serverCatalog",2);ut([z()],Je.prototype,"serverCatalogError",2);ut([z()],Je.prototype,"installing",2);ut([z()],Je.prototype,"catalogUrls",2);ut([z()],Je.prototype,"activeCatalogUrl",2);ut([z()],Je.prototype,"search",2);ut([z()],Je.prototype,"filterStates",2);ut([z()],Je.prototype,"typeFilters",2);ut([z()],Je.prototype,"statusFilter",2);Je=ut([Oe("plugin-manager-dialog")],Je);var T2=Object.defineProperty,I2=Object.getOwnPropertyDescriptor,Zt=(e,t,n,r)=>{for(var i=r>1?void 0:r?I2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&T2(t,n,i),i};const Xr="__general__";let ht=class extends xe{constructor(){super(...arguments),this.tabs=[],this.active=Xr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const i=r.names.map(s=>`“${s}”`).join(", ");this.secretError=`“${r.field.label}” references ${i}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&Xt("settings",this.dialogEl)}async open(){const e=await J(),t=[...e.registries.settings];this.tabs=t.map(([s,o])=>({id:s,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},i={};for(const s of this.tabs)for(const o of s.fields){const a=`${s.id}:${o.key}`,c=await e.api.settings.placement(s.id,o.key);c==="user"?(r[a]=Ls(a),i[a]="user"):c==="workspace"?(r[a]=(await e.store.settings.findOne(a))?.value,i[a]="workspace"):(r[a]=o.default,i[a]=o.scope??"workspace")}this.values=r,this.placements=i,this.secretsText=li(),this.active=Xr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&ht.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(ur(this.secretsText)));return ht.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await J()).api.settings.set(e.id,t.key,n,this.placements[r]),w1(e.id,t.key)}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,i=n?"user":"workspace";this.placements={...this.placements,[r]:i},await(await J()).api.settings.set(e.id,t.key,this.values[r],i)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,Bh(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await J();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return k`<textarea .value=${String(r??"")} @change=${i=>this.setValue(e,t,i.target.value)}></textarea>`;case"number":return k`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${i=>{const s=i.target.value;this.setValue(e,t,s===""?void 0:Number(s))}}
        />`;case"boolean":return k`<label class="scope"><input type="checkbox" .checked=${!!r} @change=${i=>this.setValue(e,t,i.target.checked)} /> enabled</label>`;case"date":return k`<input type="date" .value=${String(r??"")} @change=${i=>this.setValue(e,t,i.target.value)} />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return k`<div class="radios">
          ${(t.options??[]).map(i=>k`<label><input type="radio" name=${n} .checked=${r===i} @change=${()=>this.setValue(e,t,i)} />${i}</label>`)}
        </div>`;case"selection":{const i=Array.isArray(r)?r:[];return k`<div class="checks">
          ${(t.options??[]).map(s=>k`<label
                ><input
                  type="checkbox"
                  .checked=${i.includes(s)}
                  @change=${o=>{const c=o.target.checked?[...i,s]:i.filter(d=>d!==s);this.setValue(e,t,c)}}
                />${s}</label
              >`)}
        </div>`}case"string":default:return k`<input type="text" .value=${String(r??"")} @change=${i=>this.setValue(e,t,i.target.value)} />`}}renderSecretControl(e,t,n){const r=Object.keys(ur(this.secretsText)),i=ht.rawSecret(n)||this.missingRefs(n).length>0;return k`<div class="secret-row">
      <input
        type="text"
        class=${i?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${s=>this.setValue(e,t,s.target.value)}
      />
      ${r.length>0?k`<select
            title="Insert a secret reference"
            @change=${s=>{const o=s.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),s.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(s=>k`<option value=${s}>${s}</option>`)}
          </select>`:ee}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),i=this.openHelp===n;return k`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?k`<button
              type="button"
              class="help-btn"
              aria-label=${`Help for ${t.label}`}
              aria-expanded=${i?"true":"false"}
              title=${t.help??"More about this setting"}
              @click=${()=>this.openHelp=i?"":n}
            >
              <span class="mi sm" aria-hidden="true">info</span>
            </button>`:ee}
        <label class="scope" title="Store on this device only (not synced)">
          <input type="checkbox" .checked=${this.placements[n]==="user"} @change=${s=>this.toggleScope(e,t,s.target.checked)} />
          user
        </label>
      </div>
      ${r&&i?k`<div class="help-panel">
            ${t.help?k`<p>${t.help}</p>`:ee} ${t.helpUrl?k`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer">${t.helpLinkLabel||A2(t.helpUrl)}</a>`:ee}
          </div>`:ee}
      ${this.renderControl(e,t)} ${t.description?k`<p class="desc">${t.description}</p>`:ee}
    </div>`}renderGeneral(){return k`
      <h3>General</h3>
      <p class="blurb">
        Workspace settings sync with this workspace; values marked
        <em>user</em> stay on this device only.
      </p>
      <div class="field">
        <div class="field-head"><label>Workspace title</label></div>
        <p class="desc">Shown in the header instead of "easyDBAccess". Leave blank to use the default.</p>
        <input type="text" placeholder="easyDBAccess" .value=${this.workspaceTitle} @change=${e=>this.setWorkspaceTitle(e.target.value)} />
      </div>
      <div class="field">
        <div class="field-head"><label>Secrets</label></div>
        <p class="desc">
          Cross-workspace, device-local. One <code>name: value</code> per line. Reference a secret from any field with <code>\${secret:name}</code>. Drag a <code>secrets.txt</code> onto the app to
          re-import.
        </p>
        <textarea placeholder="githubPAT: ghp_…" .value=${this.secretsText} @input=${this.onSecretsInput}></textarea>
        <div class="secrets-actions">
          <button type="button" class="ghost" ?disabled=${this.secretsText.trim().length===0} @click=${this.downloadSecrets}><span class="mi sm">download</span> Download secrets.txt</button>
        </div>
      </div>
    `}renderPanel(){if(this.active===Xr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?k`
      <h3>${e.name}</h3>
      ${e.fields.length===0?k`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:ee}render(){return k`
      <dialog @cancel=${this.attemptClose} @keydown=${gt}>
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
          ${this.secretError?k`<div class="secret-error" role="alert">${this.secretError}</div>`:ee}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button type="button" class=${this.active===Xr?"active":""} @click=${()=>this.active=Xr}>General</button>
                ${this.tabs.map(e=>k`<button type="button" class=${this.active===e.id?"active":""} @click=${()=>this.active=e.id}>${e.name}</button>`)}
              </nav>
              <section class="panel">${this.renderPanel()}</section>
            </div>
          </div>
        </form>
      </dialog>
    `}};ht.styles=[Ot,mt,Ce`
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
    `];Zt([z()],ht.prototype,"tabs",2);Zt([z()],ht.prototype,"active",2);Zt([z()],ht.prototype,"values",2);Zt([z()],ht.prototype,"placements",2);Zt([z()],ht.prototype,"secretsText",2);Zt([z()],ht.prototype,"workspaceTitle",2);Zt([z()],ht.prototype,"secretError",2);Zt([z()],ht.prototype,"openHelp",2);ht=Zt([Oe("settings-dialog")],ht);function A2(e){try{return new URL(e).host}catch{return e}}const kg=5,ja="palette:recent",$g="Recent";function R2(e,t,n=kg){return[t,...e.filter(r=>r!==t)].slice(0,n)}function O2(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,kg):[]}function D2(e,t){const n=t instanceof Set?t:new Set(t);return e.filter(r=>n.has(r))}function L2(e,t){if(t.length===0)return e;const n=new Map(e.map(s=>[s.id,s])),r=[];for(const s of t){const o=n.get(s);o&&r.push({...o,group:$g})}if(r.length===0)return e;const i=new Set(r.map(s=>s.id));return[...r,...e.filter(s=>!i.has(s.id))]}var M2=Object.defineProperty,P2=Object.getOwnPropertyDescriptor,Ir=(e,t,n,r)=>{for(var i=r>1?void 0:r?P2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&M2(t,n,i),i};const N2={[$g]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function Ih(e){return N2[e]??3}function j2(e){return e?e.trimStart().startsWith("<svg")?k`<span class="cmd-svg">${El(e)}</span>`:k`<span class="mi sm">${e}</span>`:k`<span class="mi sm">chevron_right</span>`}let pn=class extends xe{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.commandFallbacks=[],this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await J();this.api=e.api,this.commandFallbacks=e.registries.commandFallbacks,this.recentIds=O2((await e.api.store.settings.findOne(ja))?.value),this.items=await this.buildItems(),await this.forgetVanished(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await J(),t=e.api,n=[];for(const s of e.registries.commands)n.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:[s.title,s.group,...s.keywords??[]].join(" ").toLowerCase(),run:()=>s.run(t)});for(const s of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${s.id}`,title:s.label,group:"Actions",...s.icon?{icon:s.icon}:{},haystack:`${s.label} ${s.tooltip??""}`.toLowerCase(),run:()=>s.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((s,o)=>s.name.localeCompare(o.name));for(const s of r)n.push({id:`goto:${s.id}`,title:`Go to: ${s.name}`,group:"Tables",icon:"table_chart",haystack:`${s.name} go to table`.toLowerCase(),run:()=>{xc(s.id)}});const i=await t.store.viewInstances.find({workspaceId:e.workspaceId});i.sort((s,o)=>s.name.localeCompare(o.name));for(const s of i)n.push({id:`goto-view:${s.id}`,title:`Go to view: ${s.name}`,group:"Views",icon:"view_quilt",haystack:`${s.name} go to view`.toLowerCase(),run:async()=>{await Oc(s.id)}});return L2(n,this.recentIds).map((s,o)=>({it:s,i:o})).sort((s,o)=>Ih(s.it.group)-Ih(o.it.group)||s.i-o.i).map(({it:s})=>s)}get filtered(){const e=this.search.trim();if(!e)return this.items;const t=this.items.filter(n=>n.haystack.includes(e.toLowerCase()));return t.length>0?t:this.fallbackItems(e)}fallbackItems(e){const t=this.api;if(!t)return[];const n=[];for(const r of this.commandFallbacks){let i;try{i=r(e)}catch{continue}i&&n.push({id:i.id,title:i.title,group:i.group??"Commands",...i.icon?{icon:i.icon}:{},haystack:i.title.toLowerCase(),run:()=>i.run(t)})}return n}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async forgetVanished(){const e=D2(this.recentIds,this.items.map(t=>t.id));if(e.length!==this.recentIds.length){this.recentIds=e;try{await this.api?.store.settings.upsert({name:ja,value:e})}catch{}}}async remember(e){this.recentIds=R2(this.recentIds,e);try{await this.api?.store.settings.upsert({name:ja,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return k`
      <dialog @keydown=${this.onKeydown} @click=${this.onDialogClick} @close=${()=>this.search=""}>
        <div class="search-row">
          <span class="mi">search</span>
          <input type="text" placeholder="Type a command…  (windows, go to, import, export)" .value=${this.search} @input=${this.onInput} />
        </div>
        <div class="list">
          ${e.length===0?k`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const i=n.group!==t?(t=n.group,n.group):null;return k`
                  ${i?k`<div class="group-head">${i}</div>`:""}
                  <div class=${`item${r===this.selected?" sel":""}`} @mousemove=${()=>this.selected=r} @click=${()=>this.execute(n)}>
                    ${j2(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};pn.styles=[Ot,Ce`
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
    `];Ir([z()],pn.prototype,"search",2);Ir([z()],pn.prototype,"items",2);Ir([z()],pn.prototype,"selected",2);Ir([Kt("dialog")],pn.prototype,"dialogEl",2);Ir([Kt("input")],pn.prototype,"inputEl",2);pn=Ir([Oe("command-palette-dialog")],pn);var z2=Object.defineProperty,F2=Object.getOwnPropertyDescriptor,No=(e,t,n,r)=>{for(var i=r>1?void 0:r?F2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&z2(t,n,i),i};let kr=class extends xe{constructor(){super(...arguments),this.label="",this.fraction=void 0,this.detail="",this.onProgress=e=>{const t=e.detail;this.label=t.label??"",this.fraction=t.fraction,this.detail=t.detail??""}}connectedCallback(){super.connectedCallback(),document.addEventListener(Ja,this.onProgress)}disconnectedCallback(){document.removeEventListener(Ja,this.onProgress),super.disconnectedCallback()}render(){if(!this.label)return ee;const e=this.fraction==null?null:Math.round(Math.min(1,Math.max(0,this.fraction))*100);return k`
      <div class="wrap" role="status" aria-live="polite">
        <span class="label">${this.label}</span>
        <span class="bar">
          <span class="fill ${e==null?"":"determinate"}" style=${e==null?"":`width:${e}%`}></span>
        </span>
        ${this.detail?k`<span class="detail">${this.detail}</span>`:ee}
        <span class="pct">${e==null?"":`${e}%`}</span>
      </div>
    `}};kr.styles=Ce`
    :host {
      display: block;
    }
    .wrap {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.3rem 0.75rem;
      background: #eef2ff;
      border-bottom: 1px solid #c7d2fe;
      font-size: 0.78rem;
      color: #3730a3;
    }
    .label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .detail {
      color: #6366f1;
      white-space: nowrap;
    }
    .bar {
      flex: 1;
      height: 4px;
      border-radius: 2px;
      background: #c7d2fe;
      overflow: hidden;
    }
    .fill {
      height: 100%;
      background: #4f46e5;
    }
    /* Indeterminate: work has started but nothing has reported yet. A sliding
       sliver says "running" without claiming a position it does not know. */
    .fill:not(.determinate) {
      width: 30%;
      animation: eda-app-progress 1.1s ease-in-out infinite;
    }
    .fill.determinate {
      transition: width 0.15s linear;
    }
    .pct {
      min-width: 2.5rem;
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    @keyframes eda-app-progress {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(333%);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .fill:not(.determinate) {
        animation: none;
        width: 100%;
        opacity: 0.5;
      }
    }
  `;No([z()],kr.prototype,"label",2);No([z()],kr.prototype,"fraction",2);No([z()],kr.prototype,"detail",2);kr=No([Oe("app-progress")],kr);var U2=Object.defineProperty,B2=Object.getOwnPropertyDescriptor,xg=(e,t,n,r)=>{for(var i=r>1?void 0:r?B2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&U2(t,n,i),i};let Ys=class extends xe{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await J();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await vm(),await vC(),dE()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?k``:k`<div class="empty">No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the page, or click <strong>+ New Table</strong> above.</div>`}};Ys.styles=Ce`
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
  `;xg([z()],Ys.prototype,"tables",2);Ys=xg([Oe("table-list")],Ys);var q2=Object.defineProperty,H2=Object.getOwnPropertyDescriptor,Fc=(e,t,n,r)=>{for(var i=r>1?void 0:r?H2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&q2(t,n,i),i};let gi=class extends xe{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await J();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);t&&Mo(t.name)}render(){return k`
      <select .value=${this.current} @change=${e=>this.switchWorkspace(e.target.value)}>
        ${this.workspaces.map(e=>k`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${pg} title="New workspace">
        <span class="mi sm">add</span>
      </button>
      <button @click=${mg} title="Delete workspace">
        <span class="mi sm">delete</span>
      </button>
    `}};gi.styles=[Ot,Ce`
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
    `];Fc([z()],gi.prototype,"workspaces",2);Fc([z()],gi.prototype,"current",2);gi=Fc([Oe("workspace-selector")],gi);var Ah=Object.freeze,Sg=Object.defineProperty,V2=Object.getOwnPropertyDescriptor,Dt=(e,t,n,r)=>{for(var i=r>1?void 0:r?V2(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Sg(t,n,i),i},K2=(e,t)=>Ah(Sg(e,"raw",{value:Ah(e.slice())})),Rh;Ob();Nb();function Oh(e){return e?e.trimStart().startsWith("<svg")?k`<span class="icon-svg" aria-hidden="true">${El(e)}</span>`:k`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let pt=class extends xe{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.onSetSearch=e=>{this.searchQuery=e.detail?.query??"",this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery&&(this.searchOpen=!0),this.broadcastSearch(this.searchQuery)},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Lh(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{const t=e.relatedTarget;t&&(this.contains(t)||G2()?.contains(t))||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Lh(e))return;e.preventDefault();const t=await J(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(i){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:i})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),document.addEventListener("dragover",this.onDragOver),document.addEventListener("dragleave",this.onDragLeave),document.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("easydb:set-search",this.onSetSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragover",this.onDragOver),document.removeEventListener("dragleave",this.onDragLeave),document.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("easydb:set-search",this.onSetSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await J();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",W2(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return k` <button class="icon-btn" title=${e.tooltip??e.label} aria-label=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>${Oh(e.icon)}</button> `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return k`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${Oh(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return k(Rh||(Rh=K2([`
      <header>
        <strong
          >`,`
          <a class="version-link" href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md" target="_blank" rel="noopener" title="View the changelog on GitHub"
            ><span class="version">v0.0.349</span></a
          ></strong
        >
        `,`
        `,`
        <button class="icon-btn" title="Add, disable, or remove plugins" aria-label="Plugins" @click=`,`>
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
      <app-progress></app-progress>
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?k`<span class="search-wrap">
              <input class="search" type="search" placeholder="search all tables…" .value=${this.searchQuery} @input=${this.onSearchInput} @blur=${this.closeSearchOnBlur} />
              ${this.searchQuery.length>0?k`<button class="search-clear" title="Clear search" aria-label="Clear search" @mousedown=${this.clearSearch}>×</button>`:""}
            </span>`:k`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              aria-label="Search"
              @click=${this.openSearch}
            >
              <span class="mi" aria-hidden="true">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};pt.styles=[Ot,Ce`
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
    `];Dt([Kt("new-table-dialog")],pt.prototype,"dialog",2);Dt([Kt("csv-paste-dialog")],pt.prototype,"csvPasteDialog",2);Dt([Kt("plugin-manager-dialog")],pt.prototype,"pluginManagerDialog",2);Dt([Kt("settings-dialog")],pt.prototype,"settingsDialog",2);Dt([Kt("command-palette-dialog")],pt.prototype,"commandPaletteDialog",2);Dt([Kt("input.search")],pt.prototype,"searchInput",2);Dt([z()],pt.prototype,"footerButtons",2);Dt([z()],pt.prototype,"headerButtons",2);Dt([z()],pt.prototype,"searchQuery",2);Dt([z()],pt.prototype,"searchOpen",2);Dt([z()],pt.prototype,"workspaceTitle",2);pt=Dt([Oe("app-shell")],pt);const Dh=document.title;function W2(e){const t=e.trim();document.title=t?`${t} — ${Dh}`:Dh}function G2(){return document.getElementById("easydb-panels")}function Lh(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([J(),Ie(()=>Promise.resolve().then(()=>Im),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{ee as A,zb as a,k as b,gt as c,mt as d,cT as e,Ce as f,X2 as g,xe as i,bt as m,z as r,Oe as t,Xt as w};
//# sourceMappingURL=index-VvH_-iM3.js.map
