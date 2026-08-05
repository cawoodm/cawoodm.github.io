(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const em="modulepreload",tm=function(e){return"/easydbaccess/"+e},uc={},Pe=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=o(n.map(d=>{if(d=tm(d),d in uc)return;uc[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const w=document.createElement("link");if(w.rel=p?"stylesheet":em,p||(w.as="script"),w.crossOrigin="",w.href=d,c&&w.setAttribute("nonce",c),document.head.appendChild(w),p)return new Promise((y,$)=>{w.addEventListener("load",y),w.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs=globalThis,xa=Hs.ShadowRoot&&(Hs.ShadyCSS===void 0||Hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ka=Symbol(),dc=new WeakMap;let ld=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==ka)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(xa&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=dc.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&dc.set(n,t))}return t}toString(){return this.cssText}};const nm=e=>new ld(typeof e=="string"?e:e+"",void 0,ka),Se=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new ld(n,e,ka)},rm=(e,t)=>{if(xa)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=Hs.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},hc=xa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return nm(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sm,defineProperty:im,getOwnPropertyDescriptor:om,getOwnPropertyNames:am,getOwnPropertySymbols:lm,getPrototypeOf:cm}=Object,fi=globalThis,fc=fi.trustedTypes,um=fc?fc.emptyScript:"",dm=fi.reactiveElementPolyfillSupport,Lr=(e,t)=>e,Zs={toAttribute(e,t){switch(t){case Boolean:e=e?um:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ca=(e,t)=>!sm(e,t),pc={attribute:!0,type:String,converter:Zs,reflect:!1,useDefault:!1,hasChanged:Ca};Symbol.metadata??=Symbol("metadata"),fi.litPropertyMetadata??=new WeakMap;let Hn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=pc){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&im(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:i}=om(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:s,set(o){const a=s?.call(this);i?.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pc}static _$Ei(){if(this.hasOwnProperty(Lr("elementProperties")))return;const t=cm(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Lr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Lr("properties"))){const n=this.properties,r=[...am(n),...lm(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(hc(s))}else t!==void 0&&n.push(hc(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rm(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:Zs).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Zs;this._$Em=s;const a=o.fromAttribute(n,i.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,n,r,s=!1,i){if(t!==void 0){const o=this.constructor;if(s===!1&&(i=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??Ca)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r){const{wrapped:o}=i,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Hn.elementStyles=[],Hn.shadowRootOptions={mode:"open"},Hn[Lr("elementProperties")]=new Map,Hn[Lr("finalized")]=new Map,dm?.({ReactiveElement:Hn}),(fi.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a=globalThis,mc=e=>e,ei=_a.trustedTypes,gc=ei?ei.createPolicy("lit-html",{createHTML:e=>e}):void 0,cd="$lit$",on=`lit$${Math.random().toFixed(9).slice(2)}$`,ud="?"+on,hm=`<${ud}>`,Tn=document,Nr=()=>Tn.createComment(""),zr=e=>e===null||typeof e!="object"&&typeof e!="function",Sa=Array.isArray,fm=e=>Sa(e)||typeof e?.[Symbol.iterator]=="function",Ao=`[ 	
\f\r]`,_r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bc=/-->/g,wc=/>/g,xn=RegExp(`>|${Ao}(?:([^\\s"'>=/]+)(${Ao}*=${Ao}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yc=/'/g,vc=/"/g,dd=/^(?:script|style|textarea|title)$/i,pm=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),k=pm(1),In=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),$c=new WeakMap,Sn=Tn.createTreeWalker(Tn,129);function hd(e,t){if(!Sa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return gc!==void 0?gc.createHTML(t):t}const mm=(e,t)=>{const n=e.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=_r;for(let a=0;a<n;a++){const c=e[a];let d,p,m=-1,w=0;for(;w<c.length&&(o.lastIndex=w,p=o.exec(c),p!==null);)w=o.lastIndex,o===_r?p[1]==="!--"?o=bc:p[1]!==void 0?o=wc:p[2]!==void 0?(dd.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=xn):p[3]!==void 0&&(o=xn):o===xn?p[0]===">"?(o=s??_r,m=-1):p[1]===void 0?m=-2:(m=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?xn:p[3]==='"'?vc:yc):o===vc||o===yc?o=xn:o===bc||o===wc?o=_r:(o=xn,s=void 0);const y=o===xn&&e[a+1].startsWith("/>")?" ":"";i+=o===_r?c+hm:m>=0?(r.push(d),c.slice(0,m)+cd+c.slice(m)+on+y):c+on+(m===-2?a:y)}return[hd(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Fr{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=t.length-1,c=this.parts,[d,p]=mm(t,n);if(this.el=Fr.createElement(d,r),Sn.currentNode=this.el.content,n===2||n===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=Sn.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const m of s.getAttributeNames())if(m.endsWith(cd)){const w=p[o++],y=s.getAttribute(m).split(on),$=/([.?@])?(.*)/.exec(w);c.push({type:1,index:i,name:$[2],strings:y,ctor:$[1]==="."?bm:$[1]==="?"?wm:$[1]==="@"?ym:pi}),s.removeAttribute(m)}else m.startsWith(on)&&(c.push({type:6,index:i}),s.removeAttribute(m));if(dd.test(s.tagName)){const m=s.textContent.split(on),w=m.length-1;if(w>0){s.textContent=ei?ei.emptyScript:"";for(let y=0;y<w;y++)s.append(m[y],Nr()),Sn.nextNode(),c.push({type:2,index:++i});s.append(m[w],Nr())}}}else if(s.nodeType===8)if(s.data===ud)c.push({type:2,index:i});else{let m=-1;for(;(m=s.data.indexOf(on,m+1))!==-1;)c.push({type:7,index:i}),m+=on.length-1}i++}}static createElement(t,n){const r=Tn.createElement("template");return r.innerHTML=t,r}}function Yn(e,t,n=e,r){if(t===In)return t;let s=r!==void 0?n._$Co?.[r]:n._$Cl;const i=zr(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=s:n._$Cl=s),s!==void 0&&(t=Yn(e,s._$AS(e,t.values),s,r)),t}class gm{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=(t?.creationScope??Tn).importNode(n,!0);Sn.currentNode=s;let i=Sn.nextNode(),o=0,a=0,c=r[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new Qr(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new vm(i,this,t)),this._$AV.push(d),c=r[++a]}o!==c?.index&&(i=Sn.nextNode(),o++)}return Sn.currentNode=Tn,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Qr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Yn(this,t,n),zr(t)?t===ie||t==null||t===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):t!==this._$AH&&t!==In&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fm(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ie&&zr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Tn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Fr.createElement(hd(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(n);else{const i=new gm(s,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(t){let n=$c.get(t.strings);return n===void 0&&$c.set(t.strings,n=new Fr(t)),n}k(t){Sa(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of t)s===n.length?n.push(r=new Qr(this.O(Nr()),this.O(Nr()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=mc(t).nextSibling;mc(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class pi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,i){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ie}_$AI(t,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=Yn(this,t,n,0),o=!zr(t)||t!==this._$AH&&t!==In,o&&(this._$AH=t);else{const a=t;let c,d;for(t=i[0],c=0;c<i.length-1;c++)d=Yn(this,a[r+c],n,c),d===In&&(d=this._$AH[c]),o||=!zr(d)||d!==this._$AH[c],d===ie?t=ie:t!==ie&&(t+=(d??"")+i[c+1]),this._$AH[c]=d}o&&!s&&this.j(t)}j(t){t===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bm extends pi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ie?void 0:t}}class wm extends pi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ie)}}class ym extends pi{constructor(t,n,r,s,i){super(t,n,r,s,i),this.type=5}_$AI(t,n=this){if((t=Yn(this,t,n,0)??ie)===In)return;const r=this._$AH,s=t===ie&&r!==ie||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==ie&&(r===ie||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class vm{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Yn(this,t)}}const $m=_a.litHtmlPolyfillSupport;$m?.(Fr,Qr),(_a.litHtmlVersions??=[]).push("3.3.3");const xm=(e,t,n)=>{const r=n?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const i=n?.renderBefore??null;r._$litPart$=s=new Qr(t.insertBefore(Nr(),i),i,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ea=globalThis;let ke=class extends Hn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xm(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return In}};ke._$litElement$=!0,ke.finalized=!0,Ea.litElementHydrateSupport?.({LitElement:ke});const km=Ea.litElementPolyfillSupport;km?.({LitElement:ke});(Ea.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cm={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:Ca},_m=(e=Cm,t,n)=>{const{kind:r,metadata:s}=n;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,c,e,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(r==="setter"){const{name:o}=n;return function(a){const c=this[o];t.call(this,a),this.requestUpdate(o,c,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function wt(e){return(t,n)=>typeof n=="object"?_m(e,t,n):((r,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e){return wt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sm=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bt(e,t){return(n,r,s)=>{const i=o=>o.renderRoot?.querySelector(e)??null;return Sm(n,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Em={CHILD:2},fd=e=>(...t)=>({_$litDirective$:e,values:t});class Tm{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ti extends Tm{constructor(t){if(super(t),this.it=ie,t.type!==Em.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ie||t==null)return this._t=void 0,this.it=t;if(t===In)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}ti.directiveName="unsafeHTML",ti.resultType=1;const Gn=fd(ti);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ko extends ti{}Ko.directiveName="unsafeSVG",Ko.resultType=2;const Ta=fd(Ko);var Im=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Am(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ks={exports:{}},Rm=Ks.exports,xc;function Om(){return xc||(xc=1,(function(e,t){(function(n,r){e.exports=r()})(Rm,function(){var n=function(l,u){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,f){h.__proto__=f}||function(h,f){for(var g in f)Object.prototype.hasOwnProperty.call(f,g)&&(h[g]=f[g])})(l,u)},r=function(){return(r=Object.assign||function(l){for(var u,h=1,f=arguments.length;h<f;h++)for(var g in u=arguments[h])Object.prototype.hasOwnProperty.call(u,g)&&(l[g]=u[g]);return l}).apply(this,arguments)};function s(l,u,h){for(var f,g=0,b=u.length;g<b;g++)!f&&g in u||((f=f||Array.prototype.slice.call(u,0,g))[g]=u[g]);return l.concat(f||Array.prototype.slice.call(u))}var i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Im,o=Object.keys,a=Array.isArray;function c(l,u){return typeof u!="object"||o(u).forEach(function(h){l[h]=u[h]}),l}typeof Promise>"u"||i.Promise||(i.Promise=Promise);var d=Object.getPrototypeOf,p={}.hasOwnProperty;function m(l,u){return p.call(l,u)}function w(l,u){typeof u=="function"&&(u=u(d(l))),(typeof Reflect>"u"?o:Reflect.ownKeys)(u).forEach(function(h){$(l,h,u[h])})}var y=Object.defineProperty;function $(l,u,h,f){y(l,u,c(h&&m(h,"get")&&typeof h.get=="function"?{get:h.get,set:h.set,configurable:!0}:{value:h,configurable:!0,writable:!0},f))}function x(l){return{from:function(u){return l.prototype=Object.create(u.prototype),$(l.prototype,"constructor",l),{extend:w.bind(null,l.prototype)}}}}var E=Object.getOwnPropertyDescriptor,S=[].slice;function D(l,u,h){return S.call(l,u,h)}function W(l,u){return u(l)}function z(l){if(!l)throw new Error("Assertion Failed")}function re(l){i.setImmediate?setImmediate(l):setTimeout(l,0)}function G(l,u){if(typeof u=="string"&&m(l,u))return l[u];if(!u)return l;if(typeof u!="string"){for(var h=[],f=0,g=u.length;f<g;++f){var b=G(l,u[f]);h.push(b)}return h}var v=u.indexOf(".");if(v!==-1){var C=l[u.substr(0,v)];return C==null?void 0:G(C,u.substr(v+1))}}function T(l,u,h){if(l&&u!==void 0&&!("isFrozen"in Object&&Object.isFrozen(l)))if(typeof u!="string"&&"length"in u){z(typeof h!="string"&&"length"in h);for(var f=0,g=u.length;f<g;++f)T(l,u[f],h[f])}else{var b,v,C=u.indexOf(".");C!==-1?(b=u.substr(0,C),(v=u.substr(C+1))===""?h===void 0?a(l)&&!isNaN(parseInt(b))?l.splice(b,1):delete l[b]:l[b]=h:T(C=!(C=l[b])||!m(l,b)?l[b]={}:C,v,h)):h===void 0?a(l)&&!isNaN(parseInt(u))?l.splice(u,1):delete l[u]:l[u]=h}}function q(l){var u,h={};for(u in l)m(l,u)&&(h[u]=l[u]);return h}var J=[].concat;function ue(l){return J.apply([],l)}var Ht="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ue([8,16,32,64].map(function(l){return["Int","Uint","Float"].map(function(u){return u+l+"Array"})}))).filter(function(l){return i[l]}),pe=new Set(Ht.map(function(l){return i[l]})),H=null;function Z(l){return H=new WeakMap,l=(function u(h){if(!h||typeof h!="object")return h;var f=H.get(h);if(f)return f;if(a(h)){f=[],H.set(h,f);for(var g=0,b=h.length;g<b;++g)f.push(u(h[g]))}else if(pe.has(h.constructor))f=h;else{var v,C=d(h);for(v in f=C===Object.prototype?{}:Object.create(C),H.set(h,f),h)m(h,v)&&(f[v]=u(h[v]))}return f})(l),H=null,l}var K={}.toString;function se(l){return K.call(l).slice(8,-1)}var ve=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Qe=typeof ve=="symbol"?function(l){var u;return l!=null&&(u=l[ve])&&u.apply(l)}:function(){return null};function Ne(l,u){return u=l.indexOf(u),0<=u&&l.splice(u,1),0<=u}var me={};function ze(l){var u,h,f,g;if(arguments.length===1){if(a(l))return l.slice();if(this===me&&typeof l=="string")return[l];if(g=Qe(l)){for(h=[];!(f=g.next()).done;)h.push(f.value);return h}if(l==null)return[l];if(typeof(u=l.length)!="number")return[l];for(h=new Array(u);u--;)h[u]=l[u];return h}for(u=arguments.length,h=new Array(u);u--;)h[u]=arguments[u];return h}var kt=typeof Symbol<"u"?function(l){return l[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},fr=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ct=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(fr),ye={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Re(l,u){this.name=l,this.message=u}function st(l,u){return l+". Errors: "+Object.keys(u).map(function(h){return u[h].toString()}).filter(function(h,f,g){return g.indexOf(h)===f}).join(`
`)}function et(l,u,h,f){this.failures=u,this.failedKeys=f,this.successCount=h,this.message=st(l,u)}function Mn(l,u){this.name="BulkError",this.failures=Object.keys(u).map(function(h){return u[h]}),this.failuresByPos=u,this.message=st(l,this.failures)}x(Re).from(Error).extend({toString:function(){return this.name+": "+this.message}}),x(et).from(Re),x(Mn).from(Re);var Vi=Ct.reduce(function(l,u){return l[u]=u+"Error",l},{}),kp=Re,de=Ct.reduce(function(l,u){var h=u+"Error";function f(g,b){this.name=h,g?typeof g=="string"?(this.message="".concat(g).concat(b?`
 `+b:""),this.inner=b||null):typeof g=="object"&&(this.message="".concat(g.name," ").concat(g.message),this.inner=g):(this.message=ye[u]||h,this.inner=null)}return x(f).from(kp),l[u]=f,l},{});de.Syntax=SyntaxError,de.Type=TypeError,de.Range=RangeError;var Al=fr.reduce(function(l,u){return l[u+"Error"]=de[u],l},{}),as=Ct.reduce(function(l,u){return["Syntax","Type","Range"].indexOf(u)===-1&&(l[u+"Error"]=de[u]),l},{});function Ce(){}function dr(l){return l}function Cp(l,u){return l==null||l===dr?u:function(h){return u(l(h))}}function hn(l,u){return function(){l.apply(this,arguments),u.apply(this,arguments)}}function _p(l,u){return l===Ce?u:function(){var h=l.apply(this,arguments);h!==void 0&&(arguments[0]=h);var f=this.onsuccess,g=this.onerror;this.onsuccess=null,this.onerror=null;var b=u.apply(this,arguments);return f&&(this.onsuccess=this.onsuccess?hn(f,this.onsuccess):f),g&&(this.onerror=this.onerror?hn(g,this.onerror):g),b!==void 0?b:h}}function Sp(l,u){return l===Ce?u:function(){l.apply(this,arguments);var h=this.onsuccess,f=this.onerror;this.onsuccess=this.onerror=null,u.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?hn(h,this.onsuccess):h),f&&(this.onerror=this.onerror?hn(f,this.onerror):f)}}function Ep(l,u){return l===Ce?u:function(h){var f=l.apply(this,arguments);c(h,f);var g=this.onsuccess,b=this.onerror;return this.onsuccess=null,this.onerror=null,h=u.apply(this,arguments),g&&(this.onsuccess=this.onsuccess?hn(g,this.onsuccess):g),b&&(this.onerror=this.onerror?hn(b,this.onerror):b),f===void 0?h===void 0?void 0:h:c(f,h)}}function Tp(l,u){return l===Ce?u:function(){return u.apply(this,arguments)!==!1&&l.apply(this,arguments)}}function Gi(l,u){return l===Ce?u:function(){var h=l.apply(this,arguments);if(h&&typeof h.then=="function"){for(var f=this,g=arguments.length,b=new Array(g);g--;)b[g]=arguments[g];return h.then(function(){return u.apply(f,b)})}return u.apply(this,arguments)}}as.ModifyError=et,as.DexieError=Re,as.BulkError=Mn;var Lt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Rl(l){Lt=l}var hr={},Ol=100,Ht=typeof Promise>"u"?[]:(function(){var l=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[l,d(l),l];var u=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[u,d(u),l]})(),fr=Ht[0],Ct=Ht[1],Ht=Ht[2],Ct=Ct&&Ct.then,fn=fr&&fr.constructor,Wi=!!Ht,pr=function(l,u){mr.push([l,u]),ls&&(queueMicrotask(Ap),ls=!1)},Yi=!0,ls=!0,pn=[],cs=[],Qi=dr,Jt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Ce,pgp:!1,env:{},finalize:Ce},ce=Jt,mr=[],mn=0,us=[];function oe(l){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var u=this._PSD=ce;if(typeof l!="function"){if(l!==hr)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Xi(this,this._value))}this._state=null,this._value=null,++u.ref,(function h(f,g){try{g(function(b){if(f._state===null){if(b===f)throw new TypeError("A promise cannot be resolved with itself.");var v=f._lib&&jn();b&&typeof b.then=="function"?h(f,function(C,I){b instanceof oe?b._then(C,I):b.then(C,I)}):(f._state=!0,f._value=b,Pl(f)),v&&Nn()}},Xi.bind(null,f))}catch(b){Xi(f,b)}})(this,l)}var Ji={get:function(){var l=ce,u=ps;function h(f,g){var b=this,v=!l.global&&(l!==ce||u!==ps),C=v&&!Zt(),I=new oe(function(R,L){Zi(b,new Dl(Ml(f,l,v,C),Ml(g,l,v,C),R,L,l))});return this._consoleTask&&(I._consoleTask=this._consoleTask),I}return h.prototype=hr,h},set:function(l){$(this,"then",l&&l.prototype===hr?Ji:{get:function(){return l},set:Ji.set})}};function Dl(l,u,h,f,g){this.onFulfilled=typeof l=="function"?l:null,this.onRejected=typeof u=="function"?u:null,this.resolve=h,this.reject=f,this.psd=g}function Xi(l,u){var h,f;cs.push(u),l._state===null&&(h=l._lib&&jn(),u=Qi(u),l._state=!1,l._value=u,f=l,pn.some(function(g){return g._value===f._value})||pn.push(f),Pl(l),h&&Nn())}function Pl(l){var u=l._listeners;l._listeners=[];for(var h=0,f=u.length;h<f;++h)Zi(l,u[h]);var g=l._PSD;--g.ref||g.finalize(),mn===0&&(++mn,pr(function(){--mn==0&&eo()},[]))}function Zi(l,u){if(l._state!==null){var h=l._state?u.onFulfilled:u.onRejected;if(h===null)return(l._state?u.resolve:u.reject)(l._value);++u.psd.ref,++mn,pr(Ip,[h,l,u])}else l._listeners.push(u)}function Ip(l,u,h){try{var f,g=u._value;!u._state&&cs.length&&(cs=[]),f=Lt&&u._consoleTask?u._consoleTask.run(function(){return l(g)}):l(g),u._state||cs.indexOf(g)!==-1||(function(b){for(var v=pn.length;v;)if(pn[--v]._value===b._value)return pn.splice(v,1)})(u),h.resolve(f)}catch(b){h.reject(b)}finally{--mn==0&&eo(),--h.psd.ref||h.psd.finalize()}}function Ap(){gn(Jt,function(){jn()&&Nn()})}function jn(){var l=Yi;return ls=Yi=!1,l}function Nn(){var l,u,h;do for(;0<mr.length;)for(l=mr,mr=[],h=l.length,u=0;u<h;++u){var f=l[u];f[0].apply(null,f[1])}while(0<mr.length);ls=Yi=!0}function eo(){var l=pn;pn=[],l.forEach(function(f){f._PSD.onunhandled.call(null,f._value,f)});for(var u=us.slice(0),h=u.length;h;)u[--h]()}function ds(l){return new oe(hr,!1,l)}function Oe(l,u){var h=ce;return function(){var f=jn(),g=ce;try{return en(h,!0),l.apply(this,arguments)}catch(b){u&&u(b)}finally{en(g,!1),f&&Nn()}}}w(oe.prototype,{then:Ji,_then:function(l,u){Zi(this,new Dl(null,null,l,u,ce))},catch:function(l){if(arguments.length===1)return this.then(null,l);var u=l,h=arguments[1];return typeof u=="function"?this.then(null,function(f){return(f instanceof u?h:ds)(f)}):this.then(null,function(f){return(f&&f.name===u?h:ds)(f)})},finally:function(l){return this.then(function(u){return oe.resolve(l()).then(function(){return u})},function(u){return oe.resolve(l()).then(function(){return ds(u)})})},timeout:function(l,u){var h=this;return l<1/0?new oe(function(f,g){var b=setTimeout(function(){return g(new de.Timeout(u))},l);h.then(f,g).finally(clearTimeout.bind(null,b))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&$(oe.prototype,Symbol.toStringTag,"Dexie.Promise"),Jt.env=Ll(),w(oe,{all:function(){var l=ze.apply(null,arguments).map(ms);return new oe(function(u,h){l.length===0&&u([]);var f=l.length;l.forEach(function(g,b){return oe.resolve(g).then(function(v){l[b]=v,--f||u(l)},h)})})},resolve:function(l){return l instanceof oe?l:l&&typeof l.then=="function"?new oe(function(u,h){l.then(u,h)}):new oe(hr,!0,l)},reject:ds,race:function(){var l=ze.apply(null,arguments).map(ms);return new oe(function(u,h){l.map(function(f){return oe.resolve(f).then(u,h)})})},PSD:{get:function(){return ce},set:function(l){return ce=l}},totalEchoes:{get:function(){return ps}},newPSD:Xt,usePSD:gn,scheduler:{get:function(){return pr},set:function(l){pr=l}},rejectionMapper:{get:function(){return Qi},set:function(l){Qi=l}},follow:function(l,u){return new oe(function(h,f){return Xt(function(g,b){var v=ce;v.unhandleds=[],v.onunhandled=b,v.finalize=hn(function(){var C,I=this;C=function(){I.unhandleds.length===0?g():b(I.unhandleds[0])},us.push(function R(){C(),us.splice(us.indexOf(R),1)}),++mn,pr(function(){--mn==0&&eo()},[])},v.finalize),l()},u,h,f)})}}),fn&&(fn.allSettled&&$(oe,"allSettled",function(){var l=ze.apply(null,arguments).map(ms);return new oe(function(u){l.length===0&&u([]);var h=l.length,f=new Array(h);l.forEach(function(g,b){return oe.resolve(g).then(function(v){return f[b]={status:"fulfilled",value:v}},function(v){return f[b]={status:"rejected",reason:v}}).then(function(){return--h||u(f)})})})}),fn.any&&typeof AggregateError<"u"&&$(oe,"any",function(){var l=ze.apply(null,arguments).map(ms);return new oe(function(u,h){l.length===0&&h(new AggregateError([]));var f=l.length,g=new Array(f);l.forEach(function(b,v){return oe.resolve(b).then(function(C){return u(C)},function(C){g[v]=C,--f||h(new AggregateError(g))})})})}),fn.withResolvers&&(oe.withResolvers=fn.withResolvers));var Ue={awaits:0,echoes:0,id:0},Rp=0,hs=[],fs=0,ps=0,Op=0;function Xt(l,u,h,f){var g=ce,b=Object.create(g);return b.parent=g,b.ref=0,b.global=!1,b.id=++Op,Jt.env,b.env=Wi?{Promise:oe,PromiseProp:{value:oe,configurable:!0,writable:!0},all:oe.all,race:oe.race,allSettled:oe.allSettled,any:oe.any,resolve:oe.resolve,reject:oe.reject}:{},u&&c(b,u),++g.ref,b.finalize=function(){--this.parent.ref||this.parent.finalize()},f=gn(b,l,h,f),b.ref===0&&b.finalize(),f}function zn(){return Ue.id||(Ue.id=++Rp),++Ue.awaits,Ue.echoes+=Ol,Ue.id}function Zt(){return!!Ue.awaits&&(--Ue.awaits==0&&(Ue.id=0),Ue.echoes=Ue.awaits*Ol,!0)}function ms(l){return Ue.echoes&&l&&l.constructor===fn?(zn(),l.then(function(u){return Zt(),u},function(u){return Zt(),Me(u)})):l}function Dp(){var l=hs[hs.length-1];hs.pop(),en(l,!1)}function en(l,u){var h,f=ce;(u?!Ue.echoes||fs++&&l===ce:!fs||--fs&&l===ce)||queueMicrotask(u?function(g){++ps,Ue.echoes&&--Ue.echoes!=0||(Ue.echoes=Ue.awaits=Ue.id=0),hs.push(ce),en(g,!0)}.bind(null,l):Dp),l!==ce&&(ce=l,f===Jt&&(Jt.env=Ll()),Wi&&(h=Jt.env.Promise,u=l.env,(f.global||l.global)&&(Object.defineProperty(i,"Promise",u.PromiseProp),h.all=u.all,h.race=u.race,h.resolve=u.resolve,h.reject=u.reject,u.allSettled&&(h.allSettled=u.allSettled),u.any&&(h.any=u.any))))}function Ll(){var l=i.Promise;return Wi?{Promise:l,PromiseProp:Object.getOwnPropertyDescriptor(i,"Promise"),all:l.all,race:l.race,allSettled:l.allSettled,any:l.any,resolve:l.resolve,reject:l.reject}:{}}function gn(l,u,h,f,g){var b=ce;try{return en(l,!0),u(h,f,g)}finally{en(b,!1)}}function Ml(l,u,h,f){return typeof l!="function"?l:function(){var g=ce;h&&zn(),en(u,!0);try{return l.apply(this,arguments)}finally{en(g,!1),f&&queueMicrotask(Zt)}}}function to(l){Promise===fn&&Ue.echoes===0?fs===0?l():enqueueNativeMicroTask(l):setTimeout(l,0)}(""+Ct).indexOf("[native code]")===-1&&(zn=Zt=Ce);var Me=oe.reject,bn="￿",qt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",jl="String expected.",Fn=[],gs="__dbnames",no="readonly",ro="readwrite";function wn(l,u){return l?u?function(){return l.apply(this,arguments)&&u.apply(this,arguments)}:l:u}var Nl={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function bs(l){return typeof l!="string"||/\./.test(l)?function(u){return u}:function(u){return u[l]===void 0&&l in u&&delete(u=Z(u))[l],u}}function zl(){throw de.Type()}function $e(l,u){try{var h=Fl(l),f=Fl(u);if(h!==f)return h==="Array"?1:f==="Array"?-1:h==="binary"?1:f==="binary"?-1:h==="string"?1:f==="string"?-1:h==="Date"?1:f!=="Date"?NaN:-1;switch(h){case"number":case"Date":case"string":return u<l?1:l<u?-1:0;case"binary":return(function(g,b){for(var v=g.length,C=b.length,I=v<C?v:C,R=0;R<I;++R)if(g[R]!==b[R])return g[R]<b[R]?-1:1;return v===C?0:v<C?-1:1})(Ul(l),Ul(u));case"Array":return(function(g,b){for(var v=g.length,C=b.length,I=v<C?v:C,R=0;R<I;++R){var L=$e(g[R],b[R]);if(L!==0)return L}return v===C?0:v<C?-1:1})(l,u)}}catch{}return NaN}function Fl(l){var u=typeof l;return u!="object"?u:ArrayBuffer.isView(l)?"binary":(l=se(l),l==="ArrayBuffer"?"binary":l)}function Ul(l){return l instanceof Uint8Array?l:ArrayBuffer.isView(l)?new Uint8Array(l.buffer,l.byteOffset,l.byteLength):new Uint8Array(l)}var Bl=(Te.prototype._trans=function(l,u,h){var f=this._tx||ce.trans,g=this.name,b=Lt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(l==="readonly"?"read":"write"," ").concat(this.name));function v(R,L,_){if(!_.schema[g])throw new de.NotFound("Table "+g+" not part of transaction");return u(_.idbtrans,_)}var C=jn();try{var I=f&&f.db._novip===this.db._novip?f===ce.trans?f._promise(l,v,h):Xt(function(){return f._promise(l,v,h)},{trans:f,transless:ce.transless||ce}):(function R(L,_,j,A){if(L.idbdb&&(L._state.openComplete||ce.letThrough||L._vip)){var P=L._createTransaction(_,j,L._dbSchema);try{P.create(),L._state.PR1398_maxLoop=3}catch(M){return M.name===Vi.InvalidState&&L.isOpen()&&0<--L._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),L.close({disableAutoOpen:!1}),L.open().then(function(){return R(L,_,j,A)})):Me(M)}return P._promise(_,function(M,O){return Xt(function(){return ce.trans=P,A(M,O,P)})}).then(function(M){if(_==="readwrite")try{P.idbtrans.commit()}catch{}return _==="readonly"?M:P._completion.then(function(){return M})})}if(L._state.openComplete)return Me(new de.DatabaseClosed(L._state.dbOpenError));if(!L._state.isBeingOpened){if(!L._state.autoOpen)return Me(new de.DatabaseClosed);L.open().catch(Ce)}return L._state.dbReadyPromise.then(function(){return R(L,_,j,A)})})(this.db,l,[this.name],v);return b&&(I._consoleTask=b,I=I.catch(function(R){return console.trace(R),Me(R)})),I}finally{C&&Nn()}},Te.prototype.get=function(l,u){var h=this;return l&&l.constructor===Object?this.where(l).first(u):l==null?Me(new de.Type("Invalid argument to Table.get()")):this._trans("readonly",function(f){return h.core.get({trans:f,key:l}).then(function(g){return h.hook.reading.fire(g)})}).then(u)},Te.prototype.where=function(l){if(typeof l=="string")return new this.db.WhereClause(this,l);if(a(l))return new this.db.WhereClause(this,"[".concat(l.join("+"),"]"));var u=o(l);if(u.length===1)return this.where(u[0]).equals(l[u[0]]);var h=this.schema.indexes.concat(this.schema.primKey).filter(function(C){if(C.compound&&u.every(function(R){return 0<=C.keyPath.indexOf(R)})){for(var I=0;I<u.length;++I)if(u.indexOf(C.keyPath[I])===-1)return!1;return!0}return!1}).sort(function(C,I){return C.keyPath.length-I.keyPath.length})[0];if(h&&this.db._maxKey!==bn){var b=h.keyPath.slice(0,u.length);return this.where(b).equals(b.map(function(I){return l[I]}))}!h&&Lt&&console.warn("The query ".concat(JSON.stringify(l)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(u.join("+"),"]"));var f=this.schema.idxByName;function g(C,I){return $e(C,I)===0}var v=u.reduce(function(_,I){var R=_[0],L=_[1],_=f[I],j=l[I];return[R||_,R||!_?wn(L,_&&_.multi?function(A){return A=G(A,I),a(A)&&A.some(function(P){return g(j,P)})}:function(A){return g(j,G(A,I))}):L]},[null,null]),b=v[0],v=v[1];return b?this.where(b.name).equals(l[b.keyPath]).filter(v):h?this.filter(v):this.where(u).equals("")},Te.prototype.filter=function(l){return this.toCollection().and(l)},Te.prototype.count=function(l){return this.toCollection().count(l)},Te.prototype.offset=function(l){return this.toCollection().offset(l)},Te.prototype.limit=function(l){return this.toCollection().limit(l)},Te.prototype.each=function(l){return this.toCollection().each(l)},Te.prototype.toArray=function(l){return this.toCollection().toArray(l)},Te.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Te.prototype.orderBy=function(l){return new this.db.Collection(new this.db.WhereClause(this,a(l)?"[".concat(l.join("+"),"]"):l))},Te.prototype.reverse=function(){return this.toCollection().reverse()},Te.prototype.mapToClass=function(l){var u,h=this.db,f=this.name;function g(){return u!==null&&u.apply(this,arguments)||this}(this.schema.mappedClass=l).prototype instanceof zl&&((function(I,R){if(typeof R!="function"&&R!==null)throw new TypeError("Class extends value "+String(R)+" is not a constructor or null");function L(){this.constructor=I}n(I,R),I.prototype=R===null?Object.create(R):(L.prototype=R.prototype,new L)})(g,u=l),Object.defineProperty(g.prototype,"db",{get:function(){return h},enumerable:!1,configurable:!0}),g.prototype.table=function(){return f},l=g);for(var b=new Set,v=l.prototype;v;v=d(v))Object.getOwnPropertyNames(v).forEach(function(I){return b.add(I)});function C(I){if(!I)return I;var R,L=Object.create(l.prototype);for(R in I)if(!b.has(R))try{L[R]=I[R]}catch{}return L}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=C,this.hook("reading",C),l},Te.prototype.defineClass=function(){return this.mapToClass(function(l){c(this,l)})},Te.prototype.add=function(l,u){var h=this,f=this.schema.primKey,g=f.auto,b=f.keyPath,v=l;return b&&g&&(v=bs(b)(l)),this._trans("readwrite",function(C){return h.core.mutate({trans:C,type:"add",keys:u!=null?[u]:null,values:[v]})}).then(function(C){return C.numFailures?oe.reject(C.failures[0]):C.lastResult}).then(function(C){if(b)try{T(l,b,C)}catch{}return C})},Te.prototype.update=function(l,u){return typeof l!="object"||a(l)?this.where(":id").equals(l).modify(u):(l=G(l,this.schema.primKey.keyPath),l===void 0?Me(new de.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(l).modify(u))},Te.prototype.put=function(l,u){var h=this,f=this.schema.primKey,g=f.auto,b=f.keyPath,v=l;return b&&g&&(v=bs(b)(l)),this._trans("readwrite",function(C){return h.core.mutate({trans:C,type:"put",values:[v],keys:u!=null?[u]:null})}).then(function(C){return C.numFailures?oe.reject(C.failures[0]):C.lastResult}).then(function(C){if(b)try{T(l,b,C)}catch{}return C})},Te.prototype.delete=function(l){var u=this;return this._trans("readwrite",function(h){return u.core.mutate({trans:h,type:"delete",keys:[l]})}).then(function(h){return h.numFailures?oe.reject(h.failures[0]):void 0})},Te.prototype.clear=function(){var l=this;return this._trans("readwrite",function(u){return l.core.mutate({trans:u,type:"deleteRange",range:Nl})}).then(function(u){return u.numFailures?oe.reject(u.failures[0]):void 0})},Te.prototype.bulkGet=function(l){var u=this;return this._trans("readonly",function(h){return u.core.getMany({keys:l,trans:h}).then(function(f){return f.map(function(g){return u.hook.reading.fire(g)})})})},Te.prototype.bulkAdd=function(l,u,h){var f=this,g=Array.isArray(u)?u:void 0,b=(h=h||(g?void 0:u))?h.allKeys:void 0;return this._trans("readwrite",function(v){var R=f.schema.primKey,C=R.auto,R=R.keyPath;if(R&&g)throw new de.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(g&&g.length!==l.length)throw new de.InvalidArgument("Arguments objects and keys must have the same length");var I=l.length,R=R&&C?l.map(bs(R)):l;return f.core.mutate({trans:v,type:"add",keys:g,values:R,wantResults:b}).then(function(P){var _=P.numFailures,j=P.results,A=P.lastResult,P=P.failures;if(_===0)return b?j:A;throw new Mn("".concat(f.name,".bulkAdd(): ").concat(_," of ").concat(I," operations failed"),P)})})},Te.prototype.bulkPut=function(l,u,h){var f=this,g=Array.isArray(u)?u:void 0,b=(h=h||(g?void 0:u))?h.allKeys:void 0;return this._trans("readwrite",function(v){var R=f.schema.primKey,C=R.auto,R=R.keyPath;if(R&&g)throw new de.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(g&&g.length!==l.length)throw new de.InvalidArgument("Arguments objects and keys must have the same length");var I=l.length,R=R&&C?l.map(bs(R)):l;return f.core.mutate({trans:v,type:"put",keys:g,values:R,wantResults:b}).then(function(P){var _=P.numFailures,j=P.results,A=P.lastResult,P=P.failures;if(_===0)return b?j:A;throw new Mn("".concat(f.name,".bulkPut(): ").concat(_," of ").concat(I," operations failed"),P)})})},Te.prototype.bulkUpdate=function(l){var u=this,h=this.core,f=l.map(function(v){return v.key}),g=l.map(function(v){return v.changes}),b=[];return this._trans("readwrite",function(v){return h.getMany({trans:v,keys:f,cache:"clone"}).then(function(C){var I=[],R=[];l.forEach(function(_,j){var A=_.key,P=_.changes,M=C[j];if(M){for(var O=0,N=Object.keys(P);O<N.length;O++){var U=N[O],B=P[U];if(U===u.schema.primKey.keyPath){if($e(B,A)!==0)throw new de.Constraint("Cannot update primary key in bulkUpdate()")}else T(M,U,B)}b.push(j),I.push(A),R.push(M)}});var L=I.length;return h.mutate({trans:v,type:"put",keys:I,values:R,updates:{keys:f,changeSpecs:g}}).then(function(_){var j=_.numFailures,A=_.failures;if(j===0)return L;for(var P=0,M=Object.keys(A);P<M.length;P++){var O,N=M[P],U=b[Number(N)];U!=null&&(O=A[N],delete A[N],A[U]=O)}throw new Mn("".concat(u.name,".bulkUpdate(): ").concat(j," of ").concat(L," operations failed"),A)})})})},Te.prototype.bulkDelete=function(l){var u=this,h=l.length;return this._trans("readwrite",function(f){return u.core.mutate({trans:f,type:"delete",keys:l})}).then(function(v){var g=v.numFailures,b=v.lastResult,v=v.failures;if(g===0)return b;throw new Mn("".concat(u.name,".bulkDelete(): ").concat(g," of ").concat(h," operations failed"),v)})},Te);function Te(){}function gr(l){function u(v,C){if(C){for(var I=arguments.length,R=new Array(I-1);--I;)R[I-1]=arguments[I];return h[v].subscribe.apply(null,R),l}if(typeof v=="string")return h[v]}var h={};u.addEventType=b;for(var f=1,g=arguments.length;f<g;++f)b(arguments[f]);return u;function b(v,C,I){if(typeof v!="object"){var R;C=C||Tp;var L={subscribers:[],fire:I=I||Ce,subscribe:function(_){L.subscribers.indexOf(_)===-1&&(L.subscribers.push(_),L.fire=C(L.fire,_))},unsubscribe:function(_){L.subscribers=L.subscribers.filter(function(j){return j!==_}),L.fire=L.subscribers.reduce(C,I)}};return h[v]=u[v]=L}o(R=v).forEach(function(_){var j=R[_];if(a(j))b(_,R[_][0],R[_][1]);else{if(j!=="asap")throw new de.InvalidArgument("Invalid event config");var A=b(_,dr,function(){for(var P=arguments.length,M=new Array(P);P--;)M[P]=arguments[P];A.subscribers.forEach(function(O){re(function(){O.apply(null,M)})})})}})}}function br(l,u){return x(u).from({prototype:l}),u}function Un(l,u){return!(l.filter||l.algorithm||l.or)&&(u?l.justLimit:!l.replayFilter)}function so(l,u){l.filter=wn(l.filter,u)}function io(l,u,h){var f=l.replayFilter;l.replayFilter=f?function(){return wn(f(),u())}:u,l.justLimit=h&&!f}function ws(l,u){if(l.isPrimKey)return u.primaryKey;var h=u.getIndexByKeyPath(l.index);if(!h)throw new de.Schema("KeyPath "+l.index+" on object store "+u.name+" is not indexed");return h}function ql(l,u,h){var f=ws(l,u.schema);return u.openCursor({trans:h,values:!l.keysOnly,reverse:l.dir==="prev",unique:!!l.unique,query:{index:f,range:l.range}})}function ys(l,u,h,f){var g=l.replayFilter?wn(l.filter,l.replayFilter()):l.filter;if(l.or){var b={},v=function(C,I,R){var L,_;g&&!g(I,R,function(j){return I.stop(j)},function(j){return I.fail(j)})||((_=""+(L=I.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(L)),m(b,_)||(b[_]=!0,u(C,I,R)))};return Promise.all([l.or._iterate(v,h),Hl(ql(l,f,h),l.algorithm,v,!l.keysOnly&&l.valueMapper)])}return Hl(ql(l,f,h),wn(l.algorithm,g),u,!l.keysOnly&&l.valueMapper)}function Hl(l,u,h,f){var g=Oe(f?function(b,v,C){return h(f(b),v,C)}:h);return l.then(function(b){if(b)return b.start(function(){var v=function(){return b.continue()};u&&!u(b,function(C){return v=C},function(C){b.stop(C),v=Ce},function(C){b.fail(C),v=Ce})||g(b.value,b,function(C){return v=C}),v()})})}var Ht=Symbol(),wr=(Kl.prototype.execute=function(l){if(this.add!==void 0){var u=this.add;if(a(u))return s(s([],a(l)?l:[],!0),u).sort();if(typeof u=="number")return(Number(l)||0)+u;if(typeof u=="bigint")try{return BigInt(l)+u}catch{return BigInt(0)+u}throw new TypeError("Invalid term ".concat(u))}if(this.remove!==void 0){var h=this.remove;if(a(h))return a(l)?l.filter(function(f){return!h.includes(f)}).sort():[];if(typeof h=="number")return Number(l)-h;if(typeof h=="bigint")try{return BigInt(l)-h}catch{return BigInt(0)-h}throw new TypeError("Invalid subtrahend ".concat(h))}return u=(u=this.replacePrefix)===null||u===void 0?void 0:u[0],u&&typeof l=="string"&&l.startsWith(u)?this.replacePrefix[1]+l.substring(u.length):l},Kl);function Kl(l){Object.assign(this,l)}var Pp=(xe.prototype._read=function(l,u){var h=this._ctx;return h.error?h.table._trans(null,Me.bind(null,h.error)):h.table._trans("readonly",l).then(u)},xe.prototype._write=function(l){var u=this._ctx;return u.error?u.table._trans(null,Me.bind(null,u.error)):u.table._trans("readwrite",l,"locked")},xe.prototype._addAlgorithm=function(l){var u=this._ctx;u.algorithm=wn(u.algorithm,l)},xe.prototype._iterate=function(l,u){return ys(this._ctx,l,u,this._ctx.table.core)},xe.prototype.clone=function(l){var u=Object.create(this.constructor.prototype),h=Object.create(this._ctx);return l&&c(h,l),u._ctx=h,u},xe.prototype.raw=function(){return this._ctx.valueMapper=null,this},xe.prototype.each=function(l){var u=this._ctx;return this._read(function(h){return ys(u,l,h,u.table.core)})},xe.prototype.count=function(l){var u=this;return this._read(function(h){var f=u._ctx,g=f.table.core;if(Un(f,!0))return g.count({trans:h,query:{index:ws(f,g.schema),range:f.range}}).then(function(v){return Math.min(v,f.limit)});var b=0;return ys(f,function(){return++b,!1},h,g).then(function(){return b})}).then(l)},xe.prototype.sortBy=function(l,u){var h=l.split(".").reverse(),f=h[0],g=h.length-1;function b(I,R){return R?b(I[h[R]],R-1):I[f]}var v=this._ctx.dir==="next"?1:-1;function C(I,R){return $e(b(I,g),b(R,g))*v}return this.toArray(function(I){return I.sort(C)}).then(u)},xe.prototype.toArray=function(l){var u=this;return this._read(function(h){var f=u._ctx;if(f.dir==="next"&&Un(f,!0)&&0<f.limit){var g=f.valueMapper,b=ws(f,f.table.core.schema);return f.table.core.query({trans:h,limit:f.limit,values:!0,query:{index:b,range:f.range}}).then(function(C){return C=C.result,g?C.map(g):C})}var v=[];return ys(f,function(C){return v.push(C)},h,f.table.core).then(function(){return v})},l)},xe.prototype.offset=function(l){var u=this._ctx;return l<=0||(u.offset+=l,Un(u)?io(u,function(){var h=l;return function(f,g){return h===0||(h===1?--h:g(function(){f.advance(h),h=0}),!1)}}):io(u,function(){var h=l;return function(){return--h<0}})),this},xe.prototype.limit=function(l){return this._ctx.limit=Math.min(this._ctx.limit,l),io(this._ctx,function(){var u=l;return function(h,f,g){return--u<=0&&f(g),0<=u}},!0),this},xe.prototype.until=function(l,u){return so(this._ctx,function(h,f,g){return!l(h.value)||(f(g),u)}),this},xe.prototype.first=function(l){return this.limit(1).toArray(function(u){return u[0]}).then(l)},xe.prototype.last=function(l){return this.reverse().first(l)},xe.prototype.filter=function(l){var u;return so(this._ctx,function(h){return l(h.value)}),(u=this._ctx).isMatch=wn(u.isMatch,l),this},xe.prototype.and=function(l){return this.filter(l)},xe.prototype.or=function(l){return new this.db.WhereClause(this._ctx.table,l,this)},xe.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},xe.prototype.desc=function(){return this.reverse()},xe.prototype.eachKey=function(l){var u=this._ctx;return u.keysOnly=!u.isMatch,this.each(function(h,f){l(f.key,f)})},xe.prototype.eachUniqueKey=function(l){return this._ctx.unique="unique",this.eachKey(l)},xe.prototype.eachPrimaryKey=function(l){var u=this._ctx;return u.keysOnly=!u.isMatch,this.each(function(h,f){l(f.primaryKey,f)})},xe.prototype.keys=function(l){var u=this._ctx;u.keysOnly=!u.isMatch;var h=[];return this.each(function(f,g){h.push(g.key)}).then(function(){return h}).then(l)},xe.prototype.primaryKeys=function(l){var u=this._ctx;if(u.dir==="next"&&Un(u,!0)&&0<u.limit)return this._read(function(f){var g=ws(u,u.table.core.schema);return u.table.core.query({trans:f,values:!1,limit:u.limit,query:{index:g,range:u.range}})}).then(function(f){return f.result}).then(l);u.keysOnly=!u.isMatch;var h=[];return this.each(function(f,g){h.push(g.primaryKey)}).then(function(){return h}).then(l)},xe.prototype.uniqueKeys=function(l){return this._ctx.unique="unique",this.keys(l)},xe.prototype.firstKey=function(l){return this.limit(1).keys(function(u){return u[0]}).then(l)},xe.prototype.lastKey=function(l){return this.reverse().firstKey(l)},xe.prototype.distinct=function(){var l=this._ctx,l=l.index&&l.table.schema.idxByName[l.index];if(!l||!l.multi)return this;var u={};return so(this._ctx,function(g){var f=g.primaryKey.toString(),g=m(u,f);return u[f]=!0,!g}),this},xe.prototype.modify=function(l){var u=this,h=this._ctx;return this._write(function(f){var g,b,v;v=typeof l=="function"?l:(g=o(l),b=g.length,function(O){for(var N=!1,U=0;U<b;++U){var B=g[U],V=l[B],Y=G(O,B);V instanceof wr?(T(O,B,V.execute(Y)),N=!0):Y!==V&&(T(O,B,V),N=!0)}return N});var C=h.table.core,_=C.schema.primaryKey,I=_.outbound,R=_.extractKey,L=200,_=u.db._options.modifyChunkSize;_&&(L=typeof _=="object"?_[C.name]||_["*"]||200:_);function j(O,B){var U=B.failures,B=B.numFailures;P+=O-B;for(var V=0,Y=o(U);V<Y.length;V++){var te=Y[V];A.push(U[te])}}var A=[],P=0,M=[];return u.clone().primaryKeys().then(function(O){function N(B){var V=Math.min(L,O.length-B);return C.getMany({trans:f,keys:O.slice(B,B+V),cache:"immutable"}).then(function(Y){for(var te=[],Q=[],X=I?[]:null,ne=[],ee=0;ee<V;++ee){var le=Y[ee],fe={value:Z(le),primKey:O[B+ee]};v.call(fe,fe.value,fe)!==!1&&(fe.value==null?ne.push(O[B+ee]):I||$e(R(le),R(fe.value))===0?(Q.push(fe.value),I&&X.push(O[B+ee])):(ne.push(O[B+ee]),te.push(fe.value)))}return Promise.resolve(0<te.length&&C.mutate({trans:f,type:"add",values:te}).then(function(ge){for(var be in ge.failures)ne.splice(parseInt(be),1);j(te.length,ge)})).then(function(){return(0<Q.length||U&&typeof l=="object")&&C.mutate({trans:f,type:"put",keys:X,values:Q,criteria:U,changeSpec:typeof l!="function"&&l,isAdditionalChunk:0<B}).then(function(ge){return j(Q.length,ge)})}).then(function(){return(0<ne.length||U&&l===oo)&&C.mutate({trans:f,type:"delete",keys:ne,criteria:U,isAdditionalChunk:0<B}).then(function(ge){return j(ne.length,ge)})}).then(function(){return O.length>B+V&&N(B+L)})})}var U=Un(h)&&h.limit===1/0&&(typeof l!="function"||l===oo)&&{index:h.index,range:h.range};return N(0).then(function(){if(0<A.length)throw new et("Error modifying one or more objects",A,P,M);return O.length})})})},xe.prototype.delete=function(){var l=this._ctx,u=l.range;return Un(l)&&(l.isPrimKey||u.type===3)?this._write(function(h){var f=l.table.core.schema.primaryKey,g=u;return l.table.core.count({trans:h,query:{index:f,range:g}}).then(function(b){return l.table.core.mutate({trans:h,type:"deleteRange",range:g}).then(function(v){var C=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new et("Could not delete some values",Object.keys(C).map(function(I){return C[I]}),b-v);return b-v})})}):this.modify(oo)},xe);function xe(){}var oo=function(l,u){return u.value=null};function Lp(l,u){return l<u?-1:l===u?0:1}function Mp(l,u){return u<l?-1:l===u?0:1}function dt(l,u,h){return l=l instanceof Gl?new l.Collection(l):l,l._ctx.error=new(h||TypeError)(u),l}function Bn(l){return new l.Collection(l,function(){return Vl("")}).limit(0)}function vs(l,u,h,f){var g,b,v,C,I,R,L,_=h.length;if(!h.every(function(P){return typeof P=="string"}))return dt(l,jl);function j(P){g=P==="next"?function(O){return O.toUpperCase()}:function(O){return O.toLowerCase()},b=P==="next"?function(O){return O.toLowerCase()}:function(O){return O.toUpperCase()},v=P==="next"?Lp:Mp;var M=h.map(function(O){return{lower:b(O),upper:g(O)}}).sort(function(O,N){return v(O.lower,N.lower)});C=M.map(function(O){return O.upper}),I=M.map(function(O){return O.lower}),L=(R=P)==="next"?"":f}j("next"),l=new l.Collection(l,function(){return tn(C[0],I[_-1]+f)}),l._ondirectionchange=function(P){j(P)};var A=0;return l._addAlgorithm(function(P,M,O){var N=P.key;if(typeof N!="string")return!1;var U=b(N);if(u(U,I,A))return!0;for(var B=null,V=A;V<_;++V){var Y=(function(te,Q,X,ne,ee,le){for(var fe=Math.min(te.length,ne.length),ge=-1,be=0;be<fe;++be){var ht=Q[be];if(ht!==ne[be])return ee(te[be],X[be])<0?te.substr(0,be)+X[be]+X.substr(be+1):ee(te[be],ne[be])<0?te.substr(0,be)+ne[be]+X.substr(be+1):0<=ge?te.substr(0,ge)+Q[ge]+X.substr(ge+1):null;ee(te[be],ht)<0&&(ge=be)}return fe<ne.length&&le==="next"?te+X.substr(te.length):fe<te.length&&le==="prev"?te.substr(0,X.length):ge<0?null:te.substr(0,ge)+ne[ge]+X.substr(ge+1)})(N,U,C[V],I[V],v,R);Y===null&&B===null?A=V+1:(B===null||0<v(B,Y))&&(B=Y)}return M(B!==null?function(){P.continue(B+L)}:O),!1}),l}function tn(l,u,h,f){return{type:2,lower:l,upper:u,lowerOpen:h,upperOpen:f}}function Vl(l){return{type:1,lower:l,upper:l}}var Gl=(Object.defineProperty(Be.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Be.prototype.between=function(l,u,h,f){h=h!==!1,f=f===!0;try{return 0<this._cmp(l,u)||this._cmp(l,u)===0&&(h||f)&&(!h||!f)?Bn(this):new this.Collection(this,function(){return tn(l,u,!h,!f)})}catch{return dt(this,qt)}},Be.prototype.equals=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return Vl(l)})},Be.prototype.above=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return tn(l,void 0,!0)})},Be.prototype.aboveOrEqual=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return tn(l,void 0,!1)})},Be.prototype.below=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return tn(void 0,l,!1,!0)})},Be.prototype.belowOrEqual=function(l){return l==null?dt(this,qt):new this.Collection(this,function(){return tn(void 0,l)})},Be.prototype.startsWith=function(l){return typeof l!="string"?dt(this,jl):this.between(l,l+bn,!0,!0)},Be.prototype.startsWithIgnoreCase=function(l){return l===""?this.startsWith(l):vs(this,function(u,h){return u.indexOf(h[0])===0},[l],bn)},Be.prototype.equalsIgnoreCase=function(l){return vs(this,function(u,h){return u===h[0]},[l],"")},Be.prototype.anyOfIgnoreCase=function(){var l=ze.apply(me,arguments);return l.length===0?Bn(this):vs(this,function(u,h){return h.indexOf(u)!==-1},l,"")},Be.prototype.startsWithAnyOfIgnoreCase=function(){var l=ze.apply(me,arguments);return l.length===0?Bn(this):vs(this,function(u,h){return h.some(function(f){return u.indexOf(f)===0})},l,bn)},Be.prototype.anyOf=function(){var l=this,u=ze.apply(me,arguments),h=this._cmp;try{u.sort(h)}catch{return dt(this,qt)}if(u.length===0)return Bn(this);var f=new this.Collection(this,function(){return tn(u[0],u[u.length-1])});f._ondirectionchange=function(b){h=b==="next"?l._ascending:l._descending,u.sort(h)};var g=0;return f._addAlgorithm(function(b,v,C){for(var I=b.key;0<h(I,u[g]);)if(++g===u.length)return v(C),!1;return h(I,u[g])===0||(v(function(){b.continue(u[g])}),!1)}),f},Be.prototype.notEqual=function(l){return this.inAnyRange([[-1/0,l],[l,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Be.prototype.noneOf=function(){var l=ze.apply(me,arguments);if(l.length===0)return new this.Collection(this);try{l.sort(this._ascending)}catch{return dt(this,qt)}var u=l.reduce(function(h,f){return h?h.concat([[h[h.length-1][1],f]]):[[-1/0,f]]},null);return u.push([l[l.length-1],this.db._maxKey]),this.inAnyRange(u,{includeLowers:!1,includeUppers:!1})},Be.prototype.inAnyRange=function(N,u){var h=this,f=this._cmp,g=this._ascending,b=this._descending,v=this._min,C=this._max;if(N.length===0)return Bn(this);if(!N.every(function(U){return U[0]!==void 0&&U[1]!==void 0&&g(U[0],U[1])<=0}))return dt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",de.InvalidArgument);var I=!u||u.includeLowers!==!1,R=u&&u.includeUppers===!0,L,_=g;function j(U,B){return _(U[0],B[0])}try{(L=N.reduce(function(U,B){for(var V=0,Y=U.length;V<Y;++V){var te=U[V];if(f(B[0],te[1])<0&&0<f(B[1],te[0])){te[0]=v(te[0],B[0]),te[1]=C(te[1],B[1]);break}}return V===Y&&U.push(B),U},[])).sort(j)}catch{return dt(this,qt)}var A=0,P=R?function(U){return 0<g(U,L[A][1])}:function(U){return 0<=g(U,L[A][1])},M=I?function(U){return 0<b(U,L[A][0])}:function(U){return 0<=b(U,L[A][0])},O=P,N=new this.Collection(this,function(){return tn(L[0][0],L[L.length-1][1],!I,!R)});return N._ondirectionchange=function(U){_=U==="next"?(O=P,g):(O=M,b),L.sort(j)},N._addAlgorithm(function(U,B,V){for(var Y,te=U.key;O(te);)if(++A===L.length)return B(V),!1;return!P(Y=te)&&!M(Y)||(h._cmp(te,L[A][1])===0||h._cmp(te,L[A][0])===0||B(function(){_===g?U.continue(L[A][0]):U.continue(L[A][1])}),!1)}),N},Be.prototype.startsWithAnyOf=function(){var l=ze.apply(me,arguments);return l.every(function(u){return typeof u=="string"})?l.length===0?Bn(this):this.inAnyRange(l.map(function(u){return[u,u+bn]})):dt(this,"startsWithAnyOf() only works with strings")},Be);function Be(){}function Mt(l){return Oe(function(u){return yr(u),l(u.target.error),!1})}function yr(l){l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault()}var vr="storagemutated",ao="x-storagemutated-1",nn=gr(null,vr),jp=(jt.prototype._lock=function(){return z(!ce.global),++this._reculock,this._reculock!==1||ce.global||(ce.lockOwnerFor=this),this},jt.prototype._unlock=function(){if(z(!ce.global),--this._reculock==0)for(ce.global||(ce.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var l=this._blockedFuncs.shift();try{gn(l[1],l[0])}catch{}}return this},jt.prototype._locked=function(){return this._reculock&&ce.lockOwnerFor!==this},jt.prototype.create=function(l){var u=this;if(!this.mode)return this;var h=this.db.idbdb,f=this.db._state.dbOpenError;if(z(!this.idbtrans),!l&&!h)switch(f&&f.name){case"DatabaseClosedError":throw new de.DatabaseClosed(f);case"MissingAPIError":throw new de.MissingAPI(f.message,f);default:throw new de.OpenFailed(f)}if(!this.active)throw new de.TransactionInactive;return z(this._completion._state===null),(l=this.idbtrans=l||(this.db.core||h).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Oe(function(g){yr(g),u._reject(l.error)}),l.onabort=Oe(function(g){yr(g),u.active&&u._reject(new de.Abort(l.error)),u.active=!1,u.on("abort").fire(g)}),l.oncomplete=Oe(function(){u.active=!1,u._resolve(),"mutatedParts"in l&&nn.storagemutated.fire(l.mutatedParts)}),this},jt.prototype._promise=function(l,u,h){var f=this;if(l==="readwrite"&&this.mode!=="readwrite")return Me(new de.ReadOnly("Transaction is readonly"));if(!this.active)return Me(new de.TransactionInactive);if(this._locked())return new oe(function(b,v){f._blockedFuncs.push([function(){f._promise(l,u,h).then(b,v)},ce])});if(h)return Xt(function(){var b=new oe(function(v,C){f._lock();var I=u(v,C,f);I&&I.then&&I.then(v,C)});return b.finally(function(){return f._unlock()}),b._lib=!0,b});var g=new oe(function(b,v){var C=u(b,v,f);C&&C.then&&C.then(b,v)});return g._lib=!0,g},jt.prototype._root=function(){return this.parent?this.parent._root():this},jt.prototype.waitFor=function(l){var u,h=this._root(),f=oe.resolve(l);h._waitingFor?h._waitingFor=h._waitingFor.then(function(){return f}):(h._waitingFor=f,h._waitingQueue=[],u=h.idbtrans.objectStore(h.storeNames[0]),(function b(){for(++h._spinCount;h._waitingQueue.length;)h._waitingQueue.shift()();h._waitingFor&&(u.get(-1/0).onsuccess=b)})());var g=h._waitingFor;return new oe(function(b,v){f.then(function(C){return h._waitingQueue.push(Oe(b.bind(null,C)))},function(C){return h._waitingQueue.push(Oe(v.bind(null,C)))}).finally(function(){h._waitingFor===g&&(h._waitingFor=null)})})},jt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new de.Abort))},jt.prototype.table=function(l){var u=this._memoizedTables||(this._memoizedTables={});if(m(u,l))return u[l];var h=this.schema[l];if(!h)throw new de.NotFound("Table "+l+" not part of transaction");return h=new this.db.Table(l,h,this),h.core=this.db.core.table(l),u[l]=h},jt);function jt(){}function lo(l,u,h,f,g,b,v){return{name:l,keyPath:u,unique:h,multi:f,auto:g,compound:b,src:(h&&!v?"&":"")+(f?"*":"")+(g?"++":"")+Wl(u)}}function Wl(l){return typeof l=="string"?l:l?"["+[].join.call(l,"+")+"]":""}function co(l,u,h){return{name:l,primKey:u,indexes:h,mappedClass:null,idxByName:(f=function(g){return[g.name,g]},h.reduce(function(g,b,v){return v=f(b,v),v&&(g[v[0]]=v[1]),g},{}))};var f}var $r=function(l){try{return l.only([[]]),$r=function(){return[[]]},[[]]}catch{return $r=function(){return bn},bn}};function uo(l){return l==null?function(){}:typeof l=="string"?(u=l).split(".").length===1?function(h){return h[u]}:function(h){return G(h,u)}:function(h){return G(h,l)};var u}function Yl(l){return[].slice.call(l)}var Np=0;function xr(l){return l==null?":id":typeof l=="string"?l:"[".concat(l.join("+"),"]")}function zp(l,u,I){function f(O){if(O.type===3)return null;if(O.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var A=O.lower,P=O.upper,M=O.lowerOpen,O=O.upperOpen;return A===void 0?P===void 0?null:u.upperBound(P,!!O):P===void 0?u.lowerBound(A,!!M):u.bound(A,P,!!M,!!O)}function g(j){var A,P=j.name;return{name:P,schema:j,mutate:function(M){var O=M.trans,N=M.type,U=M.keys,B=M.values,V=M.range;return new Promise(function(Y,te){Y=Oe(Y);var Q=O.objectStore(P),X=Q.keyPath==null,ne=N==="put"||N==="add";if(!ne&&N!=="delete"&&N!=="deleteRange")throw new Error("Invalid operation type: "+N);var ee,le=(U||B||{length:1}).length;if(U&&B&&U.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(le===0)return Y({numFailures:0,failures:{},results:[],lastResult:void 0});function fe(tt){++ht,yr(tt)}var ge=[],be=[],ht=0;if(N==="deleteRange"){if(V.type===4)return Y({numFailures:ht,failures:be,results:[],lastResult:void 0});V.type===3?ge.push(ee=Q.clear()):ge.push(ee=Q.delete(f(V)))}else{var X=ne?X?[B,U]:[B,null]:[U,null],he=X[0],Xe=X[1];if(ne)for(var Ze=0;Ze<le;++Ze)ge.push(ee=Xe&&Xe[Ze]!==void 0?Q[N](he[Ze],Xe[Ze]):Q[N](he[Ze])),ee.onerror=fe;else for(Ze=0;Ze<le;++Ze)ge.push(ee=Q[N](he[Ze])),ee.onerror=fe}function Ds(tt){tt=tt.target.result,ge.forEach(function($n,Io){return $n.error!=null&&(be[Io]=$n.error)}),Y({numFailures:ht,failures:be,results:N==="delete"?U:ge.map(function($n){return $n.result}),lastResult:tt})}ee.onerror=function(tt){fe(tt),Ds(tt)},ee.onsuccess=Ds})},getMany:function(M){var O=M.trans,N=M.keys;return new Promise(function(U,B){U=Oe(U);for(var V,Y=O.objectStore(P),te=N.length,Q=new Array(te),X=0,ne=0,ee=function(ge){ge=ge.target,Q[ge._pos]=ge.result,++ne===X&&U(Q)},le=Mt(B),fe=0;fe<te;++fe)N[fe]!=null&&((V=Y.get(N[fe]))._pos=fe,V.onsuccess=ee,V.onerror=le,++X);X===0&&U(Q)})},get:function(M){var O=M.trans,N=M.key;return new Promise(function(U,B){U=Oe(U);var V=O.objectStore(P).get(N);V.onsuccess=function(Y){return U(Y.target.result)},V.onerror=Mt(B)})},query:(A=R,function(M){return new Promise(function(O,N){O=Oe(O);var U,B,V,X=M.trans,Y=M.values,te=M.limit,ee=M.query,Q=te===1/0?void 0:te,ne=ee.index,ee=ee.range,X=X.objectStore(P),ne=ne.isPrimaryKey?X:X.index(ne.name),ee=f(ee);if(te===0)return O({result:[]});A?((Q=Y?ne.getAll(ee,Q):ne.getAllKeys(ee,Q)).onsuccess=function(le){return O({result:le.target.result})},Q.onerror=Mt(N)):(U=0,B=!Y&&"openKeyCursor"in ne?ne.openKeyCursor(ee):ne.openCursor(ee),V=[],B.onsuccess=function(le){var fe=B.result;return fe?(V.push(Y?fe.value:fe.primaryKey),++U===te?O({result:V}):void fe.continue()):O({result:V})},B.onerror=Mt(N))})}),openCursor:function(M){var O=M.trans,N=M.values,U=M.query,B=M.reverse,V=M.unique;return new Promise(function(Y,te){Y=Oe(Y);var ne=U.index,Q=U.range,X=O.objectStore(P),X=ne.isPrimaryKey?X:X.index(ne.name),ne=B?V?"prevunique":"prev":V?"nextunique":"next",ee=!N&&"openKeyCursor"in X?X.openKeyCursor(f(Q),ne):X.openCursor(f(Q),ne);ee.onerror=Mt(te),ee.onsuccess=Oe(function(le){var fe,ge,be,ht,he=ee.result;he?(he.___id=++Np,he.done=!1,fe=he.continue.bind(he),ge=(ge=he.continuePrimaryKey)&&ge.bind(he),be=he.advance.bind(he),ht=function(){throw new Error("Cursor not stopped")},he.trans=O,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Oe(te),he.next=function(){var Xe=this,Ze=1;return this.start(function(){return Ze--?Xe.continue():Xe.stop()}).then(function(){return Xe})},he.start=function(Xe){function Ze(){if(ee.result)try{Xe()}catch(tt){he.fail(tt)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var Ds=new Promise(function(tt,$n){tt=Oe(tt),ee.onerror=Mt($n),he.fail=$n,he.stop=function(Io){he.stop=he.continue=he.continuePrimaryKey=he.advance=ht,tt(Io)}});return ee.onsuccess=Oe(function(tt){ee.onsuccess=Ze,Ze()}),he.continue=fe,he.continuePrimaryKey=ge,he.advance=be,Ze(),Ds},Y(he)):Y(null)},te)})},count:function(M){var O=M.query,N=M.trans,U=O.index,B=O.range;return new Promise(function(V,Y){var te=N.objectStore(P),Q=U.isPrimaryKey?te:te.index(U.name),te=f(B),Q=te?Q.count(te):Q.count();Q.onsuccess=Oe(function(X){return V(X.target.result)}),Q.onerror=Mt(Y)})}}}var b,v,C,L=(v=I,C=Yl((b=l).objectStoreNames),{schema:{name:b.name,tables:C.map(function(j){return v.objectStore(j)}).map(function(j){var A=j.keyPath,O=j.autoIncrement,P=a(A),M={},O={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:A==null,compound:P,keyPath:A,autoIncrement:O,unique:!0,extractKey:uo(A)},indexes:Yl(j.indexNames).map(function(N){return j.index(N)}).map(function(V){var U=V.name,B=V.unique,Y=V.multiEntry,V=V.keyPath,Y={name:U,compound:a(V),keyPath:V,unique:B,multiEntry:Y,extractKey:uo(V)};return M[xr(V)]=Y}),getIndexByKeyPath:function(N){return M[xr(N)]}};return M[":id"]=O.primaryKey,A!=null&&(M[xr(A)]=O.primaryKey),O})},hasGetAll:0<C.length&&"getAll"in v.objectStore(C[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),I=L.schema,R=L.hasGetAll,L=I.tables.map(g),_={};return L.forEach(function(j){return _[j.name]=j}),{stack:"dbcore",transaction:l.transaction.bind(l),table:function(j){if(!_[j])throw new Error("Table '".concat(j,"' not found"));return _[j]},MIN_KEY:-1/0,MAX_KEY:$r(u),schema:I}}function Fp(l,u,h,f){var g=h.IDBKeyRange;return h.indexedDB,{dbcore:(f=zp(u,g,f),l.dbcore.reduce(function(b,v){return v=v.create,r(r({},b),v(b))},f))}}function $s(l,f){var h=f.db,f=Fp(l._middlewares,h,l._deps,f);l.core=f.dbcore,l.tables.forEach(function(g){var b=g.name;l.core.schema.tables.some(function(v){return v.name===b})&&(g.core=l.core.table(b),l[b]instanceof l.Table&&(l[b].core=g.core))})}function xs(l,u,h,f){h.forEach(function(g){var b=f[g];u.forEach(function(v){var C=(function I(R,L){return E(R,L)||(R=d(R))&&I(R,L)})(v,g);(!C||"value"in C&&C.value===void 0)&&(v===l.Transaction.prototype||v instanceof l.Transaction?$(v,g,{get:function(){return this.table(g)},set:function(I){y(this,g,{value:I,writable:!0,configurable:!0,enumerable:!0})}}):v[g]=new l.Table(g,b))})})}function ho(l,u){u.forEach(function(h){for(var f in h)h[f]instanceof l.Table&&delete h[f]})}function Up(l,u){return l._cfg.version-u._cfg.version}function Bp(l,u,h,f){var g=l._dbSchema;h.objectStoreNames.contains("$meta")&&!g.$meta&&(g.$meta=co("$meta",Jl("")[0],[]),l._storeNames.push("$meta"));var b=l._createTransaction("readwrite",l._storeNames,g);b.create(h),b._completion.catch(f);var v=b._reject.bind(b),C=ce.transless||ce;Xt(function(){return ce.trans=b,ce.transless=C,u!==0?($s(l,h),R=u,((I=b).storeNames.includes("$meta")?I.table("$meta").get("version").then(function(L){return L??R}):oe.resolve(R)).then(function(L){return j=L,A=b,P=h,M=[],L=(_=l)._versions,O=_._dbSchema=Cs(0,_.idbdb,P),(L=L.filter(function(N){return N._cfg.version>=j})).length!==0?(L.forEach(function(N){M.push(function(){var U=O,B=N._cfg.dbschema;_s(_,U,P),_s(_,B,P),O=_._dbSchema=B;var V=fo(U,B);V.add.forEach(function(ne){po(P,ne[0],ne[1].primKey,ne[1].indexes)}),V.change.forEach(function(ne){if(ne.recreate)throw new de.Upgrade("Not yet support for changing primary key");var ee=P.objectStore(ne.name);ne.add.forEach(function(le){return ks(ee,le)}),ne.change.forEach(function(le){ee.deleteIndex(le.name),ks(ee,le)}),ne.del.forEach(function(le){return ee.deleteIndex(le)})});var Y=N._cfg.contentUpgrade;if(Y&&N._cfg.version>j){$s(_,P),A._memoizedTables={};var te=q(B);V.del.forEach(function(ne){te[ne]=U[ne]}),ho(_,[_.Transaction.prototype]),xs(_,[_.Transaction.prototype],o(te),te),A.schema=te;var Q,X=kt(Y);return X&&zn(),V=oe.follow(function(){var ne;(Q=Y(A))&&X&&(ne=Zt.bind(null,null),Q.then(ne,ne))}),Q&&typeof Q.then=="function"?oe.resolve(Q):V.then(function(){return Q})}}),M.push(function(U){var B,V,Y=N._cfg.dbschema;B=Y,V=U,[].slice.call(V.db.objectStoreNames).forEach(function(te){return B[te]==null&&V.db.deleteObjectStore(te)}),ho(_,[_.Transaction.prototype]),xs(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),A.schema=_._dbSchema}),M.push(function(U){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===N._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(B){return B!=="$meta"})):U.objectStore("$meta").put(N._cfg.version,"version"))})}),(function N(){return M.length?oe.resolve(M.shift()(A.idbtrans)).then(N):oe.resolve()})().then(function(){Ql(O,P)})):oe.resolve();var _,j,A,P,M,O}).catch(v)):(o(g).forEach(function(L){po(h,L,g[L].primKey,g[L].indexes)}),$s(l,h),void oe.follow(function(){return l.on.populate.fire(b)}).catch(v));var I,R})}function qp(l,u){Ql(l._dbSchema,u),u.db.version%10!=0||u.objectStoreNames.contains("$meta")||u.db.createObjectStore("$meta").add(Math.ceil(u.db.version/10-1),"version");var h=Cs(0,l.idbdb,u);_s(l,l._dbSchema,u);for(var f=0,g=fo(h,l._dbSchema).change;f<g.length;f++){var b=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var C=u.objectStore(v.name);v.add.forEach(function(I){Lt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(I.src)),ks(C,I)})})(g[f]);if(typeof b=="object")return b.value}}function fo(l,u){var h,f={del:[],add:[],change:[]};for(h in l)u[h]||f.del.push(h);for(h in u){var g=l[h],b=u[h];if(g){var v={name:h,def:b,recreate:!1,del:[],add:[],change:[]};if(""+(g.primKey.keyPath||"")!=""+(b.primKey.keyPath||"")||g.primKey.auto!==b.primKey.auto)v.recreate=!0,f.change.push(v);else{var C=g.idxByName,I=b.idxByName,R=void 0;for(R in C)I[R]||v.del.push(R);for(R in I){var L=C[R],_=I[R];L?L.src!==_.src&&v.change.push(_):v.add.push(_)}(0<v.del.length||0<v.add.length||0<v.change.length)&&f.change.push(v)}}else f.add.push([h,b])}return f}function po(l,u,h,f){var g=l.db.createObjectStore(u,h.keyPath?{keyPath:h.keyPath,autoIncrement:h.auto}:{autoIncrement:h.auto});return f.forEach(function(b){return ks(g,b)}),g}function Ql(l,u){o(l).forEach(function(h){u.db.objectStoreNames.contains(h)||(Lt&&console.debug("Dexie: Creating missing table",h),po(u,h,l[h].primKey,l[h].indexes))})}function ks(l,u){l.createIndex(u.name,u.keyPath,{unique:u.unique,multiEntry:u.multi})}function Cs(l,u,h){var f={};return D(u.objectStoreNames,0).forEach(function(g){for(var b=h.objectStore(g),v=lo(Wl(R=b.keyPath),R||"",!0,!1,!!b.autoIncrement,R&&typeof R!="string",!0),C=[],I=0;I<b.indexNames.length;++I){var L=b.index(b.indexNames[I]),R=L.keyPath,L=lo(L.name,R,!!L.unique,!!L.multiEntry,!1,R&&typeof R!="string",!1);C.push(L)}f[g]=co(g,v,C)}),f}function _s(l,u,h){for(var f=h.db.objectStoreNames,g=0;g<f.length;++g){var b=f[g],v=h.objectStore(b);l._hasGetAll="getAll"in v;for(var C=0;C<v.indexNames.length;++C){var I=v.indexNames[C],R=v.index(I).keyPath,L=typeof R=="string"?R:"["+D(R).join("+")+"]";!u[b]||(R=u[b].idxByName[L])&&(R.name=I,delete u[b].idxByName[L],u[b].idxByName[I]=R)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&i.WorkerGlobalScope&&i instanceof i.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(l._hasGetAll=!1)}function Jl(l){return l.split(",").map(function(u,h){var f=(u=u.trim()).replace(/([&*]|\+\+)/g,""),g=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return lo(f,g||null,/\&/.test(u),/\*/.test(u),/\+\+/.test(u),a(g),h===0)})}var Hp=(Ss.prototype._parseStoresSpec=function(l,u){o(l).forEach(function(h){if(l[h]!==null){var f=Jl(l[h]),g=f.shift();if(g.unique=!0,g.multi)throw new de.Schema("Primary key cannot be multi-valued");f.forEach(function(b){if(b.auto)throw new de.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new de.Schema("Index must have a name and cannot be an empty string")}),u[h]=co(h,g,f)}})},Ss.prototype.stores=function(h){var u=this.db;this._cfg.storesSource=this._cfg.storesSource?c(this._cfg.storesSource,h):h;var h=u._versions,f={},g={};return h.forEach(function(b){c(f,b._cfg.storesSource),g=b._cfg.dbschema={},b._parseStoresSpec(f,g)}),u._dbSchema=g,ho(u,[u._allTables,u,u.Transaction.prototype]),xs(u,[u._allTables,u,u.Transaction.prototype,this._cfg.tables],o(g),g),u._storeNames=o(g),this},Ss.prototype.upgrade=function(l){return this._cfg.contentUpgrade=Gi(this._cfg.contentUpgrade||Ce,l),this},Ss);function Ss(){}function mo(l,u){var h=l._dbNamesDB;return h||(h=l._dbNamesDB=new Kt(gs,{addons:[],indexedDB:l,IDBKeyRange:u})).version(1).stores({dbnames:"name"}),h.table("dbnames")}function go(l){return l&&typeof l.databases=="function"}function bo(l){return Xt(function(){return ce.letThrough=!0,l()})}function wo(l){return!("from"in l)}var Je=function(l,u){if(!this){var h=new Je;return l&&"d"in l&&c(h,l),h}c(this,arguments.length?{d:1,from:l,to:1<arguments.length?u:l}:{d:0})};function kr(l,u,h){var f=$e(u,h);if(!isNaN(f)){if(0<f)throw RangeError();if(wo(l))return c(l,{from:u,to:h,d:1});var g=l.l,f=l.r;if($e(h,l.from)<0)return g?kr(g,u,h):l.l={from:u,to:h,d:1,l:null,r:null},Zl(l);if(0<$e(u,l.to))return f?kr(f,u,h):l.r={from:u,to:h,d:1,l:null,r:null},Zl(l);$e(u,l.from)<0&&(l.from=u,l.l=null,l.d=f?f.d+1:1),0<$e(h,l.to)&&(l.to=h,l.r=null,l.d=l.l?l.l.d+1:1),h=!l.r,g&&!l.l&&Cr(l,g),f&&h&&Cr(l,f)}}function Cr(l,u){wo(u)||(function h(f,I){var b=I.from,v=I.to,C=I.l,I=I.r;kr(f,b,v),C&&h(f,C),I&&h(f,I)})(l,u)}function Xl(l,u){var h=Es(u),f=h.next();if(f.done)return!1;for(var g=f.value,b=Es(l),v=b.next(g.from),C=v.value;!f.done&&!v.done;){if($e(C.from,g.to)<=0&&0<=$e(C.to,g.from))return!0;$e(g.from,C.from)<0?g=(f=h.next(C.from)).value:C=(v=b.next(g.from)).value}return!1}function Es(l){var u=wo(l)?null:{s:0,n:l};return{next:function(h){for(var f=0<arguments.length;u;)switch(u.s){case 0:if(u.s=1,f)for(;u.n.l&&$e(h,u.n.from)<0;)u={up:u,n:u.n.l,s:1};else for(;u.n.l;)u={up:u,n:u.n.l,s:1};case 1:if(u.s=2,!f||$e(h,u.n.to)<=0)return{value:u.n,done:!1};case 2:if(u.n.r){u.s=3,u={up:u,n:u.n.r,s:0};continue}case 3:u=u.up}return{done:!0}}}}function Zl(l){var u,h,f=(((u=l.r)===null||u===void 0?void 0:u.d)||0)-(((h=l.l)===null||h===void 0?void 0:h.d)||0),g=1<f?"r":f<-1?"l":"";g&&(u=g=="r"?"l":"r",h=r({},l),f=l[g],l.from=f.from,l.to=f.to,l[g]=f[g],h[g]=f[u],(l[u]=h).d=ec(h)),l.d=ec(l)}function ec(h){var u=h.r,h=h.l;return(u?h?Math.max(u.d,h.d):u.d:h?h.d:0)+1}function Ts(l,u){return o(u).forEach(function(h){l[h]?Cr(l[h],u[h]):l[h]=(function f(g){var b,v,C={};for(b in g)m(g,b)&&(v=g[b],C[b]=!v||typeof v!="object"||pe.has(v.constructor)?v:f(v));return C})(u[h])}),l}function yo(l,u){return l.all||u.all||Object.keys(l).some(function(h){return u[h]&&Xl(u[h],l[h])})}w(Je.prototype,((Ct={add:function(l){return Cr(this,l),this},addKey:function(l){return kr(this,l,l),this},addKeys:function(l){var u=this;return l.forEach(function(h){return kr(u,h,h)}),this},hasKey:function(l){var u=Es(this).next(l).value;return u&&$e(u.from,l)<=0&&0<=$e(u.to,l)}})[ve]=function(){return Es(this)},Ct));var yn={},vo={},$o=!1;function Is(l){Ts(vo,l),$o||($o=!0,setTimeout(function(){$o=!1,xo(vo,!(vo={}))},0))}function xo(l,u){u===void 0&&(u=!1);var h=new Set;if(l.all)for(var f=0,g=Object.values(yn);f<g.length;f++)tc(v=g[f],l,h,u);else for(var b in l){var v,C=/^idb\:\/\/(.*)\/(.*)\//.exec(b);C&&(b=C[1],C=C[2],(v=yn["idb://".concat(b,"/").concat(C)])&&tc(v,l,h,u))}h.forEach(function(I){return I()})}function tc(l,u,h,f){for(var g=[],b=0,v=Object.entries(l.queries.query);b<v.length;b++){for(var C=v[b],I=C[0],R=[],L=0,_=C[1];L<_.length;L++){var j=_[L];yo(u,j.obsSet)?j.subscribers.forEach(function(O){return h.add(O)}):f&&R.push(j)}f&&g.push([I,R])}if(f)for(var A=0,P=g;A<P.length;A++){var M=P[A],I=M[0],R=M[1];l.queries.query[I]=R}}function Kp(l){var u=l._state,h=l._deps.indexedDB;if(u.isBeingOpened||l.idbdb)return u.dbReadyPromise.then(function(){return u.dbOpenError?Me(u.dbOpenError):l});u.isBeingOpened=!0,u.dbOpenError=null,u.openComplete=!1;var f=u.openCanceller,g=Math.round(10*l.verno),b=!1;function v(){if(u.openCanceller!==f)throw new de.DatabaseClosed("db.open() was cancelled")}function C(){return new oe(function(j,A){if(v(),!h)throw new de.MissingAPI;var P=l.name,M=u.autoSchema||!g?h.open(P):h.open(P,g);if(!M)throw new de.MissingAPI;M.onerror=Mt(A),M.onblocked=Oe(l._fireOnBlocked),M.onupgradeneeded=Oe(function(O){var N;L=M.transaction,u.autoSchema&&!l._options.allowEmptyDB?(M.onerror=yr,L.abort(),M.result.close(),(N=h.deleteDatabase(P)).onsuccess=N.onerror=Oe(function(){A(new de.NoSuchDatabase("Database ".concat(P," doesnt exist")))})):(L.onerror=Mt(A),O=O.oldVersion>Math.pow(2,62)?0:O.oldVersion,_=O<1,l.idbdb=M.result,b&&qp(l,L),Bp(l,O/10,L,A))},A),M.onsuccess=Oe(function(){L=null;var O,N,U,B,V,Y=l.idbdb=M.result,te=D(Y.objectStoreNames);if(0<te.length)try{var Q=Y.transaction((B=te).length===1?B[0]:B,"readonly");if(u.autoSchema)N=Y,U=Q,(O=l).verno=N.version/10,U=O._dbSchema=Cs(0,N,U),O._storeNames=D(N.objectStoreNames,0),xs(O,[O._allTables],o(U),U);else if(_s(l,l._dbSchema,Q),((V=fo(Cs(0,(V=l).idbdb,Q),V._dbSchema)).add.length||V.change.some(function(X){return X.add.length||X.change.length}))&&!b)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),g=Y.version+1,b=!0,j(C());$s(l,Q)}catch{}Fn.push(l),Y.onversionchange=Oe(function(X){u.vcFired=!0,l.on("versionchange").fire(X)}),Y.onclose=Oe(function(X){l.on("close").fire(X)}),_&&(V=l._deps,Q=P,Y=V.indexedDB,V=V.IDBKeyRange,go(Y)||Q===gs||mo(Y,V).put({name:Q}).catch(Ce)),j()},A)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<u.PR1398_maxLoop)return u.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),C();break;case"VersionError":if(0<g)return g=0,C()}return oe.reject(j)})}var I,R=u.dbReadyResolve,L=null,_=!1;return oe.race([f,(typeof navigator>"u"?oe.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function A(){return indexedDB.databases().finally(j)}I=setInterval(A,100),A()}).finally(function(){return clearInterval(I)}):Promise.resolve()).then(C)]).then(function(){return v(),u.onReadyBeingFired=[],oe.resolve(bo(function(){return l.on.ready.fire(l.vip)})).then(function j(){if(0<u.onReadyBeingFired.length){var A=u.onReadyBeingFired.reduce(Gi,Ce);return u.onReadyBeingFired=[],oe.resolve(bo(function(){return A(l.vip)})).then(j)}})}).finally(function(){u.openCanceller===f&&(u.onReadyBeingFired=null,u.isBeingOpened=!1)}).catch(function(j){u.dbOpenError=j;try{L&&L.abort()}catch{}return f===u.openCanceller&&l._close(),Me(j)}).finally(function(){u.openComplete=!0,R()}).then(function(){var j;return _&&(j={},l.tables.forEach(function(A){A.schema.indexes.forEach(function(P){P.name&&(j["idb://".concat(l.name,"/").concat(A.name,"/").concat(P.name)]=new Je(-1/0,[[[]]]))}),j["idb://".concat(l.name,"/").concat(A.name,"/")]=j["idb://".concat(l.name,"/").concat(A.name,"/:dels")]=new Je(-1/0,[[[]]])}),nn(vr).fire(j),xo(j,!0)),l})}function ko(l){function u(b){return l.next(b)}var h=g(u),f=g(function(b){return l.throw(b)});function g(b){return function(I){var C=b(I),I=C.value;return C.done?I:I&&typeof I.then=="function"?I.then(h,f):a(I)?Promise.all(I).then(h,f):h(I)}}return g(u)()}function As(l,u,h){for(var f=a(l)?l.slice():[l],g=0;g<h;++g)f.push(u);return f}var Vp={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(l){return r(r({},l),{table:function(u){var h=l.table(u),f=h.schema,g={},b=[];function v(_,j,A){var P=xr(_),M=g[P]=g[P]||[],O=_==null?0:typeof _=="string"?1:_.length,N=0<j,N=r(r({},A),{name:N?"".concat(P,"(virtual-from:").concat(A.name,")"):A.name,lowLevelIndex:A,isVirtual:N,keyTail:j,keyLength:O,extractKey:uo(_),unique:!N&&A.unique});return M.push(N),N.isPrimaryKey||b.push(N),1<O&&v(O===2?_[0]:_.slice(0,O-1),j+1,A),M.sort(function(U,B){return U.keyTail-B.keyTail}),N}u=v(f.primaryKey.keyPath,0,f.primaryKey),g[":id"]=[u];for(var C=0,I=f.indexes;C<I.length;C++){var R=I[C];v(R.keyPath,0,R)}function L(_){var j,A=_.query.index;return A.isVirtual?r(r({},_),{query:{index:A.lowLevelIndex,range:(j=_.query.range,A=A.keyTail,{type:j.type===1?2:j.type,lower:As(j.lower,j.lowerOpen?l.MAX_KEY:l.MIN_KEY,A),lowerOpen:!0,upper:As(j.upper,j.upperOpen?l.MIN_KEY:l.MAX_KEY,A),upperOpen:!0})}}):_}return r(r({},h),{schema:r(r({},f),{primaryKey:u,indexes:b,getIndexByKeyPath:function(_){return(_=g[xr(_)])&&_[0]}}),count:function(_){return h.count(L(_))},query:function(_){return h.query(L(_))},openCursor:function(_){var j=_.query.index,A=j.keyTail,P=j.isVirtual,M=j.keyLength;return P?h.openCursor(L(_)).then(function(N){return N&&O(N)}):h.openCursor(_);function O(N){return Object.create(N,{continue:{value:function(U){U!=null?N.continue(As(U,_.reverse?l.MAX_KEY:l.MIN_KEY,A)):_.unique?N.continue(N.key.slice(0,M).concat(_.reverse?l.MIN_KEY:l.MAX_KEY,A)):N.continue()}},continuePrimaryKey:{value:function(U,B){N.continuePrimaryKey(As(U,l.MAX_KEY,A),B)}},primaryKey:{get:function(){return N.primaryKey}},key:{get:function(){var U=N.key;return M===1?U[0]:U.slice(0,M)}},value:{get:function(){return N.value}}})}}})}})}};function Co(l,u,h,f){return h=h||{},f=f||"",o(l).forEach(function(g){var b,v,C;m(u,g)?(b=l[g],v=u[g],typeof b=="object"&&typeof v=="object"&&b&&v?(C=se(b))!==se(v)?h[f+g]=u[g]:C==="Object"?Co(b,v,h,f+g+"."):b!==v&&(h[f+g]=u[g]):b!==v&&(h[f+g]=u[g])):h[f+g]=void 0}),o(u).forEach(function(g){m(l,g)||(h[f+g]=u[g])}),h}function _o(l,u){return u.type==="delete"?u.keys:u.keys||u.values.map(l.extractKey)}var Gp={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(l){return r(r({},l),{table:function(u){var h=l.table(u),f=h.schema.primaryKey;return r(r({},h),{mutate:function(g){var b=ce.trans,v=b.table(u).hook,C=v.deleting,I=v.creating,R=v.updating;switch(g.type){case"add":if(I.fire===Ce)break;return b._promise("readwrite",function(){return L(g)},!0);case"put":if(I.fire===Ce&&R.fire===Ce)break;return b._promise("readwrite",function(){return L(g)},!0);case"delete":if(C.fire===Ce)break;return b._promise("readwrite",function(){return L(g)},!0);case"deleteRange":if(C.fire===Ce)break;return b._promise("readwrite",function(){return(function _(j,A,P){return h.query({trans:j,values:!1,query:{index:f,range:A},limit:P}).then(function(M){var O=M.result;return L({type:"delete",keys:O,trans:j}).then(function(N){return 0<N.numFailures?Promise.reject(N.failures[0]):O.length<P?{failures:[],numFailures:0,lastResult:void 0}:_(j,r(r({},A),{lower:O[O.length-1],lowerOpen:!0}),P)})})})(g.trans,g.range,1e4)},!0)}return h.mutate(g);function L(_){var j,A,P,M=ce.trans,O=_.keys||_o(f,_);if(!O)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:O}):r({},_)).type!=="delete"&&(_.values=s([],_.values)),_.keys&&(_.keys=s([],_.keys)),j=h,P=O,((A=_).type==="add"?Promise.resolve([]):j.getMany({trans:A.trans,keys:P,cache:"immutable"})).then(function(N){var U=O.map(function(B,V){var Y,te,Q,X=N[V],ne={onerror:null,onsuccess:null};return _.type==="delete"?C.fire.call(ne,B,X,M):_.type==="add"||X===void 0?(Y=I.fire.call(ne,B,_.values[V],M),B==null&&Y!=null&&(_.keys[V]=B=Y,f.outbound||T(_.values[V],f.keyPath,B))):(Y=Co(X,_.values[V]),(te=R.fire.call(ne,Y,B,X,M))&&(Q=_.values[V],Object.keys(te).forEach(function(ee){m(Q,ee)?Q[ee]=te[ee]:T(Q,ee,te[ee])}))),ne});return h.mutate(_).then(function(B){for(var V=B.failures,Y=B.results,te=B.numFailures,B=B.lastResult,Q=0;Q<O.length;++Q){var X=(Y||O)[Q],ne=U[Q];X==null?ne.onerror&&ne.onerror(V[Q]):ne.onsuccess&&ne.onsuccess(_.type==="put"&&N[Q]?_.values[Q]:X)}return{failures:V,results:Y,numFailures:te,lastResult:B}}).catch(function(B){return U.forEach(function(V){return V.onerror&&V.onerror(B)}),Promise.reject(B)})})}}})}})}};function nc(l,u,h){try{if(!u||u.keys.length<l.length)return null;for(var f=[],g=0,b=0;g<u.keys.length&&b<l.length;++g)$e(u.keys[g],l[b])===0&&(f.push(h?Z(u.values[g]):u.values[g]),++b);return f.length===l.length?f:null}catch{return null}}var Wp={stack:"dbcore",level:-1,create:function(l){return{table:function(u){var h=l.table(u);return r(r({},h),{getMany:function(f){if(!f.cache)return h.getMany(f);var g=nc(f.keys,f.trans._cache,f.cache==="clone");return g?oe.resolve(g):h.getMany(f).then(function(b){return f.trans._cache={keys:f.keys,values:f.cache==="clone"?Z(b):b},b})},mutate:function(f){return f.type!=="add"&&(f.trans._cache=null),h.mutate(f)}})}}}};function rc(l,u){return l.trans.mode==="readonly"&&!!l.subscr&&!l.trans.explicit&&l.trans.db._options.cache!=="disabled"&&!u.schema.primaryKey.outbound}function sc(l,u){switch(l){case"query":return u.values&&!u.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Yp={stack:"dbcore",level:0,name:"Observability",create:function(l){var u=l.schema.name,h=new Je(l.MIN_KEY,l.MAX_KEY);return r(r({},l),{transaction:function(f,g,b){if(ce.subscr&&g!=="readonly")throw new de.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ce.querier));return l.transaction(f,g,b)},table:function(f){var g=l.table(f),b=g.schema,v=b.primaryKey,_=b.indexes,C=v.extractKey,I=v.outbound,R=v.autoIncrement&&_.filter(function(A){return A.compound&&A.keyPath.includes(v.keyPath)}),L=r(r({},g),{mutate:function(A){function P(ee){return ee="idb://".concat(u,"/").concat(f,"/").concat(ee),B[ee]||(B[ee]=new Je)}var M,O,N,U=A.trans,B=A.mutatedParts||(A.mutatedParts={}),V=P(""),Y=P(":dels"),te=A.type,ne=A.type==="deleteRange"?[A.range]:A.type==="delete"?[A.keys]:A.values.length<50?[_o(v,A).filter(function(ee){return ee}),A.values]:[],Q=ne[0],X=ne[1],ne=A.trans._cache;return a(Q)?(V.addKeys(Q),(ne=te==="delete"||Q.length===X.length?nc(Q,ne):null)||Y.addKeys(Q),(ne||X)&&(M=P,O=ne,N=X,b.indexes.forEach(function(ee){var le=M(ee.name||"");function fe(be){return be!=null?ee.extractKey(be):null}function ge(be){return ee.multiEntry&&a(be)?be.forEach(function(ht){return le.addKey(ht)}):le.addKey(be)}(O||N).forEach(function(be,Xe){var he=O&&fe(O[Xe]),Xe=N&&fe(N[Xe]);$e(he,Xe)!==0&&(he!=null&&ge(he),Xe!=null&&ge(Xe))})}))):Q?(X={from:(X=Q.lower)!==null&&X!==void 0?X:l.MIN_KEY,to:(X=Q.upper)!==null&&X!==void 0?X:l.MAX_KEY},Y.add(X),V.add(X)):(V.add(h),Y.add(h),b.indexes.forEach(function(ee){return P(ee.name).add(h)})),g.mutate(A).then(function(ee){return!Q||A.type!=="add"&&A.type!=="put"||(V.addKeys(ee.results),R&&R.forEach(function(le){for(var fe=A.values.map(function(he){return le.extractKey(he)}),ge=le.keyPath.findIndex(function(he){return he===v.keyPath}),be=0,ht=ee.results.length;be<ht;++be)fe[be][ge]=ee.results[be];P(le.name).addKeys(fe)})),U.mutatedParts=Ts(U.mutatedParts||{},B),ee})}}),_=function(P){var M=P.query,P=M.index,M=M.range;return[P,new Je((P=M.lower)!==null&&P!==void 0?P:l.MIN_KEY,(M=M.upper)!==null&&M!==void 0?M:l.MAX_KEY)]},j={get:function(A){return[v,new Je(A.key)]},getMany:function(A){return[v,new Je().addKeys(A.keys)]},count:_,query:_,openCursor:_};return o(j).forEach(function(A){L[A]=function(P){var M=ce.subscr,O=!!M,N=rc(ce,g)&&sc(A,P)?P.obsSet={}:M;if(O){var U=function(X){return X="idb://".concat(u,"/").concat(f,"/").concat(X),N[X]||(N[X]=new Je)},B=U(""),V=U(":dels"),M=j[A](P),O=M[0],M=M[1];if((A==="query"&&O.isPrimaryKey&&!P.values?V:U(O.name||"")).add(M),!O.isPrimaryKey){if(A!=="count"){var Y=A==="query"&&I&&P.values&&g.query(r(r({},P),{values:!1}));return g[A].apply(this,arguments).then(function(X){if(A==="query"){if(I&&P.values)return Y.then(function(fe){return fe=fe.result,B.addKeys(fe),X});var ne=P.values?X.result.map(C):X.result;(P.values?B:V).addKeys(ne)}else if(A==="openCursor"){var ee=X,le=P.values;return ee&&Object.create(ee,{key:{get:function(){return V.addKey(ee.primaryKey),ee.key}},primaryKey:{get:function(){var fe=ee.primaryKey;return V.addKey(fe),fe}},value:{get:function(){return le&&B.addKey(ee.primaryKey),ee.value}}})}return X})}V.add(h)}}return g[A].apply(this,arguments)}}),L}})}};function ic(l,u,h){if(h.numFailures===0)return u;if(u.type==="deleteRange")return null;var f=u.keys?u.keys.length:"values"in u&&u.values?u.values.length:1;return h.numFailures===f?null:(u=r({},u),a(u.keys)&&(u.keys=u.keys.filter(function(g,b){return!(b in h.failures)})),"values"in u&&a(u.values)&&(u.values=u.values.filter(function(g,b){return!(b in h.failures)})),u)}function So(l,u){return h=l,((f=u).lower===void 0||(f.lowerOpen?0<$e(h,f.lower):0<=$e(h,f.lower)))&&(l=l,(u=u).upper===void 0||(u.upperOpen?$e(l,u.upper)<0:$e(l,u.upper)<=0));var h,f}function oc(l,u,j,f,g,b){if(!j||j.length===0)return l;var v=u.query.index,C=v.multiEntry,I=u.query.range,R=f.schema.primaryKey.extractKey,L=v.extractKey,_=(v.lowLevelIndex||v).extractKey,j=j.reduce(function(A,P){var M=A,O=[];if(P.type==="add"||P.type==="put")for(var N=new Je,U=P.values.length-1;0<=U;--U){var B,V=P.values[U],Y=R(V);N.hasKey(Y)||(B=L(V),(C&&a(B)?B.some(function(ee){return So(ee,I)}):So(B,I))&&(N.addKey(Y),O.push(V)))}switch(P.type){case"add":var te=new Je().addKeys(u.values?A.map(function(le){return R(le)}):A),M=A.concat(u.values?O.filter(function(le){return le=R(le),!te.hasKey(le)&&(te.addKey(le),!0)}):O.map(function(le){return R(le)}).filter(function(le){return!te.hasKey(le)&&(te.addKey(le),!0)}));break;case"put":var Q=new Je().addKeys(P.values.map(function(le){return R(le)}));M=A.filter(function(le){return!Q.hasKey(u.values?R(le):le)}).concat(u.values?O:O.map(function(le){return R(le)}));break;case"delete":var X=new Je().addKeys(P.keys);M=A.filter(function(le){return!X.hasKey(u.values?R(le):le)});break;case"deleteRange":var ne=P.range;M=A.filter(function(le){return!So(R(le),ne)})}return M},l);return j===l?l:(j.sort(function(A,P){return $e(_(A),_(P))||$e(R(A),R(P))}),u.limit&&u.limit<1/0&&(j.length>u.limit?j.length=u.limit:l.length===u.limit&&j.length<u.limit&&(g.dirty=!0)),b?Object.freeze(j):j)}function ac(l,u){return $e(l.lower,u.lower)===0&&$e(l.upper,u.upper)===0&&!!l.lowerOpen==!!u.lowerOpen&&!!l.upperOpen==!!u.upperOpen}function Qp(l,u){return(function(h,f,g,b){if(h===void 0)return f!==void 0?-1:0;if(f===void 0)return 1;if((f=$e(h,f))===0){if(g&&b)return 0;if(g)return 1;if(b)return-1}return f})(l.lower,u.lower,l.lowerOpen,u.lowerOpen)<=0&&0<=(function(h,f,g,b){if(h===void 0)return f!==void 0?1:0;if(f===void 0)return-1;if((f=$e(h,f))===0){if(g&&b)return 0;if(g)return-1;if(b)return 1}return f})(l.upper,u.upper,l.upperOpen,u.upperOpen)}function Jp(l,u,h,f){l.subscribers.add(h),f.addEventListener("abort",function(){var g,b;l.subscribers.delete(h),l.subscribers.size===0&&(g=l,b=u,setTimeout(function(){g.subscribers.size===0&&Ne(b,g)},3e3))})}var Xp={stack:"dbcore",level:0,name:"Cache",create:function(l){var u=l.schema.name;return r(r({},l),{transaction:function(h,f,g){var b,v,C=l.transaction(h,f,g);return f==="readwrite"&&(v=(b=new AbortController).signal,g=function(I){return function(){if(b.abort(),f==="readwrite"){for(var R=new Set,L=0,_=h;L<_.length;L++){var j=_[L],A=yn["idb://".concat(u,"/").concat(j)];if(A){var P=l.table(j),M=A.optimisticOps.filter(function(le){return le.trans===C});if(C._explicit&&I&&C.mutatedParts)for(var O=0,N=Object.values(A.queries.query);O<N.length;O++)for(var U=0,B=(te=N[O]).slice();U<B.length;U++)yo((Q=B[U]).obsSet,C.mutatedParts)&&(Ne(te,Q),Q.subscribers.forEach(function(le){return R.add(le)}));else if(0<M.length){A.optimisticOps=A.optimisticOps.filter(function(le){return le.trans!==C});for(var V=0,Y=Object.values(A.queries.query);V<Y.length;V++)for(var te,Q,X,ne=0,ee=(te=Y[V]).slice();ne<ee.length;ne++)(Q=ee[ne]).res!=null&&C.mutatedParts&&(I&&!Q.dirty?(X=Object.isFrozen(Q.res),X=oc(Q.res,Q.req,M,P,Q,X),Q.dirty?(Ne(te,Q),Q.subscribers.forEach(function(le){return R.add(le)})):X!==Q.res&&(Q.res=X,Q.promise=oe.resolve({result:X}))):(Q.dirty&&Ne(te,Q),Q.subscribers.forEach(function(le){return R.add(le)})))}}}R.forEach(function(le){return le()})}}},C.addEventListener("abort",g(!1),{signal:v}),C.addEventListener("error",g(!1),{signal:v}),C.addEventListener("complete",g(!0),{signal:v})),C},table:function(h){var f=l.table(h),g=f.schema.primaryKey;return r(r({},f),{mutate:function(b){var v=ce.trans;if(g.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return f.mutate(b);var C=yn["idb://".concat(u,"/").concat(h)];return C?(v=f.mutate(b),b.type!=="add"&&b.type!=="put"||!(50<=b.values.length||_o(g,b).some(function(I){return I==null}))?(C.optimisticOps.push(b),b.mutatedParts&&Is(b.mutatedParts),v.then(function(I){0<I.numFailures&&(Ne(C.optimisticOps,b),(I=ic(0,b,I))&&C.optimisticOps.push(I),b.mutatedParts&&Is(b.mutatedParts))}),v.catch(function(){Ne(C.optimisticOps,b),b.mutatedParts&&Is(b.mutatedParts)})):v.then(function(I){var R=ic(0,r(r({},b),{values:b.values.map(function(L,_){var j;return I.failures[_]?L:(L=(j=g.keyPath)!==null&&j!==void 0&&j.includes(".")?Z(L):r({},L),T(L,g.keyPath,I.results[_]),L)})}),I);C.optimisticOps.push(R),queueMicrotask(function(){return b.mutatedParts&&Is(b.mutatedParts)})}),v):f.mutate(b)},query:function(b){if(!rc(ce,f)||!sc("query",b))return f.query(b);var v=((R=ce.trans)===null||R===void 0?void 0:R.db._options.cache)==="immutable",_=ce,C=_.requery,I=_.signal,R=(function(P,M,O,N){var U=yn["idb://".concat(P,"/").concat(M)];if(!U)return[];if(!(M=U.queries[O]))return[null,!1,U,null];var B=M[(N.query?N.query.index.name:null)||""];if(!B)return[null,!1,U,null];switch(O){case"query":var V=B.find(function(Y){return Y.req.limit===N.limit&&Y.req.values===N.values&&ac(Y.req.query.range,N.query.range)});return V?[V,!0,U,B]:[B.find(function(Y){return("limit"in Y.req?Y.req.limit:1/0)>=N.limit&&(!N.values||Y.req.values)&&Qp(Y.req.query.range,N.query.range)}),!1,U,B];case"count":return V=B.find(function(Y){return ac(Y.req.query.range,N.query.range)}),[V,!!V,U,B]}})(u,h,"query",b),L=R[0],_=R[1],j=R[2],A=R[3];return L&&_?L.obsSet=b.obsSet:(_=f.query(b).then(function(P){var M=P.result;if(L&&(L.res=M),v){for(var O=0,N=M.length;O<N;++O)Object.freeze(M[O]);Object.freeze(M)}else P.result=Z(M);return P}).catch(function(P){return A&&L&&Ne(A,L),Promise.reject(P)}),L={obsSet:b.obsSet,promise:_,subscribers:new Set,type:"query",req:b,dirty:!1},A?A.push(L):(A=[L],(j=j||(yn["idb://".concat(u,"/").concat(h)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[b.query.index.name||""]=A)),Jp(L,A,C,I),L.promise.then(function(P){return{result:oc(P.result,b,j?.optimisticOps,f,L,v)}})}})}})}};function Rs(l,u){return new Proxy(l,{get:function(h,f,g){return f==="db"?u:Reflect.get(h,f,g)}})}var Kt=(je.prototype.version=function(l){if(isNaN(l)||l<.1)throw new de.Type("Given version is not a positive number");if(l=Math.round(10*l)/10,this.idbdb||this._state.isBeingOpened)throw new de.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,l);var u=this._versions,h=u.filter(function(f){return f._cfg.version===l})[0];return h||(h=new this.Version(l),u.push(h),u.sort(Up),h.stores({}),this._state.autoSchema=!1,h)},je.prototype._whenReady=function(l){var u=this;return this.idbdb&&(this._state.openComplete||ce.letThrough||this._vip)?l():new oe(function(h,f){if(u._state.openComplete)return f(new de.DatabaseClosed(u._state.dbOpenError));if(!u._state.isBeingOpened){if(!u._state.autoOpen)return void f(new de.DatabaseClosed);u.open().catch(Ce)}u._state.dbReadyPromise.then(h,f)}).then(l)},je.prototype.use=function(l){var u=l.stack,h=l.create,f=l.level,g=l.name;return g&&this.unuse({stack:u,name:g}),l=this._middlewares[u]||(this._middlewares[u]=[]),l.push({stack:u,create:h,level:f??10,name:g}),l.sort(function(b,v){return b.level-v.level}),this},je.prototype.unuse=function(l){var u=l.stack,h=l.name,f=l.create;return u&&this._middlewares[u]&&(this._middlewares[u]=this._middlewares[u].filter(function(g){return f?g.create!==f:!!h&&g.name!==h})),this},je.prototype.open=function(){var l=this;return gn(Jt,function(){return Kp(l)})},je.prototype._close=function(){var l=this._state,u=Fn.indexOf(this);if(0<=u&&Fn.splice(u,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}l.isBeingOpened||(l.dbReadyPromise=new oe(function(h){l.dbReadyResolve=h}),l.openCanceller=new oe(function(h,f){l.cancelOpen=f}))},je.prototype.close=function(h){var u=(h===void 0?{disableAutoOpen:!0}:h).disableAutoOpen,h=this._state;u?(h.isBeingOpened&&h.cancelOpen(new de.DatabaseClosed),this._close(),h.autoOpen=!1,h.dbOpenError=new de.DatabaseClosed):(this._close(),h.autoOpen=this._options.autoOpen||h.isBeingOpened,h.openComplete=!1,h.dbOpenError=null)},je.prototype.delete=function(l){var u=this;l===void 0&&(l={disableAutoOpen:!0});var h=0<arguments.length&&typeof arguments[0]!="object",f=this._state;return new oe(function(g,b){function v(){u.close(l);var C=u._deps.indexedDB.deleteDatabase(u.name);C.onsuccess=Oe(function(){var I,R,L;I=u._deps,R=u.name,L=I.indexedDB,I=I.IDBKeyRange,go(L)||R===gs||mo(L,I).delete(R).catch(Ce),g()}),C.onerror=Mt(b),C.onblocked=u._fireOnBlocked}if(h)throw new de.InvalidArgument("Invalid closeOptions argument to db.delete()");f.isBeingOpened?f.dbReadyPromise.then(v):v()})},je.prototype.backendDB=function(){return this.idbdb},je.prototype.isOpen=function(){return this.idbdb!==null},je.prototype.hasBeenClosed=function(){var l=this._state.dbOpenError;return l&&l.name==="DatabaseClosed"},je.prototype.hasFailed=function(){return this._state.dbOpenError!==null},je.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(je.prototype,"tables",{get:function(){var l=this;return o(this._allTables).map(function(u){return l._allTables[u]})},enumerable:!1,configurable:!0}),je.prototype.transaction=function(){var l=function(u,h,f){var g=arguments.length;if(g<2)throw new de.InvalidArgument("Too few arguments");for(var b=new Array(g-1);--g;)b[g-1]=arguments[g];return f=b.pop(),[u,ue(b),f]}.apply(this,arguments);return this._transaction.apply(this,l)},je.prototype._transaction=function(l,u,h){var f=this,g=ce.trans;g&&g.db===this&&l.indexOf("!")===-1||(g=null);var b,v,C=l.indexOf("?")!==-1;l=l.replace("!","").replace("?","");try{if(v=u.map(function(R){if(R=R instanceof f.Table?R.name:R,typeof R!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return R}),l=="r"||l===no)b=no;else{if(l!="rw"&&l!=ro)throw new de.InvalidArgument("Invalid transaction mode: "+l);b=ro}if(g){if(g.mode===no&&b===ro){if(!C)throw new de.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");g=null}g&&v.forEach(function(R){if(g&&g.storeNames.indexOf(R)===-1){if(!C)throw new de.SubTransaction("Table "+R+" not included in parent transaction.");g=null}}),C&&g&&!g.active&&(g=null)}}catch(R){return g?g._promise(null,function(L,_){_(R)}):Me(R)}var I=function R(L,_,j,A,P){return oe.resolve().then(function(){var M=ce.transless||ce,O=L._createTransaction(_,j,L._dbSchema,A);if(O.explicit=!0,M={trans:O,transless:M},A)O.idbtrans=A.idbtrans;else try{O.create(),O.idbtrans._explicit=!0,L._state.PR1398_maxLoop=3}catch(B){return B.name===Vi.InvalidState&&L.isOpen()&&0<--L._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),L.close({disableAutoOpen:!1}),L.open().then(function(){return R(L,_,j,null,P)})):Me(B)}var N,U=kt(P);return U&&zn(),M=oe.follow(function(){var B;(N=P.call(O,O))&&(U?(B=Zt.bind(null,null),N.then(B,B)):typeof N.next=="function"&&typeof N.throw=="function"&&(N=ko(N)))},M),(N&&typeof N.then=="function"?oe.resolve(N).then(function(B){return O.active?B:Me(new de.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):M.then(function(){return N})).then(function(B){return A&&O._resolve(),O._completion.then(function(){return B})}).catch(function(B){return O._reject(B),Me(B)})})}.bind(null,this,b,v,g,h);return g?g._promise(b,I,"lock"):ce.trans?gn(ce.transless,function(){return f._whenReady(I)}):this._whenReady(I)},je.prototype.table=function(l){if(!m(this._allTables,l))throw new de.InvalidTable("Table ".concat(l," does not exist"));return this._allTables[l]},je);function je(l,u){var h=this;this._middlewares={},this.verno=0;var f=je.dependencies;this._options=u=r({addons:je.addons,autoOpen:!0,indexedDB:f.indexedDB,IDBKeyRange:f.IDBKeyRange,cache:"cloned"},u),this._deps={indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange},f=u.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var g,b,v,C,I,R={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Ce,dbReadyPromise:null,cancelOpen:Ce,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:u.autoOpen};R.dbReadyPromise=new oe(function(_){R.dbReadyResolve=_}),R.openCanceller=new oe(function(_,j){R.cancelOpen=j}),this._state=R,this.name=l,this.on=gr(this,"populate","blocked","versionchange","close",{ready:[Gi,Ce]}),this.on.ready.subscribe=W(this.on.ready.subscribe,function(_){return function(j,A){je.vip(function(){var P,M=h._state;M.openComplete?(M.dbOpenError||oe.resolve().then(j),A&&_(j)):M.onReadyBeingFired?(M.onReadyBeingFired.push(j),A&&_(j)):(_(j),P=h,A||_(function O(){P.on.ready.unsubscribe(j),P.on.ready.unsubscribe(O)}))})}}),this.Collection=(g=this,br(Pp.prototype,function(N,O){this.db=g;var A=Nl,P=null;if(O)try{A=O()}catch(U){P=U}var M=N._ctx,O=M.table,N=O.hook.reading.fire;this._ctx={table:O,index:M.index,isPrimKey:!M.index||O.schema.primKey.keyPath&&M.index===O.schema.primKey.name,range:A,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:P,or:M.or,valueMapper:N!==dr?N:null}})),this.Table=(b=this,br(Bl.prototype,function(_,j,A){this.db=b,this._tx=A,this.name=_,this.schema=j,this.hook=b._allTables[_]?b._allTables[_].hook:gr(null,{creating:[_p,Ce],reading:[Cp,dr],updating:[Ep,Ce],deleting:[Sp,Ce]})})),this.Transaction=(v=this,br(jp.prototype,function(_,j,A,P,M){var O=this;this.db=v,this.mode=_,this.storeNames=j,this.schema=A,this.chromeTransactionDurability=P,this.idbtrans=null,this.on=gr(this,"complete","error","abort"),this.parent=M||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new oe(function(N,U){O._resolve=N,O._reject=U}),this._completion.then(function(){O.active=!1,O.on.complete.fire()},function(N){var U=O.active;return O.active=!1,O.on.error.fire(N),O.parent?O.parent._reject(N):U&&O.idbtrans&&O.idbtrans.abort(),Me(N)})})),this.Version=(C=this,br(Hp.prototype,function(_){this.db=C,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(I=this,br(Gl.prototype,function(_,j,A){if(this.db=I,this._ctx={table:_,index:j===":id"?null:j,or:A},this._cmp=this._ascending=$e,this._descending=function(P,M){return $e(M,P)},this._max=function(P,M){return 0<$e(P,M)?P:M},this._min=function(P,M){return $e(P,M)<0?P:M},this._IDBKeyRange=I._deps.IDBKeyRange,!this._IDBKeyRange)throw new de.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(h.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(h.name,"'. Closing db now to resume the delete request.")),h.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(h.name,"') was blocked")):console.warn("Upgrade '".concat(h.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=$r(u.IDBKeyRange),this._createTransaction=function(_,j,A,P){return new h.Transaction(_,j,A,h._options.chromeTransactionDurability,P)},this._fireOnBlocked=function(_){h.on("blocked").fire(_),Fn.filter(function(j){return j.name===h.name&&j!==h&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(_)})},this.use(Wp),this.use(Xp),this.use(Yp),this.use(Vp),this.use(Gp);var L=new Proxy(this,{get:function(_,j,A){if(j==="_vip")return!0;if(j==="table")return function(M){return Rs(h.table(M),L)};var P=Reflect.get(_,j,A);return P instanceof Bl?Rs(P,L):j==="tables"?P.map(function(M){return Rs(M,L)}):j==="_createTransaction"?function(){return Rs(P.apply(this,arguments),L)}:P}});this.vip=L,f.forEach(function(_){return _(h)})}var Os,Ct=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Zp=(Eo.prototype.subscribe=function(l,u,h){return this._subscribe(l&&typeof l!="function"?l:{next:l,error:u,complete:h})},Eo.prototype[Ct]=function(){return this},Eo);function Eo(l){this._subscribe=l}try{Os={indexedDB:i.indexedDB||i.mozIndexedDB||i.webkitIndexedDB||i.msIndexedDB,IDBKeyRange:i.IDBKeyRange||i.webkitIDBKeyRange}}catch{Os={indexedDB:null,IDBKeyRange:null}}function lc(l){var u,h=!1,f=new Zp(function(g){var b=kt(l),v,C=!1,I={},R={},L={get closed(){return C},unsubscribe:function(){C||(C=!0,v&&v.abort(),_&&nn.storagemutated.unsubscribe(A))}};g.start&&g.start(L);var _=!1,j=function(){return to(P)},A=function(M){Ts(I,M),yo(R,I)&&j()},P=function(){var M,O,N;!C&&Os.indexedDB&&(I={},M={},v&&v.abort(),v=new AbortController,N=(function(U){var B=jn();try{b&&zn();var V=Xt(l,U);return V=b?V.finally(Zt):V}finally{B&&Nn()}})(O={subscr:M,signal:v.signal,requery:j,querier:l,trans:null}),Promise.resolve(N).then(function(U){h=!0,u=U,C||O.signal.aborted||(I={},(function(B){for(var V in B)if(m(B,V))return;return 1})(R=M)||_||(nn(vr,A),_=!0),to(function(){return!C&&g.next&&g.next(U)}))},function(U){h=!1,["DatabaseClosedError","AbortError"].includes(U?.name)||C||to(function(){C||g.error&&g.error(U)})}))};return setTimeout(j,0),L});return f.hasValue=function(){return h},f.getValue=function(){return u},f}var vn=Kt;function To(l){var u=rn;try{rn=!0,nn.storagemutated.fire(l),xo(l,!0)}finally{rn=u}}w(vn,r(r({},as),{delete:function(l){return new vn(l,{addons:[]}).delete()},exists:function(l){return new vn(l,{addons:[]}).open().then(function(u){return u.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(l){try{return u=vn.dependencies,h=u.indexedDB,u=u.IDBKeyRange,(go(h)?Promise.resolve(h.databases()).then(function(f){return f.map(function(g){return g.name}).filter(function(g){return g!==gs})}):mo(h,u).toCollection().primaryKeys()).then(l)}catch{return Me(new de.MissingAPI)}var u,h},defineClass:function(){return function(l){c(this,l)}},ignoreTransaction:function(l){return ce.trans?gn(ce.transless,l):l()},vip:bo,async:function(l){return function(){try{var u=ko(l.apply(this,arguments));return u&&typeof u.then=="function"?u:oe.resolve(u)}catch(h){return Me(h)}}},spawn:function(l,u,h){try{var f=ko(l.apply(h,u||[]));return f&&typeof f.then=="function"?f:oe.resolve(f)}catch(g){return Me(g)}},currentTransaction:{get:function(){return ce.trans||null}},waitFor:function(l,u){return u=oe.resolve(typeof l=="function"?vn.ignoreTransaction(l):l).timeout(u||6e4),ce.trans?ce.trans.waitFor(u):u},Promise:oe,debug:{get:function(){return Lt},set:function(l){Rl(l)}},derive:x,extend:c,props:w,override:W,Events:gr,on:nn,liveQuery:lc,extendObservabilitySet:Ts,getByKeyPath:G,setByKeyPath:T,delByKeyPath:function(l,u){typeof u=="string"?T(l,u,void 0):"length"in u&&[].map.call(u,function(h){T(l,h,void 0)})},shallowClone:q,deepClone:Z,getObjectDiff:Co,cmp:$e,asap:re,minKey:-1/0,addons:[],connections:Fn,errnames:Vi,dependencies:Os,cache:yn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(l){return parseInt(l)}).reduce(function(l,u,h){return l+u/Math.pow(10,2*h)})})),vn.maxKey=$r(vn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(nn(vr,function(l){rn||(l=new CustomEvent(ao,{detail:l}),rn=!0,dispatchEvent(l),rn=!1)}),addEventListener(ao,function(l){l=l.detail,rn||To(l)}));var qn,rn=!1,cc=function(){};return typeof BroadcastChannel<"u"&&((cc=function(){(qn=new BroadcastChannel(ao)).onmessage=function(l){return l.data&&To(l.data)}})(),typeof qn.unref=="function"&&qn.unref(),nn(vr,function(l){rn||qn.postMessage(l)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(l){if(!Kt.disableBfCache&&l.persisted){Lt&&console.debug("Dexie: handling persisted pagehide"),qn?.close();for(var u=0,h=Fn;u<h.length;u++)h[u].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(l){!Kt.disableBfCache&&l.persisted&&(Lt&&console.debug("Dexie: handling persisted pageshow"),cc(),To({all:new Je(-1/0,[[]])}))})),oe.rejectionMapper=function(l,u){return!l||l instanceof Re||l instanceof TypeError||l instanceof SyntaxError||!l.name||!Al[l.name]?l:(u=new Al[l.name](u||l.message,l),"stack"in l&&$(u,"stack",{get:function(){return this.inner.stack}}),u)},Rl(Lt),r(Kt,Object.freeze({__proto__:null,Dexie:Kt,liveQuery:lc,Entity:zl,cmp:$e,PropModSymbol:Ht,PropModification:wr,replacePrefix:function(l,u){return new wr({replacePrefix:[l,u]})},add:function(l){return new wr({add:l})},remove:function(l){return new wr({remove:l})},default:Kt,RangeSet:Je,mergeRanges:Cr,rangesOverlap:Xl}),{default:Kt}),Kt})})(Ks)),Ks.exports}var Dm=Om();const Vo=Am(Dm),kc=Symbol.for("Dexie"),ni=globalThis[kc]||(globalThis[kc]=Vo);if(Vo.semVer!==ni.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Vo.semVer} and ${ni.semVer}`);const{liveQuery:Ia,mergeRanges:qC,rangesOverlap:HC,RangeSet:KC,cmp:VC,Entity:GC,PropModSymbol:WC,PropModification:YC,replacePrefix:QC,add:JC,remove:XC}=ni,Pm="easydb";function St(e,t){return`${e}::${t}`}let Ps=null;function ri(){if(Ps)return Ps;const e=new ni(Pm);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),s=(await n.toArray()).filter(a=>a.workspaceId==null);if(s.length===0)return;const i=(await t.table("workspaces").toArray()).map(a=>a.id),o=i.length>0?i:["default"];for(const a of s){for(const c of o)await n.put({key:St(c,a.key),workspaceId:c,name:a.key,value:a.value});await n.delete(a.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Lm()),Ps={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Ps}function Lm(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Sr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>Aa(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const s=await e.get(t);if(!s)throw new Error(`patch: doc id=${t} vanished after update`);return s},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=Ia(()=>e.toArray()).subscribe({next:s=>t(s)});return()=>r.unsubscribe()}}}function Mm(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const s=Object.entries(n);return r.filter(i=>Aa(i,s)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(s=>({...s,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const i=await e.get(n);if(!i)throw new Error(`row patch: row ${n} vanished after update`);return i},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},async count(){return e.where("tableId").equals(t).count()},subscribe(n){const s=Ia(()=>e.where("tableId").equals(t).toArray()).subscribe({next:i=>n(i)});return()=>s.unsubscribe()}}}function jm(e,t){const n=s=>({...s,workspaceId:t(),key:St(t(),s.name),name:s.name,value:s.value}),r=()=>e.where("workspaceId").equals(t());return{async find(s){const i=await r().toArray();if(!s||Object.keys(s).length===0)return i;const o=Object.entries(s);return i.filter(a=>Aa(a,o))},async findOne(s){return await e.get(St(t(),s))??null},async insert(s){const i=n(s);return await e.add(i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>n(o));return await e.bulkAdd(i),i},async upsert(s){const i=n(s);return await e.put(i),i},async patch(s,i){const o=St(t(),s);if(await e.update(o,i)===0)throw new Error(`setting patch: no setting ${s}`);const c=await e.get(o);if(!c)throw new Error(`setting patch: ${s} vanished after update`);return c},async remove(s){await e.delete(St(t(),s))},async bulkRemove(s){s.length!==0&&await e.bulkDelete(s.map(i=>St(t(),i)))},subscribe(s){const o=Ia(()=>r().toArray()).subscribe({next:a=>s(a)});return()=>o.unsubscribe()}}}function Aa(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Nm(e,t){return{workspaces:Sr(e.workspaces),tables:Sr(e.tables),settings:jm(e.settings,t),plugins:Sr(e.plugins),viewTemplates:Sr(e.viewTemplates),viewInstances:Sr(e.viewInstances),rows:n=>Mm(e.rows,n)}}function zm(e){const{base:t,providers:n,tableById:r,ctx:s}=e,i=new Map;return{...t,rows(o){const a=r(o),c=a?.source;if(c){const d=n.get(c.type);if(d){const p=JSON.stringify(c),m=i.get(o);if(m&&m.key===p)return m.coll;const w=d.create(a,s);return i.set(o,{key:p,coll:w}),w}}return i.delete(o),t.rows(o)}}}function _e(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Le(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Wn(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function cn(e,t){const n=new Set([...e].map(s=>s.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let s=2;;s++){const i=`${r}-${s}`;if(!n.has(i.toLowerCase()))return i}}function Fm(e){const t=async(r,s)=>(await e.find()).filter(i=>i.workspaceId===r&&i.id!==s).map(i=>i.name),n=(r,s)=>{const i=cn(s,r.name);return i===r.name?r:(console.warn(`[store] "${r.name}" is taken in this workspace — stored as "${i}"`),{...r,name:i,code:Le(i)})};return{...e,async insert(r){return e.insert(n(r,await t(r.workspaceId,r.id)))},async bulkInsert(r){if(r.length===0)return e.bulkInsert(r);const s=new Set((await e.find()).filter(o=>o.workspaceId===r[0].workspaceId).map(o=>o.name)),i=r.map(o=>{const a=n(o,s);return s.add(a.name),a});return e.bulkInsert(i)},async upsert(r){return e.upsert(n(r,await t(r.workspaceId,r.id)))},async patch(r,s){if(typeof s.name!="string")return e.patch(r,s);const i=await e.findOne(r);if(!i)return e.patch(r,s);const o=cn(await t(i.workspaceId,r),s.name);return o===s.name?e.patch(r,s):(console.warn(`[store] "${s.name}" is taken in this workspace — renamed to "${o}"`),e.patch(r,{...s,name:o,code:Le(o)}))}}}function Ra(e,t,n,r,s){let i=0,o=!1;const a=()=>{const d=++i;n().then(p=>{o||d!==i||r(p)})};a();const c=e.onChanged((d,p)=>{d===t&&(p&&s&&p!==s||a())});return()=>{o=!0,c()}}function Er(e,t){const n=r=>e.find(t,r);return{find:r=>n(r),async findOne(r){return await e.findOne(t,r)??null},async insert(r){return await e.insert(t,r),r},async bulkInsert(r){return r.length===0?[]:(await e.bulkInsert(t,r),r)},async upsert(r){return await e.upsert(t,r),r},async patch(r,s){return await e.patch(t,r,s)},async remove(r){await e.remove(t,r)},async bulkRemove(r){r.length!==0&&await e.bulkRemove(t,r)},subscribe(r){return Ra(e,t,()=>n(),r)}}}const Oa=2e4;function Um(e,t){const n=s=>e.find("rows",{...s,tableId:t},Oa),r=e.queryRows?.bind(e);return{find:s=>n(s),...r?{query:s=>r(t,s)}:{},async findOne(s){const i=await e.findOne("rows",s);return i&&i.tableId===t?i:null},async insert(s){const i={...s,tableId:t};return await e.insert("rows",i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>({...o,tableId:t}));return await e.bulkInsert("rows",i),i},async upsert(s){const i={...s,tableId:t};return await e.upsert("rows",i),i},async patch(s,i){return await e.patch("rows",s,i)},async remove(s){await e.remove("rows",s)},async bulkRemove(s){s.length!==0&&await e.bulkRemove("rows",s)},subscribe(s){return Ra(e,"rows",()=>n(),s,t)},...e.countRows?{count:()=>e.countRows(t)}:{},watch(s){return s(),e.onChanged((i,o)=>{i==="rows"&&(o&&o!==t||s())})}}}function Bm(e,t){const n=s=>({...s,workspaceId:t(),key:St(t(),s.name),name:s.name,value:s.value}),r=s=>e.find("settings",{...s,workspaceId:t()});return{find:s=>r(s),async findOne(s){return await e.findOne("settings",St(t(),s))??null},async insert(s){const i=n(s);return await e.insert("settings",i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>n(o));return await e.bulkInsert("settings",i),i},async upsert(s){const i=n(s);return await e.upsert("settings",i),i},async patch(s,i){const o=St(t(),s);return await e.patch("settings",o,i)},async remove(s){await e.remove("settings",St(t(),s))},async bulkRemove(s){s.length!==0&&await e.bulkRemove("settings",s.map(i=>St(t(),i)))},subscribe(s){return Ra(e,"settings",()=>r(),s)}}}function qm(e,t){return{workspaces:Er(e,"workspaces"),tables:Er(e,"tables"),settings:Bm(e,t),plugins:Er(e,"plugins"),viewTemplates:Er(e,"viewTemplates"),viewInstances:Er(e,"viewInstances"),rows:n=>Um(e,n)}}function Hm(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const s of r)try{s(n)}catch(i){console.error(`[event:${String(t)}] listener threw`,i)}}}}const yt=Se`
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
`;function vt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const Cc=new WeakSet;function $t(e,t){if(Cc.has(t))return;Cc.add(t);let n=0,r=0,s=0,i=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",c=>{if(c.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=c.clientX,r=c.clientY;const p=e.getBoundingClientRect();s=p.left,i=p.top,t.setPointerCapture(c.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",c=>{if(!o)return;const d=c.clientX-n,p=c.clientY-r,m=-e.offsetWidth+80,w=window.innerWidth-80,y=0,$=window.innerHeight-40,x=Math.max(m,Math.min(w,s+d)),E=Math.max(y,Math.min($,i+p));e.style.position="fixed",e.style.left=`${x}px`,e.style.top=`${E}px`,e.style.margin="0"});const a=c=>{if(o){o=!1;try{t.releasePointerCapture(c.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)}var Km=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,pd=(e,t,n,r)=>{for(var s=r>1?void 0:r?Vm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Km(t,n,s),s};let ft=class extends ke{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&$t(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return k`
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
        `}}};ft.instance=null;ft.styles=[yt,Se`
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
    `];pd([F()],ft.prototype,"current",2);ft=pd([Ee("host-dialogs")],ft);const xt=Se`
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
`;var Gm=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,md=(e,t,n,r)=>{for(var s=r>1?void 0:r?Wm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Gm(t,n,s),s};let Vt=class extends ke{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Vt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Vt.instance===this&&(Vt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return k`
      ${this.toasts.map(e=>k`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Qm(e.kind)}</span>
            <span class="body"> ${e.title?k`<strong>${e.title}</strong>`:""}${Ym(e.message)} </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Vt.instance=null;Vt.styles=[xt,Se`
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
    `];md([F()],Vt.prototype,"toasts",2);Vt=md([Ee("toast-host")],Vt);function Ym(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,s;for(;(s=t.exec(e))!==null;)s.index>r&&n.push(e.slice(r,s.index)),n.push({url:s[0]}),r=s.index+s[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(i=>typeof i=="string"?i:k`<a href=${i.url} target="_blank" rel="noopener noreferrer">${i.url}</a>`)}function Qm(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}const Jm=new Set(["html-preview"]);function Xm(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function Nt(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function Ro(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function Zm(e){return{registerHeaderButton:t=>Nt(e.headerButtons,t),registerFooterButton:t=>Nt(e.footerButtons,t),registerTableButton:t=>Nt(e.tableButtons,t),registerColumnEditorAction:t=>Nt(e.columnEditorActions,t),registerImporter:t=>Nt(e.importers,t),registerConnector:t=>Nt(e.connectors,t),registerExporter:t=>Nt(e.exporters,t),registerUrlSource:t=>Nt(e.urlSources,t),registerDropHandler:t=>Nt(e.dropHandlers,t),registerCellRenderer:(t,n)=>Ro(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>Ro(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>Ro(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>Nt(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:eg}}const eg={async alert(e,t){const n=ft.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=ft.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=ft.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=ft.instance;if(r)return r.choice(e,t,n);const s=window.prompt(`${e}

Options: ${t.join(", ")}`);return s&&t.includes(s)?s:null},toast(e,t){const n=Vt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Da="/easydbaccess/settings.json",gd="/easydbaccess/secrets.txt";function Jr(e){try{return globalThis.localStorage??null}catch{return null}}function mi(e){const t=Jr();if(!t)return{};const n=t.getItem(Da);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function si(e,t){return mi()[e]}function tg(e,t,n){const r=Jr();if(!r)return;const s=mi();s[e]=t,r.setItem(Da,JSON.stringify(s))}function ng(e,t){const n=Jr();if(!n)return;const r=mi();e in r&&(delete r[e],n.setItem(Da,JSON.stringify(r)))}function Vs(e,t){return e in mi()}function Ur(e){return Jr()?.getItem(gd)??""}function bd(e,t){Jr()?.setItem(gd,e)}function Qn(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf(":");if(s<0)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim();i&&(t[i]=o)}return t}function Pa(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const s=t[r.trim()];return s===void 0?n:s})}function wd(e){return typeof e=="string"&&e.includes("${secret:")}function _c(e){return typeof e=="string"&&e.trim()!==""&&!wd(e)}const rg=/(^|[_:.\-\s])(tokens?|secrets?|passwords?|passwd|pwd|api[_-]?keys?|apikeys?|auth|credentials?|pat)($|[_:.\-\s])/i;function Sc(e){return rg.test(e)}function sg(e,t){if((Sc(e.name)||t?.(e.name)===!0)&&_c(e.value))return!0;const r=e.value;return r===null||typeof r!="object"||Array.isArray(r)?!1:Object.entries(r).some(([s,i])=>Sc(s)&&_c(i))}function ig(e,t){const n=[],r=[];for(const s of e)sg(s,t)?r.push(s.name):n.push(s);return{kept:n,withheld:r}}function og(e,t,n){return typeof t!="string"||t===""||!wd(e)?!1:Pa(e,n)===t}function ag(e){const t=Zm(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),s=cg(e.store,e.registries),i={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:i,registerRowSource:r,settings:s,backend:{fetch:async(o,a)=>{const c=await lg(e.store),d=a?.body instanceof ArrayBuffer;if(!c||d)return globalThis.fetch(o,a);const p={url:o};return a?.method&&(p.method=a.method),a?.headers&&(p.headers=a.headers),typeof a?.body=="string"&&(p.body=a.body),globalThis.fetch(`${c}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})},async saveFile(o,a,c){const d=typeof a=="string"?new Blob([a],{type:c??"application/octet-stream"}):a,p=URL.createObjectURL(d),m=document.createElement("a");m.href=p,m.download=o,m.rel="noopener",document.body.appendChild(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(p),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function lg(e){const t="server-sync:url";let n=Vs(t)?si(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:Pa(n,Qn(Ur())).replace(/\/+$/,"")}function cg(e,t){const n=(a,c)=>`${a}:${c}`,r=(a,c)=>t.settings.get(a)?.fields.find(d=>d.key===c),s=a=>typeof a=="string"?Pa(a,Qn(Ur())):a,i=async a=>Vs(a)?si(a):(await e.settings.findOne(a))?.value,o=async(a,c)=>og(await i(a),c,Qn(Ur()));return{async get(a,c){const d=n(a,c);let p;if(Vs(d))p=si(d);else{const m=await e.settings.findOne(d);p=m?m.value:r(a,c)?.default}return s(p)},async set(a,c,d,p){const m=n(a,c);if(await o(m,d))return;(p??r(a,c)?.scope??"workspace")==="user"?(tg(m,d),await e.settings.remove(m).catch(()=>{})):(await e.settings.upsert({name:m,value:d}),ng(m))},async placement(a,c){const d=n(a,c);return Vs(d)?"user":await e.settings.findOne(d)?"workspace":null}}}function Ec(e,t){return e.has(t)?e.get(t)!=="0":!1}function ug(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return Ec(e,"safemode")?"all-optional":Ec(e,"safemode1")?"url-plugins":"off"}const _t=ug();function La(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const s=r[0],i=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[s,i,...o].join("/")}`}}return e}function yd(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function vd(e){const t=La(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function $d(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const s=[];let i=0;for(;;){const{done:c,value:d}=await r.read();if(c)break;d&&(s.push(d),i+=d.length,t?.(Math.min(1,i/n)))}const o=new Uint8Array(i);let a=0;for(const c of s)o.set(c,a),a+=c.length;return new TextDecoder().decode(o)}return await e.text()}const dg=50*1024*1024;function Tc(e){try{return new URL(e).host}catch{return e}}function Gt(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function hg(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function Ic(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function fg(e,t,n={}){const r=La(t),s=n.slowMs??2e3;let i=setTimeout(()=>{i=void 0,n.onSlow?.()},s);const o=()=>{i!==void 0&&(clearTimeout(i),i=void 0)},a=n.maxBytes===null?null:n.maxBytes??dg,c=async d=>{let p;try{p=await e.backend.fetch(d)}catch(w){throw new Error(`Could not reach ${Tc(d)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${w.message}]`,{cause:w})}if(!p.ok){const w=await hg(p);throw new Error(`HTTP ${p.status} ${p.statusText||""}`.trim()+(w?` — ${w}`:""))}const m=Number(p.headers.get("content-length"));if(a!==null&&Number.isFinite(m)&&m>a)throw p.body?.cancel().catch(()=>{}),new Error(`Response is ${Ic(m)}, over the ${Ic(a)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await $d(p,n.onProgress)}catch(w){throw new Error(`Failed reading the response body from ${Tc(d)}: ${w.message}`,{cause:w})}};try{const d=await c(r);if(yd(d)){const p=vd(r);if(p)return await c(p)}return d}finally{o()}}async function Xr(e,t,n,r={}){const{TopProgress:s}=await Pe(async()=>{const{TopProgress:o}=await import("./top-progress-8B6rqTNy.js");return{TopProgress:o}},[]),i={handle:null};try{return await fg(e,t,{onSlow:()=>{i.handle=s.begin(n)},onProgress:o=>i.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{i.handle?.done()}}const xd="Re-Create: columns and rows from the file",kd="Re-Load: replace the rows, keep the columns",Cd="Append the rows",_d="A new table",pg={[xd]:"recreate",[kd]:"reload",[Cd]:"append",[_d]:"new"};async function gi(e,t){const n=t.reason??`Import "${t.fileName}" into "${t.tableName}"?`,r=await e.ui.dialogs.choice(n,[xd,kd,Cd,_d],t.title);return r?pg[r]??null:null}function Sd(e,t){return e.length!==t.length?!1:e.every((n,r)=>{const s=t[r],i=[s.field,s.label,Wn(s.field),Wn(s.label??"")],o=n.trim().toLowerCase();return i.some(a=>a.trim().toLowerCase()===o)||Wn(n)===s.field})}const mg=/^[+-]?\d+$/;function bi(e){const t=e.trim();return mg.test(t)?!Number.isSafeInteger(Number(t)):!1}function wi(e){let t="",n=0,r=!1;for(;n<e.length;){const s=e[n];if(r){t+=s,s==="\\"?(n++,n<e.length&&(t+=e[n])):s==='"'&&(r=!1),n++;continue}if(s==='"'){r=!0,t+=s,n++;continue}if(s==="-"||s>="0"&&s<="9"){let i=n;for(e[i]==="-"&&i++;i<e.length&&e[i]>="0"&&e[i]<="9";)i++;const o=i,a=e[i],c=a!=="."&&a!=="e"&&a!=="E",d=e.slice(n,o);c&&bi(d)?t+=`"${d}"`:t+=d,n=o;continue}t+=s,n++}return t}const Ls=e=>e.trim().toLowerCase();function ZC(e,t){const n=new Map;for(const i of t)n.set(Ls(i.field),i.field),n.has(Ls(i.label))||n.set(Ls(i.label),i.field);const r=new Set,s=e.map(()=>"");return e.forEach((i,o)=>{const a=n.get(Ls(i));a&&!r.has(a)&&(s[o]=a,r.add(a))}),e.forEach((i,o)=>{if(s[o])return;const a=t[o]?.field;a&&!r.has(a)&&(s[o]=a,r.add(a))}),s}function gg(e,t,n,r){const s=new Map(t.map(i=>[i.field,i.type]));return e.map(i=>{const o={};return n.forEach((a,c)=>{if(!a)return;const d=s.get(a);d!==void 0&&(o[a]=r(i[c]??"",d))}),o})}function bg(e){const t=e.trim();return t.length>=2&&t.startsWith("[")&&t.endsWith("]")}function Ed(e){if(!bg(e))return null;try{const t=JSON.parse(e.trim());return Array.isArray(t)?t:null}catch{return null}}function Tt(e){if(e==null)return[];if(Array.isArray(e))return Oo(e);if(typeof e!="string")return Oo([e]);const t=Ed(e);return t?Oo(t):wg(e)}function Ac(e){return Tt(e).join(", ")}function yi(e){return Array.isArray(e)?!0:typeof e=="string"&&Ed(e)!==null}function Oo(e){const t=[];for(const n of e){if(n==null)continue;const r=typeof n=="string"?n.trim():typeof n=="object"?JSON.stringify(n)??"":String(n);r!==""&&t.push(r)}return t}function wg(e){const t=[];let n="",r=!1,s=!1;const i=()=>{const o=s?n:n.trim();o!==""&&t.push(o),n="",r=!1,s=!1};for(let o=0;o<e.length;o++){const a=e[o];if(a==='"'){if(r&&e[o+1]==='"'){n+='"',o++;continue}r=!r,s=!0;continue}if(a===","&&!r){i();continue}n+=a}return i(),t}function yg(e){return e==null||String(e).trim()===""}function Pn(e){const t=[];let n="",r=!1,s=!1,i=!1,o=!1,a=!1,c=!1,d=!0,p=!1;const m=()=>{const w=i?n:n.trim();if(r||o){const y={term:w,negate:o};a&&(y.prefix=!0),c&&(y.exact=!0),p&&t.length>0&&(y.and=!0),t.push(y)}p=!1,n="",r=!1,s=!1,i=!1,o=!1,a=!1,c=!1,d=!0};for(let w=0;w<e.length;w++){const y=e[w];if(!s&&/\s/.test(y)){const $=/^\s+(AND|OR)(?=[\s,]|$)/.exec(e.slice(w));if($&&(r||o)){m(),p=$[1]==="AND",w+=$[0].length-1;continue}}if(y==='"'){if(s&&e[w+1]==='"'){n+='"',r=!0,w++;continue}s=!s,i=!0,r=!0,d=!1;continue}if(y===","&&!s){m();continue}if(y==="!"&&!s&&d&&!o&&!a&&!c){o=!0;continue}if(y==="="&&!s&&d&&!a&&!c){c=!0;continue}if(y==="^"&&!s&&d&&!a&&!c){a=!0;continue}d&&!s&&/\s/.test(y)||(d=!1),n+=y,/\s/.test(y)||(r=!0)}return m(),t}function vg(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")||/\s(AND|OR)(?=[\s,]|$)/.test(e)}function an(e){let t="";return e.forEach((n,r)=>{const s=n.term===""&&n.negate?"":vg(n.term)?`"${n.term.replace(/"/g,'""')}"`:n.term,i=n.exact?"=":n.prefix?"^":"",o=(n.negate?"!":"")+i+s;r===0?t=o:t+=n.and?` AND ${o}`:`,${o}`}),t}function $g(e){const t=[];for(const n of e){const r=t[t.length-1];n.and&&r?r.push(n):t.push([n])}return t}function Rc(e,t){const n=String(e??"").toLowerCase(),r=t.term.toLowerCase();return t.exact?n===r:t.prefix?n.startsWith(r):n.includes(r)}function Oc(e,t){return t?t.length===0:yg(e)}function Go(e,t,n){const r=t.term;return r.trim()===""||!t.prefix&&!t.exact&&r.toUpperCase()==="NULL"?Oc(e,n):n?n.some(s=>Rc(s,t)):Rc(e,t)}function xg(e,t,n){return t.every(r=>r.negate?!Go(e,r,n):Go(e,r,n))}function Br(e,t,n){const r=$g(Pn(t));if(r.length===0)return!0;const s=n?.type==="array"?Tt(e):null,i=r.filter(a=>a.length===1&&a[0].negate);for(const a of i)if(Go(e,a[0],s))return!1;const o=r.filter(a=>!(a.length===1&&a[0].negate));return o.length===0?!0:o.some(a=>xg(e,a,s))}const kg={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Cg(e){e.ui.registerImporter(Tg),Pe(()=>import("./csv-import-options-f_JPquRE.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=Fg(t).filter(Ug);if(r.length===0)return!1;if(t.preventDefault(),r.length===1&&await Eg(e,t,r[0]))return!0;const s=r.length===1?`"${r[0].name}"`:`${r.length} files`,i=await e.ui.dialogs.choice(`Import ${s} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[Sg,Dc],"Import CSV");if(!i)return!0;const o=i===Dc?async a=>{const{editColumnNames:c}=await Pe(async()=>{const{editColumnNames:d}=await Promise.resolve().then(()=>Tx);return{editColumnNames:d}},void 0);return c(a)}:void 0;for(const a of r)await Ig(e,a,o);return!0})}function Wo(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Gt(e.url):"pasted"}function _g(e){return za(Wo(e))||"imported"}const Sg="Import directly",Dc="Edit columns first";async function Eg(e,t,n){const{tableIdAtNode:r}=await Pe(async()=>{const{tableIdAtNode:a}=await Promise.resolve().then(()=>$l);return{tableIdAtNode:a}},void 0),s=r(t.target);if(!s)return!1;const i=await e.store.tables.findOne(s);if(!i)return!1;if(i.readonly===!0||i.source!=null)return e.ui.dialogs.toast(`"${i.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import CSV"}),!1;const o=await gi(e,{fileName:n.name,tableName:i.name,title:"Import CSV"});return o?o==="new"?!1:(await Ma(e,await n.text(),n.name,Td(s,i.name,o)),!0):!0}function Td(e,t,n){const r={target:{tableId:e,mode:n}};return n==="recreate"||(r.mapFields=async(s,i,o)=>{if(Sd(s,i))return i.map(c=>c.field);const{mapColumnsToTable:a}=await Pe(async()=>{const{mapColumnsToTable:c}=await import("./column-map-dialog-CSI5XvAK.js");return{mapColumnsToTable:c}},[]);return a(s,i,t,o)}),r}const Tg={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:_g(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await Ad(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${Wo(n)}…`):r=n.text??"";const i=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??Fa(Wo(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...i?{separator:i}:{}},a=e.targetColumns;if(a&&a.length>0){yield{rows:ja(r,o).rows.map(m=>{const w={};for(let y=0;y<a.length;y++){const $=a[y];w[$.field]=Na(m[y]??"",$.type)}return w})};return}const c=ir(r,o);yield{columns:c.columns,rows:c.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function Ig(e,t,n){await Ma(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function Ma(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("csv-import: no active workspace");const i=za(n||"imported")||"imported",o=r.separator??Fa(n),a=r.target?await e.store.tables.findOne(r.target.tableId):null,c=a??(await e.store.tables.find()).find($=>$.workspaceId===s&&$.name===i);let d,p,m=r.mapFields;if(a&&r.target)p=r.target.mode,d=a.id;else if(c){const $=await gi(e,{fileName:n||i,tableName:c.name,title:"CSV import",reason:`A table named "${i}" already exists in this workspace.`});if(!$)return;p=$,p==="new"?d=_e():(d=c.id,m=Td(c.id,c.name,p).mapFields)}else p="new",d=_e();e.events.emit("import:before",{source:"csv",tableId:d});let w;if(p==="new"||p==="recreate"){const $=ir(t,{maxRows:r.maxRows,separator:o});let x=$.columns,E=$.rows;if(r.editColumns){const S=await r.editColumns(x);if(S===null)return;E=Bg(E,x,S),x=S}if(r.maxRows!=null&&(E=E.slice(0,r.maxRows)),p==="recreate"){const S=e.store.rows(d),D=await S.find();await S.bulkRemove(D.map(W=>W.id)),await e.store.tables.patch(d,{columns:x,updatedAt:Date.now()})}else await e.store.tables.insert({id:d,workspaceId:s,name:i,code:Wn(i),columns:x,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()});w=E.map(S=>({id:_e(),tableId:d,data:S,updatedAt:Date.now()}))}else{const $=c.columns,x=ja(t,{maxRows:r.maxRows,separator:o}),E=r.maxRows!=null?x.rows.slice(0,r.maxRows):x.rows;let S=$.map(D=>D.field);if(m){const D=await m(x.header,$,x.rows[0]??[]);if(D===null)return;S=D}if(w=gg(E,$,S,Na).map(D=>({id:_e(),tableId:d,data:D,updatedAt:Date.now()})),p==="reload"){const D=e.store.rows(d),W=await D.find();await D.bulkRemove(W.map(z=>z.id))}}await e.store.rows(d).bulkInsert(w),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:w.length})}function ja(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??Rd(n),s=Od(n,r,Id(t.maxRows));if(s.length===0)return{header:[],rows:[]};const i=s[0],o=s.slice(1).filter(a=>!(a.length===1&&a[0]===""));return{header:i,rows:o}}function Id(e){return e!=null?e+1:void 0}async function Ad(e,t){const r=new TextDecoder,s=t+1;let i="",o=0,a=!1,c=0;for(;c<e.size;){const d=new Uint8Array(await e.slice(c,c+1048576).arrayBuffer());c+=1048576;const p=r.decode(d,{stream:!0});for(let m=0;m<p.length;m++){const w=p[m];if(w==='"')a=!a;else if(w===`
`&&!a&&(o+=1,o>=s))return i+p.slice(0,m+1)}i+=p}return i}function ir(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??Rd(n),s=Od(n,r,Id(t.maxRows));if(s.length===0)return{columns:[],rows:[]};const i=s[0],o=s.slice(1).filter(y=>!(y.length===1&&y[0]==="")),a=i.map((y,$)=>Og(y,$)),c=Ld(a.map(y=>y.field)),d=o.map(y=>{const $={};for(let x=0;x<c.length;x++)$[c[x]]=y[x]??"";return $}),p=a.map((y,$)=>y.type?y.type:Dg(d.map(x=>x[c[$]]??"").filter(x=>x.length>0))),m=a.map((y,$)=>{const x=p[$]??"string",E={field:c[$],label:y.label,type:x},S=Rg(x),D=y.renderer??S;return D&&(E.renderer=D),y.default!==void 0&&(E.default=y.default),y.max!=null&&(E.max=y.max),y.unique&&(E.unique=!0),y.notnull&&(E.notnull=!0),y.hidden&&(E.hidden=!0),E}),w=d.map(y=>{const $={};for(let x=0;x<c.length;x++){const E=c[x],S=p[x]??"string";$[E]=Na(y[E]??"",S)}return $});return{columns:m,rows:w}}const Ag=new Set(["string","number","boolean","date","datetime","array"]),Pc={color:"color",image:"image"};function Rg(e){if(e==="date"||e==="datetime"||e==="boolean")return e;if(e==="array")return"tags"}function Og(e,t){const n=e.trim();if(!n.includes(":"))return{field:Wn(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),s=Wn(r[0]||`col_${t+1}`),i=(r[1]??r[0]??"").trim()||s,o={field:s,label:i},a=(r[2]??"").trim();a&&(Ag.has(a)?o.type=a:Pc[a]&&(o.type="string",o.renderer=Pc[a]));const c=(r[3]??"").trim();c&&(o.default=c);const d=(r[4]??"").trim();if(d){const m=Number(d);Number.isFinite(m)&&m>0&&(o.max=m)}const p=(r[5]??"").toLowerCase();return p.includes("u")&&(o.unique=!0),p.includes("n")&&(o.notnull=!0),p.includes("h")&&(o.hidden=!0),o}function Rd(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const i of t)i in n&&(n[i]+=1);let r=",",s=-1;for(const i of[",",";","	"])(n[i]??0)>s&&(r=i,s=n[i]??0);return r}function Od(e,t,n){const r=[];let s=[],i="",o=!1;for(let a=0;a<e.length;a++){const c=e[a];if(o)c==='"'?e[a+1]==='"'?(i+='"',a++):o=!1:i+=c;else if(c==='"')o=!0;else if(c===t)s.push(i),i="";else if(c===`
`||c==="\r"){if(c==="\r"&&e[a+1]===`
`&&a++,s.push(i),r.push(s),s=[],i="",n!=null&&r.length>=n)return r}else i+=c}return(i.length>0||s.length>0)&&(s.push(i),r.push(s)),r}function Dg(e){return e.length===0?"string":e.every(yi)?"array":e.every(Lg)?"boolean":e.every(Mg)?"number":e.every(Ng)?"datetime":e.every(jg)?"date":"string"}const Pg=/^(true|false|yes|no|0|1)$/i;function Lg(e){return Pg.test(e.trim())}function Mg(e){const t=e.trim();if(t===""||bi(t))return!1;const n=Number(t);return Number.isFinite(n)}function jg(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Ng(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Na(e,t){const n=e.trim();switch(t){case"array":return n===""?null:n;case"number":{if(n==="")return null;if(bi(n))return n;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return Dd(n);case"datetime":return zg(n);default:return e}}function Dd(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),s=parseInt(t[2],10),i=t[3];let o=parseInt(i,10);i.length===2&&(o+=2e3);let a,c;return r>12?(a=r,c=s):s>12?(c=r,a=s):(a=r,c=s),`${o.toString().padStart(4,"0")}-${c.toString().padStart(2,"0")}-${a.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function zg(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${Dd(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const s=new Date(e);if(!Number.isNaN(s.getTime())){const i=s.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}return e}function Fg(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}const Pd=/\.(csv|tsv|tab)$/i;function za(e){return e.replace(Pd,"")}function Fa(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function Ug(e){return!!(Pd.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function Ld(e){const t=new Map,n=new Set,r=[];for(const s of e){let i=s,o=t.get(s)??0;for(;n.has(i);)o+=1,i=`${s}_${o+1}`;t.set(s,o),n.add(i),r.push(i)}return r}function Bg(e,t,n){return e.map(r=>{const s={};for(let i=0;i<t.length;i++)s[n[i].field]=r[t[i].field];return s})}const qg=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Ld,importCsvText:Ma,init:Cg,meta:kg,parseCsv:ir,parseCsvRaw:ja,readCsvHead:Ad,separatorForName:Fa,stripDelimitedExt:za},Symbol.toStringTag,{value:"Module"})),Hg={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},Kg={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Ua(e,t)}};function Vg(e){e.ui.registerExporter(Kg)}function Ua(e,t){const n=e.columns.map(i=>i.field),r=e.columns.map(i=>Lc(i.label??i.field)),s=t.map(i=>n.map(o=>Lc(Gg(i.data[o]))).join(","));return[r.join(","),...s].join(`\r
`)}function Gg(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Lc(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Wg=Object.freeze(Object.defineProperty({__proto__:null,init:Vg,meta:Hg,serializeCsv:Ua},Symbol.toStringTag,{value:"Module"}));var Yg=Object.defineProperty,Qg=Object.getOwnPropertyDescriptor,dn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Qg(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Yg(t,n,s),s};function qr(e,t={}){return(Ve.instance??Md()).open(e,t).then(r=>r?.map(s=>s.index)??null)}function Jg(e,t={}){return(Ve.instance??Md()).open(e,t)}function Md(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Xg(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Ve=class extends ke{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.modes=[],this.offerViewModes=!1,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=[];this.selected.forEach((n,r)=>{if(!n)return;const s=(this.items[r]?.kind??"table")==="view";t.push(s&&this.offerViewModes?{index:r,mode:this.modes[r]??"projection"}:{index:r})}),t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Ve.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ve.instance===this&&(Ve.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.offerViewModes=t.offerViewModes??!1,this.modes=e.map(()=>t.defaultViewMode??"projection"),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e,t){this.selected=this.items.map((n,r)=>t&&(n.kind??"table")!==t?this.selected[r]??!1:e)}setMode(e,t){const n=this.modes.slice();n[e]=t,this.modes=n}indicesOf(e){return this.items.map((t,n)=>(t.kind??"table")===e?n:-1).filter(t=>t>=0)}get sectioned(){return this.items.some(e=>e.kind!==void 0)}get selectedCount(){return this.selected.filter(Boolean).length}renderSection(e,t){const n=this.indicesOf(e);if(n.length===0)return k``;const r=n.filter(s=>this.selected[s]).length;return k`
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
          <span class="size">${Xg(e.size)}</span>
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
    `}};Ve.instance=null;Ve.styles=[yt,Se`
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
    `];dn([F()],Ve.prototype,"items",2);dn([F()],Ve.prototype,"selected",2);dn([F()],Ve.prototype,"heading",2);dn([F()],Ve.prototype,"message",2);dn([F()],Ve.prototype,"confirmLabel",2);dn([F()],Ve.prototype,"modes",2);dn([F()],Ve.prototype,"offerViewModes",2);Ve=dn([Ee("table-select-dialog")],Ve);const Zg=Object.freeze(Object.defineProperty({__proto__:null,get TableSelectDialog(){return Ve},chooseDatabaseObjects:Jg,chooseTables:qr},Symbol.toStringTag,{value:"Module"}));function Ba(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let s=0;s<e.length;s++)r[t[s].field]=n[e[s].field];return r}}function Mc(e,t){if(t.length===0)return null;const n=new Set(t.map(s=>s.from)),r={};for(const s of Object.keys(e))n.has(s)||(r[s]=e[s]);for(const{from:s,to:i}of t)Object.prototype.hasOwnProperty.call(e,s)&&(r[i]=e[s]);return r}function vi(e,t,n=[]){const r=new Set(e.map(a=>a.field)),s=new Set(n),i=[...e],o=[];for(const a of t)r.has(a.field)||s.has(a.field)||(i.push(a),o.push(a.field),r.add(a.field));return{columns:i,newFields:o}}async function qa(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function jd(e,t,n,r){const{workspaceId:s,importerId:i,target:o,maxRows:a}=r;let c,d,p,m=!1,w=0,y,$=null;const x=S=>e.store.rows(S),E=async S=>{if(m)return!0;if(o.kind==="new"){let D=S.columns??[];if(r.editColumns){const z=await r.editColumns(D);if(z===null)return!1;$=Ba(D,z),D=z}c=_e(),d=cn(await qa(e,s),t);const W={id:c,workspaceId:s,name:d,code:Le(d),columns:D,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(W),p=!0}else{const D=await e.store.tables.findOne(o.tableId);if(!D)throw new Error("The table to import into no longer exists.");if(c=D.id,d=D.name,p=!1,o.kind==="overwrite"){const W=await x(c).find();await x(c).bulkRemove(W.map(z=>z.id))}if(S.columns?.length){const W=vi(D.columns,S.columns,D.deletedColumns??[]);W.newFields.length>0&&await e.store.tables.patch(c,{columns:W.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:i,tableId:c}),m=!0,!0};for await(const S of n){if(a!=null&&w>=a)break;if(!await E(S))return null;S.totalCount!=null&&(y=S.totalCount);let D=S.rows;if(a!=null&&w+D.length>a&&(D=D.slice(0,a-w)),D.length===0)continue;$&&(D=D.map($));const W=Date.now(),z=D.map(re=>({id:_e(),tableId:c,data:re,updatedAt:W}));await x(c).bulkInsert(z),w+=z.length,r.onProgress?.(w,y)}return!m&&!await E({})?null:(e.events.emit("import:after",{source:i,tableId:c,rowCount:w}),{tableId:c,tableName:d,rowCount:w,created:p})}function jc(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(s,i)=>Xr(e,s,i??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function eb(e,t){if(t.length<=1)return t;const n=await qr(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function tb(e,t,n,r,s){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const i=t.reference(n,r);let o=[];for await(const d of t.read(n,r)){o=d.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const a=cn(await qa(e,s),r.name),c=_e();return await e.store.tables.insert({id:c,workspaceId:s,name:a,code:Le(a),columns:o,view:"table",source:i,readonly:!0,updatedAt:Date.now()}),{tableId:c,tableName:a,rowCount:0,created:!0}}async function $i(e,t,n,r){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=jc(e,r),o=await t.list(i,n);if(o.length===0)throw new Error("No tables found at that source.");const a=await eb(t,o);if(a===null)return{landed:[],failed:[],cancelled:!0};const c=[],d=[];for(const p of a)try{if(r.mode==="reference"){c.push(await tb(e,t,i,p,s));continue}const m=r.target;let w;m.kind!=="new"&&(w=(await e.store.tables.findOne(m.tableId))?.columns);const y=jc(e,r,{...w?{targetColumns:w}:{}}),$=t.read(y,p),x=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),E=await jd(e,p.name,$,{workspaceId:s,importerId:t.id,target:m,...x?{origin:x}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(E===null)return{landed:c,failed:d,cancelled:!0};c.push(E)}catch(m){d.push({name:p.name,error:m?.message??String(m)})}return{landed:c,failed:d,cancelled:!1}}async function Nd(e,t,n){const r=new Map;if(n.length===0)return r;const s=(await e.find()).filter(a=>a.workspaceId===t),i=new Map(s.map(a=>[a.name,a])),o=new Map(s.map(a=>[a.id,a]));for(const a of n){if(!nb(a))continue;const c=i.get(a.name)??o.get(a.id),d=c?.id??a.id;c&&r.set(a.id,c.id);const p=c?c.builtin:a.builtin,m={...a,id:d,workspaceId:t};p===void 0?delete m.builtin:m.builtin=p,await e.upsert(m),i.set(m.name,m),o.set(m.id,m)}return r}function nb(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const rb={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function sb(e){e.ui.registerImporter(Fd),e.ui.registerDropHandler(async t=>{const r=pb(t).filter(mb);if(r.length===0)return!1;t.preventDefault();for(const s of r)await ib(e,t,s)||await ab(e,s);return!0})}async function ib(e,t,n){const{tableIdAtNode:r}=await Pe(async()=>{const{tableIdAtNode:p}=await Promise.resolve().then(()=>$l);return{tableIdAtNode:p}},void 0),s=r(t.target);if(!s)return!1;const i=await e.store.tables.findOne(s);if(!i)return!1;if(i.readonly===!0||i.source!=null)return e.ui.dialogs.toast(`"${i.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import JSON"}),!1;const o=await n.text();let a;try{a=JSON.parse(wi(o))}catch{return!1}const c=Zr(a,Gs(n.name));if(c.length===0)return!1;if(c.length>1)return e.ui.dialogs.toast(`"${n.name}" holds ${c.length} tables — drop it outside a window to import them.`,{kind:"warning",title:"Import JSON"}),!0;const d=await gi(e,{fileName:n.name,tableName:i.name,title:"Import JSON"});return d?d==="new"?!1:(await zd(e,i,c[0],d),!0):!0}async function zd(e,t,n,r){const s=e.store.rows(t.id);e.events.emit("import:before",{source:"json",tableId:t.id});let i;if(r==="recreate")await e.store.tables.patch(t.id,{columns:n.columns,updatedAt:Date.now()}),i=n.rows;else{const a=n.columns.map(d=>d.field);let c=t.columns.map(d=>d.field);if(!Sd(a,t.columns)){const{mapColumnsToTable:d}=await Pe(async()=>{const{mapColumnsToTable:w}=await import("./column-map-dialog-CSI5XvAK.js");return{mapColumnsToTable:w}},[]),p=a.map(w=>String(n.rows[0]?.[w]??"")),m=await d(a,t.columns,t.name,p);if(m===null)return;c=m}i=n.rows.map(d=>{const p={};return a.forEach((m,w)=>{const y=c[w];y&&(p[y]=d[m])}),p})}if(r!=="append"){const a=await s.find();await s.bulkRemove(a.map(c=>c.id))}const o=i.map(a=>({id:_e(),tableId:t.id,data:a,updatedAt:Date.now()}));await s.bulkInsert(o),e.events.emit("import:after",{source:"json",tableId:t.id,rowCount:o.length})}function Ha(e){return qe(e)?Yo(e)||Array.isArray(e.tables)?!0:Bd(e):!1}function ob(e){return e.kind==="file"&&e.file?Gs(e.file.name):e.kind==="url"&&e.url?Gs(Gt(e.url)):Gs(e.name??"imported")}const Fd={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Gt(t.url)}…`):n=t.text??"";const r=ob(t);let s;try{s=JSON.parse(wi(n))}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`,{cause:o})}const i=Zr(s,r);return i.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:i.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function Gs(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function ab(e,t){const n=await t.text();let r;try{r=JSON.parse(wi(n))}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(Ha(r)){await Ka(e,n,t.name);return}const s=await $i(e,Fd,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=s.landed.reduce((o,a)=>o+a.rowCount,0);s.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${i.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Ka(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let i;try{i=JSON.parse(wi(t))}catch(E){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${E.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",a=Zr(i,o);if(a.length===0)return;let c=a;if(a.length>1){const E=await qr(a.map(S=>({name:S.name,size:S.rows.length})),{title:"Import tables",message:`"${n}" contains ${a.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!E)return;c=E.map(S=>a[S])}const d=(await e.store.tables.find()).filter(E=>E.workspaceId===s),p=new Set(c.map(E=>E.name)),m=d.filter(E=>p.has(E.name));let w;if(m.length===0&&c.length===1)w="append-new";else if(c.length===1&&m.length===1){const E=m[0],S=await gi(e,{fileName:n,tableName:E.name,title:"JSON import",reason:`A table named "${E.name}" already exists in this workspace.`});if(!S)return;if(S==="reload"||S==="append"){await zd(e,E,c[0],S);return}w=S==="recreate"?"overwrite-matching":"append-new"}else{const E=m.length>0?[`Overwrite matching (${m.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],S=await e.ui.dialogs.choice(`Importing ${c.length} table${c.length===1?"":"s"} from "${n}".${m.length>0?`

${m.length} table${m.length===1?"":"s"} share a name with existing data.`:""}`,E,"JSON import");if(!S)return;S.startsWith("Overwrite matching")?w="overwrite-matching":S==="Replace entire workspace"?w="replace-workspace":w="append-new"}const y=2e3,$=c.reduce((E,S)=>E+(S.source?0:Math.min(S.rows.length,r.maxRows??1/0)),0);let x=null;if($>=y){const{TopProgress:E}=await Pe(async()=>{const{TopProgress:S}=await import("./top-progress-8B6rqTNy.js");return{TopProgress:S}},[]);x=E.begin(`Importing ${n}…`)}try{if(w==="replace-workspace")for(const z of d){const re=e.store.rows(z.id),G=await re.find();await re.bulkRemove(G.map(T=>T.id)),await e.store.tables.remove(z.id)}const E=new Map(d.map(z=>[z.name,z])),S=new Map,D=[];let W=0;for(const z of c){const re=z.source,G=z.origin??(!re&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let T;const q=w==="overwrite-matching"?E.get(z.name):void 0;let J=z.columns,ue=z.rows;if(r.editColumns&&!q&&!re){const H=await r.editColumns(J,z.name);if(H===null)continue;ue=fb(ue,J,H),J=H}if(q){if(T=q.id,!q.source){const H=e.store.rows(T),Z=await H.find();await H.bulkRemove(Z.map(K=>K.id))}await e.store.tables.patch(T,{columns:J,...z.title?{title:z.title}:{},...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...z.filters?{filters:z.filters}:{},...z.labelColumn?{labelColumn:z.labelColumn}:{},...z.info?{info:z.info}:{},...z.deletedColumns?{deletedColumns:z.deletedColumns}:{},...z.readonly?{readonly:!0}:{},source:re??void 0,origin:G??void 0,updatedAt:Date.now()})}else{T=_e(),e.events.emit("import:before",{source:"json",tableId:T});const H=await e.store.tables.insert({id:T,workspaceId:s,name:z.name,code:Le(z.name),columns:J,view:"table",...z.title?{title:z.title}:{},...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{},...z.filters?{filters:z.filters}:{},...z.labelColumn?{labelColumn:z.labelColumn}:{},...z.info?{info:z.info}:{},...z.deletedColumns?{deletedColumns:z.deletedColumns}:{},...z.readonly?{readonly:!0}:{},...re?{source:re}:{},...G?{origin:G}:{},updatedAt:Date.now()});H.name!==z.name&&D.push([z.name,H.name])}S.set(z.name,T);let pe=0;if(!re){const H=e.store.rows(T),K=(r.maxRows!=null?ue.slice(0,r.maxRows):ue).map(se=>({id:_e(),tableId:T,data:se,updatedAt:Date.now()}));await H.bulkInsert(K),pe=K.length,W+=pe,x?.fraction($>0?W/$:1)}e.events.emit("import:after",{source:"json",tableId:T,rowCount:pe})}await lb(e,i,s,S,w==="replace-workspace"),D.length>0&&e.ui.dialogs.toast(D.map(([z,re])=>`“${z}” came in as “${re}”`).join(`
`),{kind:"info",title:"Names must be unique"})}finally{x?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function lb(e,t,n,r,s){if(!qe(t))return;const i=t,o=Array.isArray(i.viewTemplates)?i.viewTemplates:[],a=Array.isArray(i.viewInstances)?i.viewInstances:[];if(o.length===0&&a.length===0)return;if(s){const d=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===n);await e.store.viewInstances.bulkRemove(d.map(p=>p.id))}const c=await Nd(e.store.viewTemplates,n,o);for(const d of a){if(!qe(d)||typeof d.id!="string")continue;const p=(d.tableName?r.get(d.tableName):void 0)??d.tableId;if(!p)continue;const m=c.get(d.templateId)??d.templateId;await e.store.viewInstances.upsert({...d,workspaceId:n,tableId:p,templateId:m})}}function Zr(e,t){if(qe(e)&&Yo(e))return Nc(e);if(qe(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const s of n.tables){if(Ud(s)){r.push(zc(s));continue}qe(s)&&Yo(s)&&r.push(...Nc(s))}return r}if(Bd(e))return[zc(e)];if(Array.isArray(e)){const n=e.filter(qe);return n.length===0?[]:[{name:t,...Fc(n)}]}return qe(e)?[{name:t,...Fc([e])}]:[]}function Yo(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!qe(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function Nc(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!qe(r))continue;const s=r;if(!Array.isArray(s.dataArray)||!Array.isArray(s.columns))continue;const i=n.replace(/\.table\.json$/,""),o=s.columns.map(p=>cb(p)),a=o.map(p=>p.field),c=s.dataArray.filter(p=>Array.isArray(p)).map(p=>{const m={};for(let w=0;w<a.length;w++)m[a[w]]=p[w];return m}),d={name:i,columns:o,rows:c};if(s.elementRect&&typeof s.elementRect.x=="number"&&typeof s.elementRect.y=="number"){const p=s.elementRect;d.windowGeometry={x:p.x,y:p.y,w:p.width??600,h:p.height??400,z:p.zIndex??100,minimized:!!p.minimized,maximized:!!p.maximized}}typeof s.sortColumn=="number"&&s.sortColumn>=0&&s.sortColumn<a.length&&(d.sortColumn=a[s.sortColumn],d.sortAsc=(s.sortDirection??"asc")!=="desc"),t.push(d)}return t}function cb(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",s={field:t,label:n,type:r};return e.isUnique&&(s.unique=!0),e.isNotNull&&(s.notnull=!0),s}function Ud(e){return qe(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Bd(e){return Ud(e)&&Array.isArray(e.rows)}function zc(e){const t=e,n=qe(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,s=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,i=typeof t.title=="string"?t.title:void 0,o=qe(t.filters)?t.filters:void 0,a=typeof t.labelColumn=="string"?t.labelColumn:void 0,c=qe(t.info)?t.info:void 0,d=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(y=>typeof y=="string"):void 0,p=t.readonly===!0?!0:void 0,m=qe(t.source)&&typeof t.source.type=="string"?t.source:void 0,w=qe(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(ub),rows:Array.isArray(e.rows)?e.rows.filter(qe):[],...i?{title:i}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:s??!0}:{},...o?{filters:o}:{},...a?{labelColumn:a}:{},...c?{info:c}:{},...d?{deletedColumns:d}:{},...p?{readonly:p}:{},...m?{source:m}:{},...w?{origin:w}:{}}}function ub(e){if(!qe(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",s=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(s=s??r,r="string");const i={field:n,label:String(t.label??n),type:r};return s&&(i.renderer=s),typeof t.script=="string"&&(i.script=t.script),t.readonly===!0&&(i.readonly=!0),i}function Fc(e){const t=new Set;for(const s of e)for(const i of Object.keys(s))t.add(i);return{columns:Array.from(t).map(s=>({field:s,label:s,type:db(e.map(i=>i[s]))})),rows:e}}function db(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(yi)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&hb(n))?"date":"string"}function hb(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function fb(e,t,n){const r=Ba(t,n);return r?e.map(r):e}function qe(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function pb(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}function mb(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const gb=Object.freeze(Object.defineProperty({__proto__:null,init:sb,isWorkspaceDump:Ha,meta:rb,parsedToTables:Zr,restoreWorkspaceDump:Ka},Symbol.toStringTag,{value:"Module"}));function Va(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Hr(e){return e.replace(/&(?![a-zA-Z][a-zA-Z0-9]*;|#\d+;|#x[0-9a-fA-F]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function qd(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function Ws(e){const t=e.trim();return t===""?null:/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)?/^(https?|mailto|tel):/i.test(t)?t:null:t}function bb(e){const t=qd(e).trim(),n=t.replace(/[^!-~]/g,"");return Ws(n)===null?null:t}const Hd="script|style|iframe|object|embed|noscript|template|svg|math|frame|frameset",wb=new RegExp(`<(${Hd})\\b(?:"[^"]*"|'[^']*'|[^"'>])*>[\\s\\S]*?<\\/\\s*\\1\\s*>`,"gi"),yb=new RegExp(`<(?:${Hd})\\b[\\s\\S]*$`,"i"),vb=new Set(["br","hr","img","source","wbr","col"]),Kd=new Set(["a","abbr","audio","b","blockquote","br","caption","cite","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","h1","h2","h3","h4","h5","h6","hr","i","img","ins","kbd","li","mark","ol","p","pre","s","samp","small","source","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul","var","video","wbr"]),$b=new Set(["title","dir","lang"]),xb={a:new Set(["href"]),audio:new Set(["src","controls"]),col:new Set(["span"]),colgroup:new Set(["span"]),img:new Set(["src","alt","width","height"]),ol:new Set(["start","reversed"]),source:new Set(["src","type"]),td:new Set(["colspan","rowspan","headers"]),th:new Set(["colspan","rowspan","scope","headers"]),time:new Set(["datetime"]),video:new Set(["src","controls","poster","width","height"])},kb=new Set(["href","src","poster"]),Cb=/([a-zA-Z_:][a-zA-Z0-9_:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Vd=/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s(?:"[^"]*"|'[^']*'|[^"'>])*)?)\s*\/?>/g;function _b(e,t,n){const r=t.toLowerCase();if(!Kd.has(r))return"";if(e)return vb.has(r)?"":`</${r}>`;const s=xb[r];let i=`<${r}`,o=!1,a=!1;for(const c of n.matchAll(Cb)){const d=c[1].toLowerCase();if(!$b.has(d)&&!s?.has(d))continue;const p=c[2]??c[3]??c[4];if(p===void 0){i+=` ${d}`;continue}if(kb.has(d)){const m=bb(p);if(m===null)continue;d==="href"&&(o=!0),d==="src"&&(a=!0),i+=` ${d}="${Hr(m)}"`;continue}i+=` ${d}="${Hr(p)}"`}return r==="a"&&o&&(i+=' target="_blank" rel="noopener noreferrer"'),(r==="img"||r==="source")&&!a?"":`${i}>`}function Gd(e){return e.replace(/<!--[\s\S]*?-->/g,"").replace(wb,"").replace(yb,"").replace(/<[!?][^>]*>/g,"")}const Sb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","circle","cite","code","col","colgroup","data","datalist","dd","defs","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","line","link","main","map","mark","marquee","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","path","picture","polygon","polyline","pre","progress","q","rect","rp","rt","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","use","var","video","wbr"]);function Wd(e,t,n,r){const s=n.toLowerCase();return Kd.has(s)||Sb.has(s)||s.includes("-")?_b(t,n,r):Va(e)}function Eb(e){const t=Gd(e);let n="",r=0;for(const s of t.matchAll(Vd))n+=Hr(t.slice(r,s.index)),n+=Wd(s[0],s[1]==="/",s[2],s[3]),r=s.index+s[0].length;return n+Hr(t.slice(r))}const Tb=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Yd(e){return Tb.test(e)}function Ib(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return qd(e.replace(/<[^>]*>/g,""))}function Ab(e){return(Yd(e)?Ib(e):e).replace(/\s+/g," ").trim()}const Tr="",Rb=/\uE000(\d+)\uE000/g,Qo=/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)\s*$/,Jo=/^(#{1,6})\s+(.*)$/,Ga=/^\s*([-*_])(\s*\1){2,}\s*$/,Xo=/^\s*>/,Qd=/^\s*(?:[-*+]|\d+[.)])\s+/,Jd=/^\s*\|?[\s:|-]+\|[\s:|-]*$/,Ob="address|article|aside|blockquote|caption|col|colgroup|dd|details|div|dl|dt|figcaption|figure|footer|form|h[1-6]|header|hr|iframe|legend|li|main|nav|ol|p|pre|script|section|style|summary|table|tbody|td|tfoot|th|thead|tr|ul",Xd=new RegExp(`^\\s*</?(?:${Ob})(?:[\\s/>]|$)`,"i");function Db(e){return Qo.test(e)||Jo.test(e)||Ga.test(e)||Xo.test(e)||Qd.test(e)||Xd.test(e)}function Kn(e){const t=[];let n=e.replaceAll(Tr,"").replace(/(`+)([\s\S]*?)\1/g,(r,s,i)=>(t.push(`<code>${Va(i)}</code>`),`${Tr}${t.length-1}${Tr}`));return n=Gd(n).replace(Vd,(r,s,i,o)=>{const a=Wd(r,s==="/",i,o);return a===""?"":(t.push(a),`${Tr}${t.length-1}${Tr}`)}),n=Hr(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const a=Ws(i);return a===null?r:`<img src="${a}" alt="${s}"${o?` title="${o}"`:""}>`}),n=n.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const a=Ws(i);return a===null?r:`<a href="${a}"${o?` title="${o}"`:""} target="_blank" rel="noopener noreferrer">${s}</a>`}),n=n.replace(/&lt;((?:https?|mailto):[^\s&]+)&gt;/g,(r,s)=>{const i=Ws(s);return i===null?r:`<a href="${i}" target="_blank" rel="noopener noreferrer">${i}</a>`}),n=n.replace(/~~([\s\S]+?)~~/g,"<del>$1</del>"),n=n.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__([\s\S]+?)__/g,"<strong>$1</strong>"),n=n.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g,"$1<em>$2</em>"),n=n.replace(/(^|[\s(])_(?!\s)([^_]+?)_(?=$|[\s).,;:!?])/g,"$1<em>$2</em>"),n=n.replace(/ {2,}\n/g,`<br>
`),n.replace(Rb,(r,s)=>t[Number(s)]??"")}function Do(e){return e.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}const Pb=e=>{const t=e.startsWith(":"),n=e.endsWith(":");return t&&n?' style="text-align:center"':n?' style="text-align:right"':t?' style="text-align:left"':""},Lb=[/^ {0,3}#{1,6}\s+\S/,/^ {0,3}>[ \t]+\S/,/^ {0,3}[-*+][ \t]+\S/,/^ {0,3}\d+[.)][ \t]+\S/,/^ {0,3}(?:```|~~~)/,Ga],Mb=[/\*\*(?!\s)[^*\n]+\*\*/,/~~(?!\s)[^~\n]+~~/,/`[^`\n]+`/,/!?\[[^\]\n]*\]\([^)\s]+\)/];function jb(e){return typeof e!="string"||e.trim()===""?null:!Nb.test(e)&&Uc(e)?"markdown":Yd(e)?"html":Uc(e)?"markdown":null}const Nb=/^\s*<\/?[a-z][a-z0-9]*(\s|\/?>)/i;function Uc(e){if(typeof e!="string"||e.trim()==="")return!1;const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.some(n=>Lb.some(r=>r.test(n)))||Mb.some(n=>n.test(e))?!0:t.some((n,r)=>r>0&&Jd.test(n)&&n.includes("-")&&(t[r-1]??"").includes("|"))}function xi(e){if(e==null)return"";const t=typeof e=="string"?e:String(e);if(t.trim()==="")return"";const n=t.replace(/\r\n?/g,`
`).split(`
`),r=[];let s=0;const i=o=>{const a=[];for(;s<n.length&&o(n[s]);)a.push(n[s++]);return a};for(;s<n.length;){const o=n[s];if(o.trim()===""){s++;continue}const a=Qo.exec(o);if(a){const p=a[1].slice(0,3);s++;const m=i(y=>!y.trim().startsWith(p));s<n.length&&s++;const w=a[2]?` class="language-${a[2]}"`:"";r.push(`<pre><code${w}>${Va(m.join(`
`))}</code></pre>`);continue}if(Xd.test(o)){const p=i(w=>w.trim()!==""),m=Eb(p.join(`
`));m.trim()!==""&&r.push(m);continue}const c=Jo.exec(o);if(c){const p=c[1].length;r.push(`<h${p}>${Kn(c[2].replace(/\s+#+\s*$/,""))}</h${p}>`),s++;continue}if(Ga.test(o)){r.push("<hr>"),s++;continue}if(Xo.test(o)){const p=i(m=>Xo.test(m)||m.trim()!=="");r.push(`<blockquote>${xi(p.map(m=>m.replace(/^\s*>\s?/,"")).join(`
`))}</blockquote>`);continue}if(o.includes("|")&&s+1<n.length&&Jd.test(n[s+1])&&n[s+1].includes("-")){const p=Do(o),m=Do(n[s+1]).map(Pb);s+=2;const w=i(x=>x.trim()!==""&&x.includes("|")),y=p.map((x,E)=>`<th${m[E]??""}>${Kn(x)}</th>`).join(""),$=w.map(x=>`<tr>${Do(x).map((E,S)=>`<td${m[S]??""}>${Kn(E)}</td>`).join("")}</tr>`);r.push(`<table><thead><tr>${y}</tr></thead><tbody>${$.join("")}</tbody></table>`);continue}if(Qd.test(o)){const p=i(m=>m.trim()!==""&&!Qo.test(m)&&!Jo.test(m));r.push(Zd(p));continue}const d=i(p=>p.trim()!==""&&!Db(p));if(d.length===0){r.push(`<p>${Kn(o)}</p>`),s++;continue}r.push(`<p>${Kn(d.join(`
`))}</p>`)}return r.join(`
`)}function Zd(e){const t=[];let n=null,r=null;for(const o of e){const a=/^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$/.exec(o);if(!a){t[t.length-1]?.text.push(o.trim());continue}const c=a[1].length;if(r??=c,c>r&&t.length>0){t[t.length-1].children.push(o.slice(Math.min(c,r+2)));continue}n??=a[3]!==void 0,t.push({text:[a[4]],children:[],indent:c})}const s=n?"ol":"ul",i=t.map(o=>`<li>${Kn(o.text.join(`
`))}${o.children.length>0?Zd(o.children):""}</li>`).join("");return`<${s}>${i}</${s}>`}const Zo={markdownToHtml:xi},eh=Object.keys(Zo),Bc=new Map;function zb(e){const t=Bc.get(e);if(t)return t;const n=new Function("row",...eh,"easydb",`${e}
return render(row);`);return Bc.set(e,n),n}function Fb(){return[...eh.map(e=>Zo[e]),Zo]}function Wa(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=zb(e)}catch(r){return{ok:!1,label:"compile error",message:qc(r)}}try{return{ok:!0,value:n(t,...Fb())}}catch(r){return{ok:!1,label:"runtime error",message:qc(r)}}}function qc(e){return e instanceof Error?e.message:String(e)}const Ub=new Set(["rowid"]);function Ya(e){return Ub.has(e.trim().toLowerCase())}function Bb(e){const t=new Map,n=(s,i)=>{if(!s||!i)return;let o=t.get(s);o||t.set(s,o=new Set),o.add(i)};for(const s of e.columns)s.from.kind==="source"&&n(s.from.alias,s.from.field);for(const s of e.sources)for(const i of s.join?.on??[])n(s.alias,i.field),n(i.eqAlias,i.eqField);const r={};for(const s of e.sources)r[s.alias]=[...t.get(s.alias)??[]];return r}function qb(e,t){const n=e.sources[0];if(!n)return{rows:[],provenance:new Map};let s=(t[n.alias]??[]).map(d=>({[n.alias]:d}));for(let d=1;d<e.sources.length;d++){const p=e.sources[d];if(!p)continue;const m=t[p.alias]??[],w=p.join,y=[];for(const $ of s){const x=w?m.filter(E=>w.on.every(S=>Kb(E.data[S.field],$[S.eqAlias]?.data[S.eqField]))):[];if(x.length>0)for(const E of x)y.push({...$,[p.alias]:E});else w?.type==="left"&&y.push({...$,[p.alias]:void 0})}s=y}const i=[],o=new Map,a=new Map,c=e.limit!=null&&e.limit>0?e.limit:1/0;for(const d of s){if(i.length>=c)break;const p=d[n.alias];if(!p)continue;const m=Hb(e.columns,d);if(!Vb(m,e.filters))continue;const w=a.get(p.id)??0;a.set(p.id,w+1);const y=`${p.id}#${w}`,$={};for(const[x,E]of Object.entries(d))E&&($[x]=E.id);o.set(y,$),i.push({id:y,tableId:"",data:m,updatedAt:Gb(d)})}return{rows:i,provenance:o}}function Hb(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const s=t[r.from.alias]?.data[r.from.field];n[r.field]=s===void 0?null:s}for(const r of e)if(r.from.kind==="script"){const s=Wa(r.from.script,n);n[r.field]=s.ok?s.value:void 0}return n}function Kb(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function Vb(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const s=e[n];if(!(s==null?"":String(s)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function Gb(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function ki(e){const t=new Set(e.sources.map(r=>r.alias)),n=new Set;for(const r of e.columns)r.from.kind==="source"&&t.has(r.from.alias)&&n.add(r.field);return n}function th(e,t,n=[],r=[]){const s=ki(e),i=new Map(n.map(p=>[p.field,p])),o=new Set(r),a=new Map;for(const p of e.columns)!o.has(p.field)&&!a.has(p.field)&&a.set(p.field,p);const c=[];for(const p of n)a.has(p.field)&&!c.includes(p.field)&&c.push(p.field);for(const p of a.keys())c.includes(p)||c.push(p);const d=[];for(const p of c){const m=a.get(p);if(!m)continue;const w=i.get(m.field);let y;if(w)y={...w};else if(m.from.kind==="source"){const $=m.from,x=(t[$.alias]??[]).find(E=>E.field===$.field);y=x?{...x,field:m.field}:{field:m.field,label:m.label??m.field,type:m.type??"string"},Ya($.field)&&(y.hidden=!0)}else y={field:m.field,label:m.label??m.field,type:m.type??"string"},y.script=m.from.script;s.has(m.field)?delete y.readonly:y.readonly=!0,d.push(y)}return d}function Wb(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function Yb(e,t){const n=Wb(e),r={},s=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],i=[];for(const o of s){const a=n.get(o.field);a&&i.push({field:a,asc:o.asc})}if(i.length>0){r.sortBy=i;const o=i[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[a,c]of Object.entries(t.filters)){const d=n.get(a);d&&c&&(o[d]=c)}Object.keys(o).length>0&&(r.filters=o)}return r}function Qb(e,t){return t.get(e.tableName)}function Jb(e,t){const n=new Map(t.map(i=>[i.id,i])),r=new Map;for(const i of t)r.has(i.name)||r.set(i.name,i);const s=(i,o)=>{if(o.has(i))return!0;const a=n.get(i);if(a?.source?.type!=="projection")return!1;const c=a.source.config;if(!c||!Array.isArray(c.sources))return!1;const d=new Set(o).add(i);for(const p of c.sources){const m=Qb(p,r);if(m&&s(m.id,d))return!0}return!1};return s(e,new Set)}const Ir=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),Po=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,Hc=e=>e==="id"||e.endsWith("id");function Xb(e,t){const n=Ir(e.field),r=Ir(t.field);if(!n||!r)return 0;const s=Ir(e.table)===Ir(t.table);if(n===r)return s||n==="id"?0:n.endsWith("id")?9:7;const i=(a,c,d)=>{if(a!=="id"||!d.endsWith("id")||d.length<=2)return 0;const p=d.slice(0,-2),m=Ir(c);return p===m||p===Po(m)||Po(p)===Po(m)?9:5},o=Math.max(i(n,e.table,r),i(r,t.table,n));return o>0?o:e.isPk&&Hc(r)||t.isPk&&Hc(n)?6:0}function Zb(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),s=new Set(e.pks??[]),i=o=>{let a=null,c=0;for(const d of t){const p=new Set(d.pks??[]);for(const m of e.fields)for(const w of d.fields){if(o&&r.has(`${d.alias}\0${w}`))continue;const y=Xb({table:e.tableName,field:m,isPk:s.has(m)},{table:d.tableName,field:w,isPk:p.has(w)});y>c&&(c=y,a={thisField:m,otherAlias:d.alias,otherField:w})}}return a};return i(!0)??i(!1)}function ew(e){const t=e.lastIndexOf("#");return t>=0?e.slice(0,t):e}function tw(e,t,n,r){const s=e.columns.find(c=>c.field===n);if(!s||s.from.kind!=="source")return null;const i=s.from.alias;if(!e.sources.some(c=>c.alias===i))return null;const o=e.sources[0]?.alias===i,a=r?.[i]??(o?ew(t):void 0);return a?{alias:i,rowId:a,field:s.from.field}:null}async function Qa(e,t,n,r){const s=n.spec.sources.map(p=>({source:p,table:r.resolve(p.tableName)}));if(s.some(p=>!p.table))return null;const i={...n.spec,sources:s.map(({source:p,table:m})=>({...p,tableName:m.name}))},o={};for(const{source:p,table:m}of s)o[p.alias]=m?.columns??[];const a=th(i,o,[],[]),c=cn(r.taken,n.name),d={id:_e(),workspaceId:t,name:c,code:Le(c),columns:a,view:"table",source:{type:"projection",config:i},readonly:ki(i).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...i.filters?{filters:i.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(d),d}const nw=Object.freeze(Object.defineProperty({__proto__:null,createProjectionTable:Qa},Symbol.toStringTag,{value:"Module"})),nh="__id";function rh(e){const t=[];let n="",r,s=0;for(;s<e.length;){const i=e[s],o=e[s+1];if(i==="'"||i==='"'){const a=Ja(e,s,i);n+=e.slice(s,a),s=a;continue}if(i==="-"&&o==="-"){let a="";for(s+=2;s<e.length&&e[s]!==`
`;)a+=e[s++];const c=/^\s*projection:\s*(.+?)\s*$/i.exec(a);c?.[1]&&n.trim()===""&&(r=c[1]);continue}if(i==="/"&&o==="*"){for(s+=2;s<e.length&&!(e[s]==="*"&&e[s+1]==="/");)s++;s+=2;continue}if(i===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,s++;continue}n+=i,s++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function Ja(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function Wt(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function sh(e,t){const n=[];let r=0,s="",i=0;for(;i<e.length;){const o=e[i];if(o==="'"||o==='"'){const a=Ja(e,i,o);s+=e.slice(i,a),i=a;continue}if(o==="("?r++:o===")"&&r--,r===0){const a=t(e,i);if(a>0){n.push(s),s="",i+=a;continue}}s+=o,i++}return n.push(s),n}function Jn(e,t){return sh(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function ih(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return sh(e,(r,s)=>/\s/.test(r[s]??"")?n.exec(r.slice(s,s+t.length+32))?.[0].length??0:0)}function oh(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const s=e[r];if(s==="'"||s==='"'){r=Ja(e,r,s)-1;continue}if(s==="(")n++;else if(s===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function ah(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):bi(t)?t:/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function lh(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function rw(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=oh(e);if(n==null)return null;const r=[];for(const s of Jn(n,",")){const i=s.trim();if(!i||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(i))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(i);if(!o?.[1])continue;const a=Wt(o[1]);if(a===nh)continue;const c=o[2]??"",d=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(c.trim())?.[1]??"TEXT",p={field:a,label:a,type:lh(d)};/\bNOT\s+NULL\b/i.test(c)&&(p.notnull=!0),(/\bUNIQUE\b/i.test(c)||/\bPRIMARY\s+KEY\b/i.test(c))&&(p.unique=!0),r.push(p)}return{name:Wt(t[1]),columns:r,rows:[]}}function sw(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=Wt(t[1]),r=t[2]?Jn(t[2].slice(1,-1),",").map(o=>Wt(o)):[],s=[];let i=(t[3]??"").trim();for(;i.startsWith("(");){const o=oh(i);if(o==null)break;const a=Jn(o,",").map(d=>ah(d)),c={};a.forEach((d,p)=>{const m=r[p]??`col${p+1}`;m!==nh&&(c[m]=d)}),s.push(c),i=i.slice(o.length+2).trim(),i.startsWith(",")&&(i=i.slice(1).trim())}return{table:n,rows:s}}function Kc(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=Wt(t[1]);return{table:n,alias:t[2]?Wt(t[2]):n}}function Kr(e){return Jn(e,".").map(Wt)}function Xa(e,t,n){const r=t.filter(s=>(n.get(s.tableName.toLowerCase())??[]).includes(e));return r.some(s=>s.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function iw(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const s=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);s&&(n=Number(s[1]),t=t.slice(0,s.index));let i;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(i=o[1],t=t.slice(0,o.index));let a;const c=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return c?.[1]&&(a=c[1],t=t.slice(0,c.index)),{from:t,limit:n,orderBy:i,where:a}}function ow(e,t,n,r,s){const i=[],o=a=>a.length===2?a[0]??"":Xa(a[0]??"",n,r);for(const a of ih(e,"AND")){const c=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(a);if(!c?.[1]||!c[2]){s.push(`ON ${a.trim()}`);continue}const d=Kr(c[1]),p=Kr(c[2]),m=o(d)===t.alias,w=m?d:p,y=m?p:d;if(o(w)!==t.alias){s.push(`ON ${a.trim()} — neither side names ${t.alias}`);continue}i.push({field:w.length===2?w[1]??"":w[0]??"",eqAlias:y.length===2?y[0]??"":o(y),eqField:y.length===2?y[1]??"":y[0]??""})}return i}function aw(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,s=[],i=[];let o=0;for(let d=r.exec(e);d;d=r.exec(e))s.push(e.slice(o,d.index)),i.push((d[1]??"INNER").toUpperCase()),o=d.index+d[0].length;s.push(e.slice(o));const a=Kc(s[0]??"");if(!a.table)return null;const c=[{alias:a.alias,tableName:a.table}];for(let d=1;d<s.length;d++){const p=s[d]??"",m=/\s+ON\s+([\s\S]+)$/i.exec(p),w=Kc(m?p.slice(0,m.index):p);if(!w.table)continue;const y=i[d-1]??"INNER";if(y==="CROSS"||!m?.[1]){n.push(`${y} JOIN ${w.table} — no ON predicate to model`),c.push({alias:w.alias,tableName:w.table});continue}(y==="RIGHT"||y==="FULL")&&n.push(`${y} JOIN ${w.table} — imported as LEFT JOIN (the closest a projection can express)`);const $=[...c,{alias:w.alias,tableName:w.table}];c.push({alias:w.alias,tableName:w.table,join:{type:y==="INNER"?"inner":"left",on:ow(m[1],w,$,t,n)}})}return c}function lw(e,t,n,r){const s=[];for(const i of Jn(e,",")){const o=i.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const a=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),c=(a?.[1]??o).trim(),d=Kr(c),p=Wt(a?.[2]??d[d.length-1]??c);if(/^NULL$/i.test(c)){s.push({field:p,from:{kind:"script",script:dw}});continue}d.length===2&&d[0]&&d[1]?s.push({field:p,from:{kind:"source",alias:d[0],field:d[1]}}):d.length===1&&d[0]&&/^[\w$]+$/.test(d[0])?s.push({field:p,from:{kind:"source",alias:Xa(d[0],t,n),field:d[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return s}function cw(e,t){const n={};if(!e)return n;for(const r of ih(e,"AND")){const s=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),i=s?.[1]?ch(t.columns,Kr(s[1]),t.sources,t.schema):void 0;if(!s||!i){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[i.field]=(s[2]??"").replace(/''/g,"'")}return n}function uw(e,t){const n=[];for(const r of Jn(e??"",",")){const s=r.trim();if(!s)continue;const[i,o]=s.split(/\s+/),a=ch(t.columns,Kr(i??""),t.sources,t.schema);if(!a){t.unsupported.push(`ORDER BY ${s}`);continue}n.push({field:a.field,asc:!/^DESC$/i.test(o??"")})}return n}function Vc(e,t,n,r){const s=[],i=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(i);if(!o)return null;const{from:a,limit:c,orderBy:d,where:p}=iw(o[3]??""),m=c??(o[1]?Number(o[1]):void 0),w=aw(a,n,s);if(!w)return null;const y=lw(o[2]??"",w,n,s),$={columns:y,sources:w,schema:n,unsupported:s},x=cw(p,$),E=uw(d,$),S={version:1,sources:w,columns:y};return Object.keys(x).length>0&&(S.filters=x),m!=null&&m>0&&(S.limit=m),{projection:{name:r||t,spec:S,...E.length>0?{sortBy:E}:{}},unsupported:s}}const dw=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function ch(e,t,n,r){const s=t.length===2?t[0]:Xa(t[0]??"",n,r),i=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===s&&o.from.field===i)??e.find(o=>o.field===i)}function es(e){const t=new Map,n=[],r=[],s=new Map,i=o=>{s.set(o.name.toLowerCase(),o.columns.map(a=>a.field))};for(const o of rh(e)){const a=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(a)){const c=rw(a);if(!c){r.push(Ar(a));continue}const d=t.get(c.name);t.set(c.name,{...c,rows:d?.rows??[]}),i(c);continue}if(/^INSERT\s+/i.test(a)){const c=sw(a);if(!c){r.push(Ar(a));continue}const d=t.get(c.table);if(d)d.rows.push(...c.rows);else{const p={name:c.table,columns:hw(c.rows),rows:c.rows};t.set(c.table,p),i(p)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(a)){const c=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(a),d=c?.[1]?Wt(c[1]):"",p=c?.[2]?Vc(c[2],d||"view",s,d):null;p?(n.push(p.projection),r.push(...p.unsupported)):r.push(Ar(a));continue}if(/^SELECT\b/i.test(a)){const c=Vc(a,"",s,o.name);c?(n.push(c.projection),r.push(...c.unsupported)):r.push(Ar(a));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(a)||r.push(Ar(a))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function Ar(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function hw(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(i=>i[n]).filter(i=>i!=null),s=r.length===0?"string":r.every(i=>typeof i=="number")?"number":r.every(i=>typeof i=="boolean")?"boolean":"string";return{field:n,label:n,type:s}})}const fw=Object.freeze(Object.defineProperty({__proto__:null,parseLiteral:ah,parseSqlScript:es,splitStatements:rh,sqlTypeToColumnType:lh},Symbol.toStringTag,{value:"Module"})),pw={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function mw(e){e.ui.registerImporter(Za),e.ui.registerDropHandler(async t=>{const n=ww(t).filter(yw);if(n.length===0)return!1;t.preventDefault();for(const r of n)await bw(e,r);return!0})}const Za={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return es(await gw(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function gw(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${Gt(t.url)}…`):Promise.resolve(t.text??"")}function el(e){return es(e).projections.length>0}async function tl(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const s=es(t),i={tables:[],projections:[],rowCount:0,unsupported:s.unsupported},o=n.target??{kind:"new"},a=o.kind==="new"||s.tables.length===1;a||i.unsupported.push(`"Import into" was not applied — this script defines ${s.tables.length} tables, and an append/replace names only one destination`);const c=new Map;for(const y of s.tables){const $=await jd(e,y.name,(async function*(){yield{columns:y.columns,rows:y.rows}})(),{workspaceId:r,importerId:"sql",target:a?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:x=>n.editColumns(x,y.name)}:{}});$&&(c.set(y.name,$.tableName),i.tables.push($.tableName),i.rowCount+=$.rowCount)}const d=await e.store.tables.find({workspaceId:r}),p=new Map;for(const y of d)p.has(y.name)||p.set(y.name,y);const m=new Map;for(const y of d)m.has(y.name.toLowerCase())||m.set(y.name.toLowerCase(),y);const w=new Set([...d.map(y=>y.name),...i.tables]);for(const y of s.projections){const $=await Qa(e,r,y,{resolve:x=>{const E=c.get(x);return(E?p.get(E):void 0)??p.get(x)??m.get(x.toLowerCase())},taken:w});if(!$){i.unsupported.push(`projection "${y.name}" — its source tables are not in this workspace`);continue}p.set($.name,$),m.set($.name.toLowerCase(),$),w.add($.name),i.projections.push($.name)}return i}function nl(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const s=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${s}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function bw(e,t){const n=await t.text();try{if(el(n)){nl(e,await tl(e,n),t.name);return}const r=await $i(e,Za,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=r.landed.reduce((i,o)=>i+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${s.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function ww(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}function yw(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const vw=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:el,init:mw,meta:pw,reportSqlRestore:nl,restoreSqlScript:tl,sqlImporterSpec:Za},Symbol.toStringTag,{value:"Module"}));var $w=Object.defineProperty,xw=Object.getOwnPropertyDescriptor,rl=(e,t,n,r)=>{for(var s=r>1?void 0:r?xw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&$w(t,n,s),s};let Ms=null;function kw(){return Ms||(Ms=document.createElement("anchored-menu"),document.body.appendChild(Ms)),Ms}let An=class extends ke{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return kw().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?k`
      <div class="menu" role="menu">
        ${this.items.map(e=>k`
            <button role="menuitem" class=${e.danger?"danger":""} @click=${()=>this.finish(e.id)}>
              ${e.icon?k`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:k``}};An.styles=[xt,Se`
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
    `];rl([F()],An.prototype,"items",2);rl([F()],An.prototype,"shown",2);An=rl([Ee("anchored-menu")],An);const Xn=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return An}},Symbol.toStringTag,{value:"Module"})),ea='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Cw={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:ea,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function _w(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:ea,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>Gc(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:ea,keywords:["datasette","live","remote","backend"],run:t=>Gc(t)})}async function Sw(){const{registries:e}=await ae();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function Gc(e,t){const n=await Sw();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const s=t?.getBoundingClientRect(),i=s?await An.open(s,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!i)return;r=s?n.find(o=>o.id===i):n.find(o=>o.label===i)}if(r)try{await r.connect(e)}catch(s){await e.ui.dialogs.alert(s?.message??String(s),`Connect ${r.label} failed`)}}const Ew=Object.freeze(Object.defineProperty({__proto__:null,init:_w,meta:Cw},Symbol.toStringTag,{value:"Module"}));function Wc(e,t){return JSON.stringify(t.map(n=>e[n]??null))}function Tw(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function uh(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:s,deletedRemoteFields:i=[]}=e,o=new Set(i),a=new Set(s),c=D=>{const W={...D};for(const z of o)delete W[z];return W},d=new Set(t.flatMap(D=>Object.keys(D.data))),p=[...new Set(n.flatMap(D=>Object.keys(D)))].filter(D=>d.has(D)&&!o.has(D)&&!a.has(D)).sort(),w=r.length>0&&n.every(D=>Tw(D,r))?"pk":p.length>0?"content":"none";if(w==="none")return{data:n.map(c),merged:!1,strategy:w,droppedUserRows:t.filter(D=>Yc(D.data,s)).length};const y=w==="pk"?r:p,$=new Map;for(const D of t){const W=Wc(D.data,y);$.has(W)||$.set(W,D)}const x=new Set,E=n.map(D=>{const W=c(D),z=Wc(D,y),re=$.get(z);if(re){x.add(z);for(const G of s)Object.prototype.hasOwnProperty.call(re.data,G)&&(W[G]=re.data[G])}return W});let S=0;for(const[D,W]of $)!x.has(D)&&Yc(W.data,s)&&(S+=1);return{data:E,merged:!0,strategy:w,droppedUserRows:S}}function Yc(e,t){return t.some(n=>{const r=e[n];return r!=null&&r!==""})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dh=Symbol.for(""),Iw=e=>{if(e?.r===dh)return e?._$litStatic$},Qc=e=>({_$litStatic$:e,r:dh}),Jc=new Map,Aw=e=>(t,...n)=>{const r=n.length;let s,i;const o=[],a=[];let c,d=0,p=!1;for(;d<r;){for(c=t[d];d<r&&(i=n[d],(s=Iw(i))!==void 0);)c+=s+t[++d],p=!0;d!==r&&a.push(i),o.push(c),d++}if(d===r&&o.push(t[r]),p){const m=o.join("$$lit$$");(t=Jc.get(m))===void 0&&(o.raw=o,Jc.set(m,t=o)),n=a}return e(t,...n)},Xc=Aw(k);function Rw(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(a=>a==="AND"||a==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(a=>a.toLowerCase())};const s=[];let i=[];for(const a of n)a==="OR"?(s.push(i),i=[]):a==="AND"||i.push(a.toLowerCase());s.push(i);const o=s.filter(a=>a.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function Ow(e,t,n){const r=Rw(t);if(r.kind==="boolean")return e.filter(c=>r.groups.some(d=>d.every(p=>n(c,p))));const{phrase:s,words:i}=r;if(i.length<=1)return s===""?e:e.filter(c=>n(c,s));const o=e.filter(c=>n(c,s));if(o.length>0)return o;const a=e.filter(c=>i.every(d=>n(c,d)));return a.length>0?a:e.filter(c=>i.some(d=>n(c,d)))}const Dw=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Vr(e,t,n){const r=new Map,s=new Map;for(const c of n)r.set(c.field.toLowerCase(),c.field),c.label&&r.set(c.label.toLowerCase(),c.field),s.set(c.field,c.type);const i=[...r.keys()].filter(Boolean).sort((c,d)=>d.length-c.length);let o=t;return i.length>0&&(o=o.replace(new RegExp(`(^|\\s)(${i.map(Dw).join("|")}):\\s+`,"gi"),"$1$2:")),Ow(e,o,(c,d)=>{const p=d.indexOf(":");if(p>0){const m=r.get(d.slice(0,p));if(m)return Br(c.data[m],d.slice(p+1),{type:s.get(m)})}return Object.values(c.data).some(m=>m!=null&&String(m).toLowerCase().includes(d))})}function Pw(e,t,n,r){const s=a=>a==null?0:a===""?1:2,i=s(e),o=s(t);return i!==2||o!==2?(i-o)*r:Lw(e,t,n)*r}function Lw(e,t,n){switch(n){case"number":{const r=Number(e),s=Number(t);return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}case"boolean":return(e?1:0)-(t?1:0);case"array":return Ac(e).localeCompare(Ac(t),void 0,{numeric:!0,sensitivity:"base"});case"date":{const r=new Date(String(e)).getTime(),s=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function hh(e,t,n){if(t.length===0)return e;const r=t.map(i=>({field:i.field,factor:i.asc?1:-1,type:n.find(o=>o.field===i.field)?.type??"string"})),s=[...e];return s.sort((i,o)=>{for(const a of r){const c=Pw(i.data[a.field],o.data[a.field],a.type,a.factor);if(c!==0)return c}return 0}),s}function Zc(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function Mw(e,t){const n=e.trim();if(n==="")return!0;const r=n.split(/\s+/);if(r.length!==1)return!1;const s=r[0]??"",i=s.indexOf(":");if(i>0){const o=s.slice(0,i).toLowerCase();if(t.some(c=>c.field.toLowerCase()===o||c.label?.toLowerCase()===o))return!1}return!0}function fh(e){return e.filter(t=>t.filterable!==!1).map(t=>({field:t.field,label:t.label}))}function ph(e){const t=new Set(e.columns.filter(n=>n.filterable===!1).map(n=>n.field));return Object.entries(e.filters??{}).filter(([n,r])=>r&&r.trim().length>0&&!t.has(n))}function eu(e,t){let n=e;const r=ph(t);if(r.length>0){const c=new Map(t.columns.map(d=>[d.field,d.type]));n=n.filter(d=>r.every(([p,m])=>Br(d.data[p],m,{type:c.get(p)})))}const s=(t.search??"").trim();s!==""&&(n=Vr(n,s,fh(t.columns))),n=hh(n,t.sort??[],t.columns);const i=n.length,o=Math.max(0,t.offset??0),a=t.limit!=null&&t.limit>0?o+t.limit:void 0;return(o>0||a!=null)&&(n=n.slice(o,a)),{rows:jw(n,t.fields),total:i}}function jw(e,t){if(!t||t.length===0)return e;const n=new Set(t);return e.map(r=>({...r,data:Object.fromEntries(Object.entries(r.data).filter(([s])=>n.has(s)))}))}async function sl(e,t,n=0){const r=(t.search??"").trim(),s=Mw(r,fh(t.columns));if(!e.query){const p=await e.find(),m=n>0&&p.length>=n;return{...eu(m?p.slice(0,n):p,t),...m?{truncated:!0}:{}}}const i={...t.fields?{fields:t.fields}:{},...Object.keys(t.filters??{}).length>0?{filters:Object.fromEntries(ph(t))}:{},...s&&r?{search:r}:{},...t.sort&&t.sort.length>0?{sort:[...t.sort]}:{}},o=s;o?(t.offset!=null&&(i.offset=t.offset),t.limit!=null&&(i.limit=t.limit)):n>0&&(i.limit=n);const a=await e.query(i);if(o&&!a.partial)return a;const c=eu(a.rows,t),d=!o&&i.limit!=null&&a.rows.length>=i.limit;return{...c,...a.partial?{partial:!0}:{},...a.truncated||d?{truncated:!0}:{}}}var Nw=Object.defineProperty,zw=Object.getOwnPropertyDescriptor,or=(e,t,n,r)=>{for(var s=r>1?void 0:r?zw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Nw(t,n,s),s};function Lo(e){return an([{...e,negate:!1}])}let at=class extends ke{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.exactValues=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,s,i){return this.values=t,this.blanks=r,this.onChange=s??null,this.exactValues=i?.exact===!0,this.states=new Map(Pn(n??"").map(o=>[Lo(o),{state:o.negate?"not":"on",token:o}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e,t=this.exactValues){const n=t?{term:e,negate:!1,exact:!0}:{term:e,negate:!1},r=Lo(n),s=new Map(this.states),i=s.get(r);i===void 0?s.set(r,{state:"on",token:n}):i.state==="on"?s.set(r,{state:"not",token:i.token}):s.delete(r),this.states=s;const o=[...s.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=an(o),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),at.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),at.instance===this&&(at.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=(o,a=this.exactValues)=>this.states.get(Lo(a?{term:o,negate:!1,exact:!0}:{term:o,negate:!1}))?.state,s=o=>k` <span class=${`cb${o?` ${o}`:""}`}>${o==="on"?"✓":o==="not"?"✕":""}</span> `,i=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return k`
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
    `}};at.instance=null;at.styles=[xt,Se`
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
    `];or([wt({type:Array})],at.prototype,"values",2);or([wt({type:Number})],at.prototype,"blanks",2);or([wt({type:String})],at.prototype,"current",2);or([F()],at.prototype,"search",2);or([F()],at.prototype,"states",2);at=or([Ee("filter-popover")],at);var Fw=Object.defineProperty,Uw=Object.getOwnPropertyDescriptor,Pt=(e,t,n,r)=>{for(var s=r>1?void 0:r?Uw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Fw(t,n,s),s};let gt=class extends ke{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return k`
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
    `}};gt.styles=Se`
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
  `;Pt([wt({type:String})],gt.prototype,"value",2);Pt([wt({type:Array})],gt.prototype,"options",2);Pt([wt({type:String})],gt.prototype,"placeholder",2);Pt([F()],gt.prototype,"open",2);Pt([F()],gt.prototype,"highlightIdx",2);Pt([F()],gt.prototype,"dropTop",2);Pt([F()],gt.prototype,"dropLeft",2);Pt([F()],gt.prototype,"dropMinWidth",2);Pt([F()],gt.prototype,"editing",2);Pt([Bt("input")],gt.prototype,"inputEl",2);gt=Pt([Ee("filter-combobox")],gt);const mh=50,Bw=500,qw=100;function ii(e){return typeof e=="string"?e:String(e)}function Hw(e,t){return t==="array"?Tt(e):e==null||e===""?[]:[ii(e)]}function gh(e,t,n){const r=n?.maxLen??mh;if(e.length===0)return!1;for(const s of e.slice(0,qw)){const i=s.data[t];if(i!=null){if(n?.type==="array"){if(Tt(i).some(o=>o.length>=r))return!1;continue}if(ii(i).length>=r)return!1}}return!0}function Kw(e,t,n){const r=n?.maxLen??mh,s=n?.maxOptions??Bw,i=new Set;for(const o of e)for(const a of Hw(o.data[t],n?.type))if(!(a.length>=r)&&(i.add(a),i.size>=s))return[...i].sort();return[...i].sort()}function bh(e,t,n){const r=new Map;let s=0;for(const o of e){const a=o.data[t],c=n?.type==="array"?Tt(a):a==null||ii(a).trim()===""?[]:[ii(a)];if(c.length===0){s++;continue}for(const d of c)r.set(d,(r.get(d)??0)+1)}let i=[...r.entries()].map(([o,a])=>({value:o,count:a})).sort((o,a)=>a.count-o.count||o.value.localeCompare(a.value));return n?.type==="boolean"&&(i=[...["true","false"].map(a=>({value:a,count:r.get(a)??0})),...i.filter(a=>a.value!=="true"&&a.value!=="false")]),{values:i,blanks:s}}const wh="grid";async function Vw(e){return await e.get(wh,"sortDescFirst")!==!1}function Gw(e,t,n={}){const r=n.additive===!0,s=n.descFirst!==!0,i=e.find(c=>c.field===t),o=e.length===1&&e[0]?.field===t;if(!r&&!o)return[{field:t,asc:s}];const a=r?e.filter(c=>c.field!==t):[];return i?i.asc===s?[...a,{field:t,asc:!s}]:[...a]:[...a,{field:t,asc:s}]}const oi="easydb:visible-count";function yh(e,t,n){e&&document.dispatchEvent(new CustomEvent(oi,{detail:{key:e,count:t,total:n}}))}function vh(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const ta="easydb:import-progress";function Ww(e,t){if(t<=0)return` (${e.toLocaleString()})`;const n=Math.min(100,Math.round(e/t*100));return` (${e.toLocaleString()}/${t.toLocaleString()} · ${n}%)`}const $h="#dc2626",xh="cell-invalid",Yw=`border-color:${$h};background:#fef2f2`;function il(e,t){e.classList.add(xh),e.style.border=`1px solid ${$h}`,e.style.background="#fef2f2",t&&(e.title=t)}function Qw(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return kh(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";case"array":return Tt(e).length===0?"empty":"ok";default:return"ok"}}const Jw=/^\s*(true|1)\s*$/i,Xw=/^\s*(false|0)\s*$/i;function kh(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":Jw.test(e)?"true":Xw.test(e)?"false":"invalid":"invalid"}var Zw=Object.defineProperty,ey=Object.getOwnPropertyDescriptor,De=(e,t,n,r)=>{for(var s=r>1?void 0:r?ey(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Zw(t,n,s),s};const ty=200,ny=250,ry=10,Mo=32;let Ae=class extends ke{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.matchingTotal=0,this.tableTotal=0,this.truncated=!1,this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.rowColl=null,this.loadGeneration=0,this.reloadTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{const t=e.detail.query??"";t!==this.globalQuery&&(this.globalQuery=t,this.scheduleReload())},this.onTableSearch=e=>{const t=e.detail;if(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId){const n=t.query??"";if(n===this.localQuery)return;this.localQuery=n,this.scheduleReload()}},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.reloadTimer!=null&&(window.clearTimeout(this.reloadTimer),this.reloadTimer=null),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=Math.max(this.tableTotal,this.matchingTotal,this.rows.length);t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,yh(e,t,n))}async bind(){if(!this.tableId)return;const e=await ae(),t=await e.store.tables.findOne(this.tableId);t&&(this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(s=>s.id===this.tableId);r&&(this.tableColumns=r.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const r=n.find(s=>s.id===this.viewInstanceId);r&&(this.viewInst=r,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(s=>s.id===this.tableId);r&&this.applyTable(r)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers)),this.rowColl=e.store.rows(this.tableId),this.unsubscribe=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows())}async loadRows(){const e=this.rowColl;if(!e)return;const t=++this.loadGeneration,n=window.setTimeout(()=>this.loading=!0,ty);try{const r=await sl(e,this.rowRequest(),Oa);if(t!==this.loadGeneration)return;if(this.rows=r.rows,this.matchingTotal=r.total,this.truncated=r.truncated===!0,e.count){const s=await e.count();if(t!==this.loadGeneration)return;this.tableTotal=s}else this.tableTotal=r.total}catch(r){if(t!==this.loadGeneration)return;this.rows=[],this.matchingTotal=0,this.tableTotal=0,(await ae()).api.ui.dialogs.toast(`Couldn't load rows: ${r?.message??String(r)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(n),t===this.loadGeneration&&(this.loading=!1)}}rowRequest(){const e=[this.localQuery.trim(),this.globalQuery.trim()].filter(Boolean).join(" ");return{columns:this.columns,filters:this.filters,...e?{search:e}:{},...this.sortSpecs.length>0?{sort:this.sortSpecs}:{}}}scheduleReload(){this.reloadTimer!=null&&window.clearTimeout(this.reloadTimer),this.reloadTimer=window.setTimeout(()=>{this.reloadTimer=null,this.loadRows()},ny)}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=Zc(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const s=n[r.field];return typeof s=="number"?{...r,width:s}:r}),this.sortSpecs=Zc(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await ae();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const s=this.columns.find(i=>i.field===n);if(this.readOnly||s?.readonly===!0){e.api.ui.dialogs.toast(this.readOnly?"This table is read-only.":`“${s?.label??n}” is a read-only column.`,{kind:"warning",title:"Not saved"}),this.requestUpdate();return}if(s){const i=oy(s,r,this.rows,t.id);if(i){await e.api.ui.dialogs.alert(i,`Cannot save ${s.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(i){await e.api.ui.dialogs.alert(i?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const s=String(n);return k`<input
      type="text"
      class=${xh}
      style=${Yw}
      title=${r}
      .value=${s}
      @keydown=${i=>this.cancelCellEdit(i,s)}
      @change=${i=>this.setCell(e,t.field,i.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?k`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?k``:e.type==="array"&&Tt(t).length===0?k``:e.type==="date"?k`${js(t)}`:e.type==="datetime"?k`${Ns(t).replace("T"," ")}`:k`${String(t)}`}renderScriptedCell(e,t){const n=Wa(t.script,e.data);if(!n.ok)return k`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return k`${n.value==null?"":String(n.value)}`;const s=Qc(r);return Xc`<${s}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      .sourceReadonly=${this.readOnly}
      @change=${this.readOnly?void 0:i=>this.setCell(e,t.field,i.detail.value)}
    ></${s}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,s=t.renderer,i=s?this.cellRenderers?.get(s):void 0;if(i){const o=Qc(i);return Xc`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        .sourceReadonly=${r}
        @change=${r?void 0:a=>this.setCell(e,t.field,a.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return nu(n,js(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):k`<input
          type="date"
          .value=${js(n)}
          @keydown=${o=>this.cancelCellEdit(o,js(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return nu(n,Ns(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):k`<input
          type="datetime-local"
          .value=${Ns(n)}
          @keydown=${o=>this.cancelCellEdit(o,Ns(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":{const o=n==null||n==="";return!o&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):k`<input
          type="number"
          .value=${o?"":String(n)}
          @keydown=${a=>this.cancelCellEdit(a,o?"":String(n))}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`}case"array":{const o=Tt(n).length===0?"":String(n);return k`<input
          type="text"
          .value=${o}
          @keydown=${a=>this.cancelCellEdit(a,o)}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}default:return k`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(n??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await ae();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=await ae(),r=Gw(this.sortSpecs,e,{additive:t,descFirst:await Vw(n.api.settings)});this.sortSpecs=r,this.scheduleReload(),await this.persistSort(r)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await ae();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}typedFilters(e){return e.map(([t,n])=>({field:t,query:n,type:this.columns.find(r=>r.field===t)?.type}))}filteredRows(){const e=new Set(this.columns.filter(o=>o.filterable===!1).map(o=>o.field)),t=Object.entries(this.filters).filter(([o,a])=>a&&a.trim().length>0&&!e.has(o)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let s=this.rows;if(t.length>0){const o=this.typedFilters(t);s=s.filter(a=>o.every(c=>Br(a.data[c.field],c.query,{type:c.type})))}const i=this.columns.filter(o=>o.filterable!==!1);return r&&(s=Vr(s,r,i)),n&&(s=Vr(s,n,i)),s}sortedRows(){return hh(this.filteredRows(),this.sortSpecs,this.columns)}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=at.instance;if(!r)return;const{values:s,blanks:i}=bh(this.rowsFacetedFor(t),t,{type:this.columns.find(a=>a.field===t)?.type}),o=await r.open(n.getBoundingClientRect(),s,this.filters[t]??"",i,a=>this.onFilterInput(t,a));o!==null&&(typeof o=="object"&&"clear"in o?this.onFilterInput(t,""):typeof o=="string"&&this.onFilterInput(t,o))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250),this.scheduleReload()}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(s=>s.filterable===!1).map(s=>s.field)),n=Object.entries(this.filters).filter(([s,i])=>i&&i.trim().length>0&&s!==e&&!t.has(s));if(n.length===0)return this.rows;const r=this.typedFilters(n);return this.rows.filter(s=>r.every(i=>Br(s.data[i.field],i.query,{type:i.type})))}computeFilterSuggestions(){const e=new Map;for(const t of this.visibleColumns)gh(this.rows,t.field,{type:t.type})&&e.set(t.field,Kw(this.rowsFacetedFor(t.field),t.field,{type:t.type}));return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((s,i)=>{if(s.width!=null)return;const o=t[i];o&&r.set(s.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(s=>r.has(s.field)?{...s,width:r.get(s.field)}:s))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const s=o=>{if(!this.resizing)return;const a=o.clientX-this.resizing.startX,c=Math.max(ry,this.resizing.startW+a);this.columns=this.columns.map(d=>d.field===this.resizing.field?{...d,width:c}:d)},i=async()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i);const o=this.resizing?.field;if(this.resizing=null,!o)return;const a=await ae();if(this.viewMode){const c={...this.viewInst?.columnWidths??{}};for(const d of this.columns)typeof d.width=="number"&&(c[d.field]=d.width);await a.store.viewInstances.patch(this.viewInstanceId,{columnWidths:c,updatedAt:Date.now()})}else await a.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",s),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=s?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const s=[...this.columns],i=s.findIndex(d=>d.field===n);if(i<0)return;const[o]=s.splice(i,1);let a=s.findIndex(d=>d.field===t);if(a<0){s.splice(i,0,o);return}r==="after"&&(a+=1),s.splice(a,0,o);const c=await ae();this.viewMode?await c.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:s.map(d=>d.field),updatedAt:Date.now()}):await c.store.tables.patch(this.tableId,{columns:s,updatedAt:Date.now()})}async saveFilters(){const e=await ae(),t={};for(const[r,s]of Object.entries(this.filters))s&&s.trim().length>0&&(t[r]=s);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+Mo}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),s=Math.min(e.length,r+n);return{slice:e.slice(r,s),topPad:r*t,bottomPad:(e.length-s)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:s}=this.virtualSlice(e),i=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return k`
      ${this.loading||this.externalLoading?k`<div class="load-bar" role="progressbar" aria-label="Loading rows" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${o!=null?Math.round(o*100):ie}>
            <div class="load-bar-fill ${o!=null?"determinate":""}" style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:ie}></div>
          </div>`:ie}
      ${this.truncated?k`<div class="truncated-note" role="status">
            Showing the first ${this.rows.length.toLocaleString()} of ${this.matchingTotal.toLocaleString()}+ matching rows. Narrow the filter to see the rest.
          </div>`:ie}
      <table style=${this.tableSizingStyle(t)??ie}>
        <colgroup>
          ${t.map(a=>k`<col style=${a.width!=null?`width: ${a.width}px`:""} />`)}
          <col style="width:${Mo}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(a=>{const c=a.sortable!==!1,d=a.filterable!==!1,p=this.sortSpecs.findIndex(z=>z.field===a.field),m=p>=0?this.sortSpecs[p]:void 0,w=m?m.asc?"asc":"desc":null,y=c?w==="asc"?"▲":w==="desc"?"▼":"⇅":"",$=this.sortSpecs.length>1&&p>=0?String(p+1):"",x=`t-${a.type}`,E=this.dragSourceField===a.field,S=this.dropTargetField===a.field,D=S&&this.dropEdge==="before"?" drop-before":S&&this.dropEdge==="after"?" drop-after":"",W=(a.description?`${a.description}
`:"")+(a.units?`Units: ${a.units}
`:"")+`${a.field} — ${c?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(d?"":" · not filterable");return k`
                <th
                  class=${`${x}${w?" sorted":""}${E?" drag-source":""}${D}${c?"":" no-sort"}`}
                  title=${W}
                  @click=${z=>c&&this.toggleSort(a.field,z.shiftKey)}
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
                    ><span class="sort-icon" aria-hidden="true">${y}${$?k`<span class="sort-rank">${$}</span>`:ie}</span>
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
            <th style="width:${Mo}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(a=>{if(a.filterable===!1)return k`<th></th>`;const c=i.get(a.field)??[];return k`
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
                      class=${`t-${c.type}${c.renderer?` r-${c.renderer}`:""}${c.renderer&&this.cellRenderers?.get(c.renderer)?" has-renderer":""}${iy(a,c)}`}
                      title=${sy(a,c)}
                    >
                      ${this.renderCell(a,c)}
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
    `}};Ae.styles=[xt,Se`
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
    `];De([wt({type:String})],Ae.prototype,"tableId",2);De([wt({type:String})],Ae.prototype,"viewInstanceId",2);De([F()],Ae.prototype,"columns",2);De([F()],Ae.prototype,"rows",2);De([F()],Ae.prototype,"matchingTotal",2);De([F()],Ae.prototype,"tableTotal",2);De([F()],Ae.prototype,"truncated",2);De([F()],Ae.prototype,"sortSpecs",2);De([F()],Ae.prototype,"filters",2);De([F()],Ae.prototype,"globalQuery",2);De([F()],Ae.prototype,"localQuery",2);De([F()],Ae.prototype,"dragSourceField",2);De([F()],Ae.prototype,"dropTargetField",2);De([F()],Ae.prototype,"dropEdge",2);De([F()],Ae.prototype,"resizing",2);De([F()],Ae.prototype,"cellRenderers",2);De([F()],Ae.prototype,"scrollY",2);De([F()],Ae.prototype,"viewportHeight",2);De([F()],Ae.prototype,"loading",2);De([F()],Ae.prototype,"externalLoading",2);De([F()],Ae.prototype,"externalProgress",2);De([F()],Ae.prototype,"tableReadonly",2);Ae=De([Ee("data-table")],Ae);const tu=500;function sy(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null||t.type==="array"&&Tt(n).length===0)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>tu?`${r.slice(0,tu)}…`:r}function iy(e,t){if(t.script)return"";const n=Qw(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function oy(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(i=>i.id!==r&&i.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function js(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function Ns(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function nu(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function zt(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}function it(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)?e:null}function we(e,t){return it(e)?.[t]}function Fe(e){return typeof e=="string"?e:null}function Zn(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function ts(e){return Array.isArray(e)?e:[]}function Rn(e){return ts(e).filter(t=>typeof t=="string")}function ol(e){return ts(we(e,"rows")).filter(t=>it(t)!==null)}function jo(e){return e===!0||e===1}class He extends Error{constructor(t,n){const r=Fe(we(t,"error")),s=Rn(we(t,"errors"));super(r??(s.length>0?s.join("; "):null)??"Datasette request failed"),this.name="DatasetteError";const i=n??Zn(we(t,"status"));i!=null&&(this.status=i),this.errors=s.length>0?s:r?[r]:[]}}function bt(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[a,c]of t.searchParams)r[a]=c;let s,i=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),i=decodeURIComponent(n[n.length-2]);const a=n.slice(0,n.length-2).join("/");s=t.origin+(a?"/"+a:"")}else n.length===1&&(i=decodeURIComponent(n[0])),s=t.origin;return{base:s,db:i,table:o,query:r}}function er(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,s]of Object.entries({...e.query,...t}))s!=null&&n.searchParams.set(r,String(s));return n.toString()}function ay(e,t){const n={};for(const[r,s]of Object.entries(e.query))r.startsWith("_")||(n[r]=s);return er({...e,query:n},{_next:t})}function ru(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function ly(e){const t=Fe(we(e,"next_url")),n=we(e,"next"),r=n!=null&&n!==!1?String(n):null,s=ts(we(e,"rows")),i=Array.isArray(we(e,"columns"))?Rn(we(e,"columns")):null;return{rows:s.map(a=>Array.isArray(a)&&i?Object.fromEntries(i.map((c,d)=>[c,a[d]])):a),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:we(e,"truncated")===!0}}function cy(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function su(e){const t=Rn(we(e,"primary_keys")),n=Rn(we(e,"columns")),r={},s=we(e,"column_details");if(Array.isArray(s))for(const a of s){const c=it(a);if(!c)continue;const d=Fe(c.column)??Fe(c.name);d&&(r[d]=c)}else{const a=it(s);if(a)for(const[c,d]of Object.entries(a))r[c]=it(d)??{}}for(const a of n)a in r||(r[a]={});const o=(n.length?n:Object.keys(r)).map(a=>{const c=r[a]??{},d=jo(c.is_pk)||t.includes(a),p=Fe(c.sqlite_type)??Fe(c.type)??void 0,m={field:a,label:Ch(a),type:cy(p,a)};(jo(c.notnull)||d)&&(m.notnull=!0),d&&(m.unique=!0),(jo(c.hidden)||Ya(a))&&(m.hidden=!0);const w=c.default;return w!=null&&w!==""&&(m.default=w),m});if(t.length===0){const a=o.filter(c=>c.unique).map(c=>c.field);a.length&&t.push(...a)}return{columns:o,pks:t}}function Ch(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Ci(e){const t=[],n=new Set;for(const r of e)for(const s of Object.keys(r))n.has(s)||(n.add(s),t.push(s));return t.map(r=>{const s={field:r,label:Ch(r),type:uy(e.map(i=>i[r]))};return Ya(r)&&(s.hidden=!0),s})}function uy(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(yi)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&dy(n))?"datetime":"string"}function dy(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function hy(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const s=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(s)?n+=s:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function fy(e,t){return!t||t.length===0?null:t.map(n=>hy(e[n])).join(",")}function py(e){const t=Array.isArray(e)?e:ts(we(e,"databases")),n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}const s=Fe(we(r,"name"));s===null||s==="_memory"||n.push(Fe(we(r,"route"))||s)}return n}function my(e,t){const n=Array.isArray(e)?e:ts(we(e,"tables")),r=[];for(const s of n){if(typeof s=="string"){r.push({db:t,table:s,count:null,hidden:!1,pks:[]});continue}const i=Fe(we(s,"name"));i!==null&&r.push({db:t,table:i,count:Zn(we(s,"count")),hidden:we(s,"hidden")===!0,pks:Rn(we(s,"primary_keys"))})}return r}async function Ut(e,t){let n;try{n=await e(t)}catch(s){const i=s?.message||"network error";throw new He({error:`Couldn't reach ${t} (${i}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let s=null;try{s=await n.json()}catch{}throw new He(s&&typeof s=="object"?s:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(we(r,"ok")===!1)throw new He(r,n.status);return r}async function al(e,t){return py(await Ut(e,`${t}/-/databases.json`))}async function iu(e,t,n){return my(await Ut(e,`${t}/${encodeURIComponent(n)}.json`),n)}function gy(e){const t=e?.views,n=[];for(const r of Array.isArray(t)?t:[]){if(typeof r=="string"){n.push(r);continue}const s=r;s&&typeof s.name=="string"&&s.hidden!==!0&&n.push(s.name)}return n}async function by(e,t,n){const s=`${t}/${encodeURIComponent(n)}.json?sql=${encodeURIComponent("select name, sql from sqlite_master where type='view' order by name")}&_shape=array`;let i;try{i=await Ut(e,s)}catch(d){const p=d instanceof He?d.message:String(d);throw new He({error:`Couldn't read the view definitions from "${n}". Importing views needs the SQL endpoint, which this instance may have disabled (allow_sql). Its tables can still be imported normally.

${p}`},d instanceof He?d.status:0)}const o=i?.rows,a=Array.isArray(i)?i:Array.isArray(o)?o:[],c=[];for(const d of a){const p=d,m=typeof p?.name=="string"?p.name:Array.isArray(d)?d[0]:void 0,w=typeof p?.sql=="string"?p.sql:Array.isArray(d)?d[1]:void 0;typeof m=="string"&&typeof w=="string"&&w.trim()&&c.push({db:n,name:m,sql:w})}return c}async function wy(e,t){const n=t.db?[t.db]:await al(e,t.base),r=[];for(const s of n){const i=await Ut(e,`${t.base}/${encodeURIComponent(s)}.json`);if(gy(i).length!==0){if(i?.allow_execute_sql===!1)throw new He({error:`"${s}" defines views, but this instance has SQL queries disabled (allow_execute_sql), and a view's definition can only be read through them. Its tables can still be imported normally.`},403);r.push(...await by(e,t.base,s))}}return r}async function _i(e,t){const n=er(t,{_extra:"column_details"}),r=await Ut(e,n);let{columns:s,pks:i}=su(r),o=we(r,"column_details")!=null,a=Zn(we(r,"count")),c=we(r,"count_truncated")===!0,d=r;if(s.length===0){const p=er(t,{_extra:"columns"}),m=await Ut(e,p);({columns:s,pks:i}=su(m)),o=we(m,"column_details")!=null,a=Zn(we(m,"count"))??a,c=we(m,"count_truncated")===!0||c,d=m}return{columns:s,pks:i,count:a,countTruncated:c,typed:o,raw:d}}async function na(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await _i(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function yy(e,t,n){const r=it(e)??{},s=t?it(we(r.databases,t))??{}:{},i=it(s.tables)??{},o=(n?it(i[n]):null)??(n?it(i[n.toLowerCase()]):null)??{},a=T=>Fe(o[T])??Fe(s[T])??Fe(r[T]),c={columns:{},units:{}},d=Fe(o.sort);d!==null&&(c.sort=d);const p=Fe(o.sort_desc);p!==null&&(c.sortDesc=p);const m=Zn(o.size);m!==null&&(c.size=m),Array.isArray(o.sortable_columns)&&(c.sortableColumns=Rn(o.sortable_columns));const w=Fe(o.label_column);w!==null&&(c.labelColumn=w),o.hidden===!0&&(c.hidden=!0);const y=Fe(o.description);y!==null&&(c.description=y);const $=Fe(o.description_html);$!==null&&(c.descriptionHtml=$);const x=a("source"),E=a("source_url"),S=a("license"),D=a("license_url"),W=a("about"),z=a("about_url");x!==null&&(c.source=x),E!==null&&(c.sourceUrl=E),S!==null&&(c.license=S),D!==null&&(c.licenseUrl=D),W!==null&&(c.about=W),z!==null&&(c.aboutUrl=z);const re=it(o.columns);if(re)for(const[T,q]of Object.entries(re))typeof q=="string"&&(c.columns[T]=q);const G=it(o.units);if(G)for(const[T,q]of Object.entries(G))typeof q=="string"&&(c.units[T]=q);return c}const ou=new Map;async function vy(e,t){let n=ou.get(t);return n||(n=Ut(e,`${t}/-/metadata.json`).catch(()=>({})),ou.set(t,n)),n}async function ll(e,t){const n=await vy(e,t.base);return yy(n,t.db,t.table)}function $y(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function cl(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(a=>{const c=e.columns[a.field],d=e.units[a.field],p=n?n.has(a.field):void 0;return c==null&&d==null&&p===void 0?a:{...a,...c!=null?{description:c}:{},...d!=null?{units:d}:{},...p!==void 0?{sortable:p}:{}}}),s=new Set(t.map(a=>a.field)),i={};e.sort&&s.has(e.sort)?(i.sortColumn=e.sort,i.sortAsc=!0):e.sortDesc&&s.has(e.sortDesc)&&(i.sortColumn=e.sortDesc,i.sortAsc=!1);const o=$y(e);return o&&(i.info=o),e.labelColumn&&s.has(e.labelColumn)&&(i.labelColumn=e.labelColumn),{columns:r,patch:i}}function ul(e,t){if(t.length===0)return e;const n=new Map(Ci(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const s=n.get(r.field);return s&&s!=="string"?{...r,type:s}:r})}async function ns(e,t,n={}){const r=n.maxRows??1e4,i={_size:n.pageSize??1e3,...n.extraParams||{}},o=er(t,i);let a=n.startUrl?ru(n.startUrl,o)??n.startUrl:o;const c=[];let d=!1,p=!1,m=0,w,y;for(;a;){let $;try{$=await Ut(e,a)}catch(D){if(c.length===0&&!n.startUrl)throw D;w=D instanceof He&&D.status?`stopped after ${c.length} rows: HTTP ${D.status}`:`stopped after ${c.length} rows: ${D?.message??String(D)}`,p=!0,y=a;break}const x=ly($);c.push(...x.rows),d=d||x.truncated,m+=1,n.onProgress?.(c.length);const S=(x.nextUrl!=null?ru(x.nextUrl,a):null)??(x.nextToken!=null?ay(t,x.nextToken):null);S&&c.length<r&&x.rows.length>0?a=S:(p=S!=null&&x.rows.length>0,p&&(y=S??void 0),a=null)}return{rows:c,truncated:d,hasMore:p,pages:m,error:w,nextUrl:y}}function xy(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function _h(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Sh(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function Si(e,t,n,r){let s;try{s=await e(t,{method:"POST",headers:xy(r),body:JSON.stringify(n)})}catch(o){throw new He({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(s&&s.ok===!1){let o=null;try{o=await s.json()}catch{}throw new He(o&&typeof o=="object"?o:{error:`HTTP ${s.status} for ${t}`},s.status)}const i=await s.json();if(we(i,"ok")===!1)throw new He(i,s.status);return i}async function au(e,t,n,r={}){const s=await Si(e,_h(t,"insert"),{rows:n,return:!0},r.token);return ol(s)}async function ky(e,t,n,r,s={}){const i=await Si(e,Sh(t,n,"update"),{update:r,return:!0},s.token),o=it(we(i,"row"));return o||(ol(i)[0]??null)}async function lu(e,t,n,r={}){await Si(e,Sh(t,n,"delete"),{},r.token)}async function Cy(e,t,n,r={}){const s=await Si(e,_h(t,"upsert"),{rows:n,return:!0},r.token);return ol(s)}async function _y(e,t){const n=er(t,{_extra:"primary_keys"}),r=await Ut(e,n);return Rn(we(r,"primary_keys"))}async function Eh(e,t){try{const n=await Ut(e,er(t,{_extra:"count"}));return{count:Zn(we(n,"count")),truncated:we(n,"count_truncated")===!0}}catch{return{count:null,truncated:!1}}}async function Th(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const s=await e(`${t}/-/versions.json`,r);if(s&&s.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${s.status}`};const i=await s.json(),o=Fe(we(we(i,"datasette"),"version"))??Fe(we(i,"version"));let a=null;try{const d=await(await e(`${t}/-/actor.json`,r)).json();a=it(we(d,"actor"))}catch{}return{reachable:!0,version:o,actor:a,writable:!!(n.token&&a)}}catch(s){return{reachable:!1,version:null,actor:null,writable:!1,error:s?.message||"unreachable"}}}function tr(e,t){return t?(n,r)=>{const s=(r??{}).headers??{};return e(n,{...r??{},headers:{...s,Authorization:`Bearer ${t}`}})}:e}function Sy(e,t){const n=new Map;for(const r of e)n.has(r.name.toLowerCase())||n.set(r.name.toLowerCase(),r);return r=>n.get(`${t}/${r}`.toLowerCase())??n.get(r.toLowerCase())}async function Ey(e,t,n){const r={created:[],skipped:[],found:n.length};if(n.length===0)return r;const s=(await e.store.tables.find()).filter(a=>a.workspaceId===t),i=new Set(s.map(a=>a.name)),o=[...s];for(const a of n){const c=es(a.sql),d=c.projections[0];if(!d){r.skipped.push({name:a.name,reason:c.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const p=await Qa(e,t,{name:`${a.db}/${a.name}`,spec:d.spec,...d.sortBy?{sortBy:d.sortBy}:{}},{resolve:Sy(o,a.db),taken:i});if(!p){const m=d.spec.sources.map(w=>w.tableName).join(", ");r.skipped.push({name:a.name,reason:`its source tables are not in this workspace (${m}) — import them first`});continue}o.push(p),i.add(p.name),r.created.push(p.name),c.unsupported.length>0&&r.skipped.push({name:a.name,reason:`imported, but part of the query was not modelled: ${c.unsupported.slice(0,2).join("; ")}`})}return r}function Ty(e,t){if(t.found===0){e.ui.dialogs.toast("That Datasette database defines no views.",{kind:"info",title:"Datasette views"});return}const n=t.skipped.length>0?` ${t.skipped.length} not fully imported: ${t.skipped.map(r=>`${r.name} — ${r.reason}`).join("; ")}`:"";if(t.created.length===0){e.ui.dialogs.toast(`No views could be imported as projections.${n}`,{kind:"warning",title:"Datasette views"});return}e.ui.dialogs.toast(`Imported ${t.created.length} of ${t.found} view${t.found===1?"":"s"} as projections.${n}`,{kind:t.skipped.length>0?"warning":"success",title:"Datasette views"})}function Iy(e,t){return`${e}/${encodeURIComponent(t.db)}/${encodeURIComponent(t.name)}`}async function Ih(e,t){try{return await wy(n=>e.backend.fetch(n),bt(t))}catch(n){if(n instanceof He)return null;throw n}}async function Ah(e,t,n){const r=t.slice(0,5).map(i=>i.name).join(", "),s=await e.ui.dialogs.choice(`${n} ${t.length} view${t.length===1?"":"s"} (${r}${t.length>5?", …":""}).

A view is a query rather than stored rows, so it can come in either way.`,["As projections (live)","As tables (snapshot)"],"Datasette views");return s?s.startsWith("As projections")?"projection":"table":null}async function Ay(e,t,n){const r=await Ih(e,t);if(!r||r.length===0)return;const s=await Ah(e,r,"This database also defines");s&&await Rh(e,bt(t).base,r,s,n)}async function Rh(e,t,n,r,s){if(r==="table"){await s(n.map(o=>Iy(t,o)));return}const i=e.workspaceId();i&&Ty(e,await Ey(e,i,n))}const ai=e=>e.replace(/^https?:\/\//,""),Dr="datasette",Oh=1e4,Dh=1e3,dl=1e4,Ph=60;function Lh(e){e.ui.registerSettings(Dr,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:Oh,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:Dh,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:dl,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:Ph,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function zs(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function Ei(e){const[t,n,r,s]=await Promise.all([e.settings.get(Dr,"maxImportRows"),e.settings.get(Dr,"pageSize"),e.settings.get(Dr,"connectMaxRows"),e.settings.get(Dr,"retryWaitSeconds")]);return{maxImportRows:zs(t,Oh,0),pageSize:zs(n,Dh,1),connectMaxRows:zs(r,dl,1),retryWaitSeconds:zs(s,Ph,1)}}function Ti(e){return e===0?Number.MAX_SAFE_INTEGER:e}function Ry(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function hl(e,t,n,r){const s={...e.info??{}};return!s.source&&!s.sourceUrl&&(s.source=`${ai(t)}/${n}/${r}`,s.sourceUrl=Ry(t,n,r)),{...e,info:s}}async function fl(e,t,n,r={}){if(t.db&&t.table)return[await na(e,t)];const s=[];if(t.db){if(s.push(...await iu(e,t.base,t.db)),r.skipPicker)return s.filter(a=>!a.hidden)}else{const a=await al(e,t.base);if(a.length===0)return[];let c=a;if(a.length>1){const d=await qr(a.map(p=>({name:p,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${ai(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!d)return null;c=d.map(p=>a[p])}for(const d of c)try{s.push(...await iu(e,t.base,d))}catch{}}if(s.length===0)return[];const i=new Set(s.map(a=>a.db)).size>1,o=await qr(s.map(a=>({name:i?`${a.db}/${a.table}`:a.table,size:a.count,detail:i?void 0:a.db,hidden:a.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${ai(t.base)}.`,confirmLabel:n});return o?o.map(a=>s[a]):null}const Oy=e=>new Promise(t=>setTimeout(t,e));function Dy(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function pl(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const Py={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},cu="https://latest.datasette.io/fixtures/facetable";function Ly(e){Lh(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>Uy(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>qy(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${cu}`,"","Import from Datasette");r&&await uu(t,r)}}),e.ui.registerUrlSource({id:"datasette-views",label:"Datasette views…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette database URL — its SQL views can come in as live Projections over the tables you already imported, or as snapshot tables.

e.g. ${cu}`,"","Import Datasette views");if(r)try{const s=await Ih(t,r);if(!s||s.length===0){await t.ui.dialogs.alert("That Datasette database defines no views.","Datasette views");return}const i=await Ah(t,s,"This database defines");if(!i)return;await Rh(t,bt(r).base,s,i,o=>Mh(t,o,{}))}catch(s){await t.ui.dialogs.alert(s?.message??String(s),"Datasette views")}}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return My(r)?(t.preventDefault(),await uu(n,r,{skipViews:!0}),!0):!1})}async function uu(e,t,n={}){try{await Ii(e,t,n)}catch(r){let s;r instanceof He?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function My(e){try{const t=bt(e);return!!(t.db&&t.table)}catch{return!1}}async function Ii(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=await Ei(e),i=bt(t),a=await fl(S=>e.backend.fetch(S),i,"Import",{skipPicker:n.skipTablePicker});if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let d=0;for(const S of a){const D={base:i.base,db:S.db,table:S.table,query:{}},W=await jy(e,r,D);if(W.skipped){d+=1;continue}c.push({tableId:W.tableId,ref:D,overwrite:W.overwrite,knownCount:S.count})}let p=0,m=0;const w=[],y=[],$=[];for(const S of c)try{const D=await Ny(e,S.tableId,S.ref,S.overwrite,S.knownCount,n,s);p+=1,m+=D.rowCount,D.error?y.push(`${S.ref.db}/${S.ref.table} (${D.error})`):(D.hasMore||D.truncated)&&w.push(`${S.ref.db}/${S.ref.table}`)}catch(D){$.push(`${S.ref.db}/${S.ref.table}: ${D?.message??String(D)}`)}const x=Ti(s.maxImportRows),E=n.maxRows!=null?Math.min(n.maxRows,x):x;if(Fy(e,{imported:p,skipped:d,totalRows:m,capped:w,cap:E,partial:y,failed:$,requested:a.length}),p>0&&!n.skipViews)try{await Ay(e,t,S=>Mh(e,S,n))}catch{}}async function Mh(e,t,n){for(const r of t)await Ii(e,r,{...n,skipViews:!0})}async function jy(e,t,n){const r=`${n.db}/${n.table}`,s={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},i=(await e.store.tables.find()).filter(d=>d.workspaceId===t),o=i.find(d=>d.name.toLowerCase()===r.toLowerCase());let a=r;if(o){const d=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!d||d==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(d==="Overwrite")return await e.store.tables.patch(o.id,{origin:s,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};a=cn(new Set(i.map(p=>p.name)),r)}const c=_e();return await e.store.tables.insert({id:c,workspaceId:t,name:a,code:Le(`${n.db}-${n.table}`),columns:[],view:"table",origin:s,updatedAt:Date.now()}),{tableId:c,overwrite:!1}}async function Ny(e,t,n,r,s,i,o){const a=`${n.db}/${n.table}`,c=m=>e.backend.fetch(m),d=Ti(o.maxImportRows),p=i.maxRows!=null?Math.min(i.maxRows,d):d;zt(t,!0);try{let m=[],w=s,y=!1,$=!1,x=[];try{const ye=await _i(c,n);m=ye.columns,w==null&&(w=ye.count,y=ye.countTruncated),$=ye.typed,x=ye.pks??[]}catch{}if(w==null){const ye=await Eh(c,n);w=ye.count,y=ye.truncated}const E=w&&w>0&&(!y||p<=w)?Math.min(w,p):0,S=[];let D=!1,W=!1,z=0,re,G,T;for(;;){const ye=await ns(c,n,{maxRows:Math.max(0,p-S.length),pageSize:o.pageSize,...T?{startUrl:T}:{},onProgress:et=>{E>0&&zt(t,!0,Math.min(1,(S.length+et)/E))}});if(S.push(...ye.rows),D=D||ye.truncated,z+=ye.pages,W=ye.hasMore,re=ye.error,G=ye.nextUrl,!ye.error||!ye.nextUrl||S.length>=p)break;const Re=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${a}" paused after ${S.length.toLocaleString()} rows (${ye.error}). Datasette may be rate-limiting a large import. Wait ${Re} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Re}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Re}`)break;zt(t,!0),e.ui.dialogs.toast(`Resuming "${a}" in ${Re}…`,{kind:"info",title:"Import paused"}),await Oy(Dy(o.retryWaitSeconds)),T=ye.nextUrl,re=void 0,G=void 0}let J=m.length===0?Ci(S):$?m:ul(m,S),ue={};try{const ye=await ll(c,n),Re=cl(ye,J);J=Re.columns,ue=Re.patch}catch{}ue=hl(ue,n.base,n.db,n.table);const pe=await e.store.tables.findOne(t),H=pe?.columns??[],Z=H.length===0;let{columns:K}=vi(H,J,pe?.deletedColumns),se=S;if(i.editColumns&&Z){const ye=await i.editColumns(K,a);if(ye===null)return{name:a,rowCount:0,hasMore:!1,truncated:!1,pages:z,count:w,error:re};se=zy(se,K,ye),K=ye}const ve=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const Qe=pl(re,G,S.length,w),Ne=x.length>0&&pe?.origin?{origin:{...pe.origin,pks:x}}:{},me=Z?{columns:K,...ue,...Ne,importResume:Qe,updatedAt:ve}:{columns:K,...ue.info?{info:ue.info}:{},...Ne,importResume:Qe,updatedAt:ve};await e.store.tables.patch(t,me);const ze=e.store.rows(t);if(r){const ye=await ze.find();await ze.bulkRemove(ye.map(Re=>Re.id))}const kt=se.map(ye=>({id:_e(),tableId:t,data:ye,updatedAt:ve}));return await ze.bulkInsert(kt),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:kt.length}),{name:a,rowCount:kt.length,hasMore:W,truncated:D,pages:z,count:w,error:re}}finally{zt(t,!1)}}function zy(e,t,n){const r=Ba(t,n);return r?e.map(r):e}function Fy(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,s=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${s} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const i=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.capped.length} capped${i} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${s}`,{kind:"success",title:"Datasette import"})}async function Uy(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await Ei(e);await By(e,n,r)}catch(r){const s=r instanceof He?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function By(e,t,n){const r=bt(t.origin.url),s=p=>e.backend.fetch(p),i=Ti(n.maxImportRows);zt(t.id,!0);let o,a;try{let p=[],m=null,w=!1,y=!1;try{const me=await _i(s,r);p=me.columns,m=me.count,w=me.countTruncated,y=me.typed}catch{}if(m==null){const me=await Eh(s,r);m=me.count,w=me.truncated}const $=m&&m>0&&(!w||i<=m)?Math.min(m,i):0,{rows:x,hasMore:E,truncated:S,error:D,nextUrl:W}=await ns(s,r,{maxRows:i,pageSize:n.pageSize,onProgress:me=>{$>0&&zt(t.id,!0,Math.min(1,me/$))}});let z=p.length===0?Ci(x):y?p:ul(p,x),re={};try{const me=await ll(s,r),ze=cl(me,z);z=ze.columns,re=ze.patch}catch{}re=hl(re,r.base,r.db,r.table);const G=t.columns.length===0,T=vi(t.columns,z,t.deletedColumns);a=T.newFields;const q=Date.now(),J=pl(D,W,x.length,m),ue=G?{columns:T.columns,...re,importResume:J,updatedAt:q}:{columns:T.columns,...re.info?{info:re.info}:{},importResume:J,updatedAt:q};await e.store.tables.patch(t.id,ue);const pe=t.origin?.pks??[],H=new Set(z.map(me=>me.field)),Z=t.columns.map(me=>me.field).filter(me=>!H.has(me)&&!pe.includes(me)),K=(t.deletedColumns??[]).filter(me=>H.has(me)),se=e.store.rows(t.id),ve=await se.find(),{data:Qe,droppedUserRows:Ne}=uh({oldRows:ve.map(me=>({data:me.data})),freshRows:x,pks:pe,userAddedFields:Z,deletedRemoteFields:K});await se.bulkRemove(ve.map(me=>me.id)),await se.bulkInsert(Qe.map(me=>({id:_e(),tableId:t.id,data:me,updatedAt:q}))),o={rowCount:Qe.length,hasMore:E,truncated:S,error:D,droppedUserRows:Ne}}finally{zt(t.id,!1)}const c=[];if(o.error)c.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const p=i<Number.MAX_SAFE_INTEGER?` at ${i.toLocaleString()}`:"";c.push(`capped${p}`)}a.length>0&&c.push(`${a.length} new column${a.length===1?"":"s"}`),o.droppedUserRows>0&&c.push(`${o.droppedUserRows} row${o.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${o.droppedUserRows===1?"it":"them"} could not be carried over`);const d=c.length?` — ${c.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${d}.`,{kind:o.error||o.hasMore||o.truncated||a.length>0||o.droppedUserRows>0?"warning":"success",title:"Refresh"}),a.length>0&&Hy(t.id,r,a)}async function qy(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const s=await Ei(e),i=Ti(s.maxImportRows),o=bt(n.origin.url),a=$=>e.backend.fetch($),c=r.loadedRows,d=r.totalCount??null,p=d&&d>0?Math.min(d,i):0;zt(t,!0,p>0?Math.min(1,c/p):void 0);let m,w;try{const $=await ns(a,o,{startUrl:r.nextUrl,maxRows:Math.max(0,i-c),pageSize:s.pageSize,onProgress:S=>{p>0&&zt(t,!0,Math.min(1,(c+S)/p))}});m=$.rows.length;const x=Date.now();await e.store.rows(t).bulkInsert($.rows.map(S=>({id:_e(),tableId:t,data:S,updatedAt:x}))),w={error:$.error,nextUrl:$.nextUrl};const E=pl($.error,$.nextUrl,c+m,d);await e.store.tables.patch(t,{importResume:E,updatedAt:x})}catch($){const x=$ instanceof He?$.message:$?.message??String($);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${x}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{zt(t,!1)}const y=c+m;w.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${m} rows (${y} total) — interrupted again (${w.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${m} rows (${y} total).`,{kind:"success",title:"Resume import"})}function Hy(e,t,n){const r=n.join(", "),s=n.length!==1,i=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${s?"s":""}: ${r}. Review, reorder or hide ${s?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:i}}))}const Ky=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:Ii,init:Ly,meta:Py},Symbol.toStringTag,{value:"Module"}));var Vy=Object.defineProperty,Gy=Object.getOwnPropertyDescriptor,rs=(e,t,n,r)=>{for(var s=r>1?void 0:r?Gy(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Vy(t,n,s),s};const Wy="https://latest.datasette.io/ephemeral";let Et=class extends ke{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),Et.instance=this}disconnectedCallback(){super.disconnectedCallback(),Et.instance===this&&(Et.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return k`
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
                placeholder="e.g. ${Wy}"
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
    `}};Et.instance=null;Et.styles=[yt,Se`
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
    `];rs([F()],Et.prototype,"url",2);rs([F()],Et.prototype,"token",2);rs([F()],Et.prototype,"status",2);rs([F()],Et.prototype,"statusKind",2);Et=rs([Ee("datasette-connect-dialog")],Et);class Yy extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function jh(e){return`datasette:token:${e}`}function Qy(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function Jy(e,t,n){const r=e.source,s=r?.config??{},i={base:s.base,db:s.db,table:s.table,query:{}},o=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],a=r?.writable===!0,c=s.maxRows;let d=null;function p(){return c!=null?Promise.resolve(c):(d||(d=n?Ei(n).then(T=>T.connectMaxRows):Promise.resolve(dl)),d)}const m=s.pollIntervalMs??0,w=(T,q)=>t.backend.fetch(T,q);async function y(){const q=(await t.settings.findOne(jh(s.base)))?.value;return typeof q=="string"&&q.length>0?q:void 0}const $=async(T,q)=>tr(w,await y())(T,q);function x(T){return{id:fy(T,o)??_e(),tableId:e.id,data:T,updatedAt:Date.now()}}function E(T){if(!a)throw new Yy(T)}function S(T){const q={};for(const[J,ue]of Object.entries(T))o.includes(J)||(q[J]=ue);return q}const D=new Set;let W=[],z=!1,re=null;function G(){return re||(re=(async()=>{try{const{rows:T}=await ns($,i,{maxRows:await p()});W=T.map(x),z=!0;for(const q of D)q(W);return W}finally{re=null}})(),re)}return{async find(T){const q=z?W:await G();return!T||Object.keys(T).length===0?q:q.filter(J=>Qy(J,T))},async findOne(T){return(z?W:await G()).find(J=>J.id===T)??null},async insert(T){E("insert");const[q]=await au($,i,[T.data]),J=x(q??T.data);return t.events.emit("row:created",{tableId:e.id,row:J}),G(),J},async bulkInsert(T){if(T.length===0)return[];E("insert");const q=await au($,i,T.map(ue=>ue.data)),J=(q.length?q:T.map(ue=>ue.data)).map(x);return G(),J},async upsert(T){E("upsert");const[q]=await Cy($,i,[T.data]),J=x(q??T.data);return G(),J},async patch(T,q){E("update");const J=q.data,ue=S(J??{}),pe=await ky($,i,T,ue),H=x(pe??{...J??{}});return t.events.emit("row:updated",{tableId:e.id,row:H,prev:H}),G(),H},async remove(T){E("delete"),await lu($,i,T),t.events.emit("row:deleted",{tableId:e.id,rowId:T}),G()},async bulkRemove(T){if(T.length!==0){E("delete");for(const q of T)await lu($,i,q);G()}},subscribe(T){D.add(T),z?T(W):G();let q=null;return m>0&&(q=setInterval(()=>void G(),m)),()=>{D.delete(T),q&&clearInterval(q)}},async refresh(){await G()}}}const Xy='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Zy={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function ev(e){Lh(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:Xy,order:10,description:"A live, editable table on any Datasette instance",connect:t=>nv(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>tv(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>Jy(t,n,e)})}async function tv(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const s=await r.find();e.ui.dialogs.toast(`Reloaded ${s.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const s=r instanceof He?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function nv(e){const t=Et.instance??rv(),n=(s,i)=>e.backend.fetch(s,i),r=await t.open({initialUrl:"https://datasette.io",async onTest(s,i){const o=bt(s),a=await Th(n,o.base,{token:i||void 0});if(o.db&&o.table){await na(tr(n,i||void 0),o);const d=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${d} — table found, signed in, read-write.`:`Reachable${d} — table found, read-only (no token / not authenticated).`}if(!a.reachable)return`Unreachable: ${a.error??"no response"}`;const c=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${c} — signed in, read-write.`:`Reachable${c} — read-only (no token / not authenticated).`},async onConnect(s,i){const o=bt(s);o.db&&o.table&&await na(tr(n,i||void 0),o)}});if(r)try{await Nh(e,r.url,r.token)}catch(s){const i=s instanceof He?s.message:s?.message??String(s);await e.ui.dialogs.alert(i,"Connect Datasette failed")}}function rv(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Nh(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=bt(t),i=(m,w)=>e.backend.fetch(m,w),o=tr(i,n||void 0),a=await Th(i,s.base,{token:n||void 0});n&&await e.store.settings.upsert({name:jh(s.base),value:n});let c;try{c=await fl(o,s,"Connect")}catch(m){const w=m instanceof He?m.message:m?.message??String(m);throw new Error(`Couldn't read tables from ${ai(s.base)}: ${w}`,{cause:m})}if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const d=[];for(const m of c){const w=await sv(e,r,s.base,m,a.writable,n);w!==null&&d.push({tableId:w,c:m})}if(d.length===0)return;const p=a.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${d.length} live table${d.length===1?"":"s"} from Datasette (${p}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:m,c:w}of d)iv(e,m,s.base,w,n)}async function sv(e,t,n,r,s,i){const o=(await e.store.tables.find()).filter(w=>w.workspaceId===t);let a=`${r.db}/${r.table}`,c=o.find(w=>{const y=w.source?.config;return w.source?.type==="datasette"&&y?.base===n&&y?.db===r.db&&y?.table===r.table});if(!c){const w=o.find(y=>y.name.toLowerCase()===a.toLowerCase());if(w){const y=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!y||y==="Skip")return null;y==="Overwrite"?c=w:a=cn(new Set(o.map($=>$.name)),a)}}let d=r.pks??[];if(d.length===0){const w=tr((y,$)=>e.backend.fetch(y,$),i||void 0);try{d=await _y(w,{base:n,db:r.db,table:r.table,query:{}})}catch{d=[]}}const p=c?.id??_e(),m={...c??{},id:p,workspaceId:t,name:a,code:Le(`${r.db}-${r.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:s,config:{base:n,db:r.db,table:r.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(m):await e.store.tables.insert(m),p}async function iv(e,t,n,r,s){const i={base:n,db:r.db,table:r.table,query:{}},o=tr((a,c)=>e.backend.fetch(a,c),s||void 0);try{let a=[],c=!1;try{const x=await _i(o,i);a=x.columns,c=x.typed}catch{}const{rows:d}=await ns(o,i,{maxRows:50,pageSize:50}),p=a.length===0?Ci(d):c?a:ul(a,d);if(p.length===0)return;const m=await e.store.tables.findOne(t);if(!m)return;const w=m.source?.config?.pks??[];let y=p.map(x=>w.includes(x.field)?{...x,unique:!0,notnull:!0}:x),$={};try{const x=await ll(o,i),E=cl(x,y);y=E.columns,$=E.patch}catch{}$=hl($,i.base,r.db,r.table),await e.store.tables.patch(t,{columns:y,...$,updatedAt:Date.now()})}catch{}}const ov=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Nh,init:ev,meta:Zy},Symbol.toStringTag,{value:"Module"})),av={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function lv(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:zh}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class _n extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function cv(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const du=5e4;function uv(e){return e.ok===!0&&Array.isArray(e.rows)}function dv(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const s of["next_url","nextUrl","next"]){const i=n[s];if(typeof i!="string")continue;const o=i.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const a=new URL(o,t);if(a.origin!==r.origin)continue;return a.toString()}catch{continue}if(s==="next"&&uv(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function hv(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function zh(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",s=n.format==="json"?"json":"csv",i=new Set;let o=[],a=!1,c=null;function d($){return $.map((x,E)=>({id:`url:${E}`,tableId:e.id,data:x,updatedAt:0}))}async function p($){let x;try{x=await t.backend.fetch($)}catch(E){throw new Error(`Could not reach ${r}: ${E?.message??String(E)}`,{cause:E})}if(!x.ok)throw new Error(`Could not load ${r}: HTTP ${x.status} ${x.statusText}`);try{return await $d(x)}catch(E){throw new Error(`Could not read response from ${r}: ${E?.message??String(E)}`,{cause:E})}}async function m($){const x=La($);let E=await p(x);if(yd(E)){const S=vd(x);S&&(E=await p(S))}try{if(s==="json"){const S=JSON.parse(E);return{records:hv(S),nextUrl:dv(S,x)}}return{records:ir(E).rows,nextUrl:null}}catch(S){throw new Error(`Could not parse ${s.toUpperCase()} from ${r}: ${S?.message??String(S)}`,{cause:S})}}async function w(){if(!r)throw new Error("This reference table has no URL configured.");const $=[];let x=r;const E=new Set;for(;x&&$.length<du&&!E.has(x);){E.add(x);const S=await m(x);$.push(...S.records),x=S.records.length>0?S.nextUrl:null}return $.slice(0,du)}function y(){return c||(c=(async()=>{try{const $=await w();o=d($),a=!0;for(const x of i)x(o);return o}finally{c=null}})(),c)}return{async find($){const x=a?o:await y();return!$||Object.keys($).length===0?x:x.filter(E=>cv(E,$))},async findOne($){return(a?o:await y()).find(E=>E.id===$)??null},async insert(){throw new _n("insert")},async bulkInsert(){throw new _n("insert")},async upsert(){throw new _n("upsert")},async patch(){throw new _n("update")},async remove(){throw new _n("delete")},async bulkRemove(){throw new _n("delete")},subscribe($){return i.add($),a?$(o):y(),()=>{i.delete($)}},async refresh(){a=!1,o=[],await y()}}}const fv=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:_n,createUrlCollection:zh,init:lv,meta:av},Symbol.toStringTag,{value:"Module"}));function Ke(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function hu(e){return`'${e.replace(/'/g,"''")}'`}function fu(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${Ke(n.from.alias)}.${Ke(n.from.field)}`,computed:!1}:null}function pv(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",s=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,i=[];for(const y of e.columns)y.from.kind==="source"?i.push(`  ${Ke(y.from.alias)}.${Ke(y.from.field)} AS ${Ke(y.field)}`):i.push(`  NULL AS ${Ke(y.field)} -- computed in-app by a script; no SQL equivalent`);i.length===0&&i.push("  *");const a=[`SELECT${s!=null&&r==="top"?` TOP ${s}`:""}`,i.join(`,
`)],c=t.tableNames[n.alias]??n.tableName;a.push(`FROM ${Ke(c)} AS ${Ke(n.alias)}`);for(const y of e.sources.slice(1)){const $=t.tableNames[y.alias]??y.tableName;if(!y.join){a.push(`CROSS JOIN ${Ke($)} AS ${Ke(y.alias)}`);continue}const x=y.join.type==="inner"?"INNER JOIN":"LEFT JOIN",E=y.join.on.map(S=>`${Ke(y.alias)}.${Ke(S.field)} = ${Ke(S.eqAlias)}.${Ke(S.eqField)}`).join(" AND ");a.push(`${x} ${Ke($)} AS ${Ke(y.alias)} ON ${E||"1 = 1"}`)}const d=[],p=[];for(const[y,$]of Object.entries(e.filters??{})){if(!$)continue;const x=fu(e,y);if(x){if(x.computed){p.push(`-- filter on ${Ke(y)} (${hu($)}) applies to a computed column; enforced in-app only`);continue}d.push(`LOWER(${x.expr}) LIKE ${hu(`%${$.toLowerCase()}%`)}`)}}d.length>0&&a.push(`WHERE ${d.join(`
  AND `)}`);const m=(t.orderBy??[]).map(y=>{const $=fu(e,y.field);return!$||$.computed?null:`${$.expr} ${y.asc?"ASC":"DESC"}`}).filter(y=>y!==null);m.length>0&&a.push(`ORDER BY ${m.join(", ")}`);const w=s==null?"":r==="limit"?`
LIMIT ${s}`:r==="fetch"?`
FETCH FIRST ${s} ROWS ONLY`:"";return`${a.join(`
`)}${w};
${p.length>0?`${p.join(`
`)}
`:""}`}const mv={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function gv(){}async function Fh(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(a=>a.workspaceId===t),r=n.filter(a=>a.source?.type!=="projection"),s=n.filter(a=>a.source?.type==="projection"),i=bv(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${s.length>0?` (+ ${s.length} projection${s.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const a of r){const c=await e.store.rows(a.id).find();o.push(qh(a,c),"")}if(o.push("COMMIT;",""),s.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const a of s)o.push(`-- projection: ${a.name}`,ml(a,i)??"","")}return o.join(`
`)}function bv(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,nr(n.code||n.name));return n=>t.get(n)??nr(Le(n))}function Uh(e,t){const n=Bh(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",qh(e,t),"","COMMIT;",""].join(`
`)}function Bh(e,t){const n=ml(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function ml(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>nr(Le(o))),s={};for(const o of n.sources)s[o.alias]=r(o.tableName);const i=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return pv(n,{tableNames:s,limitStyle:"limit",...i?{orderBy:i}:{}})}function qh(e,t){const n=nr(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(i=>`  ${wv(i)}`)],s=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(a=>a.field)].map(a=>`"${nr(a)}"`).join(", ");for(const a of t){const c=[pu(a.id),...e.columns.map(d=>pu(a.data[d.field],d.type))];s.push(`INSERT INTO "${n}" (${o}) VALUES (${c.join(", ")});`)}}return s.join(`
`)}function wv(e){const t=[`"${nr(e.field)}"`,yv(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function yv(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function pu(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=vv(e);return n===null?"NULL":Fs(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Fs(e.toISOString()):Fs(typeof e=="string"?e:JSON.stringify(e))}function vv(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?mu(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?mu(r):null}return null}function mu(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function Fs(e){return`'${e.replace(/'/g,"''")}'`}function nr(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const $v=Object.freeze(Object.defineProperty({__proto__:null,init:gv,meta:mv,projectionSelectBody:ml,projectionSelectFor:Bh,serializeTableAsSql:Uh,serializeWorkspaceAsSql:Fh},Symbol.toStringTag,{value:"Module"})),Hh=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function gu(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(Hh))t.add(r[2]);return[...t]}const gl=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Vn=e=>gl(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function xv(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function kv(e,t,n,r,s){const i=r?.type??"string",o=gl(r?.label||e),a=`class="eda-input" data-eda-row="${Vn(n)}" data-eda-field="${Vn(e)}" data-eda-type="${Vn(i)}"`,c=s?" disabled":"";let d;if(i==="boolean")d=`<input type="checkbox" ${a}${xv(t)?" checked":""}${c} />`;else{const p=i==="number"?"number":"text",m=t==null?"":Vn(String(t));d=`<input type="${p}" ${a} value="${m}"${c} />`}return`<label class="eda-input-field" title="${o}">${d}<span class="eda-input-label">${o}</span></label>`}function bu(e,t){const n=Vn(e),r=Vn(t);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${n}" data-eda-filter-value="${r}" title="Filter by ${n}: ${r}">${gl(t)}</button>`}function Cv(e,t){return t?.type==="array"||Array.isArray(e)?Tt(e):null}function _v(e,t,n){const r=Cv(t,n);return r?r.map(s=>bu(e,s)).join(""):t==null||t===""?"":bu(e,String(t))}function Sv(e,t,n,r={}){return e.replace(Hh,(s,i,o)=>{const a=n[o];if(!a)return"";const c=t.data[a];if(!i)return c==null?"":String(c);const d=r.columns?.get(a);if(i.startsWith("filter"))return _v(a,c,d);const p=r.readonly===!0||!!d?.script?.trim();return kv(a,c,t.id,d,p)})}function wu(e){return e==null||e===""}function Ev(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const s=Wa(r.script,e.data);n??={...e.data},n[r.field]=s.ok?s.value:`⚠ ${s.label}`}return n?{...e,data:n}:e}function yu(e,t){return t.some(n=>n.script?.trim())?e.map(n=>Ev(n,t)):e}function vu(e,t,n){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");if(r.length===0)return e;const s=new Map((n??[]).map(i=>[i.field,i.type]));return e.filter(i=>r.every(([o,a])=>Br(i.data[o],a,{type:s.get(o)})))}function Ai(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function Tv(e,t){const n=Pn(e??"");return n.some(r=>Ai(r,t))||n.push({term:t,negate:!1,exact:!0}),an(n)}function Iv(e,t){const n=Pn(e??"").filter(r=>!Ai(r,t));return an(n)}function Kh(e,t){return e.exact===!0&&e.negate===!0&&e.term.toLowerCase()===t.toLowerCase()}function Av(e,t){const n=Pn(e??"");return n.some(r=>Ai(r,t))?"on":n.some(r=>Kh(r,t))?"not":"off"}function Rv(e,t){const n=Av(e,t),r=Pn(e??"").filter(s=>!Ai(s,t)&&!Kh(s,t));return an(n==="off"?[...r,{term:t,negate:!1,exact:!0}]:n==="on"?[...r,{term:t,negate:!0,exact:!0}]:r)}function Ov(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((s,i)=>{const o=s.data[t],a=i.data[t],c=wu(o),d=wu(a);if(c||d)return c===d?0:c?1:-1;const p=Number(o),m=Number(a);return!Number.isNaN(p)&&!Number.isNaN(m)?(p-m)*r:String(o).localeCompare(String(a),void 0,{numeric:!0,sensitivity:"base"})*r})}function ra(e,t,n){const r=vu(e,t.filters??{},n),s=vu(r,t.pillFilters??{},n);return Ov(s,t.sortColumn,t.sortAsc??!0)}function Dv(e){return!!e&&e.trim().length>0}function Vh(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function Pv(e,t){return t==="raw"||t==="structure"?e:{...e,columns:Vh(e,t)}}function Gh(e,t,n){return n==="structure"?[]:n==="raw"?t:ra(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc},e.columns)}function bl(e,t){const n=e.columns.map(s=>s.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(s=>{const i={};for(const o of n)i[o]=s.data[o];return i})}}const Lv={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Mv(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:s}=await Pe(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:a}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(i,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const a=await Ri(t);await t.backend.saveFile(`workspace-${r}.db.json`,a,"application/json")}else if(o==="sql"){const a=await Fh(t);await t.backend.saveFile(`workspace-${r}.sql`,a,"application/sql")}}catch(a){t.ui.dialogs.toast(`Export failed: ${a.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Pe(async()=>{const{AnchoredMenu:d}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:d}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!i)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const a=await t.ui.dialogs.choice(`Export "${o.name}" as ${i.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!a)return;const c=a==="Visible Data"?"visible":a==="Raw Data"?"raw":"structure";try{const d=await t.store.rows(o.id).find(),p=Pv(o,c),m=Gh(o,d,c),w=Le(o.code||o.name||"table"),y=c!=="structure"&&o.source!=null&&d.length===0;if(i==="csv")y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.csv`,Ua(p,m),"text/csv");else if(i==="json"){const $=JSON.stringify(bl(p,m),null,2);await t.backend.saveFile(`${w}.table.json`,$,"application/json")}else i==="sql"&&(y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.sql`,Uh(p,m),"application/sql"))}catch(d){t.ui.dialogs.toast(`Export failed: ${d.message}`,{kind:"error",title:"Export"})}}})}async function Ri(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),s=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:s};for(const o of n){const a=await e.store.rows(o.id).find();i.tables.push({name:o.name,columns:o.columns,rows:a.map(c=>c.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(i,null,2)}const jv=Object.freeze(Object.defineProperty({__proto__:null,init:Mv,meta:Lv,serializeWorkspace:Ri},Symbol.toStringTag,{value:"Module"})),Nv={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},zv="gist:",$u='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Fv(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:$u,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Pe(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(i)try{if(i==="push"||i==="pull"){const o=await r.open(s,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const a=o;i==="push"?await Gv(t,a):await Jh(t,a)}else i==="share"?await Hv(t):i==="view"&&await Kv(t)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:$u,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Pe(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:o}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(i)try{i==="push"?await Yv(t,n.tableId):i==="pull"?await Qv(t,n.tableId):i==="view"&&await Jv(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function Uv(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Bv(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Yh(e,r),await Jh(e))}async function Wh(e){const t=e.workspaceId();return`${zv}${t??"default"}`}async function ss(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const i=(await e.store.settings.findOne(await Wh(e)))?.value;if(i?.user&&i?.token){const o={user:i.user,gistId:i.gistId??"",token:i.token};return await Yh(e,o),o}return null}async function Yh(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await Wh(e),value:t})}function Bv(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const s=n.slice(0,r).trim(),i=n.slice(r+1).trim();s&&(t[s]=i)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function wl(e){const t=await ss(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function qv(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Hv(e){const t=await ss(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(qv(t)))}`,{GistShareDialog:s}=await Pe(async()=>{const{GistShareDialog:i}=await import("./gist-share-dialog-ByfS6BnE.js");return{GistShareDialog:i}},[]);await s.open(r)}async function Kv(e){const t=await ss(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}function Vv(e){return e.endsWith(".table.json")&&!e.startsWith("_easydb")}function Qh(e,t){const n=new Set(t);return[...e].filter(r=>Vv(r)&&!n.has(r)).sort()}async function Gv(e,t="all"){const n=await wl(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=t!=="settings",i=t!=="data",o=(await e.store.tables.find()).filter(D=>D.workspaceId===r);if(s&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const a=1e8,c=1e7,d={},p=[],m=[];if(s)for(const D of o){const W=D.source!=null?[]:await e.store.rows(D.id).find(),z=JSON.stringify(bl(D,W),null,2),re=`${D.name} (${(z.length/1e6).toFixed(2)} MB)`;z.length>a?p.push(re):z.length>c&&m.push(re),d[`${Le(D.name)}.table.json`]={content:z}}if(p.length>0||m.length>0){const D=[];if(p.length>0&&D.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${p.join(`
`)}`),m.length>0&&D.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${m.join(`
`)}`),!await e.ui.dialogs.confirm(`${D.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(i){const D=(await e.store.viewTemplates.find()).filter(T=>T.workspaceId===r),W=(await e.store.viewInstances.find()).filter(T=>T.workspaceId===r),z=(await e.store.settings.find()).map(T=>({name:T.name,value:T.value})),{kept:re,withheld:G}=ig(z);G.length>0&&e.ui.dialogs.toast(`Not pushed: ${G.join(", ")} — a secret is stored as its own value. Move it into the secrets store (Settings → General) and reference it with \${secret:name}.`,{kind:"warning",title:"Gist sync"}),d["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:D,viewInstances:W,settings:re},null,2)}}const w={...d};let y=[];if(s&&n.gistId){y=await Wv(e,n,Object.keys(d));for(const D of y)w[D]=null}let $;if(n.gistId){const D=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:w,description:`easyDBAccess workspace: ${r}`})});if(!D.ok)throw new Error(await Gr(D));$=await D.json()}else{const D=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:d})});if(!D.ok)throw new Error(await Gr(D));$=await D.json(),n.gistId=$.id,await e.settings.set("gist-sync","gist_id",$.id)}const x=$.html_url??`https://gist.github.com/${n.user}/${$.id}`,E=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`,S=y.length>0?`  Removed ${y.length} file${y.length===1?"":"s"}.`:"";e.ui.dialogs.toast(`Pushed ${E}.${S}  ${x}`,{kind:"success",title:"Gist sync"})}async function Jh(e,t="all"){const n=t!=="settings",r=t!=="data",s=await wl(e);if(!s||!s.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const i=e.workspaceId();if(!i)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${s.gistId}`,{headers:{Authorization:`Bearer ${s.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Gr(o));const a=await o.json(),c=Object.entries(a.files).filter(([D])=>D.endsWith(".table.json")&&!D.startsWith("_easydb"));if(n&&c.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const d=(await e.store.tables.find()).filter(D=>D.workspaceId===i),p=new Map(d.map(D=>[D.name.toLowerCase(),D]));let m=0;const w=[],y=new Map;if(n){const{TopProgress:D}=await Pe(async()=>{const{TopProgress:z}=await import("./top-progress-8B6rqTNy.js");return{TopProgress:z}},[]),W=D.begin("Pulling from gist…");try{for(const[z,[re,G]]of c.entries())try{const T=await li(G),q=JSON.parse(T);if(!q.name||!Array.isArray(q.columns))throw new Error("unexpected file shape (missing name/columns)");let J;const ue=p.get(q.name.toLowerCase());if(ue){if(J=await e.store.tables.patch(ue.id,{title:q.title,columns:q.columns,...ia(q),updatedAt:Date.now()}),J.source==null){const pe=e.store.rows(ue.id),H=await pe.find();await pe.bulkRemove(H.map(Z=>Z.id))}}else J=await e.store.tables.insert({id:_e(),workspaceId:i,name:q.name,title:q.title,code:Le(q.name),columns:q.columns,view:q.view??"table",...ia(q),updatedAt:Date.now()});if(J.source==null){const pe=(q.rows??[]).map(H=>({id:_e(),tableId:J.id,data:H,updatedAt:Date.now()}));await e.store.rows(J.id).bulkInsert(pe)}y.set(q.name,J.id),m++}catch(T){w.push({file:re,error:T.message})}finally{W.fraction((z+1)/c.length)}}finally{W.done()}}let $=0,x="",E=null;const S=r?a.files["_easydb.workspace.json"]:void 0;if(S)try{const D=await li(S),W=JSON.parse(D),z=W.viewTemplates??[],re=W.viewInstances??[],G=W.settings??[];E=new Set(re.map(q=>q.id));const T=await Nd(e.store.viewTemplates,i,z);for(const q of re){let J;if(q.tableName&&(J=y.get(q.tableName)??p.get(q.tableName)?.id),J??=q.tableId,!J)continue;const ue=T.get(q.templateId)??q.templateId;await e.store.viewInstances.upsert({...q,workspaceId:i,tableId:J,templateId:ue}),$++}for(const q of G)await e.store.settings.upsert(q)}catch(D){x=`Workspace metadata import failed: ${D.message}`}if(w.length>0){const D=w.map(W=>`• ${W.file}: ${W.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${m} of ${c.length} tables. ${w.length} failed:
${D}${x?`
${x}`:""}`,{kind:"warning",title:"Gist sync"})}else{const D=$>0?` (+${$} views)`:"",W=t==="settings"?`Pulled settings${D}.`:`Pulled ${m} table${m===1?"":"s"}.${D}`;e.ui.dialogs.toast(W,{kind:"success",title:"Gist sync"}),x&&e.ui.dialogs.toast(x,{kind:"warning",title:"Gist sync"})}w.length===0&&await Xh(e,i,{tableNames:n?new Set([...y.keys()].map(D=>D.toLowerCase())):null,viewInstanceIds:E}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Wv(e,t,n){let r;try{const o=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)return[];const a=await o.json();r=Object.keys(a.files??{})}catch{return[]}const s=Qh(r,n);return s.length===0?[]:await e.ui.dialogs.confirm(`The gist has these table files that this workspace no longer has:

${sa(s)}

Delete them from the gist, so it matches this workspace? Keep them if another device pushed them and you have not pulled yet.`,"Delete table files missing from this workspace?")?s:[]}function sa(e,t=8){const n=e.slice(0,t).map(s=>`• ${s}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function Xh(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(c=>c.workspaceId===t&&!n.tableNames.has(c.name.toLowerCase())):[],s=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(c=>c.workspaceId===t&&!n.viewInstanceIds.has(c.id)):[];if(r.length===0&&s.length===0)return;const i=[];if(r.length>0&&i.push(`${r.length} table${r.length===1?"":"s"}:
`+sa(r.map(c=>c.name))),s.length>0&&i.push(`${s.length} view${s.length===1?"":"s"}:
`+sa(s.map(c=>c.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${i.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const c of s)await e.store.viewInstances.remove(c.id);const{deleteTable:a}=await Pe(async()=>{const{deleteTable:c}=await Promise.resolve().then(()=>$l);return{deleteTable:c}},void 0);for(const c of r)await a(c.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${s.length} view${s.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function Yv(e,t){const n=await wl(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=r.source!=null?[]:await e.store.rows(t).find(),i=JSON.stringify(bl(r,s),null,2),o={[`${Le(r.name)}.table.json`]:{content:i}},a=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!a.ok)throw new Error(await Gr(a));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Qv(e,t){const n=await ss(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`${Le(r.name)}.table.json`,i=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await Gr(i));const a=(await i.json()).files[s];if(!a){await e.ui.dialogs.alert(`No file "${s}" in the gist for this table.`,"Gist sync");return}const c=await li(a),d=JSON.parse(c);if(!d.name||!Array.isArray(d.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:d.title,columns:d.columns,...ia(d),updatedAt:Date.now()})).source==null){const m=e.store.rows(t),w=await m.find();await m.bulkRemove(w.map($=>$.id));const y=(d.rows??[]).map($=>({id:_e(),tableId:t,data:$,updatedAt:Date.now()}));await m.bulkInsert(y)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Jv(e,t){const n=await ss(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`file-${Le(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${s}`,"_blank","noopener")}function ia(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function li(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function Gr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Xv=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:li,init:Fv,load:Uv,meta:Nv,offerPrune:Xh,staleTableFiles:Qh},Symbol.toStringTag,{value:"Module"})),Zh="server-sync:url";function ef(e){return`server-sync:etag:${e}`}async function tf(e){const n=(await e.store.settings.findOne(Zh))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function Zv(e,t){await e.store.settings.upsert({name:Zh,value:t.replace(/\/+$/,"")})}async function nf(e,t){const r=(await e.store.settings.findOne(ef(t)))?.value;return typeof r=="string"?r:null}async function On(e,t,n){await e.store.settings.upsert({name:ef(t),value:n})}function Oi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function xu(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function rf(e,t,n){const r=Zr(n,t),s=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of s){const a=e.store.rows(o.id),c=await a.find();await a.bulkRemove(c.map(d=>d.id)),await e.store.tables.remove(o.id)}let i=0;for(const o of r){const a=_e(),c=await e.store.tables.insert({id:a,workspaceId:t,name:o.name,code:Le(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),d=o.rows.map(p=>({id:_e(),tableId:c.id,data:p,updatedAt:Date.now()}));await e.store.rows(c.id).bulkInsert(d),i++}return i}const e0={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function t0(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Pe(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(i)try{i==="push"?await n0(t):i==="pull"&&await r0(t)}catch(o){t.ui.dialogs.toast(`${i==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function n0(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await sf(e);if(!n)return;const r=await Ri(e),s=await nf(e,t),i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:i,body:r});if(o.status===412){const c=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){c.currentEtag&&await On(e,t,c.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await of(o));const a=Oi(o.headers.get("ETag"));a&&await On(e,t,a),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function r0(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await sf(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const s=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(s.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!s.ok)throw new Error(await of(s));const i=Oi(s.headers.get("ETag")),o=await s.json(),a=await rf(e,t,o);i&&await On(e,t,i),e.ui.dialogs.toast(`Pulled ${a} table${a===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function sf(e){const t=await tf(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await Zv(e,n),n.replace(/\/+$/,"")}async function of(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const s0=Object.freeze(Object.defineProperty({__proto__:null,init:t0,meta:e0},Symbol.toStringTag,{value:"Module"})),i0={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function o0(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const a0=Object.freeze(Object.defineProperty({__proto__:null,init:o0,meta:i0},Symbol.toStringTag,{value:"Module"}));function Di(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function Pi(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function Li(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const l0={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function c0(e){customElements.get("cell-date")||customElements.define("cell-date",u0),e.ui.registerCellRenderer("date","cell-date")}class u0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Li({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(d0(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",il(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:Pi(n,this.pencil()));return}if(this._readonly){this.textContent=oa(this._value);return}const t=document.createElement("input");t.type="date",t.value=oa(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Di(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function oa(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function d0(e){return e==null||typeof e=="string"&&e.trim()===""?!1:oa(e)===""}const h0=Object.freeze(Object.defineProperty({__proto__:null,init:c0,meta:l0},Symbol.toStringTag,{value:"Module"})),f0={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function p0(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",m0),e.ui.registerCellRenderer("datetime","cell-datetime")}class m0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Li({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(g0(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",il(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:Pi(n,this.pencil()));return}if(this._readonly){this.textContent=aa(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=aa(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Di(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function aa(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function g0(e){return e==null||typeof e=="string"&&e.trim()===""?!1:aa(e)===""}const b0=Object.freeze(Object.defineProperty({__proto__:null,init:p0,meta:f0},Symbol.toStringTag,{value:"Module"})),w0={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function y0(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",v0),e.ui.registerCellRenderer("boolean","cell-boolean")}class v0 extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const s=Li({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(s),this._editor=s;return}const t=kh(this._value);if(t==="invalid"){const s=document.createElement("span");s.textContent=String(this._value),s.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",il(s,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?s:Pi(s,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return Di(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const $0=Object.freeze(Object.defineProperty({__proto__:null,init:y0,meta:w0},Symbol.toStringTag,{value:"Module"})),x0={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function k0(e){customElements.get("cell-color")||customElements.define("cell-color",C0),e.ui.registerCellRenderer("color","cell-color")}class C0 extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const _0=Object.freeze(Object.defineProperty({__proto__:null,init:k0,meta:x0},Symbol.toStringTag,{value:"Module"})),S0=[{bytes:[137,80,78,71,13,10,26,10],type:"image/png"},{bytes:[71,73,70,56],type:"image/gif"},{bytes:[255,216,255],type:"image/jpeg"},{bytes:[66,77],type:"image/bmp"}],la=16;function E0(e){const t=(n,r)=>r.split("").every((s,i)=>e[n+i]===s.charCodeAt(0));return e.length>=12&&t(0,"RIFF")&&t(8,"WEBP")}function Ys(e){for(const{bytes:t,type:n}of S0)if(t.every((r,s)=>e[s]===r))return n;return E0(e)?"image/webp":null}function af(e){if(e==null)return null;const t=I0(e);if(t){const i=Array.prototype.slice.call(t,0,la),o=Ys(i);return o?`data:${o};base64,${uf(t)}`:null}if(typeof e!="string")return null;const n=e.trim();if(n==="")return null;if(n.startsWith("data:"))return R0(n);if(/^(https?:)?\/\//i.test(n)||n.startsWith("/")&&/\.(png|jpe?g|gif|webp|bmp|svg)(\?|#|$)/i.test(n))return n;const r=A0(n);if(r){const i=cf(r.slice(0,la*2)),o=Ys(i);return o?`data:${o};base64,${O0(r)}`:null}const s=lf(n);if(s){const i=Ys(s);return i?`data:${i};base64,${n}`:null}return null}function T0(e){return af(e)!==null}function I0(e){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.length>0&&e.every(t=>typeof t=="number")?e:null;if(typeof e=="object"&&e!==null){const t=e;if(typeof t[0]!="number")return null;const n=[];for(let r=0;typeof t[String(r)]=="number";r++)n.push(t[String(r)]);return n}return null}function A0(e){const t=/^[xX]\s*(['"])([0-9a-fA-F]*)\1$/.exec(e);return t?.[2]?t[2]:e.length>=8&&e.length%2===0&&/^[0-9a-fA-F]+$/.test(e)?e:null}function lf(e){if(e.length<8||!/^[A-Za-z0-9+/]+={0,2}$/.test(e))return null;try{const t=e.slice(0,Math.ceil(la*4/3));return[...atob(t.slice(0,t.length-t.length%4))].map(r=>r.charCodeAt(0))}catch{return null}}function R0(e){const t=/^data:([^;,]*)(;base64)?,([\s\S]*)$/.exec(e);if(!t)return null;if((t[1]??"").toLowerCase().startsWith("image/"))return e;const r=t[3]??"";if(!t[2])return null;const s=lf(r),i=s&&Ys(s);return i?`data:${i};base64,${r}`:null}function cf(e){const t=[];for(let n=0;n+1<e.length;n+=2)t.push(parseInt(e.slice(n,n+2),16));return t}function uf(e){let n="";for(let r=0;r<e.length;r+=32768){const s=Array.prototype.slice.call(e,r,r+32768);n+=String.fromCharCode(...s)}return btoa(n)}function O0(e){return uf(cf(e))}const D0={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function P0(e){customElements.get("cell-image")||customElements.define("cell-image",L0),e.ui.registerCellRenderer("image","cell-image")}class L0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const s=Li({value:typeof this._value=="string"?this._value:"",onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("mousedown",o=>o.preventDefault()),i.addEventListener("click",()=>this.pickFile()),r.append(s,i),this.append(r),this._editor=s;return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0";const n=af(this._value);if(n){const r=document.createElement("img");r.src=n,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("click",()=>this.pickFile()),t.append(s)}}this.append(this._readonly?t:Pi(t,this.pencil()))}pencil(){return Di(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const M0=Object.freeze(Object.defineProperty({__proto__:null,init:P0,meta:D0},Symbol.toStringTag,{value:"Module"})),df=200,hf=100;function j0(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<df||e.h<hf?null:{...e}}function ci(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const ku=640;function Mi(){return typeof window>"u"?!1:typeof window.matchMedia=="function"?window.matchMedia(`(max-width: ${ku}px)`).matches:window.innerWidth<=ku}const N0=["n","s","e","w","ne","nw","se","sw"];function z0(e,t,n,r){const s=r>0?r:1;return{...e,x:e.x+t/s,y:e.y+n/s}}function F0(e,t,n,r,s,i,o){const a=s>0?s:1,c=n/a,d=r/a;let{x:p,y:m,w,h:y}=e;return t.includes("e")&&(w=Math.max(i,e.w+c)),t.includes("s")&&(y=Math.max(o,e.h+d)),t.includes("w")&&(w=Math.max(i,e.w-c),p=e.x+(e.w-w)),t.includes("n")&&(y=Math.max(o,e.h-d),m=e.y+(e.h-y)),{x:p,y:m,w,h:y}}function U0(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:e?.smallified?{status:"smallified",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function Cu(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function B0(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized",smallified:e.status==="smallified"}}const q0="#01579b",H0="input, textarea, select, button, a, .jsPanel-controlbar";function _u(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(H0))return!0;return!1}const K0={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let No=100;function Su(){let e=No;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return No=e+1,No}function V0(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(!(n===e||n.style.display==="none")&&Number(n.style.zIndex)>t)return!1;return!0}const ca=new Set,Wr=new Set;function G0(){let e=null;for(const t of Wr)t.style.display!=="none"&&(!e||Number(t.style.zIndex)>Number(e.style.zIndex))&&(e=t);return e}const ff=e=>{if(e.key!=="Escape"||e.defaultPrevented)return;const t=G0();t&&(e.preventDefault(),t.close())};function W0(e){Wr.size===0&&document.addEventListener("keydown",ff),Wr.add(e)}function Y0(e){Wr.delete(e)&&Wr.size===0&&document.removeEventListener("keydown",ff)}function Q0(){return[...ca].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function kn(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=K0[e]??"",r.addEventListener("click",s=>{s.stopPropagation(),n()}),r}function ji(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id;let n=e.color??q0;t.style.setProperty("--eda-panel-color",n);const r=document.createElement("div");r.className="jsPanel-hdr";const s=document.createElement("div");s.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const o=document.createElement("div");o.className="jsPanel-titlebar",o.tabIndex=-1,o.style.outline="none",o.addEventListener("pointerdown",()=>o.focus());const a=document.createElement("span");a.className="jsPanel-title",a.textContent=e.title,o.append(a);const c=document.createElement("div");c.className="jsPanel-controlbar",c.append(kn("smallify","Collapse",()=>H("smallify")),kn("minimize","Minimize",()=>H("minimize")),kn("maximize","Maximize",()=>t.maximize()),kn("normalize","Restore",()=>H("normalize")),kn("close","Close",()=>t.close())),s.append(i,o,c),r.append(s);const d=document.createElement("div");d.className="jsPanel-content",d.append(e.content);const p=document.createElement("div");p.className="jsPanel-ftr",e.footerToolbar&&(p.classList.add("active"),p.append(e.footerToolbar)),t.append(r,d,p);const m=[];for(const K of N0){const se=document.createElement("div");se.className="eda-resize",se.dataset.edge=K,t.append(se),m.push({zone:se,edge:K})}if(t.style.zIndex=String(Su()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const K=e.contentSize??{w:720,h:360};t.style.width=`${K.w}px`,t.style.height=`${K.h+r.offsetHeight+p.offsetHeight}px`}const w=e.position??"center",y=t.offsetWidth,$=e.container.clientWidth;w==="center"?(t.style.left=`${Math.max(0,($-y)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in w?(t.style.left=`${Math.max(0,($-y)/2)}px`,t.style.top=`${w.centerTopOffset}px`):(t.style.left=`${w.x}px`,t.style.top=`${w.y}px`);let x=U0(e.boot),E=z(),S=null,D=null,W=null;function z(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function re(K){t.style.left=`${K.x}px`,t.style.top=`${K.y}px`,t.style.width=`${K.w}px`,t.style.height=`${K.h}px`}function G(){const K=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-K.x/K.scale}px, ${-K.y/K.scale}px) scale(${1/K.scale})`}function T(){const K=e.viewport?.getState()??{x:0,y:0,scale:1},se=K.scale||1;return{x:-K.x/se,y:-K.y/se,w:e.container.clientWidth/se,h:e.container.clientHeight/se}}function q(){G(),D??=e.viewport?.subscribe(G)??null,!W&&typeof ResizeObserver<"u"&&(W=new ResizeObserver(G),W.observe(e.container))}function J(){D?.(),D=null,W?.disconnect(),W=null,t.style.transform="",t.style.transformOrigin=""}function ue(){const K=document.createElement("div");K.className="jsPanel-replacement",K.id=`${e.id}-min`,K.style.setProperty("--eda-panel-color",n);const se=document.createElement("div");se.className="jsPanel-headerlogo",se.innerHTML=i.innerHTML;const ve=document.createElement("span");return ve.className="jsPanel-title",ve.textContent=a.textContent,K.append(se,ve,kn("normalize","Restore",()=>{H("normalize"),t.front()}),kn("close","Close",()=>t.close())),K.addEventListener("click",Qe=>{Qe.target.closest("button")||(H("normalize"),t.front())}),K}function pe(K){switch(K==="maximized"&&x.status!=="maximized"&&J(),K==="minimized"&&x.status!=="minimized"&&(S?.remove(),S=null,t.style.display=""),x.status){case"minimized":{K==="normalized"?E=z():K==="smallified"&&(E={...E,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const se=e.minimizeTo?document.querySelector(e.minimizeTo):null;S=ue(),(se??e.container).append(S);break}case"maximized":K==="normalized"?E=z():K==="smallified"&&(E={...E,x:t.offsetLeft,y:t.offsetTop}),q();break;case"smallified":E=z(),t.style.height=`${r.offsetHeight}px`;break;case"normalized":K==="smallified"?E={...E,x:t.offsetLeft,y:t.offsetTop}:K==="maximized"&&Mi()&&(E=T()),re(E);break}t.dataset.status=x.status}function H(K){const se=x;x=Cu(x,K),x.status!==se.status&&(pe(se.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>x.status}),t.minimize=()=>H("minimize"),t.maximize=(K,se)=>{H("maximize"),se!==!0&&t.front()},t.normalize=()=>H("normalize"),t.smallify=()=>H("smallify"),t.front=(K,se)=>{t.style.zIndex=String(Su()),se!==!1&&e.onfronted?.()},t.close=()=>{x.status!=="closed"&&(x=Cu(x,"close"),S?.remove(),J(),ca.delete(t),Y0(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=K=>{a.textContent=K;const se=S?.querySelector(".jsPanel-title");se&&(se.textContent=K)},t.setHeaderLogo=K=>{i.innerHTML=K;const se=S?.querySelector(".jsPanel-headerlogo");se&&(se.innerHTML=K)},t.setHeaderColor=K=>{n=K,t.style.setProperty("--eda-panel-color",n),S?.style.setProperty("--eda-panel-color",n)},t.centerInViewport=()=>{if(x.status!=="normalized"&&x.status!=="smallified")return;const K=T(),se=t.offsetWidth,ve=t.offsetHeight;re({x:K.x+Math.max(0,(K.w-se)/2),y:K.y+Math.max(0,(K.h-ve)/2),w:se,h:ve})},t.persistFlags=()=>B0(x),t.persistRect=()=>x.status==="smallified"?{...E,x:t.offsetLeft,y:t.offsetTop}:x.status==="minimized"||x.status==="maximized"?{...E}:z(),ca.add(t),e.closeOnEscape&&W0(t),t.addEventListener("pointerdown",()=>{V0(t)||t.front()},!0);const Z=K=>{K.addEventListener("pointerdown",se=>{if(se.button!==0||_u(se)||x.status==="maximized"||x.status==="minimized")return;const ve=z(),Qe=e.viewport?.getState().scale??1,Ne=se.pointerId,me=se.clientX,ze=se.clientY;let kt=!1;const ye=st=>{if(st.pointerId!==Ne)return;kt=!0;const et=z0(ve,st.clientX-me,st.clientY-ze,Qe);t.style.left=`${et.x}px`,t.style.top=`${et.y}px`},Re=st=>{st.pointerId===Ne&&(K.removeEventListener("pointermove",ye),K.removeEventListener("pointerup",Re),K.removeEventListener("pointercancel",Re),kt&&e.onmoved?.())};K.setPointerCapture(se.pointerId),K.addEventListener("pointermove",ye),K.addEventListener("pointerup",Re),K.addEventListener("pointercancel",Re)})};Z(o),Z(i),Z(p);for(const{zone:K,edge:se}of m)K.addEventListener("pointerdown",ve=>{if(ve.button!==0||x.status!=="normalized")return;const Qe=z(),Ne=e.viewport?.getState().scale??1,me=ve.pointerId,ze=ve.clientX,kt=ve.clientY;let ye=!1;const Re=et=>{et.pointerId===me&&(ye=!0,re(F0(Qe,se,et.clientX-ze,et.clientY-kt,Ne,df,hf)))},st=et=>{et.pointerId===me&&(K.removeEventListener("pointermove",Re),K.removeEventListener("pointerup",st),K.removeEventListener("pointercancel",st),ye&&e.onresized?.())};K.setPointerCapture(ve.pointerId),K.addEventListener("pointermove",Re),K.addEventListener("pointerup",st),K.addEventListener("pointercancel",st)});return r.addEventListener("dblclick",K=>{_u(K)||(x.status==="maximized"?H("normalize"):t.maximize())}),x.status!=="normalized"?pe("normalized"):t.dataset.status="normalized",t}let pf=null;function J0(e){pf=e}function ui(){return pf}function Ni(){return{getState:()=>ui()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>ui()?.subscribe(e)??(()=>{})}}function mf(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let X0=0;function gf(e,t){const n=document.createElement("button");return n.type="button",n.title=t,n.setAttribute("aria-label",t),n.innerHTML=e,n.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",n.addEventListener("mouseenter",()=>n.style.color="#4b5563"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n}const Z0='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',e$='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>';function ua(e,t,n,r){const s=r?.readonly===!0,i=document.createElement("div");i.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const o=document.createElement("textarea");o.value=t,o.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const a=document.createElement("div");a.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const c=document.createElement("button");c.type="button",c.textContent=s?"Close":"Cancel",c.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const d=document.createElement("button");d.type="button",d.textContent="Save",d.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",s?(o.readOnly=!0,o.style.background="#f9fafb",a.append(c)):a.append(c,d),i.append(o,a);const p=ji({id:`easydb-html-edit-${++X0}`,container:mf(),title:e,color:"#7c3aed",content:i,contentSize:{w:520,h:400},position:"center",closeOnEscape:!0,boot:{maximized:Mi()},minimizeTo:"#easydb-minimized-dock",viewport:Ni()});c.addEventListener("click",()=>p.close()),d.addEventListener("click",()=>{n(o.value),p.close()}),o.addEventListener("keydown",m=>{s||m.key==="Enter"&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),d.click())}),setTimeout(()=>o.focus(),0)}const yl=2e3;let da=yl;function t$(e){da=typeof e=="number"&&Number.isFinite(e)&&e>0?Math.floor(e):yl}let n$=0;class bf extends HTMLElement{constructor(){super(...arguments),this.language="Preview",this._value="",this._readonly=!1}toHtml(t){return t||null}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}get title_(){return this._label??this.language}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText=this._readonly?"color:#9ca3af":"color:#9ca3af;cursor:text",o.textContent="empty",this._readonly||(o.title="Click to edit",o.addEventListener("click",()=>this.openEditor())),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=Ab(this.toHtml(this._value)??this._value);n.textContent=r.length>da?r.slice(0,da)+"…":r,n.title=this._readonly?"Click to view the source":"Click to edit",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const s=document.createElement("span");s.style.cssText="flex:1 1 auto";const i=gf(e$,"Open in a window");i.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,s,i),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box";const n=this.toHtml(this._value);if(n!==null)t.innerHTML=n;else{const r=document.createElement("pre");r.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",r.textContent=this._value,t.append(r)}ji({id:`easydb-preview-popup-${++n$}`,container:mf(),title:this.title_,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},boot:{maximized:Mi()},closeOnEscape:!0,minimizeTo:"#easydb-minimized-dock",viewport:Ni()})}openEditor(){const t=this._source!==void 0,n=t?this._source:this._value;if(this._readonly){ua(`View ${this.title_}`,n,()=>{},{readonly:!0});return}ua(`Edit ${this.title_}`,n,r=>{t?this._source=r:(this._value=r,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:r},bubbles:!0,composed:!0}))})}}const r$={id:"preview",name:"Preview",type:"cell-renderer",version:"0.4.0",description:`Shows a long value as a plain-text preview (first N characters); click to edit the source in a dialog, or use the popup icon to open the full value in a window. HTML is shown there as markup, and Markdown is recognised and converted first — so a Markdown column reads as formatted text without a script. Apply by setting a column's renderer to "preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/preview.ts"};async function Eu(e){t$(await e.settings.get("preview","maxChars"))}function s$(e){customElements.get("preview-cell")||customElements.define("preview-cell",i$),e.ui.registerCellRenderer("preview","preview-cell"),e.ui.registerCellRenderer("html-preview","preview-cell"),e.ui.registerSettings("preview","Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:yl,scope:"workspace",description:"A safety cap on how much text goes into a preview cell. What you SEE follows the column width — the cell ellipsizes like any other, so widen the column to read more. Lower this only to cut long values short regardless of width. Applies to cells rendered after the change (reload to refresh all). Shared with the `markdown` renderer."}]),Eu(e),e.events.on("app:ready",()=>void Eu(e))}class i$ extends bf{toHtml(t){const n=jb(t);return n==="html"?t:n==="markdown"?xi(t):null}}const o$=Object.freeze(Object.defineProperty({__proto__:null,init:s$,meta:r$},Symbol.toStringTag,{value:"Module"})),a$={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup); a pencil on the right edits the source. Apply by setting a column's renderer to "html". For a truncated preview use "preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function l$(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",c$),e.ui.registerCellRenderer("html","html-render-cell")}class c$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML",this._readonly=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label??"HTML"}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:flex;align-items:flex-start;gap:0.25rem;width:100%";const n=document.createElement("span");if(n.style.cssText="flex:1 1 auto;min-width:0",this._value?n.innerHTML=this._value:(n.style.color="#9ca3af",n.textContent="empty"),t.append(n),!this._readonly){const r=gf(Z0,"Edit the HTML");r.addEventListener("click",s=>{s.stopPropagation(),this.openEditor()}),t.append(r)}this.append(t)}openEditor(){const t=this._source!==void 0;ua(`Edit ${this._label}`,t?this._source:this._value,n=>{t?this._source=n:(this._value=n,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))})}}const u$=Object.freeze(Object.defineProperty({__proto__:null,init:l$,meta:a$},Symbol.toStringTag,{value:"Module"})),d$={id:"cell-markdown",name:"Markdown",type:"cell-renderer",version:"0.2.0",description:`For a column written in Markdown: the cell shows one line of plain text with the markers flattened, and the popup icon opens the formatted value in a window. Click the text to edit the Markdown source. Apply by setting a column's renderer to "markdown". Unlike "preview" it never guesses — the value is always read as Markdown.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 15V9l3 3 3-3v6"/><path d="M16 9v6"/><path d="M14 13l2 2 2-2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-markdown.ts"};function h$(e){customElements.get("markdown-cell")||customElements.define("markdown-cell",f$),e.ui.registerCellRenderer("markdown","markdown-cell")}class f$ extends bf{constructor(){super(...arguments),this.language="Markdown"}toHtml(t){return t?xi(t):null}}const p$=Object.freeze(Object.defineProperty({__proto__:null,init:h$,meta:d$},Symbol.toStringTag,{value:"Module"})),m$={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function g$(e){customElements.get("cell-link")||customElements.define("cell-link",b$),e.ui.registerCellRenderer("link","cell-link")}class b$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:w$(t),r=!this._editing&&!n?y$(t):null,s=!this._editing&&!n&&!r?v$(t):null;if(n||r||s){const i=document.createElement("span");i.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const a=document.createElement("button");a.type="button",a.title="Edit",a.textContent="✎",a.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",a.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),this._editing=!0,this.render()}),i.append(o,a),this.append(i)}else{const i=document.createElement("input");i.type="text",i.value=this.rawValue,i.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",i.addEventListener("change",()=>{this._editor===i&&this.commit(i.value)}),i.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(i.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),i.addEventListener("blur",()=>{this._editor===i&&this.commit(i.value)}),this.append(i),this._editor=i,this._editing&&setTimeout(()=>{i.focus(),i.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function w$(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function y$(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function v$(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),s=t.startsWith("+");return!r&&!s&&n.length<10?null:t}const $$=Object.freeze(Object.defineProperty({__proto__:null,init:g$,meta:m$},Symbol.toStringTag,{value:"Module"})),x$={id:"cell-tags",name:"Cell Tags",type:"cell-renderer",version:"0.1.0",description:'Renderer for `array` columns: each value in the cell shows as its own pill. A comma list ("foo,bar"), a JSON array ("[\\"Foo\\",\\"Bar\\"]") and a real array all read the same. A pencil edits the raw list; an empty list shows nothing.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-tags.ts"};function k$(e){customElements.get("cell-tags")||customElements.define("cell-tags",_$),e.ui.registerCellRenderer("tags","cell-tags")}const C$="flex:0 1 auto;min-width:0;display:inline-block;max-width:100%;padding:0 0.4rem;border:1px solid #d1d5db;border-radius:999px;background:#f3f4f6;color:#374151;font-size:0.85em;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";class _$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._readonly=!1,this._editor=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this._readonly&&(this._editing=!1),this.render())}get readonly(){return this._readonly}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing&&!this._readonly){this.renderEditor();return}const t=Tt(this._value),n=document.createElement("span");n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";for(const r of t){const s=document.createElement("span");s.className="tag-pill",s.textContent=r,s.title=r,s.style.cssText=C$,n.append(s)}this._readonly||n.append(this.pencil()),this.append(n)}pencil(){const t=document.createElement("button");return t.type="button",t.title="Edit the list",t.textContent="✎",t.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this._editing=!0,this.render()}),t}renderEditor(){const t=document.createElement("input");t.type="text",t.value=Tt(this._value).length===0?"":this._value,t.title="Comma-separated, or a JSON array",t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",t.addEventListener("change",()=>{this._editor===t&&this.commit(t.value)}),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),this.commit(t.value)):n.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),t.addEventListener("blur",()=>{this._editor===t&&this.commit(t.value)}),this.append(t),this._editor=t,setTimeout(()=>{t.focus(),t.select()},0)}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const S$=Object.freeze(Object.defineProperty({__proto__:null,init:k$,meta:x$},Symbol.toStringTag,{value:"Module"})),Mr={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},E$=120,wf=50,T$=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,I$=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function yf(e){return/^https?:\/\/\S+$/i.test(e)}function A$(e){return/^data:image\//i.test(e)?!0:yf(e)?T$.test(e):T0(e)}function vf(e,t){if(e==="array")return"tags";if(e!=="string")return;const n=[];for(const s of t){if(s==null)continue;const i=typeof s=="string"?s.trim():String(s).trim();i&&n.push(i)}if(n.length===0)return;if(n.every(A$))return"image";if(n.every(yf))return"link";if(n.some(s=>I$.test(s))||n.reduce((s,i)=>s+i.length,0)/n.length>E$)return"preview"}function vl(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=vf(n.type,t.map(s=>s[n.field]));return r?{...n,renderer:r}:n})}function R$(e){e.events.on("import:after",({tableId:t})=>{O$(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:Mr.name}),null;const s=(await t.store.rows(r).find()).slice(0,wf);if(s.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:Mr.name}),null;const i=n.map(({renderer:c,...d})=>d),o=vl(i,s.map(c=>c.data)),a=o.filter((c,d)=>c.renderer!==n[d]?.renderer).length;return t.ui.dialogs.toast(a===0?"No renderer fits these values — columns left as they are.":`Set ${a} renderer${a===1?"":"s"}. Press Save to keep them.`,{kind:a===0?"info":"success",title:Mr.name}),o}})}async function O$(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(i=>i.renderer))return;const r=(await e.store.rows(t).find()).slice(0,wf);if(r.length===0)return;const s=vl(n.columns,r.map(i=>i.data));if(s.every((i,o)=>i.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:s,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:Mr.id,phase:"runtime",error:n})}}const D$=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:vf,init:R$,meta:Mr,withInferredRenderers:vl},Symbol.toStringTag,{value:"Module"}));function Qs(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function P$(e){return!!(e.source||e.origin)}const L$="#01579b",M$="#6d28d9";function Tu(e){return P$(e)?M$:L$}const Pr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',Iu={normal:`<svg ${Pr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${Pr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${Pr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${Pr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},j$=`<svg ${Pr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var N$=Object.defineProperty,z$=Object.getOwnPropertyDescriptor,zi=(e,t,n,r)=>{for(var s=r>1?void 0:r?z$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&N$(t,n,s),s};function F$(e,t,n){(Rt.instance??B$()).show(e,t,n)}function U$(e){if(!e)return null;const t=Qs(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function B$(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let Rt=class extends ke{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),Rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return ie;const r=n?k`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:k`${t}`;return k`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=U$(this.provenance);return k`
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
    `}};Rt.instance=null;Rt.styles=[yt,Se`
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
    `];zi([F()],Rt.prototype,"name",2);zi([F()],Rt.prototype,"info",2);zi([F()],Rt.prototype,"provenance",2);Rt=zi([Ee("table-info-dialog")],Rt);const q$=.25,H$=4;function K$(e){return Math.min(H$,Math.max(q$,e))}function Au(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const Rr={x:0,y:0,scale:1};function Ru(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function V$(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function G$(e,t){let n={...Rr};t.style.transformOrigin="0 0";const r=new Set,s=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const H of r)H({...n})};let i="none",o={...Rr},a=0,c=0,d=0,p=0,m=0,w=0;const y=(H,Z)=>{const K=e.getBoundingClientRect();return{x:H-K.left,y:Z-K.top}},$=H=>{if(H.touches.length===2){i="pinch",o={...n};const[Z,K]=[H.touches[0],H.touches[1]];d=Ru(Z,K)||1;const se=y((Z.clientX+K.clientX)/2,(Z.clientY+K.clientY)/2);p=(se.x-n.x)/n.scale,m=(se.y-n.y)/n.scale,H.preventDefault();return}if(H.touches.length===1&&!V$(H.target)){const Z=H.timeStamp;if(Z-w<300){n={...Rr},s(),w=0,i="none",H.preventDefault();return}w=Z,i="pan",o={...n},a=H.touches[0].clientX,c=H.touches[0].clientY}else i="none"},x=H=>{if(i==="pan"&&H.touches.length===1){const Z=H.touches[0];n=Au(o,Z.clientX-a,Z.clientY-c),s(),H.preventDefault()}else if(i==="pinch"&&H.touches.length>=2){const[Z,K]=[H.touches[0],H.touches[1]],se=K$(o.scale*(Ru(Z,K)/d)),ve=y((Z.clientX+K.clientX)/2,(Z.clientY+K.clientY)/2);n={x:ve.x-p*se,y:ve.y-m*se,scale:se},s(),H.preventDefault()}},E=H=>{H.touches.length===0?i="none":H.touches.length===1&&i==="pinch"&&(i="pan",o={...n},a=H.touches[0].clientX,c=H.touches[0].clientY)};let S=!1,D={...Rr},W=0,z=0,re=!1;const G=(H,Z)=>{const K=e.getBoundingClientRect();return H>=K.left&&H<=K.right&&Z>=K.top&&Z<=K.bottom},T=H=>{if(!S)return;const Z=H.clientX-W,K=H.clientY-z;!re&&Math.hypot(Z,K)<4||(re=!0,document.body.style.cursor="grabbing",n=Au(D,Z,K),s(),H.preventDefault())},q=()=>{S&&(S=!1,document.body.style.cursor="",window.removeEventListener("mousemove",T,!0),window.removeEventListener("mouseup",J,!0))};function J(){q()}const ue=H=>{H.button===2&&G(H.clientX,H.clientY)&&(S=!0,re=!1,D={...n},W=H.clientX,z=H.clientY,window.addEventListener("mousemove",T,!0),window.addEventListener("mouseup",J,!0))},pe=H=>{re&&(H.preventDefault(),re=!1)};return e.addEventListener("touchstart",$,{passive:!1}),e.addEventListener("touchmove",x,{passive:!1}),e.addEventListener("touchend",E),e.addEventListener("touchcancel",E),window.addEventListener("mousedown",ue,!0),window.addEventListener("contextmenu",pe,!0),{snapshot:()=>({...n}),reset:()=>{n={...Rr},s()},restore:H=>{n={...H},s()},subscribe:H=>(r.add(H),()=>r.delete(H)),dispose:()=>{e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",x),e.removeEventListener("touchend",E),e.removeEventListener("touchcancel",E),window.removeEventListener("mousedown",ue,!0),window.removeEventListener("contextmenu",pe,!0),q()}}}const Us=new Map;function is(e,t){const r=(Us.get(e)??Promise.resolve()).then(t,t);return Us.set(e,r),r.finally(()=>{Us.get(e)===r&&Us.delete(e)}),r}let zo=0;function $f(){return zo=Math.max(Date.now(),zo+1),zo}const Fi=new Map;function xf(e,t){Fi.set(e,t)}function Ui(e){Fi.delete(e)}function W$(e){return Fi.has(e)}function Y$(e){try{Fi.get(e)?.()}catch{}}const ln=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function Q$(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let Ou=!1;async function J$(){Ou||(Ou=!0,document.addEventListener("easydb:restack-windows",()=>void Du())),await Du()}async function Du(){if(ln)return;const e=await ae();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),s=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],i=Q$(s);if(t<12&&!i.every(o=>W$(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of i)Y$(o);return}}const X$=12;function Z$(e,t,n,r,s=X$){const i=Pu(e.x,t.x,t.w,n,e.scale,s),o=Pu(e.y,t.y,t.h,r,e.scale,s);return i===e.x&&o===e.y?null:{...e,x:i,y:o}}function Pu(e,t,n,r,s,i){const o=t*s+e,a=n*s,c=o+a,d=r-i*2;return a>=d?o<=i&&c>=r-i?e:i-t*s:o<i?i-t*s:c>r-i?r-i-a-t*s:e}function kf(e){if(e.status==="minimized"&&e.normalize(),Mi()){e.status!=="maximized"&&e.maximize(),e.front();return}e.status!=="maximized"&&ex(e),e.front()}function ex(e){const t=ui(),n=document.getElementById("easydb-panels");if(!t||!n)return;const r=Z$(t.snapshot(),{x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight},n.clientWidth,n.clientHeight);r&&t.restore(r)}var tx=Object.defineProperty,nx=Object.getOwnPropertyDescriptor,os=(e,t,n,r)=>{for(var s=r>1?void 0:r?nx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&tx(t,n,s),s};let Dn=class extends ke{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return k`<button class="icon ${e?"active":""}" title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"} @click=${this.openSearch}>
        <span class="mi sm">search</span>
      </button>`}return k`<input type="search" placeholder="search…" .value=${this.query} @input=${this.onInput} @blur=${this.onBlur} />`}};Dn.styles=[xt,Se`
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
    `];os([wt({type:String})],Dn.prototype,"tableId",2);os([F()],Dn.prototype,"query",2);os([F()],Dn.prototype,"open",2);os([Bt("input")],Dn.prototype,"inputEl",2);Dn=os([Ee("panel-search")],Dn);var rx=Object.defineProperty,sx=Object.getOwnPropertyDescriptor,Ln=(e,t,n,r)=>{for(var s=r>1?void 0:r?sx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&rx(t,n,s),s};let Yt=class extends ke{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.fixedSchemaSources=new Set,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await ae();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(s){console.error(`[table-button:${e.id}]`,s)}}}async connectedCallback(){super.connectedCallback();const e=await ae();this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=Lu(e.registries.rowSources),e.events.on("app:ready",()=>{this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=Lu(e.registries.rowSources)}),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ae();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=ix(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}get schemaEditable(){const e=this.table?.source?.type;return!e||!this.fixedSchemaSources.has(e)}render(){return k`
      ${this.table?.readonly?ie:k`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      ${this.schemaEditable?k`<button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
            <span class="mi sm">view_column</span>
          </button>`:ie}
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>k`<button class=${e.danger?"danger":""} title=${e.tooltip??e.label} aria-label=${e.label} @click=${t=>this.runTableButton(e,t)}>
              ${e.icon?e.icon.trimStart().startsWith("<svg")?k`<span class="icon-svg">${Ta(e.icon)}</span>`:k`<span class="mi sm">${e.icon}</span>`:k`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Yt.styles=[xt,Se`
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
    `];Ln([wt({type:String})],Yt.prototype,"tableId",2);Ln([wt({type:Boolean})],Yt.prototype,"active",2);Ln([F()],Yt.prototype,"rowCount",2);Ln([F()],Yt.prototype,"tableButtons",2);Ln([F()],Yt.prototype,"table",2);Ln([F()],Yt.prototype,"fixedSchemaSources",2);Yt=Ln([Ee("panel-footer")],Yt);function ix(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Lu(e){const t=new Set;for(const[n,r]of e)r.schemaEditable===!1&&t.add(n);return t}function Fo(e){return e.title?.trim()?e.title.trim():e.name}function ox(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function ax(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const Ot=new Map,Cf=new Set;let Mu=!1;async function _f(){const e=await ae();await Promise.all([...Ot.keys()].map(t=>Js(t,e)))}function Sf(e){const t=Ot.get(e);return t?(kf(t),!0):(lx(e),!0)}async function lx(e){const t=await ae(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Ef(e){const t=await ae();await px(e,t)}async function Tf(){if(Mu)return;Mu=!0;const e=await ae(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){J0(G$(t,n));const s=()=>ax(t);s(),window.addEventListener("resize",s);const i=document.querySelector("app-shell")?.shadowRoot,o=i?.querySelector("header"),a=i?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||a)){const c=new ResizeObserver(s);o&&c.observe(o),a&&c.observe(a)}}const r=(await e.store.tables.find()).filter(s=>s.workspaceId===e.workspaceId);r.sort(ci);for(const s of r)s.windowGeometry?.closed||ju(s,e);e.store.tables.subscribe(s=>{const i=s.filter(c=>c.workspaceId===e.workspaceId),o=new Map(i.map(c=>[c.id,c]));for(const[c,d]of Ot){const p=o.get(c);if(!p||p.windowGeometry?.closed){Ot.delete(c),Ui(c),Cf.add(c);try{d.status!=="closed"&&d.close()}catch{}}}const a=i.filter(c=>!Ot.has(c.id)&&!c.windowGeometry?.closed).sort(ci);for(const c of a)ju(c,e)}),J$()}const ha=720,fa=360;function ju(e,t){const n=`panel-${If(e.id)}`,r=ox(),s=j0(e.windowGeometry),i=ln||s?.minimized===!0,o=()=>{const H=document.createElement("data-table");return H.tableId=e.id,H.style.height="100%",H},a=i?document.createElement("div"):o();let c=i?null:a,d=Fo(e),p=-1,m=-1,w=null;const y=()=>{re.setHeaderTitle(d+(w?Ww(w.rows,w.total):vh(p,m)))},$=H=>{const Z=H.detail;Z.key===e.id&&(p=Z.count,m=Z.total,y())},x=H=>{const Z=H.detail;Z.tableId===e.id&&(w=Z.done?null:{rows:Z.rows,total:Z.total},y())};document.addEventListener(oi,$),document.addEventListener(ta,x);const E=()=>{W.active=!1,c?.remove(),c=null},S=()=>{if(c)return;const H=document.getElementById(n)?.querySelector(".jsPanel-content");if(!H)return;H.replaceChildren();const Z=o();H.appendChild(Z),c=Z,W.active=!0},D=document.createElement("panel-search");D.tableId=e.id;const W=document.createElement("panel-footer");W.tableId=e.id,W.active=!i;const z=async()=>{document.removeEventListener(oi,$),document.removeEventListener(ta,x);const H=Ot.get(e.id)?.persistRect();Ot.delete(e.id),Ui(e.id),!Cf.delete(e.id)&&await is(`table:${e.id}`,async()=>{const Z=await t.store.tables.findOne(e.id);if(!Z)return;const K=Z.windowGeometry??{...H??{x:60,y:60,w:ha,h:fa},z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...K,closed:!0},updatedAt:Date.now()})})},re=ji({id:n,container:r,title:d,logo:Iu[Qs(e)],color:Tu(e),content:a,footerToolbar:W,...s?{panelSize:{w:s.w,h:s.h},position:{x:s.x,y:s.y}}:{contentSize:{w:ha,h:fa},position:ux()},minimizeTo:"#easydb-minimized-dock",viewport:Ni(),boot:{minimized:i,maximized:!ln&&s?.maximized===!0,smallified:!ln&&s?.smallified===!0},onmoved:()=>void Js(e.id,t),onresized:()=>void Js(e.id,t),onfronted:()=>void hx(e.id,t),onstatuschange:H=>{H.status==="minimized"?E():(H.status==="normalized"||H.status==="maximized")&&S(),Js(e.id,t)},onclosed:()=>void z()});Ot.set(e.id,re),xf(e.id,()=>re.front(void 0,!1));const T=document.getElementById(n)?.querySelector(".jsPanel-controlbar");T&&T.prepend(D);let q=null;const J=document.createElement("button");J.type="button",J.title="Table info",J.setAttribute("aria-label","Table info"),J.className="eda-info-btn",J.textContent="ⓘ",J.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",J.addEventListener("click",H=>{H.stopPropagation(),q&&F$(d,q.info??{},{source:q.source,origin:q.origin})}),T?.prepend(J);const ue=H=>{q=H??null;const Z=!!(H?.info||H?.source||H?.origin);J.style.display=Z?"inline-flex":"none"};ue(e);let pe=Qs(e);t.store.tables.subscribe(H=>{const Z=H.find(se=>se.id===e.id);if(!Z)return;ue(Z),Fo(Z)!==d&&(d=Fo(Z),y());const K=Qs(Z);K!==pe&&(pe=K,re.setHeaderLogo(Iu[K]),re.setHeaderColor(Tu(Z)))})}let cx=0;function ux(){const e=cx++;return{x:40+e%8*30,y:80+e%8*30}}function Js(e,t){return is(`table:${e}`,()=>dx(e,t))}async function dx(e,t){const n=Ot.get(e),r=n??document.getElementById(`panel-${If(e)}`);if(!r)return;const s=n?.persistFlags()??{minimized:!1,maximized:!1,smallified:!1},i=n?.persistRect()??{x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight};try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=ln?a?.minimized??!1:s.minimized,d=ln?a?.maximized??!1:s.maximized,p=ln?a?.smallified??!1:s.smallified,m={...i,z:a?.z??0,minimized:c,maximized:d,smallified:p};await t.store.tables.patch(e,{windowGeometry:m,updatedAt:Date.now()})}catch{}}function hx(e,t){return is(`table:${e}`,()=>fx(e,t))}async function fx(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{...Ot.get(e)?.persistRect()??{x:0,y:0,w:ha,h:fa},z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:$f()},updatedAt:Date.now()})}catch{}}async function px(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),s=await r.find();await r.bulkRemove(s.map(i=>i.id))}await t.store.tables.remove(e)}function If(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function mx(e){if(!(e instanceof Node))return null;for(const[t,n]of Ot)if(n.contains(e))return t;return null}const $l=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:ln,deleteTable:Ef,focusTableWindow:Sf,initWindowManager:Tf,persistTablePanelGeometry:_f,tableIdAtNode:mx},Symbol.toStringTag,{value:"Module"})),gx={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function bx(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Ef(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const wx=Object.freeze(Object.defineProperty({__proto__:null,init:bx,meta:gx},Symbol.toStringTag,{value:"Module"})),yx={id:"table-copy",name:"Copy Table",type:"ui",version:"0.1.0",description:"Adds a Copy button to each table window: duplicate it as-is, or snapshot its Raw / Visible data into a new plain table. Works on projections too — that is how you freeze one.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/table-copy.ts"};function vx(e){e.ui.registerTableButton({id:"table-copy:copy",label:"Copy",icon:"content_copy",tooltip:"Copy this table — as a duplicate, or as a snapshot of its data",onClick:(t,{tableId:n})=>void xx(t,n)})}function $x(e,t){const n=e.source?.type==="projection";if(t==="duplicate")return n?"a second projection over the same sources (still live)":e.source?"another connection to the same source (still live)":"a full copy of its columns and rows";const r=t==="raw"?"every column and row":"the visible columns and filtered rows";return e.source?`a plain table holding ${r} as they are right now`:`a plain table holding ${r}`}async function xx(e,t){const n=await e.store.tables.findOne(t);if(!n)return;const r=await e.ui.dialogs.choice(`Copy "${n.name}" — what should the copy contain?`,["Duplicate","Raw Data","Visible Data"],"Copy table");if(!r)return;const s=r==="Duplicate"?"duplicate":r==="Raw Data"?"raw":"visible";try{const i=await Af(e,n,s);e.ui.dialogs.toast(`Copied "${n.name}" to "${i.name}" — ${$x(n,s)}.`,{kind:"success",title:"Copy table"})}catch(i){e.ui.dialogs.toast(`Could not copy "${n.name}": ${i?.message??String(i)}`,{kind:"error",title:"Copy table"})}}async function Af(e,t,n){const r=e.workspaceId();if(!r)throw new Error("table-copy: no active workspace");const s=cn(await qa(e,r),`${t.name} copy`),i=_e(),o=Date.now(),a={id:i,workspaceId:r,name:s,code:Le(s),view:t.view,...t.title?{title:`${t.title} copy`}:{},...t.labelColumn?{labelColumn:t.labelColumn}:{},...t.info?{info:t.info}:{},updatedAt:o};if(n==="duplicate"){const d={...a,columns:t.columns,...t.sortBy?{sortBy:t.sortBy}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.filters?{filters:t.filters}:{},...t.deletedColumns?{deletedColumns:t.deletedColumns}:{},...t.readonly?{readonly:!0}:{},...t.source?{source:t.source}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(d),t.source||await Nu(e,t.id,i,p=>p),d}const c={...a,columns:Vh(t,n).map(kx),...n==="raw"&&t.filters?{filters:t.filters}:{},...n==="raw"&&t.sortBy?{sortBy:t.sortBy}:{},...n==="raw"&&t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(c),await Nu(e,t.id,i,d=>Gh(t,d,n)),c}function kx(e){if(!e.readonly)return e;const t={...e};return delete t.readonly,t}async function Nu(e,t,n,r){const s=r(await e.store.rows(t).find());if(s.length===0)return;const i=Date.now();await e.store.rows(n).bulkInsert(s.map(o=>({id:_e(),tableId:n,data:{...o.data},updatedAt:i})))}const Cx=Object.freeze(Object.defineProperty({__proto__:null,copyTable:Af,init:vx,meta:yx},Symbol.toStringTag,{value:"Module"}));var _x=Object.defineProperty,Sx=Object.getOwnPropertyDescriptor,xl=(e,t,n,r)=>{for(var s=r>1?void 0:r?Sx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&_x(t,n,s),s};function Rf(e,t){return(Dt.instance??Ex()).open(e,t)}function Ex(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let Dt=class extends ke{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const s=this.rows[r],i=s.field.trim(),o=s.label.trim()||i;return{...n,field:i,label:o,hidden:s.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const s=n.field.trim().toLowerCase();if(s===""){e.add(r);return}(t.get(s)??t.set(s,[]).get(s)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,s)=>s===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return k`
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
    `}};Dt.instance=null;Dt.styles=[yt,Se`
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
    `];xl([F()],Dt.prototype,"rows",2);xl([F()],Dt.prototype,"subject",2);Dt=xl([Ee("column-names-dialog")],Dt);const Tx=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return Dt},editColumnNames:Rf},Symbol.toStringTag,{value:"Module"}));async function Ix(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const s={api:e,fetchText:(T,q)=>Xr(e,T,q??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},i=await n.list(s,{kind:"url",url:r});if(i.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=i.find(T=>T.name===t.name)??(i.length===1?i[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let a=[];const c=[];for await(const T of n.read(s,o))T.columns?.length&&(a=T.columns),c.push(...T.rows);const{columns:d,newFields:p}=vi(t.columns,a,t.deletedColumns??[]),m=t.origin?.pks??[],w=new Set(a.map(T=>T.field)),y=t.columns.map(T=>T.field).filter(T=>!w.has(T)&&!m.includes(T)),$=(t.deletedColumns??[]).filter(T=>w.has(T)),x=e.store.rows(t.id),E=await x.find(),{data:S,merged:D,strategy:W,droppedUserRows:z}=uh({oldRows:E.map(T=>({data:T.data})),freshRows:c,pks:m,userAddedFields:y,deletedRemoteFields:$}),re=Date.now();d.length>0&&await e.store.tables.patch(t.id,{columns:d,updatedAt:re}),await x.bulkRemove(E.map(T=>T.id));const G=S.map(T=>({id:_e(),tableId:t.id,data:T,updatedAt:re}));return await x.bulkInsert(G),{rowCount:G.length,newFields:p,merged:D,strategy:W,droppedUserRows:z}}var Ax=Object.defineProperty,Rx=Object.getOwnPropertyDescriptor,Ye=(e,t,n,r)=>{for(var s=r>1?void 0:r?Rx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Ax(t,n,s),s};const Ox="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Dx="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Px='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',zu=[{label:"Northwind — sample database (JSON dump)",url:Ox,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Dx,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Lx={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Mx(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Px,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Nx(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>jx(t,n)})}async function jx(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await kl(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const s=await Ix(e,n,r),i=[];s.newFields.length>0&&i.push(`${s.newFields.length} new column${s.newFields.length===1?"":"s"}`),!s.merged&&s.rowCount>0&&i.push("rows replaced (nothing to match them on)"),s.droppedUserRows>0&&i.push(`${s.droppedUserRows} row${s.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${s.droppedUserRows===1?"it":"them"} could not be carried over`),e.ui.dialogs.toast(`Refreshed "${n.name}" (${s.rowCount.toLocaleString()} rows)${i.length?` — ${i.join(", ")}`:""}.`,{kind:s.newFields.length>0||s.droppedUserRows>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function Nx(e,t="auto"){const r=await(Ie.instance??Kx()).open({presetKind:t,async listDatabases(x){const E=bt(x);return al(S=>e.backend.fetch(S),E.base)},async listTables(){const x=e.workspaceId();return(await e.store.tables.find()).filter(E=>E.workspaceId===x&&!E.source).map(E=>({id:E.id,name:E.name})).sort((E,S)=>E.name.localeCompare(S.name))}});if(!r)return;const{url:s,file:i,kind:o,dbChosen:a,editColumns:c,maxRows:d,mode:p,panel:m,target:w}=r,y=i?.name??s,$=c?(x,E)=>Rf(x,E):void 0;try{if(o==="sql"){await zx(e,{url:s,file:i,label:y,maxRows:d,mode:p,target:w,panel:m,editHook:$});return}const x=await kl(o);if(x){const E=o==="json"?await Fx(e,s,i,d,p):null;if(E?.isDump&&await e.ui.dialogs.confirm(`"${y}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Ka(e,E.text,y,{maxRows:d,editColumns:$,...i?{}:{originUrl:s}});return}const S=i?i.name:Gt(s),D=E?{kind:"text",text:E.text,name:S}:i?{kind:"file",file:i}:{kind:"url",url:s},W=await $i(e,x,D,{mode:p,target:w,maxRows:d,panel:m,...E&&!i?{origin:{type:x.id,url:s}}:{},...$?{editColumns:z=>$(z)}:{}});x.ownToasts||Of(e,W,y);return}if(p==="reference"&&!i){o==="datasette"?await Hx(e,s):await Df(e,s,o);return}await Ii(e,s,{skipTablePicker:a,maxRows:d,editColumns:$})}catch(x){e.ui.dialogs.toast(`Could not import ${y}: ${x.message}`,{kind:"error",title:"Import"})}}async function zx(e,t){const{url:n,file:r,label:s,maxRows:i,mode:o,target:a,panel:c,editHook:d}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const p=r?await r.text():await Xr(e,n,`Reading ${Gt(n)}…`,i!=null?{maxBytes:null}:{});if(el(p)){const y=await tl(e,p,{maxRows:i,target:a,...d?{editColumns:d}:{}});nl(e,y,s);return}const m=await kl("sql");if(!m)throw new Error("The SQL importer is not installed.");const w=await $i(e,m,{kind:"text",text:p,name:r?r.name:Gt(n)},{mode:o,target:a,maxRows:i,panel:c,...r?{}:{origin:{type:m.id,url:n}},...d?{editColumns:y=>d(y)}:{}});Of(e,w,s)}async function Fx(e,t,n,r,s){if(s==="reference")return null;const i=n?await n.text():await Xr(e,t,`Reading ${Gt(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:i,isDump:Ha(JSON.parse(i))}}catch{return{text:i,isDump:!1}}}async function kl(e){const{registries:t}=await ae();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function Of(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,a)=>o+a.rowCount,0),s=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${s} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const i=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${i?` — ${i}`:""}.`,{kind:"error",title:"Import"})}function Ux(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(s=>s!=null&&typeof s=="object"&&!Array.isArray(s));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const s of["rows","records","data"])if(n(r[s]))return r[s];for(const s of Object.values(r))if(n(s))return s}return[]}function Bx(e){const t=Ux(e).slice(0,50),n=s=>yi(s)?"array":typeof s=="number"?"number":typeof s=="boolean"?"boolean":"string",r=new Map;for(const s of t)for(const[i,o]of Object.entries(s))!r.has(i)&&o!=null?r.set(i,n(o)):r.has(i)||r.set(i,"string");return[...r.entries()].map(([s,i])=>({field:s,label:s,type:i}))}function qx(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function Hx(e,t){const n=bt(t),s=await fl(a=>e.backend.fetch(a),n,"Reference");if(s===null)return;if(s.length===0)throw new Error("No tables found to reference at that URL.");let i=0;const o=[];for(const a of s)try{await Df(e,qx(n.base,a.db,a.table),"json",{nameHint:`${a.db}/${a.table}`,silent:!0}),i++}catch(c){o.push(`${a.table}: ${c.message}`)}e.ui.dialogs.toast(`Referenced ${i} table${i===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function Df(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=r.nameHint??Gt(t),o=await Xr(e,t,`Reading ${i}…`,{maxBytes:null}),a=n==="csv"?ir(o).columns:Bx(o);if(a.length===0)throw new Error("No columns found in the referenced data.");const c=new Set((await e.store.tables.find()).filter(m=>m.workspaceId===s).map(m=>m.name.toLowerCase()));let d=i;for(let m=2;c.has(d.toLowerCase());m++)d=`${i}-${m}`;const p={id:_e(),workspaceId:s,name:d,code:Le(d),columns:a,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(p),r.silent||e.ui.dialogs.toast(`Referenced ${d} — live, read-only.`,{kind:"success",title:"Reference"})}function Kx(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Vx(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(i=>i.startsWith("_")),s=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":s?"datasette":"json"}catch{return"json"}}function Fu(e,t){if(t!=="datasette"||!e)return!1;try{const n=bt(e);return!n.db&&!n.table}catch{return!1}}function Gx(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let Ie=class extends ke{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,s=this.editColumns&&this.mode==="copy",i=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},a=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:s,maxRows:r,mode:a,panel:i,target:o});return}const c=n==="datasette"&&!!this.selectedDb&&Fu(t,n),d=c?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:d,kind:n,dbChosen:c,editColumns:s,maxRows:r,mode:a,panel:i,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Gx(this.file.name):Vx(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),Ie.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ie.instance===this&&(Ie.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await ae(),t=[...e.importers].sort((s,i)=>(s.order??Number.MAX_SAFE_INTEGER)-(i.order??Number.MAX_SAFE_INTEGER)).map(s=>({id:s.id,label:s.label,panel:s.panel,kernel:s.supports?.kernel})),n=t.some(s=>s.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const s of e.importers)for(const i of s.accept??[])r.add(i);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=zu[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Fu(this.url.trim(),this.resolvedKind)?ie:k`
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
                  ${zu.map((e,t)=>k`<option value=${String(t)} ?selected=${t===this.presetIdx}>${e.label}</option>`)}
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
    `}};Ie.instance=null;Ie.styles=[yt,Se`
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
    `];Ye([F()],Ie.prototype,"url",2);Ye([F()],Ie.prototype,"kind",2);Ye([F()],Ie.prototype,"presetIdx",2);Ye([F()],Ie.prototype,"dbList",2);Ye([F()],Ie.prototype,"dbLoading",2);Ye([F()],Ie.prototype,"dbError",2);Ye([F()],Ie.prototype,"selectedDb",2);Ye([F()],Ie.prototype,"editColumns",2);Ye([F()],Ie.prototype,"file",2);Ye([F()],Ie.prototype,"maxRowsInput",2);Ye([F()],Ie.prototype,"mode",2);Ye([F()],Ie.prototype,"targetKind",2);Ye([F()],Ie.prototype,"targetTableId",2);Ye([F()],Ie.prototype,"tables",2);Ye([F()],Ie.prototype,"formats",2);Ye([F()],Ie.prototype,"acceptAttr",2);Ie=Ye([Ee("import-dialog")],Ie);const Wx=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Ie},init:Mx,meta:Lx},Symbol.toStringTag,{value:"Module"})),Yx={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},Qx=6e4;let Uu=null,pa=!1;const Uo=new Map;function Jx(e){Uu===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Uu=setInterval(()=>{Pf(e)},Qx)))}async function Pf(e){if(pa)return;const t=e.workspaceId();if(!t)return;const n=await tf(e);if(n)try{await Xx(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function Xx(e,t,n){const r=await Ri(e),s=await nf(e,n),i=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(i.status===404){await Bu(e,t,n,r,null);return}if(!i.ok)return;const o=Oi(i.headers.get("ETag")),a=await i.text();if(xu(r)===xu(a)){o&&o!==s&&await On(e,n,o);return}if(o&&o===s){await Bu(e,t,n,r,s);return}if(!(o&&Uo.get(n)===o)){pa=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const d=JSON.parse(a),p=await rf(e,n,d);o&&await On(e,n,o),Uo.delete(n),e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&Uo.set(n,o)}finally{pa=!1}}}async function Bu(e,t,n,r,s){const i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:i,body:r});if(o.ok){const a=Oi(o.headers.get("ETag"));a&&await On(e,n,a);return}if(o.status===412){const a=await o.json().catch(()=>({}));a.currentEtag&&await On(e,n,a.currentEtag)}}const Lf=Object.freeze(Object.defineProperty({__proto__:null,load:Jx,meta:Yx,tick:Pf},Symbol.toStringTag,{value:"Module"}));var Zx=Object.defineProperty,ek=Object.getOwnPropertyDescriptor,It=(e,t,n,r)=>{for(var s=r>1?void 0:r?ek(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Zx(t,n,s),s};let ct=class extends ke{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.rowColl=null,this.loadGeneration=0,this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),s=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const i=this.allRows.find(c=>c.id===n);if(!i)return;let o;if(s==="boolean")o=t.checked;else if(s==="number"){const c=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(c)?t.value:c}else o=t.value;await(await ae()).store.rows(this.instance.tableId).patch(n,{data:{...i.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");!n||r==null||await this.addPill(n,r)}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ae(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>r.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const i=s.find(a=>a.id===this.viewInstanceId);if(!i)return;if(i.tableId!==this.instance?.tableId){this.instance=i,this.reload();return}const o=qu(this.instance);this.instance=i,qu(i)!==o?this.loadRows():this.recompute()}),this.rowColl=e.store.rows(t.tableId),this.rowsUnsub=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows(),this.loaded=!0}async loadRows(){const e=this.rowColl,t=this.instance;if(!e||!t)return;const n=++this.loadGeneration,r=new Set(this.tableColumns.filter(d=>d.script).map(d=>d.field)),s=Object.fromEntries(Object.entries(t.filters??{}).filter(([d])=>!r.has(d))),o=(t.sortBy?.length?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc!==!1}]:[]).filter(d=>!r.has(d.field)),a={columns:this.tableColumns,...Object.keys(s).length>0?{filters:s}:{},...o.length>0?{sort:o}:{}},c=await sl(e,a,Oa);n===this.loadGeneration&&(this.allRows=c.rows,this.recompute())}recompute(){if(!this.instance)return;const e=yu(this.allRows,this.tableColumns),t=ra(e,this.instance,this.tableColumns);let n=t;const r=this.searchQuery.trim(),s=this.globalQuery.trim();r&&(n=Vr(n,r,this.tableColumns)),s&&(n=Vr(n,s,this.tableColumns));const i=this.instance.limit??0;i>0&&n.length>i&&(n=n.slice(0,i)),this.rows=n,this.templateOn&&yh(this.viewInstanceId,n.length,t.length)}async addPill(e,t){if(!this.instance)return;const n=Tv(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{},[e]:n};await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}rowsFacetedFor(e){if(!this.instance)return[];const t={...this.instance.pillFilters??{}};return delete t[e],ra(yu(this.allRows,this.tableColumns),{...this.instance,pillFilters:t},this.tableColumns)}async setPillFilter(e,t){if(!this.instance)return;const n={...this.instance.pillFilters??{}};t.trim()===""?delete n[e]:n[e]=t,await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:n,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:n},this.recompute()}async cyclePill(e,t){await this.setPillFilter(e,Rv(this.instance?.pillFilters?.[e],t))}async openPillValues(e,t){const n=at.instance;if(!n)return;const r=this.rowsFacetedFor(e),s=this.tableColumns.find(c=>c.field===e)?.type;if(!gh(r,e,{type:s}))return;const{values:i,blanks:o}=bh(r,e,{type:s});if(i.length===0)return;const a=await n.open(t.getBoundingClientRect(),i,this.instance?.pillFilters?.[e]??"",o,c=>void this.setPillFilter(e,c),{exact:!0});a!==null&&(typeof a=="object"&&"clear"in a?await this.setPillFilter(e,""):typeof a=="string"&&await this.setPillFilter(e,a))}async removePill(e,t){if(!this.instance)return;const n=Iv(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await ae()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await ae()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ae()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||wa(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&wa(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await ae();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(i=>i!==e):[...t,e];if(r.length===0)return;await(await ae()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?k`<div class="vw-empty">No rows.</div>`:k`
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
    `}renderTemplated(){const e=this.template;if(!e)return k`<div class="vw-empty">This view's template is missing.</div>`;if(Dv(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(o=>[o.field,o])),r=this.instance?.readonly===!0,s=this.rows.map(o=>Sv(e.rowHtml,o,t,{columns:n,readonly:r})).join(""),i=(e.headerHtml??"")+s+(e.footerHtml??"");return k`<div class="vw-root">${Gn(i)}</div>`}return k`<div class="vw-root">
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
        </div>`;return k`${this.renderSortBar()}${t}${this.renderFooter()}`}};ct.styles=[xt,Se`
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
    `];It([wt({type:String})],ct.prototype,"viewInstanceId",2);It([F()],ct.prototype,"loaded",2);It([F()],ct.prototype,"error",2);It([F()],ct.prototype,"instance",2);It([F()],ct.prototype,"template",2);It([F()],ct.prototype,"columns",2);It([F()],ct.prototype,"tableColumns",2);It([F()],ct.prototype,"rows",2);It([F()],ct.prototype,"showColsMenu",2);It([F()],ct.prototype,"searchQuery",2);It([F()],ct.prototype,"globalQuery",2);ct=It([Ee("view-window")],ct);function qu(e){if(!e)return"";const t=e.sortBy?.length?e.sortBy.map(n=>`${n.field}:${n.asc!==!1}`).join(","):`${e.sortColumn??""}:${e.sortAsc!==!1}`;return`${JSON.stringify(e.filters??{})}|${t}`}const Mf=480,jf=520,ot=new Map;async function tk(){await Promise.all([...ot.keys()].map(e=>Xs(e)))}function Nf(e){const t=ot.get(e);return t?(kf(t.panel),!0):!1}const ma=new Set;async function zf(e){if(Nf(e))return;ma.add(e);const t=await ae(),n=await t.store.viewInstances.findOne(e);if(!n){ma.delete(e);return}if(n.open){ba(n,t),Ff(e);return}await t.store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()})}function Ff(e){ma.delete(e)&&Nf(e)}let Hu=!1;function ga(e){e.panel.setHeaderTitle(e.name+vh(e.count,e.total))}function nk(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function rk(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function sk(e){return`view-panel-${rk(e)}`}async function ik(){if(Hu)return;Hu=!0;const e=await ae(),t=r=>r.filter(s=>s.workspaceId===e.workspaceId&&s.open),n=t(await e.store.viewInstances.find()).sort(ci);for(const r of n)ba(r,e);e.store.viewInstances.subscribe(r=>{const s=new Map(t(r).map(o=>[o.id,o]));for(const o of[...ot.keys()])s.has(o)||ak(o);const i=[...s.values()].filter(o=>!ot.has(o.id)).sort(ci);for(const o of i)ba(o,e)}),e.store.tables.subscribe(r=>void ok(e,r)),document.addEventListener(oi,r=>{const s=r.detail,i=ot.get(s.key);i&&i.el&&(i.count=s.count,i.total=s.total,ga(i))}),document.addEventListener("easydb:reload-view",r=>{const s=r.detail?.instanceId;if(!s)return;const i=ot.get(s);i&&(async()=>{const o=await e.store.viewInstances.findOne(s);o&&(i.name=o.name,ga(i)),i.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of ot.values())r?.reload()})}async function ok(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),s=new Map;for(const o of n)s.has(o.name)||s.set(o.name,o);const i=await e.store.viewInstances.find();for(const o of i){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const a=s.get(o.tableName);a&&await e.store.viewInstances.patch(o.id,{tableId:a.id,updatedAt:Date.now()})}}function ba(e,t){if(ot.has(e.id))return;const n=sk(e.id),r=e.windowGeometry,s=r?.minimized===!0,i=()=>{const y=document.createElement("view-window");return y.viewInstanceId=e.id,y.style.height="100%",y},o=s?document.createElement("div"):i();let a;const c=()=>{a&&(a.el?.remove(),a.el=null,a.count=-1,a.total=-1,ga(a))},d=()=>{if(!a||a.el)return;const y=document.getElementById(n)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const $=i();y.appendChild($),a.el=$},p=ji({id:n,container:nk(),title:e.name,logo:j$,color:"#0891b2",content:o,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:Mf,h:jf},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:Ni(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0,smallified:r?.smallified===!0},onmoved:()=>void Xs(e.id),onresized:()=>void Xs(e.id),onfronted:()=>void lk(e.id,t),onstatuschange:y=>{y.status==="minimized"?c():(y.status==="normalized"||y.status==="maximized")&&d(),Xs(e.id)},onclosed:()=>{ot.delete(e.id),Ui(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});a={panel:p,el:s?null:o,name:e.name,count:-1,total:-1},ot.set(e.id,a),xf(e.id,()=>p.front(void 0,!1));const m=document.getElementById(n),w=document.createElement("panel-search");w.tableId=e.id,m?.querySelector(".jsPanel-controlbar")?.append(w),Ff(e.id)}function ak(e){const t=ot.get(e);if(t){ot.delete(e),Ui(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function lk(e,t){return is(`view:${e}`,()=>ck(e,t))}async function ck(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{...ot.get(e)?.panel.persistRect()??{x:0,y:0,w:Mf,h:jf},z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:$f()},updatedAt:Date.now()})}catch{}}function Xs(e){return is(`view:${e}`,()=>uk(e))}async function uk(e){const t=ot.get(e);if(!t)return;const{minimized:n,maximized:r,smallified:s}=t.panel.persistFlags(),i=t.panel.persistRect();try{const o=await ae(),a=(await o.store.viewInstances.findOne(e))?.windowGeometry,c={...i,z:a?.z??0,minimized:n,maximized:r,smallified:s};await o.store.viewInstances.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}var dk=Object.defineProperty,hk=Object.getOwnPropertyDescriptor,ar=(e,t,n,r)=>{for(var s=r>1?void 0:r?hk(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&dk(t,n,s),s};function wa(e,t){(pt.instance??fk()).open(e,t)}function fk(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Bo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let pt=class extends ke{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),pt.instance===this&&(pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ae(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){this.close(),await zf(e)}async editInstance(e){const n=await(await ae()).store.viewTemplates.findOne(e.templateId),r=n?gu(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await ae()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await ae(),n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={...e,id:Bo(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await ae();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ae(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(s=>s.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Bo(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=gu(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(m=>m.field.toLowerCase()===t||(m.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const m=Number(r[1])-1;return this.columns.filter(y=>y.type==="boolean")[m]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(m=>m.type==="boolean");const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(m=>m.type==="date"||m.type==="datetime");const a=["url","link","href","website","homepage","uri","site","web"];if(a.includes(t)){const m=this.firstColumn(w=>w.renderer==="link");return m||this.firstColumn(w=>{const y=w.field.toLowerCase(),$=(w.label??"").toLowerCase();return a.some(x=>y.includes(x)||$.includes(x))})}const c=m=>w=>{const y=w.field.toLowerCase(),$=(w.label??"").toLowerCase();return m.some(x=>y.includes(x)||$.includes(x))},d=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(d.includes(t)){const m=this.firstColumn(y=>y.renderer==="image");if(m)return m;const w=this.firstColumn(c(d));return w||this.firstColumn(c(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(c(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(c(["phone","tel","mobile","cell"]));const p=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(p.includes(t)){const m=this.firstColumn(x=>{if(x.type!=="string")return!1;const E=x.field.toLowerCase(),S=(x.label??"").toLowerCase();return p.some(D=>E.includes(D)||S.includes(D))});if(m)return m;const w=this.columns.filter(x=>x.type==="string"),y=w[0];if(!y)return"";let $=y;for(const x of w)(x.max??0)>($.max??0)&&($=x);return $.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ae();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={id:Bo(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return k`
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
    `}};pt.instance=null;pt.styles=[yt,Se`
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
    `];ar([F()],pt.prototype,"mode",2);ar([F()],pt.prototype,"instances",2);ar([F()],pt.prototype,"templates",2);ar([F()],pt.prototype,"tDraft",2);ar([F()],pt.prototype,"iDraft",2);pt=ar([Ee("views-dialog")],pt);const pk={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},mk="grid_view",gk={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},bk={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},wk={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},yk={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},vk=[gk,bk,wk,yk];function $k(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:mk,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>wa(n)})}async function xk(e){await Ck(e)}function kk(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function Ck(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of vk)await _k(e,t,r,n)}async function _k(e,t,n,r){const s=`views:seeded:${n.slug}:${t}`,i=`views:sig:${n.slug}:${t}`,o=kk(n),a=r.find(d=>d.builtin&&d.name===n.name);if(a){(await e.store.settings.findOne(i))?.value!==o&&(await e.store.viewTemplates.patch(a.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:o})),await e.store.settings.upsert({name:s,value:!0});return}(await e.store.settings.findOne(s))?.value||(await e.store.viewTemplates.insert({id:Sk(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:!0}),await e.store.settings.upsert({name:i,value:o}))}function Sk(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Ek=Object.freeze(Object.defineProperty({__proto__:null,init:$k,load:xk,meta:pk},Symbol.toStringTag,{value:"Module"})),Tk={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function Ik(e){e.ui.registerSettings(wh,"Table grid",[{key:"sortDescFirst",label:"Sort descending first",type:"boolean",default:!0,scope:"workspace",description:"Clicking a column header sorts descending, then ascending, then off. Turn this off to start ascending. Dates, scores and counts are usually read from the high end down, which took two clicks before."}]),e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const s=Array.from(t.dataTransfer?.files??[]).find(a=>a.name.toLowerCase()==="secrets.txt");if(!s)return!1;const i=await s.text(),o=Object.keys(Qn(i)).length;return Ur().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${s.name}"?`,"Import secrets")||(bd(i),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const Ak=Object.freeze(Object.defineProperty({__proto__:null,init:Ik,meta:Tk},Symbol.toStringTag,{value:"Module"}));class sn extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function Rk(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function Ok(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function Dk(e,t){const n=Rk(t.source?.config),r=new Set;let s=[],i=new Map,o=!1,a=null;const c=new Map;let d=null,p=!1;function m(G){const T=new Map;for(const J of G)T.has(J.name)||T.set(J.name,J);const q=new Map;for(const J of n.sources){const ue=T.get(J.tableName);ue&&q.set(J.alias,ue.id)}return q}async function w(){return m(await e.tables.find({workspaceId:t.workspaceId}))}async function y(){const G=await e.tables.find({workspaceId:t.workspaceId}),T={rows:[],provenance:new Map};if(Jb(t.id,G))return T;const q=m(G),J=new Map(G.map(Z=>[Z.id,Z])),ue=Bb(n),pe={};for(const Z of n.sources){const K=q.get(Z.alias);if(!K)return T;const se=ue[Z.alias]??[],ve=await sl(e.rows(K),{columns:J.get(K)?.columns??[],fields:se.length>0?se:["id"]});pe[Z.alias]=ve.rows}const H=qb(n,pe);return{rows:H.rows.map(Z=>({...Z,tableId:t.id})),provenance:H.provenance}}async function $(){const{rows:G,provenance:T}=await y();return s=G,i=T,o=!0,G}function x(){return a||(a=(async()=>{try{return await $()}finally{a=null}})(),a)}async function E(){const G=await w(),T=new Set(G.values());for(const[q,J]of c)T.has(q)||(J(),c.delete(q));for(const q of T)if(!c.has(q)){const J=e.rows(q);c.set(q,J.watch?J.watch(S):J.subscribe(S))}}function S(){p||(p=!0,queueMicrotask(async()=>{p=!1,await E();const G=o?await $():await x();for(const T of r)T(G)}))}function D(G,T){return G===T||G==null&&T==null?!0:G==null||T==null?!1:String(G)===String(T)}async function W(G,T){o||await x();const q=s.find(Z=>Z.id===G)?.data,J=i.get(G),ue=new Map,pe=[];for(const[Z,K]of Object.entries(T)){if(q&&D(q[Z],K))continue;const se=tw(n,G,Z,J);if(!se){pe.push(Z);continue}const ve=ue.get(se.alias)??{rowId:se.rowId,updates:{}};ve.updates[se.field]=K,ue.set(se.alias,ve)}if(pe.length>0)throw new sn(re(pe,J));if(ue.size===0)return{id:G,tableId:t.id,data:T,updatedAt:Date.now()};const H=await w();for(const[Z,{rowId:K,updates:se}]of ue){const ve=H.get(Z);if(!ve)throw new sn(`the "${z(Z)}" table is not available`);const Qe=e.rows(ve),Ne=await Qe.findOne(K);if(!Ne)throw new sn("the underlying row no longer exists");await Qe.patch(K,{data:{...Ne.data,...se},updatedAt:Date.now()})}return{id:G,tableId:t.id,data:T,updatedAt:Date.now()}}function z(G){return n.sources.find(T=>T.alias===G)?.tableName??G}function re(G,T){const q=G[0],J=n.columns.find(ue=>ue.field===q);return!J||J.from.kind==="script"?`"${q}" is computed by a script, so there is no cell to save it in`:T&&!T[J.from.alias]?`this row has no matching "${z(J.from.alias)}" row, so there is nowhere to save "${q}"`:`"${q}" cannot be written back to its source`}return{async find(G){const T=o?s:await x();return!G||Object.keys(G).length===0?T:T.filter(q=>Ok(q,G))},async findOne(G){return(o?s:await x()).find(q=>q.id===G)??null},async insert(){throw new sn("rows are derived from other tables")},async bulkInsert(){throw new sn("rows are derived from other tables")},async upsert(G){return W(G.id,G.data)},async patch(G,T){if(!T.data)throw new sn("a cell edit must carry row data");return W(G,T.data)},async remove(){throw new sn("rows are derived from other tables")},async bulkRemove(){throw new sn("rows are derived from other tables")},subscribe(G){return r.add(G),d||(d=e.tables.subscribe(S)),o?G(s):S(),()=>{if(r.delete(G),r.size===0){d?.(),d=null;for(const T of c.values())T();c.clear(),o=!1}}},async refresh(){await E();const G=await $();for(const T of r)T(G)}}}function Pk(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,s=2;for(;t.has(r);)r=`${n}_${s++}`;return t.add(r),r}function Lk(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function Mk(e,t,n){const r=t.sources.map(a=>{const c=n.find(w=>w.name===a.tableName),d={alias:a.alias,tableId:c?.id??"",tableName:a.tableName,columns:c?.columns??[]},p=a.join?.on??[],m=p[0];return a.join&&m&&(d.join={type:a.join.type,thisField:m.field,otherAlias:m.eqAlias,otherField:m.eqField},p.length>1&&(d.extraOn=p.slice(1))),d}),s=t.columns.map(a=>{const c={include:!0,outField:a.field,label:a.label??a.field};return a.from.kind==="source"?{...c,alias:a.from.alias,field:a.from.field,computed:!1}:{...c,script:a.from.script,computed:!0}}),i=[],o=new Set;r.forEach((a,c)=>{const d=r.slice(0,c).filter(p=>p.tableName===a.tableName).length;for(const p of a.columns){const m=s.filter(w=>!w.computed&&w.alias===a.alias&&w.field===p.field&&!o.has(w));if(m.length>0)for(const w of m)o.add(w),i.push(w);else i.push({include:!1,alias:a.alias,field:p.field,computed:!1,label:d>0?`${p.label} (${a.alias})`:p.label})}});for(const a of s)!a.computed&&!o.has(a)&&i.push(a);for(const a of s)a.computed&&i.push(a);return{name:e,sources:r,columns:i,...t.limit?{limit:t.limit}:{},original:t}}function jk(e,t){const n=Lk(e.sources),r=e.sources.length===0,s=e.sources.filter(a=>a.tableName===t.name).length;let i;if(!r){const a=e.sources.flatMap(d=>d.join?[{alias:d.join.otherAlias,field:d.join.otherField},...(d.extraOn??[]).map(p=>({alias:p.eqAlias,field:p.eqField}))]:[]),c=Zb({tableName:t.name,fields:t.columns.map(d=>d.field),pks:t.columns.filter(d=>d.unique).map(d=>d.field)},e.sources.map(d=>({alias:d.alias,tableName:d.tableName,fields:d.columns.map(p=>p.field),pks:d.columns.filter(p=>p.unique).map(p=>p.field)})),a);i={type:"left",thisField:c?.thisField??t.columns[0]?.field??"",otherAlias:c?.otherAlias??e.sources[0]?.alias??"",otherField:c?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...i?{join:i}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(a=>({include:!0,alias:n,field:a.field,computed:!1,label:s>0?`${a.label} (${n})`:a.label}))]}}function Nk(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const s of e.sources){if(n.has(s.alias)||!s.join)continue;[s.join.otherAlias,...(s.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(s.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function zk(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function Fk(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(c=>c.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let c=0;c<e.sources.length;c++){const d=e.sources[c];if(!d?.join)continue;if(!d.join.thisField||!d.join.otherField)return{ok:!1,error:`Set both join keys for "${d.tableName}".`};const p=new Set(e.sources.slice(0,c).map(w=>w.alias));if([d.join.otherAlias,...(d.extraOn??[]).map(w=>w.eqAlias)].some(w=>!p.has(w)))return{ok:!1,error:`The join for "${d.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(c=>c.alias)),s=new Set,i=[];for(const c of n){let d;if(c.outField&&!s.has(c.outField)?(d=c.outField,s.add(d)):d=Pk(c.computed?"computed":c.field??"col",s),c.computed){i.push({field:d,from:{kind:"script",script:c.script??""}});continue}const p=c.alias,m=c.field;if(!p||!m||!r.has(p))return{ok:!1,error:`Column "${c.label??c.field}" belongs to a table that is no longer part of this projection.`};i.push({field:d,from:{kind:"source",alias:p,field:m}})}const o=e.sources.map(c=>{const d={alias:c.alias,tableName:c.tableName};return c.join&&(d.join={type:c.join.type,on:[{field:c.join.thisField,eqAlias:c.join.otherAlias,eqField:c.join.otherField},...c.extraOn??[]]}),d}),a={...e.original??{},version:1,sources:o,columns:i};return e.limit!=null&&e.limit>0?a.limit=Math.floor(e.limit):delete a.limit,{ok:!0,name:t,spec:a}}var Uk=Object.defineProperty,Bk=Object.getOwnPropertyDescriptor,lr=(e,t,n,r)=>{for(var s=r>1?void 0:r?Bk(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Uk(t,n,s),s};let mt=class extends ke{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),mt.instance=this}disconnectedCallback(){super.disconnectedCallback(),mt.instance===this&&(mt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(Mk(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(jk(this.modelOf(),e))}removeSource(e){this.applyModel(Nk(this.modelOf(),e))}addComputed(){this.applyModel(zk(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=Fk(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return k`
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
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};mt.instance=null;mt.styles=[yt,Se`
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
    `];lr([F()],mt.prototype,"name",2);lr([F()],mt.prototype,"limit",2);lr([F()],mt.prototype,"sources",2);lr([F()],mt.prototype,"columns",2);lr([F()],mt.prototype,"error",2);mt=lr([Ee("projection-dialog")],mt);const qk={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function Hk(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>(Uf(e,t),Dk(e.store,t))}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void Ku(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void Ku(t,{editTableId:n})})}async function Uf(e,t){if(t.source?.type!=="projection")return;const n=t.source.config;if(!n||!Array.isArray(n.sources))return;const r=ki(n),s=t.columns.map(a=>{const c=!r.has(a.field);if(c===(a.readonly===!0))return a;if(c)return{...a,readonly:!0};const d={...a};return delete d.readonly,d}),i=r.size===0;s.every((a,c)=>a===t.columns[c])&&(t.readonly??!1)===i||await e.store.tables.patch(t.id,{columns:s,readonly:i,updatedAt:Date.now()})}async function Kk(e){const t=e.workspaceId();if(t)for(const n of await e.store.tables.find({workspaceId:t}))await Uf(e,n)}async function Vk(e){await Kk(e)}async function Gk(e,t,n,r,s){const i=await e.store.tables.find({workspaceId:t}),o=new Map;for(const c of i)o.has(c.name)||o.set(c.name,c);const a={};for(const c of n.sources)a[c.alias]=o.get(c.tableName)?.columns??[];return th(n,a,r,s)}async function Ku(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),s=a=>({id:a.id,name:a.name,columns:a.columns}),i=mt.instance??Wk();if(t.editTableId){const a=r.find(c=>c.id===t.editTableId)??null;if(!a||a.source?.type!=="projection")return;i.open({candidates:r.filter(c=>c.id!==a.id).map(s),initial:{name:a.name,spec:a.source.config},onSave:Vu(e,n,a)});return}const o=r.find(a=>a.id===t.baseTableId);o&&i.open({base:s(o),candidates:r.map(s),onSave:Vu(e,n,null,o)})}function Vu(e,t,n,r){return async(s,i)=>{const o=await Gk(e,t,i,n?.columns??[],n?.deletedColumns??[]),a=ki(i).size===0,c={type:"projection",config:i};n?await e.store.tables.patch(n.id,{name:s,columns:o,source:c,readonly:a,updatedAt:Date.now()}):await e.store.tables.insert({id:_e(),workspaceId:t,name:s,code:Le(s),columns:o,view:"table",source:c,readonly:a,...r?Yb(i,r):{},updatedAt:Date.now()})}}function Wk(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const Yk=Object.freeze(Object.defineProperty({__proto__:null,init:Hk,load:Vk,meta:qk},Symbol.toStringTag,{value:"Module"})),Qk={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function Jk(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",variant:"secondary",onClick:()=>e.ui.openCommandPalette()})}const Xk=Object.freeze(Object.defineProperty({__proto__:null,init:Jk,meta:Qk},Symbol.toStringTag,{value:"Module"})),ya="easydb:app-progress";function Cl(e){typeof document>"u"||document.dispatchEvent(new CustomEvent(ya,{detail:e}))}function Zk(){Cl({label:""})}class e1{constructor(t){this.weight=new Map,this.done=new Map;const n=t.reduce((r,s)=>r+Math.max(0,s.total),0);this.uniform=n===0;for(const r of t)this.weight.set(r.tableId,this.uniform?1:Math.max(0,r.total));this.totalWeight=this.uniform?t.length:n}observe(t,n){const r=this.weight.get(t);r!=null&&this.done.set(t,Math.min(r,Math.max(0,n)))}complete(t){const n=this.weight.get(t);n!=null&&this.done.set(t,n)}fraction(){if(this.totalWeight<=0)return 1;let t=0;for(const n of this.done.values())t+=n;return Math.min(1,t/this.totalWeight)}completedTables(){let t=0;for(const[n,r]of this.weight)(this.done.get(n)??-1)>=r&&t++;return t}get tableCount(){return this.weight.size}}const qo="electron-db:pendingImport",Bf=15*1024*1024;function qf(e){const t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0&&e.slice(t+1)||e}function Hf(e){return e>=1024*1024?`${(e/(1024*1024)).toFixed(1)} MB`:e>=1024?`${Math.round(e/1024)} KB`:`${e} bytes`}let jr=null;const t1={id:"electron-db",name:"Database File",type:"ui",version:"0.1.0",description:"Open, Save As, or Import a .db file (Electron desktop build only).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/electron-db.ts"},n1=/\.(edb|db|sqlite|sqlite3)$/i,r1=/\.edb$/i;function s1(e){const t=window.easydb?.db;t&&(e.ui.registerDropHandler(async n=>{const r=[...n.dataTransfer?.files??[]].find(i=>n1.test(i.name));if(!r)return!1;const s=t.pathForFile(r);return s?(await Vf(e,t,s,r1.test(r.name)),!0):(await e.ui.dialogs.alert(`"${r.name}" could not be located on disk, so it cannot be opened.`,"Database file"),!0)}),t.onImportProgress(n=>{if(document.dispatchEvent(new CustomEvent(ta,{detail:{tableId:n.tableId,rows:n.rows,total:n.total,...n.done?{done:!0}:{}}})),!jr)return;const{tracker:r,label:s}=jr;n.done?r.complete(n.tableId):r.observe(n.tableId,n.rows),Cl({label:s,fraction:r.fraction(),detail:`${r.completedTables()} of ${r.tableCount} table${r.tableCount===1?"":"s"}`})}),e.ui.registerFooterButton({id:"electron-db:menu",label:"Database",icon:"storage",tooltip:"Open, Save As, or Import a .db file",onClick:async(n,r)=>{const{AnchoredMenu:s}=await Pe(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>Xn);return{AnchoredMenu:a}},void 0),i=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(i,[{id:"open",label:"Open…",icon:"folder_open"},{id:"saveAs",label:"Save As…",icon:"save"},{id:"import",label:"Import…",icon:"file_download"},...Jf()?[{id:"stop",label:"Stop importing",icon:"cancel"}]:[]]);if(o)try{o==="open"?await Kf(n,t):o==="saveAs"?await a1(n,t):o==="import"?await Bi(n,t):o==="stop"&&Xf()}catch(a){n.ui.dialogs.toast(`${o} failed: ${a.message}`,{kind:"error",title:"Database file"})}}}))}function i1(e){const t=window.easydb?.db;t&&Zf(e,t).catch(n=>{e.ui.dialogs.toast(`Finishing the conversion failed: ${n.message}`,{kind:"error",title:"Convert to EDA"})})}async function Kf(e,t){const n=await t.openDb();n.ok&&await _l(e,t,n.path,n.kind)}async function Vf(e,t,n,r){if(!r){await Bi(e,t,n);return}const s=await t.probeDb(n);if(s==="easydb"){await Gf(e,t,n,s);return}e.ui.dialogs.toast(`"${n}" is named as a workspace but does not contain one.`,{kind:"warning",title:"Open workspace"}),await _l(e,t,n,s)}async function _l(e,t,n,r){if(r==="unreadable"){await e.ui.dialogs.alert(`"${n}" is not a SQLite database — it could not be read.`,"Database file");return}const s=await e.ui.dialogs.choice(`What would you like to do with "${n}"?`,["Open Workspace","Browse .db file","Import data"],"Database file");if(s){if(s==="Import data"){await Bi(e,t,n);return}if(s==="Browse .db file"){await Wf(e,t,n);return}await Gf(e,t,n,r)}}async function Gf(e,t,n,r){if(r==="foreign"){const i=await e.ui.dialogs.choice(`"${n}" is a SQLite database, but not an easyDBAccess workspace — there is no workspace in it to open.

It can be converted into one (a new file is written; this one is left exactly as it is), or opened read-only for a look.`,["Convert to EDA","Browse"],"Open workspace");i==="Convert to EDA"?await o1(e,t,n):i==="Browse"&&await Wf(e,t,n);return}await e.ui.dialogs.confirm(`Open "${n}"?

This replaces the current workspace view with that file's data. Nothing is deleted — the file you have open now is left exactly as it is on disk.`,"Open workspace")&&await t.openDbCommit(n)}async function o1(e,t,n){const r=await t.browseList(n);if(r.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to convert.`,"Convert to EDA");return}const s=await Yf(e,r,"Convert to EDA",{offerTablesOnly:!0});s.length===0||(await t.convertDb(n,s.map(o=>o.name))).ok}async function a1(e,t){const n=await t.saveDbAs();n.ok&&e.ui.dialogs.toast(`Saved a copy to "${n.path}" — that file is now the active database.`,{kind:"success",title:"Save database as"})}async function Wf(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await t.browseList(n);if(s.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to browse.`,"Browse database");return}const i=await Yf(e,s,"Browse database");if(i.length===0)return;const o=new Set((await e.store.tables.find()).filter(c=>c.workspaceId===r).map(c=>c.name.toLowerCase()));for(const c of i){const d=tp(c.name,o);o.add(d.toLowerCase()),await e.store.tables.insert({id:crypto.randomUUID(),workspaceId:r,name:d,columns:c.columns,view:"table",readonly:!0,source:{type:"sqlitefile",config:{path:n,objectName:c.name,isView:c.kind==="view"},writable:!1},updatedAt:Date.now()})}const a=i.filter(c=>c.kind==="view").length;e.ui.dialogs.toast(`Browsing ${i.length} object${i.length===1?"":"s"} from "${n}"${a?` (${a} view${a===1?"":"s"})`:""} — read-only.`,{kind:"success",title:"Browse database"})}async function Yf(e,t,n,r){if(t.length===1)return t;const s=t.filter(m=>m.kind==="table"),i=`All ${t.length}`,o=r?.offerTablesOnly&&s.length>0&&s.length<t.length?`All ${s.length} table${s.length===1?"":"s"} (skip the views)`:null,a=t.map(m=>`${m.name}${m.kind==="view"?" (view)":""}${m.rowCount==null?"":` — ${m.rowCount} rows`}`),c=await e.ui.dialogs.choice("Which tables or views?",[...o?[o]:[],i,...a],n);if(!c)return[];if(c===o)return s;if(c===i)return t;const d=a.indexOf(c),p=t[d];return p?[p]:[]}async function Bi(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await t.importDb(r,n);if(!s.ok)return;const{preview:i}=s;if(i.candidates.length===0){await e.ui.dialogs.alert(`No importable tables were found in "${s.path}".`,"Import database");return}const o=i.sizeBytes??0,a=await ep.pickCandidates(e,i.candidates);if(a.length===0)return;const c=a.filter(S=>S.mode==="projection"),d=a.filter(S=>S.mode!=="projection").map(S=>S.candidate),p=new Set(d.map(S=>S.name));if(d.length===0&&c.length===0)return;const m=new Set((await e.store.tables.find()).filter(S=>S.workspaceId===r).map(S=>S.name.toLowerCase())),w={};for(const S of i.candidates){if(!p.has(S.name)){w[S.name]={action:"skip"};continue}if(!S.collides)continue;const D=await e.ui.dialogs.choice(`A table named "${S.name}" already exists in this workspace.`,["Append","Overwrite","Rename","Skip"],"Import — table already exists");if(!D||D==="Skip"){w[S.name]={action:"skip"};continue}if(D==="Append"){const z=await u1(e,S,r);w[S.name]=z??{action:"skip"};continue}if(D==="Overwrite"){w[S.name]={action:"overwrite"};continue}const W=tp(S.name,m);m.add(W.toLowerCase()),w[S.name]={action:"rename",renameTo:W}}const{plan:y,skipped:$}=await t.importPrepare(s.path,r,w);if(y.length===0){va(e,s.path,$);return}e.ui.dialogs.toast(`Importing ${y.length} object${y.length===1?"":"s"} from "${s.path}" — the windows are there now and fill in as the rows arrive.`,{kind:"info",title:"Import database"});const x=qf(s.path),E=await Qf(e,t,s.path,y,$,`Importing ${x}${o>0?` (${Hf(o)})`:""}`);va(e,s.path,E),c.length>0&&await l1(e,r,c,o>Bf)}async function l1(e,t,n,r=!1){const[{parseSqlScript:s},{createProjectionTable:i}]=await Promise.all([Pe(()=>Promise.resolve().then(()=>fw),void 0),Pe(()=>Promise.resolve().then(()=>nw),void 0)]),o=[],a=[];for(const{candidate:c}of n){const d=c.sql??"";if(!d){a.push({name:c.name,why:"its definition could not be read"});continue}const p=s(d),m=p.projections[0];if(!m){a.push({name:c.name,why:p.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const w=(await e.store.tables.find()).filter(x=>x.workspaceId===t),y=new Map(w.map(x=>[x.name.toLowerCase(),x])),$=await i(e,t,{name:c.name,spec:m.spec,...m.sortBy?{sortBy:m.sortBy}:{}},{resolve:x=>y.get(x.toLowerCase()),taken:w.map(x=>x.name)});if(!$){const x=m.spec.sources.map(E=>E.tableName).join(", ");a.push({name:c.name,why:`it reads tables this workspace does not have (${x}) — import them too`});continue}if(r){const x=o.length;await e.store.tables.patch($.id,{windowGeometry:{x:40+x%10*24,y:40+x%10*24,w:640,h:360,z:x,minimized:!0,maximized:!1},updatedAt:Date.now()})}o.push($.name)}o.length>0&&e.ui.dialogs.toast(`Created ${o.length} projection${o.length===1?"":"s"} from views: ${o.join(", ")}.${r?" Left minimized — this file is big enough that opening them all would stall the app.":""}`,{kind:"success",title:"Import database"}),a.length>0&&e.ui.dialogs.toast(`${a.length} view${a.length===1?"":"s"} could not become a projection — ${a.map(c=>`${c.name}: ${c.why}`).join("; ")}. Import them as Data instead.`,{kind:"warning",title:"Import database"})}async function Qf(e,t,n,r,s=[],i="Importing"){const o=[...s];En={cancelled:!1};const a=En,c=new e1(r.map(d=>({tableId:d.tableId,total:d.total})));jr={tracker:c,label:i},Cl({label:i,detail:`0 of ${r.length} table${r.length===1?"":"s"}`});try{for(const d of r){if(a.cancelled){e.ui.dialogs.toast(`Stopped. ${o.length} of ${r.length} table${r.length===1?"":"s"} were filled; the rest are still empty.`,{kind:"warning",title:"Import database"});break}try{const p=await t.importRows(n,d);o.push({sourceName:d.sourceName,action:d.action,finalName:d.finalName,tableId:d.tableId,rowCount:p})}catch(p){e.ui.dialogs.toast(`"${d.finalName}" failed: ${p.message}`,{kind:"error",title:"Import database"})}}}finally{En===a&&(En=null),jr?.tracker===c&&(jr=null),Zk()}return o}let En=null;function Jf(){return En!==null}function Xf(){En&&(En.cancelled=!0)}async function Zf(e,t){const r=(await e.store.settings.findOne(qo))?.value;if(!r?.sourcePath||!r.plan?.length)return;const s=r.plan.length,i=r.plan.reduce((w,y)=>w+(y.total>0?y.total:0),0),o="Fill them in now",a="Leave them empty",c=await e.ui.dialogs.choice(`${s} table${s===1?"":"s"} in this workspace ${s===1?"is":"are"} still empty — ${s===1?"its":"their"} rows were being copied from "${r.sourcePath}" when the app last stopped.

${i>0?`About ${i.toLocaleString()} rows are left. `:""}Copying can be stopped from the Database menu once it starts.`,[o,a],"Unfinished import");if(c!==o){c===a&&await e.store.settings.remove(qo);return}const d=qf(r.sourcePath),p=r.sizeBytes??0,m=await Qf(e,t,r.sourcePath,r.plan,[],`Converting ${d}${p>0?` (${Hf(p)})`:""}`);await e.store.settings.remove(qo),va(e,r.sourcePath,m)}const ep={pickCandidates:(e,t)=>c1(e,t)};async function c1(e,t){const{chooseDatabaseObjects:n}=await Pe(async()=>{const{chooseDatabaseObjects:i}=await Promise.resolve().then(()=>Zg);return{chooseDatabaseObjects:i}},void 0),r=t.map(i=>({name:i.name,size:i.rowCount<0?null:i.rowCount,kind:i.isView?"view":"table",...i.collides?{detail:"⚠ name already in use"}:{}})),s=await n(r,{title:"Import database",message:"Tables bring their rows. A view can come in as a Projection — its query, recomputed — or as Data, a snapshot you can edit.",confirmLabel:"Import",offerViewModes:!0});return s?s.map(i=>({candidate:t[i.index],mode:i.mode})):[]}async function u1(e,t,n){const r=t.columns??[],i=(await e.store.tables.find()).find(d=>d.workspaceId===n&&d.name.toLowerCase()===t.name.toLowerCase())?.columns??[],o=new Set(i.map(d=>d.field.toLowerCase()));if(r.length===0||i.length===0||r.every(d=>o.has(d.toLowerCase())))return{action:"append"};const{mapColumnsToTable:a}=await Pe(async()=>{const{mapColumnsToTable:d}=await import("./column-map-dialog-CSI5XvAK.js");return{mapColumnsToTable:d}},[]),c=await a([...r],[...i],t.name);return c?{action:"append",mapping:c}:null}function tp(e,t){if(!t.has(e.toLowerCase()))return e;for(let n=2;;n++){const r=`${e} (${n})`;if(!t.has(r.toLowerCase()))return r}}function va(e,t,n){const r={created:n.filter(o=>o.action==="created").length,renamed:n.filter(o=>o.action==="renamed").length,overwritten:n.filter(o=>o.action==="overwritten").length,skipped:n.filter(o=>o.action==="skipped").length},s=n.reduce((o,a)=>o+a.rowCount,0),i=[];if(r.created&&i.push(`${r.created} new`),r.renamed&&i.push(`${r.renamed} renamed`),r.overwritten&&i.push(`${r.overwritten} overwritten`),r.skipped&&i.push(`${r.skipped} skipped`),i.length===0){e.ui.dialogs.toast(`Nothing imported from "${t}".`,{kind:"warning",title:"Import database"});return}e.ui.dialogs.toast(`Imported from "${t}": ${i.join(", ")} (${s} row${s===1?"":"s"} total).`,{kind:"success",title:"Import database"})}const d1=Object.freeze(Object.defineProperty({__proto__:null,LARGE_SOURCE_BYTES:Bf,cancelImport:Xf,handleDatabaseFile:_l,handleDroppedFile:Vf,importDeps:ep,importFlow:Bi,init:s1,isImporting:Jf,load:i1,meta:t1,openFlow:Kf,resumePendingImport:Zf},Symbol.toStringTag,{value:"Module"})),h1={id:"sqlitefile-source",name:"Browse a database file",type:"source",version:"0.1.0",description:"Reads tables and views out of a .db file, read-only (Electron desktop build only).",author:"Marc Cawood",repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sqlitefile-source.ts"};function np(e){const t=e.source?.config;return!t||typeof t.path!="string"||typeof t.objectName!="string"?null:{path:t.path,objectName:t.objectName,isView:!!t.isView}}function Cn(e){throw new Error(`This table is a read-only browse of a database file — ${e} is not possible. Use Import to bring the data into your workspace first.`)}function f1(e,t){const n=np(e),r=new Set;let s=null;async function i(){return n?(s=(await t.browseRows(n.path,n.objectName,e.columns)).map(c=>({id:c.id,tableId:e.id,data:c.data,updatedAt:0})),s):[]}function o(a){for(const c of r)c(a)}return{async find(){return s??await i()},async findOne(a){return(s??await i()).find(c=>c.id===a)},async count(){return(s??await i()).length},async refresh(){o(await i())},subscribe(a){return r.add(a),(s?Promise.resolve(s):i()).then(a),()=>void r.delete(a)},insert:()=>Cn("adding a row"),bulkInsert:()=>Cn("adding rows"),upsert:()=>Cn("changing a row"),patch:()=>Cn("changing a row"),remove:()=>Cn("deleting a row"),bulkRemove:()=>Cn("deleting rows"),clear:()=>Cn("clearing the table")}}function p1(e){const t=window.easydb?.db;t&&typeof e.registerRowSource=="function"&&e.registerRowSource({type:"sqlitefile",create:n=>f1(n,t),schemaEditable:!1})}const m1=Object.freeze(Object.defineProperty({__proto__:null,init:p1,meta:h1,parseConfig:np},Symbol.toStringTag,{value:"Module"})),g1=[Ak,a0,qg,gb,vw,Ew,Ky,ov,fv,Wg,jv,$v,Xv,s0,h0,b0,$0,_0,M0,o$,u$,p$,$$,S$,D$,wx,Cx,Wx,Lf,Ek,Yk,Xk,d1,m1];function b1(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const rp=g1.map(e=>{const t=b1(e);return{id:t.id,meta:t,module:e}}),w1=rp;function $a(e){return`builtin:${e}`}async function y1(e){const t=[];for(const n of rp)if(!await v1(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function v1(e,t){return t.meta.fixed?!1:_t==="all-optional"?!0:(await e.store.plugins.findOne($a(t.id)))?.enabled===!1}function sp(e){return e.filter(t=>t.status!=="minimized")}function $1(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),s=Math.ceil(e/r),i=(t.w-n*(r+1))/r,o=(t.h-n*(s+1))/s;return Array.from({length:e},(a,c)=>{const d=c%r,p=Math.floor(c/r);return{x:t.x+n+d*(i+n),y:t.y+n+p*(o+n),w:i,h:o}})}function cr(){return Q0()}function x1(){for(const e of cr())e.close?.()}function k1(){for(const e of cr())e.minimize?.()}function C1(){for(const e of cr())e.normalize?.()}function _1(){for(const e of cr())e.maximize?.()}function ip(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=ui()?.snapshot(),s=r?.scale&&r.scale>0?r.scale:1,i=r?.x??0,o=r?.y??0;return{x:-i/s,y:-o/s,w:t/s,h:n/s}}function op(e,t,n,r,s){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(s)}px`}function S1(){const e=sp(cr()).reverse();if(e.length===0)return;const t=ip(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),s=Math.min(480,Math.max(240,t.h*.6));e.forEach((i,o)=>{i.normalize?.(),op(i,t.x+24+o*n,t.y+24+o*n,r,s)}),ap()}function ap(){_f(),tk()}function E1(){const e=sp(cr()).reverse();if(e.length===0)return;const n=$1(e.length,ip(),8);e.forEach((r,s)=>{r.normalize?.();const i=n[s];i&&op(r,i.x,i.y,i.w,i.h)}),ap()}function Bs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function T1(e,t){const{from:n,to:r,name:s,mode:i}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:s,createdAt:Date.now(),pluginUrls:i==="empty"?[]:[...o?.pluginUrls??[]]}),i==="empty")return r;if(i==="all"){const c=await e.tables.where("workspaceId").equals(n).toArray(),d=new Map;for(const y of c){const $=Bs();d.set(y.id,$),await e.tables.put({...y,id:$,workspaceId:r,updatedAt:Date.now()})}for(const[y,$]of d){const x=await e.rows.where("tableId").equals(y).toArray();x.length>0&&await e.rows.bulkPut(x.map(E=>({...E,id:Bs(),tableId:$})))}const p=await e.viewTemplates.where("workspaceId").equals(n).toArray(),m=new Map;for(const y of p){const $=Bs();m.set(y.id,$),await e.viewTemplates.put({...y,id:$,workspaceId:r})}const w=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const y of w){const $=d.get(y.tableId);$&&await e.viewInstances.put({...y,id:Bs(),workspaceId:r,tableId:$,templateId:m.get(y.templateId)??y.templateId})}}const a=await e.settings.where("workspaceId").equals(n).toArray();for(const c of a)await e.settings.put({...c,key:St(r,c.name),workspaceId:r,name:c.name});return r}async function lp(e,t){return(await e.tables.where("workspaceId").equals(t).toArray()).map(r=>r.id)}async function cp(e,t){const n=await lp(e,t),r=n.length===0?0:await e.rows.where("tableId").anyOf(n).count();return{tables:n.length,rows:r,views:await e.viewInstances.where("workspaceId").equals(t).count(),templates:await e.viewTemplates.where("workspaceId").equals(t).count(),settings:await e.settings.where("workspaceId").equals(t).count()}}async function I1(e,t){const n=await cp(e,t),r=await lp(e,t);if(r.length>0){const a=await e.rows.where("tableId").anyOf(r).toArray();await e.rows.bulkDelete(a.map(c=>c.id)),await e.tables.bulkDelete(r)}const s=await e.viewInstances.where("workspaceId").equals(t).toArray();await e.viewInstances.bulkDelete(s.map(a=>a.id));const i=await e.viewTemplates.where("workspaceId").equals(t).toArray();await e.viewTemplates.bulkDelete(i.map(a=>a.id));const o=await e.settings.where("workspaceId").equals(t).toArray();return await e.settings.bulkDelete(o.map(a=>a.key).filter(a=>typeof a=="string")),await e.workspaces.delete(t),n}const Gu="Clone everything (tables, views, settings)",Wu="Clone settings only (no data)",A1="Empty workspace";function qi(e){const t=new URLSearchParams(location.search);t.set("space",e),location.assign(`${location.pathname}?${t.toString()}${location.hash}`)}function R1(){const e=new URLSearchParams(location.search);e.delete("space");const t=e.toString();location.assign(`${location.pathname}${t?`?${t}`:""}${location.hash}`)}async function O1(){const e=await ae(),t=(await e.store.workspaces.find()).filter(r=>r.id!==e.workspaceId);if(t.length===0){e.api.ui.dialogs.toast("This is the only workspace.",{kind:"info",title:"Workspaces"});return}const n=await e.api.ui.dialogs.choice("Open which workspace?",t.map(r=>r.name),"Switch workspace");n&&qi(n)}async function up(){const e=await ae(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[Gu,Wu,A1],"New workspace");if(!n)return;const r=n===Gu?"all":n===Wu?"settings":"empty";await T1(ri(),{from:e.workspaceId,to:fp(t.trim()),name:t.trim(),mode:r}),qi(t.trim())}async function dp(){const e=await ae(),t=await e.store.workspaces.find();let n=t.find(c=>c.id===e.workspaceId)??t[0];if(!n)return;if(t.length>1){const c=await e.api.ui.dialogs.choice("Delete which workspace? Everything in it goes with it.",t.map(d=>d.name),"Delete workspace");if(!c)return;n=t.find(d=>d.name===c)??n}const r=await cp(ri(),n.id),s=[`${r.tables} table${r.tables===1?"":"s"}`,`${r.rows.toLocaleString()} row${r.rows===1?"":"s"}`,`${r.views} view${r.views===1?"":"s"}`,`${r.settings} setting${r.settings===1?"":"s"}`].join(", "),i=t.length===1;if(!await e.api.ui.dialogs.confirm(`Delete the workspace "${n.name}"?

${s} will be deleted. This cannot be undone.`+(i?`

It is the only workspace, so an empty one will be created in its place.`:""),"Delete workspace"))return;if(await I1(ri(),n.id),z1(n.id),n.id!==e.workspaceId){e.api.ui.dialogs.toast(`Deleted "${n.name}" (${s}).`,{kind:"success",title:"Workspace deleted"});return}const a=t.find(c=>c.id!==n.id);a?qi(a.name):R1()}function D1(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:k1},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:C1},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:_1},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:S1},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:E1},{id:"windows:close-all",title:"Close all windows",icon:"close",run:x1}];for(const i of t)e.ui.registerCommand({id:i.id,title:i.title,group:"Windows",icon:i.icon,run:i.run});const n=[{id:"workspace:switch",title:"Switch workspace",icon:"swap_horiz",keywords:["space","open","change"],run:O1},{id:"workspace:new",title:"New workspace",icon:"add",keywords:["space","add","create","clone"],run:up},{id:"workspace:delete",title:"Delete workspace",icon:"delete",keywords:["space","remove","drop"],run:dp}];for(const i of n)e.ui.registerCommand({id:i.id,title:i.title,group:"Workspace",icon:i.icon,keywords:i.keywords,run:i.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",s="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:i=>i.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(s,"_blank","noopener")}})}async function P1(e){if(_t==="url-plugins"||_t==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],s=[];for(const i of r)try{const o=await e.store.plugins.findOne(i);if(o&&o.enabled===!1)continue;let a=o?.cachedBody??"";if(a)L1(e,i,a);else{try{a=await hp(i)}catch(p){await e.store.plugins.upsert({url:i,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${p.message}`}),e.events.emit("plugin:error",{url:i,phase:"fetch",error:p});continue}await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),cachedBody:a})}const c=new Blob([a],{type:"text/javascript"}),d=URL.createObjectURL(c);try{const p=await import(d);await p.init?.(e),s.push({url:i,mod:p})}finally{setTimeout(()=>URL.revokeObjectURL(d),5e3)}}catch(o){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:i,phase:"init",error:o})}return async()=>{for(const{url:i,mod:o}of s)try{await o.load?.(e)}catch(a){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`load: ${a.message}`}),e.events.emit("plugin:error",{url:i,phase:"load",error:a})}}}async function hp(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function L1(e,t,n){return(async()=>{try{const r=await hp(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let Ho=null;function ae(){return Ho||(Ho=M1()),Ho}async function M1(){let e="";const t=window.easydb?.store?qm(window.easydb.store,()=>e):Nm(await ri(),()=>e),n=Hm(),r=Xm(),s=new Map;t.tables.subscribe(E=>{s.clear();for(const S of E)s.set(S.id,S)});const i=Fm(t.tables),o={...i,insert:async E=>{const S=await i.insert(E);return s.set(S.id,S),S},upsert:async E=>{const S=await i.upsert(E);return s.set(S.id,S),S}};let a=null;const c={get backend(){if(!a)throw new Error("[host] row-source ctx used before app init completed");return a.backend},events:n,settings:t.settings,workspaceId:()=>w},d=zm({base:{...t,tables:o},providers:r.rowSources,tableById:E=>s.get(E),ctx:c}),p=j1(),m=await d.workspaces.find();let w;if(p){const E=fp(p),S=m.find(D=>D.id===E||D.name===p);S?w=S.id:w=(await d.workspaces.insert({id:E,name:p,createdAt:Date.now(),pluginUrls:[]})).id}else{const E=N1(),S=E?m.find(D=>D.id===E):void 0;S?w=S.id:m.length>0?w=m[0].id:w=(await d.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}e=w,F1(w);const y=ag({store:d,events:n,registries:r,workspaceId:()=>w});a=y,D1(y),n.on("import:after",({source:E,tableId:S,rowCount:D})=>{E!=="datasette"&&y.store.tables.findOne(S).then(W=>{y.ui.dialogs.toast(`Imported ${D} row${D===1?"":"s"} into "${W?.name??S}".`,{kind:"success",title:E.toUpperCase()+" import"})})}),n.on("plugin:error",({url:E,phase:S,error:D})=>{y.ui.dialogs.toast(`[${S}] ${D?.message??String(D)}`,{kind:"error",title:`Plugin: ${E}`})});const $=await y1(y),x=await P1(y);return queueMicrotask(async()=>{n.emit("app:ready",{workspaceId:w}),await $(),await x(),_t==="all-optional"?y.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):_t==="url-plugins"&&y.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),_t!=="off"&&y.ui.openPluginManager()}),globalThis.api=y,{store:d,events:n,workspaceId:w,registries:r,api:y}}function j1(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const di="eda:lastWorkspaceId";function N1(){try{return globalThis.localStorage?.getItem(di)??null}catch{return null}}function z1(e){try{globalThis.localStorage?.getItem(di)===e&&globalThis.localStorage.removeItem(di)}catch{}}function F1(e){try{globalThis.localStorage?.setItem(di,e)}catch{}}function fp(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var U1=Object.defineProperty,B1=Object.getOwnPropertyDescriptor,Hi=(e,t,n,r)=>{for(var s=r>1?void 0:r?B1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&U1(t,n,s),s};let rr=class extends ke{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=ir(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await ae(),s=crypto.randomUUID();await r.store.tables.insert({id:s,workspaceId:r.workspaceId,name:t,code:Le(t),columns:n.columns,view:"table",updatedAt:Date.now()});const i=n.rows.map(o=>({id:crypto.randomUUID(),tableId:s,data:o,updatedAt:Date.now()}));await r.store.rows(s).bulkInsert(i),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return k`
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
    `}};rr.styles=[yt,Se`
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
    `];Hi([F()],rr.prototype,"name",2);Hi([F()],rr.prototype,"text",2);Hi([F()],rr.prototype,"errorMsg",2);rr=Hi([Ee("csv-paste-dialog")],rr);const Sl=new Map;let Yu=!1;function q1(){for(const e of Sl.values())if(e===null||e.open)return!0;return!1}function H1(e,t=null){Sl.set(e,t),V1()}function K1(e){Sl.delete(e)}function pp(e,t){const n=()=>{t.open&&H1(e,t)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>K1(e))}function V1(){Yu||(Yu=!0,window.addEventListener("beforeunload",e=>{q1()&&(e.preventDefault(),e.returnValue="")}))}var G1=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,El=(e,t,n,r)=>{for(var s=r>1?void 0:r?W1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&G1(t,n,s),s};const Y1=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let Ft=class extends ke{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Y1,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return k`
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
    `}};Ft.instance=null;Ft.styles=[yt,Se`
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
    `];El([F()],Ft.prototype,"text",2);El([F()],Ft.prototype,"columnLabel",2);Ft=El([Ee("script-editor-dialog")],Ft);function Qu(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}const mp={unique:{get:e=>!!e.unique,set:e=>({unique:e?!0:void 0})},notnull:{get:e=>!!e.notnull,set:e=>({notnull:e?!0:void 0})},visible:{get:e=>!e.hidden,set:e=>({hidden:e?void 0:!0})},sortable:{get:e=>e.sortable!==!1,set:e=>({sortable:e?void 0:!1})},filterable:{get:e=>e.filterable!==!1,set:e=>({filterable:e?void 0:!1})}};function gp(e,t){return e.every(n=>mp[t].get(n))}function Q1(e,t){const n=!gp(e,t);return e.map(r=>({...r,...mp[t].set(n)}))}function Tl(e){if(e.source?.type!=="projection")return null;const t=e.source.config;return t&&Array.isArray(t.sources)?t:null}function J1(e,t,n,r){return{projections:t.filter(i=>{if(i.id===r)return!1;const o=Tl(i);return!!o&&o.sources.some(a=>a.tableName===e)}),views:n.filter(i=>i.tableName===e)}}function X1(e,t,n){return e.sources.some(r=>r.tableName===t)?{...e,sources:e.sources.map(r=>r.tableName===t?{...r,tableName:n}:r)}:null}function bp(e){return new Map(e.filter(t=>t.from!==t.to).map(t=>[t.from,t.to]))}function Z1(e,t){if(!e||!Object.keys(e).some(s=>t.has(s)))return null;const r={};for(const[s,i]of Object.entries(e))r[t.get(s)??s]=i;return r}function eC(e,t){const n=bp(t);if(n.size===0)return null;const r=e.columns.map(o=>n.has(o.field)?{...o,field:n.get(o.field)}:o),s=Z1(e.filters,n);return r.some((o,a)=>o!==e.columns[a])||s!==null?{...e,columns:r,...s?{filters:s}:{}}:null}function tC(e,t,n){const r=bp(n);if(r.size===0)return null;const s=new Set(e.sources.filter(c=>c.tableName===t).map(c=>c.alias));if(s.size===0)return null;const i=e.columns.map(c=>c.from.kind==="source"&&s.has(c.from.alias)&&r.has(c.from.field)?{...c,from:{...c.from,field:r.get(c.from.field)}}:c),o=e.sources.map(c=>{if(!c.join)return c;const d=s.has(c.alias),p=c.join.on.map(m=>{const w=d&&r.has(m.field)?r.get(m.field):m.field,y=s.has(m.eqAlias)&&r.has(m.eqField)?r.get(m.eqField):m.eqField;return w===m.field&&y===m.eqField?m:{...m,field:w,eqField:y}});return p.some((m,w)=>m!==c.join.on[w])?{...c,join:{...c.join,on:p}}:c});return i.some((c,d)=>c!==e.columns[d])||o.some((c,d)=>c!==e.sources[d])?{...e,columns:i,sources:o}:null}function nC(e){const t=[];return e.projections.length>0&&t.push(`${Ju(e.projections.length,"projection")} (${Xu(e.projections.map(n=>n.name))})`),e.views.length>0&&t.push(`${Ju(e.views.length,"view")} (${Xu(e.views.map(n=>n.name||"untitled"))})`),t.length>0?t.join(" and "):null}function Ju(e,t){return`${e} ${t}${e===1?"":"s"}`}function Xu(e){const t=e.slice(0,3).map(n=>`"${n}"`);return e.length>3?`${t.join(", ")} and ${e.length-3} more`:t.join(", ")}var rC=Object.defineProperty,sC=Object.getOwnPropertyDescriptor,nt=(e,t,n,r)=>{for(var s=r>1?void 0:r?sC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&rC(t,n,s),s};const iC=["string","number","boolean","date","datetime","array"];function Zu(e){return[...e.keys()].filter(t=>!Jm.has(t)).sort()}function oC(e,t){return t&&!e.includes(t)?[...e,t]:[...e]}async function aC(e,t,n,r){const s=await ae(),i=(await s.store.viewInstances.find()).filter(o=>o.tableId===e||o.tableName===t);for(const o of i)o.tableName!==n&&await s.store.viewInstances.patch(o.id,{tableName:n,updatedAt:Date.now()});for(const o of r?.projections??[]){const a=Tl(o),c=a&&X1(a,t,n);c&&await s.store.tables.patch(o.id,{source:{type:"projection",config:c},updatedAt:Date.now()})}}async function lC(e,t,n,r){if(n.length===0)return;const s=await ae(),i=async(o,a)=>{await s.store.tables.patch(o.id,{source:{type:"projection",config:a},updatedAt:Date.now()})};for(const o of r){const a=Tl(o);if(!a)continue;const c=o.id===e?eC(a,n):tC(a,t,n);c&&await i(o,c)}}function cC(e,t,n){const r=`Renaming "${e}" to "${t}" affects ${n}.

They reference this table by name, so they will be updated to point at "${t}". Continue?`,s=ft.instance;return s?s.confirm(r,"Rename table"):Promise.resolve(window.confirm(r))}let Ge=class extends ke{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e),this.dialogEl&&pp("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await ae();if(this.rendererOptions=Zu(n.registries.cellRenderers),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=Zu(n.registries.cellRenderers),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await ae(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.tableTitle=s.title??"",this.tableReadonly=!!s.readonly,this.columns=s.columns.map(o=>({field:o.field,label:o.label,type:o.type,renderer:o.renderer,script:o.script,max:o.max,unique:o.unique,notnull:o.notnull,hidden:o.hidden,sortable:o.sortable,filterable:o.filterable,origField:o.field,orig:o}));const i=await r.store.rows(e).find();this.previewRows=i.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[s]=r.splice(e,1);r.splice(n,0,s),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=s?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const s=[...this.columns],[i]=s.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),s.splice(o,0,i),this.columns=s}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}renderFlagHead(e,t,n){const r=gp(this.columns,e);return k`<button
      type="button"
      class="flag-label flag-head"
      title=${`${n} — click to ${r?"clear":"set"} every column`}
      aria-pressed=${r?"true":"false"}
      @click=${()=>this.columns=Q1(this.columns,e)}
    >
      ${t}
    </button>`}async runColumnAction(e){this.errorMsg="";const t=await ae();try{const n=await e.run(t.api,{columns:this.columns.map(s=>Qu(s)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(s=>[s.field,s]));this.columns=this.columns.map(s=>{const i=r.get(s.field);return i?{...s,label:i.label??s.label,type:i.type??s.type,renderer:i.renderer,script:i.script}:s})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=Ft.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await ae(),r=(await n.store.tables.find()).filter(d=>d.workspaceId===n.workspaceId),s=t.toLowerCase(),i=r.find(d=>d.name.toLowerCase()===s&&d.id!==this.editTableId);if(i){this.errorMsg=`A table named "${i.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const d of this.columns){const p=d.field.trim();if(!p){this.errorMsg="Column field names cannot be empty.";return}if(o.has(p)){this.errorMsg=`Duplicate column field: ${p}`;return}o.add(p)}const a=this.tableTitle.trim(),c=this.columns.map(Qu);if(this.mode==="edit"&&this.editTableId){const d=this.editTableId,p=await n.store.tables.findOne(d),m=new Map((p?.columns??[]).map(T=>[T.field,T])),w=c.filter(T=>{const q=m.get(T.field);return T.unique&&!q?.unique||T.notnull&&!q?.notnull||T.max&&T.max>0&&T.max!==q?.max});if(w.length>0){const T=await n.store.rows(d).find(),q=hC(w,T);if(q.length>0){this.errorMsg=`Cannot save: ${q.length} existing ${q.length===1?"row violates":"rows violate"} the new constraints.
${q.slice(0,5).join(`
`)}${q.length>5?`
…and ${q.length-5} more.`:""}`;return}}const y=new Set(this.columns.map(T=>T.origField).filter(T=>!!T)),$=new Set(c.map(T=>T.field)),x=(p?.columns??[]).map(T=>T.field).filter(T=>!y.has(T)),E=p?.deletedColumns??[],S=[...new Set([...E,...x])].filter(T=>!$.has(T));let D=null;if(p&&p.name!==t){const T=(await n.store.viewInstances.find()).filter(J=>J.workspaceId===n.workspaceId);D=J1(p.name,r,T,d);const q=nC(D);if(q&&!await cC(p.name,t,q))return}const W={name:t,title:a,columns:c,readonly:this.tableReadonly,updatedAt:Date.now()};(S.length>0||E.length>0)&&(W.deletedColumns=S);const z=p?.name;await n.store.tables.patch(d,W);const re=x.filter(T=>!$.has(T)),G=this.fieldRenames();if(!p?.source&&(re.length>0||G.length>0)){const T=await n.store.rows(d).find();for(const q of T){let J=!1,ue={...q.data};const pe=Mc(ue,G);pe&&(ue=pe,J=!0);for(const H of re)H in ue&&(delete ue[H],J=!0);J&&await n.store.rows(d).patch(q.id,{data:ue,updatedAt:Date.now()})}}await lC(d,z??t,G,r),z!==void 0&&z!==t&&await aC(d,z,t,D)}else await n.store.tables.insert({id:_e(),workspaceId:n.workspaceId,name:t,title:a,code:Le(t),columns:c,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return k`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(s=>({...s,data:Mc(s.data,e)??s.data})):this.previewRows,n=new Map;for(const s of this.columns){if(!s.unique)continue;const i=new Set,o=new Set;for(const a of t){const c=a.data[s.field];c==null||c===""||(i.has(c)&&o.add(c),i.add(c))}n.set(s.field,o)}const r=this.columns.filter(s=>!s.hidden);return k`
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
                  ${r.map(i=>{const o=s.data[i.field],a=dC(i,o,n.get(i.field));return k`<td class=${a?"violation":""} title=${a??""}>${uC(o)}</td>`})}
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
                      ${iC.map(a=>k`<option value=${a} ?selected=${a===n.type}>${a}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${a=>{const c=a.target.value;this.patchColumn(r,{renderer:c||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${oC(this.rendererOptions,n.renderer).map(a=>k`<option value=${a} ?selected=${a===n.renderer}>${a}</option>`)}
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
                      @input=${a=>{const c=a.target.value;this.patchColumn(r,{max:c===""?void 0:Number(c)})}}
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
    `}};Ge.styles=[xt,yt,Se`
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
    `];nt([F()],Ge.prototype,"mode",2);nt([F()],Ge.prototype,"editTableId",2);nt([F()],Ge.prototype,"name",2);nt([F()],Ge.prototype,"tableTitle",2);nt([F()],Ge.prototype,"tableReadonly",2);nt([F()],Ge.prototype,"columns",2);nt([F()],Ge.prototype,"errorMsg",2);nt([F()],Ge.prototype,"noticeMsg",2);nt([F()],Ge.prototype,"dragSrcIdx",2);nt([F()],Ge.prototype,"dropTargetIdx",2);nt([F()],Ge.prototype,"dropEdge",2);nt([F()],Ge.prototype,"previewRows",2);nt([F()],Ge.prototype,"rendererOptions",2);nt([F()],Ge.prototype,"columnActions",2);Ge=nt([Ee("new-table-dialog")],Ge);function uC(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function dC(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const s=Number(t);if(!Number.isFinite(s))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const s=new Date(String(t));if(Number.isNaN(s.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function hC(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((s,i)=>{const o=s.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${i+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((s,i)=>{const o=s.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${i+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${i+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const s=new Map;t.forEach((i,o)=>{const a=i.data[r.field];a==null||a===""||(s.has(a)?n.push(`Row ${o+1}: ${r.label} duplicates row ${s.get(a)+1} ("${String(a)}").`):s.set(a,o))})}return n}var fC=Object.defineProperty,pC=Object.getOwnPropertyDescriptor,rt=(e,t,n,r)=>{for(var s=r>1?void 0:r?pC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&fC(t,n,s),s};const mC='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',gC=k`<span class="mi sm">extension</span>`,ed="plugin:catalogUrls";function qs(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const bC=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],wp=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],wC=new Map(wp),yC={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let We=class extends ke{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[qs()],this.activeCatalogUrl=qs(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(){const e=await ae(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(i=>[i.url,i]));const r=await e.store.settings.findOne(ed),s=Array.isArray(r?.value)?r.value.filter(i=>typeof i=="string"):[];this.catalogUrls=s.length>0?s:[qs()],this.activeCatalogUrl=this.catalogUrls[0]??qs(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(s=>({...s,absUrl:new URL(s.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await ae()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const s=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const i=await fetch(s,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const o=await i.json(),a=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=a.map(c=>({...c,absUrl:new URL(c.url,s).toString()})),this.serverCatalogError=null}catch(i){this.serverCatalog=[],this.serverCatalogError=i.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ae()).store.settings.upsert({name:ed,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ae()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await ae();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await ae(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await ae();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await ae(),r=$a(e),s=this.records.get(r);await n.store.plugins.upsert({...s??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:s?.lastFetched??0}),this.records=new Map(this.records.set(r,{...s,url:r,enabled:t,lastFetched:s?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ae()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ae();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const s=new Blob([r],{type:"text/javascript"}),i=URL.createObjectURL(s);try{const a=await import(i);await a.init?.(t.api),await a.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(i),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(a=>[a.url,a])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",s){const i=s?s[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return k`
      <button type="button" class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`} title=${i} aria-pressed=${t!==void 0} @click=${n}>
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of w1){const s=r.fixed?!0:this.records.get($a(n))?.enabled!==!1,i=!r.fixed&&_t==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:s,status:s&&!i?"enabled":"disabled",fixed:!!r.fixed,...i?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),s=this.records.get(n.absUrl),i=r?["available","installed"]:["available"],o=e.get(n.id),a=s?.enabled!==!1,c=r&&_t!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...i]):new Set(i),enabled:a,...r?{status:a&&!c?"enabled":"disabled"}:{},...c?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const s=this.records.get(n),i=s?.lastFetched?new Date(s.lastFetched).toLocaleString():"never",o=s?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:s?.lastError??`Last fetched: ${i}`,metaIsError:!!s?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&_t==="off"?"enabled":"disabled",..._t!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[c,d]of this.filterStates)(d==="on"?n:r).push(c);const s=[],i=[];for(const[c,d]of this.typeFilters)(d==="on"?s:i).push(c);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,a=e.filter(c=>!(n.length&&!n.some(d=>c.categories.has(d))||r.some(d=>c.categories.has(d))||s.length&&!(c.type&&s.includes(c.type))||c.type&&i.includes(c.type)||o&&c.status!==o));return t?a.filter(c=>[c.id,c.name,c.type,c.meta,c.author].some(d=>d?.toLowerCase().includes(t))):a}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return k`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}>
        <span class="row-icon">${e.icon?Gn(e.icon):gC}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?k`<span class="row-id">${e.id}</span>`:""}${e.type?k`<span class="row-type" title="Plugin type">${wC.get(e.type)??e.type}</span>`:""}${e.skipped?k`<span class="row-skipped" title="Safe mode kept this plugin from loading this session — your saved setting is unchanged">skipped</span>`:""}
          </div>
          ${e.meta?k`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?k`<a class="row-repo" href=${e.repo} target="_blank" rel="noopener noreferrer" title="View source on GitHub">${Gn(mC)}</a>`:k`<span></span>`}
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
                ${bC.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",yC)}
              </div>
              <div class="search">
                <input type="text" placeholder="Search plugins…" .value=${this.search} @input=${t=>this.search=t.target.value} />
              </div>
            </div>

            <div class="type-filters">
              <span class="filter-label">Type</span>
              ${wp.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
    `}};We.styles=[xt,yt,Se`
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
    `];rt([F()],We.prototype,"urls",2);rt([F()],We.prototype,"records",2);rt([F()],We.prototype,"addUrl",2);rt([F()],We.prototype,"catalog",2);rt([F()],We.prototype,"catalogError",2);rt([F()],We.prototype,"serverCatalog",2);rt([F()],We.prototype,"serverCatalogError",2);rt([F()],We.prototype,"installing",2);rt([F()],We.prototype,"catalogUrls",2);rt([F()],We.prototype,"activeCatalogUrl",2);rt([F()],We.prototype,"search",2);rt([F()],We.prototype,"filterStates",2);rt([F()],We.prototype,"typeFilters",2);rt([F()],We.prototype,"statusFilter",2);We=rt([Ee("plugin-manager-dialog")],We);var vC=Object.defineProperty,$C=Object.getOwnPropertyDescriptor,Qt=(e,t,n,r)=>{for(var s=r>1?void 0:r?$C(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&vC(t,n,s),s};const Or="__general__";let lt=class extends ke{constructor(){super(...arguments),this.tabs=[],this.active=Or,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const s=r.names.map(i=>`“${i}”`).join(", ");this.secretError=`“${r.field.label}” references ${s}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e),this.dialogEl&&pp("settings",this.dialogEl)}async open(){const e=await ae(),t=[...e.registries.settings];this.tabs=t.map(([i,o])=>({id:i,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},s={};for(const i of this.tabs)for(const o of i.fields){const a=`${i.id}:${o.key}`,c=await e.api.settings.placement(i.id,o.key);c==="user"?(r[a]=si(a),s[a]="user"):c==="workspace"?(r[a]=(await e.store.settings.findOne(a))?.value,s[a]="workspace"):(r[a]=o.default,s[a]=o.scope??"workspace")}this.values=r,this.placements=s,this.secretsText=Ur(),this.active=Or,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&lt.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(Qn(this.secretsText)));return lt.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await ae()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,s=n?"user":"workspace";this.placements={...this.placements,[r]:s},await(await ae()).api.settings.set(e.id,t.key,this.values[r],s)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,bd(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ae();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return k`<textarea .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)}></textarea>`;case"number":return k`<input
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
                  @change=${o=>{const c=o.target.checked?[...s,i]:s.filter(d=>d!==i);this.setValue(e,t,c)}}
                />${i}</label
              >`)}
        </div>`}case"string":default:return k`<input type="text" .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)} />`}}renderSecretControl(e,t,n){const r=Object.keys(Qn(this.secretsText)),s=lt.rawSecret(n)||this.missingRefs(n).length>0;return k`<div class="secret-row">
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
            ${t.help?k`<p>${t.help}</p>`:ie} ${t.helpUrl?k`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer">${t.helpLinkLabel||xC(t.helpUrl)}</a>`:ie}
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
    `}renderPanel(){if(this.active===Or)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?k`
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
                <button type="button" class=${this.active===Or?"active":""} @click=${()=>this.active=Or}>General</button>
                ${this.tabs.map(e=>k`<button type="button" class=${this.active===e.id?"active":""} @click=${()=>this.active=e.id}>${e.name}</button>`)}
              </nav>
              <section class="panel">${this.renderPanel()}</section>
            </div>
          </div>
        </form>
      </dialog>
    `}};lt.styles=[xt,yt,Se`
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
    `];Qt([F()],lt.prototype,"tabs",2);Qt([F()],lt.prototype,"active",2);Qt([F()],lt.prototype,"values",2);Qt([F()],lt.prototype,"placements",2);Qt([F()],lt.prototype,"secretsText",2);Qt([F()],lt.prototype,"workspaceTitle",2);Qt([F()],lt.prototype,"secretError",2);Qt([F()],lt.prototype,"openHelp",2);lt=Qt([Ee("settings-dialog")],lt);function xC(e){try{return new URL(e).host}catch{return e}}const yp=5,td="palette:recent",vp="Recent";function kC(e,t,n=yp){return[t,...e.filter(r=>r!==t)].slice(0,n)}function CC(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,yp):[]}function _C(e,t){if(t.length===0)return e;const n=new Map(e.map(i=>[i.id,i])),r=[];for(const i of t){const o=n.get(i);o&&r.push({...o,group:vp})}if(r.length===0)return e;const s=new Set(r.map(i=>i.id));return[...r,...e.filter(i=>!s.has(i.id))]}var SC=Object.defineProperty,EC=Object.getOwnPropertyDescriptor,ur=(e,t,n,r)=>{for(var s=r>1?void 0:r?EC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&SC(t,n,s),s};const TC={[vp]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function nd(e){return TC[e]??3}function IC(e){return e?e.trimStart().startsWith("<svg")?k`<span class="cmd-svg">${Ta(e)}</span>`:k`<span class="mi sm">${e}</span>`:k`<span class="mi sm">chevron_right</span>`}let un=class extends ke{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await ae();this.api=e.api,this.recentIds=CC((await e.api.store.settings.findOne(td))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await ae(),t=e.api,n=[];for(const i of e.registries.commands)n.push({id:i.id,title:i.title,group:i.group??"Commands",...i.icon?{icon:i.icon}:{},haystack:[i.title,i.group,...i.keywords??[]].join(" ").toLowerCase(),run:()=>i.run(t)});for(const i of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${i.id}`,title:i.label,group:"Actions",...i.icon?{icon:i.icon}:{},haystack:`${i.label} ${i.tooltip??""}`.toLowerCase(),run:()=>i.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((i,o)=>i.name.localeCompare(o.name));for(const i of r)n.push({id:`goto:${i.id}`,title:`Go to: ${i.name}`,group:"Tables",icon:"table_chart",haystack:`${i.name} go to table`.toLowerCase(),run:()=>{Sf(i.id)}});const s=await t.store.viewInstances.find({workspaceId:e.workspaceId});s.sort((i,o)=>i.name.localeCompare(o.name));for(const i of s)n.push({id:`goto-view:${i.id}`,title:`Go to view: ${i.name}`,group:"Views",icon:"view_quilt",haystack:`${i.name} go to view`.toLowerCase(),run:async()=>{await zf(i.id)}});return _C(n,this.recentIds).map((i,o)=>({it:i,i:o})).sort((i,o)=>nd(i.it.group)-nd(o.it.group)||i.i-o.i).map(({it:i})=>i)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=kC(this.recentIds,e);try{await this.api?.store.settings.upsert({name:td,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return k`
      <dialog @keydown=${this.onKeydown} @click=${this.onDialogClick} @close=${()=>this.search=""}>
        <div class="search-row">
          <span class="mi">search</span>
          <input type="text" placeholder="Type a command…  (windows, go to, import, export)" .value=${this.search} @input=${this.onInput} />
        </div>
        <div class="list">
          ${e.length===0?k`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const s=n.group!==t?(t=n.group,n.group):null;return k`
                  ${s?k`<div class="group-head">${s}</div>`:""}
                  <div class=${`item${r===this.selected?" sel":""}`} @mousemove=${()=>this.selected=r} @click=${()=>this.execute(n)}>
                    ${IC(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};un.styles=[xt,Se`
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
    `];ur([F()],un.prototype,"search",2);ur([F()],un.prototype,"items",2);ur([F()],un.prototype,"selected",2);ur([Bt("dialog")],un.prototype,"dialogEl",2);ur([Bt("input")],un.prototype,"inputEl",2);un=ur([Ee("command-palette-dialog")],un);var AC=Object.defineProperty,RC=Object.getOwnPropertyDescriptor,Ki=(e,t,n,r)=>{for(var s=r>1?void 0:r?RC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&AC(t,n,s),s};let sr=class extends ke{constructor(){super(...arguments),this.label="",this.fraction=void 0,this.detail="",this.onProgress=e=>{const t=e.detail;this.label=t.label??"",this.fraction=t.fraction,this.detail=t.detail??""}}connectedCallback(){super.connectedCallback(),document.addEventListener(ya,this.onProgress)}disconnectedCallback(){document.removeEventListener(ya,this.onProgress),super.disconnectedCallback()}render(){if(!this.label)return ie;const e=this.fraction==null?null:Math.round(Math.min(1,Math.max(0,this.fraction))*100);return k`
      <div class="wrap" role="status" aria-live="polite">
        <span class="label">${this.label}</span>
        <span class="bar">
          <span class="fill ${e==null?"":"determinate"}" style=${e==null?"":`width:${e}%`}></span>
        </span>
        ${this.detail?k`<span class="detail">${this.detail}</span>`:ie}
        <span class="pct">${e==null?"":`${e}%`}</span>
      </div>
    `}};sr.styles=Se`
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
  `;Ki([F()],sr.prototype,"label",2);Ki([F()],sr.prototype,"fraction",2);Ki([F()],sr.prototype,"detail",2);sr=Ki([Ee("app-progress")],sr);var OC=Object.defineProperty,DC=Object.getOwnPropertyDescriptor,$p=(e,t,n,r)=>{for(var s=r>1?void 0:r?DC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&OC(t,n,s),s};let hi=class extends ke{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await Tf(),await ik()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?k``:k`<div class="empty">No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the page, or click <strong>+ New Table</strong> above.</div>`}};hi.styles=Se`
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
  `;$p([F()],hi.prototype,"tables",2);hi=$p([Ee("table-list")],hi);var PC=Object.defineProperty,LC=Object.getOwnPropertyDescriptor,Il=(e,t,n,r)=>{for(var s=r>1?void 0:r?LC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&PC(t,n,s),s};let Yr=class extends ke{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);t&&qi(t.name)}render(){return k`
      <select .value=${this.current} @change=${e=>this.switchWorkspace(e.target.value)}>
        ${this.workspaces.map(e=>k`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${up} title="New workspace">
        <span class="mi sm">add</span>
      </button>
      <button @click=${dp} title="Delete workspace">
        <span class="mi sm">delete</span>
      </button>
    `}};Yr.styles=[xt,Se`
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
    `];Il([F()],Yr.prototype,"workspaces",2);Il([F()],Yr.prototype,"current",2);Yr=Il([Ee("workspace-selector")],Yr);var rd=Object.freeze,xp=Object.defineProperty,MC=Object.getOwnPropertyDescriptor,At=(e,t,n,r)=>{for(var s=r>1?void 0:r?MC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&xp(t,n,s),s},jC=(e,t)=>rd(xp(e,"raw",{value:rd(e.slice())})),sd;function id(e){return e?e.trimStart().startsWith("<svg")?k`<span class="icon-svg" aria-hidden="true">${Ta(e)}</span>`:k`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let ut=class extends ke{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{ad(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{const t=e.relatedTarget;t&&(this.contains(t)||zC()?.contains(t))||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!ad(e))return;e.preventDefault();const t=await ae(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(s){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:s})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),document.addEventListener("dragover",this.onDragOver),document.addEventListener("dragleave",this.onDragLeave),document.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragover",this.onDragOver),document.removeEventListener("dragleave",this.onDragLeave),document.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ae();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",NC(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return k` <button class="icon-btn" title=${e.tooltip??e.label} aria-label=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>${id(e.icon)}</button> `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return k`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${id(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return k(sd||(sd=jC([`
      <header>
        <strong
          >`,`
          <a class="version-link" href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md" target="_blank" rel="noopener" title="View the changelog on GitHub"
            ><span class="version">v0.0.313</span></a
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
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};ut.styles=[xt,Se`
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
    `];At([Bt("new-table-dialog")],ut.prototype,"dialog",2);At([Bt("csv-paste-dialog")],ut.prototype,"csvPasteDialog",2);At([Bt("plugin-manager-dialog")],ut.prototype,"pluginManagerDialog",2);At([Bt("settings-dialog")],ut.prototype,"settingsDialog",2);At([Bt("command-palette-dialog")],ut.prototype,"commandPaletteDialog",2);At([Bt("input.search")],ut.prototype,"searchInput",2);At([F()],ut.prototype,"footerButtons",2);At([F()],ut.prototype,"headerButtons",2);At([F()],ut.prototype,"searchQuery",2);At([F()],ut.prototype,"searchOpen",2);At([F()],ut.prototype,"workspaceTitle",2);ut=At([Ee("app-shell")],ut);const od=document.title;function NC(e){const t=e.trim();document.title=t?`${t} — ${od}`:od}function zC(){return document.getElementById("easydb-panels")}function ad(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ae(),Pe(()=>Promise.resolve().then(()=>Lf),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{ie as A,Se as a,k as b,vt as c,yt as d,ZC as g,ke as i,$t as m,F as r,Ee as t};
//# sourceMappingURL=index-oxyVSU7Y.js.map
