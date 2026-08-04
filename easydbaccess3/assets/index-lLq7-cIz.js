(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Vp="modulepreload",Gp=function(e){return"/easydbaccess3/"+e},ac={},ze=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=a?.nonce||a?.getAttribute("nonce");s=o(n.map(d=>{if(d=Gp(d),d in ac)return;ac[d]=!0;const p=d.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":Vp,p||(y.as="script"),y.crossOrigin="",y.href=d,u&&y.setAttribute("nonce",u),document.head.appendChild(y),p)return new Promise((w,$)=>{y.addEventListener("load",w),y.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs=globalThis,va=Bs.ShadowRoot&&(Bs.ShadyCSS===void 0||Bs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$a=Symbol(),lc=new WeakMap;let od=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==$a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(va&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=lc.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&lc.set(n,t))}return t}toString(){return this.cssText}};const Wp=e=>new od(typeof e=="string"?e:e+"",void 0,$a),_e=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new od(n,e,$a)},Yp=(e,t)=>{if(va)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=Bs.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},cc=va?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Wp(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qp,defineProperty:Xp,getOwnPropertyDescriptor:Jp,getOwnPropertyNames:Zp,getOwnPropertySymbols:em,getPrototypeOf:tm}=Object,ui=globalThis,uc=ui.trustedTypes,nm=uc?uc.emptyScript:"",rm=ui.reactiveElementPolyfillSupport,Pr=(e,t)=>e,Qs={toAttribute(e,t){switch(t){case Boolean:e=e?nm:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},xa=(e,t)=>!Qp(e,t),dc={attribute:!0,type:String,converter:Qs,reflect:!1,useDefault:!1,hasChanged:xa};Symbol.metadata??=Symbol("metadata"),ui.litPropertyMetadata??=new WeakMap;let Hn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=dc){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&Xp(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:i}=Jp(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:s,set(o){const a=s?.call(this);i?.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dc}static _$Ei(){if(this.hasOwnProperty(Pr("elementProperties")))return;const t=tm(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Pr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pr("properties"))){const n=this.properties,r=[...Zp(n),...em(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(cc(s))}else t!==void 0&&n.push(cc(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yp(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:Qs).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Qs;this._$Em=s;const a=o.fromAttribute(n,i.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,n,r,s=!1,i){if(t!==void 0){const o=this.constructor;if(s===!1&&(i=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??xa)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r){const{wrapped:o}=i,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Hn.elementStyles=[],Hn.shadowRootOptions={mode:"open"},Hn[Pr("elementProperties")]=new Map,Hn[Pr("finalized")]=new Map,rm?.({ReactiveElement:Hn}),(ui.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ka=globalThis,hc=e=>e,Xs=ka.trustedTypes,fc=Xs?Xs.createPolicy("lit-html",{createHTML:e=>e}):void 0,ad="$lit$",on=`lit$${Math.random().toFixed(9).slice(2)}$`,ld="?"+on,sm=`<${ld}>`,Tn=document,jr=()=>Tn.createComment(""),Nr=e=>e===null||typeof e!="object"&&typeof e!="function",Ca=Array.isArray,im=e=>Ca(e)||typeof e?.[Symbol.iterator]=="function",So=`[ 	
\f\r]`,Cr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pc=/-->/g,mc=/>/g,xn=RegExp(`>|${So}(?:([^\\s"'>=/]+)(${So}*=${So}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gc=/'/g,bc=/"/g,cd=/^(?:script|style|textarea|title)$/i,om=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),k=om(1),In=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),wc=new WeakMap,Sn=Tn.createTreeWalker(Tn,129);function ud(e,t){if(!Ca(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return fc!==void 0?fc.createHTML(t):t}const am=(e,t)=>{const n=e.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=Cr;for(let a=0;a<n;a++){const u=e[a];let d,p,g=-1,y=0;for(;y<u.length&&(o.lastIndex=y,p=o.exec(u),p!==null);)y=o.lastIndex,o===Cr?p[1]==="!--"?o=pc:p[1]!==void 0?o=mc:p[2]!==void 0?(cd.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=xn):p[3]!==void 0&&(o=xn):o===xn?p[0]===">"?(o=s??Cr,g=-1):p[1]===void 0?g=-2:(g=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?xn:p[3]==='"'?bc:gc):o===bc||o===gc?o=xn:o===pc||o===mc?o=Cr:(o=xn,s=void 0);const w=o===xn&&e[a+1].startsWith("/>")?" ":"";i+=o===Cr?u+sm:g>=0?(r.push(d),u.slice(0,g)+ad+u.slice(g)+on+w):u+on+(g===-2?a:w)}return[ud(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class zr{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=t.length-1,u=this.parts,[d,p]=am(t,n);if(this.el=zr.createElement(d,r),Sn.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=Sn.nextNode())!==null&&u.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const g of s.getAttributeNames())if(g.endsWith(ad)){const y=p[o++],w=s.getAttribute(g).split(on),$=/([.?@])?(.*)/.exec(y);u.push({type:1,index:i,name:$[2],strings:w,ctor:$[1]==="."?cm:$[1]==="?"?um:$[1]==="@"?dm:di}),s.removeAttribute(g)}else g.startsWith(on)&&(u.push({type:6,index:i}),s.removeAttribute(g));if(cd.test(s.tagName)){const g=s.textContent.split(on),y=g.length-1;if(y>0){s.textContent=Xs?Xs.emptyScript:"";for(let w=0;w<y;w++)s.append(g[w],jr()),Sn.nextNode(),u.push({type:2,index:++i});s.append(g[y],jr())}}}else if(s.nodeType===8)if(s.data===ld)u.push({type:2,index:i});else{let g=-1;for(;(g=s.data.indexOf(on,g+1))!==-1;)u.push({type:7,index:i}),g+=on.length-1}i++}}static createElement(t,n){const r=Tn.createElement("template");return r.innerHTML=t,r}}function Wn(e,t,n=e,r){if(t===In)return t;let s=r!==void 0?n._$Co?.[r]:n._$Cl;const i=Nr(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=s:n._$Cl=s),s!==void 0&&(t=Wn(e,s._$AS(e,t.values),s,r)),t}class lm{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=(t?.creationScope??Tn).importNode(n,!0);Sn.currentNode=s;let i=Sn.nextNode(),o=0,a=0,u=r[0];for(;u!==void 0;){if(o===u.index){let d;u.type===2?d=new Yr(i,i.nextSibling,this,t):u.type===1?d=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(d=new hm(i,this,t)),this._$AV.push(d),u=r[++a]}o!==u?.index&&(i=Sn.nextNode(),o++)}return Sn.currentNode=Tn,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Yr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Wn(this,t,n),Nr(t)?t===ie||t==null||t===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):t!==this._$AH&&t!==In&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):im(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ie&&Nr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Tn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=zr.createElement(ud(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(n);else{const i=new lm(s,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(t){let n=wc.get(t.strings);return n===void 0&&wc.set(t.strings,n=new zr(t)),n}k(t){Ca(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of t)s===n.length?n.push(r=new Yr(this.O(jr()),this.O(jr()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=hc(t).nextSibling;hc(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class di{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,i){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ie}_$AI(t,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=Wn(this,t,n,0),o=!Nr(t)||t!==this._$AH&&t!==In,o&&(this._$AH=t);else{const a=t;let u,d;for(t=i[0],u=0;u<i.length-1;u++)d=Wn(this,a[r+u],n,u),d===In&&(d=this._$AH[u]),o||=!Nr(d)||d!==this._$AH[u],d===ie?t=ie:t!==ie&&(t+=(d??"")+i[u+1]),this._$AH[u]=d}o&&!s&&this.j(t)}j(t){t===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class cm extends di{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ie?void 0:t}}class um extends di{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ie)}}class dm extends di{constructor(t,n,r,s,i){super(t,n,r,s,i),this.type=5}_$AI(t,n=this){if((t=Wn(this,t,n,0)??ie)===In)return;const r=this._$AH,s=t===ie&&r!==ie||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==ie&&(r===ie||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class hm{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Wn(this,t)}}const fm=ka.litHtmlPolyfillSupport;fm?.(zr,Yr),(ka.litHtmlVersions??=[]).push("3.3.3");const pm=(e,t,n)=>{const r=n?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const i=n?.renderBefore??null;r._$litPart$=s=new Yr(t.insertBefore(jr(),i),i,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a=globalThis;let ke=class extends Hn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=pm(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return In}};ke._$litElement$=!0,ke.finalized=!0,_a.litElementHydrateSupport?.({LitElement:ke});const mm=_a.litElementPolyfillSupport;mm?.({LitElement:ke});(_a.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gm={attribute:!0,type:String,converter:Qs,reflect:!1,hasChanged:xa},bm=(e=gm,t,n)=>{const{kind:r,metadata:s}=n;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(r==="setter"){const{name:o}=n;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function wt(e){return(t,n)=>typeof n=="object"?bm(e,t,n):((r,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e){return wt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wm=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bt(e,t){return(n,r,s)=>{const i=o=>o.renderRoot?.querySelector(e)??null;return wm(n,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ym={CHILD:2},dd=e=>(...t)=>({_$litDirective$:e,values:t});class vm{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Js extends vm{constructor(t){if(super(t),this.it=ie,t.type!==ym.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ie||t==null)return this._t=void 0,this.it=t;if(t===In)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Js.directiveName="unsafeHTML",Js.resultType=1;const Gn=dd(Js);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bo extends Js{}Bo.directiveName="unsafeSVG",Bo.resultType=2;const Sa=dd(Bo);var $m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qs={exports:{}},km=qs.exports,yc;function Cm(){return yc||(yc=1,(function(e,t){(function(n,r){e.exports=r()})(km,function(){var n=function(l,c){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,f){h.__proto__=f}||function(h,f){for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(h[m]=f[m])})(l,c)},r=function(){return(r=Object.assign||function(l){for(var c,h=1,f=arguments.length;h<f;h++)for(var m in c=arguments[h])Object.prototype.hasOwnProperty.call(c,m)&&(l[m]=c[m]);return l}).apply(this,arguments)};function s(l,c,h){for(var f,m=0,b=c.length;m<b;m++)!f&&m in c||((f=f||Array.prototype.slice.call(c,0,m))[m]=c[m]);return l.concat(f||Array.prototype.slice.call(c))}var i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:$m,o=Object.keys,a=Array.isArray;function u(l,c){return typeof c!="object"||o(c).forEach(function(h){l[h]=c[h]}),l}typeof Promise>"u"||i.Promise||(i.Promise=Promise);var d=Object.getPrototypeOf,p={}.hasOwnProperty;function g(l,c){return p.call(l,c)}function y(l,c){typeof c=="function"&&(c=c(d(l))),(typeof Reflect>"u"?o:Reflect.ownKeys)(c).forEach(function(h){$(l,h,c[h])})}var w=Object.defineProperty;function $(l,c,h,f){w(l,c,u(h&&g(h,"get")&&typeof h.get=="function"?{get:h.get,set:h.set,configurable:!0}:{value:h,configurable:!0,writable:!0},f))}function x(l){return{from:function(c){return l.prototype=Object.create(c.prototype),$(l.prototype,"constructor",l),{extend:y.bind(null,l.prototype)}}}}var T=Object.getOwnPropertyDescriptor,S=[].slice;function L(l,c,h){return S.call(l,c,h)}function W(l,c){return c(l)}function z(l){if(!l)throw new Error("Assertion Failed")}function re(l){i.setImmediate?setImmediate(l):setTimeout(l,0)}function G(l,c){if(typeof c=="string"&&g(l,c))return l[c];if(!c)return l;if(typeof c!="string"){for(var h=[],f=0,m=c.length;f<m;++f){var b=G(l,c[f]);h.push(b)}return h}var v=c.indexOf(".");if(v!==-1){var C=l[c.substr(0,v)];return C==null?void 0:G(C,c.substr(v+1))}}function E(l,c,h){if(l&&c!==void 0&&!("isFrozen"in Object&&Object.isFrozen(l)))if(typeof c!="string"&&"length"in c){z(typeof h!="string"&&"length"in h);for(var f=0,m=c.length;f<m;++f)E(l,c[f],h[f])}else{var b,v,C=c.indexOf(".");C!==-1?(b=c.substr(0,C),(v=c.substr(C+1))===""?h===void 0?a(l)&&!isNaN(parseInt(b))?l.splice(b,1):delete l[b]:l[b]=h:E(C=!(C=l[b])||!g(l,b)?l[b]={}:C,v,h)):h===void 0?a(l)&&!isNaN(parseInt(c))?l.splice(c,1):delete l[c]:l[c]=h}}function q(l){var c,h={};for(c in l)g(l,c)&&(h[c]=l[c]);return h}var X=[].concat;function ue(l){return X.apply([],l)}var Ht="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ue([8,16,32,64].map(function(l){return["Int","Uint","Float"].map(function(c){return c+l+"Array"})}))).filter(function(l){return i[l]}),pe=new Set(Ht.map(function(l){return i[l]})),H=null;function Z(l){return H=new WeakMap,l=(function c(h){if(!h||typeof h!="object")return h;var f=H.get(h);if(f)return f;if(a(h)){f=[],H.set(h,f);for(var m=0,b=h.length;m<b;++m)f.push(c(h[m]))}else if(pe.has(h.constructor))f=h;else{var v,C=d(h);for(v in f=C===Object.prototype?{}:Object.create(C),H.set(h,f),h)g(h,v)&&(f[v]=c(h[v]))}return f})(l),H=null,l}var K={}.toString;function se(l){return K.call(l).slice(8,-1)}var ve=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Qe=typeof ve=="symbol"?function(l){var c;return l!=null&&(c=l[ve])&&c.apply(l)}:function(){return null};function je(l,c){return c=l.indexOf(c),0<=c&&l.splice(c,1),0<=c}var me={};function Ne(l){var c,h,f,m;if(arguments.length===1){if(a(l))return l.slice();if(this===me&&typeof l=="string")return[l];if(m=Qe(l)){for(h=[];!(f=m.next()).done;)h.push(f.value);return h}if(l==null)return[l];if(typeof(c=l.length)!="number")return[l];for(h=new Array(c);c--;)h[c]=l[c];return h}for(c=arguments.length,h=new Array(c);c--;)h[c]=arguments[c];return h}var kt=typeof Symbol<"u"?function(l){return l[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},hr=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ct=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(hr),ye={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Re(l,c){this.name=l,this.message=c}function st(l,c){return l+". Errors: "+Object.keys(c).map(function(h){return c[h].toString()}).filter(function(h,f,m){return m.indexOf(h)===f}).join(`
`)}function et(l,c,h,f){this.failures=c,this.failedKeys=f,this.successCount=h,this.message=st(l,c)}function Mn(l,c){this.name="BulkError",this.failures=Object.keys(c).map(function(h){return c[h]}),this.failuresByPos=c,this.message=st(l,this.failures)}x(Re).from(Error).extend({toString:function(){return this.name+": "+this.message}}),x(et).from(Re),x(Mn).from(Re);var Bi=Ct.reduce(function(l,c){return l[c]=c+"Error",l},{}),mp=Re,de=Ct.reduce(function(l,c){var h=c+"Error";function f(m,b){this.name=h,m?typeof m=="string"?(this.message="".concat(m).concat(b?`
 `+b:""),this.inner=b||null):typeof m=="object"&&(this.message="".concat(m.name," ").concat(m.message),this.inner=m):(this.message=ye[c]||h,this.inner=null)}return x(f).from(mp),l[c]=f,l},{});de.Syntax=SyntaxError,de.Type=TypeError,de.Range=RangeError;var El=hr.reduce(function(l,c){return l[c+"Error"]=de[c],l},{}),is=Ct.reduce(function(l,c){return["Syntax","Type","Range"].indexOf(c)===-1&&(l[c+"Error"]=de[c]),l},{});function Ce(){}function ur(l){return l}function gp(l,c){return l==null||l===ur?c:function(h){return c(l(h))}}function hn(l,c){return function(){l.apply(this,arguments),c.apply(this,arguments)}}function bp(l,c){return l===Ce?c:function(){var h=l.apply(this,arguments);h!==void 0&&(arguments[0]=h);var f=this.onsuccess,m=this.onerror;this.onsuccess=null,this.onerror=null;var b=c.apply(this,arguments);return f&&(this.onsuccess=this.onsuccess?hn(f,this.onsuccess):f),m&&(this.onerror=this.onerror?hn(m,this.onerror):m),b!==void 0?b:h}}function wp(l,c){return l===Ce?c:function(){l.apply(this,arguments);var h=this.onsuccess,f=this.onerror;this.onsuccess=this.onerror=null,c.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?hn(h,this.onsuccess):h),f&&(this.onerror=this.onerror?hn(f,this.onerror):f)}}function yp(l,c){return l===Ce?c:function(h){var f=l.apply(this,arguments);u(h,f);var m=this.onsuccess,b=this.onerror;return this.onsuccess=null,this.onerror=null,h=c.apply(this,arguments),m&&(this.onsuccess=this.onsuccess?hn(m,this.onsuccess):m),b&&(this.onerror=this.onerror?hn(b,this.onerror):b),f===void 0?h===void 0?void 0:h:u(f,h)}}function vp(l,c){return l===Ce?c:function(){return c.apply(this,arguments)!==!1&&l.apply(this,arguments)}}function qi(l,c){return l===Ce?c:function(){var h=l.apply(this,arguments);if(h&&typeof h.then=="function"){for(var f=this,m=arguments.length,b=new Array(m);m--;)b[m]=arguments[m];return h.then(function(){return c.apply(f,b)})}return c.apply(this,arguments)}}is.ModifyError=et,is.DexieError=Re,is.BulkError=Mn;var Lt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Tl(l){Lt=l}var dr={},Il=100,Ht=typeof Promise>"u"?[]:(function(){var l=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[l,d(l),l];var c=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[c,d(c),l]})(),hr=Ht[0],Ct=Ht[1],Ht=Ht[2],Ct=Ct&&Ct.then,fn=hr&&hr.constructor,Hi=!!Ht,fr=function(l,c){pr.push([l,c]),os&&(queueMicrotask(xp),os=!1)},Ki=!0,os=!0,pn=[],as=[],Vi=ur,Xt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Ce,pgp:!1,env:{},finalize:Ce},ce=Xt,pr=[],mn=0,ls=[];function oe(l){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var c=this._PSD=ce;if(typeof l!="function"){if(l!==dr)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Wi(this,this._value))}this._state=null,this._value=null,++c.ref,(function h(f,m){try{m(function(b){if(f._state===null){if(b===f)throw new TypeError("A promise cannot be resolved with itself.");var v=f._lib&&jn();b&&typeof b.then=="function"?h(f,function(C,I){b instanceof oe?b._then(C,I):b.then(C,I)}):(f._state=!0,f._value=b,Rl(f)),v&&Nn()}},Wi.bind(null,f))}catch(b){Wi(f,b)}})(this,l)}var Gi={get:function(){var l=ce,c=hs;function h(f,m){var b=this,v=!l.global&&(l!==ce||c!==hs),C=v&&!Zt(),I=new oe(function(R,P){Yi(b,new Al(Dl(f,l,v,C),Dl(m,l,v,C),R,P,l))});return this._consoleTask&&(I._consoleTask=this._consoleTask),I}return h.prototype=dr,h},set:function(l){$(this,"then",l&&l.prototype===dr?Gi:{get:function(){return l},set:Gi.set})}};function Al(l,c,h,f,m){this.onFulfilled=typeof l=="function"?l:null,this.onRejected=typeof c=="function"?c:null,this.resolve=h,this.reject=f,this.psd=m}function Wi(l,c){var h,f;as.push(c),l._state===null&&(h=l._lib&&jn(),c=Vi(c),l._state=!1,l._value=c,f=l,pn.some(function(m){return m._value===f._value})||pn.push(f),Rl(l),h&&Nn())}function Rl(l){var c=l._listeners;l._listeners=[];for(var h=0,f=c.length;h<f;++h)Yi(l,c[h]);var m=l._PSD;--m.ref||m.finalize(),mn===0&&(++mn,fr(function(){--mn==0&&Qi()},[]))}function Yi(l,c){if(l._state!==null){var h=l._state?c.onFulfilled:c.onRejected;if(h===null)return(l._state?c.resolve:c.reject)(l._value);++c.psd.ref,++mn,fr($p,[h,l,c])}else l._listeners.push(c)}function $p(l,c,h){try{var f,m=c._value;!c._state&&as.length&&(as=[]),f=Lt&&c._consoleTask?c._consoleTask.run(function(){return l(m)}):l(m),c._state||as.indexOf(m)!==-1||(function(b){for(var v=pn.length;v;)if(pn[--v]._value===b._value)return pn.splice(v,1)})(c),h.resolve(f)}catch(b){h.reject(b)}finally{--mn==0&&Qi(),--h.psd.ref||h.psd.finalize()}}function xp(){gn(Xt,function(){jn()&&Nn()})}function jn(){var l=Ki;return os=Ki=!1,l}function Nn(){var l,c,h;do for(;0<pr.length;)for(l=pr,pr=[],h=l.length,c=0;c<h;++c){var f=l[c];f[0].apply(null,f[1])}while(0<pr.length);os=Ki=!0}function Qi(){var l=pn;pn=[],l.forEach(function(f){f._PSD.onunhandled.call(null,f._value,f)});for(var c=ls.slice(0),h=c.length;h;)c[--h]()}function cs(l){return new oe(dr,!1,l)}function Oe(l,c){var h=ce;return function(){var f=jn(),m=ce;try{return en(h,!0),l.apply(this,arguments)}catch(b){c&&c(b)}finally{en(m,!1),f&&Nn()}}}y(oe.prototype,{then:Gi,_then:function(l,c){Yi(this,new Al(null,null,l,c,ce))},catch:function(l){if(arguments.length===1)return this.then(null,l);var c=l,h=arguments[1];return typeof c=="function"?this.then(null,function(f){return(f instanceof c?h:cs)(f)}):this.then(null,function(f){return(f&&f.name===c?h:cs)(f)})},finally:function(l){return this.then(function(c){return oe.resolve(l()).then(function(){return c})},function(c){return oe.resolve(l()).then(function(){return cs(c)})})},timeout:function(l,c){var h=this;return l<1/0?new oe(function(f,m){var b=setTimeout(function(){return m(new de.Timeout(c))},l);h.then(f,m).finally(clearTimeout.bind(null,b))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&$(oe.prototype,Symbol.toStringTag,"Dexie.Promise"),Xt.env=Ol(),y(oe,{all:function(){var l=Ne.apply(null,arguments).map(fs);return new oe(function(c,h){l.length===0&&c([]);var f=l.length;l.forEach(function(m,b){return oe.resolve(m).then(function(v){l[b]=v,--f||c(l)},h)})})},resolve:function(l){return l instanceof oe?l:l&&typeof l.then=="function"?new oe(function(c,h){l.then(c,h)}):new oe(dr,!0,l)},reject:cs,race:function(){var l=Ne.apply(null,arguments).map(fs);return new oe(function(c,h){l.map(function(f){return oe.resolve(f).then(c,h)})})},PSD:{get:function(){return ce},set:function(l){return ce=l}},totalEchoes:{get:function(){return hs}},newPSD:Jt,usePSD:gn,scheduler:{get:function(){return fr},set:function(l){fr=l}},rejectionMapper:{get:function(){return Vi},set:function(l){Vi=l}},follow:function(l,c){return new oe(function(h,f){return Jt(function(m,b){var v=ce;v.unhandleds=[],v.onunhandled=b,v.finalize=hn(function(){var C,I=this;C=function(){I.unhandleds.length===0?m():b(I.unhandleds[0])},ls.push(function R(){C(),ls.splice(ls.indexOf(R),1)}),++mn,fr(function(){--mn==0&&Qi()},[])},v.finalize),l()},c,h,f)})}}),fn&&(fn.allSettled&&$(oe,"allSettled",function(){var l=Ne.apply(null,arguments).map(fs);return new oe(function(c){l.length===0&&c([]);var h=l.length,f=new Array(h);l.forEach(function(m,b){return oe.resolve(m).then(function(v){return f[b]={status:"fulfilled",value:v}},function(v){return f[b]={status:"rejected",reason:v}}).then(function(){return--h||c(f)})})})}),fn.any&&typeof AggregateError<"u"&&$(oe,"any",function(){var l=Ne.apply(null,arguments).map(fs);return new oe(function(c,h){l.length===0&&h(new AggregateError([]));var f=l.length,m=new Array(f);l.forEach(function(b,v){return oe.resolve(b).then(function(C){return c(C)},function(C){m[v]=C,--f||h(new AggregateError(m))})})})}),fn.withResolvers&&(oe.withResolvers=fn.withResolvers));var Ue={awaits:0,echoes:0,id:0},kp=0,us=[],ds=0,hs=0,Cp=0;function Jt(l,c,h,f){var m=ce,b=Object.create(m);return b.parent=m,b.ref=0,b.global=!1,b.id=++Cp,Xt.env,b.env=Hi?{Promise:oe,PromiseProp:{value:oe,configurable:!0,writable:!0},all:oe.all,race:oe.race,allSettled:oe.allSettled,any:oe.any,resolve:oe.resolve,reject:oe.reject}:{},c&&u(b,c),++m.ref,b.finalize=function(){--this.parent.ref||this.parent.finalize()},f=gn(b,l,h,f),b.ref===0&&b.finalize(),f}function zn(){return Ue.id||(Ue.id=++kp),++Ue.awaits,Ue.echoes+=Il,Ue.id}function Zt(){return!!Ue.awaits&&(--Ue.awaits==0&&(Ue.id=0),Ue.echoes=Ue.awaits*Il,!0)}function fs(l){return Ue.echoes&&l&&l.constructor===fn?(zn(),l.then(function(c){return Zt(),c},function(c){return Zt(),Le(c)})):l}function _p(){var l=us[us.length-1];us.pop(),en(l,!1)}function en(l,c){var h,f=ce;(c?!Ue.echoes||ds++&&l===ce:!ds||--ds&&l===ce)||queueMicrotask(c?function(m){++hs,Ue.echoes&&--Ue.echoes!=0||(Ue.echoes=Ue.awaits=Ue.id=0),us.push(ce),en(m,!0)}.bind(null,l):_p),l!==ce&&(ce=l,f===Xt&&(Xt.env=Ol()),Hi&&(h=Xt.env.Promise,c=l.env,(f.global||l.global)&&(Object.defineProperty(i,"Promise",c.PromiseProp),h.all=c.all,h.race=c.race,h.resolve=c.resolve,h.reject=c.reject,c.allSettled&&(h.allSettled=c.allSettled),c.any&&(h.any=c.any))))}function Ol(){var l=i.Promise;return Hi?{Promise:l,PromiseProp:Object.getOwnPropertyDescriptor(i,"Promise"),all:l.all,race:l.race,allSettled:l.allSettled,any:l.any,resolve:l.resolve,reject:l.reject}:{}}function gn(l,c,h,f,m){var b=ce;try{return en(l,!0),c(h,f,m)}finally{en(b,!1)}}function Dl(l,c,h,f){return typeof l!="function"?l:function(){var m=ce;h&&zn(),en(c,!0);try{return l.apply(this,arguments)}finally{en(m,!1),f&&queueMicrotask(Zt)}}}function Xi(l){Promise===fn&&Ue.echoes===0?ds===0?l():enqueueNativeMicroTask(l):setTimeout(l,0)}(""+Ct).indexOf("[native code]")===-1&&(zn=Zt=Ce);var Le=oe.reject,bn="￿",qt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Pl="String expected.",Fn=[],ps="__dbnames",Ji="readonly",Zi="readwrite";function wn(l,c){return l?c?function(){return l.apply(this,arguments)&&c.apply(this,arguments)}:l:c}var Ll={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function ms(l){return typeof l!="string"||/\./.test(l)?function(c){return c}:function(c){return c[l]===void 0&&l in c&&delete(c=Z(c))[l],c}}function Ml(){throw de.Type()}function $e(l,c){try{var h=jl(l),f=jl(c);if(h!==f)return h==="Array"?1:f==="Array"?-1:h==="binary"?1:f==="binary"?-1:h==="string"?1:f==="string"?-1:h==="Date"?1:f!=="Date"?NaN:-1;switch(h){case"number":case"Date":case"string":return c<l?1:l<c?-1:0;case"binary":return(function(m,b){for(var v=m.length,C=b.length,I=v<C?v:C,R=0;R<I;++R)if(m[R]!==b[R])return m[R]<b[R]?-1:1;return v===C?0:v<C?-1:1})(Nl(l),Nl(c));case"Array":return(function(m,b){for(var v=m.length,C=b.length,I=v<C?v:C,R=0;R<I;++R){var P=$e(m[R],b[R]);if(P!==0)return P}return v===C?0:v<C?-1:1})(l,c)}}catch{}return NaN}function jl(l){var c=typeof l;return c!="object"?c:ArrayBuffer.isView(l)?"binary":(l=se(l),l==="ArrayBuffer"?"binary":l)}function Nl(l){return l instanceof Uint8Array?l:ArrayBuffer.isView(l)?new Uint8Array(l.buffer,l.byteOffset,l.byteLength):new Uint8Array(l)}var zl=(Te.prototype._trans=function(l,c,h){var f=this._tx||ce.trans,m=this.name,b=Lt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(l==="readonly"?"read":"write"," ").concat(this.name));function v(R,P,_){if(!_.schema[m])throw new de.NotFound("Table "+m+" not part of transaction");return c(_.idbtrans,_)}var C=jn();try{var I=f&&f.db._novip===this.db._novip?f===ce.trans?f._promise(l,v,h):Jt(function(){return f._promise(l,v,h)},{trans:f,transless:ce.transless||ce}):(function R(P,_,j,A){if(P.idbdb&&(P._state.openComplete||ce.letThrough||P._vip)){var D=P._createTransaction(_,j,P._dbSchema);try{D.create(),P._state.PR1398_maxLoop=3}catch(M){return M.name===Bi.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return R(P,_,j,A)})):Le(M)}return D._promise(_,function(M,O){return Jt(function(){return ce.trans=D,A(M,O,D)})}).then(function(M){if(_==="readwrite")try{D.idbtrans.commit()}catch{}return _==="readonly"?M:D._completion.then(function(){return M})})}if(P._state.openComplete)return Le(new de.DatabaseClosed(P._state.dbOpenError));if(!P._state.isBeingOpened){if(!P._state.autoOpen)return Le(new de.DatabaseClosed);P.open().catch(Ce)}return P._state.dbReadyPromise.then(function(){return R(P,_,j,A)})})(this.db,l,[this.name],v);return b&&(I._consoleTask=b,I=I.catch(function(R){return console.trace(R),Le(R)})),I}finally{C&&Nn()}},Te.prototype.get=function(l,c){var h=this;return l&&l.constructor===Object?this.where(l).first(c):l==null?Le(new de.Type("Invalid argument to Table.get()")):this._trans("readonly",function(f){return h.core.get({trans:f,key:l}).then(function(m){return h.hook.reading.fire(m)})}).then(c)},Te.prototype.where=function(l){if(typeof l=="string")return new this.db.WhereClause(this,l);if(a(l))return new this.db.WhereClause(this,"[".concat(l.join("+"),"]"));var c=o(l);if(c.length===1)return this.where(c[0]).equals(l[c[0]]);var h=this.schema.indexes.concat(this.schema.primKey).filter(function(C){if(C.compound&&c.every(function(R){return 0<=C.keyPath.indexOf(R)})){for(var I=0;I<c.length;++I)if(c.indexOf(C.keyPath[I])===-1)return!1;return!0}return!1}).sort(function(C,I){return C.keyPath.length-I.keyPath.length})[0];if(h&&this.db._maxKey!==bn){var b=h.keyPath.slice(0,c.length);return this.where(b).equals(b.map(function(I){return l[I]}))}!h&&Lt&&console.warn("The query ".concat(JSON.stringify(l)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(c.join("+"),"]"));var f=this.schema.idxByName;function m(C,I){return $e(C,I)===0}var v=c.reduce(function(_,I){var R=_[0],P=_[1],_=f[I],j=l[I];return[R||_,R||!_?wn(P,_&&_.multi?function(A){return A=G(A,I),a(A)&&A.some(function(D){return m(j,D)})}:function(A){return m(j,G(A,I))}):P]},[null,null]),b=v[0],v=v[1];return b?this.where(b.name).equals(l[b.keyPath]).filter(v):h?this.filter(v):this.where(c).equals("")},Te.prototype.filter=function(l){return this.toCollection().and(l)},Te.prototype.count=function(l){return this.toCollection().count(l)},Te.prototype.offset=function(l){return this.toCollection().offset(l)},Te.prototype.limit=function(l){return this.toCollection().limit(l)},Te.prototype.each=function(l){return this.toCollection().each(l)},Te.prototype.toArray=function(l){return this.toCollection().toArray(l)},Te.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Te.prototype.orderBy=function(l){return new this.db.Collection(new this.db.WhereClause(this,a(l)?"[".concat(l.join("+"),"]"):l))},Te.prototype.reverse=function(){return this.toCollection().reverse()},Te.prototype.mapToClass=function(l){var c,h=this.db,f=this.name;function m(){return c!==null&&c.apply(this,arguments)||this}(this.schema.mappedClass=l).prototype instanceof Ml&&((function(I,R){if(typeof R!="function"&&R!==null)throw new TypeError("Class extends value "+String(R)+" is not a constructor or null");function P(){this.constructor=I}n(I,R),I.prototype=R===null?Object.create(R):(P.prototype=R.prototype,new P)})(m,c=l),Object.defineProperty(m.prototype,"db",{get:function(){return h},enumerable:!1,configurable:!0}),m.prototype.table=function(){return f},l=m);for(var b=new Set,v=l.prototype;v;v=d(v))Object.getOwnPropertyNames(v).forEach(function(I){return b.add(I)});function C(I){if(!I)return I;var R,P=Object.create(l.prototype);for(R in I)if(!b.has(R))try{P[R]=I[R]}catch{}return P}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=C,this.hook("reading",C),l},Te.prototype.defineClass=function(){return this.mapToClass(function(l){u(this,l)})},Te.prototype.add=function(l,c){var h=this,f=this.schema.primKey,m=f.auto,b=f.keyPath,v=l;return b&&m&&(v=ms(b)(l)),this._trans("readwrite",function(C){return h.core.mutate({trans:C,type:"add",keys:c!=null?[c]:null,values:[v]})}).then(function(C){return C.numFailures?oe.reject(C.failures[0]):C.lastResult}).then(function(C){if(b)try{E(l,b,C)}catch{}return C})},Te.prototype.update=function(l,c){return typeof l!="object"||a(l)?this.where(":id").equals(l).modify(c):(l=G(l,this.schema.primKey.keyPath),l===void 0?Le(new de.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(l).modify(c))},Te.prototype.put=function(l,c){var h=this,f=this.schema.primKey,m=f.auto,b=f.keyPath,v=l;return b&&m&&(v=ms(b)(l)),this._trans("readwrite",function(C){return h.core.mutate({trans:C,type:"put",values:[v],keys:c!=null?[c]:null})}).then(function(C){return C.numFailures?oe.reject(C.failures[0]):C.lastResult}).then(function(C){if(b)try{E(l,b,C)}catch{}return C})},Te.prototype.delete=function(l){var c=this;return this._trans("readwrite",function(h){return c.core.mutate({trans:h,type:"delete",keys:[l]})}).then(function(h){return h.numFailures?oe.reject(h.failures[0]):void 0})},Te.prototype.clear=function(){var l=this;return this._trans("readwrite",function(c){return l.core.mutate({trans:c,type:"deleteRange",range:Ll})}).then(function(c){return c.numFailures?oe.reject(c.failures[0]):void 0})},Te.prototype.bulkGet=function(l){var c=this;return this._trans("readonly",function(h){return c.core.getMany({keys:l,trans:h}).then(function(f){return f.map(function(m){return c.hook.reading.fire(m)})})})},Te.prototype.bulkAdd=function(l,c,h){var f=this,m=Array.isArray(c)?c:void 0,b=(h=h||(m?void 0:c))?h.allKeys:void 0;return this._trans("readwrite",function(v){var R=f.schema.primKey,C=R.auto,R=R.keyPath;if(R&&m)throw new de.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(m&&m.length!==l.length)throw new de.InvalidArgument("Arguments objects and keys must have the same length");var I=l.length,R=R&&C?l.map(ms(R)):l;return f.core.mutate({trans:v,type:"add",keys:m,values:R,wantResults:b}).then(function(D){var _=D.numFailures,j=D.results,A=D.lastResult,D=D.failures;if(_===0)return b?j:A;throw new Mn("".concat(f.name,".bulkAdd(): ").concat(_," of ").concat(I," operations failed"),D)})})},Te.prototype.bulkPut=function(l,c,h){var f=this,m=Array.isArray(c)?c:void 0,b=(h=h||(m?void 0:c))?h.allKeys:void 0;return this._trans("readwrite",function(v){var R=f.schema.primKey,C=R.auto,R=R.keyPath;if(R&&m)throw new de.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(m&&m.length!==l.length)throw new de.InvalidArgument("Arguments objects and keys must have the same length");var I=l.length,R=R&&C?l.map(ms(R)):l;return f.core.mutate({trans:v,type:"put",keys:m,values:R,wantResults:b}).then(function(D){var _=D.numFailures,j=D.results,A=D.lastResult,D=D.failures;if(_===0)return b?j:A;throw new Mn("".concat(f.name,".bulkPut(): ").concat(_," of ").concat(I," operations failed"),D)})})},Te.prototype.bulkUpdate=function(l){var c=this,h=this.core,f=l.map(function(v){return v.key}),m=l.map(function(v){return v.changes}),b=[];return this._trans("readwrite",function(v){return h.getMany({trans:v,keys:f,cache:"clone"}).then(function(C){var I=[],R=[];l.forEach(function(_,j){var A=_.key,D=_.changes,M=C[j];if(M){for(var O=0,N=Object.keys(D);O<N.length;O++){var U=N[O],B=D[U];if(U===c.schema.primKey.keyPath){if($e(B,A)!==0)throw new de.Constraint("Cannot update primary key in bulkUpdate()")}else E(M,U,B)}b.push(j),I.push(A),R.push(M)}});var P=I.length;return h.mutate({trans:v,type:"put",keys:I,values:R,updates:{keys:f,changeSpecs:m}}).then(function(_){var j=_.numFailures,A=_.failures;if(j===0)return P;for(var D=0,M=Object.keys(A);D<M.length;D++){var O,N=M[D],U=b[Number(N)];U!=null&&(O=A[N],delete A[N],A[U]=O)}throw new Mn("".concat(c.name,".bulkUpdate(): ").concat(j," of ").concat(P," operations failed"),A)})})})},Te.prototype.bulkDelete=function(l){var c=this,h=l.length;return this._trans("readwrite",function(f){return c.core.mutate({trans:f,type:"delete",keys:l})}).then(function(v){var m=v.numFailures,b=v.lastResult,v=v.failures;if(m===0)return b;throw new Mn("".concat(c.name,".bulkDelete(): ").concat(m," of ").concat(h," operations failed"),v)})},Te);function Te(){}function mr(l){function c(v,C){if(C){for(var I=arguments.length,R=new Array(I-1);--I;)R[I-1]=arguments[I];return h[v].subscribe.apply(null,R),l}if(typeof v=="string")return h[v]}var h={};c.addEventType=b;for(var f=1,m=arguments.length;f<m;++f)b(arguments[f]);return c;function b(v,C,I){if(typeof v!="object"){var R;C=C||vp;var P={subscribers:[],fire:I=I||Ce,subscribe:function(_){P.subscribers.indexOf(_)===-1&&(P.subscribers.push(_),P.fire=C(P.fire,_))},unsubscribe:function(_){P.subscribers=P.subscribers.filter(function(j){return j!==_}),P.fire=P.subscribers.reduce(C,I)}};return h[v]=c[v]=P}o(R=v).forEach(function(_){var j=R[_];if(a(j))b(_,R[_][0],R[_][1]);else{if(j!=="asap")throw new de.InvalidArgument("Invalid event config");var A=b(_,ur,function(){for(var D=arguments.length,M=new Array(D);D--;)M[D]=arguments[D];A.subscribers.forEach(function(O){re(function(){O.apply(null,M)})})})}})}}function gr(l,c){return x(c).from({prototype:l}),c}function Un(l,c){return!(l.filter||l.algorithm||l.or)&&(c?l.justLimit:!l.replayFilter)}function eo(l,c){l.filter=wn(l.filter,c)}function to(l,c,h){var f=l.replayFilter;l.replayFilter=f?function(){return wn(f(),c())}:c,l.justLimit=h&&!f}function gs(l,c){if(l.isPrimKey)return c.primaryKey;var h=c.getIndexByKeyPath(l.index);if(!h)throw new de.Schema("KeyPath "+l.index+" on object store "+c.name+" is not indexed");return h}function Fl(l,c,h){var f=gs(l,c.schema);return c.openCursor({trans:h,values:!l.keysOnly,reverse:l.dir==="prev",unique:!!l.unique,query:{index:f,range:l.range}})}function bs(l,c,h,f){var m=l.replayFilter?wn(l.filter,l.replayFilter()):l.filter;if(l.or){var b={},v=function(C,I,R){var P,_;m&&!m(I,R,function(j){return I.stop(j)},function(j){return I.fail(j)})||((_=""+(P=I.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(P)),g(b,_)||(b[_]=!0,c(C,I,R)))};return Promise.all([l.or._iterate(v,h),Ul(Fl(l,f,h),l.algorithm,v,!l.keysOnly&&l.valueMapper)])}return Ul(Fl(l,f,h),wn(l.algorithm,m),c,!l.keysOnly&&l.valueMapper)}function Ul(l,c,h,f){var m=Oe(f?function(b,v,C){return h(f(b),v,C)}:h);return l.then(function(b){if(b)return b.start(function(){var v=function(){return b.continue()};c&&!c(b,function(C){return v=C},function(C){b.stop(C),v=Ce},function(C){b.fail(C),v=Ce})||m(b.value,b,function(C){return v=C}),v()})})}var Ht=Symbol(),br=(Bl.prototype.execute=function(l){if(this.add!==void 0){var c=this.add;if(a(c))return s(s([],a(l)?l:[],!0),c).sort();if(typeof c=="number")return(Number(l)||0)+c;if(typeof c=="bigint")try{return BigInt(l)+c}catch{return BigInt(0)+c}throw new TypeError("Invalid term ".concat(c))}if(this.remove!==void 0){var h=this.remove;if(a(h))return a(l)?l.filter(function(f){return!h.includes(f)}).sort():[];if(typeof h=="number")return Number(l)-h;if(typeof h=="bigint")try{return BigInt(l)-h}catch{return BigInt(0)-h}throw new TypeError("Invalid subtrahend ".concat(h))}return c=(c=this.replacePrefix)===null||c===void 0?void 0:c[0],c&&typeof l=="string"&&l.startsWith(c)?this.replacePrefix[1]+l.substring(c.length):l},Bl);function Bl(l){Object.assign(this,l)}var Sp=(xe.prototype._read=function(l,c){var h=this._ctx;return h.error?h.table._trans(null,Le.bind(null,h.error)):h.table._trans("readonly",l).then(c)},xe.prototype._write=function(l){var c=this._ctx;return c.error?c.table._trans(null,Le.bind(null,c.error)):c.table._trans("readwrite",l,"locked")},xe.prototype._addAlgorithm=function(l){var c=this._ctx;c.algorithm=wn(c.algorithm,l)},xe.prototype._iterate=function(l,c){return bs(this._ctx,l,c,this._ctx.table.core)},xe.prototype.clone=function(l){var c=Object.create(this.constructor.prototype),h=Object.create(this._ctx);return l&&u(h,l),c._ctx=h,c},xe.prototype.raw=function(){return this._ctx.valueMapper=null,this},xe.prototype.each=function(l){var c=this._ctx;return this._read(function(h){return bs(c,l,h,c.table.core)})},xe.prototype.count=function(l){var c=this;return this._read(function(h){var f=c._ctx,m=f.table.core;if(Un(f,!0))return m.count({trans:h,query:{index:gs(f,m.schema),range:f.range}}).then(function(v){return Math.min(v,f.limit)});var b=0;return bs(f,function(){return++b,!1},h,m).then(function(){return b})}).then(l)},xe.prototype.sortBy=function(l,c){var h=l.split(".").reverse(),f=h[0],m=h.length-1;function b(I,R){return R?b(I[h[R]],R-1):I[f]}var v=this._ctx.dir==="next"?1:-1;function C(I,R){return $e(b(I,m),b(R,m))*v}return this.toArray(function(I){return I.sort(C)}).then(c)},xe.prototype.toArray=function(l){var c=this;return this._read(function(h){var f=c._ctx;if(f.dir==="next"&&Un(f,!0)&&0<f.limit){var m=f.valueMapper,b=gs(f,f.table.core.schema);return f.table.core.query({trans:h,limit:f.limit,values:!0,query:{index:b,range:f.range}}).then(function(C){return C=C.result,m?C.map(m):C})}var v=[];return bs(f,function(C){return v.push(C)},h,f.table.core).then(function(){return v})},l)},xe.prototype.offset=function(l){var c=this._ctx;return l<=0||(c.offset+=l,Un(c)?to(c,function(){var h=l;return function(f,m){return h===0||(h===1?--h:m(function(){f.advance(h),h=0}),!1)}}):to(c,function(){var h=l;return function(){return--h<0}})),this},xe.prototype.limit=function(l){return this._ctx.limit=Math.min(this._ctx.limit,l),to(this._ctx,function(){var c=l;return function(h,f,m){return--c<=0&&f(m),0<=c}},!0),this},xe.prototype.until=function(l,c){return eo(this._ctx,function(h,f,m){return!l(h.value)||(f(m),c)}),this},xe.prototype.first=function(l){return this.limit(1).toArray(function(c){return c[0]}).then(l)},xe.prototype.last=function(l){return this.reverse().first(l)},xe.prototype.filter=function(l){var c;return eo(this._ctx,function(h){return l(h.value)}),(c=this._ctx).isMatch=wn(c.isMatch,l),this},xe.prototype.and=function(l){return this.filter(l)},xe.prototype.or=function(l){return new this.db.WhereClause(this._ctx.table,l,this)},xe.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},xe.prototype.desc=function(){return this.reverse()},xe.prototype.eachKey=function(l){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(h,f){l(f.key,f)})},xe.prototype.eachUniqueKey=function(l){return this._ctx.unique="unique",this.eachKey(l)},xe.prototype.eachPrimaryKey=function(l){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(h,f){l(f.primaryKey,f)})},xe.prototype.keys=function(l){var c=this._ctx;c.keysOnly=!c.isMatch;var h=[];return this.each(function(f,m){h.push(m.key)}).then(function(){return h}).then(l)},xe.prototype.primaryKeys=function(l){var c=this._ctx;if(c.dir==="next"&&Un(c,!0)&&0<c.limit)return this._read(function(f){var m=gs(c,c.table.core.schema);return c.table.core.query({trans:f,values:!1,limit:c.limit,query:{index:m,range:c.range}})}).then(function(f){return f.result}).then(l);c.keysOnly=!c.isMatch;var h=[];return this.each(function(f,m){h.push(m.primaryKey)}).then(function(){return h}).then(l)},xe.prototype.uniqueKeys=function(l){return this._ctx.unique="unique",this.keys(l)},xe.prototype.firstKey=function(l){return this.limit(1).keys(function(c){return c[0]}).then(l)},xe.prototype.lastKey=function(l){return this.reverse().firstKey(l)},xe.prototype.distinct=function(){var l=this._ctx,l=l.index&&l.table.schema.idxByName[l.index];if(!l||!l.multi)return this;var c={};return eo(this._ctx,function(m){var f=m.primaryKey.toString(),m=g(c,f);return c[f]=!0,!m}),this},xe.prototype.modify=function(l){var c=this,h=this._ctx;return this._write(function(f){var m,b,v;v=typeof l=="function"?l:(m=o(l),b=m.length,function(O){for(var N=!1,U=0;U<b;++U){var B=m[U],V=l[B],Y=G(O,B);V instanceof br?(E(O,B,V.execute(Y)),N=!0):Y!==V&&(E(O,B,V),N=!0)}return N});var C=h.table.core,_=C.schema.primaryKey,I=_.outbound,R=_.extractKey,P=200,_=c.db._options.modifyChunkSize;_&&(P=typeof _=="object"?_[C.name]||_["*"]||200:_);function j(O,B){var U=B.failures,B=B.numFailures;D+=O-B;for(var V=0,Y=o(U);V<Y.length;V++){var te=Y[V];A.push(U[te])}}var A=[],D=0,M=[];return c.clone().primaryKeys().then(function(O){function N(B){var V=Math.min(P,O.length-B);return C.getMany({trans:f,keys:O.slice(B,B+V),cache:"immutable"}).then(function(Y){for(var te=[],Q=[],J=I?[]:null,ne=[],ee=0;ee<V;++ee){var le=Y[ee],fe={value:Z(le),primKey:O[B+ee]};v.call(fe,fe.value,fe)!==!1&&(fe.value==null?ne.push(O[B+ee]):I||$e(R(le),R(fe.value))===0?(Q.push(fe.value),I&&J.push(O[B+ee])):(ne.push(O[B+ee]),te.push(fe.value)))}return Promise.resolve(0<te.length&&C.mutate({trans:f,type:"add",values:te}).then(function(ge){for(var be in ge.failures)ne.splice(parseInt(be),1);j(te.length,ge)})).then(function(){return(0<Q.length||U&&typeof l=="object")&&C.mutate({trans:f,type:"put",keys:J,values:Q,criteria:U,changeSpec:typeof l!="function"&&l,isAdditionalChunk:0<B}).then(function(ge){return j(Q.length,ge)})}).then(function(){return(0<ne.length||U&&l===no)&&C.mutate({trans:f,type:"delete",keys:ne,criteria:U,isAdditionalChunk:0<B}).then(function(ge){return j(ne.length,ge)})}).then(function(){return O.length>B+V&&N(B+P)})})}var U=Un(h)&&h.limit===1/0&&(typeof l!="function"||l===no)&&{index:h.index,range:h.range};return N(0).then(function(){if(0<A.length)throw new et("Error modifying one or more objects",A,D,M);return O.length})})})},xe.prototype.delete=function(){var l=this._ctx,c=l.range;return Un(l)&&(l.isPrimKey||c.type===3)?this._write(function(h){var f=l.table.core.schema.primaryKey,m=c;return l.table.core.count({trans:h,query:{index:f,range:m}}).then(function(b){return l.table.core.mutate({trans:h,type:"deleteRange",range:m}).then(function(v){var C=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new et("Could not delete some values",Object.keys(C).map(function(I){return C[I]}),b-v);return b-v})})}):this.modify(no)},xe);function xe(){}var no=function(l,c){return c.value=null};function Ep(l,c){return l<c?-1:l===c?0:1}function Tp(l,c){return c<l?-1:l===c?0:1}function dt(l,c,h){return l=l instanceof Hl?new l.Collection(l):l,l._ctx.error=new(h||TypeError)(c),l}function Bn(l){return new l.Collection(l,function(){return ql("")}).limit(0)}function ws(l,c,h,f){var m,b,v,C,I,R,P,_=h.length;if(!h.every(function(D){return typeof D=="string"}))return dt(l,Pl);function j(D){m=D==="next"?function(O){return O.toUpperCase()}:function(O){return O.toLowerCase()},b=D==="next"?function(O){return O.toLowerCase()}:function(O){return O.toUpperCase()},v=D==="next"?Ep:Tp;var M=h.map(function(O){return{lower:b(O),upper:m(O)}}).sort(function(O,N){return v(O.lower,N.lower)});C=M.map(function(O){return O.upper}),I=M.map(function(O){return O.lower}),P=(R=D)==="next"?"":f}j("next"),l=new l.Collection(l,function(){return tn(C[0],I[_-1]+f)}),l._ondirectionchange=function(D){j(D)};var A=0;return l._addAlgorithm(function(D,M,O){var N=D.key;if(typeof N!="string")return!1;var U=b(N);if(c(U,I,A))return!0;for(var B=null,V=A;V<_;++V){var Y=(function(te,Q,J,ne,ee,le){for(var fe=Math.min(te.length,ne.length),ge=-1,be=0;be<fe;++be){var ht=Q[be];if(ht!==ne[be])return ee(te[be],J[be])<0?te.substr(0,be)+J[be]+J.substr(be+1):ee(te[be],ne[be])<0?te.substr(0,be)+ne[be]+J.substr(be+1):0<=ge?te.substr(0,ge)+Q[ge]+J.substr(ge+1):null;ee(te[be],ht)<0&&(ge=be)}return fe<ne.length&&le==="next"?te+J.substr(te.length):fe<te.length&&le==="prev"?te.substr(0,J.length):ge<0?null:te.substr(0,ge)+ne[ge]+J.substr(ge+1)})(N,U,C[V],I[V],v,R);Y===null&&B===null?A=V+1:(B===null||0<v(B,Y))&&(B=Y)}return M(B!==null?function(){D.continue(B+P)}:O),!1}),l}function tn(l,c,h,f){return{type:2,lower:l,upper:c,lowerOpen:h,upperOpen:f}}function ql(l){return{type:1,lower:l,upper:l}}var Hl=(Object.defineProperty(Be.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Be.prototype.between=function(l,c,h,f){h=h!==!1,f=f===!0;try{return 0<this._cmp(l,c)||this._cmp(l,c)===0&&(h||f)&&(!h||!f)?Bn(this):new this.Collection(this,function(){return tn(l,c,!h,!f)})}catch{return dt(this,qt)}},Be.prototype.equals=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return ql(l)})},Be.prototype.above=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return tn(l,void 0,!0)})},Be.prototype.aboveOrEqual=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return tn(l,void 0,!1)})},Be.prototype.below=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return tn(void 0,l,!1,!0)})},Be.prototype.belowOrEqual=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return tn(void 0,l)})},Be.prototype.startsWith=function(l){return typeof l!="string"?dt(this,Pl):this.between(l,l+bn,!0,!0)},Be.prototype.startsWithIgnoreCase=function(l){return l===""?this.startsWith(l):ws(this,function(c,h){return c.indexOf(h[0])===0},[l],bn)},Be.prototype.equalsIgnoreCase=function(l){return ws(this,function(c,h){return c===h[0]},[l],"")},Be.prototype.anyOfIgnoreCase=function(){var l=Ne.apply(me,arguments);return l.length===0?Bn(this):ws(this,function(c,h){return h.indexOf(c)!==-1},l,"")},Be.prototype.startsWithAnyOfIgnoreCase=function(){var l=Ne.apply(me,arguments);return l.length===0?Bn(this):ws(this,function(c,h){return h.some(function(f){return c.indexOf(f)===0})},l,bn)},Be.prototype.anyOf=function(){var l=this,c=Ne.apply(me,arguments),h=this._cmp;try{c.sort(h)}catch{return dt(this,qt)}if(c.length===0)return Bn(this);var f=new this.Collection(this,function(){return tn(c[0],c[c.length-1])});f._ondirectionchange=function(b){h=b==="next"?l._ascending:l._descending,c.sort(h)};var m=0;return f._addAlgorithm(function(b,v,C){for(var I=b.key;0<h(I,c[m]);)if(++m===c.length)return v(C),!1;return h(I,c[m])===0||(v(function(){b.continue(c[m])}),!1)}),f},Be.prototype.notEqual=function(l){return this.inAnyRange([[-1/0,l],[l,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Be.prototype.noneOf=function(){var l=Ne.apply(me,arguments);if(l.length===0)return new this.Collection(this);try{l.sort(this._ascending)}catch{return dt(this,qt)}var c=l.reduce(function(h,f){return h?h.concat([[h[h.length-1][1],f]]):[[-1/0,f]]},null);return c.push([l[l.length-1],this.db._maxKey]),this.inAnyRange(c,{includeLowers:!1,includeUppers:!1})},Be.prototype.inAnyRange=function(N,c){var h=this,f=this._cmp,m=this._ascending,b=this._descending,v=this._min,C=this._max;if(N.length===0)return Bn(this);if(!N.every(function(U){return U[0]!==void 0&&U[1]!==void 0&&m(U[0],U[1])<=0}))return dt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",de.InvalidArgument);var I=!c||c.includeLowers!==!1,R=c&&c.includeUppers===!0,P,_=m;function j(U,B){return _(U[0],B[0])}try{(P=N.reduce(function(U,B){for(var V=0,Y=U.length;V<Y;++V){var te=U[V];if(f(B[0],te[1])<0&&0<f(B[1],te[0])){te[0]=v(te[0],B[0]),te[1]=C(te[1],B[1]);break}}return V===Y&&U.push(B),U},[])).sort(j)}catch{return dt(this,qt)}var A=0,D=R?function(U){return 0<m(U,P[A][1])}:function(U){return 0<=m(U,P[A][1])},M=I?function(U){return 0<b(U,P[A][0])}:function(U){return 0<=b(U,P[A][0])},O=D,N=new this.Collection(this,function(){return tn(P[0][0],P[P.length-1][1],!I,!R)});return N._ondirectionchange=function(U){_=U==="next"?(O=D,m):(O=M,b),P.sort(j)},N._addAlgorithm(function(U,B,V){for(var Y,te=U.key;O(te);)if(++A===P.length)return B(V),!1;return!D(Y=te)&&!M(Y)||(h._cmp(te,P[A][1])===0||h._cmp(te,P[A][0])===0||B(function(){_===m?U.continue(P[A][0]):U.continue(P[A][1])}),!1)}),N},Be.prototype.startsWithAnyOf=function(){var l=Ne.apply(me,arguments);return l.every(function(c){return typeof c=="string"})?l.length===0?Bn(this):this.inAnyRange(l.map(function(c){return[c,c+bn]})):dt(this,"startsWithAnyOf() only works with strings")},Be);function Be(){}function Mt(l){return Oe(function(c){return wr(c),l(c.target.error),!1})}function wr(l){l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault()}var yr="storagemutated",ro="x-storagemutated-1",nn=mr(null,yr),Ip=(jt.prototype._lock=function(){return z(!ce.global),++this._reculock,this._reculock!==1||ce.global||(ce.lockOwnerFor=this),this},jt.prototype._unlock=function(){if(z(!ce.global),--this._reculock==0)for(ce.global||(ce.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var l=this._blockedFuncs.shift();try{gn(l[1],l[0])}catch{}}return this},jt.prototype._locked=function(){return this._reculock&&ce.lockOwnerFor!==this},jt.prototype.create=function(l){var c=this;if(!this.mode)return this;var h=this.db.idbdb,f=this.db._state.dbOpenError;if(z(!this.idbtrans),!l&&!h)switch(f&&f.name){case"DatabaseClosedError":throw new de.DatabaseClosed(f);case"MissingAPIError":throw new de.MissingAPI(f.message,f);default:throw new de.OpenFailed(f)}if(!this.active)throw new de.TransactionInactive;return z(this._completion._state===null),(l=this.idbtrans=l||(this.db.core||h).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Oe(function(m){wr(m),c._reject(l.error)}),l.onabort=Oe(function(m){wr(m),c.active&&c._reject(new de.Abort(l.error)),c.active=!1,c.on("abort").fire(m)}),l.oncomplete=Oe(function(){c.active=!1,c._resolve(),"mutatedParts"in l&&nn.storagemutated.fire(l.mutatedParts)}),this},jt.prototype._promise=function(l,c,h){var f=this;if(l==="readwrite"&&this.mode!=="readwrite")return Le(new de.ReadOnly("Transaction is readonly"));if(!this.active)return Le(new de.TransactionInactive);if(this._locked())return new oe(function(b,v){f._blockedFuncs.push([function(){f._promise(l,c,h).then(b,v)},ce])});if(h)return Jt(function(){var b=new oe(function(v,C){f._lock();var I=c(v,C,f);I&&I.then&&I.then(v,C)});return b.finally(function(){return f._unlock()}),b._lib=!0,b});var m=new oe(function(b,v){var C=c(b,v,f);C&&C.then&&C.then(b,v)});return m._lib=!0,m},jt.prototype._root=function(){return this.parent?this.parent._root():this},jt.prototype.waitFor=function(l){var c,h=this._root(),f=oe.resolve(l);h._waitingFor?h._waitingFor=h._waitingFor.then(function(){return f}):(h._waitingFor=f,h._waitingQueue=[],c=h.idbtrans.objectStore(h.storeNames[0]),(function b(){for(++h._spinCount;h._waitingQueue.length;)h._waitingQueue.shift()();h._waitingFor&&(c.get(-1/0).onsuccess=b)})());var m=h._waitingFor;return new oe(function(b,v){f.then(function(C){return h._waitingQueue.push(Oe(b.bind(null,C)))},function(C){return h._waitingQueue.push(Oe(v.bind(null,C)))}).finally(function(){h._waitingFor===m&&(h._waitingFor=null)})})},jt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new de.Abort))},jt.prototype.table=function(l){var c=this._memoizedTables||(this._memoizedTables={});if(g(c,l))return c[l];var h=this.schema[l];if(!h)throw new de.NotFound("Table "+l+" not part of transaction");return h=new this.db.Table(l,h,this),h.core=this.db.core.table(l),c[l]=h},jt);function jt(){}function so(l,c,h,f,m,b,v){return{name:l,keyPath:c,unique:h,multi:f,auto:m,compound:b,src:(h&&!v?"&":"")+(f?"*":"")+(m?"++":"")+Kl(c)}}function Kl(l){return typeof l=="string"?l:l?"["+[].join.call(l,"+")+"]":""}function io(l,c,h){return{name:l,primKey:c,indexes:h,mappedClass:null,idxByName:(f=function(m){return[m.name,m]},h.reduce(function(m,b,v){return v=f(b,v),v&&(m[v[0]]=v[1]),m},{}))};var f}var vr=function(l){try{return l.only([[]]),vr=function(){return[[]]},[[]]}catch{return vr=function(){return bn},bn}};function oo(l){return l==null?function(){}:typeof l=="string"?(c=l).split(".").length===1?function(h){return h[c]}:function(h){return G(h,c)}:function(h){return G(h,l)};var c}function Vl(l){return[].slice.call(l)}var Ap=0;function $r(l){return l==null?":id":typeof l=="string"?l:"[".concat(l.join("+"),"]")}function Rp(l,c,I){function f(O){if(O.type===3)return null;if(O.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var A=O.lower,D=O.upper,M=O.lowerOpen,O=O.upperOpen;return A===void 0?D===void 0?null:c.upperBound(D,!!O):D===void 0?c.lowerBound(A,!!M):c.bound(A,D,!!M,!!O)}function m(j){var A,D=j.name;return{name:D,schema:j,mutate:function(M){var O=M.trans,N=M.type,U=M.keys,B=M.values,V=M.range;return new Promise(function(Y,te){Y=Oe(Y);var Q=O.objectStore(D),J=Q.keyPath==null,ne=N==="put"||N==="add";if(!ne&&N!=="delete"&&N!=="deleteRange")throw new Error("Invalid operation type: "+N);var ee,le=(U||B||{length:1}).length;if(U&&B&&U.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(le===0)return Y({numFailures:0,failures:{},results:[],lastResult:void 0});function fe(tt){++ht,wr(tt)}var ge=[],be=[],ht=0;if(N==="deleteRange"){if(V.type===4)return Y({numFailures:ht,failures:be,results:[],lastResult:void 0});V.type===3?ge.push(ee=Q.clear()):ge.push(ee=Q.delete(f(V)))}else{var J=ne?J?[B,U]:[B,null]:[U,null],he=J[0],Je=J[1];if(ne)for(var Ze=0;Ze<le;++Ze)ge.push(ee=Je&&Je[Ze]!==void 0?Q[N](he[Ze],Je[Ze]):Q[N](he[Ze])),ee.onerror=fe;else for(Ze=0;Ze<le;++Ze)ge.push(ee=Q[N](he[Ze])),ee.onerror=fe}function Rs(tt){tt=tt.target.result,ge.forEach(function($n,_o){return $n.error!=null&&(be[_o]=$n.error)}),Y({numFailures:ht,failures:be,results:N==="delete"?U:ge.map(function($n){return $n.result}),lastResult:tt})}ee.onerror=function(tt){fe(tt),Rs(tt)},ee.onsuccess=Rs})},getMany:function(M){var O=M.trans,N=M.keys;return new Promise(function(U,B){U=Oe(U);for(var V,Y=O.objectStore(D),te=N.length,Q=new Array(te),J=0,ne=0,ee=function(ge){ge=ge.target,Q[ge._pos]=ge.result,++ne===J&&U(Q)},le=Mt(B),fe=0;fe<te;++fe)N[fe]!=null&&((V=Y.get(N[fe]))._pos=fe,V.onsuccess=ee,V.onerror=le,++J);J===0&&U(Q)})},get:function(M){var O=M.trans,N=M.key;return new Promise(function(U,B){U=Oe(U);var V=O.objectStore(D).get(N);V.onsuccess=function(Y){return U(Y.target.result)},V.onerror=Mt(B)})},query:(A=R,function(M){return new Promise(function(O,N){O=Oe(O);var U,B,V,J=M.trans,Y=M.values,te=M.limit,ee=M.query,Q=te===1/0?void 0:te,ne=ee.index,ee=ee.range,J=J.objectStore(D),ne=ne.isPrimaryKey?J:J.index(ne.name),ee=f(ee);if(te===0)return O({result:[]});A?((Q=Y?ne.getAll(ee,Q):ne.getAllKeys(ee,Q)).onsuccess=function(le){return O({result:le.target.result})},Q.onerror=Mt(N)):(U=0,B=!Y&&"openKeyCursor"in ne?ne.openKeyCursor(ee):ne.openCursor(ee),V=[],B.onsuccess=function(le){var fe=B.result;return fe?(V.push(Y?fe.value:fe.primaryKey),++U===te?O({result:V}):void fe.continue()):O({result:V})},B.onerror=Mt(N))})}),openCursor:function(M){var O=M.trans,N=M.values,U=M.query,B=M.reverse,V=M.unique;return new Promise(function(Y,te){Y=Oe(Y);var ne=U.index,Q=U.range,J=O.objectStore(D),J=ne.isPrimaryKey?J:J.index(ne.name),ne=B?V?"prevunique":"prev":V?"nextunique":"next",ee=!N&&"openKeyCursor"in J?J.openKeyCursor(f(Q),ne):J.openCursor(f(Q),ne);ee.onerror=Mt(te),ee.onsuccess=Oe(function(le){var fe,ge,be,ht,he=ee.result;he?(he.___id=++Ap,he.done=!1,fe=he.continue.bind(he),ge=(ge=he.continuePrimaryKey)&&ge.bind(he),be=he.advance.bind(he),ht=function(){throw new Error("Cursor not stopped")},he.trans=O,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Oe(te),he.next=function(){var Je=this,Ze=1;return this.start(function(){return Ze--?Je.continue():Je.stop()}).then(function(){return Je})},he.start=function(Je){function Ze(){if(ee.result)try{Je()}catch(tt){he.fail(tt)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var Rs=new Promise(function(tt,$n){tt=Oe(tt),ee.onerror=Mt($n),he.fail=$n,he.stop=function(_o){he.stop=he.continue=he.continuePrimaryKey=he.advance=ht,tt(_o)}});return ee.onsuccess=Oe(function(tt){ee.onsuccess=Ze,Ze()}),he.continue=fe,he.continuePrimaryKey=ge,he.advance=be,Ze(),Rs},Y(he)):Y(null)},te)})},count:function(M){var O=M.query,N=M.trans,U=O.index,B=O.range;return new Promise(function(V,Y){var te=N.objectStore(D),Q=U.isPrimaryKey?te:te.index(U.name),te=f(B),Q=te?Q.count(te):Q.count();Q.onsuccess=Oe(function(J){return V(J.target.result)}),Q.onerror=Mt(Y)})}}}var b,v,C,P=(v=I,C=Vl((b=l).objectStoreNames),{schema:{name:b.name,tables:C.map(function(j){return v.objectStore(j)}).map(function(j){var A=j.keyPath,O=j.autoIncrement,D=a(A),M={},O={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:A==null,compound:D,keyPath:A,autoIncrement:O,unique:!0,extractKey:oo(A)},indexes:Vl(j.indexNames).map(function(N){return j.index(N)}).map(function(V){var U=V.name,B=V.unique,Y=V.multiEntry,V=V.keyPath,Y={name:U,compound:a(V),keyPath:V,unique:B,multiEntry:Y,extractKey:oo(V)};return M[$r(V)]=Y}),getIndexByKeyPath:function(N){return M[$r(N)]}};return M[":id"]=O.primaryKey,A!=null&&(M[$r(A)]=O.primaryKey),O})},hasGetAll:0<C.length&&"getAll"in v.objectStore(C[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),I=P.schema,R=P.hasGetAll,P=I.tables.map(m),_={};return P.forEach(function(j){return _[j.name]=j}),{stack:"dbcore",transaction:l.transaction.bind(l),table:function(j){if(!_[j])throw new Error("Table '".concat(j,"' not found"));return _[j]},MIN_KEY:-1/0,MAX_KEY:vr(c),schema:I}}function Op(l,c,h,f){var m=h.IDBKeyRange;return h.indexedDB,{dbcore:(f=Rp(c,m,f),l.dbcore.reduce(function(b,v){return v=v.create,r(r({},b),v(b))},f))}}function ys(l,f){var h=f.db,f=Op(l._middlewares,h,l._deps,f);l.core=f.dbcore,l.tables.forEach(function(m){var b=m.name;l.core.schema.tables.some(function(v){return v.name===b})&&(m.core=l.core.table(b),l[b]instanceof l.Table&&(l[b].core=m.core))})}function vs(l,c,h,f){h.forEach(function(m){var b=f[m];c.forEach(function(v){var C=(function I(R,P){return T(R,P)||(R=d(R))&&I(R,P)})(v,m);(!C||"value"in C&&C.value===void 0)&&(v===l.Transaction.prototype||v instanceof l.Transaction?$(v,m,{get:function(){return this.table(m)},set:function(I){w(this,m,{value:I,writable:!0,configurable:!0,enumerable:!0})}}):v[m]=new l.Table(m,b))})})}function ao(l,c){c.forEach(function(h){for(var f in h)h[f]instanceof l.Table&&delete h[f]})}function Dp(l,c){return l._cfg.version-c._cfg.version}function Pp(l,c,h,f){var m=l._dbSchema;h.objectStoreNames.contains("$meta")&&!m.$meta&&(m.$meta=io("$meta",Wl("")[0],[]),l._storeNames.push("$meta"));var b=l._createTransaction("readwrite",l._storeNames,m);b.create(h),b._completion.catch(f);var v=b._reject.bind(b),C=ce.transless||ce;Jt(function(){return ce.trans=b,ce.transless=C,c!==0?(ys(l,h),R=c,((I=b).storeNames.includes("$meta")?I.table("$meta").get("version").then(function(P){return P??R}):oe.resolve(R)).then(function(P){return j=P,A=b,D=h,M=[],P=(_=l)._versions,O=_._dbSchema=xs(0,_.idbdb,D),(P=P.filter(function(N){return N._cfg.version>=j})).length!==0?(P.forEach(function(N){M.push(function(){var U=O,B=N._cfg.dbschema;ks(_,U,D),ks(_,B,D),O=_._dbSchema=B;var V=lo(U,B);V.add.forEach(function(ne){co(D,ne[0],ne[1].primKey,ne[1].indexes)}),V.change.forEach(function(ne){if(ne.recreate)throw new de.Upgrade("Not yet support for changing primary key");var ee=D.objectStore(ne.name);ne.add.forEach(function(le){return $s(ee,le)}),ne.change.forEach(function(le){ee.deleteIndex(le.name),$s(ee,le)}),ne.del.forEach(function(le){return ee.deleteIndex(le)})});var Y=N._cfg.contentUpgrade;if(Y&&N._cfg.version>j){ys(_,D),A._memoizedTables={};var te=q(B);V.del.forEach(function(ne){te[ne]=U[ne]}),ao(_,[_.Transaction.prototype]),vs(_,[_.Transaction.prototype],o(te),te),A.schema=te;var Q,J=kt(Y);return J&&zn(),V=oe.follow(function(){var ne;(Q=Y(A))&&J&&(ne=Zt.bind(null,null),Q.then(ne,ne))}),Q&&typeof Q.then=="function"?oe.resolve(Q):V.then(function(){return Q})}}),M.push(function(U){var B,V,Y=N._cfg.dbschema;B=Y,V=U,[].slice.call(V.db.objectStoreNames).forEach(function(te){return B[te]==null&&V.db.deleteObjectStore(te)}),ao(_,[_.Transaction.prototype]),vs(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),A.schema=_._dbSchema}),M.push(function(U){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===N._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(B){return B!=="$meta"})):U.objectStore("$meta").put(N._cfg.version,"version"))})}),(function N(){return M.length?oe.resolve(M.shift()(A.idbtrans)).then(N):oe.resolve()})().then(function(){Gl(O,D)})):oe.resolve();var _,j,A,D,M,O}).catch(v)):(o(m).forEach(function(P){co(h,P,m[P].primKey,m[P].indexes)}),ys(l,h),void oe.follow(function(){return l.on.populate.fire(b)}).catch(v));var I,R})}function Lp(l,c){Gl(l._dbSchema,c),c.db.version%10!=0||c.objectStoreNames.contains("$meta")||c.db.createObjectStore("$meta").add(Math.ceil(c.db.version/10-1),"version");var h=xs(0,l.idbdb,c);ks(l,l._dbSchema,c);for(var f=0,m=lo(h,l._dbSchema).change;f<m.length;f++){var b=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var C=c.objectStore(v.name);v.add.forEach(function(I){Lt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(I.src)),$s(C,I)})})(m[f]);if(typeof b=="object")return b.value}}function lo(l,c){var h,f={del:[],add:[],change:[]};for(h in l)c[h]||f.del.push(h);for(h in c){var m=l[h],b=c[h];if(m){var v={name:h,def:b,recreate:!1,del:[],add:[],change:[]};if(""+(m.primKey.keyPath||"")!=""+(b.primKey.keyPath||"")||m.primKey.auto!==b.primKey.auto)v.recreate=!0,f.change.push(v);else{var C=m.idxByName,I=b.idxByName,R=void 0;for(R in C)I[R]||v.del.push(R);for(R in I){var P=C[R],_=I[R];P?P.src!==_.src&&v.change.push(_):v.add.push(_)}(0<v.del.length||0<v.add.length||0<v.change.length)&&f.change.push(v)}}else f.add.push([h,b])}return f}function co(l,c,h,f){var m=l.db.createObjectStore(c,h.keyPath?{keyPath:h.keyPath,autoIncrement:h.auto}:{autoIncrement:h.auto});return f.forEach(function(b){return $s(m,b)}),m}function Gl(l,c){o(l).forEach(function(h){c.db.objectStoreNames.contains(h)||(Lt&&console.debug("Dexie: Creating missing table",h),co(c,h,l[h].primKey,l[h].indexes))})}function $s(l,c){l.createIndex(c.name,c.keyPath,{unique:c.unique,multiEntry:c.multi})}function xs(l,c,h){var f={};return L(c.objectStoreNames,0).forEach(function(m){for(var b=h.objectStore(m),v=so(Kl(R=b.keyPath),R||"",!0,!1,!!b.autoIncrement,R&&typeof R!="string",!0),C=[],I=0;I<b.indexNames.length;++I){var P=b.index(b.indexNames[I]),R=P.keyPath,P=so(P.name,R,!!P.unique,!!P.multiEntry,!1,R&&typeof R!="string",!1);C.push(P)}f[m]=io(m,v,C)}),f}function ks(l,c,h){for(var f=h.db.objectStoreNames,m=0;m<f.length;++m){var b=f[m],v=h.objectStore(b);l._hasGetAll="getAll"in v;for(var C=0;C<v.indexNames.length;++C){var I=v.indexNames[C],R=v.index(I).keyPath,P=typeof R=="string"?R:"["+L(R).join("+")+"]";!c[b]||(R=c[b].idxByName[P])&&(R.name=I,delete c[b].idxByName[P],c[b].idxByName[I]=R)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&i.WorkerGlobalScope&&i instanceof i.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(l._hasGetAll=!1)}function Wl(l){return l.split(",").map(function(c,h){var f=(c=c.trim()).replace(/([&*]|\+\+)/g,""),m=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return so(f,m||null,/\&/.test(c),/\*/.test(c),/\+\+/.test(c),a(m),h===0)})}var Mp=(Cs.prototype._parseStoresSpec=function(l,c){o(l).forEach(function(h){if(l[h]!==null){var f=Wl(l[h]),m=f.shift();if(m.unique=!0,m.multi)throw new de.Schema("Primary key cannot be multi-valued");f.forEach(function(b){if(b.auto)throw new de.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new de.Schema("Index must have a name and cannot be an empty string")}),c[h]=io(h,m,f)}})},Cs.prototype.stores=function(h){var c=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,h):h;var h=c._versions,f={},m={};return h.forEach(function(b){u(f,b._cfg.storesSource),m=b._cfg.dbschema={},b._parseStoresSpec(f,m)}),c._dbSchema=m,ao(c,[c._allTables,c,c.Transaction.prototype]),vs(c,[c._allTables,c,c.Transaction.prototype,this._cfg.tables],o(m),m),c._storeNames=o(m),this},Cs.prototype.upgrade=function(l){return this._cfg.contentUpgrade=qi(this._cfg.contentUpgrade||Ce,l),this},Cs);function Cs(){}function uo(l,c){var h=l._dbNamesDB;return h||(h=l._dbNamesDB=new Kt(ps,{addons:[],indexedDB:l,IDBKeyRange:c})).version(1).stores({dbnames:"name"}),h.table("dbnames")}function ho(l){return l&&typeof l.databases=="function"}function fo(l){return Jt(function(){return ce.letThrough=!0,l()})}function po(l){return!("from"in l)}var Xe=function(l,c){if(!this){var h=new Xe;return l&&"d"in l&&u(h,l),h}u(this,arguments.length?{d:1,from:l,to:1<arguments.length?c:l}:{d:0})};function xr(l,c,h){var f=$e(c,h);if(!isNaN(f)){if(0<f)throw RangeError();if(po(l))return u(l,{from:c,to:h,d:1});var m=l.l,f=l.r;if($e(h,l.from)<0)return m?xr(m,c,h):l.l={from:c,to:h,d:1,l:null,r:null},Ql(l);if(0<$e(c,l.to))return f?xr(f,c,h):l.r={from:c,to:h,d:1,l:null,r:null},Ql(l);$e(c,l.from)<0&&(l.from=c,l.l=null,l.d=f?f.d+1:1),0<$e(h,l.to)&&(l.to=h,l.r=null,l.d=l.l?l.l.d+1:1),h=!l.r,m&&!l.l&&kr(l,m),f&&h&&kr(l,f)}}function kr(l,c){po(c)||(function h(f,I){var b=I.from,v=I.to,C=I.l,I=I.r;xr(f,b,v),C&&h(f,C),I&&h(f,I)})(l,c)}function Yl(l,c){var h=_s(c),f=h.next();if(f.done)return!1;for(var m=f.value,b=_s(l),v=b.next(m.from),C=v.value;!f.done&&!v.done;){if($e(C.from,m.to)<=0&&0<=$e(C.to,m.from))return!0;$e(m.from,C.from)<0?m=(f=h.next(C.from)).value:C=(v=b.next(m.from)).value}return!1}function _s(l){var c=po(l)?null:{s:0,n:l};return{next:function(h){for(var f=0<arguments.length;c;)switch(c.s){case 0:if(c.s=1,f)for(;c.n.l&&$e(h,c.n.from)<0;)c={up:c,n:c.n.l,s:1};else for(;c.n.l;)c={up:c,n:c.n.l,s:1};case 1:if(c.s=2,!f||$e(h,c.n.to)<=0)return{value:c.n,done:!1};case 2:if(c.n.r){c.s=3,c={up:c,n:c.n.r,s:0};continue}case 3:c=c.up}return{done:!0}}}}function Ql(l){var c,h,f=(((c=l.r)===null||c===void 0?void 0:c.d)||0)-(((h=l.l)===null||h===void 0?void 0:h.d)||0),m=1<f?"r":f<-1?"l":"";m&&(c=m=="r"?"l":"r",h=r({},l),f=l[m],l.from=f.from,l.to=f.to,l[m]=f[m],h[m]=f[c],(l[c]=h).d=Xl(h)),l.d=Xl(l)}function Xl(h){var c=h.r,h=h.l;return(c?h?Math.max(c.d,h.d):c.d:h?h.d:0)+1}function Ss(l,c){return o(c).forEach(function(h){l[h]?kr(l[h],c[h]):l[h]=(function f(m){var b,v,C={};for(b in m)g(m,b)&&(v=m[b],C[b]=!v||typeof v!="object"||pe.has(v.constructor)?v:f(v));return C})(c[h])}),l}function mo(l,c){return l.all||c.all||Object.keys(l).some(function(h){return c[h]&&Yl(c[h],l[h])})}y(Xe.prototype,((Ct={add:function(l){return kr(this,l),this},addKey:function(l){return xr(this,l,l),this},addKeys:function(l){var c=this;return l.forEach(function(h){return xr(c,h,h)}),this},hasKey:function(l){var c=_s(this).next(l).value;return c&&$e(c.from,l)<=0&&0<=$e(c.to,l)}})[ve]=function(){return _s(this)},Ct));var yn={},go={},bo=!1;function Es(l){Ss(go,l),bo||(bo=!0,setTimeout(function(){bo=!1,wo(go,!(go={}))},0))}function wo(l,c){c===void 0&&(c=!1);var h=new Set;if(l.all)for(var f=0,m=Object.values(yn);f<m.length;f++)Jl(v=m[f],l,h,c);else for(var b in l){var v,C=/^idb\:\/\/(.*)\/(.*)\//.exec(b);C&&(b=C[1],C=C[2],(v=yn["idb://".concat(b,"/").concat(C)])&&Jl(v,l,h,c))}h.forEach(function(I){return I()})}function Jl(l,c,h,f){for(var m=[],b=0,v=Object.entries(l.queries.query);b<v.length;b++){for(var C=v[b],I=C[0],R=[],P=0,_=C[1];P<_.length;P++){var j=_[P];mo(c,j.obsSet)?j.subscribers.forEach(function(O){return h.add(O)}):f&&R.push(j)}f&&m.push([I,R])}if(f)for(var A=0,D=m;A<D.length;A++){var M=D[A],I=M[0],R=M[1];l.queries.query[I]=R}}function jp(l){var c=l._state,h=l._deps.indexedDB;if(c.isBeingOpened||l.idbdb)return c.dbReadyPromise.then(function(){return c.dbOpenError?Le(c.dbOpenError):l});c.isBeingOpened=!0,c.dbOpenError=null,c.openComplete=!1;var f=c.openCanceller,m=Math.round(10*l.verno),b=!1;function v(){if(c.openCanceller!==f)throw new de.DatabaseClosed("db.open() was cancelled")}function C(){return new oe(function(j,A){if(v(),!h)throw new de.MissingAPI;var D=l.name,M=c.autoSchema||!m?h.open(D):h.open(D,m);if(!M)throw new de.MissingAPI;M.onerror=Mt(A),M.onblocked=Oe(l._fireOnBlocked),M.onupgradeneeded=Oe(function(O){var N;P=M.transaction,c.autoSchema&&!l._options.allowEmptyDB?(M.onerror=wr,P.abort(),M.result.close(),(N=h.deleteDatabase(D)).onsuccess=N.onerror=Oe(function(){A(new de.NoSuchDatabase("Database ".concat(D," doesnt exist")))})):(P.onerror=Mt(A),O=O.oldVersion>Math.pow(2,62)?0:O.oldVersion,_=O<1,l.idbdb=M.result,b&&Lp(l,P),Pp(l,O/10,P,A))},A),M.onsuccess=Oe(function(){P=null;var O,N,U,B,V,Y=l.idbdb=M.result,te=L(Y.objectStoreNames);if(0<te.length)try{var Q=Y.transaction((B=te).length===1?B[0]:B,"readonly");if(c.autoSchema)N=Y,U=Q,(O=l).verno=N.version/10,U=O._dbSchema=xs(0,N,U),O._storeNames=L(N.objectStoreNames,0),vs(O,[O._allTables],o(U),U);else if(ks(l,l._dbSchema,Q),((V=lo(xs(0,(V=l).idbdb,Q),V._dbSchema)).add.length||V.change.some(function(J){return J.add.length||J.change.length}))&&!b)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),m=Y.version+1,b=!0,j(C());ys(l,Q)}catch{}Fn.push(l),Y.onversionchange=Oe(function(J){c.vcFired=!0,l.on("versionchange").fire(J)}),Y.onclose=Oe(function(J){l.on("close").fire(J)}),_&&(V=l._deps,Q=D,Y=V.indexedDB,V=V.IDBKeyRange,ho(Y)||Q===ps||uo(Y,V).put({name:Q}).catch(Ce)),j()},A)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<c.PR1398_maxLoop)return c.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),C();break;case"VersionError":if(0<m)return m=0,C()}return oe.reject(j)})}var I,R=c.dbReadyResolve,P=null,_=!1;return oe.race([f,(typeof navigator>"u"?oe.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function A(){return indexedDB.databases().finally(j)}I=setInterval(A,100),A()}).finally(function(){return clearInterval(I)}):Promise.resolve()).then(C)]).then(function(){return v(),c.onReadyBeingFired=[],oe.resolve(fo(function(){return l.on.ready.fire(l.vip)})).then(function j(){if(0<c.onReadyBeingFired.length){var A=c.onReadyBeingFired.reduce(qi,Ce);return c.onReadyBeingFired=[],oe.resolve(fo(function(){return A(l.vip)})).then(j)}})}).finally(function(){c.openCanceller===f&&(c.onReadyBeingFired=null,c.isBeingOpened=!1)}).catch(function(j){c.dbOpenError=j;try{P&&P.abort()}catch{}return f===c.openCanceller&&l._close(),Le(j)}).finally(function(){c.openComplete=!0,R()}).then(function(){var j;return _&&(j={},l.tables.forEach(function(A){A.schema.indexes.forEach(function(D){D.name&&(j["idb://".concat(l.name,"/").concat(A.name,"/").concat(D.name)]=new Xe(-1/0,[[[]]]))}),j["idb://".concat(l.name,"/").concat(A.name,"/")]=j["idb://".concat(l.name,"/").concat(A.name,"/:dels")]=new Xe(-1/0,[[[]]])}),nn(yr).fire(j),wo(j,!0)),l})}function yo(l){function c(b){return l.next(b)}var h=m(c),f=m(function(b){return l.throw(b)});function m(b){return function(I){var C=b(I),I=C.value;return C.done?I:I&&typeof I.then=="function"?I.then(h,f):a(I)?Promise.all(I).then(h,f):h(I)}}return m(c)()}function Ts(l,c,h){for(var f=a(l)?l.slice():[l],m=0;m<h;++m)f.push(c);return f}var Np={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(l){return r(r({},l),{table:function(c){var h=l.table(c),f=h.schema,m={},b=[];function v(_,j,A){var D=$r(_),M=m[D]=m[D]||[],O=_==null?0:typeof _=="string"?1:_.length,N=0<j,N=r(r({},A),{name:N?"".concat(D,"(virtual-from:").concat(A.name,")"):A.name,lowLevelIndex:A,isVirtual:N,keyTail:j,keyLength:O,extractKey:oo(_),unique:!N&&A.unique});return M.push(N),N.isPrimaryKey||b.push(N),1<O&&v(O===2?_[0]:_.slice(0,O-1),j+1,A),M.sort(function(U,B){return U.keyTail-B.keyTail}),N}c=v(f.primaryKey.keyPath,0,f.primaryKey),m[":id"]=[c];for(var C=0,I=f.indexes;C<I.length;C++){var R=I[C];v(R.keyPath,0,R)}function P(_){var j,A=_.query.index;return A.isVirtual?r(r({},_),{query:{index:A.lowLevelIndex,range:(j=_.query.range,A=A.keyTail,{type:j.type===1?2:j.type,lower:Ts(j.lower,j.lowerOpen?l.MAX_KEY:l.MIN_KEY,A),lowerOpen:!0,upper:Ts(j.upper,j.upperOpen?l.MIN_KEY:l.MAX_KEY,A),upperOpen:!0})}}):_}return r(r({},h),{schema:r(r({},f),{primaryKey:c,indexes:b,getIndexByKeyPath:function(_){return(_=m[$r(_)])&&_[0]}}),count:function(_){return h.count(P(_))},query:function(_){return h.query(P(_))},openCursor:function(_){var j=_.query.index,A=j.keyTail,D=j.isVirtual,M=j.keyLength;return D?h.openCursor(P(_)).then(function(N){return N&&O(N)}):h.openCursor(_);function O(N){return Object.create(N,{continue:{value:function(U){U!=null?N.continue(Ts(U,_.reverse?l.MAX_KEY:l.MIN_KEY,A)):_.unique?N.continue(N.key.slice(0,M).concat(_.reverse?l.MIN_KEY:l.MAX_KEY,A)):N.continue()}},continuePrimaryKey:{value:function(U,B){N.continuePrimaryKey(Ts(U,l.MAX_KEY,A),B)}},primaryKey:{get:function(){return N.primaryKey}},key:{get:function(){var U=N.key;return M===1?U[0]:U.slice(0,M)}},value:{get:function(){return N.value}}})}}})}})}};function vo(l,c,h,f){return h=h||{},f=f||"",o(l).forEach(function(m){var b,v,C;g(c,m)?(b=l[m],v=c[m],typeof b=="object"&&typeof v=="object"&&b&&v?(C=se(b))!==se(v)?h[f+m]=c[m]:C==="Object"?vo(b,v,h,f+m+"."):b!==v&&(h[f+m]=c[m]):b!==v&&(h[f+m]=c[m])):h[f+m]=void 0}),o(c).forEach(function(m){g(l,m)||(h[f+m]=c[m])}),h}function $o(l,c){return c.type==="delete"?c.keys:c.keys||c.values.map(l.extractKey)}var zp={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(l){return r(r({},l),{table:function(c){var h=l.table(c),f=h.schema.primaryKey;return r(r({},h),{mutate:function(m){var b=ce.trans,v=b.table(c).hook,C=v.deleting,I=v.creating,R=v.updating;switch(m.type){case"add":if(I.fire===Ce)break;return b._promise("readwrite",function(){return P(m)},!0);case"put":if(I.fire===Ce&&R.fire===Ce)break;return b._promise("readwrite",function(){return P(m)},!0);case"delete":if(C.fire===Ce)break;return b._promise("readwrite",function(){return P(m)},!0);case"deleteRange":if(C.fire===Ce)break;return b._promise("readwrite",function(){return(function _(j,A,D){return h.query({trans:j,values:!1,query:{index:f,range:A},limit:D}).then(function(M){var O=M.result;return P({type:"delete",keys:O,trans:j}).then(function(N){return 0<N.numFailures?Promise.reject(N.failures[0]):O.length<D?{failures:[],numFailures:0,lastResult:void 0}:_(j,r(r({},A),{lower:O[O.length-1],lowerOpen:!0}),D)})})})(m.trans,m.range,1e4)},!0)}return h.mutate(m);function P(_){var j,A,D,M=ce.trans,O=_.keys||$o(f,_);if(!O)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:O}):r({},_)).type!=="delete"&&(_.values=s([],_.values)),_.keys&&(_.keys=s([],_.keys)),j=h,D=O,((A=_).type==="add"?Promise.resolve([]):j.getMany({trans:A.trans,keys:D,cache:"immutable"})).then(function(N){var U=O.map(function(B,V){var Y,te,Q,J=N[V],ne={onerror:null,onsuccess:null};return _.type==="delete"?C.fire.call(ne,B,J,M):_.type==="add"||J===void 0?(Y=I.fire.call(ne,B,_.values[V],M),B==null&&Y!=null&&(_.keys[V]=B=Y,f.outbound||E(_.values[V],f.keyPath,B))):(Y=vo(J,_.values[V]),(te=R.fire.call(ne,Y,B,J,M))&&(Q=_.values[V],Object.keys(te).forEach(function(ee){g(Q,ee)?Q[ee]=te[ee]:E(Q,ee,te[ee])}))),ne});return h.mutate(_).then(function(B){for(var V=B.failures,Y=B.results,te=B.numFailures,B=B.lastResult,Q=0;Q<O.length;++Q){var J=(Y||O)[Q],ne=U[Q];J==null?ne.onerror&&ne.onerror(V[Q]):ne.onsuccess&&ne.onsuccess(_.type==="put"&&N[Q]?_.values[Q]:J)}return{failures:V,results:Y,numFailures:te,lastResult:B}}).catch(function(B){return U.forEach(function(V){return V.onerror&&V.onerror(B)}),Promise.reject(B)})})}}})}})}};function Zl(l,c,h){try{if(!c||c.keys.length<l.length)return null;for(var f=[],m=0,b=0;m<c.keys.length&&b<l.length;++m)$e(c.keys[m],l[b])===0&&(f.push(h?Z(c.values[m]):c.values[m]),++b);return f.length===l.length?f:null}catch{return null}}var Fp={stack:"dbcore",level:-1,create:function(l){return{table:function(c){var h=l.table(c);return r(r({},h),{getMany:function(f){if(!f.cache)return h.getMany(f);var m=Zl(f.keys,f.trans._cache,f.cache==="clone");return m?oe.resolve(m):h.getMany(f).then(function(b){return f.trans._cache={keys:f.keys,values:f.cache==="clone"?Z(b):b},b})},mutate:function(f){return f.type!=="add"&&(f.trans._cache=null),h.mutate(f)}})}}}};function ec(l,c){return l.trans.mode==="readonly"&&!!l.subscr&&!l.trans.explicit&&l.trans.db._options.cache!=="disabled"&&!c.schema.primaryKey.outbound}function tc(l,c){switch(l){case"query":return c.values&&!c.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Up={stack:"dbcore",level:0,name:"Observability",create:function(l){var c=l.schema.name,h=new Xe(l.MIN_KEY,l.MAX_KEY);return r(r({},l),{transaction:function(f,m,b){if(ce.subscr&&m!=="readonly")throw new de.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ce.querier));return l.transaction(f,m,b)},table:function(f){var m=l.table(f),b=m.schema,v=b.primaryKey,_=b.indexes,C=v.extractKey,I=v.outbound,R=v.autoIncrement&&_.filter(function(A){return A.compound&&A.keyPath.includes(v.keyPath)}),P=r(r({},m),{mutate:function(A){function D(ee){return ee="idb://".concat(c,"/").concat(f,"/").concat(ee),B[ee]||(B[ee]=new Xe)}var M,O,N,U=A.trans,B=A.mutatedParts||(A.mutatedParts={}),V=D(""),Y=D(":dels"),te=A.type,ne=A.type==="deleteRange"?[A.range]:A.type==="delete"?[A.keys]:A.values.length<50?[$o(v,A).filter(function(ee){return ee}),A.values]:[],Q=ne[0],J=ne[1],ne=A.trans._cache;return a(Q)?(V.addKeys(Q),(ne=te==="delete"||Q.length===J.length?Zl(Q,ne):null)||Y.addKeys(Q),(ne||J)&&(M=D,O=ne,N=J,b.indexes.forEach(function(ee){var le=M(ee.name||"");function fe(be){return be!=null?ee.extractKey(be):null}function ge(be){return ee.multiEntry&&a(be)?be.forEach(function(ht){return le.addKey(ht)}):le.addKey(be)}(O||N).forEach(function(be,Je){var he=O&&fe(O[Je]),Je=N&&fe(N[Je]);$e(he,Je)!==0&&(he!=null&&ge(he),Je!=null&&ge(Je))})}))):Q?(J={from:(J=Q.lower)!==null&&J!==void 0?J:l.MIN_KEY,to:(J=Q.upper)!==null&&J!==void 0?J:l.MAX_KEY},Y.add(J),V.add(J)):(V.add(h),Y.add(h),b.indexes.forEach(function(ee){return D(ee.name).add(h)})),m.mutate(A).then(function(ee){return!Q||A.type!=="add"&&A.type!=="put"||(V.addKeys(ee.results),R&&R.forEach(function(le){for(var fe=A.values.map(function(he){return le.extractKey(he)}),ge=le.keyPath.findIndex(function(he){return he===v.keyPath}),be=0,ht=ee.results.length;be<ht;++be)fe[be][ge]=ee.results[be];D(le.name).addKeys(fe)})),U.mutatedParts=Ss(U.mutatedParts||{},B),ee})}}),_=function(D){var M=D.query,D=M.index,M=M.range;return[D,new Xe((D=M.lower)!==null&&D!==void 0?D:l.MIN_KEY,(M=M.upper)!==null&&M!==void 0?M:l.MAX_KEY)]},j={get:function(A){return[v,new Xe(A.key)]},getMany:function(A){return[v,new Xe().addKeys(A.keys)]},count:_,query:_,openCursor:_};return o(j).forEach(function(A){P[A]=function(D){var M=ce.subscr,O=!!M,N=ec(ce,m)&&tc(A,D)?D.obsSet={}:M;if(O){var U=function(J){return J="idb://".concat(c,"/").concat(f,"/").concat(J),N[J]||(N[J]=new Xe)},B=U(""),V=U(":dels"),M=j[A](D),O=M[0],M=M[1];if((A==="query"&&O.isPrimaryKey&&!D.values?V:U(O.name||"")).add(M),!O.isPrimaryKey){if(A!=="count"){var Y=A==="query"&&I&&D.values&&m.query(r(r({},D),{values:!1}));return m[A].apply(this,arguments).then(function(J){if(A==="query"){if(I&&D.values)return Y.then(function(fe){return fe=fe.result,B.addKeys(fe),J});var ne=D.values?J.result.map(C):J.result;(D.values?B:V).addKeys(ne)}else if(A==="openCursor"){var ee=J,le=D.values;return ee&&Object.create(ee,{key:{get:function(){return V.addKey(ee.primaryKey),ee.key}},primaryKey:{get:function(){var fe=ee.primaryKey;return V.addKey(fe),fe}},value:{get:function(){return le&&B.addKey(ee.primaryKey),ee.value}}})}return J})}V.add(h)}}return m[A].apply(this,arguments)}}),P}})}};function nc(l,c,h){if(h.numFailures===0)return c;if(c.type==="deleteRange")return null;var f=c.keys?c.keys.length:"values"in c&&c.values?c.values.length:1;return h.numFailures===f?null:(c=r({},c),a(c.keys)&&(c.keys=c.keys.filter(function(m,b){return!(b in h.failures)})),"values"in c&&a(c.values)&&(c.values=c.values.filter(function(m,b){return!(b in h.failures)})),c)}function xo(l,c){return h=l,((f=c).lower===void 0||(f.lowerOpen?0<$e(h,f.lower):0<=$e(h,f.lower)))&&(l=l,(c=c).upper===void 0||(c.upperOpen?$e(l,c.upper)<0:$e(l,c.upper)<=0));var h,f}function rc(l,c,j,f,m,b){if(!j||j.length===0)return l;var v=c.query.index,C=v.multiEntry,I=c.query.range,R=f.schema.primaryKey.extractKey,P=v.extractKey,_=(v.lowLevelIndex||v).extractKey,j=j.reduce(function(A,D){var M=A,O=[];if(D.type==="add"||D.type==="put")for(var N=new Xe,U=D.values.length-1;0<=U;--U){var B,V=D.values[U],Y=R(V);N.hasKey(Y)||(B=P(V),(C&&a(B)?B.some(function(ee){return xo(ee,I)}):xo(B,I))&&(N.addKey(Y),O.push(V)))}switch(D.type){case"add":var te=new Xe().addKeys(c.values?A.map(function(le){return R(le)}):A),M=A.concat(c.values?O.filter(function(le){return le=R(le),!te.hasKey(le)&&(te.addKey(le),!0)}):O.map(function(le){return R(le)}).filter(function(le){return!te.hasKey(le)&&(te.addKey(le),!0)}));break;case"put":var Q=new Xe().addKeys(D.values.map(function(le){return R(le)}));M=A.filter(function(le){return!Q.hasKey(c.values?R(le):le)}).concat(c.values?O:O.map(function(le){return R(le)}));break;case"delete":var J=new Xe().addKeys(D.keys);M=A.filter(function(le){return!J.hasKey(c.values?R(le):le)});break;case"deleteRange":var ne=D.range;M=A.filter(function(le){return!xo(R(le),ne)})}return M},l);return j===l?l:(j.sort(function(A,D){return $e(_(A),_(D))||$e(R(A),R(D))}),c.limit&&c.limit<1/0&&(j.length>c.limit?j.length=c.limit:l.length===c.limit&&j.length<c.limit&&(m.dirty=!0)),b?Object.freeze(j):j)}function sc(l,c){return $e(l.lower,c.lower)===0&&$e(l.upper,c.upper)===0&&!!l.lowerOpen==!!c.lowerOpen&&!!l.upperOpen==!!c.upperOpen}function Bp(l,c){return(function(h,f,m,b){if(h===void 0)return f!==void 0?-1:0;if(f===void 0)return 1;if((f=$e(h,f))===0){if(m&&b)return 0;if(m)return 1;if(b)return-1}return f})(l.lower,c.lower,l.lowerOpen,c.lowerOpen)<=0&&0<=(function(h,f,m,b){if(h===void 0)return f!==void 0?1:0;if(f===void 0)return-1;if((f=$e(h,f))===0){if(m&&b)return 0;if(m)return-1;if(b)return 1}return f})(l.upper,c.upper,l.upperOpen,c.upperOpen)}function qp(l,c,h,f){l.subscribers.add(h),f.addEventListener("abort",function(){var m,b;l.subscribers.delete(h),l.subscribers.size===0&&(m=l,b=c,setTimeout(function(){m.subscribers.size===0&&je(b,m)},3e3))})}var Hp={stack:"dbcore",level:0,name:"Cache",create:function(l){var c=l.schema.name;return r(r({},l),{transaction:function(h,f,m){var b,v,C=l.transaction(h,f,m);return f==="readwrite"&&(v=(b=new AbortController).signal,m=function(I){return function(){if(b.abort(),f==="readwrite"){for(var R=new Set,P=0,_=h;P<_.length;P++){var j=_[P],A=yn["idb://".concat(c,"/").concat(j)];if(A){var D=l.table(j),M=A.optimisticOps.filter(function(le){return le.trans===C});if(C._explicit&&I&&C.mutatedParts)for(var O=0,N=Object.values(A.queries.query);O<N.length;O++)for(var U=0,B=(te=N[O]).slice();U<B.length;U++)mo((Q=B[U]).obsSet,C.mutatedParts)&&(je(te,Q),Q.subscribers.forEach(function(le){return R.add(le)}));else if(0<M.length){A.optimisticOps=A.optimisticOps.filter(function(le){return le.trans!==C});for(var V=0,Y=Object.values(A.queries.query);V<Y.length;V++)for(var te,Q,J,ne=0,ee=(te=Y[V]).slice();ne<ee.length;ne++)(Q=ee[ne]).res!=null&&C.mutatedParts&&(I&&!Q.dirty?(J=Object.isFrozen(Q.res),J=rc(Q.res,Q.req,M,D,Q,J),Q.dirty?(je(te,Q),Q.subscribers.forEach(function(le){return R.add(le)})):J!==Q.res&&(Q.res=J,Q.promise=oe.resolve({result:J}))):(Q.dirty&&je(te,Q),Q.subscribers.forEach(function(le){return R.add(le)})))}}}R.forEach(function(le){return le()})}}},C.addEventListener("abort",m(!1),{signal:v}),C.addEventListener("error",m(!1),{signal:v}),C.addEventListener("complete",m(!0),{signal:v})),C},table:function(h){var f=l.table(h),m=f.schema.primaryKey;return r(r({},f),{mutate:function(b){var v=ce.trans;if(m.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return f.mutate(b);var C=yn["idb://".concat(c,"/").concat(h)];return C?(v=f.mutate(b),b.type!=="add"&&b.type!=="put"||!(50<=b.values.length||$o(m,b).some(function(I){return I==null}))?(C.optimisticOps.push(b),b.mutatedParts&&Es(b.mutatedParts),v.then(function(I){0<I.numFailures&&(je(C.optimisticOps,b),(I=nc(0,b,I))&&C.optimisticOps.push(I),b.mutatedParts&&Es(b.mutatedParts))}),v.catch(function(){je(C.optimisticOps,b),b.mutatedParts&&Es(b.mutatedParts)})):v.then(function(I){var R=nc(0,r(r({},b),{values:b.values.map(function(P,_){var j;return I.failures[_]?P:(P=(j=m.keyPath)!==null&&j!==void 0&&j.includes(".")?Z(P):r({},P),E(P,m.keyPath,I.results[_]),P)})}),I);C.optimisticOps.push(R),queueMicrotask(function(){return b.mutatedParts&&Es(b.mutatedParts)})}),v):f.mutate(b)},query:function(b){if(!ec(ce,f)||!tc("query",b))return f.query(b);var v=((R=ce.trans)===null||R===void 0?void 0:R.db._options.cache)==="immutable",_=ce,C=_.requery,I=_.signal,R=(function(D,M,O,N){var U=yn["idb://".concat(D,"/").concat(M)];if(!U)return[];if(!(M=U.queries[O]))return[null,!1,U,null];var B=M[(N.query?N.query.index.name:null)||""];if(!B)return[null,!1,U,null];switch(O){case"query":var V=B.find(function(Y){return Y.req.limit===N.limit&&Y.req.values===N.values&&sc(Y.req.query.range,N.query.range)});return V?[V,!0,U,B]:[B.find(function(Y){return("limit"in Y.req?Y.req.limit:1/0)>=N.limit&&(!N.values||Y.req.values)&&Bp(Y.req.query.range,N.query.range)}),!1,U,B];case"count":return V=B.find(function(Y){return sc(Y.req.query.range,N.query.range)}),[V,!!V,U,B]}})(c,h,"query",b),P=R[0],_=R[1],j=R[2],A=R[3];return P&&_?P.obsSet=b.obsSet:(_=f.query(b).then(function(D){var M=D.result;if(P&&(P.res=M),v){for(var O=0,N=M.length;O<N;++O)Object.freeze(M[O]);Object.freeze(M)}else D.result=Z(M);return D}).catch(function(D){return A&&P&&je(A,P),Promise.reject(D)}),P={obsSet:b.obsSet,promise:_,subscribers:new Set,type:"query",req:b,dirty:!1},A?A.push(P):(A=[P],(j=j||(yn["idb://".concat(c,"/").concat(h)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[b.query.index.name||""]=A)),qp(P,A,C,I),P.promise.then(function(D){return{result:rc(D.result,b,j?.optimisticOps,f,P,v)}})}})}})}};function Is(l,c){return new Proxy(l,{get:function(h,f,m){return f==="db"?c:Reflect.get(h,f,m)}})}var Kt=(Me.prototype.version=function(l){if(isNaN(l)||l<.1)throw new de.Type("Given version is not a positive number");if(l=Math.round(10*l)/10,this.idbdb||this._state.isBeingOpened)throw new de.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,l);var c=this._versions,h=c.filter(function(f){return f._cfg.version===l})[0];return h||(h=new this.Version(l),c.push(h),c.sort(Dp),h.stores({}),this._state.autoSchema=!1,h)},Me.prototype._whenReady=function(l){var c=this;return this.idbdb&&(this._state.openComplete||ce.letThrough||this._vip)?l():new oe(function(h,f){if(c._state.openComplete)return f(new de.DatabaseClosed(c._state.dbOpenError));if(!c._state.isBeingOpened){if(!c._state.autoOpen)return void f(new de.DatabaseClosed);c.open().catch(Ce)}c._state.dbReadyPromise.then(h,f)}).then(l)},Me.prototype.use=function(l){var c=l.stack,h=l.create,f=l.level,m=l.name;return m&&this.unuse({stack:c,name:m}),l=this._middlewares[c]||(this._middlewares[c]=[]),l.push({stack:c,create:h,level:f??10,name:m}),l.sort(function(b,v){return b.level-v.level}),this},Me.prototype.unuse=function(l){var c=l.stack,h=l.name,f=l.create;return c&&this._middlewares[c]&&(this._middlewares[c]=this._middlewares[c].filter(function(m){return f?m.create!==f:!!h&&m.name!==h})),this},Me.prototype.open=function(){var l=this;return gn(Xt,function(){return jp(l)})},Me.prototype._close=function(){var l=this._state,c=Fn.indexOf(this);if(0<=c&&Fn.splice(c,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}l.isBeingOpened||(l.dbReadyPromise=new oe(function(h){l.dbReadyResolve=h}),l.openCanceller=new oe(function(h,f){l.cancelOpen=f}))},Me.prototype.close=function(h){var c=(h===void 0?{disableAutoOpen:!0}:h).disableAutoOpen,h=this._state;c?(h.isBeingOpened&&h.cancelOpen(new de.DatabaseClosed),this._close(),h.autoOpen=!1,h.dbOpenError=new de.DatabaseClosed):(this._close(),h.autoOpen=this._options.autoOpen||h.isBeingOpened,h.openComplete=!1,h.dbOpenError=null)},Me.prototype.delete=function(l){var c=this;l===void 0&&(l={disableAutoOpen:!0});var h=0<arguments.length&&typeof arguments[0]!="object",f=this._state;return new oe(function(m,b){function v(){c.close(l);var C=c._deps.indexedDB.deleteDatabase(c.name);C.onsuccess=Oe(function(){var I,R,P;I=c._deps,R=c.name,P=I.indexedDB,I=I.IDBKeyRange,ho(P)||R===ps||uo(P,I).delete(R).catch(Ce),m()}),C.onerror=Mt(b),C.onblocked=c._fireOnBlocked}if(h)throw new de.InvalidArgument("Invalid closeOptions argument to db.delete()");f.isBeingOpened?f.dbReadyPromise.then(v):v()})},Me.prototype.backendDB=function(){return this.idbdb},Me.prototype.isOpen=function(){return this.idbdb!==null},Me.prototype.hasBeenClosed=function(){var l=this._state.dbOpenError;return l&&l.name==="DatabaseClosed"},Me.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Me.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Me.prototype,"tables",{get:function(){var l=this;return o(this._allTables).map(function(c){return l._allTables[c]})},enumerable:!1,configurable:!0}),Me.prototype.transaction=function(){var l=function(c,h,f){var m=arguments.length;if(m<2)throw new de.InvalidArgument("Too few arguments");for(var b=new Array(m-1);--m;)b[m-1]=arguments[m];return f=b.pop(),[c,ue(b),f]}.apply(this,arguments);return this._transaction.apply(this,l)},Me.prototype._transaction=function(l,c,h){var f=this,m=ce.trans;m&&m.db===this&&l.indexOf("!")===-1||(m=null);var b,v,C=l.indexOf("?")!==-1;l=l.replace("!","").replace("?","");try{if(v=c.map(function(R){if(R=R instanceof f.Table?R.name:R,typeof R!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return R}),l=="r"||l===Ji)b=Ji;else{if(l!="rw"&&l!=Zi)throw new de.InvalidArgument("Invalid transaction mode: "+l);b=Zi}if(m){if(m.mode===Ji&&b===Zi){if(!C)throw new de.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");m=null}m&&v.forEach(function(R){if(m&&m.storeNames.indexOf(R)===-1){if(!C)throw new de.SubTransaction("Table "+R+" not included in parent transaction.");m=null}}),C&&m&&!m.active&&(m=null)}}catch(R){return m?m._promise(null,function(P,_){_(R)}):Le(R)}var I=function R(P,_,j,A,D){return oe.resolve().then(function(){var M=ce.transless||ce,O=P._createTransaction(_,j,P._dbSchema,A);if(O.explicit=!0,M={trans:O,transless:M},A)O.idbtrans=A.idbtrans;else try{O.create(),O.idbtrans._explicit=!0,P._state.PR1398_maxLoop=3}catch(B){return B.name===Bi.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return R(P,_,j,null,D)})):Le(B)}var N,U=kt(D);return U&&zn(),M=oe.follow(function(){var B;(N=D.call(O,O))&&(U?(B=Zt.bind(null,null),N.then(B,B)):typeof N.next=="function"&&typeof N.throw=="function"&&(N=yo(N)))},M),(N&&typeof N.then=="function"?oe.resolve(N).then(function(B){return O.active?B:Le(new de.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):M.then(function(){return N})).then(function(B){return A&&O._resolve(),O._completion.then(function(){return B})}).catch(function(B){return O._reject(B),Le(B)})})}.bind(null,this,b,v,m,h);return m?m._promise(b,I,"lock"):ce.trans?gn(ce.transless,function(){return f._whenReady(I)}):this._whenReady(I)},Me.prototype.table=function(l){if(!g(this._allTables,l))throw new de.InvalidTable("Table ".concat(l," does not exist"));return this._allTables[l]},Me);function Me(l,c){var h=this;this._middlewares={},this.verno=0;var f=Me.dependencies;this._options=c=r({addons:Me.addons,autoOpen:!0,indexedDB:f.indexedDB,IDBKeyRange:f.IDBKeyRange,cache:"cloned"},c),this._deps={indexedDB:c.indexedDB,IDBKeyRange:c.IDBKeyRange},f=c.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var m,b,v,C,I,R={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Ce,dbReadyPromise:null,cancelOpen:Ce,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:c.autoOpen};R.dbReadyPromise=new oe(function(_){R.dbReadyResolve=_}),R.openCanceller=new oe(function(_,j){R.cancelOpen=j}),this._state=R,this.name=l,this.on=mr(this,"populate","blocked","versionchange","close",{ready:[qi,Ce]}),this.on.ready.subscribe=W(this.on.ready.subscribe,function(_){return function(j,A){Me.vip(function(){var D,M=h._state;M.openComplete?(M.dbOpenError||oe.resolve().then(j),A&&_(j)):M.onReadyBeingFired?(M.onReadyBeingFired.push(j),A&&_(j)):(_(j),D=h,A||_(function O(){D.on.ready.unsubscribe(j),D.on.ready.unsubscribe(O)}))})}}),this.Collection=(m=this,gr(Sp.prototype,function(N,O){this.db=m;var A=Ll,D=null;if(O)try{A=O()}catch(U){D=U}var M=N._ctx,O=M.table,N=O.hook.reading.fire;this._ctx={table:O,index:M.index,isPrimKey:!M.index||O.schema.primKey.keyPath&&M.index===O.schema.primKey.name,range:A,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:D,or:M.or,valueMapper:N!==ur?N:null}})),this.Table=(b=this,gr(zl.prototype,function(_,j,A){this.db=b,this._tx=A,this.name=_,this.schema=j,this.hook=b._allTables[_]?b._allTables[_].hook:mr(null,{creating:[bp,Ce],reading:[gp,ur],updating:[yp,Ce],deleting:[wp,Ce]})})),this.Transaction=(v=this,gr(Ip.prototype,function(_,j,A,D,M){var O=this;this.db=v,this.mode=_,this.storeNames=j,this.schema=A,this.chromeTransactionDurability=D,this.idbtrans=null,this.on=mr(this,"complete","error","abort"),this.parent=M||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new oe(function(N,U){O._resolve=N,O._reject=U}),this._completion.then(function(){O.active=!1,O.on.complete.fire()},function(N){var U=O.active;return O.active=!1,O.on.error.fire(N),O.parent?O.parent._reject(N):U&&O.idbtrans&&O.idbtrans.abort(),Le(N)})})),this.Version=(C=this,gr(Mp.prototype,function(_){this.db=C,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(I=this,gr(Hl.prototype,function(_,j,A){if(this.db=I,this._ctx={table:_,index:j===":id"?null:j,or:A},this._cmp=this._ascending=$e,this._descending=function(D,M){return $e(M,D)},this._max=function(D,M){return 0<$e(D,M)?D:M},this._min=function(D,M){return $e(D,M)<0?D:M},this._IDBKeyRange=I._deps.IDBKeyRange,!this._IDBKeyRange)throw new de.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(h.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(h.name,"'. Closing db now to resume the delete request.")),h.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(h.name,"') was blocked")):console.warn("Upgrade '".concat(h.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=vr(c.IDBKeyRange),this._createTransaction=function(_,j,A,D){return new h.Transaction(_,j,A,h._options.chromeTransactionDurability,D)},this._fireOnBlocked=function(_){h.on("blocked").fire(_),Fn.filter(function(j){return j.name===h.name&&j!==h&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(_)})},this.use(Fp),this.use(Hp),this.use(Up),this.use(Np),this.use(zp);var P=new Proxy(this,{get:function(_,j,A){if(j==="_vip")return!0;if(j==="table")return function(M){return Is(h.table(M),P)};var D=Reflect.get(_,j,A);return D instanceof zl?Is(D,P):j==="tables"?D.map(function(M){return Is(M,P)}):j==="_createTransaction"?function(){return Is(D.apply(this,arguments),P)}:D}});this.vip=P,f.forEach(function(_){return _(h)})}var As,Ct=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Kp=(ko.prototype.subscribe=function(l,c,h){return this._subscribe(l&&typeof l!="function"?l:{next:l,error:c,complete:h})},ko.prototype[Ct]=function(){return this},ko);function ko(l){this._subscribe=l}try{As={indexedDB:i.indexedDB||i.mozIndexedDB||i.webkitIndexedDB||i.msIndexedDB,IDBKeyRange:i.IDBKeyRange||i.webkitIDBKeyRange}}catch{As={indexedDB:null,IDBKeyRange:null}}function ic(l){var c,h=!1,f=new Kp(function(m){var b=kt(l),v,C=!1,I={},R={},P={get closed(){return C},unsubscribe:function(){C||(C=!0,v&&v.abort(),_&&nn.storagemutated.unsubscribe(A))}};m.start&&m.start(P);var _=!1,j=function(){return Xi(D)},A=function(M){Ss(I,M),mo(R,I)&&j()},D=function(){var M,O,N;!C&&As.indexedDB&&(I={},M={},v&&v.abort(),v=new AbortController,N=(function(U){var B=jn();try{b&&zn();var V=Jt(l,U);return V=b?V.finally(Zt):V}finally{B&&Nn()}})(O={subscr:M,signal:v.signal,requery:j,querier:l,trans:null}),Promise.resolve(N).then(function(U){h=!0,c=U,C||O.signal.aborted||(I={},(function(B){for(var V in B)if(g(B,V))return;return 1})(R=M)||_||(nn(yr,A),_=!0),Xi(function(){return!C&&m.next&&m.next(U)}))},function(U){h=!1,["DatabaseClosedError","AbortError"].includes(U?.name)||C||Xi(function(){C||m.error&&m.error(U)})}))};return setTimeout(j,0),P});return f.hasValue=function(){return h},f.getValue=function(){return c},f}var vn=Kt;function Co(l){var c=rn;try{rn=!0,nn.storagemutated.fire(l),wo(l,!0)}finally{rn=c}}y(vn,r(r({},is),{delete:function(l){return new vn(l,{addons:[]}).delete()},exists:function(l){return new vn(l,{addons:[]}).open().then(function(c){return c.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(l){try{return c=vn.dependencies,h=c.indexedDB,c=c.IDBKeyRange,(ho(h)?Promise.resolve(h.databases()).then(function(f){return f.map(function(m){return m.name}).filter(function(m){return m!==ps})}):uo(h,c).toCollection().primaryKeys()).then(l)}catch{return Le(new de.MissingAPI)}var c,h},defineClass:function(){return function(l){u(this,l)}},ignoreTransaction:function(l){return ce.trans?gn(ce.transless,l):l()},vip:fo,async:function(l){return function(){try{var c=yo(l.apply(this,arguments));return c&&typeof c.then=="function"?c:oe.resolve(c)}catch(h){return Le(h)}}},spawn:function(l,c,h){try{var f=yo(l.apply(h,c||[]));return f&&typeof f.then=="function"?f:oe.resolve(f)}catch(m){return Le(m)}},currentTransaction:{get:function(){return ce.trans||null}},waitFor:function(l,c){return c=oe.resolve(typeof l=="function"?vn.ignoreTransaction(l):l).timeout(c||6e4),ce.trans?ce.trans.waitFor(c):c},Promise:oe,debug:{get:function(){return Lt},set:function(l){Tl(l)}},derive:x,extend:u,props:y,override:W,Events:mr,on:nn,liveQuery:ic,extendObservabilitySet:Ss,getByKeyPath:G,setByKeyPath:E,delByKeyPath:function(l,c){typeof c=="string"?E(l,c,void 0):"length"in c&&[].map.call(c,function(h){E(l,h,void 0)})},shallowClone:q,deepClone:Z,getObjectDiff:vo,cmp:$e,asap:re,minKey:-1/0,addons:[],connections:Fn,errnames:Bi,dependencies:As,cache:yn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(l){return parseInt(l)}).reduce(function(l,c,h){return l+c/Math.pow(10,2*h)})})),vn.maxKey=vr(vn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(nn(yr,function(l){rn||(l=new CustomEvent(ro,{detail:l}),rn=!0,dispatchEvent(l),rn=!1)}),addEventListener(ro,function(l){l=l.detail,rn||Co(l)}));var qn,rn=!1,oc=function(){};return typeof BroadcastChannel<"u"&&((oc=function(){(qn=new BroadcastChannel(ro)).onmessage=function(l){return l.data&&Co(l.data)}})(),typeof qn.unref=="function"&&qn.unref(),nn(yr,function(l){rn||qn.postMessage(l)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(l){if(!Kt.disableBfCache&&l.persisted){Lt&&console.debug("Dexie: handling persisted pagehide"),qn?.close();for(var c=0,h=Fn;c<h.length;c++)h[c].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(l){!Kt.disableBfCache&&l.persisted&&(Lt&&console.debug("Dexie: handling persisted pageshow"),oc(),Co({all:new Xe(-1/0,[[]])}))})),oe.rejectionMapper=function(l,c){return!l||l instanceof Re||l instanceof TypeError||l instanceof SyntaxError||!l.name||!El[l.name]?l:(c=new El[l.name](c||l.message,l),"stack"in l&&$(c,"stack",{get:function(){return this.inner.stack}}),c)},Tl(Lt),r(Kt,Object.freeze({__proto__:null,Dexie:Kt,liveQuery:ic,Entity:Ml,cmp:$e,PropModSymbol:Ht,PropModification:br,replacePrefix:function(l,c){return new br({replacePrefix:[l,c]})},add:function(l){return new br({add:l})},remove:function(l){return new br({remove:l})},default:Kt,RangeSet:Xe,mergeRanges:kr,rangesOverlap:Yl}),{default:Kt}),Kt})})(qs)),qs.exports}var _m=Cm();const qo=xm(_m),vc=Symbol.for("Dexie"),Zs=globalThis[vc]||(globalThis[vc]=qo);if(qo.semVer!==Zs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${qo.semVer} and ${Zs.semVer}`);const{liveQuery:Ea,mergeRanges:IC,rangesOverlap:AC,RangeSet:RC,cmp:OC,Entity:DC,PropModSymbol:PC,PropModification:LC,replacePrefix:MC,add:jC,remove:NC}=Zs,Sm="easydb";function St(e,t){return`${e}::${t}`}let Os=null;function ei(){if(Os)return Os;const e=new Zs(Sm);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),s=(await n.toArray()).filter(a=>a.workspaceId==null);if(s.length===0)return;const i=(await t.table("workspaces").toArray()).map(a=>a.id),o=i.length>0?i:["default"];for(const a of s){for(const u of o)await n.put({key:St(u,a.key),workspaceId:u,name:a.key,value:a.value});await n.delete(a.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Em()),Os={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Os}function Em(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function _r(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>Ta(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const s=await e.get(t);if(!s)throw new Error(`patch: doc id=${t} vanished after update`);return s},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=Ea(()=>e.toArray()).subscribe({next:s=>t(s)});return()=>r.unsubscribe()}}}function Tm(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const s=Object.entries(n);return r.filter(i=>Ta(i,s)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(s=>({...s,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const i=await e.get(n);if(!i)throw new Error(`row patch: row ${n} vanished after update`);return i},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},async count(){return e.where("tableId").equals(t).count()},subscribe(n){const s=Ea(()=>e.where("tableId").equals(t).toArray()).subscribe({next:i=>n(i)});return()=>s.unsubscribe()}}}function Im(e,t){const n=s=>({...s,workspaceId:t(),key:St(t(),s.name),name:s.name,value:s.value}),r=()=>e.where("workspaceId").equals(t());return{async find(s){const i=await r().toArray();if(!s||Object.keys(s).length===0)return i;const o=Object.entries(s);return i.filter(a=>Ta(a,o))},async findOne(s){return await e.get(St(t(),s))??null},async insert(s){const i=n(s);return await e.add(i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>n(o));return await e.bulkAdd(i),i},async upsert(s){const i=n(s);return await e.put(i),i},async patch(s,i){const o=St(t(),s);if(await e.update(o,i)===0)throw new Error(`setting patch: no setting ${s}`);const u=await e.get(o);if(!u)throw new Error(`setting patch: ${s} vanished after update`);return u},async remove(s){await e.delete(St(t(),s))},async bulkRemove(s){s.length!==0&&await e.bulkDelete(s.map(i=>St(t(),i)))},subscribe(s){const o=Ea(()=>r().toArray()).subscribe({next:a=>s(a)});return()=>o.unsubscribe()}}}function Ta(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Am(e,t){return{workspaces:_r(e.workspaces),tables:_r(e.tables),settings:Im(e.settings,t),plugins:_r(e.plugins),viewTemplates:_r(e.viewTemplates),viewInstances:_r(e.viewInstances),rows:n=>Tm(e.rows,n)}}function Rm(e){const{base:t,providers:n,tableById:r,ctx:s}=e,i=new Map;return{...t,rows(o){const a=r(o),u=a?.source;if(u){const d=n.get(u.type);if(d){const p=JSON.stringify(u),g=i.get(o);if(g&&g.key===p)return g.coll;const y=d.create(a,s);return i.set(o,{key:p,coll:y}),y}}return i.delete(o),t.rows(o)}}}function Se(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Pe(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Ho(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function cn(e,t){const n=new Set([...e].map(s=>s.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let s=2;;s++){const i=`${r}-${s}`;if(!n.has(i.toLowerCase()))return i}}function Om(e){const t=async(r,s)=>(await e.find()).filter(i=>i.workspaceId===r&&i.id!==s).map(i=>i.name),n=(r,s)=>{const i=cn(s,r.name);return i===r.name?r:(console.warn(`[store] "${r.name}" is taken in this workspace — stored as "${i}"`),{...r,name:i,code:Pe(i)})};return{...e,async insert(r){return e.insert(n(r,await t(r.workspaceId,r.id)))},async bulkInsert(r){if(r.length===0)return e.bulkInsert(r);const s=new Set((await e.find()).filter(o=>o.workspaceId===r[0].workspaceId).map(o=>o.name)),i=r.map(o=>{const a=n(o,s);return s.add(a.name),a});return e.bulkInsert(i)},async upsert(r){return e.upsert(n(r,await t(r.workspaceId,r.id)))},async patch(r,s){if(typeof s.name!="string")return e.patch(r,s);const i=await e.findOne(r);if(!i)return e.patch(r,s);const o=cn(await t(i.workspaceId,r),s.name);return o===s.name?e.patch(r,s):(console.warn(`[store] "${s.name}" is taken in this workspace — renamed to "${o}"`),e.patch(r,{...s,name:o,code:Pe(o)}))}}}function Ia(e,t,n,r,s){let i=0,o=!1;const a=()=>{const d=++i;n().then(p=>{o||d!==i||r(p)})};a();const u=e.onChanged((d,p)=>{d===t&&(p&&s&&p!==s||a())});return()=>{o=!0,u()}}function Sr(e,t){const n=r=>e.find(t,r);return{find:r=>n(r),async findOne(r){return await e.findOne(t,r)??null},async insert(r){return await e.insert(t,r),r},async bulkInsert(r){return r.length===0?[]:(await e.bulkInsert(t,r),r)},async upsert(r){return await e.upsert(t,r),r},async patch(r,s){return await e.patch(t,r,s)},async remove(r){await e.remove(t,r)},async bulkRemove(r){r.length!==0&&await e.bulkRemove(t,r)},subscribe(r){return Ia(e,t,()=>n(),r)}}}const Aa=2e4;function Dm(e,t){const n=s=>e.find("rows",{...s,tableId:t},Aa),r=e.queryRows?.bind(e);return{find:s=>n(s),...r?{query:s=>r(t,s)}:{},async findOne(s){const i=await e.findOne("rows",s);return i&&i.tableId===t?i:null},async insert(s){const i={...s,tableId:t};return await e.insert("rows",i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>({...o,tableId:t}));return await e.bulkInsert("rows",i),i},async upsert(s){const i={...s,tableId:t};return await e.upsert("rows",i),i},async patch(s,i){return await e.patch("rows",s,i)},async remove(s){await e.remove("rows",s)},async bulkRemove(s){s.length!==0&&await e.bulkRemove("rows",s)},subscribe(s){return Ia(e,"rows",()=>n(),s,t)},...e.countRows?{count:()=>e.countRows(t)}:{},watch(s){return s(),e.onChanged((i,o)=>{i==="rows"&&(o&&o!==t||s())})}}}function Pm(e,t){const n=s=>({...s,workspaceId:t(),key:St(t(),s.name),name:s.name,value:s.value}),r=s=>e.find("settings",{...s,workspaceId:t()});return{find:s=>r(s),async findOne(s){return await e.findOne("settings",St(t(),s))??null},async insert(s){const i=n(s);return await e.insert("settings",i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>n(o));return await e.bulkInsert("settings",i),i},async upsert(s){const i=n(s);return await e.upsert("settings",i),i},async patch(s,i){const o=St(t(),s);return await e.patch("settings",o,i)},async remove(s){await e.remove("settings",St(t(),s))},async bulkRemove(s){s.length!==0&&await e.bulkRemove("settings",s.map(i=>St(t(),i)))},subscribe(s){return Ia(e,"settings",()=>r(),s)}}}function Lm(e,t){return{workspaces:Sr(e,"workspaces"),tables:Sr(e,"tables"),settings:Pm(e,t),plugins:Sr(e,"plugins"),viewTemplates:Sr(e,"viewTemplates"),viewInstances:Sr(e,"viewInstances"),rows:n=>Dm(e,n)}}function Mm(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const s of r)try{s(n)}catch(i){console.error(`[event:${String(t)}] listener threw`,i)}}}}const yt=_e`
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
`;function vt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const $c=new WeakSet;function $t(e,t){if($c.has(t))return;$c.add(t);let n=0,r=0,s=0,i=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=u.clientX,r=u.clientY;const p=e.getBoundingClientRect();s=p.left,i=p.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!o)return;const d=u.clientX-n,p=u.clientY-r,g=-e.offsetWidth+80,y=window.innerWidth-80,w=0,$=window.innerHeight-40,x=Math.max(g,Math.min(y,s+d)),T=Math.max(w,Math.min($,i+p));e.style.position="fixed",e.style.left=`${x}px`,e.style.top=`${T}px`,e.style.margin="0"});const a=u=>{if(o){o=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)}var jm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,hd=(e,t,n,r)=>{for(var s=r>1?void 0:r?Nm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&jm(t,n,s),s};let ft=class extends ke{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&$t(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return k`
      <dialog @cancel=${this.onCancel} @keydown=${vt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):ie}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return k`
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
        `;case"prompt":return k`
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
        `;case"choice":return k`
          <form @submit=${this.submitChoice}>
            <div class="dialog-header">
              <h2>${e.title}</h2>
              <div class="header-actions">
                <button type="button" class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
              </div>
            </div>
            <div class="dialog-body">
              ${e.message?k`<p class="message">${e.message}</p>`:ie}
              <div class="choices">
                ${e.options.map((t,n)=>n===0?k`<button type="submit" class="choice primary" autofocus>${t}</button>`:k`<button type="button" class="choice" @click=${()=>this.closeAndResolve(t)}>${t}</button>`)}
              </div>
            </div>
          </form>
        `}}};ft.instance=null;ft.styles=[yt,_e`
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
    `];hd([F()],ft.prototype,"current",2);ft=hd([Ee("host-dialogs")],ft);const xt=_e`
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
`;var zm=Object.defineProperty,Fm=Object.getOwnPropertyDescriptor,fd=(e,t,n,r)=>{for(var s=r>1?void 0:r?Fm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&zm(t,n,s),s};let Vt=class extends ke{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Vt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Vt.instance===this&&(Vt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return k`
      ${this.toasts.map(e=>k`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Bm(e.kind)}</span>
            <span class="body"> ${e.title?k`<strong>${e.title}</strong>`:""}${Um(e.message)} </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Vt.instance=null;Vt.styles=[xt,_e`
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
    `];fd([F()],Vt.prototype,"toasts",2);Vt=fd([Ee("toast-host")],Vt);function Um(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,s;for(;(s=t.exec(e))!==null;)s.index>r&&n.push(e.slice(r,s.index)),n.push({url:s[0]}),r=s.index+s[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(i=>typeof i=="string"?i:k`<a href=${i.url} target="_blank" rel="noopener noreferrer">${i.url}</a>`)}function Bm(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}const qm=new Set(["html-preview"]);function Hm(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function Nt(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function Eo(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function Km(e){return{registerHeaderButton:t=>Nt(e.headerButtons,t),registerFooterButton:t=>Nt(e.footerButtons,t),registerTableButton:t=>Nt(e.tableButtons,t),registerColumnEditorAction:t=>Nt(e.columnEditorActions,t),registerImporter:t=>Nt(e.importers,t),registerConnector:t=>Nt(e.connectors,t),registerExporter:t=>Nt(e.exporters,t),registerUrlSource:t=>Nt(e.urlSources,t),registerDropHandler:t=>Nt(e.dropHandlers,t),registerCellRenderer:(t,n)=>Eo(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>Eo(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>Eo(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>Nt(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:Vm}}const Vm={async alert(e,t){const n=ft.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=ft.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=ft.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=ft.instance;if(r)return r.choice(e,t,n);const s=window.prompt(`${e}

Options: ${t.join(", ")}`);return s&&t.includes(s)?s:null},toast(e,t){const n=Vt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Ra="/easydbaccess/settings.json",pd="/easydbaccess/secrets.txt";function Qr(e){try{return globalThis.localStorage??null}catch{return null}}function hi(e){const t=Qr();if(!t)return{};const n=t.getItem(Ra);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function ti(e,t){return hi()[e]}function Gm(e,t,n){const r=Qr();if(!r)return;const s=hi();s[e]=t,r.setItem(Ra,JSON.stringify(s))}function Wm(e,t){const n=Qr();if(!n)return;const r=hi();e in r&&(delete r[e],n.setItem(Ra,JSON.stringify(r)))}function Hs(e,t){return e in hi()}function Fr(e){return Qr()?.getItem(pd)??""}function md(e,t){Qr()?.setItem(pd,e)}function Yn(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf(":");if(s<0)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim();i&&(t[i]=o)}return t}function Oa(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const s=t[r.trim()];return s===void 0?n:s})}function gd(e){return typeof e=="string"&&e.includes("${secret:")}function xc(e){return typeof e=="string"&&e.trim()!==""&&!gd(e)}const Ym=/(^|[_:.\-\s])(tokens?|secrets?|passwords?|passwd|pwd|api[_-]?keys?|apikeys?|auth|credentials?|pat)($|[_:.\-\s])/i;function kc(e){return Ym.test(e)}function Qm(e,t){if((kc(e.name)||t?.(e.name)===!0)&&xc(e.value))return!0;const r=e.value;return r===null||typeof r!="object"||Array.isArray(r)?!1:Object.entries(r).some(([s,i])=>kc(s)&&xc(i))}function Xm(e,t){const n=[],r=[];for(const s of e)Qm(s,t)?r.push(s.name):n.push(s);return{kept:n,withheld:r}}function Jm(e,t,n){return typeof t!="string"||t===""||!gd(e)?!1:Oa(e,n)===t}function Zm(e){const t=Km(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),s=tg(e.store,e.registries),i={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:i,registerRowSource:r,settings:s,backend:{fetch:async(o,a)=>{const u=await eg(e.store),d=a?.body instanceof ArrayBuffer;if(!u||d)return globalThis.fetch(o,a);const p={url:o};return a?.method&&(p.method=a.method),a?.headers&&(p.headers=a.headers),typeof a?.body=="string"&&(p.body=a.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})},async saveFile(o,a,u){const d=typeof a=="string"?new Blob([a],{type:u??"application/octet-stream"}):a,p=URL.createObjectURL(d),g=document.createElement("a");g.href=p,g.download=o,g.rel="noopener",document.body.appendChild(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(p),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function eg(e){const t="server-sync:url";let n=Hs(t)?ti(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:Oa(n,Yn(Fr())).replace(/\/+$/,"")}function tg(e,t){const n=(a,u)=>`${a}:${u}`,r=(a,u)=>t.settings.get(a)?.fields.find(d=>d.key===u),s=a=>typeof a=="string"?Oa(a,Yn(Fr())):a,i=async a=>Hs(a)?ti(a):(await e.settings.findOne(a))?.value,o=async(a,u)=>Jm(await i(a),u,Yn(Fr()));return{async get(a,u){const d=n(a,u);let p;if(Hs(d))p=ti(d);else{const g=await e.settings.findOne(d);p=g?g.value:r(a,u)?.default}return s(p)},async set(a,u,d,p){const g=n(a,u);if(await o(g,d))return;(p??r(a,u)?.scope??"workspace")==="user"?(Gm(g,d),await e.settings.remove(g).catch(()=>{})):(await e.settings.upsert({name:g,value:d}),Wm(g))},async placement(a,u){const d=n(a,u);return Hs(d)?"user":await e.settings.findOne(d)?"workspace":null}}}function Cc(e,t){return e.has(t)?e.get(t)!=="0":!1}function ng(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return Cc(e,"safemode")?"all-optional":Cc(e,"safemode1")?"url-plugins":"off"}const _t=ng();function Da(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const s=r[0],i=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[s,i,...o].join("/")}`}}return e}function bd(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function wd(e){const t=Da(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function yd(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const s=[];let i=0;for(;;){const{done:u,value:d}=await r.read();if(u)break;d&&(s.push(d),i+=d.length,t?.(Math.min(1,i/n)))}const o=new Uint8Array(i);let a=0;for(const u of s)o.set(u,a),a+=u.length;return new TextDecoder().decode(o)}return await e.text()}const rg=50*1024*1024;function _c(e){try{return new URL(e).host}catch{return e}}function Gt(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function sg(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function Sc(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function ig(e,t,n={}){const r=Da(t),s=n.slowMs??2e3;let i=setTimeout(()=>{i=void 0,n.onSlow?.()},s);const o=()=>{i!==void 0&&(clearTimeout(i),i=void 0)},a=n.maxBytes===null?null:n.maxBytes??rg,u=async d=>{let p;try{p=await e.backend.fetch(d)}catch(y){throw new Error(`Could not reach ${_c(d)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${y.message}]`,{cause:y})}if(!p.ok){const y=await sg(p);throw new Error(`HTTP ${p.status} ${p.statusText||""}`.trim()+(y?` — ${y}`:""))}const g=Number(p.headers.get("content-length"));if(a!==null&&Number.isFinite(g)&&g>a)throw p.body?.cancel().catch(()=>{}),new Error(`Response is ${Sc(g)}, over the ${Sc(a)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await yd(p,n.onProgress)}catch(y){throw new Error(`Failed reading the response body from ${_c(d)}: ${y.message}`,{cause:y})}};try{const d=await u(r);if(bd(d)){const p=wd(r);if(p)return await u(p)}return d}finally{o()}}async function Xr(e,t,n,r={}){const{TopProgress:s}=await ze(async()=>{const{TopProgress:o}=await import("./top-progress-wptV32DV.js");return{TopProgress:o}},[]),i={handle:null};try{return await ig(e,t,{onSlow:()=>{i.handle=s.begin(n)},onProgress:o=>i.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{i.handle?.done()}}const og=/^[+-]?\d+$/;function fi(e){const t=e.trim();return og.test(t)?!Number.isSafeInteger(Number(t)):!1}function Pa(e){let t="",n=0,r=!1;for(;n<e.length;){const s=e[n];if(r){t+=s,s==="\\"?(n++,n<e.length&&(t+=e[n])):s==='"'&&(r=!1),n++;continue}if(s==='"'){r=!0,t+=s,n++;continue}if(s==="-"||s>="0"&&s<="9"){let i=n;for(e[i]==="-"&&i++;i<e.length&&e[i]>="0"&&e[i]<="9";)i++;const o=i,a=e[i],u=a!=="."&&a!=="e"&&a!=="E",d=e.slice(n,o);u&&fi(d)?t+=`"${d}"`:t+=d,n=o;continue}t+=s,n++}return t}const Ds=e=>e.trim().toLowerCase();function zC(e,t){const n=new Map;for(const i of t)n.set(Ds(i.field),i.field),n.has(Ds(i.label))||n.set(Ds(i.label),i.field);const r=new Set,s=e.map(()=>"");return e.forEach((i,o)=>{const a=n.get(Ds(i));a&&!r.has(a)&&(s[o]=a,r.add(a))}),e.forEach((i,o)=>{if(s[o])return;const a=t[o]?.field;a&&!r.has(a)&&(s[o]=a,r.add(a))}),s}function ag(e,t,n,r){const s=new Map(t.map(i=>[i.field,i.type]));return e.map(i=>{const o={};return n.forEach((a,u)=>{if(!a)return;const d=s.get(a);d!==void 0&&(o[a]=r(i[u]??"",d))}),o})}function lg(e){const t=e.trim();return t.length>=2&&t.startsWith("[")&&t.endsWith("]")}function vd(e){if(!lg(e))return null;try{const t=JSON.parse(e.trim());return Array.isArray(t)?t:null}catch{return null}}function Dt(e){if(e==null)return[];if(Array.isArray(e))return To(e);if(typeof e!="string")return To([e]);const t=vd(e);return t?To(t):cg(e)}function Ec(e){return Dt(e).join(", ")}function pi(e){return Array.isArray(e)?!0:typeof e=="string"&&vd(e)!==null}function To(e){const t=[];for(const n of e){if(n==null)continue;const r=typeof n=="string"?n.trim():typeof n=="object"?JSON.stringify(n)??"":String(n);r!==""&&t.push(r)}return t}function cg(e){const t=[];let n="",r=!1,s=!1;const i=()=>{const o=s?n:n.trim();o!==""&&t.push(o),n="",r=!1,s=!1};for(let o=0;o<e.length;o++){const a=e[o];if(a==='"'){if(r&&e[o+1]==='"'){n+='"',o++;continue}r=!r,s=!0;continue}if(a===","&&!r){i();continue}n+=a}return i(),t}function ug(e){return e==null||String(e).trim()===""}function Pn(e){const t=[];let n="",r=!1,s=!1,i=!1,o=!1,a=!1,u=!1,d=!0,p=!1;const g=()=>{const y=i?n:n.trim();if(r||o){const w={term:y,negate:o};a&&(w.prefix=!0),u&&(w.exact=!0),p&&t.length>0&&(w.and=!0),t.push(w)}p=!1,n="",r=!1,s=!1,i=!1,o=!1,a=!1,u=!1,d=!0};for(let y=0;y<e.length;y++){const w=e[y];if(!s&&/\s/.test(w)){const $=/^\s+(AND|OR)(?=[\s,]|$)/.exec(e.slice(y));if($&&(r||o)){g(),p=$[1]==="AND",y+=$[0].length-1;continue}}if(w==='"'){if(s&&e[y+1]==='"'){n+='"',r=!0,y++;continue}s=!s,i=!0,r=!0,d=!1;continue}if(w===","&&!s){g();continue}if(w==="!"&&!s&&d&&!o&&!a&&!u){o=!0;continue}if(w==="="&&!s&&d&&!a&&!u){u=!0;continue}if(w==="^"&&!s&&d&&!a&&!u){a=!0;continue}d&&!s&&/\s/.test(w)||(d=!1),n+=w,/\s/.test(w)||(r=!0)}return g(),t}function dg(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")||/\s(AND|OR)(?=[\s,]|$)/.test(e)}function an(e){let t="";return e.forEach((n,r)=>{const s=n.term===""&&n.negate?"":dg(n.term)?`"${n.term.replace(/"/g,'""')}"`:n.term,i=n.exact?"=":n.prefix?"^":"",o=(n.negate?"!":"")+i+s;r===0?t=o:t+=n.and?` AND ${o}`:`,${o}`}),t}function hg(e){const t=[];for(const n of e){const r=t[t.length-1];n.and&&r?r.push(n):t.push([n])}return t}function Tc(e,t){const n=String(e??"").toLowerCase(),r=t.term.toLowerCase();return t.exact?n===r:t.prefix?n.startsWith(r):n.includes(r)}function Ic(e,t){return t?t.length===0:ug(e)}function Ko(e,t,n){const r=t.term;return r.trim()===""||!t.prefix&&!t.exact&&r.toUpperCase()==="NULL"?Ic(e,n):n?n.some(s=>Tc(s,t)):Tc(e,t)}function fg(e,t,n){return t.every(r=>r.negate?!Ko(e,r,n):Ko(e,r,n))}function Ur(e,t,n){const r=hg(Pn(t));if(r.length===0)return!0;const s=n?.type==="array"?Dt(e):null,i=r.filter(a=>a.length===1&&a[0].negate);for(const a of i)if(Ko(e,a[0],s))return!1;const o=r.filter(a=>!(a.length===1&&a[0].negate));return o.length===0?!0:o.some(a=>fg(e,a,s))}const pg={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function mg(e){e.ui.registerImporter(vg),ze(()=>import("./csv-import-options-AYN4S5z2.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=Og(t).filter(Dg);if(r.length===0)return!1;if(t.preventDefault(),r.length===1&&await yg(e,t,r[0]))return!0;const s=r.length===1?`"${r[0].name}"`:`${r.length} files`,i=await e.ui.dialogs.choice(`Import ${s} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[bg,Ac],"Import CSV");if(!i)return!0;const o=i===Ac?async a=>{const{editColumnNames:u}=await ze(async()=>{const{editColumnNames:d}=await Promise.resolve().then(()=>wx);return{editColumnNames:d}},void 0);return u(a)}:void 0;for(const a of r)await $g(e,a,o);return!0})}function Vo(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Gt(e.url):"pasted"}function gg(e){return Na(Vo(e))||"imported"}const bg="Import directly",Ac="Edit columns first",Rc="A new table",Oc="Append to this table",wg="Replace the rows of this table";async function yg(e,t,n){const{tableIdAtNode:r}=await ze(async()=>{const{tableIdAtNode:p}=await Promise.resolve().then(()=>$f);return{tableIdAtNode:p}},void 0),s=r(t.target);if(!s)return!1;const i=await e.store.tables.findOne(s);if(!i)return!1;if(i.readonly===!0||i.source!=null)return e.ui.dialogs.toast(`"${i.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import CSV"}),!1;const o=await e.ui.dialogs.choice(`Import "${n.name}" into "${i.name}"?`,[Oc,wg,Rc],"Import CSV");if(!o)return!0;if(o===Rc)return!1;const a=await n.text(),u=o===Oc?"append":"overwrite",d={target:{tableId:s,mode:u}};return u==="append"&&(d.mapFields=async(p,g,y)=>{const{mapColumnsToTable:w}=await ze(async()=>{const{mapColumnsToTable:$}=await import("./column-map-dialog-CR9a9IQl.js");return{mapColumnsToTable:$}},[]);return w(p,g,i.name,y)}),await La(e,a,n.name,d),!0}const vg={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:gg(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await xd(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${Vo(n)}…`):r=n.text??"";const i=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??za(Vo(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...i?{separator:i}:{}},a=e.targetColumns;if(a&&a.length>0){yield{rows:Ma(r,o).rows.map(g=>{const y={};for(let w=0;w<a.length;w++){const $=a[w];y[$.field]=ja(g[w]??"",$.type)}return y})};return}const u=sr(r,o);yield{columns:u.columns,rows:u.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function $g(e,t,n){await La(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function La(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("csv-import: no active workspace");const i=Na(n||"imported")||"imported",o=r.separator??za(n),a=r.target?await e.store.tables.findOne(r.target.tableId):null,u=a??(await e.store.tables.find()).find(w=>w.workspaceId===s&&w.name===i);let d,p;if(a&&r.target)p=r.target.mode,d=a.id;else if(u){const w=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!w)return;w==="Append rows"?(p="append",d=u.id):w==="Overwrite rows"?(p="overwrite",d=u.id):(p="new",d=Se())}else p="new",d=Se();e.events.emit("import:before",{source:"csv",tableId:d});let g;if(p==="new"){const w=sr(t,{maxRows:r.maxRows,separator:o});let $=w.columns,x=w.rows;if(r.editColumns){const T=await r.editColumns($);if(T===null)return;x=Pg(x,$,T),$=T}r.maxRows!=null&&(x=x.slice(0,r.maxRows)),await e.store.tables.insert({id:d,workspaceId:s,name:i,code:Ho(i),columns:$,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()}),g=x.map(T=>({id:Se(),tableId:d,data:T,updatedAt:Date.now()}))}else{const w=u.columns,$=Ma(t,{maxRows:r.maxRows,separator:o}),x=r.maxRows!=null?$.rows.slice(0,r.maxRows):$.rows;let T=w.map(S=>S.field);if(r.mapFields){const S=await r.mapFields($.header,w,$.rows[0]??[]);if(S===null)return;T=S}if(g=ag(x,w,T,ja).map(S=>({id:Se(),tableId:d,data:S,updatedAt:Date.now()})),p==="overwrite"){const S=e.store.rows(d),L=await S.find();await S.bulkRemove(L.map(W=>W.id))}}await e.store.rows(d).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:g.length})}function Ma(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??kd(n),s=Cd(n,r,$d(t.maxRows));if(s.length===0)return{header:[],rows:[]};const i=s[0],o=s.slice(1).filter(a=>!(a.length===1&&a[0]===""));return{header:i,rows:o}}function $d(e){return e!=null?e+1:void 0}async function xd(e,t){const r=new TextDecoder,s=t+1;let i="",o=0,a=!1,u=0;for(;u<e.size;){const d=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const p=r.decode(d,{stream:!0});for(let g=0;g<p.length;g++){const y=p[g];if(y==='"')a=!a;else if(y===`
`&&!a&&(o+=1,o>=s))return i+p.slice(0,g+1)}i+=p}return i}function sr(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??kd(n),s=Cd(n,r,$d(t.maxRows));if(s.length===0)return{columns:[],rows:[]};const i=s[0],o=s.slice(1).filter(w=>!(w.length===1&&w[0]==="")),a=i.map((w,$)=>Cg(w,$)),u=Ed(a.map(w=>w.field)),d=o.map(w=>{const $={};for(let x=0;x<u.length;x++)$[u[x]]=w[x]??"";return $}),p=a.map((w,$)=>w.type?w.type:_g(d.map(x=>x[u[$]]??"").filter(x=>x.length>0))),g=a.map((w,$)=>{const x=p[$]??"string",T={field:u[$],label:w.label,type:x},S=kg(x),L=w.renderer??S;return L&&(T.renderer=L),w.default!==void 0&&(T.default=w.default),w.max!=null&&(T.max=w.max),w.unique&&(T.unique=!0),w.notnull&&(T.notnull=!0),w.hidden&&(T.hidden=!0),T}),y=d.map(w=>{const $={};for(let x=0;x<u.length;x++){const T=u[x],S=p[x]??"string";$[T]=ja(w[T]??"",S)}return $});return{columns:g,rows:y}}const xg=new Set(["string","number","boolean","date","datetime","array"]),Dc={color:"color",image:"image"};function kg(e){if(e==="date"||e==="datetime"||e==="boolean")return e;if(e==="array")return"tags"}function Cg(e,t){const n=e.trim();if(!n.includes(":"))return{field:Ho(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),s=Ho(r[0]||`col_${t+1}`),i=(r[1]??r[0]??"").trim()||s,o={field:s,label:i},a=(r[2]??"").trim();a&&(xg.has(a)?o.type=a:Dc[a]&&(o.type="string",o.renderer=Dc[a]));const u=(r[3]??"").trim();u&&(o.default=u);const d=(r[4]??"").trim();if(d){const g=Number(d);Number.isFinite(g)&&g>0&&(o.max=g)}const p=(r[5]??"").toLowerCase();return p.includes("u")&&(o.unique=!0),p.includes("n")&&(o.notnull=!0),p.includes("h")&&(o.hidden=!0),o}function kd(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const i of t)i in n&&(n[i]+=1);let r=",",s=-1;for(const i of[",",";","	"])(n[i]??0)>s&&(r=i,s=n[i]??0);return r}function Cd(e,t,n){const r=[];let s=[],i="",o=!1;for(let a=0;a<e.length;a++){const u=e[a];if(o)u==='"'?e[a+1]==='"'?(i+='"',a++):o=!1:i+=u;else if(u==='"')o=!0;else if(u===t)s.push(i),i="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[a+1]===`
`&&a++,s.push(i),r.push(s),s=[],i="",n!=null&&r.length>=n)return r}else i+=u}return(i.length>0||s.length>0)&&(s.push(i),r.push(s)),r}function _g(e){return e.length===0?"string":e.every(pi)?"array":e.every(Eg)?"boolean":e.every(Tg)?"number":e.every(Ag)?"datetime":e.every(Ig)?"date":"string"}const Sg=/^(true|false|yes|no|0|1)$/i;function Eg(e){return Sg.test(e.trim())}function Tg(e){const t=e.trim();if(t===""||fi(t))return!1;const n=Number(t);return Number.isFinite(n)}function Ig(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Ag(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function ja(e,t){const n=e.trim();switch(t){case"array":return n===""?null:n;case"number":{if(n==="")return null;if(fi(n))return n;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return _d(n);case"datetime":return Rg(n);default:return e}}function _d(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),s=parseInt(t[2],10),i=t[3];let o=parseInt(i,10);i.length===2&&(o+=2e3);let a,u;return r>12?(a=r,u=s):s>12?(u=r,a=s):(a=r,u=s),`${o.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${a.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function Rg(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${_d(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const s=new Date(e);if(!Number.isNaN(s.getTime())){const i=s.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}return e}function Og(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}const Sd=/\.(csv|tsv|tab)$/i;function Na(e){return e.replace(Sd,"")}function za(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function Dg(e){return!!(Sd.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function Ed(e){const t=new Map,n=new Set,r=[];for(const s of e){let i=s,o=t.get(s)??0;for(;n.has(i);)o+=1,i=`${s}_${o+1}`;t.set(s,o),n.add(i),r.push(i)}return r}function Pg(e,t,n){return e.map(r=>{const s={};for(let i=0;i<t.length;i++)s[n[i].field]=r[t[i].field];return s})}const Lg=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Ed,importCsvText:La,init:mg,meta:pg,parseCsv:sr,parseCsvRaw:Ma,readCsvHead:xd,separatorForName:za,stripDelimitedExt:Na},Symbol.toStringTag,{value:"Module"})),Mg={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},jg={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Fa(e,t)}};function Ng(e){e.ui.registerExporter(jg)}function Fa(e,t){const n=e.columns.map(i=>i.field),r=e.columns.map(i=>Pc(i.label??i.field)),s=t.map(i=>n.map(o=>Pc(zg(i.data[o]))).join(","));return[r.join(","),...s].join(`\r
`)}function zg(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Pc(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Fg=Object.freeze(Object.defineProperty({__proto__:null,init:Ng,meta:Mg,serializeCsv:Fa},Symbol.toStringTag,{value:"Module"}));var Ug=Object.defineProperty,Bg=Object.getOwnPropertyDescriptor,dn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Bg(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Ug(t,n,s),s};function Br(e,t={}){return(Ve.instance??Td()).open(e,t).then(r=>r?.map(s=>s.index)??null)}function qg(e,t={}){return(Ve.instance??Td()).open(e,t)}function Td(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Hg(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Ve=class extends ke{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.modes=[],this.offerViewModes=!1,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=[];this.selected.forEach((n,r)=>{if(!n)return;const s=(this.items[r]?.kind??"table")==="view";t.push(s&&this.offerViewModes?{index:r,mode:this.modes[r]??"projection"}:{index:r})}),t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Ve.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ve.instance===this&&(Ve.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.offerViewModes=t.offerViewModes??!1,this.modes=e.map(()=>t.defaultViewMode??"projection"),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e,t){this.selected=this.items.map((n,r)=>t&&(n.kind??"table")!==t?this.selected[r]??!1:e)}setMode(e,t){const n=this.modes.slice();n[e]=t,this.modes=n}indicesOf(e){return this.items.map((t,n)=>(t.kind??"table")===e?n:-1).filter(t=>t>=0)}get sectioned(){return this.items.some(e=>e.kind!==void 0)}get selectedCount(){return this.selected.filter(Boolean).length}renderSection(e,t){const n=this.indicesOf(e);if(n.length===0)return k``;const r=n.filter(s=>this.selected[s]).length;return k`
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
          ${n.map(s=>this.renderRow(this.items[s],s))}
        </ul>
      </div>
    `}renderRow(e,t){const n=(e.kind??"table")==="view";return k`
      <li>
        <input type="checkbox" id=${`tsel-${t}`} .checked=${this.selected[t]??!1} @change=${()=>this.toggle(t)} />
        <label for=${`tsel-${t}`}>
          <span class="name">${e.name}</span>
          ${e.hidden?k`<span class="tag-hidden">hidden</span>`:""}
          <span class="size">${Hg(e.size)}</span>
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
      <dialog @cancel=${this.onCancel} @keydown=${vt}>
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
    `}};Ve.instance=null;Ve.styles=[yt,_e`
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
    `];dn([F()],Ve.prototype,"items",2);dn([F()],Ve.prototype,"selected",2);dn([F()],Ve.prototype,"heading",2);dn([F()],Ve.prototype,"message",2);dn([F()],Ve.prototype,"confirmLabel",2);dn([F()],Ve.prototype,"modes",2);dn([F()],Ve.prototype,"offerViewModes",2);Ve=dn([Ee("table-select-dialog")],Ve);const Kg=Object.freeze(Object.defineProperty({__proto__:null,get TableSelectDialog(){return Ve},chooseDatabaseObjects:qg,chooseTables:Br},Symbol.toStringTag,{value:"Module"}));function Ua(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let s=0;s<e.length;s++)r[t[s].field]=n[e[s].field];return r}}function Lc(e,t){if(t.length===0)return null;const n=new Set(t.map(s=>s.from)),r={};for(const s of Object.keys(e))n.has(s)||(r[s]=e[s]);for(const{from:s,to:i}of t)Object.prototype.hasOwnProperty.call(e,s)&&(r[i]=e[s]);return r}function mi(e,t,n=[]){const r=new Set(e.map(a=>a.field)),s=new Set(n),i=[...e],o=[];for(const a of t)r.has(a.field)||s.has(a.field)||(i.push(a),o.push(a.field),r.add(a.field));return{columns:i,newFields:o}}async function Ba(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function Id(e,t,n,r){const{workspaceId:s,importerId:i,target:o,maxRows:a}=r;let u,d,p,g=!1,y=0,w,$=null;const x=S=>e.store.rows(S),T=async S=>{if(g)return!0;if(o.kind==="new"){let L=S.columns??[];if(r.editColumns){const z=await r.editColumns(L);if(z===null)return!1;$=Ua(L,z),L=z}u=Se(),d=cn(await Ba(e,s),t);const W={id:u,workspaceId:s,name:d,code:Pe(d),columns:L,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(W),p=!0}else{const L=await e.store.tables.findOne(o.tableId);if(!L)throw new Error("The table to import into no longer exists.");if(u=L.id,d=L.name,p=!1,o.kind==="overwrite"){const W=await x(u).find();await x(u).bulkRemove(W.map(z=>z.id))}if(S.columns?.length){const W=mi(L.columns,S.columns,L.deletedColumns??[]);W.newFields.length>0&&await e.store.tables.patch(u,{columns:W.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:i,tableId:u}),g=!0,!0};for await(const S of n){if(a!=null&&y>=a)break;if(!await T(S))return null;S.totalCount!=null&&(w=S.totalCount);let L=S.rows;if(a!=null&&y+L.length>a&&(L=L.slice(0,a-y)),L.length===0)continue;$&&(L=L.map($));const W=Date.now(),z=L.map(re=>({id:Se(),tableId:u,data:re,updatedAt:W}));await x(u).bulkInsert(z),y+=z.length,r.onProgress?.(y,w)}return!g&&!await T({})?null:(e.events.emit("import:after",{source:i,tableId:u,rowCount:y}),{tableId:u,tableName:d,rowCount:y,created:p})}function Mc(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(s,i)=>Xr(e,s,i??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function Vg(e,t){if(t.length<=1)return t;const n=await Br(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function Gg(e,t,n,r,s){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const i=t.reference(n,r);let o=[];for await(const d of t.read(n,r)){o=d.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const a=cn(await Ba(e,s),r.name),u=Se();return await e.store.tables.insert({id:u,workspaceId:s,name:a,code:Pe(a),columns:o,view:"table",source:i,readonly:!0,updatedAt:Date.now()}),{tableId:u,tableName:a,rowCount:0,created:!0}}async function gi(e,t,n,r){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=Mc(e,r),o=await t.list(i,n);if(o.length===0)throw new Error("No tables found at that source.");const a=await Vg(t,o);if(a===null)return{landed:[],failed:[],cancelled:!0};const u=[],d=[];for(const p of a)try{if(r.mode==="reference"){u.push(await Gg(e,t,i,p,s));continue}const g=r.target;let y;g.kind!=="new"&&(y=(await e.store.tables.findOne(g.tableId))?.columns);const w=Mc(e,r,{...y?{targetColumns:y}:{}}),$=t.read(w,p),x=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),T=await Id(e,p.name,$,{workspaceId:s,importerId:t.id,target:g,...x?{origin:x}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(T===null)return{landed:u,failed:d,cancelled:!0};u.push(T)}catch(g){d.push({name:p.name,error:g?.message??String(g)})}return{landed:u,failed:d,cancelled:!1}}async function Ad(e,t,n){const r=new Map;if(n.length===0)return r;const s=(await e.find()).filter(a=>a.workspaceId===t),i=new Map(s.map(a=>[a.name,a])),o=new Map(s.map(a=>[a.id,a]));for(const a of n){if(!Wg(a))continue;const u=i.get(a.name)??o.get(a.id),d=u?.id??a.id;u&&r.set(a.id,u.id);const p=u?u.builtin:a.builtin,g={...a,id:d,workspaceId:t};p===void 0?delete g.builtin:g.builtin=p,await e.upsert(g),i.set(g.name,g),o.set(g.id,g)}return r}function Wg(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const Yg={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Qg(e){e.ui.registerImporter(Rd),e.ui.registerDropHandler(async t=>{const r=ib(t).filter(ob);if(r.length===0)return!1;t.preventDefault();for(const s of r)await Jg(e,s);return!0})}function qa(e){return qe(e)?Go(e)||Array.isArray(e.tables)?!0:Dd(e):!1}function Xg(e){return e.kind==="file"&&e.file?Io(e.file.name):e.kind==="url"&&e.url?Io(Gt(e.url)):Io(e.name??"imported")}const Rd={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Gt(t.url)}…`):n=t.text??"";const r=Xg(t);let s;try{s=JSON.parse(Pa(n))}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`,{cause:o})}const i=bi(s,r);return i.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:i.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function Io(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function Jg(e,t){const n=await t.text();let r;try{r=JSON.parse(Pa(n))}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(qa(r)){await Ha(e,n,t.name);return}const s=await gi(e,Rd,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=s.landed.reduce((o,a)=>o+a.rowCount,0);s.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${i.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Ha(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let i;try{i=JSON.parse(Pa(t))}catch(T){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${T.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",a=bi(i,o);if(a.length===0)return;let u=a;if(a.length>1){const T=await Br(a.map(S=>({name:S.name,size:S.rows.length})),{title:"Import tables",message:`"${n}" contains ${a.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!T)return;u=T.map(S=>a[S])}const d=(await e.store.tables.find()).filter(T=>T.workspaceId===s),p=new Set(u.map(T=>T.name)),g=d.filter(T=>p.has(T.name));let y;if(g.length===0&&u.length===1)y="append-new";else{const T=g.length>0?[`Overwrite matching (${g.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],S=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${n}".${g.length>0?`

${g.length} table${g.length===1?"":"s"} share a name with existing data.`:""}`,T,"JSON import");if(!S)return;S.startsWith("Overwrite matching")?y="overwrite-matching":S==="Replace entire workspace"?y="replace-workspace":y="append-new"}const w=2e3,$=u.reduce((T,S)=>T+(S.source?0:Math.min(S.rows.length,r.maxRows??1/0)),0);let x=null;if($>=w){const{TopProgress:T}=await ze(async()=>{const{TopProgress:S}=await import("./top-progress-wptV32DV.js");return{TopProgress:S}},[]);x=T.begin(`Importing ${n}…`)}try{if(y==="replace-workspace")for(const z of d){const re=e.store.rows(z.id),G=await re.find();await re.bulkRemove(G.map(E=>E.id)),await e.store.tables.remove(z.id)}const T=new Map(d.map(z=>[z.name,z])),S=new Map,L=[];let W=0;for(const z of u){const re=z.source,G=z.origin??(!re&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let E;const q=y==="overwrite-matching"?T.get(z.name):void 0;let X=z.columns,ue=z.rows;if(r.editColumns&&!q&&!re){const H=await r.editColumns(X,z.name);if(H===null)continue;ue=sb(ue,X,H),X=H}if(q){if(E=q.id,!q.source){const H=e.store.rows(E),Z=await H.find();await H.bulkRemove(Z.map(K=>K.id))}await e.store.tables.patch(E,{columns:X,...z.title?{title:z.title}:{},...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...z.filters?{filters:z.filters}:{},...z.labelColumn?{labelColumn:z.labelColumn}:{},...z.info?{info:z.info}:{},...z.deletedColumns?{deletedColumns:z.deletedColumns}:{},...z.readonly?{readonly:!0}:{},source:re??void 0,origin:G??void 0,updatedAt:Date.now()})}else{E=Se(),e.events.emit("import:before",{source:"json",tableId:E});const H=await e.store.tables.insert({id:E,workspaceId:s,name:z.name,code:Pe(z.name),columns:X,view:"table",...z.title?{title:z.title}:{},...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{},...z.filters?{filters:z.filters}:{},...z.labelColumn?{labelColumn:z.labelColumn}:{},...z.info?{info:z.info}:{},...z.deletedColumns?{deletedColumns:z.deletedColumns}:{},...z.readonly?{readonly:!0}:{},...re?{source:re}:{},...G?{origin:G}:{},updatedAt:Date.now()});H.name!==z.name&&L.push([z.name,H.name])}S.set(z.name,E);let pe=0;if(!re){const H=e.store.rows(E),K=(r.maxRows!=null?ue.slice(0,r.maxRows):ue).map(se=>({id:Se(),tableId:E,data:se,updatedAt:Date.now()}));await H.bulkInsert(K),pe=K.length,W+=pe,x?.fraction($>0?W/$:1)}e.events.emit("import:after",{source:"json",tableId:E,rowCount:pe})}await Zg(e,i,s,S,y==="replace-workspace"),L.length>0&&e.ui.dialogs.toast(L.map(([z,re])=>`“${z}” came in as “${re}”`).join(`
`),{kind:"info",title:"Names must be unique"})}finally{x?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Zg(e,t,n,r,s){if(!qe(t))return;const i=t,o=Array.isArray(i.viewTemplates)?i.viewTemplates:[],a=Array.isArray(i.viewInstances)?i.viewInstances:[];if(o.length===0&&a.length===0)return;if(s){const d=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===n);await e.store.viewInstances.bulkRemove(d.map(p=>p.id))}const u=await Ad(e.store.viewTemplates,n,o);for(const d of a){if(!qe(d)||typeof d.id!="string")continue;const p=(d.tableName?r.get(d.tableName):void 0)??d.tableId;if(!p)continue;const g=u.get(d.templateId)??d.templateId;await e.store.viewInstances.upsert({...d,workspaceId:n,tableId:p,templateId:g})}}function bi(e,t){if(qe(e)&&Go(e))return jc(e);if(qe(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const s of n.tables){if(Od(s)){r.push(Nc(s));continue}qe(s)&&Go(s)&&r.push(...jc(s))}return r}if(Dd(e))return[Nc(e)];if(Array.isArray(e)){const n=e.filter(qe);return n.length===0?[]:[{name:t,...zc(n)}]}return qe(e)?[{name:t,...zc([e])}]:[]}function Go(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!qe(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function jc(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!qe(r))continue;const s=r;if(!Array.isArray(s.dataArray)||!Array.isArray(s.columns))continue;const i=n.replace(/\.table\.json$/,""),o=s.columns.map(p=>eb(p)),a=o.map(p=>p.field),u=s.dataArray.filter(p=>Array.isArray(p)).map(p=>{const g={};for(let y=0;y<a.length;y++)g[a[y]]=p[y];return g}),d={name:i,columns:o,rows:u};if(s.elementRect&&typeof s.elementRect.x=="number"&&typeof s.elementRect.y=="number"){const p=s.elementRect;d.windowGeometry={x:p.x,y:p.y,w:p.width??600,h:p.height??400,z:p.zIndex??100,minimized:!!p.minimized,maximized:!!p.maximized}}typeof s.sortColumn=="number"&&s.sortColumn>=0&&s.sortColumn<a.length&&(d.sortColumn=a[s.sortColumn],d.sortAsc=(s.sortDirection??"asc")!=="desc"),t.push(d)}return t}function eb(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",s={field:t,label:n,type:r};return e.isUnique&&(s.unique=!0),e.isNotNull&&(s.notnull=!0),s}function Od(e){return qe(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Dd(e){return Od(e)&&Array.isArray(e.rows)}function Nc(e){const t=e,n=qe(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,s=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,i=typeof t.title=="string"?t.title:void 0,o=qe(t.filters)?t.filters:void 0,a=typeof t.labelColumn=="string"?t.labelColumn:void 0,u=qe(t.info)?t.info:void 0,d=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(w=>typeof w=="string"):void 0,p=t.readonly===!0?!0:void 0,g=qe(t.source)&&typeof t.source.type=="string"?t.source:void 0,y=qe(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(tb),rows:Array.isArray(e.rows)?e.rows.filter(qe):[],...i?{title:i}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:s??!0}:{},...o?{filters:o}:{},...a?{labelColumn:a}:{},...u?{info:u}:{},...d?{deletedColumns:d}:{},...p?{readonly:p}:{},...g?{source:g}:{},...y?{origin:y}:{}}}function tb(e){if(!qe(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",s=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(s=s??r,r="string");const i={field:n,label:String(t.label??n),type:r};return s&&(i.renderer=s),typeof t.script=="string"&&(i.script=t.script),t.readonly===!0&&(i.readonly=!0),i}function zc(e){const t=new Set;for(const s of e)for(const i of Object.keys(s))t.add(i);return{columns:Array.from(t).map(s=>({field:s,label:s,type:nb(e.map(i=>i[s]))})),rows:e}}function nb(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(pi)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&rb(n))?"date":"string"}function rb(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function sb(e,t,n){const r=Ua(t,n);return r?e.map(r):e}function qe(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function ib(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}function ob(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const ab=Object.freeze(Object.defineProperty({__proto__:null,init:Qg,isWorkspaceDump:qa,meta:Yg,parsedToTables:bi,restoreWorkspaceDump:Ha},Symbol.toStringTag,{value:"Module"}));function Ka(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function qr(e){return e.replace(/&(?![a-zA-Z][a-zA-Z0-9]*;|#\d+;|#x[0-9a-fA-F]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Pd(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function Ks(e){const t=e.trim();return t===""?null:/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)?/^(https?|mailto|tel):/i.test(t)?t:null:t}function lb(e){const t=Pd(e).trim(),n=t.replace(/[^!-~]/g,"");return Ks(n)===null?null:t}const Ld="script|style|iframe|object|embed|noscript|template|svg|math|frame|frameset",cb=new RegExp(`<(${Ld})\\b(?:"[^"]*"|'[^']*'|[^"'>])*>[\\s\\S]*?<\\/\\s*\\1\\s*>`,"gi"),ub=new RegExp(`<(?:${Ld})\\b[\\s\\S]*$`,"i"),db=new Set(["br","hr","img","source","wbr","col"]),Md=new Set(["a","abbr","audio","b","blockquote","br","caption","cite","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","h1","h2","h3","h4","h5","h6","hr","i","img","ins","kbd","li","mark","ol","p","pre","s","samp","small","source","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul","var","video","wbr"]),hb=new Set(["title","dir","lang"]),fb={a:new Set(["href"]),audio:new Set(["src","controls"]),col:new Set(["span"]),colgroup:new Set(["span"]),img:new Set(["src","alt","width","height"]),ol:new Set(["start","reversed"]),source:new Set(["src","type"]),td:new Set(["colspan","rowspan","headers"]),th:new Set(["colspan","rowspan","scope","headers"]),time:new Set(["datetime"]),video:new Set(["src","controls","poster","width","height"])},pb=new Set(["href","src","poster"]),mb=/([a-zA-Z_:][a-zA-Z0-9_:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,jd=/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s(?:"[^"]*"|'[^']*'|[^"'>])*)?)\s*\/?>/g;function gb(e,t,n){const r=t.toLowerCase();if(!Md.has(r))return"";if(e)return db.has(r)?"":`</${r}>`;const s=fb[r];let i=`<${r}`,o=!1,a=!1;for(const u of n.matchAll(mb)){const d=u[1].toLowerCase();if(!hb.has(d)&&!s?.has(d))continue;const p=u[2]??u[3]??u[4];if(p===void 0){i+=` ${d}`;continue}if(pb.has(d)){const g=lb(p);if(g===null)continue;d==="href"&&(o=!0),d==="src"&&(a=!0),i+=` ${d}="${qr(g)}"`;continue}i+=` ${d}="${qr(p)}"`}return r==="a"&&o&&(i+=' target="_blank" rel="noopener noreferrer"'),(r==="img"||r==="source")&&!a?"":`${i}>`}function Nd(e){return e.replace(/<!--[\s\S]*?-->/g,"").replace(cb,"").replace(ub,"").replace(/<[!?][^>]*>/g,"")}const bb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","circle","cite","code","col","colgroup","data","datalist","dd","defs","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","line","link","main","map","mark","marquee","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","path","picture","polygon","polyline","pre","progress","q","rect","rp","rt","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","use","var","video","wbr"]);function zd(e,t,n,r){const s=n.toLowerCase();return Md.has(s)||bb.has(s)||s.includes("-")?gb(t,n,r):Ka(e)}function wb(e){const t=Nd(e);let n="",r=0;for(const s of t.matchAll(jd))n+=qr(t.slice(r,s.index)),n+=zd(s[0],s[1]==="/",s[2],s[3]),r=s.index+s[0].length;return n+qr(t.slice(r))}const yb=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Fd(e){return yb.test(e)}function vb(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return Pd(e.replace(/<[^>]*>/g,""))}function $b(e){return(Fd(e)?vb(e):e).replace(/\s+/g," ").trim()}const Er="",xb=/\uE000(\d+)\uE000/g,Wo=/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)\s*$/,Yo=/^(#{1,6})\s+(.*)$/,Va=/^\s*([-*_])(\s*\1){2,}\s*$/,Qo=/^\s*>/,Ud=/^\s*(?:[-*+]|\d+[.)])\s+/,Bd=/^\s*\|?[\s:|-]+\|[\s:|-]*$/,kb="address|article|aside|blockquote|caption|col|colgroup|dd|details|div|dl|dt|figcaption|figure|footer|form|h[1-6]|header|hr|iframe|legend|li|main|nav|ol|p|pre|script|section|style|summary|table|tbody|td|tfoot|th|thead|tr|ul",qd=new RegExp(`^\\s*</?(?:${kb})(?:[\\s/>]|$)`,"i");function Cb(e){return Wo.test(e)||Yo.test(e)||Va.test(e)||Qo.test(e)||Ud.test(e)||qd.test(e)}function Kn(e){const t=[];let n=e.replaceAll(Er,"").replace(/(`+)([\s\S]*?)\1/g,(r,s,i)=>(t.push(`<code>${Ka(i)}</code>`),`${Er}${t.length-1}${Er}`));return n=Nd(n).replace(jd,(r,s,i,o)=>{const a=zd(r,s==="/",i,o);return a===""?"":(t.push(a),`${Er}${t.length-1}${Er}`)}),n=qr(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const a=Ks(i);return a===null?r:`<img src="${a}" alt="${s}"${o?` title="${o}"`:""}>`}),n=n.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const a=Ks(i);return a===null?r:`<a href="${a}"${o?` title="${o}"`:""} target="_blank" rel="noopener noreferrer">${s}</a>`}),n=n.replace(/&lt;((?:https?|mailto):[^\s&]+)&gt;/g,(r,s)=>{const i=Ks(s);return i===null?r:`<a href="${i}" target="_blank" rel="noopener noreferrer">${i}</a>`}),n=n.replace(/~~([\s\S]+?)~~/g,"<del>$1</del>"),n=n.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__([\s\S]+?)__/g,"<strong>$1</strong>"),n=n.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g,"$1<em>$2</em>"),n=n.replace(/(^|[\s(])_(?!\s)([^_]+?)_(?=$|[\s).,;:!?])/g,"$1<em>$2</em>"),n=n.replace(/ {2,}\n/g,`<br>
`),n.replace(xb,(r,s)=>t[Number(s)]??"")}function Ao(e){return e.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}const _b=e=>{const t=e.startsWith(":"),n=e.endsWith(":");return t&&n?' style="text-align:center"':n?' style="text-align:right"':t?' style="text-align:left"':""},Sb=[/^ {0,3}#{1,6}\s+\S/,/^ {0,3}>[ \t]+\S/,/^ {0,3}[-*+][ \t]+\S/,/^ {0,3}\d+[.)][ \t]+\S/,/^ {0,3}(?:```|~~~)/,Va],Eb=[/\*\*(?!\s)[^*\n]+\*\*/,/~~(?!\s)[^~\n]+~~/,/`[^`\n]+`/,/!?\[[^\]\n]*\]\([^)\s]+\)/];function Tb(e){return typeof e!="string"||e.trim()===""?null:!Ib.test(e)&&Fc(e)?"markdown":Fd(e)?"html":Fc(e)?"markdown":null}const Ib=/^\s*<\/?[a-z][a-z0-9]*(\s|\/?>)/i;function Fc(e){if(typeof e!="string"||e.trim()==="")return!1;const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.some(n=>Sb.some(r=>r.test(n)))||Eb.some(n=>n.test(e))?!0:t.some((n,r)=>r>0&&Bd.test(n)&&n.includes("-")&&(t[r-1]??"").includes("|"))}function wi(e){if(e==null)return"";const t=typeof e=="string"?e:String(e);if(t.trim()==="")return"";const n=t.replace(/\r\n?/g,`
`).split(`
`),r=[];let s=0;const i=o=>{const a=[];for(;s<n.length&&o(n[s]);)a.push(n[s++]);return a};for(;s<n.length;){const o=n[s];if(o.trim()===""){s++;continue}const a=Wo.exec(o);if(a){const p=a[1].slice(0,3);s++;const g=i(w=>!w.trim().startsWith(p));s<n.length&&s++;const y=a[2]?` class="language-${a[2]}"`:"";r.push(`<pre><code${y}>${Ka(g.join(`
`))}</code></pre>`);continue}if(qd.test(o)){const p=i(y=>y.trim()!==""),g=wb(p.join(`
`));g.trim()!==""&&r.push(g);continue}const u=Yo.exec(o);if(u){const p=u[1].length;r.push(`<h${p}>${Kn(u[2].replace(/\s+#+\s*$/,""))}</h${p}>`),s++;continue}if(Va.test(o)){r.push("<hr>"),s++;continue}if(Qo.test(o)){const p=i(g=>Qo.test(g)||g.trim()!=="");r.push(`<blockquote>${wi(p.map(g=>g.replace(/^\s*>\s?/,"")).join(`
`))}</blockquote>`);continue}if(o.includes("|")&&s+1<n.length&&Bd.test(n[s+1])&&n[s+1].includes("-")){const p=Ao(o),g=Ao(n[s+1]).map(_b);s+=2;const y=i(x=>x.trim()!==""&&x.includes("|")),w=p.map((x,T)=>`<th${g[T]??""}>${Kn(x)}</th>`).join(""),$=y.map(x=>`<tr>${Ao(x).map((T,S)=>`<td${g[S]??""}>${Kn(T)}</td>`).join("")}</tr>`);r.push(`<table><thead><tr>${w}</tr></thead><tbody>${$.join("")}</tbody></table>`);continue}if(Ud.test(o)){const p=i(g=>g.trim()!==""&&!Wo.test(g)&&!Yo.test(g));r.push(Hd(p));continue}const d=i(p=>p.trim()!==""&&!Cb(p));if(d.length===0){r.push(`<p>${Kn(o)}</p>`),s++;continue}r.push(`<p>${Kn(d.join(`
`))}</p>`)}return r.join(`
`)}function Hd(e){const t=[];let n=null,r=null;for(const o of e){const a=/^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$/.exec(o);if(!a){t[t.length-1]?.text.push(o.trim());continue}const u=a[1].length;if(r??=u,u>r&&t.length>0){t[t.length-1].children.push(o.slice(Math.min(u,r+2)));continue}n??=a[3]!==void 0,t.push({text:[a[4]],children:[],indent:u})}const s=n?"ol":"ul",i=t.map(o=>`<li>${Kn(o.text.join(`
`))}${o.children.length>0?Hd(o.children):""}</li>`).join("");return`<${s}>${i}</${s}>`}const Xo={markdownToHtml:wi},Kd=Object.keys(Xo),Uc=new Map;function Ab(e){const t=Uc.get(e);if(t)return t;const n=new Function("row",...Kd,"easydb",`${e}
return render(row);`);return Uc.set(e,n),n}function Rb(){return[...Kd.map(e=>Xo[e]),Xo]}function Ga(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=Ab(e)}catch(r){return{ok:!1,label:"compile error",message:Bc(r)}}try{return{ok:!0,value:n(t,...Rb())}}catch(r){return{ok:!1,label:"runtime error",message:Bc(r)}}}function Bc(e){return e instanceof Error?e.message:String(e)}const Ob=new Set(["rowid"]);function Wa(e){return Ob.has(e.trim().toLowerCase())}function Db(e){const t=new Map,n=(s,i)=>{if(!s||!i)return;let o=t.get(s);o||t.set(s,o=new Set),o.add(i)};for(const s of e.columns)s.from.kind==="source"&&n(s.from.alias,s.from.field);for(const s of e.sources)for(const i of s.join?.on??[])n(s.alias,i.field),n(i.eqAlias,i.eqField);const r={};for(const s of e.sources)r[s.alias]=[...t.get(s.alias)??[]];return r}function Pb(e,t){const n=e.sources[0];if(!n)return{rows:[],provenance:new Map};let s=(t[n.alias]??[]).map(d=>({[n.alias]:d}));for(let d=1;d<e.sources.length;d++){const p=e.sources[d];if(!p)continue;const g=t[p.alias]??[],y=p.join,w=[];for(const $ of s){const x=y?g.filter(T=>y.on.every(S=>Mb(T.data[S.field],$[S.eqAlias]?.data[S.eqField]))):[];if(x.length>0)for(const T of x)w.push({...$,[p.alias]:T});else y?.type==="left"&&w.push({...$,[p.alias]:void 0})}s=w}const i=[],o=new Map,a=new Map,u=e.limit!=null&&e.limit>0?e.limit:1/0;for(const d of s){if(i.length>=u)break;const p=d[n.alias];if(!p)continue;const g=Lb(e.columns,d);if(!jb(g,e.filters))continue;const y=a.get(p.id)??0;a.set(p.id,y+1);const w=`${p.id}#${y}`,$={};for(const[x,T]of Object.entries(d))T&&($[x]=T.id);o.set(w,$),i.push({id:w,tableId:"",data:g,updatedAt:Nb(d)})}return{rows:i,provenance:o}}function Lb(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const s=t[r.from.alias]?.data[r.from.field];n[r.field]=s===void 0?null:s}for(const r of e)if(r.from.kind==="script"){const s=Ga(r.from.script,n);n[r.field]=s.ok?s.value:void 0}return n}function Mb(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function jb(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const s=e[n];if(!(s==null?"":String(s)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function Nb(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function yi(e){const t=new Set(e.sources.map(r=>r.alias)),n=new Set;for(const r of e.columns)r.from.kind==="source"&&t.has(r.from.alias)&&n.add(r.field);return n}function Vd(e,t,n=[],r=[]){const s=yi(e),i=new Map(n.map(p=>[p.field,p])),o=new Set(r),a=new Map;for(const p of e.columns)!o.has(p.field)&&!a.has(p.field)&&a.set(p.field,p);const u=[];for(const p of n)a.has(p.field)&&!u.includes(p.field)&&u.push(p.field);for(const p of a.keys())u.includes(p)||u.push(p);const d=[];for(const p of u){const g=a.get(p);if(!g)continue;const y=i.get(g.field);let w;if(y)w={...y};else if(g.from.kind==="source"){const $=g.from,x=(t[$.alias]??[]).find(T=>T.field===$.field);w=x?{...x,field:g.field}:{field:g.field,label:g.label??g.field,type:g.type??"string"},Wa($.field)&&(w.hidden=!0)}else w={field:g.field,label:g.label??g.field,type:g.type??"string"},w.script=g.from.script;s.has(g.field)?delete w.readonly:w.readonly=!0,d.push(w)}return d}function zb(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function Fb(e,t){const n=zb(e),r={},s=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],i=[];for(const o of s){const a=n.get(o.field);a&&i.push({field:a,asc:o.asc})}if(i.length>0){r.sortBy=i;const o=i[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[a,u]of Object.entries(t.filters)){const d=n.get(a);d&&u&&(o[d]=u)}Object.keys(o).length>0&&(r.filters=o)}return r}function Ub(e,t){return t.get(e.tableName)}function Bb(e,t){const n=new Map(t.map(i=>[i.id,i])),r=new Map;for(const i of t)r.has(i.name)||r.set(i.name,i);const s=(i,o)=>{if(o.has(i))return!0;const a=n.get(i);if(a?.source?.type!=="projection")return!1;const u=a.source.config;if(!u||!Array.isArray(u.sources))return!1;const d=new Set(o).add(i);for(const p of u.sources){const g=Ub(p,r);if(g&&s(g.id,d))return!0}return!1};return s(e,new Set)}const Tr=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),Ro=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,qc=e=>e==="id"||e.endsWith("id");function qb(e,t){const n=Tr(e.field),r=Tr(t.field);if(!n||!r)return 0;const s=Tr(e.table)===Tr(t.table);if(n===r)return s||n==="id"?0:n.endsWith("id")?9:7;const i=(a,u,d)=>{if(a!=="id"||!d.endsWith("id")||d.length<=2)return 0;const p=d.slice(0,-2),g=Tr(u);return p===g||p===Ro(g)||Ro(p)===Ro(g)?9:5},o=Math.max(i(n,e.table,r),i(r,t.table,n));return o>0?o:e.isPk&&qc(r)||t.isPk&&qc(n)?6:0}function Hb(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),s=new Set(e.pks??[]),i=o=>{let a=null,u=0;for(const d of t){const p=new Set(d.pks??[]);for(const g of e.fields)for(const y of d.fields){if(o&&r.has(`${d.alias}\0${y}`))continue;const w=qb({table:e.tableName,field:g,isPk:s.has(g)},{table:d.tableName,field:y,isPk:p.has(y)});w>u&&(u=w,a={thisField:g,otherAlias:d.alias,otherField:y})}}return a};return i(!0)??i(!1)}function Kb(e){const t=e.lastIndexOf("#");return t>=0?e.slice(0,t):e}function Vb(e,t,n,r){const s=e.columns.find(u=>u.field===n);if(!s||s.from.kind!=="source")return null;const i=s.from.alias;if(!e.sources.some(u=>u.alias===i))return null;const o=e.sources[0]?.alias===i,a=r?.[i]??(o?Kb(t):void 0);return a?{alias:i,rowId:a,field:s.from.field}:null}async function Ya(e,t,n,r){const s=n.spec.sources.map(p=>({source:p,table:r.resolve(p.tableName)}));if(s.some(p=>!p.table))return null;const i={...n.spec,sources:s.map(({source:p,table:g})=>({...p,tableName:g.name}))},o={};for(const{source:p,table:g}of s)o[p.alias]=g?.columns??[];const a=Vd(i,o,[],[]),u=cn(r.taken,n.name),d={id:Se(),workspaceId:t,name:u,code:Pe(u),columns:a,view:"table",source:{type:"projection",config:i},readonly:yi(i).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...i.filters?{filters:i.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(d),d}const Gb=Object.freeze(Object.defineProperty({__proto__:null,createProjectionTable:Ya},Symbol.toStringTag,{value:"Module"})),Gd="__id";function Wd(e){const t=[];let n="",r,s=0;for(;s<e.length;){const i=e[s],o=e[s+1];if(i==="'"||i==='"'){const a=Qa(e,s,i);n+=e.slice(s,a),s=a;continue}if(i==="-"&&o==="-"){let a="";for(s+=2;s<e.length&&e[s]!==`
`;)a+=e[s++];const u=/^\s*projection:\s*(.+?)\s*$/i.exec(a);u?.[1]&&n.trim()===""&&(r=u[1]);continue}if(i==="/"&&o==="*"){for(s+=2;s<e.length&&!(e[s]==="*"&&e[s+1]==="/");)s++;s+=2;continue}if(i===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,s++;continue}n+=i,s++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function Qa(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function Wt(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function Yd(e,t){const n=[];let r=0,s="",i=0;for(;i<e.length;){const o=e[i];if(o==="'"||o==='"'){const a=Qa(e,i,o);s+=e.slice(i,a),i=a;continue}if(o==="("?r++:o===")"&&r--,r===0){const a=t(e,i);if(a>0){n.push(s),s="",i+=a;continue}}s+=o,i++}return n.push(s),n}function Qn(e,t){return Yd(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function Qd(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return Yd(e,(r,s)=>/\s/.test(r[s]??"")?n.exec(r.slice(s,s+t.length+32))?.[0].length??0:0)}function Xd(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const s=e[r];if(s==="'"||s==='"'){r=Qa(e,r,s)-1;continue}if(s==="(")n++;else if(s===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function Jd(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):fi(t)?t:/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function Zd(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function Wb(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=Xd(e);if(n==null)return null;const r=[];for(const s of Qn(n,",")){const i=s.trim();if(!i||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(i))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(i);if(!o?.[1])continue;const a=Wt(o[1]);if(a===Gd)continue;const u=o[2]??"",d=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(u.trim())?.[1]??"TEXT",p={field:a,label:a,type:Zd(d)};/\bNOT\s+NULL\b/i.test(u)&&(p.notnull=!0),(/\bUNIQUE\b/i.test(u)||/\bPRIMARY\s+KEY\b/i.test(u))&&(p.unique=!0),r.push(p)}return{name:Wt(t[1]),columns:r,rows:[]}}function Yb(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=Wt(t[1]),r=t[2]?Qn(t[2].slice(1,-1),",").map(o=>Wt(o)):[],s=[];let i=(t[3]??"").trim();for(;i.startsWith("(");){const o=Xd(i);if(o==null)break;const a=Qn(o,",").map(d=>Jd(d)),u={};a.forEach((d,p)=>{const g=r[p]??`col${p+1}`;g!==Gd&&(u[g]=d)}),s.push(u),i=i.slice(o.length+2).trim(),i.startsWith(",")&&(i=i.slice(1).trim())}return{table:n,rows:s}}function Hc(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=Wt(t[1]);return{table:n,alias:t[2]?Wt(t[2]):n}}function Hr(e){return Qn(e,".").map(Wt)}function Xa(e,t,n){const r=t.filter(s=>(n.get(s.tableName.toLowerCase())??[]).includes(e));return r.some(s=>s.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function Qb(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const s=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);s&&(n=Number(s[1]),t=t.slice(0,s.index));let i;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(i=o[1],t=t.slice(0,o.index));let a;const u=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return u?.[1]&&(a=u[1],t=t.slice(0,u.index)),{from:t,limit:n,orderBy:i,where:a}}function Xb(e,t,n,r,s){const i=[],o=a=>a.length===2?a[0]??"":Xa(a[0]??"",n,r);for(const a of Qd(e,"AND")){const u=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(a);if(!u?.[1]||!u[2]){s.push(`ON ${a.trim()}`);continue}const d=Hr(u[1]),p=Hr(u[2]),g=o(d)===t.alias,y=g?d:p,w=g?p:d;if(o(y)!==t.alias){s.push(`ON ${a.trim()} — neither side names ${t.alias}`);continue}i.push({field:y.length===2?y[1]??"":y[0]??"",eqAlias:w.length===2?w[0]??"":o(w),eqField:w.length===2?w[1]??"":w[0]??""})}return i}function Jb(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,s=[],i=[];let o=0;for(let d=r.exec(e);d;d=r.exec(e))s.push(e.slice(o,d.index)),i.push((d[1]??"INNER").toUpperCase()),o=d.index+d[0].length;s.push(e.slice(o));const a=Hc(s[0]??"");if(!a.table)return null;const u=[{alias:a.alias,tableName:a.table}];for(let d=1;d<s.length;d++){const p=s[d]??"",g=/\s+ON\s+([\s\S]+)$/i.exec(p),y=Hc(g?p.slice(0,g.index):p);if(!y.table)continue;const w=i[d-1]??"INNER";if(w==="CROSS"||!g?.[1]){n.push(`${w} JOIN ${y.table} — no ON predicate to model`),u.push({alias:y.alias,tableName:y.table});continue}(w==="RIGHT"||w==="FULL")&&n.push(`${w} JOIN ${y.table} — imported as LEFT JOIN (the closest a projection can express)`);const $=[...u,{alias:y.alias,tableName:y.table}];u.push({alias:y.alias,tableName:y.table,join:{type:w==="INNER"?"inner":"left",on:Xb(g[1],y,$,t,n)}})}return u}function Zb(e,t,n,r){const s=[];for(const i of Qn(e,",")){const o=i.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const a=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),u=(a?.[1]??o).trim(),d=Hr(u),p=Wt(a?.[2]??d[d.length-1]??u);if(/^NULL$/i.test(u)){s.push({field:p,from:{kind:"script",script:nw}});continue}d.length===2&&d[0]&&d[1]?s.push({field:p,from:{kind:"source",alias:d[0],field:d[1]}}):d.length===1&&d[0]&&/^[\w$]+$/.test(d[0])?s.push({field:p,from:{kind:"source",alias:Xa(d[0],t,n),field:d[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return s}function ew(e,t){const n={};if(!e)return n;for(const r of Qd(e,"AND")){const s=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),i=s?.[1]?eh(t.columns,Hr(s[1]),t.sources,t.schema):void 0;if(!s||!i){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[i.field]=(s[2]??"").replace(/''/g,"'")}return n}function tw(e,t){const n=[];for(const r of Qn(e??"",",")){const s=r.trim();if(!s)continue;const[i,o]=s.split(/\s+/),a=eh(t.columns,Hr(i??""),t.sources,t.schema);if(!a){t.unsupported.push(`ORDER BY ${s}`);continue}n.push({field:a.field,asc:!/^DESC$/i.test(o??"")})}return n}function Kc(e,t,n,r){const s=[],i=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(i);if(!o)return null;const{from:a,limit:u,orderBy:d,where:p}=Qb(o[3]??""),g=u??(o[1]?Number(o[1]):void 0),y=Jb(a,n,s);if(!y)return null;const w=Zb(o[2]??"",y,n,s),$={columns:w,sources:y,schema:n,unsupported:s},x=ew(p,$),T=tw(d,$),S={version:1,sources:y,columns:w};return Object.keys(x).length>0&&(S.filters=x),g!=null&&g>0&&(S.limit=g),{projection:{name:r||t,spec:S,...T.length>0?{sortBy:T}:{}},unsupported:s}}const nw=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function eh(e,t,n,r){const s=t.length===2?t[0]:Xa(t[0]??"",n,r),i=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===s&&o.from.field===i)??e.find(o=>o.field===i)}function Jr(e){const t=new Map,n=[],r=[],s=new Map,i=o=>{s.set(o.name.toLowerCase(),o.columns.map(a=>a.field))};for(const o of Wd(e)){const a=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(a)){const u=Wb(a);if(!u){r.push(Ir(a));continue}const d=t.get(u.name);t.set(u.name,{...u,rows:d?.rows??[]}),i(u);continue}if(/^INSERT\s+/i.test(a)){const u=Yb(a);if(!u){r.push(Ir(a));continue}const d=t.get(u.table);if(d)d.rows.push(...u.rows);else{const p={name:u.table,columns:rw(u.rows),rows:u.rows};t.set(u.table,p),i(p)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(a)){const u=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(a),d=u?.[1]?Wt(u[1]):"",p=u?.[2]?Kc(u[2],d||"view",s,d):null;p?(n.push(p.projection),r.push(...p.unsupported)):r.push(Ir(a));continue}if(/^SELECT\b/i.test(a)){const u=Kc(a,"",s,o.name);u?(n.push(u.projection),r.push(...u.unsupported)):r.push(Ir(a));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(a)||r.push(Ir(a))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function Ir(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function rw(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(i=>i[n]).filter(i=>i!=null),s=r.length===0?"string":r.every(i=>typeof i=="number")?"number":r.every(i=>typeof i=="boolean")?"boolean":"string";return{field:n,label:n,type:s}})}const sw=Object.freeze(Object.defineProperty({__proto__:null,parseLiteral:Jd,parseSqlScript:Jr,splitStatements:Wd,sqlTypeToColumnType:Zd},Symbol.toStringTag,{value:"Module"})),iw={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function ow(e){e.ui.registerImporter(Ja),e.ui.registerDropHandler(async t=>{const n=cw(t).filter(uw);if(n.length===0)return!1;t.preventDefault();for(const r of n)await lw(e,r);return!0})}const Ja={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return Jr(await aw(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function aw(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${Gt(t.url)}…`):Promise.resolve(t.text??"")}function Za(e){return Jr(e).projections.length>0}async function el(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const s=Jr(t),i={tables:[],projections:[],rowCount:0,unsupported:s.unsupported},o=n.target??{kind:"new"},a=o.kind==="new"||s.tables.length===1;a||i.unsupported.push(`"Import into" was not applied — this script defines ${s.tables.length} tables, and an append/replace names only one destination`);const u=new Map;for(const w of s.tables){const $=await Id(e,w.name,(async function*(){yield{columns:w.columns,rows:w.rows}})(),{workspaceId:r,importerId:"sql",target:a?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:x=>n.editColumns(x,w.name)}:{}});$&&(u.set(w.name,$.tableName),i.tables.push($.tableName),i.rowCount+=$.rowCount)}const d=await e.store.tables.find({workspaceId:r}),p=new Map;for(const w of d)p.has(w.name)||p.set(w.name,w);const g=new Map;for(const w of d)g.has(w.name.toLowerCase())||g.set(w.name.toLowerCase(),w);const y=new Set([...d.map(w=>w.name),...i.tables]);for(const w of s.projections){const $=await Ya(e,r,w,{resolve:x=>{const T=u.get(x);return(T?p.get(T):void 0)??p.get(x)??g.get(x.toLowerCase())},taken:y});if(!$){i.unsupported.push(`projection "${w.name}" — its source tables are not in this workspace`);continue}p.set($.name,$),g.set($.name.toLowerCase(),$),y.add($.name),i.projections.push($.name)}return i}function tl(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const s=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${s}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function lw(e,t){const n=await t.text();try{if(Za(n)){tl(e,await el(e,n),t.name);return}const r=await gi(e,Ja,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=r.landed.reduce((i,o)=>i+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${s.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function cw(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}function uw(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const dw=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:Za,init:ow,meta:iw,reportSqlRestore:tl,restoreSqlScript:el,sqlImporterSpec:Ja},Symbol.toStringTag,{value:"Module"}));var hw=Object.defineProperty,fw=Object.getOwnPropertyDescriptor,nl=(e,t,n,r)=>{for(var s=r>1?void 0:r?fw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&hw(t,n,s),s};let Ps=null;function pw(){return Ps||(Ps=document.createElement("anchored-menu"),document.body.appendChild(Ps)),Ps}let An=class extends ke{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return pw().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?k`
      <div class="menu" role="menu">
        ${this.items.map(e=>k`
            <button role="menuitem" class=${e.danger?"danger":""} @click=${()=>this.finish(e.id)}>
              ${e.icon?k`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:k``}};An.styles=[xt,_e`
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
        /* A value list (a view's filter chip offers every value of its field) can
           be hundreds of entries long, so the menu scrolls rather than growing
           past the viewport. Short menus are unaffected. */
        max-height: min(60vh, 420px);
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
    `];nl([F()],An.prototype,"items",2);nl([F()],An.prototype,"shown",2);An=nl([Ee("anchored-menu")],An);const Xn=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return An}},Symbol.toStringTag,{value:"Module"})),Jo='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',mw={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:Jo,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function gw(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:Jo,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>Vc(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:Jo,keywords:["datasette","live","remote","backend"],run:t=>Vc(t)})}async function bw(){const{registries:e}=await ae();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function Vc(e,t){const n=await bw();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const s=t?.getBoundingClientRect(),i=s?await An.open(s,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!i)return;r=s?n.find(o=>o.id===i):n.find(o=>o.label===i)}if(r)try{await r.connect(e)}catch(s){await e.ui.dialogs.alert(s?.message??String(s),`Connect ${r.label} failed`)}}const ww=Object.freeze(Object.defineProperty({__proto__:null,init:gw,meta:mw},Symbol.toStringTag,{value:"Module"}));function Gc(e,t){return JSON.stringify(t.map(n=>e[n]??null))}function yw(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function th(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:s,deletedRemoteFields:i=[]}=e,o=new Set(i),a=new Set(s),u=L=>{const W={...L};for(const z of o)delete W[z];return W},d=new Set(t.flatMap(L=>Object.keys(L.data))),p=[...new Set(n.flatMap(L=>Object.keys(L)))].filter(L=>d.has(L)&&!o.has(L)&&!a.has(L)).sort(),y=r.length>0&&n.every(L=>yw(L,r))?"pk":p.length>0?"content":"none";if(y==="none")return{data:n.map(u),merged:!1,strategy:y,droppedUserRows:t.filter(L=>Wc(L.data,s)).length};const w=y==="pk"?r:p,$=new Map;for(const L of t){const W=Gc(L.data,w);$.has(W)||$.set(W,L)}const x=new Set,T=n.map(L=>{const W=u(L),z=Gc(L,w),re=$.get(z);if(re){x.add(z);for(const G of s)Object.prototype.hasOwnProperty.call(re.data,G)&&(W[G]=re.data[G])}return W});let S=0;for(const[L,W]of $)!x.has(L)&&Wc(W.data,s)&&(S+=1);return{data:T,merged:!0,strategy:y,droppedUserRows:S}}function Wc(e,t){return t.some(n=>{const r=e[n];return r!=null&&r!==""})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nh=Symbol.for(""),vw=e=>{if(e?.r===nh)return e?._$litStatic$},Yc=e=>({_$litStatic$:e,r:nh}),Qc=new Map,$w=e=>(t,...n)=>{const r=n.length;let s,i;const o=[],a=[];let u,d=0,p=!1;for(;d<r;){for(u=t[d];d<r&&(i=n[d],(s=vw(i))!==void 0);)u+=s+t[++d],p=!0;d!==r&&a.push(i),o.push(u),d++}if(d===r&&o.push(t[r]),p){const g=o.join("$$lit$$");(t=Qc.get(g))===void 0&&(o.raw=o,Qc.set(g,t=o)),n=a}return e(t,...n)},Xc=$w(k);function xw(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(a=>a==="AND"||a==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(a=>a.toLowerCase())};const s=[];let i=[];for(const a of n)a==="OR"?(s.push(i),i=[]):a==="AND"||i.push(a.toLowerCase());s.push(i);const o=s.filter(a=>a.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function kw(e,t,n){const r=xw(t);if(r.kind==="boolean")return e.filter(u=>r.groups.some(d=>d.every(p=>n(u,p))));const{phrase:s,words:i}=r;if(i.length<=1)return s===""?e:e.filter(u=>n(u,s));const o=e.filter(u=>n(u,s));if(o.length>0)return o;const a=e.filter(u=>i.every(d=>n(u,d)));return a.length>0?a:e.filter(u=>i.some(d=>n(u,d)))}const Cw=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Kr(e,t,n){const r=new Map,s=new Map;for(const u of n)r.set(u.field.toLowerCase(),u.field),u.label&&r.set(u.label.toLowerCase(),u.field),s.set(u.field,u.type);const i=[...r.keys()].filter(Boolean).sort((u,d)=>d.length-u.length);let o=t;return i.length>0&&(o=o.replace(new RegExp(`(^|\\s)(${i.map(Cw).join("|")}):\\s+`,"gi"),"$1$2:")),kw(e,o,(u,d)=>{const p=d.indexOf(":");if(p>0){const g=r.get(d.slice(0,p));if(g)return Ur(u.data[g],d.slice(p+1),{type:s.get(g)})}return Object.values(u.data).some(g=>g!=null&&String(g).toLowerCase().includes(d))})}function _w(e,t,n,r){const s=a=>a==null?0:a===""?1:2,i=s(e),o=s(t);return i!==2||o!==2?(i-o)*r:Sw(e,t,n)*r}function Sw(e,t,n){switch(n){case"number":{const r=Number(e),s=Number(t);return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}case"boolean":return(e?1:0)-(t?1:0);case"array":return Ec(e).localeCompare(Ec(t),void 0,{numeric:!0,sensitivity:"base"});case"date":{const r=new Date(String(e)).getTime(),s=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function rh(e,t,n){if(t.length===0)return e;const r=t.map(i=>({field:i.field,factor:i.asc?1:-1,type:n.find(o=>o.field===i.field)?.type??"string"})),s=[...e];return s.sort((i,o)=>{for(const a of r){const u=_w(i.data[a.field],o.data[a.field],a.type,a.factor);if(u!==0)return u}return 0}),s}function Jc(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function Ew(e,t){const n=e.trim();if(n==="")return!0;const r=n.split(/\s+/);if(r.length!==1)return!1;const s=r[0]??"",i=s.indexOf(":");if(i>0){const o=s.slice(0,i).toLowerCase();if(t.some(u=>u.field.toLowerCase()===o||u.label?.toLowerCase()===o))return!1}return!0}function sh(e){return e.filter(t=>t.filterable!==!1).map(t=>({field:t.field,label:t.label}))}function ih(e){const t=new Set(e.columns.filter(n=>n.filterable===!1).map(n=>n.field));return Object.entries(e.filters??{}).filter(([n,r])=>r&&r.trim().length>0&&!t.has(n))}function Zc(e,t){let n=e;const r=ih(t);if(r.length>0){const u=new Map(t.columns.map(d=>[d.field,d.type]));n=n.filter(d=>r.every(([p,g])=>Ur(d.data[p],g,{type:u.get(p)})))}const s=(t.search??"").trim();s!==""&&(n=Kr(n,s,sh(t.columns))),n=rh(n,t.sort??[],t.columns);const i=n.length,o=Math.max(0,t.offset??0),a=t.limit!=null&&t.limit>0?o+t.limit:void 0;return(o>0||a!=null)&&(n=n.slice(o,a)),{rows:Tw(n,t.fields),total:i}}function Tw(e,t){if(!t||t.length===0)return e;const n=new Set(t);return e.map(r=>({...r,data:Object.fromEntries(Object.entries(r.data).filter(([s])=>n.has(s)))}))}async function rl(e,t,n=0){const r=(t.search??"").trim(),s=Ew(r,sh(t.columns));if(!e.query){const p=await e.find(),g=n>0&&p.length>=n;return{...Zc(g?p.slice(0,n):p,t),...g?{truncated:!0}:{}}}const i={...t.fields?{fields:t.fields}:{},...Object.keys(t.filters??{}).length>0?{filters:Object.fromEntries(ih(t))}:{},...s&&r?{search:r}:{},...t.sort&&t.sort.length>0?{sort:[...t.sort]}:{}},o=s;o?(t.offset!=null&&(i.offset=t.offset),t.limit!=null&&(i.limit=t.limit)):n>0&&(i.limit=n);const a=await e.query(i);if(o&&!a.partial)return a;const u=Zc(a.rows,t),d=!o&&i.limit!=null&&a.rows.length>=i.limit;return{...u,...a.partial?{partial:!0}:{},...a.truncated||d?{truncated:!0}:{}}}var Iw=Object.defineProperty,Aw=Object.getOwnPropertyDescriptor,ir=(e,t,n,r)=>{for(var s=r>1?void 0:r?Aw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Iw(t,n,s),s};function Oo(e){return an([{...e,negate:!1}])}let at=class extends ke{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.exactValues=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,s,i){return this.values=t,this.blanks=r,this.onChange=s??null,this.exactValues=i?.exact===!0,this.states=new Map(Pn(n??"").map(o=>[Oo(o),{state:o.negate?"not":"on",token:o}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e,t=this.exactValues){const n=t?{term:e,negate:!1,exact:!0}:{term:e,negate:!1},r=Oo(n),s=new Map(this.states),i=s.get(r);i===void 0?s.set(r,{state:"on",token:n}):i.state==="on"?s.set(r,{state:"not",token:i.token}):s.delete(r),this.states=s;const o=[...s.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=an(o),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),at.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),at.instance===this&&(at.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=(o,a=this.exactValues)=>this.states.get(Oo(a?{term:o,negate:!1,exact:!0}:{term:o,negate:!1}))?.state,s=o=>k` <span class=${`cb${o?` ${o}`:""}`}>${o==="on"?"✓":o==="not"?"✕":""}</span> `,i=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return k`
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
                  <li class="blanks" title=${i(r("NULL",!1))} @click=${()=>this.cycle("NULL",!1)}>
                    <span class="left">
                      ${s(r("NULL",!1))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(o=>{const a=r(o.value);return k`
                <li title=${i(a)} @click=${()=>this.cycle(o.value)}>
                  <span class="left">
                    ${s(a)}
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
    `}};at.instance=null;at.styles=[xt,_e`
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
    `];ir([wt({type:Array})],at.prototype,"values",2);ir([wt({type:Number})],at.prototype,"blanks",2);ir([wt({type:String})],at.prototype,"current",2);ir([F()],at.prototype,"search",2);ir([F()],at.prototype,"states",2);at=ir([Ee("filter-popover")],at);var Rw=Object.defineProperty,Ow=Object.getOwnPropertyDescriptor,Pt=(e,t,n,r)=>{for(var s=r>1?void 0:r?Ow(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Rw(t,n,s),s};let gt=class extends ke{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return k`
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
        ${this.value?k`<button type="button" class="clear" title="Clear filter" tabindex="-1" @mousedown=${r=>r.preventDefault()} @click=${this.onClear}>×</button>`:ie}
      </div>
      ${t?k`<ul class="dropdown" style=${n} @mousedown=${r=>r.preventDefault()}>
            ${e.map((r,s)=>k` <li class=${s===this.highlightIdx?"highlighted":""} @mousedown=${i=>i.preventDefault()} @click=${()=>this.onPick(r)}>${r}</li> `)}
          </ul>`:ie}
    `}};gt.styles=_e`
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
  `;Pt([wt({type:String})],gt.prototype,"value",2);Pt([wt({type:Array})],gt.prototype,"options",2);Pt([wt({type:String})],gt.prototype,"placeholder",2);Pt([F()],gt.prototype,"open",2);Pt([F()],gt.prototype,"highlightIdx",2);Pt([F()],gt.prototype,"dropTop",2);Pt([F()],gt.prototype,"dropLeft",2);Pt([F()],gt.prototype,"dropMinWidth",2);Pt([F()],gt.prototype,"editing",2);Pt([Bt("input")],gt.prototype,"inputEl",2);gt=Pt([Ee("filter-combobox")],gt);const oh=50,Dw=500,Pw=100;function ni(e){return typeof e=="string"?e:String(e)}function Lw(e,t){return t==="array"?Dt(e):e==null||e===""?[]:[ni(e)]}function ah(e,t,n){const r=n?.maxLen??oh;if(e.length===0)return!1;for(const s of e.slice(0,Pw)){const i=s.data[t];if(i!=null){if(n?.type==="array"){if(Dt(i).some(o=>o.length>=r))return!1;continue}if(ni(i).length>=r)return!1}}return!0}function Mw(e,t,n){const r=n?.maxLen??oh,s=n?.maxOptions??Dw,i=new Set;for(const o of e)for(const a of Lw(o.data[t],n?.type))if(!(a.length>=r)&&(i.add(a),i.size>=s))return[...i].sort();return[...i].sort()}function lh(e,t,n){const r=new Map;let s=0;for(const o of e){const a=o.data[t],u=n?.type==="array"?Dt(a):a==null||ni(a).trim()===""?[]:[ni(a)];if(u.length===0){s++;continue}for(const d of u)r.set(d,(r.get(d)??0)+1)}let i=[...r.entries()].map(([o,a])=>({value:o,count:a})).sort((o,a)=>a.count-o.count||o.value.localeCompare(a.value));return n?.type==="boolean"&&(i=[...["true","false"].map(a=>({value:a,count:r.get(a)??0})),...i.filter(a=>a.value!=="true"&&a.value!=="false")]),{values:i,blanks:s}}const ch="grid";async function jw(e){return await e.get(ch,"sortDescFirst")!==!1}function Nw(e,t,n={}){const r=n.additive===!0,s=n.descFirst!==!0,i=e.find(u=>u.field===t),o=e.length===1&&e[0]?.field===t;if(!r&&!o)return[{field:t,asc:s}];const a=r?e.filter(u=>u.field!==t):[];return i?i.asc===s?[...a,{field:t,asc:!s}]:[...a]:[...a,{field:t,asc:s}]}const ri="easydb:visible-count";function uh(e,t,n){e&&document.dispatchEvent(new CustomEvent(ri,{detail:{key:e,count:t,total:n}}))}function dh(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const Zo="easydb:import-progress";function zw(e,t){if(t<=0)return` (${e.toLocaleString()})`;const n=Math.min(100,Math.round(e/t*100));return` (${e.toLocaleString()}/${t.toLocaleString()} · ${n}%)`}const hh="#dc2626",fh="cell-invalid",Fw=`border-color:${hh};background:#fef2f2`;function sl(e,t){e.classList.add(fh),e.style.border=`1px solid ${hh}`,e.style.background="#fef2f2",t&&(e.title=t)}function Uw(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return ph(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";case"array":return Dt(e).length===0?"empty":"ok";default:return"ok"}}const Bw=/^\s*(true|1)\s*$/i,qw=/^\s*(false|0)\s*$/i;function ph(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":Bw.test(e)?"true":qw.test(e)?"false":"invalid":"invalid"}var Hw=Object.defineProperty,Kw=Object.getOwnPropertyDescriptor,De=(e,t,n,r)=>{for(var s=r>1?void 0:r?Kw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Hw(t,n,s),s};const Vw=200,Gw=250,Ww=10,Do=32;let Ae=class extends ke{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.matchingTotal=0,this.tableTotal=0,this.truncated=!1,this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.rowColl=null,this.loadGeneration=0,this.reloadTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{const t=e.detail.query??"";t!==this.globalQuery&&(this.globalQuery=t,this.scheduleReload())},this.onTableSearch=e=>{const t=e.detail;if(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId){const n=t.query??"";if(n===this.localQuery)return;this.localQuery=n,this.scheduleReload()}},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.reloadTimer!=null&&(window.clearTimeout(this.reloadTimer),this.reloadTimer=null),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=Math.max(this.tableTotal,this.matchingTotal,this.rows.length);t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,uh(e,t,n))}async bind(){if(!this.tableId)return;const e=await ae(),t=await e.store.tables.findOne(this.tableId);t&&(this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(s=>s.id===this.tableId);r&&(this.tableColumns=r.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const r=n.find(s=>s.id===this.viewInstanceId);r&&(this.viewInst=r,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(s=>s.id===this.tableId);r&&this.applyTable(r)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers)),this.rowColl=e.store.rows(this.tableId),this.unsubscribe=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows())}async loadRows(){const e=this.rowColl;if(!e)return;const t=++this.loadGeneration,n=window.setTimeout(()=>this.loading=!0,Vw);try{const r=await rl(e,this.rowRequest(),Aa);if(t!==this.loadGeneration)return;if(this.rows=r.rows,this.matchingTotal=r.total,this.truncated=r.truncated===!0,e.count){const s=await e.count();if(t!==this.loadGeneration)return;this.tableTotal=s}else this.tableTotal=r.total}catch(r){if(t!==this.loadGeneration)return;this.rows=[],this.matchingTotal=0,this.tableTotal=0,(await ae()).api.ui.dialogs.toast(`Couldn't load rows: ${r?.message??String(r)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(n),t===this.loadGeneration&&(this.loading=!1)}}rowRequest(){const e=[this.localQuery.trim(),this.globalQuery.trim()].filter(Boolean).join(" ");return{columns:this.columns,filters:this.filters,...e?{search:e}:{},...this.sortSpecs.length>0?{sort:this.sortSpecs}:{}}}scheduleReload(){this.reloadTimer!=null&&window.clearTimeout(this.reloadTimer),this.reloadTimer=window.setTimeout(()=>{this.reloadTimer=null,this.loadRows()},Gw)}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=Jc(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const s=n[r.field];return typeof s=="number"?{...r,width:s}:r}),this.sortSpecs=Jc(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await ae();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const s=this.columns.find(i=>i.field===n);if(this.readOnly||s?.readonly===!0){e.api.ui.dialogs.toast(this.readOnly?"This table is read-only.":`“${s?.label??n}” is a read-only column.`,{kind:"warning",title:"Not saved"}),this.requestUpdate();return}if(s){const i=Xw(s,r,this.rows,t.id);if(i){await e.api.ui.dialogs.alert(i,`Cannot save ${s.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(i){await e.api.ui.dialogs.alert(i?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const s=String(n);return k`<input
      type="text"
      class=${fh}
      style=${Fw}
      title=${r}
      .value=${s}
      @keydown=${i=>this.cancelCellEdit(i,s)}
      @change=${i=>this.setCell(e,t.field,i.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?k`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?k``:e.type==="array"&&Dt(t).length===0?k``:e.type==="date"?k`${Ls(t)}`:e.type==="datetime"?k`${Ms(t).replace("T"," ")}`:k`${String(t)}`}renderScriptedCell(e,t){const n=Ga(t.script,e.data);if(!n.ok)return k`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return k`${n.value==null?"":String(n.value)}`;const s=Yc(r);return Xc`<${s}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      .sourceReadonly=${this.readOnly}
      @change=${this.readOnly?void 0:i=>this.setCell(e,t.field,i.detail.value)}
    ></${s}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,s=t.renderer,i=s?this.cellRenderers?.get(s):void 0;if(i){const o=Yc(i);return Xc`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        .sourceReadonly=${r}
        @change=${r?void 0:a=>this.setCell(e,t.field,a.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return tu(n,Ls(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):k`<input
          type="date"
          .value=${Ls(n)}
          @keydown=${o=>this.cancelCellEdit(o,Ls(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return tu(n,Ms(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):k`<input
          type="datetime-local"
          .value=${Ms(n)}
          @keydown=${o=>this.cancelCellEdit(o,Ms(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":{const o=n==null||n==="";return!o&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):k`<input
          type="number"
          .value=${o?"":String(n)}
          @keydown=${a=>this.cancelCellEdit(a,o?"":String(n))}
          @change=${a=>{const u=a.target.value;this.setCell(e,t.field,u===""?null:Number(u))}}
        />`}case"array":{const o=Dt(n).length===0?"":String(n);return k`<input
          type="text"
          .value=${o}
          @keydown=${a=>this.cancelCellEdit(a,o)}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}default:return k`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(n??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await ae();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=await ae(),r=Nw(this.sortSpecs,e,{additive:t,descFirst:await jw(n.api.settings)});this.sortSpecs=r,this.scheduleReload(),await this.persistSort(r)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await ae();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}typedFilters(e){return e.map(([t,n])=>({field:t,query:n,type:this.columns.find(r=>r.field===t)?.type}))}filteredRows(){const e=new Set(this.columns.filter(o=>o.filterable===!1).map(o=>o.field)),t=Object.entries(this.filters).filter(([o,a])=>a&&a.trim().length>0&&!e.has(o)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let s=this.rows;if(t.length>0){const o=this.typedFilters(t);s=s.filter(a=>o.every(u=>Ur(a.data[u.field],u.query,{type:u.type})))}const i=this.columns.filter(o=>o.filterable!==!1);return r&&(s=Kr(s,r,i)),n&&(s=Kr(s,n,i)),s}sortedRows(){return rh(this.filteredRows(),this.sortSpecs,this.columns)}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=at.instance;if(!r)return;const{values:s,blanks:i}=lh(this.rowsFacetedFor(t),t,{type:this.columns.find(a=>a.field===t)?.type}),o=await r.open(n.getBoundingClientRect(),s,this.filters[t]??"",i,a=>this.onFilterInput(t,a));o!==null&&(typeof o=="object"&&"clear"in o?this.onFilterInput(t,""):typeof o=="string"&&this.onFilterInput(t,o))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250),this.scheduleReload()}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(s=>s.filterable===!1).map(s=>s.field)),n=Object.entries(this.filters).filter(([s,i])=>i&&i.trim().length>0&&s!==e&&!t.has(s));if(n.length===0)return this.rows;const r=this.typedFilters(n);return this.rows.filter(s=>r.every(i=>Ur(s.data[i.field],i.query,{type:i.type})))}computeFilterSuggestions(){const e=new Map;for(const t of this.visibleColumns)ah(this.rows,t.field,{type:t.type})&&e.set(t.field,Mw(this.rowsFacetedFor(t.field),t.field,{type:t.type}));return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((s,i)=>{if(s.width!=null)return;const o=t[i];o&&r.set(s.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(s=>r.has(s.field)?{...s,width:r.get(s.field)}:s))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const s=o=>{if(!this.resizing)return;const a=o.clientX-this.resizing.startX,u=Math.max(Ww,this.resizing.startW+a);this.columns=this.columns.map(d=>d.field===this.resizing.field?{...d,width:u}:d)},i=async()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i);const o=this.resizing?.field;if(this.resizing=null,!o)return;const a=await ae();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const d of this.columns)typeof d.width=="number"&&(u[d.field]=d.width);await a.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await a.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",s),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=s?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const s=[...this.columns],i=s.findIndex(d=>d.field===n);if(i<0)return;const[o]=s.splice(i,1);let a=s.findIndex(d=>d.field===t);if(a<0){s.splice(i,0,o);return}r==="after"&&(a+=1),s.splice(a,0,o);const u=await ae();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:s.map(d=>d.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:s,updatedAt:Date.now()})}async saveFilters(){const e=await ae(),t={};for(const[r,s]of Object.entries(this.filters))s&&s.trim().length>0&&(t[r]=s);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+Do}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),s=Math.min(e.length,r+n);return{slice:e.slice(r,s),topPad:r*t,bottomPad:(e.length-s)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:s}=this.virtualSlice(e),i=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return k`
      ${this.loading||this.externalLoading?k`<div class="load-bar" role="progressbar" aria-label="Loading rows" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${o!=null?Math.round(o*100):ie}>
            <div class="load-bar-fill ${o!=null?"determinate":""}" style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:ie}></div>
          </div>`:ie}
      ${this.truncated?k`<div class="truncated-note" role="status">
            Showing the first ${this.rows.length.toLocaleString()} of ${this.matchingTotal.toLocaleString()}+ matching rows. Narrow the filter to see the rest.
          </div>`:ie}
      <table style=${this.tableSizingStyle(t)??ie}>
        <colgroup>
          ${t.map(a=>k`<col style=${a.width!=null?`width: ${a.width}px`:""} />`)}
          <col style="width:${Do}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(a=>{const u=a.sortable!==!1,d=a.filterable!==!1,p=this.sortSpecs.findIndex(z=>z.field===a.field),g=p>=0?this.sortSpecs[p]:void 0,y=g?g.asc?"asc":"desc":null,w=u?y==="asc"?"▲":y==="desc"?"▼":"⇅":"",$=this.sortSpecs.length>1&&p>=0?String(p+1):"",x=`t-${a.type}`,T=this.dragSourceField===a.field,S=this.dropTargetField===a.field,L=S&&this.dropEdge==="before"?" drop-before":S&&this.dropEdge==="after"?" drop-after":"",W=(a.description?`${a.description}
`:"")+(a.units?`Units: ${a.units}
`:"")+`${a.field} — ${u?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(d?"":" · not filterable");return k`
                <th
                  class=${`${x}${y?" sorted":""}${T?" drag-source":""}${L}${u?"":" no-sort"}`}
                  title=${W}
                  @click=${z=>u&&this.toggleSort(a.field,z.shiftKey)}
                  @dragover=${z=>this.onColDragOver(z,a.field,z.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(a.field)}
                  @drop=${z=>this.onColDrop(z,a.field)}
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
                      @click=${z=>z.stopPropagation()}
                      @dragstart=${z=>this.onColDragStart(z,a.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label">${a.label}${a.units?k`<span class="col-units"> (${a.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true">${w}${$?k`<span class="sort-rank">${$}</span>`:ie}</span>
                    ${d?k`<button
                          class=${`funnel${this.filters[a.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${a.label||a.field}`}
                          @click=${z=>this.openFilterPicker(z,a.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${z=>z.stopPropagation()}
                    @pointerdown=${z=>this.onResizeStart(z,a.field,z.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${Do}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(a=>{if(a.filterable===!1)return k`<th></th>`;const u=i.get(a.field)??[];return k`
                <th>
                  <filter-combobox
                    .value=${this.filters[a.field]??""}
                    .options=${u}
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
                ${t.map(u=>k`<td
                      class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}${u.renderer&&this.cellRenderers?.get(u.renderer)?" has-renderer":""}${Qw(a,u)}`}
                      title=${Yw(a,u)}
                    >
                      ${this.renderCell(a,u)}
                    </td>`)}
                <td>
                  ${this.readOnly?ie:k`<button class="danger" title="Delete row" @click=${()=>this.deleteRow(a.id)}>
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${s>0?k`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Ae.styles=[xt,_e`
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
    `];De([wt({type:String})],Ae.prototype,"tableId",2);De([wt({type:String})],Ae.prototype,"viewInstanceId",2);De([F()],Ae.prototype,"columns",2);De([F()],Ae.prototype,"rows",2);De([F()],Ae.prototype,"matchingTotal",2);De([F()],Ae.prototype,"tableTotal",2);De([F()],Ae.prototype,"truncated",2);De([F()],Ae.prototype,"sortSpecs",2);De([F()],Ae.prototype,"filters",2);De([F()],Ae.prototype,"globalQuery",2);De([F()],Ae.prototype,"localQuery",2);De([F()],Ae.prototype,"dragSourceField",2);De([F()],Ae.prototype,"dropTargetField",2);De([F()],Ae.prototype,"dropEdge",2);De([F()],Ae.prototype,"resizing",2);De([F()],Ae.prototype,"cellRenderers",2);De([F()],Ae.prototype,"scrollY",2);De([F()],Ae.prototype,"viewportHeight",2);De([F()],Ae.prototype,"loading",2);De([F()],Ae.prototype,"externalLoading",2);De([F()],Ae.prototype,"externalProgress",2);De([F()],Ae.prototype,"tableReadonly",2);Ae=De([Ee("data-table")],Ae);const eu=500;function Yw(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null||t.type==="array"&&Dt(n).length===0)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>eu?`${r.slice(0,eu)}…`:r}function Qw(e,t){if(t.script)return"";const n=Uw(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function Xw(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(i=>i.id!==r&&i.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function Ls(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function Ms(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function tu(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function zt(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}function it(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)?e:null}function we(e,t){return it(e)?.[t]}function Fe(e){return typeof e=="string"?e:null}function Jn(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function Zr(e){return Array.isArray(e)?e:[]}function Rn(e){return Zr(e).filter(t=>typeof t=="string")}function il(e){return Zr(we(e,"rows")).filter(t=>it(t)!==null)}function Po(e){return e===!0||e===1}class He extends Error{constructor(t,n){const r=Fe(we(t,"error")),s=Rn(we(t,"errors"));super(r??(s.length>0?s.join("; "):null)??"Datasette request failed"),this.name="DatasetteError";const i=n??Jn(we(t,"status"));i!=null&&(this.status=i),this.errors=s.length>0?s:r?[r]:[]}}function bt(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[a,u]of t.searchParams)r[a]=u;let s,i=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),i=decodeURIComponent(n[n.length-2]);const a=n.slice(0,n.length-2).join("/");s=t.origin+(a?"/"+a:"")}else n.length===1&&(i=decodeURIComponent(n[0])),s=t.origin;return{base:s,db:i,table:o,query:r}}function Zn(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,s]of Object.entries({...e.query,...t}))s!=null&&n.searchParams.set(r,String(s));return n.toString()}function Jw(e,t){const n={};for(const[r,s]of Object.entries(e.query))r.startsWith("_")||(n[r]=s);return Zn({...e,query:n},{_next:t})}function nu(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function Zw(e){const t=Fe(we(e,"next_url")),n=we(e,"next"),r=n!=null&&n!==!1?String(n):null,s=Zr(we(e,"rows")),i=Array.isArray(we(e,"columns"))?Rn(we(e,"columns")):null;return{rows:s.map(a=>Array.isArray(a)&&i?Object.fromEntries(i.map((u,d)=>[u,a[d]])):a),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:we(e,"truncated")===!0}}function ey(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function ru(e){const t=Rn(we(e,"primary_keys")),n=Rn(we(e,"columns")),r={},s=we(e,"column_details");if(Array.isArray(s))for(const a of s){const u=it(a);if(!u)continue;const d=Fe(u.column)??Fe(u.name);d&&(r[d]=u)}else{const a=it(s);if(a)for(const[u,d]of Object.entries(a))r[u]=it(d)??{}}for(const a of n)a in r||(r[a]={});const o=(n.length?n:Object.keys(r)).map(a=>{const u=r[a]??{},d=Po(u.is_pk)||t.includes(a),p=Fe(u.sqlite_type)??Fe(u.type)??void 0,g={field:a,label:mh(a),type:ey(p,a)};(Po(u.notnull)||d)&&(g.notnull=!0),d&&(g.unique=!0),(Po(u.hidden)||Wa(a))&&(g.hidden=!0);const y=u.default;return y!=null&&y!==""&&(g.default=y),g});if(t.length===0){const a=o.filter(u=>u.unique).map(u=>u.field);a.length&&t.push(...a)}return{columns:o,pks:t}}function mh(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function vi(e){const t=[],n=new Set;for(const r of e)for(const s of Object.keys(r))n.has(s)||(n.add(s),t.push(s));return t.map(r=>{const s={field:r,label:mh(r),type:ty(e.map(i=>i[r]))};return Wa(r)&&(s.hidden=!0),s})}function ty(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(pi)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&ny(n))?"datetime":"string"}function ny(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function ry(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const s=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(s)?n+=s:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function sy(e,t){return!t||t.length===0?null:t.map(n=>ry(e[n])).join(",")}function iy(e){const t=Array.isArray(e)?e:Zr(we(e,"databases")),n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}const s=Fe(we(r,"name"));s===null||s==="_memory"||n.push(Fe(we(r,"route"))||s)}return n}function oy(e,t){const n=Array.isArray(e)?e:Zr(we(e,"tables")),r=[];for(const s of n){if(typeof s=="string"){r.push({db:t,table:s,count:null,hidden:!1,pks:[]});continue}const i=Fe(we(s,"name"));i!==null&&r.push({db:t,table:i,count:Jn(we(s,"count")),hidden:we(s,"hidden")===!0,pks:Rn(we(s,"primary_keys"))})}return r}async function Ut(e,t){let n;try{n=await e(t)}catch(s){const i=s?.message||"network error";throw new He({error:`Couldn't reach ${t} (${i}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let s=null;try{s=await n.json()}catch{}throw new He(s&&typeof s=="object"?s:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(we(r,"ok")===!1)throw new He(r,n.status);return r}async function ol(e,t){return iy(await Ut(e,`${t}/-/databases.json`))}async function su(e,t,n){return oy(await Ut(e,`${t}/${encodeURIComponent(n)}.json`),n)}function ay(e){const t=e?.views,n=[];for(const r of Array.isArray(t)?t:[]){if(typeof r=="string"){n.push(r);continue}const s=r;s&&typeof s.name=="string"&&s.hidden!==!0&&n.push(s.name)}return n}async function ly(e,t,n){const s=`${t}/${encodeURIComponent(n)}.json?sql=${encodeURIComponent("select name, sql from sqlite_master where type='view' order by name")}&_shape=array`;let i;try{i=await Ut(e,s)}catch(d){const p=d instanceof He?d.message:String(d);throw new He({error:`Couldn't read the view definitions from "${n}". Importing views needs the SQL endpoint, which this instance may have disabled (allow_sql). Its tables can still be imported normally.

${p}`},d instanceof He?d.status:0)}const o=i?.rows,a=Array.isArray(i)?i:Array.isArray(o)?o:[],u=[];for(const d of a){const p=d,g=typeof p?.name=="string"?p.name:Array.isArray(d)?d[0]:void 0,y=typeof p?.sql=="string"?p.sql:Array.isArray(d)?d[1]:void 0;typeof g=="string"&&typeof y=="string"&&y.trim()&&u.push({db:n,name:g,sql:y})}return u}async function cy(e,t){const n=t.db?[t.db]:await ol(e,t.base),r=[];for(const s of n){const i=await Ut(e,`${t.base}/${encodeURIComponent(s)}.json`);if(ay(i).length!==0){if(i?.allow_execute_sql===!1)throw new He({error:`"${s}" defines views, but this instance has SQL queries disabled (allow_execute_sql), and a view's definition can only be read through them. Its tables can still be imported normally.`},403);r.push(...await ly(e,t.base,s))}}return r}async function $i(e,t){const n=Zn(t,{_extra:"column_details"}),r=await Ut(e,n);let{columns:s,pks:i}=ru(r),o=we(r,"column_details")!=null,a=Jn(we(r,"count")),u=we(r,"count_truncated")===!0,d=r;if(s.length===0){const p=Zn(t,{_extra:"columns"}),g=await Ut(e,p);({columns:s,pks:i}=ru(g)),o=we(g,"column_details")!=null,a=Jn(we(g,"count"))??a,u=we(g,"count_truncated")===!0||u,d=g}return{columns:s,pks:i,count:a,countTruncated:u,typed:o,raw:d}}async function ea(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await $i(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function uy(e,t,n){const r=it(e)??{},s=t?it(we(r.databases,t))??{}:{},i=it(s.tables)??{},o=(n?it(i[n]):null)??(n?it(i[n.toLowerCase()]):null)??{},a=E=>Fe(o[E])??Fe(s[E])??Fe(r[E]),u={columns:{},units:{}},d=Fe(o.sort);d!==null&&(u.sort=d);const p=Fe(o.sort_desc);p!==null&&(u.sortDesc=p);const g=Jn(o.size);g!==null&&(u.size=g),Array.isArray(o.sortable_columns)&&(u.sortableColumns=Rn(o.sortable_columns));const y=Fe(o.label_column);y!==null&&(u.labelColumn=y),o.hidden===!0&&(u.hidden=!0);const w=Fe(o.description);w!==null&&(u.description=w);const $=Fe(o.description_html);$!==null&&(u.descriptionHtml=$);const x=a("source"),T=a("source_url"),S=a("license"),L=a("license_url"),W=a("about"),z=a("about_url");x!==null&&(u.source=x),T!==null&&(u.sourceUrl=T),S!==null&&(u.license=S),L!==null&&(u.licenseUrl=L),W!==null&&(u.about=W),z!==null&&(u.aboutUrl=z);const re=it(o.columns);if(re)for(const[E,q]of Object.entries(re))typeof q=="string"&&(u.columns[E]=q);const G=it(o.units);if(G)for(const[E,q]of Object.entries(G))typeof q=="string"&&(u.units[E]=q);return u}const iu=new Map;async function dy(e,t){let n=iu.get(t);return n||(n=Ut(e,`${t}/-/metadata.json`).catch(()=>({})),iu.set(t,n)),n}async function al(e,t){const n=await dy(e,t.base);return uy(n,t.db,t.table)}function hy(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function ll(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(a=>{const u=e.columns[a.field],d=e.units[a.field],p=n?n.has(a.field):void 0;return u==null&&d==null&&p===void 0?a:{...a,...u!=null?{description:u}:{},...d!=null?{units:d}:{},...p!==void 0?{sortable:p}:{}}}),s=new Set(t.map(a=>a.field)),i={};e.sort&&s.has(e.sort)?(i.sortColumn=e.sort,i.sortAsc=!0):e.sortDesc&&s.has(e.sortDesc)&&(i.sortColumn=e.sortDesc,i.sortAsc=!1);const o=hy(e);return o&&(i.info=o),e.labelColumn&&s.has(e.labelColumn)&&(i.labelColumn=e.labelColumn),{columns:r,patch:i}}function cl(e,t){if(t.length===0)return e;const n=new Map(vi(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const s=n.get(r.field);return s&&s!=="string"?{...r,type:s}:r})}async function es(e,t,n={}){const r=n.maxRows??1e4,i={_size:n.pageSize??1e3,...n.extraParams||{}},o=Zn(t,i);let a=n.startUrl?nu(n.startUrl,o)??n.startUrl:o;const u=[];let d=!1,p=!1,g=0,y,w;for(;a;){let $;try{$=await Ut(e,a)}catch(L){if(u.length===0&&!n.startUrl)throw L;y=L instanceof He&&L.status?`stopped after ${u.length} rows: HTTP ${L.status}`:`stopped after ${u.length} rows: ${L?.message??String(L)}`,p=!0,w=a;break}const x=Zw($);u.push(...x.rows),d=d||x.truncated,g+=1,n.onProgress?.(u.length);const S=(x.nextUrl!=null?nu(x.nextUrl,a):null)??(x.nextToken!=null?Jw(t,x.nextToken):null);S&&u.length<r&&x.rows.length>0?a=S:(p=S!=null&&x.rows.length>0,p&&(w=S??void 0),a=null)}return{rows:u,truncated:d,hasMore:p,pages:g,error:y,nextUrl:w}}function fy(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function gh(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function bh(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function xi(e,t,n,r){let s;try{s=await e(t,{method:"POST",headers:fy(r),body:JSON.stringify(n)})}catch(o){throw new He({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(s&&s.ok===!1){let o=null;try{o=await s.json()}catch{}throw new He(o&&typeof o=="object"?o:{error:`HTTP ${s.status} for ${t}`},s.status)}const i=await s.json();if(we(i,"ok")===!1)throw new He(i,s.status);return i}async function ou(e,t,n,r={}){const s=await xi(e,gh(t,"insert"),{rows:n,return:!0},r.token);return il(s)}async function py(e,t,n,r,s={}){const i=await xi(e,bh(t,n,"update"),{update:r,return:!0},s.token),o=it(we(i,"row"));return o||(il(i)[0]??null)}async function au(e,t,n,r={}){await xi(e,bh(t,n,"delete"),{},r.token)}async function my(e,t,n,r={}){const s=await xi(e,gh(t,"upsert"),{rows:n,return:!0},r.token);return il(s)}async function gy(e,t){const n=Zn(t,{_extra:"primary_keys"}),r=await Ut(e,n);return Rn(we(r,"primary_keys"))}async function wh(e,t){try{const n=await Ut(e,Zn(t,{_extra:"count"}));return{count:Jn(we(n,"count")),truncated:we(n,"count_truncated")===!0}}catch{return{count:null,truncated:!1}}}async function yh(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const s=await e(`${t}/-/versions.json`,r);if(s&&s.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${s.status}`};const i=await s.json(),o=Fe(we(we(i,"datasette"),"version"))??Fe(we(i,"version"));let a=null;try{const d=await(await e(`${t}/-/actor.json`,r)).json();a=it(we(d,"actor"))}catch{}return{reachable:!0,version:o,actor:a,writable:!!(n.token&&a)}}catch(s){return{reachable:!1,version:null,actor:null,writable:!1,error:s?.message||"unreachable"}}}function er(e,t){return t?(n,r)=>{const s=(r??{}).headers??{};return e(n,{...r??{},headers:{...s,Authorization:`Bearer ${t}`}})}:e}function by(e,t){const n=new Map;for(const r of e)n.has(r.name.toLowerCase())||n.set(r.name.toLowerCase(),r);return r=>n.get(`${t}/${r}`.toLowerCase())??n.get(r.toLowerCase())}async function wy(e,t,n){const r={created:[],skipped:[],found:n.length};if(n.length===0)return r;const s=(await e.store.tables.find()).filter(a=>a.workspaceId===t),i=new Set(s.map(a=>a.name)),o=[...s];for(const a of n){const u=Jr(a.sql),d=u.projections[0];if(!d){r.skipped.push({name:a.name,reason:u.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const p=await Ya(e,t,{name:`${a.db}/${a.name}`,spec:d.spec,...d.sortBy?{sortBy:d.sortBy}:{}},{resolve:by(o,a.db),taken:i});if(!p){const g=d.spec.sources.map(y=>y.tableName).join(", ");r.skipped.push({name:a.name,reason:`its source tables are not in this workspace (${g}) — import them first`});continue}o.push(p),i.add(p.name),r.created.push(p.name),u.unsupported.length>0&&r.skipped.push({name:a.name,reason:`imported, but part of the query was not modelled: ${u.unsupported.slice(0,2).join("; ")}`})}return r}function yy(e,t){if(t.found===0){e.ui.dialogs.toast("That Datasette database defines no views.",{kind:"info",title:"Datasette views"});return}const n=t.skipped.length>0?` ${t.skipped.length} not fully imported: ${t.skipped.map(r=>`${r.name} — ${r.reason}`).join("; ")}`:"";if(t.created.length===0){e.ui.dialogs.toast(`No views could be imported as projections.${n}`,{kind:"warning",title:"Datasette views"});return}e.ui.dialogs.toast(`Imported ${t.created.length} of ${t.found} view${t.found===1?"":"s"} as projections.${n}`,{kind:t.skipped.length>0?"warning":"success",title:"Datasette views"})}function vy(e,t){return`${e}/${encodeURIComponent(t.db)}/${encodeURIComponent(t.name)}`}async function vh(e,t){try{return await cy(n=>e.backend.fetch(n),bt(t))}catch(n){if(n instanceof He)return null;throw n}}async function $h(e,t,n){const r=t.slice(0,5).map(i=>i.name).join(", "),s=await e.ui.dialogs.choice(`${n} ${t.length} view${t.length===1?"":"s"} (${r}${t.length>5?", …":""}).

A view is a query rather than stored rows, so it can come in either way.`,["As projections (live)","As tables (snapshot)"],"Datasette views");return s?s.startsWith("As projections")?"projection":"table":null}async function $y(e,t,n){const r=await vh(e,t);if(!r||r.length===0)return;const s=await $h(e,r,"This database also defines");s&&await xh(e,bt(t).base,r,s,n)}async function xh(e,t,n,r,s){if(r==="table"){await s(n.map(o=>vy(t,o)));return}const i=e.workspaceId();i&&yy(e,await wy(e,i,n))}const si=e=>e.replace(/^https?:\/\//,""),Or="datasette",kh=1e4,Ch=1e3,ul=1e4,_h=60;function Sh(e){e.ui.registerSettings(Or,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:kh,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:Ch,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:ul,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:_h,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function js(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function ki(e){const[t,n,r,s]=await Promise.all([e.settings.get(Or,"maxImportRows"),e.settings.get(Or,"pageSize"),e.settings.get(Or,"connectMaxRows"),e.settings.get(Or,"retryWaitSeconds")]);return{maxImportRows:js(t,kh,0),pageSize:js(n,Ch,1),connectMaxRows:js(r,ul,1),retryWaitSeconds:js(s,_h,1)}}function Ci(e){return e===0?Number.MAX_SAFE_INTEGER:e}function xy(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function dl(e,t,n,r){const s={...e.info??{}};return!s.source&&!s.sourceUrl&&(s.source=`${si(t)}/${n}/${r}`,s.sourceUrl=xy(t,n,r)),{...e,info:s}}async function hl(e,t,n,r={}){if(t.db&&t.table)return[await ea(e,t)];const s=[];if(t.db){if(s.push(...await su(e,t.base,t.db)),r.skipPicker)return s.filter(a=>!a.hidden)}else{const a=await ol(e,t.base);if(a.length===0)return[];let u=a;if(a.length>1){const d=await Br(a.map(p=>({name:p,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${si(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!d)return null;u=d.map(p=>a[p])}for(const d of u)try{s.push(...await su(e,t.base,d))}catch{}}if(s.length===0)return[];const i=new Set(s.map(a=>a.db)).size>1,o=await Br(s.map(a=>({name:i?`${a.db}/${a.table}`:a.table,size:a.count,detail:i?void 0:a.db,hidden:a.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${si(t.base)}.`,confirmLabel:n});return o?o.map(a=>s[a]):null}const ky=e=>new Promise(t=>setTimeout(t,e));function Cy(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function fl(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const _y={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},lu="https://latest.datasette.io/fixtures/facetable";function Sy(e){Sh(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>Oy(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>Py(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${lu}`,"","Import from Datasette");r&&await cu(t,r)}}),e.ui.registerUrlSource({id:"datasette-views",label:"Datasette views…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette database URL — its SQL views can come in as live Projections over the tables you already imported, or as snapshot tables.

e.g. ${lu}`,"","Import Datasette views");if(r)try{const s=await vh(t,r);if(!s||s.length===0){await t.ui.dialogs.alert("That Datasette database defines no views.","Datasette views");return}const i=await $h(t,s,"This database defines");if(!i)return;await xh(t,bt(r).base,s,i,o=>Eh(t,o,{}))}catch(s){await t.ui.dialogs.alert(s?.message??String(s),"Datasette views")}}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return Ey(r)?(t.preventDefault(),await cu(n,r,{skipViews:!0}),!0):!1})}async function cu(e,t,n={}){try{await _i(e,t,n)}catch(r){let s;r instanceof He?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function Ey(e){try{const t=bt(e);return!!(t.db&&t.table)}catch{return!1}}async function _i(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=await ki(e),i=bt(t),a=await hl(S=>e.backend.fetch(S),i,"Import",{skipPicker:n.skipTablePicker});if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let d=0;for(const S of a){const L={base:i.base,db:S.db,table:S.table,query:{}},W=await Ty(e,r,L);if(W.skipped){d+=1;continue}u.push({tableId:W.tableId,ref:L,overwrite:W.overwrite,knownCount:S.count})}let p=0,g=0;const y=[],w=[],$=[];for(const S of u)try{const L=await Iy(e,S.tableId,S.ref,S.overwrite,S.knownCount,n,s);p+=1,g+=L.rowCount,L.error?w.push(`${S.ref.db}/${S.ref.table} (${L.error})`):(L.hasMore||L.truncated)&&y.push(`${S.ref.db}/${S.ref.table}`)}catch(L){$.push(`${S.ref.db}/${S.ref.table}: ${L?.message??String(L)}`)}const x=Ci(s.maxImportRows),T=n.maxRows!=null?Math.min(n.maxRows,x):x;if(Ry(e,{imported:p,skipped:d,totalRows:g,capped:y,cap:T,partial:w,failed:$,requested:a.length}),p>0&&!n.skipViews)try{await $y(e,t,S=>Eh(e,S,n))}catch{}}async function Eh(e,t,n){for(const r of t)await _i(e,r,{...n,skipViews:!0})}async function Ty(e,t,n){const r=`${n.db}/${n.table}`,s={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},i=(await e.store.tables.find()).filter(d=>d.workspaceId===t),o=i.find(d=>d.name.toLowerCase()===r.toLowerCase());let a=r;if(o){const d=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!d||d==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(d==="Overwrite")return await e.store.tables.patch(o.id,{origin:s,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};a=cn(new Set(i.map(p=>p.name)),r)}const u=Se();return await e.store.tables.insert({id:u,workspaceId:t,name:a,code:Pe(`${n.db}-${n.table}`),columns:[],view:"table",origin:s,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function Iy(e,t,n,r,s,i,o){const a=`${n.db}/${n.table}`,u=g=>e.backend.fetch(g),d=Ci(o.maxImportRows),p=i.maxRows!=null?Math.min(i.maxRows,d):d;zt(t,!0);try{let g=[],y=s,w=!1,$=!1,x=[];try{const ye=await $i(u,n);g=ye.columns,y==null&&(y=ye.count,w=ye.countTruncated),$=ye.typed,x=ye.pks??[]}catch{}if(y==null){const ye=await wh(u,n);y=ye.count,w=ye.truncated}const T=y&&y>0&&(!w||p<=y)?Math.min(y,p):0,S=[];let L=!1,W=!1,z=0,re,G,E;for(;;){const ye=await es(u,n,{maxRows:Math.max(0,p-S.length),pageSize:o.pageSize,...E?{startUrl:E}:{},onProgress:et=>{T>0&&zt(t,!0,Math.min(1,(S.length+et)/T))}});if(S.push(...ye.rows),L=L||ye.truncated,z+=ye.pages,W=ye.hasMore,re=ye.error,G=ye.nextUrl,!ye.error||!ye.nextUrl||S.length>=p)break;const Re=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${a}" paused after ${S.length.toLocaleString()} rows (${ye.error}). Datasette may be rate-limiting a large import. Wait ${Re} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Re}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Re}`)break;zt(t,!0),e.ui.dialogs.toast(`Resuming "${a}" in ${Re}…`,{kind:"info",title:"Import paused"}),await ky(Cy(o.retryWaitSeconds)),E=ye.nextUrl,re=void 0,G=void 0}let X=g.length===0?vi(S):$?g:cl(g,S),ue={};try{const ye=await al(u,n),Re=ll(ye,X);X=Re.columns,ue=Re.patch}catch{}ue=dl(ue,n.base,n.db,n.table);const pe=await e.store.tables.findOne(t),H=pe?.columns??[],Z=H.length===0;let{columns:K}=mi(H,X,pe?.deletedColumns),se=S;if(i.editColumns&&Z){const ye=await i.editColumns(K,a);if(ye===null)return{name:a,rowCount:0,hasMore:!1,truncated:!1,pages:z,count:y,error:re};se=Ay(se,K,ye),K=ye}const ve=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const Qe=fl(re,G,S.length,y),je=x.length>0&&pe?.origin?{origin:{...pe.origin,pks:x}}:{},me=Z?{columns:K,...ue,...je,importResume:Qe,updatedAt:ve}:{columns:K,...ue.info?{info:ue.info}:{},...je,importResume:Qe,updatedAt:ve};await e.store.tables.patch(t,me);const Ne=e.store.rows(t);if(r){const ye=await Ne.find();await Ne.bulkRemove(ye.map(Re=>Re.id))}const kt=se.map(ye=>({id:Se(),tableId:t,data:ye,updatedAt:ve}));return await Ne.bulkInsert(kt),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:kt.length}),{name:a,rowCount:kt.length,hasMore:W,truncated:L,pages:z,count:y,error:re}}finally{zt(t,!1)}}function Ay(e,t,n){const r=Ua(t,n);return r?e.map(r):e}function Ry(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,s=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${s} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const i=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.capped.length} capped${i} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${s}`,{kind:"success",title:"Datasette import"})}async function Oy(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await ki(e);await Dy(e,n,r)}catch(r){const s=r instanceof He?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function Dy(e,t,n){const r=bt(t.origin.url),s=p=>e.backend.fetch(p),i=Ci(n.maxImportRows);zt(t.id,!0);let o,a;try{let p=[],g=null,y=!1,w=!1;try{const me=await $i(s,r);p=me.columns,g=me.count,y=me.countTruncated,w=me.typed}catch{}if(g==null){const me=await wh(s,r);g=me.count,y=me.truncated}const $=g&&g>0&&(!y||i<=g)?Math.min(g,i):0,{rows:x,hasMore:T,truncated:S,error:L,nextUrl:W}=await es(s,r,{maxRows:i,pageSize:n.pageSize,onProgress:me=>{$>0&&zt(t.id,!0,Math.min(1,me/$))}});let z=p.length===0?vi(x):w?p:cl(p,x),re={};try{const me=await al(s,r),Ne=ll(me,z);z=Ne.columns,re=Ne.patch}catch{}re=dl(re,r.base,r.db,r.table);const G=t.columns.length===0,E=mi(t.columns,z,t.deletedColumns);a=E.newFields;const q=Date.now(),X=fl(L,W,x.length,g),ue=G?{columns:E.columns,...re,importResume:X,updatedAt:q}:{columns:E.columns,...re.info?{info:re.info}:{},importResume:X,updatedAt:q};await e.store.tables.patch(t.id,ue);const pe=t.origin?.pks??[],H=new Set(z.map(me=>me.field)),Z=t.columns.map(me=>me.field).filter(me=>!H.has(me)&&!pe.includes(me)),K=(t.deletedColumns??[]).filter(me=>H.has(me)),se=e.store.rows(t.id),ve=await se.find(),{data:Qe,droppedUserRows:je}=th({oldRows:ve.map(me=>({data:me.data})),freshRows:x,pks:pe,userAddedFields:Z,deletedRemoteFields:K});await se.bulkRemove(ve.map(me=>me.id)),await se.bulkInsert(Qe.map(me=>({id:Se(),tableId:t.id,data:me,updatedAt:q}))),o={rowCount:Qe.length,hasMore:T,truncated:S,error:L,droppedUserRows:je}}finally{zt(t.id,!1)}const u=[];if(o.error)u.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const p=i<Number.MAX_SAFE_INTEGER?` at ${i.toLocaleString()}`:"";u.push(`capped${p}`)}a.length>0&&u.push(`${a.length} new column${a.length===1?"":"s"}`),o.droppedUserRows>0&&u.push(`${o.droppedUserRows} row${o.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${o.droppedUserRows===1?"it":"them"} could not be carried over`);const d=u.length?` — ${u.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${d}.`,{kind:o.error||o.hasMore||o.truncated||a.length>0||o.droppedUserRows>0?"warning":"success",title:"Refresh"}),a.length>0&&Ly(t.id,r,a)}async function Py(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const s=await ki(e),i=Ci(s.maxImportRows),o=bt(n.origin.url),a=$=>e.backend.fetch($),u=r.loadedRows,d=r.totalCount??null,p=d&&d>0?Math.min(d,i):0;zt(t,!0,p>0?Math.min(1,u/p):void 0);let g,y;try{const $=await es(a,o,{startUrl:r.nextUrl,maxRows:Math.max(0,i-u),pageSize:s.pageSize,onProgress:S=>{p>0&&zt(t,!0,Math.min(1,(u+S)/p))}});g=$.rows.length;const x=Date.now();await e.store.rows(t).bulkInsert($.rows.map(S=>({id:Se(),tableId:t,data:S,updatedAt:x}))),y={error:$.error,nextUrl:$.nextUrl};const T=fl($.error,$.nextUrl,u+g,d);await e.store.tables.patch(t,{importResume:T,updatedAt:x})}catch($){const x=$ instanceof He?$.message:$?.message??String($);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${x}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{zt(t,!1)}const w=u+g;y.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${g} rows (${w} total) — interrupted again (${y.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${g} rows (${w} total).`,{kind:"success",title:"Resume import"})}function Ly(e,t,n){const r=n.join(", "),s=n.length!==1,i=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${s?"s":""}: ${r}. Review, reorder or hide ${s?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:i}}))}const My=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:_i,init:Sy,meta:_y},Symbol.toStringTag,{value:"Module"}));var jy=Object.defineProperty,Ny=Object.getOwnPropertyDescriptor,ts=(e,t,n,r)=>{for(var s=r>1?void 0:r?Ny(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&jy(t,n,s),s};const zy="https://latest.datasette.io/ephemeral";let Et=class extends ke{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),Et.instance=this}disconnectedCallback(){super.disconnectedCallback(),Et.instance===this&&(Et.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return k`
      <dialog @cancel=${this.onCancel} @keydown=${vt}>
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
                placeholder="e.g. ${zy}"
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
    `}};Et.instance=null;Et.styles=[yt,_e`
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
    `];ts([F()],Et.prototype,"url",2);ts([F()],Et.prototype,"token",2);ts([F()],Et.prototype,"status",2);ts([F()],Et.prototype,"statusKind",2);Et=ts([Ee("datasette-connect-dialog")],Et);class Fy extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Th(e){return`datasette:token:${e}`}function Uy(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function By(e,t,n){const r=e.source,s=r?.config??{},i={base:s.base,db:s.db,table:s.table,query:{}},o=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],a=r?.writable===!0,u=s.maxRows;let d=null;function p(){return u!=null?Promise.resolve(u):(d||(d=n?ki(n).then(E=>E.connectMaxRows):Promise.resolve(ul)),d)}const g=s.pollIntervalMs??0,y=(E,q)=>t.backend.fetch(E,q);async function w(){const q=(await t.settings.findOne(Th(s.base)))?.value;return typeof q=="string"&&q.length>0?q:void 0}const $=async(E,q)=>er(y,await w())(E,q);function x(E){return{id:sy(E,o)??Se(),tableId:e.id,data:E,updatedAt:Date.now()}}function T(E){if(!a)throw new Fy(E)}function S(E){const q={};for(const[X,ue]of Object.entries(E))o.includes(X)||(q[X]=ue);return q}const L=new Set;let W=[],z=!1,re=null;function G(){return re||(re=(async()=>{try{const{rows:E}=await es($,i,{maxRows:await p()});W=E.map(x),z=!0;for(const q of L)q(W);return W}finally{re=null}})(),re)}return{async find(E){const q=z?W:await G();return!E||Object.keys(E).length===0?q:q.filter(X=>Uy(X,E))},async findOne(E){return(z?W:await G()).find(X=>X.id===E)??null},async insert(E){T("insert");const[q]=await ou($,i,[E.data]),X=x(q??E.data);return t.events.emit("row:created",{tableId:e.id,row:X}),G(),X},async bulkInsert(E){if(E.length===0)return[];T("insert");const q=await ou($,i,E.map(ue=>ue.data)),X=(q.length?q:E.map(ue=>ue.data)).map(x);return G(),X},async upsert(E){T("upsert");const[q]=await my($,i,[E.data]),X=x(q??E.data);return G(),X},async patch(E,q){T("update");const X=q.data,ue=S(X??{}),pe=await py($,i,E,ue),H=x(pe??{...X??{}});return t.events.emit("row:updated",{tableId:e.id,row:H,prev:H}),G(),H},async remove(E){T("delete"),await au($,i,E),t.events.emit("row:deleted",{tableId:e.id,rowId:E}),G()},async bulkRemove(E){if(E.length!==0){T("delete");for(const q of E)await au($,i,q);G()}},subscribe(E){L.add(E),z?E(W):G();let q=null;return g>0&&(q=setInterval(()=>void G(),g)),()=>{L.delete(E),q&&clearInterval(q)}},async refresh(){await G()}}}const qy='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Hy={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function Ky(e){Sh(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:qy,order:10,description:"A live, editable table on any Datasette instance",connect:t=>Gy(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>Vy(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>By(t,n,e)})}async function Vy(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const s=await r.find();e.ui.dialogs.toast(`Reloaded ${s.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const s=r instanceof He?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function Gy(e){const t=Et.instance??Wy(),n=(s,i)=>e.backend.fetch(s,i),r=await t.open({initialUrl:"https://datasette.io",async onTest(s,i){const o=bt(s),a=await yh(n,o.base,{token:i||void 0});if(o.db&&o.table){await ea(er(n,i||void 0),o);const d=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${d} — table found, signed in, read-write.`:`Reachable${d} — table found, read-only (no token / not authenticated).`}if(!a.reachable)return`Unreachable: ${a.error??"no response"}`;const u=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(s,i){const o=bt(s);o.db&&o.table&&await ea(er(n,i||void 0),o)}});if(r)try{await Ih(e,r.url,r.token)}catch(s){const i=s instanceof He?s.message:s?.message??String(s);await e.ui.dialogs.alert(i,"Connect Datasette failed")}}function Wy(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Ih(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=bt(t),i=(g,y)=>e.backend.fetch(g,y),o=er(i,n||void 0),a=await yh(i,s.base,{token:n||void 0});n&&await e.store.settings.upsert({name:Th(s.base),value:n});let u;try{u=await hl(o,s,"Connect")}catch(g){const y=g instanceof He?g.message:g?.message??String(g);throw new Error(`Couldn't read tables from ${si(s.base)}: ${y}`,{cause:g})}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const d=[];for(const g of u){const y=await Yy(e,r,s.base,g,a.writable,n);y!==null&&d.push({tableId:y,c:g})}if(d.length===0)return;const p=a.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${d.length} live table${d.length===1?"":"s"} from Datasette (${p}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:g,c:y}of d)Qy(e,g,s.base,y,n)}async function Yy(e,t,n,r,s,i){const o=(await e.store.tables.find()).filter(y=>y.workspaceId===t);let a=`${r.db}/${r.table}`,u=o.find(y=>{const w=y.source?.config;return y.source?.type==="datasette"&&w?.base===n&&w?.db===r.db&&w?.table===r.table});if(!u){const y=o.find(w=>w.name.toLowerCase()===a.toLowerCase());if(y){const w=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!w||w==="Skip")return null;w==="Overwrite"?u=y:a=cn(new Set(o.map($=>$.name)),a)}}let d=r.pks??[];if(d.length===0){const y=er((w,$)=>e.backend.fetch(w,$),i||void 0);try{d=await gy(y,{base:n,db:r.db,table:r.table,query:{}})}catch{d=[]}}const p=u?.id??Se(),g={...u??{},id:p,workspaceId:t,name:a,code:Pe(`${r.db}-${r.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:s,config:{base:n,db:r.db,table:r.table,pks:d}},updatedAt:Date.now()};return u?await e.store.tables.upsert(g):await e.store.tables.insert(g),p}async function Qy(e,t,n,r,s){const i={base:n,db:r.db,table:r.table,query:{}},o=er((a,u)=>e.backend.fetch(a,u),s||void 0);try{let a=[],u=!1;try{const x=await $i(o,i);a=x.columns,u=x.typed}catch{}const{rows:d}=await es(o,i,{maxRows:50,pageSize:50}),p=a.length===0?vi(d):u?a:cl(a,d);if(p.length===0)return;const g=await e.store.tables.findOne(t);if(!g)return;const y=g.source?.config?.pks??[];let w=p.map(x=>y.includes(x.field)?{...x,unique:!0,notnull:!0}:x),$={};try{const x=await al(o,i),T=ll(x,w);w=T.columns,$=T.patch}catch{}$=dl($,i.base,r.db,r.table),await e.store.tables.patch(t,{columns:w,...$,updatedAt:Date.now()})}catch{}}const Xy=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Ih,init:Ky,meta:Hy},Symbol.toStringTag,{value:"Module"})),Jy={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function Zy(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:Ah}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class _n extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function ev(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const uu=5e4;function tv(e){return e.ok===!0&&Array.isArray(e.rows)}function nv(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const s of["next_url","nextUrl","next"]){const i=n[s];if(typeof i!="string")continue;const o=i.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const a=new URL(o,t);if(a.origin!==r.origin)continue;return a.toString()}catch{continue}if(s==="next"&&tv(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function rv(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function Ah(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",s=n.format==="json"?"json":"csv",i=new Set;let o=[],a=!1,u=null;function d($){return $.map((x,T)=>({id:`url:${T}`,tableId:e.id,data:x,updatedAt:0}))}async function p($){let x;try{x=await t.backend.fetch($)}catch(T){throw new Error(`Could not reach ${r}: ${T?.message??String(T)}`,{cause:T})}if(!x.ok)throw new Error(`Could not load ${r}: HTTP ${x.status} ${x.statusText}`);try{return await yd(x)}catch(T){throw new Error(`Could not read response from ${r}: ${T?.message??String(T)}`,{cause:T})}}async function g($){const x=Da($);let T=await p(x);if(bd(T)){const S=wd(x);S&&(T=await p(S))}try{if(s==="json"){const S=JSON.parse(T);return{records:rv(S),nextUrl:nv(S,x)}}return{records:sr(T).rows,nextUrl:null}}catch(S){throw new Error(`Could not parse ${s.toUpperCase()} from ${r}: ${S?.message??String(S)}`,{cause:S})}}async function y(){if(!r)throw new Error("This reference table has no URL configured.");const $=[];let x=r;const T=new Set;for(;x&&$.length<uu&&!T.has(x);){T.add(x);const S=await g(x);$.push(...S.records),x=S.records.length>0?S.nextUrl:null}return $.slice(0,uu)}function w(){return u||(u=(async()=>{try{const $=await y();o=d($),a=!0;for(const x of i)x(o);return o}finally{u=null}})(),u)}return{async find($){const x=a?o:await w();return!$||Object.keys($).length===0?x:x.filter(T=>ev(T,$))},async findOne($){return(a?o:await w()).find(T=>T.id===$)??null},async insert(){throw new _n("insert")},async bulkInsert(){throw new _n("insert")},async upsert(){throw new _n("upsert")},async patch(){throw new _n("update")},async remove(){throw new _n("delete")},async bulkRemove(){throw new _n("delete")},subscribe($){return i.add($),a?$(o):w(),()=>{i.delete($)}},async refresh(){a=!1,o=[],await w()}}}const sv=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:_n,createUrlCollection:Ah,init:Zy,meta:Jy},Symbol.toStringTag,{value:"Module"}));function Ke(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function du(e){return`'${e.replace(/'/g,"''")}'`}function hu(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${Ke(n.from.alias)}.${Ke(n.from.field)}`,computed:!1}:null}function iv(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",s=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,i=[];for(const w of e.columns)w.from.kind==="source"?i.push(`  ${Ke(w.from.alias)}.${Ke(w.from.field)} AS ${Ke(w.field)}`):i.push(`  NULL AS ${Ke(w.field)} -- computed in-app by a script; no SQL equivalent`);i.length===0&&i.push("  *");const a=[`SELECT${s!=null&&r==="top"?` TOP ${s}`:""}`,i.join(`,
`)],u=t.tableNames[n.alias]??n.tableName;a.push(`FROM ${Ke(u)} AS ${Ke(n.alias)}`);for(const w of e.sources.slice(1)){const $=t.tableNames[w.alias]??w.tableName;if(!w.join){a.push(`CROSS JOIN ${Ke($)} AS ${Ke(w.alias)}`);continue}const x=w.join.type==="inner"?"INNER JOIN":"LEFT JOIN",T=w.join.on.map(S=>`${Ke(w.alias)}.${Ke(S.field)} = ${Ke(S.eqAlias)}.${Ke(S.eqField)}`).join(" AND ");a.push(`${x} ${Ke($)} AS ${Ke(w.alias)} ON ${T||"1 = 1"}`)}const d=[],p=[];for(const[w,$]of Object.entries(e.filters??{})){if(!$)continue;const x=hu(e,w);if(x){if(x.computed){p.push(`-- filter on ${Ke(w)} (${du($)}) applies to a computed column; enforced in-app only`);continue}d.push(`LOWER(${x.expr}) LIKE ${du(`%${$.toLowerCase()}%`)}`)}}d.length>0&&a.push(`WHERE ${d.join(`
  AND `)}`);const g=(t.orderBy??[]).map(w=>{const $=hu(e,w.field);return!$||$.computed?null:`${$.expr} ${w.asc?"ASC":"DESC"}`}).filter(w=>w!==null);g.length>0&&a.push(`ORDER BY ${g.join(", ")}`);const y=s==null?"":r==="limit"?`
LIMIT ${s}`:r==="fetch"?`
FETCH FIRST ${s} ROWS ONLY`:"";return`${a.join(`
`)}${y};
${p.length>0?`${p.join(`
`)}
`:""}`}const ov={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function av(){}async function Rh(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(a=>a.workspaceId===t),r=n.filter(a=>a.source?.type!=="projection"),s=n.filter(a=>a.source?.type==="projection"),i=lv(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${s.length>0?` (+ ${s.length} projection${s.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const a of r){const u=await e.store.rows(a.id).find();o.push(Ph(a,u),"")}if(o.push("COMMIT;",""),s.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const a of s)o.push(`-- projection: ${a.name}`,pl(a,i)??"","")}return o.join(`
`)}function lv(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,tr(n.code||n.name));return n=>t.get(n)??tr(Pe(n))}function Oh(e,t){const n=Dh(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",Ph(e,t),"","COMMIT;",""].join(`
`)}function Dh(e,t){const n=pl(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function pl(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>tr(Pe(o))),s={};for(const o of n.sources)s[o.alias]=r(o.tableName);const i=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return iv(n,{tableNames:s,limitStyle:"limit",...i?{orderBy:i}:{}})}function Ph(e,t){const n=tr(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(i=>`  ${cv(i)}`)],s=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(a=>a.field)].map(a=>`"${tr(a)}"`).join(", ");for(const a of t){const u=[fu(a.id),...e.columns.map(d=>fu(a.data[d.field],d.type))];s.push(`INSERT INTO "${n}" (${o}) VALUES (${u.join(", ")});`)}}return s.join(`
`)}function cv(e){const t=[`"${tr(e.field)}"`,uv(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function uv(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function fu(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=dv(e);return n===null?"NULL":Ns(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Ns(e.toISOString()):Ns(typeof e=="string"?e:JSON.stringify(e))}function dv(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?pu(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?pu(r):null}return null}function pu(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function Ns(e){return`'${e.replace(/'/g,"''")}'`}function tr(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const hv=Object.freeze(Object.defineProperty({__proto__:null,init:av,meta:ov,projectionSelectBody:pl,projectionSelectFor:Dh,serializeTableAsSql:Oh,serializeWorkspaceAsSql:Rh},Symbol.toStringTag,{value:"Module"})),Lh=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function mu(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(Lh))t.add(r[2]);return[...t]}const ml=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Vn=e=>ml(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function fv(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function pv(e,t,n,r,s){const i=r?.type??"string",o=ml(r?.label||e),a=`class="eda-input" data-eda-row="${Vn(n)}" data-eda-field="${Vn(e)}" data-eda-type="${Vn(i)}"`,u=s?" disabled":"";let d;if(i==="boolean")d=`<input type="checkbox" ${a}${fv(t)?" checked":""}${u} />`;else{const p=i==="number"?"number":"text",g=t==null?"":Vn(String(t));d=`<input type="${p}" ${a} value="${g}"${u} />`}return`<label class="eda-input-field" title="${o}">${d}<span class="eda-input-label">${o}</span></label>`}function mv(e,t){if(t==null||t==="")return"";const n=String(t),r=Vn(e),s=Vn(n);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${r}" data-eda-filter-value="${s}" title="Filter by ${r}: ${s}">${ml(n)}</button>`}function gv(e,t,n,r={}){return e.replace(Lh,(s,i,o)=>{const a=n[o];if(!a)return"";const u=t.data[a];if(!i)return u==null?"":String(u);if(i.startsWith("filter"))return mv(a,u);const d=r.columns?.get(a),p=r.readonly===!0||!!d?.script?.trim();return pv(a,u,t.id,d,p)})}function gu(e){return e==null||e===""}function bv(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const s=Ga(r.script,e.data);n??={...e.data},n[r.field]=s.ok?s.value:`⚠ ${s.label}`}return n?{...e,data:n}:e}function bu(e,t){return t.some(n=>n.script?.trim())?e.map(n=>bv(n,t)):e}function wu(e,t,n){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");if(r.length===0)return e;const s=new Map((n??[]).map(i=>[i.field,i.type]));return e.filter(i=>r.every(([o,a])=>Ur(i.data[o],a,{type:s.get(o)})))}function Si(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function wv(e,t){const n=Pn(e??"");return n.some(r=>Si(r,t))||n.push({term:t,negate:!1,exact:!0}),an(n)}function yv(e,t){const n=Pn(e??"").filter(r=>!Si(r,t));return an(n)}function Mh(e,t){return e.exact===!0&&e.negate===!0&&e.term.toLowerCase()===t.toLowerCase()}function vv(e,t){const n=Pn(e??"");return n.some(r=>Si(r,t))?"on":n.some(r=>Mh(r,t))?"not":"off"}function $v(e,t){const n=vv(e,t),r=Pn(e??"").filter(s=>!Si(s,t)&&!Mh(s,t));return an(n==="off"?[...r,{term:t,negate:!1,exact:!0}]:n==="on"?[...r,{term:t,negate:!0,exact:!0}]:r)}function xv(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((s,i)=>{const o=s.data[t],a=i.data[t],u=gu(o),d=gu(a);if(u||d)return u===d?0:u?1:-1;const p=Number(o),g=Number(a);return!Number.isNaN(p)&&!Number.isNaN(g)?(p-g)*r:String(o).localeCompare(String(a),void 0,{numeric:!0,sensitivity:"base"})*r})}function ta(e,t,n){const r=wu(e,t.filters??{},n),s=wu(r,t.pillFilters??{},n);return xv(s,t.sortColumn,t.sortAsc??!0)}function kv(e){return!!e&&e.trim().length>0}function jh(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function Cv(e,t){return t==="raw"||t==="structure"?e:{...e,columns:jh(e,t)}}function Nh(e,t,n){return n==="structure"?[]:n==="raw"?t:ta(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc},e.columns)}function gl(e,t){const n=e.columns.map(s=>s.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(s=>{const i={};for(const o of n)i[o]=s.data[o];return i})}}const _v={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Sv(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:s}=await ze(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:a}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(i,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const a=await Ei(t);await t.backend.saveFile(`workspace-${r}.db.json`,a,"application/json")}else if(o==="sql"){const a=await Rh(t);await t.backend.saveFile(`workspace-${r}.sql`,a,"application/sql")}}catch(a){t.ui.dialogs.toast(`Export failed: ${a.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ze(async()=>{const{AnchoredMenu:d}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:d}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!i)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const a=await t.ui.dialogs.choice(`Export "${o.name}" as ${i.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!a)return;const u=a==="Visible Data"?"visible":a==="Raw Data"?"raw":"structure";try{const d=await t.store.rows(o.id).find(),p=Cv(o,u),g=Nh(o,d,u),y=Pe(o.code||o.name||"table"),w=u!=="structure"&&o.source!=null&&d.length===0;if(i==="csv")w&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.csv`,Fa(p,g),"text/csv");else if(i==="json"){const $=JSON.stringify(gl(p,g),null,2);await t.backend.saveFile(`${y}.table.json`,$,"application/json")}else i==="sql"&&(w&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.sql`,Oh(p,g),"application/sql"))}catch(d){t.ui.dialogs.toast(`Export failed: ${d.message}`,{kind:"error",title:"Export"})}}})}async function Ei(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),s=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:s};for(const o of n){const a=await e.store.rows(o.id).find();i.tables.push({name:o.name,columns:o.columns,rows:a.map(u=>u.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(i,null,2)}const Ev=Object.freeze(Object.defineProperty({__proto__:null,init:Sv,meta:_v,serializeWorkspace:Ei},Symbol.toStringTag,{value:"Module"})),Tv={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Iv="gist:",yu='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Av(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:yu,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ze(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(i)try{if(i==="push"||i==="pull"){const o=await r.open(s,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const a=o;i==="push"?await jv(t,a):await Bh(t,a)}else i==="share"?await Pv(t):i==="view"&&await Lv(t)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:yu,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ze(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:o}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(i)try{i==="push"?await zv(t,n.tableId):i==="pull"?await Fv(t,n.tableId):i==="view"&&await Uv(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function Rv(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Ov(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Fh(e,r),await Bh(e))}async function zh(e){const t=e.workspaceId();return`${Iv}${t??"default"}`}async function ns(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const i=(await e.store.settings.findOne(await zh(e)))?.value;if(i?.user&&i?.token){const o={user:i.user,gistId:i.gistId??"",token:i.token};return await Fh(e,o),o}return null}async function Fh(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await zh(e),value:t})}function Ov(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const s=n.slice(0,r).trim(),i=n.slice(r+1).trim();s&&(t[s]=i)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function bl(e){const t=await ns(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function Dv(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Pv(e){const t=await ns(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(Dv(t)))}`,{GistShareDialog:s}=await ze(async()=>{const{GistShareDialog:i}=await import("./gist-share-dialog-CG-FTprC.js");return{GistShareDialog:i}},[]);await s.open(r)}async function Lv(e){const t=await ns(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}function Mv(e){return e.endsWith(".table.json")&&!e.startsWith("_easydb")}function Uh(e,t){const n=new Set(t);return[...e].filter(r=>Mv(r)&&!n.has(r)).sort()}async function jv(e,t="all"){const n=await bl(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=t!=="settings",i=t!=="data",o=(await e.store.tables.find()).filter(L=>L.workspaceId===r);if(s&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const a=1e8,u=1e7,d={},p=[],g=[];if(s)for(const L of o){const W=L.source!=null?[]:await e.store.rows(L.id).find(),z=JSON.stringify(gl(L,W),null,2),re=`${L.name} (${(z.length/1e6).toFixed(2)} MB)`;z.length>a?p.push(re):z.length>u&&g.push(re),d[`${Pe(L.name)}.table.json`]={content:z}}if(p.length>0||g.length>0){const L=[];if(p.length>0&&L.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${p.join(`
`)}`),g.length>0&&L.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${g.join(`
`)}`),!await e.ui.dialogs.confirm(`${L.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(i){const L=(await e.store.viewTemplates.find()).filter(E=>E.workspaceId===r),W=(await e.store.viewInstances.find()).filter(E=>E.workspaceId===r),z=(await e.store.settings.find()).map(E=>({name:E.name,value:E.value})),{kept:re,withheld:G}=Xm(z);G.length>0&&e.ui.dialogs.toast(`Not pushed: ${G.join(", ")} — a secret is stored as its own value. Move it into the secrets store (Settings → General) and reference it with \${secret:name}.`,{kind:"warning",title:"Gist sync"}),d["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:L,viewInstances:W,settings:re},null,2)}}const y={...d};let w=[];if(s&&n.gistId){w=await Nv(e,n,Object.keys(d));for(const L of w)y[L]=null}let $;if(n.gistId){const L=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:y,description:`easyDBAccess workspace: ${r}`})});if(!L.ok)throw new Error(await Vr(L));$=await L.json()}else{const L=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:d})});if(!L.ok)throw new Error(await Vr(L));$=await L.json(),n.gistId=$.id,await e.settings.set("gist-sync","gist_id",$.id)}const x=$.html_url??`https://gist.github.com/${n.user}/${$.id}`,T=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`,S=w.length>0?`  Removed ${w.length} file${w.length===1?"":"s"}.`:"";e.ui.dialogs.toast(`Pushed ${T}.${S}  ${x}`,{kind:"success",title:"Gist sync"})}async function Bh(e,t="all"){const n=t!=="settings",r=t!=="data",s=await bl(e);if(!s||!s.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const i=e.workspaceId();if(!i)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${s.gistId}`,{headers:{Authorization:`Bearer ${s.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Vr(o));const a=await o.json(),u=Object.entries(a.files).filter(([L])=>L.endsWith(".table.json")&&!L.startsWith("_easydb"));if(n&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const d=(await e.store.tables.find()).filter(L=>L.workspaceId===i),p=new Map(d.map(L=>[L.name.toLowerCase(),L]));let g=0;const y=[],w=new Map;if(n){const{TopProgress:L}=await ze(async()=>{const{TopProgress:z}=await import("./top-progress-wptV32DV.js");return{TopProgress:z}},[]),W=L.begin("Pulling from gist…");try{for(const[z,[re,G]]of u.entries())try{const E=await ii(G),q=JSON.parse(E);if(!q.name||!Array.isArray(q.columns))throw new Error("unexpected file shape (missing name/columns)");let X;const ue=p.get(q.name.toLowerCase());if(ue){if(X=await e.store.tables.patch(ue.id,{title:q.title,columns:q.columns,...ra(q),updatedAt:Date.now()}),X.source==null){const pe=e.store.rows(ue.id),H=await pe.find();await pe.bulkRemove(H.map(Z=>Z.id))}}else X=await e.store.tables.insert({id:Se(),workspaceId:i,name:q.name,title:q.title,code:Pe(q.name),columns:q.columns,view:q.view??"table",...ra(q),updatedAt:Date.now()});if(X.source==null){const pe=(q.rows??[]).map(H=>({id:Se(),tableId:X.id,data:H,updatedAt:Date.now()}));await e.store.rows(X.id).bulkInsert(pe)}w.set(q.name,X.id),g++}catch(E){y.push({file:re,error:E.message})}finally{W.fraction((z+1)/u.length)}}finally{W.done()}}let $=0,x="",T=null;const S=r?a.files["_easydb.workspace.json"]:void 0;if(S)try{const L=await ii(S),W=JSON.parse(L),z=W.viewTemplates??[],re=W.viewInstances??[],G=W.settings??[];T=new Set(re.map(q=>q.id));const E=await Ad(e.store.viewTemplates,i,z);for(const q of re){let X;if(q.tableName&&(X=w.get(q.tableName)??p.get(q.tableName)?.id),X??=q.tableId,!X)continue;const ue=E.get(q.templateId)??q.templateId;await e.store.viewInstances.upsert({...q,workspaceId:i,tableId:X,templateId:ue}),$++}for(const q of G)await e.store.settings.upsert(q)}catch(L){x=`Workspace metadata import failed: ${L.message}`}if(y.length>0){const L=y.map(W=>`• ${W.file}: ${W.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${g} of ${u.length} tables. ${y.length} failed:
${L}${x?`
${x}`:""}`,{kind:"warning",title:"Gist sync"})}else{const L=$>0?` (+${$} views)`:"",W=t==="settings"?`Pulled settings${L}.`:`Pulled ${g} table${g===1?"":"s"}.${L}`;e.ui.dialogs.toast(W,{kind:"success",title:"Gist sync"}),x&&e.ui.dialogs.toast(x,{kind:"warning",title:"Gist sync"})}y.length===0&&await qh(e,i,{tableNames:n?new Set([...w.keys()].map(L=>L.toLowerCase())):null,viewInstanceIds:T}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Nv(e,t,n){let r;try{const o=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)return[];const a=await o.json();r=Object.keys(a.files??{})}catch{return[]}const s=Uh(r,n);return s.length===0?[]:await e.ui.dialogs.confirm(`The gist has these table files that this workspace no longer has:

${na(s)}

Delete them from the gist, so it matches this workspace? Keep them if another device pushed them and you have not pulled yet.`,"Delete table files missing from this workspace?")?s:[]}function na(e,t=8){const n=e.slice(0,t).map(s=>`• ${s}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function qh(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(u=>u.workspaceId===t&&!n.tableNames.has(u.name.toLowerCase())):[],s=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(u=>u.workspaceId===t&&!n.viewInstanceIds.has(u.id)):[];if(r.length===0&&s.length===0)return;const i=[];if(r.length>0&&i.push(`${r.length} table${r.length===1?"":"s"}:
`+na(r.map(u=>u.name))),s.length>0&&i.push(`${s.length} view${s.length===1?"":"s"}:
`+na(s.map(u=>u.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${i.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const u of s)await e.store.viewInstances.remove(u.id);const{deleteTable:a}=await ze(async()=>{const{deleteTable:u}=await Promise.resolve().then(()=>$f);return{deleteTable:u}},void 0);for(const u of r)await a(u.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${s.length} view${s.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function zv(e,t){const n=await bl(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=r.source!=null?[]:await e.store.rows(t).find(),i=JSON.stringify(gl(r,s),null,2),o={[`${Pe(r.name)}.table.json`]:{content:i}},a=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!a.ok)throw new Error(await Vr(a));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Fv(e,t){const n=await ns(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`${Pe(r.name)}.table.json`,i=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await Vr(i));const a=(await i.json()).files[s];if(!a){await e.ui.dialogs.alert(`No file "${s}" in the gist for this table.`,"Gist sync");return}const u=await ii(a),d=JSON.parse(u);if(!d.name||!Array.isArray(d.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:d.title,columns:d.columns,...ra(d),updatedAt:Date.now()})).source==null){const g=e.store.rows(t),y=await g.find();await g.bulkRemove(y.map($=>$.id));const w=(d.rows??[]).map($=>({id:Se(),tableId:t,data:$,updatedAt:Date.now()}));await g.bulkInsert(w)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Uv(e,t){const n=await ns(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`file-${Pe(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${s}`,"_blank","noopener")}function ra(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function ii(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function Vr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Bv=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:ii,init:Av,load:Rv,meta:Tv,offerPrune:qh,staleTableFiles:Uh},Symbol.toStringTag,{value:"Module"})),Hh="server-sync:url";function Kh(e){return`server-sync:etag:${e}`}async function Vh(e){const n=(await e.store.settings.findOne(Hh))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function qv(e,t){await e.store.settings.upsert({name:Hh,value:t.replace(/\/+$/,"")})}async function Gh(e,t){const r=(await e.store.settings.findOne(Kh(t)))?.value;return typeof r=="string"?r:null}async function On(e,t,n){await e.store.settings.upsert({name:Kh(t),value:n})}function Ti(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function vu(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Wh(e,t,n){const r=bi(n,t),s=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of s){const a=e.store.rows(o.id),u=await a.find();await a.bulkRemove(u.map(d=>d.id)),await e.store.tables.remove(o.id)}let i=0;for(const o of r){const a=Se(),u=await e.store.tables.insert({id:a,workspaceId:t,name:o.name,code:Pe(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),d=o.rows.map(p=>({id:Se(),tableId:u.id,data:p,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(d),i++}return i}const Hv={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Kv(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ze(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(i)try{i==="push"?await Vv(t):i==="pull"&&await Gv(t)}catch(o){t.ui.dialogs.toast(`${i==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function Vv(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Yh(e);if(!n)return;const r=await Ei(e),s=await Gh(e,t),i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:i,body:r});if(o.status===412){const u=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await On(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await Qh(o));const a=Ti(o.headers.get("ETag"));a&&await On(e,t,a),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function Gv(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Yh(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const s=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(s.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!s.ok)throw new Error(await Qh(s));const i=Ti(s.headers.get("ETag")),o=await s.json(),a=await Wh(e,t,o);i&&await On(e,t,i),e.ui.dialogs.toast(`Pulled ${a} table${a===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function Yh(e){const t=await Vh(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await qv(e,n),n.replace(/\/+$/,"")}async function Qh(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Wv=Object.freeze(Object.defineProperty({__proto__:null,init:Kv,meta:Hv},Symbol.toStringTag,{value:"Module"})),Yv={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Qv(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Xv=Object.freeze(Object.defineProperty({__proto__:null,init:Qv,meta:Yv},Symbol.toStringTag,{value:"Module"}));function Ii(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function Ai(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function Ri(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const Jv={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function Zv(e){customElements.get("cell-date")||customElements.define("cell-date",e0),e.ui.registerCellRenderer("date","cell-date")}class e0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Ri({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(t0(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",sl(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:Ai(n,this.pencil()));return}if(this._readonly){this.textContent=sa(this._value);return}const t=document.createElement("input");t.type="date",t.value=sa(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Ii(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function sa(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function t0(e){return e==null||typeof e=="string"&&e.trim()===""?!1:sa(e)===""}const n0=Object.freeze(Object.defineProperty({__proto__:null,init:Zv,meta:Jv},Symbol.toStringTag,{value:"Module"})),r0={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function s0(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",i0),e.ui.registerCellRenderer("datetime","cell-datetime")}class i0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Ri({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(o0(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",sl(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:Ai(n,this.pencil()));return}if(this._readonly){this.textContent=ia(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=ia(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Ii(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function ia(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function o0(e){return e==null||typeof e=="string"&&e.trim()===""?!1:ia(e)===""}const a0=Object.freeze(Object.defineProperty({__proto__:null,init:s0,meta:r0},Symbol.toStringTag,{value:"Module"})),l0={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function c0(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",u0),e.ui.registerCellRenderer("boolean","cell-boolean")}class u0 extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const s=Ri({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(s),this._editor=s;return}const t=ph(this._value);if(t==="invalid"){const s=document.createElement("span");s.textContent=String(this._value),s.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",sl(s,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?s:Ai(s,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return Ii(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const d0=Object.freeze(Object.defineProperty({__proto__:null,init:c0,meta:l0},Symbol.toStringTag,{value:"Module"})),h0={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function f0(e){customElements.get("cell-color")||customElements.define("cell-color",p0),e.ui.registerCellRenderer("color","cell-color")}class p0 extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const m0=Object.freeze(Object.defineProperty({__proto__:null,init:f0,meta:h0},Symbol.toStringTag,{value:"Module"})),g0=[{bytes:[137,80,78,71,13,10,26,10],type:"image/png"},{bytes:[71,73,70,56],type:"image/gif"},{bytes:[255,216,255],type:"image/jpeg"},{bytes:[66,77],type:"image/bmp"}],oa=16;function b0(e){const t=(n,r)=>r.split("").every((s,i)=>e[n+i]===s.charCodeAt(0));return e.length>=12&&t(0,"RIFF")&&t(8,"WEBP")}function Vs(e){for(const{bytes:t,type:n}of g0)if(t.every((r,s)=>e[s]===r))return n;return b0(e)?"image/webp":null}function Xh(e){if(e==null)return null;const t=y0(e);if(t){const i=Array.prototype.slice.call(t,0,oa),o=Vs(i);return o?`data:${o};base64,${ef(t)}`:null}if(typeof e!="string")return null;const n=e.trim();if(n==="")return null;if(n.startsWith("data:"))return $0(n);if(/^(https?:)?\/\//i.test(n)||n.startsWith("/")&&/\.(png|jpe?g|gif|webp|bmp|svg)(\?|#|$)/i.test(n))return n;const r=v0(n);if(r){const i=Zh(r.slice(0,oa*2)),o=Vs(i);return o?`data:${o};base64,${x0(r)}`:null}const s=Jh(n);if(s){const i=Vs(s);return i?`data:${i};base64,${n}`:null}return null}function w0(e){return Xh(e)!==null}function y0(e){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.length>0&&e.every(t=>typeof t=="number")?e:null;if(typeof e=="object"&&e!==null){const t=e;if(typeof t[0]!="number")return null;const n=[];for(let r=0;typeof t[String(r)]=="number";r++)n.push(t[String(r)]);return n}return null}function v0(e){const t=/^[xX]\s*(['"])([0-9a-fA-F]*)\1$/.exec(e);return t?.[2]?t[2]:e.length>=8&&e.length%2===0&&/^[0-9a-fA-F]+$/.test(e)?e:null}function Jh(e){if(e.length<8||!/^[A-Za-z0-9+/]+={0,2}$/.test(e))return null;try{const t=e.slice(0,Math.ceil(oa*4/3));return[...atob(t.slice(0,t.length-t.length%4))].map(r=>r.charCodeAt(0))}catch{return null}}function $0(e){const t=/^data:([^;,]*)(;base64)?,([\s\S]*)$/.exec(e);if(!t)return null;if((t[1]??"").toLowerCase().startsWith("image/"))return e;const r=t[3]??"";if(!t[2])return null;const s=Jh(r),i=s&&Vs(s);return i?`data:${i};base64,${r}`:null}function Zh(e){const t=[];for(let n=0;n+1<e.length;n+=2)t.push(parseInt(e.slice(n,n+2),16));return t}function ef(e){let n="";for(let r=0;r<e.length;r+=32768){const s=Array.prototype.slice.call(e,r,r+32768);n+=String.fromCharCode(...s)}return btoa(n)}function x0(e){return ef(Zh(e))}const k0={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function C0(e){customElements.get("cell-image")||customElements.define("cell-image",_0),e.ui.registerCellRenderer("image","cell-image")}class _0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const s=Ri({value:typeof this._value=="string"?this._value:"",onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("mousedown",o=>o.preventDefault()),i.addEventListener("click",()=>this.pickFile()),r.append(s,i),this.append(r),this._editor=s;return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0";const n=Xh(this._value);if(n){const r=document.createElement("img");r.src=n,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("click",()=>this.pickFile()),t.append(s)}}this.append(this._readonly?t:Ai(t,this.pencil()))}pencil(){return Ii(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const S0=Object.freeze(Object.defineProperty({__proto__:null,init:C0,meta:k0},Symbol.toStringTag,{value:"Module"})),tf=200,nf=100;function E0(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<tf||e.h<nf?null:{...e}}function oi(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const $u=640;function Oi(){return typeof window>"u"?!1:typeof window.matchMedia=="function"?window.matchMedia(`(max-width: ${$u}px)`).matches:window.innerWidth<=$u}const T0=["n","s","e","w","ne","nw","se","sw"];function I0(e,t,n,r){const s=r>0?r:1;return{...e,x:e.x+t/s,y:e.y+n/s}}function A0(e,t,n,r,s,i,o){const a=s>0?s:1,u=n/a,d=r/a;let{x:p,y:g,w:y,h:w}=e;return t.includes("e")&&(y=Math.max(i,e.w+u)),t.includes("s")&&(w=Math.max(o,e.h+d)),t.includes("w")&&(y=Math.max(i,e.w-u),p=e.x+(e.w-y)),t.includes("n")&&(w=Math.max(o,e.h-d),g=e.y+(e.h-w)),{x:p,y:g,w:y,h:w}}function R0(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:e?.smallified?{status:"smallified",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function xu(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function O0(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized",smallified:e.status==="smallified"}}const D0="#01579b",P0="input, textarea, select, button, a, .jsPanel-controlbar";function ku(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(P0))return!0;return!1}const L0={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let Lo=100;function Cu(){let e=Lo;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return Lo=e+1,Lo}function M0(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(!(n===e||n.style.display==="none")&&Number(n.style.zIndex)>t)return!1;return!0}const aa=new Set,Gr=new Set;function j0(){let e=null;for(const t of Gr)t.style.display!=="none"&&(!e||Number(t.style.zIndex)>Number(e.style.zIndex))&&(e=t);return e}const rf=e=>{if(e.key!=="Escape"||e.defaultPrevented)return;const t=j0();t&&(e.preventDefault(),t.close())};function N0(e){Gr.size===0&&document.addEventListener("keydown",rf),Gr.add(e)}function z0(e){Gr.delete(e)&&Gr.size===0&&document.removeEventListener("keydown",rf)}function F0(){return[...aa].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function kn(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=L0[e]??"",r.addEventListener("click",s=>{s.stopPropagation(),n()}),r}function Di(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id;let n=e.color??D0;t.style.setProperty("--eda-panel-color",n);const r=document.createElement("div");r.className="jsPanel-hdr";const s=document.createElement("div");s.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const o=document.createElement("div");o.className="jsPanel-titlebar",o.tabIndex=-1,o.style.outline="none",o.addEventListener("pointerdown",()=>o.focus());const a=document.createElement("span");a.className="jsPanel-title",a.textContent=e.title,o.append(a);const u=document.createElement("div");u.className="jsPanel-controlbar",u.append(kn("smallify","Collapse",()=>H("smallify")),kn("minimize","Minimize",()=>H("minimize")),kn("maximize","Maximize",()=>t.maximize()),kn("normalize","Restore",()=>H("normalize")),kn("close","Close",()=>t.close())),s.append(i,o,u),r.append(s);const d=document.createElement("div");d.className="jsPanel-content",d.append(e.content);const p=document.createElement("div");p.className="jsPanel-ftr",e.footerToolbar&&(p.classList.add("active"),p.append(e.footerToolbar)),t.append(r,d,p);const g=[];for(const K of T0){const se=document.createElement("div");se.className="eda-resize",se.dataset.edge=K,t.append(se),g.push({zone:se,edge:K})}if(t.style.zIndex=String(Cu()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const K=e.contentSize??{w:720,h:360};t.style.width=`${K.w}px`,t.style.height=`${K.h+r.offsetHeight+p.offsetHeight}px`}const y=e.position??"center",w=t.offsetWidth,$=e.container.clientWidth;y==="center"?(t.style.left=`${Math.max(0,($-w)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in y?(t.style.left=`${Math.max(0,($-w)/2)}px`,t.style.top=`${y.centerTopOffset}px`):(t.style.left=`${y.x}px`,t.style.top=`${y.y}px`);let x=R0(e.boot),T=z(),S=null,L=null,W=null;function z(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function re(K){t.style.left=`${K.x}px`,t.style.top=`${K.y}px`,t.style.width=`${K.w}px`,t.style.height=`${K.h}px`}function G(){const K=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-K.x/K.scale}px, ${-K.y/K.scale}px) scale(${1/K.scale})`}function E(){const K=e.viewport?.getState()??{x:0,y:0,scale:1},se=K.scale||1;return{x:-K.x/se,y:-K.y/se,w:e.container.clientWidth/se,h:e.container.clientHeight/se}}function q(){G(),L??=e.viewport?.subscribe(G)??null,!W&&typeof ResizeObserver<"u"&&(W=new ResizeObserver(G),W.observe(e.container))}function X(){L?.(),L=null,W?.disconnect(),W=null,t.style.transform="",t.style.transformOrigin=""}function ue(){const K=document.createElement("div");K.className="jsPanel-replacement",K.id=`${e.id}-min`,K.style.setProperty("--eda-panel-color",n);const se=document.createElement("div");se.className="jsPanel-headerlogo",se.innerHTML=i.innerHTML;const ve=document.createElement("span");return ve.className="jsPanel-title",ve.textContent=a.textContent,K.append(se,ve,kn("normalize","Restore",()=>{H("normalize"),t.front()}),kn("close","Close",()=>t.close())),K.addEventListener("click",Qe=>{Qe.target.closest("button")||(H("normalize"),t.front())}),K}function pe(K){switch(K==="maximized"&&x.status!=="maximized"&&X(),K==="minimized"&&x.status!=="minimized"&&(S?.remove(),S=null,t.style.display=""),x.status){case"minimized":{K==="normalized"?T=z():K==="smallified"&&(T={...T,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const se=e.minimizeTo?document.querySelector(e.minimizeTo):null;S=ue(),(se??e.container).append(S);break}case"maximized":K==="normalized"?T=z():K==="smallified"&&(T={...T,x:t.offsetLeft,y:t.offsetTop}),q();break;case"smallified":T=z(),t.style.height=`${r.offsetHeight}px`;break;case"normalized":K==="smallified"?T={...T,x:t.offsetLeft,y:t.offsetTop}:K==="maximized"&&Oi()&&(T=E()),re(T);break}t.dataset.status=x.status}function H(K){const se=x;x=xu(x,K),x.status!==se.status&&(pe(se.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>x.status}),t.minimize=()=>H("minimize"),t.maximize=(K,se)=>{H("maximize"),se!==!0&&t.front()},t.normalize=()=>H("normalize"),t.smallify=()=>H("smallify"),t.front=(K,se)=>{t.style.zIndex=String(Cu()),se!==!1&&e.onfronted?.()},t.close=()=>{x.status!=="closed"&&(x=xu(x,"close"),S?.remove(),X(),aa.delete(t),z0(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=K=>{a.textContent=K;const se=S?.querySelector(".jsPanel-title");se&&(se.textContent=K)},t.setHeaderLogo=K=>{i.innerHTML=K;const se=S?.querySelector(".jsPanel-headerlogo");se&&(se.innerHTML=K)},t.setHeaderColor=K=>{n=K,t.style.setProperty("--eda-panel-color",n),S?.style.setProperty("--eda-panel-color",n)},t.centerInViewport=()=>{if(x.status!=="normalized"&&x.status!=="smallified")return;const K=E(),se=t.offsetWidth,ve=t.offsetHeight;re({x:K.x+Math.max(0,(K.w-se)/2),y:K.y+Math.max(0,(K.h-ve)/2),w:se,h:ve})},t.persistFlags=()=>O0(x),t.persistRect=()=>x.status==="smallified"?{...T,x:t.offsetLeft,y:t.offsetTop}:x.status==="minimized"||x.status==="maximized"?{...T}:z(),aa.add(t),e.closeOnEscape&&N0(t),t.addEventListener("pointerdown",()=>{M0(t)||t.front()},!0);const Z=K=>{K.addEventListener("pointerdown",se=>{if(se.button!==0||ku(se)||x.status==="maximized"||x.status==="minimized")return;const ve=z(),Qe=e.viewport?.getState().scale??1,je=se.pointerId,me=se.clientX,Ne=se.clientY;let kt=!1;const ye=st=>{if(st.pointerId!==je)return;kt=!0;const et=I0(ve,st.clientX-me,st.clientY-Ne,Qe);t.style.left=`${et.x}px`,t.style.top=`${et.y}px`},Re=st=>{st.pointerId===je&&(K.removeEventListener("pointermove",ye),K.removeEventListener("pointerup",Re),K.removeEventListener("pointercancel",Re),kt&&e.onmoved?.())};K.setPointerCapture(se.pointerId),K.addEventListener("pointermove",ye),K.addEventListener("pointerup",Re),K.addEventListener("pointercancel",Re)})};Z(o),Z(i),Z(p);for(const{zone:K,edge:se}of g)K.addEventListener("pointerdown",ve=>{if(ve.button!==0||x.status!=="normalized")return;const Qe=z(),je=e.viewport?.getState().scale??1,me=ve.pointerId,Ne=ve.clientX,kt=ve.clientY;let ye=!1;const Re=et=>{et.pointerId===me&&(ye=!0,re(A0(Qe,se,et.clientX-Ne,et.clientY-kt,je,tf,nf)))},st=et=>{et.pointerId===me&&(K.removeEventListener("pointermove",Re),K.removeEventListener("pointerup",st),K.removeEventListener("pointercancel",st),ye&&e.onresized?.())};K.setPointerCapture(ve.pointerId),K.addEventListener("pointermove",Re),K.addEventListener("pointerup",st),K.addEventListener("pointercancel",st)});return r.addEventListener("dblclick",K=>{ku(K)||(x.status==="maximized"?H("normalize"):t.maximize())}),x.status!=="normalized"?pe("normalized"):t.dataset.status="normalized",t}let sf=null;function U0(e){sf=e}function ai(){return sf}function Pi(){return{getState:()=>ai()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>ai()?.subscribe(e)??(()=>{})}}function of(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let B0=0;function af(e,t){const n=document.createElement("button");return n.type="button",n.title=t,n.setAttribute("aria-label",t),n.innerHTML=e,n.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",n.addEventListener("mouseenter",()=>n.style.color="#4b5563"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n}const q0='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',H0='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>';function la(e,t,n,r){const s=r?.readonly===!0,i=document.createElement("div");i.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const o=document.createElement("textarea");o.value=t,o.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const a=document.createElement("div");a.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const u=document.createElement("button");u.type="button",u.textContent=s?"Close":"Cancel",u.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const d=document.createElement("button");d.type="button",d.textContent="Save",d.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",s?(o.readOnly=!0,o.style.background="#f9fafb",a.append(u)):a.append(u,d),i.append(o,a);const p=Di({id:`easydb-html-edit-${++B0}`,container:of(),title:e,color:"#7c3aed",content:i,contentSize:{w:520,h:400},position:"center",closeOnEscape:!0,boot:{maximized:Oi()},minimizeTo:"#easydb-minimized-dock",viewport:Pi()});u.addEventListener("click",()=>p.close()),d.addEventListener("click",()=>{n(o.value),p.close()}),o.addEventListener("keydown",g=>{s||g.key==="Enter"&&(g.ctrlKey||g.metaKey)&&(g.preventDefault(),d.click())}),setTimeout(()=>o.focus(),0)}const wl=2e3;let ca=wl;function K0(e){ca=typeof e=="number"&&Number.isFinite(e)&&e>0?Math.floor(e):wl}let V0=0;class lf extends HTMLElement{constructor(){super(...arguments),this.language="Preview",this._value="",this._readonly=!1}toHtml(t){return t||null}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}get title_(){return this._label??this.language}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText=this._readonly?"color:#9ca3af":"color:#9ca3af;cursor:text",o.textContent="empty",this._readonly||(o.title="Click to edit",o.addEventListener("click",()=>this.openEditor())),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=$b(this.toHtml(this._value)??this._value);n.textContent=r.length>ca?r.slice(0,ca)+"…":r,n.title=this._readonly?"Click to view the source":"Click to edit",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const s=document.createElement("span");s.style.cssText="flex:1 1 auto";const i=af(H0,"Open in a window");i.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,s,i),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box";const n=this.toHtml(this._value);if(n!==null)t.innerHTML=n;else{const r=document.createElement("pre");r.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",r.textContent=this._value,t.append(r)}Di({id:`easydb-preview-popup-${++V0}`,container:of(),title:this.title_,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},boot:{maximized:Oi()},closeOnEscape:!0,minimizeTo:"#easydb-minimized-dock",viewport:Pi()})}openEditor(){const t=this._source!==void 0,n=t?this._source:this._value;if(this._readonly){la(`View ${this.title_}`,n,()=>{},{readonly:!0});return}la(`Edit ${this.title_}`,n,r=>{t?this._source=r:(this._value=r,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:r},bubbles:!0,composed:!0}))})}}const G0={id:"preview",name:"Preview",type:"cell-renderer",version:"0.4.0",description:`Shows a long value as a plain-text preview (first N characters); click to edit the source in a dialog, or use the popup icon to open the full value in a window. HTML is shown there as markup, and Markdown is recognised and converted first — so a Markdown column reads as formatted text without a script. Apply by setting a column's renderer to "preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/preview.ts"};async function _u(e){K0(await e.settings.get("preview","maxChars"))}function W0(e){customElements.get("preview-cell")||customElements.define("preview-cell",Y0),e.ui.registerCellRenderer("preview","preview-cell"),e.ui.registerCellRenderer("html-preview","preview-cell"),e.ui.registerSettings("preview","Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:wl,scope:"workspace",description:"A safety cap on how much text goes into a preview cell. What you SEE follows the column width — the cell ellipsizes like any other, so widen the column to read more. Lower this only to cut long values short regardless of width. Applies to cells rendered after the change (reload to refresh all). Shared with the `markdown` renderer."}]),_u(e),e.events.on("app:ready",()=>void _u(e))}class Y0 extends lf{toHtml(t){const n=Tb(t);return n==="html"?t:n==="markdown"?wi(t):null}}const Q0=Object.freeze(Object.defineProperty({__proto__:null,init:W0,meta:G0},Symbol.toStringTag,{value:"Module"})),X0={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup); a pencil on the right edits the source. Apply by setting a column's renderer to "html". For a truncated preview use "preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function J0(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",Z0),e.ui.registerCellRenderer("html","html-render-cell")}class Z0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML",this._readonly=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label??"HTML"}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:flex;align-items:flex-start;gap:0.25rem;width:100%";const n=document.createElement("span");if(n.style.cssText="flex:1 1 auto;min-width:0",this._value?n.innerHTML=this._value:(n.style.color="#9ca3af",n.textContent="empty"),t.append(n),!this._readonly){const r=af(q0,"Edit the HTML");r.addEventListener("click",s=>{s.stopPropagation(),this.openEditor()}),t.append(r)}this.append(t)}openEditor(){const t=this._source!==void 0;la(`Edit ${this._label}`,t?this._source:this._value,n=>{t?this._source=n:(this._value=n,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))})}}const e$=Object.freeze(Object.defineProperty({__proto__:null,init:J0,meta:X0},Symbol.toStringTag,{value:"Module"})),t$={id:"cell-markdown",name:"Markdown",type:"cell-renderer",version:"0.2.0",description:`For a column written in Markdown: the cell shows one line of plain text with the markers flattened, and the popup icon opens the formatted value in a window. Click the text to edit the Markdown source. Apply by setting a column's renderer to "markdown". Unlike "preview" it never guesses — the value is always read as Markdown.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 15V9l3 3 3-3v6"/><path d="M16 9v6"/><path d="M14 13l2 2 2-2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-markdown.ts"};function n$(e){customElements.get("markdown-cell")||customElements.define("markdown-cell",r$),e.ui.registerCellRenderer("markdown","markdown-cell")}class r$ extends lf{constructor(){super(...arguments),this.language="Markdown"}toHtml(t){return t?wi(t):null}}const s$=Object.freeze(Object.defineProperty({__proto__:null,init:n$,meta:t$},Symbol.toStringTag,{value:"Module"})),i$={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function o$(e){customElements.get("cell-link")||customElements.define("cell-link",a$),e.ui.registerCellRenderer("link","cell-link")}class a$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:l$(t),r=!this._editing&&!n?c$(t):null,s=!this._editing&&!n&&!r?u$(t):null;if(n||r||s){const i=document.createElement("span");i.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const a=document.createElement("button");a.type="button",a.title="Edit",a.textContent="✎",a.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",a.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),i.append(o,a),this.append(i)}else{const i=document.createElement("input");i.type="text",i.value=this.rawValue,i.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",i.addEventListener("change",()=>{this._editor===i&&this.commit(i.value)}),i.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(i.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),i.addEventListener("blur",()=>{this._editor===i&&this.commit(i.value)}),this.append(i),this._editor=i,this._editing&&setTimeout(()=>{i.focus(),i.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function l$(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function c$(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function u$(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),s=t.startsWith("+");return!r&&!s&&n.length<10?null:t}const d$=Object.freeze(Object.defineProperty({__proto__:null,init:o$,meta:i$},Symbol.toStringTag,{value:"Module"})),h$={id:"cell-tags",name:"Cell Tags",type:"cell-renderer",version:"0.1.0",description:'Renderer for `array` columns: each value in the cell shows as its own pill. A comma list ("foo,bar"), a JSON array ("[\\"Foo\\",\\"Bar\\"]") and a real array all read the same. A pencil edits the raw list; an empty list shows nothing.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-tags.ts"};function f$(e){customElements.get("cell-tags")||customElements.define("cell-tags",m$),e.ui.registerCellRenderer("tags","cell-tags")}const p$="flex:0 1 auto;min-width:0;display:inline-block;max-width:100%;padding:0 0.4rem;border:1px solid #d1d5db;border-radius:999px;background:#f3f4f6;color:#374151;font-size:0.85em;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";class m$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._readonly=!1,this._editor=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this._readonly&&(this._editing=!1),this.render())}get readonly(){return this._readonly}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing&&!this._readonly){this.renderEditor();return}const t=Dt(this._value),n=document.createElement("span");n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";for(const r of t){const s=document.createElement("span");s.className="tag-pill",s.textContent=r,s.title=r,s.style.cssText=p$,n.append(s)}this._readonly||n.append(this.pencil()),this.append(n)}pencil(){const t=document.createElement("button");return t.type="button",t.title="Edit the list",t.textContent="✎",t.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this._editing=!0,this.render()}),t}renderEditor(){const t=document.createElement("input");t.type="text",t.value=Dt(this._value).length===0?"":this._value,t.title="Comma-separated, or a JSON array",t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",t.addEventListener("change",()=>{this._editor===t&&this.commit(t.value)}),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),this.commit(t.value)):n.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),t.addEventListener("blur",()=>{this._editor===t&&this.commit(t.value)}),this.append(t),this._editor=t,setTimeout(()=>{t.focus(),t.select()},0)}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const g$=Object.freeze(Object.defineProperty({__proto__:null,init:f$,meta:h$},Symbol.toStringTag,{value:"Module"})),Lr={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},b$=120,cf=50,w$=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,y$=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function uf(e){return/^https?:\/\/\S+$/i.test(e)}function v$(e){return/^data:image\//i.test(e)?!0:uf(e)?w$.test(e):w0(e)}function df(e,t){if(e==="array")return"tags";if(e!=="string")return;const n=[];for(const s of t){if(s==null)continue;const i=typeof s=="string"?s.trim():String(s).trim();i&&n.push(i)}if(n.length===0)return;if(n.every(v$))return"image";if(n.every(uf))return"link";if(n.some(s=>y$.test(s))||n.reduce((s,i)=>s+i.length,0)/n.length>b$)return"preview"}function yl(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=df(n.type,t.map(s=>s[n.field]));return r?{...n,renderer:r}:n})}function $$(e){e.events.on("import:after",({tableId:t})=>{x$(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:Lr.name}),null;const s=(await t.store.rows(r).find()).slice(0,cf);if(s.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:Lr.name}),null;const i=n.map(({renderer:u,...d})=>d),o=yl(i,s.map(u=>u.data)),a=o.filter((u,d)=>u.renderer!==n[d]?.renderer).length;return t.ui.dialogs.toast(a===0?"No renderer fits these values — columns left as they are.":`Set ${a} renderer${a===1?"":"s"}. Press Save to keep them.`,{kind:a===0?"info":"success",title:Lr.name}),o}})}async function x$(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(i=>i.renderer))return;const r=(await e.store.rows(t).find()).slice(0,cf);if(r.length===0)return;const s=yl(n.columns,r.map(i=>i.data));if(s.every((i,o)=>i.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:s,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:Lr.id,phase:"runtime",error:n})}}const k$=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:df,init:$$,meta:Lr,withInferredRenderers:yl},Symbol.toStringTag,{value:"Module"}));function Gs(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function C$(e){return!!(e.source||e.origin)}const _$="#01579b",S$="#6d28d9";function Su(e){return C$(e)?S$:_$}const Dr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',Eu={normal:`<svg ${Dr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${Dr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${Dr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${Dr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},E$=`<svg ${Dr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var T$=Object.defineProperty,I$=Object.getOwnPropertyDescriptor,Li=(e,t,n,r)=>{for(var s=r>1?void 0:r?I$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&T$(t,n,s),s};function A$(e,t,n){(At.instance??O$()).show(e,t,n)}function R$(e){if(!e)return null;const t=Gs(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function O$(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let At=class extends ke{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),At.instance=this}disconnectedCallback(){super.disconnectedCallback(),At.instance===this&&(At.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return ie;const r=n?k`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:k`${t}`;return k`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=R$(this.provenance);return k`
      <dialog @cancel=${this.close} @keydown=${vt}>
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
                      </div>`:ie}
                </div>`:ie}
            ${e?.descriptionHtml?k`<div class="desc">${Gn(e.descriptionHtml)}</div>`:e?.description?k`<div class="desc">${e.description}</div>`:ie}
            ${t?k`<dl>${this.row("Source",e?.source,e?.sourceUrl)} ${this.row("License",e?.license,e?.licenseUrl)} ${this.row("About",e?.about,e?.aboutUrl)}</dl>`:ie}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?k`<p class="empty">No additional information.</p>`:ie}
          </div>
        </form>
      </dialog>
    `}};At.instance=null;At.styles=[yt,_e`
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
    `];Li([F()],At.prototype,"name",2);Li([F()],At.prototype,"info",2);Li([F()],At.prototype,"provenance",2);At=Li([Ee("table-info-dialog")],At);const D$=.25,P$=4;function L$(e){return Math.min(P$,Math.max(D$,e))}function Tu(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const Ar={x:0,y:0,scale:1};function Iu(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function M$(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function j$(e,t){let n={...Ar};t.style.transformOrigin="0 0";const r=new Set,s=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const H of r)H({...n})};let i="none",o={...Ar},a=0,u=0,d=0,p=0,g=0,y=0;const w=(H,Z)=>{const K=e.getBoundingClientRect();return{x:H-K.left,y:Z-K.top}},$=H=>{if(H.touches.length===2){i="pinch",o={...n};const[Z,K]=[H.touches[0],H.touches[1]];d=Iu(Z,K)||1;const se=w((Z.clientX+K.clientX)/2,(Z.clientY+K.clientY)/2);p=(se.x-n.x)/n.scale,g=(se.y-n.y)/n.scale,H.preventDefault();return}if(H.touches.length===1&&!M$(H.target)){const Z=H.timeStamp;if(Z-y<300){n={...Ar},s(),y=0,i="none",H.preventDefault();return}y=Z,i="pan",o={...n},a=H.touches[0].clientX,u=H.touches[0].clientY}else i="none"},x=H=>{if(i==="pan"&&H.touches.length===1){const Z=H.touches[0];n=Tu(o,Z.clientX-a,Z.clientY-u),s(),H.preventDefault()}else if(i==="pinch"&&H.touches.length>=2){const[Z,K]=[H.touches[0],H.touches[1]],se=L$(o.scale*(Iu(Z,K)/d)),ve=w((Z.clientX+K.clientX)/2,(Z.clientY+K.clientY)/2);n={x:ve.x-p*se,y:ve.y-g*se,scale:se},s(),H.preventDefault()}},T=H=>{H.touches.length===0?i="none":H.touches.length===1&&i==="pinch"&&(i="pan",o={...n},a=H.touches[0].clientX,u=H.touches[0].clientY)};let S=!1,L={...Ar},W=0,z=0,re=!1;const G=(H,Z)=>{const K=e.getBoundingClientRect();return H>=K.left&&H<=K.right&&Z>=K.top&&Z<=K.bottom},E=H=>{if(!S)return;const Z=H.clientX-W,K=H.clientY-z;!re&&Math.hypot(Z,K)<4||(re=!0,document.body.style.cursor="grabbing",n=Tu(L,Z,K),s(),H.preventDefault())},q=()=>{S&&(S=!1,document.body.style.cursor="",window.removeEventListener("mousemove",E,!0),window.removeEventListener("mouseup",X,!0))};function X(){q()}const ue=H=>{H.button===2&&G(H.clientX,H.clientY)&&(S=!0,re=!1,L={...n},W=H.clientX,z=H.clientY,window.addEventListener("mousemove",E,!0),window.addEventListener("mouseup",X,!0))},pe=H=>{re&&(H.preventDefault(),re=!1)};return e.addEventListener("touchstart",$,{passive:!1}),e.addEventListener("touchmove",x,{passive:!1}),e.addEventListener("touchend",T),e.addEventListener("touchcancel",T),window.addEventListener("mousedown",ue,!0),window.addEventListener("contextmenu",pe,!0),{snapshot:()=>({...n}),reset:()=>{n={...Ar},s()},restore:H=>{n={...H},s()},subscribe:H=>(r.add(H),()=>r.delete(H)),dispose:()=>{e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",x),e.removeEventListener("touchend",T),e.removeEventListener("touchcancel",T),window.removeEventListener("mousedown",ue,!0),window.removeEventListener("contextmenu",pe,!0),q()}}}const zs=new Map;function rs(e,t){const r=(zs.get(e)??Promise.resolve()).then(t,t);return zs.set(e,r),r.finally(()=>{zs.get(e)===r&&zs.delete(e)}),r}let Mo=0;function hf(){return Mo=Math.max(Date.now(),Mo+1),Mo}const Mi=new Map;function ff(e,t){Mi.set(e,t)}function ji(e){Mi.delete(e)}function N$(e){return Mi.has(e)}function z$(e){try{Mi.get(e)?.()}catch{}}const ln=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function F$(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let Au=!1;async function U$(){Au||(Au=!0,document.addEventListener("easydb:restack-windows",()=>void Ru())),await Ru()}async function Ru(){if(ln)return;const e=await ae();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),s=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],i=F$(s);if(t<12&&!i.every(o=>N$(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of i)z$(o);return}}const B$=12;function q$(e,t,n,r,s=B$){const i=Ou(e.x,t.x,t.w,n,e.scale,s),o=Ou(e.y,t.y,t.h,r,e.scale,s);return i===e.x&&o===e.y?null:{...e,x:i,y:o}}function Ou(e,t,n,r,s,i){const o=t*s+e,a=n*s,u=o+a,d=r-i*2;return a>=d?o<=i&&u>=r-i?e:i-t*s:o<i?i-t*s:u>r-i?r-i-a-t*s:e}function pf(e){if(e.status==="minimized"&&e.normalize(),Oi()){e.status!=="maximized"&&e.maximize(),e.front();return}e.status!=="maximized"&&H$(e),e.front()}function H$(e){const t=ai(),n=document.getElementById("easydb-panels");if(!t||!n)return;const r=q$(t.snapshot(),{x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight},n.clientWidth,n.clientHeight);r&&t.restore(r)}var K$=Object.defineProperty,V$=Object.getOwnPropertyDescriptor,ss=(e,t,n,r)=>{for(var s=r>1?void 0:r?V$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&K$(t,n,s),s};let Dn=class extends ke{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return k`<button class="icon ${e?"active":""}" title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"} @click=${this.openSearch}>
        <span class="mi sm">search</span>
      </button>`}return k`<input type="search" placeholder="search…" .value=${this.query} @input=${this.onInput} @blur=${this.onBlur} />`}};Dn.styles=[xt,_e`
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
    `];ss([wt({type:String})],Dn.prototype,"tableId",2);ss([F()],Dn.prototype,"query",2);ss([F()],Dn.prototype,"open",2);ss([Bt("input")],Dn.prototype,"inputEl",2);Dn=ss([Ee("panel-search")],Dn);var G$=Object.defineProperty,W$=Object.getOwnPropertyDescriptor,Ln=(e,t,n,r)=>{for(var s=r>1?void 0:r?W$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&G$(t,n,s),s};let Yt=class extends ke{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.fixedSchemaSources=new Set,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await ae();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(s){console.error(`[table-button:${e.id}]`,s)}}}async connectedCallback(){super.connectedCallback();const e=await ae();this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=Du(e.registries.rowSources),e.events.on("app:ready",()=>{this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=Du(e.registries.rowSources)}),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ae();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=Y$(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}get schemaEditable(){const e=this.table?.source?.type;return!e||!this.fixedSchemaSources.has(e)}render(){return k`
      ${this.table?.readonly?ie:k`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      ${this.schemaEditable?k`<button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
            <span class="mi sm">view_column</span>
          </button>`:ie}
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>k`<button class=${e.danger?"danger":""} title=${e.tooltip??e.label} aria-label=${e.label} @click=${t=>this.runTableButton(e,t)}>
              ${e.icon?e.icon.trimStart().startsWith("<svg")?k`<span class="icon-svg">${Sa(e.icon)}</span>`:k`<span class="mi sm">${e.icon}</span>`:k`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Yt.styles=[xt,_e`
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
    `];Ln([wt({type:String})],Yt.prototype,"tableId",2);Ln([wt({type:Boolean})],Yt.prototype,"active",2);Ln([F()],Yt.prototype,"rowCount",2);Ln([F()],Yt.prototype,"tableButtons",2);Ln([F()],Yt.prototype,"table",2);Ln([F()],Yt.prototype,"fixedSchemaSources",2);Yt=Ln([Ee("panel-footer")],Yt);function Y$(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Du(e){const t=new Set;for(const[n,r]of e)r.schemaEditable===!1&&t.add(n);return t}function jo(e){return e.title?.trim()?e.title.trim():e.name}function Q$(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function X$(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const Rt=new Map,mf=new Set;let Pu=!1;async function gf(){const e=await ae();await Promise.all([...Rt.keys()].map(t=>Ws(t,e)))}function bf(e){const t=Rt.get(e);return t?(pf(t),!0):(J$(e),!0)}async function J$(e){const t=await ae(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function wf(e){const t=await ae();await sx(e,t)}async function yf(){if(Pu)return;Pu=!0;const e=await ae(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){U0(j$(t,n));const s=()=>X$(t);s(),window.addEventListener("resize",s);const i=document.querySelector("app-shell")?.shadowRoot,o=i?.querySelector("header"),a=i?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||a)){const u=new ResizeObserver(s);o&&u.observe(o),a&&u.observe(a)}}const r=(await e.store.tables.find()).filter(s=>s.workspaceId===e.workspaceId);r.sort(oi);for(const s of r)s.windowGeometry?.closed||Lu(s,e);e.store.tables.subscribe(s=>{const i=s.filter(u=>u.workspaceId===e.workspaceId),o=new Map(i.map(u=>[u.id,u]));for(const[u,d]of Rt){const p=o.get(u);if(!p||p.windowGeometry?.closed){Rt.delete(u),ji(u),mf.add(u);try{d.status!=="closed"&&d.close()}catch{}}}const a=i.filter(u=>!Rt.has(u.id)&&!u.windowGeometry?.closed).sort(oi);for(const u of a)Lu(u,e)}),U$()}const ua=720,da=360;function Lu(e,t){const n=`panel-${vf(e.id)}`,r=Q$(),s=E0(e.windowGeometry),i=ln||s?.minimized===!0,o=()=>{const H=document.createElement("data-table");return H.tableId=e.id,H.style.height="100%",H},a=i?document.createElement("div"):o();let u=i?null:a,d=jo(e),p=-1,g=-1,y=null;const w=()=>{re.setHeaderTitle(d+(y?zw(y.rows,y.total):dh(p,g)))},$=H=>{const Z=H.detail;Z.key===e.id&&(p=Z.count,g=Z.total,w())},x=H=>{const Z=H.detail;Z.tableId===e.id&&(y=Z.done?null:{rows:Z.rows,total:Z.total},w())};document.addEventListener(ri,$),document.addEventListener(Zo,x);const T=()=>{W.active=!1,u?.remove(),u=null},S=()=>{if(u)return;const H=document.getElementById(n)?.querySelector(".jsPanel-content");if(!H)return;H.replaceChildren();const Z=o();H.appendChild(Z),u=Z,W.active=!0},L=document.createElement("panel-search");L.tableId=e.id;const W=document.createElement("panel-footer");W.tableId=e.id,W.active=!i;const z=async()=>{document.removeEventListener(ri,$),document.removeEventListener(Zo,x);const H=Rt.get(e.id)?.persistRect();Rt.delete(e.id),ji(e.id),!mf.delete(e.id)&&await rs(`table:${e.id}`,async()=>{const Z=await t.store.tables.findOne(e.id);if(!Z)return;const K=Z.windowGeometry??{...H??{x:60,y:60,w:ua,h:da},z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...K,closed:!0},updatedAt:Date.now()})})},re=Di({id:n,container:r,title:d,logo:Eu[Gs(e)],color:Su(e),content:a,footerToolbar:W,...s?{panelSize:{w:s.w,h:s.h},position:{x:s.x,y:s.y}}:{contentSize:{w:ua,h:da},position:ex()},minimizeTo:"#easydb-minimized-dock",viewport:Pi(),boot:{minimized:i,maximized:!ln&&s?.maximized===!0,smallified:!ln&&s?.smallified===!0},onmoved:()=>void Ws(e.id,t),onresized:()=>void Ws(e.id,t),onfronted:()=>void nx(e.id,t),onstatuschange:H=>{H.status==="minimized"?T():(H.status==="normalized"||H.status==="maximized")&&S(),Ws(e.id,t)},onclosed:()=>void z()});Rt.set(e.id,re),ff(e.id,()=>re.front(void 0,!1));const E=document.getElementById(n)?.querySelector(".jsPanel-controlbar");E&&E.prepend(L);let q=null;const X=document.createElement("button");X.type="button",X.title="Table info",X.setAttribute("aria-label","Table info"),X.className="eda-info-btn",X.textContent="ⓘ",X.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",X.addEventListener("click",H=>{H.stopPropagation(),q&&A$(d,q.info??{},{source:q.source,origin:q.origin})}),E?.prepend(X);const ue=H=>{q=H??null;const Z=!!(H?.info||H?.source||H?.origin);X.style.display=Z?"inline-flex":"none"};ue(e);let pe=Gs(e);t.store.tables.subscribe(H=>{const Z=H.find(se=>se.id===e.id);if(!Z)return;ue(Z),jo(Z)!==d&&(d=jo(Z),w());const K=Gs(Z);K!==pe&&(pe=K,re.setHeaderLogo(Eu[K]),re.setHeaderColor(Su(Z)))})}let Z$=0;function ex(){const e=Z$++;return{x:40+e%8*30,y:80+e%8*30}}function Ws(e,t){return rs(`table:${e}`,()=>tx(e,t))}async function tx(e,t){const n=Rt.get(e),r=n??document.getElementById(`panel-${vf(e)}`);if(!r)return;const s=n?.persistFlags()??{minimized:!1,maximized:!1,smallified:!1},i=n?.persistRect()??{x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight};try{const a=(await t.store.tables.findOne(e))?.windowGeometry,u=ln?a?.minimized??!1:s.minimized,d=ln?a?.maximized??!1:s.maximized,p=ln?a?.smallified??!1:s.smallified,g={...i,z:a?.z??0,minimized:u,maximized:d,smallified:p};await t.store.tables.patch(e,{windowGeometry:g,updatedAt:Date.now()})}catch{}}function nx(e,t){return rs(`table:${e}`,()=>rx(e,t))}async function rx(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{...Rt.get(e)?.persistRect()??{x:0,y:0,w:ua,h:da},z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:hf()},updatedAt:Date.now()})}catch{}}async function sx(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),s=await r.find();await r.bulkRemove(s.map(i=>i.id))}await t.store.tables.remove(e)}function vf(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function ix(e){if(!(e instanceof Node))return null;for(const[t,n]of Rt)if(n.contains(e))return t;return null}const $f=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:ln,deleteTable:wf,focusTableWindow:bf,initWindowManager:yf,persistTablePanelGeometry:gf,tableIdAtNode:ix},Symbol.toStringTag,{value:"Module"})),ox={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function ax(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await wf(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const lx=Object.freeze(Object.defineProperty({__proto__:null,init:ax,meta:ox},Symbol.toStringTag,{value:"Module"})),cx={id:"table-copy",name:"Copy Table",type:"ui",version:"0.1.0",description:"Adds a Copy button to each table window: duplicate it as-is, or snapshot its Raw / Visible data into a new plain table. Works on projections too — that is how you freeze one.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/table-copy.ts"};function ux(e){e.ui.registerTableButton({id:"table-copy:copy",label:"Copy",icon:"content_copy",tooltip:"Copy this table — as a duplicate, or as a snapshot of its data",onClick:(t,{tableId:n})=>void hx(t,n)})}function dx(e,t){const n=e.source?.type==="projection";if(t==="duplicate")return n?"a second projection over the same sources (still live)":e.source?"another connection to the same source (still live)":"a full copy of its columns and rows";const r=t==="raw"?"every column and row":"the visible columns and filtered rows";return e.source?`a plain table holding ${r} as they are right now`:`a plain table holding ${r}`}async function hx(e,t){const n=await e.store.tables.findOne(t);if(!n)return;const r=await e.ui.dialogs.choice(`Copy "${n.name}" — what should the copy contain?`,["Duplicate","Raw Data","Visible Data"],"Copy table");if(!r)return;const s=r==="Duplicate"?"duplicate":r==="Raw Data"?"raw":"visible";try{const i=await xf(e,n,s);e.ui.dialogs.toast(`Copied "${n.name}" to "${i.name}" — ${dx(n,s)}.`,{kind:"success",title:"Copy table"})}catch(i){e.ui.dialogs.toast(`Could not copy "${n.name}": ${i?.message??String(i)}`,{kind:"error",title:"Copy table"})}}async function xf(e,t,n){const r=e.workspaceId();if(!r)throw new Error("table-copy: no active workspace");const s=cn(await Ba(e,r),`${t.name} copy`),i=Se(),o=Date.now(),a={id:i,workspaceId:r,name:s,code:Pe(s),view:t.view,...t.title?{title:`${t.title} copy`}:{},...t.labelColumn?{labelColumn:t.labelColumn}:{},...t.info?{info:t.info}:{},updatedAt:o};if(n==="duplicate"){const d={...a,columns:t.columns,...t.sortBy?{sortBy:t.sortBy}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.filters?{filters:t.filters}:{},...t.deletedColumns?{deletedColumns:t.deletedColumns}:{},...t.readonly?{readonly:!0}:{},...t.source?{source:t.source}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(d),t.source||await Mu(e,t.id,i,p=>p),d}const u={...a,columns:jh(t,n).map(fx),...n==="raw"&&t.filters?{filters:t.filters}:{},...n==="raw"&&t.sortBy?{sortBy:t.sortBy}:{},...n==="raw"&&t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(u),await Mu(e,t.id,i,d=>Nh(t,d,n)),u}function fx(e){if(!e.readonly)return e;const t={...e};return delete t.readonly,t}async function Mu(e,t,n,r){const s=r(await e.store.rows(t).find());if(s.length===0)return;const i=Date.now();await e.store.rows(n).bulkInsert(s.map(o=>({id:Se(),tableId:n,data:{...o.data},updatedAt:i})))}const px=Object.freeze(Object.defineProperty({__proto__:null,copyTable:xf,init:ux,meta:cx},Symbol.toStringTag,{value:"Module"}));var mx=Object.defineProperty,gx=Object.getOwnPropertyDescriptor,vl=(e,t,n,r)=>{for(var s=r>1?void 0:r?gx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&mx(t,n,s),s};function kf(e,t){return(Ot.instance??bx()).open(e,t)}function bx(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let Ot=class extends ke{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const s=this.rows[r],i=s.field.trim(),o=s.label.trim()||i;return{...n,field:i,label:o,hidden:s.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const s=n.field.trim().toLowerCase();if(s===""){e.add(r);return}(t.get(s)??t.set(s,[]).get(s)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,s)=>s===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return k`
      <dialog @cancel=${this.onCancel} @keydown=${vt}>
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
                    @input=${s=>this.updateRow(r,"field",s.target.value)}
                  />
                  <input .value=${n.label} aria-label=${`Column ${r+1} label`} @input=${s=>this.updateRow(r,"label",s.target.value)} />
                  <div class="hidecell">
                    <input type="checkbox" .checked=${n.hidden} aria-label=${`Hide column ${r+1}`} @change=${s=>this.setHidden(r,s.target.checked)} />
                  </div>
                `)}
            </div>
            <p class="err">${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:ie}</p>
          </div>
        </form>
      </dialog>
    `}};Ot.instance=null;Ot.styles=[yt,_e`
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
    `];vl([F()],Ot.prototype,"rows",2);vl([F()],Ot.prototype,"subject",2);Ot=vl([Ee("column-names-dialog")],Ot);const wx=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return Ot},editColumnNames:kf},Symbol.toStringTag,{value:"Module"}));async function yx(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const s={api:e,fetchText:(E,q)=>Xr(e,E,q??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},i=await n.list(s,{kind:"url",url:r});if(i.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=i.find(E=>E.name===t.name)??(i.length===1?i[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let a=[];const u=[];for await(const E of n.read(s,o))E.columns?.length&&(a=E.columns),u.push(...E.rows);const{columns:d,newFields:p}=mi(t.columns,a,t.deletedColumns??[]),g=t.origin?.pks??[],y=new Set(a.map(E=>E.field)),w=t.columns.map(E=>E.field).filter(E=>!y.has(E)&&!g.includes(E)),$=(t.deletedColumns??[]).filter(E=>y.has(E)),x=e.store.rows(t.id),T=await x.find(),{data:S,merged:L,strategy:W,droppedUserRows:z}=th({oldRows:T.map(E=>({data:E.data})),freshRows:u,pks:g,userAddedFields:w,deletedRemoteFields:$}),re=Date.now();d.length>0&&await e.store.tables.patch(t.id,{columns:d,updatedAt:re}),await x.bulkRemove(T.map(E=>E.id));const G=S.map(E=>({id:Se(),tableId:t.id,data:E,updatedAt:re}));return await x.bulkInsert(G),{rowCount:G.length,newFields:p,merged:L,strategy:W,droppedUserRows:z}}var vx=Object.defineProperty,$x=Object.getOwnPropertyDescriptor,Ye=(e,t,n,r)=>{for(var s=r>1?void 0:r?$x(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&vx(t,n,s),s};const xx="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",kx="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Cx='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',ju=[{label:"Northwind — sample database (JSON dump)",url:xx,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:kx,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],_x={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Sx(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Cx,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Tx(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>Ex(t,n)})}async function Ex(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await $l(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const s=await yx(e,n,r),i=[];s.newFields.length>0&&i.push(`${s.newFields.length} new column${s.newFields.length===1?"":"s"}`),!s.merged&&s.rowCount>0&&i.push("rows replaced (nothing to match them on)"),s.droppedUserRows>0&&i.push(`${s.droppedUserRows} row${s.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${s.droppedUserRows===1?"it":"them"} could not be carried over`),e.ui.dialogs.toast(`Refreshed "${n.name}" (${s.rowCount.toLocaleString()} rows)${i.length?` — ${i.join(", ")}`:""}.`,{kind:s.newFields.length>0||s.droppedUserRows>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function Tx(e,t="auto"){const r=await(Ie.instance??Lx()).open({presetKind:t,async listDatabases(x){const T=bt(x);return ol(S=>e.backend.fetch(S),T.base)},async listTables(){const x=e.workspaceId();return(await e.store.tables.find()).filter(T=>T.workspaceId===x&&!T.source).map(T=>({id:T.id,name:T.name})).sort((T,S)=>T.name.localeCompare(S.name))}});if(!r)return;const{url:s,file:i,kind:o,dbChosen:a,editColumns:u,maxRows:d,mode:p,panel:g,target:y}=r,w=i?.name??s,$=u?(x,T)=>kf(x,T):void 0;try{if(o==="sql"){await Ix(e,{url:s,file:i,label:w,maxRows:d,mode:p,target:y,panel:g,editHook:$});return}const x=await $l(o);if(x){const T=o==="json"?await Ax(e,s,i,d,p):null;if(T?.isDump&&await e.ui.dialogs.confirm(`"${w}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Ha(e,T.text,w,{maxRows:d,editColumns:$,...i?{}:{originUrl:s}});return}const S=i?i.name:Gt(s),L=T?{kind:"text",text:T.text,name:S}:i?{kind:"file",file:i}:{kind:"url",url:s},W=await gi(e,x,L,{mode:p,target:y,maxRows:d,panel:g,...T&&!i?{origin:{type:x.id,url:s}}:{},...$?{editColumns:z=>$(z)}:{}});x.ownToasts||Cf(e,W,w);return}if(p==="reference"&&!i){o==="datasette"?await Px(e,s):await _f(e,s,o);return}await _i(e,s,{skipTablePicker:a,maxRows:d,editColumns:$})}catch(x){e.ui.dialogs.toast(`Could not import ${w}: ${x.message}`,{kind:"error",title:"Import"})}}async function Ix(e,t){const{url:n,file:r,label:s,maxRows:i,mode:o,target:a,panel:u,editHook:d}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const p=r?await r.text():await Xr(e,n,`Reading ${Gt(n)}…`,i!=null?{maxBytes:null}:{});if(Za(p)){const w=await el(e,p,{maxRows:i,target:a,...d?{editColumns:d}:{}});tl(e,w,s);return}const g=await $l("sql");if(!g)throw new Error("The SQL importer is not installed.");const y=await gi(e,g,{kind:"text",text:p,name:r?r.name:Gt(n)},{mode:o,target:a,maxRows:i,panel:u,...r?{}:{origin:{type:g.id,url:n}},...d?{editColumns:w=>d(w)}:{}});Cf(e,y,s)}async function Ax(e,t,n,r,s){if(s==="reference")return null;const i=n?await n.text():await Xr(e,t,`Reading ${Gt(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:i,isDump:qa(JSON.parse(i))}}catch{return{text:i,isDump:!1}}}async function $l(e){const{registries:t}=await ae();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function Cf(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,a)=>o+a.rowCount,0),s=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${s} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const i=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${i?` — ${i}`:""}.`,{kind:"error",title:"Import"})}function Rx(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(s=>s!=null&&typeof s=="object"&&!Array.isArray(s));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const s of["rows","records","data"])if(n(r[s]))return r[s];for(const s of Object.values(r))if(n(s))return s}return[]}function Ox(e){const t=Rx(e).slice(0,50),n=s=>pi(s)?"array":typeof s=="number"?"number":typeof s=="boolean"?"boolean":"string",r=new Map;for(const s of t)for(const[i,o]of Object.entries(s))!r.has(i)&&o!=null?r.set(i,n(o)):r.has(i)||r.set(i,"string");return[...r.entries()].map(([s,i])=>({field:s,label:s,type:i}))}function Dx(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function Px(e,t){const n=bt(t),s=await hl(a=>e.backend.fetch(a),n,"Reference");if(s===null)return;if(s.length===0)throw new Error("No tables found to reference at that URL.");let i=0;const o=[];for(const a of s)try{await _f(e,Dx(n.base,a.db,a.table),"json",{nameHint:`${a.db}/${a.table}`,silent:!0}),i++}catch(u){o.push(`${a.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${i} table${i===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function _f(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=r.nameHint??Gt(t),o=await Xr(e,t,`Reading ${i}…`,{maxBytes:null}),a=n==="csv"?sr(o).columns:Ox(o);if(a.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(g=>g.workspaceId===s).map(g=>g.name.toLowerCase()));let d=i;for(let g=2;u.has(d.toLowerCase());g++)d=`${i}-${g}`;const p={id:Se(),workspaceId:s,name:d,code:Pe(d),columns:a,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(p),r.silent||e.ui.dialogs.toast(`Referenced ${d} — live, read-only.`,{kind:"success",title:"Reference"})}function Lx(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Mx(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(i=>i.startsWith("_")),s=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":s?"datasette":"json"}catch{return"json"}}function Nu(e,t){if(t!=="datasette"||!e)return!1;try{const n=bt(e);return!n.db&&!n.table}catch{return!1}}function jx(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let Ie=class extends ke{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,s=this.editColumns&&this.mode==="copy",i=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},a=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:s,maxRows:r,mode:a,panel:i,target:o});return}const u=n==="datasette"&&!!this.selectedDb&&Nu(t,n),d=u?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:d,kind:n,dbChosen:u,editColumns:s,maxRows:r,mode:a,panel:i,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?jx(this.file.name):Mx(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),Ie.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ie.instance===this&&(Ie.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await ae(),t=[...e.importers].sort((s,i)=>(s.order??Number.MAX_SAFE_INTEGER)-(i.order??Number.MAX_SAFE_INTEGER)).map(s=>({id:s.id,label:s.label,panel:s.panel,kernel:s.supports?.kernel})),n=t.some(s=>s.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const s of e.importers)for(const i of s.accept??[])r.add(i);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=ju[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Nu(this.url.trim(),this.resolvedKind)?ie:k`
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
      ${this.dbError?k`<p class="hint error">${this.dbError}</p>`:ie}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return ie;const e=this.targetKind!=="new";return k`
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
              </select>`:ie}
        </div>
      </label>
      ${e?k`<p class="hint">The table keeps its own columns. Values map onto them the way the format requires — a CSV by column position, so its header names need not match.</p>`:ie}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===ie?ie:k`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return k`
      <dialog @cancel=${this.onCancel} @keydown=${vt}>
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
              <label>
                Sample source
                <select data-testid="import-sample" .value=${String(this.presetIdx)} @change=${e=>this.onPresetChange(e)}>
                  <option value="-1" ?selected=${this.presetIdx===-1}>— choose a sample —</option>
                  ${ju.map((e,t)=>k`<option value=${String(t)} ?selected=${t===this.presetIdx}>${e.label}</option>`)}
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
                <input type="file" accept=${this.acceptAttr} @change=${e=>this.onFileChange(e)} />
              </label>
              ${this.file?k`<p class="hint">Importing <strong>${this.file.name}</strong> as ${this.resolvedKind.toUpperCase()}.</p>`:ie}

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
              ${this.file?k`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:ie} ${this.renderTarget()}

              <label class="check">
                <input type="checkbox" ?disabled=${this.mode==="reference"} .checked=${this.editColumns} @change=${e=>this.editColumns=e.target.checked} />
                Edit columns before import (rename / hide / fix duplicate names)
              </label>
              ${this.mode==="reference"?k`<p class="hint">A Reference keeps the source's own schema, so there is nothing to edit.</p>`:ie}

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
      ${ie}
    `}};Ie.instance=null;Ie.styles=[yt,_e`
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
    `];Ye([F()],Ie.prototype,"url",2);Ye([F()],Ie.prototype,"kind",2);Ye([F()],Ie.prototype,"presetIdx",2);Ye([F()],Ie.prototype,"dbList",2);Ye([F()],Ie.prototype,"dbLoading",2);Ye([F()],Ie.prototype,"dbError",2);Ye([F()],Ie.prototype,"selectedDb",2);Ye([F()],Ie.prototype,"editColumns",2);Ye([F()],Ie.prototype,"file",2);Ye([F()],Ie.prototype,"maxRowsInput",2);Ye([F()],Ie.prototype,"mode",2);Ye([F()],Ie.prototype,"targetKind",2);Ye([F()],Ie.prototype,"targetTableId",2);Ye([F()],Ie.prototype,"tables",2);Ye([F()],Ie.prototype,"formats",2);Ye([F()],Ie.prototype,"acceptAttr",2);Ie=Ye([Ee("import-dialog")],Ie);const Nx=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Ie},init:Sx,meta:_x},Symbol.toStringTag,{value:"Module"})),zx={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},Fx=6e4;let zu=null,ha=!1;const No=new Map;function Ux(e){zu===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(zu=setInterval(()=>{Sf(e)},Fx)))}async function Sf(e){if(ha)return;const t=e.workspaceId();if(!t)return;const n=await Vh(e);if(n)try{await Bx(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function Bx(e,t,n){const r=await Ei(e),s=await Gh(e,n),i=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(i.status===404){await Fu(e,t,n,r,null);return}if(!i.ok)return;const o=Ti(i.headers.get("ETag")),a=await i.text();if(vu(r)===vu(a)){o&&o!==s&&await On(e,n,o);return}if(o&&o===s){await Fu(e,t,n,r,s);return}if(!(o&&No.get(n)===o)){ha=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const d=JSON.parse(a),p=await Wh(e,n,d);o&&await On(e,n,o),No.delete(n),e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&No.set(n,o)}finally{ha=!1}}}async function Fu(e,t,n,r,s){const i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:i,body:r});if(o.ok){const a=Ti(o.headers.get("ETag"));a&&await On(e,n,a);return}if(o.status===412){const a=await o.json().catch(()=>({}));a.currentEtag&&await On(e,n,a.currentEtag)}}const Ef=Object.freeze(Object.defineProperty({__proto__:null,load:Ux,meta:zx,tick:Sf},Symbol.toStringTag,{value:"Module"}));var qx=Object.defineProperty,Hx=Object.getOwnPropertyDescriptor,Tt=(e,t,n,r)=>{for(var s=r>1?void 0:r?Hx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&qx(t,n,s),s};let ct=class extends ke{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.rowColl=null,this.loadGeneration=0,this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),s=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const i=this.allRows.find(u=>u.id===n);if(!i)return;let o;if(s==="boolean")o=t.checked;else if(s==="number"){const u=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(u)?t.value:u}else o=t.value;await(await ae()).store.rows(this.instance.tableId).patch(n,{data:{...i.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");!n||r==null||await this.addPill(n,r)}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ae(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>r.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const i=s.find(a=>a.id===this.viewInstanceId);if(!i)return;if(i.tableId!==this.instance?.tableId){this.instance=i,this.reload();return}const o=Uu(this.instance);this.instance=i,Uu(i)!==o?this.loadRows():this.recompute()}),this.rowColl=e.store.rows(t.tableId),this.rowsUnsub=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows(),this.loaded=!0}async loadRows(){const e=this.rowColl,t=this.instance;if(!e||!t)return;const n=++this.loadGeneration,r=new Set(this.tableColumns.filter(d=>d.script).map(d=>d.field)),s=Object.fromEntries(Object.entries(t.filters??{}).filter(([d])=>!r.has(d))),o=(t.sortBy?.length?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc!==!1}]:[]).filter(d=>!r.has(d.field)),a={columns:this.tableColumns,...Object.keys(s).length>0?{filters:s}:{},...o.length>0?{sort:o}:{}},u=await rl(e,a,Aa);n===this.loadGeneration&&(this.allRows=u.rows,this.recompute())}recompute(){if(!this.instance)return;const e=bu(this.allRows,this.tableColumns),t=ta(e,this.instance,this.tableColumns);let n=t;const r=this.searchQuery.trim(),s=this.globalQuery.trim();r&&(n=Kr(n,r,this.tableColumns)),s&&(n=Kr(n,s,this.tableColumns));const i=this.instance.limit??0;i>0&&n.length>i&&(n=n.slice(0,i)),this.rows=n,this.templateOn&&uh(this.viewInstanceId,n.length,t.length)}async addPill(e,t){if(!this.instance)return;const n=wv(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{},[e]:n};await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}rowsFacetedFor(e){if(!this.instance)return[];const t={...this.instance.pillFilters??{}};return delete t[e],ta(bu(this.allRows,this.tableColumns),{...this.instance,pillFilters:t},this.tableColumns)}async setPillFilter(e,t){if(!this.instance)return;const n={...this.instance.pillFilters??{}};t.trim()===""?delete n[e]:n[e]=t,await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:n,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:n},this.recompute()}async cyclePill(e,t){await this.setPillFilter(e,$v(this.instance?.pillFilters?.[e],t))}async openPillValues(e,t){const n=at.instance;if(!n)return;const r=this.rowsFacetedFor(e),s=this.tableColumns.find(u=>u.field===e)?.type;if(!ah(r,e,{type:s}))return;const{values:i,blanks:o}=lh(r,e,{type:s});if(i.length===0)return;const a=await n.open(t.getBoundingClientRect(),i,this.instance?.pillFilters?.[e]??"",o,u=>void this.setPillFilter(e,u),{exact:!0});a!==null&&(typeof a=="object"&&"clear"in a?await this.setPillFilter(e,""):typeof a=="string"&&await this.setPillFilter(e,a))}async removePill(e,t){if(!this.instance)return;const n=yv(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await ae()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await ae()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ae()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||ga(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&ga(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await ae();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(i=>i!==e):[...t,e];if(r.length===0)return;await(await ae()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?k`<div class="vw-empty">No rows.</div>`:k`
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
    `}renderTemplated(){const e=this.template;if(!e)return k`<div class="vw-empty">This view's template is missing.</div>`;if(kv(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(o=>[o.field,o])),r=this.instance?.readonly===!0,s=this.rows.map(o=>gv(e.rowHtml,o,t,{columns:n,readonly:r})).join(""),i=(e.headerHtml??"")+s+(e.footerHtml??"");return k`<div class="vw-root">${Gn(i)}</div>`}return k`<div class="vw-root">
      ${e.headerHtml?.trim()?k`<div class="vw-html">${Gn(e.headerHtml)}</div>`:ie} ${this.renderTable()}
      ${e.footerHtml?.trim()?k`<div class="vw-html">${Gn(e.footerHtml)}</div>`:ie}
    </div>`}renderSortBar(){if(!this.instance)return ie;const e=this.renderPillChips(),t=Array.isArray(e)&&e.length>0;if(!this.templateOn)return t?k`<div class="vw-sortbar">${e}</div>`:ie;const n=this.tableColumns.filter(i=>i.sortable!==!1),r=this.instance.sortColumn??"",s=this.instance.sortAsc??!0;return k`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select aria-label="Sort by" @change=${i=>void this.setSortColumn(i.target.value)}>
        <option value="" ?selected=${!r}>— unsorted —</option>
        ${n.map(i=>k`<option value=${i.field} ?selected=${r===i.field}>${i.label||i.field}</option>`)}
      </select>
      <button aria-label="Toggle sort direction" title=${s?"Ascending (click for descending)":"Descending (click for ascending)"} ?disabled=${!r} @click=${()=>void this.toggleSortDir()}>
        <span class="mi">${s?"arrow_upward":"arrow_downward"}</span>
      </button>
      ${e}
    </div>`}renderPillChips(){const e=this.instance?.pillFilters;if(!e)return ie;const t=[];for(const[n,r]of Object.entries(e))if(r)for(const s of Pn(r))s.term&&t.push({field:n,value:s.term,state:s.negate?"not":"on"});return t.map(n=>k`<span class=${`eda-pill-chip${n.state==="not"?" not":""}`}>
          <button
            type="button"
            class="eda-pill-chip-field"
            title=${n.state==="not"?`Excluding this value — click to stop filtering on ${n.field}`:"Only this value — click to EXCLUDE it instead"}
            @click=${()=>void this.cyclePill(n.field,n.value)}
          >
            ${n.field}${n.state==="not"?" ≠":" ="}
          </button>
          <button type="button" class="eda-pill-chip-value" title=${`Other values of ${n.field}`} @click=${r=>void this.openPillValues(n.field,r.currentTarget)}>
            ${n.value}
          </button>
          <button type="button" class="eda-pill-chip-remove" aria-label=${`Remove filter ${n.field}: ${n.value}`} title="Remove this filter" @click=${()=>void this.removePill(n.field,n.value)}>
            ×
          </button>
        </span>`)}renderFooter(){if(!this.instance)return ie;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return k`<div class="vw-footer">
      ${!e&&this.showColsMenu?k`<div class="cols-menu">
            ${this.tableColumns.map(n=>k`<label><input type="checkbox" .checked=${t.has(n.field)} @change=${()=>void this.toggleColumn(n.field)} />${n.label||n.field}</label>`)}
          </div>`:ie}
      ${e?ie:k`<button title="Show / hide columns" aria-label="Columns" @click=${()=>this.showColsMenu=!this.showColsMenu}>
            <span class="mi">view_column</span>
          </button>`}
      <button aria-label="Edit view" title="Edit this view (rename, re-map columns)" @click=${()=>this.editView()}>
        <span class="mi">edit</span>
      </button>
      ${this.template?k`<button class="edit-template" aria-label="Edit template" title=${`Edit the "${this.template.name}" template`} @click=${()=>this.editTemplate()}>
            <span class="mi">code</span>
          </button>`:ie}
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
    </div>`}render(){if(!this.loaded)return k`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return k`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?k`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>${this.renderTemplated()}</div>`:k`<div class="vw-body grid">
          <data-table .tableId=${this.instance?.tableId??""} .viewInstanceId=${this.viewInstanceId}></data-table>
        </div>`;return k`${this.renderSortBar()}${t}${this.renderFooter()}`}};ct.styles=[xt,_e`
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
    `];Tt([wt({type:String})],ct.prototype,"viewInstanceId",2);Tt([F()],ct.prototype,"loaded",2);Tt([F()],ct.prototype,"error",2);Tt([F()],ct.prototype,"instance",2);Tt([F()],ct.prototype,"template",2);Tt([F()],ct.prototype,"columns",2);Tt([F()],ct.prototype,"tableColumns",2);Tt([F()],ct.prototype,"rows",2);Tt([F()],ct.prototype,"showColsMenu",2);Tt([F()],ct.prototype,"searchQuery",2);Tt([F()],ct.prototype,"globalQuery",2);ct=Tt([Ee("view-window")],ct);function Uu(e){if(!e)return"";const t=e.sortBy?.length?e.sortBy.map(n=>`${n.field}:${n.asc!==!1}`).join(","):`${e.sortColumn??""}:${e.sortAsc!==!1}`;return`${JSON.stringify(e.filters??{})}|${t}`}const Tf=480,If=520,ot=new Map;async function Kx(){await Promise.all([...ot.keys()].map(e=>Ys(e)))}function Af(e){const t=ot.get(e);return t?(pf(t.panel),!0):!1}const fa=new Set;async function Rf(e){if(Af(e))return;fa.add(e);const t=await ae(),n=await t.store.viewInstances.findOne(e);if(!n){fa.delete(e);return}if(n.open){ma(n,t),Of(e);return}await t.store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()})}function Of(e){fa.delete(e)&&Af(e)}let Bu=!1;function pa(e){e.panel.setHeaderTitle(e.name+dh(e.count,e.total))}function Vx(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Gx(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Wx(e){return`view-panel-${Gx(e)}`}async function Yx(){if(Bu)return;Bu=!0;const e=await ae(),t=r=>r.filter(s=>s.workspaceId===e.workspaceId&&s.open),n=t(await e.store.viewInstances.find()).sort(oi);for(const r of n)ma(r,e);e.store.viewInstances.subscribe(r=>{const s=new Map(t(r).map(o=>[o.id,o]));for(const o of[...ot.keys()])s.has(o)||Xx(o);const i=[...s.values()].filter(o=>!ot.has(o.id)).sort(oi);for(const o of i)ma(o,e)}),e.store.tables.subscribe(r=>void Qx(e,r)),document.addEventListener(ri,r=>{const s=r.detail,i=ot.get(s.key);i&&i.el&&(i.count=s.count,i.total=s.total,pa(i))}),document.addEventListener("easydb:reload-view",r=>{const s=r.detail?.instanceId;if(!s)return;const i=ot.get(s);i&&(async()=>{const o=await e.store.viewInstances.findOne(s);o&&(i.name=o.name,pa(i)),i.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of ot.values())r?.reload()})}async function Qx(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),s=new Map;for(const o of n)s.has(o.name)||s.set(o.name,o);const i=await e.store.viewInstances.find();for(const o of i){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const a=s.get(o.tableName);a&&await e.store.viewInstances.patch(o.id,{tableId:a.id,updatedAt:Date.now()})}}function ma(e,t){if(ot.has(e.id))return;const n=Wx(e.id),r=e.windowGeometry,s=r?.minimized===!0,i=()=>{const w=document.createElement("view-window");return w.viewInstanceId=e.id,w.style.height="100%",w},o=s?document.createElement("div"):i();let a;const u=()=>{a&&(a.el?.remove(),a.el=null,a.count=-1,a.total=-1,pa(a))},d=()=>{if(!a||a.el)return;const w=document.getElementById(n)?.querySelector(".jsPanel-content");if(!w)return;w.replaceChildren();const $=i();w.appendChild($),a.el=$},p=Di({id:n,container:Vx(),title:e.name,logo:E$,color:"#0891b2",content:o,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:Tf,h:If},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:Pi(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0,smallified:r?.smallified===!0},onmoved:()=>void Ys(e.id),onresized:()=>void Ys(e.id),onfronted:()=>void Jx(e.id,t),onstatuschange:w=>{w.status==="minimized"?u():(w.status==="normalized"||w.status==="maximized")&&d(),Ys(e.id)},onclosed:()=>{ot.delete(e.id),ji(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});a={panel:p,el:s?null:o,name:e.name,count:-1,total:-1},ot.set(e.id,a),ff(e.id,()=>p.front(void 0,!1));const g=document.getElementById(n),y=document.createElement("panel-search");y.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.append(y),Of(e.id)}function Xx(e){const t=ot.get(e);if(t){ot.delete(e),ji(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function Jx(e,t){return rs(`view:${e}`,()=>Zx(e,t))}async function Zx(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{...ot.get(e)?.panel.persistRect()??{x:0,y:0,w:Tf,h:If},z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:hf()},updatedAt:Date.now()})}catch{}}function Ys(e){return rs(`view:${e}`,()=>ek(e))}async function ek(e){const t=ot.get(e);if(!t)return;const{minimized:n,maximized:r,smallified:s}=t.panel.persistFlags(),i=t.panel.persistRect();try{const o=await ae(),a=(await o.store.viewInstances.findOne(e))?.windowGeometry,u={...i,z:a?.z??0,minimized:n,maximized:r,smallified:s};await o.store.viewInstances.patch(e,{windowGeometry:u,updatedAt:Date.now()})}catch{}}var tk=Object.defineProperty,nk=Object.getOwnPropertyDescriptor,or=(e,t,n,r)=>{for(var s=r>1?void 0:r?nk(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&tk(t,n,s),s};function ga(e,t){(pt.instance??rk()).open(e,t)}function rk(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function zo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let pt=class extends ke{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),pt.instance===this&&(pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ae(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){this.close(),await Rf(e)}async editInstance(e){const n=await(await ae()).store.viewTemplates.findOne(e.templateId),r=n?mu(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await ae()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await ae(),n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={...e,id:zo(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await ae();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ae(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(s=>s.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:zo(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=mu(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(g=>g.field.toLowerCase()===t||(g.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const g=Number(r[1])-1;return this.columns.filter(w=>w.type==="boolean")[g]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(g=>g.type==="boolean");const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(g=>g.type==="date"||g.type==="datetime");const a=["url","link","href","website","homepage","uri","site","web"];if(a.includes(t)){const g=this.firstColumn(y=>y.renderer==="link");return g||this.firstColumn(y=>{const w=y.field.toLowerCase(),$=(y.label??"").toLowerCase();return a.some(x=>w.includes(x)||$.includes(x))})}const u=g=>y=>{const w=y.field.toLowerCase(),$=(y.label??"").toLowerCase();return g.some(x=>w.includes(x)||$.includes(x))},d=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(d.includes(t)){const g=this.firstColumn(w=>w.renderer==="image");if(g)return g;const y=this.firstColumn(u(d));return y||this.firstColumn(u(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(u(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(u(["phone","tel","mobile","cell"]));const p=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(p.includes(t)){const g=this.firstColumn(x=>{if(x.type!=="string")return!1;const T=x.field.toLowerCase(),S=(x.label??"").toLowerCase();return p.some(L=>T.includes(L)||S.includes(L))});if(g)return g;const y=this.columns.filter(x=>x.type==="string"),w=y[0];if(!w)return"";let $=w;for(const x of y)(x.max??0)>($.max??0)&&($=x);return $.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ae();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={id:zo(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return k`
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
                ${e.builtin?k`<span class="badge">built-in</span>`:ie}
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
          <button type="button" class="mini" @click=${()=>this.newTemplate()}>+ New template</button>
        </div>
        <p class="hint">
          A template's row HTML uses <code>$TOKEN</code> placeholders (e.g. <code>$TITLE</code>). Leave row HTML blank to show a read-only columns table with the header/footer HTML around it.
        </p>
      </div>
    `}renderTemplate(){const e=this.tDraft,t=n=>r=>{this.tDraft={...e,[n]:r.target.value}};return k`
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
        <textarea .value=${e.rowHtml} @input=${t("rowHtml")} placeholder="&lt;div&gt;$TITLE&lt;/div&gt;"></textarea>
      </label>
      <label class="field">
        Footer HTML
        <textarea .value=${e.footerHtml} @input=${t("footerHtml")}></textarea>
      </label>
    `}renderInstance(){const e=this.iDraft;return k`
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
      <label class="field-inline">
        <input type="checkbox" .checked=${e.readonly} @change=${t=>this.iDraft={...e,readonly:t.target.checked}} />
        Readonly (show values without editors in the table view)
      </label>
      <div class="section">
        <h3>Map placeholders to columns</h3>
        ${e.tokens.length===0?k`<p class="hint">This template has no <code>$TOKEN</code> placeholders — it will show the read-only table with your current sort, filter and visible columns.</p>`:e.tokens.map(t=>k`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${n=>this.iDraft={...e,mapping:{...e.mapping,[t]:n.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(n=>k`<option value=${n.field} ?selected=${e.mapping[t]===n.field}>${n.label||n.field}</option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?k`Editing name and column mapping. The snapshotted sort, filters and visible columns are kept.`:k`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?k`<button type="button" class="ghost" @click=${()=>this.mode="list"}>Back</button> <button type="submit" class="primary">Save</button>`:this.mode==="instance"?k`<button type="button" class="ghost" @click=${()=>this.mode="list"}>Back</button> <button type="submit" class="primary">${this.iDraft?.id?"Save":"Create view"}</button>`:k`<button type="submit" class="ghost">Close</button>`;return k`
      <dialog @cancel=${this.close} @keydown=${vt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${e}</h2>
            <div class="header-actions">${t}</div>
          </div>
          <div class="dialog-body">${this.mode==="template"?this.renderTemplate():this.mode==="instance"?this.renderInstance():this.renderList()}</div>
        </form>
      </dialog>
    `}};pt.instance=null;pt.styles=[yt,_e`
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
    `];or([F()],pt.prototype,"mode",2);or([F()],pt.prototype,"instances",2);or([F()],pt.prototype,"templates",2);or([F()],pt.prototype,"tDraft",2);or([F()],pt.prototype,"iDraft",2);pt=or([Ee("views-dialog")],pt);const sk={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},ik="grid_view",ok={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},ak={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},lk={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},ck={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},uk=[ok,ak,lk,ck];function dk(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:ik,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>ga(n)})}async function hk(e){await pk(e)}function fk(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function pk(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of uk)await mk(e,t,r,n)}async function mk(e,t,n,r){const s=`views:seeded:${n.slug}:${t}`,i=`views:sig:${n.slug}:${t}`,o=fk(n),a=r.find(d=>d.builtin&&d.name===n.name);if(a){(await e.store.settings.findOne(i))?.value!==o&&(await e.store.viewTemplates.patch(a.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:o})),await e.store.settings.upsert({name:s,value:!0});return}(await e.store.settings.findOne(s))?.value||(await e.store.viewTemplates.insert({id:gk(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:!0}),await e.store.settings.upsert({name:i,value:o}))}function gk(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const bk=Object.freeze(Object.defineProperty({__proto__:null,init:dk,load:hk,meta:sk},Symbol.toStringTag,{value:"Module"})),wk={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function yk(e){e.ui.registerSettings(ch,"Table grid",[{key:"sortDescFirst",label:"Sort descending first",type:"boolean",default:!0,scope:"workspace",description:"Clicking a column header sorts descending, then ascending, then off. Turn this off to start ascending. Dates, scores and counts are usually read from the high end down, which took two clicks before."}]),e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const s=Array.from(t.dataTransfer?.files??[]).find(a=>a.name.toLowerCase()==="secrets.txt");if(!s)return!1;const i=await s.text(),o=Object.keys(Yn(i)).length;return Fr().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${s.name}"?`,"Import secrets")||(md(i),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const vk=Object.freeze(Object.defineProperty({__proto__:null,init:yk,meta:wk},Symbol.toStringTag,{value:"Module"}));class sn extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function $k(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function xk(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function kk(e,t){const n=$k(t.source?.config),r=new Set;let s=[],i=new Map,o=!1,a=null;const u=new Map;let d=null,p=!1;function g(G){const E=new Map;for(const X of G)E.has(X.name)||E.set(X.name,X);const q=new Map;for(const X of n.sources){const ue=E.get(X.tableName);ue&&q.set(X.alias,ue.id)}return q}async function y(){return g(await e.tables.find({workspaceId:t.workspaceId}))}async function w(){const G=await e.tables.find({workspaceId:t.workspaceId}),E={rows:[],provenance:new Map};if(Bb(t.id,G))return E;const q=g(G),X=new Map(G.map(Z=>[Z.id,Z])),ue=Db(n),pe={};for(const Z of n.sources){const K=q.get(Z.alias);if(!K)return E;const se=ue[Z.alias]??[],ve=await rl(e.rows(K),{columns:X.get(K)?.columns??[],fields:se.length>0?se:["id"]});pe[Z.alias]=ve.rows}const H=Pb(n,pe);return{rows:H.rows.map(Z=>({...Z,tableId:t.id})),provenance:H.provenance}}async function $(){const{rows:G,provenance:E}=await w();return s=G,i=E,o=!0,G}function x(){return a||(a=(async()=>{try{return await $()}finally{a=null}})(),a)}async function T(){const G=await y(),E=new Set(G.values());for(const[q,X]of u)E.has(q)||(X(),u.delete(q));for(const q of E)if(!u.has(q)){const X=e.rows(q);u.set(q,X.watch?X.watch(S):X.subscribe(S))}}function S(){p||(p=!0,queueMicrotask(async()=>{p=!1,await T();const G=o?await $():await x();for(const E of r)E(G)}))}function L(G,E){return G===E||G==null&&E==null?!0:G==null||E==null?!1:String(G)===String(E)}async function W(G,E){o||await x();const q=s.find(Z=>Z.id===G)?.data,X=i.get(G),ue=new Map,pe=[];for(const[Z,K]of Object.entries(E)){if(q&&L(q[Z],K))continue;const se=Vb(n,G,Z,X);if(!se){pe.push(Z);continue}const ve=ue.get(se.alias)??{rowId:se.rowId,updates:{}};ve.updates[se.field]=K,ue.set(se.alias,ve)}if(pe.length>0)throw new sn(re(pe,X));if(ue.size===0)return{id:G,tableId:t.id,data:E,updatedAt:Date.now()};const H=await y();for(const[Z,{rowId:K,updates:se}]of ue){const ve=H.get(Z);if(!ve)throw new sn(`the "${z(Z)}" table is not available`);const Qe=e.rows(ve),je=await Qe.findOne(K);if(!je)throw new sn("the underlying row no longer exists");await Qe.patch(K,{data:{...je.data,...se},updatedAt:Date.now()})}return{id:G,tableId:t.id,data:E,updatedAt:Date.now()}}function z(G){return n.sources.find(E=>E.alias===G)?.tableName??G}function re(G,E){const q=G[0],X=n.columns.find(ue=>ue.field===q);return!X||X.from.kind==="script"?`"${q}" is computed by a script, so there is no cell to save it in`:E&&!E[X.from.alias]?`this row has no matching "${z(X.from.alias)}" row, so there is nowhere to save "${q}"`:`"${q}" cannot be written back to its source`}return{async find(G){const E=o?s:await x();return!G||Object.keys(G).length===0?E:E.filter(q=>xk(q,G))},async findOne(G){return(o?s:await x()).find(q=>q.id===G)??null},async insert(){throw new sn("rows are derived from other tables")},async bulkInsert(){throw new sn("rows are derived from other tables")},async upsert(G){return W(G.id,G.data)},async patch(G,E){if(!E.data)throw new sn("a cell edit must carry row data");return W(G,E.data)},async remove(){throw new sn("rows are derived from other tables")},async bulkRemove(){throw new sn("rows are derived from other tables")},subscribe(G){return r.add(G),d||(d=e.tables.subscribe(S)),o?G(s):S(),()=>{if(r.delete(G),r.size===0){d?.(),d=null;for(const E of u.values())E();u.clear(),o=!1}}},async refresh(){await T();const G=await $();for(const E of r)E(G)}}}function Ck(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,s=2;for(;t.has(r);)r=`${n}_${s++}`;return t.add(r),r}function _k(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function Sk(e,t,n){const r=t.sources.map(a=>{const u=n.find(y=>y.name===a.tableName),d={alias:a.alias,tableId:u?.id??"",tableName:a.tableName,columns:u?.columns??[]},p=a.join?.on??[],g=p[0];return a.join&&g&&(d.join={type:a.join.type,thisField:g.field,otherAlias:g.eqAlias,otherField:g.eqField},p.length>1&&(d.extraOn=p.slice(1))),d}),s=t.columns.map(a=>{const u={include:!0,outField:a.field,label:a.label??a.field};return a.from.kind==="source"?{...u,alias:a.from.alias,field:a.from.field,computed:!1}:{...u,script:a.from.script,computed:!0}}),i=[],o=new Set;r.forEach((a,u)=>{const d=r.slice(0,u).filter(p=>p.tableName===a.tableName).length;for(const p of a.columns){const g=s.filter(y=>!y.computed&&y.alias===a.alias&&y.field===p.field&&!o.has(y));if(g.length>0)for(const y of g)o.add(y),i.push(y);else i.push({include:!1,alias:a.alias,field:p.field,computed:!1,label:d>0?`${p.label} (${a.alias})`:p.label})}});for(const a of s)!a.computed&&!o.has(a)&&i.push(a);for(const a of s)a.computed&&i.push(a);return{name:e,sources:r,columns:i,...t.limit?{limit:t.limit}:{},original:t}}function Ek(e,t){const n=_k(e.sources),r=e.sources.length===0,s=e.sources.filter(a=>a.tableName===t.name).length;let i;if(!r){const a=e.sources.flatMap(d=>d.join?[{alias:d.join.otherAlias,field:d.join.otherField},...(d.extraOn??[]).map(p=>({alias:p.eqAlias,field:p.eqField}))]:[]),u=Hb({tableName:t.name,fields:t.columns.map(d=>d.field),pks:t.columns.filter(d=>d.unique).map(d=>d.field)},e.sources.map(d=>({alias:d.alias,tableName:d.tableName,fields:d.columns.map(p=>p.field),pks:d.columns.filter(p=>p.unique).map(p=>p.field)})),a);i={type:"left",thisField:u?.thisField??t.columns[0]?.field??"",otherAlias:u?.otherAlias??e.sources[0]?.alias??"",otherField:u?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...i?{join:i}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(a=>({include:!0,alias:n,field:a.field,computed:!1,label:s>0?`${a.label} (${n})`:a.label}))]}}function Tk(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const s of e.sources){if(n.has(s.alias)||!s.join)continue;[s.join.otherAlias,...(s.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(s.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function Ik(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function Ak(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(u=>u.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let u=0;u<e.sources.length;u++){const d=e.sources[u];if(!d?.join)continue;if(!d.join.thisField||!d.join.otherField)return{ok:!1,error:`Set both join keys for "${d.tableName}".`};const p=new Set(e.sources.slice(0,u).map(y=>y.alias));if([d.join.otherAlias,...(d.extraOn??[]).map(y=>y.eqAlias)].some(y=>!p.has(y)))return{ok:!1,error:`The join for "${d.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(u=>u.alias)),s=new Set,i=[];for(const u of n){let d;if(u.outField&&!s.has(u.outField)?(d=u.outField,s.add(d)):d=Ck(u.computed?"computed":u.field??"col",s),u.computed){i.push({field:d,from:{kind:"script",script:u.script??""}});continue}const p=u.alias,g=u.field;if(!p||!g||!r.has(p))return{ok:!1,error:`Column "${u.label??u.field}" belongs to a table that is no longer part of this projection.`};i.push({field:d,from:{kind:"source",alias:p,field:g}})}const o=e.sources.map(u=>{const d={alias:u.alias,tableName:u.tableName};return u.join&&(d.join={type:u.join.type,on:[{field:u.join.thisField,eqAlias:u.join.otherAlias,eqField:u.join.otherField},...u.extraOn??[]]}),d}),a={...e.original??{},version:1,sources:o,columns:i};return e.limit!=null&&e.limit>0?a.limit=Math.floor(e.limit):delete a.limit,{ok:!0,name:t,spec:a}}var Rk=Object.defineProperty,Ok=Object.getOwnPropertyDescriptor,ar=(e,t,n,r)=>{for(var s=r>1?void 0:r?Ok(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Rk(t,n,s),s};let mt=class extends ke{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),mt.instance=this}disconnectedCallback(){super.disconnectedCallback(),mt.instance===this&&(mt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(Sk(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(Ek(this.modelOf(),e))}removeSource(e){this.applyModel(Tk(this.modelOf(),e))}addComputed(){this.applyModel(Ik(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=Ak(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return k`
      <dialog @cancel=${()=>this.dialogEl?.close()} @keydown=${vt}>
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
                ${e?k`<span class="hint">A table may be joined more than once.</span>`:ie}
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
          ${t?ie:k`<button type="button" class="icon-btn" title="Remove this join" aria-label="Remove ${e.tableName}" @click=${()=>this.removeSource(e.alias)}>×</button>`}
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
                @change=${n=>{const[r,s]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:s??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>k`<option value=${`${n.alias}.${r.field}`} ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}>${n.alias}.${r.field}</option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderSourceColumns(e){const t=this.columns.map((r,s)=>({c:r,i:s})).filter(({c:r})=>!r.computed&&r.alias===e.alias);if(t.length===0)return ie;const n=t.every(({c:r})=>r.include);return k`
      <div class="col-group">
        <div class="group-head">
          <code class="alias">${e.alias}</code>
          <span class="group-name">${e.tableName}</span>
          <button
            type="button"
            class="link-btn"
            @click=${()=>{const r=!n,s=new Set(t.map(({i})=>i));this.columns=this.columns.map((i,o)=>s.has(o)?{...i,include:r}:i)}}
          >
            ${n?"none":"all"}
          </button>
        </div>
        <div class="ticks">
          ${t.map(({c:r,i:s})=>k`
              <label class="tick ${r.include?"":"off"}" title=${`${r.alias}.${r.field}`}>
                <input type="checkbox" .checked=${r.include} @change=${i=>this.setColumn(s,{include:i.target.checked})} />
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
                    @click=${()=>{this.columns=this.columns.filter((r,s)=>s!==n)}}
                  >
                    ×
                  </button>
                </div>
              `)}
      </div>
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};mt.instance=null;mt.styles=[yt,_e`
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
    `];ar([F()],mt.prototype,"name",2);ar([F()],mt.prototype,"limit",2);ar([F()],mt.prototype,"sources",2);ar([F()],mt.prototype,"columns",2);ar([F()],mt.prototype,"error",2);mt=ar([Ee("projection-dialog")],mt);const Dk={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function Pk(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>(Df(e,t),kk(e.store,t))}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void qu(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void qu(t,{editTableId:n})})}async function Df(e,t){if(t.source?.type!=="projection")return;const n=t.source.config;if(!n||!Array.isArray(n.sources))return;const r=yi(n),s=t.columns.map(a=>{const u=!r.has(a.field);if(u===(a.readonly===!0))return a;if(u)return{...a,readonly:!0};const d={...a};return delete d.readonly,d}),i=r.size===0;s.every((a,u)=>a===t.columns[u])&&(t.readonly??!1)===i||await e.store.tables.patch(t.id,{columns:s,readonly:i,updatedAt:Date.now()})}async function Lk(e){const t=e.workspaceId();if(t)for(const n of await e.store.tables.find({workspaceId:t}))await Df(e,n)}async function Mk(e){await Lk(e)}async function jk(e,t,n,r,s){const i=await e.store.tables.find({workspaceId:t}),o=new Map;for(const u of i)o.has(u.name)||o.set(u.name,u);const a={};for(const u of n.sources)a[u.alias]=o.get(u.tableName)?.columns??[];return Vd(n,a,r,s)}async function qu(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),s=a=>({id:a.id,name:a.name,columns:a.columns}),i=mt.instance??Nk();if(t.editTableId){const a=r.find(u=>u.id===t.editTableId)??null;if(!a||a.source?.type!=="projection")return;i.open({candidates:r.filter(u=>u.id!==a.id).map(s),initial:{name:a.name,spec:a.source.config},onSave:Hu(e,n,a)});return}const o=r.find(a=>a.id===t.baseTableId);o&&i.open({base:s(o),candidates:r.map(s),onSave:Hu(e,n,null,o)})}function Hu(e,t,n,r){return async(s,i)=>{const o=await jk(e,t,i,n?.columns??[],n?.deletedColumns??[]),a=yi(i).size===0,u={type:"projection",config:i};n?await e.store.tables.patch(n.id,{name:s,columns:o,source:u,readonly:a,updatedAt:Date.now()}):await e.store.tables.insert({id:Se(),workspaceId:t,name:s,code:Pe(s),columns:o,view:"table",source:u,readonly:a,...r?Fb(i,r):{},updatedAt:Date.now()})}}function Nk(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const zk=Object.freeze(Object.defineProperty({__proto__:null,init:Pk,load:Mk,meta:Dk},Symbol.toStringTag,{value:"Module"})),Fk={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function Uk(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",variant:"secondary",onClick:()=>e.ui.openCommandPalette()})}const Bk=Object.freeze(Object.defineProperty({__proto__:null,init:Uk,meta:Fk},Symbol.toStringTag,{value:"Module"})),ba="easydb:app-progress";function xl(e){typeof document>"u"||document.dispatchEvent(new CustomEvent(ba,{detail:e}))}function qk(){xl({label:""})}class Hk{constructor(t){this.weight=new Map,this.done=new Map;const n=t.reduce((r,s)=>r+Math.max(0,s.total),0);this.uniform=n===0;for(const r of t)this.weight.set(r.tableId,this.uniform?1:Math.max(0,r.total));this.totalWeight=this.uniform?t.length:n}observe(t,n){const r=this.weight.get(t);r!=null&&this.done.set(t,Math.min(r,Math.max(0,n)))}complete(t){const n=this.weight.get(t);n!=null&&this.done.set(t,n)}fraction(){if(this.totalWeight<=0)return 1;let t=0;for(const n of this.done.values())t+=n;return Math.min(1,t/this.totalWeight)}completedTables(){let t=0;for(const[n,r]of this.weight)(this.done.get(n)??-1)>=r&&t++;return t}get tableCount(){return this.weight.size}}const Fo="electron-db:pendingImport",Pf=15*1024*1024;function Lf(e){const t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0&&e.slice(t+1)||e}function Mf(e){return e>=1024*1024?`${(e/(1024*1024)).toFixed(1)} MB`:e>=1024?`${Math.round(e/1024)} KB`:`${e} bytes`}let Mr=null;const Kk={id:"electron-db",name:"Database File",type:"ui",version:"0.1.0",description:"Open, Save As, or Import a .db file (Electron desktop build only).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/electron-db.ts"},Vk=/\.(edb|db|sqlite|sqlite3)$/i,Gk=/\.edb$/i;function Wk(e){const t=window.easydb?.db;t&&(e.ui.registerDropHandler(async n=>{const r=[...n.dataTransfer?.files??[]].find(i=>Vk.test(i.name));if(!r)return!1;const s=t.pathForFile(r);return s?(await Nf(e,t,s,Gk.test(r.name)),!0):(await e.ui.dialogs.alert(`"${r.name}" could not be located on disk, so it cannot be opened.`,"Database file"),!0)}),t.onImportProgress(n=>{if(document.dispatchEvent(new CustomEvent(Zo,{detail:{tableId:n.tableId,rows:n.rows,total:n.total,...n.done?{done:!0}:{}}})),!Mr)return;const{tracker:r,label:s}=Mr;n.done?r.complete(n.tableId):r.observe(n.tableId,n.rows),xl({label:s,fraction:r.fraction(),detail:`${r.completedTables()} of ${r.tableCount} table${r.tableCount===1?"":"s"}`})}),e.ui.registerFooterButton({id:"electron-db:menu",label:"Database",icon:"storage",tooltip:"Open, Save As, or Import a .db file",onClick:async(n,r)=>{const{AnchoredMenu:s}=await ze(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:a}},void 0),i=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(i,[{id:"open",label:"Open…",icon:"folder_open"},{id:"saveAs",label:"Save As…",icon:"save"},{id:"import",label:"Import…",icon:"file_download"},...qf()?[{id:"stop",label:"Stop importing",icon:"cancel"}]:[]]);if(o)try{o==="open"?await jf(n,t):o==="saveAs"?await Xk(n,t):o==="import"?await Ni(n,t):o==="stop"&&Hf()}catch(a){n.ui.dialogs.toast(`${o} failed: ${a.message}`,{kind:"error",title:"Database file"})}}}))}function Yk(e){const t=window.easydb?.db;t&&Kf(e,t).catch(n=>{e.ui.dialogs.toast(`Finishing the conversion failed: ${n.message}`,{kind:"error",title:"Convert to EDA"})})}async function jf(e,t){const n=await t.openDb();n.ok&&await kl(e,t,n.path,n.kind)}async function Nf(e,t,n,r){if(!r){await Ni(e,t,n);return}const s=await t.probeDb(n);if(s==="easydb"){await zf(e,t,n,s);return}e.ui.dialogs.toast(`"${n}" is named as a workspace but does not contain one.`,{kind:"warning",title:"Open workspace"}),await kl(e,t,n,s)}async function kl(e,t,n,r){if(r==="unreadable"){await e.ui.dialogs.alert(`"${n}" is not a SQLite database — it could not be read.`,"Database file");return}const s=await e.ui.dialogs.choice(`What would you like to do with "${n}"?`,["Open Workspace","Browse .db file","Import data"],"Database file");if(s){if(s==="Import data"){await Ni(e,t,n);return}if(s==="Browse .db file"){await Ff(e,t,n);return}await zf(e,t,n,r)}}async function zf(e,t,n,r){if(r==="foreign"){const i=await e.ui.dialogs.choice(`"${n}" is a SQLite database, but not an easyDBAccess workspace — there is no workspace in it to open.

It can be converted into one (a new file is written; this one is left exactly as it is), or opened read-only for a look.`,["Convert to EDA","Browse"],"Open workspace");i==="Convert to EDA"?await Qk(e,t,n):i==="Browse"&&await Ff(e,t,n);return}await e.ui.dialogs.confirm(`Open "${n}"?

This replaces the current workspace view with that file's data. Nothing is deleted — the file you have open now is left exactly as it is on disk.`,"Open workspace")&&await t.openDbCommit(n)}async function Qk(e,t,n){const r=await t.browseList(n);if(r.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to convert.`,"Convert to EDA");return}const s=await Uf(e,r,"Convert to EDA",{offerTablesOnly:!0});s.length===0||(await t.convertDb(n,s.map(o=>o.name))).ok}async function Xk(e,t){const n=await t.saveDbAs();n.ok&&e.ui.dialogs.toast(`Saved a copy to "${n.path}" — that file is now the active database.`,{kind:"success",title:"Save database as"})}async function Ff(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await t.browseList(n);if(s.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to browse.`,"Browse database");return}const i=await Uf(e,s,"Browse database");if(i.length===0)return;const o=new Set((await e.store.tables.find()).filter(u=>u.workspaceId===r).map(u=>u.name.toLowerCase()));for(const u of i){const d=Gf(u.name,o);o.add(d.toLowerCase()),await e.store.tables.insert({id:crypto.randomUUID(),workspaceId:r,name:d,columns:u.columns,view:"table",readonly:!0,source:{type:"sqlitefile",config:{path:n,objectName:u.name,isView:u.kind==="view"},writable:!1},updatedAt:Date.now()})}const a=i.filter(u=>u.kind==="view").length;e.ui.dialogs.toast(`Browsing ${i.length} object${i.length===1?"":"s"} from "${n}"${a?` (${a} view${a===1?"":"s"})`:""} — read-only.`,{kind:"success",title:"Browse database"})}async function Uf(e,t,n,r){if(t.length===1)return t;const s=t.filter(g=>g.kind==="table"),i=`All ${t.length}`,o=r?.offerTablesOnly&&s.length>0&&s.length<t.length?`All ${s.length} table${s.length===1?"":"s"} (skip the views)`:null,a=t.map(g=>`${g.name}${g.kind==="view"?" (view)":""}${g.rowCount==null?"":` — ${g.rowCount} rows`}`),u=await e.ui.dialogs.choice("Which tables or views?",[...o?[o]:[],i,...a],n);if(!u)return[];if(u===o)return s;if(u===i)return t;const d=a.indexOf(u),p=t[d];return p?[p]:[]}async function Ni(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await t.importDb(r,n);if(!s.ok)return;const{preview:i}=s;if(i.candidates.length===0){await e.ui.dialogs.alert(`No importable tables were found in "${s.path}".`,"Import database");return}const o=i.sizeBytes??0,a=await Vf.pickCandidates(e,i.candidates);if(a.length===0)return;const u=a.filter(S=>S.mode==="projection"),d=a.filter(S=>S.mode!=="projection").map(S=>S.candidate),p=new Set(d.map(S=>S.name));if(d.length===0&&u.length===0)return;const g=new Set((await e.store.tables.find()).filter(S=>S.workspaceId===r).map(S=>S.name.toLowerCase())),y={};for(const S of i.candidates){if(!p.has(S.name)){y[S.name]={action:"skip"};continue}if(!S.collides)continue;const L=await e.ui.dialogs.choice(`A table named "${S.name}" already exists in this workspace.`,["Append","Overwrite","Rename","Skip"],"Import — table already exists");if(!L||L==="Skip"){y[S.name]={action:"skip"};continue}if(L==="Append"){const z=await e1(e,S,r);y[S.name]=z??{action:"skip"};continue}if(L==="Overwrite"){y[S.name]={action:"overwrite"};continue}const W=Gf(S.name,g);g.add(W.toLowerCase()),y[S.name]={action:"rename",renameTo:W}}const{plan:w,skipped:$}=await t.importPrepare(s.path,r,y);if(w.length===0){wa(e,s.path,$);return}e.ui.dialogs.toast(`Importing ${w.length} object${w.length===1?"":"s"} from "${s.path}" — the windows are there now and fill in as the rows arrive.`,{kind:"info",title:"Import database"});const x=Lf(s.path),T=await Bf(e,t,s.path,w,$,`Importing ${x}${o>0?` (${Mf(o)})`:""}`);wa(e,s.path,T),u.length>0&&await Jk(e,r,u,o>Pf)}async function Jk(e,t,n,r=!1){const[{parseSqlScript:s},{createProjectionTable:i}]=await Promise.all([ze(()=>Promise.resolve().then(()=>sw),void 0),ze(()=>Promise.resolve().then(()=>Gb),void 0)]),o=[],a=[];for(const{candidate:u}of n){const d=u.sql??"";if(!d){a.push({name:u.name,why:"its definition could not be read"});continue}const p=s(d),g=p.projections[0];if(!g){a.push({name:u.name,why:p.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const y=(await e.store.tables.find()).filter(x=>x.workspaceId===t),w=new Map(y.map(x=>[x.name.toLowerCase(),x])),$=await i(e,t,{name:u.name,spec:g.spec,...g.sortBy?{sortBy:g.sortBy}:{}},{resolve:x=>w.get(x.toLowerCase()),taken:y.map(x=>x.name)});if(!$){const x=g.spec.sources.map(T=>T.tableName).join(", ");a.push({name:u.name,why:`it reads tables this workspace does not have (${x}) — import them too`});continue}if(r){const x=o.length;await e.store.tables.patch($.id,{windowGeometry:{x:40+x%10*24,y:40+x%10*24,w:640,h:360,z:x,minimized:!0,maximized:!1},updatedAt:Date.now()})}o.push($.name)}o.length>0&&e.ui.dialogs.toast(`Created ${o.length} projection${o.length===1?"":"s"} from views: ${o.join(", ")}.${r?" Left minimized — this file is big enough that opening them all would stall the app.":""}`,{kind:"success",title:"Import database"}),a.length>0&&e.ui.dialogs.toast(`${a.length} view${a.length===1?"":"s"} could not become a projection — ${a.map(u=>`${u.name}: ${u.why}`).join("; ")}. Import them as Data instead.`,{kind:"warning",title:"Import database"})}async function Bf(e,t,n,r,s=[],i="Importing"){const o=[...s];En={cancelled:!1};const a=En,u=new Hk(r.map(d=>({tableId:d.tableId,total:d.total})));Mr={tracker:u,label:i},xl({label:i,detail:`0 of ${r.length} table${r.length===1?"":"s"}`});try{for(const d of r){if(a.cancelled){e.ui.dialogs.toast(`Stopped. ${o.length} of ${r.length} table${r.length===1?"":"s"} were filled; the rest are still empty.`,{kind:"warning",title:"Import database"});break}try{const p=await t.importRows(n,d);o.push({sourceName:d.sourceName,action:d.action,finalName:d.finalName,tableId:d.tableId,rowCount:p})}catch(p){e.ui.dialogs.toast(`"${d.finalName}" failed: ${p.message}`,{kind:"error",title:"Import database"})}}}finally{En===a&&(En=null),Mr?.tracker===u&&(Mr=null),qk()}return o}let En=null;function qf(){return En!==null}function Hf(){En&&(En.cancelled=!0)}async function Kf(e,t){const r=(await e.store.settings.findOne(Fo))?.value;if(!r?.sourcePath||!r.plan?.length)return;const s=r.plan.length,i=r.plan.reduce((y,w)=>y+(w.total>0?w.total:0),0),o="Fill them in now",a="Leave them empty",u=await e.ui.dialogs.choice(`${s} table${s===1?"":"s"} in this workspace ${s===1?"is":"are"} still empty — ${s===1?"its":"their"} rows were being copied from "${r.sourcePath}" when the app last stopped.

${i>0?`About ${i.toLocaleString()} rows are left. `:""}Copying can be stopped from the Database menu once it starts.`,[o,a],"Unfinished import");if(u!==o){u===a&&await e.store.settings.remove(Fo);return}const d=Lf(r.sourcePath),p=r.sizeBytes??0,g=await Bf(e,t,r.sourcePath,r.plan,[],`Converting ${d}${p>0?` (${Mf(p)})`:""}`);await e.store.settings.remove(Fo),wa(e,r.sourcePath,g)}const Vf={pickCandidates:(e,t)=>Zk(e,t)};async function Zk(e,t){const{chooseDatabaseObjects:n}=await ze(async()=>{const{chooseDatabaseObjects:i}=await Promise.resolve().then(()=>Kg);return{chooseDatabaseObjects:i}},void 0),r=t.map(i=>({name:i.name,size:i.rowCount<0?null:i.rowCount,kind:i.isView?"view":"table",...i.collides?{detail:"⚠ name already in use"}:{}})),s=await n(r,{title:"Import database",message:"Tables bring their rows. A view can come in as a Projection — its query, recomputed — or as Data, a snapshot you can edit.",confirmLabel:"Import",offerViewModes:!0});return s?s.map(i=>({candidate:t[i.index],mode:i.mode})):[]}async function e1(e,t,n){const r=t.columns??[],i=(await e.store.tables.find()).find(d=>d.workspaceId===n&&d.name.toLowerCase()===t.name.toLowerCase())?.columns??[],o=new Set(i.map(d=>d.field.toLowerCase()));if(r.length===0||i.length===0||r.every(d=>o.has(d.toLowerCase())))return{action:"append"};const{mapColumnsToTable:a}=await ze(async()=>{const{mapColumnsToTable:d}=await import("./column-map-dialog-CR9a9IQl.js");return{mapColumnsToTable:d}},[]),u=await a([...r],[...i],t.name);return u?{action:"append",mapping:u}:null}function Gf(e,t){if(!t.has(e.toLowerCase()))return e;for(let n=2;;n++){const r=`${e} (${n})`;if(!t.has(r.toLowerCase()))return r}}function wa(e,t,n){const r={created:n.filter(o=>o.action==="created").length,renamed:n.filter(o=>o.action==="renamed").length,overwritten:n.filter(o=>o.action==="overwritten").length,skipped:n.filter(o=>o.action==="skipped").length},s=n.reduce((o,a)=>o+a.rowCount,0),i=[];if(r.created&&i.push(`${r.created} new`),r.renamed&&i.push(`${r.renamed} renamed`),r.overwritten&&i.push(`${r.overwritten} overwritten`),r.skipped&&i.push(`${r.skipped} skipped`),i.length===0){e.ui.dialogs.toast(`Nothing imported from "${t}".`,{kind:"warning",title:"Import database"});return}e.ui.dialogs.toast(`Imported from "${t}": ${i.join(", ")} (${s} row${s===1?"":"s"} total).`,{kind:"success",title:"Import database"})}const t1=Object.freeze(Object.defineProperty({__proto__:null,LARGE_SOURCE_BYTES:Pf,cancelImport:Hf,handleDatabaseFile:kl,handleDroppedFile:Nf,importDeps:Vf,importFlow:Ni,init:Wk,isImporting:qf,load:Yk,meta:Kk,openFlow:jf,resumePendingImport:Kf},Symbol.toStringTag,{value:"Module"})),n1={id:"sqlitefile-source",name:"Browse a database file",type:"source",version:"0.1.0",description:"Reads tables and views out of a .db file, read-only (Electron desktop build only).",author:"Marc Cawood",repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sqlitefile-source.ts"};function Wf(e){const t=e.source?.config;return!t||typeof t.path!="string"||typeof t.objectName!="string"?null:{path:t.path,objectName:t.objectName,isView:!!t.isView}}function Cn(e){throw new Error(`This table is a read-only browse of a database file — ${e} is not possible. Use Import to bring the data into your workspace first.`)}function r1(e,t){const n=Wf(e),r=new Set;let s=null;async function i(){return n?(s=(await t.browseRows(n.path,n.objectName,e.columns)).map(u=>({id:u.id,tableId:e.id,data:u.data,updatedAt:0})),s):[]}function o(a){for(const u of r)u(a)}return{async find(){return s??await i()},async findOne(a){return(s??await i()).find(u=>u.id===a)},async count(){return(s??await i()).length},async refresh(){o(await i())},subscribe(a){return r.add(a),(s?Promise.resolve(s):i()).then(a),()=>void r.delete(a)},insert:()=>Cn("adding a row"),bulkInsert:()=>Cn("adding rows"),upsert:()=>Cn("changing a row"),patch:()=>Cn("changing a row"),remove:()=>Cn("deleting a row"),bulkRemove:()=>Cn("deleting rows"),clear:()=>Cn("clearing the table")}}function s1(e){const t=window.easydb?.db;t&&typeof e.registerRowSource=="function"&&e.registerRowSource({type:"sqlitefile",create:n=>r1(n,t),schemaEditable:!1})}const i1=Object.freeze(Object.defineProperty({__proto__:null,init:s1,meta:n1,parseConfig:Wf},Symbol.toStringTag,{value:"Module"})),o1=[vk,Xv,Lg,ab,dw,ww,My,Xy,sv,Fg,Ev,hv,Bv,Wv,n0,a0,d0,m0,S0,Q0,e$,s$,d$,g$,k$,lx,px,Nx,Ef,bk,zk,Bk,t1,i1];function a1(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const Yf=o1.map(e=>{const t=a1(e);return{id:t.id,meta:t,module:e}}),l1=Yf;function ya(e){return`builtin:${e}`}async function c1(e){const t=[];for(const n of Yf)if(!await u1(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function u1(e,t){return t.meta.fixed?!1:_t==="all-optional"?!0:(await e.store.plugins.findOne(ya(t.id)))?.enabled===!1}function Qf(e){return e.filter(t=>t.status!=="minimized")}function d1(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),s=Math.ceil(e/r),i=(t.w-n*(r+1))/r,o=(t.h-n*(s+1))/s;return Array.from({length:e},(a,u)=>{const d=u%r,p=Math.floor(u/r);return{x:t.x+n+d*(i+n),y:t.y+n+p*(o+n),w:i,h:o}})}function lr(){return F0()}function h1(){for(const e of lr())e.close?.()}function f1(){for(const e of lr())e.minimize?.()}function p1(){for(const e of lr())e.normalize?.()}function m1(){for(const e of lr())e.maximize?.()}function Xf(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=ai()?.snapshot(),s=r?.scale&&r.scale>0?r.scale:1,i=r?.x??0,o=r?.y??0;return{x:-i/s,y:-o/s,w:t/s,h:n/s}}function Jf(e,t,n,r,s){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(s)}px`}function g1(){const e=Qf(lr()).reverse();if(e.length===0)return;const t=Xf(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),s=Math.min(480,Math.max(240,t.h*.6));e.forEach((i,o)=>{i.normalize?.(),Jf(i,t.x+24+o*n,t.y+24+o*n,r,s)}),Zf()}function Zf(){gf(),Kx()}function b1(){const e=Qf(lr()).reverse();if(e.length===0)return;const n=d1(e.length,Xf(),8);e.forEach((r,s)=>{r.normalize?.();const i=n[s];i&&Jf(r,i.x,i.y,i.w,i.h)}),Zf()}function Fs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function w1(e,t){const{from:n,to:r,name:s,mode:i}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:s,createdAt:Date.now(),pluginUrls:i==="empty"?[]:[...o?.pluginUrls??[]]}),i==="empty")return r;if(i==="all"){const u=await e.tables.where("workspaceId").equals(n).toArray(),d=new Map;for(const w of u){const $=Fs();d.set(w.id,$),await e.tables.put({...w,id:$,workspaceId:r,updatedAt:Date.now()})}for(const[w,$]of d){const x=await e.rows.where("tableId").equals(w).toArray();x.length>0&&await e.rows.bulkPut(x.map(T=>({...T,id:Fs(),tableId:$})))}const p=await e.viewTemplates.where("workspaceId").equals(n).toArray(),g=new Map;for(const w of p){const $=Fs();g.set(w.id,$),await e.viewTemplates.put({...w,id:$,workspaceId:r})}const y=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const w of y){const $=d.get(w.tableId);$&&await e.viewInstances.put({...w,id:Fs(),workspaceId:r,tableId:$,templateId:g.get(w.templateId)??w.templateId})}}const a=await e.settings.where("workspaceId").equals(n).toArray();for(const u of a)await e.settings.put({...u,key:St(r,u.name),workspaceId:r,name:u.name});return r}async function ep(e,t){return(await e.tables.where("workspaceId").equals(t).toArray()).map(r=>r.id)}async function tp(e,t){const n=await ep(e,t),r=n.length===0?0:await e.rows.where("tableId").anyOf(n).count();return{tables:n.length,rows:r,views:await e.viewInstances.where("workspaceId").equals(t).count(),templates:await e.viewTemplates.where("workspaceId").equals(t).count(),settings:await e.settings.where("workspaceId").equals(t).count()}}async function y1(e,t){const n=await tp(e,t),r=await ep(e,t);if(r.length>0){const a=await e.rows.where("tableId").anyOf(r).toArray();await e.rows.bulkDelete(a.map(u=>u.id)),await e.tables.bulkDelete(r)}const s=await e.viewInstances.where("workspaceId").equals(t).toArray();await e.viewInstances.bulkDelete(s.map(a=>a.id));const i=await e.viewTemplates.where("workspaceId").equals(t).toArray();await e.viewTemplates.bulkDelete(i.map(a=>a.id));const o=await e.settings.where("workspaceId").equals(t).toArray();return await e.settings.bulkDelete(o.map(a=>a.key).filter(a=>typeof a=="string")),await e.workspaces.delete(t),n}const Ku="Clone everything (tables, views, settings)",Vu="Clone settings only (no data)",v1="Empty workspace";function zi(e){const t=new URLSearchParams(location.search);t.set("space",e),location.assign(`${location.pathname}?${t.toString()}${location.hash}`)}function $1(){const e=new URLSearchParams(location.search);e.delete("space");const t=e.toString();location.assign(`${location.pathname}${t?`?${t}`:""}${location.hash}`)}async function x1(){const e=await ae(),t=(await e.store.workspaces.find()).filter(r=>r.id!==e.workspaceId);if(t.length===0){e.api.ui.dialogs.toast("This is the only workspace.",{kind:"info",title:"Workspaces"});return}const n=await e.api.ui.dialogs.choice("Open which workspace?",t.map(r=>r.name),"Switch workspace");n&&zi(n)}async function np(){const e=await ae(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[Ku,Vu,v1],"New workspace");if(!n)return;const r=n===Ku?"all":n===Vu?"settings":"empty";await w1(ei(),{from:e.workspaceId,to:ip(t.trim()),name:t.trim(),mode:r}),zi(t.trim())}async function rp(){const e=await ae(),t=await e.store.workspaces.find();let n=t.find(u=>u.id===e.workspaceId)??t[0];if(!n)return;if(t.length>1){const u=await e.api.ui.dialogs.choice("Delete which workspace? Everything in it goes with it.",t.map(d=>d.name),"Delete workspace");if(!u)return;n=t.find(d=>d.name===u)??n}const r=await tp(ei(),n.id),s=[`${r.tables} table${r.tables===1?"":"s"}`,`${r.rows.toLocaleString()} row${r.rows===1?"":"s"}`,`${r.views} view${r.views===1?"":"s"}`,`${r.settings} setting${r.settings===1?"":"s"}`].join(", "),i=t.length===1;if(!await e.api.ui.dialogs.confirm(`Delete the workspace "${n.name}"?

${s} will be deleted. This cannot be undone.`+(i?`

It is the only workspace, so an empty one will be created in its place.`:""),"Delete workspace"))return;if(await y1(ei(),n.id),I1(n.id),n.id!==e.workspaceId){e.api.ui.dialogs.toast(`Deleted "${n.name}" (${s}).`,{kind:"success",title:"Workspace deleted"});return}const a=t.find(u=>u.id!==n.id);a?zi(a.name):$1()}function k1(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:f1},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:p1},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:m1},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:g1},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:b1},{id:"windows:close-all",title:"Close all windows",icon:"close",run:h1}];for(const i of t)e.ui.registerCommand({id:i.id,title:i.title,group:"Windows",icon:i.icon,run:i.run});const n=[{id:"workspace:switch",title:"Switch workspace",icon:"swap_horiz",keywords:["space","open","change"],run:x1},{id:"workspace:new",title:"New workspace",icon:"add",keywords:["space","add","create","clone"],run:np},{id:"workspace:delete",title:"Delete workspace",icon:"delete",keywords:["space","remove","drop"],run:rp}];for(const i of n)e.ui.registerCommand({id:i.id,title:i.title,group:"Workspace",icon:i.icon,keywords:i.keywords,run:i.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",s="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:i=>i.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(s,"_blank","noopener")}})}async function C1(e){if(_t==="url-plugins"||_t==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],s=[];for(const i of r)try{const o=await e.store.plugins.findOne(i);if(o&&o.enabled===!1)continue;let a=o?.cachedBody??"";if(a)_1(e,i,a);else{try{a=await sp(i)}catch(p){await e.store.plugins.upsert({url:i,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${p.message}`}),e.events.emit("plugin:error",{url:i,phase:"fetch",error:p});continue}await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),cachedBody:a})}const u=new Blob([a],{type:"text/javascript"}),d=URL.createObjectURL(u);try{const p=await import(d);await p.init?.(e),s.push({url:i,mod:p})}finally{setTimeout(()=>URL.revokeObjectURL(d),5e3)}}catch(o){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:i,phase:"init",error:o})}return async()=>{for(const{url:i,mod:o}of s)try{await o.load?.(e)}catch(a){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`load: ${a.message}`}),e.events.emit("plugin:error",{url:i,phase:"load",error:a})}}}async function sp(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function _1(e,t,n){return(async()=>{try{const r=await sp(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let Uo=null;function ae(){return Uo||(Uo=S1()),Uo}async function S1(){let e="";const t=window.easydb?.store?Lm(window.easydb.store,()=>e):Am(await ei(),()=>e),n=Mm(),r=Hm(),s=new Map;t.tables.subscribe(T=>{s.clear();for(const S of T)s.set(S.id,S)});const i=Om(t.tables),o={...i,insert:async T=>{const S=await i.insert(T);return s.set(S.id,S),S},upsert:async T=>{const S=await i.upsert(T);return s.set(S.id,S),S}};let a=null;const u={get backend(){if(!a)throw new Error("[host] row-source ctx used before app init completed");return a.backend},events:n,settings:t.settings,workspaceId:()=>y},d=Rm({base:{...t,tables:o},providers:r.rowSources,tableById:T=>s.get(T),ctx:u}),p=E1(),g=await d.workspaces.find();let y;if(p){const T=ip(p),S=g.find(L=>L.id===T||L.name===p);S?y=S.id:y=(await d.workspaces.insert({id:T,name:p,createdAt:Date.now(),pluginUrls:[]})).id}else{const T=T1(),S=T?g.find(L=>L.id===T):void 0;S?y=S.id:g.length>0?y=g[0].id:y=(await d.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}e=y,A1(y);const w=Zm({store:d,events:n,registries:r,workspaceId:()=>y});a=w,k1(w),n.on("import:after",({source:T,tableId:S,rowCount:L})=>{T!=="datasette"&&w.store.tables.findOne(S).then(W=>{w.ui.dialogs.toast(`Imported ${L} row${L===1?"":"s"} into "${W?.name??S}".`,{kind:"success",title:T.toUpperCase()+" import"})})}),n.on("plugin:error",({url:T,phase:S,error:L})=>{w.ui.dialogs.toast(`[${S}] ${L?.message??String(L)}`,{kind:"error",title:`Plugin: ${T}`})});const $=await c1(w),x=await C1(w);return queueMicrotask(async()=>{n.emit("app:ready",{workspaceId:y}),await $(),await x(),_t==="all-optional"?w.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):_t==="url-plugins"&&w.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),_t!=="off"&&w.ui.openPluginManager()}),globalThis.api=w,{store:d,events:n,workspaceId:y,registries:r,api:w}}function E1(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const li="eda:lastWorkspaceId";function T1(){try{return globalThis.localStorage?.getItem(li)??null}catch{return null}}function I1(e){try{globalThis.localStorage?.getItem(li)===e&&globalThis.localStorage.removeItem(li)}catch{}}function A1(e){try{globalThis.localStorage?.setItem(li,e)}catch{}}function ip(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var R1=Object.defineProperty,O1=Object.getOwnPropertyDescriptor,Fi=(e,t,n,r)=>{for(var s=r>1?void 0:r?O1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&R1(t,n,s),s};let nr=class extends ke{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=sr(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await ae(),s=crypto.randomUUID();await r.store.tables.insert({id:s,workspaceId:r.workspaceId,name:t,code:Pe(t),columns:n.columns,view:"table",updatedAt:Date.now()});const i=n.rows.map(o=>({id:crypto.randomUUID(),tableId:s,data:o,updatedAt:Date.now()}));await r.store.rows(s).bulkInsert(i),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return k`
      <dialog @cancel=${this.close} @keydown=${vt}>
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
    `}};nr.styles=[yt,_e`
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
    `];Fi([F()],nr.prototype,"name",2);Fi([F()],nr.prototype,"text",2);Fi([F()],nr.prototype,"errorMsg",2);nr=Fi([Ee("csv-paste-dialog")],nr);const Cl=new Map;let Gu=!1;function D1(){for(const e of Cl.values())if(e===null||e.open)return!0;return!1}function P1(e,t=null){Cl.set(e,t),M1()}function L1(e){Cl.delete(e)}function op(e,t){const n=()=>{t.open&&P1(e,t)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>L1(e))}function M1(){Gu||(Gu=!0,window.addEventListener("beforeunload",e=>{D1()&&(e.preventDefault(),e.returnValue="")}))}var j1=Object.defineProperty,N1=Object.getOwnPropertyDescriptor,_l=(e,t,n,r)=>{for(var s=r>1?void 0:r?N1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&j1(t,n,s),s};const z1=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let Ft=class extends ke{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:z1,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return k`
      <dialog @cancel=${this.onCancel} @keydown=${vt}>
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
              Define <code>function render(row) { … }</code>. <code>row</code> is the full row object. What you return is passed to the column's renderer, so the cell shows a computed value instead of
              the stored one — and the cell becomes read-only. A script that throws shows a small error chip in the cell.
            </p>
            <p class="hint">
              Besides the JS globals you can call <code>markdownToHtml(text)</code> (also <code>easydb.markdownToHtml</code>) — set this column's renderer to <code>html</code> so the result shows as
              formatted text rather than as its own source.
            </p>
            <textarea spellcheck="false" autofocus .value=${this.text} @input=${e=>this.text=e.target.value}></textarea>
          </div>
        </form>
      </dialog>
    `}};Ft.instance=null;Ft.styles=[yt,_e`
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
    `];_l([F()],Ft.prototype,"text",2);_l([F()],Ft.prototype,"columnLabel",2);Ft=_l([Ee("script-editor-dialog")],Ft);function Wu(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}const ap={unique:{get:e=>!!e.unique,set:e=>({unique:e?!0:void 0})},notnull:{get:e=>!!e.notnull,set:e=>({notnull:e?!0:void 0})},visible:{get:e=>!e.hidden,set:e=>({hidden:e?void 0:!0})},sortable:{get:e=>e.sortable!==!1,set:e=>({sortable:e?void 0:!1})},filterable:{get:e=>e.filterable!==!1,set:e=>({filterable:e?void 0:!1})}};function lp(e,t){return e.every(n=>ap[t].get(n))}function F1(e,t){const n=!lp(e,t);return e.map(r=>({...r,...ap[t].set(n)}))}function cp(e){if(e.source?.type!=="projection")return null;const t=e.source.config;return t&&Array.isArray(t.sources)?t:null}function U1(e,t,n,r){return{projections:t.filter(i=>{if(i.id===r)return!1;const o=cp(i);return!!o&&o.sources.some(a=>a.tableName===e)}),views:n.filter(i=>i.tableName===e)}}function B1(e,t,n){return e.sources.some(r=>r.tableName===t)?{...e,sources:e.sources.map(r=>r.tableName===t?{...r,tableName:n}:r)}:null}function q1(e){const t=[];return e.projections.length>0&&t.push(`${Yu(e.projections.length,"projection")} (${Qu(e.projections.map(n=>n.name))})`),e.views.length>0&&t.push(`${Yu(e.views.length,"view")} (${Qu(e.views.map(n=>n.name||"untitled"))})`),t.length>0?t.join(" and "):null}function Yu(e,t){return`${e} ${t}${e===1?"":"s"}`}function Qu(e){const t=e.slice(0,3).map(n=>`"${n}"`);return e.length>3?`${t.join(", ")} and ${e.length-3} more`:t.join(", ")}var H1=Object.defineProperty,K1=Object.getOwnPropertyDescriptor,nt=(e,t,n,r)=>{for(var s=r>1?void 0:r?K1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&H1(t,n,s),s};const V1=["string","number","boolean","date","datetime","array"];function Xu(e){return[...e.keys()].filter(t=>!qm.has(t)).sort()}function G1(e,t){return t&&!e.includes(t)?[...e,t]:[...e]}async function W1(e,t,n,r){const s=await ae(),i=(await s.store.viewInstances.find()).filter(o=>o.tableId===e||o.tableName===t);for(const o of i)o.tableName!==n&&await s.store.viewInstances.patch(o.id,{tableName:n,updatedAt:Date.now()});for(const o of r?.projections??[]){const a=cp(o),u=a&&B1(a,t,n);u&&await s.store.tables.patch(o.id,{source:{type:"projection",config:u},updatedAt:Date.now()})}}function Y1(e,t,n){const r=`Renaming "${e}" to "${t}" affects ${n}.

They reference this table by name, so they will be updated to point at "${t}". Continue?`,s=ft.instance;return s?s.confirm(r,"Rename table"):Promise.resolve(window.confirm(r))}let Ge=class extends ke{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e),this.dialogEl&&op("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await ae();if(this.rendererOptions=Xu(n.registries.cellRenderers),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=Xu(n.registries.cellRenderers),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await ae(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.tableTitle=s.title??"",this.tableReadonly=!!s.readonly,this.columns=s.columns.map(o=>({field:o.field,label:o.label,type:o.type,renderer:o.renderer,script:o.script,max:o.max,unique:o.unique,notnull:o.notnull,hidden:o.hidden,sortable:o.sortable,filterable:o.filterable,origField:o.field,orig:o}));const i=await r.store.rows(e).find();this.previewRows=i.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[s]=r.splice(e,1);r.splice(n,0,s),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=s?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const s=[...this.columns],[i]=s.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),s.splice(o,0,i),this.columns=s}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}renderFlagHead(e,t,n){const r=lp(this.columns,e);return k`<button
      type="button"
      class="flag-label flag-head"
      title=${`${n} — click to ${r?"clear":"set"} every column`}
      aria-pressed=${r?"true":"false"}
      @click=${()=>this.columns=F1(this.columns,e)}
    >
      ${t}
    </button>`}async runColumnAction(e){this.errorMsg="";const t=await ae();try{const n=await e.run(t.api,{columns:this.columns.map(s=>Wu(s)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(s=>[s.field,s]));this.columns=this.columns.map(s=>{const i=r.get(s.field);return i?{...s,label:i.label??s.label,type:i.type??s.type,renderer:i.renderer,script:i.script}:s})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=Ft.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await ae(),r=(await n.store.tables.find()).filter(d=>d.workspaceId===n.workspaceId),s=t.toLowerCase(),i=r.find(d=>d.name.toLowerCase()===s&&d.id!==this.editTableId);if(i){this.errorMsg=`A table named "${i.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const d of this.columns){const p=d.field.trim();if(!p){this.errorMsg="Column field names cannot be empty.";return}if(o.has(p)){this.errorMsg=`Duplicate column field: ${p}`;return}o.add(p)}const a=this.tableTitle.trim(),u=this.columns.map(Wu);if(this.mode==="edit"&&this.editTableId){const d=this.editTableId,p=await n.store.tables.findOne(d),g=new Map((p?.columns??[]).map(E=>[E.field,E])),y=u.filter(E=>{const q=g.get(E.field);return E.unique&&!q?.unique||E.notnull&&!q?.notnull||E.max&&E.max>0&&E.max!==q?.max});if(y.length>0){const E=await n.store.rows(d).find(),q=J1(y,E);if(q.length>0){this.errorMsg=`Cannot save: ${q.length} existing ${q.length===1?"row violates":"rows violate"} the new constraints.
${q.slice(0,5).join(`
`)}${q.length>5?`
…and ${q.length-5} more.`:""}`;return}}const w=new Set(this.columns.map(E=>E.origField).filter(E=>!!E)),$=new Set(u.map(E=>E.field)),x=(p?.columns??[]).map(E=>E.field).filter(E=>!w.has(E)),T=p?.deletedColumns??[],S=[...new Set([...T,...x])].filter(E=>!$.has(E));let L=null;if(p&&p.name!==t){const E=(await n.store.viewInstances.find()).filter(X=>X.workspaceId===n.workspaceId);L=U1(p.name,r,E,d);const q=q1(L);if(q&&!await Y1(p.name,t,q))return}const W={name:t,title:a,columns:u,readonly:this.tableReadonly,updatedAt:Date.now()};(S.length>0||T.length>0)&&(W.deletedColumns=S);const z=p?.name;await n.store.tables.patch(d,W);const re=x.filter(E=>!$.has(E)),G=this.fieldRenames();if(!p?.source&&(re.length>0||G.length>0)){const E=await n.store.rows(d).find();for(const q of E){let X=!1,ue={...q.data};const pe=Lc(ue,G);pe&&(ue=pe,X=!0);for(const H of re)H in ue&&(delete ue[H],X=!0);X&&await n.store.rows(d).patch(q.id,{data:ue,updatedAt:Date.now()})}}z!==void 0&&z!==t&&await W1(d,z,t,L)}else await n.store.tables.insert({id:Se(),workspaceId:n.workspaceId,name:t,title:a,code:Pe(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return k`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(s=>({...s,data:Lc(s.data,e)??s.data})):this.previewRows,n=new Map;for(const s of this.columns){if(!s.unique)continue;const i=new Set,o=new Set;for(const a of t){const u=a.data[s.field];u==null||u===""||(i.has(u)&&o.add(u),i.add(u))}n.set(s.field,o)}const r=this.columns.filter(s=>!s.hidden);return k`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${r.map(s=>k`<th title=${s.field}>${s.label||s.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(s=>k`
                <tr>
                  ${r.map(i=>{const o=s.data[i.field],a=X1(i,o,n.get(i.field));return k`<td class=${a?"violation":""} title=${a??""}>${Q1(o)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return k`
      <dialog @cancel=${this.close} @keydown=${vt}>
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
                ${this.renderFlagHead("unique","U","Unique")} ${this.renderFlagHead("notnull","!","Not null")} ${this.renderFlagHead("sortable","⇅","Sortable")}
                ${this.renderFlagHead("filterable","⚲","Filterable (includes search)")}
                <span></span>
                <span></span>
                <span></span>
              </div>
              ${this.columns.map((n,r)=>{const s=this.dragSrcIdx===r,i=this.dropTargetIdx===r,o=i&&this.dropEdge==="before"?" drop-before":i&&this.dropEdge==="after"?" drop-after":"";return k`
                  <div
                    class=${`col-row${s?" drag-source":""}${o}`}
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
                      ${V1.map(a=>k`<option value=${a} ?selected=${a===n.type}>${a}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${a=>{const u=a.target.value;this.patchColumn(r,{renderer:u||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${G1(this.rendererOptions,n.renderer).map(a=>k`<option value=${a} ?selected=${a===n.renderer}>${a}</option>`)}
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
                      @input=${a=>{const u=a.target.value;this.patchColumn(r,{max:u===""?void 0:Number(u)})}}
                    />
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
            ${this.renameDetected()?k`<div class="hint">Existing rows are re-keyed on save, so renamed fields keep their data.</div>`:""}
            ${this.errorMsg?k`<div class="error">${this.errorMsg}</div>`:""} ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Ge.styles=[xt,yt,_e`
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
        /* drag | 👁 | field | label | type | renderer | script | max | U ! ⇅ ⚲ | up down del */
        grid-template-columns:
          1.25rem 1.5rem 1fr 1fr 7rem 7rem 1.5rem 4rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem
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
    `];nt([F()],Ge.prototype,"mode",2);nt([F()],Ge.prototype,"editTableId",2);nt([F()],Ge.prototype,"name",2);nt([F()],Ge.prototype,"tableTitle",2);nt([F()],Ge.prototype,"tableReadonly",2);nt([F()],Ge.prototype,"columns",2);nt([F()],Ge.prototype,"errorMsg",2);nt([F()],Ge.prototype,"noticeMsg",2);nt([F()],Ge.prototype,"dragSrcIdx",2);nt([F()],Ge.prototype,"dropTargetIdx",2);nt([F()],Ge.prototype,"dropEdge",2);nt([F()],Ge.prototype,"previewRows",2);nt([F()],Ge.prototype,"rendererOptions",2);nt([F()],Ge.prototype,"columnActions",2);Ge=nt([Ee("new-table-dialog")],Ge);function Q1(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function X1(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const s=Number(t);if(!Number.isFinite(s))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const s=new Date(String(t));if(Number.isNaN(s.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function J1(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((s,i)=>{const o=s.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${i+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((s,i)=>{const o=s.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${i+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${i+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const s=new Map;t.forEach((i,o)=>{const a=i.data[r.field];a==null||a===""||(s.has(a)?n.push(`Row ${o+1}: ${r.label} duplicates row ${s.get(a)+1} ("${String(a)}").`):s.set(a,o))})}return n}var Z1=Object.defineProperty,eC=Object.getOwnPropertyDescriptor,rt=(e,t,n,r)=>{for(var s=r>1?void 0:r?eC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Z1(t,n,s),s};const tC='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',nC=k`<span class="mi sm">extension</span>`,Ju="plugin:catalogUrls";function Us(){return new URL("/easydbaccess3/plugins/catalog.json",location.origin).toString()}const rC=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],up=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],sC=new Map(up),iC={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let We=class extends ke{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[Us()],this.activeCatalogUrl=Us(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(){const e=await ae(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(i=>[i.url,i]));const r=await e.store.settings.findOne(Ju),s=Array.isArray(r?.value)?r.value.filter(i=>typeof i=="string"):[];this.catalogUrls=s.length>0?s:[Us()],this.activeCatalogUrl=this.catalogUrls[0]??Us(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(s=>({...s,absUrl:new URL(s.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await ae()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const s=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const i=await fetch(s,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const o=await i.json(),a=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=a.map(u=>({...u,absUrl:new URL(u.url,s).toString()})),this.serverCatalogError=null}catch(i){this.serverCatalog=[],this.serverCatalogError=i.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ae()).store.settings.upsert({name:Ju,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ae()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await ae();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await ae(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await ae();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await ae(),r=ya(e),s=this.records.get(r);await n.store.plugins.upsert({...s??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:s?.lastFetched??0}),this.records=new Map(this.records.set(r,{...s,url:r,enabled:t,lastFetched:s?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ae()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ae();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const s=new Blob([r],{type:"text/javascript"}),i=URL.createObjectURL(s);try{const a=await import(i);await a.init?.(t.api),await a.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(i),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(a=>[a.url,a])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",s){const i=s?s[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return k`
      <button type="button" class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`} title=${i} aria-pressed=${t!==void 0} @click=${n}>
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of l1){const s=r.fixed?!0:this.records.get(ya(n))?.enabled!==!1,i=!r.fixed&&_t==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:s,status:s&&!i?"enabled":"disabled",fixed:!!r.fixed,...i?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),s=this.records.get(n.absUrl),i=r?["available","installed"]:["available"],o=e.get(n.id),a=s?.enabled!==!1,u=r&&_t!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...i]):new Set(i),enabled:a,...r?{status:a&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const s=this.records.get(n),i=s?.lastFetched?new Date(s.lastFetched).toLocaleString():"never",o=s?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:s?.lastError??`Last fetched: ${i}`,metaIsError:!!s?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&_t==="off"?"enabled":"disabled",..._t!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[u,d]of this.filterStates)(d==="on"?n:r).push(u);const s=[],i=[];for(const[u,d]of this.typeFilters)(d==="on"?s:i).push(u);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,a=e.filter(u=>!(n.length&&!n.some(d=>u.categories.has(d))||r.some(d=>u.categories.has(d))||s.length&&!(u.type&&s.includes(u.type))||u.type&&i.includes(u.type)||o&&u.status!==o));return t?a.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(d=>d?.toLowerCase().includes(t))):a}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return k`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}>
        <span class="row-icon">${e.icon?Gn(e.icon):nC}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?k`<span class="row-id">${e.id}</span>`:""}${e.type?k`<span class="row-type" title="Plugin type">${sC.get(e.type)??e.type}</span>`:""}${e.skipped?k`<span class="row-skipped" title="Safe mode kept this plugin from loading this session — your saved setting is unchanged">skipped</span>`:""}
          </div>
          ${e.meta?k`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?k`<a class="row-repo" href=${e.repo} target="_blank" rel="noopener noreferrer" title="View source on GitHub">${Gn(tC)}</a>`:k`<span></span>`}
        ${e.fixed?k`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?k`<label class="switch" title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}>
                <input type="checkbox" .checked=${e.enabled} @change=${s=>this.onRowToggle(e,s.target.checked)} />
                <span class="slider"></span>
              </label>`:k`<span></span>`}
        ${r?k`<button type="button" class="install" ?disabled=${e.installing} @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}>
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:n?k`<button type="button" class="uninstall" @click=${()=>this.removePlugin(e.url)}><span class="mi sm">delete</span> Uninstall</button>`:k`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return k`
      <dialog @cancel=${this.close} @keydown=${vt}>
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
            ${_t!=="off"?k`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${_t==="all-optional"?k`<code>?safemode</code> skipped every URL plugin and every optional built-in for this session.`:k`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The toggles below still show — and change — your saved settings, which safe mode never touches. Reload
                  without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${rC.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",iC)}
              </div>
              <div class="search">
                <input type="text" placeholder="Search plugins…" .value=${this.search} @input=${t=>this.search=t.target.value} />
              </div>
            </div>

            <div class="type-filters">
              <span class="filter-label">Type</span>
              ${up.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
    `}};We.styles=[xt,yt,_e`
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
    `];rt([F()],We.prototype,"urls",2);rt([F()],We.prototype,"records",2);rt([F()],We.prototype,"addUrl",2);rt([F()],We.prototype,"catalog",2);rt([F()],We.prototype,"catalogError",2);rt([F()],We.prototype,"serverCatalog",2);rt([F()],We.prototype,"serverCatalogError",2);rt([F()],We.prototype,"installing",2);rt([F()],We.prototype,"catalogUrls",2);rt([F()],We.prototype,"activeCatalogUrl",2);rt([F()],We.prototype,"search",2);rt([F()],We.prototype,"filterStates",2);rt([F()],We.prototype,"typeFilters",2);rt([F()],We.prototype,"statusFilter",2);We=rt([Ee("plugin-manager-dialog")],We);var oC=Object.defineProperty,aC=Object.getOwnPropertyDescriptor,Qt=(e,t,n,r)=>{for(var s=r>1?void 0:r?aC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&oC(t,n,s),s};const Rr="__general__";let lt=class extends ke{constructor(){super(...arguments),this.tabs=[],this.active=Rr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const s=r.names.map(i=>`“${i}”`).join(", ");this.secretError=`“${r.field.label}” references ${s}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e),this.dialogEl&&op("settings",this.dialogEl)}async open(){const e=await ae(),t=[...e.registries.settings];this.tabs=t.map(([i,o])=>({id:i,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},s={};for(const i of this.tabs)for(const o of i.fields){const a=`${i.id}:${o.key}`,u=await e.api.settings.placement(i.id,o.key);u==="user"?(r[a]=ti(a),s[a]="user"):u==="workspace"?(r[a]=(await e.store.settings.findOne(a))?.value,s[a]="workspace"):(r[a]=o.default,s[a]=o.scope??"workspace")}this.values=r,this.placements=s,this.secretsText=Fr(),this.active=Rr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&lt.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(Yn(this.secretsText)));return lt.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await ae()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,s=n?"user":"workspace";this.placements={...this.placements,[r]:s},await(await ae()).api.settings.set(e.id,t.key,this.values[r],s)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,md(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ae();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return k`<textarea .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)}></textarea>`;case"number":return k`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${s=>{const i=s.target.value;this.setValue(e,t,i===""?void 0:Number(i))}}
        />`;case"boolean":return k`<label class="scope"><input type="checkbox" .checked=${!!r} @change=${s=>this.setValue(e,t,s.target.checked)} /> enabled</label>`;case"date":return k`<input type="date" .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)} />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return k`<div class="radios">
          ${(t.options??[]).map(s=>k`<label><input type="radio" name=${n} .checked=${r===s} @change=${()=>this.setValue(e,t,s)} />${s}</label>`)}
        </div>`;case"selection":{const s=Array.isArray(r)?r:[];return k`<div class="checks">
          ${(t.options??[]).map(i=>k`<label
                ><input
                  type="checkbox"
                  .checked=${s.includes(i)}
                  @change=${o=>{const u=o.target.checked?[...s,i]:s.filter(d=>d!==i);this.setValue(e,t,u)}}
                />${i}</label
              >`)}
        </div>`}case"string":default:return k`<input type="text" .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)} />`}}renderSecretControl(e,t,n){const r=Object.keys(Yn(this.secretsText)),s=lt.rawSecret(n)||this.missingRefs(n).length>0;return k`<div class="secret-row">
      <input
        type="text"
        class=${s?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${i=>this.setValue(e,t,i.target.value)}
      />
      ${r.length>0?k`<select
            title="Insert a secret reference"
            @change=${i=>{const o=i.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),i.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(i=>k`<option value=${i}>${i}</option>`)}
          </select>`:ie}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),s=this.openHelp===n;return k`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?k`<button
              type="button"
              class="help-btn"
              aria-label=${`Help for ${t.label}`}
              aria-expanded=${s?"true":"false"}
              title=${t.help??"More about this setting"}
              @click=${()=>this.openHelp=s?"":n}
            >
              <span class="mi sm" aria-hidden="true">info</span>
            </button>`:ie}
        <label class="scope" title="Store on this device only (not synced)">
          <input type="checkbox" .checked=${this.placements[n]==="user"} @change=${i=>this.toggleScope(e,t,i.target.checked)} />
          user
        </label>
      </div>
      ${r&&s?k`<div class="help-panel">
            ${t.help?k`<p>${t.help}</p>`:ie} ${t.helpUrl?k`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer">${t.helpLinkLabel||lC(t.helpUrl)}</a>`:ie}
          </div>`:ie}
      ${this.renderControl(e,t)} ${t.description?k`<p class="desc">${t.description}</p>`:ie}
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
    `}renderPanel(){if(this.active===Rr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?k`
      <h3>${e.name}</h3>
      ${e.fields.length===0?k`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:ie}render(){return k`
      <dialog @cancel=${this.attemptClose} @keydown=${vt}>
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
          ${this.secretError?k`<div class="secret-error" role="alert">${this.secretError}</div>`:ie}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button type="button" class=${this.active===Rr?"active":""} @click=${()=>this.active=Rr}>General</button>
                ${this.tabs.map(e=>k`<button type="button" class=${this.active===e.id?"active":""} @click=${()=>this.active=e.id}>${e.name}</button>`)}
              </nav>
              <section class="panel">${this.renderPanel()}</section>
            </div>
          </div>
        </form>
      </dialog>
    `}};lt.styles=[xt,yt,_e`
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
    `];Qt([F()],lt.prototype,"tabs",2);Qt([F()],lt.prototype,"active",2);Qt([F()],lt.prototype,"values",2);Qt([F()],lt.prototype,"placements",2);Qt([F()],lt.prototype,"secretsText",2);Qt([F()],lt.prototype,"workspaceTitle",2);Qt([F()],lt.prototype,"secretError",2);Qt([F()],lt.prototype,"openHelp",2);lt=Qt([Ee("settings-dialog")],lt);function lC(e){try{return new URL(e).host}catch{return e}}const dp=5,Zu="palette:recent",hp="Recent";function cC(e,t,n=dp){return[t,...e.filter(r=>r!==t)].slice(0,n)}function uC(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,dp):[]}function dC(e,t){if(t.length===0)return e;const n=new Map(e.map(i=>[i.id,i])),r=[];for(const i of t){const o=n.get(i);o&&r.push({...o,group:hp})}if(r.length===0)return e;const s=new Set(r.map(i=>i.id));return[...r,...e.filter(i=>!s.has(i.id))]}var hC=Object.defineProperty,fC=Object.getOwnPropertyDescriptor,cr=(e,t,n,r)=>{for(var s=r>1?void 0:r?fC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&hC(t,n,s),s};const pC={[hp]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function ed(e){return pC[e]??3}function mC(e){return e?e.trimStart().startsWith("<svg")?k`<span class="cmd-svg">${Sa(e)}</span>`:k`<span class="mi sm">${e}</span>`:k`<span class="mi sm">chevron_right</span>`}let un=class extends ke{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await ae();this.api=e.api,this.recentIds=uC((await e.api.store.settings.findOne(Zu))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await ae(),t=e.api,n=[];for(const i of e.registries.commands)n.push({id:i.id,title:i.title,group:i.group??"Commands",...i.icon?{icon:i.icon}:{},haystack:[i.title,i.group,...i.keywords??[]].join(" ").toLowerCase(),run:()=>i.run(t)});for(const i of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${i.id}`,title:i.label,group:"Actions",...i.icon?{icon:i.icon}:{},haystack:`${i.label} ${i.tooltip??""}`.toLowerCase(),run:()=>i.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((i,o)=>i.name.localeCompare(o.name));for(const i of r)n.push({id:`goto:${i.id}`,title:`Go to: ${i.name}`,group:"Tables",icon:"table_chart",haystack:`${i.name} go to table`.toLowerCase(),run:()=>{bf(i.id)}});const s=await t.store.viewInstances.find({workspaceId:e.workspaceId});s.sort((i,o)=>i.name.localeCompare(o.name));for(const i of s)n.push({id:`goto-view:${i.id}`,title:`Go to view: ${i.name}`,group:"Views",icon:"view_quilt",haystack:`${i.name} go to view`.toLowerCase(),run:async()=>{await Rf(i.id)}});return dC(n,this.recentIds).map((i,o)=>({it:i,i:o})).sort((i,o)=>ed(i.it.group)-ed(o.it.group)||i.i-o.i).map(({it:i})=>i)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=cC(this.recentIds,e);try{await this.api?.store.settings.upsert({name:Zu,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return k`
      <dialog @keydown=${this.onKeydown} @click=${this.onDialogClick} @close=${()=>this.search=""}>
        <div class="search-row">
          <span class="mi">search</span>
          <input type="text" placeholder="Type a command…  (windows, go to, import, export)" .value=${this.search} @input=${this.onInput} />
        </div>
        <div class="list">
          ${e.length===0?k`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const s=n.group!==t?(t=n.group,n.group):null;return k`
                  ${s?k`<div class="group-head">${s}</div>`:""}
                  <div class=${`item${r===this.selected?" sel":""}`} @mousemove=${()=>this.selected=r} @click=${()=>this.execute(n)}>
                    ${mC(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};un.styles=[xt,_e`
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
    `];cr([F()],un.prototype,"search",2);cr([F()],un.prototype,"items",2);cr([F()],un.prototype,"selected",2);cr([Bt("dialog")],un.prototype,"dialogEl",2);cr([Bt("input")],un.prototype,"inputEl",2);un=cr([Ee("command-palette-dialog")],un);var gC=Object.defineProperty,bC=Object.getOwnPropertyDescriptor,Ui=(e,t,n,r)=>{for(var s=r>1?void 0:r?bC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&gC(t,n,s),s};let rr=class extends ke{constructor(){super(...arguments),this.label="",this.fraction=void 0,this.detail="",this.onProgress=e=>{const t=e.detail;this.label=t.label??"",this.fraction=t.fraction,this.detail=t.detail??""}}connectedCallback(){super.connectedCallback(),document.addEventListener(ba,this.onProgress)}disconnectedCallback(){document.removeEventListener(ba,this.onProgress),super.disconnectedCallback()}render(){if(!this.label)return ie;const e=this.fraction==null?null:Math.round(Math.min(1,Math.max(0,this.fraction))*100);return k`
      <div class="wrap" role="status" aria-live="polite">
        <span class="label">${this.label}</span>
        <span class="bar">
          <span class="fill ${e==null?"":"determinate"}" style=${e==null?"":`width:${e}%`}></span>
        </span>
        ${this.detail?k`<span class="detail">${this.detail}</span>`:ie}
        <span class="pct">${e==null?"":`${e}%`}</span>
      </div>
    `}};rr.styles=_e`
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
  `;Ui([F()],rr.prototype,"label",2);Ui([F()],rr.prototype,"fraction",2);Ui([F()],rr.prototype,"detail",2);rr=Ui([Ee("app-progress")],rr);var wC=Object.defineProperty,yC=Object.getOwnPropertyDescriptor,fp=(e,t,n,r)=>{for(var s=r>1?void 0:r?yC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&wC(t,n,s),s};let ci=class extends ke{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await yf(),await Yx()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?k``:k`<div class="empty">No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the page, or click <strong>+ New Table</strong> above.</div>`}};ci.styles=_e`
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
  `;fp([F()],ci.prototype,"tables",2);ci=fp([Ee("table-list")],ci);var vC=Object.defineProperty,$C=Object.getOwnPropertyDescriptor,Sl=(e,t,n,r)=>{for(var s=r>1?void 0:r?$C(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&vC(t,n,s),s};let Wr=class extends ke{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);t&&zi(t.name)}render(){return k`
      <select .value=${this.current} @change=${e=>this.switchWorkspace(e.target.value)}>
        ${this.workspaces.map(e=>k`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${np} title="New workspace">
        <span class="mi sm">add</span>
      </button>
      <button @click=${rp} title="Delete workspace">
        <span class="mi sm">delete</span>
      </button>
    `}};Wr.styles=[xt,_e`
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
    `];Sl([F()],Wr.prototype,"workspaces",2);Sl([F()],Wr.prototype,"current",2);Wr=Sl([Ee("workspace-selector")],Wr);var td=Object.freeze,pp=Object.defineProperty,xC=Object.getOwnPropertyDescriptor,It=(e,t,n,r)=>{for(var s=r>1?void 0:r?xC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&pp(t,n,s),s},kC=(e,t)=>td(pp(e,"raw",{value:td(e.slice())})),nd;function rd(e){return e?e.trimStart().startsWith("<svg")?k`<span class="icon-svg" aria-hidden="true">${Sa(e)}</span>`:k`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let ut=class extends ke{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{id(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{const t=e.relatedTarget;t&&(this.contains(t)||_C()?.contains(t))||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!id(e))return;e.preventDefault();const t=await ae(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(s){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:s})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),document.addEventListener("dragover",this.onDragOver),document.addEventListener("dragleave",this.onDragLeave),document.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragover",this.onDragOver),document.removeEventListener("dragleave",this.onDragLeave),document.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ae();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",CC(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return k` <button class="icon-btn" title=${e.tooltip??e.label} aria-label=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>${rd(e.icon)}</button> `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return k`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${rd(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return k(nd||(nd=kC([`
      <header>
        <strong
          >`,`
          <a class="version-link" href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md" target="_blank" rel="noopener" title="View the changelog on GitHub"
            ><span class="version">v0.0.309</span></a
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
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};ut.styles=[xt,_e`
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
    `];It([Bt("new-table-dialog")],ut.prototype,"dialog",2);It([Bt("csv-paste-dialog")],ut.prototype,"csvPasteDialog",2);It([Bt("plugin-manager-dialog")],ut.prototype,"pluginManagerDialog",2);It([Bt("settings-dialog")],ut.prototype,"settingsDialog",2);It([Bt("command-palette-dialog")],ut.prototype,"commandPaletteDialog",2);It([Bt("input.search")],ut.prototype,"searchInput",2);It([F()],ut.prototype,"footerButtons",2);It([F()],ut.prototype,"headerButtons",2);It([F()],ut.prototype,"searchQuery",2);It([F()],ut.prototype,"searchOpen",2);It([F()],ut.prototype,"workspaceTitle",2);ut=It([Ee("app-shell")],ut);const sd=document.title;function CC(e){const t=e.trim();document.title=t?`${t} — ${sd}`:sd}function _C(){return document.getElementById("easydb-panels")}function id(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ae(),ze(()=>Promise.resolve().then(()=>Ef),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{ie as A,_e as a,k as b,vt as c,yt as d,zC as g,ke as i,$t as m,F as r,Ee as t};
//# sourceMappingURL=index-lLq7-cIz.js.map
