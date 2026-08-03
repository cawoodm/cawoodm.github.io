(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const rf="modulepreload",sf=function(e){return"/easydbaccess/"+e},ml={},Xe=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");s=o(n.map(h=>{if(h=sf(h),h in ml)return;ml[h]=!0;const p=h.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const w=document.createElement("link");if(w.rel=p?"stylesheet":rf,p||(w.as="script"),w.crossOrigin="",w.href=h,u&&w.setAttribute("nonce",u),document.head.appendChild(w),p)return new Promise((y,$)=>{w.addEventListener("load",y),w.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs=globalThis,No=xs.ShadowRoot&&(xs.ShadyCSS===void 0||xs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zo=Symbol(),gl=new WeakMap;let lu=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==zo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(No&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=gl.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&gl.set(n,t))}return t}toString(){return this.cssText}};const of=e=>new lu(typeof e=="string"?e:e+"",void 0,zo),Ce=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new lu(n,e,zo)},af=(e,t)=>{if(No)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=xs.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},bl=No?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return of(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:lf,defineProperty:cf,getOwnPropertyDescriptor:uf,getOwnPropertyNames:df,getOwnPropertySymbols:hf,getPrototypeOf:ff}=Object,Fs=globalThis,wl=Fs.trustedTypes,pf=wl?wl.emptyScript:"",mf=Fs.reactiveElementPolyfillSupport,br=(e,t)=>e,Es={toAttribute(e,t){switch(t){case Boolean:e=e?pf:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Uo=(e,t)=>!lf(e,t),yl={attribute:!0,type:String,converter:Es,reflect:!1,useDefault:!1,hasChanged:Uo};Symbol.metadata??=Symbol("metadata"),Fs.litPropertyMetadata??=new WeakMap;let Rn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=yl){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&cf(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:i}=uf(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:s,set(o){const l=s?.call(this);i?.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yl}static _$Ei(){if(this.hasOwnProperty(br("elementProperties")))return;const t=ff(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(br("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(br("properties"))){const n=this.properties,r=[...df(n),...hf(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(bl(s))}else t!==void 0&&n.push(bl(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return af(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:Es).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Es;this._$Em=s;const l=o.fromAttribute(n,i.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,n,r,s=!1,i){if(t!==void 0){const o=this.constructor;if(s===!1&&(i=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??Uo)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r){const{wrapped:o}=i,l=this[s];o!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,i,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Rn.elementStyles=[],Rn.shadowRootOptions={mode:"open"},Rn[br("elementProperties")]=new Map,Rn[br("finalized")]=new Map,mf?.({ReactiveElement:Rn}),(Fs.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fo=globalThis,vl=e=>e,Ts=Fo.trustedTypes,$l=Ts?Ts.createPolicy("lit-html",{createHTML:e=>e}):void 0,cu="$lit$",Xt=`lit$${Math.random().toFixed(9).slice(2)}$`,uu="?"+Xt,gf=`<${uu}>`,bn=document,yr=()=>bn.createComment(""),vr=e=>e===null||typeof e!="object"&&typeof e!="function",Bo=Array.isArray,bf=e=>Bo(e)||typeof e?.[Symbol.iterator]=="function",Qi=`[ 	
\f\r]`,cr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xl=/-->/g,kl=/>/g,hn=RegExp(`>|${Qi}(?:([^\\s"'>=/]+)(${Qi}*=${Qi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cl=/'/g,_l=/"/g,du=/^(?:script|style|textarea|title)$/i,wf=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),C=wf(1),wn=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),Sl=new WeakMap,gn=bn.createTreeWalker(bn,129);function hu(e,t){if(!Bo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $l!==void 0?$l.createHTML(t):t}const yf=(e,t)=>{const n=e.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=cr;for(let l=0;l<n;l++){const u=e[l];let h,p,g=-1,w=0;for(;w<u.length&&(o.lastIndex=w,p=o.exec(u),p!==null);)w=o.lastIndex,o===cr?p[1]==="!--"?o=xl:p[1]!==void 0?o=kl:p[2]!==void 0?(du.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=hn):p[3]!==void 0&&(o=hn):o===hn?p[0]===">"?(o=s??cr,g=-1):p[1]===void 0?g=-2:(g=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?hn:p[3]==='"'?_l:Cl):o===_l||o===Cl?o=hn:o===xl||o===kl?o=cr:(o=hn,s=void 0);const y=o===hn&&e[l+1].startsWith("/>")?" ":"";i+=o===cr?u+gf:g>=0?(r.push(h),u.slice(0,g)+cu+u.slice(g)+Xt+y):u+Xt+(g===-2?l:y)}return[hu(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class $r{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const l=t.length-1,u=this.parts,[h,p]=yf(t,n);if(this.el=$r.createElement(h,r),gn.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=gn.nextNode())!==null&&u.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const g of s.getAttributeNames())if(g.endsWith(cu)){const w=p[o++],y=s.getAttribute(g).split(Xt),$=/([.?@])?(.*)/.exec(w);u.push({type:1,index:i,name:$[2],strings:y,ctor:$[1]==="."?$f:$[1]==="?"?xf:$[1]==="@"?kf:Bs}),s.removeAttribute(g)}else g.startsWith(Xt)&&(u.push({type:6,index:i}),s.removeAttribute(g));if(du.test(s.tagName)){const g=s.textContent.split(Xt),w=g.length-1;if(w>0){s.textContent=Ts?Ts.emptyScript:"";for(let y=0;y<w;y++)s.append(g[y],yr()),gn.nextNode(),u.push({type:2,index:++i});s.append(g[w],yr())}}}else if(s.nodeType===8)if(s.data===uu)u.push({type:2,index:i});else{let g=-1;for(;(g=s.data.indexOf(Xt,g+1))!==-1;)u.push({type:7,index:i}),g+=Xt.length-1}i++}}static createElement(t,n){const r=bn.createElement("template");return r.innerHTML=t,r}}function Ln(e,t,n=e,r){if(t===wn)return t;let s=r!==void 0?n._$Co?.[r]:n._$Cl;const i=vr(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=s:n._$Cl=s),s!==void 0&&(t=Ln(e,s._$AS(e,t.values),s,r)),t}class vf{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=(t?.creationScope??bn).importNode(n,!0);gn.currentNode=s;let i=gn.nextNode(),o=0,l=0,u=r[0];for(;u!==void 0;){if(o===u.index){let h;u.type===2?h=new Ar(i,i.nextSibling,this,t):u.type===1?h=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(h=new Cf(i,this,t)),this._$AV.push(h),u=r[++l]}o!==u?.index&&(i=gn.nextNode(),o++)}return gn.currentNode=bn,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Ar{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Ln(this,t,n),vr(t)?t===oe||t==null||t===""?(this._$AH!==oe&&this._$AR(),this._$AH=oe):t!==this._$AH&&t!==wn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bf(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==oe&&vr(this._$AH)?this._$AA.nextSibling.data=t:this.T(bn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=$r.createElement(hu(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(n);else{const i=new vf(s,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(t){let n=Sl.get(t.strings);return n===void 0&&Sl.set(t.strings,n=new $r(t)),n}k(t){Bo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of t)s===n.length?n.push(r=new Ar(this.O(yr()),this.O(yr()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=vl(t).nextSibling;vl(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Bs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,i){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=oe}_$AI(t,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=Ln(this,t,n,0),o=!vr(t)||t!==this._$AH&&t!==wn,o&&(this._$AH=t);else{const l=t;let u,h;for(t=i[0],u=0;u<i.length-1;u++)h=Ln(this,l[r+u],n,u),h===wn&&(h=this._$AH[u]),o||=!vr(h)||h!==this._$AH[u],h===oe?t=oe:t!==oe&&(t+=(h??"")+i[u+1]),this._$AH[u]=h}o&&!s&&this.j(t)}j(t){t===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class $f extends Bs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===oe?void 0:t}}class xf extends Bs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==oe)}}class kf extends Bs{constructor(t,n,r,s,i){super(t,n,r,s,i),this.type=5}_$AI(t,n=this){if((t=Ln(this,t,n,0)??oe)===wn)return;const r=this._$AH,s=t===oe&&r!==oe||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==oe&&(r===oe||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Cf{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ln(this,t)}}const _f=Fo.litHtmlPolyfillSupport;_f?.($r,Ar),(Fo.litHtmlVersions??=[]).push("3.3.3");const Sf=(e,t,n)=>{const r=n?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const i=n?.renderBefore??null;r._$litPart$=s=new Ar(t.insertBefore(yr(),i),i,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=globalThis;let $e=class extends Rn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Sf(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return wn}};$e._$litElement$=!0,$e.finalized=!0,qo.litElementHydrateSupport?.({LitElement:$e});const Ef=qo.litElementPolyfillSupport;Ef?.({LitElement:$e});(qo.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tf={attribute:!0,type:String,converter:Es,reflect:!1,hasChanged:Uo},If=(e=Tf,t,n)=>{const{kind:r,metadata:s}=n;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(l){const u=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,u,e,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(r==="setter"){const{name:o}=n;return function(l){const u=this[o];t.call(this,l),this.requestUpdate(o,u,e,!0,l)}}throw Error("Unsupported decorator location: "+r)};function pt(e){return(t,n)=>typeof n=="object"?If(e,t,n):((r,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e){return pt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Af=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt(e,t){return(n,r,s)=>{const i=o=>o.renderRoot?.querySelector(e)??null;return Af(n,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rf={CHILD:2},fu=e=>(...t)=>({_$litDirective$:e,values:t});class Of{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Is extends Of{constructor(t){if(super(t),this.it=oe,t.type!==Rf.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===oe||t==null)return this._t=void 0,this.it=t;if(t===wn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Is.directiveName="unsafeHTML",Is.resultType=1;const Pn=fu(Is);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ho extends Is{}ho.directiveName="unsafeSVG",ho.resultType=2;const Ho=fu(ho);var Df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ks={exports:{}},Lf=ks.exports,El;function Mf(){return El||(El=1,(function(e,t){(function(n,r){e.exports=r()})(Lf,function(){var n=function(a,c){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,f){d.__proto__=f}||function(d,f){for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(d[m]=f[m])})(a,c)},r=function(){return(r=Object.assign||function(a){for(var c,d=1,f=arguments.length;d<f;d++)for(var m in c=arguments[d])Object.prototype.hasOwnProperty.call(c,m)&&(a[m]=c[m]);return a}).apply(this,arguments)};function s(a,c,d){for(var f,m=0,b=c.length;m<b;m++)!f&&m in c||((f=f||Array.prototype.slice.call(c,0,m))[m]=c[m]);return a.concat(f||Array.prototype.slice.call(c))}var i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Df,o=Object.keys,l=Array.isArray;function u(a,c){return typeof c!="object"||o(c).forEach(function(d){a[d]=c[d]}),a}typeof Promise>"u"||i.Promise||(i.Promise=Promise);var h=Object.getPrototypeOf,p={}.hasOwnProperty;function g(a,c){return p.call(a,c)}function w(a,c){typeof c=="function"&&(c=c(h(a))),(typeof Reflect>"u"?o:Reflect.ownKeys)(c).forEach(function(d){$(a,d,c[d])})}var y=Object.defineProperty;function $(a,c,d,f){y(a,c,u(d&&g(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},f))}function x(a){return{from:function(c){return a.prototype=Object.create(c.prototype),$(a.prototype,"constructor",a),{extend:w.bind(null,a.prototype)}}}}var I=Object.getOwnPropertyDescriptor,O=[].slice;function j(a,c,d){return O.call(a,c,d)}function B(a,c){return c(a)}function Y(a){if(!a)throw new Error("Assertion Failed")}function ce(a){i.setImmediate?setImmediate(a):setTimeout(a,0)}function V(a,c){if(typeof c=="string"&&g(a,c))return a[c];if(!c)return a;if(typeof c!="string"){for(var d=[],f=0,m=c.length;f<m;++f){var b=V(a,c[f]);d.push(b)}return d}var v=c.indexOf(".");if(v!==-1){var k=a[c.substr(0,v)];return k==null?void 0:V(k,c.substr(v+1))}}function R(a,c,d){if(a&&c!==void 0&&!("isFrozen"in Object&&Object.isFrozen(a)))if(typeof c!="string"&&"length"in c){Y(typeof d!="string"&&"length"in d);for(var f=0,m=c.length;f<m;++f)R(a,c[f],d[f])}else{var b,v,k=c.indexOf(".");k!==-1?(b=c.substr(0,k),(v=c.substr(k+1))===""?d===void 0?l(a)&&!isNaN(parseInt(b))?a.splice(b,1):delete a[b]:a[b]=d:R(k=!(k=a[b])||!g(a,b)?a[b]={}:k,v,d)):d===void 0?l(a)&&!isNaN(parseInt(c))?a.splice(c,1):delete a[c]:a[c]=d}}function H(a){var c,d={};for(c in a)g(a,c)&&(d[c]=a[c]);return d}var te=[].concat;function ee(a){return te.apply([],a)}var jt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ee([8,16,32,64].map(function(a){return["Int","Uint","Float"].map(function(c){return c+a+"Array"})}))).filter(function(a){return i[a]}),ie=new Set(jt.map(function(a){return i[a]})),Q=null;function q(a){return Q=new WeakMap,a=(function c(d){if(!d||typeof d!="object")return d;var f=Q.get(d);if(f)return f;if(l(d)){f=[],Q.set(d,f);for(var m=0,b=d.length;m<b;++m)f.push(c(d[m]))}else if(ie.has(d.constructor))f=d;else{var v,k=h(d);for(v in f=k===Object.prototype?{}:Object.create(k),Q.set(d,f),d)g(d,v)&&(f[v]=c(d[v]))}return f})(a),Q=null,a}var ne={}.toString;function we(a){return ne.call(a).slice(8,-1)}var _e=typeof Symbol<"u"?Symbol.iterator:"@@iterator",et=typeof _e=="symbol"?function(a){var c;return a!=null&&(c=a[_e])&&c.apply(a)}:function(){return null};function je(a,c){return c=a.indexOf(c),0<=c&&a.splice(c,1),0<=c}var pe={};function Ae(a){var c,d,f,m;if(arguments.length===1){if(l(a))return a.slice();if(this===pe&&typeof a=="string")return[a];if(m=et(a)){for(d=[];!(f=m.next()).done;)d.push(f.value);return d}if(a==null)return[a];if(typeof(c=a.length)!="number")return[a];for(d=new Array(c);c--;)d[c]=a[c];return d}for(c=arguments.length,d=new Array(c);c--;)d[c]=arguments[c];return d}var Ye=typeof Symbol<"u"?function(a){return a[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Xn=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],yt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Xn),me={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Re(a,c){this.name=a,this.message=c}function hi(a,c){return a+". Errors: "+Object.keys(c).map(function(d){return c[d].toString()}).filter(function(d,f,m){return m.indexOf(d)===f}).join(`
`)}function xn(a,c,d,f){this.failures=c,this.failedKeys=f,this.successCount=d,this.message=hi(a,c)}function kn(a,c){this.name="BulkError",this.failures=Object.keys(c).map(function(d){return c[d]}),this.failuresByPos=c,this.message=hi(a,this.failures)}x(Re).from(Error).extend({toString:function(){return this.name+": "+this.message}}),x(xn).from(Re),x(kn).from(Re);var fi=yt.reduce(function(a,c){return a[c]=c+"Error",a},{}),Sh=Re,de=yt.reduce(function(a,c){var d=c+"Error";function f(m,b){this.name=d,m?typeof m=="string"?(this.message="".concat(m).concat(b?`
 `+b:""),this.inner=b||null):typeof m=="object"&&(this.message="".concat(m.name," ").concat(m.message),this.inner=m):(this.message=me[c]||d,this.inner=null)}return x(f).from(Sh),a[c]=f,a},{});de.Syntax=SyntaxError,de.Type=TypeError,de.Range=RangeError;var La=Xn.reduce(function(a,c){return a[c+"Error"]=de[c],a},{}),zr=yt.reduce(function(a,c){return["Syntax","Type","Range"].indexOf(c)===-1&&(a[c+"Error"]=de[c]),a},{});function xe(){}function Yn(a){return a}function Eh(a,c){return a==null||a===Yn?c:function(d){return c(a(d))}}function tn(a,c){return function(){a.apply(this,arguments),c.apply(this,arguments)}}function Th(a,c){return a===xe?c:function(){var d=a.apply(this,arguments);d!==void 0&&(arguments[0]=d);var f=this.onsuccess,m=this.onerror;this.onsuccess=null,this.onerror=null;var b=c.apply(this,arguments);return f&&(this.onsuccess=this.onsuccess?tn(f,this.onsuccess):f),m&&(this.onerror=this.onerror?tn(m,this.onerror):m),b!==void 0?b:d}}function Ih(a,c){return a===xe?c:function(){a.apply(this,arguments);var d=this.onsuccess,f=this.onerror;this.onsuccess=this.onerror=null,c.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?tn(d,this.onsuccess):d),f&&(this.onerror=this.onerror?tn(f,this.onerror):f)}}function Ah(a,c){return a===xe?c:function(d){var f=a.apply(this,arguments);u(d,f);var m=this.onsuccess,b=this.onerror;return this.onsuccess=null,this.onerror=null,d=c.apply(this,arguments),m&&(this.onsuccess=this.onsuccess?tn(m,this.onsuccess):m),b&&(this.onerror=this.onerror?tn(b,this.onerror):b),f===void 0?d===void 0?void 0:d:u(f,d)}}function Rh(a,c){return a===xe?c:function(){return c.apply(this,arguments)!==!1&&a.apply(this,arguments)}}function pi(a,c){return a===xe?c:function(){var d=a.apply(this,arguments);if(d&&typeof d.then=="function"){for(var f=this,m=arguments.length,b=new Array(m);m--;)b[m]=arguments[m];return d.then(function(){return c.apply(f,b)})}return c.apply(this,arguments)}}zr.ModifyError=xn,zr.DexieError=Re,zr.BulkError=kn;var Tt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ma(a){Tt=a}var Qn={},ja=100,jt=typeof Promise>"u"?[]:(function(){var a=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[a,h(a),a];var c=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[c,h(c),a]})(),Xn=jt[0],yt=jt[1],jt=jt[2],yt=yt&&yt.then,nn=Xn&&Xn.constructor,mi=!!jt,Jn=function(a,c){Zn.push([a,c]),Ur&&(queueMicrotask(Dh),Ur=!1)},gi=!0,Ur=!0,rn=[],Fr=[],bi=Yn,qt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:xe,pgp:!1,env:{},finalize:xe},ue=qt,Zn=[],sn=0,Br=[];function se(a){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var c=this._PSD=ue;if(typeof a!="function"){if(a!==Qn)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&yi(this,this._value))}this._state=null,this._value=null,++c.ref,(function d(f,m){try{m(function(b){if(f._state===null){if(b===f)throw new TypeError("A promise cannot be resolved with itself.");var v=f._lib&&Cn();b&&typeof b.then=="function"?d(f,function(k,S){b instanceof se?b._then(k,S):b.then(k,S)}):(f._state=!0,f._value=b,za(f)),v&&_n()}},yi.bind(null,f))}catch(b){yi(f,b)}})(this,a)}var wi={get:function(){var a=ue,c=Vr;function d(f,m){var b=this,v=!a.global&&(a!==ue||c!==Vr),k=v&&!Kt(),S=new se(function(T,P){vi(b,new Na(Fa(f,a,v,k),Fa(m,a,v,k),T,P,a))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return d.prototype=Qn,d},set:function(a){$(this,"then",a&&a.prototype===Qn?wi:{get:function(){return a},set:wi.set})}};function Na(a,c,d,f,m){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof c=="function"?c:null,this.resolve=d,this.reject=f,this.psd=m}function yi(a,c){var d,f;Fr.push(c),a._state===null&&(d=a._lib&&Cn(),c=bi(c),a._state=!1,a._value=c,f=a,rn.some(function(m){return m._value===f._value})||rn.push(f),za(a),d&&_n())}function za(a){var c=a._listeners;a._listeners=[];for(var d=0,f=c.length;d<f;++d)vi(a,c[d]);var m=a._PSD;--m.ref||m.finalize(),sn===0&&(++sn,Jn(function(){--sn==0&&$i()},[]))}function vi(a,c){if(a._state!==null){var d=a._state?c.onFulfilled:c.onRejected;if(d===null)return(a._state?c.resolve:c.reject)(a._value);++c.psd.ref,++sn,Jn(Oh,[d,a,c])}else a._listeners.push(c)}function Oh(a,c,d){try{var f,m=c._value;!c._state&&Fr.length&&(Fr=[]),f=Tt&&c._consoleTask?c._consoleTask.run(function(){return a(m)}):a(m),c._state||Fr.indexOf(m)!==-1||(function(b){for(var v=rn.length;v;)if(rn[--v]._value===b._value)return rn.splice(v,1)})(c),d.resolve(f)}catch(b){d.reject(b)}finally{--sn==0&&$i(),--d.psd.ref||d.psd.finalize()}}function Dh(){on(qt,function(){Cn()&&_n()})}function Cn(){var a=gi;return Ur=gi=!1,a}function _n(){var a,c,d;do for(;0<Zn.length;)for(a=Zn,Zn=[],d=a.length,c=0;c<d;++c){var f=a[c];f[0].apply(null,f[1])}while(0<Zn.length);Ur=gi=!0}function $i(){var a=rn;rn=[],a.forEach(function(f){f._PSD.onunhandled.call(null,f._value,f)});for(var c=Br.slice(0),d=c.length;d;)c[--d]()}function qr(a){return new se(Qn,!1,a)}function Ie(a,c){var d=ue;return function(){var f=Cn(),m=ue;try{return Vt(d,!0),a.apply(this,arguments)}catch(b){c&&c(b)}finally{Vt(m,!1),f&&_n()}}}w(se.prototype,{then:wi,_then:function(a,c){vi(this,new Na(null,null,a,c,ue))},catch:function(a){if(arguments.length===1)return this.then(null,a);var c=a,d=arguments[1];return typeof c=="function"?this.then(null,function(f){return(f instanceof c?d:qr)(f)}):this.then(null,function(f){return(f&&f.name===c?d:qr)(f)})},finally:function(a){return this.then(function(c){return se.resolve(a()).then(function(){return c})},function(c){return se.resolve(a()).then(function(){return qr(c)})})},timeout:function(a,c){var d=this;return a<1/0?new se(function(f,m){var b=setTimeout(function(){return m(new de.Timeout(c))},a);d.then(f,m).finally(clearTimeout.bind(null,b))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&$(se.prototype,Symbol.toStringTag,"Dexie.Promise"),qt.env=Ua(),w(se,{all:function(){var a=Ae.apply(null,arguments).map(Wr);return new se(function(c,d){a.length===0&&c([]);var f=a.length;a.forEach(function(m,b){return se.resolve(m).then(function(v){a[b]=v,--f||c(a)},d)})})},resolve:function(a){return a instanceof se?a:a&&typeof a.then=="function"?new se(function(c,d){a.then(c,d)}):new se(Qn,!0,a)},reject:qr,race:function(){var a=Ae.apply(null,arguments).map(Wr);return new se(function(c,d){a.map(function(f){return se.resolve(f).then(c,d)})})},PSD:{get:function(){return ue},set:function(a){return ue=a}},totalEchoes:{get:function(){return Vr}},newPSD:Ht,usePSD:on,scheduler:{get:function(){return Jn},set:function(a){Jn=a}},rejectionMapper:{get:function(){return bi},set:function(a){bi=a}},follow:function(a,c){return new se(function(d,f){return Ht(function(m,b){var v=ue;v.unhandleds=[],v.onunhandled=b,v.finalize=tn(function(){var k,S=this;k=function(){S.unhandleds.length===0?m():b(S.unhandleds[0])},Br.push(function T(){k(),Br.splice(Br.indexOf(T),1)}),++sn,Jn(function(){--sn==0&&$i()},[])},v.finalize),a()},c,d,f)})}}),nn&&(nn.allSettled&&$(se,"allSettled",function(){var a=Ae.apply(null,arguments).map(Wr);return new se(function(c){a.length===0&&c([]);var d=a.length,f=new Array(d);a.forEach(function(m,b){return se.resolve(m).then(function(v){return f[b]={status:"fulfilled",value:v}},function(v){return f[b]={status:"rejected",reason:v}}).then(function(){return--d||c(f)})})})}),nn.any&&typeof AggregateError<"u"&&$(se,"any",function(){var a=Ae.apply(null,arguments).map(Wr);return new se(function(c,d){a.length===0&&d(new AggregateError([]));var f=a.length,m=new Array(f);a.forEach(function(b,v){return se.resolve(b).then(function(k){return c(k)},function(k){m[v]=k,--f||d(new AggregateError(m))})})})}),nn.withResolvers&&(se.withResolvers=nn.withResolvers));var Ne={awaits:0,echoes:0,id:0},Ph=0,Hr=[],Kr=0,Vr=0,Lh=0;function Ht(a,c,d,f){var m=ue,b=Object.create(m);return b.parent=m,b.ref=0,b.global=!1,b.id=++Lh,qt.env,b.env=mi?{Promise:se,PromiseProp:{value:se,configurable:!0,writable:!0},all:se.all,race:se.race,allSettled:se.allSettled,any:se.any,resolve:se.resolve,reject:se.reject}:{},c&&u(b,c),++m.ref,b.finalize=function(){--this.parent.ref||this.parent.finalize()},f=on(b,a,d,f),b.ref===0&&b.finalize(),f}function Sn(){return Ne.id||(Ne.id=++Ph),++Ne.awaits,Ne.echoes+=ja,Ne.id}function Kt(){return!!Ne.awaits&&(--Ne.awaits==0&&(Ne.id=0),Ne.echoes=Ne.awaits*ja,!0)}function Wr(a){return Ne.echoes&&a&&a.constructor===nn?(Sn(),a.then(function(c){return Kt(),c},function(c){return Kt(),De(c)})):a}function Mh(){var a=Hr[Hr.length-1];Hr.pop(),Vt(a,!1)}function Vt(a,c){var d,f=ue;(c?!Ne.echoes||Kr++&&a===ue:!Kr||--Kr&&a===ue)||queueMicrotask(c?function(m){++Vr,Ne.echoes&&--Ne.echoes!=0||(Ne.echoes=Ne.awaits=Ne.id=0),Hr.push(ue),Vt(m,!0)}.bind(null,a):Mh),a!==ue&&(ue=a,f===qt&&(qt.env=Ua()),mi&&(d=qt.env.Promise,c=a.env,(f.global||a.global)&&(Object.defineProperty(i,"Promise",c.PromiseProp),d.all=c.all,d.race=c.race,d.resolve=c.resolve,d.reject=c.reject,c.allSettled&&(d.allSettled=c.allSettled),c.any&&(d.any=c.any))))}function Ua(){var a=i.Promise;return mi?{Promise:a,PromiseProp:Object.getOwnPropertyDescriptor(i,"Promise"),all:a.all,race:a.race,allSettled:a.allSettled,any:a.any,resolve:a.resolve,reject:a.reject}:{}}function on(a,c,d,f,m){var b=ue;try{return Vt(a,!0),c(d,f,m)}finally{Vt(b,!1)}}function Fa(a,c,d,f){return typeof a!="function"?a:function(){var m=ue;d&&Sn(),Vt(c,!0);try{return a.apply(this,arguments)}finally{Vt(m,!1),f&&queueMicrotask(Kt)}}}function xi(a){Promise===nn&&Ne.echoes===0?Kr===0?a():enqueueNativeMicroTask(a):setTimeout(a,0)}(""+yt).indexOf("[native code]")===-1&&(Sn=Kt=xe);var De=se.reject,an="￿",Mt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Ba="String expected.",En=[],Gr="__dbnames",ki="readonly",Ci="readwrite";function ln(a,c){return a?c?function(){return a.apply(this,arguments)&&c.apply(this,arguments)}:a:c}var qa={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Yr(a){return typeof a!="string"||/\./.test(a)?function(c){return c}:function(c){return c[a]===void 0&&a in c&&delete(c=q(c))[a],c}}function Ha(){throw de.Type()}function ye(a,c){try{var d=Ka(a),f=Ka(c);if(d!==f)return d==="Array"?1:f==="Array"?-1:d==="binary"?1:f==="binary"?-1:d==="string"?1:f==="string"?-1:d==="Date"?1:f!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return c<a?1:a<c?-1:0;case"binary":return(function(m,b){for(var v=m.length,k=b.length,S=v<k?v:k,T=0;T<S;++T)if(m[T]!==b[T])return m[T]<b[T]?-1:1;return v===k?0:v<k?-1:1})(Va(a),Va(c));case"Array":return(function(m,b){for(var v=m.length,k=b.length,S=v<k?v:k,T=0;T<S;++T){var P=ye(m[T],b[T]);if(P!==0)return P}return v===k?0:v<k?-1:1})(a,c)}}catch{}return NaN}function Ka(a){var c=typeof a;return c!="object"?c:ArrayBuffer.isView(a)?"binary":(a=we(a),a==="ArrayBuffer"?"binary":a)}function Va(a){return a instanceof Uint8Array?a:ArrayBuffer.isView(a)?new Uint8Array(a.buffer,a.byteOffset,a.byteLength):new Uint8Array(a)}var Wa=(Se.prototype._trans=function(a,c,d){var f=this._tx||ue.trans,m=this.name,b=Tt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(a==="readonly"?"read":"write"," ").concat(this.name));function v(T,P,_){if(!_.schema[m])throw new de.NotFound("Table "+m+" not part of transaction");return c(_.idbtrans,_)}var k=Cn();try{var S=f&&f.db._novip===this.db._novip?f===ue.trans?f._promise(a,v,d):Ht(function(){return f._promise(a,v,d)},{trans:f,transless:ue.transless||ue}):(function T(P,_,M,E){if(P.idbdb&&(P._state.openComplete||ue.letThrough||P._vip)){var D=P._createTransaction(_,M,P._dbSchema);try{D.create(),P._state.PR1398_maxLoop=3}catch(L){return L.name===fi.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return T(P,_,M,E)})):De(L)}return D._promise(_,function(L,A){return Ht(function(){return ue.trans=D,E(L,A,D)})}).then(function(L){if(_==="readwrite")try{D.idbtrans.commit()}catch{}return _==="readonly"?L:D._completion.then(function(){return L})})}if(P._state.openComplete)return De(new de.DatabaseClosed(P._state.dbOpenError));if(!P._state.isBeingOpened){if(!P._state.autoOpen)return De(new de.DatabaseClosed);P.open().catch(xe)}return P._state.dbReadyPromise.then(function(){return T(P,_,M,E)})})(this.db,a,[this.name],v);return b&&(S._consoleTask=b,S=S.catch(function(T){return console.trace(T),De(T)})),S}finally{k&&_n()}},Se.prototype.get=function(a,c){var d=this;return a&&a.constructor===Object?this.where(a).first(c):a==null?De(new de.Type("Invalid argument to Table.get()")):this._trans("readonly",function(f){return d.core.get({trans:f,key:a}).then(function(m){return d.hook.reading.fire(m)})}).then(c)},Se.prototype.where=function(a){if(typeof a=="string")return new this.db.WhereClause(this,a);if(l(a))return new this.db.WhereClause(this,"[".concat(a.join("+"),"]"));var c=o(a);if(c.length===1)return this.where(c[0]).equals(a[c[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(k){if(k.compound&&c.every(function(T){return 0<=k.keyPath.indexOf(T)})){for(var S=0;S<c.length;++S)if(c.indexOf(k.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(k,S){return k.keyPath.length-S.keyPath.length})[0];if(d&&this.db._maxKey!==an){var b=d.keyPath.slice(0,c.length);return this.where(b).equals(b.map(function(S){return a[S]}))}!d&&Tt&&console.warn("The query ".concat(JSON.stringify(a)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(c.join("+"),"]"));var f=this.schema.idxByName;function m(k,S){return ye(k,S)===0}var v=c.reduce(function(_,S){var T=_[0],P=_[1],_=f[S],M=a[S];return[T||_,T||!_?ln(P,_&&_.multi?function(E){return E=V(E,S),l(E)&&E.some(function(D){return m(M,D)})}:function(E){return m(M,V(E,S))}):P]},[null,null]),b=v[0],v=v[1];return b?this.where(b.name).equals(a[b.keyPath]).filter(v):d?this.filter(v):this.where(c).equals("")},Se.prototype.filter=function(a){return this.toCollection().and(a)},Se.prototype.count=function(a){return this.toCollection().count(a)},Se.prototype.offset=function(a){return this.toCollection().offset(a)},Se.prototype.limit=function(a){return this.toCollection().limit(a)},Se.prototype.each=function(a){return this.toCollection().each(a)},Se.prototype.toArray=function(a){return this.toCollection().toArray(a)},Se.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Se.prototype.orderBy=function(a){return new this.db.Collection(new this.db.WhereClause(this,l(a)?"[".concat(a.join("+"),"]"):a))},Se.prototype.reverse=function(){return this.toCollection().reverse()},Se.prototype.mapToClass=function(a){var c,d=this.db,f=this.name;function m(){return c!==null&&c.apply(this,arguments)||this}(this.schema.mappedClass=a).prototype instanceof Ha&&((function(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Class extends value "+String(T)+" is not a constructor or null");function P(){this.constructor=S}n(S,T),S.prototype=T===null?Object.create(T):(P.prototype=T.prototype,new P)})(m,c=a),Object.defineProperty(m.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),m.prototype.table=function(){return f},a=m);for(var b=new Set,v=a.prototype;v;v=h(v))Object.getOwnPropertyNames(v).forEach(function(S){return b.add(S)});function k(S){if(!S)return S;var T,P=Object.create(a.prototype);for(T in S)if(!b.has(T))try{P[T]=S[T]}catch{}return P}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=k,this.hook("reading",k),a},Se.prototype.defineClass=function(){return this.mapToClass(function(a){u(this,a)})},Se.prototype.add=function(a,c){var d=this,f=this.schema.primKey,m=f.auto,b=f.keyPath,v=a;return b&&m&&(v=Yr(b)(a)),this._trans("readwrite",function(k){return d.core.mutate({trans:k,type:"add",keys:c!=null?[c]:null,values:[v]})}).then(function(k){return k.numFailures?se.reject(k.failures[0]):k.lastResult}).then(function(k){if(b)try{R(a,b,k)}catch{}return k})},Se.prototype.update=function(a,c){return typeof a!="object"||l(a)?this.where(":id").equals(a).modify(c):(a=V(a,this.schema.primKey.keyPath),a===void 0?De(new de.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(a).modify(c))},Se.prototype.put=function(a,c){var d=this,f=this.schema.primKey,m=f.auto,b=f.keyPath,v=a;return b&&m&&(v=Yr(b)(a)),this._trans("readwrite",function(k){return d.core.mutate({trans:k,type:"put",values:[v],keys:c!=null?[c]:null})}).then(function(k){return k.numFailures?se.reject(k.failures[0]):k.lastResult}).then(function(k){if(b)try{R(a,b,k)}catch{}return k})},Se.prototype.delete=function(a){var c=this;return this._trans("readwrite",function(d){return c.core.mutate({trans:d,type:"delete",keys:[a]})}).then(function(d){return d.numFailures?se.reject(d.failures[0]):void 0})},Se.prototype.clear=function(){var a=this;return this._trans("readwrite",function(c){return a.core.mutate({trans:c,type:"deleteRange",range:qa})}).then(function(c){return c.numFailures?se.reject(c.failures[0]):void 0})},Se.prototype.bulkGet=function(a){var c=this;return this._trans("readonly",function(d){return c.core.getMany({keys:a,trans:d}).then(function(f){return f.map(function(m){return c.hook.reading.fire(m)})})})},Se.prototype.bulkAdd=function(a,c,d){var f=this,m=Array.isArray(c)?c:void 0,b=(d=d||(m?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var T=f.schema.primKey,k=T.auto,T=T.keyPath;if(T&&m)throw new de.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(m&&m.length!==a.length)throw new de.InvalidArgument("Arguments objects and keys must have the same length");var S=a.length,T=T&&k?a.map(Yr(T)):a;return f.core.mutate({trans:v,type:"add",keys:m,values:T,wantResults:b}).then(function(D){var _=D.numFailures,M=D.results,E=D.lastResult,D=D.failures;if(_===0)return b?M:E;throw new kn("".concat(f.name,".bulkAdd(): ").concat(_," of ").concat(S," operations failed"),D)})})},Se.prototype.bulkPut=function(a,c,d){var f=this,m=Array.isArray(c)?c:void 0,b=(d=d||(m?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var T=f.schema.primKey,k=T.auto,T=T.keyPath;if(T&&m)throw new de.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(m&&m.length!==a.length)throw new de.InvalidArgument("Arguments objects and keys must have the same length");var S=a.length,T=T&&k?a.map(Yr(T)):a;return f.core.mutate({trans:v,type:"put",keys:m,values:T,wantResults:b}).then(function(D){var _=D.numFailures,M=D.results,E=D.lastResult,D=D.failures;if(_===0)return b?M:E;throw new kn("".concat(f.name,".bulkPut(): ").concat(_," of ").concat(S," operations failed"),D)})})},Se.prototype.bulkUpdate=function(a){var c=this,d=this.core,f=a.map(function(v){return v.key}),m=a.map(function(v){return v.changes}),b=[];return this._trans("readwrite",function(v){return d.getMany({trans:v,keys:f,cache:"clone"}).then(function(k){var S=[],T=[];a.forEach(function(_,M){var E=_.key,D=_.changes,L=k[M];if(L){for(var A=0,N=Object.keys(D);A<N.length;A++){var z=N[A],U=D[z];if(z===c.schema.primKey.keyPath){if(ye(U,E)!==0)throw new de.Constraint("Cannot update primary key in bulkUpdate()")}else R(L,z,U)}b.push(M),S.push(E),T.push(L)}});var P=S.length;return d.mutate({trans:v,type:"put",keys:S,values:T,updates:{keys:f,changeSpecs:m}}).then(function(_){var M=_.numFailures,E=_.failures;if(M===0)return P;for(var D=0,L=Object.keys(E);D<L.length;D++){var A,N=L[D],z=b[Number(N)];z!=null&&(A=E[N],delete E[N],E[z]=A)}throw new kn("".concat(c.name,".bulkUpdate(): ").concat(M," of ").concat(P," operations failed"),E)})})})},Se.prototype.bulkDelete=function(a){var c=this,d=a.length;return this._trans("readwrite",function(f){return c.core.mutate({trans:f,type:"delete",keys:a})}).then(function(v){var m=v.numFailures,b=v.lastResult,v=v.failures;if(m===0)return b;throw new kn("".concat(c.name,".bulkDelete(): ").concat(m," of ").concat(d," operations failed"),v)})},Se);function Se(){}function er(a){function c(v,k){if(k){for(var S=arguments.length,T=new Array(S-1);--S;)T[S-1]=arguments[S];return d[v].subscribe.apply(null,T),a}if(typeof v=="string")return d[v]}var d={};c.addEventType=b;for(var f=1,m=arguments.length;f<m;++f)b(arguments[f]);return c;function b(v,k,S){if(typeof v!="object"){var T;k=k||Rh;var P={subscribers:[],fire:S=S||xe,subscribe:function(_){P.subscribers.indexOf(_)===-1&&(P.subscribers.push(_),P.fire=k(P.fire,_))},unsubscribe:function(_){P.subscribers=P.subscribers.filter(function(M){return M!==_}),P.fire=P.subscribers.reduce(k,S)}};return d[v]=c[v]=P}o(T=v).forEach(function(_){var M=T[_];if(l(M))b(_,T[_][0],T[_][1]);else{if(M!=="asap")throw new de.InvalidArgument("Invalid event config");var E=b(_,Yn,function(){for(var D=arguments.length,L=new Array(D);D--;)L[D]=arguments[D];E.subscribers.forEach(function(A){ce(function(){A.apply(null,L)})})})}})}}function tr(a,c){return x(c).from({prototype:a}),c}function Tn(a,c){return!(a.filter||a.algorithm||a.or)&&(c?a.justLimit:!a.replayFilter)}function _i(a,c){a.filter=ln(a.filter,c)}function Si(a,c,d){var f=a.replayFilter;a.replayFilter=f?function(){return ln(f(),c())}:c,a.justLimit=d&&!f}function Qr(a,c){if(a.isPrimKey)return c.primaryKey;var d=c.getIndexByKeyPath(a.index);if(!d)throw new de.Schema("KeyPath "+a.index+" on object store "+c.name+" is not indexed");return d}function Ga(a,c,d){var f=Qr(a,c.schema);return c.openCursor({trans:d,values:!a.keysOnly,reverse:a.dir==="prev",unique:!!a.unique,query:{index:f,range:a.range}})}function Xr(a,c,d,f){var m=a.replayFilter?ln(a.filter,a.replayFilter()):a.filter;if(a.or){var b={},v=function(k,S,T){var P,_;m&&!m(S,T,function(M){return S.stop(M)},function(M){return S.fail(M)})||((_=""+(P=S.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(P)),g(b,_)||(b[_]=!0,c(k,S,T)))};return Promise.all([a.or._iterate(v,d),Ya(Ga(a,f,d),a.algorithm,v,!a.keysOnly&&a.valueMapper)])}return Ya(Ga(a,f,d),ln(a.algorithm,m),c,!a.keysOnly&&a.valueMapper)}function Ya(a,c,d,f){var m=Ie(f?function(b,v,k){return d(f(b),v,k)}:d);return a.then(function(b){if(b)return b.start(function(){var v=function(){return b.continue()};c&&!c(b,function(k){return v=k},function(k){b.stop(k),v=xe},function(k){b.fail(k),v=xe})||m(b.value,b,function(k){return v=k}),v()})})}var jt=Symbol(),nr=(Qa.prototype.execute=function(a){if(this.add!==void 0){var c=this.add;if(l(c))return s(s([],l(a)?a:[],!0),c).sort();if(typeof c=="number")return(Number(a)||0)+c;if(typeof c=="bigint")try{return BigInt(a)+c}catch{return BigInt(0)+c}throw new TypeError("Invalid term ".concat(c))}if(this.remove!==void 0){var d=this.remove;if(l(d))return l(a)?a.filter(function(f){return!d.includes(f)}).sort():[];if(typeof d=="number")return Number(a)-d;if(typeof d=="bigint")try{return BigInt(a)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return c=(c=this.replacePrefix)===null||c===void 0?void 0:c[0],c&&typeof a=="string"&&a.startsWith(c)?this.replacePrefix[1]+a.substring(c.length):a},Qa);function Qa(a){Object.assign(this,a)}var jh=(ve.prototype._read=function(a,c){var d=this._ctx;return d.error?d.table._trans(null,De.bind(null,d.error)):d.table._trans("readonly",a).then(c)},ve.prototype._write=function(a){var c=this._ctx;return c.error?c.table._trans(null,De.bind(null,c.error)):c.table._trans("readwrite",a,"locked")},ve.prototype._addAlgorithm=function(a){var c=this._ctx;c.algorithm=ln(c.algorithm,a)},ve.prototype._iterate=function(a,c){return Xr(this._ctx,a,c,this._ctx.table.core)},ve.prototype.clone=function(a){var c=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return a&&u(d,a),c._ctx=d,c},ve.prototype.raw=function(){return this._ctx.valueMapper=null,this},ve.prototype.each=function(a){var c=this._ctx;return this._read(function(d){return Xr(c,a,d,c.table.core)})},ve.prototype.count=function(a){var c=this;return this._read(function(d){var f=c._ctx,m=f.table.core;if(Tn(f,!0))return m.count({trans:d,query:{index:Qr(f,m.schema),range:f.range}}).then(function(v){return Math.min(v,f.limit)});var b=0;return Xr(f,function(){return++b,!1},d,m).then(function(){return b})}).then(a)},ve.prototype.sortBy=function(a,c){var d=a.split(".").reverse(),f=d[0],m=d.length-1;function b(S,T){return T?b(S[d[T]],T-1):S[f]}var v=this._ctx.dir==="next"?1:-1;function k(S,T){return ye(b(S,m),b(T,m))*v}return this.toArray(function(S){return S.sort(k)}).then(c)},ve.prototype.toArray=function(a){var c=this;return this._read(function(d){var f=c._ctx;if(f.dir==="next"&&Tn(f,!0)&&0<f.limit){var m=f.valueMapper,b=Qr(f,f.table.core.schema);return f.table.core.query({trans:d,limit:f.limit,values:!0,query:{index:b,range:f.range}}).then(function(k){return k=k.result,m?k.map(m):k})}var v=[];return Xr(f,function(k){return v.push(k)},d,f.table.core).then(function(){return v})},a)},ve.prototype.offset=function(a){var c=this._ctx;return a<=0||(c.offset+=a,Tn(c)?Si(c,function(){var d=a;return function(f,m){return d===0||(d===1?--d:m(function(){f.advance(d),d=0}),!1)}}):Si(c,function(){var d=a;return function(){return--d<0}})),this},ve.prototype.limit=function(a){return this._ctx.limit=Math.min(this._ctx.limit,a),Si(this._ctx,function(){var c=a;return function(d,f,m){return--c<=0&&f(m),0<=c}},!0),this},ve.prototype.until=function(a,c){return _i(this._ctx,function(d,f,m){return!a(d.value)||(f(m),c)}),this},ve.prototype.first=function(a){return this.limit(1).toArray(function(c){return c[0]}).then(a)},ve.prototype.last=function(a){return this.reverse().first(a)},ve.prototype.filter=function(a){var c;return _i(this._ctx,function(d){return a(d.value)}),(c=this._ctx).isMatch=ln(c.isMatch,a),this},ve.prototype.and=function(a){return this.filter(a)},ve.prototype.or=function(a){return new this.db.WhereClause(this._ctx.table,a,this)},ve.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ve.prototype.desc=function(){return this.reverse()},ve.prototype.eachKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.key,f)})},ve.prototype.eachUniqueKey=function(a){return this._ctx.unique="unique",this.eachKey(a)},ve.prototype.eachPrimaryKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.primaryKey,f)})},ve.prototype.keys=function(a){var c=this._ctx;c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,m){d.push(m.key)}).then(function(){return d}).then(a)},ve.prototype.primaryKeys=function(a){var c=this._ctx;if(c.dir==="next"&&Tn(c,!0)&&0<c.limit)return this._read(function(f){var m=Qr(c,c.table.core.schema);return c.table.core.query({trans:f,values:!1,limit:c.limit,query:{index:m,range:c.range}})}).then(function(f){return f.result}).then(a);c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,m){d.push(m.primaryKey)}).then(function(){return d}).then(a)},ve.prototype.uniqueKeys=function(a){return this._ctx.unique="unique",this.keys(a)},ve.prototype.firstKey=function(a){return this.limit(1).keys(function(c){return c[0]}).then(a)},ve.prototype.lastKey=function(a){return this.reverse().firstKey(a)},ve.prototype.distinct=function(){var a=this._ctx,a=a.index&&a.table.schema.idxByName[a.index];if(!a||!a.multi)return this;var c={};return _i(this._ctx,function(m){var f=m.primaryKey.toString(),m=g(c,f);return c[f]=!0,!m}),this},ve.prototype.modify=function(a){var c=this,d=this._ctx;return this._write(function(f){var m,b,v;v=typeof a=="function"?a:(m=o(a),b=m.length,function(A){for(var N=!1,z=0;z<b;++z){var U=m[z],K=a[U],W=V(A,U);K instanceof nr?(R(A,U,K.execute(W)),N=!0):W!==K&&(R(A,U,K),N=!0)}return N});var k=d.table.core,_=k.schema.primaryKey,S=_.outbound,T=_.extractKey,P=200,_=c.db._options.modifyChunkSize;_&&(P=typeof _=="object"?_[k.name]||_["*"]||200:_);function M(A,U){var z=U.failures,U=U.numFailures;D+=A-U;for(var K=0,W=o(z);K<W.length;K++){var Z=W[K];E.push(z[Z])}}var E=[],D=0,L=[];return c.clone().primaryKeys().then(function(A){function N(U){var K=Math.min(P,A.length-U);return k.getMany({trans:f,keys:A.slice(U,U+K),cache:"immutable"}).then(function(W){for(var Z=[],G=[],X=S?[]:null,re=[],J=0;J<K;++J){var ae=W[J],fe={value:q(ae),primKey:A[U+J]};v.call(fe,fe.value,fe)!==!1&&(fe.value==null?re.push(A[U+J]):S||ye(T(ae),T(fe.value))===0?(G.push(fe.value),S&&X.push(A[U+J])):(re.push(A[U+J]),Z.push(fe.value)))}return Promise.resolve(0<Z.length&&k.mutate({trans:f,type:"add",values:Z}).then(function(ge){for(var be in ge.failures)re.splice(parseInt(be),1);M(Z.length,ge)})).then(function(){return(0<G.length||z&&typeof a=="object")&&k.mutate({trans:f,type:"put",keys:X,values:G,criteria:z,changeSpec:typeof a!="function"&&a,isAdditionalChunk:0<U}).then(function(ge){return M(G.length,ge)})}).then(function(){return(0<re.length||z&&a===Ei)&&k.mutate({trans:f,type:"delete",keys:re,criteria:z,isAdditionalChunk:0<U}).then(function(ge){return M(re.length,ge)})}).then(function(){return A.length>U+K&&N(U+P)})})}var z=Tn(d)&&d.limit===1/0&&(typeof a!="function"||a===Ei)&&{index:d.index,range:d.range};return N(0).then(function(){if(0<E.length)throw new xn("Error modifying one or more objects",E,D,L);return A.length})})})},ve.prototype.delete=function(){var a=this._ctx,c=a.range;return Tn(a)&&(a.isPrimKey||c.type===3)?this._write(function(d){var f=a.table.core.schema.primaryKey,m=c;return a.table.core.count({trans:d,query:{index:f,range:m}}).then(function(b){return a.table.core.mutate({trans:d,type:"deleteRange",range:m}).then(function(v){var k=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new xn("Could not delete some values",Object.keys(k).map(function(S){return k[S]}),b-v);return b-v})})}):this.modify(Ei)},ve);function ve(){}var Ei=function(a,c){return c.value=null};function Nh(a,c){return a<c?-1:a===c?0:1}function zh(a,c){return c<a?-1:a===c?0:1}function it(a,c,d){return a=a instanceof Ja?new a.Collection(a):a,a._ctx.error=new(d||TypeError)(c),a}function In(a){return new a.Collection(a,function(){return Xa("")}).limit(0)}function Jr(a,c,d,f){var m,b,v,k,S,T,P,_=d.length;if(!d.every(function(D){return typeof D=="string"}))return it(a,Ba);function M(D){m=D==="next"?function(A){return A.toUpperCase()}:function(A){return A.toLowerCase()},b=D==="next"?function(A){return A.toLowerCase()}:function(A){return A.toUpperCase()},v=D==="next"?Nh:zh;var L=d.map(function(A){return{lower:b(A),upper:m(A)}}).sort(function(A,N){return v(A.lower,N.lower)});k=L.map(function(A){return A.upper}),S=L.map(function(A){return A.lower}),P=(T=D)==="next"?"":f}M("next"),a=new a.Collection(a,function(){return Wt(k[0],S[_-1]+f)}),a._ondirectionchange=function(D){M(D)};var E=0;return a._addAlgorithm(function(D,L,A){var N=D.key;if(typeof N!="string")return!1;var z=b(N);if(c(z,S,E))return!0;for(var U=null,K=E;K<_;++K){var W=(function(Z,G,X,re,J,ae){for(var fe=Math.min(Z.length,re.length),ge=-1,be=0;be<fe;++be){var ot=G[be];if(ot!==re[be])return J(Z[be],X[be])<0?Z.substr(0,be)+X[be]+X.substr(be+1):J(Z[be],re[be])<0?Z.substr(0,be)+re[be]+X.substr(be+1):0<=ge?Z.substr(0,ge)+G[ge]+X.substr(ge+1):null;J(Z[be],ot)<0&&(ge=be)}return fe<re.length&&ae==="next"?Z+X.substr(Z.length):fe<Z.length&&ae==="prev"?Z.substr(0,X.length):ge<0?null:Z.substr(0,ge)+re[ge]+X.substr(ge+1)})(N,z,k[K],S[K],v,T);W===null&&U===null?E=K+1:(U===null||0<v(U,W))&&(U=W)}return L(U!==null?function(){D.continue(U+P)}:A),!1}),a}function Wt(a,c,d,f){return{type:2,lower:a,upper:c,lowerOpen:d,upperOpen:f}}function Xa(a){return{type:1,lower:a,upper:a}}var Ja=(Object.defineProperty(ze.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ze.prototype.between=function(a,c,d,f){d=d!==!1,f=f===!0;try{return 0<this._cmp(a,c)||this._cmp(a,c)===0&&(d||f)&&(!d||!f)?In(this):new this.Collection(this,function(){return Wt(a,c,!d,!f)})}catch{return it(this,Mt)}},ze.prototype.equals=function(a){return a==null?it(this,Mt):new this.Collection(this,function(){return Xa(a)})},ze.prototype.above=function(a){return a==null?it(this,Mt):new this.Collection(this,function(){return Wt(a,void 0,!0)})},ze.prototype.aboveOrEqual=function(a){return a==null?it(this,Mt):new this.Collection(this,function(){return Wt(a,void 0,!1)})},ze.prototype.below=function(a){return a==null?it(this,Mt):new this.Collection(this,function(){return Wt(void 0,a,!1,!0)})},ze.prototype.belowOrEqual=function(a){return a==null?it(this,Mt):new this.Collection(this,function(){return Wt(void 0,a)})},ze.prototype.startsWith=function(a){return typeof a!="string"?it(this,Ba):this.between(a,a+an,!0,!0)},ze.prototype.startsWithIgnoreCase=function(a){return a===""?this.startsWith(a):Jr(this,function(c,d){return c.indexOf(d[0])===0},[a],an)},ze.prototype.equalsIgnoreCase=function(a){return Jr(this,function(c,d){return c===d[0]},[a],"")},ze.prototype.anyOfIgnoreCase=function(){var a=Ae.apply(pe,arguments);return a.length===0?In(this):Jr(this,function(c,d){return d.indexOf(c)!==-1},a,"")},ze.prototype.startsWithAnyOfIgnoreCase=function(){var a=Ae.apply(pe,arguments);return a.length===0?In(this):Jr(this,function(c,d){return d.some(function(f){return c.indexOf(f)===0})},a,an)},ze.prototype.anyOf=function(){var a=this,c=Ae.apply(pe,arguments),d=this._cmp;try{c.sort(d)}catch{return it(this,Mt)}if(c.length===0)return In(this);var f=new this.Collection(this,function(){return Wt(c[0],c[c.length-1])});f._ondirectionchange=function(b){d=b==="next"?a._ascending:a._descending,c.sort(d)};var m=0;return f._addAlgorithm(function(b,v,k){for(var S=b.key;0<d(S,c[m]);)if(++m===c.length)return v(k),!1;return d(S,c[m])===0||(v(function(){b.continue(c[m])}),!1)}),f},ze.prototype.notEqual=function(a){return this.inAnyRange([[-1/0,a],[a,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ze.prototype.noneOf=function(){var a=Ae.apply(pe,arguments);if(a.length===0)return new this.Collection(this);try{a.sort(this._ascending)}catch{return it(this,Mt)}var c=a.reduce(function(d,f){return d?d.concat([[d[d.length-1][1],f]]):[[-1/0,f]]},null);return c.push([a[a.length-1],this.db._maxKey]),this.inAnyRange(c,{includeLowers:!1,includeUppers:!1})},ze.prototype.inAnyRange=function(N,c){var d=this,f=this._cmp,m=this._ascending,b=this._descending,v=this._min,k=this._max;if(N.length===0)return In(this);if(!N.every(function(z){return z[0]!==void 0&&z[1]!==void 0&&m(z[0],z[1])<=0}))return it(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",de.InvalidArgument);var S=!c||c.includeLowers!==!1,T=c&&c.includeUppers===!0,P,_=m;function M(z,U){return _(z[0],U[0])}try{(P=N.reduce(function(z,U){for(var K=0,W=z.length;K<W;++K){var Z=z[K];if(f(U[0],Z[1])<0&&0<f(U[1],Z[0])){Z[0]=v(Z[0],U[0]),Z[1]=k(Z[1],U[1]);break}}return K===W&&z.push(U),z},[])).sort(M)}catch{return it(this,Mt)}var E=0,D=T?function(z){return 0<m(z,P[E][1])}:function(z){return 0<=m(z,P[E][1])},L=S?function(z){return 0<b(z,P[E][0])}:function(z){return 0<=b(z,P[E][0])},A=D,N=new this.Collection(this,function(){return Wt(P[0][0],P[P.length-1][1],!S,!T)});return N._ondirectionchange=function(z){_=z==="next"?(A=D,m):(A=L,b),P.sort(M)},N._addAlgorithm(function(z,U,K){for(var W,Z=z.key;A(Z);)if(++E===P.length)return U(K),!1;return!D(W=Z)&&!L(W)||(d._cmp(Z,P[E][1])===0||d._cmp(Z,P[E][0])===0||U(function(){_===m?z.continue(P[E][0]):z.continue(P[E][1])}),!1)}),N},ze.prototype.startsWithAnyOf=function(){var a=Ae.apply(pe,arguments);return a.every(function(c){return typeof c=="string"})?a.length===0?In(this):this.inAnyRange(a.map(function(c){return[c,c+an]})):it(this,"startsWithAnyOf() only works with strings")},ze);function ze(){}function It(a){return Ie(function(c){return rr(c),a(c.target.error),!1})}function rr(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault()}var sr="storagemutated",Ti="x-storagemutated-1",Gt=er(null,sr),Uh=(At.prototype._lock=function(){return Y(!ue.global),++this._reculock,this._reculock!==1||ue.global||(ue.lockOwnerFor=this),this},At.prototype._unlock=function(){if(Y(!ue.global),--this._reculock==0)for(ue.global||(ue.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var a=this._blockedFuncs.shift();try{on(a[1],a[0])}catch{}}return this},At.prototype._locked=function(){return this._reculock&&ue.lockOwnerFor!==this},At.prototype.create=function(a){var c=this;if(!this.mode)return this;var d=this.db.idbdb,f=this.db._state.dbOpenError;if(Y(!this.idbtrans),!a&&!d)switch(f&&f.name){case"DatabaseClosedError":throw new de.DatabaseClosed(f);case"MissingAPIError":throw new de.MissingAPI(f.message,f);default:throw new de.OpenFailed(f)}if(!this.active)throw new de.TransactionInactive;return Y(this._completion._state===null),(a=this.idbtrans=a||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ie(function(m){rr(m),c._reject(a.error)}),a.onabort=Ie(function(m){rr(m),c.active&&c._reject(new de.Abort(a.error)),c.active=!1,c.on("abort").fire(m)}),a.oncomplete=Ie(function(){c.active=!1,c._resolve(),"mutatedParts"in a&&Gt.storagemutated.fire(a.mutatedParts)}),this},At.prototype._promise=function(a,c,d){var f=this;if(a==="readwrite"&&this.mode!=="readwrite")return De(new de.ReadOnly("Transaction is readonly"));if(!this.active)return De(new de.TransactionInactive);if(this._locked())return new se(function(b,v){f._blockedFuncs.push([function(){f._promise(a,c,d).then(b,v)},ue])});if(d)return Ht(function(){var b=new se(function(v,k){f._lock();var S=c(v,k,f);S&&S.then&&S.then(v,k)});return b.finally(function(){return f._unlock()}),b._lib=!0,b});var m=new se(function(b,v){var k=c(b,v,f);k&&k.then&&k.then(b,v)});return m._lib=!0,m},At.prototype._root=function(){return this.parent?this.parent._root():this},At.prototype.waitFor=function(a){var c,d=this._root(),f=se.resolve(a);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return f}):(d._waitingFor=f,d._waitingQueue=[],c=d.idbtrans.objectStore(d.storeNames[0]),(function b(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(c.get(-1/0).onsuccess=b)})());var m=d._waitingFor;return new se(function(b,v){f.then(function(k){return d._waitingQueue.push(Ie(b.bind(null,k)))},function(k){return d._waitingQueue.push(Ie(v.bind(null,k)))}).finally(function(){d._waitingFor===m&&(d._waitingFor=null)})})},At.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new de.Abort))},At.prototype.table=function(a){var c=this._memoizedTables||(this._memoizedTables={});if(g(c,a))return c[a];var d=this.schema[a];if(!d)throw new de.NotFound("Table "+a+" not part of transaction");return d=new this.db.Table(a,d,this),d.core=this.db.core.table(a),c[a]=d},At);function At(){}function Ii(a,c,d,f,m,b,v){return{name:a,keyPath:c,unique:d,multi:f,auto:m,compound:b,src:(d&&!v?"&":"")+(f?"*":"")+(m?"++":"")+Za(c)}}function Za(a){return typeof a=="string"?a:a?"["+[].join.call(a,"+")+"]":""}function Ai(a,c,d){return{name:a,primKey:c,indexes:d,mappedClass:null,idxByName:(f=function(m){return[m.name,m]},d.reduce(function(m,b,v){return v=f(b,v),v&&(m[v[0]]=v[1]),m},{}))};var f}var ir=function(a){try{return a.only([[]]),ir=function(){return[[]]},[[]]}catch{return ir=function(){return an},an}};function Ri(a){return a==null?function(){}:typeof a=="string"?(c=a).split(".").length===1?function(d){return d[c]}:function(d){return V(d,c)}:function(d){return V(d,a)};var c}function el(a){return[].slice.call(a)}var Fh=0;function or(a){return a==null?":id":typeof a=="string"?a:"[".concat(a.join("+"),"]")}function Bh(a,c,S){function f(A){if(A.type===3)return null;if(A.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=A.lower,D=A.upper,L=A.lowerOpen,A=A.upperOpen;return E===void 0?D===void 0?null:c.upperBound(D,!!A):D===void 0?c.lowerBound(E,!!L):c.bound(E,D,!!L,!!A)}function m(M){var E,D=M.name;return{name:D,schema:M,mutate:function(L){var A=L.trans,N=L.type,z=L.keys,U=L.values,K=L.range;return new Promise(function(W,Z){W=Ie(W);var G=A.objectStore(D),X=G.keyPath==null,re=N==="put"||N==="add";if(!re&&N!=="delete"&&N!=="deleteRange")throw new Error("Invalid operation type: "+N);var J,ae=(z||U||{length:1}).length;if(z&&U&&z.length!==U.length)throw new Error("Given keys array must have same length as given values array.");if(ae===0)return W({numFailures:0,failures:{},results:[],lastResult:void 0});function fe(Qe){++ot,rr(Qe)}var ge=[],be=[],ot=0;if(N==="deleteRange"){if(K.type===4)return W({numFailures:ot,failures:be,results:[],lastResult:void 0});K.type===3?ge.push(J=G.clear()):ge.push(J=G.delete(f(K)))}else{var X=re?X?[U,z]:[U,null]:[z,null],he=X[0],We=X[1];if(re)for(var Ge=0;Ge<ae;++Ge)ge.push(J=We&&We[Ge]!==void 0?G[N](he[Ge],We[Ge]):G[N](he[Ge])),J.onerror=fe;else for(Ge=0;Ge<ae;++Ge)ge.push(J=G[N](he[Ge])),J.onerror=fe}function ds(Qe){Qe=Qe.target.result,ge.forEach(function(dn,Yi){return dn.error!=null&&(be[Yi]=dn.error)}),W({numFailures:ot,failures:be,results:N==="delete"?z:ge.map(function(dn){return dn.result}),lastResult:Qe})}J.onerror=function(Qe){fe(Qe),ds(Qe)},J.onsuccess=ds})},getMany:function(L){var A=L.trans,N=L.keys;return new Promise(function(z,U){z=Ie(z);for(var K,W=A.objectStore(D),Z=N.length,G=new Array(Z),X=0,re=0,J=function(ge){ge=ge.target,G[ge._pos]=ge.result,++re===X&&z(G)},ae=It(U),fe=0;fe<Z;++fe)N[fe]!=null&&((K=W.get(N[fe]))._pos=fe,K.onsuccess=J,K.onerror=ae,++X);X===0&&z(G)})},get:function(L){var A=L.trans,N=L.key;return new Promise(function(z,U){z=Ie(z);var K=A.objectStore(D).get(N);K.onsuccess=function(W){return z(W.target.result)},K.onerror=It(U)})},query:(E=T,function(L){return new Promise(function(A,N){A=Ie(A);var z,U,K,X=L.trans,W=L.values,Z=L.limit,J=L.query,G=Z===1/0?void 0:Z,re=J.index,J=J.range,X=X.objectStore(D),re=re.isPrimaryKey?X:X.index(re.name),J=f(J);if(Z===0)return A({result:[]});E?((G=W?re.getAll(J,G):re.getAllKeys(J,G)).onsuccess=function(ae){return A({result:ae.target.result})},G.onerror=It(N)):(z=0,U=!W&&"openKeyCursor"in re?re.openKeyCursor(J):re.openCursor(J),K=[],U.onsuccess=function(ae){var fe=U.result;return fe?(K.push(W?fe.value:fe.primaryKey),++z===Z?A({result:K}):void fe.continue()):A({result:K})},U.onerror=It(N))})}),openCursor:function(L){var A=L.trans,N=L.values,z=L.query,U=L.reverse,K=L.unique;return new Promise(function(W,Z){W=Ie(W);var re=z.index,G=z.range,X=A.objectStore(D),X=re.isPrimaryKey?X:X.index(re.name),re=U?K?"prevunique":"prev":K?"nextunique":"next",J=!N&&"openKeyCursor"in X?X.openKeyCursor(f(G),re):X.openCursor(f(G),re);J.onerror=It(Z),J.onsuccess=Ie(function(ae){var fe,ge,be,ot,he=J.result;he?(he.___id=++Fh,he.done=!1,fe=he.continue.bind(he),ge=(ge=he.continuePrimaryKey)&&ge.bind(he),be=he.advance.bind(he),ot=function(){throw new Error("Cursor not stopped")},he.trans=A,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Ie(Z),he.next=function(){var We=this,Ge=1;return this.start(function(){return Ge--?We.continue():We.stop()}).then(function(){return We})},he.start=function(We){function Ge(){if(J.result)try{We()}catch(Qe){he.fail(Qe)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var ds=new Promise(function(Qe,dn){Qe=Ie(Qe),J.onerror=It(dn),he.fail=dn,he.stop=function(Yi){he.stop=he.continue=he.continuePrimaryKey=he.advance=ot,Qe(Yi)}});return J.onsuccess=Ie(function(Qe){J.onsuccess=Ge,Ge()}),he.continue=fe,he.continuePrimaryKey=ge,he.advance=be,Ge(),ds},W(he)):W(null)},Z)})},count:function(L){var A=L.query,N=L.trans,z=A.index,U=A.range;return new Promise(function(K,W){var Z=N.objectStore(D),G=z.isPrimaryKey?Z:Z.index(z.name),Z=f(U),G=Z?G.count(Z):G.count();G.onsuccess=Ie(function(X){return K(X.target.result)}),G.onerror=It(W)})}}}var b,v,k,P=(v=S,k=el((b=a).objectStoreNames),{schema:{name:b.name,tables:k.map(function(M){return v.objectStore(M)}).map(function(M){var E=M.keyPath,A=M.autoIncrement,D=l(E),L={},A={name:M.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:D,keyPath:E,autoIncrement:A,unique:!0,extractKey:Ri(E)},indexes:el(M.indexNames).map(function(N){return M.index(N)}).map(function(K){var z=K.name,U=K.unique,W=K.multiEntry,K=K.keyPath,W={name:z,compound:l(K),keyPath:K,unique:U,multiEntry:W,extractKey:Ri(K)};return L[or(K)]=W}),getIndexByKeyPath:function(N){return L[or(N)]}};return L[":id"]=A.primaryKey,E!=null&&(L[or(E)]=A.primaryKey),A})},hasGetAll:0<k.length&&"getAll"in v.objectStore(k[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=P.schema,T=P.hasGetAll,P=S.tables.map(m),_={};return P.forEach(function(M){return _[M.name]=M}),{stack:"dbcore",transaction:a.transaction.bind(a),table:function(M){if(!_[M])throw new Error("Table '".concat(M,"' not found"));return _[M]},MIN_KEY:-1/0,MAX_KEY:ir(c),schema:S}}function qh(a,c,d,f){var m=d.IDBKeyRange;return d.indexedDB,{dbcore:(f=Bh(c,m,f),a.dbcore.reduce(function(b,v){return v=v.create,r(r({},b),v(b))},f))}}function Zr(a,f){var d=f.db,f=qh(a._middlewares,d,a._deps,f);a.core=f.dbcore,a.tables.forEach(function(m){var b=m.name;a.core.schema.tables.some(function(v){return v.name===b})&&(m.core=a.core.table(b),a[b]instanceof a.Table&&(a[b].core=m.core))})}function es(a,c,d,f){d.forEach(function(m){var b=f[m];c.forEach(function(v){var k=(function S(T,P){return I(T,P)||(T=h(T))&&S(T,P)})(v,m);(!k||"value"in k&&k.value===void 0)&&(v===a.Transaction.prototype||v instanceof a.Transaction?$(v,m,{get:function(){return this.table(m)},set:function(S){y(this,m,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):v[m]=new a.Table(m,b))})})}function Oi(a,c){c.forEach(function(d){for(var f in d)d[f]instanceof a.Table&&delete d[f]})}function Hh(a,c){return a._cfg.version-c._cfg.version}function Kh(a,c,d,f){var m=a._dbSchema;d.objectStoreNames.contains("$meta")&&!m.$meta&&(m.$meta=Ai("$meta",nl("")[0],[]),a._storeNames.push("$meta"));var b=a._createTransaction("readwrite",a._storeNames,m);b.create(d),b._completion.catch(f);var v=b._reject.bind(b),k=ue.transless||ue;Ht(function(){return ue.trans=b,ue.transless=k,c!==0?(Zr(a,d),T=c,((S=b).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(P){return P??T}):se.resolve(T)).then(function(P){return M=P,E=b,D=d,L=[],P=(_=a)._versions,A=_._dbSchema=ns(0,_.idbdb,D),(P=P.filter(function(N){return N._cfg.version>=M})).length!==0?(P.forEach(function(N){L.push(function(){var z=A,U=N._cfg.dbschema;rs(_,z,D),rs(_,U,D),A=_._dbSchema=U;var K=Di(z,U);K.add.forEach(function(re){Pi(D,re[0],re[1].primKey,re[1].indexes)}),K.change.forEach(function(re){if(re.recreate)throw new de.Upgrade("Not yet support for changing primary key");var J=D.objectStore(re.name);re.add.forEach(function(ae){return ts(J,ae)}),re.change.forEach(function(ae){J.deleteIndex(ae.name),ts(J,ae)}),re.del.forEach(function(ae){return J.deleteIndex(ae)})});var W=N._cfg.contentUpgrade;if(W&&N._cfg.version>M){Zr(_,D),E._memoizedTables={};var Z=H(U);K.del.forEach(function(re){Z[re]=z[re]}),Oi(_,[_.Transaction.prototype]),es(_,[_.Transaction.prototype],o(Z),Z),E.schema=Z;var G,X=Ye(W);return X&&Sn(),K=se.follow(function(){var re;(G=W(E))&&X&&(re=Kt.bind(null,null),G.then(re,re))}),G&&typeof G.then=="function"?se.resolve(G):K.then(function(){return G})}}),L.push(function(z){var U,K,W=N._cfg.dbschema;U=W,K=z,[].slice.call(K.db.objectStoreNames).forEach(function(Z){return U[Z]==null&&K.db.deleteObjectStore(Z)}),Oi(_,[_.Transaction.prototype]),es(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),E.schema=_._dbSchema}),L.push(function(z){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===N._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(U){return U!=="$meta"})):z.objectStore("$meta").put(N._cfg.version,"version"))})}),(function N(){return L.length?se.resolve(L.shift()(E.idbtrans)).then(N):se.resolve()})().then(function(){tl(A,D)})):se.resolve();var _,M,E,D,L,A}).catch(v)):(o(m).forEach(function(P){Pi(d,P,m[P].primKey,m[P].indexes)}),Zr(a,d),void se.follow(function(){return a.on.populate.fire(b)}).catch(v));var S,T})}function Vh(a,c){tl(a._dbSchema,c),c.db.version%10!=0||c.objectStoreNames.contains("$meta")||c.db.createObjectStore("$meta").add(Math.ceil(c.db.version/10-1),"version");var d=ns(0,a.idbdb,c);rs(a,a._dbSchema,c);for(var f=0,m=Di(d,a._dbSchema).change;f<m.length;f++){var b=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var k=c.objectStore(v.name);v.add.forEach(function(S){Tt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(S.src)),ts(k,S)})})(m[f]);if(typeof b=="object")return b.value}}function Di(a,c){var d,f={del:[],add:[],change:[]};for(d in a)c[d]||f.del.push(d);for(d in c){var m=a[d],b=c[d];if(m){var v={name:d,def:b,recreate:!1,del:[],add:[],change:[]};if(""+(m.primKey.keyPath||"")!=""+(b.primKey.keyPath||"")||m.primKey.auto!==b.primKey.auto)v.recreate=!0,f.change.push(v);else{var k=m.idxByName,S=b.idxByName,T=void 0;for(T in k)S[T]||v.del.push(T);for(T in S){var P=k[T],_=S[T];P?P.src!==_.src&&v.change.push(_):v.add.push(_)}(0<v.del.length||0<v.add.length||0<v.change.length)&&f.change.push(v)}}else f.add.push([d,b])}return f}function Pi(a,c,d,f){var m=a.db.createObjectStore(c,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return f.forEach(function(b){return ts(m,b)}),m}function tl(a,c){o(a).forEach(function(d){c.db.objectStoreNames.contains(d)||(Tt&&console.debug("Dexie: Creating missing table",d),Pi(c,d,a[d].primKey,a[d].indexes))})}function ts(a,c){a.createIndex(c.name,c.keyPath,{unique:c.unique,multiEntry:c.multi})}function ns(a,c,d){var f={};return j(c.objectStoreNames,0).forEach(function(m){for(var b=d.objectStore(m),v=Ii(Za(T=b.keyPath),T||"",!0,!1,!!b.autoIncrement,T&&typeof T!="string",!0),k=[],S=0;S<b.indexNames.length;++S){var P=b.index(b.indexNames[S]),T=P.keyPath,P=Ii(P.name,T,!!P.unique,!!P.multiEntry,!1,T&&typeof T!="string",!1);k.push(P)}f[m]=Ai(m,v,k)}),f}function rs(a,c,d){for(var f=d.db.objectStoreNames,m=0;m<f.length;++m){var b=f[m],v=d.objectStore(b);a._hasGetAll="getAll"in v;for(var k=0;k<v.indexNames.length;++k){var S=v.indexNames[k],T=v.index(S).keyPath,P=typeof T=="string"?T:"["+j(T).join("+")+"]";!c[b]||(T=c[b].idxByName[P])&&(T.name=S,delete c[b].idxByName[P],c[b].idxByName[S]=T)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&i.WorkerGlobalScope&&i instanceof i.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(a._hasGetAll=!1)}function nl(a){return a.split(",").map(function(c,d){var f=(c=c.trim()).replace(/([&*]|\+\+)/g,""),m=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return Ii(f,m||null,/\&/.test(c),/\*/.test(c),/\+\+/.test(c),l(m),d===0)})}var Wh=(ss.prototype._parseStoresSpec=function(a,c){o(a).forEach(function(d){if(a[d]!==null){var f=nl(a[d]),m=f.shift();if(m.unique=!0,m.multi)throw new de.Schema("Primary key cannot be multi-valued");f.forEach(function(b){if(b.auto)throw new de.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new de.Schema("Index must have a name and cannot be an empty string")}),c[d]=Ai(d,m,f)}})},ss.prototype.stores=function(d){var c=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=c._versions,f={},m={};return d.forEach(function(b){u(f,b._cfg.storesSource),m=b._cfg.dbschema={},b._parseStoresSpec(f,m)}),c._dbSchema=m,Oi(c,[c._allTables,c,c.Transaction.prototype]),es(c,[c._allTables,c,c.Transaction.prototype,this._cfg.tables],o(m),m),c._storeNames=o(m),this},ss.prototype.upgrade=function(a){return this._cfg.contentUpgrade=pi(this._cfg.contentUpgrade||xe,a),this},ss);function ss(){}function Li(a,c){var d=a._dbNamesDB;return d||(d=a._dbNamesDB=new Nt(Gr,{addons:[],indexedDB:a,IDBKeyRange:c})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function Mi(a){return a&&typeof a.databases=="function"}function ji(a){return Ht(function(){return ue.letThrough=!0,a()})}function Ni(a){return!("from"in a)}var Ve=function(a,c){if(!this){var d=new Ve;return a&&"d"in a&&u(d,a),d}u(this,arguments.length?{d:1,from:a,to:1<arguments.length?c:a}:{d:0})};function ar(a,c,d){var f=ye(c,d);if(!isNaN(f)){if(0<f)throw RangeError();if(Ni(a))return u(a,{from:c,to:d,d:1});var m=a.l,f=a.r;if(ye(d,a.from)<0)return m?ar(m,c,d):a.l={from:c,to:d,d:1,l:null,r:null},sl(a);if(0<ye(c,a.to))return f?ar(f,c,d):a.r={from:c,to:d,d:1,l:null,r:null},sl(a);ye(c,a.from)<0&&(a.from=c,a.l=null,a.d=f?f.d+1:1),0<ye(d,a.to)&&(a.to=d,a.r=null,a.d=a.l?a.l.d+1:1),d=!a.r,m&&!a.l&&lr(a,m),f&&d&&lr(a,f)}}function lr(a,c){Ni(c)||(function d(f,S){var b=S.from,v=S.to,k=S.l,S=S.r;ar(f,b,v),k&&d(f,k),S&&d(f,S)})(a,c)}function rl(a,c){var d=is(c),f=d.next();if(f.done)return!1;for(var m=f.value,b=is(a),v=b.next(m.from),k=v.value;!f.done&&!v.done;){if(ye(k.from,m.to)<=0&&0<=ye(k.to,m.from))return!0;ye(m.from,k.from)<0?m=(f=d.next(k.from)).value:k=(v=b.next(m.from)).value}return!1}function is(a){var c=Ni(a)?null:{s:0,n:a};return{next:function(d){for(var f=0<arguments.length;c;)switch(c.s){case 0:if(c.s=1,f)for(;c.n.l&&ye(d,c.n.from)<0;)c={up:c,n:c.n.l,s:1};else for(;c.n.l;)c={up:c,n:c.n.l,s:1};case 1:if(c.s=2,!f||ye(d,c.n.to)<=0)return{value:c.n,done:!1};case 2:if(c.n.r){c.s=3,c={up:c,n:c.n.r,s:0};continue}case 3:c=c.up}return{done:!0}}}}function sl(a){var c,d,f=(((c=a.r)===null||c===void 0?void 0:c.d)||0)-(((d=a.l)===null||d===void 0?void 0:d.d)||0),m=1<f?"r":f<-1?"l":"";m&&(c=m=="r"?"l":"r",d=r({},a),f=a[m],a.from=f.from,a.to=f.to,a[m]=f[m],d[m]=f[c],(a[c]=d).d=il(d)),a.d=il(a)}function il(d){var c=d.r,d=d.l;return(c?d?Math.max(c.d,d.d):c.d:d?d.d:0)+1}function os(a,c){return o(c).forEach(function(d){a[d]?lr(a[d],c[d]):a[d]=(function f(m){var b,v,k={};for(b in m)g(m,b)&&(v=m[b],k[b]=!v||typeof v!="object"||ie.has(v.constructor)?v:f(v));return k})(c[d])}),a}function zi(a,c){return a.all||c.all||Object.keys(a).some(function(d){return c[d]&&rl(c[d],a[d])})}w(Ve.prototype,((yt={add:function(a){return lr(this,a),this},addKey:function(a){return ar(this,a,a),this},addKeys:function(a){var c=this;return a.forEach(function(d){return ar(c,d,d)}),this},hasKey:function(a){var c=is(this).next(a).value;return c&&ye(c.from,a)<=0&&0<=ye(c.to,a)}})[_e]=function(){return is(this)},yt));var cn={},Ui={},Fi=!1;function as(a){os(Ui,a),Fi||(Fi=!0,setTimeout(function(){Fi=!1,Bi(Ui,!(Ui={}))},0))}function Bi(a,c){c===void 0&&(c=!1);var d=new Set;if(a.all)for(var f=0,m=Object.values(cn);f<m.length;f++)ol(v=m[f],a,d,c);else for(var b in a){var v,k=/^idb\:\/\/(.*)\/(.*)\//.exec(b);k&&(b=k[1],k=k[2],(v=cn["idb://".concat(b,"/").concat(k)])&&ol(v,a,d,c))}d.forEach(function(S){return S()})}function ol(a,c,d,f){for(var m=[],b=0,v=Object.entries(a.queries.query);b<v.length;b++){for(var k=v[b],S=k[0],T=[],P=0,_=k[1];P<_.length;P++){var M=_[P];zi(c,M.obsSet)?M.subscribers.forEach(function(A){return d.add(A)}):f&&T.push(M)}f&&m.push([S,T])}if(f)for(var E=0,D=m;E<D.length;E++){var L=D[E],S=L[0],T=L[1];a.queries.query[S]=T}}function Gh(a){var c=a._state,d=a._deps.indexedDB;if(c.isBeingOpened||a.idbdb)return c.dbReadyPromise.then(function(){return c.dbOpenError?De(c.dbOpenError):a});c.isBeingOpened=!0,c.dbOpenError=null,c.openComplete=!1;var f=c.openCanceller,m=Math.round(10*a.verno),b=!1;function v(){if(c.openCanceller!==f)throw new de.DatabaseClosed("db.open() was cancelled")}function k(){return new se(function(M,E){if(v(),!d)throw new de.MissingAPI;var D=a.name,L=c.autoSchema||!m?d.open(D):d.open(D,m);if(!L)throw new de.MissingAPI;L.onerror=It(E),L.onblocked=Ie(a._fireOnBlocked),L.onupgradeneeded=Ie(function(A){var N;P=L.transaction,c.autoSchema&&!a._options.allowEmptyDB?(L.onerror=rr,P.abort(),L.result.close(),(N=d.deleteDatabase(D)).onsuccess=N.onerror=Ie(function(){E(new de.NoSuchDatabase("Database ".concat(D," doesnt exist")))})):(P.onerror=It(E),A=A.oldVersion>Math.pow(2,62)?0:A.oldVersion,_=A<1,a.idbdb=L.result,b&&Vh(a,P),Kh(a,A/10,P,E))},E),L.onsuccess=Ie(function(){P=null;var A,N,z,U,K,W=a.idbdb=L.result,Z=j(W.objectStoreNames);if(0<Z.length)try{var G=W.transaction((U=Z).length===1?U[0]:U,"readonly");if(c.autoSchema)N=W,z=G,(A=a).verno=N.version/10,z=A._dbSchema=ns(0,N,z),A._storeNames=j(N.objectStoreNames,0),es(A,[A._allTables],o(z),z);else if(rs(a,a._dbSchema,G),((K=Di(ns(0,(K=a).idbdb,G),K._dbSchema)).add.length||K.change.some(function(X){return X.add.length||X.change.length}))&&!b)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),W.close(),m=W.version+1,b=!0,M(k());Zr(a,G)}catch{}En.push(a),W.onversionchange=Ie(function(X){c.vcFired=!0,a.on("versionchange").fire(X)}),W.onclose=Ie(function(X){a.on("close").fire(X)}),_&&(K=a._deps,G=D,W=K.indexedDB,K=K.IDBKeyRange,Mi(W)||G===Gr||Li(W,K).put({name:G}).catch(xe)),M()},E)}).catch(function(M){switch(M?.name){case"UnknownError":if(0<c.PR1398_maxLoop)return c.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),k();break;case"VersionError":if(0<m)return m=0,k()}return se.reject(M)})}var S,T=c.dbReadyResolve,P=null,_=!1;return se.race([f,(typeof navigator>"u"?se.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(M){function E(){return indexedDB.databases().finally(M)}S=setInterval(E,100),E()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(k)]).then(function(){return v(),c.onReadyBeingFired=[],se.resolve(ji(function(){return a.on.ready.fire(a.vip)})).then(function M(){if(0<c.onReadyBeingFired.length){var E=c.onReadyBeingFired.reduce(pi,xe);return c.onReadyBeingFired=[],se.resolve(ji(function(){return E(a.vip)})).then(M)}})}).finally(function(){c.openCanceller===f&&(c.onReadyBeingFired=null,c.isBeingOpened=!1)}).catch(function(M){c.dbOpenError=M;try{P&&P.abort()}catch{}return f===c.openCanceller&&a._close(),De(M)}).finally(function(){c.openComplete=!0,T()}).then(function(){var M;return _&&(M={},a.tables.forEach(function(E){E.schema.indexes.forEach(function(D){D.name&&(M["idb://".concat(a.name,"/").concat(E.name,"/").concat(D.name)]=new Ve(-1/0,[[[]]]))}),M["idb://".concat(a.name,"/").concat(E.name,"/")]=M["idb://".concat(a.name,"/").concat(E.name,"/:dels")]=new Ve(-1/0,[[[]]])}),Gt(sr).fire(M),Bi(M,!0)),a})}function qi(a){function c(b){return a.next(b)}var d=m(c),f=m(function(b){return a.throw(b)});function m(b){return function(S){var k=b(S),S=k.value;return k.done?S:S&&typeof S.then=="function"?S.then(d,f):l(S)?Promise.all(S).then(d,f):d(S)}}return m(c)()}function ls(a,c,d){for(var f=l(a)?a.slice():[a],m=0;m<d;++m)f.push(c);return f}var Yh={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema,m={},b=[];function v(_,M,E){var D=or(_),L=m[D]=m[D]||[],A=_==null?0:typeof _=="string"?1:_.length,N=0<M,N=r(r({},E),{name:N?"".concat(D,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:N,keyTail:M,keyLength:A,extractKey:Ri(_),unique:!N&&E.unique});return L.push(N),N.isPrimaryKey||b.push(N),1<A&&v(A===2?_[0]:_.slice(0,A-1),M+1,E),L.sort(function(z,U){return z.keyTail-U.keyTail}),N}c=v(f.primaryKey.keyPath,0,f.primaryKey),m[":id"]=[c];for(var k=0,S=f.indexes;k<S.length;k++){var T=S[k];v(T.keyPath,0,T)}function P(_){var M,E=_.query.index;return E.isVirtual?r(r({},_),{query:{index:E.lowLevelIndex,range:(M=_.query.range,E=E.keyTail,{type:M.type===1?2:M.type,lower:ls(M.lower,M.lowerOpen?a.MAX_KEY:a.MIN_KEY,E),lowerOpen:!0,upper:ls(M.upper,M.upperOpen?a.MIN_KEY:a.MAX_KEY,E),upperOpen:!0})}}):_}return r(r({},d),{schema:r(r({},f),{primaryKey:c,indexes:b,getIndexByKeyPath:function(_){return(_=m[or(_)])&&_[0]}}),count:function(_){return d.count(P(_))},query:function(_){return d.query(P(_))},openCursor:function(_){var M=_.query.index,E=M.keyTail,D=M.isVirtual,L=M.keyLength;return D?d.openCursor(P(_)).then(function(N){return N&&A(N)}):d.openCursor(_);function A(N){return Object.create(N,{continue:{value:function(z){z!=null?N.continue(ls(z,_.reverse?a.MAX_KEY:a.MIN_KEY,E)):_.unique?N.continue(N.key.slice(0,L).concat(_.reverse?a.MIN_KEY:a.MAX_KEY,E)):N.continue()}},continuePrimaryKey:{value:function(z,U){N.continuePrimaryKey(ls(z,a.MAX_KEY,E),U)}},primaryKey:{get:function(){return N.primaryKey}},key:{get:function(){var z=N.key;return L===1?z[0]:z.slice(0,L)}},value:{get:function(){return N.value}}})}}})}})}};function Hi(a,c,d,f){return d=d||{},f=f||"",o(a).forEach(function(m){var b,v,k;g(c,m)?(b=a[m],v=c[m],typeof b=="object"&&typeof v=="object"&&b&&v?(k=we(b))!==we(v)?d[f+m]=c[m]:k==="Object"?Hi(b,v,d,f+m+"."):b!==v&&(d[f+m]=c[m]):b!==v&&(d[f+m]=c[m])):d[f+m]=void 0}),o(c).forEach(function(m){g(a,m)||(d[f+m]=c[m])}),d}function Ki(a,c){return c.type==="delete"?c.keys:c.keys||c.values.map(a.extractKey)}var Qh={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema.primaryKey;return r(r({},d),{mutate:function(m){var b=ue.trans,v=b.table(c).hook,k=v.deleting,S=v.creating,T=v.updating;switch(m.type){case"add":if(S.fire===xe)break;return b._promise("readwrite",function(){return P(m)},!0);case"put":if(S.fire===xe&&T.fire===xe)break;return b._promise("readwrite",function(){return P(m)},!0);case"delete":if(k.fire===xe)break;return b._promise("readwrite",function(){return P(m)},!0);case"deleteRange":if(k.fire===xe)break;return b._promise("readwrite",function(){return(function _(M,E,D){return d.query({trans:M,values:!1,query:{index:f,range:E},limit:D}).then(function(L){var A=L.result;return P({type:"delete",keys:A,trans:M}).then(function(N){return 0<N.numFailures?Promise.reject(N.failures[0]):A.length<D?{failures:[],numFailures:0,lastResult:void 0}:_(M,r(r({},E),{lower:A[A.length-1],lowerOpen:!0}),D)})})})(m.trans,m.range,1e4)},!0)}return d.mutate(m);function P(_){var M,E,D,L=ue.trans,A=_.keys||Ki(f,_);if(!A)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:A}):r({},_)).type!=="delete"&&(_.values=s([],_.values)),_.keys&&(_.keys=s([],_.keys)),M=d,D=A,((E=_).type==="add"?Promise.resolve([]):M.getMany({trans:E.trans,keys:D,cache:"immutable"})).then(function(N){var z=A.map(function(U,K){var W,Z,G,X=N[K],re={onerror:null,onsuccess:null};return _.type==="delete"?k.fire.call(re,U,X,L):_.type==="add"||X===void 0?(W=S.fire.call(re,U,_.values[K],L),U==null&&W!=null&&(_.keys[K]=U=W,f.outbound||R(_.values[K],f.keyPath,U))):(W=Hi(X,_.values[K]),(Z=T.fire.call(re,W,U,X,L))&&(G=_.values[K],Object.keys(Z).forEach(function(J){g(G,J)?G[J]=Z[J]:R(G,J,Z[J])}))),re});return d.mutate(_).then(function(U){for(var K=U.failures,W=U.results,Z=U.numFailures,U=U.lastResult,G=0;G<A.length;++G){var X=(W||A)[G],re=z[G];X==null?re.onerror&&re.onerror(K[G]):re.onsuccess&&re.onsuccess(_.type==="put"&&N[G]?_.values[G]:X)}return{failures:K,results:W,numFailures:Z,lastResult:U}}).catch(function(U){return z.forEach(function(K){return K.onerror&&K.onerror(U)}),Promise.reject(U)})})}}})}})}};function al(a,c,d){try{if(!c||c.keys.length<a.length)return null;for(var f=[],m=0,b=0;m<c.keys.length&&b<a.length;++m)ye(c.keys[m],a[b])===0&&(f.push(d?q(c.values[m]):c.values[m]),++b);return f.length===a.length?f:null}catch{return null}}var Xh={stack:"dbcore",level:-1,create:function(a){return{table:function(c){var d=a.table(c);return r(r({},d),{getMany:function(f){if(!f.cache)return d.getMany(f);var m=al(f.keys,f.trans._cache,f.cache==="clone");return m?se.resolve(m):d.getMany(f).then(function(b){return f.trans._cache={keys:f.keys,values:f.cache==="clone"?q(b):b},b})},mutate:function(f){return f.type!=="add"&&(f.trans._cache=null),d.mutate(f)}})}}}};function ll(a,c){return a.trans.mode==="readonly"&&!!a.subscr&&!a.trans.explicit&&a.trans.db._options.cache!=="disabled"&&!c.schema.primaryKey.outbound}function cl(a,c){switch(a){case"query":return c.values&&!c.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Jh={stack:"dbcore",level:0,name:"Observability",create:function(a){var c=a.schema.name,d=new Ve(a.MIN_KEY,a.MAX_KEY);return r(r({},a),{transaction:function(f,m,b){if(ue.subscr&&m!=="readonly")throw new de.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ue.querier));return a.transaction(f,m,b)},table:function(f){var m=a.table(f),b=m.schema,v=b.primaryKey,_=b.indexes,k=v.extractKey,S=v.outbound,T=v.autoIncrement&&_.filter(function(E){return E.compound&&E.keyPath.includes(v.keyPath)}),P=r(r({},m),{mutate:function(E){function D(J){return J="idb://".concat(c,"/").concat(f,"/").concat(J),U[J]||(U[J]=new Ve)}var L,A,N,z=E.trans,U=E.mutatedParts||(E.mutatedParts={}),K=D(""),W=D(":dels"),Z=E.type,re=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Ki(v,E).filter(function(J){return J}),E.values]:[],G=re[0],X=re[1],re=E.trans._cache;return l(G)?(K.addKeys(G),(re=Z==="delete"||G.length===X.length?al(G,re):null)||W.addKeys(G),(re||X)&&(L=D,A=re,N=X,b.indexes.forEach(function(J){var ae=L(J.name||"");function fe(be){return be!=null?J.extractKey(be):null}function ge(be){return J.multiEntry&&l(be)?be.forEach(function(ot){return ae.addKey(ot)}):ae.addKey(be)}(A||N).forEach(function(be,We){var he=A&&fe(A[We]),We=N&&fe(N[We]);ye(he,We)!==0&&(he!=null&&ge(he),We!=null&&ge(We))})}))):G?(X={from:(X=G.lower)!==null&&X!==void 0?X:a.MIN_KEY,to:(X=G.upper)!==null&&X!==void 0?X:a.MAX_KEY},W.add(X),K.add(X)):(K.add(d),W.add(d),b.indexes.forEach(function(J){return D(J.name).add(d)})),m.mutate(E).then(function(J){return!G||E.type!=="add"&&E.type!=="put"||(K.addKeys(J.results),T&&T.forEach(function(ae){for(var fe=E.values.map(function(he){return ae.extractKey(he)}),ge=ae.keyPath.findIndex(function(he){return he===v.keyPath}),be=0,ot=J.results.length;be<ot;++be)fe[be][ge]=J.results[be];D(ae.name).addKeys(fe)})),z.mutatedParts=os(z.mutatedParts||{},U),J})}}),_=function(D){var L=D.query,D=L.index,L=L.range;return[D,new Ve((D=L.lower)!==null&&D!==void 0?D:a.MIN_KEY,(L=L.upper)!==null&&L!==void 0?L:a.MAX_KEY)]},M={get:function(E){return[v,new Ve(E.key)]},getMany:function(E){return[v,new Ve().addKeys(E.keys)]},count:_,query:_,openCursor:_};return o(M).forEach(function(E){P[E]=function(D){var L=ue.subscr,A=!!L,N=ll(ue,m)&&cl(E,D)?D.obsSet={}:L;if(A){var z=function(X){return X="idb://".concat(c,"/").concat(f,"/").concat(X),N[X]||(N[X]=new Ve)},U=z(""),K=z(":dels"),L=M[E](D),A=L[0],L=L[1];if((E==="query"&&A.isPrimaryKey&&!D.values?K:z(A.name||"")).add(L),!A.isPrimaryKey){if(E!=="count"){var W=E==="query"&&S&&D.values&&m.query(r(r({},D),{values:!1}));return m[E].apply(this,arguments).then(function(X){if(E==="query"){if(S&&D.values)return W.then(function(fe){return fe=fe.result,U.addKeys(fe),X});var re=D.values?X.result.map(k):X.result;(D.values?U:K).addKeys(re)}else if(E==="openCursor"){var J=X,ae=D.values;return J&&Object.create(J,{key:{get:function(){return K.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var fe=J.primaryKey;return K.addKey(fe),fe}},value:{get:function(){return ae&&U.addKey(J.primaryKey),J.value}}})}return X})}K.add(d)}}return m[E].apply(this,arguments)}}),P}})}};function ul(a,c,d){if(d.numFailures===0)return c;if(c.type==="deleteRange")return null;var f=c.keys?c.keys.length:"values"in c&&c.values?c.values.length:1;return d.numFailures===f?null:(c=r({},c),l(c.keys)&&(c.keys=c.keys.filter(function(m,b){return!(b in d.failures)})),"values"in c&&l(c.values)&&(c.values=c.values.filter(function(m,b){return!(b in d.failures)})),c)}function Vi(a,c){return d=a,((f=c).lower===void 0||(f.lowerOpen?0<ye(d,f.lower):0<=ye(d,f.lower)))&&(a=a,(c=c).upper===void 0||(c.upperOpen?ye(a,c.upper)<0:ye(a,c.upper)<=0));var d,f}function dl(a,c,M,f,m,b){if(!M||M.length===0)return a;var v=c.query.index,k=v.multiEntry,S=c.query.range,T=f.schema.primaryKey.extractKey,P=v.extractKey,_=(v.lowLevelIndex||v).extractKey,M=M.reduce(function(E,D){var L=E,A=[];if(D.type==="add"||D.type==="put")for(var N=new Ve,z=D.values.length-1;0<=z;--z){var U,K=D.values[z],W=T(K);N.hasKey(W)||(U=P(K),(k&&l(U)?U.some(function(J){return Vi(J,S)}):Vi(U,S))&&(N.addKey(W),A.push(K)))}switch(D.type){case"add":var Z=new Ve().addKeys(c.values?E.map(function(ae){return T(ae)}):E),L=E.concat(c.values?A.filter(function(ae){return ae=T(ae),!Z.hasKey(ae)&&(Z.addKey(ae),!0)}):A.map(function(ae){return T(ae)}).filter(function(ae){return!Z.hasKey(ae)&&(Z.addKey(ae),!0)}));break;case"put":var G=new Ve().addKeys(D.values.map(function(ae){return T(ae)}));L=E.filter(function(ae){return!G.hasKey(c.values?T(ae):ae)}).concat(c.values?A:A.map(function(ae){return T(ae)}));break;case"delete":var X=new Ve().addKeys(D.keys);L=E.filter(function(ae){return!X.hasKey(c.values?T(ae):ae)});break;case"deleteRange":var re=D.range;L=E.filter(function(ae){return!Vi(T(ae),re)})}return L},a);return M===a?a:(M.sort(function(E,D){return ye(_(E),_(D))||ye(T(E),T(D))}),c.limit&&c.limit<1/0&&(M.length>c.limit?M.length=c.limit:a.length===c.limit&&M.length<c.limit&&(m.dirty=!0)),b?Object.freeze(M):M)}function hl(a,c){return ye(a.lower,c.lower)===0&&ye(a.upper,c.upper)===0&&!!a.lowerOpen==!!c.lowerOpen&&!!a.upperOpen==!!c.upperOpen}function Zh(a,c){return(function(d,f,m,b){if(d===void 0)return f!==void 0?-1:0;if(f===void 0)return 1;if((f=ye(d,f))===0){if(m&&b)return 0;if(m)return 1;if(b)return-1}return f})(a.lower,c.lower,a.lowerOpen,c.lowerOpen)<=0&&0<=(function(d,f,m,b){if(d===void 0)return f!==void 0?1:0;if(f===void 0)return-1;if((f=ye(d,f))===0){if(m&&b)return 0;if(m)return-1;if(b)return 1}return f})(a.upper,c.upper,a.upperOpen,c.upperOpen)}function ef(a,c,d,f){a.subscribers.add(d),f.addEventListener("abort",function(){var m,b;a.subscribers.delete(d),a.subscribers.size===0&&(m=a,b=c,setTimeout(function(){m.subscribers.size===0&&je(b,m)},3e3))})}var tf={stack:"dbcore",level:0,name:"Cache",create:function(a){var c=a.schema.name;return r(r({},a),{transaction:function(d,f,m){var b,v,k=a.transaction(d,f,m);return f==="readwrite"&&(v=(b=new AbortController).signal,m=function(S){return function(){if(b.abort(),f==="readwrite"){for(var T=new Set,P=0,_=d;P<_.length;P++){var M=_[P],E=cn["idb://".concat(c,"/").concat(M)];if(E){var D=a.table(M),L=E.optimisticOps.filter(function(ae){return ae.trans===k});if(k._explicit&&S&&k.mutatedParts)for(var A=0,N=Object.values(E.queries.query);A<N.length;A++)for(var z=0,U=(Z=N[A]).slice();z<U.length;z++)zi((G=U[z]).obsSet,k.mutatedParts)&&(je(Z,G),G.subscribers.forEach(function(ae){return T.add(ae)}));else if(0<L.length){E.optimisticOps=E.optimisticOps.filter(function(ae){return ae.trans!==k});for(var K=0,W=Object.values(E.queries.query);K<W.length;K++)for(var Z,G,X,re=0,J=(Z=W[K]).slice();re<J.length;re++)(G=J[re]).res!=null&&k.mutatedParts&&(S&&!G.dirty?(X=Object.isFrozen(G.res),X=dl(G.res,G.req,L,D,G,X),G.dirty?(je(Z,G),G.subscribers.forEach(function(ae){return T.add(ae)})):X!==G.res&&(G.res=X,G.promise=se.resolve({result:X}))):(G.dirty&&je(Z,G),G.subscribers.forEach(function(ae){return T.add(ae)})))}}}T.forEach(function(ae){return ae()})}}},k.addEventListener("abort",m(!1),{signal:v}),k.addEventListener("error",m(!1),{signal:v}),k.addEventListener("complete",m(!0),{signal:v})),k},table:function(d){var f=a.table(d),m=f.schema.primaryKey;return r(r({},f),{mutate:function(b){var v=ue.trans;if(m.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return f.mutate(b);var k=cn["idb://".concat(c,"/").concat(d)];return k?(v=f.mutate(b),b.type!=="add"&&b.type!=="put"||!(50<=b.values.length||Ki(m,b).some(function(S){return S==null}))?(k.optimisticOps.push(b),b.mutatedParts&&as(b.mutatedParts),v.then(function(S){0<S.numFailures&&(je(k.optimisticOps,b),(S=ul(0,b,S))&&k.optimisticOps.push(S),b.mutatedParts&&as(b.mutatedParts))}),v.catch(function(){je(k.optimisticOps,b),b.mutatedParts&&as(b.mutatedParts)})):v.then(function(S){var T=ul(0,r(r({},b),{values:b.values.map(function(P,_){var M;return S.failures[_]?P:(P=(M=m.keyPath)!==null&&M!==void 0&&M.includes(".")?q(P):r({},P),R(P,m.keyPath,S.results[_]),P)})}),S);k.optimisticOps.push(T),queueMicrotask(function(){return b.mutatedParts&&as(b.mutatedParts)})}),v):f.mutate(b)},query:function(b){if(!ll(ue,f)||!cl("query",b))return f.query(b);var v=((T=ue.trans)===null||T===void 0?void 0:T.db._options.cache)==="immutable",_=ue,k=_.requery,S=_.signal,T=(function(D,L,A,N){var z=cn["idb://".concat(D,"/").concat(L)];if(!z)return[];if(!(L=z.queries[A]))return[null,!1,z,null];var U=L[(N.query?N.query.index.name:null)||""];if(!U)return[null,!1,z,null];switch(A){case"query":var K=U.find(function(W){return W.req.limit===N.limit&&W.req.values===N.values&&hl(W.req.query.range,N.query.range)});return K?[K,!0,z,U]:[U.find(function(W){return("limit"in W.req?W.req.limit:1/0)>=N.limit&&(!N.values||W.req.values)&&Zh(W.req.query.range,N.query.range)}),!1,z,U];case"count":return K=U.find(function(W){return hl(W.req.query.range,N.query.range)}),[K,!!K,z,U]}})(c,d,"query",b),P=T[0],_=T[1],M=T[2],E=T[3];return P&&_?P.obsSet=b.obsSet:(_=f.query(b).then(function(D){var L=D.result;if(P&&(P.res=L),v){for(var A=0,N=L.length;A<N;++A)Object.freeze(L[A]);Object.freeze(L)}else D.result=q(L);return D}).catch(function(D){return E&&P&&je(E,P),Promise.reject(D)}),P={obsSet:b.obsSet,promise:_,subscribers:new Set,type:"query",req:b,dirty:!1},E?E.push(P):(E=[P],(M=M||(cn["idb://".concat(c,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[b.query.index.name||""]=E)),ef(P,E,k,S),P.promise.then(function(D){return{result:dl(D.result,b,M?.optimisticOps,f,P,v)}})}})}})}};function cs(a,c){return new Proxy(a,{get:function(d,f,m){return f==="db"?c:Reflect.get(d,f,m)}})}var Nt=(Pe.prototype.version=function(a){if(isNaN(a)||a<.1)throw new de.Type("Given version is not a positive number");if(a=Math.round(10*a)/10,this.idbdb||this._state.isBeingOpened)throw new de.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,a);var c=this._versions,d=c.filter(function(f){return f._cfg.version===a})[0];return d||(d=new this.Version(a),c.push(d),c.sort(Hh),d.stores({}),this._state.autoSchema=!1,d)},Pe.prototype._whenReady=function(a){var c=this;return this.idbdb&&(this._state.openComplete||ue.letThrough||this._vip)?a():new se(function(d,f){if(c._state.openComplete)return f(new de.DatabaseClosed(c._state.dbOpenError));if(!c._state.isBeingOpened){if(!c._state.autoOpen)return void f(new de.DatabaseClosed);c.open().catch(xe)}c._state.dbReadyPromise.then(d,f)}).then(a)},Pe.prototype.use=function(a){var c=a.stack,d=a.create,f=a.level,m=a.name;return m&&this.unuse({stack:c,name:m}),a=this._middlewares[c]||(this._middlewares[c]=[]),a.push({stack:c,create:d,level:f??10,name:m}),a.sort(function(b,v){return b.level-v.level}),this},Pe.prototype.unuse=function(a){var c=a.stack,d=a.name,f=a.create;return c&&this._middlewares[c]&&(this._middlewares[c]=this._middlewares[c].filter(function(m){return f?m.create!==f:!!d&&m.name!==d})),this},Pe.prototype.open=function(){var a=this;return on(qt,function(){return Gh(a)})},Pe.prototype._close=function(){var a=this._state,c=En.indexOf(this);if(0<=c&&En.splice(c,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}a.isBeingOpened||(a.dbReadyPromise=new se(function(d){a.dbReadyResolve=d}),a.openCanceller=new se(function(d,f){a.cancelOpen=f}))},Pe.prototype.close=function(d){var c=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;c?(d.isBeingOpened&&d.cancelOpen(new de.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new de.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},Pe.prototype.delete=function(a){var c=this;a===void 0&&(a={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",f=this._state;return new se(function(m,b){function v(){c.close(a);var k=c._deps.indexedDB.deleteDatabase(c.name);k.onsuccess=Ie(function(){var S,T,P;S=c._deps,T=c.name,P=S.indexedDB,S=S.IDBKeyRange,Mi(P)||T===Gr||Li(P,S).delete(T).catch(xe),m()}),k.onerror=It(b),k.onblocked=c._fireOnBlocked}if(d)throw new de.InvalidArgument("Invalid closeOptions argument to db.delete()");f.isBeingOpened?f.dbReadyPromise.then(v):v()})},Pe.prototype.backendDB=function(){return this.idbdb},Pe.prototype.isOpen=function(){return this.idbdb!==null},Pe.prototype.hasBeenClosed=function(){var a=this._state.dbOpenError;return a&&a.name==="DatabaseClosed"},Pe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Pe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Pe.prototype,"tables",{get:function(){var a=this;return o(this._allTables).map(function(c){return a._allTables[c]})},enumerable:!1,configurable:!0}),Pe.prototype.transaction=function(){var a=function(c,d,f){var m=arguments.length;if(m<2)throw new de.InvalidArgument("Too few arguments");for(var b=new Array(m-1);--m;)b[m-1]=arguments[m];return f=b.pop(),[c,ee(b),f]}.apply(this,arguments);return this._transaction.apply(this,a)},Pe.prototype._transaction=function(a,c,d){var f=this,m=ue.trans;m&&m.db===this&&a.indexOf("!")===-1||(m=null);var b,v,k=a.indexOf("?")!==-1;a=a.replace("!","").replace("?","");try{if(v=c.map(function(T){if(T=T instanceof f.Table?T.name:T,typeof T!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return T}),a=="r"||a===ki)b=ki;else{if(a!="rw"&&a!=Ci)throw new de.InvalidArgument("Invalid transaction mode: "+a);b=Ci}if(m){if(m.mode===ki&&b===Ci){if(!k)throw new de.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");m=null}m&&v.forEach(function(T){if(m&&m.storeNames.indexOf(T)===-1){if(!k)throw new de.SubTransaction("Table "+T+" not included in parent transaction.");m=null}}),k&&m&&!m.active&&(m=null)}}catch(T){return m?m._promise(null,function(P,_){_(T)}):De(T)}var S=function T(P,_,M,E,D){return se.resolve().then(function(){var L=ue.transless||ue,A=P._createTransaction(_,M,P._dbSchema,E);if(A.explicit=!0,L={trans:A,transless:L},E)A.idbtrans=E.idbtrans;else try{A.create(),A.idbtrans._explicit=!0,P._state.PR1398_maxLoop=3}catch(U){return U.name===fi.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return T(P,_,M,null,D)})):De(U)}var N,z=Ye(D);return z&&Sn(),L=se.follow(function(){var U;(N=D.call(A,A))&&(z?(U=Kt.bind(null,null),N.then(U,U)):typeof N.next=="function"&&typeof N.throw=="function"&&(N=qi(N)))},L),(N&&typeof N.then=="function"?se.resolve(N).then(function(U){return A.active?U:De(new de.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):L.then(function(){return N})).then(function(U){return E&&A._resolve(),A._completion.then(function(){return U})}).catch(function(U){return A._reject(U),De(U)})})}.bind(null,this,b,v,m,d);return m?m._promise(b,S,"lock"):ue.trans?on(ue.transless,function(){return f._whenReady(S)}):this._whenReady(S)},Pe.prototype.table=function(a){if(!g(this._allTables,a))throw new de.InvalidTable("Table ".concat(a," does not exist"));return this._allTables[a]},Pe);function Pe(a,c){var d=this;this._middlewares={},this.verno=0;var f=Pe.dependencies;this._options=c=r({addons:Pe.addons,autoOpen:!0,indexedDB:f.indexedDB,IDBKeyRange:f.IDBKeyRange,cache:"cloned"},c),this._deps={indexedDB:c.indexedDB,IDBKeyRange:c.IDBKeyRange},f=c.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var m,b,v,k,S,T={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:xe,dbReadyPromise:null,cancelOpen:xe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:c.autoOpen};T.dbReadyPromise=new se(function(_){T.dbReadyResolve=_}),T.openCanceller=new se(function(_,M){T.cancelOpen=M}),this._state=T,this.name=a,this.on=er(this,"populate","blocked","versionchange","close",{ready:[pi,xe]}),this.on.ready.subscribe=B(this.on.ready.subscribe,function(_){return function(M,E){Pe.vip(function(){var D,L=d._state;L.openComplete?(L.dbOpenError||se.resolve().then(M),E&&_(M)):L.onReadyBeingFired?(L.onReadyBeingFired.push(M),E&&_(M)):(_(M),D=d,E||_(function A(){D.on.ready.unsubscribe(M),D.on.ready.unsubscribe(A)}))})}}),this.Collection=(m=this,tr(jh.prototype,function(N,A){this.db=m;var E=qa,D=null;if(A)try{E=A()}catch(z){D=z}var L=N._ctx,A=L.table,N=A.hook.reading.fire;this._ctx={table:A,index:L.index,isPrimKey:!L.index||A.schema.primKey.keyPath&&L.index===A.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:D,or:L.or,valueMapper:N!==Yn?N:null}})),this.Table=(b=this,tr(Wa.prototype,function(_,M,E){this.db=b,this._tx=E,this.name=_,this.schema=M,this.hook=b._allTables[_]?b._allTables[_].hook:er(null,{creating:[Th,xe],reading:[Eh,Yn],updating:[Ah,xe],deleting:[Ih,xe]})})),this.Transaction=(v=this,tr(Uh.prototype,function(_,M,E,D,L){var A=this;this.db=v,this.mode=_,this.storeNames=M,this.schema=E,this.chromeTransactionDurability=D,this.idbtrans=null,this.on=er(this,"complete","error","abort"),this.parent=L||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new se(function(N,z){A._resolve=N,A._reject=z}),this._completion.then(function(){A.active=!1,A.on.complete.fire()},function(N){var z=A.active;return A.active=!1,A.on.error.fire(N),A.parent?A.parent._reject(N):z&&A.idbtrans&&A.idbtrans.abort(),De(N)})})),this.Version=(k=this,tr(Wh.prototype,function(_){this.db=k,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,tr(Ja.prototype,function(_,M,E){if(this.db=S,this._ctx={table:_,index:M===":id"?null:M,or:E},this._cmp=this._ascending=ye,this._descending=function(D,L){return ye(L,D)},this._max=function(D,L){return 0<ye(D,L)?D:L},this._min=function(D,L){return ye(D,L)<0?D:L},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new de.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=ir(c.IDBKeyRange),this._createTransaction=function(_,M,E,D){return new d.Transaction(_,M,E,d._options.chromeTransactionDurability,D)},this._fireOnBlocked=function(_){d.on("blocked").fire(_),En.filter(function(M){return M.name===d.name&&M!==d&&!M._state.vcFired}).map(function(M){return M.on("versionchange").fire(_)})},this.use(Xh),this.use(tf),this.use(Jh),this.use(Yh),this.use(Qh);var P=new Proxy(this,{get:function(_,M,E){if(M==="_vip")return!0;if(M==="table")return function(L){return cs(d.table(L),P)};var D=Reflect.get(_,M,E);return D instanceof Wa?cs(D,P):M==="tables"?D.map(function(L){return cs(L,P)}):M==="_createTransaction"?function(){return cs(D.apply(this,arguments),P)}:D}});this.vip=P,f.forEach(function(_){return _(d)})}var us,yt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",nf=(Wi.prototype.subscribe=function(a,c,d){return this._subscribe(a&&typeof a!="function"?a:{next:a,error:c,complete:d})},Wi.prototype[yt]=function(){return this},Wi);function Wi(a){this._subscribe=a}try{us={indexedDB:i.indexedDB||i.mozIndexedDB||i.webkitIndexedDB||i.msIndexedDB,IDBKeyRange:i.IDBKeyRange||i.webkitIDBKeyRange}}catch{us={indexedDB:null,IDBKeyRange:null}}function fl(a){var c,d=!1,f=new nf(function(m){var b=Ye(a),v,k=!1,S={},T={},P={get closed(){return k},unsubscribe:function(){k||(k=!0,v&&v.abort(),_&&Gt.storagemutated.unsubscribe(E))}};m.start&&m.start(P);var _=!1,M=function(){return xi(D)},E=function(L){os(S,L),zi(T,S)&&M()},D=function(){var L,A,N;!k&&us.indexedDB&&(S={},L={},v&&v.abort(),v=new AbortController,N=(function(z){var U=Cn();try{b&&Sn();var K=Ht(a,z);return K=b?K.finally(Kt):K}finally{U&&_n()}})(A={subscr:L,signal:v.signal,requery:M,querier:a,trans:null}),Promise.resolve(N).then(function(z){d=!0,c=z,k||A.signal.aborted||(S={},(function(U){for(var K in U)if(g(U,K))return;return 1})(T=L)||_||(Gt(sr,E),_=!0),xi(function(){return!k&&m.next&&m.next(z)}))},function(z){d=!1,["DatabaseClosedError","AbortError"].includes(z?.name)||k||xi(function(){k||m.error&&m.error(z)})}))};return setTimeout(M,0),P});return f.hasValue=function(){return d},f.getValue=function(){return c},f}var un=Nt;function Gi(a){var c=Yt;try{Yt=!0,Gt.storagemutated.fire(a),Bi(a,!0)}finally{Yt=c}}w(un,r(r({},zr),{delete:function(a){return new un(a,{addons:[]}).delete()},exists:function(a){return new un(a,{addons:[]}).open().then(function(c){return c.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(a){try{return c=un.dependencies,d=c.indexedDB,c=c.IDBKeyRange,(Mi(d)?Promise.resolve(d.databases()).then(function(f){return f.map(function(m){return m.name}).filter(function(m){return m!==Gr})}):Li(d,c).toCollection().primaryKeys()).then(a)}catch{return De(new de.MissingAPI)}var c,d},defineClass:function(){return function(a){u(this,a)}},ignoreTransaction:function(a){return ue.trans?on(ue.transless,a):a()},vip:ji,async:function(a){return function(){try{var c=qi(a.apply(this,arguments));return c&&typeof c.then=="function"?c:se.resolve(c)}catch(d){return De(d)}}},spawn:function(a,c,d){try{var f=qi(a.apply(d,c||[]));return f&&typeof f.then=="function"?f:se.resolve(f)}catch(m){return De(m)}},currentTransaction:{get:function(){return ue.trans||null}},waitFor:function(a,c){return c=se.resolve(typeof a=="function"?un.ignoreTransaction(a):a).timeout(c||6e4),ue.trans?ue.trans.waitFor(c):c},Promise:se,debug:{get:function(){return Tt},set:function(a){Ma(a)}},derive:x,extend:u,props:w,override:B,Events:er,on:Gt,liveQuery:fl,extendObservabilitySet:os,getByKeyPath:V,setByKeyPath:R,delByKeyPath:function(a,c){typeof c=="string"?R(a,c,void 0):"length"in c&&[].map.call(c,function(d){R(a,d,void 0)})},shallowClone:H,deepClone:q,getObjectDiff:Hi,cmp:ye,asap:ce,minKey:-1/0,addons:[],connections:En,errnames:fi,dependencies:us,cache:cn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(a){return parseInt(a)}).reduce(function(a,c,d){return a+c/Math.pow(10,2*d)})})),un.maxKey=ir(un.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Gt(sr,function(a){Yt||(a=new CustomEvent(Ti,{detail:a}),Yt=!0,dispatchEvent(a),Yt=!1)}),addEventListener(Ti,function(a){a=a.detail,Yt||Gi(a)}));var An,Yt=!1,pl=function(){};return typeof BroadcastChannel<"u"&&((pl=function(){(An=new BroadcastChannel(Ti)).onmessage=function(a){return a.data&&Gi(a.data)}})(),typeof An.unref=="function"&&An.unref(),Gt(sr,function(a){Yt||An.postMessage(a)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(a){if(!Nt.disableBfCache&&a.persisted){Tt&&console.debug("Dexie: handling persisted pagehide"),An?.close();for(var c=0,d=En;c<d.length;c++)d[c].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(a){!Nt.disableBfCache&&a.persisted&&(Tt&&console.debug("Dexie: handling persisted pageshow"),pl(),Gi({all:new Ve(-1/0,[[]])}))})),se.rejectionMapper=function(a,c){return!a||a instanceof Re||a instanceof TypeError||a instanceof SyntaxError||!a.name||!La[a.name]?a:(c=new La[a.name](c||a.message,a),"stack"in a&&$(c,"stack",{get:function(){return this.inner.stack}}),c)},Ma(Tt),r(Nt,Object.freeze({__proto__:null,Dexie:Nt,liveQuery:fl,Entity:Ha,cmp:ye,PropModSymbol:jt,PropModification:nr,replacePrefix:function(a,c){return new nr({replacePrefix:[a,c]})},add:function(a){return new nr({add:a})},remove:function(a){return new nr({remove:a})},default:Nt,RangeSet:Ve,mergeRanges:lr,rangesOverlap:rl}),{default:Nt}),Nt})})(ks)),ks.exports}var jf=Mf();const fo=Pf(jf),Tl=Symbol.for("Dexie"),As=globalThis[Tl]||(globalThis[Tl]=fo);if(fo.semVer!==As.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${fo.semVer} and ${As.semVer}`);const{liveQuery:Ko,mergeRanges:tx,rangesOverlap:nx,RangeSet:rx,cmp:sx,Entity:ix,PropModSymbol:ox,PropModification:ax,replacePrefix:lx,add:cx,remove:ux}=As,Nf="easydb";function mn(e,t){return`${e}::${t}`}let hs=null;function pu(){if(hs)return hs;const e=new As(Nf);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),s=(await n.toArray()).filter(l=>l.workspaceId==null);if(s.length===0)return;const i=(await t.table("workspaces").toArray()).map(l=>l.id),o=i.length>0?i:["default"];for(const l of s){for(const u of o)await n.put({key:mn(u,l.key),workspaceId:u,name:l.key,value:l.value});await n.delete(l.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>zf()),hs={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},hs}function zf(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function ur(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>Vo(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const s=await e.get(t);if(!s)throw new Error(`patch: doc id=${t} vanished after update`);return s},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=Ko(()=>e.toArray()).subscribe({next:s=>t(s)});return()=>r.unsubscribe()}}}function Uf(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const s=Object.entries(n);return r.filter(i=>Vo(i,s)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(s=>({...s,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const i=await e.get(n);if(!i)throw new Error(`row patch: row ${n} vanished after update`);return i},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const s=Ko(()=>e.where("tableId").equals(t).toArray()).subscribe({next:i=>n(i)});return()=>s.unsubscribe()}}}function Ff(e,t){const n=s=>({...s,workspaceId:t(),key:mn(t(),s.name),name:s.name,value:s.value}),r=()=>e.where("workspaceId").equals(t());return{async find(s){const i=await r().toArray();if(!s||Object.keys(s).length===0)return i;const o=Object.entries(s);return i.filter(l=>Vo(l,o))},async findOne(s){return await e.get(mn(t(),s))??null},async insert(s){const i=n(s);return await e.add(i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>n(o));return await e.bulkAdd(i),i},async upsert(s){const i=n(s);return await e.put(i),i},async patch(s,i){const o=mn(t(),s);if(await e.update(o,i)===0)throw new Error(`setting patch: no setting ${s}`);const u=await e.get(o);if(!u)throw new Error(`setting patch: ${s} vanished after update`);return u},async remove(s){await e.delete(mn(t(),s))},async bulkRemove(s){s.length!==0&&await e.bulkDelete(s.map(i=>mn(t(),i)))},subscribe(s){const o=Ko(()=>r().toArray()).subscribe({next:l=>s(l)});return()=>o.unsubscribe()}}}function Vo(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Bf(e,t){return{workspaces:ur(e.workspaces),tables:ur(e.tables),settings:Ff(e.settings,t),plugins:ur(e.plugins),viewTemplates:ur(e.viewTemplates),viewInstances:ur(e.viewInstances),rows:n=>Uf(e.rows,n)}}function qf(e){const{base:t,providers:n,tableById:r,ctx:s}=e,i=new Map;return{...t,rows(o){const l=r(o),u=l?.source;if(u){const h=n.get(u.type);if(h){const p=JSON.stringify(u),g=i.get(o);if(g&&g.key===p)return g.coll;const w=h.create(l,s);return i.set(o,{key:p,coll:w}),w}}return i.delete(o),t.rows(o)}}}function Hf(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const s of r)try{s(n)}catch(i){console.error(`[event:${String(t)}] listener threw`,i)}}}}const mt=Ce`
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
`;function gt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const Il=new WeakSet;function bt(e,t){if(Il.has(t))return;Il.add(t);let n=0,r=0,s=0,i=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=u.clientX,r=u.clientY;const p=e.getBoundingClientRect();s=p.left,i=p.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!o)return;const h=u.clientX-n,p=u.clientY-r,g=-e.offsetWidth+80,w=window.innerWidth-80,y=0,$=window.innerHeight-40,x=Math.max(g,Math.min(w,s+h)),I=Math.max(y,Math.min($,i+p));e.style.position="fixed",e.style.left=`${x}px`,e.style.top=`${I}px`,e.style.margin="0"});const l=u=>{if(o){o=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}var Kf=Object.defineProperty,Vf=Object.getOwnPropertyDescriptor,mu=(e,t,n,r)=>{for(var s=r>1?void 0:r?Vf(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Kf(t,n,s),s};let at=class extends $e{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),at.instance=this}disconnectedCallback(){super.disconnectedCallback(),at.instance===this&&(at.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&bt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return C`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):oe}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return C`
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
        `;case"prompt":return C`
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
        `;case"choice":return C`
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
              ${e.message?C`<p class="message">${e.message}</p>`:oe}
              <div class="choices">
                ${e.options.map((t,n)=>n===0?C`<button type="submit" class="choice primary" autofocus>${t}</button>`:C`<button
                        type="button"
                        class="choice"
                        @click=${()=>this.closeAndResolve(t)}
                      >
                        ${t}
                      </button>`)}
              </div>
            </div>
          </form>
        `}}};at.instance=null;at.styles=[mt,Ce`
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
    `];mu([F()],at.prototype,"current",2);at=mu([Te("host-dialogs")],at);const wt=Ce`
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
`;var Wf=Object.defineProperty,Gf=Object.getOwnPropertyDescriptor,gu=(e,t,n,r)=>{for(var s=r>1?void 0:r?Gf(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Wf(t,n,s),s};let zt=class extends $e{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),zt.instance=this}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return C`
      ${this.toasts.map(e=>C`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Qf(e.kind)}</span>
            <span class="body">
              ${e.title?C`<strong>${e.title}</strong>`:""}${Yf(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};zt.instance=null;zt.styles=[wt,Ce`
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
    `];gu([F()],zt.prototype,"toasts",2);zt=gu([Te("toast-host")],zt);function Yf(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,s;for(;(s=t.exec(e))!==null;)s.index>r&&n.push(e.slice(r,s.index)),n.push({url:s[0]}),r=s.index+s[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(i=>typeof i=="string"?i:C`<a href=${i.url} target="_blank" rel="noopener noreferrer">${i.url}</a>`)}function Qf(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Xf(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function Rt(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function Xi(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function Jf(e){return{registerHeaderButton:t=>Rt(e.headerButtons,t),registerFooterButton:t=>Rt(e.footerButtons,t),registerTableButton:t=>Rt(e.tableButtons,t),registerColumnEditorAction:t=>Rt(e.columnEditorActions,t),registerImporter:t=>Rt(e.importers,t),registerConnector:t=>Rt(e.connectors,t),registerExporter:t=>Rt(e.exporters,t),registerUrlSource:t=>Rt(e.urlSources,t),registerDropHandler:t=>Rt(e.dropHandlers,t),registerCellRenderer:(t,n)=>Xi(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>Xi(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>Xi(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>Rt(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:Zf}}const Zf={async alert(e,t){const n=at.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=at.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=at.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=at.instance;if(r)return r.choice(e,t,n);const s=window.prompt(`${e}

Options: ${t.join(", ")}`);return s&&t.includes(s)?s:null},toast(e,t){const n=zt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Wo="/easydbaccess/settings.json",bu="/easydbaccess/secrets.txt";function Rr(e){try{return globalThis.localStorage??null}catch{return null}}function qs(e){const t=Rr();if(!t)return{};const n=t.getItem(Wo);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function Go(e,t){return qs()[e]}function ep(e,t,n){const r=Rr();if(!r)return;const s=qs();s[e]=t,r.setItem(Wo,JSON.stringify(s))}function tp(e,t){const n=Rr();if(!n)return;const r=qs();e in r&&(delete r[e],n.setItem(Wo,JSON.stringify(r)))}function po(e,t){return e in qs()}function Hs(e){return Rr()?.getItem(bu)??""}function wu(e,t){Rr()?.setItem(bu,e)}function xr(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf(":");if(s<0)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim();i&&(t[i]=o)}return t}function yu(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const s=t[r.trim()];return s===void 0?n:s})}function np(e){const t=Jf(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),s=sp(e.store,e.registries),i={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:i,registerRowSource:r,settings:s,backend:{fetch:async(o,l)=>{const u=await rp(e.store),h=l?.body instanceof ArrayBuffer;if(!u||h)return globalThis.fetch(o,l);const p={url:o};return l?.method&&(p.method=l.method),l?.headers&&(p.headers=l.headers),typeof l?.body=="string"&&(p.body=l.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})},async saveFile(o,l,u){const h=typeof l=="string"?new Blob([l],{type:u??"application/octet-stream"}):l,p=URL.createObjectURL(h),g=document.createElement("a");g.href=p,g.download=o,g.rel="noopener",document.body.appendChild(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(p),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function rp(e){const t="server-sync:url";let n=po(t)?Go(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:yu(n,xr(Hs())).replace(/\/+$/,"")}function sp(e,t){const n=(i,o)=>`${i}:${o}`,r=(i,o)=>t.settings.get(i)?.fields.find(l=>l.key===o),s=i=>typeof i=="string"?yu(i,xr(Hs())):i;return{async get(i,o){const l=n(i,o);let u;if(po(l))u=Go(l);else{const h=await e.settings.findOne(l);u=h?h.value:r(i,o)?.default}return s(u)},async set(i,o,l,u){const h=n(i,o);(u??r(i,o)?.scope??"workspace")==="user"?(ep(h,l),await e.settings.remove(h).catch(()=>{})):(await e.settings.upsert({name:h,value:l}),tp(h))},async placement(i,o){const l=n(i,o);return po(l)?"user":await e.settings.findOne(l)?"workspace":null}}}function Al(e,t){return e.has(t)?e.get(t)!=="0":!1}function ip(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return Al(e,"safemode")?"all-optional":Al(e,"safemode1")?"url-plugins":"off"}const vt=ip();function Yo(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const s=r[0],i=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[s,i,...o].join("/")}`}}return e}function vu(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function $u(e){const t=Yo(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function xu(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const s=[];let i=0;for(;;){const{done:u,value:h}=await r.read();if(u)break;h&&(s.push(h),i+=h.length,t?.(Math.min(1,i/n)))}const o=new Uint8Array(i);let l=0;for(const u of s)o.set(u,l),l+=u.length;return new TextDecoder().decode(o)}return await e.text()}const op=50*1024*1024;function Rl(e){try{return new URL(e).host}catch{return e}}function Ut(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function ap(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function Ol(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function lp(e,t,n={}){const r=Yo(t),s=n.slowMs??2e3;let i=setTimeout(()=>{i=void 0,n.onSlow?.()},s);const o=()=>{i!==void 0&&(clearTimeout(i),i=void 0)},l=n.maxBytes===null?null:n.maxBytes??op,u=async h=>{let p;try{p=await e.backend.fetch(h)}catch(w){throw new Error(`Could not reach ${Rl(h)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${w.message}]`)}if(!p.ok){const w=await ap(p);throw new Error(`HTTP ${p.status} ${p.statusText||""}`.trim()+(w?` — ${w}`:""))}const g=Number(p.headers.get("content-length"));if(l!==null&&Number.isFinite(g)&&g>l)throw p.body?.cancel().catch(()=>{}),new Error(`Response is ${Ol(g)}, over the ${Ol(l)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await xu(p,n.onProgress)}catch(w){throw new Error(`Failed reading the response body from ${Rl(h)}: ${w.message}`)}};try{const h=await u(r);if(vu(h)){const p=$u(r);if(p)return await u(p)}return h}finally{o()}}async function Or(e,t,n,r={}){const{TopProgress:s}=await Xe(async()=>{const{TopProgress:o}=await import("./top-progress-BI3aNamK.js");return{TopProgress:o}},[]),i={handle:null};try{return await lp(e,t,{onSlow:()=>{i.handle=s.begin(n)},onProgress:o=>i.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{i.handle?.done()}}const fs=e=>e.trim().toLowerCase();function dx(e,t){const n=new Map;for(const i of t)n.set(fs(i.field),i.field),n.has(fs(i.label))||n.set(fs(i.label),i.field);const r=new Set,s=e.map(()=>"");return e.forEach((i,o)=>{const l=n.get(fs(i));l&&!r.has(l)&&(s[o]=l,r.add(l))}),e.forEach((i,o)=>{if(s[o])return;const l=t[o]?.field;l&&!r.has(l)&&(s[o]=l,r.add(l))}),s}function cp(e,t,n,r){const s=new Map(t.map(i=>[i.field,i.type]));return e.map(i=>{const o={};return n.forEach((l,u)=>{if(!l)return;const h=s.get(l);h!==void 0&&(o[l]=r(i[u]??"",h))}),o})}function ke(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Le(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function mo(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}const up={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function dp(e){e.ui.registerImporter(gp),Xe(()=>import("./csv-import-options--mhmkvE_.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=Tp(t).filter(Ip);if(r.length===0)return!1;if(t.preventDefault(),r.length===1&&await mp(e,t,r[0]))return!0;const s=r.length===1?`"${r[0].name}"`:`${r.length} files`,i=await e.ui.dialogs.choice(`Import ${s} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[fp,Dl],"Import CSV");if(!i)return!0;const o=i===Dl?async l=>{const{editColumnNames:u}=await Xe(async()=>{const{editColumnNames:h}=await Promise.resolve().then(()=>mv);return{editColumnNames:h}},void 0);return u(l)}:void 0;for(const l of r)await bp(e,l,o);return!0})}function go(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Ut(e.url):"pasted"}function hp(e){return Zo(go(e))||"imported"}const fp="Import directly",Dl="Edit columns first",Pl="A new table",Ll="Append to this table",pp="Replace the rows of this table";async function mp(e,t,n){const{tableIdAtNode:r}=await Xe(async()=>{const{tableIdAtNode:p}=await Promise.resolve().then(()=>Gd);return{tableIdAtNode:p}},void 0),s=r(t.target);if(!s)return!1;const i=await e.store.tables.findOne(s);if(!i)return!1;if(i.readonly===!0||i.source!=null)return e.ui.dialogs.toast(`"${i.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import CSV"}),!1;const o=await e.ui.dialogs.choice(`Import "${n.name}" into "${i.name}"?`,[Ll,pp,Pl],"Import CSV");if(!o)return!0;if(o===Pl)return!1;const l=await n.text(),u=o===Ll?"append":"overwrite",h={target:{tableId:s,mode:u}};return u==="append"&&(h.mapFields=async(p,g,w)=>{const{mapColumnsToTable:y}=await Xe(async()=>{const{mapColumnsToTable:$}=await import("./column-map-dialog-jtnRqwPM.js");return{mapColumnsToTable:$}},[]);return y(p,g,i.name,w)}),await Qo(e,l,n.name,h),!0}const gp={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:hp(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await Cu(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${go(n)}…`):r=n.text??"";const i=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??ea(go(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...i?{separator:i}:{}},l=e.targetColumns;if(l&&l.length>0){yield{rows:Xo(r,o).rows.map(g=>{const w={};for(let y=0;y<l.length;y++){const $=l[y];w[$.field]=Jo(g[y]??"",$.type)}return w})};return}const u=Fn(r,o);yield{columns:u.columns,rows:u.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function bp(e,t,n){await Qo(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function Qo(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("csv-import: no active workspace");const i=Zo(n||"imported")||"imported",o=r.separator??ea(n),l=r.target?await e.store.tables.findOne(r.target.tableId):null,u=l??(await e.store.tables.find()).find(y=>y.workspaceId===s&&y.name===i);let h,p;if(l&&r.target)p=r.target.mode,h=l.id;else if(u){const y=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!y)return;y==="Append rows"?(p="append",h=u.id):y==="Overwrite rows"?(p="overwrite",h=u.id):(p="new",h=ke())}else p="new",h=ke();e.events.emit("import:before",{source:"csv",tableId:h});let g;if(p==="new"){const y=Fn(t,{maxRows:r.maxRows,separator:o});let $=y.columns,x=y.rows;if(r.editColumns){const O=await r.editColumns($);if(O===null)return;x=Ap(x,$,O),$=O}r.maxRows!=null&&(x=x.slice(0,r.maxRows));const I=u?`${i} (${Date.now().toString(36)})`:i;await e.store.tables.insert({id:h,workspaceId:s,name:I,code:mo(I),columns:$,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()}),g=x.map(O=>({id:ke(),tableId:h,data:O,updatedAt:Date.now()}))}else{const y=u.columns,$=Xo(t,{maxRows:r.maxRows,separator:o}),x=r.maxRows!=null?$.rows.slice(0,r.maxRows):$.rows;let I=y.map(O=>O.field);if(r.mapFields){const O=await r.mapFields($.header,y,$.rows[0]??[]);if(O===null)return;I=O}if(g=cp(x,y,I,Jo).map(O=>({id:ke(),tableId:h,data:O,updatedAt:Date.now()})),p==="overwrite"){const O=e.store.rows(h),j=await O.find();await O.bulkRemove(j.map(B=>B.id))}}await e.store.rows(h).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:h,rowCount:g.length})}function Xo(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??_u(n),s=Su(n,r,ku(t.maxRows));if(s.length===0)return{header:[],rows:[]};const i=s[0],o=s.slice(1).filter(l=>!(l.length===1&&l[0]===""));return{header:i,rows:o}}function ku(e){return e!=null?e+1:void 0}async function Cu(e,t){const r=new TextDecoder,s=t+1;let i="",o=0,l=!1,u=0;for(;u<e.size;){const h=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const p=r.decode(h,{stream:!0});for(let g=0;g<p.length;g++){const w=p[g];if(w==='"')l=!l;else if(w===`
`&&!l&&(o+=1,o>=s))return i+p.slice(0,g+1)}i+=p}return i}function Fn(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??_u(n),s=Su(n,r,ku(t.maxRows));if(s.length===0)return{columns:[],rows:[]};const i=s[0],o=s.slice(1).filter(y=>!(y.length===1&&y[0]==="")),l=i.map((y,$)=>vp(y,$)),u=Iu(l.map(y=>y.field)),h=o.map(y=>{const $={};for(let x=0;x<u.length;x++)$[u[x]]=y[x]??"";return $}),p=l.map((y,$)=>y.type?y.type:$p(h.map(x=>x[u[$]]??"").filter(x=>x.length>0))),g=l.map((y,$)=>{const x=p[$]??"string",I={field:u[$],label:y.label,type:x},O=yp(x),j=y.renderer??O;return j&&(I.renderer=j),y.default!==void 0&&(I.default=y.default),y.max!=null&&(I.max=y.max),y.unique&&(I.unique=!0),y.notnull&&(I.notnull=!0),y.hidden&&(I.hidden=!0),I}),w=h.map(y=>{const $={};for(let x=0;x<u.length;x++){const I=u[x],O=p[x]??"string";$[I]=Jo(y[I]??"",O)}return $});return{columns:g,rows:w}}const wp=new Set(["string","number","boolean","date","datetime"]),Ml={color:"color",image:"image"};function yp(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function vp(e,t){const n=e.trim();if(!n.includes(":"))return{field:mo(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),s=mo(r[0]||`col_${t+1}`),i=(r[1]??r[0]??"").trim()||s,o={field:s,label:i},l=(r[2]??"").trim();l&&(wp.has(l)?o.type=l:Ml[l]&&(o.type="string",o.renderer=Ml[l]));const u=(r[3]??"").trim();u&&(o.default=u);const h=(r[4]??"").trim();if(h){const g=Number(h);Number.isFinite(g)&&g>0&&(o.max=g)}const p=(r[5]??"").toLowerCase();return p.includes("u")&&(o.unique=!0),p.includes("n")&&(o.notnull=!0),p.includes("h")&&(o.hidden=!0),o}function _u(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const i of t)i in n&&(n[i]+=1);let r=",",s=-1;for(const i of[",",";","	"])(n[i]??0)>s&&(r=i,s=n[i]??0);return r}function Su(e,t,n){const r=[];let s=[],i="",o=!1;for(let l=0;l<e.length;l++){const u=e[l];if(o)u==='"'?e[l+1]==='"'?(i+='"',l++):o=!1:i+=u;else if(u==='"')o=!0;else if(u===t)s.push(i),i="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[l+1]===`
`&&l++,s.push(i),r.push(s),s=[],i="",n!=null&&r.length>=n)return r}else i+=u}return(i.length>0||s.length>0)&&(s.push(i),r.push(s)),r}function $p(e){return e.length===0?"string":e.every(kp)?"boolean":e.every(Cp)?"number":e.every(Sp)?"datetime":e.every(_p)?"date":"string"}const xp=/^(true|false|yes|no|0|1)$/i;function kp(e){return xp.test(e.trim())}function Cp(e){const t=e.trim();if(t==="")return!1;const n=Number(t);return Number.isFinite(n)}function _p(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Sp(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Jo(e,t){const n=e.trim();switch(t){case"number":{if(n==="")return null;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return Eu(n);case"datetime":return Ep(n);default:return e}}function Eu(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),s=parseInt(t[2],10),i=t[3];let o=parseInt(i,10);i.length===2&&(o+=2e3);let l,u;return r>12?(l=r,u=s):s>12?(u=r,l=s):(l=r,u=s),`${o.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${l.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function Ep(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${Eu(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const s=new Date(e);if(!Number.isNaN(s.getTime())){const i=s.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}return e}function Tp(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}const Tu=/\.(csv|tsv|tab)$/i;function Zo(e){return e.replace(Tu,"")}function ea(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function Ip(e){return!!(Tu.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function Iu(e){const t=new Map,n=new Set,r=[];for(const s of e){let i=s,o=t.get(s)??0;for(;n.has(i);)o+=1,i=`${s}_${o+1}`;t.set(s,o),n.add(i),r.push(i)}return r}function Ap(e,t,n){return e.map(r=>{const s={};for(let i=0;i<t.length;i++)s[n[i].field]=r[t[i].field];return s})}const Rp=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Iu,importCsvText:Qo,init:dp,meta:up,parseCsv:Fn,parseCsvRaw:Xo,readCsvHead:Cu,separatorForName:ea,stripDelimitedExt:Zo},Symbol.toStringTag,{value:"Module"})),Op={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},Dp={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return ta(e,t)}};function Pp(e){e.ui.registerExporter(Dp)}function ta(e,t){const n=e.columns.map(i=>i.field),r=e.columns.map(i=>jl(i.label??i.field)),s=t.map(i=>n.map(o=>jl(Lp(i.data[o]))).join(","));return[r.join(","),...s].join(`\r
`)}function Lp(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function jl(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Mp=Object.freeze(Object.defineProperty({__proto__:null,init:Pp,meta:Op,serializeCsv:ta},Symbol.toStringTag,{value:"Module"}));var jp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Bn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Np(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&jp(t,n,s),s};function Rs(e,t={}){return(lt.instance??zp()).open(e,t)}function zp(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Up(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let lt=class extends $e{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((n,r)=>n?r:-1).filter(n=>n>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),lt.instance===this&&(lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return C`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
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
            ${this.message?C`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,n)=>C`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${n}`}
                      .checked=${this.selected[n]??!1}
                      @change=${()=>this.toggle(n)}
                    />
                    <label for=${`tsel-${n}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?C`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Up(t.size)}</span>
                      ${t.detail?C`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};lt.instance=null;lt.styles=[mt,Ce`
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
    `];Bn([F()],lt.prototype,"items",2);Bn([F()],lt.prototype,"selected",2);Bn([F()],lt.prototype,"heading",2);Bn([F()],lt.prototype,"message",2);Bn([F()],lt.prototype,"confirmLabel",2);lt=Bn([Te("table-select-dialog")],lt);function na(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let s=0;s<e.length;s++)r[t[s].field]=n[e[s].field];return r}}function Nl(e,t){if(t.length===0)return null;const n=new Set(t.map(s=>s.from)),r={};for(const s of Object.keys(e))n.has(s)||(r[s]=e[s]);for(const{from:s,to:i}of t)Object.prototype.hasOwnProperty.call(e,s)&&(r[i]=e[s]);return r}function Ks(e,t,n=[]){const r=new Set(e.map(l=>l.field)),s=new Set(n),i=[...e],o=[];for(const l of t)r.has(l.field)||s.has(l.field)||(i.push(l),o.push(l.field),r.add(l.field));return{columns:i,newFields:o}}function Vs(e,t){const n=new Set([...e].map(s=>s.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let s=2;;s++){const i=`${r}-${s}`;if(!n.has(i.toLowerCase()))return i}}async function ra(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function Au(e,t,n,r){const{workspaceId:s,importerId:i,target:o,maxRows:l}=r;let u,h,p,g=!1,w=0,y,$=null;const x=O=>e.store.rows(O),I=async O=>{if(g)return!0;if(o.kind==="new"){let j=O.columns??[];if(r.editColumns){const Y=await r.editColumns(j);if(Y===null)return!1;$=na(j,Y),j=Y}u=ke(),h=Vs(await ra(e,s),t);const B={id:u,workspaceId:s,name:h,code:Le(h),columns:j,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(B),p=!0}else{const j=await e.store.tables.findOne(o.tableId);if(!j)throw new Error("The table to import into no longer exists.");if(u=j.id,h=j.name,p=!1,o.kind==="overwrite"){const B=await x(u).find();await x(u).bulkRemove(B.map(Y=>Y.id))}if(O.columns?.length){const B=Ks(j.columns,O.columns,j.deletedColumns??[]);B.newFields.length>0&&await e.store.tables.patch(u,{columns:B.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:i,tableId:u}),g=!0,!0};for await(const O of n){if(l!=null&&w>=l)break;if(!await I(O))return null;O.totalCount!=null&&(y=O.totalCount);let j=O.rows;if(l!=null&&w+j.length>l&&(j=j.slice(0,l-w)),j.length===0)continue;$&&(j=j.map($));const B=Date.now(),Y=j.map(ce=>({id:ke(),tableId:u,data:ce,updatedAt:B}));await x(u).bulkInsert(Y),w+=Y.length,r.onProgress?.(w,y)}return!g&&!await I({})?null:(e.events.emit("import:after",{source:i,tableId:u,rowCount:w}),{tableId:u,tableName:h,rowCount:w,created:p})}function zl(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(s,i)=>Or(e,s,i??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function Fp(e,t){if(t.length<=1)return t;const n=await Rs(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function Bp(e,t,n,r,s){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const i=t.reference(n,r);let o=[];for await(const h of t.read(n,r)){o=h.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const l=Vs(await ra(e,s),r.name),u=ke();return await e.store.tables.insert({id:u,workspaceId:s,name:l,code:Le(l),columns:o,view:"table",source:i,readonly:!0,updatedAt:Date.now()}),{tableId:u,tableName:l,rowCount:0,created:!0}}async function Ws(e,t,n,r){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=zl(e,r),o=await t.list(i,n);if(o.length===0)throw new Error("No tables found at that source.");const l=await Fp(t,o);if(l===null)return{landed:[],failed:[],cancelled:!0};const u=[],h=[];for(const p of l)try{if(r.mode==="reference"){u.push(await Bp(e,t,i,p,s));continue}const g=r.target;let w;g.kind!=="new"&&(w=(await e.store.tables.findOne(g.tableId))?.columns);const y=zl(e,r,{...w?{targetColumns:w}:{}}),$=t.read(y,p),x=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),I=await Au(e,p.name,$,{workspaceId:s,importerId:t.id,target:g,...x?{origin:x}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(I===null)return{landed:u,failed:h,cancelled:!0};u.push(I)}catch(g){h.push({name:p.name,error:g?.message??String(g)})}return{landed:u,failed:h,cancelled:!1}}async function Ru(e,t,n){const r=new Map;if(n.length===0)return r;const s=(await e.find()).filter(l=>l.workspaceId===t),i=new Map(s.map(l=>[l.name,l])),o=new Map(s.map(l=>[l.id,l]));for(const l of n){if(!qp(l))continue;const u=i.get(l.name)??o.get(l.id),h=u?.id??l.id;u&&r.set(l.id,u.id);const p=u?u.builtin:l.builtin,g={...l,id:h,workspaceId:t};p===void 0?delete g.builtin:g.builtin=p,await e.upsert(g),i.set(g.name,g),o.set(g.id,g)}return r}function qp(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const Hp={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Kp(e){e.ui.registerImporter(Ou),e.ui.registerDropHandler(async t=>{const r=em(t).filter(tm);if(r.length===0)return!1;t.preventDefault();for(const s of r)await Wp(e,s);return!0})}function sa(e){return Ue(e)?bo(e)||Array.isArray(e.tables)?!0:Pu(e):!1}function Vp(e){return e.kind==="file"&&e.file?Ji(e.file.name):e.kind==="url"&&e.url?Ji(Ut(e.url)):Ji(e.name??"imported")}const Ou={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Ut(t.url)}…`):n=t.text??"";const r=Vp(t);let s;try{s=JSON.parse(n)}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`)}const i=Gs(s,r);return i.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:i.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function Ji(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function Wp(e,t){const n=await t.text();let r;try{r=JSON.parse(n)}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(sa(r)){await ia(e,n,t.name);return}const s=await Ws(e,Ou,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=s.landed.reduce((o,l)=>o+l.rowCount,0);s.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${i.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function ia(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let i;try{i=JSON.parse(t)}catch(I){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${I.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",l=Gs(i,o);if(l.length===0)return;let u=l;if(l.length>1){const I=await Rs(l.map(O=>({name:O.name,size:O.rows.length})),{title:"Import tables",message:`"${n}" contains ${l.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!I)return;u=I.map(O=>l[O])}const h=(await e.store.tables.find()).filter(I=>I.workspaceId===s),p=new Set(u.map(I=>I.name)),g=h.filter(I=>p.has(I.name));let w;if(g.length===0&&u.length===1)w="append-new";else{const I=g.length>0?[`Overwrite matching (${g.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],O=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${n}".${g.length>0?`

${g.length} table${g.length===1?"":"s"} share a name with existing data.`:""}`,I,"JSON import");if(!O)return;O.startsWith("Overwrite matching")?w="overwrite-matching":O==="Replace entire workspace"?w="replace-workspace":w="append-new"}const y=2e3,$=u.reduce((I,O)=>I+(O.source?0:Math.min(O.rows.length,r.maxRows??1/0)),0);let x=null;if($>=y){const{TopProgress:I}=await Xe(async()=>{const{TopProgress:O}=await import("./top-progress-BI3aNamK.js");return{TopProgress:O}},[]);x=I.begin(`Importing ${n}…`)}try{if(w==="replace-workspace")for(const B of h){const Y=e.store.rows(B.id),ce=await Y.find();await Y.bulkRemove(ce.map(V=>V.id)),await e.store.tables.remove(B.id)}const I=new Map(h.map(B=>[B.name,B])),O=new Map;let j=0;for(const B of u){const Y=B.source,ce=B.origin??(!Y&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let V;const R=w==="overwrite-matching"?I.get(B.name):void 0;let H=B.columns,te=B.rows;if(r.editColumns&&!R&&!Y){const ie=await r.editColumns(H,B.name);if(ie===null)continue;te=Zp(te,H,ie),H=ie}if(R){if(V=R.id,!R.source){const ie=e.store.rows(V),Q=await ie.find();await ie.bulkRemove(Q.map(q=>q.id))}await e.store.tables.patch(V,{columns:H,...B.title?{title:B.title}:{},...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...B.filters?{filters:B.filters}:{},...B.labelColumn?{labelColumn:B.labelColumn}:{},...B.info?{info:B.info}:{},...B.deletedColumns?{deletedColumns:B.deletedColumns}:{},...B.readonly?{readonly:!0}:{},source:Y??void 0,origin:ce??void 0,updatedAt:Date.now()})}else V=ke(),e.events.emit("import:before",{source:"json",tableId:V}),await e.store.tables.insert({id:V,workspaceId:s,name:B.name,code:Le(B.name),columns:H,view:"table",...B.title?{title:B.title}:{},...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{},...B.filters?{filters:B.filters}:{},...B.labelColumn?{labelColumn:B.labelColumn}:{},...B.info?{info:B.info}:{},...B.deletedColumns?{deletedColumns:B.deletedColumns}:{},...B.readonly?{readonly:!0}:{},...Y?{source:Y}:{},...ce?{origin:ce}:{},updatedAt:Date.now()});O.set(B.name,V);let ee=0;if(!Y){const ie=e.store.rows(V),q=(r.maxRows!=null?te.slice(0,r.maxRows):te).map(ne=>({id:ke(),tableId:V,data:ne,updatedAt:Date.now()}));await ie.bulkInsert(q),ee=q.length,j+=ee,x?.fraction($>0?j/$:1)}e.events.emit("import:after",{source:"json",tableId:V,rowCount:ee})}await Gp(e,i,s,O,w==="replace-workspace")}finally{x?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Gp(e,t,n,r,s){if(!Ue(t))return;const i=t,o=Array.isArray(i.viewTemplates)?i.viewTemplates:[],l=Array.isArray(i.viewInstances)?i.viewInstances:[];if(o.length===0&&l.length===0)return;if(s){const h=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===n);await e.store.viewInstances.bulkRemove(h.map(p=>p.id))}const u=await Ru(e.store.viewTemplates,n,o);for(const h of l){if(!Ue(h)||typeof h.id!="string")continue;const p=(h.tableName?r.get(h.tableName):void 0)??h.tableId;if(!p)continue;const g=u.get(h.templateId)??h.templateId;await e.store.viewInstances.upsert({...h,workspaceId:n,tableId:p,templateId:g})}}function Gs(e,t){if(Ue(e)&&bo(e))return Ul(e);if(Ue(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const s of n.tables){if(Du(s)){r.push(Fl(s));continue}Ue(s)&&bo(s)&&r.push(...Ul(s))}return r}if(Pu(e))return[Fl(e)];if(Array.isArray(e)){const n=e.filter(Ue);return n.length===0?[]:[{name:t,...Bl(n)}]}return Ue(e)?[{name:t,...Bl([e])}]:[]}function bo(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Ue(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function Ul(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!Ue(r))continue;const s=r;if(!Array.isArray(s.dataArray)||!Array.isArray(s.columns))continue;const i=n.replace(/\.table\.json$/,""),o=s.columns.map(p=>Yp(p)),l=o.map(p=>p.field),u=s.dataArray.filter(p=>Array.isArray(p)).map(p=>{const g={};for(let w=0;w<l.length;w++)g[l[w]]=p[w];return g}),h={name:i,columns:o,rows:u};if(s.elementRect&&typeof s.elementRect.x=="number"&&typeof s.elementRect.y=="number"){const p=s.elementRect;h.windowGeometry={x:p.x,y:p.y,w:p.width??600,h:p.height??400,z:p.zIndex??100,minimized:!!p.minimized,maximized:!!p.maximized}}typeof s.sortColumn=="number"&&s.sortColumn>=0&&s.sortColumn<l.length&&(h.sortColumn=l[s.sortColumn],h.sortAsc=(s.sortDirection??"asc")!=="desc"),t.push(h)}return t}function Yp(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",s={field:t,label:n,type:r};return e.isUnique&&(s.unique=!0),e.isNotNull&&(s.notnull=!0),s}function Du(e){return Ue(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Pu(e){return Du(e)&&Array.isArray(e.rows)}function Fl(e){const t=e,n=Ue(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,s=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,i=typeof t.title=="string"?t.title:void 0,o=Ue(t.filters)?t.filters:void 0,l=typeof t.labelColumn=="string"?t.labelColumn:void 0,u=Ue(t.info)?t.info:void 0,h=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(y=>typeof y=="string"):void 0,p=t.readonly===!0?!0:void 0,g=Ue(t.source)&&typeof t.source.type=="string"?t.source:void 0,w=Ue(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(Qp),rows:Array.isArray(e.rows)?e.rows.filter(Ue):[],...i?{title:i}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:s??!0}:{},...o?{filters:o}:{},...l?{labelColumn:l}:{},...u?{info:u}:{},...h?{deletedColumns:h}:{},...p?{readonly:p}:{},...g?{source:g}:{},...w?{origin:w}:{}}}function Qp(e){if(!Ue(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",s=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(s=s??r,r="string");const i={field:n,label:String(t.label??n),type:r};return s&&(i.renderer=s),typeof t.script=="string"&&(i.script=t.script),t.readonly===!0&&(i.readonly=!0),i}function Bl(e){const t=new Set;for(const s of e)for(const i of Object.keys(s))t.add(i);return{columns:Array.from(t).map(s=>({field:s,label:s,type:Xp(e.map(i=>i[s]))})),rows:e}}function Xp(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Jp(n))?"date":"string"}function Jp(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function Zp(e,t,n){const r=na(t,n);return r?e.map(r):e}function Ue(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function em(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}function tm(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const nm=Object.freeze(Object.defineProperty({__proto__:null,init:Kp,isWorkspaceDump:sa,meta:Hp,parsedToTables:Gs,restoreWorkspaceDump:ia},Symbol.toStringTag,{value:"Module"})),Zi="",rm=/\uE000(\d+)\uE000/g,wo=/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)\s*$/,yo=/^(#{1,6})\s+(.*)$/,Lu=/^\s*([-*_])(\s*\1){2,}\s*$/,vo=/^\s*>/,Mu=/^\s*(?:[-*+]|\d+[.)])\s+/,sm=/^\s*\|?[\s:|-]+\|[\s:|-]*$/;function im(e){return wo.test(e)||yo.test(e)||Lu.test(e)||vo.test(e)||Mu.test(e)}function $o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function eo(e){const t=e.trim();return t===""?null:/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)?/^(https?|mailto|tel):/i.test(t)?t:null:t}function On(e){const t=[];let n=e.replaceAll(Zi,"").replace(/(`+)([\s\S]*?)\1/g,(r,s,i)=>(t.push(`<code>${$o(i)}</code>`),`${Zi}${t.length-1}${Zi}`));return n=$o(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const l=eo(i);return l===null?r:`<img src="${l}" alt="${s}"${o?` title="${o}"`:""}>`}),n=n.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const l=eo(i);return l===null?r:`<a href="${l}"${o?` title="${o}"`:""} target="_blank" rel="noopener noreferrer">${s}</a>`}),n=n.replace(/&lt;((?:https?|mailto):[^\s&]+)&gt;/g,(r,s)=>{const i=eo(s);return i===null?r:`<a href="${i}" target="_blank" rel="noopener noreferrer">${i}</a>`}),n=n.replace(/~~([\s\S]+?)~~/g,"<del>$1</del>"),n=n.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__([\s\S]+?)__/g,"<strong>$1</strong>"),n=n.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g,"$1<em>$2</em>"),n=n.replace(/(^|[\s(])_(?!\s)([^_]+?)_(?=$|[\s).,;:!?])/g,"$1<em>$2</em>"),n=n.replace(/ {2,}\n/g,`<br>
`),n.replace(rm,(r,s)=>t[Number(s)]??"")}function to(e){return e.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}const om=e=>{const t=e.startsWith(":"),n=e.endsWith(":");return t&&n?' style="text-align:center"':n?' style="text-align:right"':t?' style="text-align:left"':""};function ju(e){if(e==null)return"";const t=typeof e=="string"?e:String(e);if(t.trim()==="")return"";const n=t.replace(/\r\n?/g,`
`).split(`
`),r=[];let s=0;const i=o=>{const l=[];for(;s<n.length&&o(n[s]);)l.push(n[s++]);return l};for(;s<n.length;){const o=n[s];if(o.trim()===""){s++;continue}const l=wo.exec(o);if(l){const p=l[1].slice(0,3);s++;const g=i(y=>!y.trim().startsWith(p));s<n.length&&s++;const w=l[2]?` class="language-${l[2]}"`:"";r.push(`<pre><code${w}>${$o(g.join(`
`))}</code></pre>`);continue}const u=yo.exec(o);if(u){const p=u[1].length;r.push(`<h${p}>${On(u[2].replace(/\s+#+\s*$/,""))}</h${p}>`),s++;continue}if(Lu.test(o)){r.push("<hr>"),s++;continue}if(vo.test(o)){const p=i(g=>vo.test(g)||g.trim()!=="");r.push(`<blockquote>${ju(p.map(g=>g.replace(/^\s*>\s?/,"")).join(`
`))}</blockquote>`);continue}if(o.includes("|")&&s+1<n.length&&sm.test(n[s+1])&&n[s+1].includes("-")){const p=to(o),g=to(n[s+1]).map(om);s+=2;const w=i(x=>x.trim()!==""&&x.includes("|")),y=p.map((x,I)=>`<th${g[I]??""}>${On(x)}</th>`).join(""),$=w.map(x=>`<tr>${to(x).map((I,O)=>`<td${g[O]??""}>${On(I)}</td>`).join("")}</tr>`);r.push(`<table><thead><tr>${y}</tr></thead><tbody>${$.join("")}</tbody></table>`);continue}if(Mu.test(o)){const p=i(g=>g.trim()!==""&&!wo.test(g)&&!yo.test(g));r.push(Nu(p));continue}const h=i(p=>p.trim()!==""&&!im(p));if(h.length===0){r.push(`<p>${On(o)}</p>`),s++;continue}r.push(`<p>${On(h.join(`
`))}</p>`)}return r.join(`
`)}function Nu(e){const t=[];let n=null,r=null;for(const o of e){const l=/^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$/.exec(o);if(!l){t[t.length-1]?.text.push(o.trim());continue}const u=l[1].length;if(r??=u,u>r&&t.length>0){t[t.length-1].children.push(o.slice(Math.min(u,r+2)));continue}n??=l[3]!==void 0,t.push({text:[l[4]],children:[],indent:u})}const s=n?"ol":"ul",i=t.map(o=>`<li>${On(o.text.join(`
`))}${o.children.length>0?Nu(o.children):""}</li>`).join("");return`<${s}>${i}</${s}>`}const xo={markdownToHtml:ju},zu=Object.keys(xo),ql=new Map;function am(e){const t=ql.get(e);if(t)return t;const n=new Function("row",...zu,"easydb",`${e}
return render(row);`);return ql.set(e,n),n}function lm(){return[...zu.map(e=>xo[e]),xo]}function oa(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=am(e)}catch(r){return{ok:!1,label:"compile error",message:Hl(r)}}try{return{ok:!0,value:n(t,...lm())}}catch(r){return{ok:!1,label:"runtime error",message:Hl(r)}}}function Hl(e){return e instanceof Error?e.message:String(e)}const cm=new Set(["rowid"]);function aa(e){return cm.has(e.trim().toLowerCase())}function um(e,t){const n=e.sources[0];if(!n)return{rows:[],provenance:new Map};let s=(t[n.alias]??[]).map(h=>({[n.alias]:h}));for(let h=1;h<e.sources.length;h++){const p=e.sources[h];if(!p)continue;const g=t[p.alias]??[],w=p.join,y=[];for(const $ of s){const x=w?g.filter(I=>w.on.every(O=>hm(I.data[O.field],$[O.eqAlias]?.data[O.eqField]))):[];if(x.length>0)for(const I of x)y.push({...$,[p.alias]:I});else w?.type==="left"&&y.push({...$,[p.alias]:void 0})}s=y}const i=[],o=new Map,l=new Map,u=e.limit!=null&&e.limit>0?e.limit:1/0;for(const h of s){if(i.length>=u)break;const p=h[n.alias];if(!p)continue;const g=dm(e.columns,h);if(!fm(g,e.filters))continue;const w=l.get(p.id)??0;l.set(p.id,w+1);const y=`${p.id}#${w}`,$={};for(const[x,I]of Object.entries(h))I&&($[x]=I.id);o.set(y,$),i.push({id:y,tableId:"",data:g,updatedAt:pm(h)})}return{rows:i,provenance:o}}function dm(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const s=t[r.from.alias]?.data[r.from.field];n[r.field]=s===void 0?null:s}for(const r of e)if(r.from.kind==="script"){const s=oa(r.from.script,n);n[r.field]=s.ok?s.value:void 0}return n}function hm(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function fm(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const s=e[n];if(!(s==null?"":String(s)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function pm(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function Ys(e){const t=new Set(e.sources.map(r=>r.alias)),n=new Set;for(const r of e.columns)r.from.kind==="source"&&t.has(r.from.alias)&&n.add(r.field);return n}function Uu(e,t,n=[],r=[]){const s=Ys(e),i=new Map(n.map(p=>[p.field,p])),o=new Set(r),l=new Map;for(const p of e.columns)!o.has(p.field)&&!l.has(p.field)&&l.set(p.field,p);const u=[];for(const p of n)l.has(p.field)&&!u.includes(p.field)&&u.push(p.field);for(const p of l.keys())u.includes(p)||u.push(p);const h=[];for(const p of u){const g=l.get(p);if(!g)continue;const w=i.get(g.field);let y;if(w)y={...w};else if(g.from.kind==="source"){const $=g.from,x=(t[$.alias]??[]).find(I=>I.field===$.field);y=x?{...x,field:g.field}:{field:g.field,label:g.label??g.field,type:g.type??"string"},aa($.field)&&(y.hidden=!0)}else y={field:g.field,label:g.label??g.field,type:g.type??"string"},y.script=g.from.script;s.has(g.field)?delete y.readonly:y.readonly=!0,h.push(y)}return h}function mm(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function gm(e,t){const n=mm(e),r={},s=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],i=[];for(const o of s){const l=n.get(o.field);l&&i.push({field:l,asc:o.asc})}if(i.length>0){r.sortBy=i;const o=i[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[l,u]of Object.entries(t.filters)){const h=n.get(l);h&&u&&(o[h]=u)}Object.keys(o).length>0&&(r.filters=o)}return r}function bm(e,t){return t.get(e.tableName)}function wm(e,t){const n=new Map(t.map(i=>[i.id,i])),r=new Map;for(const i of t)r.has(i.name)||r.set(i.name,i);const s=(i,o)=>{if(o.has(i))return!0;const l=n.get(i);if(l?.source?.type!=="projection")return!1;const u=l.source.config;if(!u||!Array.isArray(u.sources))return!1;const h=new Set(o).add(i);for(const p of u.sources){const g=bm(p,r);if(g&&s(g.id,h))return!0}return!1};return s(e,new Set)}const dr=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),no=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,Kl=e=>e==="id"||e.endsWith("id");function ym(e,t){const n=dr(e.field),r=dr(t.field);if(!n||!r)return 0;const s=dr(e.table)===dr(t.table);if(n===r)return s||n==="id"?0:n.endsWith("id")?9:7;const i=(l,u,h)=>{if(l!=="id"||!h.endsWith("id")||h.length<=2)return 0;const p=h.slice(0,-2),g=dr(u);return p===g||p===no(g)||no(p)===no(g)?9:5},o=Math.max(i(n,e.table,r),i(r,t.table,n));return o>0?o:e.isPk&&Kl(r)||t.isPk&&Kl(n)?6:0}function vm(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),s=new Set(e.pks??[]),i=o=>{let l=null,u=0;for(const h of t){const p=new Set(h.pks??[]);for(const g of e.fields)for(const w of h.fields){if(o&&r.has(`${h.alias}\0${w}`))continue;const y=ym({table:e.tableName,field:g,isPk:s.has(g)},{table:h.tableName,field:w,isPk:p.has(w)});y>u&&(u=y,l={thisField:g,otherAlias:h.alias,otherField:w})}}return l};return i(!0)??i(!1)}function $m(e){const t=e.lastIndexOf("#");return t>=0?e.slice(0,t):e}function xm(e,t,n,r){const s=e.columns.find(u=>u.field===n);if(!s||s.from.kind!=="source")return null;const i=s.from.alias;if(!e.sources.some(u=>u.alias===i))return null;const o=e.sources[0]?.alias===i,l=r?.[i]??(o?$m(t):void 0);return l?{alias:i,rowId:l,field:s.from.field}:null}async function Fu(e,t,n,r){const s=n.spec.sources.map(p=>({source:p,table:r.resolve(p.tableName)}));if(s.some(p=>!p.table))return null;const i={...n.spec,sources:s.map(({source:p,table:g})=>({...p,tableName:g.name}))},o={};for(const{source:p,table:g}of s)o[p.alias]=g?.columns??[];const l=Uu(i,o,[],[]),u=Vs(r.taken,n.name),h={id:ke(),workspaceId:t,name:u,code:Le(u),columns:l,view:"table",source:{type:"projection",config:i},readonly:Ys(i).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...i.filters?{filters:i.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(h),h}const Bu="__id";function km(e){const t=[];let n="",r,s=0;for(;s<e.length;){const i=e[s],o=e[s+1];if(i==="'"||i==='"'){const l=la(e,s,i);n+=e.slice(s,l),s=l;continue}if(i==="-"&&o==="-"){let l="";for(s+=2;s<e.length&&e[s]!==`
`;)l+=e[s++];const u=/^\s*projection:\s*(.+?)\s*$/i.exec(l);u?.[1]&&n.trim()===""&&(r=u[1]);continue}if(i==="/"&&o==="*"){for(s+=2;s<e.length&&!(e[s]==="*"&&e[s+1]==="/");)s++;s+=2;continue}if(i===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,s++;continue}n+=i,s++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function la(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function Ft(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function qu(e,t){const n=[];let r=0,s="",i=0;for(;i<e.length;){const o=e[i];if(o==="'"||o==='"'){const l=la(e,i,o);s+=e.slice(i,l),i=l;continue}if(o==="("?r++:o===")"&&r--,r===0){const l=t(e,i);if(l>0){n.push(s),s="",i+=l;continue}}s+=o,i++}return n.push(s),n}function Mn(e,t){return qu(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function Hu(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return qu(e,(r,s)=>/\s/.test(r[s]??"")?n.exec(r.slice(s,s+t.length+32))?.[0].length??0:0)}function Ku(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const s=e[r];if(s==="'"||s==='"'){r=la(e,r,s)-1;continue}if(s==="(")n++;else if(s===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function Cm(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function _m(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function Sm(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=Ku(e);if(n==null)return null;const r=[];for(const s of Mn(n,",")){const i=s.trim();if(!i||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(i))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(i);if(!o?.[1])continue;const l=Ft(o[1]);if(l===Bu)continue;const u=o[2]??"",h=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(u.trim())?.[1]??"TEXT",p={field:l,label:l,type:_m(h)};/\bNOT\s+NULL\b/i.test(u)&&(p.notnull=!0),(/\bUNIQUE\b/i.test(u)||/\bPRIMARY\s+KEY\b/i.test(u))&&(p.unique=!0),r.push(p)}return{name:Ft(t[1]),columns:r,rows:[]}}function Em(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=Ft(t[1]),r=t[2]?Mn(t[2].slice(1,-1),",").map(o=>Ft(o)):[],s=[];let i=(t[3]??"").trim();for(;i.startsWith("(");){const o=Ku(i);if(o==null)break;const l=Mn(o,",").map(h=>Cm(h)),u={};l.forEach((h,p)=>{const g=r[p]??`col${p+1}`;g!==Bu&&(u[g]=h)}),s.push(u),i=i.slice(o.length+2).trim(),i.startsWith(",")&&(i=i.slice(1).trim())}return{table:n,rows:s}}function Vl(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=Ft(t[1]);return{table:n,alias:t[2]?Ft(t[2]):n}}function kr(e){return Mn(e,".").map(Ft)}function ca(e,t,n){const r=t.filter(s=>(n.get(s.tableName.toLowerCase())??[]).includes(e));return r.some(s=>s.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function Tm(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const s=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);s&&(n=Number(s[1]),t=t.slice(0,s.index));let i;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(i=o[1],t=t.slice(0,o.index));let l;const u=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return u?.[1]&&(l=u[1],t=t.slice(0,u.index)),{from:t,limit:n,orderBy:i,where:l}}function Im(e,t,n,r,s){const i=[],o=l=>l.length===2?l[0]??"":ca(l[0]??"",n,r);for(const l of Hu(e,"AND")){const u=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(l);if(!u?.[1]||!u[2]){s.push(`ON ${l.trim()}`);continue}const h=kr(u[1]),p=kr(u[2]),g=o(h)===t.alias,w=g?h:p,y=g?p:h;if(o(w)!==t.alias){s.push(`ON ${l.trim()} — neither side names ${t.alias}`);continue}i.push({field:w.length===2?w[1]??"":w[0]??"",eqAlias:y.length===2?y[0]??"":o(y),eqField:y.length===2?y[1]??"":y[0]??""})}return i}function Am(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,s=[],i=[];let o=0;for(let h=r.exec(e);h;h=r.exec(e))s.push(e.slice(o,h.index)),i.push((h[1]??"INNER").toUpperCase()),o=h.index+h[0].length;s.push(e.slice(o));const l=Vl(s[0]??"");if(!l.table)return null;const u=[{alias:l.alias,tableName:l.table}];for(let h=1;h<s.length;h++){const p=s[h]??"",g=/\s+ON\s+([\s\S]+)$/i.exec(p),w=Vl(g?p.slice(0,g.index):p);if(!w.table)continue;const y=i[h-1]??"INNER";if(y==="CROSS"||!g?.[1]){n.push(`${y} JOIN ${w.table} — no ON predicate to model`),u.push({alias:w.alias,tableName:w.table});continue}(y==="RIGHT"||y==="FULL")&&n.push(`${y} JOIN ${w.table} — imported as LEFT JOIN (the closest a projection can express)`);const $=[...u,{alias:w.alias,tableName:w.table}];u.push({alias:w.alias,tableName:w.table,join:{type:y==="INNER"?"inner":"left",on:Im(g[1],w,$,t,n)}})}return u}function Rm(e,t,n,r){const s=[];for(const i of Mn(e,",")){const o=i.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const l=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),u=(l?.[1]??o).trim(),h=kr(u),p=Ft(l?.[2]??h[h.length-1]??u);if(/^NULL$/i.test(u)){s.push({field:p,from:{kind:"script",script:Pm}});continue}h.length===2&&h[0]&&h[1]?s.push({field:p,from:{kind:"source",alias:h[0],field:h[1]}}):h.length===1&&h[0]&&/^[\w$]+$/.test(h[0])?s.push({field:p,from:{kind:"source",alias:ca(h[0],t,n),field:h[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return s}function Om(e,t){const n={};if(!e)return n;for(const r of Hu(e,"AND")){const s=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),i=s?.[1]?Vu(t.columns,kr(s[1]),t.sources,t.schema):void 0;if(!s||!i){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[i.field]=(s[2]??"").replace(/''/g,"'")}return n}function Dm(e,t){const n=[];for(const r of Mn(e??"",",")){const s=r.trim();if(!s)continue;const[i,o]=s.split(/\s+/),l=Vu(t.columns,kr(i??""),t.sources,t.schema);if(!l){t.unsupported.push(`ORDER BY ${s}`);continue}n.push({field:l.field,asc:!/^DESC$/i.test(o??"")})}return n}function Wl(e,t,n,r){const s=[],i=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(i);if(!o)return null;const{from:l,limit:u,orderBy:h,where:p}=Tm(o[3]??""),g=u??(o[1]?Number(o[1]):void 0),w=Am(l,n,s);if(!w)return null;const y=Rm(o[2]??"",w,n,s),$={columns:y,sources:w,schema:n,unsupported:s},x=Om(p,$),I=Dm(h,$),O={version:1,sources:w,columns:y};return Object.keys(x).length>0&&(O.filters=x),g!=null&&g>0&&(O.limit=g),{projection:{name:r||t,spec:O,...I.length>0?{sortBy:I}:{}},unsupported:s}}const Pm=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function Vu(e,t,n,r){const s=t.length===2?t[0]:ca(t[0]??"",n,r),i=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===s&&o.from.field===i)??e.find(o=>o.field===i)}function Qs(e){const t=new Map,n=[],r=[],s=new Map,i=o=>{s.set(o.name.toLowerCase(),o.columns.map(l=>l.field))};for(const o of km(e)){const l=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(l)){const u=Sm(l);if(!u){r.push(hr(l));continue}const h=t.get(u.name);t.set(u.name,{...u,rows:h?.rows??[]}),i(u);continue}if(/^INSERT\s+/i.test(l)){const u=Em(l);if(!u){r.push(hr(l));continue}const h=t.get(u.table);if(h)h.rows.push(...u.rows);else{const p={name:u.table,columns:Lm(u.rows),rows:u.rows};t.set(u.table,p),i(p)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(l)){const u=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(l),h=u?.[1]?Ft(u[1]):"",p=u?.[2]?Wl(u[2],h||"view",s,h):null;p?(n.push(p.projection),r.push(...p.unsupported)):r.push(hr(l));continue}if(/^SELECT\b/i.test(l)){const u=Wl(l,"",s,o.name);u?(n.push(u.projection),r.push(...u.unsupported)):r.push(hr(l));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(l)||r.push(hr(l))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function hr(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function Lm(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(i=>i[n]).filter(i=>i!=null),s=r.length===0?"string":r.every(i=>typeof i=="number")?"number":r.every(i=>typeof i=="boolean")?"boolean":"string";return{field:n,label:n,type:s}})}const Mm={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function jm(e){e.ui.registerImporter(ua),e.ui.registerDropHandler(async t=>{const n=Um(t).filter(Fm);if(n.length===0)return!1;t.preventDefault();for(const r of n)await zm(e,r);return!0})}const ua={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return Qs(await Nm(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function Nm(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${Ut(t.url)}…`):Promise.resolve(t.text??"")}function da(e){return Qs(e).projections.length>0}async function ha(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const s=Qs(t),i={tables:[],projections:[],rowCount:0,unsupported:s.unsupported},o=n.target??{kind:"new"},l=o.kind==="new"||s.tables.length===1;l||i.unsupported.push(`"Import into" was not applied — this script defines ${s.tables.length} tables, and an append/replace names only one destination`);const u=new Map;for(const y of s.tables){const $=await Au(e,y.name,(async function*(){yield{columns:y.columns,rows:y.rows}})(),{workspaceId:r,importerId:"sql",target:l?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:x=>n.editColumns(x,y.name)}:{}});$&&(u.set(y.name,$.tableName),i.tables.push($.tableName),i.rowCount+=$.rowCount)}const h=await e.store.tables.find({workspaceId:r}),p=new Map;for(const y of h)p.has(y.name)||p.set(y.name,y);const g=new Map;for(const y of h)g.has(y.name.toLowerCase())||g.set(y.name.toLowerCase(),y);const w=new Set([...h.map(y=>y.name),...i.tables]);for(const y of s.projections){const $=await Fu(e,r,y,{resolve:x=>{const I=u.get(x);return(I?p.get(I):void 0)??p.get(x)??g.get(x.toLowerCase())},taken:w});if(!$){i.unsupported.push(`projection "${y.name}" — its source tables are not in this workspace`);continue}p.set($.name,$),g.set($.name.toLowerCase(),$),w.add($.name),i.projections.push($.name)}return i}function fa(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const s=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${s}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function zm(e,t){const n=await t.text();try{if(da(n)){fa(e,await ha(e,n),t.name);return}const r=await Ws(e,ua,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=r.landed.reduce((i,o)=>i+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${s.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function Um(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}function Fm(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const Bm=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:da,init:jm,meta:Mm,reportSqlRestore:fa,restoreSqlScript:ha,sqlImporterSpec:ua},Symbol.toStringTag,{value:"Module"}));var qm=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,pa=(e,t,n,r)=>{for(var s=r>1?void 0:r?Hm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&qm(t,n,s),s};let ps=null;function Km(){return ps||(ps=document.createElement("anchored-menu"),document.body.appendChild(ps)),ps}let yn=class extends $e{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return Km().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?C`
      <div class="menu" role="menu">
        ${this.items.map(e=>C`
            <button
              role="menuitem"
              class=${e.danger?"danger":""}
              @click=${()=>this.finish(e.id)}
            >
              ${e.icon?C`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:C``}};yn.styles=[wt,Ce`
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
    `];pa([F()],yn.prototype,"items",2);pa([F()],yn.prototype,"shown",2);yn=pa([Te("anchored-menu")],yn);const Cr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return yn}},Symbol.toStringTag,{value:"Module"})),ko='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Vm={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:ko,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function Wm(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:ko,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>Gl(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:ko,keywords:["datasette","live","remote","backend"],run:t=>Gl(t)})}async function Gm(){const{registries:e}=await le();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function Gl(e,t){const n=await Gm();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const s=t?.getBoundingClientRect(),i=s?await yn.open(s,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!i)return;r=s?n.find(o=>o.id===i):n.find(o=>o.label===i)}if(r)try{await r.connect(e)}catch(s){await e.ui.dialogs.alert(s?.message??String(s),`Connect ${r.label} failed`)}}const Ym=Object.freeze(Object.defineProperty({__proto__:null,init:Wm,meta:Vm},Symbol.toStringTag,{value:"Module"}));function Yl(e,t){return JSON.stringify(t.map(n=>e[n]??null))}function Qm(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function Wu(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:s,deletedRemoteFields:i=[]}=e,o=new Set(i),l=new Set(s),u=j=>{const B={...j};for(const Y of o)delete B[Y];return B},h=new Set(t.flatMap(j=>Object.keys(j.data))),p=[...new Set(n.flatMap(j=>Object.keys(j)))].filter(j=>h.has(j)&&!o.has(j)&&!l.has(j)).sort(),w=r.length>0&&n.every(j=>Qm(j,r))?"pk":p.length>0?"content":"none";if(w==="none")return{data:n.map(u),merged:!1,strategy:w,droppedUserRows:t.filter(j=>Ql(j.data,s)).length};const y=w==="pk"?r:p,$=new Map;for(const j of t){const B=Yl(j.data,y);$.has(B)||$.set(B,j)}const x=new Set,I=n.map(j=>{const B=u(j),Y=Yl(j,y),ce=$.get(Y);if(ce){x.add(Y);for(const V of s)Object.prototype.hasOwnProperty.call(ce.data,V)&&(B[V]=ce.data[V])}return B});let O=0;for(const[j,B]of $)!x.has(j)&&Ql(B.data,s)&&(O+=1);return{data:I,merged:!0,strategy:w,droppedUserRows:O}}function Ql(e,t){return t.some(n=>{const r=e[n];return r!=null&&r!==""})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gu=Symbol.for(""),Xm=e=>{if(e?.r===Gu)return e?._$litStatic$},Xl=e=>({_$litStatic$:e,r:Gu}),Jl=new Map,Jm=e=>(t,...n)=>{const r=n.length;let s,i;const o=[],l=[];let u,h=0,p=!1;for(;h<r;){for(u=t[h];h<r&&(i=n[h],(s=Xm(i))!==void 0);)u+=s+t[++h],p=!0;h!==r&&l.push(i),o.push(u),h++}if(h===r&&o.push(t[r]),p){const g=o.join("$$lit$$");(t=Jl.get(g))===void 0&&(o.raw=o,Jl.set(g,t=o)),n=l}return e(t,...n)},Zl=Jm(C);function ec(e){return e==null||String(e).trim()===""}function Dr(e){const t=[];let n="",r=!1,s=!1,i=!1,o=!1,l=!1,u=!1,h=!0;const p=()=>{const g=i?n:n.trim();if(r||o){const w={term:g,negate:o};l&&(w.prefix=!0),u&&(w.exact=!0),t.push(w)}n="",r=!1,s=!1,i=!1,o=!1,l=!1,u=!1,h=!0};for(let g=0;g<e.length;g++){const w=e[g];if(w==='"'){if(s&&e[g+1]==='"'){n+='"',r=!0,g++;continue}s=!s,i=!0,r=!0,h=!1;continue}if(w===","&&!s){p();continue}if(w==="!"&&!s&&h&&!o&&!l&&!u){o=!0;continue}if(w==="="&&!s&&h&&!l&&!u){u=!0;continue}if(w==="^"&&!s&&h&&!l&&!u){l=!0;continue}h&&!s&&/\s/.test(w)||(h=!1),n+=w,/\s/.test(w)||(r=!0)}return p(),t}function Zm(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")}function _r(e){return e.map(t=>{const n=t.term===""&&t.negate?"":Zm(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term,r=t.exact?"=":t.prefix?"^":"";return(t.negate?"!":"")+r+n}).join(",")}function tc(e,t){const n=t.term;if(n.trim()===""||!t.prefix&&!t.exact&&n.toUpperCase()==="NULL")return ec(e);const r=String(e??"").toLowerCase(),s=n.toLowerCase();return t.exact?r===s:t.prefix?r.startsWith(s):r.includes(s)}function Os(e,t){const n=Dr(t);if(n.length===0)return!0;for(const s of n)if(s.negate&&tc(e,s))return!1;const r=n.filter(s=>!s.negate);return r.length===0?!0:r.some(s=>tc(e,s))}var eg=Object.defineProperty,tg=Object.getOwnPropertyDescriptor,qn=(e,t,n,r)=>{for(var s=r>1?void 0:r?tg(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&eg(t,n,s),s};function ro(e){return _r([{...e,negate:!1}])}let ct=class extends $e{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,s){return this.values=t,this.blanks=r,this.onChange=s??null,this.states=new Map(Dr(n??"").map(i=>[ro(i),{state:i.negate?"not":"on",token:i}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},n=ro(t),r=new Map(this.states),s=r.get(n);s===void 0?r.set(n,{state:"on",token:t}):s.state==="on"?r.set(n,{state:"not",token:s.token}):r.delete(n),this.states=r;const i=[...r.values()].map(o=>({...o.token,negate:o.state==="not"}));this.current=_r(i),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),ct.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),ct.instance===this&&(ct.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=o=>this.states.get(ro({term:o,negate:!1}))?.state,s=o=>C`
      <span class=${`cb${o?` ${o}`:""}`}
        >${o==="on"?"✓":o==="not"?"✕":""}</span
      >
    `,i=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return C`
      <header>
        <span class="mi sm">search</span>
        <input
          type="text"
          autofocus
          placeholder="Filter values…"
          .value=${this.search}
          @input=${o=>this.search=o.target.value}
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
      ${t.length===0&&!n?C`<div class="empty">No matching values.</div>`:C`<ul>
            ${n?C`
                  <li
                    class="blanks"
                    title=${i(r("NULL"))}
                    @click=${()=>this.cycle("NULL")}
                  >
                    <span class="left">
                      ${s(r("NULL"))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(o=>{const l=r(o.value);return C`
                <li title=${i(l)} @click=${()=>this.cycle(o.value)}>
                  <span class="left">
                    ${s(l)}
                    <span class="label">${o.value}</span>
                  </span>
                  <span class="count">${o.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?C`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};ct.instance=null;ct.styles=[wt,Ce`
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
    `];qn([pt({type:Array})],ct.prototype,"values",2);qn([pt({type:Number})],ct.prototype,"blanks",2);qn([pt({type:String})],ct.prototype,"current",2);qn([F()],ct.prototype,"search",2);qn([F()],ct.prototype,"states",2);ct=qn([Te("filter-popover")],ct);var ng=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,Et=(e,t,n,r)=>{for(var s=r>1?void 0:r?rg(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&ng(t,n,s),s};let ht=class extends $e{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return C`
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
        ${this.value?C`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:oe}
      </div>
      ${t?C`<ul
            class="dropdown"
            style=${n}
            @mousedown=${r=>r.preventDefault()}
          >
            ${e.map((r,s)=>C`
                <li
                  class=${s===this.highlightIdx?"highlighted":""}
                  @mousedown=${i=>i.preventDefault()}
                  @click=${()=>this.onPick(r)}
                >
                  ${r}
                </li>
              `)}
          </ul>`:oe}
    `}};ht.styles=Ce`
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
  `;Et([pt({type:String})],ht.prototype,"value",2);Et([pt({type:Array})],ht.prototype,"options",2);Et([pt({type:String})],ht.prototype,"placeholder",2);Et([F()],ht.prototype,"open",2);Et([F()],ht.prototype,"highlightIdx",2);Et([F()],ht.prototype,"dropTop",2);Et([F()],ht.prototype,"dropLeft",2);Et([F()],ht.prototype,"dropMinWidth",2);Et([F()],ht.prototype,"editing",2);Et([Lt("input")],ht.prototype,"inputEl",2);ht=Et([Te("filter-combobox")],ht);function sg(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(l=>l==="AND"||l==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(l=>l.toLowerCase())};const s=[];let i=[];for(const l of n)l==="OR"?(s.push(i),i=[]):l==="AND"||i.push(l.toLowerCase());s.push(i);const o=s.filter(l=>l.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function ig(e,t,n){const r=sg(t);if(r.kind==="boolean")return e.filter(u=>r.groups.some(h=>h.every(p=>n(u,p))));const{phrase:s,words:i}=r;if(i.length<=1)return s===""?e:e.filter(u=>n(u,s));const o=e.filter(u=>n(u,s));if(o.length>0)return o;const l=e.filter(u=>i.every(h=>n(u,h)));return l.length>0?l:e.filter(u=>i.some(h=>n(u,h)))}const og=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Ds(e,t,n){const r=new Map;for(const l of n)r.set(l.field.toLowerCase(),l.field),l.label&&r.set(l.label.toLowerCase(),l.field);const s=[...r.keys()].filter(Boolean).sort((l,u)=>u.length-l.length);let i=t;return s.length>0&&(i=i.replace(new RegExp(`(^|\\s)(${s.map(og).join("|")}):\\s+`,"gi"),"$1$2:")),ig(e,i,(l,u)=>{const h=u.indexOf(":");if(h>0){const p=r.get(u.slice(0,h));if(p)return Os(l.data[p],u.slice(h+1))}return Object.values(l.data).some(p=>p!=null&&String(p).toLowerCase().includes(u))})}const Ps="easydb:visible-count";function Yu(e,t,n){e&&document.dispatchEvent(new CustomEvent(Ps,{detail:{key:e,count:t,total:n}}))}function Qu(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const Xu="#dc2626",Ju="cell-invalid",ag=`border-color:${Xu};background:#fef2f2`;function ma(e,t){e.classList.add(Ju),e.style.border=`1px solid ${Xu}`,e.style.background="#fef2f2",t&&(e.title=t)}function lg(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return Zu(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";default:return"ok"}}const cg=/^\s*(true|1)\s*$/i,ug=/^\s*(false|0)\s*$/i;function Zu(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":cg.test(e)?"true":ug.test(e)?"false":"invalid":"invalid"}var dg=Object.defineProperty,hg=Object.getOwnPropertyDescriptor,Me=(e,t,n,r)=>{for(var s=r>1?void 0:r?hg(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&dg(t,n,s),s};const fg=200,pg=10,so=32;let Oe=class extends $e{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=this.rows.length;t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,Yu(e,t,n))}async bind(){if(!this.tableId)return;const e=await le(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(s=>{const i=s.find(o=>o.id===this.tableId);i&&(this.tableColumns=i.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(s=>{const i=s.find(o=>o.id===this.viewInstanceId);i&&(this.viewInst=i,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(s=>{const i=s.find(o=>o.id===this.tableId);i&&this.applyTable(i)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const n=e.store.rows(this.tableId);this.unsubscribe=n.subscribe(s=>this.rows=s);const r=window.setTimeout(()=>this.loading=!0,fg);try{this.rows=await n.find()}catch(s){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${s?.message??String(s)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(r),this.loading=!1}}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=sc(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const s=n[r.field];return typeof s=="number"?{...r,width:s}:r}),this.sortSpecs=sc(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await le();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const s=this.columns.find(i=>i.field===n);if(s){const i=bg(s,r,this.rows,t.id);if(i){await e.api.ui.dialogs.alert(i,`Cannot save ${s.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(i){await e.api.ui.dialogs.alert(i?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const s=String(n);return C`<input
      type="text"
      class=${Ju}
      style=${ag}
      title=${r}
      .value=${s}
      @keydown=${i=>this.cancelCellEdit(i,s)}
      @change=${i=>this.setCell(e,t.field,i.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?C`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?C``:e.type==="date"?C`${ms(t)}`:e.type==="datetime"?C`${gs(t).replace("T"," ")}`:C`${String(t)}`}renderScriptedCell(e,t){const n=oa(t.script,e.data);if(!n.ok)return C`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return C`${n.value==null?"":String(n.value)}`;const s=Xl(r);return Zl`<${s}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      @change=${this.readOnly?void 0:i=>this.setCell(e,t.field,i.detail.value)}
    ></${s}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,s=t.renderer,i=s?this.cellRenderers?.get(s):void 0;if(i){const o=Xl(i);return Zl`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        @change=${r?void 0:l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return rc(n,ms(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):C`<input
          type="date"
          .value=${ms(n)}
          @keydown=${o=>this.cancelCellEdit(o,ms(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return rc(n,gs(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):C`<input
          type="datetime-local"
          .value=${gs(n)}
          @keydown=${o=>this.cancelCellEdit(o,gs(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":{const o=n==null||n==="";return!o&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):C`<input
          type="number"
          .value=${o?"":String(n)}
          @keydown=${l=>this.cancelCellEdit(l,o?"":String(n))}
          @change=${l=>{const u=l.target.value;this.setCell(e,t.field,u===""?null:Number(u))}}
        />`}default:return C`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(n??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await le();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=this.sortSpecs.find(i=>i.field===e),r=this.sortSpecs.length===1&&this.sortSpecs[0]?.field===e;if(!t&&!r){this.sortSpecs=[{field:e,asc:!0}],await this.persistSort(this.sortSpecs);return}const s=t?this.sortSpecs.filter(i=>i.field!==e):[];n?n.asc&&s.push({field:e,asc:!1}):s.push({field:e,asc:!0}),this.sortSpecs=s,await this.persistSort(s)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await le();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}filteredRows(){const e=new Set(this.columns.filter(o=>o.filterable===!1).map(o=>o.field)),t=Object.entries(this.filters).filter(([o,l])=>l&&l.trim().length>0&&!e.has(o)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let s=this.rows;t.length>0&&(s=s.filter(o=>t.every(([l,u])=>Os(o.data[l],u))));const i=this.columns.filter(o=>o.filterable!==!1);return r&&(s=Ds(s,r,i)),n&&(s=Ds(s,n,i)),s}sortedRows(){const e=this.filteredRows();if(this.sortSpecs.length===0)return e;const t=this.sortSpecs.map(r=>({field:r.field,factor:r.asc?1:-1,type:this.columns.find(s=>s.field===r.field)?.type??"string"})),n=[...e];return n.sort((r,s)=>{for(const i of t){const o=wg(r.data[i.field],s.data[i.field],i.type,i.factor);if(o!==0)return o}return 0}),n}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=ct.instance;if(!r)return;const s=new Map;let i=0;for(const u of this.rowsFacetedFor(t)){const h=u.data[t];if(h==null||String(h).trim()===""){i++;continue}const p=String(h);s.set(p,(s.get(p)??0)+1)}let o=[...s.entries()].map(([u,h])=>({value:u,count:h})).sort((u,h)=>h.count-u.count||u.value.localeCompare(h.value));this.columns.find(u=>u.field===t)?.type==="boolean"&&(o=[...["true","false"].map(h=>({value:h,count:s.get(h)??0})),...o.filter(h=>h.value!=="true"&&h.value!=="false")]);const l=await r.open(n.getBoundingClientRect(),o,this.filters[t]??"",i,u=>this.onFilterInput(t,u));l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e&&!t.has(r));return n.length===0?this.rows:this.rows.filter(r=>n.every(([s,i])=>Os(r.data[s],i)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const n=50,r=500;for(const s of this.visibleColumns){let i=!0;for(const l of t){const u=l.data[s.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=n){i=!1;break}}if(!i)continue;const o=new Set;for(const l of this.rowsFacetedFor(s.field)){const u=l.data[s.field];if(u==null||u==="")continue;const h=typeof u=="string"?u:String(u);if(!(h.length>=n)&&(o.add(h),o.size>=r))break}e.set(s.field,[...o].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((s,i)=>{if(s.width!=null)return;const o=t[i];o&&r.set(s.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(s=>r.has(s.field)?{...s,width:r.get(s.field)}:s))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const s=o=>{if(!this.resizing)return;const l=o.clientX-this.resizing.startX,u=Math.max(pg,this.resizing.startW+l);this.columns=this.columns.map(h=>h.field===this.resizing.field?{...h,width:u}:h)},i=async()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i);const o=this.resizing?.field;if(this.resizing=null,!o)return;const l=await le();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const h of this.columns)typeof h.width=="number"&&(u[h.field]=h.width);await l.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await l.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",s),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=s?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const s=[...this.columns],i=s.findIndex(h=>h.field===n);if(i<0)return;const[o]=s.splice(i,1);let l=s.findIndex(h=>h.field===t);if(l<0){s.splice(i,0,o);return}r==="after"&&(l+=1),s.splice(l,0,o);const u=await le();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:s.map(h=>h.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:s,updatedAt:Date.now()})}async saveFilters(){const e=await le(),t={};for(const[r,s]of Object.entries(this.filters))s&&s.trim().length>0&&(t[r]=s);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+so}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),s=Math.min(e.length,r+n);return{slice:e.slice(r,s),topPad:r*t,bottomPad:(e.length-s)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:s}=this.virtualSlice(e),i=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return C`
      ${this.loading||this.externalLoading?C`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${o!=null?Math.round(o*100):oe}
          >
            <div
              class="load-bar-fill ${o!=null?"determinate":""}"
              style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:oe}
            ></div>
          </div>`:oe}
      <table style=${this.tableSizingStyle(t)??oe}>
        <colgroup>
          ${t.map(l=>C`<col style=${l.width!=null?`width: ${l.width}px`:""} />`)}
          <col style="width:${so}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(l=>{const u=l.sortable!==!1,h=l.filterable!==!1,p=this.sortSpecs.findIndex(Y=>Y.field===l.field),g=p>=0?this.sortSpecs[p]:void 0,w=g?g.asc?"asc":"desc":null,y=u?w==="asc"?"▲":w==="desc"?"▼":"⇅":"",$=this.sortSpecs.length>1&&p>=0?String(p+1):"",x=`t-${l.type}`,I=this.dragSourceField===l.field,O=this.dropTargetField===l.field,j=O&&this.dropEdge==="before"?" drop-before":O&&this.dropEdge==="after"?" drop-after":"",B=(l.description?`${l.description}
`:"")+(l.units?`Units: ${l.units}
`:"")+`${l.field} — ${u?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(h?"":" · not filterable");return C`
                <th
                  class=${`${x}${w?" sorted":""}${I?" drag-source":""}${j}${u?"":" no-sort"}`}
                  title=${B}
                  @click=${Y=>u&&this.toggleSort(l.field,Y.shiftKey)}
                  @dragover=${Y=>this.onColDragOver(Y,l.field,Y.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(l.field)}
                  @drop=${Y=>this.onColDrop(Y,l.field)}
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
                      @click=${Y=>Y.stopPropagation()}
                      @dragstart=${Y=>this.onColDragStart(Y,l.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${l.label}${l.units?C`<span class="col-units"> (${l.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true"
                      >${y}${$?C`<span class="sort-rank">${$}</span>`:oe}</span
                    >
                    ${h?C`<button
                          class=${`funnel${this.filters[l.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${l.label||l.field}`}
                          @click=${Y=>this.openFilterPicker(Y,l.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${Y=>Y.stopPropagation()}
                    @pointerdown=${Y=>this.onResizeStart(Y,l.field,Y.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${so}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(l=>{if(l.filterable===!1)return C`<th></th>`;const u=i.get(l.field)??[];return C`
                <th>
                  <filter-combobox
                    .value=${this.filters[l.field]??""}
                    .options=${u}
                    placeholder="filter…"
                    title="Filter: text = contains, ^text = starts with, !text = does not contain, NULL = empty, !NULL = has a value. Comma-separate for several values (a,b = a OR b; !a,!b excludes both); quote a value containing a comma."
                    @filter-change=${h=>this.onFilterInput(l.field,h.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${r>0?C`<tr class="spacer" style=${`height:${r}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${n.map(l=>C`
              <tr>
                ${t.map(u=>C`<td
                      class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}${gg(l,u)}`}
                      title=${mg(l,u)}
                    >
                      ${this.renderCell(l,u)}
                    </td>`)}
                <td>
                  ${this.readOnly?oe:C`<button
                        class="danger"
                        title="Delete row"
                        @click=${()=>this.deleteRow(l.id)}
                      >
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${s>0?C`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Oe.styles=[wt,Ce`
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
    `];Me([pt({type:String})],Oe.prototype,"tableId",2);Me([pt({type:String})],Oe.prototype,"viewInstanceId",2);Me([F()],Oe.prototype,"columns",2);Me([F()],Oe.prototype,"rows",2);Me([F()],Oe.prototype,"sortSpecs",2);Me([F()],Oe.prototype,"filters",2);Me([F()],Oe.prototype,"globalQuery",2);Me([F()],Oe.prototype,"localQuery",2);Me([F()],Oe.prototype,"dragSourceField",2);Me([F()],Oe.prototype,"dropTargetField",2);Me([F()],Oe.prototype,"dropEdge",2);Me([F()],Oe.prototype,"resizing",2);Me([F()],Oe.prototype,"cellRenderers",2);Me([F()],Oe.prototype,"scrollY",2);Me([F()],Oe.prototype,"viewportHeight",2);Me([F()],Oe.prototype,"loading",2);Me([F()],Oe.prototype,"externalLoading",2);Me([F()],Oe.prototype,"externalProgress",2);Me([F()],Oe.prototype,"tableReadonly",2);Oe=Me([Te("data-table")],Oe);const nc=500;function mg(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>nc?`${r.slice(0,nc)}…`:r}function gg(e,t){if(t.script)return"";const n=lg(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function bg(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(i=>i.id!==r&&i.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function ms(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function gs(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function rc(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function wg(e,t,n,r){const s=l=>l==null?0:l===""?1:2,i=s(e),o=s(t);return i!==2||o!==2?(i-o)*r:yg(e,t,n)*r}function sc(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function yg(e,t,n){switch(n){case"number":{const r=Number(e),s=Number(t);return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}case"boolean":return(e?1:0)-(t?1:0);case"date":{const r=new Date(String(e)).getTime(),s=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Ot(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}class Fe extends Error{constructor(t,n){const r=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(r),this.name="DatasetteError",this.status=n??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function ft(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[l,u]of t.searchParams)r[l]=u;let s,i=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),i=decodeURIComponent(n[n.length-2]);const l=n.slice(0,n.length-2).join("/");s=t.origin+(l?"/"+l:"")}else n.length===1&&(i=decodeURIComponent(n[0])),s=t.origin;return{base:s,db:i,table:o,query:r}}function jn(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,s]of Object.entries({...e.query,...t}))s!=null&&n.searchParams.set(r,String(s));return n.toString()}function vg(e,t){const n={};for(const[r,s]of Object.entries(e.query))r.startsWith("_")||(n[r]=s);return jn({...e,query:n},{_next:t})}function ic(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function $g(e){const t=e?.next_url??null,n=e?.next,r=n!=null&&n!==!1?String(n):null,s=Array.isArray(e?.rows)?e.rows:[],i=Array.isArray(e?.columns)?e.columns:null;return{rows:s.map(l=>Array.isArray(l)&&i?Object.fromEntries(i.map((u,h)=>[u,l[h]])):l),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:e?.truncated===!0}}function xg(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function oc(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],n=Array.isArray(e?.columns)?e.columns.slice():[],r={},s=e?.column_details;if(Array.isArray(s))for(const l of s)r[l.column??l.name]=l;else s&&typeof s=="object"&&Object.assign(r,s);for(const l of n)l in r||(r[l]={});const o=(n.length?n:Object.keys(r)).map(l=>{const u=r[l]||{},h=u.is_pk===!0||u.is_pk===1||t.includes(l),p={field:l,label:ed(l),type:xg(u.sqlite_type??u.type,l)};return(u.notnull===!0||u.notnull===1||h)&&(p.notnull=!0),h&&(p.unique=!0),(u.hidden===!0||u.hidden===1||aa(l))&&(p.hidden=!0),u.default!=null&&u.default!==""&&(p.default=u.default),p});if(t.length===0){const l=o.filter(u=>u.unique).map(u=>u.field);l.length&&t.push(...l)}return{columns:o,pks:t}}function ed(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Xs(e){const t=[],n=new Set;for(const r of e)for(const s of Object.keys(r))n.has(s)||(n.add(s),t.push(s));return t.map(r=>{const s={field:r,label:ed(r),type:kg(e.map(i=>i[r]))};return aa(r)&&(s.hidden=!0),s})}function kg(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Cg(n))?"datetime":"string"}function Cg(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function _g(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const s=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(s)?n+=s:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function Sg(e,t){return!t||t.length===0?null:t.map(n=>_g(e[n])).join(",")}function Eg(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}if(r&&typeof r=="object"&&typeof r.name=="string"){if(r.name==="_memory")continue;n.push(typeof r.route=="string"&&r.route?r.route:r.name)}}return n}function Tg(e,t){const n=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],r=[];for(const s of n){if(typeof s=="string"){r.push({db:t,table:s,count:null,hidden:!1,pks:[]});continue}s&&typeof s=="object"&&typeof s.name=="string"&&r.push({db:t,table:s.name,count:typeof s.count=="number"?s.count:null,hidden:s.hidden===!0,pks:Array.isArray(s.primary_keys)?s.primary_keys:[]})}return r}async function Pt(e,t){let n;try{n=await e(t)}catch(s){const i=s?.message||"network error";throw new Fe({error:`Couldn't reach ${t} (${i}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let s=null;try{s=await n.json()}catch{}throw new Fe(s&&typeof s=="object"?s:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(r&&r.ok===!1)throw new Fe(r,n.status);return r}async function ga(e,t){return Eg(await Pt(e,`${t}/-/databases.json`))}async function ac(e,t,n){return Tg(await Pt(e,`${t}/${encodeURIComponent(n)}.json`),n)}function Ig(e){const t=e?.views,n=[];for(const r of Array.isArray(t)?t:[]){if(typeof r=="string"){n.push(r);continue}const s=r;s&&typeof s.name=="string"&&s.hidden!==!0&&n.push(s.name)}return n}async function Ag(e,t,n){const s=`${t}/${encodeURIComponent(n)}.json?sql=${encodeURIComponent("select name, sql from sqlite_master where type='view' order by name")}&_shape=array`;let i;try{i=await Pt(e,s)}catch(h){const p=h instanceof Fe?h.message:String(h);throw new Fe({error:`Couldn't read the view definitions from "${n}". Importing views needs the SQL endpoint, which this instance may have disabled (allow_sql). Its tables can still be imported normally.

${p}`},h instanceof Fe?h.status:0)}const o=i?.rows,l=Array.isArray(i)?i:Array.isArray(o)?o:[],u=[];for(const h of l){const p=h,g=typeof p?.name=="string"?p.name:Array.isArray(h)?h[0]:void 0,w=typeof p?.sql=="string"?p.sql:Array.isArray(h)?h[1]:void 0;typeof g=="string"&&typeof w=="string"&&w.trim()&&u.push({db:n,name:g,sql:w})}return u}async function Rg(e,t){const n=t.db?[t.db]:await ga(e,t.base),r=[];for(const s of n){const i=await Pt(e,`${t.base}/${encodeURIComponent(s)}.json`);if(Ig(i).length!==0){if(i?.allow_execute_sql===!1)throw new Fe({error:`"${s}" defines views, but this instance has SQL queries disabled (allow_execute_sql), and a view's definition can only be read through them. Its tables can still be imported normally.`},403);r.push(...await Ag(e,t.base,s))}}return r}async function Js(e,t){const n=jn(t,{_extra:"column_details"}),r=await Pt(e,n);let{columns:s,pks:i}=oc(r),o=!!r&&r.column_details!=null,l=r?.count??null,u=r?.count_truncated===!0,h=r;if(s.length===0){const p=jn(t,{_extra:"columns"}),g=await Pt(e,p);({columns:s,pks:i}=oc(g)),o=!!g&&g.column_details!=null,l=g?.count??l,u=g?.count_truncated===!0||u,h=g}return{columns:s,pks:i,count:l,countTruncated:u,typed:o,raw:h}}async function Co(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await Js(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function Og(e,t,n){const r=e&&typeof e=="object"?e:{},s=t&&n&&r.databases?.[t]?.tables?.[n]||t&&n&&r.databases?.[t]?.tables?.[n.toLowerCase()]||{},i=t&&r.databases?.[t]||{},o=$=>s[$]??i[$]??r[$],l={columns:{},units:{}};typeof s.sort=="string"&&(l.sort=s.sort),typeof s.sort_desc=="string"&&(l.sortDesc=s.sort_desc),typeof s.size=="number"&&(l.size=s.size),Array.isArray(s.sortable_columns)&&(l.sortableColumns=s.sortable_columns.slice()),typeof s.label_column=="string"&&(l.labelColumn=s.label_column),s.hidden===!0&&(l.hidden=!0),typeof s.description=="string"&&(l.description=s.description),typeof s.description_html=="string"&&(l.descriptionHtml=s.description_html);const u=o("source"),h=o("source_url"),p=o("license"),g=o("license_url"),w=o("about"),y=o("about_url");if(typeof u=="string"&&(l.source=u),typeof h=="string"&&(l.sourceUrl=h),typeof p=="string"&&(l.license=p),typeof g=="string"&&(l.licenseUrl=g),typeof w=="string"&&(l.about=w),typeof y=="string"&&(l.aboutUrl=y),s.columns&&typeof s.columns=="object")for(const[$,x]of Object.entries(s.columns))typeof x=="string"&&(l.columns[$]=x);if(s.units&&typeof s.units=="object")for(const[$,x]of Object.entries(s.units))typeof x=="string"&&(l.units[$]=x);return l}const lc=new Map;async function Dg(e,t){let n=lc.get(t);return n||(n=Pt(e,`${t}/-/metadata.json`).catch(()=>({})),lc.set(t,n)),n}async function ba(e,t){const n=await Dg(e,t.base);return Og(n,t.db,t.table)}function Pg(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function wa(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(l=>{const u=e.columns[l.field],h=e.units[l.field],p=n?n.has(l.field):void 0;return u==null&&h==null&&p===void 0?l:{...l,...u!=null?{description:u}:{},...h!=null?{units:h}:{},...p!==void 0?{sortable:p}:{}}}),s=new Set(t.map(l=>l.field)),i={};e.sort&&s.has(e.sort)?(i.sortColumn=e.sort,i.sortAsc=!0):e.sortDesc&&s.has(e.sortDesc)&&(i.sortColumn=e.sortDesc,i.sortAsc=!1);const o=Pg(e);return o&&(i.info=o),e.labelColumn&&s.has(e.labelColumn)&&(i.labelColumn=e.labelColumn),{columns:r,patch:i}}function ya(e,t){if(t.length===0)return e;const n=new Map(Xs(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const s=n.get(r.field);return s&&s!=="string"?{...r,type:s}:r})}async function Pr(e,t,n={}){const r=n.maxRows??1e4,i={_size:n.pageSize??1e3,...n.extraParams||{}},o=jn(t,i);let l=n.startUrl?ic(n.startUrl,o)??n.startUrl:o;const u=[];let h=!1,p=!1,g=0,w,y;for(;l;){let $;try{$=await Pt(e,l)}catch(j){if(u.length===0&&!n.startUrl)throw j;w=j instanceof Fe&&j.status?`stopped after ${u.length} rows: HTTP ${j.status}`:`stopped after ${u.length} rows: ${j?.message??String(j)}`,p=!0,y=l;break}const x=$g($);u.push(...x.rows),h=h||x.truncated,g+=1,n.onProgress?.(u.length);const O=(x.nextUrl!=null?ic(x.nextUrl,l):null)??(x.nextToken!=null?vg(t,x.nextToken):null);O&&u.length<r&&x.rows.length>0?l=O:(p=O!=null&&x.rows.length>0,p&&(y=O??void 0),l=null)}return{rows:u,truncated:h,hasMore:p,pages:g,error:w,nextUrl:y}}function Lg(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function td(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function nd(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function Zs(e,t,n,r){let s;try{s=await e(t,{method:"POST",headers:Lg(r),body:JSON.stringify(n)})}catch(o){throw new Fe({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(s&&s.ok===!1){let o=null;try{o=await s.json()}catch{}throw new Fe(o&&typeof o=="object"?o:{error:`HTTP ${s.status} for ${t}`},s.status)}const i=await s.json();if(i&&i.ok===!1)throw new Fe(i,s.status);return i}async function cc(e,t,n,r={}){const s=await Zs(e,td(t,"insert"),{rows:n,return:!0},r.token);return Array.isArray(s?.rows)?s.rows:[]}async function Mg(e,t,n,r,s={}){const i=await Zs(e,nd(t,n,"update"),{update:r,return:!0},s.token);return i&&typeof i.row=="object"&&i.row?i.row:Array.isArray(i?.rows)&&i.rows[0]?i.rows[0]:null}async function uc(e,t,n,r={}){await Zs(e,nd(t,n,"delete"),{},r.token)}async function jg(e,t,n,r={}){const s=await Zs(e,td(t,"upsert"),{rows:n,return:!0},r.token);return Array.isArray(s?.rows)?s.rows:[]}async function Ng(e,t){const n=jn(t,{_extra:"primary_keys"}),r=await Pt(e,n);return Array.isArray(r?.primary_keys)?r.primary_keys:[]}async function rd(e,t){try{const n=await Pt(e,jn(t,{_extra:"count"}));return{count:typeof n?.count=="number"?n.count:null,truncated:n?.count_truncated===!0}}catch{return{count:null,truncated:!1}}}async function sd(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const s=await e(`${t}/-/versions.json`,r);if(s&&s.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${s.status}`};const i=await s.json(),o=i?.datasette?.version??i?.version??null;let l=null;try{l=(await(await e(`${t}/-/actor.json`,r)).json())?.actor??null}catch{}return{reachable:!0,version:o,actor:l,writable:!!(n.token&&l)}}catch(s){return{reachable:!1,version:null,actor:null,writable:!1,error:s?.message||"unreachable"}}}function Nn(e,t){return t?(n,r)=>{const s=(r??{}).headers??{};return e(n,{...r??{},headers:{...s,Authorization:`Bearer ${t}`}})}:e}function zg(e,t){const n=new Map;for(const r of e)n.has(r.name.toLowerCase())||n.set(r.name.toLowerCase(),r);return r=>n.get(`${t}/${r}`.toLowerCase())??n.get(r.toLowerCase())}async function Ug(e,t,n){const r={created:[],skipped:[],found:n.length};if(n.length===0)return r;const s=(await e.store.tables.find()).filter(l=>l.workspaceId===t),i=new Set(s.map(l=>l.name)),o=[...s];for(const l of n){const u=Qs(l.sql),h=u.projections[0];if(!h){r.skipped.push({name:l.name,reason:u.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const p=await Fu(e,t,{name:`${l.db}/${l.name}`,spec:h.spec,...h.sortBy?{sortBy:h.sortBy}:{}},{resolve:zg(o,l.db),taken:i});if(!p){const g=h.spec.sources.map(w=>w.tableName).join(", ");r.skipped.push({name:l.name,reason:`its source tables are not in this workspace (${g}) — import them first`});continue}o.push(p),i.add(p.name),r.created.push(p.name),u.unsupported.length>0&&r.skipped.push({name:l.name,reason:`imported, but part of the query was not modelled: ${u.unsupported.slice(0,2).join("; ")}`})}return r}function Fg(e,t){if(t.found===0){e.ui.dialogs.toast("That Datasette database defines no views.",{kind:"info",title:"Datasette views"});return}const n=t.skipped.length>0?` ${t.skipped.length} not fully imported: ${t.skipped.map(r=>`${r.name} — ${r.reason}`).join("; ")}`:"";if(t.created.length===0){e.ui.dialogs.toast(`No views could be imported as projections.${n}`,{kind:"warning",title:"Datasette views"});return}e.ui.dialogs.toast(`Imported ${t.created.length} of ${t.found} view${t.found===1?"":"s"} as projections.${n}`,{kind:t.skipped.length>0?"warning":"success",title:"Datasette views"})}function Bg(e,t){return`${e}/${encodeURIComponent(t.db)}/${encodeURIComponent(t.name)}`}async function id(e,t){try{return await Rg(n=>e.backend.fetch(n),ft(t))}catch(n){if(n instanceof Fe)return null;throw n}}async function od(e,t,n){const r=t.slice(0,5).map(i=>i.name).join(", "),s=await e.ui.dialogs.choice(`${n} ${t.length} view${t.length===1?"":"s"} (${r}${t.length>5?", …":""}).

A view is a query rather than stored rows, so it can come in either way.`,["As projections (live)","As tables (snapshot)"],"Datasette views");return s?s.startsWith("As projections")?"projection":"table":null}async function qg(e,t,n){const r=await id(e,t);if(!r||r.length===0)return;const s=await od(e,r,"This database also defines");s&&await ad(e,ft(t).base,r,s,n)}async function ad(e,t,n,r,s){if(r==="table"){await s(n.map(o=>Bg(t,o)));return}const i=e.workspaceId();i&&Fg(e,await Ug(e,i,n))}const Ls=e=>e.replace(/^https?:\/\//,""),mr="datasette",ld=1e4,cd=1e3,va=1e4,ud=60;function dd(e){e.ui.registerSettings(mr,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:ld,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:cd,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:va,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:ud,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function bs(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function ei(e){const[t,n,r,s]=await Promise.all([e.settings.get(mr,"maxImportRows"),e.settings.get(mr,"pageSize"),e.settings.get(mr,"connectMaxRows"),e.settings.get(mr,"retryWaitSeconds")]);return{maxImportRows:bs(t,ld,0),pageSize:bs(n,cd,1),connectMaxRows:bs(r,va,1),retryWaitSeconds:bs(s,ud,1)}}function ti(e){return e===0?Number.MAX_SAFE_INTEGER:e}function Hg(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function $a(e,t,n,r){const s={...e.info??{}};return!s.source&&!s.sourceUrl&&(s.source=`${Ls(t)}/${n}/${r}`,s.sourceUrl=Hg(t,n,r)),{...e,info:s}}function hd(e,t){if(!e.has(t))return t;for(let n=2;;n++){const r=`${t} (${n})`;if(!e.has(r))return r}}async function xa(e,t,n,r={}){if(t.db&&t.table)return[await Co(e,t)];const s=[];if(t.db){if(s.push(...await ac(e,t.base,t.db)),r.skipPicker)return s.filter(l=>!l.hidden)}else{const l=await ga(e,t.base);if(l.length===0)return[];let u=l;if(l.length>1){const h=await Rs(l.map(p=>({name:p,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${Ls(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!h)return null;u=h.map(p=>l[p])}for(const h of u)try{s.push(...await ac(e,t.base,h))}catch{}}if(s.length===0)return[];const i=new Set(s.map(l=>l.db)).size>1,o=await Rs(s.map(l=>({name:i?`${l.db}/${l.table}`:l.table,size:l.count,detail:i?void 0:l.db,hidden:l.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${Ls(t.base)}.`,confirmLabel:n});return o?o.map(l=>s[l]):null}const Kg=e=>new Promise(t=>setTimeout(t,e));function Vg(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function ka(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const Wg={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},dc="https://latest.datasette.io/fixtures/facetable";function Gg(e){dd(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>eb(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>nb(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${dc}`,"","Import from Datasette");r&&await hc(t,r)}}),e.ui.registerUrlSource({id:"datasette-views",label:"Datasette views…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette database URL — its SQL views can come in as live Projections over the tables you already imported, or as snapshot tables.

e.g. ${dc}`,"","Import Datasette views");if(r)try{const s=await id(t,r);if(!s||s.length===0){await t.ui.dialogs.alert("That Datasette database defines no views.","Datasette views");return}const i=await od(t,s,"This database defines");if(!i)return;await ad(t,ft(r).base,s,i,o=>fd(t,o,{}))}catch(s){await t.ui.dialogs.alert(s?.message??String(s),"Datasette views")}}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return Yg(r)?(t.preventDefault(),await hc(n,r,{skipViews:!0}),!0):!1})}async function hc(e,t,n={}){try{await ni(e,t,n)}catch(r){let s;r instanceof Fe?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function Yg(e){try{const t=ft(e);return!!(t.db&&t.table)}catch{return!1}}async function ni(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=await ei(e),i=ft(t),l=await xa(O=>e.backend.fetch(O),i,"Import",{skipPicker:n.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let h=0;for(const O of l){const j={base:i.base,db:O.db,table:O.table,query:{}},B=await Qg(e,r,j);if(B.skipped){h+=1;continue}u.push({tableId:B.tableId,ref:j,overwrite:B.overwrite,knownCount:O.count})}let p=0,g=0;const w=[],y=[],$=[];for(const O of u)try{const j=await Xg(e,O.tableId,O.ref,O.overwrite,O.knownCount,n,s);p+=1,g+=j.rowCount,j.error?y.push(`${O.ref.db}/${O.ref.table} (${j.error})`):(j.hasMore||j.truncated)&&w.push(`${O.ref.db}/${O.ref.table}`)}catch(j){$.push(`${O.ref.db}/${O.ref.table}: ${j?.message??String(j)}`)}const x=ti(s.maxImportRows),I=n.maxRows!=null?Math.min(n.maxRows,x):x;if(Zg(e,{imported:p,skipped:h,totalRows:g,capped:w,cap:I,partial:y,failed:$,requested:l.length}),p>0&&!n.skipViews)try{await qg(e,t,O=>fd(e,O,n))}catch{}}async function fd(e,t,n){for(const r of t)await ni(e,r,{...n,skipViews:!0})}async function Qg(e,t,n){const r=`${n.db}/${n.table}`,s={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},i=(await e.store.tables.find()).filter(h=>h.workspaceId===t),o=i.find(h=>h.name.toLowerCase()===r.toLowerCase());let l=r;if(o){const h=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!h||h==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(h==="Overwrite")return await e.store.tables.patch(o.id,{origin:s,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};l=hd(new Set(i.map(p=>p.name)),r)}const u=ke();return await e.store.tables.insert({id:u,workspaceId:t,name:l,code:Le(`${n.db}-${n.table}`),columns:[],view:"table",origin:s,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function Xg(e,t,n,r,s,i,o){const l=`${n.db}/${n.table}`,u=g=>e.backend.fetch(g),h=ti(o.maxImportRows),p=i.maxRows!=null?Math.min(i.maxRows,h):h;Ot(t,!0);try{let g=[],w=s,y=!1,$=!1,x=[];try{const me=await Js(u,n);g=me.columns,w==null&&(w=me.count,y=me.countTruncated),$=me.typed,x=me.pks??[]}catch{}if(w==null){const me=await rd(u,n);w=me.count,y=me.truncated}const I=w&&w>0&&(!y||p<=w)?Math.min(w,p):0,O=[];let j=!1,B=!1,Y=0,ce,V,R;for(;;){const me=await Pr(u,n,{maxRows:Math.max(0,p-O.length),pageSize:o.pageSize,...R?{startUrl:R}:{},onProgress:xn=>{I>0&&Ot(t,!0,Math.min(1,(O.length+xn)/I))}});if(O.push(...me.rows),j=j||me.truncated,Y+=me.pages,B=me.hasMore,ce=me.error,V=me.nextUrl,!me.error||!me.nextUrl||O.length>=p)break;const Re=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${l}" paused after ${O.length.toLocaleString()} rows (${me.error}). Datasette may be rate-limiting a large import. Wait ${Re} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Re}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Re}`)break;Ot(t,!0),e.ui.dialogs.toast(`Resuming "${l}" in ${Re}…`,{kind:"info",title:"Import paused"}),await Kg(Vg(o.retryWaitSeconds)),R=me.nextUrl,ce=void 0,V=void 0}let te=g.length===0?Xs(O):$?g:ya(g,O),ee={};try{const me=await ba(u,n),Re=wa(me,te);te=Re.columns,ee=Re.patch}catch{}ee=$a(ee,n.base,n.db,n.table);const ie=await e.store.tables.findOne(t),Q=ie?.columns??[],q=Q.length===0;let{columns:ne}=Ks(Q,te,ie?.deletedColumns),we=O;if(i.editColumns&&q){const me=await i.editColumns(ne,l);if(me===null)return{name:l,rowCount:0,hasMore:!1,truncated:!1,pages:Y,count:w,error:ce};we=Jg(we,ne,me),ne=me}const _e=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const et=ka(ce,V,O.length,w),je=x.length>0&&ie?.origin?{origin:{...ie.origin,pks:x}}:{},pe=q?{columns:ne,...ee,...je,importResume:et,updatedAt:_e}:{columns:ne,...ee.info?{info:ee.info}:{},...je,importResume:et,updatedAt:_e};await e.store.tables.patch(t,pe);const Ae=e.store.rows(t);if(r){const me=await Ae.find();await Ae.bulkRemove(me.map(Re=>Re.id))}const Ye=we.map(me=>({id:ke(),tableId:t,data:me,updatedAt:_e}));return await Ae.bulkInsert(Ye),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:Ye.length}),{name:l,rowCount:Ye.length,hasMore:B,truncated:j,pages:Y,count:w,error:ce}}finally{Ot(t,!1)}}function Jg(e,t,n){const r=na(t,n);return r?e.map(r):e}function Zg(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,s=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${s} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const i=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.capped.length} capped${i} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${s}`,{kind:"success",title:"Datasette import"})}async function eb(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await ei(e);await tb(e,n,r)}catch(r){const s=r instanceof Fe?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function tb(e,t,n){const r=ft(t.origin.url),s=p=>e.backend.fetch(p),i=ti(n.maxImportRows);Ot(t.id,!0);let o,l=[];try{let p=[],g=null,w=!1,y=!1;try{const pe=await Js(s,r);p=pe.columns,g=pe.count,w=pe.countTruncated,y=pe.typed}catch{}if(g==null){const pe=await rd(s,r);g=pe.count,w=pe.truncated}const $=g&&g>0&&(!w||i<=g)?Math.min(g,i):0,{rows:x,hasMore:I,truncated:O,error:j,nextUrl:B}=await Pr(s,r,{maxRows:i,pageSize:n.pageSize,onProgress:pe=>{$>0&&Ot(t.id,!0,Math.min(1,pe/$))}});let Y=p.length===0?Xs(x):y?p:ya(p,x),ce={};try{const pe=await ba(s,r),Ae=wa(pe,Y);Y=Ae.columns,ce=Ae.patch}catch{}ce=$a(ce,r.base,r.db,r.table);const V=t.columns.length===0,R=Ks(t.columns,Y,t.deletedColumns);l=R.newFields;const H=Date.now(),te=ka(j,B,x.length,g),ee=V?{columns:R.columns,...ce,importResume:te,updatedAt:H}:{columns:R.columns,...ce.info?{info:ce.info}:{},importResume:te,updatedAt:H};await e.store.tables.patch(t.id,ee);const ie=t.origin?.pks??[],Q=new Set(Y.map(pe=>pe.field)),q=t.columns.map(pe=>pe.field).filter(pe=>!Q.has(pe)&&!ie.includes(pe)),ne=(t.deletedColumns??[]).filter(pe=>Q.has(pe)),we=e.store.rows(t.id),_e=await we.find(),{data:et,droppedUserRows:je}=Wu({oldRows:_e.map(pe=>({data:pe.data})),freshRows:x,pks:ie,userAddedFields:q,deletedRemoteFields:ne});await we.bulkRemove(_e.map(pe=>pe.id)),await we.bulkInsert(et.map(pe=>({id:ke(),tableId:t.id,data:pe,updatedAt:H}))),o={rowCount:et.length,hasMore:I,truncated:O,error:j,droppedUserRows:je}}finally{Ot(t.id,!1)}const u=[];if(o.error)u.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const p=i<Number.MAX_SAFE_INTEGER?` at ${i.toLocaleString()}`:"";u.push(`capped${p}`)}l.length>0&&u.push(`${l.length} new column${l.length===1?"":"s"}`),o.droppedUserRows>0&&u.push(`${o.droppedUserRows} row${o.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${o.droppedUserRows===1?"it":"them"} could not be carried over`);const h=u.length?` — ${u.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${h}.`,{kind:o.error||o.hasMore||o.truncated||l.length>0||o.droppedUserRows>0?"warning":"success",title:"Refresh"}),l.length>0&&rb(t.id,r,l)}async function nb(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const s=await ei(e),i=ti(s.maxImportRows),o=ft(n.origin.url),l=$=>e.backend.fetch($),u=r.loadedRows,h=r.totalCount??null,p=h&&h>0?Math.min(h,i):0;Ot(t,!0,p>0?Math.min(1,u/p):void 0);let g=0,w;try{const $=await Pr(l,o,{startUrl:r.nextUrl,maxRows:Math.max(0,i-u),pageSize:s.pageSize,onProgress:O=>{p>0&&Ot(t,!0,Math.min(1,(u+O)/p))}});g=$.rows.length;const x=Date.now();await e.store.rows(t).bulkInsert($.rows.map(O=>({id:ke(),tableId:t,data:O,updatedAt:x}))),w={error:$.error,nextUrl:$.nextUrl};const I=ka($.error,$.nextUrl,u+g,h);await e.store.tables.patch(t,{importResume:I,updatedAt:x})}catch($){const x=$ instanceof Fe?$.message:$?.message??String($);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${x}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{Ot(t,!1)}const y=u+g;w.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${g} rows (${y} total) — interrupted again (${w.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${g} rows (${y} total).`,{kind:"success",title:"Resume import"})}function rb(e,t,n){const r=n.join(", "),s=n.length!==1,i=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${s?"s":""}: ${r}. Review, reorder or hide ${s?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:i}}))}const sb=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:ni,init:Gg,meta:Wg},Symbol.toStringTag,{value:"Module"}));var ib=Object.defineProperty,ob=Object.getOwnPropertyDescriptor,Lr=(e,t,n,r)=>{for(var s=r>1?void 0:r?ob(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&ib(t,n,s),s};const ab="https://latest.datasette.io/ephemeral";let $t=class extends $e{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),$t.instance=this}disconnectedCallback(){super.disconnectedCallback(),$t.instance===this&&($t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return C`
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
                placeholder="e.g. ${ab}"
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
    `}};$t.instance=null;$t.styles=[mt,Ce`
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
    `];Lr([F()],$t.prototype,"url",2);Lr([F()],$t.prototype,"token",2);Lr([F()],$t.prototype,"status",2);Lr([F()],$t.prototype,"statusKind",2);$t=Lr([Te("datasette-connect-dialog")],$t);class lb extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function pd(e){return`datasette:token:${e}`}function cb(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function ub(e,t,n){const r=e.source,s=r?.config??{},i={base:s.base,db:s.db,table:s.table,query:{}},o=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],l=r?.writable===!0,u=s.maxRows;let h=null;function p(){return u!=null?Promise.resolve(u):(h||(h=n?ei(n).then(R=>R.connectMaxRows):Promise.resolve(va)),h)}const g=s.pollIntervalMs??0,w=(R,H)=>t.backend.fetch(R,H);async function y(){const H=(await t.settings.findOne(pd(s.base)))?.value;return typeof H=="string"&&H.length>0?H:void 0}const $=async(R,H)=>Nn(w,await y())(R,H);function x(R){return{id:Sg(R,o)??ke(),tableId:e.id,data:R,updatedAt:Date.now()}}function I(R){if(!l)throw new lb(R)}function O(R){const H={};for(const[te,ee]of Object.entries(R))o.includes(te)||(H[te]=ee);return H}const j=new Set;let B=[],Y=!1,ce=null;function V(){return ce||(ce=(async()=>{try{const{rows:R}=await Pr($,i,{maxRows:await p()});B=R.map(x),Y=!0;for(const H of j)H(B);return B}finally{ce=null}})(),ce)}return{async find(R){const H=Y?B:await V();return!R||Object.keys(R).length===0?H:H.filter(te=>cb(te,R))},async findOne(R){return(Y?B:await V()).find(te=>te.id===R)??null},async insert(R){I("insert");const[H]=await cc($,i,[R.data]),te=x(H??R.data);return t.events.emit("row:created",{tableId:e.id,row:te}),V(),te},async bulkInsert(R){if(R.length===0)return[];I("insert");const H=await cc($,i,R.map(ee=>ee.data)),te=(H.length?H:R.map(ee=>ee.data)).map(x);return V(),te},async upsert(R){I("upsert");const[H]=await jg($,i,[R.data]),te=x(H??R.data);return V(),te},async patch(R,H){I("update");const te=H.data,ee=O(te??{}),ie=await Mg($,i,R,ee),Q=x(ie??{...te??{}});return t.events.emit("row:updated",{tableId:e.id,row:Q,prev:Q}),V(),Q},async remove(R){I("delete"),await uc($,i,R),t.events.emit("row:deleted",{tableId:e.id,rowId:R}),V()},async bulkRemove(R){if(R.length!==0){I("delete");for(const H of R)await uc($,i,H);V()}},subscribe(R){j.add(R),Y?R(B):V();let H=null;return g>0&&(H=setInterval(()=>void V(),g)),()=>{j.delete(R),H&&clearInterval(H)}},async refresh(){await V()}}}const db='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',hb={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function fb(e){dd(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:db,order:10,description:"A live, editable table on any Datasette instance",connect:t=>mb(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>pb(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>ub(t,n,e)})}async function pb(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const s=await r.find();e.ui.dialogs.toast(`Reloaded ${s.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const s=r instanceof Fe?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function mb(e){const t=$t.instance??gb(),n=(s,i)=>e.backend.fetch(s,i),r=await t.open({initialUrl:"https://datasette.io",async onTest(s,i){const o=ft(s),l=await sd(n,o.base,{token:i||void 0});if(o.db&&o.table){await Co(Nn(n,i||void 0),o);const h=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${h} — table found, signed in, read-write.`:`Reachable${h} — table found, read-only (no token / not authenticated).`}if(!l.reachable)return`Unreachable: ${l.error??"no response"}`;const u=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(s,i){const o=ft(s);o.db&&o.table&&await Co(Nn(n,i||void 0),o)}});if(r)try{await md(e,r.url,r.token)}catch(s){const i=s instanceof Fe?s.message:s?.message??String(s);await e.ui.dialogs.alert(i,"Connect Datasette failed")}}function gb(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function md(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=ft(t),i=(g,w)=>e.backend.fetch(g,w),o=Nn(i,n||void 0),l=await sd(i,s.base,{token:n||void 0});n&&await e.store.settings.upsert({name:pd(s.base),value:n});let u;try{u=await xa(o,s,"Connect")}catch(g){const w=g instanceof Fe?g.message:g?.message??String(g);throw new Error(`Couldn't read tables from ${Ls(s.base)}: ${w}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const h=[];for(const g of u){const w=await bb(e,r,s.base,g,l.writable,n);w!==null&&h.push({tableId:w,c:g})}if(h.length===0)return;const p=l.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${h.length} live table${h.length===1?"":"s"} from Datasette (${p}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:g,c:w}of h)wb(e,g,s.base,w,n)}async function bb(e,t,n,r,s,i){const o=(await e.store.tables.find()).filter(w=>w.workspaceId===t);let l=`${r.db}/${r.table}`,u=o.find(w=>{const y=w.source?.config;return w.source?.type==="datasette"&&y?.base===n&&y?.db===r.db&&y?.table===r.table});if(!u){const w=o.find(y=>y.name.toLowerCase()===l.toLowerCase());if(w){const y=await e.ui.dialogs.choice(`A table named "${l}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!y||y==="Skip")return null;y==="Overwrite"?u=w:l=hd(new Set(o.map($=>$.name)),l)}}let h=r.pks??[];if(h.length===0){const w=Nn((y,$)=>e.backend.fetch(y,$),i||void 0);try{h=await Ng(w,{base:n,db:r.db,table:r.table,query:{}})}catch{h=[]}}const p=u?.id??ke(),g={...u??{},id:p,workspaceId:t,name:l,code:Le(`${r.db}-${r.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:s,config:{base:n,db:r.db,table:r.table,pks:h}},updatedAt:Date.now()};return u?await e.store.tables.upsert(g):await e.store.tables.insert(g),p}async function wb(e,t,n,r,s){const i={base:n,db:r.db,table:r.table,query:{}},o=Nn((l,u)=>e.backend.fetch(l,u),s||void 0);try{let l=[],u=!1;try{const x=await Js(o,i);l=x.columns,u=x.typed}catch{}const{rows:h}=await Pr(o,i,{maxRows:50,pageSize:50}),p=l.length===0?Xs(h):u?l:ya(l,h);if(p.length===0)return;const g=await e.store.tables.findOne(t);if(!g)return;const w=g.source?.config?.pks??[];let y=p.map(x=>w.includes(x.field)?{...x,unique:!0,notnull:!0}:x),$={};try{const x=await ba(o,i),I=wa(x,y);y=I.columns,$=I.patch}catch{}$=$a($,i.base,r.db,r.table),await e.store.tables.patch(t,{columns:y,...$,updatedAt:Date.now()})}catch{}}const yb=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:md,init:fb,meta:hb},Symbol.toStringTag,{value:"Module"})),vb={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function $b(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:gd}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class pn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function xb(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const fc=5e4;function kb(e){return e.ok===!0&&Array.isArray(e.rows)}function Cb(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const s of["next_url","nextUrl","next"]){const i=n[s];if(typeof i!="string")continue;const o=i.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const l=new URL(o,t);if(l.origin!==r.origin)continue;return l.toString()}catch{continue}if(s==="next"&&kb(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function _b(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function gd(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",s=n.format==="json"?"json":"csv",i=new Set;let o=[],l=!1,u=null;function h($){return $.map((x,I)=>({id:`url:${I}`,tableId:e.id,data:x,updatedAt:0}))}async function p($){let x;try{x=await t.backend.fetch($)}catch(I){throw new Error(`Could not reach ${r}: ${I?.message??String(I)}`)}if(!x.ok)throw new Error(`Could not load ${r}: HTTP ${x.status} ${x.statusText}`);try{return await xu(x)}catch(I){throw new Error(`Could not read response from ${r}: ${I?.message??String(I)}`)}}async function g($){const x=Yo($);let I=await p(x);if(vu(I)){const O=$u(x);O&&(I=await p(O))}try{if(s==="json"){const O=JSON.parse(I);return{records:_b(O),nextUrl:Cb(O,x)}}return{records:Fn(I).rows,nextUrl:null}}catch(O){throw new Error(`Could not parse ${s.toUpperCase()} from ${r}: ${O?.message??String(O)}`)}}async function w(){if(!r)throw new Error("This reference table has no URL configured.");const $=[];let x=r;const I=new Set;for(;x&&$.length<fc&&!I.has(x);){I.add(x);const O=await g(x);$.push(...O.records),x=O.records.length>0?O.nextUrl:null}return $.slice(0,fc)}function y(){return u||(u=(async()=>{try{const $=await w();o=h($),l=!0;for(const x of i)x(o);return o}finally{u=null}})(),u)}return{async find($){const x=l?o:await y();return!$||Object.keys($).length===0?x:x.filter(I=>xb(I,$))},async findOne($){return(l?o:await y()).find(I=>I.id===$)??null},async insert(){throw new pn("insert")},async bulkInsert(){throw new pn("insert")},async upsert(){throw new pn("upsert")},async patch(){throw new pn("update")},async remove(){throw new pn("delete")},async bulkRemove(){throw new pn("delete")},subscribe($){return i.add($),l?$(o):y(),()=>{i.delete($)}},async refresh(){l=!1,o=[],await y()}}}const Sb=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:pn,createUrlCollection:gd,init:$b,meta:vb},Symbol.toStringTag,{value:"Module"}));function Be(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function pc(e){return`'${e.replace(/'/g,"''")}'`}function mc(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${Be(n.from.alias)}.${Be(n.from.field)}`,computed:!1}:null}function Eb(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",s=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,i=[];for(const y of e.columns)y.from.kind==="source"?i.push(`  ${Be(y.from.alias)}.${Be(y.from.field)} AS ${Be(y.field)}`):i.push(`  NULL AS ${Be(y.field)} -- computed in-app by a script; no SQL equivalent`);i.length===0&&i.push("  *");const l=[`SELECT${s!=null&&r==="top"?` TOP ${s}`:""}`,i.join(`,
`)],u=t.tableNames[n.alias]??n.tableName;l.push(`FROM ${Be(u)} AS ${Be(n.alias)}`);for(const y of e.sources.slice(1)){const $=t.tableNames[y.alias]??y.tableName;if(!y.join){l.push(`CROSS JOIN ${Be($)} AS ${Be(y.alias)}`);continue}const x=y.join.type==="inner"?"INNER JOIN":"LEFT JOIN",I=y.join.on.map(O=>`${Be(y.alias)}.${Be(O.field)} = ${Be(O.eqAlias)}.${Be(O.eqField)}`).join(" AND ");l.push(`${x} ${Be($)} AS ${Be(y.alias)} ON ${I||"1 = 1"}`)}const h=[],p=[];for(const[y,$]of Object.entries(e.filters??{})){if(!$)continue;const x=mc(e,y);if(x){if(x.computed){p.push(`-- filter on ${Be(y)} (${pc($)}) applies to a computed column; enforced in-app only`);continue}h.push(`LOWER(${x.expr}) LIKE ${pc(`%${$.toLowerCase()}%`)}`)}}h.length>0&&l.push(`WHERE ${h.join(`
  AND `)}`);const g=(t.orderBy??[]).map(y=>{const $=mc(e,y.field);return!$||$.computed?null:`${$.expr} ${y.asc?"ASC":"DESC"}`}).filter(y=>y!==null);g.length>0&&l.push(`ORDER BY ${g.join(", ")}`);const w=s==null?"":r==="limit"?`
LIMIT ${s}`:r==="fetch"?`
FETCH FIRST ${s} ROWS ONLY`:"";return`${l.join(`
`)}${w};
${p.length>0?`${p.join(`
`)}
`:""}`}const Tb={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function Ib(){}async function bd(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(l=>l.workspaceId===t),r=n.filter(l=>l.source?.type!=="projection"),s=n.filter(l=>l.source?.type==="projection"),i=Ab(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${s.length>0?` (+ ${s.length} projection${s.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const l of r){const u=await e.store.rows(l.id).find();o.push(vd(l,u),"")}if(o.push("COMMIT;",""),s.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const l of s)o.push(`-- projection: ${l.name}`,Ca(l,i)??"","")}return o.join(`
`)}function Ab(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,zn(n.code||n.name));return n=>t.get(n)??zn(Le(n))}function wd(e,t){const n=yd(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",vd(e,t),"","COMMIT;",""].join(`
`)}function yd(e,t){const n=Ca(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function Ca(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>zn(Le(o))),s={};for(const o of n.sources)s[o.alias]=r(o.tableName);const i=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return Eb(n,{tableNames:s,limitStyle:"limit",...i?{orderBy:i}:{}})}function vd(e,t){const n=zn(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(i=>`  ${Rb(i)}`)],s=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(l=>l.field)].map(l=>`"${zn(l)}"`).join(", ");for(const l of t){const u=[gc(l.id),...e.columns.map(h=>gc(l.data[h.field],h.type))];s.push(`INSERT INTO "${n}" (${o}) VALUES (${u.join(", ")});`)}}return s.join(`
`)}function Rb(e){const t=[`"${zn(e.field)}"`,Ob(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Ob(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function gc(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=Db(e);return n===null?"NULL":ws(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?ws(e.toISOString()):ws(typeof e=="string"?e:JSON.stringify(e))}function Db(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?bc(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?bc(r):null}return null}function bc(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function ws(e){return`'${e.replace(/'/g,"''")}'`}function zn(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Pb=Object.freeze(Object.defineProperty({__proto__:null,init:Ib,meta:Tb,projectionSelectBody:Ca,projectionSelectFor:yd,serializeTableAsSql:wd,serializeWorkspaceAsSql:bd},Symbol.toStringTag,{value:"Module"})),$d=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function wc(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll($d))t.add(r[2]);return[...t]}const _a=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Dn=e=>_a(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function Lb(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function Mb(e,t,n,r,s){const i=r?.type??"string",o=_a(r?.label||e),l=`class="eda-input" data-eda-row="${Dn(n)}" data-eda-field="${Dn(e)}" data-eda-type="${Dn(i)}"`,u=s?" disabled":"";let h;if(i==="boolean")h=`<input type="checkbox" ${l}${Lb(t)?" checked":""}${u} />`;else{const p=i==="number"?"number":"text",g=t==null?"":Dn(String(t));h=`<input type="${p}" ${l} value="${g}"${u} />`}return`<label class="eda-input-field" title="${o}">${h}<span class="eda-input-label">${o}</span></label>`}function jb(e,t){if(t==null||t==="")return"";const n=String(t),r=Dn(e),s=Dn(n);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${r}" data-eda-filter-value="${s}" title="Filter by ${r}: ${s}">${_a(n)}</button>`}function Nb(e,t,n,r={}){return e.replace($d,(s,i,o)=>{const l=n[o];if(!l)return"";const u=t.data[l];if(!i)return u==null?"":String(u);if(i.startsWith("filter"))return jb(l,u);const h=r.columns?.get(l),p=r.readonly===!0||!!h?.script?.trim();return Mb(l,u,t.id,h,p)})}function yc(e){return e==null||e===""}function zb(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const s=oa(r.script,e.data);n??={...e.data},n[r.field]=s.ok?s.value:`⚠ ${s.label}`}return n?{...e,data:n}:e}function Ub(e,t){return t.some(n=>n.script?.trim())?e.map(n=>zb(n,t)):e}function vc(e,t){const n=Object.entries(t).filter(([,r])=>r!=null&&String(r).trim()!=="");return n.length===0?e:e.filter(r=>n.every(([s,i])=>Os(r.data[s],i)))}function xd(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function Fb(e,t){const n=Dr(e??"");return n.some(r=>xd(r,t))||n.push({term:t,negate:!1,exact:!0}),_r(n)}function Bb(e,t){const n=Dr(e??"").filter(r=>!xd(r,t));return _r(n)}function qb(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((s,i)=>{const o=s.data[t],l=i.data[t],u=yc(o),h=yc(l);if(u||h)return u===h?0:u?1:-1;const p=Number(o),g=Number(l);return!Number.isNaN(p)&&!Number.isNaN(g)?(p-g)*r:String(o).localeCompare(String(l),void 0,{numeric:!0,sensitivity:"base"})*r})}function kd(e,t){const n=vc(e,t.filters??{}),r=vc(n,t.pillFilters??{});return qb(r,t.sortColumn,t.sortAsc??!0)}function Hb(e){return!!e&&e.trim().length>0}function Cd(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function Kb(e,t){return t==="raw"||t==="structure"?e:{...e,columns:Cd(e,t)}}function _d(e,t,n){return n==="structure"?[]:n==="raw"?t:kd(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function Sa(e,t){const n=e.columns.map(s=>s.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(s=>{const i={};for(const o of n)i[o]=s.data[o];return i})}}const Vb={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Wb(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:s}=await Xe(async()=>{const{AnchoredMenu:l}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:l}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(i,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const l=await ri(t);await t.backend.saveFile(`workspace-${r}.db.json`,l,"application/json")}else if(o==="sql"){const l=await bd(t);await t.backend.saveFile(`workspace-${r}.sql`,l,"application/sql")}}catch(l){t.ui.dialogs.toast(`Export failed: ${l.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Xe(async()=>{const{AnchoredMenu:h}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:h}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!i)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const l=await t.ui.dialogs.choice(`Export "${o.name}" as ${i.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!l)return;const u=l==="Visible Data"?"visible":l==="Raw Data"?"raw":"structure";try{const h=await t.store.rows(o.id).find(),p=Kb(o,u),g=_d(o,h,u),w=Le(o.code||o.name||"table"),y=u!=="structure"&&o.source!=null&&h.length===0;if(i==="csv")y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.csv`,ta(p,g),"text/csv");else if(i==="json"){const $=JSON.stringify(Sa(p,g),null,2);await t.backend.saveFile(`${w}.table.json`,$,"application/json")}else i==="sql"&&(y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.sql`,wd(p,g),"application/sql"))}catch(h){t.ui.dialogs.toast(`Export failed: ${h.message}`,{kind:"error",title:"Export"})}}})}async function ri(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),s=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:s};for(const o of n){const l=await e.store.rows(o.id).find();i.tables.push({name:o.name,columns:o.columns,rows:l.map(u=>u.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(i,null,2)}const Gb=Object.freeze(Object.defineProperty({__proto__:null,init:Wb,meta:Vb,serializeWorkspace:ri},Symbol.toStringTag,{value:"Module"})),Yb={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Qb="gist:",$c='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Xb(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:$c,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Xe(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(i)try{if(i==="push"||i==="pull"){const o=await r.open(s,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const l=o;i==="push"?await rw(t,l):await Ed(t,l)}else i==="share"?await tw(t):i==="view"&&await nw(t)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:$c,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Xe(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:o}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(i)try{i==="push"?await sw(t,n.tableId):i==="pull"?await iw(t,n.tableId):i==="view"&&await ow(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function Jb(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Zb(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Ea(e,r),await Ed(e))}async function Sd(e){const t=e.workspaceId();return`${Qb}${t??"default"}`}async function Mr(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const i=(await e.store.settings.findOne(await Sd(e)))?.value;if(i?.user&&i?.token){const o={user:i.user,gistId:i.gistId??"",token:i.token};return await Ea(e,o),o}return null}async function Ea(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await Sd(e),value:t})}function Zb(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const s=n.slice(0,r).trim(),i=n.slice(r+1).trim();s&&(t[s]=i)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Ta(e){const t=await Mr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function ew(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function tw(e){const t=await Mr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(ew(t)))}`,{GistShareDialog:s}=await Xe(async()=>{const{GistShareDialog:i}=await import("./gist-share-dialog-CG6j-skw.js");return{GistShareDialog:i}},[]);await s.open(r)}async function nw(e){const t=await Mr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function rw(e,t="all"){const n=await Ta(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=t!=="settings",i=t!=="data",o=(await e.store.tables.find()).filter(x=>x.workspaceId===r);if(s&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const l=1e8,u=1e7,h={},p=[],g=[];if(s)for(const x of o){const I=x.source!=null?[]:await e.store.rows(x.id).find(),O=JSON.stringify(Sa(x,I),null,2),j=`${x.name} (${(O.length/1e6).toFixed(2)} MB)`;O.length>l?p.push(j):O.length>u&&g.push(j),h[`${Le(x.name)}.table.json`]={content:O}}if(p.length>0||g.length>0){const x=[];if(p.length>0&&x.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${p.join(`
`)}`),g.length>0&&x.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${g.join(`
`)}`),!await e.ui.dialogs.confirm(`${x.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(i){const x=(await e.store.viewTemplates.find()).filter(j=>j.workspaceId===r),I=(await e.store.viewInstances.find()).filter(j=>j.workspaceId===r),O=(await e.store.settings.find()).map(j=>({name:j.name,value:j.value}));h["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:x,viewInstances:I,settings:O},null,2)}}let w;if(n.gistId){const x=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:h,description:`easyDBAccess workspace: ${r}`})});if(!x.ok)throw new Error(await Sr(x));w=await x.json()}else{const x=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:h})});if(!x.ok)throw new Error(await Sr(x));w=await x.json(),n.gistId=w.id,await Ea(e,n)}const y=w.html_url??`https://gist.github.com/${n.user}/${w.id}`,$=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${$}.  ${y}`,{kind:"success",title:"Gist sync"})}async function Ed(e,t="all"){const n=t!=="settings",r=t!=="data",s=await Ta(e);if(!s||!s.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const i=e.workspaceId();if(!i)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${s.gistId}`,{headers:{Authorization:`Bearer ${s.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Sr(o));const l=await o.json(),u=Object.entries(l.files).filter(([j])=>j.endsWith(".table.json")&&!j.startsWith("_easydb"));if(n&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const h=(await e.store.tables.find()).filter(j=>j.workspaceId===i),p=new Map(h.map(j=>[j.name.toLowerCase(),j]));let g=0;const w=[],y=new Map;if(n){const{TopProgress:j}=await Xe(async()=>{const{TopProgress:Y}=await import("./top-progress-BI3aNamK.js");return{TopProgress:Y}},[]),B=j.begin("Pulling from gist…");try{for(const[Y,[ce,V]]of u.entries())try{const R=await Ms(V),H=JSON.parse(R);if(!H.name||!Array.isArray(H.columns))throw new Error("unexpected file shape (missing name/columns)");let te;const ee=p.get(H.name.toLowerCase());if(ee){if(te=await e.store.tables.patch(ee.id,{title:H.title,columns:H.columns,..._o(H),updatedAt:Date.now()}),te.source==null){const ie=e.store.rows(ee.id),Q=await ie.find();await ie.bulkRemove(Q.map(q=>q.id))}}else te=await e.store.tables.insert({id:ke(),workspaceId:i,name:H.name,title:H.title,code:Le(H.name),columns:H.columns,view:H.view??"table",..._o(H),updatedAt:Date.now()});if(te.source==null){const ie=(H.rows??[]).map(Q=>({id:ke(),tableId:te.id,data:Q,updatedAt:Date.now()}));await e.store.rows(te.id).bulkInsert(ie)}y.set(H.name,te.id),g++}catch(R){w.push({file:ce,error:R.message})}finally{B.fraction((Y+1)/u.length)}}finally{B.done()}}let $=0,x="",I=null;const O=r?l.files["_easydb.workspace.json"]:void 0;if(O)try{const j=await Ms(O),B=JSON.parse(j),Y=B.viewTemplates??[],ce=B.viewInstances??[],V=B.settings??[];I=new Set(ce.map(H=>H.id));const R=await Ru(e.store.viewTemplates,i,Y);for(const H of ce){let te;if(H.tableName&&(te=y.get(H.tableName)??p.get(H.tableName)?.id),te??=H.tableId,!te)continue;const ee=R.get(H.templateId)??H.templateId;await e.store.viewInstances.upsert({...H,workspaceId:i,tableId:te,templateId:ee}),$++}for(const H of V)await e.store.settings.upsert(H)}catch(j){x=`Workspace metadata import failed: ${j.message}`}if(w.length>0){const j=w.map(B=>`• ${B.file}: ${B.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${g} of ${u.length} tables. ${w.length} failed:
${j}${x?`
${x}`:""}`,{kind:"warning",title:"Gist sync"})}else{const j=$>0?` (+${$} views)`:"",B=t==="settings"?`Pulled settings${j}.`:`Pulled ${g} table${g===1?"":"s"}.${j}`;e.ui.dialogs.toast(B,{kind:"success",title:"Gist sync"}),x&&e.ui.dialogs.toast(x,{kind:"warning",title:"Gist sync"})}w.length===0&&await Td(e,i,{tableNames:n?new Set([...y.keys()].map(j=>j.toLowerCase())):null,viewInstanceIds:I}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}function xc(e,t=8){const n=e.slice(0,t).map(s=>`• ${s}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function Td(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(u=>u.workspaceId===t&&!n.tableNames.has(u.name.toLowerCase())):[],s=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(u=>u.workspaceId===t&&!n.viewInstanceIds.has(u.id)):[];if(r.length===0&&s.length===0)return;const i=[];if(r.length>0&&i.push(`${r.length} table${r.length===1?"":"s"}:
`+xc(r.map(u=>u.name))),s.length>0&&i.push(`${s.length} view${s.length===1?"":"s"}:
`+xc(s.map(u=>u.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${i.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const u of s)await e.store.viewInstances.remove(u.id);const{deleteTable:l}=await Xe(async()=>{const{deleteTable:u}=await Promise.resolve().then(()=>Gd);return{deleteTable:u}},void 0);for(const u of r)await l(u.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${s.length} view${s.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function sw(e,t){const n=await Ta(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=r.source!=null?[]:await e.store.rows(t).find(),i=JSON.stringify(Sa(r,s),null,2),o={[`${Le(r.name)}.table.json`]:{content:i}},l=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!l.ok)throw new Error(await Sr(l));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function iw(e,t){const n=await Mr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`${Le(r.name)}.table.json`,i=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await Sr(i));const l=(await i.json()).files[s];if(!l){await e.ui.dialogs.alert(`No file "${s}" in the gist for this table.`,"Gist sync");return}const u=await Ms(l),h=JSON.parse(u);if(!h.name||!Array.isArray(h.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:h.title,columns:h.columns,..._o(h),updatedAt:Date.now()})).source==null){const g=e.store.rows(t),w=await g.find();await g.bulkRemove(w.map($=>$.id));const y=(h.rows??[]).map($=>({id:ke(),tableId:t,data:$,updatedAt:Date.now()}));await g.bulkInsert(y)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function ow(e,t){const n=await Mr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`file-${Le(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${s}`,"_blank","noopener")}function _o(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Ms(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function Sr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const aw=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Ms,init:Xb,load:Jb,meta:Yb,offerPrune:Td},Symbol.toStringTag,{value:"Module"})),Id="server-sync:url";function Ad(e){return`server-sync:etag:${e}`}async function Rd(e){const n=(await e.store.settings.findOne(Id))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function lw(e,t){await e.store.settings.upsert({name:Id,value:t.replace(/\/+$/,"")})}async function Od(e,t){const r=(await e.store.settings.findOne(Ad(t)))?.value;return typeof r=="string"?r:null}async function vn(e,t,n){await e.store.settings.upsert({name:Ad(t),value:n})}function si(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function kc(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Dd(e,t,n){const r=Gs(n,t),s=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of s){const l=e.store.rows(o.id),u=await l.find();await l.bulkRemove(u.map(h=>h.id)),await e.store.tables.remove(o.id)}let i=0;for(const o of r){const l=ke(),u=await e.store.tables.insert({id:l,workspaceId:t,name:o.name,code:Le(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),h=o.rows.map(p=>({id:ke(),tableId:u.id,data:p,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(h),i++}return i}const cw={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function uw(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Xe(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>Cr);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(i)try{i==="push"?await dw(t):i==="pull"&&await hw(t)}catch(o){t.ui.dialogs.toast(`${i==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function dw(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Pd(e);if(!n)return;const r=await ri(e),s=await Od(e,t),i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:i,body:r});if(o.status===412){const u=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await vn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await Ld(o));const l=si(o.headers.get("ETag"));l&&await vn(e,t,l),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function hw(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Pd(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const s=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(s.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!s.ok)throw new Error(await Ld(s));const i=si(s.headers.get("ETag")),o=await s.json(),l=await Dd(e,t,o);i&&await vn(e,t,i),e.ui.dialogs.toast(`Pulled ${l} table${l===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function Pd(e){const t=await Rd(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await lw(e,n),n.replace(/\/+$/,"")}async function Ld(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const fw=Object.freeze(Object.defineProperty({__proto__:null,init:uw,meta:cw},Symbol.toStringTag,{value:"Module"})),pw={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function mw(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const gw=Object.freeze(Object.defineProperty({__proto__:null,init:mw,meta:pw},Symbol.toStringTag,{value:"Module"}));function ii(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function oi(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function ai(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const bw={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function ww(e){customElements.get("cell-date")||customElements.define("cell-date",yw),e.ui.registerCellRenderer("date","cell-date")}class yw extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=ai({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(vw(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",ma(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:oi(n,this.pencil()));return}if(this._readonly){this.textContent=So(this._value);return}const t=document.createElement("input");t.type="date",t.value=So(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return ii(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function So(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function vw(e){return e==null||typeof e=="string"&&e.trim()===""?!1:So(e)===""}const $w=Object.freeze(Object.defineProperty({__proto__:null,init:ww,meta:bw},Symbol.toStringTag,{value:"Module"})),xw={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function kw(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",Cw),e.ui.registerCellRenderer("datetime","cell-datetime")}class Cw extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=ai({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(_w(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",ma(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:oi(n,this.pencil()));return}if(this._readonly){this.textContent=Eo(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=Eo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return ii(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Eo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function _w(e){return e==null||typeof e=="string"&&e.trim()===""?!1:Eo(e)===""}const Sw=Object.freeze(Object.defineProperty({__proto__:null,init:kw,meta:xw},Symbol.toStringTag,{value:"Module"})),Ew={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function Tw(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",Iw),e.ui.registerCellRenderer("boolean","cell-boolean")}class Iw extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const s=ai({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(s),this._editor=s;return}const t=Zu(this._value);if(t==="invalid"){const s=document.createElement("span");s.textContent=String(this._value),s.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",ma(s,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?s:oi(s,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return ii(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Aw=Object.freeze(Object.defineProperty({__proto__:null,init:Tw,meta:Ew},Symbol.toStringTag,{value:"Module"})),Rw={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function Ow(e){customElements.get("cell-color")||customElements.define("cell-color",Dw),e.ui.registerCellRenderer("color","cell-color")}class Dw extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Pw=Object.freeze(Object.defineProperty({__proto__:null,init:Ow,meta:Rw},Symbol.toStringTag,{value:"Module"})),Lw={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function Mw(e){customElements.get("cell-image")||customElements.define("cell-image",jw),e.ui.registerCellRenderer("image","cell-image")}class jw extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const s=ai({value:this._value,onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("mousedown",o=>o.preventDefault()),i.addEventListener("click",()=>this.pickFile()),r.append(s,i),this.append(r),this._editor=s;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const r=document.createElement("img");r.src=this._value,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("click",()=>this.pickFile()),t.append(s)}}this.append(this._readonly?t:oi(t,this.pencil()))}pencil(){return ii(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Nw=Object.freeze(Object.defineProperty({__proto__:null,init:Mw,meta:Lw},Symbol.toStringTag,{value:"Module"})),Md=200,jd=100;function zw(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Md||e.h<jd?null:{...e}}function js(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const Cc=640;function Ns(){return typeof window>"u"?!1:typeof window.matchMedia=="function"?window.matchMedia(`(max-width: ${Cc}px)`).matches:window.innerWidth<=Cc}function Uw(e,t,n,r){const s=r>0?r:1;return{...e,x:e.x+t/s,y:e.y+n/s}}function Fw(e,t,n,r,s,i,o){const l=s>0?s:1,u=n/l,h=r/l;let{x:p,y:g,w,h:y}=e;return t.includes("e")&&(w=Math.max(i,e.w+u)),t.includes("s")&&(y=Math.max(o,e.h+h)),t.includes("w")&&(w=Math.max(i,e.w-u),p=e.x+(e.w-w)),t.includes("n")&&(y=Math.max(o,e.h-h),g=e.y+(e.h-y)),{x:p,y:g,w,h:y}}function Bw(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:e?.smallified?{status:"smallified",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function _c(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function qw(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized",smallified:e.status==="smallified"}}const Hw="#01579b",Kw="input, textarea, select, button, a, .jsPanel-controlbar";function Sc(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(Kw))return!0;return!1}const Vw={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let io=100;function Ec(){let e=io;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return io=e+1,io}function Ww(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(n!==e&&Number(n.style.zIndex)>t)return!1;return!0}const To=new Set;function Gw(){return[...To].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function fn(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=Vw[e]??"",r.addEventListener("click",s=>{s.stopPropagation(),n()}),r}function zs(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id;let n=e.color??Hw;t.style.setProperty("--eda-panel-color",n);const r=document.createElement("div");r.className="jsPanel-hdr";const s=document.createElement("div");s.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const o=document.createElement("div");o.className="jsPanel-titlebar",o.tabIndex=-1,o.style.outline="none",o.addEventListener("pointerdown",()=>o.focus());const l=document.createElement("span");l.className="jsPanel-title",l.textContent=e.title,o.append(l);const u=document.createElement("div");u.className="jsPanel-controlbar",u.append(fn("smallify","Collapse",()=>ie("smallify")),fn("minimize","Minimize",()=>ie("minimize")),fn("maximize","Maximize",()=>t.maximize()),fn("normalize","Restore",()=>ie("normalize")),fn("close","Close",()=>t.close())),s.append(i,o,u),r.append(s);const h=document.createElement("div");h.className="jsPanel-content",h.append(e.content);const p=document.createElement("div");p.className="jsPanel-ftr",e.footerToolbar&&(p.classList.add("active"),p.append(e.footerToolbar)),t.append(r,h,p);for(const q of["n","s","e","w","ne","nw","se","sw"]){const ne=document.createElement("div");ne.className="eda-resize",ne.dataset.edge=q,t.append(ne)}if(t.style.zIndex=String(Ec()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const q=e.contentSize??{w:720,h:360};t.style.width=`${q.w}px`,t.style.height=`${q.h+r.offsetHeight+p.offsetHeight}px`}const g=e.position??"center",w=t.offsetWidth,y=e.container.clientWidth;g==="center"?(t.style.left=`${Math.max(0,(y-w)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in g?(t.style.left=`${Math.max(0,(y-w)/2)}px`,t.style.top=`${g.centerTopOffset}px`):(t.style.left=`${g.x}px`,t.style.top=`${g.y}px`);let $=Bw(e.boot),x=B(),I=null,O=null,j=null;function B(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function Y(q){t.style.left=`${q.x}px`,t.style.top=`${q.y}px`,t.style.width=`${q.w}px`,t.style.height=`${q.h}px`}function ce(){const q=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-q.x/q.scale}px, ${-q.y/q.scale}px) scale(${1/q.scale})`}function V(){const q=e.viewport?.getState()??{x:0,y:0,scale:1},ne=q.scale||1;return{x:-q.x/ne,y:-q.y/ne,w:e.container.clientWidth/ne,h:e.container.clientHeight/ne}}function R(){ce(),O??=e.viewport?.subscribe(ce)??null,!j&&typeof ResizeObserver<"u"&&(j=new ResizeObserver(ce),j.observe(e.container))}function H(){O?.(),O=null,j?.disconnect(),j=null,t.style.transform="",t.style.transformOrigin=""}function te(){const q=document.createElement("div");q.className="jsPanel-replacement",q.id=`${e.id}-min`,q.style.setProperty("--eda-panel-color",n);const ne=document.createElement("div");ne.className="jsPanel-headerlogo",ne.innerHTML=i.innerHTML;const we=document.createElement("span");return we.className="jsPanel-title",we.textContent=l.textContent,q.append(ne,we,fn("normalize","Restore",()=>{ie("normalize"),t.front()}),fn("close","Close",()=>t.close())),q.addEventListener("click",_e=>{_e.target.closest("button")||(ie("normalize"),t.front())}),q}function ee(q){switch(q==="maximized"&&$.status!=="maximized"&&H(),q==="minimized"&&$.status!=="minimized"&&(I?.remove(),I=null,t.style.display=""),$.status){case"minimized":{q==="normalized"?x=B():q==="smallified"&&(x={...x,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const ne=e.minimizeTo?document.querySelector(e.minimizeTo):null;I=te(),(ne??e.container).append(I);break}case"maximized":q==="normalized"?x=B():q==="smallified"&&(x={...x,x:t.offsetLeft,y:t.offsetTop}),R();break;case"smallified":x=B(),t.style.height=`${r.offsetHeight}px`;break;case"normalized":q==="smallified"?x={...x,x:t.offsetLeft,y:t.offsetTop}:q==="maximized"&&Ns()&&(x=V()),Y(x);break}t.dataset.status=$.status}function ie(q){const ne=$;$=_c($,q),$.status!==ne.status&&(ee(ne.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>$.status}),t.minimize=()=>ie("minimize"),t.maximize=(q,ne)=>{ie("maximize"),ne!==!0&&t.front()},t.normalize=()=>ie("normalize"),t.smallify=()=>ie("smallify"),t.front=(q,ne)=>{t.style.zIndex=String(Ec()),ne!==!1&&e.onfronted?.()},t.close=()=>{$.status!=="closed"&&($=_c($,"close"),I?.remove(),H(),To.delete(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=q=>{l.textContent=q;const ne=I?.querySelector(".jsPanel-title");ne&&(ne.textContent=q)},t.setHeaderLogo=q=>{i.innerHTML=q;const ne=I?.querySelector(".jsPanel-headerlogo");ne&&(ne.innerHTML=q)},t.setHeaderColor=q=>{n=q,t.style.setProperty("--eda-panel-color",n),I?.style.setProperty("--eda-panel-color",n)},t.centerInViewport=()=>{if($.status!=="normalized"&&$.status!=="smallified")return;const q=V(),ne=t.offsetWidth,we=t.offsetHeight;Y({x:q.x+Math.max(0,(q.w-ne)/2),y:q.y+Math.max(0,(q.h-we)/2),w:ne,h:we})},t.persistFlags=()=>qw($),t.persistRect=()=>$.status==="smallified"?{...x,x:t.offsetLeft,y:t.offsetTop}:$.status==="minimized"||$.status==="maximized"?{...x}:B(),To.add(t),t.addEventListener("pointerdown",()=>{Ww(t)||t.front()},!0);const Q=q=>{q.addEventListener("pointerdown",ne=>{if(ne.button!==0||Sc(ne)||$.status==="maximized"||$.status==="minimized")return;const we=B(),_e=e.viewport?.getState().scale??1,et=ne.clientX,je=ne.clientY;let pe=!1;const Ae=me=>{pe=!0;const Re=Uw(we,me.clientX-et,me.clientY-je,_e);t.style.left=`${Re.x}px`,t.style.top=`${Re.y}px`},Ye=()=>{q.removeEventListener("pointermove",Ae),q.removeEventListener("pointerup",Ye),q.removeEventListener("pointercancel",Ye),pe&&e.onmoved?.()};q.setPointerCapture(ne.pointerId),q.addEventListener("pointermove",Ae),q.addEventListener("pointerup",Ye),q.addEventListener("pointercancel",Ye)})};Q(o),Q(i),Q(p);for(const q of t.querySelectorAll(".eda-resize"))q.addEventListener("pointerdown",ne=>{if(ne.button!==0||$.status!=="normalized")return;const we=q.dataset.edge,_e=B(),et=e.viewport?.getState().scale??1,je=ne.clientX,pe=ne.clientY;let Ae=!1;const Ye=Re=>{Ae=!0,Y(Fw(_e,we,Re.clientX-je,Re.clientY-pe,et,Md,jd))},me=()=>{q.removeEventListener("pointermove",Ye),q.removeEventListener("pointerup",me),q.removeEventListener("pointercancel",me),Ae&&e.onresized?.()};q.setPointerCapture(ne.pointerId),q.addEventListener("pointermove",Ye),q.addEventListener("pointerup",me),q.addEventListener("pointercancel",me)});return r.addEventListener("dblclick",q=>{Sc(q)||($.status==="maximized"?ie("normalize"):t.maximize())}),$.status!=="normalized"?ee("normalized"):t.dataset.status="normalized",t}function Cs(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function Yw(e){return!!(e.source||e.origin)}const Qw="#01579b",Xw="#6d28d9";function Tc(e){return Yw(e)?Xw:Qw}const gr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',Ic={normal:`<svg ${gr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${gr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${gr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${gr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},Jw=`<svg ${gr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var Zw=Object.defineProperty,ey=Object.getOwnPropertyDescriptor,li=(e,t,n,r)=>{for(var s=r>1?void 0:r?ey(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Zw(t,n,s),s};function ty(e,t,n){(Ct.instance??ry()).show(e,t,n)}function ny(e){if(!e)return null;const t=Cs(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function ry(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let Ct=class extends $e{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),Ct.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ct.instance===this&&(Ct.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return oe;const r=n?C`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:C`${t}`;return C`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=ny(this.provenance);return C`
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
            ${n?C`<div class="kind">
                  <span class="kind-label">${n.label}</span>
                  <p class="kind-note">${n.note}</p>
                  ${n.url?C`<div class="kind-origin">
                        <a href=${n.url} target="_blank" rel="noopener noreferrer"
                          >${n.url}</a
                        >
                      </div>`:oe}
                </div>`:oe}
            ${e?.descriptionHtml?C`<div class="desc">${Pn(e.descriptionHtml)}</div>`:e?.description?C`<div class="desc">${e.description}</div>`:oe}
            ${t?C`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:oe}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?C`<p class="empty">No additional information.</p>`:oe}
          </div>
        </form>
      </dialog>
    `}};Ct.instance=null;Ct.styles=[mt,Ce`
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
    `];li([F()],Ct.prototype,"name",2);li([F()],Ct.prototype,"info",2);li([F()],Ct.prototype,"provenance",2);Ct=li([Te("table-info-dialog")],Ct);const sy=.25,iy=4;function oy(e){return Math.min(iy,Math.max(sy,e))}function Ac(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const fr={x:0,y:0,scale:1};function Rc(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function ay(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function ly(e,t){let n={...fr};t.style.transformOrigin="0 0";const r=new Set,s=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const Q of r)Q({...n})};let i="none",o={...fr},l=0,u=0,h=0,p=0,g=0,w=0;const y=(Q,q)=>{const ne=e.getBoundingClientRect();return{x:Q-ne.left,y:q-ne.top}},$=Q=>{if(Q.touches.length===2){i="pinch",o={...n};const[q,ne]=[Q.touches[0],Q.touches[1]];h=Rc(q,ne)||1;const we=y((q.clientX+ne.clientX)/2,(q.clientY+ne.clientY)/2);p=(we.x-n.x)/n.scale,g=(we.y-n.y)/n.scale,Q.preventDefault();return}if(Q.touches.length===1&&!ay(Q.target)){const q=Q.timeStamp;if(q-w<300){n={...fr},s(),w=0,i="none",Q.preventDefault();return}w=q,i="pan",o={...n},l=Q.touches[0].clientX,u=Q.touches[0].clientY}else i="none"},x=Q=>{if(i==="pan"&&Q.touches.length===1){const q=Q.touches[0];n=Ac(o,q.clientX-l,q.clientY-u),s(),Q.preventDefault()}else if(i==="pinch"&&Q.touches.length>=2){const[q,ne]=[Q.touches[0],Q.touches[1]],we=oy(o.scale*(Rc(q,ne)/h)),_e=y((q.clientX+ne.clientX)/2,(q.clientY+ne.clientY)/2);n={x:_e.x-p*we,y:_e.y-g*we,scale:we},s(),Q.preventDefault()}},I=Q=>{Q.touches.length===0?i="none":Q.touches.length===1&&i==="pinch"&&(i="pan",o={...n},l=Q.touches[0].clientX,u=Q.touches[0].clientY)};let O=!1,j={...fr},B=0,Y=0,ce=!1;const V=(Q,q)=>{const ne=e.getBoundingClientRect();return Q>=ne.left&&Q<=ne.right&&q>=ne.top&&q<=ne.bottom},R=Q=>{if(!O)return;const q=Q.clientX-B,ne=Q.clientY-Y;!ce&&Math.hypot(q,ne)<4||(ce=!0,document.body.style.cursor="grabbing",n=Ac(j,q,ne),s(),Q.preventDefault())},H=()=>{O&&(O=!1,document.body.style.cursor="",window.removeEventListener("mousemove",R,!0),window.removeEventListener("mouseup",te,!0))};function te(){H()}const ee=Q=>{Q.button===2&&V(Q.clientX,Q.clientY)&&(O=!0,ce=!1,j={...n},B=Q.clientX,Y=Q.clientY,window.addEventListener("mousemove",R,!0),window.addEventListener("mouseup",te,!0))},ie=Q=>{ce&&(Q.preventDefault(),ce=!1)};return e.addEventListener("touchstart",$,{passive:!1}),e.addEventListener("touchmove",x,{passive:!1}),e.addEventListener("touchend",I),e.addEventListener("touchcancel",I),window.addEventListener("mousedown",ee,!0),window.addEventListener("contextmenu",ie,!0),{snapshot:()=>({...n}),reset:()=>{n={...fr},s()},restore:Q=>{n={...Q},s()},subscribe:Q=>(r.add(Q),()=>r.delete(Q)),dispose:()=>{e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",x),e.removeEventListener("touchend",I),e.removeEventListener("touchcancel",I),window.removeEventListener("mousedown",ee,!0),window.removeEventListener("contextmenu",ie,!0),H()}}}const ys=new Map;function jr(e,t){const r=(ys.get(e)??Promise.resolve()).then(t,t);return ys.set(e,r),r.finally(()=>{ys.get(e)===r&&ys.delete(e)}),r}let oo=0;function Nd(){return oo=Math.max(Date.now(),oo+1),oo}const ci=new Map;function zd(e,t){ci.set(e,t)}function ui(e){ci.delete(e)}function cy(e){return ci.has(e)}function uy(e){try{ci.get(e)?.()}catch{}}const Jt=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function dy(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let Oc=!1;async function hy(){Oc||(Oc=!0,document.addEventListener("easydb:restack-windows",()=>void Dc())),await Dc()}async function Dc(){if(Jt)return;const e=await le();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),s=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],i=dy(s);if(t<12&&!i.every(o=>cy(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of i)uy(o);return}}const fy=12;function py(e,t,n,r,s=fy){const i=Pc(e.x,t.x,t.w,n,e.scale,s),o=Pc(e.y,t.y,t.h,r,e.scale,s);return i===e.x&&o===e.y?null:{...e,x:i,y:o}}function Pc(e,t,n,r,s,i){const o=t*s+e,l=n*s,u=o+l,h=r-i*2;return l>=h?o<=i&&u>=r-i?e:i-t*s:o<i?i-t*s:u>r-i?r-i-l-t*s:e}function Ud(e){if(e.status==="minimized"&&e.normalize(),Ns()){e.status!=="maximized"&&e.maximize(),e.front();return}e.status!=="maximized"&&my(e),e.front()}function my(e){const t=Er(),n=document.getElementById("easydb-panels");if(!t||!n)return;const r=py(t.snapshot(),{x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight},n.clientWidth,n.clientHeight);r&&t.restore(r)}var gy=Object.defineProperty,by=Object.getOwnPropertyDescriptor,Nr=(e,t,n,r)=>{for(var s=r>1?void 0:r?by(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&gy(t,n,s),s};let $n=class extends $e{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return C`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return C`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};$n.styles=[wt,Ce`
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
    `];Nr([pt({type:String})],$n.prototype,"tableId",2);Nr([F()],$n.prototype,"query",2);Nr([F()],$n.prototype,"open",2);Nr([Lt("input")],$n.prototype,"inputEl",2);$n=Nr([Te("panel-search")],$n);var wy=Object.defineProperty,yy=Object.getOwnPropertyDescriptor,Hn=(e,t,n,r)=>{for(var s=r>1?void 0:r?yy(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&wy(t,n,s),s};let Zt=class extends $e{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await le();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(s){console.error(`[table-button:${e.id}]`,s)}}}async connectedCallback(){super.connectedCallback();const e=await le();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await le();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await le(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=vy(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return C`
      ${this.table?.readonly?oe:C`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>C`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?C`<span class="icon-svg">${Ho(e.icon)}</span>`:C`<span class="mi sm">${e.icon}</span>`:C`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Zt.styles=[wt,Ce`
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
    `];Hn([pt({type:String})],Zt.prototype,"tableId",2);Hn([pt({type:Boolean})],Zt.prototype,"active",2);Hn([F()],Zt.prototype,"rowCount",2);Hn([F()],Zt.prototype,"tableButtons",2);Hn([F()],Zt.prototype,"table",2);Zt=Hn([Te("panel-footer")],Zt);function vy(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function ao(e){return e.title?.trim()?e.title.trim():e.name}function $y(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function xy(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const _t=new Map,Fd=new Set;let Lc=!1,Bd=null;function Er(){return Bd}function Tr(){return{getState:()=>Er()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>Er()?.subscribe(e)??(()=>{})}}async function qd(){const e=await le();await Promise.all([..._t.keys()].map(t=>_s(t,e)))}function Hd(e){const t=_t.get(e);return t?(Ud(t),!0):(ky(e),!0)}async function ky(e){const t=await le(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Kd(e){const t=await le();await Iy(e,t)}async function Vd(){if(Lc)return;Lc=!0;const e=await le(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){Bd=ly(t,n);const s=()=>xy(t);s(),window.addEventListener("resize",s);const i=document.querySelector("app-shell")?.shadowRoot,o=i?.querySelector("header"),l=i?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||l)){const u=new ResizeObserver(s);o&&u.observe(o),l&&u.observe(l)}}const r=(await e.store.tables.find()).filter(s=>s.workspaceId===e.workspaceId);r.sort(js);for(const s of r)s.windowGeometry?.closed||Mc(s,e);e.store.tables.subscribe(s=>{const i=s.filter(u=>u.workspaceId===e.workspaceId),o=new Map(i.map(u=>[u.id,u]));for(const[u,h]of _t){const p=o.get(u);if(!p||p.windowGeometry?.closed){_t.delete(u),ui(u),Fd.add(u);try{h.status!=="closed"&&h.close()}catch{}}}const l=i.filter(u=>!_t.has(u.id)&&!u.windowGeometry?.closed).sort(js);for(const u of l)Mc(u,e)}),hy()}const Io=720,Ao=360;function Mc(e,t){const n=`panel-${Wd(e.id)}`,r=$y(),s=zw(e.windowGeometry),i=Jt||s?.minimized===!0,o=()=>{const ee=document.createElement("data-table");return ee.tableId=e.id,ee.style.height="100%",ee},l=i?document.createElement("div"):o();let u=i?null:l,h=ao(e),p=-1,g=-1;const w=()=>{B.setHeaderTitle(h+Qu(p,g))},y=ee=>{const ie=ee.detail;ie.key===e.id&&(p=ie.count,g=ie.total,w())};document.addEventListener(Ps,y);const $=()=>{O.active=!1,u?.remove(),u=null},x=()=>{if(u)return;const ee=document.getElementById(n)?.querySelector(".jsPanel-content");if(!ee)return;ee.replaceChildren();const ie=o();ee.appendChild(ie),u=ie,O.active=!0},I=document.createElement("panel-search");I.tableId=e.id;const O=document.createElement("panel-footer");O.tableId=e.id,O.active=!i;const j=async()=>{document.removeEventListener(Ps,y);const ee=_t.get(e.id)?.persistRect();_t.delete(e.id),ui(e.id),!Fd.delete(e.id)&&await jr(`table:${e.id}`,async()=>{const ie=await t.store.tables.findOne(e.id);if(!ie)return;const Q=ie.windowGeometry??{...ee??{x:60,y:60,w:Io,h:Ao},z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...Q,closed:!0},updatedAt:Date.now()})})},B=zs({id:n,container:r,title:h,logo:Ic[Cs(e)],color:Tc(e),content:l,footerToolbar:O,...s?{panelSize:{w:s.w,h:s.h},position:{x:s.x,y:s.y}}:{contentSize:{w:Io,h:Ao},position:_y()},minimizeTo:"#easydb-minimized-dock",viewport:Tr(),boot:{minimized:i,maximized:!Jt&&s?.maximized===!0,smallified:!Jt&&s?.smallified===!0},onmoved:()=>void _s(e.id,t),onresized:()=>void _s(e.id,t),onfronted:()=>void Ey(e.id,t),onstatuschange:ee=>{ee.status==="minimized"?$():(ee.status==="normalized"||ee.status==="maximized")&&x(),_s(e.id,t)},onclosed:()=>void j()});_t.set(e.id,B),zd(e.id,()=>B.front(void 0,!1));const ce=document.getElementById(n)?.querySelector(".jsPanel-controlbar");ce&&ce.prepend(I);let V=null;const R=document.createElement("button");R.type="button",R.title="Table info",R.setAttribute("aria-label","Table info"),R.className="eda-info-btn",R.textContent="ⓘ",R.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",R.addEventListener("click",ee=>{ee.stopPropagation(),V&&ty(h,V.info??{},{source:V.source,origin:V.origin})}),ce?.prepend(R);const H=ee=>{V=ee??null;const ie=!!(ee?.info||ee?.source||ee?.origin);R.style.display=ie?"inline-flex":"none"};H(e);let te=Cs(e);t.store.tables.subscribe(ee=>{const ie=ee.find(q=>q.id===e.id);if(!ie)return;H(ie),ao(ie)!==h&&(h=ao(ie),w());const Q=Cs(ie);Q!==te&&(te=Q,B.setHeaderLogo(Ic[Q]),B.setHeaderColor(Tc(ie)))})}let Cy=0;function _y(){const e=Cy++;return{x:40+e%8*30,y:80+e%8*30}}function _s(e,t){return jr(`table:${e}`,()=>Sy(e,t))}async function Sy(e,t){const n=_t.get(e),r=n??document.getElementById(`panel-${Wd(e)}`);if(!r)return;const s=n?.persistFlags()??{minimized:!1,maximized:!1,smallified:!1},i=n?.persistRect()??{x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight};try{const l=(await t.store.tables.findOne(e))?.windowGeometry,u=Jt?l?.minimized??!1:s.minimized,h=Jt?l?.maximized??!1:s.maximized,p=Jt?l?.smallified??!1:s.smallified,g={...i,z:l?.z??0,minimized:u,maximized:h,smallified:p};await t.store.tables.patch(e,{windowGeometry:g,updatedAt:Date.now()})}catch{}}function Ey(e,t){return jr(`table:${e}`,()=>Ty(e,t))}async function Ty(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{..._t.get(e)?.persistRect()??{x:0,y:0,w:Io,h:Ao},z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:Nd()},updatedAt:Date.now()})}catch{}}async function Iy(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),s=await r.find();await r.bulkRemove(s.map(i=>i.id))}await t.store.tables.remove(e)}function Wd(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Ay(e){if(!(e instanceof Node))return null;for(const[t,n]of _t)if(n.contains(e))return t;return null}const Gd=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:Jt,currentPanZoom:Er,deleteTable:Kd,focusTableWindow:Hd,initWindowManager:Vd,persistTablePanelGeometry:qd,shellViewport:Tr,tableIdAtNode:Ay},Symbol.toStringTag,{value:"Module"})),Ry=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Yd(e){return Ry.test(e)}function Oy(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function Dy(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return Oy(e.replace(/<[^>]*>/g,""))}function Py(e){return(Yd(e)?Dy(e):e).replace(/\s+/g," ").trim()}const Ly={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let Ro=30;async function jc(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(Ro=Math.floor(t))}function My(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",jy),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),jc(e),e.events.on("app:ready",()=>void jc(e))}function Nc(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let zc=0;class jy extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText="color:#9ca3af;cursor:text",o.textContent="empty",o.title="Click to edit the HTML",o.addEventListener("click",()=>this.openEditor()),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=Py(this._value);n.textContent=r.length>Ro?r.slice(0,Ro)+"…":r,n.title="Click to edit the HTML",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const s=document.createElement("span");s.style.cssText="flex:1 1 auto";const i=document.createElement("button");i.type="button",i.title="Open the HTML in a window",i.setAttribute("aria-label","Open the HTML in a window"),i.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',i.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",i.addEventListener("mouseenter",()=>i.style.color="#4b5563"),i.addEventListener("mouseleave",()=>i.style.color="#9ca3af"),i.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,s,i),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",Yd(this._value))t.innerHTML=this._value;else{const n=document.createElement("pre");n.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",n.textContent=this._value,t.append(n)}zs({id:`easydb-html-popup-${++zc}`,container:Nc(),title:this._label,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},boot:{maximized:Ns()},minimizeTo:"#easydb-minimized-dock",viewport:Tr()})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const n=document.createElement("textarea");n.value=this._value,n.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const r=document.createElement("div");r.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const s=document.createElement("button");s.type="button",s.textContent="Cancel",s.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const i=document.createElement("button");i.type="button",i.textContent="Save",i.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",r.append(s,i),t.append(n,r);const o=zs({id:`easydb-html-edit-${++zc}`,container:Nc(),title:`Edit ${this._label}`,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:"center",boot:{maximized:Ns()},minimizeTo:"#easydb-minimized-dock",viewport:Tr()});s.addEventListener("click",()=>o.close()),i.addEventListener("click",()=>{this._value=n.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:n.value},bubbles:!0,composed:!0})),o.close(),this.render()}),n.addEventListener("keydown",l=>{l.key==="Enter"&&(l.ctrlKey||l.metaKey)?(l.preventDefault(),i.click()):l.key==="Escape"&&(l.preventDefault(),o.close())}),setTimeout(()=>n.focus(),0)}}const Ny=Object.freeze(Object.defineProperty({__proto__:null,init:My,meta:Ly},Symbol.toStringTag,{value:"Module"})),zy={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function Uy(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",Fy),e.ui.registerCellRenderer("html","html-render-cell")}class Fy extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let n=!1;const r=()=>{n||(n=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",r),t.addEventListener("keydown",s=>{s.key==="Enter"?(s.preventDefault(),t.blur()):s.key==="Escape"&&(s.preventDefault(),n=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const By=Object.freeze(Object.defineProperty({__proto__:null,init:Uy,meta:zy},Symbol.toStringTag,{value:"Module"})),qy={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function Hy(e){customElements.get("cell-link")||customElements.define("cell-link",Ky),e.ui.registerCellRenderer("link","cell-link")}class Ky extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:Vy(t),r=!this._editing&&!n?Wy(t):null,s=!this._editing&&!n&&!r?Gy(t):null;if(n||r||s){const i=document.createElement("span");i.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const l=document.createElement("button");l.type="button",l.title="Edit",l.textContent="✎",l.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",l.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),i.append(o,l),this.append(i)}else{const i=document.createElement("input");i.type="text",i.value=this.rawValue,i.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",i.addEventListener("change",()=>{this._editor===i&&this.commit(i.value)}),i.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(i.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),i.addEventListener("blur",()=>{this._editor===i&&this.commit(i.value)}),this.append(i),this._editor=i,this._editing&&setTimeout(()=>{i.focus(),i.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Vy(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Wy(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Gy(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),s=t.startsWith("+");return!r&&!s&&n.length<10?null:t}const Yy=Object.freeze(Object.defineProperty({__proto__:null,init:Hy,meta:qy},Symbol.toStringTag,{value:"Module"})),wr={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, html-preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},Qy=120,Qd=50,Xy=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,Jy=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function Xd(e){return/^https?:\/\/\S+$/i.test(e)}function Zy(e){return/^data:image\//i.test(e)?!0:Xd(e)&&Xy.test(e)}function Jd(e,t){if(e!=="string")return;const n=[];for(const s of t){if(s==null)continue;const i=typeof s=="string"?s.trim():String(s).trim();i&&n.push(i)}if(n.length===0)return;if(n.every(Zy))return"image";if(n.every(Xd))return"link";if(n.some(s=>Jy.test(s))||n.reduce((s,i)=>s+i.length,0)/n.length>Qy)return"html-preview"}function Ia(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=Jd(n.type,t.map(s=>s[n.field]));return r?{...n,renderer:r}:n})}function ev(e){e.events.on("import:after",({tableId:t})=>{tv(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:wr.name}),null;const s=(await t.store.rows(r).find()).slice(0,Qd);if(s.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:wr.name}),null;const i=n.map(({renderer:u,...h})=>h),o=Ia(i,s.map(u=>u.data)),l=o.filter((u,h)=>u.renderer!==n[h]?.renderer).length;return t.ui.dialogs.toast(l===0?"No renderer fits these values — columns left as they are.":`Set ${l} renderer${l===1?"":"s"}. Press Save to keep them.`,{kind:l===0?"info":"success",title:wr.name}),o}})}async function tv(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(i=>i.renderer))return;const r=(await e.store.rows(t).find()).slice(0,Qd);if(r.length===0)return;const s=Ia(n.columns,r.map(i=>i.data));if(s.every((i,o)=>i.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:s,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:wr.id,phase:"runtime",error:n})}}const nv=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:Jd,init:ev,meta:wr,withInferredRenderers:Ia},Symbol.toStringTag,{value:"Module"})),rv={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function sv(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Kd(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const iv=Object.freeze(Object.defineProperty({__proto__:null,init:sv,meta:rv},Symbol.toStringTag,{value:"Module"})),ov={id:"table-copy",name:"Copy Table",type:"ui",version:"0.1.0",description:"Adds a Copy button to each table window: duplicate it as-is, or snapshot its Raw / Visible data into a new plain table. Works on projections too — that is how you freeze one.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/table-copy.ts"};function av(e){e.ui.registerTableButton({id:"table-copy:copy",label:"Copy",icon:"content_copy",tooltip:"Copy this table — as a duplicate, or as a snapshot of its data",onClick:(t,{tableId:n})=>void cv(t,n)})}function lv(e,t){const n=e.source?.type==="projection";if(t==="duplicate")return n?"a second projection over the same sources (still live)":e.source?"another connection to the same source (still live)":"a full copy of its columns and rows";const r=t==="raw"?"every column and row":"the visible columns and filtered rows";return e.source?`a plain table holding ${r} as they are right now`:`a plain table holding ${r}`}async function cv(e,t){const n=await e.store.tables.findOne(t);if(!n)return;const r=await e.ui.dialogs.choice(`Copy "${n.name}" — what should the copy contain?`,["Duplicate","Raw Data","Visible Data"],"Copy table");if(!r)return;const s=r==="Duplicate"?"duplicate":r==="Raw Data"?"raw":"visible";try{const i=await Zd(e,n,s);e.ui.dialogs.toast(`Copied "${n.name}" to "${i.name}" — ${lv(n,s)}.`,{kind:"success",title:"Copy table"})}catch(i){e.ui.dialogs.toast(`Could not copy "${n.name}": ${i?.message??String(i)}`,{kind:"error",title:"Copy table"})}}async function Zd(e,t,n){const r=e.workspaceId();if(!r)throw new Error("table-copy: no active workspace");const s=Vs(await ra(e,r),`${t.name} copy`),i=ke(),o=Date.now(),l={id:i,workspaceId:r,name:s,code:Le(s),view:t.view,...t.title?{title:`${t.title} copy`}:{},...t.labelColumn?{labelColumn:t.labelColumn}:{},...t.info?{info:t.info}:{},updatedAt:o};if(n==="duplicate"){const h={...l,columns:t.columns,...t.sortBy?{sortBy:t.sortBy}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.filters?{filters:t.filters}:{},...t.deletedColumns?{deletedColumns:t.deletedColumns}:{},...t.readonly?{readonly:!0}:{},...t.source?{source:t.source}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(h),t.source||await Uc(e,t.id,i,p=>p),h}const u={...l,columns:Cd(t,n).map(uv),...n==="raw"&&t.filters?{filters:t.filters}:{},...n==="raw"&&t.sortBy?{sortBy:t.sortBy}:{},...n==="raw"&&t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(u),await Uc(e,t.id,i,h=>_d(t,h,n)),u}function uv(e){if(!e.readonly)return e;const t={...e};return delete t.readonly,t}async function Uc(e,t,n,r){const s=r(await e.store.rows(t).find());if(s.length===0)return;const i=Date.now();await e.store.rows(n).bulkInsert(s.map(o=>({id:ke(),tableId:n,data:{...o.data},updatedAt:i})))}const dv=Object.freeze(Object.defineProperty({__proto__:null,copyTable:Zd,init:av,meta:ov},Symbol.toStringTag,{value:"Module"}));var hv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,Aa=(e,t,n,r)=>{for(var s=r>1?void 0:r?fv(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&hv(t,n,s),s};function eh(e,t){return(St.instance??pv()).open(e,t)}function pv(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let St=class extends $e{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const s=this.rows[r],i=s.field.trim(),o=s.label.trim()||i;return{...n,field:i,label:o,hidden:s.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),St.instance=this}disconnectedCallback(){super.disconnectedCallback(),St.instance===this&&(St.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const s=n.field.trim().toLowerCase();if(s===""){e.add(r);return}(t.get(s)??t.set(s,[]).get(s)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,s)=>s===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return C`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
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
              ${this.rows.map((n,r)=>C`
                  <input
                    class=${e.has(r)?"invalid":""}
                    .value=${n.field}
                    aria-label=${`Column ${r+1} name`}
                    @input=${s=>this.updateRow(r,"field",s.target.value)}
                  />
                  <input
                    .value=${n.label}
                    aria-label=${`Column ${r+1} label`}
                    @input=${s=>this.updateRow(r,"label",s.target.value)}
                  />
                  <div class="hidecell">
                    <input
                      type="checkbox"
                      .checked=${n.hidden}
                      aria-label=${`Hide column ${r+1}`}
                      @change=${s=>this.setHidden(r,s.target.checked)}
                    />
                  </div>
                `)}
            </div>
            <p class="err">
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:oe}
            </p>
          </div>
        </form>
      </dialog>
    `}};St.instance=null;St.styles=[mt,Ce`
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
    `];Aa([F()],St.prototype,"rows",2);Aa([F()],St.prototype,"subject",2);St=Aa([Te("column-names-dialog")],St);const mv=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return St},editColumnNames:eh},Symbol.toStringTag,{value:"Module"}));async function gv(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const s={api:e,fetchText:(R,H)=>Or(e,R,H??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},i=await n.list(s,{kind:"url",url:r});if(i.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=i.find(R=>R.name===t.name)??(i.length===1?i[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let l=[];const u=[];for await(const R of n.read(s,o))R.columns?.length&&(l=R.columns),u.push(...R.rows);const{columns:h,newFields:p}=Ks(t.columns,l,t.deletedColumns??[]),g=t.origin?.pks??[],w=new Set(l.map(R=>R.field)),y=t.columns.map(R=>R.field).filter(R=>!w.has(R)&&!g.includes(R)),$=(t.deletedColumns??[]).filter(R=>w.has(R)),x=e.store.rows(t.id),I=await x.find(),{data:O,merged:j,strategy:B,droppedUserRows:Y}=Wu({oldRows:I.map(R=>({data:R.data})),freshRows:u,pks:g,userAddedFields:y,deletedRemoteFields:$}),ce=Date.now();h.length>0&&await e.store.tables.patch(t.id,{columns:h,updatedAt:ce}),await x.bulkRemove(I.map(R=>R.id));const V=O.map(R=>({id:ke(),tableId:t.id,data:R,updatedAt:ce}));return await x.bulkInsert(V),{rowCount:V.length,newFields:p,merged:j,strategy:B,droppedUserRows:Y}}var bv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,Ke=(e,t,n,r)=>{for(var s=r>1?void 0:r?wv(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&bv(t,n,s),s};const yv="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",vv="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",$v='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Fc=[{label:"Northwind — sample database (JSON dump)",url:yv,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:vv,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],xv={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function kv(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:$v,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>_v(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>Cv(t,n)})}async function Cv(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await Ra(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const s=await gv(e,n,r),i=[];s.newFields.length>0&&i.push(`${s.newFields.length} new column${s.newFields.length===1?"":"s"}`),!s.merged&&s.rowCount>0&&i.push("rows replaced (nothing to match them on)"),s.droppedUserRows>0&&i.push(`${s.droppedUserRows} row${s.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${s.droppedUserRows===1?"it":"them"} could not be carried over`),e.ui.dialogs.toast(`Refreshed "${n.name}" (${s.rowCount.toLocaleString()} rows)${i.length?` — ${i.join(", ")}`:""}.`,{kind:s.newFields.length>0||s.droppedUserRows>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function _v(e,t="auto"){const r=await(Ee.instance??Ov()).open({presetKind:t,async listDatabases(x){const I=ft(x);return ga(O=>e.backend.fetch(O),I.base)},async listTables(){const x=e.workspaceId();return(await e.store.tables.find()).filter(I=>I.workspaceId===x&&!I.source).map(I=>({id:I.id,name:I.name})).sort((I,O)=>I.name.localeCompare(O.name))}});if(!r)return;const{url:s,file:i,kind:o,dbChosen:l,editColumns:u,maxRows:h,mode:p,panel:g,target:w}=r,y=i?.name??s,$=u?(x,I)=>eh(x,I):void 0;typeof g.separator=="string"&&g.separator;try{if(o==="sql"){await Sv(e,{url:s,file:i,label:y,maxRows:h,mode:p,target:w,panel:g,editHook:$});return}const x=await Ra(o);if(x){const I=o==="json"?await Ev(e,s,i,h,p):null;if(I?.isDump&&await e.ui.dialogs.confirm(`"${y}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await ia(e,I.text,y,{maxRows:h,editColumns:$,...i?{}:{originUrl:s}});return}const O=i?i.name:Ut(s),j=I?{kind:"text",text:I.text,name:O}:i?{kind:"file",file:i}:{kind:"url",url:s},B=await Ws(e,x,j,{mode:p,target:w,maxRows:h,panel:g,...I&&!i?{origin:{type:x.id,url:s}}:{},...$?{editColumns:Y=>$(Y)}:{}});x.ownToasts||th(e,B,y);return}if(p==="reference"&&!i){o==="datasette"?await Rv(e,s):await nh(e,s,o);return}await ni(e,s,{skipTablePicker:l,maxRows:h,editColumns:$})}catch(x){e.ui.dialogs.toast(`Could not import ${y}: ${x.message}`,{kind:"error",title:"Import"})}}async function Sv(e,t){const{url:n,file:r,label:s,maxRows:i,mode:o,target:l,panel:u,editHook:h}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const p=r?await r.text():await Or(e,n,`Reading ${Ut(n)}…`,i!=null?{maxBytes:null}:{});if(da(p)){const y=await ha(e,p,{maxRows:i,target:l,...h?{editColumns:h}:{}});fa(e,y,s);return}const g=await Ra("sql");if(!g)throw new Error("The SQL importer is not installed.");const w=await Ws(e,g,{kind:"text",text:p,name:r?r.name:Ut(n)},{mode:o,target:l,maxRows:i,panel:u,...r?{}:{origin:{type:g.id,url:n}},...h?{editColumns:y=>h(y)}:{}});th(e,w,s)}async function Ev(e,t,n,r,s){if(s==="reference")return null;const i=n?await n.text():await Or(e,t,`Reading ${Ut(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:i,isDump:sa(JSON.parse(i))}}catch{return{text:i,isDump:!1}}}async function Ra(e){const{registries:t}=await le();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function th(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,l)=>o+l.rowCount,0),s=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${s} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const i=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${i?` — ${i}`:""}.`,{kind:"error",title:"Import"})}function Tv(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(s=>s!=null&&typeof s=="object"&&!Array.isArray(s));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const s of["rows","records","data"])if(n(r[s]))return r[s];for(const s of Object.values(r))if(n(s))return s}return[]}function Iv(e){const t=Tv(e).slice(0,50),n=s=>typeof s=="number"?"number":typeof s=="boolean"?"boolean":"string",r=new Map;for(const s of t)for(const[i,o]of Object.entries(s))!r.has(i)&&o!=null?r.set(i,n(o)):r.has(i)||r.set(i,"string");return[...r.entries()].map(([s,i])=>({field:s,label:s,type:i}))}function Av(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function Rv(e,t){const n=ft(t),s=await xa(l=>e.backend.fetch(l),n,"Reference");if(s===null)return;if(s.length===0)throw new Error("No tables found to reference at that URL.");let i=0;const o=[];for(const l of s)try{await nh(e,Av(n.base,l.db,l.table),"json",{nameHint:`${l.db}/${l.table}`,silent:!0}),i++}catch(u){o.push(`${l.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${i} table${i===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function nh(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=r.nameHint??Ut(t),o=await Or(e,t,`Reading ${i}…`,{maxBytes:null}),l=n==="csv"?Fn(o).columns:Iv(o);if(l.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(g=>g.workspaceId===s).map(g=>g.name.toLowerCase()));let h=i;for(let g=2;u.has(h.toLowerCase());g++)h=`${i}-${g}`;const p={id:ke(),workspaceId:s,name:h,code:Le(h),columns:l,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(p),r.silent||e.ui.dialogs.toast(`Referenced ${h} — live, read-only.`,{kind:"success",title:"Reference"})}function Ov(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Dv(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(i=>i.startsWith("_")),s=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":s?"datasette":"json"}catch{return"json"}}function Bc(e,t){if(t!=="datasette"||!e)return!1;try{const n=ft(e);return!n.db&&!n.table}catch{return!1}}function Pv(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let Ee=class extends $e{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,s=this.editColumns&&this.mode==="copy",i=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},l=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:s,maxRows:r,mode:l,panel:i,target:o});return}const u=n==="datasette"&&!!this.selectedDb&&Bc(t,n),h=u?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:h,kind:n,dbChosen:u,editColumns:s,maxRows:r,mode:l,panel:i,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Pv(this.file.name):Dv(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),Ee.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ee.instance===this&&(Ee.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await le(),t=[...e.importers].sort((s,i)=>(s.order??Number.MAX_SAFE_INTEGER)-(i.order??Number.MAX_SAFE_INTEGER)).map(s=>({id:s.id,label:s.label,panel:s.panel,kernel:s.supports?.kernel})),n=t.some(s=>s.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const s of e.importers)for(const i of s.accept??[])r.add(i);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=Fc[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Bc(this.url.trim(),this.resolvedKind)?oe:C`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?C`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>C`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:C`<option value="">— not loaded —</option>`}
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
      ${this.dbError?C`<p class="hint error">${this.dbError}</p>`:oe}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return oe;const e=this.targetKind!=="new";return C`
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
          ${e?C`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?C`<option value="">— no tables yet —</option>`:this.tables.map(t=>C`<option value=${t.id} ?selected=${t.id===this.targetTableId}>
                          ${t.name}
                        </option>`)}
              </select>`:oe}
        </div>
      </label>
      ${e?C`<p class="hint">
            The table keeps its own columns. Values map onto them the way the format requires — a
            CSV by column position, so its header names need not match.
          </p>`:oe}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===oe?oe:C`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return C`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
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
                ${this.formats.map(e=>C`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
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
                  ${Fc.map((e,t)=>C`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
              ${this.file?C`<p class="hint">
                    Importing <strong>${this.file.name}</strong> as
                    ${this.resolvedKind.toUpperCase()}.
                  </p>`:oe}

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
              ${this.file?C`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:oe}
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
              ${this.mode==="reference"?C`<p class="hint">
                    A Reference keeps the source's own schema, so there is nothing to edit.
                  </p>`:oe}

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
      ${oe}
    `}};Ee.instance=null;Ee.styles=[mt,Ce`
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
    `];Ke([F()],Ee.prototype,"url",2);Ke([F()],Ee.prototype,"kind",2);Ke([F()],Ee.prototype,"presetIdx",2);Ke([F()],Ee.prototype,"dbList",2);Ke([F()],Ee.prototype,"dbLoading",2);Ke([F()],Ee.prototype,"dbError",2);Ke([F()],Ee.prototype,"selectedDb",2);Ke([F()],Ee.prototype,"editColumns",2);Ke([F()],Ee.prototype,"file",2);Ke([F()],Ee.prototype,"maxRowsInput",2);Ke([F()],Ee.prototype,"mode",2);Ke([F()],Ee.prototype,"targetKind",2);Ke([F()],Ee.prototype,"targetTableId",2);Ke([F()],Ee.prototype,"tables",2);Ke([F()],Ee.prototype,"formats",2);Ke([F()],Ee.prototype,"acceptAttr",2);Ee=Ke([Te("import-dialog")],Ee);const Lv=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Ee},init:kv,meta:xv},Symbol.toStringTag,{value:"Module"})),Mv={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},jv=6e4;let qc=null,Oo=!1;const lo=new Map;function Nv(e){qc===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(qc=setInterval(()=>{rh(e)},jv)))}async function rh(e){if(Oo)return;const t=e.workspaceId();if(!t)return;const n=await Rd(e);if(n)try{await zv(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function zv(e,t,n){const r=await ri(e),s=await Od(e,n),i=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(i.status===404){await Hc(e,t,n,r,null);return}if(!i.ok)return;const o=si(i.headers.get("ETag")),l=await i.text();if(kc(r)===kc(l)){o&&o!==s&&await vn(e,n,o);return}if(o&&o===s){await Hc(e,t,n,r,s);return}if(!(o&&lo.get(n)===o)){Oo=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const h=JSON.parse(l),p=await Dd(e,n,h);o&&await vn(e,n,o),lo.delete(n),e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&lo.set(n,o)}finally{Oo=!1}}}async function Hc(e,t,n,r,s){const i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:i,body:r});if(o.ok){const l=si(o.headers.get("ETag"));l&&await vn(e,n,l);return}if(o.status===412){const l=await o.json().catch(()=>({}));l.currentEtag&&await vn(e,n,l.currentEtag)}}const sh=Object.freeze(Object.defineProperty({__proto__:null,load:Nv,meta:Mv,tick:rh},Symbol.toStringTag,{value:"Module"}));var Uv=Object.defineProperty,Fv=Object.getOwnPropertyDescriptor,xt=(e,t,n,r)=>{for(var s=r>1?void 0:r?Fv(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Uv(t,n,s),s};let rt=class extends $e{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),s=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const i=this.allRows.find(u=>u.id===n);if(!i)return;let o;if(s==="boolean")o=t.checked;else if(s==="number"){const u=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(u)?t.value:u}else o=t.value;await(await le()).store.rows(this.instance.tableId).patch(n,{data:{...i.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");if(!n||r==null)return;const s=Fb(this.instance.pillFilters?.[n],r),i={...this.instance.pillFilters??{},[n]:s};await(await le()).store.viewInstances.patch(this.instance.id,{pillFilters:i,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:i},this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await le(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(i=>[i.field,i]));this.columns=t.visibleColumns.map(i=>r.get(i)??{field:i,label:i,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(i=>{const o=i.find(l=>l.id===this.viewInstanceId);if(o){if(o.tableId!==this.instance?.tableId){this.instance=o,this.reload();return}this.instance=o,this.recompute()}});const s=e.store.rows(t.tableId);this.rowsUnsub=s.subscribe(i=>{this.allRows=i,this.recompute()}),this.allRows=await s.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;const e=Ub(this.allRows,this.tableColumns),t=kd(e,this.instance);let n=t;const r=this.searchQuery.trim(),s=this.globalQuery.trim();r&&(n=Ds(n,r,this.tableColumns)),s&&(n=Ds(n,s,this.tableColumns));const i=this.instance.limit??0;i>0&&n.length>i&&(n=n.slice(0,i)),this.rows=n,this.templateOn&&Yu(this.viewInstanceId,n.length,t.length)}async removePill(e,t){if(!this.instance)return;const n=Bb(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await le()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await le()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await le()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await le()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Mo(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Mo(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await le();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(i=>i!==e):[...t,e];if(r.length===0)return;await(await le()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?C`<div class="vw-empty">No rows.</div>`:C`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>C`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>C`<tr>
                ${this.columns.map(t=>{const n=e.data[t.field],r=n==null?"":String(n);return C`<td title=${r}>${r}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return C`<div class="vw-empty">This view's template is missing.</div>`;if(Hb(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(o=>[o.field,o])),r=this.instance?.readonly===!0,s=this.rows.map(o=>Nb(e.rowHtml,o,t,{columns:n,readonly:r})).join(""),i=(e.headerHtml??"")+s+(e.footerHtml??"");return C`<div class="vw-root">${Pn(i)}</div>`}return C`<div class="vw-root">
      ${e.headerHtml?.trim()?C`<div class="vw-html">${Pn(e.headerHtml)}</div>`:oe}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?C`<div class="vw-html">${Pn(e.footerHtml)}</div>`:oe}
    </div>`}renderSortBar(){if(!this.instance)return oe;const e=this.tableColumns.filter(r=>r.sortable!==!1),t=this.instance.sortColumn??"",n=this.instance.sortAsc??!0;return C`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select
        aria-label="Sort by"
        @change=${r=>void this.setSortColumn(r.target.value)}
      >
        <option value="" ?selected=${!t}>— unsorted —</option>
        ${e.map(r=>C`<option value=${r.field} ?selected=${t===r.field}>${r.label||r.field}</option>`)}
      </select>
      <button
        aria-label="Toggle sort direction"
        title=${n?"Ascending (click for descending)":"Descending (click for ascending)"}
        ?disabled=${!t}
        @click=${()=>void this.toggleSortDir()}
      >
        <span class="mi">${n?"arrow_upward":"arrow_downward"}</span>
      </button>
    </div>`}renderPillBar(){const e=this.instance?.pillFilters;if(!e)return oe;const t=[];for(const[n,r]of Object.entries(e))if(r)for(const s of Dr(r))s.term&&t.push({field:n,value:s.term});return t.length===0?oe:C`<div class="vw-pillbar">
      ${t.map(n=>C`<span class="eda-pill-chip">
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
    </div>`}renderFooter(){if(!this.instance)return oe;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return C`<div class="vw-footer">
      ${!e&&this.showColsMenu?C`<div class="cols-menu">
            ${this.tableColumns.map(n=>C`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(n.field)}
                    @change=${()=>void this.toggleColumn(n.field)}
                  />${n.label||n.field}</label
                >`)}
          </div>`:oe}
      ${e?oe:C`<button
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
      ${this.template?C`<button
            class="edit-template"
            aria-label="Edit template"
            title=${`Edit the "${this.template.name}" template`}
            @click=${()=>this.editTemplate()}
          >
            <span class="mi">code</span>
          </button>`:oe}
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
    </div>`}render(){if(!this.loaded)return C`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return C`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?C`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>
          ${this.renderTemplated()}
        </div>`:C`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return C`${e?this.renderSortBar():oe}${this.renderPillBar()}${t}${this.renderFooter()}`}};rt.styles=[wt,Ce`
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
    `];xt([pt({type:String})],rt.prototype,"viewInstanceId",2);xt([F()],rt.prototype,"loaded",2);xt([F()],rt.prototype,"error",2);xt([F()],rt.prototype,"instance",2);xt([F()],rt.prototype,"template",2);xt([F()],rt.prototype,"columns",2);xt([F()],rt.prototype,"tableColumns",2);xt([F()],rt.prototype,"rows",2);xt([F()],rt.prototype,"showColsMenu",2);xt([F()],rt.prototype,"searchQuery",2);xt([F()],rt.prototype,"globalQuery",2);rt=xt([Te("view-window")],rt);const ih=480,oh=520,tt=new Map;async function Bv(){await Promise.all([...tt.keys()].map(e=>Ss(e)))}function ah(e){const t=tt.get(e);return t?(Ud(t.panel),!0):!1}const Do=new Set;async function lh(e){if(ah(e))return;Do.add(e);const t=await le(),n=await t.store.viewInstances.findOne(e);if(!n){Do.delete(e);return}if(n.open){Lo(n,t),ch(e);return}await t.store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()})}function ch(e){Do.delete(e)&&ah(e)}let Kc=!1;function Po(e){e.panel.setHeaderTitle(e.name+Qu(e.count,e.total))}function qv(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Hv(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Kv(e){return`view-panel-${Hv(e)}`}async function Vv(){if(Kc)return;Kc=!0;const e=await le(),t=r=>r.filter(s=>s.workspaceId===e.workspaceId&&s.open),n=t(await e.store.viewInstances.find()).sort(js);for(const r of n)Lo(r,e);e.store.viewInstances.subscribe(r=>{const s=new Map(t(r).map(o=>[o.id,o]));for(const o of[...tt.keys()])s.has(o)||Gv(o);const i=[...s.values()].filter(o=>!tt.has(o.id)).sort(js);for(const o of i)Lo(o,e)}),e.store.tables.subscribe(r=>void Wv(e,r)),document.addEventListener(Ps,r=>{const s=r.detail,i=tt.get(s.key);i&&i.el&&(i.count=s.count,i.total=s.total,Po(i))}),document.addEventListener("easydb:reload-view",r=>{const s=r.detail?.instanceId;if(!s)return;const i=tt.get(s);i&&(async()=>{const o=await e.store.viewInstances.findOne(s);o&&(i.name=o.name,Po(i)),i.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of tt.values())r?.reload()})}async function Wv(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),s=new Map;for(const o of n)s.has(o.name)||s.set(o.name,o);const i=await e.store.viewInstances.find();for(const o of i){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const l=s.get(o.tableName);l&&await e.store.viewInstances.patch(o.id,{tableId:l.id,updatedAt:Date.now()})}}function Lo(e,t){if(tt.has(e.id))return;const n=Kv(e.id),r=e.windowGeometry,s=r?.minimized===!0,i=()=>{const y=document.createElement("view-window");return y.viewInstanceId=e.id,y.style.height="100%",y},o=s?document.createElement("div"):i();let l;const u=()=>{l&&(l.el?.remove(),l.el=null,l.count=-1,l.total=-1,Po(l))},h=()=>{if(!l||l.el)return;const y=document.getElementById(n)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const $=i();y.appendChild($),l.el=$},p=zs({id:n,container:qv(),title:e.name,logo:Jw,color:"#0891b2",content:o,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:ih,h:oh},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:Tr(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0,smallified:r?.smallified===!0},onmoved:()=>void Ss(e.id),onresized:()=>void Ss(e.id),onfronted:()=>void Yv(e.id,t),onstatuschange:y=>{y.status==="minimized"?u():(y.status==="normalized"||y.status==="maximized")&&h(),Ss(e.id)},onclosed:()=>{tt.delete(e.id),ui(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});l={panel:p,el:s?null:o,name:e.name,count:-1,total:-1},tt.set(e.id,l),zd(e.id,()=>p.front(void 0,!1));const g=document.getElementById(n),w=document.createElement("panel-search");w.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.append(w),ch(e.id)}function Gv(e){const t=tt.get(e);if(t){tt.delete(e),ui(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function Yv(e,t){return jr(`view:${e}`,()=>Qv(e,t))}async function Qv(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{...tt.get(e)?.panel.persistRect()??{x:0,y:0,w:ih,h:oh},z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:Nd()},updatedAt:Date.now()})}catch{}}function Ss(e){return jr(`view:${e}`,()=>Xv(e))}async function Xv(e){const t=tt.get(e);if(!t)return;const{minimized:n,maximized:r,smallified:s}=t.panel.persistFlags(),i=t.panel.persistRect();try{const o=await le(),l=(await o.store.viewInstances.findOne(e))?.windowGeometry,u={...i,z:l?.z??0,minimized:n,maximized:r,smallified:s};await o.store.viewInstances.patch(e,{windowGeometry:u,updatedAt:Date.now()})}catch{}}var Jv=Object.defineProperty,Zv=Object.getOwnPropertyDescriptor,Kn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Zv(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Jv(t,n,s),s};function Mo(e,t){(ut.instance??e0()).open(e,t)}function e0(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function co(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let ut=class extends $e{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),ut.instance=this}disconnectedCallback(){super.disconnectedCallback(),ut.instance===this&&(ut.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await le(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){this.close(),await lh(e)}async editInstance(e){const n=await(await le()).store.viewTemplates.findOne(e.templateId),r=n?wc(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await le()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await le(),n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={...e,id:co(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await le();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await le(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(s=>s.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:co(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=wc(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(g=>g.field.toLowerCase()===t||(g.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const g=Number(r[1])-1;return this.columns.filter(y=>y.type==="boolean")[g]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(g=>g.type==="boolean");const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(g=>g.type==="date"||g.type==="datetime");const l=["url","link","href","website","homepage","uri","site","web"];if(l.includes(t)){const g=this.firstColumn(w=>w.renderer==="link");return g||this.firstColumn(w=>{const y=w.field.toLowerCase(),$=(w.label??"").toLowerCase();return l.some(x=>y.includes(x)||$.includes(x))})}const u=g=>w=>{const y=w.field.toLowerCase(),$=(w.label??"").toLowerCase();return g.some(x=>y.includes(x)||$.includes(x))},h=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(h.includes(t)){const g=this.firstColumn(y=>y.renderer==="image");if(g)return g;const w=this.firstColumn(u(h));return w||this.firstColumn(u(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(u(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(u(["phone","tel","mobile","cell"]));const p=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(p.includes(t)){const g=this.firstColumn(x=>{if(x.type!=="string")return!1;const I=x.field.toLowerCase(),O=(x.label??"").toLowerCase();return p.some(j=>I.includes(j)||O.includes(j))});if(g)return g;const w=this.columns.filter(x=>x.type==="string"),y=w[0];if(!y)return"";let $=y;for(const x of w)(x.max??0)>($.max??0)&&($=x);return $.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await le();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={id:co(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return C`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>C`<li>
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
          ${this.templates.map(e=>C`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?C`<span class="badge">built-in</span>`:oe}
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
    `}renderTemplate(){const e=this.tDraft,t=n=>r=>{this.tDraft={...e,[n]:r.target.value}};return C`
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
    `}renderInstance(){const e=this.iDraft;return C`
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
        ${e.tokens.length===0?C`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>C`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${n=>this.iDraft={...e,mapping:{...e.mapping,[t]:n.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(n=>C`<option value=${n.field} ?selected=${e.mapping[t]===n.field}>
                          ${n.label||n.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?C`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:C`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?C`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?C`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:C`<button type="submit" class="ghost">Close</button>`;return C`
      <dialog @cancel=${this.close} @keydown=${gt}>
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
    `}};ut.instance=null;ut.styles=[mt,Ce`
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
    `];Kn([F()],ut.prototype,"mode",2);Kn([F()],ut.prototype,"instances",2);Kn([F()],ut.prototype,"templates",2);Kn([F()],ut.prototype,"tDraft",2);Kn([F()],ut.prototype,"iDraft",2);ut=Kn([Te("views-dialog")],ut);const t0={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},n0="grid_view",r0={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},s0={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},i0={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},o0={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},a0=[r0,s0,i0,o0];function l0(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:n0,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>Mo(n)})}async function c0(e){await d0(e)}function u0(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function d0(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of a0)await h0(e,t,r,n)}async function h0(e,t,n,r){const s=`views:seeded:${n.slug}:${t}`,i=`views:sig:${n.slug}:${t}`,o=u0(n),l=r.find(h=>h.builtin&&h.name===n.name);if(l){(await e.store.settings.findOne(i))?.value!==o&&(await e.store.viewTemplates.patch(l.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:o})),await e.store.settings.upsert({name:s,value:!0});return}(await e.store.settings.findOne(s))?.value||(await e.store.viewTemplates.insert({id:f0(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:!0}),await e.store.settings.upsert({name:i,value:o}))}function f0(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const p0=Object.freeze(Object.defineProperty({__proto__:null,init:l0,load:c0,meta:t0},Symbol.toStringTag,{value:"Module"})),m0={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function g0(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const s=Array.from(t.dataTransfer?.files??[]).find(l=>l.name.toLowerCase()==="secrets.txt");if(!s)return!1;const i=await s.text(),o=Object.keys(xr(i)).length;return Hs().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${s.name}"?`,"Import secrets")||(wu(i),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const b0=Object.freeze(Object.defineProperty({__proto__:null,init:g0,meta:m0},Symbol.toStringTag,{value:"Module"}));class Qt extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function w0(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function y0(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function v0(e,t){const n=w0(t.source?.config),r=new Set;let s=[],i=new Map,o=!1,l=null;const u=new Map;let h=null,p=!1;function g(V){const R=new Map;for(const te of V)R.has(te.name)||R.set(te.name,te);const H=new Map;for(const te of n.sources){const ee=R.get(te.tableName);ee&&H.set(te.alias,ee.id)}return H}async function w(){return g(await e.tables.find({workspaceId:t.workspaceId}))}async function y(){const V=await e.tables.find({workspaceId:t.workspaceId}),R={rows:[],provenance:new Map};if(wm(t.id,V))return R;const H=g(V),te={};for(const ie of n.sources){const Q=H.get(ie.alias);if(!Q)return R;te[ie.alias]=await e.rows(Q).find()}const ee=um(n,te);return{rows:ee.rows.map(ie=>({...ie,tableId:t.id})),provenance:ee.provenance}}async function $(){const{rows:V,provenance:R}=await y();return s=V,i=R,o=!0,V}function x(){return l||(l=(async()=>{try{return await $()}finally{l=null}})(),l)}async function I(){const V=await w(),R=new Set(V.values());for(const[H,te]of u)R.has(H)||(te(),u.delete(H));for(const H of R)u.has(H)||u.set(H,e.rows(H).subscribe(O))}function O(){p||(p=!0,queueMicrotask(async()=>{p=!1,await I();const V=o?await $():await x();for(const R of r)R(V)}))}function j(V,R){return V===R||V==null&&R==null?!0:V==null||R==null?!1:String(V)===String(R)}async function B(V,R){o||await x();const H=s.find(q=>q.id===V)?.data,te=i.get(V),ee=new Map,ie=[];for(const[q,ne]of Object.entries(R)){if(H&&j(H[q],ne))continue;const we=xm(n,V,q,te);if(!we){ie.push(q);continue}const _e=ee.get(we.alias)??{rowId:we.rowId,updates:{}};_e.updates[we.field]=ne,ee.set(we.alias,_e)}if(ie.length>0)throw new Qt(ce(ie,te));if(ee.size===0)return{id:V,tableId:t.id,data:R,updatedAt:Date.now()};const Q=await w();for(const[q,{rowId:ne,updates:we}]of ee){const _e=Q.get(q);if(!_e)throw new Qt(`the "${Y(q)}" table is not available`);const et=e.rows(_e),je=await et.findOne(ne);if(!je)throw new Qt("the underlying row no longer exists");await et.patch(ne,{data:{...je.data,...we},updatedAt:Date.now()})}return{id:V,tableId:t.id,data:R,updatedAt:Date.now()}}function Y(V){return n.sources.find(R=>R.alias===V)?.tableName??V}function ce(V,R){const H=V[0],te=n.columns.find(ee=>ee.field===H);return!te||te.from.kind==="script"?`"${H}" is computed by a script, so there is no cell to save it in`:R&&!R[te.from.alias]?`this row has no matching "${Y(te.from.alias)}" row, so there is nowhere to save "${H}"`:`"${H}" cannot be written back to its source`}return{async find(V){const R=o?s:await x();return!V||Object.keys(V).length===0?R:R.filter(H=>y0(H,V))},async findOne(V){return(o?s:await x()).find(H=>H.id===V)??null},async insert(){throw new Qt("rows are derived from other tables")},async bulkInsert(){throw new Qt("rows are derived from other tables")},async upsert(V){return B(V.id,V.data)},async patch(V,R){if(!R.data)throw new Qt("a cell edit must carry row data");return B(V,R.data)},async remove(){throw new Qt("rows are derived from other tables")},async bulkRemove(){throw new Qt("rows are derived from other tables")},subscribe(V){return r.add(V),h||(h=e.tables.subscribe(O)),o?V(s):O(),()=>{if(r.delete(V),r.size===0){h?.(),h=null;for(const R of u.values())R();u.clear(),o=!1}}},async refresh(){await I();const V=await $();for(const R of r)R(V)}}}function $0(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,s=2;for(;t.has(r);)r=`${n}_${s++}`;return t.add(r),r}function x0(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function k0(e,t,n){const r=t.sources.map(l=>{const u=n.find(w=>w.name===l.tableName),h={alias:l.alias,tableId:u?.id??"",tableName:l.tableName,columns:u?.columns??[]},p=l.join?.on??[],g=p[0];return l.join&&g&&(h.join={type:l.join.type,thisField:g.field,otherAlias:g.eqAlias,otherField:g.eqField},p.length>1&&(h.extraOn=p.slice(1))),h}),s=t.columns.map(l=>{const u={include:!0,outField:l.field,label:l.label??l.field};return l.from.kind==="source"?{...u,alias:l.from.alias,field:l.from.field,computed:!1}:{...u,script:l.from.script,computed:!0}}),i=[],o=new Set;r.forEach((l,u)=>{const h=r.slice(0,u).filter(p=>p.tableName===l.tableName).length;for(const p of l.columns){const g=s.filter(w=>!w.computed&&w.alias===l.alias&&w.field===p.field&&!o.has(w));if(g.length>0)for(const w of g)o.add(w),i.push(w);else i.push({include:!1,alias:l.alias,field:p.field,computed:!1,label:h>0?`${p.label} (${l.alias})`:p.label})}});for(const l of s)!l.computed&&!o.has(l)&&i.push(l);for(const l of s)l.computed&&i.push(l);return{name:e,sources:r,columns:i,...t.limit?{limit:t.limit}:{},original:t}}function C0(e,t){const n=x0(e.sources),r=e.sources.length===0,s=e.sources.filter(l=>l.tableName===t.name).length;let i;if(!r){const l=e.sources.flatMap(h=>h.join?[{alias:h.join.otherAlias,field:h.join.otherField},...(h.extraOn??[]).map(p=>({alias:p.eqAlias,field:p.eqField}))]:[]),u=vm({tableName:t.name,fields:t.columns.map(h=>h.field),pks:t.columns.filter(h=>h.unique).map(h=>h.field)},e.sources.map(h=>({alias:h.alias,tableName:h.tableName,fields:h.columns.map(p=>p.field),pks:h.columns.filter(p=>p.unique).map(p=>p.field)})),l);i={type:"left",thisField:u?.thisField??t.columns[0]?.field??"",otherAlias:u?.otherAlias??e.sources[0]?.alias??"",otherField:u?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...i?{join:i}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(l=>({include:!0,alias:n,field:l.field,computed:!1,label:s>0?`${l.label} (${n})`:l.label}))]}}function _0(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const s of e.sources){if(n.has(s.alias)||!s.join)continue;[s.join.otherAlias,...(s.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(s.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function S0(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function E0(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(u=>u.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let u=0;u<e.sources.length;u++){const h=e.sources[u];if(!h?.join)continue;if(!h.join.thisField||!h.join.otherField)return{ok:!1,error:`Set both join keys for "${h.tableName}".`};const p=new Set(e.sources.slice(0,u).map(w=>w.alias));if([h.join.otherAlias,...(h.extraOn??[]).map(w=>w.eqAlias)].some(w=>!p.has(w)))return{ok:!1,error:`The join for "${h.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(u=>u.alias)),s=new Set,i=[];for(const u of n){let h;if(u.outField&&!s.has(u.outField)?(h=u.outField,s.add(h)):h=$0(u.computed?"computed":u.field??"col",s),u.computed){i.push({field:h,from:{kind:"script",script:u.script??""}});continue}const p=u.alias,g=u.field;if(!p||!g||!r.has(p))return{ok:!1,error:`Column "${u.label??u.field}" belongs to a table that is no longer part of this projection.`};i.push({field:h,from:{kind:"source",alias:p,field:g}})}const o=e.sources.map(u=>{const h={alias:u.alias,tableName:u.tableName};return u.join&&(h.join={type:u.join.type,on:[{field:u.join.thisField,eqAlias:u.join.otherAlias,eqField:u.join.otherField},...u.extraOn??[]]}),h}),l={...e.original??{},version:1,sources:o,columns:i};return e.limit!=null&&e.limit>0?l.limit=Math.floor(e.limit):delete l.limit,{ok:!0,name:t,spec:l}}var T0=Object.defineProperty,I0=Object.getOwnPropertyDescriptor,Vn=(e,t,n,r)=>{for(var s=r>1?void 0:r?I0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&T0(t,n,s),s};let dt=class extends $e{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),dt.instance===this&&(dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(k0(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(C0(this.modelOf(),e))}removeSource(e){this.applyModel(_0(this.modelOf(),e))}addComputed(){this.applyModel(S0(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=E0(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return C`
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
                  ${this.candidates.map(t=>C`<option value=${t.id}>${t.name}</option>`)}
                </select>
                <button
                  type="button"
                  class="ghost sm"
                  @click=${()=>{const t=this.shadowRoot?.getElementById("add-src");t?.value&&this.addSource(t.value)}}
                >
                  ${e?"+ Join table":"+ Base table"}
                </button>
                ${e?C`<span class="hint">A table may be joined more than once.</span>`:oe}
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
    `}renderSource(e,t){return C`
      <div class="src">
        <div class="src-head">
          <span class="badge ${t?"base":""}">${t?"Base":"Join"}</span>
          <span class="name">${e.tableName}</span>
          <code class="alias" title="Alias used by the join keys below">${e.alias}</code>
          <span class="spacer"></span>
          ${t?oe:C`<button type="button" class="icon-btn" title="Remove this join" aria-label="Remove ${e.tableName}" @click=${()=>this.removeSource(e.alias)}>×</button>`}
        </div>
        ${e.join?C`<div class="join-grid">
              <select .value=${e.join.type} @change=${n=>this.patchSource(e.alias,{type:n.target.value})}>
                <option value="left">LEFT JOIN</option>
                <option value="inner">INNER JOIN</option>
              </select>
              <span class="kw">ON</span>
              <select .value=${e.join.thisField} @change=${n=>this.patchSource(e.alias,{thisField:n.target.value})}>
                ${e.columns.map(n=>C`<option value=${n.field} ?selected=${n.field===e.join?.thisField}>${e.alias}.${n.field}</option>`)}
              </select>
              <span class="kw">=</span>
              <select
                .value=${`${e.join.otherAlias}.${e.join.otherField}`}
                @change=${n=>{const[r,s]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:s??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>C`<option value=${`${n.alias}.${r.field}`} ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}>${n.alias}.${r.field}</option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderSourceColumns(e){const t=this.columns.map((r,s)=>({c:r,i:s})).filter(({c:r})=>!r.computed&&r.alias===e.alias);if(t.length===0)return oe;const n=t.every(({c:r})=>r.include);return C`
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
          ${t.map(({c:r,i:s})=>C`
              <label class="tick ${r.include?"":"off"}" title=${`${r.alias}.${r.field}`}>
                <input type="checkbox" .checked=${r.include} @change=${i=>this.setColumn(s,{include:i.target.checked})} />
                <span class="tick-name">${r.field}</span>
              </label>
            `)}
        </div>
      </div>
    `}renderComputedColumns(){const e=this.columns.map((t,n)=>({c:t,i:n})).filter(({c:t})=>t.computed);return C`
      <div class="col-group">
        <div class="group-head">
          <span class="chip">computed</span>
          <button type="button" class="link-btn" @click=${()=>this.addComputed()}>+ add</button>
        </div>
        ${e.length===0?C`<span class="hint">None. A computed column derives its value from the row.</span>`:e.map(({c:t,i:n})=>C`
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
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};dt.instance=null;dt.styles=[mt,Ce`
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
    `];Vn([F()],dt.prototype,"name",2);Vn([F()],dt.prototype,"limit",2);Vn([F()],dt.prototype,"sources",2);Vn([F()],dt.prototype,"columns",2);Vn([F()],dt.prototype,"error",2);dt=Vn([Te("projection-dialog")],dt);const A0={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function R0(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>(uh(e,t),v0(e.store,t))}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void Vc(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void Vc(t,{editTableId:n})})}async function uh(e,t){if(t.source?.type!=="projection")return;const n=t.source.config;if(!n||!Array.isArray(n.sources))return;const r=Ys(n),s=t.columns.map(l=>{const u=!r.has(l.field);if(u===(l.readonly===!0))return l;if(u)return{...l,readonly:!0};const h={...l};return delete h.readonly,h}),i=r.size===0;s.every((l,u)=>l===t.columns[u])&&(t.readonly??!1)===i||await e.store.tables.patch(t.id,{columns:s,readonly:i,updatedAt:Date.now()})}async function O0(e){const t=e.workspaceId();if(t)for(const n of await e.store.tables.find({workspaceId:t}))await uh(e,n)}async function D0(e){await O0(e)}async function P0(e,t,n,r,s){const i=await e.store.tables.find({workspaceId:t}),o=new Map;for(const u of i)o.has(u.name)||o.set(u.name,u);const l={};for(const u of n.sources)l[u.alias]=o.get(u.tableName)?.columns??[];return Uu(n,l,r,s)}async function Vc(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),s=l=>({id:l.id,name:l.name,columns:l.columns}),i=dt.instance??L0();if(t.editTableId){const l=r.find(u=>u.id===t.editTableId)??null;if(!l||l.source?.type!=="projection")return;i.open({candidates:r.filter(u=>u.id!==l.id).map(s),initial:{name:l.name,spec:l.source.config},onSave:Wc(e,n,l)});return}const o=r.find(l=>l.id===t.baseTableId);o&&i.open({base:s(o),candidates:r.map(s),onSave:Wc(e,n,null,o)})}function Wc(e,t,n,r){return async(s,i)=>{const o=await P0(e,t,i,n?.columns??[],n?.deletedColumns??[]),l=Ys(i).size===0,u={type:"projection",config:i};n?await e.store.tables.patch(n.id,{name:s,columns:o,source:u,readonly:l,updatedAt:Date.now()}):await e.store.tables.insert({id:ke(),workspaceId:t,name:s,code:Le(s),columns:o,view:"table",source:u,readonly:l,...r?gm(i,r):{},updatedAt:Date.now()})}}function L0(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const M0=Object.freeze(Object.defineProperty({__proto__:null,init:R0,load:D0,meta:A0},Symbol.toStringTag,{value:"Module"})),j0={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function N0(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",onClick:()=>e.ui.openCommandPalette()})}const z0=Object.freeze(Object.defineProperty({__proto__:null,init:N0,meta:j0},Symbol.toStringTag,{value:"Module"})),U0=[b0,gw,Rp,nm,Bm,Ym,sb,yb,Sb,Mp,Gb,Pb,aw,fw,$w,Sw,Aw,Pw,Nw,Ny,By,Yy,nv,iv,dv,Lv,sh,p0,M0,z0];function F0(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const dh=U0.map(e=>{const t=F0(e);return{id:t.id,meta:t,module:e}}),B0=dh;function jo(e){return`builtin:${e}`}async function q0(e){const t=[];for(const n of dh)if(!await H0(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function H0(e,t){return t.meta.fixed?!1:vt==="all-optional"?!0:(await e.store.plugins.findOne(jo(t.id)))?.enabled===!1}function hh(e){return e.filter(t=>t.status!=="minimized")}function K0(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),s=Math.ceil(e/r),i=(t.w-n*(r+1))/r,o=(t.h-n*(s+1))/s;return Array.from({length:e},(l,u)=>{const h=u%r,p=Math.floor(u/r);return{x:t.x+n+h*(i+n),y:t.y+n+p*(o+n),w:i,h:o}})}function Wn(){return Gw()}function V0(){for(const e of Wn())e.close?.()}function W0(){for(const e of Wn())e.minimize?.()}function G0(){for(const e of Wn())e.normalize?.()}function Y0(){for(const e of Wn())e.maximize?.()}function fh(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=Er()?.snapshot(),s=r?.scale&&r.scale>0?r.scale:1,i=r?.x??0,o=r?.y??0;return{x:-i/s,y:-o/s,w:t/s,h:n/s}}function ph(e,t,n,r,s){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(s)}px`}function Q0(){const e=hh(Wn()).reverse();if(e.length===0)return;const t=fh(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),s=Math.min(480,Math.max(240,t.h*.6));e.forEach((i,o)=>{i.normalize?.(),ph(i,t.x+24+o*n,t.y+24+o*n,r,s)}),mh()}function mh(){qd(),Bv()}function X0(){const e=hh(Wn()).reverse();if(e.length===0)return;const n=K0(e.length,fh(),8);e.forEach((r,s)=>{r.normalize?.();const i=n[s];i&&ph(r,i.x,i.y,i.w,i.h)}),mh()}function J0(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:W0},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:G0},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:Y0},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:Q0},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:X0},{id:"windows:close-all",title:"Close all windows",icon:"close",run:V0}];for(const s of t)e.ui.registerCommand({id:s.id,title:s.title,group:"Windows",icon:s.icon,run:s.run});const n="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",r="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:s=>s.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(n,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(r,"_blank","noopener")}})}async function Z0(e){if(vt==="url-plugins"||vt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],s=[];for(const i of r)try{const o=await e.store.plugins.findOne(i);if(o&&o.enabled===!1)continue;let l=o?.cachedBody??"";if(l)e$(e,i,l);else{try{l=await gh(i)}catch(p){await e.store.plugins.upsert({url:i,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${p.message}`}),e.events.emit("plugin:error",{url:i,phase:"fetch",error:p});continue}await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),cachedBody:l})}const u=new Blob([l],{type:"text/javascript"}),h=URL.createObjectURL(u);try{const p=await import(h);await p.init?.(e),s.push({url:i,mod:p})}finally{setTimeout(()=>URL.revokeObjectURL(h),5e3)}}catch(o){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:i,phase:"init",error:o})}return async()=>{for(const{url:i,mod:o}of s)try{await o.load?.(e)}catch(l){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`load: ${l.message}`}),e.events.emit("plugin:error",{url:i,phase:"load",error:l})}}}async function gh(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function e$(e,t,n){return(async()=>{try{const r=await gh(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let uo=null;function le(){return uo||(uo=t$()),uo}async function t$(){const e=await pu();let t="";const n=Bf(e,()=>t),r=Hf(),s=Xf(),i=new Map;n.tables.subscribe(I=>{i.clear();for(const O of I)i.set(O.id,O)});const o={...n.tables,insert:I=>(i.set(I.id,I),n.tables.insert(I)),upsert:I=>(i.set(I.id,I),n.tables.upsert(I))};let l=null;const u={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:n.settings,workspaceId:()=>w},h=qf({base:{...n,tables:o},providers:s.rowSources,tableById:I=>i.get(I),ctx:u}),p=n$(),g=await h.workspaces.find();let w;if(p){const I=wh(p),O=g.find(j=>j.id===I||j.name===p);O?w=O.id:w=(await h.workspaces.insert({id:I,name:p,createdAt:Date.now(),pluginUrls:[]})).id}else{const I=r$(),O=I?g.find(j=>j.id===I):void 0;O?w=O.id:g.length>0?w=g[0].id:w=(await h.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}t=w,s$(w);const y=np({store:h,events:r,registries:s,workspaceId:()=>w});l=y,J0(y),r.on("import:after",({source:I,tableId:O,rowCount:j})=>{I!=="datasette"&&y.store.tables.findOne(O).then(B=>{y.ui.dialogs.toast(`Imported ${j} row${j===1?"":"s"} into "${B?.name??O}".`,{kind:"success",title:I.toUpperCase()+" import"})})}),r.on("plugin:error",({url:I,phase:O,error:j})=>{y.ui.dialogs.toast(`[${O}] ${j?.message??String(j)}`,{kind:"error",title:`Plugin: ${I}`})});const $=await q0(y),x=await Z0(y);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:w}),await $(),await x(),vt==="all-optional"?y.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):vt==="url-plugins"&&y.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),vt!=="off"&&y.ui.openPluginManager()}),globalThis.api=y,{store:h,events:r,workspaceId:w,registries:s,api:y}}function n$(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const bh="eda:lastWorkspaceId";function r$(){try{return globalThis.localStorage?.getItem(bh)??null}catch{return null}}function s$(e){try{globalThis.localStorage?.setItem(bh,e)}catch{}}function wh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var i$=Object.defineProperty,o$=Object.getOwnPropertyDescriptor,di=(e,t,n,r)=>{for(var s=r>1?void 0:r?o$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&i$(t,n,s),s};let Un=class extends $e{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=Fn(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await le(),s=crypto.randomUUID();await r.store.tables.insert({id:s,workspaceId:r.workspaceId,name:t,code:Le(t),columns:n.columns,view:"table",updatedAt:Date.now()});const i=n.rows.map(o=>({id:crypto.randomUUID(),tableId:s,data:o,updatedAt:Date.now()}));await r.store.rows(s).bulkInsert(i),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return C`
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
            ${this.errorMsg?C`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Un.styles=[mt,Ce`
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
    `];di([F()],Un.prototype,"name",2);di([F()],Un.prototype,"text",2);di([F()],Un.prototype,"errorMsg",2);Un=di([Te("csv-paste-dialog")],Un);const Oa=new Map;let Gc=!1;function a$(){for(const e of Oa.values())if(e===null||e.open)return!0;return!1}function l$(e,t=null){Oa.set(e,t),u$()}function c$(e){Oa.delete(e)}function yh(e,t){const n=()=>{t.open&&l$(e,t)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>c$(e))}function u$(){Gc||(Gc=!0,window.addEventListener("beforeunload",e=>{a$()&&(e.preventDefault(),e.returnValue="")}))}var d$=Object.defineProperty,h$=Object.getOwnPropertyDescriptor,Da=(e,t,n,r)=>{for(var s=r>1?void 0:r?h$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&d$(t,n,s),s};const f$=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let Dt=class extends $e{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:f$,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return C`
      <dialog @cancel=${this.onCancel} @keydown=${gt}>
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
            <p class="hint">
              Besides the JS globals you can call <code>markdownToHtml(text)</code> (also
              <code>easydb.markdownToHtml</code>) — set this column's renderer to
              <code>html</code> so the result shows as formatted text rather than as its own
              source.
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
    `}};Dt.instance=null;Dt.styles=[mt,Ce`
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
    `];Da([F()],Dt.prototype,"text",2);Da([F()],Dt.prototype,"columnLabel",2);Dt=Da([Te("script-editor-dialog")],Dt);function Yc(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}function vh(e){if(e.source?.type!=="projection")return null;const t=e.source.config;return t&&Array.isArray(t.sources)?t:null}function p$(e,t,n,r){return{projections:t.filter(i=>{if(i.id===r)return!1;const o=vh(i);return!!o&&o.sources.some(l=>l.tableName===e)}),views:n.filter(i=>i.tableName===e)}}function m$(e,t,n){return e.sources.some(r=>r.tableName===t)?{...e,sources:e.sources.map(r=>r.tableName===t?{...r,tableName:n}:r)}:null}function g$(e){const t=[];return e.projections.length>0&&t.push(`${Qc(e.projections.length,"projection")} (${Xc(e.projections.map(n=>n.name))})`),e.views.length>0&&t.push(`${Qc(e.views.length,"view")} (${Xc(e.views.map(n=>n.name||"untitled"))})`),t.length>0?t.join(" and "):null}function Qc(e,t){return`${e} ${t}${e===1?"":"s"}`}function Xc(e){const t=e.slice(0,3).map(n=>`"${n}"`);return e.length>3?`${t.join(", ")} and ${e.length-3} more`:t.join(", ")}var b$=Object.defineProperty,w$=Object.getOwnPropertyDescriptor,Je=(e,t,n,r)=>{for(var s=r>1?void 0:r?w$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&b$(t,n,s),s};const y$=["string","number","boolean","date","datetime"];async function v$(e,t,n,r){const s=await le(),i=(await s.store.viewInstances.find()).filter(o=>o.tableId===e||o.tableName===t);for(const o of i)o.tableName!==n&&await s.store.viewInstances.patch(o.id,{tableName:n,updatedAt:Date.now()});for(const o of r?.projections??[]){const l=vh(o),u=l&&m$(l,t,n);u&&await s.store.tables.patch(o.id,{source:{type:"projection",config:u},updatedAt:Date.now()})}}function $$(e,t,n){const r=`Renaming "${e}" to "${t}" affects ${n}.

They reference this table by name, so they will be updated to point at "${t}". Continue?`,s=at.instance;return s?s.confirm(r,"Rename table"):Promise.resolve(window.confirm(r))}let qe=class extends $e{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&yh("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await le();if(this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await le(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.tableTitle=s.title??"",this.tableReadonly=!!s.readonly,this.columns=s.columns.map(o=>({field:o.field,label:o.label,type:o.type,renderer:o.renderer,script:o.script,max:o.max,unique:o.unique,notnull:o.notnull,hidden:o.hidden,sortable:o.sortable,filterable:o.filterable,origField:o.field,orig:o}));const i=await r.store.rows(e).find();this.previewRows=i.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[s]=r.splice(e,1);r.splice(n,0,s),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=s?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const s=[...this.columns],[i]=s.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),s.splice(o,0,i),this.columns=s}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}async runColumnAction(e){this.errorMsg="";const t=await le();try{const n=await e.run(t.api,{columns:this.columns.map(s=>Yc(s)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(s=>[s.field,s]));this.columns=this.columns.map(s=>{const i=r.get(s.field);return i?{...s,label:i.label??s.label,type:i.type??s.type,renderer:i.renderer,script:i.script}:s})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=Dt.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await le(),r=(await n.store.tables.find()).filter(h=>h.workspaceId===n.workspaceId),s=t.toLowerCase(),i=r.find(h=>h.name.toLowerCase()===s&&h.id!==this.editTableId);if(i){this.errorMsg=`A table named "${i.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const h of this.columns){const p=h.field.trim();if(!p){this.errorMsg="Column field names cannot be empty.";return}if(o.has(p)){this.errorMsg=`Duplicate column field: ${p}`;return}o.add(p)}const l=this.tableTitle.trim(),u=this.columns.map(Yc);if(this.mode==="edit"&&this.editTableId){const h=this.editTableId,p=await n.store.tables.findOne(h),g=new Map((p?.columns??[]).map(R=>[R.field,R])),w=u.filter(R=>{const H=g.get(R.field);return R.unique&&!H?.unique||R.notnull&&!H?.notnull||R.max&&R.max>0&&R.max!==H?.max});if(w.length>0){const R=await n.store.rows(h).find(),H=C$(w,R);if(H.length>0){this.errorMsg=`Cannot save: ${H.length} existing ${H.length===1?"row violates":"rows violate"} the new constraints.
${H.slice(0,5).join(`
`)}${H.length>5?`
…and ${H.length-5} more.`:""}`;return}}const y=new Set(this.columns.map(R=>R.origField).filter(R=>!!R)),$=new Set(u.map(R=>R.field)),x=(p?.columns??[]).map(R=>R.field).filter(R=>!y.has(R)),I=p?.deletedColumns??[],O=[...new Set([...I,...x])].filter(R=>!$.has(R));let j=null;if(p&&p.name!==t){const R=(await n.store.viewInstances.find()).filter(te=>te.workspaceId===n.workspaceId);j=p$(p.name,r,R,h);const H=g$(j);if(H&&!await $$(p.name,t,H))return}const B={name:t,title:l,columns:u,readonly:this.tableReadonly,updatedAt:Date.now()};(O.length>0||I.length>0)&&(B.deletedColumns=O);const Y=p?.name;await n.store.tables.patch(h,B);const ce=x.filter(R=>!$.has(R)),V=this.fieldRenames();if(!p?.source&&(ce.length>0||V.length>0)){const R=await n.store.rows(h).find();for(const H of R){let te=!1,ee={...H.data};const ie=Nl(ee,V);ie&&(ee=ie,te=!0);for(const Q of ce)Q in ee&&(delete ee[Q],te=!0);te&&await n.store.rows(h).patch(H.id,{data:ee,updatedAt:Date.now()})}}Y!==void 0&&Y!==t&&await v$(h,Y,t,j)}else await n.store.tables.insert({id:ke(),workspaceId:n.workspaceId,name:t,title:l,code:Le(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return C`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(s=>({...s,data:Nl(s.data,e)??s.data})):this.previewRows,n=new Map;for(const s of this.columns){if(!s.unique)continue;const i=new Set,o=new Set;for(const l of t){const u=l.data[s.field];u==null||u===""||(i.has(u)&&o.add(u),i.add(u))}n.set(s.field,o)}const r=this.columns.filter(s=>!s.hidden);return C`
      <div class="preview">
        <h3>
          Live preview — first ${this.previewRows.length}
          row${this.previewRows.length===1?"":"s"}
        </h3>
        <table>
          <thead>
            <tr>
              ${r.map(s=>C`<th title=${s.field}>${s.label||s.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(s=>C`
                <tr>
                  ${r.map(i=>{const o=s.data[i.field],l=k$(i,o,n.get(i.field));return C`<td class=${l?"violation":""} title=${l??""}>
                      ${x$(o)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return C`
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
            ${this.noticeMsg?C`<div class="notice">${this.noticeMsg}</div>`:""}
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
              ${this.columns.map((n,r)=>{const s=this.dragSrcIdx===r,i=this.dropTargetIdx===r,o=i&&this.dropEdge==="before"?" drop-before":i&&this.dropEdge==="after"?" drop-after":"";return C`
                  <div
                    class=${`col-row${s?" drag-source":""}${o}`}
                    @dragover=${l=>this.onRowDragOver(l,r,l.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(r)}
                    @drop=${l=>this.onRowDrop(l,r)}
                  >
                    <span
                      class="drag-handle"
                      title="Drag to reorder"
                      draggable="true"
                      @dragstart=${l=>this.onRowDragStart(l,r)}
                      @dragend=${()=>this.onRowDragEnd()}
                    >
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <input
                      type="text"
                      .value=${n.field}
                      @input=${l=>this.patchColumn(r,{field:l.target.value})}
                    />
                    <input
                      type="text"
                      .value=${n.label}
                      @input=${l=>this.patchColumn(r,{label:l.target.value})}
                    />
                    <select
                      .value=${n.type}
                      @change=${l=>this.patchColumn(r,{type:l.target.value})}
                    >
                      ${y$.map(l=>C`<option value=${l} ?selected=${l===n.type}>${l}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${l=>{const u=l.target.value;this.patchColumn(r,{renderer:u||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${this.rendererOptions.map(l=>C`<option value=${l} ?selected=${l===n.renderer}>${l}</option>`)}
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
                      @input=${l=>{const u=l.target.value;this.patchColumn(r,{max:u===""?void 0:Number(u)})}}
                    />
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Unique"
                        .checked=${!!n.unique}
                        @change=${l=>this.patchColumn(r,{unique:l.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Not null"
                        .checked=${!!n.notnull}
                        @change=${l=>this.patchColumn(r,{notnull:l.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Visible — uncheck to hide the column without losing its data"
                        .checked=${!n.hidden}
                        @change=${l=>this.patchColumn(r,{hidden:!l.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Sortable — uncheck to disable sorting on this column"
                        .checked=${n.sortable!==!1}
                        @change=${l=>this.patchColumn(r,{sortable:l.target.checked?void 0:!1})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Filterable — uncheck to disable filtering and search on this column"
                        .checked=${n.filterable!==!1}
                        @change=${l=>this.patchColumn(r,{filterable:l.target.checked?void 0:!1})}
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
            ${this.columnActions.map(n=>C`<button
                type="button"
                class="add"
                title=${n.tooltip??n.label}
                @click=${()=>void this.runColumnAction(n)}
              >
                ${n.label}
              </button>`)}

            ${this.renameDetected()?C`<div class="hint">
                  Existing rows are re-keyed on save, so renamed fields keep their data.
                </div>`:""}
            ${this.errorMsg?C`<div class="error">${this.errorMsg}</div>`:""}
            ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};qe.styles=[wt,mt,Ce`
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
    `];Je([F()],qe.prototype,"mode",2);Je([F()],qe.prototype,"editTableId",2);Je([F()],qe.prototype,"name",2);Je([F()],qe.prototype,"tableTitle",2);Je([F()],qe.prototype,"tableReadonly",2);Je([F()],qe.prototype,"columns",2);Je([F()],qe.prototype,"errorMsg",2);Je([F()],qe.prototype,"noticeMsg",2);Je([F()],qe.prototype,"dragSrcIdx",2);Je([F()],qe.prototype,"dropTargetIdx",2);Je([F()],qe.prototype,"dropEdge",2);Je([F()],qe.prototype,"previewRows",2);Je([F()],qe.prototype,"rendererOptions",2);Je([F()],qe.prototype,"columnActions",2);qe=Je([Te("new-table-dialog")],qe);function x$(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function k$(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const s=Number(t);if(!Number.isFinite(s))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const s=new Date(String(t));if(Number.isNaN(s.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function C$(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((s,i)=>{const o=s.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${i+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((s,i)=>{const o=s.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${i+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${i+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const s=new Map;t.forEach((i,o)=>{const l=i.data[r.field];l==null||l===""||(s.has(l)?n.push(`Row ${o+1}: ${r.label} duplicates row ${s.get(l)+1} ("${String(l)}").`):s.set(l,o))})}return n}var _$=Object.defineProperty,S$=Object.getOwnPropertyDescriptor,Ze=(e,t,n,r)=>{for(var s=r>1?void 0:r?S$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&_$(t,n,s),s};const E$='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',T$=C`<span class="mi sm">extension</span>`,Jc="plugin:catalogUrls";function vs(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const I$=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],$h=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],A$=new Map($h),R$={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let He=class extends $e{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[vs()],this.activeCatalogUrl=vs(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e)}async open(){const e=await le(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(i=>[i.url,i]));const r=await e.store.settings.findOne(Jc),s=Array.isArray(r?.value)?r.value.filter(i=>typeof i=="string"):[];this.catalogUrls=s.length>0?s:[vs()],this.activeCatalogUrl=this.catalogUrls[0]??vs(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(s=>({...s,absUrl:new URL(s.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await le()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const s=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const i=await fetch(s,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const o=await i.json(),l=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=l.map(u=>({...u,absUrl:new URL(u.url,s).toString()})),this.serverCatalogError=null}catch(i){this.serverCatalog=[],this.serverCatalogError=i.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await le()).store.settings.upsert({name:Jc,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await le()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await le();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await le(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await le();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await le(),r=jo(e),s=this.records.get(r);await n.store.plugins.upsert({...s??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:s?.lastFetched??0}),this.records=new Map(this.records.set(r,{...s,url:r,enabled:t,lastFetched:s?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await le()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await le();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const s=new Blob([r],{type:"text/javascript"}),i=URL.createObjectURL(s);try{const l=await import(i);await l.init?.(t.api),await l.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(i),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(l=>[l.url,l])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",s){const i=s?s[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return C`
      <button
        type="button"
        class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`}
        title=${i}
        aria-pressed=${t!==void 0}
        @click=${n}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of B0){const s=r.fixed?!0:this.records.get(jo(n))?.enabled!==!1,i=!r.fixed&&vt==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:s,status:s&&!i?"enabled":"disabled",fixed:!!r.fixed,...i?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),s=this.records.get(n.absUrl),i=r?["available","installed"]:["available"],o=e.get(n.id),l=s?.enabled!==!1,u=r&&vt!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...i]):new Set(i),enabled:l,...r?{status:l&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const s=this.records.get(n),i=s?.lastFetched?new Date(s.lastFetched).toLocaleString():"never",o=s?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:s?.lastError??`Last fetched: ${i}`,metaIsError:!!s?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&vt==="off"?"enabled":"disabled",...vt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[u,h]of this.filterStates)(h==="on"?n:r).push(u);const s=[],i=[];for(const[u,h]of this.typeFilters)(h==="on"?s:i).push(u);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,l=e.filter(u=>!(n.length&&!n.some(h=>u.categories.has(h))||r.some(h=>u.categories.has(h))||s.length&&!(u.type&&s.includes(u.type))||u.type&&i.includes(u.type)||o&&u.status!==o));return t?l.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(h=>h?.toLowerCase().includes(t))):l}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return C`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?Pn(e.icon):T$}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?C`<span class="row-id">${e.id}</span>`:""}${e.type?C`<span class="row-type" title="Plugin type"
                  >${A$.get(e.type)??e.type}</span
                >`:""}${e.skipped?C`<span
                  class="row-skipped"
                  title="Safe mode kept this plugin from loading this session — your saved setting is unchanged"
                  >skipped</span
                >`:""}
          </div>
          ${e.meta?C`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?C`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${Pn(E$)}</a
            >`:C`<span></span>`}
        ${e.fixed?C`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?C`<label
                class="switch"
                title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}
              >
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${s=>this.onRowToggle(e,s.target.checked)}
                />
                <span class="slider"></span>
              </label>`:C`<span></span>`}
        ${r?C`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:n?C`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:C`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return C`
      <dialog @cancel=${this.close} @keydown=${gt}>
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
            ${vt!=="off"?C`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${vt==="all-optional"?C`<code>?safemode</code> skipped every URL plugin and every optional
                        built-in for this session.`:C`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The
                  toggles below still show — and change — your saved settings, which safe mode never
                  touches. Reload without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${I$.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",R$)}
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
              ${$h.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
                ${this.catalogUrls.map(t=>C`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?C`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?C`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            <div class="plugin-list">
              ${e.length===0?C`<p class="hint">No plugins match the current filters/search.</p>`:""}
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
    `}};He.styles=[wt,mt,Ce`
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
    `];Ze([F()],He.prototype,"urls",2);Ze([F()],He.prototype,"records",2);Ze([F()],He.prototype,"addUrl",2);Ze([F()],He.prototype,"catalog",2);Ze([F()],He.prototype,"catalogError",2);Ze([F()],He.prototype,"serverCatalog",2);Ze([F()],He.prototype,"serverCatalogError",2);Ze([F()],He.prototype,"installing",2);Ze([F()],He.prototype,"catalogUrls",2);Ze([F()],He.prototype,"activeCatalogUrl",2);Ze([F()],He.prototype,"search",2);Ze([F()],He.prototype,"filterStates",2);Ze([F()],He.prototype,"typeFilters",2);Ze([F()],He.prototype,"statusFilter",2);He=Ze([Te("plugin-manager-dialog")],He);var O$=Object.defineProperty,D$=Object.getOwnPropertyDescriptor,Bt=(e,t,n,r)=>{for(var s=r>1?void 0:r?D$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&O$(t,n,s),s};const pr="__general__";let nt=class extends $e{constructor(){super(...arguments),this.tabs=[],this.active=pr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const s=r.names.map(i=>`“${i}”`).join(", ");this.secretError=`“${r.field.label}” references ${s}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&bt(this.dialogEl,e),this.dialogEl&&yh("settings",this.dialogEl)}async open(){const e=await le(),t=[...e.registries.settings];this.tabs=t.map(([i,o])=>({id:i,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},s={};for(const i of this.tabs)for(const o of i.fields){const l=`${i.id}:${o.key}`,u=await e.api.settings.placement(i.id,o.key);u==="user"?(r[l]=Go(l),s[l]="user"):u==="workspace"?(r[l]=(await e.store.settings.findOne(l))?.value,s[l]="workspace"):(r[l]=o.default,s[l]=o.scope??"workspace")}this.values=r,this.placements=s,this.secretsText=Hs(),this.active=pr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&nt.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(xr(this.secretsText)));return nt.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await le()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,s=n?"user":"workspace";this.placements={...this.placements,[r]:s},await(await le()).api.settings.set(e.id,t.key,this.values[r],s)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,wu(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await le();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return C`<textarea
          .value=${String(r??"")}
          @change=${s=>this.setValue(e,t,s.target.value)}
        ></textarea>`;case"number":return C`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${s=>{const i=s.target.value;this.setValue(e,t,i===""?void 0:Number(i))}}
        />`;case"boolean":return C`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!r}
            @change=${s=>this.setValue(e,t,s.target.checked)}
          />
          enabled</label
        >`;case"date":return C`<input
          type="date"
          .value=${String(r??"")}
          @change=${s=>this.setValue(e,t,s.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return C`<div class="radios">
          ${(t.options??[]).map(s=>C`<label
              ><input
                type="radio"
                name=${n}
                .checked=${r===s}
                @change=${()=>this.setValue(e,t,s)}
              />${s}</label
            >`)}
        </div>`;case"selection":{const s=Array.isArray(r)?r:[];return C`<div class="checks">
          ${(t.options??[]).map(i=>C`<label
              ><input
                type="checkbox"
                .checked=${s.includes(i)}
                @change=${o=>{const u=o.target.checked?[...s,i]:s.filter(h=>h!==i);this.setValue(e,t,u)}}
              />${i}</label
            >`)}
        </div>`}case"string":default:return C`<input
          type="text"
          .value=${String(r??"")}
          @change=${s=>this.setValue(e,t,s.target.value)}
        />`}}renderSecretControl(e,t,n){const r=Object.keys(xr(this.secretsText)),s=nt.rawSecret(n)||this.missingRefs(n).length>0;return C`<div class="secret-row">
      <input
        type="text"
        class=${s?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${i=>this.setValue(e,t,i.target.value)}
      />
      ${r.length>0?C`<select
            title="Insert a secret reference"
            @change=${i=>{const o=i.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),i.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(i=>C`<option value=${i}>${i}</option>`)}
          </select>`:oe}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),s=this.openHelp===n;return C`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?C`<button
              type="button"
              class="help-btn"
              aria-label=${`Help for ${t.label}`}
              aria-expanded=${s?"true":"false"}
              title=${t.help??"More about this setting"}
              @click=${()=>this.openHelp=s?"":n}
            >
              <span class="mi sm" aria-hidden="true">info</span>
            </button>`:oe}
        <label class="scope" title="Store on this device only (not synced)">
          <input
            type="checkbox"
            .checked=${this.placements[n]==="user"}
            @change=${i=>this.toggleScope(e,t,i.target.checked)}
          />
          user
        </label>
      </div>
      ${r&&s?C`<div class="help-panel">
            ${t.help?C`<p>${t.help}</p>`:oe}
            ${t.helpUrl?C`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer"
                  >${t.helpLinkLabel||P$(t.helpUrl)}</a
                >`:oe}
          </div>`:oe}
      ${this.renderControl(e,t)}
      ${t.description?C`<p class="desc">${t.description}</p>`:oe}
    </div>`}renderGeneral(){return C`
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
    `}renderPanel(){if(this.active===pr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?C`
      <h3>${e.name}</h3>
      ${e.fields.length===0?C`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:oe}render(){return C`
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
          ${this.secretError?C`<div class="secret-error" role="alert">${this.secretError}</div>`:oe}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===pr?"active":""}
                  @click=${()=>this.active=pr}
                >
                  General
                </button>
                ${this.tabs.map(e=>C`<button
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
    `}};nt.styles=[wt,mt,Ce`
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
    `];Bt([F()],nt.prototype,"tabs",2);Bt([F()],nt.prototype,"active",2);Bt([F()],nt.prototype,"values",2);Bt([F()],nt.prototype,"placements",2);Bt([F()],nt.prototype,"secretsText",2);Bt([F()],nt.prototype,"workspaceTitle",2);Bt([F()],nt.prototype,"secretError",2);Bt([F()],nt.prototype,"openHelp",2);nt=Bt([Te("settings-dialog")],nt);function P$(e){try{return new URL(e).host}catch{return e}}const xh=5,Zc="palette:recent",kh="Recent";function L$(e,t,n=xh){return[t,...e.filter(r=>r!==t)].slice(0,n)}function M$(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,xh):[]}function j$(e,t){if(t.length===0)return e;const n=new Map(e.map(i=>[i.id,i])),r=[];for(const i of t){const o=n.get(i);o&&r.push({...o,group:kh})}if(r.length===0)return e;const s=new Set(r.map(i=>i.id));return[...r,...e.filter(i=>!s.has(i.id))]}var N$=Object.defineProperty,z$=Object.getOwnPropertyDescriptor,Gn=(e,t,n,r)=>{for(var s=r>1?void 0:r?z$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&N$(t,n,s),s};const U$={[kh]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function eu(e){return U$[e]??3}function F$(e){return e?e.trimStart().startsWith("<svg")?C`<span class="cmd-svg">${Ho(e)}</span>`:C`<span class="mi sm">${e}</span>`:C`<span class="mi sm">chevron_right</span>`}let en=class extends $e{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await le();this.api=e.api,this.recentIds=M$((await e.api.store.settings.findOne(Zc))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await le(),t=e.api,n=[];for(const i of e.registries.commands)n.push({id:i.id,title:i.title,group:i.group??"Commands",...i.icon?{icon:i.icon}:{},haystack:[i.title,i.group,...i.keywords??[]].join(" ").toLowerCase(),run:()=>i.run(t)});for(const i of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${i.id}`,title:i.label,group:"Actions",...i.icon?{icon:i.icon}:{},haystack:`${i.label} ${i.tooltip??""}`.toLowerCase(),run:()=>i.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((i,o)=>i.name.localeCompare(o.name));for(const i of r)n.push({id:`goto:${i.id}`,title:`Go to: ${i.name}`,group:"Tables",icon:"table_chart",haystack:`${i.name} go to table`.toLowerCase(),run:()=>{Hd(i.id)}});const s=await t.store.viewInstances.find({workspaceId:e.workspaceId});s.sort((i,o)=>i.name.localeCompare(o.name));for(const i of s)n.push({id:`goto-view:${i.id}`,title:`Go to view: ${i.name}`,group:"Views",icon:"view_quilt",haystack:`${i.name} go to view`.toLowerCase(),run:async()=>{await lh(i.id)}});return j$(n,this.recentIds).map((i,o)=>({it:i,i:o})).sort((i,o)=>eu(i.it.group)-eu(o.it.group)||i.i-o.i).map(({it:i})=>i)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=L$(this.recentIds,e);try{await this.api?.store.settings.upsert({name:Zc,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return C`
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
          ${e.length===0?C`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const s=n.group!==t?(t=n.group,n.group):null;return C`
                  ${s?C`<div class="group-head">${s}</div>`:""}
                  <div
                    class=${`item${r===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=r}
                    @click=${()=>this.execute(n)}
                  >
                    ${F$(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};en.styles=[wt,Ce`
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
    `];Gn([F()],en.prototype,"search",2);Gn([F()],en.prototype,"items",2);Gn([F()],en.prototype,"selected",2);Gn([Lt("dialog")],en.prototype,"dialogEl",2);Gn([Lt("input")],en.prototype,"inputEl",2);en=Gn([Te("command-palette-dialog")],en);var B$=Object.defineProperty,q$=Object.getOwnPropertyDescriptor,Ch=(e,t,n,r)=>{for(var s=r>1?void 0:r?q$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&B$(t,n,s),s};let Us=class extends $e{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await le();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await Vd(),await Vv()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?C``:C`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Us.styles=Ce`
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
  `;Ch([F()],Us.prototype,"tables",2);Us=Ch([Te("table-list")],Us);function $s(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function H$(e,t){const{from:n,to:r,name:s,mode:i}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:s,createdAt:Date.now(),pluginUrls:i==="empty"?[]:[...o?.pluginUrls??[]]}),i==="empty")return r;if(i==="all"){const u=await e.tables.where("workspaceId").equals(n).toArray(),h=new Map;for(const y of u){const $=$s();h.set(y.id,$),await e.tables.put({...y,id:$,workspaceId:r,updatedAt:Date.now()})}for(const[y,$]of h){const x=await e.rows.where("tableId").equals(y).toArray();x.length>0&&await e.rows.bulkPut(x.map(I=>({...I,id:$s(),tableId:$})))}const p=await e.viewTemplates.where("workspaceId").equals(n).toArray(),g=new Map;for(const y of p){const $=$s();g.set(y.id,$),await e.viewTemplates.put({...y,id:$,workspaceId:r})}const w=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const y of w){const $=h.get(y.tableId);$&&await e.viewInstances.put({...y,id:$s(),workspaceId:r,tableId:$,templateId:g.get(y.templateId)??y.templateId})}}const l=await e.settings.where("workspaceId").equals(n).toArray();for(const u of l)await e.settings.put({...u,key:mn(r,u.name),workspaceId:r,name:u.name});return r}var K$=Object.defineProperty,V$=Object.getOwnPropertyDescriptor,Pa=(e,t,n,r)=>{for(var s=r>1?void 0:r?V$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&K$(t,n,s),s};const tu="Clone everything (tables, views, settings)",nu="Clone settings only (no data)",W$="Empty workspace";let Ir=class extends $e{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await le();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(s=>s.id===e);if(!t)return;const n=new URLSearchParams(location.search);n.set("space",t.name);const r=`${location.pathname}?${n.toString()}${location.hash}`;location.assign(r)}async addWorkspace(){const e=await le(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[tu,nu,W$],"New workspace");if(!n)return;const r=n===tu?"all":n===nu?"settings":"empty",s=wh(t.trim());await H$(pu(),{from:e.workspaceId,to:s,name:t.trim(),mode:r});const i=new URLSearchParams(location.search);i.set("space",t.trim()),location.assign(`${location.pathname}?${i.toString()}${location.hash}`)}render(){return C`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>C`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Ir.styles=[wt,Ce`
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
    `];Pa([F()],Ir.prototype,"workspaces",2);Pa([F()],Ir.prototype,"current",2);Ir=Pa([Te("workspace-selector")],Ir);var ru=Object.freeze,_h=Object.defineProperty,G$=Object.getOwnPropertyDescriptor,kt=(e,t,n,r)=>{for(var s=r>1?void 0:r?G$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&_h(t,n,s),s},Y$=(e,t)=>ru(_h(e,"raw",{value:ru(e.slice())})),su;function iu(e){return e?e.trimStart().startsWith("<svg")?C`<span class="icon-svg" aria-hidden="true">${Ho(e)}</span>`:C`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let st=class extends $e{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{au(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{const t=e.relatedTarget;t&&(this.contains(t)||X$()?.contains(t))||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!au(e))return;e.preventDefault();const t=await le(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(s){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:s})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),document.addEventListener("dragover",this.onDragOver),document.addEventListener("dragleave",this.onDragLeave),document.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragover",this.onDragOver),document.removeEventListener("dragleave",this.onDragLeave),document.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await le();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",Q$(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return C`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${iu(e.icon)}
        </button>
      `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return C`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${iu(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return C(su||(su=Y$([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.276</span></a
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?C`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?C`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:C`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              aria-label="Search"
              @click=${this.openSearch}
            >
              <span class="mi" aria-hidden="true">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};st.styles=[wt,Ce`
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
    `];kt([Lt("new-table-dialog")],st.prototype,"dialog",2);kt([Lt("csv-paste-dialog")],st.prototype,"csvPasteDialog",2);kt([Lt("plugin-manager-dialog")],st.prototype,"pluginManagerDialog",2);kt([Lt("settings-dialog")],st.prototype,"settingsDialog",2);kt([Lt("command-palette-dialog")],st.prototype,"commandPaletteDialog",2);kt([Lt("input.search")],st.prototype,"searchInput",2);kt([F()],st.prototype,"footerButtons",2);kt([F()],st.prototype,"headerButtons",2);kt([F()],st.prototype,"searchQuery",2);kt([F()],st.prototype,"searchOpen",2);kt([F()],st.prototype,"workspaceTitle",2);st=kt([Te("app-shell")],st);const ou=document.title;function Q$(e){const t=e.trim();document.title=t?`${t} — ${ou}`:ou}function X$(){return document.getElementById("easydb-panels")}function au(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([le(),Xe(()=>Promise.resolve().then(()=>sh),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{oe as A,Ce as a,C as b,gt as c,mt as d,dx as g,$e as i,bt as m,F as r,Te as t};
//# sourceMappingURL=index-D5pBHWKc.js.map
