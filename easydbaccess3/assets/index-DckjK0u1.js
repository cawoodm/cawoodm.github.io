(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const lg="modulepreload",cg=function(e){return"/easydbaccess3/"+e},Bc={},Re=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=o(n.map(d=>{if(d=cg(d),d in Bc)return;Bc[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const w=document.createElement("link");if(w.rel=p?"stylesheet":lg,p||(w.as="script"),w.crossOrigin="",w.href=d,c&&w.setAttribute("nonce",c),document.head.appendChild(w),p)return new Promise((y,k)=>{w.addEventListener("load",y),w.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ri=globalThis,Qa=ri.ShadowRoot&&(ri.ShadyCSS===void 0||ri.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ja=Symbol(),qc=new WeakMap;let Wd=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Ja)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Qa&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=qc.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&qc.set(n,t))}return t}toString(){return this.cssText}};const ug=e=>new Wd(typeof e=="string"?e:e+"",void 0,Ja),Se=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Wd(n,e,Ja)},dg=(e,t)=>{if(Qa)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=ri.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},Hc=Qa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ug(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hg,defineProperty:fg,getOwnPropertyDescriptor:pg,getOwnPropertyNames:mg,getOwnPropertySymbols:gg,getPrototypeOf:bg}=Object,Oi=globalThis,Kc=Oi.trustedTypes,wg=Kc?Kc.emptyScript:"",yg=Oi.reactiveElementPolyfillSupport,qr=(e,t)=>e,hi={toAttribute(e,t){switch(t){case Boolean:e=e?wg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Xa=(e,t)=>!hg(e,t),Vc={attribute:!0,type:String,converter:hi,reflect:!1,useDefault:!1,hasChanged:Xa};Symbol.metadata??=Symbol("metadata"),Oi.litPropertyMetadata??=new WeakMap;let Yn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Vc){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&fg(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:i}=pg(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:s,set(o){const a=s?.call(this);i?.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vc}static _$Ei(){if(this.hasOwnProperty(qr("elementProperties")))return;const t=bg(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(qr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qr("properties"))){const n=this.properties,r=[...mg(n),...gg(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(Hc(s))}else t!==void 0&&n.push(Hc(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dg(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:hi).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:hi;this._$Em=s;const a=o.fromAttribute(n,i.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,n,r,s=!1,i){if(t!==void 0){const o=this.constructor;if(s===!1&&(i=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??Xa)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r){const{wrapped:o}=i,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Yn.elementStyles=[],Yn.shadowRootOptions={mode:"open"},Yn[qr("elementProperties")]=new Map,Yn[qr("finalized")]=new Map,yg?.({ReactiveElement:Yn}),(Oi.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Za=globalThis,Wc=e=>e,fi=Za.trustedTypes,Gc=fi?fi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Gd="$lit$",ln=`lit$${Math.random().toFixed(9).slice(2)}$`,Yd="?"+ln,vg=`<${Yd}>`,On=document,Gr=()=>On.createComment(""),Yr=e=>e===null||typeof e!="object"&&typeof e!="function",el=Array.isArray,$g=e=>el(e)||typeof e?.[Symbol.iterator]=="function",na=`[ 	
\f\r]`,Dr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yc=/-->/g,Qc=/>/g,Cn=RegExp(`>|${na}(?:([^\\s"'>=/]+)(${na}*=${na}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jc=/'/g,Xc=/"/g,Qd=/^(?:script|style|textarea|title)$/i,kg=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),$=kg(1),Dn=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),Zc=new WeakMap,In=On.createTreeWalker(On,129);function Jd(e,t){if(!el(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gc!==void 0?Gc.createHTML(t):t}const xg=(e,t)=>{const n=e.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=Dr;for(let a=0;a<n;a++){const c=e[a];let d,p,m=-1,w=0;for(;w<c.length&&(o.lastIndex=w,p=o.exec(c),p!==null);)w=o.lastIndex,o===Dr?p[1]==="!--"?o=Yc:p[1]!==void 0?o=Qc:p[2]!==void 0?(Qd.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=Cn):p[3]!==void 0&&(o=Cn):o===Cn?p[0]===">"?(o=s??Dr,m=-1):p[1]===void 0?m=-2:(m=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?Cn:p[3]==='"'?Xc:Jc):o===Xc||o===Jc?o=Cn:o===Yc||o===Qc?o=Dr:(o=Cn,s=void 0);const y=o===Cn&&e[a+1].startsWith("/>")?" ":"";i+=o===Dr?c+vg:m>=0?(r.push(d),c.slice(0,m)+Gd+c.slice(m)+ln+y):c+ln+(m===-2?a:y)}return[Jd(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Qr{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=t.length-1,c=this.parts,[d,p]=xg(t,n);if(this.el=Qr.createElement(d,r),In.currentNode=this.el.content,n===2||n===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=In.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const m of s.getAttributeNames())if(m.endsWith(Gd)){const w=p[o++],y=s.getAttribute(m).split(ln),k=/([.?@])?(.*)/.exec(w);c.push({type:1,index:i,name:k[2],strings:y,ctor:k[1]==="."?Cg:k[1]==="?"?_g:k[1]==="@"?Eg:Di}),s.removeAttribute(m)}else m.startsWith(ln)&&(c.push({type:6,index:i}),s.removeAttribute(m));if(Qd.test(s.tagName)){const m=s.textContent.split(ln),w=m.length-1;if(w>0){s.textContent=fi?fi.emptyScript:"";for(let y=0;y<w;y++)s.append(m[y],Gr()),In.nextNode(),c.push({type:2,index:++i});s.append(m[w],Gr())}}}else if(s.nodeType===8)if(s.data===Yd)c.push({type:2,index:i});else{let m=-1;for(;(m=s.data.indexOf(ln,m+1))!==-1;)c.push({type:7,index:i}),m+=ln.length-1}i++}}static createElement(t,n){const r=On.createElement("template");return r.innerHTML=t,r}}function er(e,t,n=e,r){if(t===Dn)return t;let s=r!==void 0?n._$Co?.[r]:n._$Cl;const i=Yr(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=s:n._$Cl=s),s!==void 0&&(t=er(e,s._$AS(e,t.values),s,r)),t}class Sg{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=(t?.creationScope??On).importNode(n,!0);In.currentNode=s;let i=In.nextNode(),o=0,a=0,c=r[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new as(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new Tg(i,this,t)),this._$AV.push(d),c=r[++a]}o!==c?.index&&(i=In.nextNode(),o++)}return In.currentNode=On,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class as{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=er(this,t,n),Yr(t)?t===ie||t==null||t===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):t!==this._$AH&&t!==Dn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):$g(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ie&&Yr(this._$AH)?this._$AA.nextSibling.data=t:this.T(On.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Qr.createElement(Jd(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(n);else{const i=new Sg(s,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(t){let n=Zc.get(t.strings);return n===void 0&&Zc.set(t.strings,n=new Qr(t)),n}k(t){el(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of t)s===n.length?n.push(r=new as(this.O(Gr()),this.O(Gr()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=Wc(t).nextSibling;Wc(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Di{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,i){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ie}_$AI(t,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=er(this,t,n,0),o=!Yr(t)||t!==this._$AH&&t!==Dn,o&&(this._$AH=t);else{const a=t;let c,d;for(t=i[0],c=0;c<i.length-1;c++)d=er(this,a[r+c],n,c),d===Dn&&(d=this._$AH[c]),o||=!Yr(d)||d!==this._$AH[c],d===ie?t=ie:t!==ie&&(t+=(d??"")+i[c+1]),this._$AH[c]=d}o&&!s&&this.j(t)}j(t){t===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Cg extends Di{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ie?void 0:t}}class _g extends Di{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ie)}}class Eg extends Di{constructor(t,n,r,s,i){super(t,n,r,s,i),this.type=5}_$AI(t,n=this){if((t=er(this,t,n,0)??ie)===Dn)return;const r=this._$AH,s=t===ie&&r!==ie||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==ie&&(r===ie||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Tg{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){er(this,t)}}const Ig=Za.litHtmlPolyfillSupport;Ig?.(Qr,as),(Za.litHtmlVersions??=[]).push("3.3.3");const Ag=(e,t,n)=>{const r=n?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const i=n?.renderBefore??null;r._$litPart$=s=new as(t.insertBefore(Gr(),i),i,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tl=globalThis;let xe=class extends Yn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ag(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Dn}};xe._$litElement$=!0,xe.finalized=!0,tl.litElementHydrateSupport?.({LitElement:xe});const Rg=tl.litElementPolyfillSupport;Rg?.({LitElement:xe});(tl.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Og={attribute:!0,type:String,converter:hi,reflect:!1,hasChanged:Xa},Dg=(e=Og,t,n)=>{const{kind:r,metadata:s}=n;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,c,e,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(r==="setter"){const{name:o}=n;return function(a){const c=this[o];t.call(this,a),this.requestUpdate(o,c,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function St(e){return(t,n)=>typeof n=="object"?Dg(e,t,n):((r,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(e){return St({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lg=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kt(e,t){return(n,r,s)=>{const i=o=>o.renderRoot?.querySelector(e)??null;return Lg(n,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pg={CHILD:2},Xd=e=>(...t)=>({_$litDirective$:e,values:t});class Mg{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pi extends Mg{constructor(t){if(super(t),this.it=ie,t.type!==Pg.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ie||t==null)return this._t=void 0,this.it=t;if(t===Dn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}pi.directiveName="unsafeHTML",pi.resultType=1;const Xn=Xd(pi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ya extends pi{}ya.directiveName="unsafeSVG",ya.resultType=2;const nl=Xd(ya),ft=Se`
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
`;function pt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const eu=new WeakSet;function mt(e,t){if(eu.has(t))return;eu.add(t);let n=0,r=0,s=0,i=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",c=>{if(c.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=c.clientX,r=c.clientY;const p=e.getBoundingClientRect();s=p.left,i=p.top,t.setPointerCapture(c.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",c=>{if(!o)return;const d=c.clientX-n,p=c.clientY-r,m=-e.offsetWidth+80,w=window.innerWidth-80,y=0,k=window.innerHeight-40,x=Math.max(m,Math.min(w,s+d)),_=Math.max(y,Math.min(k,i+p));e.style.position="fixed",e.style.left=`${x}px`,e.style.top=`${_}px`,e.style.margin="0"});const a=c=>{if(o){o=!1;try{t.releasePointerCapture(c.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)}var jg=function(e,t,n,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};class ot extends xe{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=t=>{t.preventDefault();const n=this.current;n&&(n.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=t=>{t.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=t=>{if(t.preventDefault(),this.current?.kind!=="choice")return;const n=this.current.options[0];n!==void 0&&this.closeAndResolve(n)},this.submitAlert=t=>{t.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}static{this.instance=null}static{this.styles=[ft,Se`
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
    `]}connectedCallback(){super.connectedCallback(),ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),ot.instance===this&&(ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const t=this.shadowRoot?.querySelector(".dialog-header");t&&mt(this.dialogEl,t)}alert(t,n="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:n,message:t,resolve:r}})}async confirm(t,n="Confirm"){return await this.choice(t,["Yes","No"],n)==="Yes"}prompt(t,n="",r="Input"){return this.enqueue(s=>{this.current={kind:"prompt",title:r,message:t,value:n,resolve:s}})}choice(t,n,r="Choose"){return this.enqueue(s=>{this.current={kind:"choice",title:r,message:t,options:n,resolve:s}})}enqueue(t){return new Promise(n=>{const r=()=>{t(n),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(t){const n=this.current;n&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{n.kind==="alert"?n.resolve():n.resolve(t);const r=this.queue.shift();r&&r()}))}render(){const t=this.current;return $`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${t?this.renderBody(t):ie}
      </dialog>
    `}renderBody(t){switch(t.kind){case"alert":return $`
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
        `;case"prompt":return $`
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
        `;case"choice":return $`
          <form @submit=${this.submitChoice}>
            <div class="dialog-header">
              <h2>${t.title}</h2>
              <div class="header-actions">
                <button type="button" class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
              </div>
            </div>
            <div class="dialog-body">
              ${t.message?$`<p class="message">${t.message}</p>`:ie}
              <div class="choices">
                ${t.options.map((n,r)=>r===0?$`<button type="submit" class="choice primary" autofocus>${n}</button>`:$`<button type="button" class="choice" @click=${()=>this.closeAndResolve(n)}>${n}</button>`)}
              </div>
            </div>
          </form>
        `}}}jg([z()],ot.prototype,"current",void 0);function Ng(e="host-dialogs"){customElements.get(e)||customElements.define(e,ot)}const zg=Se`
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
`,tu=/(https?:\/\/[^\s)]+)/g;function Fg(e){const t=[];let n=0,r;for(tu.lastIndex=0;(r=tu.exec(e))!==null;)r.index>n&&t.push(e.slice(n,r.index)),t.push({url:r[0]}),n=r.index+r[0].length;return n===0?e:(n<e.length&&t.push(e.slice(n)),t.map(s=>typeof s=="string"?s:$`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`))}var Ug=function(e,t,n,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};class Rn extends xe{constructor(){super(...arguments),this.toasts=[],this.nextId=1}static{this.instance=null}static{this.styles=[zg,Se`
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
    `]}connectedCallback(){super.connectedCallback(),Rn.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rn.instance===this&&(Rn.instance=null)}show(t,n){const r={id:this.nextId++,kind:n?.kind??"info",message:t,...n?.title?{title:n.title}:{}};this.toasts=[...this.toasts,r];const s=n?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),s)}dismiss(t){const n=this.toasts.find(r=>r.id===t);n?.timer!=null&&window.clearTimeout(n.timer),this.toasts=this.toasts.filter(r=>r.id!==t)}render(){return $`
      ${this.toasts.map(t=>$`
          <div class="toast ${t.kind}" role="status">
            <span class="mi lg">${Bg(t.kind)}</span>
            <span class="body"> ${t.title?$`<strong>${t.title}</strong>`:""}${Fg(t.message)} </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(t.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}}Ug([z()],Rn.prototype,"toasts",void 0);function Bg(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function qg(e="toast-host"){customElements.get(e)||customElements.define(e,Rn)}var Hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var si={exports:{}},Vg=si.exports,nu;function Wg(){return nu||(nu=1,(function(e,t){(function(n,r){e.exports=r()})(Vg,function(){var n=function(l,u){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,f){h.__proto__=f}||function(h,f){for(var g in f)Object.prototype.hasOwnProperty.call(f,g)&&(h[g]=f[g])})(l,u)},r=function(){return(r=Object.assign||function(l){for(var u,h=1,f=arguments.length;h<f;h++)for(var g in u=arguments[h])Object.prototype.hasOwnProperty.call(u,g)&&(l[g]=u[g]);return l}).apply(this,arguments)};function s(l,u,h){for(var f,g=0,b=u.length;g<b;g++)!f&&g in u||((f=f||Array.prototype.slice.call(u,0,g))[g]=u[g]);return l.concat(f||Array.prototype.slice.call(u))}var i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Hg,o=Object.keys,a=Array.isArray;function c(l,u){return typeof u!="object"||o(u).forEach(function(h){l[h]=u[h]}),l}typeof Promise>"u"||i.Promise||(i.Promise=Promise);var d=Object.getPrototypeOf,p={}.hasOwnProperty;function m(l,u){return p.call(l,u)}function w(l,u){typeof u=="function"&&(u=u(d(l))),(typeof Reflect>"u"?o:Reflect.ownKeys)(u).forEach(function(h){k(l,h,u[h])})}var y=Object.defineProperty;function k(l,u,h,f){y(l,u,c(h&&m(h,"get")&&typeof h.get=="function"?{get:h.get,set:h.set,configurable:!0}:{value:h,configurable:!0,writable:!0},f))}function x(l){return{from:function(u){return l.prototype=Object.create(u.prototype),k(l.prototype,"constructor",l),{extend:w.bind(null,l.prototype)}}}}var _=Object.getOwnPropertyDescriptor,A=[].slice;function D(l,u,h){return A.call(l,u,h)}function G(l,u){return u(l)}function M(l){if(!l)throw new Error("Assertion Failed")}function re(l){i.setImmediate?setImmediate(l):setTimeout(l,0)}function W(l,u){if(typeof u=="string"&&m(l,u))return l[u];if(!u)return l;if(typeof u!="string"){for(var h=[],f=0,g=u.length;f<g;++f){var b=W(l,u[f]);h.push(b)}return h}var v=u.indexOf(".");if(v!==-1){var S=l[u.substr(0,v)];return S==null?void 0:W(S,u.substr(v+1))}}function T(l,u,h){if(l&&u!==void 0&&!("isFrozen"in Object&&Object.isFrozen(l)))if(typeof u!="string"&&"length"in u){M(typeof h!="string"&&"length"in h);for(var f=0,g=u.length;f<g;++f)T(l,u[f],h[f])}else{var b,v,S=u.indexOf(".");S!==-1?(b=u.substr(0,S),(v=u.substr(S+1))===""?h===void 0?a(l)&&!isNaN(parseInt(b))?l.splice(b,1):delete l[b]:l[b]=h:T(S=!(S=l[b])||!m(l,b)?l[b]={}:S,v,h)):h===void 0?a(l)&&!isNaN(parseInt(u))?l.splice(u,1):delete l[u]:l[u]=h}}function H(l){var u,h={};for(u in l)m(l,u)&&(h[u]=l[u]);return h}var J=[].concat;function de(l){return J.apply([],l)}var Wt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(de([8,16,32,64].map(function(l){return["Int","Uint","Float"].map(function(u){return u+l+"Array"})}))).filter(function(l){return i[l]}),ge=new Set(Wt.map(function(l){return i[l]})),q=null;function X(l){return q=new WeakMap,l=(function u(h){if(!h||typeof h!="object")return h;var f=q.get(h);if(f)return f;if(a(h)){f=[],q.set(h,f);for(var g=0,b=h.length;g<b;++g)f.push(u(h[g]))}else if(ge.has(h.constructor))f=h;else{var v,S=d(h);for(v in f=S===Object.prototype?{}:Object.create(S),q.set(h,f),h)m(h,v)&&(f[v]=u(h[v]))}return f})(l),q=null,l}var K={}.toString;function ae(l){return K.call(l).slice(8,-1)}var be=typeof Symbol<"u"?Symbol.iterator:"@@iterator",We=typeof be=="symbol"?function(l){var u;return l!=null&&(u=l[be])&&u.apply(l)}:function(){return null};function Pe(l,u){return u=l.indexOf(u),0<=u&&l.splice(u,1),0<=u}var Je={};function he(l){var u,h,f,g;if(arguments.length===1){if(a(l))return l.slice();if(this===Je&&typeof l=="string")return[l];if(g=We(l)){for(h=[];!(f=g.next()).done;)h.push(f.value);return h}if(l==null)return[l];if(typeof(u=l.length)!="number")return[l];for(h=new Array(u);u--;)h[u]=l[u];return h}for(u=arguments.length,h=new Array(u);u--;)h[u]=arguments[u];return h}var bt=typeof Symbol<"u"?function(l){return l[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},$r=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ct=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat($r),Dt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ue(l,u){this.name=l,this.message=u}function fe(l,u){return l+". Errors: "+Object.keys(u).map(function(h){return u[h].toString()}).filter(function(h,f,g){return g.indexOf(h)===f}).join(`
`)}function Le(l,u,h,f){this.failures=u,this.failedKeys=f,this.successCount=h,this.message=fe(l,u)}function pn(l,u){this.name="BulkError",this.failures=Object.keys(u).map(function(h){return u[h]}),this.failuresByPos=u,this.message=fe(l,this.failures)}x(Ue).from(Error).extend({toString:function(){return this.name+": "+this.message}}),x(Le).from(Ue),x(pn).from(Ue);var Un=Ct.reduce(function(l,u){return l[u]=u+"Error",l},{}),Rm=Ue,ue=Ct.reduce(function(l,u){var h=u+"Error";function f(g,b){this.name=h,g?typeof g=="string"?(this.message="".concat(g).concat(b?`
 `+b:""),this.inner=b||null):typeof g=="object"&&(this.message="".concat(g.name," ").concat(g.message),this.inner=g):(this.message=Dt[u]||h,this.inner=null)}return x(f).from(Rm),l[u]=f,l},{});ue.Syntax=SyntaxError,ue.Type=TypeError,ue.Range=RangeError;var lc=$r.reduce(function(l,u){return l[u+"Error"]=ue[u],l},{}),vs=Ct.reduce(function(l,u){return["Syntax","Type","Range"].indexOf(u)===-1&&(l[u+"Error"]=ue[u]),l},{});function _e(){}function yr(l){return l}function Om(l,u){return l==null||l===yr?u:function(h){return u(l(h))}}function mn(l,u){return function(){l.apply(this,arguments),u.apply(this,arguments)}}function Dm(l,u){return l===_e?u:function(){var h=l.apply(this,arguments);h!==void 0&&(arguments[0]=h);var f=this.onsuccess,g=this.onerror;this.onsuccess=null,this.onerror=null;var b=u.apply(this,arguments);return f&&(this.onsuccess=this.onsuccess?mn(f,this.onsuccess):f),g&&(this.onerror=this.onerror?mn(g,this.onerror):g),b!==void 0?b:h}}function Lm(l,u){return l===_e?u:function(){l.apply(this,arguments);var h=this.onsuccess,f=this.onerror;this.onsuccess=this.onerror=null,u.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?mn(h,this.onsuccess):h),f&&(this.onerror=this.onerror?mn(f,this.onerror):f)}}function Pm(l,u){return l===_e?u:function(h){var f=l.apply(this,arguments);c(h,f);var g=this.onsuccess,b=this.onerror;return this.onsuccess=null,this.onerror=null,h=u.apply(this,arguments),g&&(this.onsuccess=this.onsuccess?mn(g,this.onsuccess):g),b&&(this.onerror=this.onerror?mn(b,this.onerror):b),f===void 0?h===void 0?void 0:h:c(f,h)}}function Mm(l,u){return l===_e?u:function(){return u.apply(this,arguments)!==!1&&l.apply(this,arguments)}}function vo(l,u){return l===_e?u:function(){var h=l.apply(this,arguments);if(h&&typeof h.then=="function"){for(var f=this,g=arguments.length,b=new Array(g);g--;)b[g]=arguments[g];return h.then(function(){return u.apply(f,b)})}return u.apply(this,arguments)}}vs.ModifyError=Le,vs.DexieError=Ue,vs.BulkError=pn;var Ut=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function cc(l){Ut=l}var vr={},uc=100,Wt=typeof Promise>"u"?[]:(function(){var l=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[l,d(l),l];var u=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[u,d(u),l]})(),$r=Wt[0],Ct=Wt[1],Wt=Wt[2],Ct=Ct&&Ct.then,gn=$r&&$r.constructor,$o=!!Wt,kr=function(l,u){xr.push([l,u]),$s&&(queueMicrotask(Nm),$s=!1)},ko=!0,$s=!0,bn=[],ks=[],xo=yr,Zt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:_e,pgp:!1,env:{},finalize:_e},ce=Zt,xr=[],wn=0,xs=[];function oe(l){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var u=this._PSD=ce;if(typeof l!="function"){if(l!==vr)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Co(this,this._value))}this._state=null,this._value=null,++u.ref,(function h(f,g){try{g(function(b){if(f._state===null){if(b===f)throw new TypeError("A promise cannot be resolved with itself.");var v=f._lib&&Bn();b&&typeof b.then=="function"?h(f,function(S,E){b instanceof oe?b._then(S,E):b.then(S,E)}):(f._state=!0,f._value=b,hc(f)),v&&qn()}},Co.bind(null,f))}catch(b){Co(f,b)}})(this,l)}var So={get:function(){var l=ce,u=Es;function h(f,g){var b=this,v=!l.global&&(l!==ce||u!==Es),S=v&&!tn(),E=new oe(function(R,P){_o(b,new dc(pc(f,l,v,S),pc(g,l,v,S),R,P,l))});return this._consoleTask&&(E._consoleTask=this._consoleTask),E}return h.prototype=vr,h},set:function(l){k(this,"then",l&&l.prototype===vr?So:{get:function(){return l},set:So.set})}};function dc(l,u,h,f,g){this.onFulfilled=typeof l=="function"?l:null,this.onRejected=typeof u=="function"?u:null,this.resolve=h,this.reject=f,this.psd=g}function Co(l,u){var h,f;ks.push(u),l._state===null&&(h=l._lib&&Bn(),u=xo(u),l._state=!1,l._value=u,f=l,bn.some(function(g){return g._value===f._value})||bn.push(f),hc(l),h&&qn())}function hc(l){var u=l._listeners;l._listeners=[];for(var h=0,f=u.length;h<f;++h)_o(l,u[h]);var g=l._PSD;--g.ref||g.finalize(),wn===0&&(++wn,kr(function(){--wn==0&&Eo()},[]))}function _o(l,u){if(l._state!==null){var h=l._state?u.onFulfilled:u.onRejected;if(h===null)return(l._state?u.resolve:u.reject)(l._value);++u.psd.ref,++wn,kr(jm,[h,l,u])}else l._listeners.push(u)}function jm(l,u,h){try{var f,g=u._value;!u._state&&ks.length&&(ks=[]),f=Ut&&u._consoleTask?u._consoleTask.run(function(){return l(g)}):l(g),u._state||ks.indexOf(g)!==-1||(function(b){for(var v=bn.length;v;)if(bn[--v]._value===b._value)return bn.splice(v,1)})(u),h.resolve(f)}catch(b){h.reject(b)}finally{--wn==0&&Eo(),--h.psd.ref||h.psd.finalize()}}function Nm(){yn(Zt,function(){Bn()&&qn()})}function Bn(){var l=ko;return $s=ko=!1,l}function qn(){var l,u,h;do for(;0<xr.length;)for(l=xr,xr=[],h=l.length,u=0;u<h;++u){var f=l[u];f[0].apply(null,f[1])}while(0<xr.length);$s=ko=!0}function Eo(){var l=bn;bn=[],l.forEach(function(f){f._PSD.onunhandled.call(null,f._value,f)});for(var u=xs.slice(0),h=u.length;h;)u[--h]()}function Ss(l){return new oe(vr,!1,l)}function Ae(l,u){var h=ce;return function(){var f=Bn(),g=ce;try{return nn(h,!0),l.apply(this,arguments)}catch(b){u&&u(b)}finally{nn(g,!1),f&&qn()}}}w(oe.prototype,{then:So,_then:function(l,u){_o(this,new dc(null,null,l,u,ce))},catch:function(l){if(arguments.length===1)return this.then(null,l);var u=l,h=arguments[1];return typeof u=="function"?this.then(null,function(f){return(f instanceof u?h:Ss)(f)}):this.then(null,function(f){return(f&&f.name===u?h:Ss)(f)})},finally:function(l){return this.then(function(u){return oe.resolve(l()).then(function(){return u})},function(u){return oe.resolve(l()).then(function(){return Ss(u)})})},timeout:function(l,u){var h=this;return l<1/0?new oe(function(f,g){var b=setTimeout(function(){return g(new ue.Timeout(u))},l);h.then(f,g).finally(clearTimeout.bind(null,b))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&k(oe.prototype,Symbol.toStringTag,"Dexie.Promise"),Zt.env=fc(),w(oe,{all:function(){var l=he.apply(null,arguments).map(Ts);return new oe(function(u,h){l.length===0&&u([]);var f=l.length;l.forEach(function(g,b){return oe.resolve(g).then(function(v){l[b]=v,--f||u(l)},h)})})},resolve:function(l){return l instanceof oe?l:l&&typeof l.then=="function"?new oe(function(u,h){l.then(u,h)}):new oe(vr,!0,l)},reject:Ss,race:function(){var l=he.apply(null,arguments).map(Ts);return new oe(function(u,h){l.map(function(f){return oe.resolve(f).then(u,h)})})},PSD:{get:function(){return ce},set:function(l){return ce=l}},totalEchoes:{get:function(){return Es}},newPSD:en,usePSD:yn,scheduler:{get:function(){return kr},set:function(l){kr=l}},rejectionMapper:{get:function(){return xo},set:function(l){xo=l}},follow:function(l,u){return new oe(function(h,f){return en(function(g,b){var v=ce;v.unhandleds=[],v.onunhandled=b,v.finalize=mn(function(){var S,E=this;S=function(){E.unhandleds.length===0?g():b(E.unhandleds[0])},xs.push(function R(){S(),xs.splice(xs.indexOf(R),1)}),++wn,kr(function(){--wn==0&&Eo()},[])},v.finalize),l()},u,h,f)})}}),gn&&(gn.allSettled&&k(oe,"allSettled",function(){var l=he.apply(null,arguments).map(Ts);return new oe(function(u){l.length===0&&u([]);var h=l.length,f=new Array(h);l.forEach(function(g,b){return oe.resolve(g).then(function(v){return f[b]={status:"fulfilled",value:v}},function(v){return f[b]={status:"rejected",reason:v}}).then(function(){return--h||u(f)})})})}),gn.any&&typeof AggregateError<"u"&&k(oe,"any",function(){var l=he.apply(null,arguments).map(Ts);return new oe(function(u,h){l.length===0&&h(new AggregateError([]));var f=l.length,g=new Array(f);l.forEach(function(b,v){return oe.resolve(b).then(function(S){return u(S)},function(S){g[v]=S,--f||h(new AggregateError(g))})})})}),gn.withResolvers&&(oe.withResolvers=gn.withResolvers));var Be={awaits:0,echoes:0,id:0},zm=0,Cs=[],_s=0,Es=0,Fm=0;function en(l,u,h,f){var g=ce,b=Object.create(g);return b.parent=g,b.ref=0,b.global=!1,b.id=++Fm,Zt.env,b.env=$o?{Promise:oe,PromiseProp:{value:oe,configurable:!0,writable:!0},all:oe.all,race:oe.race,allSettled:oe.allSettled,any:oe.any,resolve:oe.resolve,reject:oe.reject}:{},u&&c(b,u),++g.ref,b.finalize=function(){--this.parent.ref||this.parent.finalize()},f=yn(b,l,h,f),b.ref===0&&b.finalize(),f}function Hn(){return Be.id||(Be.id=++zm),++Be.awaits,Be.echoes+=uc,Be.id}function tn(){return!!Be.awaits&&(--Be.awaits==0&&(Be.id=0),Be.echoes=Be.awaits*uc,!0)}function Ts(l){return Be.echoes&&l&&l.constructor===gn?(Hn(),l.then(function(u){return tn(),u},function(u){return tn(),je(u)})):l}function Um(){var l=Cs[Cs.length-1];Cs.pop(),nn(l,!1)}function nn(l,u){var h,f=ce;(u?!Be.echoes||_s++&&l===ce:!_s||--_s&&l===ce)||queueMicrotask(u?function(g){++Es,Be.echoes&&--Be.echoes!=0||(Be.echoes=Be.awaits=Be.id=0),Cs.push(ce),nn(g,!0)}.bind(null,l):Um),l!==ce&&(ce=l,f===Zt&&(Zt.env=fc()),$o&&(h=Zt.env.Promise,u=l.env,(f.global||l.global)&&(Object.defineProperty(i,"Promise",u.PromiseProp),h.all=u.all,h.race=u.race,h.resolve=u.resolve,h.reject=u.reject,u.allSettled&&(h.allSettled=u.allSettled),u.any&&(h.any=u.any))))}function fc(){var l=i.Promise;return $o?{Promise:l,PromiseProp:Object.getOwnPropertyDescriptor(i,"Promise"),all:l.all,race:l.race,allSettled:l.allSettled,any:l.any,resolve:l.resolve,reject:l.reject}:{}}function yn(l,u,h,f,g){var b=ce;try{return nn(l,!0),u(h,f,g)}finally{nn(b,!1)}}function pc(l,u,h,f){return typeof l!="function"?l:function(){var g=ce;h&&Hn(),nn(u,!0);try{return l.apply(this,arguments)}finally{nn(g,!1),f&&queueMicrotask(tn)}}}function To(l){Promise===gn&&Be.echoes===0?_s===0?l():enqueueNativeMicroTask(l):setTimeout(l,0)}(""+Ct).indexOf("[native code]")===-1&&(Hn=tn=_e);var je=oe.reject,vn="￿",Vt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",mc="String expected.",Kn=[],Is="__dbnames",Io="readonly",Ao="readwrite";function $n(l,u){return l?u?function(){return l.apply(this,arguments)&&u.apply(this,arguments)}:l:u}var gc={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function As(l){return typeof l!="string"||/\./.test(l)?function(u){return u}:function(u){return u[l]===void 0&&l in u&&delete(u=X(u))[l],u}}function bc(){throw ue.Type()}function $e(l,u){try{var h=wc(l),f=wc(u);if(h!==f)return h==="Array"?1:f==="Array"?-1:h==="binary"?1:f==="binary"?-1:h==="string"?1:f==="string"?-1:h==="Date"?1:f!=="Date"?NaN:-1;switch(h){case"number":case"Date":case"string":return u<l?1:l<u?-1:0;case"binary":return(function(g,b){for(var v=g.length,S=b.length,E=v<S?v:S,R=0;R<E;++R)if(g[R]!==b[R])return g[R]<b[R]?-1:1;return v===S?0:v<S?-1:1})(yc(l),yc(u));case"Array":return(function(g,b){for(var v=g.length,S=b.length,E=v<S?v:S,R=0;R<E;++R){var P=$e(g[R],b[R]);if(P!==0)return P}return v===S?0:v<S?-1:1})(l,u)}}catch{}return NaN}function wc(l){var u=typeof l;return u!="object"?u:ArrayBuffer.isView(l)?"binary":(l=ae(l),l==="ArrayBuffer"?"binary":l)}function yc(l){return l instanceof Uint8Array?l:ArrayBuffer.isView(l)?new Uint8Array(l.buffer,l.byteOffset,l.byteLength):new Uint8Array(l)}var vc=(Ie.prototype._trans=function(l,u,h){var f=this._tx||ce.trans,g=this.name,b=Ut&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(l==="readonly"?"read":"write"," ").concat(this.name));function v(R,P,C){if(!C.schema[g])throw new ue.NotFound("Table "+g+" not part of transaction");return u(C.idbtrans,C)}var S=Bn();try{var E=f&&f.db._novip===this.db._novip?f===ce.trans?f._promise(l,v,h):en(function(){return f._promise(l,v,h)},{trans:f,transless:ce.transless||ce}):(function R(P,C,N,I){if(P.idbdb&&(P._state.openComplete||ce.letThrough||P._vip)){var L=P._createTransaction(C,N,P._dbSchema);try{L.create(),P._state.PR1398_maxLoop=3}catch(j){return j.name===Un.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return R(P,C,N,I)})):je(j)}return L._promise(C,function(j,O){return en(function(){return ce.trans=L,I(j,O,L)})}).then(function(j){if(C==="readwrite")try{L.idbtrans.commit()}catch{}return C==="readonly"?j:L._completion.then(function(){return j})})}if(P._state.openComplete)return je(new ue.DatabaseClosed(P._state.dbOpenError));if(!P._state.isBeingOpened){if(!P._state.autoOpen)return je(new ue.DatabaseClosed);P.open().catch(_e)}return P._state.dbReadyPromise.then(function(){return R(P,C,N,I)})})(this.db,l,[this.name],v);return b&&(E._consoleTask=b,E=E.catch(function(R){return console.trace(R),je(R)})),E}finally{S&&qn()}},Ie.prototype.get=function(l,u){var h=this;return l&&l.constructor===Object?this.where(l).first(u):l==null?je(new ue.Type("Invalid argument to Table.get()")):this._trans("readonly",function(f){return h.core.get({trans:f,key:l}).then(function(g){return h.hook.reading.fire(g)})}).then(u)},Ie.prototype.where=function(l){if(typeof l=="string")return new this.db.WhereClause(this,l);if(a(l))return new this.db.WhereClause(this,"[".concat(l.join("+"),"]"));var u=o(l);if(u.length===1)return this.where(u[0]).equals(l[u[0]]);var h=this.schema.indexes.concat(this.schema.primKey).filter(function(S){if(S.compound&&u.every(function(R){return 0<=S.keyPath.indexOf(R)})){for(var E=0;E<u.length;++E)if(u.indexOf(S.keyPath[E])===-1)return!1;return!0}return!1}).sort(function(S,E){return S.keyPath.length-E.keyPath.length})[0];if(h&&this.db._maxKey!==vn){var b=h.keyPath.slice(0,u.length);return this.where(b).equals(b.map(function(E){return l[E]}))}!h&&Ut&&console.warn("The query ".concat(JSON.stringify(l)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(u.join("+"),"]"));var f=this.schema.idxByName;function g(S,E){return $e(S,E)===0}var v=u.reduce(function(C,E){var R=C[0],P=C[1],C=f[E],N=l[E];return[R||C,R||!C?$n(P,C&&C.multi?function(I){return I=W(I,E),a(I)&&I.some(function(L){return g(N,L)})}:function(I){return g(N,W(I,E))}):P]},[null,null]),b=v[0],v=v[1];return b?this.where(b.name).equals(l[b.keyPath]).filter(v):h?this.filter(v):this.where(u).equals("")},Ie.prototype.filter=function(l){return this.toCollection().and(l)},Ie.prototype.count=function(l){return this.toCollection().count(l)},Ie.prototype.offset=function(l){return this.toCollection().offset(l)},Ie.prototype.limit=function(l){return this.toCollection().limit(l)},Ie.prototype.each=function(l){return this.toCollection().each(l)},Ie.prototype.toArray=function(l){return this.toCollection().toArray(l)},Ie.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ie.prototype.orderBy=function(l){return new this.db.Collection(new this.db.WhereClause(this,a(l)?"[".concat(l.join("+"),"]"):l))},Ie.prototype.reverse=function(){return this.toCollection().reverse()},Ie.prototype.mapToClass=function(l){var u,h=this.db,f=this.name;function g(){return u!==null&&u.apply(this,arguments)||this}(this.schema.mappedClass=l).prototype instanceof bc&&((function(E,R){if(typeof R!="function"&&R!==null)throw new TypeError("Class extends value "+String(R)+" is not a constructor or null");function P(){this.constructor=E}n(E,R),E.prototype=R===null?Object.create(R):(P.prototype=R.prototype,new P)})(g,u=l),Object.defineProperty(g.prototype,"db",{get:function(){return h},enumerable:!1,configurable:!0}),g.prototype.table=function(){return f},l=g);for(var b=new Set,v=l.prototype;v;v=d(v))Object.getOwnPropertyNames(v).forEach(function(E){return b.add(E)});function S(E){if(!E)return E;var R,P=Object.create(l.prototype);for(R in E)if(!b.has(R))try{P[R]=E[R]}catch{}return P}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=S,this.hook("reading",S),l},Ie.prototype.defineClass=function(){return this.mapToClass(function(l){c(this,l)})},Ie.prototype.add=function(l,u){var h=this,f=this.schema.primKey,g=f.auto,b=f.keyPath,v=l;return b&&g&&(v=As(b)(l)),this._trans("readwrite",function(S){return h.core.mutate({trans:S,type:"add",keys:u!=null?[u]:null,values:[v]})}).then(function(S){return S.numFailures?oe.reject(S.failures[0]):S.lastResult}).then(function(S){if(b)try{T(l,b,S)}catch{}return S})},Ie.prototype.update=function(l,u){return typeof l!="object"||a(l)?this.where(":id").equals(l).modify(u):(l=W(l,this.schema.primKey.keyPath),l===void 0?je(new ue.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(l).modify(u))},Ie.prototype.put=function(l,u){var h=this,f=this.schema.primKey,g=f.auto,b=f.keyPath,v=l;return b&&g&&(v=As(b)(l)),this._trans("readwrite",function(S){return h.core.mutate({trans:S,type:"put",values:[v],keys:u!=null?[u]:null})}).then(function(S){return S.numFailures?oe.reject(S.failures[0]):S.lastResult}).then(function(S){if(b)try{T(l,b,S)}catch{}return S})},Ie.prototype.delete=function(l){var u=this;return this._trans("readwrite",function(h){return u.core.mutate({trans:h,type:"delete",keys:[l]})}).then(function(h){return h.numFailures?oe.reject(h.failures[0]):void 0})},Ie.prototype.clear=function(){var l=this;return this._trans("readwrite",function(u){return l.core.mutate({trans:u,type:"deleteRange",range:gc})}).then(function(u){return u.numFailures?oe.reject(u.failures[0]):void 0})},Ie.prototype.bulkGet=function(l){var u=this;return this._trans("readonly",function(h){return u.core.getMany({keys:l,trans:h}).then(function(f){return f.map(function(g){return u.hook.reading.fire(g)})})})},Ie.prototype.bulkAdd=function(l,u,h){var f=this,g=Array.isArray(u)?u:void 0,b=(h=h||(g?void 0:u))?h.allKeys:void 0;return this._trans("readwrite",function(v){var R=f.schema.primKey,S=R.auto,R=R.keyPath;if(R&&g)throw new ue.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(g&&g.length!==l.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var E=l.length,R=R&&S?l.map(As(R)):l;return f.core.mutate({trans:v,type:"add",keys:g,values:R,wantResults:b}).then(function(L){var C=L.numFailures,N=L.results,I=L.lastResult,L=L.failures;if(C===0)return b?N:I;throw new pn("".concat(f.name,".bulkAdd(): ").concat(C," of ").concat(E," operations failed"),L)})})},Ie.prototype.bulkPut=function(l,u,h){var f=this,g=Array.isArray(u)?u:void 0,b=(h=h||(g?void 0:u))?h.allKeys:void 0;return this._trans("readwrite",function(v){var R=f.schema.primKey,S=R.auto,R=R.keyPath;if(R&&g)throw new ue.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(g&&g.length!==l.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var E=l.length,R=R&&S?l.map(As(R)):l;return f.core.mutate({trans:v,type:"put",keys:g,values:R,wantResults:b}).then(function(L){var C=L.numFailures,N=L.results,I=L.lastResult,L=L.failures;if(C===0)return b?N:I;throw new pn("".concat(f.name,".bulkPut(): ").concat(C," of ").concat(E," operations failed"),L)})})},Ie.prototype.bulkUpdate=function(l){var u=this,h=this.core,f=l.map(function(v){return v.key}),g=l.map(function(v){return v.changes}),b=[];return this._trans("readwrite",function(v){return h.getMany({trans:v,keys:f,cache:"clone"}).then(function(S){var E=[],R=[];l.forEach(function(C,N){var I=C.key,L=C.changes,j=S[N];if(j){for(var O=0,F=Object.keys(L);O<F.length;O++){var U=F[O],B=L[U];if(U===u.schema.primKey.keyPath){if($e(B,I)!==0)throw new ue.Constraint("Cannot update primary key in bulkUpdate()")}else T(j,U,B)}b.push(N),E.push(I),R.push(j)}});var P=E.length;return h.mutate({trans:v,type:"put",keys:E,values:R,updates:{keys:f,changeSpecs:g}}).then(function(C){var N=C.numFailures,I=C.failures;if(N===0)return P;for(var L=0,j=Object.keys(I);L<j.length;L++){var O,F=j[L],U=b[Number(F)];U!=null&&(O=I[F],delete I[F],I[U]=O)}throw new pn("".concat(u.name,".bulkUpdate(): ").concat(N," of ").concat(P," operations failed"),I)})})})},Ie.prototype.bulkDelete=function(l){var u=this,h=l.length;return this._trans("readwrite",function(f){return u.core.mutate({trans:f,type:"delete",keys:l})}).then(function(v){var g=v.numFailures,b=v.lastResult,v=v.failures;if(g===0)return b;throw new pn("".concat(u.name,".bulkDelete(): ").concat(g," of ").concat(h," operations failed"),v)})},Ie);function Ie(){}function Sr(l){function u(v,S){if(S){for(var E=arguments.length,R=new Array(E-1);--E;)R[E-1]=arguments[E];return h[v].subscribe.apply(null,R),l}if(typeof v=="string")return h[v]}var h={};u.addEventType=b;for(var f=1,g=arguments.length;f<g;++f)b(arguments[f]);return u;function b(v,S,E){if(typeof v!="object"){var R;S=S||Mm;var P={subscribers:[],fire:E=E||_e,subscribe:function(C){P.subscribers.indexOf(C)===-1&&(P.subscribers.push(C),P.fire=S(P.fire,C))},unsubscribe:function(C){P.subscribers=P.subscribers.filter(function(N){return N!==C}),P.fire=P.subscribers.reduce(S,E)}};return h[v]=u[v]=P}o(R=v).forEach(function(C){var N=R[C];if(a(N))b(C,R[C][0],R[C][1]);else{if(N!=="asap")throw new ue.InvalidArgument("Invalid event config");var I=b(C,yr,function(){for(var L=arguments.length,j=new Array(L);L--;)j[L]=arguments[L];I.subscribers.forEach(function(O){re(function(){O.apply(null,j)})})})}})}}function Cr(l,u){return x(u).from({prototype:l}),u}function Vn(l,u){return!(l.filter||l.algorithm||l.or)&&(u?l.justLimit:!l.replayFilter)}function Ro(l,u){l.filter=$n(l.filter,u)}function Oo(l,u,h){var f=l.replayFilter;l.replayFilter=f?function(){return $n(f(),u())}:u,l.justLimit=h&&!f}function Rs(l,u){if(l.isPrimKey)return u.primaryKey;var h=u.getIndexByKeyPath(l.index);if(!h)throw new ue.Schema("KeyPath "+l.index+" on object store "+u.name+" is not indexed");return h}function $c(l,u,h){var f=Rs(l,u.schema);return u.openCursor({trans:h,values:!l.keysOnly,reverse:l.dir==="prev",unique:!!l.unique,query:{index:f,range:l.range}})}function Os(l,u,h,f){var g=l.replayFilter?$n(l.filter,l.replayFilter()):l.filter;if(l.or){var b={},v=function(S,E,R){var P,C;g&&!g(E,R,function(N){return E.stop(N)},function(N){return E.fail(N)})||((C=""+(P=E.primaryKey))=="[object ArrayBuffer]"&&(C=""+new Uint8Array(P)),m(b,C)||(b[C]=!0,u(S,E,R)))};return Promise.all([l.or._iterate(v,h),kc($c(l,f,h),l.algorithm,v,!l.keysOnly&&l.valueMapper)])}return kc($c(l,f,h),$n(l.algorithm,g),u,!l.keysOnly&&l.valueMapper)}function kc(l,u,h,f){var g=Ae(f?function(b,v,S){return h(f(b),v,S)}:h);return l.then(function(b){if(b)return b.start(function(){var v=function(){return b.continue()};u&&!u(b,function(S){return v=S},function(S){b.stop(S),v=_e},function(S){b.fail(S),v=_e})||g(b.value,b,function(S){return v=S}),v()})})}var Wt=Symbol(),_r=(xc.prototype.execute=function(l){if(this.add!==void 0){var u=this.add;if(a(u))return s(s([],a(l)?l:[],!0),u).sort();if(typeof u=="number")return(Number(l)||0)+u;if(typeof u=="bigint")try{return BigInt(l)+u}catch{return BigInt(0)+u}throw new TypeError("Invalid term ".concat(u))}if(this.remove!==void 0){var h=this.remove;if(a(h))return a(l)?l.filter(function(f){return!h.includes(f)}).sort():[];if(typeof h=="number")return Number(l)-h;if(typeof h=="bigint")try{return BigInt(l)-h}catch{return BigInt(0)-h}throw new TypeError("Invalid subtrahend ".concat(h))}return u=(u=this.replacePrefix)===null||u===void 0?void 0:u[0],u&&typeof l=="string"&&l.startsWith(u)?this.replacePrefix[1]+l.substring(u.length):l},xc);function xc(l){Object.assign(this,l)}var Bm=(ke.prototype._read=function(l,u){var h=this._ctx;return h.error?h.table._trans(null,je.bind(null,h.error)):h.table._trans("readonly",l).then(u)},ke.prototype._write=function(l){var u=this._ctx;return u.error?u.table._trans(null,je.bind(null,u.error)):u.table._trans("readwrite",l,"locked")},ke.prototype._addAlgorithm=function(l){var u=this._ctx;u.algorithm=$n(u.algorithm,l)},ke.prototype._iterate=function(l,u){return Os(this._ctx,l,u,this._ctx.table.core)},ke.prototype.clone=function(l){var u=Object.create(this.constructor.prototype),h=Object.create(this._ctx);return l&&c(h,l),u._ctx=h,u},ke.prototype.raw=function(){return this._ctx.valueMapper=null,this},ke.prototype.each=function(l){var u=this._ctx;return this._read(function(h){return Os(u,l,h,u.table.core)})},ke.prototype.count=function(l){var u=this;return this._read(function(h){var f=u._ctx,g=f.table.core;if(Vn(f,!0))return g.count({trans:h,query:{index:Rs(f,g.schema),range:f.range}}).then(function(v){return Math.min(v,f.limit)});var b=0;return Os(f,function(){return++b,!1},h,g).then(function(){return b})}).then(l)},ke.prototype.sortBy=function(l,u){var h=l.split(".").reverse(),f=h[0],g=h.length-1;function b(E,R){return R?b(E[h[R]],R-1):E[f]}var v=this._ctx.dir==="next"?1:-1;function S(E,R){return $e(b(E,g),b(R,g))*v}return this.toArray(function(E){return E.sort(S)}).then(u)},ke.prototype.toArray=function(l){var u=this;return this._read(function(h){var f=u._ctx;if(f.dir==="next"&&Vn(f,!0)&&0<f.limit){var g=f.valueMapper,b=Rs(f,f.table.core.schema);return f.table.core.query({trans:h,limit:f.limit,values:!0,query:{index:b,range:f.range}}).then(function(S){return S=S.result,g?S.map(g):S})}var v=[];return Os(f,function(S){return v.push(S)},h,f.table.core).then(function(){return v})},l)},ke.prototype.offset=function(l){var u=this._ctx;return l<=0||(u.offset+=l,Vn(u)?Oo(u,function(){var h=l;return function(f,g){return h===0||(h===1?--h:g(function(){f.advance(h),h=0}),!1)}}):Oo(u,function(){var h=l;return function(){return--h<0}})),this},ke.prototype.limit=function(l){return this._ctx.limit=Math.min(this._ctx.limit,l),Oo(this._ctx,function(){var u=l;return function(h,f,g){return--u<=0&&f(g),0<=u}},!0),this},ke.prototype.until=function(l,u){return Ro(this._ctx,function(h,f,g){return!l(h.value)||(f(g),u)}),this},ke.prototype.first=function(l){return this.limit(1).toArray(function(u){return u[0]}).then(l)},ke.prototype.last=function(l){return this.reverse().first(l)},ke.prototype.filter=function(l){var u;return Ro(this._ctx,function(h){return l(h.value)}),(u=this._ctx).isMatch=$n(u.isMatch,l),this},ke.prototype.and=function(l){return this.filter(l)},ke.prototype.or=function(l){return new this.db.WhereClause(this._ctx.table,l,this)},ke.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ke.prototype.desc=function(){return this.reverse()},ke.prototype.eachKey=function(l){var u=this._ctx;return u.keysOnly=!u.isMatch,this.each(function(h,f){l(f.key,f)})},ke.prototype.eachUniqueKey=function(l){return this._ctx.unique="unique",this.eachKey(l)},ke.prototype.eachPrimaryKey=function(l){var u=this._ctx;return u.keysOnly=!u.isMatch,this.each(function(h,f){l(f.primaryKey,f)})},ke.prototype.keys=function(l){var u=this._ctx;u.keysOnly=!u.isMatch;var h=[];return this.each(function(f,g){h.push(g.key)}).then(function(){return h}).then(l)},ke.prototype.primaryKeys=function(l){var u=this._ctx;if(u.dir==="next"&&Vn(u,!0)&&0<u.limit)return this._read(function(f){var g=Rs(u,u.table.core.schema);return u.table.core.query({trans:f,values:!1,limit:u.limit,query:{index:g,range:u.range}})}).then(function(f){return f.result}).then(l);u.keysOnly=!u.isMatch;var h=[];return this.each(function(f,g){h.push(g.primaryKey)}).then(function(){return h}).then(l)},ke.prototype.uniqueKeys=function(l){return this._ctx.unique="unique",this.keys(l)},ke.prototype.firstKey=function(l){return this.limit(1).keys(function(u){return u[0]}).then(l)},ke.prototype.lastKey=function(l){return this.reverse().firstKey(l)},ke.prototype.distinct=function(){var l=this._ctx,l=l.index&&l.table.schema.idxByName[l.index];if(!l||!l.multi)return this;var u={};return Ro(this._ctx,function(g){var f=g.primaryKey.toString(),g=m(u,f);return u[f]=!0,!g}),this},ke.prototype.modify=function(l){var u=this,h=this._ctx;return this._write(function(f){var g,b,v;v=typeof l=="function"?l:(g=o(l),b=g.length,function(O){for(var F=!1,U=0;U<b;++U){var B=g[U],V=l[B],Y=W(O,B);V instanceof _r?(T(O,B,V.execute(Y)),F=!0):Y!==V&&(T(O,B,V),F=!0)}return F});var S=h.table.core,C=S.schema.primaryKey,E=C.outbound,R=C.extractKey,P=200,C=u.db._options.modifyChunkSize;C&&(P=typeof C=="object"?C[S.name]||C["*"]||200:C);function N(O,B){var U=B.failures,B=B.numFailures;L+=O-B;for(var V=0,Y=o(U);V<Y.length;V++){var ne=Y[V];I.push(U[ne])}}var I=[],L=0,j=[];return u.clone().primaryKeys().then(function(O){function F(B){var V=Math.min(P,O.length-B);return S.getMany({trans:f,keys:O.slice(B,B+V),cache:"immutable"}).then(function(Y){for(var ne=[],Q=[],Z=E?[]:null,se=[],te=0;te<V;++te){var le=Y[te],me={value:X(le),primKey:O[B+te]};v.call(me,me.value,me)!==!1&&(me.value==null?se.push(O[B+te]):E||$e(R(le),R(me.value))===0?(Q.push(me.value),E&&Z.push(O[B+te])):(se.push(O[B+te]),ne.push(me.value)))}return Promise.resolve(0<ne.length&&S.mutate({trans:f,type:"add",values:ne}).then(function(ye){for(var ve in ye.failures)se.splice(parseInt(ve),1);N(ne.length,ye)})).then(function(){return(0<Q.length||U&&typeof l=="object")&&S.mutate({trans:f,type:"put",keys:Z,values:Q,criteria:U,changeSpec:typeof l!="function"&&l,isAdditionalChunk:0<B}).then(function(ye){return N(Q.length,ye)})}).then(function(){return(0<se.length||U&&l===Do)&&S.mutate({trans:f,type:"delete",keys:se,criteria:U,isAdditionalChunk:0<B}).then(function(ye){return N(se.length,ye)})}).then(function(){return O.length>B+V&&F(B+P)})})}var U=Vn(h)&&h.limit===1/0&&(typeof l!="function"||l===Do)&&{index:h.index,range:h.range};return F(0).then(function(){if(0<I.length)throw new Le("Error modifying one or more objects",I,L,j);return O.length})})})},ke.prototype.delete=function(){var l=this._ctx,u=l.range;return Vn(l)&&(l.isPrimKey||u.type===3)?this._write(function(h){var f=l.table.core.schema.primaryKey,g=u;return l.table.core.count({trans:h,query:{index:f,range:g}}).then(function(b){return l.table.core.mutate({trans:h,type:"deleteRange",range:g}).then(function(v){var S=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new Le("Could not delete some values",Object.keys(S).map(function(E){return S[E]}),b-v);return b-v})})}):this.modify(Do)},ke);function ke(){}var Do=function(l,u){return u.value=null};function qm(l,u){return l<u?-1:l===u?0:1}function Hm(l,u){return u<l?-1:l===u?0:1}function wt(l,u,h){return l=l instanceof Cc?new l.Collection(l):l,l._ctx.error=new(h||TypeError)(u),l}function Wn(l){return new l.Collection(l,function(){return Sc("")}).limit(0)}function Ds(l,u,h,f){var g,b,v,S,E,R,P,C=h.length;if(!h.every(function(L){return typeof L=="string"}))return wt(l,mc);function N(L){g=L==="next"?function(O){return O.toUpperCase()}:function(O){return O.toLowerCase()},b=L==="next"?function(O){return O.toLowerCase()}:function(O){return O.toUpperCase()},v=L==="next"?qm:Hm;var j=h.map(function(O){return{lower:b(O),upper:g(O)}}).sort(function(O,F){return v(O.lower,F.lower)});S=j.map(function(O){return O.upper}),E=j.map(function(O){return O.lower}),P=(R=L)==="next"?"":f}N("next"),l=new l.Collection(l,function(){return rn(S[0],E[C-1]+f)}),l._ondirectionchange=function(L){N(L)};var I=0;return l._addAlgorithm(function(L,j,O){var F=L.key;if(typeof F!="string")return!1;var U=b(F);if(u(U,E,I))return!0;for(var B=null,V=I;V<C;++V){var Y=(function(ne,Q,Z,se,te,le){for(var me=Math.min(ne.length,se.length),ye=-1,ve=0;ve<me;++ve){var yt=Q[ve];if(yt!==se[ve])return te(ne[ve],Z[ve])<0?ne.substr(0,ve)+Z[ve]+Z.substr(ve+1):te(ne[ve],se[ve])<0?ne.substr(0,ve)+se[ve]+Z.substr(ve+1):0<=ye?ne.substr(0,ye)+Q[ye]+Z.substr(ye+1):null;te(ne[ve],yt)<0&&(ye=ve)}return me<se.length&&le==="next"?ne+Z.substr(ne.length):me<ne.length&&le==="prev"?ne.substr(0,Z.length):ye<0?null:ne.substr(0,ye)+se[ye]+Z.substr(ye+1)})(F,U,S[V],E[V],v,R);Y===null&&B===null?I=V+1:(B===null||0<v(B,Y))&&(B=Y)}return j(B!==null?function(){L.continue(B+P)}:O),!1}),l}function rn(l,u,h,f){return{type:2,lower:l,upper:u,lowerOpen:h,upperOpen:f}}function Sc(l){return{type:1,lower:l,upper:l}}var Cc=(Object.defineProperty(qe.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),qe.prototype.between=function(l,u,h,f){h=h!==!1,f=f===!0;try{return 0<this._cmp(l,u)||this._cmp(l,u)===0&&(h||f)&&(!h||!f)?Wn(this):new this.Collection(this,function(){return rn(l,u,!h,!f)})}catch{return wt(this,Vt)}},qe.prototype.equals=function(l){return l==null?wt(this,Vt):new this.Collection(this,function(){return Sc(l)})},qe.prototype.above=function(l){return l==null?wt(this,Vt):new this.Collection(this,function(){return rn(l,void 0,!0)})},qe.prototype.aboveOrEqual=function(l){return l==null?wt(this,Vt):new this.Collection(this,function(){return rn(l,void 0,!1)})},qe.prototype.below=function(l){return l==null?wt(this,Vt):new this.Collection(this,function(){return rn(void 0,l,!1,!0)})},qe.prototype.belowOrEqual=function(l){return l==null?wt(this,Vt):new this.Collection(this,function(){return rn(void 0,l)})},qe.prototype.startsWith=function(l){return typeof l!="string"?wt(this,mc):this.between(l,l+vn,!0,!0)},qe.prototype.startsWithIgnoreCase=function(l){return l===""?this.startsWith(l):Ds(this,function(u,h){return u.indexOf(h[0])===0},[l],vn)},qe.prototype.equalsIgnoreCase=function(l){return Ds(this,function(u,h){return u===h[0]},[l],"")},qe.prototype.anyOfIgnoreCase=function(){var l=he.apply(Je,arguments);return l.length===0?Wn(this):Ds(this,function(u,h){return h.indexOf(u)!==-1},l,"")},qe.prototype.startsWithAnyOfIgnoreCase=function(){var l=he.apply(Je,arguments);return l.length===0?Wn(this):Ds(this,function(u,h){return h.some(function(f){return u.indexOf(f)===0})},l,vn)},qe.prototype.anyOf=function(){var l=this,u=he.apply(Je,arguments),h=this._cmp;try{u.sort(h)}catch{return wt(this,Vt)}if(u.length===0)return Wn(this);var f=new this.Collection(this,function(){return rn(u[0],u[u.length-1])});f._ondirectionchange=function(b){h=b==="next"?l._ascending:l._descending,u.sort(h)};var g=0;return f._addAlgorithm(function(b,v,S){for(var E=b.key;0<h(E,u[g]);)if(++g===u.length)return v(S),!1;return h(E,u[g])===0||(v(function(){b.continue(u[g])}),!1)}),f},qe.prototype.notEqual=function(l){return this.inAnyRange([[-1/0,l],[l,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},qe.prototype.noneOf=function(){var l=he.apply(Je,arguments);if(l.length===0)return new this.Collection(this);try{l.sort(this._ascending)}catch{return wt(this,Vt)}var u=l.reduce(function(h,f){return h?h.concat([[h[h.length-1][1],f]]):[[-1/0,f]]},null);return u.push([l[l.length-1],this.db._maxKey]),this.inAnyRange(u,{includeLowers:!1,includeUppers:!1})},qe.prototype.inAnyRange=function(F,u){var h=this,f=this._cmp,g=this._ascending,b=this._descending,v=this._min,S=this._max;if(F.length===0)return Wn(this);if(!F.every(function(U){return U[0]!==void 0&&U[1]!==void 0&&g(U[0],U[1])<=0}))return wt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ue.InvalidArgument);var E=!u||u.includeLowers!==!1,R=u&&u.includeUppers===!0,P,C=g;function N(U,B){return C(U[0],B[0])}try{(P=F.reduce(function(U,B){for(var V=0,Y=U.length;V<Y;++V){var ne=U[V];if(f(B[0],ne[1])<0&&0<f(B[1],ne[0])){ne[0]=v(ne[0],B[0]),ne[1]=S(ne[1],B[1]);break}}return V===Y&&U.push(B),U},[])).sort(N)}catch{return wt(this,Vt)}var I=0,L=R?function(U){return 0<g(U,P[I][1])}:function(U){return 0<=g(U,P[I][1])},j=E?function(U){return 0<b(U,P[I][0])}:function(U){return 0<=b(U,P[I][0])},O=L,F=new this.Collection(this,function(){return rn(P[0][0],P[P.length-1][1],!E,!R)});return F._ondirectionchange=function(U){C=U==="next"?(O=L,g):(O=j,b),P.sort(N)},F._addAlgorithm(function(U,B,V){for(var Y,ne=U.key;O(ne);)if(++I===P.length)return B(V),!1;return!L(Y=ne)&&!j(Y)||(h._cmp(ne,P[I][1])===0||h._cmp(ne,P[I][0])===0||B(function(){C===g?U.continue(P[I][0]):U.continue(P[I][1])}),!1)}),F},qe.prototype.startsWithAnyOf=function(){var l=he.apply(Je,arguments);return l.every(function(u){return typeof u=="string"})?l.length===0?Wn(this):this.inAnyRange(l.map(function(u){return[u,u+vn]})):wt(this,"startsWithAnyOf() only works with strings")},qe);function qe(){}function Bt(l){return Ae(function(u){return Er(u),l(u.target.error),!1})}function Er(l){l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault()}var Tr="storagemutated",Lo="x-storagemutated-1",sn=Sr(null,Tr),Km=(qt.prototype._lock=function(){return M(!ce.global),++this._reculock,this._reculock!==1||ce.global||(ce.lockOwnerFor=this),this},qt.prototype._unlock=function(){if(M(!ce.global),--this._reculock==0)for(ce.global||(ce.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var l=this._blockedFuncs.shift();try{yn(l[1],l[0])}catch{}}return this},qt.prototype._locked=function(){return this._reculock&&ce.lockOwnerFor!==this},qt.prototype.create=function(l){var u=this;if(!this.mode)return this;var h=this.db.idbdb,f=this.db._state.dbOpenError;if(M(!this.idbtrans),!l&&!h)switch(f&&f.name){case"DatabaseClosedError":throw new ue.DatabaseClosed(f);case"MissingAPIError":throw new ue.MissingAPI(f.message,f);default:throw new ue.OpenFailed(f)}if(!this.active)throw new ue.TransactionInactive;return M(this._completion._state===null),(l=this.idbtrans=l||(this.db.core||h).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ae(function(g){Er(g),u._reject(l.error)}),l.onabort=Ae(function(g){Er(g),u.active&&u._reject(new ue.Abort(l.error)),u.active=!1,u.on("abort").fire(g)}),l.oncomplete=Ae(function(){u.active=!1,u._resolve(),"mutatedParts"in l&&sn.storagemutated.fire(l.mutatedParts)}),this},qt.prototype._promise=function(l,u,h){var f=this;if(l==="readwrite"&&this.mode!=="readwrite")return je(new ue.ReadOnly("Transaction is readonly"));if(!this.active)return je(new ue.TransactionInactive);if(this._locked())return new oe(function(b,v){f._blockedFuncs.push([function(){f._promise(l,u,h).then(b,v)},ce])});if(h)return en(function(){var b=new oe(function(v,S){f._lock();var E=u(v,S,f);E&&E.then&&E.then(v,S)});return b.finally(function(){return f._unlock()}),b._lib=!0,b});var g=new oe(function(b,v){var S=u(b,v,f);S&&S.then&&S.then(b,v)});return g._lib=!0,g},qt.prototype._root=function(){return this.parent?this.parent._root():this},qt.prototype.waitFor=function(l){var u,h=this._root(),f=oe.resolve(l);h._waitingFor?h._waitingFor=h._waitingFor.then(function(){return f}):(h._waitingFor=f,h._waitingQueue=[],u=h.idbtrans.objectStore(h.storeNames[0]),(function b(){for(++h._spinCount;h._waitingQueue.length;)h._waitingQueue.shift()();h._waitingFor&&(u.get(-1/0).onsuccess=b)})());var g=h._waitingFor;return new oe(function(b,v){f.then(function(S){return h._waitingQueue.push(Ae(b.bind(null,S)))},function(S){return h._waitingQueue.push(Ae(v.bind(null,S)))}).finally(function(){h._waitingFor===g&&(h._waitingFor=null)})})},qt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ue.Abort))},qt.prototype.table=function(l){var u=this._memoizedTables||(this._memoizedTables={});if(m(u,l))return u[l];var h=this.schema[l];if(!h)throw new ue.NotFound("Table "+l+" not part of transaction");return h=new this.db.Table(l,h,this),h.core=this.db.core.table(l),u[l]=h},qt);function qt(){}function Po(l,u,h,f,g,b,v){return{name:l,keyPath:u,unique:h,multi:f,auto:g,compound:b,src:(h&&!v?"&":"")+(f?"*":"")+(g?"++":"")+_c(u)}}function _c(l){return typeof l=="string"?l:l?"["+[].join.call(l,"+")+"]":""}function Mo(l,u,h){return{name:l,primKey:u,indexes:h,mappedClass:null,idxByName:(f=function(g){return[g.name,g]},h.reduce(function(g,b,v){return v=f(b,v),v&&(g[v[0]]=v[1]),g},{}))};var f}var Ir=function(l){try{return l.only([[]]),Ir=function(){return[[]]},[[]]}catch{return Ir=function(){return vn},vn}};function jo(l){return l==null?function(){}:typeof l=="string"?(u=l).split(".").length===1?function(h){return h[u]}:function(h){return W(h,u)}:function(h){return W(h,l)};var u}function Ec(l){return[].slice.call(l)}var Vm=0;function Ar(l){return l==null?":id":typeof l=="string"?l:"[".concat(l.join("+"),"]")}function Wm(l,u,E){function f(O){if(O.type===3)return null;if(O.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var I=O.lower,L=O.upper,j=O.lowerOpen,O=O.upperOpen;return I===void 0?L===void 0?null:u.upperBound(L,!!O):L===void 0?u.lowerBound(I,!!j):u.bound(I,L,!!j,!!O)}function g(N){var I,L=N.name;return{name:L,schema:N,mutate:function(j){var O=j.trans,F=j.type,U=j.keys,B=j.values,V=j.range;return new Promise(function(Y,ne){Y=Ae(Y);var Q=O.objectStore(L),Z=Q.keyPath==null,se=F==="put"||F==="add";if(!se&&F!=="delete"&&F!=="deleteRange")throw new Error("Invalid operation type: "+F);var te,le=(U||B||{length:1}).length;if(U&&B&&U.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(le===0)return Y({numFailures:0,failures:{},results:[],lastResult:void 0});function me(it){++yt,Er(it)}var ye=[],ve=[],yt=0;if(F==="deleteRange"){if(V.type===4)return Y({numFailures:yt,failures:ve,results:[],lastResult:void 0});V.type===3?ye.push(te=Q.clear()):ye.push(te=Q.delete(f(V)))}else{var Z=se?Z?[B,U]:[B,null]:[U,null],pe=Z[0],Ze=Z[1];if(se)for(var et=0;et<le;++et)ye.push(te=Ze&&Ze[et]!==void 0?Q[F](pe[et],Ze[et]):Q[F](pe[et])),te.onerror=me;else for(et=0;et<le;++et)ye.push(te=Q[F](pe[et])),te.onerror=me}function Vs(it){it=it.target.result,ye.forEach(function(Sn,ta){return Sn.error!=null&&(ve[ta]=Sn.error)}),Y({numFailures:yt,failures:ve,results:F==="delete"?U:ye.map(function(Sn){return Sn.result}),lastResult:it})}te.onerror=function(it){me(it),Vs(it)},te.onsuccess=Vs})},getMany:function(j){var O=j.trans,F=j.keys;return new Promise(function(U,B){U=Ae(U);for(var V,Y=O.objectStore(L),ne=F.length,Q=new Array(ne),Z=0,se=0,te=function(ye){ye=ye.target,Q[ye._pos]=ye.result,++se===Z&&U(Q)},le=Bt(B),me=0;me<ne;++me)F[me]!=null&&((V=Y.get(F[me]))._pos=me,V.onsuccess=te,V.onerror=le,++Z);Z===0&&U(Q)})},get:function(j){var O=j.trans,F=j.key;return new Promise(function(U,B){U=Ae(U);var V=O.objectStore(L).get(F);V.onsuccess=function(Y){return U(Y.target.result)},V.onerror=Bt(B)})},query:(I=R,function(j){return new Promise(function(O,F){O=Ae(O);var U,B,V,Z=j.trans,Y=j.values,ne=j.limit,te=j.query,Q=ne===1/0?void 0:ne,se=te.index,te=te.range,Z=Z.objectStore(L),se=se.isPrimaryKey?Z:Z.index(se.name),te=f(te);if(ne===0)return O({result:[]});I?((Q=Y?se.getAll(te,Q):se.getAllKeys(te,Q)).onsuccess=function(le){return O({result:le.target.result})},Q.onerror=Bt(F)):(U=0,B=!Y&&"openKeyCursor"in se?se.openKeyCursor(te):se.openCursor(te),V=[],B.onsuccess=function(le){var me=B.result;return me?(V.push(Y?me.value:me.primaryKey),++U===ne?O({result:V}):void me.continue()):O({result:V})},B.onerror=Bt(F))})}),openCursor:function(j){var O=j.trans,F=j.values,U=j.query,B=j.reverse,V=j.unique;return new Promise(function(Y,ne){Y=Ae(Y);var se=U.index,Q=U.range,Z=O.objectStore(L),Z=se.isPrimaryKey?Z:Z.index(se.name),se=B?V?"prevunique":"prev":V?"nextunique":"next",te=!F&&"openKeyCursor"in Z?Z.openKeyCursor(f(Q),se):Z.openCursor(f(Q),se);te.onerror=Bt(ne),te.onsuccess=Ae(function(le){var me,ye,ve,yt,pe=te.result;pe?(pe.___id=++Vm,pe.done=!1,me=pe.continue.bind(pe),ye=(ye=pe.continuePrimaryKey)&&ye.bind(pe),ve=pe.advance.bind(pe),yt=function(){throw new Error("Cursor not stopped")},pe.trans=O,pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=function(){throw new Error("Cursor not started")},pe.fail=Ae(ne),pe.next=function(){var Ze=this,et=1;return this.start(function(){return et--?Ze.continue():Ze.stop()}).then(function(){return Ze})},pe.start=function(Ze){function et(){if(te.result)try{Ze()}catch(it){pe.fail(it)}else pe.done=!0,pe.start=function(){throw new Error("Cursor behind last entry")},pe.stop()}var Vs=new Promise(function(it,Sn){it=Ae(it),te.onerror=Bt(Sn),pe.fail=Sn,pe.stop=function(ta){pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=yt,it(ta)}});return te.onsuccess=Ae(function(it){te.onsuccess=et,et()}),pe.continue=me,pe.continuePrimaryKey=ye,pe.advance=ve,et(),Vs},Y(pe)):Y(null)},ne)})},count:function(j){var O=j.query,F=j.trans,U=O.index,B=O.range;return new Promise(function(V,Y){var ne=F.objectStore(L),Q=U.isPrimaryKey?ne:ne.index(U.name),ne=f(B),Q=ne?Q.count(ne):Q.count();Q.onsuccess=Ae(function(Z){return V(Z.target.result)}),Q.onerror=Bt(Y)})}}}var b,v,S,P=(v=E,S=Ec((b=l).objectStoreNames),{schema:{name:b.name,tables:S.map(function(N){return v.objectStore(N)}).map(function(N){var I=N.keyPath,O=N.autoIncrement,L=a(I),j={},O={name:N.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:I==null,compound:L,keyPath:I,autoIncrement:O,unique:!0,extractKey:jo(I)},indexes:Ec(N.indexNames).map(function(F){return N.index(F)}).map(function(V){var U=V.name,B=V.unique,Y=V.multiEntry,V=V.keyPath,Y={name:U,compound:a(V),keyPath:V,unique:B,multiEntry:Y,extractKey:jo(V)};return j[Ar(V)]=Y}),getIndexByKeyPath:function(F){return j[Ar(F)]}};return j[":id"]=O.primaryKey,I!=null&&(j[Ar(I)]=O.primaryKey),O})},hasGetAll:0<S.length&&"getAll"in v.objectStore(S[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),E=P.schema,R=P.hasGetAll,P=E.tables.map(g),C={};return P.forEach(function(N){return C[N.name]=N}),{stack:"dbcore",transaction:l.transaction.bind(l),table:function(N){if(!C[N])throw new Error("Table '".concat(N,"' not found"));return C[N]},MIN_KEY:-1/0,MAX_KEY:Ir(u),schema:E}}function Gm(l,u,h,f){var g=h.IDBKeyRange;return h.indexedDB,{dbcore:(f=Wm(u,g,f),l.dbcore.reduce(function(b,v){return v=v.create,r(r({},b),v(b))},f))}}function Ls(l,f){var h=f.db,f=Gm(l._middlewares,h,l._deps,f);l.core=f.dbcore,l.tables.forEach(function(g){var b=g.name;l.core.schema.tables.some(function(v){return v.name===b})&&(g.core=l.core.table(b),l[b]instanceof l.Table&&(l[b].core=g.core))})}function Ps(l,u,h,f){h.forEach(function(g){var b=f[g];u.forEach(function(v){var S=(function E(R,P){return _(R,P)||(R=d(R))&&E(R,P)})(v,g);(!S||"value"in S&&S.value===void 0)&&(v===l.Transaction.prototype||v instanceof l.Transaction?k(v,g,{get:function(){return this.table(g)},set:function(E){y(this,g,{value:E,writable:!0,configurable:!0,enumerable:!0})}}):v[g]=new l.Table(g,b))})})}function No(l,u){u.forEach(function(h){for(var f in h)h[f]instanceof l.Table&&delete h[f]})}function Ym(l,u){return l._cfg.version-u._cfg.version}function Qm(l,u,h,f){var g=l._dbSchema;h.objectStoreNames.contains("$meta")&&!g.$meta&&(g.$meta=Mo("$meta",Ic("")[0],[]),l._storeNames.push("$meta"));var b=l._createTransaction("readwrite",l._storeNames,g);b.create(h),b._completion.catch(f);var v=b._reject.bind(b),S=ce.transless||ce;en(function(){return ce.trans=b,ce.transless=S,u!==0?(Ls(l,h),R=u,((E=b).storeNames.includes("$meta")?E.table("$meta").get("version").then(function(P){return P??R}):oe.resolve(R)).then(function(P){return N=P,I=b,L=h,j=[],P=(C=l)._versions,O=C._dbSchema=js(0,C.idbdb,L),(P=P.filter(function(F){return F._cfg.version>=N})).length!==0?(P.forEach(function(F){j.push(function(){var U=O,B=F._cfg.dbschema;Ns(C,U,L),Ns(C,B,L),O=C._dbSchema=B;var V=zo(U,B);V.add.forEach(function(se){Fo(L,se[0],se[1].primKey,se[1].indexes)}),V.change.forEach(function(se){if(se.recreate)throw new ue.Upgrade("Not yet support for changing primary key");var te=L.objectStore(se.name);se.add.forEach(function(le){return Ms(te,le)}),se.change.forEach(function(le){te.deleteIndex(le.name),Ms(te,le)}),se.del.forEach(function(le){return te.deleteIndex(le)})});var Y=F._cfg.contentUpgrade;if(Y&&F._cfg.version>N){Ls(C,L),I._memoizedTables={};var ne=H(B);V.del.forEach(function(se){ne[se]=U[se]}),No(C,[C.Transaction.prototype]),Ps(C,[C.Transaction.prototype],o(ne),ne),I.schema=ne;var Q,Z=bt(Y);return Z&&Hn(),V=oe.follow(function(){var se;(Q=Y(I))&&Z&&(se=tn.bind(null,null),Q.then(se,se))}),Q&&typeof Q.then=="function"?oe.resolve(Q):V.then(function(){return Q})}}),j.push(function(U){var B,V,Y=F._cfg.dbschema;B=Y,V=U,[].slice.call(V.db.objectStoreNames).forEach(function(ne){return B[ne]==null&&V.db.deleteObjectStore(ne)}),No(C,[C.Transaction.prototype]),Ps(C,[C.Transaction.prototype],C._storeNames,C._dbSchema),I.schema=C._dbSchema}),j.push(function(U){C.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(C.idbdb.version/10)===F._cfg.version?(C.idbdb.deleteObjectStore("$meta"),delete C._dbSchema.$meta,C._storeNames=C._storeNames.filter(function(B){return B!=="$meta"})):U.objectStore("$meta").put(F._cfg.version,"version"))})}),(function F(){return j.length?oe.resolve(j.shift()(I.idbtrans)).then(F):oe.resolve()})().then(function(){Tc(O,L)})):oe.resolve();var C,N,I,L,j,O}).catch(v)):(o(g).forEach(function(P){Fo(h,P,g[P].primKey,g[P].indexes)}),Ls(l,h),void oe.follow(function(){return l.on.populate.fire(b)}).catch(v));var E,R})}function Jm(l,u){Tc(l._dbSchema,u),u.db.version%10!=0||u.objectStoreNames.contains("$meta")||u.db.createObjectStore("$meta").add(Math.ceil(u.db.version/10-1),"version");var h=js(0,l.idbdb,u);Ns(l,l._dbSchema,u);for(var f=0,g=zo(h,l._dbSchema).change;f<g.length;f++){var b=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var S=u.objectStore(v.name);v.add.forEach(function(E){Ut&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(E.src)),Ms(S,E)})})(g[f]);if(typeof b=="object")return b.value}}function zo(l,u){var h,f={del:[],add:[],change:[]};for(h in l)u[h]||f.del.push(h);for(h in u){var g=l[h],b=u[h];if(g){var v={name:h,def:b,recreate:!1,del:[],add:[],change:[]};if(""+(g.primKey.keyPath||"")!=""+(b.primKey.keyPath||"")||g.primKey.auto!==b.primKey.auto)v.recreate=!0,f.change.push(v);else{var S=g.idxByName,E=b.idxByName,R=void 0;for(R in S)E[R]||v.del.push(R);for(R in E){var P=S[R],C=E[R];P?P.src!==C.src&&v.change.push(C):v.add.push(C)}(0<v.del.length||0<v.add.length||0<v.change.length)&&f.change.push(v)}}else f.add.push([h,b])}return f}function Fo(l,u,h,f){var g=l.db.createObjectStore(u,h.keyPath?{keyPath:h.keyPath,autoIncrement:h.auto}:{autoIncrement:h.auto});return f.forEach(function(b){return Ms(g,b)}),g}function Tc(l,u){o(l).forEach(function(h){u.db.objectStoreNames.contains(h)||(Ut&&console.debug("Dexie: Creating missing table",h),Fo(u,h,l[h].primKey,l[h].indexes))})}function Ms(l,u){l.createIndex(u.name,u.keyPath,{unique:u.unique,multiEntry:u.multi})}function js(l,u,h){var f={};return D(u.objectStoreNames,0).forEach(function(g){for(var b=h.objectStore(g),v=Po(_c(R=b.keyPath),R||"",!0,!1,!!b.autoIncrement,R&&typeof R!="string",!0),S=[],E=0;E<b.indexNames.length;++E){var P=b.index(b.indexNames[E]),R=P.keyPath,P=Po(P.name,R,!!P.unique,!!P.multiEntry,!1,R&&typeof R!="string",!1);S.push(P)}f[g]=Mo(g,v,S)}),f}function Ns(l,u,h){for(var f=h.db.objectStoreNames,g=0;g<f.length;++g){var b=f[g],v=h.objectStore(b);l._hasGetAll="getAll"in v;for(var S=0;S<v.indexNames.length;++S){var E=v.indexNames[S],R=v.index(E).keyPath,P=typeof R=="string"?R:"["+D(R).join("+")+"]";!u[b]||(R=u[b].idxByName[P])&&(R.name=E,delete u[b].idxByName[P],u[b].idxByName[E]=R)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&i.WorkerGlobalScope&&i instanceof i.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(l._hasGetAll=!1)}function Ic(l){return l.split(",").map(function(u,h){var f=(u=u.trim()).replace(/([&*]|\+\+)/g,""),g=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return Po(f,g||null,/\&/.test(u),/\*/.test(u),/\+\+/.test(u),a(g),h===0)})}var Xm=(zs.prototype._parseStoresSpec=function(l,u){o(l).forEach(function(h){if(l[h]!==null){var f=Ic(l[h]),g=f.shift();if(g.unique=!0,g.multi)throw new ue.Schema("Primary key cannot be multi-valued");f.forEach(function(b){if(b.auto)throw new ue.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new ue.Schema("Index must have a name and cannot be an empty string")}),u[h]=Mo(h,g,f)}})},zs.prototype.stores=function(h){var u=this.db;this._cfg.storesSource=this._cfg.storesSource?c(this._cfg.storesSource,h):h;var h=u._versions,f={},g={};return h.forEach(function(b){c(f,b._cfg.storesSource),g=b._cfg.dbschema={},b._parseStoresSpec(f,g)}),u._dbSchema=g,No(u,[u._allTables,u,u.Transaction.prototype]),Ps(u,[u._allTables,u,u.Transaction.prototype,this._cfg.tables],o(g),g),u._storeNames=o(g),this},zs.prototype.upgrade=function(l){return this._cfg.contentUpgrade=vo(this._cfg.contentUpgrade||_e,l),this},zs);function zs(){}function Uo(l,u){var h=l._dbNamesDB;return h||(h=l._dbNamesDB=new Gt(Is,{addons:[],indexedDB:l,IDBKeyRange:u})).version(1).stores({dbnames:"name"}),h.table("dbnames")}function Bo(l){return l&&typeof l.databases=="function"}function qo(l){return en(function(){return ce.letThrough=!0,l()})}function Ho(l){return!("from"in l)}var Xe=function(l,u){if(!this){var h=new Xe;return l&&"d"in l&&c(h,l),h}c(this,arguments.length?{d:1,from:l,to:1<arguments.length?u:l}:{d:0})};function Rr(l,u,h){var f=$e(u,h);if(!isNaN(f)){if(0<f)throw RangeError();if(Ho(l))return c(l,{from:u,to:h,d:1});var g=l.l,f=l.r;if($e(h,l.from)<0)return g?Rr(g,u,h):l.l={from:u,to:h,d:1,l:null,r:null},Rc(l);if(0<$e(u,l.to))return f?Rr(f,u,h):l.r={from:u,to:h,d:1,l:null,r:null},Rc(l);$e(u,l.from)<0&&(l.from=u,l.l=null,l.d=f?f.d+1:1),0<$e(h,l.to)&&(l.to=h,l.r=null,l.d=l.l?l.l.d+1:1),h=!l.r,g&&!l.l&&Or(l,g),f&&h&&Or(l,f)}}function Or(l,u){Ho(u)||(function h(f,E){var b=E.from,v=E.to,S=E.l,E=E.r;Rr(f,b,v),S&&h(f,S),E&&h(f,E)})(l,u)}function Ac(l,u){var h=Fs(u),f=h.next();if(f.done)return!1;for(var g=f.value,b=Fs(l),v=b.next(g.from),S=v.value;!f.done&&!v.done;){if($e(S.from,g.to)<=0&&0<=$e(S.to,g.from))return!0;$e(g.from,S.from)<0?g=(f=h.next(S.from)).value:S=(v=b.next(g.from)).value}return!1}function Fs(l){var u=Ho(l)?null:{s:0,n:l};return{next:function(h){for(var f=0<arguments.length;u;)switch(u.s){case 0:if(u.s=1,f)for(;u.n.l&&$e(h,u.n.from)<0;)u={up:u,n:u.n.l,s:1};else for(;u.n.l;)u={up:u,n:u.n.l,s:1};case 1:if(u.s=2,!f||$e(h,u.n.to)<=0)return{value:u.n,done:!1};case 2:if(u.n.r){u.s=3,u={up:u,n:u.n.r,s:0};continue}case 3:u=u.up}return{done:!0}}}}function Rc(l){var u,h,f=(((u=l.r)===null||u===void 0?void 0:u.d)||0)-(((h=l.l)===null||h===void 0?void 0:h.d)||0),g=1<f?"r":f<-1?"l":"";g&&(u=g=="r"?"l":"r",h=r({},l),f=l[g],l.from=f.from,l.to=f.to,l[g]=f[g],h[g]=f[u],(l[u]=h).d=Oc(h)),l.d=Oc(l)}function Oc(h){var u=h.r,h=h.l;return(u?h?Math.max(u.d,h.d):u.d:h?h.d:0)+1}function Us(l,u){return o(u).forEach(function(h){l[h]?Or(l[h],u[h]):l[h]=(function f(g){var b,v,S={};for(b in g)m(g,b)&&(v=g[b],S[b]=!v||typeof v!="object"||ge.has(v.constructor)?v:f(v));return S})(u[h])}),l}function Ko(l,u){return l.all||u.all||Object.keys(l).some(function(h){return u[h]&&Ac(u[h],l[h])})}w(Xe.prototype,((Ct={add:function(l){return Or(this,l),this},addKey:function(l){return Rr(this,l,l),this},addKeys:function(l){var u=this;return l.forEach(function(h){return Rr(u,h,h)}),this},hasKey:function(l){var u=Fs(this).next(l).value;return u&&$e(u.from,l)<=0&&0<=$e(u.to,l)}})[be]=function(){return Fs(this)},Ct));var kn={},Vo={},Wo=!1;function Bs(l){Us(Vo,l),Wo||(Wo=!0,setTimeout(function(){Wo=!1,Go(Vo,!(Vo={}))},0))}function Go(l,u){u===void 0&&(u=!1);var h=new Set;if(l.all)for(var f=0,g=Object.values(kn);f<g.length;f++)Dc(v=g[f],l,h,u);else for(var b in l){var v,S=/^idb\:\/\/(.*)\/(.*)\//.exec(b);S&&(b=S[1],S=S[2],(v=kn["idb://".concat(b,"/").concat(S)])&&Dc(v,l,h,u))}h.forEach(function(E){return E()})}function Dc(l,u,h,f){for(var g=[],b=0,v=Object.entries(l.queries.query);b<v.length;b++){for(var S=v[b],E=S[0],R=[],P=0,C=S[1];P<C.length;P++){var N=C[P];Ko(u,N.obsSet)?N.subscribers.forEach(function(O){return h.add(O)}):f&&R.push(N)}f&&g.push([E,R])}if(f)for(var I=0,L=g;I<L.length;I++){var j=L[I],E=j[0],R=j[1];l.queries.query[E]=R}}function Zm(l){var u=l._state,h=l._deps.indexedDB;if(u.isBeingOpened||l.idbdb)return u.dbReadyPromise.then(function(){return u.dbOpenError?je(u.dbOpenError):l});u.isBeingOpened=!0,u.dbOpenError=null,u.openComplete=!1;var f=u.openCanceller,g=Math.round(10*l.verno),b=!1;function v(){if(u.openCanceller!==f)throw new ue.DatabaseClosed("db.open() was cancelled")}function S(){return new oe(function(N,I){if(v(),!h)throw new ue.MissingAPI;var L=l.name,j=u.autoSchema||!g?h.open(L):h.open(L,g);if(!j)throw new ue.MissingAPI;j.onerror=Bt(I),j.onblocked=Ae(l._fireOnBlocked),j.onupgradeneeded=Ae(function(O){var F;P=j.transaction,u.autoSchema&&!l._options.allowEmptyDB?(j.onerror=Er,P.abort(),j.result.close(),(F=h.deleteDatabase(L)).onsuccess=F.onerror=Ae(function(){I(new ue.NoSuchDatabase("Database ".concat(L," doesnt exist")))})):(P.onerror=Bt(I),O=O.oldVersion>Math.pow(2,62)?0:O.oldVersion,C=O<1,l.idbdb=j.result,b&&Jm(l,P),Qm(l,O/10,P,I))},I),j.onsuccess=Ae(function(){P=null;var O,F,U,B,V,Y=l.idbdb=j.result,ne=D(Y.objectStoreNames);if(0<ne.length)try{var Q=Y.transaction((B=ne).length===1?B[0]:B,"readonly");if(u.autoSchema)F=Y,U=Q,(O=l).verno=F.version/10,U=O._dbSchema=js(0,F,U),O._storeNames=D(F.objectStoreNames,0),Ps(O,[O._allTables],o(U),U);else if(Ns(l,l._dbSchema,Q),((V=zo(js(0,(V=l).idbdb,Q),V._dbSchema)).add.length||V.change.some(function(Z){return Z.add.length||Z.change.length}))&&!b)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),g=Y.version+1,b=!0,N(S());Ls(l,Q)}catch{}Kn.push(l),Y.onversionchange=Ae(function(Z){u.vcFired=!0,l.on("versionchange").fire(Z)}),Y.onclose=Ae(function(Z){l.on("close").fire(Z)}),C&&(V=l._deps,Q=L,Y=V.indexedDB,V=V.IDBKeyRange,Bo(Y)||Q===Is||Uo(Y,V).put({name:Q}).catch(_e)),N()},I)}).catch(function(N){switch(N?.name){case"UnknownError":if(0<u.PR1398_maxLoop)return u.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),S();break;case"VersionError":if(0<g)return g=0,S()}return oe.reject(N)})}var E,R=u.dbReadyResolve,P=null,C=!1;return oe.race([f,(typeof navigator>"u"?oe.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(N){function I(){return indexedDB.databases().finally(N)}E=setInterval(I,100),I()}).finally(function(){return clearInterval(E)}):Promise.resolve()).then(S)]).then(function(){return v(),u.onReadyBeingFired=[],oe.resolve(qo(function(){return l.on.ready.fire(l.vip)})).then(function N(){if(0<u.onReadyBeingFired.length){var I=u.onReadyBeingFired.reduce(vo,_e);return u.onReadyBeingFired=[],oe.resolve(qo(function(){return I(l.vip)})).then(N)}})}).finally(function(){u.openCanceller===f&&(u.onReadyBeingFired=null,u.isBeingOpened=!1)}).catch(function(N){u.dbOpenError=N;try{P&&P.abort()}catch{}return f===u.openCanceller&&l._close(),je(N)}).finally(function(){u.openComplete=!0,R()}).then(function(){var N;return C&&(N={},l.tables.forEach(function(I){I.schema.indexes.forEach(function(L){L.name&&(N["idb://".concat(l.name,"/").concat(I.name,"/").concat(L.name)]=new Xe(-1/0,[[[]]]))}),N["idb://".concat(l.name,"/").concat(I.name,"/")]=N["idb://".concat(l.name,"/").concat(I.name,"/:dels")]=new Xe(-1/0,[[[]]])}),sn(Tr).fire(N),Go(N,!0)),l})}function Yo(l){function u(b){return l.next(b)}var h=g(u),f=g(function(b){return l.throw(b)});function g(b){return function(E){var S=b(E),E=S.value;return S.done?E:E&&typeof E.then=="function"?E.then(h,f):a(E)?Promise.all(E).then(h,f):h(E)}}return g(u)()}function qs(l,u,h){for(var f=a(l)?l.slice():[l],g=0;g<h;++g)f.push(u);return f}var eg={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(l){return r(r({},l),{table:function(u){var h=l.table(u),f=h.schema,g={},b=[];function v(C,N,I){var L=Ar(C),j=g[L]=g[L]||[],O=C==null?0:typeof C=="string"?1:C.length,F=0<N,F=r(r({},I),{name:F?"".concat(L,"(virtual-from:").concat(I.name,")"):I.name,lowLevelIndex:I,isVirtual:F,keyTail:N,keyLength:O,extractKey:jo(C),unique:!F&&I.unique});return j.push(F),F.isPrimaryKey||b.push(F),1<O&&v(O===2?C[0]:C.slice(0,O-1),N+1,I),j.sort(function(U,B){return U.keyTail-B.keyTail}),F}u=v(f.primaryKey.keyPath,0,f.primaryKey),g[":id"]=[u];for(var S=0,E=f.indexes;S<E.length;S++){var R=E[S];v(R.keyPath,0,R)}function P(C){var N,I=C.query.index;return I.isVirtual?r(r({},C),{query:{index:I.lowLevelIndex,range:(N=C.query.range,I=I.keyTail,{type:N.type===1?2:N.type,lower:qs(N.lower,N.lowerOpen?l.MAX_KEY:l.MIN_KEY,I),lowerOpen:!0,upper:qs(N.upper,N.upperOpen?l.MIN_KEY:l.MAX_KEY,I),upperOpen:!0})}}):C}return r(r({},h),{schema:r(r({},f),{primaryKey:u,indexes:b,getIndexByKeyPath:function(C){return(C=g[Ar(C)])&&C[0]}}),count:function(C){return h.count(P(C))},query:function(C){return h.query(P(C))},openCursor:function(C){var N=C.query.index,I=N.keyTail,L=N.isVirtual,j=N.keyLength;return L?h.openCursor(P(C)).then(function(F){return F&&O(F)}):h.openCursor(C);function O(F){return Object.create(F,{continue:{value:function(U){U!=null?F.continue(qs(U,C.reverse?l.MAX_KEY:l.MIN_KEY,I)):C.unique?F.continue(F.key.slice(0,j).concat(C.reverse?l.MIN_KEY:l.MAX_KEY,I)):F.continue()}},continuePrimaryKey:{value:function(U,B){F.continuePrimaryKey(qs(U,l.MAX_KEY,I),B)}},primaryKey:{get:function(){return F.primaryKey}},key:{get:function(){var U=F.key;return j===1?U[0]:U.slice(0,j)}},value:{get:function(){return F.value}}})}}})}})}};function Qo(l,u,h,f){return h=h||{},f=f||"",o(l).forEach(function(g){var b,v,S;m(u,g)?(b=l[g],v=u[g],typeof b=="object"&&typeof v=="object"&&b&&v?(S=ae(b))!==ae(v)?h[f+g]=u[g]:S==="Object"?Qo(b,v,h,f+g+"."):b!==v&&(h[f+g]=u[g]):b!==v&&(h[f+g]=u[g])):h[f+g]=void 0}),o(u).forEach(function(g){m(l,g)||(h[f+g]=u[g])}),h}function Jo(l,u){return u.type==="delete"?u.keys:u.keys||u.values.map(l.extractKey)}var tg={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(l){return r(r({},l),{table:function(u){var h=l.table(u),f=h.schema.primaryKey;return r(r({},h),{mutate:function(g){var b=ce.trans,v=b.table(u).hook,S=v.deleting,E=v.creating,R=v.updating;switch(g.type){case"add":if(E.fire===_e)break;return b._promise("readwrite",function(){return P(g)},!0);case"put":if(E.fire===_e&&R.fire===_e)break;return b._promise("readwrite",function(){return P(g)},!0);case"delete":if(S.fire===_e)break;return b._promise("readwrite",function(){return P(g)},!0);case"deleteRange":if(S.fire===_e)break;return b._promise("readwrite",function(){return(function C(N,I,L){return h.query({trans:N,values:!1,query:{index:f,range:I},limit:L}).then(function(j){var O=j.result;return P({type:"delete",keys:O,trans:N}).then(function(F){return 0<F.numFailures?Promise.reject(F.failures[0]):O.length<L?{failures:[],numFailures:0,lastResult:void 0}:C(N,r(r({},I),{lower:O[O.length-1],lowerOpen:!0}),L)})})})(g.trans,g.range,1e4)},!0)}return h.mutate(g);function P(C){var N,I,L,j=ce.trans,O=C.keys||Jo(f,C);if(!O)throw new Error("Keys missing");return(C=C.type==="add"||C.type==="put"?r(r({},C),{keys:O}):r({},C)).type!=="delete"&&(C.values=s([],C.values)),C.keys&&(C.keys=s([],C.keys)),N=h,L=O,((I=C).type==="add"?Promise.resolve([]):N.getMany({trans:I.trans,keys:L,cache:"immutable"})).then(function(F){var U=O.map(function(B,V){var Y,ne,Q,Z=F[V],se={onerror:null,onsuccess:null};return C.type==="delete"?S.fire.call(se,B,Z,j):C.type==="add"||Z===void 0?(Y=E.fire.call(se,B,C.values[V],j),B==null&&Y!=null&&(C.keys[V]=B=Y,f.outbound||T(C.values[V],f.keyPath,B))):(Y=Qo(Z,C.values[V]),(ne=R.fire.call(se,Y,B,Z,j))&&(Q=C.values[V],Object.keys(ne).forEach(function(te){m(Q,te)?Q[te]=ne[te]:T(Q,te,ne[te])}))),se});return h.mutate(C).then(function(B){for(var V=B.failures,Y=B.results,ne=B.numFailures,B=B.lastResult,Q=0;Q<O.length;++Q){var Z=(Y||O)[Q],se=U[Q];Z==null?se.onerror&&se.onerror(V[Q]):se.onsuccess&&se.onsuccess(C.type==="put"&&F[Q]?C.values[Q]:Z)}return{failures:V,results:Y,numFailures:ne,lastResult:B}}).catch(function(B){return U.forEach(function(V){return V.onerror&&V.onerror(B)}),Promise.reject(B)})})}}})}})}};function Lc(l,u,h){try{if(!u||u.keys.length<l.length)return null;for(var f=[],g=0,b=0;g<u.keys.length&&b<l.length;++g)$e(u.keys[g],l[b])===0&&(f.push(h?X(u.values[g]):u.values[g]),++b);return f.length===l.length?f:null}catch{return null}}var ng={stack:"dbcore",level:-1,create:function(l){return{table:function(u){var h=l.table(u);return r(r({},h),{getMany:function(f){if(!f.cache)return h.getMany(f);var g=Lc(f.keys,f.trans._cache,f.cache==="clone");return g?oe.resolve(g):h.getMany(f).then(function(b){return f.trans._cache={keys:f.keys,values:f.cache==="clone"?X(b):b},b})},mutate:function(f){return f.type!=="add"&&(f.trans._cache=null),h.mutate(f)}})}}}};function Pc(l,u){return l.trans.mode==="readonly"&&!!l.subscr&&!l.trans.explicit&&l.trans.db._options.cache!=="disabled"&&!u.schema.primaryKey.outbound}function Mc(l,u){switch(l){case"query":return u.values&&!u.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var rg={stack:"dbcore",level:0,name:"Observability",create:function(l){var u=l.schema.name,h=new Xe(l.MIN_KEY,l.MAX_KEY);return r(r({},l),{transaction:function(f,g,b){if(ce.subscr&&g!=="readonly")throw new ue.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ce.querier));return l.transaction(f,g,b)},table:function(f){var g=l.table(f),b=g.schema,v=b.primaryKey,C=b.indexes,S=v.extractKey,E=v.outbound,R=v.autoIncrement&&C.filter(function(I){return I.compound&&I.keyPath.includes(v.keyPath)}),P=r(r({},g),{mutate:function(I){function L(te){return te="idb://".concat(u,"/").concat(f,"/").concat(te),B[te]||(B[te]=new Xe)}var j,O,F,U=I.trans,B=I.mutatedParts||(I.mutatedParts={}),V=L(""),Y=L(":dels"),ne=I.type,se=I.type==="deleteRange"?[I.range]:I.type==="delete"?[I.keys]:I.values.length<50?[Jo(v,I).filter(function(te){return te}),I.values]:[],Q=se[0],Z=se[1],se=I.trans._cache;return a(Q)?(V.addKeys(Q),(se=ne==="delete"||Q.length===Z.length?Lc(Q,se):null)||Y.addKeys(Q),(se||Z)&&(j=L,O=se,F=Z,b.indexes.forEach(function(te){var le=j(te.name||"");function me(ve){return ve!=null?te.extractKey(ve):null}function ye(ve){return te.multiEntry&&a(ve)?ve.forEach(function(yt){return le.addKey(yt)}):le.addKey(ve)}(O||F).forEach(function(ve,Ze){var pe=O&&me(O[Ze]),Ze=F&&me(F[Ze]);$e(pe,Ze)!==0&&(pe!=null&&ye(pe),Ze!=null&&ye(Ze))})}))):Q?(Z={from:(Z=Q.lower)!==null&&Z!==void 0?Z:l.MIN_KEY,to:(Z=Q.upper)!==null&&Z!==void 0?Z:l.MAX_KEY},Y.add(Z),V.add(Z)):(V.add(h),Y.add(h),b.indexes.forEach(function(te){return L(te.name).add(h)})),g.mutate(I).then(function(te){return!Q||I.type!=="add"&&I.type!=="put"||(V.addKeys(te.results),R&&R.forEach(function(le){for(var me=I.values.map(function(pe){return le.extractKey(pe)}),ye=le.keyPath.findIndex(function(pe){return pe===v.keyPath}),ve=0,yt=te.results.length;ve<yt;++ve)me[ve][ye]=te.results[ve];L(le.name).addKeys(me)})),U.mutatedParts=Us(U.mutatedParts||{},B),te})}}),C=function(L){var j=L.query,L=j.index,j=j.range;return[L,new Xe((L=j.lower)!==null&&L!==void 0?L:l.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:l.MAX_KEY)]},N={get:function(I){return[v,new Xe(I.key)]},getMany:function(I){return[v,new Xe().addKeys(I.keys)]},count:C,query:C,openCursor:C};return o(N).forEach(function(I){P[I]=function(L){var j=ce.subscr,O=!!j,F=Pc(ce,g)&&Mc(I,L)?L.obsSet={}:j;if(O){var U=function(Z){return Z="idb://".concat(u,"/").concat(f,"/").concat(Z),F[Z]||(F[Z]=new Xe)},B=U(""),V=U(":dels"),j=N[I](L),O=j[0],j=j[1];if((I==="query"&&O.isPrimaryKey&&!L.values?V:U(O.name||"")).add(j),!O.isPrimaryKey){if(I!=="count"){var Y=I==="query"&&E&&L.values&&g.query(r(r({},L),{values:!1}));return g[I].apply(this,arguments).then(function(Z){if(I==="query"){if(E&&L.values)return Y.then(function(me){return me=me.result,B.addKeys(me),Z});var se=L.values?Z.result.map(S):Z.result;(L.values?B:V).addKeys(se)}else if(I==="openCursor"){var te=Z,le=L.values;return te&&Object.create(te,{key:{get:function(){return V.addKey(te.primaryKey),te.key}},primaryKey:{get:function(){var me=te.primaryKey;return V.addKey(me),me}},value:{get:function(){return le&&B.addKey(te.primaryKey),te.value}}})}return Z})}V.add(h)}}return g[I].apply(this,arguments)}}),P}})}};function jc(l,u,h){if(h.numFailures===0)return u;if(u.type==="deleteRange")return null;var f=u.keys?u.keys.length:"values"in u&&u.values?u.values.length:1;return h.numFailures===f?null:(u=r({},u),a(u.keys)&&(u.keys=u.keys.filter(function(g,b){return!(b in h.failures)})),"values"in u&&a(u.values)&&(u.values=u.values.filter(function(g,b){return!(b in h.failures)})),u)}function Xo(l,u){return h=l,((f=u).lower===void 0||(f.lowerOpen?0<$e(h,f.lower):0<=$e(h,f.lower)))&&(l=l,(u=u).upper===void 0||(u.upperOpen?$e(l,u.upper)<0:$e(l,u.upper)<=0));var h,f}function Nc(l,u,N,f,g,b){if(!N||N.length===0)return l;var v=u.query.index,S=v.multiEntry,E=u.query.range,R=f.schema.primaryKey.extractKey,P=v.extractKey,C=(v.lowLevelIndex||v).extractKey,N=N.reduce(function(I,L){var j=I,O=[];if(L.type==="add"||L.type==="put")for(var F=new Xe,U=L.values.length-1;0<=U;--U){var B,V=L.values[U],Y=R(V);F.hasKey(Y)||(B=P(V),(S&&a(B)?B.some(function(te){return Xo(te,E)}):Xo(B,E))&&(F.addKey(Y),O.push(V)))}switch(L.type){case"add":var ne=new Xe().addKeys(u.values?I.map(function(le){return R(le)}):I),j=I.concat(u.values?O.filter(function(le){return le=R(le),!ne.hasKey(le)&&(ne.addKey(le),!0)}):O.map(function(le){return R(le)}).filter(function(le){return!ne.hasKey(le)&&(ne.addKey(le),!0)}));break;case"put":var Q=new Xe().addKeys(L.values.map(function(le){return R(le)}));j=I.filter(function(le){return!Q.hasKey(u.values?R(le):le)}).concat(u.values?O:O.map(function(le){return R(le)}));break;case"delete":var Z=new Xe().addKeys(L.keys);j=I.filter(function(le){return!Z.hasKey(u.values?R(le):le)});break;case"deleteRange":var se=L.range;j=I.filter(function(le){return!Xo(R(le),se)})}return j},l);return N===l?l:(N.sort(function(I,L){return $e(C(I),C(L))||$e(R(I),R(L))}),u.limit&&u.limit<1/0&&(N.length>u.limit?N.length=u.limit:l.length===u.limit&&N.length<u.limit&&(g.dirty=!0)),b?Object.freeze(N):N)}function zc(l,u){return $e(l.lower,u.lower)===0&&$e(l.upper,u.upper)===0&&!!l.lowerOpen==!!u.lowerOpen&&!!l.upperOpen==!!u.upperOpen}function sg(l,u){return(function(h,f,g,b){if(h===void 0)return f!==void 0?-1:0;if(f===void 0)return 1;if((f=$e(h,f))===0){if(g&&b)return 0;if(g)return 1;if(b)return-1}return f})(l.lower,u.lower,l.lowerOpen,u.lowerOpen)<=0&&0<=(function(h,f,g,b){if(h===void 0)return f!==void 0?1:0;if(f===void 0)return-1;if((f=$e(h,f))===0){if(g&&b)return 0;if(g)return-1;if(b)return 1}return f})(l.upper,u.upper,l.upperOpen,u.upperOpen)}function ig(l,u,h,f){l.subscribers.add(h),f.addEventListener("abort",function(){var g,b;l.subscribers.delete(h),l.subscribers.size===0&&(g=l,b=u,setTimeout(function(){g.subscribers.size===0&&Pe(b,g)},3e3))})}var og={stack:"dbcore",level:0,name:"Cache",create:function(l){var u=l.schema.name;return r(r({},l),{transaction:function(h,f,g){var b,v,S=l.transaction(h,f,g);return f==="readwrite"&&(v=(b=new AbortController).signal,g=function(E){return function(){if(b.abort(),f==="readwrite"){for(var R=new Set,P=0,C=h;P<C.length;P++){var N=C[P],I=kn["idb://".concat(u,"/").concat(N)];if(I){var L=l.table(N),j=I.optimisticOps.filter(function(le){return le.trans===S});if(S._explicit&&E&&S.mutatedParts)for(var O=0,F=Object.values(I.queries.query);O<F.length;O++)for(var U=0,B=(ne=F[O]).slice();U<B.length;U++)Ko((Q=B[U]).obsSet,S.mutatedParts)&&(Pe(ne,Q),Q.subscribers.forEach(function(le){return R.add(le)}));else if(0<j.length){I.optimisticOps=I.optimisticOps.filter(function(le){return le.trans!==S});for(var V=0,Y=Object.values(I.queries.query);V<Y.length;V++)for(var ne,Q,Z,se=0,te=(ne=Y[V]).slice();se<te.length;se++)(Q=te[se]).res!=null&&S.mutatedParts&&(E&&!Q.dirty?(Z=Object.isFrozen(Q.res),Z=Nc(Q.res,Q.req,j,L,Q,Z),Q.dirty?(Pe(ne,Q),Q.subscribers.forEach(function(le){return R.add(le)})):Z!==Q.res&&(Q.res=Z,Q.promise=oe.resolve({result:Z}))):(Q.dirty&&Pe(ne,Q),Q.subscribers.forEach(function(le){return R.add(le)})))}}}R.forEach(function(le){return le()})}}},S.addEventListener("abort",g(!1),{signal:v}),S.addEventListener("error",g(!1),{signal:v}),S.addEventListener("complete",g(!0),{signal:v})),S},table:function(h){var f=l.table(h),g=f.schema.primaryKey;return r(r({},f),{mutate:function(b){var v=ce.trans;if(g.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return f.mutate(b);var S=kn["idb://".concat(u,"/").concat(h)];return S?(v=f.mutate(b),b.type!=="add"&&b.type!=="put"||!(50<=b.values.length||Jo(g,b).some(function(E){return E==null}))?(S.optimisticOps.push(b),b.mutatedParts&&Bs(b.mutatedParts),v.then(function(E){0<E.numFailures&&(Pe(S.optimisticOps,b),(E=jc(0,b,E))&&S.optimisticOps.push(E),b.mutatedParts&&Bs(b.mutatedParts))}),v.catch(function(){Pe(S.optimisticOps,b),b.mutatedParts&&Bs(b.mutatedParts)})):v.then(function(E){var R=jc(0,r(r({},b),{values:b.values.map(function(P,C){var N;return E.failures[C]?P:(P=(N=g.keyPath)!==null&&N!==void 0&&N.includes(".")?X(P):r({},P),T(P,g.keyPath,E.results[C]),P)})}),E);S.optimisticOps.push(R),queueMicrotask(function(){return b.mutatedParts&&Bs(b.mutatedParts)})}),v):f.mutate(b)},query:function(b){if(!Pc(ce,f)||!Mc("query",b))return f.query(b);var v=((R=ce.trans)===null||R===void 0?void 0:R.db._options.cache)==="immutable",C=ce,S=C.requery,E=C.signal,R=(function(L,j,O,F){var U=kn["idb://".concat(L,"/").concat(j)];if(!U)return[];if(!(j=U.queries[O]))return[null,!1,U,null];var B=j[(F.query?F.query.index.name:null)||""];if(!B)return[null,!1,U,null];switch(O){case"query":var V=B.find(function(Y){return Y.req.limit===F.limit&&Y.req.values===F.values&&zc(Y.req.query.range,F.query.range)});return V?[V,!0,U,B]:[B.find(function(Y){return("limit"in Y.req?Y.req.limit:1/0)>=F.limit&&(!F.values||Y.req.values)&&sg(Y.req.query.range,F.query.range)}),!1,U,B];case"count":return V=B.find(function(Y){return zc(Y.req.query.range,F.query.range)}),[V,!!V,U,B]}})(u,h,"query",b),P=R[0],C=R[1],N=R[2],I=R[3];return P&&C?P.obsSet=b.obsSet:(C=f.query(b).then(function(L){var j=L.result;if(P&&(P.res=j),v){for(var O=0,F=j.length;O<F;++O)Object.freeze(j[O]);Object.freeze(j)}else L.result=X(j);return L}).catch(function(L){return I&&P&&Pe(I,P),Promise.reject(L)}),P={obsSet:b.obsSet,promise:C,subscribers:new Set,type:"query",req:b,dirty:!1},I?I.push(P):(I=[P],(N=N||(kn["idb://".concat(u,"/").concat(h)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[b.query.index.name||""]=I)),ig(P,I,S,E),P.promise.then(function(L){return{result:Nc(L.result,b,N?.optimisticOps,f,P,v)}})}})}})}};function Hs(l,u){return new Proxy(l,{get:function(h,f,g){return f==="db"?u:Reflect.get(h,f,g)}})}var Gt=(Ne.prototype.version=function(l){if(isNaN(l)||l<.1)throw new ue.Type("Given version is not a positive number");if(l=Math.round(10*l)/10,this.idbdb||this._state.isBeingOpened)throw new ue.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,l);var u=this._versions,h=u.filter(function(f){return f._cfg.version===l})[0];return h||(h=new this.Version(l),u.push(h),u.sort(Ym),h.stores({}),this._state.autoSchema=!1,h)},Ne.prototype._whenReady=function(l){var u=this;return this.idbdb&&(this._state.openComplete||ce.letThrough||this._vip)?l():new oe(function(h,f){if(u._state.openComplete)return f(new ue.DatabaseClosed(u._state.dbOpenError));if(!u._state.isBeingOpened){if(!u._state.autoOpen)return void f(new ue.DatabaseClosed);u.open().catch(_e)}u._state.dbReadyPromise.then(h,f)}).then(l)},Ne.prototype.use=function(l){var u=l.stack,h=l.create,f=l.level,g=l.name;return g&&this.unuse({stack:u,name:g}),l=this._middlewares[u]||(this._middlewares[u]=[]),l.push({stack:u,create:h,level:f??10,name:g}),l.sort(function(b,v){return b.level-v.level}),this},Ne.prototype.unuse=function(l){var u=l.stack,h=l.name,f=l.create;return u&&this._middlewares[u]&&(this._middlewares[u]=this._middlewares[u].filter(function(g){return f?g.create!==f:!!h&&g.name!==h})),this},Ne.prototype.open=function(){var l=this;return yn(Zt,function(){return Zm(l)})},Ne.prototype._close=function(){var l=this._state,u=Kn.indexOf(this);if(0<=u&&Kn.splice(u,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}l.isBeingOpened||(l.dbReadyPromise=new oe(function(h){l.dbReadyResolve=h}),l.openCanceller=new oe(function(h,f){l.cancelOpen=f}))},Ne.prototype.close=function(h){var u=(h===void 0?{disableAutoOpen:!0}:h).disableAutoOpen,h=this._state;u?(h.isBeingOpened&&h.cancelOpen(new ue.DatabaseClosed),this._close(),h.autoOpen=!1,h.dbOpenError=new ue.DatabaseClosed):(this._close(),h.autoOpen=this._options.autoOpen||h.isBeingOpened,h.openComplete=!1,h.dbOpenError=null)},Ne.prototype.delete=function(l){var u=this;l===void 0&&(l={disableAutoOpen:!0});var h=0<arguments.length&&typeof arguments[0]!="object",f=this._state;return new oe(function(g,b){function v(){u.close(l);var S=u._deps.indexedDB.deleteDatabase(u.name);S.onsuccess=Ae(function(){var E,R,P;E=u._deps,R=u.name,P=E.indexedDB,E=E.IDBKeyRange,Bo(P)||R===Is||Uo(P,E).delete(R).catch(_e),g()}),S.onerror=Bt(b),S.onblocked=u._fireOnBlocked}if(h)throw new ue.InvalidArgument("Invalid closeOptions argument to db.delete()");f.isBeingOpened?f.dbReadyPromise.then(v):v()})},Ne.prototype.backendDB=function(){return this.idbdb},Ne.prototype.isOpen=function(){return this.idbdb!==null},Ne.prototype.hasBeenClosed=function(){var l=this._state.dbOpenError;return l&&l.name==="DatabaseClosed"},Ne.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ne.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ne.prototype,"tables",{get:function(){var l=this;return o(this._allTables).map(function(u){return l._allTables[u]})},enumerable:!1,configurable:!0}),Ne.prototype.transaction=function(){var l=function(u,h,f){var g=arguments.length;if(g<2)throw new ue.InvalidArgument("Too few arguments");for(var b=new Array(g-1);--g;)b[g-1]=arguments[g];return f=b.pop(),[u,de(b),f]}.apply(this,arguments);return this._transaction.apply(this,l)},Ne.prototype._transaction=function(l,u,h){var f=this,g=ce.trans;g&&g.db===this&&l.indexOf("!")===-1||(g=null);var b,v,S=l.indexOf("?")!==-1;l=l.replace("!","").replace("?","");try{if(v=u.map(function(R){if(R=R instanceof f.Table?R.name:R,typeof R!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return R}),l=="r"||l===Io)b=Io;else{if(l!="rw"&&l!=Ao)throw new ue.InvalidArgument("Invalid transaction mode: "+l);b=Ao}if(g){if(g.mode===Io&&b===Ao){if(!S)throw new ue.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");g=null}g&&v.forEach(function(R){if(g&&g.storeNames.indexOf(R)===-1){if(!S)throw new ue.SubTransaction("Table "+R+" not included in parent transaction.");g=null}}),S&&g&&!g.active&&(g=null)}}catch(R){return g?g._promise(null,function(P,C){C(R)}):je(R)}var E=function R(P,C,N,I,L){return oe.resolve().then(function(){var j=ce.transless||ce,O=P._createTransaction(C,N,P._dbSchema,I);if(O.explicit=!0,j={trans:O,transless:j},I)O.idbtrans=I.idbtrans;else try{O.create(),O.idbtrans._explicit=!0,P._state.PR1398_maxLoop=3}catch(B){return B.name===Un.InvalidState&&P.isOpen()&&0<--P._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),P.close({disableAutoOpen:!1}),P.open().then(function(){return R(P,C,N,null,L)})):je(B)}var F,U=bt(L);return U&&Hn(),j=oe.follow(function(){var B;(F=L.call(O,O))&&(U?(B=tn.bind(null,null),F.then(B,B)):typeof F.next=="function"&&typeof F.throw=="function"&&(F=Yo(F)))},j),(F&&typeof F.then=="function"?oe.resolve(F).then(function(B){return O.active?B:je(new ue.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return F})).then(function(B){return I&&O._resolve(),O._completion.then(function(){return B})}).catch(function(B){return O._reject(B),je(B)})})}.bind(null,this,b,v,g,h);return g?g._promise(b,E,"lock"):ce.trans?yn(ce.transless,function(){return f._whenReady(E)}):this._whenReady(E)},Ne.prototype.table=function(l){if(!m(this._allTables,l))throw new ue.InvalidTable("Table ".concat(l," does not exist"));return this._allTables[l]},Ne);function Ne(l,u){var h=this;this._middlewares={},this.verno=0;var f=Ne.dependencies;this._options=u=r({addons:Ne.addons,autoOpen:!0,indexedDB:f.indexedDB,IDBKeyRange:f.IDBKeyRange,cache:"cloned"},u),this._deps={indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange},f=u.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var g,b,v,S,E,R={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:_e,dbReadyPromise:null,cancelOpen:_e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:u.autoOpen};R.dbReadyPromise=new oe(function(C){R.dbReadyResolve=C}),R.openCanceller=new oe(function(C,N){R.cancelOpen=N}),this._state=R,this.name=l,this.on=Sr(this,"populate","blocked","versionchange","close",{ready:[vo,_e]}),this.on.ready.subscribe=G(this.on.ready.subscribe,function(C){return function(N,I){Ne.vip(function(){var L,j=h._state;j.openComplete?(j.dbOpenError||oe.resolve().then(N),I&&C(N)):j.onReadyBeingFired?(j.onReadyBeingFired.push(N),I&&C(N)):(C(N),L=h,I||C(function O(){L.on.ready.unsubscribe(N),L.on.ready.unsubscribe(O)}))})}}),this.Collection=(g=this,Cr(Bm.prototype,function(F,O){this.db=g;var I=gc,L=null;if(O)try{I=O()}catch(U){L=U}var j=F._ctx,O=j.table,F=O.hook.reading.fire;this._ctx={table:O,index:j.index,isPrimKey:!j.index||O.schema.primKey.keyPath&&j.index===O.schema.primKey.name,range:I,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:L,or:j.or,valueMapper:F!==yr?F:null}})),this.Table=(b=this,Cr(vc.prototype,function(C,N,I){this.db=b,this._tx=I,this.name=C,this.schema=N,this.hook=b._allTables[C]?b._allTables[C].hook:Sr(null,{creating:[Dm,_e],reading:[Om,yr],updating:[Pm,_e],deleting:[Lm,_e]})})),this.Transaction=(v=this,Cr(Km.prototype,function(C,N,I,L,j){var O=this;this.db=v,this.mode=C,this.storeNames=N,this.schema=I,this.chromeTransactionDurability=L,this.idbtrans=null,this.on=Sr(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new oe(function(F,U){O._resolve=F,O._reject=U}),this._completion.then(function(){O.active=!1,O.on.complete.fire()},function(F){var U=O.active;return O.active=!1,O.on.error.fire(F),O.parent?O.parent._reject(F):U&&O.idbtrans&&O.idbtrans.abort(),je(F)})})),this.Version=(S=this,Cr(Xm.prototype,function(C){this.db=S,this._cfg={version:C,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(E=this,Cr(Cc.prototype,function(C,N,I){if(this.db=E,this._ctx={table:C,index:N===":id"?null:N,or:I},this._cmp=this._ascending=$e,this._descending=function(L,j){return $e(j,L)},this._max=function(L,j){return 0<$e(L,j)?L:j},this._min=function(L,j){return $e(L,j)<0?L:j},this._IDBKeyRange=E._deps.IDBKeyRange,!this._IDBKeyRange)throw new ue.MissingAPI})),this.on("versionchange",function(C){0<C.newVersion?console.warn("Another connection wants to upgrade database '".concat(h.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(h.name,"'. Closing db now to resume the delete request.")),h.close({disableAutoOpen:!1})}),this.on("blocked",function(C){!C.newVersion||C.newVersion<C.oldVersion?console.warn("Dexie.delete('".concat(h.name,"') was blocked")):console.warn("Upgrade '".concat(h.name,"' blocked by other connection holding version ").concat(C.oldVersion/10))}),this._maxKey=Ir(u.IDBKeyRange),this._createTransaction=function(C,N,I,L){return new h.Transaction(C,N,I,h._options.chromeTransactionDurability,L)},this._fireOnBlocked=function(C){h.on("blocked").fire(C),Kn.filter(function(N){return N.name===h.name&&N!==h&&!N._state.vcFired}).map(function(N){return N.on("versionchange").fire(C)})},this.use(ng),this.use(og),this.use(rg),this.use(eg),this.use(tg);var P=new Proxy(this,{get:function(C,N,I){if(N==="_vip")return!0;if(N==="table")return function(j){return Hs(h.table(j),P)};var L=Reflect.get(C,N,I);return L instanceof vc?Hs(L,P):N==="tables"?L.map(function(j){return Hs(j,P)}):N==="_createTransaction"?function(){return Hs(L.apply(this,arguments),P)}:L}});this.vip=P,f.forEach(function(C){return C(h)})}var Ks,Ct=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ag=(Zo.prototype.subscribe=function(l,u,h){return this._subscribe(l&&typeof l!="function"?l:{next:l,error:u,complete:h})},Zo.prototype[Ct]=function(){return this},Zo);function Zo(l){this._subscribe=l}try{Ks={indexedDB:i.indexedDB||i.mozIndexedDB||i.webkitIndexedDB||i.msIndexedDB,IDBKeyRange:i.IDBKeyRange||i.webkitIDBKeyRange}}catch{Ks={indexedDB:null,IDBKeyRange:null}}function Fc(l){var u,h=!1,f=new ag(function(g){var b=bt(l),v,S=!1,E={},R={},P={get closed(){return S},unsubscribe:function(){S||(S=!0,v&&v.abort(),C&&sn.storagemutated.unsubscribe(I))}};g.start&&g.start(P);var C=!1,N=function(){return To(L)},I=function(j){Us(E,j),Ko(R,E)&&N()},L=function(){var j,O,F;!S&&Ks.indexedDB&&(E={},j={},v&&v.abort(),v=new AbortController,F=(function(U){var B=Bn();try{b&&Hn();var V=en(l,U);return V=b?V.finally(tn):V}finally{B&&qn()}})(O={subscr:j,signal:v.signal,requery:N,querier:l,trans:null}),Promise.resolve(F).then(function(U){h=!0,u=U,S||O.signal.aborted||(E={},(function(B){for(var V in B)if(m(B,V))return;return 1})(R=j)||C||(sn(Tr,I),C=!0),To(function(){return!S&&g.next&&g.next(U)}))},function(U){h=!1,["DatabaseClosedError","AbortError"].includes(U?.name)||S||To(function(){S||g.error&&g.error(U)})}))};return setTimeout(N,0),P});return f.hasValue=function(){return h},f.getValue=function(){return u},f}var xn=Gt;function ea(l){var u=on;try{on=!0,sn.storagemutated.fire(l),Go(l,!0)}finally{on=u}}w(xn,r(r({},vs),{delete:function(l){return new xn(l,{addons:[]}).delete()},exists:function(l){return new xn(l,{addons:[]}).open().then(function(u){return u.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(l){try{return u=xn.dependencies,h=u.indexedDB,u=u.IDBKeyRange,(Bo(h)?Promise.resolve(h.databases()).then(function(f){return f.map(function(g){return g.name}).filter(function(g){return g!==Is})}):Uo(h,u).toCollection().primaryKeys()).then(l)}catch{return je(new ue.MissingAPI)}var u,h},defineClass:function(){return function(l){c(this,l)}},ignoreTransaction:function(l){return ce.trans?yn(ce.transless,l):l()},vip:qo,async:function(l){return function(){try{var u=Yo(l.apply(this,arguments));return u&&typeof u.then=="function"?u:oe.resolve(u)}catch(h){return je(h)}}},spawn:function(l,u,h){try{var f=Yo(l.apply(h,u||[]));return f&&typeof f.then=="function"?f:oe.resolve(f)}catch(g){return je(g)}},currentTransaction:{get:function(){return ce.trans||null}},waitFor:function(l,u){return u=oe.resolve(typeof l=="function"?xn.ignoreTransaction(l):l).timeout(u||6e4),ce.trans?ce.trans.waitFor(u):u},Promise:oe,debug:{get:function(){return Ut},set:function(l){cc(l)}},derive:x,extend:c,props:w,override:G,Events:Sr,on:sn,liveQuery:Fc,extendObservabilitySet:Us,getByKeyPath:W,setByKeyPath:T,delByKeyPath:function(l,u){typeof u=="string"?T(l,u,void 0):"length"in u&&[].map.call(u,function(h){T(l,h,void 0)})},shallowClone:H,deepClone:X,getObjectDiff:Qo,cmp:$e,asap:re,minKey:-1/0,addons:[],connections:Kn,errnames:Un,dependencies:Ks,cache:kn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(l){return parseInt(l)}).reduce(function(l,u,h){return l+u/Math.pow(10,2*h)})})),xn.maxKey=Ir(xn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(sn(Tr,function(l){on||(l=new CustomEvent(Lo,{detail:l}),on=!0,dispatchEvent(l),on=!1)}),addEventListener(Lo,function(l){l=l.detail,on||ea(l)}));var Gn,on=!1,Uc=function(){};return typeof BroadcastChannel<"u"&&((Uc=function(){(Gn=new BroadcastChannel(Lo)).onmessage=function(l){return l.data&&ea(l.data)}})(),typeof Gn.unref=="function"&&Gn.unref(),sn(Tr,function(l){on||Gn.postMessage(l)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(l){if(!Gt.disableBfCache&&l.persisted){Ut&&console.debug("Dexie: handling persisted pagehide"),Gn?.close();for(var u=0,h=Kn;u<h.length;u++)h[u].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(l){!Gt.disableBfCache&&l.persisted&&(Ut&&console.debug("Dexie: handling persisted pageshow"),Uc(),ea({all:new Xe(-1/0,[[]])}))})),oe.rejectionMapper=function(l,u){return!l||l instanceof Ue||l instanceof TypeError||l instanceof SyntaxError||!l.name||!lc[l.name]?l:(u=new lc[l.name](u||l.message,l),"stack"in l&&k(u,"stack",{get:function(){return this.inner.stack}}),u)},cc(Ut),r(Gt,Object.freeze({__proto__:null,Dexie:Gt,liveQuery:Fc,Entity:bc,cmp:$e,PropModSymbol:Wt,PropModification:_r,replacePrefix:function(l,u){return new _r({replacePrefix:[l,u]})},add:function(l){return new _r({add:l})},remove:function(l){return new _r({remove:l})},default:Gt,RangeSet:Xe,mergeRanges:Or,rangesOverlap:Ac}),{default:Gt}),Gt})})(si)),si.exports}var Gg=Wg();const va=Kg(Gg),ru=Symbol.for("Dexie"),mi=globalThis[ru]||(globalThis[ru]=va);if(va.semVer!==mi.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${va.semVer} and ${mi.semVer}`);const{liveQuery:rl,mergeRanges:uE,rangesOverlap:dE,RangeSet:hE,cmp:fE,Entity:pE,PropModSymbol:mE,PropModification:gE,replacePrefix:bE,add:wE,remove:yE}=mi,Yg="easydb";function Et(e,t){return`${e}::${t}`}let Ws=null;function gi(){if(Ws)return Ws;const e=new mi(Yg);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),s=(await n.toArray()).filter(a=>a.workspaceId==null);if(s.length===0)return;const i=(await t.table("workspaces").toArray()).map(a=>a.id),o=i.length>0?i:["default"];for(const a of s){for(const c of o)await n.put({key:Et(c,a.key),workspaceId:c,name:a.key,value:a.value});await n.delete(a.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Qg()),Ws={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Ws}function Qg(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Lr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>sl(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const s=await e.get(t);if(!s)throw new Error(`patch: doc id=${t} vanished after update`);return s},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=rl(()=>e.toArray()).subscribe({next:s=>t(s)});return()=>r.unsubscribe()}}}function Jg(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const s=Object.entries(n);return r.filter(i=>sl(i,s)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(s=>({...s,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const i=await e.get(n);if(!i)throw new Error(`row patch: row ${n} vanished after update`);return i},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},async count(){return e.where("tableId").equals(t).count()},subscribe(n){const s=rl(()=>e.where("tableId").equals(t).toArray()).subscribe({next:i=>n(i)});return()=>s.unsubscribe()}}}function Xg(e,t){const n=s=>({...s,workspaceId:t(),key:Et(t(),s.name),name:s.name,value:s.value}),r=()=>e.where("workspaceId").equals(t());return{async find(s){const i=await r().toArray();if(!s||Object.keys(s).length===0)return i;const o=Object.entries(s);return i.filter(a=>sl(a,o))},async findOne(s){return await e.get(Et(t(),s))??null},async insert(s){const i=n(s);return await e.add(i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>n(o));return await e.bulkAdd(i),i},async upsert(s){const i=n(s);return await e.put(i),i},async patch(s,i){const o=Et(t(),s);if(await e.update(o,i)===0)throw new Error(`setting patch: no setting ${s}`);const c=await e.get(o);if(!c)throw new Error(`setting patch: ${s} vanished after update`);return c},async remove(s){await e.delete(Et(t(),s))},async bulkRemove(s){s.length!==0&&await e.bulkDelete(s.map(i=>Et(t(),i)))},subscribe(s){const o=rl(()=>r().toArray()).subscribe({next:a=>s(a)});return()=>o.unsubscribe()}}}function sl(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Zg(e,t){return{workspaces:Lr(e.workspaces),tables:Lr(e.tables),settings:Xg(e.settings,t),plugins:Lr(e.plugins),viewTemplates:Lr(e.viewTemplates),viewInstances:Lr(e.viewInstances),rows:n=>Jg(e.rows,n)}}function eb(e){const{base:t,providers:n,tableById:r,ctx:s}=e,i=new Map;return{...t,rows(o){const a=r(o),c=a?.source;if(c){const d=n.get(c.type);if(d){const p=JSON.stringify(c),m=i.get(o);if(m&&m.key===p)return m.coll;const w=d.create(a,s);return i.set(o,{key:p,coll:w}),w}}return i.delete(o),t.rows(o)}}}function Ce(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Me(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Zn(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function dn(e,t){const n=new Set([...e].map(s=>s.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let s=2;;s++){const i=`${r}-${s}`;if(!n.has(i.toLowerCase()))return i}}function tb(e){const t=async(r,s)=>(await e.find()).filter(i=>i.workspaceId===r&&i.id!==s).map(i=>i.name),n=(r,s)=>{const i=dn(s,r.name);return i===r.name?r:(console.warn(`[store] "${r.name}" is taken in this workspace — stored as "${i}"`),{...r,name:i,code:Me(i)})};return{...e,async insert(r){return e.insert(n(r,await t(r.workspaceId,r.id)))},async bulkInsert(r){if(r.length===0)return e.bulkInsert(r);const s=new Set((await e.find()).filter(o=>o.workspaceId===r[0].workspaceId).map(o=>o.name)),i=r.map(o=>{const a=n(o,s);return s.add(a.name),a});return e.bulkInsert(i)},async upsert(r){return e.upsert(n(r,await t(r.workspaceId,r.id)))},async patch(r,s){if(typeof s.name!="string")return e.patch(r,s);const i=await e.findOne(r);if(!i)return e.patch(r,s);const o=dn(await t(i.workspaceId,r),s.name);return o===s.name?e.patch(r,s):(console.warn(`[store] "${s.name}" is taken in this workspace — renamed to "${o}"`),e.patch(r,{...s,name:o,code:Me(o)}))}}}function il(e,t,n,r,s){let i=0,o=!1;const a=()=>{const d=++i;n().then(p=>{o||d!==i||r(p)})};a();const c=e.onChanged((d,p)=>{d===t&&(p&&s&&p!==s||a())});return()=>{o=!0,c()}}function Pr(e,t){const n=r=>e.find(t,r);return{find:r=>n(r),async findOne(r){return await e.findOne(t,r)??null},async insert(r){return await e.insert(t,r),r},async bulkInsert(r){return r.length===0?[]:(await e.bulkInsert(t,r),r)},async upsert(r){return await e.upsert(t,r),r},async patch(r,s){return await e.patch(t,r,s)},async remove(r){await e.remove(t,r)},async bulkRemove(r){r.length!==0&&await e.bulkRemove(t,r)},subscribe(r){return il(e,t,()=>n(),r)}}}const Jr=2e4;function nb(e,t){const n=s=>e.find("rows",{...s,tableId:t},Jr),r=e.queryRows?.bind(e);return{find:s=>n(s),...r?{query:s=>r(t,s)}:{},async findOne(s){const i=await e.findOne("rows",s);return i&&i.tableId===t?i:null},async insert(s){const i={...s,tableId:t};return await e.insert("rows",i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>({...o,tableId:t}));return await e.bulkInsert("rows",i),i},async upsert(s){const i={...s,tableId:t};return await e.upsert("rows",i),i},async patch(s,i){return await e.patch("rows",s,i)},async remove(s){await e.remove("rows",s)},async bulkRemove(s){s.length!==0&&await e.bulkRemove("rows",s)},subscribe(s){return il(e,"rows",()=>n(),s,t)},...e.countRows?{count:()=>e.countRows(t)}:{},watch(s){return s(),e.onChanged((i,o)=>{i==="rows"&&(o&&o!==t||s())})}}}function rb(e,t){const n=s=>({...s,workspaceId:t(),key:Et(t(),s.name),name:s.name,value:s.value}),r=s=>e.find("settings",{...s,workspaceId:t()});return{find:s=>r(s),async findOne(s){return await e.findOne("settings",Et(t(),s))??null},async insert(s){const i=n(s);return await e.insert("settings",i),i},async bulkInsert(s){if(s.length===0)return[];const i=s.map(o=>n(o));return await e.bulkInsert("settings",i),i},async upsert(s){const i=n(s);return await e.upsert("settings",i),i},async patch(s,i){const o=Et(t(),s);return await e.patch("settings",o,i)},async remove(s){await e.remove("settings",Et(t(),s))},async bulkRemove(s){s.length!==0&&await e.bulkRemove("settings",s.map(i=>Et(t(),i)))},subscribe(s){return il(e,"settings",()=>r(),s)}}}function sb(e,t){return{workspaces:Pr(e,"workspaces"),tables:Pr(e,"tables"),settings:rb(e,t),plugins:Pr(e,"plugins"),viewTemplates:Pr(e,"viewTemplates"),viewInstances:Pr(e,"viewInstances"),rows:n=>nb(e,n)}}function ib(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const s of r)try{s(n)}catch(i){console.error(`[event:${String(t)}] listener threw`,i)}}}}const ob=new Set(["html-preview"]);function ab(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[],commandFallbacks:[]}}function Lt(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function ra(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function lb(e){return{registerHeaderButton:t=>Lt(e.headerButtons,t),registerFooterButton:t=>Lt(e.footerButtons,t),registerTableButton:t=>Lt(e.tableButtons,t),registerColumnEditorAction:t=>Lt(e.columnEditorActions,t),registerImporter:t=>Lt(e.importers,t),registerConnector:t=>Lt(e.connectors,t),registerExporter:t=>Lt(e.exporters,t),registerUrlSource:t=>Lt(e.urlSources,t),registerDropHandler:t=>Lt(e.dropHandlers,t),registerCellRenderer:(t,n)=>ra(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>ra(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>ra(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>Lt(e.commands,t),registerCommandFallback:t=>Lt(e.commandFallbacks,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:cb}}const cb={async alert(e,t){const n=ot.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=ot.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=ot.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=ot.instance;if(r)return r.choice(e,t,n);const s=window.prompt(`${e}

Options: ${t.join(", ")}`);return s&&t.includes(s)?s:null},toast(e,t){const n=Rn.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},ol="/easydbaccess/settings.json",Zd="/easydbaccess/secrets.txt";function ls(e){try{return globalThis.localStorage??null}catch{return null}}function Li(e){const t=ls();if(!t)return{};const n=t.getItem(ol);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function bi(e,t){return Li()[e]}function ub(e,t,n){const r=ls();if(!r)return;const s=Li();s[e]=t,r.setItem(ol,JSON.stringify(s))}function db(e,t){const n=ls();if(!n)return;const r=Li();e in r&&(delete r[e],n.setItem(ol,JSON.stringify(r)))}function ii(e,t){return e in Li()}function Xr(e){return ls()?.getItem(Zd)??""}function eh(e,t){ls()?.setItem(Zd,e)}function tr(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf(":");if(s<0)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim();i&&(t[i]=o)}return t}function al(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const s=t[r.trim()];return s===void 0?n:s})}function th(e){return typeof e=="string"&&e.includes("${secret:")}function su(e){return typeof e=="string"&&e.trim()!==""&&!th(e)}const hb=/(^|[_:.\-\s])(tokens?|secrets?|passwords?|passwd|pwd|api[_-]?keys?|apikeys?|auth|credentials?|pat)($|[_:.\-\s])/i;function iu(e){return hb.test(e)}function fb(e,t){if((iu(e.name)||t?.(e.name)===!0)&&su(e.value))return!0;const r=e.value;return r===null||typeof r!="object"||Array.isArray(r)?!1:Object.entries(r).some(([s,i])=>iu(s)&&su(i))}function pb(e,t){const n=[],r=[];for(const s of e)fb(s,t)?r.push(s.name):n.push(s);return{kept:n,withheld:r}}function mb(e,t,n){return typeof t!="string"||t===""||!th(e)?!1:al(e,n)===t}function gb(e){const t=lb(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),s=wb(e.store,e.registries),i={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:i,registerRowSource:r,settings:s,backend:{fetch:async(o,a)=>{const c=await bb(e.store),d=a?.body instanceof ArrayBuffer;if(!c||d)return globalThis.fetch(o,a);const p={url:o};return a?.method&&(p.method=a.method),a?.headers&&(p.headers=a.headers),typeof a?.body=="string"&&(p.body=a.body),globalThis.fetch(`${c}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})},async saveFile(o,a,c){const d=typeof a=="string"?new Blob([a],{type:c??"application/octet-stream"}):a,p=URL.createObjectURL(d),m=document.createElement("a");m.href=p,m.download=o,m.rel="noopener",document.body.appendChild(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(p),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function bb(e){const t="server-sync:url";let n=ii(t)?bi(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:al(n,tr(Xr())).replace(/\/+$/,"")}function wb(e,t){const n=(a,c)=>`${a}:${c}`,r=(a,c)=>t.settings.get(a)?.fields.find(d=>d.key===c),s=a=>typeof a=="string"?al(a,tr(Xr())):a,i=async a=>ii(a)?bi(a):(await e.settings.findOne(a))?.value,o=async(a,c)=>mb(await i(a),c,tr(Xr()));return{async get(a,c){const d=n(a,c);let p;if(ii(d))p=bi(d);else{const m=await e.settings.findOne(d);p=m?m.value:r(a,c)?.default}return s(p)},async set(a,c,d,p){const m=n(a,c);if(await o(m,d))return;(p??r(a,c)?.scope??"workspace")==="user"?(ub(m,d),await e.settings.remove(m).catch(()=>{})):(await e.settings.upsert({name:m,value:d}),db(m))},async placement(a,c){const d=n(a,c);return ii(d)?"user":await e.settings.findOne(d)?"workspace":null}}}function ou(e,t){return e.has(t)?e.get(t)!=="0":!1}function yb(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return ou(e,"safemode")?"all-optional":ou(e,"safemode1")?"url-plugins":"off"}const _t=yb();function wi(e){return`builtin:${e}`}function ll(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const s=r[0],i=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[s,i,...o].join("/")}`}}return e}function nh(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function rh(e){const t=ll(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function sh(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const s=[];let i=0;for(;;){const{done:c,value:d}=await r.read();if(c)break;d&&(s.push(d),i+=d.length,t?.(Math.min(1,i/n)))}const o=new Uint8Array(i);let a=0;for(const c of s)o.set(c,a),a+=c.length;return new TextDecoder().decode(o)}return await e.text()}const vb=50*1024*1024;function au(e){try{return new URL(e).host}catch{return e}}function Ht(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function $b(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function lu(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function kb(e,t,n={}){const r=ll(t),s=n.slowMs??2e3;let i=setTimeout(()=>{i=void 0,n.onSlow?.()},s);const o=()=>{i!==void 0&&(clearTimeout(i),i=void 0)},a=n.maxBytes===null?null:n.maxBytes??vb,c=async d=>{let p;try{p=await e.backend.fetch(d)}catch(w){throw new Error(`Could not reach ${au(d)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${w.message}]`,{cause:w})}if(!p.ok){const w=await $b(p);throw new Error(`HTTP ${p.status} ${p.statusText||""}`.trim()+(w?` — ${w}`:""))}const m=Number(p.headers.get("content-length"));if(a!==null&&Number.isFinite(m)&&m>a)throw p.body?.cancel().catch(()=>{}),new Error(`Response is ${lu(m)}, over the ${lu(a)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await sh(p,n.onProgress)}catch(w){throw new Error(`Failed reading the response body from ${au(d)}: ${w.message}`,{cause:w})}};try{const d=await c(r);if(nh(d)){const p=rh(r);if(p)return await c(p)}return d}finally{o()}}async function cs(e,t,n,r={}){const{TopProgress:s}=await Re(async()=>{const{TopProgress:o}=await import("./top-progress-CjQ8wnoY.js");return{TopProgress:o}},[]),i={handle:null};try{return await kb(e,t,{onSlow:()=>{i.handle=s.begin(n)},onProgress:o=>i.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{i.handle?.done()}}const ih="Re-Create: columns and rows from the file",oh="Re-Load: replace the rows, keep the columns",ah="Append the rows",lh="A new table",xb={[ih]:"recreate",[oh]:"reload",[ah]:"append",[lh]:"new"};async function Pi(e,t){const n=t.reason??`Import "${t.fileName}" into "${t.tableName}"?`,r=await e.ui.dialogs.choice(n,[ih,oh,ah,lh],t.title);return r?xb[r]??null:null}function ch(e,t){return e.length!==t.length?!1:e.every((n,r)=>{const s=t[r],i=[s.field,s.label,Zn(s.field),Zn(s.label??"")],o=n.trim().toLowerCase();return i.some(a=>a.trim().toLowerCase()===o)||Zn(n)===s.field})}const Sb=/^[+-]?\d+$/;function Mi(e){const t=e.trim();return Sb.test(t)?!Number.isSafeInteger(Number(t)):!1}function ji(e){let t="",n=0,r=!1;for(;n<e.length;){const s=e[n];if(r){t+=s,s==="\\"?(n++,n<e.length&&(t+=e[n])):s==='"'&&(r=!1),n++;continue}if(s==='"'){r=!0,t+=s,n++;continue}if(s==="-"||s>="0"&&s<="9"){let i=n;for(e[i]==="-"&&i++;i<e.length&&e[i]>="0"&&e[i]<="9";)i++;const o=i,a=e[i],c=a!=="."&&a!=="e"&&a!=="E",d=e.slice(n,o);c&&Mi(d)?t+=`"${d}"`:t+=d,n=o;continue}t+=s,n++}return t}const Gs=e=>e.trim().toLowerCase();function vE(e,t){const n=new Map;for(const i of t)n.set(Gs(i.field),i.field),n.has(Gs(i.label))||n.set(Gs(i.label),i.field);const r=new Set,s=e.map(()=>"");return e.forEach((i,o)=>{const a=n.get(Gs(i));a&&!r.has(a)&&(s[o]=a,r.add(a))}),e.forEach((i,o)=>{if(s[o])return;const a=t[o]?.field;a&&!r.has(a)&&(s[o]=a,r.add(a))}),s}function Cb(e,t,n,r){const s=new Map(t.map(i=>[i.field,i.type]));return e.map(i=>{const o={};return n.forEach((a,c)=>{if(!a)return;const d=s.get(a);d!==void 0&&(o[a]=r(i[c]??"",d))}),o})}function _b(e){const t=e.trim();return t.length>=2&&t.startsWith("[")&&t.endsWith("]")}function uh(e){if(!_b(e))return null;try{const t=JSON.parse(e.trim());return Array.isArray(t)?t:null}catch{return null}}function At(e){if(e==null)return[];if(Array.isArray(e))return sa(e);if(typeof e!="string")return sa([e]);const t=uh(e);return t?sa(t):Eb(e)}function cu(e){return At(e).join(", ")}function Ni(e){return Array.isArray(e)?!0:typeof e=="string"&&uh(e)!==null}function sa(e){const t=[];for(const n of e){if(n==null)continue;const r=typeof n=="string"?n.trim():typeof n=="object"?JSON.stringify(n)??"":String(n);r!==""&&t.push(r)}return t}function Eb(e){const t=[];let n="",r=!1,s=!1;const i=()=>{const o=s?n:n.trim();o!==""&&t.push(o),n="",r=!1,s=!1};for(let o=0;o<e.length;o++){const a=e[o];if(a==='"'){if(r&&e[o+1]==='"'){n+='"',o++;continue}r=!r,s=!0;continue}if(a===","&&!r){i();continue}n+=a}return i(),t}function Tb(e){return e==null||String(e).trim()===""}function Nn(e){const t=[];let n="",r=!1,s=!1,i=!1,o=!1,a=!1,c=!1,d=!0,p=!1;const m=()=>{const w=i?n:n.trim();if(r||o){const y={term:w,negate:o};a&&(y.prefix=!0),c&&(y.exact=!0),p&&t.length>0&&(y.and=!0),t.push(y)}p=!1,n="",r=!1,s=!1,i=!1,o=!1,a=!1,c=!1,d=!0};for(let w=0;w<e.length;w++){const y=e[w];if(!s&&/\s/.test(y)){const k=/^\s+(AND|OR)(?=[\s,]|$)/.exec(e.slice(w));if(k&&(r||o)){m(),p=k[1]==="AND",w+=k[0].length-1;continue}}if(y==='"'){if(s&&e[w+1]==='"'){n+='"',r=!0,w++;continue}s=!s,i=!0,r=!0,d=!1;continue}if(y===","&&!s){m();continue}if(y==="!"&&!s&&d&&!o&&!a&&!c){o=!0;continue}if(y==="="&&!s&&d&&!a&&!c){c=!0;continue}if(y==="^"&&!s&&d&&!a&&!c){a=!0;continue}d&&!s&&/\s/.test(y)||(d=!1),n+=y,/\s/.test(y)||(r=!0)}return m(),t}function Ib(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")||/\s(AND|OR)(?=[\s,]|$)/.test(e)}function cn(e){let t="";return e.forEach((n,r)=>{const s=n.term===""&&n.negate?"":Ib(n.term)?`"${n.term.replace(/"/g,'""')}"`:n.term,i=n.exact?"=":n.prefix?"^":"",o=(n.negate?"!":"")+i+s;r===0?t=o:t+=n.and?` AND ${o}`:`,${o}`}),t}function Ab(e){const t=[];for(const n of e){const r=t[t.length-1];n.and&&r?r.push(n):t.push([n])}return t}function uu(e,t){const n=String(e??"").toLowerCase(),r=t.term.toLowerCase();return t.exact?n===r:t.prefix?n.startsWith(r):n.includes(r)}function du(e,t){return t?t.length===0:Tb(e)}function $a(e,t,n){const r=t.term;return r.trim()===""||!t.prefix&&!t.exact&&r.toUpperCase()==="NULL"?du(e,n):n?n.some(s=>uu(s,t)):uu(e,t)}function Rb(e,t,n){return t.every(r=>r.negate?!$a(e,r,n):$a(e,r,n))}function Zr(e,t,n){const r=Ab(Nn(t));if(r.length===0)return!0;const s=n?.type==="array"?At(e):null,i=r.filter(a=>a.length===1&&a[0].negate);for(const a of i)if($a(e,a[0],s))return!1;const o=r.filter(a=>!(a.length===1&&a[0].negate));return o.length===0?!0:o.some(a=>Rb(e,a,s))}const Ob={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Db(e){e.ui.registerImporter(jb),Re(()=>import("./csv-import-options-DiRQDN4J.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=Yb(t).filter(Qb);if(r.length===0)return!1;if(t.preventDefault(),r.length===1&&await Mb(e,t,r[0]))return!0;const s=r.length===1?`"${r[0].name}"`:`${r.length} files`,i=await e.ui.dialogs.choice(`Import ${s} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[Pb,hu],"Import CSV");if(!i)return!0;const o=i===hu?async a=>{const{editColumnNames:c}=await Re(async()=>{const{editColumnNames:d}=await Promise.resolve().then(()=>n1);return{editColumnNames:d}},void 0);return c(a)}:void 0;for(const a of r)await Nb(e,a,o);return!0})}function ka(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Ht(e.url):"pasted"}function Lb(e){return hl(ka(e))||"imported"}const Pb="Import directly",hu="Edit columns first";async function Mb(e,t,n){const{tableIdAtNode:r}=await Re(async()=>{const{tableIdAtNode:a}=await Promise.resolve().then(()=>Jl);return{tableIdAtNode:a}},void 0),s=r(t.target);if(!s)return!1;const i=await e.store.tables.findOne(s);if(!i)return!1;if(i.readonly===!0||i.source!=null)return e.ui.dialogs.toast(`"${i.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import CSV"}),!1;const o=await Pi(e,{fileName:n.name,tableName:i.name,title:"Import CSV"});return o?o==="new"?!1:(await cl(e,await n.text(),n.name,dh(s,i.name,o)),!0):!0}function dh(e,t,n){const r={target:{tableId:e,mode:n}};return n==="recreate"||(r.mapFields=async(s,i,o)=>{if(ch(s,i))return i.map(c=>c.field);const{mapColumnsToTable:a}=await Re(async()=>{const{mapColumnsToTable:c}=await import("./column-map-dialog-DZD7vRlu.js");return{mapColumnsToTable:c}},[]);return a(s,i,t,o)}),r}const jb={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:Lb(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await fh(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${ka(n)}…`):r=n.text??"";const i=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??fl(ka(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...i?{separator:i}:{}},a=e.targetColumns;if(a&&a.length>0){yield{rows:ul(r,o).rows.map(m=>{const w={};for(let y=0;y<a.length;y++){const k=a[y];w[k.field]=dl(m[y]??"",k.type)}return w})};return}const c=fr(r,o);yield{columns:c.columns,rows:c.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function Nb(e,t,n){await cl(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function cl(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("csv-import: no active workspace");const i=hl(n||"imported")||"imported",o=r.separator??fl(n),a=r.target?await e.store.tables.findOne(r.target.tableId):null,c=a??(await e.store.tables.find()).find(k=>k.workspaceId===s&&k.name===i);let d,p,m=r.mapFields;if(a&&r.target)p=r.target.mode,d=a.id;else if(c){const k=await Pi(e,{fileName:n||i,tableName:c.name,title:"CSV import",reason:`A table named "${i}" already exists in this workspace.`});if(!k)return;p=k,p==="new"?d=Ce():(d=c.id,m=dh(c.id,c.name,p).mapFields)}else p="new",d=Ce();e.events.emit("import:before",{source:"csv",tableId:d});let w;if(p==="new"||p==="recreate"){const k=fr(t,{maxRows:r.maxRows,separator:o});let x=k.columns,_=k.rows;if(r.editColumns){const A=await r.editColumns(x);if(A===null)return;_=Jb(_,x,A),x=A}if(r.maxRows!=null&&(_=_.slice(0,r.maxRows)),p==="recreate"){const A=e.store.rows(d),D=await A.find();await A.bulkRemove(D.map(G=>G.id)),await e.store.tables.patch(d,{columns:x,updatedAt:Date.now()})}else await e.store.tables.insert({id:d,workspaceId:s,name:i,code:Zn(i),columns:x,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()});w=_.map(A=>({id:Ce(),tableId:d,data:A,updatedAt:Date.now()}))}else{const k=c.columns,x=ul(t,{maxRows:r.maxRows,separator:o}),_=r.maxRows!=null?x.rows.slice(0,r.maxRows):x.rows;let A=k.map(D=>D.field);if(m){const D=await m(x.header,k,x.rows[0]??[]);if(D===null)return;A=D}if(w=Cb(_,k,A,dl).map(D=>({id:Ce(),tableId:d,data:D,updatedAt:Date.now()})),p==="reload"){const D=e.store.rows(d),G=await D.find();await D.bulkRemove(G.map(M=>M.id))}}await e.store.rows(d).bulkInsert(w),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:w.length})}function ul(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??ph(n),s=mh(n,r,hh(t.maxRows));if(s.length===0)return{header:[],rows:[]};const i=s[0],o=s.slice(1).filter(a=>!(a.length===1&&a[0]===""));return{header:i,rows:o}}function hh(e){return e!=null?e+1:void 0}async function fh(e,t){const r=new TextDecoder,s=t+1;let i="",o=0,a=!1,c=0;for(;c<e.size;){const d=new Uint8Array(await e.slice(c,c+1048576).arrayBuffer());c+=1048576;const p=r.decode(d,{stream:!0});for(let m=0;m<p.length;m++){const w=p[m];if(w==='"')a=!a;else if(w===`
`&&!a&&(o+=1,o>=s))return i+p.slice(0,m+1)}i+=p}return i}function fr(e,t={}){const n=e.replace(/\uFEFF/,""),r=t.separator??ph(n),s=mh(n,r,hh(t.maxRows));if(s.length===0)return{columns:[],rows:[]};const i=s[0],o=s.slice(1).filter(y=>!(y.length===1&&y[0]==="")),a=i.map((y,k)=>Ub(y,k)),c=wh(a.map(y=>y.field)),d=o.map(y=>{const k={};for(let x=0;x<c.length;x++)k[c[x]]=y[x]??"";return k}),p=a.map((y,k)=>y.type?y.type:Bb(d.map(x=>x[c[k]]??"").filter(x=>x.length>0))),m=a.map((y,k)=>{const x=p[k]??"string",_={field:c[k],label:y.label,type:x},A=Fb(x),D=y.renderer??A;return D&&(_.renderer=D),y.default!==void 0&&(_.default=y.default),y.max!=null&&(_.max=y.max),y.unique&&(_.unique=!0),y.notnull&&(_.notnull=!0),y.hidden&&(_.hidden=!0),_}),w=d.map(y=>{const k={};for(let x=0;x<c.length;x++){const _=c[x],A=p[x]??"string";k[_]=dl(y[_]??"",A)}return k});return{columns:m,rows:w}}const zb=new Set(["string","number","boolean","date","datetime","array"]),fu={color:"color",image:"image"};function Fb(e){if(e==="date"||e==="datetime"||e==="boolean")return e;if(e==="array")return"tags"}function Ub(e,t){const n=e.trim();if(!n.includes(":"))return{field:Zn(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),s=Zn(r[0]||`col_${t+1}`),i=(r[1]??r[0]??"").trim()||s,o={field:s,label:i},a=(r[2]??"").trim();a&&(zb.has(a)?o.type=a:fu[a]&&(o.type="string",o.renderer=fu[a]));const c=(r[3]??"").trim();c&&(o.default=c);const d=(r[4]??"").trim();if(d){const m=Number(d);Number.isFinite(m)&&m>0&&(o.max=m)}const p=(r[5]??"").toLowerCase();return p.includes("u")&&(o.unique=!0),p.includes("n")&&(o.notnull=!0),p.includes("h")&&(o.hidden=!0),o}function ph(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const i of t)i in n&&(n[i]+=1);let r=",",s=-1;for(const i of[",",";","	"])(n[i]??0)>s&&(r=i,s=n[i]??0);return r}function mh(e,t,n){const r=[];let s=[],i="",o=!1;for(let a=0;a<e.length;a++){const c=e[a];if(o)c==='"'?e[a+1]==='"'?(i+='"',a++):o=!1:i+=c;else if(c==='"')o=!0;else if(c===t)s.push(i),i="";else if(c===`
`||c==="\r"){if(c==="\r"&&e[a+1]===`
`&&a++,s.push(i),r.push(s),s=[],i="",n!=null&&r.length>=n)return r}else i+=c}return(i.length>0||s.length>0)&&(s.push(i),r.push(s)),r}function Bb(e){return e.length===0?"string":e.every(Ni)?"array":e.every(Hb)?"boolean":e.every(Kb)?"number":e.every(Wb)?"datetime":e.every(Vb)?"date":"string"}const qb=/^(true|false|yes|no|0|1)$/i;function Hb(e){return qb.test(e.trim())}function Kb(e){const t=e.trim();if(t===""||Mi(t))return!1;const n=Number(t);return Number.isFinite(n)}function Vb(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Wb(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function dl(e,t){const n=e.trim();switch(t){case"array":return n===""?null:n;case"number":{if(n==="")return null;if(Mi(n))return n;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return gh(n);case"datetime":return Gb(n);default:return e}}function gh(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),s=parseInt(t[2],10),i=t[3];let o=parseInt(i,10);i.length===2&&(o+=2e3);let a,c;return r>12?(a=r,c=s):s>12?(c=r,a=s):(a=r,c=s),`${o.toString().padStart(4,"0")}-${c.toString().padStart(2,"0")}-${a.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function Gb(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${gh(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const s=new Date(e);if(!Number.isNaN(s.getTime())){const i=s.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}return e}function Yb(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}const bh=/\.(csv|tsv|tab)$/i;function hl(e){return e.replace(bh,"")}function fl(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function Qb(e){return!!(bh.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function wh(e){const t=new Map,n=new Set,r=[];for(const s of e){let i=s,o=t.get(s)??0;for(;n.has(i);)o+=1,i=`${s}_${o+1}`;t.set(s,o),n.add(i),r.push(i)}return r}function Jb(e,t,n){return e.map(r=>{const s={};for(let i=0;i<t.length;i++)s[n[i].field]=r[t[i].field];return s})}const Xb=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:wh,importCsvText:cl,init:Db,meta:Ob,parseCsv:fr,parseCsvRaw:ul,readCsvHead:fh,separatorForName:fl,stripDelimitedExt:hl},Symbol.toStringTag,{value:"Module"})),Zb={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},ew={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return pl(e,t)}};function tw(e){e.ui.registerExporter(ew)}function pl(e,t){const n=e.columns.map(i=>i.field),r=e.columns.map(i=>pu(i.label??i.field)),s=t.map(i=>n.map(o=>pu(nw(i.data[o]))).join(","));return[r.join(","),...s].join(`\r
`)}function nw(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function pu(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const rw=Object.freeze(Object.defineProperty({__proto__:null,init:tw,meta:Zb,serializeCsv:pl},Symbol.toStringTag,{value:"Module"}));var sw=Object.defineProperty,iw=Object.getOwnPropertyDescriptor,fn=(e,t,n,r)=>{for(var s=r>1?void 0:r?iw(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&sw(t,n,s),s};function es(e,t={}){return(Ye.instance??yh()).open(e,t).then(r=>r?.map(s=>s.index)??null)}function ow(e,t={}){return(Ye.instance??yh()).open(e,t)}function yh(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function aw(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Ye=class extends xe{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.modes=[],this.offerViewModes=!1,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=[];this.selected.forEach((n,r)=>{if(!n)return;const s=(this.items[r]?.kind??"table")==="view";t.push(s&&this.offerViewModes?{index:r,mode:this.modes[r]??"projection"}:{index:r})}),t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Ye.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ye.instance===this&&(Ye.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.offerViewModes=t.offerViewModes??!1,this.modes=e.map(()=>t.defaultViewMode??"projection"),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e,t){this.selected=this.items.map((n,r)=>t&&(n.kind??"table")!==t?this.selected[r]??!1:e)}setMode(e,t){const n=this.modes.slice();n[e]=t,this.modes=n}indicesOf(e){return this.items.map((t,n)=>(t.kind??"table")===e?n:-1).filter(t=>t>=0)}get sectioned(){return this.items.some(e=>e.kind!==void 0)}get selectedCount(){return this.selected.filter(Boolean).length}renderSection(e,t){const n=this.indicesOf(e);if(n.length===0)return $``;const r=n.filter(s=>this.selected[s]).length;return $`
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
    `}renderRow(e,t){const n=(e.kind??"table")==="view";return $`
      <li>
        <input type="checkbox" id=${`tsel-${t}`} .checked=${this.selected[t]??!1} @change=${()=>this.toggle(t)} />
        <label for=${`tsel-${t}`}>
          <span class="name">${e.name}</span>
          ${e.hidden?$`<span class="tag-hidden">hidden</span>`:""}
          <span class="size">${aw(e.size)}</span>
          ${e.detail?$`<span class="detail">${e.detail}</span>`:""}
        </label>
        ${n&&this.offerViewModes?this.renderModeToggle(t):""}
      </li>
    `}renderModeToggle(e){const t=this.modes[e]??"projection";return $`
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
    `}render(){const e=this.selectedCount;return $`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
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
            ${this.message?$`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            ${this.sectioned?$`${this.renderSection("table","Tables")}${this.renderSection("view","Views")}`:$`<ul class="tables">
                  ${this.items.map((t,n)=>this.renderRow(t,n))}
                </ul>`}
          </div>
        </form>
      </dialog>
    `}};Ye.instance=null;Ye.styles=[ft,Se`
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
    `];fn([z()],Ye.prototype,"items",2);fn([z()],Ye.prototype,"selected",2);fn([z()],Ye.prototype,"heading",2);fn([z()],Ye.prototype,"message",2);fn([z()],Ye.prototype,"confirmLabel",2);fn([z()],Ye.prototype,"modes",2);fn([z()],Ye.prototype,"offerViewModes",2);Ye=fn([Oe("table-select-dialog")],Ye);const lw=Object.freeze(Object.defineProperty({__proto__:null,get TableSelectDialog(){return Ye},chooseDatabaseObjects:ow,chooseTables:es},Symbol.toStringTag,{value:"Module"}));function ml(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let s=0;s<e.length;s++)r[t[s].field]=n[e[s].field];return r}}function mu(e,t){if(t.length===0)return null;const n=new Set(t.map(s=>s.from)),r={};for(const s of Object.keys(e))n.has(s)||(r[s]=e[s]);for(const{from:s,to:i}of t)Object.prototype.hasOwnProperty.call(e,s)&&(r[i]=e[s]);return r}function zi(e,t,n=[]){const r=new Set(e.map(a=>a.field)),s=new Set(n),i=[...e],o=[];for(const a of t)r.has(a.field)||s.has(a.field)||(i.push(a),o.push(a.field),r.add(a.field));return{columns:i,newFields:o}}async function gl(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function vh(e,t,n,r){const{workspaceId:s,importerId:i,target:o,maxRows:a}=r;let c,d,p,m=!1,w=0,y,k=null;const x=A=>e.store.rows(A),_=async A=>{if(m)return!0;if(o.kind==="new"){let D=A.columns??[];if(r.editColumns){const M=await r.editColumns(D);if(M===null)return!1;k=ml(D,M),D=M}c=Ce(),d=dn(await gl(e,s),t);const G={id:c,workspaceId:s,name:d,code:Me(d),columns:D,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(G),p=!0}else{const D=await e.store.tables.findOne(o.tableId);if(!D)throw new Error("The table to import into no longer exists.");if(c=D.id,d=D.name,p=!1,o.kind==="overwrite"){const G=await x(c).find();await x(c).bulkRemove(G.map(M=>M.id))}if(A.columns?.length){const G=zi(D.columns,A.columns,D.deletedColumns??[]);G.newFields.length>0&&await e.store.tables.patch(c,{columns:G.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:i,tableId:c}),m=!0,!0};for await(const A of n){if(a!=null&&w>=a)break;if(!await _(A))return null;A.totalCount!=null&&(y=A.totalCount);let D=A.rows;if(a!=null&&w+D.length>a&&(D=D.slice(0,a-w)),D.length===0)continue;k&&(D=D.map(k));const G=Date.now(),M=D.map(re=>({id:Ce(),tableId:c,data:re,updatedAt:G}));await x(c).bulkInsert(M),w+=M.length,r.onProgress?.(w,y)}return!m&&!await _({})?null:(e.events.emit("import:after",{source:i,tableId:c,rowCount:w}),{tableId:c,tableName:d,rowCount:w,created:p})}function gu(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(s,i)=>cs(e,s,i??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function cw(e,t){if(t.length<=1)return t;const n=await es(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function uw(e,t,n,r,s){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const i=t.reference(n,r);let o=[];for await(const d of t.read(n,r)){o=d.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const a=dn(await gl(e,s),r.name),c=Ce();return await e.store.tables.insert({id:c,workspaceId:s,name:a,code:Me(a),columns:o,view:"table",source:i,readonly:!0,updatedAt:Date.now()}),{tableId:c,tableName:a,rowCount:0,created:!0}}async function Fi(e,t,n,r){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=gu(e,r),o=await t.list(i,n);if(o.length===0)throw new Error("No tables found at that source.");const a=await cw(t,o);if(a===null)return{landed:[],failed:[],cancelled:!0};const c=[],d=[];for(const p of a)try{if(r.mode==="reference"){c.push(await uw(e,t,i,p,s));continue}const m=r.target;let w;m.kind!=="new"&&(w=(await e.store.tables.findOne(m.tableId))?.columns);const y=gu(e,r,{...w?{targetColumns:w}:{}}),k=t.read(y,p),x=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),_=await vh(e,p.name,k,{workspaceId:s,importerId:t.id,target:m,...x?{origin:x}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(_===null)return{landed:c,failed:d,cancelled:!0};c.push(_)}catch(m){d.push({name:p.name,error:m?.message??String(m)})}return{landed:c,failed:d,cancelled:!1}}async function $h(e,t,n){const r=new Map;if(n.length===0)return r;const s=(await e.find()).filter(a=>a.workspaceId===t),i=new Map(s.map(a=>[a.name,a])),o=new Map(s.map(a=>[a.id,a]));for(const a of n){if(!dw(a))continue;const c=i.get(a.name)??o.get(a.id),d=c?.id??a.id;c&&r.set(a.id,c.id);const p=c?c.builtin:a.builtin,m={...a,id:d,workspaceId:t};p===void 0?delete m.builtin:m.builtin=p,await e.upsert(m),i.set(m.name,m),o.set(m.id,m)}return r}function dw(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const hw={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function fw(e){e.ui.registerImporter(xh),e.ui.registerDropHandler(async t=>{const r=xw(t).filter(Sw);if(r.length===0)return!1;t.preventDefault();for(const s of r)await pw(e,t,s)||await gw(e,s);return!0})}async function pw(e,t,n){const{tableIdAtNode:r}=await Re(async()=>{const{tableIdAtNode:p}=await Promise.resolve().then(()=>Jl);return{tableIdAtNode:p}},void 0),s=r(t.target);if(!s)return!1;const i=await e.store.tables.findOne(s);if(!i)return!1;if(i.readonly===!0||i.source!=null)return e.ui.dialogs.toast(`"${i.name}" is read-only, so the file was imported as a new table.`,{kind:"warning",title:"Import JSON"}),!1;const o=await n.text();let a;try{a=JSON.parse(ji(o))}catch{return!1}const c=us(a,oi(n.name));if(c.length===0)return!1;if(c.length>1)return e.ui.dialogs.toast(`"${n.name}" holds ${c.length} tables — drop it outside a window to import them.`,{kind:"warning",title:"Import JSON"}),!0;const d=await Pi(e,{fileName:n.name,tableName:i.name,title:"Import JSON"});return d?d==="new"?!1:(await kh(e,i,c[0],d),!0):!0}async function kh(e,t,n,r){const s=e.store.rows(t.id);e.events.emit("import:before",{source:"json",tableId:t.id});let i;if(r==="recreate")await e.store.tables.patch(t.id,{columns:n.columns,updatedAt:Date.now()}),i=n.rows;else{const a=n.columns.map(d=>d.field);let c=t.columns.map(d=>d.field);if(!ch(a,t.columns)){const{mapColumnsToTable:d}=await Re(async()=>{const{mapColumnsToTable:w}=await import("./column-map-dialog-DZD7vRlu.js");return{mapColumnsToTable:w}},[]),p=a.map(w=>String(n.rows[0]?.[w]??"")),m=await d(a,t.columns,t.name,p);if(m===null)return;c=m}i=n.rows.map(d=>{const p={};return a.forEach((m,w)=>{const y=c[w];y&&(p[y]=d[m])}),p})}if(r!=="append"){const a=await s.find();await s.bulkRemove(a.map(c=>c.id))}const o=i.map(a=>({id:Ce(),tableId:t.id,data:a,updatedAt:Date.now()}));await s.bulkInsert(o),e.events.emit("import:after",{source:"json",tableId:t.id,rowCount:o.length})}function bl(e){return He(e)?xa(e)||Array.isArray(e.tables)?!0:Ch(e):!1}function mw(e){return e.kind==="file"&&e.file?oi(e.file.name):e.kind==="url"&&e.url?oi(Ht(e.url)):oi(e.name??"imported")}const xh={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Ht(t.url)}…`):n=t.text??"";const r=mw(t);let s;try{s=JSON.parse(ji(n))}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`,{cause:o})}const i=us(s,r);return i.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:i.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function oi(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function gw(e,t){const n=await t.text();let r;try{r=JSON.parse(ji(n))}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(bl(r)){await wl(e,n,t.name);return}const s=await Fi(e,xh,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=s.landed.reduce((o,a)=>o+a.rowCount,0);s.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${i.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function wl(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("json-import: no active workspace");let i;try{i=JSON.parse(ji(t))}catch(_){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${_.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",a=us(i,o);if(a.length===0)return;let c=a;if(a.length>1){const _=await es(a.map(A=>({name:A.name,size:A.rows.length})),{title:"Import tables",message:`"${n}" contains ${a.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!_)return;c=_.map(A=>a[A])}const d=(await e.store.tables.find()).filter(_=>_.workspaceId===s),p=new Set(c.map(_=>_.name)),m=d.filter(_=>p.has(_.name));let w;if(m.length===0&&c.length===1)w="append-new";else if(c.length===1&&m.length===1){const _=m[0],A=await Pi(e,{fileName:n,tableName:_.name,title:"JSON import",reason:`A table named "${_.name}" already exists in this workspace.`});if(!A)return;if(A==="reload"||A==="append"){await kh(e,_,c[0],A);return}w=A==="recreate"?"overwrite-matching":"append-new"}else{const _=m.length>0?[`Overwrite matching (${m.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],A=await e.ui.dialogs.choice(`Importing ${c.length} table${c.length===1?"":"s"} from "${n}".${m.length>0?`

${m.length} table${m.length===1?"":"s"} share a name with existing data.`:""}`,_,"JSON import");if(!A)return;A.startsWith("Overwrite matching")?w="overwrite-matching":A==="Replace entire workspace"?w="replace-workspace":w="append-new"}const y=2e3,k=c.reduce((_,A)=>_+(A.source?0:Math.min(A.rows.length,r.maxRows??1/0)),0);let x=null;if(k>=y){const{TopProgress:_}=await Re(async()=>{const{TopProgress:A}=await import("./top-progress-CjQ8wnoY.js");return{TopProgress:A}},[]);x=_.begin(`Importing ${n}…`)}try{if(w==="replace-workspace")for(const M of d){const re=e.store.rows(M.id),W=await re.find();await re.bulkRemove(W.map(T=>T.id)),await e.store.tables.remove(M.id)}const _=new Map(d.map(M=>[M.name,M])),A=new Map,D=[];let G=0;for(const M of c){const re=M.source,W=M.origin??(!re&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let T;const H=w==="overwrite-matching"?_.get(M.name):void 0;let J=M.columns,de=M.rows;if(r.editColumns&&!H&&!re){const q=await r.editColumns(J,M.name);if(q===null)continue;de=kw(de,J,q),J=q}if(H){if(T=H.id,!H.source){const q=e.store.rows(T),X=await q.find();await q.bulkRemove(X.map(K=>K.id))}await e.store.tables.patch(T,{columns:J,...M.title?{title:M.title}:{},...M.windowGeometry?{windowGeometry:M.windowGeometry}:{},...M.sortColumn?{sortColumn:M.sortColumn,sortAsc:M.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...M.filters?{filters:M.filters}:{},...M.labelColumn?{labelColumn:M.labelColumn}:{},...M.info?{info:M.info}:{},...M.deletedColumns?{deletedColumns:M.deletedColumns}:{},...M.readonly?{readonly:!0}:{},source:re??void 0,origin:W??void 0,updatedAt:Date.now()})}else{T=Ce(),e.events.emit("import:before",{source:"json",tableId:T});const q=await e.store.tables.insert({id:T,workspaceId:s,name:M.name,code:Me(M.name),columns:J,view:"table",...M.title?{title:M.title}:{},...M.windowGeometry?{windowGeometry:M.windowGeometry}:{},...M.sortColumn?{sortColumn:M.sortColumn,sortAsc:M.sortAsc??!0}:{},...M.filters?{filters:M.filters}:{},...M.labelColumn?{labelColumn:M.labelColumn}:{},...M.info?{info:M.info}:{},...M.deletedColumns?{deletedColumns:M.deletedColumns}:{},...M.readonly?{readonly:!0}:{},...re?{source:re}:{},...W?{origin:W}:{},updatedAt:Date.now()});q.name!==M.name&&D.push([M.name,q.name])}A.set(M.name,T);let ge=0;if(!re){const q=e.store.rows(T),K=(r.maxRows!=null?de.slice(0,r.maxRows):de).map(ae=>({id:Ce(),tableId:T,data:ae,updatedAt:Date.now()}));await q.bulkInsert(K),ge=K.length,G+=ge,x?.fraction(k>0?G/k:1)}e.events.emit("import:after",{source:"json",tableId:T,rowCount:ge})}await bw(e,i,s,A,w==="replace-workspace"),D.length>0&&e.ui.dialogs.toast(D.map(([M,re])=>`“${M}” came in as “${re}”`).join(`
`),{kind:"info",title:"Names must be unique"})}finally{x?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function bw(e,t,n,r,s){if(!He(t))return;const i=t,o=Array.isArray(i.viewTemplates)?i.viewTemplates:[],a=Array.isArray(i.viewInstances)?i.viewInstances:[];if(o.length===0&&a.length===0)return;if(s){const d=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===n);await e.store.viewInstances.bulkRemove(d.map(p=>p.id))}const c=await $h(e.store.viewTemplates,n,o);for(const d of a){if(!He(d)||typeof d.id!="string")continue;const p=(d.tableName?r.get(d.tableName):void 0)??d.tableId;if(!p)continue;const m=c.get(d.templateId)??d.templateId;await e.store.viewInstances.upsert({...d,workspaceId:n,tableId:p,templateId:m})}}function us(e,t){if(He(e)&&xa(e))return bu(e);if(He(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const s of n.tables){if(Sh(s)){r.push(wu(s));continue}He(s)&&xa(s)&&r.push(...bu(s))}return r}if(Ch(e))return[wu(e)];if(Array.isArray(e)){const n=e.filter(He);return n.length===0?[]:[{name:t,...yu(n)}]}return He(e)?[{name:t,...yu([e])}]:[]}function xa(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!He(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function bu(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!He(r))continue;const s=r;if(!Array.isArray(s.dataArray)||!Array.isArray(s.columns))continue;const i=n.replace(/\.table\.json$/,""),o=s.columns.map(p=>ww(p)),a=o.map(p=>p.field),c=s.dataArray.filter(p=>Array.isArray(p)).map(p=>{const m={};for(let w=0;w<a.length;w++)m[a[w]]=p[w];return m}),d={name:i,columns:o,rows:c};if(s.elementRect&&typeof s.elementRect.x=="number"&&typeof s.elementRect.y=="number"){const p=s.elementRect;d.windowGeometry={x:p.x,y:p.y,w:p.width??600,h:p.height??400,z:p.zIndex??100,minimized:!!p.minimized,maximized:!!p.maximized}}typeof s.sortColumn=="number"&&s.sortColumn>=0&&s.sortColumn<a.length&&(d.sortColumn=a[s.sortColumn],d.sortAsc=(s.sortDirection??"asc")!=="desc"),t.push(d)}return t}function ww(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",s={field:t,label:n,type:r};return e.isUnique&&(s.unique=!0),e.isNotNull&&(s.notnull=!0),s}function Sh(e){return He(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Ch(e){return Sh(e)&&Array.isArray(e.rows)}function wu(e){const t=e,n=He(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,s=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,i=typeof t.title=="string"?t.title:void 0,o=He(t.filters)?t.filters:void 0,a=typeof t.labelColumn=="string"?t.labelColumn:void 0,c=He(t.info)?t.info:void 0,d=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(y=>typeof y=="string"):void 0,p=t.readonly===!0?!0:void 0,m=He(t.source)&&typeof t.source.type=="string"?t.source:void 0,w=He(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(yw),rows:Array.isArray(e.rows)?e.rows.filter(He):[],...i?{title:i}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:s??!0}:{},...o?{filters:o}:{},...a?{labelColumn:a}:{},...c?{info:c}:{},...d?{deletedColumns:d}:{},...p?{readonly:p}:{},...m?{source:m}:{},...w?{origin:w}:{}}}function yw(e){if(!He(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",s=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(s=s??r,r="string");const i={field:n,label:String(t.label??n),type:r};return s&&(i.renderer=s),typeof t.script=="string"&&(i.script=t.script),typeof t.validate=="string"&&(i.validate=t.validate),t.default!==void 0&&(i.default=t.default),typeof t.max=="number"&&(i.max=t.max),typeof t.width=="number"&&(i.width=t.width),typeof t.description=="string"&&(i.description=t.description),typeof t.units=="string"&&(i.units=t.units),t.unique===!0&&(i.unique=!0),t.notnull===!0&&(i.notnull=!0),t.hidden===!0&&(i.hidden=!0),t.sortable===!1&&(i.sortable=!1),t.filterable===!1&&(i.filterable=!1),t.readonly===!0&&(i.readonly=!0),i}function yu(e){const t=new Set;for(const s of e)for(const i of Object.keys(s))t.add(i);return{columns:Array.from(t).map(s=>({field:s,label:s,type:vw(e.map(i=>i[s]))})),rows:e}}function vw(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(Ni)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&$w(n))?"date":"string"}function $w(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function kw(e,t,n){const r=ml(t,n);return r?e.map(r):e}function He(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function xw(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}return[]}function Sw(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const Cw=Object.freeze(Object.defineProperty({__proto__:null,init:fw,isWorkspaceDump:bl,meta:hw,parsedToTables:us,restoreWorkspaceDump:wl},Symbol.toStringTag,{value:"Module"}));function yl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ts(e){return e.replace(/&(?![a-zA-Z][a-zA-Z0-9]*;|#\d+;|#x[0-9a-fA-F]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _h(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function ai(e){const t=e.trim();return t===""?null:/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)?/^(https?|mailto|tel):/i.test(t)?t:null:t}function _w(e){const t=_h(e).trim(),n=t.replace(/[^!-~]/g,"");return ai(n)===null?null:t}const Eh="script|style|iframe|object|embed|noscript|template|svg|math|frame|frameset",Ew=new RegExp(`<(${Eh})\\b(?:"[^"]*"|'[^']*'|[^"'>])*>[\\s\\S]*?<\\/\\s*\\1\\s*>`,"gi"),Tw=new RegExp(`<(?:${Eh})\\b[\\s\\S]*$`,"i"),Iw=new Set(["br","hr","img","source","wbr","col"]),Th=new Set(["a","abbr","audio","b","blockquote","br","caption","cite","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","h1","h2","h3","h4","h5","h6","hr","i","img","ins","kbd","li","mark","ol","p","pre","s","samp","small","source","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul","var","video","wbr"]),Aw=new Set(["title","dir","lang"]),Rw={a:new Set(["href"]),audio:new Set(["src","controls"]),col:new Set(["span"]),colgroup:new Set(["span"]),img:new Set(["src","alt","width","height"]),ol:new Set(["start","reversed"]),source:new Set(["src","type"]),td:new Set(["colspan","rowspan","headers"]),th:new Set(["colspan","rowspan","scope","headers"]),time:new Set(["datetime"]),video:new Set(["src","controls","poster","width","height"])},Ow=new Set(["href","src","poster"]),Dw=/([a-zA-Z_:][a-zA-Z0-9_:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Ih=/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s(?:"[^"]*"|'[^']*'|[^"'>])*)?)\s*\/?>/g;function Lw(e,t,n){const r=t.toLowerCase();if(!Th.has(r))return"";if(e)return Iw.has(r)?"":`</${r}>`;const s=Rw[r];let i=`<${r}`,o=null,a=!1;for(const c of n.matchAll(Dw)){const d=c[1].toLowerCase();if(!Aw.has(d)&&!s?.has(d))continue;const p=c[2]??c[3]??c[4];if(p===void 0){i+=` ${d}`;continue}if(Ow.has(d)){const m=_w(p);if(m===null)continue;d==="href"&&(o=m),d==="src"&&(a=!0),i+=` ${d}="${ts(m)}"`;continue}i+=` ${d}="${ts(p)}"`}return r==="a"&&o!==null&&!o.startsWith("#")&&(i+=' target="_blank" rel="noopener noreferrer"'),(r==="img"||r==="source")&&!a?"":`${i}>`}function Ah(e){return e.replace(/<!--[\s\S]*?-->/g,"").replace(Ew,"").replace(Tw,"").replace(/<[!?][^>]*>/g,"")}const Pw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","circle","cite","code","col","colgroup","data","datalist","dd","defs","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","line","link","main","map","mark","marquee","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","path","picture","polygon","polyline","pre","progress","q","rect","rp","rt","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","use","var","video","wbr"]);function Rh(e,t,n,r){const s=n.toLowerCase();return Th.has(s)||Pw.has(s)||s.includes("-")?Lw(t,n,r):yl(e)}function Mw(e){const t=Ah(e);let n="",r=0;for(const s of t.matchAll(Ih))n+=ts(t.slice(r,s.index)),n+=Rh(s[0],s[1]==="/",s[2],s[3]),r=s.index+s[0].length;return n+ts(t.slice(r))}const jw=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Oh(e){return jw.test(e)}function Nw(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return _h(e.replace(/<[^>]*>/g,""))}function zw(e){return(Oh(e)?Nw(e):e).replace(/\s+/g," ").trim()}const Mr="",Fw=/\uE000(\d+)\uE000/g;function vu(e){return e.startsWith("#")?"":' target="_blank" rel="noopener noreferrer"'}const Sa=/^\s*(```+|~~~+)\s*([A-Za-z0-9_+-]*)\s*$/,Ca=/^(#{1,6})\s+(.*)$/,vl=/^\s*([-*_])(\s*\1){2,}\s*$/,_a=/^\s*>/,Dh=/^\s*(?:[-*+]|\d+[.)])\s+/,Lh=/^\s*\|?[\s:|-]+\|[\s:|-]*$/,Uw="address|article|aside|blockquote|caption|col|colgroup|dd|details|div|dl|dt|figcaption|figure|footer|form|h[1-6]|header|hr|iframe|legend|li|main|nav|ol|p|pre|script|section|style|summary|table|tbody|td|tfoot|th|thead|tr|ul",Ph=new RegExp(`^\\s*</?(?:${Uw})(?:[\\s/>]|$)`,"i");function Bw(e){return Sa.test(e)||Ca.test(e)||vl.test(e)||_a.test(e)||Dh.test(e)||Ph.test(e)}function Qn(e){const t=[];let n=e.replaceAll(Mr,"").replace(/(`+)([\s\S]*?)\1/g,(r,s,i)=>(t.push(`<code>${yl(i)}</code>`),`${Mr}${t.length-1}${Mr}`));return n=Ah(n).replace(Ih,(r,s,i,o)=>{const a=Rh(r,s==="/",i,o);return a===""?"":(t.push(a),`${Mr}${t.length-1}${Mr}`)}),n=ts(n),n=n.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const a=ai(i);return a===null?r:`<img src="${a}" alt="${s}"${o?` title="${o}"`:""}>`}),n=n.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(r,s,i,o)=>{const a=ai(i);return a===null?r:`<a href="${a}"${o?` title="${o}"`:""}${vu(a)}>${s}</a>`}),n=n.replace(/&lt;((?:https?|mailto):[^\s&]+)&gt;/g,(r,s)=>{const i=ai(s);return i===null?r:`<a href="${i}"${vu(i)}>${i}</a>`}),n=n.replace(/~~([\s\S]+?)~~/g,"<del>$1</del>"),n=n.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),n=n.replace(/__([\s\S]+?)__/g,"<strong>$1</strong>"),n=n.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g,"$1<em>$2</em>"),n=n.replace(/(^|[\s(])_(?!\s)([^_]+?)_(?=$|[\s).,;:!?])/g,"$1<em>$2</em>"),n=n.replace(/ {2,}\n/g,`<br>
`),n.replace(Fw,(r,s)=>t[Number(s)]??"")}function ia(e){return e.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}const qw=e=>{const t=e.startsWith(":"),n=e.endsWith(":");return t&&n?' style="text-align:center"':n?' style="text-align:right"':t?' style="text-align:left"':""},Hw=[/^ {0,3}#{1,6}\s+\S/,/^ {0,3}>[ \t]+\S/,/^ {0,3}[-*+][ \t]+\S/,/^ {0,3}\d+[.)][ \t]+\S/,/^ {0,3}(?:```|~~~)/,vl],Kw=[/\*\*(?!\s)[^*\n]+\*\*/,/~~(?!\s)[^~\n]+~~/,/`[^`\n]+`/,/!?\[[^\]\n]*\]\([^)\s]+\)/];function Vw(e){return typeof e!="string"||e.trim()===""?null:!Ww.test(e)&&$u(e)?"markdown":Oh(e)?"html":$u(e)?"markdown":null}const Ww=/^\s*<\/?[a-z][a-z0-9]*(\s|\/?>)/i;function $u(e){if(typeof e!="string"||e.trim()==="")return!1;const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.some(n=>Hw.some(r=>r.test(n)))||Kw.some(n=>n.test(e))?!0:t.some((n,r)=>r>0&&Lh.test(n)&&n.includes("-")&&(t[r-1]??"").includes("|"))}function Ui(e){if(e==null)return"";const t=typeof e=="string"?e:String(e);if(t.trim()==="")return"";const n=t.replace(/\r\n?/g,`
`).split(`
`),r=[];let s=0;const i=o=>{const a=[];for(;s<n.length&&o(n[s]);)a.push(n[s++]);return a};for(;s<n.length;){const o=n[s];if(o.trim()===""){s++;continue}const a=Sa.exec(o);if(a){const p=a[1].slice(0,3);s++;const m=i(y=>!y.trim().startsWith(p));s<n.length&&s++;const w=a[2]?` class="language-${a[2]}"`:"";r.push(`<pre><code${w}>${yl(m.join(`
`))}</code></pre>`);continue}if(Ph.test(o)){const p=i(w=>w.trim()!==""),m=Mw(p.join(`
`));m.trim()!==""&&r.push(m);continue}const c=Ca.exec(o);if(c){const p=c[1].length;r.push(`<h${p}>${Qn(c[2].replace(/\s+#+\s*$/,""))}</h${p}>`),s++;continue}if(vl.test(o)){r.push("<hr>"),s++;continue}if(_a.test(o)){const p=i(m=>_a.test(m)||m.trim()!=="");r.push(`<blockquote>${Ui(p.map(m=>m.replace(/^\s*>\s?/,"")).join(`
`))}</blockquote>`);continue}if(o.includes("|")&&s+1<n.length&&Lh.test(n[s+1])&&n[s+1].includes("-")){const p=ia(o),m=ia(n[s+1]).map(qw);s+=2;const w=i(x=>x.trim()!==""&&x.includes("|")),y=p.map((x,_)=>`<th${m[_]??""}>${Qn(x)}</th>`).join(""),k=w.map(x=>`<tr>${ia(x).map((_,A)=>`<td${m[A]??""}>${Qn(_)}</td>`).join("")}</tr>`);r.push(`<table><thead><tr>${y}</tr></thead><tbody>${k.join("")}</tbody></table>`);continue}if(Dh.test(o)){const p=i(m=>m.trim()!==""&&!Sa.test(m)&&!Ca.test(m));r.push(Mh(p));continue}const d=i(p=>p.trim()!==""&&!Bw(p));if(d.length===0){r.push(`<p>${Qn(o)}</p>`),s++;continue}r.push(`<p>${Qn(d.join(`
`))}</p>`)}return r.join(`
`)}function Mh(e){const t=[];let n=null,r=null;for(const o of e){const a=/^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$/.exec(o);if(!a){t[t.length-1]?.text.push(o.trim());continue}const c=a[1].length;if(r??=c,c>r&&t.length>0){t[t.length-1].children.push(o.slice(Math.min(c,r+2)));continue}n??=a[3]!==void 0,t.push({text:[a[4]],children:[],indent:c})}const s=n?"ol":"ul",i=t.map(o=>`<li>${Qn(o.text.join(`
`))}${o.children.length>0?Mh(o.children):""}</li>`).join("");return`<${s}>${i}</${s}>`}const jh={goto:"goto",table:"goto",search:"search",preview:"preview",view:"view",cmd:"cmd",ui:"ui"},Gw={goto:{min:1,rest:!1},search:{min:1,rest:!0},preview:{min:2,rest:!1},view:{min:0,rest:!0},cmd:{min:1,rest:!0},ui:{min:1,rest:!1}};class at extends Error{}function $l(e){return(e.trim().replace(/^\/+/,"").split(/[/?;]/,1)[0]??"").toLowerCase()in jh}function Nh(e){const t=e.split(";").map(n=>n.trim()).filter(Boolean);if(t.length===0)throw new at("Empty commandlet.");return t.map(Yw)}function Yw(e){const t=e.indexOf("?"),n=t<0?e:e.slice(0,t),r=t<0?"":e.slice(t+1),s=n.split("/").filter(y=>y!=="").map(y=>Qw(y,e));if(s.length===0)throw new at(`No action in "${e}".`);const i=(s[0]??"").toLowerCase(),o=jh[i],a=o??"goto";let c=o?s.slice(1):s;const d=Gw[a];if(c.length<d.min)throw new at(`"${a}" needs ${d.min} target${d.min===1?"":"s"} — got "${e}".`);const p=Math.max(0,d.min-1);d.rest&&c.length>p&&(c=[...c.slice(0,p),c.slice(p).join("/")]);const m={},w={};for(const[y,k]of new URLSearchParams(r))y.startsWith("@")?w[y.slice(1).toLowerCase()]=k:y!==""&&(m[y]=k);return{verb:a,targets:c,filters:m,options:w,raw:e}}function Qw(e,t){try{return decodeURIComponent(e)}catch{throw new at(`Bad percent-encoding in "${t}".`)}}function zh(e,t){const n=s=>s.replace(/\$([A-Za-z_][A-Za-z0-9_]*|\d+)/g,(i,o)=>t[o]??i),r=s=>Object.fromEntries(Object.entries(s).map(([i,o])=>[n(i),n(o)]));return{verb:e.verb,targets:e.targets.map(n),filters:r(e.filters),options:r(e.options),raw:e.raw}}function Jw(e,t){const r=(Array.isArray(e)?e:e.split("/").filter(Boolean)).map(o=>encodeURIComponent(o)).join("/"),s=new URLSearchParams;for(const[o,a]of Object.entries(t??{}))s.append(o,String(a));const i=s.toString();return`#${r}${i?`?${i}`:""}`}function Xw(e,t){return Jw(e,t)}const Ea={markdownToHtml:Ui,cmdlet:Xw},kl=Object.keys(Ea),ku=new Map;function Zw(e){const t=ku.get(e);if(t)return t;const n=new Function("row",...kl,"easydb",`${e}
return render(row);`);return ku.set(e,n),n}function Fh(){return[...kl.map(e=>Ea[e]),Ea]}function ds(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=Zw(e)}catch(r){return{ok:!1,label:"compile error",message:yi(r)}}try{return{ok:!0,value:n(t,...Fh())}}catch(r){return{ok:!1,label:"runtime error",message:yi(r)}}}function yi(e){return e instanceof Error?e.message:String(e)}const xu=new Map;function ey(e){const t=xu.get(e);if(t)return t;const n=new Function("value","row",...kl,"easydb",`${e}
return validate(value, row);`);return xu.set(e,n),n}function ty(e,t,n){if(!e||!e.trim())return{ok:!0};let r;try{r=ey(e)}catch(s){return{ok:!1,message:`Validation script has a compile error: ${yi(s)}`}}try{return r(t,n,...Fh()),{ok:!0}}catch(s){return{ok:!1,message:yi(s)||"Rejected by this column’s validation script."}}}const ny=new Set(["rowid"]);function xl(e){return ny.has(e.trim().toLowerCase())}function ry(e){const t=new Map,n=(s,i)=>{if(!s||!i)return;let o=t.get(s);o||t.set(s,o=new Set),o.add(i)};for(const s of e.columns)s.from.kind==="source"&&n(s.from.alias,s.from.field);for(const s of e.sources)for(const i of s.join?.on??[])n(s.alias,i.field),n(i.eqAlias,i.eqField);const r={};for(const s of e.sources)r[s.alias]=[...t.get(s.alias)??[]];return r}function sy(e,t){const n=e.sources[0];if(!n)return{rows:[],provenance:new Map};let s=(t[n.alias]??[]).map(d=>({[n.alias]:d}));for(let d=1;d<e.sources.length;d++){const p=e.sources[d];if(!p)continue;const m=t[p.alias]??[],w=p.join,y=[];for(const k of s){const x=w?m.filter(_=>w.on.every(A=>oy(_.data[A.field],k[A.eqAlias]?.data[A.eqField]))):[];if(x.length>0)for(const _ of x)y.push({...k,[p.alias]:_});else w?.type==="left"&&y.push({...k,[p.alias]:void 0})}s=y}const i=[],o=new Map,a=new Map,c=e.limit!=null&&e.limit>0?e.limit:1/0;for(const d of s){if(i.length>=c)break;const p=d[n.alias];if(!p)continue;const m=iy(e.columns,d);if(!ay(m,e.filters))continue;const w=a.get(p.id)??0;a.set(p.id,w+1);const y=`${p.id}#${w}`,k={};for(const[x,_]of Object.entries(d))_&&(k[x]=_.id);o.set(y,k),i.push({id:y,tableId:"",data:m,updatedAt:ly(d)})}return{rows:i,provenance:o}}function iy(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const s=t[r.from.alias]?.data[r.from.field];n[r.field]=s===void 0?null:s}for(const r of e)if(r.from.kind==="script"){const s=ds(r.from.script,n);n[r.field]=s.ok?s.value:void 0}return n}function oy(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function ay(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const s=e[n];if(!(s==null?"":String(s)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function ly(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function Bi(e){const t=new Set(e.sources.map(r=>r.alias)),n=new Set;for(const r of e.columns)r.from.kind==="source"&&t.has(r.from.alias)&&n.add(r.field);return n}function Uh(e,t,n=[],r=[]){const s=Bi(e),i=new Map(n.map(p=>[p.field,p])),o=new Set(r),a=new Map;for(const p of e.columns)!o.has(p.field)&&!a.has(p.field)&&a.set(p.field,p);const c=[];for(const p of n)a.has(p.field)&&!c.includes(p.field)&&c.push(p.field);for(const p of a.keys())c.includes(p)||c.push(p);const d=[];for(const p of c){const m=a.get(p);if(!m)continue;const w=i.get(m.field);let y;if(w)y={...w};else if(m.from.kind==="source"){const k=m.from,x=(t[k.alias]??[]).find(_=>_.field===k.field);y=x?{...x,field:m.field}:{field:m.field,label:m.label??m.field,type:m.type??"string"},xl(k.field)&&(y.hidden=!0)}else y={field:m.field,label:m.label??m.field,type:m.type??"string"},y.script=m.from.script;s.has(m.field)?delete y.readonly:y.readonly=!0,d.push(y)}return d}function cy(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function uy(e,t){const n=cy(e),r={},s=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],i=[];for(const o of s){const a=n.get(o.field);a&&i.push({field:a,asc:o.asc})}if(i.length>0){r.sortBy=i;const o=i[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[a,c]of Object.entries(t.filters)){const d=n.get(a);d&&c&&(o[d]=c)}Object.keys(o).length>0&&(r.filters=o)}return r}function dy(e,t){return t.get(e.tableName)}function hy(e,t){const n=new Map(t.map(i=>[i.id,i])),r=new Map;for(const i of t)r.has(i.name)||r.set(i.name,i);const s=(i,o)=>{if(o.has(i))return!0;const a=n.get(i);if(a?.source?.type!=="projection")return!1;const c=a.source.config;if(!c||!Array.isArray(c.sources))return!1;const d=new Set(o).add(i);for(const p of c.sources){const m=dy(p,r);if(m&&s(m.id,d))return!0}return!1};return s(e,new Set)}const jr=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),oa=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,Su=e=>e==="id"||e.endsWith("id");function fy(e,t){const n=jr(e.field),r=jr(t.field);if(!n||!r)return 0;const s=jr(e.table)===jr(t.table);if(n===r)return s||n==="id"?0:n.endsWith("id")?9:7;const i=(a,c,d)=>{if(a!=="id"||!d.endsWith("id")||d.length<=2)return 0;const p=d.slice(0,-2),m=jr(c);return p===m||p===oa(m)||oa(p)===oa(m)?9:5},o=Math.max(i(n,e.table,r),i(r,t.table,n));return o>0?o:e.isPk&&Su(r)||t.isPk&&Su(n)?6:0}function py(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),s=new Set(e.pks??[]),i=o=>{let a=null,c=0;for(const d of t){const p=new Set(d.pks??[]);for(const m of e.fields)for(const w of d.fields){if(o&&r.has(`${d.alias}\0${w}`))continue;const y=fy({table:e.tableName,field:m,isPk:s.has(m)},{table:d.tableName,field:w,isPk:p.has(w)});y>c&&(c=y,a={thisField:m,otherAlias:d.alias,otherField:w})}}return a};return i(!0)??i(!1)}function my(e){const t=e.lastIndexOf("#");return t>=0?e.slice(0,t):e}function gy(e,t,n,r){const s=e.columns.find(c=>c.field===n);if(!s||s.from.kind!=="source")return null;const i=s.from.alias;if(!e.sources.some(c=>c.alias===i))return null;const o=e.sources[0]?.alias===i,a=r?.[i]??(o?my(t):void 0);return a?{alias:i,rowId:a,field:s.from.field}:null}async function Sl(e,t,n,r){const s=n.spec.sources.map(p=>({source:p,table:r.resolve(p.tableName)}));if(s.some(p=>!p.table))return null;const i={...n.spec,sources:s.map(({source:p,table:m})=>({...p,tableName:m.name}))},o={};for(const{source:p,table:m}of s)o[p.alias]=m?.columns??[];const a=Uh(i,o,[],[]),c=dn(r.taken,n.name),d={id:Ce(),workspaceId:t,name:c,code:Me(c),columns:a,view:"table",source:{type:"projection",config:i},readonly:Bi(i).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...i.filters?{filters:i.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(d),d}const by=Object.freeze(Object.defineProperty({__proto__:null,createProjectionTable:Sl},Symbol.toStringTag,{value:"Module"})),Bh="__id";function qh(e){const t=[];let n="",r,s=0;for(;s<e.length;){const i=e[s],o=e[s+1];if(i==="'"||i==='"'){const a=Cl(e,s,i);n+=e.slice(s,a),s=a;continue}if(i==="-"&&o==="-"){let a="";for(s+=2;s<e.length&&e[s]!==`
`;)a+=e[s++];const c=/^\s*projection:\s*(.+?)\s*$/i.exec(a);c?.[1]&&n.trim()===""&&(r=c[1]);continue}if(i==="/"&&o==="*"){for(s+=2;s<e.length&&!(e[s]==="*"&&e[s+1]==="/");)s++;s+=2;continue}if(i===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,s++;continue}n+=i,s++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function Cl(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function Yt(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function Hh(e,t){const n=[];let r=0,s="",i=0;for(;i<e.length;){const o=e[i];if(o==="'"||o==='"'){const a=Cl(e,i,o);s+=e.slice(i,a),i=a;continue}if(o==="("?r++:o===")"&&r--,r===0){const a=t(e,i);if(a>0){n.push(s),s="",i+=a;continue}}s+=o,i++}return n.push(s),n}function nr(e,t){return Hh(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function Kh(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return Hh(e,(r,s)=>/\s/.test(r[s]??"")?n.exec(r.slice(s,s+t.length+32))?.[0].length??0:0)}function Vh(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const s=e[r];if(s==="'"||s==='"'){r=Cl(e,r,s)-1;continue}if(s==="(")n++;else if(s===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function Wh(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):Mi(t)?t:/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function Gh(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function wy(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=Vh(e);if(n==null)return null;const r=[];for(const s of nr(n,",")){const i=s.trim();if(!i||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(i))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(i);if(!o?.[1])continue;const a=Yt(o[1]);if(a===Bh)continue;const c=o[2]??"",d=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(c.trim())?.[1]??"TEXT",p={field:a,label:a,type:Gh(d)};/\bNOT\s+NULL\b/i.test(c)&&(p.notnull=!0),(/\bUNIQUE\b/i.test(c)||/\bPRIMARY\s+KEY\b/i.test(c))&&(p.unique=!0),r.push(p)}return{name:Yt(t[1]),columns:r,rows:[]}}function yy(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=Yt(t[1]),r=t[2]?nr(t[2].slice(1,-1),",").map(o=>Yt(o)):[],s=[];let i=(t[3]??"").trim();for(;i.startsWith("(");){const o=Vh(i);if(o==null)break;const a=nr(o,",").map(d=>Wh(d)),c={};a.forEach((d,p)=>{const m=r[p]??`col${p+1}`;m!==Bh&&(c[m]=d)}),s.push(c),i=i.slice(o.length+2).trim(),i.startsWith(",")&&(i=i.slice(1).trim())}return{table:n,rows:s}}function Cu(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=Yt(t[1]);return{table:n,alias:t[2]?Yt(t[2]):n}}function ns(e){return nr(e,".").map(Yt)}function _l(e,t,n){const r=t.filter(s=>(n.get(s.tableName.toLowerCase())??[]).includes(e));return r.some(s=>s.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function vy(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const s=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);s&&(n=Number(s[1]),t=t.slice(0,s.index));let i;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(i=o[1],t=t.slice(0,o.index));let a;const c=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return c?.[1]&&(a=c[1],t=t.slice(0,c.index)),{from:t,limit:n,orderBy:i,where:a}}function $y(e,t,n,r,s){const i=[],o=a=>a.length===2?a[0]??"":_l(a[0]??"",n,r);for(const a of Kh(e,"AND")){const c=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(a);if(!c?.[1]||!c[2]){s.push(`ON ${a.trim()}`);continue}const d=ns(c[1]),p=ns(c[2]),m=o(d)===t.alias,w=m?d:p,y=m?p:d;if(o(w)!==t.alias){s.push(`ON ${a.trim()} — neither side names ${t.alias}`);continue}i.push({field:w.length===2?w[1]??"":w[0]??"",eqAlias:y.length===2?y[0]??"":o(y),eqField:y.length===2?y[1]??"":y[0]??""})}return i}function ky(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,s=[],i=[];let o=0;for(let d=r.exec(e);d;d=r.exec(e))s.push(e.slice(o,d.index)),i.push((d[1]??"INNER").toUpperCase()),o=d.index+d[0].length;s.push(e.slice(o));const a=Cu(s[0]??"");if(!a.table)return null;const c=[{alias:a.alias,tableName:a.table}];for(let d=1;d<s.length;d++){const p=s[d]??"",m=/\s+ON\s+([\s\S]+)$/i.exec(p),w=Cu(m?p.slice(0,m.index):p);if(!w.table)continue;const y=i[d-1]??"INNER";if(y==="CROSS"||!m?.[1]){n.push(`${y} JOIN ${w.table} — no ON predicate to model`),c.push({alias:w.alias,tableName:w.table});continue}(y==="RIGHT"||y==="FULL")&&n.push(`${y} JOIN ${w.table} — imported as LEFT JOIN (the closest a projection can express)`);const k=[...c,{alias:w.alias,tableName:w.table}];c.push({alias:w.alias,tableName:w.table,join:{type:y==="INNER"?"inner":"left",on:$y(m[1],w,k,t,n)}})}return c}function xy(e,t,n,r){const s=[];for(const i of nr(e,",")){const o=i.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const a=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),c=(a?.[1]??o).trim(),d=ns(c),p=Yt(a?.[2]??d[d.length-1]??c);if(/^NULL$/i.test(c)){s.push({field:p,from:{kind:"script",script:_y}});continue}d.length===2&&d[0]&&d[1]?s.push({field:p,from:{kind:"source",alias:d[0],field:d[1]}}):d.length===1&&d[0]&&/^[\w$]+$/.test(d[0])?s.push({field:p,from:{kind:"source",alias:_l(d[0],t,n),field:d[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return s}function Sy(e,t){const n={};if(!e)return n;for(const r of Kh(e,"AND")){const s=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),i=s?.[1]?Yh(t.columns,ns(s[1]),t.sources,t.schema):void 0;if(!s||!i){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[i.field]=(s[2]??"").replace(/''/g,"'")}return n}function Cy(e,t){const n=[];for(const r of nr(e??"",",")){const s=r.trim();if(!s)continue;const[i,o]=s.split(/\s+/),a=Yh(t.columns,ns(i??""),t.sources,t.schema);if(!a){t.unsupported.push(`ORDER BY ${s}`);continue}n.push({field:a.field,asc:!/^DESC$/i.test(o??"")})}return n}function _u(e,t,n,r){const s=[],i=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(i);if(!o)return null;const{from:a,limit:c,orderBy:d,where:p}=vy(o[3]??""),m=c??(o[1]?Number(o[1]):void 0),w=ky(a,n,s);if(!w)return null;const y=xy(o[2]??"",w,n,s),k={columns:y,sources:w,schema:n,unsupported:s},x=Sy(p,k),_=Cy(d,k),A={version:1,sources:w,columns:y};return Object.keys(x).length>0&&(A.filters=x),m!=null&&m>0&&(A.limit=m),{projection:{name:r||t,spec:A,..._.length>0?{sortBy:_}:{}},unsupported:s}}const _y=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function Yh(e,t,n,r){const s=t.length===2?t[0]:_l(t[0]??"",n,r),i=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===s&&o.from.field===i)??e.find(o=>o.field===i)}function hs(e){const t=new Map,n=[],r=[],s=new Map,i=o=>{s.set(o.name.toLowerCase(),o.columns.map(a=>a.field))};for(const o of qh(e)){const a=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(a)){const c=wy(a);if(!c){r.push(Nr(a));continue}const d=t.get(c.name);t.set(c.name,{...c,rows:d?.rows??[]}),i(c);continue}if(/^INSERT\s+/i.test(a)){const c=yy(a);if(!c){r.push(Nr(a));continue}const d=t.get(c.table);if(d)d.rows.push(...c.rows);else{const p={name:c.table,columns:Ey(c.rows),rows:c.rows};t.set(c.table,p),i(p)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(a)){const c=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(a),d=c?.[1]?Yt(c[1]):"",p=c?.[2]?_u(c[2],d||"view",s,d):null;p?(n.push(p.projection),r.push(...p.unsupported)):r.push(Nr(a));continue}if(/^SELECT\b/i.test(a)){const c=_u(a,"",s,o.name);c?(n.push(c.projection),r.push(...c.unsupported)):r.push(Nr(a));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(a)||r.push(Nr(a))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function Nr(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function Ey(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(i=>i[n]).filter(i=>i!=null),s=r.length===0?"string":r.every(i=>typeof i=="number")?"number":r.every(i=>typeof i=="boolean")?"boolean":"string";return{field:n,label:n,type:s}})}const Ty=Object.freeze(Object.defineProperty({__proto__:null,parseLiteral:Wh,parseSqlScript:hs,splitStatements:qh,sqlTypeToColumnType:Gh},Symbol.toStringTag,{value:"Module"})),Iy={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function Ay(e){e.ui.registerImporter(El),e.ui.registerDropHandler(async t=>{const n=Dy(t).filter(Ly);if(n.length===0)return!1;t.preventDefault();for(const r of n)await Oy(e,r);return!0})}const El={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return hs(await Ry(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function Ry(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${Ht(t.url)}…`):Promise.resolve(t.text??"")}function Tl(e){return hs(e).projections.length>0}async function Il(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const s=hs(t),i={tables:[],projections:[],rowCount:0,unsupported:s.unsupported},o=n.target??{kind:"new"},a=o.kind==="new"||s.tables.length===1;a||i.unsupported.push(`"Import into" was not applied — this script defines ${s.tables.length} tables, and an append/replace names only one destination`);const c=new Map;for(const y of s.tables){const k=await vh(e,y.name,(async function*(){yield{columns:y.columns,rows:y.rows}})(),{workspaceId:r,importerId:"sql",target:a?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:x=>n.editColumns(x,y.name)}:{}});k&&(c.set(y.name,k.tableName),i.tables.push(k.tableName),i.rowCount+=k.rowCount)}const d=await e.store.tables.find({workspaceId:r}),p=new Map;for(const y of d)p.has(y.name)||p.set(y.name,y);const m=new Map;for(const y of d)m.has(y.name.toLowerCase())||m.set(y.name.toLowerCase(),y);const w=new Set([...d.map(y=>y.name),...i.tables]);for(const y of s.projections){const k=await Sl(e,r,y,{resolve:x=>{const _=c.get(x);return(_?p.get(_):void 0)??p.get(x)??m.get(x.toLowerCase())},taken:w});if(!k){i.unsupported.push(`projection "${y.name}" — its source tables are not in this workspace`);continue}p.set(k.name,k),m.set(k.name.toLowerCase(),k),w.add(k.name),i.projections.push(k.name)}return i}function Al(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const s=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${s}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function Oy(e,t){const n=await t.text();try{if(Tl(n)){Al(e,await Il(e,n),t.name);return}const r=await Fi(e,El,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=r.landed.reduce((i,o)=>i+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${s.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function Dy(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const s=r.getAsFile();s&&n.push(s)}return n}function Ly(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const Py=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:Tl,init:Ay,meta:Iy,reportSqlRestore:Al,restoreSqlScript:Il,sqlImporterSpec:El},Symbol.toStringTag,{value:"Module"})),Qh=Se`
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
`;function Jh(e,t,n){return t.bottom<=n?null:Math.round(e.top-t.height-My)}const My=4;var Xh=function(e,t,n,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let Ys=null,Ta="anchored-menu";function jy(){return Ys||(Zh(Ta),Ys=document.createElement(Ta),document.body.appendChild(Ys)),Ys}class fs extends xe{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=t=>{t.composedPath().includes(this)||this.finish(null)},this.onKey=t=>{t.key==="Escape"&&(t.preventDefault(),this.finish(null))}}static open(t,n){return jy().openMenu(t,n)}static{this.styles=[Qh,Se`
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
    `]}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(t,n){return this.items=n,this.style.left=`${Math.round(t.left)}px`,this.style.top=`${Math.round(t.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const r=this.shadowRoot?.querySelector(".menu");if(!r)return;const s=Jh(t,r.getBoundingClientRect(),window.innerHeight);s!==null&&(this.style.top=`${s}px`)}),new Promise(r=>{this.resolveFn=r,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(t){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const n=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>n?.(t))}render(){return this.shown?$`
      <div class="menu" role="menu">
        ${this.items.map(t=>$`
            <button role="menuitem" class=${t.danger?"danger":""} @click=${()=>this.finish(t.id)}>
              ${t.icon?$`<span class="mi">${t.icon}</span>`:""}
              <span>${t.label}</span>
            </button>
          `)}
      </div>
    `:$``}}Xh([z()],fs.prototype,"items",void 0);Xh([z()],fs.prototype,"shown",void 0);function Zh(e="anchored-menu"){Ta=e,customElements.get(e)||customElements.define(e,fs)}const rr=Object.freeze(Object.defineProperty({__proto__:null,AnchoredMenu:fs,defineAnchoredMenu:Zh,flipIfBelowViewport:Jh,materialIconStyles:Qh},Symbol.toStringTag,{value:"Module"})),Ia='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Ny={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:Ia,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function zy(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:Ia,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>Eu(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:Ia,keywords:["datasette","live","remote","backend"],run:t=>Eu(t)})}async function Fy(){const{registries:e}=await ee();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function Eu(e,t){const n=await Fy();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const s=t?.getBoundingClientRect(),i=s?await fs.open(s,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!i)return;r=s?n.find(o=>o.id===i):n.find(o=>o.label===i)}if(r)try{await r.connect(e)}catch(s){await e.ui.dialogs.alert(s?.message??String(s),`Connect ${r.label} failed`)}}const Uy=Object.freeze(Object.defineProperty({__proto__:null,init:zy,meta:Ny},Symbol.toStringTag,{value:"Module"}));function Tu(e,t){return JSON.stringify(t.map(n=>e[n]??null))}function By(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function ef(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:s,deletedRemoteFields:i=[]}=e,o=new Set(i),a=new Set(s),c=D=>{const G={...D};for(const M of o)delete G[M];return G},d=new Set(t.flatMap(D=>Object.keys(D.data))),p=[...new Set(n.flatMap(D=>Object.keys(D)))].filter(D=>d.has(D)&&!o.has(D)&&!a.has(D)).sort(),w=r.length>0&&n.every(D=>By(D,r))?"pk":p.length>0?"content":"none";if(w==="none")return{data:n.map(c),merged:!1,strategy:w,droppedUserRows:t.filter(D=>Iu(D.data,s)).length};const y=w==="pk"?r:p,k=new Map;for(const D of t){const G=Tu(D.data,y);k.has(G)||k.set(G,D)}const x=new Set,_=n.map(D=>{const G=c(D),M=Tu(D,y),re=k.get(M);if(re){x.add(M);for(const W of s)Object.prototype.hasOwnProperty.call(re.data,W)&&(G[W]=re.data[W])}return G});let A=0;for(const[D,G]of k)!x.has(D)&&Iu(G.data,s)&&(A+=1);return{data:_,merged:!0,strategy:w,droppedUserRows:A}}function Iu(e,t){return t.some(n=>{const r=e[n];return r!=null&&r!==""})}const Aa="easydb:table-loading",vi=new Map;function Tt(e,t,n){e&&(t?vi.set(e,typeof n=="number"?n:null):vi.delete(e),!(typeof document>"u")&&document.dispatchEvent(new CustomEvent(Aa,{detail:{tableId:e,loading:t,progress:n}})))}function qy(e){if(vi.has(e))return vi.get(e)??null}const Ra="easydb:app-progress";function qi(e){typeof document>"u"||document.dispatchEvent(new CustomEvent(Ra,{detail:e}))}function tf(){qi({label:""})}class nf{constructor(t){this.weight=new Map,this.done=new Map;const n=t.reduce((r,s)=>r+Math.max(0,s.total),0);this.uniform=n===0;for(const r of t)this.weight.set(r.tableId,this.uniform?1:Math.max(0,r.total));this.totalWeight=this.uniform?t.length:n}observe(t,n){const r=this.weight.get(t);r!=null&&this.done.set(t,Math.min(r,Math.max(0,n)))}complete(t){const n=this.weight.get(t);n!=null&&this.done.set(t,n)}fraction(){if(this.totalWeight<=0)return 1;let t=0;for(const n of this.done.values())t+=n;return Math.min(1,t/this.totalWeight)}completedTables(){let t=0;for(const[n,r]of this.weight)(this.done.get(n)??-1)>=r&&t++;return t}get tableCount(){return this.weight.size}}function tt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)?e:null}function we(e,t){return tt(e)?.[t]}function ze(e){return typeof e=="string"?e:null}function sr(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function ps(e){return Array.isArray(e)?e:[]}function Ln(e){return ps(e).filter(t=>typeof t=="string")}function Rl(e){return ps(we(e,"rows")).filter(t=>tt(t)!==null)}function aa(e){return e===!0||e===1}class Ke extends Error{constructor(t,n){const r=ze(we(t,"error")),s=Ln(we(t,"errors"));super(r??(s.length>0?s.join("; "):null)??"Datasette request failed"),this.name="DatasetteError";const i=n??sr(we(t,"status"));i!=null&&(this.status=i),this.errors=s.length>0?s:r?[r]:[]}}function kt(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[a,c]of t.searchParams)r[a]=c;let s,i=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),i=decodeURIComponent(n[n.length-2]);const a=n.slice(0,n.length-2).join("/");s=t.origin+(a?"/"+a:"")}else n.length===1&&(i=decodeURIComponent(n[0])),s=t.origin;return{base:s,db:i,table:o,query:r}}function Pn(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,s]of Object.entries({...e.query,...t}))s!=null&&n.searchParams.set(r,String(s));return n.toString()}function Hy(e,t){const n={};for(const[r,s]of Object.entries(e.query))r.startsWith("_")||(n[r]=s);return Pn({...e,query:n},{_next:t})}function Au(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function Ky(e){const t=ze(we(e,"next_url")),n=we(e,"next"),r=n!=null&&n!==!1?String(n):null,s=ps(we(e,"rows")),i=Array.isArray(we(e,"columns"))?Ln(we(e,"columns")):null;return{rows:s.map(a=>Array.isArray(a)&&i?Object.fromEntries(i.map((c,d)=>[c,a[d]])):a),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:we(e,"truncated")===!0}}function Vy(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Ru(e){const t=Ln(we(e,"primary_keys")),n=Ln(we(e,"columns")),r={},s=we(e,"column_details");if(Array.isArray(s))for(const a of s){const c=tt(a);if(!c)continue;const d=ze(c.column)??ze(c.name);d&&(r[d]=c)}else{const a=tt(s);if(a)for(const[c,d]of Object.entries(a))r[c]=tt(d)??{}}for(const a of n)a in r||(r[a]={});const o=(n.length?n:Object.keys(r)).map(a=>{const c=r[a]??{},d=aa(c.is_pk)||t.includes(a),p=ze(c.sqlite_type)??ze(c.type)??void 0,m={field:a,label:rf(a),type:Vy(p,a)};(aa(c.notnull)||d)&&(m.notnull=!0),d&&(m.unique=!0),(aa(c.hidden)||xl(a))&&(m.hidden=!0);const w=c.default;return w!=null&&w!==""&&(m.default=w),m});if(t.length===0){const a=o.filter(c=>c.unique).map(c=>c.field);a.length&&t.push(...a)}return{columns:o,pks:t}}function Hi(e,t){if(t.length===0)return e;const n=new Set(t);return e.map(r=>n.has(r.field)&&!(r.unique&&r.notnull)?{...r,unique:!0,notnull:!0}:r)}function rf(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Ki(e){const t=[],n=new Set;for(const r of e)for(const s of Object.keys(r))n.has(s)||(n.add(s),t.push(s));return t.map(r=>{const s={field:r,label:rf(r),type:Wy(e.map(i=>i[r]))};return xl(r)&&(s.hidden=!0),s})}function Wy(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(Ni)?"array":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Gy(n))?"datetime":"string"}function Gy(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Yy(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const s=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(s)?n+=s:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function Qy(e,t){return!t||t.length===0?null:t.map(n=>Yy(e[n])).join(",")}function Jy(e){const t=Array.isArray(e)?e:ps(we(e,"databases")),n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}const s=ze(we(r,"name"));s===null||s==="_memory"||n.push(ze(we(r,"route"))||s)}return n}function Xy(e,t){const n=Array.isArray(e)?e:ps(we(e,"tables")),r=[];for(const s of n){if(typeof s=="string"){r.push({db:t,table:s,count:null,hidden:!1,pks:[]});continue}const i=ze(we(s,"name"));i!==null&&r.push({db:t,table:i,count:sr(we(s,"count")),hidden:we(s,"hidden")===!0,pks:Ln(we(s,"primary_keys"))})}return r}async function Rt(e,t){let n;try{n=await e(t)}catch(s){const i=s?.message||"network error";throw new Ke({error:`Couldn't reach ${t} (${i}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let s=null;try{s=await n.json()}catch{}throw new Ke(s&&typeof s=="object"?s:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(we(r,"ok")===!1)throw new Ke(r,n.status);return r}async function Ol(e,t){return Jy(await Rt(e,`${t}/-/databases.json`))}async function Ou(e,t,n){return Xy(await Rt(e,`${t}/${encodeURIComponent(n)}.json`),n)}function Zy(e){const t=e?.views,n=[];for(const r of Array.isArray(t)?t:[]){if(typeof r=="string"){n.push(r);continue}const s=r;s&&typeof s.name=="string"&&s.hidden!==!0&&n.push(s.name)}return n}async function ev(e,t,n){const s=`${t}/${encodeURIComponent(n)}.json?sql=${encodeURIComponent("select name, sql from sqlite_master where type='view' order by name")}&_shape=array`;let i;try{i=await Rt(e,s)}catch(d){const p=d instanceof Ke?d.message:String(d);throw new Ke({error:`Couldn't read the view definitions from "${n}". Importing views needs the SQL endpoint, which this instance may have disabled (allow_sql). Its tables can still be imported normally.

${p}`},d instanceof Ke?d.status:0)}const o=i?.rows,a=Array.isArray(i)?i:Array.isArray(o)?o:[],c=[];for(const d of a){const p=d,m=typeof p?.name=="string"?p.name:Array.isArray(d)?d[0]:void 0,w=typeof p?.sql=="string"?p.sql:Array.isArray(d)?d[1]:void 0;typeof m=="string"&&typeof w=="string"&&w.trim()&&c.push({db:n,name:m,sql:w})}return c}async function tv(e,t){const n=t.db?[t.db]:await Ol(e,t.base),r=[];for(const s of n){const i=await Rt(e,`${t.base}/${encodeURIComponent(s)}.json`);if(Zy(i).length!==0){if(i?.allow_execute_sql===!1)throw new Ke({error:`"${s}" defines views, but this instance has SQL queries disabled (allow_execute_sql), and a view's definition can only be read through them. Its tables can still be imported normally.`},403);r.push(...await ev(e,t.base,s))}}return r}async function Vi(e,t){const n=Pn(t,{_extra:"column_details"}),r=await Rt(e,n);let{columns:s,pks:i}=Ru(r),o=we(r,"column_details")!=null,a=sr(we(r,"count")),c=we(r,"count_truncated")===!0,d=r;if(s.length===0){const p=Pn(t,{_extra:"columns"}),m=await Rt(e,p);({columns:s,pks:i}=Ru(m)),o=we(m,"column_details")!=null,a=sr(we(m,"count"))??a,c=we(m,"count_truncated")===!0||c,d=m}if(!o&&i.length===0)try{i=await lf(e,t)}catch{}return{columns:Hi(s,i),pks:i,count:a,countTruncated:c,typed:o,raw:d}}async function Oa(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await Vi(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function Du(e,t,n){const r=tt(e)??{},s=t?tt(we(r.databases,t))??{}:{},i=tt(s.tables)??{},o=(n?tt(i[n]):null)??(n?tt(i[n.toLowerCase()]):null)??{};return sf(o,c=>ze(o[c])??ze(s[c])??ze(r[c]))}function nv(e){const t=tt(e)??{};return sf(t,n=>ze(t[n]))}function sf(e,t){const n={columns:{},units:{}},r=ze(e.sort);r!==null&&(n.sort=r);const s=ze(e.sort_desc);s!==null&&(n.sortDesc=s);const i=sr(e.size);i!==null&&(n.size=i),Array.isArray(e.sortable_columns)&&(n.sortableColumns=Ln(e.sortable_columns));const o=ze(e.label_column);o!==null&&(n.labelColumn=o),e.hidden===!0&&(n.hidden=!0);const a=ze(e.description);a!==null&&(n.description=a);const c=ze(e.description_html);c!==null&&(n.descriptionHtml=c);const d=t("source"),p=t("source_url"),m=t("license"),w=t("license_url"),y=t("about"),k=t("about_url");d!==null&&(n.source=d),p!==null&&(n.sourceUrl=p),m!==null&&(n.license=m),w!==null&&(n.licenseUrl=w),y!==null&&(n.about=y),k!==null&&(n.aboutUrl=k);const x=tt(e.columns);if(x)for(const[A,D]of Object.entries(x))typeof D=="string"&&(n.columns[A]=D);const _=tt(e.units);if(_)for(const[A,D]of Object.entries(_))typeof D=="string"&&(n.units[A]=D);return n}const Lu=new Map,Pu=new Map;async function rv(e,t){let n=Lu.get(t);return n||(n=Rt(e,`${t}/-/metadata.json`).catch(()=>({})),Lu.set(t,n)),n}async function sv(e,t){let n=Pu.get(t);return n||(n=Rt(e,`${t}/-/config.json`).catch(()=>({})),Pu.set(t,n)),n}async function iv(e,t){try{const n=await Rt(e,Pn(t,{_extra:"metadata"}));return we(n,"metadata")??{}}catch{return{}}}function ov(...e){const t={columns:{},units:{}};for(const n of e){const{columns:r,units:s,...i}=n;Object.assign(t,Object.fromEntries(Object.entries(i).filter(([,o])=>o!==void 0))),Object.assign(t.columns,r),Object.assign(t.units,s)}return t}async function Dl(e,t){const n=await rv(e,t.base),r=Du(n,t.db,t.table);if(Object.keys(tt(n)??{}).length>0)return r;const[s,i]=await Promise.all([sv(e,t.base),t.db&&t.table?iv(e,t):Promise.resolve({})]);return ov(r,Du(s,t.db,t.table),nv(i))}function av(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Ll(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(a=>{const c=e.columns[a.field],d=e.units[a.field],p=n?n.has(a.field):void 0;return c==null&&d==null&&p===void 0?a:{...a,...c!=null?{description:c}:{},...d!=null?{units:d}:{},...p!==void 0?{sortable:p}:{}}}),s=new Set(t.map(a=>a.field)),i={};e.sort&&s.has(e.sort)?(i.sortColumn=e.sort,i.sortAsc=!0):e.sortDesc&&s.has(e.sortDesc)&&(i.sortColumn=e.sortDesc,i.sortAsc=!1);const o=av(e);return o&&(i.info=o),e.labelColumn&&s.has(e.labelColumn)&&(i.labelColumn=e.labelColumn),{columns:r,patch:i}}function Pl(e,t){if(t.length===0)return e;const n=new Map(Ki(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const s=n.get(r.field);return s&&s!=="string"?{...r,type:s}:r})}async function ms(e,t,n={}){const r=n.maxRows??1e4,i={_size:n.pageSize??1e3,...n.extraParams||{}},o=Pn(t,i);let a=n.startUrl?Au(n.startUrl,o)??n.startUrl:o;const c=[];let d=!1,p=!1,m=0,w,y;for(;a;){let k;try{k=await Rt(e,a)}catch(D){if(c.length===0&&!n.startUrl)throw D;w=D instanceof Ke&&D.status?`stopped after ${c.length} rows: HTTP ${D.status}`:`stopped after ${c.length} rows: ${D?.message??String(D)}`,p=!0,y=a;break}const x=Ky(k);c.push(...x.rows),d=d||x.truncated,m+=1,n.onProgress?.(c.length);const A=(x.nextUrl!=null?Au(x.nextUrl,a):null)??(x.nextToken!=null?Hy(t,x.nextToken):null);A&&c.length<r&&x.rows.length>0?a=A:(p=A!=null&&x.rows.length>0,p&&(y=A??void 0),a=null)}return{rows:c,truncated:d,hasMore:p,pages:m,error:w,nextUrl:y}}function lv(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function of(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function af(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function Wi(e,t,n,r){let s;try{s=await e(t,{method:"POST",headers:lv(r),body:JSON.stringify(n)})}catch(o){throw new Ke({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(s&&s.ok===!1){let o=null;try{o=await s.json()}catch{}throw new Ke(o&&typeof o=="object"?o:{error:`HTTP ${s.status} for ${t}`},s.status)}const i=await s.json();if(we(i,"ok")===!1)throw new Ke(i,s.status);return i}async function Mu(e,t,n,r={}){const s=await Wi(e,of(t,"insert"),{rows:n,return:!0},r.token);return Rl(s)}async function cv(e,t,n,r,s={}){const i=await Wi(e,af(t,n,"update"),{update:r,return:!0},s.token),o=tt(we(i,"row"));return o||(Rl(i)[0]??null)}async function ju(e,t,n,r={}){await Wi(e,af(t,n,"delete"),{},r.token)}async function uv(e,t,n,r={}){const s=await Wi(e,of(t,"upsert"),{rows:n,return:!0},r.token);return Rl(s)}async function lf(e,t){const n=Pn(t,{_extra:"primary_keys"}),r=await Rt(e,n);return Ln(we(r,"primary_keys"))}async function cf(e,t){try{const n=await Rt(e,Pn(t,{_extra:"count"}));return{count:sr(we(n,"count")),truncated:we(n,"count_truncated")===!0}}catch{return{count:null,truncated:!1}}}async function uf(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const s=await e(`${t}/-/versions.json`,r);if(s&&s.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${s.status}`};const i=await s.json(),o=ze(we(we(i,"datasette"),"version"))??ze(we(i,"version"));let a=null;try{const d=await(await e(`${t}/-/actor.json`,r)).json();a=tt(we(d,"actor"))}catch{}return{reachable:!0,version:o,actor:a,writable:!!(n.token&&a)}}catch(s){return{reachable:!1,version:null,actor:null,writable:!1,error:s?.message||"unreachable"}}}function ir(e,t){return t?(n,r)=>{const s=(r??{}).headers??{};return e(n,{...r??{},headers:{...s,Authorization:`Bearer ${t}`}})}:e}function dv(e,t){const n=new Map;for(const r of e)n.has(r.name.toLowerCase())||n.set(r.name.toLowerCase(),r);return r=>n.get(`${t}/${r}`.toLowerCase())??n.get(r.toLowerCase())}async function hv(e,t,n){const r={created:[],skipped:[],found:n.length};if(n.length===0)return r;const s=(await e.store.tables.find()).filter(a=>a.workspaceId===t),i=new Set(s.map(a=>a.name)),o=[...s];for(const a of n){const c=hs(a.sql),d=c.projections[0];if(!d){r.skipped.push({name:a.name,reason:c.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const p=await Sl(e,t,{name:`${a.db}/${a.name}`,spec:d.spec,...d.sortBy?{sortBy:d.sortBy}:{}},{resolve:dv(o,a.db),taken:i});if(!p){const m=d.spec.sources.map(w=>w.tableName).join(", ");r.skipped.push({name:a.name,reason:`its source tables are not in this workspace (${m}) — import them first`});continue}o.push(p),i.add(p.name),r.created.push(p.name),c.unsupported.length>0&&r.skipped.push({name:a.name,reason:`imported, but part of the query was not modelled: ${c.unsupported.slice(0,2).join("; ")}`})}return r}function fv(e,t){if(t.found===0){e.ui.dialogs.toast("That Datasette database defines no views.",{kind:"info",title:"Datasette views"});return}const n=t.skipped.length>0?` ${t.skipped.length} not fully imported: ${t.skipped.map(r=>`${r.name} — ${r.reason}`).join("; ")}`:"";if(t.created.length===0){e.ui.dialogs.toast(`No views could be imported as projections.${n}`,{kind:"warning",title:"Datasette views"});return}e.ui.dialogs.toast(`Imported ${t.created.length} of ${t.found} view${t.found===1?"":"s"} as projections.${n}`,{kind:t.skipped.length>0?"warning":"success",title:"Datasette views"})}function pv(e,t){return`${e}/${encodeURIComponent(t.db)}/${encodeURIComponent(t.name)}`}async function df(e,t){try{return await tv(n=>e.backend.fetch(n),kt(t))}catch(n){if(n instanceof Ke)return null;throw n}}async function hf(e,t,n){const r=t.slice(0,5).map(i=>i.name).join(", "),s=await e.ui.dialogs.choice(`${n} ${t.length} view${t.length===1?"":"s"} (${r}${t.length>5?", …":""}).

A view is a query rather than stored rows, so it can come in either way.`,["As projections (live)","As tables (snapshot)"],"Datasette views");return s?s.startsWith("As projections")?"projection":"table":null}async function mv(e,t,n){const r=await df(e,t);if(!r||r.length===0)return;const s=await hf(e,r,"This database also defines");s&&await ff(e,kt(t).base,r,s,n)}async function ff(e,t,n,r,s){if(r==="table"){await s(n.map(o=>pv(t,o)));return}const i=e.workspaceId();i&&fv(e,await hv(e,i,n))}const $i=e=>e.replace(/^https?:\/\//,""),Ur="datasette",pf=1e4,mf=1e3,Ml=1e4,gf=60;function bf(e){e.ui.registerSettings(Ur,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:pf,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:mf,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:Ml,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:gf,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function Qs(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function Gi(e){const[t,n,r,s]=await Promise.all([e.settings.get(Ur,"maxImportRows"),e.settings.get(Ur,"pageSize"),e.settings.get(Ur,"connectMaxRows"),e.settings.get(Ur,"retryWaitSeconds")]);return{maxImportRows:Qs(t,pf,0),pageSize:Qs(n,mf,1),connectMaxRows:Qs(r,Ml,1),retryWaitSeconds:Qs(s,gf,1)}}function Yi(e){return e===0?Number.MAX_SAFE_INTEGER:e}function gv(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function jl(e,t,n,r){const s={...e.info??{}};return!s.source&&!s.sourceUrl&&(s.source=`${$i(t)}/${n}/${r}`,s.sourceUrl=gv(t,n,r)),{...e,info:s}}async function Nl(e,t,n,r={}){if(t.db&&t.table)return[await Oa(e,t)];const s=[];if(t.db){if(s.push(...await Ou(e,t.base,t.db)),r.skipPicker)return s.filter(a=>!a.hidden)}else{const a=await Ol(e,t.base);if(a.length===0)return[];let c=a;if(a.length>1){const d=await es(a.map(p=>({name:p,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${$i(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!d)return null;c=d.map(p=>a[p])}for(const d of c)try{s.push(...await Ou(e,t.base,d))}catch{}}if(s.length===0)return[];const i=new Set(s.map(a=>a.db)).size>1,o=await es(s.map(a=>({name:i?`${a.db}/${a.table}`:a.table,size:a.count,detail:i?void 0:a.db,hidden:a.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${$i(t.base)}.`,confirmLabel:n});return o?o.map(a=>s[a]):null}const bv=e=>new Promise(t=>setTimeout(t,e));function wv(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function zl(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const yv={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},Nu="https://latest.datasette.io/fixtures/facetable";function vv(e){bf(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>_v(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>Tv(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Nu}`,"","Import from Datasette");r&&await zu(t,r)}}),e.ui.registerUrlSource({id:"datasette-views",label:"Datasette views…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette database URL — its SQL views can come in as live Projections over the tables you already imported, or as snapshot tables.

e.g. ${Nu}`,"","Import Datasette views");if(r)try{const s=await df(t,r);if(!s||s.length===0){await t.ui.dialogs.alert("That Datasette database defines no views.","Datasette views");return}const i=await hf(t,s,"This database defines");if(!i)return;await ff(t,kt(r).base,s,i,o=>wf(t,o,{}))}catch(s){await t.ui.dialogs.alert(s?.message??String(s),"Datasette views")}}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return $v(r)?(t.preventDefault(),await zu(n,r,{skipViews:!0}),!0):!1})}async function zu(e,t,n={}){try{await Qi(e,t,n)}catch(r){let s;r instanceof Ke?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function $v(e){try{const t=kt(e);return!!(t.db&&t.table)}catch{return!1}}async function Qi(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=await Gi(e),i=kt(t),a=await Nl(M=>e.backend.fetch(M),i,"Import",{skipPicker:n.skipTablePicker});if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let d=0;for(const M of a){const re={base:i.base,db:M.db,table:M.table,query:{}},W=await kv(e,r,re);if(W.skipped){d+=1;continue}c.push({tableId:W.tableId,ref:re,overwrite:W.overwrite,knownCount:M.count}),Tt(W.tableId,!0)}let p=0,m=0;const w=[],y=[],k=[],x=new nf(c.map(M=>({tableId:M.tableId,total:M.knownCount??0}))),_=`Importing ${c.length} table${c.length===1?"":"s"}`,A=M=>{c.length!==0&&qi({label:_,...M===void 0?{}:{fraction:M},detail:`${x.completedTables()} of ${x.tableCount} table${x.tableCount===1?"":"s"}`})};A();try{for(const M of c){try{const re=await xv(e,M.tableId,M.ref,M.overwrite,M.knownCount,n,s,W=>{x.observe(M.tableId,W),A(x.fraction())});p+=1,m+=re.rowCount,re.error?y.push(`${M.ref.db}/${M.ref.table} (${re.error})`):(re.hasMore||re.truncated)&&w.push(`${M.ref.db}/${M.ref.table}`)}catch(re){k.push(`${M.ref.db}/${M.ref.table}: ${re?.message??String(re)}`)}x.complete(M.tableId),A(x.fraction()),Tt(M.tableId,!1)}}finally{tf()}const D=Yi(s.maxImportRows),G=n.maxRows!=null?Math.min(n.maxRows,D):D;if(Cv(e,{imported:p,skipped:d,totalRows:m,capped:w,cap:G,partial:y,failed:k,requested:a.length}),p>0&&!n.skipViews)try{await mv(e,t,M=>wf(e,M,n))}catch{}}async function wf(e,t,n){for(const r of t)await Qi(e,r,{...n,skipViews:!0})}async function kv(e,t,n){const r=`${n.db}/${n.table}`,s={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},i=(await e.store.tables.find()).filter(d=>d.workspaceId===t),o=i.find(d=>d.name.toLowerCase()===r.toLowerCase());let a=r;if(o){const d=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!d||d==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(d==="Overwrite")return await e.store.tables.patch(o.id,{origin:s,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};a=dn(new Set(i.map(p=>p.name)),r)}const c=Ce();return await e.store.tables.insert({id:c,workspaceId:t,name:a,code:Me(`${n.db}-${n.table}`),columns:[],view:"table",origin:s,updatedAt:Date.now()}),{tableId:c,overwrite:!1}}async function xv(e,t,n,r,s,i,o,a){const c=`${n.db}/${n.table}`,d=w=>e.backend.fetch(w),p=Yi(o.maxImportRows),m=i.maxRows!=null?Math.min(i.maxRows,p):p;Tt(t,!0);try{let w=[],y=s,k=!1,x=!1,_=[];try{const fe=await Vi(d,n);w=fe.columns,y==null&&(y=fe.count,k=fe.countTruncated),x=fe.typed,_=fe.pks??[]}catch{}if(y==null){const fe=await cf(d,n);y=fe.count,k=fe.truncated}const A=y&&y>0&&(!k||m<=y)?Math.min(y,m):0,D=[];let G=!1,M=!1,re=0,W,T,H;for(;;){const fe=await ms(d,n,{maxRows:Math.max(0,m-D.length),pageSize:o.pageSize,...H?{startUrl:H}:{},onProgress:Un=>{A>0&&Tt(t,!0,Math.min(1,(D.length+Un)/A)),a?.(D.length+Un)}});if(D.push(...fe.rows),G=G||fe.truncated,re+=fe.pages,M=fe.hasMore,W=fe.error,T=fe.nextUrl,!fe.error||!fe.nextUrl||D.length>=m)break;const Le=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${c}" paused after ${D.length.toLocaleString()} rows (${fe.error}). Datasette may be rate-limiting a large import. Wait ${Le} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Le}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Le}`)break;Tt(t,!0),e.ui.dialogs.toast(`Resuming "${c}" in ${Le}…`,{kind:"info",title:"Import paused"}),await bv(wv(o.retryWaitSeconds)),H=fe.nextUrl,W=void 0,T=void 0}const J=w.length===0?Ki(D):x?w:Pl(w,D);let ge=Hi(J,_),q={};try{const fe=await Dl(d,n),Le=Ll(fe,ge);ge=Le.columns,q=Le.patch}catch{}q=jl(q,n.base,n.db,n.table);const X=await e.store.tables.findOne(t),K=X?.columns??[],ae=K.length===0;let{columns:be}=zi(K,ge,X?.deletedColumns),We=D;if(i.editColumns&&ae){const fe=await i.editColumns(be,c);if(fe===null)return{name:c,rowCount:0,hasMore:!1,truncated:!1,pages:re,count:y,error:W};We=Sv(We,be,fe),be=fe}const Pe=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const Je=zl(W,T,D.length,y),he=_.length>0&&X?.origin?{origin:{...X.origin,pks:_}}:{},bt=ae?{columns:be,...q,...he,importResume:Je,updatedAt:Pe}:{columns:be,...q.info?{info:q.info}:{},...he,importResume:Je,updatedAt:Pe};await e.store.tables.patch(t,bt);const Dt=e.store.rows(t);if(r){const fe=await Dt.find();await Dt.bulkRemove(fe.map(Le=>Le.id))}const Ue=We.map(fe=>({id:Ce(),tableId:t,data:fe,updatedAt:Pe}));return await Dt.bulkInsert(Ue),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:Ue.length}),{name:c,rowCount:Ue.length,hasMore:M,truncated:G,pages:re,count:y,error:W}}finally{Tt(t,!1)}}function Sv(e,t,n){const r=ml(t,n);return r?e.map(r):e}function Cv(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,s=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${s} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const i=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${s} ${t.capped.length} capped${i} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${s}`,{kind:"success",title:"Datasette import"})}async function _v(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await Gi(e);await Ev(e,n,r)}catch(r){const s=r instanceof Ke?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function Ev(e,t,n){const r=kt(t.origin.url),s=p=>e.backend.fetch(p),i=Yi(n.maxImportRows);Tt(t.id,!0);let o,a;try{let p=[],m=null,w=!1,y=!1,k=[];try{const he=await Vi(s,r);p=he.columns,m=he.count,w=he.countTruncated,y=he.typed,k=he.pks??[]}catch{}if(m==null){const he=await cf(s,r);m=he.count,w=he.truncated}const x=m&&m>0&&(!w||i<=m)?Math.min(m,i):0,{rows:_,hasMore:A,truncated:D,error:G,nextUrl:M}=await ms(s,r,{maxRows:i,pageSize:n.pageSize,onProgress:he=>{x>0&&Tt(t.id,!0,Math.min(1,he/x))}}),re=k.length>0?k:t.origin?.pks??[];let W=Hi(p.length===0?Ki(_):y?p:Pl(p,_),re),T={};try{const he=await Dl(s,r),bt=Ll(he,W);W=bt.columns,T=bt.patch}catch{}T=jl(T,r.base,r.db,r.table);const H=t.columns.length===0,J=zi(t.columns,W,t.deletedColumns);a=J.newFields;const de=Date.now(),ge=zl(G,M,_.length,m),q=H?{columns:J.columns,...T,importResume:ge,updatedAt:de}:{columns:J.columns,...T.info?{info:T.info}:{},importResume:ge,updatedAt:de};await e.store.tables.patch(t.id,q);const X=new Set(W.map(he=>he.field)),K=t.columns.map(he=>he.field).filter(he=>!X.has(he)&&!re.includes(he)),ae=(t.deletedColumns??[]).filter(he=>X.has(he)),be=e.store.rows(t.id),We=await be.find(),{data:Pe,droppedUserRows:Je}=ef({oldRows:We.map(he=>({data:he.data})),freshRows:_,pks:re,userAddedFields:K,deletedRemoteFields:ae});await be.bulkRemove(We.map(he=>he.id)),await be.bulkInsert(Pe.map(he=>({id:Ce(),tableId:t.id,data:he,updatedAt:de}))),o={rowCount:Pe.length,hasMore:A,truncated:D,error:G,droppedUserRows:Je}}finally{Tt(t.id,!1)}const c=[];if(o.error)c.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const p=i<Number.MAX_SAFE_INTEGER?` at ${i.toLocaleString()}`:"";c.push(`capped${p}`)}a.length>0&&c.push(`${a.length} new column${a.length===1?"":"s"}`),o.droppedUserRows>0&&c.push(`${o.droppedUserRows} row${o.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${o.droppedUserRows===1?"it":"them"} could not be carried over`);const d=c.length?` — ${c.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${d}.`,{kind:o.error||o.hasMore||o.truncated||a.length>0||o.droppedUserRows>0?"warning":"success",title:"Refresh"}),a.length>0&&Iv(t.id,r,a)}async function Tv(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const s=await Gi(e),i=Yi(s.maxImportRows),o=kt(n.origin.url),a=k=>e.backend.fetch(k),c=r.loadedRows,d=r.totalCount??null,p=d&&d>0?Math.min(d,i):0;Tt(t,!0,p>0?Math.min(1,c/p):void 0);let m,w;try{const k=await ms(a,o,{startUrl:r.nextUrl,maxRows:Math.max(0,i-c),pageSize:s.pageSize,onProgress:A=>{p>0&&Tt(t,!0,Math.min(1,(c+A)/p))}});m=k.rows.length;const x=Date.now();await e.store.rows(t).bulkInsert(k.rows.map(A=>({id:Ce(),tableId:t,data:A,updatedAt:x}))),w={error:k.error,nextUrl:k.nextUrl};const _=zl(k.error,k.nextUrl,c+m,d);await e.store.tables.patch(t,{importResume:_,updatedAt:x})}catch(k){const x=k instanceof Ke?k.message:k?.message??String(k);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${x}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{Tt(t,!1)}const y=c+m;w.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${m} rows (${y} total) — interrupted again (${w.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${m} rows (${y} total).`,{kind:"success",title:"Resume import"})}function Iv(e,t,n){const r=n.join(", "),s=n.length!==1,i=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${s?"s":""}: ${r}. Review, reorder or hide ${s?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:i}}))}const Av=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:Qi,init:vv,meta:yv},Symbol.toStringTag,{value:"Module"})),Fl=new Map;let Fu=!1;function Rv(){for(const e of Fl.values())if(e===null||e.open)return!0;return!1}function yf(e,t=null){Fl.set(e,t),Dv()}function Ov(e){Fl.delete(e)}function Jt(e,t){const n=()=>{t.open&&yf(e,t)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>Ov(e))}function Dv(){Fu||(Fu=!0,window.addEventListener("beforeunload",e=>{Rv()&&(e.preventDefault(),e.returnValue="")}))}var Lv=Object.defineProperty,Pv=Object.getOwnPropertyDescriptor,gs=(e,t,n,r)=>{for(var s=r>1?void 0:r?Pv(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Lv(t,n,s),s};const Mv="https://latest.datasette.io/ephemeral";let It=class extends xe{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),It.instance=this}disconnectedCallback(){super.disconnectedCallback(),It.instance===this&&(It.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Jt("datasette-connect",this.dialogEl)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
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
                placeholder="e.g. ${Mv}"
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
    `}};It.instance=null;It.styles=[ft,Se`
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
    `];gs([z()],It.prototype,"url",2);gs([z()],It.prototype,"token",2);gs([z()],It.prototype,"status",2);gs([z()],It.prototype,"statusKind",2);It=gs([Oe("datasette-connect-dialog")],It);class jv extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function vf(e){return`datasette:token:${e}`}function Nv(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function zv(e,t,n){const r=e.source,s=r?.config??{},i={base:s.base,db:s.db,table:s.table,query:{}},o=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],a=r?.writable===!0,c=s.maxRows;let d=null;function p(){return c!=null?Promise.resolve(c):(d||(d=n?Gi(n).then(T=>T.connectMaxRows):Promise.resolve(Ml)),d)}const m=s.pollIntervalMs??0,w=(T,H)=>t.backend.fetch(T,H);async function y(){const H=(await t.settings.findOne(vf(s.base)))?.value;return typeof H=="string"&&H.length>0?H:void 0}const k=async(T,H)=>ir(w,await y())(T,H);function x(T){return{id:Qy(T,o)??Ce(),tableId:e.id,data:T,updatedAt:Date.now()}}function _(T){if(!a)throw new jv(T)}function A(T){const H={};for(const[J,de]of Object.entries(T))o.includes(J)||(H[J]=de);return H}const D=new Set;let G=[],M=!1,re=null;function W(){return re||(re=(async()=>{try{const{rows:T}=await ms(k,i,{maxRows:await p()});G=T.map(x),M=!0;for(const H of D)H(G);return G}finally{re=null}})(),re)}return{async find(T){const H=M?G:await W();return!T||Object.keys(T).length===0?H:H.filter(J=>Nv(J,T))},async findOne(T){return(M?G:await W()).find(J=>J.id===T)??null},async insert(T){_("insert");const[H]=await Mu(k,i,[T.data]),J=x(H??T.data);return t.events.emit("row:created",{tableId:e.id,row:J}),W(),J},async bulkInsert(T){if(T.length===0)return[];_("insert");const H=await Mu(k,i,T.map(de=>de.data)),J=(H.length?H:T.map(de=>de.data)).map(x);return W(),J},async upsert(T){_("upsert");const[H]=await uv(k,i,[T.data]),J=x(H??T.data);return W(),J},async patch(T,H){_("update");const J=H.data,de=A(J??{}),ge=await cv(k,i,T,de),q=x(ge??{...J??{}});return t.events.emit("row:updated",{tableId:e.id,row:q,prev:q}),W(),q},async remove(T){_("delete"),await ju(k,i,T),t.events.emit("row:deleted",{tableId:e.id,rowId:T}),W()},async bulkRemove(T){if(T.length!==0){_("delete");for(const H of T)await ju(k,i,H);W()}},subscribe(T){D.add(T),M?T(G):W();let H=null;return m>0&&(H=setInterval(()=>void W(),m)),()=>{D.delete(T),H&&clearInterval(H)}},async refresh(){await W()}}}const Fv='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Uv={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function Bv(e){bf(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:Fv,order:10,description:"A live, editable table on any Datasette instance",connect:t=>Hv(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>qv(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>zv(t,n,e)})}async function qv(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const s=await r.find();e.ui.dialogs.toast(`Reloaded ${s.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const s=r instanceof Ke?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${s}`,{kind:"error",title:"Refresh"})}}async function Hv(e){const t=It.instance??Kv(),n=(s,i)=>e.backend.fetch(s,i),r=await t.open({initialUrl:"https://datasette.io",async onTest(s,i){const o=kt(s),a=await uf(n,o.base,{token:i||void 0});if(o.db&&o.table){await Oa(ir(n,i||void 0),o);const d=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${d} — table found, signed in, read-write.`:`Reachable${d} — table found, read-only (no token / not authenticated).`}if(!a.reachable)return`Unreachable: ${a.error??"no response"}`;const c=a.version?` (Datasette ${a.version})`:"";return a.writable?`Reachable${c} — signed in, read-write.`:`Reachable${c} — read-only (no token / not authenticated).`},async onConnect(s,i){const o=kt(s);o.db&&o.table&&await Oa(ir(n,i||void 0),o)}});if(r)try{await $f(e,r.url,r.token)}catch(s){const i=s instanceof Ke?s.message:s?.message??String(s);await e.ui.dialogs.alert(i,"Connect Datasette failed")}}function Kv(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function $f(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const s=kt(t),i=(m,w)=>e.backend.fetch(m,w),o=ir(i,n||void 0),a=await uf(i,s.base,{token:n||void 0});n&&await e.store.settings.upsert({name:vf(s.base),value:n});let c;try{c=await Nl(o,s,"Connect")}catch(m){const w=m instanceof Ke?m.message:m?.message??String(m);throw new Error(`Couldn't read tables from ${$i(s.base)}: ${w}`,{cause:m})}if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const d=[];for(const m of c){const w=await Vv(e,r,s.base,m,a.writable,n);w!==null&&d.push({tableId:w,c:m})}if(d.length===0)return;const p=a.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${d.length} live table${d.length===1?"":"s"} from Datasette (${p}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:m,c:w}of d)Wv(e,m,s.base,w,n)}async function Vv(e,t,n,r,s,i){const o=(await e.store.tables.find()).filter(w=>w.workspaceId===t);let a=`${r.db}/${r.table}`,c=o.find(w=>{const y=w.source?.config;return w.source?.type==="datasette"&&y?.base===n&&y?.db===r.db&&y?.table===r.table});if(!c){const w=o.find(y=>y.name.toLowerCase()===a.toLowerCase());if(w){const y=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!y||y==="Skip")return null;y==="Overwrite"?c=w:a=dn(new Set(o.map(k=>k.name)),a)}}let d=r.pks??[];if(d.length===0){const w=ir((y,k)=>e.backend.fetch(y,k),i||void 0);try{d=await lf(w,{base:n,db:r.db,table:r.table,query:{}})}catch{d=[]}}const p=c?.id??Ce(),m={...c??{},id:p,workspaceId:t,name:a,code:Me(`${r.db}-${r.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:s,config:{base:n,db:r.db,table:r.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(m):await e.store.tables.insert(m),p}async function Wv(e,t,n,r,s){const i={base:n,db:r.db,table:r.table,query:{}},o=ir((a,c)=>e.backend.fetch(a,c),s||void 0);try{let a=[],c=!1;try{const x=await Vi(o,i);a=x.columns,c=x.typed}catch{}const{rows:d}=await ms(o,i,{maxRows:50,pageSize:50}),p=a.length===0?Ki(d):c?a:Pl(a,d);if(p.length===0)return;const m=await e.store.tables.findOne(t);if(!m)return;const w=m.source?.config?.pks??[];let y=Hi(p,w),k={};try{const x=await Dl(o,i),_=Ll(x,y);y=_.columns,k=_.patch}catch{}k=jl(k,i.base,r.db,r.table),await e.store.tables.patch(t,{columns:y,...k,updatedAt:Date.now()})}catch{}}const Gv=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:$f,init:Bv,meta:Uv},Symbol.toStringTag,{value:"Module"})),Yv={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function Qv(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:kf}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class Tn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function Jv(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const Uu=5e4;function Xv(e){return e.ok===!0&&Array.isArray(e.rows)}function Zv(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const s of["next_url","nextUrl","next"]){const i=n[s];if(typeof i!="string")continue;const o=i.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const a=new URL(o,t);if(a.origin!==r.origin)continue;return a.toString()}catch{continue}if(s==="next"&&Xv(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function e0(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function kf(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",s=n.format==="json"?"json":"csv",i=new Set;let o=[],a=!1,c=null;function d(k){return k.map((x,_)=>({id:`url:${_}`,tableId:e.id,data:x,updatedAt:0}))}async function p(k){let x;try{x=await t.backend.fetch(k)}catch(_){throw new Error(`Could not reach ${r}: ${_?.message??String(_)}`,{cause:_})}if(!x.ok)throw new Error(`Could not load ${r}: HTTP ${x.status} ${x.statusText}`);try{return await sh(x)}catch(_){throw new Error(`Could not read response from ${r}: ${_?.message??String(_)}`,{cause:_})}}async function m(k){const x=ll(k);let _=await p(x);if(nh(_)){const A=rh(x);A&&(_=await p(A))}try{if(s==="json"){const A=JSON.parse(_);return{records:e0(A),nextUrl:Zv(A,x)}}return{records:fr(_).rows,nextUrl:null}}catch(A){throw new Error(`Could not parse ${s.toUpperCase()} from ${r}: ${A?.message??String(A)}`,{cause:A})}}async function w(){if(!r)throw new Error("This reference table has no URL configured.");const k=[];let x=r;const _=new Set;for(;x&&k.length<Uu&&!_.has(x);){_.add(x);const A=await m(x);k.push(...A.records),x=A.records.length>0?A.nextUrl:null}return k.slice(0,Uu)}function y(){return c||(c=(async()=>{try{const k=await w();o=d(k),a=!0;for(const x of i)x(o);return o}finally{c=null}})(),c)}return{async find(k){const x=a?o:await y();return!k||Object.keys(k).length===0?x:x.filter(_=>Jv(_,k))},async findOne(k){return(a?o:await y()).find(_=>_.id===k)??null},async insert(){throw new Tn("insert")},async bulkInsert(){throw new Tn("insert")},async upsert(){throw new Tn("upsert")},async patch(){throw new Tn("update")},async remove(){throw new Tn("delete")},async bulkRemove(){throw new Tn("delete")},subscribe(k){return i.add(k),a?k(o):y(),()=>{i.delete(k)}},async refresh(){a=!1,o=[],await y()}}}const t0=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:Tn,createUrlCollection:kf,init:Qv,meta:Yv},Symbol.toStringTag,{value:"Module"}));function Ge(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function Bu(e){return`'${e.replace(/'/g,"''")}'`}function qu(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${Ge(n.from.alias)}.${Ge(n.from.field)}`,computed:!1}:null}function n0(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",s=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,i=[];for(const y of e.columns)y.from.kind==="source"?i.push(`  ${Ge(y.from.alias)}.${Ge(y.from.field)} AS ${Ge(y.field)}`):i.push(`  NULL AS ${Ge(y.field)} -- computed in-app by a script; no SQL equivalent`);i.length===0&&i.push("  *");const a=[`SELECT${s!=null&&r==="top"?` TOP ${s}`:""}`,i.join(`,
`)],c=t.tableNames[n.alias]??n.tableName;a.push(`FROM ${Ge(c)} AS ${Ge(n.alias)}`);for(const y of e.sources.slice(1)){const k=t.tableNames[y.alias]??y.tableName;if(!y.join){a.push(`CROSS JOIN ${Ge(k)} AS ${Ge(y.alias)}`);continue}const x=y.join.type==="inner"?"INNER JOIN":"LEFT JOIN",_=y.join.on.map(A=>`${Ge(y.alias)}.${Ge(A.field)} = ${Ge(A.eqAlias)}.${Ge(A.eqField)}`).join(" AND ");a.push(`${x} ${Ge(k)} AS ${Ge(y.alias)} ON ${_||"1 = 1"}`)}const d=[],p=[];for(const[y,k]of Object.entries(e.filters??{})){if(!k)continue;const x=qu(e,y);if(x){if(x.computed){p.push(`-- filter on ${Ge(y)} (${Bu(k)}) applies to a computed column; enforced in-app only`);continue}d.push(`LOWER(${x.expr}) LIKE ${Bu(`%${k.toLowerCase()}%`)}`)}}d.length>0&&a.push(`WHERE ${d.join(`
  AND `)}`);const m=(t.orderBy??[]).map(y=>{const k=qu(e,y.field);return!k||k.computed?null:`${k.expr} ${y.asc?"ASC":"DESC"}`}).filter(y=>y!==null);m.length>0&&a.push(`ORDER BY ${m.join(", ")}`);const w=s==null?"":r==="limit"?`
LIMIT ${s}`:r==="fetch"?`
FETCH FIRST ${s} ROWS ONLY`:"";return`${a.join(`
`)}${w};
${p.length>0?`${p.join(`
`)}
`:""}`}const r0={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function s0(){}async function xf(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(a=>a.workspaceId===t),r=n.filter(a=>a.source?.type!=="projection"),s=n.filter(a=>a.source?.type==="projection"),i=i0(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${s.length>0?` (+ ${s.length} projection${s.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const a of r){const c=await e.store.rows(a.id).find();o.push(_f(a,c),"")}if(o.push("COMMIT;",""),s.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const a of s)o.push(`-- projection: ${a.name}`,Ul(a,i)??"","")}return o.join(`
`)}function i0(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,or(n.code||n.name));return n=>t.get(n)??or(Me(n))}function Sf(e,t){const n=Cf(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",_f(e,t),"","COMMIT;",""].join(`
`)}function Cf(e,t){const n=Ul(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function Ul(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>or(Me(o))),s={};for(const o of n.sources)s[o.alias]=r(o.tableName);const i=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return n0(n,{tableNames:s,limitStyle:"limit",...i?{orderBy:i}:{}})}function _f(e,t){const n=or(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(i=>`  ${o0(i)}`)],s=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(a=>a.field)].map(a=>`"${or(a)}"`).join(", ");for(const a of t){const c=[Hu(a.id),...e.columns.map(d=>Hu(a.data[d.field],d.type))];s.push(`INSERT INTO "${n}" (${o}) VALUES (${c.join(", ")});`)}}return s.join(`
`)}function o0(e){const t=[`"${or(e.field)}"`,a0(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function a0(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Hu(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=l0(e);return n===null?"NULL":Js(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Js(e.toISOString()):Js(typeof e=="string"?e:JSON.stringify(e))}function l0(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Ku(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?Ku(r):null}return null}function Ku(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function Js(e){return`'${e.replace(/'/g,"''")}'`}function or(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const c0=Object.freeze(Object.defineProperty({__proto__:null,init:s0,meta:r0,projectionSelectBody:Ul,projectionSelectFor:Cf,serializeTableAsSql:Sf,serializeWorkspaceAsSql:xf},Symbol.toStringTag,{value:"Module"}));function Ji(e){return/(?:Z|[+-]\d{2}:?\d{2})$/i.test(e.trim())}function Xi(e){if(typeof e!="string"&&typeof e!="number")return null;const t=String(e).trim();return t===""?null:t}const Zi=/^(\d{4})-(\d{2})-(\d{2})$/,eo=/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?/;function Bl(e,t){const n=Xi(e);if(n===null)return"";const r=Zi.exec(n);if(r)return la(new Date(Number(r[1]),Number(r[2])-1,Number(r[3])),t);const s=eo.exec(n);if(s&&!Ji(n))return la(new Date(Number(s[1]),Number(s[2])-1,Number(s[3])),t);const i=new Date(n);return Number.isNaN(i.getTime())?n:la(i,t)}function Ef(e,t){const n=Xi(e);if(n===null)return"";const r=eo.exec(n);if(r&&!Ji(n)){const i=new Date(Number(r[1]),Number(r[2])-1,Number(r[3]),Number(r[4]),Number(r[5]),Number(r[6]??0));return Vu(i,t)}if(Zi.test(n))return Bl(n,t);const s=new Date(n);return Number.isNaN(s.getTime())?n:Vu(s,t)}function Hr(e){const t=Xi(e);if(t===null)return"";if(Zi.test(t))return t;const n=eo.exec(t);if(n&&!Ji(t))return`${n[1]}-${n[2]}-${n[3]}`;const r=new Date(t);return Number.isNaN(r.getTime())?"":`${r.getFullYear()}-${Jn(r.getMonth()+1)}-${Jn(r.getDate())}`}function Kr(e){const t=Xi(e);if(t===null)return"";const n=eo.exec(t);if(n&&!Ji(t))return`${n[1]}-${n[2]}-${n[3]}T${n[4]}:${n[5]}`;if(Zi.test(t))return`${t}T00:00`;const r=new Date(t);return Number.isNaN(r.getTime())?"":`${r.getFullYear()}-${Jn(r.getMonth()+1)}-${Jn(r.getDate())}T${Jn(r.getHours())}:${Jn(r.getMinutes())}`}function Jn(e){return String(e).padStart(2,"0")}function la(e,t){return e.toLocaleDateString(t)}function Vu(e,t){return`${e.toLocaleDateString(t)} ${e.toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}`}function Tf(e,t,n){return e==="date"?Bl(t,n):e==="datetime"?Ef(t,n):null}const ql=/\$((?:input|filter|raw)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function Wu(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(ql))t.add(r[2]);return[...t]}function u0(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(ql))r[1]?.startsWith("filter")&&t.add(r[2]);return[...t]}const to=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Pt=e=>to(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function d0(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function h0(e,t,n,r,s){const i=r?.type??"string",o=to(r?.label||e),a=`class="eda-input" data-eda-row="${Pt(n)}" data-eda-field="${Pt(e)}" data-eda-type="${Pt(i)}"`,c=s?" disabled":"";let d;if(i==="boolean")d=`<input type="checkbox" ${a}${d0(t)?" checked":""}${c} />`;else{const p=i==="number"?"number":"text",m=t==null?"":Pt(String(t));d=`<input type="${p}" ${a} value="${m}"${c} />`}return`<label class="eda-input-field" title="${o}">${d}<span class="eda-input-label">${o}</span></label>`}function Gu(e,t){const n=Pt(e),r=Pt(t);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${n}" data-eda-filter-value="${r}" title="Filter by ${n}: ${r}">${to(t)}</button>`}function f0(e,t){return t?.type==="array"||Array.isArray(e)?At(e):null}function p0(e,t,n){const r=f0(t,n);return r?r.map(s=>Gu(e,s)).join(""):t==null||t===""?"":Gu(e,String(t))}function m0(e,t){const n=ds(e,t.data);return n.ok?n.value==null?"":String(n.value):`<span class="eda-script-error" title="${Pt(n.message)}">⚠ ${to(n.label)}</span>`}const If="eda-cell";function g0(e,t,n){if(n?.trim()){const r=ds(n,e.data);return r.ok?r.value:`⚠ ${r.label}`}return e.data[t]}function b0(e,t){const n=e.lastIndexOf("<",t);return n>=0&&n>e.lastIndexOf(">",t)}function w0(e,t,n,r){return`<span class="${If}" data-eda-row="${Pt(e)}" data-eda-field="${Pt(t)}" data-eda-token="${Pt(n)}" data-eda-tag="${Pt(r)}"></span>`}function y0(e,t,n,r={}){return e.replace(ql,(s,i,o,a,c)=>{const d=n[o],p=r.scripts?.[o];if(!i&&p?.trim())return m0(p,t);if(!d)return"";const m=t.data[d],w=r.columns?.get(d);if(!i||i.startsWith("raw")){const k=i?void 0:v0(w,r.renderers);return k&&r.raw?.[o]!==!0&&!b0(c,a)?w0(t.id,d,o,k):m==null||m===""?"":(i?null:Tf(w?.type,m))??String(m)}if(i.startsWith("filter"))return p0(d,m,w);const y=r.readonly===!0||!!w?.script?.trim();return h0(d,m,t.id,w,y)})}function v0(e,t){const n=e?.renderer;return n?t?.get(n):void 0}function Yu(e){return e==null||e===""}function $0(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const s=ds(r.script,e.data);n??={...e.data},n[r.field]=s.ok?s.value:`⚠ ${s.label}`}return n?{...e,data:n}:e}function Qu(e,t){return t.some(n=>n.script?.trim())?e.map(n=>$0(n,t)):e}function Ju(e,t,n){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");if(r.length===0)return e;const s=new Map((n??[]).map(i=>[i.field,i.type]));return e.filter(i=>r.every(([o,a])=>Zr(i.data[o],a,{type:s.get(o)})))}function no(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function k0(e,t){const n=Nn(e??"");return n.some(r=>no(r,t))||n.push({term:t,negate:!1,exact:!0}),cn(n)}function x0(e,t){const n=Nn(e??"").filter(r=>!no(r,t));return cn(n)}function Af(e,t){return e.exact===!0&&e.negate===!0&&e.term.toLowerCase()===t.toLowerCase()}function S0(e,t){const n=Nn(e??"");return n.some(r=>no(r,t))?"on":n.some(r=>Af(r,t))?"not":"off"}function C0(e,t){const n=S0(e,t),r=Nn(e??"").filter(s=>!no(s,t)&&!Af(s,t));return cn(n==="off"?[...r,{term:t,negate:!1,exact:!0}]:n==="on"?[...r,{term:t,negate:!0,exact:!0}]:r)}function _0(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((s,i)=>{const o=s.data[t],a=i.data[t],c=Yu(o),d=Yu(a);if(c||d)return c===d?0:c?1:-1;const p=Number(o),m=Number(a);return!Number.isNaN(p)&&!Number.isNaN(m)?(p-m)*r:String(o).localeCompare(String(a),void 0,{numeric:!0,sensitivity:"base"})*r})}function Da(e,t,n){const r=Ju(e,t.filters??{},n),s=Ju(r,t.pillFilters??{},n);return _0(s,t.sortColumn,t.sortAsc??!0)}function E0(e){return!!e&&e.trim().length>0}function Rf(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function T0(e,t){return t==="raw"||t==="structure"?e:{...e,columns:Rf(e,t)}}function Of(e,t,n){return n==="structure"?[]:n==="raw"?t:Da(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc},e.columns)}function Hl(e,t){const n=e.columns.map(s=>s.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(s=>{const i={};for(const o of n)i[o]=s.data[o];return i})}}const I0={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function A0(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:s}=await Re(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>rr);return{AnchoredMenu:a}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(i,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const a=await ro(t);await t.backend.saveFile(`workspace-${r}.db.json`,a,"application/json")}else if(o==="sql"){const a=await xf(t);await t.backend.saveFile(`workspace-${r}.sql`,a,"application/sql")}}catch(a){t.ui.dialogs.toast(`Export failed: ${a.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Re(async()=>{const{AnchoredMenu:d}=await Promise.resolve().then(()=>rr);return{AnchoredMenu:d}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!i)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const a=await t.ui.dialogs.choice(`Export "${o.name}" as ${i.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!a)return;const c=a==="Visible Data"?"visible":a==="Raw Data"?"raw":"structure";try{const d=await t.store.rows(o.id).find(),p=T0(o,c),m=Of(o,d,c),w=Me(o.code||o.name||"table"),y=c!=="structure"&&o.source!=null&&d.length===0;if(i==="csv")y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.csv`,pl(p,m),"text/csv");else if(i==="json"){const k=JSON.stringify(Hl(p,m),null,2);await t.backend.saveFile(`${w}.table.json`,k,"application/json")}else i==="sql"&&(y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.sql`,Sf(p,m),"application/sql"))}catch(d){t.ui.dialogs.toast(`Export failed: ${d.message}`,{kind:"error",title:"Export"})}}})}async function ro(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),s=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:s};for(const o of n){const a=await e.store.rows(o.id).find();i.tables.push({name:o.name,columns:o.columns,rows:a.map(c=>c.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(i,null,2)}const R0=Object.freeze(Object.defineProperty({__proto__:null,init:A0,meta:I0,serializeWorkspace:ro},Symbol.toStringTag,{value:"Module"})),O0={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},D0="gist:",Xu='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function L0(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:Xu,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Re(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>rr);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(i)try{if(i==="push"||i==="pull"){const o=await r.open(s,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const a=o;i==="push"?await U0(t,a):await Mf(t,a)}else i==="share"?await N0(t):i==="view"&&await z0(t)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:Xu,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Re(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>rr);return{AnchoredMenu:o}},void 0),s=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(i)try{i==="push"?await q0(t,n.tableId):i==="pull"?await H0(t,n.tableId):i==="view"&&await K0(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${i} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function P0(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=M0(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Lf(e,r),await Mf(e))}async function Df(e){const t=e.workspaceId();return`${D0}${t??"default"}`}async function bs(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const i=(await e.store.settings.findOne(await Df(e)))?.value;if(i?.user&&i?.token){const o={user:i.user,gistId:i.gistId??"",token:i.token};return await Lf(e,o),o}return null}async function Lf(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await Df(e),value:t})}function M0(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const s=n.slice(0,r).trim(),i=n.slice(r+1).trim();s&&(t[s]=i)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Kl(e){const t=await bs(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function j0(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function N0(e){const t=await bs(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(j0(t)))}`,{GistShareDialog:s}=await Re(async()=>{const{GistShareDialog:i}=await import("./gist-share-dialog-E9aigNkj.js");return{GistShareDialog:i}},[]);await s.open(r)}async function z0(e){const t=await bs(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}function F0(e){return e.endsWith(".table.json")&&!e.startsWith("_easydb")}function Pf(e,t){const n=new Set(t);return[...e].filter(r=>F0(r)&&!n.has(r)).sort()}async function U0(e,t="all"){const n=await Kl(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=t!=="settings",i=t!=="data",o=(await e.store.tables.find()).filter(D=>D.workspaceId===r);if(s&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const a=1e8,c=1e7,d={},p=[],m=[];if(s)for(const D of o){const G=D.source!=null?[]:await e.store.rows(D.id).find(),M=JSON.stringify(Hl(D,G),null,2),re=`${D.name} (${(M.length/1e6).toFixed(2)} MB)`;M.length>a?p.push(re):M.length>c&&m.push(re),d[`${Me(D.name)}.table.json`]={content:M}}if(p.length>0||m.length>0){const D=[];if(p.length>0&&D.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${p.join(`
`)}`),m.length>0&&D.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${m.join(`
`)}`),!await e.ui.dialogs.confirm(`${D.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(i){const D=(await e.store.viewTemplates.find()).filter(T=>T.workspaceId===r),G=(await e.store.viewInstances.find()).filter(T=>T.workspaceId===r),M=(await e.store.settings.find()).map(T=>({name:T.name,value:T.value})),{kept:re,withheld:W}=pb(M);W.length>0&&e.ui.dialogs.toast(`Not pushed: ${W.join(", ")} — a secret is stored as its own value. Move it into the secrets store (Settings → General) and reference it with \${secret:name}.`,{kind:"warning",title:"Gist sync"}),d["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:D,viewInstances:G,settings:re},null,2)}}const w={...d};let y=[];if(s&&n.gistId){y=await B0(e,n,Object.keys(d));for(const D of y)w[D]=null}let k;if(n.gistId){const D=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:w,description:`easyDBAccess workspace: ${r}`})});if(!D.ok)throw new Error(await rs(D));k=await D.json()}else{const D=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:d})});if(!D.ok)throw new Error(await rs(D));k=await D.json(),n.gistId=k.id,await e.settings.set("gist-sync","gist_id",k.id)}const x=k.html_url??`https://gist.github.com/${n.user}/${k.id}`,_=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`,A=y.length>0?`  Removed ${y.length} file${y.length===1?"":"s"}.`:"";e.ui.dialogs.toast(`Pushed ${_}.${A}  ${x}`,{kind:"success",title:"Gist sync"})}async function Mf(e,t="all"){const n=t!=="settings",r=t!=="data",s=await Kl(e);if(!s||!s.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const i=e.workspaceId();if(!i)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${s.gistId}`,{headers:{Authorization:`Bearer ${s.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await rs(o));const a=await o.json(),c=Object.entries(a.files).filter(([D])=>D.endsWith(".table.json")&&!D.startsWith("_easydb"));if(n&&c.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const d=(await e.store.tables.find()).filter(D=>D.workspaceId===i),p=new Map(d.map(D=>[D.name.toLowerCase(),D]));let m=0;const w=[],y=new Map;if(n){const{TopProgress:D}=await Re(async()=>{const{TopProgress:M}=await import("./top-progress-CjQ8wnoY.js");return{TopProgress:M}},[]),G=D.begin("Pulling from gist…");try{for(const[M,[re,W]]of c.entries())try{const T=await ki(W),H=JSON.parse(T);if(!H.name||!Array.isArray(H.columns))throw new Error("unexpected file shape (missing name/columns)");let J;const de=p.get(H.name.toLowerCase());if(de){if(J=await e.store.tables.patch(de.id,{title:H.title,columns:H.columns,...Pa(H),updatedAt:Date.now()}),J.source==null){const ge=e.store.rows(de.id),q=await ge.find();await ge.bulkRemove(q.map(X=>X.id))}}else J=await e.store.tables.insert({id:Ce(),workspaceId:i,name:H.name,title:H.title,code:Me(H.name),columns:H.columns,view:H.view??"table",...Pa(H),updatedAt:Date.now()});if(J.source==null){const ge=(H.rows??[]).map(q=>({id:Ce(),tableId:J.id,data:q,updatedAt:Date.now()}));await e.store.rows(J.id).bulkInsert(ge)}y.set(H.name,J.id),m++}catch(T){w.push({file:re,error:T.message})}finally{G.fraction((M+1)/c.length)}}finally{G.done()}}let k=0,x="",_=null;const A=r?a.files["_easydb.workspace.json"]:void 0;if(A)try{const D=await ki(A),G=JSON.parse(D),M=G.viewTemplates??[],re=G.viewInstances??[],W=G.settings??[];_=new Set(re.map(H=>H.id));const T=await $h(e.store.viewTemplates,i,M);for(const H of re){let J;if(H.tableName&&(J=y.get(H.tableName)??p.get(H.tableName)?.id),J??=H.tableId,!J)continue;const de=T.get(H.templateId)??H.templateId;await e.store.viewInstances.upsert({...H,workspaceId:i,tableId:J,templateId:de}),k++}for(const H of W)await e.store.settings.upsert(H)}catch(D){x=`Workspace metadata import failed: ${D.message}`}if(w.length>0){const D=w.map(G=>`• ${G.file}: ${G.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${m} of ${c.length} tables. ${w.length} failed:
${D}${x?`
${x}`:""}`,{kind:"warning",title:"Gist sync"})}else{const D=k>0?` (+${k} views)`:"",G=t==="settings"?`Pulled settings${D}.`:`Pulled ${m} table${m===1?"":"s"}.${D}`;e.ui.dialogs.toast(G,{kind:"success",title:"Gist sync"}),x&&e.ui.dialogs.toast(x,{kind:"warning",title:"Gist sync"})}w.length===0&&await jf(e,i,{tableNames:n?new Set([...y.keys()].map(D=>D.toLowerCase())):null,viewInstanceIds:_}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function B0(e,t,n){let r;try{const o=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)return[];const a=await o.json();r=Object.keys(a.files??{})}catch{return[]}const s=Pf(r,n);return s.length===0?[]:await e.ui.dialogs.confirm(`The gist has these table files that this workspace no longer has:

${La(s)}

Delete them from the gist, so it matches this workspace? Keep them if another device pushed them and you have not pulled yet.`,"Delete table files missing from this workspace?")?s:[]}function La(e,t=8){const n=e.slice(0,t).map(s=>`• ${s}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function jf(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(c=>c.workspaceId===t&&!n.tableNames.has(c.name.toLowerCase())):[],s=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(c=>c.workspaceId===t&&!n.viewInstanceIds.has(c.id)):[];if(r.length===0&&s.length===0)return;const i=[];if(r.length>0&&i.push(`${r.length} table${r.length===1?"":"s"}:
`+La(r.map(c=>c.name))),s.length>0&&i.push(`${s.length} view${s.length===1?"":"s"}:
`+La(s.map(c=>c.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${i.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const c of s)await e.store.viewInstances.remove(c.id);const{deleteTable:a}=await Re(async()=>{const{deleteTable:c}=await Promise.resolve().then(()=>Jl);return{deleteTable:c}},void 0);for(const c of r)await a(c.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${s.length} view${s.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function q0(e,t){const n=await Kl(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=r.source!=null?[]:await e.store.rows(t).find(),i=JSON.stringify(Hl(r,s),null,2),o={[`${Me(r.name)}.table.json`]:{content:i}},a=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!a.ok)throw new Error(await rs(a));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function H0(e,t){const n=await bs(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`${Me(r.name)}.table.json`,i=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await rs(i));const a=(await i.json()).files[s];if(!a){await e.ui.dialogs.alert(`No file "${s}" in the gist for this table.`,"Gist sync");return}const c=await ki(a),d=JSON.parse(c);if(!d.name||!Array.isArray(d.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:d.title,columns:d.columns,...Pa(d),updatedAt:Date.now()})).source==null){const m=e.store.rows(t),w=await m.find();await m.bulkRemove(w.map(k=>k.id));const y=(d.rows??[]).map(k=>({id:Ce(),tableId:t,data:k,updatedAt:Date.now()}));await m.bulkInsert(y)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function K0(e,t){const n=await bs(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const s=`file-${Me(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${s}`,"_blank","noopener")}function Pa(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function ki(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function rs(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const V0=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:ki,init:L0,load:P0,meta:O0,offerPrune:jf,staleTableFiles:Pf},Symbol.toStringTag,{value:"Module"})),Nf="server-sync:url";function zf(e){return`server-sync:etag:${e}`}async function Ff(e){const n=(await e.store.settings.findOne(Nf))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function W0(e,t){await e.store.settings.upsert({name:Nf,value:t.replace(/\/+$/,"")})}async function Uf(e,t){const r=(await e.store.settings.findOne(zf(t)))?.value;return typeof r=="string"?r:null}async function Mn(e,t,n){await e.store.settings.upsert({name:zf(t),value:n})}function so(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function Zu(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Bf(e,t,n){const r=us(n,t),s=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of s){const a=e.store.rows(o.id),c=await a.find();await a.bulkRemove(c.map(d=>d.id)),await e.store.tables.remove(o.id)}let i=0;for(const o of r){const a=Ce(),c=await e.store.tables.insert({id:a,workspaceId:t,name:o.name,code:Me(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),d=o.rows.map(p=>({id:Ce(),tableId:c.id,data:p,updatedAt:Date.now()}));await e.store.rows(c.id).bulkInsert(d),i++}return i}const G0={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Y0(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await Re(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>rr);return{AnchoredMenu:o}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),i=await r.open(s,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(i)try{i==="push"?await Q0(t):i==="pull"&&await J0(t)}catch(o){t.ui.dialogs.toast(`${i==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function Q0(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await qf(e);if(!n)return;const r=await ro(e),s=await Uf(e,t),i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:i,body:r});if(o.status===412){const c=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){c.currentEtag&&await Mn(e,t,c.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await Hf(o));const a=so(o.headers.get("ETag"));a&&await Mn(e,t,a),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function J0(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await qf(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const s=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(s.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!s.ok)throw new Error(await Hf(s));const i=so(s.headers.get("ETag")),o=await s.json(),a=await Bf(e,t,o);i&&await Mn(e,t,i),e.ui.dialogs.toast(`Pulled ${a} table${a===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function qf(e){const t=await Ff(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await W0(e,n),n.replace(/\/+$/,"")}async function Hf(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const X0=Object.freeze(Object.defineProperty({__proto__:null,init:Y0,meta:G0},Symbol.toStringTag,{value:"Module"})),Z0={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function e$(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const t$=Object.freeze(Object.defineProperty({__proto__:null,init:e$,meta:Z0},Symbol.toStringTag,{value:"Module"})),Kf="#dc2626",Vf="cell-invalid",n$=`border-color:${Kf};background:#fef2f2`;function Vl(e,t){e.classList.add(Vf),e.style.border=`1px solid ${Kf}`,e.style.background="#fef2f2",t&&(e.title=t)}function r$(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return Wf(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";case"array":return At(e).length===0?"empty":"ok";default:return"ok"}}const s$=/^\s*(true|1)\s*$/i,i$=/^\s*(false|0)\s*$/i;function Wf(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":s$.test(e)?"true":i$.test(e)?"false":"invalid":"invalid"}function io(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function oo(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function ao(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const o$={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function a$(e){customElements.get("cell-date")||customElements.define("cell-date",l$),e.ui.registerCellRenderer("date","cell-date")}class l$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=ao({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(c$(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Vl(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:oo(n,this.pencil()));return}if(this._readonly){this.textContent=Bl(this._value);return}const t=document.createElement("input");t.type="date",t.value=Hr(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return io(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function c$(e){return e==null||typeof e=="string"&&e.trim()===""?!1:Hr(e)===""}const u$=Object.freeze(Object.defineProperty({__proto__:null,init:a$,meta:o$},Symbol.toStringTag,{value:"Module"})),d$={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function h$(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",f$),e.ui.registerCellRenderer("datetime","cell-datetime")}class f$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=ao({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(p$(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Vl(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:oo(n,this.pencil()));return}if(this._readonly){this.textContent=Ef(this._value);return}const t=document.createElement("input");t.type="datetime-local",t.value=Kr(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return io(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function p$(e){return e==null||typeof e=="string"&&e.trim()===""?!1:Kr(e)===""}const m$=Object.freeze(Object.defineProperty({__proto__:null,init:h$,meta:d$},Symbol.toStringTag,{value:"Module"})),g$={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function b$(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",w$),e.ui.registerCellRenderer("boolean","cell-boolean")}class w$ extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const s=ao({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(s),this._editor=s;return}const t=Wf(this._value);if(t==="invalid"){const s=document.createElement("span");s.textContent=String(this._value),s.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Vl(s,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?s:oo(s,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return io(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const y$=Object.freeze(Object.defineProperty({__proto__:null,init:b$,meta:g$},Symbol.toStringTag,{value:"Module"})),v$={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function $$(e){customElements.get("cell-color")||customElements.define("cell-color",k$),e.ui.registerCellRenderer("color","cell-color")}class k$ extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const x$=Object.freeze(Object.defineProperty({__proto__:null,init:$$,meta:v$},Symbol.toStringTag,{value:"Module"})),S$=[{bytes:[137,80,78,71,13,10,26,10],type:"image/png"},{bytes:[71,73,70,56],type:"image/gif"},{bytes:[255,216,255],type:"image/jpeg"},{bytes:[66,77],type:"image/bmp"}],Ma=16;function C$(e){const t=(n,r)=>r.split("").every((s,i)=>e[n+i]===s.charCodeAt(0));return e.length>=12&&t(0,"RIFF")&&t(8,"WEBP")}function li(e){for(const{bytes:t,type:n}of S$)if(t.every((r,s)=>e[s]===r))return n;return C$(e)?"image/webp":null}function Gf(e){if(e==null)return null;const t=E$(e);if(t){const i=Array.prototype.slice.call(t,0,Ma),o=li(i);return o?`data:${o};base64,${Jf(t)}`:null}if(typeof e!="string")return null;const n=e.trim();if(n==="")return null;if(n.startsWith("data:"))return I$(n);if(/^(https?:)?\/\//i.test(n)||n.startsWith("/")&&/\.(png|jpe?g|gif|webp|bmp|svg)(\?|#|$)/i.test(n))return n;const r=T$(n);if(r){const i=Qf(r.slice(0,Ma*2)),o=li(i);return o?`data:${o};base64,${A$(r)}`:null}const s=Yf(n);if(s){const i=li(s);return i?`data:${i};base64,${n}`:null}return null}function _$(e){return Gf(e)!==null}function E$(e){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.length>0&&e.every(t=>typeof t=="number")?e:null;if(typeof e=="object"&&e!==null){const t=e;if(typeof t[0]!="number")return null;const n=[];for(let r=0;typeof t[String(r)]=="number";r++)n.push(t[String(r)]);return n}return null}function T$(e){const t=/^[xX]\s*(['"])([0-9a-fA-F]*)\1$/.exec(e);return t?.[2]?t[2]:e.length>=8&&e.length%2===0&&/^[0-9a-fA-F]+$/.test(e)?e:null}function Yf(e){if(e.length<8||!/^[A-Za-z0-9+/]+={0,2}$/.test(e))return null;try{const t=e.slice(0,Math.ceil(Ma*4/3));return[...atob(t.slice(0,t.length-t.length%4))].map(r=>r.charCodeAt(0))}catch{return null}}function I$(e){const t=/^data:([^;,]*)(;base64)?,([\s\S]*)$/.exec(e);if(!t)return null;if((t[1]??"").toLowerCase().startsWith("image/"))return e;const r=t[3]??"";if(!t[2])return null;const s=Yf(r),i=s&&li(s);return i?`data:${i};base64,${r}`:null}function Qf(e){const t=[];for(let n=0;n+1<e.length;n+=2)t.push(parseInt(e.slice(n,n+2),16));return t}function Jf(e){let n="";for(let r=0;r<e.length;r+=32768){const s=Array.prototype.slice.call(e,r,r+32768);n+=String.fromCharCode(...s)}return btoa(n)}function A$(e){return Jf(Qf(e))}const R$={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function O$(e){customElements.get("cell-image")||customElements.define("cell-image",D$),e.ui.registerCellRenderer("image","cell-image")}class D$ extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const s=ao({value:typeof this._value=="string"?this._value:"",onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("mousedown",o=>o.preventDefault()),i.addEventListener("click",()=>this.pickFile()),r.append(s,i),this.append(r),this._editor=s;return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0";const n=Gf(this._value);if(n){const r=document.createElement("img");r.src=n,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("click",()=>this.pickFile()),t.append(s)}}this.append(this._readonly?t:oo(t,this.pencil()))}pencil(){return io(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const L$=Object.freeze(Object.defineProperty({__proto__:null,init:O$,meta:R$},Symbol.toStringTag,{value:"Module"})),Xf=200,Zf=100;function P$(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Xf||e.h<Zf?null:{...e}}function xi(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const ed=640;function lo(){return typeof window>"u"?!1:typeof window.matchMedia=="function"?window.matchMedia(`(max-width: ${ed}px)`).matches:window.innerWidth<=ed}const M$=["n","s","e","w","ne","nw","se","sw"];function j$(e,t,n,r){const s=r>0?r:1;return{...e,x:e.x+t/s,y:e.y+n/s}}function N$(e,t,n,r,s,i,o){const a=s>0?s:1,c=n/a,d=r/a;let{x:p,y:m,w,h:y}=e;return t.includes("e")&&(w=Math.max(i,e.w+c)),t.includes("s")&&(y=Math.max(o,e.h+d)),t.includes("w")&&(w=Math.max(i,e.w-c),p=e.x+(e.w-w)),t.includes("n")&&(y=Math.max(o,e.h-d),m=e.y+(e.h-y)),{x:p,y:m,w,h:y}}function z$(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:e?.smallified?{status:"smallified",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function td(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function F$(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized",smallified:e.status==="smallified"}}const U$="#01579b",B$="input, textarea, select, button, a, .jsPanel-controlbar";function nd(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(B$))return!0;return!1}const q$={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let ca=100;function rd(){let e=ca;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return ca=e+1,ca}function H$(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(!(n===e||n.style.display==="none")&&Number(n.style.zIndex)>t)return!1;return!0}const ja=new Set,ss=new Set;function K$(){let e=null;for(const t of ss)t.style.display!=="none"&&(!e||Number(t.style.zIndex)>Number(e.style.zIndex))&&(e=t);return e}const ep=e=>{if(e.key!=="Escape"||e.defaultPrevented)return;const t=K$();t&&(e.preventDefault(),t.close())};function V$(e){ss.size===0&&document.addEventListener("keydown",ep),ss.add(e)}function W$(e){ss.delete(e)&&ss.size===0&&document.removeEventListener("keydown",ep)}function G$(){return[...ja].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function _n(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=q$[e]??"",r.addEventListener("click",s=>{s.stopPropagation(),n()}),r}function co(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id;let n=e.color??U$;t.style.setProperty("--eda-panel-color",n);const r=document.createElement("div");r.className="jsPanel-hdr";const s=document.createElement("div");s.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const o=document.createElement("div");o.className="jsPanel-titlebar",o.tabIndex=-1,o.style.outline="none",o.addEventListener("pointerdown",()=>o.focus());const a=document.createElement("span");a.className="jsPanel-title",a.textContent=e.title,o.append(a);const c=document.createElement("div");c.className="jsPanel-controlbar",c.append(_n("smallify","Collapse",()=>q("smallify")),_n("minimize","Minimize",()=>q("minimize")),_n("maximize","Maximize",()=>t.maximize()),_n("normalize","Restore",()=>q("normalize")),_n("close","Close",()=>t.close())),s.append(i,o,c),r.append(s);const d=document.createElement("div");d.className="jsPanel-content",d.append(e.content);const p=document.createElement("div");p.className="jsPanel-ftr",e.footerToolbar&&(p.classList.add("active"),p.append(e.footerToolbar)),t.append(r,d,p);const m=[];for(const K of M$){const ae=document.createElement("div");ae.className="eda-resize",ae.dataset.edge=K,t.append(ae),m.push({zone:ae,edge:K})}if(t.style.zIndex=String(rd()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const K=e.contentSize??{w:720,h:360};t.style.width=`${K.w}px`,t.style.height=`${K.h+r.offsetHeight+p.offsetHeight}px`}const w=e.position??"center",y=t.offsetWidth,k=e.container.clientWidth;w==="center"?(t.style.left=`${Math.max(0,(k-y)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in w?(t.style.left=`${Math.max(0,(k-y)/2)}px`,t.style.top=`${w.centerTopOffset}px`):(t.style.left=`${w.x}px`,t.style.top=`${w.y}px`);let x=z$(e.boot),_=M(),A=null,D=null,G=null;function M(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function re(K){t.style.left=`${K.x}px`,t.style.top=`${K.y}px`,t.style.width=`${K.w}px`,t.style.height=`${K.h}px`}function W(){const K=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-K.x/K.scale}px, ${-K.y/K.scale}px) scale(${1/K.scale})`}function T(){const K=e.viewport?.getState()??{x:0,y:0,scale:1},ae=K.scale||1;return{x:-K.x/ae,y:-K.y/ae,w:e.container.clientWidth/ae,h:e.container.clientHeight/ae}}function H(){W(),D??=e.viewport?.subscribe(W)??null,!G&&typeof ResizeObserver<"u"&&(G=new ResizeObserver(W),G.observe(e.container))}function J(){D?.(),D=null,G?.disconnect(),G=null,t.style.transform="",t.style.transformOrigin=""}function de(){const K=document.createElement("div");K.className="jsPanel-replacement",K.id=`${e.id}-min`,K.style.setProperty("--eda-panel-color",n);const ae=document.createElement("div");ae.className="jsPanel-headerlogo",ae.innerHTML=i.innerHTML;const be=document.createElement("span");return be.className="jsPanel-title",be.textContent=a.textContent,K.append(ae,be,_n("normalize","Restore",()=>{q("normalize"),t.front()}),_n("close","Close",()=>t.close())),K.addEventListener("click",We=>{We.target.closest("button")||(q("normalize"),t.front())}),K}function ge(K){switch(K==="maximized"&&x.status!=="maximized"&&J(),K==="minimized"&&x.status!=="minimized"&&(A?.remove(),A=null,t.style.display=""),x.status){case"minimized":{K==="normalized"?_=M():K==="smallified"&&(_={..._,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const ae=e.minimizeTo?document.querySelector(e.minimizeTo):null;A=de(),(ae??e.container).append(A);break}case"maximized":K==="normalized"?_=M():K==="smallified"&&(_={..._,x:t.offsetLeft,y:t.offsetTop}),H();break;case"smallified":_=M(),t.style.height=`${r.offsetHeight}px`;break;case"normalized":K==="smallified"?_={..._,x:t.offsetLeft,y:t.offsetTop}:K==="maximized"&&lo()&&(_=T()),re(_);break}t.dataset.status=x.status}function q(K){const ae=x;x=td(x,K),x.status!==ae.status&&(ge(ae.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>x.status}),t.minimize=()=>q("minimize"),t.maximize=(K,ae)=>{q("maximize"),ae!==!0&&t.front()},t.normalize=()=>q("normalize"),t.smallify=()=>q("smallify"),t.front=(K,ae)=>{t.style.zIndex=String(rd()),ae!==!1&&e.onfronted?.()},t.close=()=>{x.status!=="closed"&&(x=td(x,"close"),A?.remove(),J(),ja.delete(t),W$(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=K=>{a.textContent=K;const ae=A?.querySelector(".jsPanel-title");ae&&(ae.textContent=K)},t.setHeaderLogo=K=>{i.innerHTML=K;const ae=A?.querySelector(".jsPanel-headerlogo");ae&&(ae.innerHTML=K)},t.setHeaderColor=K=>{n=K,t.style.setProperty("--eda-panel-color",n),A?.style.setProperty("--eda-panel-color",n)},t.centerInViewport=()=>{if(x.status!=="normalized"&&x.status!=="smallified")return;const K=T(),ae=t.offsetWidth,be=t.offsetHeight;re({x:K.x+Math.max(0,(K.w-ae)/2),y:K.y+Math.max(0,(K.h-be)/2),w:ae,h:be})},t.persistFlags=()=>F$(x),t.persistRect=()=>x.status==="smallified"?{..._,x:t.offsetLeft,y:t.offsetTop}:x.status==="minimized"||x.status==="maximized"?{..._}:M(),ja.add(t),e.closeOnEscape&&V$(t),t.addEventListener("pointerdown",()=>{H$(t)||t.front()},!0);const X=K=>{K.addEventListener("pointerdown",ae=>{if(ae.button!==0||nd(ae)||x.status==="maximized"||x.status==="minimized")return;const be=M(),We=e.viewport?.getState().scale??1,Pe=ae.pointerId,Je=ae.clientX,he=ae.clientY;let bt=!1;const Dt=fe=>{if(fe.pointerId!==Pe)return;bt=!0;const Le=j$(be,fe.clientX-Je,fe.clientY-he,We);t.style.left=`${Le.x}px`,t.style.top=`${Le.y}px`},Ue=fe=>{fe.pointerId===Pe&&(K.removeEventListener("pointermove",Dt),K.removeEventListener("pointerup",Ue),K.removeEventListener("pointercancel",Ue),bt&&e.onmoved?.())};K.setPointerCapture(ae.pointerId),K.addEventListener("pointermove",Dt),K.addEventListener("pointerup",Ue),K.addEventListener("pointercancel",Ue)})};X(o),X(i),X(p);for(const{zone:K,edge:ae}of m)K.addEventListener("pointerdown",be=>{if(be.button!==0||x.status!=="normalized")return;const We=M(),Pe=e.viewport?.getState().scale??1,Je=be.pointerId,he=be.clientX,bt=be.clientY;let Dt=!1;const Ue=Le=>{Le.pointerId===Je&&(Dt=!0,re(N$(We,ae,Le.clientX-he,Le.clientY-bt,Pe,Xf,Zf)))},fe=Le=>{Le.pointerId===Je&&(K.removeEventListener("pointermove",Ue),K.removeEventListener("pointerup",fe),K.removeEventListener("pointercancel",fe),Dt&&e.onresized?.())};K.setPointerCapture(be.pointerId),K.addEventListener("pointermove",Ue),K.addEventListener("pointerup",fe),K.addEventListener("pointercancel",fe)});return r.addEventListener("dblclick",K=>{nd(K)||(x.status==="maximized"?q("normalize"):t.maximize())}),x.status!=="normalized"?ge("normalized"):t.dataset.status="normalized",t}let tp=null;function Y$(e){tp=e}function Si(){return tp}function uo(){return{getState:()=>Si()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>Si()?.subscribe(e)??(()=>{})}}function np(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let Q$=0;function rp(e,t){const n=document.createElement("button");return n.type="button",n.title=t,n.setAttribute("aria-label",t),n.innerHTML=e,n.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",n.addEventListener("mouseenter",()=>n.style.color="#4b5563"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n}const J$='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',X$='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>';function Na(e,t,n,r){const s=r?.readonly===!0,i=document.createElement("div");i.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const o=document.createElement("textarea");o.value=t,o.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const a=document.createElement("div");a.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const c=document.createElement("button");c.type="button",c.textContent=s?"Close":"Cancel",c.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const d=document.createElement("button");d.type="button",d.textContent="Save",d.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",s?(o.readOnly=!0,o.style.background="#f9fafb",a.append(c)):a.append(c,d),i.append(o,a);const p=co({id:`easydb-html-edit-${++Q$}`,container:np(),title:e,color:"#7c3aed",content:i,contentSize:{w:520,h:400},position:"center",closeOnEscape:!0,boot:{maximized:lo()},minimizeTo:"#easydb-minimized-dock",viewport:uo()});c.addEventListener("click",()=>p.close()),d.addEventListener("click",()=>{n(o.value),p.close()}),o.addEventListener("keydown",m=>{s||m.key==="Enter"&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),d.click())}),setTimeout(()=>o.focus(),0)}const Wl=2e3;let za=Wl;function Z$(e){za=typeof e=="number"&&Number.isFinite(e)&&e>0?Math.floor(e):Wl}let ek=0;class sp extends HTMLElement{constructor(){super(...arguments),this.language="Preview",this._value="",this._readonly=!1}toHtml(t){return t||null}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}get title_(){return this._label??this.language}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText=this._readonly?"color:#9ca3af":"color:#9ca3af;cursor:text",o.textContent="empty",this._readonly||(o.title="Click to edit",o.addEventListener("click",()=>this.openEditor())),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=zw(this.toHtml(this._value)??this._value);n.textContent=r.length>za?r.slice(0,za)+"…":r,n.title=this._readonly?"Click to view the source":"Click to edit",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const s=document.createElement("span");s.style.cssText="flex:1 1 auto";const i=rp(X$,"Open in a window");i.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,s,i),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box";const n=this.toHtml(this._value);if(n!==null)t.innerHTML=n;else{const r=document.createElement("pre");r.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",r.textContent=this._value,t.append(r)}co({id:`easydb-preview-popup-${++ek}`,container:np(),title:this.title_,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},boot:{maximized:lo()},closeOnEscape:!0,minimizeTo:"#easydb-minimized-dock",viewport:uo()})}openEditor(){const t=this._source!==void 0,n=t?this._source:this._value;if(this._readonly){Na(`View ${this.title_}`,n,()=>{},{readonly:!0});return}Na(`Edit ${this.title_}`,n,r=>{t?this._source=r:(this._value=r,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:r},bubbles:!0,composed:!0}))})}}const tk={id:"preview",name:"Preview",type:"cell-renderer",version:"0.4.0",description:`Shows a long value as a plain-text preview (first N characters); click to edit the source in a dialog, or use the popup icon to open the full value in a window. HTML is shown there as markup, and Markdown is recognised and converted first — so a Markdown column reads as formatted text without a script. Apply by setting a column's renderer to "preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/preview.ts"};async function sd(e){Z$(await e.settings.get("preview","maxChars"))}function nk(e){customElements.get("preview-cell")||customElements.define("preview-cell",rk),e.ui.registerCellRenderer("preview","preview-cell"),e.ui.registerCellRenderer("html-preview","preview-cell"),e.ui.registerSettings("preview","Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:Wl,scope:"workspace",description:"A safety cap on how much text goes into a preview cell. What you SEE follows the column width — the cell ellipsizes like any other, so widen the column to read more. Lower this only to cut long values short regardless of width. Applies to cells rendered after the change (reload to refresh all). Shared with the `markdown` renderer."}]),sd(e),e.events.on("app:ready",()=>void sd(e))}class rk extends sp{toHtml(t){const n=Vw(t);return n==="html"?t:n==="markdown"?Ui(t):null}}const sk=Object.freeze(Object.defineProperty({__proto__:null,init:nk,meta:tk},Symbol.toStringTag,{value:"Module"})),ik={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup); a pencil on the right edits the source. Apply by setting a column's renderer to "html". For a truncated preview use "preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function ok(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",ak),e.ui.registerCellRenderer("html","html-render-cell")}class ak extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML",this._readonly=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set rawValue(t){this._source=t==null?"":String(t)}set column(t){this._label=t?.label??"HTML"}set sourceReadonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this.render())}get sourceReadonly(){return this._readonly}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:flex;align-items:flex-start;gap:0.25rem;width:100%";const n=document.createElement("span");if(n.style.cssText="flex:1 1 auto;min-width:0",this._value?n.innerHTML=this._value:(n.style.color="#9ca3af",n.textContent="empty"),t.append(n),!this._readonly){const r=rp(J$,"Edit the HTML");r.addEventListener("click",s=>{s.stopPropagation(),this.openEditor()}),t.append(r)}this.append(t)}openEditor(){const t=this._source!==void 0;Na(`Edit ${this._label}`,t?this._source:this._value,n=>{t?this._source=n:(this._value=n,this.render()),this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))})}}const lk=Object.freeze(Object.defineProperty({__proto__:null,init:ok,meta:ik},Symbol.toStringTag,{value:"Module"})),ck={id:"cell-markdown",name:"Markdown",type:"cell-renderer",version:"0.2.0",description:`For a column written in Markdown: the cell shows one line of plain text with the markers flattened, and the popup icon opens the formatted value in a window. Click the text to edit the Markdown source. Apply by setting a column's renderer to "markdown". Unlike "preview" it never guesses — the value is always read as Markdown.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 15V9l3 3 3-3v6"/><path d="M16 9v6"/><path d="M14 13l2 2 2-2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-markdown.ts"};function uk(e){customElements.get("markdown-cell")||customElements.define("markdown-cell",dk),e.ui.registerCellRenderer("markdown","markdown-cell")}class dk extends sp{constructor(){super(...arguments),this.language="Markdown"}toHtml(t){return t?Ui(t):null}}const hk=Object.freeze(Object.defineProperty({__proto__:null,init:uk,meta:ck},Symbol.toStringTag,{value:"Module"})),fk={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function pk(e){customElements.get("cell-link")||customElements.define("cell-link",mk),e.ui.registerCellRenderer("link","cell-link")}class mk extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:gk(t),r=!this._editing&&!n?bk(t):null,s=!this._editing&&!n&&!r?wk(t):null;if(n||r||s){const i=document.createElement("span");i.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const a=document.createElement("button");a.type="button",a.title="Edit",a.textContent="✎",a.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",a.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),this._editing=!0,this.render()}),i.append(o,a),this.append(i)}else{const i=document.createElement("input");i.type="text",i.value=this.rawValue,i.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",i.addEventListener("change",()=>{this._editor===i&&this.commit(i.value)}),i.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(i.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),i.addEventListener("blur",()=>{this._editor===i&&this.commit(i.value)}),this.append(i),this._editor=i,this._editing&&setTimeout(()=>{i.focus(),i.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function gk(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function bk(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function wk(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),s=t.startsWith("+");return!r&&!s&&n.length<10?null:t}const yk=Object.freeze(Object.defineProperty({__proto__:null,init:pk,meta:fk},Symbol.toStringTag,{value:"Module"})),vk={id:"cell-tags",name:"Cell Tags",type:"cell-renderer",version:"0.1.0",description:'Renderer for `array` columns: each value in the cell shows as its own pill. A comma list ("foo,bar"), a JSON array ("[\\"Foo\\",\\"Bar\\"]") and a real array all read the same. A pencil edits the raw list; an empty list shows nothing.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-tags.ts"};function $k(e){customElements.get("cell-tags")||customElements.define("cell-tags",xk),e.ui.registerCellRenderer("tags","cell-tags")}const kk="flex:0 1 auto;min-width:0;display:inline-block;max-width:100%;padding:0 0.4rem;border:1px solid #d1d5db;border-radius:999px;background:#f3f4f6;color:#374151;font-size:0.85em;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";class xk extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._readonly=!1,this._editor=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=t===!0;this._readonly!==n&&(this._readonly=n,this._readonly&&(this._editing=!1),this.render())}get readonly(){return this._readonly}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing&&!this._readonly){this.renderEditor();return}const t=At(this._value),n=document.createElement("span");n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";for(const r of t){const s=document.createElement("span");s.className="tag-pill",s.textContent=r,s.title=r,s.style.cssText=kk,n.append(s)}this._readonly||n.append(this.pencil()),this.append(n)}pencil(){const t=document.createElement("button");return t.type="button",t.title="Edit the list",t.textContent="✎",t.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this._editing=!0,this.render()}),t}renderEditor(){const t=document.createElement("input");t.type="text",t.value=At(this._value).length===0?"":this._value,t.title="Comma-separated, or a JSON array",t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",t.addEventListener("change",()=>{this._editor===t&&this.commit(t.value)}),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),this.commit(t.value)):n.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),t.addEventListener("blur",()=>{this._editor===t&&this.commit(t.value)}),this.append(t),this._editor=t,setTimeout(()=>{t.focus(),t.select()},0)}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Sk=Object.freeze(Object.defineProperty({__proto__:null,init:$k,meta:vk},Symbol.toStringTag,{value:"Module"})),Vr={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},Ck=120,ip=50,_k=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,Ek=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function op(e){return/^https?:\/\/\S+$/i.test(e)}function Tk(e){return/^data:image\//i.test(e)?!0:op(e)?_k.test(e):_$(e)}function ap(e,t){if(e==="array")return"tags";if(e!=="string")return;const n=[];for(const s of t){if(s==null)continue;const i=typeof s=="string"?s.trim():String(s).trim();i&&n.push(i)}if(n.length===0)return;if(n.every(Tk))return"image";if(n.every(op))return"link";if(n.some(s=>Ek.test(s))||n.reduce((s,i)=>s+i.length,0)/n.length>Ck)return"preview"}function Gl(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=ap(n.type,t.map(s=>s[n.field]));return r?{...n,renderer:r}:n})}function Ik(e){e.events.on("import:after",({tableId:t})=>{Ak(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:Vr.name}),null;const s=(await t.store.rows(r).find()).slice(0,ip);if(s.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:Vr.name}),null;const i=n.map(({renderer:c,...d})=>d),o=Gl(i,s.map(c=>c.data)),a=o.filter((c,d)=>c.renderer!==n[d]?.renderer).length;return t.ui.dialogs.toast(a===0?"No renderer fits these values — columns left as they are.":`Set ${a} renderer${a===1?"":"s"}. Press Save to keep them.`,{kind:a===0?"info":"success",title:Vr.name}),o}})}async function Ak(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(i=>i.renderer))return;const r=(await e.store.rows(t).find()).slice(0,ip);if(r.length===0)return;const s=Gl(n.columns,r.map(i=>i.data));if(s.every((i,o)=>i.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:s,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:Vr.id,phase:"runtime",error:n})}}const Rk=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:ap,init:Ik,meta:Vr,withInferredRenderers:Gl},Symbol.toStringTag,{value:"Module"}));function ci(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function Ok(e){return!!(e.source||e.origin)}const Dk="#01579b",Lk="#6d28d9";function id(e){return Ok(e)?Lk:Dk}const Br='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',od={normal:`<svg ${Br} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${Br} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${Br} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${Br} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},Pk=`<svg ${Br} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var Mk=Object.defineProperty,jk=Object.getOwnPropertyDescriptor,ho=(e,t,n,r)=>{for(var s=r>1?void 0:r?jk(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Mk(t,n,s),s};function Nk(e,t,n){(Mt.instance??Fk()).show(e,t,n)}function zk(e){if(!e)return null;const t=ci(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Fk(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let Mt=class extends xe{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),Mt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Mt.instance===this&&(Mt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return ie;const r=n?$`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:$`${t}`;return $`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=zk(this.provenance);return $`
      <dialog @cancel=${this.close} @keydown=${pt}>
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
                        <a href=${n.url} target="_blank" rel="noopener noreferrer">${n.url}</a>
                      </div>`:ie}
                </div>`:ie}
            ${e?.descriptionHtml?$`<div class="desc">${Xn(e.descriptionHtml)}</div>`:e?.description?$`<div class="desc">${e.description}</div>`:ie}
            ${t?$`<dl>${this.row("Source",e?.source,e?.sourceUrl)} ${this.row("License",e?.license,e?.licenseUrl)} ${this.row("About",e?.about,e?.aboutUrl)}</dl>`:ie}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?$`<p class="empty">No additional information.</p>`:ie}
          </div>
        </form>
      </dialog>
    `}};Mt.instance=null;Mt.styles=[ft,Se`
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
    `];ho([z()],Mt.prototype,"name",2);ho([z()],Mt.prototype,"info",2);ho([z()],Mt.prototype,"provenance",2);Mt=ho([Oe("table-info-dialog")],Mt);const Uk=.25,Bk=4;function qk(e){return Math.min(Bk,Math.max(Uk,e))}function ad(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const zr={x:0,y:0,scale:1};function ld(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Hk(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Kk(e,t){let n={...zr};t.style.transformOrigin="0 0";const r=new Set,s=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const q of r)q({...n})};let i="none",o={...zr},a=0,c=0,d=0,p=0,m=0,w=0;const y=(q,X)=>{const K=e.getBoundingClientRect();return{x:q-K.left,y:X-K.top}},k=q=>{if(q.touches.length===2){i="pinch",o={...n};const[X,K]=[q.touches[0],q.touches[1]];d=ld(X,K)||1;const ae=y((X.clientX+K.clientX)/2,(X.clientY+K.clientY)/2);p=(ae.x-n.x)/n.scale,m=(ae.y-n.y)/n.scale,q.preventDefault();return}if(q.touches.length===1&&!Hk(q.target)){const X=q.timeStamp;if(X-w<300){n={...zr},s(),w=0,i="none",q.preventDefault();return}w=X,i="pan",o={...n},a=q.touches[0].clientX,c=q.touches[0].clientY}else i="none"},x=q=>{if(i==="pan"&&q.touches.length===1){const X=q.touches[0];n=ad(o,X.clientX-a,X.clientY-c),s(),q.preventDefault()}else if(i==="pinch"&&q.touches.length>=2){const[X,K]=[q.touches[0],q.touches[1]],ae=qk(o.scale*(ld(X,K)/d)),be=y((X.clientX+K.clientX)/2,(X.clientY+K.clientY)/2);n={x:be.x-p*ae,y:be.y-m*ae,scale:ae},s(),q.preventDefault()}},_=q=>{q.touches.length===0?i="none":q.touches.length===1&&i==="pinch"&&(i="pan",o={...n},a=q.touches[0].clientX,c=q.touches[0].clientY)};let A=!1,D={...zr},G=0,M=0,re=!1;const W=(q,X)=>{const K=e.getBoundingClientRect();return q>=K.left&&q<=K.right&&X>=K.top&&X<=K.bottom},T=q=>{if(!A)return;const X=q.clientX-G,K=q.clientY-M;!re&&Math.hypot(X,K)<4||(re=!0,document.body.style.cursor="grabbing",n=ad(D,X,K),s(),q.preventDefault())},H=()=>{A&&(A=!1,document.body.style.cursor="",window.removeEventListener("mousemove",T,!0),window.removeEventListener("mouseup",J,!0))};function J(){H()}const de=q=>{q.button===2&&W(q.clientX,q.clientY)&&(A=!0,re=!1,D={...n},G=q.clientX,M=q.clientY,window.addEventListener("mousemove",T,!0),window.addEventListener("mouseup",J,!0))},ge=q=>{re&&(q.preventDefault(),re=!1)};return e.addEventListener("touchstart",k,{passive:!1}),e.addEventListener("touchmove",x,{passive:!1}),e.addEventListener("touchend",_),e.addEventListener("touchcancel",_),window.addEventListener("mousedown",de,!0),window.addEventListener("contextmenu",ge,!0),{snapshot:()=>({...n}),reset:()=>{n={...zr},s()},restore:q=>{n={...q},s()},subscribe:q=>(r.add(q),()=>r.delete(q)),dispose:()=>{e.removeEventListener("touchstart",k),e.removeEventListener("touchmove",x),e.removeEventListener("touchend",_),e.removeEventListener("touchcancel",_),window.removeEventListener("mousedown",de,!0),window.removeEventListener("contextmenu",ge,!0),H()}}}const Xs=new Map;function ws(e,t){const r=(Xs.get(e)??Promise.resolve()).then(t,t);return Xs.set(e,r),r.finally(()=>{Xs.get(e)===r&&Xs.delete(e)}),r}const Ci="easydb:visible-count";function lp(e,t,n){e&&document.dispatchEvent(new CustomEvent(Ci,{detail:{key:e,count:t,total:n}}))}function cp(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const Fa="easydb:import-progress";function Vk(e,t){if(t<=0)return` (${e.toLocaleString()})`;const n=Math.min(100,Math.round(e/t*100));return` (${e.toLocaleString()}/${t.toLocaleString()} · ${n}%)`}let ua=0;function up(){return ua=Math.max(Date.now(),ua+1),ua}const fo=new Map;function dp(e,t){fo.set(e,t)}function po(e){fo.delete(e)}function Wk(e){return fo.has(e)}function Gk(e){try{fo.get(e)?.()}catch{}}const un=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function Yk(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let cd=!1;async function Qk(){cd||(cd=!0,document.addEventListener("easydb:restack-windows",()=>void ud())),await ud()}async function ud(){if(un)return;const e=await ee();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),s=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],i=Yk(s);if(t<12&&!i.every(o=>Wk(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of i)Gk(o);return}}const Jk=12;function Xk(e,t,n,r,s=Jk){const i=dd(e.x,t.x,t.w,n,e.scale,s),o=dd(e.y,t.y,t.h,r,e.scale,s);return i===e.x&&o===e.y?null:{...e,x:i,y:o}}function dd(e,t,n,r,s,i){const o=t*s+e,a=n*s,c=o+a,d=r-i*2;return a>=d?o<=i&&c>=r-i?e:i-t*s:o<i?i-t*s:c>r-i?r-i-a-t*s:e}function hp(e){if(e.status==="minimized"&&e.normalize(),lo()){e.status!=="maximized"&&e.maximize(),e.front();return}e.status!=="maximized"&&Zk(e),e.front()}function Zk(e){const t=Si(),n=document.getElementById("easydb-panels");if(!t||!n)return;const r=Xk(t.snapshot(),{x:e.offsetLeft,y:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight},n.clientWidth,n.clientHeight);r&&t.restore(r)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fp=Symbol.for(""),ex=e=>{if(e?.r===fp)return e?._$litStatic$},hd=e=>({_$litStatic$:e,r:fp}),fd=new Map,tx=e=>(t,...n)=>{const r=n.length;let s,i;const o=[],a=[];let c,d=0,p=!1;for(;d<r;){for(c=t[d];d<r&&(i=n[d],(s=ex(i))!==void 0);)c+=s+t[++d],p=!0;d!==r&&a.push(i),o.push(c),d++}if(d===r&&o.push(t[r]),p){const m=o.join("$$lit$$");(t=fd.get(m))===void 0&&(o.raw=o,fd.set(m,t=o)),n=a}return e(t,...n)},pd=tx($);function nx(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(a=>a==="AND"||a==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(a=>a.toLowerCase())};const s=[];let i=[];for(const a of n)a==="OR"?(s.push(i),i=[]):a==="AND"||i.push(a.toLowerCase());s.push(i);const o=s.filter(a=>a.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function rx(e,t,n){const r=nx(t);if(r.kind==="boolean")return e.filter(c=>r.groups.some(d=>d.every(p=>n(c,p))));const{phrase:s,words:i}=r;if(i.length<=1)return s===""?e:e.filter(c=>n(c,s));const o=e.filter(c=>n(c,s));if(o.length>0)return o;const a=e.filter(c=>i.every(d=>n(c,d)));return a.length>0?a:e.filter(c=>i.some(d=>n(c,d)))}const sx=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function is(e,t,n){const r=new Map,s=new Map;for(const c of n)r.set(c.field.toLowerCase(),c.field),c.label&&r.set(c.label.toLowerCase(),c.field),s.set(c.field,c.type);const i=[...r.keys()].filter(Boolean).sort((c,d)=>d.length-c.length);let o=t;return i.length>0&&(o=o.replace(new RegExp(`(^|\\s)(${i.map(sx).join("|")}):\\s+`,"gi"),"$1$2:")),rx(e,o,(c,d)=>{const p=d.indexOf(":");if(p>0){const m=r.get(d.slice(0,p));if(m)return Zr(c.data[m],d.slice(p+1),{type:s.get(m)})}return Object.values(c.data).some(m=>m!=null&&String(m).toLowerCase().includes(d))})}function ix(e,t){return e.some(n=>{const r=n.data[t];return r!=null&&r!==""})}function pp(e,t){return!e.script?.trim()||t.length===0?!1:!ix(t,e.field)}function mp(e,t){return e.filter(n=>n.filterable!==!1&&!pp(n,t))}function ox(e,t,n,r){const s=a=>a==null?0:a===""?1:2,i=s(e),o=s(t);return i!==2||o!==2?(i-o)*r:ax(e,t,n)*r}function ax(e,t,n){switch(n){case"number":{const r=Number(e),s=Number(t);return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}case"boolean":return(e?1:0)-(t?1:0);case"array":return cu(e).localeCompare(cu(t),void 0,{numeric:!0,sensitivity:"base"});case"date":{const r=new Date(String(e)).getTime(),s=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(s)?String(e).localeCompare(String(t)):r-s}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function gp(e,t,n){if(t.length===0)return e;const r=t.map(i=>({field:i.field,factor:i.asc?1:-1,type:n.find(o=>o.field===i.field)?.type??"string"})),s=[...e];return s.sort((i,o)=>{for(const a of r){const c=ox(i.data[a.field],o.data[a.field],a.type,a.factor);if(c!==0)return c}return 0}),s}function md(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function lx(e,t){const n=e.trim();if(n==="")return!0;const r=n.split(/\s+/);if(r.length!==1)return!1;const s=r[0]??"",i=s.indexOf(":");if(i>0){const o=s.slice(0,i).toLowerCase();if(t.some(c=>c.field.toLowerCase()===o||c.label?.toLowerCase()===o))return!1}return!0}function bp(e,t=[]){return mp(e,t).map(n=>({field:n.field,label:n.label}))}function wp(e){const t=new Set(e.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=new Set(e.columns.map(r=>r.field));return Object.entries(e.filters??{}).filter(([r,s])=>s&&s.trim().length>0&&!t.has(r)&&n.has(r))}function gd(e,t){let n=e;const r=wp(t);if(r.length>0){const c=new Map(t.columns.map(d=>[d.field,d.type]));n=n.filter(d=>r.every(([p,m])=>Zr(d.data[p],m,{type:c.get(p)})))}const s=(t.search??"").trim();s!==""&&(n=is(n,s,bp(t.columns,e))),n=gp(n,t.sort??[],t.columns);const i=n.length,o=Math.max(0,t.offset??0),a=t.limit!=null&&t.limit>0?o+t.limit:void 0;return(o>0||a!=null)&&(n=n.slice(o,a)),{rows:cx(n,t.fields),total:i}}function cx(e,t){if(!t||t.length===0)return e;const n=new Set(t);return e.map(r=>({...r,data:Object.fromEntries(Object.entries(r.data).filter(([s])=>n.has(s)))}))}async function Yl(e,t,n=0){const r=(t.search??"").trim(),s=lx(r,bp(t.columns));if(!e.query){const p=await e.find(),m=n>0&&p.length>=n;return{...gd(m?p.slice(0,n):p,t),...m?{truncated:!0}:{}}}const i={...t.fields?{fields:t.fields}:{},...Object.keys(t.filters??{}).length>0?{filters:Object.fromEntries(wp(t))}:{},...s&&r?{search:r}:{},...t.sort&&t.sort.length>0?{sort:[...t.sort]}:{}},o=s;o?(t.offset!=null&&(i.offset=t.offset),t.limit!=null&&(i.limit=t.limit)):n>0&&(i.limit=n);const a=await e.query(i);if(o&&!a.partial)return a;const c=gd(a.rows,t),d=!o&&i.limit!=null&&a.rows.length>=i.limit;return{...c,...a.partial?{partial:!0}:{},...a.truncated||d?{truncated:!0}:{}}}const Zs=e=>Math.max(0,Math.round(e)).toLocaleString();function yp(e){if(!e)return null;const{shown:t,total:n,searching:r,searched:s}=e;if(r){const i=s&&s>0?`the first ${Zs(s)} rows`:"the rows loaded so far";return t===0?`Nothing found in ${i} — this table is bigger, so there may be matches further in. Filter a column to search the rest.`:`Found ${Zs(t)} in ${i} — there may be more further in. Filter a column to search the rest.`}return`Showing the first ${Zs(t)} of ${Zs(n)}+ matching rows. Narrow the filter to see the rest.`}const zt=Se`
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
`;var ux=Object.defineProperty,dx=Object.getOwnPropertyDescriptor,pr=(e,t,n,r)=>{for(var s=r>1?void 0:r?dx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&ux(t,n,s),s};function da(e){return cn([{...e,negate:!1}])}let ut=class extends xe{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.exactValues=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.close(null))}}open(e,t,n,r=0,s,i){return this.values=t,this.blanks=r,this.onChange=s??null,this.exactValues=i?.exact===!0,this.states=new Map(Nn(n??"").map(o=>[da(o),{state:o.negate?"not":"on",token:o}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0),document.addEventListener("keydown",this.onKey,!0)})}cycle(e,t=this.exactValues){const n=t?{term:e,negate:!1,exact:!0}:{term:e,negate:!1},r=da(n),s=new Map(this.states),i=s.get(r);i===void 0?s.set(r,{state:"on",token:n}):i.state==="on"?s.set(r,{state:"not",token:i.token}):s.delete(r),this.states=s;const o=[...s.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=cn(o),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),ut.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),ut.instance===this&&(ut.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=(o,a=this.exactValues)=>this.states.get(da(a?{term:o,negate:!1,exact:!0}:{term:o,negate:!1}))?.state,s=o=>$` <span class=${`cb${o?` ${o}`:""}`}>${o==="on"?"✓":o==="not"?"✕":""}</span> `,i=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return $`
      <header>
        <span class="mi sm">search</span>
        <input type="text" autofocus placeholder="Filter values…" .value=${this.search} @input=${o=>this.search=o.target.value} />
        <button class="icon" title="Close" @click=${()=>this.close(null)}>
          <span class="mi sm">close</span>
        </button>
      </header>
      <div class="hint">Click a value: include (✓) → exclude (✕) → off.</div>
      ${t.length===0&&!n?$`<div class="empty">No matching values.</div>`:$`<ul>
            ${n?$`
                  <li class="blanks" title=${i(r("NULL",!1))} @click=${()=>this.cycle("NULL",!1)}>
                    <span class="left">
                      ${s(r("NULL",!1))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(o=>{const a=r(o.value);return $`
                <li title=${i(a)} @click=${()=>this.cycle(o.value)}>
                  <span class="left">
                    ${s(a)}
                    <span class="label">${o.value}</span>
                  </span>
                  <span class="count">${o.count}</span>
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
    `}};ut.instance=null;ut.styles=[zt,Se`
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
    `];pr([St({type:Array})],ut.prototype,"values",2);pr([St({type:Number})],ut.prototype,"blanks",2);pr([St({type:String})],ut.prototype,"current",2);pr([z()],ut.prototype,"search",2);pr([z()],ut.prototype,"states",2);ut=pr([Oe("filter-popover")],ut);var hx=Object.defineProperty,fx=Object.getOwnPropertyDescriptor,Ft=(e,t,n,r)=>{for(var s=r>1?void 0:r?fx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&hx(t,n,s),s};let xt=class extends xe{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return $`
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
        ${this.value?$`<button type="button" class="clear" title="Clear filter" tabindex="-1" @mousedown=${r=>r.preventDefault()} @click=${this.onClear}>×</button>`:ie}
      </div>
      ${t?$`<ul class="dropdown" style=${n} @mousedown=${r=>r.preventDefault()}>
            ${e.map((r,s)=>$` <li class=${s===this.highlightIdx?"highlighted":""} @mousedown=${i=>i.preventDefault()} @click=${()=>this.onPick(r)}>${r}</li> `)}
          </ul>`:ie}
    `}};xt.styles=Se`
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
  `;Ft([St({type:String})],xt.prototype,"value",2);Ft([St({type:Array})],xt.prototype,"options",2);Ft([St({type:String})],xt.prototype,"placeholder",2);Ft([z()],xt.prototype,"open",2);Ft([z()],xt.prototype,"highlightIdx",2);Ft([z()],xt.prototype,"dropTop",2);Ft([z()],xt.prototype,"dropLeft",2);Ft([z()],xt.prototype,"dropMinWidth",2);Ft([z()],xt.prototype,"editing",2);Ft([Kt("input")],xt.prototype,"inputEl",2);xt=Ft([Oe("filter-combobox")],xt);const vp=50,px=500,mx=100;function _i(e){return typeof e=="string"?e:String(e)}function gx(e,t){return t==="array"?At(e):e==null||e===""?[]:[_i(e)]}function $p(e,t,n){const r=n?.maxLen??vp;if(e.length===0)return!1;for(const s of e.slice(0,mx)){const i=s.data[t];if(i!=null){if(n?.type==="array"){if(At(i).some(o=>o.length>=r))return!1;continue}if(_i(i).length>=r)return!1}}return!0}function bx(e,t,n){const r=n?.maxLen??vp,s=n?.maxOptions??px,i=new Set;for(const o of e)for(const a of gx(o.data[t],n?.type))if(!(a.length>=r)&&(i.add(a),i.size>=s))return[...i].sort();return[...i].sort()}function kp(e,t,n){const r=new Map;let s=0;for(const o of e){const a=o.data[t],c=n?.type==="array"?At(a):a==null||_i(a).trim()===""?[]:[_i(a)];if(c.length===0){s++;continue}for(const d of c)r.set(d,(r.get(d)??0)+1)}let i=[...r.entries()].map(([o,a])=>({value:o,count:a})).sort((o,a)=>a.count-o.count||o.value.localeCompare(a.value));return n?.type==="boolean"&&(i=[...["true","false"].map(a=>({value:a,count:r.get(a)??0})),...i.filter(a=>a.value!=="true"&&a.value!=="false")]),{values:i,blanks:s}}const mo="grid";async function wx(e){return await e.get(mo,"sortDescFirst")!==!1}async function yx(e){return await e.get(mo,"highlightNulls")!==!1}const Ua="easydb:settings-changed";function vx(e,t){typeof document>"u"||document.dispatchEvent(new CustomEvent(Ua,{detail:{pluginId:e,key:t}}))}function $x(e,t,n={}){const r=n.additive===!0,s=n.descFirst!==!0,i=e.find(c=>c.field===t),o=e.length===1&&e[0]?.field===t;if(!r&&!o)return[{field:t,asc:s}];const a=r?e.filter(c=>c.field!==t):[];return i?i.asc===s?[...a,{field:t,asc:!s}]:[...a]:[...a,{field:t,asc:s}]}var kx=Object.defineProperty,xx=Object.getOwnPropertyDescriptor,De=(e,t,n,r)=>{for(var s=r>1?void 0:r?xx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&kx(t,n,s),s};const Sx=200,Cx=250,_x=10,ha=32;let Te=class extends xe{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.matchingTotal=0,this.tableTotal=0,this.truncated=!1,this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.highlightNulls=!0,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.rowColl=null,this.loadGeneration=0,this.reloadTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{const t=e.detail.query??"";t!==this.globalQuery&&(this.globalQuery=t,this.scheduleReload())},this.onTableSearch=e=>{const t=e.detail;if(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId){const n=t.query??"";if(n===this.localQuery)return;this.localQuery=n,this.scheduleReload()}},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)},this.onSettingsChanged=e=>{e.detail?.pluginId===mo&&this.readGridSettings()}}get searchIsActive(){return this.localQuery.trim()!==""||this.globalQuery.trim()!==""}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener(Aa,this.onTableLoading),document.addEventListener(Ua,this.onSettingsChanged),this.readGridSettings(),this.readLoadingState(),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener(Aa,this.onTableLoading),document.removeEventListener(Ua,this.onSettingsChanged),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.reloadTimer!=null&&(window.clearTimeout(this.reloadTimer),this.reloadTimer=null),this.resizing=null}async readGridSettings(){try{const e=await ee();this.highlightNulls=await yx(e.api.settings)}catch{}}readLoadingState(){const e=qy(this.tableId);this.externalLoading=e!==void 0,this.externalProgress=typeof e=="number"?e:null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),e.has("tableId")&&this.readLoadingState(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=Math.max(this.tableTotal,this.matchingTotal,this.rows.length);t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,lp(e,t,n))}async bind(){if(!this.tableId)return;const e=await ee(),t=await e.store.tables.findOne(this.tableId);t&&(this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(s=>s.id===this.tableId);r&&(this.tableColumns=r.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const r=n.find(s=>s.id===this.viewInstanceId);r&&(this.viewInst=r,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const r=n.find(s=>s.id===this.tableId);r&&this.applyTable(r)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers)),this.rowColl=e.store.rows(this.tableId),this.unsubscribe=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows())}async loadRows(){const e=this.rowColl;if(!e)return;const t=++this.loadGeneration,n=window.setTimeout(()=>this.loading=!0,Sx);try{const r=await Yl(e,this.rowRequest(),Jr);if(t!==this.loadGeneration)return;if(this.rows=r.rows,this.matchingTotal=r.total,this.truncated=r.truncated===!0,e.count){const s=await e.count();if(t!==this.loadGeneration)return;this.tableTotal=s}else this.tableTotal=r.total}catch(r){if(t!==this.loadGeneration)return;this.rows=[],this.matchingTotal=0,this.tableTotal=0,(await ee()).api.ui.dialogs.toast(`Couldn't load rows: ${r?.message??String(r)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(n),t===this.loadGeneration&&(this.loading=!1)}}rowRequest(){const e=[this.localQuery.trim(),this.globalQuery.trim()].filter(Boolean).join(" ");return{columns:this.columns,filters:this.filters,...e?{search:e}:{},...this.sortSpecs.length>0?{sort:this.sortSpecs}:{}}}scheduleReload(){this.reloadTimer!=null&&window.clearTimeout(this.reloadTimer),this.reloadTimer=window.setTimeout(()=>{this.reloadTimer=null,this.loadRows()},Cx)}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=md(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const s=n[r.field];return typeof s=="number"?{...r,width:s}:r}),this.sortSpecs=md(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await ee();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const s=this.columns.find(i=>i.field===n);if(this.readOnly||s?.readonly===!0){e.api.ui.dialogs.toast(this.readOnly?"This table is read-only.":`“${s?.label??n}” is a read-only column.`,{kind:"warning",title:"Not saved"}),this.requestUpdate();return}if(s){const i=Ix(s,r,this.rows,t.id,t);if(i){await e.api.ui.dialogs.alert(i,`Cannot save ${s.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(i){await e.api.ui.dialogs.alert(i?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const s=String(n);return $`<input
      type="text"
      class=${Vf}
      style=${n$}
      title=${r}
      .value=${s}
      @keydown=${i=>this.cancelCellEdit(i,s)}
      @change=${i=>this.setCell(e,t.field,i.target.value)}
    />`}renderReadonlyCell(e,t){if(e.type==="boolean")return $`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`;if(t==null||t==="")return $``;if(e.type==="array"&&At(t).length===0)return $``;const n=Tf(e.type,t);return n!==null?$`${n}`:$`${String(t)}`}renderScriptedCell(e,t){const n=ds(t.script,e.data);if(!n.ok)return $`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return $`${n.value==null?"":String(n.value)}`;const s=hd(r);return pd`<${s}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      .sourceReadonly=${this.readOnly}
      @change=${this.readOnly?void 0:i=>this.setCell(e,t.field,i.detail.value)}
    ></${s}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,s=t.renderer,i=s?this.cellRenderers?.get(s):void 0;if(i){const o=hd(i);return pd`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        .sourceReadonly=${r}
        @change=${r?void 0:a=>this.setCell(e,t.field,a.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return wd(n,Hr(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):$`<input
          type="date"
          .value=${Hr(n)}
          @keydown=${o=>this.cancelCellEdit(o,Hr(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return wd(n,Kr(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):$`<input
          type="datetime-local"
          .value=${Kr(n)}
          @keydown=${o=>this.cancelCellEdit(o,Kr(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":{const o=n==null||n==="";return!o&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):$`<input
          type="number"
          .value=${o?"":String(n)}
          @keydown=${a=>this.cancelCellEdit(a,o?"":String(n))}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`}case"array":{const o=At(n).length===0?"":String(n);return $`<input
          type="text"
          .value=${o}
          @keydown=${a=>this.cancelCellEdit(a,o)}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}default:return $`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(n??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await ee();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=await ee(),r=$x(this.sortSpecs,e,{additive:t,descFirst:await wx(n.api.settings)});this.sortSpecs=r,this.scheduleReload(),await this.persistSort(r)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await ee();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}typedFilters(e){return e.map(([t,n])=>({field:t,query:n,type:this.columns.find(r=>r.field===t)?.type}))}filteredRows(){const e=new Set(this.columns.filter(a=>a.filterable===!1).map(a=>a.field)),t=new Set(this.columns.map(a=>a.field)),n=Object.entries(this.filters).filter(([a,c])=>c&&c.trim().length>0&&!e.has(a)&&t.has(a)),r=this.globalQuery.trim(),s=this.localQuery.trim();if(n.length===0&&r.length===0&&s.length===0)return this.rows;let i=this.rows;if(n.length>0){const a=this.typedFilters(n);i=i.filter(c=>a.every(d=>Zr(c.data[d.field],d.query,{type:d.type})))}const o=mp(this.columns,this.rows);return s&&(i=is(i,s,o)),r&&(i=is(i,r,o)),i}sortedRows(){return gp(this.filteredRows(),this.sortSpecs,this.columns)}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=ut.instance;if(!r)return;const{values:s,blanks:i}=kp(this.rowsFacetedFor(t),t,{type:this.columns.find(a=>a.field===t)?.type}),o=await r.open(n.getBoundingClientRect(),s,this.filters[t]??"",i,a=>this.onFilterInput(t,a));o!==null&&(typeof o=="object"&&"clear"in o?this.onFilterInput(t,""):typeof o=="string"&&this.onFilterInput(t,o))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250),this.scheduleReload()}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(s=>s.filterable===!1).map(s=>s.field)),n=Object.entries(this.filters).filter(([s,i])=>i&&i.trim().length>0&&s!==e&&!t.has(s));if(n.length===0)return this.rows;const r=this.typedFilters(n);return this.rows.filter(s=>r.every(i=>Zr(s.data[i.field],i.query,{type:i.type})))}computeFilterSuggestions(){const e=new Map;for(const t of this.visibleColumns)$p(this.rows,t.field,{type:t.type})&&e.set(t.field,bx(this.rowsFacetedFor(t.field),t.field,{type:t.type}));return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((s,i)=>{if(s.width!=null)return;const o=t[i];o&&r.set(s.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(s=>r.has(s.field)?{...s,width:r.get(s.field)}:s))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const s=o=>{if(!this.resizing)return;const a=o.clientX-this.resizing.startX,c=Math.max(_x,this.resizing.startW+a);this.columns=this.columns.map(d=>d.field===this.resizing.field?{...d,width:c}:d)},i=async()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i);const o=this.resizing?.field;if(this.resizing=null,!o)return;const a=await ee();if(this.viewMode){const c={...this.viewInst?.columnWidths??{}};for(const d of this.columns)typeof d.width=="number"&&(c[d.field]=d.width);await a.store.viewInstances.patch(this.viewInstanceId,{columnWidths:c,updatedAt:Date.now()})}else await a.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",s),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=s?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const s=[...this.columns],i=s.findIndex(d=>d.field===n);if(i<0)return;const[o]=s.splice(i,1);let a=s.findIndex(d=>d.field===t);if(a<0){s.splice(i,0,o);return}r==="after"&&(a+=1),s.splice(a,0,o);const c=await ee();this.viewMode?await c.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:s.map(d=>d.field),updatedAt:Date.now()}):await c.store.tables.patch(this.tableId,{columns:s,updatedAt:Date.now()})}async saveFilters(){const e=await ee(),t={};for(const[r,s]of Object.entries(this.filters))s&&s.trim().length>0&&(t[r]=s);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+ha}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),s=Math.min(e.length,r+n);return{slice:e.slice(r,s),topPad:r*t,bottomPad:(e.length-s)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:s}=this.virtualSlice(e),i=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return $`
      ${this.loading||this.externalLoading?$`<div class="load-bar" role="progressbar" aria-label="Loading rows" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${o!=null?Math.round(o*100):ie}>
            <div class="load-bar-fill ${o!=null?"determinate":""}" style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:ie}></div>
          </div>`:ie}
      ${this.truncated?$`<div class="truncated-note" role="status">
            ${yp({shown:this.rows.length,total:this.matchingTotal,searching:this.searchIsActive,searched:Jr})}
          </div>`:ie}
      <table style=${this.tableSizingStyle(t)??ie}>
        <colgroup>
          ${t.map(a=>$`<col style=${a.width!=null?`width: ${a.width}px`:""} />`)}
          <col style="width:${ha}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(a=>{const c=a.sortable!==!1,d=a.filterable!==!1&&!pp(a,this.rows),p=this.sortSpecs.findIndex(M=>M.field===a.field),m=p>=0?this.sortSpecs[p]:void 0,w=m?m.asc?"asc":"desc":null,y=c?w==="asc"?"▲":w==="desc"?"▼":"⇅":"",k=this.sortSpecs.length>1&&p>=0?String(p+1):"",x=`t-${a.type}`,_=this.dragSourceField===a.field,A=this.dropTargetField===a.field,D=A&&this.dropEdge==="before"?" drop-before":A&&this.dropEdge==="after"?" drop-after":"",G=(a.description?`${a.description}
`:"")+(a.units?`Units: ${a.units}
`:"")+`${a.field} — ${c?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(d?"":" · not filterable");return $`
                <th
                  class=${`${x}${w?" sorted":""}${_?" drag-source":""}${D}${c?"":" no-sort"}`}
                  title=${G}
                  @click=${M=>c&&this.toggleSort(a.field,M.shiftKey)}
                  @dragover=${M=>this.onColDragOver(M,a.field,M.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(a.field)}
                  @drop=${M=>this.onColDrop(M,a.field)}
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
                      @click=${M=>M.stopPropagation()}
                      @dragstart=${M=>this.onColDragStart(M,a.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label">${a.label}${a.units?$`<span class="col-units"> (${a.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true">${y}${k?$`<span class="sort-rank">${k}</span>`:ie}</span>
                    ${d?$`<button
                          class=${`funnel${this.filters[a.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${a.label||a.field}`}
                          @click=${M=>this.openFilterPicker(M,a.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${M=>M.stopPropagation()}
                    @pointerdown=${M=>this.onResizeStart(M,a.field,M.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${ha}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(a=>{if(a.filterable===!1)return $`<th></th>`;const c=i.get(a.field)??[];return $`
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
          ${r>0?$`<tr class="spacer" style=${`height:${r}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${n.map(a=>$`
              <tr>
                ${t.map(c=>$`<td
                      class=${`t-${c.type}${c.renderer?` r-${c.renderer}`:""}${c.renderer&&this.cellRenderers?.get(c.renderer)?" has-renderer":""}${Tx(a,c,this.highlightNulls)}`}
                      title=${Ex(a,c)}
                    >
                      ${this.renderCell(a,c)}
                    </td>`)}
                <td>
                  ${this.readOnly?ie:$`<button class="danger" title="Delete row" @click=${()=>this.deleteRow(a.id)}>
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${s>0?$`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Te.styles=[zt,Se`
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
    `];De([St({type:String})],Te.prototype,"tableId",2);De([St({type:String})],Te.prototype,"viewInstanceId",2);De([z()],Te.prototype,"columns",2);De([z()],Te.prototype,"rows",2);De([z()],Te.prototype,"matchingTotal",2);De([z()],Te.prototype,"tableTotal",2);De([z()],Te.prototype,"truncated",2);De([z()],Te.prototype,"sortSpecs",2);De([z()],Te.prototype,"filters",2);De([z()],Te.prototype,"globalQuery",2);De([z()],Te.prototype,"localQuery",2);De([z()],Te.prototype,"dragSourceField",2);De([z()],Te.prototype,"dropTargetField",2);De([z()],Te.prototype,"dropEdge",2);De([z()],Te.prototype,"resizing",2);De([z()],Te.prototype,"cellRenderers",2);De([z()],Te.prototype,"scrollY",2);De([z()],Te.prototype,"viewportHeight",2);De([z()],Te.prototype,"loading",2);De([z()],Te.prototype,"externalLoading",2);De([z()],Te.prototype,"externalProgress",2);De([z()],Te.prototype,"highlightNulls",2);De([z()],Te.prototype,"tableReadonly",2);Te=De([Oe("data-table")],Te);const bd=500;function Ex(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null||t.type==="array"&&At(n).length===0)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>bd?`${r.slice(0,bd)}…`:r}function Tx(e,t,n=!0){if(t.script)return"";const r=r$(e.data[t.field],t.type);return r==="empty"?n?" is-null":"":r==="invalid"?" is-invalid":""}function Ix(e,t,n,r,s){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}if(e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(o=>o.id!==r&&o.data[e.field]===t))return`${e.label} must be unique. Another row already has "${String(t)}".`;if(e.validate?.trim()){const i={...s.data,[e.field]:t},o=ty(e.validate,t,i);if(!o.ok)return o.message}return null}function wd(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}var Ax=Object.defineProperty,Rx=Object.getOwnPropertyDescriptor,ys=(e,t,n,r)=>{for(var s=r>1?void 0:r?Rx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Ax(t,n,s),s};let jn=class extends xe{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return $`<button class="icon ${e?"active":""}" title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"} @click=${this.openSearch}>
        <span class="mi sm">search</span>
      </button>`}return $`<input type="search" placeholder="search…" .value=${this.query} @input=${this.onInput} @blur=${this.onBlur} />`}};jn.styles=[zt,Se`
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
    `];ys([St({type:String})],jn.prototype,"tableId",2);ys([z()],jn.prototype,"query",2);ys([z()],jn.prototype,"open",2);ys([Kt("input")],jn.prototype,"inputEl",2);jn=ys([Oe("panel-search")],jn);var Ox=Object.defineProperty,Dx=Object.getOwnPropertyDescriptor,zn=(e,t,n,r)=>{for(var s=r>1?void 0:r?Dx(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Ox(t,n,s),s};let Qt=class extends xe{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.fixedSchemaSources=new Set,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await ee();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(s){console.error(`[table-button:${e.id}]`,s)}}}async connectedCallback(){super.connectedCallback();const e=await ee();this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=yd(e.registries.rowSources),e.events.on("app:ready",()=>{this.tableButtons=[...e.registries.tableButtons],this.fixedSchemaSources=yd(e.registries.rowSources)}),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ee();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ee(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=Lx(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}get schemaEditable(){const e=this.table?.source?.type;return!e||!this.fixedSchemaSources.has(e)}render(){return $`
      ${this.table?.readonly?ie:$`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      ${this.schemaEditable?$`<button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
            <span class="mi sm">view_column</span>
          </button>`:ie}
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>$`<button class=${e.danger?"danger":""} title=${e.tooltip??e.label} aria-label=${e.label} @click=${t=>this.runTableButton(e,t)}>
              ${e.icon?e.icon.trimStart().startsWith("<svg")?$`<span class="icon-svg">${nl(e.icon)}</span>`:$`<span class="mi sm">${e.icon}</span>`:$`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Qt.styles=[zt,Se`
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
    `];zn([St({type:String})],Qt.prototype,"tableId",2);zn([St({type:Boolean})],Qt.prototype,"active",2);zn([z()],Qt.prototype,"rowCount",2);zn([z()],Qt.prototype,"tableButtons",2);zn([z()],Qt.prototype,"table",2);zn([z()],Qt.prototype,"fixedSchemaSources",2);Qt=zn([Oe("panel-footer")],Qt);function Lx(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function yd(e){const t=new Set;for(const[n,r]of e)r.schemaEditable===!1&&t.add(n);return t}function fa(e){return e.title?.trim()?e.title.trim():e.name}function Px(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Mx(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const jt=new Map,xp=new Set;let vd=!1;async function Sp(){const e=await ee();await Promise.all([...jt.keys()].map(t=>ui(t,e)))}function Ql(e){const t=jt.get(e);return t?(hp(t),!0):(jx(e),!0)}async function jx(e){const t=await ee(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Cp(e){const t=await ee();await qx(e,t)}async function _p(){if(vd)return;vd=!0;const e=await ee(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){Y$(Kk(t,n));const s=()=>Mx(t);s(),window.addEventListener("resize",s);const i=document.querySelector("app-shell")?.shadowRoot,o=i?.querySelector("header"),a=i?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||a)){const c=new ResizeObserver(s);o&&c.observe(o),a&&c.observe(a)}}const r=(await e.store.tables.find()).filter(s=>s.workspaceId===e.workspaceId);r.sort(xi);for(const s of r)s.windowGeometry?.closed||$d(s,e);e.store.tables.subscribe(s=>{const i=s.filter(c=>c.workspaceId===e.workspaceId),o=new Map(i.map(c=>[c.id,c]));for(const[c,d]of jt){const p=o.get(c);if(!p||p.windowGeometry?.closed){jt.delete(c),po(c),xp.add(c);try{d.status!=="closed"&&d.close()}catch{}}}const a=i.filter(c=>!jt.has(c.id)&&!c.windowGeometry?.closed).sort(xi);for(const c of a)$d(c,e)}),Qk()}const Ba=720,qa=360;function $d(e,t){const n=`panel-${Ep(e.id)}`,r=Px(),s=P$(e.windowGeometry),i=un||s?.minimized===!0,o=()=>{const q=document.createElement("data-table");return q.tableId=e.id,q.style.height="100%",q},a=i?document.createElement("div"):o();let c=i?null:a,d=fa(e),p=-1,m=-1,w=null;const y=()=>{re.setHeaderTitle(d+(w?Vk(w.rows,w.total):cp(p,m)))},k=q=>{const X=q.detail;X.key===e.id&&(p=X.count,m=X.total,y())},x=q=>{const X=q.detail;X.tableId===e.id&&(w=X.done?null:{rows:X.rows,total:X.total},y())};document.addEventListener(Ci,k),document.addEventListener(Fa,x);const _=()=>{G.active=!1,c?.remove(),c=null},A=()=>{if(c)return;const q=document.getElementById(n)?.querySelector(".jsPanel-content");if(!q)return;q.replaceChildren();const X=o();q.appendChild(X),c=X,G.active=!0},D=document.createElement("panel-search");D.tableId=e.id;const G=document.createElement("panel-footer");G.tableId=e.id,G.active=!i;const M=async()=>{document.removeEventListener(Ci,k),document.removeEventListener(Fa,x);const q=jt.get(e.id)?.persistRect();jt.delete(e.id),po(e.id),!xp.delete(e.id)&&await ws(`table:${e.id}`,async()=>{const X=await t.store.tables.findOne(e.id);if(!X)return;const K=X.windowGeometry??{...q??{x:60,y:60,w:Ba,h:qa},z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...K,closed:!0},updatedAt:Date.now()})})},re=co({id:n,container:r,title:d,logo:od[ci(e)],color:id(e),content:a,footerToolbar:G,...s?{panelSize:{w:s.w,h:s.h},position:{x:s.x,y:s.y}}:{contentSize:{w:Ba,h:qa},position:zx()},minimizeTo:"#easydb-minimized-dock",viewport:uo(),boot:{minimized:i,maximized:!un&&s?.maximized===!0,smallified:!un&&s?.smallified===!0},onmoved:()=>void ui(e.id,t),onresized:()=>void ui(e.id,t),onfronted:()=>void Ux(e.id,t),onstatuschange:q=>{q.status==="minimized"?_():(q.status==="normalized"||q.status==="maximized")&&A(),ui(e.id,t)},onclosed:()=>void M()});jt.set(e.id,re),dp(e.id,()=>re.front(void 0,!1));const T=document.getElementById(n)?.querySelector(".jsPanel-controlbar");T&&T.prepend(D);let H=null;const J=document.createElement("button");J.type="button",J.title="Table info",J.setAttribute("aria-label","Table info"),J.className="eda-info-btn",J.textContent="ⓘ",J.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",J.addEventListener("click",q=>{q.stopPropagation(),H&&Nk(d,H.info??{},{source:H.source,origin:H.origin})}),T?.prepend(J);const de=q=>{H=q??null;const X=!!(q?.info||q?.source||q?.origin);J.style.display=X?"inline-flex":"none"};de(e);let ge=ci(e);t.store.tables.subscribe(q=>{const X=q.find(ae=>ae.id===e.id);if(!X)return;de(X),fa(X)!==d&&(d=fa(X),y());const K=ci(X);K!==ge&&(ge=K,re.setHeaderLogo(od[K]),re.setHeaderColor(id(X)))})}let Nx=0;function zx(){const e=Nx++;return{x:40+e%8*30,y:80+e%8*30}}function ui(e,t){return ws(`table:${e}`,()=>Fx(e,t))}async function Fx(e,t){const n=jt.get(e),r=n??document.getElementById(`panel-${Ep(e)}`);if(!r)return;const s=n?.persistFlags()??{minimized:!1,maximized:!1,smallified:!1},i=n?.persistRect()??{x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight};try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=un?a?.minimized??!1:s.minimized,d=un?a?.maximized??!1:s.maximized,p=un?a?.smallified??!1:s.smallified,m={...i,z:a?.z??0,minimized:c,maximized:d,smallified:p};await t.store.tables.patch(e,{windowGeometry:m,updatedAt:Date.now()})}catch{}}function Ux(e,t){return ws(`table:${e}`,()=>Bx(e,t))}async function Bx(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{...jt.get(e)?.persistRect()??{x:0,y:0,w:Ba,h:qa},z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:up()},updatedAt:Date.now()})}catch{}}async function qx(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),s=await r.find();await r.bulkRemove(s.map(i=>i.id))}await t.store.tables.remove(e)}function Ep(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Tp(e){if(!(e instanceof Node))return null;for(const[t,n]of jt)if(n.contains(e))return t;return null}const Jl=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:un,deleteTable:Cp,focusTableWindow:Ql,initWindowManager:_p,persistTablePanelGeometry:Sp,tableIdAtNode:Tp},Symbol.toStringTag,{value:"Module"})),Hx={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function Kx(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Cp(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const Vx=Object.freeze(Object.defineProperty({__proto__:null,init:Kx,meta:Hx},Symbol.toStringTag,{value:"Module"})),Wx={id:"table-copy",name:"Copy Table",type:"ui",version:"0.1.0",description:"Adds a Copy button to each table window: duplicate it as-is, or snapshot its Raw / Visible data into a new plain table. Works on projections too — that is how you freeze one.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/table-copy.ts"};function Gx(e){e.ui.registerTableButton({id:"table-copy:copy",label:"Copy",icon:"content_copy",tooltip:"Copy this table — as a duplicate, or as a snapshot of its data",onClick:(t,{tableId:n})=>void Qx(t,n)})}function Yx(e,t){const n=e.source?.type==="projection";if(t==="duplicate")return n?"a second projection over the same sources (still live)":e.source?"another connection to the same source (still live)":"a full copy of its columns and rows";const r=t==="raw"?"every column and row":"the visible columns and filtered rows";return e.source?`a plain table holding ${r} as they are right now`:`a plain table holding ${r}`}async function Qx(e,t){const n=await e.store.tables.findOne(t);if(!n)return;const r=await e.ui.dialogs.choice(`Copy "${n.name}" — what should the copy contain?`,["Duplicate","Raw Data","Visible Data"],"Copy table");if(!r)return;const s=r==="Duplicate"?"duplicate":r==="Raw Data"?"raw":"visible";try{const i=await Ip(e,n,s);e.ui.dialogs.toast(`Copied "${n.name}" to "${i.name}" — ${Yx(n,s)}.`,{kind:"success",title:"Copy table"})}catch(i){e.ui.dialogs.toast(`Could not copy "${n.name}": ${i?.message??String(i)}`,{kind:"error",title:"Copy table"})}}async function Ip(e,t,n){const r=e.workspaceId();if(!r)throw new Error("table-copy: no active workspace");const s=dn(await gl(e,r),`${t.name} copy`),i=Ce(),o=Date.now(),a={id:i,workspaceId:r,name:s,code:Me(s),view:t.view,...t.title?{title:`${t.title} copy`}:{},...t.labelColumn?{labelColumn:t.labelColumn}:{},...t.info?{info:t.info}:{},updatedAt:o};if(n==="duplicate"){const d={...a,columns:t.columns,...t.sortBy?{sortBy:t.sortBy}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.filters?{filters:t.filters}:{},...t.deletedColumns?{deletedColumns:t.deletedColumns}:{},...t.readonly?{readonly:!0}:{},...t.source?{source:t.source}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(d),t.source||await kd(e,t.id,i,p=>p),d}const c={...a,columns:Rf(t,n).map(Jx),...n==="raw"&&t.filters?{filters:t.filters}:{},...n==="raw"&&t.sortBy?{sortBy:t.sortBy}:{},...n==="raw"&&t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{},...t.origin?{origin:t.origin}:{}};return await e.store.tables.insert(c),await kd(e,t.id,i,d=>Of(t,d,n)),c}function Jx(e){if(!e.readonly)return e;const t={...e};return delete t.readonly,t}async function kd(e,t,n,r){const s=r(await e.store.rows(t).find());if(s.length===0)return;const i=Date.now();await e.store.rows(n).bulkInsert(s.map(o=>({id:Ce(),tableId:n,data:{...o.data},updatedAt:i})))}const Xx=Object.freeze(Object.defineProperty({__proto__:null,copyTable:Ip,init:Gx,meta:Wx},Symbol.toStringTag,{value:"Module"}));var Zx=Object.defineProperty,e1=Object.getOwnPropertyDescriptor,Xl=(e,t,n,r)=>{for(var s=r>1?void 0:r?e1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Zx(t,n,s),s};function Ap(e,t){return(Nt.instance??t1()).open(e,t)}function t1(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let Nt=class extends xe{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const s=this.rows[r],i=s.field.trim(),o=s.label.trim()||i;return{...n,field:i,label:o,hidden:s.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),Nt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Jt("column-names",this.dialogEl)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const s=n.field.trim().toLowerCase();if(s===""){e.add(r);return}(t.get(s)??t.set(s,[]).get(s)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,s)=>s===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return $`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
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
              ${this.rows.map((n,r)=>$`
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
    `}};Nt.instance=null;Nt.styles=[ft,Se`
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
    `];Xl([z()],Nt.prototype,"rows",2);Xl([z()],Nt.prototype,"subject",2);Nt=Xl([Oe("column-names-dialog")],Nt);const n1=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return Nt},editColumnNames:Ap},Symbol.toStringTag,{value:"Module"}));async function r1(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const s={api:e,fetchText:(T,H)=>cs(e,T,H??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},i=await n.list(s,{kind:"url",url:r});if(i.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=i.find(T=>T.name===t.name)??(i.length===1?i[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let a=[];const c=[];for await(const T of n.read(s,o))T.columns?.length&&(a=T.columns),c.push(...T.rows);const{columns:d,newFields:p}=zi(t.columns,a,t.deletedColumns??[]),m=t.origin?.pks??[],w=new Set(a.map(T=>T.field)),y=t.columns.map(T=>T.field).filter(T=>!w.has(T)&&!m.includes(T)),k=(t.deletedColumns??[]).filter(T=>w.has(T)),x=e.store.rows(t.id),_=await x.find(),{data:A,merged:D,strategy:G,droppedUserRows:M}=ef({oldRows:_.map(T=>({data:T.data})),freshRows:c,pks:m,userAddedFields:y,deletedRemoteFields:k}),re=Date.now();d.length>0&&await e.store.tables.patch(t.id,{columns:d,updatedAt:re}),await x.bulkRemove(_.map(T=>T.id));const W=A.map(T=>({id:Ce(),tableId:t.id,data:T,updatedAt:re}));return await x.bulkInsert(W),{rowCount:W.length,newFields:p,merged:D,strategy:G,droppedUserRows:M}}const xd="import:samples",Sd="import:samplesHidden";function s1(e,t,n){const r=new Set(n),s=[];for(const i of e)r.has(i.url)||s.push({...i,key:`b:${i.url}`,own:!1});for(const i of t)s.push({...i,key:`u:${i.id}`,own:!0});return s}function i1(e){const t=typeof e=="string"?Rp(e):e;if(!Array.isArray(t))return[];const n=[];for(const r of t){if(!r||typeof r!="object")continue;const{id:s,label:i,url:o,kind:a}=r;typeof s!="string"||!s||typeof i!="string"||!i.trim()||typeof o!="string"||!o.trim()||n.push({id:s,label:i.trim(),url:o.trim(),...a1(a)?{kind:a}:{}})}return n}function o1(e){const t=typeof e=="string"?Rp(e):e;return Array.isArray(t)?t.filter(n=>typeof n=="string"&&!!n.trim()).map(n=>n.trim()):[]}function a1(e){return e==="json"||e==="csv"||e==="sql"||e==="datasette"}function Rp(e){try{return JSON.parse(e)}catch{return null}}function l1(e,t){return[...e,t]}function c1(e,t){return e.filter(n=>n.id!==t)}function u1(e,t){return e.includes(t)?[...e]:[...e,t]}var d1=Object.defineProperty,h1=Object.getOwnPropertyDescriptor,Fe=(e,t,n,r)=>{for(var s=r>1?void 0:r?h1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&d1(t,n,s),s};const f1="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",p1="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",m1='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',g1=[{label:"Northwind — sample database (JSON dump)",url:f1,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:p1,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],b1={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function w1(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:m1,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>v1(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>y1(t,n)})}async function y1(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await Zl(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const s=await r1(e,n,r),i=[];s.newFields.length>0&&i.push(`${s.newFields.length} new column${s.newFields.length===1?"":"s"}`),!s.merged&&s.rowCount>0&&i.push("rows replaced (nothing to match them on)"),s.droppedUserRows>0&&i.push(`${s.droppedUserRows} row${s.droppedUserRows===1?"":"s"} changed at the source, so your own column values for ${s.droppedUserRows===1?"it":"them"} could not be carried over`),e.ui.dialogs.toast(`Refreshed "${n.name}" (${s.rowCount.toLocaleString()} rows)${i.length?` — ${i.join(", ")}`:""}.`,{kind:s.newFields.length>0||s.droppedUserRows>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function v1(e,t="auto"){const r=await(Ee.instance??E1()).open({presetKind:t,async listDatabases(x){const _=kt(x);return Ol(A=>e.backend.fetch(A),_.base)},async listTables(){const x=e.workspaceId();return(await e.store.tables.find()).filter(_=>_.workspaceId===x&&!_.source).map(_=>({id:_.id,name:_.name})).sort((_,A)=>_.name.localeCompare(A.name))}});if(!r)return;const{url:s,file:i,kind:o,dbChosen:a,editColumns:c,maxRows:d,mode:p,panel:m,target:w}=r,y=i?.name??s,k=c?(x,_)=>Ap(x,_):void 0;try{if(o==="sql"){await $1(e,{url:s,file:i,label:y,maxRows:d,mode:p,target:w,panel:m,editHook:k});return}const x=await Zl(o);if(x){const _=o==="json"?await k1(e,s,i,d,p):null;if(_?.isDump&&await e.ui.dialogs.confirm(`"${y}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await wl(e,_.text,y,{maxRows:d,editColumns:k,...i?{}:{originUrl:s}});return}const A=i?i.name:Ht(s),D=_?{kind:"text",text:_.text,name:A}:i?{kind:"file",file:i}:{kind:"url",url:s},G=await Fi(e,x,D,{mode:p,target:w,maxRows:d,panel:m,..._&&!i?{origin:{type:x.id,url:s}}:{},...k?{editColumns:M=>k(M)}:{}});x.ownToasts||Op(e,G,y);return}if(p==="reference"&&!i){o==="datasette"?await _1(e,s):await Dp(e,s,o);return}await Qi(e,s,{skipTablePicker:a,maxRows:d,editColumns:k})}catch(x){e.ui.dialogs.toast(`Could not import ${y}: ${x.message}`,{kind:"error",title:"Import"})}}async function $1(e,t){const{url:n,file:r,label:s,maxRows:i,mode:o,target:a,panel:c,editHook:d}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const p=r?await r.text():await cs(e,n,`Reading ${Ht(n)}…`,i!=null?{maxBytes:null}:{});if(Tl(p)){const y=await Il(e,p,{maxRows:i,target:a,...d?{editColumns:d}:{}});Al(e,y,s);return}const m=await Zl("sql");if(!m)throw new Error("The SQL importer is not installed.");const w=await Fi(e,m,{kind:"text",text:p,name:r?r.name:Ht(n)},{mode:o,target:a,maxRows:i,panel:c,...r?{}:{origin:{type:m.id,url:n}},...d?{editColumns:y=>d(y)}:{}});Op(e,w,s)}async function k1(e,t,n,r,s){if(s==="reference")return null;const i=n?await n.text():await cs(e,t,`Reading ${Ht(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:i,isDump:bl(JSON.parse(i))}}catch{return{text:i,isDump:!1}}}async function Zl(e){const{registries:t}=await ee();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function Op(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,a)=>o+a.rowCount,0),s=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${s} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const i=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${i?` — ${i}`:""}.`,{kind:"error",title:"Import"})}function x1(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(s=>s!=null&&typeof s=="object"&&!Array.isArray(s));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const s of["rows","records","data"])if(n(r[s]))return r[s];for(const s of Object.values(r))if(n(s))return s}return[]}function S1(e){const t=x1(e).slice(0,50),n=s=>Ni(s)?"array":typeof s=="number"?"number":typeof s=="boolean"?"boolean":"string",r=new Map;for(const s of t)for(const[i,o]of Object.entries(s))!r.has(i)&&o!=null?r.set(i,n(o)):r.has(i)||r.set(i,"string");return[...r.entries()].map(([s,i])=>({field:s,label:s,type:i}))}function C1(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function _1(e,t){const n=kt(t),s=await Nl(a=>e.backend.fetch(a),n,"Reference");if(s===null)return;if(s.length===0)throw new Error("No tables found to reference at that URL.");let i=0;const o=[];for(const a of s)try{await Dp(e,C1(n.base,a.db,a.table),"json",{nameHint:`${a.db}/${a.table}`,silent:!0}),i++}catch(c){o.push(`${a.table}: ${c.message}`)}e.ui.dialogs.toast(`Referenced ${i} table${i===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function Dp(e,t,n,r={}){const s=e.workspaceId();if(!s)throw new Error("No active workspace.");const i=r.nameHint??Ht(t),o=await cs(e,t,`Reading ${i}…`,{maxBytes:null}),a=n==="csv"?fr(o).columns:S1(o);if(a.length===0)throw new Error("No columns found in the referenced data.");const c=new Set((await e.store.tables.find()).filter(m=>m.workspaceId===s).map(m=>m.name.toLowerCase()));let d=i;for(let m=2;c.has(d.toLowerCase());m++)d=`${i}-${m}`;const p={id:Ce(),workspaceId:s,name:d,code:Me(d),columns:a,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(p),r.silent||e.ui.dialogs.toast(`Referenced ${d} — live, read-only.`,{kind:"success",title:"Reference"})}function E1(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function T1(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(i=>i.startsWith("_")),s=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":s?"datasette":"json"}catch{return"json"}}function Cd(e,t){if(t!=="datasette"||!e)return!1;try{const n=kt(e);return!n.db&&!n.table}catch{return!1}}function I1(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let Ee=class extends xe{constructor(){super(...arguments),this.url="",this.kind="auto",this.pickedSample="",this.userSamples=[],this.hiddenSamples=[],this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,s=this.editColumns&&this.mode==="copy",i=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},a=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:s,maxRows:r,mode:a,panel:i,target:o});return}const c=n==="datasette"&&!!this.selectedDb&&Cd(t,n),d=c?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:d,kind:n,dbChosen:c,editColumns:s,maxRows:r,mode:a,panel:i,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?I1(this.file.name):T1(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),Ee.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ee.instance===this&&(Ee.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await ee(),t=[...e.importers].sort((s,i)=>(s.order??Number.MAX_SAFE_INTEGER)-(i.order??Number.MAX_SAFE_INTEGER)).map(s=>({id:s.id,label:s.label,panel:s.panel,kernel:s.supports?.kernel})),n=t.some(s=>s.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const s of e.importers)for(const i of s.accept??[])r.add(i);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.pickedSample="",this.loadSamples(),this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}get sampleList(){return s1(g1,this.userSamples,this.hiddenSamples)}get pickedEntry(){return this.pickedSample?this.sampleList.find(e=>e.key===this.pickedSample):void 0}onPresetChange(e){this.pickedSample=e.target.value,this.resetDbList();const t=this.pickedEntry;t&&(this.url=t.url,this.kind=t.kind??"auto")}async loadSamples(){try{const e=await ee(),[t,n]=await Promise.all([e.store.settings.findOne(xd),e.store.settings.findOne(Sd)]);this.userSamples=i1(t?.value),this.hiddenSamples=o1(n?.value)}catch{this.userSamples=[],this.hiddenSamples=[]}}async writeSamples(){const e=await ee();await e.store.settings.upsert({name:xd,value:[...this.userSamples]}),await e.store.settings.upsert({name:Sd,value:[...this.hiddenSamples]})}async saveAsSample(){const e=this.url.trim(),t=ot.instance;if(!e||!t)return;const n=this.pickedEntry?.label??Ht(e),r=await t.prompt("Name this sample — it appears in the Sample source list.",n,"Add to samples");if(r===null||!r.trim())return;const s=this.kind==="auto"?void 0:this.kind,i={id:Ce(),label:r.trim(),url:e,...s?{kind:s}:{}};this.userSamples=l1(this.userSamples,i),this.pickedSample=`u:${i.id}`,await this.writeSamples()}async deletePickedSample(){const e=this.pickedEntry,t=ot.instance;!e||!t||!await t.confirm(`Delete the sample "${e.label}"? The URL stays in the box.`,"Delete sample")||(e.own?this.userSamples=c1(this.userSamples,e.key.slice(2)):this.hiddenSamples=u1(this.hiddenSamples,e.url),this.pickedSample="",await this.writeSamples())}async restoreSamples(){this.hiddenSamples=[],await this.writeSamples()}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.pickedSample="",this.resetDbList())}renderSamples(){const e=this.sampleList,t=this.pickedEntry,n=this.userSamples.length>0;return $`
      <label>
        Sample source
        <div class="with-btn">
          <select data-testid="import-sample" .value=${this.pickedSample} @change=${r=>this.onPresetChange(r)}>
            <option value="" ?selected=${this.pickedSample===""}>${e.length===0?"— no samples —":"— choose a sample —"}</option>
            ${n?$`
                  <optgroup label="Shipped">${e.filter(r=>!r.own).map(r=>$`<option value=${r.key} ?selected=${r.key===this.pickedSample}>${r.label}</option>`)}</optgroup>
                  <optgroup label="Yours">${e.filter(r=>r.own).map(r=>$`<option value=${r.key} ?selected=${r.key===this.pickedSample}>${r.label}</option>`)}</optgroup>
                `:e.map(r=>$`<option value=${r.key} ?selected=${r.key===this.pickedSample}>${r.label}</option>`)}
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
      ${this.hiddenSamples.length>0?$`<p class="hint">
            ${this.hiddenSamples.length} shipped sample${this.hiddenSamples.length===1?"":"s"} deleted.
            <button type="button" class="link" data-testid="sample-restore" @click=${()=>void this.restoreSamples()}>Restore samples</button>
          </p>`:ie}
    `}renderDbPicker(){return!this.listDatabases||!Cd(this.url.trim(),this.resolvedKind)?ie:$`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?$`
                  <option value="" ?selected=${this.selectedDb===""}>— all databases (choose tables next) —</option>
                  ${this.dbList.map(e=>$`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:$`<option value="">— not loaded —</option>`}
          </select>
          <button type="button" class="ghost db-load" ?disabled=${this.dbLoading} @click=${()=>void this.loadDatabases()}>
            ${this.dbLoading?"Loading…":this.dbList?"Refresh":"List databases"}
          </button>
        </div>
      </label>
      ${this.dbError?$`<p class="hint error">${this.dbError}</p>`:ie}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return ie;const e=this.targetKind!=="new";return $`
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
          ${e?$`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?$`<option value="">— no tables yet —</option>`:this.tables.map(t=>$`<option value=${t.id} ?selected=${t.id===this.targetTableId}>${t.name}</option>`)}
              </select>`:ie}
        </div>
      </label>
      ${e?$`<p class="hint">The table keeps its own columns. Values map onto them the way the format requires — a CSV by column position, so its header names need not match.</p>`:ie}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===ie?ie:$`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
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
                ${this.formats.map(e=>$`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
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
              ${this.file?$`<p class="hint">Importing <strong>${this.file.name}</strong> as ${this.resolvedKind.toUpperCase()}.</p>`:ie}

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
              ${this.file?$`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:ie} ${this.renderTarget()}

              <label class="check">
                <input type="checkbox" ?disabled=${this.mode==="reference"} .checked=${this.editColumns} @change=${e=>this.editColumns=e.target.checked} />
                Edit columns before import (rename / hide / fix duplicate names)
              </label>
              ${this.mode==="reference"?$`<p class="hint">A Reference keeps the source's own schema, so there is nothing to edit.</p>`:ie}

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
    `}};Ee.instance=null;Ee.styles=[ft,Se`
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
    `];Fe([z()],Ee.prototype,"url",2);Fe([z()],Ee.prototype,"kind",2);Fe([z()],Ee.prototype,"pickedSample",2);Fe([z()],Ee.prototype,"userSamples",2);Fe([z()],Ee.prototype,"hiddenSamples",2);Fe([z()],Ee.prototype,"dbList",2);Fe([z()],Ee.prototype,"dbLoading",2);Fe([z()],Ee.prototype,"dbError",2);Fe([z()],Ee.prototype,"selectedDb",2);Fe([z()],Ee.prototype,"editColumns",2);Fe([z()],Ee.prototype,"file",2);Fe([z()],Ee.prototype,"maxRowsInput",2);Fe([z()],Ee.prototype,"mode",2);Fe([z()],Ee.prototype,"targetKind",2);Fe([z()],Ee.prototype,"targetTableId",2);Fe([z()],Ee.prototype,"tables",2);Fe([z()],Ee.prototype,"formats",2);Fe([z()],Ee.prototype,"acceptAttr",2);Ee=Fe([Oe("import-dialog")],Ee);const A1=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Ee},init:w1,meta:b1},Symbol.toStringTag,{value:"Module"})),R1={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},O1=6e4;let _d=null,Ha=!1;const pa=new Map;function D1(e){_d===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(_d=setInterval(()=>{Lp(e)},O1)))}async function Lp(e){if(Ha)return;const t=e.workspaceId();if(!t)return;const n=await Ff(e);if(n)try{await L1(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function L1(e,t,n){const r=await ro(e),s=await Uf(e,n),i=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(i.status===404){await Ed(e,t,n,r,null);return}if(!i.ok)return;const o=so(i.headers.get("ETag")),a=await i.text();if(Zu(r)===Zu(a)){o&&o!==s&&await Mn(e,n,o);return}if(o&&o===s){await Ed(e,t,n,r,s);return}if(!(o&&pa.get(n)===o)){Ha=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const d=JSON.parse(a),p=await Bf(e,n,d);o&&await Mn(e,n,o),pa.delete(n),e.ui.dialogs.toast(`Pulled ${p} table${p===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&pa.set(n,o)}finally{Ha=!1}}}async function Ed(e,t,n,r,s){const i={"Content-Type":"application/json"};s&&(i["If-Match"]=`"${s}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:i,body:r});if(o.ok){const a=so(o.headers.get("ETag"));a&&await Mn(e,n,a);return}if(o.status===412){const a=await o.json().catch(()=>({}));a.currentEtag&&await Mn(e,n,a.currentEtag)}}const Pp=Object.freeze(Object.defineProperty({__proto__:null,load:D1,meta:R1,tick:Lp},Symbol.toStringTag,{value:"Module"}));var P1=Object.defineProperty,M1=Object.getOwnPropertyDescriptor,gt=(e,t,n,r)=>{for(var s=r>1?void 0:r?M1(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&P1(t,n,s),s};let rt=class extends xe{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.rowColl=null,this.loadGeneration=0,this.searchQuery="",this.globalQuery="",this.cellRenderers=new Map,this.truncated=!1,this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),s=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const i=this.allRows.find(c=>c.id===n);if(!i)return;let o;if(s==="boolean")o=t.checked;else if(s==="number"){const c=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(c)?t.value:c}else o=t.value;await(await ee()).store.rows(this.instance.tableId).patch(n,{data:{...i.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");!n||r==null||await this.addPill(n,r)}}get searchIsActive(){return this.searchQuery.trim()!==""||this.globalQuery.trim()!==""}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){this.mountCellRenderers(),e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}mountCellRenderers(){const e=this.renderRoot?.querySelectorAll?.(`.${If}:not([data-eda-mounted])`);if(!e?.length)return;const t=new Map(this.rows.map(s=>[s.id,s])),n=new Map(this.tableColumns.map(s=>[s.field,s])),r=this.instance?.tokenScripts??{};for(const s of e){const i=s;i.dataset.edaMounted="1";const o=t.get(i.dataset.edaRow??""),a=i.dataset.edaField??"",c=i.dataset.edaTag??"",d=n.get(a);if(!o||!d||!c)continue;const p=document.createElement(c);p.value=g0(o,a,r[i.dataset.edaToken??""])??"",p.column=d,p.row=o.data,p.readonly=!0,p.sourceReadonly=!0,i.replaceChildren(p)}}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ee(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers)),this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>r.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const i=s.find(a=>a.id===this.viewInstanceId);if(!i)return;if(i.tableId!==this.instance?.tableId){this.instance=i,this.reload();return}const o=Td(this.instance);this.instance=i,Td(i)!==o?this.loadRows():this.recompute()}),this.rowColl=e.store.rows(t.tableId),this.rowsUnsub=this.rowColl.watch?this.rowColl.watch(()=>void this.loadRows()):this.rowColl.subscribe(()=>void this.loadRows()),await this.loadRows(),this.loaded=!0}async loadRows(){const e=this.rowColl,t=this.instance;if(!e||!t)return;const n=++this.loadGeneration,r=new Set(this.tableColumns.filter(d=>d.script).map(d=>d.field)),s=Object.fromEntries(Object.entries(t.filters??{}).filter(([d])=>!r.has(d))),o=(t.sortBy?.length?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc!==!1}]:[]).filter(d=>!r.has(d.field)),a={columns:this.tableColumns,...Object.keys(s).length>0?{filters:s}:{},...o.length>0?{sort:o}:{}},c=await Yl(e,a,Jr);n===this.loadGeneration&&(this.truncated=c.truncated===!0,this.allRows=c.rows,this.recompute())}recompute(){if(!this.instance)return;const e=Qu(this.allRows,this.tableColumns),t=Da(e,this.instance,this.tableColumns);let n=t;const r=this.searchQuery.trim(),s=this.globalQuery.trim();r&&(n=is(n,r,this.tableColumns)),s&&(n=is(n,s,this.tableColumns));const i=this.instance.limit??0;i>0&&n.length>i&&(n=n.slice(0,i)),this.rows=n,this.templateOn&&lp(this.viewInstanceId,n.length,t.length)}async addPill(e,t){if(!this.instance)return;const n=k0(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{},[e]:n};await(await ee()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}rowsFacetedFor(e){if(!this.instance)return[];const t={...this.instance.pillFilters??{}};return delete t[e],Da(Qu(this.allRows,this.tableColumns),{...this.instance,pillFilters:t},this.tableColumns)}async setPillFilter(e,t){if(!this.instance)return;const n={...this.instance.pillFilters??{}};t.trim()===""?delete n[e]:n[e]=t,await(await ee()).store.viewInstances.patch(this.instance.id,{pillFilters:n,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:n},this.recompute()}async cyclePill(e,t){await this.setPillFilter(e,C0(this.instance?.pillFilters?.[e],t))}async openPillValues(e,t){const n=ut.instance;if(!n)return;const r=this.rowsFacetedFor(e),s=this.tableColumns.find(c=>c.field===e)?.type;if(!$p(r,e,{type:s}))return;const{values:i,blanks:o}=kp(r,e,{type:s});if(i.length===0)return;const a=await n.open(t.getBoundingClientRect(),i,this.instance?.pillFilters?.[e]??"",o,c=>void this.setPillFilter(e,c),{exact:!0});a!==null&&(typeof a=="object"&&"clear"in a?await this.setPillFilter(e,""):typeof a=="string"&&await this.setPillFilter(e,a))}async removePill(e,t){if(!this.instance)return;const n=x0(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await ee()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await ee()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await ee()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ee()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Ga(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Ga(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await ee();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(i=>i!==e):[...t,e];if(r.length===0)return;await(await ee()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?$`<div class="vw-empty">No rows.</div>`:$`
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
    `}renderTemplated(){const e=this.template;if(!e)return $`<div class="vw-empty">This view's template is missing.</div>`;if(E0(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(c=>[c.field,c])),r=this.instance?.readonly===!0,s=this.instance?.tokenScripts??{},i=this.instance?.tokenRaw??{},o=this.rows.map(c=>y0(e.rowHtml,c,t,{columns:n,readonly:r,scripts:s,renderers:this.cellRenderers,raw:i})).join(""),a=(e.headerHtml??"")+o+(e.footerHtml??"");return $`<div class="vw-root">${Xn(a)}</div>`}return $`<div class="vw-root">
      ${e.headerHtml?.trim()?$`<div class="vw-html">${Xn(e.headerHtml)}</div>`:ie} ${this.renderTable()}
      ${e.footerHtml?.trim()?$`<div class="vw-html">${Xn(e.footerHtml)}</div>`:ie}
    </div>`}renderSortBar(){if(!this.instance)return ie;const e=this.renderPillChips(),t=Array.isArray(e)&&e.length>0;if(!this.templateOn)return t?$`<div class="vw-sortbar">${e}</div>`:ie;const n=this.tableColumns.filter(i=>i.sortable!==!1),r=this.instance.sortColumn??"",s=this.instance.sortAsc??!0;return $`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select aria-label="Sort by" @change=${i=>void this.setSortColumn(i.target.value)}>
        <option value="" ?selected=${!r}>— unsorted —</option>
        ${n.map(i=>$`<option value=${i.field} ?selected=${r===i.field}>${i.label||i.field}</option>`)}
      </select>
      <button aria-label="Toggle sort direction" title=${s?"Ascending (click for descending)":"Descending (click for ascending)"} ?disabled=${!r} @click=${()=>void this.toggleSortDir()}>
        <span class="mi">${s?"arrow_upward":"arrow_downward"}</span>
      </button>
      ${e}
    </div>`}get chipFields(){if(!this.template||!this.templateOn)return[];const e=this.instance?.mapping??{},t=u0(this.template.headerHtml??"",this.template.rowHtml??"",this.template.footerHtml??"").map(n=>e[n]).filter(n=>!!n);return[...new Set(t)]}renderPillChips(){const e=this.instance?.pillFilters??{},t=this.chipFields;if(Object.keys(e).length===0&&t.length===0)return ie;const n=[],r=new Set;for(const i of[...new Set([...t,...Object.keys(e)])]){const o=e[i];if(o)for(const a of Nn(o))a.term&&(r.add(i),n.push({field:i,value:a.term,state:a.negate?"not":"on"}))}return[...t.filter(i=>!r.has(i)).map(i=>$`<span class="eda-pill-chip off">
            <button type="button" class="eda-pill-chip-value" title=${`Filter this view by ${i}`} @click=${o=>void this.openPillValues(i,o.currentTarget)}>
              ${i} ▾
            </button>
          </span>`),...n.map(i=>$`<span class=${`eda-pill-chip${i.state==="not"?" not":""}`}>
            <button
              type="button"
              class="eda-pill-chip-field"
              title=${i.state==="not"?`Excluding this value — click to stop filtering on ${i.field}`:"Only this value — click to EXCLUDE it instead"}
              @click=${()=>void this.cyclePill(i.field,i.value)}
            >
              ${i.field}${i.state==="not"?" ≠":" ="}
            </button>
            <button type="button" class="eda-pill-chip-value" title=${`Other values of ${i.field}`} @click=${o=>void this.openPillValues(i.field,o.currentTarget)}>
              ${i.value}
            </button>
            <button type="button" class="eda-pill-chip-remove" aria-label=${`Remove filter ${i.field}: ${i.value}`} title="Remove this filter" @click=${()=>void this.removePill(i.field,i.value)}>
              ×
            </button>
          </span>`)]}renderFooter(){if(!this.instance)return ie;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return $`<div class="vw-footer">
      ${!e&&this.showColsMenu?$`<div class="cols-menu">
            ${this.tableColumns.map(n=>$`<label><input type="checkbox" .checked=${t.has(n.field)} @change=${()=>void this.toggleColumn(n.field)} />${n.label||n.field}</label>`)}
          </div>`:ie}
      ${e?ie:$`<button title="Show / hide columns" aria-label="Columns" @click=${()=>this.showColsMenu=!this.showColsMenu}>
            <span class="mi">view_column</span>
          </button>`}
      <button aria-label="Edit view" title="Edit this view (rename, re-map columns)" @click=${()=>this.editView()}>
        <span class="mi">edit</span>
      </button>
      ${this.template?$`<button class="edit-template" aria-label="Edit template" title=${`Edit the "${this.template.name}" template`} @click=${()=>this.editTemplate()}>
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
    </div>`}render(){if(!this.loaded)return $`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return $`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?$`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>${this.renderTemplated()}</div>`:$`<div class="vw-body grid">
          <data-table .tableId=${this.instance?.tableId??""} .viewInstanceId=${this.viewInstanceId}></data-table>
        </div>`,n=e&&this.truncated?yp({shown:this.rows.length,total:this.allRows.length,searching:this.searchIsActive,searched:Jr}):null;return $`${this.renderSortBar()}${n?$`<div class="vw-note" role="status">${n}</div>`:ie}${t}${this.renderFooter()}`}};rt.styles=[zt,Se`
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
    `];gt([St({type:String})],rt.prototype,"viewInstanceId",2);gt([z()],rt.prototype,"loaded",2);gt([z()],rt.prototype,"error",2);gt([z()],rt.prototype,"instance",2);gt([z()],rt.prototype,"template",2);gt([z()],rt.prototype,"columns",2);gt([z()],rt.prototype,"tableColumns",2);gt([z()],rt.prototype,"rows",2);gt([z()],rt.prototype,"showColsMenu",2);gt([z()],rt.prototype,"searchQuery",2);gt([z()],rt.prototype,"globalQuery",2);gt([z()],rt.prototype,"cellRenderers",2);gt([z()],rt.prototype,"truncated",2);rt=gt([Oe("view-window")],rt);function Td(e){if(!e)return"";const t=e.sortBy?.length?e.sortBy.map(n=>`${n.field}:${n.asc!==!1}`).join(","):`${e.sortColumn??""}:${e.sortAsc!==!1}`;return`${JSON.stringify(e.filters??{})}|${t}`}const Mp=480,jp=520,ct=new Map;async function j1(){await Promise.all([...ct.keys()].map(e=>di(e)))}function Np(e){const t=ct.get(e);return t?(hp(t.panel),!0):!1}const Ka=new Set;async function ec(e){if(Np(e))return;Ka.add(e);const t=await ee(),n=await t.store.viewInstances.findOne(e);if(!n){Ka.delete(e);return}if(n.open){Wa(n,t),zp(e);return}await t.store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()})}function zp(e){Ka.delete(e)&&Np(e)}let Id=!1;function Va(e){e.panel.setHeaderTitle(e.name+cp(e.count,e.total))}function N1(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function z1(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function F1(e){return`view-panel-${z1(e)}`}async function U1(){if(Id)return;Id=!0;const e=await ee(),t=r=>r.filter(s=>s.workspaceId===e.workspaceId&&s.open),n=t(await e.store.viewInstances.find()).sort(xi);for(const r of n)Wa(r,e);e.store.viewInstances.subscribe(r=>{const s=new Map(t(r).map(o=>[o.id,o]));for(const o of[...ct.keys()])s.has(o)||q1(o);const i=[...s.values()].filter(o=>!ct.has(o.id)).sort(xi);for(const o of i)Wa(o,e)}),e.store.tables.subscribe(r=>void B1(e,r)),document.addEventListener(Ci,r=>{const s=r.detail,i=ct.get(s.key);i&&i.el&&(i.count=s.count,i.total=s.total,Va(i))}),document.addEventListener("easydb:reload-view",r=>{const s=r.detail?.instanceId;if(!s)return;const i=ct.get(s);i&&(async()=>{const o=await e.store.viewInstances.findOne(s);o&&(i.name=o.name,Va(i)),i.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of ct.values())r?.reload()})}async function B1(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),s=new Map;for(const o of n)s.has(o.name)||s.set(o.name,o);const i=await e.store.viewInstances.find();for(const o of i){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const a=s.get(o.tableName);a&&await e.store.viewInstances.patch(o.id,{tableId:a.id,updatedAt:Date.now()})}}function Wa(e,t){if(ct.has(e.id))return;const n=F1(e.id),r=e.windowGeometry,s=r?.minimized===!0,i=()=>{const y=document.createElement("view-window");return y.viewInstanceId=e.id,y.style.height="100%",y},o=s?document.createElement("div"):i();let a;const c=()=>{a&&(a.el?.remove(),a.el=null,a.count=-1,a.total=-1,Va(a))},d=()=>{if(!a||a.el)return;const y=document.getElementById(n)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const k=i();y.appendChild(k),a.el=k},p=co({id:n,container:N1(),title:e.name,logo:Pk,color:"#0891b2",content:o,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:Mp,h:jp},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:uo(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0,smallified:r?.smallified===!0},onmoved:()=>void di(e.id),onresized:()=>void di(e.id),onfronted:()=>void H1(e.id,t),onstatuschange:y=>{y.status==="minimized"?c():(y.status==="normalized"||y.status==="maximized")&&d(),di(e.id)},onclosed:()=>{ct.delete(e.id),po(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});a={panel:p,el:s?null:o,name:e.name,count:-1,total:-1},ct.set(e.id,a),dp(e.id,()=>p.front(void 0,!1));const m=document.getElementById(n),w=document.createElement("panel-search");w.tableId=e.id,m?.querySelector(".jsPanel-controlbar")?.append(w),zp(e.id)}function q1(e){const t=ct.get(e);if(t){ct.delete(e),po(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function H1(e,t){return ws(`view:${e}`,()=>K1(e,t))}async function K1(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{...ct.get(e)?.panel.persistRect()??{x:0,y:0,w:Mp,h:jp},z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:up()},updatedAt:Date.now()})}catch{}}function di(e){return ws(`view:${e}`,()=>V1(e))}async function V1(e){const t=ct.get(e);if(!t)return;const{minimized:n,maximized:r,smallified:s}=t.panel.persistFlags(),i=t.panel.persistRect();try{const o=await ee(),a=(await o.store.viewInstances.findOne(e))?.windowGeometry,c={...i,z:a?.z??0,minimized:n,maximized:r,smallified:s};await o.store.viewInstances.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}const Fp="scripts:samples";function W1(e){return e==="validate"?eS:Z1}function G1(e){const t=typeof e=="string"?Y1(e):e;if(!Array.isArray(t))return[];const n=[];for(const r of t){if(!r||typeof r!="object")continue;const{id:s,kind:i,label:o,source:a}=r;typeof s!="string"||!s||typeof o!="string"||!o.trim()||typeof a!="string"||!a.trim()||n.push({id:s,kind:i==="validate"?"validate":"render",label:o.trim(),source:a})}return n}function Y1(e){try{return JSON.parse(e)}catch{return null}}function Q1(e,t){return e.filter(n=>n.kind===t)}function J1(e,t){return[...e,t]}function X1(e,t){return e.filter(n=>n.id!==t)}const Z1=[{label:"Join two fields into one",source:`function render(row) {
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
`}],eS=[{label:"Required — reject an empty cell",source:`function validate(value, row) {
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
`}];var tS=Object.defineProperty,nS=Object.getOwnPropertyDescriptor,Fn=(e,t,n,r)=>{for(var s=r>1?void 0:r?nS(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&tS(t,n,s),s};const rS=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;function sS(e){return`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return what this token should show; HTML is rendered, not escaped.
  return ${e?`row.${e}`:"row.name"} ?? '';
}
`}const iS=`function validate(value, row) {
  // \`value\` is what the user just typed; \`row\` is the rest of the row.
  // THROW to reject the edit — the message is what they will see.
  if (false) throw new Error('Explain what is wrong here.');
}
`;function oS(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function aS(){try{const t=await(await ee()).store.settings.findOne(Fp);return G1(t?.value)}catch{return[]}}async function Ad(e){await(await ee()).store.settings.upsert({name:Fp,value:[...e]})}let nt=class extends xe{constructor(){super(...arguments),this.text="",this.columnLabel="",this.kind="render",this.undoText=null,this.userSamples=[],this.pickedUserId=null,this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),nt.instance=this}disconnectedCallback(){super.disconnectedCallback(),nt.instance===this&&(nt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Jt("script-editor",this.dialogEl)}async open(e,t,n="render",r){return this.resolver&&(this.resolver(null),this.resolver=null),this.kind=n,this.undoText=null,this.pickedUserId=null,this.text=e&&e.trim()?e:this.blankFor(n,r?.field??""),this.columnLabel=t??"",this.userSamples=await aS(),await this.updateComplete,this.dialogEl?.showModal(),new Promise(s=>{this.resolver=s})}blankFor(e,t){return e==="validate"?iS:e==="token"?sS(t):rS}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}get sampleKind(){return this.kind==="validate"?"validate":"render"}get samples(){return W1(this.sampleKind)}get mySamples(){return Q1(this.userSamples,this.sampleKind)}applySample(e){const t=e.target,n=t.value;t.value="";const r=n.startsWith("u:")?this.mySamples.find(s=>s.id===n.slice(2)):this.samples[Number(n.slice(2))];r&&(this.undoText=this.text,this.text=r.source,this.pickedUserId=n.startsWith("u:")?n.slice(2):null)}undoSample(){this.undoText!==null&&(this.text=this.undoText,this.undoText=null)}onInput(e){this.text=e.target.value,this.undoText=null}async saveAsSample(){if(!this.text.trim())return;const e=ot.instance;if(!e)return;const t=await e.prompt("Name this sample — it appears in the dropdown for every script of this kind.","","Add to samples");if(t===null||!t.trim())return;const n={id:oS(),kind:this.sampleKind,label:t.trim(),source:this.text};this.userSamples=J1(this.userSamples,n),this.pickedUserId=n.id,await Ad(this.userSamples)}async deletePickedSample(){const e=this.pickedUserId,t=e?this.mySamples.find(s=>s.id===e):void 0,n=ot.instance;!e||!t||!n||!await n.confirm(`Delete the sample "${t.label}"? The script in the editor stays as it is.`,"Delete sample")||(this.userSamples=X1(this.userSamples,e),this.pickedUserId=null,await Ad(this.userSamples))}renderHints(){return this.kind==="token"?$`
        <p class="hint">
          Define <code>function render(row) { … }</code>. <code>row</code> is the full row object. What you return is what this token shows — the stored cell is never changed. The result goes into the
          template as HTML, so <code>markdownToHtml(row.body)</code> shows formatted text and <code>new Date(row.date).toLocaleString()</code> shows a local date.
        </p>
        <p class="hint">
          Only a plain <code>$TOKEN</code> runs the script. <code>$input.TOKEN</code> and <code>$filter.TOKEN</code> keep reading the mapped column, because one writes the cell back and the other must
          match the stored value. A scripted token needs no column at all.
        </p>
      `:this.kind==="validate"?$`
        <p class="hint">
          Define <code>function validate(value, row) { … }</code>. It runs when someone edits a cell in this column by hand, after the Max / Unique / Not-null boxes have had their say.
          <strong>Throw to reject the edit</strong> — your message is what they are shown, and the cell snaps back. Return without throwing to accept it; the return value is ignored.
        </p>
        <p class="hint">
          <code>value</code> is the proposed new value, <code>row</code> the rest of the row, so a rule can compare columns. Imports, refreshes and sync are not edits and never run it.
        </p>
      `:$`
      <p class="hint">
        Define <code>function render(row) { … }</code>. <code>row</code> is the full row object. What you return is passed to the column's renderer, so the cell shows a computed value instead of the
        stored one — and the cell becomes read-only. A script that throws shows a small error chip in the cell.
      </p>
      <p class="hint">
        Besides the JS globals you can call <code>markdownToHtml(text)</code> (also <code>easydb.markdownToHtml</code>) — set this column's renderer to <code>html</code> so the result shows as
        formatted text rather than as its own source. A sample that needs a particular renderer says so in its first line; the dropdown can't set it for you.
      </p>
    `}render(){const e=this.kind==="validate",t=this.mySamples,n=this.pickedUserId?t.find(r=>r.id===this.pickedUserId):void 0;return $`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
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
                ${t.length?$`<optgroup label="Your samples">${t.map(r=>$`<option value=${`u:${r.id}`}>${r.label}</option>`)}</optgroup>`:null}
                <optgroup label="Built in">${this.samples.map((r,s)=>$`<option value=${`b:${s}`}>${r.label}</option>`)}</optgroup>
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
              ${this.undoText!==null?$`<button type="button" class="link" @click=${()=>this.undoSample()}>Undo</button>`:null}
            </div>
            <textarea spellcheck="false" autofocus .value=${this.text} @input=${r=>this.onInput(r)}></textarea>
          </div>
        </form>
      </dialog>
    `}};nt.instance=null;nt.styles=[ft,Se`
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
    `];Fn([z()],nt.prototype,"text",2);Fn([z()],nt.prototype,"columnLabel",2);Fn([z()],nt.prototype,"kind",2);Fn([z()],nt.prototype,"undoText",2);Fn([z()],nt.prototype,"userSamples",2);Fn([z()],nt.prototype,"pickedUserId",2);nt=Fn([Oe("script-editor-dialog")],nt);var lS=Object.defineProperty,cS=Object.getOwnPropertyDescriptor,mr=(e,t,n,r)=>{for(var s=r>1?void 0:r?cS(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&lS(t,n,s),s};function Ga(e,t){(vt.instance??uS()).open(e,t)}function uS(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function ma(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let vt=class extends xe{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),vt.instance=this}disconnectedCallback(){super.disconnectedCallback(),vt.instance===this&&(vt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Jt("views",this.dialogEl)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ee(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){this.close(),await ec(e)}async editInstance(e){const n=await(await ee()).store.viewTemplates.findOne(e.templateId),r=n?Wu(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},tokenScripts:{...e.tokenScripts??{}},tokenRaw:{...e.tokenRaw??{}},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await ee()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await ee(),n=this.columns.filter(s=>!s.hidden).map(s=>s.field),r={...e,id:ma(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await ee();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ee(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(s=>s.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:ma(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Wu(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,tokenScripts:{},tokenRaw:{},limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(m=>m.field.toLowerCase()===t||(m.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const m=Number(r[1])-1;return this.columns.filter(y=>y.type==="boolean")[m]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(m=>m.type==="boolean");const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(m=>m.type==="date"||m.type==="datetime");const a=["url","link","href","website","homepage","uri","site","web"];if(a.includes(t)){const m=this.firstColumn(w=>w.renderer==="link");return m||this.firstColumn(w=>{const y=w.field.toLowerCase(),k=(w.label??"").toLowerCase();return a.some(x=>y.includes(x)||k.includes(x))})}const c=m=>w=>{const y=w.field.toLowerCase(),k=(w.label??"").toLowerCase();return m.some(x=>y.includes(x)||k.includes(x))},d=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(d.includes(t)){const m=this.firstColumn(y=>y.renderer==="image");if(m)return m;const w=this.firstColumn(c(d));return w||this.firstColumn(c(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(c(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(c(["phone","tel","mobile","cell"]));const p=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(p.includes(t)){const m=this.firstColumn(x=>{if(x.type!=="string")return!1;const _=x.field.toLowerCase(),A=(x.label??"").toLowerCase();return p.some(D=>_.includes(D)||A.includes(D))});if(m)return m;const w=this.columns.filter(x=>x.type==="string"),y=w[0];if(!y)return"";let k=y;for(const x of w)(x.max??0)>(k.max??0)&&(k=x);return k.field}return""}draftScripts(e){const t=Object.entries(e.tokenScripts).filter(([,n])=>n.trim());return t.length?Object.fromEntries(t):void 0}draftRaw(e){const t=Object.entries(e.tokenRaw).filter(([,n])=>n===!0);return t.length?Object.fromEntries(t):void 0}toggleTokenRaw(e){const t=this.iDraft;if(!t)return;const n={...t.tokenRaw};n[e]?delete n[e]:n[e]=!0,this.iDraft={...t,tokenRaw:n}}async editTokenScript(e){const t=nt.instance,n=this.iDraft;if(!t||!n)return;const r=await t.open(n.tokenScripts[e]??"",`$${e}`,"token",{field:n.mapping[e]??""});if(r===null)return;const s={...n.tokenScripts};r.trim()?s[e]=r:delete s[e],this.iDraft={...n,tokenScripts:s}}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ee(),n=this.draftScripts(e),r=this.draftRaw(e);if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},tokenScripts:n,tokenRaw:r,limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const s=this.columns.filter(o=>!o.hidden).map(o=>o.field),i={id:ma(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:s,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{},...n?{tokenScripts:n}:{},...r?{tokenRaw:r}:{}};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return $`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>$`<li>
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
          ${this.templates.map(e=>$`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?$`<span class="badge">built-in</span>`:ie}
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
        <textarea .value=${e.rowHtml} @input=${t("rowHtml")} placeholder="&lt;div&gt;$TITLE&lt;/div&gt;"></textarea>
      </label>
      <label class="field">
        Footer HTML
        <textarea .value=${e.footerHtml} @input=${t("footerHtml")}></textarea>
      </label>
    `}renderInstance(){const e=this.iDraft;return $`
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
        ${e.tokens.length===0?$`<p class="hint">This template has no <code>$TOKEN</code> placeholders — it will show the read-only table with your current sort, filter and visible columns.</p>`:e.tokens.map(t=>$`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${n=>this.iDraft={...e,mapping:{...e.mapping,[t]:n.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(n=>$`<option value=${n.field} ?selected=${e.mapping[t]===n.field}>${n.label||n.field}</option>`)}
                  </select>
                  <button
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
                  </button>
                </div>`)}
      </div>
      <p class="hint">
        🎨 shows the token through the column's own cell renderer, so the view looks like the table; 🔤 shows the plain value instead (the same as writing <code>$raw.TOKEN</code>). A token inside a
        tag, as in <code>&lt;img src="$IMAGE"&gt;</code>, always stays plain.
      </p>
      <p class="hint">
        <code>ƒ(x)</code> gives a token a <code>render(row)</code> script, so the view can show a formatted value — a local date, markdown as HTML — without changing the stored cell. It applies to
        <code>$TOKEN</code> only, not to <code>$input.</code> or <code>$filter.</code>.
      </p>
      <p class="hint">
        ${e.id?$`Editing name and column mapping. The snapshotted sort, filters and visible columns are kept.`:$`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?$`<button type="button" class="ghost" @click=${()=>this.mode="list"}>Back</button> <button type="submit" class="primary">Save</button>`:this.mode==="instance"?$`<button type="button" class="ghost" @click=${()=>this.mode="list"}>Back</button> <button type="submit" class="primary">${this.iDraft?.id?"Save":"Create view"}</button>`:$`<button type="submit" class="ghost">Close</button>`;return $`
      <dialog @cancel=${this.close} @keydown=${pt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${e}</h2>
            <div class="header-actions">${t}</div>
          </div>
          <div class="dialog-body">${this.mode==="template"?this.renderTemplate():this.mode==="instance"?this.renderInstance():this.renderList()}</div>
        </form>
      </dialog>
    `}};vt.instance=null;vt.styles=[ft,Se`
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
    `];mr([z()],vt.prototype,"mode",2);mr([z()],vt.prototype,"instances",2);mr([z()],vt.prototype,"templates",2);mr([z()],vt.prototype,"tDraft",2);mr([z()],vt.prototype,"iDraft",2);vt=mr([Oe("views-dialog")],vt);const dS={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},hS="grid_view",fS={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},pS={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},mS={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},gS={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},bS=[fS,pS,mS,gS];function wS(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:hS,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>Ga(n)})}async function yS(e){await $S(e)}function vS(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function $S(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of bS)await kS(e,t,r,n)}async function kS(e,t,n,r){const s=`views:seeded:${n.slug}:${t}`,i=`views:sig:${n.slug}:${t}`,o=vS(n),a=r.find(d=>d.builtin&&d.name===n.name);if(a){(await e.store.settings.findOne(i))?.value!==o&&(await e.store.viewTemplates.patch(a.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:o})),await e.store.settings.upsert({name:s,value:!0});return}(await e.store.settings.findOne(s))?.value||(await e.store.viewTemplates.insert({id:xS(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:!0}),await e.store.settings.upsert({name:i,value:o}))}function xS(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const SS=Object.freeze(Object.defineProperty({__proto__:null,init:wS,load:yS,meta:dS},Symbol.toStringTag,{value:"Module"})),CS={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function _S(e){e.ui.registerSettings(mo,"Table grid",[{key:"sortDescFirst",label:"Sort descending first",type:"boolean",default:!0,scope:"workspace",description:"Clicking a column header sorts descending, then ascending, then off. Turn this off to start ascending. Dates, scores and counts are usually read from the high end down, which took two clicks before."},{key:"highlightNulls",label:"Highlight empty cells",type:"boolean",default:!0,scope:"workspace",description:"An empty cell gets a pink background, so a gap in the data is visible whatever the column draws. Turn it off for a table that is mostly empty on purpose, where the colour is noise. A value that does not fit its column type stays marked red either way."}]),e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const s=Array.from(t.dataTransfer?.files??[]).find(a=>a.name.toLowerCase()==="secrets.txt");if(!s)return!1;const i=await s.text(),o=Object.keys(tr(i)).length;return Xr().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${s.name}"?`,"Import secrets")||(eh(i),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const ES=Object.freeze(Object.defineProperty({__proto__:null,init:_S,meta:CS},Symbol.toStringTag,{value:"Module"}));class an extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function TS(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function IS(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function AS(e,t){const n=TS(t.source?.config),r=new Set;let s=[],i=new Map,o=!1,a=null;const c=new Map;let d=null,p=!1;function m(W){const T=new Map;for(const J of W)T.has(J.name)||T.set(J.name,J);const H=new Map;for(const J of n.sources){const de=T.get(J.tableName);de&&H.set(J.alias,de.id)}return H}async function w(){return m(await e.tables.find({workspaceId:t.workspaceId}))}async function y(){const W=await e.tables.find({workspaceId:t.workspaceId}),T={rows:[],provenance:new Map};if(hy(t.id,W))return T;const H=m(W),J=new Map(W.map(X=>[X.id,X])),de=ry(n),ge={};for(const X of n.sources){const K=H.get(X.alias);if(!K)return T;const ae=de[X.alias]??[],be=await Yl(e.rows(K),{columns:J.get(K)?.columns??[],fields:ae.length>0?ae:["id"]});ge[X.alias]=be.rows}const q=sy(n,ge);return{rows:q.rows.map(X=>({...X,tableId:t.id})),provenance:q.provenance}}async function k(){const{rows:W,provenance:T}=await y();return s=W,i=T,o=!0,W}function x(){return a||(a=(async()=>{try{return await k()}finally{a=null}})(),a)}async function _(){const W=await w(),T=new Set(W.values());for(const[H,J]of c)T.has(H)||(J(),c.delete(H));for(const H of T)if(!c.has(H)){const J=e.rows(H);c.set(H,J.watch?J.watch(A):J.subscribe(A))}}function A(){p||(p=!0,queueMicrotask(async()=>{p=!1,await _();const W=o?await k():await x();for(const T of r)T(W)}))}function D(W,T){return W===T||W==null&&T==null?!0:W==null||T==null?!1:String(W)===String(T)}async function G(W,T){o||await x();const H=s.find(X=>X.id===W)?.data,J=i.get(W),de=new Map,ge=[];for(const[X,K]of Object.entries(T)){if(H&&D(H[X],K))continue;const ae=gy(n,W,X,J);if(!ae){ge.push(X);continue}const be=de.get(ae.alias)??{rowId:ae.rowId,updates:{}};be.updates[ae.field]=K,de.set(ae.alias,be)}if(ge.length>0)throw new an(re(ge,J));if(de.size===0)return{id:W,tableId:t.id,data:T,updatedAt:Date.now()};const q=await w();for(const[X,{rowId:K,updates:ae}]of de){const be=q.get(X);if(!be)throw new an(`the "${M(X)}" table is not available`);const We=e.rows(be),Pe=await We.findOne(K);if(!Pe)throw new an("the underlying row no longer exists");await We.patch(K,{data:{...Pe.data,...ae},updatedAt:Date.now()})}return{id:W,tableId:t.id,data:T,updatedAt:Date.now()}}function M(W){return n.sources.find(T=>T.alias===W)?.tableName??W}function re(W,T){const H=W[0],J=n.columns.find(de=>de.field===H);return!J||J.from.kind==="script"?`"${H}" is computed by a script, so there is no cell to save it in`:T&&!T[J.from.alias]?`this row has no matching "${M(J.from.alias)}" row, so there is nowhere to save "${H}"`:`"${H}" cannot be written back to its source`}return{async find(W){const T=o?s:await x();return!W||Object.keys(W).length===0?T:T.filter(H=>IS(H,W))},async findOne(W){return(o?s:await x()).find(H=>H.id===W)??null},async insert(){throw new an("rows are derived from other tables")},async bulkInsert(){throw new an("rows are derived from other tables")},async upsert(W){return G(W.id,W.data)},async patch(W,T){if(!T.data)throw new an("a cell edit must carry row data");return G(W,T.data)},async remove(){throw new an("rows are derived from other tables")},async bulkRemove(){throw new an("rows are derived from other tables")},subscribe(W){return r.add(W),d||(d=e.tables.subscribe(A)),o?W(s):A(),()=>{if(r.delete(W),r.size===0){d?.(),d=null;for(const T of c.values())T();c.clear(),o=!1}}},async refresh(){await _();const W=await k();for(const T of r)T(W)}}}function RS(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,s=2;for(;t.has(r);)r=`${n}_${s++}`;return t.add(r),r}function OS(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function DS(e,t,n){const r=t.sources.map(a=>{const c=n.find(w=>w.name===a.tableName),d={alias:a.alias,tableId:c?.id??"",tableName:a.tableName,columns:c?.columns??[]},p=a.join?.on??[],m=p[0];return a.join&&m&&(d.join={type:a.join.type,thisField:m.field,otherAlias:m.eqAlias,otherField:m.eqField},p.length>1&&(d.extraOn=p.slice(1))),d}),s=t.columns.map(a=>{const c={include:!0,outField:a.field,label:a.label??a.field};return a.from.kind==="source"?{...c,alias:a.from.alias,field:a.from.field,computed:!1}:{...c,script:a.from.script,computed:!0}}),i=[],o=new Set;r.forEach((a,c)=>{const d=r.slice(0,c).filter(p=>p.tableName===a.tableName).length;for(const p of a.columns){const m=s.filter(w=>!w.computed&&w.alias===a.alias&&w.field===p.field&&!o.has(w));if(m.length>0)for(const w of m)o.add(w),i.push(w);else i.push({include:!1,alias:a.alias,field:p.field,computed:!1,label:d>0?`${p.label} (${a.alias})`:p.label})}});for(const a of s)!a.computed&&!o.has(a)&&i.push(a);for(const a of s)a.computed&&i.push(a);return{name:e,sources:r,columns:i,...t.limit?{limit:t.limit}:{},original:t}}function LS(e,t){const n=OS(e.sources),r=e.sources.length===0,s=e.sources.filter(a=>a.tableName===t.name).length;let i;if(!r){const a=e.sources.flatMap(d=>d.join?[{alias:d.join.otherAlias,field:d.join.otherField},...(d.extraOn??[]).map(p=>({alias:p.eqAlias,field:p.eqField}))]:[]),c=py({tableName:t.name,fields:t.columns.map(d=>d.field),pks:t.columns.filter(d=>d.unique).map(d=>d.field)},e.sources.map(d=>({alias:d.alias,tableName:d.tableName,fields:d.columns.map(p=>p.field),pks:d.columns.filter(p=>p.unique).map(p=>p.field)})),a);i={type:"left",thisField:c?.thisField??t.columns[0]?.field??"",otherAlias:c?.otherAlias??e.sources[0]?.alias??"",otherField:c?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...i?{join:i}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(a=>({include:!0,alias:n,field:a.field,computed:!1,label:s>0?`${a.label} (${n})`:a.label}))]}}function PS(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const s of e.sources){if(n.has(s.alias)||!s.join)continue;[s.join.otherAlias,...(s.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(s.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function MS(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function jS(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(c=>c.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let c=0;c<e.sources.length;c++){const d=e.sources[c];if(!d?.join)continue;if(!d.join.thisField||!d.join.otherField)return{ok:!1,error:`Set both join keys for "${d.tableName}".`};const p=new Set(e.sources.slice(0,c).map(w=>w.alias));if([d.join.otherAlias,...(d.extraOn??[]).map(w=>w.eqAlias)].some(w=>!p.has(w)))return{ok:!1,error:`The join for "${d.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(c=>c.alias)),s=new Set,i=[];for(const c of n){let d;if(c.outField&&!s.has(c.outField)?(d=c.outField,s.add(d)):d=RS(c.computed?"computed":c.field??"col",s),c.computed){i.push({field:d,from:{kind:"script",script:c.script??""}});continue}const p=c.alias,m=c.field;if(!p||!m||!r.has(p))return{ok:!1,error:`Column "${c.label??c.field}" belongs to a table that is no longer part of this projection.`};i.push({field:d,from:{kind:"source",alias:p,field:m}})}const o=e.sources.map(c=>{const d={alias:c.alias,tableName:c.tableName};return c.join&&(d.join={type:c.join.type,on:[{field:c.join.thisField,eqAlias:c.join.otherAlias,eqField:c.join.otherField},...c.extraOn??[]]}),d}),a={...e.original??{},version:1,sources:o,columns:i};return e.limit!=null&&e.limit>0?a.limit=Math.floor(e.limit):delete a.limit,{ok:!0,name:t,spec:a}}var NS=Object.defineProperty,zS=Object.getOwnPropertyDescriptor,gr=(e,t,n,r)=>{for(var s=r>1?void 0:r?zS(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&NS(t,n,s),s};let $t=class extends xe{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),$t.instance=this}disconnectedCallback(){super.disconnectedCallback(),$t.instance===this&&($t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Jt("projection",this.dialogEl)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(DS(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(LS(this.modelOf(),e))}removeSource(e){this.applyModel(PS(this.modelOf(),e))}addComputed(){this.applyModel(MS(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=jS(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return $`
      <dialog @cancel=${()=>this.dialogEl?.close()} @keydown=${pt}>
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
                  ${this.candidates.map(t=>$`<option value=${t.id}>${t.name}</option>`)}
                </select>
                <button
                  type="button"
                  class="ghost sm"
                  @click=${()=>{const t=this.shadowRoot?.getElementById("add-src");t?.value&&this.addSource(t.value)}}
                >
                  ${e?"+ Join table":"+ Base table"}
                </button>
                ${e?$`<span class="hint">A table may be joined more than once.</span>`:ie}
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
    `}renderSource(e,t){return $`
      <div class="src">
        <div class="src-head">
          <span class="badge ${t?"base":""}">${t?"Base":"Join"}</span>
          <span class="name">${e.tableName}</span>
          <code class="alias" title="Alias used by the join keys below">${e.alias}</code>
          <span class="spacer"></span>
          ${t?ie:$`<button type="button" class="icon-btn" title="Remove this join" aria-label="Remove ${e.tableName}" @click=${()=>this.removeSource(e.alias)}>×</button>`}
        </div>
        ${e.join?$`<div class="join-grid">
              <select .value=${e.join.type} @change=${n=>this.patchSource(e.alias,{type:n.target.value})}>
                <option value="left">LEFT JOIN</option>
                <option value="inner">INNER JOIN</option>
              </select>
              <span class="kw">ON</span>
              <select .value=${e.join.thisField} @change=${n=>this.patchSource(e.alias,{thisField:n.target.value})}>
                ${e.columns.map(n=>$`<option value=${n.field} ?selected=${n.field===e.join?.thisField}>${e.alias}.${n.field}</option>`)}
              </select>
              <span class="kw">=</span>
              <select
                .value=${`${e.join.otherAlias}.${e.join.otherField}`}
                @change=${n=>{const[r,s]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:s??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>$`<option value=${`${n.alias}.${r.field}`} ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}>${n.alias}.${r.field}</option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderSourceColumns(e){const t=this.columns.map((r,s)=>({c:r,i:s})).filter(({c:r})=>!r.computed&&r.alias===e.alias);if(t.length===0)return ie;const n=t.every(({c:r})=>r.include);return $`
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
          ${t.map(({c:r,i:s})=>$`
              <label class="tick ${r.include?"":"off"}" title=${`${r.alias}.${r.field}`}>
                <input type="checkbox" .checked=${r.include} @change=${i=>this.setColumn(s,{include:i.target.checked})} />
                <span class="tick-name">${r.field}</span>
              </label>
            `)}
        </div>
      </div>
    `}renderComputedColumns(){const e=this.columns.map((t,n)=>({c:t,i:n})).filter(({c:t})=>t.computed);return $`
      <div class="col-group">
        <div class="group-head">
          <span class="chip">computed</span>
          <button type="button" class="link-btn" @click=${()=>this.addComputed()}>+ add</button>
        </div>
        ${e.length===0?$`<span class="hint">None. A computed column derives its value from the row.</span>`:e.map(({c:t,i:n})=>$`
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
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};$t.instance=null;$t.styles=[ft,Se`
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
    `];gr([z()],$t.prototype,"name",2);gr([z()],$t.prototype,"limit",2);gr([z()],$t.prototype,"sources",2);gr([z()],$t.prototype,"columns",2);gr([z()],$t.prototype,"error",2);$t=gr([Oe("projection-dialog")],$t);const FS={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function US(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>(Up(e,t),AS(e.store,t))}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void Rd(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void Rd(t,{editTableId:n})})}async function Up(e,t){if(t.source?.type!=="projection")return;const n=t.source.config;if(!n||!Array.isArray(n.sources))return;const r=Bi(n),s=t.columns.map(a=>{const c=!r.has(a.field);if(c===(a.readonly===!0))return a;if(c)return{...a,readonly:!0};const d={...a};return delete d.readonly,d}),i=r.size===0;s.every((a,c)=>a===t.columns[c])&&(t.readonly??!1)===i||await e.store.tables.patch(t.id,{columns:s,readonly:i,updatedAt:Date.now()})}async function BS(e){const t=e.workspaceId();if(t)for(const n of await e.store.tables.find({workspaceId:t}))await Up(e,n)}async function qS(e){await BS(e)}async function HS(e,t,n,r,s){const i=await e.store.tables.find({workspaceId:t}),o=new Map;for(const c of i)o.has(c.name)||o.set(c.name,c);const a={};for(const c of n.sources)a[c.alias]=o.get(c.tableName)?.columns??[];return Uh(n,a,r,s)}async function Rd(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),s=a=>({id:a.id,name:a.name,columns:a.columns}),i=$t.instance??KS();if(t.editTableId){const a=r.find(c=>c.id===t.editTableId)??null;if(!a||a.source?.type!=="projection")return;i.open({candidates:r.filter(c=>c.id!==a.id).map(s),initial:{name:a.name,spec:a.source.config},onSave:Od(e,n,a)});return}const o=r.find(a=>a.id===t.baseTableId);o&&i.open({base:s(o),candidates:r.map(s),onSave:Od(e,n,null,o)})}function Od(e,t,n,r){return async(s,i)=>{const o=await HS(e,t,i,n?.columns??[],n?.deletedColumns??[]),a=Bi(i).size===0,c={type:"projection",config:i};n?await e.store.tables.patch(n.id,{name:s,columns:o,source:c,readonly:a,updatedAt:Date.now()}):await e.store.tables.insert({id:Ce(),workspaceId:t,name:s,code:Me(s),columns:o,view:"table",source:c,readonly:a,...r?uy(i,r):{},updatedAt:Date.now()})}}function KS(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const VS=Object.freeze(Object.defineProperty({__proto__:null,init:US,load:qS,meta:FS},Symbol.toStringTag,{value:"Module"})),WS={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function GS(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",variant:"secondary",onClick:()=>e.ui.openCommandPalette()})}const YS=Object.freeze(Object.defineProperty({__proto__:null,init:GS,meta:WS},Symbol.toStringTag,{value:"Module"})),ga="electron-db:pendingImport",Bp=15*1024*1024;function qp(e){const t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0&&e.slice(t+1)||e}function Hp(e){return e>=1024*1024?`${(e/(1024*1024)).toFixed(1)} MB`:e>=1024?`${Math.round(e/1024)} KB`:`${e} bytes`}let Wr=null;const QS={id:"electron-db",name:"Database File",type:"ui",version:"0.1.0",description:"Open, Save As, or Import a .db file (Electron desktop build only).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/electron-db.ts"},JS=/\.(edb|db|sqlite|sqlite3)$/i,XS=/\.edb$/i;function ZS(e){const t=window.easydb?.db;t&&(e.ui.registerDropHandler(async n=>{const r=[...n.dataTransfer?.files??[]].find(i=>JS.test(i.name));if(!r)return!1;const s=t.pathForFile(r);return s?(await Vp(e,t,s,XS.test(r.name)),!0):(await e.ui.dialogs.alert(`"${r.name}" could not be located on disk, so it cannot be opened.`,"Database file"),!0)}),t.onImportProgress(n=>{if(document.dispatchEvent(new CustomEvent(Fa,{detail:{tableId:n.tableId,rows:n.rows,total:n.total,...n.done?{done:!0}:{}}})),!Wr)return;const{tracker:r,label:s}=Wr;n.done?r.complete(n.tableId):r.observe(n.tableId,n.rows),qi({label:s,fraction:r.fraction(),detail:`${r.completedTables()} of ${r.tableCount} table${r.tableCount===1?"":"s"}`})}),e.ui.registerFooterButton({id:"electron-db:menu",label:"Database",icon:"storage",tooltip:"Open, Save As, or Import a .db file",onClick:async(n,r)=>{const{AnchoredMenu:s}=await Re(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>rr);return{AnchoredMenu:a}},void 0),i=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(i,[{id:"open",label:"Open…",icon:"folder_open"},{id:"saveAs",label:"Save As…",icon:"save"},{id:"import",label:"Import…",icon:"file_download"},...Jp()?[{id:"stop",label:"Stop importing",icon:"cancel"}]:[]]);if(o)try{o==="open"?await Kp(n,t):o==="saveAs"?await nC(n,t):o==="import"?await go(n,t):o==="stop"&&Xp()}catch(a){n.ui.dialogs.toast(`${o} failed: ${a.message}`,{kind:"error",title:"Database file"})}}}))}function eC(e){const t=window.easydb?.db;t&&Zp(e,t).catch(n=>{e.ui.dialogs.toast(`Finishing the conversion failed: ${n.message}`,{kind:"error",title:"Convert to EDA"})})}async function Kp(e,t){const n=await t.openDb();n.ok&&await tc(e,t,n.path,n.kind)}async function Vp(e,t,n,r){if(!r){await go(e,t,n);return}const s=await t.probeDb(n);if(s==="easydb"){await Wp(e,t,n,s);return}e.ui.dialogs.toast(`"${n}" is named as a workspace but does not contain one.`,{kind:"warning",title:"Open workspace"}),await tc(e,t,n,s)}async function tc(e,t,n,r){if(r==="unreadable"){await e.ui.dialogs.alert(`"${n}" is not a SQLite database — it could not be read.`,"Database file");return}const s=await e.ui.dialogs.choice(`What would you like to do with "${n}"?`,["Open Workspace","Browse .db file","Import data"],"Database file");if(s){if(s==="Import data"){await go(e,t,n);return}if(s==="Browse .db file"){await Gp(e,t,n);return}await Wp(e,t,n,r)}}async function Wp(e,t,n,r){if(r==="foreign"){const i=await e.ui.dialogs.choice(`"${n}" is a SQLite database, but not an easyDBAccess workspace — there is no workspace in it to open.

It can be converted into one (a new file is written; this one is left exactly as it is), or opened read-only for a look.`,["Convert to EDA","Browse"],"Open workspace");i==="Convert to EDA"?await tC(e,t,n):i==="Browse"&&await Gp(e,t,n);return}await e.ui.dialogs.confirm(`Open "${n}"?

This replaces the current workspace view with that file's data. Nothing is deleted — the file you have open now is left exactly as it is on disk.`,"Open workspace")&&await t.openDbCommit(n)}async function tC(e,t,n){const r=await t.browseList(n);if(r.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to convert.`,"Convert to EDA");return}const s=await Yp(e,r,"Convert to EDA",{offerTablesOnly:!0});s.length===0||(await t.convertDb(n,s.map(o=>o.name))).ok}async function nC(e,t){const n=await t.saveDbAs();n.ok&&e.ui.dialogs.toast(`Saved a copy to "${n.path}" — that file is now the active database.`,{kind:"success",title:"Save database as"})}async function Gp(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await t.browseList(n);if(s.length===0){await e.ui.dialogs.alert(`"${n}" has no tables or views to browse.`,"Browse database");return}const i=await Yp(e,s,"Browse database");if(i.length===0)return;const o=new Set((await e.store.tables.find()).filter(c=>c.workspaceId===r).map(c=>c.name.toLowerCase()));for(const c of i){const d=tm(c.name,o);o.add(d.toLowerCase()),await e.store.tables.insert({id:crypto.randomUUID(),workspaceId:r,name:d,columns:c.columns,view:"table",readonly:!0,source:{type:"sqlitefile",config:{path:n,objectName:c.name,isView:c.kind==="view"},writable:!1},updatedAt:Date.now()})}const a=i.filter(c=>c.kind==="view").length;e.ui.dialogs.toast(`Browsing ${i.length} object${i.length===1?"":"s"} from "${n}"${a?` (${a} view${a===1?"":"s"})`:""} — read-only.`,{kind:"success",title:"Browse database"})}async function Yp(e,t,n,r){if(t.length===1)return t;const s=t.filter(m=>m.kind==="table"),i=`All ${t.length}`,o=r?.offerTablesOnly&&s.length>0&&s.length<t.length?`All ${s.length} table${s.length===1?"":"s"} (skip the views)`:null,a=t.map(m=>`${m.name}${m.kind==="view"?" (view)":""}${m.rowCount==null?"":` — ${m.rowCount} rows`}`),c=await e.ui.dialogs.choice("Which tables or views?",[...o?[o]:[],i,...a],n);if(!c)return[];if(c===o)return s;if(c===i)return t;const d=a.indexOf(c),p=t[d];return p?[p]:[]}async function go(e,t,n){const r=e.workspaceId();if(!r)throw new Error("no active workspace");const s=await t.importDb(r,n);if(!s.ok)return;const{preview:i}=s;if(i.candidates.length===0){await e.ui.dialogs.alert(`No importable tables were found in "${s.path}".`,"Import database");return}const o=i.sizeBytes??0,a=await em.pickCandidates(e,i.candidates);if(a.length===0)return;const c=a.filter(A=>A.mode==="projection"),d=a.filter(A=>A.mode!=="projection").map(A=>A.candidate),p=new Set(d.map(A=>A.name));if(d.length===0&&c.length===0)return;const m=new Set((await e.store.tables.find()).filter(A=>A.workspaceId===r).map(A=>A.name.toLowerCase())),w={};for(const A of i.candidates){if(!p.has(A.name)){w[A.name]={action:"skip"};continue}if(!A.collides)continue;const D=await e.ui.dialogs.choice(`A table named "${A.name}" already exists in this workspace.`,["Append","Overwrite","Rename","Skip"],"Import — table already exists");if(!D||D==="Skip"){w[A.name]={action:"skip"};continue}if(D==="Append"){const M=await iC(e,A,r);w[A.name]=M??{action:"skip"};continue}if(D==="Overwrite"){w[A.name]={action:"overwrite"};continue}const G=tm(A.name,m);m.add(G.toLowerCase()),w[A.name]={action:"rename",renameTo:G}}const{plan:y,skipped:k}=await t.importPrepare(s.path,r,w);if(y.length===0){Ya(e,s.path,k);return}e.ui.dialogs.toast(`Importing ${y.length} object${y.length===1?"":"s"} from "${s.path}" — the windows are there now and fill in as the rows arrive.`,{kind:"info",title:"Import database"});const x=qp(s.path),_=await Qp(e,t,s.path,y,k,`Importing ${x}${o>0?` (${Hp(o)})`:""}`);Ya(e,s.path,_),c.length>0&&await rC(e,r,c,o>Bp)}async function rC(e,t,n,r=!1){const[{parseSqlScript:s},{createProjectionTable:i}]=await Promise.all([Re(()=>Promise.resolve().then(()=>Ty),void 0),Re(()=>Promise.resolve().then(()=>by),void 0)]),o=[],a=[];for(const{candidate:c}of n){const d=c.sql??"";if(!d){a.push({name:c.name,why:"its definition could not be read"});continue}const p=s(d),m=p.projections[0];if(!m){a.push({name:c.name,why:p.unsupported[0]??"its SELECT could not be modelled as a projection"});continue}const w=(await e.store.tables.find()).filter(x=>x.workspaceId===t),y=new Map(w.map(x=>[x.name.toLowerCase(),x])),k=await i(e,t,{name:c.name,spec:m.spec,...m.sortBy?{sortBy:m.sortBy}:{}},{resolve:x=>y.get(x.toLowerCase()),taken:w.map(x=>x.name)});if(!k){const x=m.spec.sources.map(_=>_.tableName).join(", ");a.push({name:c.name,why:`it reads tables this workspace does not have (${x}) — import them too`});continue}if(r){const x=o.length;await e.store.tables.patch(k.id,{windowGeometry:{x:40+x%10*24,y:40+x%10*24,w:640,h:360,z:x,minimized:!0,maximized:!1},updatedAt:Date.now()})}o.push(k.name)}o.length>0&&e.ui.dialogs.toast(`Created ${o.length} projection${o.length===1?"":"s"} from views: ${o.join(", ")}.${r?" Left minimized — this file is big enough that opening them all would stall the app.":""}`,{kind:"success",title:"Import database"}),a.length>0&&e.ui.dialogs.toast(`${a.length} view${a.length===1?"":"s"} could not become a projection — ${a.map(c=>`${c.name}: ${c.why}`).join("; ")}. Import them as Data instead.`,{kind:"warning",title:"Import database"})}async function Qp(e,t,n,r,s=[],i="Importing"){const o=[...s];An={cancelled:!1};const a=An,c=new nf(r.map(d=>({tableId:d.tableId,total:d.total})));Wr={tracker:c,label:i},qi({label:i,detail:`0 of ${r.length} table${r.length===1?"":"s"}`});try{for(const d of r){if(a.cancelled){e.ui.dialogs.toast(`Stopped. ${o.length} of ${r.length} table${r.length===1?"":"s"} were filled; the rest are still empty.`,{kind:"warning",title:"Import database"});break}try{const p=await t.importRows(n,d);o.push({sourceName:d.sourceName,action:d.action,finalName:d.finalName,tableId:d.tableId,rowCount:p})}catch(p){e.ui.dialogs.toast(`"${d.finalName}" failed: ${p.message}`,{kind:"error",title:"Import database"})}}}finally{An===a&&(An=null),Wr?.tracker===c&&(Wr=null),tf()}return o}let An=null;function Jp(){return An!==null}function Xp(){An&&(An.cancelled=!0)}async function Zp(e,t){const r=(await e.store.settings.findOne(ga))?.value;if(!r?.sourcePath||!r.plan?.length)return;const s=r.plan.length,i=r.plan.reduce((w,y)=>w+(y.total>0?y.total:0),0),o="Fill them in now",a="Leave them empty",c=await e.ui.dialogs.choice(`${s} table${s===1?"":"s"} in this workspace ${s===1?"is":"are"} still empty — ${s===1?"its":"their"} rows were being copied from "${r.sourcePath}" when the app last stopped.

${i>0?`About ${i.toLocaleString()} rows are left. `:""}Copying can be stopped from the Database menu once it starts.`,[o,a],"Unfinished import");if(c!==o){c===a&&await e.store.settings.remove(ga);return}const d=qp(r.sourcePath),p=r.sizeBytes??0,m=await Qp(e,t,r.sourcePath,r.plan,[],`Converting ${d}${p>0?` (${Hp(p)})`:""}`);await e.store.settings.remove(ga),Ya(e,r.sourcePath,m)}const em={pickCandidates:(e,t)=>sC(e,t)};async function sC(e,t){const{chooseDatabaseObjects:n}=await Re(async()=>{const{chooseDatabaseObjects:i}=await Promise.resolve().then(()=>lw);return{chooseDatabaseObjects:i}},void 0),r=t.map(i=>({name:i.name,size:i.rowCount<0?null:i.rowCount,kind:i.isView?"view":"table",...i.collides?{detail:"⚠ name already in use"}:{}})),s=await n(r,{title:"Import database",message:"Tables bring their rows. A view can come in as a Projection — its query, recomputed — or as Data, a snapshot you can edit.",confirmLabel:"Import",offerViewModes:!0});return s?s.map(i=>({candidate:t[i.index],mode:i.mode})):[]}async function iC(e,t,n){const r=t.columns??[],i=(await e.store.tables.find()).find(d=>d.workspaceId===n&&d.name.toLowerCase()===t.name.toLowerCase())?.columns??[],o=new Set(i.map(d=>d.field.toLowerCase()));if(r.length===0||i.length===0||r.every(d=>o.has(d.toLowerCase())))return{action:"append"};const{mapColumnsToTable:a}=await Re(async()=>{const{mapColumnsToTable:d}=await import("./column-map-dialog-DZD7vRlu.js");return{mapColumnsToTable:d}},[]),c=await a([...r],[...i],t.name);return c?{action:"append",mapping:c}:null}function tm(e,t){if(!t.has(e.toLowerCase()))return e;for(let n=2;;n++){const r=`${e} (${n})`;if(!t.has(r.toLowerCase()))return r}}function Ya(e,t,n){const r={created:n.filter(o=>o.action==="created").length,renamed:n.filter(o=>o.action==="renamed").length,overwritten:n.filter(o=>o.action==="overwritten").length,skipped:n.filter(o=>o.action==="skipped").length},s=n.reduce((o,a)=>o+a.rowCount,0),i=[];if(r.created&&i.push(`${r.created} new`),r.renamed&&i.push(`${r.renamed} renamed`),r.overwritten&&i.push(`${r.overwritten} overwritten`),r.skipped&&i.push(`${r.skipped} skipped`),i.length===0){e.ui.dialogs.toast(`Nothing imported from "${t}".`,{kind:"warning",title:"Import database"});return}e.ui.dialogs.toast(`Imported from "${t}": ${i.join(", ")} (${s} row${s===1?"":"s"} total).`,{kind:"success",title:"Import database"})}const oC=Object.freeze(Object.defineProperty({__proto__:null,LARGE_SOURCE_BYTES:Bp,cancelImport:Xp,handleDatabaseFile:tc,handleDroppedFile:Vp,importDeps:em,importFlow:go,init:ZS,isImporting:Jp,load:eC,meta:QS,openFlow:Kp,resumePendingImport:Zp},Symbol.toStringTag,{value:"Module"})),aC={id:"sqlitefile-source",name:"Browse a database file",type:"source",version:"0.1.0",description:"Reads tables and views out of a .db file, read-only (Electron desktop build only).",author:"Marc Cawood",repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sqlitefile-source.ts"};function nm(e){const t=e.source?.config;return!t||typeof t.path!="string"||typeof t.objectName!="string"?null:{path:t.path,objectName:t.objectName,isView:!!t.isView}}function En(e){throw new Error(`This table is a read-only browse of a database file — ${e} is not possible. Use Import to bring the data into your workspace first.`)}function lC(e,t){const n=nm(e),r=new Set;let s=null;async function i(){return n?(s=(await t.browseRows(n.path,n.objectName,e.columns)).map(c=>({id:c.id,tableId:e.id,data:c.data,updatedAt:0})),s):[]}function o(a){for(const c of r)c(a)}return{async find(){return s??await i()},async findOne(a){return(s??await i()).find(c=>c.id===a)},async count(){return(s??await i()).length},async refresh(){o(await i())},subscribe(a){return r.add(a),(s?Promise.resolve(s):i()).then(a),()=>void r.delete(a)},insert:()=>En("adding a row"),bulkInsert:()=>En("adding rows"),upsert:()=>En("changing a row"),patch:()=>En("changing a row"),remove:()=>En("deleting a row"),bulkRemove:()=>En("deleting rows"),clear:()=>En("clearing the table")}}function cC(e){const t=window.easydb?.db;t&&typeof e.registerRowSource=="function"&&e.registerRowSource({type:"sqlitefile",create:n=>lC(n,t),schemaEditable:!1})}const uC=Object.freeze(Object.defineProperty({__proto__:null,init:cC,meta:aC,parseConfig:nm},Symbol.toStringTag,{value:"Module"})),dC=[{id:"press-ctrl-k-to-run-commands",text:"Press Ctrl+K to run commands"},{id:"drag-in-a-file-to-import-csv-json",text:"Drag in a file to import (.csv, .json)"},{id:"right-click-and-drag-the-workspace-to-pan-deskto",text:"Right-click and drag the workspace to pan (Desktop)"}],hC={tips:dC},ar={id:"tips",name:"Tips",type:"ui",version:"0.1.0",description:'Shows one unseen tip on startup, plus a "Show tip" command. Compiled from docs/help/tips.md.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21h6"/><path d="M10 18h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.3.3.5.7.5 1.1v0h6v0c0-.4.2-.8.5-1.1A6 6 0 0 0 12 3z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/tips.ts"},Ei="seen",Ti=hC.tips;function fC(){if(typeof location>"u")return!0;const e=new URLSearchParams(location.search);return e.get("tips")==="1"?!1:e.get("test")==="1"}async function nc(e){const t=await e.settings.get(ar.id,Ei);return Array.isArray(t)?t.filter(n=>typeof n=="string"):[]}async function pC(e){const t=wi(ar.id),n=await e.store.plugins.findOne(t);await e.store.plugins.upsert({...n??{url:t,lastFetched:0},url:t,enabled:!1,lastFetched:n?.lastFetched??0}),await e.settings.set(ar.id,Ei,[],"user")}async function rm(e,t){const n=await nc(e),r=Ti[t];if(!r)return;await e.settings.set(ar.id,Ei,[...new Set([...n,r.id])],"user");const{TipsDialog:s}=await Re(async()=>{const{TipsDialog:o}=await import("./tips-dialog-C0YgI8Me.js");return{TipsDialog:o}},[]),i=await s.open({tips:Ti,startIndex:t});if(i.dontShowAgain){await pC(e);return}await e.settings.set(ar.id,Ei,[...new Set([...n,...i.viewed])],"user")}function mC(e){e.ui.registerCommand({id:"tips:show",title:"Show tip",group:"Help",icon:"lightbulb",keywords:["tip","hint","help"],run:async t=>{const n=await nc(t),r=Ti.findIndex(s=>!n.includes(s.id));await rm(t,r===-1?0:r)}})}async function gC(e){if(fC())return;const t=await nc(e),n=Ti.findIndex(r=>!t.includes(r.id));n!==-1&&await rm(e,n)}const bC=Object.freeze(Object.defineProperty({__proto__:null,init:mC,load:gC,meta:ar},Symbol.toStringTag,{value:"Module"}));var wC=Object.defineProperty,yC=Object.getOwnPropertyDescriptor,rc=(e,t,n,r)=>{for(var s=r>1?void 0:r?yC(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&wC(t,n,s),s};const sc="https://github.com/cawoodm/easydbaccess/blob/main/docs/help/commandlets.md";let ei=null;function vC(){return ei||(ei=document.createElement("commandlet-dialog"),document.body.appendChild(ei)),ei}let lr=class extends xe{constructor(){super(...arguments),this.value="",this.verdict=null,this.check=null,this.checkSeq=0,this.dialogEl=null,this.resolveFn=null,this.onInput=e=>{this.value=e.target.value,this.revalidate()},this.onSubmit=e=>{e.preventDefault();const t=this.value.trim();!t||this.verdict?.ok===!1||this.finish(t)},this.onCancel=e=>{e.preventDefault(),this.finish(null)}}static open(e,t=""){return vC().openDialog(e,t)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Jt("commandlet",this.dialogEl)}openDialog(e,t){return this.check=e,this.value=t,this.verdict=null,t&&this.revalidate(),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>{this.dialogEl?.showModal();const r=this.shadowRoot?.querySelector("input.commandlet");r?.focus(),r?.select()})})}async revalidate(){const e=++this.checkSeq,t=this.value.trim();if(!t||!this.check){this.verdict=null;return}const n=await this.check(t);e===this.checkSeq&&(this.verdict=n)}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){const e=this.verdict;return $`
      <dialog @cancel=${this.onCancel} @keydown=${pt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>Run commandlet</h2>
            <div class="header-actions">
              <a class="help" href=${sc} target="_blank" rel="noopener noreferrer" title="What is a commandlet?">?</a>
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${e?.ok===!1||this.value.trim()===""}>Run</button>
            </div>
          </div>
          <div class="dialog-body">
            <input class="commandlet" type="text" spellcheck="false" placeholder="goto/bible?Book=Matthew" .value=${this.value} @input=${this.onInput} />
            <div class="verdict ${e?e.ok?"ok":"bad":""}">${e?$`<span class="mark">${e.ok?"✓":"✕"}</span><span>${e.message}</span>`:ie}</div>
            <p class="hint">
              <code>goto/&lt;table&gt;?&lt;Column&gt;=&lt;filter&gt;</code> — add <code>@sort=-Field</code>, <code>@search=…</code> or <code>@clear=1</code>; chain with <code>;</code>. Also
              <code>search/…</code>, <code>view/…</code> and <code>cmd/&lt;id&gt;</code>.
            </p>
          </div>
        </form>
      </dialog>
    `}};lr.styles=[ft,Se`
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
    `];rc([z()],lr.prototype,"value",2);rc([z()],lr.prototype,"verdict",2);lr=rc([Oe("commandlet-dialog")],lr);const $C=Object.freeze(Object.defineProperty({__proto__:null,COMMANDLET_HELP_URL:sc,get CommandletDialog(){return lr}},Symbol.toStringTag,{value:"Module"}));let sm;const kC=new Promise(e=>{sm=e});function xC(){sm()}function SC(){return kC}async function CC(e,t={}){const n=Nh(e),r=await im(t);for(const s of n)await TC(zh(s,r),t)}async function _C(e,t={}){const n=e.trim();if(!n)return{ok:!1,message:""};let r;try{r=Nh(n)}catch(o){return{ok:!1,message:o instanceof Error?o.message:String(o)}}const s=await im(t),i=[];for(const o of r)try{i.push(await EC(zh(o,s),t))}catch(a){return{ok:!1,message:a instanceof Error?a.message:String(a)}}return{ok:!0,message:i.join(", then ")}}async function EC(e,t={}){switch(e.verb){case"goto":{const n=await cm(e.targets[0]??""),r=Object.keys(e.filters).map(o=>cr(n,o)),s=Ii(e.options.sort,n),i=[`open ${n.name}`];return r.length>0&&i.push(`filter ${r.join(" + ")}`),e.options.clear!==void 0&&i.push("clear filters"),e.options.search!==void 0&&i.push(`search "${e.options.search}"`),s&&s.length>0&&i.push(`sort by ${s.map(o=>`${o.field}${o.asc?"":" ↓"}`).join(", ")}`),i.join(", ")}case"search":return`search all tables for "${e.targets[0]??""}"`;case"view":{const n=await om(e,t),r=await am(n),s=Object.keys(e.filters).map(a=>cr(r,a)),i=Ii(e.options.sort,r),o=[`open view "${n.name}"`];return s.length>0&&o.push(`filter ${s.join(" + ")}`),e.options.clear!==void 0&&o.push("clear filters"),e.options.search!==void 0&&o.push(`search "${e.options.search}"`),i&&i.length>0&&o.push(`sort by ${i.map(a=>`${a.field}${a.asc?"":" ↓"}`).join(", ")}`),o.join(", ")}case"cmd":return`run "${(await lm(e.targets[0]??"")).title}"`;case"preview":case"ui":throw new at(`"${e.verb}" is not wired up yet.`)}}async function im(e){const t=await ee(),n={WORKSPACE:t.workspaceId,...e.vars??{}};if(e.field!==void 0&&(n.FIELD=e.field),e.value!==void 0&&(n.VALUE=e.value),e.tableId){const r=await t.store.tables.findOne(e.tableId);r&&(n.TABLE=r.name)}return n}async function TC(e,t={}){switch(e.verb){case"goto":return IC(e);case"search":return AC(e);case"view":return RC(e,t);case"cmd":return OC(e);case"preview":case"ui":throw new at(`"${e.verb}" is not wired up yet.`)}}async function IC(e){const t=e.targets[0]??"",n=await cm(t),r={},s=e.options.clear===void 0?{...n.filters??{}}:{};for(const[a,c]of Object.entries(e.filters)){const d=cr(n,a);c===""?delete s[d]:s[d]=c}(Object.keys(e.filters).length>0||e.options.clear!==void 0)&&(r.filters=Object.keys(s).length>0?s:void 0);const i=Ii(e.options.sort,n);i&&(r.sortBy=i.length>0?i:void 0,r.sortColumn=i[0]?.field,r.sortAsc=i[0]?i[0].asc:void 0),Object.keys(r).length>0&&await(await ee()).store.tables.patch(n.id,{...r,updatedAt:Date.now()}),Ql(n.id);const o=e.options.search;o!==void 0&&document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:n.id,query:o}}))}function Ii(e,t){return e===void 0?null:e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>n.startsWith("-")?{field:cr(t,n.slice(1)),asc:!1}:{field:cr(t,n),asc:!0})}function cr(e,t){const n=new Map;for(const s of e.columns??[])n.set(s.field.toLowerCase(),s.field),s.label&&n.set(s.label.toLowerCase(),s.field);const r=n.get(t.trim().toLowerCase());if(!r){const s=(e.columns??[]).map(i=>i.field).join(", ");throw new at(`"${e.name}" has no column "${t}"${s?` — it has ${s}`:""}.`)}return r}function AC(e){const t=e.targets[0]??"";document.dispatchEvent(new CustomEvent("easydb:set-search",{detail:{query:t}}))}async function RC(e,t){const n=await om(e,t),r=await am(n),s={},i=e.options.clear===void 0?{...n.pillFilters??{}}:{};for(const[c,d]of Object.entries(e.filters)){const p=cr(r,c);d===""?delete i[p]:i[p]=d}(Object.keys(e.filters).length>0||e.options.clear!==void 0)&&(s.pillFilters=Object.keys(i).length>0?i:void 0);const o=Ii(e.options.sort,r);o&&(s.sortBy=o.length>0?o:void 0,s.sortColumn=o[0]?.field,s.sortAsc=o[0]?o[0].asc:void 0),Object.keys(s).length>0&&await(await ee()).store.viewInstances.patch(n.id,{...s,updatedAt:Date.now()}),await ec(n.id);const a=e.options.search;a!==void 0&&document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:n.id,query:a}}))}async function om(e,t){const n=(e.targets[0]??"").trim();if(n)return DC(n);if(!t.viewInstanceId)throw new at('"view" with no name means the view you are in — this was not run from one, so name the view.');const s=await(await ee()).store.viewInstances.findOne(t.viewInstanceId);if(!s)throw new at("That view no longer exists.");return s}async function am(e){const n=await(await ee()).store.tables.findOne(e.tableId);if(!n)throw new at(`The view "${e.name}" has no table.`);return n}async function OC(e){const t=await lm(e.targets[0]??""),n=await ee();await t.run(n.api)}async function DC(e){const t=e.trim(),n=await ee(),r=(await n.store.viewInstances.find()).filter(i=>i.workspaceId===n.workspaceId),s=r.find(i=>i.name===t)??r.find(i=>i.name.toLowerCase()===t.toLowerCase());if(!s)throw new at(`No view called "${t}".`);return s}async function lm(e){const t=await ee(),n=t.registries.commands.find(r=>r.id===e)??t.registries.commands.find(r=>r.id.toLowerCase()===e.toLowerCase());if(!n)throw new at(`No command with id "${e}".`);return n}async function cm(e){const t=e.trim();if(!t)throw new at("No table name given.");const n=await ee(),r=(await n.store.tables.find()).filter(i=>i.workspaceId===n.workspaceId),s=r.find(i=>i.name===t)??r.find(i=>i.name.toLowerCase()===t.toLowerCase());if(!s)throw new at(`No table called "${t}".`);return s}const ic={id:"commandlets",name:"Commandlets",type:"ui",version:"0.1.0",description:"Run URL-shaped actions like goto/bible?Book=Matthew — from a link, a #hash, ?cmdlet= or the palette.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/commandlets.ts"},LC="cmdlet",um="default";function PC(e){e.ui.registerSettings(ic.id,"Commandlets",[{key:um,label:"Default commandlet",type:"string",scope:"workspace",description:"Run this when the URL hash is not a commandlet itself. Blank ⇒ a plain #anchor is ignored, as before.",help:"Anchors like #Matthew carry no verb, so nothing runs unless this template says what to do with one. $HASH is the whole anchor text and $1…$9 are its /-separated parts, e.g. goto/bible?Title=$HASH&@sort=Title turns #Matthew into goto/bible?Title=Matthew&@sort=Title. The text is substituted after parsing, so an anchor containing & or ; cannot break the command.",helpUrl:sc,helpLinkLabel:"Commandlets guide"}]),e.ui.registerCommand({id:"commandlets:run",title:"Run commandlet…",group:"App",icon:"terminal",keywords:["command","goto","action","link","url"],run:t=>NC(t)}),e.ui.registerCommandFallback?.(t=>$l(t)?{id:"commandlets:run-this",title:`Run this commandlet: ${t}`,group:"Commands",icon:"terminal",run:n=>ur(n,t)}:null)}function MC(e){document.addEventListener("click",t=>void FC(e,t),!0),window.addEventListener("hashchange",()=>void dm(e)),SC().then(()=>jC(e))}async function jC(e){const t=new URLSearchParams(location.search).get(LC);t&&await ur(e,t),await dm(e)}async function NC(e,t=""){const{CommandletDialog:n}=await Re(async()=>{const{CommandletDialog:s}=await Promise.resolve().then(()=>$C);return{CommandletDialog:s}},void 0),r=await n.open(s=>_C(s),t);r!==null&&await ur(e,r)}async function dm(e){const t=location.hash.replace(/^#/,"");if(!t)return;if($l(t)){Dd(),await ur(e,t);return}const n=(await e.settings.get(ic.id,um))?.trim();if(!n)return;const r=zC(t),s=r.split("/"),i={HASH:r};s.forEach((o,a)=>{i[String(a+1)]=o}),Dd(),await ur(e,n,{vars:i})}function Dd(){history.replaceState(null,"",location.pathname+location.search)}function zC(e){try{return decodeURIComponent(e)}catch{return e}}async function FC(e,t){if(t.defaultPrevented||t.button!==0||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)return;const n=t.composedPath(),r=n.find(o=>o instanceof HTMLAnchorElement);if(!r)return;const s=r.getAttribute("href")??"";if(!s.startsWith("#"))return;const i=s.slice(1);$l(i)&&(t.preventDefault(),await ur(e,i,UC(n)))}function UC(e){const t={};for(const n of e){if(!t.tableId){const r=Tp(n);r&&(t.tableId=r)}if(!t.viewInstanceId&&n instanceof HTMLElement&&n.tagName==="VIEW-WINDOW"){const r=n.viewInstanceId;r&&(t.viewInstanceId=r)}if(t.field===void 0&&n instanceof HTMLElement){const r=n;r.column?.field&&(t.field=r.column.field,r.value!=null&&(t.value=String(r.value)))}}return t}async function ur(e,t,n){try{await CC(t,n??{})}catch(r){const s=r instanceof at||r instanceof Error?r.message:String(r);e.ui.dialogs.toast(s,{kind:"error",title:"Commandlet"})}}const BC=Object.freeze(Object.defineProperty({__proto__:null,init:PC,load:MC,meta:ic},Symbol.toStringTag,{value:"Module"})),qC=[ES,t$,Xb,Cw,Py,Uy,Av,Gv,t0,rw,R0,c0,V0,X0,u$,m$,y$,x$,L$,sk,lk,hk,yk,Sk,Rk,Vx,Xx,A1,Pp,SS,VS,YS,oC,uC,bC,BC];function HC(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const hm=qC.map(e=>{const t=HC(e);return{id:t.id,meta:t,module:e}}),KC=hm;async function VC(e){const t=[];for(const n of hm)if(!await WC(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function WC(e,t){return t.meta.fixed?!1:_t==="all-optional"?!0:(await e.store.plugins.findOne(wi(t.id)))?.enabled===!1}function fm(e){return e.filter(t=>t.status!=="minimized")}function GC(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),s=Math.ceil(e/r),i=(t.w-n*(r+1))/r,o=(t.h-n*(s+1))/s;return Array.from({length:e},(a,c)=>{const d=c%r,p=Math.floor(c/r);return{x:t.x+n+d*(i+n),y:t.y+n+p*(o+n),w:i,h:o}})}function br(){return G$()}function YC(){for(const e of br())e.close?.()}function QC(){for(const e of br())e.minimize?.()}function JC(){for(const e of br())e.normalize?.()}function XC(){for(const e of br())e.maximize?.()}function pm(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=Si()?.snapshot(),s=r?.scale&&r.scale>0?r.scale:1,i=r?.x??0,o=r?.y??0;return{x:-i/s,y:-o/s,w:t/s,h:n/s}}function mm(e,t,n,r,s){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(s)}px`}function ZC(){const e=fm(br()).reverse();if(e.length===0)return;const t=pm(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),s=Math.min(480,Math.max(240,t.h*.6));e.forEach((i,o)=>{i.normalize?.(),mm(i,t.x+24+o*n,t.y+24+o*n,r,s)}),gm()}function gm(){Sp(),j1()}function e_(){const e=fm(br()).reverse();if(e.length===0)return;const n=GC(e.length,pm(),8);e.forEach((r,s)=>{r.normalize?.();const i=n[s];i&&mm(r,i.x,i.y,i.w,i.h)}),gm()}function ti(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function t_(e,t){const{from:n,to:r,name:s,mode:i}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:s,createdAt:Date.now(),pluginUrls:i==="empty"?[]:[...o?.pluginUrls??[]]}),i==="empty")return r;if(i==="all"){const c=await e.tables.where("workspaceId").equals(n).toArray(),d=new Map;for(const y of c){const k=ti();d.set(y.id,k),await e.tables.put({...y,id:k,workspaceId:r,updatedAt:Date.now()})}for(const[y,k]of d){const x=await e.rows.where("tableId").equals(y).toArray();x.length>0&&await e.rows.bulkPut(x.map(_=>({..._,id:ti(),tableId:k})))}const p=await e.viewTemplates.where("workspaceId").equals(n).toArray(),m=new Map;for(const y of p){const k=ti();m.set(y.id,k),await e.viewTemplates.put({...y,id:k,workspaceId:r})}const w=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const y of w){const k=d.get(y.tableId);k&&await e.viewInstances.put({...y,id:ti(),workspaceId:r,tableId:k,templateId:m.get(y.templateId)??y.templateId})}}const a=await e.settings.where("workspaceId").equals(n).toArray();for(const c of a)await e.settings.put({...c,key:Et(r,c.name),workspaceId:r,name:c.name});return r}async function bm(e,t){return(await e.tables.where("workspaceId").equals(t).toArray()).map(r=>r.id)}async function wm(e,t){const n=await bm(e,t),r=n.length===0?0:await e.rows.where("tableId").anyOf(n).count();return{tables:n.length,rows:r,views:await e.viewInstances.where("workspaceId").equals(t).count(),templates:await e.viewTemplates.where("workspaceId").equals(t).count(),settings:await e.settings.where("workspaceId").equals(t).count()}}async function n_(e,t){const n=await wm(e,t),r=await bm(e,t);if(r.length>0){const a=await e.rows.where("tableId").anyOf(r).toArray();await e.rows.bulkDelete(a.map(c=>c.id)),await e.tables.bulkDelete(r)}const s=await e.viewInstances.where("workspaceId").equals(t).toArray();await e.viewInstances.bulkDelete(s.map(a=>a.id));const i=await e.viewTemplates.where("workspaceId").equals(t).toArray();await e.viewTemplates.bulkDelete(i.map(a=>a.id));const o=await e.settings.where("workspaceId").equals(t).toArray();return await e.settings.bulkDelete(o.map(a=>a.key).filter(a=>typeof a=="string")),await e.workspaces.delete(t),n}const Ld="Clone everything (tables, views, settings)",Pd="Clone settings only (no data)",r_="Empty workspace";function bo(e){const t=new URLSearchParams(location.search);t.set("space",e),location.assign(`${location.pathname}?${t.toString()}${location.hash}`)}function s_(){const e=new URLSearchParams(location.search);e.delete("space");const t=e.toString();location.assign(`${location.pathname}${t?`?${t}`:""}${location.hash}`)}async function i_(){const e=await ee(),t=(await e.store.workspaces.find()).filter(r=>r.id!==e.workspaceId);if(t.length===0){e.api.ui.dialogs.toast("This is the only workspace.",{kind:"info",title:"Workspaces"});return}const n=await e.api.ui.dialogs.choice("Open which workspace?",t.map(r=>r.name),"Switch workspace");n&&bo(n)}async function ym(){const e=await ee(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[Ld,Pd,r_],"New workspace");if(!n)return;const r=n===Ld?"all":n===Pd?"settings":"empty";await t_(gi(),{from:e.workspaceId,to:km(t.trim()),name:t.trim(),mode:r}),bo(t.trim())}async function vm(){const e=await ee(),t=await e.store.workspaces.find();let n=t.find(c=>c.id===e.workspaceId)??t[0];if(!n)return;if(t.length>1){const c=await e.api.ui.dialogs.choice("Delete which workspace? Everything in it goes with it.",t.map(d=>d.name),"Delete workspace");if(!c)return;n=t.find(d=>d.name===c)??n}const r=await wm(gi(),n.id),s=[`${r.tables} table${r.tables===1?"":"s"}`,`${r.rows.toLocaleString()} row${r.rows===1?"":"s"}`,`${r.views} view${r.views===1?"":"s"}`,`${r.settings} setting${r.settings===1?"":"s"}`].join(", "),i=t.length===1;if(!await e.api.ui.dialogs.confirm(`Delete the workspace "${n.name}"?

${s} will be deleted. This cannot be undone.`+(i?`

It is the only workspace, so an empty one will be created in its place.`:""),"Delete workspace"))return;if(await n_(gi(),n.id),h_(n.id),n.id!==e.workspaceId){e.api.ui.dialogs.toast(`Deleted "${n.name}" (${s}).`,{kind:"success",title:"Workspace deleted"});return}const a=t.find(c=>c.id!==n.id);a?bo(a.name):s_()}function o_(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:QC},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:JC},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:XC},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:ZC},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:e_},{id:"windows:close-all",title:"Close all windows",icon:"close",run:YC}];for(const i of t)e.ui.registerCommand({id:i.id,title:i.title,group:"Windows",icon:i.icon,run:i.run});const n=[{id:"workspace:switch",title:"Switch workspace",icon:"swap_horiz",keywords:["space","open","change"],run:i_},{id:"workspace:new",title:"New workspace",icon:"add",keywords:["space","add","create","clone"],run:ym},{id:"workspace:delete",title:"Delete workspace",icon:"delete",keywords:["space","remove","drop"],run:vm}];for(const i of n)e.ui.registerCommand({id:i.id,title:i.title,group:"Workspace",icon:i.icon,keywords:i.keywords,run:i.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",s="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:i=>i.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(s,"_blank","noopener")}})}async function a_(e){if(_t==="url-plugins"||_t==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],s=[];for(const i of r)try{const o=await e.store.plugins.findOne(i);if(o&&o.enabled===!1)continue;let a=o?.cachedBody??"";if(a)l_(e,i,a);else{try{a=await $m(i)}catch(p){await e.store.plugins.upsert({url:i,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${p.message}`}),e.events.emit("plugin:error",{url:i,phase:"fetch",error:p});continue}await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),cachedBody:a})}const c=new Blob([a],{type:"text/javascript"}),d=URL.createObjectURL(c);try{const p=await import(d);await p.init?.(e),s.push({url:i,mod:p})}finally{setTimeout(()=>URL.revokeObjectURL(d),5e3)}}catch(o){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:i,phase:"init",error:o})}return async()=>{for(const{url:i,mod:o}of s)try{await o.load?.(e)}catch(a){await e.store.plugins.upsert({url:i,enabled:!0,lastFetched:Date.now(),lastError:`load: ${a.message}`}),e.events.emit("plugin:error",{url:i,phase:"load",error:a})}}}async function $m(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function l_(e,t,n){return(async()=>{try{const r=await $m(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let ba=null;function ee(){return ba||(ba=c_()),ba}async function c_(){let e="";const t=window.easydb?.store?sb(window.easydb.store,()=>e):Zg(await gi(),()=>e),n=ib(),r=ab(),s=new Map;t.tables.subscribe(_=>{s.clear();for(const A of _)s.set(A.id,A)});const i=tb(t.tables),o={...i,insert:async _=>{const A=await i.insert(_);return s.set(A.id,A),A},upsert:async _=>{const A=await i.upsert(_);return s.set(A.id,A),A}};let a=null;const c={get backend(){if(!a)throw new Error("[host] row-source ctx used before app init completed");return a.backend},events:n,settings:t.settings,workspaceId:()=>w},d=eb({base:{...t,tables:o},providers:r.rowSources,tableById:_=>s.get(_),ctx:c}),p=u_(),m=await d.workspaces.find();let w;if(p){const _=km(p),A=m.find(D=>D.id===_||D.name===p);A?w=A.id:w=(await d.workspaces.insert({id:_,name:p,createdAt:Date.now(),pluginUrls:[]})).id}else{const _=d_(),A=_?m.find(D=>D.id===_):void 0;A?w=A.id:m.length>0?w=m[0].id:w=(await d.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}e=w,f_(w);const y=gb({store:d,events:n,registries:r,workspaceId:()=>w});a=y,o_(y),n.on("import:after",({source:_,tableId:A,rowCount:D})=>{_!=="datasette"&&y.store.tables.findOne(A).then(G=>{y.ui.dialogs.toast(`Imported ${D} row${D===1?"":"s"} into "${G?.name??A}".`,{kind:"success",title:_.toUpperCase()+" import"})})}),n.on("plugin:error",({url:_,phase:A,error:D})=>{y.ui.dialogs.toast(`[${A}] ${D?.message??String(D)}`,{kind:"error",title:`Plugin: ${_}`})});const k=await VC(y),x=await a_(y);return queueMicrotask(async()=>{n.emit("app:ready",{workspaceId:w}),await k(),await x(),_t==="all-optional"?y.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):_t==="url-plugins"&&y.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),_t!=="off"&&y.ui.openPluginManager()}),globalThis.api=y,{store:d,events:n,workspaceId:w,registries:r,api:y}}function u_(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Ai="eda:lastWorkspaceId";function d_(){try{return globalThis.localStorage?.getItem(Ai)??null}catch{return null}}function h_(e){try{globalThis.localStorage?.getItem(Ai)===e&&globalThis.localStorage.removeItem(Ai)}catch{}}function f_(e){try{globalThis.localStorage?.setItem(Ai,e)}catch{}}function km(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var p_=Object.defineProperty,m_=Object.getOwnPropertyDescriptor,wo=(e,t,n,r)=>{for(var s=r>1?void 0:r?m_(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&p_(t,n,s),s};let dr=class extends xe{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Jt("csv-paste",this.dialogEl)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=fr(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await ee(),s=crypto.randomUUID();await r.store.tables.insert({id:s,workspaceId:r.workspaceId,name:t,code:Me(t),columns:n.columns,view:"table",updatedAt:Date.now()});const i=n.rows.map(o=>({id:crypto.randomUUID(),tableId:s,data:o,updatedAt:Date.now()}));await r.store.rows(s).bulkInsert(i),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return $`
      <dialog @cancel=${this.close} @keydown=${pt}>
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
            ${this.errorMsg?$`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};dr.styles=[ft,Se`
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
    `];wo([z()],dr.prototype,"name",2);wo([z()],dr.prototype,"text",2);wo([z()],dr.prototype,"errorMsg",2);dr=wo([Oe("csv-paste-dialog")],dr);function Md(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.validate?t.validate=e.validate:delete t.validate,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}const xm={unique:{get:e=>!!e.unique,set:e=>({unique:e?!0:void 0})},notnull:{get:e=>!!e.notnull,set:e=>({notnull:e?!0:void 0})},visible:{get:e=>!e.hidden,set:e=>({hidden:e?void 0:!0})},sortable:{get:e=>e.sortable!==!1,set:e=>({sortable:e?void 0:!1})},filterable:{get:e=>e.filterable!==!1,set:e=>({filterable:e?void 0:!1})}};function Sm(e,t){return e.every(n=>xm[t].get(n))}function g_(e,t){const n=!Sm(e,t);return e.map(r=>({...r,...xm[t].set(n)}))}function oc(e){if(e.source?.type!=="projection")return null;const t=e.source.config;return t&&Array.isArray(t.sources)?t:null}function b_(e,t,n,r){return{projections:t.filter(i=>{if(i.id===r)return!1;const o=oc(i);return!!o&&o.sources.some(a=>a.tableName===e)}),views:n.filter(i=>i.tableName===e)}}function w_(e,t,n){return e.sources.some(r=>r.tableName===t)?{...e,sources:e.sources.map(r=>r.tableName===t?{...r,tableName:n}:r)}:null}function Cm(e){return new Map(e.filter(t=>t.from!==t.to).map(t=>[t.from,t.to]))}function y_(e,t){if(!e||!Object.keys(e).some(s=>t.has(s)))return null;const r={};for(const[s,i]of Object.entries(e))r[t.get(s)??s]=i;return r}function v_(e,t){const n=Cm(t);if(n.size===0)return null;const r=e.columns.map(o=>n.has(o.field)?{...o,field:n.get(o.field)}:o),s=y_(e.filters,n);return r.some((o,a)=>o!==e.columns[a])||s!==null?{...e,columns:r,...s?{filters:s}:{}}:null}function $_(e,t,n){const r=Cm(n);if(r.size===0)return null;const s=new Set(e.sources.filter(c=>c.tableName===t).map(c=>c.alias));if(s.size===0)return null;const i=e.columns.map(c=>c.from.kind==="source"&&s.has(c.from.alias)&&r.has(c.from.field)?{...c,from:{...c.from,field:r.get(c.from.field)}}:c),o=e.sources.map(c=>{if(!c.join)return c;const d=s.has(c.alias),p=c.join.on.map(m=>{const w=d&&r.has(m.field)?r.get(m.field):m.field,y=s.has(m.eqAlias)&&r.has(m.eqField)?r.get(m.eqField):m.eqField;return w===m.field&&y===m.eqField?m:{...m,field:w,eqField:y}});return p.some((m,w)=>m!==c.join.on[w])?{...c,join:{...c.join,on:p}}:c});return i.some((c,d)=>c!==e.columns[d])||o.some((c,d)=>c!==e.sources[d])?{...e,columns:i,sources:o}:null}function k_(e){const t=[];return e.projections.length>0&&t.push(`${jd(e.projections.length,"projection")} (${Nd(e.projections.map(n=>n.name))})`),e.views.length>0&&t.push(`${jd(e.views.length,"view")} (${Nd(e.views.map(n=>n.name||"untitled"))})`),t.length>0?t.join(" and "):null}function jd(e,t){return`${e} ${t}${e===1?"":"s"}`}function Nd(e){const t=e.slice(0,3).map(n=>`"${n}"`);return e.length>3?`${t.join(", ")} and ${e.length-3} more`:t.join(", ")}var x_=Object.defineProperty,S_=Object.getOwnPropertyDescriptor,st=(e,t,n,r)=>{for(var s=r>1?void 0:r?S_(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&x_(t,n,s),s};const C_=["string","number","boolean","date","datetime","array"];function zd(e){return[...e.keys()].filter(t=>!ob.has(t)).sort()}function __(e,t){return t&&!e.includes(t)?[...e,t]:[...e]}async function E_(e,t,n,r){const s=await ee(),i=(await s.store.viewInstances.find()).filter(o=>o.tableId===e||o.tableName===t);for(const o of i)o.tableName!==n&&await s.store.viewInstances.patch(o.id,{tableName:n,updatedAt:Date.now()});for(const o of r?.projections??[]){const a=oc(o),c=a&&w_(a,t,n);c&&await s.store.tables.patch(o.id,{source:{type:"projection",config:c},updatedAt:Date.now()})}}async function T_(e,t,n,r){if(n.length===0)return;const s=await ee(),i=async(o,a)=>{await s.store.tables.patch(o.id,{source:{type:"projection",config:a},updatedAt:Date.now()})};for(const o of r){const a=oc(o);if(!a)continue;const c=o.id===e?v_(a,n):$_(a,t,n);c&&await i(o,c)}}function I_(e,t,n){const r=`Renaming "${e}" to "${t}" affects ${n}.

They reference this table by name, so they will be updated to point at "${t}". Continue?`,s=ot.instance;return s?s.confirm(r,"Rename table"):Promise.resolve(window.confirm(r))}let Ve=class extends xe{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.deletedFields=[],this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Jt("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await ee();if(this.rendererOptions=zd(n.registries.cellRenderers),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=zd(n.registries.cellRenderers),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await ee(),s=await r.store.tables.findOne(e);if(!s)return;this.mode="edit",this.editTableId=e,this.name=s.name,this.tableTitle=s.title??"",this.tableReadonly=!!s.readonly,this.deletedFields=[...s.deletedColumns??[]],this.columns=s.columns.map(o=>({field:o.field,label:o.label,type:o.type,renderer:o.renderer,script:o.script,validate:o.validate,max:o.max,unique:o.unique,notnull:o.notnull,hidden:o.hidden,sortable:o.sortable,filterable:o.filterable,origField:o.field,orig:o}));const i=await r.store.rows(e).find();this.previewRows=i.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.deletedFields=[],this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}touchDirty(){this.dialogEl&&yf("columns-editor",this.dialogEl)}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}],this.touchDirty()}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e),this.touchDirty()}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[s]=r.splice(e,1);r.splice(n,0,s),this.columns=r,this.touchDirty()}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),s=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=s?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const s=[...this.columns],[i]=s.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),s.splice(o,0,i),this.columns=s,this.touchDirty()}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n),this.touchDirty()}renderFlagHead(e,t,n){const r=Sm(this.columns,e);return $`<button
      type="button"
      class="flag-label flag-head"
      title=${`${n} — click to ${r?"clear":"set"} every column`}
      aria-pressed=${r?"true":"false"}
      @click=${()=>{this.columns=g_(this.columns,e),this.touchDirty()}}
    >
      ${t}
    </button>`}async runColumnAction(e){this.errorMsg="";const t=await ee();try{const n=await e.run(t.api,{columns:this.columns.map(s=>Md(s)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(s=>[s.field,s]));this.columns=this.columns.map(s=>{const i=r.get(s.field);return i?{...s,label:i.label??s.label,type:i.type??s.type,renderer:i.renderer,script:i.script,validate:i.validate}:s}),this.touchDirty()}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=nt.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async editValidate(e){const t=nt.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.validate??"",n.label||n.field,"validate");r!==null&&this.patchColumn(e,{validate:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await ee(),r=(await n.store.tables.find()).filter(d=>d.workspaceId===n.workspaceId),s=t.toLowerCase(),i=r.find(d=>d.name.toLowerCase()===s&&d.id!==this.editTableId);if(i){this.errorMsg=`A table named "${i.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const d of this.columns){const p=d.field.trim();if(!p){this.errorMsg="Column field names cannot be empty.";return}if(o.has(p)){this.errorMsg=`Duplicate column field: ${p}`;return}o.add(p)}const a=this.tableTitle.trim(),c=this.columns.map(Md);if(this.mode==="edit"&&this.editTableId){const d=this.editTableId,p=await n.store.tables.findOne(d),m=new Map((p?.columns??[]).map(T=>[T.field,T])),w=c.filter(T=>{const H=m.get(T.field);return T.unique&&!H?.unique||T.notnull&&!H?.notnull||T.max&&T.max>0&&T.max!==H?.max});if(w.length>0){const T=await n.store.rows(d).find(),H=O_(w,T);if(H.length>0){this.errorMsg=`Cannot save: ${H.length} existing ${H.length===1?"row violates":"rows violate"} the new constraints.
${H.slice(0,5).join(`
`)}${H.length>5?`
…and ${H.length-5} more.`:""}`;return}}const y=new Set(this.columns.map(T=>T.origField).filter(T=>!!T)),k=new Set(c.map(T=>T.field)),x=(p?.columns??[]).map(T=>T.field).filter(T=>!y.has(T)),_=p?.deletedColumns??[],A=[...new Set([..._,...x])].filter(T=>!k.has(T));let D=null;if(p&&p.name!==t){const T=(await n.store.viewInstances.find()).filter(J=>J.workspaceId===n.workspaceId);D=b_(p.name,r,T,d);const H=k_(D);if(H&&!await I_(p.name,t,H))return}const G={name:t,title:a,columns:c,readonly:this.tableReadonly,updatedAt:Date.now()};(A.length>0||_.length>0)&&(G.deletedColumns=A);const M=p?.name;await n.store.tables.patch(d,G);const re=x.filter(T=>!k.has(T)),W=this.fieldRenames();if(!p?.source&&(re.length>0||W.length>0)){const T=await n.store.rows(d).find();for(const H of T){let J=!1,de={...H.data};const ge=mu(de,W);ge&&(de=ge,J=!0);for(const q of re)q in de&&(delete de[q],J=!0);J&&await n.store.rows(d).patch(H.id,{data:de,updatedAt:Date.now()})}}await T_(d,M??t,W,r),M!==void 0&&M!==t&&await E_(d,M,t,D)}else await n.store.tables.insert({id:Ce(),workspaceId:n.workspaceId,name:t,title:a,code:Me(t),columns:c,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return $`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(s=>({...s,data:mu(s.data,e)??s.data})):this.previewRows,n=new Map;for(const s of this.columns){if(!s.unique)continue;const i=new Set,o=new Set;for(const a of t){const c=a.data[s.field];c==null||c===""||(i.has(c)&&o.add(c),i.add(c))}n.set(s.field,o)}const r=this.columns.filter(s=>!s.hidden);return $`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${r.map(s=>$`<th title=${s.field}>${s.label||s.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(s=>$`
                <tr>
                  ${r.map(i=>{const o=s.data[i.field],a=R_(i,o,n.get(i.field));return $`<td class=${a?"violation":""} title=${a??""}>${A_(o)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renderDeleted(){return this.mode!=="edit"||this.deletedFields.length===0?"":$`<div class="deleted-cols">
      <span class="hint">Removed earlier:</span>
      ${this.deletedFields.map(e=>$`<button type="button" class="add" title=${`Add the column "${e}" back`} @click=${()=>this.restoreColumn(e)}>↩ ${e}</button>`)}
      <div class="hint">These are not re-added by a refresh. Restoring one adds the column back empty — its values were removed with it, unless the table refreshes from a source.</div>
    </div>`}restoreColumn(e){this.deletedFields=this.deletedFields.filter(t=>t!==e),!this.columns.some(t=>t.field.trim().toLowerCase()===e.toLowerCase())&&(this.columns=[...this.columns,{field:e,label:e,type:"string"}])}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return $`
      <dialog @cancel=${this.close} @keydown=${pt}>
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
              ${this.columns.map((n,r)=>{const s=this.dragSrcIdx===r,i=this.dropTargetIdx===r,o=i&&this.dropEdge==="before"?" drop-before":i&&this.dropEdge==="after"?" drop-after":"";return $`
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
                      ${C_.map(a=>$`<option value=${a} ?selected=${a===n.type}>${a}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${a=>{const c=a.target.value;this.patchColumn(r,{renderer:c||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${__(this.rendererOptions,n.renderer).map(a=>$`<option value=${a} ?selected=${a===n.renderer}>${a}</option>`)}
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
            ${this.columnActions.map(n=>$`<button type="button" class="add" title=${n.tooltip??n.label} @click=${()=>void this.runColumnAction(n)}>${n.label}</button>`)}
            ${this.renderDeleted()} ${this.renameDetected()?$`<div class="hint">Existing rows are re-keyed on save, so renamed fields keep their data.</div>`:""}
            ${this.errorMsg?$`<div class="error">${this.errorMsg}</div>`:""} ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Ve.styles=[zt,ft,Se`
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
    `];st([z()],Ve.prototype,"mode",2);st([z()],Ve.prototype,"editTableId",2);st([z()],Ve.prototype,"name",2);st([z()],Ve.prototype,"tableTitle",2);st([z()],Ve.prototype,"tableReadonly",2);st([z()],Ve.prototype,"deletedFields",2);st([z()],Ve.prototype,"columns",2);st([z()],Ve.prototype,"errorMsg",2);st([z()],Ve.prototype,"noticeMsg",2);st([z()],Ve.prototype,"dragSrcIdx",2);st([z()],Ve.prototype,"dropTargetIdx",2);st([z()],Ve.prototype,"dropEdge",2);st([z()],Ve.prototype,"previewRows",2);st([z()],Ve.prototype,"rendererOptions",2);st([z()],Ve.prototype,"columnActions",2);Ve=st([Oe("new-table-dialog")],Ve);function A_(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function R_(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const s=Number(t);if(!Number.isFinite(s))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const s=new Date(String(t));if(Number.isNaN(s.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function O_(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((s,i)=>{const o=s.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${i+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((s,i)=>{const o=s.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${i+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${i+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const s=new Map;t.forEach((i,o)=>{const a=i.data[r.field];a==null||a===""||(s.has(a)?n.push(`Row ${o+1}: ${r.label} duplicates row ${s.get(a)+1} ("${String(a)}").`):s.set(a,o))})}return n}var D_=Object.defineProperty,L_=Object.getOwnPropertyDescriptor,lt=(e,t,n,r)=>{for(var s=r>1?void 0:r?L_(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&D_(t,n,s),s};const P_='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',M_=$`<span class="mi sm">extension</span>`,Fd="plugin:catalogUrls";function ni(){return new URL("/easydbaccess3/plugins/catalog.json",location.origin).toString()}const j_=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],_m=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],N_=new Map(_m),z_={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let Qe=class extends xe{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[ni()],this.activeCatalogUrl=ni(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e)}async open(){const e=await ee(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(i=>[i.url,i]));const r=await e.store.settings.findOne(Fd),s=Array.isArray(r?.value)?r.value.filter(i=>typeof i=="string"):[];this.catalogUrls=s.length>0?s:[ni()],this.activeCatalogUrl=this.catalogUrls[0]??ni(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(s=>({...s,absUrl:new URL(s.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await ee()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const s=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const i=await fetch(s,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const o=await i.json(),a=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=a.map(c=>({...c,absUrl:new URL(c.url,s).toString()})),this.serverCatalogError=null}catch(i){this.serverCatalog=[],this.serverCatalogError=i.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ee()).store.settings.upsert({name:Fd,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ee()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await ee();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await ee(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await ee();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await ee(),r=wi(e),s=this.records.get(r);await n.store.plugins.upsert({...s??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:s?.lastFetched??0}),this.records=new Map(this.records.set(r,{...s,url:r,enabled:t,lastFetched:s?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ee()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ee();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const s=new Blob([r],{type:"text/javascript"}),i=URL.createObjectURL(s);try{const a=await import(i);await a.init?.(t.api),await a.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(i),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(a=>[a.url,a])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",s){const i=s?s[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return $`
      <button type="button" class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`} title=${i} aria-pressed=${t!==void 0} @click=${n}>
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of KC){const s=r.fixed?!0:this.records.get(wi(n))?.enabled!==!1,i=!r.fixed&&_t==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:s,status:s&&!i?"enabled":"disabled",fixed:!!r.fixed,...i?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),s=this.records.get(n.absUrl),i=r?["available","installed"]:["available"],o=e.get(n.id),a=s?.enabled!==!1,c=r&&_t!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...i]):new Set(i),enabled:a,...r?{status:a&&!c?"enabled":"disabled"}:{},...c?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const s=this.records.get(n),i=s?.lastFetched?new Date(s.lastFetched).toLocaleString():"never",o=s?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:s?.lastError??`Last fetched: ${i}`,metaIsError:!!s?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&_t==="off"?"enabled":"disabled",..._t!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[c,d]of this.filterStates)(d==="on"?n:r).push(c);const s=[],i=[];for(const[c,d]of this.typeFilters)(d==="on"?s:i).push(c);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,a=e.filter(c=>!(n.length&&!n.some(d=>c.categories.has(d))||r.some(d=>c.categories.has(d))||s.length&&!(c.type&&s.includes(c.type))||c.type&&i.includes(c.type)||o&&c.status!==o));return t?a.filter(c=>[c.id,c.name,c.type,c.meta,c.author].some(d=>d?.toLowerCase().includes(t))):a}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return $`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}>
        <span class="row-icon">${e.icon?Xn(e.icon):M_}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?$`<span class="row-id">${e.id}</span>`:""}${e.type?$`<span class="row-type" title="Plugin type">${N_.get(e.type)??e.type}</span>`:""}${e.skipped?$`<span class="row-skipped" title="Safe mode kept this plugin from loading this session — your saved setting is unchanged">skipped</span>`:""}
          </div>
          ${e.meta?$`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?$`<a class="row-repo" href=${e.repo} target="_blank" rel="noopener noreferrer" title="View source on GitHub">${Xn(P_)}</a>`:$`<span></span>`}
        ${e.fixed?$`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?$`<label class="switch" title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}>
                <input type="checkbox" .checked=${e.enabled} @change=${s=>this.onRowToggle(e,s.target.checked)} />
                <span class="slider"></span>
              </label>`:$`<span></span>`}
        ${r?$`<button type="button" class="install" ?disabled=${e.installing} @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}>
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:n?$`<button type="button" class="uninstall" @click=${()=>this.removePlugin(e.url)}><span class="mi sm">delete</span> Uninstall</button>`:$`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return $`
      <dialog @cancel=${this.close} @keydown=${pt}>
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
            ${_t!=="off"?$`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${_t==="all-optional"?$`<code>?safemode</code> skipped every URL plugin and every optional built-in for this session.`:$`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The toggles below still show — and change — your saved settings, which safe mode never touches. Reload
                  without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${j_.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",z_)}
              </div>
              <div class="search">
                <input type="text" placeholder="Search plugins…" .value=${this.search} @input=${t=>this.search=t.target.value} />
              </div>
            </div>

            <div class="type-filters">
              <span class="filter-label">Type</span>
              ${_m.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
            </div>

            <div class="catalog-source">
              <input
                type="text"
                list="catalog-url-options"
                .value=${this.activeCatalogUrl}
                @input=${t=>this.activeCatalogUrl=t.target.value}
                placeholder="Catalog source URL"
              />
              <datalist id="catalog-url-options">${this.catalogUrls.map(t=>$`<option value=${t}></option>`)}</datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}><span class="mi sm">refresh</span> Reload</button>
            </div>
            ${this.catalogError?$`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?$`<div class="meta err">Server registry unavailable: ${this.serverCatalogError}</div>`:""}

            <div class="plugin-list">${e.length===0?$`<p class="hint">No plugins match the current filters/search.</p>`:""} ${e.map(t=>this.renderRow(t))}</div>

            <div class="add">
              <input type="text" placeholder="https://example.com/my-plugin.js" .value=${this.addUrl} @input=${t=>this.addUrl=t.target.value} />
              <button type="submit" class="primary"><span class="mi sm">add</span> Add</button>
            </div>
          </div>
        </form>
      </dialog>
    `}};Qe.styles=[zt,ft,Se`
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
    `];lt([z()],Qe.prototype,"urls",2);lt([z()],Qe.prototype,"records",2);lt([z()],Qe.prototype,"addUrl",2);lt([z()],Qe.prototype,"catalog",2);lt([z()],Qe.prototype,"catalogError",2);lt([z()],Qe.prototype,"serverCatalog",2);lt([z()],Qe.prototype,"serverCatalogError",2);lt([z()],Qe.prototype,"installing",2);lt([z()],Qe.prototype,"catalogUrls",2);lt([z()],Qe.prototype,"activeCatalogUrl",2);lt([z()],Qe.prototype,"search",2);lt([z()],Qe.prototype,"filterStates",2);lt([z()],Qe.prototype,"typeFilters",2);lt([z()],Qe.prototype,"statusFilter",2);Qe=lt([Oe("plugin-manager-dialog")],Qe);var F_=Object.defineProperty,U_=Object.getOwnPropertyDescriptor,Xt=(e,t,n,r)=>{for(var s=r>1?void 0:r?U_(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&F_(t,n,s),s};const Fr="__general__";let dt=class extends xe{constructor(){super(...arguments),this.tabs=[],this.active=Fr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const s=r.names.map(i=>`“${i}”`).join(", ");this.secretError=`“${r.field.label}” references ${s}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&mt(this.dialogEl,e),this.dialogEl&&Jt("settings",this.dialogEl)}async open(){const e=await ee(),t=[...e.registries.settings];this.tabs=t.map(([i,o])=>({id:i,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},s={};for(const i of this.tabs)for(const o of i.fields){const a=`${i.id}:${o.key}`,c=await e.api.settings.placement(i.id,o.key);c==="user"?(r[a]=bi(a),s[a]="user"):c==="workspace"?(r[a]=(await e.store.settings.findOne(a))?.value,s[a]="workspace"):(r[a]=o.default,s[a]=o.scope??"workspace")}this.values=r,this.placements=s,this.secretsText=Xr(),this.active=Fr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&dt.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(tr(this.secretsText)));return dt.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await ee()).api.settings.set(e.id,t.key,n,this.placements[r]),vx(e.id,t.key)}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,s=n?"user":"workspace";this.placements={...this.placements,[r]:s},await(await ee()).api.settings.set(e.id,t.key,this.values[r],s)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,eh(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ee();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return $`<textarea .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)}></textarea>`;case"number":return $`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${s=>{const i=s.target.value;this.setValue(e,t,i===""?void 0:Number(i))}}
        />`;case"boolean":return $`<label class="scope"><input type="checkbox" .checked=${!!r} @change=${s=>this.setValue(e,t,s.target.checked)} /> enabled</label>`;case"date":return $`<input type="date" .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)} />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return $`<div class="radios">
          ${(t.options??[]).map(s=>$`<label><input type="radio" name=${n} .checked=${r===s} @change=${()=>this.setValue(e,t,s)} />${s}</label>`)}
        </div>`;case"selection":{const s=Array.isArray(r)?r:[];return $`<div class="checks">
          ${(t.options??[]).map(i=>$`<label
                ><input
                  type="checkbox"
                  .checked=${s.includes(i)}
                  @change=${o=>{const c=o.target.checked?[...s,i]:s.filter(d=>d!==i);this.setValue(e,t,c)}}
                />${i}</label
              >`)}
        </div>`}case"string":default:return $`<input type="text" .value=${String(r??"")} @change=${s=>this.setValue(e,t,s.target.value)} />`}}renderSecretControl(e,t,n){const r=Object.keys(tr(this.secretsText)),s=dt.rawSecret(n)||this.missingRefs(n).length>0;return $`<div class="secret-row">
      <input
        type="text"
        class=${s?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${i=>this.setValue(e,t,i.target.value)}
      />
      ${r.length>0?$`<select
            title="Insert a secret reference"
            @change=${i=>{const o=i.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),i.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(i=>$`<option value=${i}>${i}</option>`)}
          </select>`:ie}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),s=this.openHelp===n;return $`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?$`<button
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
      ${r&&s?$`<div class="help-panel">
            ${t.help?$`<p>${t.help}</p>`:ie} ${t.helpUrl?$`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer">${t.helpLinkLabel||B_(t.helpUrl)}</a>`:ie}
          </div>`:ie}
      ${this.renderControl(e,t)} ${t.description?$`<p class="desc">${t.description}</p>`:ie}
    </div>`}renderGeneral(){return $`
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
    `}renderPanel(){if(this.active===Fr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?$`
      <h3>${e.name}</h3>
      ${e.fields.length===0?$`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:ie}render(){return $`
      <dialog @cancel=${this.attemptClose} @keydown=${pt}>
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
          ${this.secretError?$`<div class="secret-error" role="alert">${this.secretError}</div>`:ie}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button type="button" class=${this.active===Fr?"active":""} @click=${()=>this.active=Fr}>General</button>
                ${this.tabs.map(e=>$`<button type="button" class=${this.active===e.id?"active":""} @click=${()=>this.active=e.id}>${e.name}</button>`)}
              </nav>
              <section class="panel">${this.renderPanel()}</section>
            </div>
          </div>
        </form>
      </dialog>
    `}};dt.styles=[zt,ft,Se`
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
    `];Xt([z()],dt.prototype,"tabs",2);Xt([z()],dt.prototype,"active",2);Xt([z()],dt.prototype,"values",2);Xt([z()],dt.prototype,"placements",2);Xt([z()],dt.prototype,"secretsText",2);Xt([z()],dt.prototype,"workspaceTitle",2);Xt([z()],dt.prototype,"secretError",2);Xt([z()],dt.prototype,"openHelp",2);dt=Xt([Oe("settings-dialog")],dt);function B_(e){try{return new URL(e).host}catch{return e}}const Em=5,wa="palette:recent",Tm="Recent";function q_(e,t,n=Em){return[t,...e.filter(r=>r!==t)].slice(0,n)}function H_(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,Em):[]}function K_(e,t){const n=t instanceof Set?t:new Set(t);return e.filter(r=>n.has(r))}function V_(e,t){if(t.length===0)return e;const n=new Map(e.map(i=>[i.id,i])),r=[];for(const i of t){const o=n.get(i);o&&r.push({...o,group:Tm})}if(r.length===0)return e;const s=new Set(r.map(i=>i.id));return[...r,...e.filter(i=>!s.has(i.id))]}var W_=Object.defineProperty,G_=Object.getOwnPropertyDescriptor,wr=(e,t,n,r)=>{for(var s=r>1?void 0:r?G_(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&W_(t,n,s),s};const Y_={[Tm]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function Ud(e){return Y_[e]??3}function Q_(e){return e?e.trimStart().startsWith("<svg")?$`<span class="cmd-svg">${nl(e)}</span>`:$`<span class="mi sm">${e}</span>`:$`<span class="mi sm">chevron_right</span>`}let hn=class extends xe{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.commandFallbacks=[],this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await ee();this.api=e.api,this.commandFallbacks=e.registries.commandFallbacks,this.recentIds=H_((await e.api.store.settings.findOne(wa))?.value),this.items=await this.buildItems(),await this.forgetVanished(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await ee(),t=e.api,n=[];for(const i of e.registries.commands)n.push({id:i.id,title:i.title,group:i.group??"Commands",...i.icon?{icon:i.icon}:{},haystack:[i.title,i.group,...i.keywords??[]].join(" ").toLowerCase(),run:()=>i.run(t)});for(const i of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${i.id}`,title:i.label,group:"Actions",...i.icon?{icon:i.icon}:{},haystack:`${i.label} ${i.tooltip??""}`.toLowerCase(),run:()=>i.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((i,o)=>i.name.localeCompare(o.name));for(const i of r)n.push({id:`goto:${i.id}`,title:`Go to: ${i.name}`,group:"Tables",icon:"table_chart",haystack:`${i.name} go to table`.toLowerCase(),run:()=>{Ql(i.id)}});const s=await t.store.viewInstances.find({workspaceId:e.workspaceId});s.sort((i,o)=>i.name.localeCompare(o.name));for(const i of s)n.push({id:`goto-view:${i.id}`,title:`Go to view: ${i.name}`,group:"Views",icon:"view_quilt",haystack:`${i.name} go to view`.toLowerCase(),run:async()=>{await ec(i.id)}});return V_(n,this.recentIds).map((i,o)=>({it:i,i:o})).sort((i,o)=>Ud(i.it.group)-Ud(o.it.group)||i.i-o.i).map(({it:i})=>i)}get filtered(){const e=this.search.trim();if(!e)return this.items;const t=this.items.filter(n=>n.haystack.includes(e.toLowerCase()));return t.length>0?t:this.fallbackItems(e)}fallbackItems(e){const t=this.api;if(!t)return[];const n=[];for(const r of this.commandFallbacks){let s;try{s=r(e)}catch{continue}s&&n.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:s.title.toLowerCase(),run:()=>s.run(t)})}return n}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async forgetVanished(){const e=K_(this.recentIds,this.items.map(t=>t.id));if(e.length!==this.recentIds.length){this.recentIds=e;try{await this.api?.store.settings.upsert({name:wa,value:e})}catch{}}}async remember(e){this.recentIds=q_(this.recentIds,e);try{await this.api?.store.settings.upsert({name:wa,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return $`
      <dialog @keydown=${this.onKeydown} @click=${this.onDialogClick} @close=${()=>this.search=""}>
        <div class="search-row">
          <span class="mi">search</span>
          <input type="text" placeholder="Type a command…  (windows, go to, import, export)" .value=${this.search} @input=${this.onInput} />
        </div>
        <div class="list">
          ${e.length===0?$`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const s=n.group!==t?(t=n.group,n.group):null;return $`
                  ${s?$`<div class="group-head">${s}</div>`:""}
                  <div class=${`item${r===this.selected?" sel":""}`} @mousemove=${()=>this.selected=r} @click=${()=>this.execute(n)}>
                    ${Q_(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};hn.styles=[zt,Se`
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
    `];wr([z()],hn.prototype,"search",2);wr([z()],hn.prototype,"items",2);wr([z()],hn.prototype,"selected",2);wr([Kt("dialog")],hn.prototype,"dialogEl",2);wr([Kt("input")],hn.prototype,"inputEl",2);hn=wr([Oe("command-palette-dialog")],hn);var J_=Object.defineProperty,X_=Object.getOwnPropertyDescriptor,yo=(e,t,n,r)=>{for(var s=r>1?void 0:r?X_(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&J_(t,n,s),s};let hr=class extends xe{constructor(){super(...arguments),this.label="",this.fraction=void 0,this.detail="",this.onProgress=e=>{const t=e.detail;this.label=t.label??"",this.fraction=t.fraction,this.detail=t.detail??""}}connectedCallback(){super.connectedCallback(),document.addEventListener(Ra,this.onProgress)}disconnectedCallback(){document.removeEventListener(Ra,this.onProgress),super.disconnectedCallback()}render(){if(!this.label)return ie;const e=this.fraction==null?null:Math.round(Math.min(1,Math.max(0,this.fraction))*100);return $`
      <div class="wrap" role="status" aria-live="polite">
        <span class="label">${this.label}</span>
        <span class="bar">
          <span class="fill ${e==null?"":"determinate"}" style=${e==null?"":`width:${e}%`}></span>
        </span>
        ${this.detail?$`<span class="detail">${this.detail}</span>`:ie}
        <span class="pct">${e==null?"":`${e}%`}</span>
      </div>
    `}};hr.styles=Se`
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
  `;yo([z()],hr.prototype,"label",2);yo([z()],hr.prototype,"fraction",2);yo([z()],hr.prototype,"detail",2);hr=yo([Oe("app-progress")],hr);var Z_=Object.defineProperty,eE=Object.getOwnPropertyDescriptor,Im=(e,t,n,r)=>{for(var s=r>1?void 0:r?eE(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Z_(t,n,s),s};let Ri=class extends xe{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ee();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await _p(),await U1(),xC()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?$``:$`<div class="empty">No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the page, or click <strong>+ New Table</strong> above.</div>`}};Ri.styles=Se`
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
  `;Im([z()],Ri.prototype,"tables",2);Ri=Im([Oe("table-list")],Ri);var tE=Object.defineProperty,nE=Object.getOwnPropertyDescriptor,ac=(e,t,n,r)=>{for(var s=r>1?void 0:r?nE(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&tE(t,n,s),s};let os=class extends xe{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ee();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);t&&bo(t.name)}render(){return $`
      <select .value=${this.current} @change=${e=>this.switchWorkspace(e.target.value)}>
        ${this.workspaces.map(e=>$`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${ym} title="New workspace">
        <span class="mi sm">add</span>
      </button>
      <button @click=${vm} title="Delete workspace">
        <span class="mi sm">delete</span>
      </button>
    `}};os.styles=[zt,Se`
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
    `];ac([z()],os.prototype,"workspaces",2);ac([z()],os.prototype,"current",2);os=ac([Oe("workspace-selector")],os);var Bd=Object.freeze,Am=Object.defineProperty,rE=Object.getOwnPropertyDescriptor,Ot=(e,t,n,r)=>{for(var s=r>1?void 0:r?rE(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&Am(t,n,s),s},sE=(e,t)=>Bd(Am(e,"raw",{value:Bd(e.slice())})),qd;Ng();qg();function Hd(e){return e?e.trimStart().startsWith("<svg")?$`<span class="icon-svg" aria-hidden="true">${nl(e)}</span>`:$`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let ht=class extends xe{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.onSetSearch=e=>{this.searchQuery=e.detail?.query??"",this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery&&(this.searchOpen=!0),this.broadcastSearch(this.searchQuery)},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Vd(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{const t=e.relatedTarget;t&&(this.contains(t)||oE()?.contains(t))||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Vd(e))return;e.preventDefault();const t=await ee(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(s){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:s})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),document.addEventListener("dragover",this.onDragOver),document.addEventListener("dragleave",this.onDragLeave),document.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("easydb:set-search",this.onSetSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragover",this.onDragOver),document.removeEventListener("dragleave",this.onDragLeave),document.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("easydb:set-search",this.onSetSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ee();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",iE(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return $` <button class="icon-btn" title=${e.tooltip??e.label} aria-label=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>${Hd(e.icon)}</button> `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return $`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${Hd(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return $(qd||(qd=sE([`
      <header>
        <strong
          >`,`
          <a class="version-link" href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md" target="_blank" rel="noopener" title="View the changelog on GitHub"
            ><span class="version">v0.0.342</span></a
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?$`<span class="search-wrap">
              <input class="search" type="search" placeholder="search all tables…" .value=${this.searchQuery} @input=${this.onSearchInput} @blur=${this.closeSearchOnBlur} />
              ${this.searchQuery.length>0?$`<button class="search-clear" title="Clear search" aria-label="Clear search" @mousedown=${this.clearSearch}>×</button>`:""}
            </span>`:$`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              aria-label="Search"
              @click=${this.openSearch}
            >
              <span class="mi" aria-hidden="true">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};ht.styles=[zt,Se`
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
    `];Ot([Kt("new-table-dialog")],ht.prototype,"dialog",2);Ot([Kt("csv-paste-dialog")],ht.prototype,"csvPasteDialog",2);Ot([Kt("plugin-manager-dialog")],ht.prototype,"pluginManagerDialog",2);Ot([Kt("settings-dialog")],ht.prototype,"settingsDialog",2);Ot([Kt("command-palette-dialog")],ht.prototype,"commandPaletteDialog",2);Ot([Kt("input.search")],ht.prototype,"searchInput",2);Ot([z()],ht.prototype,"footerButtons",2);Ot([z()],ht.prototype,"headerButtons",2);Ot([z()],ht.prototype,"searchQuery",2);Ot([z()],ht.prototype,"searchOpen",2);Ot([z()],ht.prototype,"workspaceTitle",2);ht=Ot([Oe("app-shell")],ht);const Kd=document.title;function iE(e){const t=e.trim();document.title=t?`${t} — ${Kd}`:Kd}function oE(){return document.getElementById("easydb-panels")}function Vd(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ee(),Re(()=>Promise.resolve().then(()=>Pp),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{ie as A,Se as a,$ as b,pt as c,ft as d,vE as g,xe as i,mt as m,z as r,Oe as t,Jt as w};
//# sourceMappingURL=index-DckjK0u1.js.map
