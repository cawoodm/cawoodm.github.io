(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const rp="modulepreload",sp=function(e){return"/easydbaccess/"+e},Hl={},et=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");s=o(n.map(h=>{if(h=sp(h),h in Hl)return;Hl[h]=!0;const p=h.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":rp,p||(y.as="script"),y.crossOrigin="",y.href=h,u&&y.setAttribute("nonce",u),document.head.appendChild(y),p)return new Promise((w,$)=>{y.addEventListener("load",w),y.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds=globalThis,ca=Ds.ShadowRoot&&(Ds.ShadyCSS===void 0||Ds.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ua=Symbol(),Kl=new WeakMap;let Uu=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==ua)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ca&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Kl.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Kl.set(n,t))}return t}toString(){return this.cssText}};const ip=e=>new Uu(typeof e=="string"?e:e+"",void 0,ua),Se=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Uu(n,e,ua)},op=(e,t)=>{if(ca)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=Ds.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},Vl=ca?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ip(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ap,defineProperty:lp,getOwnPropertyDescriptor:cp,getOwnPropertyNames:up,getOwnPropertySymbols:dp,getPrototypeOf:hp}=Object,si=globalThis,Wl=si.trustedTypes,fp=Wl?Wl.emptyScript:"",pp=si.reactiveElementPolyfillSupport,Ir=(e,t)=>e,Fs={toAttribute(e,t){switch(t){case Boolean:e=e?fp:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},da=(e,t)=>!ap(e,t),Gl={attribute:!0,type:String,converter:Fs,reflect:!1,useDefault:!1,hasChanged:da};Symbol.metadata??=Symbol("metadata"),si.litPropertyMetadata??=new WeakMap;let Un=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Gl){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&lp(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:i}=cp(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:s,set(o){const l=s?.call(this);i?.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gl}static _$Ei(){if(this.hasOwnProperty(Ir("elementProperties")))return;const t=hp(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ir("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ir("properties"))){const n=this.properties,r=[...up(n),...dp(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(Vl(s))}else t!==void 0&&n.push(Vl(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return op(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:Fs).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Fs;this._$Em=s;const l=o.fromAttribute(n,i.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,n,r,s=!1,i){if(t!==void 0){const o=this.constructor;if(s===!1&&(i=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??da)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r){const{wrapped:o}=i,l=this[s];o!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,i,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Un.elementStyles=[],Un.shadowRootOptions={mode:"open"},Un[Ir("elementProperties")]=new Map,Un[Ir("finalized")]=new Map,pp?.({ReactiveElement:Un}),(si.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ha=globalThis,Yl=e=>e,Bs=ha.trustedTypes,Ql=Bs?Bs.createPolicy("lit-html",{createHTML:e=>e}):void 0,Fu="$lit$",rn=`lit$${Math.random().toFixed(9).slice(2)}$`,Bu="?"+rn,mp=`<${Bu}>`,_n=document,Rr=()=>_n.createComment(""),Or=e=>e===null||typeof e!="object"&&typeof e!="function",fa=Array.isArray,gp=e=>fa(e)||typeof e?.[Symbol.iterator]=="function",yo=`[ 	
\f\r]`,vr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jl=/-->/g,Xl=/>/g,vn=RegExp(`>|${yo}(?:([^\\s"'>=/]+)(${yo}*=${yo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zl=/'/g,ec=/"/g,qu=/^(?:script|style|textarea|title)$/i,bp=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),k=bp(1),Sn=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),tc=new WeakMap,Cn=_n.createTreeWalker(_n,129);function Hu(e,t){if(!fa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ql!==void 0?Ql.createHTML(t):t}const wp=(e,t)=>{const n=e.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=vr;for(let l=0;l<n;l++){const u=e[l];let h,p,g=-1,y=0;for(;y<u.length&&(o.lastIndex=y,p=o.exec(u),p!==null);)y=o.lastIndex,o===vr?p[1]==="!--"?o=Jl:p[1]!==void 0?o=Xl:p[2]!==void 0?(qu.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=vn):p[3]!==void 0&&(o=vn):o===vn?p[0]===">"?(o=s??vr,g=-1):p[1]===void 0?g=-2:(g=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?vn:p[3]==='"'?ec:Zl):o===ec||o===Zl?o=vn:o===Jl||o===Xl?o=vr:(o=vn,s=void 0);const w=o===vn&&e[l+1].startsWith("/>")?" ":"";i+=o===vr?u+mp:g>=0?(r.push(h),u.slice(0,g)+Fu+u.slice(g)+rn+w):u+rn+(g===-2?l:w)}return[Hu(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Dr{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const l=t.length-1,u=this.parts,[h,p]=wp(t,n);if(this.el=Dr.createElement(h,r),Cn.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=Cn.nextNode())!==null&&u.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const g of s.getAttributeNames())if(g.endsWith(Fu)){const y=p[o++],w=s.getAttribute(g).split(rn),$=/([.?@])?(.*)/.exec(y);u.push({type:1,index:i,name:$[2],strings:w,ctor:$[1]==="."?vp:$[1]==="?"?$p:$[1]==="@"?xp:ii}),s.removeAttribute(g)}else g.startsWith(rn)&&(u.push({type:6,index:i}),s.removeAttribute(g));if(qu.test(s.tagName)){const g=s.textContent.split(rn),y=g.length-1;if(y>0){s.textContent=Bs?Bs.emptyScript:"";for(let w=0;w<y;w++)s.append(g[w],Rr()),Cn.nextNode(),u.push({type:2,index:++i});s.append(g[y],Rr())}}}else if(s.nodeType===8)if(s.data===Bu)u.push({type:2,index:i});else{let g=-1;for(;(g=s.data.indexOf(rn,g+1))!==-1;)u.push({type:7,index:i}),g+=rn.length-1}i++}}static createElement(t,n){const r=_n.createElement("template");return r.innerHTML=t,r}}function Hn(e,t,n=e,r){if(t===Sn)return t;let s=r!==void 0?n._$Co?.[r]:n._$Cl;const i=Or(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=s:n._$Cl=s),s!==void 0&&(t=Hn(e,s._$AS(e,t.values),s,r)),t}class yp{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=(t?.creationScope??_n).importNode(n,!0);Cn.currentNode=s;let i=Cn.nextNode(),o=0,l=0,u=r[0];for(;u!==void 0;){if(o===u.index){let h;u.type===2?h=new Fr(i,i.nextSibling,this,t):u.type===1?h=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(h=new kp(i,this,t)),this._$AV.push(h),u=r[++l]}o!==u?.index&&(i=Cn.nextNode(),o++)}return Cn.currentNode=_n,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Fr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Hn(this,t,n),Or(t)?t===ie||t==null||t===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):t!==this._$AH&&t!==Sn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gp(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ie&&Or(this._$AH)?this._$AA.nextSibling.data=t:this.T(_n.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Dr.createElement(Hu(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(n);else{const i=new yp(s,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(t){let n=tc.get(t.strings);return n===void 0&&tc.set(t.strings,n=new Dr(t)),n}k(t){fa(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of t)s===n.length?n.push(r=new Fr(this.O(Rr()),this.O(Rr()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=Yl(t).nextSibling;Yl(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ii{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,i){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ie}_$AI(t,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=Hn(this,t,n,0),o=!Or(t)||t!==this._$AH&&t!==Sn,o&&(this._$AH=t);else{const l=t;let u,h;for(t=i[0],u=0;u<i.length-1;u++)h=Hn(this,l[r+u],n,u),h===Sn&&(h=this._$AH[u]),o||=!Or(h)||h!==this._$AH[u],h===ie?t=ie:t!==ie&&(t+=(h??"")+i[u+1]),this._$AH[u]=h}o&&!s&&this.j(t)}j(t){t===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class vp extends ii{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ie?void 0:t}}class $p extends ii{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ie)}}class xp extends ii{constructor(t,n,r,s,i){super(t,n,r,s,i),this.type=5}_$AI(t,n=this){if((t=Hn(this,t,n,0)??ie)===Sn)return;const r=this._$AH,s=t===ie&&r!==ie||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==ie&&(r===ie||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class kp{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Hn(this,t)}}const Cp=ha.litHtmlPolyfillSupport;Cp?.(Dr,Fr),(ha.litHtmlVersions??=[]).push("3.3.3");const _p=(e,t,n)=>{const r=n?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const i=n?.renderBefore??null;r._$litPart$=s=new Fr(t.insertBefore(Rr(),i),i,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pa=globalThis;let ke=class extends Un{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_p(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Sn}};ke._$litElement$=!0,ke.finalized=!0,pa.litElementHydrateSupport?.({LitElement:ke});const Sp=pa.litElementPolyfillSupport;Sp?.({LitElement:ke});(pa.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ep={attribute:!0,type:String,converter:Fs,reflect:!1,hasChanged:da},Tp=(e=Ep,t,n)=>{const{kind:r,metadata:s}=n;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(l){const u=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,u,e,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(r==="setter"){const{name:o}=n;return function(l){const u=this[o];t.call(this,l),this.requestUpdate(o,u,e,!0,l)}}throw Error("Unsupported decorator location: "+r)};function wt(e){return(t,n)=>typeof n=="object"?Tp(e,t,n):((r,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(e){return wt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ip=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ft(e,t){return(n,r,s)=>{const i=o=>o.renderRoot?.querySelector(e)??null;return Ip(n,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ap={CHILD:2},Ku=e=>(...t)=>({_$litDirective$:e,values:t});class Rp{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qs extends Rp{constructor(t){if(super(t),this.it=ie,t.type!==Ap.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ie||t==null)return this._t=void 0,this.it=t;if(t===Sn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}qs.directiveName="unsafeHTML",qs.resultType=1;const qn=Ku(qs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Po extends qs{}Po.directiveName="unsafeSVG",Po.resultType=2;const ma=Ku(Po);var Op=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ps={exports:{}},Pp=Ps.exports,nc;function Lp(){return nc||(nc=1,(function(e,t){(function(n,r){e.exports=r()})(Pp,function(){var n=function(a,c){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,f){d.__proto__=f}||function(d,f){for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(d[m]=f[m])})(a,c)},r=function(){return(r=Object.assign||function(a){for(var c,d=1,f=arguments.length;d<f;d++)for(var m in c=arguments[d])Object.prototype.hasOwnProperty.call(c,m)&&(a[m]=c[m]);return a}).apply(this,arguments)};function s(a,c,d){for(var f,m=0,b=c.length;m<b;m++)!f&&m in c||((f=f||Array.prototype.slice.call(c,0,m))[m]=c[m]);return a.concat(f||Array.prototype.slice.call(c))}var i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Op,o=Object.keys,l=Array.isArray;function u(a,c){return typeof c!="object"||o(c).forEach(function(d){a[d]=c[d]}),a}typeof Promise>"u"||i.Promise||(i.Promise=Promise);var h=Object.getPrototypeOf,p={}.hasOwnProperty;function g(a,c){return p.call(a,c)}function y(a,c){typeof c=="function"&&(c=c(h(a))),(typeof Reflect>"u"?o:Reflect.ownKeys)(c).forEach(function(d){$(a,d,c[d])})}var w=Object.defineProperty;function $(a,c,d,f){w(a,c,u(d&&g(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},f))}function C(a){return{from:function(c){return a.prototype=Object.create(c.prototype),$(a.prototype,"constructor",a),{extend:y.bind(null,a.prototype)}}}}var P=Object.getOwnPropertyDescriptor,R=[].slice;function L(a,c,d){return R.call(a,c,d)}function G(a,c){return c(a)}function z(a){if(!a)throw new Error("Assertion Failed")}function re(a){i.setImmediate?setImmediate(a):setTimeout(a,0)}function V(a,c){if(typeof c=="string"&&g(a,c))return a[c];if(!c)return a;if(typeof c!="string"){for(var d=[],f=0,m=c.length;f<m;++f){var b=V(a,c[f]);d.push(b)}return d}var v=c.indexOf(".");if(v!==-1){var x=a[c.substr(0,v)];return x==null?void 0:V(x,c.substr(v+1))}}function S(a,c,d){if(a&&c!==void 0&&!("isFrozen"in Object&&Object.isFrozen(a)))if(typeof c!="string"&&"length"in c){z(typeof d!="string"&&"length"in d);for(var f=0,m=c.length;f<m;++f)S(a,c[f],d[f])}else{var b,v,x=c.indexOf(".");x!==-1?(b=c.substr(0,x),(v=c.substr(x+1))===""?d===void 0?l(a)&&!isNaN(parseInt(b))?a.splice(b,1):delete a[b]:a[b]=d:S(x=!(x=a[b])||!g(a,b)?a[b]={}:x,v,d)):d===void 0?l(a)&&!isNaN(parseInt(c))?a.splice(c,1):delete a[c]:a[c]=d}}function q(a){var c,d={};for(c in a)g(a,c)&&(d[c]=a[c]);return d}var ee=[].concat;function te(a){return ee.apply([],a)}var qt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(te([8,16,32,64].map(function(a){return["Int","Uint","Float"].map(function(c){return c+a+"Array"})}))).filter(function(a){return i[a]}),ce=new Set(qt.map(function(a){return i[a]})),W=null;function de(a){return W=new WeakMap,a=(function c(d){if(!d||typeof d!="object")return d;var f=W.get(d);if(f)return f;if(l(d)){f=[],W.set(d,f);for(var m=0,b=d.length;m<b;++m)f.push(c(d[m]))}else if(ce.has(d.constructor))f=d;else{var v,x=h(d);for(v in f=x===Object.prototype?{}:Object.create(x),W.set(d,f),d)g(d,v)&&(f[v]=c(d[v]))}return f})(a),W=null,a}var K={}.toString;function ae(a){return K.call(a).slice(8,-1)}var $e=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ge=typeof $e=="symbol"?function(a){var c;return a!=null&&(c=a[$e])&&c.apply(a)}:function(){return null};function Me(a,c){return c=a.indexOf(c),0<=c&&a.splice(c,1),0<=c}var me={};function je(a){var c,d,f,m;if(arguments.length===1){if(l(a))return a.slice();if(this===me&&typeof a=="string")return[a];if(m=Ge(a)){for(d=[];!(f=m.next()).done;)d.push(f.value);return d}if(a==null)return[a];if(typeof(c=a.length)!="number")return[a];for(d=new Array(c);c--;)d[c]=a[c];return d}for(c=arguments.length,d=new Array(c);c--;)d[c]=arguments[c];return d}var kt=typeof Symbol<"u"?function(a){return a[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},lr=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ct=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(lr),ye={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ae(a,c){this.name=a,this.message=c}function rt(a,c){return a+". Errors: "+Object.keys(c).map(function(d){return c[d].toString()}).filter(function(d,f,m){return m.indexOf(d)===f}).join(`
`)}function Xe(a,c,d,f){this.failures=c,this.failedKeys=f,this.successCount=d,this.message=rt(a,c)}function On(a,c){this.name="BulkError",this.failures=Object.keys(c).map(function(d){return c[d]}),this.failuresByPos=c,this.message=rt(a,this.failures)}C(Ae).from(Error).extend({toString:function(){return this.name+": "+this.message}}),C(Xe).from(Ae),C(On).from(Ae);var Li=Ct.reduce(function(a,c){return a[c]=c+"Error",a},{}),Sf=Ae,he=Ct.reduce(function(a,c){var d=c+"Error";function f(m,b){this.name=d,m?typeof m=="string"?(this.message="".concat(m).concat(b?`
 `+b:""),this.inner=b||null):typeof m=="object"&&(this.message="".concat(m.name," ").concat(m.message),this.inner=m):(this.message=ye[c]||d,this.inner=null)}return C(f).from(Sf),a[c]=f,a},{});he.Syntax=SyntaxError,he.Type=TypeError,he.Range=RangeError;var ul=lr.reduce(function(a,c){return a[c+"Error"]=he[c],a},{}),Qr=Ct.reduce(function(a,c){return["Syntax","Type","Range"].indexOf(c)===-1&&(a[c+"Error"]=he[c]),a},{});function Ce(){}function or(a){return a}function Ef(a,c){return a==null||a===or?c:function(d){return c(a(d))}}function un(a,c){return function(){a.apply(this,arguments),c.apply(this,arguments)}}function Tf(a,c){return a===Ce?c:function(){var d=a.apply(this,arguments);d!==void 0&&(arguments[0]=d);var f=this.onsuccess,m=this.onerror;this.onsuccess=null,this.onerror=null;var b=c.apply(this,arguments);return f&&(this.onsuccess=this.onsuccess?un(f,this.onsuccess):f),m&&(this.onerror=this.onerror?un(m,this.onerror):m),b!==void 0?b:d}}function If(a,c){return a===Ce?c:function(){a.apply(this,arguments);var d=this.onsuccess,f=this.onerror;this.onsuccess=this.onerror=null,c.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?un(d,this.onsuccess):d),f&&(this.onerror=this.onerror?un(f,this.onerror):f)}}function Af(a,c){return a===Ce?c:function(d){var f=a.apply(this,arguments);u(d,f);var m=this.onsuccess,b=this.onerror;return this.onsuccess=null,this.onerror=null,d=c.apply(this,arguments),m&&(this.onsuccess=this.onsuccess?un(m,this.onsuccess):m),b&&(this.onerror=this.onerror?un(b,this.onerror):b),f===void 0?d===void 0?void 0:d:u(f,d)}}function Rf(a,c){return a===Ce?c:function(){return c.apply(this,arguments)!==!1&&a.apply(this,arguments)}}function Mi(a,c){return a===Ce?c:function(){var d=a.apply(this,arguments);if(d&&typeof d.then=="function"){for(var f=this,m=arguments.length,b=new Array(m);m--;)b[m]=arguments[m];return d.then(function(){return c.apply(f,b)})}return c.apply(this,arguments)}}Qr.ModifyError=Xe,Qr.DexieError=Ae,Qr.BulkError=On;var Pt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function dl(a){Pt=a}var ar={},hl=100,qt=typeof Promise>"u"?[]:(function(){var a=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[a,h(a),a];var c=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[c,h(c),a]})(),lr=qt[0],Ct=qt[1],qt=qt[2],Ct=Ct&&Ct.then,dn=lr&&lr.constructor,ji=!!qt,cr=function(a,c){ur.push([a,c]),Jr&&(queueMicrotask(Df),Jr=!1)},Ni=!0,Jr=!0,hn=[],Xr=[],zi=or,Yt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Ce,pgp:!1,env:{},finalize:Ce},ue=Yt,ur=[],fn=0,Zr=[];function se(a){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var c=this._PSD=ue;if(typeof a!="function"){if(a!==ar)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Fi(this,this._value))}this._state=null,this._value=null,++c.ref,(function d(f,m){try{m(function(b){if(f._state===null){if(b===f)throw new TypeError("A promise cannot be resolved with itself.");var v=f._lib&&Dn();b&&typeof b.then=="function"?d(f,function(x,E){b instanceof se?b._then(x,E):b.then(x,E)}):(f._state=!0,f._value=b,pl(f)),v&&Pn()}},Fi.bind(null,f))}catch(b){Fi(f,b)}})(this,a)}var Ui={get:function(){var a=ue,c=rs;function d(f,m){var b=this,v=!a.global&&(a!==ue||c!==rs),x=v&&!Jt(),E=new se(function(I,D){Bi(b,new fl(gl(f,a,v,x),gl(m,a,v,x),I,D,a))});return this._consoleTask&&(E._consoleTask=this._consoleTask),E}return d.prototype=ar,d},set:function(a){$(this,"then",a&&a.prototype===ar?Ui:{get:function(){return a},set:Ui.set})}};function fl(a,c,d,f,m){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof c=="function"?c:null,this.resolve=d,this.reject=f,this.psd=m}function Fi(a,c){var d,f;Xr.push(c),a._state===null&&(d=a._lib&&Dn(),c=zi(c),a._state=!1,a._value=c,f=a,hn.some(function(m){return m._value===f._value})||hn.push(f),pl(a),d&&Pn())}function pl(a){var c=a._listeners;a._listeners=[];for(var d=0,f=c.length;d<f;++d)Bi(a,c[d]);var m=a._PSD;--m.ref||m.finalize(),fn===0&&(++fn,cr(function(){--fn==0&&qi()},[]))}function Bi(a,c){if(a._state!==null){var d=a._state?c.onFulfilled:c.onRejected;if(d===null)return(a._state?c.resolve:c.reject)(a._value);++c.psd.ref,++fn,cr(Of,[d,a,c])}else a._listeners.push(c)}function Of(a,c,d){try{var f,m=c._value;!c._state&&Xr.length&&(Xr=[]),f=Pt&&c._consoleTask?c._consoleTask.run(function(){return a(m)}):a(m),c._state||Xr.indexOf(m)!==-1||(function(b){for(var v=hn.length;v;)if(hn[--v]._value===b._value)return hn.splice(v,1)})(c),d.resolve(f)}catch(b){d.reject(b)}finally{--fn==0&&qi(),--d.psd.ref||d.psd.finalize()}}function Df(){pn(Yt,function(){Dn()&&Pn()})}function Dn(){var a=Ni;return Jr=Ni=!1,a}function Pn(){var a,c,d;do for(;0<ur.length;)for(a=ur,ur=[],d=a.length,c=0;c<d;++c){var f=a[c];f[0].apply(null,f[1])}while(0<ur.length);Jr=Ni=!0}function qi(){var a=hn;hn=[],a.forEach(function(f){f._PSD.onunhandled.call(null,f._value,f)});for(var c=Zr.slice(0),d=c.length;d;)c[--d]()}function es(a){return new se(ar,!1,a)}function Re(a,c){var d=ue;return function(){var f=Dn(),m=ue;try{return Xt(d,!0),a.apply(this,arguments)}catch(b){c&&c(b)}finally{Xt(m,!1),f&&Pn()}}}y(se.prototype,{then:Ui,_then:function(a,c){Bi(this,new fl(null,null,a,c,ue))},catch:function(a){if(arguments.length===1)return this.then(null,a);var c=a,d=arguments[1];return typeof c=="function"?this.then(null,function(f){return(f instanceof c?d:es)(f)}):this.then(null,function(f){return(f&&f.name===c?d:es)(f)})},finally:function(a){return this.then(function(c){return se.resolve(a()).then(function(){return c})},function(c){return se.resolve(a()).then(function(){return es(c)})})},timeout:function(a,c){var d=this;return a<1/0?new se(function(f,m){var b=setTimeout(function(){return m(new he.Timeout(c))},a);d.then(f,m).finally(clearTimeout.bind(null,b))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&$(se.prototype,Symbol.toStringTag,"Dexie.Promise"),Yt.env=ml(),y(se,{all:function(){var a=je.apply(null,arguments).map(ss);return new se(function(c,d){a.length===0&&c([]);var f=a.length;a.forEach(function(m,b){return se.resolve(m).then(function(v){a[b]=v,--f||c(a)},d)})})},resolve:function(a){return a instanceof se?a:a&&typeof a.then=="function"?new se(function(c,d){a.then(c,d)}):new se(ar,!0,a)},reject:es,race:function(){var a=je.apply(null,arguments).map(ss);return new se(function(c,d){a.map(function(f){return se.resolve(f).then(c,d)})})},PSD:{get:function(){return ue},set:function(a){return ue=a}},totalEchoes:{get:function(){return rs}},newPSD:Qt,usePSD:pn,scheduler:{get:function(){return cr},set:function(a){cr=a}},rejectionMapper:{get:function(){return zi},set:function(a){zi=a}},follow:function(a,c){return new se(function(d,f){return Qt(function(m,b){var v=ue;v.unhandleds=[],v.onunhandled=b,v.finalize=un(function(){var x,E=this;x=function(){E.unhandleds.length===0?m():b(E.unhandleds[0])},Zr.push(function I(){x(),Zr.splice(Zr.indexOf(I),1)}),++fn,cr(function(){--fn==0&&qi()},[])},v.finalize),a()},c,d,f)})}}),dn&&(dn.allSettled&&$(se,"allSettled",function(){var a=je.apply(null,arguments).map(ss);return new se(function(c){a.length===0&&c([]);var d=a.length,f=new Array(d);a.forEach(function(m,b){return se.resolve(m).then(function(v){return f[b]={status:"fulfilled",value:v}},function(v){return f[b]={status:"rejected",reason:v}}).then(function(){return--d||c(f)})})})}),dn.any&&typeof AggregateError<"u"&&$(se,"any",function(){var a=je.apply(null,arguments).map(ss);return new se(function(c,d){a.length===0&&d(new AggregateError([]));var f=a.length,m=new Array(f);a.forEach(function(b,v){return se.resolve(b).then(function(x){return c(x)},function(x){m[v]=x,--f||d(new AggregateError(m))})})})}),dn.withResolvers&&(se.withResolvers=dn.withResolvers));var Ue={awaits:0,echoes:0,id:0},Pf=0,ts=[],ns=0,rs=0,Lf=0;function Qt(a,c,d,f){var m=ue,b=Object.create(m);return b.parent=m,b.ref=0,b.global=!1,b.id=++Lf,Yt.env,b.env=ji?{Promise:se,PromiseProp:{value:se,configurable:!0,writable:!0},all:se.all,race:se.race,allSettled:se.allSettled,any:se.any,resolve:se.resolve,reject:se.reject}:{},c&&u(b,c),++m.ref,b.finalize=function(){--this.parent.ref||this.parent.finalize()},f=pn(b,a,d,f),b.ref===0&&b.finalize(),f}function Ln(){return Ue.id||(Ue.id=++Pf),++Ue.awaits,Ue.echoes+=hl,Ue.id}function Jt(){return!!Ue.awaits&&(--Ue.awaits==0&&(Ue.id=0),Ue.echoes=Ue.awaits*hl,!0)}function ss(a){return Ue.echoes&&a&&a.constructor===dn?(Ln(),a.then(function(c){return Jt(),c},function(c){return Jt(),Pe(c)})):a}function Mf(){var a=ts[ts.length-1];ts.pop(),Xt(a,!1)}function Xt(a,c){var d,f=ue;(c?!Ue.echoes||ns++&&a===ue:!ns||--ns&&a===ue)||queueMicrotask(c?function(m){++rs,Ue.echoes&&--Ue.echoes!=0||(Ue.echoes=Ue.awaits=Ue.id=0),ts.push(ue),Xt(m,!0)}.bind(null,a):Mf),a!==ue&&(ue=a,f===Yt&&(Yt.env=ml()),ji&&(d=Yt.env.Promise,c=a.env,(f.global||a.global)&&(Object.defineProperty(i,"Promise",c.PromiseProp),d.all=c.all,d.race=c.race,d.resolve=c.resolve,d.reject=c.reject,c.allSettled&&(d.allSettled=c.allSettled),c.any&&(d.any=c.any))))}function ml(){var a=i.Promise;return ji?{Promise:a,PromiseProp:Object.getOwnPropertyDescriptor(i,"Promise"),all:a.all,race:a.race,allSettled:a.allSettled,any:a.any,resolve:a.resolve,reject:a.reject}:{}}function pn(a,c,d,f,m){var b=ue;try{return Xt(a,!0),c(d,f,m)}finally{Xt(b,!1)}}function gl(a,c,d,f){return typeof a!="function"?a:function(){var m=ue;d&&Ln(),Xt(c,!0);try{return a.apply(this,arguments)}finally{Xt(m,!1),f&&queueMicrotask(Jt)}}}function Hi(a){Promise===dn&&Ue.echoes===0?ns===0?a():enqueueNativeMicroTask(a):setTimeout(a,0)}(""+Ct).indexOf("[native code]")===-1&&(Ln=Jt=Ce);var Pe=se.reject,mn="￿",Bt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",bl="String expected.",Mn=[],is="__dbnames",Ki="readonly",Vi="readwrite";function gn(a,c){return a?c?function(){return a.apply(this,arguments)&&c.apply(this,arguments)}:a:c}var wl={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function os(a){return typeof a!="string"||/\./.test(a)?function(c){return c}:function(c){return c[a]===void 0&&a in c&&delete(c=de(c))[a],c}}function yl(){throw he.Type()}function ve(a,c){try{var d=vl(a),f=vl(c);if(d!==f)return d==="Array"?1:f==="Array"?-1:d==="binary"?1:f==="binary"?-1:d==="string"?1:f==="string"?-1:d==="Date"?1:f!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return c<a?1:a<c?-1:0;case"binary":return(function(m,b){for(var v=m.length,x=b.length,E=v<x?v:x,I=0;I<E;++I)if(m[I]!==b[I])return m[I]<b[I]?-1:1;return v===x?0:v<x?-1:1})($l(a),$l(c));case"Array":return(function(m,b){for(var v=m.length,x=b.length,E=v<x?v:x,I=0;I<E;++I){var D=ve(m[I],b[I]);if(D!==0)return D}return v===x?0:v<x?-1:1})(a,c)}}catch{}return NaN}function vl(a){var c=typeof a;return c!="object"?c:ArrayBuffer.isView(a)?"binary":(a=ae(a),a==="ArrayBuffer"?"binary":a)}function $l(a){return a instanceof Uint8Array?a:ArrayBuffer.isView(a)?new Uint8Array(a.buffer,a.byteOffset,a.byteLength):new Uint8Array(a)}var xl=(Ee.prototype._trans=function(a,c,d){var f=this._tx||ue.trans,m=this.name,b=Pt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(a==="readonly"?"read":"write"," ").concat(this.name));function v(I,D,_){if(!_.schema[m])throw new he.NotFound("Table "+m+" not part of transaction");return c(_.idbtrans,_)}var x=Dn();try{var E=f&&f.db._novip===this.db._novip?f===ue.trans?f._promise(a,v,d):Qt(function(){return f._promise(a,v,d)},{trans:f,transless:ue.transless||ue}):(function I(D,_,j,T){if(D.idbdb&&(D._state.openComplete||ue.letThrough||D._vip)){var O=D._createTransaction(_,j,D._dbSchema);try{O.create(),D._state.PR1398_maxLoop=3}catch(M){return M.name===Li.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return I(D,_,j,T)})):Pe(M)}return O._promise(_,function(M,A){return Qt(function(){return ue.trans=O,T(M,A,O)})}).then(function(M){if(_==="readwrite")try{O.idbtrans.commit()}catch{}return _==="readonly"?M:O._completion.then(function(){return M})})}if(D._state.openComplete)return Pe(new he.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return Pe(new he.DatabaseClosed);D.open().catch(Ce)}return D._state.dbReadyPromise.then(function(){return I(D,_,j,T)})})(this.db,a,[this.name],v);return b&&(E._consoleTask=b,E=E.catch(function(I){return console.trace(I),Pe(I)})),E}finally{x&&Pn()}},Ee.prototype.get=function(a,c){var d=this;return a&&a.constructor===Object?this.where(a).first(c):a==null?Pe(new he.Type("Invalid argument to Table.get()")):this._trans("readonly",function(f){return d.core.get({trans:f,key:a}).then(function(m){return d.hook.reading.fire(m)})}).then(c)},Ee.prototype.where=function(a){if(typeof a=="string")return new this.db.WhereClause(this,a);if(l(a))return new this.db.WhereClause(this,"[".concat(a.join("+"),"]"));var c=o(a);if(c.length===1)return this.where(c[0]).equals(a[c[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(x){if(x.compound&&c.every(function(I){return 0<=x.keyPath.indexOf(I)})){for(var E=0;E<c.length;++E)if(c.indexOf(x.keyPath[E])===-1)return!1;return!0}return!1}).sort(function(x,E){return x.keyPath.length-E.keyPath.length})[0];if(d&&this.db._maxKey!==mn){var b=d.keyPath.slice(0,c.length);return this.where(b).equals(b.map(function(E){return a[E]}))}!d&&Pt&&console.warn("The query ".concat(JSON.stringify(a)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(c.join("+"),"]"));var f=this.schema.idxByName;function m(x,E){return ve(x,E)===0}var v=c.reduce(function(_,E){var I=_[0],D=_[1],_=f[E],j=a[E];return[I||_,I||!_?gn(D,_&&_.multi?function(T){return T=V(T,E),l(T)&&T.some(function(O){return m(j,O)})}:function(T){return m(j,V(T,E))}):D]},[null,null]),b=v[0],v=v[1];return b?this.where(b.name).equals(a[b.keyPath]).filter(v):d?this.filter(v):this.where(c).equals("")},Ee.prototype.filter=function(a){return this.toCollection().and(a)},Ee.prototype.count=function(a){return this.toCollection().count(a)},Ee.prototype.offset=function(a){return this.toCollection().offset(a)},Ee.prototype.limit=function(a){return this.toCollection().limit(a)},Ee.prototype.each=function(a){return this.toCollection().each(a)},Ee.prototype.toArray=function(a){return this.toCollection().toArray(a)},Ee.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ee.prototype.orderBy=function(a){return new this.db.Collection(new this.db.WhereClause(this,l(a)?"[".concat(a.join("+"),"]"):a))},Ee.prototype.reverse=function(){return this.toCollection().reverse()},Ee.prototype.mapToClass=function(a){var c,d=this.db,f=this.name;function m(){return c!==null&&c.apply(this,arguments)||this}(this.schema.mappedClass=a).prototype instanceof yl&&((function(E,I){if(typeof I!="function"&&I!==null)throw new TypeError("Class extends value "+String(I)+" is not a constructor or null");function D(){this.constructor=E}n(E,I),E.prototype=I===null?Object.create(I):(D.prototype=I.prototype,new D)})(m,c=a),Object.defineProperty(m.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),m.prototype.table=function(){return f},a=m);for(var b=new Set,v=a.prototype;v;v=h(v))Object.getOwnPropertyNames(v).forEach(function(E){return b.add(E)});function x(E){if(!E)return E;var I,D=Object.create(a.prototype);for(I in E)if(!b.has(I))try{D[I]=E[I]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=x,this.hook("reading",x),a},Ee.prototype.defineClass=function(){return this.mapToClass(function(a){u(this,a)})},Ee.prototype.add=function(a,c){var d=this,f=this.schema.primKey,m=f.auto,b=f.keyPath,v=a;return b&&m&&(v=os(b)(a)),this._trans("readwrite",function(x){return d.core.mutate({trans:x,type:"add",keys:c!=null?[c]:null,values:[v]})}).then(function(x){return x.numFailures?se.reject(x.failures[0]):x.lastResult}).then(function(x){if(b)try{S(a,b,x)}catch{}return x})},Ee.prototype.update=function(a,c){return typeof a!="object"||l(a)?this.where(":id").equals(a).modify(c):(a=V(a,this.schema.primKey.keyPath),a===void 0?Pe(new he.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(a).modify(c))},Ee.prototype.put=function(a,c){var d=this,f=this.schema.primKey,m=f.auto,b=f.keyPath,v=a;return b&&m&&(v=os(b)(a)),this._trans("readwrite",function(x){return d.core.mutate({trans:x,type:"put",values:[v],keys:c!=null?[c]:null})}).then(function(x){return x.numFailures?se.reject(x.failures[0]):x.lastResult}).then(function(x){if(b)try{S(a,b,x)}catch{}return x})},Ee.prototype.delete=function(a){var c=this;return this._trans("readwrite",function(d){return c.core.mutate({trans:d,type:"delete",keys:[a]})}).then(function(d){return d.numFailures?se.reject(d.failures[0]):void 0})},Ee.prototype.clear=function(){var a=this;return this._trans("readwrite",function(c){return a.core.mutate({trans:c,type:"deleteRange",range:wl})}).then(function(c){return c.numFailures?se.reject(c.failures[0]):void 0})},Ee.prototype.bulkGet=function(a){var c=this;return this._trans("readonly",function(d){return c.core.getMany({keys:a,trans:d}).then(function(f){return f.map(function(m){return c.hook.reading.fire(m)})})})},Ee.prototype.bulkAdd=function(a,c,d){var f=this,m=Array.isArray(c)?c:void 0,b=(d=d||(m?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var I=f.schema.primKey,x=I.auto,I=I.keyPath;if(I&&m)throw new he.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(m&&m.length!==a.length)throw new he.InvalidArgument("Arguments objects and keys must have the same length");var E=a.length,I=I&&x?a.map(os(I)):a;return f.core.mutate({trans:v,type:"add",keys:m,values:I,wantResults:b}).then(function(O){var _=O.numFailures,j=O.results,T=O.lastResult,O=O.failures;if(_===0)return b?j:T;throw new On("".concat(f.name,".bulkAdd(): ").concat(_," of ").concat(E," operations failed"),O)})})},Ee.prototype.bulkPut=function(a,c,d){var f=this,m=Array.isArray(c)?c:void 0,b=(d=d||(m?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var I=f.schema.primKey,x=I.auto,I=I.keyPath;if(I&&m)throw new he.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(m&&m.length!==a.length)throw new he.InvalidArgument("Arguments objects and keys must have the same length");var E=a.length,I=I&&x?a.map(os(I)):a;return f.core.mutate({trans:v,type:"put",keys:m,values:I,wantResults:b}).then(function(O){var _=O.numFailures,j=O.results,T=O.lastResult,O=O.failures;if(_===0)return b?j:T;throw new On("".concat(f.name,".bulkPut(): ").concat(_," of ").concat(E," operations failed"),O)})})},Ee.prototype.bulkUpdate=function(a){var c=this,d=this.core,f=a.map(function(v){return v.key}),m=a.map(function(v){return v.changes}),b=[];return this._trans("readwrite",function(v){return d.getMany({trans:v,keys:f,cache:"clone"}).then(function(x){var E=[],I=[];a.forEach(function(_,j){var T=_.key,O=_.changes,M=x[j];if(M){for(var A=0,N=Object.keys(O);A<N.length;A++){var U=N[A],F=O[U];if(U===c.schema.primKey.keyPath){if(ve(F,T)!==0)throw new he.Constraint("Cannot update primary key in bulkUpdate()")}else S(M,U,F)}b.push(j),E.push(T),I.push(M)}});var D=E.length;return d.mutate({trans:v,type:"put",keys:E,values:I,updates:{keys:f,changeSpecs:m}}).then(function(_){var j=_.numFailures,T=_.failures;if(j===0)return D;for(var O=0,M=Object.keys(T);O<M.length;O++){var A,N=M[O],U=b[Number(N)];U!=null&&(A=T[N],delete T[N],T[U]=A)}throw new On("".concat(c.name,".bulkUpdate(): ").concat(j," of ").concat(D," operations failed"),T)})})})},Ee.prototype.bulkDelete=function(a){var c=this,d=a.length;return this._trans("readwrite",function(f){return c.core.mutate({trans:f,type:"delete",keys:a})}).then(function(v){var m=v.numFailures,b=v.lastResult,v=v.failures;if(m===0)return b;throw new On("".concat(c.name,".bulkDelete(): ").concat(m," of ").concat(d," operations failed"),v)})},Ee);function Ee(){}function dr(a){function c(v,x){if(x){for(var E=arguments.length,I=new Array(E-1);--E;)I[E-1]=arguments[E];return d[v].subscribe.apply(null,I),a}if(typeof v=="string")return d[v]}var d={};c.addEventType=b;for(var f=1,m=arguments.length;f<m;++f)b(arguments[f]);return c;function b(v,x,E){if(typeof v!="object"){var I;x=x||Rf;var D={subscribers:[],fire:E=E||Ce,subscribe:function(_){D.subscribers.indexOf(_)===-1&&(D.subscribers.push(_),D.fire=x(D.fire,_))},unsubscribe:function(_){D.subscribers=D.subscribers.filter(function(j){return j!==_}),D.fire=D.subscribers.reduce(x,E)}};return d[v]=c[v]=D}o(I=v).forEach(function(_){var j=I[_];if(l(j))b(_,I[_][0],I[_][1]);else{if(j!=="asap")throw new he.InvalidArgument("Invalid event config");var T=b(_,or,function(){for(var O=arguments.length,M=new Array(O);O--;)M[O]=arguments[O];T.subscribers.forEach(function(A){re(function(){A.apply(null,M)})})})}})}}function hr(a,c){return C(c).from({prototype:a}),c}function jn(a,c){return!(a.filter||a.algorithm||a.or)&&(c?a.justLimit:!a.replayFilter)}function Wi(a,c){a.filter=gn(a.filter,c)}function Gi(a,c,d){var f=a.replayFilter;a.replayFilter=f?function(){return gn(f(),c())}:c,a.justLimit=d&&!f}function as(a,c){if(a.isPrimKey)return c.primaryKey;var d=c.getIndexByKeyPath(a.index);if(!d)throw new he.Schema("KeyPath "+a.index+" on object store "+c.name+" is not indexed");return d}function kl(a,c,d){var f=as(a,c.schema);return c.openCursor({trans:d,values:!a.keysOnly,reverse:a.dir==="prev",unique:!!a.unique,query:{index:f,range:a.range}})}function ls(a,c,d,f){var m=a.replayFilter?gn(a.filter,a.replayFilter()):a.filter;if(a.or){var b={},v=function(x,E,I){var D,_;m&&!m(E,I,function(j){return E.stop(j)},function(j){return E.fail(j)})||((_=""+(D=E.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(D)),g(b,_)||(b[_]=!0,c(x,E,I)))};return Promise.all([a.or._iterate(v,d),Cl(kl(a,f,d),a.algorithm,v,!a.keysOnly&&a.valueMapper)])}return Cl(kl(a,f,d),gn(a.algorithm,m),c,!a.keysOnly&&a.valueMapper)}function Cl(a,c,d,f){var m=Re(f?function(b,v,x){return d(f(b),v,x)}:d);return a.then(function(b){if(b)return b.start(function(){var v=function(){return b.continue()};c&&!c(b,function(x){return v=x},function(x){b.stop(x),v=Ce},function(x){b.fail(x),v=Ce})||m(b.value,b,function(x){return v=x}),v()})})}var qt=Symbol(),fr=(_l.prototype.execute=function(a){if(this.add!==void 0){var c=this.add;if(l(c))return s(s([],l(a)?a:[],!0),c).sort();if(typeof c=="number")return(Number(a)||0)+c;if(typeof c=="bigint")try{return BigInt(a)+c}catch{return BigInt(0)+c}throw new TypeError("Invalid term ".concat(c))}if(this.remove!==void 0){var d=this.remove;if(l(d))return l(a)?a.filter(function(f){return!d.includes(f)}).sort():[];if(typeof d=="number")return Number(a)-d;if(typeof d=="bigint")try{return BigInt(a)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return c=(c=this.replacePrefix)===null||c===void 0?void 0:c[0],c&&typeof a=="string"&&a.startsWith(c)?this.replacePrefix[1]+a.substring(c.length):a},_l);function _l(a){Object.assign(this,a)}var jf=(xe.prototype._read=function(a,c){var d=this._ctx;return d.error?d.table._trans(null,Pe.bind(null,d.error)):d.table._trans("readonly",a).then(c)},xe.prototype._write=function(a){var c=this._ctx;return c.error?c.table._trans(null,Pe.bind(null,c.error)):c.table._trans("readwrite",a,"locked")},xe.prototype._addAlgorithm=function(a){var c=this._ctx;c.algorithm=gn(c.algorithm,a)},xe.prototype._iterate=function(a,c){return ls(this._ctx,a,c,this._ctx.table.core)},xe.prototype.clone=function(a){var c=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return a&&u(d,a),c._ctx=d,c},xe.prototype.raw=function(){return this._ctx.valueMapper=null,this},xe.prototype.each=function(a){var c=this._ctx;return this._read(function(d){return ls(c,a,d,c.table.core)})},xe.prototype.count=function(a){var c=this;return this._read(function(d){var f=c._ctx,m=f.table.core;if(jn(f,!0))return m.count({trans:d,query:{index:as(f,m.schema),range:f.range}}).then(function(v){return Math.min(v,f.limit)});var b=0;return ls(f,function(){return++b,!1},d,m).then(function(){return b})}).then(a)},xe.prototype.sortBy=function(a,c){var d=a.split(".").reverse(),f=d[0],m=d.length-1;function b(E,I){return I?b(E[d[I]],I-1):E[f]}var v=this._ctx.dir==="next"?1:-1;function x(E,I){return ve(b(E,m),b(I,m))*v}return this.toArray(function(E){return E.sort(x)}).then(c)},xe.prototype.toArray=function(a){var c=this;return this._read(function(d){var f=c._ctx;if(f.dir==="next"&&jn(f,!0)&&0<f.limit){var m=f.valueMapper,b=as(f,f.table.core.schema);return f.table.core.query({trans:d,limit:f.limit,values:!0,query:{index:b,range:f.range}}).then(function(x){return x=x.result,m?x.map(m):x})}var v=[];return ls(f,function(x){return v.push(x)},d,f.table.core).then(function(){return v})},a)},xe.prototype.offset=function(a){var c=this._ctx;return a<=0||(c.offset+=a,jn(c)?Gi(c,function(){var d=a;return function(f,m){return d===0||(d===1?--d:m(function(){f.advance(d),d=0}),!1)}}):Gi(c,function(){var d=a;return function(){return--d<0}})),this},xe.prototype.limit=function(a){return this._ctx.limit=Math.min(this._ctx.limit,a),Gi(this._ctx,function(){var c=a;return function(d,f,m){return--c<=0&&f(m),0<=c}},!0),this},xe.prototype.until=function(a,c){return Wi(this._ctx,function(d,f,m){return!a(d.value)||(f(m),c)}),this},xe.prototype.first=function(a){return this.limit(1).toArray(function(c){return c[0]}).then(a)},xe.prototype.last=function(a){return this.reverse().first(a)},xe.prototype.filter=function(a){var c;return Wi(this._ctx,function(d){return a(d.value)}),(c=this._ctx).isMatch=gn(c.isMatch,a),this},xe.prototype.and=function(a){return this.filter(a)},xe.prototype.or=function(a){return new this.db.WhereClause(this._ctx.table,a,this)},xe.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},xe.prototype.desc=function(){return this.reverse()},xe.prototype.eachKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.key,f)})},xe.prototype.eachUniqueKey=function(a){return this._ctx.unique="unique",this.eachKey(a)},xe.prototype.eachPrimaryKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.primaryKey,f)})},xe.prototype.keys=function(a){var c=this._ctx;c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,m){d.push(m.key)}).then(function(){return d}).then(a)},xe.prototype.primaryKeys=function(a){var c=this._ctx;if(c.dir==="next"&&jn(c,!0)&&0<c.limit)return this._read(function(f){var m=as(c,c.table.core.schema);return c.table.core.query({trans:f,values:!1,limit:c.limit,query:{index:m,range:c.range}})}).then(function(f){return f.result}).then(a);c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,m){d.push(m.primaryKey)}).then(function(){return d}).then(a)},xe.prototype.uniqueKeys=function(a){return this._ctx.unique="unique",this.keys(a)},xe.prototype.firstKey=function(a){return this.limit(1).keys(function(c){return c[0]}).then(a)},xe.prototype.lastKey=function(a){return this.reverse().firstKey(a)},xe.prototype.distinct=function(){var a=this._ctx,a=a.index&&a.table.schema.idxByName[a.index];if(!a||!a.multi)return this;var c={};return Wi(this._ctx,function(m){var f=m.primaryKey.toString(),m=g(c,f);return c[f]=!0,!m}),this},xe.prototype.modify=function(a){var c=this,d=this._ctx;return this._write(function(f){var m,b,v;v=typeof a=="function"?a:(m=o(a),b=m.length,function(A){for(var N=!1,U=0;U<b;++U){var F=m[U],H=a[F],Y=V(A,F);H instanceof fr?(S(A,F,H.execute(Y)),N=!0):Y!==H&&(S(A,F,H),N=!0)}return N});var x=d.table.core,_=x.schema.primaryKey,E=_.outbound,I=_.extractKey,D=200,_=c.db._options.modifyChunkSize;_&&(D=typeof _=="object"?_[x.name]||_["*"]||200:_);function j(A,F){var U=F.failures,F=F.numFailures;O+=A-F;for(var H=0,Y=o(U);H<Y.length;H++){var Z=Y[H];T.push(U[Z])}}var T=[],O=0,M=[];return c.clone().primaryKeys().then(function(A){function N(F){var H=Math.min(D,A.length-F);return x.getMany({trans:f,keys:A.slice(F,F+H),cache:"immutable"}).then(function(Y){for(var Z=[],Q=[],J=E?[]:null,ne=[],X=0;X<H;++X){var le=Y[X],pe={value:de(le),primKey:A[F+X]};v.call(pe,pe.value,pe)!==!1&&(pe.value==null?ne.push(A[F+X]):E||ve(I(le),I(pe.value))===0?(Q.push(pe.value),E&&J.push(A[F+X])):(ne.push(A[F+X]),Z.push(pe.value)))}return Promise.resolve(0<Z.length&&x.mutate({trans:f,type:"add",values:Z}).then(function(ge){for(var be in ge.failures)ne.splice(parseInt(be),1);j(Z.length,ge)})).then(function(){return(0<Q.length||U&&typeof a=="object")&&x.mutate({trans:f,type:"put",keys:J,values:Q,criteria:U,changeSpec:typeof a!="function"&&a,isAdditionalChunk:0<F}).then(function(ge){return j(Q.length,ge)})}).then(function(){return(0<ne.length||U&&a===Yi)&&x.mutate({trans:f,type:"delete",keys:ne,criteria:U,isAdditionalChunk:0<F}).then(function(ge){return j(ne.length,ge)})}).then(function(){return A.length>F+H&&N(F+D)})})}var U=jn(d)&&d.limit===1/0&&(typeof a!="function"||a===Yi)&&{index:d.index,range:d.range};return N(0).then(function(){if(0<T.length)throw new Xe("Error modifying one or more objects",T,O,M);return A.length})})})},xe.prototype.delete=function(){var a=this._ctx,c=a.range;return jn(a)&&(a.isPrimKey||c.type===3)?this._write(function(d){var f=a.table.core.schema.primaryKey,m=c;return a.table.core.count({trans:d,query:{index:f,range:m}}).then(function(b){return a.table.core.mutate({trans:d,type:"deleteRange",range:m}).then(function(v){var x=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new Xe("Could not delete some values",Object.keys(x).map(function(E){return x[E]}),b-v);return b-v})})}):this.modify(Yi)},xe);function xe(){}var Yi=function(a,c){return c.value=null};function Nf(a,c){return a<c?-1:a===c?0:1}function zf(a,c){return c<a?-1:a===c?0:1}function ut(a,c,d){return a=a instanceof El?new a.Collection(a):a,a._ctx.error=new(d||TypeError)(c),a}function Nn(a){return new a.Collection(a,function(){return Sl("")}).limit(0)}function cs(a,c,d,f){var m,b,v,x,E,I,D,_=d.length;if(!d.every(function(O){return typeof O=="string"}))return ut(a,bl);function j(O){m=O==="next"?function(A){return A.toUpperCase()}:function(A){return A.toLowerCase()},b=O==="next"?function(A){return A.toLowerCase()}:function(A){return A.toUpperCase()},v=O==="next"?Nf:zf;var M=d.map(function(A){return{lower:b(A),upper:m(A)}}).sort(function(A,N){return v(A.lower,N.lower)});x=M.map(function(A){return A.upper}),E=M.map(function(A){return A.lower}),D=(I=O)==="next"?"":f}j("next"),a=new a.Collection(a,function(){return Zt(x[0],E[_-1]+f)}),a._ondirectionchange=function(O){j(O)};var T=0;return a._addAlgorithm(function(O,M,A){var N=O.key;if(typeof N!="string")return!1;var U=b(N);if(c(U,E,T))return!0;for(var F=null,H=T;H<_;++H){var Y=(function(Z,Q,J,ne,X,le){for(var pe=Math.min(Z.length,ne.length),ge=-1,be=0;be<pe;++be){var dt=Q[be];if(dt!==ne[be])return X(Z[be],J[be])<0?Z.substr(0,be)+J[be]+J.substr(be+1):X(Z[be],ne[be])<0?Z.substr(0,be)+ne[be]+J.substr(be+1):0<=ge?Z.substr(0,ge)+Q[ge]+J.substr(ge+1):null;X(Z[be],dt)<0&&(ge=be)}return pe<ne.length&&le==="next"?Z+J.substr(Z.length):pe<Z.length&&le==="prev"?Z.substr(0,J.length):ge<0?null:Z.substr(0,ge)+ne[ge]+J.substr(ge+1)})(N,U,x[H],E[H],v,I);Y===null&&F===null?T=H+1:(F===null||0<v(F,Y))&&(F=Y)}return M(F!==null?function(){O.continue(F+D)}:A),!1}),a}function Zt(a,c,d,f){return{type:2,lower:a,upper:c,lowerOpen:d,upperOpen:f}}function Sl(a){return{type:1,lower:a,upper:a}}var El=(Object.defineProperty(Fe.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Fe.prototype.between=function(a,c,d,f){d=d!==!1,f=f===!0;try{return 0<this._cmp(a,c)||this._cmp(a,c)===0&&(d||f)&&(!d||!f)?Nn(this):new this.Collection(this,function(){return Zt(a,c,!d,!f)})}catch{return ut(this,Bt)}},Fe.prototype.equals=function(a){return a==null?ut(this,Bt):new this.Collection(this,function(){return Sl(a)})},Fe.prototype.above=function(a){return a==null?ut(this,Bt):new this.Collection(this,function(){return Zt(a,void 0,!0)})},Fe.prototype.aboveOrEqual=function(a){return a==null?ut(this,Bt):new this.Collection(this,function(){return Zt(a,void 0,!1)})},Fe.prototype.below=function(a){return a==null?ut(this,Bt):new this.Collection(this,function(){return Zt(void 0,a,!1,!0)})},Fe.prototype.belowOrEqual=function(a){return a==null?ut(this,Bt):new this.Collection(this,function(){return Zt(void 0,a)})},Fe.prototype.startsWith=function(a){return typeof a!="string"?ut(this,bl):this.between(a,a+mn,!0,!0)},Fe.prototype.startsWithIgnoreCase=function(a){return a===""?this.startsWith(a):cs(this,function(c,d){return c.indexOf(d[0])===0},[a],mn)},Fe.prototype.equalsIgnoreCase=function(a){return cs(this,function(c,d){return c===d[0]},[a],"")},Fe.prototype.anyOfIgnoreCase=function(){var a=je.apply(me,arguments);return a.length===0?Nn(this):cs(this,function(c,d){return d.indexOf(c)!==-1},a,"")},Fe.prototype.startsWithAnyOfIgnoreCase=function(){var a=je.apply(me,arguments);return a.length===0?Nn(this):cs(this,function(c,d){return d.some(function(f){return c.indexOf(f)===0})},a,mn)},Fe.prototype.anyOf=function(){var a=this,c=je.apply(me,arguments),d=this._cmp;try{c.sort(d)}catch{return ut(this,Bt)}if(c.length===0)return Nn(this);var f=new this.Collection(this,function(){return Zt(c[0],c[c.length-1])});f._ondirectionchange=function(b){d=b==="next"?a._ascending:a._descending,c.sort(d)};var m=0;return f._addAlgorithm(function(b,v,x){for(var E=b.key;0<d(E,c[m]);)if(++m===c.length)return v(x),!1;return d(E,c[m])===0||(v(function(){b.continue(c[m])}),!1)}),f},Fe.prototype.notEqual=function(a){return this.inAnyRange([[-1/0,a],[a,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Fe.prototype.noneOf=function(){var a=je.apply(me,arguments);if(a.length===0)return new this.Collection(this);try{a.sort(this._ascending)}catch{return ut(this,Bt)}var c=a.reduce(function(d,f){return d?d.concat([[d[d.length-1][1],f]]):[[-1/0,f]]},null);return c.push([a[a.length-1],this.db._maxKey]),this.inAnyRange(c,{includeLowers:!1,includeUppers:!1})},Fe.prototype.inAnyRange=function(N,c){var d=this,f=this._cmp,m=this._ascending,b=this._descending,v=this._min,x=this._max;if(N.length===0)return Nn(this);if(!N.every(function(U){return U[0]!==void 0&&U[1]!==void 0&&m(U[0],U[1])<=0}))return ut(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",he.InvalidArgument);var E=!c||c.includeLowers!==!1,I=c&&c.includeUppers===!0,D,_=m;function j(U,F){return _(U[0],F[0])}try{(D=N.reduce(function(U,F){for(var H=0,Y=U.length;H<Y;++H){var Z=U[H];if(f(F[0],Z[1])<0&&0<f(F[1],Z[0])){Z[0]=v(Z[0],F[0]),Z[1]=x(Z[1],F[1]);break}}return H===Y&&U.push(F),U},[])).sort(j)}catch{return ut(this,Bt)}var T=0,O=I?function(U){return 0<m(U,D[T][1])}:function(U){return 0<=m(U,D[T][1])},M=E?function(U){return 0<b(U,D[T][0])}:function(U){return 0<=b(U,D[T][0])},A=O,N=new this.Collection(this,function(){return Zt(D[0][0],D[D.length-1][1],!E,!I)});return N._ondirectionchange=function(U){_=U==="next"?(A=O,m):(A=M,b),D.sort(j)},N._addAlgorithm(function(U,F,H){for(var Y,Z=U.key;A(Z);)if(++T===D.length)return F(H),!1;return!O(Y=Z)&&!M(Y)||(d._cmp(Z,D[T][1])===0||d._cmp(Z,D[T][0])===0||F(function(){_===m?U.continue(D[T][0]):U.continue(D[T][1])}),!1)}),N},Fe.prototype.startsWithAnyOf=function(){var a=je.apply(me,arguments);return a.every(function(c){return typeof c=="string"})?a.length===0?Nn(this):this.inAnyRange(a.map(function(c){return[c,c+mn]})):ut(this,"startsWithAnyOf() only works with strings")},Fe);function Fe(){}function Lt(a){return Re(function(c){return pr(c),a(c.target.error),!1})}function pr(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault()}var mr="storagemutated",Qi="x-storagemutated-1",en=dr(null,mr),Uf=(Mt.prototype._lock=function(){return z(!ue.global),++this._reculock,this._reculock!==1||ue.global||(ue.lockOwnerFor=this),this},Mt.prototype._unlock=function(){if(z(!ue.global),--this._reculock==0)for(ue.global||(ue.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var a=this._blockedFuncs.shift();try{pn(a[1],a[0])}catch{}}return this},Mt.prototype._locked=function(){return this._reculock&&ue.lockOwnerFor!==this},Mt.prototype.create=function(a){var c=this;if(!this.mode)return this;var d=this.db.idbdb,f=this.db._state.dbOpenError;if(z(!this.idbtrans),!a&&!d)switch(f&&f.name){case"DatabaseClosedError":throw new he.DatabaseClosed(f);case"MissingAPIError":throw new he.MissingAPI(f.message,f);default:throw new he.OpenFailed(f)}if(!this.active)throw new he.TransactionInactive;return z(this._completion._state===null),(a=this.idbtrans=a||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Re(function(m){pr(m),c._reject(a.error)}),a.onabort=Re(function(m){pr(m),c.active&&c._reject(new he.Abort(a.error)),c.active=!1,c.on("abort").fire(m)}),a.oncomplete=Re(function(){c.active=!1,c._resolve(),"mutatedParts"in a&&en.storagemutated.fire(a.mutatedParts)}),this},Mt.prototype._promise=function(a,c,d){var f=this;if(a==="readwrite"&&this.mode!=="readwrite")return Pe(new he.ReadOnly("Transaction is readonly"));if(!this.active)return Pe(new he.TransactionInactive);if(this._locked())return new se(function(b,v){f._blockedFuncs.push([function(){f._promise(a,c,d).then(b,v)},ue])});if(d)return Qt(function(){var b=new se(function(v,x){f._lock();var E=c(v,x,f);E&&E.then&&E.then(v,x)});return b.finally(function(){return f._unlock()}),b._lib=!0,b});var m=new se(function(b,v){var x=c(b,v,f);x&&x.then&&x.then(b,v)});return m._lib=!0,m},Mt.prototype._root=function(){return this.parent?this.parent._root():this},Mt.prototype.waitFor=function(a){var c,d=this._root(),f=se.resolve(a);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return f}):(d._waitingFor=f,d._waitingQueue=[],c=d.idbtrans.objectStore(d.storeNames[0]),(function b(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(c.get(-1/0).onsuccess=b)})());var m=d._waitingFor;return new se(function(b,v){f.then(function(x){return d._waitingQueue.push(Re(b.bind(null,x)))},function(x){return d._waitingQueue.push(Re(v.bind(null,x)))}).finally(function(){d._waitingFor===m&&(d._waitingFor=null)})})},Mt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new he.Abort))},Mt.prototype.table=function(a){var c=this._memoizedTables||(this._memoizedTables={});if(g(c,a))return c[a];var d=this.schema[a];if(!d)throw new he.NotFound("Table "+a+" not part of transaction");return d=new this.db.Table(a,d,this),d.core=this.db.core.table(a),c[a]=d},Mt);function Mt(){}function Ji(a,c,d,f,m,b,v){return{name:a,keyPath:c,unique:d,multi:f,auto:m,compound:b,src:(d&&!v?"&":"")+(f?"*":"")+(m?"++":"")+Tl(c)}}function Tl(a){return typeof a=="string"?a:a?"["+[].join.call(a,"+")+"]":""}function Xi(a,c,d){return{name:a,primKey:c,indexes:d,mappedClass:null,idxByName:(f=function(m){return[m.name,m]},d.reduce(function(m,b,v){return v=f(b,v),v&&(m[v[0]]=v[1]),m},{}))};var f}var gr=function(a){try{return a.only([[]]),gr=function(){return[[]]},[[]]}catch{return gr=function(){return mn},mn}};function Zi(a){return a==null?function(){}:typeof a=="string"?(c=a).split(".").length===1?function(d){return d[c]}:function(d){return V(d,c)}:function(d){return V(d,a)};var c}function Il(a){return[].slice.call(a)}var Ff=0;function br(a){return a==null?":id":typeof a=="string"?a:"[".concat(a.join("+"),"]")}function Bf(a,c,E){function f(A){if(A.type===3)return null;if(A.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var T=A.lower,O=A.upper,M=A.lowerOpen,A=A.upperOpen;return T===void 0?O===void 0?null:c.upperBound(O,!!A):O===void 0?c.lowerBound(T,!!M):c.bound(T,O,!!M,!!A)}function m(j){var T,O=j.name;return{name:O,schema:j,mutate:function(M){var A=M.trans,N=M.type,U=M.keys,F=M.values,H=M.range;return new Promise(function(Y,Z){Y=Re(Y);var Q=A.objectStore(O),J=Q.keyPath==null,ne=N==="put"||N==="add";if(!ne&&N!=="delete"&&N!=="deleteRange")throw new Error("Invalid operation type: "+N);var X,le=(U||F||{length:1}).length;if(U&&F&&U.length!==F.length)throw new Error("Given keys array must have same length as given values array.");if(le===0)return Y({numFailures:0,failures:{},results:[],lastResult:void 0});function pe(Ze){++dt,pr(Ze)}var ge=[],be=[],dt=0;if(N==="deleteRange"){if(H.type===4)return Y({numFailures:dt,failures:be,results:[],lastResult:void 0});H.type===3?ge.push(X=Q.clear()):ge.push(X=Q.delete(f(H)))}else{var J=ne?J?[F,U]:[F,null]:[U,null],fe=J[0],Qe=J[1];if(ne)for(var Je=0;Je<le;++Je)ge.push(X=Qe&&Qe[Je]!==void 0?Q[N](fe[Je],Qe[Je]):Q[N](fe[Je])),X.onerror=pe;else for(Je=0;Je<le;++Je)ge.push(X=Q[N](fe[Je])),X.onerror=pe}function xs(Ze){Ze=Ze.target.result,ge.forEach(function(yn,wo){return yn.error!=null&&(be[wo]=yn.error)}),Y({numFailures:dt,failures:be,results:N==="delete"?U:ge.map(function(yn){return yn.result}),lastResult:Ze})}X.onerror=function(Ze){pe(Ze),xs(Ze)},X.onsuccess=xs})},getMany:function(M){var A=M.trans,N=M.keys;return new Promise(function(U,F){U=Re(U);for(var H,Y=A.objectStore(O),Z=N.length,Q=new Array(Z),J=0,ne=0,X=function(ge){ge=ge.target,Q[ge._pos]=ge.result,++ne===J&&U(Q)},le=Lt(F),pe=0;pe<Z;++pe)N[pe]!=null&&((H=Y.get(N[pe]))._pos=pe,H.onsuccess=X,H.onerror=le,++J);J===0&&U(Q)})},get:function(M){var A=M.trans,N=M.key;return new Promise(function(U,F){U=Re(U);var H=A.objectStore(O).get(N);H.onsuccess=function(Y){return U(Y.target.result)},H.onerror=Lt(F)})},query:(T=I,function(M){return new Promise(function(A,N){A=Re(A);var U,F,H,J=M.trans,Y=M.values,Z=M.limit,X=M.query,Q=Z===1/0?void 0:Z,ne=X.index,X=X.range,J=J.objectStore(O),ne=ne.isPrimaryKey?J:J.index(ne.name),X=f(X);if(Z===0)return A({result:[]});T?((Q=Y?ne.getAll(X,Q):ne.getAllKeys(X,Q)).onsuccess=function(le){return A({result:le.target.result})},Q.onerror=Lt(N)):(U=0,F=!Y&&"openKeyCursor"in ne?ne.openKeyCursor(X):ne.openCursor(X),H=[],F.onsuccess=function(le){var pe=F.result;return pe?(H.push(Y?pe.value:pe.primaryKey),++U===Z?A({result:H}):void pe.continue()):A({result:H})},F.onerror=Lt(N))})}),openCursor:function(M){var A=M.trans,N=M.values,U=M.query,F=M.reverse,H=M.unique;return new Promise(function(Y,Z){Y=Re(Y);var ne=U.index,Q=U.range,J=A.objectStore(O),J=ne.isPrimaryKey?J:J.index(ne.name),ne=F?H?"prevunique":"prev":H?"nextunique":"next",X=!N&&"openKeyCursor"in J?J.openKeyCursor(f(Q),ne):J.openCursor(f(Q),ne);X.onerror=Lt(Z),X.onsuccess=Re(function(le){var pe,ge,be,dt,fe=X.result;fe?(fe.___id=++Ff,fe.done=!1,pe=fe.continue.bind(fe),ge=(ge=fe.continuePrimaryKey)&&ge.bind(fe),be=fe.advance.bind(fe),dt=function(){throw new Error("Cursor not stopped")},fe.trans=A,fe.stop=fe.continue=fe.continuePrimaryKey=fe.advance=function(){throw new Error("Cursor not started")},fe.fail=Re(Z),fe.next=function(){var Qe=this,Je=1;return this.start(function(){return Je--?Qe.continue():Qe.stop()}).then(function(){return Qe})},fe.start=function(Qe){function Je(){if(X.result)try{Qe()}catch(Ze){fe.fail(Ze)}else fe.done=!0,fe.start=function(){throw new Error("Cursor behind last entry")},fe.stop()}var xs=new Promise(function(Ze,yn){Ze=Re(Ze),X.onerror=Lt(yn),fe.fail=yn,fe.stop=function(wo){fe.stop=fe.continue=fe.continuePrimaryKey=fe.advance=dt,Ze(wo)}});return X.onsuccess=Re(function(Ze){X.onsuccess=Je,Je()}),fe.continue=pe,fe.continuePrimaryKey=ge,fe.advance=be,Je(),xs},Y(fe)):Y(null)},Z)})},count:function(M){var A=M.query,N=M.trans,U=A.index,F=A.range;return new Promise(function(H,Y){var Z=N.objectStore(O),Q=U.isPrimaryKey?Z:Z.index(U.name),Z=f(F),Q=Z?Q.count(Z):Q.count();Q.onsuccess=Re(function(J){return H(J.target.result)}),Q.onerror=Lt(Y)})}}}var b,v,x,D=(v=E,x=Il((b=a).objectStoreNames),{schema:{name:b.name,tables:x.map(function(j){return v.objectStore(j)}).map(function(j){var T=j.keyPath,A=j.autoIncrement,O=l(T),M={},A={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:T==null,compound:O,keyPath:T,autoIncrement:A,unique:!0,extractKey:Zi(T)},indexes:Il(j.indexNames).map(function(N){return j.index(N)}).map(function(H){var U=H.name,F=H.unique,Y=H.multiEntry,H=H.keyPath,Y={name:U,compound:l(H),keyPath:H,unique:F,multiEntry:Y,extractKey:Zi(H)};return M[br(H)]=Y}),getIndexByKeyPath:function(N){return M[br(N)]}};return M[":id"]=A.primaryKey,T!=null&&(M[br(T)]=A.primaryKey),A})},hasGetAll:0<x.length&&"getAll"in v.objectStore(x[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),E=D.schema,I=D.hasGetAll,D=E.tables.map(m),_={};return D.forEach(function(j){return _[j.name]=j}),{stack:"dbcore",transaction:a.transaction.bind(a),table:function(j){if(!_[j])throw new Error("Table '".concat(j,"' not found"));return _[j]},MIN_KEY:-1/0,MAX_KEY:gr(c),schema:E}}function qf(a,c,d,f){var m=d.IDBKeyRange;return d.indexedDB,{dbcore:(f=Bf(c,m,f),a.dbcore.reduce(function(b,v){return v=v.create,r(r({},b),v(b))},f))}}function us(a,f){var d=f.db,f=qf(a._middlewares,d,a._deps,f);a.core=f.dbcore,a.tables.forEach(function(m){var b=m.name;a.core.schema.tables.some(function(v){return v.name===b})&&(m.core=a.core.table(b),a[b]instanceof a.Table&&(a[b].core=m.core))})}function ds(a,c,d,f){d.forEach(function(m){var b=f[m];c.forEach(function(v){var x=(function E(I,D){return P(I,D)||(I=h(I))&&E(I,D)})(v,m);(!x||"value"in x&&x.value===void 0)&&(v===a.Transaction.prototype||v instanceof a.Transaction?$(v,m,{get:function(){return this.table(m)},set:function(E){w(this,m,{value:E,writable:!0,configurable:!0,enumerable:!0})}}):v[m]=new a.Table(m,b))})})}function eo(a,c){c.forEach(function(d){for(var f in d)d[f]instanceof a.Table&&delete d[f]})}function Hf(a,c){return a._cfg.version-c._cfg.version}function Kf(a,c,d,f){var m=a._dbSchema;d.objectStoreNames.contains("$meta")&&!m.$meta&&(m.$meta=Xi("$meta",Rl("")[0],[]),a._storeNames.push("$meta"));var b=a._createTransaction("readwrite",a._storeNames,m);b.create(d),b._completion.catch(f);var v=b._reject.bind(b),x=ue.transless||ue;Qt(function(){return ue.trans=b,ue.transless=x,c!==0?(us(a,d),I=c,((E=b).storeNames.includes("$meta")?E.table("$meta").get("version").then(function(D){return D??I}):se.resolve(I)).then(function(D){return j=D,T=b,O=d,M=[],D=(_=a)._versions,A=_._dbSchema=fs(0,_.idbdb,O),(D=D.filter(function(N){return N._cfg.version>=j})).length!==0?(D.forEach(function(N){M.push(function(){var U=A,F=N._cfg.dbschema;ps(_,U,O),ps(_,F,O),A=_._dbSchema=F;var H=to(U,F);H.add.forEach(function(ne){no(O,ne[0],ne[1].primKey,ne[1].indexes)}),H.change.forEach(function(ne){if(ne.recreate)throw new he.Upgrade("Not yet support for changing primary key");var X=O.objectStore(ne.name);ne.add.forEach(function(le){return hs(X,le)}),ne.change.forEach(function(le){X.deleteIndex(le.name),hs(X,le)}),ne.del.forEach(function(le){return X.deleteIndex(le)})});var Y=N._cfg.contentUpgrade;if(Y&&N._cfg.version>j){us(_,O),T._memoizedTables={};var Z=q(F);H.del.forEach(function(ne){Z[ne]=U[ne]}),eo(_,[_.Transaction.prototype]),ds(_,[_.Transaction.prototype],o(Z),Z),T.schema=Z;var Q,J=kt(Y);return J&&Ln(),H=se.follow(function(){var ne;(Q=Y(T))&&J&&(ne=Jt.bind(null,null),Q.then(ne,ne))}),Q&&typeof Q.then=="function"?se.resolve(Q):H.then(function(){return Q})}}),M.push(function(U){var F,H,Y=N._cfg.dbschema;F=Y,H=U,[].slice.call(H.db.objectStoreNames).forEach(function(Z){return F[Z]==null&&H.db.deleteObjectStore(Z)}),eo(_,[_.Transaction.prototype]),ds(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),T.schema=_._dbSchema}),M.push(function(U){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===N._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(F){return F!=="$meta"})):U.objectStore("$meta").put(N._cfg.version,"version"))})}),(function N(){return M.length?se.resolve(M.shift()(T.idbtrans)).then(N):se.resolve()})().then(function(){Al(A,O)})):se.resolve();var _,j,T,O,M,A}).catch(v)):(o(m).forEach(function(D){no(d,D,m[D].primKey,m[D].indexes)}),us(a,d),void se.follow(function(){return a.on.populate.fire(b)}).catch(v));var E,I})}function Vf(a,c){Al(a._dbSchema,c),c.db.version%10!=0||c.objectStoreNames.contains("$meta")||c.db.createObjectStore("$meta").add(Math.ceil(c.db.version/10-1),"version");var d=fs(0,a.idbdb,c);ps(a,a._dbSchema,c);for(var f=0,m=to(d,a._dbSchema).change;f<m.length;f++){var b=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var x=c.objectStore(v.name);v.add.forEach(function(E){Pt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(E.src)),hs(x,E)})})(m[f]);if(typeof b=="object")return b.value}}function to(a,c){var d,f={del:[],add:[],change:[]};for(d in a)c[d]||f.del.push(d);for(d in c){var m=a[d],b=c[d];if(m){var v={name:d,def:b,recreate:!1,del:[],add:[],change:[]};if(""+(m.primKey.keyPath||"")!=""+(b.primKey.keyPath||"")||m.primKey.auto!==b.primKey.auto)v.recreate=!0,f.change.push(v);else{var x=m.idxByName,E=b.idxByName,I=void 0;for(I in x)E[I]||v.del.push(I);for(I in E){var D=x[I],_=E[I];D?D.src!==_.src&&v.change.push(_):v.add.push(_)}(0<v.del.length||0<v.add.length||0<v.change.length)&&f.change.push(v)}}else f.add.push([d,b])}return f}function no(a,c,d,f){var m=a.db.createObjectStore(c,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return f.forEach(function(b){return hs(m,b)}),m}function Al(a,c){o(a).forEach(function(d){c.db.objectStoreNames.contains(d)||(Pt&&console.debug("Dexie: Creating missing table",d),no(c,d,a[d].primKey,a[d].indexes))})}function hs(a,c){a.createIndex(c.name,c.keyPath,{unique:c.unique,multiEntry:c.multi})}function fs(a,c,d){var f={};return L(c.objectStoreNames,0).forEach(function(m){for(var b=d.objectStore(m),v=Ji(Tl(I=b.keyPath),I||"",!0,!1,!!b.autoIncrement,I&&typeof I!="string",!0),x=[],E=0;E<b.indexNames.length;++E){var D=b.index(b.indexNames[E]),I=D.keyPath,D=Ji(D.name,I,!!D.unique,!!D.multiEntry,!1,I&&typeof I!="string",!1);x.push(D)}f[m]=Xi(m,v,x)}),f}function ps(a,c,d){for(var f=d.db.objectStoreNames,m=0;m<f.length;++m){var b=f[m],v=d.objectStore(b);a._hasGetAll="getAll"in v;for(var x=0;x<v.indexNames.length;++x){var E=v.indexNames[x],I=v.index(E).keyPath,D=typeof I=="string"?I:"["+L(I).join("+")+"]";!c[b]||(I=c[b].idxByName[D])&&(I.name=E,delete c[b].idxByName[D],c[b].idxByName[E]=I)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&i.WorkerGlobalScope&&i instanceof i.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(a._hasGetAll=!1)}function Rl(a){return a.split(",").map(function(c,d){var f=(c=c.trim()).replace(/([&*]|\+\+)/g,""),m=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return Ji(f,m||null,/\&/.test(c),/\*/.test(c),/\+\+/.test(c),l(m),d===0)})}var Wf=(ms.prototype._parseStoresSpec=function(a,c){o(a).forEach(function(d){if(a[d]!==null){var f=Rl(a[d]),m=f.shift();if(m.unique=!0,m.multi)throw new he.Schema("Primary key cannot be multi-valued");f.forEach(function(b){if(b.auto)throw new he.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new he.Schema("Index must have a name and cannot be an empty string")}),c[d]=Xi(d,m,f)}})},ms.prototype.stores=function(d){var c=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=c._versions,f={},m={};return d.forEach(function(b){u(f,b._cfg.storesSource),m=b._cfg.dbschema={},b._parseStoresSpec(f,m)}),c._dbSchema=m,eo(c,[c._allTables,c,c.Transaction.prototype]),ds(c,[c._allTables,c,c.Transaction.prototype,this._cfg.tables],o(m),m),c._storeNames=o(m),this},ms.prototype.upgrade=function(a){return this._cfg.contentUpgrade=Mi(this._cfg.contentUpgrade||Ce,a),this},ms);function ms(){}function ro(a,c){var d=a._dbNamesDB;return d||(d=a._dbNamesDB=new Ht(is,{addons:[],indexedDB:a,IDBKeyRange:c})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function so(a){return a&&typeof a.databases=="function"}function io(a){return Qt(function(){return ue.letThrough=!0,a()})}function oo(a){return!("from"in a)}var Ye=function(a,c){if(!this){var d=new Ye;return a&&"d"in a&&u(d,a),d}u(this,arguments.length?{d:1,from:a,to:1<arguments.length?c:a}:{d:0})};function wr(a,c,d){var f=ve(c,d);if(!isNaN(f)){if(0<f)throw RangeError();if(oo(a))return u(a,{from:c,to:d,d:1});var m=a.l,f=a.r;if(ve(d,a.from)<0)return m?wr(m,c,d):a.l={from:c,to:d,d:1,l:null,r:null},Dl(a);if(0<ve(c,a.to))return f?wr(f,c,d):a.r={from:c,to:d,d:1,l:null,r:null},Dl(a);ve(c,a.from)<0&&(a.from=c,a.l=null,a.d=f?f.d+1:1),0<ve(d,a.to)&&(a.to=d,a.r=null,a.d=a.l?a.l.d+1:1),d=!a.r,m&&!a.l&&yr(a,m),f&&d&&yr(a,f)}}function yr(a,c){oo(c)||(function d(f,E){var b=E.from,v=E.to,x=E.l,E=E.r;wr(f,b,v),x&&d(f,x),E&&d(f,E)})(a,c)}function Ol(a,c){var d=gs(c),f=d.next();if(f.done)return!1;for(var m=f.value,b=gs(a),v=b.next(m.from),x=v.value;!f.done&&!v.done;){if(ve(x.from,m.to)<=0&&0<=ve(x.to,m.from))return!0;ve(m.from,x.from)<0?m=(f=d.next(x.from)).value:x=(v=b.next(m.from)).value}return!1}function gs(a){var c=oo(a)?null:{s:0,n:a};return{next:function(d){for(var f=0<arguments.length;c;)switch(c.s){case 0:if(c.s=1,f)for(;c.n.l&&ve(d,c.n.from)<0;)c={up:c,n:c.n.l,s:1};else for(;c.n.l;)c={up:c,n:c.n.l,s:1};case 1:if(c.s=2,!f||ve(d,c.n.to)<=0)return{value:c.n,done:!1};case 2:if(c.n.r){c.s=3,c={up:c,n:c.n.r,s:0};continue}case 3:c=c.up}return{done:!0}}}}function Dl(a){var c,d,f=(((c=a.r)===null||c===void 0?void 0:c.d)||0)-(((d=a.l)===null||d===void 0?void 0:d.d)||0),m=1<f?"r":f<-1?"l":"";m&&(c=m=="r"?"l":"r",d=r({},a),f=a[m],a.from=f.from,a.to=f.to,a[m]=f[m],d[m]=f[c],(a[c]=d).d=Pl(d)),a.d=Pl(a)}function Pl(d){var c=d.r,d=d.l;return(c?d?Math.max(c.d,d.d):c.d:d?d.d:0)+1}function bs(a,c){return o(c).forEach(function(d){a[d]?yr(a[d],c[d]):a[d]=(function f(m){var b,v,x={};for(b in m)g(m,b)&&(v=m[b],x[b]=!v||typeof v!="object"||ce.has(v.constructor)?v:f(v));return x})(c[d])}),a}function ao(a,c){return a.all||c.all||Object.keys(a).some(function(d){return c[d]&&Ol(c[d],a[d])})}y(Ye.prototype,((Ct={add:function(a){return yr(this,a),this},addKey:function(a){return wr(this,a,a),this},addKeys:function(a){var c=this;return a.forEach(function(d){return wr(c,d,d)}),this},hasKey:function(a){var c=gs(this).next(a).value;return c&&ve(c.from,a)<=0&&0<=ve(c.to,a)}})[$e]=function(){return gs(this)},Ct));var bn={},lo={},co=!1;function ws(a){bs(lo,a),co||(co=!0,setTimeout(function(){co=!1,uo(lo,!(lo={}))},0))}function uo(a,c){c===void 0&&(c=!1);var d=new Set;if(a.all)for(var f=0,m=Object.values(bn);f<m.length;f++)Ll(v=m[f],a,d,c);else for(var b in a){var v,x=/^idb\:\/\/(.*)\/(.*)\//.exec(b);x&&(b=x[1],x=x[2],(v=bn["idb://".concat(b,"/").concat(x)])&&Ll(v,a,d,c))}d.forEach(function(E){return E()})}function Ll(a,c,d,f){for(var m=[],b=0,v=Object.entries(a.queries.query);b<v.length;b++){for(var x=v[b],E=x[0],I=[],D=0,_=x[1];D<_.length;D++){var j=_[D];ao(c,j.obsSet)?j.subscribers.forEach(function(A){return d.add(A)}):f&&I.push(j)}f&&m.push([E,I])}if(f)for(var T=0,O=m;T<O.length;T++){var M=O[T],E=M[0],I=M[1];a.queries.query[E]=I}}function Gf(a){var c=a._state,d=a._deps.indexedDB;if(c.isBeingOpened||a.idbdb)return c.dbReadyPromise.then(function(){return c.dbOpenError?Pe(c.dbOpenError):a});c.isBeingOpened=!0,c.dbOpenError=null,c.openComplete=!1;var f=c.openCanceller,m=Math.round(10*a.verno),b=!1;function v(){if(c.openCanceller!==f)throw new he.DatabaseClosed("db.open() was cancelled")}function x(){return new se(function(j,T){if(v(),!d)throw new he.MissingAPI;var O=a.name,M=c.autoSchema||!m?d.open(O):d.open(O,m);if(!M)throw new he.MissingAPI;M.onerror=Lt(T),M.onblocked=Re(a._fireOnBlocked),M.onupgradeneeded=Re(function(A){var N;D=M.transaction,c.autoSchema&&!a._options.allowEmptyDB?(M.onerror=pr,D.abort(),M.result.close(),(N=d.deleteDatabase(O)).onsuccess=N.onerror=Re(function(){T(new he.NoSuchDatabase("Database ".concat(O," doesnt exist")))})):(D.onerror=Lt(T),A=A.oldVersion>Math.pow(2,62)?0:A.oldVersion,_=A<1,a.idbdb=M.result,b&&Vf(a,D),Kf(a,A/10,D,T))},T),M.onsuccess=Re(function(){D=null;var A,N,U,F,H,Y=a.idbdb=M.result,Z=L(Y.objectStoreNames);if(0<Z.length)try{var Q=Y.transaction((F=Z).length===1?F[0]:F,"readonly");if(c.autoSchema)N=Y,U=Q,(A=a).verno=N.version/10,U=A._dbSchema=fs(0,N,U),A._storeNames=L(N.objectStoreNames,0),ds(A,[A._allTables],o(U),U);else if(ps(a,a._dbSchema,Q),((H=to(fs(0,(H=a).idbdb,Q),H._dbSchema)).add.length||H.change.some(function(J){return J.add.length||J.change.length}))&&!b)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),m=Y.version+1,b=!0,j(x());us(a,Q)}catch{}Mn.push(a),Y.onversionchange=Re(function(J){c.vcFired=!0,a.on("versionchange").fire(J)}),Y.onclose=Re(function(J){a.on("close").fire(J)}),_&&(H=a._deps,Q=O,Y=H.indexedDB,H=H.IDBKeyRange,so(Y)||Q===is||ro(Y,H).put({name:Q}).catch(Ce)),j()},T)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<c.PR1398_maxLoop)return c.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),x();break;case"VersionError":if(0<m)return m=0,x()}return se.reject(j)})}var E,I=c.dbReadyResolve,D=null,_=!1;return se.race([f,(typeof navigator>"u"?se.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function T(){return indexedDB.databases().finally(j)}E=setInterval(T,100),T()}).finally(function(){return clearInterval(E)}):Promise.resolve()).then(x)]).then(function(){return v(),c.onReadyBeingFired=[],se.resolve(io(function(){return a.on.ready.fire(a.vip)})).then(function j(){if(0<c.onReadyBeingFired.length){var T=c.onReadyBeingFired.reduce(Mi,Ce);return c.onReadyBeingFired=[],se.resolve(io(function(){return T(a.vip)})).then(j)}})}).finally(function(){c.openCanceller===f&&(c.onReadyBeingFired=null,c.isBeingOpened=!1)}).catch(function(j){c.dbOpenError=j;try{D&&D.abort()}catch{}return f===c.openCanceller&&a._close(),Pe(j)}).finally(function(){c.openComplete=!0,I()}).then(function(){var j;return _&&(j={},a.tables.forEach(function(T){T.schema.indexes.forEach(function(O){O.name&&(j["idb://".concat(a.name,"/").concat(T.name,"/").concat(O.name)]=new Ye(-1/0,[[[]]]))}),j["idb://".concat(a.name,"/").concat(T.name,"/")]=j["idb://".concat(a.name,"/").concat(T.name,"/:dels")]=new Ye(-1/0,[[[]]])}),en(mr).fire(j),uo(j,!0)),a})}function ho(a){function c(b){return a.next(b)}var d=m(c),f=m(function(b){return a.throw(b)});function m(b){return function(E){var x=b(E),E=x.value;return x.done?E:E&&typeof E.then=="function"?E.then(d,f):l(E)?Promise.all(E).then(d,f):d(E)}}return m(c)()}function ys(a,c,d){for(var f=l(a)?a.slice():[a],m=0;m<d;++m)f.push(c);return f}var Yf={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema,m={},b=[];function v(_,j,T){var O=br(_),M=m[O]=m[O]||[],A=_==null?0:typeof _=="string"?1:_.length,N=0<j,N=r(r({},T),{name:N?"".concat(O,"(virtual-from:").concat(T.name,")"):T.name,lowLevelIndex:T,isVirtual:N,keyTail:j,keyLength:A,extractKey:Zi(_),unique:!N&&T.unique});return M.push(N),N.isPrimaryKey||b.push(N),1<A&&v(A===2?_[0]:_.slice(0,A-1),j+1,T),M.sort(function(U,F){return U.keyTail-F.keyTail}),N}c=v(f.primaryKey.keyPath,0,f.primaryKey),m[":id"]=[c];for(var x=0,E=f.indexes;x<E.length;x++){var I=E[x];v(I.keyPath,0,I)}function D(_){var j,T=_.query.index;return T.isVirtual?r(r({},_),{query:{index:T.lowLevelIndex,range:(j=_.query.range,T=T.keyTail,{type:j.type===1?2:j.type,lower:ys(j.lower,j.lowerOpen?a.MAX_KEY:a.MIN_KEY,T),lowerOpen:!0,upper:ys(j.upper,j.upperOpen?a.MIN_KEY:a.MAX_KEY,T),upperOpen:!0})}}):_}return r(r({},d),{schema:r(r({},f),{primaryKey:c,indexes:b,getIndexByKeyPath:function(_){return(_=m[br(_)])&&_[0]}}),count:function(_){return d.count(D(_))},query:function(_){return d.query(D(_))},openCursor:function(_){var j=_.query.index,T=j.keyTail,O=j.isVirtual,M=j.keyLength;return O?d.openCursor(D(_)).then(function(N){return N&&A(N)}):d.openCursor(_);function A(N){return Object.create(N,{continue:{value:function(U){U!=null?N.continue(ys(U,_.reverse?a.MAX_KEY:a.MIN_KEY,T)):_.unique?N.continue(N.key.slice(0,M).concat(_.reverse?a.MIN_KEY:a.MAX_KEY,T)):N.continue()}},continuePrimaryKey:{value:function(U,F){N.continuePrimaryKey(ys(U,a.MAX_KEY,T),F)}},primaryKey:{get:function(){return N.primaryKey}},key:{get:function(){var U=N.key;return M===1?U[0]:U.slice(0,M)}},value:{get:function(){return N.value}}})}}})}})}};function fo(a,c,d,f){return d=d||{},f=f||"",o(a).forEach(function(m){var b,v,x;g(c,m)?(b=a[m],v=c[m],typeof b=="object"&&typeof v=="object"&&b&&v?(x=ae(b))!==ae(v)?d[f+m]=c[m]:x==="Object"?fo(b,v,d,f+m+"."):b!==v&&(d[f+m]=c[m]):b!==v&&(d[f+m]=c[m])):d[f+m]=void 0}),o(c).forEach(function(m){g(a,m)||(d[f+m]=c[m])}),d}function po(a,c){return c.type==="delete"?c.keys:c.keys||c.values.map(a.extractKey)}var Qf={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema.primaryKey;return r(r({},d),{mutate:function(m){var b=ue.trans,v=b.table(c).hook,x=v.deleting,E=v.creating,I=v.updating;switch(m.type){case"add":if(E.fire===Ce)break;return b._promise("readwrite",function(){return D(m)},!0);case"put":if(E.fire===Ce&&I.fire===Ce)break;return b._promise("readwrite",function(){return D(m)},!0);case"delete":if(x.fire===Ce)break;return b._promise("readwrite",function(){return D(m)},!0);case"deleteRange":if(x.fire===Ce)break;return b._promise("readwrite",function(){return(function _(j,T,O){return d.query({trans:j,values:!1,query:{index:f,range:T},limit:O}).then(function(M){var A=M.result;return D({type:"delete",keys:A,trans:j}).then(function(N){return 0<N.numFailures?Promise.reject(N.failures[0]):A.length<O?{failures:[],numFailures:0,lastResult:void 0}:_(j,r(r({},T),{lower:A[A.length-1],lowerOpen:!0}),O)})})})(m.trans,m.range,1e4)},!0)}return d.mutate(m);function D(_){var j,T,O,M=ue.trans,A=_.keys||po(f,_);if(!A)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:A}):r({},_)).type!=="delete"&&(_.values=s([],_.values)),_.keys&&(_.keys=s([],_.keys)),j=d,O=A,((T=_).type==="add"?Promise.resolve([]):j.getMany({trans:T.trans,keys:O,cache:"immutable"})).then(function(N){var U=A.map(function(F,H){var Y,Z,Q,J=N[H],ne={onerror:null,onsuccess:null};return _.type==="delete"?x.fire.call(ne,F,J,M):_.type==="add"||J===void 0?(Y=E.fire.call(ne,F,_.values[H],M),F==null&&Y!=null&&(_.keys[H]=F=Y,f.outbound||S(_.values[H],f.keyPath,F))):(Y=fo(J,_.values[H]),(Z=I.fire.call(ne,Y,F,J,M))&&(Q=_.values[H],Object.keys(Z).forEach(function(X){g(Q,X)?Q[X]=Z[X]:S(Q,X,Z[X])}))),ne});return d.mutate(_).then(function(F){for(var H=F.failures,Y=F.results,Z=F.numFailures,F=F.lastResult,Q=0;Q<A.length;++Q){var J=(Y||A)[Q],ne=U[Q];J==null?ne.onerror&&ne.onerror(H[Q]):ne.onsuccess&&ne.onsuccess(_.type==="put"&&N[Q]?_.values[Q]:J)}return{failures:H,results:Y,numFailures:Z,lastResult:F}}).catch(function(F){return U.forEach(function(H){return H.onerror&&H.onerror(F)}),Promise.reject(F)})})}}})}})}};function Ml(a,c,d){try{if(!c||c.keys.length<a.length)return null;for(var f=[],m=0,b=0;m<c.keys.length&&b<a.length;++m)ve(c.keys[m],a[b])===0&&(f.push(d?de(c.values[m]):c.values[m]),++b);return f.length===a.length?f:null}catch{return null}}var Jf={stack:"dbcore",level:-1,create:function(a){return{table:function(c){var d=a.table(c);return r(r({},d),{getMany:function(f){if(!f.cache)return d.getMany(f);var m=Ml(f.keys,f.trans._cache,f.cache==="clone");return m?se.resolve(m):d.getMany(f).then(function(b){return f.trans._cache={keys:f.keys,values:f.cache==="clone"?de(b):b},b})},mutate:function(f){return f.type!=="add"&&(f.trans._cache=null),d.mutate(f)}})}}}};function jl(a,c){return a.trans.mode==="readonly"&&!!a.subscr&&!a.trans.explicit&&a.trans.db._options.cache!=="disabled"&&!c.schema.primaryKey.outbound}function Nl(a,c){switch(a){case"query":return c.values&&!c.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Xf={stack:"dbcore",level:0,name:"Observability",create:function(a){var c=a.schema.name,d=new Ye(a.MIN_KEY,a.MAX_KEY);return r(r({},a),{transaction:function(f,m,b){if(ue.subscr&&m!=="readonly")throw new he.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ue.querier));return a.transaction(f,m,b)},table:function(f){var m=a.table(f),b=m.schema,v=b.primaryKey,_=b.indexes,x=v.extractKey,E=v.outbound,I=v.autoIncrement&&_.filter(function(T){return T.compound&&T.keyPath.includes(v.keyPath)}),D=r(r({},m),{mutate:function(T){function O(X){return X="idb://".concat(c,"/").concat(f,"/").concat(X),F[X]||(F[X]=new Ye)}var M,A,N,U=T.trans,F=T.mutatedParts||(T.mutatedParts={}),H=O(""),Y=O(":dels"),Z=T.type,ne=T.type==="deleteRange"?[T.range]:T.type==="delete"?[T.keys]:T.values.length<50?[po(v,T).filter(function(X){return X}),T.values]:[],Q=ne[0],J=ne[1],ne=T.trans._cache;return l(Q)?(H.addKeys(Q),(ne=Z==="delete"||Q.length===J.length?Ml(Q,ne):null)||Y.addKeys(Q),(ne||J)&&(M=O,A=ne,N=J,b.indexes.forEach(function(X){var le=M(X.name||"");function pe(be){return be!=null?X.extractKey(be):null}function ge(be){return X.multiEntry&&l(be)?be.forEach(function(dt){return le.addKey(dt)}):le.addKey(be)}(A||N).forEach(function(be,Qe){var fe=A&&pe(A[Qe]),Qe=N&&pe(N[Qe]);ve(fe,Qe)!==0&&(fe!=null&&ge(fe),Qe!=null&&ge(Qe))})}))):Q?(J={from:(J=Q.lower)!==null&&J!==void 0?J:a.MIN_KEY,to:(J=Q.upper)!==null&&J!==void 0?J:a.MAX_KEY},Y.add(J),H.add(J)):(H.add(d),Y.add(d),b.indexes.forEach(function(X){return O(X.name).add(d)})),m.mutate(T).then(function(X){return!Q||T.type!=="add"&&T.type!=="put"||(H.addKeys(X.results),I&&I.forEach(function(le){for(var pe=T.values.map(function(fe){return le.extractKey(fe)}),ge=le.keyPath.findIndex(function(fe){return fe===v.keyPath}),be=0,dt=X.results.length;be<dt;++be)pe[be][ge]=X.results[be];O(le.name).addKeys(pe)})),U.mutatedParts=bs(U.mutatedParts||{},F),X})}}),_=function(O){var M=O.query,O=M.index,M=M.range;return[O,new Ye((O=M.lower)!==null&&O!==void 0?O:a.MIN_KEY,(M=M.upper)!==null&&M!==void 0?M:a.MAX_KEY)]},j={get:function(T){return[v,new Ye(T.key)]},getMany:function(T){return[v,new Ye().addKeys(T.keys)]},count:_,query:_,openCursor:_};return o(j).forEach(function(T){D[T]=function(O){var M=ue.subscr,A=!!M,N=jl(ue,m)&&Nl(T,O)?O.obsSet={}:M;if(A){var U=function(J){return J="idb://".concat(c,"/").concat(f,"/").concat(J),N[J]||(N[J]=new Ye)},F=U(""),H=U(":dels"),M=j[T](O),A=M[0],M=M[1];if((T==="query"&&A.isPrimaryKey&&!O.values?H:U(A.name||"")).add(M),!A.isPrimaryKey){if(T!=="count"){var Y=T==="query"&&E&&O.values&&m.query(r(r({},O),{values:!1}));return m[T].apply(this,arguments).then(function(J){if(T==="query"){if(E&&O.values)return Y.then(function(pe){return pe=pe.result,F.addKeys(pe),J});var ne=O.values?J.result.map(x):J.result;(O.values?F:H).addKeys(ne)}else if(T==="openCursor"){var X=J,le=O.values;return X&&Object.create(X,{key:{get:function(){return H.addKey(X.primaryKey),X.key}},primaryKey:{get:function(){var pe=X.primaryKey;return H.addKey(pe),pe}},value:{get:function(){return le&&F.addKey(X.primaryKey),X.value}}})}return J})}H.add(d)}}return m[T].apply(this,arguments)}}),D}})}};function zl(a,c,d){if(d.numFailures===0)return c;if(c.type==="deleteRange")return null;var f=c.keys?c.keys.length:"values"in c&&c.values?c.values.length:1;return d.numFailures===f?null:(c=r({},c),l(c.keys)&&(c.keys=c.keys.filter(function(m,b){return!(b in d.failures)})),"values"in c&&l(c.values)&&(c.values=c.values.filter(function(m,b){return!(b in d.failures)})),c)}function mo(a,c){return d=a,((f=c).lower===void 0||(f.lowerOpen?0<ve(d,f.lower):0<=ve(d,f.lower)))&&(a=a,(c=c).upper===void 0||(c.upperOpen?ve(a,c.upper)<0:ve(a,c.upper)<=0));var d,f}function Ul(a,c,j,f,m,b){if(!j||j.length===0)return a;var v=c.query.index,x=v.multiEntry,E=c.query.range,I=f.schema.primaryKey.extractKey,D=v.extractKey,_=(v.lowLevelIndex||v).extractKey,j=j.reduce(function(T,O){var M=T,A=[];if(O.type==="add"||O.type==="put")for(var N=new Ye,U=O.values.length-1;0<=U;--U){var F,H=O.values[U],Y=I(H);N.hasKey(Y)||(F=D(H),(x&&l(F)?F.some(function(X){return mo(X,E)}):mo(F,E))&&(N.addKey(Y),A.push(H)))}switch(O.type){case"add":var Z=new Ye().addKeys(c.values?T.map(function(le){return I(le)}):T),M=T.concat(c.values?A.filter(function(le){return le=I(le),!Z.hasKey(le)&&(Z.addKey(le),!0)}):A.map(function(le){return I(le)}).filter(function(le){return!Z.hasKey(le)&&(Z.addKey(le),!0)}));break;case"put":var Q=new Ye().addKeys(O.values.map(function(le){return I(le)}));M=T.filter(function(le){return!Q.hasKey(c.values?I(le):le)}).concat(c.values?A:A.map(function(le){return I(le)}));break;case"delete":var J=new Ye().addKeys(O.keys);M=T.filter(function(le){return!J.hasKey(c.values?I(le):le)});break;case"deleteRange":var ne=O.range;M=T.filter(function(le){return!mo(I(le),ne)})}return M},a);return j===a?a:(j.sort(function(T,O){return ve(_(T),_(O))||ve(I(T),I(O))}),c.limit&&c.limit<1/0&&(j.length>c.limit?j.length=c.limit:a.length===c.limit&&j.length<c.limit&&(m.dirty=!0)),b?Object.freeze(j):j)}function Fl(a,c){return ve(a.lower,c.lower)===0&&ve(a.upper,c.upper)===0&&!!a.lowerOpen==!!c.lowerOpen&&!!a.upperOpen==!!c.upperOpen}function Zf(a,c){return(function(d,f,m,b){if(d===void 0)return f!==void 0?-1:0;if(f===void 0)return 1;if((f=ve(d,f))===0){if(m&&b)return 0;if(m)return 1;if(b)return-1}return f})(a.lower,c.lower,a.lowerOpen,c.lowerOpen)<=0&&0<=(function(d,f,m,b){if(d===void 0)return f!==void 0?1:0;if(f===void 0)return-1;if((f=ve(d,f))===0){if(m&&b)return 0;if(m)return-1;if(b)return 1}return f})(a.upper,c.upper,a.upperOpen,c.upperOpen)}function ep(a,c,d,f){a.subscribers.add(d),f.addEventListener("abort",function(){var m,b;a.subscribers.delete(d),a.subscribers.size===0&&(m=a,b=c,setTimeout(function(){m.subscribers.size===0&&Me(b,m)},3e3))})}var tp={stack:"dbcore",level:0,name:"Cache",create:function(a){var c=a.schema.name;return r(r({},a),{transaction:function(d,f,m){var b,v,x=a.transaction(d,f,m);return f==="readwrite"&&(v=(b=new AbortController).signal,m=function(E){return function(){if(b.abort(),f==="readwrite"){for(var I=new Set,D=0,_=d;D<_.length;D++){var j=_[D],T=bn["idb://".concat(c,"/").concat(j)];if(T){var O=a.table(j),M=T.optimisticOps.filter(function(le){return le.trans===x});if(x._explicit&&E&&x.mutatedParts)for(var A=0,N=Object.values(T.queries.query);A<N.length;A++)for(var U=0,F=(Z=N[A]).slice();U<F.length;U++)ao((Q=F[U]).obsSet,x.mutatedParts)&&(Me(Z,Q),Q.subscribers.forEach(function(le){return I.add(le)}));else if(0<M.length){T.optimisticOps=T.optimisticOps.filter(function(le){return le.trans!==x});for(var H=0,Y=Object.values(T.queries.query);H<Y.length;H++)for(var Z,Q,J,ne=0,X=(Z=Y[H]).slice();ne<X.length;ne++)(Q=X[ne]).res!=null&&x.mutatedParts&&(E&&!Q.dirty?(J=Object.isFrozen(Q.res),J=Ul(Q.res,Q.req,M,O,Q,J),Q.dirty?(Me(Z,Q),Q.subscribers.forEach(function(le){return I.add(le)})):J!==Q.res&&(Q.res=J,Q.promise=se.resolve({result:J}))):(Q.dirty&&Me(Z,Q),Q.subscribers.forEach(function(le){return I.add(le)})))}}}I.forEach(function(le){return le()})}}},x.addEventListener("abort",m(!1),{signal:v}),x.addEventListener("error",m(!1),{signal:v}),x.addEventListener("complete",m(!0),{signal:v})),x},table:function(d){var f=a.table(d),m=f.schema.primaryKey;return r(r({},f),{mutate:function(b){var v=ue.trans;if(m.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return f.mutate(b);var x=bn["idb://".concat(c,"/").concat(d)];return x?(v=f.mutate(b),b.type!=="add"&&b.type!=="put"||!(50<=b.values.length||po(m,b).some(function(E){return E==null}))?(x.optimisticOps.push(b),b.mutatedParts&&ws(b.mutatedParts),v.then(function(E){0<E.numFailures&&(Me(x.optimisticOps,b),(E=zl(0,b,E))&&x.optimisticOps.push(E),b.mutatedParts&&ws(b.mutatedParts))}),v.catch(function(){Me(x.optimisticOps,b),b.mutatedParts&&ws(b.mutatedParts)})):v.then(function(E){var I=zl(0,r(r({},b),{values:b.values.map(function(D,_){var j;return E.failures[_]?D:(D=(j=m.keyPath)!==null&&j!==void 0&&j.includes(".")?de(D):r({},D),S(D,m.keyPath,E.results[_]),D)})}),E);x.optimisticOps.push(I),queueMicrotask(function(){return b.mutatedParts&&ws(b.mutatedParts)})}),v):f.mutate(b)},query:function(b){if(!jl(ue,f)||!Nl("query",b))return f.query(b);var v=((I=ue.trans)===null||I===void 0?void 0:I.db._options.cache)==="immutable",_=ue,x=_.requery,E=_.signal,I=(function(O,M,A,N){var U=bn["idb://".concat(O,"/").concat(M)];if(!U)return[];if(!(M=U.queries[A]))return[null,!1,U,null];var F=M[(N.query?N.query.index.name:null)||""];if(!F)return[null,!1,U,null];switch(A){case"query":var H=F.find(function(Y){return Y.req.limit===N.limit&&Y.req.values===N.values&&Fl(Y.req.query.range,N.query.range)});return H?[H,!0,U,F]:[F.find(function(Y){return("limit"in Y.req?Y.req.limit:1/0)>=N.limit&&(!N.values||Y.req.values)&&Zf(Y.req.query.range,N.query.range)}),!1,U,F];case"count":return H=F.find(function(Y){return Fl(Y.req.query.range,N.query.range)}),[H,!!H,U,F]}})(c,d,"query",b),D=I[0],_=I[1],j=I[2],T=I[3];return D&&_?D.obsSet=b.obsSet:(_=f.query(b).then(function(O){var M=O.result;if(D&&(D.res=M),v){for(var A=0,N=M.length;A<N;++A)Object.freeze(M[A]);Object.freeze(M)}else O.result=de(M);return O}).catch(function(O){return T&&D&&Me(T,D),Promise.reject(O)}),D={obsSet:b.obsSet,promise:_,subscribers:new Set,type:"query",req:b,dirty:!1},T?T.push(D):(T=[D],(j=j||(bn["idb://".concat(c,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[b.query.index.name||""]=T)),ep(D,T,x,E),D.promise.then(function(O){return{result:Ul(O.result,b,j?.optimisticOps,f,D,v)}})}})}})}};function vs(a,c){return new Proxy(a,{get:function(d,f,m){return f==="db"?c:Reflect.get(d,f,m)}})}var Ht=(Le.prototype.version=function(a){if(isNaN(a)||a<.1)throw new he.Type("Given version is not a positive number");if(a=Math.round(10*a)/10,this.idbdb||this._state.isBeingOpened)throw new he.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,a);var c=this._versions,d=c.filter(function(f){return f._cfg.version===a})[0];return d||(d=new this.Version(a),c.push(d),c.sort(Hf),d.stores({}),this._state.autoSchema=!1,d)},Le.prototype._whenReady=function(a){var c=this;return this.idbdb&&(this._state.openComplete||ue.letThrough||this._vip)?a():new se(function(d,f){if(c._state.openComplete)return f(new he.DatabaseClosed(c._state.dbOpenError));if(!c._state.isBeingOpened){if(!c._state.autoOpen)return void f(new he.DatabaseClosed);c.open().catch(Ce)}c._state.dbReadyPromise.then(d,f)}).then(a)},Le.prototype.use=function(a){var c=a.stack,d=a.create,f=a.level,m=a.name;return m&&this.unuse({stack:c,name:m}),a=this._middlewares[c]||(this._middlewares[c]=[]),a.push({stack:c,create:d,level:f??10,name:m}),a.sort(function(b,v){return b.level-v.level}),this},Le.prototype.unuse=function(a){var c=a.stack,d=a.name,f=a.create;return c&&this._middlewares[c]&&(this._middlewares[c]=this._middlewares[c].filter(function(m){return f?m.create!==f:!!d&&m.name!==d})),this},Le.prototype.open=function(){var a=this;return pn(Yt,function(){return Gf(a)})},Le.prototype._close=function(){var a=this._state,c=Mn.indexOf(this);if(0<=c&&Mn.splice(c,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}a.isBeingOpened||(a.dbReadyPromise=new se(function(d){a.dbReadyResolve=d}),a.openCanceller=new se(function(d,f){a.cancelOpen=f}))},Le.prototype.close=function(d){var c=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;c?(d.isBeingOpened&&d.cancelOpen(new he.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new he.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},Le.prototype.delete=function(a){var c=this;a===void 0&&(a={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",f=this._state;return new se(function(m,b){function v(){c.close(a);var x=c._deps.indexedDB.deleteDatabase(c.name);x.onsuccess=Re(function(){var E,I,D;E=c._deps,I=c.name,D=E.indexedDB,E=E.IDBKeyRange,so(D)||I===is||ro(D,E).delete(I).catch(Ce),m()}),x.onerror=Lt(b),x.onblocked=c._fireOnBlocked}if(d)throw new he.InvalidArgument("Invalid closeOptions argument to db.delete()");f.isBeingOpened?f.dbReadyPromise.then(v):v()})},Le.prototype.backendDB=function(){return this.idbdb},Le.prototype.isOpen=function(){return this.idbdb!==null},Le.prototype.hasBeenClosed=function(){var a=this._state.dbOpenError;return a&&a.name==="DatabaseClosed"},Le.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Le.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Le.prototype,"tables",{get:function(){var a=this;return o(this._allTables).map(function(c){return a._allTables[c]})},enumerable:!1,configurable:!0}),Le.prototype.transaction=function(){var a=function(c,d,f){var m=arguments.length;if(m<2)throw new he.InvalidArgument("Too few arguments");for(var b=new Array(m-1);--m;)b[m-1]=arguments[m];return f=b.pop(),[c,te(b),f]}.apply(this,arguments);return this._transaction.apply(this,a)},Le.prototype._transaction=function(a,c,d){var f=this,m=ue.trans;m&&m.db===this&&a.indexOf("!")===-1||(m=null);var b,v,x=a.indexOf("?")!==-1;a=a.replace("!","").replace("?","");try{if(v=c.map(function(I){if(I=I instanceof f.Table?I.name:I,typeof I!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return I}),a=="r"||a===Ki)b=Ki;else{if(a!="rw"&&a!=Vi)throw new he.InvalidArgument("Invalid transaction mode: "+a);b=Vi}if(m){if(m.mode===Ki&&b===Vi){if(!x)throw new he.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");m=null}m&&v.forEach(function(I){if(m&&m.storeNames.indexOf(I)===-1){if(!x)throw new he.SubTransaction("Table "+I+" not included in parent transaction.");m=null}}),x&&m&&!m.active&&(m=null)}}catch(I){return m?m._promise(null,function(D,_){_(I)}):Pe(I)}var E=function I(D,_,j,T,O){return se.resolve().then(function(){var M=ue.transless||ue,A=D._createTransaction(_,j,D._dbSchema,T);if(A.explicit=!0,M={trans:A,transless:M},T)A.idbtrans=T.idbtrans;else try{A.create(),A.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(F){return F.name===Li.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return I(D,_,j,null,O)})):Pe(F)}var N,U=kt(O);return U&&Ln(),M=se.follow(function(){var F;(N=O.call(A,A))&&(U?(F=Jt.bind(null,null),N.then(F,F)):typeof N.next=="function"&&typeof N.throw=="function"&&(N=ho(N)))},M),(N&&typeof N.then=="function"?se.resolve(N).then(function(F){return A.active?F:Pe(new he.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):M.then(function(){return N})).then(function(F){return T&&A._resolve(),A._completion.then(function(){return F})}).catch(function(F){return A._reject(F),Pe(F)})})}.bind(null,this,b,v,m,d);return m?m._promise(b,E,"lock"):ue.trans?pn(ue.transless,function(){return f._whenReady(E)}):this._whenReady(E)},Le.prototype.table=function(a){if(!g(this._allTables,a))throw new he.InvalidTable("Table ".concat(a," does not exist"));return this._allTables[a]},Le);function Le(a,c){var d=this;this._middlewares={},this.verno=0;var f=Le.dependencies;this._options=c=r({addons:Le.addons,autoOpen:!0,indexedDB:f.indexedDB,IDBKeyRange:f.IDBKeyRange,cache:"cloned"},c),this._deps={indexedDB:c.indexedDB,IDBKeyRange:c.IDBKeyRange},f=c.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var m,b,v,x,E,I={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Ce,dbReadyPromise:null,cancelOpen:Ce,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:c.autoOpen};I.dbReadyPromise=new se(function(_){I.dbReadyResolve=_}),I.openCanceller=new se(function(_,j){I.cancelOpen=j}),this._state=I,this.name=a,this.on=dr(this,"populate","blocked","versionchange","close",{ready:[Mi,Ce]}),this.on.ready.subscribe=G(this.on.ready.subscribe,function(_){return function(j,T){Le.vip(function(){var O,M=d._state;M.openComplete?(M.dbOpenError||se.resolve().then(j),T&&_(j)):M.onReadyBeingFired?(M.onReadyBeingFired.push(j),T&&_(j)):(_(j),O=d,T||_(function A(){O.on.ready.unsubscribe(j),O.on.ready.unsubscribe(A)}))})}}),this.Collection=(m=this,hr(jf.prototype,function(N,A){this.db=m;var T=wl,O=null;if(A)try{T=A()}catch(U){O=U}var M=N._ctx,A=M.table,N=A.hook.reading.fire;this._ctx={table:A,index:M.index,isPrimKey:!M.index||A.schema.primKey.keyPath&&M.index===A.schema.primKey.name,range:T,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:O,or:M.or,valueMapper:N!==or?N:null}})),this.Table=(b=this,hr(xl.prototype,function(_,j,T){this.db=b,this._tx=T,this.name=_,this.schema=j,this.hook=b._allTables[_]?b._allTables[_].hook:dr(null,{creating:[Tf,Ce],reading:[Ef,or],updating:[Af,Ce],deleting:[If,Ce]})})),this.Transaction=(v=this,hr(Uf.prototype,function(_,j,T,O,M){var A=this;this.db=v,this.mode=_,this.storeNames=j,this.schema=T,this.chromeTransactionDurability=O,this.idbtrans=null,this.on=dr(this,"complete","error","abort"),this.parent=M||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new se(function(N,U){A._resolve=N,A._reject=U}),this._completion.then(function(){A.active=!1,A.on.complete.fire()},function(N){var U=A.active;return A.active=!1,A.on.error.fire(N),A.parent?A.parent._reject(N):U&&A.idbtrans&&A.idbtrans.abort(),Pe(N)})})),this.Version=(x=this,hr(Wf.prototype,function(_){this.db=x,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(E=this,hr(El.prototype,function(_,j,T){if(this.db=E,this._ctx={table:_,index:j===":id"?null:j,or:T},this._cmp=this._ascending=ve,this._descending=function(O,M){return ve(M,O)},this._max=function(O,M){return 0<ve(O,M)?O:M},this._min=function(O,M){return ve(O,M)<0?O:M},this._IDBKeyRange=E._deps.IDBKeyRange,!this._IDBKeyRange)throw new he.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=gr(c.IDBKeyRange),this._createTransaction=function(_,j,T,O){return new d.Transaction(_,j,T,d._options.chromeTransactionDurability,O)},this._fireOnBlocked=function(_){d.on("blocked").fire(_),Mn.filter(function(j){return j.name===d.name&&j!==d&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(_)})},this.use(Jf),this.use(tp),this.use(Xf),this.use(Yf),this.use(Qf);var D=new Proxy(this,{get:function(_,j,T){if(j==="_vip")return!0;if(j==="table")return function(M){return vs(d.table(M),D)};var O=Reflect.get(_,j,T);return O instanceof xl?vs(O,D):j==="tables"?O.map(function(M){return vs(M,D)}):j==="_createTransaction"?function(){return vs(O.apply(this,arguments),D)}:O}});this.vip=D,f.forEach(function(_){return _(d)})}var $s,Ct=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",np=(go.prototype.subscribe=function(a,c,d){return this._subscribe(a&&typeof a!="function"?a:{next:a,error:c,complete:d})},go.prototype[Ct]=function(){return this},go);function go(a){this._subscribe=a}try{$s={indexedDB:i.indexedDB||i.mozIndexedDB||i.webkitIndexedDB||i.msIndexedDB,IDBKeyRange:i.IDBKeyRange||i.webkitIDBKeyRange}}catch{$s={indexedDB:null,IDBKeyRange:null}}function Bl(a){var c,d=!1,f=new np(function(m){var b=kt(a),v,x=!1,E={},I={},D={get closed(){return x},unsubscribe:function(){x||(x=!0,v&&v.abort(),_&&en.storagemutated.unsubscribe(T))}};m.start&&m.start(D);var _=!1,j=function(){return Hi(O)},T=function(M){bs(E,M),ao(I,E)&&j()},O=function(){var M,A,N;!x&&$s.indexedDB&&(E={},M={},v&&v.abort(),v=new AbortController,N=(function(U){var F=Dn();try{b&&Ln();var H=Qt(a,U);return H=b?H.finally(Jt):H}finally{F&&Pn()}})(A={subscr:M,signal:v.signal,requery:j,querier:a,trans:null}),Promise.resolve(N).then(function(U){d=!0,c=U,x||A.signal.aborted||(E={},(function(F){for(var H in F)if(g(F,H))return;return 1})(I=M)||_||(en(mr,T),_=!0),Hi(function(){return!x&&m.next&&m.next(U)}))},function(U){d=!1,["DatabaseClosedError","AbortError"].includes(U?.name)||x||Hi(function(){x||m.error&&m.error(U)})}))};return setTimeout(j,0),D});return f.hasValue=function(){return d},f.getValue=function(){return c},f}var wn=Ht;function bo(a){var c=tn;try{tn=!0,en.storagemutated.fire(a),uo(a,!0)}finally{tn=c}}y(wn,r(r({},Qr),{delete:function(a){return new wn(a,{addons:[]}).delete()},exists:function(a){return new wn(a,{addons:[]}).open().then(function(c){return c.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(a){try{return c=wn.dependencies,d=c.indexedDB,c=c.IDBKeyRange,(so(d)?Promise.resolve(d.databases()).then(function(f){return f.map(function(m){return m.name}).filter(function(m){return m!==is})}):ro(d,c).toCollection().primaryKeys()).then(a)}catch{return Pe(new he.MissingAPI)}var c,d},defineClass:function(){return function(a){u(this,a)}},ignoreTransaction:function(a){return ue.trans?pn(ue.transless,a):a()},vip:io,async:function(a){return function(){try{var c=ho(a.apply(this,arguments));return c&&typeof c.then=="function"?c:se.resolve(c)}catch(d){return Pe(d)}}},spawn:function(a,c,d){try{var f=ho(a.apply(d,c||[]));return f&&typeof f.then=="function"?f:se.resolve(f)}catch(m){return Pe(m)}},currentTransaction:{get:function(){return ue.trans||null}},waitFor:function(a,c){return c=se.resolve(typeof a=="function"?wn.ignoreTransaction(a):a).timeout(c||6e4),ue.trans?ue.trans.waitFor(c):c},Promise:se,debug:{get:function(){return Pt},set:function(a){dl(a)}},derive:C,extend:u,props:y,override:G,Events:dr,on:en,liveQuery:Bl,extendObservabilitySet:bs,getByKeyPath:V,setByKeyPath:S,delByKeyPath:function(a,c){typeof c=="string"?S(a,c,void 0):"length"in c&&[].map.call(c,function(d){S(a,d,void 0)})},shallowClone:q,deepClone:de,getObjectDiff:fo,cmp:ve,asap:re,minKey:-1/0,addons:[],connections:Mn,errnames:Li,dependencies:$s,cache:bn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(a){return parseInt(a)}).reduce(function(a,c,d){return a+c/Math.pow(10,2*d)})})),wn.maxKey=gr(wn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(en(mr,function(a){tn||(a=new CustomEvent(Qi,{detail:a}),tn=!0,dispatchEvent(a),tn=!1)}),addEventListener(Qi,function(a){a=a.detail,tn||bo(a)}));var zn,tn=!1,ql=function(){};return typeof BroadcastChannel<"u"&&((ql=function(){(zn=new BroadcastChannel(Qi)).onmessage=function(a){return a.data&&bo(a.data)}})(),typeof zn.unref=="function"&&zn.unref(),en(mr,function(a){tn||zn.postMessage(a)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(a){if(!Ht.disableBfCache&&a.persisted){Pt&&console.debug("Dexie: handling persisted pagehide"),zn?.close();for(var c=0,d=Mn;c<d.length;c++)d[c].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(a){!Ht.disableBfCache&&a.persisted&&(Pt&&console.debug("Dexie: handling persisted pageshow"),ql(),bo({all:new Ye(-1/0,[[]])}))})),se.rejectionMapper=function(a,c){return!a||a instanceof Ae||a instanceof TypeError||a instanceof SyntaxError||!a.name||!ul[a.name]?a:(c=new ul[a.name](c||a.message,a),"stack"in a&&$(c,"stack",{get:function(){return this.inner.stack}}),c)},dl(Pt),r(Ht,Object.freeze({__proto__:null,Dexie:Ht,liveQuery:Bl,Entity:yl,cmp:ve,PropModSymbol:qt,PropModification:fr,replacePrefix:function(a,c){return new fr({replacePrefix:[a,c]})},add:function(a){return new fr({add:a})},remove:function(a){return new fr({remove:a})},default:Ht,RangeSet:Ye,mergeRanges:yr,rangesOverlap:Ol}),{default:Ht}),Ht})})(Ps)),Ps.exports}var Mp=Lp();const Lo=Dp(Mp),rc=Symbol.for("Dexie"),Hs=globalThis[rc]||(globalThis[rc]=Lo);if(Lo.semVer!==Hs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Lo.semVer} and ${Hs.semVer}`);const{liveQuery:ga,mergeRanges:h1,rangesOverlap:f1,RangeSet:p1,cmp:m1,Entity:g1,PropModSymbol:b1,PropModification:w1,replacePrefix:y1,add:v1,remove:$1}=Hs,jp="easydb";function kn(e,t){return`${e}::${t}`}let ks=null;function Ks(){if(ks)return ks;const e=new Hs(jp);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),s=(await n.toArray()).filter(l=>l.workspaceId==null);if(s.length===0)return;const i=(await t.table("workspaces").toArray()).map(l=>l.id),o=i.length>0?i:["default"];for(const l of s){for(const u of o)await n.put({key:kn(u,l.key),workspaceId:u,name:l.key,value:l.value});await n.delete(l.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Np()),ks={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},ks}function Np(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function $r(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>ba(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const s=await e.get(t);if(!s)throw new Error(`patch: doc id=${t} vanished after update`);return s},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=ga(()=>e.toArray()).subscribe({next:s=>t(s)});return()=>r.unsubscribe()}}}function zp(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const s=Object.entries(n);return r.filter(i=>ba(i,s)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(s=>({...s,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const i=await e.get(n);if(!i)throw new Error(`row patch: row ${n} vanished after update`);return i},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const s=ga(()=>e.where("tableId").equals(t).toArray()).subscribe({next:i=>n(i)});return()=>s.unsubscribe()}}}function Up(e,t){const n=s=>({...s,workspaceId:t(),key:kn(t(),s.name),name:s.name,value:s.value}),r=()=>e.where("workspaceId").equals(t());return{async find(s){const i=await r().toArray();if(!s||Object.keys(s).length===0)return i;const o=Object.entries(s);return i.filter(l=>ba(l,o))},async findOne(s){return await e.get(kn(t(),s))??null},async insert(s){const i=n(s);return await e.add(i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>n(o));return await e.bulkAdd(i),i},async upsert(s){const i=n(s);return await e.put(i),i},async patch(s,i){const o=kn(t(),s);if(await e.update(o,i)===0)throw new Error(`setting patch: no setting ${s}`);const u=await e.get(o);if(!u)throw new Error(`setting patch: ${s} vanished after update`);return u},async remove(s){await e.delete(kn(t(),s))},async bulkRemove(s){s.length!==0&&await e.bulkDelete(s.map(i=>kn(t(),i)))},subscribe(s){const o=ga(()=>r().toArray()).subscribe({next:l=>s(l)});return()=>o.unsubscribe()}}}function ba(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Fp(e,t){return{workspaces:$r(e.workspaces),tables:$r(e.tables),settings:Up(e.settings,t),plugins:$r(e.plugins),viewTemplates:$r(e.viewTemplates),viewInstances:$r(e.viewInstances),rows:n=>zp(e.rows,n)}}function Bp(e){const{base:t,providers:n,tableById:r,ctx:s}=e,i=new Map;return{...t,rows(o){const l=r(o),u=l?.source;if(u){const h=n.get(u.type);if(h){const p=JSON.stringify(u),g=i.get(o);if(g&&g.key===p)return g.coll;const y=h.create(l,s);return i.set(o,{key:p,coll:y}),y}}return i.delete(o),t.rows(o)}}}function _e(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Oe(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Mo(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function an(e,t){const n=new Set([...e].map(s=>s.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let s=2;;s++){const i=`${r}-${s}`;if(!n.has(i.toLowerCase()))return i}}function qp(e){const t=async(r,s)=>(await e.find()).filter(i=>i.workspaceId===r&&i.id!==s).map(i=>i.name),n=(r,s)=>{const i=an(s,r.name);return i===r.name?r:(console.warn(`[store] "${r.name}" is taken in this workspace — stored as "${i}"`),{...r,name:i,code:Oe(i)})};return{...e,async insert(r){return e.insert(n(r,await t(r.workspaceId,r.id)))},async bulkInsert(r){if(r.length===0)return e.bulkInsert(r);const s=new Set((await e.find()).filter(o=>o.workspaceId===r[0].workspaceId).map(o=>o.name)),i=r.map(o=>{const l=n(o,s);return s.add(l.name),l});return e.bulkInsert(i)},async upsert(r){return e.upsert(n(r,await t(r.workspaceId,r.id)))},async patch(r,s){if(typeof s.name!="string")return e.patch(r,s);const i=await e.findOne(r);if(!i)return e.patch(r,s);const o=an(await t(i.workspaceId,r),s.name);return o===s.name?e.patch(r,s):(console.warn(`[store] "${s.name}" is taken in this workspace — renamed to "${o}"`),e.patch(r,{...s,name:o,code:Oe(o)}))}}}function Hp(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const s of r)try{s(n)}catch(i){console.error(`[event:${String(t)}] listener threw`,i)}}}}const yt=Se`
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
`;function vt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const sc=new WeakSet;function $t(e,t){if(sc.has(t))return;sc.add(t);let n=0,r=0,s=0,i=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=u.clientX,r=u.clientY;const p=e.getBoundingClientRect();s=p.left,i=p.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!o)return;const h=u.clientX-n,p=u.clientY-r,g=-e.offsetWidth+80,y=window.innerWidth-80,w=0,$=window.innerHeight-40,C=Math.max(g,Math.min(y,s+h)),P=Math.max(w,Math.min($,i+p));e.style.position="fixed",e.style.left=`${C}px`,e.style.top=`${P}px`,e.style.margin="0"});const l=u=>{if(o){o=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}var Kp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,Vu=(e,t,n,r)=>{for(var s=r>1?void 0:r?Vp(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Kp(t,n,s),s};let ht=class extends ke{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),ht.instance=this}disconnectedCallback(){super.disconnectedCallback(),ht.instance===this&&(ht.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&$t(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return k`
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
        `}}};ht.instance=null;ht.styles=[yt,Se`
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
    `];Vu([B()],ht.prototype,"current",2);ht=Vu([Ie("host-dialogs")],ht);const xt=Se`
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
`;var Wp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,Wu=(e,t,n,r)=>{for(var s=r>1?void 0:r?Gp(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Wp(t,n,s),s};let Kt=class extends ke{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Kt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Kt.instance===this&&(Kt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return k`
      ${this.toasts.map(e=>k`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Qp(e.kind)}</span>
            <span class="body"> ${e.title?k`<strong>${e.title}</strong>`:""}${Yp(e.message)} </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Kt.instance=null;Kt.styles=[xt,Se`
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
    `];Wu([B()],Kt.prototype,"toasts",2);Kt=Wu([Ie("toast-host")],Kt);function Yp(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,s;for(;(s=t.exec(e))!==null;)s.index>r&&n.push(e.slice(r,s.index)),n.push({url:s[0]}),r=s.index+s[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(i=>typeof i=="string"?i:k`<a href=${i.url} target="_blank" rel="noopener noreferrer">${i.url}</a>`)}function Qp(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}const Jp=new Set(["html-preview"]);function Xp(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function jt(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function vo(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function Zp(e){return{registerHeaderButton:t=>jt(e.headerButtons,t),registerFooterButton:t=>jt(e.footerButtons,t),registerTableButton:t=>jt(e.tableButtons,t),registerColumnEditorAction:t=>jt(e.columnEditorActions,t),registerImporter:t=>jt(e.importers,t),registerConnector:t=>jt(e.connectors,t),registerExporter:t=>jt(e.exporters,t),registerUrlSource:t=>jt(e.urlSources,t),registerDropHandler:t=>jt(e.dropHandlers,t),registerCellRenderer:(t,n)=>vo(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>vo(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>vo(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>jt(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:em}}const em={async alert(e,t){const n=ht.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=ht.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=ht.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=ht.instance;if(r)return r.choice(e,t,n);const s=window.prompt(`${e}

Options: ${t.join(", ")}`);return s&&t.includes(s)?s:null},toast(e,t){const n=Kt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},wa="/easydbaccess/settings.json",Gu="/easydbaccess/secrets.txt";function Br(e){try{return globalThis.localStorage??null}catch{return null}}function oi(e){const t=Br();if(!t)return{};const n=t.getItem(wa);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function Vs(e,t){return oi()[e]}function tm(e,t,n){const r=Br();if(!r)return;const s=oi();s[e]=t,r.setItem(wa,JSON.stringify(s))}function nm(e,t){const n=Br();if(!n)return;const r=oi();e in r&&(delete r[e],n.setItem(wa,JSON.stringify(r)))}function Ls(e,t){return e in oi()}function Pr(e){return Br()?.getItem(Gu)??""}function Yu(e,t){Br()?.setItem(Gu,e)}function Kn(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf(":");if(s<0)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim();i&&(t[i]=o)}return t}function ya(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const s=t[r.trim()];return s===void 0?n:s})}function Qu(e){return typeof e=="string"&&e.includes("${secret:")}function ic(e){return typeof e=="string"&&e.trim()!==""&&!Qu(e)}const rm=/(^|[_:.\-\s])(tokens?|secrets?|passwords?|passwd|pwd|api[_-]?keys?|apikeys?|auth|credentials?|pat)($|[_:.\-\s])/i;function oc(e){return rm.test(e)}function sm(e,t){if((oc(e.name)||t?.(e.name)===!0)&&ic(e.value))return!0;const r=e.value;return r===null||typeof r!="object"||Array.isArray(r)?!1:Object.entries(r).some(([s,i])=>oc(s)&&ic(i))}function im(e,t){const n=[],r=[];for(const s of e)sm(s,t)?r.push(s.name):n.push(s);return{kept:n,withheld:r}}function om(e,t,n){return typeof t!="string"||t===""||!Qu(e)?!1:ya(e,n)===t}function am(e){const t=Zp(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),s=cm(e.store,e.registries),i={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:i,registerRowSource:r,settings:s,backend:{fetch:async(o,l)=>{const u=await lm(e.store),h=l?.body instanceof ArrayBuffer;if(!u||h)return globalThis.fetch(o,l);const p={url:o};return l?.method&&(p.method=l.method),l?.headers&&(p.headers=l.headers),typeof l?.body=="string"&&(p.body=l.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})},async saveFile(o,l,u){const h=typeof l=="string"?new Blob([l],{type:u??"application/octet-stream"}):l,p=URL.createObjectURL(h),g=document.createElement("a");g.href=p,g.download=o,g.rel="noopener",document.body.appendChild(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(p),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function lm(e){const t="server-sync:url";let n=Ls(t)?Vs(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:ya(n,Kn(Pr())).replace(/\/+$/,"")}function cm(e,t){const n=(l,u)=>`${l}:${u}`,r=(l,u)=>t.settings.get(l)?.fields.find(h=>h.key===u),s=l=>typeof l=="string"?ya(l,Kn(Pr())):l,i=async l=>Ls(l)?Vs(l):(await e.settings.findOne(l))?.value,o=async(l,u)=>om(await i(l),u,Kn(Pr()));return{async get(l,u){const h=n(l,u);let p;if(Ls(h))p=Vs(h);else{const g=await e.settings.findOne(h);p=g?g.value:r(l,u)?.default}return s(p)},async set(l,u,h,p){const g=n(l,u);if(await o(g,h))return;(p??r(l,u)?.scope??"workspace")==="user"?(tm(g,h),await e.settings.remove(g).catch(()=>{})):(await e.settings.upsert({name:g,value:h}),nm(g))},async placement(l,u){const h=n(l,u);return Ls(h)?"user":await e.settings.findOne(h)?"workspace":null}}}function ac(e,t){return e.has(t)?e.get(t)!=="0":!1}function um(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return ac(e,"safemode")?"all-optional":ac(e,"safemode1")?"url-plugins":"off"}const _t=um();function va(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const s=r[0],i=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[s,i,...o].join("/")}`}}return e}function Ju(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function Xu(e){const t=va(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function Zu(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const s=[];let i=0;for(;;){const{done:u,value:h}=await r.read();if(u)break;h&&(s.push(h),i+=h.length,t?.(Math.min(1,i/n)))}const o=new Uint8Array(i);let l=0;for(const u of s)o.set(u,l),l+=u.length;return new TextDecoder().decode(o)}return await e.text()}const dm=50*1024*1024;function lc(e){try{return new URL(e).host}catch{return e}}function Vt(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function hm(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function cc(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function fm(e,t,n={}){const r=va(t),s=n.slowMs??2e3;let i=setTimeout(()=>{i=void 0,n.onSlow?.()},s);const o=()=>{i!==void 0&&(clearTimeout(i),i=void 0)},l=n.maxBytes===null?null:n.maxBytes??dm,u=async h=>{let p;try{p=await e.backend.fetch(h)}catch(y){throw new Error(`Could not reach ${lc(h)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${y.message}]`,{cause:y})}if(!p.ok){const y=await hm(p);throw new Error(`HTTP ${p.status} ${p.statusText||""}`.trim()+(y?` — ${y}`:""))}const g=Number(p.headers.get("content-length"));if(l!==null&&Number.isFinite(g)&&g>l)throw p.body?.cancel().catch(()=>{}),new Error(`Response is ${cc(g)}, over the ${cc(l)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await Zu(p,n.onProgress)}catch(y){throw new Error(`Failed reading the response body from ${lc(h)}: ${y.message}`,{cause:y})}};try{const h=await u(r);if(Ju(h)){const p=Xu(r);if(p)return await u(p)}return h}finally{o()}}async function qr(e,t,n,r={}){const{TopProgress:s}=await et(async()=>{const{TopProgress:o}=await import("./top-progress-BESsIzYy.js");return{TopProgress:o}},[]),i={handle:null};try{return await fm(e,t,{onSlow:()=>{i.handle=s.begin(n)},onProgress:o=>i.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{i.handle?.done()}}const pm=/^[+-]?\d+$/;function ai(e){const t=e.trim();return pm.test(t)?!Number.isSafeInteger(Number(t)):!1}function $a(e){let t="",n=0,r=!1;for(;n<e.length;){const s=e[n];if(r){t+=s,s==="\\"?(n++,n<e.length&&(t+=e[n])):s==='"'&&(r=!1),n++;continue}if(s==='"'){r=!0,t+=s,n++;continue}if(s==="-"||s>="0"&&s<="9"){let i=n;for(e[i]==="-"&&i++;i<e.length&&e[i]>="0"&&e[i]<="9";)i++;const o=i,l=e[i],u=l!=="."&&l!=="e"&&l!=="E",h=e.slice(n,o);u&&ai(h)?t+=`"${h}"`:t+=h,n=o;continue}t+=s,n++}return t}const Cs=e=>e.trim().toLowerCase();function x1(e,t){const n=new Map;for(const i of t)n.set(Cs(i.field),i.field),n.has(Cs(i.label))||n.set(Cs(i.label),i.field);const r=new Set,s=e.map(()=>"");return e.forEach((i,o)=>{const l=n.get(Cs(i));l&&!r.has(l)&&(s[o]=l,r.add(l))}),e.forEach((i,o)=>{if(s[o])return;const l=t[o]?.field;l&&!r.has(l)&&(s[o]=l,r.add(l))}),s}function mm(e,t,n,r){const s=new Map(t.map(i=>[i.field,i.type]));return e.map(i=>{const o={};return n.forEach((l,u)=>{if(!l)return;const h=s.get(l);h!==void 0&&(o[l]=r(i[u]??"",h))}),o})}function gm(e){const t=e.trim();return t.length>=2&&t.startsWith("[")&&t.endsWith("]")}function ed(e){if(!gm(e))return null;try{const t=JSON.parse(e.trim());return Array.isArray(t)?t:null}catch{return null}}function Ot(e){if(e==null)return[];if(Array.isArray(e))return $o(e);if(typeof e!="string")return $o([e]);const t=ed(e);return t?$o(t):bm(e)}function uc(e){return Ot(e).join(", ")}function li(e){return Array.isArray(e)?!0:typeof e=="string"&&ed(e)!==null}function $o(e){const t=[];for(const n of e){if(n==null)continue;const r=typeof n=="string"?n.trim():typeof n=="object"?JSON.stringify(n)??"":String(n);r!==""&&t.push(r)}return t}function bm(e){const t=[];let n="",r=!1,s=!1;const i=()=>{const o=s?n:n.trim();o!==""&&t.push(o),n="",r=!1,s=!1};for(let o=0;o<e.length;o++){const l=e[o];if(l==='"'){if(r&&e[o+1]==='"'){n+='"',o++;continue}r=!r,s=!0;continue}if(l===","&&!r){i();continue}n+=l}return i(),t}const wm={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function ym(e){e.ui.registerImporter(Cm),et(()=>import("./csv-import-options-CGaeV9DK.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=Mm(t).filter(jm);if(r.length===0)return!1;if(t.preventDefault(),r.length===1&&await km(e,t,r[0]))return!0;const s=r.length===1?`"${r[0].name}"`:`${r.length} files`,i=await e.ui.dialogs.choice(`Import ${s} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[$m,dc],"Import CSV");if(!i)return!0;const o=i===dc?async l=>{const{editColumnNames:u}=await et(async()=>{const{editColumnNames:h}=await Promise.resolve().then(()=>$$);return{editColumnNames:h}},void 0);return u(l)}:void 0;for(const l of r)await _m(e,l,o);return!0})}function jo(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Vt(e.url):"pasted"}function vm(e){return _a(jo(e))||"imported"}const $m="Import directly",dc="Edit columns first",hc="A new table",fc="Append to this table",xm="Replace the rows of this table";async function km(e,t,n){const{tableIdAtNode:r}=await et(async()=>{const{tableIdAtNode:p}=await Promise.resolve().then(()=>Gh);return{tableIdAtNode:p}},void 0),s=r(t.target);if(!s)return!1;const i=await e.store.tables.findOne(s);if(!i)return!1;if(i.readonly===!0||i.source!=null)return e.ui.dialogs.toast(`"${i.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import CSV"}),!1;const o=await e.ui.dialogs.choice(`Import "${n.name}" into "${i.name}"?`,[fc,xm,hc],"Import CSV");if(!o)return!0;if(o===hc)return!1;const l=await n.text(),u=o===fc?"append":"overwrite",h={target:{tableId:s,mode:u}};return u==="append"&&(h.mapFields=async(p,g,y)=>{const{mapColumnsToTable:w}=await et(async()=>{const{mapColumnsToTable:$}=await import("./column-map-dialog-CNH6dP6k.js");return{mapColumnsToTable:$}},[]);return w(p,g,i.name,y)}),await xa(e,l,n.name,h),!0}const Cm={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:vm(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await nd(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${jo(n)}…`):r=n.text??"";const i=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??Sa(jo(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...i?{separator:i}:{}},l=e.targetColumns;if(l&&l.length>0){yield{rows:ka(r,o).rows.map(g=>{const y={};for(let w=0;w<l.length;w++){const $=l[w];y[$.field]=Ca(g[w]??"",$.type)}return y})};return}const u=Xn(r,o);yield{columns:u.columns,rows:u.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function _m(e,t,n){await xa(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function xa(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("csv-import: no active workspace");const i=_a(n||"imported")||"imported",o=r.separator??Sa(n),l=r.target?await e.store.tables.findOne(r.target.tableId):null,u=l??(await e.store.tables.find()).find(w=>w.workspaceId===s&&w.name===i);let h,p;if(l&&r.target)p=r.target.mode,h=l.id;else if(u){const w=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!w)return;w==="Append rows"?(p="append",h=u.id):w==="Overwrite rows"?(p="overwrite",h=u.id):(p="new",h=_e())}else p="new",h=_e();e.events.emit("import:before",{source:"csv",tableId:h});let g;if(p==="new"){const w=Xn(t,{maxRows:r.maxRows,separator:o});let $=w.columns,C=w.rows;if(r.editColumns){const P=await r.editColumns($);if(P===null)return;C=Nm(C,$,P),$=P}r.maxRows!=null&&(C=C.slice(0,r.maxRows)),await e.store.tables.insert({id:h,workspaceId:s,name:i,code:Mo(i),columns:$,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()}),g=C.map(P=>({id:_e(),tableId:h,data:P,updatedAt:Date.now()}))}else{const w=u.columns,$=ka(t,{maxRows:r.maxRows,separator:o}),C=r.maxRows!=null?$.rows.slice(0,r.maxRows):$.rows;let P=w.map(R=>R.field);if(r.mapFields){const R=await r.mapFields($.header,w,$.rows[0]??[]);if(R===null)return;P=R}if(g=mm(C,w,P,Ca).map(R=>({id:_e(),tableId:h,data:R,updatedAt:Date.now()})),p==="overwrite"){const R=e.store.rows(h),L=await R.find();await R.bulkRemove(L.map(G=>G.id))}}await e.store.rows(h).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:h,rowCount:g.length})}function ka(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??rd(n),s=sd(n,r,td(t.maxRows));if(s.length===0)return{header:[],rows:[]};const i=s[0],o=s.slice(1).filter(l=>!(l.length===1&&l[0]===""));return{header:i,rows:o}}function td(e){return e!=null?e+1:void 0}async function nd(e,t){const r=new TextDecoder,s=t+1;let i="",o=0,l=!1,u=0;for(;u<e.size;){const h=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const p=r.decode(h,{stream:!0});for(let g=0;g<p.length;g++){const y=p[g];if(y==='"')l=!l;else if(y===`
`&&!l&&(o+=1,o>=s))return i+p.slice(0,g+1)}i+=p}return i}function Xn(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??rd(n),s=sd(n,r,td(t.maxRows));if(s.length===0)return{columns:[],rows:[]};const i=s[0],o=s.slice(1).filter(w=>!(w.length===1&&w[0]==="")),l=i.map((w,$)=>Tm(w,$)),u=ad(l.map(w=>w.field)),h=o.map(w=>{const $={};for(let C=0;C<u.length;C++)$[u[C]]=w[C]??"";return $}),p=l.map((w,$)=>w.type?w.type:Im(h.map(C=>C[u[$]]??"").filter(C=>C.length>0))),g=l.map((w,$)=>{const C=p[$]??"string",P={field:u[$],label:w.label,type:C},R=Em(C),L=w.renderer??R;return L&&(P.renderer=L),w.default!==void 0&&(P.default=w.default),w.max!=null&&(P.max=w.max),w.unique&&(P.unique=!0),w.notnull&&(P.notnull=!0),w.hidden&&(P.hidden=!0),P}),y=h.map(w=>{const $={};for(let C=0;C<u.length;C++){const P=u[C],R=p[C]??"string";$[P]=Ca(w[P]??"",R)}return $});return{columns:g,rows:y}}const Sm=new Set(["string","number","boolean","date","datetime","array"]),pc={color:"color",image:"image"};function Em(e){if(e==="date"||e==="datetime"||e==="boolean")return e;if(e==="array")return"tags"}function Tm(e,t){const n=e.trim();if(!n.includes(":"))return{field:Mo(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),s=Mo(r[0]||`col_${t+1}`),i=(r[1]??r[0]??"").trim()||s,o={field:s,label:i},l=(r[2]??"").trim();l&&(Sm.has(l)?o.type=l:pc[l]&&(o.type="string",o.renderer=pc[l]));const u=(r[3]??"").trim();u&&(o.default=u);const h=(r[4]??"").trim();if(h){const g=Number(h);Number.isFinite(g)&&g>0&&(o.max=g)}const p=(r[5]??"").toLowerCase();return p.includes("u")&&(o.unique=!0),p.includes("n")&&(o.notnull=!0),p.includes("h")&&(o.hidden=!0),o}function rd(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const i of t)i in n&&(n[i]+=1);let r=",",s=-1;for(const i of[",",";","	"])(n[i]??0)>s&&(r=i,s=n[i]??0);return r}function sd(e,t,n){const r=[];let s=[],i="",o=!1;for(let l=0;l<e.length;l++){const u=e[l];if(o)u==='"'?e[l+1]==='"'?(i+='"',l++):o=!1:i+=u;else if(u==='"')o=!0;else if(u===t)s.push(i),i="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[l+1]===`
`&&l++,s.push(i),r.push(s),s=[],i="",n!=null&&r.length>=n)return r}else i+=u}return(i.length>0||s.length>0)&&(s.push(i),r.push(s)),r}function Im(e){return e.length===0?"string":e.every(li)?"array":e.every(Rm)?"boolean":e.every(Om)?"number":e.every(Pm)?"datetime":e.every(Dm)?"date":"string"}const Am=/^(true|false|yes|no|0|1)$/i;function Rm(e){return Am.test(e.trim())}function Om(e){const t=e.trim();if(t===""||ai(t))return!1;const n=Number(t);return Number.isFinite(n)}function Dm(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Pm(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Ca(e,t){const n=e.trim();switch(t){case"array":return n===""?null:n;case"number":{if(n==="")return null;if(ai(n))return n;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return id(n);case"datetime":return Lm(n);default:return e}}function id(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),s=parseInt(t[2],10),i=t[3];let o=parseInt(i,10);i.length===2&&(o+=2e3);let l,u;return r>12?(l=r,u=s):s>12?(u=r,l=s):(l=r,u=s),`${o.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${l.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function Lm(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${id(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const s=new Date(e);if(!Number.isNaN(s.getTime())){const i=s.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}return e}function Mm(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}const od=/\.(csv|tsv|tab)$/i;function _a(e){return e.replace(od,"")}function Sa(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function jm(e){return!!(od.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function ad(e){const t=new Map,n=new Set,r=[];for(const s of e){let i=s,o=t.get(s)??0;for(;n.has(i);)o+=1,i=`${s}_${o+1}`;t.set(s,o),n.add(i),r.push(i)}return r}function Nm(e,t,n){return e.map(r=>{const s={};for(let i=0;i<t.length;i++)s[n[i].field]=r[t[i].field];return s})}const zm=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:ad,importCsvText:xa,init:ym,meta:wm,parseCsv:Xn,parseCsvRaw:ka,readCsvHead:nd,separatorForName:Sa,stripDelimitedExt:_a},Symbol.toStringTag,{value:"Module"})),Um={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},Fm={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Ea(e,t)}};function Bm(e){e.ui.registerExporter(Fm)}function Ea(e,t){const n=e.columns.map(i=>i.field),r=e.columns.map(i=>mc(i.label??i.field)),s=t.map(i=>n.map(o=>mc(qm(i.data[o]))).join(","));return[r.join(","),...s].join(`\r
`)}function qm(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function mc(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Hm=Object.freeze(Object.defineProperty({__proto__:null,init:Bm,meta:Um,serializeCsv:Ea},Symbol.toStringTag,{value:"Module"}));var Km=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,Zn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Vm(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Km(t,n,s),s};function Ws(e,t={}){return(ft.instance??Wm()).open(e,t)}function Wm(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Gm(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let ft=class extends ke{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((n,r)=>n?r:-1).filter(n=>n>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return k`
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
            <ul class="tables">
              ${this.items.map((t,n)=>k`
                  <li>
                    <input type="checkbox" id=${`tsel-${n}`} .checked=${this.selected[n]??!1} @change=${()=>this.toggle(n)} />
                    <label for=${`tsel-${n}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?k`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Gm(t.size)}</span>
                      ${t.detail?k`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};ft.instance=null;ft.styles=[yt,Se`
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
    `];Zn([B()],ft.prototype,"items",2);Zn([B()],ft.prototype,"selected",2);Zn([B()],ft.prototype,"heading",2);Zn([B()],ft.prototype,"message",2);Zn([B()],ft.prototype,"confirmLabel",2);ft=Zn([Ie("table-select-dialog")],ft);function Ta(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let s=0;s<e.length;s++)r[t[s].field]=n[e[s].field];return r}}function gc(e,t){if(t.length===0)return null;const n=new Set(t.map(s=>s.from)),r={};for(const s of Object.keys(e))n.has(s)||(r[s]=e[s]);for(const{from:s,to:i}of t)Object.prototype.hasOwnProperty.call(e,s)&&(r[i]=e[s]);return r}function ci(e,t,n=[]){const r=new Set(e.map(l=>l.field)),s=new Set(n),i=[...e],o=[];for(const l of t)r.has(l.field)||s.has(l.field)||(i.push(l),o.push(l.field),r.add(l.field));return{columns:i,newFields:o}}async function Ia(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function ld(e,t,n,r){const{workspaceId:s,importerId:i,target:o,maxRows:l}=r;let u,h,p,g=!1,y=0,w,$=null;const C=R=>e.store.rows(R),P=async R=>{if(g)return!0;if(o.kind==="new"){let L=R.columns??[];if(r.editColumns){const z=await r.editColumns(L);if(z===null)return!1;$=Ta(L,z),L=z}u=_e(),h=an(await Ia(e,s),t);const G={id:u,workspaceId:s,name:h,code:Oe(h),columns:L,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(G),p=!0}else{const L=await e.store.tables.findOne(o.tableId);if(!L)throw new Error("The table to import into no longer exists.");if(u=L.id,h=L.name,p=!1,o.kind==="overwrite"){const G=await C(u).find();await C(u).bulkRemove(G.map(z=>z.id))}if(R.columns?.length){const G=ci(L.columns,R.columns,L.deletedColumns??[]);G.newFields.length>0&&await e.store.tables.patch(u,{columns:G.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:i,tableId:u}),g=!0,!0};for await(const R of n){if(l!=null&&y>=l)break;if(!await P(R))return null;R.totalCount!=null&&(w=R.totalCount);let L=R.rows;if(l!=null&&y+L.length>l&&(L=L.slice(0,l-y)),L.length===0)continue;$&&(L=L.map($));const G=Date.now(),z=L.map(re=>({id:_e(),tableId:u,data:re,updatedAt:G}));await C(u).bulkInsert(z),y+=z.length,r.onProgress?.(y,w)}return!g&&!await P({})?null:(e.events.emit("import:after",{source:i,tableId:u,rowCount:y}),{tableId:u,tableName:h,rowCount:y,created:p})}function bc(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(s,i)=>qr(e,s,i??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function Ym(e,t){if(t.length<=1)return t;const n=await Ws(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function Qm(e,t,n,r,s){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const i=t.reference(n,r);let o=[];for await(const h of t.read(n,r)){o=h.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const l=an(await Ia(e,s),r.name),u=_e();return await e.store.tables.insert({id:u,workspaceId:s,name:l,code:Oe(l),columns:o,view:"table",source:i,readonly:!0,updatedAt:Date.now()}),{tableId:u,tableName:l,rowCount:0,created:!0}}async function ui(e,t,n,r){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=bc(e,r),o=await t.list(i,n);if(o.length===0)throw new Error("No tables found at that source.");const l=await Ym(t,o);if(l===null)return{landed:[],failed:[],cancelled:!0};const u=[],h=[];for(const p of l)try{if(r.mode==="reference"){u.push(await Qm(e,t,i,p,s));continue}const g=r.target;let y;g.kind!=="new"&&(y=(await e.store.tables.findOne(g.tableId))?.columns);const w=bc(e,r,{...y?{targetColumns:y}:{}}),$=t.read(w,p),C=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),P=await ld(e,p.name,$,{workspaceId:s,importerId:t.id,target:g,...C?{origin:C}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(P===null)return{landed:u,failed:h,cancelled:!0};u.push(P)}catch(g){h.push({name:p.name,error:g?.message??String(g)})}return{landed:u,failed:h,cancelled:!1}}async function cd(e,t,n){const r=new Map;if(n.length===0)return r;const s=(await e.find()).filter(l=>l.workspaceId===t),i=new Map(s.map(l=>[l.name,l])),o=new Map(s.map(l=>[l.id,l]));for(const l of n){if(!Jm(l))continue;const u=i.get(l.name)??o.get(l.id),h=u?.id??l.id;u&&r.set(l.id,u.id);const p=u?u.builtin:l.builtin,g={...l,id:h,workspaceId:t};p===void 0?delete g.builtin:g.builtin=p,await e.upsert(g),i.set(g.name,g),o.set(g.id,g)}return r}function Jm(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const Xm={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Zm(e){e.ui.registerImporter(ud),e.ui.registerDropHandler(async t=>{const r=lg(t).filter(cg);if(r.length===0)return!1;t.preventDefault();for(const s of r)await tg(e,s);return!0})}function Aa(e){return Be(e)?No(e)||Array.isArray(e.tables)?!0:hd(e):!1}function eg(e){return e.kind==="file"&&e.file?xo(e.file.name):e.kind==="url"&&e.url?xo(Vt(e.url)):xo(e.name??"imported")}const ud={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Vt(t.url)}…`):n=t.text??"";const r=eg(t);let s;try{s=JSON.parse($a(n))}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`,{cause:o})}const i=di(s,r);return i.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:i.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function xo(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function tg(e,t){const n=await t.text();let r;try{r=JSON.parse($a(n))}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(Aa(r)){await Ra(e,n,t.name);return}const s=await ui(e,ud,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=s.landed.reduce((o,l)=>o+l.rowCount,0);s.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${i.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Ra(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let i;try{i=JSON.parse($a(t))}catch(P){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${P.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",l=di(i,o);if(l.length===0)return;let u=l;if(l.length>1){const P=await Ws(l.map(R=>({name:R.name,size:R.rows.length})),{title:"Import tables",message:`"${n}" contains ${l.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!P)return;u=P.map(R=>l[R])}const h=(await e.store.tables.find()).filter(P=>P.workspaceId===s),p=new Set(u.map(P=>P.name)),g=h.filter(P=>p.has(P.name));let y;if(g.length===0&&u.length===1)y="append-new";else{const P=g.length>0?[`Overwrite matching (${g.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],R=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${n}".${g.length>0?`

${g.length} table${g.length===1?"":"s"} share a name with existing data.`:""}`,P,"JSON import");if(!R)return;R.startsWith("Overwrite matching")?y="overwrite-matching":R==="Replace entire workspace"?y="replace-workspace":y="append-new"}const w=2e3,$=u.reduce((P,R)=>P+(R.source?0:Math.min(R.rows.length,r.maxRows??1/0)),0);let C=null;if($>=w){const{TopProgress:P}=await et(async()=>{const{TopProgress:R}=await import("./top-progress-BESsIzYy.js");return{TopProgress:R}},[]);C=P.begin(`Importing ${n}…`)}try{if(y==="replace-workspace")for(const z of h){const re=e.store.rows(z.id),V=await re.find();await re.bulkRemove(V.map(S=>S.id)),await e.store.tables.remove(z.id)}const P=new Map(h.map(z=>[z.name,z])),R=new Map,L=[];let G=0;for(const z of u){const re=z.source,V=z.origin??(!re&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let S;const q=y==="overwrite-matching"?P.get(z.name):void 0;let ee=z.columns,te=z.rows;if(r.editColumns&&!q&&!re){const W=await r.editColumns(ee,z.name);if(W===null)continue;te=ag(te,ee,W),ee=W}if(q){if(S=q.id,!q.source){const W=e.store.rows(S),de=await W.find();await W.bulkRemove(de.map(K=>K.id))}await e.store.tables.patch(S,{columns:ee,...z.title?{title:z.title}:{},...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...z.filters?{filters:z.filters}:{},...z.labelColumn?{labelColumn:z.labelColumn}:{},...z.info?{info:z.info}:{},...z.deletedColumns?{deletedColumns:z.deletedColumns}:{},...z.readonly?{readonly:!0}:{},source:re??void 0,origin:V??void 0,updatedAt:Date.now()})}else{S=_e(),e.events.emit("import:before",{source:"json",tableId:S});const W=await e.store.tables.insert({id:S,workspaceId:s,name:z.name,code:Oe(z.name),columns:ee,view:"table",...z.title?{title:z.title}:{},...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{},...z.filters?{filters:z.filters}:{},...z.labelColumn?{labelColumn:z.labelColumn}:{},...z.info?{info:z.info}:{},...z.deletedColumns?{deletedColumns:z.deletedColumns}:{},...z.readonly?{readonly:!0}:{},...re?{source:re}:{},...V?{origin:V}:{},updatedAt:Date.now()});W.name!==z.name&&L.push([z.name,W.name])}R.set(z.name,S);let ce=0;if(!re){const W=e.store.rows(S),K=(r.maxRows!=null?te.slice(0,r.maxRows):te).map(ae=>({id:_e(),tableId:S,data:ae,updatedAt:Date.now()}));await W.bulkInsert(K),ce=K.length,G+=ce,C?.fraction($>0?G/$:1)}e.events.emit("import:after",{source:"json",tableId:S,rowCount:ce})}await ng(e,i,s,R,y==="replace-workspace"),L.length>0&&e.ui.dialogs.toast(L.map(([z,re])=>`“${z}” came in as “${re}”`).join(`
`),{kind:"info",title:"Names must be unique"})}finally{C?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function ng(e,t,n,r,s){if(!Be(t))return;const i=t,o=Array.isArray(i.viewTemplates)?i.viewTemplates:[],l=Array.isArray(i.viewInstances)?i.viewInstances:[];if(o.length===0&&l.length===0)return;if(s){const h=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===n);await e.store.viewInstances.bulkRemove(h.map(p=>p.id))}const u=await cd(e.store.viewTemplates,n,o);for(const h of l){if(!Be(h)||typeof h.id!="string")continue;const p=(h.tableName?r.get(h.tableName):void 0)??h.tableId;if(!p)continue;const g=u.get(h.templateId)??h.templateId;await e.store.viewInstances.upsert({...h,workspaceId:n,tableId:p,templateId:g})}}function di(e,t){if(Be(e)&&No(e))return wc(e);if(Be(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const s of n.tables){if(dd(s)){r.push(yc(s));continue}Be(s)&&No(s)&&r.push(...wc(s))}return r}if(hd(e))return[yc(e)];if(Array.isArray(e)){const n=e.filter(Be);return n.length===0?[]:[{name:t,...vc(n)}]}return Be(e)?[{name:t,...vc([e])}]:[]}function No(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Be(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function wc(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!Be(r))continue;const s=r;if(!Array.isArray(s.dataArray)||!Array.isArray(s.columns))continue;const i=n.replace(/\.table\.json$/,""),o=s.columns.map(p=>rg(p)),l=o.map(p=>p.field),u=s.dataArray.filter(p=>Array.isArray(p)).map(p=>{const g={};for(let y=0;y<l.length;y++)g[l[y]]=p[y];return g}),h={name:i,columns:o,rows:u};if(s.elementRect&&typeof s.elementRect.x=="number"&&typeof s.elementRect.y=="number"){const p=s.elementRect;h.windowGeometry={x:p.x,y:p.y,w:p.width??600,h:p.height??400,z:p.zIndex??100,minimized:!!p.minimized,maximized:!!p.maximized}}typeof s.sortColumn=="number"&&s.sortColumn>=0&&s.sortColumn<l.length&&(h.sortColumn=l[s.sortColumn],h.sortAsc=(s.sortDirection??"asc")!=="desc"),t.push(h)}return t}function rg(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",s={field:t,label:n,type:r};return e.isUnique&&(s.unique=!0),e.isNotNull&&(s.notnull=!0),s}function dd(e){return Be(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function hd(e){return dd(e)&&Array.isArray(e.rows)}function yc(e){const t=e,n=Be(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,s=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,i=typeof t.title=="string"?t.title:void 0,o=Be(t.filters)?t.filters:void 0,l=typeof t.labelColumn=="string"?t.labelColumn:void 0,u=Be(t.info)?t.info:void 0,h=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(w=>typeof w=="string"):void 0,p=t.readonly===!0?!0:void 0,g=Be(t.source)&&typeof t.source.type=="string"?t.source:void 0,y=Be(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(sg),rows:Array.isArray(e.rows)?e.rows.filter(Be):[],...i?{title:i}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:s??!0}:{},...o?{filters:o}:{},...l?{labelColumn:l}:{},...u?{info:u}:{},...h?{deletedColumns:h}:{},...p?{readonly:p}:{},...g?{source:g}:{},...y?{origin:y}:{}}}function sg(e){if(!Be(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",s=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(s=s??r,r="string");const i={field:n,label:String(t.label??n),type:r};return s&&(i.renderer=s),typeof t.script=="string"&&(i.script=t.script),t.readonly===!0&&(i.readonly=!0),i}function vc(e){const t=new Set;for(const s of e)for(const i of Object.keys(s))t.add(i);return{columns:Array.from(t).map(s=>({field:s,label:s,type:ig(e.map(i=>i[s]))})),rows:e}}function ig(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(li)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&og(n))?"date":"string"}function og(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function ag(e,t,n){const r=Ta(t,n);return r?e.map(r):e}function Be(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function lg(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}function cg(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const ug=Object.freeze(Object.defineProperty({__proto__:null,init:Zm,isWorkspaceDump:Aa,meta:Xm,parsedToTables:di,restoreWorkspaceDump:Ra},Symbol.toStringTag,{value:"Module"}));function Oa(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Lr(e){return e.replace(/&(?![a-zA-Z][a-zA-Z0-9]*;|#\d+;|#x[0-9a-fA-F]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function fd(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function Ms(e){const t=e.trim();return t===""?null:/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)?/^(https?|mailto|tel):/i.test(t)?t:null:t}function dg(e){const t=fd(e).trim(),n=t.replace(/[^!-~]/g,"");return Ms(n)===null?null:t}const pd="script|style|iframe|object|embed|noscript|template|svg|math|frame|frameset",hg=new RegExp(`<(${pd})\\b(?:"[^"]*"|'[^']*'|[^"'>])*>[\\s\\S]*?<\\/\\s*\\1\\s*>`,"gi"),fg=new RegExp(`<(?:${pd})\\b[\\s\\S]*$`,"i"),pg=new Set(["br","hr","img","source","wbr","col"]),md=new Set(["a","abbr","audio","b","blockquote","br","caption","cite","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","h1","h2","h3","h4","h5","h6","hr","i","img","ins","kbd","li","mark","ol","p","pre","s","samp","small","source","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul","var","video","wbr"]),mg=new Set(["title","dir","lang"]),gg={a:new Set(["href"]),audio:new Set(["src","controls"]),col:new Set(["span"]),colgroup:new Set(["span"]),img:new Set(["src","alt","width","height"]),ol:new Set(["start","reversed"]),source:new Set(["src","type"]),td:new Set(["colspan","rowspan","headers"]),th:new Set(["colspan","rowspan","scope","headers"]),time:new Set(["datetime"]),video:new Set(["src","controls","poster","width","height"])},bg=new Set(["href","src","poster"]),wg=/([a-zA-Z_:][a-zA-Z0-9_:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,gd=/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s(?:"[^"]*"|'[^']*'|[^"'>])*)?)\s*\/?>/g;function yg(e,t,n){const r=t.toLowerCase();if(!md.has(r))return"";if(e)return pg.has(r)?"":`</${r}>`;const s=gg[r];let i=`<${r}`,o=!1,l=!1;for(const u of n.matchAll(wg)){const h=u[1].toLowerCase();if(!mg.has(h)&&!s?.has(h))continue;const p=u[2]??u[3]??u[4];if(p===void 0){i+=` ${h}`;continue}if(bg.has(h)){const g=dg(p);if(g===null)continue;h==="href"&&(o=!0),h==="src"&&(l=!0),i+=` ${h}="${Lr(g)}"`;continue}i+=` ${h}="${Lr(p)}"`}return r==="a"&&o&&(i+=' target="_blank" rel="noopener noreferrer"'),(r==="img"||r==="source")&&!l?"":`${i}>`}function bd(e){return e.replace(/<!--[\s\S]*?-->/g,"").replace(hg,"").replace(fg,"").replace(/<[!?][^>]*>/g,"")}const vg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","circle","cite","code","col","colgroup","data","datalist","dd","defs","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","line","link","main","map","mark","marquee","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","path","picture","polygon","polyline","pre","progress","q","rect","rp","rt","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","use","var","video","wbr"]);function wd(e,t,n,r){const s=n.toLowerCase();return md.has(s)||vg.has(s)||s.includes("-")?yg(t,n,r):Oa(e)}function $g(e){const t=bd(e);let n="",r=0;for(const s of t.matchAll(gd))n+=Lr(t.slice(r,s.index)),n+=wd(s[0],s[1]==="/",s[2],s[3]),r=s.index+s[0].length;return n+Lr(t.slice(r))}const xg=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function yd(e){return xg.test(e)}function kg(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return fd(e.replace(/<[^>]*>/g,""))}function Cg(e){return(yd(e)?kg(e):e).replace(/\s+/g," ").trim()}const xr="",_g=/\uE000(\d+)\uE000/g,zo=/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)\s*$/,Uo=/^(#{1,6})\s+(.*)$/,Da=/^\s*([-*_])(\s*\1){2,}\s*$/,Fo=/^\s*>/,vd=/^\s*(?:[-*+]|\d+[.)])\s+/,$d=/^\s*\|?[\s:|-]+\|[\s:|-]*$/,Sg="address|article|aside|blockquote|caption|col|colgroup|dd|details|div|dl|dt|figcaption|figure|footer|form|h[1-6]|header|hr|iframe|legend|li|main|nav|ol|p|pre|script|section|style|summary|table|tbody|td|tfoot|th|thead|tr|ul",xd=new RegExp(`^\\s*</?(?:${Sg})(?:[\\s/>]|$)`,"i");function Eg(e){return zo.test(e)||Uo.test(e)||Da.test(e)||Fo.test(e)||vd.test(e)||xd.test(e)}function Fn(e){const t=[];let n=e.replaceAll(xr,"").replace(/(`+)([\s\S]*?)\1/g,(r,s,i)=>(t.push(`<code>${Oa(i)}</code>`),`${xr}${t.length-1}${xr}`));return n=bd(n).replace(gd,(r,s,i,o)=>{const l=wd(r,s==="/",i,o);return l===""?"":(t.push(l),`${xr}${t.length-1}${xr}`)}),n=Lr(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const l=Ms(i);return l===null?r:`<img src="${l}" alt="${s}"${o?` title="${o}"`:""}>`}),n=n.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const l=Ms(i);return l===null?r:`<a href="${l}"${o?` title="${o}"`:""} target="_blank" rel="noopener noreferrer">${s}</a>`}),n=n.replace(/&lt;((?:https?|mailto):[^\s&]+)&gt;/g,(r,s)=>{const i=Ms(s);return i===null?r:`<a href="${i}" target="_blank" rel="noopener noreferrer">${i}</a>`}),n=n.replace(/~~([\s\S]+?)~~/g,"<del>$1</del>"),n=n.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__([\s\S]+?)__/g,"<strong>$1</strong>"),n=n.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g,"$1<em>$2</em>"),n=n.replace(/(^|[\s(])_(?!\s)([^_]+?)_(?=$|[\s).,;:!?])/g,"$1<em>$2</em>"),n=n.replace(/ {2,}\n/g,`<br>
`),n.replace(_g,(r,s)=>t[Number(s)]??"")}function ko(e){return e.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}const Tg=e=>{const t=e.startsWith(":"),n=e.endsWith(":");return t&&n?' style="text-align:center"':n?' style="text-align:right"':t?' style="text-align:left"':""},Ig=[/^ {0,3}#{1,6}\s+\S/,/^ {0,3}>[ \t]+\S/,/^ {0,3}[-*+][ \t]+\S/,/^ {0,3}\d+[.)][ \t]+\S/,/^ {0,3}(?:```|~~~)/,Da],Ag=[/\*\*(?!\s)[^*\n]+\*\*/,/~~(?!\s)[^~\n]+~~/,/`[^`\n]+`/,/!?\[[^\]\n]*\]\([^)\s]+\)/];function Rg(e){return typeof e!="string"||e.trim()===""?null:!Og.test(e)&&$c(e)?"markdown":yd(e)?"html":$c(e)?"markdown":null}const Og=/^\s*<\/?[a-z][a-z0-9]*(\s|\/?>)/i;function $c(e){if(typeof e!="string"||e.trim()==="")return!1;const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.some(n=>Ig.some(r=>r.test(n)))||Ag.some(n=>n.test(e))?!0:t.some((n,r)=>r>0&&$d.test(n)&&n.includes("-")&&(t[r-1]??"").includes("|"))}function hi(e){if(e==null)return"";const t=typeof e=="string"?e:String(e);if(t.trim()==="")return"";const n=t.replace(/\r\n?/g,`
`).split(`
`),r=[];let s=0;const i=o=>{const l=[];for(;s<n.length&&o(n[s]);)l.push(n[s++]);return l};for(;s<n.length;){const o=n[s];if(o.trim()===""){s++;continue}const l=zo.exec(o);if(l){const p=l[1].slice(0,3);s++;const g=i(w=>!w.trim().startsWith(p));s<n.length&&s++;const y=l[2]?` class="language-${l[2]}"`:"";r.push(`<pre><code${y}>${Oa(g.join(`
`))}</code></pre>`);continue}if(xd.test(o)){const p=i(y=>y.trim()!==""),g=$g(p.join(`
`));g.trim()!==""&&r.push(g);continue}const u=Uo.exec(o);if(u){const p=u[1].length;r.push(`<h${p}>${Fn(u[2].replace(/\s+#+\s*$/,""))}</h${p}>`),s++;continue}if(Da.test(o)){r.push("<hr>"),s++;continue}if(Fo.test(o)){const p=i(g=>Fo.test(g)||g.trim()!=="");r.push(`<blockquote>${hi(p.map(g=>g.replace(/^\s*>\s?/,"")).join(`
`))}</blockquote>`);continue}if(o.includes("|")&&s+1<n.length&&$d.test(n[s+1])&&n[s+1].includes("-")){const p=ko(o),g=ko(n[s+1]).map(Tg);s+=2;const y=i(C=>C.trim()!==""&&C.includes("|")),w=p.map((C,P)=>`<th${g[P]??""}>${Fn(C)}</th>`).join(""),$=y.map(C=>`<tr>${ko(C).map((P,R)=>`<td${g[R]??""}>${Fn(P)}</td>`).join("")}</tr>`);r.push(`<table><thead><tr>${w}</tr></thead><tbody>${$.join("")}</tbody></table>`);continue}if(vd.test(o)){const p=i(g=>g.trim()!==""&&!zo.test(g)&&!Uo.test(g));r.push(kd(p));continue}const h=i(p=>p.trim()!==""&&!Eg(p));if(h.length===0){r.push(`<p>${Fn(o)}</p>`),s++;continue}r.push(`<p>${Fn(h.join(`
`))}</p>`)}return r.join(`
`)}function kd(e){const t=[];let n=null,r=null;for(const o of e){const l=/^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$/.exec(o);if(!l){t[t.length-1]?.text.push(o.trim());continue}const u=l[1].length;if(r??=u,u>r&&t.length>0){t[t.length-1].children.push(o.slice(Math.min(u,r+2)));continue}n??=l[3]!==void 0,t.push({text:[l[4]],children:[],indent:u})}const s=n?"ol":"ul",i=t.map(o=>`<li>${Fn(o.text.join(`
`))}${o.children.length>0?kd(o.children):""}</li>`).join("");return`<${s}>${i}</${s}>`}const Bo={markdownToHtml:hi},Cd=Object.keys(Bo),xc=new Map;function Dg(e){const t=xc.get(e);if(t)return t;const n=new Function("row",...Cd,"easydb",`${e}
return render(row);`);return xc.set(e,n),n}function Pg(){return[...Cd.map(e=>Bo[e]),Bo]}function Pa(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=Dg(e)}catch(r){return{ok:!1,label:"compile error",message:kc(r)}}try{return{ok:!0,value:n(t,...Pg())}}catch(r){return{ok:!1,label:"runtime error",message:kc(r)}}}function kc(e){return e instanceof Error?e.message:String(e)}const Lg=new Set(["rowid"]);function La(e){return Lg.has(e.trim().toLowerCase())}function Mg(e,t){const n=e.sources[0];if(!n)return{rows:[],provenance:new Map};let s=(t[n.alias]??[]).map(h=>({[n.alias]:h}));for(let h=1;h<e.sources.length;h++){const p=e.sources[h];if(!p)continue;const g=t[p.alias]??[],y=p.join,w=[];for(const $ of s){const C=y?g.filter(P=>y.on.every(R=>Ng(P.data[R.field],$[R.eqAlias]?.data[R.eqField]))):[];if(C.length>0)for(const P of C)w.push({...$,[p.alias]:P});else y?.type==="left"&&w.push({...$,[p.alias]:void 0})}s=w}const i=[],o=new Map,l=new Map,u=e.limit!=null&&e.limit>0?e.limit:1/0;for(const h of s){if(i.length>=u)break;const p=h[n.alias];if(!p)continue;const g=jg(e.columns,h);if(!zg(g,e.filters))continue;const y=l.get(p.id)??0;l.set(p.id,y+1);const w=`${p.id}#${y}`,$={};for(const[C,P]of Object.entries(h))P&&($[C]=P.id);o.set(w,$),i.push({id:w,tableId:"",data:g,updatedAt:Ug(h)})}return{rows:i,provenance:o}}function jg(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const s=t[r.from.alias]?.data[r.from.field];n[r.field]=s===void 0?null:s}for(const r of e)if(r.from.kind==="script"){const s=Pa(r.from.script,n);n[r.field]=s.ok?s.value:void 0}return n}function Ng(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function zg(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const s=e[n];if(!(s==null?"":String(s)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function Ug(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function fi(e){const t=new Set(e.sources.map(r=>r.alias)),n=new Set;for(const r of e.columns)r.from.kind==="source"&&t.has(r.from.alias)&&n.add(r.field);return n}function _d(e,t,n=[],r=[]){const s=fi(e),i=new Map(n.map(p=>[p.field,p])),o=new Set(r),l=new Map;for(const p of e.columns)!o.has(p.field)&&!l.has(p.field)&&l.set(p.field,p);const u=[];for(const p of n)l.has(p.field)&&!u.includes(p.field)&&u.push(p.field);for(const p of l.keys())u.includes(p)||u.push(p);const h=[];for(const p of u){const g=l.get(p);if(!g)continue;const y=i.get(g.field);let w;if(y)w={...y};else if(g.from.kind==="source"){const $=g.from,C=(t[$.alias]??[]).find(P=>P.field===$.field);w=C?{...C,field:g.field}:{field:g.field,label:g.label??g.field,type:g.type??"string"},La($.field)&&(w.hidden=!0)}else w={field:g.field,label:g.label??g.field,type:g.type??"string"},w.script=g.from.script;s.has(g.field)?delete w.readonly:w.readonly=!0,h.push(w)}return h}function Fg(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function Bg(e,t){const n=Fg(e),r={},s=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],i=[];for(const o of s){const l=n.get(o.field);l&&i.push({field:l,asc:o.asc})}if(i.length>0){r.sortBy=i;const o=i[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[l,u]of Object.entries(t.filters)){const h=n.get(l);h&&u&&(o[h]=u)}Object.keys(o).length>0&&(r.filters=o)}return r}function qg(e,t){return t.get(e.tableName)}function Hg(e,t){const n=new Map(t.map(i=>[i.id,i])),r=new Map;for(const i of t)r.has(i.name)||r.set(i.name,i);const s=(i,o)=>{if(o.has(i))return!0;const l=n.get(i);if(l?.source?.type!=="projection")return!1;const u=l.source.config;if(!u||!Array.isArray(u.sources))return!1;const h=new Set(o).add(i);for(const p of u.sources){const g=qg(p,r);if(g&&s(g.id,h))return!0}return!1};return s(e,new Set)}const kr=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),Co=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,Cc=e=>e==="id"||e.endsWith("id");function Kg(e,t){const n=kr(e.field),r=kr(t.field);if(!n||!r)return 0;const s=kr(e.table)===kr(t.table);if(n===r)return s||n==="id"?0:n.endsWith("id")?9:7;const i=(l,u,h)=>{if(l!=="id"||!h.endsWith("id")||h.length<=2)return 0;const p=h.slice(0,-2),g=kr(u);return p===g||p===Co(g)||Co(p)===Co(g)?9:5},o=Math.max(i(n,e.table,r),i(r,t.table,n));return o>0?o:e.isPk&&Cc(r)||t.isPk&&Cc(n)?6:0}function Vg(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),s=new Set(e.pks??[]),i=o=>{let l=null,u=0;for(const h of t){const p=new Set(h.pks??[]);for(const g of e.fields)for(const y of h.fields){if(o&&r.has(`${h.alias}\0${y}`))continue;const w=Kg({table:e.tableName,field:g,isPk:s.has(g)},{table:h.tableName,field:y,isPk:p.has(y)});w>u&&(u=w,l={thisField:g,otherAlias:h.alias,otherField:y})}}return l};return i(!0)??i(!1)}function Wg(e){const t=e.lastIndexOf("#");return t>=0?e.slice(0,t):e}function Gg(e,t,n,r){const s=e.columns.find(u=>u.field===n);if(!s||s.from.kind!=="source")return null;const i=s.from.alias;if(!e.sources.some(u=>u.alias===i))return null;const o=e.sources[0]?.alias===i,l=r?.[i]??(o?Wg(t):void 0);return l?{alias:i,rowId:l,field:s.from.field}:null}async function Sd(e,t,n,r){const s=n.spec.sources.map(p=>({source:p,table:r.resolve(p.tableName)}));if(s.some(p=>!p.table))return null;const i={...n.spec,sources:s.map(({source:p,table:g})=>({...p,tableName:g.name}))},o={};for(const{source:p,table:g}of s)o[p.alias]=g?.columns??[];const l=_d(i,o,[],[]),u=an(r.taken,n.name),h={id:_e(),workspaceId:t,name:u,code:Oe(u),columns:l,view:"table",source:{type:"projection",config:i},readonly:fi(i).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...i.filters?{filters:i.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(h),h}const Ed="__id";function Yg(e){const t=[];let n="",r,s=0;for(;s<e.length;){const i=e[s],o=e[s+1];if(i==="'"||i==='"'){const l=Ma(e,s,i);n+=e.slice(s,l),s=l;continue}if(i==="-"&&o==="-"){let l="";for(s+=2;s<e.length&&e[s]!==`
`;)l+=e[s++];const u=/^\s*projection:\s*(.+?)\s*$/i.exec(l);u?.[1]&&n.trim()===""&&(r=u[1]);continue}if(i==="/"&&o==="*"){for(s+=2;s<e.length&&!(e[s]==="*"&&e[s+1]==="/");)s++;s+=2;continue}if(i===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,s++;continue}n+=i,s++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function Ma(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function Wt(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function Td(e,t){const n=[];let r=0,s="",i=0;for(;i<e.length;){const o=e[i];if(o==="'"||o==='"'){const l=Ma(e,i,o);s+=e.slice(i,l),i=l;continue}if(o==="("?r++:o===")"&&r--,r===0){const l=t(e,i);if(l>0){n.push(s),s="",i+=l;continue}}s+=o,i++}return n.push(s),n}function Vn(e,t){return Td(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function Id(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return Td(e,(r,s)=>/\s/.test(r[s]??"")?n.exec(r.slice(s,s+t.length+32))?.[0].length??0:0)}function Ad(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const s=e[r];if(s==="'"||s==='"'){r=Ma(e,r,s)-1;continue}if(s==="(")n++;else if(s===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function Qg(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):ai(t)?t:/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function Jg(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function Xg(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=Ad(e);if(n==null)return null;const r=[];for(const s of Vn(n,",")){const i=s.trim();if(!i||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(i))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(i);if(!o?.[1])continue;const l=Wt(o[1]);if(l===Ed)continue;const u=o[2]??"",h=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(u.trim())?.[1]??"TEXT",p={field:l,label:l,type:Jg(h)};/\bNOT\s+NULL\b/i.test(u)&&(p.notnull=!0),(/\bUNIQUE\b/i.test(u)||/\bPRIMARY\s+KEY\b/i.test(u))&&(p.unique=!0),r.push(p)}return{name:Wt(t[1]),columns:r,rows:[]}}function Zg(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=Wt(t[1]),r=t[2]?Vn(t[2].slice(1,-1),",").map(o=>Wt(o)):[],s=[];let i=(t[3]??"").trim();for(;i.startsWith("(");){const o=Ad(i);if(o==null)break;const l=Vn(o,",").map(h=>Qg(h)),u={};l.forEach((h,p)=>{const g=r[p]??`col${p+1}`;g!==Ed&&(u[g]=h)}),s.push(u),i=i.slice(o.length+2).trim(),i.startsWith(",")&&(i=i.slice(1).trim())}return{table:n,rows:s}}function _c(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=Wt(t[1]);return{table:n,alias:t[2]?Wt(t[2]):n}}function Mr(e){return Vn(e,".").map(Wt)}function ja(e,t,n){const r=t.filter(s=>(n.get(s.tableName.toLowerCase())??[]).includes(e));return r.some(s=>s.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function eb(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const s=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);s&&(n=Number(s[1]),t=t.slice(0,s.index));let i;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(i=o[1],t=t.slice(0,o.index));let l;const u=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return u?.[1]&&(l=u[1],t=t.slice(0,u.index)),{from:t,limit:n,orderBy:i,where:l}}function tb(e,t,n,r,s){const i=[],o=l=>l.length===2?l[0]??"":ja(l[0]??"",n,r);for(const l of Id(e,"AND")){const u=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(l);if(!u?.[1]||!u[2]){s.push(`ON ${l.trim()}`);continue}const h=Mr(u[1]),p=Mr(u[2]),g=o(h)===t.alias,y=g?h:p,w=g?p:h;if(o(y)!==t.alias){s.push(`ON ${l.trim()} — neither side names ${t.alias}`);continue}i.push({field:y.length===2?y[1]??"":y[0]??"",eqAlias:w.length===2?w[0]??"":o(w),eqField:w.length===2?w[1]??"":w[0]??""})}return i}function nb(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,s=[],i=[];let o=0;for(let h=r.exec(e);h;h=r.exec(e))s.push(e.slice(o,h.index)),i.push((h[1]??"INNER").toUpperCase()),o=h.index+h[0].length;s.push(e.slice(o));const l=_c(s[0]??"");if(!l.table)return null;const u=[{alias:l.alias,tableName:l.table}];for(let h=1;h<s.length;h++){const p=s[h]??"",g=/\s+ON\s+([\s\S]+)$/i.exec(p),y=_c(g?p.slice(0,g.index):p);if(!y.table)continue;const w=i[h-1]??"INNER";if(w==="CROSS"||!g?.[1]){n.push(`${w} JOIN ${y.table} — no ON predicate to model`),u.push({alias:y.alias,tableName:y.table});continue}(w==="RIGHT"||w==="FULL")&&n.push(`${w} JOIN ${y.table} — imported as LEFT JOIN (the closest a projection can express)`);const $=[...u,{alias:y.alias,tableName:y.table}];u.push({alias:y.alias,tableName:y.table,join:{type:w==="INNER"?"inner":"left",on:tb(g[1],y,$,t,n)}})}return u}function rb(e,t,n,r){const s=[];for(const i of Vn(e,",")){const o=i.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const l=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),u=(l?.[1]??o).trim(),h=Mr(u),p=Wt(l?.[2]??h[h.length-1]??u);if(/^NULL$/i.test(u)){s.push({field:p,from:{kind:"script",script:ob}});continue}h.length===2&&h[0]&&h[1]?s.push({field:p,from:{kind:"source",alias:h[0],field:h[1]}}):h.length===1&&h[0]&&/^[\w$]+$/.test(h[0])?s.push({field:p,from:{kind:"source",alias:ja(h[0],t,n),field:h[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return s}function sb(e,t){const n={};if(!e)return n;for(const r of Id(e,"AND")){const s=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),i=s?.[1]?Rd(t.columns,Mr(s[1]),t.sources,t.schema):void 0;if(!s||!i){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[i.field]=(s[2]??"").replace(/''/g,"'")}return n}function ib(e,t){const n=[];for(const r of Vn(e??"",",")){const s=r.trim();if(!s)continue;const[i,o]=s.split(/\s+/),l=Rd(t.columns,Mr(i??""),t.sources,t.schema);if(!l){t.unsupported.push(`ORDER BY ${s}`);continue}n.push({field:l.field,asc:!/^DESC$/i.test(o??"")})}return n}function Sc(e,t,n,r){const s=[],i=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(i);if(!o)return null;const{from:l,limit:u,orderBy:h,where:p}=eb(o[3]??""),g=u??(o[1]?Number(o[1]):void 0),y=nb(l,n,s);if(!y)return null;const w=rb(o[2]??"",y,n,s),$={columns:w,sources:y,schema:n,unsupported:s},C=sb(p,$),P=ib(h,$),R={version:1,sources:y,columns:w};return Object.keys(C).length>0&&(R.filters=C),g!=null&&g>0&&(R.limit=g),{projection:{name:r||t,spec:R,...P.length>0?{sortBy:P}:{}},unsupported:s}}const ob=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function Rd(e,t,n,r){const s=t.length===2?t[0]:ja(t[0]??"",n,r),i=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===s&&o.from.field===i)??e.find(o=>o.field===i)}function pi(e){const t=new Map,n=[],r=[],s=new Map,i=o=>{s.set(o.name.toLowerCase(),o.columns.map(l=>l.field))};for(const o of Yg(e)){const l=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(l)){const u=Xg(l);if(!u){r.push(Cr(l));continue}const h=t.get(u.name);t.set(u.name,{...u,rows:h?.rows??[]}),i(u);continue}if(/^INSERT\s+/i.test(l)){const u=Zg(l);if(!u){r.push(Cr(l));continue}const h=t.get(u.table);if(h)h.rows.push(...u.rows);else{const p={name:u.table,columns:ab(u.rows),rows:u.rows};t.set(u.table,p),i(p)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(l)){const u=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(l),h=u?.[1]?Wt(u[1]):"",p=u?.[2]?Sc(u[2],h||"view",s,h):null;p?(n.push(p.projection),r.push(...p.unsupported)):r.push(Cr(l));continue}if(/^SELECT\b/i.test(l)){const u=Sc(l,"",s,o.name);u?(n.push(u.projection),r.push(...u.unsupported)):r.push(Cr(l));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(l)||r.push(Cr(l))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function Cr(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function ab(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(i=>i[n]).filter(i=>i!=null),s=r.length===0?"string":r.every(i=>typeof i=="number")?"number":r.every(i=>typeof i=="boolean")?"boolean":"string";return{field:n,label:n,type:s}})}const lb={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function cb(e){e.ui.registerImporter(Na),e.ui.registerDropHandler(async t=>{const n=hb(t).filter(fb);if(n.length===0)return!1;t.preventDefault();for(const r of n)await db(e,r);return!0})}const Na={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return pi(await ub(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function ub(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${Vt(t.url)}…`):Promise.resolve(t.text??"")}function za(e){return pi(e).projections.length>0}async function Ua(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const s=pi(t),i={tables:[],projections:[],rowCount:0,unsupported:s.unsupported},o=n.target??{kind:"new"},l=o.kind==="new"||s.tables.length===1;l||i.unsupported.push(`"Import into" was not applied — this script defines ${s.tables.length} tables, and an append/replace names only one destination`);const u=new Map;for(const w of s.tables){const $=await ld(e,w.name,(async function*(){yield{columns:w.columns,rows:w.rows}})(),{workspaceId:r,importerId:"sql",target:l?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:C=>n.editColumns(C,w.name)}:{}});$&&(u.set(w.name,$.tableName),i.tables.push($.tableName),i.rowCount+=$.rowCount)}const h=await e.store.tables.find({workspaceId:r}),p=new Map;for(const w of h)p.has(w.name)||p.set(w.name,w);const g=new Map;for(const w of h)g.has(w.name.toLowerCase())||g.set(w.name.toLowerCase(),w);const y=new Set([...h.map(w=>w.name),...i.tables]);for(const w of s.projections){const $=await Sd(e,r,w,{resolve:C=>{const P=u.get(C);return(P?p.get(P):void 0)??p.get(C)??g.get(C.toLowerCase())},taken:y});if(!$){i.unsupported.push(`projection "${w.name}" — its source tables are not in this workspace`);continue}p.set($.name,$),g.set($.name.toLowerCase(),$),y.add($.name),i.projections.push($.name)}return i}function Fa(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const s=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${s}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function db(e,t){const n=await t.text();try{if(za(n)){Fa(e,await Ua(e,n),t.name);return}const r=await ui(e,Na,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=r.landed.reduce((i,o)=>i+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${s.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function hb(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}function fb(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const pb=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:za,init:cb,meta:lb,reportSqlRestore:Fa,restoreSqlScript:Ua,sqlImporterSpec:Na},Symbol.toStringTag,{value:"Module"}));var mb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,Ba=(e,t,n,r)=>{for(var s=r>1?void 0:r?gb(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&mb(t,n,s),s};let _s=null;function bb(){return _s||(_s=document.createElement("anchored-menu"),document.body.appendChild(_s)),_s}let En=class extends ke{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return bb().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?k`
      <div class="menu" role="menu">
        ${this.items.map(e=>k`
            <button role="menuitem" class=${e.danger?"danger":""} @click=${()=>this.finish(e.id)}>
              ${e.icon?k`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:k``}};En.styles=[xt,Se`
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
    `];Ba([B()],En.prototype,"items",2);Ba([B()],En.prototype,"shown",2);En=Ba([Ie("anchored-menu")],En);const jr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return En}},Symbol.toStringTag,{value:"Module"})),qo='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',wb={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:qo,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function yb(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:qo,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>Ec(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:qo,keywords:["datasette","live","remote","backend"],run:t=>Ec(t)})}async function vb(){const{registries:e}=await oe();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function Ec(e,t){const n=await vb();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const s=t?.getBoundingClientRect(),i=s?await En.open(s,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!i)return;r=s?n.find(o=>o.id===i):n.find(o=>o.label===i)}if(r)try{await r.connect(e)}catch(s){await e.ui.dialogs.alert(s?.message??String(s),`Connect ${r.label} failed`)}}const $b=Object.freeze(Object.defineProperty({__proto__:null,init:yb,meta:wb},Symbol.toStringTag,{value:"Module"}));function Tc(e,t){return JSON.stringify(t.map(n=>e[n]??null))}function xb(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function Od(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:s,deletedRemoteFields:i=[]}=e,o=new Set(i),l=new Set(s),u=L=>{const G={...L};for(const z of o)delete G[z];return G},h=new Set(t.flatMap(L=>Object.keys(L.data))),p=[...new Set(n.flatMap(L=>Object.keys(L)))].filter(L=>h.has(L)&&!o.has(L)&&!l.has(L)).sort(),y=r.length>0&&n.every(L=>xb(L,r))?"pk":p.length>0?"content":"none";if(y==="none")return{data:n.map(u),merged:!1,strategy:y,droppedUserRows:t.filter(L=>Ic(L.data,s)).length};const w=y==="pk"?r:p,$=new Map;for(const L of t){const G=Tc(L.data,w);$.has(G)||$.set(G,L)}const C=new Set,P=n.map(L=>{const G=u(L),z=Tc(L,w),re=$.get(z);if(re){C.add(z);for(const V of s)Object.prototype.hasOwnProperty.call(re.data,V)&&(G[V]=re.data[V])}return G});let R=0;for(const[L,G]of $)!C.has(L)&&Ic(G.data,s)&&(R+=1);return{data:P,merged:!0,strategy:y,droppedUserRows:R}}function Ic(e,t){return t.some(n=>{const r=e[n];return r!=null&&r!==""})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dd=Symbol.for(""),kb=e=>{if(e?.r===Dd)return e?._$litStatic$},Ac=e=>({_$litStatic$:e,r:Dd}),Rc=new Map,Cb=e=>(t,...n)=>{const r=n.length;let s,i;const o=[],l=[];let u,h=0,p=!1;for(;h<r;){for(u=t[h];h<r&&(i=n[h],(s=kb(i))!==void 0);)u+=s+t[++h],p=!0;h!==r&&l.push(i),o.push(u),h++}if(h===r&&o.push(t[r]),p){const g=o.join("$$lit$$");(t=Rc.get(g))===void 0&&(o.raw=o,Rc.set(g,t=o)),n=l}return e(t,...n)},Oc=Cb(k);function _b(e){return e==null||String(e).trim()===""}function Rn(e){const t=[];let n="",r=!1,s=!1,i=!1,o=!1,l=!1,u=!1,h=!0,p=!1;const g=()=>{const y=i?n:n.trim();if(r||o){const w={term:y,negate:o};l&&(w.prefix=!0),u&&(w.exact=!0),p&&t.length>0&&(w.and=!0),t.push(w)}p=!1,n="",r=!1,s=!1,i=!1,o=!1,l=!1,u=!1,h=!0};for(let y=0;y<e.length;y++){const w=e[y];if(!s&&/\s/.test(w)){const $=/^\s+(AND|OR)(?=[\s,]|$)/.exec(e.slice(y));if($&&(r||o)){g(),p=$[1]==="AND",y+=$[0].length-1;continue}}if(w==='"'){if(s&&e[y+1]==='"'){n+='"',r=!0,y++;continue}s=!s,i=!0,r=!0,h=!1;continue}if(w===","&&!s){g();continue}if(w==="!"&&!s&&h&&!o&&!l&&!u){o=!0;continue}if(w==="="&&!s&&h&&!l&&!u){u=!0;continue}if(w==="^"&&!s&&h&&!l&&!u){l=!0;continue}h&&!s&&/\s/.test(w)||(h=!1),n+=w,/\s/.test(w)||(r=!0)}return g(),t}function Sb(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")||/\s(AND|OR)(?=[\s,]|$)/.test(e)}function sn(e){let t="";return e.forEach((n,r)=>{const s=n.term===""&&n.negate?"":Sb(n.term)?`"${n.term.replace(/"/g,'""')}"`:n.term,i=n.exact?"=":n.prefix?"^":"",o=(n.negate?"!":"")+i+s;r===0?t=o:t+=n.and?` AND ${o}`:`,${o}`}),t}function Eb(e){const t=[];for(const n of e){const r=t[t.length-1];n.and&&r?r.push(n):t.push([n])}return t}function Dc(e,t){const n=String(e??"").toLowerCase(),r=t.term.toLowerCase();return t.exact?n===r:t.prefix?n.startsWith(r):n.includes(r)}function Pc(e,t){return t?t.length===0:_b(e)}function Ho(e,t,n){const r=t.term;return r.trim()===""||!t.prefix&&!t.exact&&r.toUpperCase()==="NULL"?Pc(e,n):n?n.some(s=>Dc(s,t)):Dc(e,t)}function Tb(e,t,n){return t.every(r=>r.negate?!Ho(e,r,n):Ho(e,r,n))}function Gs(e,t,n){const r=Eb(Rn(t));if(r.length===0)return!0;const s=n?.type==="array"?Ot(e):null,i=r.filter(l=>l.length===1&&l[0].negate);for(const l of i)if(Ho(e,l[0],s))return!1;const o=r.filter(l=>!(l.length===1&&l[0].negate));return o.length===0?!0:o.some(l=>Tb(e,l,s))}var Ib=Object.defineProperty,Ab=Object.getOwnPropertyDescriptor,er=(e,t,n,r)=>{for(var s=r>1?void 0:r?Ab(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Ib(t,n,s),s};function _o(e){return sn([{...e,negate:!1}])}let ot=class extends ke{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.exactValues=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,s,i){return this.values=t,this.blanks=r,this.onChange=s??null,this.exactValues=i?.exact===!0,this.states=new Map(Rn(n??"").map(o=>[_o(o),{state:o.negate?"not":"on",token:o}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e,t=this.exactValues){const n=t?{term:e,negate:!1,exact:!0}:{term:e,negate:!1},r=_o(n),s=new Map(this.states),i=s.get(r);i===void 0?s.set(r,{state:"on",token:n}):i.state==="on"?s.set(r,{state:"not",token:i.token}):s.delete(r),this.states=s;const o=[...s.values()].map(l=>({...l.token,negate:l.state==="not"}));this.current=sn(o),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),ot.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),ot.instance===this&&(ot.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=(o,l=this.exactValues)=>this.states.get(_o(l?{term:o,negate:!1,exact:!0}:{term:o,negate:!1}))?.state,s=o=>k` <span class=${`cb${o?` ${o}`:""}`}>${o==="on"?"✓":o==="not"?"✕":""}</span> `,i=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return k`
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
            ${t.slice(0,500).map(o=>{const l=r(o.value);return k`
                <li title=${i(l)} @click=${()=>this.cycle(o.value)}>
                  <span class="left">
                    ${s(l)}
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
    `}};ot.instance=null;ot.styles=[xt,Se`
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
    `];er([wt({type:Array})],ot.prototype,"values",2);er([wt({type:Number})],ot.prototype,"blanks",2);er([wt({type:String})],ot.prototype,"current",2);er([B()],ot.prototype,"search",2);er([B()],ot.prototype,"states",2);ot=er([Ie("filter-popover")],ot);var Rb=Object.defineProperty,Ob=Object.getOwnPropertyDescriptor,Dt=(e,t,n,r)=>{for(var s=r>1?void 0:r?Ob(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Rb(t,n,s),s};let gt=class extends ke{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return k`
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
  `;Dt([wt({type:String})],gt.prototype,"value",2);Dt([wt({type:Array})],gt.prototype,"options",2);Dt([wt({type:String})],gt.prototype,"placeholder",2);Dt([B()],gt.prototype,"open",2);Dt([B()],gt.prototype,"highlightIdx",2);Dt([B()],gt.prototype,"dropTop",2);Dt([B()],gt.prototype,"dropLeft",2);Dt([B()],gt.prototype,"dropMinWidth",2);Dt([B()],gt.prototype,"editing",2);Dt([Ft("input")],gt.prototype,"inputEl",2);gt=Dt([Ie("filter-combobox")],gt);function Db(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(l=>l==="AND"||l==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(l=>l.toLowerCase())};const s=[];let i=[];for(const l of n)l==="OR"?(s.push(i),i=[]):l==="AND"||i.push(l.toLowerCase());s.push(i);const o=s.filter(l=>l.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function Pb(e,t,n){const r=Db(t);if(r.kind==="boolean")return e.filter(u=>r.groups.some(h=>h.every(p=>n(u,p))));const{phrase:s,words:i}=r;if(i.length<=1)return s===""?e:e.filter(u=>n(u,s));const o=e.filter(u=>n(u,s));if(o.length>0)return o;const l=e.filter(u=>i.every(h=>n(u,h)));return l.length>0?l:e.filter(u=>i.some(h=>n(u,h)))}const Lb=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Ys(e,t,n){const r=new Map,s=new Map;for(const u of n)r.set(u.field.toLowerCase(),u.field),u.label&&r.set(u.label.toLowerCase(),u.field),s.set(u.field,u.type);const i=[...r.keys()].filter(Boolean).sort((u,h)=>h.length-u.length);let o=t;return i.length>0&&(o=o.replace(new RegExp(`(^|\\s)(${i.map(Lb).join("|")}):\\s+`,"gi"),"$1$2:")),Pb(e,o,(u,h)=>{const p=h.indexOf(":");if(p>0){const g=r.get(h.slice(0,p));if(g)return Gs(u.data[g],h.slice(p+1),{type:s.get(g)})}return Object.values(u.data).some(g=>g!=null&&String(g).toLowerCase().includes(h))})}const Pd=50,Mb=500,jb=100;function Qs(e){return typeof e=="string"?e:String(e)}function Nb(e,t){return t==="array"?Ot(e):e==null||e===""?[]:[Qs(e)]}function Ld(e,t,n){const r=n?.maxLen??Pd;if(e.length===0)return!1;for(const s of e.slice(0,jb)){const i=s.data[t];if(i!=null){if(n?.type==="array"){if(Ot(i).some(o=>o.length>=r))return!1;continue}if(Qs(i).length>=r)return!1}}return!0}function zb(e,t,n){const r=n?.maxLen??Pd,s=n?.maxOptions??Mb,i=new Set;for(const o of e)for(const l of Nb(o.data[t],n?.type))if(!(l.length>=r)&&(i.add(l),i.size>=s))return[...i].sort();return[...i].sort()}function Md(e,t,n){const r=new Map;let s=0;for(const o of e){const l=o.data[t],u=n?.type==="array"?Ot(l):l==null||Qs(l).trim()===""?[]:[Qs(l)];if(u.length===0){s++;continue}for(const h of u)r.set(h,(r.get(h)??0)+1)}let i=[...r.entries()].map(([o,l])=>({value:o,count:l})).sort((o,l)=>l.count-o.count||o.value.localeCompare(l.value));return n?.type==="boolean"&&(i=[...["true","false"].map(l=>({value:l,count:r.get(l)??0})),...i.filter(l=>l.value!=="true"&&l.value!=="false")]),{values:i,blanks:s}}const jd="grid";async function Ub(e){return await e.get(jd,"sortDescFirst")!==!1}function Fb(e,t,n={}){const r=n.additive===!0,s=n.descFirst!==!0,i=e.find(u=>u.field===t),o=e.length===1&&e[0]?.field===t;if(!r&&!o)return[{field:t,asc:s}];const l=r?e.filter(u=>u.field!==t):[];return i?i.asc===s?[...l,{field:t,asc:!s}]:[...l]:[...l,{field:t,asc:s}]}const Js="easydb:visible-count";function Nd(e,t,n){e&&document.dispatchEvent(new CustomEvent(Js,{detail:{key:e,count:t,total:n}}))}function zd(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const Ud="#dc2626",Fd="cell-invalid",Bb=`border-color:${Ud};background:#fef2f2`;function qa(e,t){e.classList.add(Fd),e.style.border=`1px solid ${Ud}`,e.style.background="#fef2f2",t&&(e.title=t)}function qb(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return Bd(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";case"array":return Ot(e).length===0?"empty":"ok";default:return"ok"}}const Hb=/^\s*(true|1)\s*$/i,Kb=/^\s*(false|0)\s*$/i;function Bd(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":Hb.test(e)?"true":Kb.test(e)?"false":"invalid":"invalid"}var Vb=Object.defineProperty,Wb=Object.getOwnPropertyDescriptor,Ne=(e,t,n,r)=>{for(var s=r>1?void 0:r?Wb(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Vb(t,n,s),s};const Gb=200,Yb=10,So=32;let De=class extends ke{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=this.rows.length;t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,Nd(e,t,n))}async bind(){if(!this.tableId)return;const e=await oe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(s=>{const i=s.find(o=>o.id===this.tableId);i&&(this.tableColumns=i.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(s=>{const i=s.find(o=>o.id===this.viewInstanceId);i&&(this.viewInst=i,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(s=>{const i=s.find(o=>o.id===this.tableId);i&&this.applyTable(i)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const n=e.store.rows(this.tableId);this.unsubscribe=n.subscribe(s=>this.rows=s);const r=window.setTimeout(()=>this.loading=!0,Gb);try{this.rows=await n.find()}catch(s){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${s?.message??String(s)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(r),this.loading=!1}}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=jc(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const s=n[r.field];return typeof s=="number"?{...r,width:s}:r}),this.sortSpecs=jc(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await oe();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const s=this.columns.find(i=>i.field===n);if(this.readOnly||s?.readonly===!0){e.api.ui.dialogs.toast(this.readOnly?"This table is read-only.":`“${s?.label??n}” is a read-only column.`,{kind:"warning",title:"Not saved"}),this.requestUpdate();return}if(s){const i=Xb(s,r,this.rows,t.id);if(i){await e.api.ui.dialogs.alert(i,`Cannot save ${s.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(i){await e.api.ui.dialogs.alert(i?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const s=String(n);return k`<input
      type="text"
      class=${Fd}
      style=${Bb}
      title=${r}
      .value=${s}
      @keydown=${i=>this.cancelCellEdit(i,s)}
      @change=${i=>this.setCell(e,t.field,i.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?k`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?k``:e.type==="array"&&Ot(t).length===0?k``:e.type==="date"?k`${Ss(t)}`:e.type==="datetime"?k`${Es(t).replace("T"," ")}`:k`${String(t)}`}renderScriptedCell(e,t){const n=Pa(t.script,e.data);if(!n.ok)return k`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return k`${n.value==null?"":String(n.value)}`;const s=Ac(r);return Oc`<${s}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      .sourceReadonly=${this.readOnly}
      @change=${this.readOnly?void 0:i=>this.setCell(e,t.field,i.detail.value)}
    ></${s}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,s=t.renderer,i=s?this.cellRenderers?.get(s):void 0;if(i){const o=Ac(i);return Oc`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        .sourceReadonly=${r}
        @change=${r?void 0:l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return Mc(n,Ss(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):k`<input
          type="date"
          .value=${Ss(n)}
          @keydown=${o=>this.cancelCellEdit(o,Ss(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return Mc(n,Es(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):k`<input
          type="datetime-local"
          .value=${Es(n)}
          @keydown=${o=>this.cancelCellEdit(o,Es(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":{const o=n==null||n==="";return!o&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):k`<input
          type="number"
          .value=${o?"":String(n)}
          @keydown=${l=>this.cancelCellEdit(l,o?"":String(n))}
          @change=${l=>{const u=l.target.value;this.setCell(e,t.field,u===""?null:Number(u))}}
        />`}case"array":{const o=Ot(n).length===0?"":String(n);return k`<input
          type="text"
          .value=${o}
          @keydown=${l=>this.cancelCellEdit(l,o)}
          @change=${l=>this.setCell(e,t.field,l.target.value)}
        />`}default:return k`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(n??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await oe();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=await oe(),r=Fb(this.sortSpecs,e,{additive:t,descFirst:await Ub(n.api.settings)});this.sortSpecs=r,await this.persistSort(r)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await oe();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}typedFilters(e){return e.map(([t,n])=>({field:t,query:n,type:this.columns.find(r=>r.field===t)?.type}))}filteredRows(){const e=new Set(this.columns.filter(o=>o.filterable===!1).map(o=>o.field)),t=Object.entries(this.filters).filter(([o,l])=>l&&l.trim().length>0&&!e.has(o)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let s=this.rows;if(t.length>0){const o=this.typedFilters(t);s=s.filter(l=>o.every(u=>Gs(l.data[u.field],u.query,{type:u.type})))}const i=this.columns.filter(o=>o.filterable!==!1);return r&&(s=Ys(s,r,i)),n&&(s=Ys(s,n,i)),s}sortedRows(){const e=this.filteredRows();if(this.sortSpecs.length===0)return e;const t=this.sortSpecs.map(r=>({field:r.field,factor:r.asc?1:-1,type:this.columns.find(s=>s.field===r.field)?.type??"string"})),n=[...e];return n.sort((r,s)=>{for(const i of t){const o=Zb(r.data[i.field],s.data[i.field],i.type,i.factor);if(o!==0)return o}return 0}),n}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=ot.instance;if(!r)return;const{values:s,blanks:i}=Md(this.rowsFacetedFor(t),t,{type:this.columns.find(l=>l.field===t)?.type}),o=await r.open(n.getBoundingClientRect(),s,this.filters[t]??"",i,l=>this.onFilterInput(t,l));o!==null&&(typeof o=="object"&&"clear"in o?this.onFilterInput(t,""):typeof o=="string"&&this.onFilterInput(t,o))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(s=>s.filterable===!1).map(s=>s.field)),n=Object.entries(this.filters).filter(([s,i])=>i&&i.trim().length>0&&s!==e&&!t.has(s));if(n.length===0)return this.rows;const r=this.typedFilters(n);return this.rows.filter(s=>r.every(i=>Gs(s.data[i.field],i.query,{type:i.type})))}computeFilterSuggestions(){const e=new Map;for(const t of this.visibleColumns)Ld(this.rows,t.field,{type:t.type})&&e.set(t.field,zb(this.rowsFacetedFor(t.field),t.field,{type:t.type}));return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((s,i)=>{if(s.width!=null)return;const o=t[i];o&&r.set(s.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(s=>r.has(s.field)?{...s,width:r.get(s.field)}:s))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const s=o=>{if(!this.resizing)return;const l=o.clientX-this.resizing.startX,u=Math.max(Yb,this.resizing.startW+l);this.columns=this.columns.map(h=>h.field===this.resizing.field?{...h,width:u}:h)},i=async()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i);const o=this.resizing?.field;if(this.resizing=null,!o)return;const l=await oe();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const h of this.columns)typeof h.width=="number"&&(u[h.field]=h.width);await l.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await l.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",s),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=s?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const s=[...this.columns],i=s.findIndex(h=>h.field===n);if(i<0)return;const[o]=s.splice(i,1);let l=s.findIndex(h=>h.field===t);if(l<0){s.splice(i,0,o);return}r==="after"&&(l+=1),s.splice(l,0,o);const u=await oe();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:s.map(h=>h.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:s,updatedAt:Date.now()})}async saveFilters(){const e=await oe(),t={};for(const[r,s]of Object.entries(this.filters))s&&s.trim().length>0&&(t[r]=s);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+So}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),s=Math.min(e.length,r+n);return{slice:e.slice(r,s),topPad:r*t,bottomPad:(e.length-s)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:s}=this.virtualSlice(e),i=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return k`
      ${this.loading||this.externalLoading?k`<div class="load-bar" role="progressbar" aria-label="Loading rows" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${o!=null?Math.round(o*100):ie}>
            <div class="load-bar-fill ${o!=null?"determinate":""}" style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:ie}></div>
          </div>`:ie}
      <table style=${this.tableSizingStyle(t)??ie}>
        <colgroup>
          ${t.map(l=>k`<col style=${l.width!=null?`width: ${l.width}px`:""} />`)}
          <col style="width:${So}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(l=>{const u=l.sortable!==!1,h=l.filterable!==!1,p=this.sortSpecs.findIndex(z=>z.field===l.field),g=p>=0?this.sortSpecs[p]:void 0,y=g?g.asc?"asc":"desc":null,w=u?y==="asc"?"▲":y==="desc"?"▼":"⇅":"",$=this.sortSpecs.length>1&&p>=0?String(p+1):"",C=`t-${l.type}`,P=this.dragSourceField===l.field,R=this.dropTargetField===l.field,L=R&&this.dropEdge==="before"?" drop-before":R&&this.dropEdge==="after"?" drop-after":"",G=(l.description?`${l.description}
`:"")+(l.units?`Units: ${l.units}
`:"")+`${l.field} — ${u?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(h?"":" · not filterable");return k`
                <th
                  class=${`${C}${y?" sorted":""}${P?" drag-source":""}${L}${u?"":" no-sort"}`}
                  title=${G}
                  @click=${z=>u&&this.toggleSort(l.field,z.shiftKey)}
                  @dragover=${z=>this.onColDragOver(z,l.field,z.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(l.field)}
                  @drop=${z=>this.onColDrop(z,l.field)}
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
                      @dragstart=${z=>this.onColDragStart(z,l.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label">${l.label}${l.units?k`<span class="col-units"> (${l.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true">${w}${$?k`<span class="sort-rank">${$}</span>`:ie}</span>
                    ${h?k`<button
                          class=${`funnel${this.filters[l.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${l.label||l.field}`}
                          @click=${z=>this.openFilterPicker(z,l.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${z=>z.stopPropagation()}
                    @pointerdown=${z=>this.onResizeStart(z,l.field,z.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${So}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(l=>{if(l.filterable===!1)return k`<th></th>`;const u=i.get(l.field)??[];return k`
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
          ${r>0?k`<tr class="spacer" style=${`height:${r}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${n.map(l=>k`
              <tr>
                ${t.map(u=>k`<td
                      class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}${u.renderer&&this.cellRenderers?.get(u.renderer)?" has-renderer":""}${Jb(l,u)}`}
                      title=${Qb(l,u)}
                    >
                      ${this.renderCell(l,u)}
                    </td>`)}
                <td>
                  ${this.readOnly?ie:k`<button class="danger" title="Delete row" @click=${()=>this.deleteRow(l.id)}>
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
    `}};De.styles=[xt,Se`
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
    `];Ne([wt({type:String})],De.prototype,"tableId",2);Ne([wt({type:String})],De.prototype,"viewInstanceId",2);Ne([B()],De.prototype,"columns",2);Ne([B()],De.prototype,"rows",2);Ne([B()],De.prototype,"sortSpecs",2);Ne([B()],De.prototype,"filters",2);Ne([B()],De.prototype,"globalQuery",2);Ne([B()],De.prototype,"localQuery",2);Ne([B()],De.prototype,"dragSourceField",2);Ne([B()],De.prototype,"dropTargetField",2);Ne([B()],De.prototype,"dropEdge",2);Ne([B()],De.prototype,"resizing",2);Ne([B()],De.prototype,"cellRenderers",2);Ne([B()],De.prototype,"scrollY",2);Ne([B()],De.prototype,"viewportHeight",2);Ne([B()],De.prototype,"loading",2);Ne([B()],De.prototype,"externalLoading",2);Ne([B()],De.prototype,"externalProgress",2);Ne([B()],De.prototype,"tableReadonly",2);De=Ne([Ie("data-table")],De);const Lc=500;function Qb(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null||t.type==="array"&&Ot(n).length===0)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>Lc?`${r.slice(0,Lc)}…`:r}function Jb(e,t){if(t.script)return"";const n=qb(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function Xb(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(i=>i.id!==r&&i.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function Ss(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function Es(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function Mc(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function Zb(e,t,n,r){const s=l=>l==null?0:l===""?1:2,i=s(e),o=s(t);return i!==2||o!==2?(i-o)*r:ew(e,t,n)*r}function jc(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function ew(e,t,n){switch(n){case"number":{const r=Number(e),s=Number(t);return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}case"boolean":return(e?1:0)-(t?1:0);case"array":return uc(e).localeCompare(uc(t),void 0,{numeric:!0,sensitivity:"base"});case"date":{const r=new Date(String(e)).getTime(),s=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Nt(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}function st(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)?e:null}function we(e,t){return st(e)?.[t]}function ze(e){return typeof e=="string"?e:null}function Wn(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function Hr(e){return Array.isArray(e)?e:[]}function Tn(e){return Hr(e).filter(t=>typeof t=="string")}function Ha(e){return Hr(we(e,"rows")).filter(t=>st(t)!==null)}function Eo(e){return e===!0||e===1}class qe extends Error{constructor(t,n){const r=ze(we(t,"error")),s=Tn(we(t,"errors"));super(r??(s.length>0?s.join("; "):null)??"Datasette request failed"),this.name="DatasetteError";const i=n??Wn(we(t,"status"));i!=null&&(this.status=i),this.errors=s.length>0?s:r?[r]:[]}}function bt(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[l,u]of t.searchParams)r[l]=u;let s,i=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),i=decodeURIComponent(n[n.length-2]);const l=n.slice(0,n.length-2).join("/");s=t.origin+(l?"/"+l:"")}else n.length===1&&(i=decodeURIComponent(n[0])),s=t.origin;return{base:s,db:i,table:o,query:r}}function Gn(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,s]of Object.entries({...e.query,...t}))s!=null&&n.searchParams.set(r,String(s));return n.toString()}function tw(e,t){const n={};for(const[r,s]of Object.entries(e.query))r.startsWith("_")||(n[r]=s);return Gn({...e,query:n},{_next:t})}function Nc(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function nw(e){const t=ze(we(e,"next_url")),n=we(e,"next"),r=n!=null&&n!==!1?String(n):null,s=Hr(we(e,"rows")),i=Array.isArray(we(e,"columns"))?Tn(we(e,"columns")):null;return{rows:s.map(l=>Array.isArray(l)&&i?Object.fromEntries(i.map((u,h)=>[u,l[h]])):l),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:we(e,"truncated")===!0}}function rw(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function zc(e){const t=Tn(we(e,"primary_keys")),n=Tn(we(e,"columns")),r={},s=we(e,"column_details");if(Array.isArray(s))for(const l of s){const u=st(l);if(!u)continue;const h=ze(u.column)??ze(u.name);h&&(r[h]=u)}else{const l=st(s);if(l)for(const[u,h]of Object.entries(l))r[u]=st(h)??{}}for(const l of n)l in r||(r[l]={});const o=(n.length?n:Object.keys(r)).map(l=>{const u=r[l]??{},h=Eo(u.is_pk)||t.includes(l),p=ze(u.sqlite_type)??ze(u.type)??void 0,g={field:l,label:qd(l),type:rw(p,l)};(Eo(u.notnull)||h)&&(g.notnull=!0),h&&(g.unique=!0),(Eo(u.hidden)||La(l))&&(g.hidden=!0);const y=u.default;return y!=null&&y!==""&&(g.default=y),g});if(t.length===0){const l=o.filter(u=>u.unique).map(u=>u.field);l.length&&t.push(...l)}return{columns:o,pks:t}}function qd(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function mi(e){const t=[],n=new Set;for(const r of e)for(const s of Object.keys(r))n.has(s)||(n.add(s),t.push(s));return t.map(r=>{const s={field:r,label:qd(r),type:sw(e.map(i=>i[r]))};return La(r)&&(s.hidden=!0),s})}function sw(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(li)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&iw(n))?"datetime":"string"}function iw(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function ow(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const s=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(s)?n+=s:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function aw(e,t){return!t||t.length===0?null:t.map(n=>ow(e[n])).join(",")}function lw(e){const t=Array.isArray(e)?e:Hr(we(e,"databases")),n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}const s=ze(we(r,"name"));s===null||s==="_memory"||n.push(ze(we(r,"route"))||s)}return n}function cw(e,t){const n=Array.isArray(e)?e:Hr(we(e,"tables")),r=[];for(const s of n){if(typeof s=="string"){r.push({db:t,table:s,count:null,hidden:!1,pks:[]});continue}const i=ze(we(s,"name"));i!==null&&r.push({db:t,table:i,count:Wn(we(s,"count")),hidden:we(s,"hidden")===!0,pks:Tn(we(s,"primary_keys"))})}return r}async function Ut(e,t){let n;try{n=await e(t)}catch(s){const i=s?.message||"network error";throw new qe({error:`Couldn't reach ${t} (${i}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let s=null;try{s=await n.json()}catch{}throw new qe(s&&typeof s=="object"?s:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(we(r,"ok")===!1)throw new qe(r,n.status);return r}async function Ka(e,t){return lw(await Ut(e,`${t}/-/databases.json`))}async function Uc(e,t,n){return cw(await Ut(e,`${t}/${encodeURIComponent(n)}.json`),n)}function uw(e){const t=e?.views,n=[];for(const r of Array.isArray(t)?t:[]){if(typeof r=="string"){n.push(r);continue}const s=r;s&&typeof s.name=="string"&&s.hidden!==!0&&n.push(s.name)}return n}async function dw(e,t,n){const s=`${t}/${encodeURIComponent(n)}.json?sql=${encodeURIComponent("select name, sql from sqlite_master where type='view' order by name")}&_shape=array`;let i;try{i=await Ut(e,s)}catch(h){const p=h instanceof qe?h.message:String(h);throw new qe({error:`Couldn't read the view definitions from "${n}". Importing views needs the SQL endpoint, which this instance may have disabled (allow_sql). Its tables can still be imported normally.

${p}`},h instanceof qe?h.status:0)}const o=i?.rows,l=Array.isArray(i)?i:Array.isArray(o)?o:[],u=[];for(const h of l){const p=h,g=typeof p?.name=="string"?p.name:Array.isArray(h)?h[0]:void 0,y=typeof p?.sql=="string"?p.sql:Array.isArray(h)?h[1]:void 0;typeof g=="string"&&typeof y=="string"&&y.trim()&&u.push({db:n,name:g,sql:y})}return u}async function hw(e,t){const n=t.db?[t.db]:await Ka(e,t.base),r=[];for(const s of n){const i=await Ut(e,`${t.base}/${encodeURIComponent(s)}.json`);if(uw(i).length!==0){if(i?.allow_execute_sql===!1)throw new qe({error:`"${s}" defines views, but this instance has SQL queries disabled (allow_execute_sql), and a view's definition can only be read through them. Its tables can still be imported normally.`},403);r.push(...await dw(e,t.base,s))}}return r}async function gi(e,t){const n=Gn(t,{_extra:"column_details"}),r=await Ut(e,n);let{columns:s,pks:i}=zc(r),o=we(r,"column_details")!=null,l=Wn(we(r,"count")),u=we(r,"count_truncated")===!0,h=r;if(s.length===0){const p=Gn(t,{_extra:"columns"}),g=await Ut(e,p);({columns:s,pks:i}=zc(g)),o=we(g,"column_details")!=null,l=Wn(we(g,"count"))??l,u=we(g,"count_truncated")===!0||u,h=g}return{columns:s,pks:i,count:l,countTruncated:u,typed:o,raw:h}}async function Ko(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await gi(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function fw(e,t,n){const r=st(e)??{},s=t?st(we(r.databases,t))??{}:{},i=st(s.tables)??{},o=(n?st(i[n]):null)??(n?st(i[n.toLowerCase()]):null)??{},l=S=>ze(o[S])??ze(s[S])??ze(r[S]),u={columns:{},units:{}},h=ze(o.sort);h!==null&&(u.sort=h);const p=ze(o.sort_desc);p!==null&&(u.sortDesc=p);const g=Wn(o.size);g!==null&&(u.size=g),Array.isArray(o.sortable_columns)&&(u.sortableColumns=Tn(o.sortable_columns));const y=ze(o.label_column);y!==null&&(u.labelColumn=y),o.hidden===!0&&(u.hidden=!0);const w=ze(o.description);w!==null&&(u.description=w);const $=ze(o.description_html);$!==null&&(u.descriptionHtml=$);const C=l("source"),P=l("source_url"),R=l("license"),L=l("license_url"),G=l("about"),z=l("about_url");C!==null&&(u.source=C),P!==null&&(u.sourceUrl=P),R!==null&&(u.license=R),L!==null&&(u.licenseUrl=L),G!==null&&(u.about=G),z!==null&&(u.aboutUrl=z);const re=st(o.columns);if(re)for(const[S,q]of Object.entries(re))typeof q=="string"&&(u.columns[S]=q);const V=st(o.units);if(V)for(const[S,q]of Object.entries(V))typeof q=="string"&&(u.units[S]=q);return u}const Fc=new Map;async function pw(e,t){let n=Fc.get(t);return n||(n=Ut(e,`${t}/-/metadata.json`).catch(()=>({})),Fc.set(t,n)),n}async function Va(e,t){const n=await pw(e,t.base);return fw(n,t.db,t.table)}function mw(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Wa(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(l=>{const u=e.columns[l.field],h=e.units[l.field],p=n?n.has(l.field):void 0;return u==null&&h==null&&p===void 0?l:{...l,...u!=null?{description:u}:{},...h!=null?{units:h}:{},...p!==void 0?{sortable:p}:{}}}),s=new Set(t.map(l=>l.field)),i={};e.sort&&s.has(e.sort)?(i.sortColumn=e.sort,i.sortAsc=!0):e.sortDesc&&s.has(e.sortDesc)&&(i.sortColumn=e.sortDesc,i.sortAsc=!1);const o=mw(e);return o&&(i.info=o),e.labelColumn&&s.has(e.labelColumn)&&(i.labelColumn=e.labelColumn),{columns:r,patch:i}}function Ga(e,t){if(t.length===0)return e;const n=new Map(mi(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const s=n.get(r.field);return s&&s!=="string"?{...r,type:s}:r})}async function Kr(e,t,n={}){const r=n.maxRows??1e4,i={_size:n.pageSize??1e3,...n.extraParams||{}},o=Gn(t,i);let l=n.startUrl?Nc(n.startUrl,o)??n.startUrl:o;const u=[];let h=!1,p=!1,g=0,y,w;for(;l;){let $;try{$=await Ut(e,l)}catch(L){if(u.length===0&&!n.startUrl)throw L;y=L instanceof qe&&L.status?`stopped after ${u.length} rows: HTTP ${L.status}`:`stopped after ${u.length} rows: ${L?.message??String(L)}`,p=!0,w=l;break}const C=nw($);u.push(...C.rows),h=h||C.truncated,g+=1,n.onProgress?.(u.length);const R=(C.nextUrl!=null?Nc(C.nextUrl,l):null)??(C.nextToken!=null?tw(t,C.nextToken):null);R&&u.length<r&&C.rows.length>0?l=R:(p=R!=null&&C.rows.length>0,p&&(w=R??void 0),l=null)}return{rows:u,truncated:h,hasMore:p,pages:g,error:y,nextUrl:w}}function gw(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Hd(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Kd(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function bi(e,t,n,r){let s;try{s=await e(t,{method:"POST",headers:gw(r),body:JSON.stringify(n)})}catch(o){throw new qe({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(s&&s.ok===!1){let o=null;try{o=await s.json()}catch{}throw new qe(o&&typeof o=="object"?o:{error:`HTTP ${s.status} for ${t}`},s.status)}const i=await s.json();if(we(i,"ok")===!1)throw new qe(i,s.status);return i}async function Bc(e,t,n,r={}){const s=await bi(e,Hd(t,"insert"),{rows:n,return:!0},r.token);return Ha(s)}async function bw(e,t,n,r,s={}){const i=await bi(e,Kd(t,n,"update"),{update:r,return:!0},s.token),o=st(we(i,"row"));return o||(Ha(i)[0]??null)}async function qc(e,t,n,r={}){await bi(e,Kd(t,n,"delete"),{},r.token)}async function ww(e,t,n,r={}){const s=await bi(e,Hd(t,"upsert"),{rows:n,return:!0},r.token);return Ha(s)}async function yw(e,t){const n=Gn(t,{_extra:"primary_keys"}),r=await Ut(e,n);return Tn(we(r,"primary_keys"))}async function Vd(e,t){try{const n=await Ut(e,Gn(t,{_extra:"count"}));return{count:Wn(we(n,"count")),truncated:we(n,"count_truncated")===!0}}catch{return{count:null,truncated:!1}}}async function Wd(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const s=await e(`${t}/-/versions.json`,r);if(s&&s.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${s.status}`};const i=await s.json(),o=ze(we(we(i,"datasette"),"version"))??ze(we(i,"version"));let l=null;try{const h=await(await e(`${t}/-/actor.json`,r)).json();l=st(we(h,"actor"))}catch{}return{reachable:!0,version:o,actor:l,writable:!!(n.token&&l)}}catch(s){return{reachable:!1,version:null,actor:null,writable:!1,error:s?.message||"unreachable"}}}function Yn(e,t){return t?(n,r)=>{const s=(r??{}).headers??{};return e(n,{...r??{},headers:{...s,Authorization:`Bearer ${t}`}})}:e}function vw(e,t){const n=new Map;for(const r of e)n.has(r.name.toLowerCase())||n.set(r.name.toLowerCase(),r);return r=>n.get(`${t}/${r}`.toLowerCase())??n.get(r.toLowerCase())}async function $w(e,t,n){const r={created:[],skipped:[],found:n.length};if(n.length===0)return r;const s=(await e.store.tables.find()).filter(l=>l.workspaceId===t),i=new Set(s.map(l=>l.name)),o=[...s];for(const l of n){const u=pi(l.sql),h=u.projections[0];if(!h){r.skipped.push({name:l.name,reason:u.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const p=await Sd(e,t,{name:`${l.db}/${l.name}`,spec:h.spec,...h.sortBy?{sortBy:h.sortBy}:{}},{resolve:vw(o,l.db),taken:i});if(!p){const g=h.spec.sources.map(y=>y.tableName).join(", ");r.skipped.push({name:l.name,reason:`its source tables are not in this workspace (${g}) — import them first`});continue}o.push(p),i.add(p.name),r.created.push(p.name),u.unsupported.length>0&&r.skipped.push({name:l.name,reason:`imported, but part of the query was not modelled: ${u.unsupported.slice(0,2).join("; ")}`})}return r}function xw(e,t){if(t.found===0){e.ui.dialogs.toast("That Datasette database defines no views.",{kind:"info",title:"Datasette views"});return}const n=t.skipped.length>0?` ${t.skipped.length} not fully imported: ${t.skipped.map(r=>`${r.name} — ${r.reason}`).join("; ")}`:"";if(t.created.length===0){e.ui.dialogs.toast(`No views could be imported as projections.${n}`,{kind:"warning",title:"Datasette views"});return}e.ui.dialogs.toast(`Imported ${t.created.length} of ${t.found} view${t.found===1?"":"s"} as projections.${n}`,{kind:t.skipped.length>0?"warning":"success",title:"Datasette views"})}function kw(e,t){return`${e}/${encodeURIComponent(t.db)}/${encodeURIComponent(t.name)}`}async function Gd(e,t){try{return await hw(n=>e.backend.fetch(n),bt(t))}catch(n){if(n instanceof qe)return null;throw n}}async function Yd(e,t,n){const r=t.slice(0,5).map(i=>i.name).join(", "),s=await e.ui.dialogs.choice(`${n} ${t.length} view${t.length===1?"":"s"} (${r}${t.length>5?", …":""}).

A view is a query rather than stored rows, so it can come in either way.`,["As projections (live)","As tables (snapshot)"],"Datasette views");return s?s.startsWith("As projections")?"projection":"table":null}async function Cw(e,t,n){const r=await Gd(e,t);if(!r||r.length===0)return;const s=await Yd(e,r,"This database also defines");s&&await Qd(e,bt(t).base,r,s,n)}async function Qd(e,t,n,r,s){if(r==="table"){await s(n.map(o=>kw(t,o)));return}const i=e.workspaceId();i&&xw(e,await $w(e,i,n))}const Xs=e=>e.replace(/^https?:\/\//,""),Er="datasette",Jd=1e4,Xd=1e3,Ya=1e4,Zd=60;function eh(e){e.ui.registerSettings(Er,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:Jd,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:Xd,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:Ya,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:Zd,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function Ts(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function wi(e){const[t,n,r,s]=await Promise.all([e.settings.get(Er,"maxImportRows"),e.settings.get(Er,"pageSize"),e.settings.get(Er,"connectMaxRows"),e.settings.get(Er,"retryWaitSeconds")]);return{maxImportRows:Ts(t,Jd,0),pageSize:Ts(n,Xd,1),connectMaxRows:Ts(r,Ya,1),retryWaitSeconds:Ts(s,Zd,1)}}function yi(e){return e===0?Number.MAX_SAFE_INTEGER:e}function _w(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function Qa(e,t,n,r){const s={...e.info??{}};return!s.source&&!s.sourceUrl&&(s.source=`${Xs(t)}/${n}/${r}`,s.sourceUrl=_w(t,n,r)),{...e,info:s}}async function Ja(e,t,n,r={}){if(t.db&&t.table)return[await Ko(e,t)];const s=[];if(t.db){if(s.push(...await Uc(e,t.base,t.db)),r.skipPicker)return s.filter(l=>!l.hidden)}else{const l=await Ka(e,t.base);if(l.length===0)return[];let u=l;if(l.length>1){const h=await Ws(l.map(p=>({name:p,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${Xs(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!h)return null;u=h.map(p=>l[p])}for(const h of u)try{s.push(...await Uc(e,t.base,h))}catch{}}if(s.length===0)return[];const i=new Set(s.map(l=>l.db)).size>1,o=await Ws(s.map(l=>({name:i?`${l.db}/${l.table}`:l.table,size:l.count,detail:i?void 0:l.db,hidden:l.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${Xs(t.base)}.`,confirmLabel:n});return o?o.map(l=>s[l]):null}const Sw=e=>new Promise(t=>setTimeout(t,e));function Ew(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function Xa(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const Tw={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},Hc="https://latest.datasette.io/fixtures/facetable";function Iw(e){eh(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>Lw(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>jw(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Hc}`,"","Import from Datasette");r&&await Kc(t,r)}}),e.ui.registerUrlSource({id:"datasette-views",label:"Datasette views…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette database URL — its SQL views can come in as live Projections over the tables you already imported, or as snapshot tables.

e.g. ${Hc}`,"","Import Datasette views");if(r)try{const s=await Gd(t,r);if(!s||s.length===0){await t.ui.dialogs.alert("That Datasette database defines no views.","Datasette views");return}const i=await Yd(t,s,"This database defines");if(!i)return;await Qd(t,bt(r).base,s,i,o=>th(t,o,{}))}catch(s){await t.ui.dialogs.alert(s?.message??String(s),"Datasette views")}}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return Aw(r)?(t.preventDefault(),await Kc(n,r,{skipViews:!0}),!0):!1})}async function Kc(e,t,n={}){try{await vi(e,t,n)}catch(r){let s;r instanceof qe?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function Aw(e){try{const t=bt(e);return!!(t.db&&t.table)}catch{return!1}}async function vi(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=await wi(e),i=bt(t),l=await Ja(R=>e.backend.fetch(R),i,"Import",{skipPicker:n.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let h=0;for(const R of l){const L={base:i.base,db:R.db,table:R.table,query:{}},G=await Rw(e,r,L);if(G.skipped){h+=1;continue}u.push({tableId:G.tableId,ref:L,overwrite:G.overwrite,knownCount:R.count})}let p=0,g=0;const y=[],w=[],$=[];for(const R of u)try{const L=await Ow(e,R.tableId,R.ref,R.overwrite,R.knownCount,n,s);p+=1,g+=L.rowCount,L.error?w.push(`${R.ref.db}/${R.ref.table} (${L.error})`):(L.hasMore||L.truncated)&&y.push(`${R.ref.db}/${R.ref.table}`)}catch(L){$.push(`${R.ref.db}/${R.ref.table}: ${L?.message??String(L)}`)}const C=yi(s.maxImportRows),P=n.maxRows!=null?Math.min(n.maxRows,C):C;if(Pw(e,{imported:p,skipped:h,totalRows:g,capped:y,cap:P,partial:w,failed:$,requested:l.length}),p>0&&!n.skipViews)try{await Cw(e,t,R=>th(e,R,n))}catch{}}async function th(e,t,n){for(const r of t)await vi(e,r,{...n,skipViews:!0})}async function Rw(e,t,n){const r=`${n.db}/${n.table}`,s={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},i=(await e.store.tables.find()).filter(h=>h.workspaceId===t),o=i.find(h=>h.name.toLowerCase()===r.toLowerCase());let l=r;if(o){const h=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!h||h==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(h==="Overwrite")return await e.store.tables.patch(o.id,{origin:s,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};l=an(new Set(i.map(p=>p.name)),r)}const u=_e();return await e.store.tables.insert({id:u,workspaceId:t,name:l,code:Oe(`${n.db}-${n.table}`),columns:[],view:"table",origin:s,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function Ow(e,t,n,r,s,i,o){const l=`${n.db}/${n.table}`,u=g=>e.backend.fetch(g),h=yi(o.maxImportRows),p=i.maxRows!=null?Math.min(i.maxRows,h):h;Nt(t,!0);try{let g=[],y=s,w=!1,$=!1,C=[];try{const ye=await gi(u,n);g=ye.columns,y==null&&(y=ye.count,w=ye.countTruncated),$=ye.typed,C=ye.pks??[]}catch{}if(y==null){const ye=await Vd(u,n);y=ye.count,w=ye.truncated}const P=y&&y>0&&(!w||p<=y)?Math.min(y,p):0,R=[];let L=!1,G=!1,z=0,re,V,S;for(;;){const ye=await Kr(u,n,{maxRows:Math.max(0,p-R.length),pageSize:o.pageSize,...S?{startUrl:S}:{},onProgress:Xe=>{P>0&&Nt(t,!0,Math.min(1,(R.length+Xe)/P))}});if(R.push(...ye.rows),L=L||ye.truncated,z+=ye.pages,G=ye.hasMore,re=ye.error,V=ye.nextUrl,!ye.error||!ye.nextUrl||R.length>=p)break;const Ae=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${l}" paused after ${R.length.toLocaleString()} rows (${ye.error}). Datasette may be rate-limiting a large import. Wait ${Ae} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Ae}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Ae}`)break;Nt(t,!0),e.ui.dialogs.toast(`Resuming "${l}" in ${Ae}…`,{kind:"info",title:"Import paused"}),await Sw(Ew(o.retryWaitSeconds)),S=ye.nextUrl,re=void 0,V=void 0}let ee=g.length===0?mi(R):$?g:Ga(g,R),te={};try{const ye=await Va(u,n),Ae=Wa(ye,ee);ee=Ae.columns,te=Ae.patch}catch{}te=Qa(te,n.base,n.db,n.table);const ce=await e.store.tables.findOne(t),W=ce?.columns??[],de=W.length===0;let{columns:K}=ci(W,ee,ce?.deletedColumns),ae=R;if(i.editColumns&&de){const ye=await i.editColumns(K,l);if(ye===null)return{name:l,rowCount:0,hasMore:!1,truncated:!1,pages:z,count:y,error:re};ae=Dw(ae,K,ye),K=ye}const $e=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const Ge=Xa(re,V,R.length,y),Me=C.length>0&&ce?.origin?{origin:{...ce.origin,pks:C}}:{},me=de?{columns:K,...te,...Me,importResume:Ge,updatedAt:$e}:{columns:K,...te.info?{info:te.info}:{},...Me,importResume:Ge,updatedAt:$e};await e.store.tables.patch(t,me);const je=e.store.rows(t);if(r){const ye=await je.find();await je.bulkRemove(ye.map(Ae=>Ae.id))}const kt=ae.map(ye=>({id:_e(),tableId:t,data:ye,updatedAt:$e}));return await je.bulkInsert(kt),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:kt.length}),{name:l,rowCount:kt.length,hasMore:G,truncated:L,pages:z,count:y,error:re}}finally{Nt(t,!1)}}function Dw(e,t,n){const r=Ta(t,n);return r?e.map(r):e}function Pw(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,s=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${s} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const i=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.capped.length} capped${i} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${s}`,{kind:"success",title:"Datasette import"})}async function Lw(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await wi(e);await Mw(e,n,r)}catch(r){const s=r instanceof qe?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function Mw(e,t,n){const r=bt(t.origin.url),s=p=>e.backend.fetch(p),i=yi(n.maxImportRows);Nt(t.id,!0);let o,l;try{let p=[],g=null,y=!1,w=!1;try{const me=await gi(s,r);p=me.columns,g=me.count,y=me.countTruncated,w=me.typed}catch{}if(g==null){const me=await Vd(s,r);g=me.count,y=me.truncated}const $=g&&g>0&&(!y||i<=g)?Math.min(g,i):0,{rows:C,hasMore:P,truncated:R,error:L,nextUrl:G}=await Kr(s,r,{maxRows:i,pageSize:n.pageSize,onProgress:me=>{$>0&&Nt(t.id,!0,Math.min(1,me/$))}});let z=p.length===0?mi(C):w?p:Ga(p,C),re={};try{const me=await Va(s,r),je=Wa(me,z);z=je.columns,re=je.patch}catch{}re=Qa(re,r.base,r.db,r.table);const V=t.columns.length===0,S=ci(t.columns,z,t.deletedColumns);l=S.newFields;const q=Date.now(),ee=Xa(L,G,C.length,g),te=V?{columns:S.columns,...re,importResume:ee,updatedAt:q}:{columns:S.columns,...re.info?{info:re.info}:{},importResume:ee,updatedAt:q};await e.store.tables.patch(t.id,te);const ce=t.origin?.pks??[],W=new Set(z.map(me=>me.field)),de=t.columns.map(me=>me.field).filter(me=>!W.has(me)&&!ce.includes(me)),K=(t.deletedColumns??[]).filter(me=>W.has(me)),ae=e.store.rows(t.id),$e=await ae.find(),{data:Ge,droppedUserRows:Me}=Od({oldRows:$e.map(me=>({data:me.data})),freshRows:C,pks:ce,userAddedFields:de,deletedRemoteFields:K});await ae.bulkRemove($e.map(me=>me.id)),await ae.bulkInsert(Ge.map(me=>({id:_e(),tableId:t.id,data:me,updatedAt:q}))),o={rowCount:Ge.length,hasMore:P,truncated:R,error:L,droppedUserRows:Me}}finally{Nt(t.id,!1)}const u=[];if(o.error)u.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const p=i<Number.MAX_SAFE_INTEGER?` at ${i.toLocaleString()}`:"";u.push(`capped${p}`)}l.length>0&&u.push(`${l.length} new column${l.length===1?"":"s"}`),o.droppedUserRows>0&&u.push(`${o.droppedUserRows} row${o.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${o.droppedUserRows===1?"it":"them"} could not be carried over`);const h=u.length?` — ${u.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${h}.`,{kind:o.error||o.hasMore||o.truncated||l.length>0||o.droppedUserRows>0?"warning":"success",title:"Refresh"}),l.length>0&&Nw(t.id,r,l)}async function jw(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const s=await wi(e),i=yi(s.maxImportRows),o=bt(n.origin.url),l=$=>e.backend.fetch($),u=r.loadedRows,h=r.totalCount??null,p=h&&h>0?Math.min(h,i):0;Nt(t,!0,p>0?Math.min(1,u/p):void 0);let g,y;try{const $=await Kr(l,o,{startUrl:r.nextUrl,maxRows:Math.max(0,i-u),pageSize:s.pageSize,onProgress:R=>{p>0&&Nt(t,!0,Math.min(1,(u+R)/p))}});g=$.rows.length;const C=Date.now();await e.store.rows(t).bulkInsert($.rows.map(R=>({id:_e(),tableId:t,data:R,updatedAt:C}))),y={error:$.error,nextUrl:$.nextUrl};const P=Xa($.error,$.nextUrl,u+g,h);await e.store.tables.patch(t,{importResume:P,updatedAt:C})}catch($){const C=$ instanceof qe?$.message:$?.message??String($);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${C}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{Nt(t,!1)}const w=u+g;y.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${g} rows (${w} total) — interrupted again (${y.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${g} rows (${w} total).`,{kind:"success",title:"Resume import"})}function Nw(e,t,n){const r=n.join(", "),s=n.length!==1,i=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${s?"s":""}: ${r}. Review, reorder or hide ${s?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:i}}))}const zw=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:vi,init:Iw,meta:Tw},Symbol.toStringTag,{value:"Module"}));var Uw=Object.defineProperty,Fw=Object.getOwnPropertyDescriptor,Vr=(e,t,n,r)=>{for(var s=r>1?void 0:r?Fw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Uw(t,n,s),s};const Bw="https://latest.datasette.io/ephemeral";let St=class extends ke{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),St.instance=this}disconnectedCallback(){super.disconnectedCallback(),St.instance===this&&(St.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return k`
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
                placeholder="e.g. ${Bw}"
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
    `}};St.instance=null;St.styles=[yt,Se`
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
    `];Vr([B()],St.prototype,"url",2);Vr([B()],St.prototype,"token",2);Vr([B()],St.prototype,"status",2);Vr([B()],St.prototype,"statusKind",2);St=Vr([Ie("datasette-connect-dialog")],St);class qw extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function nh(e){return`datasette:token:${e}`}function Hw(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function Kw(e,t,n){const r=e.source,s=r?.config??{},i={base:s.base,db:s.db,table:s.table,query:{}},o=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],l=r?.writable===!0,u=s.maxRows;let h=null;function p(){return u!=null?Promise.resolve(u):(h||(h=n?wi(n).then(S=>S.connectMaxRows):Promise.resolve(Ya)),h)}const g=s.pollIntervalMs??0,y=(S,q)=>t.backend.fetch(S,q);async function w(){const q=(await t.settings.findOne(nh(s.base)))?.value;return typeof q=="string"&&q.length>0?q:void 0}const $=async(S,q)=>Yn(y,await w())(S,q);function C(S){return{id:aw(S,o)??_e(),tableId:e.id,data:S,updatedAt:Date.now()}}function P(S){if(!l)throw new qw(S)}function R(S){const q={};for(const[ee,te]of Object.entries(S))o.includes(ee)||(q[ee]=te);return q}const L=new Set;let G=[],z=!1,re=null;function V(){return re||(re=(async()=>{try{const{rows:S}=await Kr($,i,{maxRows:await p()});G=S.map(C),z=!0;for(const q of L)q(G);return G}finally{re=null}})(),re)}return{async find(S){const q=z?G:await V();return!S||Object.keys(S).length===0?q:q.filter(ee=>Hw(ee,S))},async findOne(S){return(z?G:await V()).find(ee=>ee.id===S)??null},async insert(S){P("insert");const[q]=await Bc($,i,[S.data]),ee=C(q??S.data);return t.events.emit("row:created",{tableId:e.id,row:ee}),V(),ee},async bulkInsert(S){if(S.length===0)return[];P("insert");const q=await Bc($,i,S.map(te=>te.data)),ee=(q.length?q:S.map(te=>te.data)).map(C);return V(),ee},async upsert(S){P("upsert");const[q]=await ww($,i,[S.data]),ee=C(q??S.data);return V(),ee},async patch(S,q){P("update");const ee=q.data,te=R(ee??{}),ce=await bw($,i,S,te),W=C(ce??{...ee??{}});return t.events.emit("row:updated",{tableId:e.id,row:W,prev:W}),V(),W},async remove(S){P("delete"),await qc($,i,S),t.events.emit("row:deleted",{tableId:e.id,rowId:S}),V()},async bulkRemove(S){if(S.length!==0){P("delete");for(const q of S)await qc($,i,q);V()}},subscribe(S){L.add(S),z?S(G):V();let q=null;return g>0&&(q=setInterval(()=>void V(),g)),()=>{L.delete(S),q&&clearInterval(q)}},async refresh(){await V()}}}const Vw='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Ww={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function Gw(e){eh(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:Vw,order:10,description:"A live, editable table on any Datasette instance",connect:t=>Qw(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>Yw(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>Kw(t,n,e)})}async function Yw(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const s=await r.find();e.ui.dialogs.toast(`Reloaded ${s.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const s=r instanceof qe?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function Qw(e){const t=St.instance??Jw(),n=(s,i)=>e.backend.fetch(s,i),r=await t.open({initialUrl:"https://datasette.io",async onTest(s,i){const o=bt(s),l=await Wd(n,o.base,{token:i||void 0});if(o.db&&o.table){await Ko(Yn(n,i||void 0),o);const h=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${h} — table found, signed in, read-write.`:`Reachable${h} — table found, read-only (no token / not authenticated).`}if(!l.reachable)return`Unreachable: ${l.error??"no response"}`;const u=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(s,i){const o=bt(s);o.db&&o.table&&await Ko(Yn(n,i||void 0),o)}});if(r)try{await rh(e,r.url,r.token)}catch(s){const i=s instanceof qe?s.message:s?.message??String(s);await e.ui.dialogs.alert(i,"Connect Datasette failed")}}function Jw(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function rh(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=bt(t),i=(g,y)=>e.backend.fetch(g,y),o=Yn(i,n||void 0),l=await Wd(i,s.base,{token:n||void 0});n&&await e.store.settings.upsert({name:nh(s.base),value:n});let u;try{u=await Ja(o,s,"Connect")}catch(g){const y=g instanceof qe?g.message:g?.message??String(g);throw new Error(`Couldn't read tables from ${Xs(s.base)}: ${y}`,{cause:g})}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const h=[];for(const g of u){const y=await Xw(e,r,s.base,g,l.writable,n);y!==null&&h.push({tableId:y,c:g})}if(h.length===0)return;const p=l.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${h.length} live table${h.length===1?"":"s"} from Datasette (${p}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:g,c:y}of h)Zw(e,g,s.base,y,n)}async function Xw(e,t,n,r,s,i){const o=(await e.store.tables.find()).filter(y=>y.workspaceId===t);let l=`${r.db}/${r.table}`,u=o.find(y=>{const w=y.source?.config;return y.source?.type==="datasette"&&w?.base===n&&w?.db===r.db&&w?.table===r.table});if(!u){const y=o.find(w=>w.name.toLowerCase()===l.toLowerCase());if(y){const w=await e.ui.dialogs.choice(`A table named "${l}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!w||w==="Skip")return null;w==="Overwrite"?u=y:l=an(new Set(o.map($=>$.name)),l)}}let h=r.pks??[];if(h.length===0){const y=Yn((w,$)=>e.backend.fetch(w,$),i||void 0);try{h=await yw(y,{base:n,db:r.db,table:r.table,query:{}})}catch{h=[]}}const p=u?.id??_e(),g={...u??{},id:p,workspaceId:t,name:l,code:Oe(`${r.db}-${r.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:s,config:{base:n,db:r.db,table:r.table,pks:h}},updatedAt:Date.now()};return u?await e.store.tables.upsert(g):await e.store.tables.insert(g),p}async function Zw(e,t,n,r,s){const i={base:n,db:r.db,table:r.table,query:{}},o=Yn((l,u)=>e.backend.fetch(l,u),s||void 0);try{let l=[],u=!1;try{const C=await gi(o,i);l=C.columns,u=C.typed}catch{}const{rows:h}=await Kr(o,i,{maxRows:50,pageSize:50}),p=l.length===0?mi(h):u?l:Ga(l,h);if(p.length===0)return;const g=await e.store.tables.findOne(t);if(!g)return;const y=g.source?.config?.pks??[];let w=p.map(C=>y.includes(C.field)?{...C,unique:!0,notnull:!0}:C),$={};try{const C=await Va(o,i),P=Wa(C,w);w=P.columns,$=P.patch}catch{}$=Qa($,i.base,r.db,r.table),await e.store.tables.patch(t,{columns:w,...$,updatedAt:Date.now()})}catch{}}const ey=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:rh,init:Gw,meta:Ww},Symbol.toStringTag,{value:"Module"})),ty={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function ny(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:sh}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class xn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function ry(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const Vc=5e4;function sy(e){return e.ok===!0&&Array.isArray(e.rows)}function iy(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const s of["next_url","nextUrl","next"]){const i=n[s];if(typeof i!="string")continue;const o=i.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const l=new URL(o,t);if(l.origin!==r.origin)continue;return l.toString()}catch{continue}if(s==="next"&&sy(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function oy(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function sh(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",s=n.format==="json"?"json":"csv",i=new Set;let o=[],l=!1,u=null;function h($){return $.map((C,P)=>({id:`url:${P}`,tableId:e.id,data:C,updatedAt:0}))}async function p($){let C;try{C=await t.backend.fetch($)}catch(P){throw new Error(`Could not reach ${r}: ${P?.message??String(P)}`,{cause:P})}if(!C.ok)throw new Error(`Could not load ${r}: HTTP ${C.status} ${C.statusText}`);try{return await Zu(C)}catch(P){throw new Error(`Could not read response from ${r}: ${P?.message??String(P)}`,{cause:P})}}async function g($){const C=va($);let P=await p(C);if(Ju(P)){const R=Xu(C);R&&(P=await p(R))}try{if(s==="json"){const R=JSON.parse(P);return{records:oy(R),nextUrl:iy(R,C)}}return{records:Xn(P).rows,nextUrl:null}}catch(R){throw new Error(`Could not parse ${s.toUpperCase()} from ${r}: ${R?.message??String(R)}`,{cause:R})}}async function y(){if(!r)throw new Error("This reference table has no URL configured.");const $=[];let C=r;const P=new Set;for(;C&&$.length<Vc&&!P.has(C);){P.add(C);const R=await g(C);$.push(...R.records),C=R.records.length>0?R.nextUrl:null}return $.slice(0,Vc)}function w(){return u||(u=(async()=>{try{const $=await y();o=h($),l=!0;for(const C of i)C(o);return o}finally{u=null}})(),u)}return{async find($){const C=l?o:await w();return!$||Object.keys($).length===0?C:C.filter(P=>ry(P,$))},async findOne($){return(l?o:await w()).find(P=>P.id===$)??null},async insert(){throw new xn("insert")},async bulkInsert(){throw new xn("insert")},async upsert(){throw new xn("upsert")},async patch(){throw new xn("update")},async remove(){throw new xn("delete")},async bulkRemove(){throw new xn("delete")},subscribe($){return i.add($),l?$(o):w(),()=>{i.delete($)}},async refresh(){l=!1,o=[],await w()}}}const ay=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:xn,createUrlCollection:sh,init:ny,meta:ty},Symbol.toStringTag,{value:"Module"}));function He(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function Wc(e){return`'${e.replace(/'/g,"''")}'`}function Gc(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${He(n.from.alias)}.${He(n.from.field)}`,computed:!1}:null}function ly(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",s=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,i=[];for(const w of e.columns)w.from.kind==="source"?i.push(`  ${He(w.from.alias)}.${He(w.from.field)} AS ${He(w.field)}`):i.push(`  NULL AS ${He(w.field)} -- computed in-app by a script; no SQL equivalent`);i.length===0&&i.push("  *");const l=[`SELECT${s!=null&&r==="top"?` TOP ${s}`:""}`,i.join(`,
`)],u=t.tableNames[n.alias]??n.tableName;l.push(`FROM ${He(u)} AS ${He(n.alias)}`);for(const w of e.sources.slice(1)){const $=t.tableNames[w.alias]??w.tableName;if(!w.join){l.push(`CROSS JOIN ${He($)} AS ${He(w.alias)}`);continue}const C=w.join.type==="inner"?"INNER JOIN":"LEFT JOIN",P=w.join.on.map(R=>`${He(w.alias)}.${He(R.field)} = ${He(R.eqAlias)}.${He(R.eqField)}`).join(" AND ");l.push(`${C} ${He($)} AS ${He(w.alias)} ON ${P||"1 = 1"}`)}const h=[],p=[];for(const[w,$]of Object.entries(e.filters??{})){if(!$)continue;const C=Gc(e,w);if(C){if(C.computed){p.push(`-- filter on ${He(w)} (${Wc($)}) applies to a computed column; enforced in-app only`);continue}h.push(`LOWER(${C.expr}) LIKE ${Wc(`%${$.toLowerCase()}%`)}`)}}h.length>0&&l.push(`WHERE ${h.join(`
  AND `)}`);const g=(t.orderBy??[]).map(w=>{const $=Gc(e,w.field);return!$||$.computed?null:`${$.expr} ${w.asc?"ASC":"DESC"}`}).filter(w=>w!==null);g.length>0&&l.push(`ORDER BY ${g.join(", ")}`);const y=s==null?"":r==="limit"?`
LIMIT ${s}`:r==="fetch"?`
FETCH FIRST ${s} ROWS ONLY`:"";return`${l.join(`
`)}${y};
${p.length>0?`${p.join(`
`)}
`:""}`}const cy={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function uy(){}async function ih(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(l=>l.workspaceId===t),r=n.filter(l=>l.source?.type!=="projection"),s=n.filter(l=>l.source?.type==="projection"),i=dy(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${s.length>0?` (+ ${s.length} projection${s.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const l of r){const u=await e.store.rows(l.id).find();o.push(lh(l,u),"")}if(o.push("COMMIT;",""),s.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const l of s)o.push(`-- projection: ${l.name}`,Za(l,i)??"","")}return o.join(`
`)}function dy(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,Qn(n.code||n.name));return n=>t.get(n)??Qn(Oe(n))}function oh(e,t){const n=ah(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",lh(e,t),"","COMMIT;",""].join(`
`)}function ah(e,t){const n=Za(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function Za(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>Qn(Oe(o))),s={};for(const o of n.sources)s[o.alias]=r(o.tableName);const i=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return ly(n,{tableNames:s,limitStyle:"limit",...i?{orderBy:i}:{}})}function lh(e,t){const n=Qn(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(i=>`  ${hy(i)}`)],s=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(l=>l.field)].map(l=>`"${Qn(l)}"`).join(", ");for(const l of t){const u=[Yc(l.id),...e.columns.map(h=>Yc(l.data[h.field],h.type))];s.push(`INSERT INTO "${n}" (${o}) VALUES (${u.join(", ")});`)}}return s.join(`
`)}function hy(e){const t=[`"${Qn(e.field)}"`,fy(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function fy(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Yc(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=py(e);return n===null?"NULL":Is(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Is(e.toISOString()):Is(typeof e=="string"?e:JSON.stringify(e))}function py(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Qc(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?Qc(r):null}return null}function Qc(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function Is(e){return`'${e.replace(/'/g,"''")}'`}function Qn(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const my=Object.freeze(Object.defineProperty({__proto__:null,init:uy,meta:cy,projectionSelectBody:Za,projectionSelectFor:ah,serializeTableAsSql:oh,serializeWorkspaceAsSql:ih},Symbol.toStringTag,{value:"Module"})),ch=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function Jc(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(ch))t.add(r[2]);return[...t]}const el=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Bn=e=>el(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function gy(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function by(e,t,n,r,s){const i=r?.type??"string",o=el(r?.label||e),l=`class="eda-input" data-eda-row="${Bn(n)}" data-eda-field="${Bn(e)}" data-eda-type="${Bn(i)}"`,u=s?" disabled":"";let h;if(i==="boolean")h=`<input type="checkbox" ${l}${gy(t)?" checked":""}${u} />`;else{const p=i==="number"?"number":"text",g=t==null?"":Bn(String(t));h=`<input type="${p}" ${l} value="${g}"${u} />`}return`<label class="eda-input-field" title="${o}">${h}<span class="eda-input-label">${o}</span></label>`}function wy(e,t){if(t==null||t==="")return"";const n=String(t),r=Bn(e),s=Bn(n);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${r}" data-eda-filter-value="${s}" title="Filter by ${r}: ${s}">${el(n)}</button>`}function yy(e,t,n,r={}){return e.replace(ch,(s,i,o)=>{const l=n[o];if(!l)return"";const u=t.data[l];if(!i)return u==null?"":String(u);if(i.startsWith("filter"))return wy(l,u);const h=r.columns?.get(l),p=r.readonly===!0||!!h?.script?.trim();return by(l,u,t.id,h,p)})}function Xc(e){return e==null||e===""}function vy(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const s=Pa(r.script,e.data);n??={...e.data},n[r.field]=s.ok?s.value:`⚠ ${s.label}`}return n?{...e,data:n}:e}function Zc(e,t){return t.some(n=>n.script?.trim())?e.map(n=>vy(n,t)):e}function eu(e,t,n){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");if(r.length===0)return e;const s=new Map((n??[]).map(i=>[i.field,i.type]));return e.filter(i=>r.every(([o,l])=>Gs(i.data[o],l,{type:s.get(o)})))}function $i(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function $y(e,t){const n=Rn(e??"");return n.some(r=>$i(r,t))||n.push({term:t,negate:!1,exact:!0}),sn(n)}function xy(e,t){const n=Rn(e??"").filter(r=>!$i(r,t));return sn(n)}function uh(e,t){return e.exact===!0&&e.negate===!0&&e.term.toLowerCase()===t.toLowerCase()}function ky(e,t){const n=Rn(e??"");return n.some(r=>$i(r,t))?"on":n.some(r=>uh(r,t))?"not":"off"}function Cy(e,t){const n=ky(e,t),r=Rn(e??"").filter(s=>!$i(s,t)&&!uh(s,t));return sn(n==="off"?[...r,{term:t,negate:!1,exact:!0}]:n==="on"?[...r,{term:t,negate:!0,exact:!0}]:r)}function _y(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((s,i)=>{const o=s.data[t],l=i.data[t],u=Xc(o),h=Xc(l);if(u||h)return u===h?0:u?1:-1;const p=Number(o),g=Number(l);return!Number.isNaN(p)&&!Number.isNaN(g)?(p-g)*r:String(o).localeCompare(String(l),void 0,{numeric:!0,sensitivity:"base"})*r})}function Vo(e,t,n){const r=eu(e,t.filters??{},n),s=eu(r,t.pillFilters??{},n);return _y(s,t.sortColumn,t.sortAsc??!0)}function Sy(e){return!!e&&e.trim().length>0}function dh(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function Ey(e,t){return t==="raw"||t==="structure"?e:{...e,columns:dh(e,t)}}function hh(e,t,n){return n==="structure"?[]:n==="raw"?t:Vo(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc},e.columns)}function tl(e,t){const n=e.columns.map(s=>s.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(s=>{const i={};for(const o of n)i[o]=s.data[o];return i})}}const Ty={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Iy(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:s}=await et(async()=>{const{AnchoredMenu:l}=await Promise.resolve().then(()=>jr);return{AnchoredMenu:l}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(i,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const l=await xi(t);await t.backend.saveFile(`workspace-${r}.db.json`,l,"application/json")}else if(o==="sql"){const l=await ih(t);await t.backend.saveFile(`workspace-${r}.sql`,l,"application/sql")}}catch(l){t.ui.dialogs.toast(`Export failed: ${l.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await et(async()=>{const{AnchoredMenu:h}=await Promise.resolve().then(()=>jr);return{AnchoredMenu:h}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!i)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const l=await t.ui.dialogs.choice(`Export "${o.name}" as ${i.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!l)return;const u=l==="Visible Data"?"visible":l==="Raw Data"?"raw":"structure";try{const h=await t.store.rows(o.id).find(),p=Ey(o,u),g=hh(o,h,u),y=Oe(o.code||o.name||"table"),w=u!=="structure"&&o.source!=null&&h.length===0;if(i==="csv")w&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.csv`,Ea(p,g),"text/csv");else if(i==="json"){const $=JSON.stringify(tl(p,g),null,2);await t.backend.saveFile(`${y}.table.json`,$,"application/json")}else i==="sql"&&(w&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.sql`,oh(p,g),"application/sql"))}catch(h){t.ui.dialogs.toast(`Export failed: ${h.message}`,{kind:"error",title:"Export"})}}})}async function xi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),s=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:s};for(const o of n){const l=await e.store.rows(o.id).find();i.tables.push({name:o.name,columns:o.columns,rows:l.map(u=>u.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(i,null,2)}const Ay=Object.freeze(Object.defineProperty({__proto__:null,init:Iy,meta:Ty,serializeWorkspace:xi},Symbol.toStringTag,{value:"Module"})),Ry={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Oy="gist:",tu='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Dy(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:tu,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await et(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>jr);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(i)try{if(i==="push"||i==="pull"){const o=await r.open(s,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const l=o;i==="push"?await Uy(t,l):await gh(t,l)}else i==="share"?await jy(t):i==="view"&&await Ny(t)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:tu,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await et(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>jr);return{AnchoredMenu:o}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(i)try{i==="push"?await By(t,n.tableId):i==="pull"?await qy(t,n.tableId):i==="view"&&await Hy(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function Py(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Ly(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await ph(e,r),await gh(e))}async function fh(e){const t=e.workspaceId();return`${Oy}${t??"default"}`}async function Wr(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const i=(await e.store.settings.findOne(await fh(e)))?.value;if(i?.user&&i?.token){const o={user:i.user,gistId:i.gistId??"",token:i.token};return await ph(e,o),o}return null}async function ph(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await fh(e),value:t})}function Ly(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const s=n.slice(0,r).trim(),i=n.slice(r+1).trim();s&&(t[s]=i)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function nl(e){const t=await Wr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function My(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function jy(e){const t=await Wr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(My(t)))}`,{GistShareDialog:s}=await et(async()=>{const{GistShareDialog:i}=await import("./gist-share-dialog-BKk92_4d.js");return{GistShareDialog:i}},[]);await s.open(r)}async function Ny(e){const t=await Wr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}function zy(e){return e.endsWith(".table.json")&&!e.startsWith("_easydb")}function mh(e,t){const n=new Set(t);return[...e].filter(r=>zy(r)&&!n.has(r)).sort()}async function Uy(e,t="all"){const n=await nl(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=t!=="settings",i=t!=="data",o=(await e.store.tables.find()).filter(L=>L.workspaceId===r);if(s&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const l=1e8,u=1e7,h={},p=[],g=[];if(s)for(const L of o){const G=L.source!=null?[]:await e.store.rows(L.id).find(),z=JSON.stringify(tl(L,G),null,2),re=`${L.name} (${(z.length/1e6).toFixed(2)} MB)`;z.length>l?p.push(re):z.length>u&&g.push(re),h[`${Oe(L.name)}.table.json`]={content:z}}if(p.length>0||g.length>0){const L=[];if(p.length>0&&L.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${p.join(`
`)}`),g.length>0&&L.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${g.join(`
`)}`),!await e.ui.dialogs.confirm(`${L.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(i){const L=(await e.store.viewTemplates.find()).filter(S=>S.workspaceId===r),G=(await e.store.viewInstances.find()).filter(S=>S.workspaceId===r),z=(await e.store.settings.find()).map(S=>({name:S.name,value:S.value})),{kept:re,withheld:V}=im(z);V.length>0&&e.ui.dialogs.toast(`Not pushed: ${V.join(", ")} — a secret is stored as its own value. Move it into the secrets store (Settings → General) and reference it with \${secret:name}.`,{kind:"warning",title:"Gist sync"}),h["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:L,viewInstances:G,settings:re},null,2)}}const y={...h};let w=[];if(s&&n.gistId){w=await Fy(e,n,Object.keys(h));for(const L of w)y[L]=null}let $;if(n.gistId){const L=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:y,description:`easyDBAccess workspace: ${r}`})});if(!L.ok)throw new Error(await Nr(L));$=await L.json()}else{const L=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:h})});if(!L.ok)throw new Error(await Nr(L));$=await L.json(),n.gistId=$.id,await e.settings.set("gist-sync","gist_id",$.id)}const C=$.html_url??`https://gist.github.com/${n.user}/${$.id}`,P=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`,R=w.length>0?`  Removed ${w.length} file${w.length===1?"":"s"}.`:"";e.ui.dialogs.toast(`Pushed ${P}.${R}  ${C}`,{kind:"success",title:"Gist sync"})}async function gh(e,t="all"){const n=t!=="settings",r=t!=="data",s=await nl(e);if(!s||!s.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const i=e.workspaceId();if(!i)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${s.gistId}`,{headers:{Authorization:`Bearer ${s.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Nr(o));const l=await o.json(),u=Object.entries(l.files).filter(([L])=>L.endsWith(".table.json")&&!L.startsWith("_easydb"));if(n&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const h=(await e.store.tables.find()).filter(L=>L.workspaceId===i),p=new Map(h.map(L=>[L.name.toLowerCase(),L]));let g=0;const y=[],w=new Map;if(n){const{TopProgress:L}=await et(async()=>{const{TopProgress:z}=await import("./top-progress-BESsIzYy.js");return{TopProgress:z}},[]),G=L.begin("Pulling from gist…");try{for(const[z,[re,V]]of u.entries())try{const S=await Zs(V),q=JSON.parse(S);if(!q.name||!Array.isArray(q.columns))throw new Error("unexpected file shape (missing name/columns)");let ee;const te=p.get(q.name.toLowerCase());if(te){if(ee=await e.store.tables.patch(te.id,{title:q.title,columns:q.columns,...Go(q),updatedAt:Date.now()}),ee.source==null){const ce=e.store.rows(te.id),W=await ce.find();await ce.bulkRemove(W.map(de=>de.id))}}else ee=await e.store.tables.insert({id:_e(),workspaceId:i,name:q.name,title:q.title,code:Oe(q.name),columns:q.columns,view:q.view??"table",...Go(q),updatedAt:Date.now()});if(ee.source==null){const ce=(q.rows??[]).map(W=>({id:_e(),tableId:ee.id,data:W,updatedAt:Date.now()}));await e.store.rows(ee.id).bulkInsert(ce)}w.set(q.name,ee.id),g++}catch(S){y.push({file:re,error:S.message})}finally{G.fraction((z+1)/u.length)}}finally{G.done()}}let $=0,C="",P=null;const R=r?l.files["_easydb.workspace.json"]:void 0;if(R)try{const L=await Zs(R),G=JSON.parse(L),z=G.viewTemplates??[],re=G.viewInstances??[],V=G.settings??[];P=new Set(re.map(q=>q.id));const S=await cd(e.store.viewTemplates,i,z);for(const q of re){let ee;if(q.tableName&&(ee=w.get(q.tableName)??p.get(q.tableName)?.id),ee??=q.tableId,!ee)continue;const te=S.get(q.templateId)??q.templateId;await e.store.viewInstances.upsert({...q,workspaceId:i,tableId:ee,templateId:te}),$++}for(const q of V)await e.store.settings.upsert(q)}catch(L){C=`Workspace metadata import failed: ${L.message}`}if(y.length>0){const L=y.map(G=>`• ${G.file}: ${G.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${g} of ${u.length} tables. ${y.length} failed:
${L}${C?`
${C}`:""}`,{kind:"warning",title:"Gist sync"})}else{const L=$>0?` (+${$} views)`:"",G=t==="settings"?`Pulled settings${L}.`:`Pulled ${g} table${g===1?"":"s"}.${L}`;e.ui.dialogs.toast(G,{kind:"success",title:"Gist sync"}),C&&e.ui.dialogs.toast(C,{kind:"warning",title:"Gist sync"})}y.length===0&&await bh(e,i,{tableNames:n?new Set([...w.keys()].map(L=>L.toLowerCase())):null,viewInstanceIds:P}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Fy(e,t,n){let r;try{const o=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)return[];const l=await o.json();r=Object.keys(l.files??{})}catch{return[]}const s=mh(r,n);return s.length===0?[]:await e.ui.dialogs.confirm(`The gist has these table files that this workspace no longer has:

${Wo(s)}

Delete them from the gist, so it matches this workspace? Keep them if another device pushed them and you have not pulled yet.`,"Delete table files missing from this workspace?")?s:[]}function Wo(e,t=8){const n=e.slice(0,t).map(s=>`• ${s}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function bh(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(u=>u.workspaceId===t&&!n.tableNames.has(u.name.toLowerCase())):[],s=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(u=>u.workspaceId===t&&!n.viewInstanceIds.has(u.id)):[];if(r.length===0&&s.length===0)return;const i=[];if(r.length>0&&i.push(`${r.length} table${r.length===1?"":"s"}:
`+Wo(r.map(u=>u.name))),s.length>0&&i.push(`${s.length} view${s.length===1?"":"s"}:
`+Wo(s.map(u=>u.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${i.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const u of s)await e.store.viewInstances.remove(u.id);const{deleteTable:l}=await et(async()=>{const{deleteTable:u}=await Promise.resolve().then(()=>Gh);return{deleteTable:u}},void 0);for(const u of r)await l(u.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${s.length} view${s.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function By(e,t){const n=await nl(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=r.source!=null?[]:await e.store.rows(t).find(),i=JSON.stringify(tl(r,s),null,2),o={[`${Oe(r.name)}.table.json`]:{content:i}},l=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!l.ok)throw new Error(await Nr(l));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function qy(e,t){const n=await Wr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`${Oe(r.name)}.table.json`,i=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await Nr(i));const l=(await i.json()).files[s];if(!l){await e.ui.dialogs.alert(`No file "${s}" in the gist for this table.`,"Gist sync");return}const u=await Zs(l),h=JSON.parse(u);if(!h.name||!Array.isArray(h.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:h.title,columns:h.columns,...Go(h),updatedAt:Date.now()})).source==null){const g=e.store.rows(t),y=await g.find();await g.bulkRemove(y.map($=>$.id));const w=(h.rows??[]).map($=>({id:_e(),tableId:t,data:$,updatedAt:Date.now()}));await g.bulkInsert(w)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Hy(e,t){const n=await Wr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`file-${Oe(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${s}`,"_blank","noopener")}function Go(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Zs(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function Nr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Ky=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Zs,init:Dy,load:Py,meta:Ry,offerPrune:bh,staleTableFiles:mh},Symbol.toStringTag,{value:"Module"})),wh="server-sync:url";function yh(e){return`server-sync:etag:${e}`}async function vh(e){const n=(await e.store.settings.findOne(wh))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function Vy(e,t){await e.store.settings.upsert({name:wh,value:t.replace(/\/+$/,"")})}async function $h(e,t){const r=(await e.store.settings.findOne(yh(t)))?.value;return typeof r=="string"?r:null}async function In(e,t,n){await e.store.settings.upsert({name:yh(t),value:n})}function ki(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function nu(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function xh(e,t,n){const r=di(n,t),s=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of s){const l=e.store.rows(o.id),u=await l.find();await l.bulkRemove(u.map(h=>h.id)),await e.store.tables.remove(o.id)}let i=0;for(const o of r){const l=_e(),u=await e.store.tables.insert({id:l,workspaceId:t,name:o.name,code:Oe(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),h=o.rows.map(p=>({id:_e(),tableId:u.id,data:p,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(h),i++}return i}const Wy={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Gy(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await et(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>jr);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(i)try{i==="push"?await Yy(t):i==="pull"&&await Qy(t)}catch(o){t.ui.dialogs.toast(`${i==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function Yy(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await kh(e);if(!n)return;const r=await xi(e),s=await $h(e,t),i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:i,body:r});if(o.status===412){const u=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await In(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await Ch(o));const l=ki(o.headers.get("ETag"));l&&await In(e,t,l),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function Qy(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await kh(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const s=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(s.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!s.ok)throw new Error(await Ch(s));const i=ki(s.headers.get("ETag")),o=await s.json(),l=await xh(e,t,o);i&&await In(e,t,i),e.ui.dialogs.toast(`Pulled ${l} table${l===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function kh(e){const t=await vh(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await Vy(e,n),n.replace(/\/+$/,"")}async function Ch(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Jy=Object.freeze(Object.defineProperty({__proto__:null,init:Gy,meta:Wy},Symbol.toStringTag,{value:"Module"})),Xy={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Zy(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const ev=Object.freeze(Object.defineProperty({__proto__:null,init:Zy,meta:Xy},Symbol.toStringTag,{value:"Module"}));function Ci(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function _i(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function Si(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const tv={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function nv(e){customElements.get("cell-date")||customElements.define("cell-date",rv),e.ui.registerCellRenderer("date","cell-date")}class rv extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Si({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(sv(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",qa(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:_i(n,this.pencil()));return}if(this._readonly){this.textContent=Yo(this._value);return}const t=document.createElement("input");t.type="date",t.value=Yo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Ci(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Yo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function sv(e){return e==null||typeof e=="string"&&e.trim()===""?!1:Yo(e)===""}const iv=Object.freeze(Object.defineProperty({__proto__:null,init:nv,meta:tv},Symbol.toStringTag,{value:"Module"})),ov={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function av(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",lv),e.ui.registerCellRenderer("datetime","cell-datetime")}class lv extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Si({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(cv(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",qa(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:_i(n,this.pencil()));return}if(this._readonly){this.textContent=Qo(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=Qo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Ci(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Qo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const s=r.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}function cv(e){return e==null||typeof e=="string"&&e.trim()===""?!1:Qo(e)===""}const uv=Object.freeze(Object.defineProperty({__proto__:null,init:av,meta:ov},Symbol.toStringTag,{value:"Module"})),dv={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function hv(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",fv),e.ui.registerCellRenderer("boolean","cell-boolean")}class fv extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const s=Si({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(s),this._editor=s;return}const t=Bd(this._value);if(t==="invalid"){const s=document.createElement("span");s.textContent=String(this._value),s.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",qa(s,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?s:_i(s,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return Ci(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const pv=Object.freeze(Object.defineProperty({__proto__:null,init:hv,meta:dv},Symbol.toStringTag,{value:"Module"})),mv={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function gv(e){customElements.get("cell-color")||customElements.define("cell-color",bv),e.ui.registerCellRenderer("color","cell-color")}class bv extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const wv=Object.freeze(Object.defineProperty({__proto__:null,init:gv,meta:mv},Symbol.toStringTag,{value:"Module"})),yv=[{bytes:[137,80,78,71,13,10,26,10],type:"image/png"},{bytes:[71,73,70,56],type:"image/gif"},{bytes:[255,216,255],type:"image/jpeg"},{bytes:[66,77],type:"image/bmp"}],Jo=16;function vv(e){const t=(n,r)=>r.split("").every((s,i)=>e[n+i]===s.charCodeAt(0));return e.length>=12&&t(0,"RIFF")&&t(8,"WEBP")}function js(e){for(const{bytes:t,type:n}of yv)if(t.every((r,s)=>e[s]===r))return n;return vv(e)?"image/webp":null}function _h(e){if(e==null)return null;const t=xv(e);if(t){const i=Array.prototype.slice.call(t,0,Jo),o=js(i);return o?`data:${o};base64,${Th(t)}`:null}if(typeof e!="string")return null;const n=e.trim();if(n==="")return null;if(n.startsWith("data:"))return Cv(n);if(/^(https?:)?\/\//i.test(n)||n.startsWith("/")&&/\.(png|jpe?g|gif|webp|bmp|svg)(\?|#|$)/i.test(n))return n;const r=kv(n);if(r){const i=Eh(r.slice(0,Jo*2)),o=js(i);return o?`data:${o};base64,${_v(r)}`:null}const s=Sh(n);if(s){const i=js(s);return i?`data:${i};base64,${n}`:null}return null}function $v(e){return _h(e)!==null}function xv(e){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.length>0&&e.every(t=>typeof t=="number")?e:null;if(typeof e=="object"&&e!==null){const t=e;if(typeof t[0]!="number")return null;const n=[];for(let r=0;typeof t[String(r)]=="number";r++)n.push(t[String(r)]);return n}return null}function kv(e){const t=/^[xX]\s*(['"])([0-9a-fA-F]*)\1$/.exec(e);return t?.[2]?t[2]:e.length>=8&&e.length%2===0&&/^[0-9a-fA-F]+$/.test(e)?e:null}function Sh(e){if(e.length<8||!/^[A-Za-z0-9+/]+={0,2}$/.test(e))return null;try{const t=e.slice(0,Math.ceil(Jo*4/3));return[...atob(t.slice(0,t.length-t.length%4))].map(r=>r.charCodeAt(0))}catch{return null}}function Cv(e){const t=/^data:([^;,]*)(;base64)?,([\s\S]*)$/.exec(e);if(!t)return null;if((t[1]??"").toLowerCase().startsWith("image/"))return e;const r=t[3]??"";if(!t[2])return null;const s=Sh(r),i=s&&js(s);return i?`data:${i};base64,${r}`:null}function Eh(e){const t=[];for(let n=0;n+1<e.length;n+=2)t.push(parseInt(e.slice(n,n+2),16));return t}function Th(e){let n="";for(let r=0;r<e.length;r+=32768){const s=Array.prototype.slice.call(e,r,r+32768);n+=String.fromCharCode(...s)}return btoa(n)}function _v(e){return Th(Eh(e))}const Sv={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function Ev(e){customElements.get("cell-image")||customElements.define("cell-image",Tv),e.ui.registerCellRenderer("image","cell-image")}class Tv extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const s=Si({value:typeof this._value=="string"?this._value:"",onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("mousedown",o=>o.preventDefault()),i.addEventListener("click",()=>this.pickFile()),r.append(s,i),this.append(r),this._editor=s;return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0";const n=_h(this._value);if(n){const r=document.createElement("img");r.src=n,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("click",()=>this.pickFile()),t.append(s)}}this.append(this._readonly?t:_i(t,this.pencil()))}pencil(){return Ci(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Iv=Object.freeze(Object.defineProperty({__proto__:null,init:Ev,meta:Sv},Symbol.toStringTag,{value:"Module"})),Ih=200,Ah=100;function Av(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Ih||e.h<Ah?null:{...e}}function ei(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const ru=640;function Ei(){return typeof window>"u"?!1:typeof window.matchMedia=="function"?window.matchMedia(`(max-width: ${ru}px)`).matches:window.innerWidth<=ru}const Rv=["n","s","e","w","ne","nw","se","sw"];function Ov(e,t,n,r){const s=r>0?r:1;return{...e,x:e.x+t/s,y:e.y+n/s}}function Dv(e,t,n,r,s,i,o){const l=s>0?s:1,u=n/l,h=r/l;let{x:p,y:g,w:y,h:w}=e;return t.includes("e")&&(y=Math.max(i,e.w+u)),t.includes("s")&&(w=Math.max(o,e.h+h)),t.includes("w")&&(y=Math.max(i,e.w-u),p=e.x+(e.w-y)),t.includes("n")&&(w=Math.max(o,e.h-h),g=e.y+(e.h-w)),{x:p,y:g,w:y,h:w}}function Pv(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:e?.smallified?{status:"smallified",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function su(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function Lv(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized",smallified:e.status==="smallified"}}const Mv="#01579b",jv="input, textarea, select, button, a, .jsPanel-controlbar";function iu(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(jv))return!0;return!1}const Nv={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let To=100;function ou(){let e=To;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return To=e+1,To}function zv(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(!(n===e||n.style.display==="none")&&Number(n.style.zIndex)>t)return!1;return!0}const Xo=new Set,zr=new Set;function Uv(){let e=null;for(const t of zr)t.style.display!=="none"&&(!e||Number(t.style.zIndex)>Number(e.style.zIndex))&&(e=t);return e}const Rh=e=>{if(e.key!=="Escape"||e.defaultPrevented)return;const t=Uv();t&&(e.preventDefault(),t.close())};function Fv(e){zr.size===0&&document.addEventListener("keydown",Rh),zr.add(e)}function Bv(e){zr.delete(e)&&zr.size===0&&document.removeEventListener("keydown",Rh)}function qv(){return[...Xo].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function $n(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=Nv[e]??"",r.addEventListener("click",s=>{s.stopPropagation(),n()}),r}function Ti(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id;let n=e.color??Mv;t.style.setProperty("--eda-panel-color",n);const r=document.createElement("div");r.className="jsPanel-hdr";const s=document.createElement("div");s.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const o=document.createElement("div");o.className="jsPanel-titlebar",o.tabIndex=-1,o.style.outline="none",o.addEventListener("pointerdown",()=>o.focus());const l=document.createElement("span");l.className="jsPanel-title",l.textContent=e.title,o.append(l);const u=document.createElement("div");u.className="jsPanel-controlbar",u.append($n("smallify","Collapse",()=>W("smallify")),$n("minimize","Minimize",()=>W("minimize")),$n("maximize","Maximize",()=>t.maximize()),$n("normalize","Restore",()=>W("normalize")),$n("close","Close",()=>t.close())),s.append(i,o,u),r.append(s);const h=document.createElement("div");h.className="jsPanel-content",h.append(e.content);const p=document.createElement("div");p.className="jsPanel-ftr",e.footerToolbar&&(p.classList.add("active"),p.append(e.footerToolbar)),t.append(r,h,p);const g=[];for(const K of Rv){const ae=document.createElement("div");ae.className="eda-resize",ae.dataset.edge=K,t.append(ae),g.push({zone:ae,edge:K})}if(t.style.zIndex=String(ou()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const K=e.contentSize??{w:720,h:360};t.style.width=`${K.w}px`,t.style.height=`${K.h+r.offsetHeight+p.offsetHeight}px`}const y=e.position??"center",w=t.offsetWidth,$=e.container.clientWidth;y==="center"?(t.style.left=`${Math.max(0,($-w)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in y?(t.style.left=`${Math.max(0,($-w)/2)}px`,t.style.top=`${y.centerTopOffset}px`):(t.style.left=`${y.x}px`,t.style.top=`${y.y}px`);let C=Pv(e.boot),P=z(),R=null,L=null,G=null;function z(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function re(K){t.style.left=`${K.x}px`,t.style.top=`${K.y}px`,t.style.width=`${K.w}px`,t.style.height=`${K.h}px`}function V(){const K=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-K.x/K.scale}px, ${-K.y/K.scale}px) scale(${1/K.scale})`}function S(){const K=e.viewport?.getState()??{x:0,y:0,scale:1},ae=K.scale||1;return{x:-K.x/ae,y:-K.y/ae,w:e.container.clientWidth/ae,h:e.container.clientHeight/ae}}function q(){V(),L??=e.viewport?.subscribe(V)??null,!G&&typeof ResizeObserver<"u"&&(G=new ResizeObserver(V),G.observe(e.container))}function ee(){L?.(),L=null,G?.disconnect(),G=null,t.style.transform="",t.style.transformOrigin=""}function te(){const K=document.createElement("div");K.className="jsPanel-replacement",K.id=`${e.id}-min`,K.style.setProperty("--eda-panel-color",n);const ae=document.createElement("div");ae.className="jsPanel-headerlogo",ae.innerHTML=i.innerHTML;const $e=document.createElement("span");return $e.className="jsPanel-title",$e.textContent=l.textContent,K.append(ae,$e,$n("normalize","Restore",()=>{W("normalize"),t.front()}),$n("close","Close",()=>t.close())),K.addEventListener("click",Ge=>{Ge.target.closest("button")||(W("normalize"),t.front())}),K}function ce(K){switch(K==="maximized"&&C.status!=="maximized"&&ee(),K==="minimized"&&C.status!=="minimized"&&(R?.remove(),R=null,t.style.display=""),C.status){case"minimized":{K==="normalized"?P=z():K==="smallified"&&(P={...P,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const ae=e.minimizeTo?document.querySelector(e.minimizeTo):null;R=te(),(ae??e.container).append(R);break}case"maximized":K==="normalized"?P=z():K==="smallified"&&(P={...P,x:t.offsetLeft,y:t.offsetTop}),q();break;case"smallified":P=z(),t.style.height=`${r.offsetHeight}px`;break;case"normalized":K==="smallified"?P={...P,x:t.offsetLeft,y:t.offsetTop}:K==="maximized"&&Ei()&&(P=S()),re(P);break}t.dataset.status=C.status}function W(K){const ae=C;C=su(C,K),C.status!==ae.status&&(ce(ae.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>C.status}),t.minimize=()=>W("minimize"),t.maximize=(K,ae)=>{W("maximize"),ae!==!0&&t.front()},t.normalize=()=>W("normalize"),t.smallify=()=>W("smallify"),t.front=(K,ae)=>{t.style.zIndex=String(ou()),ae!==!1&&e.onfronted?.()},t.close=()=>{C.status!=="closed"&&(C=su(C,"close"),R?.remove(),ee(),Xo.delete(t),Bv(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=K=>{l.textContent=K;const ae=R?.querySelector(".jsPanel-title");ae&&(ae.textContent=K)},t.setHeaderLogo=K=>{i.innerHTML=K;const ae=R?.querySelector(".jsPanel-headerlogo");ae&&(ae.innerHTML=K)},t.setHeaderColor=K=>{n=K,t.style.setProperty("--eda-panel-color",n),R?.style.setProperty("--eda-panel-color",n)},t.centerInViewport=()=>{if(C.status!=="normalized"&&C.status!=="smallified")return;const K=S(),ae=t.offsetWidth,$e=t.offsetHeight;re({x:K.x+Math.max(0,(K.w-ae)/2),y:K.y+Math.max(0,(K.h-$e)/2),w:ae,h:$e})},t.persistFlags=()=>Lv(C),t.persistRect=()=>C.status==="smallified"?{...P,x:t.offsetLeft,y:t.offsetTop}:C.status==="minimized"||C.status==="maximized"?{...P}:z(),Xo.add(t),e.closeOnEscape&&Fv(t),t.addEventListener("pointerdown",()=>{zv(t)||t.front()},!0);const de=K=>{K.addEventListener("pointerdown",ae=>{if(ae.button!==0||iu(ae)||C.status==="maximized"||C.status==="minimized")return;const $e=z(),Ge=e.viewport?.getState().scale??1,Me=ae.pointerId,me=ae.clientX,je=ae.clientY;let kt=!1;const ye=rt=>{if(rt.pointerId!==Me)return;kt=!0;const Xe=Ov($e,rt.clientX-me,rt.clientY-je,Ge);t.style.left=`${Xe.x}px`,t.style.top=`${Xe.y}px`},Ae=rt=>{rt.pointerId===Me&&(K.removeEventListener("pointermove",ye),K.removeEventListener("pointerup",Ae),K.removeEventListener("pointercancel",Ae),kt&&e.onmoved?.())};K.setPointerCapture(ae.pointerId),K.addEventListener("pointermove",ye),K.addEventListener("pointerup",Ae),K.addEventListener("pointercancel",Ae)})};de(o),de(i),de(p);for(const{zone:K,edge:ae}of g)K.addEventListener("pointerdown",$e=>{if($e.button!==0||C.status!=="normalized")return;const Ge=z(),Me=e.viewport?.getState().scale??1,me=$e.pointerId,je=$e.clientX,kt=$e.clientY;let ye=!1;const Ae=Xe=>{Xe.pointerId===me&&(ye=!0,re(Dv(Ge,ae,Xe.clientX-je,Xe.clientY-kt,Me,Ih,Ah)))},rt=Xe=>{Xe.pointerId===me&&(K.removeEventListener("pointermove",Ae),K.removeEventListener("pointerup",rt),K.removeEventListener("pointercancel",rt),ye&&e.onresized?.())};K.setPointerCapture($e.pointerId),K.addEventListener("pointermove",Ae),K.addEventListener("pointerup",rt),K.addEventListener("pointercancel",rt)});return r.addEventListener("dblclick",K=>{iu(K)||(C.status==="maximized"?W("normalize"):t.maximize())}),C.status!=="normalized"?ce("normalized"):t.dataset.status="normalized",t}let Oh=null;function Hv(e){Oh=e}function ti(){return Oh}function Ii(){return{getState:()=>ti()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>ti()?.subscribe(e)??(()=>{})}}function Dh(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let Kv=0;function Ph(e,t){const n=document.createElement("button");return n.type="button",n.title=t,n.setAttribute("aria-label",t),n.innerHTML=e,n.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",n.addEventListener("mouseenter",()=>n.style.color="#4b5563"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n}const Vv='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',Wv='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>';function Zo(e,t,n,r){const s=r?.readonly===!0,i=document.createElement("div");i.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const o=document.createElement("textarea");o.value=t,o.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const l=document.createElement("div");l.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const u=document.createElement("button");u.type="button",u.textContent=s?"Close":"Cancel",u.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const h=document.createElement("button");h.type="button",h.textContent="Save",h.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",s?(o.readOnly=!0,o.style.background="#f9fafb",l.append(u)):l.append(u,h),i.append(o,l);const p=Ti({id:`easydb-html-edit-${++Kv}`,container:Dh(),title:e,color:"#7c3aed",content:i,contentSize:{w:520,h:400},position:"center",closeOnEscape:!0,boot:{maximized:Ei()},minimizeTo:"#easydb-minimized-dock",viewport:Ii()});u.addEventListener("click",()=>p.close()),h.addEventListener("click",()=>{n(o.value),p.close()}),o.addEventListener("keydown",g=>{s||g.key==="Enter"&&(g.ctrlKey||g.metaKey)&&(g.preventDefault(),h.click())}),setTimeout(()=>o.focus(),0)}const rl=2e3;let ea=rl;function Gv(e){ea=typeof e=="number"&&Number.isFinite(e)&&e>0?Math.floor(e):rl}let Yv=0;class Lh extends HTMLElement{constructor(){super(...arguments),this.language="Preview",this._value="",this._readonly=!1}toHtml(t){return t||null}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}get title_(){return this._label??this.language}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText=this._readonly?"color:#9ca3af":"color:#9ca3af;cursor:text",o.textContent="empty",this._readonly||(o.title="Click to edit",o.addEventListener("click",()=>this.openEditor())),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=Cg(this.toHtml(this._value)??this._value);n.textContent=r.length>ea?r.slice(0,ea)+"…":r,n.title=this._readonly?"Click to view the source":"Click to edit",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const s=document.createElement("span");s.style.cssText="flex:1 1 auto";const i=Ph(Wv,"Open in a window");i.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,s,i),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box";const n=this.toHtml(this._value);if(n!==null)t.innerHTML=n;else{const r=document.createElement("pre");r.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",r.textContent=this._value,t.append(r)}Ti({id:`easydb-preview-popup-${++Yv}`,container:Dh(),title:this.title_,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},boot:{maximized:Ei()},closeOnEscape:!0,minimizeTo:"#easydb-minimized-dock",viewport:Ii()})}openEditor(){const t=this._source!==void 0,n=t?this._source:this._value;if(this._readonly){Zo(`View ${this.title_}`,n,()=>{},{readonly:!0});return}Zo(`Edit ${this.title_}`,n,r=>{t?this._source=r:(this._value=r,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:r},bubbles:!0,composed:!0}))})}}const Qv={id:"preview",name:"Preview",type:"cell-renderer",version:"0.4.0",description:`Shows a long value as a plain-text preview (first N characters); click to edit the source in a dialog, or use the popup icon to open the full value in a window. HTML is shown there as markup, and Markdown is recognised and converted first — so a Markdown column reads as formatted text without a script. Apply by setting a column's renderer to "preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/preview.ts"};async function au(e){Gv(await e.settings.get("preview","maxChars"))}function Jv(e){customElements.get("preview-cell")||customElements.define("preview-cell",Xv),e.ui.registerCellRenderer("preview","preview-cell"),e.ui.registerCellRenderer("html-preview","preview-cell"),e.ui.registerSettings("preview","Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:rl,scope:"workspace",description:"A safety cap on how much text goes into a preview cell. What you SEE follows the column width — the cell ellipsizes like any other, so widen the column to read more. Lower this only to cut long values short regardless of width. Applies to cells rendered after the change (reload to refresh all). Shared with the `markdown` renderer."}]),au(e),e.events.on("app:ready",()=>void au(e))}class Xv extends Lh{toHtml(t){const n=Rg(t);return n==="html"?t:n==="markdown"?hi(t):null}}const Zv=Object.freeze(Object.defineProperty({__proto__:null,init:Jv,meta:Qv},Symbol.toStringTag,{value:"Module"})),e0={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup); a pencil on the right edits the source. Apply by setting a column's renderer to "html". For a truncated preview use "preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function t0(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",n0),e.ui.registerCellRenderer("html","html-render-cell")}class n0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML",this._readonly=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label??"HTML"}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:flex;align-items:flex-start;gap:0.25rem;width:100%";const n=document.createElement("span");if(n.style.cssText="flex:1 1 auto;min-width:0",this._value?n.innerHTML=this._value:(n.style.color="#9ca3af",n.textContent="empty"),t.append(n),!this._readonly){const r=Ph(Vv,"Edit the HTML");r.addEventListener("click",s=>{s.stopPropagation(),this.openEditor()}),t.append(r)}this.append(t)}openEditor(){const t=this._source!==void 0;Zo(`Edit ${this._label}`,t?this._source:this._value,n=>{t?this._source=n:(this._value=n,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))})}}const r0=Object.freeze(Object.defineProperty({__proto__:null,init:t0,meta:e0},Symbol.toStringTag,{value:"Module"})),s0={id:"cell-markdown",name:"Markdown",type:"cell-renderer",version:"0.2.0",description:`For a column written in Markdown: the cell shows one line of plain text with the markers flattened, and the popup icon opens the formatted value in a window. Click the text to edit the Markdown source. Apply by setting a column's renderer to "markdown". Unlike "preview" it never guesses — the value is always read as Markdown.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 15V9l3 3 3-3v6"/><path d="M16 9v6"/><path d="M14 13l2 2 2-2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-markdown.ts"};function i0(e){customElements.get("markdown-cell")||customElements.define("markdown-cell",o0),e.ui.registerCellRenderer("markdown","markdown-cell")}class o0 extends Lh{constructor(){super(...arguments),this.language="Markdown"}toHtml(t){return t?hi(t):null}}const a0=Object.freeze(Object.defineProperty({__proto__:null,init:i0,meta:s0},Symbol.toStringTag,{value:"Module"})),l0={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function c0(e){customElements.get("cell-link")||customElements.define("cell-link",u0),e.ui.registerCellRenderer("link","cell-link")}class u0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:d0(t),r=!this._editing&&!n?h0(t):null,s=!this._editing&&!n&&!r?f0(t):null;if(n||r||s){const i=document.createElement("span");i.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const l=document.createElement("button");l.type="button",l.title="Edit",l.textContent="✎",l.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",l.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),i.append(o,l),this.append(i)}else{const i=document.createElement("input");i.type="text",i.value=this.rawValue,i.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",i.addEventListener("change",()=>{this._editor===i&&this.commit(i.value)}),i.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(i.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),i.addEventListener("blur",()=>{this._editor===i&&this.commit(i.value)}),this.append(i),this._editor=i,this._editing&&setTimeout(()=>{i.focus(),i.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function d0(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function h0(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function f0(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),s=t.startsWith("+");return!r&&!s&&n.length<10?null:t}const p0=Object.freeze(Object.defineProperty({__proto__:null,init:c0,meta:l0},Symbol.toStringTag,{value:"Module"})),m0={id:"cell-tags",name:"Cell Tags",type:"cell-renderer",version:"0.1.0",description:'Renderer for `array` columns: each value in the cell shows as its own pill. A comma list ("foo,bar"), a JSON array ("[\\"Foo\\",\\"Bar\\"]") and a real array all read the same. A pencil edits the raw list; an empty list shows nothing.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-tags.ts"};function g0(e){customElements.get("cell-tags")||customElements.define("cell-tags",w0),e.ui.registerCellRenderer("tags","cell-tags")}const b0="flex:0 1 auto;min-width:0;display:inline-block;max-width:100%;padding:0 0.4rem;border:1px solid #d1d5db;border-radius:999px;background:#f3f4f6;color:#374151;font-size:0.85em;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";class w0 extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._readonly=!1,this._editor=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this._readonly&&(this._editing=!1),this.render())}get readonly(){return this._readonly}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing&&!this._readonly){this.renderEditor();return}const t=Ot(this._value),n=document.createElement("span");n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";for(const r of t){const s=document.createElement("span");s.className="tag-pill",s.textContent=r,s.title=r,s.style.cssText=b0,n.append(s)}this._readonly||n.append(this.pencil()),this.append(n)}pencil(){const t=document.createElement("button");return t.type="button",t.title="Edit the list",t.textContent="✎",t.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this._editing=!0,this.render()}),t}renderEditor(){const t=document.createElement("input");t.type="text",t.value=Ot(this._value).length===0?"":this._value,t.title="Comma-separated, or a JSON array",t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",t.addEventListener("change",()=>{this._editor===t&&this.commit(t.value)}),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),this.commit(t.value)):n.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),t.addEventListener("blur",()=>{this._editor===t&&this.commit(t.value)}),this.append(t),this._editor=t,setTimeout(()=>{t.focus(),t.select()},0)}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const y0=Object.freeze(Object.defineProperty({__proto__:null,init:g0,meta:m0},Symbol.toStringTag,{value:"Module"})),Ar={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},v0=120,Mh=50,$0=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,x0=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function jh(e){return/^https?:\/\/\S+$/i.test(e)}function k0(e){return/^data:image\//i.test(e)?!0:jh(e)?$0.test(e):$v(e)}function Nh(e,t){if(e==="array")return"tags";if(e!=="string")return;const n=[];for(const s of t){if(s==null)continue;const i=typeof s=="string"?s.trim():String(s).trim();i&&n.push(i)}if(n.length===0)return;if(n.every(k0))return"image";if(n.every(jh))return"link";if(n.some(s=>x0.test(s))||n.reduce((s,i)=>s+i.length,0)/n.length>v0)return"preview"}function sl(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=Nh(n.type,t.map(s=>s[n.field]));return r?{...n,renderer:r}:n})}function C0(e){e.events.on("import:after",({tableId:t})=>{_0(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:Ar.name}),null;const s=(await t.store.rows(r).find()).slice(0,Mh);if(s.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:Ar.name}),null;const i=n.map(({renderer:u,...h})=>h),o=sl(i,s.map(u=>u.data)),l=o.filter((u,h)=>u.renderer!==n[h]?.renderer).length;return t.ui.dialogs.toast(l===0?"No renderer fits these values — columns left as they are.":`Set ${l} renderer${l===1?"":"s"}. Press Save to keep them.`,{kind:l===0?"info":"success",title:Ar.name}),o}})}async function _0(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(i=>i.renderer))return;const r=(await e.store.rows(t).find()).slice(0,Mh);if(r.length===0)return;const s=sl(n.columns,r.map(i=>i.data));if(s.every((i,o)=>i.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:s,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:Ar.id,phase:"runtime",error:n})}}const S0=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:Nh,init:C0,meta:Ar,withInferredRenderers:sl},Symbol.toStringTag,{value:"Module"}));function Ns(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function E0(e){return!!(e.source||e.origin)}const T0="#01579b",I0="#6d28d9";function lu(e){return E0(e)?I0:T0}const Tr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',cu={normal:`<svg ${Tr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${Tr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${Tr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${Tr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},A0=`<svg ${Tr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var R0=Object.defineProperty,O0=Object.getOwnPropertyDescriptor,Ai=(e,t,n,r)=>{for(var s=r>1?void 0:r?O0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&R0(t,n,s),s};function D0(e,t,n){(It.instance??L0()).show(e,t,n)}function P0(e){if(!e)return null;const t=Ns(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function L0(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let It=class extends ke{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),It.instance=this}disconnectedCallback(){super.disconnectedCallback(),It.instance===this&&(It.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return ie;const r=n?k`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:k`${t}`;return k`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=P0(this.provenance);return k`
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
            ${e?.descriptionHtml?k`<div class="desc">${qn(e.descriptionHtml)}</div>`:e?.description?k`<div class="desc">${e.description}</div>`:ie}
            ${t?k`<dl>${this.row("Source",e?.source,e?.sourceUrl)} ${this.row("License",e?.license,e?.licenseUrl)} ${this.row("About",e?.about,e?.aboutUrl)}</dl>`:ie}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?k`<p class="empty">No additional information.</p>`:ie}
          </div>
        </form>
      </dialog>
    `}};It.instance=null;It.styles=[yt,Se`
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
    `];Ai([B()],It.prototype,"name",2);Ai([B()],It.prototype,"info",2);Ai([B()],It.prototype,"provenance",2);It=Ai([Ie("table-info-dialog")],It);const M0=.25,j0=4;function N0(e){return Math.min(j0,Math.max(M0,e))}function uu(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const _r={x:0,y:0,scale:1};function du(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function z0(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function U0(e,t){let n={..._r};t.style.transformOrigin="0 0";const r=new Set,s=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const W of r)W({...n})};let i="none",o={..._r},l=0,u=0,h=0,p=0,g=0,y=0;const w=(W,de)=>{const K=e.getBoundingClientRect();return{x:W-K.left,y:de-K.top}},$=W=>{if(W.touches.length===2){i="pinch",o={...n};const[de,K]=[W.touches[0],W.touches[1]];h=du(de,K)||1;const ae=w((de.clientX+K.clientX)/2,(de.clientY+K.clientY)/2);p=(ae.x-n.x)/n.scale,g=(ae.y-n.y)/n.scale,W.preventDefault();return}if(W.touches.length===1&&!z0(W.target)){const de=W.timeStamp;if(de-y<300){n={..._r},s(),y=0,i="none",W.preventDefault();return}y=de,i="pan",o={...n},l=W.touches[0].clientX,u=W.touches[0].clientY}else i="none"},C=W=>{if(i==="pan"&&W.touches.length===1){const de=W.touches[0];n=uu(o,de.clientX-l,de.clientY-u),s(),W.preventDefault()}else if(i==="pinch"&&W.touches.length>=2){const[de,K]=[W.touches[0],W.touches[1]],ae=N0(o.scale*(du(de,K)/h)),$e=w((de.clientX+K.clientX)/2,(de.clientY+K.clientY)/2);n={x:$e.x-p*ae,y:$e.y-g*ae,scale:ae},s(),W.preventDefault()}},P=W=>{W.touches.length===0?i="none":W.touches.length===1&&i==="pinch"&&(i="pan",o={...n},l=W.touches[0].clientX,u=W.touches[0].clientY)};let R=!1,L={..._r},G=0,z=0,re=!1;const V=(W,de)=>{const K=e.getBoundingClientRect();return W>=K.left&&W<=K.right&&de>=K.top&&de<=K.bottom},S=W=>{if(!R)return;const de=W.clientX-G,K=W.clientY-z;!re&&Math.hypot(de,K)<4||(re=!0,document.body.style.cursor="grabbing",n=uu(L,de,K),s(),W.preventDefault())},q=()=>{R&&(R=!1,document.body.style.cursor="",window.removeEventListener("mousemove",S,!0),window.removeEventListener("mouseup",ee,!0))};function ee(){q()}const te=W=>{W.button===2&&V(W.clientX,W.clientY)&&(R=!0,re=!1,L={...n},G=W.clientX,z=W.clientY,window.addEventListener("mousemove",S,!0),window.addEventListener("mouseup",ee,!0))},ce=W=>{re&&(W.preventDefault(),re=!1)};return e.addEventListener("touchstart",$,{passive:!1}),e.addEventListener("touchmove",C,{passive:!1}),e.addEventListener("touchend",P),e.addEventListener("touchcancel",P),window.addEventListener("mousedown",te,!0),window.addEventListener("contextmenu",ce,!0),{snapshot:()=>({...n}),reset:()=>{n={..._r},s()},restore:W=>{n={...W},s()},subscribe:W=>(r.add(W),()=>r.delete(W)),dispose:()=>{e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",C),e.removeEventListener("touchend",P),e.removeEventListener("touchcancel",P),window.removeEventListener("mousedown",te,!0),window.removeEventListener("contextmenu",ce,!0),q()}}}const As=new Map;function Gr(e,t){const r=(As.get(e)??Promise.resolve()).then(t,t);return As.set(e,r),r.finally(()=>{As.get(e)===r&&As.delete(e)}),r}let Io=0;function zh(){return Io=Math.max(Date.now(),Io+1),Io}const Ri=new Map;function Uh(e,t){Ri.set(e,t)}function Oi(e){Ri.delete(e)}function F0(e){return Ri.has(e)}function B0(e){try{Ri.get(e)?.()}catch{}}const on=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function q0(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let hu=!1;async function H0(){hu||(hu=!0,document.addEventListener("easydb:restack-windows",()=>void fu())),await fu()}async function fu(){if(on)return;const e=await oe();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),s=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],i=q0(s);if(t<12&&!i.every(o=>F0(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of i)B0(o);return}}const K0=12;function V0(e,t,n,r,s=K0){const i=pu(e.x,t.x,t.w,n,e.scale,s),o=pu(e.y,t.y,t.h,r,e.scale,s);return i===e.x&&o===e.y?null:{...e,x:i,y:o}}function pu(e,t,n,r,s,i){const o=t*s+e,l=n*s,u=o+l,h=r-i*2;return l>=h?o<=i&&u>=r-i?e:i-t*s:o<i?i-t*s:u>r-i?r-i-l-t*s:e}function Fh(e){if(e.status==="minimized"&&e.normalize(),Ei()){e.status!=="maximized"&&e.maximize(),e.front();return}e.status!=="maximized"&&W0(e),e.front()}function W0(e){const t=ti(),n=document.getElementById("easydb-panels");if(!t||!n)return;const r=V0(t.snapshot(),{x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight},n.clientWidth,n.clientHeight);r&&t.restore(r)}var G0=Object.defineProperty,Y0=Object.getOwnPropertyDescriptor,Yr=(e,t,n,r)=>{for(var s=r>1?void 0:r?Y0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&G0(t,n,s),s};let An=class extends ke{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return k`<button class="icon ${e?"active":""}" title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"} @click=${this.openSearch}>
        <span class="mi sm">search</span>
      </button>`}return k`<input type="search" placeholder="search…" .value=${this.query} @input=${this.onInput} @blur=${this.onBlur} />`}};An.styles=[xt,Se`
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
    `];Yr([wt({type:String})],An.prototype,"tableId",2);Yr([B()],An.prototype,"query",2);Yr([B()],An.prototype,"open",2);Yr([Ft("input")],An.prototype,"inputEl",2);An=Yr([Ie("panel-search")],An);var Q0=Object.defineProperty,J0=Object.getOwnPropertyDescriptor,tr=(e,t,n,r)=>{for(var s=r>1?void 0:r?J0(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Q0(t,n,s),s};let ln=class extends ke{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await oe();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(s){console.error(`[table-button:${e.id}]`,s)}}}async connectedCallback(){super.connectedCallback();const e=await oe();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await oe();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await oe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=X0(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return k`
      ${this.table?.readonly?ie:k`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>k`<button class=${e.danger?"danger":""} title=${e.tooltip??e.label} aria-label=${e.label} @click=${t=>this.runTableButton(e,t)}>
              ${e.icon?e.icon.trimStart().startsWith("<svg")?k`<span class="icon-svg">${ma(e.icon)}</span>`:k`<span class="mi sm">${e.icon}</span>`:k`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};ln.styles=[xt,Se`
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
    `];tr([wt({type:String})],ln.prototype,"tableId",2);tr([wt({type:Boolean})],ln.prototype,"active",2);tr([B()],ln.prototype,"rowCount",2);tr([B()],ln.prototype,"tableButtons",2);tr([B()],ln.prototype,"table",2);ln=tr([Ie("panel-footer")],ln);function X0(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Ao(e){return e.title?.trim()?e.title.trim():e.name}function Z0(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function e$(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const At=new Map,Bh=new Set;let mu=!1;async function qh(){const e=await oe();await Promise.all([...At.keys()].map(t=>zs(t,e)))}function Hh(e){const t=At.get(e);return t?(Fh(t),!0):(t$(e),!0)}async function t$(e){const t=await oe(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Kh(e){const t=await oe();await a$(e,t)}async function Vh(){if(mu)return;mu=!0;const e=await oe(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){Hv(U0(t,n));const s=()=>e$(t);s(),window.addEventListener("resize",s);const i=document.querySelector("app-shell")?.shadowRoot,o=i?.querySelector("header"),l=i?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||l)){const u=new ResizeObserver(s);o&&u.observe(o),l&&u.observe(l)}}const r=(await e.store.tables.find()).filter(s=>s.workspaceId===e.workspaceId);r.sort(ei);for(const s of r)s.windowGeometry?.closed||gu(s,e);e.store.tables.subscribe(s=>{const i=s.filter(u=>u.workspaceId===e.workspaceId),o=new Map(i.map(u=>[u.id,u]));for(const[u,h]of At){const p=o.get(u);if(!p||p.windowGeometry?.closed){At.delete(u),Oi(u),Bh.add(u);try{h.status!=="closed"&&h.close()}catch{}}}const l=i.filter(u=>!At.has(u.id)&&!u.windowGeometry?.closed).sort(ei);for(const u of l)gu(u,e)}),H0()}const ta=720,na=360;function gu(e,t){const n=`panel-${Wh(e.id)}`,r=Z0(),s=Av(e.windowGeometry),i=on||s?.minimized===!0,o=()=>{const te=document.createElement("data-table");return te.tableId=e.id,te.style.height="100%",te},l=i?document.createElement("div"):o();let u=i?null:l,h=Ao(e),p=-1,g=-1;const y=()=>{G.setHeaderTitle(h+zd(p,g))},w=te=>{const ce=te.detail;ce.key===e.id&&(p=ce.count,g=ce.total,y())};document.addEventListener(Js,w);const $=()=>{R.active=!1,u?.remove(),u=null},C=()=>{if(u)return;const te=document.getElementById(n)?.querySelector(".jsPanel-content");if(!te)return;te.replaceChildren();const ce=o();te.appendChild(ce),u=ce,R.active=!0},P=document.createElement("panel-search");P.tableId=e.id;const R=document.createElement("panel-footer");R.tableId=e.id,R.active=!i;const L=async()=>{document.removeEventListener(Js,w);const te=At.get(e.id)?.persistRect();At.delete(e.id),Oi(e.id),!Bh.delete(e.id)&&await Gr(`table:${e.id}`,async()=>{const ce=await t.store.tables.findOne(e.id);if(!ce)return;const W=ce.windowGeometry??{...te??{x:60,y:60,w:ta,h:na},z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...W,closed:!0},updatedAt:Date.now()})})},G=Ti({id:n,container:r,title:h,logo:cu[Ns(e)],color:lu(e),content:l,footerToolbar:R,...s?{panelSize:{w:s.w,h:s.h},position:{x:s.x,y:s.y}}:{contentSize:{w:ta,h:na},position:r$()},minimizeTo:"#easydb-minimized-dock",viewport:Ii(),boot:{minimized:i,maximized:!on&&s?.maximized===!0,smallified:!on&&s?.smallified===!0},onmoved:()=>void zs(e.id,t),onresized:()=>void zs(e.id,t),onfronted:()=>void i$(e.id,t),onstatuschange:te=>{te.status==="minimized"?$():(te.status==="normalized"||te.status==="maximized")&&C(),zs(e.id,t)},onclosed:()=>void L()});At.set(e.id,G),Uh(e.id,()=>G.front(void 0,!1));const re=document.getElementById(n)?.querySelector(".jsPanel-controlbar");re&&re.prepend(P);let V=null;const S=document.createElement("button");S.type="button",S.title="Table info",S.setAttribute("aria-label","Table info"),S.className="eda-info-btn",S.textContent="ⓘ",S.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",S.addEventListener("click",te=>{te.stopPropagation(),V&&D0(h,V.info??{},{source:V.source,origin:V.origin})}),re?.prepend(S);const q=te=>{V=te??null;const ce=!!(te?.info||te?.source||te?.origin);S.style.display=ce?"inline-flex":"none"};q(e);let ee=Ns(e);t.store.tables.subscribe(te=>{const ce=te.find(de=>de.id===e.id);if(!ce)return;q(ce),Ao(ce)!==h&&(h=Ao(ce),y());const W=Ns(ce);W!==ee&&(ee=W,G.setHeaderLogo(cu[W]),G.setHeaderColor(lu(ce)))})}let n$=0;function r$(){const e=n$++;return{x:40+e%8*30,y:80+e%8*30}}function zs(e,t){return Gr(`table:${e}`,()=>s$(e,t))}async function s$(e,t){const n=At.get(e),r=n??document.getElementById(`panel-${Wh(e)}`);if(!r)return;const s=n?.persistFlags()??{minimized:!1,maximized:!1,smallified:!1},i=n?.persistRect()??{x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight};try{const l=(await t.store.tables.findOne(e))?.windowGeometry,u=on?l?.minimized??!1:s.minimized,h=on?l?.maximized??!1:s.maximized,p=on?l?.smallified??!1:s.smallified,g={...i,z:l?.z??0,minimized:u,maximized:h,smallified:p};await t.store.tables.patch(e,{windowGeometry:g,updatedAt:Date.now()})}catch{}}function i$(e,t){return Gr(`table:${e}`,()=>o$(e,t))}async function o$(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{...At.get(e)?.persistRect()??{x:0,y:0,w:ta,h:na},z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:zh()},updatedAt:Date.now()})}catch{}}async function a$(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),s=await r.find();await r.bulkRemove(s.map(i=>i.id))}await t.store.tables.remove(e)}function Wh(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function l$(e){if(!(e instanceof Node))return null;for(const[t,n]of At)if(n.contains(e))return t;return null}const Gh=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:on,deleteTable:Kh,focusTableWindow:Hh,initWindowManager:Vh,persistTablePanelGeometry:qh,tableIdAtNode:l$},Symbol.toStringTag,{value:"Module"})),c$={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function u$(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Kh(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const d$=Object.freeze(Object.defineProperty({__proto__:null,init:u$,meta:c$},Symbol.toStringTag,{value:"Module"})),h$={id:"table-copy",name:"Copy Table",type:"ui",version:"0.1.0",description:"Adds a Copy button to each table window: duplicate it as-is, or snapshot its Raw / Visible data into a new plain table. Works on projections too — that is how you freeze one.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/table-copy.ts"};function f$(e){e.ui.registerTableButton({id:"table-copy:copy",label:"Copy",icon:"content_copy",tooltip:"Copy this table — as a duplicate, or as a snapshot of its data",onClick:(t,{tableId:n})=>void m$(t,n)})}function p$(e,t){const n=e.source?.type==="projection";if(t==="duplicate")return n?"a second projection over the same sources (still live)":e.source?"another connection to the same source (still live)":"a full copy of its columns and rows";const r=t==="raw"?"every column and row":"the visible columns and filtered rows";return e.source?`a plain table holding ${r} as they are right now`:`a plain table holding ${r}`}async function m$(e,t){const n=await e.store.tables.findOne(t);if(!n)return;const r=await e.ui.dialogs.choice(`Copy "${n.name}" — what should the copy contain?`,["Duplicate","Raw Data","Visible Data"],"Copy table");if(!r)return;const s=r==="Duplicate"?"duplicate":r==="Raw Data"?"raw":"visible";try{const i=await Yh(e,n,s);e.ui.dialogs.toast(`Copied "${n.name}" to "${i.name}" — ${p$(n,s)}.`,{kind:"success",title:"Copy table"})}catch(i){e.ui.dialogs.toast(`Could not copy "${n.name}": ${i?.message??String(i)}`,{kind:"error",title:"Copy table"})}}async function Yh(e,t,n){const r=e.workspaceId();if(!r)throw new Error("table-copy: no active workspace");const s=an(await Ia(e,r),`${t.name} copy`),i=_e(),o=Date.now(),l={id:i,workspaceId:r,name:s,code:Oe(s),view:t.view,...t.title?{title:`${t.title} copy`}:{},...t.labelColumn?{labelColumn:t.labelColumn}:{},...t.info?{info:t.info}:{},updatedAt:o};if(n==="duplicate"){const h={...l,columns:t.columns,...t.sortBy?{sortBy:t.sortBy}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.filters?{filters:t.filters}:{},...t.deletedColumns?{deletedColumns:t.deletedColumns}:{},...t.readonly?{readonly:!0}:{},...t.source?{source:t.source}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(h),t.source||await bu(e,t.id,i,p=>p),h}const u={...l,columns:dh(t,n).map(g$),...n==="raw"&&t.filters?{filters:t.filters}:{},...n==="raw"&&t.sortBy?{sortBy:t.sortBy}:{},...n==="raw"&&t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(u),await bu(e,t.id,i,h=>hh(t,h,n)),u}function g$(e){if(!e.readonly)return e;const t={...e};return delete t.readonly,t}async function bu(e,t,n,r){const s=r(await e.store.rows(t).find());if(s.length===0)return;const i=Date.now();await e.store.rows(n).bulkInsert(s.map(o=>({id:_e(),tableId:n,data:{...o.data},updatedAt:i})))}const b$=Object.freeze(Object.defineProperty({__proto__:null,copyTable:Yh,init:f$,meta:h$},Symbol.toStringTag,{value:"Module"}));var w$=Object.defineProperty,y$=Object.getOwnPropertyDescriptor,il=(e,t,n,r)=>{for(var s=r>1?void 0:r?y$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&w$(t,n,s),s};function Qh(e,t){return(Rt.instance??v$()).open(e,t)}function v$(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let Rt=class extends ke{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const s=this.rows[r],i=s.field.trim(),o=s.label.trim()||i;return{...n,field:i,label:o,hidden:s.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),Rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const s=n.field.trim().toLowerCase();if(s===""){e.add(r);return}(t.get(s)??t.set(s,[]).get(s)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,s)=>s===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return k`
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
    `}};Rt.instance=null;Rt.styles=[yt,Se`
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
    `];il([B()],Rt.prototype,"rows",2);il([B()],Rt.prototype,"subject",2);Rt=il([Ie("column-names-dialog")],Rt);const $$=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return Rt},editColumnNames:Qh},Symbol.toStringTag,{value:"Module"}));async function x$(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const s={api:e,fetchText:(S,q)=>qr(e,S,q??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},i=await n.list(s,{kind:"url",url:r});if(i.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=i.find(S=>S.name===t.name)??(i.length===1?i[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let l=[];const u=[];for await(const S of n.read(s,o))S.columns?.length&&(l=S.columns),u.push(...S.rows);const{columns:h,newFields:p}=ci(t.columns,l,t.deletedColumns??[]),g=t.origin?.pks??[],y=new Set(l.map(S=>S.field)),w=t.columns.map(S=>S.field).filter(S=>!y.has(S)&&!g.includes(S)),$=(t.deletedColumns??[]).filter(S=>y.has(S)),C=e.store.rows(t.id),P=await C.find(),{data:R,merged:L,strategy:G,droppedUserRows:z}=Od({oldRows:P.map(S=>({data:S.data})),freshRows:u,pks:g,userAddedFields:w,deletedRemoteFields:$}),re=Date.now();h.length>0&&await e.store.tables.patch(t.id,{columns:h,updatedAt:re}),await C.bulkRemove(P.map(S=>S.id));const V=R.map(S=>({id:_e(),tableId:t.id,data:S,updatedAt:re}));return await C.bulkInsert(V),{rowCount:V.length,newFields:p,merged:L,strategy:G,droppedUserRows:z}}var k$=Object.defineProperty,C$=Object.getOwnPropertyDescriptor,We=(e,t,n,r)=>{for(var s=r>1?void 0:r?C$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&k$(t,n,s),s};const _$="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",S$="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",E$='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',wu=[{label:"Northwind — sample database (JSON dump)",url:_$,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:S$,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],T$={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function I$(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:E$,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>R$(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>A$(t,n)})}async function A$(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await ol(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const s=await x$(e,n,r),i=[];s.newFields.length>0&&i.push(`${s.newFields.length} new column${s.newFields.length===1?"":"s"}`),!s.merged&&s.rowCount>0&&i.push("rows replaced (nothing to match them on)"),s.droppedUserRows>0&&i.push(`${s.droppedUserRows} row${s.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${s.droppedUserRows===1?"it":"them"} could not be carried over`),e.ui.dialogs.toast(`Refreshed "${n.name}" (${s.rowCount.toLocaleString()} rows)${i.length?` — ${i.join(", ")}`:""}.`,{kind:s.newFields.length>0||s.droppedUserRows>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function R$(e,t="auto"){const r=await(Te.instance??N$()).open({presetKind:t,async listDatabases(C){const P=bt(C);return Ka(R=>e.backend.fetch(R),P.base)},async listTables(){const C=e.workspaceId();return(await e.store.tables.find()).filter(P=>P.workspaceId===C&&!P.source).map(P=>({id:P.id,name:P.name})).sort((P,R)=>P.name.localeCompare(R.name))}});if(!r)return;const{url:s,file:i,kind:o,dbChosen:l,editColumns:u,maxRows:h,mode:p,panel:g,target:y}=r,w=i?.name??s,$=u?(C,P)=>Qh(C,P):void 0;try{if(o==="sql"){await O$(e,{url:s,file:i,label:w,maxRows:h,mode:p,target:y,panel:g,editHook:$});return}const C=await ol(o);if(C){const P=o==="json"?await D$(e,s,i,h,p):null;if(P?.isDump&&await e.ui.dialogs.confirm(`"${w}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Ra(e,P.text,w,{maxRows:h,editColumns:$,...i?{}:{originUrl:s}});return}const R=i?i.name:Vt(s),L=P?{kind:"text",text:P.text,name:R}:i?{kind:"file",file:i}:{kind:"url",url:s},G=await ui(e,C,L,{mode:p,target:y,maxRows:h,panel:g,...P&&!i?{origin:{type:C.id,url:s}}:{},...$?{editColumns:z=>$(z)}:{}});C.ownToasts||Jh(e,G,w);return}if(p==="reference"&&!i){o==="datasette"?await j$(e,s):await Xh(e,s,o);return}await vi(e,s,{skipTablePicker:l,maxRows:h,editColumns:$})}catch(C){e.ui.dialogs.toast(`Could not import ${w}: ${C.message}`,{kind:"error",title:"Import"})}}async function O$(e,t){const{url:n,file:r,label:s,maxRows:i,mode:o,target:l,panel:u,editHook:h}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const p=r?await r.text():await qr(e,n,`Reading ${Vt(n)}…`,i!=null?{maxBytes:null}:{});if(za(p)){const w=await Ua(e,p,{maxRows:i,target:l,...h?{editColumns:h}:{}});Fa(e,w,s);return}const g=await ol("sql");if(!g)throw new Error("The SQL importer is not installed.");const y=await ui(e,g,{kind:"text",text:p,name:r?r.name:Vt(n)},{mode:o,target:l,maxRows:i,panel:u,...r?{}:{origin:{type:g.id,url:n}},...h?{editColumns:w=>h(w)}:{}});Jh(e,y,s)}async function D$(e,t,n,r,s){if(s==="reference")return null;const i=n?await n.text():await qr(e,t,`Reading ${Vt(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:i,isDump:Aa(JSON.parse(i))}}catch{return{text:i,isDump:!1}}}async function ol(e){const{registries:t}=await oe();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function Jh(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,l)=>o+l.rowCount,0),s=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${s} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const i=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${i?` — ${i}`:""}.`,{kind:"error",title:"Import"})}function P$(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(s=>s!=null&&typeof s=="object"&&!Array.isArray(s));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const s of["rows","records","data"])if(n(r[s]))return r[s];for(const s of Object.values(r))if(n(s))return s}return[]}function L$(e){const t=P$(e).slice(0,50),n=s=>li(s)?"array":typeof s=="number"?"number":typeof s=="boolean"?"boolean":"string",r=new Map;for(const s of t)for(const[i,o]of Object.entries(s))!r.has(i)&&o!=null?r.set(i,n(o)):r.has(i)||r.set(i,"string");return[...r.entries()].map(([s,i])=>({field:s,label:s,type:i}))}function M$(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function j$(e,t){const n=bt(t),s=await Ja(l=>e.backend.fetch(l),n,"Reference");if(s===null)return;if(s.length===0)throw new Error("No tables found to reference at that URL.");let i=0;const o=[];for(const l of s)try{await Xh(e,M$(n.base,l.db,l.table),"json",{nameHint:`${l.db}/${l.table}`,silent:!0}),i++}catch(u){o.push(`${l.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${i} table${i===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function Xh(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=r.nameHint??Vt(t),o=await qr(e,t,`Reading ${i}…`,{maxBytes:null}),l=n==="csv"?Xn(o).columns:L$(o);if(l.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(g=>g.workspaceId===s).map(g=>g.name.toLowerCase()));let h=i;for(let g=2;u.has(h.toLowerCase());g++)h=`${i}-${g}`;const p={id:_e(),workspaceId:s,name:h,code:Oe(h),columns:l,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(p),r.silent||e.ui.dialogs.toast(`Referenced ${h} — live, read-only.`,{kind:"success",title:"Reference"})}function N$(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function z$(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(i=>i.startsWith("_")),s=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":s?"datasette":"json"}catch{return"json"}}function yu(e,t){if(t!=="datasette"||!e)return!1;try{const n=bt(e);return!n.db&&!n.table}catch{return!1}}function U$(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let Te=class extends ke{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,s=this.editColumns&&this.mode==="copy",i=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},l=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:s,maxRows:r,mode:l,panel:i,target:o});return}const u=n==="datasette"&&!!this.selectedDb&&yu(t,n),h=u?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:h,kind:n,dbChosen:u,editColumns:s,maxRows:r,mode:l,panel:i,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?U$(this.file.name):z$(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),Te.instance=this}disconnectedCallback(){super.disconnectedCallback(),Te.instance===this&&(Te.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await oe(),t=[...e.importers].sort((s,i)=>(s.order??Number.MAX_SAFE_INTEGER)-(i.order??Number.MAX_SAFE_INTEGER)).map(s=>({id:s.id,label:s.label,panel:s.panel,kernel:s.supports?.kernel})),n=t.some(s=>s.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const s of e.importers)for(const i of s.accept??[])r.add(i);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=wu[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!yu(this.url.trim(),this.resolvedKind)?ie:k`
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
                  ${wu.map((e,t)=>k`<option value=${String(t)} ?selected=${t===this.presetIdx}>${e.label}</option>`)}
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
    `}};Te.instance=null;Te.styles=[yt,Se`
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
    `];We([B()],Te.prototype,"url",2);We([B()],Te.prototype,"kind",2);We([B()],Te.prototype,"presetIdx",2);We([B()],Te.prototype,"dbList",2);We([B()],Te.prototype,"dbLoading",2);We([B()],Te.prototype,"dbError",2);We([B()],Te.prototype,"selectedDb",2);We([B()],Te.prototype,"editColumns",2);We([B()],Te.prototype,"file",2);We([B()],Te.prototype,"maxRowsInput",2);We([B()],Te.prototype,"mode",2);We([B()],Te.prototype,"targetKind",2);We([B()],Te.prototype,"targetTableId",2);We([B()],Te.prototype,"tables",2);We([B()],Te.prototype,"formats",2);We([B()],Te.prototype,"acceptAttr",2);Te=We([Ie("import-dialog")],Te);const F$=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Te},init:I$,meta:T$},Symbol.toStringTag,{value:"Module"})),B$={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},q$=6e4;let vu=null,ra=!1;const Ro=new Map;function H$(e){vu===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(vu=setInterval(()=>{Zh(e)},q$)))}async function Zh(e){if(ra)return;const t=e.workspaceId();if(!t)return;const n=await vh(e);if(n)try{await K$(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function K$(e,t,n){const r=await xi(e),s=await $h(e,n),i=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(i.status===404){await $u(e,t,n,r,null);return}if(!i.ok)return;const o=ki(i.headers.get("ETag")),l=await i.text();if(nu(r)===nu(l)){o&&o!==s&&await In(e,n,o);return}if(o&&o===s){await $u(e,t,n,r,s);return}if(!(o&&Ro.get(n)===o)){ra=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const h=JSON.parse(l),p=await xh(e,n,h);o&&await In(e,n,o),Ro.delete(n),e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&Ro.set(n,o)}finally{ra=!1}}}async function $u(e,t,n,r,s){const i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:i,body:r});if(o.ok){const l=ki(o.headers.get("ETag"));l&&await In(e,n,l);return}if(o.status===412){const l=await o.json().catch(()=>({}));l.currentEtag&&await In(e,n,l.currentEtag)}}const ef=Object.freeze(Object.defineProperty({__proto__:null,load:H$,meta:B$,tick:Zh},Symbol.toStringTag,{value:"Module"}));var V$=Object.defineProperty,W$=Object.getOwnPropertyDescriptor,Et=(e,t,n,r)=>{for(var s=r>1?void 0:r?W$(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&V$(t,n,s),s};let lt=class extends ke{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),s=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const i=this.allRows.find(u=>u.id===n);if(!i)return;let o;if(s==="boolean")o=t.checked;else if(s==="number"){const u=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(u)?t.value:u}else o=t.value;await(await oe()).store.rows(this.instance.tableId).patch(n,{data:{...i.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");!n||r==null||await this.addPill(n,r)}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await oe(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(i=>[i.field,i]));this.columns=t.visibleColumns.map(i=>r.get(i)??{field:i,label:i,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(i=>{const o=i.find(l=>l.id===this.viewInstanceId);if(o){if(o.tableId!==this.instance?.tableId){this.instance=o,this.reload();return}this.instance=o,this.recompute()}});const s=e.store.rows(t.tableId);this.rowsUnsub=s.subscribe(i=>{this.allRows=i,this.recompute()}),this.allRows=await s.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;const e=Zc(this.allRows,this.tableColumns),t=Vo(e,this.instance,this.tableColumns);let n=t;const r=this.searchQuery.trim(),s=this.globalQuery.trim();r&&(n=Ys(n,r,this.tableColumns)),s&&(n=Ys(n,s,this.tableColumns));const i=this.instance.limit??0;i>0&&n.length>i&&(n=n.slice(0,i)),this.rows=n,this.templateOn&&Nd(this.viewInstanceId,n.length,t.length)}async addPill(e,t){if(!this.instance)return;const n=$y(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{},[e]:n};await(await oe()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}rowsFacetedFor(e){if(!this.instance)return[];const t={...this.instance.pillFilters??{}};return delete t[e],Vo(Zc(this.allRows,this.tableColumns),{...this.instance,pillFilters:t},this.tableColumns)}async setPillFilter(e,t){if(!this.instance)return;const n={...this.instance.pillFilters??{}};t.trim()===""?delete n[e]:n[e]=t,await(await oe()).store.viewInstances.patch(this.instance.id,{pillFilters:n,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:n},this.recompute()}async cyclePill(e,t){await this.setPillFilter(e,Cy(this.instance?.pillFilters?.[e],t))}async openPillValues(e,t){const n=ot.instance;if(!n)return;const r=this.rowsFacetedFor(e),s=this.tableColumns.find(u=>u.field===e)?.type;if(!Ld(r,e,{type:s}))return;const{values:i,blanks:o}=Md(r,e,{type:s});if(i.length===0)return;const l=await n.open(t.getBoundingClientRect(),i,this.instance?.pillFilters?.[e]??"",o,u=>void this.setPillFilter(e,u),{exact:!0});l!==null&&(typeof l=="object"&&"clear"in l?await this.setPillFilter(e,""):typeof l=="string"&&await this.setPillFilter(e,l))}async removePill(e,t){if(!this.instance)return;const n=xy(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await oe()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await oe()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await oe()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await oe()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||aa(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&aa(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await oe();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(i=>i!==e):[...t,e];if(r.length===0)return;await(await oe()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?k`<div class="vw-empty">No rows.</div>`:k`
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
    `}renderTemplated(){const e=this.template;if(!e)return k`<div class="vw-empty">This view's template is missing.</div>`;if(Sy(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(o=>[o.field,o])),r=this.instance?.readonly===!0,s=this.rows.map(o=>yy(e.rowHtml,o,t,{columns:n,readonly:r})).join(""),i=(e.headerHtml??"")+s+(e.footerHtml??"");return k`<div class="vw-root">${qn(i)}</div>`}return k`<div class="vw-root">
      ${e.headerHtml?.trim()?k`<div class="vw-html">${qn(e.headerHtml)}</div>`:ie} ${this.renderTable()}
      ${e.footerHtml?.trim()?k`<div class="vw-html">${qn(e.footerHtml)}</div>`:ie}
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
    </div>`}renderPillChips(){const e=this.instance?.pillFilters;if(!e)return ie;const t=[];for(const[n,r]of Object.entries(e))if(r)for(const s of Rn(r))s.term&&t.push({field:n,value:s.term,state:s.negate?"not":"on"});return t.map(n=>k`<span class=${`eda-pill-chip${n.state==="not"?" not":""}`}>
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
        </div>`;return k`${this.renderSortBar()}${t}${this.renderFooter()}`}};lt.styles=[xt,Se`
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
    `];Et([wt({type:String})],lt.prototype,"viewInstanceId",2);Et([B()],lt.prototype,"loaded",2);Et([B()],lt.prototype,"error",2);Et([B()],lt.prototype,"instance",2);Et([B()],lt.prototype,"template",2);Et([B()],lt.prototype,"columns",2);Et([B()],lt.prototype,"tableColumns",2);Et([B()],lt.prototype,"rows",2);Et([B()],lt.prototype,"showColsMenu",2);Et([B()],lt.prototype,"searchQuery",2);Et([B()],lt.prototype,"globalQuery",2);lt=Et([Ie("view-window")],lt);const tf=480,nf=520,it=new Map;async function G$(){await Promise.all([...it.keys()].map(e=>Us(e)))}function rf(e){const t=it.get(e);return t?(Fh(t.panel),!0):!1}const sa=new Set;async function sf(e){if(rf(e))return;sa.add(e);const t=await oe(),n=await t.store.viewInstances.findOne(e);if(!n){sa.delete(e);return}if(n.open){oa(n,t),of(e);return}await t.store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()})}function of(e){sa.delete(e)&&rf(e)}let xu=!1;function ia(e){e.panel.setHeaderTitle(e.name+zd(e.count,e.total))}function Y$(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Q$(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function J$(e){return`view-panel-${Q$(e)}`}async function X$(){if(xu)return;xu=!0;const e=await oe(),t=r=>r.filter(s=>s.workspaceId===e.workspaceId&&s.open),n=t(await e.store.viewInstances.find()).sort(ei);for(const r of n)oa(r,e);e.store.viewInstances.subscribe(r=>{const s=new Map(t(r).map(o=>[o.id,o]));for(const o of[...it.keys()])s.has(o)||ex(o);const i=[...s.values()].filter(o=>!it.has(o.id)).sort(ei);for(const o of i)oa(o,e)}),e.store.tables.subscribe(r=>void Z$(e,r)),document.addEventListener(Js,r=>{const s=r.detail,i=it.get(s.key);i&&i.el&&(i.count=s.count,i.total=s.total,ia(i))}),document.addEventListener("easydb:reload-view",r=>{const s=r.detail?.instanceId;if(!s)return;const i=it.get(s);i&&(async()=>{const o=await e.store.viewInstances.findOne(s);o&&(i.name=o.name,ia(i)),i.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of it.values())r?.reload()})}async function Z$(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),s=new Map;for(const o of n)s.has(o.name)||s.set(o.name,o);const i=await e.store.viewInstances.find();for(const o of i){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const l=s.get(o.tableName);l&&await e.store.viewInstances.patch(o.id,{tableId:l.id,updatedAt:Date.now()})}}function oa(e,t){if(it.has(e.id))return;const n=J$(e.id),r=e.windowGeometry,s=r?.minimized===!0,i=()=>{const w=document.createElement("view-window");return w.viewInstanceId=e.id,w.style.height="100%",w},o=s?document.createElement("div"):i();let l;const u=()=>{l&&(l.el?.remove(),l.el=null,l.count=-1,l.total=-1,ia(l))},h=()=>{if(!l||l.el)return;const w=document.getElementById(n)?.querySelector(".jsPanel-content");if(!w)return;w.replaceChildren();const $=i();w.appendChild($),l.el=$},p=Ti({id:n,container:Y$(),title:e.name,logo:A0,color:"#0891b2",content:o,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:tf,h:nf},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:Ii(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0,smallified:r?.smallified===!0},onmoved:()=>void Us(e.id),onresized:()=>void Us(e.id),onfronted:()=>void tx(e.id,t),onstatuschange:w=>{w.status==="minimized"?u():(w.status==="normalized"||w.status==="maximized")&&h(),Us(e.id)},onclosed:()=>{it.delete(e.id),Oi(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});l={panel:p,el:s?null:o,name:e.name,count:-1,total:-1},it.set(e.id,l),Uh(e.id,()=>p.front(void 0,!1));const g=document.getElementById(n),y=document.createElement("panel-search");y.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.append(y),of(e.id)}function ex(e){const t=it.get(e);if(t){it.delete(e),Oi(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function tx(e,t){return Gr(`view:${e}`,()=>nx(e,t))}async function nx(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{...it.get(e)?.panel.persistRect()??{x:0,y:0,w:tf,h:nf},z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:zh()},updatedAt:Date.now()})}catch{}}function Us(e){return Gr(`view:${e}`,()=>rx(e))}async function rx(e){const t=it.get(e);if(!t)return;const{minimized:n,maximized:r,smallified:s}=t.panel.persistFlags(),i=t.panel.persistRect();try{const o=await oe(),l=(await o.store.viewInstances.findOne(e))?.windowGeometry,u={...i,z:l?.z??0,minimized:n,maximized:r,smallified:s};await o.store.viewInstances.patch(e,{windowGeometry:u,updatedAt:Date.now()})}catch{}}var sx=Object.defineProperty,ix=Object.getOwnPropertyDescriptor,nr=(e,t,n,r)=>{for(var s=r>1?void 0:r?ix(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&sx(t,n,s),s};function aa(e,t){(pt.instance??ox()).open(e,t)}function ox(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Oo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let pt=class extends ke{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),pt.instance===this&&(pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await oe(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){this.close(),await sf(e)}async editInstance(e){const n=await(await oe()).store.viewTemplates.findOne(e.templateId),r=n?Jc(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await oe()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await oe(),n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={...e,id:Oo(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await oe();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await oe(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(s=>s.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Oo(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Jc(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(g=>g.field.toLowerCase()===t||(g.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const g=Number(r[1])-1;return this.columns.filter(w=>w.type==="boolean")[g]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(g=>g.type==="boolean");const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(g=>g.type==="date"||g.type==="datetime");const l=["url","link","href","website","homepage","uri","site","web"];if(l.includes(t)){const g=this.firstColumn(y=>y.renderer==="link");return g||this.firstColumn(y=>{const w=y.field.toLowerCase(),$=(y.label??"").toLowerCase();return l.some(C=>w.includes(C)||$.includes(C))})}const u=g=>y=>{const w=y.field.toLowerCase(),$=(y.label??"").toLowerCase();return g.some(C=>w.includes(C)||$.includes(C))},h=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(h.includes(t)){const g=this.firstColumn(w=>w.renderer==="image");if(g)return g;const y=this.firstColumn(u(h));return y||this.firstColumn(u(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(u(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(u(["phone","tel","mobile","cell"]));const p=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(p.includes(t)){const g=this.firstColumn(C=>{if(C.type!=="string")return!1;const P=C.field.toLowerCase(),R=(C.label??"").toLowerCase();return p.some(L=>P.includes(L)||R.includes(L))});if(g)return g;const y=this.columns.filter(C=>C.type==="string"),w=y[0];if(!w)return"";let $=w;for(const C of y)(C.max??0)>($.max??0)&&($=C);return $.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await oe();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={id:Oo(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return k`
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
    `];nr([B()],pt.prototype,"mode",2);nr([B()],pt.prototype,"instances",2);nr([B()],pt.prototype,"templates",2);nr([B()],pt.prototype,"tDraft",2);nr([B()],pt.prototype,"iDraft",2);pt=nr([Ie("views-dialog")],pt);const ax={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},lx="grid_view",cx={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},ux={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},dx={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},hx={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},fx=[cx,ux,dx,hx];function px(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:lx,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>aa(n)})}async function mx(e){await bx(e)}function gx(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function bx(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of fx)await wx(e,t,r,n)}async function wx(e,t,n,r){const s=`views:seeded:${n.slug}:${t}`,i=`views:sig:${n.slug}:${t}`,o=gx(n),l=r.find(h=>h.builtin&&h.name===n.name);if(l){(await e.store.settings.findOne(i))?.value!==o&&(await e.store.viewTemplates.patch(l.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:o})),await e.store.settings.upsert({name:s,value:!0});return}(await e.store.settings.findOne(s))?.value||(await e.store.viewTemplates.insert({id:yx(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:!0}),await e.store.settings.upsert({name:i,value:o}))}function yx(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const vx=Object.freeze(Object.defineProperty({__proto__:null,init:px,load:mx,meta:ax},Symbol.toStringTag,{value:"Module"})),$x={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function xx(e){e.ui.registerSettings(jd,"Table grid",[{key:"sortDescFirst",label:"Sort descending first",type:"boolean",default:!0,scope:"workspace",description:"Clicking a column header sorts descending, then ascending, then off. Turn this off to start ascending. Dates, scores and counts are usually read from the high end down, which took two clicks before."}]),e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const s=Array.from(t.dataTransfer?.files??[]).find(l=>l.name.toLowerCase()==="secrets.txt");if(!s)return!1;const i=await s.text(),o=Object.keys(Kn(i)).length;return Pr().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${s.name}"?`,"Import secrets")||(Yu(i),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const kx=Object.freeze(Object.defineProperty({__proto__:null,init:xx,meta:$x},Symbol.toStringTag,{value:"Module"}));class nn extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function Cx(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function _x(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function Sx(e,t){const n=Cx(t.source?.config),r=new Set;let s=[],i=new Map,o=!1,l=null;const u=new Map;let h=null,p=!1;function g(V){const S=new Map;for(const ee of V)S.has(ee.name)||S.set(ee.name,ee);const q=new Map;for(const ee of n.sources){const te=S.get(ee.tableName);te&&q.set(ee.alias,te.id)}return q}async function y(){return g(await e.tables.find({workspaceId:t.workspaceId}))}async function w(){const V=await e.tables.find({workspaceId:t.workspaceId}),S={rows:[],provenance:new Map};if(Hg(t.id,V))return S;const q=g(V),ee={};for(const ce of n.sources){const W=q.get(ce.alias);if(!W)return S;ee[ce.alias]=await e.rows(W).find()}const te=Mg(n,ee);return{rows:te.rows.map(ce=>({...ce,tableId:t.id})),provenance:te.provenance}}async function $(){const{rows:V,provenance:S}=await w();return s=V,i=S,o=!0,V}function C(){return l||(l=(async()=>{try{return await $()}finally{l=null}})(),l)}async function P(){const V=await y(),S=new Set(V.values());for(const[q,ee]of u)S.has(q)||(ee(),u.delete(q));for(const q of S)u.has(q)||u.set(q,e.rows(q).subscribe(R))}function R(){p||(p=!0,queueMicrotask(async()=>{p=!1,await P();const V=o?await $():await C();for(const S of r)S(V)}))}function L(V,S){return V===S||V==null&&S==null?!0:V==null||S==null?!1:String(V)===String(S)}async function G(V,S){o||await C();const q=s.find(de=>de.id===V)?.data,ee=i.get(V),te=new Map,ce=[];for(const[de,K]of Object.entries(S)){if(q&&L(q[de],K))continue;const ae=Gg(n,V,de,ee);if(!ae){ce.push(de);continue}const $e=te.get(ae.alias)??{rowId:ae.rowId,updates:{}};$e.updates[ae.field]=K,te.set(ae.alias,$e)}if(ce.length>0)throw new nn(re(ce,ee));if(te.size===0)return{id:V,tableId:t.id,data:S,updatedAt:Date.now()};const W=await y();for(const[de,{rowId:K,updates:ae}]of te){const $e=W.get(de);if(!$e)throw new nn(`the "${z(de)}" table is not available`);const Ge=e.rows($e),Me=await Ge.findOne(K);if(!Me)throw new nn("the underlying row no longer exists");await Ge.patch(K,{data:{...Me.data,...ae},updatedAt:Date.now()})}return{id:V,tableId:t.id,data:S,updatedAt:Date.now()}}function z(V){return n.sources.find(S=>S.alias===V)?.tableName??V}function re(V,S){const q=V[0],ee=n.columns.find(te=>te.field===q);return!ee||ee.from.kind==="script"?`"${q}" is computed by a script, so there is no cell to save it in`:S&&!S[ee.from.alias]?`this row has no matching "${z(ee.from.alias)}" row, so there is nowhere to save "${q}"`:`"${q}" cannot be written back to its source`}return{async find(V){const S=o?s:await C();return!V||Object.keys(V).length===0?S:S.filter(q=>_x(q,V))},async findOne(V){return(o?s:await C()).find(q=>q.id===V)??null},async insert(){throw new nn("rows are derived from other tables")},async bulkInsert(){throw new nn("rows are derived from other tables")},async upsert(V){return G(V.id,V.data)},async patch(V,S){if(!S.data)throw new nn("a cell edit must carry row data");return G(V,S.data)},async remove(){throw new nn("rows are derived from other tables")},async bulkRemove(){throw new nn("rows are derived from other tables")},subscribe(V){return r.add(V),h||(h=e.tables.subscribe(R)),o?V(s):R(),()=>{if(r.delete(V),r.size===0){h?.(),h=null;for(const S of u.values())S();u.clear(),o=!1}}},async refresh(){await P();const V=await $();for(const S of r)S(V)}}}function Ex(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,s=2;for(;t.has(r);)r=`${n}_${s++}`;return t.add(r),r}function Tx(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function Ix(e,t,n){const r=t.sources.map(l=>{const u=n.find(y=>y.name===l.tableName),h={alias:l.alias,tableId:u?.id??"",tableName:l.tableName,columns:u?.columns??[]},p=l.join?.on??[],g=p[0];return l.join&&g&&(h.join={type:l.join.type,thisField:g.field,otherAlias:g.eqAlias,otherField:g.eqField},p.length>1&&(h.extraOn=p.slice(1))),h}),s=t.columns.map(l=>{const u={include:!0,outField:l.field,label:l.label??l.field};return l.from.kind==="source"?{...u,alias:l.from.alias,field:l.from.field,computed:!1}:{...u,script:l.from.script,computed:!0}}),i=[],o=new Set;r.forEach((l,u)=>{const h=r.slice(0,u).filter(p=>p.tableName===l.tableName).length;for(const p of l.columns){const g=s.filter(y=>!y.computed&&y.alias===l.alias&&y.field===p.field&&!o.has(y));if(g.length>0)for(const y of g)o.add(y),i.push(y);else i.push({include:!1,alias:l.alias,field:p.field,computed:!1,label:h>0?`${p.label} (${l.alias})`:p.label})}});for(const l of s)!l.computed&&!o.has(l)&&i.push(l);for(const l of s)l.computed&&i.push(l);return{name:e,sources:r,columns:i,...t.limit?{limit:t.limit}:{},original:t}}function Ax(e,t){const n=Tx(e.sources),r=e.sources.length===0,s=e.sources.filter(l=>l.tableName===t.name).length;let i;if(!r){const l=e.sources.flatMap(h=>h.join?[{alias:h.join.otherAlias,field:h.join.otherField},...(h.extraOn??[]).map(p=>({alias:p.eqAlias,field:p.eqField}))]:[]),u=Vg({tableName:t.name,fields:t.columns.map(h=>h.field),pks:t.columns.filter(h=>h.unique).map(h=>h.field)},e.sources.map(h=>({alias:h.alias,tableName:h.tableName,fields:h.columns.map(p=>p.field),pks:h.columns.filter(p=>p.unique).map(p=>p.field)})),l);i={type:"left",thisField:u?.thisField??t.columns[0]?.field??"",otherAlias:u?.otherAlias??e.sources[0]?.alias??"",otherField:u?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...i?{join:i}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(l=>({include:!0,alias:n,field:l.field,computed:!1,label:s>0?`${l.label} (${n})`:l.label}))]}}function Rx(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const s of e.sources){if(n.has(s.alias)||!s.join)continue;[s.join.otherAlias,...(s.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(s.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function Ox(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function Dx(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(u=>u.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let u=0;u<e.sources.length;u++){const h=e.sources[u];if(!h?.join)continue;if(!h.join.thisField||!h.join.otherField)return{ok:!1,error:`Set both join keys for "${h.tableName}".`};const p=new Set(e.sources.slice(0,u).map(y=>y.alias));if([h.join.otherAlias,...(h.extraOn??[]).map(y=>y.eqAlias)].some(y=>!p.has(y)))return{ok:!1,error:`The join for "${h.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(u=>u.alias)),s=new Set,i=[];for(const u of n){let h;if(u.outField&&!s.has(u.outField)?(h=u.outField,s.add(h)):h=Ex(u.computed?"computed":u.field??"col",s),u.computed){i.push({field:h,from:{kind:"script",script:u.script??""}});continue}const p=u.alias,g=u.field;if(!p||!g||!r.has(p))return{ok:!1,error:`Column "${u.label??u.field}" belongs to a table that is no longer part of this projection.`};i.push({field:h,from:{kind:"source",alias:p,field:g}})}const o=e.sources.map(u=>{const h={alias:u.alias,tableName:u.tableName};return u.join&&(h.join={type:u.join.type,on:[{field:u.join.thisField,eqAlias:u.join.otherAlias,eqField:u.join.otherField},...u.extraOn??[]]}),h}),l={...e.original??{},version:1,sources:o,columns:i};return e.limit!=null&&e.limit>0?l.limit=Math.floor(e.limit):delete l.limit,{ok:!0,name:t,spec:l}}var Px=Object.defineProperty,Lx=Object.getOwnPropertyDescriptor,rr=(e,t,n,r)=>{for(var s=r>1?void 0:r?Lx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Px(t,n,s),s};let mt=class extends ke{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),mt.instance=this}disconnectedCallback(){super.disconnectedCallback(),mt.instance===this&&(mt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(Ix(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(Ax(this.modelOf(),e))}removeSource(e){this.applyModel(Rx(this.modelOf(),e))}addComputed(){this.applyModel(Ox(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=Dx(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return k`
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
    `];rr([B()],mt.prototype,"name",2);rr([B()],mt.prototype,"limit",2);rr([B()],mt.prototype,"sources",2);rr([B()],mt.prototype,"columns",2);rr([B()],mt.prototype,"error",2);mt=rr([Ie("projection-dialog")],mt);const Mx={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function jx(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>(af(e,t),Sx(e.store,t))}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void ku(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void ku(t,{editTableId:n})})}async function af(e,t){if(t.source?.type!=="projection")return;const n=t.source.config;if(!n||!Array.isArray(n.sources))return;const r=fi(n),s=t.columns.map(l=>{const u=!r.has(l.field);if(u===(l.readonly===!0))return l;if(u)return{...l,readonly:!0};const h={...l};return delete h.readonly,h}),i=r.size===0;s.every((l,u)=>l===t.columns[u])&&(t.readonly??!1)===i||await e.store.tables.patch(t.id,{columns:s,readonly:i,updatedAt:Date.now()})}async function Nx(e){const t=e.workspaceId();if(t)for(const n of await e.store.tables.find({workspaceId:t}))await af(e,n)}async function zx(e){await Nx(e)}async function Ux(e,t,n,r,s){const i=await e.store.tables.find({workspaceId:t}),o=new Map;for(const u of i)o.has(u.name)||o.set(u.name,u);const l={};for(const u of n.sources)l[u.alias]=o.get(u.tableName)?.columns??[];return _d(n,l,r,s)}async function ku(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),s=l=>({id:l.id,name:l.name,columns:l.columns}),i=mt.instance??Fx();if(t.editTableId){const l=r.find(u=>u.id===t.editTableId)??null;if(!l||l.source?.type!=="projection")return;i.open({candidates:r.filter(u=>u.id!==l.id).map(s),initial:{name:l.name,spec:l.source.config},onSave:Cu(e,n,l)});return}const o=r.find(l=>l.id===t.baseTableId);o&&i.open({base:s(o),candidates:r.map(s),onSave:Cu(e,n,null,o)})}function Cu(e,t,n,r){return async(s,i)=>{const o=await Ux(e,t,i,n?.columns??[],n?.deletedColumns??[]),l=fi(i).size===0,u={type:"projection",config:i};n?await e.store.tables.patch(n.id,{name:s,columns:o,source:u,readonly:l,updatedAt:Date.now()}):await e.store.tables.insert({id:_e(),workspaceId:t,name:s,code:Oe(s),columns:o,view:"table",source:u,readonly:l,...r?Bg(i,r):{},updatedAt:Date.now()})}}function Fx(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const Bx=Object.freeze(Object.defineProperty({__proto__:null,init:jx,load:zx,meta:Mx},Symbol.toStringTag,{value:"Module"})),qx={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function Hx(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",variant:"secondary",onClick:()=>e.ui.openCommandPalette()})}const Kx=Object.freeze(Object.defineProperty({__proto__:null,init:Hx,meta:qx},Symbol.toStringTag,{value:"Module"})),Vx=[kx,ev,zm,ug,pb,$b,zw,ey,ay,Hm,Ay,my,Ky,Jy,iv,uv,pv,wv,Iv,Zv,r0,a0,p0,y0,S0,d$,b$,F$,ef,vx,Bx,Kx];function Wx(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const lf=Vx.map(e=>{const t=Wx(e);return{id:t.id,meta:t,module:e}}),Gx=lf;function la(e){return`builtin:${e}`}async function Yx(e){const t=[];for(const n of lf)if(!await Qx(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function Qx(e,t){return t.meta.fixed?!1:_t==="all-optional"?!0:(await e.store.plugins.findOne(la(t.id)))?.enabled===!1}function cf(e){return e.filter(t=>t.status!=="minimized")}function Jx(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),s=Math.ceil(e/r),i=(t.w-n*(r+1))/r,o=(t.h-n*(s+1))/s;return Array.from({length:e},(l,u)=>{const h=u%r,p=Math.floor(u/r);return{x:t.x+n+h*(i+n),y:t.y+n+p*(o+n),w:i,h:o}})}function sr(){return qv()}function Xx(){for(const e of sr())e.close?.()}function Zx(){for(const e of sr())e.minimize?.()}function ek(){for(const e of sr())e.normalize?.()}function tk(){for(const e of sr())e.maximize?.()}function uf(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=ti()?.snapshot(),s=r?.scale&&r.scale>0?r.scale:1,i=r?.x??0,o=r?.y??0;return{x:-i/s,y:-o/s,w:t/s,h:n/s}}function df(e,t,n,r,s){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(s)}px`}function nk(){const e=cf(sr()).reverse();if(e.length===0)return;const t=uf(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),s=Math.min(480,Math.max(240,t.h*.6));e.forEach((i,o)=>{i.normalize?.(),df(i,t.x+24+o*n,t.y+24+o*n,r,s)}),hf()}function hf(){qh(),G$()}function rk(){const e=cf(sr()).reverse();if(e.length===0)return;const n=Jx(e.length,uf(),8);e.forEach((r,s)=>{r.normalize?.();const i=n[s];i&&df(r,i.x,i.y,i.w,i.h)}),hf()}function Rs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function sk(e,t){const{from:n,to:r,name:s,mode:i}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:s,createdAt:Date.now(),pluginUrls:i==="empty"?[]:[...o?.pluginUrls??[]]}),i==="empty")return r;if(i==="all"){const u=await e.tables.where("workspaceId").equals(n).toArray(),h=new Map;for(const w of u){const $=Rs();h.set(w.id,$),await e.tables.put({...w,id:$,workspaceId:r,updatedAt:Date.now()})}for(const[w,$]of h){const C=await e.rows.where("tableId").equals(w).toArray();C.length>0&&await e.rows.bulkPut(C.map(P=>({...P,id:Rs(),tableId:$})))}const p=await e.viewTemplates.where("workspaceId").equals(n).toArray(),g=new Map;for(const w of p){const $=Rs();g.set(w.id,$),await e.viewTemplates.put({...w,id:$,workspaceId:r})}const y=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const w of y){const $=h.get(w.tableId);$&&await e.viewInstances.put({...w,id:Rs(),workspaceId:r,tableId:$,templateId:g.get(w.templateId)??w.templateId})}}const l=await e.settings.where("workspaceId").equals(n).toArray();for(const u of l)await e.settings.put({...u,key:kn(r,u.name),workspaceId:r,name:u.name});return r}async function ff(e,t){return(await e.tables.where("workspaceId").equals(t).toArray()).map(r=>r.id)}async function pf(e,t){const n=await ff(e,t),r=n.length===0?0:await e.rows.where("tableId").anyOf(n).count();return{tables:n.length,rows:r,views:await e.viewInstances.where("workspaceId").equals(t).count(),templates:await e.viewTemplates.where("workspaceId").equals(t).count(),settings:await e.settings.where("workspaceId").equals(t).count()}}async function ik(e,t){const n=await pf(e,t),r=await ff(e,t);if(r.length>0){const l=await e.rows.where("tableId").anyOf(r).toArray();await e.rows.bulkDelete(l.map(u=>u.id)),await e.tables.bulkDelete(r)}const s=await e.viewInstances.where("workspaceId").equals(t).toArray();await e.viewInstances.bulkDelete(s.map(l=>l.id));const i=await e.viewTemplates.where("workspaceId").equals(t).toArray();await e.viewTemplates.bulkDelete(i.map(l=>l.id));const o=await e.settings.where("workspaceId").equals(t).toArray();return await e.settings.bulkDelete(o.map(l=>l.key).filter(l=>typeof l=="string")),await e.workspaces.delete(t),n}const _u="Clone everything (tables, views, settings)",Su="Clone settings only (no data)",ok="Empty workspace";function Di(e){const t=new URLSearchParams(location.search);t.set("space",e),location.assign(`${location.pathname}?${t.toString()}${location.hash}`)}function ak(){const e=new URLSearchParams(location.search);e.delete("space");const t=e.toString();location.assign(`${location.pathname}${t?`?${t}`:""}${location.hash}`)}async function lk(){const e=await oe(),t=(await e.store.workspaces.find()).filter(r=>r.id!==e.workspaceId);if(t.length===0){e.api.ui.dialogs.toast("This is the only workspace.",{kind:"info",title:"Workspaces"});return}const n=await e.api.ui.dialogs.choice("Open which workspace?",t.map(r=>r.name),"Switch workspace");n&&Di(n)}async function mf(){const e=await oe(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[_u,Su,ok],"New workspace");if(!n)return;const r=n===_u?"all":n===Su?"settings":"empty";await sk(Ks(),{from:e.workspaceId,to:wf(t.trim()),name:t.trim(),mode:r}),Di(t.trim())}async function gf(){const e=await oe(),t=await e.store.workspaces.find();let n=t.find(u=>u.id===e.workspaceId)??t[0];if(!n)return;if(t.length>1){const u=await e.api.ui.dialogs.choice("Delete which workspace? Everything in it goes with it.",t.map(h=>h.name),"Delete workspace");if(!u)return;n=t.find(h=>h.name===u)??n}const r=await pf(Ks(),n.id),s=[`${r.tables} table${r.tables===1?"":"s"}`,`${r.rows.toLocaleString()} row${r.rows===1?"":"s"}`,`${r.views} view${r.views===1?"":"s"}`,`${r.settings} setting${r.settings===1?"":"s"}`].join(", "),i=t.length===1;if(!await e.api.ui.dialogs.confirm(`Delete the workspace "${n.name}"?

${s} will be deleted. This cannot be undone.`+(i?`

It is the only workspace, so an empty one will be created in its place.`:""),"Delete workspace"))return;if(await ik(Ks(),n.id),mk(n.id),n.id!==e.workspaceId){e.api.ui.dialogs.toast(`Deleted "${n.name}" (${s}).`,{kind:"success",title:"Workspace deleted"});return}const l=t.find(u=>u.id!==n.id);l?Di(l.name):ak()}function ck(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:Zx},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:ek},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:tk},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:nk},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:rk},{id:"windows:close-all",title:"Close all windows",icon:"close",run:Xx}];for(const i of t)e.ui.registerCommand({id:i.id,title:i.title,group:"Windows",icon:i.icon,run:i.run});const n=[{id:"workspace:switch",title:"Switch workspace",icon:"swap_horiz",keywords:["space","open","change"],run:lk},{id:"workspace:new",title:"New workspace",icon:"add",keywords:["space","add","create","clone"],run:mf},{id:"workspace:delete",title:"Delete workspace",icon:"delete",keywords:["space","remove","drop"],run:gf}];for(const i of n)e.ui.registerCommand({id:i.id,title:i.title,group:"Workspace",icon:i.icon,keywords:i.keywords,run:i.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",s="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:i=>i.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(s,"_blank","noopener")}})}async function uk(e){if(_t==="url-plugins"||_t==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],s=[];for(const i of r)try{const o=await e.store.plugins.findOne(i);if(o&&o.enabled===!1)continue;let l=o?.cachedBody??"";if(l)dk(e,i,l);else{try{l=await bf(i)}catch(p){await e.store.plugins.upsert({url:i,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${p.message}`}),e.events.emit("plugin:error",{url:i,phase:"fetch",error:p});continue}await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),cachedBody:l})}const u=new Blob([l],{type:"text/javascript"}),h=URL.createObjectURL(u);try{const p=await import(h);await p.init?.(e),s.push({url:i,mod:p})}finally{setTimeout(()=>URL.revokeObjectURL(h),5e3)}}catch(o){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:i,phase:"init",error:o})}return async()=>{for(const{url:i,mod:o}of s)try{await o.load?.(e)}catch(l){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`load: ${l.message}`}),e.events.emit("plugin:error",{url:i,phase:"load",error:l})}}}async function bf(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function dk(e,t,n){return(async()=>{try{const r=await bf(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let Do=null;function oe(){return Do||(Do=hk()),Do}async function hk(){const e=await Ks();let t="";const n=Fp(e,()=>t),r=Hp(),s=Xp(),i=new Map;n.tables.subscribe(R=>{i.clear();for(const L of R)i.set(L.id,L)});const o=qp(n.tables),l={...o,insert:async R=>{const L=await o.insert(R);return i.set(L.id,L),L},upsert:async R=>{const L=await o.upsert(R);return i.set(L.id,L),L}};let u=null;const h={get backend(){if(!u)throw new Error("[host] row-source ctx used before app init completed");return u.backend},events:r,settings:n.settings,workspaceId:()=>w},p=Bp({base:{...n,tables:l},providers:s.rowSources,tableById:R=>i.get(R),ctx:h}),g=fk(),y=await p.workspaces.find();let w;if(g){const R=wf(g),L=y.find(G=>G.id===R||G.name===g);L?w=L.id:w=(await p.workspaces.insert({id:R,name:g,createdAt:Date.now(),pluginUrls:[]})).id}else{const R=pk(),L=R?y.find(G=>G.id===R):void 0;L?w=L.id:y.length>0?w=y[0].id:w=(await p.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}t=w,gk(w);const $=am({store:p,events:r,registries:s,workspaceId:()=>w});u=$,ck($),r.on("import:after",({source:R,tableId:L,rowCount:G})=>{R!=="datasette"&&$.store.tables.findOne(L).then(z=>{$.ui.dialogs.toast(`Imported ${G} row${G===1?"":"s"} into "${z?.name??L}".`,{kind:"success",title:R.toUpperCase()+" import"})})}),r.on("plugin:error",({url:R,phase:L,error:G})=>{$.ui.dialogs.toast(`[${L}] ${G?.message??String(G)}`,{kind:"error",title:`Plugin: ${R}`})});const C=await Yx($),P=await uk($);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:w}),await C(),await P(),_t==="all-optional"?$.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):_t==="url-plugins"&&$.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),_t!=="off"&&$.ui.openPluginManager()}),globalThis.api=$,{store:p,events:r,workspaceId:w,registries:s,api:$}}function fk(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const ni="eda:lastWorkspaceId";function pk(){try{return globalThis.localStorage?.getItem(ni)??null}catch{return null}}function mk(e){try{globalThis.localStorage?.getItem(ni)===e&&globalThis.localStorage.removeItem(ni)}catch{}}function gk(e){try{globalThis.localStorage?.setItem(ni,e)}catch{}}function wf(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var bk=Object.defineProperty,wk=Object.getOwnPropertyDescriptor,Pi=(e,t,n,r)=>{for(var s=r>1?void 0:r?wk(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&bk(t,n,s),s};let Jn=class extends ke{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=Xn(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await oe(),s=crypto.randomUUID();await r.store.tables.insert({id:s,workspaceId:r.workspaceId,name:t,code:Oe(t),columns:n.columns,view:"table",updatedAt:Date.now()});const i=n.rows.map(o=>({id:crypto.randomUUID(),tableId:s,data:o,updatedAt:Date.now()}));await r.store.rows(s).bulkInsert(i),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return k`
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
    `}};Jn.styles=[yt,Se`
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
    `];Pi([B()],Jn.prototype,"name",2);Pi([B()],Jn.prototype,"text",2);Pi([B()],Jn.prototype,"errorMsg",2);Jn=Pi([Ie("csv-paste-dialog")],Jn);const al=new Map;let Eu=!1;function yk(){for(const e of al.values())if(e===null||e.open)return!0;return!1}function vk(e,t=null){al.set(e,t),xk()}function $k(e){al.delete(e)}function yf(e,t){const n=()=>{t.open&&vk(e,t)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>$k(e))}function xk(){Eu||(Eu=!0,window.addEventListener("beforeunload",e=>{yk()&&(e.preventDefault(),e.returnValue="")}))}var kk=Object.defineProperty,Ck=Object.getOwnPropertyDescriptor,ll=(e,t,n,r)=>{for(var s=r>1?void 0:r?Ck(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&kk(t,n,s),s};const _k=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let zt=class extends ke{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),zt.instance=this}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:_k,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return k`
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
    `}};zt.instance=null;zt.styles=[yt,Se`
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
    `];ll([B()],zt.prototype,"text",2);ll([B()],zt.prototype,"columnLabel",2);zt=ll([Ie("script-editor-dialog")],zt);function Tu(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}function vf(e){if(e.source?.type!=="projection")return null;const t=e.source.config;return t&&Array.isArray(t.sources)?t:null}function Sk(e,t,n,r){return{projections:t.filter(i=>{if(i.id===r)return!1;const o=vf(i);return!!o&&o.sources.some(l=>l.tableName===e)}),views:n.filter(i=>i.tableName===e)}}function Ek(e,t,n){return e.sources.some(r=>r.tableName===t)?{...e,sources:e.sources.map(r=>r.tableName===t?{...r,tableName:n}:r)}:null}function Tk(e){const t=[];return e.projections.length>0&&t.push(`${Iu(e.projections.length,"projection")} (${Au(e.projections.map(n=>n.name))})`),e.views.length>0&&t.push(`${Iu(e.views.length,"view")} (${Au(e.views.map(n=>n.name||"untitled"))})`),t.length>0?t.join(" and "):null}function Iu(e,t){return`${e} ${t}${e===1?"":"s"}`}function Au(e){const t=e.slice(0,3).map(n=>`"${n}"`);return e.length>3?`${t.join(", ")} and ${e.length-3} more`:t.join(", ")}var Ik=Object.defineProperty,Ak=Object.getOwnPropertyDescriptor,tt=(e,t,n,r)=>{for(var s=r>1?void 0:r?Ak(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Ik(t,n,s),s};const Rk=["string","number","boolean","date","datetime","array"];function Ru(e){return[...e.keys()].filter(t=>!Jp.has(t)).sort()}function Ok(e,t){return t&&!e.includes(t)?[...e,t]:[...e]}async function Dk(e,t,n,r){const s=await oe(),i=(await s.store.viewInstances.find()).filter(o=>o.tableId===e||o.tableName===t);for(const o of i)o.tableName!==n&&await s.store.viewInstances.patch(o.id,{tableName:n,updatedAt:Date.now()});for(const o of r?.projections??[]){const l=vf(o),u=l&&Ek(l,t,n);u&&await s.store.tables.patch(o.id,{source:{type:"projection",config:u},updatedAt:Date.now()})}}function Pk(e,t,n){const r=`Renaming "${e}" to "${t}" affects ${n}.

They reference this table by name, so they will be updated to point at "${t}". Continue?`,s=ht.instance;return s?s.confirm(r,"Rename table"):Promise.resolve(window.confirm(r))}let Ke=class extends ke{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e),this.dialogEl&&yf("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await oe();if(this.rendererOptions=Ru(n.registries.cellRenderers),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=Ru(n.registries.cellRenderers),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await oe(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.tableTitle=s.title??"",this.tableReadonly=!!s.readonly,this.columns=s.columns.map(o=>({field:o.field,label:o.label,type:o.type,renderer:o.renderer,script:o.script,max:o.max,unique:o.unique,notnull:o.notnull,hidden:o.hidden,sortable:o.sortable,filterable:o.filterable,origField:o.field,orig:o}));const i=await r.store.rows(e).find();this.previewRows=i.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[s]=r.splice(e,1);r.splice(n,0,s),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=s?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const s=[...this.columns],[i]=s.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),s.splice(o,0,i),this.columns=s}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}async runColumnAction(e){this.errorMsg="";const t=await oe();try{const n=await e.run(t.api,{columns:this.columns.map(s=>Tu(s)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(s=>[s.field,s]));this.columns=this.columns.map(s=>{const i=r.get(s.field);return i?{...s,label:i.label??s.label,type:i.type??s.type,renderer:i.renderer,script:i.script}:s})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=zt.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await oe(),r=(await n.store.tables.find()).filter(h=>h.workspaceId===n.workspaceId),s=t.toLowerCase(),i=r.find(h=>h.name.toLowerCase()===s&&h.id!==this.editTableId);if(i){this.errorMsg=`A table named "${i.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const h of this.columns){const p=h.field.trim();if(!p){this.errorMsg="Column field names cannot be empty.";return}if(o.has(p)){this.errorMsg=`Duplicate column field: ${p}`;return}o.add(p)}const l=this.tableTitle.trim(),u=this.columns.map(Tu);if(this.mode==="edit"&&this.editTableId){const h=this.editTableId,p=await n.store.tables.findOne(h),g=new Map((p?.columns??[]).map(S=>[S.field,S])),y=u.filter(S=>{const q=g.get(S.field);return S.unique&&!q?.unique||S.notnull&&!q?.notnull||S.max&&S.max>0&&S.max!==q?.max});if(y.length>0){const S=await n.store.rows(h).find(),q=jk(y,S);if(q.length>0){this.errorMsg=`Cannot save: ${q.length} existing ${q.length===1?"row violates":"rows violate"} the new constraints.
${q.slice(0,5).join(`
`)}${q.length>5?`
…and ${q.length-5} more.`:""}`;return}}const w=new Set(this.columns.map(S=>S.origField).filter(S=>!!S)),$=new Set(u.map(S=>S.field)),C=(p?.columns??[]).map(S=>S.field).filter(S=>!w.has(S)),P=p?.deletedColumns??[],R=[...new Set([...P,...C])].filter(S=>!$.has(S));let L=null;if(p&&p.name!==t){const S=(await n.store.viewInstances.find()).filter(ee=>ee.workspaceId===n.workspaceId);L=Sk(p.name,r,S,h);const q=Tk(L);if(q&&!await Pk(p.name,t,q))return}const G={name:t,title:l,columns:u,readonly:this.tableReadonly,updatedAt:Date.now()};(R.length>0||P.length>0)&&(G.deletedColumns=R);const z=p?.name;await n.store.tables.patch(h,G);const re=C.filter(S=>!$.has(S)),V=this.fieldRenames();if(!p?.source&&(re.length>0||V.length>0)){const S=await n.store.rows(h).find();for(const q of S){let ee=!1,te={...q.data};const ce=gc(te,V);ce&&(te=ce,ee=!0);for(const W of re)W in te&&(delete te[W],ee=!0);ee&&await n.store.rows(h).patch(q.id,{data:te,updatedAt:Date.now()})}}z!==void 0&&z!==t&&await Dk(h,z,t,L)}else await n.store.tables.insert({id:_e(),workspaceId:n.workspaceId,name:t,title:l,code:Oe(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return k`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(s=>({...s,data:gc(s.data,e)??s.data})):this.previewRows,n=new Map;for(const s of this.columns){if(!s.unique)continue;const i=new Set,o=new Set;for(const l of t){const u=l.data[s.field];u==null||u===""||(i.has(u)&&o.add(u),i.add(u))}n.set(s.field,o)}const r=this.columns.filter(s=>!s.hidden);return k`
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
                  ${r.map(i=>{const o=s.data[i.field],l=Mk(i,o,n.get(i.field));return k`<td class=${l?"violation":""} title=${l??""}>${Lk(o)}</td>`})}
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
              ${this.columns.map((n,r)=>{const s=this.dragSrcIdx===r,i=this.dropTargetIdx===r,o=i&&this.dropEdge==="before"?" drop-before":i&&this.dropEdge==="after"?" drop-after":"";return k`
                  <div
                    class=${`col-row${s?" drag-source":""}${o}`}
                    @dragover=${l=>this.onRowDragOver(l,r,l.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(r)}
                    @drop=${l=>this.onRowDrop(l,r)}
                  >
                    <span class="drag-handle" title="Drag to reorder" draggable="true" @dragstart=${l=>this.onRowDragStart(l,r)} @dragend=${()=>this.onRowDragEnd()}>
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <input type="text" .value=${n.field} @input=${l=>this.patchColumn(r,{field:l.target.value})} />
                    <input type="text" .value=${n.label} @input=${l=>this.patchColumn(r,{label:l.target.value})} />
                    <select
                      .value=${n.type}
                      @change=${l=>this.patchColumn(r,{type:l.target.value})}
                    >
                      ${Rk.map(l=>k`<option value=${l} ?selected=${l===n.type}>${l}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${l=>{const u=l.target.value;this.patchColumn(r,{renderer:u||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${Ok(this.rendererOptions,n.renderer).map(l=>k`<option value=${l} ?selected=${l===n.renderer}>${l}</option>`)}
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
                      <input type="checkbox" title="Unique" .checked=${!!n.unique} @change=${l=>this.patchColumn(r,{unique:l.target.checked})} />
                    </span>
                    <span class="flag">
                      <input type="checkbox" title="Not null" .checked=${!!n.notnull} @change=${l=>this.patchColumn(r,{notnull:l.target.checked})} />
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
    `}};Ke.styles=[xt,yt,Se`
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
    `];tt([B()],Ke.prototype,"mode",2);tt([B()],Ke.prototype,"editTableId",2);tt([B()],Ke.prototype,"name",2);tt([B()],Ke.prototype,"tableTitle",2);tt([B()],Ke.prototype,"tableReadonly",2);tt([B()],Ke.prototype,"columns",2);tt([B()],Ke.prototype,"errorMsg",2);tt([B()],Ke.prototype,"noticeMsg",2);tt([B()],Ke.prototype,"dragSrcIdx",2);tt([B()],Ke.prototype,"dropTargetIdx",2);tt([B()],Ke.prototype,"dropEdge",2);tt([B()],Ke.prototype,"previewRows",2);tt([B()],Ke.prototype,"rendererOptions",2);tt([B()],Ke.prototype,"columnActions",2);Ke=tt([Ie("new-table-dialog")],Ke);function Lk(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Mk(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const s=Number(t);if(!Number.isFinite(s))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const s=new Date(String(t));if(Number.isNaN(s.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function jk(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((s,i)=>{const o=s.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${i+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((s,i)=>{const o=s.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${i+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${i+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const s=new Map;t.forEach((i,o)=>{const l=i.data[r.field];l==null||l===""||(s.has(l)?n.push(`Row ${o+1}: ${r.label} duplicates row ${s.get(l)+1} ("${String(l)}").`):s.set(l,o))})}return n}var Nk=Object.defineProperty,zk=Object.getOwnPropertyDescriptor,nt=(e,t,n,r)=>{for(var s=r>1?void 0:r?zk(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Nk(t,n,s),s};const Uk='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',Fk=k`<span class="mi sm">extension</span>`,Ou="plugin:catalogUrls";function Os(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const Bk=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],$f=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],qk=new Map($f),Hk={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let Ve=class extends ke{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[Os()],this.activeCatalogUrl=Os(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e)}async open(){const e=await oe(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(i=>[i.url,i]));const r=await e.store.settings.findOne(Ou),s=Array.isArray(r?.value)?r.value.filter(i=>typeof i=="string"):[];this.catalogUrls=s.length>0?s:[Os()],this.activeCatalogUrl=this.catalogUrls[0]??Os(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(s=>({...s,absUrl:new URL(s.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await oe()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const s=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const i=await fetch(s,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const o=await i.json(),l=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=l.map(u=>({...u,absUrl:new URL(u.url,s).toString()})),this.serverCatalogError=null}catch(i){this.serverCatalog=[],this.serverCatalogError=i.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await oe()).store.settings.upsert({name:Ou,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await oe()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await oe();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await oe(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await oe();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await oe(),r=la(e),s=this.records.get(r);await n.store.plugins.upsert({...s??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:s?.lastFetched??0}),this.records=new Map(this.records.set(r,{...s,url:r,enabled:t,lastFetched:s?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await oe()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await oe();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const s=new Blob([r],{type:"text/javascript"}),i=URL.createObjectURL(s);try{const l=await import(i);await l.init?.(t.api),await l.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(i),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(l=>[l.url,l])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",s){const i=s?s[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return k`
      <button type="button" class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`} title=${i} aria-pressed=${t!==void 0} @click=${n}>
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of Gx){const s=r.fixed?!0:this.records.get(la(n))?.enabled!==!1,i=!r.fixed&&_t==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:s,status:s&&!i?"enabled":"disabled",fixed:!!r.fixed,...i?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),s=this.records.get(n.absUrl),i=r?["available","installed"]:["available"],o=e.get(n.id),l=s?.enabled!==!1,u=r&&_t!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...i]):new Set(i),enabled:l,...r?{status:l&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const s=this.records.get(n),i=s?.lastFetched?new Date(s.lastFetched).toLocaleString():"never",o=s?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:s?.lastError??`Last fetched: ${i}`,metaIsError:!!s?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&_t==="off"?"enabled":"disabled",..._t!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[u,h]of this.filterStates)(h==="on"?n:r).push(u);const s=[],i=[];for(const[u,h]of this.typeFilters)(h==="on"?s:i).push(u);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,l=e.filter(u=>!(n.length&&!n.some(h=>u.categories.has(h))||r.some(h=>u.categories.has(h))||s.length&&!(u.type&&s.includes(u.type))||u.type&&i.includes(u.type)||o&&u.status!==o));return t?l.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(h=>h?.toLowerCase().includes(t))):l}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return k`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}>
        <span class="row-icon">${e.icon?qn(e.icon):Fk}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?k`<span class="row-id">${e.id}</span>`:""}${e.type?k`<span class="row-type" title="Plugin type">${qk.get(e.type)??e.type}</span>`:""}${e.skipped?k`<span class="row-skipped" title="Safe mode kept this plugin from loading this session — your saved setting is unchanged">skipped</span>`:""}
          </div>
          ${e.meta?k`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?k`<a class="row-repo" href=${e.repo} target="_blank" rel="noopener noreferrer" title="View source on GitHub">${qn(Uk)}</a>`:k`<span></span>`}
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
                ${Bk.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",Hk)}
              </div>
              <div class="search">
                <input type="text" placeholder="Search plugins…" .value=${this.search} @input=${t=>this.search=t.target.value} />
              </div>
            </div>

            <div class="type-filters">
              <span class="filter-label">Type</span>
              ${$f.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
    `}};Ve.styles=[xt,yt,Se`
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
    `];nt([B()],Ve.prototype,"urls",2);nt([B()],Ve.prototype,"records",2);nt([B()],Ve.prototype,"addUrl",2);nt([B()],Ve.prototype,"catalog",2);nt([B()],Ve.prototype,"catalogError",2);nt([B()],Ve.prototype,"serverCatalog",2);nt([B()],Ve.prototype,"serverCatalogError",2);nt([B()],Ve.prototype,"installing",2);nt([B()],Ve.prototype,"catalogUrls",2);nt([B()],Ve.prototype,"activeCatalogUrl",2);nt([B()],Ve.prototype,"search",2);nt([B()],Ve.prototype,"filterStates",2);nt([B()],Ve.prototype,"typeFilters",2);nt([B()],Ve.prototype,"statusFilter",2);Ve=nt([Ie("plugin-manager-dialog")],Ve);var Kk=Object.defineProperty,Vk=Object.getOwnPropertyDescriptor,Gt=(e,t,n,r)=>{for(var s=r>1?void 0:r?Vk(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Kk(t,n,s),s};const Sr="__general__";let at=class extends ke{constructor(){super(...arguments),this.tabs=[],this.active=Sr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const s=r.names.map(i=>`“${i}”`).join(", ");this.secretError=`“${r.field.label}” references ${s}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$t(this.dialogEl,e),this.dialogEl&&yf("settings",this.dialogEl)}async open(){const e=await oe(),t=[...e.registries.settings];this.tabs=t.map(([i,o])=>({id:i,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},s={};for(const i of this.tabs)for(const o of i.fields){const l=`${i.id}:${o.key}`,u=await e.api.settings.placement(i.id,o.key);u==="user"?(r[l]=Vs(l),s[l]="user"):u==="workspace"?(r[l]=(await e.store.settings.findOne(l))?.value,s[l]="workspace"):(r[l]=o.default,s[l]=o.scope??"workspace")}this.values=r,this.placements=s,this.secretsText=Pr(),this.active=Sr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&at.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(Kn(this.secretsText)));return at.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await oe()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,s=n?"user":"workspace";this.placements={...this.placements,[r]:s},await(await oe()).api.settings.set(e.id,t.key,this.values[r],s)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,Yu(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await oe();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return k`<textarea .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)}></textarea>`;case"number":return k`<input
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
                  @change=${o=>{const u=o.target.checked?[...s,i]:s.filter(h=>h!==i);this.setValue(e,t,u)}}
                />${i}</label
              >`)}
        </div>`}case"string":default:return k`<input type="text" .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)} />`}}renderSecretControl(e,t,n){const r=Object.keys(Kn(this.secretsText)),s=at.rawSecret(n)||this.missingRefs(n).length>0;return k`<div class="secret-row">
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
            ${t.help?k`<p>${t.help}</p>`:ie} ${t.helpUrl?k`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer">${t.helpLinkLabel||Wk(t.helpUrl)}</a>`:ie}
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
    `}renderPanel(){if(this.active===Sr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?k`
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
                <button type="button" class=${this.active===Sr?"active":""} @click=${()=>this.active=Sr}>General</button>
                ${this.tabs.map(e=>k`<button type="button" class=${this.active===e.id?"active":""} @click=${()=>this.active=e.id}>${e.name}</button>`)}
              </nav>
              <section class="panel">${this.renderPanel()}</section>
            </div>
          </div>
        </form>
      </dialog>
    `}};at.styles=[xt,yt,Se`
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
    `];Gt([B()],at.prototype,"tabs",2);Gt([B()],at.prototype,"active",2);Gt([B()],at.prototype,"values",2);Gt([B()],at.prototype,"placements",2);Gt([B()],at.prototype,"secretsText",2);Gt([B()],at.prototype,"workspaceTitle",2);Gt([B()],at.prototype,"secretError",2);Gt([B()],at.prototype,"openHelp",2);at=Gt([Ie("settings-dialog")],at);function Wk(e){try{return new URL(e).host}catch{return e}}const xf=5,Du="palette:recent",kf="Recent";function Gk(e,t,n=xf){return[t,...e.filter(r=>r!==t)].slice(0,n)}function Yk(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,xf):[]}function Qk(e,t){if(t.length===0)return e;const n=new Map(e.map(i=>[i.id,i])),r=[];for(const i of t){const o=n.get(i);o&&r.push({...o,group:kf})}if(r.length===0)return e;const s=new Set(r.map(i=>i.id));return[...r,...e.filter(i=>!s.has(i.id))]}var Jk=Object.defineProperty,Xk=Object.getOwnPropertyDescriptor,ir=(e,t,n,r)=>{for(var s=r>1?void 0:r?Xk(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Jk(t,n,s),s};const Zk={[kf]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function Pu(e){return Zk[e]??3}function e1(e){return e?e.trimStart().startsWith("<svg")?k`<span class="cmd-svg">${ma(e)}</span>`:k`<span class="mi sm">${e}</span>`:k`<span class="mi sm">chevron_right</span>`}let cn=class extends ke{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await oe();this.api=e.api,this.recentIds=Yk((await e.api.store.settings.findOne(Du))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await oe(),t=e.api,n=[];for(const i of e.registries.commands)n.push({id:i.id,title:i.title,group:i.group??"Commands",...i.icon?{icon:i.icon}:{},haystack:[i.title,i.group,...i.keywords??[]].join(" ").toLowerCase(),run:()=>i.run(t)});for(const i of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${i.id}`,title:i.label,group:"Actions",...i.icon?{icon:i.icon}:{},haystack:`${i.label} ${i.tooltip??""}`.toLowerCase(),run:()=>i.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((i,o)=>i.name.localeCompare(o.name));for(const i of r)n.push({id:`goto:${i.id}`,title:`Go to: ${i.name}`,group:"Tables",icon:"table_chart",haystack:`${i.name} go to table`.toLowerCase(),run:()=>{Hh(i.id)}});const s=await t.store.viewInstances.find({workspaceId:e.workspaceId});s.sort((i,o)=>i.name.localeCompare(o.name));for(const i of s)n.push({id:`goto-view:${i.id}`,title:`Go to view: ${i.name}`,group:"Views",icon:"view_quilt",haystack:`${i.name} go to view`.toLowerCase(),run:async()=>{await sf(i.id)}});return Qk(n,this.recentIds).map((i,o)=>({it:i,i:o})).sort((i,o)=>Pu(i.it.group)-Pu(o.it.group)||i.i-o.i).map(({it:i})=>i)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=Gk(this.recentIds,e);try{await this.api?.store.settings.upsert({name:Du,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return k`
      <dialog @keydown=${this.onKeydown} @click=${this.onDialogClick} @close=${()=>this.search=""}>
        <div class="search-row">
          <span class="mi">search</span>
          <input type="text" placeholder="Type a command…  (windows, go to, import, export)" .value=${this.search} @input=${this.onInput} />
        </div>
        <div class="list">
          ${e.length===0?k`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const s=n.group!==t?(t=n.group,n.group):null;return k`
                  ${s?k`<div class="group-head">${s}</div>`:""}
                  <div class=${`item${r===this.selected?" sel":""}`} @mousemove=${()=>this.selected=r} @click=${()=>this.execute(n)}>
                    ${e1(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};cn.styles=[xt,Se`
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
    `];ir([B()],cn.prototype,"search",2);ir([B()],cn.prototype,"items",2);ir([B()],cn.prototype,"selected",2);ir([Ft("dialog")],cn.prototype,"dialogEl",2);ir([Ft("input")],cn.prototype,"inputEl",2);cn=ir([Ie("command-palette-dialog")],cn);var t1=Object.defineProperty,n1=Object.getOwnPropertyDescriptor,Cf=(e,t,n,r)=>{for(var s=r>1?void 0:r?n1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&t1(t,n,s),s};let ri=class extends ke{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await oe();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await Vh(),await X$()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?k``:k`<div class="empty">No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the page, or click <strong>+ New Table</strong> above.</div>`}};ri.styles=Se`
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
  `;Cf([B()],ri.prototype,"tables",2);ri=Cf([Ie("table-list")],ri);var r1=Object.defineProperty,s1=Object.getOwnPropertyDescriptor,cl=(e,t,n,r)=>{for(var s=r>1?void 0:r?s1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&r1(t,n,s),s};let Ur=class extends ke{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await oe();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);t&&Di(t.name)}render(){return k`
      <select .value=${this.current} @change=${e=>this.switchWorkspace(e.target.value)}>
        ${this.workspaces.map(e=>k`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${mf} title="New workspace">
        <span class="mi sm">add</span>
      </button>
      <button @click=${gf} title="Delete workspace">
        <span class="mi sm">delete</span>
      </button>
    `}};Ur.styles=[xt,Se`
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
    `];cl([B()],Ur.prototype,"workspaces",2);cl([B()],Ur.prototype,"current",2);Ur=cl([Ie("workspace-selector")],Ur);var Lu=Object.freeze,_f=Object.defineProperty,i1=Object.getOwnPropertyDescriptor,Tt=(e,t,n,r)=>{for(var s=r>1?void 0:r?i1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&_f(t,n,s),s},o1=(e,t)=>Lu(_f(e,"raw",{value:Lu(e.slice())})),Mu;function ju(e){return e?e.trimStart().startsWith("<svg")?k`<span class="icon-svg" aria-hidden="true">${ma(e)}</span>`:k`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let ct=class extends ke{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{zu(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{const t=e.relatedTarget;t&&(this.contains(t)||l1()?.contains(t))||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!zu(e))return;e.preventDefault();const t=await oe(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(s){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:s})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),document.addEventListener("dragover",this.onDragOver),document.addEventListener("dragleave",this.onDragLeave),document.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragover",this.onDragOver),document.removeEventListener("dragleave",this.onDragLeave),document.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await oe();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",a1(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return k` <button class="icon-btn" title=${e.tooltip??e.label} aria-label=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>${ju(e.icon)}</button> `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return k`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${ju(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return k(Mu||(Mu=o1([`
      <header>
        <strong
          >`,`
          <a class="version-link" href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md" target="_blank" rel="noopener" title="View the changelog on GitHub"
            ><span class="version">v0.0.306</span></a
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
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};ct.styles=[xt,Se`
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
    `];Tt([Ft("new-table-dialog")],ct.prototype,"dialog",2);Tt([Ft("csv-paste-dialog")],ct.prototype,"csvPasteDialog",2);Tt([Ft("plugin-manager-dialog")],ct.prototype,"pluginManagerDialog",2);Tt([Ft("settings-dialog")],ct.prototype,"settingsDialog",2);Tt([Ft("command-palette-dialog")],ct.prototype,"commandPaletteDialog",2);Tt([Ft("input.search")],ct.prototype,"searchInput",2);Tt([B()],ct.prototype,"footerButtons",2);Tt([B()],ct.prototype,"headerButtons",2);Tt([B()],ct.prototype,"searchQuery",2);Tt([B()],ct.prototype,"searchOpen",2);Tt([B()],ct.prototype,"workspaceTitle",2);ct=Tt([Ie("app-shell")],ct);const Nu=document.title;function a1(e){const t=e.trim();document.title=t?`${t} — ${Nu}`:Nu}function l1(){return document.getElementById("easydb-panels")}function zu(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([oe(),et(()=>Promise.resolve().then(()=>ef),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{ie as A,Se as a,k as b,vt as c,yt as d,x1 as g,ke as i,$t as m,B as r,Ie as t};
//# sourceMappingURL=index-CvDnG-hB.js.map
